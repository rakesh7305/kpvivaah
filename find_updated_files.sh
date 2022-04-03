ROOT_DIR_ORI=/home/rakesh/Projects/kpvivaah_ori
PROJ_DIR=/home/rakesh/Projects

ROOT_DIR=/home/rakesh/Projects/kpvivaah
TMP_FILE=/tmp/dir.$$

cd $ROOT_DIR

find . -type d | grep -v git | grep -v main > $TMP_FILE

cat $TMP_FILE | while read line
do
	#echo $line	
	cd $ROOT_DIR/$line
	find . -maxdepth 1 -type f -name "*.js" | while read f
	do
		echo $f
		diff $ROOT_DIR/$line/$f $ROOT_DIR_ORI/$line/$f > /dev/null 2>&1
		###diff -q $ROOT_DIR/$line/$f $ROOT_DIR_ORI/$line/$f 
		CODE=$?
		if [ $CODE -eq 1 ]
		then
			cp -p $ROOT_DIR_ORI/$line/$f $ROOT_DIR/$line/$f
			#ls -l $ROOT_DIR_ORI/$line/$f $ROOT_DIR/$line/$f
		fi

	done
	cd -
done

## NEW FILES

cat $TMP_FILE | while read line
do
	#echo $line	
	cd $ROOT_DIR_ORI/$line
	find . -maxdepth 1 -type f -name "*.js" | while read f
	do
		if [ ! -f $ROOT_DIR/$line/$f ]
		then
			#ls -l $ROOT_DIR/$line/$f $ROOT_DIR_ORI/$line/$f
			echo "NEW: $ROOT_DIR_ORI/$line/$f"
			cp -p $ROOT_DIR_ORI/$line/$f $ROOT_DIR/$line/$f
		fi

	done
	cd -
done

#rm -rf $TMP_FILE

cd $ROOT_DIR_ORI

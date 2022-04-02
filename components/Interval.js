import React, { useContext, useEffect, useState } from 'react';

export const Interval =
  (delay = 0) =>
    /** @param {() => void} callback */ callback =>
      useEffect(() => {
        const id = setInterval(callback, delay);

        return () => clearInterval(id);
      }, [callback]);
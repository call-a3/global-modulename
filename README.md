global-modulename
=================

[![Build Status](https://travis-ci.org/call-a3/global-modulename.svg?branch=master)](https://travis-ci.org/call-a3/global-modulename)
[![Dependency Status](https://david-dm.org/call-a3/global-modulename.svg)](https://david-dm.org/call-a3/global-modulename) [![devDependency Status](https://david-dm.org/call-a3/global-modulename/dev-status.svg)](https://david-dm.org/call-a3/global-modulename#info=devDependencies)

Transform that allows for a new statically-compiled global: ```__modulename```.

This global is resolved to the name of the containing (sub)module. 
Mostly this will resolve to the basename of the containing file with the extension stripped off, unless the file is named ```index.*```, in which case the name of the parent directory is used.
---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEVHRFI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaRusNRVDTUsZ%2Bn5CSKW7zujffOGiBeYsVVhYwYXLrwAiEA7x1HJ5ZxUiWWRW%2BLO2X0eK1L4XSnMtythkRBZ7zo01oqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7aGdIrfpUyHF9N7yrcA5c31MGnMcXAnbDGW9RzR5vS0gXGeBmVX80x2iLZbDz2Xik%2Bfyx2cocnmbG%2B8HxQ2r3wqQ3U%2FsBgQtvbqAiH4AfDarp4IviolCgkhLPeRDkX%2B191YACDTasxtRXj37Re4TbK4kP7prsIlx%2BEKEn%2BT2jGeCgA%2FM8OYpAdjch8Ks%2BcvsQFd%2Bi%2BgFBrROk8voou0PX%2F37SBR1dmhqLg7mqMqUbfsqYpKZFeyd%2BHUfeJ7q1eCbFAUawLzRhW56YyDYMd8z%2FSGU3CZ79njpfwq3JAFYONPMGtpnM3fuDaNmt2HonYeiOaXR%2FbnME%2Brt7acf603sJgbw4194aam%2Bfnl%2BptPCa0qzWL0O6Qotmd%2BnMSttSjFClsXri8WwjZvvAPq2DIKiQnJYhNZeLw8huAnw0TIeQR%2BfHQ80GX%2FmfoX%2BVkUSRa0tr9xqbZfHNvdpzbVUwunvJ9dPmalCm4og%2BYRYV0CXCd4G3ayD8taXiq1pCVJ5bEEHYMEKAdWggfT6lXttZkt3Rgj38o13%2FfK%2B9ELUgAFjpLYyrd5JcJSYO41eTAzUIL86toXcFCVvFebVMrAjdULwbZA8GTpFT0LJQ4A4G%2BcqBnOh97vGjtysyAG7IVmH0JKRLBqYr7trndz8uwMPjzkL4GOqUBZXJqQt8dVZ%2FkPF8mTSQ8Vh7dN3ddCWuWpI438xm9jOsQiooCY9ixBgwouJw5Snt5hoc%2Fvm5lysKiP3yV9pz5JBkDd6y9BYHEsVaSLEsMESwd2mUWuQiygQ3CAbQaBC7hc0m%2BIAJ1LddQwrdeOT7upkj2lqRweT7IRIqPohDuQO0sYFrBzbXXc53ErSQp%2BpAVSAQzyo8juRBw69We1NcPeNJ3Yy%2BW&X-Amz-Signature=02430ec23ed3dce5ac423b42d544d7327b5021328e86b4086a952d46bb7f2901&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEVHRFI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaRusNRVDTUsZ%2Bn5CSKW7zujffOGiBeYsVVhYwYXLrwAiEA7x1HJ5ZxUiWWRW%2BLO2X0eK1L4XSnMtythkRBZ7zo01oqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7aGdIrfpUyHF9N7yrcA5c31MGnMcXAnbDGW9RzR5vS0gXGeBmVX80x2iLZbDz2Xik%2Bfyx2cocnmbG%2B8HxQ2r3wqQ3U%2FsBgQtvbqAiH4AfDarp4IviolCgkhLPeRDkX%2B191YACDTasxtRXj37Re4TbK4kP7prsIlx%2BEKEn%2BT2jGeCgA%2FM8OYpAdjch8Ks%2BcvsQFd%2Bi%2BgFBrROk8voou0PX%2F37SBR1dmhqLg7mqMqUbfsqYpKZFeyd%2BHUfeJ7q1eCbFAUawLzRhW56YyDYMd8z%2FSGU3CZ79njpfwq3JAFYONPMGtpnM3fuDaNmt2HonYeiOaXR%2FbnME%2Brt7acf603sJgbw4194aam%2Bfnl%2BptPCa0qzWL0O6Qotmd%2BnMSttSjFClsXri8WwjZvvAPq2DIKiQnJYhNZeLw8huAnw0TIeQR%2BfHQ80GX%2FmfoX%2BVkUSRa0tr9xqbZfHNvdpzbVUwunvJ9dPmalCm4og%2BYRYV0CXCd4G3ayD8taXiq1pCVJ5bEEHYMEKAdWggfT6lXttZkt3Rgj38o13%2FfK%2B9ELUgAFjpLYyrd5JcJSYO41eTAzUIL86toXcFCVvFebVMrAjdULwbZA8GTpFT0LJQ4A4G%2BcqBnOh97vGjtysyAG7IVmH0JKRLBqYr7trndz8uwMPjzkL4GOqUBZXJqQt8dVZ%2FkPF8mTSQ8Vh7dN3ddCWuWpI438xm9jOsQiooCY9ixBgwouJw5Snt5hoc%2Fvm5lysKiP3yV9pz5JBkDd6y9BYHEsVaSLEsMESwd2mUWuQiygQ3CAbQaBC7hc0m%2BIAJ1LddQwrdeOT7upkj2lqRweT7IRIqPohDuQO0sYFrBzbXXc53ErSQp%2BpAVSAQzyo8juRBw69We1NcPeNJ3Yy%2BW&X-Amz-Signature=f58f00d45e135df2f2a33ddbeb2d965cb279fde8c61e360e4e1613d056bf5f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEVHRFI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaRusNRVDTUsZ%2Bn5CSKW7zujffOGiBeYsVVhYwYXLrwAiEA7x1HJ5ZxUiWWRW%2BLO2X0eK1L4XSnMtythkRBZ7zo01oqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7aGdIrfpUyHF9N7yrcA5c31MGnMcXAnbDGW9RzR5vS0gXGeBmVX80x2iLZbDz2Xik%2Bfyx2cocnmbG%2B8HxQ2r3wqQ3U%2FsBgQtvbqAiH4AfDarp4IviolCgkhLPeRDkX%2B191YACDTasxtRXj37Re4TbK4kP7prsIlx%2BEKEn%2BT2jGeCgA%2FM8OYpAdjch8Ks%2BcvsQFd%2Bi%2BgFBrROk8voou0PX%2F37SBR1dmhqLg7mqMqUbfsqYpKZFeyd%2BHUfeJ7q1eCbFAUawLzRhW56YyDYMd8z%2FSGU3CZ79njpfwq3JAFYONPMGtpnM3fuDaNmt2HonYeiOaXR%2FbnME%2Brt7acf603sJgbw4194aam%2Bfnl%2BptPCa0qzWL0O6Qotmd%2BnMSttSjFClsXri8WwjZvvAPq2DIKiQnJYhNZeLw8huAnw0TIeQR%2BfHQ80GX%2FmfoX%2BVkUSRa0tr9xqbZfHNvdpzbVUwunvJ9dPmalCm4og%2BYRYV0CXCd4G3ayD8taXiq1pCVJ5bEEHYMEKAdWggfT6lXttZkt3Rgj38o13%2FfK%2B9ELUgAFjpLYyrd5JcJSYO41eTAzUIL86toXcFCVvFebVMrAjdULwbZA8GTpFT0LJQ4A4G%2BcqBnOh97vGjtysyAG7IVmH0JKRLBqYr7trndz8uwMPjzkL4GOqUBZXJqQt8dVZ%2FkPF8mTSQ8Vh7dN3ddCWuWpI438xm9jOsQiooCY9ixBgwouJw5Snt5hoc%2Fvm5lysKiP3yV9pz5JBkDd6y9BYHEsVaSLEsMESwd2mUWuQiygQ3CAbQaBC7hc0m%2BIAJ1LddQwrdeOT7upkj2lqRweT7IRIqPohDuQO0sYFrBzbXXc53ErSQp%2BpAVSAQzyo8juRBw69We1NcPeNJ3Yy%2BW&X-Amz-Signature=1ae0e56c3fa79d76560ec5cb0fa19c1031a710e8bebac853342b6f8ff202d525&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEVHRFI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaRusNRVDTUsZ%2Bn5CSKW7zujffOGiBeYsVVhYwYXLrwAiEA7x1HJ5ZxUiWWRW%2BLO2X0eK1L4XSnMtythkRBZ7zo01oqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7aGdIrfpUyHF9N7yrcA5c31MGnMcXAnbDGW9RzR5vS0gXGeBmVX80x2iLZbDz2Xik%2Bfyx2cocnmbG%2B8HxQ2r3wqQ3U%2FsBgQtvbqAiH4AfDarp4IviolCgkhLPeRDkX%2B191YACDTasxtRXj37Re4TbK4kP7prsIlx%2BEKEn%2BT2jGeCgA%2FM8OYpAdjch8Ks%2BcvsQFd%2Bi%2BgFBrROk8voou0PX%2F37SBR1dmhqLg7mqMqUbfsqYpKZFeyd%2BHUfeJ7q1eCbFAUawLzRhW56YyDYMd8z%2FSGU3CZ79njpfwq3JAFYONPMGtpnM3fuDaNmt2HonYeiOaXR%2FbnME%2Brt7acf603sJgbw4194aam%2Bfnl%2BptPCa0qzWL0O6Qotmd%2BnMSttSjFClsXri8WwjZvvAPq2DIKiQnJYhNZeLw8huAnw0TIeQR%2BfHQ80GX%2FmfoX%2BVkUSRa0tr9xqbZfHNvdpzbVUwunvJ9dPmalCm4og%2BYRYV0CXCd4G3ayD8taXiq1pCVJ5bEEHYMEKAdWggfT6lXttZkt3Rgj38o13%2FfK%2B9ELUgAFjpLYyrd5JcJSYO41eTAzUIL86toXcFCVvFebVMrAjdULwbZA8GTpFT0LJQ4A4G%2BcqBnOh97vGjtysyAG7IVmH0JKRLBqYr7trndz8uwMPjzkL4GOqUBZXJqQt8dVZ%2FkPF8mTSQ8Vh7dN3ddCWuWpI438xm9jOsQiooCY9ixBgwouJw5Snt5hoc%2Fvm5lysKiP3yV9pz5JBkDd6y9BYHEsVaSLEsMESwd2mUWuQiygQ3CAbQaBC7hc0m%2BIAJ1LddQwrdeOT7upkj2lqRweT7IRIqPohDuQO0sYFrBzbXXc53ErSQp%2BpAVSAQzyo8juRBw69We1NcPeNJ3Yy%2BW&X-Amz-Signature=31eb89679e661157849139ba5e4cd6f4c5dc7827d77f2f26f6ff24068dadfd94&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEVHRFI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaRusNRVDTUsZ%2Bn5CSKW7zujffOGiBeYsVVhYwYXLrwAiEA7x1HJ5ZxUiWWRW%2BLO2X0eK1L4XSnMtythkRBZ7zo01oqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7aGdIrfpUyHF9N7yrcA5c31MGnMcXAnbDGW9RzR5vS0gXGeBmVX80x2iLZbDz2Xik%2Bfyx2cocnmbG%2B8HxQ2r3wqQ3U%2FsBgQtvbqAiH4AfDarp4IviolCgkhLPeRDkX%2B191YACDTasxtRXj37Re4TbK4kP7prsIlx%2BEKEn%2BT2jGeCgA%2FM8OYpAdjch8Ks%2BcvsQFd%2Bi%2BgFBrROk8voou0PX%2F37SBR1dmhqLg7mqMqUbfsqYpKZFeyd%2BHUfeJ7q1eCbFAUawLzRhW56YyDYMd8z%2FSGU3CZ79njpfwq3JAFYONPMGtpnM3fuDaNmt2HonYeiOaXR%2FbnME%2Brt7acf603sJgbw4194aam%2Bfnl%2BptPCa0qzWL0O6Qotmd%2BnMSttSjFClsXri8WwjZvvAPq2DIKiQnJYhNZeLw8huAnw0TIeQR%2BfHQ80GX%2FmfoX%2BVkUSRa0tr9xqbZfHNvdpzbVUwunvJ9dPmalCm4og%2BYRYV0CXCd4G3ayD8taXiq1pCVJ5bEEHYMEKAdWggfT6lXttZkt3Rgj38o13%2FfK%2B9ELUgAFjpLYyrd5JcJSYO41eTAzUIL86toXcFCVvFebVMrAjdULwbZA8GTpFT0LJQ4A4G%2BcqBnOh97vGjtysyAG7IVmH0JKRLBqYr7trndz8uwMPjzkL4GOqUBZXJqQt8dVZ%2FkPF8mTSQ8Vh7dN3ddCWuWpI438xm9jOsQiooCY9ixBgwouJw5Snt5hoc%2Fvm5lysKiP3yV9pz5JBkDd6y9BYHEsVaSLEsMESwd2mUWuQiygQ3CAbQaBC7hc0m%2BIAJ1LddQwrdeOT7upkj2lqRweT7IRIqPohDuQO0sYFrBzbXXc53ErSQp%2BpAVSAQzyo8juRBw69We1NcPeNJ3Yy%2BW&X-Amz-Signature=4366a7ac7a380a48be2859d0272ba844f6d4317d8368f4a1ddeaf6c44995aae9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEVHRFI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaRusNRVDTUsZ%2Bn5CSKW7zujffOGiBeYsVVhYwYXLrwAiEA7x1HJ5ZxUiWWRW%2BLO2X0eK1L4XSnMtythkRBZ7zo01oqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7aGdIrfpUyHF9N7yrcA5c31MGnMcXAnbDGW9RzR5vS0gXGeBmVX80x2iLZbDz2Xik%2Bfyx2cocnmbG%2B8HxQ2r3wqQ3U%2FsBgQtvbqAiH4AfDarp4IviolCgkhLPeRDkX%2B191YACDTasxtRXj37Re4TbK4kP7prsIlx%2BEKEn%2BT2jGeCgA%2FM8OYpAdjch8Ks%2BcvsQFd%2Bi%2BgFBrROk8voou0PX%2F37SBR1dmhqLg7mqMqUbfsqYpKZFeyd%2BHUfeJ7q1eCbFAUawLzRhW56YyDYMd8z%2FSGU3CZ79njpfwq3JAFYONPMGtpnM3fuDaNmt2HonYeiOaXR%2FbnME%2Brt7acf603sJgbw4194aam%2Bfnl%2BptPCa0qzWL0O6Qotmd%2BnMSttSjFClsXri8WwjZvvAPq2DIKiQnJYhNZeLw8huAnw0TIeQR%2BfHQ80GX%2FmfoX%2BVkUSRa0tr9xqbZfHNvdpzbVUwunvJ9dPmalCm4og%2BYRYV0CXCd4G3ayD8taXiq1pCVJ5bEEHYMEKAdWggfT6lXttZkt3Rgj38o13%2FfK%2B9ELUgAFjpLYyrd5JcJSYO41eTAzUIL86toXcFCVvFebVMrAjdULwbZA8GTpFT0LJQ4A4G%2BcqBnOh97vGjtysyAG7IVmH0JKRLBqYr7trndz8uwMPjzkL4GOqUBZXJqQt8dVZ%2FkPF8mTSQ8Vh7dN3ddCWuWpI438xm9jOsQiooCY9ixBgwouJw5Snt5hoc%2Fvm5lysKiP3yV9pz5JBkDd6y9BYHEsVaSLEsMESwd2mUWuQiygQ3CAbQaBC7hc0m%2BIAJ1LddQwrdeOT7upkj2lqRweT7IRIqPohDuQO0sYFrBzbXXc53ErSQp%2BpAVSAQzyo8juRBw69We1NcPeNJ3Yy%2BW&X-Amz-Signature=e0f03c2b409022e3ccbb3eccc7974813ade217013253d3af9edd87f876763beb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEVHRFI%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFaRusNRVDTUsZ%2Bn5CSKW7zujffOGiBeYsVVhYwYXLrwAiEA7x1HJ5ZxUiWWRW%2BLO2X0eK1L4XSnMtythkRBZ7zo01oqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC7aGdIrfpUyHF9N7yrcA5c31MGnMcXAnbDGW9RzR5vS0gXGeBmVX80x2iLZbDz2Xik%2Bfyx2cocnmbG%2B8HxQ2r3wqQ3U%2FsBgQtvbqAiH4AfDarp4IviolCgkhLPeRDkX%2B191YACDTasxtRXj37Re4TbK4kP7prsIlx%2BEKEn%2BT2jGeCgA%2FM8OYpAdjch8Ks%2BcvsQFd%2Bi%2BgFBrROk8voou0PX%2F37SBR1dmhqLg7mqMqUbfsqYpKZFeyd%2BHUfeJ7q1eCbFAUawLzRhW56YyDYMd8z%2FSGU3CZ79njpfwq3JAFYONPMGtpnM3fuDaNmt2HonYeiOaXR%2FbnME%2Brt7acf603sJgbw4194aam%2Bfnl%2BptPCa0qzWL0O6Qotmd%2BnMSttSjFClsXri8WwjZvvAPq2DIKiQnJYhNZeLw8huAnw0TIeQR%2BfHQ80GX%2FmfoX%2BVkUSRa0tr9xqbZfHNvdpzbVUwunvJ9dPmalCm4og%2BYRYV0CXCd4G3ayD8taXiq1pCVJ5bEEHYMEKAdWggfT6lXttZkt3Rgj38o13%2FfK%2B9ELUgAFjpLYyrd5JcJSYO41eTAzUIL86toXcFCVvFebVMrAjdULwbZA8GTpFT0LJQ4A4G%2BcqBnOh97vGjtysyAG7IVmH0JKRLBqYr7trndz8uwMPjzkL4GOqUBZXJqQt8dVZ%2FkPF8mTSQ8Vh7dN3ddCWuWpI438xm9jOsQiooCY9ixBgwouJw5Snt5hoc%2Fvm5lysKiP3yV9pz5JBkDd6y9BYHEsVaSLEsMESwd2mUWuQiygQ3CAbQaBC7hc0m%2BIAJ1LddQwrdeOT7upkj2lqRweT7IRIqPohDuQO0sYFrBzbXXc53ErSQp%2BpAVSAQzyo8juRBw69We1NcPeNJ3Yy%2BW&X-Amz-Signature=aed14b0f9c93d51a42debd7a551a190004b0f6e372b2c1af6809dc5ad02b8a71&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

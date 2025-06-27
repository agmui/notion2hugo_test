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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETMA3X4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FlW7EdMTCQ9fA73DAXnOsIgF77PUm%2FLG7Z0hVk4IJ%2FAiEA0Kr1HMT34RQI8c6fWrEs5D4jo2u4in0%2FUz9mJG1Kp1kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBu4MxGwxNF3BHOmDyrcA%2FnZWuDqwehGqU7Eu4jK9juNMTLpZQ7XHR4LtVwGvRUsl2or2HDuxzprufCuukx39H0vTEXkKapZ2WErAce%2FK0TJ8n0WztbCxX9kMOXCnG0zubNsmH4IMDGEfXJLhy9pxlADqod4dKpx5aF0wIc5kt4eJIr%2FOv83slKht4reAACmk%2FcXsirgUDi%2BpTp9axL8EChot53kZ7XC%2B6z5P0SIPIkySIvxIm7CYqgFxofisLgVvZzADGv%2BGSDL4o0rexEIvqp%2F3qqHTjjS89XnXTTA6ncQH%2FAP%2F9Vyj6bMxPzkN1y37nhC3PmcYR8wbizs0vkp%2FN67UH552ElFNF2eUagMj%2BtCxjDEIFCR68MpBbZKjdLp9lQrvB1bC%2FNeHDwZMbr2ZZczWv3xBa5qkgGxs%2F047yyt7jAFaYUINZS75Yx5QSXFEiuUb%2FrHzAjb%2Bqigf5BwFR0XXp%2FFU2V%2BdGkzuP1iYyBbkn4oCnntsR6R7b8MWhCWUbO%2FXVVSXrZ5gYR71frK9jp2B0ZWG8bXTtZKqNsHZyZEcAZYezv2bRf87erH%2FX1Jp6ttG3C0PmBGD3%2ByOzBw2HPu8ZNAdPjYetFALIF%2FU77F%2BtNGbLAYBlWXEFGsqorOzRQ1yGG9zc5BKIC9MJ6k%2B8IGOqUBwzuRgEn6VtOF%2B8d947oysJWhGcAcx%2FGROfPbKC%2Bn1aPw1%2FEengV5Cf6x7gO5pD%2BIvkjH3Te7zmtGZr%2BM1tAU2gfU5QlIlX6wzOGXP%2BjuWXxlcbA5lESWSGn0kCfDJsC2bSZ3UA4Q0mmgiGKWVGjJBlmH%2Bo6TqApsCjl%2BLzF5OdK2DO80MqlI8BRVfxLw20rX52kv8bfCY7dPUitcHVLCXnMKW30c&X-Amz-Signature=21d05b1663158a4c97462cf08292d1ff4ac86e72f18a74ef9e99370ff603653b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETMA3X4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FlW7EdMTCQ9fA73DAXnOsIgF77PUm%2FLG7Z0hVk4IJ%2FAiEA0Kr1HMT34RQI8c6fWrEs5D4jo2u4in0%2FUz9mJG1Kp1kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBu4MxGwxNF3BHOmDyrcA%2FnZWuDqwehGqU7Eu4jK9juNMTLpZQ7XHR4LtVwGvRUsl2or2HDuxzprufCuukx39H0vTEXkKapZ2WErAce%2FK0TJ8n0WztbCxX9kMOXCnG0zubNsmH4IMDGEfXJLhy9pxlADqod4dKpx5aF0wIc5kt4eJIr%2FOv83slKht4reAACmk%2FcXsirgUDi%2BpTp9axL8EChot53kZ7XC%2B6z5P0SIPIkySIvxIm7CYqgFxofisLgVvZzADGv%2BGSDL4o0rexEIvqp%2F3qqHTjjS89XnXTTA6ncQH%2FAP%2F9Vyj6bMxPzkN1y37nhC3PmcYR8wbizs0vkp%2FN67UH552ElFNF2eUagMj%2BtCxjDEIFCR68MpBbZKjdLp9lQrvB1bC%2FNeHDwZMbr2ZZczWv3xBa5qkgGxs%2F047yyt7jAFaYUINZS75Yx5QSXFEiuUb%2FrHzAjb%2Bqigf5BwFR0XXp%2FFU2V%2BdGkzuP1iYyBbkn4oCnntsR6R7b8MWhCWUbO%2FXVVSXrZ5gYR71frK9jp2B0ZWG8bXTtZKqNsHZyZEcAZYezv2bRf87erH%2FX1Jp6ttG3C0PmBGD3%2ByOzBw2HPu8ZNAdPjYetFALIF%2FU77F%2BtNGbLAYBlWXEFGsqorOzRQ1yGG9zc5BKIC9MJ6k%2B8IGOqUBwzuRgEn6VtOF%2B8d947oysJWhGcAcx%2FGROfPbKC%2Bn1aPw1%2FEengV5Cf6x7gO5pD%2BIvkjH3Te7zmtGZr%2BM1tAU2gfU5QlIlX6wzOGXP%2BjuWXxlcbA5lESWSGn0kCfDJsC2bSZ3UA4Q0mmgiGKWVGjJBlmH%2Bo6TqApsCjl%2BLzF5OdK2DO80MqlI8BRVfxLw20rX52kv8bfCY7dPUitcHVLCXnMKW30c&X-Amz-Signature=3d5451970be38520199bf2912fcf6baa139786868cfb86086ce576e32e859972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETMA3X4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FlW7EdMTCQ9fA73DAXnOsIgF77PUm%2FLG7Z0hVk4IJ%2FAiEA0Kr1HMT34RQI8c6fWrEs5D4jo2u4in0%2FUz9mJG1Kp1kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBu4MxGwxNF3BHOmDyrcA%2FnZWuDqwehGqU7Eu4jK9juNMTLpZQ7XHR4LtVwGvRUsl2or2HDuxzprufCuukx39H0vTEXkKapZ2WErAce%2FK0TJ8n0WztbCxX9kMOXCnG0zubNsmH4IMDGEfXJLhy9pxlADqod4dKpx5aF0wIc5kt4eJIr%2FOv83slKht4reAACmk%2FcXsirgUDi%2BpTp9axL8EChot53kZ7XC%2B6z5P0SIPIkySIvxIm7CYqgFxofisLgVvZzADGv%2BGSDL4o0rexEIvqp%2F3qqHTjjS89XnXTTA6ncQH%2FAP%2F9Vyj6bMxPzkN1y37nhC3PmcYR8wbizs0vkp%2FN67UH552ElFNF2eUagMj%2BtCxjDEIFCR68MpBbZKjdLp9lQrvB1bC%2FNeHDwZMbr2ZZczWv3xBa5qkgGxs%2F047yyt7jAFaYUINZS75Yx5QSXFEiuUb%2FrHzAjb%2Bqigf5BwFR0XXp%2FFU2V%2BdGkzuP1iYyBbkn4oCnntsR6R7b8MWhCWUbO%2FXVVSXrZ5gYR71frK9jp2B0ZWG8bXTtZKqNsHZyZEcAZYezv2bRf87erH%2FX1Jp6ttG3C0PmBGD3%2ByOzBw2HPu8ZNAdPjYetFALIF%2FU77F%2BtNGbLAYBlWXEFGsqorOzRQ1yGG9zc5BKIC9MJ6k%2B8IGOqUBwzuRgEn6VtOF%2B8d947oysJWhGcAcx%2FGROfPbKC%2Bn1aPw1%2FEengV5Cf6x7gO5pD%2BIvkjH3Te7zmtGZr%2BM1tAU2gfU5QlIlX6wzOGXP%2BjuWXxlcbA5lESWSGn0kCfDJsC2bSZ3UA4Q0mmgiGKWVGjJBlmH%2Bo6TqApsCjl%2BLzF5OdK2DO80MqlI8BRVfxLw20rX52kv8bfCY7dPUitcHVLCXnMKW30c&X-Amz-Signature=9cd44b987ca7959841224a911a625f3acbc6aebdcb0a54a29f9a24026c8c8440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETMA3X4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FlW7EdMTCQ9fA73DAXnOsIgF77PUm%2FLG7Z0hVk4IJ%2FAiEA0Kr1HMT34RQI8c6fWrEs5D4jo2u4in0%2FUz9mJG1Kp1kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBu4MxGwxNF3BHOmDyrcA%2FnZWuDqwehGqU7Eu4jK9juNMTLpZQ7XHR4LtVwGvRUsl2or2HDuxzprufCuukx39H0vTEXkKapZ2WErAce%2FK0TJ8n0WztbCxX9kMOXCnG0zubNsmH4IMDGEfXJLhy9pxlADqod4dKpx5aF0wIc5kt4eJIr%2FOv83slKht4reAACmk%2FcXsirgUDi%2BpTp9axL8EChot53kZ7XC%2B6z5P0SIPIkySIvxIm7CYqgFxofisLgVvZzADGv%2BGSDL4o0rexEIvqp%2F3qqHTjjS89XnXTTA6ncQH%2FAP%2F9Vyj6bMxPzkN1y37nhC3PmcYR8wbizs0vkp%2FN67UH552ElFNF2eUagMj%2BtCxjDEIFCR68MpBbZKjdLp9lQrvB1bC%2FNeHDwZMbr2ZZczWv3xBa5qkgGxs%2F047yyt7jAFaYUINZS75Yx5QSXFEiuUb%2FrHzAjb%2Bqigf5BwFR0XXp%2FFU2V%2BdGkzuP1iYyBbkn4oCnntsR6R7b8MWhCWUbO%2FXVVSXrZ5gYR71frK9jp2B0ZWG8bXTtZKqNsHZyZEcAZYezv2bRf87erH%2FX1Jp6ttG3C0PmBGD3%2ByOzBw2HPu8ZNAdPjYetFALIF%2FU77F%2BtNGbLAYBlWXEFGsqorOzRQ1yGG9zc5BKIC9MJ6k%2B8IGOqUBwzuRgEn6VtOF%2B8d947oysJWhGcAcx%2FGROfPbKC%2Bn1aPw1%2FEengV5Cf6x7gO5pD%2BIvkjH3Te7zmtGZr%2BM1tAU2gfU5QlIlX6wzOGXP%2BjuWXxlcbA5lESWSGn0kCfDJsC2bSZ3UA4Q0mmgiGKWVGjJBlmH%2Bo6TqApsCjl%2BLzF5OdK2DO80MqlI8BRVfxLw20rX52kv8bfCY7dPUitcHVLCXnMKW30c&X-Amz-Signature=00d352e57c1c2e427096b495f7e622ff689618e795afd0ad20839cec0b43d2a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETMA3X4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FlW7EdMTCQ9fA73DAXnOsIgF77PUm%2FLG7Z0hVk4IJ%2FAiEA0Kr1HMT34RQI8c6fWrEs5D4jo2u4in0%2FUz9mJG1Kp1kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBu4MxGwxNF3BHOmDyrcA%2FnZWuDqwehGqU7Eu4jK9juNMTLpZQ7XHR4LtVwGvRUsl2or2HDuxzprufCuukx39H0vTEXkKapZ2WErAce%2FK0TJ8n0WztbCxX9kMOXCnG0zubNsmH4IMDGEfXJLhy9pxlADqod4dKpx5aF0wIc5kt4eJIr%2FOv83slKht4reAACmk%2FcXsirgUDi%2BpTp9axL8EChot53kZ7XC%2B6z5P0SIPIkySIvxIm7CYqgFxofisLgVvZzADGv%2BGSDL4o0rexEIvqp%2F3qqHTjjS89XnXTTA6ncQH%2FAP%2F9Vyj6bMxPzkN1y37nhC3PmcYR8wbizs0vkp%2FN67UH552ElFNF2eUagMj%2BtCxjDEIFCR68MpBbZKjdLp9lQrvB1bC%2FNeHDwZMbr2ZZczWv3xBa5qkgGxs%2F047yyt7jAFaYUINZS75Yx5QSXFEiuUb%2FrHzAjb%2Bqigf5BwFR0XXp%2FFU2V%2BdGkzuP1iYyBbkn4oCnntsR6R7b8MWhCWUbO%2FXVVSXrZ5gYR71frK9jp2B0ZWG8bXTtZKqNsHZyZEcAZYezv2bRf87erH%2FX1Jp6ttG3C0PmBGD3%2ByOzBw2HPu8ZNAdPjYetFALIF%2FU77F%2BtNGbLAYBlWXEFGsqorOzRQ1yGG9zc5BKIC9MJ6k%2B8IGOqUBwzuRgEn6VtOF%2B8d947oysJWhGcAcx%2FGROfPbKC%2Bn1aPw1%2FEengV5Cf6x7gO5pD%2BIvkjH3Te7zmtGZr%2BM1tAU2gfU5QlIlX6wzOGXP%2BjuWXxlcbA5lESWSGn0kCfDJsC2bSZ3UA4Q0mmgiGKWVGjJBlmH%2Bo6TqApsCjl%2BLzF5OdK2DO80MqlI8BRVfxLw20rX52kv8bfCY7dPUitcHVLCXnMKW30c&X-Amz-Signature=de943a3e8fdca78c752edbf99f3cc6133b6f40a796265ea16b9e4c5e591f7dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETMA3X4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FlW7EdMTCQ9fA73DAXnOsIgF77PUm%2FLG7Z0hVk4IJ%2FAiEA0Kr1HMT34RQI8c6fWrEs5D4jo2u4in0%2FUz9mJG1Kp1kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBu4MxGwxNF3BHOmDyrcA%2FnZWuDqwehGqU7Eu4jK9juNMTLpZQ7XHR4LtVwGvRUsl2or2HDuxzprufCuukx39H0vTEXkKapZ2WErAce%2FK0TJ8n0WztbCxX9kMOXCnG0zubNsmH4IMDGEfXJLhy9pxlADqod4dKpx5aF0wIc5kt4eJIr%2FOv83slKht4reAACmk%2FcXsirgUDi%2BpTp9axL8EChot53kZ7XC%2B6z5P0SIPIkySIvxIm7CYqgFxofisLgVvZzADGv%2BGSDL4o0rexEIvqp%2F3qqHTjjS89XnXTTA6ncQH%2FAP%2F9Vyj6bMxPzkN1y37nhC3PmcYR8wbizs0vkp%2FN67UH552ElFNF2eUagMj%2BtCxjDEIFCR68MpBbZKjdLp9lQrvB1bC%2FNeHDwZMbr2ZZczWv3xBa5qkgGxs%2F047yyt7jAFaYUINZS75Yx5QSXFEiuUb%2FrHzAjb%2Bqigf5BwFR0XXp%2FFU2V%2BdGkzuP1iYyBbkn4oCnntsR6R7b8MWhCWUbO%2FXVVSXrZ5gYR71frK9jp2B0ZWG8bXTtZKqNsHZyZEcAZYezv2bRf87erH%2FX1Jp6ttG3C0PmBGD3%2ByOzBw2HPu8ZNAdPjYetFALIF%2FU77F%2BtNGbLAYBlWXEFGsqorOzRQ1yGG9zc5BKIC9MJ6k%2B8IGOqUBwzuRgEn6VtOF%2B8d947oysJWhGcAcx%2FGROfPbKC%2Bn1aPw1%2FEengV5Cf6x7gO5pD%2BIvkjH3Te7zmtGZr%2BM1tAU2gfU5QlIlX6wzOGXP%2BjuWXxlcbA5lESWSGn0kCfDJsC2bSZ3UA4Q0mmgiGKWVGjJBlmH%2Bo6TqApsCjl%2BLzF5OdK2DO80MqlI8BRVfxLw20rX52kv8bfCY7dPUitcHVLCXnMKW30c&X-Amz-Signature=b227fef4f62432984b678d4f1f4cb279cd4ebc0b8b983b52dfb0ac7386402052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETMA3X4%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FlW7EdMTCQ9fA73DAXnOsIgF77PUm%2FLG7Z0hVk4IJ%2FAiEA0Kr1HMT34RQI8c6fWrEs5D4jo2u4in0%2FUz9mJG1Kp1kq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBu4MxGwxNF3BHOmDyrcA%2FnZWuDqwehGqU7Eu4jK9juNMTLpZQ7XHR4LtVwGvRUsl2or2HDuxzprufCuukx39H0vTEXkKapZ2WErAce%2FK0TJ8n0WztbCxX9kMOXCnG0zubNsmH4IMDGEfXJLhy9pxlADqod4dKpx5aF0wIc5kt4eJIr%2FOv83slKht4reAACmk%2FcXsirgUDi%2BpTp9axL8EChot53kZ7XC%2B6z5P0SIPIkySIvxIm7CYqgFxofisLgVvZzADGv%2BGSDL4o0rexEIvqp%2F3qqHTjjS89XnXTTA6ncQH%2FAP%2F9Vyj6bMxPzkN1y37nhC3PmcYR8wbizs0vkp%2FN67UH552ElFNF2eUagMj%2BtCxjDEIFCR68MpBbZKjdLp9lQrvB1bC%2FNeHDwZMbr2ZZczWv3xBa5qkgGxs%2F047yyt7jAFaYUINZS75Yx5QSXFEiuUb%2FrHzAjb%2Bqigf5BwFR0XXp%2FFU2V%2BdGkzuP1iYyBbkn4oCnntsR6R7b8MWhCWUbO%2FXVVSXrZ5gYR71frK9jp2B0ZWG8bXTtZKqNsHZyZEcAZYezv2bRf87erH%2FX1Jp6ttG3C0PmBGD3%2ByOzBw2HPu8ZNAdPjYetFALIF%2FU77F%2BtNGbLAYBlWXEFGsqorOzRQ1yGG9zc5BKIC9MJ6k%2B8IGOqUBwzuRgEn6VtOF%2B8d947oysJWhGcAcx%2FGROfPbKC%2Bn1aPw1%2FEengV5Cf6x7gO5pD%2BIvkjH3Te7zmtGZr%2BM1tAU2gfU5QlIlX6wzOGXP%2BjuWXxlcbA5lESWSGn0kCfDJsC2bSZ3UA4Q0mmgiGKWVGjJBlmH%2Bo6TqApsCjl%2BLzF5OdK2DO80MqlI8BRVfxLw20rX52kv8bfCY7dPUitcHVLCXnMKW30c&X-Amz-Signature=68ee05a665424366d835da5d973a653ea6bff90bebd67e2a9c6e937e094404e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

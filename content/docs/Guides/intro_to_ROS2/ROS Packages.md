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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKMHUI2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZEwg1JeFCpeF4S6tQkHTOsRdHR92%2B0v8LijHJK4JkQIgVZBkzp5lKWaC8xjvPMsttKTDjtykMp97scjg3%2BgtXi4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLEd%2FypIDGTJPSUPSrcAz9SYfx4YUCExIN3d641cG22zhF61hIoia%2FSvt4pYRBnyDTnVd0dVr%2F6pqVOByJ3iCih9sD823I4vlwmGVOCs9eapsvgdvz7YMFWixjEfBwJURw3vWyghKdPIQOKYVJfmjp%2BoZoQ2d2D5aA1wkRzTnBBF%2F%2FaSnto2gge39xg%2FAtZzO6oPOWN8ycWlN3sZ%2FWKh0n0Q%2FhCzZ%2B2vag9c9ojDtRl8T6Fe6XVhl1bEQrUbwsS9gm2Kx6S%2Buz7SX4yFf8F6NDr4p5iw70WT0Hn7DAPq17SuvrPnToJVOz3lABioEhvMw%2FjfK8q%2FVlYELFkcZJo0jcTHOa38zLklhKggq9rUJgxBNueksm7%2FFwinTPnSNcHLeeMuFTbK8G2vvPmMQ4uWmqEm3bzbC7pJNXgzS08cfwS0KW60I%2BC%2FvIGkFx%2FnvaisLuqp0mWuHkNy8mmV9IPdDODHiXeiigg6jIFr86vCKIhgMMLseB6VIQ8QSx5HljAolOF8nqor0hGqPXNTX6whgLlXmLIcc10vXcSuMVf5qEtkYUGrFOBWboRiGG5JgLaq54tpwl4Odi0BKnklg1u3PV1Ar%2B3TlM4dt34Mn0oPxqZu3m2AnE6CHhRt5Fu8TNW1kR%2FCNUm1wTDCU9AMOy3rL0GOqUBelhhAKqcWSUOxQtFY2xq7dkeyjXrPaaOlOGqwkfVdrexTzL6kgSWxGuJIqs1tgH%2BjcLXblQ88acLPHcSJ2C4qeBHCs0KynwYI3Br7ZOKg98VDP3WsmCivwaXYTCCQ8bWBBxkGAz%2BHkqK%2Fts1958f2jM8GIlsSN3SuSgEBLrhFqLBeWJFFziuYrJEM1iullWm48kj9B4dvHL6Z1riOpAiH4bnh90E&X-Amz-Signature=0cb4e74256abe0cf5446f51b28a2d3a2c9716baf039e065e70ab64e74caf464e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKMHUI2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZEwg1JeFCpeF4S6tQkHTOsRdHR92%2B0v8LijHJK4JkQIgVZBkzp5lKWaC8xjvPMsttKTDjtykMp97scjg3%2BgtXi4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLEd%2FypIDGTJPSUPSrcAz9SYfx4YUCExIN3d641cG22zhF61hIoia%2FSvt4pYRBnyDTnVd0dVr%2F6pqVOByJ3iCih9sD823I4vlwmGVOCs9eapsvgdvz7YMFWixjEfBwJURw3vWyghKdPIQOKYVJfmjp%2BoZoQ2d2D5aA1wkRzTnBBF%2F%2FaSnto2gge39xg%2FAtZzO6oPOWN8ycWlN3sZ%2FWKh0n0Q%2FhCzZ%2B2vag9c9ojDtRl8T6Fe6XVhl1bEQrUbwsS9gm2Kx6S%2Buz7SX4yFf8F6NDr4p5iw70WT0Hn7DAPq17SuvrPnToJVOz3lABioEhvMw%2FjfK8q%2FVlYELFkcZJo0jcTHOa38zLklhKggq9rUJgxBNueksm7%2FFwinTPnSNcHLeeMuFTbK8G2vvPmMQ4uWmqEm3bzbC7pJNXgzS08cfwS0KW60I%2BC%2FvIGkFx%2FnvaisLuqp0mWuHkNy8mmV9IPdDODHiXeiigg6jIFr86vCKIhgMMLseB6VIQ8QSx5HljAolOF8nqor0hGqPXNTX6whgLlXmLIcc10vXcSuMVf5qEtkYUGrFOBWboRiGG5JgLaq54tpwl4Odi0BKnklg1u3PV1Ar%2B3TlM4dt34Mn0oPxqZu3m2AnE6CHhRt5Fu8TNW1kR%2FCNUm1wTDCU9AMOy3rL0GOqUBelhhAKqcWSUOxQtFY2xq7dkeyjXrPaaOlOGqwkfVdrexTzL6kgSWxGuJIqs1tgH%2BjcLXblQ88acLPHcSJ2C4qeBHCs0KynwYI3Br7ZOKg98VDP3WsmCivwaXYTCCQ8bWBBxkGAz%2BHkqK%2Fts1958f2jM8GIlsSN3SuSgEBLrhFqLBeWJFFziuYrJEM1iullWm48kj9B4dvHL6Z1riOpAiH4bnh90E&X-Amz-Signature=7d5eed2cd50aebdbc3ea2b95377ba19e6315cb785f6ba940b03e235dea583277&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKMHUI2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZEwg1JeFCpeF4S6tQkHTOsRdHR92%2B0v8LijHJK4JkQIgVZBkzp5lKWaC8xjvPMsttKTDjtykMp97scjg3%2BgtXi4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLEd%2FypIDGTJPSUPSrcAz9SYfx4YUCExIN3d641cG22zhF61hIoia%2FSvt4pYRBnyDTnVd0dVr%2F6pqVOByJ3iCih9sD823I4vlwmGVOCs9eapsvgdvz7YMFWixjEfBwJURw3vWyghKdPIQOKYVJfmjp%2BoZoQ2d2D5aA1wkRzTnBBF%2F%2FaSnto2gge39xg%2FAtZzO6oPOWN8ycWlN3sZ%2FWKh0n0Q%2FhCzZ%2B2vag9c9ojDtRl8T6Fe6XVhl1bEQrUbwsS9gm2Kx6S%2Buz7SX4yFf8F6NDr4p5iw70WT0Hn7DAPq17SuvrPnToJVOz3lABioEhvMw%2FjfK8q%2FVlYELFkcZJo0jcTHOa38zLklhKggq9rUJgxBNueksm7%2FFwinTPnSNcHLeeMuFTbK8G2vvPmMQ4uWmqEm3bzbC7pJNXgzS08cfwS0KW60I%2BC%2FvIGkFx%2FnvaisLuqp0mWuHkNy8mmV9IPdDODHiXeiigg6jIFr86vCKIhgMMLseB6VIQ8QSx5HljAolOF8nqor0hGqPXNTX6whgLlXmLIcc10vXcSuMVf5qEtkYUGrFOBWboRiGG5JgLaq54tpwl4Odi0BKnklg1u3PV1Ar%2B3TlM4dt34Mn0oPxqZu3m2AnE6CHhRt5Fu8TNW1kR%2FCNUm1wTDCU9AMOy3rL0GOqUBelhhAKqcWSUOxQtFY2xq7dkeyjXrPaaOlOGqwkfVdrexTzL6kgSWxGuJIqs1tgH%2BjcLXblQ88acLPHcSJ2C4qeBHCs0KynwYI3Br7ZOKg98VDP3WsmCivwaXYTCCQ8bWBBxkGAz%2BHkqK%2Fts1958f2jM8GIlsSN3SuSgEBLrhFqLBeWJFFziuYrJEM1iullWm48kj9B4dvHL6Z1riOpAiH4bnh90E&X-Amz-Signature=0023aff09077109023ace60440416cea7543b3572ac5102752cdb6ec0a9047b7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKMHUI2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZEwg1JeFCpeF4S6tQkHTOsRdHR92%2B0v8LijHJK4JkQIgVZBkzp5lKWaC8xjvPMsttKTDjtykMp97scjg3%2BgtXi4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLEd%2FypIDGTJPSUPSrcAz9SYfx4YUCExIN3d641cG22zhF61hIoia%2FSvt4pYRBnyDTnVd0dVr%2F6pqVOByJ3iCih9sD823I4vlwmGVOCs9eapsvgdvz7YMFWixjEfBwJURw3vWyghKdPIQOKYVJfmjp%2BoZoQ2d2D5aA1wkRzTnBBF%2F%2FaSnto2gge39xg%2FAtZzO6oPOWN8ycWlN3sZ%2FWKh0n0Q%2FhCzZ%2B2vag9c9ojDtRl8T6Fe6XVhl1bEQrUbwsS9gm2Kx6S%2Buz7SX4yFf8F6NDr4p5iw70WT0Hn7DAPq17SuvrPnToJVOz3lABioEhvMw%2FjfK8q%2FVlYELFkcZJo0jcTHOa38zLklhKggq9rUJgxBNueksm7%2FFwinTPnSNcHLeeMuFTbK8G2vvPmMQ4uWmqEm3bzbC7pJNXgzS08cfwS0KW60I%2BC%2FvIGkFx%2FnvaisLuqp0mWuHkNy8mmV9IPdDODHiXeiigg6jIFr86vCKIhgMMLseB6VIQ8QSx5HljAolOF8nqor0hGqPXNTX6whgLlXmLIcc10vXcSuMVf5qEtkYUGrFOBWboRiGG5JgLaq54tpwl4Odi0BKnklg1u3PV1Ar%2B3TlM4dt34Mn0oPxqZu3m2AnE6CHhRt5Fu8TNW1kR%2FCNUm1wTDCU9AMOy3rL0GOqUBelhhAKqcWSUOxQtFY2xq7dkeyjXrPaaOlOGqwkfVdrexTzL6kgSWxGuJIqs1tgH%2BjcLXblQ88acLPHcSJ2C4qeBHCs0KynwYI3Br7ZOKg98VDP3WsmCivwaXYTCCQ8bWBBxkGAz%2BHkqK%2Fts1958f2jM8GIlsSN3SuSgEBLrhFqLBeWJFFziuYrJEM1iullWm48kj9B4dvHL6Z1riOpAiH4bnh90E&X-Amz-Signature=45610fe32e9980ef3a7e0c5502bb5d92d85bc7b010f54f33a3f11f2a3d490b7d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKMHUI2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZEwg1JeFCpeF4S6tQkHTOsRdHR92%2B0v8LijHJK4JkQIgVZBkzp5lKWaC8xjvPMsttKTDjtykMp97scjg3%2BgtXi4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLEd%2FypIDGTJPSUPSrcAz9SYfx4YUCExIN3d641cG22zhF61hIoia%2FSvt4pYRBnyDTnVd0dVr%2F6pqVOByJ3iCih9sD823I4vlwmGVOCs9eapsvgdvz7YMFWixjEfBwJURw3vWyghKdPIQOKYVJfmjp%2BoZoQ2d2D5aA1wkRzTnBBF%2F%2FaSnto2gge39xg%2FAtZzO6oPOWN8ycWlN3sZ%2FWKh0n0Q%2FhCzZ%2B2vag9c9ojDtRl8T6Fe6XVhl1bEQrUbwsS9gm2Kx6S%2Buz7SX4yFf8F6NDr4p5iw70WT0Hn7DAPq17SuvrPnToJVOz3lABioEhvMw%2FjfK8q%2FVlYELFkcZJo0jcTHOa38zLklhKggq9rUJgxBNueksm7%2FFwinTPnSNcHLeeMuFTbK8G2vvPmMQ4uWmqEm3bzbC7pJNXgzS08cfwS0KW60I%2BC%2FvIGkFx%2FnvaisLuqp0mWuHkNy8mmV9IPdDODHiXeiigg6jIFr86vCKIhgMMLseB6VIQ8QSx5HljAolOF8nqor0hGqPXNTX6whgLlXmLIcc10vXcSuMVf5qEtkYUGrFOBWboRiGG5JgLaq54tpwl4Odi0BKnklg1u3PV1Ar%2B3TlM4dt34Mn0oPxqZu3m2AnE6CHhRt5Fu8TNW1kR%2FCNUm1wTDCU9AMOy3rL0GOqUBelhhAKqcWSUOxQtFY2xq7dkeyjXrPaaOlOGqwkfVdrexTzL6kgSWxGuJIqs1tgH%2BjcLXblQ88acLPHcSJ2C4qeBHCs0KynwYI3Br7ZOKg98VDP3WsmCivwaXYTCCQ8bWBBxkGAz%2BHkqK%2Fts1958f2jM8GIlsSN3SuSgEBLrhFqLBeWJFFziuYrJEM1iullWm48kj9B4dvHL6Z1riOpAiH4bnh90E&X-Amz-Signature=f1f819b399f952d2e27fd424d1a0ad10b72afe97da3f3cd54fdf11947a39cb0f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKMHUI2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZEwg1JeFCpeF4S6tQkHTOsRdHR92%2B0v8LijHJK4JkQIgVZBkzp5lKWaC8xjvPMsttKTDjtykMp97scjg3%2BgtXi4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLEd%2FypIDGTJPSUPSrcAz9SYfx4YUCExIN3d641cG22zhF61hIoia%2FSvt4pYRBnyDTnVd0dVr%2F6pqVOByJ3iCih9sD823I4vlwmGVOCs9eapsvgdvz7YMFWixjEfBwJURw3vWyghKdPIQOKYVJfmjp%2BoZoQ2d2D5aA1wkRzTnBBF%2F%2FaSnto2gge39xg%2FAtZzO6oPOWN8ycWlN3sZ%2FWKh0n0Q%2FhCzZ%2B2vag9c9ojDtRl8T6Fe6XVhl1bEQrUbwsS9gm2Kx6S%2Buz7SX4yFf8F6NDr4p5iw70WT0Hn7DAPq17SuvrPnToJVOz3lABioEhvMw%2FjfK8q%2FVlYELFkcZJo0jcTHOa38zLklhKggq9rUJgxBNueksm7%2FFwinTPnSNcHLeeMuFTbK8G2vvPmMQ4uWmqEm3bzbC7pJNXgzS08cfwS0KW60I%2BC%2FvIGkFx%2FnvaisLuqp0mWuHkNy8mmV9IPdDODHiXeiigg6jIFr86vCKIhgMMLseB6VIQ8QSx5HljAolOF8nqor0hGqPXNTX6whgLlXmLIcc10vXcSuMVf5qEtkYUGrFOBWboRiGG5JgLaq54tpwl4Odi0BKnklg1u3PV1Ar%2B3TlM4dt34Mn0oPxqZu3m2AnE6CHhRt5Fu8TNW1kR%2FCNUm1wTDCU9AMOy3rL0GOqUBelhhAKqcWSUOxQtFY2xq7dkeyjXrPaaOlOGqwkfVdrexTzL6kgSWxGuJIqs1tgH%2BjcLXblQ88acLPHcSJ2C4qeBHCs0KynwYI3Br7ZOKg98VDP3WsmCivwaXYTCCQ8bWBBxkGAz%2BHkqK%2Fts1958f2jM8GIlsSN3SuSgEBLrhFqLBeWJFFziuYrJEM1iullWm48kj9B4dvHL6Z1riOpAiH4bnh90E&X-Amz-Signature=ba0ebc20de0d420dda413c8b5983697353ab7e293de8c016c22b7c36014dd708&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHKMHUI2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T100856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZEwg1JeFCpeF4S6tQkHTOsRdHR92%2B0v8LijHJK4JkQIgVZBkzp5lKWaC8xjvPMsttKTDjtykMp97scjg3%2BgtXi4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLEd%2FypIDGTJPSUPSrcAz9SYfx4YUCExIN3d641cG22zhF61hIoia%2FSvt4pYRBnyDTnVd0dVr%2F6pqVOByJ3iCih9sD823I4vlwmGVOCs9eapsvgdvz7YMFWixjEfBwJURw3vWyghKdPIQOKYVJfmjp%2BoZoQ2d2D5aA1wkRzTnBBF%2F%2FaSnto2gge39xg%2FAtZzO6oPOWN8ycWlN3sZ%2FWKh0n0Q%2FhCzZ%2B2vag9c9ojDtRl8T6Fe6XVhl1bEQrUbwsS9gm2Kx6S%2Buz7SX4yFf8F6NDr4p5iw70WT0Hn7DAPq17SuvrPnToJVOz3lABioEhvMw%2FjfK8q%2FVlYELFkcZJo0jcTHOa38zLklhKggq9rUJgxBNueksm7%2FFwinTPnSNcHLeeMuFTbK8G2vvPmMQ4uWmqEm3bzbC7pJNXgzS08cfwS0KW60I%2BC%2FvIGkFx%2FnvaisLuqp0mWuHkNy8mmV9IPdDODHiXeiigg6jIFr86vCKIhgMMLseB6VIQ8QSx5HljAolOF8nqor0hGqPXNTX6whgLlXmLIcc10vXcSuMVf5qEtkYUGrFOBWboRiGG5JgLaq54tpwl4Odi0BKnklg1u3PV1Ar%2B3TlM4dt34Mn0oPxqZu3m2AnE6CHhRt5Fu8TNW1kR%2FCNUm1wTDCU9AMOy3rL0GOqUBelhhAKqcWSUOxQtFY2xq7dkeyjXrPaaOlOGqwkfVdrexTzL6kgSWxGuJIqs1tgH%2BjcLXblQ88acLPHcSJ2C4qeBHCs0KynwYI3Br7ZOKg98VDP3WsmCivwaXYTCCQ8bWBBxkGAz%2BHkqK%2Fts1958f2jM8GIlsSN3SuSgEBLrhFqLBeWJFFziuYrJEM1iullWm48kj9B4dvHL6Z1riOpAiH4bnh90E&X-Amz-Signature=593f3865a7610c661fecc68237be761d473588cfa496aa140da64d743b027874&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

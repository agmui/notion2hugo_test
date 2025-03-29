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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAPIZAB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD9iXuLa5mj7RuSwNxEouOJQfREPCANbpIO1OTTKnXfOAIgcuN2FMOGRZep3tOc34mjfIIOVhypEZoylO925rI%2ByqQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKCdtFYILYflTYrkqircA8DBgOOIJdBT0bvmjtqFrXRv5CZKlLd4%2FoQMXPJwQmo9%2FcLC9o%2BiuxI%2F%2FAuIS0QAVyfP2I8jmxtlUx24gfv5yMd%2BfOowp7wXXwBZzwm3gJI3%2FENPag752wcCybypYiVk0Az4F6bZN6RrBSuW1gvO8kez7WRwHX1OE6Q6grJMVW9qVoLqn41HMw4KVSDZu1hUBCEQZon8YsLHvqDkjKQuZOiuzaCXiBb4CszM942LUEeAhK%2F1gIB5Wwi%2B6Z4TA4diuMR2GYKrDlgcrs3FVaPjzNG8lvZpMCDpfEWcZfIEEYUyCFO4dArnDnLrAc48RNKc%2FxD%2FjtfbeFtPogjU3IOXcLoTke0%2Bg74wWlJK6pSlIxV8rDR3AclEAicnuPeIK%2FE626UmgcxREWXcX%2BpPeh%2BfbnvMaRKYp2tCBr54BgsYEad9jboiG5Z47Fxout7VAgOtF0XkAgvGtAtPul%2BHGOv5pYPrwM5ZWx3qJPebYIV5pJCKMSbIysdqwB2Vg%2F7dKqMzFCQd066bRY6mYW7rRTLLptrICcbuXk3%2BwoHQnDTPXg7FpZTM0yaGCoxf8d1ARG000WjBD7eTqcXtEY3GX4Pk6Qcd8uSrK3iOgl7csq%2B5%2BpaYiwLd0jioouycbGGTMP%2FenL8GOqUBGoU3QHbm4ZvxPugSxwFz5NmqD6afJ9%2BdQv4lBb%2BPKyJB2%2BKmB7o%2B9wMWOHlO5jjBZxolYc3128cXgg4WRltrfbI7oo4AKyPIMU2RGGwb1KnvAYpJ3mJ4x6UGdQIOio5KzCJl5fnBLFJpW2NzurdCecMhpwXo6xw7VwTWLyMx2iO0jIeqJSYwyA%2Fa5srOs%2FuOhNYCBWNNlV8HbWZUGYNKU%2FiM6tzr&X-Amz-Signature=56f627076468634dcb8a07032eae583736b90a622ff2287474db32ff678a7894&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAPIZAB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD9iXuLa5mj7RuSwNxEouOJQfREPCANbpIO1OTTKnXfOAIgcuN2FMOGRZep3tOc34mjfIIOVhypEZoylO925rI%2ByqQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKCdtFYILYflTYrkqircA8DBgOOIJdBT0bvmjtqFrXRv5CZKlLd4%2FoQMXPJwQmo9%2FcLC9o%2BiuxI%2F%2FAuIS0QAVyfP2I8jmxtlUx24gfv5yMd%2BfOowp7wXXwBZzwm3gJI3%2FENPag752wcCybypYiVk0Az4F6bZN6RrBSuW1gvO8kez7WRwHX1OE6Q6grJMVW9qVoLqn41HMw4KVSDZu1hUBCEQZon8YsLHvqDkjKQuZOiuzaCXiBb4CszM942LUEeAhK%2F1gIB5Wwi%2B6Z4TA4diuMR2GYKrDlgcrs3FVaPjzNG8lvZpMCDpfEWcZfIEEYUyCFO4dArnDnLrAc48RNKc%2FxD%2FjtfbeFtPogjU3IOXcLoTke0%2Bg74wWlJK6pSlIxV8rDR3AclEAicnuPeIK%2FE626UmgcxREWXcX%2BpPeh%2BfbnvMaRKYp2tCBr54BgsYEad9jboiG5Z47Fxout7VAgOtF0XkAgvGtAtPul%2BHGOv5pYPrwM5ZWx3qJPebYIV5pJCKMSbIysdqwB2Vg%2F7dKqMzFCQd066bRY6mYW7rRTLLptrICcbuXk3%2BwoHQnDTPXg7FpZTM0yaGCoxf8d1ARG000WjBD7eTqcXtEY3GX4Pk6Qcd8uSrK3iOgl7csq%2B5%2BpaYiwLd0jioouycbGGTMP%2FenL8GOqUBGoU3QHbm4ZvxPugSxwFz5NmqD6afJ9%2BdQv4lBb%2BPKyJB2%2BKmB7o%2B9wMWOHlO5jjBZxolYc3128cXgg4WRltrfbI7oo4AKyPIMU2RGGwb1KnvAYpJ3mJ4x6UGdQIOio5KzCJl5fnBLFJpW2NzurdCecMhpwXo6xw7VwTWLyMx2iO0jIeqJSYwyA%2Fa5srOs%2FuOhNYCBWNNlV8HbWZUGYNKU%2FiM6tzr&X-Amz-Signature=847dab8438fca9e532f6388eecf1c5f20fe956c17b8f687931a87e6304340737&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAPIZAB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD9iXuLa5mj7RuSwNxEouOJQfREPCANbpIO1OTTKnXfOAIgcuN2FMOGRZep3tOc34mjfIIOVhypEZoylO925rI%2ByqQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKCdtFYILYflTYrkqircA8DBgOOIJdBT0bvmjtqFrXRv5CZKlLd4%2FoQMXPJwQmo9%2FcLC9o%2BiuxI%2F%2FAuIS0QAVyfP2I8jmxtlUx24gfv5yMd%2BfOowp7wXXwBZzwm3gJI3%2FENPag752wcCybypYiVk0Az4F6bZN6RrBSuW1gvO8kez7WRwHX1OE6Q6grJMVW9qVoLqn41HMw4KVSDZu1hUBCEQZon8YsLHvqDkjKQuZOiuzaCXiBb4CszM942LUEeAhK%2F1gIB5Wwi%2B6Z4TA4diuMR2GYKrDlgcrs3FVaPjzNG8lvZpMCDpfEWcZfIEEYUyCFO4dArnDnLrAc48RNKc%2FxD%2FjtfbeFtPogjU3IOXcLoTke0%2Bg74wWlJK6pSlIxV8rDR3AclEAicnuPeIK%2FE626UmgcxREWXcX%2BpPeh%2BfbnvMaRKYp2tCBr54BgsYEad9jboiG5Z47Fxout7VAgOtF0XkAgvGtAtPul%2BHGOv5pYPrwM5ZWx3qJPebYIV5pJCKMSbIysdqwB2Vg%2F7dKqMzFCQd066bRY6mYW7rRTLLptrICcbuXk3%2BwoHQnDTPXg7FpZTM0yaGCoxf8d1ARG000WjBD7eTqcXtEY3GX4Pk6Qcd8uSrK3iOgl7csq%2B5%2BpaYiwLd0jioouycbGGTMP%2FenL8GOqUBGoU3QHbm4ZvxPugSxwFz5NmqD6afJ9%2BdQv4lBb%2BPKyJB2%2BKmB7o%2B9wMWOHlO5jjBZxolYc3128cXgg4WRltrfbI7oo4AKyPIMU2RGGwb1KnvAYpJ3mJ4x6UGdQIOio5KzCJl5fnBLFJpW2NzurdCecMhpwXo6xw7VwTWLyMx2iO0jIeqJSYwyA%2Fa5srOs%2FuOhNYCBWNNlV8HbWZUGYNKU%2FiM6tzr&X-Amz-Signature=a29ee8a4c6aec04c1152f9df0a7c67fd9fb6a14f120ecb3c6e45d2d887ea4017&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAPIZAB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD9iXuLa5mj7RuSwNxEouOJQfREPCANbpIO1OTTKnXfOAIgcuN2FMOGRZep3tOc34mjfIIOVhypEZoylO925rI%2ByqQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKCdtFYILYflTYrkqircA8DBgOOIJdBT0bvmjtqFrXRv5CZKlLd4%2FoQMXPJwQmo9%2FcLC9o%2BiuxI%2F%2FAuIS0QAVyfP2I8jmxtlUx24gfv5yMd%2BfOowp7wXXwBZzwm3gJI3%2FENPag752wcCybypYiVk0Az4F6bZN6RrBSuW1gvO8kez7WRwHX1OE6Q6grJMVW9qVoLqn41HMw4KVSDZu1hUBCEQZon8YsLHvqDkjKQuZOiuzaCXiBb4CszM942LUEeAhK%2F1gIB5Wwi%2B6Z4TA4diuMR2GYKrDlgcrs3FVaPjzNG8lvZpMCDpfEWcZfIEEYUyCFO4dArnDnLrAc48RNKc%2FxD%2FjtfbeFtPogjU3IOXcLoTke0%2Bg74wWlJK6pSlIxV8rDR3AclEAicnuPeIK%2FE626UmgcxREWXcX%2BpPeh%2BfbnvMaRKYp2tCBr54BgsYEad9jboiG5Z47Fxout7VAgOtF0XkAgvGtAtPul%2BHGOv5pYPrwM5ZWx3qJPebYIV5pJCKMSbIysdqwB2Vg%2F7dKqMzFCQd066bRY6mYW7rRTLLptrICcbuXk3%2BwoHQnDTPXg7FpZTM0yaGCoxf8d1ARG000WjBD7eTqcXtEY3GX4Pk6Qcd8uSrK3iOgl7csq%2B5%2BpaYiwLd0jioouycbGGTMP%2FenL8GOqUBGoU3QHbm4ZvxPugSxwFz5NmqD6afJ9%2BdQv4lBb%2BPKyJB2%2BKmB7o%2B9wMWOHlO5jjBZxolYc3128cXgg4WRltrfbI7oo4AKyPIMU2RGGwb1KnvAYpJ3mJ4x6UGdQIOio5KzCJl5fnBLFJpW2NzurdCecMhpwXo6xw7VwTWLyMx2iO0jIeqJSYwyA%2Fa5srOs%2FuOhNYCBWNNlV8HbWZUGYNKU%2FiM6tzr&X-Amz-Signature=7ff6e3e2c8279dce84e75193a3b3ac5f1836dd7254d0b209c66717ae25e9228c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAPIZAB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD9iXuLa5mj7RuSwNxEouOJQfREPCANbpIO1OTTKnXfOAIgcuN2FMOGRZep3tOc34mjfIIOVhypEZoylO925rI%2ByqQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKCdtFYILYflTYrkqircA8DBgOOIJdBT0bvmjtqFrXRv5CZKlLd4%2FoQMXPJwQmo9%2FcLC9o%2BiuxI%2F%2FAuIS0QAVyfP2I8jmxtlUx24gfv5yMd%2BfOowp7wXXwBZzwm3gJI3%2FENPag752wcCybypYiVk0Az4F6bZN6RrBSuW1gvO8kez7WRwHX1OE6Q6grJMVW9qVoLqn41HMw4KVSDZu1hUBCEQZon8YsLHvqDkjKQuZOiuzaCXiBb4CszM942LUEeAhK%2F1gIB5Wwi%2B6Z4TA4diuMR2GYKrDlgcrs3FVaPjzNG8lvZpMCDpfEWcZfIEEYUyCFO4dArnDnLrAc48RNKc%2FxD%2FjtfbeFtPogjU3IOXcLoTke0%2Bg74wWlJK6pSlIxV8rDR3AclEAicnuPeIK%2FE626UmgcxREWXcX%2BpPeh%2BfbnvMaRKYp2tCBr54BgsYEad9jboiG5Z47Fxout7VAgOtF0XkAgvGtAtPul%2BHGOv5pYPrwM5ZWx3qJPebYIV5pJCKMSbIysdqwB2Vg%2F7dKqMzFCQd066bRY6mYW7rRTLLptrICcbuXk3%2BwoHQnDTPXg7FpZTM0yaGCoxf8d1ARG000WjBD7eTqcXtEY3GX4Pk6Qcd8uSrK3iOgl7csq%2B5%2BpaYiwLd0jioouycbGGTMP%2FenL8GOqUBGoU3QHbm4ZvxPugSxwFz5NmqD6afJ9%2BdQv4lBb%2BPKyJB2%2BKmB7o%2B9wMWOHlO5jjBZxolYc3128cXgg4WRltrfbI7oo4AKyPIMU2RGGwb1KnvAYpJ3mJ4x6UGdQIOio5KzCJl5fnBLFJpW2NzurdCecMhpwXo6xw7VwTWLyMx2iO0jIeqJSYwyA%2Fa5srOs%2FuOhNYCBWNNlV8HbWZUGYNKU%2FiM6tzr&X-Amz-Signature=06d72d9769777ba17568dad60172b6ef2878158c6c8e2993c38ff2d566d541c5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAPIZAB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD9iXuLa5mj7RuSwNxEouOJQfREPCANbpIO1OTTKnXfOAIgcuN2FMOGRZep3tOc34mjfIIOVhypEZoylO925rI%2ByqQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKCdtFYILYflTYrkqircA8DBgOOIJdBT0bvmjtqFrXRv5CZKlLd4%2FoQMXPJwQmo9%2FcLC9o%2BiuxI%2F%2FAuIS0QAVyfP2I8jmxtlUx24gfv5yMd%2BfOowp7wXXwBZzwm3gJI3%2FENPag752wcCybypYiVk0Az4F6bZN6RrBSuW1gvO8kez7WRwHX1OE6Q6grJMVW9qVoLqn41HMw4KVSDZu1hUBCEQZon8YsLHvqDkjKQuZOiuzaCXiBb4CszM942LUEeAhK%2F1gIB5Wwi%2B6Z4TA4diuMR2GYKrDlgcrs3FVaPjzNG8lvZpMCDpfEWcZfIEEYUyCFO4dArnDnLrAc48RNKc%2FxD%2FjtfbeFtPogjU3IOXcLoTke0%2Bg74wWlJK6pSlIxV8rDR3AclEAicnuPeIK%2FE626UmgcxREWXcX%2BpPeh%2BfbnvMaRKYp2tCBr54BgsYEad9jboiG5Z47Fxout7VAgOtF0XkAgvGtAtPul%2BHGOv5pYPrwM5ZWx3qJPebYIV5pJCKMSbIysdqwB2Vg%2F7dKqMzFCQd066bRY6mYW7rRTLLptrICcbuXk3%2BwoHQnDTPXg7FpZTM0yaGCoxf8d1ARG000WjBD7eTqcXtEY3GX4Pk6Qcd8uSrK3iOgl7csq%2B5%2BpaYiwLd0jioouycbGGTMP%2FenL8GOqUBGoU3QHbm4ZvxPugSxwFz5NmqD6afJ9%2BdQv4lBb%2BPKyJB2%2BKmB7o%2B9wMWOHlO5jjBZxolYc3128cXgg4WRltrfbI7oo4AKyPIMU2RGGwb1KnvAYpJ3mJ4x6UGdQIOio5KzCJl5fnBLFJpW2NzurdCecMhpwXo6xw7VwTWLyMx2iO0jIeqJSYwyA%2Fa5srOs%2FuOhNYCBWNNlV8HbWZUGYNKU%2FiM6tzr&X-Amz-Signature=922c791842693f8440c3be6e469bca4011626b28503d7a70ace4a2b1d8911d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIAPIZAB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T050801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQD9iXuLa5mj7RuSwNxEouOJQfREPCANbpIO1OTTKnXfOAIgcuN2FMOGRZep3tOc34mjfIIOVhypEZoylO925rI%2ByqQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKCdtFYILYflTYrkqircA8DBgOOIJdBT0bvmjtqFrXRv5CZKlLd4%2FoQMXPJwQmo9%2FcLC9o%2BiuxI%2F%2FAuIS0QAVyfP2I8jmxtlUx24gfv5yMd%2BfOowp7wXXwBZzwm3gJI3%2FENPag752wcCybypYiVk0Az4F6bZN6RrBSuW1gvO8kez7WRwHX1OE6Q6grJMVW9qVoLqn41HMw4KVSDZu1hUBCEQZon8YsLHvqDkjKQuZOiuzaCXiBb4CszM942LUEeAhK%2F1gIB5Wwi%2B6Z4TA4diuMR2GYKrDlgcrs3FVaPjzNG8lvZpMCDpfEWcZfIEEYUyCFO4dArnDnLrAc48RNKc%2FxD%2FjtfbeFtPogjU3IOXcLoTke0%2Bg74wWlJK6pSlIxV8rDR3AclEAicnuPeIK%2FE626UmgcxREWXcX%2BpPeh%2BfbnvMaRKYp2tCBr54BgsYEad9jboiG5Z47Fxout7VAgOtF0XkAgvGtAtPul%2BHGOv5pYPrwM5ZWx3qJPebYIV5pJCKMSbIysdqwB2Vg%2F7dKqMzFCQd066bRY6mYW7rRTLLptrICcbuXk3%2BwoHQnDTPXg7FpZTM0yaGCoxf8d1ARG000WjBD7eTqcXtEY3GX4Pk6Qcd8uSrK3iOgl7csq%2B5%2BpaYiwLd0jioouycbGGTMP%2FenL8GOqUBGoU3QHbm4ZvxPugSxwFz5NmqD6afJ9%2BdQv4lBb%2BPKyJB2%2BKmB7o%2B9wMWOHlO5jjBZxolYc3128cXgg4WRltrfbI7oo4AKyPIMU2RGGwb1KnvAYpJ3mJ4x6UGdQIOio5KzCJl5fnBLFJpW2NzurdCecMhpwXo6xw7VwTWLyMx2iO0jIeqJSYwyA%2Fa5srOs%2FuOhNYCBWNNlV8HbWZUGYNKU%2FiM6tzr&X-Amz-Signature=690078d40aa2d5392d00324ffbe5a4290de20e0ff121bdc3ea4a2ba5cb0e1c67&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

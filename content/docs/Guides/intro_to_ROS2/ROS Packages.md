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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSL42LN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDrJc6pZuRdvlgf6SEIpb9rZc8pFxi2EGRWC6Qa%2BjXu0gIhAMwuzb4Xunf84Plgc2yLWtAWfPokh0MsWI1oGjjDl7beKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgIatHRgl8IcOgkQkq3AM2Pr%2FBJNmmlxo5Qrr3ft7f%2FI6DFBVdzTECOs%2B9SBOBQvSnbMHxH9KsVVzsDjXzjzBc9CaZ5rumPvBJ7xbFPZtbVWLxoZ7a7bgUW34UwOKA6rhczI6rDJwv7VH6HXZ6BigGTdjiHPV2y2sVAwmuOPUeb9XOxP4krhLNvSHCFOA9twOn%2Fq2S0mkFp884PUBvWId%2BU8dCOkLhIiDm5b7xUj6fcyhxi3ajPa3nv0gZqAqgSShMRkcsUAq6slF5bFA9YR0kKiKsJ8xVwWAPqycRSdYzy3clp55AJVqOxlTElvwUknHY5kouL2tJTDgIfBCh0eW5I%2BYKR24ZPFKJK5CaN6yLUowaxECCMqbbQcKiYxJI2i6dyiMFNhJOUezoaYsoUtPZxrfXPLE%2FQ8HrcrOHGdgeDfaIqv5CbG7OKL7HsHPzpjYJj89zcsSLqu2S0riS%2B%2B4WGddOfX5iiPqNtyBgZp4DeVyxvgX%2FMBL%2BUoEk%2FG0UwI6pwBw5Jdal3PbMNzWxdz%2Fn87l%2BmS8CkkSCP3qCWTwESi1RWi0t7nFUIXlXm%2B8LwmpeKDMglomGa0xUyeIY9YNuHVYsvcJ%2FauMx7EEmTWhiDX%2BKXzA4FibEsCF3evUjUEa54ytzXyGD3fVv%2FjD2t%2BzCBjqkAQj1UpdraB8xQrZWW0iWGmQEobePktzz93srp7Wi6m57%2BHzJ7QUNmDGDxHWQUjcANIdgwOpvY%2F9ohs%2BJV4GjFj%2B79%2F6a349FcwvO3YdaS%2FzAXAJW1ZOr0z%2BehyMCp9I%2Fbzkv5UQPlC5GY%2FIKMu3iuaJv2aAsQ0tzy9LoqbOVNWMJCL0ltFmaJj%2BD91fvsQaAnh4FAlKQ9Y6uHJrmogugfUdySU21&X-Amz-Signature=1af913b9b66427b58b0cf6c72e84a187adc01b33d39faff5662d0aaee68757f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSL42LN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDrJc6pZuRdvlgf6SEIpb9rZc8pFxi2EGRWC6Qa%2BjXu0gIhAMwuzb4Xunf84Plgc2yLWtAWfPokh0MsWI1oGjjDl7beKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgIatHRgl8IcOgkQkq3AM2Pr%2FBJNmmlxo5Qrr3ft7f%2FI6DFBVdzTECOs%2B9SBOBQvSnbMHxH9KsVVzsDjXzjzBc9CaZ5rumPvBJ7xbFPZtbVWLxoZ7a7bgUW34UwOKA6rhczI6rDJwv7VH6HXZ6BigGTdjiHPV2y2sVAwmuOPUeb9XOxP4krhLNvSHCFOA9twOn%2Fq2S0mkFp884PUBvWId%2BU8dCOkLhIiDm5b7xUj6fcyhxi3ajPa3nv0gZqAqgSShMRkcsUAq6slF5bFA9YR0kKiKsJ8xVwWAPqycRSdYzy3clp55AJVqOxlTElvwUknHY5kouL2tJTDgIfBCh0eW5I%2BYKR24ZPFKJK5CaN6yLUowaxECCMqbbQcKiYxJI2i6dyiMFNhJOUezoaYsoUtPZxrfXPLE%2FQ8HrcrOHGdgeDfaIqv5CbG7OKL7HsHPzpjYJj89zcsSLqu2S0riS%2B%2B4WGddOfX5iiPqNtyBgZp4DeVyxvgX%2FMBL%2BUoEk%2FG0UwI6pwBw5Jdal3PbMNzWxdz%2Fn87l%2BmS8CkkSCP3qCWTwESi1RWi0t7nFUIXlXm%2B8LwmpeKDMglomGa0xUyeIY9YNuHVYsvcJ%2FauMx7EEmTWhiDX%2BKXzA4FibEsCF3evUjUEa54ytzXyGD3fVv%2FjD2t%2BzCBjqkAQj1UpdraB8xQrZWW0iWGmQEobePktzz93srp7Wi6m57%2BHzJ7QUNmDGDxHWQUjcANIdgwOpvY%2F9ohs%2BJV4GjFj%2B79%2F6a349FcwvO3YdaS%2FzAXAJW1ZOr0z%2BehyMCp9I%2Fbzkv5UQPlC5GY%2FIKMu3iuaJv2aAsQ0tzy9LoqbOVNWMJCL0ltFmaJj%2BD91fvsQaAnh4FAlKQ9Y6uHJrmogugfUdySU21&X-Amz-Signature=70503aad54daee455368382e1e8599efacc3199fb3061c4dd49f91e1960c2bbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSL42LN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDrJc6pZuRdvlgf6SEIpb9rZc8pFxi2EGRWC6Qa%2BjXu0gIhAMwuzb4Xunf84Plgc2yLWtAWfPokh0MsWI1oGjjDl7beKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgIatHRgl8IcOgkQkq3AM2Pr%2FBJNmmlxo5Qrr3ft7f%2FI6DFBVdzTECOs%2B9SBOBQvSnbMHxH9KsVVzsDjXzjzBc9CaZ5rumPvBJ7xbFPZtbVWLxoZ7a7bgUW34UwOKA6rhczI6rDJwv7VH6HXZ6BigGTdjiHPV2y2sVAwmuOPUeb9XOxP4krhLNvSHCFOA9twOn%2Fq2S0mkFp884PUBvWId%2BU8dCOkLhIiDm5b7xUj6fcyhxi3ajPa3nv0gZqAqgSShMRkcsUAq6slF5bFA9YR0kKiKsJ8xVwWAPqycRSdYzy3clp55AJVqOxlTElvwUknHY5kouL2tJTDgIfBCh0eW5I%2BYKR24ZPFKJK5CaN6yLUowaxECCMqbbQcKiYxJI2i6dyiMFNhJOUezoaYsoUtPZxrfXPLE%2FQ8HrcrOHGdgeDfaIqv5CbG7OKL7HsHPzpjYJj89zcsSLqu2S0riS%2B%2B4WGddOfX5iiPqNtyBgZp4DeVyxvgX%2FMBL%2BUoEk%2FG0UwI6pwBw5Jdal3PbMNzWxdz%2Fn87l%2BmS8CkkSCP3qCWTwESi1RWi0t7nFUIXlXm%2B8LwmpeKDMglomGa0xUyeIY9YNuHVYsvcJ%2FauMx7EEmTWhiDX%2BKXzA4FibEsCF3evUjUEa54ytzXyGD3fVv%2FjD2t%2BzCBjqkAQj1UpdraB8xQrZWW0iWGmQEobePktzz93srp7Wi6m57%2BHzJ7QUNmDGDxHWQUjcANIdgwOpvY%2F9ohs%2BJV4GjFj%2B79%2F6a349FcwvO3YdaS%2FzAXAJW1ZOr0z%2BehyMCp9I%2Fbzkv5UQPlC5GY%2FIKMu3iuaJv2aAsQ0tzy9LoqbOVNWMJCL0ltFmaJj%2BD91fvsQaAnh4FAlKQ9Y6uHJrmogugfUdySU21&X-Amz-Signature=05ae906b7f9f0e0af77535147a47edd1520f4f3cd6e987a43a3485327dc2975c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSL42LN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDrJc6pZuRdvlgf6SEIpb9rZc8pFxi2EGRWC6Qa%2BjXu0gIhAMwuzb4Xunf84Plgc2yLWtAWfPokh0MsWI1oGjjDl7beKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgIatHRgl8IcOgkQkq3AM2Pr%2FBJNmmlxo5Qrr3ft7f%2FI6DFBVdzTECOs%2B9SBOBQvSnbMHxH9KsVVzsDjXzjzBc9CaZ5rumPvBJ7xbFPZtbVWLxoZ7a7bgUW34UwOKA6rhczI6rDJwv7VH6HXZ6BigGTdjiHPV2y2sVAwmuOPUeb9XOxP4krhLNvSHCFOA9twOn%2Fq2S0mkFp884PUBvWId%2BU8dCOkLhIiDm5b7xUj6fcyhxi3ajPa3nv0gZqAqgSShMRkcsUAq6slF5bFA9YR0kKiKsJ8xVwWAPqycRSdYzy3clp55AJVqOxlTElvwUknHY5kouL2tJTDgIfBCh0eW5I%2BYKR24ZPFKJK5CaN6yLUowaxECCMqbbQcKiYxJI2i6dyiMFNhJOUezoaYsoUtPZxrfXPLE%2FQ8HrcrOHGdgeDfaIqv5CbG7OKL7HsHPzpjYJj89zcsSLqu2S0riS%2B%2B4WGddOfX5iiPqNtyBgZp4DeVyxvgX%2FMBL%2BUoEk%2FG0UwI6pwBw5Jdal3PbMNzWxdz%2Fn87l%2BmS8CkkSCP3qCWTwESi1RWi0t7nFUIXlXm%2B8LwmpeKDMglomGa0xUyeIY9YNuHVYsvcJ%2FauMx7EEmTWhiDX%2BKXzA4FibEsCF3evUjUEa54ytzXyGD3fVv%2FjD2t%2BzCBjqkAQj1UpdraB8xQrZWW0iWGmQEobePktzz93srp7Wi6m57%2BHzJ7QUNmDGDxHWQUjcANIdgwOpvY%2F9ohs%2BJV4GjFj%2B79%2F6a349FcwvO3YdaS%2FzAXAJW1ZOr0z%2BehyMCp9I%2Fbzkv5UQPlC5GY%2FIKMu3iuaJv2aAsQ0tzy9LoqbOVNWMJCL0ltFmaJj%2BD91fvsQaAnh4FAlKQ9Y6uHJrmogugfUdySU21&X-Amz-Signature=33996c086358465e72e27a7040203a794e8e98ef81220d5066e64e70f57723c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSL42LN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDrJc6pZuRdvlgf6SEIpb9rZc8pFxi2EGRWC6Qa%2BjXu0gIhAMwuzb4Xunf84Plgc2yLWtAWfPokh0MsWI1oGjjDl7beKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgIatHRgl8IcOgkQkq3AM2Pr%2FBJNmmlxo5Qrr3ft7f%2FI6DFBVdzTECOs%2B9SBOBQvSnbMHxH9KsVVzsDjXzjzBc9CaZ5rumPvBJ7xbFPZtbVWLxoZ7a7bgUW34UwOKA6rhczI6rDJwv7VH6HXZ6BigGTdjiHPV2y2sVAwmuOPUeb9XOxP4krhLNvSHCFOA9twOn%2Fq2S0mkFp884PUBvWId%2BU8dCOkLhIiDm5b7xUj6fcyhxi3ajPa3nv0gZqAqgSShMRkcsUAq6slF5bFA9YR0kKiKsJ8xVwWAPqycRSdYzy3clp55AJVqOxlTElvwUknHY5kouL2tJTDgIfBCh0eW5I%2BYKR24ZPFKJK5CaN6yLUowaxECCMqbbQcKiYxJI2i6dyiMFNhJOUezoaYsoUtPZxrfXPLE%2FQ8HrcrOHGdgeDfaIqv5CbG7OKL7HsHPzpjYJj89zcsSLqu2S0riS%2B%2B4WGddOfX5iiPqNtyBgZp4DeVyxvgX%2FMBL%2BUoEk%2FG0UwI6pwBw5Jdal3PbMNzWxdz%2Fn87l%2BmS8CkkSCP3qCWTwESi1RWi0t7nFUIXlXm%2B8LwmpeKDMglomGa0xUyeIY9YNuHVYsvcJ%2FauMx7EEmTWhiDX%2BKXzA4FibEsCF3evUjUEa54ytzXyGD3fVv%2FjD2t%2BzCBjqkAQj1UpdraB8xQrZWW0iWGmQEobePktzz93srp7Wi6m57%2BHzJ7QUNmDGDxHWQUjcANIdgwOpvY%2F9ohs%2BJV4GjFj%2B79%2F6a349FcwvO3YdaS%2FzAXAJW1ZOr0z%2BehyMCp9I%2Fbzkv5UQPlC5GY%2FIKMu3iuaJv2aAsQ0tzy9LoqbOVNWMJCL0ltFmaJj%2BD91fvsQaAnh4FAlKQ9Y6uHJrmogugfUdySU21&X-Amz-Signature=711506b157df75e3c0111df8353d13dd37b8a7fbcba49346039a61e4f86a8c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSL42LN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDrJc6pZuRdvlgf6SEIpb9rZc8pFxi2EGRWC6Qa%2BjXu0gIhAMwuzb4Xunf84Plgc2yLWtAWfPokh0MsWI1oGjjDl7beKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgIatHRgl8IcOgkQkq3AM2Pr%2FBJNmmlxo5Qrr3ft7f%2FI6DFBVdzTECOs%2B9SBOBQvSnbMHxH9KsVVzsDjXzjzBc9CaZ5rumPvBJ7xbFPZtbVWLxoZ7a7bgUW34UwOKA6rhczI6rDJwv7VH6HXZ6BigGTdjiHPV2y2sVAwmuOPUeb9XOxP4krhLNvSHCFOA9twOn%2Fq2S0mkFp884PUBvWId%2BU8dCOkLhIiDm5b7xUj6fcyhxi3ajPa3nv0gZqAqgSShMRkcsUAq6slF5bFA9YR0kKiKsJ8xVwWAPqycRSdYzy3clp55AJVqOxlTElvwUknHY5kouL2tJTDgIfBCh0eW5I%2BYKR24ZPFKJK5CaN6yLUowaxECCMqbbQcKiYxJI2i6dyiMFNhJOUezoaYsoUtPZxrfXPLE%2FQ8HrcrOHGdgeDfaIqv5CbG7OKL7HsHPzpjYJj89zcsSLqu2S0riS%2B%2B4WGddOfX5iiPqNtyBgZp4DeVyxvgX%2FMBL%2BUoEk%2FG0UwI6pwBw5Jdal3PbMNzWxdz%2Fn87l%2BmS8CkkSCP3qCWTwESi1RWi0t7nFUIXlXm%2B8LwmpeKDMglomGa0xUyeIY9YNuHVYsvcJ%2FauMx7EEmTWhiDX%2BKXzA4FibEsCF3evUjUEa54ytzXyGD3fVv%2FjD2t%2BzCBjqkAQj1UpdraB8xQrZWW0iWGmQEobePktzz93srp7Wi6m57%2BHzJ7QUNmDGDxHWQUjcANIdgwOpvY%2F9ohs%2BJV4GjFj%2B79%2F6a349FcwvO3YdaS%2FzAXAJW1ZOr0z%2BehyMCp9I%2Fbzkv5UQPlC5GY%2FIKMu3iuaJv2aAsQ0tzy9LoqbOVNWMJCL0ltFmaJj%2BD91fvsQaAnh4FAlKQ9Y6uHJrmogugfUdySU21&X-Amz-Signature=829fbc9d951057a947a26a62ea2e9ab39d9d3e3d5cdb98989626e77235271c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSL42LN%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQDrJc6pZuRdvlgf6SEIpb9rZc8pFxi2EGRWC6Qa%2BjXu0gIhAMwuzb4Xunf84Plgc2yLWtAWfPokh0MsWI1oGjjDl7beKv8DCDcQABoMNjM3NDIzMTgzODA1IgwgIatHRgl8IcOgkQkq3AM2Pr%2FBJNmmlxo5Qrr3ft7f%2FI6DFBVdzTECOs%2B9SBOBQvSnbMHxH9KsVVzsDjXzjzBc9CaZ5rumPvBJ7xbFPZtbVWLxoZ7a7bgUW34UwOKA6rhczI6rDJwv7VH6HXZ6BigGTdjiHPV2y2sVAwmuOPUeb9XOxP4krhLNvSHCFOA9twOn%2Fq2S0mkFp884PUBvWId%2BU8dCOkLhIiDm5b7xUj6fcyhxi3ajPa3nv0gZqAqgSShMRkcsUAq6slF5bFA9YR0kKiKsJ8xVwWAPqycRSdYzy3clp55AJVqOxlTElvwUknHY5kouL2tJTDgIfBCh0eW5I%2BYKR24ZPFKJK5CaN6yLUowaxECCMqbbQcKiYxJI2i6dyiMFNhJOUezoaYsoUtPZxrfXPLE%2FQ8HrcrOHGdgeDfaIqv5CbG7OKL7HsHPzpjYJj89zcsSLqu2S0riS%2B%2B4WGddOfX5iiPqNtyBgZp4DeVyxvgX%2FMBL%2BUoEk%2FG0UwI6pwBw5Jdal3PbMNzWxdz%2Fn87l%2BmS8CkkSCP3qCWTwESi1RWi0t7nFUIXlXm%2B8LwmpeKDMglomGa0xUyeIY9YNuHVYsvcJ%2FauMx7EEmTWhiDX%2BKXzA4FibEsCF3evUjUEa54ytzXyGD3fVv%2FjD2t%2BzCBjqkAQj1UpdraB8xQrZWW0iWGmQEobePktzz93srp7Wi6m57%2BHzJ7QUNmDGDxHWQUjcANIdgwOpvY%2F9ohs%2BJV4GjFj%2B79%2F6a349FcwvO3YdaS%2FzAXAJW1ZOr0z%2BehyMCp9I%2Fbzkv5UQPlC5GY%2FIKMu3iuaJv2aAsQ0tzy9LoqbOVNWMJCL0ltFmaJj%2BD91fvsQaAnh4FAlKQ9Y6uHJrmogugfUdySU21&X-Amz-Signature=82bf42670396cae957f8b773ad9ad0619640a93331dc2e28afb994db16d930d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

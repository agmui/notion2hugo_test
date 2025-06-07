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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAWLVTT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjY0EmeHAmpbO%2FPb0pCUn4I1SLRPXhBliBN1d4QiyPWAiA%2FrKsahBfPb5piq7MANqkmYtsfDt0GuQtE3TuiQQJaQir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMh%2BTvC3vuUdEcR7jbKtwDVsZUrZ6KX4ANO%2FG3UbdwmHSfRTgJ1qIy6J53mxxBvOEurfDqnKe0dZiDFjDLIQDJbRMmxlESA6SR0wTt8EMpldSC72GBKG8CIGvbT9ZXJp6l0eg%2F5GyVQhXIVwLx0eARSP9yITqc5SYXVdVjjDouEaB64uhV8W%2F8W2vdTSZaTAxpJCn311RJKO1jLxhp%2Fx8CgG%2FdcOAQvHTZeFCv8uXbVFizssf9F0bJI57YRpub%2FogC%2BRpTbJWRYIZ3ADvD5ssDfxxDPmvnKx%2BJR7NPLlhw5DxIT9Av6cMW9n5u4l63MBTNvDW5AOnTyFRvwf7HEBzyke4b0BjE%2F%2BZnVmfwxWL9mbuTGJQewVPejhITKimtRCSo6IjGfgjg6mrnkwnNUY3TtVv9MXDYCkfcnTbZciFIxVHAXa6RsOY%2BNI2xpyQxHGBmbN4j6ulD3t8EhvsKpsW16P9Sy1iP58IrjtMIz%2FjzQWrS5W3j8DckPze3%2BQohwRsQACrz3jq32ctq7%2BelTd7lgDNRV6kc66tgnh9JSBLNwnJfSN1UrG7aXYdZqhADB6mWVbt5mUQjj45jUNc38CzC%2FpCwoQV3zR8IoKPlzlY%2FNmLtnafnp2r%2B2GWVnv8Oe0GENR1BCg5OwDPkxn0wy%2FqPwgY6pgGua9GV6fBbnXI8hvJpJ2K2U1iQqMYu36xkys9HiTMQBJOva7KBAcJvVihBl4DqmM%2F7pf2Z8iQRpV7CRKN3oLLPIXnurvhdMip6KsRmUsjBweeExqDb70%2Bqzgk9wVT3Ok%2BPHbPtkzOED3mM%2BLHatO1mlZlW9AAd3CCwNImAdlkmu80s5%2FP7pgbM3ZuXLQbXqAy2R0WerxSys6ElZK2dM5HdOtfmWKLy&X-Amz-Signature=45f450916958988f3716d5b9b938bc2154391bed22ad37a953983c66d6a64015&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAWLVTT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjY0EmeHAmpbO%2FPb0pCUn4I1SLRPXhBliBN1d4QiyPWAiA%2FrKsahBfPb5piq7MANqkmYtsfDt0GuQtE3TuiQQJaQir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMh%2BTvC3vuUdEcR7jbKtwDVsZUrZ6KX4ANO%2FG3UbdwmHSfRTgJ1qIy6J53mxxBvOEurfDqnKe0dZiDFjDLIQDJbRMmxlESA6SR0wTt8EMpldSC72GBKG8CIGvbT9ZXJp6l0eg%2F5GyVQhXIVwLx0eARSP9yITqc5SYXVdVjjDouEaB64uhV8W%2F8W2vdTSZaTAxpJCn311RJKO1jLxhp%2Fx8CgG%2FdcOAQvHTZeFCv8uXbVFizssf9F0bJI57YRpub%2FogC%2BRpTbJWRYIZ3ADvD5ssDfxxDPmvnKx%2BJR7NPLlhw5DxIT9Av6cMW9n5u4l63MBTNvDW5AOnTyFRvwf7HEBzyke4b0BjE%2F%2BZnVmfwxWL9mbuTGJQewVPejhITKimtRCSo6IjGfgjg6mrnkwnNUY3TtVv9MXDYCkfcnTbZciFIxVHAXa6RsOY%2BNI2xpyQxHGBmbN4j6ulD3t8EhvsKpsW16P9Sy1iP58IrjtMIz%2FjzQWrS5W3j8DckPze3%2BQohwRsQACrz3jq32ctq7%2BelTd7lgDNRV6kc66tgnh9JSBLNwnJfSN1UrG7aXYdZqhADB6mWVbt5mUQjj45jUNc38CzC%2FpCwoQV3zR8IoKPlzlY%2FNmLtnafnp2r%2B2GWVnv8Oe0GENR1BCg5OwDPkxn0wy%2FqPwgY6pgGua9GV6fBbnXI8hvJpJ2K2U1iQqMYu36xkys9HiTMQBJOva7KBAcJvVihBl4DqmM%2F7pf2Z8iQRpV7CRKN3oLLPIXnurvhdMip6KsRmUsjBweeExqDb70%2Bqzgk9wVT3Ok%2BPHbPtkzOED3mM%2BLHatO1mlZlW9AAd3CCwNImAdlkmu80s5%2FP7pgbM3ZuXLQbXqAy2R0WerxSys6ElZK2dM5HdOtfmWKLy&X-Amz-Signature=a1e02ac3f013d9e34ed7d94b274cea569f8ff9be82a9d97871cc3d43eb16e4cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAWLVTT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjY0EmeHAmpbO%2FPb0pCUn4I1SLRPXhBliBN1d4QiyPWAiA%2FrKsahBfPb5piq7MANqkmYtsfDt0GuQtE3TuiQQJaQir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMh%2BTvC3vuUdEcR7jbKtwDVsZUrZ6KX4ANO%2FG3UbdwmHSfRTgJ1qIy6J53mxxBvOEurfDqnKe0dZiDFjDLIQDJbRMmxlESA6SR0wTt8EMpldSC72GBKG8CIGvbT9ZXJp6l0eg%2F5GyVQhXIVwLx0eARSP9yITqc5SYXVdVjjDouEaB64uhV8W%2F8W2vdTSZaTAxpJCn311RJKO1jLxhp%2Fx8CgG%2FdcOAQvHTZeFCv8uXbVFizssf9F0bJI57YRpub%2FogC%2BRpTbJWRYIZ3ADvD5ssDfxxDPmvnKx%2BJR7NPLlhw5DxIT9Av6cMW9n5u4l63MBTNvDW5AOnTyFRvwf7HEBzyke4b0BjE%2F%2BZnVmfwxWL9mbuTGJQewVPejhITKimtRCSo6IjGfgjg6mrnkwnNUY3TtVv9MXDYCkfcnTbZciFIxVHAXa6RsOY%2BNI2xpyQxHGBmbN4j6ulD3t8EhvsKpsW16P9Sy1iP58IrjtMIz%2FjzQWrS5W3j8DckPze3%2BQohwRsQACrz3jq32ctq7%2BelTd7lgDNRV6kc66tgnh9JSBLNwnJfSN1UrG7aXYdZqhADB6mWVbt5mUQjj45jUNc38CzC%2FpCwoQV3zR8IoKPlzlY%2FNmLtnafnp2r%2B2GWVnv8Oe0GENR1BCg5OwDPkxn0wy%2FqPwgY6pgGua9GV6fBbnXI8hvJpJ2K2U1iQqMYu36xkys9HiTMQBJOva7KBAcJvVihBl4DqmM%2F7pf2Z8iQRpV7CRKN3oLLPIXnurvhdMip6KsRmUsjBweeExqDb70%2Bqzgk9wVT3Ok%2BPHbPtkzOED3mM%2BLHatO1mlZlW9AAd3CCwNImAdlkmu80s5%2FP7pgbM3ZuXLQbXqAy2R0WerxSys6ElZK2dM5HdOtfmWKLy&X-Amz-Signature=ffafcd6bf127cbef2c4a0304644d88061156dc12fd113897504e246cd35b78e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAWLVTT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjY0EmeHAmpbO%2FPb0pCUn4I1SLRPXhBliBN1d4QiyPWAiA%2FrKsahBfPb5piq7MANqkmYtsfDt0GuQtE3TuiQQJaQir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMh%2BTvC3vuUdEcR7jbKtwDVsZUrZ6KX4ANO%2FG3UbdwmHSfRTgJ1qIy6J53mxxBvOEurfDqnKe0dZiDFjDLIQDJbRMmxlESA6SR0wTt8EMpldSC72GBKG8CIGvbT9ZXJp6l0eg%2F5GyVQhXIVwLx0eARSP9yITqc5SYXVdVjjDouEaB64uhV8W%2F8W2vdTSZaTAxpJCn311RJKO1jLxhp%2Fx8CgG%2FdcOAQvHTZeFCv8uXbVFizssf9F0bJI57YRpub%2FogC%2BRpTbJWRYIZ3ADvD5ssDfxxDPmvnKx%2BJR7NPLlhw5DxIT9Av6cMW9n5u4l63MBTNvDW5AOnTyFRvwf7HEBzyke4b0BjE%2F%2BZnVmfwxWL9mbuTGJQewVPejhITKimtRCSo6IjGfgjg6mrnkwnNUY3TtVv9MXDYCkfcnTbZciFIxVHAXa6RsOY%2BNI2xpyQxHGBmbN4j6ulD3t8EhvsKpsW16P9Sy1iP58IrjtMIz%2FjzQWrS5W3j8DckPze3%2BQohwRsQACrz3jq32ctq7%2BelTd7lgDNRV6kc66tgnh9JSBLNwnJfSN1UrG7aXYdZqhADB6mWVbt5mUQjj45jUNc38CzC%2FpCwoQV3zR8IoKPlzlY%2FNmLtnafnp2r%2B2GWVnv8Oe0GENR1BCg5OwDPkxn0wy%2FqPwgY6pgGua9GV6fBbnXI8hvJpJ2K2U1iQqMYu36xkys9HiTMQBJOva7KBAcJvVihBl4DqmM%2F7pf2Z8iQRpV7CRKN3oLLPIXnurvhdMip6KsRmUsjBweeExqDb70%2Bqzgk9wVT3Ok%2BPHbPtkzOED3mM%2BLHatO1mlZlW9AAd3CCwNImAdlkmu80s5%2FP7pgbM3ZuXLQbXqAy2R0WerxSys6ElZK2dM5HdOtfmWKLy&X-Amz-Signature=5eb8c0528d2c4c819fb4ae39924c3a9eaa5351aac0655a5e03e159743716ba87&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAWLVTT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjY0EmeHAmpbO%2FPb0pCUn4I1SLRPXhBliBN1d4QiyPWAiA%2FrKsahBfPb5piq7MANqkmYtsfDt0GuQtE3TuiQQJaQir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMh%2BTvC3vuUdEcR7jbKtwDVsZUrZ6KX4ANO%2FG3UbdwmHSfRTgJ1qIy6J53mxxBvOEurfDqnKe0dZiDFjDLIQDJbRMmxlESA6SR0wTt8EMpldSC72GBKG8CIGvbT9ZXJp6l0eg%2F5GyVQhXIVwLx0eARSP9yITqc5SYXVdVjjDouEaB64uhV8W%2F8W2vdTSZaTAxpJCn311RJKO1jLxhp%2Fx8CgG%2FdcOAQvHTZeFCv8uXbVFizssf9F0bJI57YRpub%2FogC%2BRpTbJWRYIZ3ADvD5ssDfxxDPmvnKx%2BJR7NPLlhw5DxIT9Av6cMW9n5u4l63MBTNvDW5AOnTyFRvwf7HEBzyke4b0BjE%2F%2BZnVmfwxWL9mbuTGJQewVPejhITKimtRCSo6IjGfgjg6mrnkwnNUY3TtVv9MXDYCkfcnTbZciFIxVHAXa6RsOY%2BNI2xpyQxHGBmbN4j6ulD3t8EhvsKpsW16P9Sy1iP58IrjtMIz%2FjzQWrS5W3j8DckPze3%2BQohwRsQACrz3jq32ctq7%2BelTd7lgDNRV6kc66tgnh9JSBLNwnJfSN1UrG7aXYdZqhADB6mWVbt5mUQjj45jUNc38CzC%2FpCwoQV3zR8IoKPlzlY%2FNmLtnafnp2r%2B2GWVnv8Oe0GENR1BCg5OwDPkxn0wy%2FqPwgY6pgGua9GV6fBbnXI8hvJpJ2K2U1iQqMYu36xkys9HiTMQBJOva7KBAcJvVihBl4DqmM%2F7pf2Z8iQRpV7CRKN3oLLPIXnurvhdMip6KsRmUsjBweeExqDb70%2Bqzgk9wVT3Ok%2BPHbPtkzOED3mM%2BLHatO1mlZlW9AAd3CCwNImAdlkmu80s5%2FP7pgbM3ZuXLQbXqAy2R0WerxSys6ElZK2dM5HdOtfmWKLy&X-Amz-Signature=725f926bbea8e5652a1d78fd7d1dceb2e277f295f5f8399c4e1ac5be298fec7b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAWLVTT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjY0EmeHAmpbO%2FPb0pCUn4I1SLRPXhBliBN1d4QiyPWAiA%2FrKsahBfPb5piq7MANqkmYtsfDt0GuQtE3TuiQQJaQir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMh%2BTvC3vuUdEcR7jbKtwDVsZUrZ6KX4ANO%2FG3UbdwmHSfRTgJ1qIy6J53mxxBvOEurfDqnKe0dZiDFjDLIQDJbRMmxlESA6SR0wTt8EMpldSC72GBKG8CIGvbT9ZXJp6l0eg%2F5GyVQhXIVwLx0eARSP9yITqc5SYXVdVjjDouEaB64uhV8W%2F8W2vdTSZaTAxpJCn311RJKO1jLxhp%2Fx8CgG%2FdcOAQvHTZeFCv8uXbVFizssf9F0bJI57YRpub%2FogC%2BRpTbJWRYIZ3ADvD5ssDfxxDPmvnKx%2BJR7NPLlhw5DxIT9Av6cMW9n5u4l63MBTNvDW5AOnTyFRvwf7HEBzyke4b0BjE%2F%2BZnVmfwxWL9mbuTGJQewVPejhITKimtRCSo6IjGfgjg6mrnkwnNUY3TtVv9MXDYCkfcnTbZciFIxVHAXa6RsOY%2BNI2xpyQxHGBmbN4j6ulD3t8EhvsKpsW16P9Sy1iP58IrjtMIz%2FjzQWrS5W3j8DckPze3%2BQohwRsQACrz3jq32ctq7%2BelTd7lgDNRV6kc66tgnh9JSBLNwnJfSN1UrG7aXYdZqhADB6mWVbt5mUQjj45jUNc38CzC%2FpCwoQV3zR8IoKPlzlY%2FNmLtnafnp2r%2B2GWVnv8Oe0GENR1BCg5OwDPkxn0wy%2FqPwgY6pgGua9GV6fBbnXI8hvJpJ2K2U1iQqMYu36xkys9HiTMQBJOva7KBAcJvVihBl4DqmM%2F7pf2Z8iQRpV7CRKN3oLLPIXnurvhdMip6KsRmUsjBweeExqDb70%2Bqzgk9wVT3Ok%2BPHbPtkzOED3mM%2BLHatO1mlZlW9AAd3CCwNImAdlkmu80s5%2FP7pgbM3ZuXLQbXqAy2R0WerxSys6ElZK2dM5HdOtfmWKLy&X-Amz-Signature=2b59f1011280bd2f60f331aeafc4bbec80bf2b7c2c44d311be508e4facfff434&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAWLVTT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjY0EmeHAmpbO%2FPb0pCUn4I1SLRPXhBliBN1d4QiyPWAiA%2FrKsahBfPb5piq7MANqkmYtsfDt0GuQtE3TuiQQJaQir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMh%2BTvC3vuUdEcR7jbKtwDVsZUrZ6KX4ANO%2FG3UbdwmHSfRTgJ1qIy6J53mxxBvOEurfDqnKe0dZiDFjDLIQDJbRMmxlESA6SR0wTt8EMpldSC72GBKG8CIGvbT9ZXJp6l0eg%2F5GyVQhXIVwLx0eARSP9yITqc5SYXVdVjjDouEaB64uhV8W%2F8W2vdTSZaTAxpJCn311RJKO1jLxhp%2Fx8CgG%2FdcOAQvHTZeFCv8uXbVFizssf9F0bJI57YRpub%2FogC%2BRpTbJWRYIZ3ADvD5ssDfxxDPmvnKx%2BJR7NPLlhw5DxIT9Av6cMW9n5u4l63MBTNvDW5AOnTyFRvwf7HEBzyke4b0BjE%2F%2BZnVmfwxWL9mbuTGJQewVPejhITKimtRCSo6IjGfgjg6mrnkwnNUY3TtVv9MXDYCkfcnTbZciFIxVHAXa6RsOY%2BNI2xpyQxHGBmbN4j6ulD3t8EhvsKpsW16P9Sy1iP58IrjtMIz%2FjzQWrS5W3j8DckPze3%2BQohwRsQACrz3jq32ctq7%2BelTd7lgDNRV6kc66tgnh9JSBLNwnJfSN1UrG7aXYdZqhADB6mWVbt5mUQjj45jUNc38CzC%2FpCwoQV3zR8IoKPlzlY%2FNmLtnafnp2r%2B2GWVnv8Oe0GENR1BCg5OwDPkxn0wy%2FqPwgY6pgGua9GV6fBbnXI8hvJpJ2K2U1iQqMYu36xkys9HiTMQBJOva7KBAcJvVihBl4DqmM%2F7pf2Z8iQRpV7CRKN3oLLPIXnurvhdMip6KsRmUsjBweeExqDb70%2Bqzgk9wVT3Ok%2BPHbPtkzOED3mM%2BLHatO1mlZlW9AAd3CCwNImAdlkmu80s5%2FP7pgbM3ZuXLQbXqAy2R0WerxSys6ElZK2dM5HdOtfmWKLy&X-Amz-Signature=808a7a36ee67ad7d64b689ebccfaad7c8eb66731368582a991aab8799ba3e138&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

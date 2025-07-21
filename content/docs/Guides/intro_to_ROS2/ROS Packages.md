---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BX66GP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBFpA5cA3hYi6KDflYN%2FqEPLfzm8c1beI5HKbyOtMjFAIgGgRvvVbR4UTasd%2B8Ng3F0xSrJUamdZVXK6gVye3LL6AqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVtwHBjsiSZqSXelircA2XLkc%2FWLzzelFROrSGRnsh4y%2FrrebMjvDOwwhTjMSLXjs6G9juvZ0uQgW3qeKxiIGJEm1a3pku3uW6Q%2Bj%2BzrQ1%2Ft0Z4NpfhqHglHhpq92LfHw28vx%2FOXg35je7FD%2FBooPnyW%2BmSzcgNww%2BLi1LstoRtva7iIu97%2FzzVR3E4OSMRiGFbG7F%2Fv0b%2FDR7cHT3sfsnuSgWJlO7glC0Ji2gS9tHoojyKiX6P8vvPLv5H2XGbZCVmTsylm%2F1iCcMZqeZGWBBf8q9wcjy%2Fy1puJIVkoZ%2BWwHdZpkrkUhQU3dKlUmh5A%2Fpc79gGafGWmMzKX4vzqo5ca37zs5wjzaqgp45sw5SwvSSFH0kPjOBqlyj0jvKzqEBIqi4EoBj4JojtCs%2FKS0v8DCrDzryDr9SXgX5t2HjXuQMZXaNmw1hJMVP%2BBG%2BJZTtJPT7HYi1W9tdDyDsmdGqDs3zz8j18bXH%2B6NYprBGlHRje0JvSypeEQKfTPONCNrfB%2BUWxfWPj8Is8b%2BBZAo7PQf6%2F%2BDJYtyaE%2B%2B9MJcgf5pyr3ijtN%2BGdHUIGPaqEBrawGqKhEBIZzdcLFTXjeCe%2BnBS%2BnuFDMsRQr%2B75rGF2VNJYvXKh24DTtiPirUIbFXKfYOCh89iDSQQXMKvX%2BsMGOqUBN%2BM78kjrEy5gZn%2BsPJK8wVX%2BRhUmV2rVVQVbUQiPSUCzMQWfanuuYWJrpgbyfcgjbBmro0nvjhQRHxi%2BRPY4ZKSi%2FhJ5XArHVZKPECvpExHU8gTRqxGmL1r6EQc1xi3%2FwTC6k6FVGJ2k6rxcV4wEree8CBKqEmi3XjNqq%2F%2BJX7f7ACB4jxVYvJmkrNGE5X4xyCVh4o435EWxNDRJBAGF69c69vfQ&X-Amz-Signature=61b3d6194c8c3bb962fd9a59239656d0bebb882489f1ac09a258ccdf78d2860d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BX66GP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBFpA5cA3hYi6KDflYN%2FqEPLfzm8c1beI5HKbyOtMjFAIgGgRvvVbR4UTasd%2B8Ng3F0xSrJUamdZVXK6gVye3LL6AqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVtwHBjsiSZqSXelircA2XLkc%2FWLzzelFROrSGRnsh4y%2FrrebMjvDOwwhTjMSLXjs6G9juvZ0uQgW3qeKxiIGJEm1a3pku3uW6Q%2Bj%2BzrQ1%2Ft0Z4NpfhqHglHhpq92LfHw28vx%2FOXg35je7FD%2FBooPnyW%2BmSzcgNww%2BLi1LstoRtva7iIu97%2FzzVR3E4OSMRiGFbG7F%2Fv0b%2FDR7cHT3sfsnuSgWJlO7glC0Ji2gS9tHoojyKiX6P8vvPLv5H2XGbZCVmTsylm%2F1iCcMZqeZGWBBf8q9wcjy%2Fy1puJIVkoZ%2BWwHdZpkrkUhQU3dKlUmh5A%2Fpc79gGafGWmMzKX4vzqo5ca37zs5wjzaqgp45sw5SwvSSFH0kPjOBqlyj0jvKzqEBIqi4EoBj4JojtCs%2FKS0v8DCrDzryDr9SXgX5t2HjXuQMZXaNmw1hJMVP%2BBG%2BJZTtJPT7HYi1W9tdDyDsmdGqDs3zz8j18bXH%2B6NYprBGlHRje0JvSypeEQKfTPONCNrfB%2BUWxfWPj8Is8b%2BBZAo7PQf6%2F%2BDJYtyaE%2B%2B9MJcgf5pyr3ijtN%2BGdHUIGPaqEBrawGqKhEBIZzdcLFTXjeCe%2BnBS%2BnuFDMsRQr%2B75rGF2VNJYvXKh24DTtiPirUIbFXKfYOCh89iDSQQXMKvX%2BsMGOqUBN%2BM78kjrEy5gZn%2BsPJK8wVX%2BRhUmV2rVVQVbUQiPSUCzMQWfanuuYWJrpgbyfcgjbBmro0nvjhQRHxi%2BRPY4ZKSi%2FhJ5XArHVZKPECvpExHU8gTRqxGmL1r6EQc1xi3%2FwTC6k6FVGJ2k6rxcV4wEree8CBKqEmi3XjNqq%2F%2BJX7f7ACB4jxVYvJmkrNGE5X4xyCVh4o435EWxNDRJBAGF69c69vfQ&X-Amz-Signature=138481a58474001ab8ecb018c54525da6c9f6dfde3cf31d091ec9d89acdc8cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BX66GP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBFpA5cA3hYi6KDflYN%2FqEPLfzm8c1beI5HKbyOtMjFAIgGgRvvVbR4UTasd%2B8Ng3F0xSrJUamdZVXK6gVye3LL6AqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVtwHBjsiSZqSXelircA2XLkc%2FWLzzelFROrSGRnsh4y%2FrrebMjvDOwwhTjMSLXjs6G9juvZ0uQgW3qeKxiIGJEm1a3pku3uW6Q%2Bj%2BzrQ1%2Ft0Z4NpfhqHglHhpq92LfHw28vx%2FOXg35je7FD%2FBooPnyW%2BmSzcgNww%2BLi1LstoRtva7iIu97%2FzzVR3E4OSMRiGFbG7F%2Fv0b%2FDR7cHT3sfsnuSgWJlO7glC0Ji2gS9tHoojyKiX6P8vvPLv5H2XGbZCVmTsylm%2F1iCcMZqeZGWBBf8q9wcjy%2Fy1puJIVkoZ%2BWwHdZpkrkUhQU3dKlUmh5A%2Fpc79gGafGWmMzKX4vzqo5ca37zs5wjzaqgp45sw5SwvSSFH0kPjOBqlyj0jvKzqEBIqi4EoBj4JojtCs%2FKS0v8DCrDzryDr9SXgX5t2HjXuQMZXaNmw1hJMVP%2BBG%2BJZTtJPT7HYi1W9tdDyDsmdGqDs3zz8j18bXH%2B6NYprBGlHRje0JvSypeEQKfTPONCNrfB%2BUWxfWPj8Is8b%2BBZAo7PQf6%2F%2BDJYtyaE%2B%2B9MJcgf5pyr3ijtN%2BGdHUIGPaqEBrawGqKhEBIZzdcLFTXjeCe%2BnBS%2BnuFDMsRQr%2B75rGF2VNJYvXKh24DTtiPirUIbFXKfYOCh89iDSQQXMKvX%2BsMGOqUBN%2BM78kjrEy5gZn%2BsPJK8wVX%2BRhUmV2rVVQVbUQiPSUCzMQWfanuuYWJrpgbyfcgjbBmro0nvjhQRHxi%2BRPY4ZKSi%2FhJ5XArHVZKPECvpExHU8gTRqxGmL1r6EQc1xi3%2FwTC6k6FVGJ2k6rxcV4wEree8CBKqEmi3XjNqq%2F%2BJX7f7ACB4jxVYvJmkrNGE5X4xyCVh4o435EWxNDRJBAGF69c69vfQ&X-Amz-Signature=86ec4fbf048822337e6c5c5a8d3dce2dacb742dcb8587a5b503fb1597c0fce1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BX66GP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBFpA5cA3hYi6KDflYN%2FqEPLfzm8c1beI5HKbyOtMjFAIgGgRvvVbR4UTasd%2B8Ng3F0xSrJUamdZVXK6gVye3LL6AqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVtwHBjsiSZqSXelircA2XLkc%2FWLzzelFROrSGRnsh4y%2FrrebMjvDOwwhTjMSLXjs6G9juvZ0uQgW3qeKxiIGJEm1a3pku3uW6Q%2Bj%2BzrQ1%2Ft0Z4NpfhqHglHhpq92LfHw28vx%2FOXg35je7FD%2FBooPnyW%2BmSzcgNww%2BLi1LstoRtva7iIu97%2FzzVR3E4OSMRiGFbG7F%2Fv0b%2FDR7cHT3sfsnuSgWJlO7glC0Ji2gS9tHoojyKiX6P8vvPLv5H2XGbZCVmTsylm%2F1iCcMZqeZGWBBf8q9wcjy%2Fy1puJIVkoZ%2BWwHdZpkrkUhQU3dKlUmh5A%2Fpc79gGafGWmMzKX4vzqo5ca37zs5wjzaqgp45sw5SwvSSFH0kPjOBqlyj0jvKzqEBIqi4EoBj4JojtCs%2FKS0v8DCrDzryDr9SXgX5t2HjXuQMZXaNmw1hJMVP%2BBG%2BJZTtJPT7HYi1W9tdDyDsmdGqDs3zz8j18bXH%2B6NYprBGlHRje0JvSypeEQKfTPONCNrfB%2BUWxfWPj8Is8b%2BBZAo7PQf6%2F%2BDJYtyaE%2B%2B9MJcgf5pyr3ijtN%2BGdHUIGPaqEBrawGqKhEBIZzdcLFTXjeCe%2BnBS%2BnuFDMsRQr%2B75rGF2VNJYvXKh24DTtiPirUIbFXKfYOCh89iDSQQXMKvX%2BsMGOqUBN%2BM78kjrEy5gZn%2BsPJK8wVX%2BRhUmV2rVVQVbUQiPSUCzMQWfanuuYWJrpgbyfcgjbBmro0nvjhQRHxi%2BRPY4ZKSi%2FhJ5XArHVZKPECvpExHU8gTRqxGmL1r6EQc1xi3%2FwTC6k6FVGJ2k6rxcV4wEree8CBKqEmi3XjNqq%2F%2BJX7f7ACB4jxVYvJmkrNGE5X4xyCVh4o435EWxNDRJBAGF69c69vfQ&X-Amz-Signature=01c4b44b9a2d93021bda8e7078e595aafaeb7a52aea8598033cbd3a2dcd6230d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BX66GP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBFpA5cA3hYi6KDflYN%2FqEPLfzm8c1beI5HKbyOtMjFAIgGgRvvVbR4UTasd%2B8Ng3F0xSrJUamdZVXK6gVye3LL6AqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVtwHBjsiSZqSXelircA2XLkc%2FWLzzelFROrSGRnsh4y%2FrrebMjvDOwwhTjMSLXjs6G9juvZ0uQgW3qeKxiIGJEm1a3pku3uW6Q%2Bj%2BzrQ1%2Ft0Z4NpfhqHglHhpq92LfHw28vx%2FOXg35je7FD%2FBooPnyW%2BmSzcgNww%2BLi1LstoRtva7iIu97%2FzzVR3E4OSMRiGFbG7F%2Fv0b%2FDR7cHT3sfsnuSgWJlO7glC0Ji2gS9tHoojyKiX6P8vvPLv5H2XGbZCVmTsylm%2F1iCcMZqeZGWBBf8q9wcjy%2Fy1puJIVkoZ%2BWwHdZpkrkUhQU3dKlUmh5A%2Fpc79gGafGWmMzKX4vzqo5ca37zs5wjzaqgp45sw5SwvSSFH0kPjOBqlyj0jvKzqEBIqi4EoBj4JojtCs%2FKS0v8DCrDzryDr9SXgX5t2HjXuQMZXaNmw1hJMVP%2BBG%2BJZTtJPT7HYi1W9tdDyDsmdGqDs3zz8j18bXH%2B6NYprBGlHRje0JvSypeEQKfTPONCNrfB%2BUWxfWPj8Is8b%2BBZAo7PQf6%2F%2BDJYtyaE%2B%2B9MJcgf5pyr3ijtN%2BGdHUIGPaqEBrawGqKhEBIZzdcLFTXjeCe%2BnBS%2BnuFDMsRQr%2B75rGF2VNJYvXKh24DTtiPirUIbFXKfYOCh89iDSQQXMKvX%2BsMGOqUBN%2BM78kjrEy5gZn%2BsPJK8wVX%2BRhUmV2rVVQVbUQiPSUCzMQWfanuuYWJrpgbyfcgjbBmro0nvjhQRHxi%2BRPY4ZKSi%2FhJ5XArHVZKPECvpExHU8gTRqxGmL1r6EQc1xi3%2FwTC6k6FVGJ2k6rxcV4wEree8CBKqEmi3XjNqq%2F%2BJX7f7ACB4jxVYvJmkrNGE5X4xyCVh4o435EWxNDRJBAGF69c69vfQ&X-Amz-Signature=517b48edacb6f1b4be59e026cd36169922c9cad250af1dca547863dfb60d29ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BX66GP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBFpA5cA3hYi6KDflYN%2FqEPLfzm8c1beI5HKbyOtMjFAIgGgRvvVbR4UTasd%2B8Ng3F0xSrJUamdZVXK6gVye3LL6AqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVtwHBjsiSZqSXelircA2XLkc%2FWLzzelFROrSGRnsh4y%2FrrebMjvDOwwhTjMSLXjs6G9juvZ0uQgW3qeKxiIGJEm1a3pku3uW6Q%2Bj%2BzrQ1%2Ft0Z4NpfhqHglHhpq92LfHw28vx%2FOXg35je7FD%2FBooPnyW%2BmSzcgNww%2BLi1LstoRtva7iIu97%2FzzVR3E4OSMRiGFbG7F%2Fv0b%2FDR7cHT3sfsnuSgWJlO7glC0Ji2gS9tHoojyKiX6P8vvPLv5H2XGbZCVmTsylm%2F1iCcMZqeZGWBBf8q9wcjy%2Fy1puJIVkoZ%2BWwHdZpkrkUhQU3dKlUmh5A%2Fpc79gGafGWmMzKX4vzqo5ca37zs5wjzaqgp45sw5SwvSSFH0kPjOBqlyj0jvKzqEBIqi4EoBj4JojtCs%2FKS0v8DCrDzryDr9SXgX5t2HjXuQMZXaNmw1hJMVP%2BBG%2BJZTtJPT7HYi1W9tdDyDsmdGqDs3zz8j18bXH%2B6NYprBGlHRje0JvSypeEQKfTPONCNrfB%2BUWxfWPj8Is8b%2BBZAo7PQf6%2F%2BDJYtyaE%2B%2B9MJcgf5pyr3ijtN%2BGdHUIGPaqEBrawGqKhEBIZzdcLFTXjeCe%2BnBS%2BnuFDMsRQr%2B75rGF2VNJYvXKh24DTtiPirUIbFXKfYOCh89iDSQQXMKvX%2BsMGOqUBN%2BM78kjrEy5gZn%2BsPJK8wVX%2BRhUmV2rVVQVbUQiPSUCzMQWfanuuYWJrpgbyfcgjbBmro0nvjhQRHxi%2BRPY4ZKSi%2FhJ5XArHVZKPECvpExHU8gTRqxGmL1r6EQc1xi3%2FwTC6k6FVGJ2k6rxcV4wEree8CBKqEmi3XjNqq%2F%2BJX7f7ACB4jxVYvJmkrNGE5X4xyCVh4o435EWxNDRJBAGF69c69vfQ&X-Amz-Signature=f78163e5e71c5cc27c0a96d7f5eb1315808124a2f90f6710bf8d52b604721288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6BX66GP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T210842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBFpA5cA3hYi6KDflYN%2FqEPLfzm8c1beI5HKbyOtMjFAIgGgRvvVbR4UTasd%2B8Ng3F0xSrJUamdZVXK6gVye3LL6AqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVtwHBjsiSZqSXelircA2XLkc%2FWLzzelFROrSGRnsh4y%2FrrebMjvDOwwhTjMSLXjs6G9juvZ0uQgW3qeKxiIGJEm1a3pku3uW6Q%2Bj%2BzrQ1%2Ft0Z4NpfhqHglHhpq92LfHw28vx%2FOXg35je7FD%2FBooPnyW%2BmSzcgNww%2BLi1LstoRtva7iIu97%2FzzVR3E4OSMRiGFbG7F%2Fv0b%2FDR7cHT3sfsnuSgWJlO7glC0Ji2gS9tHoojyKiX6P8vvPLv5H2XGbZCVmTsylm%2F1iCcMZqeZGWBBf8q9wcjy%2Fy1puJIVkoZ%2BWwHdZpkrkUhQU3dKlUmh5A%2Fpc79gGafGWmMzKX4vzqo5ca37zs5wjzaqgp45sw5SwvSSFH0kPjOBqlyj0jvKzqEBIqi4EoBj4JojtCs%2FKS0v8DCrDzryDr9SXgX5t2HjXuQMZXaNmw1hJMVP%2BBG%2BJZTtJPT7HYi1W9tdDyDsmdGqDs3zz8j18bXH%2B6NYprBGlHRje0JvSypeEQKfTPONCNrfB%2BUWxfWPj8Is8b%2BBZAo7PQf6%2F%2BDJYtyaE%2B%2B9MJcgf5pyr3ijtN%2BGdHUIGPaqEBrawGqKhEBIZzdcLFTXjeCe%2BnBS%2BnuFDMsRQr%2B75rGF2VNJYvXKh24DTtiPirUIbFXKfYOCh89iDSQQXMKvX%2BsMGOqUBN%2BM78kjrEy5gZn%2BsPJK8wVX%2BRhUmV2rVVQVbUQiPSUCzMQWfanuuYWJrpgbyfcgjbBmro0nvjhQRHxi%2BRPY4ZKSi%2FhJ5XArHVZKPECvpExHU8gTRqxGmL1r6EQc1xi3%2FwTC6k6FVGJ2k6rxcV4wEree8CBKqEmi3XjNqq%2F%2BJX7f7ACB4jxVYvJmkrNGE5X4xyCVh4o435EWxNDRJBAGF69c69vfQ&X-Amz-Signature=2275da1b7745e95882e0349c976562aa09b3283e69f73a9b70f73d6df69f1f58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

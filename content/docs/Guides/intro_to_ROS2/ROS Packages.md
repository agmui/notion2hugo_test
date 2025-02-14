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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7AILWC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCuHzISLTdGDCdhAA4fViYF8x8tXkkRbmVpATUODNm0GAIhAJ3pdmxmst25ROAxmn8KJtggQM12XYNB%2FqHwxb7V0BGhKv8DCC0QABoMNjM3NDIzMTgzODA1IgzgqG8bsx42BjybP%2Boq3AMEr2y2GAlYJiMEPeTKJUiCprUkhe%2B7kqWiw8Qai3prFL8%2FXGrX4x8qbrjJsQOQ43HX6HR1QmvMzbBib2JatKd3dRDIAMPxYREEMNBRuxrnnOAEkc7RyzQrBsN4IXy4KyZvVmMrNeIl7HkmjRtwjv2ETmLLMThsjE1SPpJv4p5%2FhmNXnV0goeKE314%2BjfT%2BSRe4Wbjfa06bdINKzEwpZVdfEAwNXZPkwTEQZDTWUdEMldqw5HEzEC5eoqy9YCxw8RyX65lSD7NBO4cVJ66n4GyGA2TlMZ5ejiR1UHfm%2FkYENPKpHsJhPE0fevvv7LsV2MLXIHeHcGiVpOZjBbSN9F4ClEryZI4JUw%2BvrXJzKlfFdYrC4wTQ%2FCgH71W1%2BMxBCjljHPDHDpxkLZn%2BuenDHlk%2BaBgtdnci50V4ocogKGMNqhT1%2FIh5HGbQHesQYtb7TDkreQpvqPi2L1B1kbYtIK%2BggNGeSDHQtaR7TAJs1uzdX6pFay%2BP9lAJsjhBZDa3qnRKmQzXBpm4B2E5O6p%2BPTvh0Ys5jy64yCK9zhnIPSJZjEq3c0PpeIiBPTwAG%2B6TEWdfUuVUdN6iq5LrdPAW699l9R4iy5HO2sCvoPd1eifWSjcgJJ235aZhhJWhojDp6ry9BjqkAWCoo%2FJnwG7TLAWXGsnVEaoX7%2Ftat%2BMiHeFrqasAl%2BtliR0D9%2FVUGmiUXhj050hBz5NgBHZcUDFt%2FPgQjL%2BllXlT2IXJg%2FUfiujpPh0Lh6yBuIuCPBATZjy%2FB%2FCOQAzdgenwo1vTMW%2FKP0asXglvUDEvGXx%2BxWzr60M0fiVs1ZOhwnvWOUfewQu%2FALW%2FU16YFdKvGWhkPaLLMxOwPp8T2jO2VPEw&X-Amz-Signature=5dda2a188693d9b7fd95db59333d0d6451332fafaa86028fb66e2ac02850f248&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7AILWC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCuHzISLTdGDCdhAA4fViYF8x8tXkkRbmVpATUODNm0GAIhAJ3pdmxmst25ROAxmn8KJtggQM12XYNB%2FqHwxb7V0BGhKv8DCC0QABoMNjM3NDIzMTgzODA1IgzgqG8bsx42BjybP%2Boq3AMEr2y2GAlYJiMEPeTKJUiCprUkhe%2B7kqWiw8Qai3prFL8%2FXGrX4x8qbrjJsQOQ43HX6HR1QmvMzbBib2JatKd3dRDIAMPxYREEMNBRuxrnnOAEkc7RyzQrBsN4IXy4KyZvVmMrNeIl7HkmjRtwjv2ETmLLMThsjE1SPpJv4p5%2FhmNXnV0goeKE314%2BjfT%2BSRe4Wbjfa06bdINKzEwpZVdfEAwNXZPkwTEQZDTWUdEMldqw5HEzEC5eoqy9YCxw8RyX65lSD7NBO4cVJ66n4GyGA2TlMZ5ejiR1UHfm%2FkYENPKpHsJhPE0fevvv7LsV2MLXIHeHcGiVpOZjBbSN9F4ClEryZI4JUw%2BvrXJzKlfFdYrC4wTQ%2FCgH71W1%2BMxBCjljHPDHDpxkLZn%2BuenDHlk%2BaBgtdnci50V4ocogKGMNqhT1%2FIh5HGbQHesQYtb7TDkreQpvqPi2L1B1kbYtIK%2BggNGeSDHQtaR7TAJs1uzdX6pFay%2BP9lAJsjhBZDa3qnRKmQzXBpm4B2E5O6p%2BPTvh0Ys5jy64yCK9zhnIPSJZjEq3c0PpeIiBPTwAG%2B6TEWdfUuVUdN6iq5LrdPAW699l9R4iy5HO2sCvoPd1eifWSjcgJJ235aZhhJWhojDp6ry9BjqkAWCoo%2FJnwG7TLAWXGsnVEaoX7%2Ftat%2BMiHeFrqasAl%2BtliR0D9%2FVUGmiUXhj050hBz5NgBHZcUDFt%2FPgQjL%2BllXlT2IXJg%2FUfiujpPh0Lh6yBuIuCPBATZjy%2FB%2FCOQAzdgenwo1vTMW%2FKP0asXglvUDEvGXx%2BxWzr60M0fiVs1ZOhwnvWOUfewQu%2FALW%2FU16YFdKvGWhkPaLLMxOwPp8T2jO2VPEw&X-Amz-Signature=00acbee45ab433cbade0e6ba893f07f9f91973e268203e5c3f4b082eb101dd23&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7AILWC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCuHzISLTdGDCdhAA4fViYF8x8tXkkRbmVpATUODNm0GAIhAJ3pdmxmst25ROAxmn8KJtggQM12XYNB%2FqHwxb7V0BGhKv8DCC0QABoMNjM3NDIzMTgzODA1IgzgqG8bsx42BjybP%2Boq3AMEr2y2GAlYJiMEPeTKJUiCprUkhe%2B7kqWiw8Qai3prFL8%2FXGrX4x8qbrjJsQOQ43HX6HR1QmvMzbBib2JatKd3dRDIAMPxYREEMNBRuxrnnOAEkc7RyzQrBsN4IXy4KyZvVmMrNeIl7HkmjRtwjv2ETmLLMThsjE1SPpJv4p5%2FhmNXnV0goeKE314%2BjfT%2BSRe4Wbjfa06bdINKzEwpZVdfEAwNXZPkwTEQZDTWUdEMldqw5HEzEC5eoqy9YCxw8RyX65lSD7NBO4cVJ66n4GyGA2TlMZ5ejiR1UHfm%2FkYENPKpHsJhPE0fevvv7LsV2MLXIHeHcGiVpOZjBbSN9F4ClEryZI4JUw%2BvrXJzKlfFdYrC4wTQ%2FCgH71W1%2BMxBCjljHPDHDpxkLZn%2BuenDHlk%2BaBgtdnci50V4ocogKGMNqhT1%2FIh5HGbQHesQYtb7TDkreQpvqPi2L1B1kbYtIK%2BggNGeSDHQtaR7TAJs1uzdX6pFay%2BP9lAJsjhBZDa3qnRKmQzXBpm4B2E5O6p%2BPTvh0Ys5jy64yCK9zhnIPSJZjEq3c0PpeIiBPTwAG%2B6TEWdfUuVUdN6iq5LrdPAW699l9R4iy5HO2sCvoPd1eifWSjcgJJ235aZhhJWhojDp6ry9BjqkAWCoo%2FJnwG7TLAWXGsnVEaoX7%2Ftat%2BMiHeFrqasAl%2BtliR0D9%2FVUGmiUXhj050hBz5NgBHZcUDFt%2FPgQjL%2BllXlT2IXJg%2FUfiujpPh0Lh6yBuIuCPBATZjy%2FB%2FCOQAzdgenwo1vTMW%2FKP0asXglvUDEvGXx%2BxWzr60M0fiVs1ZOhwnvWOUfewQu%2FALW%2FU16YFdKvGWhkPaLLMxOwPp8T2jO2VPEw&X-Amz-Signature=fb6285586f2946f4b3fd74d27d85bd6f640fe607e697453fc4bb343b8114dacd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7AILWC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCuHzISLTdGDCdhAA4fViYF8x8tXkkRbmVpATUODNm0GAIhAJ3pdmxmst25ROAxmn8KJtggQM12XYNB%2FqHwxb7V0BGhKv8DCC0QABoMNjM3NDIzMTgzODA1IgzgqG8bsx42BjybP%2Boq3AMEr2y2GAlYJiMEPeTKJUiCprUkhe%2B7kqWiw8Qai3prFL8%2FXGrX4x8qbrjJsQOQ43HX6HR1QmvMzbBib2JatKd3dRDIAMPxYREEMNBRuxrnnOAEkc7RyzQrBsN4IXy4KyZvVmMrNeIl7HkmjRtwjv2ETmLLMThsjE1SPpJv4p5%2FhmNXnV0goeKE314%2BjfT%2BSRe4Wbjfa06bdINKzEwpZVdfEAwNXZPkwTEQZDTWUdEMldqw5HEzEC5eoqy9YCxw8RyX65lSD7NBO4cVJ66n4GyGA2TlMZ5ejiR1UHfm%2FkYENPKpHsJhPE0fevvv7LsV2MLXIHeHcGiVpOZjBbSN9F4ClEryZI4JUw%2BvrXJzKlfFdYrC4wTQ%2FCgH71W1%2BMxBCjljHPDHDpxkLZn%2BuenDHlk%2BaBgtdnci50V4ocogKGMNqhT1%2FIh5HGbQHesQYtb7TDkreQpvqPi2L1B1kbYtIK%2BggNGeSDHQtaR7TAJs1uzdX6pFay%2BP9lAJsjhBZDa3qnRKmQzXBpm4B2E5O6p%2BPTvh0Ys5jy64yCK9zhnIPSJZjEq3c0PpeIiBPTwAG%2B6TEWdfUuVUdN6iq5LrdPAW699l9R4iy5HO2sCvoPd1eifWSjcgJJ235aZhhJWhojDp6ry9BjqkAWCoo%2FJnwG7TLAWXGsnVEaoX7%2Ftat%2BMiHeFrqasAl%2BtliR0D9%2FVUGmiUXhj050hBz5NgBHZcUDFt%2FPgQjL%2BllXlT2IXJg%2FUfiujpPh0Lh6yBuIuCPBATZjy%2FB%2FCOQAzdgenwo1vTMW%2FKP0asXglvUDEvGXx%2BxWzr60M0fiVs1ZOhwnvWOUfewQu%2FALW%2FU16YFdKvGWhkPaLLMxOwPp8T2jO2VPEw&X-Amz-Signature=54ece762ded566c814799a68632d9da3944c37953ab0086228cc5a03350cc23e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7AILWC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCuHzISLTdGDCdhAA4fViYF8x8tXkkRbmVpATUODNm0GAIhAJ3pdmxmst25ROAxmn8KJtggQM12XYNB%2FqHwxb7V0BGhKv8DCC0QABoMNjM3NDIzMTgzODA1IgzgqG8bsx42BjybP%2Boq3AMEr2y2GAlYJiMEPeTKJUiCprUkhe%2B7kqWiw8Qai3prFL8%2FXGrX4x8qbrjJsQOQ43HX6HR1QmvMzbBib2JatKd3dRDIAMPxYREEMNBRuxrnnOAEkc7RyzQrBsN4IXy4KyZvVmMrNeIl7HkmjRtwjv2ETmLLMThsjE1SPpJv4p5%2FhmNXnV0goeKE314%2BjfT%2BSRe4Wbjfa06bdINKzEwpZVdfEAwNXZPkwTEQZDTWUdEMldqw5HEzEC5eoqy9YCxw8RyX65lSD7NBO4cVJ66n4GyGA2TlMZ5ejiR1UHfm%2FkYENPKpHsJhPE0fevvv7LsV2MLXIHeHcGiVpOZjBbSN9F4ClEryZI4JUw%2BvrXJzKlfFdYrC4wTQ%2FCgH71W1%2BMxBCjljHPDHDpxkLZn%2BuenDHlk%2BaBgtdnci50V4ocogKGMNqhT1%2FIh5HGbQHesQYtb7TDkreQpvqPi2L1B1kbYtIK%2BggNGeSDHQtaR7TAJs1uzdX6pFay%2BP9lAJsjhBZDa3qnRKmQzXBpm4B2E5O6p%2BPTvh0Ys5jy64yCK9zhnIPSJZjEq3c0PpeIiBPTwAG%2B6TEWdfUuVUdN6iq5LrdPAW699l9R4iy5HO2sCvoPd1eifWSjcgJJ235aZhhJWhojDp6ry9BjqkAWCoo%2FJnwG7TLAWXGsnVEaoX7%2Ftat%2BMiHeFrqasAl%2BtliR0D9%2FVUGmiUXhj050hBz5NgBHZcUDFt%2FPgQjL%2BllXlT2IXJg%2FUfiujpPh0Lh6yBuIuCPBATZjy%2FB%2FCOQAzdgenwo1vTMW%2FKP0asXglvUDEvGXx%2BxWzr60M0fiVs1ZOhwnvWOUfewQu%2FALW%2FU16YFdKvGWhkPaLLMxOwPp8T2jO2VPEw&X-Amz-Signature=2c29039e42334e5b9623d635fecf15b20d8e1ea9777714190f343f1224912cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7AILWC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCuHzISLTdGDCdhAA4fViYF8x8tXkkRbmVpATUODNm0GAIhAJ3pdmxmst25ROAxmn8KJtggQM12XYNB%2FqHwxb7V0BGhKv8DCC0QABoMNjM3NDIzMTgzODA1IgzgqG8bsx42BjybP%2Boq3AMEr2y2GAlYJiMEPeTKJUiCprUkhe%2B7kqWiw8Qai3prFL8%2FXGrX4x8qbrjJsQOQ43HX6HR1QmvMzbBib2JatKd3dRDIAMPxYREEMNBRuxrnnOAEkc7RyzQrBsN4IXy4KyZvVmMrNeIl7HkmjRtwjv2ETmLLMThsjE1SPpJv4p5%2FhmNXnV0goeKE314%2BjfT%2BSRe4Wbjfa06bdINKzEwpZVdfEAwNXZPkwTEQZDTWUdEMldqw5HEzEC5eoqy9YCxw8RyX65lSD7NBO4cVJ66n4GyGA2TlMZ5ejiR1UHfm%2FkYENPKpHsJhPE0fevvv7LsV2MLXIHeHcGiVpOZjBbSN9F4ClEryZI4JUw%2BvrXJzKlfFdYrC4wTQ%2FCgH71W1%2BMxBCjljHPDHDpxkLZn%2BuenDHlk%2BaBgtdnci50V4ocogKGMNqhT1%2FIh5HGbQHesQYtb7TDkreQpvqPi2L1B1kbYtIK%2BggNGeSDHQtaR7TAJs1uzdX6pFay%2BP9lAJsjhBZDa3qnRKmQzXBpm4B2E5O6p%2BPTvh0Ys5jy64yCK9zhnIPSJZjEq3c0PpeIiBPTwAG%2B6TEWdfUuVUdN6iq5LrdPAW699l9R4iy5HO2sCvoPd1eifWSjcgJJ235aZhhJWhojDp6ry9BjqkAWCoo%2FJnwG7TLAWXGsnVEaoX7%2Ftat%2BMiHeFrqasAl%2BtliR0D9%2FVUGmiUXhj050hBz5NgBHZcUDFt%2FPgQjL%2BllXlT2IXJg%2FUfiujpPh0Lh6yBuIuCPBATZjy%2FB%2FCOQAzdgenwo1vTMW%2FKP0asXglvUDEvGXx%2BxWzr60M0fiVs1ZOhwnvWOUfewQu%2FALW%2FU16YFdKvGWhkPaLLMxOwPp8T2jO2VPEw&X-Amz-Signature=ac772112d2b0b4bc1b5d1695d91d2cdf28d2da83cf430f88ddd4131cccd41571&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7AILWC%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCuHzISLTdGDCdhAA4fViYF8x8tXkkRbmVpATUODNm0GAIhAJ3pdmxmst25ROAxmn8KJtggQM12XYNB%2FqHwxb7V0BGhKv8DCC0QABoMNjM3NDIzMTgzODA1IgzgqG8bsx42BjybP%2Boq3AMEr2y2GAlYJiMEPeTKJUiCprUkhe%2B7kqWiw8Qai3prFL8%2FXGrX4x8qbrjJsQOQ43HX6HR1QmvMzbBib2JatKd3dRDIAMPxYREEMNBRuxrnnOAEkc7RyzQrBsN4IXy4KyZvVmMrNeIl7HkmjRtwjv2ETmLLMThsjE1SPpJv4p5%2FhmNXnV0goeKE314%2BjfT%2BSRe4Wbjfa06bdINKzEwpZVdfEAwNXZPkwTEQZDTWUdEMldqw5HEzEC5eoqy9YCxw8RyX65lSD7NBO4cVJ66n4GyGA2TlMZ5ejiR1UHfm%2FkYENPKpHsJhPE0fevvv7LsV2MLXIHeHcGiVpOZjBbSN9F4ClEryZI4JUw%2BvrXJzKlfFdYrC4wTQ%2FCgH71W1%2BMxBCjljHPDHDpxkLZn%2BuenDHlk%2BaBgtdnci50V4ocogKGMNqhT1%2FIh5HGbQHesQYtb7TDkreQpvqPi2L1B1kbYtIK%2BggNGeSDHQtaR7TAJs1uzdX6pFay%2BP9lAJsjhBZDa3qnRKmQzXBpm4B2E5O6p%2BPTvh0Ys5jy64yCK9zhnIPSJZjEq3c0PpeIiBPTwAG%2B6TEWdfUuVUdN6iq5LrdPAW699l9R4iy5HO2sCvoPd1eifWSjcgJJ235aZhhJWhojDp6ry9BjqkAWCoo%2FJnwG7TLAWXGsnVEaoX7%2Ftat%2BMiHeFrqasAl%2BtliR0D9%2FVUGmiUXhj050hBz5NgBHZcUDFt%2FPgQjL%2BllXlT2IXJg%2FUfiujpPh0Lh6yBuIuCPBATZjy%2FB%2FCOQAzdgenwo1vTMW%2FKP0asXglvUDEvGXx%2BxWzr60M0fiVs1ZOhwnvWOUfewQu%2FALW%2FU16YFdKvGWhkPaLLMxOwPp8T2jO2VPEw&X-Amz-Signature=4437efc7031af0620860241e3faf4cc05fc913d1f6ace68aecd9742e0b589ead&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

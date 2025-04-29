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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJL4LZDT%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtpzWey329rfrRsaIX2MuurnsqjNjAqk60Pf1d6NrOQIhAPN0BD%2Bbu%2B5uLZarH2aAIgi4A8q3DNAyk1VWKkBY1TDMKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeXKye%2FANgZWXA3M4q3AOoc6mZ4yh7%2BYP3M66QKAHVGaTzMRAjg6PIjDnF24jMdi3sofjULs0nuohxp3IN29ln%2Fri%2Bgt79J%2FqO47V%2F0r4Nq%2FlmrCt2nVSqaCpjtaCfE03nYmndKkNNx80iUqwA%2FlKXGnUPXJq629Jcn4RAKTPnIdHyZ%2FlrRELoIB0kayElSBgGyyjGMXJpAbUwPq9RGYTzX8hk2UmBAple4pSuEK%2FR8apVS84yU5aGVQjkYPU%2BFDInRRHDI2AVg4odq%2F0neOKbWGsURkKK5nHAQcpBuC0rBByFbspb8TeyP7UIJslrIQC9zNlZn7guqZX3xSOqaHa5NbtoTQbNeJ9vy1YaFLJiUPqaW%2BiGOMNvHJCTtkD%2BY2jVL%2FOX0nzbmomyfpgIi%2B9WvgWvHROT%2FM3BIdx9ALjSICXQQdP%2FfFsBzqAORZ3v6Xu%2BRRRyG3C02jEoqUzpQKNWFxJ%2BGXHjlaFhkF5c8kdVVlf%2FpQMUSO9BW1pjBAGWECmC040MOD8ll63NgS%2FUWKYxNnYOiDTySsSAr8rW3pinoVG5abM4xFpdngrXsZxqlmK7lf89MZauj2IiqnOgju%2BLIUb%2FlzxYHLB97q57kCRHv4dXvqEnW0Zu4H5%2FpixhITcG3R8i4vhfbgQn1jDVosXABjqkAQy9N5ggb7iGBSf5Taeq6sw9gpXoXBi3ZBOXi1UlZOJXCyCh1STPvEzAmqYtfdq0dPPKJV7i0VLFD6oSPWf%2F1ibm9eh7xfgoeKYuCQf9z4X0pyi4TkynTtbbDZUDkN3%2BKi%2B3wnib%2BjigXWYCLvaafpvIvbkWxV%2F%2F78W8o%2FLgmO3WTKZ02G2xAhVLMssxuzJ3vidGqEMebFCiTeYOeF0BhsWOxQSk&X-Amz-Signature=f94a223b6a0953dccd02690d73688b2b7d31838da38939fab10593b7db804e74&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJL4LZDT%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtpzWey329rfrRsaIX2MuurnsqjNjAqk60Pf1d6NrOQIhAPN0BD%2Bbu%2B5uLZarH2aAIgi4A8q3DNAyk1VWKkBY1TDMKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeXKye%2FANgZWXA3M4q3AOoc6mZ4yh7%2BYP3M66QKAHVGaTzMRAjg6PIjDnF24jMdi3sofjULs0nuohxp3IN29ln%2Fri%2Bgt79J%2FqO47V%2F0r4Nq%2FlmrCt2nVSqaCpjtaCfE03nYmndKkNNx80iUqwA%2FlKXGnUPXJq629Jcn4RAKTPnIdHyZ%2FlrRELoIB0kayElSBgGyyjGMXJpAbUwPq9RGYTzX8hk2UmBAple4pSuEK%2FR8apVS84yU5aGVQjkYPU%2BFDInRRHDI2AVg4odq%2F0neOKbWGsURkKK5nHAQcpBuC0rBByFbspb8TeyP7UIJslrIQC9zNlZn7guqZX3xSOqaHa5NbtoTQbNeJ9vy1YaFLJiUPqaW%2BiGOMNvHJCTtkD%2BY2jVL%2FOX0nzbmomyfpgIi%2B9WvgWvHROT%2FM3BIdx9ALjSICXQQdP%2FfFsBzqAORZ3v6Xu%2BRRRyG3C02jEoqUzpQKNWFxJ%2BGXHjlaFhkF5c8kdVVlf%2FpQMUSO9BW1pjBAGWECmC040MOD8ll63NgS%2FUWKYxNnYOiDTySsSAr8rW3pinoVG5abM4xFpdngrXsZxqlmK7lf89MZauj2IiqnOgju%2BLIUb%2FlzxYHLB97q57kCRHv4dXvqEnW0Zu4H5%2FpixhITcG3R8i4vhfbgQn1jDVosXABjqkAQy9N5ggb7iGBSf5Taeq6sw9gpXoXBi3ZBOXi1UlZOJXCyCh1STPvEzAmqYtfdq0dPPKJV7i0VLFD6oSPWf%2F1ibm9eh7xfgoeKYuCQf9z4X0pyi4TkynTtbbDZUDkN3%2BKi%2B3wnib%2BjigXWYCLvaafpvIvbkWxV%2F%2F78W8o%2FLgmO3WTKZ02G2xAhVLMssxuzJ3vidGqEMebFCiTeYOeF0BhsWOxQSk&X-Amz-Signature=7783fbe402499fdc4499f2860a6779a35910cd97d7b41f4a71895681feb91cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJL4LZDT%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtpzWey329rfrRsaIX2MuurnsqjNjAqk60Pf1d6NrOQIhAPN0BD%2Bbu%2B5uLZarH2aAIgi4A8q3DNAyk1VWKkBY1TDMKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeXKye%2FANgZWXA3M4q3AOoc6mZ4yh7%2BYP3M66QKAHVGaTzMRAjg6PIjDnF24jMdi3sofjULs0nuohxp3IN29ln%2Fri%2Bgt79J%2FqO47V%2F0r4Nq%2FlmrCt2nVSqaCpjtaCfE03nYmndKkNNx80iUqwA%2FlKXGnUPXJq629Jcn4RAKTPnIdHyZ%2FlrRELoIB0kayElSBgGyyjGMXJpAbUwPq9RGYTzX8hk2UmBAple4pSuEK%2FR8apVS84yU5aGVQjkYPU%2BFDInRRHDI2AVg4odq%2F0neOKbWGsURkKK5nHAQcpBuC0rBByFbspb8TeyP7UIJslrIQC9zNlZn7guqZX3xSOqaHa5NbtoTQbNeJ9vy1YaFLJiUPqaW%2BiGOMNvHJCTtkD%2BY2jVL%2FOX0nzbmomyfpgIi%2B9WvgWvHROT%2FM3BIdx9ALjSICXQQdP%2FfFsBzqAORZ3v6Xu%2BRRRyG3C02jEoqUzpQKNWFxJ%2BGXHjlaFhkF5c8kdVVlf%2FpQMUSO9BW1pjBAGWECmC040MOD8ll63NgS%2FUWKYxNnYOiDTySsSAr8rW3pinoVG5abM4xFpdngrXsZxqlmK7lf89MZauj2IiqnOgju%2BLIUb%2FlzxYHLB97q57kCRHv4dXvqEnW0Zu4H5%2FpixhITcG3R8i4vhfbgQn1jDVosXABjqkAQy9N5ggb7iGBSf5Taeq6sw9gpXoXBi3ZBOXi1UlZOJXCyCh1STPvEzAmqYtfdq0dPPKJV7i0VLFD6oSPWf%2F1ibm9eh7xfgoeKYuCQf9z4X0pyi4TkynTtbbDZUDkN3%2BKi%2B3wnib%2BjigXWYCLvaafpvIvbkWxV%2F%2F78W8o%2FLgmO3WTKZ02G2xAhVLMssxuzJ3vidGqEMebFCiTeYOeF0BhsWOxQSk&X-Amz-Signature=4265992cf8fcdd7a1361299dbbfa3d2cf4b6af37ac743e02f893d5a72c19c7da&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJL4LZDT%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtpzWey329rfrRsaIX2MuurnsqjNjAqk60Pf1d6NrOQIhAPN0BD%2Bbu%2B5uLZarH2aAIgi4A8q3DNAyk1VWKkBY1TDMKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeXKye%2FANgZWXA3M4q3AOoc6mZ4yh7%2BYP3M66QKAHVGaTzMRAjg6PIjDnF24jMdi3sofjULs0nuohxp3IN29ln%2Fri%2Bgt79J%2FqO47V%2F0r4Nq%2FlmrCt2nVSqaCpjtaCfE03nYmndKkNNx80iUqwA%2FlKXGnUPXJq629Jcn4RAKTPnIdHyZ%2FlrRELoIB0kayElSBgGyyjGMXJpAbUwPq9RGYTzX8hk2UmBAple4pSuEK%2FR8apVS84yU5aGVQjkYPU%2BFDInRRHDI2AVg4odq%2F0neOKbWGsURkKK5nHAQcpBuC0rBByFbspb8TeyP7UIJslrIQC9zNlZn7guqZX3xSOqaHa5NbtoTQbNeJ9vy1YaFLJiUPqaW%2BiGOMNvHJCTtkD%2BY2jVL%2FOX0nzbmomyfpgIi%2B9WvgWvHROT%2FM3BIdx9ALjSICXQQdP%2FfFsBzqAORZ3v6Xu%2BRRRyG3C02jEoqUzpQKNWFxJ%2BGXHjlaFhkF5c8kdVVlf%2FpQMUSO9BW1pjBAGWECmC040MOD8ll63NgS%2FUWKYxNnYOiDTySsSAr8rW3pinoVG5abM4xFpdngrXsZxqlmK7lf89MZauj2IiqnOgju%2BLIUb%2FlzxYHLB97q57kCRHv4dXvqEnW0Zu4H5%2FpixhITcG3R8i4vhfbgQn1jDVosXABjqkAQy9N5ggb7iGBSf5Taeq6sw9gpXoXBi3ZBOXi1UlZOJXCyCh1STPvEzAmqYtfdq0dPPKJV7i0VLFD6oSPWf%2F1ibm9eh7xfgoeKYuCQf9z4X0pyi4TkynTtbbDZUDkN3%2BKi%2B3wnib%2BjigXWYCLvaafpvIvbkWxV%2F%2F78W8o%2FLgmO3WTKZ02G2xAhVLMssxuzJ3vidGqEMebFCiTeYOeF0BhsWOxQSk&X-Amz-Signature=b1915cb9776b5e7a68ae18a4c00e72468fb6a3ab2b208bc7696e6a49e3c04335&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJL4LZDT%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtpzWey329rfrRsaIX2MuurnsqjNjAqk60Pf1d6NrOQIhAPN0BD%2Bbu%2B5uLZarH2aAIgi4A8q3DNAyk1VWKkBY1TDMKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeXKye%2FANgZWXA3M4q3AOoc6mZ4yh7%2BYP3M66QKAHVGaTzMRAjg6PIjDnF24jMdi3sofjULs0nuohxp3IN29ln%2Fri%2Bgt79J%2FqO47V%2F0r4Nq%2FlmrCt2nVSqaCpjtaCfE03nYmndKkNNx80iUqwA%2FlKXGnUPXJq629Jcn4RAKTPnIdHyZ%2FlrRELoIB0kayElSBgGyyjGMXJpAbUwPq9RGYTzX8hk2UmBAple4pSuEK%2FR8apVS84yU5aGVQjkYPU%2BFDInRRHDI2AVg4odq%2F0neOKbWGsURkKK5nHAQcpBuC0rBByFbspb8TeyP7UIJslrIQC9zNlZn7guqZX3xSOqaHa5NbtoTQbNeJ9vy1YaFLJiUPqaW%2BiGOMNvHJCTtkD%2BY2jVL%2FOX0nzbmomyfpgIi%2B9WvgWvHROT%2FM3BIdx9ALjSICXQQdP%2FfFsBzqAORZ3v6Xu%2BRRRyG3C02jEoqUzpQKNWFxJ%2BGXHjlaFhkF5c8kdVVlf%2FpQMUSO9BW1pjBAGWECmC040MOD8ll63NgS%2FUWKYxNnYOiDTySsSAr8rW3pinoVG5abM4xFpdngrXsZxqlmK7lf89MZauj2IiqnOgju%2BLIUb%2FlzxYHLB97q57kCRHv4dXvqEnW0Zu4H5%2FpixhITcG3R8i4vhfbgQn1jDVosXABjqkAQy9N5ggb7iGBSf5Taeq6sw9gpXoXBi3ZBOXi1UlZOJXCyCh1STPvEzAmqYtfdq0dPPKJV7i0VLFD6oSPWf%2F1ibm9eh7xfgoeKYuCQf9z4X0pyi4TkynTtbbDZUDkN3%2BKi%2B3wnib%2BjigXWYCLvaafpvIvbkWxV%2F%2F78W8o%2FLgmO3WTKZ02G2xAhVLMssxuzJ3vidGqEMebFCiTeYOeF0BhsWOxQSk&X-Amz-Signature=7888c99905dc7351642260e7cdbfe23c2f9a3be4d3d92370631c35bafc5165dd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJL4LZDT%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtpzWey329rfrRsaIX2MuurnsqjNjAqk60Pf1d6NrOQIhAPN0BD%2Bbu%2B5uLZarH2aAIgi4A8q3DNAyk1VWKkBY1TDMKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeXKye%2FANgZWXA3M4q3AOoc6mZ4yh7%2BYP3M66QKAHVGaTzMRAjg6PIjDnF24jMdi3sofjULs0nuohxp3IN29ln%2Fri%2Bgt79J%2FqO47V%2F0r4Nq%2FlmrCt2nVSqaCpjtaCfE03nYmndKkNNx80iUqwA%2FlKXGnUPXJq629Jcn4RAKTPnIdHyZ%2FlrRELoIB0kayElSBgGyyjGMXJpAbUwPq9RGYTzX8hk2UmBAple4pSuEK%2FR8apVS84yU5aGVQjkYPU%2BFDInRRHDI2AVg4odq%2F0neOKbWGsURkKK5nHAQcpBuC0rBByFbspb8TeyP7UIJslrIQC9zNlZn7guqZX3xSOqaHa5NbtoTQbNeJ9vy1YaFLJiUPqaW%2BiGOMNvHJCTtkD%2BY2jVL%2FOX0nzbmomyfpgIi%2B9WvgWvHROT%2FM3BIdx9ALjSICXQQdP%2FfFsBzqAORZ3v6Xu%2BRRRyG3C02jEoqUzpQKNWFxJ%2BGXHjlaFhkF5c8kdVVlf%2FpQMUSO9BW1pjBAGWECmC040MOD8ll63NgS%2FUWKYxNnYOiDTySsSAr8rW3pinoVG5abM4xFpdngrXsZxqlmK7lf89MZauj2IiqnOgju%2BLIUb%2FlzxYHLB97q57kCRHv4dXvqEnW0Zu4H5%2FpixhITcG3R8i4vhfbgQn1jDVosXABjqkAQy9N5ggb7iGBSf5Taeq6sw9gpXoXBi3ZBOXi1UlZOJXCyCh1STPvEzAmqYtfdq0dPPKJV7i0VLFD6oSPWf%2F1ibm9eh7xfgoeKYuCQf9z4X0pyi4TkynTtbbDZUDkN3%2BKi%2B3wnib%2BjigXWYCLvaafpvIvbkWxV%2F%2F78W8o%2FLgmO3WTKZ02G2xAhVLMssxuzJ3vidGqEMebFCiTeYOeF0BhsWOxQSk&X-Amz-Signature=1ca5a5d9c708719bc0e7317d8c89de1dde0e2b4777fe31fe8589aae4bf434d02&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJL4LZDT%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtpzWey329rfrRsaIX2MuurnsqjNjAqk60Pf1d6NrOQIhAPN0BD%2Bbu%2B5uLZarH2aAIgi4A8q3DNAyk1VWKkBY1TDMKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxeXKye%2FANgZWXA3M4q3AOoc6mZ4yh7%2BYP3M66QKAHVGaTzMRAjg6PIjDnF24jMdi3sofjULs0nuohxp3IN29ln%2Fri%2Bgt79J%2FqO47V%2F0r4Nq%2FlmrCt2nVSqaCpjtaCfE03nYmndKkNNx80iUqwA%2FlKXGnUPXJq629Jcn4RAKTPnIdHyZ%2FlrRELoIB0kayElSBgGyyjGMXJpAbUwPq9RGYTzX8hk2UmBAple4pSuEK%2FR8apVS84yU5aGVQjkYPU%2BFDInRRHDI2AVg4odq%2F0neOKbWGsURkKK5nHAQcpBuC0rBByFbspb8TeyP7UIJslrIQC9zNlZn7guqZX3xSOqaHa5NbtoTQbNeJ9vy1YaFLJiUPqaW%2BiGOMNvHJCTtkD%2BY2jVL%2FOX0nzbmomyfpgIi%2B9WvgWvHROT%2FM3BIdx9ALjSICXQQdP%2FfFsBzqAORZ3v6Xu%2BRRRyG3C02jEoqUzpQKNWFxJ%2BGXHjlaFhkF5c8kdVVlf%2FpQMUSO9BW1pjBAGWECmC040MOD8ll63NgS%2FUWKYxNnYOiDTySsSAr8rW3pinoVG5abM4xFpdngrXsZxqlmK7lf89MZauj2IiqnOgju%2BLIUb%2FlzxYHLB97q57kCRHv4dXvqEnW0Zu4H5%2FpixhITcG3R8i4vhfbgQn1jDVosXABjqkAQy9N5ggb7iGBSf5Taeq6sw9gpXoXBi3ZBOXi1UlZOJXCyCh1STPvEzAmqYtfdq0dPPKJV7i0VLFD6oSPWf%2F1ibm9eh7xfgoeKYuCQf9z4X0pyi4TkynTtbbDZUDkN3%2BKi%2B3wnib%2BjigXWYCLvaafpvIvbkWxV%2F%2F78W8o%2FLgmO3WTKZ02G2xAhVLMssxuzJ3vidGqEMebFCiTeYOeF0BhsWOxQSk&X-Amz-Signature=104cb1c7290348f796623b383c28fa0e0b3af0733338b627d40101a92301415f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

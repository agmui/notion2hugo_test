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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXDYF5F%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAyGRBljPkAby8IsQArpcVUXmrLvlStDfssEyPP3wxzAiADpZ2Hky0J%2Be0EDdoTlPD%2F%2Bns00sm0bSGLEwPNMQ3Ioyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMTeSiUZxj8frVnKRdKtwDZ47UuQ6cB%2F0scSsLJWQi6QmYGC%2FgMvIRTYW32T2X7eoosmCPEV4G2%2F%2Bn1GeC%2FiMnoHc2It069i6%2Fdk7mxmtFXHXI8gW%2Ff5paSwq52cB46z7ydeJq3lrEA8NR86G4V1mDAQh0OrTuvDgUn2VecNBZ3Ev9P23jJZQUvCbrd0m2gnYOCKsIS79xzsOIv%2FmnehNr%2F4R%2F5ktgCyCd4jMxSjXq8xPqyX4e%2BSb6RN0FDYfLu390nl0S5P%2BRqH2yfC1dVTnbskcU6s3%2B%2F08k%2B59XwNBsmQZ749z%2F7YGFbyrzJw%2FZYTVGLwcZX9z3lSXqkL3adKCFLZtqHnMrmy8Rq4LvxEhGqdi8P5qPQkR4g4x9%2Fmn3V1CrSUgZdEWgG6iupvg0nUFC0Ou8rt%2FxYExDNvxZp5vmGAsMq2Ws8Sd57nhFKsw6I%2ByfULjxj8s4XnNE7oacoXR3gYQHgfIJGhimJG2SARD%2F%2FI0Y212WNVmyHkJbWe44D8pD0W7WboJ6Oyv9E%2F%2Bu4Tgls%2FnasWdpWHPtymk1ZxIaH2U3pyHEw%2FlMihLmcXUCVQ7RePxDWY9U604NUhg6LF8LIci1plMWNAqPKxn3PkElm3IN5X0lSikHclbLGCb0dizawm%2FhD7t%2BEtCAr%2FIwkO%2FCvwY6pgHvXHGeMSJK1GLrM57MS9WMksnnzmdb1ZK7HRHiPlDNkM9YJ54qni46L7OF46IZQYOWGTb7P8WGlw9TXi8EGtlLhkDKApxRE%2BYsavJQIE6DmcHqf4mue3REQ5wTPAMpuYAxt80aNgM3v2YPoSE9co2iXhd73MyXWkPYsH1iNEjaDRrYZbso2bccOFsmPpxV5n96%2BAAEIL779GkocBZrpbpyIErMO4ot&X-Amz-Signature=1717194c97d0a4c4f063a728c729983f1885e826e416ceaeb3e8423f30b6d531&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXDYF5F%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAyGRBljPkAby8IsQArpcVUXmrLvlStDfssEyPP3wxzAiADpZ2Hky0J%2Be0EDdoTlPD%2F%2Bns00sm0bSGLEwPNMQ3Ioyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMTeSiUZxj8frVnKRdKtwDZ47UuQ6cB%2F0scSsLJWQi6QmYGC%2FgMvIRTYW32T2X7eoosmCPEV4G2%2F%2Bn1GeC%2FiMnoHc2It069i6%2Fdk7mxmtFXHXI8gW%2Ff5paSwq52cB46z7ydeJq3lrEA8NR86G4V1mDAQh0OrTuvDgUn2VecNBZ3Ev9P23jJZQUvCbrd0m2gnYOCKsIS79xzsOIv%2FmnehNr%2F4R%2F5ktgCyCd4jMxSjXq8xPqyX4e%2BSb6RN0FDYfLu390nl0S5P%2BRqH2yfC1dVTnbskcU6s3%2B%2F08k%2B59XwNBsmQZ749z%2F7YGFbyrzJw%2FZYTVGLwcZX9z3lSXqkL3adKCFLZtqHnMrmy8Rq4LvxEhGqdi8P5qPQkR4g4x9%2Fmn3V1CrSUgZdEWgG6iupvg0nUFC0Ou8rt%2FxYExDNvxZp5vmGAsMq2Ws8Sd57nhFKsw6I%2ByfULjxj8s4XnNE7oacoXR3gYQHgfIJGhimJG2SARD%2F%2FI0Y212WNVmyHkJbWe44D8pD0W7WboJ6Oyv9E%2F%2Bu4Tgls%2FnasWdpWHPtymk1ZxIaH2U3pyHEw%2FlMihLmcXUCVQ7RePxDWY9U604NUhg6LF8LIci1plMWNAqPKxn3PkElm3IN5X0lSikHclbLGCb0dizawm%2FhD7t%2BEtCAr%2FIwkO%2FCvwY6pgHvXHGeMSJK1GLrM57MS9WMksnnzmdb1ZK7HRHiPlDNkM9YJ54qni46L7OF46IZQYOWGTb7P8WGlw9TXi8EGtlLhkDKApxRE%2BYsavJQIE6DmcHqf4mue3REQ5wTPAMpuYAxt80aNgM3v2YPoSE9co2iXhd73MyXWkPYsH1iNEjaDRrYZbso2bccOFsmPpxV5n96%2BAAEIL779GkocBZrpbpyIErMO4ot&X-Amz-Signature=260bd35074bb20019c3245af6eec86ad75e0705429bf9330dc90dfc8689f45c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXDYF5F%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAyGRBljPkAby8IsQArpcVUXmrLvlStDfssEyPP3wxzAiADpZ2Hky0J%2Be0EDdoTlPD%2F%2Bns00sm0bSGLEwPNMQ3Ioyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMTeSiUZxj8frVnKRdKtwDZ47UuQ6cB%2F0scSsLJWQi6QmYGC%2FgMvIRTYW32T2X7eoosmCPEV4G2%2F%2Bn1GeC%2FiMnoHc2It069i6%2Fdk7mxmtFXHXI8gW%2Ff5paSwq52cB46z7ydeJq3lrEA8NR86G4V1mDAQh0OrTuvDgUn2VecNBZ3Ev9P23jJZQUvCbrd0m2gnYOCKsIS79xzsOIv%2FmnehNr%2F4R%2F5ktgCyCd4jMxSjXq8xPqyX4e%2BSb6RN0FDYfLu390nl0S5P%2BRqH2yfC1dVTnbskcU6s3%2B%2F08k%2B59XwNBsmQZ749z%2F7YGFbyrzJw%2FZYTVGLwcZX9z3lSXqkL3adKCFLZtqHnMrmy8Rq4LvxEhGqdi8P5qPQkR4g4x9%2Fmn3V1CrSUgZdEWgG6iupvg0nUFC0Ou8rt%2FxYExDNvxZp5vmGAsMq2Ws8Sd57nhFKsw6I%2ByfULjxj8s4XnNE7oacoXR3gYQHgfIJGhimJG2SARD%2F%2FI0Y212WNVmyHkJbWe44D8pD0W7WboJ6Oyv9E%2F%2Bu4Tgls%2FnasWdpWHPtymk1ZxIaH2U3pyHEw%2FlMihLmcXUCVQ7RePxDWY9U604NUhg6LF8LIci1plMWNAqPKxn3PkElm3IN5X0lSikHclbLGCb0dizawm%2FhD7t%2BEtCAr%2FIwkO%2FCvwY6pgHvXHGeMSJK1GLrM57MS9WMksnnzmdb1ZK7HRHiPlDNkM9YJ54qni46L7OF46IZQYOWGTb7P8WGlw9TXi8EGtlLhkDKApxRE%2BYsavJQIE6DmcHqf4mue3REQ5wTPAMpuYAxt80aNgM3v2YPoSE9co2iXhd73MyXWkPYsH1iNEjaDRrYZbso2bccOFsmPpxV5n96%2BAAEIL779GkocBZrpbpyIErMO4ot&X-Amz-Signature=95c43a4e9eeae672733a24e15b2d2925d080e89e999869219d234b3df7e628b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXDYF5F%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAyGRBljPkAby8IsQArpcVUXmrLvlStDfssEyPP3wxzAiADpZ2Hky0J%2Be0EDdoTlPD%2F%2Bns00sm0bSGLEwPNMQ3Ioyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMTeSiUZxj8frVnKRdKtwDZ47UuQ6cB%2F0scSsLJWQi6QmYGC%2FgMvIRTYW32T2X7eoosmCPEV4G2%2F%2Bn1GeC%2FiMnoHc2It069i6%2Fdk7mxmtFXHXI8gW%2Ff5paSwq52cB46z7ydeJq3lrEA8NR86G4V1mDAQh0OrTuvDgUn2VecNBZ3Ev9P23jJZQUvCbrd0m2gnYOCKsIS79xzsOIv%2FmnehNr%2F4R%2F5ktgCyCd4jMxSjXq8xPqyX4e%2BSb6RN0FDYfLu390nl0S5P%2BRqH2yfC1dVTnbskcU6s3%2B%2F08k%2B59XwNBsmQZ749z%2F7YGFbyrzJw%2FZYTVGLwcZX9z3lSXqkL3adKCFLZtqHnMrmy8Rq4LvxEhGqdi8P5qPQkR4g4x9%2Fmn3V1CrSUgZdEWgG6iupvg0nUFC0Ou8rt%2FxYExDNvxZp5vmGAsMq2Ws8Sd57nhFKsw6I%2ByfULjxj8s4XnNE7oacoXR3gYQHgfIJGhimJG2SARD%2F%2FI0Y212WNVmyHkJbWe44D8pD0W7WboJ6Oyv9E%2F%2Bu4Tgls%2FnasWdpWHPtymk1ZxIaH2U3pyHEw%2FlMihLmcXUCVQ7RePxDWY9U604NUhg6LF8LIci1plMWNAqPKxn3PkElm3IN5X0lSikHclbLGCb0dizawm%2FhD7t%2BEtCAr%2FIwkO%2FCvwY6pgHvXHGeMSJK1GLrM57MS9WMksnnzmdb1ZK7HRHiPlDNkM9YJ54qni46L7OF46IZQYOWGTb7P8WGlw9TXi8EGtlLhkDKApxRE%2BYsavJQIE6DmcHqf4mue3REQ5wTPAMpuYAxt80aNgM3v2YPoSE9co2iXhd73MyXWkPYsH1iNEjaDRrYZbso2bccOFsmPpxV5n96%2BAAEIL779GkocBZrpbpyIErMO4ot&X-Amz-Signature=a76075c7723ba1c60af9cbba48785f4b4438f7005143e9a1343326d97e9aa5d7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXDYF5F%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAyGRBljPkAby8IsQArpcVUXmrLvlStDfssEyPP3wxzAiADpZ2Hky0J%2Be0EDdoTlPD%2F%2Bns00sm0bSGLEwPNMQ3Ioyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMTeSiUZxj8frVnKRdKtwDZ47UuQ6cB%2F0scSsLJWQi6QmYGC%2FgMvIRTYW32T2X7eoosmCPEV4G2%2F%2Bn1GeC%2FiMnoHc2It069i6%2Fdk7mxmtFXHXI8gW%2Ff5paSwq52cB46z7ydeJq3lrEA8NR86G4V1mDAQh0OrTuvDgUn2VecNBZ3Ev9P23jJZQUvCbrd0m2gnYOCKsIS79xzsOIv%2FmnehNr%2F4R%2F5ktgCyCd4jMxSjXq8xPqyX4e%2BSb6RN0FDYfLu390nl0S5P%2BRqH2yfC1dVTnbskcU6s3%2B%2F08k%2B59XwNBsmQZ749z%2F7YGFbyrzJw%2FZYTVGLwcZX9z3lSXqkL3adKCFLZtqHnMrmy8Rq4LvxEhGqdi8P5qPQkR4g4x9%2Fmn3V1CrSUgZdEWgG6iupvg0nUFC0Ou8rt%2FxYExDNvxZp5vmGAsMq2Ws8Sd57nhFKsw6I%2ByfULjxj8s4XnNE7oacoXR3gYQHgfIJGhimJG2SARD%2F%2FI0Y212WNVmyHkJbWe44D8pD0W7WboJ6Oyv9E%2F%2Bu4Tgls%2FnasWdpWHPtymk1ZxIaH2U3pyHEw%2FlMihLmcXUCVQ7RePxDWY9U604NUhg6LF8LIci1plMWNAqPKxn3PkElm3IN5X0lSikHclbLGCb0dizawm%2FhD7t%2BEtCAr%2FIwkO%2FCvwY6pgHvXHGeMSJK1GLrM57MS9WMksnnzmdb1ZK7HRHiPlDNkM9YJ54qni46L7OF46IZQYOWGTb7P8WGlw9TXi8EGtlLhkDKApxRE%2BYsavJQIE6DmcHqf4mue3REQ5wTPAMpuYAxt80aNgM3v2YPoSE9co2iXhd73MyXWkPYsH1iNEjaDRrYZbso2bccOFsmPpxV5n96%2BAAEIL779GkocBZrpbpyIErMO4ot&X-Amz-Signature=81850d13d468330cc89e58ef18e127434bf40b4b055b062916b6ce0a890364ae&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXDYF5F%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAyGRBljPkAby8IsQArpcVUXmrLvlStDfssEyPP3wxzAiADpZ2Hky0J%2Be0EDdoTlPD%2F%2Bns00sm0bSGLEwPNMQ3Ioyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMTeSiUZxj8frVnKRdKtwDZ47UuQ6cB%2F0scSsLJWQi6QmYGC%2FgMvIRTYW32T2X7eoosmCPEV4G2%2F%2Bn1GeC%2FiMnoHc2It069i6%2Fdk7mxmtFXHXI8gW%2Ff5paSwq52cB46z7ydeJq3lrEA8NR86G4V1mDAQh0OrTuvDgUn2VecNBZ3Ev9P23jJZQUvCbrd0m2gnYOCKsIS79xzsOIv%2FmnehNr%2F4R%2F5ktgCyCd4jMxSjXq8xPqyX4e%2BSb6RN0FDYfLu390nl0S5P%2BRqH2yfC1dVTnbskcU6s3%2B%2F08k%2B59XwNBsmQZ749z%2F7YGFbyrzJw%2FZYTVGLwcZX9z3lSXqkL3adKCFLZtqHnMrmy8Rq4LvxEhGqdi8P5qPQkR4g4x9%2Fmn3V1CrSUgZdEWgG6iupvg0nUFC0Ou8rt%2FxYExDNvxZp5vmGAsMq2Ws8Sd57nhFKsw6I%2ByfULjxj8s4XnNE7oacoXR3gYQHgfIJGhimJG2SARD%2F%2FI0Y212WNVmyHkJbWe44D8pD0W7WboJ6Oyv9E%2F%2Bu4Tgls%2FnasWdpWHPtymk1ZxIaH2U3pyHEw%2FlMihLmcXUCVQ7RePxDWY9U604NUhg6LF8LIci1plMWNAqPKxn3PkElm3IN5X0lSikHclbLGCb0dizawm%2FhD7t%2BEtCAr%2FIwkO%2FCvwY6pgHvXHGeMSJK1GLrM57MS9WMksnnzmdb1ZK7HRHiPlDNkM9YJ54qni46L7OF46IZQYOWGTb7P8WGlw9TXi8EGtlLhkDKApxRE%2BYsavJQIE6DmcHqf4mue3REQ5wTPAMpuYAxt80aNgM3v2YPoSE9co2iXhd73MyXWkPYsH1iNEjaDRrYZbso2bccOFsmPpxV5n96%2BAAEIL779GkocBZrpbpyIErMO4ot&X-Amz-Signature=53443c204a8e8d9a9a80a0418458809914daf206a374bb8d900c28d626c267b5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KXDYF5F%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHAyGRBljPkAby8IsQArpcVUXmrLvlStDfssEyPP3wxzAiADpZ2Hky0J%2Be0EDdoTlPD%2F%2Bns00sm0bSGLEwPNMQ3Ioyr%2FAwgmEAAaDDYzNzQyMzE4MzgwNSIMTeSiUZxj8frVnKRdKtwDZ47UuQ6cB%2F0scSsLJWQi6QmYGC%2FgMvIRTYW32T2X7eoosmCPEV4G2%2F%2Bn1GeC%2FiMnoHc2It069i6%2Fdk7mxmtFXHXI8gW%2Ff5paSwq52cB46z7ydeJq3lrEA8NR86G4V1mDAQh0OrTuvDgUn2VecNBZ3Ev9P23jJZQUvCbrd0m2gnYOCKsIS79xzsOIv%2FmnehNr%2F4R%2F5ktgCyCd4jMxSjXq8xPqyX4e%2BSb6RN0FDYfLu390nl0S5P%2BRqH2yfC1dVTnbskcU6s3%2B%2F08k%2B59XwNBsmQZ749z%2F7YGFbyrzJw%2FZYTVGLwcZX9z3lSXqkL3adKCFLZtqHnMrmy8Rq4LvxEhGqdi8P5qPQkR4g4x9%2Fmn3V1CrSUgZdEWgG6iupvg0nUFC0Ou8rt%2FxYExDNvxZp5vmGAsMq2Ws8Sd57nhFKsw6I%2ByfULjxj8s4XnNE7oacoXR3gYQHgfIJGhimJG2SARD%2F%2FI0Y212WNVmyHkJbWe44D8pD0W7WboJ6Oyv9E%2F%2Bu4Tgls%2FnasWdpWHPtymk1ZxIaH2U3pyHEw%2FlMihLmcXUCVQ7RePxDWY9U604NUhg6LF8LIci1plMWNAqPKxn3PkElm3IN5X0lSikHclbLGCb0dizawm%2FhD7t%2BEtCAr%2FIwkO%2FCvwY6pgHvXHGeMSJK1GLrM57MS9WMksnnzmdb1ZK7HRHiPlDNkM9YJ54qni46L7OF46IZQYOWGTb7P8WGlw9TXi8EGtlLhkDKApxRE%2BYsavJQIE6DmcHqf4mue3REQ5wTPAMpuYAxt80aNgM3v2YPoSE9co2iXhd73MyXWkPYsH1iNEjaDRrYZbso2bccOFsmPpxV5n96%2BAAEIL779GkocBZrpbpyIErMO4ot&X-Amz-Signature=7b55a581ed81af08d66fdba5c775eaa36f43e95c9850e02f7ebf27094a2dae8a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTPETAX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCrLuMQMZLkxI9P2ifgvmFBXrOeyeAnUJjQ8eNFEW4WfAIgPVJYfSWpclfr%2Fthix6I7Sp5UzTmGa7%2FfkXAoI9oKV%2Fwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDARSvFvNXSXGLFAfxSrcA97gASagsUz90ptUMMIm1B441YM%2FJT3Scg79CEeUFt42nFjL2PUobYBAYECTbXoh8dpdDUDb44jK6C6B36j7Ka%2FztbcSmNZcfBv1XbHyksCGk4TCt%2FTpW83crW1zVLG7s1YX3jb5%2F8x8gxsS5lne7mEEVIeX5dVy98p0z6WSefEjNuo1yQ%2Fl2Fcmpcs6JfIzegYYR7%2FRUM8thsoJpzU5RByq3TdX21buuh3Ncm1cd%2FN%2Fm8hUWxDmIZ5Ix4SYOxGKjw1lLXLtEicSPC511I0zQFqQc1ZtGF5la%2B9cggLpu9vxEI7a9Bb9Xdg77r8zMNtn%2BEgta8b8IQcXJAAO96C4W3rBTGbFM%2BEdr2toNyRC6qxm4kOxiN6GF4VkoVbTKvKv2Asu7SFOya6b57GvQGB7ZVm5N35OLYRkFZK5Bhb%2BzA0RIEuq0X4a4JLx0x7wAwV%2B9kkc0B%2BQmoQCBIHFAFccsFgpNjmy835IDwlh%2B0CX1AA4qgJLyc2Wr%2FrV3Wwdk9HtDYogNq7A7HkNcVZnxVr%2F9GUhVRmQL7YYhB77kzKYNKN3e0j524f32pVd98n5xJf0qWGUW4ajXxQqtmdhxi5nANcNvrSwBVsWJRcpqYG96e0BFnIFZnT5253j06fZMJPfnL8GOqUBgDAc4L2nICRSRD2zWP%2BviOwtjwmzyBUrFJNi%2BBF1dOsgI6TieBsnzrOKCXOTxHrHx%2Fobml%2FWMTsO9Uz6Mub56IJHJYaE1iaJDGbw%2Fhzvz31pnypCrRpKm5ZZBvigH2Mj3AGgaw7Dqefuf2%2FJiUs2cWiJKmgH8V9Dz%2F7Wo7n4ckFh5blM94nR%2F27gHelBBXshMt8k1ZpGShiTSL2MfHboK%2BnX09sO&X-Amz-Signature=146190ef50e9102f8df977e1e560eac678f8d000632658c619db2d5b4a8c88fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTPETAX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCrLuMQMZLkxI9P2ifgvmFBXrOeyeAnUJjQ8eNFEW4WfAIgPVJYfSWpclfr%2Fthix6I7Sp5UzTmGa7%2FfkXAoI9oKV%2Fwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDARSvFvNXSXGLFAfxSrcA97gASagsUz90ptUMMIm1B441YM%2FJT3Scg79CEeUFt42nFjL2PUobYBAYECTbXoh8dpdDUDb44jK6C6B36j7Ka%2FztbcSmNZcfBv1XbHyksCGk4TCt%2FTpW83crW1zVLG7s1YX3jb5%2F8x8gxsS5lne7mEEVIeX5dVy98p0z6WSefEjNuo1yQ%2Fl2Fcmpcs6JfIzegYYR7%2FRUM8thsoJpzU5RByq3TdX21buuh3Ncm1cd%2FN%2Fm8hUWxDmIZ5Ix4SYOxGKjw1lLXLtEicSPC511I0zQFqQc1ZtGF5la%2B9cggLpu9vxEI7a9Bb9Xdg77r8zMNtn%2BEgta8b8IQcXJAAO96C4W3rBTGbFM%2BEdr2toNyRC6qxm4kOxiN6GF4VkoVbTKvKv2Asu7SFOya6b57GvQGB7ZVm5N35OLYRkFZK5Bhb%2BzA0RIEuq0X4a4JLx0x7wAwV%2B9kkc0B%2BQmoQCBIHFAFccsFgpNjmy835IDwlh%2B0CX1AA4qgJLyc2Wr%2FrV3Wwdk9HtDYogNq7A7HkNcVZnxVr%2F9GUhVRmQL7YYhB77kzKYNKN3e0j524f32pVd98n5xJf0qWGUW4ajXxQqtmdhxi5nANcNvrSwBVsWJRcpqYG96e0BFnIFZnT5253j06fZMJPfnL8GOqUBgDAc4L2nICRSRD2zWP%2BviOwtjwmzyBUrFJNi%2BBF1dOsgI6TieBsnzrOKCXOTxHrHx%2Fobml%2FWMTsO9Uz6Mub56IJHJYaE1iaJDGbw%2Fhzvz31pnypCrRpKm5ZZBvigH2Mj3AGgaw7Dqefuf2%2FJiUs2cWiJKmgH8V9Dz%2F7Wo7n4ckFh5blM94nR%2F27gHelBBXshMt8k1ZpGShiTSL2MfHboK%2BnX09sO&X-Amz-Signature=34224d74bfe46cf6183067a71c40e71d5c366519d181e6501ec78d82dc252b00&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTPETAX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCrLuMQMZLkxI9P2ifgvmFBXrOeyeAnUJjQ8eNFEW4WfAIgPVJYfSWpclfr%2Fthix6I7Sp5UzTmGa7%2FfkXAoI9oKV%2Fwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDARSvFvNXSXGLFAfxSrcA97gASagsUz90ptUMMIm1B441YM%2FJT3Scg79CEeUFt42nFjL2PUobYBAYECTbXoh8dpdDUDb44jK6C6B36j7Ka%2FztbcSmNZcfBv1XbHyksCGk4TCt%2FTpW83crW1zVLG7s1YX3jb5%2F8x8gxsS5lne7mEEVIeX5dVy98p0z6WSefEjNuo1yQ%2Fl2Fcmpcs6JfIzegYYR7%2FRUM8thsoJpzU5RByq3TdX21buuh3Ncm1cd%2FN%2Fm8hUWxDmIZ5Ix4SYOxGKjw1lLXLtEicSPC511I0zQFqQc1ZtGF5la%2B9cggLpu9vxEI7a9Bb9Xdg77r8zMNtn%2BEgta8b8IQcXJAAO96C4W3rBTGbFM%2BEdr2toNyRC6qxm4kOxiN6GF4VkoVbTKvKv2Asu7SFOya6b57GvQGB7ZVm5N35OLYRkFZK5Bhb%2BzA0RIEuq0X4a4JLx0x7wAwV%2B9kkc0B%2BQmoQCBIHFAFccsFgpNjmy835IDwlh%2B0CX1AA4qgJLyc2Wr%2FrV3Wwdk9HtDYogNq7A7HkNcVZnxVr%2F9GUhVRmQL7YYhB77kzKYNKN3e0j524f32pVd98n5xJf0qWGUW4ajXxQqtmdhxi5nANcNvrSwBVsWJRcpqYG96e0BFnIFZnT5253j06fZMJPfnL8GOqUBgDAc4L2nICRSRD2zWP%2BviOwtjwmzyBUrFJNi%2BBF1dOsgI6TieBsnzrOKCXOTxHrHx%2Fobml%2FWMTsO9Uz6Mub56IJHJYaE1iaJDGbw%2Fhzvz31pnypCrRpKm5ZZBvigH2Mj3AGgaw7Dqefuf2%2FJiUs2cWiJKmgH8V9Dz%2F7Wo7n4ckFh5blM94nR%2F27gHelBBXshMt8k1ZpGShiTSL2MfHboK%2BnX09sO&X-Amz-Signature=d361fd21737b04de5db2edd2cbafef7019ba14128999ce1101fb30a6a2a2260f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTPETAX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCrLuMQMZLkxI9P2ifgvmFBXrOeyeAnUJjQ8eNFEW4WfAIgPVJYfSWpclfr%2Fthix6I7Sp5UzTmGa7%2FfkXAoI9oKV%2Fwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDARSvFvNXSXGLFAfxSrcA97gASagsUz90ptUMMIm1B441YM%2FJT3Scg79CEeUFt42nFjL2PUobYBAYECTbXoh8dpdDUDb44jK6C6B36j7Ka%2FztbcSmNZcfBv1XbHyksCGk4TCt%2FTpW83crW1zVLG7s1YX3jb5%2F8x8gxsS5lne7mEEVIeX5dVy98p0z6WSefEjNuo1yQ%2Fl2Fcmpcs6JfIzegYYR7%2FRUM8thsoJpzU5RByq3TdX21buuh3Ncm1cd%2FN%2Fm8hUWxDmIZ5Ix4SYOxGKjw1lLXLtEicSPC511I0zQFqQc1ZtGF5la%2B9cggLpu9vxEI7a9Bb9Xdg77r8zMNtn%2BEgta8b8IQcXJAAO96C4W3rBTGbFM%2BEdr2toNyRC6qxm4kOxiN6GF4VkoVbTKvKv2Asu7SFOya6b57GvQGB7ZVm5N35OLYRkFZK5Bhb%2BzA0RIEuq0X4a4JLx0x7wAwV%2B9kkc0B%2BQmoQCBIHFAFccsFgpNjmy835IDwlh%2B0CX1AA4qgJLyc2Wr%2FrV3Wwdk9HtDYogNq7A7HkNcVZnxVr%2F9GUhVRmQL7YYhB77kzKYNKN3e0j524f32pVd98n5xJf0qWGUW4ajXxQqtmdhxi5nANcNvrSwBVsWJRcpqYG96e0BFnIFZnT5253j06fZMJPfnL8GOqUBgDAc4L2nICRSRD2zWP%2BviOwtjwmzyBUrFJNi%2BBF1dOsgI6TieBsnzrOKCXOTxHrHx%2Fobml%2FWMTsO9Uz6Mub56IJHJYaE1iaJDGbw%2Fhzvz31pnypCrRpKm5ZZBvigH2Mj3AGgaw7Dqefuf2%2FJiUs2cWiJKmgH8V9Dz%2F7Wo7n4ckFh5blM94nR%2F27gHelBBXshMt8k1ZpGShiTSL2MfHboK%2BnX09sO&X-Amz-Signature=3b149c7a135cb950cd685e237b6591adb62ab2948043914651a2fd1688484913&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTPETAX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCrLuMQMZLkxI9P2ifgvmFBXrOeyeAnUJjQ8eNFEW4WfAIgPVJYfSWpclfr%2Fthix6I7Sp5UzTmGa7%2FfkXAoI9oKV%2Fwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDARSvFvNXSXGLFAfxSrcA97gASagsUz90ptUMMIm1B441YM%2FJT3Scg79CEeUFt42nFjL2PUobYBAYECTbXoh8dpdDUDb44jK6C6B36j7Ka%2FztbcSmNZcfBv1XbHyksCGk4TCt%2FTpW83crW1zVLG7s1YX3jb5%2F8x8gxsS5lne7mEEVIeX5dVy98p0z6WSefEjNuo1yQ%2Fl2Fcmpcs6JfIzegYYR7%2FRUM8thsoJpzU5RByq3TdX21buuh3Ncm1cd%2FN%2Fm8hUWxDmIZ5Ix4SYOxGKjw1lLXLtEicSPC511I0zQFqQc1ZtGF5la%2B9cggLpu9vxEI7a9Bb9Xdg77r8zMNtn%2BEgta8b8IQcXJAAO96C4W3rBTGbFM%2BEdr2toNyRC6qxm4kOxiN6GF4VkoVbTKvKv2Asu7SFOya6b57GvQGB7ZVm5N35OLYRkFZK5Bhb%2BzA0RIEuq0X4a4JLx0x7wAwV%2B9kkc0B%2BQmoQCBIHFAFccsFgpNjmy835IDwlh%2B0CX1AA4qgJLyc2Wr%2FrV3Wwdk9HtDYogNq7A7HkNcVZnxVr%2F9GUhVRmQL7YYhB77kzKYNKN3e0j524f32pVd98n5xJf0qWGUW4ajXxQqtmdhxi5nANcNvrSwBVsWJRcpqYG96e0BFnIFZnT5253j06fZMJPfnL8GOqUBgDAc4L2nICRSRD2zWP%2BviOwtjwmzyBUrFJNi%2BBF1dOsgI6TieBsnzrOKCXOTxHrHx%2Fobml%2FWMTsO9Uz6Mub56IJHJYaE1iaJDGbw%2Fhzvz31pnypCrRpKm5ZZBvigH2Mj3AGgaw7Dqefuf2%2FJiUs2cWiJKmgH8V9Dz%2F7Wo7n4ckFh5blM94nR%2F27gHelBBXshMt8k1ZpGShiTSL2MfHboK%2BnX09sO&X-Amz-Signature=dad64ec39a8034849eb92afc118c604dd7cfe5574788044cd52a1ddc72cb4f39&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTPETAX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCrLuMQMZLkxI9P2ifgvmFBXrOeyeAnUJjQ8eNFEW4WfAIgPVJYfSWpclfr%2Fthix6I7Sp5UzTmGa7%2FfkXAoI9oKV%2Fwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDARSvFvNXSXGLFAfxSrcA97gASagsUz90ptUMMIm1B441YM%2FJT3Scg79CEeUFt42nFjL2PUobYBAYECTbXoh8dpdDUDb44jK6C6B36j7Ka%2FztbcSmNZcfBv1XbHyksCGk4TCt%2FTpW83crW1zVLG7s1YX3jb5%2F8x8gxsS5lne7mEEVIeX5dVy98p0z6WSefEjNuo1yQ%2Fl2Fcmpcs6JfIzegYYR7%2FRUM8thsoJpzU5RByq3TdX21buuh3Ncm1cd%2FN%2Fm8hUWxDmIZ5Ix4SYOxGKjw1lLXLtEicSPC511I0zQFqQc1ZtGF5la%2B9cggLpu9vxEI7a9Bb9Xdg77r8zMNtn%2BEgta8b8IQcXJAAO96C4W3rBTGbFM%2BEdr2toNyRC6qxm4kOxiN6GF4VkoVbTKvKv2Asu7SFOya6b57GvQGB7ZVm5N35OLYRkFZK5Bhb%2BzA0RIEuq0X4a4JLx0x7wAwV%2B9kkc0B%2BQmoQCBIHFAFccsFgpNjmy835IDwlh%2B0CX1AA4qgJLyc2Wr%2FrV3Wwdk9HtDYogNq7A7HkNcVZnxVr%2F9GUhVRmQL7YYhB77kzKYNKN3e0j524f32pVd98n5xJf0qWGUW4ajXxQqtmdhxi5nANcNvrSwBVsWJRcpqYG96e0BFnIFZnT5253j06fZMJPfnL8GOqUBgDAc4L2nICRSRD2zWP%2BviOwtjwmzyBUrFJNi%2BBF1dOsgI6TieBsnzrOKCXOTxHrHx%2Fobml%2FWMTsO9Uz6Mub56IJHJYaE1iaJDGbw%2Fhzvz31pnypCrRpKm5ZZBvigH2Mj3AGgaw7Dqefuf2%2FJiUs2cWiJKmgH8V9Dz%2F7Wo7n4ckFh5blM94nR%2F27gHelBBXshMt8k1ZpGShiTSL2MfHboK%2BnX09sO&X-Amz-Signature=b5460887653a22350d3368b747e48727ff35bcd604fda15a83227486c5628643&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTPETAX%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCrLuMQMZLkxI9P2ifgvmFBXrOeyeAnUJjQ8eNFEW4WfAIgPVJYfSWpclfr%2Fthix6I7Sp5UzTmGa7%2FfkXAoI9oKV%2Fwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDARSvFvNXSXGLFAfxSrcA97gASagsUz90ptUMMIm1B441YM%2FJT3Scg79CEeUFt42nFjL2PUobYBAYECTbXoh8dpdDUDb44jK6C6B36j7Ka%2FztbcSmNZcfBv1XbHyksCGk4TCt%2FTpW83crW1zVLG7s1YX3jb5%2F8x8gxsS5lne7mEEVIeX5dVy98p0z6WSefEjNuo1yQ%2Fl2Fcmpcs6JfIzegYYR7%2FRUM8thsoJpzU5RByq3TdX21buuh3Ncm1cd%2FN%2Fm8hUWxDmIZ5Ix4SYOxGKjw1lLXLtEicSPC511I0zQFqQc1ZtGF5la%2B9cggLpu9vxEI7a9Bb9Xdg77r8zMNtn%2BEgta8b8IQcXJAAO96C4W3rBTGbFM%2BEdr2toNyRC6qxm4kOxiN6GF4VkoVbTKvKv2Asu7SFOya6b57GvQGB7ZVm5N35OLYRkFZK5Bhb%2BzA0RIEuq0X4a4JLx0x7wAwV%2B9kkc0B%2BQmoQCBIHFAFccsFgpNjmy835IDwlh%2B0CX1AA4qgJLyc2Wr%2FrV3Wwdk9HtDYogNq7A7HkNcVZnxVr%2F9GUhVRmQL7YYhB77kzKYNKN3e0j524f32pVd98n5xJf0qWGUW4ajXxQqtmdhxi5nANcNvrSwBVsWJRcpqYG96e0BFnIFZnT5253j06fZMJPfnL8GOqUBgDAc4L2nICRSRD2zWP%2BviOwtjwmzyBUrFJNi%2BBF1dOsgI6TieBsnzrOKCXOTxHrHx%2Fobml%2FWMTsO9Uz6Mub56IJHJYaE1iaJDGbw%2Fhzvz31pnypCrRpKm5ZZBvigH2Mj3AGgaw7Dqefuf2%2FJiUs2cWiJKmgH8V9Dz%2F7Wo7n4ckFh5blM94nR%2F27gHelBBXshMt8k1ZpGShiTSL2MfHboK%2BnX09sO&X-Amz-Signature=cef46e5ddb582752f90744e70aad4338075293c042297c85ceada6605f1b983a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

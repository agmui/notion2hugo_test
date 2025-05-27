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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MF55CDT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQeWiGDxxGdMuGdipYyjYSaWAjCJzBz7sTIXTI%2Fz%2BvgIgdmRZMpAdGB0kVUqcTTGkjB%2FB6tg3yLh1a2I08v5pWOAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAYAHA%2BPPumN26NA6SrcAz2wPa0dzTCUa4%2BkN3Gk0kVd6R8oo%2Bb%2FpSZXvLLPho%2FOk%2BiqUi%2FoNSogDGoDqg5g40Pt0OZHw4t49WaeIERGz%2FzD7BwgwYQDt0DHRcfdpdrr6nDlPs%2FpGbkw2QgEb19Ol3%2FVKxm9m8mSk9ydDvOY14SzFSf8eMDXiaTlGZacpvn64BIhPti85jLCV%2BDaDNyaRThzsJfgK991hnqLgbZXXeabHuKORujgybIvAeJF%2BDiqGyD6u3PYsi2CDB9TxSKXkqgagoaA8sOJ3d9LgMukiyQQbiJ0apjpGrbJ7EU8PvB0XVdlimXZiEoyKQfwpL91ZjCM%2F13dVdqsMbpe87TS%2BfZdE5SDS274BZjfigHFlUewymFyVTtASqoFtc3p3at%2BefrE4aptRrSwNG75piaVUixgDEP0kjuvhmn65MGRsNdqtTTkEjZM7IEwCU92y84EosbnUvJuDYZdnoUB5DQVfY0kTl3jApgQwIwCPhN2dw9PJb8WHwoSG%2BzJC%2BpP8bkRYjhFqCZinKwl4BICXdJcIAyRRTxsj9uxeMzkMy3hMsLUHGqZ25%2BwdanLcwPBWh8gpb4tNx5w315mV%2BI0BIjs5pKewKfwCPyc9dyrW0jBT7TyCSz%2BQy6n39PxTcMeMKDK2MEGOqUBHVKY7yBZQDanyiCIQ7M81elCFVjbAfCXL3L%2FbnjsrXLOULONoFRaO9tcGMTQySvp6tmBSMRvWmlo4XAaaaQSeHibEsYwOLKbq%2FSPaANabHt1n2Owv41%2FBtFoIN%2Bfe6oB3s1aimOLW%2FaUZnj1%2BIFl%2BH6bF7CPeNfT5zsDX%2F9Svir%2B9a3DlNAwaV%2F8L8jEruHuup23qNNsTidtfEbPMhve6EgIgtVq&X-Amz-Signature=38a413faebeceb6bb4c681efe5b4dd0e53c1ab99017b288b54f90475c0cfc5c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MF55CDT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQeWiGDxxGdMuGdipYyjYSaWAjCJzBz7sTIXTI%2Fz%2BvgIgdmRZMpAdGB0kVUqcTTGkjB%2FB6tg3yLh1a2I08v5pWOAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAYAHA%2BPPumN26NA6SrcAz2wPa0dzTCUa4%2BkN3Gk0kVd6R8oo%2Bb%2FpSZXvLLPho%2FOk%2BiqUi%2FoNSogDGoDqg5g40Pt0OZHw4t49WaeIERGz%2FzD7BwgwYQDt0DHRcfdpdrr6nDlPs%2FpGbkw2QgEb19Ol3%2FVKxm9m8mSk9ydDvOY14SzFSf8eMDXiaTlGZacpvn64BIhPti85jLCV%2BDaDNyaRThzsJfgK991hnqLgbZXXeabHuKORujgybIvAeJF%2BDiqGyD6u3PYsi2CDB9TxSKXkqgagoaA8sOJ3d9LgMukiyQQbiJ0apjpGrbJ7EU8PvB0XVdlimXZiEoyKQfwpL91ZjCM%2F13dVdqsMbpe87TS%2BfZdE5SDS274BZjfigHFlUewymFyVTtASqoFtc3p3at%2BefrE4aptRrSwNG75piaVUixgDEP0kjuvhmn65MGRsNdqtTTkEjZM7IEwCU92y84EosbnUvJuDYZdnoUB5DQVfY0kTl3jApgQwIwCPhN2dw9PJb8WHwoSG%2BzJC%2BpP8bkRYjhFqCZinKwl4BICXdJcIAyRRTxsj9uxeMzkMy3hMsLUHGqZ25%2BwdanLcwPBWh8gpb4tNx5w315mV%2BI0BIjs5pKewKfwCPyc9dyrW0jBT7TyCSz%2BQy6n39PxTcMeMKDK2MEGOqUBHVKY7yBZQDanyiCIQ7M81elCFVjbAfCXL3L%2FbnjsrXLOULONoFRaO9tcGMTQySvp6tmBSMRvWmlo4XAaaaQSeHibEsYwOLKbq%2FSPaANabHt1n2Owv41%2FBtFoIN%2Bfe6oB3s1aimOLW%2FaUZnj1%2BIFl%2BH6bF7CPeNfT5zsDX%2F9Svir%2B9a3DlNAwaV%2F8L8jEruHuup23qNNsTidtfEbPMhve6EgIgtVq&X-Amz-Signature=92185611902c0bf73fd754d9008ca5b8baeb164004205acc5293c29f13b09f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MF55CDT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQeWiGDxxGdMuGdipYyjYSaWAjCJzBz7sTIXTI%2Fz%2BvgIgdmRZMpAdGB0kVUqcTTGkjB%2FB6tg3yLh1a2I08v5pWOAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAYAHA%2BPPumN26NA6SrcAz2wPa0dzTCUa4%2BkN3Gk0kVd6R8oo%2Bb%2FpSZXvLLPho%2FOk%2BiqUi%2FoNSogDGoDqg5g40Pt0OZHw4t49WaeIERGz%2FzD7BwgwYQDt0DHRcfdpdrr6nDlPs%2FpGbkw2QgEb19Ol3%2FVKxm9m8mSk9ydDvOY14SzFSf8eMDXiaTlGZacpvn64BIhPti85jLCV%2BDaDNyaRThzsJfgK991hnqLgbZXXeabHuKORujgybIvAeJF%2BDiqGyD6u3PYsi2CDB9TxSKXkqgagoaA8sOJ3d9LgMukiyQQbiJ0apjpGrbJ7EU8PvB0XVdlimXZiEoyKQfwpL91ZjCM%2F13dVdqsMbpe87TS%2BfZdE5SDS274BZjfigHFlUewymFyVTtASqoFtc3p3at%2BefrE4aptRrSwNG75piaVUixgDEP0kjuvhmn65MGRsNdqtTTkEjZM7IEwCU92y84EosbnUvJuDYZdnoUB5DQVfY0kTl3jApgQwIwCPhN2dw9PJb8WHwoSG%2BzJC%2BpP8bkRYjhFqCZinKwl4BICXdJcIAyRRTxsj9uxeMzkMy3hMsLUHGqZ25%2BwdanLcwPBWh8gpb4tNx5w315mV%2BI0BIjs5pKewKfwCPyc9dyrW0jBT7TyCSz%2BQy6n39PxTcMeMKDK2MEGOqUBHVKY7yBZQDanyiCIQ7M81elCFVjbAfCXL3L%2FbnjsrXLOULONoFRaO9tcGMTQySvp6tmBSMRvWmlo4XAaaaQSeHibEsYwOLKbq%2FSPaANabHt1n2Owv41%2FBtFoIN%2Bfe6oB3s1aimOLW%2FaUZnj1%2BIFl%2BH6bF7CPeNfT5zsDX%2F9Svir%2B9a3DlNAwaV%2F8L8jEruHuup23qNNsTidtfEbPMhve6EgIgtVq&X-Amz-Signature=f423a5c7c100f1f3b47315dc35b3369193a4dc056d2034f21dc6182bfc020c01&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MF55CDT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQeWiGDxxGdMuGdipYyjYSaWAjCJzBz7sTIXTI%2Fz%2BvgIgdmRZMpAdGB0kVUqcTTGkjB%2FB6tg3yLh1a2I08v5pWOAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAYAHA%2BPPumN26NA6SrcAz2wPa0dzTCUa4%2BkN3Gk0kVd6R8oo%2Bb%2FpSZXvLLPho%2FOk%2BiqUi%2FoNSogDGoDqg5g40Pt0OZHw4t49WaeIERGz%2FzD7BwgwYQDt0DHRcfdpdrr6nDlPs%2FpGbkw2QgEb19Ol3%2FVKxm9m8mSk9ydDvOY14SzFSf8eMDXiaTlGZacpvn64BIhPti85jLCV%2BDaDNyaRThzsJfgK991hnqLgbZXXeabHuKORujgybIvAeJF%2BDiqGyD6u3PYsi2CDB9TxSKXkqgagoaA8sOJ3d9LgMukiyQQbiJ0apjpGrbJ7EU8PvB0XVdlimXZiEoyKQfwpL91ZjCM%2F13dVdqsMbpe87TS%2BfZdE5SDS274BZjfigHFlUewymFyVTtASqoFtc3p3at%2BefrE4aptRrSwNG75piaVUixgDEP0kjuvhmn65MGRsNdqtTTkEjZM7IEwCU92y84EosbnUvJuDYZdnoUB5DQVfY0kTl3jApgQwIwCPhN2dw9PJb8WHwoSG%2BzJC%2BpP8bkRYjhFqCZinKwl4BICXdJcIAyRRTxsj9uxeMzkMy3hMsLUHGqZ25%2BwdanLcwPBWh8gpb4tNx5w315mV%2BI0BIjs5pKewKfwCPyc9dyrW0jBT7TyCSz%2BQy6n39PxTcMeMKDK2MEGOqUBHVKY7yBZQDanyiCIQ7M81elCFVjbAfCXL3L%2FbnjsrXLOULONoFRaO9tcGMTQySvp6tmBSMRvWmlo4XAaaaQSeHibEsYwOLKbq%2FSPaANabHt1n2Owv41%2FBtFoIN%2Bfe6oB3s1aimOLW%2FaUZnj1%2BIFl%2BH6bF7CPeNfT5zsDX%2F9Svir%2B9a3DlNAwaV%2F8L8jEruHuup23qNNsTidtfEbPMhve6EgIgtVq&X-Amz-Signature=5b994b586a3cfdd0bef07bcf7873a9e8e319fc3f09d118dc4ffd9694c1ac574c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MF55CDT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQeWiGDxxGdMuGdipYyjYSaWAjCJzBz7sTIXTI%2Fz%2BvgIgdmRZMpAdGB0kVUqcTTGkjB%2FB6tg3yLh1a2I08v5pWOAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAYAHA%2BPPumN26NA6SrcAz2wPa0dzTCUa4%2BkN3Gk0kVd6R8oo%2Bb%2FpSZXvLLPho%2FOk%2BiqUi%2FoNSogDGoDqg5g40Pt0OZHw4t49WaeIERGz%2FzD7BwgwYQDt0DHRcfdpdrr6nDlPs%2FpGbkw2QgEb19Ol3%2FVKxm9m8mSk9ydDvOY14SzFSf8eMDXiaTlGZacpvn64BIhPti85jLCV%2BDaDNyaRThzsJfgK991hnqLgbZXXeabHuKORujgybIvAeJF%2BDiqGyD6u3PYsi2CDB9TxSKXkqgagoaA8sOJ3d9LgMukiyQQbiJ0apjpGrbJ7EU8PvB0XVdlimXZiEoyKQfwpL91ZjCM%2F13dVdqsMbpe87TS%2BfZdE5SDS274BZjfigHFlUewymFyVTtASqoFtc3p3at%2BefrE4aptRrSwNG75piaVUixgDEP0kjuvhmn65MGRsNdqtTTkEjZM7IEwCU92y84EosbnUvJuDYZdnoUB5DQVfY0kTl3jApgQwIwCPhN2dw9PJb8WHwoSG%2BzJC%2BpP8bkRYjhFqCZinKwl4BICXdJcIAyRRTxsj9uxeMzkMy3hMsLUHGqZ25%2BwdanLcwPBWh8gpb4tNx5w315mV%2BI0BIjs5pKewKfwCPyc9dyrW0jBT7TyCSz%2BQy6n39PxTcMeMKDK2MEGOqUBHVKY7yBZQDanyiCIQ7M81elCFVjbAfCXL3L%2FbnjsrXLOULONoFRaO9tcGMTQySvp6tmBSMRvWmlo4XAaaaQSeHibEsYwOLKbq%2FSPaANabHt1n2Owv41%2FBtFoIN%2Bfe6oB3s1aimOLW%2FaUZnj1%2BIFl%2BH6bF7CPeNfT5zsDX%2F9Svir%2B9a3DlNAwaV%2F8L8jEruHuup23qNNsTidtfEbPMhve6EgIgtVq&X-Amz-Signature=7f089751fff17c0a75db90b1aa707c34e1e8bb602eca6cf0abb27f1cf266b199&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MF55CDT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQeWiGDxxGdMuGdipYyjYSaWAjCJzBz7sTIXTI%2Fz%2BvgIgdmRZMpAdGB0kVUqcTTGkjB%2FB6tg3yLh1a2I08v5pWOAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAYAHA%2BPPumN26NA6SrcAz2wPa0dzTCUa4%2BkN3Gk0kVd6R8oo%2Bb%2FpSZXvLLPho%2FOk%2BiqUi%2FoNSogDGoDqg5g40Pt0OZHw4t49WaeIERGz%2FzD7BwgwYQDt0DHRcfdpdrr6nDlPs%2FpGbkw2QgEb19Ol3%2FVKxm9m8mSk9ydDvOY14SzFSf8eMDXiaTlGZacpvn64BIhPti85jLCV%2BDaDNyaRThzsJfgK991hnqLgbZXXeabHuKORujgybIvAeJF%2BDiqGyD6u3PYsi2CDB9TxSKXkqgagoaA8sOJ3d9LgMukiyQQbiJ0apjpGrbJ7EU8PvB0XVdlimXZiEoyKQfwpL91ZjCM%2F13dVdqsMbpe87TS%2BfZdE5SDS274BZjfigHFlUewymFyVTtASqoFtc3p3at%2BefrE4aptRrSwNG75piaVUixgDEP0kjuvhmn65MGRsNdqtTTkEjZM7IEwCU92y84EosbnUvJuDYZdnoUB5DQVfY0kTl3jApgQwIwCPhN2dw9PJb8WHwoSG%2BzJC%2BpP8bkRYjhFqCZinKwl4BICXdJcIAyRRTxsj9uxeMzkMy3hMsLUHGqZ25%2BwdanLcwPBWh8gpb4tNx5w315mV%2BI0BIjs5pKewKfwCPyc9dyrW0jBT7TyCSz%2BQy6n39PxTcMeMKDK2MEGOqUBHVKY7yBZQDanyiCIQ7M81elCFVjbAfCXL3L%2FbnjsrXLOULONoFRaO9tcGMTQySvp6tmBSMRvWmlo4XAaaaQSeHibEsYwOLKbq%2FSPaANabHt1n2Owv41%2FBtFoIN%2Bfe6oB3s1aimOLW%2FaUZnj1%2BIFl%2BH6bF7CPeNfT5zsDX%2F9Svir%2B9a3DlNAwaV%2F8L8jEruHuup23qNNsTidtfEbPMhve6EgIgtVq&X-Amz-Signature=b99be4d9502c3ed1552ca9ddb848bb30291c0d2535f39261ceab429e68c368fd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MF55CDT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQQeWiGDxxGdMuGdipYyjYSaWAjCJzBz7sTIXTI%2Fz%2BvgIgdmRZMpAdGB0kVUqcTTGkjB%2FB6tg3yLh1a2I08v5pWOAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAYAHA%2BPPumN26NA6SrcAz2wPa0dzTCUa4%2BkN3Gk0kVd6R8oo%2Bb%2FpSZXvLLPho%2FOk%2BiqUi%2FoNSogDGoDqg5g40Pt0OZHw4t49WaeIERGz%2FzD7BwgwYQDt0DHRcfdpdrr6nDlPs%2FpGbkw2QgEb19Ol3%2FVKxm9m8mSk9ydDvOY14SzFSf8eMDXiaTlGZacpvn64BIhPti85jLCV%2BDaDNyaRThzsJfgK991hnqLgbZXXeabHuKORujgybIvAeJF%2BDiqGyD6u3PYsi2CDB9TxSKXkqgagoaA8sOJ3d9LgMukiyQQbiJ0apjpGrbJ7EU8PvB0XVdlimXZiEoyKQfwpL91ZjCM%2F13dVdqsMbpe87TS%2BfZdE5SDS274BZjfigHFlUewymFyVTtASqoFtc3p3at%2BefrE4aptRrSwNG75piaVUixgDEP0kjuvhmn65MGRsNdqtTTkEjZM7IEwCU92y84EosbnUvJuDYZdnoUB5DQVfY0kTl3jApgQwIwCPhN2dw9PJb8WHwoSG%2BzJC%2BpP8bkRYjhFqCZinKwl4BICXdJcIAyRRTxsj9uxeMzkMy3hMsLUHGqZ25%2BwdanLcwPBWh8gpb4tNx5w315mV%2BI0BIjs5pKewKfwCPyc9dyrW0jBT7TyCSz%2BQy6n39PxTcMeMKDK2MEGOqUBHVKY7yBZQDanyiCIQ7M81elCFVjbAfCXL3L%2FbnjsrXLOULONoFRaO9tcGMTQySvp6tmBSMRvWmlo4XAaaaQSeHibEsYwOLKbq%2FSPaANabHt1n2Owv41%2FBtFoIN%2Bfe6oB3s1aimOLW%2FaUZnj1%2BIFl%2BH6bF7CPeNfT5zsDX%2F9Svir%2B9a3DlNAwaV%2F8L8jEruHuup23qNNsTidtfEbPMhve6EgIgtVq&X-Amz-Signature=876a9cc0cd8e929ea46dd7357e167019850d0bcc39ec7aca3ff843a098d5ec95&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

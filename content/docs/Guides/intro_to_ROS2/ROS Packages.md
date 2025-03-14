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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3KKMZX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSDLZZmTBtdFJ3H7hh5BjRU3n6oKYyVJEqsb2TEgmvBgIgIW5SXuQrCBs4c1VPmlIZCfTRGqQJ%2BpzRjH%2FHAF2irJgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtE0iCHZDXmroBThCrcAxFxfVCXkTyBnSo8g2Y8fHoyRBcZYq6MIqvIrzC8KvxNoDQ4R15MUtrpy0b%2BAVV3Ycry2%2FahAnmETw%2BeG1SCS%2F88qrNdP7KYnRI4nj4mkOcdZkXH%2FBaCrMRZHKHU125WStxf%2BmejHG1VnBxcNA3CW3qvyQVhpUCRTPig5K3RMEXB%2Bbd07wqJ3pBFcFYtgaawp%2BBv8dxQY%2FsY9R60HlSTfimtOitBFZ%2BF7WuWDK2AO1g8Yb%2FtyQueofhgB13Vf6HW0IckHHlVZ1zHWeuS4Bgu81%2B98sGRLwkYGU6%2Fy9NQxCGpEXS0mia5rNhBtVmeJptWSqFxxTwXpbD%2FXgURWxgbkRYzy%2F6fQVQ1XnWV2vA9rrBmRFvFoaxCvo1p901FMR%2By828FoqBF5SRAUy3V8%2FzYBoXY21QHPHGbcWj5IcKa%2BG7nacHsViamvB5rBR7%2BdlliIOGXICZfe3kKFS6EN6HWN6mUHOysO2FYlKILC1EmY%2BThvKS3kI6hxpthTHZLXX7NmK8OcY6N%2B9QRqqugPXCgsoYTmAsm%2FIDzfxgVV21TiKnZKDuJFPbiwUaiAGGLM%2B369M%2F3HDGtaAMnJI9rQKAZ6GLRaXqtFdjv2q1RuN3Tcx9lpyCKb8b5x%2FFyebJxMMHGz74GOqUBPGqZjeaT0HSudHisfJHZiO5FThWxJzgKXZr11NpX3HEcZRMq0M7b7niJZPEDtmDdwhhiglnaYjihdlVjertRofUDsE0Q3MQOpyRo4jg1vJqR%2F71K9lbUsmZ10iOh4iKFK1GGrlRT99pU8AuCfO382l9MM2RvDLbc7zmG2%2BgNRkUIySAPyJu%2FV2IZnuqIkyQzvsNrphe5JahcNpDTf430m6bZaaAR&X-Amz-Signature=1cae52c4dea75e7a456df0c389f4561bbcb5b368257982d9f1ea8f287ed7bc26&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3KKMZX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSDLZZmTBtdFJ3H7hh5BjRU3n6oKYyVJEqsb2TEgmvBgIgIW5SXuQrCBs4c1VPmlIZCfTRGqQJ%2BpzRjH%2FHAF2irJgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtE0iCHZDXmroBThCrcAxFxfVCXkTyBnSo8g2Y8fHoyRBcZYq6MIqvIrzC8KvxNoDQ4R15MUtrpy0b%2BAVV3Ycry2%2FahAnmETw%2BeG1SCS%2F88qrNdP7KYnRI4nj4mkOcdZkXH%2FBaCrMRZHKHU125WStxf%2BmejHG1VnBxcNA3CW3qvyQVhpUCRTPig5K3RMEXB%2Bbd07wqJ3pBFcFYtgaawp%2BBv8dxQY%2FsY9R60HlSTfimtOitBFZ%2BF7WuWDK2AO1g8Yb%2FtyQueofhgB13Vf6HW0IckHHlVZ1zHWeuS4Bgu81%2B98sGRLwkYGU6%2Fy9NQxCGpEXS0mia5rNhBtVmeJptWSqFxxTwXpbD%2FXgURWxgbkRYzy%2F6fQVQ1XnWV2vA9rrBmRFvFoaxCvo1p901FMR%2By828FoqBF5SRAUy3V8%2FzYBoXY21QHPHGbcWj5IcKa%2BG7nacHsViamvB5rBR7%2BdlliIOGXICZfe3kKFS6EN6HWN6mUHOysO2FYlKILC1EmY%2BThvKS3kI6hxpthTHZLXX7NmK8OcY6N%2B9QRqqugPXCgsoYTmAsm%2FIDzfxgVV21TiKnZKDuJFPbiwUaiAGGLM%2B369M%2F3HDGtaAMnJI9rQKAZ6GLRaXqtFdjv2q1RuN3Tcx9lpyCKb8b5x%2FFyebJxMMHGz74GOqUBPGqZjeaT0HSudHisfJHZiO5FThWxJzgKXZr11NpX3HEcZRMq0M7b7niJZPEDtmDdwhhiglnaYjihdlVjertRofUDsE0Q3MQOpyRo4jg1vJqR%2F71K9lbUsmZ10iOh4iKFK1GGrlRT99pU8AuCfO382l9MM2RvDLbc7zmG2%2BgNRkUIySAPyJu%2FV2IZnuqIkyQzvsNrphe5JahcNpDTf430m6bZaaAR&X-Amz-Signature=0c571d8fbb012d5aab9a65ef4cadb551066eb808fc005ef14424d09ba3d3917d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3KKMZX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSDLZZmTBtdFJ3H7hh5BjRU3n6oKYyVJEqsb2TEgmvBgIgIW5SXuQrCBs4c1VPmlIZCfTRGqQJ%2BpzRjH%2FHAF2irJgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtE0iCHZDXmroBThCrcAxFxfVCXkTyBnSo8g2Y8fHoyRBcZYq6MIqvIrzC8KvxNoDQ4R15MUtrpy0b%2BAVV3Ycry2%2FahAnmETw%2BeG1SCS%2F88qrNdP7KYnRI4nj4mkOcdZkXH%2FBaCrMRZHKHU125WStxf%2BmejHG1VnBxcNA3CW3qvyQVhpUCRTPig5K3RMEXB%2Bbd07wqJ3pBFcFYtgaawp%2BBv8dxQY%2FsY9R60HlSTfimtOitBFZ%2BF7WuWDK2AO1g8Yb%2FtyQueofhgB13Vf6HW0IckHHlVZ1zHWeuS4Bgu81%2B98sGRLwkYGU6%2Fy9NQxCGpEXS0mia5rNhBtVmeJptWSqFxxTwXpbD%2FXgURWxgbkRYzy%2F6fQVQ1XnWV2vA9rrBmRFvFoaxCvo1p901FMR%2By828FoqBF5SRAUy3V8%2FzYBoXY21QHPHGbcWj5IcKa%2BG7nacHsViamvB5rBR7%2BdlliIOGXICZfe3kKFS6EN6HWN6mUHOysO2FYlKILC1EmY%2BThvKS3kI6hxpthTHZLXX7NmK8OcY6N%2B9QRqqugPXCgsoYTmAsm%2FIDzfxgVV21TiKnZKDuJFPbiwUaiAGGLM%2B369M%2F3HDGtaAMnJI9rQKAZ6GLRaXqtFdjv2q1RuN3Tcx9lpyCKb8b5x%2FFyebJxMMHGz74GOqUBPGqZjeaT0HSudHisfJHZiO5FThWxJzgKXZr11NpX3HEcZRMq0M7b7niJZPEDtmDdwhhiglnaYjihdlVjertRofUDsE0Q3MQOpyRo4jg1vJqR%2F71K9lbUsmZ10iOh4iKFK1GGrlRT99pU8AuCfO382l9MM2RvDLbc7zmG2%2BgNRkUIySAPyJu%2FV2IZnuqIkyQzvsNrphe5JahcNpDTf430m6bZaaAR&X-Amz-Signature=0779d2be307d6196220306da75828bbc3863219f85b57fb2dabfafb8f38dc490&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3KKMZX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSDLZZmTBtdFJ3H7hh5BjRU3n6oKYyVJEqsb2TEgmvBgIgIW5SXuQrCBs4c1VPmlIZCfTRGqQJ%2BpzRjH%2FHAF2irJgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtE0iCHZDXmroBThCrcAxFxfVCXkTyBnSo8g2Y8fHoyRBcZYq6MIqvIrzC8KvxNoDQ4R15MUtrpy0b%2BAVV3Ycry2%2FahAnmETw%2BeG1SCS%2F88qrNdP7KYnRI4nj4mkOcdZkXH%2FBaCrMRZHKHU125WStxf%2BmejHG1VnBxcNA3CW3qvyQVhpUCRTPig5K3RMEXB%2Bbd07wqJ3pBFcFYtgaawp%2BBv8dxQY%2FsY9R60HlSTfimtOitBFZ%2BF7WuWDK2AO1g8Yb%2FtyQueofhgB13Vf6HW0IckHHlVZ1zHWeuS4Bgu81%2B98sGRLwkYGU6%2Fy9NQxCGpEXS0mia5rNhBtVmeJptWSqFxxTwXpbD%2FXgURWxgbkRYzy%2F6fQVQ1XnWV2vA9rrBmRFvFoaxCvo1p901FMR%2By828FoqBF5SRAUy3V8%2FzYBoXY21QHPHGbcWj5IcKa%2BG7nacHsViamvB5rBR7%2BdlliIOGXICZfe3kKFS6EN6HWN6mUHOysO2FYlKILC1EmY%2BThvKS3kI6hxpthTHZLXX7NmK8OcY6N%2B9QRqqugPXCgsoYTmAsm%2FIDzfxgVV21TiKnZKDuJFPbiwUaiAGGLM%2B369M%2F3HDGtaAMnJI9rQKAZ6GLRaXqtFdjv2q1RuN3Tcx9lpyCKb8b5x%2FFyebJxMMHGz74GOqUBPGqZjeaT0HSudHisfJHZiO5FThWxJzgKXZr11NpX3HEcZRMq0M7b7niJZPEDtmDdwhhiglnaYjihdlVjertRofUDsE0Q3MQOpyRo4jg1vJqR%2F71K9lbUsmZ10iOh4iKFK1GGrlRT99pU8AuCfO382l9MM2RvDLbc7zmG2%2BgNRkUIySAPyJu%2FV2IZnuqIkyQzvsNrphe5JahcNpDTf430m6bZaaAR&X-Amz-Signature=a240b8c7dd004da66a42e23f4d60f414b20942b4b6a24c34179dc91d624060cf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3KKMZX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSDLZZmTBtdFJ3H7hh5BjRU3n6oKYyVJEqsb2TEgmvBgIgIW5SXuQrCBs4c1VPmlIZCfTRGqQJ%2BpzRjH%2FHAF2irJgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtE0iCHZDXmroBThCrcAxFxfVCXkTyBnSo8g2Y8fHoyRBcZYq6MIqvIrzC8KvxNoDQ4R15MUtrpy0b%2BAVV3Ycry2%2FahAnmETw%2BeG1SCS%2F88qrNdP7KYnRI4nj4mkOcdZkXH%2FBaCrMRZHKHU125WStxf%2BmejHG1VnBxcNA3CW3qvyQVhpUCRTPig5K3RMEXB%2Bbd07wqJ3pBFcFYtgaawp%2BBv8dxQY%2FsY9R60HlSTfimtOitBFZ%2BF7WuWDK2AO1g8Yb%2FtyQueofhgB13Vf6HW0IckHHlVZ1zHWeuS4Bgu81%2B98sGRLwkYGU6%2Fy9NQxCGpEXS0mia5rNhBtVmeJptWSqFxxTwXpbD%2FXgURWxgbkRYzy%2F6fQVQ1XnWV2vA9rrBmRFvFoaxCvo1p901FMR%2By828FoqBF5SRAUy3V8%2FzYBoXY21QHPHGbcWj5IcKa%2BG7nacHsViamvB5rBR7%2BdlliIOGXICZfe3kKFS6EN6HWN6mUHOysO2FYlKILC1EmY%2BThvKS3kI6hxpthTHZLXX7NmK8OcY6N%2B9QRqqugPXCgsoYTmAsm%2FIDzfxgVV21TiKnZKDuJFPbiwUaiAGGLM%2B369M%2F3HDGtaAMnJI9rQKAZ6GLRaXqtFdjv2q1RuN3Tcx9lpyCKb8b5x%2FFyebJxMMHGz74GOqUBPGqZjeaT0HSudHisfJHZiO5FThWxJzgKXZr11NpX3HEcZRMq0M7b7niJZPEDtmDdwhhiglnaYjihdlVjertRofUDsE0Q3MQOpyRo4jg1vJqR%2F71K9lbUsmZ10iOh4iKFK1GGrlRT99pU8AuCfO382l9MM2RvDLbc7zmG2%2BgNRkUIySAPyJu%2FV2IZnuqIkyQzvsNrphe5JahcNpDTf430m6bZaaAR&X-Amz-Signature=95d5ab383ffbc4f4bcd3b427892af535fcceb8c1a6d6be77c7187d1dc52f6238&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3KKMZX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSDLZZmTBtdFJ3H7hh5BjRU3n6oKYyVJEqsb2TEgmvBgIgIW5SXuQrCBs4c1VPmlIZCfTRGqQJ%2BpzRjH%2FHAF2irJgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtE0iCHZDXmroBThCrcAxFxfVCXkTyBnSo8g2Y8fHoyRBcZYq6MIqvIrzC8KvxNoDQ4R15MUtrpy0b%2BAVV3Ycry2%2FahAnmETw%2BeG1SCS%2F88qrNdP7KYnRI4nj4mkOcdZkXH%2FBaCrMRZHKHU125WStxf%2BmejHG1VnBxcNA3CW3qvyQVhpUCRTPig5K3RMEXB%2Bbd07wqJ3pBFcFYtgaawp%2BBv8dxQY%2FsY9R60HlSTfimtOitBFZ%2BF7WuWDK2AO1g8Yb%2FtyQueofhgB13Vf6HW0IckHHlVZ1zHWeuS4Bgu81%2B98sGRLwkYGU6%2Fy9NQxCGpEXS0mia5rNhBtVmeJptWSqFxxTwXpbD%2FXgURWxgbkRYzy%2F6fQVQ1XnWV2vA9rrBmRFvFoaxCvo1p901FMR%2By828FoqBF5SRAUy3V8%2FzYBoXY21QHPHGbcWj5IcKa%2BG7nacHsViamvB5rBR7%2BdlliIOGXICZfe3kKFS6EN6HWN6mUHOysO2FYlKILC1EmY%2BThvKS3kI6hxpthTHZLXX7NmK8OcY6N%2B9QRqqugPXCgsoYTmAsm%2FIDzfxgVV21TiKnZKDuJFPbiwUaiAGGLM%2B369M%2F3HDGtaAMnJI9rQKAZ6GLRaXqtFdjv2q1RuN3Tcx9lpyCKb8b5x%2FFyebJxMMHGz74GOqUBPGqZjeaT0HSudHisfJHZiO5FThWxJzgKXZr11NpX3HEcZRMq0M7b7niJZPEDtmDdwhhiglnaYjihdlVjertRofUDsE0Q3MQOpyRo4jg1vJqR%2F71K9lbUsmZ10iOh4iKFK1GGrlRT99pU8AuCfO382l9MM2RvDLbc7zmG2%2BgNRkUIySAPyJu%2FV2IZnuqIkyQzvsNrphe5JahcNpDTf430m6bZaaAR&X-Amz-Signature=13081c1d22ac1d78efa4295835e753b2b7f5cbc483176f99906f4d84bf9293ac&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3KKMZX%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T090843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSDLZZmTBtdFJ3H7hh5BjRU3n6oKYyVJEqsb2TEgmvBgIgIW5SXuQrCBs4c1VPmlIZCfTRGqQJ%2BpzRjH%2FHAF2irJgqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtE0iCHZDXmroBThCrcAxFxfVCXkTyBnSo8g2Y8fHoyRBcZYq6MIqvIrzC8KvxNoDQ4R15MUtrpy0b%2BAVV3Ycry2%2FahAnmETw%2BeG1SCS%2F88qrNdP7KYnRI4nj4mkOcdZkXH%2FBaCrMRZHKHU125WStxf%2BmejHG1VnBxcNA3CW3qvyQVhpUCRTPig5K3RMEXB%2Bbd07wqJ3pBFcFYtgaawp%2BBv8dxQY%2FsY9R60HlSTfimtOitBFZ%2BF7WuWDK2AO1g8Yb%2FtyQueofhgB13Vf6HW0IckHHlVZ1zHWeuS4Bgu81%2B98sGRLwkYGU6%2Fy9NQxCGpEXS0mia5rNhBtVmeJptWSqFxxTwXpbD%2FXgURWxgbkRYzy%2F6fQVQ1XnWV2vA9rrBmRFvFoaxCvo1p901FMR%2By828FoqBF5SRAUy3V8%2FzYBoXY21QHPHGbcWj5IcKa%2BG7nacHsViamvB5rBR7%2BdlliIOGXICZfe3kKFS6EN6HWN6mUHOysO2FYlKILC1EmY%2BThvKS3kI6hxpthTHZLXX7NmK8OcY6N%2B9QRqqugPXCgsoYTmAsm%2FIDzfxgVV21TiKnZKDuJFPbiwUaiAGGLM%2B369M%2F3HDGtaAMnJI9rQKAZ6GLRaXqtFdjv2q1RuN3Tcx9lpyCKb8b5x%2FFyebJxMMHGz74GOqUBPGqZjeaT0HSudHisfJHZiO5FThWxJzgKXZr11NpX3HEcZRMq0M7b7niJZPEDtmDdwhhiglnaYjihdlVjertRofUDsE0Q3MQOpyRo4jg1vJqR%2F71K9lbUsmZ10iOh4iKFK1GGrlRT99pU8AuCfO382l9MM2RvDLbc7zmG2%2BgNRkUIySAPyJu%2FV2IZnuqIkyQzvsNrphe5JahcNpDTf430m6bZaaAR&X-Amz-Signature=b1254b97e688c80767cdd03b731da0317e8c0ce9303673737c6b582a6a22135a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

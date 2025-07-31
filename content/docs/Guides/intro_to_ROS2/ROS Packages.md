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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTO3ZUQZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg%2FaMoGCrkKs6sI74XqBiKWDRN2FC4rxHNy%2F%2BufhNbcAiEAqmoxIyuZnhtvf3SmqnCHvJyJ%2BcCd%2F6PAPpKaB1%2BZE1wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiB80XFcN8UI696qyrcA3D%2BojdEo20aIJo3ZpYeb3VXebkvx8EalS37Zn%2Fw7te2p4IDRZBke8ZmfmTg6yx4UtqQHx415hOiqI%2FY6K9noO4KjTzuIzyKXLGrzEl%2FMNIVmW0Ds7ZOfvc0l5OaabYZiMinJc52b1CBJFi%2BTIBh1UL7q9OwI%2Bs9HqHee%2B6Sq4necETk8j73Yd1JVisBhOPo67x7H3V8ws8FbJ2DZTvaXUyfKmG0ipAoDhYFEnK5XBjPIazE6LTd1gJ6OM0QV7k5%2FhJYUK%2FuN5zada02GyXm4NeAKL2zxoCv5GcFqXc6wypGAPIG5lWoh1c5x8YUbdp1LqyP6s%2Fg7THcZS9BpGSkBrFCxh6%2FJPG2U6xRTN9thX%2FJ%2FLOCr8Ye5tcO6xrFUpQNUVMog%2F5B8R7jsQ%2FuY56RdmbBp4deCIKnbxBR16Xrdfx0vyfPuXcjgZVUlh6SuXFPNl%2BTBG0OnUFFUp%2F%2BngP2X6kIawp5ndItSbB91mm%2B00cV2zpihRfQlQkw5TOqD6WBX6ritt3bYvHvl43hn1o3vHbD%2FdkBkjQTAvQadcg6cg8McCjvPfVTNbdM41%2BwLHThgkZExa5P8vC%2FNSIGlWqvVZ%2Fs%2BKR09ep46MSkYTuzb7z4uxanzFsoWcMWyHA9MIbNr8QGOqUBdWLCFq0MhcIRJwAYKACm4yBAD0I6aOrwctzhUDDlPZFJ7uCLk58ZeproBBweG2JNEJ3fwoj%2BnEl1jQkw7g9%2BzF45jKevp%2FlJsiumjGGqyV0usREXK3W9eCMbOEjTqx2LnkCJyMKmJYCspm6DVsWkdZiUTXQeeCZf0rpCpbvuucB4Hc1VBWItDG%2BU4xg0ltg8vPps7ctKkErIQvtvgAwmQPfHoGnq&X-Amz-Signature=ba31a8eb14a992dd8f5c914d182b3460d7c0f7ba9ceb1364d75bb3c2687ddd84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTO3ZUQZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg%2FaMoGCrkKs6sI74XqBiKWDRN2FC4rxHNy%2F%2BufhNbcAiEAqmoxIyuZnhtvf3SmqnCHvJyJ%2BcCd%2F6PAPpKaB1%2BZE1wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiB80XFcN8UI696qyrcA3D%2BojdEo20aIJo3ZpYeb3VXebkvx8EalS37Zn%2Fw7te2p4IDRZBke8ZmfmTg6yx4UtqQHx415hOiqI%2FY6K9noO4KjTzuIzyKXLGrzEl%2FMNIVmW0Ds7ZOfvc0l5OaabYZiMinJc52b1CBJFi%2BTIBh1UL7q9OwI%2Bs9HqHee%2B6Sq4necETk8j73Yd1JVisBhOPo67x7H3V8ws8FbJ2DZTvaXUyfKmG0ipAoDhYFEnK5XBjPIazE6LTd1gJ6OM0QV7k5%2FhJYUK%2FuN5zada02GyXm4NeAKL2zxoCv5GcFqXc6wypGAPIG5lWoh1c5x8YUbdp1LqyP6s%2Fg7THcZS9BpGSkBrFCxh6%2FJPG2U6xRTN9thX%2FJ%2FLOCr8Ye5tcO6xrFUpQNUVMog%2F5B8R7jsQ%2FuY56RdmbBp4deCIKnbxBR16Xrdfx0vyfPuXcjgZVUlh6SuXFPNl%2BTBG0OnUFFUp%2F%2BngP2X6kIawp5ndItSbB91mm%2B00cV2zpihRfQlQkw5TOqD6WBX6ritt3bYvHvl43hn1o3vHbD%2FdkBkjQTAvQadcg6cg8McCjvPfVTNbdM41%2BwLHThgkZExa5P8vC%2FNSIGlWqvVZ%2Fs%2BKR09ep46MSkYTuzb7z4uxanzFsoWcMWyHA9MIbNr8QGOqUBdWLCFq0MhcIRJwAYKACm4yBAD0I6aOrwctzhUDDlPZFJ7uCLk58ZeproBBweG2JNEJ3fwoj%2BnEl1jQkw7g9%2BzF45jKevp%2FlJsiumjGGqyV0usREXK3W9eCMbOEjTqx2LnkCJyMKmJYCspm6DVsWkdZiUTXQeeCZf0rpCpbvuucB4Hc1VBWItDG%2BU4xg0ltg8vPps7ctKkErIQvtvgAwmQPfHoGnq&X-Amz-Signature=587076f6bfac407184742f84fa7d7424ef2642fb46c701121ac3a485dff8945f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTO3ZUQZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg%2FaMoGCrkKs6sI74XqBiKWDRN2FC4rxHNy%2F%2BufhNbcAiEAqmoxIyuZnhtvf3SmqnCHvJyJ%2BcCd%2F6PAPpKaB1%2BZE1wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiB80XFcN8UI696qyrcA3D%2BojdEo20aIJo3ZpYeb3VXebkvx8EalS37Zn%2Fw7te2p4IDRZBke8ZmfmTg6yx4UtqQHx415hOiqI%2FY6K9noO4KjTzuIzyKXLGrzEl%2FMNIVmW0Ds7ZOfvc0l5OaabYZiMinJc52b1CBJFi%2BTIBh1UL7q9OwI%2Bs9HqHee%2B6Sq4necETk8j73Yd1JVisBhOPo67x7H3V8ws8FbJ2DZTvaXUyfKmG0ipAoDhYFEnK5XBjPIazE6LTd1gJ6OM0QV7k5%2FhJYUK%2FuN5zada02GyXm4NeAKL2zxoCv5GcFqXc6wypGAPIG5lWoh1c5x8YUbdp1LqyP6s%2Fg7THcZS9BpGSkBrFCxh6%2FJPG2U6xRTN9thX%2FJ%2FLOCr8Ye5tcO6xrFUpQNUVMog%2F5B8R7jsQ%2FuY56RdmbBp4deCIKnbxBR16Xrdfx0vyfPuXcjgZVUlh6SuXFPNl%2BTBG0OnUFFUp%2F%2BngP2X6kIawp5ndItSbB91mm%2B00cV2zpihRfQlQkw5TOqD6WBX6ritt3bYvHvl43hn1o3vHbD%2FdkBkjQTAvQadcg6cg8McCjvPfVTNbdM41%2BwLHThgkZExa5P8vC%2FNSIGlWqvVZ%2Fs%2BKR09ep46MSkYTuzb7z4uxanzFsoWcMWyHA9MIbNr8QGOqUBdWLCFq0MhcIRJwAYKACm4yBAD0I6aOrwctzhUDDlPZFJ7uCLk58ZeproBBweG2JNEJ3fwoj%2BnEl1jQkw7g9%2BzF45jKevp%2FlJsiumjGGqyV0usREXK3W9eCMbOEjTqx2LnkCJyMKmJYCspm6DVsWkdZiUTXQeeCZf0rpCpbvuucB4Hc1VBWItDG%2BU4xg0ltg8vPps7ctKkErIQvtvgAwmQPfHoGnq&X-Amz-Signature=eca84ced362d45adea4ad208b25ecdb5e2d11a784b786b28d904e3d64c3e018f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTO3ZUQZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg%2FaMoGCrkKs6sI74XqBiKWDRN2FC4rxHNy%2F%2BufhNbcAiEAqmoxIyuZnhtvf3SmqnCHvJyJ%2BcCd%2F6PAPpKaB1%2BZE1wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiB80XFcN8UI696qyrcA3D%2BojdEo20aIJo3ZpYeb3VXebkvx8EalS37Zn%2Fw7te2p4IDRZBke8ZmfmTg6yx4UtqQHx415hOiqI%2FY6K9noO4KjTzuIzyKXLGrzEl%2FMNIVmW0Ds7ZOfvc0l5OaabYZiMinJc52b1CBJFi%2BTIBh1UL7q9OwI%2Bs9HqHee%2B6Sq4necETk8j73Yd1JVisBhOPo67x7H3V8ws8FbJ2DZTvaXUyfKmG0ipAoDhYFEnK5XBjPIazE6LTd1gJ6OM0QV7k5%2FhJYUK%2FuN5zada02GyXm4NeAKL2zxoCv5GcFqXc6wypGAPIG5lWoh1c5x8YUbdp1LqyP6s%2Fg7THcZS9BpGSkBrFCxh6%2FJPG2U6xRTN9thX%2FJ%2FLOCr8Ye5tcO6xrFUpQNUVMog%2F5B8R7jsQ%2FuY56RdmbBp4deCIKnbxBR16Xrdfx0vyfPuXcjgZVUlh6SuXFPNl%2BTBG0OnUFFUp%2F%2BngP2X6kIawp5ndItSbB91mm%2B00cV2zpihRfQlQkw5TOqD6WBX6ritt3bYvHvl43hn1o3vHbD%2FdkBkjQTAvQadcg6cg8McCjvPfVTNbdM41%2BwLHThgkZExa5P8vC%2FNSIGlWqvVZ%2Fs%2BKR09ep46MSkYTuzb7z4uxanzFsoWcMWyHA9MIbNr8QGOqUBdWLCFq0MhcIRJwAYKACm4yBAD0I6aOrwctzhUDDlPZFJ7uCLk58ZeproBBweG2JNEJ3fwoj%2BnEl1jQkw7g9%2BzF45jKevp%2FlJsiumjGGqyV0usREXK3W9eCMbOEjTqx2LnkCJyMKmJYCspm6DVsWkdZiUTXQeeCZf0rpCpbvuucB4Hc1VBWItDG%2BU4xg0ltg8vPps7ctKkErIQvtvgAwmQPfHoGnq&X-Amz-Signature=15ed90defea071c3c26aa0ee71bc16efa62385ba27d4312451e1cfe74147cbea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTO3ZUQZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg%2FaMoGCrkKs6sI74XqBiKWDRN2FC4rxHNy%2F%2BufhNbcAiEAqmoxIyuZnhtvf3SmqnCHvJyJ%2BcCd%2F6PAPpKaB1%2BZE1wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiB80XFcN8UI696qyrcA3D%2BojdEo20aIJo3ZpYeb3VXebkvx8EalS37Zn%2Fw7te2p4IDRZBke8ZmfmTg6yx4UtqQHx415hOiqI%2FY6K9noO4KjTzuIzyKXLGrzEl%2FMNIVmW0Ds7ZOfvc0l5OaabYZiMinJc52b1CBJFi%2BTIBh1UL7q9OwI%2Bs9HqHee%2B6Sq4necETk8j73Yd1JVisBhOPo67x7H3V8ws8FbJ2DZTvaXUyfKmG0ipAoDhYFEnK5XBjPIazE6LTd1gJ6OM0QV7k5%2FhJYUK%2FuN5zada02GyXm4NeAKL2zxoCv5GcFqXc6wypGAPIG5lWoh1c5x8YUbdp1LqyP6s%2Fg7THcZS9BpGSkBrFCxh6%2FJPG2U6xRTN9thX%2FJ%2FLOCr8Ye5tcO6xrFUpQNUVMog%2F5B8R7jsQ%2FuY56RdmbBp4deCIKnbxBR16Xrdfx0vyfPuXcjgZVUlh6SuXFPNl%2BTBG0OnUFFUp%2F%2BngP2X6kIawp5ndItSbB91mm%2B00cV2zpihRfQlQkw5TOqD6WBX6ritt3bYvHvl43hn1o3vHbD%2FdkBkjQTAvQadcg6cg8McCjvPfVTNbdM41%2BwLHThgkZExa5P8vC%2FNSIGlWqvVZ%2Fs%2BKR09ep46MSkYTuzb7z4uxanzFsoWcMWyHA9MIbNr8QGOqUBdWLCFq0MhcIRJwAYKACm4yBAD0I6aOrwctzhUDDlPZFJ7uCLk58ZeproBBweG2JNEJ3fwoj%2BnEl1jQkw7g9%2BzF45jKevp%2FlJsiumjGGqyV0usREXK3W9eCMbOEjTqx2LnkCJyMKmJYCspm6DVsWkdZiUTXQeeCZf0rpCpbvuucB4Hc1VBWItDG%2BU4xg0ltg8vPps7ctKkErIQvtvgAwmQPfHoGnq&X-Amz-Signature=193aaac75517ab4a281df97944f5f98d3e75fc36cb0ad32d1c1d0d53ee7f976d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTO3ZUQZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg%2FaMoGCrkKs6sI74XqBiKWDRN2FC4rxHNy%2F%2BufhNbcAiEAqmoxIyuZnhtvf3SmqnCHvJyJ%2BcCd%2F6PAPpKaB1%2BZE1wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiB80XFcN8UI696qyrcA3D%2BojdEo20aIJo3ZpYeb3VXebkvx8EalS37Zn%2Fw7te2p4IDRZBke8ZmfmTg6yx4UtqQHx415hOiqI%2FY6K9noO4KjTzuIzyKXLGrzEl%2FMNIVmW0Ds7ZOfvc0l5OaabYZiMinJc52b1CBJFi%2BTIBh1UL7q9OwI%2Bs9HqHee%2B6Sq4necETk8j73Yd1JVisBhOPo67x7H3V8ws8FbJ2DZTvaXUyfKmG0ipAoDhYFEnK5XBjPIazE6LTd1gJ6OM0QV7k5%2FhJYUK%2FuN5zada02GyXm4NeAKL2zxoCv5GcFqXc6wypGAPIG5lWoh1c5x8YUbdp1LqyP6s%2Fg7THcZS9BpGSkBrFCxh6%2FJPG2U6xRTN9thX%2FJ%2FLOCr8Ye5tcO6xrFUpQNUVMog%2F5B8R7jsQ%2FuY56RdmbBp4deCIKnbxBR16Xrdfx0vyfPuXcjgZVUlh6SuXFPNl%2BTBG0OnUFFUp%2F%2BngP2X6kIawp5ndItSbB91mm%2B00cV2zpihRfQlQkw5TOqD6WBX6ritt3bYvHvl43hn1o3vHbD%2FdkBkjQTAvQadcg6cg8McCjvPfVTNbdM41%2BwLHThgkZExa5P8vC%2FNSIGlWqvVZ%2Fs%2BKR09ep46MSkYTuzb7z4uxanzFsoWcMWyHA9MIbNr8QGOqUBdWLCFq0MhcIRJwAYKACm4yBAD0I6aOrwctzhUDDlPZFJ7uCLk58ZeproBBweG2JNEJ3fwoj%2BnEl1jQkw7g9%2BzF45jKevp%2FlJsiumjGGqyV0usREXK3W9eCMbOEjTqx2LnkCJyMKmJYCspm6DVsWkdZiUTXQeeCZf0rpCpbvuucB4Hc1VBWItDG%2BU4xg0ltg8vPps7ctKkErIQvtvgAwmQPfHoGnq&X-Amz-Signature=bfd2889e753f5acc550014500c394ed475e24ffb88d4ae6a38b9b5db0db39d04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTO3ZUQZ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T220919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg%2FaMoGCrkKs6sI74XqBiKWDRN2FC4rxHNy%2F%2BufhNbcAiEAqmoxIyuZnhtvf3SmqnCHvJyJ%2BcCd%2F6PAPpKaB1%2BZE1wqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiB80XFcN8UI696qyrcA3D%2BojdEo20aIJo3ZpYeb3VXebkvx8EalS37Zn%2Fw7te2p4IDRZBke8ZmfmTg6yx4UtqQHx415hOiqI%2FY6K9noO4KjTzuIzyKXLGrzEl%2FMNIVmW0Ds7ZOfvc0l5OaabYZiMinJc52b1CBJFi%2BTIBh1UL7q9OwI%2Bs9HqHee%2B6Sq4necETk8j73Yd1JVisBhOPo67x7H3V8ws8FbJ2DZTvaXUyfKmG0ipAoDhYFEnK5XBjPIazE6LTd1gJ6OM0QV7k5%2FhJYUK%2FuN5zada02GyXm4NeAKL2zxoCv5GcFqXc6wypGAPIG5lWoh1c5x8YUbdp1LqyP6s%2Fg7THcZS9BpGSkBrFCxh6%2FJPG2U6xRTN9thX%2FJ%2FLOCr8Ye5tcO6xrFUpQNUVMog%2F5B8R7jsQ%2FuY56RdmbBp4deCIKnbxBR16Xrdfx0vyfPuXcjgZVUlh6SuXFPNl%2BTBG0OnUFFUp%2F%2BngP2X6kIawp5ndItSbB91mm%2B00cV2zpihRfQlQkw5TOqD6WBX6ritt3bYvHvl43hn1o3vHbD%2FdkBkjQTAvQadcg6cg8McCjvPfVTNbdM41%2BwLHThgkZExa5P8vC%2FNSIGlWqvVZ%2Fs%2BKR09ep46MSkYTuzb7z4uxanzFsoWcMWyHA9MIbNr8QGOqUBdWLCFq0MhcIRJwAYKACm4yBAD0I6aOrwctzhUDDlPZFJ7uCLk58ZeproBBweG2JNEJ3fwoj%2BnEl1jQkw7g9%2BzF45jKevp%2FlJsiumjGGqyV0usREXK3W9eCMbOEjTqx2LnkCJyMKmJYCspm6DVsWkdZiUTXQeeCZf0rpCpbvuucB4Hc1VBWItDG%2BU4xg0ltg8vPps7ctKkErIQvtvgAwmQPfHoGnq&X-Amz-Signature=0414d7c502ca858f84237c8d68af83572ded0fb04f00c2808e83e4b318c6b6bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

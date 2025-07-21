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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSKYWSPR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCffIoQO43oou2NWLjZAcvptU4ZnbaltJZKvUBiE1qz%2FgIgIT0tM%2BedgbVKpL0U9zp9JNVMjHfExxaiW5eGuCLDH7EqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuz9DGBS5dIoxtftyrcA9ipIe449MJWPXhVrr41TCgEdp3NJ5utFBVd9a9Ppo5%2F4QnxNtXV93uRxQ7jOOpH8cRR8cKkOlyU%2BZFcITnIR9rjIcydPD3RS1I78uq%2B3LJb%2Bsqcf7IY2CIbZJmbIL0WqzneCuf8mkVVbBQCqsZLLQ9QuC85Pbx%2Bl32MG0upZaN2VUf3xT6Rp83GWmrwJqo5C5ZoYqVOBQix5mVdX2VTATkbQXSdb5%2B9p3zvYsmyzVIHFJaadIJh9vTFAX34DE7AMR4kJJld88Ob6k3tewEhHrsXv5uHzFTUyjAyaZDlIBdp3%2B%2BruVYqJQfssNYayUmeyNx6AhH1AVyiDWIv4DLNYGbebMrBOTqNFvubSaAX8NQbMUIXvZK9eSooHUtYnDOxl8IfLiN4%2FP1KySBAcYXCJ6WN08Lg3ybp7dXWPm8JFzLB5F7EkUoDtBTFHs6uMCC%2BCyF49D5P0CYE0Ur0PqrbTt9Pxwduvd79tvLPxmA72hoRShTlvN5g0Di53eGt8jLeQY6oHczodilsrXsLmesUTH7tk9Aw%2FdOjrZ7tyqYZIqfN3fjBfH54NhC8Oo%2BmuStkTLyhf%2BPiblB9cxqx5rxvjUFKleHl4cibPeaJwvyJmeDn%2B2KazI4wYCAITYyhMNyT98MGOqUBkS8Rgpw5KNh87eqc%2FQ96AqyQiBcqGGPz820Fsbm3NKbuz9AdeTK%2FZnzGKliXDLO4kBXoV8LHUH862XDy4p50vBrGgVx6xtDREnHKw8hN0%2FMHWCHSYBT16sRKBZ2L8686b4yef4PuFk2ZkXwEPgipVN74qxFLNdGiKmbgDZiIfb97TrLY70xbxB9NIG1isTvkCOt34GwZbG%2FPFB%2BS9OGfaTB6BcPU&X-Amz-Signature=bf3f65def2825f5f23fa7710f3d92db0c52f13ea492a35b2f30a17c8776055a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSKYWSPR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCffIoQO43oou2NWLjZAcvptU4ZnbaltJZKvUBiE1qz%2FgIgIT0tM%2BedgbVKpL0U9zp9JNVMjHfExxaiW5eGuCLDH7EqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuz9DGBS5dIoxtftyrcA9ipIe449MJWPXhVrr41TCgEdp3NJ5utFBVd9a9Ppo5%2F4QnxNtXV93uRxQ7jOOpH8cRR8cKkOlyU%2BZFcITnIR9rjIcydPD3RS1I78uq%2B3LJb%2Bsqcf7IY2CIbZJmbIL0WqzneCuf8mkVVbBQCqsZLLQ9QuC85Pbx%2Bl32MG0upZaN2VUf3xT6Rp83GWmrwJqo5C5ZoYqVOBQix5mVdX2VTATkbQXSdb5%2B9p3zvYsmyzVIHFJaadIJh9vTFAX34DE7AMR4kJJld88Ob6k3tewEhHrsXv5uHzFTUyjAyaZDlIBdp3%2B%2BruVYqJQfssNYayUmeyNx6AhH1AVyiDWIv4DLNYGbebMrBOTqNFvubSaAX8NQbMUIXvZK9eSooHUtYnDOxl8IfLiN4%2FP1KySBAcYXCJ6WN08Lg3ybp7dXWPm8JFzLB5F7EkUoDtBTFHs6uMCC%2BCyF49D5P0CYE0Ur0PqrbTt9Pxwduvd79tvLPxmA72hoRShTlvN5g0Di53eGt8jLeQY6oHczodilsrXsLmesUTH7tk9Aw%2FdOjrZ7tyqYZIqfN3fjBfH54NhC8Oo%2BmuStkTLyhf%2BPiblB9cxqx5rxvjUFKleHl4cibPeaJwvyJmeDn%2B2KazI4wYCAITYyhMNyT98MGOqUBkS8Rgpw5KNh87eqc%2FQ96AqyQiBcqGGPz820Fsbm3NKbuz9AdeTK%2FZnzGKliXDLO4kBXoV8LHUH862XDy4p50vBrGgVx6xtDREnHKw8hN0%2FMHWCHSYBT16sRKBZ2L8686b4yef4PuFk2ZkXwEPgipVN74qxFLNdGiKmbgDZiIfb97TrLY70xbxB9NIG1isTvkCOt34GwZbG%2FPFB%2BS9OGfaTB6BcPU&X-Amz-Signature=9351fb4ad9e7ee72e06653ca00f5110147c93765909cf9a01ae04a889c1505b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSKYWSPR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCffIoQO43oou2NWLjZAcvptU4ZnbaltJZKvUBiE1qz%2FgIgIT0tM%2BedgbVKpL0U9zp9JNVMjHfExxaiW5eGuCLDH7EqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuz9DGBS5dIoxtftyrcA9ipIe449MJWPXhVrr41TCgEdp3NJ5utFBVd9a9Ppo5%2F4QnxNtXV93uRxQ7jOOpH8cRR8cKkOlyU%2BZFcITnIR9rjIcydPD3RS1I78uq%2B3LJb%2Bsqcf7IY2CIbZJmbIL0WqzneCuf8mkVVbBQCqsZLLQ9QuC85Pbx%2Bl32MG0upZaN2VUf3xT6Rp83GWmrwJqo5C5ZoYqVOBQix5mVdX2VTATkbQXSdb5%2B9p3zvYsmyzVIHFJaadIJh9vTFAX34DE7AMR4kJJld88Ob6k3tewEhHrsXv5uHzFTUyjAyaZDlIBdp3%2B%2BruVYqJQfssNYayUmeyNx6AhH1AVyiDWIv4DLNYGbebMrBOTqNFvubSaAX8NQbMUIXvZK9eSooHUtYnDOxl8IfLiN4%2FP1KySBAcYXCJ6WN08Lg3ybp7dXWPm8JFzLB5F7EkUoDtBTFHs6uMCC%2BCyF49D5P0CYE0Ur0PqrbTt9Pxwduvd79tvLPxmA72hoRShTlvN5g0Di53eGt8jLeQY6oHczodilsrXsLmesUTH7tk9Aw%2FdOjrZ7tyqYZIqfN3fjBfH54NhC8Oo%2BmuStkTLyhf%2BPiblB9cxqx5rxvjUFKleHl4cibPeaJwvyJmeDn%2B2KazI4wYCAITYyhMNyT98MGOqUBkS8Rgpw5KNh87eqc%2FQ96AqyQiBcqGGPz820Fsbm3NKbuz9AdeTK%2FZnzGKliXDLO4kBXoV8LHUH862XDy4p50vBrGgVx6xtDREnHKw8hN0%2FMHWCHSYBT16sRKBZ2L8686b4yef4PuFk2ZkXwEPgipVN74qxFLNdGiKmbgDZiIfb97TrLY70xbxB9NIG1isTvkCOt34GwZbG%2FPFB%2BS9OGfaTB6BcPU&X-Amz-Signature=5f8ba235d52850da6c30b04fa5f254c276070366f23ac3bb0811b548acdc0730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSKYWSPR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCffIoQO43oou2NWLjZAcvptU4ZnbaltJZKvUBiE1qz%2FgIgIT0tM%2BedgbVKpL0U9zp9JNVMjHfExxaiW5eGuCLDH7EqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuz9DGBS5dIoxtftyrcA9ipIe449MJWPXhVrr41TCgEdp3NJ5utFBVd9a9Ppo5%2F4QnxNtXV93uRxQ7jOOpH8cRR8cKkOlyU%2BZFcITnIR9rjIcydPD3RS1I78uq%2B3LJb%2Bsqcf7IY2CIbZJmbIL0WqzneCuf8mkVVbBQCqsZLLQ9QuC85Pbx%2Bl32MG0upZaN2VUf3xT6Rp83GWmrwJqo5C5ZoYqVOBQix5mVdX2VTATkbQXSdb5%2B9p3zvYsmyzVIHFJaadIJh9vTFAX34DE7AMR4kJJld88Ob6k3tewEhHrsXv5uHzFTUyjAyaZDlIBdp3%2B%2BruVYqJQfssNYayUmeyNx6AhH1AVyiDWIv4DLNYGbebMrBOTqNFvubSaAX8NQbMUIXvZK9eSooHUtYnDOxl8IfLiN4%2FP1KySBAcYXCJ6WN08Lg3ybp7dXWPm8JFzLB5F7EkUoDtBTFHs6uMCC%2BCyF49D5P0CYE0Ur0PqrbTt9Pxwduvd79tvLPxmA72hoRShTlvN5g0Di53eGt8jLeQY6oHczodilsrXsLmesUTH7tk9Aw%2FdOjrZ7tyqYZIqfN3fjBfH54NhC8Oo%2BmuStkTLyhf%2BPiblB9cxqx5rxvjUFKleHl4cibPeaJwvyJmeDn%2B2KazI4wYCAITYyhMNyT98MGOqUBkS8Rgpw5KNh87eqc%2FQ96AqyQiBcqGGPz820Fsbm3NKbuz9AdeTK%2FZnzGKliXDLO4kBXoV8LHUH862XDy4p50vBrGgVx6xtDREnHKw8hN0%2FMHWCHSYBT16sRKBZ2L8686b4yef4PuFk2ZkXwEPgipVN74qxFLNdGiKmbgDZiIfb97TrLY70xbxB9NIG1isTvkCOt34GwZbG%2FPFB%2BS9OGfaTB6BcPU&X-Amz-Signature=094381a911fa2a83705f1d1c631bf24ccd4a36ae60821f13b9ec0415c74b1ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSKYWSPR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCffIoQO43oou2NWLjZAcvptU4ZnbaltJZKvUBiE1qz%2FgIgIT0tM%2BedgbVKpL0U9zp9JNVMjHfExxaiW5eGuCLDH7EqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuz9DGBS5dIoxtftyrcA9ipIe449MJWPXhVrr41TCgEdp3NJ5utFBVd9a9Ppo5%2F4QnxNtXV93uRxQ7jOOpH8cRR8cKkOlyU%2BZFcITnIR9rjIcydPD3RS1I78uq%2B3LJb%2Bsqcf7IY2CIbZJmbIL0WqzneCuf8mkVVbBQCqsZLLQ9QuC85Pbx%2Bl32MG0upZaN2VUf3xT6Rp83GWmrwJqo5C5ZoYqVOBQix5mVdX2VTATkbQXSdb5%2B9p3zvYsmyzVIHFJaadIJh9vTFAX34DE7AMR4kJJld88Ob6k3tewEhHrsXv5uHzFTUyjAyaZDlIBdp3%2B%2BruVYqJQfssNYayUmeyNx6AhH1AVyiDWIv4DLNYGbebMrBOTqNFvubSaAX8NQbMUIXvZK9eSooHUtYnDOxl8IfLiN4%2FP1KySBAcYXCJ6WN08Lg3ybp7dXWPm8JFzLB5F7EkUoDtBTFHs6uMCC%2BCyF49D5P0CYE0Ur0PqrbTt9Pxwduvd79tvLPxmA72hoRShTlvN5g0Di53eGt8jLeQY6oHczodilsrXsLmesUTH7tk9Aw%2FdOjrZ7tyqYZIqfN3fjBfH54NhC8Oo%2BmuStkTLyhf%2BPiblB9cxqx5rxvjUFKleHl4cibPeaJwvyJmeDn%2B2KazI4wYCAITYyhMNyT98MGOqUBkS8Rgpw5KNh87eqc%2FQ96AqyQiBcqGGPz820Fsbm3NKbuz9AdeTK%2FZnzGKliXDLO4kBXoV8LHUH862XDy4p50vBrGgVx6xtDREnHKw8hN0%2FMHWCHSYBT16sRKBZ2L8686b4yef4PuFk2ZkXwEPgipVN74qxFLNdGiKmbgDZiIfb97TrLY70xbxB9NIG1isTvkCOt34GwZbG%2FPFB%2BS9OGfaTB6BcPU&X-Amz-Signature=93d54edc8bdc2d7b2e8f3495a9125e7a7b72ee3b28a0aa009bc669f1cfb6b056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSKYWSPR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCffIoQO43oou2NWLjZAcvptU4ZnbaltJZKvUBiE1qz%2FgIgIT0tM%2BedgbVKpL0U9zp9JNVMjHfExxaiW5eGuCLDH7EqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuz9DGBS5dIoxtftyrcA9ipIe449MJWPXhVrr41TCgEdp3NJ5utFBVd9a9Ppo5%2F4QnxNtXV93uRxQ7jOOpH8cRR8cKkOlyU%2BZFcITnIR9rjIcydPD3RS1I78uq%2B3LJb%2Bsqcf7IY2CIbZJmbIL0WqzneCuf8mkVVbBQCqsZLLQ9QuC85Pbx%2Bl32MG0upZaN2VUf3xT6Rp83GWmrwJqo5C5ZoYqVOBQix5mVdX2VTATkbQXSdb5%2B9p3zvYsmyzVIHFJaadIJh9vTFAX34DE7AMR4kJJld88Ob6k3tewEhHrsXv5uHzFTUyjAyaZDlIBdp3%2B%2BruVYqJQfssNYayUmeyNx6AhH1AVyiDWIv4DLNYGbebMrBOTqNFvubSaAX8NQbMUIXvZK9eSooHUtYnDOxl8IfLiN4%2FP1KySBAcYXCJ6WN08Lg3ybp7dXWPm8JFzLB5F7EkUoDtBTFHs6uMCC%2BCyF49D5P0CYE0Ur0PqrbTt9Pxwduvd79tvLPxmA72hoRShTlvN5g0Di53eGt8jLeQY6oHczodilsrXsLmesUTH7tk9Aw%2FdOjrZ7tyqYZIqfN3fjBfH54NhC8Oo%2BmuStkTLyhf%2BPiblB9cxqx5rxvjUFKleHl4cibPeaJwvyJmeDn%2B2KazI4wYCAITYyhMNyT98MGOqUBkS8Rgpw5KNh87eqc%2FQ96AqyQiBcqGGPz820Fsbm3NKbuz9AdeTK%2FZnzGKliXDLO4kBXoV8LHUH862XDy4p50vBrGgVx6xtDREnHKw8hN0%2FMHWCHSYBT16sRKBZ2L8686b4yef4PuFk2ZkXwEPgipVN74qxFLNdGiKmbgDZiIfb97TrLY70xbxB9NIG1isTvkCOt34GwZbG%2FPFB%2BS9OGfaTB6BcPU&X-Amz-Signature=e255e216308743f8e2f67b001923a8b1d6f4535bbecdc3cdf70b8b71e57e7086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSKYWSPR%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCffIoQO43oou2NWLjZAcvptU4ZnbaltJZKvUBiE1qz%2FgIgIT0tM%2BedgbVKpL0U9zp9JNVMjHfExxaiW5eGuCLDH7EqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAuz9DGBS5dIoxtftyrcA9ipIe449MJWPXhVrr41TCgEdp3NJ5utFBVd9a9Ppo5%2F4QnxNtXV93uRxQ7jOOpH8cRR8cKkOlyU%2BZFcITnIR9rjIcydPD3RS1I78uq%2B3LJb%2Bsqcf7IY2CIbZJmbIL0WqzneCuf8mkVVbBQCqsZLLQ9QuC85Pbx%2Bl32MG0upZaN2VUf3xT6Rp83GWmrwJqo5C5ZoYqVOBQix5mVdX2VTATkbQXSdb5%2B9p3zvYsmyzVIHFJaadIJh9vTFAX34DE7AMR4kJJld88Ob6k3tewEhHrsXv5uHzFTUyjAyaZDlIBdp3%2B%2BruVYqJQfssNYayUmeyNx6AhH1AVyiDWIv4DLNYGbebMrBOTqNFvubSaAX8NQbMUIXvZK9eSooHUtYnDOxl8IfLiN4%2FP1KySBAcYXCJ6WN08Lg3ybp7dXWPm8JFzLB5F7EkUoDtBTFHs6uMCC%2BCyF49D5P0CYE0Ur0PqrbTt9Pxwduvd79tvLPxmA72hoRShTlvN5g0Di53eGt8jLeQY6oHczodilsrXsLmesUTH7tk9Aw%2FdOjrZ7tyqYZIqfN3fjBfH54NhC8Oo%2BmuStkTLyhf%2BPiblB9cxqx5rxvjUFKleHl4cibPeaJwvyJmeDn%2B2KazI4wYCAITYyhMNyT98MGOqUBkS8Rgpw5KNh87eqc%2FQ96AqyQiBcqGGPz820Fsbm3NKbuz9AdeTK%2FZnzGKliXDLO4kBXoV8LHUH862XDy4p50vBrGgVx6xtDREnHKw8hN0%2FMHWCHSYBT16sRKBZ2L8686b4yef4PuFk2ZkXwEPgipVN74qxFLNdGiKmbgDZiIfb97TrLY70xbxB9NIG1isTvkCOt34GwZbG%2FPFB%2BS9OGfaTB6BcPU&X-Amz-Signature=30adec59c4a9b3be47bcc02633c4d39963dde09b621bdfec8a082ad85a094d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

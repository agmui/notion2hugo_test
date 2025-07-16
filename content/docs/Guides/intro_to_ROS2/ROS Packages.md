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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJKNSDDU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCc5rTpPqTE1Nbw%2BmjQx4HyvVKHeqEBZ%2FCFLXACM5kD1QIgbwnmq5Id%2F7KSQXv%2FjEmrMrnyYaikx19h3GFXTUoaF8Yq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJNJ70z2FAB0KcknICrcA3PHwLkzC4ODwfvf2s%2FCIR%2BcZ9ikMzSaXY0LyX1hn4PavHx7ibJIqx08MoCT%2BEWi9%2B5eAjp4L4dSdv1lutHZJ5i%2FvmOx%2Byoyu%2FSyc9MnG9kfIUbZZ%2Bi0h79WngD6H6LXLfE3PU59v5pYWZDVrpaNC%2FKjHo6Uit87xjX7Bz3dvjJIJXbZIl1BaAODmNYfugClE6j0pBZMOD4oWrhLQYyYLF3p8vChagIQoHwoEf0ij24H18NVKtLb72uZGNOW7C%2BEx5qLFPm1spby81JXt3zClCZXe5O9eyCrTrliGJ38z96pEUXxENEJFNSJBtaCo%2BWS4BM9sC2NonmUC6tJxRcWG9jks%2Fsx%2BH4SZ%2FI9QZWfpzt%2Bh1aa0FKyt2xk00U6ew3%2F5u4VYXtnxGOI8BHVu3Y7s8EZE9OA923Mbq8frS5%2BodlM07MzTkFJa3sIjEngt3IUAtcdd3ZIgoWXPP%2FXafGjIgFZER6U8gUDadK7MPraFBqLsScGf%2FfHR%2BDuI3lPUX3rX8MAj2vMRydCmbuA3uK2Z7A%2FekREoMbyXNPNx6ySaDe86JaWojKQa1tB8J1AUMsNlyp0npRV1y6cHQZJnLblk%2BdXFG9sNWuZGaeQvzJpGiRN%2F4AnrmTJm4YWyAeQMPvQ28MGOqUBHIwx3TMsdqaXPGOCnMvBWCJo51H%2F2Jr2hwwWPcAgKArDN4jtC%2BOWxU0h1jxvm7DE6QPjQYZfiTs7at405ZFdHobXNqvcywYe8hY59bd9PQYXWdzX2rzvmoaJTQa7zHeryzTJgk%2FXpXU7aDbtw3z7%2FTxusbLy%2BSPFOemWtODRRxpcziI0mAVqo3FRoFRTQX0gn5Nyyc%2ByHVvB9E5fS16EAw6%2FDctN&X-Amz-Signature=fd74d896a8ebac40633a279f9ac469ebee1f29455564ba0ee7e2d6d6139711b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJKNSDDU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCc5rTpPqTE1Nbw%2BmjQx4HyvVKHeqEBZ%2FCFLXACM5kD1QIgbwnmq5Id%2F7KSQXv%2FjEmrMrnyYaikx19h3GFXTUoaF8Yq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJNJ70z2FAB0KcknICrcA3PHwLkzC4ODwfvf2s%2FCIR%2BcZ9ikMzSaXY0LyX1hn4PavHx7ibJIqx08MoCT%2BEWi9%2B5eAjp4L4dSdv1lutHZJ5i%2FvmOx%2Byoyu%2FSyc9MnG9kfIUbZZ%2Bi0h79WngD6H6LXLfE3PU59v5pYWZDVrpaNC%2FKjHo6Uit87xjX7Bz3dvjJIJXbZIl1BaAODmNYfugClE6j0pBZMOD4oWrhLQYyYLF3p8vChagIQoHwoEf0ij24H18NVKtLb72uZGNOW7C%2BEx5qLFPm1spby81JXt3zClCZXe5O9eyCrTrliGJ38z96pEUXxENEJFNSJBtaCo%2BWS4BM9sC2NonmUC6tJxRcWG9jks%2Fsx%2BH4SZ%2FI9QZWfpzt%2Bh1aa0FKyt2xk00U6ew3%2F5u4VYXtnxGOI8BHVu3Y7s8EZE9OA923Mbq8frS5%2BodlM07MzTkFJa3sIjEngt3IUAtcdd3ZIgoWXPP%2FXafGjIgFZER6U8gUDadK7MPraFBqLsScGf%2FfHR%2BDuI3lPUX3rX8MAj2vMRydCmbuA3uK2Z7A%2FekREoMbyXNPNx6ySaDe86JaWojKQa1tB8J1AUMsNlyp0npRV1y6cHQZJnLblk%2BdXFG9sNWuZGaeQvzJpGiRN%2F4AnrmTJm4YWyAeQMPvQ28MGOqUBHIwx3TMsdqaXPGOCnMvBWCJo51H%2F2Jr2hwwWPcAgKArDN4jtC%2BOWxU0h1jxvm7DE6QPjQYZfiTs7at405ZFdHobXNqvcywYe8hY59bd9PQYXWdzX2rzvmoaJTQa7zHeryzTJgk%2FXpXU7aDbtw3z7%2FTxusbLy%2BSPFOemWtODRRxpcziI0mAVqo3FRoFRTQX0gn5Nyyc%2ByHVvB9E5fS16EAw6%2FDctN&X-Amz-Signature=69ab4213e4ff1498cd6f20c2ba7600b22c3723b38cdbaad9a79a45459915ce83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJKNSDDU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCc5rTpPqTE1Nbw%2BmjQx4HyvVKHeqEBZ%2FCFLXACM5kD1QIgbwnmq5Id%2F7KSQXv%2FjEmrMrnyYaikx19h3GFXTUoaF8Yq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJNJ70z2FAB0KcknICrcA3PHwLkzC4ODwfvf2s%2FCIR%2BcZ9ikMzSaXY0LyX1hn4PavHx7ibJIqx08MoCT%2BEWi9%2B5eAjp4L4dSdv1lutHZJ5i%2FvmOx%2Byoyu%2FSyc9MnG9kfIUbZZ%2Bi0h79WngD6H6LXLfE3PU59v5pYWZDVrpaNC%2FKjHo6Uit87xjX7Bz3dvjJIJXbZIl1BaAODmNYfugClE6j0pBZMOD4oWrhLQYyYLF3p8vChagIQoHwoEf0ij24H18NVKtLb72uZGNOW7C%2BEx5qLFPm1spby81JXt3zClCZXe5O9eyCrTrliGJ38z96pEUXxENEJFNSJBtaCo%2BWS4BM9sC2NonmUC6tJxRcWG9jks%2Fsx%2BH4SZ%2FI9QZWfpzt%2Bh1aa0FKyt2xk00U6ew3%2F5u4VYXtnxGOI8BHVu3Y7s8EZE9OA923Mbq8frS5%2BodlM07MzTkFJa3sIjEngt3IUAtcdd3ZIgoWXPP%2FXafGjIgFZER6U8gUDadK7MPraFBqLsScGf%2FfHR%2BDuI3lPUX3rX8MAj2vMRydCmbuA3uK2Z7A%2FekREoMbyXNPNx6ySaDe86JaWojKQa1tB8J1AUMsNlyp0npRV1y6cHQZJnLblk%2BdXFG9sNWuZGaeQvzJpGiRN%2F4AnrmTJm4YWyAeQMPvQ28MGOqUBHIwx3TMsdqaXPGOCnMvBWCJo51H%2F2Jr2hwwWPcAgKArDN4jtC%2BOWxU0h1jxvm7DE6QPjQYZfiTs7at405ZFdHobXNqvcywYe8hY59bd9PQYXWdzX2rzvmoaJTQa7zHeryzTJgk%2FXpXU7aDbtw3z7%2FTxusbLy%2BSPFOemWtODRRxpcziI0mAVqo3FRoFRTQX0gn5Nyyc%2ByHVvB9E5fS16EAw6%2FDctN&X-Amz-Signature=d9ec72bce3350e419dbca7c8e4a531158a47f7cba889012f252595c7d0796af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJKNSDDU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCc5rTpPqTE1Nbw%2BmjQx4HyvVKHeqEBZ%2FCFLXACM5kD1QIgbwnmq5Id%2F7KSQXv%2FjEmrMrnyYaikx19h3GFXTUoaF8Yq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJNJ70z2FAB0KcknICrcA3PHwLkzC4ODwfvf2s%2FCIR%2BcZ9ikMzSaXY0LyX1hn4PavHx7ibJIqx08MoCT%2BEWi9%2B5eAjp4L4dSdv1lutHZJ5i%2FvmOx%2Byoyu%2FSyc9MnG9kfIUbZZ%2Bi0h79WngD6H6LXLfE3PU59v5pYWZDVrpaNC%2FKjHo6Uit87xjX7Bz3dvjJIJXbZIl1BaAODmNYfugClE6j0pBZMOD4oWrhLQYyYLF3p8vChagIQoHwoEf0ij24H18NVKtLb72uZGNOW7C%2BEx5qLFPm1spby81JXt3zClCZXe5O9eyCrTrliGJ38z96pEUXxENEJFNSJBtaCo%2BWS4BM9sC2NonmUC6tJxRcWG9jks%2Fsx%2BH4SZ%2FI9QZWfpzt%2Bh1aa0FKyt2xk00U6ew3%2F5u4VYXtnxGOI8BHVu3Y7s8EZE9OA923Mbq8frS5%2BodlM07MzTkFJa3sIjEngt3IUAtcdd3ZIgoWXPP%2FXafGjIgFZER6U8gUDadK7MPraFBqLsScGf%2FfHR%2BDuI3lPUX3rX8MAj2vMRydCmbuA3uK2Z7A%2FekREoMbyXNPNx6ySaDe86JaWojKQa1tB8J1AUMsNlyp0npRV1y6cHQZJnLblk%2BdXFG9sNWuZGaeQvzJpGiRN%2F4AnrmTJm4YWyAeQMPvQ28MGOqUBHIwx3TMsdqaXPGOCnMvBWCJo51H%2F2Jr2hwwWPcAgKArDN4jtC%2BOWxU0h1jxvm7DE6QPjQYZfiTs7at405ZFdHobXNqvcywYe8hY59bd9PQYXWdzX2rzvmoaJTQa7zHeryzTJgk%2FXpXU7aDbtw3z7%2FTxusbLy%2BSPFOemWtODRRxpcziI0mAVqo3FRoFRTQX0gn5Nyyc%2ByHVvB9E5fS16EAw6%2FDctN&X-Amz-Signature=3da458a175fdf42d8cbb993464a380b817baabb92ee03dc86a3bada9808d8398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJKNSDDU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCc5rTpPqTE1Nbw%2BmjQx4HyvVKHeqEBZ%2FCFLXACM5kD1QIgbwnmq5Id%2F7KSQXv%2FjEmrMrnyYaikx19h3GFXTUoaF8Yq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJNJ70z2FAB0KcknICrcA3PHwLkzC4ODwfvf2s%2FCIR%2BcZ9ikMzSaXY0LyX1hn4PavHx7ibJIqx08MoCT%2BEWi9%2B5eAjp4L4dSdv1lutHZJ5i%2FvmOx%2Byoyu%2FSyc9MnG9kfIUbZZ%2Bi0h79WngD6H6LXLfE3PU59v5pYWZDVrpaNC%2FKjHo6Uit87xjX7Bz3dvjJIJXbZIl1BaAODmNYfugClE6j0pBZMOD4oWrhLQYyYLF3p8vChagIQoHwoEf0ij24H18NVKtLb72uZGNOW7C%2BEx5qLFPm1spby81JXt3zClCZXe5O9eyCrTrliGJ38z96pEUXxENEJFNSJBtaCo%2BWS4BM9sC2NonmUC6tJxRcWG9jks%2Fsx%2BH4SZ%2FI9QZWfpzt%2Bh1aa0FKyt2xk00U6ew3%2F5u4VYXtnxGOI8BHVu3Y7s8EZE9OA923Mbq8frS5%2BodlM07MzTkFJa3sIjEngt3IUAtcdd3ZIgoWXPP%2FXafGjIgFZER6U8gUDadK7MPraFBqLsScGf%2FfHR%2BDuI3lPUX3rX8MAj2vMRydCmbuA3uK2Z7A%2FekREoMbyXNPNx6ySaDe86JaWojKQa1tB8J1AUMsNlyp0npRV1y6cHQZJnLblk%2BdXFG9sNWuZGaeQvzJpGiRN%2F4AnrmTJm4YWyAeQMPvQ28MGOqUBHIwx3TMsdqaXPGOCnMvBWCJo51H%2F2Jr2hwwWPcAgKArDN4jtC%2BOWxU0h1jxvm7DE6QPjQYZfiTs7at405ZFdHobXNqvcywYe8hY59bd9PQYXWdzX2rzvmoaJTQa7zHeryzTJgk%2FXpXU7aDbtw3z7%2FTxusbLy%2BSPFOemWtODRRxpcziI0mAVqo3FRoFRTQX0gn5Nyyc%2ByHVvB9E5fS16EAw6%2FDctN&X-Amz-Signature=ed9b1742c12e0d3a928084552552d6a7cbb25ae55f0410f26deacc0e19faedeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJKNSDDU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCc5rTpPqTE1Nbw%2BmjQx4HyvVKHeqEBZ%2FCFLXACM5kD1QIgbwnmq5Id%2F7KSQXv%2FjEmrMrnyYaikx19h3GFXTUoaF8Yq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJNJ70z2FAB0KcknICrcA3PHwLkzC4ODwfvf2s%2FCIR%2BcZ9ikMzSaXY0LyX1hn4PavHx7ibJIqx08MoCT%2BEWi9%2B5eAjp4L4dSdv1lutHZJ5i%2FvmOx%2Byoyu%2FSyc9MnG9kfIUbZZ%2Bi0h79WngD6H6LXLfE3PU59v5pYWZDVrpaNC%2FKjHo6Uit87xjX7Bz3dvjJIJXbZIl1BaAODmNYfugClE6j0pBZMOD4oWrhLQYyYLF3p8vChagIQoHwoEf0ij24H18NVKtLb72uZGNOW7C%2BEx5qLFPm1spby81JXt3zClCZXe5O9eyCrTrliGJ38z96pEUXxENEJFNSJBtaCo%2BWS4BM9sC2NonmUC6tJxRcWG9jks%2Fsx%2BH4SZ%2FI9QZWfpzt%2Bh1aa0FKyt2xk00U6ew3%2F5u4VYXtnxGOI8BHVu3Y7s8EZE9OA923Mbq8frS5%2BodlM07MzTkFJa3sIjEngt3IUAtcdd3ZIgoWXPP%2FXafGjIgFZER6U8gUDadK7MPraFBqLsScGf%2FfHR%2BDuI3lPUX3rX8MAj2vMRydCmbuA3uK2Z7A%2FekREoMbyXNPNx6ySaDe86JaWojKQa1tB8J1AUMsNlyp0npRV1y6cHQZJnLblk%2BdXFG9sNWuZGaeQvzJpGiRN%2F4AnrmTJm4YWyAeQMPvQ28MGOqUBHIwx3TMsdqaXPGOCnMvBWCJo51H%2F2Jr2hwwWPcAgKArDN4jtC%2BOWxU0h1jxvm7DE6QPjQYZfiTs7at405ZFdHobXNqvcywYe8hY59bd9PQYXWdzX2rzvmoaJTQa7zHeryzTJgk%2FXpXU7aDbtw3z7%2FTxusbLy%2BSPFOemWtODRRxpcziI0mAVqo3FRoFRTQX0gn5Nyyc%2ByHVvB9E5fS16EAw6%2FDctN&X-Amz-Signature=c5a6558732e7e8139907b7a0f532df04c2d1d67757ac68fc674e4832ca532379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJKNSDDU%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQCc5rTpPqTE1Nbw%2BmjQx4HyvVKHeqEBZ%2FCFLXACM5kD1QIgbwnmq5Id%2F7KSQXv%2FjEmrMrnyYaikx19h3GFXTUoaF8Yq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDJNJ70z2FAB0KcknICrcA3PHwLkzC4ODwfvf2s%2FCIR%2BcZ9ikMzSaXY0LyX1hn4PavHx7ibJIqx08MoCT%2BEWi9%2B5eAjp4L4dSdv1lutHZJ5i%2FvmOx%2Byoyu%2FSyc9MnG9kfIUbZZ%2Bi0h79WngD6H6LXLfE3PU59v5pYWZDVrpaNC%2FKjHo6Uit87xjX7Bz3dvjJIJXbZIl1BaAODmNYfugClE6j0pBZMOD4oWrhLQYyYLF3p8vChagIQoHwoEf0ij24H18NVKtLb72uZGNOW7C%2BEx5qLFPm1spby81JXt3zClCZXe5O9eyCrTrliGJ38z96pEUXxENEJFNSJBtaCo%2BWS4BM9sC2NonmUC6tJxRcWG9jks%2Fsx%2BH4SZ%2FI9QZWfpzt%2Bh1aa0FKyt2xk00U6ew3%2F5u4VYXtnxGOI8BHVu3Y7s8EZE9OA923Mbq8frS5%2BodlM07MzTkFJa3sIjEngt3IUAtcdd3ZIgoWXPP%2FXafGjIgFZER6U8gUDadK7MPraFBqLsScGf%2FfHR%2BDuI3lPUX3rX8MAj2vMRydCmbuA3uK2Z7A%2FekREoMbyXNPNx6ySaDe86JaWojKQa1tB8J1AUMsNlyp0npRV1y6cHQZJnLblk%2BdXFG9sNWuZGaeQvzJpGiRN%2F4AnrmTJm4YWyAeQMPvQ28MGOqUBHIwx3TMsdqaXPGOCnMvBWCJo51H%2F2Jr2hwwWPcAgKArDN4jtC%2BOWxU0h1jxvm7DE6QPjQYZfiTs7at405ZFdHobXNqvcywYe8hY59bd9PQYXWdzX2rzvmoaJTQa7zHeryzTJgk%2FXpXU7aDbtw3z7%2FTxusbLy%2BSPFOemWtODRRxpcziI0mAVqo3FRoFRTQX0gn5Nyyc%2ByHVvB9E5fS16EAw6%2FDctN&X-Amz-Signature=85d6fc3e12022b2d56d74797dd0b3fd6a387564330a5a3d7e040c355aa4dfc70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

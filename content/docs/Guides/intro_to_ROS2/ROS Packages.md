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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIQ35W%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRWVheOOgmIclr4bUbLvallrJec2rCqnngq1xfQ9lPgAiAmbJLXWE50k8X1ZWNngiEisg6uMYUXfoI1Z6m6G5ELRCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM9KXb1jBRr66uMuFzKtwDZUO9S96ZCa0QDdd0nwHp%2BHwHx1AZkrjJXDSdNktdy%2Blc2mdh3ERx5Ho2ZRMj2GVEusg4u16IvhvIeAjmAHSH1UTPgrqaSmviIXki%2BrSzRqthJNaSP2w0y7yFch8B3OhGm%2FZTjdhle8qovExjnHGvPKs0uLe21vtWcLrzr%2FdLVctw6SXRS4zBS4a9OIrOgEnmnNgGnsEdOgozZSZkVj5brJQCyeQsoALCHo2gysCVeP8Jtog4Gpa93o0qyFOaplAIa7ZVJb%2FcHwVgDGFlV3nULY186%2BVMl%2B75huK6BuvpszVpJYGyCb4r8%2Bd9CE%2BX9fLcKZ1OJACgln9HJFZuyB2QyGh59jff1XEi0p%2FLD3bRjHsDJRlRBBNqQkXL%2BYzspIxjKKWpb0lsX71jwoyvvmV4nhhiCcYcKhGXmwRpwqifoKaV2AxG2TNlL7aSvzTe79E8bp2HaH9inexfC%2B6EI4t%2FQbHQBlsc7lKPW89lJ7QDtctj1lT0yZTHmxswvnh7ZAenGdgcm9IKkqt9m0b0DFVtgreUwHl2%2ByytmfbWBW%2BybysZFDoGSQeR5VuEAaEgPAnIGGJV2YghJNfHDPbVGhTOvYAipEXmngf9YvLnxQHN96wlKZJqmnH3O01EiwEw%2Fr%2FzvwY6pgEi20Loba81FCL5pgutoAAEIWl2BtlzZXyFzo7nI4STOsy3TrLm50dO0IWJhTiGxLgqX00wA41xTCmfstUTHNaKESuIS0X%2BTkGSGRjJJ3u6RP5aRtjLbTkL8cu0VcLNIzGVbOh5wd8zYgI5KAyuk%2BF4xO5VwyB3Qg146UmNaYdcfzQtptMq%2Fvk2UQBbSY23xSyBbHf8ZYXxZFU%2Fc29BaDJcJf0IhupU&X-Amz-Signature=cb4850d145a0fa035d17d1c7d4d40998f3a8688713f136f4a3064d199bf7faf7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIQ35W%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRWVheOOgmIclr4bUbLvallrJec2rCqnngq1xfQ9lPgAiAmbJLXWE50k8X1ZWNngiEisg6uMYUXfoI1Z6m6G5ELRCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM9KXb1jBRr66uMuFzKtwDZUO9S96ZCa0QDdd0nwHp%2BHwHx1AZkrjJXDSdNktdy%2Blc2mdh3ERx5Ho2ZRMj2GVEusg4u16IvhvIeAjmAHSH1UTPgrqaSmviIXki%2BrSzRqthJNaSP2w0y7yFch8B3OhGm%2FZTjdhle8qovExjnHGvPKs0uLe21vtWcLrzr%2FdLVctw6SXRS4zBS4a9OIrOgEnmnNgGnsEdOgozZSZkVj5brJQCyeQsoALCHo2gysCVeP8Jtog4Gpa93o0qyFOaplAIa7ZVJb%2FcHwVgDGFlV3nULY186%2BVMl%2B75huK6BuvpszVpJYGyCb4r8%2Bd9CE%2BX9fLcKZ1OJACgln9HJFZuyB2QyGh59jff1XEi0p%2FLD3bRjHsDJRlRBBNqQkXL%2BYzspIxjKKWpb0lsX71jwoyvvmV4nhhiCcYcKhGXmwRpwqifoKaV2AxG2TNlL7aSvzTe79E8bp2HaH9inexfC%2B6EI4t%2FQbHQBlsc7lKPW89lJ7QDtctj1lT0yZTHmxswvnh7ZAenGdgcm9IKkqt9m0b0DFVtgreUwHl2%2ByytmfbWBW%2BybysZFDoGSQeR5VuEAaEgPAnIGGJV2YghJNfHDPbVGhTOvYAipEXmngf9YvLnxQHN96wlKZJqmnH3O01EiwEw%2Fr%2FzvwY6pgEi20Loba81FCL5pgutoAAEIWl2BtlzZXyFzo7nI4STOsy3TrLm50dO0IWJhTiGxLgqX00wA41xTCmfstUTHNaKESuIS0X%2BTkGSGRjJJ3u6RP5aRtjLbTkL8cu0VcLNIzGVbOh5wd8zYgI5KAyuk%2BF4xO5VwyB3Qg146UmNaYdcfzQtptMq%2Fvk2UQBbSY23xSyBbHf8ZYXxZFU%2Fc29BaDJcJf0IhupU&X-Amz-Signature=7778f48a254449e30f04d2382e2879436d4e42844d485cacb55cf51f5af00cbc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIQ35W%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRWVheOOgmIclr4bUbLvallrJec2rCqnngq1xfQ9lPgAiAmbJLXWE50k8X1ZWNngiEisg6uMYUXfoI1Z6m6G5ELRCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM9KXb1jBRr66uMuFzKtwDZUO9S96ZCa0QDdd0nwHp%2BHwHx1AZkrjJXDSdNktdy%2Blc2mdh3ERx5Ho2ZRMj2GVEusg4u16IvhvIeAjmAHSH1UTPgrqaSmviIXki%2BrSzRqthJNaSP2w0y7yFch8B3OhGm%2FZTjdhle8qovExjnHGvPKs0uLe21vtWcLrzr%2FdLVctw6SXRS4zBS4a9OIrOgEnmnNgGnsEdOgozZSZkVj5brJQCyeQsoALCHo2gysCVeP8Jtog4Gpa93o0qyFOaplAIa7ZVJb%2FcHwVgDGFlV3nULY186%2BVMl%2B75huK6BuvpszVpJYGyCb4r8%2Bd9CE%2BX9fLcKZ1OJACgln9HJFZuyB2QyGh59jff1XEi0p%2FLD3bRjHsDJRlRBBNqQkXL%2BYzspIxjKKWpb0lsX71jwoyvvmV4nhhiCcYcKhGXmwRpwqifoKaV2AxG2TNlL7aSvzTe79E8bp2HaH9inexfC%2B6EI4t%2FQbHQBlsc7lKPW89lJ7QDtctj1lT0yZTHmxswvnh7ZAenGdgcm9IKkqt9m0b0DFVtgreUwHl2%2ByytmfbWBW%2BybysZFDoGSQeR5VuEAaEgPAnIGGJV2YghJNfHDPbVGhTOvYAipEXmngf9YvLnxQHN96wlKZJqmnH3O01EiwEw%2Fr%2FzvwY6pgEi20Loba81FCL5pgutoAAEIWl2BtlzZXyFzo7nI4STOsy3TrLm50dO0IWJhTiGxLgqX00wA41xTCmfstUTHNaKESuIS0X%2BTkGSGRjJJ3u6RP5aRtjLbTkL8cu0VcLNIzGVbOh5wd8zYgI5KAyuk%2BF4xO5VwyB3Qg146UmNaYdcfzQtptMq%2Fvk2UQBbSY23xSyBbHf8ZYXxZFU%2Fc29BaDJcJf0IhupU&X-Amz-Signature=6d2ef66fcdd8577c21b50ae6f4181ac9b034766d18958528d2f1b44725fc0b64&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIQ35W%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRWVheOOgmIclr4bUbLvallrJec2rCqnngq1xfQ9lPgAiAmbJLXWE50k8X1ZWNngiEisg6uMYUXfoI1Z6m6G5ELRCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM9KXb1jBRr66uMuFzKtwDZUO9S96ZCa0QDdd0nwHp%2BHwHx1AZkrjJXDSdNktdy%2Blc2mdh3ERx5Ho2ZRMj2GVEusg4u16IvhvIeAjmAHSH1UTPgrqaSmviIXki%2BrSzRqthJNaSP2w0y7yFch8B3OhGm%2FZTjdhle8qovExjnHGvPKs0uLe21vtWcLrzr%2FdLVctw6SXRS4zBS4a9OIrOgEnmnNgGnsEdOgozZSZkVj5brJQCyeQsoALCHo2gysCVeP8Jtog4Gpa93o0qyFOaplAIa7ZVJb%2FcHwVgDGFlV3nULY186%2BVMl%2B75huK6BuvpszVpJYGyCb4r8%2Bd9CE%2BX9fLcKZ1OJACgln9HJFZuyB2QyGh59jff1XEi0p%2FLD3bRjHsDJRlRBBNqQkXL%2BYzspIxjKKWpb0lsX71jwoyvvmV4nhhiCcYcKhGXmwRpwqifoKaV2AxG2TNlL7aSvzTe79E8bp2HaH9inexfC%2B6EI4t%2FQbHQBlsc7lKPW89lJ7QDtctj1lT0yZTHmxswvnh7ZAenGdgcm9IKkqt9m0b0DFVtgreUwHl2%2ByytmfbWBW%2BybysZFDoGSQeR5VuEAaEgPAnIGGJV2YghJNfHDPbVGhTOvYAipEXmngf9YvLnxQHN96wlKZJqmnH3O01EiwEw%2Fr%2FzvwY6pgEi20Loba81FCL5pgutoAAEIWl2BtlzZXyFzo7nI4STOsy3TrLm50dO0IWJhTiGxLgqX00wA41xTCmfstUTHNaKESuIS0X%2BTkGSGRjJJ3u6RP5aRtjLbTkL8cu0VcLNIzGVbOh5wd8zYgI5KAyuk%2BF4xO5VwyB3Qg146UmNaYdcfzQtptMq%2Fvk2UQBbSY23xSyBbHf8ZYXxZFU%2Fc29BaDJcJf0IhupU&X-Amz-Signature=02a5e5ff00ba214c136d0bfd1c608b992a472cc4719832d7ce4374f0cf744b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIQ35W%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRWVheOOgmIclr4bUbLvallrJec2rCqnngq1xfQ9lPgAiAmbJLXWE50k8X1ZWNngiEisg6uMYUXfoI1Z6m6G5ELRCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM9KXb1jBRr66uMuFzKtwDZUO9S96ZCa0QDdd0nwHp%2BHwHx1AZkrjJXDSdNktdy%2Blc2mdh3ERx5Ho2ZRMj2GVEusg4u16IvhvIeAjmAHSH1UTPgrqaSmviIXki%2BrSzRqthJNaSP2w0y7yFch8B3OhGm%2FZTjdhle8qovExjnHGvPKs0uLe21vtWcLrzr%2FdLVctw6SXRS4zBS4a9OIrOgEnmnNgGnsEdOgozZSZkVj5brJQCyeQsoALCHo2gysCVeP8Jtog4Gpa93o0qyFOaplAIa7ZVJb%2FcHwVgDGFlV3nULY186%2BVMl%2B75huK6BuvpszVpJYGyCb4r8%2Bd9CE%2BX9fLcKZ1OJACgln9HJFZuyB2QyGh59jff1XEi0p%2FLD3bRjHsDJRlRBBNqQkXL%2BYzspIxjKKWpb0lsX71jwoyvvmV4nhhiCcYcKhGXmwRpwqifoKaV2AxG2TNlL7aSvzTe79E8bp2HaH9inexfC%2B6EI4t%2FQbHQBlsc7lKPW89lJ7QDtctj1lT0yZTHmxswvnh7ZAenGdgcm9IKkqt9m0b0DFVtgreUwHl2%2ByytmfbWBW%2BybysZFDoGSQeR5VuEAaEgPAnIGGJV2YghJNfHDPbVGhTOvYAipEXmngf9YvLnxQHN96wlKZJqmnH3O01EiwEw%2Fr%2FzvwY6pgEi20Loba81FCL5pgutoAAEIWl2BtlzZXyFzo7nI4STOsy3TrLm50dO0IWJhTiGxLgqX00wA41xTCmfstUTHNaKESuIS0X%2BTkGSGRjJJ3u6RP5aRtjLbTkL8cu0VcLNIzGVbOh5wd8zYgI5KAyuk%2BF4xO5VwyB3Qg146UmNaYdcfzQtptMq%2Fvk2UQBbSY23xSyBbHf8ZYXxZFU%2Fc29BaDJcJf0IhupU&X-Amz-Signature=45badb34e78a6955f3fc2bff25a019fa2a4affe035d7a6fe4efb77d978db013e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIQ35W%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRWVheOOgmIclr4bUbLvallrJec2rCqnngq1xfQ9lPgAiAmbJLXWE50k8X1ZWNngiEisg6uMYUXfoI1Z6m6G5ELRCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM9KXb1jBRr66uMuFzKtwDZUO9S96ZCa0QDdd0nwHp%2BHwHx1AZkrjJXDSdNktdy%2Blc2mdh3ERx5Ho2ZRMj2GVEusg4u16IvhvIeAjmAHSH1UTPgrqaSmviIXki%2BrSzRqthJNaSP2w0y7yFch8B3OhGm%2FZTjdhle8qovExjnHGvPKs0uLe21vtWcLrzr%2FdLVctw6SXRS4zBS4a9OIrOgEnmnNgGnsEdOgozZSZkVj5brJQCyeQsoALCHo2gysCVeP8Jtog4Gpa93o0qyFOaplAIa7ZVJb%2FcHwVgDGFlV3nULY186%2BVMl%2B75huK6BuvpszVpJYGyCb4r8%2Bd9CE%2BX9fLcKZ1OJACgln9HJFZuyB2QyGh59jff1XEi0p%2FLD3bRjHsDJRlRBBNqQkXL%2BYzspIxjKKWpb0lsX71jwoyvvmV4nhhiCcYcKhGXmwRpwqifoKaV2AxG2TNlL7aSvzTe79E8bp2HaH9inexfC%2B6EI4t%2FQbHQBlsc7lKPW89lJ7QDtctj1lT0yZTHmxswvnh7ZAenGdgcm9IKkqt9m0b0DFVtgreUwHl2%2ByytmfbWBW%2BybysZFDoGSQeR5VuEAaEgPAnIGGJV2YghJNfHDPbVGhTOvYAipEXmngf9YvLnxQHN96wlKZJqmnH3O01EiwEw%2Fr%2FzvwY6pgEi20Loba81FCL5pgutoAAEIWl2BtlzZXyFzo7nI4STOsy3TrLm50dO0IWJhTiGxLgqX00wA41xTCmfstUTHNaKESuIS0X%2BTkGSGRjJJ3u6RP5aRtjLbTkL8cu0VcLNIzGVbOh5wd8zYgI5KAyuk%2BF4xO5VwyB3Qg146UmNaYdcfzQtptMq%2Fvk2UQBbSY23xSyBbHf8ZYXxZFU%2Fc29BaDJcJf0IhupU&X-Amz-Signature=b3256e3457c6c0373b336ee3ba382540c74f8df84da8b4097c2ea1eaf4d77017&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3LIQ35W%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRWVheOOgmIclr4bUbLvallrJec2rCqnngq1xfQ9lPgAiAmbJLXWE50k8X1ZWNngiEisg6uMYUXfoI1Z6m6G5ELRCr%2FAwgTEAAaDDYzNzQyMzE4MzgwNSIM9KXb1jBRr66uMuFzKtwDZUO9S96ZCa0QDdd0nwHp%2BHwHx1AZkrjJXDSdNktdy%2Blc2mdh3ERx5Ho2ZRMj2GVEusg4u16IvhvIeAjmAHSH1UTPgrqaSmviIXki%2BrSzRqthJNaSP2w0y7yFch8B3OhGm%2FZTjdhle8qovExjnHGvPKs0uLe21vtWcLrzr%2FdLVctw6SXRS4zBS4a9OIrOgEnmnNgGnsEdOgozZSZkVj5brJQCyeQsoALCHo2gysCVeP8Jtog4Gpa93o0qyFOaplAIa7ZVJb%2FcHwVgDGFlV3nULY186%2BVMl%2B75huK6BuvpszVpJYGyCb4r8%2Bd9CE%2BX9fLcKZ1OJACgln9HJFZuyB2QyGh59jff1XEi0p%2FLD3bRjHsDJRlRBBNqQkXL%2BYzspIxjKKWpb0lsX71jwoyvvmV4nhhiCcYcKhGXmwRpwqifoKaV2AxG2TNlL7aSvzTe79E8bp2HaH9inexfC%2B6EI4t%2FQbHQBlsc7lKPW89lJ7QDtctj1lT0yZTHmxswvnh7ZAenGdgcm9IKkqt9m0b0DFVtgreUwHl2%2ByytmfbWBW%2BybysZFDoGSQeR5VuEAaEgPAnIGGJV2YghJNfHDPbVGhTOvYAipEXmngf9YvLnxQHN96wlKZJqmnH3O01EiwEw%2Fr%2FzvwY6pgEi20Loba81FCL5pgutoAAEIWl2BtlzZXyFzo7nI4STOsy3TrLm50dO0IWJhTiGxLgqX00wA41xTCmfstUTHNaKESuIS0X%2BTkGSGRjJJ3u6RP5aRtjLbTkL8cu0VcLNIzGVbOh5wd8zYgI5KAyuk%2BF4xO5VwyB3Qg146UmNaYdcfzQtptMq%2Fvk2UQBbSY23xSyBbHf8ZYXxZFU%2Fc29BaDJcJf0IhupU&X-Amz-Signature=a989ac0b589bc5f1a4120a119cdb231b7dc9eae065d56dfa7a4b601ce4d99781&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

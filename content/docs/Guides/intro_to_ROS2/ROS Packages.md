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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBDHLUPO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDzCbPhdEMyJSNba2AP18R7YRAkRMyvkUn4wbFBe%2B9FmgIgLl1tlO7%2FyYJPiCo65szDBj%2FuMt88%2B62peGgkMhdnHDoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9ULwP1u66b62MEHCrcA1JrtfucUvQXTTjST68XTKKSReEY81ludgVYm8UTcFlyRHw6pw5%2FlEllDoECs4s8V%2FocoxsQfvA33ynkyqlsL4ifYvn0yWbEwObJGQf9MiXDM%2BqPNpuBOwvROxgHdV8FFD8VKjb5rYfBtQmQguyzzz9bM1F%2BIhhmLO8H4UgMbOk5i%2BtfAn1Bczy7QXaaFSAZHucV1XAdAxE%2FVfG%2FaFVKmtOcEFTWZDyqUE0XANlzDV7zjUuAezqzdedeEaO2LDpZNDYc4PxaxFTKNmxLyXMDnbWekgQ%2BxwrjhiItk5OPVSr%2Fm3f%2FiP7cxwQImcgGCIUDKF8nKPLE9io1kh2gRnELZ8OlAy0gwnUXM%2B4dFRF2ag7Gj5%2BsSzPMWS5qRpYdB9cTpS3gvnz2xZiCrHiyvKroo%2FuLTfTXDvQ0IRVDG4tBm36r1xHLOi2ESSr2wSeORKZCSMalmehjrAGrhsTrR5WcthEPNeeOLO9Jeyp7l3PI60hMZGZCYEPMIyPvJGE2QVLfSuc0w8MQ9VRHO6Wf1RD2rZZXB0qhFobBr4nZuKVuv9O9QN2DCu8J6xFzhgQhtGNXtwGfqszIiZAJLmocOSfrHCE8C2QwhrHSzDnZwu3WP9N4b2%2BxuoYjM3hKsUlIMM662cQGOqUBRmjsXAcvbwNhkV9UAYiMIKH%2FRXb9diS1WidZw5%2B0WaiqBLDNjH53PHrFAPMXtu3ARZL1M3r%2BUaHKhN9S97kU%2FXgdj0nHZ%2FVaJGzst8zEWBltSQ9jBtcjlzS%2BF053Y4KqXIxDVI2McUVepovZmEMqIVAHaIRRXBOPX299m4l7KOtstdZwiP2TTc4wBi%2FpdsK9bGxW09oNkQLr5NtCW%2B8%2Fafm4MLAu&X-Amz-Signature=a27a526eeeb63994d24c892306d983aa5c5bf5e3b1b40e6ebf727e6a9da4a015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBDHLUPO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDzCbPhdEMyJSNba2AP18R7YRAkRMyvkUn4wbFBe%2B9FmgIgLl1tlO7%2FyYJPiCo65szDBj%2FuMt88%2B62peGgkMhdnHDoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9ULwP1u66b62MEHCrcA1JrtfucUvQXTTjST68XTKKSReEY81ludgVYm8UTcFlyRHw6pw5%2FlEllDoECs4s8V%2FocoxsQfvA33ynkyqlsL4ifYvn0yWbEwObJGQf9MiXDM%2BqPNpuBOwvROxgHdV8FFD8VKjb5rYfBtQmQguyzzz9bM1F%2BIhhmLO8H4UgMbOk5i%2BtfAn1Bczy7QXaaFSAZHucV1XAdAxE%2FVfG%2FaFVKmtOcEFTWZDyqUE0XANlzDV7zjUuAezqzdedeEaO2LDpZNDYc4PxaxFTKNmxLyXMDnbWekgQ%2BxwrjhiItk5OPVSr%2Fm3f%2FiP7cxwQImcgGCIUDKF8nKPLE9io1kh2gRnELZ8OlAy0gwnUXM%2B4dFRF2ag7Gj5%2BsSzPMWS5qRpYdB9cTpS3gvnz2xZiCrHiyvKroo%2FuLTfTXDvQ0IRVDG4tBm36r1xHLOi2ESSr2wSeORKZCSMalmehjrAGrhsTrR5WcthEPNeeOLO9Jeyp7l3PI60hMZGZCYEPMIyPvJGE2QVLfSuc0w8MQ9VRHO6Wf1RD2rZZXB0qhFobBr4nZuKVuv9O9QN2DCu8J6xFzhgQhtGNXtwGfqszIiZAJLmocOSfrHCE8C2QwhrHSzDnZwu3WP9N4b2%2BxuoYjM3hKsUlIMM662cQGOqUBRmjsXAcvbwNhkV9UAYiMIKH%2FRXb9diS1WidZw5%2B0WaiqBLDNjH53PHrFAPMXtu3ARZL1M3r%2BUaHKhN9S97kU%2FXgdj0nHZ%2FVaJGzst8zEWBltSQ9jBtcjlzS%2BF053Y4KqXIxDVI2McUVepovZmEMqIVAHaIRRXBOPX299m4l7KOtstdZwiP2TTc4wBi%2FpdsK9bGxW09oNkQLr5NtCW%2B8%2Fafm4MLAu&X-Amz-Signature=7500c547c03ae375435a056cb7f8640774bee1f77754f5a97dbd6f1b0951a662&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBDHLUPO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDzCbPhdEMyJSNba2AP18R7YRAkRMyvkUn4wbFBe%2B9FmgIgLl1tlO7%2FyYJPiCo65szDBj%2FuMt88%2B62peGgkMhdnHDoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9ULwP1u66b62MEHCrcA1JrtfucUvQXTTjST68XTKKSReEY81ludgVYm8UTcFlyRHw6pw5%2FlEllDoECs4s8V%2FocoxsQfvA33ynkyqlsL4ifYvn0yWbEwObJGQf9MiXDM%2BqPNpuBOwvROxgHdV8FFD8VKjb5rYfBtQmQguyzzz9bM1F%2BIhhmLO8H4UgMbOk5i%2BtfAn1Bczy7QXaaFSAZHucV1XAdAxE%2FVfG%2FaFVKmtOcEFTWZDyqUE0XANlzDV7zjUuAezqzdedeEaO2LDpZNDYc4PxaxFTKNmxLyXMDnbWekgQ%2BxwrjhiItk5OPVSr%2Fm3f%2FiP7cxwQImcgGCIUDKF8nKPLE9io1kh2gRnELZ8OlAy0gwnUXM%2B4dFRF2ag7Gj5%2BsSzPMWS5qRpYdB9cTpS3gvnz2xZiCrHiyvKroo%2FuLTfTXDvQ0IRVDG4tBm36r1xHLOi2ESSr2wSeORKZCSMalmehjrAGrhsTrR5WcthEPNeeOLO9Jeyp7l3PI60hMZGZCYEPMIyPvJGE2QVLfSuc0w8MQ9VRHO6Wf1RD2rZZXB0qhFobBr4nZuKVuv9O9QN2DCu8J6xFzhgQhtGNXtwGfqszIiZAJLmocOSfrHCE8C2QwhrHSzDnZwu3WP9N4b2%2BxuoYjM3hKsUlIMM662cQGOqUBRmjsXAcvbwNhkV9UAYiMIKH%2FRXb9diS1WidZw5%2B0WaiqBLDNjH53PHrFAPMXtu3ARZL1M3r%2BUaHKhN9S97kU%2FXgdj0nHZ%2FVaJGzst8zEWBltSQ9jBtcjlzS%2BF053Y4KqXIxDVI2McUVepovZmEMqIVAHaIRRXBOPX299m4l7KOtstdZwiP2TTc4wBi%2FpdsK9bGxW09oNkQLr5NtCW%2B8%2Fafm4MLAu&X-Amz-Signature=808773a51fdb6f3371eea2bc623ed87c814487711b3d2d71604c8e8ae296e7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBDHLUPO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDzCbPhdEMyJSNba2AP18R7YRAkRMyvkUn4wbFBe%2B9FmgIgLl1tlO7%2FyYJPiCo65szDBj%2FuMt88%2B62peGgkMhdnHDoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9ULwP1u66b62MEHCrcA1JrtfucUvQXTTjST68XTKKSReEY81ludgVYm8UTcFlyRHw6pw5%2FlEllDoECs4s8V%2FocoxsQfvA33ynkyqlsL4ifYvn0yWbEwObJGQf9MiXDM%2BqPNpuBOwvROxgHdV8FFD8VKjb5rYfBtQmQguyzzz9bM1F%2BIhhmLO8H4UgMbOk5i%2BtfAn1Bczy7QXaaFSAZHucV1XAdAxE%2FVfG%2FaFVKmtOcEFTWZDyqUE0XANlzDV7zjUuAezqzdedeEaO2LDpZNDYc4PxaxFTKNmxLyXMDnbWekgQ%2BxwrjhiItk5OPVSr%2Fm3f%2FiP7cxwQImcgGCIUDKF8nKPLE9io1kh2gRnELZ8OlAy0gwnUXM%2B4dFRF2ag7Gj5%2BsSzPMWS5qRpYdB9cTpS3gvnz2xZiCrHiyvKroo%2FuLTfTXDvQ0IRVDG4tBm36r1xHLOi2ESSr2wSeORKZCSMalmehjrAGrhsTrR5WcthEPNeeOLO9Jeyp7l3PI60hMZGZCYEPMIyPvJGE2QVLfSuc0w8MQ9VRHO6Wf1RD2rZZXB0qhFobBr4nZuKVuv9O9QN2DCu8J6xFzhgQhtGNXtwGfqszIiZAJLmocOSfrHCE8C2QwhrHSzDnZwu3WP9N4b2%2BxuoYjM3hKsUlIMM662cQGOqUBRmjsXAcvbwNhkV9UAYiMIKH%2FRXb9diS1WidZw5%2B0WaiqBLDNjH53PHrFAPMXtu3ARZL1M3r%2BUaHKhN9S97kU%2FXgdj0nHZ%2FVaJGzst8zEWBltSQ9jBtcjlzS%2BF053Y4KqXIxDVI2McUVepovZmEMqIVAHaIRRXBOPX299m4l7KOtstdZwiP2TTc4wBi%2FpdsK9bGxW09oNkQLr5NtCW%2B8%2Fafm4MLAu&X-Amz-Signature=134afa4ebfa2c948ce69acf50be28b1591ceaef87de45c16faccbfa37b15a247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBDHLUPO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDzCbPhdEMyJSNba2AP18R7YRAkRMyvkUn4wbFBe%2B9FmgIgLl1tlO7%2FyYJPiCo65szDBj%2FuMt88%2B62peGgkMhdnHDoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9ULwP1u66b62MEHCrcA1JrtfucUvQXTTjST68XTKKSReEY81ludgVYm8UTcFlyRHw6pw5%2FlEllDoECs4s8V%2FocoxsQfvA33ynkyqlsL4ifYvn0yWbEwObJGQf9MiXDM%2BqPNpuBOwvROxgHdV8FFD8VKjb5rYfBtQmQguyzzz9bM1F%2BIhhmLO8H4UgMbOk5i%2BtfAn1Bczy7QXaaFSAZHucV1XAdAxE%2FVfG%2FaFVKmtOcEFTWZDyqUE0XANlzDV7zjUuAezqzdedeEaO2LDpZNDYc4PxaxFTKNmxLyXMDnbWekgQ%2BxwrjhiItk5OPVSr%2Fm3f%2FiP7cxwQImcgGCIUDKF8nKPLE9io1kh2gRnELZ8OlAy0gwnUXM%2B4dFRF2ag7Gj5%2BsSzPMWS5qRpYdB9cTpS3gvnz2xZiCrHiyvKroo%2FuLTfTXDvQ0IRVDG4tBm36r1xHLOi2ESSr2wSeORKZCSMalmehjrAGrhsTrR5WcthEPNeeOLO9Jeyp7l3PI60hMZGZCYEPMIyPvJGE2QVLfSuc0w8MQ9VRHO6Wf1RD2rZZXB0qhFobBr4nZuKVuv9O9QN2DCu8J6xFzhgQhtGNXtwGfqszIiZAJLmocOSfrHCE8C2QwhrHSzDnZwu3WP9N4b2%2BxuoYjM3hKsUlIMM662cQGOqUBRmjsXAcvbwNhkV9UAYiMIKH%2FRXb9diS1WidZw5%2B0WaiqBLDNjH53PHrFAPMXtu3ARZL1M3r%2BUaHKhN9S97kU%2FXgdj0nHZ%2FVaJGzst8zEWBltSQ9jBtcjlzS%2BF053Y4KqXIxDVI2McUVepovZmEMqIVAHaIRRXBOPX299m4l7KOtstdZwiP2TTc4wBi%2FpdsK9bGxW09oNkQLr5NtCW%2B8%2Fafm4MLAu&X-Amz-Signature=94478ba6c950bb611c419dd3ae6631b368c252d933ac8ebf5de3bb9ac2ea1d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBDHLUPO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDzCbPhdEMyJSNba2AP18R7YRAkRMyvkUn4wbFBe%2B9FmgIgLl1tlO7%2FyYJPiCo65szDBj%2FuMt88%2B62peGgkMhdnHDoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9ULwP1u66b62MEHCrcA1JrtfucUvQXTTjST68XTKKSReEY81ludgVYm8UTcFlyRHw6pw5%2FlEllDoECs4s8V%2FocoxsQfvA33ynkyqlsL4ifYvn0yWbEwObJGQf9MiXDM%2BqPNpuBOwvROxgHdV8FFD8VKjb5rYfBtQmQguyzzz9bM1F%2BIhhmLO8H4UgMbOk5i%2BtfAn1Bczy7QXaaFSAZHucV1XAdAxE%2FVfG%2FaFVKmtOcEFTWZDyqUE0XANlzDV7zjUuAezqzdedeEaO2LDpZNDYc4PxaxFTKNmxLyXMDnbWekgQ%2BxwrjhiItk5OPVSr%2Fm3f%2FiP7cxwQImcgGCIUDKF8nKPLE9io1kh2gRnELZ8OlAy0gwnUXM%2B4dFRF2ag7Gj5%2BsSzPMWS5qRpYdB9cTpS3gvnz2xZiCrHiyvKroo%2FuLTfTXDvQ0IRVDG4tBm36r1xHLOi2ESSr2wSeORKZCSMalmehjrAGrhsTrR5WcthEPNeeOLO9Jeyp7l3PI60hMZGZCYEPMIyPvJGE2QVLfSuc0w8MQ9VRHO6Wf1RD2rZZXB0qhFobBr4nZuKVuv9O9QN2DCu8J6xFzhgQhtGNXtwGfqszIiZAJLmocOSfrHCE8C2QwhrHSzDnZwu3WP9N4b2%2BxuoYjM3hKsUlIMM662cQGOqUBRmjsXAcvbwNhkV9UAYiMIKH%2FRXb9diS1WidZw5%2B0WaiqBLDNjH53PHrFAPMXtu3ARZL1M3r%2BUaHKhN9S97kU%2FXgdj0nHZ%2FVaJGzst8zEWBltSQ9jBtcjlzS%2BF053Y4KqXIxDVI2McUVepovZmEMqIVAHaIRRXBOPX299m4l7KOtstdZwiP2TTc4wBi%2FpdsK9bGxW09oNkQLr5NtCW%2B8%2Fafm4MLAu&X-Amz-Signature=e09f597b2067163166e1f6327d051f4cbf21dad916a47000fc0a1b7fe83f59cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBDHLUPO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDzCbPhdEMyJSNba2AP18R7YRAkRMyvkUn4wbFBe%2B9FmgIgLl1tlO7%2FyYJPiCo65szDBj%2FuMt88%2B62peGgkMhdnHDoqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9ULwP1u66b62MEHCrcA1JrtfucUvQXTTjST68XTKKSReEY81ludgVYm8UTcFlyRHw6pw5%2FlEllDoECs4s8V%2FocoxsQfvA33ynkyqlsL4ifYvn0yWbEwObJGQf9MiXDM%2BqPNpuBOwvROxgHdV8FFD8VKjb5rYfBtQmQguyzzz9bM1F%2BIhhmLO8H4UgMbOk5i%2BtfAn1Bczy7QXaaFSAZHucV1XAdAxE%2FVfG%2FaFVKmtOcEFTWZDyqUE0XANlzDV7zjUuAezqzdedeEaO2LDpZNDYc4PxaxFTKNmxLyXMDnbWekgQ%2BxwrjhiItk5OPVSr%2Fm3f%2FiP7cxwQImcgGCIUDKF8nKPLE9io1kh2gRnELZ8OlAy0gwnUXM%2B4dFRF2ag7Gj5%2BsSzPMWS5qRpYdB9cTpS3gvnz2xZiCrHiyvKroo%2FuLTfTXDvQ0IRVDG4tBm36r1xHLOi2ESSr2wSeORKZCSMalmehjrAGrhsTrR5WcthEPNeeOLO9Jeyp7l3PI60hMZGZCYEPMIyPvJGE2QVLfSuc0w8MQ9VRHO6Wf1RD2rZZXB0qhFobBr4nZuKVuv9O9QN2DCu8J6xFzhgQhtGNXtwGfqszIiZAJLmocOSfrHCE8C2QwhrHSzDnZwu3WP9N4b2%2BxuoYjM3hKsUlIMM662cQGOqUBRmjsXAcvbwNhkV9UAYiMIKH%2FRXb9diS1WidZw5%2B0WaiqBLDNjH53PHrFAPMXtu3ARZL1M3r%2BUaHKhN9S97kU%2FXgdj0nHZ%2FVaJGzst8zEWBltSQ9jBtcjlzS%2BF053Y4KqXIxDVI2McUVepovZmEMqIVAHaIRRXBOPX299m4l7KOtstdZwiP2TTc4wBi%2FpdsK9bGxW09oNkQLr5NtCW%2B8%2Fafm4MLAu&X-Amz-Signature=6b40b1e5052db50efe50df39b5a5290a2c054ea4a13bc48db275228d29ccf8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

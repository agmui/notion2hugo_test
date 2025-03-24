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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JGVITD6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG0QW%2FFQKkn4IIiGgGW0oL9rXAS0use112dVHBEr9tWwIgIjTbhPbW6On315P52EibKHdPzEIDm1l%2BVtskh77TbIwqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnGqvmlw6Uv%2FXmPhircA7Cj7%2F8QMyiJ4IXojZjiiA%2Fn5WgHduGFJtAG%2FEcwMvlmo9tI7%2ByzYUtNTQzZSG6hRo6OBObdJuF6cXPh2t4O0IwPGWUBE0ebofTpn8Rnn1ZP1B8rt%2Fy%2FA%2BIio6IsK84aWOQELwuUaAwf5fc7Yxgp%2B42eYYADNMOFlwwWN8nIidOUNvuh0IJKccHL51l%2B1gEIociiwIeukSMimAfhDOoc%2Fqtby5lnRGSxrrXMqvZjXPRMp5jwT%2BHphaG9c%2FkzA2mkaOEvayJpVPH3aC%2Fd2cdF9J4XiJg0hNgFbWhfLyAvTDFuZfu13Q%2B2kePz8whMTtubPS%2FLaxLJ6DqeLRklD%2FKoE%2Bd2vvr5V%2FpXNIAB3qGs8x9U18VZ6bsTmd2wvV5T7Rf2kgiJByxJgfXYtsCi5rB4TZI%2B%2FuLutFgG1J6kXPVJ0E1ddTjL1aIerkUSFXKqkFU8nJAjxNPteaEHisd6RU%2FiOzXudbB%2BWIHl1rPYLhVt4MyX%2BZ81L4%2FPEReYpgdijFuJeq9M7FX0wQQ0KKYZyeAP6JT6SotsVCTJQVhNfBWAMQVGtHgtC%2FMOyClCYgfkM2mYT5P%2FyPqvcOvAhYOsOd6jB88aUnny5Ly4mpWcJGNotX2jps2gA31h53Xn3tcRMJuxh78GOqUBqGsBrlry4x63WxY%2B6zCvOwf%2FeatW%2FDJigajoSQdSBWw%2BsDgMsRrW1vaCTQzLuCBQYtWUwckAims60OKh8vgrVyYW46J82woIm4FSTIA7MY%2Be1tNh3N2QpREGC5dnQ5v3oYbE8NL3WSVFdtdKWqsqgvq%2FTj5uGalAk5qeEc63io%2BmeD3IFiVIn3LdfFqKQzKYcoNreEfyfgVIPoT6zCF0ZNE77SH8&X-Amz-Signature=d5797928a685bcfb15958b495308de77274aa3e62e1e813fe93f14cdf3663991&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JGVITD6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG0QW%2FFQKkn4IIiGgGW0oL9rXAS0use112dVHBEr9tWwIgIjTbhPbW6On315P52EibKHdPzEIDm1l%2BVtskh77TbIwqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnGqvmlw6Uv%2FXmPhircA7Cj7%2F8QMyiJ4IXojZjiiA%2Fn5WgHduGFJtAG%2FEcwMvlmo9tI7%2ByzYUtNTQzZSG6hRo6OBObdJuF6cXPh2t4O0IwPGWUBE0ebofTpn8Rnn1ZP1B8rt%2Fy%2FA%2BIio6IsK84aWOQELwuUaAwf5fc7Yxgp%2B42eYYADNMOFlwwWN8nIidOUNvuh0IJKccHL51l%2B1gEIociiwIeukSMimAfhDOoc%2Fqtby5lnRGSxrrXMqvZjXPRMp5jwT%2BHphaG9c%2FkzA2mkaOEvayJpVPH3aC%2Fd2cdF9J4XiJg0hNgFbWhfLyAvTDFuZfu13Q%2B2kePz8whMTtubPS%2FLaxLJ6DqeLRklD%2FKoE%2Bd2vvr5V%2FpXNIAB3qGs8x9U18VZ6bsTmd2wvV5T7Rf2kgiJByxJgfXYtsCi5rB4TZI%2B%2FuLutFgG1J6kXPVJ0E1ddTjL1aIerkUSFXKqkFU8nJAjxNPteaEHisd6RU%2FiOzXudbB%2BWIHl1rPYLhVt4MyX%2BZ81L4%2FPEReYpgdijFuJeq9M7FX0wQQ0KKYZyeAP6JT6SotsVCTJQVhNfBWAMQVGtHgtC%2FMOyClCYgfkM2mYT5P%2FyPqvcOvAhYOsOd6jB88aUnny5Ly4mpWcJGNotX2jps2gA31h53Xn3tcRMJuxh78GOqUBqGsBrlry4x63WxY%2B6zCvOwf%2FeatW%2FDJigajoSQdSBWw%2BsDgMsRrW1vaCTQzLuCBQYtWUwckAims60OKh8vgrVyYW46J82woIm4FSTIA7MY%2Be1tNh3N2QpREGC5dnQ5v3oYbE8NL3WSVFdtdKWqsqgvq%2FTj5uGalAk5qeEc63io%2BmeD3IFiVIn3LdfFqKQzKYcoNreEfyfgVIPoT6zCF0ZNE77SH8&X-Amz-Signature=cef9c4cfdfb8038d2d0ade4608d836e389b335c9f5cf82670e597cc63fd7adb7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JGVITD6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG0QW%2FFQKkn4IIiGgGW0oL9rXAS0use112dVHBEr9tWwIgIjTbhPbW6On315P52EibKHdPzEIDm1l%2BVtskh77TbIwqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnGqvmlw6Uv%2FXmPhircA7Cj7%2F8QMyiJ4IXojZjiiA%2Fn5WgHduGFJtAG%2FEcwMvlmo9tI7%2ByzYUtNTQzZSG6hRo6OBObdJuF6cXPh2t4O0IwPGWUBE0ebofTpn8Rnn1ZP1B8rt%2Fy%2FA%2BIio6IsK84aWOQELwuUaAwf5fc7Yxgp%2B42eYYADNMOFlwwWN8nIidOUNvuh0IJKccHL51l%2B1gEIociiwIeukSMimAfhDOoc%2Fqtby5lnRGSxrrXMqvZjXPRMp5jwT%2BHphaG9c%2FkzA2mkaOEvayJpVPH3aC%2Fd2cdF9J4XiJg0hNgFbWhfLyAvTDFuZfu13Q%2B2kePz8whMTtubPS%2FLaxLJ6DqeLRklD%2FKoE%2Bd2vvr5V%2FpXNIAB3qGs8x9U18VZ6bsTmd2wvV5T7Rf2kgiJByxJgfXYtsCi5rB4TZI%2B%2FuLutFgG1J6kXPVJ0E1ddTjL1aIerkUSFXKqkFU8nJAjxNPteaEHisd6RU%2FiOzXudbB%2BWIHl1rPYLhVt4MyX%2BZ81L4%2FPEReYpgdijFuJeq9M7FX0wQQ0KKYZyeAP6JT6SotsVCTJQVhNfBWAMQVGtHgtC%2FMOyClCYgfkM2mYT5P%2FyPqvcOvAhYOsOd6jB88aUnny5Ly4mpWcJGNotX2jps2gA31h53Xn3tcRMJuxh78GOqUBqGsBrlry4x63WxY%2B6zCvOwf%2FeatW%2FDJigajoSQdSBWw%2BsDgMsRrW1vaCTQzLuCBQYtWUwckAims60OKh8vgrVyYW46J82woIm4FSTIA7MY%2Be1tNh3N2QpREGC5dnQ5v3oYbE8NL3WSVFdtdKWqsqgvq%2FTj5uGalAk5qeEc63io%2BmeD3IFiVIn3LdfFqKQzKYcoNreEfyfgVIPoT6zCF0ZNE77SH8&X-Amz-Signature=56030c9bc32634112a68b1a3bba78e9d069646e7b511d910a0f119b29f3b75c5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JGVITD6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG0QW%2FFQKkn4IIiGgGW0oL9rXAS0use112dVHBEr9tWwIgIjTbhPbW6On315P52EibKHdPzEIDm1l%2BVtskh77TbIwqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnGqvmlw6Uv%2FXmPhircA7Cj7%2F8QMyiJ4IXojZjiiA%2Fn5WgHduGFJtAG%2FEcwMvlmo9tI7%2ByzYUtNTQzZSG6hRo6OBObdJuF6cXPh2t4O0IwPGWUBE0ebofTpn8Rnn1ZP1B8rt%2Fy%2FA%2BIio6IsK84aWOQELwuUaAwf5fc7Yxgp%2B42eYYADNMOFlwwWN8nIidOUNvuh0IJKccHL51l%2B1gEIociiwIeukSMimAfhDOoc%2Fqtby5lnRGSxrrXMqvZjXPRMp5jwT%2BHphaG9c%2FkzA2mkaOEvayJpVPH3aC%2Fd2cdF9J4XiJg0hNgFbWhfLyAvTDFuZfu13Q%2B2kePz8whMTtubPS%2FLaxLJ6DqeLRklD%2FKoE%2Bd2vvr5V%2FpXNIAB3qGs8x9U18VZ6bsTmd2wvV5T7Rf2kgiJByxJgfXYtsCi5rB4TZI%2B%2FuLutFgG1J6kXPVJ0E1ddTjL1aIerkUSFXKqkFU8nJAjxNPteaEHisd6RU%2FiOzXudbB%2BWIHl1rPYLhVt4MyX%2BZ81L4%2FPEReYpgdijFuJeq9M7FX0wQQ0KKYZyeAP6JT6SotsVCTJQVhNfBWAMQVGtHgtC%2FMOyClCYgfkM2mYT5P%2FyPqvcOvAhYOsOd6jB88aUnny5Ly4mpWcJGNotX2jps2gA31h53Xn3tcRMJuxh78GOqUBqGsBrlry4x63WxY%2B6zCvOwf%2FeatW%2FDJigajoSQdSBWw%2BsDgMsRrW1vaCTQzLuCBQYtWUwckAims60OKh8vgrVyYW46J82woIm4FSTIA7MY%2Be1tNh3N2QpREGC5dnQ5v3oYbE8NL3WSVFdtdKWqsqgvq%2FTj5uGalAk5qeEc63io%2BmeD3IFiVIn3LdfFqKQzKYcoNreEfyfgVIPoT6zCF0ZNE77SH8&X-Amz-Signature=7eb68d45385e1b3d995e0176d6f7319872f3a968cc39a7ed7ebf082e6d197eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JGVITD6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG0QW%2FFQKkn4IIiGgGW0oL9rXAS0use112dVHBEr9tWwIgIjTbhPbW6On315P52EibKHdPzEIDm1l%2BVtskh77TbIwqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnGqvmlw6Uv%2FXmPhircA7Cj7%2F8QMyiJ4IXojZjiiA%2Fn5WgHduGFJtAG%2FEcwMvlmo9tI7%2ByzYUtNTQzZSG6hRo6OBObdJuF6cXPh2t4O0IwPGWUBE0ebofTpn8Rnn1ZP1B8rt%2Fy%2FA%2BIio6IsK84aWOQELwuUaAwf5fc7Yxgp%2B42eYYADNMOFlwwWN8nIidOUNvuh0IJKccHL51l%2B1gEIociiwIeukSMimAfhDOoc%2Fqtby5lnRGSxrrXMqvZjXPRMp5jwT%2BHphaG9c%2FkzA2mkaOEvayJpVPH3aC%2Fd2cdF9J4XiJg0hNgFbWhfLyAvTDFuZfu13Q%2B2kePz8whMTtubPS%2FLaxLJ6DqeLRklD%2FKoE%2Bd2vvr5V%2FpXNIAB3qGs8x9U18VZ6bsTmd2wvV5T7Rf2kgiJByxJgfXYtsCi5rB4TZI%2B%2FuLutFgG1J6kXPVJ0E1ddTjL1aIerkUSFXKqkFU8nJAjxNPteaEHisd6RU%2FiOzXudbB%2BWIHl1rPYLhVt4MyX%2BZ81L4%2FPEReYpgdijFuJeq9M7FX0wQQ0KKYZyeAP6JT6SotsVCTJQVhNfBWAMQVGtHgtC%2FMOyClCYgfkM2mYT5P%2FyPqvcOvAhYOsOd6jB88aUnny5Ly4mpWcJGNotX2jps2gA31h53Xn3tcRMJuxh78GOqUBqGsBrlry4x63WxY%2B6zCvOwf%2FeatW%2FDJigajoSQdSBWw%2BsDgMsRrW1vaCTQzLuCBQYtWUwckAims60OKh8vgrVyYW46J82woIm4FSTIA7MY%2Be1tNh3N2QpREGC5dnQ5v3oYbE8NL3WSVFdtdKWqsqgvq%2FTj5uGalAk5qeEc63io%2BmeD3IFiVIn3LdfFqKQzKYcoNreEfyfgVIPoT6zCF0ZNE77SH8&X-Amz-Signature=e6cde864c0369c628f350e4785dbb7119c5052b3d0ed0e1308dac9abaf309a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JGVITD6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG0QW%2FFQKkn4IIiGgGW0oL9rXAS0use112dVHBEr9tWwIgIjTbhPbW6On315P52EibKHdPzEIDm1l%2BVtskh77TbIwqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnGqvmlw6Uv%2FXmPhircA7Cj7%2F8QMyiJ4IXojZjiiA%2Fn5WgHduGFJtAG%2FEcwMvlmo9tI7%2ByzYUtNTQzZSG6hRo6OBObdJuF6cXPh2t4O0IwPGWUBE0ebofTpn8Rnn1ZP1B8rt%2Fy%2FA%2BIio6IsK84aWOQELwuUaAwf5fc7Yxgp%2B42eYYADNMOFlwwWN8nIidOUNvuh0IJKccHL51l%2B1gEIociiwIeukSMimAfhDOoc%2Fqtby5lnRGSxrrXMqvZjXPRMp5jwT%2BHphaG9c%2FkzA2mkaOEvayJpVPH3aC%2Fd2cdF9J4XiJg0hNgFbWhfLyAvTDFuZfu13Q%2B2kePz8whMTtubPS%2FLaxLJ6DqeLRklD%2FKoE%2Bd2vvr5V%2FpXNIAB3qGs8x9U18VZ6bsTmd2wvV5T7Rf2kgiJByxJgfXYtsCi5rB4TZI%2B%2FuLutFgG1J6kXPVJ0E1ddTjL1aIerkUSFXKqkFU8nJAjxNPteaEHisd6RU%2FiOzXudbB%2BWIHl1rPYLhVt4MyX%2BZ81L4%2FPEReYpgdijFuJeq9M7FX0wQQ0KKYZyeAP6JT6SotsVCTJQVhNfBWAMQVGtHgtC%2FMOyClCYgfkM2mYT5P%2FyPqvcOvAhYOsOd6jB88aUnny5Ly4mpWcJGNotX2jps2gA31h53Xn3tcRMJuxh78GOqUBqGsBrlry4x63WxY%2B6zCvOwf%2FeatW%2FDJigajoSQdSBWw%2BsDgMsRrW1vaCTQzLuCBQYtWUwckAims60OKh8vgrVyYW46J82woIm4FSTIA7MY%2Be1tNh3N2QpREGC5dnQ5v3oYbE8NL3WSVFdtdKWqsqgvq%2FTj5uGalAk5qeEc63io%2BmeD3IFiVIn3LdfFqKQzKYcoNreEfyfgVIPoT6zCF0ZNE77SH8&X-Amz-Signature=d0905176bf11d32b4bbdf7622d2f4f8c5ba606fe8d206accf85c9e802853d2c6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JGVITD6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG0QW%2FFQKkn4IIiGgGW0oL9rXAS0use112dVHBEr9tWwIgIjTbhPbW6On315P52EibKHdPzEIDm1l%2BVtskh77TbIwqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnGqvmlw6Uv%2FXmPhircA7Cj7%2F8QMyiJ4IXojZjiiA%2Fn5WgHduGFJtAG%2FEcwMvlmo9tI7%2ByzYUtNTQzZSG6hRo6OBObdJuF6cXPh2t4O0IwPGWUBE0ebofTpn8Rnn1ZP1B8rt%2Fy%2FA%2BIio6IsK84aWOQELwuUaAwf5fc7Yxgp%2B42eYYADNMOFlwwWN8nIidOUNvuh0IJKccHL51l%2B1gEIociiwIeukSMimAfhDOoc%2Fqtby5lnRGSxrrXMqvZjXPRMp5jwT%2BHphaG9c%2FkzA2mkaOEvayJpVPH3aC%2Fd2cdF9J4XiJg0hNgFbWhfLyAvTDFuZfu13Q%2B2kePz8whMTtubPS%2FLaxLJ6DqeLRklD%2FKoE%2Bd2vvr5V%2FpXNIAB3qGs8x9U18VZ6bsTmd2wvV5T7Rf2kgiJByxJgfXYtsCi5rB4TZI%2B%2FuLutFgG1J6kXPVJ0E1ddTjL1aIerkUSFXKqkFU8nJAjxNPteaEHisd6RU%2FiOzXudbB%2BWIHl1rPYLhVt4MyX%2BZ81L4%2FPEReYpgdijFuJeq9M7FX0wQQ0KKYZyeAP6JT6SotsVCTJQVhNfBWAMQVGtHgtC%2FMOyClCYgfkM2mYT5P%2FyPqvcOvAhYOsOd6jB88aUnny5Ly4mpWcJGNotX2jps2gA31h53Xn3tcRMJuxh78GOqUBqGsBrlry4x63WxY%2B6zCvOwf%2FeatW%2FDJigajoSQdSBWw%2BsDgMsRrW1vaCTQzLuCBQYtWUwckAims60OKh8vgrVyYW46J82woIm4FSTIA7MY%2Be1tNh3N2QpREGC5dnQ5v3oYbE8NL3WSVFdtdKWqsqgvq%2FTj5uGalAk5qeEc63io%2BmeD3IFiVIn3LdfFqKQzKYcoNreEfyfgVIPoT6zCF0ZNE77SH8&X-Amz-Signature=c3e121909687b8ca61b03a89f186bc9bce3e0479d5efb00645ce3b7f3ccb2b83&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

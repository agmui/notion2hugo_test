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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CEYQNU%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDwWchjwzvi8VwGT3vc8%2FqpNCPBA2whQZRgmRDWYuPt5AIhAMKTMhYbH2uGafJ5P8TM3h1Eg4kAtOiMJhWZtH8EvkQoKv8DCDEQABoMNjM3NDIzMTgzODA1Igwe42ssPZnQ8%2FEbB5Yq3ANQmA8qtLMmBlX2a0nk%2F2RkWSN3NYH%2BsVga0As6Nm3a4lp654q%2F1%2FUbugnLpqTtppN7KoUks7EYBtCsRY%2Fnj7MV4DNEVpZhcz1WzUP8Kn1XCGEVnjxKVVWBFeiu41Z6vFCJwB1satczjmhkTinK1gsn9ss7mb7VXIRDUOHdqlRfQCVVQA1o%2BbDYgbGJeavQVJL1XCA3NLDTQ4nCj4UTf3bR95KH7aS1GJp6q6S2ILTzErU%2FPbkwxhpYrcOZlopTHwnDjeDqqjwu6crvElb2%2BwaPcC43hGa%2BcW0AexwtHmP%2FLJd16rgDmhwbYD6tXgKbkEuD%2FiAAG%2BMfoBwCXhgVfapw47DNSqyZvlTgjd1YOiabnLyVvY0vMRbBxITaV1GQqDxCesQ6E5r1BuD2oVDSlHZll%2FLe99nhz6C9HL2BUZLi2YPRs%2FBgOiACBZUxoFAgSoVF2VGTzh6n8hUAaRTidy7A79SYlCo4uJcqXcpYa%2BnP1Pz%2BY7MpCQc6i2VQKzOv7jhjJEqa%2F88NaTw11mW3rK%2BW3qqKlsiwj6rHEqqdgtCf49ImK2caeyVucf8fbzSvuD2YKzHzv4AoKQsCszHZ0QZBea62DmB%2BEfaMmDKUaTG423WO%2Be0F88iKkHITmTDd%2FszBBjqkATe7tNXVoePjpoSwjeG%2FInKaH2%2BnI5tfUGU8rNl5geHKhhVTeT9US91Lr42NIKrpy9hlAwC6sEe675rzSLgLr6BGgMLgGi%2BGPedJlN7NvP1wGeW%2Bkwn7sUxpo6G2ntHDRfTWr3pqOIAH3ZAEBJAp7zUtUyqDpyrE8KtActCLXLnkm7r596szsxcLRTZBlL0KXOymPcAfmGkEOQRmHHYvvYoZ2z4E&X-Amz-Signature=38fceda454f5db84930ffc64cc89993ca6c8f5d2241fa9a3611a990a36b65734&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CEYQNU%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDwWchjwzvi8VwGT3vc8%2FqpNCPBA2whQZRgmRDWYuPt5AIhAMKTMhYbH2uGafJ5P8TM3h1Eg4kAtOiMJhWZtH8EvkQoKv8DCDEQABoMNjM3NDIzMTgzODA1Igwe42ssPZnQ8%2FEbB5Yq3ANQmA8qtLMmBlX2a0nk%2F2RkWSN3NYH%2BsVga0As6Nm3a4lp654q%2F1%2FUbugnLpqTtppN7KoUks7EYBtCsRY%2Fnj7MV4DNEVpZhcz1WzUP8Kn1XCGEVnjxKVVWBFeiu41Z6vFCJwB1satczjmhkTinK1gsn9ss7mb7VXIRDUOHdqlRfQCVVQA1o%2BbDYgbGJeavQVJL1XCA3NLDTQ4nCj4UTf3bR95KH7aS1GJp6q6S2ILTzErU%2FPbkwxhpYrcOZlopTHwnDjeDqqjwu6crvElb2%2BwaPcC43hGa%2BcW0AexwtHmP%2FLJd16rgDmhwbYD6tXgKbkEuD%2FiAAG%2BMfoBwCXhgVfapw47DNSqyZvlTgjd1YOiabnLyVvY0vMRbBxITaV1GQqDxCesQ6E5r1BuD2oVDSlHZll%2FLe99nhz6C9HL2BUZLi2YPRs%2FBgOiACBZUxoFAgSoVF2VGTzh6n8hUAaRTidy7A79SYlCo4uJcqXcpYa%2BnP1Pz%2BY7MpCQc6i2VQKzOv7jhjJEqa%2F88NaTw11mW3rK%2BW3qqKlsiwj6rHEqqdgtCf49ImK2caeyVucf8fbzSvuD2YKzHzv4AoKQsCszHZ0QZBea62DmB%2BEfaMmDKUaTG423WO%2Be0F88iKkHITmTDd%2FszBBjqkATe7tNXVoePjpoSwjeG%2FInKaH2%2BnI5tfUGU8rNl5geHKhhVTeT9US91Lr42NIKrpy9hlAwC6sEe675rzSLgLr6BGgMLgGi%2BGPedJlN7NvP1wGeW%2Bkwn7sUxpo6G2ntHDRfTWr3pqOIAH3ZAEBJAp7zUtUyqDpyrE8KtActCLXLnkm7r596szsxcLRTZBlL0KXOymPcAfmGkEOQRmHHYvvYoZ2z4E&X-Amz-Signature=40a33c198d9da34da48400e7b6054555210426891d152a9c898dc90d3390675c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CEYQNU%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDwWchjwzvi8VwGT3vc8%2FqpNCPBA2whQZRgmRDWYuPt5AIhAMKTMhYbH2uGafJ5P8TM3h1Eg4kAtOiMJhWZtH8EvkQoKv8DCDEQABoMNjM3NDIzMTgzODA1Igwe42ssPZnQ8%2FEbB5Yq3ANQmA8qtLMmBlX2a0nk%2F2RkWSN3NYH%2BsVga0As6Nm3a4lp654q%2F1%2FUbugnLpqTtppN7KoUks7EYBtCsRY%2Fnj7MV4DNEVpZhcz1WzUP8Kn1XCGEVnjxKVVWBFeiu41Z6vFCJwB1satczjmhkTinK1gsn9ss7mb7VXIRDUOHdqlRfQCVVQA1o%2BbDYgbGJeavQVJL1XCA3NLDTQ4nCj4UTf3bR95KH7aS1GJp6q6S2ILTzErU%2FPbkwxhpYrcOZlopTHwnDjeDqqjwu6crvElb2%2BwaPcC43hGa%2BcW0AexwtHmP%2FLJd16rgDmhwbYD6tXgKbkEuD%2FiAAG%2BMfoBwCXhgVfapw47DNSqyZvlTgjd1YOiabnLyVvY0vMRbBxITaV1GQqDxCesQ6E5r1BuD2oVDSlHZll%2FLe99nhz6C9HL2BUZLi2YPRs%2FBgOiACBZUxoFAgSoVF2VGTzh6n8hUAaRTidy7A79SYlCo4uJcqXcpYa%2BnP1Pz%2BY7MpCQc6i2VQKzOv7jhjJEqa%2F88NaTw11mW3rK%2BW3qqKlsiwj6rHEqqdgtCf49ImK2caeyVucf8fbzSvuD2YKzHzv4AoKQsCszHZ0QZBea62DmB%2BEfaMmDKUaTG423WO%2Be0F88iKkHITmTDd%2FszBBjqkATe7tNXVoePjpoSwjeG%2FInKaH2%2BnI5tfUGU8rNl5geHKhhVTeT9US91Lr42NIKrpy9hlAwC6sEe675rzSLgLr6BGgMLgGi%2BGPedJlN7NvP1wGeW%2Bkwn7sUxpo6G2ntHDRfTWr3pqOIAH3ZAEBJAp7zUtUyqDpyrE8KtActCLXLnkm7r596szsxcLRTZBlL0KXOymPcAfmGkEOQRmHHYvvYoZ2z4E&X-Amz-Signature=7839cbc4566d31ed79be826860ac5efb0243e8422da2fdf8116d4860ecab4fb5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CEYQNU%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDwWchjwzvi8VwGT3vc8%2FqpNCPBA2whQZRgmRDWYuPt5AIhAMKTMhYbH2uGafJ5P8TM3h1Eg4kAtOiMJhWZtH8EvkQoKv8DCDEQABoMNjM3NDIzMTgzODA1Igwe42ssPZnQ8%2FEbB5Yq3ANQmA8qtLMmBlX2a0nk%2F2RkWSN3NYH%2BsVga0As6Nm3a4lp654q%2F1%2FUbugnLpqTtppN7KoUks7EYBtCsRY%2Fnj7MV4DNEVpZhcz1WzUP8Kn1XCGEVnjxKVVWBFeiu41Z6vFCJwB1satczjmhkTinK1gsn9ss7mb7VXIRDUOHdqlRfQCVVQA1o%2BbDYgbGJeavQVJL1XCA3NLDTQ4nCj4UTf3bR95KH7aS1GJp6q6S2ILTzErU%2FPbkwxhpYrcOZlopTHwnDjeDqqjwu6crvElb2%2BwaPcC43hGa%2BcW0AexwtHmP%2FLJd16rgDmhwbYD6tXgKbkEuD%2FiAAG%2BMfoBwCXhgVfapw47DNSqyZvlTgjd1YOiabnLyVvY0vMRbBxITaV1GQqDxCesQ6E5r1BuD2oVDSlHZll%2FLe99nhz6C9HL2BUZLi2YPRs%2FBgOiACBZUxoFAgSoVF2VGTzh6n8hUAaRTidy7A79SYlCo4uJcqXcpYa%2BnP1Pz%2BY7MpCQc6i2VQKzOv7jhjJEqa%2F88NaTw11mW3rK%2BW3qqKlsiwj6rHEqqdgtCf49ImK2caeyVucf8fbzSvuD2YKzHzv4AoKQsCszHZ0QZBea62DmB%2BEfaMmDKUaTG423WO%2Be0F88iKkHITmTDd%2FszBBjqkATe7tNXVoePjpoSwjeG%2FInKaH2%2BnI5tfUGU8rNl5geHKhhVTeT9US91Lr42NIKrpy9hlAwC6sEe675rzSLgLr6BGgMLgGi%2BGPedJlN7NvP1wGeW%2Bkwn7sUxpo6G2ntHDRfTWr3pqOIAH3ZAEBJAp7zUtUyqDpyrE8KtActCLXLnkm7r596szsxcLRTZBlL0KXOymPcAfmGkEOQRmHHYvvYoZ2z4E&X-Amz-Signature=5db0ff72c35aa7190234ab2e28a1e25025faeac21ef6d46c3091ade6e30c87f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CEYQNU%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDwWchjwzvi8VwGT3vc8%2FqpNCPBA2whQZRgmRDWYuPt5AIhAMKTMhYbH2uGafJ5P8TM3h1Eg4kAtOiMJhWZtH8EvkQoKv8DCDEQABoMNjM3NDIzMTgzODA1Igwe42ssPZnQ8%2FEbB5Yq3ANQmA8qtLMmBlX2a0nk%2F2RkWSN3NYH%2BsVga0As6Nm3a4lp654q%2F1%2FUbugnLpqTtppN7KoUks7EYBtCsRY%2Fnj7MV4DNEVpZhcz1WzUP8Kn1XCGEVnjxKVVWBFeiu41Z6vFCJwB1satczjmhkTinK1gsn9ss7mb7VXIRDUOHdqlRfQCVVQA1o%2BbDYgbGJeavQVJL1XCA3NLDTQ4nCj4UTf3bR95KH7aS1GJp6q6S2ILTzErU%2FPbkwxhpYrcOZlopTHwnDjeDqqjwu6crvElb2%2BwaPcC43hGa%2BcW0AexwtHmP%2FLJd16rgDmhwbYD6tXgKbkEuD%2FiAAG%2BMfoBwCXhgVfapw47DNSqyZvlTgjd1YOiabnLyVvY0vMRbBxITaV1GQqDxCesQ6E5r1BuD2oVDSlHZll%2FLe99nhz6C9HL2BUZLi2YPRs%2FBgOiACBZUxoFAgSoVF2VGTzh6n8hUAaRTidy7A79SYlCo4uJcqXcpYa%2BnP1Pz%2BY7MpCQc6i2VQKzOv7jhjJEqa%2F88NaTw11mW3rK%2BW3qqKlsiwj6rHEqqdgtCf49ImK2caeyVucf8fbzSvuD2YKzHzv4AoKQsCszHZ0QZBea62DmB%2BEfaMmDKUaTG423WO%2Be0F88iKkHITmTDd%2FszBBjqkATe7tNXVoePjpoSwjeG%2FInKaH2%2BnI5tfUGU8rNl5geHKhhVTeT9US91Lr42NIKrpy9hlAwC6sEe675rzSLgLr6BGgMLgGi%2BGPedJlN7NvP1wGeW%2Bkwn7sUxpo6G2ntHDRfTWr3pqOIAH3ZAEBJAp7zUtUyqDpyrE8KtActCLXLnkm7r596szsxcLRTZBlL0KXOymPcAfmGkEOQRmHHYvvYoZ2z4E&X-Amz-Signature=8f21633638a25f7c3d65af76abcbad742d087aa975512b59504ffe1f86449114&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CEYQNU%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDwWchjwzvi8VwGT3vc8%2FqpNCPBA2whQZRgmRDWYuPt5AIhAMKTMhYbH2uGafJ5P8TM3h1Eg4kAtOiMJhWZtH8EvkQoKv8DCDEQABoMNjM3NDIzMTgzODA1Igwe42ssPZnQ8%2FEbB5Yq3ANQmA8qtLMmBlX2a0nk%2F2RkWSN3NYH%2BsVga0As6Nm3a4lp654q%2F1%2FUbugnLpqTtppN7KoUks7EYBtCsRY%2Fnj7MV4DNEVpZhcz1WzUP8Kn1XCGEVnjxKVVWBFeiu41Z6vFCJwB1satczjmhkTinK1gsn9ss7mb7VXIRDUOHdqlRfQCVVQA1o%2BbDYgbGJeavQVJL1XCA3NLDTQ4nCj4UTf3bR95KH7aS1GJp6q6S2ILTzErU%2FPbkwxhpYrcOZlopTHwnDjeDqqjwu6crvElb2%2BwaPcC43hGa%2BcW0AexwtHmP%2FLJd16rgDmhwbYD6tXgKbkEuD%2FiAAG%2BMfoBwCXhgVfapw47DNSqyZvlTgjd1YOiabnLyVvY0vMRbBxITaV1GQqDxCesQ6E5r1BuD2oVDSlHZll%2FLe99nhz6C9HL2BUZLi2YPRs%2FBgOiACBZUxoFAgSoVF2VGTzh6n8hUAaRTidy7A79SYlCo4uJcqXcpYa%2BnP1Pz%2BY7MpCQc6i2VQKzOv7jhjJEqa%2F88NaTw11mW3rK%2BW3qqKlsiwj6rHEqqdgtCf49ImK2caeyVucf8fbzSvuD2YKzHzv4AoKQsCszHZ0QZBea62DmB%2BEfaMmDKUaTG423WO%2Be0F88iKkHITmTDd%2FszBBjqkATe7tNXVoePjpoSwjeG%2FInKaH2%2BnI5tfUGU8rNl5geHKhhVTeT9US91Lr42NIKrpy9hlAwC6sEe675rzSLgLr6BGgMLgGi%2BGPedJlN7NvP1wGeW%2Bkwn7sUxpo6G2ntHDRfTWr3pqOIAH3ZAEBJAp7zUtUyqDpyrE8KtActCLXLnkm7r596szsxcLRTZBlL0KXOymPcAfmGkEOQRmHHYvvYoZ2z4E&X-Amz-Signature=e3829c904b56ddd727fd73ca777b146bc4fee01179437d3d8fc7a0f795a52502&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3CEYQNU%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T160858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDwWchjwzvi8VwGT3vc8%2FqpNCPBA2whQZRgmRDWYuPt5AIhAMKTMhYbH2uGafJ5P8TM3h1Eg4kAtOiMJhWZtH8EvkQoKv8DCDEQABoMNjM3NDIzMTgzODA1Igwe42ssPZnQ8%2FEbB5Yq3ANQmA8qtLMmBlX2a0nk%2F2RkWSN3NYH%2BsVga0As6Nm3a4lp654q%2F1%2FUbugnLpqTtppN7KoUks7EYBtCsRY%2Fnj7MV4DNEVpZhcz1WzUP8Kn1XCGEVnjxKVVWBFeiu41Z6vFCJwB1satczjmhkTinK1gsn9ss7mb7VXIRDUOHdqlRfQCVVQA1o%2BbDYgbGJeavQVJL1XCA3NLDTQ4nCj4UTf3bR95KH7aS1GJp6q6S2ILTzErU%2FPbkwxhpYrcOZlopTHwnDjeDqqjwu6crvElb2%2BwaPcC43hGa%2BcW0AexwtHmP%2FLJd16rgDmhwbYD6tXgKbkEuD%2FiAAG%2BMfoBwCXhgVfapw47DNSqyZvlTgjd1YOiabnLyVvY0vMRbBxITaV1GQqDxCesQ6E5r1BuD2oVDSlHZll%2FLe99nhz6C9HL2BUZLi2YPRs%2FBgOiACBZUxoFAgSoVF2VGTzh6n8hUAaRTidy7A79SYlCo4uJcqXcpYa%2BnP1Pz%2BY7MpCQc6i2VQKzOv7jhjJEqa%2F88NaTw11mW3rK%2BW3qqKlsiwj6rHEqqdgtCf49ImK2caeyVucf8fbzSvuD2YKzHzv4AoKQsCszHZ0QZBea62DmB%2BEfaMmDKUaTG423WO%2Be0F88iKkHITmTDd%2FszBBjqkATe7tNXVoePjpoSwjeG%2FInKaH2%2BnI5tfUGU8rNl5geHKhhVTeT9US91Lr42NIKrpy9hlAwC6sEe675rzSLgLr6BGgMLgGi%2BGPedJlN7NvP1wGeW%2Bkwn7sUxpo6G2ntHDRfTWr3pqOIAH3ZAEBJAp7zUtUyqDpyrE8KtActCLXLnkm7r596szsxcLRTZBlL0KXOymPcAfmGkEOQRmHHYvvYoZ2z4E&X-Amz-Signature=8d93065869683f2d98d545d0915b8450d94ce8c4b59aa267571d6aefb3f09da3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

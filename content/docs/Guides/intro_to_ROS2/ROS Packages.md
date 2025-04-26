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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46V24LJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BV4JoRylUsVj9PaOcUONc25uacdleoB7GdL%2FzPxw71AiB6YG3fz1dGyzHBCbDNFoq7AtpqIcuDunoCseR0ulL%2BSyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM7uurajv8BmQM9kcPKtwD2Izs3tY2eq94OGDOkjkjZcQ6PgcVTdM%2BmYTL7KSyt%2FHKaBILKnOGhMqRJRrMNCsomuG9qY8Bvgy7iT6r%2F8bGwE7HRhYXJykWuu63RoFbnZliKWqt31phmPymOqMvOHBitIuWUz%2BknwdpWq%2FSzGtkvTsCIHG18t4%2Bi0nBM7x8GLnchZlp1hSlISyqEDr8M0mjgSOrFsOELjcwN%2FnJ%2BiR5%2FiuqJ2SFNvAi3tPWMOiLYwqZFWA5uNaU4r%2FlspoUIzmxohO4zcya2ejJq7JE1xFTMfExGSGPGVDVjamJQ%2B%2BbZlFQ%2FtZjHJcQYobCXb6hzmTdtUKZQSQr5ZD8w0wW5z7tdYbJhu7LZSUKlgp%2BxJZy5rg44O6AuN0ONpc8rpS8anV7gFwtEcfaIHW1OV2TFJaFfolrCO8HTDiAsiZh%2BJ7y41PdLe4zhkz2lNG5eGM%2BbzU1LdRk9oPdowEZscjBvgtby2kXxdPHJWMPTKaGYFtXYcsDyuSSDukpiFEzTlQLETXfo8M3L4LvfKVbmbe2%2BNI0RXntVXL%2BmsEs4AUrJrFVwAZ2BhVsxocMUs7J6RPjKAmTdpuIAZ0KJriEX4XSmxI7S5vT%2FMTk06UOM4e58qMyTAtuptJXWa3wUbxs5H4w7uazwAY6pgFe8mMBUOzvDde3TDs6KTBpZfjD8Hb%2BkIGMs6dHG7N51KXKorh2bhuRMc4tTJeIvP0%2BoAPyW%2FgXjywxi0%2FIbfRPDt%2Fr1%2FPJn19GtxgOJg2QBeU5re2B8SQR5h04OOOUO3y2FOiDIxwqHpdntO0Su6rghOvROW3cqIpeYQUdIu0Y3XxlzQuWP31FGLRFjn054Gzx0KegcOxV5EQpzTCL07DMVTU4dez6&X-Amz-Signature=8bb582915234856aec091fdb210389b7e1b36b5f1525ade93a450ecab9910c64&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46V24LJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BV4JoRylUsVj9PaOcUONc25uacdleoB7GdL%2FzPxw71AiB6YG3fz1dGyzHBCbDNFoq7AtpqIcuDunoCseR0ulL%2BSyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM7uurajv8BmQM9kcPKtwD2Izs3tY2eq94OGDOkjkjZcQ6PgcVTdM%2BmYTL7KSyt%2FHKaBILKnOGhMqRJRrMNCsomuG9qY8Bvgy7iT6r%2F8bGwE7HRhYXJykWuu63RoFbnZliKWqt31phmPymOqMvOHBitIuWUz%2BknwdpWq%2FSzGtkvTsCIHG18t4%2Bi0nBM7x8GLnchZlp1hSlISyqEDr8M0mjgSOrFsOELjcwN%2FnJ%2BiR5%2FiuqJ2SFNvAi3tPWMOiLYwqZFWA5uNaU4r%2FlspoUIzmxohO4zcya2ejJq7JE1xFTMfExGSGPGVDVjamJQ%2B%2BbZlFQ%2FtZjHJcQYobCXb6hzmTdtUKZQSQr5ZD8w0wW5z7tdYbJhu7LZSUKlgp%2BxJZy5rg44O6AuN0ONpc8rpS8anV7gFwtEcfaIHW1OV2TFJaFfolrCO8HTDiAsiZh%2BJ7y41PdLe4zhkz2lNG5eGM%2BbzU1LdRk9oPdowEZscjBvgtby2kXxdPHJWMPTKaGYFtXYcsDyuSSDukpiFEzTlQLETXfo8M3L4LvfKVbmbe2%2BNI0RXntVXL%2BmsEs4AUrJrFVwAZ2BhVsxocMUs7J6RPjKAmTdpuIAZ0KJriEX4XSmxI7S5vT%2FMTk06UOM4e58qMyTAtuptJXWa3wUbxs5H4w7uazwAY6pgFe8mMBUOzvDde3TDs6KTBpZfjD8Hb%2BkIGMs6dHG7N51KXKorh2bhuRMc4tTJeIvP0%2BoAPyW%2FgXjywxi0%2FIbfRPDt%2Fr1%2FPJn19GtxgOJg2QBeU5re2B8SQR5h04OOOUO3y2FOiDIxwqHpdntO0Su6rghOvROW3cqIpeYQUdIu0Y3XxlzQuWP31FGLRFjn054Gzx0KegcOxV5EQpzTCL07DMVTU4dez6&X-Amz-Signature=5419b94e2f061a7d90e397681dcaa687f0e702b5e31a0a1632bb1afee23f9cad&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46V24LJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BV4JoRylUsVj9PaOcUONc25uacdleoB7GdL%2FzPxw71AiB6YG3fz1dGyzHBCbDNFoq7AtpqIcuDunoCseR0ulL%2BSyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM7uurajv8BmQM9kcPKtwD2Izs3tY2eq94OGDOkjkjZcQ6PgcVTdM%2BmYTL7KSyt%2FHKaBILKnOGhMqRJRrMNCsomuG9qY8Bvgy7iT6r%2F8bGwE7HRhYXJykWuu63RoFbnZliKWqt31phmPymOqMvOHBitIuWUz%2BknwdpWq%2FSzGtkvTsCIHG18t4%2Bi0nBM7x8GLnchZlp1hSlISyqEDr8M0mjgSOrFsOELjcwN%2FnJ%2BiR5%2FiuqJ2SFNvAi3tPWMOiLYwqZFWA5uNaU4r%2FlspoUIzmxohO4zcya2ejJq7JE1xFTMfExGSGPGVDVjamJQ%2B%2BbZlFQ%2FtZjHJcQYobCXb6hzmTdtUKZQSQr5ZD8w0wW5z7tdYbJhu7LZSUKlgp%2BxJZy5rg44O6AuN0ONpc8rpS8anV7gFwtEcfaIHW1OV2TFJaFfolrCO8HTDiAsiZh%2BJ7y41PdLe4zhkz2lNG5eGM%2BbzU1LdRk9oPdowEZscjBvgtby2kXxdPHJWMPTKaGYFtXYcsDyuSSDukpiFEzTlQLETXfo8M3L4LvfKVbmbe2%2BNI0RXntVXL%2BmsEs4AUrJrFVwAZ2BhVsxocMUs7J6RPjKAmTdpuIAZ0KJriEX4XSmxI7S5vT%2FMTk06UOM4e58qMyTAtuptJXWa3wUbxs5H4w7uazwAY6pgFe8mMBUOzvDde3TDs6KTBpZfjD8Hb%2BkIGMs6dHG7N51KXKorh2bhuRMc4tTJeIvP0%2BoAPyW%2FgXjywxi0%2FIbfRPDt%2Fr1%2FPJn19GtxgOJg2QBeU5re2B8SQR5h04OOOUO3y2FOiDIxwqHpdntO0Su6rghOvROW3cqIpeYQUdIu0Y3XxlzQuWP31FGLRFjn054Gzx0KegcOxV5EQpzTCL07DMVTU4dez6&X-Amz-Signature=27ff94cf6788215012baf528afc2ce766e0e691c8c3661901ca4c8252e25592f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46V24LJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BV4JoRylUsVj9PaOcUONc25uacdleoB7GdL%2FzPxw71AiB6YG3fz1dGyzHBCbDNFoq7AtpqIcuDunoCseR0ulL%2BSyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM7uurajv8BmQM9kcPKtwD2Izs3tY2eq94OGDOkjkjZcQ6PgcVTdM%2BmYTL7KSyt%2FHKaBILKnOGhMqRJRrMNCsomuG9qY8Bvgy7iT6r%2F8bGwE7HRhYXJykWuu63RoFbnZliKWqt31phmPymOqMvOHBitIuWUz%2BknwdpWq%2FSzGtkvTsCIHG18t4%2Bi0nBM7x8GLnchZlp1hSlISyqEDr8M0mjgSOrFsOELjcwN%2FnJ%2BiR5%2FiuqJ2SFNvAi3tPWMOiLYwqZFWA5uNaU4r%2FlspoUIzmxohO4zcya2ejJq7JE1xFTMfExGSGPGVDVjamJQ%2B%2BbZlFQ%2FtZjHJcQYobCXb6hzmTdtUKZQSQr5ZD8w0wW5z7tdYbJhu7LZSUKlgp%2BxJZy5rg44O6AuN0ONpc8rpS8anV7gFwtEcfaIHW1OV2TFJaFfolrCO8HTDiAsiZh%2BJ7y41PdLe4zhkz2lNG5eGM%2BbzU1LdRk9oPdowEZscjBvgtby2kXxdPHJWMPTKaGYFtXYcsDyuSSDukpiFEzTlQLETXfo8M3L4LvfKVbmbe2%2BNI0RXntVXL%2BmsEs4AUrJrFVwAZ2BhVsxocMUs7J6RPjKAmTdpuIAZ0KJriEX4XSmxI7S5vT%2FMTk06UOM4e58qMyTAtuptJXWa3wUbxs5H4w7uazwAY6pgFe8mMBUOzvDde3TDs6KTBpZfjD8Hb%2BkIGMs6dHG7N51KXKorh2bhuRMc4tTJeIvP0%2BoAPyW%2FgXjywxi0%2FIbfRPDt%2Fr1%2FPJn19GtxgOJg2QBeU5re2B8SQR5h04OOOUO3y2FOiDIxwqHpdntO0Su6rghOvROW3cqIpeYQUdIu0Y3XxlzQuWP31FGLRFjn054Gzx0KegcOxV5EQpzTCL07DMVTU4dez6&X-Amz-Signature=b7791ba353e7f6b246cd47b03a7c8778b95628beab2a617e69c64044b35f838e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46V24LJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BV4JoRylUsVj9PaOcUONc25uacdleoB7GdL%2FzPxw71AiB6YG3fz1dGyzHBCbDNFoq7AtpqIcuDunoCseR0ulL%2BSyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM7uurajv8BmQM9kcPKtwD2Izs3tY2eq94OGDOkjkjZcQ6PgcVTdM%2BmYTL7KSyt%2FHKaBILKnOGhMqRJRrMNCsomuG9qY8Bvgy7iT6r%2F8bGwE7HRhYXJykWuu63RoFbnZliKWqt31phmPymOqMvOHBitIuWUz%2BknwdpWq%2FSzGtkvTsCIHG18t4%2Bi0nBM7x8GLnchZlp1hSlISyqEDr8M0mjgSOrFsOELjcwN%2FnJ%2BiR5%2FiuqJ2SFNvAi3tPWMOiLYwqZFWA5uNaU4r%2FlspoUIzmxohO4zcya2ejJq7JE1xFTMfExGSGPGVDVjamJQ%2B%2BbZlFQ%2FtZjHJcQYobCXb6hzmTdtUKZQSQr5ZD8w0wW5z7tdYbJhu7LZSUKlgp%2BxJZy5rg44O6AuN0ONpc8rpS8anV7gFwtEcfaIHW1OV2TFJaFfolrCO8HTDiAsiZh%2BJ7y41PdLe4zhkz2lNG5eGM%2BbzU1LdRk9oPdowEZscjBvgtby2kXxdPHJWMPTKaGYFtXYcsDyuSSDukpiFEzTlQLETXfo8M3L4LvfKVbmbe2%2BNI0RXntVXL%2BmsEs4AUrJrFVwAZ2BhVsxocMUs7J6RPjKAmTdpuIAZ0KJriEX4XSmxI7S5vT%2FMTk06UOM4e58qMyTAtuptJXWa3wUbxs5H4w7uazwAY6pgFe8mMBUOzvDde3TDs6KTBpZfjD8Hb%2BkIGMs6dHG7N51KXKorh2bhuRMc4tTJeIvP0%2BoAPyW%2FgXjywxi0%2FIbfRPDt%2Fr1%2FPJn19GtxgOJg2QBeU5re2B8SQR5h04OOOUO3y2FOiDIxwqHpdntO0Su6rghOvROW3cqIpeYQUdIu0Y3XxlzQuWP31FGLRFjn054Gzx0KegcOxV5EQpzTCL07DMVTU4dez6&X-Amz-Signature=69db6f24750d4b0748674d2349a1fbcec4d4673e4ec857a05018a1a92515c83f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46V24LJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BV4JoRylUsVj9PaOcUONc25uacdleoB7GdL%2FzPxw71AiB6YG3fz1dGyzHBCbDNFoq7AtpqIcuDunoCseR0ulL%2BSyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM7uurajv8BmQM9kcPKtwD2Izs3tY2eq94OGDOkjkjZcQ6PgcVTdM%2BmYTL7KSyt%2FHKaBILKnOGhMqRJRrMNCsomuG9qY8Bvgy7iT6r%2F8bGwE7HRhYXJykWuu63RoFbnZliKWqt31phmPymOqMvOHBitIuWUz%2BknwdpWq%2FSzGtkvTsCIHG18t4%2Bi0nBM7x8GLnchZlp1hSlISyqEDr8M0mjgSOrFsOELjcwN%2FnJ%2BiR5%2FiuqJ2SFNvAi3tPWMOiLYwqZFWA5uNaU4r%2FlspoUIzmxohO4zcya2ejJq7JE1xFTMfExGSGPGVDVjamJQ%2B%2BbZlFQ%2FtZjHJcQYobCXb6hzmTdtUKZQSQr5ZD8w0wW5z7tdYbJhu7LZSUKlgp%2BxJZy5rg44O6AuN0ONpc8rpS8anV7gFwtEcfaIHW1OV2TFJaFfolrCO8HTDiAsiZh%2BJ7y41PdLe4zhkz2lNG5eGM%2BbzU1LdRk9oPdowEZscjBvgtby2kXxdPHJWMPTKaGYFtXYcsDyuSSDukpiFEzTlQLETXfo8M3L4LvfKVbmbe2%2BNI0RXntVXL%2BmsEs4AUrJrFVwAZ2BhVsxocMUs7J6RPjKAmTdpuIAZ0KJriEX4XSmxI7S5vT%2FMTk06UOM4e58qMyTAtuptJXWa3wUbxs5H4w7uazwAY6pgFe8mMBUOzvDde3TDs6KTBpZfjD8Hb%2BkIGMs6dHG7N51KXKorh2bhuRMc4tTJeIvP0%2BoAPyW%2FgXjywxi0%2FIbfRPDt%2Fr1%2FPJn19GtxgOJg2QBeU5re2B8SQR5h04OOOUO3y2FOiDIxwqHpdntO0Su6rghOvROW3cqIpeYQUdIu0Y3XxlzQuWP31FGLRFjn054Gzx0KegcOxV5EQpzTCL07DMVTU4dez6&X-Amz-Signature=5ba47465ee6b06dc3bac1eafa56040f0359a5e47e33643de9d682f9204e6dc5a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X46V24LJ%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2BV4JoRylUsVj9PaOcUONc25uacdleoB7GdL%2FzPxw71AiB6YG3fz1dGyzHBCbDNFoq7AtpqIcuDunoCseR0ulL%2BSyr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM7uurajv8BmQM9kcPKtwD2Izs3tY2eq94OGDOkjkjZcQ6PgcVTdM%2BmYTL7KSyt%2FHKaBILKnOGhMqRJRrMNCsomuG9qY8Bvgy7iT6r%2F8bGwE7HRhYXJykWuu63RoFbnZliKWqt31phmPymOqMvOHBitIuWUz%2BknwdpWq%2FSzGtkvTsCIHG18t4%2Bi0nBM7x8GLnchZlp1hSlISyqEDr8M0mjgSOrFsOELjcwN%2FnJ%2BiR5%2FiuqJ2SFNvAi3tPWMOiLYwqZFWA5uNaU4r%2FlspoUIzmxohO4zcya2ejJq7JE1xFTMfExGSGPGVDVjamJQ%2B%2BbZlFQ%2FtZjHJcQYobCXb6hzmTdtUKZQSQr5ZD8w0wW5z7tdYbJhu7LZSUKlgp%2BxJZy5rg44O6AuN0ONpc8rpS8anV7gFwtEcfaIHW1OV2TFJaFfolrCO8HTDiAsiZh%2BJ7y41PdLe4zhkz2lNG5eGM%2BbzU1LdRk9oPdowEZscjBvgtby2kXxdPHJWMPTKaGYFtXYcsDyuSSDukpiFEzTlQLETXfo8M3L4LvfKVbmbe2%2BNI0RXntVXL%2BmsEs4AUrJrFVwAZ2BhVsxocMUs7J6RPjKAmTdpuIAZ0KJriEX4XSmxI7S5vT%2FMTk06UOM4e58qMyTAtuptJXWa3wUbxs5H4w7uazwAY6pgFe8mMBUOzvDde3TDs6KTBpZfjD8Hb%2BkIGMs6dHG7N51KXKorh2bhuRMc4tTJeIvP0%2BoAPyW%2FgXjywxi0%2FIbfRPDt%2Fr1%2FPJn19GtxgOJg2QBeU5re2B8SQR5h04OOOUO3y2FOiDIxwqHpdntO0Su6rghOvROW3cqIpeYQUdIu0Y3XxlzQuWP31FGLRFjn054Gzx0KegcOxV5EQpzTCL07DMVTU4dez6&X-Amz-Signature=036dff19c08d72e6f5ae74e609c098e7d0597ba4845f7f02fae547b6e9400de0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

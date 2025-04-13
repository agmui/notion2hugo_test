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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRF3MULO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCrDZSX1D60oDA2U9awrqbg832HTkw%2Fsu1DoSJGg17a7QIhAJ7lsUBPY7JEIiOoCZxmJgTJUBCI6EK5aGWrx9CulRTIKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5buoslIeg9izAECcq3AN4VhbZjkcC62oh0NiVzOrVtOnWketKkxOcC4IrTnu9QZFVfh4N0QLoLVwas9LY54Dzne2z51OaAr%2FQ%2FZ3vVUQ87caddWEYxcAkiGtjtoykRLQ87t1wX9yS6eImFZRIXDmbpfBbzEn7rFPkyU7oiEUbEVeHpQ3gzh4W8iumPmJf1rXjH7iHpgAt1TBQpwBd6EJ1%2BRuk2e0A0qCpVt%2F%2FCEu1GKXqUOQRPhGtv5Tux4q%2BMXDZIkqRVO8M5YOUa4cyBjqbEXrc%2BruYdDJWEcpIRQdDb0dhoq%2FMctZ6hSMOtSbhQ2aw4oAnHxzKGX1pQiYsxqNaWu481MA8ujLg1BKSv5Yn2Xl44djZp6ElrcAD0XDxQeuSac1GutwIJvsi14qwT6zoGzDY5pIP7kTdNa4qZIg%2B5sPq9s362vvILBFVkl7xh3cROK7aW%2F88H9cF9aK4yaXlK1V5TAltj4XyesylVBkEw1f3PkS96isoYAGtLix8yWE55kqGM5z8RDOcueyXzzGjfCP5%2B0QlkntG2yvDTMGqYjh34lZgIZbfGW0iWEdGmKnu8UdNPouozAccxIosyInU0ZhV6Z8HdXM%2FuoGY3RIiiiz8n8ZL86AmvbkkuPRLXaklrd3ixh%2F0D849WzCi0Oy%2FBjqkARdwyhT%2F185Oonvej2zXwWGHBluJ90FWKbSF0Xr8PJUoXhokFDhzj2XV1k2vlm9VTP9rdkAS7ro5R%2FW9jXTgBcG3PFW4Awf7%2FBQa51Se3dSmVP0yS1GpFpkJikqCdPF0FedWcP1gxK%2F%2BNsdjYM9KNX%2BCmu3zq0VIe2UXeciSFMJD7Ek5pxwV3V6W%2Fw1IXGxGMHnlwb5%2F%2F0co4ON1zGzPpt0aLD9L&X-Amz-Signature=3605a198a54a0d06a60eaf0b294336176ed57a105b70a6310a1059eb13fcf0a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRF3MULO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCrDZSX1D60oDA2U9awrqbg832HTkw%2Fsu1DoSJGg17a7QIhAJ7lsUBPY7JEIiOoCZxmJgTJUBCI6EK5aGWrx9CulRTIKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5buoslIeg9izAECcq3AN4VhbZjkcC62oh0NiVzOrVtOnWketKkxOcC4IrTnu9QZFVfh4N0QLoLVwas9LY54Dzne2z51OaAr%2FQ%2FZ3vVUQ87caddWEYxcAkiGtjtoykRLQ87t1wX9yS6eImFZRIXDmbpfBbzEn7rFPkyU7oiEUbEVeHpQ3gzh4W8iumPmJf1rXjH7iHpgAt1TBQpwBd6EJ1%2BRuk2e0A0qCpVt%2F%2FCEu1GKXqUOQRPhGtv5Tux4q%2BMXDZIkqRVO8M5YOUa4cyBjqbEXrc%2BruYdDJWEcpIRQdDb0dhoq%2FMctZ6hSMOtSbhQ2aw4oAnHxzKGX1pQiYsxqNaWu481MA8ujLg1BKSv5Yn2Xl44djZp6ElrcAD0XDxQeuSac1GutwIJvsi14qwT6zoGzDY5pIP7kTdNa4qZIg%2B5sPq9s362vvILBFVkl7xh3cROK7aW%2F88H9cF9aK4yaXlK1V5TAltj4XyesylVBkEw1f3PkS96isoYAGtLix8yWE55kqGM5z8RDOcueyXzzGjfCP5%2B0QlkntG2yvDTMGqYjh34lZgIZbfGW0iWEdGmKnu8UdNPouozAccxIosyInU0ZhV6Z8HdXM%2FuoGY3RIiiiz8n8ZL86AmvbkkuPRLXaklrd3ixh%2F0D849WzCi0Oy%2FBjqkARdwyhT%2F185Oonvej2zXwWGHBluJ90FWKbSF0Xr8PJUoXhokFDhzj2XV1k2vlm9VTP9rdkAS7ro5R%2FW9jXTgBcG3PFW4Awf7%2FBQa51Se3dSmVP0yS1GpFpkJikqCdPF0FedWcP1gxK%2F%2BNsdjYM9KNX%2BCmu3zq0VIe2UXeciSFMJD7Ek5pxwV3V6W%2Fw1IXGxGMHnlwb5%2F%2F0co4ON1zGzPpt0aLD9L&X-Amz-Signature=313d54800129539333082bdeba83a0f0fdb65a8f166b7082abbb12e8cbbe4c05&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRF3MULO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCrDZSX1D60oDA2U9awrqbg832HTkw%2Fsu1DoSJGg17a7QIhAJ7lsUBPY7JEIiOoCZxmJgTJUBCI6EK5aGWrx9CulRTIKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5buoslIeg9izAECcq3AN4VhbZjkcC62oh0NiVzOrVtOnWketKkxOcC4IrTnu9QZFVfh4N0QLoLVwas9LY54Dzne2z51OaAr%2FQ%2FZ3vVUQ87caddWEYxcAkiGtjtoykRLQ87t1wX9yS6eImFZRIXDmbpfBbzEn7rFPkyU7oiEUbEVeHpQ3gzh4W8iumPmJf1rXjH7iHpgAt1TBQpwBd6EJ1%2BRuk2e0A0qCpVt%2F%2FCEu1GKXqUOQRPhGtv5Tux4q%2BMXDZIkqRVO8M5YOUa4cyBjqbEXrc%2BruYdDJWEcpIRQdDb0dhoq%2FMctZ6hSMOtSbhQ2aw4oAnHxzKGX1pQiYsxqNaWu481MA8ujLg1BKSv5Yn2Xl44djZp6ElrcAD0XDxQeuSac1GutwIJvsi14qwT6zoGzDY5pIP7kTdNa4qZIg%2B5sPq9s362vvILBFVkl7xh3cROK7aW%2F88H9cF9aK4yaXlK1V5TAltj4XyesylVBkEw1f3PkS96isoYAGtLix8yWE55kqGM5z8RDOcueyXzzGjfCP5%2B0QlkntG2yvDTMGqYjh34lZgIZbfGW0iWEdGmKnu8UdNPouozAccxIosyInU0ZhV6Z8HdXM%2FuoGY3RIiiiz8n8ZL86AmvbkkuPRLXaklrd3ixh%2F0D849WzCi0Oy%2FBjqkARdwyhT%2F185Oonvej2zXwWGHBluJ90FWKbSF0Xr8PJUoXhokFDhzj2XV1k2vlm9VTP9rdkAS7ro5R%2FW9jXTgBcG3PFW4Awf7%2FBQa51Se3dSmVP0yS1GpFpkJikqCdPF0FedWcP1gxK%2F%2BNsdjYM9KNX%2BCmu3zq0VIe2UXeciSFMJD7Ek5pxwV3V6W%2Fw1IXGxGMHnlwb5%2F%2F0co4ON1zGzPpt0aLD9L&X-Amz-Signature=a63439d89baf70837abce521021df8e154f79c05e2b455b9f8f212476e17b992&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRF3MULO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCrDZSX1D60oDA2U9awrqbg832HTkw%2Fsu1DoSJGg17a7QIhAJ7lsUBPY7JEIiOoCZxmJgTJUBCI6EK5aGWrx9CulRTIKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5buoslIeg9izAECcq3AN4VhbZjkcC62oh0NiVzOrVtOnWketKkxOcC4IrTnu9QZFVfh4N0QLoLVwas9LY54Dzne2z51OaAr%2FQ%2FZ3vVUQ87caddWEYxcAkiGtjtoykRLQ87t1wX9yS6eImFZRIXDmbpfBbzEn7rFPkyU7oiEUbEVeHpQ3gzh4W8iumPmJf1rXjH7iHpgAt1TBQpwBd6EJ1%2BRuk2e0A0qCpVt%2F%2FCEu1GKXqUOQRPhGtv5Tux4q%2BMXDZIkqRVO8M5YOUa4cyBjqbEXrc%2BruYdDJWEcpIRQdDb0dhoq%2FMctZ6hSMOtSbhQ2aw4oAnHxzKGX1pQiYsxqNaWu481MA8ujLg1BKSv5Yn2Xl44djZp6ElrcAD0XDxQeuSac1GutwIJvsi14qwT6zoGzDY5pIP7kTdNa4qZIg%2B5sPq9s362vvILBFVkl7xh3cROK7aW%2F88H9cF9aK4yaXlK1V5TAltj4XyesylVBkEw1f3PkS96isoYAGtLix8yWE55kqGM5z8RDOcueyXzzGjfCP5%2B0QlkntG2yvDTMGqYjh34lZgIZbfGW0iWEdGmKnu8UdNPouozAccxIosyInU0ZhV6Z8HdXM%2FuoGY3RIiiiz8n8ZL86AmvbkkuPRLXaklrd3ixh%2F0D849WzCi0Oy%2FBjqkARdwyhT%2F185Oonvej2zXwWGHBluJ90FWKbSF0Xr8PJUoXhokFDhzj2XV1k2vlm9VTP9rdkAS7ro5R%2FW9jXTgBcG3PFW4Awf7%2FBQa51Se3dSmVP0yS1GpFpkJikqCdPF0FedWcP1gxK%2F%2BNsdjYM9KNX%2BCmu3zq0VIe2UXeciSFMJD7Ek5pxwV3V6W%2Fw1IXGxGMHnlwb5%2F%2F0co4ON1zGzPpt0aLD9L&X-Amz-Signature=a7a3ac7f931591bf264332cd16be8dc2317ae8ad714791941a03fe7a21986c95&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRF3MULO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCrDZSX1D60oDA2U9awrqbg832HTkw%2Fsu1DoSJGg17a7QIhAJ7lsUBPY7JEIiOoCZxmJgTJUBCI6EK5aGWrx9CulRTIKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5buoslIeg9izAECcq3AN4VhbZjkcC62oh0NiVzOrVtOnWketKkxOcC4IrTnu9QZFVfh4N0QLoLVwas9LY54Dzne2z51OaAr%2FQ%2FZ3vVUQ87caddWEYxcAkiGtjtoykRLQ87t1wX9yS6eImFZRIXDmbpfBbzEn7rFPkyU7oiEUbEVeHpQ3gzh4W8iumPmJf1rXjH7iHpgAt1TBQpwBd6EJ1%2BRuk2e0A0qCpVt%2F%2FCEu1GKXqUOQRPhGtv5Tux4q%2BMXDZIkqRVO8M5YOUa4cyBjqbEXrc%2BruYdDJWEcpIRQdDb0dhoq%2FMctZ6hSMOtSbhQ2aw4oAnHxzKGX1pQiYsxqNaWu481MA8ujLg1BKSv5Yn2Xl44djZp6ElrcAD0XDxQeuSac1GutwIJvsi14qwT6zoGzDY5pIP7kTdNa4qZIg%2B5sPq9s362vvILBFVkl7xh3cROK7aW%2F88H9cF9aK4yaXlK1V5TAltj4XyesylVBkEw1f3PkS96isoYAGtLix8yWE55kqGM5z8RDOcueyXzzGjfCP5%2B0QlkntG2yvDTMGqYjh34lZgIZbfGW0iWEdGmKnu8UdNPouozAccxIosyInU0ZhV6Z8HdXM%2FuoGY3RIiiiz8n8ZL86AmvbkkuPRLXaklrd3ixh%2F0D849WzCi0Oy%2FBjqkARdwyhT%2F185Oonvej2zXwWGHBluJ90FWKbSF0Xr8PJUoXhokFDhzj2XV1k2vlm9VTP9rdkAS7ro5R%2FW9jXTgBcG3PFW4Awf7%2FBQa51Se3dSmVP0yS1GpFpkJikqCdPF0FedWcP1gxK%2F%2BNsdjYM9KNX%2BCmu3zq0VIe2UXeciSFMJD7Ek5pxwV3V6W%2Fw1IXGxGMHnlwb5%2F%2F0co4ON1zGzPpt0aLD9L&X-Amz-Signature=2f692c83b6bd1bc58bff35cd6ccf4ab76498bc95bd5e4d99a86464caa92ec42c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRF3MULO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCrDZSX1D60oDA2U9awrqbg832HTkw%2Fsu1DoSJGg17a7QIhAJ7lsUBPY7JEIiOoCZxmJgTJUBCI6EK5aGWrx9CulRTIKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5buoslIeg9izAECcq3AN4VhbZjkcC62oh0NiVzOrVtOnWketKkxOcC4IrTnu9QZFVfh4N0QLoLVwas9LY54Dzne2z51OaAr%2FQ%2FZ3vVUQ87caddWEYxcAkiGtjtoykRLQ87t1wX9yS6eImFZRIXDmbpfBbzEn7rFPkyU7oiEUbEVeHpQ3gzh4W8iumPmJf1rXjH7iHpgAt1TBQpwBd6EJ1%2BRuk2e0A0qCpVt%2F%2FCEu1GKXqUOQRPhGtv5Tux4q%2BMXDZIkqRVO8M5YOUa4cyBjqbEXrc%2BruYdDJWEcpIRQdDb0dhoq%2FMctZ6hSMOtSbhQ2aw4oAnHxzKGX1pQiYsxqNaWu481MA8ujLg1BKSv5Yn2Xl44djZp6ElrcAD0XDxQeuSac1GutwIJvsi14qwT6zoGzDY5pIP7kTdNa4qZIg%2B5sPq9s362vvILBFVkl7xh3cROK7aW%2F88H9cF9aK4yaXlK1V5TAltj4XyesylVBkEw1f3PkS96isoYAGtLix8yWE55kqGM5z8RDOcueyXzzGjfCP5%2B0QlkntG2yvDTMGqYjh34lZgIZbfGW0iWEdGmKnu8UdNPouozAccxIosyInU0ZhV6Z8HdXM%2FuoGY3RIiiiz8n8ZL86AmvbkkuPRLXaklrd3ixh%2F0D849WzCi0Oy%2FBjqkARdwyhT%2F185Oonvej2zXwWGHBluJ90FWKbSF0Xr8PJUoXhokFDhzj2XV1k2vlm9VTP9rdkAS7ro5R%2FW9jXTgBcG3PFW4Awf7%2FBQa51Se3dSmVP0yS1GpFpkJikqCdPF0FedWcP1gxK%2F%2BNsdjYM9KNX%2BCmu3zq0VIe2UXeciSFMJD7Ek5pxwV3V6W%2Fw1IXGxGMHnlwb5%2F%2F0co4ON1zGzPpt0aLD9L&X-Amz-Signature=8c7950a5f29b3e2fb3e73cd67a19ec0ea8e74546223237d06f9c4c21db25141d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRF3MULO%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCrDZSX1D60oDA2U9awrqbg832HTkw%2Fsu1DoSJGg17a7QIhAJ7lsUBPY7JEIiOoCZxmJgTJUBCI6EK5aGWrx9CulRTIKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5buoslIeg9izAECcq3AN4VhbZjkcC62oh0NiVzOrVtOnWketKkxOcC4IrTnu9QZFVfh4N0QLoLVwas9LY54Dzne2z51OaAr%2FQ%2FZ3vVUQ87caddWEYxcAkiGtjtoykRLQ87t1wX9yS6eImFZRIXDmbpfBbzEn7rFPkyU7oiEUbEVeHpQ3gzh4W8iumPmJf1rXjH7iHpgAt1TBQpwBd6EJ1%2BRuk2e0A0qCpVt%2F%2FCEu1GKXqUOQRPhGtv5Tux4q%2BMXDZIkqRVO8M5YOUa4cyBjqbEXrc%2BruYdDJWEcpIRQdDb0dhoq%2FMctZ6hSMOtSbhQ2aw4oAnHxzKGX1pQiYsxqNaWu481MA8ujLg1BKSv5Yn2Xl44djZp6ElrcAD0XDxQeuSac1GutwIJvsi14qwT6zoGzDY5pIP7kTdNa4qZIg%2B5sPq9s362vvILBFVkl7xh3cROK7aW%2F88H9cF9aK4yaXlK1V5TAltj4XyesylVBkEw1f3PkS96isoYAGtLix8yWE55kqGM5z8RDOcueyXzzGjfCP5%2B0QlkntG2yvDTMGqYjh34lZgIZbfGW0iWEdGmKnu8UdNPouozAccxIosyInU0ZhV6Z8HdXM%2FuoGY3RIiiiz8n8ZL86AmvbkkuPRLXaklrd3ixh%2F0D849WzCi0Oy%2FBjqkARdwyhT%2F185Oonvej2zXwWGHBluJ90FWKbSF0Xr8PJUoXhokFDhzj2XV1k2vlm9VTP9rdkAS7ro5R%2FW9jXTgBcG3PFW4Awf7%2FBQa51Se3dSmVP0yS1GpFpkJikqCdPF0FedWcP1gxK%2F%2BNsdjYM9KNX%2BCmu3zq0VIe2UXeciSFMJD7Ek5pxwV3V6W%2Fw1IXGxGMHnlwb5%2F%2F0co4ON1zGzPpt0aLD9L&X-Amz-Signature=0b0ddb62813545e21c2b971075f05c615702866437b80e84f2267eeff570977c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

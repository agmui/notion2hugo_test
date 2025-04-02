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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGKJYKF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCiVpbLyOCJ4UoP9DVhzPdpyHCKTl5VeIwt1dIp1c4H3gIgbv4z1NPbpAoR3XqsZXsPT4tr5CC6JDzK3%2FlXVphS%2FiIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHTLYbnto%2Fq6PXX9CrcAzqLSo2OeZBF1FeIWxLdsDe62fWEazZNRCrYirqwLQzvTkjN8YvhnGqZ5sdZP%2B62qsCWcSQRMEP1iD5zvhyNieDKSgtFTYhF9F4eu0XTpIJJeo4nZzD8mlbDLvgSJCnqxqZL5zJS2DYSN%2BqIfEhE4wM%2B9vnY%2Fy9w1SK8eSEkuJnrKRm2AcjeueHCzus86bRcd1RJ2ujy0KjxiGCabvt13IPkefrKN2ttKACP6WXs%2BzN7vk6MD7QzuMcr3U3lppncbu%2FpqTKnANV3N8aXOfW9OmqyJDDhosnL1OCFUQghYSel0RzlRLVBbIkm7UJAU0DVaZU67GPd1s0TZXN2vDtxcK5IDtqTbNlgXA6X4%2FDZEEZJGTMPWGXtWi73oiEg9uSkfV1wx0paqNFuGNbrc8SnsD%2BW0uQdpGitRU0Cxyu7uQNF5Gl%2BZJ3wQ4%2BQfY%2FAouI3if9ZgZxohu96SRWYO5W2rdIK4EWALyNO8rrpHG7bI4i3jHjw1SO72%2BxtG%2Fbzk%2FRsFJfyxMmjh9hRdvmGMGp79a0%2B775Htki62tOuXRdPdAb4UMONoTZtF33V%2Bf1nllQSUnTIKmMFEw4kd0tZ0uTgourESOc%2FH6hukp74c8BwUYofTbqBtAklxN%2BIThUgMKG5sr8GOqUBjNijgHyXifUTDsi1jRAES%2FZ0rakFA9wFijXvjYycn1%2BMlTsYIHSAScixrvmilJk%2BFFQp%2FiWNYXxMKhER10q%2FjD93wADkpK7duSg5zLYXaU3QJ%2FL94qTieYMCzcl22oZaY5xYgk%2FrQ6XPXbbcGoL1PyczuyPiOyC4hJp0rysiAWf0ccDbD7QcZptBcdk4kZ9AKpNh3OfdwxjabLE3JXixAzQSV%2ByZ&X-Amz-Signature=5732c2fe85f21aa631d6c55d9f0b07cafdf2d3019f90a2f317a208d2f254bb53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGKJYKF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCiVpbLyOCJ4UoP9DVhzPdpyHCKTl5VeIwt1dIp1c4H3gIgbv4z1NPbpAoR3XqsZXsPT4tr5CC6JDzK3%2FlXVphS%2FiIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHTLYbnto%2Fq6PXX9CrcAzqLSo2OeZBF1FeIWxLdsDe62fWEazZNRCrYirqwLQzvTkjN8YvhnGqZ5sdZP%2B62qsCWcSQRMEP1iD5zvhyNieDKSgtFTYhF9F4eu0XTpIJJeo4nZzD8mlbDLvgSJCnqxqZL5zJS2DYSN%2BqIfEhE4wM%2B9vnY%2Fy9w1SK8eSEkuJnrKRm2AcjeueHCzus86bRcd1RJ2ujy0KjxiGCabvt13IPkefrKN2ttKACP6WXs%2BzN7vk6MD7QzuMcr3U3lppncbu%2FpqTKnANV3N8aXOfW9OmqyJDDhosnL1OCFUQghYSel0RzlRLVBbIkm7UJAU0DVaZU67GPd1s0TZXN2vDtxcK5IDtqTbNlgXA6X4%2FDZEEZJGTMPWGXtWi73oiEg9uSkfV1wx0paqNFuGNbrc8SnsD%2BW0uQdpGitRU0Cxyu7uQNF5Gl%2BZJ3wQ4%2BQfY%2FAouI3if9ZgZxohu96SRWYO5W2rdIK4EWALyNO8rrpHG7bI4i3jHjw1SO72%2BxtG%2Fbzk%2FRsFJfyxMmjh9hRdvmGMGp79a0%2B775Htki62tOuXRdPdAb4UMONoTZtF33V%2Bf1nllQSUnTIKmMFEw4kd0tZ0uTgourESOc%2FH6hukp74c8BwUYofTbqBtAklxN%2BIThUgMKG5sr8GOqUBjNijgHyXifUTDsi1jRAES%2FZ0rakFA9wFijXvjYycn1%2BMlTsYIHSAScixrvmilJk%2BFFQp%2FiWNYXxMKhER10q%2FjD93wADkpK7duSg5zLYXaU3QJ%2FL94qTieYMCzcl22oZaY5xYgk%2FrQ6XPXbbcGoL1PyczuyPiOyC4hJp0rysiAWf0ccDbD7QcZptBcdk4kZ9AKpNh3OfdwxjabLE3JXixAzQSV%2ByZ&X-Amz-Signature=efb871d0e3ea1cbc1670f949af1ad78f58c898a398fe9bc296c21bf9b589739d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGKJYKF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCiVpbLyOCJ4UoP9DVhzPdpyHCKTl5VeIwt1dIp1c4H3gIgbv4z1NPbpAoR3XqsZXsPT4tr5CC6JDzK3%2FlXVphS%2FiIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHTLYbnto%2Fq6PXX9CrcAzqLSo2OeZBF1FeIWxLdsDe62fWEazZNRCrYirqwLQzvTkjN8YvhnGqZ5sdZP%2B62qsCWcSQRMEP1iD5zvhyNieDKSgtFTYhF9F4eu0XTpIJJeo4nZzD8mlbDLvgSJCnqxqZL5zJS2DYSN%2BqIfEhE4wM%2B9vnY%2Fy9w1SK8eSEkuJnrKRm2AcjeueHCzus86bRcd1RJ2ujy0KjxiGCabvt13IPkefrKN2ttKACP6WXs%2BzN7vk6MD7QzuMcr3U3lppncbu%2FpqTKnANV3N8aXOfW9OmqyJDDhosnL1OCFUQghYSel0RzlRLVBbIkm7UJAU0DVaZU67GPd1s0TZXN2vDtxcK5IDtqTbNlgXA6X4%2FDZEEZJGTMPWGXtWi73oiEg9uSkfV1wx0paqNFuGNbrc8SnsD%2BW0uQdpGitRU0Cxyu7uQNF5Gl%2BZJ3wQ4%2BQfY%2FAouI3if9ZgZxohu96SRWYO5W2rdIK4EWALyNO8rrpHG7bI4i3jHjw1SO72%2BxtG%2Fbzk%2FRsFJfyxMmjh9hRdvmGMGp79a0%2B775Htki62tOuXRdPdAb4UMONoTZtF33V%2Bf1nllQSUnTIKmMFEw4kd0tZ0uTgourESOc%2FH6hukp74c8BwUYofTbqBtAklxN%2BIThUgMKG5sr8GOqUBjNijgHyXifUTDsi1jRAES%2FZ0rakFA9wFijXvjYycn1%2BMlTsYIHSAScixrvmilJk%2BFFQp%2FiWNYXxMKhER10q%2FjD93wADkpK7duSg5zLYXaU3QJ%2FL94qTieYMCzcl22oZaY5xYgk%2FrQ6XPXbbcGoL1PyczuyPiOyC4hJp0rysiAWf0ccDbD7QcZptBcdk4kZ9AKpNh3OfdwxjabLE3JXixAzQSV%2ByZ&X-Amz-Signature=149c2098b006f54a1e44690846b31ecaecbf81903501e8f95215d9eaed358323&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGKJYKF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCiVpbLyOCJ4UoP9DVhzPdpyHCKTl5VeIwt1dIp1c4H3gIgbv4z1NPbpAoR3XqsZXsPT4tr5CC6JDzK3%2FlXVphS%2FiIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHTLYbnto%2Fq6PXX9CrcAzqLSo2OeZBF1FeIWxLdsDe62fWEazZNRCrYirqwLQzvTkjN8YvhnGqZ5sdZP%2B62qsCWcSQRMEP1iD5zvhyNieDKSgtFTYhF9F4eu0XTpIJJeo4nZzD8mlbDLvgSJCnqxqZL5zJS2DYSN%2BqIfEhE4wM%2B9vnY%2Fy9w1SK8eSEkuJnrKRm2AcjeueHCzus86bRcd1RJ2ujy0KjxiGCabvt13IPkefrKN2ttKACP6WXs%2BzN7vk6MD7QzuMcr3U3lppncbu%2FpqTKnANV3N8aXOfW9OmqyJDDhosnL1OCFUQghYSel0RzlRLVBbIkm7UJAU0DVaZU67GPd1s0TZXN2vDtxcK5IDtqTbNlgXA6X4%2FDZEEZJGTMPWGXtWi73oiEg9uSkfV1wx0paqNFuGNbrc8SnsD%2BW0uQdpGitRU0Cxyu7uQNF5Gl%2BZJ3wQ4%2BQfY%2FAouI3if9ZgZxohu96SRWYO5W2rdIK4EWALyNO8rrpHG7bI4i3jHjw1SO72%2BxtG%2Fbzk%2FRsFJfyxMmjh9hRdvmGMGp79a0%2B775Htki62tOuXRdPdAb4UMONoTZtF33V%2Bf1nllQSUnTIKmMFEw4kd0tZ0uTgourESOc%2FH6hukp74c8BwUYofTbqBtAklxN%2BIThUgMKG5sr8GOqUBjNijgHyXifUTDsi1jRAES%2FZ0rakFA9wFijXvjYycn1%2BMlTsYIHSAScixrvmilJk%2BFFQp%2FiWNYXxMKhER10q%2FjD93wADkpK7duSg5zLYXaU3QJ%2FL94qTieYMCzcl22oZaY5xYgk%2FrQ6XPXbbcGoL1PyczuyPiOyC4hJp0rysiAWf0ccDbD7QcZptBcdk4kZ9AKpNh3OfdwxjabLE3JXixAzQSV%2ByZ&X-Amz-Signature=af69376e56e64bac44f2c9cf29d31ffe38e57ae53637322a8b4ac7569bf05b62&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGKJYKF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCiVpbLyOCJ4UoP9DVhzPdpyHCKTl5VeIwt1dIp1c4H3gIgbv4z1NPbpAoR3XqsZXsPT4tr5CC6JDzK3%2FlXVphS%2FiIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHTLYbnto%2Fq6PXX9CrcAzqLSo2OeZBF1FeIWxLdsDe62fWEazZNRCrYirqwLQzvTkjN8YvhnGqZ5sdZP%2B62qsCWcSQRMEP1iD5zvhyNieDKSgtFTYhF9F4eu0XTpIJJeo4nZzD8mlbDLvgSJCnqxqZL5zJS2DYSN%2BqIfEhE4wM%2B9vnY%2Fy9w1SK8eSEkuJnrKRm2AcjeueHCzus86bRcd1RJ2ujy0KjxiGCabvt13IPkefrKN2ttKACP6WXs%2BzN7vk6MD7QzuMcr3U3lppncbu%2FpqTKnANV3N8aXOfW9OmqyJDDhosnL1OCFUQghYSel0RzlRLVBbIkm7UJAU0DVaZU67GPd1s0TZXN2vDtxcK5IDtqTbNlgXA6X4%2FDZEEZJGTMPWGXtWi73oiEg9uSkfV1wx0paqNFuGNbrc8SnsD%2BW0uQdpGitRU0Cxyu7uQNF5Gl%2BZJ3wQ4%2BQfY%2FAouI3if9ZgZxohu96SRWYO5W2rdIK4EWALyNO8rrpHG7bI4i3jHjw1SO72%2BxtG%2Fbzk%2FRsFJfyxMmjh9hRdvmGMGp79a0%2B775Htki62tOuXRdPdAb4UMONoTZtF33V%2Bf1nllQSUnTIKmMFEw4kd0tZ0uTgourESOc%2FH6hukp74c8BwUYofTbqBtAklxN%2BIThUgMKG5sr8GOqUBjNijgHyXifUTDsi1jRAES%2FZ0rakFA9wFijXvjYycn1%2BMlTsYIHSAScixrvmilJk%2BFFQp%2FiWNYXxMKhER10q%2FjD93wADkpK7duSg5zLYXaU3QJ%2FL94qTieYMCzcl22oZaY5xYgk%2FrQ6XPXbbcGoL1PyczuyPiOyC4hJp0rysiAWf0ccDbD7QcZptBcdk4kZ9AKpNh3OfdwxjabLE3JXixAzQSV%2ByZ&X-Amz-Signature=0de6ae45350c174c5c7df928815e38208ba243623a8345bb99df53d578cda6e6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGKJYKF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCiVpbLyOCJ4UoP9DVhzPdpyHCKTl5VeIwt1dIp1c4H3gIgbv4z1NPbpAoR3XqsZXsPT4tr5CC6JDzK3%2FlXVphS%2FiIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHTLYbnto%2Fq6PXX9CrcAzqLSo2OeZBF1FeIWxLdsDe62fWEazZNRCrYirqwLQzvTkjN8YvhnGqZ5sdZP%2B62qsCWcSQRMEP1iD5zvhyNieDKSgtFTYhF9F4eu0XTpIJJeo4nZzD8mlbDLvgSJCnqxqZL5zJS2DYSN%2BqIfEhE4wM%2B9vnY%2Fy9w1SK8eSEkuJnrKRm2AcjeueHCzus86bRcd1RJ2ujy0KjxiGCabvt13IPkefrKN2ttKACP6WXs%2BzN7vk6MD7QzuMcr3U3lppncbu%2FpqTKnANV3N8aXOfW9OmqyJDDhosnL1OCFUQghYSel0RzlRLVBbIkm7UJAU0DVaZU67GPd1s0TZXN2vDtxcK5IDtqTbNlgXA6X4%2FDZEEZJGTMPWGXtWi73oiEg9uSkfV1wx0paqNFuGNbrc8SnsD%2BW0uQdpGitRU0Cxyu7uQNF5Gl%2BZJ3wQ4%2BQfY%2FAouI3if9ZgZxohu96SRWYO5W2rdIK4EWALyNO8rrpHG7bI4i3jHjw1SO72%2BxtG%2Fbzk%2FRsFJfyxMmjh9hRdvmGMGp79a0%2B775Htki62tOuXRdPdAb4UMONoTZtF33V%2Bf1nllQSUnTIKmMFEw4kd0tZ0uTgourESOc%2FH6hukp74c8BwUYofTbqBtAklxN%2BIThUgMKG5sr8GOqUBjNijgHyXifUTDsi1jRAES%2FZ0rakFA9wFijXvjYycn1%2BMlTsYIHSAScixrvmilJk%2BFFQp%2FiWNYXxMKhER10q%2FjD93wADkpK7duSg5zLYXaU3QJ%2FL94qTieYMCzcl22oZaY5xYgk%2FrQ6XPXbbcGoL1PyczuyPiOyC4hJp0rysiAWf0ccDbD7QcZptBcdk4kZ9AKpNh3OfdwxjabLE3JXixAzQSV%2ByZ&X-Amz-Signature=afb97eaaefa904287a40fbc3c8a62312ddb92aa738bf60ccc145cb868d45d38e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNGKJYKF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCiVpbLyOCJ4UoP9DVhzPdpyHCKTl5VeIwt1dIp1c4H3gIgbv4z1NPbpAoR3XqsZXsPT4tr5CC6JDzK3%2FlXVphS%2FiIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHTLYbnto%2Fq6PXX9CrcAzqLSo2OeZBF1FeIWxLdsDe62fWEazZNRCrYirqwLQzvTkjN8YvhnGqZ5sdZP%2B62qsCWcSQRMEP1iD5zvhyNieDKSgtFTYhF9F4eu0XTpIJJeo4nZzD8mlbDLvgSJCnqxqZL5zJS2DYSN%2BqIfEhE4wM%2B9vnY%2Fy9w1SK8eSEkuJnrKRm2AcjeueHCzus86bRcd1RJ2ujy0KjxiGCabvt13IPkefrKN2ttKACP6WXs%2BzN7vk6MD7QzuMcr3U3lppncbu%2FpqTKnANV3N8aXOfW9OmqyJDDhosnL1OCFUQghYSel0RzlRLVBbIkm7UJAU0DVaZU67GPd1s0TZXN2vDtxcK5IDtqTbNlgXA6X4%2FDZEEZJGTMPWGXtWi73oiEg9uSkfV1wx0paqNFuGNbrc8SnsD%2BW0uQdpGitRU0Cxyu7uQNF5Gl%2BZJ3wQ4%2BQfY%2FAouI3if9ZgZxohu96SRWYO5W2rdIK4EWALyNO8rrpHG7bI4i3jHjw1SO72%2BxtG%2Fbzk%2FRsFJfyxMmjh9hRdvmGMGp79a0%2B775Htki62tOuXRdPdAb4UMONoTZtF33V%2Bf1nllQSUnTIKmMFEw4kd0tZ0uTgourESOc%2FH6hukp74c8BwUYofTbqBtAklxN%2BIThUgMKG5sr8GOqUBjNijgHyXifUTDsi1jRAES%2FZ0rakFA9wFijXvjYycn1%2BMlTsYIHSAScixrvmilJk%2BFFQp%2FiWNYXxMKhER10q%2FjD93wADkpK7duSg5zLYXaU3QJ%2FL94qTieYMCzcl22oZaY5xYgk%2FrQ6XPXbbcGoL1PyczuyPiOyC4hJp0rysiAWf0ccDbD7QcZptBcdk4kZ9AKpNh3OfdwxjabLE3JXixAzQSV%2ByZ&X-Amz-Signature=1b52415ab0807f6a4c3fc59f893101447d3bc2b1c324dad84763a554285f9ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

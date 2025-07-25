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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJW264FZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDD2RuYXHqpRgAGSxqgIs9Xuo6xq3P2eLL4cIEt8%2BE1qAIgHhh07uSjVSyDe4CbgAdZ3U0iTBBGfaafvscShPNXL6kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLUhxbYp9NH8z2WjMyrcA5sp6NDhiUqMC5OcCqW3v8lXlElAn61XReKIJmZ6WAK%2FA9PJQuxHa4agEH6Ea0T5DrTphMzbHXRJ7qdnCa3XYudqs02HB%2FTUgaHBWvG1fwb28JwHB9ymP5wk23TeG%2F7R9FglP8BhiEdcqT5h%2BTJvvrfxeb7o0uIwhznd4nYiNQgfvNwfQv3%2BUcIPXaNO3LDLhkedp3n2iY13jE%2B6uKO38viu8OhBLb6KC9v7DM%2F9hqdAHAtnVBYd%2BPpDd50baqjJMHw7Yxxf44erqma7iT76Sk5v3pEM0iTWw%2FVjTPc2hlR%2BYzCho5PUjWl2Cv8Tjf08cioRAMF2dYWQT8%2F6KKvF01R1wTQJUNxq2gDnUagN9CGIsJ4R75kkebXuWrpjhtrjtfnlum171F6EtcjCaPdD7InsWWotH5uPgG97UmrmROiXJEDi81DDHKaP7low1ji%2FvBF1uYtsgrXgRyzEy1GBHBre66WmjPcx7FLuOIU0eExMunCU7XLLMInng79MC37WyAz9ER7HQWoXv1WrsO45hWwGWvHahemPbSM3vEgUrRN2JkmN9qo7xGVR4GlPSAXpg%2B1%2F73Q17MAsiMo1kEWJrwp%2FBKUDKtHk4iq3muCXc%2BwpqoSo0Wt12FBjyQVcMILCjMQGOqUBY%2FJvgtpEoIdJIFm99sUyJcZFtbRZdSjFeX%2FxaIfgJMZf9Bzue00AkSzOtePq4fk9eyyiLkKHioT3okPJbOJ6szlt3nLymm3dYgIFqtPMIzrOB0zFYf6%2BBINUpvBvN3T5L95Nh8tI2TZeTs4FqAlSB720KBrE1RWMHBOYMTWgiafd9kh%2FKVHT8OUGFxS3VcAXe4eNVGGG6YzL1g7MdlCvbqgx1uOV&X-Amz-Signature=841624c8141f4b28ec6e317c4c0efbd61f6265a50e5fdb6ea66c3136e41eeb49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJW264FZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDD2RuYXHqpRgAGSxqgIs9Xuo6xq3P2eLL4cIEt8%2BE1qAIgHhh07uSjVSyDe4CbgAdZ3U0iTBBGfaafvscShPNXL6kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLUhxbYp9NH8z2WjMyrcA5sp6NDhiUqMC5OcCqW3v8lXlElAn61XReKIJmZ6WAK%2FA9PJQuxHa4agEH6Ea0T5DrTphMzbHXRJ7qdnCa3XYudqs02HB%2FTUgaHBWvG1fwb28JwHB9ymP5wk23TeG%2F7R9FglP8BhiEdcqT5h%2BTJvvrfxeb7o0uIwhznd4nYiNQgfvNwfQv3%2BUcIPXaNO3LDLhkedp3n2iY13jE%2B6uKO38viu8OhBLb6KC9v7DM%2F9hqdAHAtnVBYd%2BPpDd50baqjJMHw7Yxxf44erqma7iT76Sk5v3pEM0iTWw%2FVjTPc2hlR%2BYzCho5PUjWl2Cv8Tjf08cioRAMF2dYWQT8%2F6KKvF01R1wTQJUNxq2gDnUagN9CGIsJ4R75kkebXuWrpjhtrjtfnlum171F6EtcjCaPdD7InsWWotH5uPgG97UmrmROiXJEDi81DDHKaP7low1ji%2FvBF1uYtsgrXgRyzEy1GBHBre66WmjPcx7FLuOIU0eExMunCU7XLLMInng79MC37WyAz9ER7HQWoXv1WrsO45hWwGWvHahemPbSM3vEgUrRN2JkmN9qo7xGVR4GlPSAXpg%2B1%2F73Q17MAsiMo1kEWJrwp%2FBKUDKtHk4iq3muCXc%2BwpqoSo0Wt12FBjyQVcMILCjMQGOqUBY%2FJvgtpEoIdJIFm99sUyJcZFtbRZdSjFeX%2FxaIfgJMZf9Bzue00AkSzOtePq4fk9eyyiLkKHioT3okPJbOJ6szlt3nLymm3dYgIFqtPMIzrOB0zFYf6%2BBINUpvBvN3T5L95Nh8tI2TZeTs4FqAlSB720KBrE1RWMHBOYMTWgiafd9kh%2FKVHT8OUGFxS3VcAXe4eNVGGG6YzL1g7MdlCvbqgx1uOV&X-Amz-Signature=c4e8c673a666293e71ca3dbf4671f49edae003163c7ecaea10d73b4e81b1cf17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJW264FZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDD2RuYXHqpRgAGSxqgIs9Xuo6xq3P2eLL4cIEt8%2BE1qAIgHhh07uSjVSyDe4CbgAdZ3U0iTBBGfaafvscShPNXL6kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLUhxbYp9NH8z2WjMyrcA5sp6NDhiUqMC5OcCqW3v8lXlElAn61XReKIJmZ6WAK%2FA9PJQuxHa4agEH6Ea0T5DrTphMzbHXRJ7qdnCa3XYudqs02HB%2FTUgaHBWvG1fwb28JwHB9ymP5wk23TeG%2F7R9FglP8BhiEdcqT5h%2BTJvvrfxeb7o0uIwhznd4nYiNQgfvNwfQv3%2BUcIPXaNO3LDLhkedp3n2iY13jE%2B6uKO38viu8OhBLb6KC9v7DM%2F9hqdAHAtnVBYd%2BPpDd50baqjJMHw7Yxxf44erqma7iT76Sk5v3pEM0iTWw%2FVjTPc2hlR%2BYzCho5PUjWl2Cv8Tjf08cioRAMF2dYWQT8%2F6KKvF01R1wTQJUNxq2gDnUagN9CGIsJ4R75kkebXuWrpjhtrjtfnlum171F6EtcjCaPdD7InsWWotH5uPgG97UmrmROiXJEDi81DDHKaP7low1ji%2FvBF1uYtsgrXgRyzEy1GBHBre66WmjPcx7FLuOIU0eExMunCU7XLLMInng79MC37WyAz9ER7HQWoXv1WrsO45hWwGWvHahemPbSM3vEgUrRN2JkmN9qo7xGVR4GlPSAXpg%2B1%2F73Q17MAsiMo1kEWJrwp%2FBKUDKtHk4iq3muCXc%2BwpqoSo0Wt12FBjyQVcMILCjMQGOqUBY%2FJvgtpEoIdJIFm99sUyJcZFtbRZdSjFeX%2FxaIfgJMZf9Bzue00AkSzOtePq4fk9eyyiLkKHioT3okPJbOJ6szlt3nLymm3dYgIFqtPMIzrOB0zFYf6%2BBINUpvBvN3T5L95Nh8tI2TZeTs4FqAlSB720KBrE1RWMHBOYMTWgiafd9kh%2FKVHT8OUGFxS3VcAXe4eNVGGG6YzL1g7MdlCvbqgx1uOV&X-Amz-Signature=69732614324d76aee38585368fe3f6a5aa6a293edfbfe22167da583b94a5f613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJW264FZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDD2RuYXHqpRgAGSxqgIs9Xuo6xq3P2eLL4cIEt8%2BE1qAIgHhh07uSjVSyDe4CbgAdZ3U0iTBBGfaafvscShPNXL6kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLUhxbYp9NH8z2WjMyrcA5sp6NDhiUqMC5OcCqW3v8lXlElAn61XReKIJmZ6WAK%2FA9PJQuxHa4agEH6Ea0T5DrTphMzbHXRJ7qdnCa3XYudqs02HB%2FTUgaHBWvG1fwb28JwHB9ymP5wk23TeG%2F7R9FglP8BhiEdcqT5h%2BTJvvrfxeb7o0uIwhznd4nYiNQgfvNwfQv3%2BUcIPXaNO3LDLhkedp3n2iY13jE%2B6uKO38viu8OhBLb6KC9v7DM%2F9hqdAHAtnVBYd%2BPpDd50baqjJMHw7Yxxf44erqma7iT76Sk5v3pEM0iTWw%2FVjTPc2hlR%2BYzCho5PUjWl2Cv8Tjf08cioRAMF2dYWQT8%2F6KKvF01R1wTQJUNxq2gDnUagN9CGIsJ4R75kkebXuWrpjhtrjtfnlum171F6EtcjCaPdD7InsWWotH5uPgG97UmrmROiXJEDi81DDHKaP7low1ji%2FvBF1uYtsgrXgRyzEy1GBHBre66WmjPcx7FLuOIU0eExMunCU7XLLMInng79MC37WyAz9ER7HQWoXv1WrsO45hWwGWvHahemPbSM3vEgUrRN2JkmN9qo7xGVR4GlPSAXpg%2B1%2F73Q17MAsiMo1kEWJrwp%2FBKUDKtHk4iq3muCXc%2BwpqoSo0Wt12FBjyQVcMILCjMQGOqUBY%2FJvgtpEoIdJIFm99sUyJcZFtbRZdSjFeX%2FxaIfgJMZf9Bzue00AkSzOtePq4fk9eyyiLkKHioT3okPJbOJ6szlt3nLymm3dYgIFqtPMIzrOB0zFYf6%2BBINUpvBvN3T5L95Nh8tI2TZeTs4FqAlSB720KBrE1RWMHBOYMTWgiafd9kh%2FKVHT8OUGFxS3VcAXe4eNVGGG6YzL1g7MdlCvbqgx1uOV&X-Amz-Signature=a9b49e71c69726ba94f67842adccf82d5debeb59d8eeb359fe8e0b6fac1d7582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJW264FZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDD2RuYXHqpRgAGSxqgIs9Xuo6xq3P2eLL4cIEt8%2BE1qAIgHhh07uSjVSyDe4CbgAdZ3U0iTBBGfaafvscShPNXL6kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLUhxbYp9NH8z2WjMyrcA5sp6NDhiUqMC5OcCqW3v8lXlElAn61XReKIJmZ6WAK%2FA9PJQuxHa4agEH6Ea0T5DrTphMzbHXRJ7qdnCa3XYudqs02HB%2FTUgaHBWvG1fwb28JwHB9ymP5wk23TeG%2F7R9FglP8BhiEdcqT5h%2BTJvvrfxeb7o0uIwhznd4nYiNQgfvNwfQv3%2BUcIPXaNO3LDLhkedp3n2iY13jE%2B6uKO38viu8OhBLb6KC9v7DM%2F9hqdAHAtnVBYd%2BPpDd50baqjJMHw7Yxxf44erqma7iT76Sk5v3pEM0iTWw%2FVjTPc2hlR%2BYzCho5PUjWl2Cv8Tjf08cioRAMF2dYWQT8%2F6KKvF01R1wTQJUNxq2gDnUagN9CGIsJ4R75kkebXuWrpjhtrjtfnlum171F6EtcjCaPdD7InsWWotH5uPgG97UmrmROiXJEDi81DDHKaP7low1ji%2FvBF1uYtsgrXgRyzEy1GBHBre66WmjPcx7FLuOIU0eExMunCU7XLLMInng79MC37WyAz9ER7HQWoXv1WrsO45hWwGWvHahemPbSM3vEgUrRN2JkmN9qo7xGVR4GlPSAXpg%2B1%2F73Q17MAsiMo1kEWJrwp%2FBKUDKtHk4iq3muCXc%2BwpqoSo0Wt12FBjyQVcMILCjMQGOqUBY%2FJvgtpEoIdJIFm99sUyJcZFtbRZdSjFeX%2FxaIfgJMZf9Bzue00AkSzOtePq4fk9eyyiLkKHioT3okPJbOJ6szlt3nLymm3dYgIFqtPMIzrOB0zFYf6%2BBINUpvBvN3T5L95Nh8tI2TZeTs4FqAlSB720KBrE1RWMHBOYMTWgiafd9kh%2FKVHT8OUGFxS3VcAXe4eNVGGG6YzL1g7MdlCvbqgx1uOV&X-Amz-Signature=61895b9d83346d0abfe38336e2803b9d3f7ca4cc0249615e664991f645569280&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJW264FZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDD2RuYXHqpRgAGSxqgIs9Xuo6xq3P2eLL4cIEt8%2BE1qAIgHhh07uSjVSyDe4CbgAdZ3U0iTBBGfaafvscShPNXL6kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLUhxbYp9NH8z2WjMyrcA5sp6NDhiUqMC5OcCqW3v8lXlElAn61XReKIJmZ6WAK%2FA9PJQuxHa4agEH6Ea0T5DrTphMzbHXRJ7qdnCa3XYudqs02HB%2FTUgaHBWvG1fwb28JwHB9ymP5wk23TeG%2F7R9FglP8BhiEdcqT5h%2BTJvvrfxeb7o0uIwhznd4nYiNQgfvNwfQv3%2BUcIPXaNO3LDLhkedp3n2iY13jE%2B6uKO38viu8OhBLb6KC9v7DM%2F9hqdAHAtnVBYd%2BPpDd50baqjJMHw7Yxxf44erqma7iT76Sk5v3pEM0iTWw%2FVjTPc2hlR%2BYzCho5PUjWl2Cv8Tjf08cioRAMF2dYWQT8%2F6KKvF01R1wTQJUNxq2gDnUagN9CGIsJ4R75kkebXuWrpjhtrjtfnlum171F6EtcjCaPdD7InsWWotH5uPgG97UmrmROiXJEDi81DDHKaP7low1ji%2FvBF1uYtsgrXgRyzEy1GBHBre66WmjPcx7FLuOIU0eExMunCU7XLLMInng79MC37WyAz9ER7HQWoXv1WrsO45hWwGWvHahemPbSM3vEgUrRN2JkmN9qo7xGVR4GlPSAXpg%2B1%2F73Q17MAsiMo1kEWJrwp%2FBKUDKtHk4iq3muCXc%2BwpqoSo0Wt12FBjyQVcMILCjMQGOqUBY%2FJvgtpEoIdJIFm99sUyJcZFtbRZdSjFeX%2FxaIfgJMZf9Bzue00AkSzOtePq4fk9eyyiLkKHioT3okPJbOJ6szlt3nLymm3dYgIFqtPMIzrOB0zFYf6%2BBINUpvBvN3T5L95Nh8tI2TZeTs4FqAlSB720KBrE1RWMHBOYMTWgiafd9kh%2FKVHT8OUGFxS3VcAXe4eNVGGG6YzL1g7MdlCvbqgx1uOV&X-Amz-Signature=1735ab9ad83fe032c90066aebe505ecf2d59c1acbd47695f6717d61437b45f64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJW264FZ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDD2RuYXHqpRgAGSxqgIs9Xuo6xq3P2eLL4cIEt8%2BE1qAIgHhh07uSjVSyDe4CbgAdZ3U0iTBBGfaafvscShPNXL6kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLUhxbYp9NH8z2WjMyrcA5sp6NDhiUqMC5OcCqW3v8lXlElAn61XReKIJmZ6WAK%2FA9PJQuxHa4agEH6Ea0T5DrTphMzbHXRJ7qdnCa3XYudqs02HB%2FTUgaHBWvG1fwb28JwHB9ymP5wk23TeG%2F7R9FglP8BhiEdcqT5h%2BTJvvrfxeb7o0uIwhznd4nYiNQgfvNwfQv3%2BUcIPXaNO3LDLhkedp3n2iY13jE%2B6uKO38viu8OhBLb6KC9v7DM%2F9hqdAHAtnVBYd%2BPpDd50baqjJMHw7Yxxf44erqma7iT76Sk5v3pEM0iTWw%2FVjTPc2hlR%2BYzCho5PUjWl2Cv8Tjf08cioRAMF2dYWQT8%2F6KKvF01R1wTQJUNxq2gDnUagN9CGIsJ4R75kkebXuWrpjhtrjtfnlum171F6EtcjCaPdD7InsWWotH5uPgG97UmrmROiXJEDi81DDHKaP7low1ji%2FvBF1uYtsgrXgRyzEy1GBHBre66WmjPcx7FLuOIU0eExMunCU7XLLMInng79MC37WyAz9ER7HQWoXv1WrsO45hWwGWvHahemPbSM3vEgUrRN2JkmN9qo7xGVR4GlPSAXpg%2B1%2F73Q17MAsiMo1kEWJrwp%2FBKUDKtHk4iq3muCXc%2BwpqoSo0Wt12FBjyQVcMILCjMQGOqUBY%2FJvgtpEoIdJIFm99sUyJcZFtbRZdSjFeX%2FxaIfgJMZf9Bzue00AkSzOtePq4fk9eyyiLkKHioT3okPJbOJ6szlt3nLymm3dYgIFqtPMIzrOB0zFYf6%2BBINUpvBvN3T5L95Nh8tI2TZeTs4FqAlSB720KBrE1RWMHBOYMTWgiafd9kh%2FKVHT8OUGFxS3VcAXe4eNVGGG6YzL1g7MdlCvbqgx1uOV&X-Amz-Signature=cf90dcd55bab2912c7a126e9dea74e7acf3d52336e011627be246901dc10be3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

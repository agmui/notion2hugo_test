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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJHRB4VI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHrr0Yv7UFL%2B3QM50EwP3UBvP3Sh4%2FM6UNoRwUKY5OQIhAKqKFaoaGlnmuPBQMAc87DdIETgL5lZhl%2FTmYVTNZTBwKv8DCHIQABoMNjM3NDIzMTgzODA1IgwbOpLT8cpr78Glk%2F0q3AN2SBT6v4as98lIDBZfTEH6MP3Ff%2F%2Fbul6FFIBF8SZQSnuLgiQmxEnBsvHTO8zc4gfuwiKvuaWbI9ksp8LcrTGTx%2BGAkaP%2FPEk2XK7WSnrHBTM%2Fpwc%2F%2BDwIh46aObPYHLXIcjoDzRJhZB%2F%2Bl2wMP6UxcbAr4UU%2BNqo9f4HsejWXvqNyCHjjxHQPv2dyIQ1qzSkYe0Ly2FaM%2FKgDXEA4nrphFpTTiy59Z8pejTwx5XsprkRk5zcin8QfeDkyM5u%2FCNtYIP2EbtoBJ3ZGjv%2FHGPlMC%2Brl79Az3%2B1F3%2FdA1WnlH1h4L4Ajafwvef4WmDNfwDCaKnAz8vPmdfYEk4H9Pl2keg0ZjIItlRjd1OPyoyO9gLPEiFgyZrWfDoYMDEbhaTosS1h%2BpokzEGIAJGWKAUnGpqQasrpu%2FI1%2BUkRVfzNN3FomTqU2J0%2F5%2BlYP5%2BLj2l0pORZUZm0oY6f7j3dM7Vt25YeG0zSEVi02f5A4CSyKPhVJ4zvbPyCn8v%2FXLQleR2YWuJF4nB6lXCvGb5ZTfIiml53%2B13dsh6Qbh%2B0opzOv8vkKDsBzfKVsKW4DId1WOjJjFretjwh%2BJECV1hquYMTL28o3uCgLXsLKFp8x7vOTq12l%2FUqd6j%2Fm4L1LHTChrYjABjqkAeUy8Gcfn6rnZBACLn%2FkjlwzLrQFuAEKXfZde1ESCbNIiNvYFyIhB744PkG5sZlbVLmvu%2F1mlZ2Pa%2FciTdhPprhpPZH3LUqtmxUnMGrXkoEfKaw5EM8Yj2SO1qLMG48Eju5%2FrSOE11b35ZDJ1nQCn27Ec3myRzzmMURrObdPFpwzxj7mAIkizlPrx2rEp5eEoI%2BDg1IYc7p7kuG89l1lviOHRnoQ&X-Amz-Signature=6c23c44526454094d568c3732299b13bd6f747464b07c8c985aa5cd215beaeac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJHRB4VI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHrr0Yv7UFL%2B3QM50EwP3UBvP3Sh4%2FM6UNoRwUKY5OQIhAKqKFaoaGlnmuPBQMAc87DdIETgL5lZhl%2FTmYVTNZTBwKv8DCHIQABoMNjM3NDIzMTgzODA1IgwbOpLT8cpr78Glk%2F0q3AN2SBT6v4as98lIDBZfTEH6MP3Ff%2F%2Fbul6FFIBF8SZQSnuLgiQmxEnBsvHTO8zc4gfuwiKvuaWbI9ksp8LcrTGTx%2BGAkaP%2FPEk2XK7WSnrHBTM%2Fpwc%2F%2BDwIh46aObPYHLXIcjoDzRJhZB%2F%2Bl2wMP6UxcbAr4UU%2BNqo9f4HsejWXvqNyCHjjxHQPv2dyIQ1qzSkYe0Ly2FaM%2FKgDXEA4nrphFpTTiy59Z8pejTwx5XsprkRk5zcin8QfeDkyM5u%2FCNtYIP2EbtoBJ3ZGjv%2FHGPlMC%2Brl79Az3%2B1F3%2FdA1WnlH1h4L4Ajafwvef4WmDNfwDCaKnAz8vPmdfYEk4H9Pl2keg0ZjIItlRjd1OPyoyO9gLPEiFgyZrWfDoYMDEbhaTosS1h%2BpokzEGIAJGWKAUnGpqQasrpu%2FI1%2BUkRVfzNN3FomTqU2J0%2F5%2BlYP5%2BLj2l0pORZUZm0oY6f7j3dM7Vt25YeG0zSEVi02f5A4CSyKPhVJ4zvbPyCn8v%2FXLQleR2YWuJF4nB6lXCvGb5ZTfIiml53%2B13dsh6Qbh%2B0opzOv8vkKDsBzfKVsKW4DId1WOjJjFretjwh%2BJECV1hquYMTL28o3uCgLXsLKFp8x7vOTq12l%2FUqd6j%2Fm4L1LHTChrYjABjqkAeUy8Gcfn6rnZBACLn%2FkjlwzLrQFuAEKXfZde1ESCbNIiNvYFyIhB744PkG5sZlbVLmvu%2F1mlZ2Pa%2FciTdhPprhpPZH3LUqtmxUnMGrXkoEfKaw5EM8Yj2SO1qLMG48Eju5%2FrSOE11b35ZDJ1nQCn27Ec3myRzzmMURrObdPFpwzxj7mAIkizlPrx2rEp5eEoI%2BDg1IYc7p7kuG89l1lviOHRnoQ&X-Amz-Signature=2fc11cad989be32930ddc5c69ab9462bd1a4e62a83f6f5f042686a5587a979a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJHRB4VI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHrr0Yv7UFL%2B3QM50EwP3UBvP3Sh4%2FM6UNoRwUKY5OQIhAKqKFaoaGlnmuPBQMAc87DdIETgL5lZhl%2FTmYVTNZTBwKv8DCHIQABoMNjM3NDIzMTgzODA1IgwbOpLT8cpr78Glk%2F0q3AN2SBT6v4as98lIDBZfTEH6MP3Ff%2F%2Fbul6FFIBF8SZQSnuLgiQmxEnBsvHTO8zc4gfuwiKvuaWbI9ksp8LcrTGTx%2BGAkaP%2FPEk2XK7WSnrHBTM%2Fpwc%2F%2BDwIh46aObPYHLXIcjoDzRJhZB%2F%2Bl2wMP6UxcbAr4UU%2BNqo9f4HsejWXvqNyCHjjxHQPv2dyIQ1qzSkYe0Ly2FaM%2FKgDXEA4nrphFpTTiy59Z8pejTwx5XsprkRk5zcin8QfeDkyM5u%2FCNtYIP2EbtoBJ3ZGjv%2FHGPlMC%2Brl79Az3%2B1F3%2FdA1WnlH1h4L4Ajafwvef4WmDNfwDCaKnAz8vPmdfYEk4H9Pl2keg0ZjIItlRjd1OPyoyO9gLPEiFgyZrWfDoYMDEbhaTosS1h%2BpokzEGIAJGWKAUnGpqQasrpu%2FI1%2BUkRVfzNN3FomTqU2J0%2F5%2BlYP5%2BLj2l0pORZUZm0oY6f7j3dM7Vt25YeG0zSEVi02f5A4CSyKPhVJ4zvbPyCn8v%2FXLQleR2YWuJF4nB6lXCvGb5ZTfIiml53%2B13dsh6Qbh%2B0opzOv8vkKDsBzfKVsKW4DId1WOjJjFretjwh%2BJECV1hquYMTL28o3uCgLXsLKFp8x7vOTq12l%2FUqd6j%2Fm4L1LHTChrYjABjqkAeUy8Gcfn6rnZBACLn%2FkjlwzLrQFuAEKXfZde1ESCbNIiNvYFyIhB744PkG5sZlbVLmvu%2F1mlZ2Pa%2FciTdhPprhpPZH3LUqtmxUnMGrXkoEfKaw5EM8Yj2SO1qLMG48Eju5%2FrSOE11b35ZDJ1nQCn27Ec3myRzzmMURrObdPFpwzxj7mAIkizlPrx2rEp5eEoI%2BDg1IYc7p7kuG89l1lviOHRnoQ&X-Amz-Signature=c6f3f380547f95ce4a2b7a2bd0d5d9353b73d3911cc420700b26b642a1684196&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJHRB4VI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHrr0Yv7UFL%2B3QM50EwP3UBvP3Sh4%2FM6UNoRwUKY5OQIhAKqKFaoaGlnmuPBQMAc87DdIETgL5lZhl%2FTmYVTNZTBwKv8DCHIQABoMNjM3NDIzMTgzODA1IgwbOpLT8cpr78Glk%2F0q3AN2SBT6v4as98lIDBZfTEH6MP3Ff%2F%2Fbul6FFIBF8SZQSnuLgiQmxEnBsvHTO8zc4gfuwiKvuaWbI9ksp8LcrTGTx%2BGAkaP%2FPEk2XK7WSnrHBTM%2Fpwc%2F%2BDwIh46aObPYHLXIcjoDzRJhZB%2F%2Bl2wMP6UxcbAr4UU%2BNqo9f4HsejWXvqNyCHjjxHQPv2dyIQ1qzSkYe0Ly2FaM%2FKgDXEA4nrphFpTTiy59Z8pejTwx5XsprkRk5zcin8QfeDkyM5u%2FCNtYIP2EbtoBJ3ZGjv%2FHGPlMC%2Brl79Az3%2B1F3%2FdA1WnlH1h4L4Ajafwvef4WmDNfwDCaKnAz8vPmdfYEk4H9Pl2keg0ZjIItlRjd1OPyoyO9gLPEiFgyZrWfDoYMDEbhaTosS1h%2BpokzEGIAJGWKAUnGpqQasrpu%2FI1%2BUkRVfzNN3FomTqU2J0%2F5%2BlYP5%2BLj2l0pORZUZm0oY6f7j3dM7Vt25YeG0zSEVi02f5A4CSyKPhVJ4zvbPyCn8v%2FXLQleR2YWuJF4nB6lXCvGb5ZTfIiml53%2B13dsh6Qbh%2B0opzOv8vkKDsBzfKVsKW4DId1WOjJjFretjwh%2BJECV1hquYMTL28o3uCgLXsLKFp8x7vOTq12l%2FUqd6j%2Fm4L1LHTChrYjABjqkAeUy8Gcfn6rnZBACLn%2FkjlwzLrQFuAEKXfZde1ESCbNIiNvYFyIhB744PkG5sZlbVLmvu%2F1mlZ2Pa%2FciTdhPprhpPZH3LUqtmxUnMGrXkoEfKaw5EM8Yj2SO1qLMG48Eju5%2FrSOE11b35ZDJ1nQCn27Ec3myRzzmMURrObdPFpwzxj7mAIkizlPrx2rEp5eEoI%2BDg1IYc7p7kuG89l1lviOHRnoQ&X-Amz-Signature=18eb3702eb69bf1d7503fae8c5bb1274a9603cf09602f38c1b3003441ccdf862&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJHRB4VI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHrr0Yv7UFL%2B3QM50EwP3UBvP3Sh4%2FM6UNoRwUKY5OQIhAKqKFaoaGlnmuPBQMAc87DdIETgL5lZhl%2FTmYVTNZTBwKv8DCHIQABoMNjM3NDIzMTgzODA1IgwbOpLT8cpr78Glk%2F0q3AN2SBT6v4as98lIDBZfTEH6MP3Ff%2F%2Fbul6FFIBF8SZQSnuLgiQmxEnBsvHTO8zc4gfuwiKvuaWbI9ksp8LcrTGTx%2BGAkaP%2FPEk2XK7WSnrHBTM%2Fpwc%2F%2BDwIh46aObPYHLXIcjoDzRJhZB%2F%2Bl2wMP6UxcbAr4UU%2BNqo9f4HsejWXvqNyCHjjxHQPv2dyIQ1qzSkYe0Ly2FaM%2FKgDXEA4nrphFpTTiy59Z8pejTwx5XsprkRk5zcin8QfeDkyM5u%2FCNtYIP2EbtoBJ3ZGjv%2FHGPlMC%2Brl79Az3%2B1F3%2FdA1WnlH1h4L4Ajafwvef4WmDNfwDCaKnAz8vPmdfYEk4H9Pl2keg0ZjIItlRjd1OPyoyO9gLPEiFgyZrWfDoYMDEbhaTosS1h%2BpokzEGIAJGWKAUnGpqQasrpu%2FI1%2BUkRVfzNN3FomTqU2J0%2F5%2BlYP5%2BLj2l0pORZUZm0oY6f7j3dM7Vt25YeG0zSEVi02f5A4CSyKPhVJ4zvbPyCn8v%2FXLQleR2YWuJF4nB6lXCvGb5ZTfIiml53%2B13dsh6Qbh%2B0opzOv8vkKDsBzfKVsKW4DId1WOjJjFretjwh%2BJECV1hquYMTL28o3uCgLXsLKFp8x7vOTq12l%2FUqd6j%2Fm4L1LHTChrYjABjqkAeUy8Gcfn6rnZBACLn%2FkjlwzLrQFuAEKXfZde1ESCbNIiNvYFyIhB744PkG5sZlbVLmvu%2F1mlZ2Pa%2FciTdhPprhpPZH3LUqtmxUnMGrXkoEfKaw5EM8Yj2SO1qLMG48Eju5%2FrSOE11b35ZDJ1nQCn27Ec3myRzzmMURrObdPFpwzxj7mAIkizlPrx2rEp5eEoI%2BDg1IYc7p7kuG89l1lviOHRnoQ&X-Amz-Signature=1ac785c138db6878658f434b4a7125e1675c16e544b128addca5db5bac169f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJHRB4VI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHrr0Yv7UFL%2B3QM50EwP3UBvP3Sh4%2FM6UNoRwUKY5OQIhAKqKFaoaGlnmuPBQMAc87DdIETgL5lZhl%2FTmYVTNZTBwKv8DCHIQABoMNjM3NDIzMTgzODA1IgwbOpLT8cpr78Glk%2F0q3AN2SBT6v4as98lIDBZfTEH6MP3Ff%2F%2Fbul6FFIBF8SZQSnuLgiQmxEnBsvHTO8zc4gfuwiKvuaWbI9ksp8LcrTGTx%2BGAkaP%2FPEk2XK7WSnrHBTM%2Fpwc%2F%2BDwIh46aObPYHLXIcjoDzRJhZB%2F%2Bl2wMP6UxcbAr4UU%2BNqo9f4HsejWXvqNyCHjjxHQPv2dyIQ1qzSkYe0Ly2FaM%2FKgDXEA4nrphFpTTiy59Z8pejTwx5XsprkRk5zcin8QfeDkyM5u%2FCNtYIP2EbtoBJ3ZGjv%2FHGPlMC%2Brl79Az3%2B1F3%2FdA1WnlH1h4L4Ajafwvef4WmDNfwDCaKnAz8vPmdfYEk4H9Pl2keg0ZjIItlRjd1OPyoyO9gLPEiFgyZrWfDoYMDEbhaTosS1h%2BpokzEGIAJGWKAUnGpqQasrpu%2FI1%2BUkRVfzNN3FomTqU2J0%2F5%2BlYP5%2BLj2l0pORZUZm0oY6f7j3dM7Vt25YeG0zSEVi02f5A4CSyKPhVJ4zvbPyCn8v%2FXLQleR2YWuJF4nB6lXCvGb5ZTfIiml53%2B13dsh6Qbh%2B0opzOv8vkKDsBzfKVsKW4DId1WOjJjFretjwh%2BJECV1hquYMTL28o3uCgLXsLKFp8x7vOTq12l%2FUqd6j%2Fm4L1LHTChrYjABjqkAeUy8Gcfn6rnZBACLn%2FkjlwzLrQFuAEKXfZde1ESCbNIiNvYFyIhB744PkG5sZlbVLmvu%2F1mlZ2Pa%2FciTdhPprhpPZH3LUqtmxUnMGrXkoEfKaw5EM8Yj2SO1qLMG48Eju5%2FrSOE11b35ZDJ1nQCn27Ec3myRzzmMURrObdPFpwzxj7mAIkizlPrx2rEp5eEoI%2BDg1IYc7p7kuG89l1lviOHRnoQ&X-Amz-Signature=a84754c2b15ec0d2d91b21ecfe0c7e0e0d9f6267aa4525fd618e74bd1840632f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJHRB4VI%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHrr0Yv7UFL%2B3QM50EwP3UBvP3Sh4%2FM6UNoRwUKY5OQIhAKqKFaoaGlnmuPBQMAc87DdIETgL5lZhl%2FTmYVTNZTBwKv8DCHIQABoMNjM3NDIzMTgzODA1IgwbOpLT8cpr78Glk%2F0q3AN2SBT6v4as98lIDBZfTEH6MP3Ff%2F%2Fbul6FFIBF8SZQSnuLgiQmxEnBsvHTO8zc4gfuwiKvuaWbI9ksp8LcrTGTx%2BGAkaP%2FPEk2XK7WSnrHBTM%2Fpwc%2F%2BDwIh46aObPYHLXIcjoDzRJhZB%2F%2Bl2wMP6UxcbAr4UU%2BNqo9f4HsejWXvqNyCHjjxHQPv2dyIQ1qzSkYe0Ly2FaM%2FKgDXEA4nrphFpTTiy59Z8pejTwx5XsprkRk5zcin8QfeDkyM5u%2FCNtYIP2EbtoBJ3ZGjv%2FHGPlMC%2Brl79Az3%2B1F3%2FdA1WnlH1h4L4Ajafwvef4WmDNfwDCaKnAz8vPmdfYEk4H9Pl2keg0ZjIItlRjd1OPyoyO9gLPEiFgyZrWfDoYMDEbhaTosS1h%2BpokzEGIAJGWKAUnGpqQasrpu%2FI1%2BUkRVfzNN3FomTqU2J0%2F5%2BlYP5%2BLj2l0pORZUZm0oY6f7j3dM7Vt25YeG0zSEVi02f5A4CSyKPhVJ4zvbPyCn8v%2FXLQleR2YWuJF4nB6lXCvGb5ZTfIiml53%2B13dsh6Qbh%2B0opzOv8vkKDsBzfKVsKW4DId1WOjJjFretjwh%2BJECV1hquYMTL28o3uCgLXsLKFp8x7vOTq12l%2FUqd6j%2Fm4L1LHTChrYjABjqkAeUy8Gcfn6rnZBACLn%2FkjlwzLrQFuAEKXfZde1ESCbNIiNvYFyIhB744PkG5sZlbVLmvu%2F1mlZ2Pa%2FciTdhPprhpPZH3LUqtmxUnMGrXkoEfKaw5EM8Yj2SO1qLMG48Eju5%2FrSOE11b35ZDJ1nQCn27Ec3myRzzmMURrObdPFpwzxj7mAIkizlPrx2rEp5eEoI%2BDg1IYc7p7kuG89l1lviOHRnoQ&X-Amz-Signature=0a4519e5cfc6ae77faf94723cd3b946a1e5a97801ba6e01a7f959d6e4ac2ba9d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

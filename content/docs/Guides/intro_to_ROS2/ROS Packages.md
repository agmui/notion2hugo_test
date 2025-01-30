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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7DR2CB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnDZwbqB6fGVf%2B6%2BozMsAAL0uMz0juGkWm55bIstOOAgIhAN%2B5KjvRQps9ik5oVs%2Fsi85PvWsD9cVm4MqGLPQNlbjLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeD9SIG2h141ysAYq3APGF6nQfGeM8gkWwZwyUJrffdLKMCOAAyMQEa4MK%2BEkGzHJXMVv5%2FYzaZmj%2Fl19CpvdsqOJqiqD80QxCAfXUTbLGJ2NewICx5FrM5djldI%2BrFjJp2opMXk4pvEYvXJbm3I28DV1YvBWKJkQfx591887JliC7iXMmV%2FBIQ3LKpnnnFmJdnZESim3a4u3IDtyTjApSyQQaR8j0ytfsOwQt2ENoRKxLNkE%2FwUBHa0vmjphylm9xmTeJiUwxwSVtsAyRfoRXwgcAsQTW24xdHiVPFIUpywqLbAfLhGlJpG1y%2F4yzqFXiQID2Qz%2BMp%2FcVPUgBnvkyOxDRBg7SdGJgGFLWH0QvWMjjiXAmJ0oJ8rEjNe%2FQMdFExM6RCVfKvQQBIYfqDjG%2F0%2F52gqJQiwPJVFwbVIDPKO2hfgbMIbLI26Y%2FVKLg%2FEneRlfD5Rbp5lMQ%2BUl7nGwn3GULg%2BzfLS0buwrYLRGacGfgveshf3zSq2PROkVLL7WA31dyI4TimWC%2F5S7v7jmTXauzl1mwwdx2SDw744pfJlSKFwWchHjECs0NA1UcbycOfJkG0Zcoe1Qojx71DMrVzpX4EuKmFi8DFiIvj4G2FpXFo7uWAv7nUnRul9%2BFmmkLGk3hqEKeiRykjDWxO28BjqkAT9aj%2BBLqbxEwH9gsVW1qiUaDT6YJoprdfZoUYSodPlD%2BApnxNygSD%2BeeZ%2FkPEqqy8YP3ypNxasqrG8Bl6lz5P%2Fmk6%2FlwxpeR%2BRRb8TYDzpwCZv0WHMI721lE1bLzLZUx7%2BqNA4XtxHGB6H%2FZ0PjBLXuTBvU36tErLb72HfzUYSTA3jX00asOv1Z6IAvO2zwka2htOsbdDtPVZ%2FIQH9gsvIVAgXB&X-Amz-Signature=884e1cf3980e12fff299fe4a75f028ec50332ab048430610fa66de47773bf14a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7DR2CB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnDZwbqB6fGVf%2B6%2BozMsAAL0uMz0juGkWm55bIstOOAgIhAN%2B5KjvRQps9ik5oVs%2Fsi85PvWsD9cVm4MqGLPQNlbjLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeD9SIG2h141ysAYq3APGF6nQfGeM8gkWwZwyUJrffdLKMCOAAyMQEa4MK%2BEkGzHJXMVv5%2FYzaZmj%2Fl19CpvdsqOJqiqD80QxCAfXUTbLGJ2NewICx5FrM5djldI%2BrFjJp2opMXk4pvEYvXJbm3I28DV1YvBWKJkQfx591887JliC7iXMmV%2FBIQ3LKpnnnFmJdnZESim3a4u3IDtyTjApSyQQaR8j0ytfsOwQt2ENoRKxLNkE%2FwUBHa0vmjphylm9xmTeJiUwxwSVtsAyRfoRXwgcAsQTW24xdHiVPFIUpywqLbAfLhGlJpG1y%2F4yzqFXiQID2Qz%2BMp%2FcVPUgBnvkyOxDRBg7SdGJgGFLWH0QvWMjjiXAmJ0oJ8rEjNe%2FQMdFExM6RCVfKvQQBIYfqDjG%2F0%2F52gqJQiwPJVFwbVIDPKO2hfgbMIbLI26Y%2FVKLg%2FEneRlfD5Rbp5lMQ%2BUl7nGwn3GULg%2BzfLS0buwrYLRGacGfgveshf3zSq2PROkVLL7WA31dyI4TimWC%2F5S7v7jmTXauzl1mwwdx2SDw744pfJlSKFwWchHjECs0NA1UcbycOfJkG0Zcoe1Qojx71DMrVzpX4EuKmFi8DFiIvj4G2FpXFo7uWAv7nUnRul9%2BFmmkLGk3hqEKeiRykjDWxO28BjqkAT9aj%2BBLqbxEwH9gsVW1qiUaDT6YJoprdfZoUYSodPlD%2BApnxNygSD%2BeeZ%2FkPEqqy8YP3ypNxasqrG8Bl6lz5P%2Fmk6%2FlwxpeR%2BRRb8TYDzpwCZv0WHMI721lE1bLzLZUx7%2BqNA4XtxHGB6H%2FZ0PjBLXuTBvU36tErLb72HfzUYSTA3jX00asOv1Z6IAvO2zwka2htOsbdDtPVZ%2FIQH9gsvIVAgXB&X-Amz-Signature=b692f667e66be61384d52d8523deee3d03a877a83067a00ab56bb050cbae174c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7DR2CB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnDZwbqB6fGVf%2B6%2BozMsAAL0uMz0juGkWm55bIstOOAgIhAN%2B5KjvRQps9ik5oVs%2Fsi85PvWsD9cVm4MqGLPQNlbjLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeD9SIG2h141ysAYq3APGF6nQfGeM8gkWwZwyUJrffdLKMCOAAyMQEa4MK%2BEkGzHJXMVv5%2FYzaZmj%2Fl19CpvdsqOJqiqD80QxCAfXUTbLGJ2NewICx5FrM5djldI%2BrFjJp2opMXk4pvEYvXJbm3I28DV1YvBWKJkQfx591887JliC7iXMmV%2FBIQ3LKpnnnFmJdnZESim3a4u3IDtyTjApSyQQaR8j0ytfsOwQt2ENoRKxLNkE%2FwUBHa0vmjphylm9xmTeJiUwxwSVtsAyRfoRXwgcAsQTW24xdHiVPFIUpywqLbAfLhGlJpG1y%2F4yzqFXiQID2Qz%2BMp%2FcVPUgBnvkyOxDRBg7SdGJgGFLWH0QvWMjjiXAmJ0oJ8rEjNe%2FQMdFExM6RCVfKvQQBIYfqDjG%2F0%2F52gqJQiwPJVFwbVIDPKO2hfgbMIbLI26Y%2FVKLg%2FEneRlfD5Rbp5lMQ%2BUl7nGwn3GULg%2BzfLS0buwrYLRGacGfgveshf3zSq2PROkVLL7WA31dyI4TimWC%2F5S7v7jmTXauzl1mwwdx2SDw744pfJlSKFwWchHjECs0NA1UcbycOfJkG0Zcoe1Qojx71DMrVzpX4EuKmFi8DFiIvj4G2FpXFo7uWAv7nUnRul9%2BFmmkLGk3hqEKeiRykjDWxO28BjqkAT9aj%2BBLqbxEwH9gsVW1qiUaDT6YJoprdfZoUYSodPlD%2BApnxNygSD%2BeeZ%2FkPEqqy8YP3ypNxasqrG8Bl6lz5P%2Fmk6%2FlwxpeR%2BRRb8TYDzpwCZv0WHMI721lE1bLzLZUx7%2BqNA4XtxHGB6H%2FZ0PjBLXuTBvU36tErLb72HfzUYSTA3jX00asOv1Z6IAvO2zwka2htOsbdDtPVZ%2FIQH9gsvIVAgXB&X-Amz-Signature=a13f020ffb9698db66cf91abd585fe2f79849c695a8c2bf5817dd349778bdb74&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7DR2CB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnDZwbqB6fGVf%2B6%2BozMsAAL0uMz0juGkWm55bIstOOAgIhAN%2B5KjvRQps9ik5oVs%2Fsi85PvWsD9cVm4MqGLPQNlbjLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeD9SIG2h141ysAYq3APGF6nQfGeM8gkWwZwyUJrffdLKMCOAAyMQEa4MK%2BEkGzHJXMVv5%2FYzaZmj%2Fl19CpvdsqOJqiqD80QxCAfXUTbLGJ2NewICx5FrM5djldI%2BrFjJp2opMXk4pvEYvXJbm3I28DV1YvBWKJkQfx591887JliC7iXMmV%2FBIQ3LKpnnnFmJdnZESim3a4u3IDtyTjApSyQQaR8j0ytfsOwQt2ENoRKxLNkE%2FwUBHa0vmjphylm9xmTeJiUwxwSVtsAyRfoRXwgcAsQTW24xdHiVPFIUpywqLbAfLhGlJpG1y%2F4yzqFXiQID2Qz%2BMp%2FcVPUgBnvkyOxDRBg7SdGJgGFLWH0QvWMjjiXAmJ0oJ8rEjNe%2FQMdFExM6RCVfKvQQBIYfqDjG%2F0%2F52gqJQiwPJVFwbVIDPKO2hfgbMIbLI26Y%2FVKLg%2FEneRlfD5Rbp5lMQ%2BUl7nGwn3GULg%2BzfLS0buwrYLRGacGfgveshf3zSq2PROkVLL7WA31dyI4TimWC%2F5S7v7jmTXauzl1mwwdx2SDw744pfJlSKFwWchHjECs0NA1UcbycOfJkG0Zcoe1Qojx71DMrVzpX4EuKmFi8DFiIvj4G2FpXFo7uWAv7nUnRul9%2BFmmkLGk3hqEKeiRykjDWxO28BjqkAT9aj%2BBLqbxEwH9gsVW1qiUaDT6YJoprdfZoUYSodPlD%2BApnxNygSD%2BeeZ%2FkPEqqy8YP3ypNxasqrG8Bl6lz5P%2Fmk6%2FlwxpeR%2BRRb8TYDzpwCZv0WHMI721lE1bLzLZUx7%2BqNA4XtxHGB6H%2FZ0PjBLXuTBvU36tErLb72HfzUYSTA3jX00asOv1Z6IAvO2zwka2htOsbdDtPVZ%2FIQH9gsvIVAgXB&X-Amz-Signature=12bddd1195c473bfcb17c0377d3247a65a498a4acf7891328983bc82416ceddc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7DR2CB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnDZwbqB6fGVf%2B6%2BozMsAAL0uMz0juGkWm55bIstOOAgIhAN%2B5KjvRQps9ik5oVs%2Fsi85PvWsD9cVm4MqGLPQNlbjLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeD9SIG2h141ysAYq3APGF6nQfGeM8gkWwZwyUJrffdLKMCOAAyMQEa4MK%2BEkGzHJXMVv5%2FYzaZmj%2Fl19CpvdsqOJqiqD80QxCAfXUTbLGJ2NewICx5FrM5djldI%2BrFjJp2opMXk4pvEYvXJbm3I28DV1YvBWKJkQfx591887JliC7iXMmV%2FBIQ3LKpnnnFmJdnZESim3a4u3IDtyTjApSyQQaR8j0ytfsOwQt2ENoRKxLNkE%2FwUBHa0vmjphylm9xmTeJiUwxwSVtsAyRfoRXwgcAsQTW24xdHiVPFIUpywqLbAfLhGlJpG1y%2F4yzqFXiQID2Qz%2BMp%2FcVPUgBnvkyOxDRBg7SdGJgGFLWH0QvWMjjiXAmJ0oJ8rEjNe%2FQMdFExM6RCVfKvQQBIYfqDjG%2F0%2F52gqJQiwPJVFwbVIDPKO2hfgbMIbLI26Y%2FVKLg%2FEneRlfD5Rbp5lMQ%2BUl7nGwn3GULg%2BzfLS0buwrYLRGacGfgveshf3zSq2PROkVLL7WA31dyI4TimWC%2F5S7v7jmTXauzl1mwwdx2SDw744pfJlSKFwWchHjECs0NA1UcbycOfJkG0Zcoe1Qojx71DMrVzpX4EuKmFi8DFiIvj4G2FpXFo7uWAv7nUnRul9%2BFmmkLGk3hqEKeiRykjDWxO28BjqkAT9aj%2BBLqbxEwH9gsVW1qiUaDT6YJoprdfZoUYSodPlD%2BApnxNygSD%2BeeZ%2FkPEqqy8YP3ypNxasqrG8Bl6lz5P%2Fmk6%2FlwxpeR%2BRRb8TYDzpwCZv0WHMI721lE1bLzLZUx7%2BqNA4XtxHGB6H%2FZ0PjBLXuTBvU36tErLb72HfzUYSTA3jX00asOv1Z6IAvO2zwka2htOsbdDtPVZ%2FIQH9gsvIVAgXB&X-Amz-Signature=d738221c80241a448cf48fd300c1941efc6f82b960a82a9a628ca0de333344ec&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7DR2CB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnDZwbqB6fGVf%2B6%2BozMsAAL0uMz0juGkWm55bIstOOAgIhAN%2B5KjvRQps9ik5oVs%2Fsi85PvWsD9cVm4MqGLPQNlbjLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeD9SIG2h141ysAYq3APGF6nQfGeM8gkWwZwyUJrffdLKMCOAAyMQEa4MK%2BEkGzHJXMVv5%2FYzaZmj%2Fl19CpvdsqOJqiqD80QxCAfXUTbLGJ2NewICx5FrM5djldI%2BrFjJp2opMXk4pvEYvXJbm3I28DV1YvBWKJkQfx591887JliC7iXMmV%2FBIQ3LKpnnnFmJdnZESim3a4u3IDtyTjApSyQQaR8j0ytfsOwQt2ENoRKxLNkE%2FwUBHa0vmjphylm9xmTeJiUwxwSVtsAyRfoRXwgcAsQTW24xdHiVPFIUpywqLbAfLhGlJpG1y%2F4yzqFXiQID2Qz%2BMp%2FcVPUgBnvkyOxDRBg7SdGJgGFLWH0QvWMjjiXAmJ0oJ8rEjNe%2FQMdFExM6RCVfKvQQBIYfqDjG%2F0%2F52gqJQiwPJVFwbVIDPKO2hfgbMIbLI26Y%2FVKLg%2FEneRlfD5Rbp5lMQ%2BUl7nGwn3GULg%2BzfLS0buwrYLRGacGfgveshf3zSq2PROkVLL7WA31dyI4TimWC%2F5S7v7jmTXauzl1mwwdx2SDw744pfJlSKFwWchHjECs0NA1UcbycOfJkG0Zcoe1Qojx71DMrVzpX4EuKmFi8DFiIvj4G2FpXFo7uWAv7nUnRul9%2BFmmkLGk3hqEKeiRykjDWxO28BjqkAT9aj%2BBLqbxEwH9gsVW1qiUaDT6YJoprdfZoUYSodPlD%2BApnxNygSD%2BeeZ%2FkPEqqy8YP3ypNxasqrG8Bl6lz5P%2Fmk6%2FlwxpeR%2BRRb8TYDzpwCZv0WHMI721lE1bLzLZUx7%2BqNA4XtxHGB6H%2FZ0PjBLXuTBvU36tErLb72HfzUYSTA3jX00asOv1Z6IAvO2zwka2htOsbdDtPVZ%2FIQH9gsvIVAgXB&X-Amz-Signature=b51a66403e78fb24f76a19571b3ef0104638017ff663270804505c16376030ec&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7DR2CB%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T121349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnDZwbqB6fGVf%2B6%2BozMsAAL0uMz0juGkWm55bIstOOAgIhAN%2B5KjvRQps9ik5oVs%2Fsi85PvWsD9cVm4MqGLPQNlbjLKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZeD9SIG2h141ysAYq3APGF6nQfGeM8gkWwZwyUJrffdLKMCOAAyMQEa4MK%2BEkGzHJXMVv5%2FYzaZmj%2Fl19CpvdsqOJqiqD80QxCAfXUTbLGJ2NewICx5FrM5djldI%2BrFjJp2opMXk4pvEYvXJbm3I28DV1YvBWKJkQfx591887JliC7iXMmV%2FBIQ3LKpnnnFmJdnZESim3a4u3IDtyTjApSyQQaR8j0ytfsOwQt2ENoRKxLNkE%2FwUBHa0vmjphylm9xmTeJiUwxwSVtsAyRfoRXwgcAsQTW24xdHiVPFIUpywqLbAfLhGlJpG1y%2F4yzqFXiQID2Qz%2BMp%2FcVPUgBnvkyOxDRBg7SdGJgGFLWH0QvWMjjiXAmJ0oJ8rEjNe%2FQMdFExM6RCVfKvQQBIYfqDjG%2F0%2F52gqJQiwPJVFwbVIDPKO2hfgbMIbLI26Y%2FVKLg%2FEneRlfD5Rbp5lMQ%2BUl7nGwn3GULg%2BzfLS0buwrYLRGacGfgveshf3zSq2PROkVLL7WA31dyI4TimWC%2F5S7v7jmTXauzl1mwwdx2SDw744pfJlSKFwWchHjECs0NA1UcbycOfJkG0Zcoe1Qojx71DMrVzpX4EuKmFi8DFiIvj4G2FpXFo7uWAv7nUnRul9%2BFmmkLGk3hqEKeiRykjDWxO28BjqkAT9aj%2BBLqbxEwH9gsVW1qiUaDT6YJoprdfZoUYSodPlD%2BApnxNygSD%2BeeZ%2FkPEqqy8YP3ypNxasqrG8Bl6lz5P%2Fmk6%2FlwxpeR%2BRRb8TYDzpwCZv0WHMI721lE1bLzLZUx7%2BqNA4XtxHGB6H%2FZ0PjBLXuTBvU36tErLb72HfzUYSTA3jX00asOv1Z6IAvO2zwka2htOsbdDtPVZ%2FIQH9gsvIVAgXB&X-Amz-Signature=e6e4a7f9eed4d590319d9232f177597f874dd72e490bed0d74327cb09f1fcf6e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

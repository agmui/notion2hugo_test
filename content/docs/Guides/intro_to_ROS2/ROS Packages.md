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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5YPGRZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw3ipPnKKGDBEgu85tMW%2B6mnaKhyvNMzsXZ89%2Fg199KAIhAItZ8%2BUSW6IvC0LTSM%2FhWFE%2FzWp7caO05i9%2BPD4e0VSzKv8DCD4QABoMNjM3NDIzMTgzODA1IgyDEU%2B9pFGnzu7%2BriEq3APoyxV7Xak%2FBEBusWuKHScdQyKjk04wJBqhCdZdfvFPDVRhIjao3OuMwZ%2BSlAFz4NZMt0OPE%2Fcz1exNcM%2BEfM6XKUfMMrN3ICJqubdRsgqQwk6NpMfBmXPj%2BjYlZ7zbGYiQ9yynAoRKscoA3U0AUkDFEftrFPq%2Br6o5pvA9ieG0E0LT6Uae8S52GBZJlYk%2FgLCNafzLP9s0f7PZS%2FkZaGZlk1cDhbLLyXNh310XuoJl%2BhR7J2vjSSXVwPjqcOj7WS9PD3oWHd55czIG6V%2F39FmP0CbtsQH%2FNNzTTQsU4HQBxYODTiPO%2B34OgATdUKPG%2FkWIZNPKrUKSQYwiZdC28d9zB2kLyfndX2wp0MUqrnsl5NYrAZcvqzxLarceZU9%2B0WBNspnQ6QMsdX1sEYUW8Sp9BiJONY5E1PXYasn04G1paBSk0pDzNjfvVHdoewiCS0KY%2FsLJ9jqWpTm9WafSznsBULmAEqKgjREMeGNHNWJR7NuTZFCSv5PtHEkTOwuj5DLV4O1lfxNwZMPs7K%2F6%2FC27aQN5o8zHIrX9SyvbJAZ2%2FWJfvWQxySmdIq6F4RtSju4eiWISlbEGo2fokdwsyW8CL%2FqPeT6uqCXAyhmeGrkBDlPoY4uOr0xfcuGvVDCb296%2BBjqkASBftn52%2FQ9i016uBgUhmKVMHgjFZHapY%2BayK3ijXkKKkh9P93b4OKD5Kc8pRuSYQi%2FxGTfbjUYUewogITOJpKMFt%2B9GxjgiqKRxL3x12quf7m%2B7Kh0TZDrQaVqPc0BqXyqz9hdfo%2FZelYc77uCoT2QgTydtVDNvEhBqDKvu5TboC8iL5PW4LDNad5r9pt8xdR2YyFjZ3DtHb0FtbNT4xxztEn84&X-Amz-Signature=ccc65f8f31f7fa97b1d56d2f03f20ff5d00d79f51b176a95d6b45da4872354e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5YPGRZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw3ipPnKKGDBEgu85tMW%2B6mnaKhyvNMzsXZ89%2Fg199KAIhAItZ8%2BUSW6IvC0LTSM%2FhWFE%2FzWp7caO05i9%2BPD4e0VSzKv8DCD4QABoMNjM3NDIzMTgzODA1IgyDEU%2B9pFGnzu7%2BriEq3APoyxV7Xak%2FBEBusWuKHScdQyKjk04wJBqhCdZdfvFPDVRhIjao3OuMwZ%2BSlAFz4NZMt0OPE%2Fcz1exNcM%2BEfM6XKUfMMrN3ICJqubdRsgqQwk6NpMfBmXPj%2BjYlZ7zbGYiQ9yynAoRKscoA3U0AUkDFEftrFPq%2Br6o5pvA9ieG0E0LT6Uae8S52GBZJlYk%2FgLCNafzLP9s0f7PZS%2FkZaGZlk1cDhbLLyXNh310XuoJl%2BhR7J2vjSSXVwPjqcOj7WS9PD3oWHd55czIG6V%2F39FmP0CbtsQH%2FNNzTTQsU4HQBxYODTiPO%2B34OgATdUKPG%2FkWIZNPKrUKSQYwiZdC28d9zB2kLyfndX2wp0MUqrnsl5NYrAZcvqzxLarceZU9%2B0WBNspnQ6QMsdX1sEYUW8Sp9BiJONY5E1PXYasn04G1paBSk0pDzNjfvVHdoewiCS0KY%2FsLJ9jqWpTm9WafSznsBULmAEqKgjREMeGNHNWJR7NuTZFCSv5PtHEkTOwuj5DLV4O1lfxNwZMPs7K%2F6%2FC27aQN5o8zHIrX9SyvbJAZ2%2FWJfvWQxySmdIq6F4RtSju4eiWISlbEGo2fokdwsyW8CL%2FqPeT6uqCXAyhmeGrkBDlPoY4uOr0xfcuGvVDCb296%2BBjqkASBftn52%2FQ9i016uBgUhmKVMHgjFZHapY%2BayK3ijXkKKkh9P93b4OKD5Kc8pRuSYQi%2FxGTfbjUYUewogITOJpKMFt%2B9GxjgiqKRxL3x12quf7m%2B7Kh0TZDrQaVqPc0BqXyqz9hdfo%2FZelYc77uCoT2QgTydtVDNvEhBqDKvu5TboC8iL5PW4LDNad5r9pt8xdR2YyFjZ3DtHb0FtbNT4xxztEn84&X-Amz-Signature=f3a7c0b04203660759059bb3f83b6edc4cf39fe4164586796ddd5c53a6056b37&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5YPGRZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw3ipPnKKGDBEgu85tMW%2B6mnaKhyvNMzsXZ89%2Fg199KAIhAItZ8%2BUSW6IvC0LTSM%2FhWFE%2FzWp7caO05i9%2BPD4e0VSzKv8DCD4QABoMNjM3NDIzMTgzODA1IgyDEU%2B9pFGnzu7%2BriEq3APoyxV7Xak%2FBEBusWuKHScdQyKjk04wJBqhCdZdfvFPDVRhIjao3OuMwZ%2BSlAFz4NZMt0OPE%2Fcz1exNcM%2BEfM6XKUfMMrN3ICJqubdRsgqQwk6NpMfBmXPj%2BjYlZ7zbGYiQ9yynAoRKscoA3U0AUkDFEftrFPq%2Br6o5pvA9ieG0E0LT6Uae8S52GBZJlYk%2FgLCNafzLP9s0f7PZS%2FkZaGZlk1cDhbLLyXNh310XuoJl%2BhR7J2vjSSXVwPjqcOj7WS9PD3oWHd55czIG6V%2F39FmP0CbtsQH%2FNNzTTQsU4HQBxYODTiPO%2B34OgATdUKPG%2FkWIZNPKrUKSQYwiZdC28d9zB2kLyfndX2wp0MUqrnsl5NYrAZcvqzxLarceZU9%2B0WBNspnQ6QMsdX1sEYUW8Sp9BiJONY5E1PXYasn04G1paBSk0pDzNjfvVHdoewiCS0KY%2FsLJ9jqWpTm9WafSznsBULmAEqKgjREMeGNHNWJR7NuTZFCSv5PtHEkTOwuj5DLV4O1lfxNwZMPs7K%2F6%2FC27aQN5o8zHIrX9SyvbJAZ2%2FWJfvWQxySmdIq6F4RtSju4eiWISlbEGo2fokdwsyW8CL%2FqPeT6uqCXAyhmeGrkBDlPoY4uOr0xfcuGvVDCb296%2BBjqkASBftn52%2FQ9i016uBgUhmKVMHgjFZHapY%2BayK3ijXkKKkh9P93b4OKD5Kc8pRuSYQi%2FxGTfbjUYUewogITOJpKMFt%2B9GxjgiqKRxL3x12quf7m%2B7Kh0TZDrQaVqPc0BqXyqz9hdfo%2FZelYc77uCoT2QgTydtVDNvEhBqDKvu5TboC8iL5PW4LDNad5r9pt8xdR2YyFjZ3DtHb0FtbNT4xxztEn84&X-Amz-Signature=0f5f64e0c0accdae904b5636bab61b8729846b6793d7fc9aeaa45292b6952e99&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5YPGRZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw3ipPnKKGDBEgu85tMW%2B6mnaKhyvNMzsXZ89%2Fg199KAIhAItZ8%2BUSW6IvC0LTSM%2FhWFE%2FzWp7caO05i9%2BPD4e0VSzKv8DCD4QABoMNjM3NDIzMTgzODA1IgyDEU%2B9pFGnzu7%2BriEq3APoyxV7Xak%2FBEBusWuKHScdQyKjk04wJBqhCdZdfvFPDVRhIjao3OuMwZ%2BSlAFz4NZMt0OPE%2Fcz1exNcM%2BEfM6XKUfMMrN3ICJqubdRsgqQwk6NpMfBmXPj%2BjYlZ7zbGYiQ9yynAoRKscoA3U0AUkDFEftrFPq%2Br6o5pvA9ieG0E0LT6Uae8S52GBZJlYk%2FgLCNafzLP9s0f7PZS%2FkZaGZlk1cDhbLLyXNh310XuoJl%2BhR7J2vjSSXVwPjqcOj7WS9PD3oWHd55czIG6V%2F39FmP0CbtsQH%2FNNzTTQsU4HQBxYODTiPO%2B34OgATdUKPG%2FkWIZNPKrUKSQYwiZdC28d9zB2kLyfndX2wp0MUqrnsl5NYrAZcvqzxLarceZU9%2B0WBNspnQ6QMsdX1sEYUW8Sp9BiJONY5E1PXYasn04G1paBSk0pDzNjfvVHdoewiCS0KY%2FsLJ9jqWpTm9WafSznsBULmAEqKgjREMeGNHNWJR7NuTZFCSv5PtHEkTOwuj5DLV4O1lfxNwZMPs7K%2F6%2FC27aQN5o8zHIrX9SyvbJAZ2%2FWJfvWQxySmdIq6F4RtSju4eiWISlbEGo2fokdwsyW8CL%2FqPeT6uqCXAyhmeGrkBDlPoY4uOr0xfcuGvVDCb296%2BBjqkASBftn52%2FQ9i016uBgUhmKVMHgjFZHapY%2BayK3ijXkKKkh9P93b4OKD5Kc8pRuSYQi%2FxGTfbjUYUewogITOJpKMFt%2B9GxjgiqKRxL3x12quf7m%2B7Kh0TZDrQaVqPc0BqXyqz9hdfo%2FZelYc77uCoT2QgTydtVDNvEhBqDKvu5TboC8iL5PW4LDNad5r9pt8xdR2YyFjZ3DtHb0FtbNT4xxztEn84&X-Amz-Signature=cd1a9c2cacb59f4e0dceec7826bec11a8298833bee7f0170d32892ead27442f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5YPGRZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw3ipPnKKGDBEgu85tMW%2B6mnaKhyvNMzsXZ89%2Fg199KAIhAItZ8%2BUSW6IvC0LTSM%2FhWFE%2FzWp7caO05i9%2BPD4e0VSzKv8DCD4QABoMNjM3NDIzMTgzODA1IgyDEU%2B9pFGnzu7%2BriEq3APoyxV7Xak%2FBEBusWuKHScdQyKjk04wJBqhCdZdfvFPDVRhIjao3OuMwZ%2BSlAFz4NZMt0OPE%2Fcz1exNcM%2BEfM6XKUfMMrN3ICJqubdRsgqQwk6NpMfBmXPj%2BjYlZ7zbGYiQ9yynAoRKscoA3U0AUkDFEftrFPq%2Br6o5pvA9ieG0E0LT6Uae8S52GBZJlYk%2FgLCNafzLP9s0f7PZS%2FkZaGZlk1cDhbLLyXNh310XuoJl%2BhR7J2vjSSXVwPjqcOj7WS9PD3oWHd55czIG6V%2F39FmP0CbtsQH%2FNNzTTQsU4HQBxYODTiPO%2B34OgATdUKPG%2FkWIZNPKrUKSQYwiZdC28d9zB2kLyfndX2wp0MUqrnsl5NYrAZcvqzxLarceZU9%2B0WBNspnQ6QMsdX1sEYUW8Sp9BiJONY5E1PXYasn04G1paBSk0pDzNjfvVHdoewiCS0KY%2FsLJ9jqWpTm9WafSznsBULmAEqKgjREMeGNHNWJR7NuTZFCSv5PtHEkTOwuj5DLV4O1lfxNwZMPs7K%2F6%2FC27aQN5o8zHIrX9SyvbJAZ2%2FWJfvWQxySmdIq6F4RtSju4eiWISlbEGo2fokdwsyW8CL%2FqPeT6uqCXAyhmeGrkBDlPoY4uOr0xfcuGvVDCb296%2BBjqkASBftn52%2FQ9i016uBgUhmKVMHgjFZHapY%2BayK3ijXkKKkh9P93b4OKD5Kc8pRuSYQi%2FxGTfbjUYUewogITOJpKMFt%2B9GxjgiqKRxL3x12quf7m%2B7Kh0TZDrQaVqPc0BqXyqz9hdfo%2FZelYc77uCoT2QgTydtVDNvEhBqDKvu5TboC8iL5PW4LDNad5r9pt8xdR2YyFjZ3DtHb0FtbNT4xxztEn84&X-Amz-Signature=492d542371cfa1a472f7639cb5acb44d961193f651333b21a891f5f18f1c9fef&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5YPGRZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw3ipPnKKGDBEgu85tMW%2B6mnaKhyvNMzsXZ89%2Fg199KAIhAItZ8%2BUSW6IvC0LTSM%2FhWFE%2FzWp7caO05i9%2BPD4e0VSzKv8DCD4QABoMNjM3NDIzMTgzODA1IgyDEU%2B9pFGnzu7%2BriEq3APoyxV7Xak%2FBEBusWuKHScdQyKjk04wJBqhCdZdfvFPDVRhIjao3OuMwZ%2BSlAFz4NZMt0OPE%2Fcz1exNcM%2BEfM6XKUfMMrN3ICJqubdRsgqQwk6NpMfBmXPj%2BjYlZ7zbGYiQ9yynAoRKscoA3U0AUkDFEftrFPq%2Br6o5pvA9ieG0E0LT6Uae8S52GBZJlYk%2FgLCNafzLP9s0f7PZS%2FkZaGZlk1cDhbLLyXNh310XuoJl%2BhR7J2vjSSXVwPjqcOj7WS9PD3oWHd55czIG6V%2F39FmP0CbtsQH%2FNNzTTQsU4HQBxYODTiPO%2B34OgATdUKPG%2FkWIZNPKrUKSQYwiZdC28d9zB2kLyfndX2wp0MUqrnsl5NYrAZcvqzxLarceZU9%2B0WBNspnQ6QMsdX1sEYUW8Sp9BiJONY5E1PXYasn04G1paBSk0pDzNjfvVHdoewiCS0KY%2FsLJ9jqWpTm9WafSznsBULmAEqKgjREMeGNHNWJR7NuTZFCSv5PtHEkTOwuj5DLV4O1lfxNwZMPs7K%2F6%2FC27aQN5o8zHIrX9SyvbJAZ2%2FWJfvWQxySmdIq6F4RtSju4eiWISlbEGo2fokdwsyW8CL%2FqPeT6uqCXAyhmeGrkBDlPoY4uOr0xfcuGvVDCb296%2BBjqkASBftn52%2FQ9i016uBgUhmKVMHgjFZHapY%2BayK3ijXkKKkh9P93b4OKD5Kc8pRuSYQi%2FxGTfbjUYUewogITOJpKMFt%2B9GxjgiqKRxL3x12quf7m%2B7Kh0TZDrQaVqPc0BqXyqz9hdfo%2FZelYc77uCoT2QgTydtVDNvEhBqDKvu5TboC8iL5PW4LDNad5r9pt8xdR2YyFjZ3DtHb0FtbNT4xxztEn84&X-Amz-Signature=61a0bb85f2b06b002f9fbc668d9b50857f132f8e9ff369f82bb364eec6953082&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TV5YPGRZ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw3ipPnKKGDBEgu85tMW%2B6mnaKhyvNMzsXZ89%2Fg199KAIhAItZ8%2BUSW6IvC0LTSM%2FhWFE%2FzWp7caO05i9%2BPD4e0VSzKv8DCD4QABoMNjM3NDIzMTgzODA1IgyDEU%2B9pFGnzu7%2BriEq3APoyxV7Xak%2FBEBusWuKHScdQyKjk04wJBqhCdZdfvFPDVRhIjao3OuMwZ%2BSlAFz4NZMt0OPE%2Fcz1exNcM%2BEfM6XKUfMMrN3ICJqubdRsgqQwk6NpMfBmXPj%2BjYlZ7zbGYiQ9yynAoRKscoA3U0AUkDFEftrFPq%2Br6o5pvA9ieG0E0LT6Uae8S52GBZJlYk%2FgLCNafzLP9s0f7PZS%2FkZaGZlk1cDhbLLyXNh310XuoJl%2BhR7J2vjSSXVwPjqcOj7WS9PD3oWHd55czIG6V%2F39FmP0CbtsQH%2FNNzTTQsU4HQBxYODTiPO%2B34OgATdUKPG%2FkWIZNPKrUKSQYwiZdC28d9zB2kLyfndX2wp0MUqrnsl5NYrAZcvqzxLarceZU9%2B0WBNspnQ6QMsdX1sEYUW8Sp9BiJONY5E1PXYasn04G1paBSk0pDzNjfvVHdoewiCS0KY%2FsLJ9jqWpTm9WafSznsBULmAEqKgjREMeGNHNWJR7NuTZFCSv5PtHEkTOwuj5DLV4O1lfxNwZMPs7K%2F6%2FC27aQN5o8zHIrX9SyvbJAZ2%2FWJfvWQxySmdIq6F4RtSju4eiWISlbEGo2fokdwsyW8CL%2FqPeT6uqCXAyhmeGrkBDlPoY4uOr0xfcuGvVDCb296%2BBjqkASBftn52%2FQ9i016uBgUhmKVMHgjFZHapY%2BayK3ijXkKKkh9P93b4OKD5Kc8pRuSYQi%2FxGTfbjUYUewogITOJpKMFt%2B9GxjgiqKRxL3x12quf7m%2B7Kh0TZDrQaVqPc0BqXyqz9hdfo%2FZelYc77uCoT2QgTydtVDNvEhBqDKvu5TboC8iL5PW4LDNad5r9pt8xdR2YyFjZ3DtHb0FtbNT4xxztEn84&X-Amz-Signature=091677e04c0517ad97c2e37f5db94f855b94204a19d2cbf3ce7d61c8c0897a29&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

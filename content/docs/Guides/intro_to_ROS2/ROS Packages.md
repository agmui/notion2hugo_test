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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG5UTX6A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFuOTGqTp7vrd91wOMSkH%2BsfnfB%2B0a9JVWHbgZw4cshjAiBOjxtlEa%2FCSYBDoVGLy9zVA9FO4kuDzNL5hPzN5UTrxir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMJisLA2iZ9zwTXYR8KtwDLKRRyMiCEKQWisqQCWhQG9QlsoDwfP%2BHIoFYTz8XNwnzFu8uXDAn0D9PMAKKk6jDoqsXGlR%2FXvftCbUb%2B5c%2BZCIl%2F2MzRZjqGd%2F%2Bby7DYYfB3NrKCsCGNMRaEY0pWgBDKU47SB0mCG7qZYavPUnhlsksHWW66iAs5hTXvag83clUC23yiyzEd55dVc5rmgLmvVujz4ceVUhGXWKhb0SxNSTh1ZZSyA6MAi2%2FEqlePtnKUjuZYl6uRk7smDmd1Rv6r1Xl8oMKn1RvlaQQqJ4LwWKUIrE%2FzPc51kNQ60xC66HuHV70QPYP5lkMHKUVE%2Fz%2BRjghyzgH05og6JfxZjA1EinIB4kUEShXhO66dHMOMFG2Tfbhr%2For5iM2VugZhJLhEza%2BbWqei4rPFgr2wwl2QgWwTb6hWQ8nMg%2Bqeagoijx4V675W1juhzNoKKC%2Bf5LluOPRBt6WZXd0QWasee1M0%2FZKKWeq%2BPX0KFrZfMGunakaK0QX%2FqfKlIt7kD2b2jfI2ZC7aayXm6knlLzSB6td2sohzfAaDx8AG9GZ9oWJb4WcMcqB8gRnZhaz4d6dmSIBgWxCixjUWAYPSRXF9D9yZY9jWk09YRDgn0cxvBVpSNjxwh%2BkeVo%2BMZ%2BIXPkwr4CBwgY6pgEVCN2yoimx4G01H00ny1dwFj%2B8Ot3JmYtrPb0DFXAF4hZfh3JiZbokhi0RZjZYjXgNNo0k721Ikag2x8Pp9Ibs9RgEKTgMRrMg3IBkybzqc6ypo9M4YvidNLf0gZncXgh%2BmObs3QVVthBaKM1wFuJXDMf3m8Wyy7hwmSv9HEomc3Jht3YlfIwt%2FHdU3qGWjCyErZ%2FPXRvfDwqFhanXy%2FKSyfSND3MT&X-Amz-Signature=8a6a1ec1c4d323cd3300cba970f4da6a40bab667dbbc28bcae1fec1464e480e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG5UTX6A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFuOTGqTp7vrd91wOMSkH%2BsfnfB%2B0a9JVWHbgZw4cshjAiBOjxtlEa%2FCSYBDoVGLy9zVA9FO4kuDzNL5hPzN5UTrxir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMJisLA2iZ9zwTXYR8KtwDLKRRyMiCEKQWisqQCWhQG9QlsoDwfP%2BHIoFYTz8XNwnzFu8uXDAn0D9PMAKKk6jDoqsXGlR%2FXvftCbUb%2B5c%2BZCIl%2F2MzRZjqGd%2F%2Bby7DYYfB3NrKCsCGNMRaEY0pWgBDKU47SB0mCG7qZYavPUnhlsksHWW66iAs5hTXvag83clUC23yiyzEd55dVc5rmgLmvVujz4ceVUhGXWKhb0SxNSTh1ZZSyA6MAi2%2FEqlePtnKUjuZYl6uRk7smDmd1Rv6r1Xl8oMKn1RvlaQQqJ4LwWKUIrE%2FzPc51kNQ60xC66HuHV70QPYP5lkMHKUVE%2Fz%2BRjghyzgH05og6JfxZjA1EinIB4kUEShXhO66dHMOMFG2Tfbhr%2For5iM2VugZhJLhEza%2BbWqei4rPFgr2wwl2QgWwTb6hWQ8nMg%2Bqeagoijx4V675W1juhzNoKKC%2Bf5LluOPRBt6WZXd0QWasee1M0%2FZKKWeq%2BPX0KFrZfMGunakaK0QX%2FqfKlIt7kD2b2jfI2ZC7aayXm6knlLzSB6td2sohzfAaDx8AG9GZ9oWJb4WcMcqB8gRnZhaz4d6dmSIBgWxCixjUWAYPSRXF9D9yZY9jWk09YRDgn0cxvBVpSNjxwh%2BkeVo%2BMZ%2BIXPkwr4CBwgY6pgEVCN2yoimx4G01H00ny1dwFj%2B8Ot3JmYtrPb0DFXAF4hZfh3JiZbokhi0RZjZYjXgNNo0k721Ikag2x8Pp9Ibs9RgEKTgMRrMg3IBkybzqc6ypo9M4YvidNLf0gZncXgh%2BmObs3QVVthBaKM1wFuJXDMf3m8Wyy7hwmSv9HEomc3Jht3YlfIwt%2FHdU3qGWjCyErZ%2FPXRvfDwqFhanXy%2FKSyfSND3MT&X-Amz-Signature=ea36ee8e1eec873ab777ee1699df725ae1a77c7df8fd9b7c346478f3b0ce7232&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG5UTX6A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFuOTGqTp7vrd91wOMSkH%2BsfnfB%2B0a9JVWHbgZw4cshjAiBOjxtlEa%2FCSYBDoVGLy9zVA9FO4kuDzNL5hPzN5UTrxir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMJisLA2iZ9zwTXYR8KtwDLKRRyMiCEKQWisqQCWhQG9QlsoDwfP%2BHIoFYTz8XNwnzFu8uXDAn0D9PMAKKk6jDoqsXGlR%2FXvftCbUb%2B5c%2BZCIl%2F2MzRZjqGd%2F%2Bby7DYYfB3NrKCsCGNMRaEY0pWgBDKU47SB0mCG7qZYavPUnhlsksHWW66iAs5hTXvag83clUC23yiyzEd55dVc5rmgLmvVujz4ceVUhGXWKhb0SxNSTh1ZZSyA6MAi2%2FEqlePtnKUjuZYl6uRk7smDmd1Rv6r1Xl8oMKn1RvlaQQqJ4LwWKUIrE%2FzPc51kNQ60xC66HuHV70QPYP5lkMHKUVE%2Fz%2BRjghyzgH05og6JfxZjA1EinIB4kUEShXhO66dHMOMFG2Tfbhr%2For5iM2VugZhJLhEza%2BbWqei4rPFgr2wwl2QgWwTb6hWQ8nMg%2Bqeagoijx4V675W1juhzNoKKC%2Bf5LluOPRBt6WZXd0QWasee1M0%2FZKKWeq%2BPX0KFrZfMGunakaK0QX%2FqfKlIt7kD2b2jfI2ZC7aayXm6knlLzSB6td2sohzfAaDx8AG9GZ9oWJb4WcMcqB8gRnZhaz4d6dmSIBgWxCixjUWAYPSRXF9D9yZY9jWk09YRDgn0cxvBVpSNjxwh%2BkeVo%2BMZ%2BIXPkwr4CBwgY6pgEVCN2yoimx4G01H00ny1dwFj%2B8Ot3JmYtrPb0DFXAF4hZfh3JiZbokhi0RZjZYjXgNNo0k721Ikag2x8Pp9Ibs9RgEKTgMRrMg3IBkybzqc6ypo9M4YvidNLf0gZncXgh%2BmObs3QVVthBaKM1wFuJXDMf3m8Wyy7hwmSv9HEomc3Jht3YlfIwt%2FHdU3qGWjCyErZ%2FPXRvfDwqFhanXy%2FKSyfSND3MT&X-Amz-Signature=f4ba720565cb6ce9b452c278c1ce3d492f7f5fafda8eedf9cff64d544b36ff3a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG5UTX6A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFuOTGqTp7vrd91wOMSkH%2BsfnfB%2B0a9JVWHbgZw4cshjAiBOjxtlEa%2FCSYBDoVGLy9zVA9FO4kuDzNL5hPzN5UTrxir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMJisLA2iZ9zwTXYR8KtwDLKRRyMiCEKQWisqQCWhQG9QlsoDwfP%2BHIoFYTz8XNwnzFu8uXDAn0D9PMAKKk6jDoqsXGlR%2FXvftCbUb%2B5c%2BZCIl%2F2MzRZjqGd%2F%2Bby7DYYfB3NrKCsCGNMRaEY0pWgBDKU47SB0mCG7qZYavPUnhlsksHWW66iAs5hTXvag83clUC23yiyzEd55dVc5rmgLmvVujz4ceVUhGXWKhb0SxNSTh1ZZSyA6MAi2%2FEqlePtnKUjuZYl6uRk7smDmd1Rv6r1Xl8oMKn1RvlaQQqJ4LwWKUIrE%2FzPc51kNQ60xC66HuHV70QPYP5lkMHKUVE%2Fz%2BRjghyzgH05og6JfxZjA1EinIB4kUEShXhO66dHMOMFG2Tfbhr%2For5iM2VugZhJLhEza%2BbWqei4rPFgr2wwl2QgWwTb6hWQ8nMg%2Bqeagoijx4V675W1juhzNoKKC%2Bf5LluOPRBt6WZXd0QWasee1M0%2FZKKWeq%2BPX0KFrZfMGunakaK0QX%2FqfKlIt7kD2b2jfI2ZC7aayXm6knlLzSB6td2sohzfAaDx8AG9GZ9oWJb4WcMcqB8gRnZhaz4d6dmSIBgWxCixjUWAYPSRXF9D9yZY9jWk09YRDgn0cxvBVpSNjxwh%2BkeVo%2BMZ%2BIXPkwr4CBwgY6pgEVCN2yoimx4G01H00ny1dwFj%2B8Ot3JmYtrPb0DFXAF4hZfh3JiZbokhi0RZjZYjXgNNo0k721Ikag2x8Pp9Ibs9RgEKTgMRrMg3IBkybzqc6ypo9M4YvidNLf0gZncXgh%2BmObs3QVVthBaKM1wFuJXDMf3m8Wyy7hwmSv9HEomc3Jht3YlfIwt%2FHdU3qGWjCyErZ%2FPXRvfDwqFhanXy%2FKSyfSND3MT&X-Amz-Signature=dd4de9c395fc736a3967668f7cac341f63dd85839ff3ec5f3904f6620c34acfb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG5UTX6A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFuOTGqTp7vrd91wOMSkH%2BsfnfB%2B0a9JVWHbgZw4cshjAiBOjxtlEa%2FCSYBDoVGLy9zVA9FO4kuDzNL5hPzN5UTrxir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMJisLA2iZ9zwTXYR8KtwDLKRRyMiCEKQWisqQCWhQG9QlsoDwfP%2BHIoFYTz8XNwnzFu8uXDAn0D9PMAKKk6jDoqsXGlR%2FXvftCbUb%2B5c%2BZCIl%2F2MzRZjqGd%2F%2Bby7DYYfB3NrKCsCGNMRaEY0pWgBDKU47SB0mCG7qZYavPUnhlsksHWW66iAs5hTXvag83clUC23yiyzEd55dVc5rmgLmvVujz4ceVUhGXWKhb0SxNSTh1ZZSyA6MAi2%2FEqlePtnKUjuZYl6uRk7smDmd1Rv6r1Xl8oMKn1RvlaQQqJ4LwWKUIrE%2FzPc51kNQ60xC66HuHV70QPYP5lkMHKUVE%2Fz%2BRjghyzgH05og6JfxZjA1EinIB4kUEShXhO66dHMOMFG2Tfbhr%2For5iM2VugZhJLhEza%2BbWqei4rPFgr2wwl2QgWwTb6hWQ8nMg%2Bqeagoijx4V675W1juhzNoKKC%2Bf5LluOPRBt6WZXd0QWasee1M0%2FZKKWeq%2BPX0KFrZfMGunakaK0QX%2FqfKlIt7kD2b2jfI2ZC7aayXm6knlLzSB6td2sohzfAaDx8AG9GZ9oWJb4WcMcqB8gRnZhaz4d6dmSIBgWxCixjUWAYPSRXF9D9yZY9jWk09YRDgn0cxvBVpSNjxwh%2BkeVo%2BMZ%2BIXPkwr4CBwgY6pgEVCN2yoimx4G01H00ny1dwFj%2B8Ot3JmYtrPb0DFXAF4hZfh3JiZbokhi0RZjZYjXgNNo0k721Ikag2x8Pp9Ibs9RgEKTgMRrMg3IBkybzqc6ypo9M4YvidNLf0gZncXgh%2BmObs3QVVthBaKM1wFuJXDMf3m8Wyy7hwmSv9HEomc3Jht3YlfIwt%2FHdU3qGWjCyErZ%2FPXRvfDwqFhanXy%2FKSyfSND3MT&X-Amz-Signature=ce7b53f3e5ac991c97f14f0ee22bef2a1a13bd036e81ff89c925929f1a727538&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG5UTX6A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFuOTGqTp7vrd91wOMSkH%2BsfnfB%2B0a9JVWHbgZw4cshjAiBOjxtlEa%2FCSYBDoVGLy9zVA9FO4kuDzNL5hPzN5UTrxir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMJisLA2iZ9zwTXYR8KtwDLKRRyMiCEKQWisqQCWhQG9QlsoDwfP%2BHIoFYTz8XNwnzFu8uXDAn0D9PMAKKk6jDoqsXGlR%2FXvftCbUb%2B5c%2BZCIl%2F2MzRZjqGd%2F%2Bby7DYYfB3NrKCsCGNMRaEY0pWgBDKU47SB0mCG7qZYavPUnhlsksHWW66iAs5hTXvag83clUC23yiyzEd55dVc5rmgLmvVujz4ceVUhGXWKhb0SxNSTh1ZZSyA6MAi2%2FEqlePtnKUjuZYl6uRk7smDmd1Rv6r1Xl8oMKn1RvlaQQqJ4LwWKUIrE%2FzPc51kNQ60xC66HuHV70QPYP5lkMHKUVE%2Fz%2BRjghyzgH05og6JfxZjA1EinIB4kUEShXhO66dHMOMFG2Tfbhr%2For5iM2VugZhJLhEza%2BbWqei4rPFgr2wwl2QgWwTb6hWQ8nMg%2Bqeagoijx4V675W1juhzNoKKC%2Bf5LluOPRBt6WZXd0QWasee1M0%2FZKKWeq%2BPX0KFrZfMGunakaK0QX%2FqfKlIt7kD2b2jfI2ZC7aayXm6knlLzSB6td2sohzfAaDx8AG9GZ9oWJb4WcMcqB8gRnZhaz4d6dmSIBgWxCixjUWAYPSRXF9D9yZY9jWk09YRDgn0cxvBVpSNjxwh%2BkeVo%2BMZ%2BIXPkwr4CBwgY6pgEVCN2yoimx4G01H00ny1dwFj%2B8Ot3JmYtrPb0DFXAF4hZfh3JiZbokhi0RZjZYjXgNNo0k721Ikag2x8Pp9Ibs9RgEKTgMRrMg3IBkybzqc6ypo9M4YvidNLf0gZncXgh%2BmObs3QVVthBaKM1wFuJXDMf3m8Wyy7hwmSv9HEomc3Jht3YlfIwt%2FHdU3qGWjCyErZ%2FPXRvfDwqFhanXy%2FKSyfSND3MT&X-Amz-Signature=3ac0a0493d0eac39567ffdaad10ee3f3807de8db17337567adfaf464a00c5037&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG5UTX6A%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T132647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIFuOTGqTp7vrd91wOMSkH%2BsfnfB%2B0a9JVWHbgZw4cshjAiBOjxtlEa%2FCSYBDoVGLy9zVA9FO4kuDzNL5hPzN5UTrxir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMJisLA2iZ9zwTXYR8KtwDLKRRyMiCEKQWisqQCWhQG9QlsoDwfP%2BHIoFYTz8XNwnzFu8uXDAn0D9PMAKKk6jDoqsXGlR%2FXvftCbUb%2B5c%2BZCIl%2F2MzRZjqGd%2F%2Bby7DYYfB3NrKCsCGNMRaEY0pWgBDKU47SB0mCG7qZYavPUnhlsksHWW66iAs5hTXvag83clUC23yiyzEd55dVc5rmgLmvVujz4ceVUhGXWKhb0SxNSTh1ZZSyA6MAi2%2FEqlePtnKUjuZYl6uRk7smDmd1Rv6r1Xl8oMKn1RvlaQQqJ4LwWKUIrE%2FzPc51kNQ60xC66HuHV70QPYP5lkMHKUVE%2Fz%2BRjghyzgH05og6JfxZjA1EinIB4kUEShXhO66dHMOMFG2Tfbhr%2For5iM2VugZhJLhEza%2BbWqei4rPFgr2wwl2QgWwTb6hWQ8nMg%2Bqeagoijx4V675W1juhzNoKKC%2Bf5LluOPRBt6WZXd0QWasee1M0%2FZKKWeq%2BPX0KFrZfMGunakaK0QX%2FqfKlIt7kD2b2jfI2ZC7aayXm6knlLzSB6td2sohzfAaDx8AG9GZ9oWJb4WcMcqB8gRnZhaz4d6dmSIBgWxCixjUWAYPSRXF9D9yZY9jWk09YRDgn0cxvBVpSNjxwh%2BkeVo%2BMZ%2BIXPkwr4CBwgY6pgEVCN2yoimx4G01H00ny1dwFj%2B8Ot3JmYtrPb0DFXAF4hZfh3JiZbokhi0RZjZYjXgNNo0k721Ikag2x8Pp9Ibs9RgEKTgMRrMg3IBkybzqc6ypo9M4YvidNLf0gZncXgh%2BmObs3QVVthBaKM1wFuJXDMf3m8Wyy7hwmSv9HEomc3Jht3YlfIwt%2FHdU3qGWjCyErZ%2FPXRvfDwqFhanXy%2FKSyfSND3MT&X-Amz-Signature=22acc61d897a6d8dc3c39666d9e8c6a2e348a9e685bf9362ba948e06c9412581&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

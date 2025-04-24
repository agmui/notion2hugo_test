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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4Z5DBEJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvFvL3NP2Zgf1FZcdVJxCqjrHP3yPi%2BnmVP8o5fUXyMAIgHn2nQYnb85CCHiWsAKBLlMXJSmHB0n%2FE1bEs3pOVuf0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNPy%2BMstvx2ewbXA1CrcA8HzalMh2l%2BApBzBE%2F3MEucJKBles3cP0HGDk7Awdt66A0r6ZXUxo6psseKQow9VuQWX5o3gApRHyI8s2f2vbXlnbds1IGcY092L2A90YYGjVtjrD%2BoUmse9nWNg%2BgsFSTXgcLGeGZf6A%2FK9S9g63JP05sWDlsSoBuEQsY%2BVUutLo%2FYGVAX3xoSZD73hA2AyjSFKRlZy%2FCskx6xQmZvAnW17oSJ6b9CJfkkXu27%2BxmFyb5XZfqhSAYHN2Sc7OtZmunt4APoBAf8gUL1zB8ziIBPZDtevC6H1Ct3h%2BalBBm9fnUg0R6c5AUbrtUKrtUz6T7ERDXfUKZDS2Rygr8AyRLx58NnbNjPJQjut%2FiyUbr0r8klRdgJcIp3RpnyVjaShhc8FLcF4dU%2BljjDsyfj6GJaRw%2B5Fl7SplLL3t4ocaj2Z3nJl2gOVPQhLvtnWQrBIhzoSpzejUsuuxJZNOdiSzJck03ZIVRfKHfx%2FfkhKVwNIbMCBT9URbd0ACfYerGCJDnEKsEPxTbXVdoj9mb6z%2BNUC7AfKWNnq6z6OxhQiiRH%2BmiWYYjdXSWtEqpxUjHWhZW8WJVDfVG9ztcM9TY133MqA1eDjjGX3f15t45EpH3W4KLXyq9%2BLUE7j1zVjMKLVqcAGOqUBHcTnPDfexmJB0gUauGmB26aYZSESfRLOJtYYQJZ%2FaM5kEK3FfQjsPTEd7Ce9A5PVHd1Me1HXZl4xcaEmbpFBxsqu4K%2BPGIHRF2ihiY30mKXF1y9n6Sjz3mbRCTUh2J0HSodZYrwkagQiv15YG3hY9mHFOjsXSE4ffp55Bzl25xpj2nIwm1evXsOY2QViE%2BxPz7S0Bi5kgxp64YBpH5REe2z1m6MB&X-Amz-Signature=89c1d44ca6c4ef773e29fdcaec1589beedbdd3cfa160e46cd0398769240d301d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4Z5DBEJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvFvL3NP2Zgf1FZcdVJxCqjrHP3yPi%2BnmVP8o5fUXyMAIgHn2nQYnb85CCHiWsAKBLlMXJSmHB0n%2FE1bEs3pOVuf0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNPy%2BMstvx2ewbXA1CrcA8HzalMh2l%2BApBzBE%2F3MEucJKBles3cP0HGDk7Awdt66A0r6ZXUxo6psseKQow9VuQWX5o3gApRHyI8s2f2vbXlnbds1IGcY092L2A90YYGjVtjrD%2BoUmse9nWNg%2BgsFSTXgcLGeGZf6A%2FK9S9g63JP05sWDlsSoBuEQsY%2BVUutLo%2FYGVAX3xoSZD73hA2AyjSFKRlZy%2FCskx6xQmZvAnW17oSJ6b9CJfkkXu27%2BxmFyb5XZfqhSAYHN2Sc7OtZmunt4APoBAf8gUL1zB8ziIBPZDtevC6H1Ct3h%2BalBBm9fnUg0R6c5AUbrtUKrtUz6T7ERDXfUKZDS2Rygr8AyRLx58NnbNjPJQjut%2FiyUbr0r8klRdgJcIp3RpnyVjaShhc8FLcF4dU%2BljjDsyfj6GJaRw%2B5Fl7SplLL3t4ocaj2Z3nJl2gOVPQhLvtnWQrBIhzoSpzejUsuuxJZNOdiSzJck03ZIVRfKHfx%2FfkhKVwNIbMCBT9URbd0ACfYerGCJDnEKsEPxTbXVdoj9mb6z%2BNUC7AfKWNnq6z6OxhQiiRH%2BmiWYYjdXSWtEqpxUjHWhZW8WJVDfVG9ztcM9TY133MqA1eDjjGX3f15t45EpH3W4KLXyq9%2BLUE7j1zVjMKLVqcAGOqUBHcTnPDfexmJB0gUauGmB26aYZSESfRLOJtYYQJZ%2FaM5kEK3FfQjsPTEd7Ce9A5PVHd1Me1HXZl4xcaEmbpFBxsqu4K%2BPGIHRF2ihiY30mKXF1y9n6Sjz3mbRCTUh2J0HSodZYrwkagQiv15YG3hY9mHFOjsXSE4ffp55Bzl25xpj2nIwm1evXsOY2QViE%2BxPz7S0Bi5kgxp64YBpH5REe2z1m6MB&X-Amz-Signature=39314206cf6600ec4d565a5dc12719d0f7b4cff6522dc6aaf26de3046cb4c5e7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4Z5DBEJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvFvL3NP2Zgf1FZcdVJxCqjrHP3yPi%2BnmVP8o5fUXyMAIgHn2nQYnb85CCHiWsAKBLlMXJSmHB0n%2FE1bEs3pOVuf0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNPy%2BMstvx2ewbXA1CrcA8HzalMh2l%2BApBzBE%2F3MEucJKBles3cP0HGDk7Awdt66A0r6ZXUxo6psseKQow9VuQWX5o3gApRHyI8s2f2vbXlnbds1IGcY092L2A90YYGjVtjrD%2BoUmse9nWNg%2BgsFSTXgcLGeGZf6A%2FK9S9g63JP05sWDlsSoBuEQsY%2BVUutLo%2FYGVAX3xoSZD73hA2AyjSFKRlZy%2FCskx6xQmZvAnW17oSJ6b9CJfkkXu27%2BxmFyb5XZfqhSAYHN2Sc7OtZmunt4APoBAf8gUL1zB8ziIBPZDtevC6H1Ct3h%2BalBBm9fnUg0R6c5AUbrtUKrtUz6T7ERDXfUKZDS2Rygr8AyRLx58NnbNjPJQjut%2FiyUbr0r8klRdgJcIp3RpnyVjaShhc8FLcF4dU%2BljjDsyfj6GJaRw%2B5Fl7SplLL3t4ocaj2Z3nJl2gOVPQhLvtnWQrBIhzoSpzejUsuuxJZNOdiSzJck03ZIVRfKHfx%2FfkhKVwNIbMCBT9URbd0ACfYerGCJDnEKsEPxTbXVdoj9mb6z%2BNUC7AfKWNnq6z6OxhQiiRH%2BmiWYYjdXSWtEqpxUjHWhZW8WJVDfVG9ztcM9TY133MqA1eDjjGX3f15t45EpH3W4KLXyq9%2BLUE7j1zVjMKLVqcAGOqUBHcTnPDfexmJB0gUauGmB26aYZSESfRLOJtYYQJZ%2FaM5kEK3FfQjsPTEd7Ce9A5PVHd1Me1HXZl4xcaEmbpFBxsqu4K%2BPGIHRF2ihiY30mKXF1y9n6Sjz3mbRCTUh2J0HSodZYrwkagQiv15YG3hY9mHFOjsXSE4ffp55Bzl25xpj2nIwm1evXsOY2QViE%2BxPz7S0Bi5kgxp64YBpH5REe2z1m6MB&X-Amz-Signature=76f6799b1bdb3b6b6b3175253bcfeecaff5fbc72a6943fa2d4727059aa7d8974&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4Z5DBEJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvFvL3NP2Zgf1FZcdVJxCqjrHP3yPi%2BnmVP8o5fUXyMAIgHn2nQYnb85CCHiWsAKBLlMXJSmHB0n%2FE1bEs3pOVuf0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNPy%2BMstvx2ewbXA1CrcA8HzalMh2l%2BApBzBE%2F3MEucJKBles3cP0HGDk7Awdt66A0r6ZXUxo6psseKQow9VuQWX5o3gApRHyI8s2f2vbXlnbds1IGcY092L2A90YYGjVtjrD%2BoUmse9nWNg%2BgsFSTXgcLGeGZf6A%2FK9S9g63JP05sWDlsSoBuEQsY%2BVUutLo%2FYGVAX3xoSZD73hA2AyjSFKRlZy%2FCskx6xQmZvAnW17oSJ6b9CJfkkXu27%2BxmFyb5XZfqhSAYHN2Sc7OtZmunt4APoBAf8gUL1zB8ziIBPZDtevC6H1Ct3h%2BalBBm9fnUg0R6c5AUbrtUKrtUz6T7ERDXfUKZDS2Rygr8AyRLx58NnbNjPJQjut%2FiyUbr0r8klRdgJcIp3RpnyVjaShhc8FLcF4dU%2BljjDsyfj6GJaRw%2B5Fl7SplLL3t4ocaj2Z3nJl2gOVPQhLvtnWQrBIhzoSpzejUsuuxJZNOdiSzJck03ZIVRfKHfx%2FfkhKVwNIbMCBT9URbd0ACfYerGCJDnEKsEPxTbXVdoj9mb6z%2BNUC7AfKWNnq6z6OxhQiiRH%2BmiWYYjdXSWtEqpxUjHWhZW8WJVDfVG9ztcM9TY133MqA1eDjjGX3f15t45EpH3W4KLXyq9%2BLUE7j1zVjMKLVqcAGOqUBHcTnPDfexmJB0gUauGmB26aYZSESfRLOJtYYQJZ%2FaM5kEK3FfQjsPTEd7Ce9A5PVHd1Me1HXZl4xcaEmbpFBxsqu4K%2BPGIHRF2ihiY30mKXF1y9n6Sjz3mbRCTUh2J0HSodZYrwkagQiv15YG3hY9mHFOjsXSE4ffp55Bzl25xpj2nIwm1evXsOY2QViE%2BxPz7S0Bi5kgxp64YBpH5REe2z1m6MB&X-Amz-Signature=4146587bc8afbdb0ccaa669cc5640e1b843f13bcb3d0f180e15dedfdf44051e9&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4Z5DBEJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvFvL3NP2Zgf1FZcdVJxCqjrHP3yPi%2BnmVP8o5fUXyMAIgHn2nQYnb85CCHiWsAKBLlMXJSmHB0n%2FE1bEs3pOVuf0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNPy%2BMstvx2ewbXA1CrcA8HzalMh2l%2BApBzBE%2F3MEucJKBles3cP0HGDk7Awdt66A0r6ZXUxo6psseKQow9VuQWX5o3gApRHyI8s2f2vbXlnbds1IGcY092L2A90YYGjVtjrD%2BoUmse9nWNg%2BgsFSTXgcLGeGZf6A%2FK9S9g63JP05sWDlsSoBuEQsY%2BVUutLo%2FYGVAX3xoSZD73hA2AyjSFKRlZy%2FCskx6xQmZvAnW17oSJ6b9CJfkkXu27%2BxmFyb5XZfqhSAYHN2Sc7OtZmunt4APoBAf8gUL1zB8ziIBPZDtevC6H1Ct3h%2BalBBm9fnUg0R6c5AUbrtUKrtUz6T7ERDXfUKZDS2Rygr8AyRLx58NnbNjPJQjut%2FiyUbr0r8klRdgJcIp3RpnyVjaShhc8FLcF4dU%2BljjDsyfj6GJaRw%2B5Fl7SplLL3t4ocaj2Z3nJl2gOVPQhLvtnWQrBIhzoSpzejUsuuxJZNOdiSzJck03ZIVRfKHfx%2FfkhKVwNIbMCBT9URbd0ACfYerGCJDnEKsEPxTbXVdoj9mb6z%2BNUC7AfKWNnq6z6OxhQiiRH%2BmiWYYjdXSWtEqpxUjHWhZW8WJVDfVG9ztcM9TY133MqA1eDjjGX3f15t45EpH3W4KLXyq9%2BLUE7j1zVjMKLVqcAGOqUBHcTnPDfexmJB0gUauGmB26aYZSESfRLOJtYYQJZ%2FaM5kEK3FfQjsPTEd7Ce9A5PVHd1Me1HXZl4xcaEmbpFBxsqu4K%2BPGIHRF2ihiY30mKXF1y9n6Sjz3mbRCTUh2J0HSodZYrwkagQiv15YG3hY9mHFOjsXSE4ffp55Bzl25xpj2nIwm1evXsOY2QViE%2BxPz7S0Bi5kgxp64YBpH5REe2z1m6MB&X-Amz-Signature=4e7de68a9218a2529819c7f2c569298ab00a34c53208d5c45ab706db744db7dc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4Z5DBEJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvFvL3NP2Zgf1FZcdVJxCqjrHP3yPi%2BnmVP8o5fUXyMAIgHn2nQYnb85CCHiWsAKBLlMXJSmHB0n%2FE1bEs3pOVuf0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNPy%2BMstvx2ewbXA1CrcA8HzalMh2l%2BApBzBE%2F3MEucJKBles3cP0HGDk7Awdt66A0r6ZXUxo6psseKQow9VuQWX5o3gApRHyI8s2f2vbXlnbds1IGcY092L2A90YYGjVtjrD%2BoUmse9nWNg%2BgsFSTXgcLGeGZf6A%2FK9S9g63JP05sWDlsSoBuEQsY%2BVUutLo%2FYGVAX3xoSZD73hA2AyjSFKRlZy%2FCskx6xQmZvAnW17oSJ6b9CJfkkXu27%2BxmFyb5XZfqhSAYHN2Sc7OtZmunt4APoBAf8gUL1zB8ziIBPZDtevC6H1Ct3h%2BalBBm9fnUg0R6c5AUbrtUKrtUz6T7ERDXfUKZDS2Rygr8AyRLx58NnbNjPJQjut%2FiyUbr0r8klRdgJcIp3RpnyVjaShhc8FLcF4dU%2BljjDsyfj6GJaRw%2B5Fl7SplLL3t4ocaj2Z3nJl2gOVPQhLvtnWQrBIhzoSpzejUsuuxJZNOdiSzJck03ZIVRfKHfx%2FfkhKVwNIbMCBT9URbd0ACfYerGCJDnEKsEPxTbXVdoj9mb6z%2BNUC7AfKWNnq6z6OxhQiiRH%2BmiWYYjdXSWtEqpxUjHWhZW8WJVDfVG9ztcM9TY133MqA1eDjjGX3f15t45EpH3W4KLXyq9%2BLUE7j1zVjMKLVqcAGOqUBHcTnPDfexmJB0gUauGmB26aYZSESfRLOJtYYQJZ%2FaM5kEK3FfQjsPTEd7Ce9A5PVHd1Me1HXZl4xcaEmbpFBxsqu4K%2BPGIHRF2ihiY30mKXF1y9n6Sjz3mbRCTUh2J0HSodZYrwkagQiv15YG3hY9mHFOjsXSE4ffp55Bzl25xpj2nIwm1evXsOY2QViE%2BxPz7S0Bi5kgxp64YBpH5REe2z1m6MB&X-Amz-Signature=fd3f6fe82a8102671ef1716408e0d45af7e4ef81eede0d14dbe128204bad6bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4Z5DBEJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvFvL3NP2Zgf1FZcdVJxCqjrHP3yPi%2BnmVP8o5fUXyMAIgHn2nQYnb85CCHiWsAKBLlMXJSmHB0n%2FE1bEs3pOVuf0q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDNPy%2BMstvx2ewbXA1CrcA8HzalMh2l%2BApBzBE%2F3MEucJKBles3cP0HGDk7Awdt66A0r6ZXUxo6psseKQow9VuQWX5o3gApRHyI8s2f2vbXlnbds1IGcY092L2A90YYGjVtjrD%2BoUmse9nWNg%2BgsFSTXgcLGeGZf6A%2FK9S9g63JP05sWDlsSoBuEQsY%2BVUutLo%2FYGVAX3xoSZD73hA2AyjSFKRlZy%2FCskx6xQmZvAnW17oSJ6b9CJfkkXu27%2BxmFyb5XZfqhSAYHN2Sc7OtZmunt4APoBAf8gUL1zB8ziIBPZDtevC6H1Ct3h%2BalBBm9fnUg0R6c5AUbrtUKrtUz6T7ERDXfUKZDS2Rygr8AyRLx58NnbNjPJQjut%2FiyUbr0r8klRdgJcIp3RpnyVjaShhc8FLcF4dU%2BljjDsyfj6GJaRw%2B5Fl7SplLL3t4ocaj2Z3nJl2gOVPQhLvtnWQrBIhzoSpzejUsuuxJZNOdiSzJck03ZIVRfKHfx%2FfkhKVwNIbMCBT9URbd0ACfYerGCJDnEKsEPxTbXVdoj9mb6z%2BNUC7AfKWNnq6z6OxhQiiRH%2BmiWYYjdXSWtEqpxUjHWhZW8WJVDfVG9ztcM9TY133MqA1eDjjGX3f15t45EpH3W4KLXyq9%2BLUE7j1zVjMKLVqcAGOqUBHcTnPDfexmJB0gUauGmB26aYZSESfRLOJtYYQJZ%2FaM5kEK3FfQjsPTEd7Ce9A5PVHd1Me1HXZl4xcaEmbpFBxsqu4K%2BPGIHRF2ihiY30mKXF1y9n6Sjz3mbRCTUh2J0HSodZYrwkagQiv15YG3hY9mHFOjsXSE4ffp55Bzl25xpj2nIwm1evXsOY2QViE%2BxPz7S0Bi5kgxp64YBpH5REe2z1m6MB&X-Amz-Signature=af794e82855adfc5cf0a8a4ae2368777e3572a20aa585685c956efed3af33f71&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUDQ6DC7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpwGXiz7JawYkywOoQjq2zJfM7bPFSZt82j968llW8jwIhALETLYVHonc%2F0kM9iRg%2F3cM5UGrI4P6k2zJCV8jyIeu5Kv8DCHgQABoMNjM3NDIzMTgzODA1Igy%2FdBqXXG%2FXb6%2F%2FXtAq3ANt8wDOocZ1UZRCmmnXKsPVIgXwKYM8EgKbEzjPqF8obvfJsVjQG%2BLqlyQ0%2B6EgddG7uHeQY95J1Iky%2Fl%2BH%2F6BCZQISqdWoJPoFNx%2BCIIEP7%2FxZKtnr%2BWcma8bQ4RT9LsqceWwLG93iEiLsanfYwVX6N5%2BDlEtZfnwEQ2I7vunsoYgC6vnpQpXZMNGIJ8%2Fr5%2BTrBgILNsRtu7X9n8qMNutgLH7hVveL846ndyw5d3SH1sHAyuGga0cy5vLmUP7x6dC8dm%2FWFArCMd23KoWBt2rO51bBNhj%2BXIXCxM0KCzMu5qwsSYkRaL78ry%2B8P0XdTYN09VI7N4DP8VQHU6uLuyaHXCa1Q4R%2FKhNi52JIdSipex6aJgDD89xZjC4vNko21J0WUmTU17ntddUaGbSrJe4JGwkACltzYDYutlgF4ovewXEbuHrj8LKTtJptrV3xowVxgCOXXfcwP4DX4dl%2BvBZRGjaLjgAS%2FXFL8qCv73MVSju1jizvJnxCKa6CW21TN1zbL2OkAq8LmuPqj2iUwn8nb7idHoTW9rtZ217BmuYW%2BA9fBFinW2Arho%2BO6idSo159c%2F3%2FJgNh8%2FmlcOXterYoGTF0O4SBo4mjMi0AmCS7eG8eM5mHPoMHkJKaXzCDls29BjqkARlsWKICK7JgRAGS5BQq6YrE90vO9Cl1Tri0JCY5JqHMv4dDmmiowR0qhS8hqUenKd2XgBsEF7zbYtE5AUcuYvLSnD0NCO9tvLq2DWKQUP5eU4vjMmZA6PeeNuGb6SOCPh39o%2Bv3bAzAezthrUqC%2FW2ZKGuj7i8G7JOWafpdQP9PhqyYjbMO3y2EHg4ps6E2zVjywlger080B5WcHbEy%2FG49KW3R&X-Amz-Signature=cf58f886b1c205f3c8045a3a96cb39b1ba2f40d0becec6145f96d19aad3ea0d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUDQ6DC7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpwGXiz7JawYkywOoQjq2zJfM7bPFSZt82j968llW8jwIhALETLYVHonc%2F0kM9iRg%2F3cM5UGrI4P6k2zJCV8jyIeu5Kv8DCHgQABoMNjM3NDIzMTgzODA1Igy%2FdBqXXG%2FXb6%2F%2FXtAq3ANt8wDOocZ1UZRCmmnXKsPVIgXwKYM8EgKbEzjPqF8obvfJsVjQG%2BLqlyQ0%2B6EgddG7uHeQY95J1Iky%2Fl%2BH%2F6BCZQISqdWoJPoFNx%2BCIIEP7%2FxZKtnr%2BWcma8bQ4RT9LsqceWwLG93iEiLsanfYwVX6N5%2BDlEtZfnwEQ2I7vunsoYgC6vnpQpXZMNGIJ8%2Fr5%2BTrBgILNsRtu7X9n8qMNutgLH7hVveL846ndyw5d3SH1sHAyuGga0cy5vLmUP7x6dC8dm%2FWFArCMd23KoWBt2rO51bBNhj%2BXIXCxM0KCzMu5qwsSYkRaL78ry%2B8P0XdTYN09VI7N4DP8VQHU6uLuyaHXCa1Q4R%2FKhNi52JIdSipex6aJgDD89xZjC4vNko21J0WUmTU17ntddUaGbSrJe4JGwkACltzYDYutlgF4ovewXEbuHrj8LKTtJptrV3xowVxgCOXXfcwP4DX4dl%2BvBZRGjaLjgAS%2FXFL8qCv73MVSju1jizvJnxCKa6CW21TN1zbL2OkAq8LmuPqj2iUwn8nb7idHoTW9rtZ217BmuYW%2BA9fBFinW2Arho%2BO6idSo159c%2F3%2FJgNh8%2FmlcOXterYoGTF0O4SBo4mjMi0AmCS7eG8eM5mHPoMHkJKaXzCDls29BjqkARlsWKICK7JgRAGS5BQq6YrE90vO9Cl1Tri0JCY5JqHMv4dDmmiowR0qhS8hqUenKd2XgBsEF7zbYtE5AUcuYvLSnD0NCO9tvLq2DWKQUP5eU4vjMmZA6PeeNuGb6SOCPh39o%2Bv3bAzAezthrUqC%2FW2ZKGuj7i8G7JOWafpdQP9PhqyYjbMO3y2EHg4ps6E2zVjywlger080B5WcHbEy%2FG49KW3R&X-Amz-Signature=cc83da1a9112841616247122a6b98686aa6b02642501e09f0d70321a76ba2488&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUDQ6DC7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpwGXiz7JawYkywOoQjq2zJfM7bPFSZt82j968llW8jwIhALETLYVHonc%2F0kM9iRg%2F3cM5UGrI4P6k2zJCV8jyIeu5Kv8DCHgQABoMNjM3NDIzMTgzODA1Igy%2FdBqXXG%2FXb6%2F%2FXtAq3ANt8wDOocZ1UZRCmmnXKsPVIgXwKYM8EgKbEzjPqF8obvfJsVjQG%2BLqlyQ0%2B6EgddG7uHeQY95J1Iky%2Fl%2BH%2F6BCZQISqdWoJPoFNx%2BCIIEP7%2FxZKtnr%2BWcma8bQ4RT9LsqceWwLG93iEiLsanfYwVX6N5%2BDlEtZfnwEQ2I7vunsoYgC6vnpQpXZMNGIJ8%2Fr5%2BTrBgILNsRtu7X9n8qMNutgLH7hVveL846ndyw5d3SH1sHAyuGga0cy5vLmUP7x6dC8dm%2FWFArCMd23KoWBt2rO51bBNhj%2BXIXCxM0KCzMu5qwsSYkRaL78ry%2B8P0XdTYN09VI7N4DP8VQHU6uLuyaHXCa1Q4R%2FKhNi52JIdSipex6aJgDD89xZjC4vNko21J0WUmTU17ntddUaGbSrJe4JGwkACltzYDYutlgF4ovewXEbuHrj8LKTtJptrV3xowVxgCOXXfcwP4DX4dl%2BvBZRGjaLjgAS%2FXFL8qCv73MVSju1jizvJnxCKa6CW21TN1zbL2OkAq8LmuPqj2iUwn8nb7idHoTW9rtZ217BmuYW%2BA9fBFinW2Arho%2BO6idSo159c%2F3%2FJgNh8%2FmlcOXterYoGTF0O4SBo4mjMi0AmCS7eG8eM5mHPoMHkJKaXzCDls29BjqkARlsWKICK7JgRAGS5BQq6YrE90vO9Cl1Tri0JCY5JqHMv4dDmmiowR0qhS8hqUenKd2XgBsEF7zbYtE5AUcuYvLSnD0NCO9tvLq2DWKQUP5eU4vjMmZA6PeeNuGb6SOCPh39o%2Bv3bAzAezthrUqC%2FW2ZKGuj7i8G7JOWafpdQP9PhqyYjbMO3y2EHg4ps6E2zVjywlger080B5WcHbEy%2FG49KW3R&X-Amz-Signature=940cd6e3ab7379e8766f3a54b9c5a2538936d422eb5a5c31a6e6f66691d0b67b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUDQ6DC7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpwGXiz7JawYkywOoQjq2zJfM7bPFSZt82j968llW8jwIhALETLYVHonc%2F0kM9iRg%2F3cM5UGrI4P6k2zJCV8jyIeu5Kv8DCHgQABoMNjM3NDIzMTgzODA1Igy%2FdBqXXG%2FXb6%2F%2FXtAq3ANt8wDOocZ1UZRCmmnXKsPVIgXwKYM8EgKbEzjPqF8obvfJsVjQG%2BLqlyQ0%2B6EgddG7uHeQY95J1Iky%2Fl%2BH%2F6BCZQISqdWoJPoFNx%2BCIIEP7%2FxZKtnr%2BWcma8bQ4RT9LsqceWwLG93iEiLsanfYwVX6N5%2BDlEtZfnwEQ2I7vunsoYgC6vnpQpXZMNGIJ8%2Fr5%2BTrBgILNsRtu7X9n8qMNutgLH7hVveL846ndyw5d3SH1sHAyuGga0cy5vLmUP7x6dC8dm%2FWFArCMd23KoWBt2rO51bBNhj%2BXIXCxM0KCzMu5qwsSYkRaL78ry%2B8P0XdTYN09VI7N4DP8VQHU6uLuyaHXCa1Q4R%2FKhNi52JIdSipex6aJgDD89xZjC4vNko21J0WUmTU17ntddUaGbSrJe4JGwkACltzYDYutlgF4ovewXEbuHrj8LKTtJptrV3xowVxgCOXXfcwP4DX4dl%2BvBZRGjaLjgAS%2FXFL8qCv73MVSju1jizvJnxCKa6CW21TN1zbL2OkAq8LmuPqj2iUwn8nb7idHoTW9rtZ217BmuYW%2BA9fBFinW2Arho%2BO6idSo159c%2F3%2FJgNh8%2FmlcOXterYoGTF0O4SBo4mjMi0AmCS7eG8eM5mHPoMHkJKaXzCDls29BjqkARlsWKICK7JgRAGS5BQq6YrE90vO9Cl1Tri0JCY5JqHMv4dDmmiowR0qhS8hqUenKd2XgBsEF7zbYtE5AUcuYvLSnD0NCO9tvLq2DWKQUP5eU4vjMmZA6PeeNuGb6SOCPh39o%2Bv3bAzAezthrUqC%2FW2ZKGuj7i8G7JOWafpdQP9PhqyYjbMO3y2EHg4ps6E2zVjywlger080B5WcHbEy%2FG49KW3R&X-Amz-Signature=da1526903c25a08e5308c4a727789e70f2af2c54ea6f77878133202e49a84c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUDQ6DC7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpwGXiz7JawYkywOoQjq2zJfM7bPFSZt82j968llW8jwIhALETLYVHonc%2F0kM9iRg%2F3cM5UGrI4P6k2zJCV8jyIeu5Kv8DCHgQABoMNjM3NDIzMTgzODA1Igy%2FdBqXXG%2FXb6%2F%2FXtAq3ANt8wDOocZ1UZRCmmnXKsPVIgXwKYM8EgKbEzjPqF8obvfJsVjQG%2BLqlyQ0%2B6EgddG7uHeQY95J1Iky%2Fl%2BH%2F6BCZQISqdWoJPoFNx%2BCIIEP7%2FxZKtnr%2BWcma8bQ4RT9LsqceWwLG93iEiLsanfYwVX6N5%2BDlEtZfnwEQ2I7vunsoYgC6vnpQpXZMNGIJ8%2Fr5%2BTrBgILNsRtu7X9n8qMNutgLH7hVveL846ndyw5d3SH1sHAyuGga0cy5vLmUP7x6dC8dm%2FWFArCMd23KoWBt2rO51bBNhj%2BXIXCxM0KCzMu5qwsSYkRaL78ry%2B8P0XdTYN09VI7N4DP8VQHU6uLuyaHXCa1Q4R%2FKhNi52JIdSipex6aJgDD89xZjC4vNko21J0WUmTU17ntddUaGbSrJe4JGwkACltzYDYutlgF4ovewXEbuHrj8LKTtJptrV3xowVxgCOXXfcwP4DX4dl%2BvBZRGjaLjgAS%2FXFL8qCv73MVSju1jizvJnxCKa6CW21TN1zbL2OkAq8LmuPqj2iUwn8nb7idHoTW9rtZ217BmuYW%2BA9fBFinW2Arho%2BO6idSo159c%2F3%2FJgNh8%2FmlcOXterYoGTF0O4SBo4mjMi0AmCS7eG8eM5mHPoMHkJKaXzCDls29BjqkARlsWKICK7JgRAGS5BQq6YrE90vO9Cl1Tri0JCY5JqHMv4dDmmiowR0qhS8hqUenKd2XgBsEF7zbYtE5AUcuYvLSnD0NCO9tvLq2DWKQUP5eU4vjMmZA6PeeNuGb6SOCPh39o%2Bv3bAzAezthrUqC%2FW2ZKGuj7i8G7JOWafpdQP9PhqyYjbMO3y2EHg4ps6E2zVjywlger080B5WcHbEy%2FG49KW3R&X-Amz-Signature=bec9c60227617873c0e4b4dc3a1a4023d0f4c1ff36ec7fe3760f41a1d5ea2473&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUDQ6DC7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpwGXiz7JawYkywOoQjq2zJfM7bPFSZt82j968llW8jwIhALETLYVHonc%2F0kM9iRg%2F3cM5UGrI4P6k2zJCV8jyIeu5Kv8DCHgQABoMNjM3NDIzMTgzODA1Igy%2FdBqXXG%2FXb6%2F%2FXtAq3ANt8wDOocZ1UZRCmmnXKsPVIgXwKYM8EgKbEzjPqF8obvfJsVjQG%2BLqlyQ0%2B6EgddG7uHeQY95J1Iky%2Fl%2BH%2F6BCZQISqdWoJPoFNx%2BCIIEP7%2FxZKtnr%2BWcma8bQ4RT9LsqceWwLG93iEiLsanfYwVX6N5%2BDlEtZfnwEQ2I7vunsoYgC6vnpQpXZMNGIJ8%2Fr5%2BTrBgILNsRtu7X9n8qMNutgLH7hVveL846ndyw5d3SH1sHAyuGga0cy5vLmUP7x6dC8dm%2FWFArCMd23KoWBt2rO51bBNhj%2BXIXCxM0KCzMu5qwsSYkRaL78ry%2B8P0XdTYN09VI7N4DP8VQHU6uLuyaHXCa1Q4R%2FKhNi52JIdSipex6aJgDD89xZjC4vNko21J0WUmTU17ntddUaGbSrJe4JGwkACltzYDYutlgF4ovewXEbuHrj8LKTtJptrV3xowVxgCOXXfcwP4DX4dl%2BvBZRGjaLjgAS%2FXFL8qCv73MVSju1jizvJnxCKa6CW21TN1zbL2OkAq8LmuPqj2iUwn8nb7idHoTW9rtZ217BmuYW%2BA9fBFinW2Arho%2BO6idSo159c%2F3%2FJgNh8%2FmlcOXterYoGTF0O4SBo4mjMi0AmCS7eG8eM5mHPoMHkJKaXzCDls29BjqkARlsWKICK7JgRAGS5BQq6YrE90vO9Cl1Tri0JCY5JqHMv4dDmmiowR0qhS8hqUenKd2XgBsEF7zbYtE5AUcuYvLSnD0NCO9tvLq2DWKQUP5eU4vjMmZA6PeeNuGb6SOCPh39o%2Bv3bAzAezthrUqC%2FW2ZKGuj7i8G7JOWafpdQP9PhqyYjbMO3y2EHg4ps6E2zVjywlger080B5WcHbEy%2FG49KW3R&X-Amz-Signature=d11bb7d361b2fd76ce431168d07668fca4cc66566e6caed23653ba074a8c00cc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUDQ6DC7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpwGXiz7JawYkywOoQjq2zJfM7bPFSZt82j968llW8jwIhALETLYVHonc%2F0kM9iRg%2F3cM5UGrI4P6k2zJCV8jyIeu5Kv8DCHgQABoMNjM3NDIzMTgzODA1Igy%2FdBqXXG%2FXb6%2F%2FXtAq3ANt8wDOocZ1UZRCmmnXKsPVIgXwKYM8EgKbEzjPqF8obvfJsVjQG%2BLqlyQ0%2B6EgddG7uHeQY95J1Iky%2Fl%2BH%2F6BCZQISqdWoJPoFNx%2BCIIEP7%2FxZKtnr%2BWcma8bQ4RT9LsqceWwLG93iEiLsanfYwVX6N5%2BDlEtZfnwEQ2I7vunsoYgC6vnpQpXZMNGIJ8%2Fr5%2BTrBgILNsRtu7X9n8qMNutgLH7hVveL846ndyw5d3SH1sHAyuGga0cy5vLmUP7x6dC8dm%2FWFArCMd23KoWBt2rO51bBNhj%2BXIXCxM0KCzMu5qwsSYkRaL78ry%2B8P0XdTYN09VI7N4DP8VQHU6uLuyaHXCa1Q4R%2FKhNi52JIdSipex6aJgDD89xZjC4vNko21J0WUmTU17ntddUaGbSrJe4JGwkACltzYDYutlgF4ovewXEbuHrj8LKTtJptrV3xowVxgCOXXfcwP4DX4dl%2BvBZRGjaLjgAS%2FXFL8qCv73MVSju1jizvJnxCKa6CW21TN1zbL2OkAq8LmuPqj2iUwn8nb7idHoTW9rtZ217BmuYW%2BA9fBFinW2Arho%2BO6idSo159c%2F3%2FJgNh8%2FmlcOXterYoGTF0O4SBo4mjMi0AmCS7eG8eM5mHPoMHkJKaXzCDls29BjqkARlsWKICK7JgRAGS5BQq6YrE90vO9Cl1Tri0JCY5JqHMv4dDmmiowR0qhS8hqUenKd2XgBsEF7zbYtE5AUcuYvLSnD0NCO9tvLq2DWKQUP5eU4vjMmZA6PeeNuGb6SOCPh39o%2Bv3bAzAezthrUqC%2FW2ZKGuj7i8G7JOWafpdQP9PhqyYjbMO3y2EHg4ps6E2zVjywlger080B5WcHbEy%2FG49KW3R&X-Amz-Signature=0f5ece153892adca2c633236fbbdaaa76d8fed5be6a6ab61a74da28d72252a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

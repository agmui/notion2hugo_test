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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVOY6QW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGIFHPlsllqO8jYe5cOlbGja%2BuYc8qzYi%2BQGvxSDMRXAiB0mfKLUA6J6bxTGbVNvvGx4rGqzQ6EomDa8GeVu5xymCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJESbpH4hKmI4pX5KtwDM17pcDSBJp0yVWokuCR4nhckX30tE0%2FxzZ6uj4MQCMMPKhX4JF6HOCOHWaYVUwLsfZPB2YEeow9F7NGBHs7U%2BsG3uDLLH5ebY%2Bgm%2BNAuVa0eRQeduaGHVR9WFVTSkQKNARCg9v19FZwXJke3Nc8HR2jErI2nT1idlSHD4VJJwvV01NxL7fBKvBWTI%2BFtryOEg3TYQclA%2FyMsCv8cGfdxyUHGMMOh7MnaeDJl2ZOscLPg7henrm1L4pjzBPeKLNSH0BVSpN0CzLsyG05Ht79gUFh57PRayxMnfnciRrYEqUX2j1NI%2BjgS63Z2dZ%2Bri4wwDiVCph2KaRO9wsko8tEVK6iZGxnAY3JxI2qOmA2yihv7t17Cry4T0DzxXkfUsDYvC1nTGjpYHMGgMlA1dtlDo6lXqaVpbNppvlQCjsVgm9URFlMOFMHXlYHJhlHQtJ21Aqtab%2BqYFLR%2FeLkhOlQtsZ9qjHP4gSI6lv2%2B4Zokdp7oFP2%2F%2Fu0GWlA7kGra6cVdsPJFLsZ1Xiq%2BdM%2FXW22eA9jL5KoB8RORJ6eG455%2BkhJrZeZRTUWemy57BhqtOv%2BMrytZKM5qzQJSaSpcWWigTPHak3%2B7PTRJhbmCVvzuUJ70YLcNz%2FfJAq7IOqEw%2FoPrwQY6pgFtkBWrcRv%2BkGK2oB9OCxRjbzyvJ%2BqvHbeX%2FSLkXBy6qpTLjEBwl5uMvoSlWMzZwfEHF0zJpshCAtCTbfEZwhfrfXJ7u7TFXUqVHmhagH%2Bq2AgOAe%2Bm%2FEXkM8lms74pmOO6tUMxfr%2FqgH48fZnLzbkvVfVyAiURCMhSs68hPs9KibotXbhfy50%2FfKpE%2B6lYFU%2BrXtx9nLu6gFn%2Bwxj%2FltYliCM5KdXO&X-Amz-Signature=64e6b8871bdbae7327ede7822c4f7a11c88b17cdb7976dc4d16afb409c78f30e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVOY6QW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGIFHPlsllqO8jYe5cOlbGja%2BuYc8qzYi%2BQGvxSDMRXAiB0mfKLUA6J6bxTGbVNvvGx4rGqzQ6EomDa8GeVu5xymCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJESbpH4hKmI4pX5KtwDM17pcDSBJp0yVWokuCR4nhckX30tE0%2FxzZ6uj4MQCMMPKhX4JF6HOCOHWaYVUwLsfZPB2YEeow9F7NGBHs7U%2BsG3uDLLH5ebY%2Bgm%2BNAuVa0eRQeduaGHVR9WFVTSkQKNARCg9v19FZwXJke3Nc8HR2jErI2nT1idlSHD4VJJwvV01NxL7fBKvBWTI%2BFtryOEg3TYQclA%2FyMsCv8cGfdxyUHGMMOh7MnaeDJl2ZOscLPg7henrm1L4pjzBPeKLNSH0BVSpN0CzLsyG05Ht79gUFh57PRayxMnfnciRrYEqUX2j1NI%2BjgS63Z2dZ%2Bri4wwDiVCph2KaRO9wsko8tEVK6iZGxnAY3JxI2qOmA2yihv7t17Cry4T0DzxXkfUsDYvC1nTGjpYHMGgMlA1dtlDo6lXqaVpbNppvlQCjsVgm9URFlMOFMHXlYHJhlHQtJ21Aqtab%2BqYFLR%2FeLkhOlQtsZ9qjHP4gSI6lv2%2B4Zokdp7oFP2%2F%2Fu0GWlA7kGra6cVdsPJFLsZ1Xiq%2BdM%2FXW22eA9jL5KoB8RORJ6eG455%2BkhJrZeZRTUWemy57BhqtOv%2BMrytZKM5qzQJSaSpcWWigTPHak3%2B7PTRJhbmCVvzuUJ70YLcNz%2FfJAq7IOqEw%2FoPrwQY6pgFtkBWrcRv%2BkGK2oB9OCxRjbzyvJ%2BqvHbeX%2FSLkXBy6qpTLjEBwl5uMvoSlWMzZwfEHF0zJpshCAtCTbfEZwhfrfXJ7u7TFXUqVHmhagH%2Bq2AgOAe%2Bm%2FEXkM8lms74pmOO6tUMxfr%2FqgH48fZnLzbkvVfVyAiURCMhSs68hPs9KibotXbhfy50%2FfKpE%2B6lYFU%2BrXtx9nLu6gFn%2Bwxj%2FltYliCM5KdXO&X-Amz-Signature=5d64cfc3f554cb0c024758529d0c0dd6be8c70d0dc6a765813bedd1f2652cf8e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVOY6QW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGIFHPlsllqO8jYe5cOlbGja%2BuYc8qzYi%2BQGvxSDMRXAiB0mfKLUA6J6bxTGbVNvvGx4rGqzQ6EomDa8GeVu5xymCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJESbpH4hKmI4pX5KtwDM17pcDSBJp0yVWokuCR4nhckX30tE0%2FxzZ6uj4MQCMMPKhX4JF6HOCOHWaYVUwLsfZPB2YEeow9F7NGBHs7U%2BsG3uDLLH5ebY%2Bgm%2BNAuVa0eRQeduaGHVR9WFVTSkQKNARCg9v19FZwXJke3Nc8HR2jErI2nT1idlSHD4VJJwvV01NxL7fBKvBWTI%2BFtryOEg3TYQclA%2FyMsCv8cGfdxyUHGMMOh7MnaeDJl2ZOscLPg7henrm1L4pjzBPeKLNSH0BVSpN0CzLsyG05Ht79gUFh57PRayxMnfnciRrYEqUX2j1NI%2BjgS63Z2dZ%2Bri4wwDiVCph2KaRO9wsko8tEVK6iZGxnAY3JxI2qOmA2yihv7t17Cry4T0DzxXkfUsDYvC1nTGjpYHMGgMlA1dtlDo6lXqaVpbNppvlQCjsVgm9URFlMOFMHXlYHJhlHQtJ21Aqtab%2BqYFLR%2FeLkhOlQtsZ9qjHP4gSI6lv2%2B4Zokdp7oFP2%2F%2Fu0GWlA7kGra6cVdsPJFLsZ1Xiq%2BdM%2FXW22eA9jL5KoB8RORJ6eG455%2BkhJrZeZRTUWemy57BhqtOv%2BMrytZKM5qzQJSaSpcWWigTPHak3%2B7PTRJhbmCVvzuUJ70YLcNz%2FfJAq7IOqEw%2FoPrwQY6pgFtkBWrcRv%2BkGK2oB9OCxRjbzyvJ%2BqvHbeX%2FSLkXBy6qpTLjEBwl5uMvoSlWMzZwfEHF0zJpshCAtCTbfEZwhfrfXJ7u7TFXUqVHmhagH%2Bq2AgOAe%2Bm%2FEXkM8lms74pmOO6tUMxfr%2FqgH48fZnLzbkvVfVyAiURCMhSs68hPs9KibotXbhfy50%2FfKpE%2B6lYFU%2BrXtx9nLu6gFn%2Bwxj%2FltYliCM5KdXO&X-Amz-Signature=4169ed3a475af0b4d6e9a39dcf62231b9386fd22ddb531c098265dde716ca671&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVOY6QW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGIFHPlsllqO8jYe5cOlbGja%2BuYc8qzYi%2BQGvxSDMRXAiB0mfKLUA6J6bxTGbVNvvGx4rGqzQ6EomDa8GeVu5xymCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJESbpH4hKmI4pX5KtwDM17pcDSBJp0yVWokuCR4nhckX30tE0%2FxzZ6uj4MQCMMPKhX4JF6HOCOHWaYVUwLsfZPB2YEeow9F7NGBHs7U%2BsG3uDLLH5ebY%2Bgm%2BNAuVa0eRQeduaGHVR9WFVTSkQKNARCg9v19FZwXJke3Nc8HR2jErI2nT1idlSHD4VJJwvV01NxL7fBKvBWTI%2BFtryOEg3TYQclA%2FyMsCv8cGfdxyUHGMMOh7MnaeDJl2ZOscLPg7henrm1L4pjzBPeKLNSH0BVSpN0CzLsyG05Ht79gUFh57PRayxMnfnciRrYEqUX2j1NI%2BjgS63Z2dZ%2Bri4wwDiVCph2KaRO9wsko8tEVK6iZGxnAY3JxI2qOmA2yihv7t17Cry4T0DzxXkfUsDYvC1nTGjpYHMGgMlA1dtlDo6lXqaVpbNppvlQCjsVgm9URFlMOFMHXlYHJhlHQtJ21Aqtab%2BqYFLR%2FeLkhOlQtsZ9qjHP4gSI6lv2%2B4Zokdp7oFP2%2F%2Fu0GWlA7kGra6cVdsPJFLsZ1Xiq%2BdM%2FXW22eA9jL5KoB8RORJ6eG455%2BkhJrZeZRTUWemy57BhqtOv%2BMrytZKM5qzQJSaSpcWWigTPHak3%2B7PTRJhbmCVvzuUJ70YLcNz%2FfJAq7IOqEw%2FoPrwQY6pgFtkBWrcRv%2BkGK2oB9OCxRjbzyvJ%2BqvHbeX%2FSLkXBy6qpTLjEBwl5uMvoSlWMzZwfEHF0zJpshCAtCTbfEZwhfrfXJ7u7TFXUqVHmhagH%2Bq2AgOAe%2Bm%2FEXkM8lms74pmOO6tUMxfr%2FqgH48fZnLzbkvVfVyAiURCMhSs68hPs9KibotXbhfy50%2FfKpE%2B6lYFU%2BrXtx9nLu6gFn%2Bwxj%2FltYliCM5KdXO&X-Amz-Signature=86840771fc9232ae425e5851beb5513cdf94f4a49b5066ae46a6709adefbd449&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVOY6QW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGIFHPlsllqO8jYe5cOlbGja%2BuYc8qzYi%2BQGvxSDMRXAiB0mfKLUA6J6bxTGbVNvvGx4rGqzQ6EomDa8GeVu5xymCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJESbpH4hKmI4pX5KtwDM17pcDSBJp0yVWokuCR4nhckX30tE0%2FxzZ6uj4MQCMMPKhX4JF6HOCOHWaYVUwLsfZPB2YEeow9F7NGBHs7U%2BsG3uDLLH5ebY%2Bgm%2BNAuVa0eRQeduaGHVR9WFVTSkQKNARCg9v19FZwXJke3Nc8HR2jErI2nT1idlSHD4VJJwvV01NxL7fBKvBWTI%2BFtryOEg3TYQclA%2FyMsCv8cGfdxyUHGMMOh7MnaeDJl2ZOscLPg7henrm1L4pjzBPeKLNSH0BVSpN0CzLsyG05Ht79gUFh57PRayxMnfnciRrYEqUX2j1NI%2BjgS63Z2dZ%2Bri4wwDiVCph2KaRO9wsko8tEVK6iZGxnAY3JxI2qOmA2yihv7t17Cry4T0DzxXkfUsDYvC1nTGjpYHMGgMlA1dtlDo6lXqaVpbNppvlQCjsVgm9URFlMOFMHXlYHJhlHQtJ21Aqtab%2BqYFLR%2FeLkhOlQtsZ9qjHP4gSI6lv2%2B4Zokdp7oFP2%2F%2Fu0GWlA7kGra6cVdsPJFLsZ1Xiq%2BdM%2FXW22eA9jL5KoB8RORJ6eG455%2BkhJrZeZRTUWemy57BhqtOv%2BMrytZKM5qzQJSaSpcWWigTPHak3%2B7PTRJhbmCVvzuUJ70YLcNz%2FfJAq7IOqEw%2FoPrwQY6pgFtkBWrcRv%2BkGK2oB9OCxRjbzyvJ%2BqvHbeX%2FSLkXBy6qpTLjEBwl5uMvoSlWMzZwfEHF0zJpshCAtCTbfEZwhfrfXJ7u7TFXUqVHmhagH%2Bq2AgOAe%2Bm%2FEXkM8lms74pmOO6tUMxfr%2FqgH48fZnLzbkvVfVyAiURCMhSs68hPs9KibotXbhfy50%2FfKpE%2B6lYFU%2BrXtx9nLu6gFn%2Bwxj%2FltYliCM5KdXO&X-Amz-Signature=9eb6804ce817deb2925c34314ffe6d022ce071a10fd99145b5eac4a578a48d46&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVOY6QW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGIFHPlsllqO8jYe5cOlbGja%2BuYc8qzYi%2BQGvxSDMRXAiB0mfKLUA6J6bxTGbVNvvGx4rGqzQ6EomDa8GeVu5xymCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJESbpH4hKmI4pX5KtwDM17pcDSBJp0yVWokuCR4nhckX30tE0%2FxzZ6uj4MQCMMPKhX4JF6HOCOHWaYVUwLsfZPB2YEeow9F7NGBHs7U%2BsG3uDLLH5ebY%2Bgm%2BNAuVa0eRQeduaGHVR9WFVTSkQKNARCg9v19FZwXJke3Nc8HR2jErI2nT1idlSHD4VJJwvV01NxL7fBKvBWTI%2BFtryOEg3TYQclA%2FyMsCv8cGfdxyUHGMMOh7MnaeDJl2ZOscLPg7henrm1L4pjzBPeKLNSH0BVSpN0CzLsyG05Ht79gUFh57PRayxMnfnciRrYEqUX2j1NI%2BjgS63Z2dZ%2Bri4wwDiVCph2KaRO9wsko8tEVK6iZGxnAY3JxI2qOmA2yihv7t17Cry4T0DzxXkfUsDYvC1nTGjpYHMGgMlA1dtlDo6lXqaVpbNppvlQCjsVgm9URFlMOFMHXlYHJhlHQtJ21Aqtab%2BqYFLR%2FeLkhOlQtsZ9qjHP4gSI6lv2%2B4Zokdp7oFP2%2F%2Fu0GWlA7kGra6cVdsPJFLsZ1Xiq%2BdM%2FXW22eA9jL5KoB8RORJ6eG455%2BkhJrZeZRTUWemy57BhqtOv%2BMrytZKM5qzQJSaSpcWWigTPHak3%2B7PTRJhbmCVvzuUJ70YLcNz%2FfJAq7IOqEw%2FoPrwQY6pgFtkBWrcRv%2BkGK2oB9OCxRjbzyvJ%2BqvHbeX%2FSLkXBy6qpTLjEBwl5uMvoSlWMzZwfEHF0zJpshCAtCTbfEZwhfrfXJ7u7TFXUqVHmhagH%2Bq2AgOAe%2Bm%2FEXkM8lms74pmOO6tUMxfr%2FqgH48fZnLzbkvVfVyAiURCMhSs68hPs9KibotXbhfy50%2FfKpE%2B6lYFU%2BrXtx9nLu6gFn%2Bwxj%2FltYliCM5KdXO&X-Amz-Signature=b7028052d43aa6361330ce740c1d0c15e4df82a0d35ce36fdb77ae8ba662e882&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZVOY6QW%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGIFHPlsllqO8jYe5cOlbGja%2BuYc8qzYi%2BQGvxSDMRXAiB0mfKLUA6J6bxTGbVNvvGx4rGqzQ6EomDa8GeVu5xymCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHJESbpH4hKmI4pX5KtwDM17pcDSBJp0yVWokuCR4nhckX30tE0%2FxzZ6uj4MQCMMPKhX4JF6HOCOHWaYVUwLsfZPB2YEeow9F7NGBHs7U%2BsG3uDLLH5ebY%2Bgm%2BNAuVa0eRQeduaGHVR9WFVTSkQKNARCg9v19FZwXJke3Nc8HR2jErI2nT1idlSHD4VJJwvV01NxL7fBKvBWTI%2BFtryOEg3TYQclA%2FyMsCv8cGfdxyUHGMMOh7MnaeDJl2ZOscLPg7henrm1L4pjzBPeKLNSH0BVSpN0CzLsyG05Ht79gUFh57PRayxMnfnciRrYEqUX2j1NI%2BjgS63Z2dZ%2Bri4wwDiVCph2KaRO9wsko8tEVK6iZGxnAY3JxI2qOmA2yihv7t17Cry4T0DzxXkfUsDYvC1nTGjpYHMGgMlA1dtlDo6lXqaVpbNppvlQCjsVgm9URFlMOFMHXlYHJhlHQtJ21Aqtab%2BqYFLR%2FeLkhOlQtsZ9qjHP4gSI6lv2%2B4Zokdp7oFP2%2F%2Fu0GWlA7kGra6cVdsPJFLsZ1Xiq%2BdM%2FXW22eA9jL5KoB8RORJ6eG455%2BkhJrZeZRTUWemy57BhqtOv%2BMrytZKM5qzQJSaSpcWWigTPHak3%2B7PTRJhbmCVvzuUJ70YLcNz%2FfJAq7IOqEw%2FoPrwQY6pgFtkBWrcRv%2BkGK2oB9OCxRjbzyvJ%2BqvHbeX%2FSLkXBy6qpTLjEBwl5uMvoSlWMzZwfEHF0zJpshCAtCTbfEZwhfrfXJ7u7TFXUqVHmhagH%2Bq2AgOAe%2Bm%2FEXkM8lms74pmOO6tUMxfr%2FqgH48fZnLzbkvVfVyAiURCMhSs68hPs9KibotXbhfy50%2FfKpE%2B6lYFU%2BrXtx9nLu6gFn%2Bwxj%2FltYliCM5KdXO&X-Amz-Signature=2a267b2e361c560a2ca71c5de5eeb6b7f354c093f51ae5250798644ba2a6cd7f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

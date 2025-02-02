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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QST7XRFB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqeSE6E5VL28wjhxmQtYSB8745ipNl6zw7yKVr9LnBAIhAMRwkVAxFlC%2B4Wf2%2B%2FAGaHeoApohhdKkiTh838rX9IezKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbu%2FSLIDw9a%2F5wyp4q3AMR650%2Fie%2BvmKH%2BVsZGXamkwcVJPWsvgVTHbNzlMddaAbarz43UNCH5gG41e2RSL6BSlgNdmi0VsIZiGvi%2BhAZxIMn2iHZfSi%2Fo0kIar7DjO6dyhsGuNYx5S3iQuvNCL5H82i0fB64e3DY5qwPZlv4PoJgSNsxhYGoMLgKq5q%2FPze3XCP2USghqixa8e%2FC2NB1KHA2qIpqWjNxp8AX2uBTKic5kPsdf%2FYIrL1m0Z%2F3KyAF2QKZPPK%2B7Rpf26GzOGf%2FsUbI2MJdJrp6VMgeHEQnywVXSlt2jXFA4byKiR8sRmNsS%2Fg7DtZeNzr5Ud2JgO0xxBNyPTOzecpbgY%2F9hZb9y%2B1tTiYuQOTk%2Bki4bEmGS%2BjkAXMwmVUKxJgCNZWCFKWYZ2Nhlrc%2BnTjEfh%2F2a6TL85txeTAq5V%2BvLHsPeVgErTJeG%2BG0IivhFuZmPIZHOgyq8XXvmD2yDzISpi10Zy4fEjAB955l8B9HIoLid0B%2FceUfRnBjwtgk%2Fp%2BHbUyOFyfig8Xq%2FFFfLN6Ln9ZyMTIes9SE8nK%2FkA8L%2BVue842coU4WAcw%2FvVl7QQHCCi5mc%2BwtVnFJ2tEUKWOsMnHthYlGJdOGqkXV54c6W87eNhBK7J7zfm8yL977olbII%2FzDXvPu8BjqkAQpu9SgEeM3c3zJUa1Vm6gDmtzhOeN5olIErdQW5dYqQmJBi7L4RqfGuDQ4xXWM%2BvzIquBhvhEwL8KoZZcA26fIjtF4svis15O%2F%2FdcDCZytwDRTfNi0IIOshxtuD87RISv25At%2Bp%2BdVIDG9tJ2HxHYUkZq9mGDq0s7SNvYPxySwimDgf8HJ7u05n2nVssFw8suHuX1Du3WxrkcEG4dCABWywlydJ&X-Amz-Signature=12d7f934e2387e45052e7de9bed1b480404c9de3845e1b2b61421caaba0f0047&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QST7XRFB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqeSE6E5VL28wjhxmQtYSB8745ipNl6zw7yKVr9LnBAIhAMRwkVAxFlC%2B4Wf2%2B%2FAGaHeoApohhdKkiTh838rX9IezKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbu%2FSLIDw9a%2F5wyp4q3AMR650%2Fie%2BvmKH%2BVsZGXamkwcVJPWsvgVTHbNzlMddaAbarz43UNCH5gG41e2RSL6BSlgNdmi0VsIZiGvi%2BhAZxIMn2iHZfSi%2Fo0kIar7DjO6dyhsGuNYx5S3iQuvNCL5H82i0fB64e3DY5qwPZlv4PoJgSNsxhYGoMLgKq5q%2FPze3XCP2USghqixa8e%2FC2NB1KHA2qIpqWjNxp8AX2uBTKic5kPsdf%2FYIrL1m0Z%2F3KyAF2QKZPPK%2B7Rpf26GzOGf%2FsUbI2MJdJrp6VMgeHEQnywVXSlt2jXFA4byKiR8sRmNsS%2Fg7DtZeNzr5Ud2JgO0xxBNyPTOzecpbgY%2F9hZb9y%2B1tTiYuQOTk%2Bki4bEmGS%2BjkAXMwmVUKxJgCNZWCFKWYZ2Nhlrc%2BnTjEfh%2F2a6TL85txeTAq5V%2BvLHsPeVgErTJeG%2BG0IivhFuZmPIZHOgyq8XXvmD2yDzISpi10Zy4fEjAB955l8B9HIoLid0B%2FceUfRnBjwtgk%2Fp%2BHbUyOFyfig8Xq%2FFFfLN6Ln9ZyMTIes9SE8nK%2FkA8L%2BVue842coU4WAcw%2FvVl7QQHCCi5mc%2BwtVnFJ2tEUKWOsMnHthYlGJdOGqkXV54c6W87eNhBK7J7zfm8yL977olbII%2FzDXvPu8BjqkAQpu9SgEeM3c3zJUa1Vm6gDmtzhOeN5olIErdQW5dYqQmJBi7L4RqfGuDQ4xXWM%2BvzIquBhvhEwL8KoZZcA26fIjtF4svis15O%2F%2FdcDCZytwDRTfNi0IIOshxtuD87RISv25At%2Bp%2BdVIDG9tJ2HxHYUkZq9mGDq0s7SNvYPxySwimDgf8HJ7u05n2nVssFw8suHuX1Du3WxrkcEG4dCABWywlydJ&X-Amz-Signature=62f8411212f5eed87b4f3cb4aa1c2550340de5ab14ed988e1823840f4298ef28&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QST7XRFB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqeSE6E5VL28wjhxmQtYSB8745ipNl6zw7yKVr9LnBAIhAMRwkVAxFlC%2B4Wf2%2B%2FAGaHeoApohhdKkiTh838rX9IezKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbu%2FSLIDw9a%2F5wyp4q3AMR650%2Fie%2BvmKH%2BVsZGXamkwcVJPWsvgVTHbNzlMddaAbarz43UNCH5gG41e2RSL6BSlgNdmi0VsIZiGvi%2BhAZxIMn2iHZfSi%2Fo0kIar7DjO6dyhsGuNYx5S3iQuvNCL5H82i0fB64e3DY5qwPZlv4PoJgSNsxhYGoMLgKq5q%2FPze3XCP2USghqixa8e%2FC2NB1KHA2qIpqWjNxp8AX2uBTKic5kPsdf%2FYIrL1m0Z%2F3KyAF2QKZPPK%2B7Rpf26GzOGf%2FsUbI2MJdJrp6VMgeHEQnywVXSlt2jXFA4byKiR8sRmNsS%2Fg7DtZeNzr5Ud2JgO0xxBNyPTOzecpbgY%2F9hZb9y%2B1tTiYuQOTk%2Bki4bEmGS%2BjkAXMwmVUKxJgCNZWCFKWYZ2Nhlrc%2BnTjEfh%2F2a6TL85txeTAq5V%2BvLHsPeVgErTJeG%2BG0IivhFuZmPIZHOgyq8XXvmD2yDzISpi10Zy4fEjAB955l8B9HIoLid0B%2FceUfRnBjwtgk%2Fp%2BHbUyOFyfig8Xq%2FFFfLN6Ln9ZyMTIes9SE8nK%2FkA8L%2BVue842coU4WAcw%2FvVl7QQHCCi5mc%2BwtVnFJ2tEUKWOsMnHthYlGJdOGqkXV54c6W87eNhBK7J7zfm8yL977olbII%2FzDXvPu8BjqkAQpu9SgEeM3c3zJUa1Vm6gDmtzhOeN5olIErdQW5dYqQmJBi7L4RqfGuDQ4xXWM%2BvzIquBhvhEwL8KoZZcA26fIjtF4svis15O%2F%2FdcDCZytwDRTfNi0IIOshxtuD87RISv25At%2Bp%2BdVIDG9tJ2HxHYUkZq9mGDq0s7SNvYPxySwimDgf8HJ7u05n2nVssFw8suHuX1Du3WxrkcEG4dCABWywlydJ&X-Amz-Signature=3e7173074d38bb9363c0adf9b996e9a6c9baab715972b9be73b40febdf93e31e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QST7XRFB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqeSE6E5VL28wjhxmQtYSB8745ipNl6zw7yKVr9LnBAIhAMRwkVAxFlC%2B4Wf2%2B%2FAGaHeoApohhdKkiTh838rX9IezKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbu%2FSLIDw9a%2F5wyp4q3AMR650%2Fie%2BvmKH%2BVsZGXamkwcVJPWsvgVTHbNzlMddaAbarz43UNCH5gG41e2RSL6BSlgNdmi0VsIZiGvi%2BhAZxIMn2iHZfSi%2Fo0kIar7DjO6dyhsGuNYx5S3iQuvNCL5H82i0fB64e3DY5qwPZlv4PoJgSNsxhYGoMLgKq5q%2FPze3XCP2USghqixa8e%2FC2NB1KHA2qIpqWjNxp8AX2uBTKic5kPsdf%2FYIrL1m0Z%2F3KyAF2QKZPPK%2B7Rpf26GzOGf%2FsUbI2MJdJrp6VMgeHEQnywVXSlt2jXFA4byKiR8sRmNsS%2Fg7DtZeNzr5Ud2JgO0xxBNyPTOzecpbgY%2F9hZb9y%2B1tTiYuQOTk%2Bki4bEmGS%2BjkAXMwmVUKxJgCNZWCFKWYZ2Nhlrc%2BnTjEfh%2F2a6TL85txeTAq5V%2BvLHsPeVgErTJeG%2BG0IivhFuZmPIZHOgyq8XXvmD2yDzISpi10Zy4fEjAB955l8B9HIoLid0B%2FceUfRnBjwtgk%2Fp%2BHbUyOFyfig8Xq%2FFFfLN6Ln9ZyMTIes9SE8nK%2FkA8L%2BVue842coU4WAcw%2FvVl7QQHCCi5mc%2BwtVnFJ2tEUKWOsMnHthYlGJdOGqkXV54c6W87eNhBK7J7zfm8yL977olbII%2FzDXvPu8BjqkAQpu9SgEeM3c3zJUa1Vm6gDmtzhOeN5olIErdQW5dYqQmJBi7L4RqfGuDQ4xXWM%2BvzIquBhvhEwL8KoZZcA26fIjtF4svis15O%2F%2FdcDCZytwDRTfNi0IIOshxtuD87RISv25At%2Bp%2BdVIDG9tJ2HxHYUkZq9mGDq0s7SNvYPxySwimDgf8HJ7u05n2nVssFw8suHuX1Du3WxrkcEG4dCABWywlydJ&X-Amz-Signature=8454f57451d4fd2dce4c0778fa07e1b65d1301f689e23cfb61a7e5caf705c2e5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QST7XRFB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqeSE6E5VL28wjhxmQtYSB8745ipNl6zw7yKVr9LnBAIhAMRwkVAxFlC%2B4Wf2%2B%2FAGaHeoApohhdKkiTh838rX9IezKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbu%2FSLIDw9a%2F5wyp4q3AMR650%2Fie%2BvmKH%2BVsZGXamkwcVJPWsvgVTHbNzlMddaAbarz43UNCH5gG41e2RSL6BSlgNdmi0VsIZiGvi%2BhAZxIMn2iHZfSi%2Fo0kIar7DjO6dyhsGuNYx5S3iQuvNCL5H82i0fB64e3DY5qwPZlv4PoJgSNsxhYGoMLgKq5q%2FPze3XCP2USghqixa8e%2FC2NB1KHA2qIpqWjNxp8AX2uBTKic5kPsdf%2FYIrL1m0Z%2F3KyAF2QKZPPK%2B7Rpf26GzOGf%2FsUbI2MJdJrp6VMgeHEQnywVXSlt2jXFA4byKiR8sRmNsS%2Fg7DtZeNzr5Ud2JgO0xxBNyPTOzecpbgY%2F9hZb9y%2B1tTiYuQOTk%2Bki4bEmGS%2BjkAXMwmVUKxJgCNZWCFKWYZ2Nhlrc%2BnTjEfh%2F2a6TL85txeTAq5V%2BvLHsPeVgErTJeG%2BG0IivhFuZmPIZHOgyq8XXvmD2yDzISpi10Zy4fEjAB955l8B9HIoLid0B%2FceUfRnBjwtgk%2Fp%2BHbUyOFyfig8Xq%2FFFfLN6Ln9ZyMTIes9SE8nK%2FkA8L%2BVue842coU4WAcw%2FvVl7QQHCCi5mc%2BwtVnFJ2tEUKWOsMnHthYlGJdOGqkXV54c6W87eNhBK7J7zfm8yL977olbII%2FzDXvPu8BjqkAQpu9SgEeM3c3zJUa1Vm6gDmtzhOeN5olIErdQW5dYqQmJBi7L4RqfGuDQ4xXWM%2BvzIquBhvhEwL8KoZZcA26fIjtF4svis15O%2F%2FdcDCZytwDRTfNi0IIOshxtuD87RISv25At%2Bp%2BdVIDG9tJ2HxHYUkZq9mGDq0s7SNvYPxySwimDgf8HJ7u05n2nVssFw8suHuX1Du3WxrkcEG4dCABWywlydJ&X-Amz-Signature=d9106d0e7b21b6b6a082d9b24d26ad793e1f9ec498174c319a775f2cd023e96a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QST7XRFB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqeSE6E5VL28wjhxmQtYSB8745ipNl6zw7yKVr9LnBAIhAMRwkVAxFlC%2B4Wf2%2B%2FAGaHeoApohhdKkiTh838rX9IezKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbu%2FSLIDw9a%2F5wyp4q3AMR650%2Fie%2BvmKH%2BVsZGXamkwcVJPWsvgVTHbNzlMddaAbarz43UNCH5gG41e2RSL6BSlgNdmi0VsIZiGvi%2BhAZxIMn2iHZfSi%2Fo0kIar7DjO6dyhsGuNYx5S3iQuvNCL5H82i0fB64e3DY5qwPZlv4PoJgSNsxhYGoMLgKq5q%2FPze3XCP2USghqixa8e%2FC2NB1KHA2qIpqWjNxp8AX2uBTKic5kPsdf%2FYIrL1m0Z%2F3KyAF2QKZPPK%2B7Rpf26GzOGf%2FsUbI2MJdJrp6VMgeHEQnywVXSlt2jXFA4byKiR8sRmNsS%2Fg7DtZeNzr5Ud2JgO0xxBNyPTOzecpbgY%2F9hZb9y%2B1tTiYuQOTk%2Bki4bEmGS%2BjkAXMwmVUKxJgCNZWCFKWYZ2Nhlrc%2BnTjEfh%2F2a6TL85txeTAq5V%2BvLHsPeVgErTJeG%2BG0IivhFuZmPIZHOgyq8XXvmD2yDzISpi10Zy4fEjAB955l8B9HIoLid0B%2FceUfRnBjwtgk%2Fp%2BHbUyOFyfig8Xq%2FFFfLN6Ln9ZyMTIes9SE8nK%2FkA8L%2BVue842coU4WAcw%2FvVl7QQHCCi5mc%2BwtVnFJ2tEUKWOsMnHthYlGJdOGqkXV54c6W87eNhBK7J7zfm8yL977olbII%2FzDXvPu8BjqkAQpu9SgEeM3c3zJUa1Vm6gDmtzhOeN5olIErdQW5dYqQmJBi7L4RqfGuDQ4xXWM%2BvzIquBhvhEwL8KoZZcA26fIjtF4svis15O%2F%2FdcDCZytwDRTfNi0IIOshxtuD87RISv25At%2Bp%2BdVIDG9tJ2HxHYUkZq9mGDq0s7SNvYPxySwimDgf8HJ7u05n2nVssFw8suHuX1Du3WxrkcEG4dCABWywlydJ&X-Amz-Signature=02610b5a287cd2efd1c4855b9e8fbabcd66b4980aae2f18f15184a3831395c90&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QST7XRFB%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T040842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkqeSE6E5VL28wjhxmQtYSB8745ipNl6zw7yKVr9LnBAIhAMRwkVAxFlC%2B4Wf2%2B%2FAGaHeoApohhdKkiTh838rX9IezKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzbu%2FSLIDw9a%2F5wyp4q3AMR650%2Fie%2BvmKH%2BVsZGXamkwcVJPWsvgVTHbNzlMddaAbarz43UNCH5gG41e2RSL6BSlgNdmi0VsIZiGvi%2BhAZxIMn2iHZfSi%2Fo0kIar7DjO6dyhsGuNYx5S3iQuvNCL5H82i0fB64e3DY5qwPZlv4PoJgSNsxhYGoMLgKq5q%2FPze3XCP2USghqixa8e%2FC2NB1KHA2qIpqWjNxp8AX2uBTKic5kPsdf%2FYIrL1m0Z%2F3KyAF2QKZPPK%2B7Rpf26GzOGf%2FsUbI2MJdJrp6VMgeHEQnywVXSlt2jXFA4byKiR8sRmNsS%2Fg7DtZeNzr5Ud2JgO0xxBNyPTOzecpbgY%2F9hZb9y%2B1tTiYuQOTk%2Bki4bEmGS%2BjkAXMwmVUKxJgCNZWCFKWYZ2Nhlrc%2BnTjEfh%2F2a6TL85txeTAq5V%2BvLHsPeVgErTJeG%2BG0IivhFuZmPIZHOgyq8XXvmD2yDzISpi10Zy4fEjAB955l8B9HIoLid0B%2FceUfRnBjwtgk%2Fp%2BHbUyOFyfig8Xq%2FFFfLN6Ln9ZyMTIes9SE8nK%2FkA8L%2BVue842coU4WAcw%2FvVl7QQHCCi5mc%2BwtVnFJ2tEUKWOsMnHthYlGJdOGqkXV54c6W87eNhBK7J7zfm8yL977olbII%2FzDXvPu8BjqkAQpu9SgEeM3c3zJUa1Vm6gDmtzhOeN5olIErdQW5dYqQmJBi7L4RqfGuDQ4xXWM%2BvzIquBhvhEwL8KoZZcA26fIjtF4svis15O%2F%2FdcDCZytwDRTfNi0IIOshxtuD87RISv25At%2Bp%2BdVIDG9tJ2HxHYUkZq9mGDq0s7SNvYPxySwimDgf8HJ7u05n2nVssFw8suHuX1Du3WxrkcEG4dCABWywlydJ&X-Amz-Signature=e0638b1a6b2f60ceed0e09f313f3c65f46b19b0caeab0856331d368f88fdfa8b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

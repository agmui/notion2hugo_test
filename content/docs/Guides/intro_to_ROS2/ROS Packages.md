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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXNC7XG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpmLYD7yeX7FVOhOkGNQEWCzRyK4c3DS3je1ircm0h9wIhALTtNUMJ6SoonR2kfVoXmLv0P09AG6n%2FbbiDxJE%2BFGujKv8DCBQQABoMNjM3NDIzMTgzODA1IgxOOr0h1klmw%2BzgJDIq3APEKA2gqwvICc0KCfW9lRyUNahZsHI8jqJNTH4Y1j%2FPqu9bwX0pa%2Fd%2B5Vb7mvNPjpgmob%2FxOQn55JKZqUPvgKwLFdazRTg66naWf6Suj2sZrs3HH9I5By%2FnAigheLxfOc03kInWkSbveFX8MzZSALYjxTgp8vkmvTi4qxcW3PMaO%2Fq6auKboclBFZUD%2FqNmU9IIQogpgqRQbXu9%2FnN09l6WV2Wp6%2FZHEW%2Bl0GniDXdcBBjEJ5dl7sebqW3oL%2Benbuf5PWe6CFhraCJL50DOLis4KzxW1Q1F1WDtuG8Y0GP4R2lCUCu7%2B2A9%2FckyVaJReOxmwdg0PSMZ7X2GZmYdVOsBmYNRZZg68AqL5JqAHxBRFqMrRkQ1M0VWMvOSwsJSeIccSx0ETqZqkndBqP09fa7u4W6LwtYZ1khCg2qgCfa%2B%2BfRZ2BdI1yy8GfixxaGVwrzoa4nTcZ6oUOkDUgwzO7YhpT%2FjYPttDKy5xQZnGCA2LgnUIbT%2ByyVnlfJOdnVHSYoALdjQ2k56CrzKxnsOnhSl160tMn6WfJZlsbLggr21XRxNj2od8jc4JVXt1oMm94%2BVtuUx43IsHNBbHJcoVoGdq2MTCjNjXIl1tlhZ9%2Bh9a3BkFW3kyshoB%2Bm%2FfTCB0qC%2BBjqkAZ3keA59%2BkGtzqVAt2pMjU3%2Betk%2B1Kr5PUMZXQCZdx%2B6L0Kg2m13Lxg7kLzVoOIg9rvWZ0HgqXlwXkOpbKLjAcEwkhPJ82dyKgHVmry55sy2A9gCD0fSQXe27KGCAoEyYiwUSpdT3%2BYKHA6Zzky%2Fj%2BVuojhp6VyOk9SF5Dw9cnSVak8bzo9Sccmt6uXn7WHmJ0YljAAu2DLUt6Rm%2BkEdLtapb8xL&X-Amz-Signature=d1ebc99f558c4ef22edbdebca5cb8ed62999edc30f61496ac1894c22293c8cda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXNC7XG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpmLYD7yeX7FVOhOkGNQEWCzRyK4c3DS3je1ircm0h9wIhALTtNUMJ6SoonR2kfVoXmLv0P09AG6n%2FbbiDxJE%2BFGujKv8DCBQQABoMNjM3NDIzMTgzODA1IgxOOr0h1klmw%2BzgJDIq3APEKA2gqwvICc0KCfW9lRyUNahZsHI8jqJNTH4Y1j%2FPqu9bwX0pa%2Fd%2B5Vb7mvNPjpgmob%2FxOQn55JKZqUPvgKwLFdazRTg66naWf6Suj2sZrs3HH9I5By%2FnAigheLxfOc03kInWkSbveFX8MzZSALYjxTgp8vkmvTi4qxcW3PMaO%2Fq6auKboclBFZUD%2FqNmU9IIQogpgqRQbXu9%2FnN09l6WV2Wp6%2FZHEW%2Bl0GniDXdcBBjEJ5dl7sebqW3oL%2Benbuf5PWe6CFhraCJL50DOLis4KzxW1Q1F1WDtuG8Y0GP4R2lCUCu7%2B2A9%2FckyVaJReOxmwdg0PSMZ7X2GZmYdVOsBmYNRZZg68AqL5JqAHxBRFqMrRkQ1M0VWMvOSwsJSeIccSx0ETqZqkndBqP09fa7u4W6LwtYZ1khCg2qgCfa%2B%2BfRZ2BdI1yy8GfixxaGVwrzoa4nTcZ6oUOkDUgwzO7YhpT%2FjYPttDKy5xQZnGCA2LgnUIbT%2ByyVnlfJOdnVHSYoALdjQ2k56CrzKxnsOnhSl160tMn6WfJZlsbLggr21XRxNj2od8jc4JVXt1oMm94%2BVtuUx43IsHNBbHJcoVoGdq2MTCjNjXIl1tlhZ9%2Bh9a3BkFW3kyshoB%2Bm%2FfTCB0qC%2BBjqkAZ3keA59%2BkGtzqVAt2pMjU3%2Betk%2B1Kr5PUMZXQCZdx%2B6L0Kg2m13Lxg7kLzVoOIg9rvWZ0HgqXlwXkOpbKLjAcEwkhPJ82dyKgHVmry55sy2A9gCD0fSQXe27KGCAoEyYiwUSpdT3%2BYKHA6Zzky%2Fj%2BVuojhp6VyOk9SF5Dw9cnSVak8bzo9Sccmt6uXn7WHmJ0YljAAu2DLUt6Rm%2BkEdLtapb8xL&X-Amz-Signature=c6493430fd80c98c41d2a06761894171b19c3b8ca331687996a4a0da1afd0cee&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXNC7XG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpmLYD7yeX7FVOhOkGNQEWCzRyK4c3DS3je1ircm0h9wIhALTtNUMJ6SoonR2kfVoXmLv0P09AG6n%2FbbiDxJE%2BFGujKv8DCBQQABoMNjM3NDIzMTgzODA1IgxOOr0h1klmw%2BzgJDIq3APEKA2gqwvICc0KCfW9lRyUNahZsHI8jqJNTH4Y1j%2FPqu9bwX0pa%2Fd%2B5Vb7mvNPjpgmob%2FxOQn55JKZqUPvgKwLFdazRTg66naWf6Suj2sZrs3HH9I5By%2FnAigheLxfOc03kInWkSbveFX8MzZSALYjxTgp8vkmvTi4qxcW3PMaO%2Fq6auKboclBFZUD%2FqNmU9IIQogpgqRQbXu9%2FnN09l6WV2Wp6%2FZHEW%2Bl0GniDXdcBBjEJ5dl7sebqW3oL%2Benbuf5PWe6CFhraCJL50DOLis4KzxW1Q1F1WDtuG8Y0GP4R2lCUCu7%2B2A9%2FckyVaJReOxmwdg0PSMZ7X2GZmYdVOsBmYNRZZg68AqL5JqAHxBRFqMrRkQ1M0VWMvOSwsJSeIccSx0ETqZqkndBqP09fa7u4W6LwtYZ1khCg2qgCfa%2B%2BfRZ2BdI1yy8GfixxaGVwrzoa4nTcZ6oUOkDUgwzO7YhpT%2FjYPttDKy5xQZnGCA2LgnUIbT%2ByyVnlfJOdnVHSYoALdjQ2k56CrzKxnsOnhSl160tMn6WfJZlsbLggr21XRxNj2od8jc4JVXt1oMm94%2BVtuUx43IsHNBbHJcoVoGdq2MTCjNjXIl1tlhZ9%2Bh9a3BkFW3kyshoB%2Bm%2FfTCB0qC%2BBjqkAZ3keA59%2BkGtzqVAt2pMjU3%2Betk%2B1Kr5PUMZXQCZdx%2B6L0Kg2m13Lxg7kLzVoOIg9rvWZ0HgqXlwXkOpbKLjAcEwkhPJ82dyKgHVmry55sy2A9gCD0fSQXe27KGCAoEyYiwUSpdT3%2BYKHA6Zzky%2Fj%2BVuojhp6VyOk9SF5Dw9cnSVak8bzo9Sccmt6uXn7WHmJ0YljAAu2DLUt6Rm%2BkEdLtapb8xL&X-Amz-Signature=c9709897349289a23e9ae9bff56685f82330992a4b3162a5443c750f45cb3e92&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXNC7XG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpmLYD7yeX7FVOhOkGNQEWCzRyK4c3DS3je1ircm0h9wIhALTtNUMJ6SoonR2kfVoXmLv0P09AG6n%2FbbiDxJE%2BFGujKv8DCBQQABoMNjM3NDIzMTgzODA1IgxOOr0h1klmw%2BzgJDIq3APEKA2gqwvICc0KCfW9lRyUNahZsHI8jqJNTH4Y1j%2FPqu9bwX0pa%2Fd%2B5Vb7mvNPjpgmob%2FxOQn55JKZqUPvgKwLFdazRTg66naWf6Suj2sZrs3HH9I5By%2FnAigheLxfOc03kInWkSbveFX8MzZSALYjxTgp8vkmvTi4qxcW3PMaO%2Fq6auKboclBFZUD%2FqNmU9IIQogpgqRQbXu9%2FnN09l6WV2Wp6%2FZHEW%2Bl0GniDXdcBBjEJ5dl7sebqW3oL%2Benbuf5PWe6CFhraCJL50DOLis4KzxW1Q1F1WDtuG8Y0GP4R2lCUCu7%2B2A9%2FckyVaJReOxmwdg0PSMZ7X2GZmYdVOsBmYNRZZg68AqL5JqAHxBRFqMrRkQ1M0VWMvOSwsJSeIccSx0ETqZqkndBqP09fa7u4W6LwtYZ1khCg2qgCfa%2B%2BfRZ2BdI1yy8GfixxaGVwrzoa4nTcZ6oUOkDUgwzO7YhpT%2FjYPttDKy5xQZnGCA2LgnUIbT%2ByyVnlfJOdnVHSYoALdjQ2k56CrzKxnsOnhSl160tMn6WfJZlsbLggr21XRxNj2od8jc4JVXt1oMm94%2BVtuUx43IsHNBbHJcoVoGdq2MTCjNjXIl1tlhZ9%2Bh9a3BkFW3kyshoB%2Bm%2FfTCB0qC%2BBjqkAZ3keA59%2BkGtzqVAt2pMjU3%2Betk%2B1Kr5PUMZXQCZdx%2B6L0Kg2m13Lxg7kLzVoOIg9rvWZ0HgqXlwXkOpbKLjAcEwkhPJ82dyKgHVmry55sy2A9gCD0fSQXe27KGCAoEyYiwUSpdT3%2BYKHA6Zzky%2Fj%2BVuojhp6VyOk9SF5Dw9cnSVak8bzo9Sccmt6uXn7WHmJ0YljAAu2DLUt6Rm%2BkEdLtapb8xL&X-Amz-Signature=02f26998807147dd8dd1753359d3f4cc8d2a3cd307a20cd9cdc4e99a764c5e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXNC7XG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpmLYD7yeX7FVOhOkGNQEWCzRyK4c3DS3je1ircm0h9wIhALTtNUMJ6SoonR2kfVoXmLv0P09AG6n%2FbbiDxJE%2BFGujKv8DCBQQABoMNjM3NDIzMTgzODA1IgxOOr0h1klmw%2BzgJDIq3APEKA2gqwvICc0KCfW9lRyUNahZsHI8jqJNTH4Y1j%2FPqu9bwX0pa%2Fd%2B5Vb7mvNPjpgmob%2FxOQn55JKZqUPvgKwLFdazRTg66naWf6Suj2sZrs3HH9I5By%2FnAigheLxfOc03kInWkSbveFX8MzZSALYjxTgp8vkmvTi4qxcW3PMaO%2Fq6auKboclBFZUD%2FqNmU9IIQogpgqRQbXu9%2FnN09l6WV2Wp6%2FZHEW%2Bl0GniDXdcBBjEJ5dl7sebqW3oL%2Benbuf5PWe6CFhraCJL50DOLis4KzxW1Q1F1WDtuG8Y0GP4R2lCUCu7%2B2A9%2FckyVaJReOxmwdg0PSMZ7X2GZmYdVOsBmYNRZZg68AqL5JqAHxBRFqMrRkQ1M0VWMvOSwsJSeIccSx0ETqZqkndBqP09fa7u4W6LwtYZ1khCg2qgCfa%2B%2BfRZ2BdI1yy8GfixxaGVwrzoa4nTcZ6oUOkDUgwzO7YhpT%2FjYPttDKy5xQZnGCA2LgnUIbT%2ByyVnlfJOdnVHSYoALdjQ2k56CrzKxnsOnhSl160tMn6WfJZlsbLggr21XRxNj2od8jc4JVXt1oMm94%2BVtuUx43IsHNBbHJcoVoGdq2MTCjNjXIl1tlhZ9%2Bh9a3BkFW3kyshoB%2Bm%2FfTCB0qC%2BBjqkAZ3keA59%2BkGtzqVAt2pMjU3%2Betk%2B1Kr5PUMZXQCZdx%2B6L0Kg2m13Lxg7kLzVoOIg9rvWZ0HgqXlwXkOpbKLjAcEwkhPJ82dyKgHVmry55sy2A9gCD0fSQXe27KGCAoEyYiwUSpdT3%2BYKHA6Zzky%2Fj%2BVuojhp6VyOk9SF5Dw9cnSVak8bzo9Sccmt6uXn7WHmJ0YljAAu2DLUt6Rm%2BkEdLtapb8xL&X-Amz-Signature=60feda0c76eaadaded69984c929c2064de4e0b31f3c1118ffc21124e55d5eaeb&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXNC7XG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpmLYD7yeX7FVOhOkGNQEWCzRyK4c3DS3je1ircm0h9wIhALTtNUMJ6SoonR2kfVoXmLv0P09AG6n%2FbbiDxJE%2BFGujKv8DCBQQABoMNjM3NDIzMTgzODA1IgxOOr0h1klmw%2BzgJDIq3APEKA2gqwvICc0KCfW9lRyUNahZsHI8jqJNTH4Y1j%2FPqu9bwX0pa%2Fd%2B5Vb7mvNPjpgmob%2FxOQn55JKZqUPvgKwLFdazRTg66naWf6Suj2sZrs3HH9I5By%2FnAigheLxfOc03kInWkSbveFX8MzZSALYjxTgp8vkmvTi4qxcW3PMaO%2Fq6auKboclBFZUD%2FqNmU9IIQogpgqRQbXu9%2FnN09l6WV2Wp6%2FZHEW%2Bl0GniDXdcBBjEJ5dl7sebqW3oL%2Benbuf5PWe6CFhraCJL50DOLis4KzxW1Q1F1WDtuG8Y0GP4R2lCUCu7%2B2A9%2FckyVaJReOxmwdg0PSMZ7X2GZmYdVOsBmYNRZZg68AqL5JqAHxBRFqMrRkQ1M0VWMvOSwsJSeIccSx0ETqZqkndBqP09fa7u4W6LwtYZ1khCg2qgCfa%2B%2BfRZ2BdI1yy8GfixxaGVwrzoa4nTcZ6oUOkDUgwzO7YhpT%2FjYPttDKy5xQZnGCA2LgnUIbT%2ByyVnlfJOdnVHSYoALdjQ2k56CrzKxnsOnhSl160tMn6WfJZlsbLggr21XRxNj2od8jc4JVXt1oMm94%2BVtuUx43IsHNBbHJcoVoGdq2MTCjNjXIl1tlhZ9%2Bh9a3BkFW3kyshoB%2Bm%2FfTCB0qC%2BBjqkAZ3keA59%2BkGtzqVAt2pMjU3%2Betk%2B1Kr5PUMZXQCZdx%2B6L0Kg2m13Lxg7kLzVoOIg9rvWZ0HgqXlwXkOpbKLjAcEwkhPJ82dyKgHVmry55sy2A9gCD0fSQXe27KGCAoEyYiwUSpdT3%2BYKHA6Zzky%2Fj%2BVuojhp6VyOk9SF5Dw9cnSVak8bzo9Sccmt6uXn7WHmJ0YljAAu2DLUt6Rm%2BkEdLtapb8xL&X-Amz-Signature=888b855c2190247caef8b8e7af25fbba141b4011d76c86ed5a51ba3a5ea3a40d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXNC7XG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpmLYD7yeX7FVOhOkGNQEWCzRyK4c3DS3je1ircm0h9wIhALTtNUMJ6SoonR2kfVoXmLv0P09AG6n%2FbbiDxJE%2BFGujKv8DCBQQABoMNjM3NDIzMTgzODA1IgxOOr0h1klmw%2BzgJDIq3APEKA2gqwvICc0KCfW9lRyUNahZsHI8jqJNTH4Y1j%2FPqu9bwX0pa%2Fd%2B5Vb7mvNPjpgmob%2FxOQn55JKZqUPvgKwLFdazRTg66naWf6Suj2sZrs3HH9I5By%2FnAigheLxfOc03kInWkSbveFX8MzZSALYjxTgp8vkmvTi4qxcW3PMaO%2Fq6auKboclBFZUD%2FqNmU9IIQogpgqRQbXu9%2FnN09l6WV2Wp6%2FZHEW%2Bl0GniDXdcBBjEJ5dl7sebqW3oL%2Benbuf5PWe6CFhraCJL50DOLis4KzxW1Q1F1WDtuG8Y0GP4R2lCUCu7%2B2A9%2FckyVaJReOxmwdg0PSMZ7X2GZmYdVOsBmYNRZZg68AqL5JqAHxBRFqMrRkQ1M0VWMvOSwsJSeIccSx0ETqZqkndBqP09fa7u4W6LwtYZ1khCg2qgCfa%2B%2BfRZ2BdI1yy8GfixxaGVwrzoa4nTcZ6oUOkDUgwzO7YhpT%2FjYPttDKy5xQZnGCA2LgnUIbT%2ByyVnlfJOdnVHSYoALdjQ2k56CrzKxnsOnhSl160tMn6WfJZlsbLggr21XRxNj2od8jc4JVXt1oMm94%2BVtuUx43IsHNBbHJcoVoGdq2MTCjNjXIl1tlhZ9%2Bh9a3BkFW3kyshoB%2Bm%2FfTCB0qC%2BBjqkAZ3keA59%2BkGtzqVAt2pMjU3%2Betk%2B1Kr5PUMZXQCZdx%2B6L0Kg2m13Lxg7kLzVoOIg9rvWZ0HgqXlwXkOpbKLjAcEwkhPJ82dyKgHVmry55sy2A9gCD0fSQXe27KGCAoEyYiwUSpdT3%2BYKHA6Zzky%2Fj%2BVuojhp6VyOk9SF5Dw9cnSVak8bzo9Sccmt6uXn7WHmJ0YljAAu2DLUt6Rm%2BkEdLtapb8xL&X-Amz-Signature=53aaa95cb24d6a8575bdcf0a8271f5d36ce8eb41051b75f67ce55e4e0769a77f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

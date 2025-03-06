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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CD3WWLK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJz5APIiSLm25SuB7lHgnzsXNqoUwRB%2F542NdTmFKJZAIgUXYkQCUhH3M14oJdGLsWcoRPbX603wca8FLeualyHzoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM2GDdzrasyyOWQidyrcA0aO3qXPs7%2BTUfG1REBKdbp5VnNM0VycobRRv4fn3NoaOYGh5AYLrJbkHH7ps%2FVNiUjyvGjUZJegZ1AnHwWgP8HQ79KKQ%2FS2Ru8iEmsLcp3IY0x2Yvgbqgc5HN6aL3H88XBwx2Vyo4i6AHcFK0dXc%2BxXdcIRl9Budk4BHJXIb32c05MFlmVOw8I6wNZq37tqm4RJMx4RhtPqWcESIjL21kS15jWzfGYJQV5q%2B6zyohu2qLBCwi1hIjGuhsFjpIypdVM%2BxA8QamQjPHIzgL8FWnEtGS681pwyxbLGwf57ecYSVxgyNe0z1JcOU%2By01072j2Wd%2FpwypQtMu7v4Sfu%2FLlf0TtEjNIcUp4kcF9iLf7K%2BAbodwCxa85CuRudOBL1S0%2FqrtTacMKerhf6WGQr8tDAkqgyAAronV2PNRmyuZAG4SPXaSbqEu3r4xZzxJn3jn0dW3tJ7ivQDBTkVH7jM9%2BFU194h4kBWOW84OmiOAyGIFirOV%2FlI%2BzCjyAOEM5A%2B0GlXxYzx%2BqTnRWIf0jCcPsY0Exgl7uHqzsBaiD13NS9osRjIhU9kuLBGfSMLQcjBca%2Fm%2BXAhzcdt83EjyeNXv6zj9uLKXmaq621oVh%2BOFGQ5E30k39Synyj838MhMJnYpL4GOqUBqrs%2FM1Va2UDocKPSJU%2FboocnRy9lusEH1%2FC7YlWq8uv1ldFUR8%2FWuKUb%2BiN5KC71v7NijnNdSjDMCAnW4M4Yp7GeYRKgulWVc1MafZldFEJXQ5jZ9VvW7F%2BbWMf281kOyc%2B6iL4Fz1O535h7MtKGQK0MaiiWn6Ut69RN6odkcsR0dxAhzsgGTcjaQCYUEw0Zgd9TsmpjPt6tNg3A6Ls1WVMa0Z%2Bd&X-Amz-Signature=a6d2e7c59344defe8f7e2fb90b1c2ef42e968010cc020fd97cdef7b49845f78f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CD3WWLK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJz5APIiSLm25SuB7lHgnzsXNqoUwRB%2F542NdTmFKJZAIgUXYkQCUhH3M14oJdGLsWcoRPbX603wca8FLeualyHzoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM2GDdzrasyyOWQidyrcA0aO3qXPs7%2BTUfG1REBKdbp5VnNM0VycobRRv4fn3NoaOYGh5AYLrJbkHH7ps%2FVNiUjyvGjUZJegZ1AnHwWgP8HQ79KKQ%2FS2Ru8iEmsLcp3IY0x2Yvgbqgc5HN6aL3H88XBwx2Vyo4i6AHcFK0dXc%2BxXdcIRl9Budk4BHJXIb32c05MFlmVOw8I6wNZq37tqm4RJMx4RhtPqWcESIjL21kS15jWzfGYJQV5q%2B6zyohu2qLBCwi1hIjGuhsFjpIypdVM%2BxA8QamQjPHIzgL8FWnEtGS681pwyxbLGwf57ecYSVxgyNe0z1JcOU%2By01072j2Wd%2FpwypQtMu7v4Sfu%2FLlf0TtEjNIcUp4kcF9iLf7K%2BAbodwCxa85CuRudOBL1S0%2FqrtTacMKerhf6WGQr8tDAkqgyAAronV2PNRmyuZAG4SPXaSbqEu3r4xZzxJn3jn0dW3tJ7ivQDBTkVH7jM9%2BFU194h4kBWOW84OmiOAyGIFirOV%2FlI%2BzCjyAOEM5A%2B0GlXxYzx%2BqTnRWIf0jCcPsY0Exgl7uHqzsBaiD13NS9osRjIhU9kuLBGfSMLQcjBca%2Fm%2BXAhzcdt83EjyeNXv6zj9uLKXmaq621oVh%2BOFGQ5E30k39Synyj838MhMJnYpL4GOqUBqrs%2FM1Va2UDocKPSJU%2FboocnRy9lusEH1%2FC7YlWq8uv1ldFUR8%2FWuKUb%2BiN5KC71v7NijnNdSjDMCAnW4M4Yp7GeYRKgulWVc1MafZldFEJXQ5jZ9VvW7F%2BbWMf281kOyc%2B6iL4Fz1O535h7MtKGQK0MaiiWn6Ut69RN6odkcsR0dxAhzsgGTcjaQCYUEw0Zgd9TsmpjPt6tNg3A6Ls1WVMa0Z%2Bd&X-Amz-Signature=63024d91641ace0bf21f81bcd824dad190f2a57b2de5047bdbf63b6a3046a1b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CD3WWLK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJz5APIiSLm25SuB7lHgnzsXNqoUwRB%2F542NdTmFKJZAIgUXYkQCUhH3M14oJdGLsWcoRPbX603wca8FLeualyHzoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM2GDdzrasyyOWQidyrcA0aO3qXPs7%2BTUfG1REBKdbp5VnNM0VycobRRv4fn3NoaOYGh5AYLrJbkHH7ps%2FVNiUjyvGjUZJegZ1AnHwWgP8HQ79KKQ%2FS2Ru8iEmsLcp3IY0x2Yvgbqgc5HN6aL3H88XBwx2Vyo4i6AHcFK0dXc%2BxXdcIRl9Budk4BHJXIb32c05MFlmVOw8I6wNZq37tqm4RJMx4RhtPqWcESIjL21kS15jWzfGYJQV5q%2B6zyohu2qLBCwi1hIjGuhsFjpIypdVM%2BxA8QamQjPHIzgL8FWnEtGS681pwyxbLGwf57ecYSVxgyNe0z1JcOU%2By01072j2Wd%2FpwypQtMu7v4Sfu%2FLlf0TtEjNIcUp4kcF9iLf7K%2BAbodwCxa85CuRudOBL1S0%2FqrtTacMKerhf6WGQr8tDAkqgyAAronV2PNRmyuZAG4SPXaSbqEu3r4xZzxJn3jn0dW3tJ7ivQDBTkVH7jM9%2BFU194h4kBWOW84OmiOAyGIFirOV%2FlI%2BzCjyAOEM5A%2B0GlXxYzx%2BqTnRWIf0jCcPsY0Exgl7uHqzsBaiD13NS9osRjIhU9kuLBGfSMLQcjBca%2Fm%2BXAhzcdt83EjyeNXv6zj9uLKXmaq621oVh%2BOFGQ5E30k39Synyj838MhMJnYpL4GOqUBqrs%2FM1Va2UDocKPSJU%2FboocnRy9lusEH1%2FC7YlWq8uv1ldFUR8%2FWuKUb%2BiN5KC71v7NijnNdSjDMCAnW4M4Yp7GeYRKgulWVc1MafZldFEJXQ5jZ9VvW7F%2BbWMf281kOyc%2B6iL4Fz1O535h7MtKGQK0MaiiWn6Ut69RN6odkcsR0dxAhzsgGTcjaQCYUEw0Zgd9TsmpjPt6tNg3A6Ls1WVMa0Z%2Bd&X-Amz-Signature=4d29b2f05ba69cb79005f3d54658faa3c35e882b95b841c2bc1ea28b474de87b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CD3WWLK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJz5APIiSLm25SuB7lHgnzsXNqoUwRB%2F542NdTmFKJZAIgUXYkQCUhH3M14oJdGLsWcoRPbX603wca8FLeualyHzoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM2GDdzrasyyOWQidyrcA0aO3qXPs7%2BTUfG1REBKdbp5VnNM0VycobRRv4fn3NoaOYGh5AYLrJbkHH7ps%2FVNiUjyvGjUZJegZ1AnHwWgP8HQ79KKQ%2FS2Ru8iEmsLcp3IY0x2Yvgbqgc5HN6aL3H88XBwx2Vyo4i6AHcFK0dXc%2BxXdcIRl9Budk4BHJXIb32c05MFlmVOw8I6wNZq37tqm4RJMx4RhtPqWcESIjL21kS15jWzfGYJQV5q%2B6zyohu2qLBCwi1hIjGuhsFjpIypdVM%2BxA8QamQjPHIzgL8FWnEtGS681pwyxbLGwf57ecYSVxgyNe0z1JcOU%2By01072j2Wd%2FpwypQtMu7v4Sfu%2FLlf0TtEjNIcUp4kcF9iLf7K%2BAbodwCxa85CuRudOBL1S0%2FqrtTacMKerhf6WGQr8tDAkqgyAAronV2PNRmyuZAG4SPXaSbqEu3r4xZzxJn3jn0dW3tJ7ivQDBTkVH7jM9%2BFU194h4kBWOW84OmiOAyGIFirOV%2FlI%2BzCjyAOEM5A%2B0GlXxYzx%2BqTnRWIf0jCcPsY0Exgl7uHqzsBaiD13NS9osRjIhU9kuLBGfSMLQcjBca%2Fm%2BXAhzcdt83EjyeNXv6zj9uLKXmaq621oVh%2BOFGQ5E30k39Synyj838MhMJnYpL4GOqUBqrs%2FM1Va2UDocKPSJU%2FboocnRy9lusEH1%2FC7YlWq8uv1ldFUR8%2FWuKUb%2BiN5KC71v7NijnNdSjDMCAnW4M4Yp7GeYRKgulWVc1MafZldFEJXQ5jZ9VvW7F%2BbWMf281kOyc%2B6iL4Fz1O535h7MtKGQK0MaiiWn6Ut69RN6odkcsR0dxAhzsgGTcjaQCYUEw0Zgd9TsmpjPt6tNg3A6Ls1WVMa0Z%2Bd&X-Amz-Signature=84bd7a132d205afb4e8e95840f86238af09a350cde70d9bac83c3c8d00e83709&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CD3WWLK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJz5APIiSLm25SuB7lHgnzsXNqoUwRB%2F542NdTmFKJZAIgUXYkQCUhH3M14oJdGLsWcoRPbX603wca8FLeualyHzoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM2GDdzrasyyOWQidyrcA0aO3qXPs7%2BTUfG1REBKdbp5VnNM0VycobRRv4fn3NoaOYGh5AYLrJbkHH7ps%2FVNiUjyvGjUZJegZ1AnHwWgP8HQ79KKQ%2FS2Ru8iEmsLcp3IY0x2Yvgbqgc5HN6aL3H88XBwx2Vyo4i6AHcFK0dXc%2BxXdcIRl9Budk4BHJXIb32c05MFlmVOw8I6wNZq37tqm4RJMx4RhtPqWcESIjL21kS15jWzfGYJQV5q%2B6zyohu2qLBCwi1hIjGuhsFjpIypdVM%2BxA8QamQjPHIzgL8FWnEtGS681pwyxbLGwf57ecYSVxgyNe0z1JcOU%2By01072j2Wd%2FpwypQtMu7v4Sfu%2FLlf0TtEjNIcUp4kcF9iLf7K%2BAbodwCxa85CuRudOBL1S0%2FqrtTacMKerhf6WGQr8tDAkqgyAAronV2PNRmyuZAG4SPXaSbqEu3r4xZzxJn3jn0dW3tJ7ivQDBTkVH7jM9%2BFU194h4kBWOW84OmiOAyGIFirOV%2FlI%2BzCjyAOEM5A%2B0GlXxYzx%2BqTnRWIf0jCcPsY0Exgl7uHqzsBaiD13NS9osRjIhU9kuLBGfSMLQcjBca%2Fm%2BXAhzcdt83EjyeNXv6zj9uLKXmaq621oVh%2BOFGQ5E30k39Synyj838MhMJnYpL4GOqUBqrs%2FM1Va2UDocKPSJU%2FboocnRy9lusEH1%2FC7YlWq8uv1ldFUR8%2FWuKUb%2BiN5KC71v7NijnNdSjDMCAnW4M4Yp7GeYRKgulWVc1MafZldFEJXQ5jZ9VvW7F%2BbWMf281kOyc%2B6iL4Fz1O535h7MtKGQK0MaiiWn6Ut69RN6odkcsR0dxAhzsgGTcjaQCYUEw0Zgd9TsmpjPt6tNg3A6Ls1WVMa0Z%2Bd&X-Amz-Signature=bd474c3475f9bbc4f97c3fd5f98f6f8253f99aee8f877b1cd1d31533b9e27635&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CD3WWLK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJz5APIiSLm25SuB7lHgnzsXNqoUwRB%2F542NdTmFKJZAIgUXYkQCUhH3M14oJdGLsWcoRPbX603wca8FLeualyHzoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM2GDdzrasyyOWQidyrcA0aO3qXPs7%2BTUfG1REBKdbp5VnNM0VycobRRv4fn3NoaOYGh5AYLrJbkHH7ps%2FVNiUjyvGjUZJegZ1AnHwWgP8HQ79KKQ%2FS2Ru8iEmsLcp3IY0x2Yvgbqgc5HN6aL3H88XBwx2Vyo4i6AHcFK0dXc%2BxXdcIRl9Budk4BHJXIb32c05MFlmVOw8I6wNZq37tqm4RJMx4RhtPqWcESIjL21kS15jWzfGYJQV5q%2B6zyohu2qLBCwi1hIjGuhsFjpIypdVM%2BxA8QamQjPHIzgL8FWnEtGS681pwyxbLGwf57ecYSVxgyNe0z1JcOU%2By01072j2Wd%2FpwypQtMu7v4Sfu%2FLlf0TtEjNIcUp4kcF9iLf7K%2BAbodwCxa85CuRudOBL1S0%2FqrtTacMKerhf6WGQr8tDAkqgyAAronV2PNRmyuZAG4SPXaSbqEu3r4xZzxJn3jn0dW3tJ7ivQDBTkVH7jM9%2BFU194h4kBWOW84OmiOAyGIFirOV%2FlI%2BzCjyAOEM5A%2B0GlXxYzx%2BqTnRWIf0jCcPsY0Exgl7uHqzsBaiD13NS9osRjIhU9kuLBGfSMLQcjBca%2Fm%2BXAhzcdt83EjyeNXv6zj9uLKXmaq621oVh%2BOFGQ5E30k39Synyj838MhMJnYpL4GOqUBqrs%2FM1Va2UDocKPSJU%2FboocnRy9lusEH1%2FC7YlWq8uv1ldFUR8%2FWuKUb%2BiN5KC71v7NijnNdSjDMCAnW4M4Yp7GeYRKgulWVc1MafZldFEJXQ5jZ9VvW7F%2BbWMf281kOyc%2B6iL4Fz1O535h7MtKGQK0MaiiWn6Ut69RN6odkcsR0dxAhzsgGTcjaQCYUEw0Zgd9TsmpjPt6tNg3A6Ls1WVMa0Z%2Bd&X-Amz-Signature=00e399ed034d0200839bfb4367e3d196515913275b958efd390ed9fd44fa73fb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CD3WWLK%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJz5APIiSLm25SuB7lHgnzsXNqoUwRB%2F542NdTmFKJZAIgUXYkQCUhH3M14oJdGLsWcoRPbX603wca8FLeualyHzoq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDM2GDdzrasyyOWQidyrcA0aO3qXPs7%2BTUfG1REBKdbp5VnNM0VycobRRv4fn3NoaOYGh5AYLrJbkHH7ps%2FVNiUjyvGjUZJegZ1AnHwWgP8HQ79KKQ%2FS2Ru8iEmsLcp3IY0x2Yvgbqgc5HN6aL3H88XBwx2Vyo4i6AHcFK0dXc%2BxXdcIRl9Budk4BHJXIb32c05MFlmVOw8I6wNZq37tqm4RJMx4RhtPqWcESIjL21kS15jWzfGYJQV5q%2B6zyohu2qLBCwi1hIjGuhsFjpIypdVM%2BxA8QamQjPHIzgL8FWnEtGS681pwyxbLGwf57ecYSVxgyNe0z1JcOU%2By01072j2Wd%2FpwypQtMu7v4Sfu%2FLlf0TtEjNIcUp4kcF9iLf7K%2BAbodwCxa85CuRudOBL1S0%2FqrtTacMKerhf6WGQr8tDAkqgyAAronV2PNRmyuZAG4SPXaSbqEu3r4xZzxJn3jn0dW3tJ7ivQDBTkVH7jM9%2BFU194h4kBWOW84OmiOAyGIFirOV%2FlI%2BzCjyAOEM5A%2B0GlXxYzx%2BqTnRWIf0jCcPsY0Exgl7uHqzsBaiD13NS9osRjIhU9kuLBGfSMLQcjBca%2Fm%2BXAhzcdt83EjyeNXv6zj9uLKXmaq621oVh%2BOFGQ5E30k39Synyj838MhMJnYpL4GOqUBqrs%2FM1Va2UDocKPSJU%2FboocnRy9lusEH1%2FC7YlWq8uv1ldFUR8%2FWuKUb%2BiN5KC71v7NijnNdSjDMCAnW4M4Yp7GeYRKgulWVc1MafZldFEJXQ5jZ9VvW7F%2BbWMf281kOyc%2B6iL4Fz1O535h7MtKGQK0MaiiWn6Ut69RN6odkcsR0dxAhzsgGTcjaQCYUEw0Zgd9TsmpjPt6tNg3A6Ls1WVMa0Z%2Bd&X-Amz-Signature=37ed4dc9203c8b3a98ccb25fa47038279e8836364b178da4fcd71527032bd1a4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

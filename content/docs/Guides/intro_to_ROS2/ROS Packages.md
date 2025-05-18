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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVRSCKFF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv3Mg%2FyfYc08ZtE2AgRM3fCbgHprSCNULyrxQ7kDlQdQIgdmGXI80H5KS73EleQelNt4xtwTnwmVmQP%2B6VJAxePyQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDF5EuvOjfIYqa4tt6yrcA%2FNEumt7DPmbKIpemgj6Z%2B2i1k76PvbNar4y1wg9eptDhdDunwMemY8jQaI4hkRrBIjAnbAfz0z6W9XyoXOmXbBvU324VLgZ2rgfyiQAny%2FE%2BkHfw5mSVmePjL3AouusN7jKeRUErANJazQuUizjwX8U57L0NT3ayLDZLbwTA2dftp8jbFXrl26DAfgG%2BBchdl6vltbO49GdPIcRjhOB%2BYo9zqY9j4SNula3haZBxucErK%2FgfQYzc%2Bb1NUDD%2FGieds45UnnDaK7S2BsqWZJalqmv%2FmxqYTyEQMxq9xY5MioS7zFC4SvpvY%2BMJL5JFC8LOBaB7lAtGJ%2BbpFcFxrQB7OUtAJGJS35OufCbgELpjmwktpqKsHhrALwQZRxURwZFzamuQVxz9m7d42JoQ%2FEhQcJf8IILrIG3eMpGHwr4L3O6qE3qPzk3RETnL5yTjmX%2FYe6v2uH8bZBhBKZkT9u22OkxUDY4iVMdwrthyXejBM6YyvQnqR0ivkSz3MZtgI%2FM1mKztLUR6tPq6zruvBK9ZHltdvkXg8GTMXpA7ULYzboPbq9btZKL23JZiEmWhbwpdn4u%2B1lsdkbFQFsBNZyDBV%2FzOAYpYgvGnDsJTb5BfIgkMzPZz0apLBn1BC3AMNDXpMEGOqUBFVkbS2BoFoPu1XsVF6xMp5Ybe6UDcEn5w4PSQU4FvNrrMuAnF2Xw8wK09jy2JpqOnq492MZSxr%2B326wHDYn98ylAuXaDMJ%2FrE9ZYiil4YARGD8PWB4AyjVQ8jcSwXqAF2brUghKh8QPxhozF7f8DMQcc1acmLZbEsQRb51vG0Rm9nayCTKJU2HlJYe4Kvf0%2FcnJsGAHCIZOSwyawzWzBv4w4o5Da&X-Amz-Signature=6266384b335d2fa04d3adde9812a1696958acda553ba53d023fb84e27f1e8ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVRSCKFF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv3Mg%2FyfYc08ZtE2AgRM3fCbgHprSCNULyrxQ7kDlQdQIgdmGXI80H5KS73EleQelNt4xtwTnwmVmQP%2B6VJAxePyQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDF5EuvOjfIYqa4tt6yrcA%2FNEumt7DPmbKIpemgj6Z%2B2i1k76PvbNar4y1wg9eptDhdDunwMemY8jQaI4hkRrBIjAnbAfz0z6W9XyoXOmXbBvU324VLgZ2rgfyiQAny%2FE%2BkHfw5mSVmePjL3AouusN7jKeRUErANJazQuUizjwX8U57L0NT3ayLDZLbwTA2dftp8jbFXrl26DAfgG%2BBchdl6vltbO49GdPIcRjhOB%2BYo9zqY9j4SNula3haZBxucErK%2FgfQYzc%2Bb1NUDD%2FGieds45UnnDaK7S2BsqWZJalqmv%2FmxqYTyEQMxq9xY5MioS7zFC4SvpvY%2BMJL5JFC8LOBaB7lAtGJ%2BbpFcFxrQB7OUtAJGJS35OufCbgELpjmwktpqKsHhrALwQZRxURwZFzamuQVxz9m7d42JoQ%2FEhQcJf8IILrIG3eMpGHwr4L3O6qE3qPzk3RETnL5yTjmX%2FYe6v2uH8bZBhBKZkT9u22OkxUDY4iVMdwrthyXejBM6YyvQnqR0ivkSz3MZtgI%2FM1mKztLUR6tPq6zruvBK9ZHltdvkXg8GTMXpA7ULYzboPbq9btZKL23JZiEmWhbwpdn4u%2B1lsdkbFQFsBNZyDBV%2FzOAYpYgvGnDsJTb5BfIgkMzPZz0apLBn1BC3AMNDXpMEGOqUBFVkbS2BoFoPu1XsVF6xMp5Ybe6UDcEn5w4PSQU4FvNrrMuAnF2Xw8wK09jy2JpqOnq492MZSxr%2B326wHDYn98ylAuXaDMJ%2FrE9ZYiil4YARGD8PWB4AyjVQ8jcSwXqAF2brUghKh8QPxhozF7f8DMQcc1acmLZbEsQRb51vG0Rm9nayCTKJU2HlJYe4Kvf0%2FcnJsGAHCIZOSwyawzWzBv4w4o5Da&X-Amz-Signature=a10f422a33668a7ef7ae0d1a5d72f6bb553b3e37a2d32ae3058a9d052341b4ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVRSCKFF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv3Mg%2FyfYc08ZtE2AgRM3fCbgHprSCNULyrxQ7kDlQdQIgdmGXI80H5KS73EleQelNt4xtwTnwmVmQP%2B6VJAxePyQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDF5EuvOjfIYqa4tt6yrcA%2FNEumt7DPmbKIpemgj6Z%2B2i1k76PvbNar4y1wg9eptDhdDunwMemY8jQaI4hkRrBIjAnbAfz0z6W9XyoXOmXbBvU324VLgZ2rgfyiQAny%2FE%2BkHfw5mSVmePjL3AouusN7jKeRUErANJazQuUizjwX8U57L0NT3ayLDZLbwTA2dftp8jbFXrl26DAfgG%2BBchdl6vltbO49GdPIcRjhOB%2BYo9zqY9j4SNula3haZBxucErK%2FgfQYzc%2Bb1NUDD%2FGieds45UnnDaK7S2BsqWZJalqmv%2FmxqYTyEQMxq9xY5MioS7zFC4SvpvY%2BMJL5JFC8LOBaB7lAtGJ%2BbpFcFxrQB7OUtAJGJS35OufCbgELpjmwktpqKsHhrALwQZRxURwZFzamuQVxz9m7d42JoQ%2FEhQcJf8IILrIG3eMpGHwr4L3O6qE3qPzk3RETnL5yTjmX%2FYe6v2uH8bZBhBKZkT9u22OkxUDY4iVMdwrthyXejBM6YyvQnqR0ivkSz3MZtgI%2FM1mKztLUR6tPq6zruvBK9ZHltdvkXg8GTMXpA7ULYzboPbq9btZKL23JZiEmWhbwpdn4u%2B1lsdkbFQFsBNZyDBV%2FzOAYpYgvGnDsJTb5BfIgkMzPZz0apLBn1BC3AMNDXpMEGOqUBFVkbS2BoFoPu1XsVF6xMp5Ybe6UDcEn5w4PSQU4FvNrrMuAnF2Xw8wK09jy2JpqOnq492MZSxr%2B326wHDYn98ylAuXaDMJ%2FrE9ZYiil4YARGD8PWB4AyjVQ8jcSwXqAF2brUghKh8QPxhozF7f8DMQcc1acmLZbEsQRb51vG0Rm9nayCTKJU2HlJYe4Kvf0%2FcnJsGAHCIZOSwyawzWzBv4w4o5Da&X-Amz-Signature=a14926fe6fde2ec010626825b916eb02674b4b46625593da70d0909f9f7bc633&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVRSCKFF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv3Mg%2FyfYc08ZtE2AgRM3fCbgHprSCNULyrxQ7kDlQdQIgdmGXI80H5KS73EleQelNt4xtwTnwmVmQP%2B6VJAxePyQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDF5EuvOjfIYqa4tt6yrcA%2FNEumt7DPmbKIpemgj6Z%2B2i1k76PvbNar4y1wg9eptDhdDunwMemY8jQaI4hkRrBIjAnbAfz0z6W9XyoXOmXbBvU324VLgZ2rgfyiQAny%2FE%2BkHfw5mSVmePjL3AouusN7jKeRUErANJazQuUizjwX8U57L0NT3ayLDZLbwTA2dftp8jbFXrl26DAfgG%2BBchdl6vltbO49GdPIcRjhOB%2BYo9zqY9j4SNula3haZBxucErK%2FgfQYzc%2Bb1NUDD%2FGieds45UnnDaK7S2BsqWZJalqmv%2FmxqYTyEQMxq9xY5MioS7zFC4SvpvY%2BMJL5JFC8LOBaB7lAtGJ%2BbpFcFxrQB7OUtAJGJS35OufCbgELpjmwktpqKsHhrALwQZRxURwZFzamuQVxz9m7d42JoQ%2FEhQcJf8IILrIG3eMpGHwr4L3O6qE3qPzk3RETnL5yTjmX%2FYe6v2uH8bZBhBKZkT9u22OkxUDY4iVMdwrthyXejBM6YyvQnqR0ivkSz3MZtgI%2FM1mKztLUR6tPq6zruvBK9ZHltdvkXg8GTMXpA7ULYzboPbq9btZKL23JZiEmWhbwpdn4u%2B1lsdkbFQFsBNZyDBV%2FzOAYpYgvGnDsJTb5BfIgkMzPZz0apLBn1BC3AMNDXpMEGOqUBFVkbS2BoFoPu1XsVF6xMp5Ybe6UDcEn5w4PSQU4FvNrrMuAnF2Xw8wK09jy2JpqOnq492MZSxr%2B326wHDYn98ylAuXaDMJ%2FrE9ZYiil4YARGD8PWB4AyjVQ8jcSwXqAF2brUghKh8QPxhozF7f8DMQcc1acmLZbEsQRb51vG0Rm9nayCTKJU2HlJYe4Kvf0%2FcnJsGAHCIZOSwyawzWzBv4w4o5Da&X-Amz-Signature=e46a7eddd2dfb67fc7a71be74b0a05b2d80f5cf04b2f14088413c730d9510abc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVRSCKFF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv3Mg%2FyfYc08ZtE2AgRM3fCbgHprSCNULyrxQ7kDlQdQIgdmGXI80H5KS73EleQelNt4xtwTnwmVmQP%2B6VJAxePyQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDF5EuvOjfIYqa4tt6yrcA%2FNEumt7DPmbKIpemgj6Z%2B2i1k76PvbNar4y1wg9eptDhdDunwMemY8jQaI4hkRrBIjAnbAfz0z6W9XyoXOmXbBvU324VLgZ2rgfyiQAny%2FE%2BkHfw5mSVmePjL3AouusN7jKeRUErANJazQuUizjwX8U57L0NT3ayLDZLbwTA2dftp8jbFXrl26DAfgG%2BBchdl6vltbO49GdPIcRjhOB%2BYo9zqY9j4SNula3haZBxucErK%2FgfQYzc%2Bb1NUDD%2FGieds45UnnDaK7S2BsqWZJalqmv%2FmxqYTyEQMxq9xY5MioS7zFC4SvpvY%2BMJL5JFC8LOBaB7lAtGJ%2BbpFcFxrQB7OUtAJGJS35OufCbgELpjmwktpqKsHhrALwQZRxURwZFzamuQVxz9m7d42JoQ%2FEhQcJf8IILrIG3eMpGHwr4L3O6qE3qPzk3RETnL5yTjmX%2FYe6v2uH8bZBhBKZkT9u22OkxUDY4iVMdwrthyXejBM6YyvQnqR0ivkSz3MZtgI%2FM1mKztLUR6tPq6zruvBK9ZHltdvkXg8GTMXpA7ULYzboPbq9btZKL23JZiEmWhbwpdn4u%2B1lsdkbFQFsBNZyDBV%2FzOAYpYgvGnDsJTb5BfIgkMzPZz0apLBn1BC3AMNDXpMEGOqUBFVkbS2BoFoPu1XsVF6xMp5Ybe6UDcEn5w4PSQU4FvNrrMuAnF2Xw8wK09jy2JpqOnq492MZSxr%2B326wHDYn98ylAuXaDMJ%2FrE9ZYiil4YARGD8PWB4AyjVQ8jcSwXqAF2brUghKh8QPxhozF7f8DMQcc1acmLZbEsQRb51vG0Rm9nayCTKJU2HlJYe4Kvf0%2FcnJsGAHCIZOSwyawzWzBv4w4o5Da&X-Amz-Signature=2f2ba26853e85294a0c14b5fef9caa51b4c3d328ec391ce463ed407481390b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVRSCKFF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv3Mg%2FyfYc08ZtE2AgRM3fCbgHprSCNULyrxQ7kDlQdQIgdmGXI80H5KS73EleQelNt4xtwTnwmVmQP%2B6VJAxePyQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDF5EuvOjfIYqa4tt6yrcA%2FNEumt7DPmbKIpemgj6Z%2B2i1k76PvbNar4y1wg9eptDhdDunwMemY8jQaI4hkRrBIjAnbAfz0z6W9XyoXOmXbBvU324VLgZ2rgfyiQAny%2FE%2BkHfw5mSVmePjL3AouusN7jKeRUErANJazQuUizjwX8U57L0NT3ayLDZLbwTA2dftp8jbFXrl26DAfgG%2BBchdl6vltbO49GdPIcRjhOB%2BYo9zqY9j4SNula3haZBxucErK%2FgfQYzc%2Bb1NUDD%2FGieds45UnnDaK7S2BsqWZJalqmv%2FmxqYTyEQMxq9xY5MioS7zFC4SvpvY%2BMJL5JFC8LOBaB7lAtGJ%2BbpFcFxrQB7OUtAJGJS35OufCbgELpjmwktpqKsHhrALwQZRxURwZFzamuQVxz9m7d42JoQ%2FEhQcJf8IILrIG3eMpGHwr4L3O6qE3qPzk3RETnL5yTjmX%2FYe6v2uH8bZBhBKZkT9u22OkxUDY4iVMdwrthyXejBM6YyvQnqR0ivkSz3MZtgI%2FM1mKztLUR6tPq6zruvBK9ZHltdvkXg8GTMXpA7ULYzboPbq9btZKL23JZiEmWhbwpdn4u%2B1lsdkbFQFsBNZyDBV%2FzOAYpYgvGnDsJTb5BfIgkMzPZz0apLBn1BC3AMNDXpMEGOqUBFVkbS2BoFoPu1XsVF6xMp5Ybe6UDcEn5w4PSQU4FvNrrMuAnF2Xw8wK09jy2JpqOnq492MZSxr%2B326wHDYn98ylAuXaDMJ%2FrE9ZYiil4YARGD8PWB4AyjVQ8jcSwXqAF2brUghKh8QPxhozF7f8DMQcc1acmLZbEsQRb51vG0Rm9nayCTKJU2HlJYe4Kvf0%2FcnJsGAHCIZOSwyawzWzBv4w4o5Da&X-Amz-Signature=3ceebaa2d20bbfd8646d17feeef02fb78d4ff18838afebc8e50fe49e59525bdd&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVRSCKFF%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv3Mg%2FyfYc08ZtE2AgRM3fCbgHprSCNULyrxQ7kDlQdQIgdmGXI80H5KS73EleQelNt4xtwTnwmVmQP%2B6VJAxePyQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDF5EuvOjfIYqa4tt6yrcA%2FNEumt7DPmbKIpemgj6Z%2B2i1k76PvbNar4y1wg9eptDhdDunwMemY8jQaI4hkRrBIjAnbAfz0z6W9XyoXOmXbBvU324VLgZ2rgfyiQAny%2FE%2BkHfw5mSVmePjL3AouusN7jKeRUErANJazQuUizjwX8U57L0NT3ayLDZLbwTA2dftp8jbFXrl26DAfgG%2BBchdl6vltbO49GdPIcRjhOB%2BYo9zqY9j4SNula3haZBxucErK%2FgfQYzc%2Bb1NUDD%2FGieds45UnnDaK7S2BsqWZJalqmv%2FmxqYTyEQMxq9xY5MioS7zFC4SvpvY%2BMJL5JFC8LOBaB7lAtGJ%2BbpFcFxrQB7OUtAJGJS35OufCbgELpjmwktpqKsHhrALwQZRxURwZFzamuQVxz9m7d42JoQ%2FEhQcJf8IILrIG3eMpGHwr4L3O6qE3qPzk3RETnL5yTjmX%2FYe6v2uH8bZBhBKZkT9u22OkxUDY4iVMdwrthyXejBM6YyvQnqR0ivkSz3MZtgI%2FM1mKztLUR6tPq6zruvBK9ZHltdvkXg8GTMXpA7ULYzboPbq9btZKL23JZiEmWhbwpdn4u%2B1lsdkbFQFsBNZyDBV%2FzOAYpYgvGnDsJTb5BfIgkMzPZz0apLBn1BC3AMNDXpMEGOqUBFVkbS2BoFoPu1XsVF6xMp5Ybe6UDcEn5w4PSQU4FvNrrMuAnF2Xw8wK09jy2JpqOnq492MZSxr%2B326wHDYn98ylAuXaDMJ%2FrE9ZYiil4YARGD8PWB4AyjVQ8jcSwXqAF2brUghKh8QPxhozF7f8DMQcc1acmLZbEsQRb51vG0Rm9nayCTKJU2HlJYe4Kvf0%2FcnJsGAHCIZOSwyawzWzBv4w4o5Da&X-Amz-Signature=95178cb0143e9a2076f563b5ab21b4367bdfb690ac01bfdcd49cecbecb24bc6b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

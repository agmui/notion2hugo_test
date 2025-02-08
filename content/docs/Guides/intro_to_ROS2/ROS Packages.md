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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKIZTZZ5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHODNjvtLoh7h9O9q67vbm8SbOBHNSDbmB3bOY6xcQ8HAiEAzw5EBduwNd4I%2FMpxsXnOdgjKEzZR7Sqww5pDJL9OuGcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvEFfORpQky87vcJyrcA0PiyoGXQRw%2Bm6HVfYfboXeJA6mb3V3r70DJb7rEOQVHpfaaLIS%2B%2FDmMMwUOmGluPy%2FDOuNYzW3XrVcoNK8GLwWrE7Z5xbuDP5aEn2BRhaBnT5WyxwOBuYe5lI9c5SSwmOgSMIsnXozCitJRiXElZ%2BuatAzxyzdIz8HrHWH7jaU3d6ilrzUtJXCaTfsOmel%2BDsj%2Bl3kODre4bexP8iHjTNJFyzNpNo4o9VxZ0DNgylX2VnUlyH6OyZcAcJvM0TxtsfIhuEW69fAo75s2uOJ0g%2BCjI3NRjJJhfY0s%2FgXhn3dIwgnzjkn8INVD7tOUFWNq3cpArpmpx3XnV%2FdFe8DPf3lHe8SDzcjev3xM0wz4OiDtuWjJjeUVpOthax9klJm9Az4Cfqg5wOpbP1l5NLoagmAX7yBtZJe3WYUCTUGpH4FDPxaZCnZZEjDj5S7vox%2BLfYkB267pctk63SOJnuWUzwirYNRBo8r%2BfxhRAseLuFNylLgwF%2FdaE%2BlOOVvJiqLvmdqSSulRHKtyaNKDcqWEo5NmZ3GwpN%2FtqF%2FD%2BYj%2FvbWd5B7bR4IM9AAwQyKON1gQExatMF%2F0GxvZBbCvYJL600UQD0TRIZXOsNVRoaCsKpm2aXJfAVTfAB%2FsBk2GMKmHnb0GOqUBKjX3d5r773vdfZy%2FLc%2FBb3IndAo8NlrhCZgqWvaj3jS8bqNFhuBVGVYz%2BqaKriaMwDXE2d0kZk%2F000%2FghDp%2FOfDTBGmEhBYjguXJSPrEGhjPYUxDz00tfxt3A1BF2nCV5dfy0eonyUB4Lyv96VFvgrRPq0k9EPNrmqou8hAHJnI4UNjnChJgGENLpZBZaUOAEdYVkp8LRN%2Fslc0I9eqvpnsLDhXm&X-Amz-Signature=eda6b1f3a57376afd37575d193b51d4f6fa89f7a1b94cb2479ff5a1d41270c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKIZTZZ5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHODNjvtLoh7h9O9q67vbm8SbOBHNSDbmB3bOY6xcQ8HAiEAzw5EBduwNd4I%2FMpxsXnOdgjKEzZR7Sqww5pDJL9OuGcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvEFfORpQky87vcJyrcA0PiyoGXQRw%2Bm6HVfYfboXeJA6mb3V3r70DJb7rEOQVHpfaaLIS%2B%2FDmMMwUOmGluPy%2FDOuNYzW3XrVcoNK8GLwWrE7Z5xbuDP5aEn2BRhaBnT5WyxwOBuYe5lI9c5SSwmOgSMIsnXozCitJRiXElZ%2BuatAzxyzdIz8HrHWH7jaU3d6ilrzUtJXCaTfsOmel%2BDsj%2Bl3kODre4bexP8iHjTNJFyzNpNo4o9VxZ0DNgylX2VnUlyH6OyZcAcJvM0TxtsfIhuEW69fAo75s2uOJ0g%2BCjI3NRjJJhfY0s%2FgXhn3dIwgnzjkn8INVD7tOUFWNq3cpArpmpx3XnV%2FdFe8DPf3lHe8SDzcjev3xM0wz4OiDtuWjJjeUVpOthax9klJm9Az4Cfqg5wOpbP1l5NLoagmAX7yBtZJe3WYUCTUGpH4FDPxaZCnZZEjDj5S7vox%2BLfYkB267pctk63SOJnuWUzwirYNRBo8r%2BfxhRAseLuFNylLgwF%2FdaE%2BlOOVvJiqLvmdqSSulRHKtyaNKDcqWEo5NmZ3GwpN%2FtqF%2FD%2BYj%2FvbWd5B7bR4IM9AAwQyKON1gQExatMF%2F0GxvZBbCvYJL600UQD0TRIZXOsNVRoaCsKpm2aXJfAVTfAB%2FsBk2GMKmHnb0GOqUBKjX3d5r773vdfZy%2FLc%2FBb3IndAo8NlrhCZgqWvaj3jS8bqNFhuBVGVYz%2BqaKriaMwDXE2d0kZk%2F000%2FghDp%2FOfDTBGmEhBYjguXJSPrEGhjPYUxDz00tfxt3A1BF2nCV5dfy0eonyUB4Lyv96VFvgrRPq0k9EPNrmqou8hAHJnI4UNjnChJgGENLpZBZaUOAEdYVkp8LRN%2Fslc0I9eqvpnsLDhXm&X-Amz-Signature=0d0152b0d590983ae9fada1281b4f57b13af9a6eda39f855af46cc49bb3bbffc&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKIZTZZ5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHODNjvtLoh7h9O9q67vbm8SbOBHNSDbmB3bOY6xcQ8HAiEAzw5EBduwNd4I%2FMpxsXnOdgjKEzZR7Sqww5pDJL9OuGcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvEFfORpQky87vcJyrcA0PiyoGXQRw%2Bm6HVfYfboXeJA6mb3V3r70DJb7rEOQVHpfaaLIS%2B%2FDmMMwUOmGluPy%2FDOuNYzW3XrVcoNK8GLwWrE7Z5xbuDP5aEn2BRhaBnT5WyxwOBuYe5lI9c5SSwmOgSMIsnXozCitJRiXElZ%2BuatAzxyzdIz8HrHWH7jaU3d6ilrzUtJXCaTfsOmel%2BDsj%2Bl3kODre4bexP8iHjTNJFyzNpNo4o9VxZ0DNgylX2VnUlyH6OyZcAcJvM0TxtsfIhuEW69fAo75s2uOJ0g%2BCjI3NRjJJhfY0s%2FgXhn3dIwgnzjkn8INVD7tOUFWNq3cpArpmpx3XnV%2FdFe8DPf3lHe8SDzcjev3xM0wz4OiDtuWjJjeUVpOthax9klJm9Az4Cfqg5wOpbP1l5NLoagmAX7yBtZJe3WYUCTUGpH4FDPxaZCnZZEjDj5S7vox%2BLfYkB267pctk63SOJnuWUzwirYNRBo8r%2BfxhRAseLuFNylLgwF%2FdaE%2BlOOVvJiqLvmdqSSulRHKtyaNKDcqWEo5NmZ3GwpN%2FtqF%2FD%2BYj%2FvbWd5B7bR4IM9AAwQyKON1gQExatMF%2F0GxvZBbCvYJL600UQD0TRIZXOsNVRoaCsKpm2aXJfAVTfAB%2FsBk2GMKmHnb0GOqUBKjX3d5r773vdfZy%2FLc%2FBb3IndAo8NlrhCZgqWvaj3jS8bqNFhuBVGVYz%2BqaKriaMwDXE2d0kZk%2F000%2FghDp%2FOfDTBGmEhBYjguXJSPrEGhjPYUxDz00tfxt3A1BF2nCV5dfy0eonyUB4Lyv96VFvgrRPq0k9EPNrmqou8hAHJnI4UNjnChJgGENLpZBZaUOAEdYVkp8LRN%2Fslc0I9eqvpnsLDhXm&X-Amz-Signature=a7b9271374ba6f61b70eac44c2a64f8cae8400c64fbcdbb30f741cf0428d98c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKIZTZZ5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHODNjvtLoh7h9O9q67vbm8SbOBHNSDbmB3bOY6xcQ8HAiEAzw5EBduwNd4I%2FMpxsXnOdgjKEzZR7Sqww5pDJL9OuGcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvEFfORpQky87vcJyrcA0PiyoGXQRw%2Bm6HVfYfboXeJA6mb3V3r70DJb7rEOQVHpfaaLIS%2B%2FDmMMwUOmGluPy%2FDOuNYzW3XrVcoNK8GLwWrE7Z5xbuDP5aEn2BRhaBnT5WyxwOBuYe5lI9c5SSwmOgSMIsnXozCitJRiXElZ%2BuatAzxyzdIz8HrHWH7jaU3d6ilrzUtJXCaTfsOmel%2BDsj%2Bl3kODre4bexP8iHjTNJFyzNpNo4o9VxZ0DNgylX2VnUlyH6OyZcAcJvM0TxtsfIhuEW69fAo75s2uOJ0g%2BCjI3NRjJJhfY0s%2FgXhn3dIwgnzjkn8INVD7tOUFWNq3cpArpmpx3XnV%2FdFe8DPf3lHe8SDzcjev3xM0wz4OiDtuWjJjeUVpOthax9klJm9Az4Cfqg5wOpbP1l5NLoagmAX7yBtZJe3WYUCTUGpH4FDPxaZCnZZEjDj5S7vox%2BLfYkB267pctk63SOJnuWUzwirYNRBo8r%2BfxhRAseLuFNylLgwF%2FdaE%2BlOOVvJiqLvmdqSSulRHKtyaNKDcqWEo5NmZ3GwpN%2FtqF%2FD%2BYj%2FvbWd5B7bR4IM9AAwQyKON1gQExatMF%2F0GxvZBbCvYJL600UQD0TRIZXOsNVRoaCsKpm2aXJfAVTfAB%2FsBk2GMKmHnb0GOqUBKjX3d5r773vdfZy%2FLc%2FBb3IndAo8NlrhCZgqWvaj3jS8bqNFhuBVGVYz%2BqaKriaMwDXE2d0kZk%2F000%2FghDp%2FOfDTBGmEhBYjguXJSPrEGhjPYUxDz00tfxt3A1BF2nCV5dfy0eonyUB4Lyv96VFvgrRPq0k9EPNrmqou8hAHJnI4UNjnChJgGENLpZBZaUOAEdYVkp8LRN%2Fslc0I9eqvpnsLDhXm&X-Amz-Signature=2a4054f370c852f84d23b7dfa0c3a139ce2321f45083d6082bf3f3cf5c56e84c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKIZTZZ5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHODNjvtLoh7h9O9q67vbm8SbOBHNSDbmB3bOY6xcQ8HAiEAzw5EBduwNd4I%2FMpxsXnOdgjKEzZR7Sqww5pDJL9OuGcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvEFfORpQky87vcJyrcA0PiyoGXQRw%2Bm6HVfYfboXeJA6mb3V3r70DJb7rEOQVHpfaaLIS%2B%2FDmMMwUOmGluPy%2FDOuNYzW3XrVcoNK8GLwWrE7Z5xbuDP5aEn2BRhaBnT5WyxwOBuYe5lI9c5SSwmOgSMIsnXozCitJRiXElZ%2BuatAzxyzdIz8HrHWH7jaU3d6ilrzUtJXCaTfsOmel%2BDsj%2Bl3kODre4bexP8iHjTNJFyzNpNo4o9VxZ0DNgylX2VnUlyH6OyZcAcJvM0TxtsfIhuEW69fAo75s2uOJ0g%2BCjI3NRjJJhfY0s%2FgXhn3dIwgnzjkn8INVD7tOUFWNq3cpArpmpx3XnV%2FdFe8DPf3lHe8SDzcjev3xM0wz4OiDtuWjJjeUVpOthax9klJm9Az4Cfqg5wOpbP1l5NLoagmAX7yBtZJe3WYUCTUGpH4FDPxaZCnZZEjDj5S7vox%2BLfYkB267pctk63SOJnuWUzwirYNRBo8r%2BfxhRAseLuFNylLgwF%2FdaE%2BlOOVvJiqLvmdqSSulRHKtyaNKDcqWEo5NmZ3GwpN%2FtqF%2FD%2BYj%2FvbWd5B7bR4IM9AAwQyKON1gQExatMF%2F0GxvZBbCvYJL600UQD0TRIZXOsNVRoaCsKpm2aXJfAVTfAB%2FsBk2GMKmHnb0GOqUBKjX3d5r773vdfZy%2FLc%2FBb3IndAo8NlrhCZgqWvaj3jS8bqNFhuBVGVYz%2BqaKriaMwDXE2d0kZk%2F000%2FghDp%2FOfDTBGmEhBYjguXJSPrEGhjPYUxDz00tfxt3A1BF2nCV5dfy0eonyUB4Lyv96VFvgrRPq0k9EPNrmqou8hAHJnI4UNjnChJgGENLpZBZaUOAEdYVkp8LRN%2Fslc0I9eqvpnsLDhXm&X-Amz-Signature=d7add68cfc2b64def6dfd356fbdf3ce1dd08b8e609d81556abe03f55c02c155d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKIZTZZ5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHODNjvtLoh7h9O9q67vbm8SbOBHNSDbmB3bOY6xcQ8HAiEAzw5EBduwNd4I%2FMpxsXnOdgjKEzZR7Sqww5pDJL9OuGcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvEFfORpQky87vcJyrcA0PiyoGXQRw%2Bm6HVfYfboXeJA6mb3V3r70DJb7rEOQVHpfaaLIS%2B%2FDmMMwUOmGluPy%2FDOuNYzW3XrVcoNK8GLwWrE7Z5xbuDP5aEn2BRhaBnT5WyxwOBuYe5lI9c5SSwmOgSMIsnXozCitJRiXElZ%2BuatAzxyzdIz8HrHWH7jaU3d6ilrzUtJXCaTfsOmel%2BDsj%2Bl3kODre4bexP8iHjTNJFyzNpNo4o9VxZ0DNgylX2VnUlyH6OyZcAcJvM0TxtsfIhuEW69fAo75s2uOJ0g%2BCjI3NRjJJhfY0s%2FgXhn3dIwgnzjkn8INVD7tOUFWNq3cpArpmpx3XnV%2FdFe8DPf3lHe8SDzcjev3xM0wz4OiDtuWjJjeUVpOthax9klJm9Az4Cfqg5wOpbP1l5NLoagmAX7yBtZJe3WYUCTUGpH4FDPxaZCnZZEjDj5S7vox%2BLfYkB267pctk63SOJnuWUzwirYNRBo8r%2BfxhRAseLuFNylLgwF%2FdaE%2BlOOVvJiqLvmdqSSulRHKtyaNKDcqWEo5NmZ3GwpN%2FtqF%2FD%2BYj%2FvbWd5B7bR4IM9AAwQyKON1gQExatMF%2F0GxvZBbCvYJL600UQD0TRIZXOsNVRoaCsKpm2aXJfAVTfAB%2FsBk2GMKmHnb0GOqUBKjX3d5r773vdfZy%2FLc%2FBb3IndAo8NlrhCZgqWvaj3jS8bqNFhuBVGVYz%2BqaKriaMwDXE2d0kZk%2F000%2FghDp%2FOfDTBGmEhBYjguXJSPrEGhjPYUxDz00tfxt3A1BF2nCV5dfy0eonyUB4Lyv96VFvgrRPq0k9EPNrmqou8hAHJnI4UNjnChJgGENLpZBZaUOAEdYVkp8LRN%2Fslc0I9eqvpnsLDhXm&X-Amz-Signature=f7fcc0ce26452cb029d05cf745591046784d3ecf57099cb2a7ce4a3b0f8ece62&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKIZTZZ5%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T131031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHODNjvtLoh7h9O9q67vbm8SbOBHNSDbmB3bOY6xcQ8HAiEAzw5EBduwNd4I%2FMpxsXnOdgjKEzZR7Sqww5pDJL9OuGcqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvEFfORpQky87vcJyrcA0PiyoGXQRw%2Bm6HVfYfboXeJA6mb3V3r70DJb7rEOQVHpfaaLIS%2B%2FDmMMwUOmGluPy%2FDOuNYzW3XrVcoNK8GLwWrE7Z5xbuDP5aEn2BRhaBnT5WyxwOBuYe5lI9c5SSwmOgSMIsnXozCitJRiXElZ%2BuatAzxyzdIz8HrHWH7jaU3d6ilrzUtJXCaTfsOmel%2BDsj%2Bl3kODre4bexP8iHjTNJFyzNpNo4o9VxZ0DNgylX2VnUlyH6OyZcAcJvM0TxtsfIhuEW69fAo75s2uOJ0g%2BCjI3NRjJJhfY0s%2FgXhn3dIwgnzjkn8INVD7tOUFWNq3cpArpmpx3XnV%2FdFe8DPf3lHe8SDzcjev3xM0wz4OiDtuWjJjeUVpOthax9klJm9Az4Cfqg5wOpbP1l5NLoagmAX7yBtZJe3WYUCTUGpH4FDPxaZCnZZEjDj5S7vox%2BLfYkB267pctk63SOJnuWUzwirYNRBo8r%2BfxhRAseLuFNylLgwF%2FdaE%2BlOOVvJiqLvmdqSSulRHKtyaNKDcqWEo5NmZ3GwpN%2FtqF%2FD%2BYj%2FvbWd5B7bR4IM9AAwQyKON1gQExatMF%2F0GxvZBbCvYJL600UQD0TRIZXOsNVRoaCsKpm2aXJfAVTfAB%2FsBk2GMKmHnb0GOqUBKjX3d5r773vdfZy%2FLc%2FBb3IndAo8NlrhCZgqWvaj3jS8bqNFhuBVGVYz%2BqaKriaMwDXE2d0kZk%2F000%2FghDp%2FOfDTBGmEhBYjguXJSPrEGhjPYUxDz00tfxt3A1BF2nCV5dfy0eonyUB4Lyv96VFvgrRPq0k9EPNrmqou8hAHJnI4UNjnChJgGENLpZBZaUOAEdYVkp8LRN%2Fslc0I9eqvpnsLDhXm&X-Amz-Signature=352be5f6e3bd1571387ec0fe405f5f6024d4bf1a59e938b01fb13cfe23f5525a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

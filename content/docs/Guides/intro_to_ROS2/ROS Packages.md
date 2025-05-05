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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM55L6G7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCyj7lq46SR2L11PQUmYiDFUGdfjcV5My9n0wV8HefbwAIhAJQfJQL4%2FBqxdrErWjdkn%2FicqABufBG0WafECrcoKsaZKv8DCCcQABoMNjM3NDIzMTgzODA1Igyg7gYvwf8ib4eNbjUq3APKcwGtY3H078N7cuDllzeYbSuTxMj1K1NnLl06A39IHnu7HPC%2FzRCZpq13RuTtk8g4bBmrN6TVcqQQWpZlwrw0RpICGd%2FlsjnzTHWLVJKo5EiKDgzR6URJQcNU2CRMoFeZU8AL%2BcDUyLFAKuddQ6S8pZOc8rqBYPX2sdl2L%2Bqjfmp0LQdfFV%2F11CCWczVtWW%2BiXWeN19hK6JQc4Su9IGm6ABR5LWEVYQQLWi5dNghTF7owh58SG2PSy1ceh218DQAWcfB8pJv7gRmwwXq%2FjvVnmvncl%2Fte9zQHe6swlZqNrevcgV8aRU12xD1y%2BqAiCsEuSvYTVPZokmG3YXHG51ByKchP%2FvYzojpuPcKHxbKgRxA9GqYpFIwa9meSfMpnYm8aQ4OojIrXD9f70sDRfkLYWBKL5GZy9fp%2BcuvYx8GXmNF%2BcBxuMu3ppl5oQIm4yhJYQw%2BTeDzy3DGTf5Iv2lxhJtMyVVVOxiqxLp5zKbo09%2B5LgN1zXqIQe5M0FKaXDwqgkDui%2BfERbEYgY4vmz7diBkORIwA3%2BVzO6ZrmOKBH0GsqN2XPFuJns09oG9uhg8er%2F7sSxyuhGawKFBD6vQnDWsEtzMO61WlfQM9%2BIbiXVHl7nRKIK8up87sYIjD4muHABjqkAZS0s5O%2BsqDszc6ShZsG1Qsulfnh6lKMaU7IRkkR5O9jYO7FRTW8jo509xIMyCqnIIK4SDT%2FmkaLS3cPXW3hN2iIqOqxwk8L5fsRYp%2BLZD0l8eoHWOUXpCdsL61TZQKOh57f4Po%2FzgmMowXC0asbwmIaUhJ8CNQEwJYxJQyRGAoWUFZXRsypjCb2ilDMSNRUQgogFS%2BGV7iAsi7pmhzGZPgrCBBE&X-Amz-Signature=c366a627b7b50c604e26c1d22c828a2a7bc3d05cdddd24dab7484dee18e6ce63&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM55L6G7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCyj7lq46SR2L11PQUmYiDFUGdfjcV5My9n0wV8HefbwAIhAJQfJQL4%2FBqxdrErWjdkn%2FicqABufBG0WafECrcoKsaZKv8DCCcQABoMNjM3NDIzMTgzODA1Igyg7gYvwf8ib4eNbjUq3APKcwGtY3H078N7cuDllzeYbSuTxMj1K1NnLl06A39IHnu7HPC%2FzRCZpq13RuTtk8g4bBmrN6TVcqQQWpZlwrw0RpICGd%2FlsjnzTHWLVJKo5EiKDgzR6URJQcNU2CRMoFeZU8AL%2BcDUyLFAKuddQ6S8pZOc8rqBYPX2sdl2L%2Bqjfmp0LQdfFV%2F11CCWczVtWW%2BiXWeN19hK6JQc4Su9IGm6ABR5LWEVYQQLWi5dNghTF7owh58SG2PSy1ceh218DQAWcfB8pJv7gRmwwXq%2FjvVnmvncl%2Fte9zQHe6swlZqNrevcgV8aRU12xD1y%2BqAiCsEuSvYTVPZokmG3YXHG51ByKchP%2FvYzojpuPcKHxbKgRxA9GqYpFIwa9meSfMpnYm8aQ4OojIrXD9f70sDRfkLYWBKL5GZy9fp%2BcuvYx8GXmNF%2BcBxuMu3ppl5oQIm4yhJYQw%2BTeDzy3DGTf5Iv2lxhJtMyVVVOxiqxLp5zKbo09%2B5LgN1zXqIQe5M0FKaXDwqgkDui%2BfERbEYgY4vmz7diBkORIwA3%2BVzO6ZrmOKBH0GsqN2XPFuJns09oG9uhg8er%2F7sSxyuhGawKFBD6vQnDWsEtzMO61WlfQM9%2BIbiXVHl7nRKIK8up87sYIjD4muHABjqkAZS0s5O%2BsqDszc6ShZsG1Qsulfnh6lKMaU7IRkkR5O9jYO7FRTW8jo509xIMyCqnIIK4SDT%2FmkaLS3cPXW3hN2iIqOqxwk8L5fsRYp%2BLZD0l8eoHWOUXpCdsL61TZQKOh57f4Po%2FzgmMowXC0asbwmIaUhJ8CNQEwJYxJQyRGAoWUFZXRsypjCb2ilDMSNRUQgogFS%2BGV7iAsi7pmhzGZPgrCBBE&X-Amz-Signature=eed3a6c111210dedcc0b9d21c5ca5912a6fe798d8025020ce137f355baaa3d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM55L6G7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCyj7lq46SR2L11PQUmYiDFUGdfjcV5My9n0wV8HefbwAIhAJQfJQL4%2FBqxdrErWjdkn%2FicqABufBG0WafECrcoKsaZKv8DCCcQABoMNjM3NDIzMTgzODA1Igyg7gYvwf8ib4eNbjUq3APKcwGtY3H078N7cuDllzeYbSuTxMj1K1NnLl06A39IHnu7HPC%2FzRCZpq13RuTtk8g4bBmrN6TVcqQQWpZlwrw0RpICGd%2FlsjnzTHWLVJKo5EiKDgzR6URJQcNU2CRMoFeZU8AL%2BcDUyLFAKuddQ6S8pZOc8rqBYPX2sdl2L%2Bqjfmp0LQdfFV%2F11CCWczVtWW%2BiXWeN19hK6JQc4Su9IGm6ABR5LWEVYQQLWi5dNghTF7owh58SG2PSy1ceh218DQAWcfB8pJv7gRmwwXq%2FjvVnmvncl%2Fte9zQHe6swlZqNrevcgV8aRU12xD1y%2BqAiCsEuSvYTVPZokmG3YXHG51ByKchP%2FvYzojpuPcKHxbKgRxA9GqYpFIwa9meSfMpnYm8aQ4OojIrXD9f70sDRfkLYWBKL5GZy9fp%2BcuvYx8GXmNF%2BcBxuMu3ppl5oQIm4yhJYQw%2BTeDzy3DGTf5Iv2lxhJtMyVVVOxiqxLp5zKbo09%2B5LgN1zXqIQe5M0FKaXDwqgkDui%2BfERbEYgY4vmz7diBkORIwA3%2BVzO6ZrmOKBH0GsqN2XPFuJns09oG9uhg8er%2F7sSxyuhGawKFBD6vQnDWsEtzMO61WlfQM9%2BIbiXVHl7nRKIK8up87sYIjD4muHABjqkAZS0s5O%2BsqDszc6ShZsG1Qsulfnh6lKMaU7IRkkR5O9jYO7FRTW8jo509xIMyCqnIIK4SDT%2FmkaLS3cPXW3hN2iIqOqxwk8L5fsRYp%2BLZD0l8eoHWOUXpCdsL61TZQKOh57f4Po%2FzgmMowXC0asbwmIaUhJ8CNQEwJYxJQyRGAoWUFZXRsypjCb2ilDMSNRUQgogFS%2BGV7iAsi7pmhzGZPgrCBBE&X-Amz-Signature=eeaee0db4a8fb2f886065418efec9be292e9be718a940fcb3b48ae0904915a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM55L6G7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCyj7lq46SR2L11PQUmYiDFUGdfjcV5My9n0wV8HefbwAIhAJQfJQL4%2FBqxdrErWjdkn%2FicqABufBG0WafECrcoKsaZKv8DCCcQABoMNjM3NDIzMTgzODA1Igyg7gYvwf8ib4eNbjUq3APKcwGtY3H078N7cuDllzeYbSuTxMj1K1NnLl06A39IHnu7HPC%2FzRCZpq13RuTtk8g4bBmrN6TVcqQQWpZlwrw0RpICGd%2FlsjnzTHWLVJKo5EiKDgzR6URJQcNU2CRMoFeZU8AL%2BcDUyLFAKuddQ6S8pZOc8rqBYPX2sdl2L%2Bqjfmp0LQdfFV%2F11CCWczVtWW%2BiXWeN19hK6JQc4Su9IGm6ABR5LWEVYQQLWi5dNghTF7owh58SG2PSy1ceh218DQAWcfB8pJv7gRmwwXq%2FjvVnmvncl%2Fte9zQHe6swlZqNrevcgV8aRU12xD1y%2BqAiCsEuSvYTVPZokmG3YXHG51ByKchP%2FvYzojpuPcKHxbKgRxA9GqYpFIwa9meSfMpnYm8aQ4OojIrXD9f70sDRfkLYWBKL5GZy9fp%2BcuvYx8GXmNF%2BcBxuMu3ppl5oQIm4yhJYQw%2BTeDzy3DGTf5Iv2lxhJtMyVVVOxiqxLp5zKbo09%2B5LgN1zXqIQe5M0FKaXDwqgkDui%2BfERbEYgY4vmz7diBkORIwA3%2BVzO6ZrmOKBH0GsqN2XPFuJns09oG9uhg8er%2F7sSxyuhGawKFBD6vQnDWsEtzMO61WlfQM9%2BIbiXVHl7nRKIK8up87sYIjD4muHABjqkAZS0s5O%2BsqDszc6ShZsG1Qsulfnh6lKMaU7IRkkR5O9jYO7FRTW8jo509xIMyCqnIIK4SDT%2FmkaLS3cPXW3hN2iIqOqxwk8L5fsRYp%2BLZD0l8eoHWOUXpCdsL61TZQKOh57f4Po%2FzgmMowXC0asbwmIaUhJ8CNQEwJYxJQyRGAoWUFZXRsypjCb2ilDMSNRUQgogFS%2BGV7iAsi7pmhzGZPgrCBBE&X-Amz-Signature=ed8fa1ed6b038f0802e5536dd4ba398da1c366fc633fed32acaa6b776e55d506&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM55L6G7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCyj7lq46SR2L11PQUmYiDFUGdfjcV5My9n0wV8HefbwAIhAJQfJQL4%2FBqxdrErWjdkn%2FicqABufBG0WafECrcoKsaZKv8DCCcQABoMNjM3NDIzMTgzODA1Igyg7gYvwf8ib4eNbjUq3APKcwGtY3H078N7cuDllzeYbSuTxMj1K1NnLl06A39IHnu7HPC%2FzRCZpq13RuTtk8g4bBmrN6TVcqQQWpZlwrw0RpICGd%2FlsjnzTHWLVJKo5EiKDgzR6URJQcNU2CRMoFeZU8AL%2BcDUyLFAKuddQ6S8pZOc8rqBYPX2sdl2L%2Bqjfmp0LQdfFV%2F11CCWczVtWW%2BiXWeN19hK6JQc4Su9IGm6ABR5LWEVYQQLWi5dNghTF7owh58SG2PSy1ceh218DQAWcfB8pJv7gRmwwXq%2FjvVnmvncl%2Fte9zQHe6swlZqNrevcgV8aRU12xD1y%2BqAiCsEuSvYTVPZokmG3YXHG51ByKchP%2FvYzojpuPcKHxbKgRxA9GqYpFIwa9meSfMpnYm8aQ4OojIrXD9f70sDRfkLYWBKL5GZy9fp%2BcuvYx8GXmNF%2BcBxuMu3ppl5oQIm4yhJYQw%2BTeDzy3DGTf5Iv2lxhJtMyVVVOxiqxLp5zKbo09%2B5LgN1zXqIQe5M0FKaXDwqgkDui%2BfERbEYgY4vmz7diBkORIwA3%2BVzO6ZrmOKBH0GsqN2XPFuJns09oG9uhg8er%2F7sSxyuhGawKFBD6vQnDWsEtzMO61WlfQM9%2BIbiXVHl7nRKIK8up87sYIjD4muHABjqkAZS0s5O%2BsqDszc6ShZsG1Qsulfnh6lKMaU7IRkkR5O9jYO7FRTW8jo509xIMyCqnIIK4SDT%2FmkaLS3cPXW3hN2iIqOqxwk8L5fsRYp%2BLZD0l8eoHWOUXpCdsL61TZQKOh57f4Po%2FzgmMowXC0asbwmIaUhJ8CNQEwJYxJQyRGAoWUFZXRsypjCb2ilDMSNRUQgogFS%2BGV7iAsi7pmhzGZPgrCBBE&X-Amz-Signature=d2aea3ce09a13ece3ae53f839c00442d8d2a5b2901e33eee9b7b4f3dfc237d37&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM55L6G7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCyj7lq46SR2L11PQUmYiDFUGdfjcV5My9n0wV8HefbwAIhAJQfJQL4%2FBqxdrErWjdkn%2FicqABufBG0WafECrcoKsaZKv8DCCcQABoMNjM3NDIzMTgzODA1Igyg7gYvwf8ib4eNbjUq3APKcwGtY3H078N7cuDllzeYbSuTxMj1K1NnLl06A39IHnu7HPC%2FzRCZpq13RuTtk8g4bBmrN6TVcqQQWpZlwrw0RpICGd%2FlsjnzTHWLVJKo5EiKDgzR6URJQcNU2CRMoFeZU8AL%2BcDUyLFAKuddQ6S8pZOc8rqBYPX2sdl2L%2Bqjfmp0LQdfFV%2F11CCWczVtWW%2BiXWeN19hK6JQc4Su9IGm6ABR5LWEVYQQLWi5dNghTF7owh58SG2PSy1ceh218DQAWcfB8pJv7gRmwwXq%2FjvVnmvncl%2Fte9zQHe6swlZqNrevcgV8aRU12xD1y%2BqAiCsEuSvYTVPZokmG3YXHG51ByKchP%2FvYzojpuPcKHxbKgRxA9GqYpFIwa9meSfMpnYm8aQ4OojIrXD9f70sDRfkLYWBKL5GZy9fp%2BcuvYx8GXmNF%2BcBxuMu3ppl5oQIm4yhJYQw%2BTeDzy3DGTf5Iv2lxhJtMyVVVOxiqxLp5zKbo09%2B5LgN1zXqIQe5M0FKaXDwqgkDui%2BfERbEYgY4vmz7diBkORIwA3%2BVzO6ZrmOKBH0GsqN2XPFuJns09oG9uhg8er%2F7sSxyuhGawKFBD6vQnDWsEtzMO61WlfQM9%2BIbiXVHl7nRKIK8up87sYIjD4muHABjqkAZS0s5O%2BsqDszc6ShZsG1Qsulfnh6lKMaU7IRkkR5O9jYO7FRTW8jo509xIMyCqnIIK4SDT%2FmkaLS3cPXW3hN2iIqOqxwk8L5fsRYp%2BLZD0l8eoHWOUXpCdsL61TZQKOh57f4Po%2FzgmMowXC0asbwmIaUhJ8CNQEwJYxJQyRGAoWUFZXRsypjCb2ilDMSNRUQgogFS%2BGV7iAsi7pmhzGZPgrCBBE&X-Amz-Signature=e8339da7388fc73dc5bc3a5f941f9b835d2ae93ddd3c764ea0c24f7a8bd57379&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM55L6G7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T061334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCyj7lq46SR2L11PQUmYiDFUGdfjcV5My9n0wV8HefbwAIhAJQfJQL4%2FBqxdrErWjdkn%2FicqABufBG0WafECrcoKsaZKv8DCCcQABoMNjM3NDIzMTgzODA1Igyg7gYvwf8ib4eNbjUq3APKcwGtY3H078N7cuDllzeYbSuTxMj1K1NnLl06A39IHnu7HPC%2FzRCZpq13RuTtk8g4bBmrN6TVcqQQWpZlwrw0RpICGd%2FlsjnzTHWLVJKo5EiKDgzR6URJQcNU2CRMoFeZU8AL%2BcDUyLFAKuddQ6S8pZOc8rqBYPX2sdl2L%2Bqjfmp0LQdfFV%2F11CCWczVtWW%2BiXWeN19hK6JQc4Su9IGm6ABR5LWEVYQQLWi5dNghTF7owh58SG2PSy1ceh218DQAWcfB8pJv7gRmwwXq%2FjvVnmvncl%2Fte9zQHe6swlZqNrevcgV8aRU12xD1y%2BqAiCsEuSvYTVPZokmG3YXHG51ByKchP%2FvYzojpuPcKHxbKgRxA9GqYpFIwa9meSfMpnYm8aQ4OojIrXD9f70sDRfkLYWBKL5GZy9fp%2BcuvYx8GXmNF%2BcBxuMu3ppl5oQIm4yhJYQw%2BTeDzy3DGTf5Iv2lxhJtMyVVVOxiqxLp5zKbo09%2B5LgN1zXqIQe5M0FKaXDwqgkDui%2BfERbEYgY4vmz7diBkORIwA3%2BVzO6ZrmOKBH0GsqN2XPFuJns09oG9uhg8er%2F7sSxyuhGawKFBD6vQnDWsEtzMO61WlfQM9%2BIbiXVHl7nRKIK8up87sYIjD4muHABjqkAZS0s5O%2BsqDszc6ShZsG1Qsulfnh6lKMaU7IRkkR5O9jYO7FRTW8jo509xIMyCqnIIK4SDT%2FmkaLS3cPXW3hN2iIqOqxwk8L5fsRYp%2BLZD0l8eoHWOUXpCdsL61TZQKOh57f4Po%2FzgmMowXC0asbwmIaUhJ8CNQEwJYxJQyRGAoWUFZXRsypjCb2ilDMSNRUQgogFS%2BGV7iAsi7pmhzGZPgrCBBE&X-Amz-Signature=f3aa623f87c895f0dc781b42f07bbddabd50b6af19859deca3cd25d1c0ba6ea6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

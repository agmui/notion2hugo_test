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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NTTTRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC43ai3raEraiv9oBNhQvDJawNe1R%2ByFKEm2is5vl0XFwIhAPHk37w%2F5jdrb33sGfx5aVLPx7HEbxzClwHsoqcSJ573KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBqNbDWPDYyVBlp4q3APxLcW4q7pb4cROkG%2BTWqHhr%2Fipo3tnSsZ7MC69ZdsHSqHTPORsQujqXoSZFYyFQr4p2h4iqicevGddcGSW8M6EhYRQdoawBLbbT0BuZCKaHR3J3FVuaDEErH9WdJ4aP6icsUk%2BALlJa6txtT2RbL4lh0ma%2F61qkJNDwfkDghzbj3K4Vb3nVn1PjbRP2VYtoWI2ZATw3IWmbgJitXjnPPrtCvJPMRlkGHVDc4wULSN5QxB6%2FuUCwoHnygNf74IgL6G9WUoC8d2XxWU%2BxoyVd5FyNATUpgE%2BFCBLQjxJXuWH73rFTank72qChn%2B1GC%2F8Ic3cedMuEHm1ubJfENX%2BcaYcxEvoAt8u%2FzKIptKn48Nz9T%2FIMVxrNjmtzJCQFokD%2BVmVwQC6bP1HxzCWF1HNh3CIlS%2Fg%2BcywbmP%2BympekdHE%2FeUeIk0hkmLMMn%2Bvm0Nk0ppPRF17E3hwrudRVRvlr3VfAmMGqEyqZgAeZ%2F3JWadj6fqPFaKkcnJwa8GYMtX1Ix%2F7XciviY%2FuuhQunpB3owN55SwqyhSItOg05Sd1xAX%2FVzjj52w5it%2BagY8vDf07t9ww5FODJHcBYjQjodp3zBnnFFJgmOTmErLlGqC5j%2B2Vp9vTuBxzMgFymUEolzCFyt%2FCBjqkARZarebxMkjNcgC74GQnEDPdBpeuacpT71Fx3dHEU0Aeq8KqHDQITAaA%2BBhBbNzNaKUBEhO8lktMBZwoGyg83ZsWmfmtR0JLrdU73xqLNmilH%2FiHDuFkcHCGsFJ1W3iuJNVHM7MWgS92N1qUNfgTHkPR67N1QTE5df51lRlTYgwMI9K2Rl1mc8UK65joClJfIgA6%2BA0ecoNSnu%2FqIGr3Qv3dGp15&X-Amz-Signature=0b1519276694d4cdaa7944cbbef5631233cd60b004c0c5a23ceae2a93e7f7a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NTTTRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC43ai3raEraiv9oBNhQvDJawNe1R%2ByFKEm2is5vl0XFwIhAPHk37w%2F5jdrb33sGfx5aVLPx7HEbxzClwHsoqcSJ573KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBqNbDWPDYyVBlp4q3APxLcW4q7pb4cROkG%2BTWqHhr%2Fipo3tnSsZ7MC69ZdsHSqHTPORsQujqXoSZFYyFQr4p2h4iqicevGddcGSW8M6EhYRQdoawBLbbT0BuZCKaHR3J3FVuaDEErH9WdJ4aP6icsUk%2BALlJa6txtT2RbL4lh0ma%2F61qkJNDwfkDghzbj3K4Vb3nVn1PjbRP2VYtoWI2ZATw3IWmbgJitXjnPPrtCvJPMRlkGHVDc4wULSN5QxB6%2FuUCwoHnygNf74IgL6G9WUoC8d2XxWU%2BxoyVd5FyNATUpgE%2BFCBLQjxJXuWH73rFTank72qChn%2B1GC%2F8Ic3cedMuEHm1ubJfENX%2BcaYcxEvoAt8u%2FzKIptKn48Nz9T%2FIMVxrNjmtzJCQFokD%2BVmVwQC6bP1HxzCWF1HNh3CIlS%2Fg%2BcywbmP%2BympekdHE%2FeUeIk0hkmLMMn%2Bvm0Nk0ppPRF17E3hwrudRVRvlr3VfAmMGqEyqZgAeZ%2F3JWadj6fqPFaKkcnJwa8GYMtX1Ix%2F7XciviY%2FuuhQunpB3owN55SwqyhSItOg05Sd1xAX%2FVzjj52w5it%2BagY8vDf07t9ww5FODJHcBYjQjodp3zBnnFFJgmOTmErLlGqC5j%2B2Vp9vTuBxzMgFymUEolzCFyt%2FCBjqkARZarebxMkjNcgC74GQnEDPdBpeuacpT71Fx3dHEU0Aeq8KqHDQITAaA%2BBhBbNzNaKUBEhO8lktMBZwoGyg83ZsWmfmtR0JLrdU73xqLNmilH%2FiHDuFkcHCGsFJ1W3iuJNVHM7MWgS92N1qUNfgTHkPR67N1QTE5df51lRlTYgwMI9K2Rl1mc8UK65joClJfIgA6%2BA0ecoNSnu%2FqIGr3Qv3dGp15&X-Amz-Signature=ba4d009261c5a4ba1dce76766679555d2e8a3bc368fff1404ce6879ba477d6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NTTTRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC43ai3raEraiv9oBNhQvDJawNe1R%2ByFKEm2is5vl0XFwIhAPHk37w%2F5jdrb33sGfx5aVLPx7HEbxzClwHsoqcSJ573KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBqNbDWPDYyVBlp4q3APxLcW4q7pb4cROkG%2BTWqHhr%2Fipo3tnSsZ7MC69ZdsHSqHTPORsQujqXoSZFYyFQr4p2h4iqicevGddcGSW8M6EhYRQdoawBLbbT0BuZCKaHR3J3FVuaDEErH9WdJ4aP6icsUk%2BALlJa6txtT2RbL4lh0ma%2F61qkJNDwfkDghzbj3K4Vb3nVn1PjbRP2VYtoWI2ZATw3IWmbgJitXjnPPrtCvJPMRlkGHVDc4wULSN5QxB6%2FuUCwoHnygNf74IgL6G9WUoC8d2XxWU%2BxoyVd5FyNATUpgE%2BFCBLQjxJXuWH73rFTank72qChn%2B1GC%2F8Ic3cedMuEHm1ubJfENX%2BcaYcxEvoAt8u%2FzKIptKn48Nz9T%2FIMVxrNjmtzJCQFokD%2BVmVwQC6bP1HxzCWF1HNh3CIlS%2Fg%2BcywbmP%2BympekdHE%2FeUeIk0hkmLMMn%2Bvm0Nk0ppPRF17E3hwrudRVRvlr3VfAmMGqEyqZgAeZ%2F3JWadj6fqPFaKkcnJwa8GYMtX1Ix%2F7XciviY%2FuuhQunpB3owN55SwqyhSItOg05Sd1xAX%2FVzjj52w5it%2BagY8vDf07t9ww5FODJHcBYjQjodp3zBnnFFJgmOTmErLlGqC5j%2B2Vp9vTuBxzMgFymUEolzCFyt%2FCBjqkARZarebxMkjNcgC74GQnEDPdBpeuacpT71Fx3dHEU0Aeq8KqHDQITAaA%2BBhBbNzNaKUBEhO8lktMBZwoGyg83ZsWmfmtR0JLrdU73xqLNmilH%2FiHDuFkcHCGsFJ1W3iuJNVHM7MWgS92N1qUNfgTHkPR67N1QTE5df51lRlTYgwMI9K2Rl1mc8UK65joClJfIgA6%2BA0ecoNSnu%2FqIGr3Qv3dGp15&X-Amz-Signature=f2a9ab2aa1beec644a8915b13ee43f000dfe78bdff793b2b48d8a30c498031e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NTTTRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC43ai3raEraiv9oBNhQvDJawNe1R%2ByFKEm2is5vl0XFwIhAPHk37w%2F5jdrb33sGfx5aVLPx7HEbxzClwHsoqcSJ573KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBqNbDWPDYyVBlp4q3APxLcW4q7pb4cROkG%2BTWqHhr%2Fipo3tnSsZ7MC69ZdsHSqHTPORsQujqXoSZFYyFQr4p2h4iqicevGddcGSW8M6EhYRQdoawBLbbT0BuZCKaHR3J3FVuaDEErH9WdJ4aP6icsUk%2BALlJa6txtT2RbL4lh0ma%2F61qkJNDwfkDghzbj3K4Vb3nVn1PjbRP2VYtoWI2ZATw3IWmbgJitXjnPPrtCvJPMRlkGHVDc4wULSN5QxB6%2FuUCwoHnygNf74IgL6G9WUoC8d2XxWU%2BxoyVd5FyNATUpgE%2BFCBLQjxJXuWH73rFTank72qChn%2B1GC%2F8Ic3cedMuEHm1ubJfENX%2BcaYcxEvoAt8u%2FzKIptKn48Nz9T%2FIMVxrNjmtzJCQFokD%2BVmVwQC6bP1HxzCWF1HNh3CIlS%2Fg%2BcywbmP%2BympekdHE%2FeUeIk0hkmLMMn%2Bvm0Nk0ppPRF17E3hwrudRVRvlr3VfAmMGqEyqZgAeZ%2F3JWadj6fqPFaKkcnJwa8GYMtX1Ix%2F7XciviY%2FuuhQunpB3owN55SwqyhSItOg05Sd1xAX%2FVzjj52w5it%2BagY8vDf07t9ww5FODJHcBYjQjodp3zBnnFFJgmOTmErLlGqC5j%2B2Vp9vTuBxzMgFymUEolzCFyt%2FCBjqkARZarebxMkjNcgC74GQnEDPdBpeuacpT71Fx3dHEU0Aeq8KqHDQITAaA%2BBhBbNzNaKUBEhO8lktMBZwoGyg83ZsWmfmtR0JLrdU73xqLNmilH%2FiHDuFkcHCGsFJ1W3iuJNVHM7MWgS92N1qUNfgTHkPR67N1QTE5df51lRlTYgwMI9K2Rl1mc8UK65joClJfIgA6%2BA0ecoNSnu%2FqIGr3Qv3dGp15&X-Amz-Signature=f9603f5aba60cb7b626453610aaa2da622d887e6d7cbb68eff40515adcb5b74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NTTTRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC43ai3raEraiv9oBNhQvDJawNe1R%2ByFKEm2is5vl0XFwIhAPHk37w%2F5jdrb33sGfx5aVLPx7HEbxzClwHsoqcSJ573KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBqNbDWPDYyVBlp4q3APxLcW4q7pb4cROkG%2BTWqHhr%2Fipo3tnSsZ7MC69ZdsHSqHTPORsQujqXoSZFYyFQr4p2h4iqicevGddcGSW8M6EhYRQdoawBLbbT0BuZCKaHR3J3FVuaDEErH9WdJ4aP6icsUk%2BALlJa6txtT2RbL4lh0ma%2F61qkJNDwfkDghzbj3K4Vb3nVn1PjbRP2VYtoWI2ZATw3IWmbgJitXjnPPrtCvJPMRlkGHVDc4wULSN5QxB6%2FuUCwoHnygNf74IgL6G9WUoC8d2XxWU%2BxoyVd5FyNATUpgE%2BFCBLQjxJXuWH73rFTank72qChn%2B1GC%2F8Ic3cedMuEHm1ubJfENX%2BcaYcxEvoAt8u%2FzKIptKn48Nz9T%2FIMVxrNjmtzJCQFokD%2BVmVwQC6bP1HxzCWF1HNh3CIlS%2Fg%2BcywbmP%2BympekdHE%2FeUeIk0hkmLMMn%2Bvm0Nk0ppPRF17E3hwrudRVRvlr3VfAmMGqEyqZgAeZ%2F3JWadj6fqPFaKkcnJwa8GYMtX1Ix%2F7XciviY%2FuuhQunpB3owN55SwqyhSItOg05Sd1xAX%2FVzjj52w5it%2BagY8vDf07t9ww5FODJHcBYjQjodp3zBnnFFJgmOTmErLlGqC5j%2B2Vp9vTuBxzMgFymUEolzCFyt%2FCBjqkARZarebxMkjNcgC74GQnEDPdBpeuacpT71Fx3dHEU0Aeq8KqHDQITAaA%2BBhBbNzNaKUBEhO8lktMBZwoGyg83ZsWmfmtR0JLrdU73xqLNmilH%2FiHDuFkcHCGsFJ1W3iuJNVHM7MWgS92N1qUNfgTHkPR67N1QTE5df51lRlTYgwMI9K2Rl1mc8UK65joClJfIgA6%2BA0ecoNSnu%2FqIGr3Qv3dGp15&X-Amz-Signature=5446e6c6d455f06c2af2658a6f0721f0dfaf6a004ec7e9dfe1bef2482c1d69c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NTTTRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC43ai3raEraiv9oBNhQvDJawNe1R%2ByFKEm2is5vl0XFwIhAPHk37w%2F5jdrb33sGfx5aVLPx7HEbxzClwHsoqcSJ573KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBqNbDWPDYyVBlp4q3APxLcW4q7pb4cROkG%2BTWqHhr%2Fipo3tnSsZ7MC69ZdsHSqHTPORsQujqXoSZFYyFQr4p2h4iqicevGddcGSW8M6EhYRQdoawBLbbT0BuZCKaHR3J3FVuaDEErH9WdJ4aP6icsUk%2BALlJa6txtT2RbL4lh0ma%2F61qkJNDwfkDghzbj3K4Vb3nVn1PjbRP2VYtoWI2ZATw3IWmbgJitXjnPPrtCvJPMRlkGHVDc4wULSN5QxB6%2FuUCwoHnygNf74IgL6G9WUoC8d2XxWU%2BxoyVd5FyNATUpgE%2BFCBLQjxJXuWH73rFTank72qChn%2B1GC%2F8Ic3cedMuEHm1ubJfENX%2BcaYcxEvoAt8u%2FzKIptKn48Nz9T%2FIMVxrNjmtzJCQFokD%2BVmVwQC6bP1HxzCWF1HNh3CIlS%2Fg%2BcywbmP%2BympekdHE%2FeUeIk0hkmLMMn%2Bvm0Nk0ppPRF17E3hwrudRVRvlr3VfAmMGqEyqZgAeZ%2F3JWadj6fqPFaKkcnJwa8GYMtX1Ix%2F7XciviY%2FuuhQunpB3owN55SwqyhSItOg05Sd1xAX%2FVzjj52w5it%2BagY8vDf07t9ww5FODJHcBYjQjodp3zBnnFFJgmOTmErLlGqC5j%2B2Vp9vTuBxzMgFymUEolzCFyt%2FCBjqkARZarebxMkjNcgC74GQnEDPdBpeuacpT71Fx3dHEU0Aeq8KqHDQITAaA%2BBhBbNzNaKUBEhO8lktMBZwoGyg83ZsWmfmtR0JLrdU73xqLNmilH%2FiHDuFkcHCGsFJ1W3iuJNVHM7MWgS92N1qUNfgTHkPR67N1QTE5df51lRlTYgwMI9K2Rl1mc8UK65joClJfIgA6%2BA0ecoNSnu%2FqIGr3Qv3dGp15&X-Amz-Signature=3ca086ccb6e050cc52a5a3cdab7af3d184f2b7a1ad0f929230702a130f0e9cff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NTTTRT%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQC43ai3raEraiv9oBNhQvDJawNe1R%2ByFKEm2is5vl0XFwIhAPHk37w%2F5jdrb33sGfx5aVLPx7HEbxzClwHsoqcSJ573KogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQBqNbDWPDYyVBlp4q3APxLcW4q7pb4cROkG%2BTWqHhr%2Fipo3tnSsZ7MC69ZdsHSqHTPORsQujqXoSZFYyFQr4p2h4iqicevGddcGSW8M6EhYRQdoawBLbbT0BuZCKaHR3J3FVuaDEErH9WdJ4aP6icsUk%2BALlJa6txtT2RbL4lh0ma%2F61qkJNDwfkDghzbj3K4Vb3nVn1PjbRP2VYtoWI2ZATw3IWmbgJitXjnPPrtCvJPMRlkGHVDc4wULSN5QxB6%2FuUCwoHnygNf74IgL6G9WUoC8d2XxWU%2BxoyVd5FyNATUpgE%2BFCBLQjxJXuWH73rFTank72qChn%2B1GC%2F8Ic3cedMuEHm1ubJfENX%2BcaYcxEvoAt8u%2FzKIptKn48Nz9T%2FIMVxrNjmtzJCQFokD%2BVmVwQC6bP1HxzCWF1HNh3CIlS%2Fg%2BcywbmP%2BympekdHE%2FeUeIk0hkmLMMn%2Bvm0Nk0ppPRF17E3hwrudRVRvlr3VfAmMGqEyqZgAeZ%2F3JWadj6fqPFaKkcnJwa8GYMtX1Ix%2F7XciviY%2FuuhQunpB3owN55SwqyhSItOg05Sd1xAX%2FVzjj52w5it%2BagY8vDf07t9ww5FODJHcBYjQjodp3zBnnFFJgmOTmErLlGqC5j%2B2Vp9vTuBxzMgFymUEolzCFyt%2FCBjqkARZarebxMkjNcgC74GQnEDPdBpeuacpT71Fx3dHEU0Aeq8KqHDQITAaA%2BBhBbNzNaKUBEhO8lktMBZwoGyg83ZsWmfmtR0JLrdU73xqLNmilH%2FiHDuFkcHCGsFJ1W3iuJNVHM7MWgS92N1qUNfgTHkPR67N1QTE5df51lRlTYgwMI9K2Rl1mc8UK65joClJfIgA6%2BA0ecoNSnu%2FqIGr3Qv3dGp15&X-Amz-Signature=b529b66191760390d3c5292d713e0857676c62c25cea6833a4d72cbaf95f457d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

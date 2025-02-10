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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXHWTI4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcZ0d%2FofTcherWZj9dtRNaVosWLM6DyaR4V1zt8lkcOAiArhrB2KRWItGuIel1FUThMOv9867oXJqv%2FIlsJlDw3myqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwUo7ajz0E44fTYWzKtwDllgtgD4feGX8NzcjnWFzdgQYsKZJ7dYiCENQaF%2FnGYiAdhyFEteR%2FwZ6oOpxnisBti6R55U%2BwLrrvuUmT9Rp4aYnuCiXJBIYTFISihUvo8Xl1hI4jQZKlhIMcODJ8ud5j0zG09CNtGRji%2FtMA2ukVPc1kEf%2FboceZdKAfAzWJ2Ry%2FdCdO7JvH7iQVuXNmEnNNLqltJZuyxG4LvVrkPpNQbUCvSS%2FYjH%2FEYUHx8NrcQKyfSlknBTa7Dcei3gEakPzb2Y6aSceiYuCY4s4OIlddv1SLIyOAyw%2BW0FwNDWKC3451V5RLW2FdTsIDuF%2FlWrBB8uteEzKIHe3SScRv5EuwYjGXVoP%2FVt6LcEmBu%2F%2FXZI2brkQgNu%2FX%2FVzYGrfALe66irpHX6oLZTejObfKUyJnRNLLluEN%2FyPblXXBq2kGuCc9cwObGeZMPlDGefItMJ%2BJRriKbGDfMuK06gpmMGHG0b5ue2COzhmdjB4kgLLBU%2BzH8DO0REEG19j32AH3OdMtfMWP55wavYmk8c9VjxiSxcnXzIXTDAL36giajFiRwlrMomKWgzz%2Br%2FC7yNvBV23RrRUJTngJT7eOwBMms%2BMriz%2FPaqx7mvAYvhRAT0ebwAuU1wSn%2BiKJVyQHoIw0vmlvQY6pgEEOO7IeTnNbd11z%2FB6vH4hzFK6z63L4Xh2%2FPrdiYc57mZgAlsTjD8aBuKl0rRyMqyomGCLIEAvEcpZjp0JqWzvnTSGkEGcwifry4E4z8AckJVTEEUufglIsdLJPiHyWDux5c9Lv3jztit4ay8UAD0sK8K6ZnbBRL55BmFoMDdorMuRYyRg341WhBunjIk7ujXMmpRYrv%2FBunDYzyatvFOTAcuPz%2F%2Bi&X-Amz-Signature=284b8a2afd829ad59bb0ed225e1c8eaadc8cd3ed5ffafed0c3df63b756559df5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXHWTI4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcZ0d%2FofTcherWZj9dtRNaVosWLM6DyaR4V1zt8lkcOAiArhrB2KRWItGuIel1FUThMOv9867oXJqv%2FIlsJlDw3myqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwUo7ajz0E44fTYWzKtwDllgtgD4feGX8NzcjnWFzdgQYsKZJ7dYiCENQaF%2FnGYiAdhyFEteR%2FwZ6oOpxnisBti6R55U%2BwLrrvuUmT9Rp4aYnuCiXJBIYTFISihUvo8Xl1hI4jQZKlhIMcODJ8ud5j0zG09CNtGRji%2FtMA2ukVPc1kEf%2FboceZdKAfAzWJ2Ry%2FdCdO7JvH7iQVuXNmEnNNLqltJZuyxG4LvVrkPpNQbUCvSS%2FYjH%2FEYUHx8NrcQKyfSlknBTa7Dcei3gEakPzb2Y6aSceiYuCY4s4OIlddv1SLIyOAyw%2BW0FwNDWKC3451V5RLW2FdTsIDuF%2FlWrBB8uteEzKIHe3SScRv5EuwYjGXVoP%2FVt6LcEmBu%2F%2FXZI2brkQgNu%2FX%2FVzYGrfALe66irpHX6oLZTejObfKUyJnRNLLluEN%2FyPblXXBq2kGuCc9cwObGeZMPlDGefItMJ%2BJRriKbGDfMuK06gpmMGHG0b5ue2COzhmdjB4kgLLBU%2BzH8DO0REEG19j32AH3OdMtfMWP55wavYmk8c9VjxiSxcnXzIXTDAL36giajFiRwlrMomKWgzz%2Br%2FC7yNvBV23RrRUJTngJT7eOwBMms%2BMriz%2FPaqx7mvAYvhRAT0ebwAuU1wSn%2BiKJVyQHoIw0vmlvQY6pgEEOO7IeTnNbd11z%2FB6vH4hzFK6z63L4Xh2%2FPrdiYc57mZgAlsTjD8aBuKl0rRyMqyomGCLIEAvEcpZjp0JqWzvnTSGkEGcwifry4E4z8AckJVTEEUufglIsdLJPiHyWDux5c9Lv3jztit4ay8UAD0sK8K6ZnbBRL55BmFoMDdorMuRYyRg341WhBunjIk7ujXMmpRYrv%2FBunDYzyatvFOTAcuPz%2F%2Bi&X-Amz-Signature=38a39e70043cdba886bbed74aabd6181bee0aed82e07e943284f28c9a73fd5d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXHWTI4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcZ0d%2FofTcherWZj9dtRNaVosWLM6DyaR4V1zt8lkcOAiArhrB2KRWItGuIel1FUThMOv9867oXJqv%2FIlsJlDw3myqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwUo7ajz0E44fTYWzKtwDllgtgD4feGX8NzcjnWFzdgQYsKZJ7dYiCENQaF%2FnGYiAdhyFEteR%2FwZ6oOpxnisBti6R55U%2BwLrrvuUmT9Rp4aYnuCiXJBIYTFISihUvo8Xl1hI4jQZKlhIMcODJ8ud5j0zG09CNtGRji%2FtMA2ukVPc1kEf%2FboceZdKAfAzWJ2Ry%2FdCdO7JvH7iQVuXNmEnNNLqltJZuyxG4LvVrkPpNQbUCvSS%2FYjH%2FEYUHx8NrcQKyfSlknBTa7Dcei3gEakPzb2Y6aSceiYuCY4s4OIlddv1SLIyOAyw%2BW0FwNDWKC3451V5RLW2FdTsIDuF%2FlWrBB8uteEzKIHe3SScRv5EuwYjGXVoP%2FVt6LcEmBu%2F%2FXZI2brkQgNu%2FX%2FVzYGrfALe66irpHX6oLZTejObfKUyJnRNLLluEN%2FyPblXXBq2kGuCc9cwObGeZMPlDGefItMJ%2BJRriKbGDfMuK06gpmMGHG0b5ue2COzhmdjB4kgLLBU%2BzH8DO0REEG19j32AH3OdMtfMWP55wavYmk8c9VjxiSxcnXzIXTDAL36giajFiRwlrMomKWgzz%2Br%2FC7yNvBV23RrRUJTngJT7eOwBMms%2BMriz%2FPaqx7mvAYvhRAT0ebwAuU1wSn%2BiKJVyQHoIw0vmlvQY6pgEEOO7IeTnNbd11z%2FB6vH4hzFK6z63L4Xh2%2FPrdiYc57mZgAlsTjD8aBuKl0rRyMqyomGCLIEAvEcpZjp0JqWzvnTSGkEGcwifry4E4z8AckJVTEEUufglIsdLJPiHyWDux5c9Lv3jztit4ay8UAD0sK8K6ZnbBRL55BmFoMDdorMuRYyRg341WhBunjIk7ujXMmpRYrv%2FBunDYzyatvFOTAcuPz%2F%2Bi&X-Amz-Signature=06243964a20d1cf05a45770f68e0d512ed5decaf423a504e55c936892ff42231&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXHWTI4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcZ0d%2FofTcherWZj9dtRNaVosWLM6DyaR4V1zt8lkcOAiArhrB2KRWItGuIel1FUThMOv9867oXJqv%2FIlsJlDw3myqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwUo7ajz0E44fTYWzKtwDllgtgD4feGX8NzcjnWFzdgQYsKZJ7dYiCENQaF%2FnGYiAdhyFEteR%2FwZ6oOpxnisBti6R55U%2BwLrrvuUmT9Rp4aYnuCiXJBIYTFISihUvo8Xl1hI4jQZKlhIMcODJ8ud5j0zG09CNtGRji%2FtMA2ukVPc1kEf%2FboceZdKAfAzWJ2Ry%2FdCdO7JvH7iQVuXNmEnNNLqltJZuyxG4LvVrkPpNQbUCvSS%2FYjH%2FEYUHx8NrcQKyfSlknBTa7Dcei3gEakPzb2Y6aSceiYuCY4s4OIlddv1SLIyOAyw%2BW0FwNDWKC3451V5RLW2FdTsIDuF%2FlWrBB8uteEzKIHe3SScRv5EuwYjGXVoP%2FVt6LcEmBu%2F%2FXZI2brkQgNu%2FX%2FVzYGrfALe66irpHX6oLZTejObfKUyJnRNLLluEN%2FyPblXXBq2kGuCc9cwObGeZMPlDGefItMJ%2BJRriKbGDfMuK06gpmMGHG0b5ue2COzhmdjB4kgLLBU%2BzH8DO0REEG19j32AH3OdMtfMWP55wavYmk8c9VjxiSxcnXzIXTDAL36giajFiRwlrMomKWgzz%2Br%2FC7yNvBV23RrRUJTngJT7eOwBMms%2BMriz%2FPaqx7mvAYvhRAT0ebwAuU1wSn%2BiKJVyQHoIw0vmlvQY6pgEEOO7IeTnNbd11z%2FB6vH4hzFK6z63L4Xh2%2FPrdiYc57mZgAlsTjD8aBuKl0rRyMqyomGCLIEAvEcpZjp0JqWzvnTSGkEGcwifry4E4z8AckJVTEEUufglIsdLJPiHyWDux5c9Lv3jztit4ay8UAD0sK8K6ZnbBRL55BmFoMDdorMuRYyRg341WhBunjIk7ujXMmpRYrv%2FBunDYzyatvFOTAcuPz%2F%2Bi&X-Amz-Signature=62020b9c7d6f7ffd7019bc51a22cd3a5ea7bb6891d248d76562ce4155941cb80&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXHWTI4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcZ0d%2FofTcherWZj9dtRNaVosWLM6DyaR4V1zt8lkcOAiArhrB2KRWItGuIel1FUThMOv9867oXJqv%2FIlsJlDw3myqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwUo7ajz0E44fTYWzKtwDllgtgD4feGX8NzcjnWFzdgQYsKZJ7dYiCENQaF%2FnGYiAdhyFEteR%2FwZ6oOpxnisBti6R55U%2BwLrrvuUmT9Rp4aYnuCiXJBIYTFISihUvo8Xl1hI4jQZKlhIMcODJ8ud5j0zG09CNtGRji%2FtMA2ukVPc1kEf%2FboceZdKAfAzWJ2Ry%2FdCdO7JvH7iQVuXNmEnNNLqltJZuyxG4LvVrkPpNQbUCvSS%2FYjH%2FEYUHx8NrcQKyfSlknBTa7Dcei3gEakPzb2Y6aSceiYuCY4s4OIlddv1SLIyOAyw%2BW0FwNDWKC3451V5RLW2FdTsIDuF%2FlWrBB8uteEzKIHe3SScRv5EuwYjGXVoP%2FVt6LcEmBu%2F%2FXZI2brkQgNu%2FX%2FVzYGrfALe66irpHX6oLZTejObfKUyJnRNLLluEN%2FyPblXXBq2kGuCc9cwObGeZMPlDGefItMJ%2BJRriKbGDfMuK06gpmMGHG0b5ue2COzhmdjB4kgLLBU%2BzH8DO0REEG19j32AH3OdMtfMWP55wavYmk8c9VjxiSxcnXzIXTDAL36giajFiRwlrMomKWgzz%2Br%2FC7yNvBV23RrRUJTngJT7eOwBMms%2BMriz%2FPaqx7mvAYvhRAT0ebwAuU1wSn%2BiKJVyQHoIw0vmlvQY6pgEEOO7IeTnNbd11z%2FB6vH4hzFK6z63L4Xh2%2FPrdiYc57mZgAlsTjD8aBuKl0rRyMqyomGCLIEAvEcpZjp0JqWzvnTSGkEGcwifry4E4z8AckJVTEEUufglIsdLJPiHyWDux5c9Lv3jztit4ay8UAD0sK8K6ZnbBRL55BmFoMDdorMuRYyRg341WhBunjIk7ujXMmpRYrv%2FBunDYzyatvFOTAcuPz%2F%2Bi&X-Amz-Signature=352b00552427481e4ceb9f7597ae47d4531b5142fd754929b856a98abd57c77e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXHWTI4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcZ0d%2FofTcherWZj9dtRNaVosWLM6DyaR4V1zt8lkcOAiArhrB2KRWItGuIel1FUThMOv9867oXJqv%2FIlsJlDw3myqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwUo7ajz0E44fTYWzKtwDllgtgD4feGX8NzcjnWFzdgQYsKZJ7dYiCENQaF%2FnGYiAdhyFEteR%2FwZ6oOpxnisBti6R55U%2BwLrrvuUmT9Rp4aYnuCiXJBIYTFISihUvo8Xl1hI4jQZKlhIMcODJ8ud5j0zG09CNtGRji%2FtMA2ukVPc1kEf%2FboceZdKAfAzWJ2Ry%2FdCdO7JvH7iQVuXNmEnNNLqltJZuyxG4LvVrkPpNQbUCvSS%2FYjH%2FEYUHx8NrcQKyfSlknBTa7Dcei3gEakPzb2Y6aSceiYuCY4s4OIlddv1SLIyOAyw%2BW0FwNDWKC3451V5RLW2FdTsIDuF%2FlWrBB8uteEzKIHe3SScRv5EuwYjGXVoP%2FVt6LcEmBu%2F%2FXZI2brkQgNu%2FX%2FVzYGrfALe66irpHX6oLZTejObfKUyJnRNLLluEN%2FyPblXXBq2kGuCc9cwObGeZMPlDGefItMJ%2BJRriKbGDfMuK06gpmMGHG0b5ue2COzhmdjB4kgLLBU%2BzH8DO0REEG19j32AH3OdMtfMWP55wavYmk8c9VjxiSxcnXzIXTDAL36giajFiRwlrMomKWgzz%2Br%2FC7yNvBV23RrRUJTngJT7eOwBMms%2BMriz%2FPaqx7mvAYvhRAT0ebwAuU1wSn%2BiKJVyQHoIw0vmlvQY6pgEEOO7IeTnNbd11z%2FB6vH4hzFK6z63L4Xh2%2FPrdiYc57mZgAlsTjD8aBuKl0rRyMqyomGCLIEAvEcpZjp0JqWzvnTSGkEGcwifry4E4z8AckJVTEEUufglIsdLJPiHyWDux5c9Lv3jztit4ay8UAD0sK8K6ZnbBRL55BmFoMDdorMuRYyRg341WhBunjIk7ujXMmpRYrv%2FBunDYzyatvFOTAcuPz%2F%2Bi&X-Amz-Signature=94f3eca3e8bd555209c461d0dee8538b285ad1bc47986511efd1e993fadf3db3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAXHWTI4%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcZ0d%2FofTcherWZj9dtRNaVosWLM6DyaR4V1zt8lkcOAiArhrB2KRWItGuIel1FUThMOv9867oXJqv%2FIlsJlDw3myqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwUo7ajz0E44fTYWzKtwDllgtgD4feGX8NzcjnWFzdgQYsKZJ7dYiCENQaF%2FnGYiAdhyFEteR%2FwZ6oOpxnisBti6R55U%2BwLrrvuUmT9Rp4aYnuCiXJBIYTFISihUvo8Xl1hI4jQZKlhIMcODJ8ud5j0zG09CNtGRji%2FtMA2ukVPc1kEf%2FboceZdKAfAzWJ2Ry%2FdCdO7JvH7iQVuXNmEnNNLqltJZuyxG4LvVrkPpNQbUCvSS%2FYjH%2FEYUHx8NrcQKyfSlknBTa7Dcei3gEakPzb2Y6aSceiYuCY4s4OIlddv1SLIyOAyw%2BW0FwNDWKC3451V5RLW2FdTsIDuF%2FlWrBB8uteEzKIHe3SScRv5EuwYjGXVoP%2FVt6LcEmBu%2F%2FXZI2brkQgNu%2FX%2FVzYGrfALe66irpHX6oLZTejObfKUyJnRNLLluEN%2FyPblXXBq2kGuCc9cwObGeZMPlDGefItMJ%2BJRriKbGDfMuK06gpmMGHG0b5ue2COzhmdjB4kgLLBU%2BzH8DO0REEG19j32AH3OdMtfMWP55wavYmk8c9VjxiSxcnXzIXTDAL36giajFiRwlrMomKWgzz%2Br%2FC7yNvBV23RrRUJTngJT7eOwBMms%2BMriz%2FPaqx7mvAYvhRAT0ebwAuU1wSn%2BiKJVyQHoIw0vmlvQY6pgEEOO7IeTnNbd11z%2FB6vH4hzFK6z63L4Xh2%2FPrdiYc57mZgAlsTjD8aBuKl0rRyMqyomGCLIEAvEcpZjp0JqWzvnTSGkEGcwifry4E4z8AckJVTEEUufglIsdLJPiHyWDux5c9Lv3jztit4ay8UAD0sK8K6ZnbBRL55BmFoMDdorMuRYyRg341WhBunjIk7ujXMmpRYrv%2FBunDYzyatvFOTAcuPz%2F%2Bi&X-Amz-Signature=ce3d2e63b0470b283bb50660e5f335c3491660de943cf2b219ad99071baac7d7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

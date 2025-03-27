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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BFXVYH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxz%2FWQYcbawpE4dZYG5pqyVQYm06rPvOgAE2JiKfKOGQIgUBdWzfTpzSa9jgzX6mrOzoSvWD83MWp1gGNusp2Ex50q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIexHPeeX%2Bc%2FNsRA2ircAzuUwKMBOKS5NIxRegk6LC1jbXZJoUYoL5Kq8e4LsGOUoMXI4UHnqfEPAUVMpl7M9xu8T5a3lf93dG%2BiGWJXYBVaNvOx%2FY5kDcYSgdnoXmGftHov51gNiDMLKV6b%2BcJUmUs0%2B3KnhQPuvOaoBh9x8v636QIUosHdwWPe6cFmy%2FecINDPlVucXY5SYh69rX5ObJTpKTXSWSEIChHxajmTkwJpYdT%2FCNAE9EJZN6k5NzEzstxEndwCQtk2gEoED6NukdR%2B7jqnge2mpQWzisc0b8nS%2BrFMAewcPRM0NYY09Y3P5b%2BSrocIDtalkXvswBKqQWTcN0Xa%2FoOP2n%2F330BngzN%2BdAEiXyxN73ULuXiqlvLHyoNUqb2HMuF4ABluu2Yl2I65m4tw%2FqEKJG%2Fb9x3fhL7zeywc%2B0qw00AzXLGW8CDuaHflSw1yUUUnVR3wAQ3a%2FL%2BKZoCsEGSAM3hqxmFHP6%2Bk5y2ygm5rN0oUYqmcFqoNfxR%2BUPtDYhDE3XRKjB9sUXRt9tiKZjkIew4sQ5YnQ72Qz4q%2FxpwZYRolcJew%2Bb3xm%2B%2Fx%2FE4xuDfK%2FfOAGRpSZQ707HoFn24mijdVTYatIuLrk8S9IfDGb7FYUWYKUB9eObK4RCRjnZRYi2sTMIfMk78GOqUBWsQrvRhwgKAND3dAUXkcy9tIGd76lgw%2BDkRW6PagcLYhr5qNf27rAACRPVMqkJkZlDwGaZ815DdWEsOBVYnGY8iZKCDHfCWmMzdYsS9TGiybLgxkXaGsVWMR3mDjnOAGJBCipu69aovPgmgV7fyxBHMojrJB5YfPYfkcEzMrqYXWWhSjGbR52gf2LuVuW3fL71C%2BjrpvYMfThJ5KQjrnphDtbWuR&X-Amz-Signature=fd22e912ed40d86bde4912199c3c87b98521c26abe6a6bd57931ef83fab7b3cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BFXVYH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxz%2FWQYcbawpE4dZYG5pqyVQYm06rPvOgAE2JiKfKOGQIgUBdWzfTpzSa9jgzX6mrOzoSvWD83MWp1gGNusp2Ex50q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIexHPeeX%2Bc%2FNsRA2ircAzuUwKMBOKS5NIxRegk6LC1jbXZJoUYoL5Kq8e4LsGOUoMXI4UHnqfEPAUVMpl7M9xu8T5a3lf93dG%2BiGWJXYBVaNvOx%2FY5kDcYSgdnoXmGftHov51gNiDMLKV6b%2BcJUmUs0%2B3KnhQPuvOaoBh9x8v636QIUosHdwWPe6cFmy%2FecINDPlVucXY5SYh69rX5ObJTpKTXSWSEIChHxajmTkwJpYdT%2FCNAE9EJZN6k5NzEzstxEndwCQtk2gEoED6NukdR%2B7jqnge2mpQWzisc0b8nS%2BrFMAewcPRM0NYY09Y3P5b%2BSrocIDtalkXvswBKqQWTcN0Xa%2FoOP2n%2F330BngzN%2BdAEiXyxN73ULuXiqlvLHyoNUqb2HMuF4ABluu2Yl2I65m4tw%2FqEKJG%2Fb9x3fhL7zeywc%2B0qw00AzXLGW8CDuaHflSw1yUUUnVR3wAQ3a%2FL%2BKZoCsEGSAM3hqxmFHP6%2Bk5y2ygm5rN0oUYqmcFqoNfxR%2BUPtDYhDE3XRKjB9sUXRt9tiKZjkIew4sQ5YnQ72Qz4q%2FxpwZYRolcJew%2Bb3xm%2B%2Fx%2FE4xuDfK%2FfOAGRpSZQ707HoFn24mijdVTYatIuLrk8S9IfDGb7FYUWYKUB9eObK4RCRjnZRYi2sTMIfMk78GOqUBWsQrvRhwgKAND3dAUXkcy9tIGd76lgw%2BDkRW6PagcLYhr5qNf27rAACRPVMqkJkZlDwGaZ815DdWEsOBVYnGY8iZKCDHfCWmMzdYsS9TGiybLgxkXaGsVWMR3mDjnOAGJBCipu69aovPgmgV7fyxBHMojrJB5YfPYfkcEzMrqYXWWhSjGbR52gf2LuVuW3fL71C%2BjrpvYMfThJ5KQjrnphDtbWuR&X-Amz-Signature=71e2f798b042579e2034331efae146b91d18246ec0bd112c64b3cb7d033efdaa&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BFXVYH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxz%2FWQYcbawpE4dZYG5pqyVQYm06rPvOgAE2JiKfKOGQIgUBdWzfTpzSa9jgzX6mrOzoSvWD83MWp1gGNusp2Ex50q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIexHPeeX%2Bc%2FNsRA2ircAzuUwKMBOKS5NIxRegk6LC1jbXZJoUYoL5Kq8e4LsGOUoMXI4UHnqfEPAUVMpl7M9xu8T5a3lf93dG%2BiGWJXYBVaNvOx%2FY5kDcYSgdnoXmGftHov51gNiDMLKV6b%2BcJUmUs0%2B3KnhQPuvOaoBh9x8v636QIUosHdwWPe6cFmy%2FecINDPlVucXY5SYh69rX5ObJTpKTXSWSEIChHxajmTkwJpYdT%2FCNAE9EJZN6k5NzEzstxEndwCQtk2gEoED6NukdR%2B7jqnge2mpQWzisc0b8nS%2BrFMAewcPRM0NYY09Y3P5b%2BSrocIDtalkXvswBKqQWTcN0Xa%2FoOP2n%2F330BngzN%2BdAEiXyxN73ULuXiqlvLHyoNUqb2HMuF4ABluu2Yl2I65m4tw%2FqEKJG%2Fb9x3fhL7zeywc%2B0qw00AzXLGW8CDuaHflSw1yUUUnVR3wAQ3a%2FL%2BKZoCsEGSAM3hqxmFHP6%2Bk5y2ygm5rN0oUYqmcFqoNfxR%2BUPtDYhDE3XRKjB9sUXRt9tiKZjkIew4sQ5YnQ72Qz4q%2FxpwZYRolcJew%2Bb3xm%2B%2Fx%2FE4xuDfK%2FfOAGRpSZQ707HoFn24mijdVTYatIuLrk8S9IfDGb7FYUWYKUB9eObK4RCRjnZRYi2sTMIfMk78GOqUBWsQrvRhwgKAND3dAUXkcy9tIGd76lgw%2BDkRW6PagcLYhr5qNf27rAACRPVMqkJkZlDwGaZ815DdWEsOBVYnGY8iZKCDHfCWmMzdYsS9TGiybLgxkXaGsVWMR3mDjnOAGJBCipu69aovPgmgV7fyxBHMojrJB5YfPYfkcEzMrqYXWWhSjGbR52gf2LuVuW3fL71C%2BjrpvYMfThJ5KQjrnphDtbWuR&X-Amz-Signature=dfee0c2fed05da696eb5870699dbe437fb0bdd5dfef3def0451df07b4331bad4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BFXVYH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxz%2FWQYcbawpE4dZYG5pqyVQYm06rPvOgAE2JiKfKOGQIgUBdWzfTpzSa9jgzX6mrOzoSvWD83MWp1gGNusp2Ex50q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIexHPeeX%2Bc%2FNsRA2ircAzuUwKMBOKS5NIxRegk6LC1jbXZJoUYoL5Kq8e4LsGOUoMXI4UHnqfEPAUVMpl7M9xu8T5a3lf93dG%2BiGWJXYBVaNvOx%2FY5kDcYSgdnoXmGftHov51gNiDMLKV6b%2BcJUmUs0%2B3KnhQPuvOaoBh9x8v636QIUosHdwWPe6cFmy%2FecINDPlVucXY5SYh69rX5ObJTpKTXSWSEIChHxajmTkwJpYdT%2FCNAE9EJZN6k5NzEzstxEndwCQtk2gEoED6NukdR%2B7jqnge2mpQWzisc0b8nS%2BrFMAewcPRM0NYY09Y3P5b%2BSrocIDtalkXvswBKqQWTcN0Xa%2FoOP2n%2F330BngzN%2BdAEiXyxN73ULuXiqlvLHyoNUqb2HMuF4ABluu2Yl2I65m4tw%2FqEKJG%2Fb9x3fhL7zeywc%2B0qw00AzXLGW8CDuaHflSw1yUUUnVR3wAQ3a%2FL%2BKZoCsEGSAM3hqxmFHP6%2Bk5y2ygm5rN0oUYqmcFqoNfxR%2BUPtDYhDE3XRKjB9sUXRt9tiKZjkIew4sQ5YnQ72Qz4q%2FxpwZYRolcJew%2Bb3xm%2B%2Fx%2FE4xuDfK%2FfOAGRpSZQ707HoFn24mijdVTYatIuLrk8S9IfDGb7FYUWYKUB9eObK4RCRjnZRYi2sTMIfMk78GOqUBWsQrvRhwgKAND3dAUXkcy9tIGd76lgw%2BDkRW6PagcLYhr5qNf27rAACRPVMqkJkZlDwGaZ815DdWEsOBVYnGY8iZKCDHfCWmMzdYsS9TGiybLgxkXaGsVWMR3mDjnOAGJBCipu69aovPgmgV7fyxBHMojrJB5YfPYfkcEzMrqYXWWhSjGbR52gf2LuVuW3fL71C%2BjrpvYMfThJ5KQjrnphDtbWuR&X-Amz-Signature=ff6866ed3d237bedaae7c5850cd2d9d989bb78fab7e7868b80bcb051df0ab062&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BFXVYH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxz%2FWQYcbawpE4dZYG5pqyVQYm06rPvOgAE2JiKfKOGQIgUBdWzfTpzSa9jgzX6mrOzoSvWD83MWp1gGNusp2Ex50q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIexHPeeX%2Bc%2FNsRA2ircAzuUwKMBOKS5NIxRegk6LC1jbXZJoUYoL5Kq8e4LsGOUoMXI4UHnqfEPAUVMpl7M9xu8T5a3lf93dG%2BiGWJXYBVaNvOx%2FY5kDcYSgdnoXmGftHov51gNiDMLKV6b%2BcJUmUs0%2B3KnhQPuvOaoBh9x8v636QIUosHdwWPe6cFmy%2FecINDPlVucXY5SYh69rX5ObJTpKTXSWSEIChHxajmTkwJpYdT%2FCNAE9EJZN6k5NzEzstxEndwCQtk2gEoED6NukdR%2B7jqnge2mpQWzisc0b8nS%2BrFMAewcPRM0NYY09Y3P5b%2BSrocIDtalkXvswBKqQWTcN0Xa%2FoOP2n%2F330BngzN%2BdAEiXyxN73ULuXiqlvLHyoNUqb2HMuF4ABluu2Yl2I65m4tw%2FqEKJG%2Fb9x3fhL7zeywc%2B0qw00AzXLGW8CDuaHflSw1yUUUnVR3wAQ3a%2FL%2BKZoCsEGSAM3hqxmFHP6%2Bk5y2ygm5rN0oUYqmcFqoNfxR%2BUPtDYhDE3XRKjB9sUXRt9tiKZjkIew4sQ5YnQ72Qz4q%2FxpwZYRolcJew%2Bb3xm%2B%2Fx%2FE4xuDfK%2FfOAGRpSZQ707HoFn24mijdVTYatIuLrk8S9IfDGb7FYUWYKUB9eObK4RCRjnZRYi2sTMIfMk78GOqUBWsQrvRhwgKAND3dAUXkcy9tIGd76lgw%2BDkRW6PagcLYhr5qNf27rAACRPVMqkJkZlDwGaZ815DdWEsOBVYnGY8iZKCDHfCWmMzdYsS9TGiybLgxkXaGsVWMR3mDjnOAGJBCipu69aovPgmgV7fyxBHMojrJB5YfPYfkcEzMrqYXWWhSjGbR52gf2LuVuW3fL71C%2BjrpvYMfThJ5KQjrnphDtbWuR&X-Amz-Signature=2ed605c02598935525e112898551505fcc64950d5b68cb971f21a6f4897e92a2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BFXVYH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxz%2FWQYcbawpE4dZYG5pqyVQYm06rPvOgAE2JiKfKOGQIgUBdWzfTpzSa9jgzX6mrOzoSvWD83MWp1gGNusp2Ex50q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIexHPeeX%2Bc%2FNsRA2ircAzuUwKMBOKS5NIxRegk6LC1jbXZJoUYoL5Kq8e4LsGOUoMXI4UHnqfEPAUVMpl7M9xu8T5a3lf93dG%2BiGWJXYBVaNvOx%2FY5kDcYSgdnoXmGftHov51gNiDMLKV6b%2BcJUmUs0%2B3KnhQPuvOaoBh9x8v636QIUosHdwWPe6cFmy%2FecINDPlVucXY5SYh69rX5ObJTpKTXSWSEIChHxajmTkwJpYdT%2FCNAE9EJZN6k5NzEzstxEndwCQtk2gEoED6NukdR%2B7jqnge2mpQWzisc0b8nS%2BrFMAewcPRM0NYY09Y3P5b%2BSrocIDtalkXvswBKqQWTcN0Xa%2FoOP2n%2F330BngzN%2BdAEiXyxN73ULuXiqlvLHyoNUqb2HMuF4ABluu2Yl2I65m4tw%2FqEKJG%2Fb9x3fhL7zeywc%2B0qw00AzXLGW8CDuaHflSw1yUUUnVR3wAQ3a%2FL%2BKZoCsEGSAM3hqxmFHP6%2Bk5y2ygm5rN0oUYqmcFqoNfxR%2BUPtDYhDE3XRKjB9sUXRt9tiKZjkIew4sQ5YnQ72Qz4q%2FxpwZYRolcJew%2Bb3xm%2B%2Fx%2FE4xuDfK%2FfOAGRpSZQ707HoFn24mijdVTYatIuLrk8S9IfDGb7FYUWYKUB9eObK4RCRjnZRYi2sTMIfMk78GOqUBWsQrvRhwgKAND3dAUXkcy9tIGd76lgw%2BDkRW6PagcLYhr5qNf27rAACRPVMqkJkZlDwGaZ815DdWEsOBVYnGY8iZKCDHfCWmMzdYsS9TGiybLgxkXaGsVWMR3mDjnOAGJBCipu69aovPgmgV7fyxBHMojrJB5YfPYfkcEzMrqYXWWhSjGbR52gf2LuVuW3fL71C%2BjrpvYMfThJ5KQjrnphDtbWuR&X-Amz-Signature=c35213272b48d9231aa410ba591f29d7f7271d98dad52511d5110e6b2dd0c0ad&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4BFXVYH%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxz%2FWQYcbawpE4dZYG5pqyVQYm06rPvOgAE2JiKfKOGQIgUBdWzfTpzSa9jgzX6mrOzoSvWD83MWp1gGNusp2Ex50q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIexHPeeX%2Bc%2FNsRA2ircAzuUwKMBOKS5NIxRegk6LC1jbXZJoUYoL5Kq8e4LsGOUoMXI4UHnqfEPAUVMpl7M9xu8T5a3lf93dG%2BiGWJXYBVaNvOx%2FY5kDcYSgdnoXmGftHov51gNiDMLKV6b%2BcJUmUs0%2B3KnhQPuvOaoBh9x8v636QIUosHdwWPe6cFmy%2FecINDPlVucXY5SYh69rX5ObJTpKTXSWSEIChHxajmTkwJpYdT%2FCNAE9EJZN6k5NzEzstxEndwCQtk2gEoED6NukdR%2B7jqnge2mpQWzisc0b8nS%2BrFMAewcPRM0NYY09Y3P5b%2BSrocIDtalkXvswBKqQWTcN0Xa%2FoOP2n%2F330BngzN%2BdAEiXyxN73ULuXiqlvLHyoNUqb2HMuF4ABluu2Yl2I65m4tw%2FqEKJG%2Fb9x3fhL7zeywc%2B0qw00AzXLGW8CDuaHflSw1yUUUnVR3wAQ3a%2FL%2BKZoCsEGSAM3hqxmFHP6%2Bk5y2ygm5rN0oUYqmcFqoNfxR%2BUPtDYhDE3XRKjB9sUXRt9tiKZjkIew4sQ5YnQ72Qz4q%2FxpwZYRolcJew%2Bb3xm%2B%2Fx%2FE4xuDfK%2FfOAGRpSZQ707HoFn24mijdVTYatIuLrk8S9IfDGb7FYUWYKUB9eObK4RCRjnZRYi2sTMIfMk78GOqUBWsQrvRhwgKAND3dAUXkcy9tIGd76lgw%2BDkRW6PagcLYhr5qNf27rAACRPVMqkJkZlDwGaZ815DdWEsOBVYnGY8iZKCDHfCWmMzdYsS9TGiybLgxkXaGsVWMR3mDjnOAGJBCipu69aovPgmgV7fyxBHMojrJB5YfPYfkcEzMrqYXWWhSjGbR52gf2LuVuW3fL71C%2BjrpvYMfThJ5KQjrnphDtbWuR&X-Amz-Signature=426d95b1055d59db37b9ffb6953e926b13ca863a031d4a2f3b237d0ac5541213&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

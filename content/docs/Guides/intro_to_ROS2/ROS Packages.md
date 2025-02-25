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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNQSPLN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHfoy1HAp5%2BGhYdFSWcS41m69R6YyESctbgEAzfSvzh8AiEAu21Q7F21%2FnmAbogjSLdDRG9x3NvKyDtleonIUrLXts8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCS3p%2BPCCxAShO2zGyrcA3yLI%2BH1QbKeL5ZaK3PKN%2BR87qqz%2FxJSvcYAS%2FGEyb0e8z7CXiArhbeBwd99g%2F%2BlfJfWiW8fyiYmLrJUsGOR2uVRFwCpg4qyvB4qdJmaUUUKgly27knZMcM7tdMHNBIltwSnBzDoP4tZVopWVBg31NXD7sVw3qw25NJ50zKYHSk4I4gi4thiyHHb00%2BfIqUI3WkvcTEP0H50kEizk%2B2OdCKk7ST3ql%2FXkh0RUs2km6UR0stgLcfmoCF%2FsdV4BhY63cy%2F77NW6stCO5%2Fx9HRfjf0LHCGyv%2B3gh9ICEsXfJzNdzI8MSTgAshHMHdQsRS7T9geRyoiVfg3U78SOuPXT3uMQNVEp9u0LN2oyG65t85q1VBr4W7zrZJlKV4F1xhTici57od0tNV7cM8T0CbF6vyiPBqFTRWu%2FsQ%2BxPZoUQO5G2MmCivzkuXTAE38WvdnqqoDegjLVX1u2cAHI9G5NWhwPylFKFvvt1wBtPA65cenSfHp%2B0IEJM6PJitGFtF4ONAbM3O%2FHQD9yYPOYdTv5niBFjqdHYQCP%2BQCTgvWxyY1HydXX23n8q1b%2B%2BAbtha4jHRW7bHBoD%2BQXa2jLIJHEc7xL1YrM3F2viFPqMCpWdgZpI2DQt09oJMqF9Gt7MO7Q970GOqUBo4kLwzOwLQ7V4tUAAlATEi5oPaKxR%2F0yOHCJf3r4V9DTJbx0VvnWvzpE2zOpzMuc0lD5CNkHj7XpIGiUCZ8ZW%2F23qc6sGWhJdd65tKWvw43zAy3e30FateYJOOMNd4%2FD%2FrUEyqm7yv%2FqTjCRR3pJ29x0q%2BRy54T2VBejycFkMR%2BDHgnV8o9WSio%2FwkZJIb6EhBGj9bt9%2F0JZHHu%2BsNZvaLs6k3NO&X-Amz-Signature=ec31402dc5278c1272ef73e5a6e8678079c3f5725dca4aefca0c2de4227d4947&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNQSPLN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHfoy1HAp5%2BGhYdFSWcS41m69R6YyESctbgEAzfSvzh8AiEAu21Q7F21%2FnmAbogjSLdDRG9x3NvKyDtleonIUrLXts8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCS3p%2BPCCxAShO2zGyrcA3yLI%2BH1QbKeL5ZaK3PKN%2BR87qqz%2FxJSvcYAS%2FGEyb0e8z7CXiArhbeBwd99g%2F%2BlfJfWiW8fyiYmLrJUsGOR2uVRFwCpg4qyvB4qdJmaUUUKgly27knZMcM7tdMHNBIltwSnBzDoP4tZVopWVBg31NXD7sVw3qw25NJ50zKYHSk4I4gi4thiyHHb00%2BfIqUI3WkvcTEP0H50kEizk%2B2OdCKk7ST3ql%2FXkh0RUs2km6UR0stgLcfmoCF%2FsdV4BhY63cy%2F77NW6stCO5%2Fx9HRfjf0LHCGyv%2B3gh9ICEsXfJzNdzI8MSTgAshHMHdQsRS7T9geRyoiVfg3U78SOuPXT3uMQNVEp9u0LN2oyG65t85q1VBr4W7zrZJlKV4F1xhTici57od0tNV7cM8T0CbF6vyiPBqFTRWu%2FsQ%2BxPZoUQO5G2MmCivzkuXTAE38WvdnqqoDegjLVX1u2cAHI9G5NWhwPylFKFvvt1wBtPA65cenSfHp%2B0IEJM6PJitGFtF4ONAbM3O%2FHQD9yYPOYdTv5niBFjqdHYQCP%2BQCTgvWxyY1HydXX23n8q1b%2B%2BAbtha4jHRW7bHBoD%2BQXa2jLIJHEc7xL1YrM3F2viFPqMCpWdgZpI2DQt09oJMqF9Gt7MO7Q970GOqUBo4kLwzOwLQ7V4tUAAlATEi5oPaKxR%2F0yOHCJf3r4V9DTJbx0VvnWvzpE2zOpzMuc0lD5CNkHj7XpIGiUCZ8ZW%2F23qc6sGWhJdd65tKWvw43zAy3e30FateYJOOMNd4%2FD%2FrUEyqm7yv%2FqTjCRR3pJ29x0q%2BRy54T2VBejycFkMR%2BDHgnV8o9WSio%2FwkZJIb6EhBGj9bt9%2F0JZHHu%2BsNZvaLs6k3NO&X-Amz-Signature=6b98f07c739682b1a050fdc54bee7ee79b0c63f5d8896c92881e9ca7b5b136a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNQSPLN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHfoy1HAp5%2BGhYdFSWcS41m69R6YyESctbgEAzfSvzh8AiEAu21Q7F21%2FnmAbogjSLdDRG9x3NvKyDtleonIUrLXts8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCS3p%2BPCCxAShO2zGyrcA3yLI%2BH1QbKeL5ZaK3PKN%2BR87qqz%2FxJSvcYAS%2FGEyb0e8z7CXiArhbeBwd99g%2F%2BlfJfWiW8fyiYmLrJUsGOR2uVRFwCpg4qyvB4qdJmaUUUKgly27knZMcM7tdMHNBIltwSnBzDoP4tZVopWVBg31NXD7sVw3qw25NJ50zKYHSk4I4gi4thiyHHb00%2BfIqUI3WkvcTEP0H50kEizk%2B2OdCKk7ST3ql%2FXkh0RUs2km6UR0stgLcfmoCF%2FsdV4BhY63cy%2F77NW6stCO5%2Fx9HRfjf0LHCGyv%2B3gh9ICEsXfJzNdzI8MSTgAshHMHdQsRS7T9geRyoiVfg3U78SOuPXT3uMQNVEp9u0LN2oyG65t85q1VBr4W7zrZJlKV4F1xhTici57od0tNV7cM8T0CbF6vyiPBqFTRWu%2FsQ%2BxPZoUQO5G2MmCivzkuXTAE38WvdnqqoDegjLVX1u2cAHI9G5NWhwPylFKFvvt1wBtPA65cenSfHp%2B0IEJM6PJitGFtF4ONAbM3O%2FHQD9yYPOYdTv5niBFjqdHYQCP%2BQCTgvWxyY1HydXX23n8q1b%2B%2BAbtha4jHRW7bHBoD%2BQXa2jLIJHEc7xL1YrM3F2viFPqMCpWdgZpI2DQt09oJMqF9Gt7MO7Q970GOqUBo4kLwzOwLQ7V4tUAAlATEi5oPaKxR%2F0yOHCJf3r4V9DTJbx0VvnWvzpE2zOpzMuc0lD5CNkHj7XpIGiUCZ8ZW%2F23qc6sGWhJdd65tKWvw43zAy3e30FateYJOOMNd4%2FD%2FrUEyqm7yv%2FqTjCRR3pJ29x0q%2BRy54T2VBejycFkMR%2BDHgnV8o9WSio%2FwkZJIb6EhBGj9bt9%2F0JZHHu%2BsNZvaLs6k3NO&X-Amz-Signature=261c2f8852ec7befc95ce718bd7a367b13f0d2872defce8ee2a2183a85929a8f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNQSPLN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHfoy1HAp5%2BGhYdFSWcS41m69R6YyESctbgEAzfSvzh8AiEAu21Q7F21%2FnmAbogjSLdDRG9x3NvKyDtleonIUrLXts8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCS3p%2BPCCxAShO2zGyrcA3yLI%2BH1QbKeL5ZaK3PKN%2BR87qqz%2FxJSvcYAS%2FGEyb0e8z7CXiArhbeBwd99g%2F%2BlfJfWiW8fyiYmLrJUsGOR2uVRFwCpg4qyvB4qdJmaUUUKgly27knZMcM7tdMHNBIltwSnBzDoP4tZVopWVBg31NXD7sVw3qw25NJ50zKYHSk4I4gi4thiyHHb00%2BfIqUI3WkvcTEP0H50kEizk%2B2OdCKk7ST3ql%2FXkh0RUs2km6UR0stgLcfmoCF%2FsdV4BhY63cy%2F77NW6stCO5%2Fx9HRfjf0LHCGyv%2B3gh9ICEsXfJzNdzI8MSTgAshHMHdQsRS7T9geRyoiVfg3U78SOuPXT3uMQNVEp9u0LN2oyG65t85q1VBr4W7zrZJlKV4F1xhTici57od0tNV7cM8T0CbF6vyiPBqFTRWu%2FsQ%2BxPZoUQO5G2MmCivzkuXTAE38WvdnqqoDegjLVX1u2cAHI9G5NWhwPylFKFvvt1wBtPA65cenSfHp%2B0IEJM6PJitGFtF4ONAbM3O%2FHQD9yYPOYdTv5niBFjqdHYQCP%2BQCTgvWxyY1HydXX23n8q1b%2B%2BAbtha4jHRW7bHBoD%2BQXa2jLIJHEc7xL1YrM3F2viFPqMCpWdgZpI2DQt09oJMqF9Gt7MO7Q970GOqUBo4kLwzOwLQ7V4tUAAlATEi5oPaKxR%2F0yOHCJf3r4V9DTJbx0VvnWvzpE2zOpzMuc0lD5CNkHj7XpIGiUCZ8ZW%2F23qc6sGWhJdd65tKWvw43zAy3e30FateYJOOMNd4%2FD%2FrUEyqm7yv%2FqTjCRR3pJ29x0q%2BRy54T2VBejycFkMR%2BDHgnV8o9WSio%2FwkZJIb6EhBGj9bt9%2F0JZHHu%2BsNZvaLs6k3NO&X-Amz-Signature=722d9506031cf13c9dfd8a5d3c61bd5656701f98053672409cb260833ec1b8fc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNQSPLN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHfoy1HAp5%2BGhYdFSWcS41m69R6YyESctbgEAzfSvzh8AiEAu21Q7F21%2FnmAbogjSLdDRG9x3NvKyDtleonIUrLXts8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCS3p%2BPCCxAShO2zGyrcA3yLI%2BH1QbKeL5ZaK3PKN%2BR87qqz%2FxJSvcYAS%2FGEyb0e8z7CXiArhbeBwd99g%2F%2BlfJfWiW8fyiYmLrJUsGOR2uVRFwCpg4qyvB4qdJmaUUUKgly27knZMcM7tdMHNBIltwSnBzDoP4tZVopWVBg31NXD7sVw3qw25NJ50zKYHSk4I4gi4thiyHHb00%2BfIqUI3WkvcTEP0H50kEizk%2B2OdCKk7ST3ql%2FXkh0RUs2km6UR0stgLcfmoCF%2FsdV4BhY63cy%2F77NW6stCO5%2Fx9HRfjf0LHCGyv%2B3gh9ICEsXfJzNdzI8MSTgAshHMHdQsRS7T9geRyoiVfg3U78SOuPXT3uMQNVEp9u0LN2oyG65t85q1VBr4W7zrZJlKV4F1xhTici57od0tNV7cM8T0CbF6vyiPBqFTRWu%2FsQ%2BxPZoUQO5G2MmCivzkuXTAE38WvdnqqoDegjLVX1u2cAHI9G5NWhwPylFKFvvt1wBtPA65cenSfHp%2B0IEJM6PJitGFtF4ONAbM3O%2FHQD9yYPOYdTv5niBFjqdHYQCP%2BQCTgvWxyY1HydXX23n8q1b%2B%2BAbtha4jHRW7bHBoD%2BQXa2jLIJHEc7xL1YrM3F2viFPqMCpWdgZpI2DQt09oJMqF9Gt7MO7Q970GOqUBo4kLwzOwLQ7V4tUAAlATEi5oPaKxR%2F0yOHCJf3r4V9DTJbx0VvnWvzpE2zOpzMuc0lD5CNkHj7XpIGiUCZ8ZW%2F23qc6sGWhJdd65tKWvw43zAy3e30FateYJOOMNd4%2FD%2FrUEyqm7yv%2FqTjCRR3pJ29x0q%2BRy54T2VBejycFkMR%2BDHgnV8o9WSio%2FwkZJIb6EhBGj9bt9%2F0JZHHu%2BsNZvaLs6k3NO&X-Amz-Signature=4cc1a69167744ef1d69a7e50abc0e62605c914d5f4531a9db2425f97de6c2099&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNQSPLN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHfoy1HAp5%2BGhYdFSWcS41m69R6YyESctbgEAzfSvzh8AiEAu21Q7F21%2FnmAbogjSLdDRG9x3NvKyDtleonIUrLXts8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCS3p%2BPCCxAShO2zGyrcA3yLI%2BH1QbKeL5ZaK3PKN%2BR87qqz%2FxJSvcYAS%2FGEyb0e8z7CXiArhbeBwd99g%2F%2BlfJfWiW8fyiYmLrJUsGOR2uVRFwCpg4qyvB4qdJmaUUUKgly27knZMcM7tdMHNBIltwSnBzDoP4tZVopWVBg31NXD7sVw3qw25NJ50zKYHSk4I4gi4thiyHHb00%2BfIqUI3WkvcTEP0H50kEizk%2B2OdCKk7ST3ql%2FXkh0RUs2km6UR0stgLcfmoCF%2FsdV4BhY63cy%2F77NW6stCO5%2Fx9HRfjf0LHCGyv%2B3gh9ICEsXfJzNdzI8MSTgAshHMHdQsRS7T9geRyoiVfg3U78SOuPXT3uMQNVEp9u0LN2oyG65t85q1VBr4W7zrZJlKV4F1xhTici57od0tNV7cM8T0CbF6vyiPBqFTRWu%2FsQ%2BxPZoUQO5G2MmCivzkuXTAE38WvdnqqoDegjLVX1u2cAHI9G5NWhwPylFKFvvt1wBtPA65cenSfHp%2B0IEJM6PJitGFtF4ONAbM3O%2FHQD9yYPOYdTv5niBFjqdHYQCP%2BQCTgvWxyY1HydXX23n8q1b%2B%2BAbtha4jHRW7bHBoD%2BQXa2jLIJHEc7xL1YrM3F2viFPqMCpWdgZpI2DQt09oJMqF9Gt7MO7Q970GOqUBo4kLwzOwLQ7V4tUAAlATEi5oPaKxR%2F0yOHCJf3r4V9DTJbx0VvnWvzpE2zOpzMuc0lD5CNkHj7XpIGiUCZ8ZW%2F23qc6sGWhJdd65tKWvw43zAy3e30FateYJOOMNd4%2FD%2FrUEyqm7yv%2FqTjCRR3pJ29x0q%2BRy54T2VBejycFkMR%2BDHgnV8o9WSio%2FwkZJIb6EhBGj9bt9%2F0JZHHu%2BsNZvaLs6k3NO&X-Amz-Signature=f465aca7dc33ece644eea9958e3b437fa9431cdabd53667a008c2b4ecdbe7b91&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRNQSPLN%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHfoy1HAp5%2BGhYdFSWcS41m69R6YyESctbgEAzfSvzh8AiEAu21Q7F21%2FnmAbogjSLdDRG9x3NvKyDtleonIUrLXts8q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDCS3p%2BPCCxAShO2zGyrcA3yLI%2BH1QbKeL5ZaK3PKN%2BR87qqz%2FxJSvcYAS%2FGEyb0e8z7CXiArhbeBwd99g%2F%2BlfJfWiW8fyiYmLrJUsGOR2uVRFwCpg4qyvB4qdJmaUUUKgly27knZMcM7tdMHNBIltwSnBzDoP4tZVopWVBg31NXD7sVw3qw25NJ50zKYHSk4I4gi4thiyHHb00%2BfIqUI3WkvcTEP0H50kEizk%2B2OdCKk7ST3ql%2FXkh0RUs2km6UR0stgLcfmoCF%2FsdV4BhY63cy%2F77NW6stCO5%2Fx9HRfjf0LHCGyv%2B3gh9ICEsXfJzNdzI8MSTgAshHMHdQsRS7T9geRyoiVfg3U78SOuPXT3uMQNVEp9u0LN2oyG65t85q1VBr4W7zrZJlKV4F1xhTici57od0tNV7cM8T0CbF6vyiPBqFTRWu%2FsQ%2BxPZoUQO5G2MmCivzkuXTAE38WvdnqqoDegjLVX1u2cAHI9G5NWhwPylFKFvvt1wBtPA65cenSfHp%2B0IEJM6PJitGFtF4ONAbM3O%2FHQD9yYPOYdTv5niBFjqdHYQCP%2BQCTgvWxyY1HydXX23n8q1b%2B%2BAbtha4jHRW7bHBoD%2BQXa2jLIJHEc7xL1YrM3F2viFPqMCpWdgZpI2DQt09oJMqF9Gt7MO7Q970GOqUBo4kLwzOwLQ7V4tUAAlATEi5oPaKxR%2F0yOHCJf3r4V9DTJbx0VvnWvzpE2zOpzMuc0lD5CNkHj7XpIGiUCZ8ZW%2F23qc6sGWhJdd65tKWvw43zAy3e30FateYJOOMNd4%2FD%2FrUEyqm7yv%2FqTjCRR3pJ29x0q%2BRy54T2VBejycFkMR%2BDHgnV8o9WSio%2FwkZJIb6EhBGj9bt9%2F0JZHHu%2BsNZvaLs6k3NO&X-Amz-Signature=ecf2972efda878d7323102929ec849cef99a224bc0a16285a0fe50283df4fa4b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

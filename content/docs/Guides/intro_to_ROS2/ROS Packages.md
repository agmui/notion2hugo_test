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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCG7H4I%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCb0illpmnq2zNPmyXxdQrvCt31%2FmQ1c%2FeWwe%2FXqSUlUQIgeNHDfe%2Btly7qyfpaCwHOshy%2FtISM6WV7ZIxGziFD7g0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgafE0PZ8aA4doE0ircA%2FwueQZx2M%2Fz1c9BxK%2FwOpgS2tb93K2%2BrARmONtsqSHaNgihnY51Per7YgrGfNcGrPizxaHz30mPHlefRq9ClMC9L3sp37x5595HYy8bULDI%2F0r%2BlF9iN%2BbK4UoM4NMXn5%2FY4hNEYkGpPrxYIy82AgrT%2FRnVmu5ByVEK6vHQ7RiMimyjeTZGWMV0KCWHEzSPLwaHLkSqtHBAh2VzHp71kUZKRGziviY993CHm%2BZW6WjF14FyLc43G3LHQkiNEXx3t40ZknGo7GMjA8xGdeM6STRvc6vQEowkb9KqX5HlwbN8fsD0XNC3R%2BC20zwPwBWrp6qCT3gvt87keso60bS%2BGPy4RrLZAECqxZkdF0dabcGGXz%2Fy8MN1mv%2Bb0TUhUIdYQrO2MO0E1QVwu6LUwD1D53HxBi3242zEEbA9bUkxFjTbCRz3W4BPhqp9LtUrkG91W%2BVx0ei3lZx4sP%2BjpHsmQVcrBjHf3zZ%2BcqWsFsnvDDMT%2FQHuYix%2BYEvday0%2BSICDAcciOoB6%2FJ4WIAPzGoRWMgJ3ofAfNPHUZSCJcVZHcHHk6PWSJNcBFnYcIzLqdOtiBjZRJxjJr59ZFggyHVTfhyLmoQB7JfefzCfexMBi%2FXt9Nw%2BMGaeJkUBkdV%2BoMIuGhcEGOqUBCHVW6FVrHss9ct3MESa0RRAcFMoO6KA6HuiU8YzUjiXgtPc061H6xIIvCqeU478agWgIgbNZUxafr%2FfmXcmpTfZfvREnORIUiHzparId82b281h06JTOFNjVrseuhGNMM93qbuz5swgigzFLx%2BkG01lqTEDiYqx5uffigr5DLfJ6XV264B63SbvcTTO3cQJf6gyJrAPA9O5y71diDz1h7WmU3Amw&X-Amz-Signature=1c5fc377c15afffd4c5d8f3731beb43a0789f385f4c53ba46720ea33ea461626&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCG7H4I%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCb0illpmnq2zNPmyXxdQrvCt31%2FmQ1c%2FeWwe%2FXqSUlUQIgeNHDfe%2Btly7qyfpaCwHOshy%2FtISM6WV7ZIxGziFD7g0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgafE0PZ8aA4doE0ircA%2FwueQZx2M%2Fz1c9BxK%2FwOpgS2tb93K2%2BrARmONtsqSHaNgihnY51Per7YgrGfNcGrPizxaHz30mPHlefRq9ClMC9L3sp37x5595HYy8bULDI%2F0r%2BlF9iN%2BbK4UoM4NMXn5%2FY4hNEYkGpPrxYIy82AgrT%2FRnVmu5ByVEK6vHQ7RiMimyjeTZGWMV0KCWHEzSPLwaHLkSqtHBAh2VzHp71kUZKRGziviY993CHm%2BZW6WjF14FyLc43G3LHQkiNEXx3t40ZknGo7GMjA8xGdeM6STRvc6vQEowkb9KqX5HlwbN8fsD0XNC3R%2BC20zwPwBWrp6qCT3gvt87keso60bS%2BGPy4RrLZAECqxZkdF0dabcGGXz%2Fy8MN1mv%2Bb0TUhUIdYQrO2MO0E1QVwu6LUwD1D53HxBi3242zEEbA9bUkxFjTbCRz3W4BPhqp9LtUrkG91W%2BVx0ei3lZx4sP%2BjpHsmQVcrBjHf3zZ%2BcqWsFsnvDDMT%2FQHuYix%2BYEvday0%2BSICDAcciOoB6%2FJ4WIAPzGoRWMgJ3ofAfNPHUZSCJcVZHcHHk6PWSJNcBFnYcIzLqdOtiBjZRJxjJr59ZFggyHVTfhyLmoQB7JfefzCfexMBi%2FXt9Nw%2BMGaeJkUBkdV%2BoMIuGhcEGOqUBCHVW6FVrHss9ct3MESa0RRAcFMoO6KA6HuiU8YzUjiXgtPc061H6xIIvCqeU478agWgIgbNZUxafr%2FfmXcmpTfZfvREnORIUiHzparId82b281h06JTOFNjVrseuhGNMM93qbuz5swgigzFLx%2BkG01lqTEDiYqx5uffigr5DLfJ6XV264B63SbvcTTO3cQJf6gyJrAPA9O5y71diDz1h7WmU3Amw&X-Amz-Signature=917bf7d38a53e0a238915c7c68061aba636032d6e2049799efbc83fe2f0e9de4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCG7H4I%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCb0illpmnq2zNPmyXxdQrvCt31%2FmQ1c%2FeWwe%2FXqSUlUQIgeNHDfe%2Btly7qyfpaCwHOshy%2FtISM6WV7ZIxGziFD7g0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgafE0PZ8aA4doE0ircA%2FwueQZx2M%2Fz1c9BxK%2FwOpgS2tb93K2%2BrARmONtsqSHaNgihnY51Per7YgrGfNcGrPizxaHz30mPHlefRq9ClMC9L3sp37x5595HYy8bULDI%2F0r%2BlF9iN%2BbK4UoM4NMXn5%2FY4hNEYkGpPrxYIy82AgrT%2FRnVmu5ByVEK6vHQ7RiMimyjeTZGWMV0KCWHEzSPLwaHLkSqtHBAh2VzHp71kUZKRGziviY993CHm%2BZW6WjF14FyLc43G3LHQkiNEXx3t40ZknGo7GMjA8xGdeM6STRvc6vQEowkb9KqX5HlwbN8fsD0XNC3R%2BC20zwPwBWrp6qCT3gvt87keso60bS%2BGPy4RrLZAECqxZkdF0dabcGGXz%2Fy8MN1mv%2Bb0TUhUIdYQrO2MO0E1QVwu6LUwD1D53HxBi3242zEEbA9bUkxFjTbCRz3W4BPhqp9LtUrkG91W%2BVx0ei3lZx4sP%2BjpHsmQVcrBjHf3zZ%2BcqWsFsnvDDMT%2FQHuYix%2BYEvday0%2BSICDAcciOoB6%2FJ4WIAPzGoRWMgJ3ofAfNPHUZSCJcVZHcHHk6PWSJNcBFnYcIzLqdOtiBjZRJxjJr59ZFggyHVTfhyLmoQB7JfefzCfexMBi%2FXt9Nw%2BMGaeJkUBkdV%2BoMIuGhcEGOqUBCHVW6FVrHss9ct3MESa0RRAcFMoO6KA6HuiU8YzUjiXgtPc061H6xIIvCqeU478agWgIgbNZUxafr%2FfmXcmpTfZfvREnORIUiHzparId82b281h06JTOFNjVrseuhGNMM93qbuz5swgigzFLx%2BkG01lqTEDiYqx5uffigr5DLfJ6XV264B63SbvcTTO3cQJf6gyJrAPA9O5y71diDz1h7WmU3Amw&X-Amz-Signature=c5de2c2851715a9e57dcefb8f643fe3e41f967f2f1859422bff805f26c73e2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCG7H4I%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCb0illpmnq2zNPmyXxdQrvCt31%2FmQ1c%2FeWwe%2FXqSUlUQIgeNHDfe%2Btly7qyfpaCwHOshy%2FtISM6WV7ZIxGziFD7g0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgafE0PZ8aA4doE0ircA%2FwueQZx2M%2Fz1c9BxK%2FwOpgS2tb93K2%2BrARmONtsqSHaNgihnY51Per7YgrGfNcGrPizxaHz30mPHlefRq9ClMC9L3sp37x5595HYy8bULDI%2F0r%2BlF9iN%2BbK4UoM4NMXn5%2FY4hNEYkGpPrxYIy82AgrT%2FRnVmu5ByVEK6vHQ7RiMimyjeTZGWMV0KCWHEzSPLwaHLkSqtHBAh2VzHp71kUZKRGziviY993CHm%2BZW6WjF14FyLc43G3LHQkiNEXx3t40ZknGo7GMjA8xGdeM6STRvc6vQEowkb9KqX5HlwbN8fsD0XNC3R%2BC20zwPwBWrp6qCT3gvt87keso60bS%2BGPy4RrLZAECqxZkdF0dabcGGXz%2Fy8MN1mv%2Bb0TUhUIdYQrO2MO0E1QVwu6LUwD1D53HxBi3242zEEbA9bUkxFjTbCRz3W4BPhqp9LtUrkG91W%2BVx0ei3lZx4sP%2BjpHsmQVcrBjHf3zZ%2BcqWsFsnvDDMT%2FQHuYix%2BYEvday0%2BSICDAcciOoB6%2FJ4WIAPzGoRWMgJ3ofAfNPHUZSCJcVZHcHHk6PWSJNcBFnYcIzLqdOtiBjZRJxjJr59ZFggyHVTfhyLmoQB7JfefzCfexMBi%2FXt9Nw%2BMGaeJkUBkdV%2BoMIuGhcEGOqUBCHVW6FVrHss9ct3MESa0RRAcFMoO6KA6HuiU8YzUjiXgtPc061H6xIIvCqeU478agWgIgbNZUxafr%2FfmXcmpTfZfvREnORIUiHzparId82b281h06JTOFNjVrseuhGNMM93qbuz5swgigzFLx%2BkG01lqTEDiYqx5uffigr5DLfJ6XV264B63SbvcTTO3cQJf6gyJrAPA9O5y71diDz1h7WmU3Amw&X-Amz-Signature=3db0c670b2ccf589800c04245b393ed49e8ad3c938ec8cce8670d5306fb02c87&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCG7H4I%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCb0illpmnq2zNPmyXxdQrvCt31%2FmQ1c%2FeWwe%2FXqSUlUQIgeNHDfe%2Btly7qyfpaCwHOshy%2FtISM6WV7ZIxGziFD7g0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgafE0PZ8aA4doE0ircA%2FwueQZx2M%2Fz1c9BxK%2FwOpgS2tb93K2%2BrARmONtsqSHaNgihnY51Per7YgrGfNcGrPizxaHz30mPHlefRq9ClMC9L3sp37x5595HYy8bULDI%2F0r%2BlF9iN%2BbK4UoM4NMXn5%2FY4hNEYkGpPrxYIy82AgrT%2FRnVmu5ByVEK6vHQ7RiMimyjeTZGWMV0KCWHEzSPLwaHLkSqtHBAh2VzHp71kUZKRGziviY993CHm%2BZW6WjF14FyLc43G3LHQkiNEXx3t40ZknGo7GMjA8xGdeM6STRvc6vQEowkb9KqX5HlwbN8fsD0XNC3R%2BC20zwPwBWrp6qCT3gvt87keso60bS%2BGPy4RrLZAECqxZkdF0dabcGGXz%2Fy8MN1mv%2Bb0TUhUIdYQrO2MO0E1QVwu6LUwD1D53HxBi3242zEEbA9bUkxFjTbCRz3W4BPhqp9LtUrkG91W%2BVx0ei3lZx4sP%2BjpHsmQVcrBjHf3zZ%2BcqWsFsnvDDMT%2FQHuYix%2BYEvday0%2BSICDAcciOoB6%2FJ4WIAPzGoRWMgJ3ofAfNPHUZSCJcVZHcHHk6PWSJNcBFnYcIzLqdOtiBjZRJxjJr59ZFggyHVTfhyLmoQB7JfefzCfexMBi%2FXt9Nw%2BMGaeJkUBkdV%2BoMIuGhcEGOqUBCHVW6FVrHss9ct3MESa0RRAcFMoO6KA6HuiU8YzUjiXgtPc061H6xIIvCqeU478agWgIgbNZUxafr%2FfmXcmpTfZfvREnORIUiHzparId82b281h06JTOFNjVrseuhGNMM93qbuz5swgigzFLx%2BkG01lqTEDiYqx5uffigr5DLfJ6XV264B63SbvcTTO3cQJf6gyJrAPA9O5y71diDz1h7WmU3Amw&X-Amz-Signature=c5a1e057a039240045fc11f1af8e5d7dddc61c74f82d99fd8f8ff3d412c80d24&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCG7H4I%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCb0illpmnq2zNPmyXxdQrvCt31%2FmQ1c%2FeWwe%2FXqSUlUQIgeNHDfe%2Btly7qyfpaCwHOshy%2FtISM6WV7ZIxGziFD7g0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgafE0PZ8aA4doE0ircA%2FwueQZx2M%2Fz1c9BxK%2FwOpgS2tb93K2%2BrARmONtsqSHaNgihnY51Per7YgrGfNcGrPizxaHz30mPHlefRq9ClMC9L3sp37x5595HYy8bULDI%2F0r%2BlF9iN%2BbK4UoM4NMXn5%2FY4hNEYkGpPrxYIy82AgrT%2FRnVmu5ByVEK6vHQ7RiMimyjeTZGWMV0KCWHEzSPLwaHLkSqtHBAh2VzHp71kUZKRGziviY993CHm%2BZW6WjF14FyLc43G3LHQkiNEXx3t40ZknGo7GMjA8xGdeM6STRvc6vQEowkb9KqX5HlwbN8fsD0XNC3R%2BC20zwPwBWrp6qCT3gvt87keso60bS%2BGPy4RrLZAECqxZkdF0dabcGGXz%2Fy8MN1mv%2Bb0TUhUIdYQrO2MO0E1QVwu6LUwD1D53HxBi3242zEEbA9bUkxFjTbCRz3W4BPhqp9LtUrkG91W%2BVx0ei3lZx4sP%2BjpHsmQVcrBjHf3zZ%2BcqWsFsnvDDMT%2FQHuYix%2BYEvday0%2BSICDAcciOoB6%2FJ4WIAPzGoRWMgJ3ofAfNPHUZSCJcVZHcHHk6PWSJNcBFnYcIzLqdOtiBjZRJxjJr59ZFggyHVTfhyLmoQB7JfefzCfexMBi%2FXt9Nw%2BMGaeJkUBkdV%2BoMIuGhcEGOqUBCHVW6FVrHss9ct3MESa0RRAcFMoO6KA6HuiU8YzUjiXgtPc061H6xIIvCqeU478agWgIgbNZUxafr%2FfmXcmpTfZfvREnORIUiHzparId82b281h06JTOFNjVrseuhGNMM93qbuz5swgigzFLx%2BkG01lqTEDiYqx5uffigr5DLfJ6XV264B63SbvcTTO3cQJf6gyJrAPA9O5y71diDz1h7WmU3Amw&X-Amz-Signature=e2a7a2a8b82aaf4c2aeb11befd21888f036e06551264a2c72d29cc991cb58b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCG7H4I%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T041404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQCb0illpmnq2zNPmyXxdQrvCt31%2FmQ1c%2FeWwe%2FXqSUlUQIgeNHDfe%2Btly7qyfpaCwHOshy%2FtISM6WV7ZIxGziFD7g0qiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGgafE0PZ8aA4doE0ircA%2FwueQZx2M%2Fz1c9BxK%2FwOpgS2tb93K2%2BrARmONtsqSHaNgihnY51Per7YgrGfNcGrPizxaHz30mPHlefRq9ClMC9L3sp37x5595HYy8bULDI%2F0r%2BlF9iN%2BbK4UoM4NMXn5%2FY4hNEYkGpPrxYIy82AgrT%2FRnVmu5ByVEK6vHQ7RiMimyjeTZGWMV0KCWHEzSPLwaHLkSqtHBAh2VzHp71kUZKRGziviY993CHm%2BZW6WjF14FyLc43G3LHQkiNEXx3t40ZknGo7GMjA8xGdeM6STRvc6vQEowkb9KqX5HlwbN8fsD0XNC3R%2BC20zwPwBWrp6qCT3gvt87keso60bS%2BGPy4RrLZAECqxZkdF0dabcGGXz%2Fy8MN1mv%2Bb0TUhUIdYQrO2MO0E1QVwu6LUwD1D53HxBi3242zEEbA9bUkxFjTbCRz3W4BPhqp9LtUrkG91W%2BVx0ei3lZx4sP%2BjpHsmQVcrBjHf3zZ%2BcqWsFsnvDDMT%2FQHuYix%2BYEvday0%2BSICDAcciOoB6%2FJ4WIAPzGoRWMgJ3ofAfNPHUZSCJcVZHcHHk6PWSJNcBFnYcIzLqdOtiBjZRJxjJr59ZFggyHVTfhyLmoQB7JfefzCfexMBi%2FXt9Nw%2BMGaeJkUBkdV%2BoMIuGhcEGOqUBCHVW6FVrHss9ct3MESa0RRAcFMoO6KA6HuiU8YzUjiXgtPc061H6xIIvCqeU478agWgIgbNZUxafr%2FfmXcmpTfZfvREnORIUiHzparId82b281h06JTOFNjVrseuhGNMM93qbuz5swgigzFLx%2BkG01lqTEDiYqx5uffigr5DLfJ6XV264B63SbvcTTO3cQJf6gyJrAPA9O5y71diDz1h7WmU3Amw&X-Amz-Signature=09fd3bc186e40a7991a7a1dca14ebcadeda0687de792bbd2bf724b7bb0379bb9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

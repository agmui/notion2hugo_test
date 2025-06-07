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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KUULKOZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9MPP9%2BTGMd5PfRD15%2BbR7%2FzqBLwIVwTPelFz%2B%2BOqeSAiBSfajZEmd1s7tOVP5B9GQ9unwgVNzA7ODRacDmBZ%2Bzsir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMvrhXL%2F4oEAhH8VJVKtwDScBLoVUabBmcpNLG%2BydPbOX0MNXLM%2BFKYp3C0KnPxqwQiVHRTc6fU%2FPvc1%2FX4f%2FMKCM3xaCf1fjtx4DyrwSm7xRDbzHdd1otQCePf5s7L2pikRoLsWwEI4%2B4BiirZgvIdqqFqX69fB5pSWRwT0E%2BEfnyGRxmum4GWbOLuZx3rousg5z61do4WN2VhfhoCXd63rSU%2FKtV2nsRr2ZbdSWBuCy6yIcD9Yxl%2FYF2DnkjU6kVxGuc2B0%2BOEypNrh6v1e0VtQsvKlIo8GQNppnoau9MemvVlsfcXQHDTKlU7Fm5Y201gqPjNQFpqUCb5NgjRTYDdj%2FE1ZHcGHF68XitPG30UxU2PMs%2F%2FZ7qe8uES8O%2FVl276CRHDmaKiNaC83Rl6tglChcDuHR2VmIzGH4JMrINZ6Bt8LO1iRQWn%2BWuXS5EuaQcULkP%2BvZWDRxKQjUzTPknn5S7MY%2BYPKCv7t%2Fj2smDdgvGXSzr0Q8AWFniQGfjhBT40DVC1QHs6hZ3kv7PwK3f39baKnAlxl%2F24WAclV12uXEFaaeNbMKMbiAV4CxurSkaqfBdw7B2V%2BySGNcLvrsCOfIMUbxNF3hEq1WJUEWoYBXCYGmm%2FGcmWxAbaJCzt92TkKmovNH%2BaTMKYQw9pWSwgY6pgGe4Yyg6ifX6HopPUjkVMJmCv3a6s998m0RaW7mK5n%2BMlB4GndQxCmmoy5obUGkJY7wY%2FTOYV1b7N3hs6yElSFGZtTm5eG%2FpyPFMp%2BmlxnxwdxpZPeAyM3NacXNy6lBHQ9h2cXvdBZQQDzNvnYpWjhJ0Tbcl75ONK64htIQvE5PK7vRRoyC%2FEd%2BaWFyaoCx470kjVkKKKAlF4KxRTPVFGUtun7BaUyr&X-Amz-Signature=3d2684373600474444f77742a4d8d64c43327a34b356b92a1ea02bd4740f576b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KUULKOZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9MPP9%2BTGMd5PfRD15%2BbR7%2FzqBLwIVwTPelFz%2B%2BOqeSAiBSfajZEmd1s7tOVP5B9GQ9unwgVNzA7ODRacDmBZ%2Bzsir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMvrhXL%2F4oEAhH8VJVKtwDScBLoVUabBmcpNLG%2BydPbOX0MNXLM%2BFKYp3C0KnPxqwQiVHRTc6fU%2FPvc1%2FX4f%2FMKCM3xaCf1fjtx4DyrwSm7xRDbzHdd1otQCePf5s7L2pikRoLsWwEI4%2B4BiirZgvIdqqFqX69fB5pSWRwT0E%2BEfnyGRxmum4GWbOLuZx3rousg5z61do4WN2VhfhoCXd63rSU%2FKtV2nsRr2ZbdSWBuCy6yIcD9Yxl%2FYF2DnkjU6kVxGuc2B0%2BOEypNrh6v1e0VtQsvKlIo8GQNppnoau9MemvVlsfcXQHDTKlU7Fm5Y201gqPjNQFpqUCb5NgjRTYDdj%2FE1ZHcGHF68XitPG30UxU2PMs%2F%2FZ7qe8uES8O%2FVl276CRHDmaKiNaC83Rl6tglChcDuHR2VmIzGH4JMrINZ6Bt8LO1iRQWn%2BWuXS5EuaQcULkP%2BvZWDRxKQjUzTPknn5S7MY%2BYPKCv7t%2Fj2smDdgvGXSzr0Q8AWFniQGfjhBT40DVC1QHs6hZ3kv7PwK3f39baKnAlxl%2F24WAclV12uXEFaaeNbMKMbiAV4CxurSkaqfBdw7B2V%2BySGNcLvrsCOfIMUbxNF3hEq1WJUEWoYBXCYGmm%2FGcmWxAbaJCzt92TkKmovNH%2BaTMKYQw9pWSwgY6pgGe4Yyg6ifX6HopPUjkVMJmCv3a6s998m0RaW7mK5n%2BMlB4GndQxCmmoy5obUGkJY7wY%2FTOYV1b7N3hs6yElSFGZtTm5eG%2FpyPFMp%2BmlxnxwdxpZPeAyM3NacXNy6lBHQ9h2cXvdBZQQDzNvnYpWjhJ0Tbcl75ONK64htIQvE5PK7vRRoyC%2FEd%2BaWFyaoCx470kjVkKKKAlF4KxRTPVFGUtun7BaUyr&X-Amz-Signature=8b3c7392f78086fd02fd1263c3f5371324825d77c97b68bb639ca97ce0d4ff4e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KUULKOZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9MPP9%2BTGMd5PfRD15%2BbR7%2FzqBLwIVwTPelFz%2B%2BOqeSAiBSfajZEmd1s7tOVP5B9GQ9unwgVNzA7ODRacDmBZ%2Bzsir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMvrhXL%2F4oEAhH8VJVKtwDScBLoVUabBmcpNLG%2BydPbOX0MNXLM%2BFKYp3C0KnPxqwQiVHRTc6fU%2FPvc1%2FX4f%2FMKCM3xaCf1fjtx4DyrwSm7xRDbzHdd1otQCePf5s7L2pikRoLsWwEI4%2B4BiirZgvIdqqFqX69fB5pSWRwT0E%2BEfnyGRxmum4GWbOLuZx3rousg5z61do4WN2VhfhoCXd63rSU%2FKtV2nsRr2ZbdSWBuCy6yIcD9Yxl%2FYF2DnkjU6kVxGuc2B0%2BOEypNrh6v1e0VtQsvKlIo8GQNppnoau9MemvVlsfcXQHDTKlU7Fm5Y201gqPjNQFpqUCb5NgjRTYDdj%2FE1ZHcGHF68XitPG30UxU2PMs%2F%2FZ7qe8uES8O%2FVl276CRHDmaKiNaC83Rl6tglChcDuHR2VmIzGH4JMrINZ6Bt8LO1iRQWn%2BWuXS5EuaQcULkP%2BvZWDRxKQjUzTPknn5S7MY%2BYPKCv7t%2Fj2smDdgvGXSzr0Q8AWFniQGfjhBT40DVC1QHs6hZ3kv7PwK3f39baKnAlxl%2F24WAclV12uXEFaaeNbMKMbiAV4CxurSkaqfBdw7B2V%2BySGNcLvrsCOfIMUbxNF3hEq1WJUEWoYBXCYGmm%2FGcmWxAbaJCzt92TkKmovNH%2BaTMKYQw9pWSwgY6pgGe4Yyg6ifX6HopPUjkVMJmCv3a6s998m0RaW7mK5n%2BMlB4GndQxCmmoy5obUGkJY7wY%2FTOYV1b7N3hs6yElSFGZtTm5eG%2FpyPFMp%2BmlxnxwdxpZPeAyM3NacXNy6lBHQ9h2cXvdBZQQDzNvnYpWjhJ0Tbcl75ONK64htIQvE5PK7vRRoyC%2FEd%2BaWFyaoCx470kjVkKKKAlF4KxRTPVFGUtun7BaUyr&X-Amz-Signature=627bbc29ae867602539d655d6ad0157401a13668c821f0e0146e9b4bc76258e0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KUULKOZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9MPP9%2BTGMd5PfRD15%2BbR7%2FzqBLwIVwTPelFz%2B%2BOqeSAiBSfajZEmd1s7tOVP5B9GQ9unwgVNzA7ODRacDmBZ%2Bzsir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMvrhXL%2F4oEAhH8VJVKtwDScBLoVUabBmcpNLG%2BydPbOX0MNXLM%2BFKYp3C0KnPxqwQiVHRTc6fU%2FPvc1%2FX4f%2FMKCM3xaCf1fjtx4DyrwSm7xRDbzHdd1otQCePf5s7L2pikRoLsWwEI4%2B4BiirZgvIdqqFqX69fB5pSWRwT0E%2BEfnyGRxmum4GWbOLuZx3rousg5z61do4WN2VhfhoCXd63rSU%2FKtV2nsRr2ZbdSWBuCy6yIcD9Yxl%2FYF2DnkjU6kVxGuc2B0%2BOEypNrh6v1e0VtQsvKlIo8GQNppnoau9MemvVlsfcXQHDTKlU7Fm5Y201gqPjNQFpqUCb5NgjRTYDdj%2FE1ZHcGHF68XitPG30UxU2PMs%2F%2FZ7qe8uES8O%2FVl276CRHDmaKiNaC83Rl6tglChcDuHR2VmIzGH4JMrINZ6Bt8LO1iRQWn%2BWuXS5EuaQcULkP%2BvZWDRxKQjUzTPknn5S7MY%2BYPKCv7t%2Fj2smDdgvGXSzr0Q8AWFniQGfjhBT40DVC1QHs6hZ3kv7PwK3f39baKnAlxl%2F24WAclV12uXEFaaeNbMKMbiAV4CxurSkaqfBdw7B2V%2BySGNcLvrsCOfIMUbxNF3hEq1WJUEWoYBXCYGmm%2FGcmWxAbaJCzt92TkKmovNH%2BaTMKYQw9pWSwgY6pgGe4Yyg6ifX6HopPUjkVMJmCv3a6s998m0RaW7mK5n%2BMlB4GndQxCmmoy5obUGkJY7wY%2FTOYV1b7N3hs6yElSFGZtTm5eG%2FpyPFMp%2BmlxnxwdxpZPeAyM3NacXNy6lBHQ9h2cXvdBZQQDzNvnYpWjhJ0Tbcl75ONK64htIQvE5PK7vRRoyC%2FEd%2BaWFyaoCx470kjVkKKKAlF4KxRTPVFGUtun7BaUyr&X-Amz-Signature=b4bb0b5ddbe7c1f448795771ef03ccb7463635abd86a7c65b9896e8421829202&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KUULKOZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9MPP9%2BTGMd5PfRD15%2BbR7%2FzqBLwIVwTPelFz%2B%2BOqeSAiBSfajZEmd1s7tOVP5B9GQ9unwgVNzA7ODRacDmBZ%2Bzsir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMvrhXL%2F4oEAhH8VJVKtwDScBLoVUabBmcpNLG%2BydPbOX0MNXLM%2BFKYp3C0KnPxqwQiVHRTc6fU%2FPvc1%2FX4f%2FMKCM3xaCf1fjtx4DyrwSm7xRDbzHdd1otQCePf5s7L2pikRoLsWwEI4%2B4BiirZgvIdqqFqX69fB5pSWRwT0E%2BEfnyGRxmum4GWbOLuZx3rousg5z61do4WN2VhfhoCXd63rSU%2FKtV2nsRr2ZbdSWBuCy6yIcD9Yxl%2FYF2DnkjU6kVxGuc2B0%2BOEypNrh6v1e0VtQsvKlIo8GQNppnoau9MemvVlsfcXQHDTKlU7Fm5Y201gqPjNQFpqUCb5NgjRTYDdj%2FE1ZHcGHF68XitPG30UxU2PMs%2F%2FZ7qe8uES8O%2FVl276CRHDmaKiNaC83Rl6tglChcDuHR2VmIzGH4JMrINZ6Bt8LO1iRQWn%2BWuXS5EuaQcULkP%2BvZWDRxKQjUzTPknn5S7MY%2BYPKCv7t%2Fj2smDdgvGXSzr0Q8AWFniQGfjhBT40DVC1QHs6hZ3kv7PwK3f39baKnAlxl%2F24WAclV12uXEFaaeNbMKMbiAV4CxurSkaqfBdw7B2V%2BySGNcLvrsCOfIMUbxNF3hEq1WJUEWoYBXCYGmm%2FGcmWxAbaJCzt92TkKmovNH%2BaTMKYQw9pWSwgY6pgGe4Yyg6ifX6HopPUjkVMJmCv3a6s998m0RaW7mK5n%2BMlB4GndQxCmmoy5obUGkJY7wY%2FTOYV1b7N3hs6yElSFGZtTm5eG%2FpyPFMp%2BmlxnxwdxpZPeAyM3NacXNy6lBHQ9h2cXvdBZQQDzNvnYpWjhJ0Tbcl75ONK64htIQvE5PK7vRRoyC%2FEd%2BaWFyaoCx470kjVkKKKAlF4KxRTPVFGUtun7BaUyr&X-Amz-Signature=edfb065e8b1a6784b0fa87793173133d03c0d4ffb64b99479e8c68cd98daa84e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KUULKOZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9MPP9%2BTGMd5PfRD15%2BbR7%2FzqBLwIVwTPelFz%2B%2BOqeSAiBSfajZEmd1s7tOVP5B9GQ9unwgVNzA7ODRacDmBZ%2Bzsir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMvrhXL%2F4oEAhH8VJVKtwDScBLoVUabBmcpNLG%2BydPbOX0MNXLM%2BFKYp3C0KnPxqwQiVHRTc6fU%2FPvc1%2FX4f%2FMKCM3xaCf1fjtx4DyrwSm7xRDbzHdd1otQCePf5s7L2pikRoLsWwEI4%2B4BiirZgvIdqqFqX69fB5pSWRwT0E%2BEfnyGRxmum4GWbOLuZx3rousg5z61do4WN2VhfhoCXd63rSU%2FKtV2nsRr2ZbdSWBuCy6yIcD9Yxl%2FYF2DnkjU6kVxGuc2B0%2BOEypNrh6v1e0VtQsvKlIo8GQNppnoau9MemvVlsfcXQHDTKlU7Fm5Y201gqPjNQFpqUCb5NgjRTYDdj%2FE1ZHcGHF68XitPG30UxU2PMs%2F%2FZ7qe8uES8O%2FVl276CRHDmaKiNaC83Rl6tglChcDuHR2VmIzGH4JMrINZ6Bt8LO1iRQWn%2BWuXS5EuaQcULkP%2BvZWDRxKQjUzTPknn5S7MY%2BYPKCv7t%2Fj2smDdgvGXSzr0Q8AWFniQGfjhBT40DVC1QHs6hZ3kv7PwK3f39baKnAlxl%2F24WAclV12uXEFaaeNbMKMbiAV4CxurSkaqfBdw7B2V%2BySGNcLvrsCOfIMUbxNF3hEq1WJUEWoYBXCYGmm%2FGcmWxAbaJCzt92TkKmovNH%2BaTMKYQw9pWSwgY6pgGe4Yyg6ifX6HopPUjkVMJmCv3a6s998m0RaW7mK5n%2BMlB4GndQxCmmoy5obUGkJY7wY%2FTOYV1b7N3hs6yElSFGZtTm5eG%2FpyPFMp%2BmlxnxwdxpZPeAyM3NacXNy6lBHQ9h2cXvdBZQQDzNvnYpWjhJ0Tbcl75ONK64htIQvE5PK7vRRoyC%2FEd%2BaWFyaoCx470kjVkKKKAlF4KxRTPVFGUtun7BaUyr&X-Amz-Signature=f4468e401d5f32bc274352c0f0d8bd3f2296aefdc3b7b94773e82d3662d677eb&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KUULKOZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9MPP9%2BTGMd5PfRD15%2BbR7%2FzqBLwIVwTPelFz%2B%2BOqeSAiBSfajZEmd1s7tOVP5B9GQ9unwgVNzA7ODRacDmBZ%2Bzsir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMvrhXL%2F4oEAhH8VJVKtwDScBLoVUabBmcpNLG%2BydPbOX0MNXLM%2BFKYp3C0KnPxqwQiVHRTc6fU%2FPvc1%2FX4f%2FMKCM3xaCf1fjtx4DyrwSm7xRDbzHdd1otQCePf5s7L2pikRoLsWwEI4%2B4BiirZgvIdqqFqX69fB5pSWRwT0E%2BEfnyGRxmum4GWbOLuZx3rousg5z61do4WN2VhfhoCXd63rSU%2FKtV2nsRr2ZbdSWBuCy6yIcD9Yxl%2FYF2DnkjU6kVxGuc2B0%2BOEypNrh6v1e0VtQsvKlIo8GQNppnoau9MemvVlsfcXQHDTKlU7Fm5Y201gqPjNQFpqUCb5NgjRTYDdj%2FE1ZHcGHF68XitPG30UxU2PMs%2F%2FZ7qe8uES8O%2FVl276CRHDmaKiNaC83Rl6tglChcDuHR2VmIzGH4JMrINZ6Bt8LO1iRQWn%2BWuXS5EuaQcULkP%2BvZWDRxKQjUzTPknn5S7MY%2BYPKCv7t%2Fj2smDdgvGXSzr0Q8AWFniQGfjhBT40DVC1QHs6hZ3kv7PwK3f39baKnAlxl%2F24WAclV12uXEFaaeNbMKMbiAV4CxurSkaqfBdw7B2V%2BySGNcLvrsCOfIMUbxNF3hEq1WJUEWoYBXCYGmm%2FGcmWxAbaJCzt92TkKmovNH%2BaTMKYQw9pWSwgY6pgGe4Yyg6ifX6HopPUjkVMJmCv3a6s998m0RaW7mK5n%2BMlB4GndQxCmmoy5obUGkJY7wY%2FTOYV1b7N3hs6yElSFGZtTm5eG%2FpyPFMp%2BmlxnxwdxpZPeAyM3NacXNy6lBHQ9h2cXvdBZQQDzNvnYpWjhJ0Tbcl75ONK64htIQvE5PK7vRRoyC%2FEd%2BaWFyaoCx470kjVkKKKAlF4KxRTPVFGUtun7BaUyr&X-Amz-Signature=d89a0f7145ca49950ba73e0a79ae1304de774800f6fa049a13d882edbcf4f2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

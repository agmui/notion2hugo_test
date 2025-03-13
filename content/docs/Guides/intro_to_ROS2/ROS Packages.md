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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKE3XUD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs1oMIlK7bNhMgqHPMdHfKg0T0PCg61NVgzGr3hKjG2AiB4LoRV5mSLy4Bxn1r0uUvs4srF2lHzMXYBYNw0q9OVZiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3O8CzAKTE676xsWHKtwD5AI9%2BUGnfEnVTnyz2lC4VOj%2F8sKtX2eePfHwSha%2BoGUkYI8Qy7Jdn2WJLs0tfE8KgvSQ9XEoZ23rRYKKeCl9P1%2F6coWRYofle5qHuy2OcUvaNQL1G0iWhuU7c30yvRIVP73aOBLdRMRwRfY5%2FkP7Ra%2BXSRpER2Pney%2BH8dW4AK%2BlIaNG38YdoD5sTXAHhasMnD0LIf%2F9TW3%2FzLU5SPLwuERBES6uVy683o70RbHJuullQ%2Bwv%2Fgcvb4a3QGYzPs3G1%2B0UVAJWznu9iCc8yABu97VtEC%2Fu1hExvbMUnP99CtU4VhmQAeXT951lo20r6gVPGcwrLq0hEoMGJ1dGMoVl16%2BgsaDMQmiioReOfe47m92%2FvY1TgF3jHfLNNrBh76cnpioxbjlZwHRnWnT48BcwLw%2BAL1FJ8czDHHBGmHYEBLLbJ8tOMbasEp6rnN4aQVSffNalD9ZBpcFydCA%2FPJELZgUeZCjX3HABkQ5wbeu%2FhrkpOzwHx82Q%2BiJRdGPRTIWIS8z4YO%2FNLylvySYS4c6G7FffmucFWPu1M%2FnC1ffOx3wYYaWBzGYQ5%2BtKKR4f17nMeq1G70TOeooeG1Nz0%2F7jtMcQ8ZHYArhbQb3oJfWlhJfoaZgo8i6cwoBfiC0w5MHKvgY6pgGoRjfRa%2FCarGwE376CFHMJ1qSqUkqLXO0WFX2dhJtNgb4y5eE%2FV2MIi1bru4rNt4ezF5N6MGHoHKD0quV9%2Blztmo75E1mJ5KpcCk4FeqBigaAv6lqwD6FJG%2BZ5wnP2196x4hyX8%2FtfSp1YPPscKVRdN5LpNJTBuE%2FhaU1HetAaY2MMMjAsMQP8wWSX2WnmiWmVMOhA9CW9dE1cm5pxJv91IU97%2BZDa&X-Amz-Signature=b649fda8544e3c36650b08a1a94548c64e99493c2b609a7cb1c68599ac918a15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKE3XUD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs1oMIlK7bNhMgqHPMdHfKg0T0PCg61NVgzGr3hKjG2AiB4LoRV5mSLy4Bxn1r0uUvs4srF2lHzMXYBYNw0q9OVZiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3O8CzAKTE676xsWHKtwD5AI9%2BUGnfEnVTnyz2lC4VOj%2F8sKtX2eePfHwSha%2BoGUkYI8Qy7Jdn2WJLs0tfE8KgvSQ9XEoZ23rRYKKeCl9P1%2F6coWRYofle5qHuy2OcUvaNQL1G0iWhuU7c30yvRIVP73aOBLdRMRwRfY5%2FkP7Ra%2BXSRpER2Pney%2BH8dW4AK%2BlIaNG38YdoD5sTXAHhasMnD0LIf%2F9TW3%2FzLU5SPLwuERBES6uVy683o70RbHJuullQ%2Bwv%2Fgcvb4a3QGYzPs3G1%2B0UVAJWznu9iCc8yABu97VtEC%2Fu1hExvbMUnP99CtU4VhmQAeXT951lo20r6gVPGcwrLq0hEoMGJ1dGMoVl16%2BgsaDMQmiioReOfe47m92%2FvY1TgF3jHfLNNrBh76cnpioxbjlZwHRnWnT48BcwLw%2BAL1FJ8czDHHBGmHYEBLLbJ8tOMbasEp6rnN4aQVSffNalD9ZBpcFydCA%2FPJELZgUeZCjX3HABkQ5wbeu%2FhrkpOzwHx82Q%2BiJRdGPRTIWIS8z4YO%2FNLylvySYS4c6G7FffmucFWPu1M%2FnC1ffOx3wYYaWBzGYQ5%2BtKKR4f17nMeq1G70TOeooeG1Nz0%2F7jtMcQ8ZHYArhbQb3oJfWlhJfoaZgo8i6cwoBfiC0w5MHKvgY6pgGoRjfRa%2FCarGwE376CFHMJ1qSqUkqLXO0WFX2dhJtNgb4y5eE%2FV2MIi1bru4rNt4ezF5N6MGHoHKD0quV9%2Blztmo75E1mJ5KpcCk4FeqBigaAv6lqwD6FJG%2BZ5wnP2196x4hyX8%2FtfSp1YPPscKVRdN5LpNJTBuE%2FhaU1HetAaY2MMMjAsMQP8wWSX2WnmiWmVMOhA9CW9dE1cm5pxJv91IU97%2BZDa&X-Amz-Signature=208e51310f73c92bbc42cbbdfb5f9853492264328905032ff76ef6414c92b2b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKE3XUD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs1oMIlK7bNhMgqHPMdHfKg0T0PCg61NVgzGr3hKjG2AiB4LoRV5mSLy4Bxn1r0uUvs4srF2lHzMXYBYNw0q9OVZiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3O8CzAKTE676xsWHKtwD5AI9%2BUGnfEnVTnyz2lC4VOj%2F8sKtX2eePfHwSha%2BoGUkYI8Qy7Jdn2WJLs0tfE8KgvSQ9XEoZ23rRYKKeCl9P1%2F6coWRYofle5qHuy2OcUvaNQL1G0iWhuU7c30yvRIVP73aOBLdRMRwRfY5%2FkP7Ra%2BXSRpER2Pney%2BH8dW4AK%2BlIaNG38YdoD5sTXAHhasMnD0LIf%2F9TW3%2FzLU5SPLwuERBES6uVy683o70RbHJuullQ%2Bwv%2Fgcvb4a3QGYzPs3G1%2B0UVAJWznu9iCc8yABu97VtEC%2Fu1hExvbMUnP99CtU4VhmQAeXT951lo20r6gVPGcwrLq0hEoMGJ1dGMoVl16%2BgsaDMQmiioReOfe47m92%2FvY1TgF3jHfLNNrBh76cnpioxbjlZwHRnWnT48BcwLw%2BAL1FJ8czDHHBGmHYEBLLbJ8tOMbasEp6rnN4aQVSffNalD9ZBpcFydCA%2FPJELZgUeZCjX3HABkQ5wbeu%2FhrkpOzwHx82Q%2BiJRdGPRTIWIS8z4YO%2FNLylvySYS4c6G7FffmucFWPu1M%2FnC1ffOx3wYYaWBzGYQ5%2BtKKR4f17nMeq1G70TOeooeG1Nz0%2F7jtMcQ8ZHYArhbQb3oJfWlhJfoaZgo8i6cwoBfiC0w5MHKvgY6pgGoRjfRa%2FCarGwE376CFHMJ1qSqUkqLXO0WFX2dhJtNgb4y5eE%2FV2MIi1bru4rNt4ezF5N6MGHoHKD0quV9%2Blztmo75E1mJ5KpcCk4FeqBigaAv6lqwD6FJG%2BZ5wnP2196x4hyX8%2FtfSp1YPPscKVRdN5LpNJTBuE%2FhaU1HetAaY2MMMjAsMQP8wWSX2WnmiWmVMOhA9CW9dE1cm5pxJv91IU97%2BZDa&X-Amz-Signature=a0562ba72c18afb469ab80d107589f6c8b1ee034a9c9ee5c3b86ad842636bb18&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKE3XUD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs1oMIlK7bNhMgqHPMdHfKg0T0PCg61NVgzGr3hKjG2AiB4LoRV5mSLy4Bxn1r0uUvs4srF2lHzMXYBYNw0q9OVZiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3O8CzAKTE676xsWHKtwD5AI9%2BUGnfEnVTnyz2lC4VOj%2F8sKtX2eePfHwSha%2BoGUkYI8Qy7Jdn2WJLs0tfE8KgvSQ9XEoZ23rRYKKeCl9P1%2F6coWRYofle5qHuy2OcUvaNQL1G0iWhuU7c30yvRIVP73aOBLdRMRwRfY5%2FkP7Ra%2BXSRpER2Pney%2BH8dW4AK%2BlIaNG38YdoD5sTXAHhasMnD0LIf%2F9TW3%2FzLU5SPLwuERBES6uVy683o70RbHJuullQ%2Bwv%2Fgcvb4a3QGYzPs3G1%2B0UVAJWznu9iCc8yABu97VtEC%2Fu1hExvbMUnP99CtU4VhmQAeXT951lo20r6gVPGcwrLq0hEoMGJ1dGMoVl16%2BgsaDMQmiioReOfe47m92%2FvY1TgF3jHfLNNrBh76cnpioxbjlZwHRnWnT48BcwLw%2BAL1FJ8czDHHBGmHYEBLLbJ8tOMbasEp6rnN4aQVSffNalD9ZBpcFydCA%2FPJELZgUeZCjX3HABkQ5wbeu%2FhrkpOzwHx82Q%2BiJRdGPRTIWIS8z4YO%2FNLylvySYS4c6G7FffmucFWPu1M%2FnC1ffOx3wYYaWBzGYQ5%2BtKKR4f17nMeq1G70TOeooeG1Nz0%2F7jtMcQ8ZHYArhbQb3oJfWlhJfoaZgo8i6cwoBfiC0w5MHKvgY6pgGoRjfRa%2FCarGwE376CFHMJ1qSqUkqLXO0WFX2dhJtNgb4y5eE%2FV2MIi1bru4rNt4ezF5N6MGHoHKD0quV9%2Blztmo75E1mJ5KpcCk4FeqBigaAv6lqwD6FJG%2BZ5wnP2196x4hyX8%2FtfSp1YPPscKVRdN5LpNJTBuE%2FhaU1HetAaY2MMMjAsMQP8wWSX2WnmiWmVMOhA9CW9dE1cm5pxJv91IU97%2BZDa&X-Amz-Signature=a4d5867d898155da53f41282aa82ab06dcd528de055f8db78bbcc12a35366552&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKE3XUD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs1oMIlK7bNhMgqHPMdHfKg0T0PCg61NVgzGr3hKjG2AiB4LoRV5mSLy4Bxn1r0uUvs4srF2lHzMXYBYNw0q9OVZiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3O8CzAKTE676xsWHKtwD5AI9%2BUGnfEnVTnyz2lC4VOj%2F8sKtX2eePfHwSha%2BoGUkYI8Qy7Jdn2WJLs0tfE8KgvSQ9XEoZ23rRYKKeCl9P1%2F6coWRYofle5qHuy2OcUvaNQL1G0iWhuU7c30yvRIVP73aOBLdRMRwRfY5%2FkP7Ra%2BXSRpER2Pney%2BH8dW4AK%2BlIaNG38YdoD5sTXAHhasMnD0LIf%2F9TW3%2FzLU5SPLwuERBES6uVy683o70RbHJuullQ%2Bwv%2Fgcvb4a3QGYzPs3G1%2B0UVAJWznu9iCc8yABu97VtEC%2Fu1hExvbMUnP99CtU4VhmQAeXT951lo20r6gVPGcwrLq0hEoMGJ1dGMoVl16%2BgsaDMQmiioReOfe47m92%2FvY1TgF3jHfLNNrBh76cnpioxbjlZwHRnWnT48BcwLw%2BAL1FJ8czDHHBGmHYEBLLbJ8tOMbasEp6rnN4aQVSffNalD9ZBpcFydCA%2FPJELZgUeZCjX3HABkQ5wbeu%2FhrkpOzwHx82Q%2BiJRdGPRTIWIS8z4YO%2FNLylvySYS4c6G7FffmucFWPu1M%2FnC1ffOx3wYYaWBzGYQ5%2BtKKR4f17nMeq1G70TOeooeG1Nz0%2F7jtMcQ8ZHYArhbQb3oJfWlhJfoaZgo8i6cwoBfiC0w5MHKvgY6pgGoRjfRa%2FCarGwE376CFHMJ1qSqUkqLXO0WFX2dhJtNgb4y5eE%2FV2MIi1bru4rNt4ezF5N6MGHoHKD0quV9%2Blztmo75E1mJ5KpcCk4FeqBigaAv6lqwD6FJG%2BZ5wnP2196x4hyX8%2FtfSp1YPPscKVRdN5LpNJTBuE%2FhaU1HetAaY2MMMjAsMQP8wWSX2WnmiWmVMOhA9CW9dE1cm5pxJv91IU97%2BZDa&X-Amz-Signature=cfa1929925c11fcc81a110e877b07b08ad8e0668ebc3c5a8bc4b6a32eca898a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKE3XUD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs1oMIlK7bNhMgqHPMdHfKg0T0PCg61NVgzGr3hKjG2AiB4LoRV5mSLy4Bxn1r0uUvs4srF2lHzMXYBYNw0q9OVZiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3O8CzAKTE676xsWHKtwD5AI9%2BUGnfEnVTnyz2lC4VOj%2F8sKtX2eePfHwSha%2BoGUkYI8Qy7Jdn2WJLs0tfE8KgvSQ9XEoZ23rRYKKeCl9P1%2F6coWRYofle5qHuy2OcUvaNQL1G0iWhuU7c30yvRIVP73aOBLdRMRwRfY5%2FkP7Ra%2BXSRpER2Pney%2BH8dW4AK%2BlIaNG38YdoD5sTXAHhasMnD0LIf%2F9TW3%2FzLU5SPLwuERBES6uVy683o70RbHJuullQ%2Bwv%2Fgcvb4a3QGYzPs3G1%2B0UVAJWznu9iCc8yABu97VtEC%2Fu1hExvbMUnP99CtU4VhmQAeXT951lo20r6gVPGcwrLq0hEoMGJ1dGMoVl16%2BgsaDMQmiioReOfe47m92%2FvY1TgF3jHfLNNrBh76cnpioxbjlZwHRnWnT48BcwLw%2BAL1FJ8czDHHBGmHYEBLLbJ8tOMbasEp6rnN4aQVSffNalD9ZBpcFydCA%2FPJELZgUeZCjX3HABkQ5wbeu%2FhrkpOzwHx82Q%2BiJRdGPRTIWIS8z4YO%2FNLylvySYS4c6G7FffmucFWPu1M%2FnC1ffOx3wYYaWBzGYQ5%2BtKKR4f17nMeq1G70TOeooeG1Nz0%2F7jtMcQ8ZHYArhbQb3oJfWlhJfoaZgo8i6cwoBfiC0w5MHKvgY6pgGoRjfRa%2FCarGwE376CFHMJ1qSqUkqLXO0WFX2dhJtNgb4y5eE%2FV2MIi1bru4rNt4ezF5N6MGHoHKD0quV9%2Blztmo75E1mJ5KpcCk4FeqBigaAv6lqwD6FJG%2BZ5wnP2196x4hyX8%2FtfSp1YPPscKVRdN5LpNJTBuE%2FhaU1HetAaY2MMMjAsMQP8wWSX2WnmiWmVMOhA9CW9dE1cm5pxJv91IU97%2BZDa&X-Amz-Signature=7a0358ca047835f21f31989fbc7fb4803ba7d91fe0b58a97784b98ad04b37c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRKE3XUD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs1oMIlK7bNhMgqHPMdHfKg0T0PCg61NVgzGr3hKjG2AiB4LoRV5mSLy4Bxn1r0uUvs4srF2lHzMXYBYNw0q9OVZiqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3O8CzAKTE676xsWHKtwD5AI9%2BUGnfEnVTnyz2lC4VOj%2F8sKtX2eePfHwSha%2BoGUkYI8Qy7Jdn2WJLs0tfE8KgvSQ9XEoZ23rRYKKeCl9P1%2F6coWRYofle5qHuy2OcUvaNQL1G0iWhuU7c30yvRIVP73aOBLdRMRwRfY5%2FkP7Ra%2BXSRpER2Pney%2BH8dW4AK%2BlIaNG38YdoD5sTXAHhasMnD0LIf%2F9TW3%2FzLU5SPLwuERBES6uVy683o70RbHJuullQ%2Bwv%2Fgcvb4a3QGYzPs3G1%2B0UVAJWznu9iCc8yABu97VtEC%2Fu1hExvbMUnP99CtU4VhmQAeXT951lo20r6gVPGcwrLq0hEoMGJ1dGMoVl16%2BgsaDMQmiioReOfe47m92%2FvY1TgF3jHfLNNrBh76cnpioxbjlZwHRnWnT48BcwLw%2BAL1FJ8czDHHBGmHYEBLLbJ8tOMbasEp6rnN4aQVSffNalD9ZBpcFydCA%2FPJELZgUeZCjX3HABkQ5wbeu%2FhrkpOzwHx82Q%2BiJRdGPRTIWIS8z4YO%2FNLylvySYS4c6G7FffmucFWPu1M%2FnC1ffOx3wYYaWBzGYQ5%2BtKKR4f17nMeq1G70TOeooeG1Nz0%2F7jtMcQ8ZHYArhbQb3oJfWlhJfoaZgo8i6cwoBfiC0w5MHKvgY6pgGoRjfRa%2FCarGwE376CFHMJ1qSqUkqLXO0WFX2dhJtNgb4y5eE%2FV2MIi1bru4rNt4ezF5N6MGHoHKD0quV9%2Blztmo75E1mJ5KpcCk4FeqBigaAv6lqwD6FJG%2BZ5wnP2196x4hyX8%2FtfSp1YPPscKVRdN5LpNJTBuE%2FhaU1HetAaY2MMMjAsMQP8wWSX2WnmiWmVMOhA9CW9dE1cm5pxJv91IU97%2BZDa&X-Amz-Signature=4e9038c054b1ad2849fa39cdaccc6eb8c99bec0635a4c04935a222ec1ee03d7e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

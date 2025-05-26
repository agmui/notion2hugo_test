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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466626P7GT3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEFdgq3yvVT0JfM2%2FXfUfkUJRMtw%2FEMAiFWis%2FDTEmxUAiEAuQQTni41KySk8KX2hepq9ss%2FReTbjmTFH%2B%2Fl0UnTSZ0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAIEX%2BcD2DcVWnlpayrcA8YelCfO4vf7hTvuX3rjZxIogVjT%2BKYYJyT578Snq8pE8v%2BwSlEO9Eqo36nN97H2YsPdDHt%2B0f4bo%2BS9aVL4owIbPkUljyu0BEy4N8gOxgNBGtCUFjAiqgNJK3%2BQSDzCQ3K7PodHWFNLiY8iw%2Fr%2FcwRhVqXY3BfQcqhrsgRYuwQpGXdZLvC09uXhBB0jjfu8LTxHJ%2FeggB221MYE9B4x3fYLN3HuyPYZGUQkGUnxpX6nMXOXJmPsizZeUEoIvSai%2FMg8nVMX5Ayg%2F%2Fr%2FzjlvjeIB2dltOaammLz86TMct9WOv8xOaA5rE9hRI4kikZz9Gp24Elz6cwvOlq3NNQ9XUmIrVanLjd4hUROZIe0rA6gCKmtpCoe%2FrulHUpfoEgdWnXA%2FZ%2B6uDt3BcfhPbqzxkSr5YgwgREClzt6i1uDW3ImqbOjoBnZlclaDnb6GAcY19nSXBsIZ4ImudQr%2F7e3oi3gGUOsnsAYI6dqfz%2F1PFhUvg69Zaa5sBmLBU6vZZiraVMh2bz%2FDF%2FoTcF23nJ5QD3bpa%2F%2BBScRr4SChB8Kd3IFZQIqErOpas9drEuLBY1yOr%2FMQ5uX1J5zUmbrKecwJVjfAwxagSPRKYBQUPZ03gx9zjia3I4ocq4py9rp7MNOq0cEGOqUBbj6iblMdls6Oy9gBBQtZ83zRyCdoSmZ%2FVoCV%2Bvfi4a63mZ%2BmWfc8DjCrG70ivMIo8MCswq6JdUB4Ac%2FmTgUkzIjzWcWLWa69zyO70xiQA7XISlwqvvcUkj150VOrguZS896dpGgUu8I%2B2bSZxpD1W5sT6p38u0Uhb3XdeXQIAOu5Fi9C8NnssY7fr8XBWEwBuZRbn7D6BwndC6vLB%2FtMvBNF%2BMd0&X-Amz-Signature=8a70024b7ea93084db42753194648e956b5006e94612fd06cab6d3b82bd9fa0b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466626P7GT3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEFdgq3yvVT0JfM2%2FXfUfkUJRMtw%2FEMAiFWis%2FDTEmxUAiEAuQQTni41KySk8KX2hepq9ss%2FReTbjmTFH%2B%2Fl0UnTSZ0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAIEX%2BcD2DcVWnlpayrcA8YelCfO4vf7hTvuX3rjZxIogVjT%2BKYYJyT578Snq8pE8v%2BwSlEO9Eqo36nN97H2YsPdDHt%2B0f4bo%2BS9aVL4owIbPkUljyu0BEy4N8gOxgNBGtCUFjAiqgNJK3%2BQSDzCQ3K7PodHWFNLiY8iw%2Fr%2FcwRhVqXY3BfQcqhrsgRYuwQpGXdZLvC09uXhBB0jjfu8LTxHJ%2FeggB221MYE9B4x3fYLN3HuyPYZGUQkGUnxpX6nMXOXJmPsizZeUEoIvSai%2FMg8nVMX5Ayg%2F%2Fr%2FzjlvjeIB2dltOaammLz86TMct9WOv8xOaA5rE9hRI4kikZz9Gp24Elz6cwvOlq3NNQ9XUmIrVanLjd4hUROZIe0rA6gCKmtpCoe%2FrulHUpfoEgdWnXA%2FZ%2B6uDt3BcfhPbqzxkSr5YgwgREClzt6i1uDW3ImqbOjoBnZlclaDnb6GAcY19nSXBsIZ4ImudQr%2F7e3oi3gGUOsnsAYI6dqfz%2F1PFhUvg69Zaa5sBmLBU6vZZiraVMh2bz%2FDF%2FoTcF23nJ5QD3bpa%2F%2BBScRr4SChB8Kd3IFZQIqErOpas9drEuLBY1yOr%2FMQ5uX1J5zUmbrKecwJVjfAwxagSPRKYBQUPZ03gx9zjia3I4ocq4py9rp7MNOq0cEGOqUBbj6iblMdls6Oy9gBBQtZ83zRyCdoSmZ%2FVoCV%2Bvfi4a63mZ%2BmWfc8DjCrG70ivMIo8MCswq6JdUB4Ac%2FmTgUkzIjzWcWLWa69zyO70xiQA7XISlwqvvcUkj150VOrguZS896dpGgUu8I%2B2bSZxpD1W5sT6p38u0Uhb3XdeXQIAOu5Fi9C8NnssY7fr8XBWEwBuZRbn7D6BwndC6vLB%2FtMvBNF%2BMd0&X-Amz-Signature=595b38b0f65e35b017e3395d5ebb9e96ab2e14c26f5aedf805179cd7f938dc2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466626P7GT3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEFdgq3yvVT0JfM2%2FXfUfkUJRMtw%2FEMAiFWis%2FDTEmxUAiEAuQQTni41KySk8KX2hepq9ss%2FReTbjmTFH%2B%2Fl0UnTSZ0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAIEX%2BcD2DcVWnlpayrcA8YelCfO4vf7hTvuX3rjZxIogVjT%2BKYYJyT578Snq8pE8v%2BwSlEO9Eqo36nN97H2YsPdDHt%2B0f4bo%2BS9aVL4owIbPkUljyu0BEy4N8gOxgNBGtCUFjAiqgNJK3%2BQSDzCQ3K7PodHWFNLiY8iw%2Fr%2FcwRhVqXY3BfQcqhrsgRYuwQpGXdZLvC09uXhBB0jjfu8LTxHJ%2FeggB221MYE9B4x3fYLN3HuyPYZGUQkGUnxpX6nMXOXJmPsizZeUEoIvSai%2FMg8nVMX5Ayg%2F%2Fr%2FzjlvjeIB2dltOaammLz86TMct9WOv8xOaA5rE9hRI4kikZz9Gp24Elz6cwvOlq3NNQ9XUmIrVanLjd4hUROZIe0rA6gCKmtpCoe%2FrulHUpfoEgdWnXA%2FZ%2B6uDt3BcfhPbqzxkSr5YgwgREClzt6i1uDW3ImqbOjoBnZlclaDnb6GAcY19nSXBsIZ4ImudQr%2F7e3oi3gGUOsnsAYI6dqfz%2F1PFhUvg69Zaa5sBmLBU6vZZiraVMh2bz%2FDF%2FoTcF23nJ5QD3bpa%2F%2BBScRr4SChB8Kd3IFZQIqErOpas9drEuLBY1yOr%2FMQ5uX1J5zUmbrKecwJVjfAwxagSPRKYBQUPZ03gx9zjia3I4ocq4py9rp7MNOq0cEGOqUBbj6iblMdls6Oy9gBBQtZ83zRyCdoSmZ%2FVoCV%2Bvfi4a63mZ%2BmWfc8DjCrG70ivMIo8MCswq6JdUB4Ac%2FmTgUkzIjzWcWLWa69zyO70xiQA7XISlwqvvcUkj150VOrguZS896dpGgUu8I%2B2bSZxpD1W5sT6p38u0Uhb3XdeXQIAOu5Fi9C8NnssY7fr8XBWEwBuZRbn7D6BwndC6vLB%2FtMvBNF%2BMd0&X-Amz-Signature=1a50055a757de450207b72983e7e5f9802bdda9ef98f74813cadc3d45a61b02c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466626P7GT3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEFdgq3yvVT0JfM2%2FXfUfkUJRMtw%2FEMAiFWis%2FDTEmxUAiEAuQQTni41KySk8KX2hepq9ss%2FReTbjmTFH%2B%2Fl0UnTSZ0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAIEX%2BcD2DcVWnlpayrcA8YelCfO4vf7hTvuX3rjZxIogVjT%2BKYYJyT578Snq8pE8v%2BwSlEO9Eqo36nN97H2YsPdDHt%2B0f4bo%2BS9aVL4owIbPkUljyu0BEy4N8gOxgNBGtCUFjAiqgNJK3%2BQSDzCQ3K7PodHWFNLiY8iw%2Fr%2FcwRhVqXY3BfQcqhrsgRYuwQpGXdZLvC09uXhBB0jjfu8LTxHJ%2FeggB221MYE9B4x3fYLN3HuyPYZGUQkGUnxpX6nMXOXJmPsizZeUEoIvSai%2FMg8nVMX5Ayg%2F%2Fr%2FzjlvjeIB2dltOaammLz86TMct9WOv8xOaA5rE9hRI4kikZz9Gp24Elz6cwvOlq3NNQ9XUmIrVanLjd4hUROZIe0rA6gCKmtpCoe%2FrulHUpfoEgdWnXA%2FZ%2B6uDt3BcfhPbqzxkSr5YgwgREClzt6i1uDW3ImqbOjoBnZlclaDnb6GAcY19nSXBsIZ4ImudQr%2F7e3oi3gGUOsnsAYI6dqfz%2F1PFhUvg69Zaa5sBmLBU6vZZiraVMh2bz%2FDF%2FoTcF23nJ5QD3bpa%2F%2BBScRr4SChB8Kd3IFZQIqErOpas9drEuLBY1yOr%2FMQ5uX1J5zUmbrKecwJVjfAwxagSPRKYBQUPZ03gx9zjia3I4ocq4py9rp7MNOq0cEGOqUBbj6iblMdls6Oy9gBBQtZ83zRyCdoSmZ%2FVoCV%2Bvfi4a63mZ%2BmWfc8DjCrG70ivMIo8MCswq6JdUB4Ac%2FmTgUkzIjzWcWLWa69zyO70xiQA7XISlwqvvcUkj150VOrguZS896dpGgUu8I%2B2bSZxpD1W5sT6p38u0Uhb3XdeXQIAOu5Fi9C8NnssY7fr8XBWEwBuZRbn7D6BwndC6vLB%2FtMvBNF%2BMd0&X-Amz-Signature=71703056f1366365d496de42140caf3ced601ebea9e41c770cf7affecd948650&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466626P7GT3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEFdgq3yvVT0JfM2%2FXfUfkUJRMtw%2FEMAiFWis%2FDTEmxUAiEAuQQTni41KySk8KX2hepq9ss%2FReTbjmTFH%2B%2Fl0UnTSZ0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAIEX%2BcD2DcVWnlpayrcA8YelCfO4vf7hTvuX3rjZxIogVjT%2BKYYJyT578Snq8pE8v%2BwSlEO9Eqo36nN97H2YsPdDHt%2B0f4bo%2BS9aVL4owIbPkUljyu0BEy4N8gOxgNBGtCUFjAiqgNJK3%2BQSDzCQ3K7PodHWFNLiY8iw%2Fr%2FcwRhVqXY3BfQcqhrsgRYuwQpGXdZLvC09uXhBB0jjfu8LTxHJ%2FeggB221MYE9B4x3fYLN3HuyPYZGUQkGUnxpX6nMXOXJmPsizZeUEoIvSai%2FMg8nVMX5Ayg%2F%2Fr%2FzjlvjeIB2dltOaammLz86TMct9WOv8xOaA5rE9hRI4kikZz9Gp24Elz6cwvOlq3NNQ9XUmIrVanLjd4hUROZIe0rA6gCKmtpCoe%2FrulHUpfoEgdWnXA%2FZ%2B6uDt3BcfhPbqzxkSr5YgwgREClzt6i1uDW3ImqbOjoBnZlclaDnb6GAcY19nSXBsIZ4ImudQr%2F7e3oi3gGUOsnsAYI6dqfz%2F1PFhUvg69Zaa5sBmLBU6vZZiraVMh2bz%2FDF%2FoTcF23nJ5QD3bpa%2F%2BBScRr4SChB8Kd3IFZQIqErOpas9drEuLBY1yOr%2FMQ5uX1J5zUmbrKecwJVjfAwxagSPRKYBQUPZ03gx9zjia3I4ocq4py9rp7MNOq0cEGOqUBbj6iblMdls6Oy9gBBQtZ83zRyCdoSmZ%2FVoCV%2Bvfi4a63mZ%2BmWfc8DjCrG70ivMIo8MCswq6JdUB4Ac%2FmTgUkzIjzWcWLWa69zyO70xiQA7XISlwqvvcUkj150VOrguZS896dpGgUu8I%2B2bSZxpD1W5sT6p38u0Uhb3XdeXQIAOu5Fi9C8NnssY7fr8XBWEwBuZRbn7D6BwndC6vLB%2FtMvBNF%2BMd0&X-Amz-Signature=dfac280b5393d16c0199cf7d5964e35d455aeeaa3d261443dee59a592063d234&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466626P7GT3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEFdgq3yvVT0JfM2%2FXfUfkUJRMtw%2FEMAiFWis%2FDTEmxUAiEAuQQTni41KySk8KX2hepq9ss%2FReTbjmTFH%2B%2Fl0UnTSZ0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAIEX%2BcD2DcVWnlpayrcA8YelCfO4vf7hTvuX3rjZxIogVjT%2BKYYJyT578Snq8pE8v%2BwSlEO9Eqo36nN97H2YsPdDHt%2B0f4bo%2BS9aVL4owIbPkUljyu0BEy4N8gOxgNBGtCUFjAiqgNJK3%2BQSDzCQ3K7PodHWFNLiY8iw%2Fr%2FcwRhVqXY3BfQcqhrsgRYuwQpGXdZLvC09uXhBB0jjfu8LTxHJ%2FeggB221MYE9B4x3fYLN3HuyPYZGUQkGUnxpX6nMXOXJmPsizZeUEoIvSai%2FMg8nVMX5Ayg%2F%2Fr%2FzjlvjeIB2dltOaammLz86TMct9WOv8xOaA5rE9hRI4kikZz9Gp24Elz6cwvOlq3NNQ9XUmIrVanLjd4hUROZIe0rA6gCKmtpCoe%2FrulHUpfoEgdWnXA%2FZ%2B6uDt3BcfhPbqzxkSr5YgwgREClzt6i1uDW3ImqbOjoBnZlclaDnb6GAcY19nSXBsIZ4ImudQr%2F7e3oi3gGUOsnsAYI6dqfz%2F1PFhUvg69Zaa5sBmLBU6vZZiraVMh2bz%2FDF%2FoTcF23nJ5QD3bpa%2F%2BBScRr4SChB8Kd3IFZQIqErOpas9drEuLBY1yOr%2FMQ5uX1J5zUmbrKecwJVjfAwxagSPRKYBQUPZ03gx9zjia3I4ocq4py9rp7MNOq0cEGOqUBbj6iblMdls6Oy9gBBQtZ83zRyCdoSmZ%2FVoCV%2Bvfi4a63mZ%2BmWfc8DjCrG70ivMIo8MCswq6JdUB4Ac%2FmTgUkzIjzWcWLWa69zyO70xiQA7XISlwqvvcUkj150VOrguZS896dpGgUu8I%2B2bSZxpD1W5sT6p38u0Uhb3XdeXQIAOu5Fi9C8NnssY7fr8XBWEwBuZRbn7D6BwndC6vLB%2FtMvBNF%2BMd0&X-Amz-Signature=639db3a62c1e1933dfb940b1161838e5c39b869b2d5813a01c571365719bc0d3&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466626P7GT3%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEFdgq3yvVT0JfM2%2FXfUfkUJRMtw%2FEMAiFWis%2FDTEmxUAiEAuQQTni41KySk8KX2hepq9ss%2FReTbjmTFH%2B%2Fl0UnTSZ0q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAIEX%2BcD2DcVWnlpayrcA8YelCfO4vf7hTvuX3rjZxIogVjT%2BKYYJyT578Snq8pE8v%2BwSlEO9Eqo36nN97H2YsPdDHt%2B0f4bo%2BS9aVL4owIbPkUljyu0BEy4N8gOxgNBGtCUFjAiqgNJK3%2BQSDzCQ3K7PodHWFNLiY8iw%2Fr%2FcwRhVqXY3BfQcqhrsgRYuwQpGXdZLvC09uXhBB0jjfu8LTxHJ%2FeggB221MYE9B4x3fYLN3HuyPYZGUQkGUnxpX6nMXOXJmPsizZeUEoIvSai%2FMg8nVMX5Ayg%2F%2Fr%2FzjlvjeIB2dltOaammLz86TMct9WOv8xOaA5rE9hRI4kikZz9Gp24Elz6cwvOlq3NNQ9XUmIrVanLjd4hUROZIe0rA6gCKmtpCoe%2FrulHUpfoEgdWnXA%2FZ%2B6uDt3BcfhPbqzxkSr5YgwgREClzt6i1uDW3ImqbOjoBnZlclaDnb6GAcY19nSXBsIZ4ImudQr%2F7e3oi3gGUOsnsAYI6dqfz%2F1PFhUvg69Zaa5sBmLBU6vZZiraVMh2bz%2FDF%2FoTcF23nJ5QD3bpa%2F%2BBScRr4SChB8Kd3IFZQIqErOpas9drEuLBY1yOr%2FMQ5uX1J5zUmbrKecwJVjfAwxagSPRKYBQUPZ03gx9zjia3I4ocq4py9rp7MNOq0cEGOqUBbj6iblMdls6Oy9gBBQtZ83zRyCdoSmZ%2FVoCV%2Bvfi4a63mZ%2BmWfc8DjCrG70ivMIo8MCswq6JdUB4Ac%2FmTgUkzIjzWcWLWa69zyO70xiQA7XISlwqvvcUkj150VOrguZS896dpGgUu8I%2B2bSZxpD1W5sT6p38u0Uhb3XdeXQIAOu5Fi9C8NnssY7fr8XBWEwBuZRbn7D6BwndC6vLB%2FtMvBNF%2BMd0&X-Amz-Signature=b231e347933dedf34e310c243fb62ef63e43afc8278faf2889ad12d8e8127221&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

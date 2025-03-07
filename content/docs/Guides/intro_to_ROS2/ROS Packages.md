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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BPAWTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD8X8wKyuQaniKskHOGuAItLK3pzk8dmh230ooAqyWfNQIhAJQI9TeGNU2zeoBilmKD2QtBYBaTiVK8InfJWRjrG%2FzYKv8DCE0QABoMNjM3NDIzMTgzODA1IgwaZ5Sxk3aT6W8JQ84q3AMK7uwP%2BVYGF16OWXmrSKrgowvJvhpuXzPHMlyTlZ%2BVHR1QLlYFlZqBG4SLaiRMyYlqtALTDwmbFjsmA%2Fbs2tLbcl4654HSe%2Bdz0z%2FOumOJkMI6QxQLIM5Ee9htbTUp12vYqEpkGhOKEm2y4YJfOTjY0oUdwRWMBoQoIt7WqEkZXpQwJWWZxo6pQqN9xjEfC8nMqv9f%2BnUsdYNQIprPRATCAHSflI3YgoM1Fsr0OlrhS2tcLYXbiFSTUtAJqfeA62diZx5AYAYWkD0uH0xyXBffNQPy78Kcm9TTwuo6l%2ByrtA6eT8TTlLjj1d8eJQY67Mtq3wy4HjIJPwuB9ZczjS%2F57YEQERA3FwQryGmo2vMwcyo4kcsUz77E5%2BhJBbcbgtv482aFGx%2BTUMLBFVjoS4JHwmcjVasK5cK%2FfaVrrkXu9zxVExMDBcFXv7dUu9d6lTcZciKizsMd9ZQqkF7h9wtEnH9KMgUcNGJCBKf6W%2F1CC7LaFYE%2FI4RvVZg8C2AqVk18mx2%2B8JbVXS4ITa0hMuRqgPWbnXaL4B7n1aXYIptzg6Hq95MWQM3RuYWgMzfO3o4NcMTfalY746SZ1%2Faj%2B0A0wuuW9dP%2BxMgh7b6snqArmwnuvSKyzn%2BHECP5xDDvn62%2BBjqkAa2%2BkWIdZdSSzobl1FffGR7gXy1hatuVghwBypW8uxbUzTzlUF5XqH5KY0snf05UiWw4MBXcZA85QTPLNWcSSTkdyeWdot5A6iv1wefQji81OT4fEjmuw6m46SvBZQ%2BMSwsx4Dj6IOxmzqW1nAysn9n%2FxwdakTQhLL8fVDllA0%2B6QEFrk6WNqXDynTDzsVfisIz9p1IQ7kaRkL0omCWtqJJK1Unm&X-Amz-Signature=7481c3e876143b8f6ff2dd93d74d0ef531eccc6df177f744fc701b6e9c90a2f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BPAWTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD8X8wKyuQaniKskHOGuAItLK3pzk8dmh230ooAqyWfNQIhAJQI9TeGNU2zeoBilmKD2QtBYBaTiVK8InfJWRjrG%2FzYKv8DCE0QABoMNjM3NDIzMTgzODA1IgwaZ5Sxk3aT6W8JQ84q3AMK7uwP%2BVYGF16OWXmrSKrgowvJvhpuXzPHMlyTlZ%2BVHR1QLlYFlZqBG4SLaiRMyYlqtALTDwmbFjsmA%2Fbs2tLbcl4654HSe%2Bdz0z%2FOumOJkMI6QxQLIM5Ee9htbTUp12vYqEpkGhOKEm2y4YJfOTjY0oUdwRWMBoQoIt7WqEkZXpQwJWWZxo6pQqN9xjEfC8nMqv9f%2BnUsdYNQIprPRATCAHSflI3YgoM1Fsr0OlrhS2tcLYXbiFSTUtAJqfeA62diZx5AYAYWkD0uH0xyXBffNQPy78Kcm9TTwuo6l%2ByrtA6eT8TTlLjj1d8eJQY67Mtq3wy4HjIJPwuB9ZczjS%2F57YEQERA3FwQryGmo2vMwcyo4kcsUz77E5%2BhJBbcbgtv482aFGx%2BTUMLBFVjoS4JHwmcjVasK5cK%2FfaVrrkXu9zxVExMDBcFXv7dUu9d6lTcZciKizsMd9ZQqkF7h9wtEnH9KMgUcNGJCBKf6W%2F1CC7LaFYE%2FI4RvVZg8C2AqVk18mx2%2B8JbVXS4ITa0hMuRqgPWbnXaL4B7n1aXYIptzg6Hq95MWQM3RuYWgMzfO3o4NcMTfalY746SZ1%2Faj%2B0A0wuuW9dP%2BxMgh7b6snqArmwnuvSKyzn%2BHECP5xDDvn62%2BBjqkAa2%2BkWIdZdSSzobl1FffGR7gXy1hatuVghwBypW8uxbUzTzlUF5XqH5KY0snf05UiWw4MBXcZA85QTPLNWcSSTkdyeWdot5A6iv1wefQji81OT4fEjmuw6m46SvBZQ%2BMSwsx4Dj6IOxmzqW1nAysn9n%2FxwdakTQhLL8fVDllA0%2B6QEFrk6WNqXDynTDzsVfisIz9p1IQ7kaRkL0omCWtqJJK1Unm&X-Amz-Signature=73bc7156a18b8f7aac070fff609e83a2ff6161dbfe30ee08dae746504deea8c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BPAWTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD8X8wKyuQaniKskHOGuAItLK3pzk8dmh230ooAqyWfNQIhAJQI9TeGNU2zeoBilmKD2QtBYBaTiVK8InfJWRjrG%2FzYKv8DCE0QABoMNjM3NDIzMTgzODA1IgwaZ5Sxk3aT6W8JQ84q3AMK7uwP%2BVYGF16OWXmrSKrgowvJvhpuXzPHMlyTlZ%2BVHR1QLlYFlZqBG4SLaiRMyYlqtALTDwmbFjsmA%2Fbs2tLbcl4654HSe%2Bdz0z%2FOumOJkMI6QxQLIM5Ee9htbTUp12vYqEpkGhOKEm2y4YJfOTjY0oUdwRWMBoQoIt7WqEkZXpQwJWWZxo6pQqN9xjEfC8nMqv9f%2BnUsdYNQIprPRATCAHSflI3YgoM1Fsr0OlrhS2tcLYXbiFSTUtAJqfeA62diZx5AYAYWkD0uH0xyXBffNQPy78Kcm9TTwuo6l%2ByrtA6eT8TTlLjj1d8eJQY67Mtq3wy4HjIJPwuB9ZczjS%2F57YEQERA3FwQryGmo2vMwcyo4kcsUz77E5%2BhJBbcbgtv482aFGx%2BTUMLBFVjoS4JHwmcjVasK5cK%2FfaVrrkXu9zxVExMDBcFXv7dUu9d6lTcZciKizsMd9ZQqkF7h9wtEnH9KMgUcNGJCBKf6W%2F1CC7LaFYE%2FI4RvVZg8C2AqVk18mx2%2B8JbVXS4ITa0hMuRqgPWbnXaL4B7n1aXYIptzg6Hq95MWQM3RuYWgMzfO3o4NcMTfalY746SZ1%2Faj%2B0A0wuuW9dP%2BxMgh7b6snqArmwnuvSKyzn%2BHECP5xDDvn62%2BBjqkAa2%2BkWIdZdSSzobl1FffGR7gXy1hatuVghwBypW8uxbUzTzlUF5XqH5KY0snf05UiWw4MBXcZA85QTPLNWcSSTkdyeWdot5A6iv1wefQji81OT4fEjmuw6m46SvBZQ%2BMSwsx4Dj6IOxmzqW1nAysn9n%2FxwdakTQhLL8fVDllA0%2B6QEFrk6WNqXDynTDzsVfisIz9p1IQ7kaRkL0omCWtqJJK1Unm&X-Amz-Signature=484cd5889e236ea759ac7d7391e929c47903d284a3d67d05135665fcbb8f560a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BPAWTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD8X8wKyuQaniKskHOGuAItLK3pzk8dmh230ooAqyWfNQIhAJQI9TeGNU2zeoBilmKD2QtBYBaTiVK8InfJWRjrG%2FzYKv8DCE0QABoMNjM3NDIzMTgzODA1IgwaZ5Sxk3aT6W8JQ84q3AMK7uwP%2BVYGF16OWXmrSKrgowvJvhpuXzPHMlyTlZ%2BVHR1QLlYFlZqBG4SLaiRMyYlqtALTDwmbFjsmA%2Fbs2tLbcl4654HSe%2Bdz0z%2FOumOJkMI6QxQLIM5Ee9htbTUp12vYqEpkGhOKEm2y4YJfOTjY0oUdwRWMBoQoIt7WqEkZXpQwJWWZxo6pQqN9xjEfC8nMqv9f%2BnUsdYNQIprPRATCAHSflI3YgoM1Fsr0OlrhS2tcLYXbiFSTUtAJqfeA62diZx5AYAYWkD0uH0xyXBffNQPy78Kcm9TTwuo6l%2ByrtA6eT8TTlLjj1d8eJQY67Mtq3wy4HjIJPwuB9ZczjS%2F57YEQERA3FwQryGmo2vMwcyo4kcsUz77E5%2BhJBbcbgtv482aFGx%2BTUMLBFVjoS4JHwmcjVasK5cK%2FfaVrrkXu9zxVExMDBcFXv7dUu9d6lTcZciKizsMd9ZQqkF7h9wtEnH9KMgUcNGJCBKf6W%2F1CC7LaFYE%2FI4RvVZg8C2AqVk18mx2%2B8JbVXS4ITa0hMuRqgPWbnXaL4B7n1aXYIptzg6Hq95MWQM3RuYWgMzfO3o4NcMTfalY746SZ1%2Faj%2B0A0wuuW9dP%2BxMgh7b6snqArmwnuvSKyzn%2BHECP5xDDvn62%2BBjqkAa2%2BkWIdZdSSzobl1FffGR7gXy1hatuVghwBypW8uxbUzTzlUF5XqH5KY0snf05UiWw4MBXcZA85QTPLNWcSSTkdyeWdot5A6iv1wefQji81OT4fEjmuw6m46SvBZQ%2BMSwsx4Dj6IOxmzqW1nAysn9n%2FxwdakTQhLL8fVDllA0%2B6QEFrk6WNqXDynTDzsVfisIz9p1IQ7kaRkL0omCWtqJJK1Unm&X-Amz-Signature=a6f103904dc83717871d5430dd6964e67b5b5ca93a05fbc53de7a796808bd606&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BPAWTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD8X8wKyuQaniKskHOGuAItLK3pzk8dmh230ooAqyWfNQIhAJQI9TeGNU2zeoBilmKD2QtBYBaTiVK8InfJWRjrG%2FzYKv8DCE0QABoMNjM3NDIzMTgzODA1IgwaZ5Sxk3aT6W8JQ84q3AMK7uwP%2BVYGF16OWXmrSKrgowvJvhpuXzPHMlyTlZ%2BVHR1QLlYFlZqBG4SLaiRMyYlqtALTDwmbFjsmA%2Fbs2tLbcl4654HSe%2Bdz0z%2FOumOJkMI6QxQLIM5Ee9htbTUp12vYqEpkGhOKEm2y4YJfOTjY0oUdwRWMBoQoIt7WqEkZXpQwJWWZxo6pQqN9xjEfC8nMqv9f%2BnUsdYNQIprPRATCAHSflI3YgoM1Fsr0OlrhS2tcLYXbiFSTUtAJqfeA62diZx5AYAYWkD0uH0xyXBffNQPy78Kcm9TTwuo6l%2ByrtA6eT8TTlLjj1d8eJQY67Mtq3wy4HjIJPwuB9ZczjS%2F57YEQERA3FwQryGmo2vMwcyo4kcsUz77E5%2BhJBbcbgtv482aFGx%2BTUMLBFVjoS4JHwmcjVasK5cK%2FfaVrrkXu9zxVExMDBcFXv7dUu9d6lTcZciKizsMd9ZQqkF7h9wtEnH9KMgUcNGJCBKf6W%2F1CC7LaFYE%2FI4RvVZg8C2AqVk18mx2%2B8JbVXS4ITa0hMuRqgPWbnXaL4B7n1aXYIptzg6Hq95MWQM3RuYWgMzfO3o4NcMTfalY746SZ1%2Faj%2B0A0wuuW9dP%2BxMgh7b6snqArmwnuvSKyzn%2BHECP5xDDvn62%2BBjqkAa2%2BkWIdZdSSzobl1FffGR7gXy1hatuVghwBypW8uxbUzTzlUF5XqH5KY0snf05UiWw4MBXcZA85QTPLNWcSSTkdyeWdot5A6iv1wefQji81OT4fEjmuw6m46SvBZQ%2BMSwsx4Dj6IOxmzqW1nAysn9n%2FxwdakTQhLL8fVDllA0%2B6QEFrk6WNqXDynTDzsVfisIz9p1IQ7kaRkL0omCWtqJJK1Unm&X-Amz-Signature=119fff019a9663f59eb3fae77acb48d88a9b1aa730d35a9562a3ca92df5f868c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BPAWTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD8X8wKyuQaniKskHOGuAItLK3pzk8dmh230ooAqyWfNQIhAJQI9TeGNU2zeoBilmKD2QtBYBaTiVK8InfJWRjrG%2FzYKv8DCE0QABoMNjM3NDIzMTgzODA1IgwaZ5Sxk3aT6W8JQ84q3AMK7uwP%2BVYGF16OWXmrSKrgowvJvhpuXzPHMlyTlZ%2BVHR1QLlYFlZqBG4SLaiRMyYlqtALTDwmbFjsmA%2Fbs2tLbcl4654HSe%2Bdz0z%2FOumOJkMI6QxQLIM5Ee9htbTUp12vYqEpkGhOKEm2y4YJfOTjY0oUdwRWMBoQoIt7WqEkZXpQwJWWZxo6pQqN9xjEfC8nMqv9f%2BnUsdYNQIprPRATCAHSflI3YgoM1Fsr0OlrhS2tcLYXbiFSTUtAJqfeA62diZx5AYAYWkD0uH0xyXBffNQPy78Kcm9TTwuo6l%2ByrtA6eT8TTlLjj1d8eJQY67Mtq3wy4HjIJPwuB9ZczjS%2F57YEQERA3FwQryGmo2vMwcyo4kcsUz77E5%2BhJBbcbgtv482aFGx%2BTUMLBFVjoS4JHwmcjVasK5cK%2FfaVrrkXu9zxVExMDBcFXv7dUu9d6lTcZciKizsMd9ZQqkF7h9wtEnH9KMgUcNGJCBKf6W%2F1CC7LaFYE%2FI4RvVZg8C2AqVk18mx2%2B8JbVXS4ITa0hMuRqgPWbnXaL4B7n1aXYIptzg6Hq95MWQM3RuYWgMzfO3o4NcMTfalY746SZ1%2Faj%2B0A0wuuW9dP%2BxMgh7b6snqArmwnuvSKyzn%2BHECP5xDDvn62%2BBjqkAa2%2BkWIdZdSSzobl1FffGR7gXy1hatuVghwBypW8uxbUzTzlUF5XqH5KY0snf05UiWw4MBXcZA85QTPLNWcSSTkdyeWdot5A6iv1wefQji81OT4fEjmuw6m46SvBZQ%2BMSwsx4Dj6IOxmzqW1nAysn9n%2FxwdakTQhLL8fVDllA0%2B6QEFrk6WNqXDynTDzsVfisIz9p1IQ7kaRkL0omCWtqJJK1Unm&X-Amz-Signature=e6c5c9a39dc3bb39cf6f1b1c7b6383585f4fcc194eb7835eb6ff64bbe72bd688&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BPAWTL%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQD8X8wKyuQaniKskHOGuAItLK3pzk8dmh230ooAqyWfNQIhAJQI9TeGNU2zeoBilmKD2QtBYBaTiVK8InfJWRjrG%2FzYKv8DCE0QABoMNjM3NDIzMTgzODA1IgwaZ5Sxk3aT6W8JQ84q3AMK7uwP%2BVYGF16OWXmrSKrgowvJvhpuXzPHMlyTlZ%2BVHR1QLlYFlZqBG4SLaiRMyYlqtALTDwmbFjsmA%2Fbs2tLbcl4654HSe%2Bdz0z%2FOumOJkMI6QxQLIM5Ee9htbTUp12vYqEpkGhOKEm2y4YJfOTjY0oUdwRWMBoQoIt7WqEkZXpQwJWWZxo6pQqN9xjEfC8nMqv9f%2BnUsdYNQIprPRATCAHSflI3YgoM1Fsr0OlrhS2tcLYXbiFSTUtAJqfeA62diZx5AYAYWkD0uH0xyXBffNQPy78Kcm9TTwuo6l%2ByrtA6eT8TTlLjj1d8eJQY67Mtq3wy4HjIJPwuB9ZczjS%2F57YEQERA3FwQryGmo2vMwcyo4kcsUz77E5%2BhJBbcbgtv482aFGx%2BTUMLBFVjoS4JHwmcjVasK5cK%2FfaVrrkXu9zxVExMDBcFXv7dUu9d6lTcZciKizsMd9ZQqkF7h9wtEnH9KMgUcNGJCBKf6W%2F1CC7LaFYE%2FI4RvVZg8C2AqVk18mx2%2B8JbVXS4ITa0hMuRqgPWbnXaL4B7n1aXYIptzg6Hq95MWQM3RuYWgMzfO3o4NcMTfalY746SZ1%2Faj%2B0A0wuuW9dP%2BxMgh7b6snqArmwnuvSKyzn%2BHECP5xDDvn62%2BBjqkAa2%2BkWIdZdSSzobl1FffGR7gXy1hatuVghwBypW8uxbUzTzlUF5XqH5KY0snf05UiWw4MBXcZA85QTPLNWcSSTkdyeWdot5A6iv1wefQji81OT4fEjmuw6m46SvBZQ%2BMSwsx4Dj6IOxmzqW1nAysn9n%2FxwdakTQhLL8fVDllA0%2B6QEFrk6WNqXDynTDzsVfisIz9p1IQ7kaRkL0omCWtqJJK1Unm&X-Amz-Signature=d2fc573d8510da943d6719d89f7bcbd5e1a0c7a1925a09ae27c7eff55b0b9210&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

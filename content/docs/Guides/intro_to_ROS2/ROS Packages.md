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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKCO3SY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEXB6IRZGOPa113sR0rXndRzxdVxgS2mSlMGEYOPAroAiEAsoLaZ4k1iHWgvhXgLfp0hauzotF9qRGKovvHQL6WhLUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqmS5bJqLYxuh%2Fx5yrcA477nhgtPRfFZr10An5m351FxcZ%2FJLgE03ZBbuw6IELaKRNuUY5U3ZbYYH%2Betc%2FTaoMXsE7JzHm76XGzmupN0pxLjX0ShzYElOlBapGLQDhcgExtIogc4myRZhacRbVb2Wjclhd%2BXqwQD9cCsE8ixIshcV26B%2Fov5VLSGvOgSNC%2Bi60YnaNvDL2tqoCrp238vPYmuaVHqBijDIM3aym1hQB%2BnibQGKjDstkeIu4N7aofoK0ZV1d7dwz2zzYXM7KDEIAOK%2Fe0fFNAj80Xp%2FaMCOredxL9TkpahIAvxwRkwH0xTNDTMihaRkD31zWtZvctNMzt1YwBFS2WU4SADNChUBG69R3swHe9jjRUdKg6TKBsefyKP3pZYKWYL3XUOk8KhM1kif%2F5vYmbPSLmiMDgRocuzwfMw9ROSHTuw%2Blzp12kbokZIyPDr3rYFGv4k4Nd6xoSH4qxsbexbgQrN7psT9G3%2FrKW0Rw0FhHupNYofko3QYpITC2fY43yXK2bA1fwsRMLfT9PJDQLh1sDEK3d5NAYHkl7ORh4SkRsYqWSjLQlOOHYj2AGwIawKR7LOaR%2F%2B4NpcwaWuWq481XdFXn5fmRN0OAABSKncWbI6Kc69QSsLiGocGy5wpwU4nG1MJ6z4sEGOqUBT1QzprKUMXTelHn%2Fgj3hUp3F3XNASPnebLSx8SKaS7HMwSvwRIKxcLNHfqBwe%2B2bZMERdxjD%2B8e81upOijkPRHgI%2FPzYdbX5l5ERIqdPTLFJPxLWrYU77KPbFLc0FFEXsT4ZJc8Mu85lJSO%2Fsbz19ALlfGOpkYrZfknn8%2BFe0UWZDUfqAG938Mn1GOh5pbqpCkiW%2BUGN8458%2BdwsjijAn8eAnECd&X-Amz-Signature=3dd672269d4916a6e53a2a388671840134d68ab4f55ce6b8f8c6b27afd1d2840&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKCO3SY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEXB6IRZGOPa113sR0rXndRzxdVxgS2mSlMGEYOPAroAiEAsoLaZ4k1iHWgvhXgLfp0hauzotF9qRGKovvHQL6WhLUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqmS5bJqLYxuh%2Fx5yrcA477nhgtPRfFZr10An5m351FxcZ%2FJLgE03ZBbuw6IELaKRNuUY5U3ZbYYH%2Betc%2FTaoMXsE7JzHm76XGzmupN0pxLjX0ShzYElOlBapGLQDhcgExtIogc4myRZhacRbVb2Wjclhd%2BXqwQD9cCsE8ixIshcV26B%2Fov5VLSGvOgSNC%2Bi60YnaNvDL2tqoCrp238vPYmuaVHqBijDIM3aym1hQB%2BnibQGKjDstkeIu4N7aofoK0ZV1d7dwz2zzYXM7KDEIAOK%2Fe0fFNAj80Xp%2FaMCOredxL9TkpahIAvxwRkwH0xTNDTMihaRkD31zWtZvctNMzt1YwBFS2WU4SADNChUBG69R3swHe9jjRUdKg6TKBsefyKP3pZYKWYL3XUOk8KhM1kif%2F5vYmbPSLmiMDgRocuzwfMw9ROSHTuw%2Blzp12kbokZIyPDr3rYFGv4k4Nd6xoSH4qxsbexbgQrN7psT9G3%2FrKW0Rw0FhHupNYofko3QYpITC2fY43yXK2bA1fwsRMLfT9PJDQLh1sDEK3d5NAYHkl7ORh4SkRsYqWSjLQlOOHYj2AGwIawKR7LOaR%2F%2B4NpcwaWuWq481XdFXn5fmRN0OAABSKncWbI6Kc69QSsLiGocGy5wpwU4nG1MJ6z4sEGOqUBT1QzprKUMXTelHn%2Fgj3hUp3F3XNASPnebLSx8SKaS7HMwSvwRIKxcLNHfqBwe%2B2bZMERdxjD%2B8e81upOijkPRHgI%2FPzYdbX5l5ERIqdPTLFJPxLWrYU77KPbFLc0FFEXsT4ZJc8Mu85lJSO%2Fsbz19ALlfGOpkYrZfknn8%2BFe0UWZDUfqAG938Mn1GOh5pbqpCkiW%2BUGN8458%2BdwsjijAn8eAnECd&X-Amz-Signature=96734148154b02882421da37f9bb387a98efd398b0557556d705c7073e4c442e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKCO3SY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEXB6IRZGOPa113sR0rXndRzxdVxgS2mSlMGEYOPAroAiEAsoLaZ4k1iHWgvhXgLfp0hauzotF9qRGKovvHQL6WhLUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqmS5bJqLYxuh%2Fx5yrcA477nhgtPRfFZr10An5m351FxcZ%2FJLgE03ZBbuw6IELaKRNuUY5U3ZbYYH%2Betc%2FTaoMXsE7JzHm76XGzmupN0pxLjX0ShzYElOlBapGLQDhcgExtIogc4myRZhacRbVb2Wjclhd%2BXqwQD9cCsE8ixIshcV26B%2Fov5VLSGvOgSNC%2Bi60YnaNvDL2tqoCrp238vPYmuaVHqBijDIM3aym1hQB%2BnibQGKjDstkeIu4N7aofoK0ZV1d7dwz2zzYXM7KDEIAOK%2Fe0fFNAj80Xp%2FaMCOredxL9TkpahIAvxwRkwH0xTNDTMihaRkD31zWtZvctNMzt1YwBFS2WU4SADNChUBG69R3swHe9jjRUdKg6TKBsefyKP3pZYKWYL3XUOk8KhM1kif%2F5vYmbPSLmiMDgRocuzwfMw9ROSHTuw%2Blzp12kbokZIyPDr3rYFGv4k4Nd6xoSH4qxsbexbgQrN7psT9G3%2FrKW0Rw0FhHupNYofko3QYpITC2fY43yXK2bA1fwsRMLfT9PJDQLh1sDEK3d5NAYHkl7ORh4SkRsYqWSjLQlOOHYj2AGwIawKR7LOaR%2F%2B4NpcwaWuWq481XdFXn5fmRN0OAABSKncWbI6Kc69QSsLiGocGy5wpwU4nG1MJ6z4sEGOqUBT1QzprKUMXTelHn%2Fgj3hUp3F3XNASPnebLSx8SKaS7HMwSvwRIKxcLNHfqBwe%2B2bZMERdxjD%2B8e81upOijkPRHgI%2FPzYdbX5l5ERIqdPTLFJPxLWrYU77KPbFLc0FFEXsT4ZJc8Mu85lJSO%2Fsbz19ALlfGOpkYrZfknn8%2BFe0UWZDUfqAG938Mn1GOh5pbqpCkiW%2BUGN8458%2BdwsjijAn8eAnECd&X-Amz-Signature=ef53af49e5a311f990b12f3d6b829e85dceb555561029f661b3f2ed895f7d6e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKCO3SY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEXB6IRZGOPa113sR0rXndRzxdVxgS2mSlMGEYOPAroAiEAsoLaZ4k1iHWgvhXgLfp0hauzotF9qRGKovvHQL6WhLUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqmS5bJqLYxuh%2Fx5yrcA477nhgtPRfFZr10An5m351FxcZ%2FJLgE03ZBbuw6IELaKRNuUY5U3ZbYYH%2Betc%2FTaoMXsE7JzHm76XGzmupN0pxLjX0ShzYElOlBapGLQDhcgExtIogc4myRZhacRbVb2Wjclhd%2BXqwQD9cCsE8ixIshcV26B%2Fov5VLSGvOgSNC%2Bi60YnaNvDL2tqoCrp238vPYmuaVHqBijDIM3aym1hQB%2BnibQGKjDstkeIu4N7aofoK0ZV1d7dwz2zzYXM7KDEIAOK%2Fe0fFNAj80Xp%2FaMCOredxL9TkpahIAvxwRkwH0xTNDTMihaRkD31zWtZvctNMzt1YwBFS2WU4SADNChUBG69R3swHe9jjRUdKg6TKBsefyKP3pZYKWYL3XUOk8KhM1kif%2F5vYmbPSLmiMDgRocuzwfMw9ROSHTuw%2Blzp12kbokZIyPDr3rYFGv4k4Nd6xoSH4qxsbexbgQrN7psT9G3%2FrKW0Rw0FhHupNYofko3QYpITC2fY43yXK2bA1fwsRMLfT9PJDQLh1sDEK3d5NAYHkl7ORh4SkRsYqWSjLQlOOHYj2AGwIawKR7LOaR%2F%2B4NpcwaWuWq481XdFXn5fmRN0OAABSKncWbI6Kc69QSsLiGocGy5wpwU4nG1MJ6z4sEGOqUBT1QzprKUMXTelHn%2Fgj3hUp3F3XNASPnebLSx8SKaS7HMwSvwRIKxcLNHfqBwe%2B2bZMERdxjD%2B8e81upOijkPRHgI%2FPzYdbX5l5ERIqdPTLFJPxLWrYU77KPbFLc0FFEXsT4ZJc8Mu85lJSO%2Fsbz19ALlfGOpkYrZfknn8%2BFe0UWZDUfqAG938Mn1GOh5pbqpCkiW%2BUGN8458%2BdwsjijAn8eAnECd&X-Amz-Signature=c0c7e435af25a214530029298282ed56c0217496992410118f99cf1f16d8f594&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKCO3SY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEXB6IRZGOPa113sR0rXndRzxdVxgS2mSlMGEYOPAroAiEAsoLaZ4k1iHWgvhXgLfp0hauzotF9qRGKovvHQL6WhLUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqmS5bJqLYxuh%2Fx5yrcA477nhgtPRfFZr10An5m351FxcZ%2FJLgE03ZBbuw6IELaKRNuUY5U3ZbYYH%2Betc%2FTaoMXsE7JzHm76XGzmupN0pxLjX0ShzYElOlBapGLQDhcgExtIogc4myRZhacRbVb2Wjclhd%2BXqwQD9cCsE8ixIshcV26B%2Fov5VLSGvOgSNC%2Bi60YnaNvDL2tqoCrp238vPYmuaVHqBijDIM3aym1hQB%2BnibQGKjDstkeIu4N7aofoK0ZV1d7dwz2zzYXM7KDEIAOK%2Fe0fFNAj80Xp%2FaMCOredxL9TkpahIAvxwRkwH0xTNDTMihaRkD31zWtZvctNMzt1YwBFS2WU4SADNChUBG69R3swHe9jjRUdKg6TKBsefyKP3pZYKWYL3XUOk8KhM1kif%2F5vYmbPSLmiMDgRocuzwfMw9ROSHTuw%2Blzp12kbokZIyPDr3rYFGv4k4Nd6xoSH4qxsbexbgQrN7psT9G3%2FrKW0Rw0FhHupNYofko3QYpITC2fY43yXK2bA1fwsRMLfT9PJDQLh1sDEK3d5NAYHkl7ORh4SkRsYqWSjLQlOOHYj2AGwIawKR7LOaR%2F%2B4NpcwaWuWq481XdFXn5fmRN0OAABSKncWbI6Kc69QSsLiGocGy5wpwU4nG1MJ6z4sEGOqUBT1QzprKUMXTelHn%2Fgj3hUp3F3XNASPnebLSx8SKaS7HMwSvwRIKxcLNHfqBwe%2B2bZMERdxjD%2B8e81upOijkPRHgI%2FPzYdbX5l5ERIqdPTLFJPxLWrYU77KPbFLc0FFEXsT4ZJc8Mu85lJSO%2Fsbz19ALlfGOpkYrZfknn8%2BFe0UWZDUfqAG938Mn1GOh5pbqpCkiW%2BUGN8458%2BdwsjijAn8eAnECd&X-Amz-Signature=595d3b1845da17c3fe58a6f5f09844e91539a9782fd388b5d2307a311913ec4a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKCO3SY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEXB6IRZGOPa113sR0rXndRzxdVxgS2mSlMGEYOPAroAiEAsoLaZ4k1iHWgvhXgLfp0hauzotF9qRGKovvHQL6WhLUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqmS5bJqLYxuh%2Fx5yrcA477nhgtPRfFZr10An5m351FxcZ%2FJLgE03ZBbuw6IELaKRNuUY5U3ZbYYH%2Betc%2FTaoMXsE7JzHm76XGzmupN0pxLjX0ShzYElOlBapGLQDhcgExtIogc4myRZhacRbVb2Wjclhd%2BXqwQD9cCsE8ixIshcV26B%2Fov5VLSGvOgSNC%2Bi60YnaNvDL2tqoCrp238vPYmuaVHqBijDIM3aym1hQB%2BnibQGKjDstkeIu4N7aofoK0ZV1d7dwz2zzYXM7KDEIAOK%2Fe0fFNAj80Xp%2FaMCOredxL9TkpahIAvxwRkwH0xTNDTMihaRkD31zWtZvctNMzt1YwBFS2WU4SADNChUBG69R3swHe9jjRUdKg6TKBsefyKP3pZYKWYL3XUOk8KhM1kif%2F5vYmbPSLmiMDgRocuzwfMw9ROSHTuw%2Blzp12kbokZIyPDr3rYFGv4k4Nd6xoSH4qxsbexbgQrN7psT9G3%2FrKW0Rw0FhHupNYofko3QYpITC2fY43yXK2bA1fwsRMLfT9PJDQLh1sDEK3d5NAYHkl7ORh4SkRsYqWSjLQlOOHYj2AGwIawKR7LOaR%2F%2B4NpcwaWuWq481XdFXn5fmRN0OAABSKncWbI6Kc69QSsLiGocGy5wpwU4nG1MJ6z4sEGOqUBT1QzprKUMXTelHn%2Fgj3hUp3F3XNASPnebLSx8SKaS7HMwSvwRIKxcLNHfqBwe%2B2bZMERdxjD%2B8e81upOijkPRHgI%2FPzYdbX5l5ERIqdPTLFJPxLWrYU77KPbFLc0FFEXsT4ZJc8Mu85lJSO%2Fsbz19ALlfGOpkYrZfknn8%2BFe0UWZDUfqAG938Mn1GOh5pbqpCkiW%2BUGN8458%2BdwsjijAn8eAnECd&X-Amz-Signature=b78a74823af6d06b1adce6b513be98580d7d8f4e29895d01aa170bd9c0258547&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUKCO3SY%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T190254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHEXB6IRZGOPa113sR0rXndRzxdVxgS2mSlMGEYOPAroAiEAsoLaZ4k1iHWgvhXgLfp0hauzotF9qRGKovvHQL6WhLUqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqmS5bJqLYxuh%2Fx5yrcA477nhgtPRfFZr10An5m351FxcZ%2FJLgE03ZBbuw6IELaKRNuUY5U3ZbYYH%2Betc%2FTaoMXsE7JzHm76XGzmupN0pxLjX0ShzYElOlBapGLQDhcgExtIogc4myRZhacRbVb2Wjclhd%2BXqwQD9cCsE8ixIshcV26B%2Fov5VLSGvOgSNC%2Bi60YnaNvDL2tqoCrp238vPYmuaVHqBijDIM3aym1hQB%2BnibQGKjDstkeIu4N7aofoK0ZV1d7dwz2zzYXM7KDEIAOK%2Fe0fFNAj80Xp%2FaMCOredxL9TkpahIAvxwRkwH0xTNDTMihaRkD31zWtZvctNMzt1YwBFS2WU4SADNChUBG69R3swHe9jjRUdKg6TKBsefyKP3pZYKWYL3XUOk8KhM1kif%2F5vYmbPSLmiMDgRocuzwfMw9ROSHTuw%2Blzp12kbokZIyPDr3rYFGv4k4Nd6xoSH4qxsbexbgQrN7psT9G3%2FrKW0Rw0FhHupNYofko3QYpITC2fY43yXK2bA1fwsRMLfT9PJDQLh1sDEK3d5NAYHkl7ORh4SkRsYqWSjLQlOOHYj2AGwIawKR7LOaR%2F%2B4NpcwaWuWq481XdFXn5fmRN0OAABSKncWbI6Kc69QSsLiGocGy5wpwU4nG1MJ6z4sEGOqUBT1QzprKUMXTelHn%2Fgj3hUp3F3XNASPnebLSx8SKaS7HMwSvwRIKxcLNHfqBwe%2B2bZMERdxjD%2B8e81upOijkPRHgI%2FPzYdbX5l5ERIqdPTLFJPxLWrYU77KPbFLc0FFEXsT4ZJc8Mu85lJSO%2Fsbz19ALlfGOpkYrZfknn8%2BFe0UWZDUfqAG938Mn1GOh5pbqpCkiW%2BUGN8458%2BdwsjijAn8eAnECd&X-Amz-Signature=8bfb85d7937ab6bc5f6071b75449ab7f2ceb815a3b03f90a505de1310aff1d31&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVNSCYT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIHoJRoe1tFJRdmjvJHpIT2XbBlXGzyrYo6dQHzm5tndlAiEA%2BJHj6kCg6P1dD2%2Fr%2F39CgTJtJq8JmmMxnn3VHBNTc60qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuLEX%2FA8WMlHIBzRircAyS1YZYzJhwAedK8bkHGAzM0X1svbiB2Q7ZsU1WXnDPcHkkQs6DvqDWAHFwF7eqF%2Fgb5IaeDUbOR04UXb8rGt%2FZcttZo8ctVuODSUCk3Lf%2Bu51LTmj6ZFEij4%2FDRCUBJtFPmikV%2FM4zQkfNH0HQSvPeNNEt%2BoERfvwezEYTHKEhh4A%2FomH2aI1Y%2BlSzcQMlZC6GJr7Ol1%2BxGREGXIhD62o%2B5uE0KQIJmuSRl3lkPKWqSdzf%2By%2FoVV3OuzvuyK6%2BXrTLAGhH4doOnCJcNkXkmZ5KN6GI045aqw%2BQIWp%2BxMNrPN%2BFv6xzL0wnvUzwF4eLdf%2BJt%2BCKDhVDEw7E1ixyKY9BkmeITg79VyWlQU2%2FoF7dz02l%2B6SiJ1lXkXcmd9Nt6H3BNFeDnws410Z%2FmBDj3UT%2F6KOpb0ye3xeJqFDZx%2BRQwdQL9hQltI6SFfWDFnFH3Fbr4ebi2gMMAWffjx5gbO7GQNfZYwPL9mcF08obsqMOj7OAo8Iwu%2FsJg966lwj6DzaDZQ07seWF%2FdamxboVdWi1FSxprfMo%2FC62wCctC8DNDpq68EQyYkob%2FiP%2BoauDpX1rhOEaxNg7NcZT53Em8WtXrVAKhNhdtmREuH016DLmNEg7GdYp6imTVVm3xMKvu1cAGOqUBhoVi%2FJ9GNRdBzuZJyXdUO5bbvNMcAZ%2FZ84zuyYxm0qZpOvw8S%2BeMA8UorOnGJU1dvHPfuiEsYYGXrOmP5qLU7Xy5TIld0w%2FQTX7PO8YKIo6E01NuTHJEgScBAnBp8WG%2B6YwwFdeeXE4m3E0sLgnH7RhsixvPmyhExoZCEqh3ig1iwumxGtAeEUXTPx067i%2FqLuG9aemwY8InFX4qFk%2F75BSParw%2B&X-Amz-Signature=2d7f0320ce7975cc46e8c6757b52654f230e7aa359be0aaeb7914921df79e887&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVNSCYT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIHoJRoe1tFJRdmjvJHpIT2XbBlXGzyrYo6dQHzm5tndlAiEA%2BJHj6kCg6P1dD2%2Fr%2F39CgTJtJq8JmmMxnn3VHBNTc60qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuLEX%2FA8WMlHIBzRircAyS1YZYzJhwAedK8bkHGAzM0X1svbiB2Q7ZsU1WXnDPcHkkQs6DvqDWAHFwF7eqF%2Fgb5IaeDUbOR04UXb8rGt%2FZcttZo8ctVuODSUCk3Lf%2Bu51LTmj6ZFEij4%2FDRCUBJtFPmikV%2FM4zQkfNH0HQSvPeNNEt%2BoERfvwezEYTHKEhh4A%2FomH2aI1Y%2BlSzcQMlZC6GJr7Ol1%2BxGREGXIhD62o%2B5uE0KQIJmuSRl3lkPKWqSdzf%2By%2FoVV3OuzvuyK6%2BXrTLAGhH4doOnCJcNkXkmZ5KN6GI045aqw%2BQIWp%2BxMNrPN%2BFv6xzL0wnvUzwF4eLdf%2BJt%2BCKDhVDEw7E1ixyKY9BkmeITg79VyWlQU2%2FoF7dz02l%2B6SiJ1lXkXcmd9Nt6H3BNFeDnws410Z%2FmBDj3UT%2F6KOpb0ye3xeJqFDZx%2BRQwdQL9hQltI6SFfWDFnFH3Fbr4ebi2gMMAWffjx5gbO7GQNfZYwPL9mcF08obsqMOj7OAo8Iwu%2FsJg966lwj6DzaDZQ07seWF%2FdamxboVdWi1FSxprfMo%2FC62wCctC8DNDpq68EQyYkob%2FiP%2BoauDpX1rhOEaxNg7NcZT53Em8WtXrVAKhNhdtmREuH016DLmNEg7GdYp6imTVVm3xMKvu1cAGOqUBhoVi%2FJ9GNRdBzuZJyXdUO5bbvNMcAZ%2FZ84zuyYxm0qZpOvw8S%2BeMA8UorOnGJU1dvHPfuiEsYYGXrOmP5qLU7Xy5TIld0w%2FQTX7PO8YKIo6E01NuTHJEgScBAnBp8WG%2B6YwwFdeeXE4m3E0sLgnH7RhsixvPmyhExoZCEqh3ig1iwumxGtAeEUXTPx067i%2FqLuG9aemwY8InFX4qFk%2F75BSParw%2B&X-Amz-Signature=7c4e2289e8d50be4bb0291bb4a81bac53a04872f7529b2f9377ca1a74cc9acb0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVNSCYT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIHoJRoe1tFJRdmjvJHpIT2XbBlXGzyrYo6dQHzm5tndlAiEA%2BJHj6kCg6P1dD2%2Fr%2F39CgTJtJq8JmmMxnn3VHBNTc60qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuLEX%2FA8WMlHIBzRircAyS1YZYzJhwAedK8bkHGAzM0X1svbiB2Q7ZsU1WXnDPcHkkQs6DvqDWAHFwF7eqF%2Fgb5IaeDUbOR04UXb8rGt%2FZcttZo8ctVuODSUCk3Lf%2Bu51LTmj6ZFEij4%2FDRCUBJtFPmikV%2FM4zQkfNH0HQSvPeNNEt%2BoERfvwezEYTHKEhh4A%2FomH2aI1Y%2BlSzcQMlZC6GJr7Ol1%2BxGREGXIhD62o%2B5uE0KQIJmuSRl3lkPKWqSdzf%2By%2FoVV3OuzvuyK6%2BXrTLAGhH4doOnCJcNkXkmZ5KN6GI045aqw%2BQIWp%2BxMNrPN%2BFv6xzL0wnvUzwF4eLdf%2BJt%2BCKDhVDEw7E1ixyKY9BkmeITg79VyWlQU2%2FoF7dz02l%2B6SiJ1lXkXcmd9Nt6H3BNFeDnws410Z%2FmBDj3UT%2F6KOpb0ye3xeJqFDZx%2BRQwdQL9hQltI6SFfWDFnFH3Fbr4ebi2gMMAWffjx5gbO7GQNfZYwPL9mcF08obsqMOj7OAo8Iwu%2FsJg966lwj6DzaDZQ07seWF%2FdamxboVdWi1FSxprfMo%2FC62wCctC8DNDpq68EQyYkob%2FiP%2BoauDpX1rhOEaxNg7NcZT53Em8WtXrVAKhNhdtmREuH016DLmNEg7GdYp6imTVVm3xMKvu1cAGOqUBhoVi%2FJ9GNRdBzuZJyXdUO5bbvNMcAZ%2FZ84zuyYxm0qZpOvw8S%2BeMA8UorOnGJU1dvHPfuiEsYYGXrOmP5qLU7Xy5TIld0w%2FQTX7PO8YKIo6E01NuTHJEgScBAnBp8WG%2B6YwwFdeeXE4m3E0sLgnH7RhsixvPmyhExoZCEqh3ig1iwumxGtAeEUXTPx067i%2FqLuG9aemwY8InFX4qFk%2F75BSParw%2B&X-Amz-Signature=980af793ae972d6396151b47cf83729fb7ebe010245009773b502be3c7a8ff71&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVNSCYT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIHoJRoe1tFJRdmjvJHpIT2XbBlXGzyrYo6dQHzm5tndlAiEA%2BJHj6kCg6P1dD2%2Fr%2F39CgTJtJq8JmmMxnn3VHBNTc60qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuLEX%2FA8WMlHIBzRircAyS1YZYzJhwAedK8bkHGAzM0X1svbiB2Q7ZsU1WXnDPcHkkQs6DvqDWAHFwF7eqF%2Fgb5IaeDUbOR04UXb8rGt%2FZcttZo8ctVuODSUCk3Lf%2Bu51LTmj6ZFEij4%2FDRCUBJtFPmikV%2FM4zQkfNH0HQSvPeNNEt%2BoERfvwezEYTHKEhh4A%2FomH2aI1Y%2BlSzcQMlZC6GJr7Ol1%2BxGREGXIhD62o%2B5uE0KQIJmuSRl3lkPKWqSdzf%2By%2FoVV3OuzvuyK6%2BXrTLAGhH4doOnCJcNkXkmZ5KN6GI045aqw%2BQIWp%2BxMNrPN%2BFv6xzL0wnvUzwF4eLdf%2BJt%2BCKDhVDEw7E1ixyKY9BkmeITg79VyWlQU2%2FoF7dz02l%2B6SiJ1lXkXcmd9Nt6H3BNFeDnws410Z%2FmBDj3UT%2F6KOpb0ye3xeJqFDZx%2BRQwdQL9hQltI6SFfWDFnFH3Fbr4ebi2gMMAWffjx5gbO7GQNfZYwPL9mcF08obsqMOj7OAo8Iwu%2FsJg966lwj6DzaDZQ07seWF%2FdamxboVdWi1FSxprfMo%2FC62wCctC8DNDpq68EQyYkob%2FiP%2BoauDpX1rhOEaxNg7NcZT53Em8WtXrVAKhNhdtmREuH016DLmNEg7GdYp6imTVVm3xMKvu1cAGOqUBhoVi%2FJ9GNRdBzuZJyXdUO5bbvNMcAZ%2FZ84zuyYxm0qZpOvw8S%2BeMA8UorOnGJU1dvHPfuiEsYYGXrOmP5qLU7Xy5TIld0w%2FQTX7PO8YKIo6E01NuTHJEgScBAnBp8WG%2B6YwwFdeeXE4m3E0sLgnH7RhsixvPmyhExoZCEqh3ig1iwumxGtAeEUXTPx067i%2FqLuG9aemwY8InFX4qFk%2F75BSParw%2B&X-Amz-Signature=a3048537c4f66d16cb2656cae66d0eb10123f77221c019991c5111024c73163d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVNSCYT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIHoJRoe1tFJRdmjvJHpIT2XbBlXGzyrYo6dQHzm5tndlAiEA%2BJHj6kCg6P1dD2%2Fr%2F39CgTJtJq8JmmMxnn3VHBNTc60qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuLEX%2FA8WMlHIBzRircAyS1YZYzJhwAedK8bkHGAzM0X1svbiB2Q7ZsU1WXnDPcHkkQs6DvqDWAHFwF7eqF%2Fgb5IaeDUbOR04UXb8rGt%2FZcttZo8ctVuODSUCk3Lf%2Bu51LTmj6ZFEij4%2FDRCUBJtFPmikV%2FM4zQkfNH0HQSvPeNNEt%2BoERfvwezEYTHKEhh4A%2FomH2aI1Y%2BlSzcQMlZC6GJr7Ol1%2BxGREGXIhD62o%2B5uE0KQIJmuSRl3lkPKWqSdzf%2By%2FoVV3OuzvuyK6%2BXrTLAGhH4doOnCJcNkXkmZ5KN6GI045aqw%2BQIWp%2BxMNrPN%2BFv6xzL0wnvUzwF4eLdf%2BJt%2BCKDhVDEw7E1ixyKY9BkmeITg79VyWlQU2%2FoF7dz02l%2B6SiJ1lXkXcmd9Nt6H3BNFeDnws410Z%2FmBDj3UT%2F6KOpb0ye3xeJqFDZx%2BRQwdQL9hQltI6SFfWDFnFH3Fbr4ebi2gMMAWffjx5gbO7GQNfZYwPL9mcF08obsqMOj7OAo8Iwu%2FsJg966lwj6DzaDZQ07seWF%2FdamxboVdWi1FSxprfMo%2FC62wCctC8DNDpq68EQyYkob%2FiP%2BoauDpX1rhOEaxNg7NcZT53Em8WtXrVAKhNhdtmREuH016DLmNEg7GdYp6imTVVm3xMKvu1cAGOqUBhoVi%2FJ9GNRdBzuZJyXdUO5bbvNMcAZ%2FZ84zuyYxm0qZpOvw8S%2BeMA8UorOnGJU1dvHPfuiEsYYGXrOmP5qLU7Xy5TIld0w%2FQTX7PO8YKIo6E01NuTHJEgScBAnBp8WG%2B6YwwFdeeXE4m3E0sLgnH7RhsixvPmyhExoZCEqh3ig1iwumxGtAeEUXTPx067i%2FqLuG9aemwY8InFX4qFk%2F75BSParw%2B&X-Amz-Signature=f7240c6e8ffbefb57ea92c3cfa9e38b1073cd0267f892bed4c656603d5a1341c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVNSCYT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIHoJRoe1tFJRdmjvJHpIT2XbBlXGzyrYo6dQHzm5tndlAiEA%2BJHj6kCg6P1dD2%2Fr%2F39CgTJtJq8JmmMxnn3VHBNTc60qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuLEX%2FA8WMlHIBzRircAyS1YZYzJhwAedK8bkHGAzM0X1svbiB2Q7ZsU1WXnDPcHkkQs6DvqDWAHFwF7eqF%2Fgb5IaeDUbOR04UXb8rGt%2FZcttZo8ctVuODSUCk3Lf%2Bu51LTmj6ZFEij4%2FDRCUBJtFPmikV%2FM4zQkfNH0HQSvPeNNEt%2BoERfvwezEYTHKEhh4A%2FomH2aI1Y%2BlSzcQMlZC6GJr7Ol1%2BxGREGXIhD62o%2B5uE0KQIJmuSRl3lkPKWqSdzf%2By%2FoVV3OuzvuyK6%2BXrTLAGhH4doOnCJcNkXkmZ5KN6GI045aqw%2BQIWp%2BxMNrPN%2BFv6xzL0wnvUzwF4eLdf%2BJt%2BCKDhVDEw7E1ixyKY9BkmeITg79VyWlQU2%2FoF7dz02l%2B6SiJ1lXkXcmd9Nt6H3BNFeDnws410Z%2FmBDj3UT%2F6KOpb0ye3xeJqFDZx%2BRQwdQL9hQltI6SFfWDFnFH3Fbr4ebi2gMMAWffjx5gbO7GQNfZYwPL9mcF08obsqMOj7OAo8Iwu%2FsJg966lwj6DzaDZQ07seWF%2FdamxboVdWi1FSxprfMo%2FC62wCctC8DNDpq68EQyYkob%2FiP%2BoauDpX1rhOEaxNg7NcZT53Em8WtXrVAKhNhdtmREuH016DLmNEg7GdYp6imTVVm3xMKvu1cAGOqUBhoVi%2FJ9GNRdBzuZJyXdUO5bbvNMcAZ%2FZ84zuyYxm0qZpOvw8S%2BeMA8UorOnGJU1dvHPfuiEsYYGXrOmP5qLU7Xy5TIld0w%2FQTX7PO8YKIo6E01NuTHJEgScBAnBp8WG%2B6YwwFdeeXE4m3E0sLgnH7RhsixvPmyhExoZCEqh3ig1iwumxGtAeEUXTPx067i%2FqLuG9aemwY8InFX4qFk%2F75BSParw%2B&X-Amz-Signature=ae37f0ac6714d1f730b62fd3e048e1904495cd364a01e851fbf8523ecf905d1a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AVNSCYT%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T022107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIHoJRoe1tFJRdmjvJHpIT2XbBlXGzyrYo6dQHzm5tndlAiEA%2BJHj6kCg6P1dD2%2Fr%2F39CgTJtJq8JmmMxnn3VHBNTc60qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNuLEX%2FA8WMlHIBzRircAyS1YZYzJhwAedK8bkHGAzM0X1svbiB2Q7ZsU1WXnDPcHkkQs6DvqDWAHFwF7eqF%2Fgb5IaeDUbOR04UXb8rGt%2FZcttZo8ctVuODSUCk3Lf%2Bu51LTmj6ZFEij4%2FDRCUBJtFPmikV%2FM4zQkfNH0HQSvPeNNEt%2BoERfvwezEYTHKEhh4A%2FomH2aI1Y%2BlSzcQMlZC6GJr7Ol1%2BxGREGXIhD62o%2B5uE0KQIJmuSRl3lkPKWqSdzf%2By%2FoVV3OuzvuyK6%2BXrTLAGhH4doOnCJcNkXkmZ5KN6GI045aqw%2BQIWp%2BxMNrPN%2BFv6xzL0wnvUzwF4eLdf%2BJt%2BCKDhVDEw7E1ixyKY9BkmeITg79VyWlQU2%2FoF7dz02l%2B6SiJ1lXkXcmd9Nt6H3BNFeDnws410Z%2FmBDj3UT%2F6KOpb0ye3xeJqFDZx%2BRQwdQL9hQltI6SFfWDFnFH3Fbr4ebi2gMMAWffjx5gbO7GQNfZYwPL9mcF08obsqMOj7OAo8Iwu%2FsJg966lwj6DzaDZQ07seWF%2FdamxboVdWi1FSxprfMo%2FC62wCctC8DNDpq68EQyYkob%2FiP%2BoauDpX1rhOEaxNg7NcZT53Em8WtXrVAKhNhdtmREuH016DLmNEg7GdYp6imTVVm3xMKvu1cAGOqUBhoVi%2FJ9GNRdBzuZJyXdUO5bbvNMcAZ%2FZ84zuyYxm0qZpOvw8S%2BeMA8UorOnGJU1dvHPfuiEsYYGXrOmP5qLU7Xy5TIld0w%2FQTX7PO8YKIo6E01NuTHJEgScBAnBp8WG%2B6YwwFdeeXE4m3E0sLgnH7RhsixvPmyhExoZCEqh3ig1iwumxGtAeEUXTPx067i%2FqLuG9aemwY8InFX4qFk%2F75BSParw%2B&X-Amz-Signature=f3cdd5a0aecb61e243b249befe454cf380890bfb3a78cd529b508f737b91f8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGGQNAG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BMjP09d8zGr3tGGFyd7UrsDFMG1ry8ST3YljxAzpcLQIgDl3710Y20Jx5srPBxyDNEABGHaKFKKSdNFIjL4APQLcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsbgMn5bZM2QEgIbircA4tJhW2FKwl8Nnz6yPFBqLE6UmbGUCre3lxktuhymPOFVHDgF1V8IEIbJVy8a4CmQOqieepmvXRiyEQDJ12NsRL4X%2BzyHZ7I7RNl6%2Fk05VM7caW9tK0AocEsflYgjsOwqIoBKZpNwITJEtT5rJhqj4P6UgN2oP%2FHh2WvFnFfnKckgMS86TIC7cU9BaObhDEEUEw9zFgk2LKEZK%2B2483L9lC1zSPdLFG2C%2FRWttOJpqrkt5tug5fuLC8TgE8Oy8DLWrZBgqN0MMKFBdOsnYD49VR%2FQFCtxpjIhJSA62PHfypzbjYRl%2Ftvf7cTlnwXyFNJQgCWkLe5ZUzItcBEpZjX9qq8E6vokPGFVY7tCMO5FmjtmTEo99qf9mEnhGwrg4ToeF1AtF8BZFjkmE0aNn9UlEeLlS3w2LXsVy1oX%2Fepm8K6EIgMv%2BlaUpVwSagNqE0jTqlV9IcaMIZnIPgzMNiOYcbK%2F%2BLEkPE86FSMm6lM3OzdXkTOwOBV%2B%2F3ywrDHZ2lJf9hRdnUVkQAxVOAKre1VC%2BoNZtaY7Fm80Uqdpq5KnoC4anMcLObTkOn4r55APanb0jhShRpYBJZL3U0kz3bpu%2Fnzcqo6L8zMTac2S19fPwne3T7mIWffIQ%2B4Mgv2MJiEyr4GOqUBB6lR3HhayUUG%2BDTgqyNk1uK0gsbAlid2o0b67r6U53N698rOfUgsQjzAdfb6LG7bCoQiNurB501Vi97azVG%2FOWMxPbCeRpp1rog4ywQs%2ByrkN1ip6KZYvKRm65JVYjn7o9kKh5hNYUCsHcG%2BLKkwHx6oRoD4LwR1ZsWQbjmVOlOWnYP3eec1KrHih31YStfBlyLj2xcfeAnn1yAkE6P9V%2BuNWETr&X-Amz-Signature=c10cc82bd45e464f7840e6ff3ce070d1a5be10a73480cb56cacd1a881651757d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGGQNAG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BMjP09d8zGr3tGGFyd7UrsDFMG1ry8ST3YljxAzpcLQIgDl3710Y20Jx5srPBxyDNEABGHaKFKKSdNFIjL4APQLcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsbgMn5bZM2QEgIbircA4tJhW2FKwl8Nnz6yPFBqLE6UmbGUCre3lxktuhymPOFVHDgF1V8IEIbJVy8a4CmQOqieepmvXRiyEQDJ12NsRL4X%2BzyHZ7I7RNl6%2Fk05VM7caW9tK0AocEsflYgjsOwqIoBKZpNwITJEtT5rJhqj4P6UgN2oP%2FHh2WvFnFfnKckgMS86TIC7cU9BaObhDEEUEw9zFgk2LKEZK%2B2483L9lC1zSPdLFG2C%2FRWttOJpqrkt5tug5fuLC8TgE8Oy8DLWrZBgqN0MMKFBdOsnYD49VR%2FQFCtxpjIhJSA62PHfypzbjYRl%2Ftvf7cTlnwXyFNJQgCWkLe5ZUzItcBEpZjX9qq8E6vokPGFVY7tCMO5FmjtmTEo99qf9mEnhGwrg4ToeF1AtF8BZFjkmE0aNn9UlEeLlS3w2LXsVy1oX%2Fepm8K6EIgMv%2BlaUpVwSagNqE0jTqlV9IcaMIZnIPgzMNiOYcbK%2F%2BLEkPE86FSMm6lM3OzdXkTOwOBV%2B%2F3ywrDHZ2lJf9hRdnUVkQAxVOAKre1VC%2BoNZtaY7Fm80Uqdpq5KnoC4anMcLObTkOn4r55APanb0jhShRpYBJZL3U0kz3bpu%2Fnzcqo6L8zMTac2S19fPwne3T7mIWffIQ%2B4Mgv2MJiEyr4GOqUBB6lR3HhayUUG%2BDTgqyNk1uK0gsbAlid2o0b67r6U53N698rOfUgsQjzAdfb6LG7bCoQiNurB501Vi97azVG%2FOWMxPbCeRpp1rog4ywQs%2ByrkN1ip6KZYvKRm65JVYjn7o9kKh5hNYUCsHcG%2BLKkwHx6oRoD4LwR1ZsWQbjmVOlOWnYP3eec1KrHih31YStfBlyLj2xcfeAnn1yAkE6P9V%2BuNWETr&X-Amz-Signature=b420f6dc4198a7ea0f9e98861b02d56587fca71873d1d19500152cbb7f9f92ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGGQNAG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BMjP09d8zGr3tGGFyd7UrsDFMG1ry8ST3YljxAzpcLQIgDl3710Y20Jx5srPBxyDNEABGHaKFKKSdNFIjL4APQLcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsbgMn5bZM2QEgIbircA4tJhW2FKwl8Nnz6yPFBqLE6UmbGUCre3lxktuhymPOFVHDgF1V8IEIbJVy8a4CmQOqieepmvXRiyEQDJ12NsRL4X%2BzyHZ7I7RNl6%2Fk05VM7caW9tK0AocEsflYgjsOwqIoBKZpNwITJEtT5rJhqj4P6UgN2oP%2FHh2WvFnFfnKckgMS86TIC7cU9BaObhDEEUEw9zFgk2LKEZK%2B2483L9lC1zSPdLFG2C%2FRWttOJpqrkt5tug5fuLC8TgE8Oy8DLWrZBgqN0MMKFBdOsnYD49VR%2FQFCtxpjIhJSA62PHfypzbjYRl%2Ftvf7cTlnwXyFNJQgCWkLe5ZUzItcBEpZjX9qq8E6vokPGFVY7tCMO5FmjtmTEo99qf9mEnhGwrg4ToeF1AtF8BZFjkmE0aNn9UlEeLlS3w2LXsVy1oX%2Fepm8K6EIgMv%2BlaUpVwSagNqE0jTqlV9IcaMIZnIPgzMNiOYcbK%2F%2BLEkPE86FSMm6lM3OzdXkTOwOBV%2B%2F3ywrDHZ2lJf9hRdnUVkQAxVOAKre1VC%2BoNZtaY7Fm80Uqdpq5KnoC4anMcLObTkOn4r55APanb0jhShRpYBJZL3U0kz3bpu%2Fnzcqo6L8zMTac2S19fPwne3T7mIWffIQ%2B4Mgv2MJiEyr4GOqUBB6lR3HhayUUG%2BDTgqyNk1uK0gsbAlid2o0b67r6U53N698rOfUgsQjzAdfb6LG7bCoQiNurB501Vi97azVG%2FOWMxPbCeRpp1rog4ywQs%2ByrkN1ip6KZYvKRm65JVYjn7o9kKh5hNYUCsHcG%2BLKkwHx6oRoD4LwR1ZsWQbjmVOlOWnYP3eec1KrHih31YStfBlyLj2xcfeAnn1yAkE6P9V%2BuNWETr&X-Amz-Signature=a309100f88d3674e1a1a63dc19a4c687bbc542f9010026f1bcfd5f0b2d4e798b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGGQNAG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BMjP09d8zGr3tGGFyd7UrsDFMG1ry8ST3YljxAzpcLQIgDl3710Y20Jx5srPBxyDNEABGHaKFKKSdNFIjL4APQLcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsbgMn5bZM2QEgIbircA4tJhW2FKwl8Nnz6yPFBqLE6UmbGUCre3lxktuhymPOFVHDgF1V8IEIbJVy8a4CmQOqieepmvXRiyEQDJ12NsRL4X%2BzyHZ7I7RNl6%2Fk05VM7caW9tK0AocEsflYgjsOwqIoBKZpNwITJEtT5rJhqj4P6UgN2oP%2FHh2WvFnFfnKckgMS86TIC7cU9BaObhDEEUEw9zFgk2LKEZK%2B2483L9lC1zSPdLFG2C%2FRWttOJpqrkt5tug5fuLC8TgE8Oy8DLWrZBgqN0MMKFBdOsnYD49VR%2FQFCtxpjIhJSA62PHfypzbjYRl%2Ftvf7cTlnwXyFNJQgCWkLe5ZUzItcBEpZjX9qq8E6vokPGFVY7tCMO5FmjtmTEo99qf9mEnhGwrg4ToeF1AtF8BZFjkmE0aNn9UlEeLlS3w2LXsVy1oX%2Fepm8K6EIgMv%2BlaUpVwSagNqE0jTqlV9IcaMIZnIPgzMNiOYcbK%2F%2BLEkPE86FSMm6lM3OzdXkTOwOBV%2B%2F3ywrDHZ2lJf9hRdnUVkQAxVOAKre1VC%2BoNZtaY7Fm80Uqdpq5KnoC4anMcLObTkOn4r55APanb0jhShRpYBJZL3U0kz3bpu%2Fnzcqo6L8zMTac2S19fPwne3T7mIWffIQ%2B4Mgv2MJiEyr4GOqUBB6lR3HhayUUG%2BDTgqyNk1uK0gsbAlid2o0b67r6U53N698rOfUgsQjzAdfb6LG7bCoQiNurB501Vi97azVG%2FOWMxPbCeRpp1rog4ywQs%2ByrkN1ip6KZYvKRm65JVYjn7o9kKh5hNYUCsHcG%2BLKkwHx6oRoD4LwR1ZsWQbjmVOlOWnYP3eec1KrHih31YStfBlyLj2xcfeAnn1yAkE6P9V%2BuNWETr&X-Amz-Signature=2c92c54ac8717e362c50c80509af5daa389afc358c4704908fe9c36e75148237&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGGQNAG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BMjP09d8zGr3tGGFyd7UrsDFMG1ry8ST3YljxAzpcLQIgDl3710Y20Jx5srPBxyDNEABGHaKFKKSdNFIjL4APQLcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsbgMn5bZM2QEgIbircA4tJhW2FKwl8Nnz6yPFBqLE6UmbGUCre3lxktuhymPOFVHDgF1V8IEIbJVy8a4CmQOqieepmvXRiyEQDJ12NsRL4X%2BzyHZ7I7RNl6%2Fk05VM7caW9tK0AocEsflYgjsOwqIoBKZpNwITJEtT5rJhqj4P6UgN2oP%2FHh2WvFnFfnKckgMS86TIC7cU9BaObhDEEUEw9zFgk2LKEZK%2B2483L9lC1zSPdLFG2C%2FRWttOJpqrkt5tug5fuLC8TgE8Oy8DLWrZBgqN0MMKFBdOsnYD49VR%2FQFCtxpjIhJSA62PHfypzbjYRl%2Ftvf7cTlnwXyFNJQgCWkLe5ZUzItcBEpZjX9qq8E6vokPGFVY7tCMO5FmjtmTEo99qf9mEnhGwrg4ToeF1AtF8BZFjkmE0aNn9UlEeLlS3w2LXsVy1oX%2Fepm8K6EIgMv%2BlaUpVwSagNqE0jTqlV9IcaMIZnIPgzMNiOYcbK%2F%2BLEkPE86FSMm6lM3OzdXkTOwOBV%2B%2F3ywrDHZ2lJf9hRdnUVkQAxVOAKre1VC%2BoNZtaY7Fm80Uqdpq5KnoC4anMcLObTkOn4r55APanb0jhShRpYBJZL3U0kz3bpu%2Fnzcqo6L8zMTac2S19fPwne3T7mIWffIQ%2B4Mgv2MJiEyr4GOqUBB6lR3HhayUUG%2BDTgqyNk1uK0gsbAlid2o0b67r6U53N698rOfUgsQjzAdfb6LG7bCoQiNurB501Vi97azVG%2FOWMxPbCeRpp1rog4ywQs%2ByrkN1ip6KZYvKRm65JVYjn7o9kKh5hNYUCsHcG%2BLKkwHx6oRoD4LwR1ZsWQbjmVOlOWnYP3eec1KrHih31YStfBlyLj2xcfeAnn1yAkE6P9V%2BuNWETr&X-Amz-Signature=353af9a3233d86f38b109c4202071a729772f03bcddc7e6c76aba13065fd4113&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGGQNAG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BMjP09d8zGr3tGGFyd7UrsDFMG1ry8ST3YljxAzpcLQIgDl3710Y20Jx5srPBxyDNEABGHaKFKKSdNFIjL4APQLcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsbgMn5bZM2QEgIbircA4tJhW2FKwl8Nnz6yPFBqLE6UmbGUCre3lxktuhymPOFVHDgF1V8IEIbJVy8a4CmQOqieepmvXRiyEQDJ12NsRL4X%2BzyHZ7I7RNl6%2Fk05VM7caW9tK0AocEsflYgjsOwqIoBKZpNwITJEtT5rJhqj4P6UgN2oP%2FHh2WvFnFfnKckgMS86TIC7cU9BaObhDEEUEw9zFgk2LKEZK%2B2483L9lC1zSPdLFG2C%2FRWttOJpqrkt5tug5fuLC8TgE8Oy8DLWrZBgqN0MMKFBdOsnYD49VR%2FQFCtxpjIhJSA62PHfypzbjYRl%2Ftvf7cTlnwXyFNJQgCWkLe5ZUzItcBEpZjX9qq8E6vokPGFVY7tCMO5FmjtmTEo99qf9mEnhGwrg4ToeF1AtF8BZFjkmE0aNn9UlEeLlS3w2LXsVy1oX%2Fepm8K6EIgMv%2BlaUpVwSagNqE0jTqlV9IcaMIZnIPgzMNiOYcbK%2F%2BLEkPE86FSMm6lM3OzdXkTOwOBV%2B%2F3ywrDHZ2lJf9hRdnUVkQAxVOAKre1VC%2BoNZtaY7Fm80Uqdpq5KnoC4anMcLObTkOn4r55APanb0jhShRpYBJZL3U0kz3bpu%2Fnzcqo6L8zMTac2S19fPwne3T7mIWffIQ%2B4Mgv2MJiEyr4GOqUBB6lR3HhayUUG%2BDTgqyNk1uK0gsbAlid2o0b67r6U53N698rOfUgsQjzAdfb6LG7bCoQiNurB501Vi97azVG%2FOWMxPbCeRpp1rog4ywQs%2ByrkN1ip6KZYvKRm65JVYjn7o9kKh5hNYUCsHcG%2BLKkwHx6oRoD4LwR1ZsWQbjmVOlOWnYP3eec1KrHih31YStfBlyLj2xcfeAnn1yAkE6P9V%2BuNWETr&X-Amz-Signature=fd0fa7b479b12f1c1e641703cc39a07a1fa11bb847b64063f571a99237e39ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGGQNAG%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T070814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BMjP09d8zGr3tGGFyd7UrsDFMG1ry8ST3YljxAzpcLQIgDl3710Y20Jx5srPBxyDNEABGHaKFKKSdNFIjL4APQLcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsbgMn5bZM2QEgIbircA4tJhW2FKwl8Nnz6yPFBqLE6UmbGUCre3lxktuhymPOFVHDgF1V8IEIbJVy8a4CmQOqieepmvXRiyEQDJ12NsRL4X%2BzyHZ7I7RNl6%2Fk05VM7caW9tK0AocEsflYgjsOwqIoBKZpNwITJEtT5rJhqj4P6UgN2oP%2FHh2WvFnFfnKckgMS86TIC7cU9BaObhDEEUEw9zFgk2LKEZK%2B2483L9lC1zSPdLFG2C%2FRWttOJpqrkt5tug5fuLC8TgE8Oy8DLWrZBgqN0MMKFBdOsnYD49VR%2FQFCtxpjIhJSA62PHfypzbjYRl%2Ftvf7cTlnwXyFNJQgCWkLe5ZUzItcBEpZjX9qq8E6vokPGFVY7tCMO5FmjtmTEo99qf9mEnhGwrg4ToeF1AtF8BZFjkmE0aNn9UlEeLlS3w2LXsVy1oX%2Fepm8K6EIgMv%2BlaUpVwSagNqE0jTqlV9IcaMIZnIPgzMNiOYcbK%2F%2BLEkPE86FSMm6lM3OzdXkTOwOBV%2B%2F3ywrDHZ2lJf9hRdnUVkQAxVOAKre1VC%2BoNZtaY7Fm80Uqdpq5KnoC4anMcLObTkOn4r55APanb0jhShRpYBJZL3U0kz3bpu%2Fnzcqo6L8zMTac2S19fPwne3T7mIWffIQ%2B4Mgv2MJiEyr4GOqUBB6lR3HhayUUG%2BDTgqyNk1uK0gsbAlid2o0b67r6U53N698rOfUgsQjzAdfb6LG7bCoQiNurB501Vi97azVG%2FOWMxPbCeRpp1rog4ywQs%2ByrkN1ip6KZYvKRm65JVYjn7o9kKh5hNYUCsHcG%2BLKkwHx6oRoD4LwR1ZsWQbjmVOlOWnYP3eec1KrHih31YStfBlyLj2xcfeAnn1yAkE6P9V%2BuNWETr&X-Amz-Signature=92fc3798cb8d9ca46a1c287bb1a240fb2f2f214e94856f31b0deaeec9686f725&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

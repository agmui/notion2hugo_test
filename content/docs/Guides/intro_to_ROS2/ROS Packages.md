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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXUBH2L%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDMsPA5xilBCs%2Bcf4pd3J%2FXyCdaOxjChN9MovKyPKUZYAiEAntyUWwWx0srv0yIuN1PBtHuG6eys0jiBIe8jbs0CCnUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDD1I5hqmFpULqpdpBSrcA6ywZOXkMpUh7cHGrIGg%2FadmKbn3OfYJXySqIDsJkUUwh80zzMbB8zu7K9YjUJ6IO9k%2FqsnM%2FIlUolXPXvLLoT%2BEMZoLy65G7wy3uwJiUd4uoX0tmp83iq5q41eXQpIcyX36UM6aobsmahdUYVK75Ui%2BvxY1kYlt24eSZIGoHTXM0ga7NxweWRAGHazp4DGz33Ikqb0aNmOZkE4ZCP0azEJ4NmIaaDn2kRT8OXF462tGmdUU5n7iXTU3anEYNF6TdmtiYSqD1vJ%2FX0wSP9OiTbQdnxG0gAcJIxizneZqMFck9%2Fl0wtei5HTlINYjdzVzO%2Bv0c7e2HxGnHQNLaR1UyxRwpGiktZuxmDC0zNpBylTkGi1Azu8U%2Byl8HvbP988Y%2BNSS1yDsxGXoWk2tG6dmsgs7%2FAt3zSxjtrfcgP%2FFy8vZtbUq1yzUQSIHhnSleP1p%2FAKKz4iZmPVhvSSLTnBsqKENsM05VsnV1IrAXjONXMk9OcrDraVn0MUhNb%2F9pBXX%2B4LhyXNX2aDQ3RLuI3lgV5qMWJNNrYy4rgXzYpCeZSuNYcCegwFsJ2blIMuBv6sFZ44UsXFflHAaHegmngy0C6UGScZHyZcsMuZu1OqTCzaZw9bcNzuG8DaDtD3kMJCYscIGOqUBbEVaaSuKdAW5D2WS3dA1m60L6oOIP81OBrYGkeiL5JPJ1Oi%2BY6fxY%2FNrqTPjIINq0fasU2W7wvD%2FN7G%2Fb70cN%2B0zajh8DHyqL%2B0R7idrv4SIV20H%2FNZPWKjkx44armAz7lLXKz7w9fn4yRauhpTntuhbhaSR4%2BBMstIpcj635OfZ3M0EmvkUjeuVNNz36G0oKRKIY5%2FdPvtR%2F5sHNMUl4a7lhm%2Fy&X-Amz-Signature=17a56eca288cfddc3e42ecfc31717482c409ecd5f7f2ede1b3340584dfd9b18c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXUBH2L%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDMsPA5xilBCs%2Bcf4pd3J%2FXyCdaOxjChN9MovKyPKUZYAiEAntyUWwWx0srv0yIuN1PBtHuG6eys0jiBIe8jbs0CCnUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDD1I5hqmFpULqpdpBSrcA6ywZOXkMpUh7cHGrIGg%2FadmKbn3OfYJXySqIDsJkUUwh80zzMbB8zu7K9YjUJ6IO9k%2FqsnM%2FIlUolXPXvLLoT%2BEMZoLy65G7wy3uwJiUd4uoX0tmp83iq5q41eXQpIcyX36UM6aobsmahdUYVK75Ui%2BvxY1kYlt24eSZIGoHTXM0ga7NxweWRAGHazp4DGz33Ikqb0aNmOZkE4ZCP0azEJ4NmIaaDn2kRT8OXF462tGmdUU5n7iXTU3anEYNF6TdmtiYSqD1vJ%2FX0wSP9OiTbQdnxG0gAcJIxizneZqMFck9%2Fl0wtei5HTlINYjdzVzO%2Bv0c7e2HxGnHQNLaR1UyxRwpGiktZuxmDC0zNpBylTkGi1Azu8U%2Byl8HvbP988Y%2BNSS1yDsxGXoWk2tG6dmsgs7%2FAt3zSxjtrfcgP%2FFy8vZtbUq1yzUQSIHhnSleP1p%2FAKKz4iZmPVhvSSLTnBsqKENsM05VsnV1IrAXjONXMk9OcrDraVn0MUhNb%2F9pBXX%2B4LhyXNX2aDQ3RLuI3lgV5qMWJNNrYy4rgXzYpCeZSuNYcCegwFsJ2blIMuBv6sFZ44UsXFflHAaHegmngy0C6UGScZHyZcsMuZu1OqTCzaZw9bcNzuG8DaDtD3kMJCYscIGOqUBbEVaaSuKdAW5D2WS3dA1m60L6oOIP81OBrYGkeiL5JPJ1Oi%2BY6fxY%2FNrqTPjIINq0fasU2W7wvD%2FN7G%2Fb70cN%2B0zajh8DHyqL%2B0R7idrv4SIV20H%2FNZPWKjkx44armAz7lLXKz7w9fn4yRauhpTntuhbhaSR4%2BBMstIpcj635OfZ3M0EmvkUjeuVNNz36G0oKRKIY5%2FdPvtR%2F5sHNMUl4a7lhm%2Fy&X-Amz-Signature=9afc986ba005350fe3b46bc6bc9a5162b66f7568e1033d80bd4e25f81083b530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXUBH2L%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDMsPA5xilBCs%2Bcf4pd3J%2FXyCdaOxjChN9MovKyPKUZYAiEAntyUWwWx0srv0yIuN1PBtHuG6eys0jiBIe8jbs0CCnUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDD1I5hqmFpULqpdpBSrcA6ywZOXkMpUh7cHGrIGg%2FadmKbn3OfYJXySqIDsJkUUwh80zzMbB8zu7K9YjUJ6IO9k%2FqsnM%2FIlUolXPXvLLoT%2BEMZoLy65G7wy3uwJiUd4uoX0tmp83iq5q41eXQpIcyX36UM6aobsmahdUYVK75Ui%2BvxY1kYlt24eSZIGoHTXM0ga7NxweWRAGHazp4DGz33Ikqb0aNmOZkE4ZCP0azEJ4NmIaaDn2kRT8OXF462tGmdUU5n7iXTU3anEYNF6TdmtiYSqD1vJ%2FX0wSP9OiTbQdnxG0gAcJIxizneZqMFck9%2Fl0wtei5HTlINYjdzVzO%2Bv0c7e2HxGnHQNLaR1UyxRwpGiktZuxmDC0zNpBylTkGi1Azu8U%2Byl8HvbP988Y%2BNSS1yDsxGXoWk2tG6dmsgs7%2FAt3zSxjtrfcgP%2FFy8vZtbUq1yzUQSIHhnSleP1p%2FAKKz4iZmPVhvSSLTnBsqKENsM05VsnV1IrAXjONXMk9OcrDraVn0MUhNb%2F9pBXX%2B4LhyXNX2aDQ3RLuI3lgV5qMWJNNrYy4rgXzYpCeZSuNYcCegwFsJ2blIMuBv6sFZ44UsXFflHAaHegmngy0C6UGScZHyZcsMuZu1OqTCzaZw9bcNzuG8DaDtD3kMJCYscIGOqUBbEVaaSuKdAW5D2WS3dA1m60L6oOIP81OBrYGkeiL5JPJ1Oi%2BY6fxY%2FNrqTPjIINq0fasU2W7wvD%2FN7G%2Fb70cN%2B0zajh8DHyqL%2B0R7idrv4SIV20H%2FNZPWKjkx44armAz7lLXKz7w9fn4yRauhpTntuhbhaSR4%2BBMstIpcj635OfZ3M0EmvkUjeuVNNz36G0oKRKIY5%2FdPvtR%2F5sHNMUl4a7lhm%2Fy&X-Amz-Signature=920142f204b0d47df3c9e94e151a10fbb5a451641a6ec27403d7a3c0f506e435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXUBH2L%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDMsPA5xilBCs%2Bcf4pd3J%2FXyCdaOxjChN9MovKyPKUZYAiEAntyUWwWx0srv0yIuN1PBtHuG6eys0jiBIe8jbs0CCnUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDD1I5hqmFpULqpdpBSrcA6ywZOXkMpUh7cHGrIGg%2FadmKbn3OfYJXySqIDsJkUUwh80zzMbB8zu7K9YjUJ6IO9k%2FqsnM%2FIlUolXPXvLLoT%2BEMZoLy65G7wy3uwJiUd4uoX0tmp83iq5q41eXQpIcyX36UM6aobsmahdUYVK75Ui%2BvxY1kYlt24eSZIGoHTXM0ga7NxweWRAGHazp4DGz33Ikqb0aNmOZkE4ZCP0azEJ4NmIaaDn2kRT8OXF462tGmdUU5n7iXTU3anEYNF6TdmtiYSqD1vJ%2FX0wSP9OiTbQdnxG0gAcJIxizneZqMFck9%2Fl0wtei5HTlINYjdzVzO%2Bv0c7e2HxGnHQNLaR1UyxRwpGiktZuxmDC0zNpBylTkGi1Azu8U%2Byl8HvbP988Y%2BNSS1yDsxGXoWk2tG6dmsgs7%2FAt3zSxjtrfcgP%2FFy8vZtbUq1yzUQSIHhnSleP1p%2FAKKz4iZmPVhvSSLTnBsqKENsM05VsnV1IrAXjONXMk9OcrDraVn0MUhNb%2F9pBXX%2B4LhyXNX2aDQ3RLuI3lgV5qMWJNNrYy4rgXzYpCeZSuNYcCegwFsJ2blIMuBv6sFZ44UsXFflHAaHegmngy0C6UGScZHyZcsMuZu1OqTCzaZw9bcNzuG8DaDtD3kMJCYscIGOqUBbEVaaSuKdAW5D2WS3dA1m60L6oOIP81OBrYGkeiL5JPJ1Oi%2BY6fxY%2FNrqTPjIINq0fasU2W7wvD%2FN7G%2Fb70cN%2B0zajh8DHyqL%2B0R7idrv4SIV20H%2FNZPWKjkx44armAz7lLXKz7w9fn4yRauhpTntuhbhaSR4%2BBMstIpcj635OfZ3M0EmvkUjeuVNNz36G0oKRKIY5%2FdPvtR%2F5sHNMUl4a7lhm%2Fy&X-Amz-Signature=84bc02c09a789af83208bf151369d23eb1f70ab6f7a66c2ccbf343ff9e8a4d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXUBH2L%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDMsPA5xilBCs%2Bcf4pd3J%2FXyCdaOxjChN9MovKyPKUZYAiEAntyUWwWx0srv0yIuN1PBtHuG6eys0jiBIe8jbs0CCnUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDD1I5hqmFpULqpdpBSrcA6ywZOXkMpUh7cHGrIGg%2FadmKbn3OfYJXySqIDsJkUUwh80zzMbB8zu7K9YjUJ6IO9k%2FqsnM%2FIlUolXPXvLLoT%2BEMZoLy65G7wy3uwJiUd4uoX0tmp83iq5q41eXQpIcyX36UM6aobsmahdUYVK75Ui%2BvxY1kYlt24eSZIGoHTXM0ga7NxweWRAGHazp4DGz33Ikqb0aNmOZkE4ZCP0azEJ4NmIaaDn2kRT8OXF462tGmdUU5n7iXTU3anEYNF6TdmtiYSqD1vJ%2FX0wSP9OiTbQdnxG0gAcJIxizneZqMFck9%2Fl0wtei5HTlINYjdzVzO%2Bv0c7e2HxGnHQNLaR1UyxRwpGiktZuxmDC0zNpBylTkGi1Azu8U%2Byl8HvbP988Y%2BNSS1yDsxGXoWk2tG6dmsgs7%2FAt3zSxjtrfcgP%2FFy8vZtbUq1yzUQSIHhnSleP1p%2FAKKz4iZmPVhvSSLTnBsqKENsM05VsnV1IrAXjONXMk9OcrDraVn0MUhNb%2F9pBXX%2B4LhyXNX2aDQ3RLuI3lgV5qMWJNNrYy4rgXzYpCeZSuNYcCegwFsJ2blIMuBv6sFZ44UsXFflHAaHegmngy0C6UGScZHyZcsMuZu1OqTCzaZw9bcNzuG8DaDtD3kMJCYscIGOqUBbEVaaSuKdAW5D2WS3dA1m60L6oOIP81OBrYGkeiL5JPJ1Oi%2BY6fxY%2FNrqTPjIINq0fasU2W7wvD%2FN7G%2Fb70cN%2B0zajh8DHyqL%2B0R7idrv4SIV20H%2FNZPWKjkx44armAz7lLXKz7w9fn4yRauhpTntuhbhaSR4%2BBMstIpcj635OfZ3M0EmvkUjeuVNNz36G0oKRKIY5%2FdPvtR%2F5sHNMUl4a7lhm%2Fy&X-Amz-Signature=fbc008a85bae0ce8a271de9d9c3687a567a9d411d4b1de2e6a29f9c1dfdb47c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXUBH2L%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDMsPA5xilBCs%2Bcf4pd3J%2FXyCdaOxjChN9MovKyPKUZYAiEAntyUWwWx0srv0yIuN1PBtHuG6eys0jiBIe8jbs0CCnUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDD1I5hqmFpULqpdpBSrcA6ywZOXkMpUh7cHGrIGg%2FadmKbn3OfYJXySqIDsJkUUwh80zzMbB8zu7K9YjUJ6IO9k%2FqsnM%2FIlUolXPXvLLoT%2BEMZoLy65G7wy3uwJiUd4uoX0tmp83iq5q41eXQpIcyX36UM6aobsmahdUYVK75Ui%2BvxY1kYlt24eSZIGoHTXM0ga7NxweWRAGHazp4DGz33Ikqb0aNmOZkE4ZCP0azEJ4NmIaaDn2kRT8OXF462tGmdUU5n7iXTU3anEYNF6TdmtiYSqD1vJ%2FX0wSP9OiTbQdnxG0gAcJIxizneZqMFck9%2Fl0wtei5HTlINYjdzVzO%2Bv0c7e2HxGnHQNLaR1UyxRwpGiktZuxmDC0zNpBylTkGi1Azu8U%2Byl8HvbP988Y%2BNSS1yDsxGXoWk2tG6dmsgs7%2FAt3zSxjtrfcgP%2FFy8vZtbUq1yzUQSIHhnSleP1p%2FAKKz4iZmPVhvSSLTnBsqKENsM05VsnV1IrAXjONXMk9OcrDraVn0MUhNb%2F9pBXX%2B4LhyXNX2aDQ3RLuI3lgV5qMWJNNrYy4rgXzYpCeZSuNYcCegwFsJ2blIMuBv6sFZ44UsXFflHAaHegmngy0C6UGScZHyZcsMuZu1OqTCzaZw9bcNzuG8DaDtD3kMJCYscIGOqUBbEVaaSuKdAW5D2WS3dA1m60L6oOIP81OBrYGkeiL5JPJ1Oi%2BY6fxY%2FNrqTPjIINq0fasU2W7wvD%2FN7G%2Fb70cN%2B0zajh8DHyqL%2B0R7idrv4SIV20H%2FNZPWKjkx44armAz7lLXKz7w9fn4yRauhpTntuhbhaSR4%2BBMstIpcj635OfZ3M0EmvkUjeuVNNz36G0oKRKIY5%2FdPvtR%2F5sHNMUl4a7lhm%2Fy&X-Amz-Signature=f01d8766de1cffaeb8a175683a11b3f61d02f0d6ed50ec3093bcf81fad0c65f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXUBH2L%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T161026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIDMsPA5xilBCs%2Bcf4pd3J%2FXyCdaOxjChN9MovKyPKUZYAiEAntyUWwWx0srv0yIuN1PBtHuG6eys0jiBIe8jbs0CCnUq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDD1I5hqmFpULqpdpBSrcA6ywZOXkMpUh7cHGrIGg%2FadmKbn3OfYJXySqIDsJkUUwh80zzMbB8zu7K9YjUJ6IO9k%2FqsnM%2FIlUolXPXvLLoT%2BEMZoLy65G7wy3uwJiUd4uoX0tmp83iq5q41eXQpIcyX36UM6aobsmahdUYVK75Ui%2BvxY1kYlt24eSZIGoHTXM0ga7NxweWRAGHazp4DGz33Ikqb0aNmOZkE4ZCP0azEJ4NmIaaDn2kRT8OXF462tGmdUU5n7iXTU3anEYNF6TdmtiYSqD1vJ%2FX0wSP9OiTbQdnxG0gAcJIxizneZqMFck9%2Fl0wtei5HTlINYjdzVzO%2Bv0c7e2HxGnHQNLaR1UyxRwpGiktZuxmDC0zNpBylTkGi1Azu8U%2Byl8HvbP988Y%2BNSS1yDsxGXoWk2tG6dmsgs7%2FAt3zSxjtrfcgP%2FFy8vZtbUq1yzUQSIHhnSleP1p%2FAKKz4iZmPVhvSSLTnBsqKENsM05VsnV1IrAXjONXMk9OcrDraVn0MUhNb%2F9pBXX%2B4LhyXNX2aDQ3RLuI3lgV5qMWJNNrYy4rgXzYpCeZSuNYcCegwFsJ2blIMuBv6sFZ44UsXFflHAaHegmngy0C6UGScZHyZcsMuZu1OqTCzaZw9bcNzuG8DaDtD3kMJCYscIGOqUBbEVaaSuKdAW5D2WS3dA1m60L6oOIP81OBrYGkeiL5JPJ1Oi%2BY6fxY%2FNrqTPjIINq0fasU2W7wvD%2FN7G%2Fb70cN%2B0zajh8DHyqL%2B0R7idrv4SIV20H%2FNZPWKjkx44armAz7lLXKz7w9fn4yRauhpTntuhbhaSR4%2BBMstIpcj635OfZ3M0EmvkUjeuVNNz36G0oKRKIY5%2FdPvtR%2F5sHNMUl4a7lhm%2Fy&X-Amz-Signature=769ffa0b522b346e3562857622c947e277b2df32abbac995ebe0654055675a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

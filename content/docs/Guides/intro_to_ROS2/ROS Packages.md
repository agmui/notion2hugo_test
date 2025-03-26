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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWH34Q63%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2FHwGKkWrtXxRp9DhD3gHOoMCCW%2BS7p7bfkfZaX%2BnsQIgdVlaTxKd3sbapwC3Thj%2BR5dKKNtk8LAoy%2BylULqtrmgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHxhjBFuTEURYEtD%2FSrcAyMpMg3ohenY0epMOpjIs%2BWcABjaxspEWsMOaBG5ZGSpagHMlXIyH5%2Foga0u3t8OOk9KsIivI2G1fnP8AUA542nA9SlbTnCfPaNOMgwcCqetxQ0C51fzmcJ3QeCKndgFUbwa0rCc9xmnV%2BQ1D11elspsRZ16KtlYmH%2BT%2FOkxwRfgeBF0sfL0L4fm0Ed3KNAwKNbbaN2Ln7ZKzwIQfIQakyDZqevbM9BjpainvLprON1YNHw7ufgmNQRqGZvRP3MZrp556SZwfaJNkKa1tfaa3%2FtvYjWs7stwo%2F6wTiWq4IuaIB4KwI4rj7u4WHsd2g03eUcB95UG%2BrW%2FMwfhz4RCSwAXXnt3are1PQCJtUjLtPeRXSYVE0Dq3n0slxY8UIbVorcpUIj8eDkJ1IDKNfasiUssXQM8AX7eQ4mNUu1LLFU71wZkIbwqBfWO3Erk3ond34wzLyf2Effy2UA4gZseOcJKrRNVB%2B1o3le3n5G2R3eYQKDgBaOZSKqEem%2Fr6y1Gj6f1RTcEJOyZ6MlGYYrEKK4NLbSaCOPXcJkFrkhvplvZjy%2Fwi3RevJ2CCli7Nt%2BGaUwls4VsbDP4O8eKaIzzkqoZCiN5JBUQi7KrhcmbOO5XnbEJLVT73BtZuMiTMLTTkb8GOqUBzp1WyK4auuAAobvZ724PxUNxxGZpgy6lQ%2FMyqFJRXmvyVhxfPcLK4ajopzYLXEP3rGDTi5%2Bw9XOVVEfu4qkEjoClTGa5zcCEaQFcBwiYxCFVM1mjXM0wN97GLJM1WnrCn7AJ3lXKnwU1hx8lQivaBuSmDYHK74piIXroeDiAptT7ixhCZsrUgu44PeXg4a4EK6%2BhGGLtU18h9HzvjjgZxNzuin4v&X-Amz-Signature=3971369b12e0ade41eb86c46e92ce70d37f1ade4e160f4474ae32e6426d75685&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWH34Q63%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2FHwGKkWrtXxRp9DhD3gHOoMCCW%2BS7p7bfkfZaX%2BnsQIgdVlaTxKd3sbapwC3Thj%2BR5dKKNtk8LAoy%2BylULqtrmgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHxhjBFuTEURYEtD%2FSrcAyMpMg3ohenY0epMOpjIs%2BWcABjaxspEWsMOaBG5ZGSpagHMlXIyH5%2Foga0u3t8OOk9KsIivI2G1fnP8AUA542nA9SlbTnCfPaNOMgwcCqetxQ0C51fzmcJ3QeCKndgFUbwa0rCc9xmnV%2BQ1D11elspsRZ16KtlYmH%2BT%2FOkxwRfgeBF0sfL0L4fm0Ed3KNAwKNbbaN2Ln7ZKzwIQfIQakyDZqevbM9BjpainvLprON1YNHw7ufgmNQRqGZvRP3MZrp556SZwfaJNkKa1tfaa3%2FtvYjWs7stwo%2F6wTiWq4IuaIB4KwI4rj7u4WHsd2g03eUcB95UG%2BrW%2FMwfhz4RCSwAXXnt3are1PQCJtUjLtPeRXSYVE0Dq3n0slxY8UIbVorcpUIj8eDkJ1IDKNfasiUssXQM8AX7eQ4mNUu1LLFU71wZkIbwqBfWO3Erk3ond34wzLyf2Effy2UA4gZseOcJKrRNVB%2B1o3le3n5G2R3eYQKDgBaOZSKqEem%2Fr6y1Gj6f1RTcEJOyZ6MlGYYrEKK4NLbSaCOPXcJkFrkhvplvZjy%2Fwi3RevJ2CCli7Nt%2BGaUwls4VsbDP4O8eKaIzzkqoZCiN5JBUQi7KrhcmbOO5XnbEJLVT73BtZuMiTMLTTkb8GOqUBzp1WyK4auuAAobvZ724PxUNxxGZpgy6lQ%2FMyqFJRXmvyVhxfPcLK4ajopzYLXEP3rGDTi5%2Bw9XOVVEfu4qkEjoClTGa5zcCEaQFcBwiYxCFVM1mjXM0wN97GLJM1WnrCn7AJ3lXKnwU1hx8lQivaBuSmDYHK74piIXroeDiAptT7ixhCZsrUgu44PeXg4a4EK6%2BhGGLtU18h9HzvjjgZxNzuin4v&X-Amz-Signature=16fd7773e206ff37e466f086f74aab7ed1b6fd885c6f73fa47ac231502ba1014&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWH34Q63%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2FHwGKkWrtXxRp9DhD3gHOoMCCW%2BS7p7bfkfZaX%2BnsQIgdVlaTxKd3sbapwC3Thj%2BR5dKKNtk8LAoy%2BylULqtrmgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHxhjBFuTEURYEtD%2FSrcAyMpMg3ohenY0epMOpjIs%2BWcABjaxspEWsMOaBG5ZGSpagHMlXIyH5%2Foga0u3t8OOk9KsIivI2G1fnP8AUA542nA9SlbTnCfPaNOMgwcCqetxQ0C51fzmcJ3QeCKndgFUbwa0rCc9xmnV%2BQ1D11elspsRZ16KtlYmH%2BT%2FOkxwRfgeBF0sfL0L4fm0Ed3KNAwKNbbaN2Ln7ZKzwIQfIQakyDZqevbM9BjpainvLprON1YNHw7ufgmNQRqGZvRP3MZrp556SZwfaJNkKa1tfaa3%2FtvYjWs7stwo%2F6wTiWq4IuaIB4KwI4rj7u4WHsd2g03eUcB95UG%2BrW%2FMwfhz4RCSwAXXnt3are1PQCJtUjLtPeRXSYVE0Dq3n0slxY8UIbVorcpUIj8eDkJ1IDKNfasiUssXQM8AX7eQ4mNUu1LLFU71wZkIbwqBfWO3Erk3ond34wzLyf2Effy2UA4gZseOcJKrRNVB%2B1o3le3n5G2R3eYQKDgBaOZSKqEem%2Fr6y1Gj6f1RTcEJOyZ6MlGYYrEKK4NLbSaCOPXcJkFrkhvplvZjy%2Fwi3RevJ2CCli7Nt%2BGaUwls4VsbDP4O8eKaIzzkqoZCiN5JBUQi7KrhcmbOO5XnbEJLVT73BtZuMiTMLTTkb8GOqUBzp1WyK4auuAAobvZ724PxUNxxGZpgy6lQ%2FMyqFJRXmvyVhxfPcLK4ajopzYLXEP3rGDTi5%2Bw9XOVVEfu4qkEjoClTGa5zcCEaQFcBwiYxCFVM1mjXM0wN97GLJM1WnrCn7AJ3lXKnwU1hx8lQivaBuSmDYHK74piIXroeDiAptT7ixhCZsrUgu44PeXg4a4EK6%2BhGGLtU18h9HzvjjgZxNzuin4v&X-Amz-Signature=0467b4fb8bcbd87aae920d39ca9d7e48ac6cddfed3a372d91c6849f8e3a3d4b7&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWH34Q63%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2FHwGKkWrtXxRp9DhD3gHOoMCCW%2BS7p7bfkfZaX%2BnsQIgdVlaTxKd3sbapwC3Thj%2BR5dKKNtk8LAoy%2BylULqtrmgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHxhjBFuTEURYEtD%2FSrcAyMpMg3ohenY0epMOpjIs%2BWcABjaxspEWsMOaBG5ZGSpagHMlXIyH5%2Foga0u3t8OOk9KsIivI2G1fnP8AUA542nA9SlbTnCfPaNOMgwcCqetxQ0C51fzmcJ3QeCKndgFUbwa0rCc9xmnV%2BQ1D11elspsRZ16KtlYmH%2BT%2FOkxwRfgeBF0sfL0L4fm0Ed3KNAwKNbbaN2Ln7ZKzwIQfIQakyDZqevbM9BjpainvLprON1YNHw7ufgmNQRqGZvRP3MZrp556SZwfaJNkKa1tfaa3%2FtvYjWs7stwo%2F6wTiWq4IuaIB4KwI4rj7u4WHsd2g03eUcB95UG%2BrW%2FMwfhz4RCSwAXXnt3are1PQCJtUjLtPeRXSYVE0Dq3n0slxY8UIbVorcpUIj8eDkJ1IDKNfasiUssXQM8AX7eQ4mNUu1LLFU71wZkIbwqBfWO3Erk3ond34wzLyf2Effy2UA4gZseOcJKrRNVB%2B1o3le3n5G2R3eYQKDgBaOZSKqEem%2Fr6y1Gj6f1RTcEJOyZ6MlGYYrEKK4NLbSaCOPXcJkFrkhvplvZjy%2Fwi3RevJ2CCli7Nt%2BGaUwls4VsbDP4O8eKaIzzkqoZCiN5JBUQi7KrhcmbOO5XnbEJLVT73BtZuMiTMLTTkb8GOqUBzp1WyK4auuAAobvZ724PxUNxxGZpgy6lQ%2FMyqFJRXmvyVhxfPcLK4ajopzYLXEP3rGDTi5%2Bw9XOVVEfu4qkEjoClTGa5zcCEaQFcBwiYxCFVM1mjXM0wN97GLJM1WnrCn7AJ3lXKnwU1hx8lQivaBuSmDYHK74piIXroeDiAptT7ixhCZsrUgu44PeXg4a4EK6%2BhGGLtU18h9HzvjjgZxNzuin4v&X-Amz-Signature=42ec7879e26ce3d481dd5c4e517057e2825a852d4a8c5afed95bbec09cb48fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWH34Q63%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2FHwGKkWrtXxRp9DhD3gHOoMCCW%2BS7p7bfkfZaX%2BnsQIgdVlaTxKd3sbapwC3Thj%2BR5dKKNtk8LAoy%2BylULqtrmgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHxhjBFuTEURYEtD%2FSrcAyMpMg3ohenY0epMOpjIs%2BWcABjaxspEWsMOaBG5ZGSpagHMlXIyH5%2Foga0u3t8OOk9KsIivI2G1fnP8AUA542nA9SlbTnCfPaNOMgwcCqetxQ0C51fzmcJ3QeCKndgFUbwa0rCc9xmnV%2BQ1D11elspsRZ16KtlYmH%2BT%2FOkxwRfgeBF0sfL0L4fm0Ed3KNAwKNbbaN2Ln7ZKzwIQfIQakyDZqevbM9BjpainvLprON1YNHw7ufgmNQRqGZvRP3MZrp556SZwfaJNkKa1tfaa3%2FtvYjWs7stwo%2F6wTiWq4IuaIB4KwI4rj7u4WHsd2g03eUcB95UG%2BrW%2FMwfhz4RCSwAXXnt3are1PQCJtUjLtPeRXSYVE0Dq3n0slxY8UIbVorcpUIj8eDkJ1IDKNfasiUssXQM8AX7eQ4mNUu1LLFU71wZkIbwqBfWO3Erk3ond34wzLyf2Effy2UA4gZseOcJKrRNVB%2B1o3le3n5G2R3eYQKDgBaOZSKqEem%2Fr6y1Gj6f1RTcEJOyZ6MlGYYrEKK4NLbSaCOPXcJkFrkhvplvZjy%2Fwi3RevJ2CCli7Nt%2BGaUwls4VsbDP4O8eKaIzzkqoZCiN5JBUQi7KrhcmbOO5XnbEJLVT73BtZuMiTMLTTkb8GOqUBzp1WyK4auuAAobvZ724PxUNxxGZpgy6lQ%2FMyqFJRXmvyVhxfPcLK4ajopzYLXEP3rGDTi5%2Bw9XOVVEfu4qkEjoClTGa5zcCEaQFcBwiYxCFVM1mjXM0wN97GLJM1WnrCn7AJ3lXKnwU1hx8lQivaBuSmDYHK74piIXroeDiAptT7ixhCZsrUgu44PeXg4a4EK6%2BhGGLtU18h9HzvjjgZxNzuin4v&X-Amz-Signature=393d109e05f7909a485be270c8ef74147bb791d3a0acad26a550208ee64930d8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWH34Q63%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2FHwGKkWrtXxRp9DhD3gHOoMCCW%2BS7p7bfkfZaX%2BnsQIgdVlaTxKd3sbapwC3Thj%2BR5dKKNtk8LAoy%2BylULqtrmgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHxhjBFuTEURYEtD%2FSrcAyMpMg3ohenY0epMOpjIs%2BWcABjaxspEWsMOaBG5ZGSpagHMlXIyH5%2Foga0u3t8OOk9KsIivI2G1fnP8AUA542nA9SlbTnCfPaNOMgwcCqetxQ0C51fzmcJ3QeCKndgFUbwa0rCc9xmnV%2BQ1D11elspsRZ16KtlYmH%2BT%2FOkxwRfgeBF0sfL0L4fm0Ed3KNAwKNbbaN2Ln7ZKzwIQfIQakyDZqevbM9BjpainvLprON1YNHw7ufgmNQRqGZvRP3MZrp556SZwfaJNkKa1tfaa3%2FtvYjWs7stwo%2F6wTiWq4IuaIB4KwI4rj7u4WHsd2g03eUcB95UG%2BrW%2FMwfhz4RCSwAXXnt3are1PQCJtUjLtPeRXSYVE0Dq3n0slxY8UIbVorcpUIj8eDkJ1IDKNfasiUssXQM8AX7eQ4mNUu1LLFU71wZkIbwqBfWO3Erk3ond34wzLyf2Effy2UA4gZseOcJKrRNVB%2B1o3le3n5G2R3eYQKDgBaOZSKqEem%2Fr6y1Gj6f1RTcEJOyZ6MlGYYrEKK4NLbSaCOPXcJkFrkhvplvZjy%2Fwi3RevJ2CCli7Nt%2BGaUwls4VsbDP4O8eKaIzzkqoZCiN5JBUQi7KrhcmbOO5XnbEJLVT73BtZuMiTMLTTkb8GOqUBzp1WyK4auuAAobvZ724PxUNxxGZpgy6lQ%2FMyqFJRXmvyVhxfPcLK4ajopzYLXEP3rGDTi5%2Bw9XOVVEfu4qkEjoClTGa5zcCEaQFcBwiYxCFVM1mjXM0wN97GLJM1WnrCn7AJ3lXKnwU1hx8lQivaBuSmDYHK74piIXroeDiAptT7ixhCZsrUgu44PeXg4a4EK6%2BhGGLtU18h9HzvjjgZxNzuin4v&X-Amz-Signature=b72ddd599235d960fec30cf384dc2eec62afbab1829282926c0cb27bd097cc67&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWH34Q63%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCt%2FHwGKkWrtXxRp9DhD3gHOoMCCW%2BS7p7bfkfZaX%2BnsQIgdVlaTxKd3sbapwC3Thj%2BR5dKKNtk8LAoy%2BylULqtrmgq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDHxhjBFuTEURYEtD%2FSrcAyMpMg3ohenY0epMOpjIs%2BWcABjaxspEWsMOaBG5ZGSpagHMlXIyH5%2Foga0u3t8OOk9KsIivI2G1fnP8AUA542nA9SlbTnCfPaNOMgwcCqetxQ0C51fzmcJ3QeCKndgFUbwa0rCc9xmnV%2BQ1D11elspsRZ16KtlYmH%2BT%2FOkxwRfgeBF0sfL0L4fm0Ed3KNAwKNbbaN2Ln7ZKzwIQfIQakyDZqevbM9BjpainvLprON1YNHw7ufgmNQRqGZvRP3MZrp556SZwfaJNkKa1tfaa3%2FtvYjWs7stwo%2F6wTiWq4IuaIB4KwI4rj7u4WHsd2g03eUcB95UG%2BrW%2FMwfhz4RCSwAXXnt3are1PQCJtUjLtPeRXSYVE0Dq3n0slxY8UIbVorcpUIj8eDkJ1IDKNfasiUssXQM8AX7eQ4mNUu1LLFU71wZkIbwqBfWO3Erk3ond34wzLyf2Effy2UA4gZseOcJKrRNVB%2B1o3le3n5G2R3eYQKDgBaOZSKqEem%2Fr6y1Gj6f1RTcEJOyZ6MlGYYrEKK4NLbSaCOPXcJkFrkhvplvZjy%2Fwi3RevJ2CCli7Nt%2BGaUwls4VsbDP4O8eKaIzzkqoZCiN5JBUQi7KrhcmbOO5XnbEJLVT73BtZuMiTMLTTkb8GOqUBzp1WyK4auuAAobvZ724PxUNxxGZpgy6lQ%2FMyqFJRXmvyVhxfPcLK4ajopzYLXEP3rGDTi5%2Bw9XOVVEfu4qkEjoClTGa5zcCEaQFcBwiYxCFVM1mjXM0wN97GLJM1WnrCn7AJ3lXKnwU1hx8lQivaBuSmDYHK74piIXroeDiAptT7ixhCZsrUgu44PeXg4a4EK6%2BhGGLtU18h9HzvjjgZxNzuin4v&X-Amz-Signature=1501cf603593ebacba9c069fd934bdf1597c9b2d6a3a73bf7e264d15b276a65c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

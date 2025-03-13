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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKHLBC2P%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkE%2BFZez5l24WW2QeVt1KsDv6xI8UsVFx1gbjK2BMHXAiB5yq5Ftz9B9QSWmqKZ%2FqXqb59%2BzlUK0DTmmr8nBoz9bCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgNbYCpWrqLdUumyKtwDH1cdl5a4yKlo%2BRfNT4wHctLRy0fqYF7XTMTmfDUhi2lYfqhGlFZP%2FKNdeebDsLiFYQPlGffds5C6QV5%2FenVoUj5MuIexoIxBqfSMhkXMeLcEkRFdSV%2BgBKvH3lymZ1D5jYjOTmNjmooEppgP1SF8YBum%2B8mbVQNRPR8NZ759UkvuGBli98GWE2otemTIsMuqMKOLB%2BjCCk4Iepn%2FhIkw8jpIugSIvBuqF%2BjqHkn6kqgWTsPYl9MrdPmovP7clEKEHenOM6l3bScBPjhcfZgz6RlqYi97tc4twb8fFqwderNvsh2gHNO605LVSZZEW%2Br0mZV5UyuTqe%2Fn0nFrxheMc3izFZ7AOhg9V%2Fa%2FL36Z6OmWRWswkMYXs7bACiOTRpyJMVpnITK0FIwY%2Fa5vszO%2Bk%2Bd0v8YdTAnC1yJPwmdEWKAvmAiIQV9Ha2UF5ER7lCRJcACJuLwI1oluAaPn7xjwxMxJRV3RyiQ0wZkBB6hKf6ESZ7KppXMMjQgUc4giuYP0WA%2FgysySv%2BV9Y9jmnc6SoR%2FRK95JaizA09J9Aal54WPtunrRZ506gvcy6ECVOlGa9AIGWAccSZEdoQ%2FMoPWHTIBskavB3F0%2F%2FBEZMeiVlDlK%2FuyS9W3PY3%2B6ClEw85PNvgY6pgFtX3paS8JRf%2F%2B6Ji7%2B4pPzf%2Bl%2Bj4I%2FAXXHVmQvLRcmaM1xFDkJAYBCYYavk2KdTUOaCPcsBWEKz9AqAB21V4hqF9VAWIfLtiCDDV2i8XwPirzNuuYGy9pfI%2FqKXEwbnjwZRpnsF%2FJHVn7pGJPIIlZbtjMIEVF22K5ucpQRw6QzMtKdSN56jMAmS76zqFkSAJLKIktQElXvAeQ%2BwRlrd7fCADK43N2S&X-Amz-Signature=7ac5265095db9c33e1ce648c5b84c0a5563ea72aba6ef08d893184586f00aa96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKHLBC2P%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkE%2BFZez5l24WW2QeVt1KsDv6xI8UsVFx1gbjK2BMHXAiB5yq5Ftz9B9QSWmqKZ%2FqXqb59%2BzlUK0DTmmr8nBoz9bCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgNbYCpWrqLdUumyKtwDH1cdl5a4yKlo%2BRfNT4wHctLRy0fqYF7XTMTmfDUhi2lYfqhGlFZP%2FKNdeebDsLiFYQPlGffds5C6QV5%2FenVoUj5MuIexoIxBqfSMhkXMeLcEkRFdSV%2BgBKvH3lymZ1D5jYjOTmNjmooEppgP1SF8YBum%2B8mbVQNRPR8NZ759UkvuGBli98GWE2otemTIsMuqMKOLB%2BjCCk4Iepn%2FhIkw8jpIugSIvBuqF%2BjqHkn6kqgWTsPYl9MrdPmovP7clEKEHenOM6l3bScBPjhcfZgz6RlqYi97tc4twb8fFqwderNvsh2gHNO605LVSZZEW%2Br0mZV5UyuTqe%2Fn0nFrxheMc3izFZ7AOhg9V%2Fa%2FL36Z6OmWRWswkMYXs7bACiOTRpyJMVpnITK0FIwY%2Fa5vszO%2Bk%2Bd0v8YdTAnC1yJPwmdEWKAvmAiIQV9Ha2UF5ER7lCRJcACJuLwI1oluAaPn7xjwxMxJRV3RyiQ0wZkBB6hKf6ESZ7KppXMMjQgUc4giuYP0WA%2FgysySv%2BV9Y9jmnc6SoR%2FRK95JaizA09J9Aal54WPtunrRZ506gvcy6ECVOlGa9AIGWAccSZEdoQ%2FMoPWHTIBskavB3F0%2F%2FBEZMeiVlDlK%2FuyS9W3PY3%2B6ClEw85PNvgY6pgFtX3paS8JRf%2F%2B6Ji7%2B4pPzf%2Bl%2Bj4I%2FAXXHVmQvLRcmaM1xFDkJAYBCYYavk2KdTUOaCPcsBWEKz9AqAB21V4hqF9VAWIfLtiCDDV2i8XwPirzNuuYGy9pfI%2FqKXEwbnjwZRpnsF%2FJHVn7pGJPIIlZbtjMIEVF22K5ucpQRw6QzMtKdSN56jMAmS76zqFkSAJLKIktQElXvAeQ%2BwRlrd7fCADK43N2S&X-Amz-Signature=8c5ad0c1a80a773154d08b1eaf14c0785144e059355601f94a16a13adfece52a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKHLBC2P%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkE%2BFZez5l24WW2QeVt1KsDv6xI8UsVFx1gbjK2BMHXAiB5yq5Ftz9B9QSWmqKZ%2FqXqb59%2BzlUK0DTmmr8nBoz9bCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgNbYCpWrqLdUumyKtwDH1cdl5a4yKlo%2BRfNT4wHctLRy0fqYF7XTMTmfDUhi2lYfqhGlFZP%2FKNdeebDsLiFYQPlGffds5C6QV5%2FenVoUj5MuIexoIxBqfSMhkXMeLcEkRFdSV%2BgBKvH3lymZ1D5jYjOTmNjmooEppgP1SF8YBum%2B8mbVQNRPR8NZ759UkvuGBli98GWE2otemTIsMuqMKOLB%2BjCCk4Iepn%2FhIkw8jpIugSIvBuqF%2BjqHkn6kqgWTsPYl9MrdPmovP7clEKEHenOM6l3bScBPjhcfZgz6RlqYi97tc4twb8fFqwderNvsh2gHNO605LVSZZEW%2Br0mZV5UyuTqe%2Fn0nFrxheMc3izFZ7AOhg9V%2Fa%2FL36Z6OmWRWswkMYXs7bACiOTRpyJMVpnITK0FIwY%2Fa5vszO%2Bk%2Bd0v8YdTAnC1yJPwmdEWKAvmAiIQV9Ha2UF5ER7lCRJcACJuLwI1oluAaPn7xjwxMxJRV3RyiQ0wZkBB6hKf6ESZ7KppXMMjQgUc4giuYP0WA%2FgysySv%2BV9Y9jmnc6SoR%2FRK95JaizA09J9Aal54WPtunrRZ506gvcy6ECVOlGa9AIGWAccSZEdoQ%2FMoPWHTIBskavB3F0%2F%2FBEZMeiVlDlK%2FuyS9W3PY3%2B6ClEw85PNvgY6pgFtX3paS8JRf%2F%2B6Ji7%2B4pPzf%2Bl%2Bj4I%2FAXXHVmQvLRcmaM1xFDkJAYBCYYavk2KdTUOaCPcsBWEKz9AqAB21V4hqF9VAWIfLtiCDDV2i8XwPirzNuuYGy9pfI%2FqKXEwbnjwZRpnsF%2FJHVn7pGJPIIlZbtjMIEVF22K5ucpQRw6QzMtKdSN56jMAmS76zqFkSAJLKIktQElXvAeQ%2BwRlrd7fCADK43N2S&X-Amz-Signature=96d702d74dfcafb5a216801d43779924cfb40d93e833739778a388adbc7137c2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKHLBC2P%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkE%2BFZez5l24WW2QeVt1KsDv6xI8UsVFx1gbjK2BMHXAiB5yq5Ftz9B9QSWmqKZ%2FqXqb59%2BzlUK0DTmmr8nBoz9bCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgNbYCpWrqLdUumyKtwDH1cdl5a4yKlo%2BRfNT4wHctLRy0fqYF7XTMTmfDUhi2lYfqhGlFZP%2FKNdeebDsLiFYQPlGffds5C6QV5%2FenVoUj5MuIexoIxBqfSMhkXMeLcEkRFdSV%2BgBKvH3lymZ1D5jYjOTmNjmooEppgP1SF8YBum%2B8mbVQNRPR8NZ759UkvuGBli98GWE2otemTIsMuqMKOLB%2BjCCk4Iepn%2FhIkw8jpIugSIvBuqF%2BjqHkn6kqgWTsPYl9MrdPmovP7clEKEHenOM6l3bScBPjhcfZgz6RlqYi97tc4twb8fFqwderNvsh2gHNO605LVSZZEW%2Br0mZV5UyuTqe%2Fn0nFrxheMc3izFZ7AOhg9V%2Fa%2FL36Z6OmWRWswkMYXs7bACiOTRpyJMVpnITK0FIwY%2Fa5vszO%2Bk%2Bd0v8YdTAnC1yJPwmdEWKAvmAiIQV9Ha2UF5ER7lCRJcACJuLwI1oluAaPn7xjwxMxJRV3RyiQ0wZkBB6hKf6ESZ7KppXMMjQgUc4giuYP0WA%2FgysySv%2BV9Y9jmnc6SoR%2FRK95JaizA09J9Aal54WPtunrRZ506gvcy6ECVOlGa9AIGWAccSZEdoQ%2FMoPWHTIBskavB3F0%2F%2FBEZMeiVlDlK%2FuyS9W3PY3%2B6ClEw85PNvgY6pgFtX3paS8JRf%2F%2B6Ji7%2B4pPzf%2Bl%2Bj4I%2FAXXHVmQvLRcmaM1xFDkJAYBCYYavk2KdTUOaCPcsBWEKz9AqAB21V4hqF9VAWIfLtiCDDV2i8XwPirzNuuYGy9pfI%2FqKXEwbnjwZRpnsF%2FJHVn7pGJPIIlZbtjMIEVF22K5ucpQRw6QzMtKdSN56jMAmS76zqFkSAJLKIktQElXvAeQ%2BwRlrd7fCADK43N2S&X-Amz-Signature=fee5275aacbf00987a5ef9a162f533f3db90841061b0da6c112df92efda1268f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKHLBC2P%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkE%2BFZez5l24WW2QeVt1KsDv6xI8UsVFx1gbjK2BMHXAiB5yq5Ftz9B9QSWmqKZ%2FqXqb59%2BzlUK0DTmmr8nBoz9bCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgNbYCpWrqLdUumyKtwDH1cdl5a4yKlo%2BRfNT4wHctLRy0fqYF7XTMTmfDUhi2lYfqhGlFZP%2FKNdeebDsLiFYQPlGffds5C6QV5%2FenVoUj5MuIexoIxBqfSMhkXMeLcEkRFdSV%2BgBKvH3lymZ1D5jYjOTmNjmooEppgP1SF8YBum%2B8mbVQNRPR8NZ759UkvuGBli98GWE2otemTIsMuqMKOLB%2BjCCk4Iepn%2FhIkw8jpIugSIvBuqF%2BjqHkn6kqgWTsPYl9MrdPmovP7clEKEHenOM6l3bScBPjhcfZgz6RlqYi97tc4twb8fFqwderNvsh2gHNO605LVSZZEW%2Br0mZV5UyuTqe%2Fn0nFrxheMc3izFZ7AOhg9V%2Fa%2FL36Z6OmWRWswkMYXs7bACiOTRpyJMVpnITK0FIwY%2Fa5vszO%2Bk%2Bd0v8YdTAnC1yJPwmdEWKAvmAiIQV9Ha2UF5ER7lCRJcACJuLwI1oluAaPn7xjwxMxJRV3RyiQ0wZkBB6hKf6ESZ7KppXMMjQgUc4giuYP0WA%2FgysySv%2BV9Y9jmnc6SoR%2FRK95JaizA09J9Aal54WPtunrRZ506gvcy6ECVOlGa9AIGWAccSZEdoQ%2FMoPWHTIBskavB3F0%2F%2FBEZMeiVlDlK%2FuyS9W3PY3%2B6ClEw85PNvgY6pgFtX3paS8JRf%2F%2B6Ji7%2B4pPzf%2Bl%2Bj4I%2FAXXHVmQvLRcmaM1xFDkJAYBCYYavk2KdTUOaCPcsBWEKz9AqAB21V4hqF9VAWIfLtiCDDV2i8XwPirzNuuYGy9pfI%2FqKXEwbnjwZRpnsF%2FJHVn7pGJPIIlZbtjMIEVF22K5ucpQRw6QzMtKdSN56jMAmS76zqFkSAJLKIktQElXvAeQ%2BwRlrd7fCADK43N2S&X-Amz-Signature=97b9a6cb7f39b0531a964052978fc53280abf7cd5e1c86aec04a21664f2f690f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKHLBC2P%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkE%2BFZez5l24WW2QeVt1KsDv6xI8UsVFx1gbjK2BMHXAiB5yq5Ftz9B9QSWmqKZ%2FqXqb59%2BzlUK0DTmmr8nBoz9bCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgNbYCpWrqLdUumyKtwDH1cdl5a4yKlo%2BRfNT4wHctLRy0fqYF7XTMTmfDUhi2lYfqhGlFZP%2FKNdeebDsLiFYQPlGffds5C6QV5%2FenVoUj5MuIexoIxBqfSMhkXMeLcEkRFdSV%2BgBKvH3lymZ1D5jYjOTmNjmooEppgP1SF8YBum%2B8mbVQNRPR8NZ759UkvuGBli98GWE2otemTIsMuqMKOLB%2BjCCk4Iepn%2FhIkw8jpIugSIvBuqF%2BjqHkn6kqgWTsPYl9MrdPmovP7clEKEHenOM6l3bScBPjhcfZgz6RlqYi97tc4twb8fFqwderNvsh2gHNO605LVSZZEW%2Br0mZV5UyuTqe%2Fn0nFrxheMc3izFZ7AOhg9V%2Fa%2FL36Z6OmWRWswkMYXs7bACiOTRpyJMVpnITK0FIwY%2Fa5vszO%2Bk%2Bd0v8YdTAnC1yJPwmdEWKAvmAiIQV9Ha2UF5ER7lCRJcACJuLwI1oluAaPn7xjwxMxJRV3RyiQ0wZkBB6hKf6ESZ7KppXMMjQgUc4giuYP0WA%2FgysySv%2BV9Y9jmnc6SoR%2FRK95JaizA09J9Aal54WPtunrRZ506gvcy6ECVOlGa9AIGWAccSZEdoQ%2FMoPWHTIBskavB3F0%2F%2FBEZMeiVlDlK%2FuyS9W3PY3%2B6ClEw85PNvgY6pgFtX3paS8JRf%2F%2B6Ji7%2B4pPzf%2Bl%2Bj4I%2FAXXHVmQvLRcmaM1xFDkJAYBCYYavk2KdTUOaCPcsBWEKz9AqAB21V4hqF9VAWIfLtiCDDV2i8XwPirzNuuYGy9pfI%2FqKXEwbnjwZRpnsF%2FJHVn7pGJPIIlZbtjMIEVF22K5ucpQRw6QzMtKdSN56jMAmS76zqFkSAJLKIktQElXvAeQ%2BwRlrd7fCADK43N2S&X-Amz-Signature=d7623f6cf5b3feaaff07bbfb7f5a19953686bfacc9d6e08b67aa27c750a5037b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKHLBC2P%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFkE%2BFZez5l24WW2QeVt1KsDv6xI8UsVFx1gbjK2BMHXAiB5yq5Ftz9B9QSWmqKZ%2FqXqb59%2BzlUK0DTmmr8nBoz9bCqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcgNbYCpWrqLdUumyKtwDH1cdl5a4yKlo%2BRfNT4wHctLRy0fqYF7XTMTmfDUhi2lYfqhGlFZP%2FKNdeebDsLiFYQPlGffds5C6QV5%2FenVoUj5MuIexoIxBqfSMhkXMeLcEkRFdSV%2BgBKvH3lymZ1D5jYjOTmNjmooEppgP1SF8YBum%2B8mbVQNRPR8NZ759UkvuGBli98GWE2otemTIsMuqMKOLB%2BjCCk4Iepn%2FhIkw8jpIugSIvBuqF%2BjqHkn6kqgWTsPYl9MrdPmovP7clEKEHenOM6l3bScBPjhcfZgz6RlqYi97tc4twb8fFqwderNvsh2gHNO605LVSZZEW%2Br0mZV5UyuTqe%2Fn0nFrxheMc3izFZ7AOhg9V%2Fa%2FL36Z6OmWRWswkMYXs7bACiOTRpyJMVpnITK0FIwY%2Fa5vszO%2Bk%2Bd0v8YdTAnC1yJPwmdEWKAvmAiIQV9Ha2UF5ER7lCRJcACJuLwI1oluAaPn7xjwxMxJRV3RyiQ0wZkBB6hKf6ESZ7KppXMMjQgUc4giuYP0WA%2FgysySv%2BV9Y9jmnc6SoR%2FRK95JaizA09J9Aal54WPtunrRZ506gvcy6ECVOlGa9AIGWAccSZEdoQ%2FMoPWHTIBskavB3F0%2F%2FBEZMeiVlDlK%2FuyS9W3PY3%2B6ClEw85PNvgY6pgFtX3paS8JRf%2F%2B6Ji7%2B4pPzf%2Bl%2Bj4I%2FAXXHVmQvLRcmaM1xFDkJAYBCYYavk2KdTUOaCPcsBWEKz9AqAB21V4hqF9VAWIfLtiCDDV2i8XwPirzNuuYGy9pfI%2FqKXEwbnjwZRpnsF%2FJHVn7pGJPIIlZbtjMIEVF22K5ucpQRw6QzMtKdSN56jMAmS76zqFkSAJLKIktQElXvAeQ%2BwRlrd7fCADK43N2S&X-Amz-Signature=ee3549e1fddcc6fafeb8a4761c2b0ee9c238d03c6207ae1f7a6c5bf8b623d970&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

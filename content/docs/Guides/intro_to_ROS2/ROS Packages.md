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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIAGQJOU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCDfLzMX8dwO3Spt9DQ%2FbLjIV0FMllPCCxoEKVjc7vYfQIhANjix0lWGx8emloQ4A5OkrArkMx3oYLOT6GWM6b42gGdKv8DCCIQABoMNjM3NDIzMTgzODA1IgySz7aodGjZEMpMpTIq3AM5qOYtupvJcEOj5QFEgfn4nevZz9ubjIH19ua41iju9zvEWwmXb4WitDT96TIktSc698O%2FfAy7H%2B3ka9VO62lB7rLspZyYAZkcZ65yiqAFsenA1hEKazBdKlACvOk46Zmy3g%2FbRe5U3jLW0qDq3%2BaDKy0zulVu4CzMt2ubh2SzKuYR8X8lJBZerfRS1OJGRjC7iixfjHJs0OGUBkvmgaKRErJehVwxSYTO8NhIjkwVxYvoC%2FXGwAPEbik%2F03dN%2BBmdL%2FmCRAtLOAhE0QKVG8lD2GbsgJtPpyf%2BGcimbcVUjTc%2BgyC3U5ea9vAwCaMAe0rCzk%2BatPpLwpG5bVvjgzH2Yg8hEA%2FDW08vzJmMO8sY49rd%2FjtLxixZCzbZWIX7BK46vpKyvk7Q0rGubrZRgfviHYyjGyKYD3oLQgQg4k%2FmgKHj23iF%2FmVb0nNSRfpmcZ40iZqAHZQXcb6Cg9N%2BZ6UuI7PT%2BVzqqNZTgUBxjNXVs8Oz3mm51DBcFIMfnufmGL%2BtUaIe4pMzsNRvTNhYqJW07yKaWV5OHZ7wRc%2FVyIZjcEqMDAzSNtoqih0Xm37OhQRdW2E7etcREaL%2FRHMCUHW2uSNic4TlcwFV7bYMR5fb2rs29TEDzHFdp0CLnjCY7JTBBjqkAX9nl%2B%2BcdRkqTr38kFiGvMBIzgx9ByhQuYb828UzNTP4WeFg5WfDwFts8UqkUPiSTXYueGG84gb5Md3eCYzYLhwjDwWBimI72QgdouBH7C1lixLUccOSffs2hz7uyLviiZ3N2nYqTWLkKyztTzd3HeWxa6UP3y0kOeTkfK%2F%2FDwWUFGlQiaElgQ58%2BRpCG78%2B2l9aCZDBQoBoVpAHg5JpX845Kmi3&X-Amz-Signature=e33676bff0a749553e14c578846037dec2d05f4beb4eaff57ef387427284d2f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIAGQJOU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCDfLzMX8dwO3Spt9DQ%2FbLjIV0FMllPCCxoEKVjc7vYfQIhANjix0lWGx8emloQ4A5OkrArkMx3oYLOT6GWM6b42gGdKv8DCCIQABoMNjM3NDIzMTgzODA1IgySz7aodGjZEMpMpTIq3AM5qOYtupvJcEOj5QFEgfn4nevZz9ubjIH19ua41iju9zvEWwmXb4WitDT96TIktSc698O%2FfAy7H%2B3ka9VO62lB7rLspZyYAZkcZ65yiqAFsenA1hEKazBdKlACvOk46Zmy3g%2FbRe5U3jLW0qDq3%2BaDKy0zulVu4CzMt2ubh2SzKuYR8X8lJBZerfRS1OJGRjC7iixfjHJs0OGUBkvmgaKRErJehVwxSYTO8NhIjkwVxYvoC%2FXGwAPEbik%2F03dN%2BBmdL%2FmCRAtLOAhE0QKVG8lD2GbsgJtPpyf%2BGcimbcVUjTc%2BgyC3U5ea9vAwCaMAe0rCzk%2BatPpLwpG5bVvjgzH2Yg8hEA%2FDW08vzJmMO8sY49rd%2FjtLxixZCzbZWIX7BK46vpKyvk7Q0rGubrZRgfviHYyjGyKYD3oLQgQg4k%2FmgKHj23iF%2FmVb0nNSRfpmcZ40iZqAHZQXcb6Cg9N%2BZ6UuI7PT%2BVzqqNZTgUBxjNXVs8Oz3mm51DBcFIMfnufmGL%2BtUaIe4pMzsNRvTNhYqJW07yKaWV5OHZ7wRc%2FVyIZjcEqMDAzSNtoqih0Xm37OhQRdW2E7etcREaL%2FRHMCUHW2uSNic4TlcwFV7bYMR5fb2rs29TEDzHFdp0CLnjCY7JTBBjqkAX9nl%2B%2BcdRkqTr38kFiGvMBIzgx9ByhQuYb828UzNTP4WeFg5WfDwFts8UqkUPiSTXYueGG84gb5Md3eCYzYLhwjDwWBimI72QgdouBH7C1lixLUccOSffs2hz7uyLviiZ3N2nYqTWLkKyztTzd3HeWxa6UP3y0kOeTkfK%2F%2FDwWUFGlQiaElgQ58%2BRpCG78%2B2l9aCZDBQoBoVpAHg5JpX845Kmi3&X-Amz-Signature=387a2fd1d62459da7e64d7204615ffda175011009d344849b6c2a89c06fe5513&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIAGQJOU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCDfLzMX8dwO3Spt9DQ%2FbLjIV0FMllPCCxoEKVjc7vYfQIhANjix0lWGx8emloQ4A5OkrArkMx3oYLOT6GWM6b42gGdKv8DCCIQABoMNjM3NDIzMTgzODA1IgySz7aodGjZEMpMpTIq3AM5qOYtupvJcEOj5QFEgfn4nevZz9ubjIH19ua41iju9zvEWwmXb4WitDT96TIktSc698O%2FfAy7H%2B3ka9VO62lB7rLspZyYAZkcZ65yiqAFsenA1hEKazBdKlACvOk46Zmy3g%2FbRe5U3jLW0qDq3%2BaDKy0zulVu4CzMt2ubh2SzKuYR8X8lJBZerfRS1OJGRjC7iixfjHJs0OGUBkvmgaKRErJehVwxSYTO8NhIjkwVxYvoC%2FXGwAPEbik%2F03dN%2BBmdL%2FmCRAtLOAhE0QKVG8lD2GbsgJtPpyf%2BGcimbcVUjTc%2BgyC3U5ea9vAwCaMAe0rCzk%2BatPpLwpG5bVvjgzH2Yg8hEA%2FDW08vzJmMO8sY49rd%2FjtLxixZCzbZWIX7BK46vpKyvk7Q0rGubrZRgfviHYyjGyKYD3oLQgQg4k%2FmgKHj23iF%2FmVb0nNSRfpmcZ40iZqAHZQXcb6Cg9N%2BZ6UuI7PT%2BVzqqNZTgUBxjNXVs8Oz3mm51DBcFIMfnufmGL%2BtUaIe4pMzsNRvTNhYqJW07yKaWV5OHZ7wRc%2FVyIZjcEqMDAzSNtoqih0Xm37OhQRdW2E7etcREaL%2FRHMCUHW2uSNic4TlcwFV7bYMR5fb2rs29TEDzHFdp0CLnjCY7JTBBjqkAX9nl%2B%2BcdRkqTr38kFiGvMBIzgx9ByhQuYb828UzNTP4WeFg5WfDwFts8UqkUPiSTXYueGG84gb5Md3eCYzYLhwjDwWBimI72QgdouBH7C1lixLUccOSffs2hz7uyLviiZ3N2nYqTWLkKyztTzd3HeWxa6UP3y0kOeTkfK%2F%2FDwWUFGlQiaElgQ58%2BRpCG78%2B2l9aCZDBQoBoVpAHg5JpX845Kmi3&X-Amz-Signature=0f7e5e3078898800d78156b055e4a44984cc31b73b7c6faa765c72a7d1c849b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIAGQJOU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCDfLzMX8dwO3Spt9DQ%2FbLjIV0FMllPCCxoEKVjc7vYfQIhANjix0lWGx8emloQ4A5OkrArkMx3oYLOT6GWM6b42gGdKv8DCCIQABoMNjM3NDIzMTgzODA1IgySz7aodGjZEMpMpTIq3AM5qOYtupvJcEOj5QFEgfn4nevZz9ubjIH19ua41iju9zvEWwmXb4WitDT96TIktSc698O%2FfAy7H%2B3ka9VO62lB7rLspZyYAZkcZ65yiqAFsenA1hEKazBdKlACvOk46Zmy3g%2FbRe5U3jLW0qDq3%2BaDKy0zulVu4CzMt2ubh2SzKuYR8X8lJBZerfRS1OJGRjC7iixfjHJs0OGUBkvmgaKRErJehVwxSYTO8NhIjkwVxYvoC%2FXGwAPEbik%2F03dN%2BBmdL%2FmCRAtLOAhE0QKVG8lD2GbsgJtPpyf%2BGcimbcVUjTc%2BgyC3U5ea9vAwCaMAe0rCzk%2BatPpLwpG5bVvjgzH2Yg8hEA%2FDW08vzJmMO8sY49rd%2FjtLxixZCzbZWIX7BK46vpKyvk7Q0rGubrZRgfviHYyjGyKYD3oLQgQg4k%2FmgKHj23iF%2FmVb0nNSRfpmcZ40iZqAHZQXcb6Cg9N%2BZ6UuI7PT%2BVzqqNZTgUBxjNXVs8Oz3mm51DBcFIMfnufmGL%2BtUaIe4pMzsNRvTNhYqJW07yKaWV5OHZ7wRc%2FVyIZjcEqMDAzSNtoqih0Xm37OhQRdW2E7etcREaL%2FRHMCUHW2uSNic4TlcwFV7bYMR5fb2rs29TEDzHFdp0CLnjCY7JTBBjqkAX9nl%2B%2BcdRkqTr38kFiGvMBIzgx9ByhQuYb828UzNTP4WeFg5WfDwFts8UqkUPiSTXYueGG84gb5Md3eCYzYLhwjDwWBimI72QgdouBH7C1lixLUccOSffs2hz7uyLviiZ3N2nYqTWLkKyztTzd3HeWxa6UP3y0kOeTkfK%2F%2FDwWUFGlQiaElgQ58%2BRpCG78%2B2l9aCZDBQoBoVpAHg5JpX845Kmi3&X-Amz-Signature=0ad38ecd666e7c51c5a23510ac920fb4e27a8e2863e687d27dff404d2d9bbbdd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIAGQJOU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCDfLzMX8dwO3Spt9DQ%2FbLjIV0FMllPCCxoEKVjc7vYfQIhANjix0lWGx8emloQ4A5OkrArkMx3oYLOT6GWM6b42gGdKv8DCCIQABoMNjM3NDIzMTgzODA1IgySz7aodGjZEMpMpTIq3AM5qOYtupvJcEOj5QFEgfn4nevZz9ubjIH19ua41iju9zvEWwmXb4WitDT96TIktSc698O%2FfAy7H%2B3ka9VO62lB7rLspZyYAZkcZ65yiqAFsenA1hEKazBdKlACvOk46Zmy3g%2FbRe5U3jLW0qDq3%2BaDKy0zulVu4CzMt2ubh2SzKuYR8X8lJBZerfRS1OJGRjC7iixfjHJs0OGUBkvmgaKRErJehVwxSYTO8NhIjkwVxYvoC%2FXGwAPEbik%2F03dN%2BBmdL%2FmCRAtLOAhE0QKVG8lD2GbsgJtPpyf%2BGcimbcVUjTc%2BgyC3U5ea9vAwCaMAe0rCzk%2BatPpLwpG5bVvjgzH2Yg8hEA%2FDW08vzJmMO8sY49rd%2FjtLxixZCzbZWIX7BK46vpKyvk7Q0rGubrZRgfviHYyjGyKYD3oLQgQg4k%2FmgKHj23iF%2FmVb0nNSRfpmcZ40iZqAHZQXcb6Cg9N%2BZ6UuI7PT%2BVzqqNZTgUBxjNXVs8Oz3mm51DBcFIMfnufmGL%2BtUaIe4pMzsNRvTNhYqJW07yKaWV5OHZ7wRc%2FVyIZjcEqMDAzSNtoqih0Xm37OhQRdW2E7etcREaL%2FRHMCUHW2uSNic4TlcwFV7bYMR5fb2rs29TEDzHFdp0CLnjCY7JTBBjqkAX9nl%2B%2BcdRkqTr38kFiGvMBIzgx9ByhQuYb828UzNTP4WeFg5WfDwFts8UqkUPiSTXYueGG84gb5Md3eCYzYLhwjDwWBimI72QgdouBH7C1lixLUccOSffs2hz7uyLviiZ3N2nYqTWLkKyztTzd3HeWxa6UP3y0kOeTkfK%2F%2FDwWUFGlQiaElgQ58%2BRpCG78%2B2l9aCZDBQoBoVpAHg5JpX845Kmi3&X-Amz-Signature=2aa0d22ca3901f10a4df523544c12bef98e0dc143d5e59138cf586596204b6f1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIAGQJOU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCDfLzMX8dwO3Spt9DQ%2FbLjIV0FMllPCCxoEKVjc7vYfQIhANjix0lWGx8emloQ4A5OkrArkMx3oYLOT6GWM6b42gGdKv8DCCIQABoMNjM3NDIzMTgzODA1IgySz7aodGjZEMpMpTIq3AM5qOYtupvJcEOj5QFEgfn4nevZz9ubjIH19ua41iju9zvEWwmXb4WitDT96TIktSc698O%2FfAy7H%2B3ka9VO62lB7rLspZyYAZkcZ65yiqAFsenA1hEKazBdKlACvOk46Zmy3g%2FbRe5U3jLW0qDq3%2BaDKy0zulVu4CzMt2ubh2SzKuYR8X8lJBZerfRS1OJGRjC7iixfjHJs0OGUBkvmgaKRErJehVwxSYTO8NhIjkwVxYvoC%2FXGwAPEbik%2F03dN%2BBmdL%2FmCRAtLOAhE0QKVG8lD2GbsgJtPpyf%2BGcimbcVUjTc%2BgyC3U5ea9vAwCaMAe0rCzk%2BatPpLwpG5bVvjgzH2Yg8hEA%2FDW08vzJmMO8sY49rd%2FjtLxixZCzbZWIX7BK46vpKyvk7Q0rGubrZRgfviHYyjGyKYD3oLQgQg4k%2FmgKHj23iF%2FmVb0nNSRfpmcZ40iZqAHZQXcb6Cg9N%2BZ6UuI7PT%2BVzqqNZTgUBxjNXVs8Oz3mm51DBcFIMfnufmGL%2BtUaIe4pMzsNRvTNhYqJW07yKaWV5OHZ7wRc%2FVyIZjcEqMDAzSNtoqih0Xm37OhQRdW2E7etcREaL%2FRHMCUHW2uSNic4TlcwFV7bYMR5fb2rs29TEDzHFdp0CLnjCY7JTBBjqkAX9nl%2B%2BcdRkqTr38kFiGvMBIzgx9ByhQuYb828UzNTP4WeFg5WfDwFts8UqkUPiSTXYueGG84gb5Md3eCYzYLhwjDwWBimI72QgdouBH7C1lixLUccOSffs2hz7uyLviiZ3N2nYqTWLkKyztTzd3HeWxa6UP3y0kOeTkfK%2F%2FDwWUFGlQiaElgQ58%2BRpCG78%2B2l9aCZDBQoBoVpAHg5JpX845Kmi3&X-Amz-Signature=c4dc2fde06b1fe2675753e97c1f8fb687f31c7bf824075b8a70e57fc7543c160&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIAGQJOU%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCDfLzMX8dwO3Spt9DQ%2FbLjIV0FMllPCCxoEKVjc7vYfQIhANjix0lWGx8emloQ4A5OkrArkMx3oYLOT6GWM6b42gGdKv8DCCIQABoMNjM3NDIzMTgzODA1IgySz7aodGjZEMpMpTIq3AM5qOYtupvJcEOj5QFEgfn4nevZz9ubjIH19ua41iju9zvEWwmXb4WitDT96TIktSc698O%2FfAy7H%2B3ka9VO62lB7rLspZyYAZkcZ65yiqAFsenA1hEKazBdKlACvOk46Zmy3g%2FbRe5U3jLW0qDq3%2BaDKy0zulVu4CzMt2ubh2SzKuYR8X8lJBZerfRS1OJGRjC7iixfjHJs0OGUBkvmgaKRErJehVwxSYTO8NhIjkwVxYvoC%2FXGwAPEbik%2F03dN%2BBmdL%2FmCRAtLOAhE0QKVG8lD2GbsgJtPpyf%2BGcimbcVUjTc%2BgyC3U5ea9vAwCaMAe0rCzk%2BatPpLwpG5bVvjgzH2Yg8hEA%2FDW08vzJmMO8sY49rd%2FjtLxixZCzbZWIX7BK46vpKyvk7Q0rGubrZRgfviHYyjGyKYD3oLQgQg4k%2FmgKHj23iF%2FmVb0nNSRfpmcZ40iZqAHZQXcb6Cg9N%2BZ6UuI7PT%2BVzqqNZTgUBxjNXVs8Oz3mm51DBcFIMfnufmGL%2BtUaIe4pMzsNRvTNhYqJW07yKaWV5OHZ7wRc%2FVyIZjcEqMDAzSNtoqih0Xm37OhQRdW2E7etcREaL%2FRHMCUHW2uSNic4TlcwFV7bYMR5fb2rs29TEDzHFdp0CLnjCY7JTBBjqkAX9nl%2B%2BcdRkqTr38kFiGvMBIzgx9ByhQuYb828UzNTP4WeFg5WfDwFts8UqkUPiSTXYueGG84gb5Md3eCYzYLhwjDwWBimI72QgdouBH7C1lixLUccOSffs2hz7uyLviiZ3N2nYqTWLkKyztTzd3HeWxa6UP3y0kOeTkfK%2F%2FDwWUFGlQiaElgQ58%2BRpCG78%2B2l9aCZDBQoBoVpAHg5JpX845Kmi3&X-Amz-Signature=7a6b636f703c63ece8f77070a4718e2090e6b6f40bbefead77cf29612dc582ba&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

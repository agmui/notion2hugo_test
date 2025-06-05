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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4VW6IC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCAEPpWW4PoLVDncHMpDxCvA1zFYM1JBxqHz854KS3%2BzwIgDNBygy11JWFZVNtQY50vk3KPN9CUdm%2FhCGFJ8vijDMMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIdL6XM4RxQZhkzqCSrcA91imBq%2FVdyDCU1odo%2FiSzf%2Bs0kj6H7iRzGvb4hcCo37swA3LtbLOUuqt%2BCHTovr%2BiCIXSw8JVgzmeyeic%2FTBdAFcLVFCrIdZy8qwafshijbROQIG3ph0UVYLxIb3YFcLrBzfcs6KqcpLW2pwqLg8GWv5mi16VF%2FZTgMdNMPL3gWCgbzUBkw5USoesQU1%2BNbnBLCiQYW5laWP6t%2FDj4Oaop9S7ePjTNS0u0%2BTl9OtfBFUZZyYnP9XT4kcQtK1EaPKSqr2G41SeCcP5Ei3gB8WB7hCJGsSuYInpxPil%2BAN4vXtMA5c2ltYMeDmolXDNFwXEQMy3KFHCEq%2BDdIX1fi4TeI8lfQGxE66I77YCXvUopBTGbLOBceLjN0kjtD9ovlPRi1%2FDrzW3XWV5tb8g3j3tGV3xEDHKFOryUR4bB2zCXSsMX0hLkdUj6Yz33U0o2KungDKiXkCMHvQnD%2By53pYUL1wfhNkiXnPt77Aumf7yPe7e4gpb6HFWu0E2%2BK6T8gf2OKrKz%2BDM7DvRi1RGXXGT6EuXRo3l0RQkA1bLcvsQWny6b3mCF4kIW5qobx3OVJMzg58XMD%2BrE4BqndYpMD6eHyi9rkbpIpeRu%2FkS%2FyFToF2V4bR61uwMmCaFVjMLbYh8IGOqUBPsSrMESpAUNoHQGMvmAooAu7pe%2Bg8LG09vqAeghB%2F%2FcFpBhXq4SL20RxZy5Ijiu2xiYX7jZuQF8gZ%2FdP4NZa0uGCB4%2BAcu%2BtGWYYvXxpe%2Fuo9r%2BmBehjGSkVVIsc2QbtVtr%2FNJJGLh%2BC80hbRlhczQdBBIvftNbaI84Y9zJuIz7TQO3VgCzIPk1wsgKV1ld6nhHVYI4eY58pj7rrXL3a9FTH0Y6O&X-Amz-Signature=2b194629a32f809970b99b0afa302390a34c619b016f453041cc1d879938c004&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4VW6IC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCAEPpWW4PoLVDncHMpDxCvA1zFYM1JBxqHz854KS3%2BzwIgDNBygy11JWFZVNtQY50vk3KPN9CUdm%2FhCGFJ8vijDMMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIdL6XM4RxQZhkzqCSrcA91imBq%2FVdyDCU1odo%2FiSzf%2Bs0kj6H7iRzGvb4hcCo37swA3LtbLOUuqt%2BCHTovr%2BiCIXSw8JVgzmeyeic%2FTBdAFcLVFCrIdZy8qwafshijbROQIG3ph0UVYLxIb3YFcLrBzfcs6KqcpLW2pwqLg8GWv5mi16VF%2FZTgMdNMPL3gWCgbzUBkw5USoesQU1%2BNbnBLCiQYW5laWP6t%2FDj4Oaop9S7ePjTNS0u0%2BTl9OtfBFUZZyYnP9XT4kcQtK1EaPKSqr2G41SeCcP5Ei3gB8WB7hCJGsSuYInpxPil%2BAN4vXtMA5c2ltYMeDmolXDNFwXEQMy3KFHCEq%2BDdIX1fi4TeI8lfQGxE66I77YCXvUopBTGbLOBceLjN0kjtD9ovlPRi1%2FDrzW3XWV5tb8g3j3tGV3xEDHKFOryUR4bB2zCXSsMX0hLkdUj6Yz33U0o2KungDKiXkCMHvQnD%2By53pYUL1wfhNkiXnPt77Aumf7yPe7e4gpb6HFWu0E2%2BK6T8gf2OKrKz%2BDM7DvRi1RGXXGT6EuXRo3l0RQkA1bLcvsQWny6b3mCF4kIW5qobx3OVJMzg58XMD%2BrE4BqndYpMD6eHyi9rkbpIpeRu%2FkS%2FyFToF2V4bR61uwMmCaFVjMLbYh8IGOqUBPsSrMESpAUNoHQGMvmAooAu7pe%2Bg8LG09vqAeghB%2F%2FcFpBhXq4SL20RxZy5Ijiu2xiYX7jZuQF8gZ%2FdP4NZa0uGCB4%2BAcu%2BtGWYYvXxpe%2Fuo9r%2BmBehjGSkVVIsc2QbtVtr%2FNJJGLh%2BC80hbRlhczQdBBIvftNbaI84Y9zJuIz7TQO3VgCzIPk1wsgKV1ld6nhHVYI4eY58pj7rrXL3a9FTH0Y6O&X-Amz-Signature=758db2ad1b9650ebfb8ec8e2ac63ff509ebd658e029a2e5383c5378681cf35b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4VW6IC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCAEPpWW4PoLVDncHMpDxCvA1zFYM1JBxqHz854KS3%2BzwIgDNBygy11JWFZVNtQY50vk3KPN9CUdm%2FhCGFJ8vijDMMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIdL6XM4RxQZhkzqCSrcA91imBq%2FVdyDCU1odo%2FiSzf%2Bs0kj6H7iRzGvb4hcCo37swA3LtbLOUuqt%2BCHTovr%2BiCIXSw8JVgzmeyeic%2FTBdAFcLVFCrIdZy8qwafshijbROQIG3ph0UVYLxIb3YFcLrBzfcs6KqcpLW2pwqLg8GWv5mi16VF%2FZTgMdNMPL3gWCgbzUBkw5USoesQU1%2BNbnBLCiQYW5laWP6t%2FDj4Oaop9S7ePjTNS0u0%2BTl9OtfBFUZZyYnP9XT4kcQtK1EaPKSqr2G41SeCcP5Ei3gB8WB7hCJGsSuYInpxPil%2BAN4vXtMA5c2ltYMeDmolXDNFwXEQMy3KFHCEq%2BDdIX1fi4TeI8lfQGxE66I77YCXvUopBTGbLOBceLjN0kjtD9ovlPRi1%2FDrzW3XWV5tb8g3j3tGV3xEDHKFOryUR4bB2zCXSsMX0hLkdUj6Yz33U0o2KungDKiXkCMHvQnD%2By53pYUL1wfhNkiXnPt77Aumf7yPe7e4gpb6HFWu0E2%2BK6T8gf2OKrKz%2BDM7DvRi1RGXXGT6EuXRo3l0RQkA1bLcvsQWny6b3mCF4kIW5qobx3OVJMzg58XMD%2BrE4BqndYpMD6eHyi9rkbpIpeRu%2FkS%2FyFToF2V4bR61uwMmCaFVjMLbYh8IGOqUBPsSrMESpAUNoHQGMvmAooAu7pe%2Bg8LG09vqAeghB%2F%2FcFpBhXq4SL20RxZy5Ijiu2xiYX7jZuQF8gZ%2FdP4NZa0uGCB4%2BAcu%2BtGWYYvXxpe%2Fuo9r%2BmBehjGSkVVIsc2QbtVtr%2FNJJGLh%2BC80hbRlhczQdBBIvftNbaI84Y9zJuIz7TQO3VgCzIPk1wsgKV1ld6nhHVYI4eY58pj7rrXL3a9FTH0Y6O&X-Amz-Signature=2f2de392758ce4845f74026cef02788138fe3d7978e2237d09a7333d2704bd3d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4VW6IC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCAEPpWW4PoLVDncHMpDxCvA1zFYM1JBxqHz854KS3%2BzwIgDNBygy11JWFZVNtQY50vk3KPN9CUdm%2FhCGFJ8vijDMMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIdL6XM4RxQZhkzqCSrcA91imBq%2FVdyDCU1odo%2FiSzf%2Bs0kj6H7iRzGvb4hcCo37swA3LtbLOUuqt%2BCHTovr%2BiCIXSw8JVgzmeyeic%2FTBdAFcLVFCrIdZy8qwafshijbROQIG3ph0UVYLxIb3YFcLrBzfcs6KqcpLW2pwqLg8GWv5mi16VF%2FZTgMdNMPL3gWCgbzUBkw5USoesQU1%2BNbnBLCiQYW5laWP6t%2FDj4Oaop9S7ePjTNS0u0%2BTl9OtfBFUZZyYnP9XT4kcQtK1EaPKSqr2G41SeCcP5Ei3gB8WB7hCJGsSuYInpxPil%2BAN4vXtMA5c2ltYMeDmolXDNFwXEQMy3KFHCEq%2BDdIX1fi4TeI8lfQGxE66I77YCXvUopBTGbLOBceLjN0kjtD9ovlPRi1%2FDrzW3XWV5tb8g3j3tGV3xEDHKFOryUR4bB2zCXSsMX0hLkdUj6Yz33U0o2KungDKiXkCMHvQnD%2By53pYUL1wfhNkiXnPt77Aumf7yPe7e4gpb6HFWu0E2%2BK6T8gf2OKrKz%2BDM7DvRi1RGXXGT6EuXRo3l0RQkA1bLcvsQWny6b3mCF4kIW5qobx3OVJMzg58XMD%2BrE4BqndYpMD6eHyi9rkbpIpeRu%2FkS%2FyFToF2V4bR61uwMmCaFVjMLbYh8IGOqUBPsSrMESpAUNoHQGMvmAooAu7pe%2Bg8LG09vqAeghB%2F%2FcFpBhXq4SL20RxZy5Ijiu2xiYX7jZuQF8gZ%2FdP4NZa0uGCB4%2BAcu%2BtGWYYvXxpe%2Fuo9r%2BmBehjGSkVVIsc2QbtVtr%2FNJJGLh%2BC80hbRlhczQdBBIvftNbaI84Y9zJuIz7TQO3VgCzIPk1wsgKV1ld6nhHVYI4eY58pj7rrXL3a9FTH0Y6O&X-Amz-Signature=24a2d337be862899bb62aac315296ee3897fe164cbf4b7411d6e7fdd1ec8982d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4VW6IC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCAEPpWW4PoLVDncHMpDxCvA1zFYM1JBxqHz854KS3%2BzwIgDNBygy11JWFZVNtQY50vk3KPN9CUdm%2FhCGFJ8vijDMMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIdL6XM4RxQZhkzqCSrcA91imBq%2FVdyDCU1odo%2FiSzf%2Bs0kj6H7iRzGvb4hcCo37swA3LtbLOUuqt%2BCHTovr%2BiCIXSw8JVgzmeyeic%2FTBdAFcLVFCrIdZy8qwafshijbROQIG3ph0UVYLxIb3YFcLrBzfcs6KqcpLW2pwqLg8GWv5mi16VF%2FZTgMdNMPL3gWCgbzUBkw5USoesQU1%2BNbnBLCiQYW5laWP6t%2FDj4Oaop9S7ePjTNS0u0%2BTl9OtfBFUZZyYnP9XT4kcQtK1EaPKSqr2G41SeCcP5Ei3gB8WB7hCJGsSuYInpxPil%2BAN4vXtMA5c2ltYMeDmolXDNFwXEQMy3KFHCEq%2BDdIX1fi4TeI8lfQGxE66I77YCXvUopBTGbLOBceLjN0kjtD9ovlPRi1%2FDrzW3XWV5tb8g3j3tGV3xEDHKFOryUR4bB2zCXSsMX0hLkdUj6Yz33U0o2KungDKiXkCMHvQnD%2By53pYUL1wfhNkiXnPt77Aumf7yPe7e4gpb6HFWu0E2%2BK6T8gf2OKrKz%2BDM7DvRi1RGXXGT6EuXRo3l0RQkA1bLcvsQWny6b3mCF4kIW5qobx3OVJMzg58XMD%2BrE4BqndYpMD6eHyi9rkbpIpeRu%2FkS%2FyFToF2V4bR61uwMmCaFVjMLbYh8IGOqUBPsSrMESpAUNoHQGMvmAooAu7pe%2Bg8LG09vqAeghB%2F%2FcFpBhXq4SL20RxZy5Ijiu2xiYX7jZuQF8gZ%2FdP4NZa0uGCB4%2BAcu%2BtGWYYvXxpe%2Fuo9r%2BmBehjGSkVVIsc2QbtVtr%2FNJJGLh%2BC80hbRlhczQdBBIvftNbaI84Y9zJuIz7TQO3VgCzIPk1wsgKV1ld6nhHVYI4eY58pj7rrXL3a9FTH0Y6O&X-Amz-Signature=c38d0ef503c11f5a60949d268418b17a3471eae6c1d2bf4b3eeba4efa81710bd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4VW6IC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCAEPpWW4PoLVDncHMpDxCvA1zFYM1JBxqHz854KS3%2BzwIgDNBygy11JWFZVNtQY50vk3KPN9CUdm%2FhCGFJ8vijDMMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIdL6XM4RxQZhkzqCSrcA91imBq%2FVdyDCU1odo%2FiSzf%2Bs0kj6H7iRzGvb4hcCo37swA3LtbLOUuqt%2BCHTovr%2BiCIXSw8JVgzmeyeic%2FTBdAFcLVFCrIdZy8qwafshijbROQIG3ph0UVYLxIb3YFcLrBzfcs6KqcpLW2pwqLg8GWv5mi16VF%2FZTgMdNMPL3gWCgbzUBkw5USoesQU1%2BNbnBLCiQYW5laWP6t%2FDj4Oaop9S7ePjTNS0u0%2BTl9OtfBFUZZyYnP9XT4kcQtK1EaPKSqr2G41SeCcP5Ei3gB8WB7hCJGsSuYInpxPil%2BAN4vXtMA5c2ltYMeDmolXDNFwXEQMy3KFHCEq%2BDdIX1fi4TeI8lfQGxE66I77YCXvUopBTGbLOBceLjN0kjtD9ovlPRi1%2FDrzW3XWV5tb8g3j3tGV3xEDHKFOryUR4bB2zCXSsMX0hLkdUj6Yz33U0o2KungDKiXkCMHvQnD%2By53pYUL1wfhNkiXnPt77Aumf7yPe7e4gpb6HFWu0E2%2BK6T8gf2OKrKz%2BDM7DvRi1RGXXGT6EuXRo3l0RQkA1bLcvsQWny6b3mCF4kIW5qobx3OVJMzg58XMD%2BrE4BqndYpMD6eHyi9rkbpIpeRu%2FkS%2FyFToF2V4bR61uwMmCaFVjMLbYh8IGOqUBPsSrMESpAUNoHQGMvmAooAu7pe%2Bg8LG09vqAeghB%2F%2FcFpBhXq4SL20RxZy5Ijiu2xiYX7jZuQF8gZ%2FdP4NZa0uGCB4%2BAcu%2BtGWYYvXxpe%2Fuo9r%2BmBehjGSkVVIsc2QbtVtr%2FNJJGLh%2BC80hbRlhczQdBBIvftNbaI84Y9zJuIz7TQO3VgCzIPk1wsgKV1ld6nhHVYI4eY58pj7rrXL3a9FTH0Y6O&X-Amz-Signature=e415bcd9bbbefaa4742988ce22d06f9ed36770c0be2b71529f0d62cb0af4916a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W4VW6IC%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCAEPpWW4PoLVDncHMpDxCvA1zFYM1JBxqHz854KS3%2BzwIgDNBygy11JWFZVNtQY50vk3KPN9CUdm%2FhCGFJ8vijDMMq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIdL6XM4RxQZhkzqCSrcA91imBq%2FVdyDCU1odo%2FiSzf%2Bs0kj6H7iRzGvb4hcCo37swA3LtbLOUuqt%2BCHTovr%2BiCIXSw8JVgzmeyeic%2FTBdAFcLVFCrIdZy8qwafshijbROQIG3ph0UVYLxIb3YFcLrBzfcs6KqcpLW2pwqLg8GWv5mi16VF%2FZTgMdNMPL3gWCgbzUBkw5USoesQU1%2BNbnBLCiQYW5laWP6t%2FDj4Oaop9S7ePjTNS0u0%2BTl9OtfBFUZZyYnP9XT4kcQtK1EaPKSqr2G41SeCcP5Ei3gB8WB7hCJGsSuYInpxPil%2BAN4vXtMA5c2ltYMeDmolXDNFwXEQMy3KFHCEq%2BDdIX1fi4TeI8lfQGxE66I77YCXvUopBTGbLOBceLjN0kjtD9ovlPRi1%2FDrzW3XWV5tb8g3j3tGV3xEDHKFOryUR4bB2zCXSsMX0hLkdUj6Yz33U0o2KungDKiXkCMHvQnD%2By53pYUL1wfhNkiXnPt77Aumf7yPe7e4gpb6HFWu0E2%2BK6T8gf2OKrKz%2BDM7DvRi1RGXXGT6EuXRo3l0RQkA1bLcvsQWny6b3mCF4kIW5qobx3OVJMzg58XMD%2BrE4BqndYpMD6eHyi9rkbpIpeRu%2FkS%2FyFToF2V4bR61uwMmCaFVjMLbYh8IGOqUBPsSrMESpAUNoHQGMvmAooAu7pe%2Bg8LG09vqAeghB%2F%2FcFpBhXq4SL20RxZy5Ijiu2xiYX7jZuQF8gZ%2FdP4NZa0uGCB4%2BAcu%2BtGWYYvXxpe%2Fuo9r%2BmBehjGSkVVIsc2QbtVtr%2FNJJGLh%2BC80hbRlhczQdBBIvftNbaI84Y9zJuIz7TQO3VgCzIPk1wsgKV1ld6nhHVYI4eY58pj7rrXL3a9FTH0Y6O&X-Amz-Signature=b8cd109a5bcb8d5c8c2bc5e1cddee72a1bc03c903be1533e0c10e446cef13135&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

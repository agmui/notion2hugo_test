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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCXQ53H%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICKW3aYGCKu1CezX9F0iEw6l6REtP%2FUmFRhLMQy1ApnbAiEA9f1QdUZQA2UhpWGoWxBHoaOA4HhFwmiULOVSjKs1GCQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEjiTw6CuOeB5G6%2FdyrcA6y%2FB%2Fz%2BIA%2B2YKpRKGWiuhqtIgl0hpXyqILL2lMrmO1GUF%2FMYWVDSC0VaHKoteokrRlX35m%2FalcWTv%2BocZhFfWXSxBDigztmTXWw5SjD7w9GR1Jm0CFe3ekq%2BEatuH5%2B8BN%2FkfdDlrSrUKiMBvjc9oaJC4voVPEzsmq%2FhAJFNzr0OIV%2FD2RjcRCuO4o0HHVlccUlpa31eJhysvsdSwal2wb7i9IhSzJgK1XwqqqbBTya7OwCQfjl9E55efNLNmBLWBQJ9%2BGK2HqrQJ%2FKJXaC0Ad1r%2BKiOnK0K5wNNRXNgWMHi4HeEvqk%2F7SJW6pz3Ev6CWradi2cqImGtflHKqg5Ykm25DHIF0NNInFCNKRCYbucRAsz7XqVdzbfKp1Lb6ct2B2vLZGBlaJzVzOuvhil0P6H%2F7%2FodNPyXIx0bFeYpExcW86mxfKRCmYjvwWfLTH4Q9pbToBZDcHOMtxij5XnkgxR5IN4eSc4v%2FXKAfCQ8f%2FDiqnkxLJqBXtl%2Bv6%2B7JBkH%2BTnqm%2B%2BorK5%2Bf4SWvoiGNtQs%2BKv5NX3rAosnrXxckIgTLqMMSnApGdA1wWc%2Fp4J3hI0uYiZKerLvxcxuTNuK0enl8e0s7chbyWQEb5p4dks7CXSjG2ujnuWIPkoMLa9s8IGOqUB0qYvYBBqF%2Bmdva27em8xTG1iIAPBEW5w2WjSY5K%2BDM4wt7MuVFXuK1XW2qp5jRp5Rq3j5O4i%2B55NzdxtCFSB91K4l%2Be6633gjyLzYNakendcqmGOh0HjRcmozuch7JT%2FZ%2B9h3lM0w%2FrAxzcIJcmqyBOB0L3Pj1ONYsKvE157RCSeLOwseZ%2FPEWZeMBiueDGgsCqCLmK%2FtRCSyyrMTp6VsmoGn%2Fe1&X-Amz-Signature=5ea4cfcb9761ef2ec0a9ac0def8b6a70c6a7edf07b11ea380790f09837e2434c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCXQ53H%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICKW3aYGCKu1CezX9F0iEw6l6REtP%2FUmFRhLMQy1ApnbAiEA9f1QdUZQA2UhpWGoWxBHoaOA4HhFwmiULOVSjKs1GCQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEjiTw6CuOeB5G6%2FdyrcA6y%2FB%2Fz%2BIA%2B2YKpRKGWiuhqtIgl0hpXyqILL2lMrmO1GUF%2FMYWVDSC0VaHKoteokrRlX35m%2FalcWTv%2BocZhFfWXSxBDigztmTXWw5SjD7w9GR1Jm0CFe3ekq%2BEatuH5%2B8BN%2FkfdDlrSrUKiMBvjc9oaJC4voVPEzsmq%2FhAJFNzr0OIV%2FD2RjcRCuO4o0HHVlccUlpa31eJhysvsdSwal2wb7i9IhSzJgK1XwqqqbBTya7OwCQfjl9E55efNLNmBLWBQJ9%2BGK2HqrQJ%2FKJXaC0Ad1r%2BKiOnK0K5wNNRXNgWMHi4HeEvqk%2F7SJW6pz3Ev6CWradi2cqImGtflHKqg5Ykm25DHIF0NNInFCNKRCYbucRAsz7XqVdzbfKp1Lb6ct2B2vLZGBlaJzVzOuvhil0P6H%2F7%2FodNPyXIx0bFeYpExcW86mxfKRCmYjvwWfLTH4Q9pbToBZDcHOMtxij5XnkgxR5IN4eSc4v%2FXKAfCQ8f%2FDiqnkxLJqBXtl%2Bv6%2B7JBkH%2BTnqm%2B%2BorK5%2Bf4SWvoiGNtQs%2BKv5NX3rAosnrXxckIgTLqMMSnApGdA1wWc%2Fp4J3hI0uYiZKerLvxcxuTNuK0enl8e0s7chbyWQEb5p4dks7CXSjG2ujnuWIPkoMLa9s8IGOqUB0qYvYBBqF%2Bmdva27em8xTG1iIAPBEW5w2WjSY5K%2BDM4wt7MuVFXuK1XW2qp5jRp5Rq3j5O4i%2B55NzdxtCFSB91K4l%2Be6633gjyLzYNakendcqmGOh0HjRcmozuch7JT%2FZ%2B9h3lM0w%2FrAxzcIJcmqyBOB0L3Pj1ONYsKvE157RCSeLOwseZ%2FPEWZeMBiueDGgsCqCLmK%2FtRCSyyrMTp6VsmoGn%2Fe1&X-Amz-Signature=69265265c5805ce33a52bb9b5c2b60389c3d660a60eebecff2d94f776a53b2d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCXQ53H%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICKW3aYGCKu1CezX9F0iEw6l6REtP%2FUmFRhLMQy1ApnbAiEA9f1QdUZQA2UhpWGoWxBHoaOA4HhFwmiULOVSjKs1GCQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEjiTw6CuOeB5G6%2FdyrcA6y%2FB%2Fz%2BIA%2B2YKpRKGWiuhqtIgl0hpXyqILL2lMrmO1GUF%2FMYWVDSC0VaHKoteokrRlX35m%2FalcWTv%2BocZhFfWXSxBDigztmTXWw5SjD7w9GR1Jm0CFe3ekq%2BEatuH5%2B8BN%2FkfdDlrSrUKiMBvjc9oaJC4voVPEzsmq%2FhAJFNzr0OIV%2FD2RjcRCuO4o0HHVlccUlpa31eJhysvsdSwal2wb7i9IhSzJgK1XwqqqbBTya7OwCQfjl9E55efNLNmBLWBQJ9%2BGK2HqrQJ%2FKJXaC0Ad1r%2BKiOnK0K5wNNRXNgWMHi4HeEvqk%2F7SJW6pz3Ev6CWradi2cqImGtflHKqg5Ykm25DHIF0NNInFCNKRCYbucRAsz7XqVdzbfKp1Lb6ct2B2vLZGBlaJzVzOuvhil0P6H%2F7%2FodNPyXIx0bFeYpExcW86mxfKRCmYjvwWfLTH4Q9pbToBZDcHOMtxij5XnkgxR5IN4eSc4v%2FXKAfCQ8f%2FDiqnkxLJqBXtl%2Bv6%2B7JBkH%2BTnqm%2B%2BorK5%2Bf4SWvoiGNtQs%2BKv5NX3rAosnrXxckIgTLqMMSnApGdA1wWc%2Fp4J3hI0uYiZKerLvxcxuTNuK0enl8e0s7chbyWQEb5p4dks7CXSjG2ujnuWIPkoMLa9s8IGOqUB0qYvYBBqF%2Bmdva27em8xTG1iIAPBEW5w2WjSY5K%2BDM4wt7MuVFXuK1XW2qp5jRp5Rq3j5O4i%2B55NzdxtCFSB91K4l%2Be6633gjyLzYNakendcqmGOh0HjRcmozuch7JT%2FZ%2B9h3lM0w%2FrAxzcIJcmqyBOB0L3Pj1ONYsKvE157RCSeLOwseZ%2FPEWZeMBiueDGgsCqCLmK%2FtRCSyyrMTp6VsmoGn%2Fe1&X-Amz-Signature=2fc020a7a9b29cd86f550390ebe3236f57fb7085b9405183649f17cc4df13a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCXQ53H%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICKW3aYGCKu1CezX9F0iEw6l6REtP%2FUmFRhLMQy1ApnbAiEA9f1QdUZQA2UhpWGoWxBHoaOA4HhFwmiULOVSjKs1GCQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEjiTw6CuOeB5G6%2FdyrcA6y%2FB%2Fz%2BIA%2B2YKpRKGWiuhqtIgl0hpXyqILL2lMrmO1GUF%2FMYWVDSC0VaHKoteokrRlX35m%2FalcWTv%2BocZhFfWXSxBDigztmTXWw5SjD7w9GR1Jm0CFe3ekq%2BEatuH5%2B8BN%2FkfdDlrSrUKiMBvjc9oaJC4voVPEzsmq%2FhAJFNzr0OIV%2FD2RjcRCuO4o0HHVlccUlpa31eJhysvsdSwal2wb7i9IhSzJgK1XwqqqbBTya7OwCQfjl9E55efNLNmBLWBQJ9%2BGK2HqrQJ%2FKJXaC0Ad1r%2BKiOnK0K5wNNRXNgWMHi4HeEvqk%2F7SJW6pz3Ev6CWradi2cqImGtflHKqg5Ykm25DHIF0NNInFCNKRCYbucRAsz7XqVdzbfKp1Lb6ct2B2vLZGBlaJzVzOuvhil0P6H%2F7%2FodNPyXIx0bFeYpExcW86mxfKRCmYjvwWfLTH4Q9pbToBZDcHOMtxij5XnkgxR5IN4eSc4v%2FXKAfCQ8f%2FDiqnkxLJqBXtl%2Bv6%2B7JBkH%2BTnqm%2B%2BorK5%2Bf4SWvoiGNtQs%2BKv5NX3rAosnrXxckIgTLqMMSnApGdA1wWc%2Fp4J3hI0uYiZKerLvxcxuTNuK0enl8e0s7chbyWQEb5p4dks7CXSjG2ujnuWIPkoMLa9s8IGOqUB0qYvYBBqF%2Bmdva27em8xTG1iIAPBEW5w2WjSY5K%2BDM4wt7MuVFXuK1XW2qp5jRp5Rq3j5O4i%2B55NzdxtCFSB91K4l%2Be6633gjyLzYNakendcqmGOh0HjRcmozuch7JT%2FZ%2B9h3lM0w%2FrAxzcIJcmqyBOB0L3Pj1ONYsKvE157RCSeLOwseZ%2FPEWZeMBiueDGgsCqCLmK%2FtRCSyyrMTp6VsmoGn%2Fe1&X-Amz-Signature=b37eb788b1eb186f87d43bf6dd58bfd1e7b58a79e148c4acdf7d5b96b59640ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCXQ53H%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICKW3aYGCKu1CezX9F0iEw6l6REtP%2FUmFRhLMQy1ApnbAiEA9f1QdUZQA2UhpWGoWxBHoaOA4HhFwmiULOVSjKs1GCQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEjiTw6CuOeB5G6%2FdyrcA6y%2FB%2Fz%2BIA%2B2YKpRKGWiuhqtIgl0hpXyqILL2lMrmO1GUF%2FMYWVDSC0VaHKoteokrRlX35m%2FalcWTv%2BocZhFfWXSxBDigztmTXWw5SjD7w9GR1Jm0CFe3ekq%2BEatuH5%2B8BN%2FkfdDlrSrUKiMBvjc9oaJC4voVPEzsmq%2FhAJFNzr0OIV%2FD2RjcRCuO4o0HHVlccUlpa31eJhysvsdSwal2wb7i9IhSzJgK1XwqqqbBTya7OwCQfjl9E55efNLNmBLWBQJ9%2BGK2HqrQJ%2FKJXaC0Ad1r%2BKiOnK0K5wNNRXNgWMHi4HeEvqk%2F7SJW6pz3Ev6CWradi2cqImGtflHKqg5Ykm25DHIF0NNInFCNKRCYbucRAsz7XqVdzbfKp1Lb6ct2B2vLZGBlaJzVzOuvhil0P6H%2F7%2FodNPyXIx0bFeYpExcW86mxfKRCmYjvwWfLTH4Q9pbToBZDcHOMtxij5XnkgxR5IN4eSc4v%2FXKAfCQ8f%2FDiqnkxLJqBXtl%2Bv6%2B7JBkH%2BTnqm%2B%2BorK5%2Bf4SWvoiGNtQs%2BKv5NX3rAosnrXxckIgTLqMMSnApGdA1wWc%2Fp4J3hI0uYiZKerLvxcxuTNuK0enl8e0s7chbyWQEb5p4dks7CXSjG2ujnuWIPkoMLa9s8IGOqUB0qYvYBBqF%2Bmdva27em8xTG1iIAPBEW5w2WjSY5K%2BDM4wt7MuVFXuK1XW2qp5jRp5Rq3j5O4i%2B55NzdxtCFSB91K4l%2Be6633gjyLzYNakendcqmGOh0HjRcmozuch7JT%2FZ%2B9h3lM0w%2FrAxzcIJcmqyBOB0L3Pj1ONYsKvE157RCSeLOwseZ%2FPEWZeMBiueDGgsCqCLmK%2FtRCSyyrMTp6VsmoGn%2Fe1&X-Amz-Signature=c4eebf091c5268686d937301eb77d1c8f138297481f7fb30e17ad434f4393b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCXQ53H%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICKW3aYGCKu1CezX9F0iEw6l6REtP%2FUmFRhLMQy1ApnbAiEA9f1QdUZQA2UhpWGoWxBHoaOA4HhFwmiULOVSjKs1GCQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEjiTw6CuOeB5G6%2FdyrcA6y%2FB%2Fz%2BIA%2B2YKpRKGWiuhqtIgl0hpXyqILL2lMrmO1GUF%2FMYWVDSC0VaHKoteokrRlX35m%2FalcWTv%2BocZhFfWXSxBDigztmTXWw5SjD7w9GR1Jm0CFe3ekq%2BEatuH5%2B8BN%2FkfdDlrSrUKiMBvjc9oaJC4voVPEzsmq%2FhAJFNzr0OIV%2FD2RjcRCuO4o0HHVlccUlpa31eJhysvsdSwal2wb7i9IhSzJgK1XwqqqbBTya7OwCQfjl9E55efNLNmBLWBQJ9%2BGK2HqrQJ%2FKJXaC0Ad1r%2BKiOnK0K5wNNRXNgWMHi4HeEvqk%2F7SJW6pz3Ev6CWradi2cqImGtflHKqg5Ykm25DHIF0NNInFCNKRCYbucRAsz7XqVdzbfKp1Lb6ct2B2vLZGBlaJzVzOuvhil0P6H%2F7%2FodNPyXIx0bFeYpExcW86mxfKRCmYjvwWfLTH4Q9pbToBZDcHOMtxij5XnkgxR5IN4eSc4v%2FXKAfCQ8f%2FDiqnkxLJqBXtl%2Bv6%2B7JBkH%2BTnqm%2B%2BorK5%2Bf4SWvoiGNtQs%2BKv5NX3rAosnrXxckIgTLqMMSnApGdA1wWc%2Fp4J3hI0uYiZKerLvxcxuTNuK0enl8e0s7chbyWQEb5p4dks7CXSjG2ujnuWIPkoMLa9s8IGOqUB0qYvYBBqF%2Bmdva27em8xTG1iIAPBEW5w2WjSY5K%2BDM4wt7MuVFXuK1XW2qp5jRp5Rq3j5O4i%2B55NzdxtCFSB91K4l%2Be6633gjyLzYNakendcqmGOh0HjRcmozuch7JT%2FZ%2B9h3lM0w%2FrAxzcIJcmqyBOB0L3Pj1ONYsKvE157RCSeLOwseZ%2FPEWZeMBiueDGgsCqCLmK%2FtRCSyyrMTp6VsmoGn%2Fe1&X-Amz-Signature=61c29eec787957cc1a4dea0b236ba623d5ef68656413cbd33c5e27a52c358e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCXQ53H%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T033650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCICKW3aYGCKu1CezX9F0iEw6l6REtP%2FUmFRhLMQy1ApnbAiEA9f1QdUZQA2UhpWGoWxBHoaOA4HhFwmiULOVSjKs1GCQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDEjiTw6CuOeB5G6%2FdyrcA6y%2FB%2Fz%2BIA%2B2YKpRKGWiuhqtIgl0hpXyqILL2lMrmO1GUF%2FMYWVDSC0VaHKoteokrRlX35m%2FalcWTv%2BocZhFfWXSxBDigztmTXWw5SjD7w9GR1Jm0CFe3ekq%2BEatuH5%2B8BN%2FkfdDlrSrUKiMBvjc9oaJC4voVPEzsmq%2FhAJFNzr0OIV%2FD2RjcRCuO4o0HHVlccUlpa31eJhysvsdSwal2wb7i9IhSzJgK1XwqqqbBTya7OwCQfjl9E55efNLNmBLWBQJ9%2BGK2HqrQJ%2FKJXaC0Ad1r%2BKiOnK0K5wNNRXNgWMHi4HeEvqk%2F7SJW6pz3Ev6CWradi2cqImGtflHKqg5Ykm25DHIF0NNInFCNKRCYbucRAsz7XqVdzbfKp1Lb6ct2B2vLZGBlaJzVzOuvhil0P6H%2F7%2FodNPyXIx0bFeYpExcW86mxfKRCmYjvwWfLTH4Q9pbToBZDcHOMtxij5XnkgxR5IN4eSc4v%2FXKAfCQ8f%2FDiqnkxLJqBXtl%2Bv6%2B7JBkH%2BTnqm%2B%2BorK5%2Bf4SWvoiGNtQs%2BKv5NX3rAosnrXxckIgTLqMMSnApGdA1wWc%2Fp4J3hI0uYiZKerLvxcxuTNuK0enl8e0s7chbyWQEb5p4dks7CXSjG2ujnuWIPkoMLa9s8IGOqUB0qYvYBBqF%2Bmdva27em8xTG1iIAPBEW5w2WjSY5K%2BDM4wt7MuVFXuK1XW2qp5jRp5Rq3j5O4i%2B55NzdxtCFSB91K4l%2Be6633gjyLzYNakendcqmGOh0HjRcmozuch7JT%2FZ%2B9h3lM0w%2FrAxzcIJcmqyBOB0L3Pj1ONYsKvE157RCSeLOwseZ%2FPEWZeMBiueDGgsCqCLmK%2FtRCSyyrMTp6VsmoGn%2Fe1&X-Amz-Signature=07e10503ec6936399b6458b79e569e2e218aa8d39295a07893a40a2b69e42733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

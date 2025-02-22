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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDLA3M6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYizlUwmAjS8ixWpL9%2FzrpcoQTZWq%2FqKic0k1cRf3MuwIgLEYllsWzCXdcc5x6W2UGas58cly8oVNWS%2F0LQyAsjGUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhK47h4kt3T71P5EyrcA%2FF1C6zlesaeD0pUjgLSiSyd6jJp5SICOqQLNCekDq2rm3ZcBR1T10E%2FjYNZ%2FZUv78YNSNyRiUgkPpSYt%2BGH9TUXmJnAxJhEQS%2BIh1jDYtuHLbOrr6qKryHjujqujD0b2bU%2B2XX%2FF3wGqbbvTz0gUFqNwkgIDTMfee9zheOQDX%2F0gIjGLoueEDdfawzx5cOXr3HRyOjR1bLw5zhFHFDtgM6yBfmdtwd%2BQUe9M9xJ4YQjY%2BIZpzOsn0JQx2th2iBdzuhj7%2F9i0bPjJZ6o%2FLf53MNQq9PUAgzkDzflufX7necOWJW0Dgpm%2BJ67XR19yjzixPMB0qbKFbbIy4Pl%2Bt3O%2FHg12SZn0wJnetf%2BMwkUp24JkERNiMIYA1DqlYInsnypunne08q7vF%2Br5FOfEhbD1CUuqfMu0kXz8J7U8sRvm9HL9r3FyIrZ8Ta8RNGJ8EGf9AX4RVMAnJ9ezb2wYgbCsqMVGEztwLF7xCUy%2B3oWTEuQc5sXsWzzz3uRW9Tkp4hDS4bHIt25oqKBHQ%2Be8VmhsXUMxA5kd2Kj1XgkYL2Sad4fcvwgVPDZQmnJvbnN8U2W8X%2BPyT8LpSIeUA%2BnlktghIK72cR4%2Bjg9XSY7mOx%2BpUWspEkTq8vETNS2mJFYMLrH5b0GOqUBR2LqmhT%2BsC7siQvyLEzhnbSBdtxPvu0lu4%2BecgazGxTyc1oXb9SJQpv%2FvecCVREQ7hL%2FG5DTu5i81%2BLYkJ%2BJgcY%2BAxo6XJRf%2FfbPuwYRNibyi4AvbddxtGQ8iVzd0tBk%2FaumvjMmvzOy%2Fce42zq906WLHZJDzpcYKJ5%2B4t3Wo%2FVpfyhw6FyoU7%2BGvCNqHVIrHgcug5CO8ti0hxVS%2FnQ%2F7TJbut9C&X-Amz-Signature=72c0c90c709f40898057735c1a6f9c38f02a4449bbd834b299edd04ae89adc1e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDLA3M6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYizlUwmAjS8ixWpL9%2FzrpcoQTZWq%2FqKic0k1cRf3MuwIgLEYllsWzCXdcc5x6W2UGas58cly8oVNWS%2F0LQyAsjGUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhK47h4kt3T71P5EyrcA%2FF1C6zlesaeD0pUjgLSiSyd6jJp5SICOqQLNCekDq2rm3ZcBR1T10E%2FjYNZ%2FZUv78YNSNyRiUgkPpSYt%2BGH9TUXmJnAxJhEQS%2BIh1jDYtuHLbOrr6qKryHjujqujD0b2bU%2B2XX%2FF3wGqbbvTz0gUFqNwkgIDTMfee9zheOQDX%2F0gIjGLoueEDdfawzx5cOXr3HRyOjR1bLw5zhFHFDtgM6yBfmdtwd%2BQUe9M9xJ4YQjY%2BIZpzOsn0JQx2th2iBdzuhj7%2F9i0bPjJZ6o%2FLf53MNQq9PUAgzkDzflufX7necOWJW0Dgpm%2BJ67XR19yjzixPMB0qbKFbbIy4Pl%2Bt3O%2FHg12SZn0wJnetf%2BMwkUp24JkERNiMIYA1DqlYInsnypunne08q7vF%2Br5FOfEhbD1CUuqfMu0kXz8J7U8sRvm9HL9r3FyIrZ8Ta8RNGJ8EGf9AX4RVMAnJ9ezb2wYgbCsqMVGEztwLF7xCUy%2B3oWTEuQc5sXsWzzz3uRW9Tkp4hDS4bHIt25oqKBHQ%2Be8VmhsXUMxA5kd2Kj1XgkYL2Sad4fcvwgVPDZQmnJvbnN8U2W8X%2BPyT8LpSIeUA%2BnlktghIK72cR4%2Bjg9XSY7mOx%2BpUWspEkTq8vETNS2mJFYMLrH5b0GOqUBR2LqmhT%2BsC7siQvyLEzhnbSBdtxPvu0lu4%2BecgazGxTyc1oXb9SJQpv%2FvecCVREQ7hL%2FG5DTu5i81%2BLYkJ%2BJgcY%2BAxo6XJRf%2FfbPuwYRNibyi4AvbddxtGQ8iVzd0tBk%2FaumvjMmvzOy%2Fce42zq906WLHZJDzpcYKJ5%2B4t3Wo%2FVpfyhw6FyoU7%2BGvCNqHVIrHgcug5CO8ti0hxVS%2FnQ%2F7TJbut9C&X-Amz-Signature=ef243304bc95f109962a82836aba84ddf1d8a40e476960b7cea79bb653f4be8e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDLA3M6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYizlUwmAjS8ixWpL9%2FzrpcoQTZWq%2FqKic0k1cRf3MuwIgLEYllsWzCXdcc5x6W2UGas58cly8oVNWS%2F0LQyAsjGUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhK47h4kt3T71P5EyrcA%2FF1C6zlesaeD0pUjgLSiSyd6jJp5SICOqQLNCekDq2rm3ZcBR1T10E%2FjYNZ%2FZUv78YNSNyRiUgkPpSYt%2BGH9TUXmJnAxJhEQS%2BIh1jDYtuHLbOrr6qKryHjujqujD0b2bU%2B2XX%2FF3wGqbbvTz0gUFqNwkgIDTMfee9zheOQDX%2F0gIjGLoueEDdfawzx5cOXr3HRyOjR1bLw5zhFHFDtgM6yBfmdtwd%2BQUe9M9xJ4YQjY%2BIZpzOsn0JQx2th2iBdzuhj7%2F9i0bPjJZ6o%2FLf53MNQq9PUAgzkDzflufX7necOWJW0Dgpm%2BJ67XR19yjzixPMB0qbKFbbIy4Pl%2Bt3O%2FHg12SZn0wJnetf%2BMwkUp24JkERNiMIYA1DqlYInsnypunne08q7vF%2Br5FOfEhbD1CUuqfMu0kXz8J7U8sRvm9HL9r3FyIrZ8Ta8RNGJ8EGf9AX4RVMAnJ9ezb2wYgbCsqMVGEztwLF7xCUy%2B3oWTEuQc5sXsWzzz3uRW9Tkp4hDS4bHIt25oqKBHQ%2Be8VmhsXUMxA5kd2Kj1XgkYL2Sad4fcvwgVPDZQmnJvbnN8U2W8X%2BPyT8LpSIeUA%2BnlktghIK72cR4%2Bjg9XSY7mOx%2BpUWspEkTq8vETNS2mJFYMLrH5b0GOqUBR2LqmhT%2BsC7siQvyLEzhnbSBdtxPvu0lu4%2BecgazGxTyc1oXb9SJQpv%2FvecCVREQ7hL%2FG5DTu5i81%2BLYkJ%2BJgcY%2BAxo6XJRf%2FfbPuwYRNibyi4AvbddxtGQ8iVzd0tBk%2FaumvjMmvzOy%2Fce42zq906WLHZJDzpcYKJ5%2B4t3Wo%2FVpfyhw6FyoU7%2BGvCNqHVIrHgcug5CO8ti0hxVS%2FnQ%2F7TJbut9C&X-Amz-Signature=1ed6c3012d5449d60809565c1a3d772fdd60a91f75ea3d8ad96173a450476f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDLA3M6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYizlUwmAjS8ixWpL9%2FzrpcoQTZWq%2FqKic0k1cRf3MuwIgLEYllsWzCXdcc5x6W2UGas58cly8oVNWS%2F0LQyAsjGUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhK47h4kt3T71P5EyrcA%2FF1C6zlesaeD0pUjgLSiSyd6jJp5SICOqQLNCekDq2rm3ZcBR1T10E%2FjYNZ%2FZUv78YNSNyRiUgkPpSYt%2BGH9TUXmJnAxJhEQS%2BIh1jDYtuHLbOrr6qKryHjujqujD0b2bU%2B2XX%2FF3wGqbbvTz0gUFqNwkgIDTMfee9zheOQDX%2F0gIjGLoueEDdfawzx5cOXr3HRyOjR1bLw5zhFHFDtgM6yBfmdtwd%2BQUe9M9xJ4YQjY%2BIZpzOsn0JQx2th2iBdzuhj7%2F9i0bPjJZ6o%2FLf53MNQq9PUAgzkDzflufX7necOWJW0Dgpm%2BJ67XR19yjzixPMB0qbKFbbIy4Pl%2Bt3O%2FHg12SZn0wJnetf%2BMwkUp24JkERNiMIYA1DqlYInsnypunne08q7vF%2Br5FOfEhbD1CUuqfMu0kXz8J7U8sRvm9HL9r3FyIrZ8Ta8RNGJ8EGf9AX4RVMAnJ9ezb2wYgbCsqMVGEztwLF7xCUy%2B3oWTEuQc5sXsWzzz3uRW9Tkp4hDS4bHIt25oqKBHQ%2Be8VmhsXUMxA5kd2Kj1XgkYL2Sad4fcvwgVPDZQmnJvbnN8U2W8X%2BPyT8LpSIeUA%2BnlktghIK72cR4%2Bjg9XSY7mOx%2BpUWspEkTq8vETNS2mJFYMLrH5b0GOqUBR2LqmhT%2BsC7siQvyLEzhnbSBdtxPvu0lu4%2BecgazGxTyc1oXb9SJQpv%2FvecCVREQ7hL%2FG5DTu5i81%2BLYkJ%2BJgcY%2BAxo6XJRf%2FfbPuwYRNibyi4AvbddxtGQ8iVzd0tBk%2FaumvjMmvzOy%2Fce42zq906WLHZJDzpcYKJ5%2B4t3Wo%2FVpfyhw6FyoU7%2BGvCNqHVIrHgcug5CO8ti0hxVS%2FnQ%2F7TJbut9C&X-Amz-Signature=9e6688fa478c47c1fe4f5680cc6a15f169b76f1ef65b8a9c4eab95706b882eed&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDLA3M6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYizlUwmAjS8ixWpL9%2FzrpcoQTZWq%2FqKic0k1cRf3MuwIgLEYllsWzCXdcc5x6W2UGas58cly8oVNWS%2F0LQyAsjGUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhK47h4kt3T71P5EyrcA%2FF1C6zlesaeD0pUjgLSiSyd6jJp5SICOqQLNCekDq2rm3ZcBR1T10E%2FjYNZ%2FZUv78YNSNyRiUgkPpSYt%2BGH9TUXmJnAxJhEQS%2BIh1jDYtuHLbOrr6qKryHjujqujD0b2bU%2B2XX%2FF3wGqbbvTz0gUFqNwkgIDTMfee9zheOQDX%2F0gIjGLoueEDdfawzx5cOXr3HRyOjR1bLw5zhFHFDtgM6yBfmdtwd%2BQUe9M9xJ4YQjY%2BIZpzOsn0JQx2th2iBdzuhj7%2F9i0bPjJZ6o%2FLf53MNQq9PUAgzkDzflufX7necOWJW0Dgpm%2BJ67XR19yjzixPMB0qbKFbbIy4Pl%2Bt3O%2FHg12SZn0wJnetf%2BMwkUp24JkERNiMIYA1DqlYInsnypunne08q7vF%2Br5FOfEhbD1CUuqfMu0kXz8J7U8sRvm9HL9r3FyIrZ8Ta8RNGJ8EGf9AX4RVMAnJ9ezb2wYgbCsqMVGEztwLF7xCUy%2B3oWTEuQc5sXsWzzz3uRW9Tkp4hDS4bHIt25oqKBHQ%2Be8VmhsXUMxA5kd2Kj1XgkYL2Sad4fcvwgVPDZQmnJvbnN8U2W8X%2BPyT8LpSIeUA%2BnlktghIK72cR4%2Bjg9XSY7mOx%2BpUWspEkTq8vETNS2mJFYMLrH5b0GOqUBR2LqmhT%2BsC7siQvyLEzhnbSBdtxPvu0lu4%2BecgazGxTyc1oXb9SJQpv%2FvecCVREQ7hL%2FG5DTu5i81%2BLYkJ%2BJgcY%2BAxo6XJRf%2FfbPuwYRNibyi4AvbddxtGQ8iVzd0tBk%2FaumvjMmvzOy%2Fce42zq906WLHZJDzpcYKJ5%2B4t3Wo%2FVpfyhw6FyoU7%2BGvCNqHVIrHgcug5CO8ti0hxVS%2FnQ%2F7TJbut9C&X-Amz-Signature=f6e19ac41f6a1eb5a807f11d18b995267e5ea6aed845b17fd05568bc6ce6f8fe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDLA3M6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYizlUwmAjS8ixWpL9%2FzrpcoQTZWq%2FqKic0k1cRf3MuwIgLEYllsWzCXdcc5x6W2UGas58cly8oVNWS%2F0LQyAsjGUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhK47h4kt3T71P5EyrcA%2FF1C6zlesaeD0pUjgLSiSyd6jJp5SICOqQLNCekDq2rm3ZcBR1T10E%2FjYNZ%2FZUv78YNSNyRiUgkPpSYt%2BGH9TUXmJnAxJhEQS%2BIh1jDYtuHLbOrr6qKryHjujqujD0b2bU%2B2XX%2FF3wGqbbvTz0gUFqNwkgIDTMfee9zheOQDX%2F0gIjGLoueEDdfawzx5cOXr3HRyOjR1bLw5zhFHFDtgM6yBfmdtwd%2BQUe9M9xJ4YQjY%2BIZpzOsn0JQx2th2iBdzuhj7%2F9i0bPjJZ6o%2FLf53MNQq9PUAgzkDzflufX7necOWJW0Dgpm%2BJ67XR19yjzixPMB0qbKFbbIy4Pl%2Bt3O%2FHg12SZn0wJnetf%2BMwkUp24JkERNiMIYA1DqlYInsnypunne08q7vF%2Br5FOfEhbD1CUuqfMu0kXz8J7U8sRvm9HL9r3FyIrZ8Ta8RNGJ8EGf9AX4RVMAnJ9ezb2wYgbCsqMVGEztwLF7xCUy%2B3oWTEuQc5sXsWzzz3uRW9Tkp4hDS4bHIt25oqKBHQ%2Be8VmhsXUMxA5kd2Kj1XgkYL2Sad4fcvwgVPDZQmnJvbnN8U2W8X%2BPyT8LpSIeUA%2BnlktghIK72cR4%2Bjg9XSY7mOx%2BpUWspEkTq8vETNS2mJFYMLrH5b0GOqUBR2LqmhT%2BsC7siQvyLEzhnbSBdtxPvu0lu4%2BecgazGxTyc1oXb9SJQpv%2FvecCVREQ7hL%2FG5DTu5i81%2BLYkJ%2BJgcY%2BAxo6XJRf%2FfbPuwYRNibyi4AvbddxtGQ8iVzd0tBk%2FaumvjMmvzOy%2Fce42zq906WLHZJDzpcYKJ5%2B4t3Wo%2FVpfyhw6FyoU7%2BGvCNqHVIrHgcug5CO8ti0hxVS%2FnQ%2F7TJbut9C&X-Amz-Signature=aec63808421d39f1a76b1de9ea09b488e3f46bce9ee9653bbc45f94878b0f0e9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPDLA3M6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYizlUwmAjS8ixWpL9%2FzrpcoQTZWq%2FqKic0k1cRf3MuwIgLEYllsWzCXdcc5x6W2UGas58cly8oVNWS%2F0LQyAsjGUqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhK47h4kt3T71P5EyrcA%2FF1C6zlesaeD0pUjgLSiSyd6jJp5SICOqQLNCekDq2rm3ZcBR1T10E%2FjYNZ%2FZUv78YNSNyRiUgkPpSYt%2BGH9TUXmJnAxJhEQS%2BIh1jDYtuHLbOrr6qKryHjujqujD0b2bU%2B2XX%2FF3wGqbbvTz0gUFqNwkgIDTMfee9zheOQDX%2F0gIjGLoueEDdfawzx5cOXr3HRyOjR1bLw5zhFHFDtgM6yBfmdtwd%2BQUe9M9xJ4YQjY%2BIZpzOsn0JQx2th2iBdzuhj7%2F9i0bPjJZ6o%2FLf53MNQq9PUAgzkDzflufX7necOWJW0Dgpm%2BJ67XR19yjzixPMB0qbKFbbIy4Pl%2Bt3O%2FHg12SZn0wJnetf%2BMwkUp24JkERNiMIYA1DqlYInsnypunne08q7vF%2Br5FOfEhbD1CUuqfMu0kXz8J7U8sRvm9HL9r3FyIrZ8Ta8RNGJ8EGf9AX4RVMAnJ9ezb2wYgbCsqMVGEztwLF7xCUy%2B3oWTEuQc5sXsWzzz3uRW9Tkp4hDS4bHIt25oqKBHQ%2Be8VmhsXUMxA5kd2Kj1XgkYL2Sad4fcvwgVPDZQmnJvbnN8U2W8X%2BPyT8LpSIeUA%2BnlktghIK72cR4%2Bjg9XSY7mOx%2BpUWspEkTq8vETNS2mJFYMLrH5b0GOqUBR2LqmhT%2BsC7siQvyLEzhnbSBdtxPvu0lu4%2BecgazGxTyc1oXb9SJQpv%2FvecCVREQ7hL%2FG5DTu5i81%2BLYkJ%2BJgcY%2BAxo6XJRf%2FfbPuwYRNibyi4AvbddxtGQ8iVzd0tBk%2FaumvjMmvzOy%2Fce42zq906WLHZJDzpcYKJ5%2B4t3Wo%2FVpfyhw6FyoU7%2BGvCNqHVIrHgcug5CO8ti0hxVS%2FnQ%2F7TJbut9C&X-Amz-Signature=14c4b7abd59f1db9b5b13bd6dc91412e56b1c1b35eb3eea0f8f0e7766e9eebf1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.

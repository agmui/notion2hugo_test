---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFPFLAK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGjdQdDf2tV90a08Bzvi%2BOea0BpvY1sn72QzUNxx4vGAAiBNSmos5mu%2B5kc0bRBEIRUHauvNNm5zDmlqeLZdGA0nriqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCDLf2djou%2F7W6DY1KtwDJGg82AZ5mM%2Bh1Psl0X9JvQFFyBQnoxjMgFH9ne7tdBbUY4lvHPtulhcVA5HXi2Ye8QdjFtJMPxWmCGY7QaNZTtXkN7CzazpFKU94FahyIf9MZbxkDPX9iI%2FGdTMvZSEDZ3cWyHUXJgN3X29bKLQdr2Ld4KBLLCOXr8W2Orz4YNj0lQ3Ee7i1j6UQLDiMn4mEUVFZ%2BRmjLeVa8tnz83OlK2KmUozsBpOQDh3yAeDxmkc1821BIyvvwoYKd538kKcpPINJQPwsY67jqwqD54cik8JwE4OnF0qCxc%2Fd%2BCcx%2BQPBqjDeN%2Bw4Y0pxydaYBowwJoY%2FcbdTsFyjzM5%2FofDQlekRhpPr04ex4SxUCKC5ebW%2BnPiF5E6nkL%2Fom4HmVjxvn1ZksjVS%2F6NGR98YxU%2FjIM8sIia6XMIKrKTOO6XAHSz0Sz%2BlC%2Fllit4FMDAVoNnO7lsPBhBuhxzvmhuPuK4rPnGkBi7XB2SHglTaeadwVTrMgFVArx9LJc%2Faa1LwdYrB1FCI8HFLoDPFr8VNrz%2F%2BjaADbo2fqyfOlyypmmUBpfkV%2BJ5FdRH3%2BsGZeo%2B5V6kEWkhlzim1WlxlzQm50h%2FCJRNpOmSTAiyO6l8NfgAaB1wGTFE6pCBH2EGOsF4wrpumvwY6pgE6n80Ztlnzu4ZkWlxpJw%2FZ3%2FBP9CsXN69PWPTdto5fzyg4B1BAOxHYJSUlNUkP0tUdXuFvdLiXLDaJYVlfEnhKNmj0FuKK9mItH5e73Od2zzAzIMsVG%2FP3RrC8mQHrvaudWyM3OqJStP7J3lXiyUmzEZDperhQwHSJXOD7TglQqnGdtuFQmG1q0m%2Bas%2Fql48Fh4rDIwMIkcC1uQI9Msk4vNg8%2BGMKh&X-Amz-Signature=e2f0c70f3db8feee8b5c056dfc67970956081c33f24ec2cf03ce280ea0292069&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFPFLAK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGjdQdDf2tV90a08Bzvi%2BOea0BpvY1sn72QzUNxx4vGAAiBNSmos5mu%2B5kc0bRBEIRUHauvNNm5zDmlqeLZdGA0nriqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCDLf2djou%2F7W6DY1KtwDJGg82AZ5mM%2Bh1Psl0X9JvQFFyBQnoxjMgFH9ne7tdBbUY4lvHPtulhcVA5HXi2Ye8QdjFtJMPxWmCGY7QaNZTtXkN7CzazpFKU94FahyIf9MZbxkDPX9iI%2FGdTMvZSEDZ3cWyHUXJgN3X29bKLQdr2Ld4KBLLCOXr8W2Orz4YNj0lQ3Ee7i1j6UQLDiMn4mEUVFZ%2BRmjLeVa8tnz83OlK2KmUozsBpOQDh3yAeDxmkc1821BIyvvwoYKd538kKcpPINJQPwsY67jqwqD54cik8JwE4OnF0qCxc%2Fd%2BCcx%2BQPBqjDeN%2Bw4Y0pxydaYBowwJoY%2FcbdTsFyjzM5%2FofDQlekRhpPr04ex4SxUCKC5ebW%2BnPiF5E6nkL%2Fom4HmVjxvn1ZksjVS%2F6NGR98YxU%2FjIM8sIia6XMIKrKTOO6XAHSz0Sz%2BlC%2Fllit4FMDAVoNnO7lsPBhBuhxzvmhuPuK4rPnGkBi7XB2SHglTaeadwVTrMgFVArx9LJc%2Faa1LwdYrB1FCI8HFLoDPFr8VNrz%2F%2BjaADbo2fqyfOlyypmmUBpfkV%2BJ5FdRH3%2BsGZeo%2B5V6kEWkhlzim1WlxlzQm50h%2FCJRNpOmSTAiyO6l8NfgAaB1wGTFE6pCBH2EGOsF4wrpumvwY6pgE6n80Ztlnzu4ZkWlxpJw%2FZ3%2FBP9CsXN69PWPTdto5fzyg4B1BAOxHYJSUlNUkP0tUdXuFvdLiXLDaJYVlfEnhKNmj0FuKK9mItH5e73Od2zzAzIMsVG%2FP3RrC8mQHrvaudWyM3OqJStP7J3lXiyUmzEZDperhQwHSJXOD7TglQqnGdtuFQmG1q0m%2Bas%2Fql48Fh4rDIwMIkcC1uQI9Msk4vNg8%2BGMKh&X-Amz-Signature=0fbfbdaa0ceee3b946865c7f1a524dd27aee306e8cdfad2caac3267dc2d2d283&X-Amz-SignedHeaders=host&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYFPFLAK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T190156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGjdQdDf2tV90a08Bzvi%2BOea0BpvY1sn72QzUNxx4vGAAiBNSmos5mu%2B5kc0bRBEIRUHauvNNm5zDmlqeLZdGA0nriqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCDLf2djou%2F7W6DY1KtwDJGg82AZ5mM%2Bh1Psl0X9JvQFFyBQnoxjMgFH9ne7tdBbUY4lvHPtulhcVA5HXi2Ye8QdjFtJMPxWmCGY7QaNZTtXkN7CzazpFKU94FahyIf9MZbxkDPX9iI%2FGdTMvZSEDZ3cWyHUXJgN3X29bKLQdr2Ld4KBLLCOXr8W2Orz4YNj0lQ3Ee7i1j6UQLDiMn4mEUVFZ%2BRmjLeVa8tnz83OlK2KmUozsBpOQDh3yAeDxmkc1821BIyvvwoYKd538kKcpPINJQPwsY67jqwqD54cik8JwE4OnF0qCxc%2Fd%2BCcx%2BQPBqjDeN%2Bw4Y0pxydaYBowwJoY%2FcbdTsFyjzM5%2FofDQlekRhpPr04ex4SxUCKC5ebW%2BnPiF5E6nkL%2Fom4HmVjxvn1ZksjVS%2F6NGR98YxU%2FjIM8sIia6XMIKrKTOO6XAHSz0Sz%2BlC%2Fllit4FMDAVoNnO7lsPBhBuhxzvmhuPuK4rPnGkBi7XB2SHglTaeadwVTrMgFVArx9LJc%2Faa1LwdYrB1FCI8HFLoDPFr8VNrz%2F%2BjaADbo2fqyfOlyypmmUBpfkV%2BJ5FdRH3%2BsGZeo%2B5V6kEWkhlzim1WlxlzQm50h%2FCJRNpOmSTAiyO6l8NfgAaB1wGTFE6pCBH2EGOsF4wrpumvwY6pgE6n80Ztlnzu4ZkWlxpJw%2FZ3%2FBP9CsXN69PWPTdto5fzyg4B1BAOxHYJSUlNUkP0tUdXuFvdLiXLDaJYVlfEnhKNmj0FuKK9mItH5e73Od2zzAzIMsVG%2FP3RrC8mQHrvaudWyM3OqJStP7J3lXiyUmzEZDperhQwHSJXOD7TglQqnGdtuFQmG1q0m%2Bas%2Fql48Fh4rDIwMIkcC1uQI9Msk4vNg8%2BGMKh&X-Amz-Signature=e89ba754631de9533b29904d32421427220e12afe3fcd14ba2d2cc9d1f7dbfe1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

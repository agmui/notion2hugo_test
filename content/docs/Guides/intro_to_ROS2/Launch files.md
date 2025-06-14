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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOZGRWI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDK%2FRlYhJ7Bb9ALwAhrqqAXPpIjZeiFNlSryQuaRAtPCQIgL19TIJXNPe9oe2XRDBHNF0lZHbLHDBLSh9trh54jz4Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCP%2BXkV3rCEAxgt2jCrcAyQZB1SQuln8u8%2BsGfVZGvSr5zC%2Bc4qdkwVO78bpSlcm5VtDObtvrQn%2BlaQ6%2FkAGdyTBSUt1KIPsb8vQ99hSiKpCQOw1qHw3JmsXFvL6a07VBhqo3A1n2rTHjkXlX2TPHbEQsrE493Zd1VmCtqLhqCWX9H4VUXX0BelUIIQBW9eJKjayqBCLCGtxXzpjmLQdTr5Shb%2B3PaENhp4MbqxKJa%2Fbb0IhX2CPKUZmdBf%2FAfY%2BCFknJAL9kpMnAcGnAILhLJE%2BLpCRkgI8MQ025Q849Ol%2BRkWlq168Deh3io3sXjizeOF%2B7woJm2D13foHGYnXScmnzjOCkaWR9E73t3hgWNpPy6SduMkM3ntNeuGfiOyutoy%2Fva2XeWqT2Cv4yjDBkBCU1lCd1qRiDvTznnJC3wfgNO9h9biNY8Zvdy2KaWhSiqiT4yH7gFA8bdlLqCRjEe1JRmlj%2BcSN1Z943pWe8t79Tjiwau5t3AJI5wDis8nOoQjM9fjceJ8ZPrfbaWeH1canvsc3m5VrRDGrNJtACiAuVGQSf4%2B8KiN7FsuGHiNdim1XdXTDb7LSQtv%2B%2FMZhe8XML6rhgRqqXmvgM5f2GTy3%2FGC19Bb1NcIGWK8o0bd7r9N0xrb7kDMBUQSjMMnBtcIGOqUBO2vE5FswsYBWblYW4zOgwy0UFSOwvR6pN%2BJdkFkThLrWzh3eBg0JTmrjMvhiwGN%2BWqlBQJQASY9Nfne3zernJWAKL1xHAvG0RSW2TN167zgX1b2eUrLrmNQKP8Q5OUXyAYE8WGSzJnZ1j1ceUYHgfA3wLc40ikcUjov3KABeYECcZunDctAaDIli0jAEo9hKJJYeYI86VKeOpFhNQU%2BpYuQ1cQtf&X-Amz-Signature=cf1bb68902892bf78d1c84df91c4fd7293ade1eea1c6b9c26d490f357f81d33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOZGRWI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDK%2FRlYhJ7Bb9ALwAhrqqAXPpIjZeiFNlSryQuaRAtPCQIgL19TIJXNPe9oe2XRDBHNF0lZHbLHDBLSh9trh54jz4Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCP%2BXkV3rCEAxgt2jCrcAyQZB1SQuln8u8%2BsGfVZGvSr5zC%2Bc4qdkwVO78bpSlcm5VtDObtvrQn%2BlaQ6%2FkAGdyTBSUt1KIPsb8vQ99hSiKpCQOw1qHw3JmsXFvL6a07VBhqo3A1n2rTHjkXlX2TPHbEQsrE493Zd1VmCtqLhqCWX9H4VUXX0BelUIIQBW9eJKjayqBCLCGtxXzpjmLQdTr5Shb%2B3PaENhp4MbqxKJa%2Fbb0IhX2CPKUZmdBf%2FAfY%2BCFknJAL9kpMnAcGnAILhLJE%2BLpCRkgI8MQ025Q849Ol%2BRkWlq168Deh3io3sXjizeOF%2B7woJm2D13foHGYnXScmnzjOCkaWR9E73t3hgWNpPy6SduMkM3ntNeuGfiOyutoy%2Fva2XeWqT2Cv4yjDBkBCU1lCd1qRiDvTznnJC3wfgNO9h9biNY8Zvdy2KaWhSiqiT4yH7gFA8bdlLqCRjEe1JRmlj%2BcSN1Z943pWe8t79Tjiwau5t3AJI5wDis8nOoQjM9fjceJ8ZPrfbaWeH1canvsc3m5VrRDGrNJtACiAuVGQSf4%2B8KiN7FsuGHiNdim1XdXTDb7LSQtv%2B%2FMZhe8XML6rhgRqqXmvgM5f2GTy3%2FGC19Bb1NcIGWK8o0bd7r9N0xrb7kDMBUQSjMMnBtcIGOqUBO2vE5FswsYBWblYW4zOgwy0UFSOwvR6pN%2BJdkFkThLrWzh3eBg0JTmrjMvhiwGN%2BWqlBQJQASY9Nfne3zernJWAKL1xHAvG0RSW2TN167zgX1b2eUrLrmNQKP8Q5OUXyAYE8WGSzJnZ1j1ceUYHgfA3wLc40ikcUjov3KABeYECcZunDctAaDIli0jAEo9hKJJYeYI86VKeOpFhNQU%2BpYuQ1cQtf&X-Amz-Signature=6df3ca2f99d1195c0067b6a33a38a252e522df5b3b92023b1516103df8f5d218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYOZGRWI%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T131840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDK%2FRlYhJ7Bb9ALwAhrqqAXPpIjZeiFNlSryQuaRAtPCQIgL19TIJXNPe9oe2XRDBHNF0lZHbLHDBLSh9trh54jz4Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDCP%2BXkV3rCEAxgt2jCrcAyQZB1SQuln8u8%2BsGfVZGvSr5zC%2Bc4qdkwVO78bpSlcm5VtDObtvrQn%2BlaQ6%2FkAGdyTBSUt1KIPsb8vQ99hSiKpCQOw1qHw3JmsXFvL6a07VBhqo3A1n2rTHjkXlX2TPHbEQsrE493Zd1VmCtqLhqCWX9H4VUXX0BelUIIQBW9eJKjayqBCLCGtxXzpjmLQdTr5Shb%2B3PaENhp4MbqxKJa%2Fbb0IhX2CPKUZmdBf%2FAfY%2BCFknJAL9kpMnAcGnAILhLJE%2BLpCRkgI8MQ025Q849Ol%2BRkWlq168Deh3io3sXjizeOF%2B7woJm2D13foHGYnXScmnzjOCkaWR9E73t3hgWNpPy6SduMkM3ntNeuGfiOyutoy%2Fva2XeWqT2Cv4yjDBkBCU1lCd1qRiDvTznnJC3wfgNO9h9biNY8Zvdy2KaWhSiqiT4yH7gFA8bdlLqCRjEe1JRmlj%2BcSN1Z943pWe8t79Tjiwau5t3AJI5wDis8nOoQjM9fjceJ8ZPrfbaWeH1canvsc3m5VrRDGrNJtACiAuVGQSf4%2B8KiN7FsuGHiNdim1XdXTDb7LSQtv%2B%2FMZhe8XML6rhgRqqXmvgM5f2GTy3%2FGC19Bb1NcIGWK8o0bd7r9N0xrb7kDMBUQSjMMnBtcIGOqUBO2vE5FswsYBWblYW4zOgwy0UFSOwvR6pN%2BJdkFkThLrWzh3eBg0JTmrjMvhiwGN%2BWqlBQJQASY9Nfne3zernJWAKL1xHAvG0RSW2TN167zgX1b2eUrLrmNQKP8Q5OUXyAYE8WGSzJnZ1j1ceUYHgfA3wLc40ikcUjov3KABeYECcZunDctAaDIli0jAEo9hKJJYeYI86VKeOpFhNQU%2BpYuQ1cQtf&X-Amz-Signature=03a144f993ef20f8d14b87143810e82b6a5f9c28708f3c600a6aabc466545a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

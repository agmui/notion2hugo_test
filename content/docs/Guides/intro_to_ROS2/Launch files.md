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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUK75S3C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpTu2KnsATBlcOMB6SX2wBMFQcNse9IFA2Okrc3NqMpgIgHw1ky7bpMOwGj6m8xrSTIYhXBTys1BtX3%2BTxLZPZqvYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOzvnPsXx0p4WBzGCrcA2yZ%2FzW8opgAPBJyf96EdO6YIR%2BdZDPg5zo8iba%2F1aP%2FZ7hqi6sEDqks5JmK7pS6Ut76gmnHt5odaQyhIqsYWtI3Zowo8lepjTk3R9ZoF9GIVJuq0bcGcbbv1z6yLIZLbrKSMjB%2BEARgvocdkLDYj3b%2F538wFJYTPg%2B1Y3Ku4fMCdndCJ0Wsd%2BBg6RTlSLree7xSlQBV9o9eRrf0sYMfqqkZ32joIcw8AOlvx4FWztUAj5Ir%2BaC0nS830Rwjp8GIoXIn8fCGdzYGyUnttw%2Fa%2F0dtHEJy7tl0JDdW64VWmK39cSF7qcGEGdl6SDQHOWie5swyZNOg3AltzPFAfYIz%2FBBpmsc1t3k6QSNCXffVHRJ2x0eYHX5iNawVnuqPJQJjTqeoR9%2BtxouO3vWEdmTnfsY6EJqdbo2IWvhe2dLs9J7IFxrAM9Uzv3peb3bgbQ4vLTubJa3dJMijfYxrqkTcToZUk3zYzKTkG6Z0xiqjp8NjCR5%2B018oyjasYbR1kyCk7ZXY5oC1L2GRFLvY2ve4iPQI2dY7%2FsHM08F5NLKXmbfI1hZpo1i7p6dWV4%2FJIujdyySrIIrCH0UjbOPHhY2Gjf7vrY0Nq5TZTnKD5%2FUVNUxQZz1EATEmDHNNKa8FMPb068EGOqUBlKV5OI6Eoi9044L6qGf6XAtlND0AtI8HRDLcgKw4Hsrj2xnFH%2FHX6VVxegYl%2F9ZNKb4t7m4jVUtAy%2FpHj2VAbP0HRMk0ZiQuRjPskeMLtgW7zsO5kZ2GwU9gwHnSx5N4aGW0yQeUE%2FTiza1jNsJP%2FxHXetVXTYK7HvRQyE1ahqn2NW8cEF%2Fw6vRigq%2BIZUsar6CdUulIa5LnBGrVgUY%2BdWUPJaTK&X-Amz-Signature=7c467ae94aacb4d57dfd24bfd2c7bf9e6b44d98ffd6d116e73a0f7c71f07045c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUK75S3C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpTu2KnsATBlcOMB6SX2wBMFQcNse9IFA2Okrc3NqMpgIgHw1ky7bpMOwGj6m8xrSTIYhXBTys1BtX3%2BTxLZPZqvYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOzvnPsXx0p4WBzGCrcA2yZ%2FzW8opgAPBJyf96EdO6YIR%2BdZDPg5zo8iba%2F1aP%2FZ7hqi6sEDqks5JmK7pS6Ut76gmnHt5odaQyhIqsYWtI3Zowo8lepjTk3R9ZoF9GIVJuq0bcGcbbv1z6yLIZLbrKSMjB%2BEARgvocdkLDYj3b%2F538wFJYTPg%2B1Y3Ku4fMCdndCJ0Wsd%2BBg6RTlSLree7xSlQBV9o9eRrf0sYMfqqkZ32joIcw8AOlvx4FWztUAj5Ir%2BaC0nS830Rwjp8GIoXIn8fCGdzYGyUnttw%2Fa%2F0dtHEJy7tl0JDdW64VWmK39cSF7qcGEGdl6SDQHOWie5swyZNOg3AltzPFAfYIz%2FBBpmsc1t3k6QSNCXffVHRJ2x0eYHX5iNawVnuqPJQJjTqeoR9%2BtxouO3vWEdmTnfsY6EJqdbo2IWvhe2dLs9J7IFxrAM9Uzv3peb3bgbQ4vLTubJa3dJMijfYxrqkTcToZUk3zYzKTkG6Z0xiqjp8NjCR5%2B018oyjasYbR1kyCk7ZXY5oC1L2GRFLvY2ve4iPQI2dY7%2FsHM08F5NLKXmbfI1hZpo1i7p6dWV4%2FJIujdyySrIIrCH0UjbOPHhY2Gjf7vrY0Nq5TZTnKD5%2FUVNUxQZz1EATEmDHNNKa8FMPb068EGOqUBlKV5OI6Eoi9044L6qGf6XAtlND0AtI8HRDLcgKw4Hsrj2xnFH%2FHX6VVxegYl%2F9ZNKb4t7m4jVUtAy%2FpHj2VAbP0HRMk0ZiQuRjPskeMLtgW7zsO5kZ2GwU9gwHnSx5N4aGW0yQeUE%2FTiza1jNsJP%2FxHXetVXTYK7HvRQyE1ahqn2NW8cEF%2Fw6vRigq%2BIZUsar6CdUulIa5LnBGrVgUY%2BdWUPJaTK&X-Amz-Signature=6d2c2bf074ab3384aa005baa0ee3ad11212543e78350879edb0baa102bf6b674&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUK75S3C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpTu2KnsATBlcOMB6SX2wBMFQcNse9IFA2Okrc3NqMpgIgHw1ky7bpMOwGj6m8xrSTIYhXBTys1BtX3%2BTxLZPZqvYqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOzvnPsXx0p4WBzGCrcA2yZ%2FzW8opgAPBJyf96EdO6YIR%2BdZDPg5zo8iba%2F1aP%2FZ7hqi6sEDqks5JmK7pS6Ut76gmnHt5odaQyhIqsYWtI3Zowo8lepjTk3R9ZoF9GIVJuq0bcGcbbv1z6yLIZLbrKSMjB%2BEARgvocdkLDYj3b%2F538wFJYTPg%2B1Y3Ku4fMCdndCJ0Wsd%2BBg6RTlSLree7xSlQBV9o9eRrf0sYMfqqkZ32joIcw8AOlvx4FWztUAj5Ir%2BaC0nS830Rwjp8GIoXIn8fCGdzYGyUnttw%2Fa%2F0dtHEJy7tl0JDdW64VWmK39cSF7qcGEGdl6SDQHOWie5swyZNOg3AltzPFAfYIz%2FBBpmsc1t3k6QSNCXffVHRJ2x0eYHX5iNawVnuqPJQJjTqeoR9%2BtxouO3vWEdmTnfsY6EJqdbo2IWvhe2dLs9J7IFxrAM9Uzv3peb3bgbQ4vLTubJa3dJMijfYxrqkTcToZUk3zYzKTkG6Z0xiqjp8NjCR5%2B018oyjasYbR1kyCk7ZXY5oC1L2GRFLvY2ve4iPQI2dY7%2FsHM08F5NLKXmbfI1hZpo1i7p6dWV4%2FJIujdyySrIIrCH0UjbOPHhY2Gjf7vrY0Nq5TZTnKD5%2FUVNUxQZz1EATEmDHNNKa8FMPb068EGOqUBlKV5OI6Eoi9044L6qGf6XAtlND0AtI8HRDLcgKw4Hsrj2xnFH%2FHX6VVxegYl%2F9ZNKb4t7m4jVUtAy%2FpHj2VAbP0HRMk0ZiQuRjPskeMLtgW7zsO5kZ2GwU9gwHnSx5N4aGW0yQeUE%2FTiza1jNsJP%2FxHXetVXTYK7HvRQyE1ahqn2NW8cEF%2Fw6vRigq%2BIZUsar6CdUulIa5LnBGrVgUY%2BdWUPJaTK&X-Amz-Signature=0dc9b595d6f6188d7669e1ac183aef7dca6f9d22347bb40311d5b11c1e569a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

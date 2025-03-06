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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EYUOPDQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgDE6wIbpoimh70amMGHAuq4GA6%2FsaMFsM4xcVevMHAQIgU5aTsIQgsD%2FySczaD0E6UYRqFi0qTm56MvubvwaG45cq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDF1kga%2BIekYms7VfbircA8rj4JbCydmxJY3XhxHdThq%2B5qFj9vokmZG4%2FNY1iph5JRNUhjIK5JlUv%2FSCPwil4%2FY3v2o8rF4%2Fvvl4mIFmsPchcwdZpq2diswB5eAhSOXuk2JfZuVArbg60xS9c%2BE9LfuPSLnSC8JNpik99XaaF2VB39Q9bPgvZXeF3k%2FpgP8MrtAwQVQ3xJbYQNzRebk%2FMdq5DXQNaqeS1uY4xm8obOrt%2Bz4zTiSIKAOeE8Ur4SoDCPzw0pLsW47Cs0qOMbAKdg9rmV3HYT8dXOoz%2BZOIlXewDUcCXXOZIDDuh%2BsKXhPOJyCurs1iP8KTvATORMLnpi2O4xGpsBAFtYKLhV6jZEnefPEvP%2Fj3bz1GeZdSNXgbAy3GrhspVK3Z89KqvUvwvN4G7FdlH9gOz858xcDuZ722Hti1PWiBZST1m9hehDXyc9Sgk4LMoYxZwVVl7v80s8gfcEigL7t6l679H3txvudA5mlrraZwk%2B20Xt%2FplCXh1s5FSny4m9K84JC%2FjMPcjQeZT7eEqYI8LzOxi8OWbUmYgIXZpdaloKRItJF5omA5uvXi%2BXDuuxuCIBs8CR4ey2DrFVINJGYDll5D9KPdO7zFAmDFJTWFWaPsz2vzAXdzsDLd2yvAt%2FNlarr3MO3Tpb4GOqUBKCl0O55%2FxqgfG3k72WfC26LERMv5WWlmViopaeXJkWt53FioqBQeAmHCxWvlyPL%2FtuCeGBKEsBUJKw1%2F39bsXQJXKWnU2gWDFikkl7wOfHsgln4V6cYsJAsj6lUj5Ojn1p7oIXwDvcH0m4Mtz3%2Bsty9iTfr%2Fa43jvW1v1imxooVF7%2FhEdRKUDAUitXiOMFmxGOSzzWcjgcL%2FNByi8Zz2blqE6Nxi&X-Amz-Signature=836c45dc29eb7187e9385e1da4f388c77e0467b98db51717188376b0d21a8f8e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EYUOPDQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgDE6wIbpoimh70amMGHAuq4GA6%2FsaMFsM4xcVevMHAQIgU5aTsIQgsD%2FySczaD0E6UYRqFi0qTm56MvubvwaG45cq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDF1kga%2BIekYms7VfbircA8rj4JbCydmxJY3XhxHdThq%2B5qFj9vokmZG4%2FNY1iph5JRNUhjIK5JlUv%2FSCPwil4%2FY3v2o8rF4%2Fvvl4mIFmsPchcwdZpq2diswB5eAhSOXuk2JfZuVArbg60xS9c%2BE9LfuPSLnSC8JNpik99XaaF2VB39Q9bPgvZXeF3k%2FpgP8MrtAwQVQ3xJbYQNzRebk%2FMdq5DXQNaqeS1uY4xm8obOrt%2Bz4zTiSIKAOeE8Ur4SoDCPzw0pLsW47Cs0qOMbAKdg9rmV3HYT8dXOoz%2BZOIlXewDUcCXXOZIDDuh%2BsKXhPOJyCurs1iP8KTvATORMLnpi2O4xGpsBAFtYKLhV6jZEnefPEvP%2Fj3bz1GeZdSNXgbAy3GrhspVK3Z89KqvUvwvN4G7FdlH9gOz858xcDuZ722Hti1PWiBZST1m9hehDXyc9Sgk4LMoYxZwVVl7v80s8gfcEigL7t6l679H3txvudA5mlrraZwk%2B20Xt%2FplCXh1s5FSny4m9K84JC%2FjMPcjQeZT7eEqYI8LzOxi8OWbUmYgIXZpdaloKRItJF5omA5uvXi%2BXDuuxuCIBs8CR4ey2DrFVINJGYDll5D9KPdO7zFAmDFJTWFWaPsz2vzAXdzsDLd2yvAt%2FNlarr3MO3Tpb4GOqUBKCl0O55%2FxqgfG3k72WfC26LERMv5WWlmViopaeXJkWt53FioqBQeAmHCxWvlyPL%2FtuCeGBKEsBUJKw1%2F39bsXQJXKWnU2gWDFikkl7wOfHsgln4V6cYsJAsj6lUj5Ojn1p7oIXwDvcH0m4Mtz3%2Bsty9iTfr%2Fa43jvW1v1imxooVF7%2FhEdRKUDAUitXiOMFmxGOSzzWcjgcL%2FNByi8Zz2blqE6Nxi&X-Amz-Signature=0137fd2f706089dd01273cb01180dd97ddcd896de6d08fd8bc254fa647745b44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EYUOPDQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgDE6wIbpoimh70amMGHAuq4GA6%2FsaMFsM4xcVevMHAQIgU5aTsIQgsD%2FySczaD0E6UYRqFi0qTm56MvubvwaG45cq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDF1kga%2BIekYms7VfbircA8rj4JbCydmxJY3XhxHdThq%2B5qFj9vokmZG4%2FNY1iph5JRNUhjIK5JlUv%2FSCPwil4%2FY3v2o8rF4%2Fvvl4mIFmsPchcwdZpq2diswB5eAhSOXuk2JfZuVArbg60xS9c%2BE9LfuPSLnSC8JNpik99XaaF2VB39Q9bPgvZXeF3k%2FpgP8MrtAwQVQ3xJbYQNzRebk%2FMdq5DXQNaqeS1uY4xm8obOrt%2Bz4zTiSIKAOeE8Ur4SoDCPzw0pLsW47Cs0qOMbAKdg9rmV3HYT8dXOoz%2BZOIlXewDUcCXXOZIDDuh%2BsKXhPOJyCurs1iP8KTvATORMLnpi2O4xGpsBAFtYKLhV6jZEnefPEvP%2Fj3bz1GeZdSNXgbAy3GrhspVK3Z89KqvUvwvN4G7FdlH9gOz858xcDuZ722Hti1PWiBZST1m9hehDXyc9Sgk4LMoYxZwVVl7v80s8gfcEigL7t6l679H3txvudA5mlrraZwk%2B20Xt%2FplCXh1s5FSny4m9K84JC%2FjMPcjQeZT7eEqYI8LzOxi8OWbUmYgIXZpdaloKRItJF5omA5uvXi%2BXDuuxuCIBs8CR4ey2DrFVINJGYDll5D9KPdO7zFAmDFJTWFWaPsz2vzAXdzsDLd2yvAt%2FNlarr3MO3Tpb4GOqUBKCl0O55%2FxqgfG3k72WfC26LERMv5WWlmViopaeXJkWt53FioqBQeAmHCxWvlyPL%2FtuCeGBKEsBUJKw1%2F39bsXQJXKWnU2gWDFikkl7wOfHsgln4V6cYsJAsj6lUj5Ojn1p7oIXwDvcH0m4Mtz3%2Bsty9iTfr%2Fa43jvW1v1imxooVF7%2FhEdRKUDAUitXiOMFmxGOSzzWcjgcL%2FNByi8Zz2blqE6Nxi&X-Amz-Signature=4d347a6006e993f29fa584f40b1c16cde585a630279f2a50804ad5690fe0307c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

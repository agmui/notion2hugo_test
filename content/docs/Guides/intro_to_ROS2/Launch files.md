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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WC7VLY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDgvgTjnEev7X%2B1KOdBXR64Tr3ZeoILoRb%2B0wqWBs0m4wIhAN36GktmG1tkar3FVWZZMmly%2FY7i9ePDYgOA%2BXHxnM95KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6T5XVWEx%2B7T3IYYUq3AMmE6dz1TYznsCf1CIk1MBx3GYVFz9NrmVwYaDd%2FI1IovR365LC6cbBM0y3oqQHCe3YXxDpxzzxZ%2Fo2DpJ2%2F7k2WkXgxEXl18uhMyuoWOH4EXP8K2r0sCM2guqswdWVlSRKqTdje4efIvA%2Fj%2FCzaJJvp%2FBP9WxiUR3wO%2FYmn%2BoprXMKpNW5Tk16b4ApqWUXJOqd%2FnmGEffuzraB2oRzf2fIq60Cd4R6LT05Fv6shBFjBNBpcSxOy1PjJ1cye8GTdrGpO%2Fah9mrHYXPvEF5fmwLpqX8ZIj0EyaKvUIPsjaVGNjRJk%2FBpAQIGA6Iv1Os6HGKU4vM6b3b4pstY0cAEKXKpX%2BrQoAhybUxLN70c9HkfPL7yej21BoWnRVsUYk2R4E1NtXwHAommRymnd2VL5EX36KQdMSe11lZ2iN5CU%2FXAsNVCdEal7VyDxceVpSAGCOWKb4PV2h37htSPnhZ6EiJRn7bP7VBMHm7L7vKHKS%2Bb671ZgNp0IN%2Bh%2BQYO8aqthV3IMCgGQrzxF5ak8CUx9DCAoXY5KipmBzOFF%2Fotxvm8RagzbsxzWcgOcTD%2BS2xEJyVVRCvhSMPh%2FyOtbTTKKYH6XG7RoDttUjQc7AWFKLtxu7NpNnjNIVuTegDjhTDD17C%2FBjqkAYazD9EJcHl40d3EE%2BcyWnY0lZ5wAD7qQ4kRVK%2BlZiQbzcwvPCU7eHircEfuu12dWGAX%2B2rXlCiAqLa3C0p4tcMy8BFG1O4XVSuBhSe5IlPfItyID%2Fab1q49iX%2B53I9B2Luz1wlkO2bIPSojcI7kjrriJWt60nvKcBWXMSyxJJRmJM6HrrbwFIKXIecHN%2B8sWlQS%2FqFg4Mnc8lyjGqJG1cRVS9fq&X-Amz-Signature=fc2bd5785de2dc6e908813d1fd772f9dbe91fd025d668a6f8836d17edab1df50&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WC7VLY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDgvgTjnEev7X%2B1KOdBXR64Tr3ZeoILoRb%2B0wqWBs0m4wIhAN36GktmG1tkar3FVWZZMmly%2FY7i9ePDYgOA%2BXHxnM95KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6T5XVWEx%2B7T3IYYUq3AMmE6dz1TYznsCf1CIk1MBx3GYVFz9NrmVwYaDd%2FI1IovR365LC6cbBM0y3oqQHCe3YXxDpxzzxZ%2Fo2DpJ2%2F7k2WkXgxEXl18uhMyuoWOH4EXP8K2r0sCM2guqswdWVlSRKqTdje4efIvA%2Fj%2FCzaJJvp%2FBP9WxiUR3wO%2FYmn%2BoprXMKpNW5Tk16b4ApqWUXJOqd%2FnmGEffuzraB2oRzf2fIq60Cd4R6LT05Fv6shBFjBNBpcSxOy1PjJ1cye8GTdrGpO%2Fah9mrHYXPvEF5fmwLpqX8ZIj0EyaKvUIPsjaVGNjRJk%2FBpAQIGA6Iv1Os6HGKU4vM6b3b4pstY0cAEKXKpX%2BrQoAhybUxLN70c9HkfPL7yej21BoWnRVsUYk2R4E1NtXwHAommRymnd2VL5EX36KQdMSe11lZ2iN5CU%2FXAsNVCdEal7VyDxceVpSAGCOWKb4PV2h37htSPnhZ6EiJRn7bP7VBMHm7L7vKHKS%2Bb671ZgNp0IN%2Bh%2BQYO8aqthV3IMCgGQrzxF5ak8CUx9DCAoXY5KipmBzOFF%2Fotxvm8RagzbsxzWcgOcTD%2BS2xEJyVVRCvhSMPh%2FyOtbTTKKYH6XG7RoDttUjQc7AWFKLtxu7NpNnjNIVuTegDjhTDD17C%2FBjqkAYazD9EJcHl40d3EE%2BcyWnY0lZ5wAD7qQ4kRVK%2BlZiQbzcwvPCU7eHircEfuu12dWGAX%2B2rXlCiAqLa3C0p4tcMy8BFG1O4XVSuBhSe5IlPfItyID%2Fab1q49iX%2B53I9B2Luz1wlkO2bIPSojcI7kjrriJWt60nvKcBWXMSyxJJRmJM6HrrbwFIKXIecHN%2B8sWlQS%2FqFg4Mnc8lyjGqJG1cRVS9fq&X-Amz-Signature=8acda44ad08bdf650b36a5673b77445f084983a61b5cefad8c136e62d34d44e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7WC7VLY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T190458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDgvgTjnEev7X%2B1KOdBXR64Tr3ZeoILoRb%2B0wqWBs0m4wIhAN36GktmG1tkar3FVWZZMmly%2FY7i9ePDYgOA%2BXHxnM95KogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6T5XVWEx%2B7T3IYYUq3AMmE6dz1TYznsCf1CIk1MBx3GYVFz9NrmVwYaDd%2FI1IovR365LC6cbBM0y3oqQHCe3YXxDpxzzxZ%2Fo2DpJ2%2F7k2WkXgxEXl18uhMyuoWOH4EXP8K2r0sCM2guqswdWVlSRKqTdje4efIvA%2Fj%2FCzaJJvp%2FBP9WxiUR3wO%2FYmn%2BoprXMKpNW5Tk16b4ApqWUXJOqd%2FnmGEffuzraB2oRzf2fIq60Cd4R6LT05Fv6shBFjBNBpcSxOy1PjJ1cye8GTdrGpO%2Fah9mrHYXPvEF5fmwLpqX8ZIj0EyaKvUIPsjaVGNjRJk%2FBpAQIGA6Iv1Os6HGKU4vM6b3b4pstY0cAEKXKpX%2BrQoAhybUxLN70c9HkfPL7yej21BoWnRVsUYk2R4E1NtXwHAommRymnd2VL5EX36KQdMSe11lZ2iN5CU%2FXAsNVCdEal7VyDxceVpSAGCOWKb4PV2h37htSPnhZ6EiJRn7bP7VBMHm7L7vKHKS%2Bb671ZgNp0IN%2Bh%2BQYO8aqthV3IMCgGQrzxF5ak8CUx9DCAoXY5KipmBzOFF%2Fotxvm8RagzbsxzWcgOcTD%2BS2xEJyVVRCvhSMPh%2FyOtbTTKKYH6XG7RoDttUjQc7AWFKLtxu7NpNnjNIVuTegDjhTDD17C%2FBjqkAYazD9EJcHl40d3EE%2BcyWnY0lZ5wAD7qQ4kRVK%2BlZiQbzcwvPCU7eHircEfuu12dWGAX%2B2rXlCiAqLa3C0p4tcMy8BFG1O4XVSuBhSe5IlPfItyID%2Fab1q49iX%2B53I9B2Luz1wlkO2bIPSojcI7kjrriJWt60nvKcBWXMSyxJJRmJM6HrrbwFIKXIecHN%2B8sWlQS%2FqFg4Mnc8lyjGqJG1cRVS9fq&X-Amz-Signature=90e7c55f45e8145e4ee3274dc9edcb65a9d1a598efa152a24fff0a157d9678c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

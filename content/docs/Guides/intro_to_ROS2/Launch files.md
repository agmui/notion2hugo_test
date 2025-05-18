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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHZUMMG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDd6c1UXpKdhXvJgH1MXd96bbmuJaFbcLCLe0SoEZdmwIhALp2K80FaQ0NbM7j7qyUG6OG871FOTsJ5sKXsAyr8NUpKv8DCHwQABoMNjM3NDIzMTgzODA1Igx6kjLDzH2w0kLxxwIq3AN5HEERrNSTThpD6buE4HP3jFpXb4uUBc5wopi%2F9blr3s0AuOxLYUHi5CuH4PzFMWgrZ1Jthb9pPtkj8ocXGT%2BdRHKWEkOFg9hl%2BPjDrb0K%2BK1doIZX5jPk31TmaQrE01OnwtmS9Dk174Hzsa92VCbKq1eCT%2BgkO8yIX%2B5%2BrNyxFlVERxxO%2BgARPaFRqMd3D%2FnyxcPzThWAzMLnyfAyb8iFTDPdSbWbg6CKh3ViGbQRlGWU68N7KoShYJIEFhpDYEHpp4IyFvs83yXFGHcN9wfE0WkcstO2iC288OSE%2B2bUsJjus46ovJ3yR0Yl4lxUIxU3VQj7w4XZyotaAW4egb%2FhhzpRA8v8lAU46%2B3PXvLsCfebK6ROMPXRtL07fgikUU9HoDWfX8JJxNaIKC25Uu%2BjsgjIXrVNHxLHfW4YvIIxQYSjbrplv7xTRNlCatrmcJwGvi9YZ5D5zlueqO%2BggywjlRbuek0jgFi18%2FgoGC6fK6Z4KIh2dyMGio5HsCPAVqSPf3s58bX0Eywg%2B3q7iQmOFDSVH9A5p9eDjFwof%2BaS%2B9fa5TM6X3wicH%2FGTVzdyG%2BVNK9%2Bn%2FBSmJRAMPcXH6fRP9bedTXsJYGjmbtc4eQ3gstXBrDEiOopaY85vTDk5qjBBjqkAQ%2B8iKnGUeOIAJ4fbIK2iCCgvYdWefVk8HMrbPZpp6NNEccKycDVE5UCXLJiWaujjYR%2BCrX09FbdzIzEcM41GK7sYjRGwEruWgHArR1O%2FG0go08XurTRR8hDupyUdLH5z1wXfbTPdSotAhC5FgiX6YShTZiXej0MtQnRBMaqvtstBpvjd%2FZC2RjSxgXV1S7m4%2FNG5HEkvoVe8zZeQnfOJdZY%2FoA7&X-Amz-Signature=929bcee9da1a2fb3b0a1c863943d9c738ff1b001fb573e1cd1987cf163c8ebd8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHZUMMG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDd6c1UXpKdhXvJgH1MXd96bbmuJaFbcLCLe0SoEZdmwIhALp2K80FaQ0NbM7j7qyUG6OG871FOTsJ5sKXsAyr8NUpKv8DCHwQABoMNjM3NDIzMTgzODA1Igx6kjLDzH2w0kLxxwIq3AN5HEERrNSTThpD6buE4HP3jFpXb4uUBc5wopi%2F9blr3s0AuOxLYUHi5CuH4PzFMWgrZ1Jthb9pPtkj8ocXGT%2BdRHKWEkOFg9hl%2BPjDrb0K%2BK1doIZX5jPk31TmaQrE01OnwtmS9Dk174Hzsa92VCbKq1eCT%2BgkO8yIX%2B5%2BrNyxFlVERxxO%2BgARPaFRqMd3D%2FnyxcPzThWAzMLnyfAyb8iFTDPdSbWbg6CKh3ViGbQRlGWU68N7KoShYJIEFhpDYEHpp4IyFvs83yXFGHcN9wfE0WkcstO2iC288OSE%2B2bUsJjus46ovJ3yR0Yl4lxUIxU3VQj7w4XZyotaAW4egb%2FhhzpRA8v8lAU46%2B3PXvLsCfebK6ROMPXRtL07fgikUU9HoDWfX8JJxNaIKC25Uu%2BjsgjIXrVNHxLHfW4YvIIxQYSjbrplv7xTRNlCatrmcJwGvi9YZ5D5zlueqO%2BggywjlRbuek0jgFi18%2FgoGC6fK6Z4KIh2dyMGio5HsCPAVqSPf3s58bX0Eywg%2B3q7iQmOFDSVH9A5p9eDjFwof%2BaS%2B9fa5TM6X3wicH%2FGTVzdyG%2BVNK9%2Bn%2FBSmJRAMPcXH6fRP9bedTXsJYGjmbtc4eQ3gstXBrDEiOopaY85vTDk5qjBBjqkAQ%2B8iKnGUeOIAJ4fbIK2iCCgvYdWefVk8HMrbPZpp6NNEccKycDVE5UCXLJiWaujjYR%2BCrX09FbdzIzEcM41GK7sYjRGwEruWgHArR1O%2FG0go08XurTRR8hDupyUdLH5z1wXfbTPdSotAhC5FgiX6YShTZiXej0MtQnRBMaqvtstBpvjd%2FZC2RjSxgXV1S7m4%2FNG5HEkvoVe8zZeQnfOJdZY%2FoA7&X-Amz-Signature=aa5e1731512353e6760b92741754ead2d06ac493d77bb1925b829d8c0e154ea0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DHZUMMG%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDd6c1UXpKdhXvJgH1MXd96bbmuJaFbcLCLe0SoEZdmwIhALp2K80FaQ0NbM7j7qyUG6OG871FOTsJ5sKXsAyr8NUpKv8DCHwQABoMNjM3NDIzMTgzODA1Igx6kjLDzH2w0kLxxwIq3AN5HEERrNSTThpD6buE4HP3jFpXb4uUBc5wopi%2F9blr3s0AuOxLYUHi5CuH4PzFMWgrZ1Jthb9pPtkj8ocXGT%2BdRHKWEkOFg9hl%2BPjDrb0K%2BK1doIZX5jPk31TmaQrE01OnwtmS9Dk174Hzsa92VCbKq1eCT%2BgkO8yIX%2B5%2BrNyxFlVERxxO%2BgARPaFRqMd3D%2FnyxcPzThWAzMLnyfAyb8iFTDPdSbWbg6CKh3ViGbQRlGWU68N7KoShYJIEFhpDYEHpp4IyFvs83yXFGHcN9wfE0WkcstO2iC288OSE%2B2bUsJjus46ovJ3yR0Yl4lxUIxU3VQj7w4XZyotaAW4egb%2FhhzpRA8v8lAU46%2B3PXvLsCfebK6ROMPXRtL07fgikUU9HoDWfX8JJxNaIKC25Uu%2BjsgjIXrVNHxLHfW4YvIIxQYSjbrplv7xTRNlCatrmcJwGvi9YZ5D5zlueqO%2BggywjlRbuek0jgFi18%2FgoGC6fK6Z4KIh2dyMGio5HsCPAVqSPf3s58bX0Eywg%2B3q7iQmOFDSVH9A5p9eDjFwof%2BaS%2B9fa5TM6X3wicH%2FGTVzdyG%2BVNK9%2Bn%2FBSmJRAMPcXH6fRP9bedTXsJYGjmbtc4eQ3gstXBrDEiOopaY85vTDk5qjBBjqkAQ%2B8iKnGUeOIAJ4fbIK2iCCgvYdWefVk8HMrbPZpp6NNEccKycDVE5UCXLJiWaujjYR%2BCrX09FbdzIzEcM41GK7sYjRGwEruWgHArR1O%2FG0go08XurTRR8hDupyUdLH5z1wXfbTPdSotAhC5FgiX6YShTZiXej0MtQnRBMaqvtstBpvjd%2FZC2RjSxgXV1S7m4%2FNG5HEkvoVe8zZeQnfOJdZY%2FoA7&X-Amz-Signature=2f9ab98e51c11165c751793fca3aff56acdd58c1423fd1c4a296c4259050b581&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

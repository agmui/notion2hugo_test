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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRI7OTJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOsZLGsh57h%2BxiXPyhHOEkn596a9VpWhtSafXazmnQ5wIgITshQ9cvT2iwIesUF%2FCrFeGLqtRgjmvy%2FN1i75bJoiUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzfPvxBM%2Bm6lO019CrcAwS9q%2F3NDu3pW7Rn4DGh3RSBmhePnIOEIUoP3RzbkGydbWHBhDgjucoaJ4mk9%2BKnPkOpaO78tmQECOLtig26YIzPcN3bSG96HjZJ2SzXcNPa1KrHOChbYzN9d3%2F1Xxh2uTc56pcvo%2FYnVvs1TV%2FQ3mOe7jUDl58RSTYZT%2FqimixBpF3Fm3i280By1ICODjWqSAB%2FFS9K8OTZiSNa%2FsRxezHxXWI4grTie8W1VSKQOVlu0v4Qn4Vr%2FWwexrGUxnWf8XXdjK6JF5nRNyjZMtpE4AXVEozBKJab1dp0caUPRJsbneiJZM%2BhFhdjhYnEPK0xfagYdued8XhCRwEtZS3pVRMk%2F1N8Z1DSu8eJLDuIvVZ38FzmfuWTl0BX%2FytxNvavWWOiNDUQss9LIplfba4%2F7onkxN6ZPKLJvNJcire%2F9u8KCu54Bs0CmmoQgV%2BUnYzBMsYlnJCdiC5ya4qarWjFpa8DCagFHSPt08J1GvaloCJC%2FtdlJXJc0nxSEqCoJ3BWB%2F6mjM9syv8qbPOiHjHy%2F8Jho2m5IX43DmJbE48Re6BFd%2F8%2F1%2BJMJ58V9JiLkEUvpsbofUTOXU2NvPNruePoMoq5ArHIE5Khqd6n6Cp8pX5AeJGBMBIIJhqFcTnGMLTl5r0GOqUBRLw2EqXbLeQj6h3b99U8efEbSIP4fPDvnheD7kk7IudRHRBr0DOFmQGhQR6iv5d2ybRRdKTURPA9ycb6sL6cvMj8vC1XjXZuvZOh6hX54r%2Fv%2Frr0i3CaPIjkgWptjpFV8Z1VCUmAaDxc4NVh%2BgBjadQ4YYUxA4bQXNETt9j9wbmIrbG5I6NBx1vWirW7htCDw4nI9lC59Wr9yJRSFTZdGP0o9LK2&X-Amz-Signature=13531aacb4323ec039e107a5fea06bf3645fdecfd65bc2c906197dad884a898f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRI7OTJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOsZLGsh57h%2BxiXPyhHOEkn596a9VpWhtSafXazmnQ5wIgITshQ9cvT2iwIesUF%2FCrFeGLqtRgjmvy%2FN1i75bJoiUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzfPvxBM%2Bm6lO019CrcAwS9q%2F3NDu3pW7Rn4DGh3RSBmhePnIOEIUoP3RzbkGydbWHBhDgjucoaJ4mk9%2BKnPkOpaO78tmQECOLtig26YIzPcN3bSG96HjZJ2SzXcNPa1KrHOChbYzN9d3%2F1Xxh2uTc56pcvo%2FYnVvs1TV%2FQ3mOe7jUDl58RSTYZT%2FqimixBpF3Fm3i280By1ICODjWqSAB%2FFS9K8OTZiSNa%2FsRxezHxXWI4grTie8W1VSKQOVlu0v4Qn4Vr%2FWwexrGUxnWf8XXdjK6JF5nRNyjZMtpE4AXVEozBKJab1dp0caUPRJsbneiJZM%2BhFhdjhYnEPK0xfagYdued8XhCRwEtZS3pVRMk%2F1N8Z1DSu8eJLDuIvVZ38FzmfuWTl0BX%2FytxNvavWWOiNDUQss9LIplfba4%2F7onkxN6ZPKLJvNJcire%2F9u8KCu54Bs0CmmoQgV%2BUnYzBMsYlnJCdiC5ya4qarWjFpa8DCagFHSPt08J1GvaloCJC%2FtdlJXJc0nxSEqCoJ3BWB%2F6mjM9syv8qbPOiHjHy%2F8Jho2m5IX43DmJbE48Re6BFd%2F8%2F1%2BJMJ58V9JiLkEUvpsbofUTOXU2NvPNruePoMoq5ArHIE5Khqd6n6Cp8pX5AeJGBMBIIJhqFcTnGMLTl5r0GOqUBRLw2EqXbLeQj6h3b99U8efEbSIP4fPDvnheD7kk7IudRHRBr0DOFmQGhQR6iv5d2ybRRdKTURPA9ycb6sL6cvMj8vC1XjXZuvZOh6hX54r%2Fv%2Frr0i3CaPIjkgWptjpFV8Z1VCUmAaDxc4NVh%2BgBjadQ4YYUxA4bQXNETt9j9wbmIrbG5I6NBx1vWirW7htCDw4nI9lC59Wr9yJRSFTZdGP0o9LK2&X-Amz-Signature=4a62b00c2a9f65605f927e7e176cf6153408e9636f813740ac9850762e3b06ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KRI7OTJ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T150248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOsZLGsh57h%2BxiXPyhHOEkn596a9VpWhtSafXazmnQ5wIgITshQ9cvT2iwIesUF%2FCrFeGLqtRgjmvy%2FN1i75bJoiUqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMzfPvxBM%2Bm6lO019CrcAwS9q%2F3NDu3pW7Rn4DGh3RSBmhePnIOEIUoP3RzbkGydbWHBhDgjucoaJ4mk9%2BKnPkOpaO78tmQECOLtig26YIzPcN3bSG96HjZJ2SzXcNPa1KrHOChbYzN9d3%2F1Xxh2uTc56pcvo%2FYnVvs1TV%2FQ3mOe7jUDl58RSTYZT%2FqimixBpF3Fm3i280By1ICODjWqSAB%2FFS9K8OTZiSNa%2FsRxezHxXWI4grTie8W1VSKQOVlu0v4Qn4Vr%2FWwexrGUxnWf8XXdjK6JF5nRNyjZMtpE4AXVEozBKJab1dp0caUPRJsbneiJZM%2BhFhdjhYnEPK0xfagYdued8XhCRwEtZS3pVRMk%2F1N8Z1DSu8eJLDuIvVZ38FzmfuWTl0BX%2FytxNvavWWOiNDUQss9LIplfba4%2F7onkxN6ZPKLJvNJcire%2F9u8KCu54Bs0CmmoQgV%2BUnYzBMsYlnJCdiC5ya4qarWjFpa8DCagFHSPt08J1GvaloCJC%2FtdlJXJc0nxSEqCoJ3BWB%2F6mjM9syv8qbPOiHjHy%2F8Jho2m5IX43DmJbE48Re6BFd%2F8%2F1%2BJMJ58V9JiLkEUvpsbofUTOXU2NvPNruePoMoq5ArHIE5Khqd6n6Cp8pX5AeJGBMBIIJhqFcTnGMLTl5r0GOqUBRLw2EqXbLeQj6h3b99U8efEbSIP4fPDvnheD7kk7IudRHRBr0DOFmQGhQR6iv5d2ybRRdKTURPA9ycb6sL6cvMj8vC1XjXZuvZOh6hX54r%2Fv%2Frr0i3CaPIjkgWptjpFV8Z1VCUmAaDxc4NVh%2BgBjadQ4YYUxA4bQXNETt9j9wbmIrbG5I6NBx1vWirW7htCDw4nI9lC59Wr9yJRSFTZdGP0o9LK2&X-Amz-Signature=98432c1c61dc3786a1ce050963a0cddd81ef4f84cb3cdfd986e918ce6a1a7ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

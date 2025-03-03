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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RGPB2Z%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGmk%2BM81%2FTItWQZrJQAu8Mu4zVdkiUrOx15FjQ3l5jHgIhAPJWLeJBXJPv9oVV%2BPbxkHpu4WPGjA5JtTmSSjgNEAC%2BKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOL74%2FRKocpMYesaYq3AOnmy%2F%2BsnhNHkiRTheWFE%2FqefJdmLxVhOGpxHre7vS6%2Bev%2BC%2BOl%2B%2Bmu%2BOEqw49ltu0TPB2c0sGYz0bAAoZwpklGfxszE3lSCHkSJH5SO1FNJq9DyOdxS0VIV4EzO7XEyY5NxmZPJ3tXa0VmRzVGvqq%2BXlQfsavYJdNs1Uk1gSyoTwmvFR7eFA1WLZtzlG3Zbb2TXqV96CciBWnE7rrEQ3aPQhbPE9FWkB3WcFVd06%2BGr%2FFuR2Mqcmt%2B3kjlgv7SpyJzxTKZvI3Dh1thw4TF2ms8aicozu0GGfWm20d39WfgzGiLOV4gKpmzFsCYGp6SFC5pTK%2Bhkg%2FFAwnfgl5CX0631pHF02Bf9wjot3dNGudqGLsIO%2FJfduXb7vxW7Zi2CEWQe%2B1syL2HO%2FO2Vo%2FDN4OBeWmaOqRayGc7JMETyX3wiJVJn8FnXrpZLmGvG6MNybStcCj2LqX2y8Xc5fGemZ3hO0PXbtzZPLK%2B3ltuHfy%2FmrSIV4b6LVrFKDn%2Bo86%2BNFDwkXU%2FGKDDSyNCDwohYQz1T20%2Fk0FNlCEYE0VUR2Qd5LNX8%2FtT8FyXHXgezWP5SCKRgfbjgd%2FPi5DNLvYyEWQwRiq2PfPLOEIZ%2BWIXIepnxLVFTQandYoJWLG7rzC3vJe%2BBjqkAbCt%2FZ6fwExKxrqYWlkVL2E%2FqjPXKexDxFD9gR2yh0zXfnvuCP5ZNchA9OXj4CJKQ%2BGg7EeXDMBQufKaute6Ida0ng074ql%2F%2FM0ThMNQPLtxXBGi9z06lmJ7muZH7c1m%2FPWjh86Jq1gDTQ8M9dVpjF6pgTszGvVDacg0pUhYRkwVb0UyGHx9sMb6YjuYQiiGQY7miQudbZ5EQuJdFbyZxj17NhGP&X-Amz-Signature=7ba0d004ff6de772f3cd78d0d491268b328cd7320e4d9e68fa623fd4b674f378&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RGPB2Z%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGmk%2BM81%2FTItWQZrJQAu8Mu4zVdkiUrOx15FjQ3l5jHgIhAPJWLeJBXJPv9oVV%2BPbxkHpu4WPGjA5JtTmSSjgNEAC%2BKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOL74%2FRKocpMYesaYq3AOnmy%2F%2BsnhNHkiRTheWFE%2FqefJdmLxVhOGpxHre7vS6%2Bev%2BC%2BOl%2B%2Bmu%2BOEqw49ltu0TPB2c0sGYz0bAAoZwpklGfxszE3lSCHkSJH5SO1FNJq9DyOdxS0VIV4EzO7XEyY5NxmZPJ3tXa0VmRzVGvqq%2BXlQfsavYJdNs1Uk1gSyoTwmvFR7eFA1WLZtzlG3Zbb2TXqV96CciBWnE7rrEQ3aPQhbPE9FWkB3WcFVd06%2BGr%2FFuR2Mqcmt%2B3kjlgv7SpyJzxTKZvI3Dh1thw4TF2ms8aicozu0GGfWm20d39WfgzGiLOV4gKpmzFsCYGp6SFC5pTK%2Bhkg%2FFAwnfgl5CX0631pHF02Bf9wjot3dNGudqGLsIO%2FJfduXb7vxW7Zi2CEWQe%2B1syL2HO%2FO2Vo%2FDN4OBeWmaOqRayGc7JMETyX3wiJVJn8FnXrpZLmGvG6MNybStcCj2LqX2y8Xc5fGemZ3hO0PXbtzZPLK%2B3ltuHfy%2FmrSIV4b6LVrFKDn%2Bo86%2BNFDwkXU%2FGKDDSyNCDwohYQz1T20%2Fk0FNlCEYE0VUR2Qd5LNX8%2FtT8FyXHXgezWP5SCKRgfbjgd%2FPi5DNLvYyEWQwRiq2PfPLOEIZ%2BWIXIepnxLVFTQandYoJWLG7rzC3vJe%2BBjqkAbCt%2FZ6fwExKxrqYWlkVL2E%2FqjPXKexDxFD9gR2yh0zXfnvuCP5ZNchA9OXj4CJKQ%2BGg7EeXDMBQufKaute6Ida0ng074ql%2F%2FM0ThMNQPLtxXBGi9z06lmJ7muZH7c1m%2FPWjh86Jq1gDTQ8M9dVpjF6pgTszGvVDacg0pUhYRkwVb0UyGHx9sMb6YjuYQiiGQY7miQudbZ5EQuJdFbyZxj17NhGP&X-Amz-Signature=1fb8c5f102fdda4d7af4477965406c35f8e97b05bba04b07e715e8386fb18f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665RGPB2Z%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGmk%2BM81%2FTItWQZrJQAu8Mu4zVdkiUrOx15FjQ3l5jHgIhAPJWLeJBXJPv9oVV%2BPbxkHpu4WPGjA5JtTmSSjgNEAC%2BKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOL74%2FRKocpMYesaYq3AOnmy%2F%2BsnhNHkiRTheWFE%2FqefJdmLxVhOGpxHre7vS6%2Bev%2BC%2BOl%2B%2Bmu%2BOEqw49ltu0TPB2c0sGYz0bAAoZwpklGfxszE3lSCHkSJH5SO1FNJq9DyOdxS0VIV4EzO7XEyY5NxmZPJ3tXa0VmRzVGvqq%2BXlQfsavYJdNs1Uk1gSyoTwmvFR7eFA1WLZtzlG3Zbb2TXqV96CciBWnE7rrEQ3aPQhbPE9FWkB3WcFVd06%2BGr%2FFuR2Mqcmt%2B3kjlgv7SpyJzxTKZvI3Dh1thw4TF2ms8aicozu0GGfWm20d39WfgzGiLOV4gKpmzFsCYGp6SFC5pTK%2Bhkg%2FFAwnfgl5CX0631pHF02Bf9wjot3dNGudqGLsIO%2FJfduXb7vxW7Zi2CEWQe%2B1syL2HO%2FO2Vo%2FDN4OBeWmaOqRayGc7JMETyX3wiJVJn8FnXrpZLmGvG6MNybStcCj2LqX2y8Xc5fGemZ3hO0PXbtzZPLK%2B3ltuHfy%2FmrSIV4b6LVrFKDn%2Bo86%2BNFDwkXU%2FGKDDSyNCDwohYQz1T20%2Fk0FNlCEYE0VUR2Qd5LNX8%2FtT8FyXHXgezWP5SCKRgfbjgd%2FPi5DNLvYyEWQwRiq2PfPLOEIZ%2BWIXIepnxLVFTQandYoJWLG7rzC3vJe%2BBjqkAbCt%2FZ6fwExKxrqYWlkVL2E%2FqjPXKexDxFD9gR2yh0zXfnvuCP5ZNchA9OXj4CJKQ%2BGg7EeXDMBQufKaute6Ida0ng074ql%2F%2FM0ThMNQPLtxXBGi9z06lmJ7muZH7c1m%2FPWjh86Jq1gDTQ8M9dVpjF6pgTszGvVDacg0pUhYRkwVb0UyGHx9sMb6YjuYQiiGQY7miQudbZ5EQuJdFbyZxj17NhGP&X-Amz-Signature=9082058fd3f24da3e4697395f4c99c8110abc9a5c64d2e25a295963094f3a5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

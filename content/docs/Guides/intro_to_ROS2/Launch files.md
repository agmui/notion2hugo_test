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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L2NE5K6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBD6DPca8H96O6lwSDFmGS4GmkLkmQmlaMENHa44E2KvAiAUPZpX2U%2BCV1hfDMeyaL3hBQIS%2F1F%2FmV0LzhH01gS0zir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMGwQ%2FRfBYpjXpcAaSKtwDJ%2FA56Z42zAtEcIn6BjE4kn1M8s7HgraBAXZSZfttggIPVf5beYb6lVZBjGh5MsQBC2laX0%2BkHDznrNlJAOha3a6ytJQWTfG2ruRbcZ00rH3Z8VnLoJK24PCkbXp%2BOyHnTKCPFtru72gfQAROCgnb0wQsanTxpUUhkFMXR6qoeBWztP8LkvKSG%2FBoS33H%2B5vQEBDahevOtJtamjW%2FI%2BkjYnnpohy3RNOPzm1ffaVteQLpu1fIWdQ8%2Bb8UEdvr7Rd8GhQso3ERfewU5f%2BlyKraqUOzgrzgwssKgd69u1fax0X54Y6EKZ2nwfp02rat%2BlSdfGWRksumB0SwXdctbI6jJD2%2FgmWXt1TRdJEWmvGEKDnr7BlrJNuIFgoysVq66BxJisbXaUh6iJ4HU%2BfQgLTpnpOfHHrPPptROgphDFyPPtaT%2BSDycMk9G8%2FLHqos2FWwJVdGmSYobeNZzixiUk4MewCIqoD5DsFconb7zpjyP3%2FTBySYa3fanvphzNrSqApq7m%2BtphnT%2FaqhPB5N7x6KyGYJzr%2FhhtjwLPI0mZom0spDeeA8PwhtyxvWPAAM1lbXCIZqZK4dUAVu%2B2%2FskdWQGU5oL%2BJy8z3WD6hb6J0oimdW0m6oU%2FNOC4OId2IwpPSqwAY6pgHlILeowgkbbpOYO9TLOAOwDxs7HgsA6tdClCEdWXU%2BGwXSQ2AK6WeSncGwjdx8%2Bgzc%2FvpbmtXv5MTV0hqzjoCcaN%2BKGF2P%2FlwP9ZAjg%2BrqM9THasbVaXqtDh8T0xVcT07SDlzNXJKh3%2F1Mid2Az261k4d5Aw9WgGBsVLSuHSBQqIo3TidiM3q%2Bf39k2YG2IHNC1LeoXd1gHdjzftEA43B7tbZfh8go&X-Amz-Signature=14a99a63a16b44d0dfda8a6e7a83bbf9c2a85c8e7938bb30257512cc5d9aed9f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L2NE5K6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBD6DPca8H96O6lwSDFmGS4GmkLkmQmlaMENHa44E2KvAiAUPZpX2U%2BCV1hfDMeyaL3hBQIS%2F1F%2FmV0LzhH01gS0zir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMGwQ%2FRfBYpjXpcAaSKtwDJ%2FA56Z42zAtEcIn6BjE4kn1M8s7HgraBAXZSZfttggIPVf5beYb6lVZBjGh5MsQBC2laX0%2BkHDznrNlJAOha3a6ytJQWTfG2ruRbcZ00rH3Z8VnLoJK24PCkbXp%2BOyHnTKCPFtru72gfQAROCgnb0wQsanTxpUUhkFMXR6qoeBWztP8LkvKSG%2FBoS33H%2B5vQEBDahevOtJtamjW%2FI%2BkjYnnpohy3RNOPzm1ffaVteQLpu1fIWdQ8%2Bb8UEdvr7Rd8GhQso3ERfewU5f%2BlyKraqUOzgrzgwssKgd69u1fax0X54Y6EKZ2nwfp02rat%2BlSdfGWRksumB0SwXdctbI6jJD2%2FgmWXt1TRdJEWmvGEKDnr7BlrJNuIFgoysVq66BxJisbXaUh6iJ4HU%2BfQgLTpnpOfHHrPPptROgphDFyPPtaT%2BSDycMk9G8%2FLHqos2FWwJVdGmSYobeNZzixiUk4MewCIqoD5DsFconb7zpjyP3%2FTBySYa3fanvphzNrSqApq7m%2BtphnT%2FaqhPB5N7x6KyGYJzr%2FhhtjwLPI0mZom0spDeeA8PwhtyxvWPAAM1lbXCIZqZK4dUAVu%2B2%2FskdWQGU5oL%2BJy8z3WD6hb6J0oimdW0m6oU%2FNOC4OId2IwpPSqwAY6pgHlILeowgkbbpOYO9TLOAOwDxs7HgsA6tdClCEdWXU%2BGwXSQ2AK6WeSncGwjdx8%2Bgzc%2FvpbmtXv5MTV0hqzjoCcaN%2BKGF2P%2FlwP9ZAjg%2BrqM9THasbVaXqtDh8T0xVcT07SDlzNXJKh3%2F1Mid2Az261k4d5Aw9WgGBsVLSuHSBQqIo3TidiM3q%2Bf39k2YG2IHNC1LeoXd1gHdjzftEA43B7tbZfh8go&X-Amz-Signature=47625b2acaed399617cdc9ad5fe290c2108495c9fea8a5274b384fa016f2a918&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L2NE5K6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBD6DPca8H96O6lwSDFmGS4GmkLkmQmlaMENHa44E2KvAiAUPZpX2U%2BCV1hfDMeyaL3hBQIS%2F1F%2FmV0LzhH01gS0zir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMGwQ%2FRfBYpjXpcAaSKtwDJ%2FA56Z42zAtEcIn6BjE4kn1M8s7HgraBAXZSZfttggIPVf5beYb6lVZBjGh5MsQBC2laX0%2BkHDznrNlJAOha3a6ytJQWTfG2ruRbcZ00rH3Z8VnLoJK24PCkbXp%2BOyHnTKCPFtru72gfQAROCgnb0wQsanTxpUUhkFMXR6qoeBWztP8LkvKSG%2FBoS33H%2B5vQEBDahevOtJtamjW%2FI%2BkjYnnpohy3RNOPzm1ffaVteQLpu1fIWdQ8%2Bb8UEdvr7Rd8GhQso3ERfewU5f%2BlyKraqUOzgrzgwssKgd69u1fax0X54Y6EKZ2nwfp02rat%2BlSdfGWRksumB0SwXdctbI6jJD2%2FgmWXt1TRdJEWmvGEKDnr7BlrJNuIFgoysVq66BxJisbXaUh6iJ4HU%2BfQgLTpnpOfHHrPPptROgphDFyPPtaT%2BSDycMk9G8%2FLHqos2FWwJVdGmSYobeNZzixiUk4MewCIqoD5DsFconb7zpjyP3%2FTBySYa3fanvphzNrSqApq7m%2BtphnT%2FaqhPB5N7x6KyGYJzr%2FhhtjwLPI0mZom0spDeeA8PwhtyxvWPAAM1lbXCIZqZK4dUAVu%2B2%2FskdWQGU5oL%2BJy8z3WD6hb6J0oimdW0m6oU%2FNOC4OId2IwpPSqwAY6pgHlILeowgkbbpOYO9TLOAOwDxs7HgsA6tdClCEdWXU%2BGwXSQ2AK6WeSncGwjdx8%2Bgzc%2FvpbmtXv5MTV0hqzjoCcaN%2BKGF2P%2FlwP9ZAjg%2BrqM9THasbVaXqtDh8T0xVcT07SDlzNXJKh3%2F1Mid2Az261k4d5Aw9WgGBsVLSuHSBQqIo3TidiM3q%2Bf39k2YG2IHNC1LeoXd1gHdjzftEA43B7tbZfh8go&X-Amz-Signature=0e43155a4d17c322a5cc89d773b1a68fe8fe44d47d39b2ca8ed5d1cea3352998&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

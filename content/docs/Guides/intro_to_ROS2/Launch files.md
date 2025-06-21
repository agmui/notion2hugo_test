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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7JZA65A%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9u3ARwb45%2FmVJhtSeqAzccvcC%2BM%2BAY%2F7DSwck1upGUAiAwwX8ZNUY5QlrJnka4HH5SiyBg7GiP80mVD8m0ZJqDwCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlFv0n5WZzZjdvoYJKtwDdVC60zwYByAM5D8M6CwDdrlnRXy%2F4B0EiwOttTPJEko8Yrx33G1wd9IFLERInKcxF9gmXPgkw%2FbrE5jRWBJ9VfFlnBTyrq9xrCTzDidAhLm3BPHe1HUiPoedAbRgNiW9P8cssohL795pq2RrmDqFVRBzsp%2B6SBZOhNiZZVcceQk2PI74aQYlx4mAwVhWbTlny22aDx019V70dmTNDWeicgMiocG6m3nGiS9OJenzzYSnhSpAlmlhN0c6JHvb9QzW4fQjNYMfZZCWNo%2FD6SXFLJrJcqJIytPGDn10%2B1z36PnXxyn4aXxHnaJySzkSq4CIob3poBrpyz8twzOBa5%2BbPmlxAfEZuXV6UMM3yE1RIl21h8U1jt797Jg%2FnGSuXq7JJ1kycngzRoctAImOuh8RgQWGrVRgFYO%2FybyOBWkz5hqPX2JcM%2BC8lG%2FAEoQe5aY9IcNt79secelwrO337KznP7iNDr%2FpBaDmwKTn%2F5shjUf1I%2Fg4SYH%2BhXL70RbMrfukRG2T0j2stcyqKycZS8vaPk%2BgegU41pThgP3ZNBUGZGQqC7i7i3rwdwRBCG4j9YNikhyc6eiAQs%2FMYuRObmgaUcvBgqsdpyw93eGZRUIAN5YgFb1vTk24wH1RvLUwx6%2FYwgY6pgHJOS7lqU37nJbawGsCes%2B4PZ4MSUjNf2mOOmuCI%2BEftkV4w7WITS3uxmXEveRaGQXZCwg4hWxwXYn1GLdOFZCPsVzyjgJ8PvjA8rtWQErV3Uuejdq%2B6pmrwXlSCXqA2zPxB%2BkWXhinUMOjBpQA0z5Z5v9dRh6swYNPsXLax4gkt20BMIFayXCrgkqBZxsBH9aEgemiJwDQbHHbBSAsVxBOGalmIvjk&X-Amz-Signature=a172be2aeec0baf0dcea2957903a15e0a1fae6f4d3da3d3335f14933c69dec0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7JZA65A%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9u3ARwb45%2FmVJhtSeqAzccvcC%2BM%2BAY%2F7DSwck1upGUAiAwwX8ZNUY5QlrJnka4HH5SiyBg7GiP80mVD8m0ZJqDwCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlFv0n5WZzZjdvoYJKtwDdVC60zwYByAM5D8M6CwDdrlnRXy%2F4B0EiwOttTPJEko8Yrx33G1wd9IFLERInKcxF9gmXPgkw%2FbrE5jRWBJ9VfFlnBTyrq9xrCTzDidAhLm3BPHe1HUiPoedAbRgNiW9P8cssohL795pq2RrmDqFVRBzsp%2B6SBZOhNiZZVcceQk2PI74aQYlx4mAwVhWbTlny22aDx019V70dmTNDWeicgMiocG6m3nGiS9OJenzzYSnhSpAlmlhN0c6JHvb9QzW4fQjNYMfZZCWNo%2FD6SXFLJrJcqJIytPGDn10%2B1z36PnXxyn4aXxHnaJySzkSq4CIob3poBrpyz8twzOBa5%2BbPmlxAfEZuXV6UMM3yE1RIl21h8U1jt797Jg%2FnGSuXq7JJ1kycngzRoctAImOuh8RgQWGrVRgFYO%2FybyOBWkz5hqPX2JcM%2BC8lG%2FAEoQe5aY9IcNt79secelwrO337KznP7iNDr%2FpBaDmwKTn%2F5shjUf1I%2Fg4SYH%2BhXL70RbMrfukRG2T0j2stcyqKycZS8vaPk%2BgegU41pThgP3ZNBUGZGQqC7i7i3rwdwRBCG4j9YNikhyc6eiAQs%2FMYuRObmgaUcvBgqsdpyw93eGZRUIAN5YgFb1vTk24wH1RvLUwx6%2FYwgY6pgHJOS7lqU37nJbawGsCes%2B4PZ4MSUjNf2mOOmuCI%2BEftkV4w7WITS3uxmXEveRaGQXZCwg4hWxwXYn1GLdOFZCPsVzyjgJ8PvjA8rtWQErV3Uuejdq%2B6pmrwXlSCXqA2zPxB%2BkWXhinUMOjBpQA0z5Z5v9dRh6swYNPsXLax4gkt20BMIFayXCrgkqBZxsBH9aEgemiJwDQbHHbBSAsVxBOGalmIvjk&X-Amz-Signature=76c55be4b567946f3dd2d1c9a99b35d14fae1a7dc6bb5d2c5dabdc5ee12d6d2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7JZA65A%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T022736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9u3ARwb45%2FmVJhtSeqAzccvcC%2BM%2BAY%2F7DSwck1upGUAiAwwX8ZNUY5QlrJnka4HH5SiyBg7GiP80mVD8m0ZJqDwCqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlFv0n5WZzZjdvoYJKtwDdVC60zwYByAM5D8M6CwDdrlnRXy%2F4B0EiwOttTPJEko8Yrx33G1wd9IFLERInKcxF9gmXPgkw%2FbrE5jRWBJ9VfFlnBTyrq9xrCTzDidAhLm3BPHe1HUiPoedAbRgNiW9P8cssohL795pq2RrmDqFVRBzsp%2B6SBZOhNiZZVcceQk2PI74aQYlx4mAwVhWbTlny22aDx019V70dmTNDWeicgMiocG6m3nGiS9OJenzzYSnhSpAlmlhN0c6JHvb9QzW4fQjNYMfZZCWNo%2FD6SXFLJrJcqJIytPGDn10%2B1z36PnXxyn4aXxHnaJySzkSq4CIob3poBrpyz8twzOBa5%2BbPmlxAfEZuXV6UMM3yE1RIl21h8U1jt797Jg%2FnGSuXq7JJ1kycngzRoctAImOuh8RgQWGrVRgFYO%2FybyOBWkz5hqPX2JcM%2BC8lG%2FAEoQe5aY9IcNt79secelwrO337KznP7iNDr%2FpBaDmwKTn%2F5shjUf1I%2Fg4SYH%2BhXL70RbMrfukRG2T0j2stcyqKycZS8vaPk%2BgegU41pThgP3ZNBUGZGQqC7i7i3rwdwRBCG4j9YNikhyc6eiAQs%2FMYuRObmgaUcvBgqsdpyw93eGZRUIAN5YgFb1vTk24wH1RvLUwx6%2FYwgY6pgHJOS7lqU37nJbawGsCes%2B4PZ4MSUjNf2mOOmuCI%2BEftkV4w7WITS3uxmXEveRaGQXZCwg4hWxwXYn1GLdOFZCPsVzyjgJ8PvjA8rtWQErV3Uuejdq%2B6pmrwXlSCXqA2zPxB%2BkWXhinUMOjBpQA0z5Z5v9dRh6swYNPsXLax4gkt20BMIFayXCrgkqBZxsBH9aEgemiJwDQbHHbBSAsVxBOGalmIvjk&X-Amz-Signature=b3c4c0016f507df894f1ed376c2cb2b51412d065e7c052439efce6e88b57a0fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

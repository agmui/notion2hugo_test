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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MQUXBLC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCk0DXLM7z4ycozCIW8KiAUFq6veydwHMnwjGBFBIBbkAIgetiE9pAKM1UeEbqmPVUBySixJ1q4jyYG4WaEAQXiwn8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEkzNkqJSNKgmjZu5ircA33Gx1Z%2B9CxIyY3%2BQl7LbJ180xr8hAgpXw01sXJjCWelmsswuCQQAs%2FIkyS7Elklx2WiE67Q%2F7jqobxevO84ma6DTv5lBdzeZFicDjyZfVu9bb6aFyVpfKBRItRGMNeRn%2Fe%2ByhWF%2BHGPGJoFvTJW7q%2Fn5idsiuEFXQEXmjs6tJ7XDA726bgMvcGrylls4RfX5MU1aBcQFoleLSSRwwZwJ6rkf7kaGaFGVbeE9Sp385%2FZr0UWg%2BvqYUwIH6wZqDDrI67uooI0x49XcUT33yqxsazgFWk5TtOKhQGUEFUPLeH%2BwG84xH4PeZ%2FkA8fDhWpxLUAz6Yk4SJDy9D6LMg2k1NfibtZvW62oh0FdzSaJ7LWxSqdZOFwdLPxTkRHjmodp39VlWlBhggY1ny%2Fkc5MK6U3mGBVjw0ActW0m2HANirxwS8%2BLZErUA%2BGQUvWPLaxe89zCyYQ0m%2BeLpiWr1u5%2BT91kxJ1U4VdWDo%2Fe%2Brhj%2F9AKVNGRn1KOle69mw8JYRyRxhTUnw%2BVUqxKurZyBuybd8inn7%2F3Gn93EejLumI0H3wac7aycmhGgk5jv0sC%2BWMjSOBLpGY%2BtxBlXzEw7nXktCoovK00A6PPPoc31GZScvO6mdrlQyWKCScBJDGTMIW9%2Bb0GOqUB5kHpUZAmvrAjnByr8ged1mUp47GgpP2jxmj3GJ4b5qyPsq2MaKTxT6Eef29tdEOagZMo0yse2Nw7bdG5zMGDMa1DpGBFfVV0vaaSOdWqdVWRS1YH9rTGcCBH50luBA7gwflya%2FE9OkrMOQ%2FQdGehF%2Bb6mYRw%2F2NrFX0t2BECsaXQnvIW2wql%2B4iC3xeVxIvLG68KTW0EQHgRVUW5CDU7hoWwerxe&X-Amz-Signature=7b763767ace5dc4cc2db4a70f8433f8f384292264f620c2903d83ab6dcaed578&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MQUXBLC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCk0DXLM7z4ycozCIW8KiAUFq6veydwHMnwjGBFBIBbkAIgetiE9pAKM1UeEbqmPVUBySixJ1q4jyYG4WaEAQXiwn8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEkzNkqJSNKgmjZu5ircA33Gx1Z%2B9CxIyY3%2BQl7LbJ180xr8hAgpXw01sXJjCWelmsswuCQQAs%2FIkyS7Elklx2WiE67Q%2F7jqobxevO84ma6DTv5lBdzeZFicDjyZfVu9bb6aFyVpfKBRItRGMNeRn%2Fe%2ByhWF%2BHGPGJoFvTJW7q%2Fn5idsiuEFXQEXmjs6tJ7XDA726bgMvcGrylls4RfX5MU1aBcQFoleLSSRwwZwJ6rkf7kaGaFGVbeE9Sp385%2FZr0UWg%2BvqYUwIH6wZqDDrI67uooI0x49XcUT33yqxsazgFWk5TtOKhQGUEFUPLeH%2BwG84xH4PeZ%2FkA8fDhWpxLUAz6Yk4SJDy9D6LMg2k1NfibtZvW62oh0FdzSaJ7LWxSqdZOFwdLPxTkRHjmodp39VlWlBhggY1ny%2Fkc5MK6U3mGBVjw0ActW0m2HANirxwS8%2BLZErUA%2BGQUvWPLaxe89zCyYQ0m%2BeLpiWr1u5%2BT91kxJ1U4VdWDo%2Fe%2Brhj%2F9AKVNGRn1KOle69mw8JYRyRxhTUnw%2BVUqxKurZyBuybd8inn7%2F3Gn93EejLumI0H3wac7aycmhGgk5jv0sC%2BWMjSOBLpGY%2BtxBlXzEw7nXktCoovK00A6PPPoc31GZScvO6mdrlQyWKCScBJDGTMIW9%2Bb0GOqUB5kHpUZAmvrAjnByr8ged1mUp47GgpP2jxmj3GJ4b5qyPsq2MaKTxT6Eef29tdEOagZMo0yse2Nw7bdG5zMGDMa1DpGBFfVV0vaaSOdWqdVWRS1YH9rTGcCBH50luBA7gwflya%2FE9OkrMOQ%2FQdGehF%2Bb6mYRw%2F2NrFX0t2BECsaXQnvIW2wql%2B4iC3xeVxIvLG68KTW0EQHgRVUW5CDU7hoWwerxe&X-Amz-Signature=cd0f5953e5000fd8430248a22c896503c8e192739b33ac13e457117dbb66fd4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MQUXBLC%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCk0DXLM7z4ycozCIW8KiAUFq6veydwHMnwjGBFBIBbkAIgetiE9pAKM1UeEbqmPVUBySixJ1q4jyYG4WaEAQXiwn8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEkzNkqJSNKgmjZu5ircA33Gx1Z%2B9CxIyY3%2BQl7LbJ180xr8hAgpXw01sXJjCWelmsswuCQQAs%2FIkyS7Elklx2WiE67Q%2F7jqobxevO84ma6DTv5lBdzeZFicDjyZfVu9bb6aFyVpfKBRItRGMNeRn%2Fe%2ByhWF%2BHGPGJoFvTJW7q%2Fn5idsiuEFXQEXmjs6tJ7XDA726bgMvcGrylls4RfX5MU1aBcQFoleLSSRwwZwJ6rkf7kaGaFGVbeE9Sp385%2FZr0UWg%2BvqYUwIH6wZqDDrI67uooI0x49XcUT33yqxsazgFWk5TtOKhQGUEFUPLeH%2BwG84xH4PeZ%2FkA8fDhWpxLUAz6Yk4SJDy9D6LMg2k1NfibtZvW62oh0FdzSaJ7LWxSqdZOFwdLPxTkRHjmodp39VlWlBhggY1ny%2Fkc5MK6U3mGBVjw0ActW0m2HANirxwS8%2BLZErUA%2BGQUvWPLaxe89zCyYQ0m%2BeLpiWr1u5%2BT91kxJ1U4VdWDo%2Fe%2Brhj%2F9AKVNGRn1KOle69mw8JYRyRxhTUnw%2BVUqxKurZyBuybd8inn7%2F3Gn93EejLumI0H3wac7aycmhGgk5jv0sC%2BWMjSOBLpGY%2BtxBlXzEw7nXktCoovK00A6PPPoc31GZScvO6mdrlQyWKCScBJDGTMIW9%2Bb0GOqUB5kHpUZAmvrAjnByr8ged1mUp47GgpP2jxmj3GJ4b5qyPsq2MaKTxT6Eef29tdEOagZMo0yse2Nw7bdG5zMGDMa1DpGBFfVV0vaaSOdWqdVWRS1YH9rTGcCBH50luBA7gwflya%2FE9OkrMOQ%2FQdGehF%2Bb6mYRw%2F2NrFX0t2BECsaXQnvIW2wql%2B4iC3xeVxIvLG68KTW0EQHgRVUW5CDU7hoWwerxe&X-Amz-Signature=71dd67b2ee67b2d37ec26ada10cba07d75139f9e4f42484ebd67112eb4d30a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

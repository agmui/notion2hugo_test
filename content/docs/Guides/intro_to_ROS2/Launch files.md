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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYAOU46%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFZurQo1HNF%2BmXEVL6gqnqMdP4wjrzpCeQfzq48ML0aAiAQsL%2BuC1tsN6om0LTHK4hyXkPP29%2BmUqxh0N%2FATcJqECr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMdeWxqupgsJBpUnDaKtwDw9MDCwDalyoFpwmXhzZnSTELNQrh%2B%2FLK6bFUues9vGnY1yOZOABNh8ceBj0FZ5Aw%2BdDp97kiCs2yEBin5QE%2Bn%2BCQUJFao7mSOqtzMKvFesG4914ahaWmlL6sPlh%2BP0mhqVJYb9SmrpKAunJ8cVHA0genL1J5S7VDrdkDlXf9dy5av4b6e9gV0F6gXrVh%2FSdhHLhxIXY3O1suxE34h%2BCU4rRFZxjFtBknmLmvMEhaKm0ku74M52h7%2BOFenvYf4YCgWkkqou%2FsB1z%2BNq98NITTtG4k0I24wGAU9bYsNUQ3ct5vQqd7Q52cB5qZj1JXV2Ql3jbjLs1aqRuz5%2Bo7TgSJSgyT5ZZLQdIHKU267Ir8lBlTLwWlgLV3DsjxXUE35Paz5%2B%2FetNlVWJs9zpGZ0NMsl2gnzCSlETfvdpaWI%2F7Q4XEn2%2BJOYtAj%2Bbg5vtegZhILQhFDnl5CrvBJy4zl2PV2Ifvg03Uqg2hwBG%2FceHE1uRZpWYsb6jsyt2%2BdWj6QH%2Fd7bC4anKCiUiE5rbSm47PjWsYjkY%2FGY1Iig1509yMR3rSFuLUXMttEAz94fq6RGVXH0rnTI0qSSSbMFqmk2jQLuaX8qGi%2BgyGPwyxaImVsNHF5T0jBOnHUOQ9u32AwvZe%2FvwY6pgFCUqstvLV6XCaVvSYuWvto%2FgfUHBttldE1s31eE9sG9NSK15X7T6I7l46KniFn%2FNcAU6aAZODbvksN4jiCfCLeUq%2FXFaaqJ3t5Slp9rFDHOqBU6jUQoR3x78r6KqCRsNflTMzb8b9UJ8%2BEW6OkXbNXqHgur71ECSHYQZF4QUKWvfepBnj4gHBvzt6TXvk0RBaMpnuEoxdoRGaI%2B8d0%2BmnQ0F7tyGkm&X-Amz-Signature=0903e1c9e6954c57b5b68f5109ea7ebb29b907252851047467bd1d60b7d823ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYAOU46%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFZurQo1HNF%2BmXEVL6gqnqMdP4wjrzpCeQfzq48ML0aAiAQsL%2BuC1tsN6om0LTHK4hyXkPP29%2BmUqxh0N%2FATcJqECr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMdeWxqupgsJBpUnDaKtwDw9MDCwDalyoFpwmXhzZnSTELNQrh%2B%2FLK6bFUues9vGnY1yOZOABNh8ceBj0FZ5Aw%2BdDp97kiCs2yEBin5QE%2Bn%2BCQUJFao7mSOqtzMKvFesG4914ahaWmlL6sPlh%2BP0mhqVJYb9SmrpKAunJ8cVHA0genL1J5S7VDrdkDlXf9dy5av4b6e9gV0F6gXrVh%2FSdhHLhxIXY3O1suxE34h%2BCU4rRFZxjFtBknmLmvMEhaKm0ku74M52h7%2BOFenvYf4YCgWkkqou%2FsB1z%2BNq98NITTtG4k0I24wGAU9bYsNUQ3ct5vQqd7Q52cB5qZj1JXV2Ql3jbjLs1aqRuz5%2Bo7TgSJSgyT5ZZLQdIHKU267Ir8lBlTLwWlgLV3DsjxXUE35Paz5%2B%2FetNlVWJs9zpGZ0NMsl2gnzCSlETfvdpaWI%2F7Q4XEn2%2BJOYtAj%2Bbg5vtegZhILQhFDnl5CrvBJy4zl2PV2Ifvg03Uqg2hwBG%2FceHE1uRZpWYsb6jsyt2%2BdWj6QH%2Fd7bC4anKCiUiE5rbSm47PjWsYjkY%2FGY1Iig1509yMR3rSFuLUXMttEAz94fq6RGVXH0rnTI0qSSSbMFqmk2jQLuaX8qGi%2BgyGPwyxaImVsNHF5T0jBOnHUOQ9u32AwvZe%2FvwY6pgFCUqstvLV6XCaVvSYuWvto%2FgfUHBttldE1s31eE9sG9NSK15X7T6I7l46KniFn%2FNcAU6aAZODbvksN4jiCfCLeUq%2FXFaaqJ3t5Slp9rFDHOqBU6jUQoR3x78r6KqCRsNflTMzb8b9UJ8%2BEW6OkXbNXqHgur71ECSHYQZF4QUKWvfepBnj4gHBvzt6TXvk0RBaMpnuEoxdoRGaI%2B8d0%2BmnQ0F7tyGkm&X-Amz-Signature=89c20e5bcb691e9d2ebab322bf26ad979d50470fd52f2793ab03d9cd02c5d879&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYAOU46%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T121454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFZurQo1HNF%2BmXEVL6gqnqMdP4wjrzpCeQfzq48ML0aAiAQsL%2BuC1tsN6om0LTHK4hyXkPP29%2BmUqxh0N%2FATcJqECr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMdeWxqupgsJBpUnDaKtwDw9MDCwDalyoFpwmXhzZnSTELNQrh%2B%2FLK6bFUues9vGnY1yOZOABNh8ceBj0FZ5Aw%2BdDp97kiCs2yEBin5QE%2Bn%2BCQUJFao7mSOqtzMKvFesG4914ahaWmlL6sPlh%2BP0mhqVJYb9SmrpKAunJ8cVHA0genL1J5S7VDrdkDlXf9dy5av4b6e9gV0F6gXrVh%2FSdhHLhxIXY3O1suxE34h%2BCU4rRFZxjFtBknmLmvMEhaKm0ku74M52h7%2BOFenvYf4YCgWkkqou%2FsB1z%2BNq98NITTtG4k0I24wGAU9bYsNUQ3ct5vQqd7Q52cB5qZj1JXV2Ql3jbjLs1aqRuz5%2Bo7TgSJSgyT5ZZLQdIHKU267Ir8lBlTLwWlgLV3DsjxXUE35Paz5%2B%2FetNlVWJs9zpGZ0NMsl2gnzCSlETfvdpaWI%2F7Q4XEn2%2BJOYtAj%2Bbg5vtegZhILQhFDnl5CrvBJy4zl2PV2Ifvg03Uqg2hwBG%2FceHE1uRZpWYsb6jsyt2%2BdWj6QH%2Fd7bC4anKCiUiE5rbSm47PjWsYjkY%2FGY1Iig1509yMR3rSFuLUXMttEAz94fq6RGVXH0rnTI0qSSSbMFqmk2jQLuaX8qGi%2BgyGPwyxaImVsNHF5T0jBOnHUOQ9u32AwvZe%2FvwY6pgFCUqstvLV6XCaVvSYuWvto%2FgfUHBttldE1s31eE9sG9NSK15X7T6I7l46KniFn%2FNcAU6aAZODbvksN4jiCfCLeUq%2FXFaaqJ3t5Slp9rFDHOqBU6jUQoR3x78r6KqCRsNflTMzb8b9UJ8%2BEW6OkXbNXqHgur71ECSHYQZF4QUKWvfepBnj4gHBvzt6TXvk0RBaMpnuEoxdoRGaI%2B8d0%2BmnQ0F7tyGkm&X-Amz-Signature=1b0a03c7680f0d1a75d14fc34aa9d29ffcc08b8ee4cc849dd0db185d97bec6d5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

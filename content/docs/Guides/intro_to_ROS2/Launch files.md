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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY332FUI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoGZRguAWUO7QNc9x4Iu69D3H7Dz6VNU1BxxbgDhv04AiBvqA3%2FvOAI9q%2BeEJ15NgTR0WbGO51ZDFMYnQM8tSOZ2Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMAawOCXVf%2FboxZZJoKtwDTevRQT8%2BIenZCb7qJcfP%2F3wpBWSoI3tz9N87MYzfDAnDwtx%2FhDJSxyTxkWuX%2BbuQba20QEZpZHAbzQrBftxjyYlSbJvqdw339dCajK9j6iW5zWe3T9wtDyeoS7vx7n6mJUhx2KZTmslQwUXgOim7q6FQO5ENZQ7nQNMxS1nNytHTnHQ0ZDyqmZx8SlGVHp79aONvM87KU5Ywgaxq4Qmrf%2BDmYRpGnuTSEJ%2B%2BRupYwhtJ2EBUGlg06o8r1HFE0KCQyuXJC7f9qrApWf3X3Rxi9np8g8ys7rNGYMl%2FY1qVzREiYAfOHjMTNUT7XVaGFt3mRIfuBWq8PJ8tQPxgIW%2BmWIkoh6waLvG5uVe2aZ7Qr9KbDy9KumldQVGI3YlNrQQ4eaUXGXknrZc%2Fw3Tu0B0%2BEIl3pJC9ezCBS7yIsJ14R8pDgdiCWsPRysaT3UB6XylGktTT57kDgpbXZzF43xq4rqTK3EyyAJ8E8CBa78wlIP7qZcUNbBIlfiwQav1To1VWmat7%2BxDUGrD13LoV%2Fag91D38AM6lSijvzo1xGTZJvbbrfDqYBXbEzyK5dsJ7thUB9gihVVN5FZ4VdWWW6LNGDngOToDWiTXMuU5XzZItiCb%2BqP%2BCvM2hheszIgMwgpelvgY6pgFcXhNLaxwiyU9GOa1BiemCC2GcDT%2Fnf8LAWVL8vn9DluoPflqHt2mNU3f%2FHwFALpKO4VorHn%2B3ZFzfvk%2F47APa4DJ8t8pQ6rRxaLTYUbhxh%2B4jcvUKt1CdxfvW5lXCiB%2BgBOFzCcMKKyJAVCHGd%2F7hJGYywg2474eMZvx1MIKhvfNC9a5778JkBJJAsk7%2BPYnEWQzJuNN3OiuUKn0ggwFgCJ1QXoNG&X-Amz-Signature=bbd6796a1550ea177fd378e475b712664aa394872a6cb86a92f92b311aca3c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY332FUI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoGZRguAWUO7QNc9x4Iu69D3H7Dz6VNU1BxxbgDhv04AiBvqA3%2FvOAI9q%2BeEJ15NgTR0WbGO51ZDFMYnQM8tSOZ2Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMAawOCXVf%2FboxZZJoKtwDTevRQT8%2BIenZCb7qJcfP%2F3wpBWSoI3tz9N87MYzfDAnDwtx%2FhDJSxyTxkWuX%2BbuQba20QEZpZHAbzQrBftxjyYlSbJvqdw339dCajK9j6iW5zWe3T9wtDyeoS7vx7n6mJUhx2KZTmslQwUXgOim7q6FQO5ENZQ7nQNMxS1nNytHTnHQ0ZDyqmZx8SlGVHp79aONvM87KU5Ywgaxq4Qmrf%2BDmYRpGnuTSEJ%2B%2BRupYwhtJ2EBUGlg06o8r1HFE0KCQyuXJC7f9qrApWf3X3Rxi9np8g8ys7rNGYMl%2FY1qVzREiYAfOHjMTNUT7XVaGFt3mRIfuBWq8PJ8tQPxgIW%2BmWIkoh6waLvG5uVe2aZ7Qr9KbDy9KumldQVGI3YlNrQQ4eaUXGXknrZc%2Fw3Tu0B0%2BEIl3pJC9ezCBS7yIsJ14R8pDgdiCWsPRysaT3UB6XylGktTT57kDgpbXZzF43xq4rqTK3EyyAJ8E8CBa78wlIP7qZcUNbBIlfiwQav1To1VWmat7%2BxDUGrD13LoV%2Fag91D38AM6lSijvzo1xGTZJvbbrfDqYBXbEzyK5dsJ7thUB9gihVVN5FZ4VdWWW6LNGDngOToDWiTXMuU5XzZItiCb%2BqP%2BCvM2hheszIgMwgpelvgY6pgFcXhNLaxwiyU9GOa1BiemCC2GcDT%2Fnf8LAWVL8vn9DluoPflqHt2mNU3f%2FHwFALpKO4VorHn%2B3ZFzfvk%2F47APa4DJ8t8pQ6rRxaLTYUbhxh%2B4jcvUKt1CdxfvW5lXCiB%2BgBOFzCcMKKyJAVCHGd%2F7hJGYywg2474eMZvx1MIKhvfNC9a5778JkBJJAsk7%2BPYnEWQzJuNN3OiuUKn0ggwFgCJ1QXoNG&X-Amz-Signature=eae0d5cc8c8163a11411c38d5d4f5a2e0f93f3fd64648207634c959061019144&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY332FUI%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoGZRguAWUO7QNc9x4Iu69D3H7Dz6VNU1BxxbgDhv04AiBvqA3%2FvOAI9q%2BeEJ15NgTR0WbGO51ZDFMYnQM8tSOZ2Sr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMAawOCXVf%2FboxZZJoKtwDTevRQT8%2BIenZCb7qJcfP%2F3wpBWSoI3tz9N87MYzfDAnDwtx%2FhDJSxyTxkWuX%2BbuQba20QEZpZHAbzQrBftxjyYlSbJvqdw339dCajK9j6iW5zWe3T9wtDyeoS7vx7n6mJUhx2KZTmslQwUXgOim7q6FQO5ENZQ7nQNMxS1nNytHTnHQ0ZDyqmZx8SlGVHp79aONvM87KU5Ywgaxq4Qmrf%2BDmYRpGnuTSEJ%2B%2BRupYwhtJ2EBUGlg06o8r1HFE0KCQyuXJC7f9qrApWf3X3Rxi9np8g8ys7rNGYMl%2FY1qVzREiYAfOHjMTNUT7XVaGFt3mRIfuBWq8PJ8tQPxgIW%2BmWIkoh6waLvG5uVe2aZ7Qr9KbDy9KumldQVGI3YlNrQQ4eaUXGXknrZc%2Fw3Tu0B0%2BEIl3pJC9ezCBS7yIsJ14R8pDgdiCWsPRysaT3UB6XylGktTT57kDgpbXZzF43xq4rqTK3EyyAJ8E8CBa78wlIP7qZcUNbBIlfiwQav1To1VWmat7%2BxDUGrD13LoV%2Fag91D38AM6lSijvzo1xGTZJvbbrfDqYBXbEzyK5dsJ7thUB9gihVVN5FZ4VdWWW6LNGDngOToDWiTXMuU5XzZItiCb%2BqP%2BCvM2hheszIgMwgpelvgY6pgFcXhNLaxwiyU9GOa1BiemCC2GcDT%2Fnf8LAWVL8vn9DluoPflqHt2mNU3f%2FHwFALpKO4VorHn%2B3ZFzfvk%2F47APa4DJ8t8pQ6rRxaLTYUbhxh%2B4jcvUKt1CdxfvW5lXCiB%2BgBOFzCcMKKyJAVCHGd%2F7hJGYywg2474eMZvx1MIKhvfNC9a5778JkBJJAsk7%2BPYnEWQzJuNN3OiuUKn0ggwFgCJ1QXoNG&X-Amz-Signature=8a9c16f030871a24ee32d3b638812738cd1509fc63ef0d26e7d337eadd2cb305&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

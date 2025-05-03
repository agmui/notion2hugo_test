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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6JYOGV5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDusc7RC1vbHy3m28oGyf%2BUfJ6alnlLJKR3FU96OmtRfgIhAP1D1gy7ccUo2msGZPBkqF3USosquCa%2B4O8sUwSno64UKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY7pZfAZ1j%2FSzC6ikq3ANx%2F04EQNRii7aRfYRVEc9BkZGs2qf9XWW1QitO1IjwsBWRfRA%2FsQzG2TpbivTTEC9nVbCdP9CIESGwf9YThl7a%2Bozr0ouRw%2FgRbhcDXo6A%2Fx8qu4BIZUzKpJU44I%2F4I%2FlCfZJ6C9WMsHslk6KwMySqnu6lf1hBt7l5gqpYYkhiThwlgXVJ3LtQhenOyNmW8OSY08dN7p4eAO9TMxq%2B8FOm6Tuy2ToHysRNhp%2FkAjd1tNV8lSCAfOkdotkKdEXrW2nJ%2B7jUXZ5kvQ6NUt1KhMmDtMoJpeLLCRwcgelQ%2FuZHNeBZ8H0%2F1yTVs3aY7P1oa0qm%2FEHaHQ1DebfjW9Lm6Bk0wqJFrba9QErOFM7MGjuZnbOij8YJUHKenIoBCA1jNGq2rHNijWjUihsZarpq8Ucja583kBkODjhrQow1IysT3DDJAtwBJij%2FyocladGvCZwiIAg9kl%2BCJ6n3idj5X7171Zpm1IUFEGBfQ9HAsl6Bz4yiQRNP6qmieeaghmbvnvXDQUj9cG4yo5uBzqHdeyo%2FCUCHTHclXZuH72bxTcZRWBaryXiAyXNV8P53kubm1UFDYq8w4y37XkVDbC6ebkXenuw%2FCHZ1%2B3BI6L5ttdybf5IFYdfHL5P9ntCacjDcs9rABjqkAUQXBTfCIBMK8UJD%2Bn6ytlVXXaIm5QWFNoQJdp29QzwukGrc2%2B%2FpnRidvSGw6FwMHA7BGX9vywIS7Sz%2FyPblRO864Mj0LCH2Wukv3tRHw6F0x2OGDsbLpkJzzOX13vqqAujMtO3U%2FGDYKJOfCWvmSoIyj3C8yrrWUoHAyJWKDT0G7OfdwzvKKIwYc%2BiYPbZKjMbc6q54szyZfJ9C9tHVRb1HKVLu&X-Amz-Signature=04a1cd2ed7a0b478f01822f97ca9ce2dd845d2830322815671b204340ff715f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6JYOGV5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDusc7RC1vbHy3m28oGyf%2BUfJ6alnlLJKR3FU96OmtRfgIhAP1D1gy7ccUo2msGZPBkqF3USosquCa%2B4O8sUwSno64UKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY7pZfAZ1j%2FSzC6ikq3ANx%2F04EQNRii7aRfYRVEc9BkZGs2qf9XWW1QitO1IjwsBWRfRA%2FsQzG2TpbivTTEC9nVbCdP9CIESGwf9YThl7a%2Bozr0ouRw%2FgRbhcDXo6A%2Fx8qu4BIZUzKpJU44I%2F4I%2FlCfZJ6C9WMsHslk6KwMySqnu6lf1hBt7l5gqpYYkhiThwlgXVJ3LtQhenOyNmW8OSY08dN7p4eAO9TMxq%2B8FOm6Tuy2ToHysRNhp%2FkAjd1tNV8lSCAfOkdotkKdEXrW2nJ%2B7jUXZ5kvQ6NUt1KhMmDtMoJpeLLCRwcgelQ%2FuZHNeBZ8H0%2F1yTVs3aY7P1oa0qm%2FEHaHQ1DebfjW9Lm6Bk0wqJFrba9QErOFM7MGjuZnbOij8YJUHKenIoBCA1jNGq2rHNijWjUihsZarpq8Ucja583kBkODjhrQow1IysT3DDJAtwBJij%2FyocladGvCZwiIAg9kl%2BCJ6n3idj5X7171Zpm1IUFEGBfQ9HAsl6Bz4yiQRNP6qmieeaghmbvnvXDQUj9cG4yo5uBzqHdeyo%2FCUCHTHclXZuH72bxTcZRWBaryXiAyXNV8P53kubm1UFDYq8w4y37XkVDbC6ebkXenuw%2FCHZ1%2B3BI6L5ttdybf5IFYdfHL5P9ntCacjDcs9rABjqkAUQXBTfCIBMK8UJD%2Bn6ytlVXXaIm5QWFNoQJdp29QzwukGrc2%2B%2FpnRidvSGw6FwMHA7BGX9vywIS7Sz%2FyPblRO864Mj0LCH2Wukv3tRHw6F0x2OGDsbLpkJzzOX13vqqAujMtO3U%2FGDYKJOfCWvmSoIyj3C8yrrWUoHAyJWKDT0G7OfdwzvKKIwYc%2BiYPbZKjMbc6q54szyZfJ9C9tHVRb1HKVLu&X-Amz-Signature=4da1cbb9f9caf0785da7694b49697fc4c43d5c5e3c5aa14f99bb56e341d63bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6JYOGV5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDusc7RC1vbHy3m28oGyf%2BUfJ6alnlLJKR3FU96OmtRfgIhAP1D1gy7ccUo2msGZPBkqF3USosquCa%2B4O8sUwSno64UKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyY7pZfAZ1j%2FSzC6ikq3ANx%2F04EQNRii7aRfYRVEc9BkZGs2qf9XWW1QitO1IjwsBWRfRA%2FsQzG2TpbivTTEC9nVbCdP9CIESGwf9YThl7a%2Bozr0ouRw%2FgRbhcDXo6A%2Fx8qu4BIZUzKpJU44I%2F4I%2FlCfZJ6C9WMsHslk6KwMySqnu6lf1hBt7l5gqpYYkhiThwlgXVJ3LtQhenOyNmW8OSY08dN7p4eAO9TMxq%2B8FOm6Tuy2ToHysRNhp%2FkAjd1tNV8lSCAfOkdotkKdEXrW2nJ%2B7jUXZ5kvQ6NUt1KhMmDtMoJpeLLCRwcgelQ%2FuZHNeBZ8H0%2F1yTVs3aY7P1oa0qm%2FEHaHQ1DebfjW9Lm6Bk0wqJFrba9QErOFM7MGjuZnbOij8YJUHKenIoBCA1jNGq2rHNijWjUihsZarpq8Ucja583kBkODjhrQow1IysT3DDJAtwBJij%2FyocladGvCZwiIAg9kl%2BCJ6n3idj5X7171Zpm1IUFEGBfQ9HAsl6Bz4yiQRNP6qmieeaghmbvnvXDQUj9cG4yo5uBzqHdeyo%2FCUCHTHclXZuH72bxTcZRWBaryXiAyXNV8P53kubm1UFDYq8w4y37XkVDbC6ebkXenuw%2FCHZ1%2B3BI6L5ttdybf5IFYdfHL5P9ntCacjDcs9rABjqkAUQXBTfCIBMK8UJD%2Bn6ytlVXXaIm5QWFNoQJdp29QzwukGrc2%2B%2FpnRidvSGw6FwMHA7BGX9vywIS7Sz%2FyPblRO864Mj0LCH2Wukv3tRHw6F0x2OGDsbLpkJzzOX13vqqAujMtO3U%2FGDYKJOfCWvmSoIyj3C8yrrWUoHAyJWKDT0G7OfdwzvKKIwYc%2BiYPbZKjMbc6q54szyZfJ9C9tHVRb1HKVLu&X-Amz-Signature=4cf0bb001ac5cc07deb3cba9ce9318100690f7328955f9732c515fdcd9f37e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

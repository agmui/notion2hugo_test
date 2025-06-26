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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDELFXO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBzFn9naiwMnXQ%2BnLhdFXcgX27o9bapTMER60dbRXNXKAiByHmh3WlemG4rKBNn5Tf9QKJTk8O93X1w2T2wusVUtAir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMJPBLWvqqgRkn5a%2F8KtwDJU8Y4%2F7gf%2Bk1LHXGKOziqhjVxW62M%2FluC6LW1hioloi2cGLDqv%2B6vlvmxbzCZbv6jHHyD8KC1Vm7c%2BJzEkUuKKnH7QIBJ2uFjwV00nagcrskMo9yDa8fDXzdxYi5gjO8ZNA%2F%2FlTRRkkIp%2FbJVA%2BFM2OE1N05WwIuB885Qj1%2FLpr0mfG4b1Js24R5UC90FoIezLQvHEy9GhkYORiUo%2FjHSEXCBrqohcPO7ZTE99RHl6%2BttigPBt9IMU2RqzG55kzsbwz17KbByvLEf1cnhphoLnZ2vafJ15coRGpoJTTC9U6FFx1EoJtTYbB4k%2FKP2OmIppodXhb7zQeWhVJCAtpqMY%2Bkv5HXKmhkXD5EecKRhhQAXuPJsaKRINqZOkvLbda9n1K%2BD9suDlmFiv2P3K2TRKHtOi5SNCuVn%2FwAhNflgWVt4cX0e%2B%2BaBYfuZEO8xZ3vGu8vn%2BYMofUCgGQ%2BXBLiA0vcch9B0L4O14wveICTcAIXVtk672WB2F5EzmbIHQT3joz9c%2FxAxs9dNl%2Be%2B2WbQdnDKzo3k5ZlvYrW%2BmISTNBgbqBBPPM5YrxnWRKW9VpEPalon95Hq%2BbfxZtIwuuo7SCWhQ8RHlsGGVOpHyliQ%2FwkDRarOAH5Q4sm7g8wrvL0wgY6pgGdBFFu9PBQklFZSkPLbHhmoyZQnEAX7OmE3F8bR%2BEhHnQQx7HLEUXBQuknRPNsF5jfgxt2FRXfPgZ5GvmERu6ORAe2L5cVc20Iyc8mvVrZTLWjZ9TNbPNfPI%2BDctdeRbIPbi10WbcP5%2F0pXsCcsh3RTfbx0apLcGdPgYV1IqnndRRqDVAhE5fU68NRpGz1q71HMlo7NMZibPQHgurzCMbq25i17uFz&X-Amz-Signature=4f9b1dbba580a3c9bd4ae8c4e6fd29eb762ac1df60eee2d76ef0db59f2955f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDELFXO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBzFn9naiwMnXQ%2BnLhdFXcgX27o9bapTMER60dbRXNXKAiByHmh3WlemG4rKBNn5Tf9QKJTk8O93X1w2T2wusVUtAir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMJPBLWvqqgRkn5a%2F8KtwDJU8Y4%2F7gf%2Bk1LHXGKOziqhjVxW62M%2FluC6LW1hioloi2cGLDqv%2B6vlvmxbzCZbv6jHHyD8KC1Vm7c%2BJzEkUuKKnH7QIBJ2uFjwV00nagcrskMo9yDa8fDXzdxYi5gjO8ZNA%2F%2FlTRRkkIp%2FbJVA%2BFM2OE1N05WwIuB885Qj1%2FLpr0mfG4b1Js24R5UC90FoIezLQvHEy9GhkYORiUo%2FjHSEXCBrqohcPO7ZTE99RHl6%2BttigPBt9IMU2RqzG55kzsbwz17KbByvLEf1cnhphoLnZ2vafJ15coRGpoJTTC9U6FFx1EoJtTYbB4k%2FKP2OmIppodXhb7zQeWhVJCAtpqMY%2Bkv5HXKmhkXD5EecKRhhQAXuPJsaKRINqZOkvLbda9n1K%2BD9suDlmFiv2P3K2TRKHtOi5SNCuVn%2FwAhNflgWVt4cX0e%2B%2BaBYfuZEO8xZ3vGu8vn%2BYMofUCgGQ%2BXBLiA0vcch9B0L4O14wveICTcAIXVtk672WB2F5EzmbIHQT3joz9c%2FxAxs9dNl%2Be%2B2WbQdnDKzo3k5ZlvYrW%2BmISTNBgbqBBPPM5YrxnWRKW9VpEPalon95Hq%2BbfxZtIwuuo7SCWhQ8RHlsGGVOpHyliQ%2FwkDRarOAH5Q4sm7g8wrvL0wgY6pgGdBFFu9PBQklFZSkPLbHhmoyZQnEAX7OmE3F8bR%2BEhHnQQx7HLEUXBQuknRPNsF5jfgxt2FRXfPgZ5GvmERu6ORAe2L5cVc20Iyc8mvVrZTLWjZ9TNbPNfPI%2BDctdeRbIPbi10WbcP5%2F0pXsCcsh3RTfbx0apLcGdPgYV1IqnndRRqDVAhE5fU68NRpGz1q71HMlo7NMZibPQHgurzCMbq25i17uFz&X-Amz-Signature=558a64e78aa957782f4f8bbc576062ee4027e69ed1d83ded92636e67a36ebd67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLDELFXO%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIBzFn9naiwMnXQ%2BnLhdFXcgX27o9bapTMER60dbRXNXKAiByHmh3WlemG4rKBNn5Tf9QKJTk8O93X1w2T2wusVUtAir%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMJPBLWvqqgRkn5a%2F8KtwDJU8Y4%2F7gf%2Bk1LHXGKOziqhjVxW62M%2FluC6LW1hioloi2cGLDqv%2B6vlvmxbzCZbv6jHHyD8KC1Vm7c%2BJzEkUuKKnH7QIBJ2uFjwV00nagcrskMo9yDa8fDXzdxYi5gjO8ZNA%2F%2FlTRRkkIp%2FbJVA%2BFM2OE1N05WwIuB885Qj1%2FLpr0mfG4b1Js24R5UC90FoIezLQvHEy9GhkYORiUo%2FjHSEXCBrqohcPO7ZTE99RHl6%2BttigPBt9IMU2RqzG55kzsbwz17KbByvLEf1cnhphoLnZ2vafJ15coRGpoJTTC9U6FFx1EoJtTYbB4k%2FKP2OmIppodXhb7zQeWhVJCAtpqMY%2Bkv5HXKmhkXD5EecKRhhQAXuPJsaKRINqZOkvLbda9n1K%2BD9suDlmFiv2P3K2TRKHtOi5SNCuVn%2FwAhNflgWVt4cX0e%2B%2BaBYfuZEO8xZ3vGu8vn%2BYMofUCgGQ%2BXBLiA0vcch9B0L4O14wveICTcAIXVtk672WB2F5EzmbIHQT3joz9c%2FxAxs9dNl%2Be%2B2WbQdnDKzo3k5ZlvYrW%2BmISTNBgbqBBPPM5YrxnWRKW9VpEPalon95Hq%2BbfxZtIwuuo7SCWhQ8RHlsGGVOpHyliQ%2FwkDRarOAH5Q4sm7g8wrvL0wgY6pgGdBFFu9PBQklFZSkPLbHhmoyZQnEAX7OmE3F8bR%2BEhHnQQx7HLEUXBQuknRPNsF5jfgxt2FRXfPgZ5GvmERu6ORAe2L5cVc20Iyc8mvVrZTLWjZ9TNbPNfPI%2BDctdeRbIPbi10WbcP5%2F0pXsCcsh3RTfbx0apLcGdPgYV1IqnndRRqDVAhE5fU68NRpGz1q71HMlo7NMZibPQHgurzCMbq25i17uFz&X-Amz-Signature=a5162916bc9ac921609d6f8541e99b28796dae95dead8a0c977564c5a4b0e2aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

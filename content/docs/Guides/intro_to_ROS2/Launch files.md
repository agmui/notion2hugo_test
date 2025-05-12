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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466435YOKQH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIEghzwx0u4YIAdVP1ftciGkXsNsqXmVm6NJ2Iuu4GSl%2BAiEAp9%2FGNAlvrAGw92vi97rdZUm82d6qaQ3zDMOH7i1EL7gqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPv5JtibUMq%2FBLM6dCrcA58FuAlF%2FpJBaaccjs7a6a5umaWl5aYnqawadcnatF0YssTQwpDuyDAHj5%2FCusSwGXv%2BZDA%2BB%2BtAE%2Be6e3olDFPfiwD%2FFpO1%2BgmQKiSrTLuSXZnrgYzIAJA0kITuM5DSVmVuZoji8NO1QNY5bGePyYqfZohjCKfOtiYzTP3AkqyAc4m6mN7hq5eFPuN2p5cW9KkSGNP7oVa4v7Sg5sDYEJCNJ5dVQbXHyZY%2FSqNhYnMAtpswqDdjA5%2FhUJSahoUK8nWWKexdvrcEcSn61jXtR6N5gtu7XLMp%2FrHSyD87LLK%2F633agALV%2FZONtn%2B8l4%2BXB1C9S1F6xuVqR3ner8ZeNbB99G50FpQ16lBsuCe42Ys0itGpPYtt2uZ5f4B2zrp1HD3qpex4LmNlaQfchd8sXpzAYe%2BA4tgCc3%2F1VVwUTbqpKIOm%2Fo0eTgD0dTvMVm0U1u0qqpdQDMGxVKfw5Uzpxdq3CB0kJQr8MhYcjth9ARlYcIF01ENxuNh2wfXeN%2BNXtQUkzHPz7ieO%2FfYtvKUCNSdZZvE%2FORwNkT4xUeFperJDQVf8RyDlw%2FMB%2BaKimpafvW6ympYL5jPPDXpwv%2BC3PCRRf2e%2B75KmwoYRUGlzzwuKr4Ow6PsPDM6uBJHjMMnDicEGOqUBSHaZR6o87AIgxvqR6octrPTfDk4D7cQEZclVEwFFqimeS2V%2Fh4ndmmj9husU3kft0gMUvt9TiYR6%2BTdUewfwoknpzm5r1wxd72Fv23oqh4Dnd5XAM4jI%2Bau1IEw9BwbhrpUuwvS0WQKxKixCEn0SQEDNmyXVZ3rmxeGxI1Ohgh1ba90s%2F5T22wqrLQy1E%2BMrg2gnFRJpTDvmcBjnGMlSMBbvLf9X&X-Amz-Signature=0dac7a1a81d24735ecd0b2ff7f6b33db9996ff0a9d948e10aa926bba8acc0090&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466435YOKQH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIEghzwx0u4YIAdVP1ftciGkXsNsqXmVm6NJ2Iuu4GSl%2BAiEAp9%2FGNAlvrAGw92vi97rdZUm82d6qaQ3zDMOH7i1EL7gqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPv5JtibUMq%2FBLM6dCrcA58FuAlF%2FpJBaaccjs7a6a5umaWl5aYnqawadcnatF0YssTQwpDuyDAHj5%2FCusSwGXv%2BZDA%2BB%2BtAE%2Be6e3olDFPfiwD%2FFpO1%2BgmQKiSrTLuSXZnrgYzIAJA0kITuM5DSVmVuZoji8NO1QNY5bGePyYqfZohjCKfOtiYzTP3AkqyAc4m6mN7hq5eFPuN2p5cW9KkSGNP7oVa4v7Sg5sDYEJCNJ5dVQbXHyZY%2FSqNhYnMAtpswqDdjA5%2FhUJSahoUK8nWWKexdvrcEcSn61jXtR6N5gtu7XLMp%2FrHSyD87LLK%2F633agALV%2FZONtn%2B8l4%2BXB1C9S1F6xuVqR3ner8ZeNbB99G50FpQ16lBsuCe42Ys0itGpPYtt2uZ5f4B2zrp1HD3qpex4LmNlaQfchd8sXpzAYe%2BA4tgCc3%2F1VVwUTbqpKIOm%2Fo0eTgD0dTvMVm0U1u0qqpdQDMGxVKfw5Uzpxdq3CB0kJQr8MhYcjth9ARlYcIF01ENxuNh2wfXeN%2BNXtQUkzHPz7ieO%2FfYtvKUCNSdZZvE%2FORwNkT4xUeFperJDQVf8RyDlw%2FMB%2BaKimpafvW6ympYL5jPPDXpwv%2BC3PCRRf2e%2B75KmwoYRUGlzzwuKr4Ow6PsPDM6uBJHjMMnDicEGOqUBSHaZR6o87AIgxvqR6octrPTfDk4D7cQEZclVEwFFqimeS2V%2Fh4ndmmj9husU3kft0gMUvt9TiYR6%2BTdUewfwoknpzm5r1wxd72Fv23oqh4Dnd5XAM4jI%2Bau1IEw9BwbhrpUuwvS0WQKxKixCEn0SQEDNmyXVZ3rmxeGxI1Ohgh1ba90s%2F5T22wqrLQy1E%2BMrg2gnFRJpTDvmcBjnGMlSMBbvLf9X&X-Amz-Signature=ca487f9027fff7a6e6435348367874c94394d08e8cfa44f3e7e5b9d736b7590d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466435YOKQH%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIEghzwx0u4YIAdVP1ftciGkXsNsqXmVm6NJ2Iuu4GSl%2BAiEAp9%2FGNAlvrAGw92vi97rdZUm82d6qaQ3zDMOH7i1EL7gqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPv5JtibUMq%2FBLM6dCrcA58FuAlF%2FpJBaaccjs7a6a5umaWl5aYnqawadcnatF0YssTQwpDuyDAHj5%2FCusSwGXv%2BZDA%2BB%2BtAE%2Be6e3olDFPfiwD%2FFpO1%2BgmQKiSrTLuSXZnrgYzIAJA0kITuM5DSVmVuZoji8NO1QNY5bGePyYqfZohjCKfOtiYzTP3AkqyAc4m6mN7hq5eFPuN2p5cW9KkSGNP7oVa4v7Sg5sDYEJCNJ5dVQbXHyZY%2FSqNhYnMAtpswqDdjA5%2FhUJSahoUK8nWWKexdvrcEcSn61jXtR6N5gtu7XLMp%2FrHSyD87LLK%2F633agALV%2FZONtn%2B8l4%2BXB1C9S1F6xuVqR3ner8ZeNbB99G50FpQ16lBsuCe42Ys0itGpPYtt2uZ5f4B2zrp1HD3qpex4LmNlaQfchd8sXpzAYe%2BA4tgCc3%2F1VVwUTbqpKIOm%2Fo0eTgD0dTvMVm0U1u0qqpdQDMGxVKfw5Uzpxdq3CB0kJQr8MhYcjth9ARlYcIF01ENxuNh2wfXeN%2BNXtQUkzHPz7ieO%2FfYtvKUCNSdZZvE%2FORwNkT4xUeFperJDQVf8RyDlw%2FMB%2BaKimpafvW6ympYL5jPPDXpwv%2BC3PCRRf2e%2B75KmwoYRUGlzzwuKr4Ow6PsPDM6uBJHjMMnDicEGOqUBSHaZR6o87AIgxvqR6octrPTfDk4D7cQEZclVEwFFqimeS2V%2Fh4ndmmj9husU3kft0gMUvt9TiYR6%2BTdUewfwoknpzm5r1wxd72Fv23oqh4Dnd5XAM4jI%2Bau1IEw9BwbhrpUuwvS0WQKxKixCEn0SQEDNmyXVZ3rmxeGxI1Ohgh1ba90s%2F5T22wqrLQy1E%2BMrg2gnFRJpTDvmcBjnGMlSMBbvLf9X&X-Amz-Signature=e3f49aee842d68a3a655388ad7599b64f5292ff626e576ecc9bb22bbb9295234&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

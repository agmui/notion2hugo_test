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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYT2LOR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDeDlMvt7VOP3jBPWBiKB4FJUaZT4Oiow%2B30EsZ%2FeMmTgIhAL2ytZseOd1Pr6wJwl6qpIzCfqAqxPwr0eNfZ4%2FLH5znKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzzi7o%2Feevtbop5zFgq3ANWamdVbvK4YHhqWN9xMVnn8WTbZOMCnTGm2NT%2FIbsher7YuL9u6TT4hjd14RhuxG%2BkSakEv4Lv5uN8%2F%2Bj24C4jhGqvMibcGcudXkn0d7STylqlfLU8h%2BAx8OpYPE6xE%2BuYJkWlh1l%2FMGInJBpWzfgtEFLAe9qicVweDZyQzbbTqrsP8nfmcIymnUNtMFRQ7dxOvylDZOUqKhuCNy8Wa3WU0jTjSkJGaqkw1z02S%2FdabCihPd0NxnbutHhuKM9QKu1TuOajj%2FpTQ0B5WmbCWEjxE8SzZWxYPUAu1Tlr9E%2Fx3Dfrvo5KmIdwW7EEIwFMjXZrRFbhLbwcuspi9WA9MsRVDSZJQDeVWrhD8JMX49KMvqt5crY8sKN4X35RV4pTgb48Bk%2B0nqow12uwqoaeMrooRhFeVgfP7FXAI2LZMGUfIFa%2BY779trpHRKplJCIxNWmzJnqbXal9LHPvg7WvrSrESlM9Gb4FxfH5dVvdKKlttpm9XEJgUU7L%2FXr%2F0XZHsvMWhqXIggOdPJ82EkhquuJFr9NaGcmGIgro47zDdf6uo4GW3zIgFYLsxZ7Y2hkippc3e4AkIewSIaQ4MydKhiYpwoNycSOFq9d41GiuJZPbYb9M30c3RLUCFtpcTDDDx8%2FABjqkAVJ%2FL7116Gs5RZrajmpVYoDDsUwHHdid07YJOjuL%2F4gwqRR2njIO2RuUvl1ON%2FB%2BWK3GbA8vYaN0Qt%2FFyM2P8X%2BB62o9%2FwEeQc0ctlkomUMf8LynSMUc7lIY1Csxwi66BJAp3pF%2Fgp47nYCPxmXu2G8jAVg7xddZRw7LYOd8a2m87UC30c3V6vOKx1mj4onxwSGa%2FwZ3cIGXzdXiENndrYkOqAlh&X-Amz-Signature=3cbcca69c0e43d8bf2896bb3d8ea2b15967b31734d27b6d3fd35c7425806b6bc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYT2LOR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDeDlMvt7VOP3jBPWBiKB4FJUaZT4Oiow%2B30EsZ%2FeMmTgIhAL2ytZseOd1Pr6wJwl6qpIzCfqAqxPwr0eNfZ4%2FLH5znKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzzi7o%2Feevtbop5zFgq3ANWamdVbvK4YHhqWN9xMVnn8WTbZOMCnTGm2NT%2FIbsher7YuL9u6TT4hjd14RhuxG%2BkSakEv4Lv5uN8%2F%2Bj24C4jhGqvMibcGcudXkn0d7STylqlfLU8h%2BAx8OpYPE6xE%2BuYJkWlh1l%2FMGInJBpWzfgtEFLAe9qicVweDZyQzbbTqrsP8nfmcIymnUNtMFRQ7dxOvylDZOUqKhuCNy8Wa3WU0jTjSkJGaqkw1z02S%2FdabCihPd0NxnbutHhuKM9QKu1TuOajj%2FpTQ0B5WmbCWEjxE8SzZWxYPUAu1Tlr9E%2Fx3Dfrvo5KmIdwW7EEIwFMjXZrRFbhLbwcuspi9WA9MsRVDSZJQDeVWrhD8JMX49KMvqt5crY8sKN4X35RV4pTgb48Bk%2B0nqow12uwqoaeMrooRhFeVgfP7FXAI2LZMGUfIFa%2BY779trpHRKplJCIxNWmzJnqbXal9LHPvg7WvrSrESlM9Gb4FxfH5dVvdKKlttpm9XEJgUU7L%2FXr%2F0XZHsvMWhqXIggOdPJ82EkhquuJFr9NaGcmGIgro47zDdf6uo4GW3zIgFYLsxZ7Y2hkippc3e4AkIewSIaQ4MydKhiYpwoNycSOFq9d41GiuJZPbYb9M30c3RLUCFtpcTDDDx8%2FABjqkAVJ%2FL7116Gs5RZrajmpVYoDDsUwHHdid07YJOjuL%2F4gwqRR2njIO2RuUvl1ON%2FB%2BWK3GbA8vYaN0Qt%2FFyM2P8X%2BB62o9%2FwEeQc0ctlkomUMf8LynSMUc7lIY1Csxwi66BJAp3pF%2Fgp47nYCPxmXu2G8jAVg7xddZRw7LYOd8a2m87UC30c3V6vOKx1mj4onxwSGa%2FwZ3cIGXzdXiENndrYkOqAlh&X-Amz-Signature=2bf1b2df6ae4dbd01b00e2233f75b8e95c2707c43713145f2d75c9a7d8d3ea1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBYT2LOR%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDeDlMvt7VOP3jBPWBiKB4FJUaZT4Oiow%2B30EsZ%2FeMmTgIhAL2ytZseOd1Pr6wJwl6qpIzCfqAqxPwr0eNfZ4%2FLH5znKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzzi7o%2Feevtbop5zFgq3ANWamdVbvK4YHhqWN9xMVnn8WTbZOMCnTGm2NT%2FIbsher7YuL9u6TT4hjd14RhuxG%2BkSakEv4Lv5uN8%2F%2Bj24C4jhGqvMibcGcudXkn0d7STylqlfLU8h%2BAx8OpYPE6xE%2BuYJkWlh1l%2FMGInJBpWzfgtEFLAe9qicVweDZyQzbbTqrsP8nfmcIymnUNtMFRQ7dxOvylDZOUqKhuCNy8Wa3WU0jTjSkJGaqkw1z02S%2FdabCihPd0NxnbutHhuKM9QKu1TuOajj%2FpTQ0B5WmbCWEjxE8SzZWxYPUAu1Tlr9E%2Fx3Dfrvo5KmIdwW7EEIwFMjXZrRFbhLbwcuspi9WA9MsRVDSZJQDeVWrhD8JMX49KMvqt5crY8sKN4X35RV4pTgb48Bk%2B0nqow12uwqoaeMrooRhFeVgfP7FXAI2LZMGUfIFa%2BY779trpHRKplJCIxNWmzJnqbXal9LHPvg7WvrSrESlM9Gb4FxfH5dVvdKKlttpm9XEJgUU7L%2FXr%2F0XZHsvMWhqXIggOdPJ82EkhquuJFr9NaGcmGIgro47zDdf6uo4GW3zIgFYLsxZ7Y2hkippc3e4AkIewSIaQ4MydKhiYpwoNycSOFq9d41GiuJZPbYb9M30c3RLUCFtpcTDDDx8%2FABjqkAVJ%2FL7116Gs5RZrajmpVYoDDsUwHHdid07YJOjuL%2F4gwqRR2njIO2RuUvl1ON%2FB%2BWK3GbA8vYaN0Qt%2FFyM2P8X%2BB62o9%2FwEeQc0ctlkomUMf8LynSMUc7lIY1Csxwi66BJAp3pF%2Fgp47nYCPxmXu2G8jAVg7xddZRw7LYOd8a2m87UC30c3V6vOKx1mj4onxwSGa%2FwZ3cIGXzdXiENndrYkOqAlh&X-Amz-Signature=2eec35e6beb1274dbb3d6bdea21af2f678c5ffceeed3d4ebdc0456fa5c0ab336&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

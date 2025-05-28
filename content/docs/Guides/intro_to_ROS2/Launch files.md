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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVE4H7PZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCFenS3FOnz19ilbD%2FrdbOByI5zXcSsKi24esUQyzm1gIhAMDscqlJ9oyal3tiUknmwqMQFjqBIsFaZc%2Fb65BXSJFkKv8DCHoQABoMNjM3NDIzMTgzODA1Igz%2B1DW29Latcjoe41Eq3AO6sCbAhnzJeEVTlJx5djrQlhSB%2FiBPZc%2BNID8Ar3lhBAc%2FYUbODlGPAB2U9%2FMmukmbhCJVN2ykrpifXO9MyJrBWNjVliKVIYYXaXNNajVxydGESZiHM%2Fx8DBVqOJf1Hi4rig%2FekpgsrGiIgnKO4BMgv3hQsyg9u7rcqlaAXvylRPh2%2Bkz9NEx6wRKCI7QimD58644eZkN3lEJFpl76474XKcXwT10HUsZuKvqkQ1hB9iIrZt7z3axMqR3DkQPvQPwCcFX2BXfJpANQBeMM%2BHwlwaYJwUWLtw7fSIxgzyprpbJS%2BI7Vd7HD5nOoh4p5OX2EXlNVB56ICdvrxzmth80vJrlw90KZMPCpcYY835QWc7mtL2%2B5MfdreyHUKdDJQTBS3NggyrNFYBDoKaShe5FJXLR1UNcR2bq0zEGCdnm8j2FGaOw%2Bk%2F4WcpMumRCv8HTe5n04sEsyld8jpdEyo2KESlPvPeYX8VW4yI4SrZ8L8wN2HvzPM2x5estwsClzVmTrUnPHlbdL4I9P17FfYIhcmK898cPBrWS7OXMQE0SbTI88Fa8y9D2gAEHNHfmddfExwlBxzP9lIBtKQYN3d11EpoeXh8O6BsD4rCwHTc1TgmZTV5NPqaixLch%2FwzCk%2BNzBBjqkAdgd2mEb71upeoaXJLDv9S5O%2FCbgXr5sl8dD7jdjsc%2FK9K75W2HknjSDMRI0sEtAerbfGkPgRWX8yjjZs6U2EsABkt8VUbFAR4DdkH4searU5YmGmbFda%2FNGlE8oVsZnmwk97q1HYY4JNdR0tKpERtuySlpdh7%2FRjscuoGPpb%2BH2ijaySKxd8ZaHgNbt0N%2BkcyAynXzd%2BKGz7xzjXzVTmBfBgAjJ&X-Amz-Signature=7dca0850c4ad81d46cc4e69b1c59abc1cf761fc0315b8f276d08c4a6958ad6e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVE4H7PZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCFenS3FOnz19ilbD%2FrdbOByI5zXcSsKi24esUQyzm1gIhAMDscqlJ9oyal3tiUknmwqMQFjqBIsFaZc%2Fb65BXSJFkKv8DCHoQABoMNjM3NDIzMTgzODA1Igz%2B1DW29Latcjoe41Eq3AO6sCbAhnzJeEVTlJx5djrQlhSB%2FiBPZc%2BNID8Ar3lhBAc%2FYUbODlGPAB2U9%2FMmukmbhCJVN2ykrpifXO9MyJrBWNjVliKVIYYXaXNNajVxydGESZiHM%2Fx8DBVqOJf1Hi4rig%2FekpgsrGiIgnKO4BMgv3hQsyg9u7rcqlaAXvylRPh2%2Bkz9NEx6wRKCI7QimD58644eZkN3lEJFpl76474XKcXwT10HUsZuKvqkQ1hB9iIrZt7z3axMqR3DkQPvQPwCcFX2BXfJpANQBeMM%2BHwlwaYJwUWLtw7fSIxgzyprpbJS%2BI7Vd7HD5nOoh4p5OX2EXlNVB56ICdvrxzmth80vJrlw90KZMPCpcYY835QWc7mtL2%2B5MfdreyHUKdDJQTBS3NggyrNFYBDoKaShe5FJXLR1UNcR2bq0zEGCdnm8j2FGaOw%2Bk%2F4WcpMumRCv8HTe5n04sEsyld8jpdEyo2KESlPvPeYX8VW4yI4SrZ8L8wN2HvzPM2x5estwsClzVmTrUnPHlbdL4I9P17FfYIhcmK898cPBrWS7OXMQE0SbTI88Fa8y9D2gAEHNHfmddfExwlBxzP9lIBtKQYN3d11EpoeXh8O6BsD4rCwHTc1TgmZTV5NPqaixLch%2FwzCk%2BNzBBjqkAdgd2mEb71upeoaXJLDv9S5O%2FCbgXr5sl8dD7jdjsc%2FK9K75W2HknjSDMRI0sEtAerbfGkPgRWX8yjjZs6U2EsABkt8VUbFAR4DdkH4searU5YmGmbFda%2FNGlE8oVsZnmwk97q1HYY4JNdR0tKpERtuySlpdh7%2FRjscuoGPpb%2BH2ijaySKxd8ZaHgNbt0N%2BkcyAynXzd%2BKGz7xzjXzVTmBfBgAjJ&X-Amz-Signature=572b8ac701f9e5d12848d0b183c7e29305a59410d91b4ee2f287476f59d823f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVE4H7PZ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCFenS3FOnz19ilbD%2FrdbOByI5zXcSsKi24esUQyzm1gIhAMDscqlJ9oyal3tiUknmwqMQFjqBIsFaZc%2Fb65BXSJFkKv8DCHoQABoMNjM3NDIzMTgzODA1Igz%2B1DW29Latcjoe41Eq3AO6sCbAhnzJeEVTlJx5djrQlhSB%2FiBPZc%2BNID8Ar3lhBAc%2FYUbODlGPAB2U9%2FMmukmbhCJVN2ykrpifXO9MyJrBWNjVliKVIYYXaXNNajVxydGESZiHM%2Fx8DBVqOJf1Hi4rig%2FekpgsrGiIgnKO4BMgv3hQsyg9u7rcqlaAXvylRPh2%2Bkz9NEx6wRKCI7QimD58644eZkN3lEJFpl76474XKcXwT10HUsZuKvqkQ1hB9iIrZt7z3axMqR3DkQPvQPwCcFX2BXfJpANQBeMM%2BHwlwaYJwUWLtw7fSIxgzyprpbJS%2BI7Vd7HD5nOoh4p5OX2EXlNVB56ICdvrxzmth80vJrlw90KZMPCpcYY835QWc7mtL2%2B5MfdreyHUKdDJQTBS3NggyrNFYBDoKaShe5FJXLR1UNcR2bq0zEGCdnm8j2FGaOw%2Bk%2F4WcpMumRCv8HTe5n04sEsyld8jpdEyo2KESlPvPeYX8VW4yI4SrZ8L8wN2HvzPM2x5estwsClzVmTrUnPHlbdL4I9P17FfYIhcmK898cPBrWS7OXMQE0SbTI88Fa8y9D2gAEHNHfmddfExwlBxzP9lIBtKQYN3d11EpoeXh8O6BsD4rCwHTc1TgmZTV5NPqaixLch%2FwzCk%2BNzBBjqkAdgd2mEb71upeoaXJLDv9S5O%2FCbgXr5sl8dD7jdjsc%2FK9K75W2HknjSDMRI0sEtAerbfGkPgRWX8yjjZs6U2EsABkt8VUbFAR4DdkH4searU5YmGmbFda%2FNGlE8oVsZnmwk97q1HYY4JNdR0tKpERtuySlpdh7%2FRjscuoGPpb%2BH2ijaySKxd8ZaHgNbt0N%2BkcyAynXzd%2BKGz7xzjXzVTmBfBgAjJ&X-Amz-Signature=5e16788f2c59c381a83249d804781c78f120a28af302be7a1efeb359789d6cd3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

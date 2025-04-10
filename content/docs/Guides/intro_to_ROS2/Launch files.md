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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AMZDMO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBYV2ao7hguDV8s0ouQ72CuhNmdtldmfBK0%2Bi4rHhuGPAiEA3GKpX58Ln52AJul%2FmIbLGJQJH1r6loBerLrAah3lyxAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPRGXu%2BcgBQyEsKsCrcAyy7UjMWlBBZFR%2FxvItGeaISC5W4Odwdey%2F35%2FoivnGvAMFNgBYW7O65CAzdy23kspqY8SbnkTvKI5Dvj9qxjptuEzHNNX%2BJ5CiDWw3DdAflwNzB0Kvjd8iC3Atj29yJmNbLsolxh3c1k80bGq2ITkpkfk9tnwKzePiDdOZC5p2GW2evyTAa9Nkkpt7c0fSfnddh03bo4r56y%2FNETbHxNhTJ0rTmZQJprxu5vLO%2FnsUrg7R7OwC0CUvRTihszfDQAH2wGIA6f3RqH8c9S7thM%2FlczklgbV0nt0RSFMGYLoVbLM288jJDbWWUBNR4qGGZ3WA%2FpPN3LzRdUPnlesrlUKsyTSJK6E%2Br2%2FZrbDSTYIG96XS2%2FuGdi9O5zDZw%2Fh78mHNZiHrJcRFmNd2jcue4eOHxj9xMHvf3UCrJ8vKWDAoJwK6fhK9SPbmVuqjvSy3kdnstQJBeeGLv%2FfAKgRhS9kdpvdTmxPrRFNbqCqV3Etko4pdv78lAO6%2BLatBj7RmaO%2FDwrxh%2B8QnqOb9PmYkn8xea9cRBKqND0L0wRM%2FSK6815SqTjFO3qIEciRJLW9RNJ%2FSRdZPKvTVn7fe2vl6XNNF19%2FPGNeaznUmADNrf3xhnG84cgV3sOWLhbUEpMI%2BQ3b8GOqUByGeDEM0tmPC%2F%2FgeIEo%2Fx1OtioEz1TdSAxoL2LbPb55yJl44pUyM1Dw%2BSRDY9buutthEAgXh0TO60yLzriiVOvgSWc5O7ARDjlJrXT3qrb9DniYE6%2BDlLXkjyCuZ5OKPRvEkZqUSu3B3faLHrYqmfau8WZwRIpbiaFD09MBnSk0wuw6JbZOnSw6Lx4i5tDaXIrpblMGrgzmTZ6gtovR2A%2FAMDvgAW&X-Amz-Signature=456f33693f253c5b47cb45f147435c25c856acae862ca56b9d333b6b2ee7d5be&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AMZDMO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBYV2ao7hguDV8s0ouQ72CuhNmdtldmfBK0%2Bi4rHhuGPAiEA3GKpX58Ln52AJul%2FmIbLGJQJH1r6loBerLrAah3lyxAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPRGXu%2BcgBQyEsKsCrcAyy7UjMWlBBZFR%2FxvItGeaISC5W4Odwdey%2F35%2FoivnGvAMFNgBYW7O65CAzdy23kspqY8SbnkTvKI5Dvj9qxjptuEzHNNX%2BJ5CiDWw3DdAflwNzB0Kvjd8iC3Atj29yJmNbLsolxh3c1k80bGq2ITkpkfk9tnwKzePiDdOZC5p2GW2evyTAa9Nkkpt7c0fSfnddh03bo4r56y%2FNETbHxNhTJ0rTmZQJprxu5vLO%2FnsUrg7R7OwC0CUvRTihszfDQAH2wGIA6f3RqH8c9S7thM%2FlczklgbV0nt0RSFMGYLoVbLM288jJDbWWUBNR4qGGZ3WA%2FpPN3LzRdUPnlesrlUKsyTSJK6E%2Br2%2FZrbDSTYIG96XS2%2FuGdi9O5zDZw%2Fh78mHNZiHrJcRFmNd2jcue4eOHxj9xMHvf3UCrJ8vKWDAoJwK6fhK9SPbmVuqjvSy3kdnstQJBeeGLv%2FfAKgRhS9kdpvdTmxPrRFNbqCqV3Etko4pdv78lAO6%2BLatBj7RmaO%2FDwrxh%2B8QnqOb9PmYkn8xea9cRBKqND0L0wRM%2FSK6815SqTjFO3qIEciRJLW9RNJ%2FSRdZPKvTVn7fe2vl6XNNF19%2FPGNeaznUmADNrf3xhnG84cgV3sOWLhbUEpMI%2BQ3b8GOqUByGeDEM0tmPC%2F%2FgeIEo%2Fx1OtioEz1TdSAxoL2LbPb55yJl44pUyM1Dw%2BSRDY9buutthEAgXh0TO60yLzriiVOvgSWc5O7ARDjlJrXT3qrb9DniYE6%2BDlLXkjyCuZ5OKPRvEkZqUSu3B3faLHrYqmfau8WZwRIpbiaFD09MBnSk0wuw6JbZOnSw6Lx4i5tDaXIrpblMGrgzmTZ6gtovR2A%2FAMDvgAW&X-Amz-Signature=414c0d3bd13712913a65bd38a6fdcf5523c59bec99bf04badaa1a9106d7de797&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5AMZDMO%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBYV2ao7hguDV8s0ouQ72CuhNmdtldmfBK0%2Bi4rHhuGPAiEA3GKpX58Ln52AJul%2FmIbLGJQJH1r6loBerLrAah3lyxAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBPRGXu%2BcgBQyEsKsCrcAyy7UjMWlBBZFR%2FxvItGeaISC5W4Odwdey%2F35%2FoivnGvAMFNgBYW7O65CAzdy23kspqY8SbnkTvKI5Dvj9qxjptuEzHNNX%2BJ5CiDWw3DdAflwNzB0Kvjd8iC3Atj29yJmNbLsolxh3c1k80bGq2ITkpkfk9tnwKzePiDdOZC5p2GW2evyTAa9Nkkpt7c0fSfnddh03bo4r56y%2FNETbHxNhTJ0rTmZQJprxu5vLO%2FnsUrg7R7OwC0CUvRTihszfDQAH2wGIA6f3RqH8c9S7thM%2FlczklgbV0nt0RSFMGYLoVbLM288jJDbWWUBNR4qGGZ3WA%2FpPN3LzRdUPnlesrlUKsyTSJK6E%2Br2%2FZrbDSTYIG96XS2%2FuGdi9O5zDZw%2Fh78mHNZiHrJcRFmNd2jcue4eOHxj9xMHvf3UCrJ8vKWDAoJwK6fhK9SPbmVuqjvSy3kdnstQJBeeGLv%2FfAKgRhS9kdpvdTmxPrRFNbqCqV3Etko4pdv78lAO6%2BLatBj7RmaO%2FDwrxh%2B8QnqOb9PmYkn8xea9cRBKqND0L0wRM%2FSK6815SqTjFO3qIEciRJLW9RNJ%2FSRdZPKvTVn7fe2vl6XNNF19%2FPGNeaznUmADNrf3xhnG84cgV3sOWLhbUEpMI%2BQ3b8GOqUByGeDEM0tmPC%2F%2FgeIEo%2Fx1OtioEz1TdSAxoL2LbPb55yJl44pUyM1Dw%2BSRDY9buutthEAgXh0TO60yLzriiVOvgSWc5O7ARDjlJrXT3qrb9DniYE6%2BDlLXkjyCuZ5OKPRvEkZqUSu3B3faLHrYqmfau8WZwRIpbiaFD09MBnSk0wuw6JbZOnSw6Lx4i5tDaXIrpblMGrgzmTZ6gtovR2A%2FAMDvgAW&X-Amz-Signature=a70b27166adad54ff8fd4b9231f5ef2ffa7f60d1eff07ae175471b8b20a368d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

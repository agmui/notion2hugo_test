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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHVRCRK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGRnOhCx56PnUzc3nIFLn08PP5dLgFNXGaT6vkyJqRfeAiBSTAQG%2BV%2Bs5p%2BHH2eBg82eKAW5UEgwgTCjCI9oqvOCjCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMykvPLkHibqgfLOQhKtwDPNqYP%2BE4usVcTKtKCzt8uKNW2IdY7bmU3PTlfSr7mQJx1flhEPMa74kvLgpyEGsSkiJgy7xrAxah1KZzoiHbOX9g0OcSyWyRKEvDJGnC0B02VQmFrscGcvw%2FbviOe%2B%2BpE%2FVtjnN2YVYBan9OBMakKAUvRVXrBvGbpAApOTTh9I%2BxxkHY9UY6jcVOP0JMp9ftZkDT9RutTxgI%2B7OPq2tBnz%2BgTr39Tg5EOsuEOdTs6xiBLqBEcfM3HgBN2da2TIPV5X%2BFsLL%2B2HVxQzT%2FWr6QPX2ZcLRmk%2FmvXgGG9%2F3CkrL%2BxIYWvg5WUFoFlSxvowfk0WCYmWpYOEHU3hYwPAbG1A1ZHx0TUOGlW6doejacbmIA1OGt1QzSLQzpTi1YssYzThUzu0Mjbv3jc2Rs2amOj1jLDmmiSVpN38Niq6LKXH95TLCQyu1nef3P39%2FIKwK9bpE9R73fQqvAoIfyn6P03mimTjPUAl3xBMSjwp27tCohTIP3KGFrlMEC1leMHMIMe06h6cHzKNwY9WwzhZJczY5rdStdVfOW8uvtfvWn%2Fpm8EmEyMnhYoygAUmEbKXJxowRrxP1%2F97uzY1IPCWZMdaAW1605p%2BDYeSsLkGx1DYD9nahukyVlmf%2FpTRowh7v4vgY6pgFMRankCitFXkTeb85f5K4QqPQzZ%2B88NfdlawGMFutN3Oy5Hp7Pa92iXJdSZsgG7ieST6auzT74xHCBlP7rUkPrYrFQv48%2BP%2BK8QlFQeGmLK%2BlmODQnNqqCvgb0pqL6tgTG6t1WPaY2q3lgHW%2FTof7J8PZRseKCFCxfaSTToWGrjGsZClh0LGk0TWCfv3AfVobnWQm1c0zXu%2B9FNz1lmhLqAz4SUdSW&X-Amz-Signature=2fdeb99d74adc24275ea2052b2f0b5deddba773f383226a59118c07d2b37319f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHVRCRK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGRnOhCx56PnUzc3nIFLn08PP5dLgFNXGaT6vkyJqRfeAiBSTAQG%2BV%2Bs5p%2BHH2eBg82eKAW5UEgwgTCjCI9oqvOCjCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMykvPLkHibqgfLOQhKtwDPNqYP%2BE4usVcTKtKCzt8uKNW2IdY7bmU3PTlfSr7mQJx1flhEPMa74kvLgpyEGsSkiJgy7xrAxah1KZzoiHbOX9g0OcSyWyRKEvDJGnC0B02VQmFrscGcvw%2FbviOe%2B%2BpE%2FVtjnN2YVYBan9OBMakKAUvRVXrBvGbpAApOTTh9I%2BxxkHY9UY6jcVOP0JMp9ftZkDT9RutTxgI%2B7OPq2tBnz%2BgTr39Tg5EOsuEOdTs6xiBLqBEcfM3HgBN2da2TIPV5X%2BFsLL%2B2HVxQzT%2FWr6QPX2ZcLRmk%2FmvXgGG9%2F3CkrL%2BxIYWvg5WUFoFlSxvowfk0WCYmWpYOEHU3hYwPAbG1A1ZHx0TUOGlW6doejacbmIA1OGt1QzSLQzpTi1YssYzThUzu0Mjbv3jc2Rs2amOj1jLDmmiSVpN38Niq6LKXH95TLCQyu1nef3P39%2FIKwK9bpE9R73fQqvAoIfyn6P03mimTjPUAl3xBMSjwp27tCohTIP3KGFrlMEC1leMHMIMe06h6cHzKNwY9WwzhZJczY5rdStdVfOW8uvtfvWn%2Fpm8EmEyMnhYoygAUmEbKXJxowRrxP1%2F97uzY1IPCWZMdaAW1605p%2BDYeSsLkGx1DYD9nahukyVlmf%2FpTRowh7v4vgY6pgFMRankCitFXkTeb85f5K4QqPQzZ%2B88NfdlawGMFutN3Oy5Hp7Pa92iXJdSZsgG7ieST6auzT74xHCBlP7rUkPrYrFQv48%2BP%2BK8QlFQeGmLK%2BlmODQnNqqCvgb0pqL6tgTG6t1WPaY2q3lgHW%2FTof7J8PZRseKCFCxfaSTToWGrjGsZClh0LGk0TWCfv3AfVobnWQm1c0zXu%2B9FNz1lmhLqAz4SUdSW&X-Amz-Signature=782d1f095b486ab114d1eda65afc16d876fba5816d01816d1beebdd50fac7df4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHVRCRK%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T032129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIGRnOhCx56PnUzc3nIFLn08PP5dLgFNXGaT6vkyJqRfeAiBSTAQG%2BV%2Bs5p%2BHH2eBg82eKAW5UEgwgTCjCI9oqvOCjCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMykvPLkHibqgfLOQhKtwDPNqYP%2BE4usVcTKtKCzt8uKNW2IdY7bmU3PTlfSr7mQJx1flhEPMa74kvLgpyEGsSkiJgy7xrAxah1KZzoiHbOX9g0OcSyWyRKEvDJGnC0B02VQmFrscGcvw%2FbviOe%2B%2BpE%2FVtjnN2YVYBan9OBMakKAUvRVXrBvGbpAApOTTh9I%2BxxkHY9UY6jcVOP0JMp9ftZkDT9RutTxgI%2B7OPq2tBnz%2BgTr39Tg5EOsuEOdTs6xiBLqBEcfM3HgBN2da2TIPV5X%2BFsLL%2B2HVxQzT%2FWr6QPX2ZcLRmk%2FmvXgGG9%2F3CkrL%2BxIYWvg5WUFoFlSxvowfk0WCYmWpYOEHU3hYwPAbG1A1ZHx0TUOGlW6doejacbmIA1OGt1QzSLQzpTi1YssYzThUzu0Mjbv3jc2Rs2amOj1jLDmmiSVpN38Niq6LKXH95TLCQyu1nef3P39%2FIKwK9bpE9R73fQqvAoIfyn6P03mimTjPUAl3xBMSjwp27tCohTIP3KGFrlMEC1leMHMIMe06h6cHzKNwY9WwzhZJczY5rdStdVfOW8uvtfvWn%2Fpm8EmEyMnhYoygAUmEbKXJxowRrxP1%2F97uzY1IPCWZMdaAW1605p%2BDYeSsLkGx1DYD9nahukyVlmf%2FpTRowh7v4vgY6pgFMRankCitFXkTeb85f5K4QqPQzZ%2B88NfdlawGMFutN3Oy5Hp7Pa92iXJdSZsgG7ieST6auzT74xHCBlP7rUkPrYrFQv48%2BP%2BK8QlFQeGmLK%2BlmODQnNqqCvgb0pqL6tgTG6t1WPaY2q3lgHW%2FTof7J8PZRseKCFCxfaSTToWGrjGsZClh0LGk0TWCfv3AfVobnWQm1c0zXu%2B9FNz1lmhLqAz4SUdSW&X-Amz-Signature=38c115bc9c9601043dcade8920ac3d883476beda04d055f67a23f23c3f199fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

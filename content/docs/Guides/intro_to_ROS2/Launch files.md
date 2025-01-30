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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAYSUXT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBkCwf0ukzli9i%2FWanj2NUYQSy%2FNyjmMph26kiJ%2FCEnQIgL02Sw4Py17d5v2cWcqOPj8MRhScZ%2FbEW7CtqkF38tf8qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuMxtYv%2B0rOhyg2tCrcAytV25symdEsBLc821xKb8nc62nDDnvUXzaACEA2qFrJeq5WFjEFKQfEIa%2BKi4cFu6QSB1b2Pz1yNiINm8Um0JRzWMFhlpUeMnmXYV5PsWVIFrw2SFMlBjIm0Ko8AT%2Fee9JjQrjHSw1BHGdkLCWez26lF6MJNOKlclskWkdkHF7DhrmFMTj84AXHcB4Hsviyf%2FLEn8Xl%2BdULsMQ4phSAp9W%2BT4gkwiXo7eXY46llRmTKUCyvlQOzvSd2AoZZ4OekUuRMqWi7dXwavqetnF6nMuLk5qT5clw%2FBMp62MLuU9nvY%2BY7H6g1oh6ihp6bIuBCtkpYz0bv8ZpKHXpUCn2FvPXPrPZn4p5dzmj3UNm8Y%2FoH9AwHmnLWDV0mtzeL1GuYr%2FjDXhKg5OGEuztL6alVfT4AxEQ5eqSpTM209kswQf9z1a1Vlb2zPjTFYh5%2F3Sd5AvRQkc6hQGO%2FzGi9QkrZ4HUgjICYwPIA%2FQoloU4wAjwz7vUHPP3Zuu5ZdwrWVpW3b9uGQasQ%2FpirAjlQRuAt5pt5P2HuY7k5jrmKmTLWP1S2R2mp9whD7ShJzELM1KfGrpm8vz8a4l2Ex8JWbH62Fnh6GX%2BmRPmm%2BrX%2FLkxlqmTQgsH%2Be45aehoU8qhpMNnH77wGOqUBa%2FTJRQCpBth%2FayyrjBMhQGSrggEMDDCZmjA6R2RCA1O8KSVUHQhbaPRGMOmG1frX%2B1J0oHjHm3lQr60XqnqyzN1angyFWKPhzgHvQlgA3Ne3xnwnqLnEeOttF3PXiqwz9W6aWqctQIrbrZXvyjhHkNXTiOwKt14P%2FCE8MPH58DUS5USJupn76iEqMTZq93KShFS7qKoR82dZFxjmOcnWx02oOBqI&X-Amz-Signature=1a728182bbd05900256b3016c7c8a89bb72b91fd3aa84a33837ee6fe4429f00c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAYSUXT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBkCwf0ukzli9i%2FWanj2NUYQSy%2FNyjmMph26kiJ%2FCEnQIgL02Sw4Py17d5v2cWcqOPj8MRhScZ%2FbEW7CtqkF38tf8qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuMxtYv%2B0rOhyg2tCrcAytV25symdEsBLc821xKb8nc62nDDnvUXzaACEA2qFrJeq5WFjEFKQfEIa%2BKi4cFu6QSB1b2Pz1yNiINm8Um0JRzWMFhlpUeMnmXYV5PsWVIFrw2SFMlBjIm0Ko8AT%2Fee9JjQrjHSw1BHGdkLCWez26lF6MJNOKlclskWkdkHF7DhrmFMTj84AXHcB4Hsviyf%2FLEn8Xl%2BdULsMQ4phSAp9W%2BT4gkwiXo7eXY46llRmTKUCyvlQOzvSd2AoZZ4OekUuRMqWi7dXwavqetnF6nMuLk5qT5clw%2FBMp62MLuU9nvY%2BY7H6g1oh6ihp6bIuBCtkpYz0bv8ZpKHXpUCn2FvPXPrPZn4p5dzmj3UNm8Y%2FoH9AwHmnLWDV0mtzeL1GuYr%2FjDXhKg5OGEuztL6alVfT4AxEQ5eqSpTM209kswQf9z1a1Vlb2zPjTFYh5%2F3Sd5AvRQkc6hQGO%2FzGi9QkrZ4HUgjICYwPIA%2FQoloU4wAjwz7vUHPP3Zuu5ZdwrWVpW3b9uGQasQ%2FpirAjlQRuAt5pt5P2HuY7k5jrmKmTLWP1S2R2mp9whD7ShJzELM1KfGrpm8vz8a4l2Ex8JWbH62Fnh6GX%2BmRPmm%2BrX%2FLkxlqmTQgsH%2Be45aehoU8qhpMNnH77wGOqUBa%2FTJRQCpBth%2FayyrjBMhQGSrggEMDDCZmjA6R2RCA1O8KSVUHQhbaPRGMOmG1frX%2B1J0oHjHm3lQr60XqnqyzN1angyFWKPhzgHvQlgA3Ne3xnwnqLnEeOttF3PXiqwz9W6aWqctQIrbrZXvyjhHkNXTiOwKt14P%2FCE8MPH58DUS5USJupn76iEqMTZq93KShFS7qKoR82dZFxjmOcnWx02oOBqI&X-Amz-Signature=e1fded1d499d7bb69df374032cbf71a491b75540fb5b4f264a5286acbe2bb70e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKAYSUXT%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBkCwf0ukzli9i%2FWanj2NUYQSy%2FNyjmMph26kiJ%2FCEnQIgL02Sw4Py17d5v2cWcqOPj8MRhScZ%2FbEW7CtqkF38tf8qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuMxtYv%2B0rOhyg2tCrcAytV25symdEsBLc821xKb8nc62nDDnvUXzaACEA2qFrJeq5WFjEFKQfEIa%2BKi4cFu6QSB1b2Pz1yNiINm8Um0JRzWMFhlpUeMnmXYV5PsWVIFrw2SFMlBjIm0Ko8AT%2Fee9JjQrjHSw1BHGdkLCWez26lF6MJNOKlclskWkdkHF7DhrmFMTj84AXHcB4Hsviyf%2FLEn8Xl%2BdULsMQ4phSAp9W%2BT4gkwiXo7eXY46llRmTKUCyvlQOzvSd2AoZZ4OekUuRMqWi7dXwavqetnF6nMuLk5qT5clw%2FBMp62MLuU9nvY%2BY7H6g1oh6ihp6bIuBCtkpYz0bv8ZpKHXpUCn2FvPXPrPZn4p5dzmj3UNm8Y%2FoH9AwHmnLWDV0mtzeL1GuYr%2FjDXhKg5OGEuztL6alVfT4AxEQ5eqSpTM209kswQf9z1a1Vlb2zPjTFYh5%2F3Sd5AvRQkc6hQGO%2FzGi9QkrZ4HUgjICYwPIA%2FQoloU4wAjwz7vUHPP3Zuu5ZdwrWVpW3b9uGQasQ%2FpirAjlQRuAt5pt5P2HuY7k5jrmKmTLWP1S2R2mp9whD7ShJzELM1KfGrpm8vz8a4l2Ex8JWbH62Fnh6GX%2BmRPmm%2BrX%2FLkxlqmTQgsH%2Be45aehoU8qhpMNnH77wGOqUBa%2FTJRQCpBth%2FayyrjBMhQGSrggEMDDCZmjA6R2RCA1O8KSVUHQhbaPRGMOmG1frX%2B1J0oHjHm3lQr60XqnqyzN1angyFWKPhzgHvQlgA3Ne3xnwnqLnEeOttF3PXiqwz9W6aWqctQIrbrZXvyjhHkNXTiOwKt14P%2FCE8MPH58DUS5USJupn76iEqMTZq93KShFS7qKoR82dZFxjmOcnWx02oOBqI&X-Amz-Signature=011d463cd707618595ef93f2dd742bb8391f1bf0d9472922773b02259374eab7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

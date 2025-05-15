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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPGXHYM7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCitCO%2BCE0zXi2peOefX9dFWfQdwTjgMUjO0cCrq3w47AIgLJ3KGhfJxD4ZYKgPqPiLxTHv%2BTqxLq%2Fd%2F5Imwmkb6tAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJbegoG4KbjrSSOKXCrcA%2BokR%2BG1GgcB%2Bk1%2F%2BuDIMyJuydIeeXBxPoCub9MSCEzBuuPKV6EvCDLImusRsbCL5ZijS77EyF1Ovr8AIdxIyc%2FtNOeas%2B%2B2MrtNP5lSSbWSTb%2FAOfVuTqDqiAUQwPomqWYsdzeA4gJyPW7hoXkr3NykaERXYmcoC6btBU3cCZYu8RGJzbK9%2BI%2FceIhVBP6ESlAkBAnuRbqQYNxc0r5mOeinEltn5iJLH%2FA0l5ANndKwLMq0hXch4hGS%2FuEOVymGxzhcw7VdgdIeD2oti2hUlc2V7gOqMAP9nOx0xKn%2BKX9M1NL5VSYCNMm9gXh0pNcr7JK4s29bz3aKJElHQ6VgWSrKX6PZljaK35InweWbQYgwUb3k0jgRm0WG%2FgKiZmmOTBQttfQTeFXGUmLG4cExKm5wOLZeAH8oeGCkSvQMJUNYqckE9JLMwl4YiJW5lBUjuAdX%2FfbpzBvq4wrlsZUrqv12LeYbOyzJDAIfHQu8fqAD12s55M3zbOgG67cu7AQE9DzjluObIvxARb0heJlkYcffqFqa6EciaSIje9jGRw75lir5J%2B4t%2BdkpA5EUTgieqg7abR1c5L7ZF6Lsj3pUNjMeeSb8rPwAJXd8OPcTvh%2Fma7KnJQ3PYwDuMLYWMLSElsEGOqUBTuWc3m3JoFtvjKpH3YL2HsYQc%2BYcoCrOfShAPQdtdIEbWTtBUNkAIl2RIKSCE7GJ97d5KBeHxq1lMsqwHMEYfuU1PK0cVVc3zcBur39kfb8eH8jZ4FJo53Z0I9yJFaWW7eyIhSRoAQn6gRsGW1YFtFuzPWN7%2FtV%2FMP%2BX6cY7uNMVVgUbqmB3I79Hxj7I6MtQsmulqIy0IXxTS9OXPNVNnIJ7KEi4&X-Amz-Signature=2a009ff8f769476760d773dc7068c63228d81554cebc9c52c8d756e77b73dba2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPGXHYM7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCitCO%2BCE0zXi2peOefX9dFWfQdwTjgMUjO0cCrq3w47AIgLJ3KGhfJxD4ZYKgPqPiLxTHv%2BTqxLq%2Fd%2F5Imwmkb6tAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJbegoG4KbjrSSOKXCrcA%2BokR%2BG1GgcB%2Bk1%2F%2BuDIMyJuydIeeXBxPoCub9MSCEzBuuPKV6EvCDLImusRsbCL5ZijS77EyF1Ovr8AIdxIyc%2FtNOeas%2B%2B2MrtNP5lSSbWSTb%2FAOfVuTqDqiAUQwPomqWYsdzeA4gJyPW7hoXkr3NykaERXYmcoC6btBU3cCZYu8RGJzbK9%2BI%2FceIhVBP6ESlAkBAnuRbqQYNxc0r5mOeinEltn5iJLH%2FA0l5ANndKwLMq0hXch4hGS%2FuEOVymGxzhcw7VdgdIeD2oti2hUlc2V7gOqMAP9nOx0xKn%2BKX9M1NL5VSYCNMm9gXh0pNcr7JK4s29bz3aKJElHQ6VgWSrKX6PZljaK35InweWbQYgwUb3k0jgRm0WG%2FgKiZmmOTBQttfQTeFXGUmLG4cExKm5wOLZeAH8oeGCkSvQMJUNYqckE9JLMwl4YiJW5lBUjuAdX%2FfbpzBvq4wrlsZUrqv12LeYbOyzJDAIfHQu8fqAD12s55M3zbOgG67cu7AQE9DzjluObIvxARb0heJlkYcffqFqa6EciaSIje9jGRw75lir5J%2B4t%2BdkpA5EUTgieqg7abR1c5L7ZF6Lsj3pUNjMeeSb8rPwAJXd8OPcTvh%2Fma7KnJQ3PYwDuMLYWMLSElsEGOqUBTuWc3m3JoFtvjKpH3YL2HsYQc%2BYcoCrOfShAPQdtdIEbWTtBUNkAIl2RIKSCE7GJ97d5KBeHxq1lMsqwHMEYfuU1PK0cVVc3zcBur39kfb8eH8jZ4FJo53Z0I9yJFaWW7eyIhSRoAQn6gRsGW1YFtFuzPWN7%2FtV%2FMP%2BX6cY7uNMVVgUbqmB3I79Hxj7I6MtQsmulqIy0IXxTS9OXPNVNnIJ7KEi4&X-Amz-Signature=27be3e3eca7d7563fb2434b24f0c41d13ffcd6471ca1e88b907866d94a726a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPGXHYM7%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCitCO%2BCE0zXi2peOefX9dFWfQdwTjgMUjO0cCrq3w47AIgLJ3KGhfJxD4ZYKgPqPiLxTHv%2BTqxLq%2Fd%2F5Imwmkb6tAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDJbegoG4KbjrSSOKXCrcA%2BokR%2BG1GgcB%2Bk1%2F%2BuDIMyJuydIeeXBxPoCub9MSCEzBuuPKV6EvCDLImusRsbCL5ZijS77EyF1Ovr8AIdxIyc%2FtNOeas%2B%2B2MrtNP5lSSbWSTb%2FAOfVuTqDqiAUQwPomqWYsdzeA4gJyPW7hoXkr3NykaERXYmcoC6btBU3cCZYu8RGJzbK9%2BI%2FceIhVBP6ESlAkBAnuRbqQYNxc0r5mOeinEltn5iJLH%2FA0l5ANndKwLMq0hXch4hGS%2FuEOVymGxzhcw7VdgdIeD2oti2hUlc2V7gOqMAP9nOx0xKn%2BKX9M1NL5VSYCNMm9gXh0pNcr7JK4s29bz3aKJElHQ6VgWSrKX6PZljaK35InweWbQYgwUb3k0jgRm0WG%2FgKiZmmOTBQttfQTeFXGUmLG4cExKm5wOLZeAH8oeGCkSvQMJUNYqckE9JLMwl4YiJW5lBUjuAdX%2FfbpzBvq4wrlsZUrqv12LeYbOyzJDAIfHQu8fqAD12s55M3zbOgG67cu7AQE9DzjluObIvxARb0heJlkYcffqFqa6EciaSIje9jGRw75lir5J%2B4t%2BdkpA5EUTgieqg7abR1c5L7ZF6Lsj3pUNjMeeSb8rPwAJXd8OPcTvh%2Fma7KnJQ3PYwDuMLYWMLSElsEGOqUBTuWc3m3JoFtvjKpH3YL2HsYQc%2BYcoCrOfShAPQdtdIEbWTtBUNkAIl2RIKSCE7GJ97d5KBeHxq1lMsqwHMEYfuU1PK0cVVc3zcBur39kfb8eH8jZ4FJo53Z0I9yJFaWW7eyIhSRoAQn6gRsGW1YFtFuzPWN7%2FtV%2FMP%2BX6cY7uNMVVgUbqmB3I79Hxj7I6MtQsmulqIy0IXxTS9OXPNVNnIJ7KEi4&X-Amz-Signature=beaaa2a7d8e3f42deddb29c5901630ab74b21b258ea713c61ecbc477ebbab5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

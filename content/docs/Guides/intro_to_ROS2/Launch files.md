---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPD736ZE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClIIUM%2B01OlkwkfeO6WrtNlTu2ziicTQUEB7X0ou92RQIhAJUIM0Ow8FAEA%2FqUEtpaj9%2F0uXpYxDFeVJe8nOOwmva%2BKv8DCBwQABoMNjM3NDIzMTgzODA1Igzo9GqInGAkfy4%2Bkb0q3ANP4CfRrmH8EyaYQlpbO1j2vBzMgsiaBcMfRFd9go2GpnhECSrB5hhl%2Biunjr1d49zTxPRuUsWa8qQ8WSMTkoX9ppo3Zd21GIcO3aZlhlAeo7cIIgaKPjpDe9Yle7mQHWApcAr3JKqgZ5LbTWAH%2FcL7JjL%2BYjCcK8T99Agzz159rGkdlPFLX7jnoWOZC2QMhS5SbaZtrloG9j2HUp0bfJSDBky6XBrY821Ek04tRRBEoqaNEgUWqturSGcY4pOA1kfjgS4DCX%2B%2BTuzfhc5geMV32ory5pUkIQVmvAqBil1oq1mKyNGVQV5Ns4%2F9dB0Z8cJ%2Fb1ohJEMG1evQsCZdpX7YQf03k9AgBh9mCA2%2FRIpgVUzX9LJcL484DGj9%2FIz5NPpF71gPosfnPi7MQ6LkEFLfWuC%2FjCDkiq8sofFiteq%2Bd4OuR6d2H3FzTbjvoO8DcnJ2CcaAArKjS%2F4j5Gdu5vm4cMvom3%2FK%2FIQcKnxLW4Cv6kV5hcLDcQQ8fP8saRa90rgWVYqqu%2F3E%2BuWkgS0t%2BKoehOTh7BGlc60hoUO3XOfvZmAWVtWplyQkWKd%2BMqyI%2Fej%2FvQk%2B9sE%2BOZPYgN3eyAEA8dSUZ%2FHXL5HcFeWYrHkHkNEdBq5tIJKYDf6GXTC%2BxLnEBjqkAY%2BFfn7cUH8l6AWJeC8%2FhiQRx1DNZftJf50096wHDFDk52cH4nr3jP2udAPS6QM17dv2Ndq6PAnBWWn4Dl85A1OG1dBB60RNKQtxTmkuT2abX1ADIkRX2ELD5XbZ7xnqaYV5Wu7R85kAGXdztiklKaovdspX%2BhTY%2Fi1k12M6H8jpjFM4UsXv638wqNbeyWRBVAyc81JjjFsnFO6%2FyMnKzPadqQLo&X-Amz-Signature=3e6fe6f40de02f26175cde454eeb10055fbe098545f45dce7b9b34158d19f688&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPD736ZE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClIIUM%2B01OlkwkfeO6WrtNlTu2ziicTQUEB7X0ou92RQIhAJUIM0Ow8FAEA%2FqUEtpaj9%2F0uXpYxDFeVJe8nOOwmva%2BKv8DCBwQABoMNjM3NDIzMTgzODA1Igzo9GqInGAkfy4%2Bkb0q3ANP4CfRrmH8EyaYQlpbO1j2vBzMgsiaBcMfRFd9go2GpnhECSrB5hhl%2Biunjr1d49zTxPRuUsWa8qQ8WSMTkoX9ppo3Zd21GIcO3aZlhlAeo7cIIgaKPjpDe9Yle7mQHWApcAr3JKqgZ5LbTWAH%2FcL7JjL%2BYjCcK8T99Agzz159rGkdlPFLX7jnoWOZC2QMhS5SbaZtrloG9j2HUp0bfJSDBky6XBrY821Ek04tRRBEoqaNEgUWqturSGcY4pOA1kfjgS4DCX%2B%2BTuzfhc5geMV32ory5pUkIQVmvAqBil1oq1mKyNGVQV5Ns4%2F9dB0Z8cJ%2Fb1ohJEMG1evQsCZdpX7YQf03k9AgBh9mCA2%2FRIpgVUzX9LJcL484DGj9%2FIz5NPpF71gPosfnPi7MQ6LkEFLfWuC%2FjCDkiq8sofFiteq%2Bd4OuR6d2H3FzTbjvoO8DcnJ2CcaAArKjS%2F4j5Gdu5vm4cMvom3%2FK%2FIQcKnxLW4Cv6kV5hcLDcQQ8fP8saRa90rgWVYqqu%2F3E%2BuWkgS0t%2BKoehOTh7BGlc60hoUO3XOfvZmAWVtWplyQkWKd%2BMqyI%2Fej%2FvQk%2B9sE%2BOZPYgN3eyAEA8dSUZ%2FHXL5HcFeWYrHkHkNEdBq5tIJKYDf6GXTC%2BxLnEBjqkAY%2BFfn7cUH8l6AWJeC8%2FhiQRx1DNZftJf50096wHDFDk52cH4nr3jP2udAPS6QM17dv2Ndq6PAnBWWn4Dl85A1OG1dBB60RNKQtxTmkuT2abX1ADIkRX2ELD5XbZ7xnqaYV5Wu7R85kAGXdztiklKaovdspX%2BhTY%2Fi1k12M6H8jpjFM4UsXv638wqNbeyWRBVAyc81JjjFsnFO6%2FyMnKzPadqQLo&X-Amz-Signature=145af54ccb7ddae39fab9534ec9153b9c2da56a2adfe2499052764e094271b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPD736ZE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClIIUM%2B01OlkwkfeO6WrtNlTu2ziicTQUEB7X0ou92RQIhAJUIM0Ow8FAEA%2FqUEtpaj9%2F0uXpYxDFeVJe8nOOwmva%2BKv8DCBwQABoMNjM3NDIzMTgzODA1Igzo9GqInGAkfy4%2Bkb0q3ANP4CfRrmH8EyaYQlpbO1j2vBzMgsiaBcMfRFd9go2GpnhECSrB5hhl%2Biunjr1d49zTxPRuUsWa8qQ8WSMTkoX9ppo3Zd21GIcO3aZlhlAeo7cIIgaKPjpDe9Yle7mQHWApcAr3JKqgZ5LbTWAH%2FcL7JjL%2BYjCcK8T99Agzz159rGkdlPFLX7jnoWOZC2QMhS5SbaZtrloG9j2HUp0bfJSDBky6XBrY821Ek04tRRBEoqaNEgUWqturSGcY4pOA1kfjgS4DCX%2B%2BTuzfhc5geMV32ory5pUkIQVmvAqBil1oq1mKyNGVQV5Ns4%2F9dB0Z8cJ%2Fb1ohJEMG1evQsCZdpX7YQf03k9AgBh9mCA2%2FRIpgVUzX9LJcL484DGj9%2FIz5NPpF71gPosfnPi7MQ6LkEFLfWuC%2FjCDkiq8sofFiteq%2Bd4OuR6d2H3FzTbjvoO8DcnJ2CcaAArKjS%2F4j5Gdu5vm4cMvom3%2FK%2FIQcKnxLW4Cv6kV5hcLDcQQ8fP8saRa90rgWVYqqu%2F3E%2BuWkgS0t%2BKoehOTh7BGlc60hoUO3XOfvZmAWVtWplyQkWKd%2BMqyI%2Fej%2FvQk%2B9sE%2BOZPYgN3eyAEA8dSUZ%2FHXL5HcFeWYrHkHkNEdBq5tIJKYDf6GXTC%2BxLnEBjqkAY%2BFfn7cUH8l6AWJeC8%2FhiQRx1DNZftJf50096wHDFDk52cH4nr3jP2udAPS6QM17dv2Ndq6PAnBWWn4Dl85A1OG1dBB60RNKQtxTmkuT2abX1ADIkRX2ELD5XbZ7xnqaYV5Wu7R85kAGXdztiklKaovdspX%2BhTY%2Fi1k12M6H8jpjFM4UsXv638wqNbeyWRBVAyc81JjjFsnFO6%2FyMnKzPadqQLo&X-Amz-Signature=cb304b600837816744cd453a5afa585e181b066169dcfb7ddd5594445c08728a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

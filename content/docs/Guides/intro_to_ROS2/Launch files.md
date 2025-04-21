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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHOW7QFI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHAbdDGsPn%2BjRQhPyXNVVAvXoy81ku%2BxbG6%2FQPddjOXwAiAsaq9HC5TK8Sdn5mrW5sMsnkKmm5vcU3%2BW8nMxise2ByqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpR9KvuPm1vM7WCUKtwDmn7vb7uca15Qo4eO2zBd6h1Vvrwk3W6fYM9Z6RXVbB7uCwLsUh7GoGbGzSSQTKQYK9CpLs3ee1k3UVPDhEZe%2FoPzgsYrLhImaqt7yaE0cTRY7L6U8s03ukRGtXYz8YEp6uAwCdTRRBeBRZwGB10xh7uflG23zaOVZeYW5Qz%2FoLebeUdXwxEYQJB%2FwBuIC66lJz4R9Stf%2BugDGGC3GoAujLGldpkvrnENx93VJuERkALKSXdfJUrJDHMTCxvTJbqTPlk6UsobbQAsv77%2BR2oCQhHr0nJo64eTjS6%2FQNfT6oY1HItUPikisYOeRYgQBZVb%2F2H%2Bs7z1K3VjSkzCaCsTZZ4WCe6c1Zm2CYCsR9U3fwyxpXgW4PlCP5ZGFySBItMdVkuqmW%2BNVMBK17JAXB9XlCtihZVRGmZTlGPKeUePjCcql2mnsX4IDfrvfjrSmTgYdqcQVHQe1xgsykv4VvP515WpQdGtPAqiv7K36vb5k1d%2BC04S8bry%2BSC6nfZAetOvO%2FQf6iHgCx%2F6jMZChaqQXS5iSNZp5IcxtSnrHV7%2FlklLpvOW%2FVlPvSMsXl2ZKTpy4OIjPLbuqpXKLHFsb1BJThPihpIJO1BbsGKMj%2Bf66x76FKN71acsU1lyItswqoWawAY6pgFCUNBR5Tlu3SFB7nNmq025mPwPFuHc6%2FvEzp9Af3TPt70m52yo0Rg%2BPwtX48C2gNa1aQegfGVnwOZqpqOisPvfdeQyPuuMbfqrGcGoz8JzbWBejI%2BxXvQyWqirihZFUlRNa1M7FFMTlRnT5YjL5gMOqBZp0qa8IHWI1w33FEAvkjl2BIrPjtVygGUAHDvxSycc2jiVv3K%2FzadTUsA8h8lyB3YN87M9&X-Amz-Signature=ab9cf3237f89db7417c3d6688676817496073895a2c015d3a7f8469d81f49cbe&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHOW7QFI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHAbdDGsPn%2BjRQhPyXNVVAvXoy81ku%2BxbG6%2FQPddjOXwAiAsaq9HC5TK8Sdn5mrW5sMsnkKmm5vcU3%2BW8nMxise2ByqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpR9KvuPm1vM7WCUKtwDmn7vb7uca15Qo4eO2zBd6h1Vvrwk3W6fYM9Z6RXVbB7uCwLsUh7GoGbGzSSQTKQYK9CpLs3ee1k3UVPDhEZe%2FoPzgsYrLhImaqt7yaE0cTRY7L6U8s03ukRGtXYz8YEp6uAwCdTRRBeBRZwGB10xh7uflG23zaOVZeYW5Qz%2FoLebeUdXwxEYQJB%2FwBuIC66lJz4R9Stf%2BugDGGC3GoAujLGldpkvrnENx93VJuERkALKSXdfJUrJDHMTCxvTJbqTPlk6UsobbQAsv77%2BR2oCQhHr0nJo64eTjS6%2FQNfT6oY1HItUPikisYOeRYgQBZVb%2F2H%2Bs7z1K3VjSkzCaCsTZZ4WCe6c1Zm2CYCsR9U3fwyxpXgW4PlCP5ZGFySBItMdVkuqmW%2BNVMBK17JAXB9XlCtihZVRGmZTlGPKeUePjCcql2mnsX4IDfrvfjrSmTgYdqcQVHQe1xgsykv4VvP515WpQdGtPAqiv7K36vb5k1d%2BC04S8bry%2BSC6nfZAetOvO%2FQf6iHgCx%2F6jMZChaqQXS5iSNZp5IcxtSnrHV7%2FlklLpvOW%2FVlPvSMsXl2ZKTpy4OIjPLbuqpXKLHFsb1BJThPihpIJO1BbsGKMj%2Bf66x76FKN71acsU1lyItswqoWawAY6pgFCUNBR5Tlu3SFB7nNmq025mPwPFuHc6%2FvEzp9Af3TPt70m52yo0Rg%2BPwtX48C2gNa1aQegfGVnwOZqpqOisPvfdeQyPuuMbfqrGcGoz8JzbWBejI%2BxXvQyWqirihZFUlRNa1M7FFMTlRnT5YjL5gMOqBZp0qa8IHWI1w33FEAvkjl2BIrPjtVygGUAHDvxSycc2jiVv3K%2FzadTUsA8h8lyB3YN87M9&X-Amz-Signature=946e48970c76bf2a5e0d8509819c2104c3eb49319f24124f10f19053c8434f54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHOW7QFI%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHAbdDGsPn%2BjRQhPyXNVVAvXoy81ku%2BxbG6%2FQPddjOXwAiAsaq9HC5TK8Sdn5mrW5sMsnkKmm5vcU3%2BW8nMxise2ByqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKpR9KvuPm1vM7WCUKtwDmn7vb7uca15Qo4eO2zBd6h1Vvrwk3W6fYM9Z6RXVbB7uCwLsUh7GoGbGzSSQTKQYK9CpLs3ee1k3UVPDhEZe%2FoPzgsYrLhImaqt7yaE0cTRY7L6U8s03ukRGtXYz8YEp6uAwCdTRRBeBRZwGB10xh7uflG23zaOVZeYW5Qz%2FoLebeUdXwxEYQJB%2FwBuIC66lJz4R9Stf%2BugDGGC3GoAujLGldpkvrnENx93VJuERkALKSXdfJUrJDHMTCxvTJbqTPlk6UsobbQAsv77%2BR2oCQhHr0nJo64eTjS6%2FQNfT6oY1HItUPikisYOeRYgQBZVb%2F2H%2Bs7z1K3VjSkzCaCsTZZ4WCe6c1Zm2CYCsR9U3fwyxpXgW4PlCP5ZGFySBItMdVkuqmW%2BNVMBK17JAXB9XlCtihZVRGmZTlGPKeUePjCcql2mnsX4IDfrvfjrSmTgYdqcQVHQe1xgsykv4VvP515WpQdGtPAqiv7K36vb5k1d%2BC04S8bry%2BSC6nfZAetOvO%2FQf6iHgCx%2F6jMZChaqQXS5iSNZp5IcxtSnrHV7%2FlklLpvOW%2FVlPvSMsXl2ZKTpy4OIjPLbuqpXKLHFsb1BJThPihpIJO1BbsGKMj%2Bf66x76FKN71acsU1lyItswqoWawAY6pgFCUNBR5Tlu3SFB7nNmq025mPwPFuHc6%2FvEzp9Af3TPt70m52yo0Rg%2BPwtX48C2gNa1aQegfGVnwOZqpqOisPvfdeQyPuuMbfqrGcGoz8JzbWBejI%2BxXvQyWqirihZFUlRNa1M7FFMTlRnT5YjL5gMOqBZp0qa8IHWI1w33FEAvkjl2BIrPjtVygGUAHDvxSycc2jiVv3K%2FzadTUsA8h8lyB3YN87M9&X-Amz-Signature=d664945c9a18e943d58cd4e5585bac793a7f7b679af8f5610916a7e7773673c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

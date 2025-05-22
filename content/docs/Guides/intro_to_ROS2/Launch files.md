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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSBG43NB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCICEa2zgcFN5e7b8JKt8ccraaXhLrHGMbiXAh2pZThHQKAiBN8FmKhJml6g9HlsLNYGEqT8Kcn64M%2BH2HK%2FzKxLsfwSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqtCp5HLM7%2BDzuIJBKtwD8JwZEVfsFdvdVKLyURk2FIAy4rBfN8vtWw7Q3Kwwikz2uzshRGCxlvs%2FQK9%2BWwo9D6266q92%2FethvLs%2FVV7arwwQFPWjpdVJm42pXMDMIZpmdcuM3%2FYN74g5ltvxHUibzacDD0n%2BDuX8vmI8SYvidn%2BFqLK7nZQItgqZcx3Ut%2BJXdjzLrewT05XtPcUmNjWrCpizp4oUTIsDlJI04etFAMdt4nWfnGqIir%2FduDUuvTYCjCo3ZHGgKB%2FE9k4BZwbtGq%2BUxhiAJTHo45d7xyzBStBCUBL2GGhCAEv0QH7oRdB4WQA0Un%2FULoGU5XouhUhc0s6M5xOKWONkRZ0ODfM69ZSgaVfs0XzSh6NWocYFAxTzxqv7zqTCX40F68N9m2Om8ayhOKAQjSbHMKD%2BiExtglLjTtXujkMC5D4c0MHEKK0%2BtK9hfNS6zW1zQCtvniJlYdPmQhLDnVuYwyfJ0kdLeWHFV5ERMyqYuxLIp327bF6qqoB8AjeN0f%2Fbrhv9Yi4GGimO61Va2tDns8yMMJ4YPgYN8CODULl6YLbY5zF%2BEAl72G6fneTb3B%2FaOZwDamMJ%2FJjIhwAlrjZk5AOB6TyfXy4Vm76FXku%2FyBeJxj0rVDrflQIgGyu0mw5eZIEw8ZO6wQY6pgEsRdhsWuoxrY3GlYSYMC9dLxQ%2FOCy0IxZ7VVf%2BtxugFu%2Bf6wKbg5%2BiDKdTaIyha%2FfQXI6TGQb53saksg%2FERGDwbZVlzVTpQ37sGU20VW62ryJV9%2B%2BtzQXT7dNk3Erz5MyKKoV0i%2BCfqXnlLZylT3puJufBqtxayN7yXIGw98%2BVVqFamtVU%2BdRaxovkzicRAUNMJiuP%2FF01VgTTcfrJDavJQZeDfqyu&X-Amz-Signature=a3408e1ba69c9a114b229b97dc7db8fcb4762d45a03efdfba2fd39fe8ca6e903&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSBG43NB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCICEa2zgcFN5e7b8JKt8ccraaXhLrHGMbiXAh2pZThHQKAiBN8FmKhJml6g9HlsLNYGEqT8Kcn64M%2BH2HK%2FzKxLsfwSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqtCp5HLM7%2BDzuIJBKtwD8JwZEVfsFdvdVKLyURk2FIAy4rBfN8vtWw7Q3Kwwikz2uzshRGCxlvs%2FQK9%2BWwo9D6266q92%2FethvLs%2FVV7arwwQFPWjpdVJm42pXMDMIZpmdcuM3%2FYN74g5ltvxHUibzacDD0n%2BDuX8vmI8SYvidn%2BFqLK7nZQItgqZcx3Ut%2BJXdjzLrewT05XtPcUmNjWrCpizp4oUTIsDlJI04etFAMdt4nWfnGqIir%2FduDUuvTYCjCo3ZHGgKB%2FE9k4BZwbtGq%2BUxhiAJTHo45d7xyzBStBCUBL2GGhCAEv0QH7oRdB4WQA0Un%2FULoGU5XouhUhc0s6M5xOKWONkRZ0ODfM69ZSgaVfs0XzSh6NWocYFAxTzxqv7zqTCX40F68N9m2Om8ayhOKAQjSbHMKD%2BiExtglLjTtXujkMC5D4c0MHEKK0%2BtK9hfNS6zW1zQCtvniJlYdPmQhLDnVuYwyfJ0kdLeWHFV5ERMyqYuxLIp327bF6qqoB8AjeN0f%2Fbrhv9Yi4GGimO61Va2tDns8yMMJ4YPgYN8CODULl6YLbY5zF%2BEAl72G6fneTb3B%2FaOZwDamMJ%2FJjIhwAlrjZk5AOB6TyfXy4Vm76FXku%2FyBeJxj0rVDrflQIgGyu0mw5eZIEw8ZO6wQY6pgEsRdhsWuoxrY3GlYSYMC9dLxQ%2FOCy0IxZ7VVf%2BtxugFu%2Bf6wKbg5%2BiDKdTaIyha%2FfQXI6TGQb53saksg%2FERGDwbZVlzVTpQ37sGU20VW62ryJV9%2B%2BtzQXT7dNk3Erz5MyKKoV0i%2BCfqXnlLZylT3puJufBqtxayN7yXIGw98%2BVVqFamtVU%2BdRaxovkzicRAUNMJiuP%2FF01VgTTcfrJDavJQZeDfqyu&X-Amz-Signature=e46b691dcaafbe72670a84c3ebd4a958d0ce5c803346a45c884012b48557b70d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSBG43NB%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCICEa2zgcFN5e7b8JKt8ccraaXhLrHGMbiXAh2pZThHQKAiBN8FmKhJml6g9HlsLNYGEqT8Kcn64M%2BH2HK%2FzKxLsfwSqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqtCp5HLM7%2BDzuIJBKtwD8JwZEVfsFdvdVKLyURk2FIAy4rBfN8vtWw7Q3Kwwikz2uzshRGCxlvs%2FQK9%2BWwo9D6266q92%2FethvLs%2FVV7arwwQFPWjpdVJm42pXMDMIZpmdcuM3%2FYN74g5ltvxHUibzacDD0n%2BDuX8vmI8SYvidn%2BFqLK7nZQItgqZcx3Ut%2BJXdjzLrewT05XtPcUmNjWrCpizp4oUTIsDlJI04etFAMdt4nWfnGqIir%2FduDUuvTYCjCo3ZHGgKB%2FE9k4BZwbtGq%2BUxhiAJTHo45d7xyzBStBCUBL2GGhCAEv0QH7oRdB4WQA0Un%2FULoGU5XouhUhc0s6M5xOKWONkRZ0ODfM69ZSgaVfs0XzSh6NWocYFAxTzxqv7zqTCX40F68N9m2Om8ayhOKAQjSbHMKD%2BiExtglLjTtXujkMC5D4c0MHEKK0%2BtK9hfNS6zW1zQCtvniJlYdPmQhLDnVuYwyfJ0kdLeWHFV5ERMyqYuxLIp327bF6qqoB8AjeN0f%2Fbrhv9Yi4GGimO61Va2tDns8yMMJ4YPgYN8CODULl6YLbY5zF%2BEAl72G6fneTb3B%2FaOZwDamMJ%2FJjIhwAlrjZk5AOB6TyfXy4Vm76FXku%2FyBeJxj0rVDrflQIgGyu0mw5eZIEw8ZO6wQY6pgEsRdhsWuoxrY3GlYSYMC9dLxQ%2FOCy0IxZ7VVf%2BtxugFu%2Bf6wKbg5%2BiDKdTaIyha%2FfQXI6TGQb53saksg%2FERGDwbZVlzVTpQ37sGU20VW62ryJV9%2B%2BtzQXT7dNk3Erz5MyKKoV0i%2BCfqXnlLZylT3puJufBqtxayN7yXIGw98%2BVVqFamtVU%2BdRaxovkzicRAUNMJiuP%2FF01VgTTcfrJDavJQZeDfqyu&X-Amz-Signature=8ba3bb94ead1959b594b13c951796f5286ff36408fb53b09e13c744e1080afeb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

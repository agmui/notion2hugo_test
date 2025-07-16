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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJGOV5UI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDoZtv%2BWMyvElxPANAnbqKa%2FL%2FbQ%2B4sWsK4%2BZYKNMvsEAiBezvL3%2FKz2ZXjqfjytVm3y2Q4wP3GlrgxybGudwtyNbSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMuV5gv1HND6pHXWK9KtwDREn8UJH3H44I%2BuAg5n66Fe%2BC0tOr%2BX%2BCI40UCrKT54kRzzztmoy0j3RpoZutyA6E96LQqhZhNF3edxzETzIG4deJS1E7NSXLFH1OzyAq8KYeAKmsJ8vNSWKz9XuHXvZ7SAGEYmZ1GPOh6izaalRJFRAi%2FOPSDViiTrU90plX1koe1XNCeO3Tnyb2gDqECiOcpftW15SNorKyAaHu8QXs1thiz2HRJvQna7YML9zt5ov38AX17AVgdFJ3wRH%2FMiQYS%2B8iAY94SAfhOXSaQxFFQe6VsPR5MvVilwghRMvy2K5F3Htwl7Z7eDra%2BFDX%2BbXaf8OgqD2Cdc3f%2FTsTUTspRiP5hvPNOHkfHf2a%2BuuFE3COZr%2F2%2Fdb%2FayJNGMyLOah0wX4XmPGICdDoVZeS21eA0S1PIZ3hNdW1lSxbefA5sdy0NBe3%2BJ4GOsGmftxbWNtSpLmGnoDYqqmIkb0KM7QoLHRKrzBq%2BFLyDMPr5gSkkRWMsWtPbR9ZpNFFHGHxN8ZJR8%2F0DFbserAi0GDJk3oo2oNxsjx%2FzsfZED2NbmH7Fki09Z4Xk%2FXowUEpWBj3xM%2Bh5vpNaokwJjIUrKz7PFKpNg1RLqL1Pe%2BQMQSdh1jTzIQH0aIZaj9M7nu4%2FUUwqZPewwY6pgGgX9p%2FYqsrKM2A6CyeXDM4dCfM%2FLBMbWdrAkFUoOI1ino4m00E4qVN%2BQq9lWrO6gfMi3%2BRINZIacHgxXtezLord6BTJBUWfdgMRZ8uM5T8kOHW56789TPelYD%2BNE9MRgtzf98D1a%2FAKyov4qhZXyS4LJf13R1s5ZQpIpUtOH3BXzNZpG%2BGsfAhc0DTfMMOQJDe%2BIq5oVWTWw9Lw62VySue2Fj1gZtN&X-Amz-Signature=d49c56429c066ce05e73e0f1592777cf4d53a590d0f88f4c934fae6f416d978f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJGOV5UI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDoZtv%2BWMyvElxPANAnbqKa%2FL%2FbQ%2B4sWsK4%2BZYKNMvsEAiBezvL3%2FKz2ZXjqfjytVm3y2Q4wP3GlrgxybGudwtyNbSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMuV5gv1HND6pHXWK9KtwDREn8UJH3H44I%2BuAg5n66Fe%2BC0tOr%2BX%2BCI40UCrKT54kRzzztmoy0j3RpoZutyA6E96LQqhZhNF3edxzETzIG4deJS1E7NSXLFH1OzyAq8KYeAKmsJ8vNSWKz9XuHXvZ7SAGEYmZ1GPOh6izaalRJFRAi%2FOPSDViiTrU90plX1koe1XNCeO3Tnyb2gDqECiOcpftW15SNorKyAaHu8QXs1thiz2HRJvQna7YML9zt5ov38AX17AVgdFJ3wRH%2FMiQYS%2B8iAY94SAfhOXSaQxFFQe6VsPR5MvVilwghRMvy2K5F3Htwl7Z7eDra%2BFDX%2BbXaf8OgqD2Cdc3f%2FTsTUTspRiP5hvPNOHkfHf2a%2BuuFE3COZr%2F2%2Fdb%2FayJNGMyLOah0wX4XmPGICdDoVZeS21eA0S1PIZ3hNdW1lSxbefA5sdy0NBe3%2BJ4GOsGmftxbWNtSpLmGnoDYqqmIkb0KM7QoLHRKrzBq%2BFLyDMPr5gSkkRWMsWtPbR9ZpNFFHGHxN8ZJR8%2F0DFbserAi0GDJk3oo2oNxsjx%2FzsfZED2NbmH7Fki09Z4Xk%2FXowUEpWBj3xM%2Bh5vpNaokwJjIUrKz7PFKpNg1RLqL1Pe%2BQMQSdh1jTzIQH0aIZaj9M7nu4%2FUUwqZPewwY6pgGgX9p%2FYqsrKM2A6CyeXDM4dCfM%2FLBMbWdrAkFUoOI1ino4m00E4qVN%2BQq9lWrO6gfMi3%2BRINZIacHgxXtezLord6BTJBUWfdgMRZ8uM5T8kOHW56789TPelYD%2BNE9MRgtzf98D1a%2FAKyov4qhZXyS4LJf13R1s5ZQpIpUtOH3BXzNZpG%2BGsfAhc0DTfMMOQJDe%2BIq5oVWTWw9Lw62VySue2Fj1gZtN&X-Amz-Signature=39421b62be511ae4a2733c5fe01a178e54e9719bdd4047520ee6ffdfba67d908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJGOV5UI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T133022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIDoZtv%2BWMyvElxPANAnbqKa%2FL%2FbQ%2B4sWsK4%2BZYKNMvsEAiBezvL3%2FKz2ZXjqfjytVm3y2Q4wP3GlrgxybGudwtyNbSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMuV5gv1HND6pHXWK9KtwDREn8UJH3H44I%2BuAg5n66Fe%2BC0tOr%2BX%2BCI40UCrKT54kRzzztmoy0j3RpoZutyA6E96LQqhZhNF3edxzETzIG4deJS1E7NSXLFH1OzyAq8KYeAKmsJ8vNSWKz9XuHXvZ7SAGEYmZ1GPOh6izaalRJFRAi%2FOPSDViiTrU90plX1koe1XNCeO3Tnyb2gDqECiOcpftW15SNorKyAaHu8QXs1thiz2HRJvQna7YML9zt5ov38AX17AVgdFJ3wRH%2FMiQYS%2B8iAY94SAfhOXSaQxFFQe6VsPR5MvVilwghRMvy2K5F3Htwl7Z7eDra%2BFDX%2BbXaf8OgqD2Cdc3f%2FTsTUTspRiP5hvPNOHkfHf2a%2BuuFE3COZr%2F2%2Fdb%2FayJNGMyLOah0wX4XmPGICdDoVZeS21eA0S1PIZ3hNdW1lSxbefA5sdy0NBe3%2BJ4GOsGmftxbWNtSpLmGnoDYqqmIkb0KM7QoLHRKrzBq%2BFLyDMPr5gSkkRWMsWtPbR9ZpNFFHGHxN8ZJR8%2F0DFbserAi0GDJk3oo2oNxsjx%2FzsfZED2NbmH7Fki09Z4Xk%2FXowUEpWBj3xM%2Bh5vpNaokwJjIUrKz7PFKpNg1RLqL1Pe%2BQMQSdh1jTzIQH0aIZaj9M7nu4%2FUUwqZPewwY6pgGgX9p%2FYqsrKM2A6CyeXDM4dCfM%2FLBMbWdrAkFUoOI1ino4m00E4qVN%2BQq9lWrO6gfMi3%2BRINZIacHgxXtezLord6BTJBUWfdgMRZ8uM5T8kOHW56789TPelYD%2BNE9MRgtzf98D1a%2FAKyov4qhZXyS4LJf13R1s5ZQpIpUtOH3BXzNZpG%2BGsfAhc0DTfMMOQJDe%2BIq5oVWTWw9Lw62VySue2Fj1gZtN&X-Amz-Signature=9e0659c95c20b8abb9526749959fd874eaa131af11884eac79070bbc8a23e1c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

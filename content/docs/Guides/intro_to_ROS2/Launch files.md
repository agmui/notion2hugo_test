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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVMBBFK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt2zMU0i5mR2HunU0UszEV0NJMq6fpluX6XTlix%2FGA5AIgHE21CNk5aeJL8qnBWZTc7IyJ4Uquupd3aeFf%2BNmX8P0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FlELOH09UHc2%2BvxircA0KqcgmjnSlTZC55kAGgEro4Vb0wXw5V4LTm8zAXtQh5kjj2pxBdnxAQEw0Yd12H9Ks7CGWuV9rQ2ueYSDvTfeM5SbzRPiKK%2Fmh2QXoJ9AgTarh1eO%2B1lDvapasXryaN6DYA9KoxV8GZaUMM1V6SA5pBFDpwU3Q23iULe4FoyMES%2FA5W3ZlY8cpdcRP2%2B1bL1njrxSbflVsiSU%2FQfXshw9nR%2BQQaeOFAhh9ANHhmc7esHnYhMNibzKrrj6JsCtn%2FMpAZ%2F%2BBoNYorwSIgcv7gVe99uRaBwvIdxLjbcBWoHY7oP3H%2BtvC3h04iFpt9imjCOl%2FEcAE7t077RHSJ88qE%2BcaTmaCbajPKX8ViSQm4HnZrxUVCblcNf83SGS5R5%2FYO1C6MWD6dWPIiDa0T4Sl%2FvOD697iF3ngpYqStgy7303cpcjPYgFRcOWHoKcgh9R8a%2BEEDzWm7eA%2BWhYQkUnUiPzdu%2BdLRc1O%2Bwv7o44K3hBTWhQVYB7wYGOFxlD483pNgeenL1nwFJcBF5LDsRpIAAVpdLlubE%2Fge%2B86YN8GWzVRTOU1IPjxWXb1BPbKZEKybI%2BS5TB2muLFXddSoa1CMBOea%2FUw6sZ%2FOzkS3OwLtOlh8FZ3VGmzkOpmcZ3nZMPCc%2FLwGOqUBAN%2FiSmZRSUVWEjlSmepJQhmmw31tx%2Ff8yvisSb05eRZRpdMAqV1qFINRRJzU0xHX480H9wZm8TvDTXkAtJdJu3SRZ%2BwCbVfRFTIbjHH%2BWY7OxdrdZ5XJ1RlxDl2pjVr5TAkKu%2BunoAqo%2BgAgTkTQNqD2X3VJcmZxbSWpyrOTiYx6kdr7hc6o1JR0qSxEPqCr%2Be4PgP%2Fm7Md4jICQSuuH0ULTVBy5&X-Amz-Signature=c913ab44ee852f2e6ce6ef17412ab894e48ce105761119325e95f3cd37093378&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVMBBFK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt2zMU0i5mR2HunU0UszEV0NJMq6fpluX6XTlix%2FGA5AIgHE21CNk5aeJL8qnBWZTc7IyJ4Uquupd3aeFf%2BNmX8P0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FlELOH09UHc2%2BvxircA0KqcgmjnSlTZC55kAGgEro4Vb0wXw5V4LTm8zAXtQh5kjj2pxBdnxAQEw0Yd12H9Ks7CGWuV9rQ2ueYSDvTfeM5SbzRPiKK%2Fmh2QXoJ9AgTarh1eO%2B1lDvapasXryaN6DYA9KoxV8GZaUMM1V6SA5pBFDpwU3Q23iULe4FoyMES%2FA5W3ZlY8cpdcRP2%2B1bL1njrxSbflVsiSU%2FQfXshw9nR%2BQQaeOFAhh9ANHhmc7esHnYhMNibzKrrj6JsCtn%2FMpAZ%2F%2BBoNYorwSIgcv7gVe99uRaBwvIdxLjbcBWoHY7oP3H%2BtvC3h04iFpt9imjCOl%2FEcAE7t077RHSJ88qE%2BcaTmaCbajPKX8ViSQm4HnZrxUVCblcNf83SGS5R5%2FYO1C6MWD6dWPIiDa0T4Sl%2FvOD697iF3ngpYqStgy7303cpcjPYgFRcOWHoKcgh9R8a%2BEEDzWm7eA%2BWhYQkUnUiPzdu%2BdLRc1O%2Bwv7o44K3hBTWhQVYB7wYGOFxlD483pNgeenL1nwFJcBF5LDsRpIAAVpdLlubE%2Fge%2B86YN8GWzVRTOU1IPjxWXb1BPbKZEKybI%2BS5TB2muLFXddSoa1CMBOea%2FUw6sZ%2FOzkS3OwLtOlh8FZ3VGmzkOpmcZ3nZMPCc%2FLwGOqUBAN%2FiSmZRSUVWEjlSmepJQhmmw31tx%2Ff8yvisSb05eRZRpdMAqV1qFINRRJzU0xHX480H9wZm8TvDTXkAtJdJu3SRZ%2BwCbVfRFTIbjHH%2BWY7OxdrdZ5XJ1RlxDl2pjVr5TAkKu%2BunoAqo%2BgAgTkTQNqD2X3VJcmZxbSWpyrOTiYx6kdr7hc6o1JR0qSxEPqCr%2Be4PgP%2Fm7Md4jICQSuuH0ULTVBy5&X-Amz-Signature=442dbcffc6d1d0ea5762c946c9d76167981503d1717acbaf9b5e7f8db5d45080&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUVMBBFK%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T070119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt2zMU0i5mR2HunU0UszEV0NJMq6fpluX6XTlix%2FGA5AIgHE21CNk5aeJL8qnBWZTc7IyJ4Uquupd3aeFf%2BNmX8P0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC%2FlELOH09UHc2%2BvxircA0KqcgmjnSlTZC55kAGgEro4Vb0wXw5V4LTm8zAXtQh5kjj2pxBdnxAQEw0Yd12H9Ks7CGWuV9rQ2ueYSDvTfeM5SbzRPiKK%2Fmh2QXoJ9AgTarh1eO%2B1lDvapasXryaN6DYA9KoxV8GZaUMM1V6SA5pBFDpwU3Q23iULe4FoyMES%2FA5W3ZlY8cpdcRP2%2B1bL1njrxSbflVsiSU%2FQfXshw9nR%2BQQaeOFAhh9ANHhmc7esHnYhMNibzKrrj6JsCtn%2FMpAZ%2F%2BBoNYorwSIgcv7gVe99uRaBwvIdxLjbcBWoHY7oP3H%2BtvC3h04iFpt9imjCOl%2FEcAE7t077RHSJ88qE%2BcaTmaCbajPKX8ViSQm4HnZrxUVCblcNf83SGS5R5%2FYO1C6MWD6dWPIiDa0T4Sl%2FvOD697iF3ngpYqStgy7303cpcjPYgFRcOWHoKcgh9R8a%2BEEDzWm7eA%2BWhYQkUnUiPzdu%2BdLRc1O%2Bwv7o44K3hBTWhQVYB7wYGOFxlD483pNgeenL1nwFJcBF5LDsRpIAAVpdLlubE%2Fge%2B86YN8GWzVRTOU1IPjxWXb1BPbKZEKybI%2BS5TB2muLFXddSoa1CMBOea%2FUw6sZ%2FOzkS3OwLtOlh8FZ3VGmzkOpmcZ3nZMPCc%2FLwGOqUBAN%2FiSmZRSUVWEjlSmepJQhmmw31tx%2Ff8yvisSb05eRZRpdMAqV1qFINRRJzU0xHX480H9wZm8TvDTXkAtJdJu3SRZ%2BwCbVfRFTIbjHH%2BWY7OxdrdZ5XJ1RlxDl2pjVr5TAkKu%2BunoAqo%2BgAgTkTQNqD2X3VJcmZxbSWpyrOTiYx6kdr7hc6o1JR0qSxEPqCr%2Be4PgP%2Fm7Md4jICQSuuH0ULTVBy5&X-Amz-Signature=62bb918f4caf30d5f564a86a900518b9e1323ea5476aa1e57aa3a1c9939d70f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

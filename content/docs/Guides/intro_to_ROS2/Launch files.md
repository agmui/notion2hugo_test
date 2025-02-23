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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEYLU37%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMSw87K6lQzo9AHcz%2BppAI3RX7HMcqhW%2FczKGFwST0sAiEA%2FVopP9twtlZOcQFUWdjhLamrFrXUNEzFTV82qBxKEOMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOipsV7E9IONd3oknCrcA6R8A2YKgUVidiM%2FS06tSuE8kUeZ1L1X5XXyNSIr4%2BgNbLP3%2BgodwBlVEZgcauTGPvJhqTrtCotSLPk2FTmGXj2ERiee9Kj%2FZmwm4XyyTkcWtVlvcTRUTS%2F7n7HIg9fmRiSZgf5OIYFrRN%2Bsv%2FqdBvl34q3AKZPbGeLJF4U3OV%2Ff1rNO3%2BYTzjGOI68aLN5ZynwVDHomov4M126MazIq%2Fmr8%2FoYcqpKTiL%2Br565z%2Bidc7q%2F%2FupBYg2c9jhmf0p%2BUhCTnQqHMzshBxPldx1TJCiTCLLdHZzNq%2F%2FWJOh1jdPVGAvjzi5MYZ4kLxfI%2Bioc04XUOypA5xqc%2BfEFZtjTndZIFgYgUKzntfToH5DNvY31u%2FQUJt1RrrGNNTwL3300SCJEeM6AOQQpNJuwlXGWedNm9F3MQX0pJv3XFFlx0pDrDDxyQjOtDSJugYjwHf00%2B5J%2Fnf66hu2rw2Yx7I1x4XkghMf97dkjVIUj61BgA3KdmVx0njVIuuMmWFQNMNnXlRFD%2Bptao3e1YSwbyyC8jCTfnwROBiy%2Fyi%2BVMn1wLJtMlkPaMMT92KNVLrOrNBNJtDi91Of2IOpV%2Fs%2BGHSzkXkg2Gbs3luDKqzOr%2BQ8Stn4alLIaXeyAre5d8PBPfML%2FJ670GOqUBeRk5EDgHm%2B9tqElO0bImgI3w1Vgi%2FwS3UEqEenB3YB4ISBXG3LOTiDccpOcZTl6nyFp5LnfQPtulRjAG3%2FE0v27O88n6%2FSR7mSl5x9lUidi044fHjMI%2Bsh%2FraLBwOvycy8OC47iZMW%2FtcKn3XdL6JZuuO55RfiZxlVNpHwqKUuFrQV6yZEE5Kew9QKgiEryctt8ojP04l0oHaOHFrxXskDRDho0N&X-Amz-Signature=65596365d47e248c0a0d0d1a8f69302dc3d3b1c2d6dc05dde5a50d76e3792c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEYLU37%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMSw87K6lQzo9AHcz%2BppAI3RX7HMcqhW%2FczKGFwST0sAiEA%2FVopP9twtlZOcQFUWdjhLamrFrXUNEzFTV82qBxKEOMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOipsV7E9IONd3oknCrcA6R8A2YKgUVidiM%2FS06tSuE8kUeZ1L1X5XXyNSIr4%2BgNbLP3%2BgodwBlVEZgcauTGPvJhqTrtCotSLPk2FTmGXj2ERiee9Kj%2FZmwm4XyyTkcWtVlvcTRUTS%2F7n7HIg9fmRiSZgf5OIYFrRN%2Bsv%2FqdBvl34q3AKZPbGeLJF4U3OV%2Ff1rNO3%2BYTzjGOI68aLN5ZynwVDHomov4M126MazIq%2Fmr8%2FoYcqpKTiL%2Br565z%2Bidc7q%2F%2FupBYg2c9jhmf0p%2BUhCTnQqHMzshBxPldx1TJCiTCLLdHZzNq%2F%2FWJOh1jdPVGAvjzi5MYZ4kLxfI%2Bioc04XUOypA5xqc%2BfEFZtjTndZIFgYgUKzntfToH5DNvY31u%2FQUJt1RrrGNNTwL3300SCJEeM6AOQQpNJuwlXGWedNm9F3MQX0pJv3XFFlx0pDrDDxyQjOtDSJugYjwHf00%2B5J%2Fnf66hu2rw2Yx7I1x4XkghMf97dkjVIUj61BgA3KdmVx0njVIuuMmWFQNMNnXlRFD%2Bptao3e1YSwbyyC8jCTfnwROBiy%2Fyi%2BVMn1wLJtMlkPaMMT92KNVLrOrNBNJtDi91Of2IOpV%2Fs%2BGHSzkXkg2Gbs3luDKqzOr%2BQ8Stn4alLIaXeyAre5d8PBPfML%2FJ670GOqUBeRk5EDgHm%2B9tqElO0bImgI3w1Vgi%2FwS3UEqEenB3YB4ISBXG3LOTiDccpOcZTl6nyFp5LnfQPtulRjAG3%2FE0v27O88n6%2FSR7mSl5x9lUidi044fHjMI%2Bsh%2FraLBwOvycy8OC47iZMW%2FtcKn3XdL6JZuuO55RfiZxlVNpHwqKUuFrQV6yZEE5Kew9QKgiEryctt8ojP04l0oHaOHFrxXskDRDho0N&X-Amz-Signature=b7f31710de46dadd5dd95363ee8225309712412ad8a197848436a88a28821880&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REEYLU37%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T131156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMSw87K6lQzo9AHcz%2BppAI3RX7HMcqhW%2FczKGFwST0sAiEA%2FVopP9twtlZOcQFUWdjhLamrFrXUNEzFTV82qBxKEOMq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOipsV7E9IONd3oknCrcA6R8A2YKgUVidiM%2FS06tSuE8kUeZ1L1X5XXyNSIr4%2BgNbLP3%2BgodwBlVEZgcauTGPvJhqTrtCotSLPk2FTmGXj2ERiee9Kj%2FZmwm4XyyTkcWtVlvcTRUTS%2F7n7HIg9fmRiSZgf5OIYFrRN%2Bsv%2FqdBvl34q3AKZPbGeLJF4U3OV%2Ff1rNO3%2BYTzjGOI68aLN5ZynwVDHomov4M126MazIq%2Fmr8%2FoYcqpKTiL%2Br565z%2Bidc7q%2F%2FupBYg2c9jhmf0p%2BUhCTnQqHMzshBxPldx1TJCiTCLLdHZzNq%2F%2FWJOh1jdPVGAvjzi5MYZ4kLxfI%2Bioc04XUOypA5xqc%2BfEFZtjTndZIFgYgUKzntfToH5DNvY31u%2FQUJt1RrrGNNTwL3300SCJEeM6AOQQpNJuwlXGWedNm9F3MQX0pJv3XFFlx0pDrDDxyQjOtDSJugYjwHf00%2B5J%2Fnf66hu2rw2Yx7I1x4XkghMf97dkjVIUj61BgA3KdmVx0njVIuuMmWFQNMNnXlRFD%2Bptao3e1YSwbyyC8jCTfnwROBiy%2Fyi%2BVMn1wLJtMlkPaMMT92KNVLrOrNBNJtDi91Of2IOpV%2Fs%2BGHSzkXkg2Gbs3luDKqzOr%2BQ8Stn4alLIaXeyAre5d8PBPfML%2FJ670GOqUBeRk5EDgHm%2B9tqElO0bImgI3w1Vgi%2FwS3UEqEenB3YB4ISBXG3LOTiDccpOcZTl6nyFp5LnfQPtulRjAG3%2FE0v27O88n6%2FSR7mSl5x9lUidi044fHjMI%2Bsh%2FraLBwOvycy8OC47iZMW%2FtcKn3XdL6JZuuO55RfiZxlVNpHwqKUuFrQV6yZEE5Kew9QKgiEryctt8ojP04l0oHaOHFrxXskDRDho0N&X-Amz-Signature=820fb0c30a627ba856f6c0fbefede082ea4b3db18beac065d1efc02d412f29b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

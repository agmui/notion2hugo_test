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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GVZBX5O%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9LH1%2FtKfPuYf0WgfZo2cCOuh0aGs9GsXmZgnS4rJQWwIgIBtbXbgUT%2Fq9u4Y4o9Lmcd%2FUfGbfeC5ILzQWWLMFqR4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBHaZkJHaBvvvolS4SrcAxZlAMWXW8HVyIbJjlluovcP3ft3rPh7qVqo%2FT5i%2B%2B6a0XVHJqFilQTfvSx%2FI68YjmIp8ZBrNqjqs2gAM7Xk8dJEaHOKz5Ps%2B2Yn35HmOXCAf1MhKB4cMr%2Bvy2eHf8%2FriuflJH8IRdtS2wkcwX%2BkiyD6fcYKxs%2F1Q9MVD3mLB80bWRFJmB9MHhSfobs9vJLhsCZptdouivvrrRCwFeJeWDqt2sbdkG9WR5UkZ5Mj8vtxbNYACMx2yGBzENCkNlFmvpPhZZb7aGvEG0789NY7PaW2zGfZwDPa%2FUh2BOf%2Bftt3NJh9N6TDWREyuVUcukQLgXLY5pMu9s8jxeK3jn4pd7B3MKFtAvxEi%2B%2FVOF0OsPUT8BZLFn5KhR%2B5BhptVd8heYWpFyRJp%2FJdM1JZjGGxCk541aAQXGc03DKPJB0Qjtt9vaXY9og2jp9ap8nXIV9wzIyuYbzXx2O4eYXgjcrxCqGJ1KOPTMSAPkKcdj%2FraiH61DVgBByZA%2BDq77xDpX2%2FXjf8YTZGf5uc8KbXBXDtd4RhemVPY4rbsADCLiXqzcFlVznRxhyZyzp8RAzbOoFm47oZwwCRuAGXeuLPs%2B90iU%2BRdNtAA65AXYsJN50lBsv5YpeFH%2F7cbyxWdToQMOb0hsAGOqUB%2BL6%2F7tNi9kuRXP1cUYe1mUlKnPjLpOhs2EDNGsJ4uffn%2F8MjVksKUlmkkrQ10p6slE1OSzDPYgnJJuashqc%2FNZf3hr4mOO5ynr4tNONiBl%2FIxN7tUNWlo4TLIwyFDuCLet03z7hyjggW%2BNkoO3MxTDkiJcih9OlS0hjneCW7qee4gwKKgJuQw6Gpe3BzVl6SGQxKDIryGzopFT2s4Nlqvss8qhXT&X-Amz-Signature=6ba7754a4fdcb34c787a428ee4dc50f0853cdd4982cbb5692d7a38136db13f15&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GVZBX5O%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9LH1%2FtKfPuYf0WgfZo2cCOuh0aGs9GsXmZgnS4rJQWwIgIBtbXbgUT%2Fq9u4Y4o9Lmcd%2FUfGbfeC5ILzQWWLMFqR4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBHaZkJHaBvvvolS4SrcAxZlAMWXW8HVyIbJjlluovcP3ft3rPh7qVqo%2FT5i%2B%2B6a0XVHJqFilQTfvSx%2FI68YjmIp8ZBrNqjqs2gAM7Xk8dJEaHOKz5Ps%2B2Yn35HmOXCAf1MhKB4cMr%2Bvy2eHf8%2FriuflJH8IRdtS2wkcwX%2BkiyD6fcYKxs%2F1Q9MVD3mLB80bWRFJmB9MHhSfobs9vJLhsCZptdouivvrrRCwFeJeWDqt2sbdkG9WR5UkZ5Mj8vtxbNYACMx2yGBzENCkNlFmvpPhZZb7aGvEG0789NY7PaW2zGfZwDPa%2FUh2BOf%2Bftt3NJh9N6TDWREyuVUcukQLgXLY5pMu9s8jxeK3jn4pd7B3MKFtAvxEi%2B%2FVOF0OsPUT8BZLFn5KhR%2B5BhptVd8heYWpFyRJp%2FJdM1JZjGGxCk541aAQXGc03DKPJB0Qjtt9vaXY9og2jp9ap8nXIV9wzIyuYbzXx2O4eYXgjcrxCqGJ1KOPTMSAPkKcdj%2FraiH61DVgBByZA%2BDq77xDpX2%2FXjf8YTZGf5uc8KbXBXDtd4RhemVPY4rbsADCLiXqzcFlVznRxhyZyzp8RAzbOoFm47oZwwCRuAGXeuLPs%2B90iU%2BRdNtAA65AXYsJN50lBsv5YpeFH%2F7cbyxWdToQMOb0hsAGOqUB%2BL6%2F7tNi9kuRXP1cUYe1mUlKnPjLpOhs2EDNGsJ4uffn%2F8MjVksKUlmkkrQ10p6slE1OSzDPYgnJJuashqc%2FNZf3hr4mOO5ynr4tNONiBl%2FIxN7tUNWlo4TLIwyFDuCLet03z7hyjggW%2BNkoO3MxTDkiJcih9OlS0hjneCW7qee4gwKKgJuQw6Gpe3BzVl6SGQxKDIryGzopFT2s4Nlqvss8qhXT&X-Amz-Signature=7448459e0431bc7119314050b7101720c277684d686d584e66d3470d5b0641ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GVZBX5O%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9LH1%2FtKfPuYf0WgfZo2cCOuh0aGs9GsXmZgnS4rJQWwIgIBtbXbgUT%2Fq9u4Y4o9Lmcd%2FUfGbfeC5ILzQWWLMFqR4q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDBHaZkJHaBvvvolS4SrcAxZlAMWXW8HVyIbJjlluovcP3ft3rPh7qVqo%2FT5i%2B%2B6a0XVHJqFilQTfvSx%2FI68YjmIp8ZBrNqjqs2gAM7Xk8dJEaHOKz5Ps%2B2Yn35HmOXCAf1MhKB4cMr%2Bvy2eHf8%2FriuflJH8IRdtS2wkcwX%2BkiyD6fcYKxs%2F1Q9MVD3mLB80bWRFJmB9MHhSfobs9vJLhsCZptdouivvrrRCwFeJeWDqt2sbdkG9WR5UkZ5Mj8vtxbNYACMx2yGBzENCkNlFmvpPhZZb7aGvEG0789NY7PaW2zGfZwDPa%2FUh2BOf%2Bftt3NJh9N6TDWREyuVUcukQLgXLY5pMu9s8jxeK3jn4pd7B3MKFtAvxEi%2B%2FVOF0OsPUT8BZLFn5KhR%2B5BhptVd8heYWpFyRJp%2FJdM1JZjGGxCk541aAQXGc03DKPJB0Qjtt9vaXY9og2jp9ap8nXIV9wzIyuYbzXx2O4eYXgjcrxCqGJ1KOPTMSAPkKcdj%2FraiH61DVgBByZA%2BDq77xDpX2%2FXjf8YTZGf5uc8KbXBXDtd4RhemVPY4rbsADCLiXqzcFlVznRxhyZyzp8RAzbOoFm47oZwwCRuAGXeuLPs%2B90iU%2BRdNtAA65AXYsJN50lBsv5YpeFH%2F7cbyxWdToQMOb0hsAGOqUB%2BL6%2F7tNi9kuRXP1cUYe1mUlKnPjLpOhs2EDNGsJ4uffn%2F8MjVksKUlmkkrQ10p6slE1OSzDPYgnJJuashqc%2FNZf3hr4mOO5ynr4tNONiBl%2FIxN7tUNWlo4TLIwyFDuCLet03z7hyjggW%2BNkoO3MxTDkiJcih9OlS0hjneCW7qee4gwKKgJuQw6Gpe3BzVl6SGQxKDIryGzopFT2s4Nlqvss8qhXT&X-Amz-Signature=84c86bc69024dddaef12368eb408ed5f771ca8ea29b3aef8bead25b9b02df4f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

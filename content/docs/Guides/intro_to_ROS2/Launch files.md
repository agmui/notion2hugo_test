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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663766XOLU%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpa5sw2hMFhph1UhQpnaNFMwyPJEuEh28oXoOzGJBgMwIgP6HcOpjE4NQjuxa2ZYlAIrO6kQwrk%2BpGJWwIP%2BuhTbkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMwlsh2Y3oThLs59%2FyrcAyXy6C8kpIN76LmCyS%2Bg8r6npv30tq%2Fmd%2FT%2BBvqsShpzc9qS5k5FfX4q8vtp8FrPSI7C%2FW8DAU3UYmPF%2FhIN6%2BHGPlv9P829o8Wh0%2BHjwCcYSD0J%2Bv0jP3rOpemXOL2PituDrHSUZToNhOmaxgC%2FisV8iDSZNmwnh7Sih8DQyWnrYN4NJDmAKGI7N2nnc1%2FIDjP%2F74x6l63g4AkcYAJ16dFy2I%2Fnjf9UfC0wSHUDCzLDJqBJVcg6AnpNNKAibgiuYQbVcfiGOxK1l8oCbQh9J4Pbtsky7gTiJPtxLdJ2k%2BcVBBBmGN7dx%2BXzHNSirloY2Lu3ZkZefPS1xUFa0QHem0lGw%2Fk3oHh%2FRiCYhNP6lm7Oo50%2BICARYjXUR4NNh%2Bl080xlcXS17XuQ5WcG2Q%2FzUAV2IyCB3PNqAyTf7kdXLivbjmz914tEq81W6FOelSp61fRO78KtFVKvYoeY8jSZMkqWHd8wQksc0uZ%2BardyJ0OFRiJlJF2sIl7Bzr9OcBmFDf3GZ1XLG%2FjNuWg74Z1SZljUd5IzjdXpOLzj6WOVytAoj2Cfjrhmlu%2BHVPfxj%2BzgRe%2BIJ5JLzw8xu4DuDtrrDIwsoybz2v4TCicAhFadCh0Npr0hefXg3FzDZWcgMNyHhsAGOqUBE8w8HBQBDYi%2FQbQlQrU2Wt3KTLNhKn8y5xUQJEiuosuxeo3fDbFhLI6NyB%2FPo9nsMol%2F3Mgzg%2FiwHn5ir2q3HLifLN%2BD2gKegcV3j1ee6sgzuwEl5G19SBQXG3TGbEeRw%2BtNtbQgPAS3kJnSC6QFN%2BV9DQ3I1UZhewFuJY6nlfNkXyou%2B7VNctfyQ0cBhMZAYb1iHTU89mt4MHy00mAzyNC1oqJl&X-Amz-Signature=73caf553c0ee19f7c10b1ba815d0025686aab8be26dc57573276d6b9b3042e7a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663766XOLU%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpa5sw2hMFhph1UhQpnaNFMwyPJEuEh28oXoOzGJBgMwIgP6HcOpjE4NQjuxa2ZYlAIrO6kQwrk%2BpGJWwIP%2BuhTbkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMwlsh2Y3oThLs59%2FyrcAyXy6C8kpIN76LmCyS%2Bg8r6npv30tq%2Fmd%2FT%2BBvqsShpzc9qS5k5FfX4q8vtp8FrPSI7C%2FW8DAU3UYmPF%2FhIN6%2BHGPlv9P829o8Wh0%2BHjwCcYSD0J%2Bv0jP3rOpemXOL2PituDrHSUZToNhOmaxgC%2FisV8iDSZNmwnh7Sih8DQyWnrYN4NJDmAKGI7N2nnc1%2FIDjP%2F74x6l63g4AkcYAJ16dFy2I%2Fnjf9UfC0wSHUDCzLDJqBJVcg6AnpNNKAibgiuYQbVcfiGOxK1l8oCbQh9J4Pbtsky7gTiJPtxLdJ2k%2BcVBBBmGN7dx%2BXzHNSirloY2Lu3ZkZefPS1xUFa0QHem0lGw%2Fk3oHh%2FRiCYhNP6lm7Oo50%2BICARYjXUR4NNh%2Bl080xlcXS17XuQ5WcG2Q%2FzUAV2IyCB3PNqAyTf7kdXLivbjmz914tEq81W6FOelSp61fRO78KtFVKvYoeY8jSZMkqWHd8wQksc0uZ%2BardyJ0OFRiJlJF2sIl7Bzr9OcBmFDf3GZ1XLG%2FjNuWg74Z1SZljUd5IzjdXpOLzj6WOVytAoj2Cfjrhmlu%2BHVPfxj%2BzgRe%2BIJ5JLzw8xu4DuDtrrDIwsoybz2v4TCicAhFadCh0Npr0hefXg3FzDZWcgMNyHhsAGOqUBE8w8HBQBDYi%2FQbQlQrU2Wt3KTLNhKn8y5xUQJEiuosuxeo3fDbFhLI6NyB%2FPo9nsMol%2F3Mgzg%2FiwHn5ir2q3HLifLN%2BD2gKegcV3j1ee6sgzuwEl5G19SBQXG3TGbEeRw%2BtNtbQgPAS3kJnSC6QFN%2BV9DQ3I1UZhewFuJY6nlfNkXyou%2B7VNctfyQ0cBhMZAYb1iHTU89mt4MHy00mAzyNC1oqJl&X-Amz-Signature=30fb7eb1db09f401062bf714b1c444df74fd77631844d8c48257b36a4895e0bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663766XOLU%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpa5sw2hMFhph1UhQpnaNFMwyPJEuEh28oXoOzGJBgMwIgP6HcOpjE4NQjuxa2ZYlAIrO6kQwrk%2BpGJWwIP%2BuhTbkq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDMwlsh2Y3oThLs59%2FyrcAyXy6C8kpIN76LmCyS%2Bg8r6npv30tq%2Fmd%2FT%2BBvqsShpzc9qS5k5FfX4q8vtp8FrPSI7C%2FW8DAU3UYmPF%2FhIN6%2BHGPlv9P829o8Wh0%2BHjwCcYSD0J%2Bv0jP3rOpemXOL2PituDrHSUZToNhOmaxgC%2FisV8iDSZNmwnh7Sih8DQyWnrYN4NJDmAKGI7N2nnc1%2FIDjP%2F74x6l63g4AkcYAJ16dFy2I%2Fnjf9UfC0wSHUDCzLDJqBJVcg6AnpNNKAibgiuYQbVcfiGOxK1l8oCbQh9J4Pbtsky7gTiJPtxLdJ2k%2BcVBBBmGN7dx%2BXzHNSirloY2Lu3ZkZefPS1xUFa0QHem0lGw%2Fk3oHh%2FRiCYhNP6lm7Oo50%2BICARYjXUR4NNh%2Bl080xlcXS17XuQ5WcG2Q%2FzUAV2IyCB3PNqAyTf7kdXLivbjmz914tEq81W6FOelSp61fRO78KtFVKvYoeY8jSZMkqWHd8wQksc0uZ%2BardyJ0OFRiJlJF2sIl7Bzr9OcBmFDf3GZ1XLG%2FjNuWg74Z1SZljUd5IzjdXpOLzj6WOVytAoj2Cfjrhmlu%2BHVPfxj%2BzgRe%2BIJ5JLzw8xu4DuDtrrDIwsoybz2v4TCicAhFadCh0Npr0hefXg3FzDZWcgMNyHhsAGOqUBE8w8HBQBDYi%2FQbQlQrU2Wt3KTLNhKn8y5xUQJEiuosuxeo3fDbFhLI6NyB%2FPo9nsMol%2F3Mgzg%2FiwHn5ir2q3HLifLN%2BD2gKegcV3j1ee6sgzuwEl5G19SBQXG3TGbEeRw%2BtNtbQgPAS3kJnSC6QFN%2BV9DQ3I1UZhewFuJY6nlfNkXyou%2B7VNctfyQ0cBhMZAYb1iHTU89mt4MHy00mAzyNC1oqJl&X-Amz-Signature=e625f87f3f3f7b43a0311ad6ff6bd4c19e2575505ee56fd8785b3dbffcdba77e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

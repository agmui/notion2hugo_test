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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2T5M2R%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD4A1XM7Gl9HunwXqeWgF%2BwjBtvImGPvElxwZnmhhg%2BkQIgNrw2b%2Br%2BVBg%2Bri3f%2FGieOfLJ1mZGnrgaqlgGe4kfDUoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDA%2BDxwI%2BS72NbuZ3wCrcA%2Bml8qAgHpBJfIFmAKg3TAf%2FncB7sUCHSIMom8bCi%2BRfW%2F0X22F%2Fau1h%2B3RLWITDm08WM%2FTPerosAn%2FZsRgrR37cjAD6m6Yu4adBkLMClBlVvoVCqvKE5519XVZa6kDWIVGLkgjJ4QVWQvNjBv1tCyvtSNQXwUUQixEr4S9weuwTjy%2FuF9zsUizKzhvxLE10s40f0sOs%2Br03rC5J%2FlHoHtnHEnFhcsXvrUSBFfcJBPva8pKCmuMKQKw2dvKQjq9OZyWC2fAExprY5n00nHpt6ai8I4SOMv2%2F7ptjLOWSn1AhKjMmftfGTSSHzB1vQGFAAz7Gny1bKDCEVGqn8iCEuzgENZswMQbxlFvDCJQBuoNHUIHYuqR5CIt2die9hqaK16F4cPTuLFk%2FgqBfgRadj9tzobMP258PnXJp3cDCpl4PNjdmXb8escY7BwaS2v9jJ%2FsEYtXRyeDzh8UoZIXJxRzof7Mczj7z%2BJWt%2Fc8VnR%2BL3cGvlzREsiBPlb7p3oTIHIqXE9uHUXQ5mdtV7E%2F8RJIlCAm2v%2FfX1Wu4JIGomiziepmuLS1mdIGHSFJqq9nE9aZOtpfF9b4z3lDwpCJIaXyB3faB%2BdmDaViN7l1rrj5FLXT7%2BTFhnejm%2Bpm0MKeurcMGOqUBgcQTJeoFXEeoR%2BWODND5FU112QrfaxfBVDXe5Ii6viqB7CWsDONNH3Zy4rAMOy6huAzJiFF5td%2Fkasx6BjjfVQveLLTozoU6JR2C1%2BuPN4V9cm8gQHvRpIhAyfSmLRdHmyZLBGHl8MP%2B6qxTReDkEmg%2B3wOYdFaG13ZazoeO8NI0IcyCsxREexis5rSVWp6OaqAlp9g21pC%2FC2PiYrojne8rkoqm&X-Amz-Signature=ad9016b2b8109904c22829c42c63ea5d3673c5e4328259c1e15c52e740fd4e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2T5M2R%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD4A1XM7Gl9HunwXqeWgF%2BwjBtvImGPvElxwZnmhhg%2BkQIgNrw2b%2Br%2BVBg%2Bri3f%2FGieOfLJ1mZGnrgaqlgGe4kfDUoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDA%2BDxwI%2BS72NbuZ3wCrcA%2Bml8qAgHpBJfIFmAKg3TAf%2FncB7sUCHSIMom8bCi%2BRfW%2F0X22F%2Fau1h%2B3RLWITDm08WM%2FTPerosAn%2FZsRgrR37cjAD6m6Yu4adBkLMClBlVvoVCqvKE5519XVZa6kDWIVGLkgjJ4QVWQvNjBv1tCyvtSNQXwUUQixEr4S9weuwTjy%2FuF9zsUizKzhvxLE10s40f0sOs%2Br03rC5J%2FlHoHtnHEnFhcsXvrUSBFfcJBPva8pKCmuMKQKw2dvKQjq9OZyWC2fAExprY5n00nHpt6ai8I4SOMv2%2F7ptjLOWSn1AhKjMmftfGTSSHzB1vQGFAAz7Gny1bKDCEVGqn8iCEuzgENZswMQbxlFvDCJQBuoNHUIHYuqR5CIt2die9hqaK16F4cPTuLFk%2FgqBfgRadj9tzobMP258PnXJp3cDCpl4PNjdmXb8escY7BwaS2v9jJ%2FsEYtXRyeDzh8UoZIXJxRzof7Mczj7z%2BJWt%2Fc8VnR%2BL3cGvlzREsiBPlb7p3oTIHIqXE9uHUXQ5mdtV7E%2F8RJIlCAm2v%2FfX1Wu4JIGomiziepmuLS1mdIGHSFJqq9nE9aZOtpfF9b4z3lDwpCJIaXyB3faB%2BdmDaViN7l1rrj5FLXT7%2BTFhnejm%2Bpm0MKeurcMGOqUBgcQTJeoFXEeoR%2BWODND5FU112QrfaxfBVDXe5Ii6viqB7CWsDONNH3Zy4rAMOy6huAzJiFF5td%2Fkasx6BjjfVQveLLTozoU6JR2C1%2BuPN4V9cm8gQHvRpIhAyfSmLRdHmyZLBGHl8MP%2B6qxTReDkEmg%2B3wOYdFaG13ZazoeO8NI0IcyCsxREexis5rSVWp6OaqAlp9g21pC%2FC2PiYrojne8rkoqm&X-Amz-Signature=b925f6c777f7bd562f45afbaf9f5d3e7183d96c57e6e6d8f702e6e93c0c8dd60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ2T5M2R%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD4A1XM7Gl9HunwXqeWgF%2BwjBtvImGPvElxwZnmhhg%2BkQIgNrw2b%2Br%2BVBg%2Bri3f%2FGieOfLJ1mZGnrgaqlgGe4kfDUoq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDA%2BDxwI%2BS72NbuZ3wCrcA%2Bml8qAgHpBJfIFmAKg3TAf%2FncB7sUCHSIMom8bCi%2BRfW%2F0X22F%2Fau1h%2B3RLWITDm08WM%2FTPerosAn%2FZsRgrR37cjAD6m6Yu4adBkLMClBlVvoVCqvKE5519XVZa6kDWIVGLkgjJ4QVWQvNjBv1tCyvtSNQXwUUQixEr4S9weuwTjy%2FuF9zsUizKzhvxLE10s40f0sOs%2Br03rC5J%2FlHoHtnHEnFhcsXvrUSBFfcJBPva8pKCmuMKQKw2dvKQjq9OZyWC2fAExprY5n00nHpt6ai8I4SOMv2%2F7ptjLOWSn1AhKjMmftfGTSSHzB1vQGFAAz7Gny1bKDCEVGqn8iCEuzgENZswMQbxlFvDCJQBuoNHUIHYuqR5CIt2die9hqaK16F4cPTuLFk%2FgqBfgRadj9tzobMP258PnXJp3cDCpl4PNjdmXb8escY7BwaS2v9jJ%2FsEYtXRyeDzh8UoZIXJxRzof7Mczj7z%2BJWt%2Fc8VnR%2BL3cGvlzREsiBPlb7p3oTIHIqXE9uHUXQ5mdtV7E%2F8RJIlCAm2v%2FfX1Wu4JIGomiziepmuLS1mdIGHSFJqq9nE9aZOtpfF9b4z3lDwpCJIaXyB3faB%2BdmDaViN7l1rrj5FLXT7%2BTFhnejm%2Bpm0MKeurcMGOqUBgcQTJeoFXEeoR%2BWODND5FU112QrfaxfBVDXe5Ii6viqB7CWsDONNH3Zy4rAMOy6huAzJiFF5td%2Fkasx6BjjfVQveLLTozoU6JR2C1%2BuPN4V9cm8gQHvRpIhAyfSmLRdHmyZLBGHl8MP%2B6qxTReDkEmg%2B3wOYdFaG13ZazoeO8NI0IcyCsxREexis5rSVWp6OaqAlp9g21pC%2FC2PiYrojne8rkoqm&X-Amz-Signature=60b0aa4244ba484a8c62756af5f311617206db91512a738aeaa36cd783e11c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

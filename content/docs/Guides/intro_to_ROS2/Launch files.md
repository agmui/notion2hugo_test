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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCFUWVDV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEHziwuOMk1eA9tCHo4qyt4ghkDtky%2BUQgKthgzkYKILAiBRpx1YQDwyC6rFTESGtglXFPhrBHImJ4NSwgy2NXCZWir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM4k0uTYTSHAnskuRRKtwDQPGiVhLPkucW2FVM1gxhbwmHFwTXHNW83WyzKTMqeFlJg0QK9sIxohBQWqI4hOVebbWQyCHQWNYNouWKOL1ytuzCrlG6gr3voInNT9WtPQUUD1G%2FmyTZ58DksHOT4RIUg83mB21sUBDpYPSRnb8zDOdyOkT91dazBN6uNeG9k23IjS4fcmBxb9DkXgaWpTWeIrU%2FvpmemfT2vzV1KHw7QAynKiQ%2FdGdQhzvD9MbELAmKP2yLZFgIDEOCHTKimtYH79kMSV0aXQqiIWRv3yUqk3wnCyBW6rbUIAx4H4vjnIiuA6T%2Bsx%2B0W6feV7jgE90OnMCug2Wq9i008pIUHO63pFD8cfkFTIEUuQ2%2BT29a3ahFqK1qQ61G4gmvU3jWBN7eKwA8R%2F4puRPd0JzVptSQat%2BsQqDs2V%2BmHw7He4RkWm5ROdKQgevcI6TTlIjkUmwPMKxMm9%2F3HCur89hXcTO7CnWxfFRCYfBcNfj3awiwN4jyw5vZVr31UViumym4pUM64HWUhIOvR9sv3vYbRhvtdluLjwu9lgoC5%2FgZHJ9TxouLeuN7MVhjCYTLTvlIBjs2OfaE4C2z5FxqLycAfDjjPzqOW7d0N6n3sXP%2FobiWS75mZKUvjQ2zOccArLEwssuHvQY6pgHhlVeOAJsVGqBUGYCq855%2BxRxh2zd9Qtu1xFvAouYkSKbp4oNjL93KVNTA063TIRkGtmIZ6IzbO4sQ7jhUm4X7ljE%2BCLe6ZESKxl4v8rdJlmH1DkXsn7oAaaCt7ZrCX%2FBDgnGmmiZmNNncHjKc8BnL4ma00Y6gHT84ipn2Q8JCuGrL4mPjO2RhUG61DiodvSVgUJt43vPFxhJ2ZBzh7wx6cW8lZcFL&X-Amz-Signature=788ccc934186eddc9e31368773a710302a537a1b179db5a6d03591c034a60608&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCFUWVDV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEHziwuOMk1eA9tCHo4qyt4ghkDtky%2BUQgKthgzkYKILAiBRpx1YQDwyC6rFTESGtglXFPhrBHImJ4NSwgy2NXCZWir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM4k0uTYTSHAnskuRRKtwDQPGiVhLPkucW2FVM1gxhbwmHFwTXHNW83WyzKTMqeFlJg0QK9sIxohBQWqI4hOVebbWQyCHQWNYNouWKOL1ytuzCrlG6gr3voInNT9WtPQUUD1G%2FmyTZ58DksHOT4RIUg83mB21sUBDpYPSRnb8zDOdyOkT91dazBN6uNeG9k23IjS4fcmBxb9DkXgaWpTWeIrU%2FvpmemfT2vzV1KHw7QAynKiQ%2FdGdQhzvD9MbELAmKP2yLZFgIDEOCHTKimtYH79kMSV0aXQqiIWRv3yUqk3wnCyBW6rbUIAx4H4vjnIiuA6T%2Bsx%2B0W6feV7jgE90OnMCug2Wq9i008pIUHO63pFD8cfkFTIEUuQ2%2BT29a3ahFqK1qQ61G4gmvU3jWBN7eKwA8R%2F4puRPd0JzVptSQat%2BsQqDs2V%2BmHw7He4RkWm5ROdKQgevcI6TTlIjkUmwPMKxMm9%2F3HCur89hXcTO7CnWxfFRCYfBcNfj3awiwN4jyw5vZVr31UViumym4pUM64HWUhIOvR9sv3vYbRhvtdluLjwu9lgoC5%2FgZHJ9TxouLeuN7MVhjCYTLTvlIBjs2OfaE4C2z5FxqLycAfDjjPzqOW7d0N6n3sXP%2FobiWS75mZKUvjQ2zOccArLEwssuHvQY6pgHhlVeOAJsVGqBUGYCq855%2BxRxh2zd9Qtu1xFvAouYkSKbp4oNjL93KVNTA063TIRkGtmIZ6IzbO4sQ7jhUm4X7ljE%2BCLe6ZESKxl4v8rdJlmH1DkXsn7oAaaCt7ZrCX%2FBDgnGmmiZmNNncHjKc8BnL4ma00Y6gHT84ipn2Q8JCuGrL4mPjO2RhUG61DiodvSVgUJt43vPFxhJ2ZBzh7wx6cW8lZcFL&X-Amz-Signature=3902a168b4c409030489f3b62a0f8494bce1bb7043f768b7aef99afe6787a010&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCFUWVDV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T110156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIEHziwuOMk1eA9tCHo4qyt4ghkDtky%2BUQgKthgzkYKILAiBRpx1YQDwyC6rFTESGtglXFPhrBHImJ4NSwgy2NXCZWir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM4k0uTYTSHAnskuRRKtwDQPGiVhLPkucW2FVM1gxhbwmHFwTXHNW83WyzKTMqeFlJg0QK9sIxohBQWqI4hOVebbWQyCHQWNYNouWKOL1ytuzCrlG6gr3voInNT9WtPQUUD1G%2FmyTZ58DksHOT4RIUg83mB21sUBDpYPSRnb8zDOdyOkT91dazBN6uNeG9k23IjS4fcmBxb9DkXgaWpTWeIrU%2FvpmemfT2vzV1KHw7QAynKiQ%2FdGdQhzvD9MbELAmKP2yLZFgIDEOCHTKimtYH79kMSV0aXQqiIWRv3yUqk3wnCyBW6rbUIAx4H4vjnIiuA6T%2Bsx%2B0W6feV7jgE90OnMCug2Wq9i008pIUHO63pFD8cfkFTIEUuQ2%2BT29a3ahFqK1qQ61G4gmvU3jWBN7eKwA8R%2F4puRPd0JzVptSQat%2BsQqDs2V%2BmHw7He4RkWm5ROdKQgevcI6TTlIjkUmwPMKxMm9%2F3HCur89hXcTO7CnWxfFRCYfBcNfj3awiwN4jyw5vZVr31UViumym4pUM64HWUhIOvR9sv3vYbRhvtdluLjwu9lgoC5%2FgZHJ9TxouLeuN7MVhjCYTLTvlIBjs2OfaE4C2z5FxqLycAfDjjPzqOW7d0N6n3sXP%2FobiWS75mZKUvjQ2zOccArLEwssuHvQY6pgHhlVeOAJsVGqBUGYCq855%2BxRxh2zd9Qtu1xFvAouYkSKbp4oNjL93KVNTA063TIRkGtmIZ6IzbO4sQ7jhUm4X7ljE%2BCLe6ZESKxl4v8rdJlmH1DkXsn7oAaaCt7ZrCX%2FBDgnGmmiZmNNncHjKc8BnL4ma00Y6gHT84ipn2Q8JCuGrL4mPjO2RhUG61DiodvSVgUJt43vPFxhJ2ZBzh7wx6cW8lZcFL&X-Amz-Signature=141e8f5ea95f57051821481fadcb033c60809ce5405ee658f69069878e7a6b07&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

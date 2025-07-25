---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F63ELWQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFODLrVlpTGwhpFtlzWH43rD58lkWr3crDmAuWvevUqmAiA0pDGHOSzLy7Hp9lrF5%2Bg7T35%2BUifgtknbJ3ENDl5H6Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMIPmfa80anljwdHFnKtwDUMOZAT8uZJOgsJqnsh1EOZ5rhMN1JLcI2XvIJps%2FkjVo8GcMwbaojTHk0qG1mBNrn7hjR8SegqYnoxo8Jn0Ty6UegodxrHxN9lDgEtI7jGJ1CF814fRv%2FW4iU5LVZqBjEcgH23BBEom3Dl2nCG%2BzklD0ZKIyJhfLULpJ6VGV%2BZqfqjHDIo9vju5qKRWGiIVAOcs3JfHrfuhm7JEIOKPjI39BotB1BpTCQF4pOWQCDB5dThb46xc5z4e59uglgOlLYxNCkJz3GviDaOLZL%2BZO3QrHM20w4y4vJBAhi6ZWVLSG0b7C6ELGuHj1vdunUO6Oni56KAYcQLGgZGWq9pYv61g3sTO0ExGBAa4xzCYW7zSbtzrxLjkNpvew9cXMoPVRl6rzZboBAIWwdS57Iv3%2BY%2BW1fP8ZWmzeyUPLeqiFCzX6usHKcZdi0nmPAhrg3LwBN5RofBzYxLlGJQBO8MGGv8dloHJrE%2BZx4lEw3ZewgOFfPAu%2FuocnRs%2B2mUibtnk0seJ0zY29x9GeHS8VHJuGhmiwPcVUf3HoPsYdJCpC092LBE5Dw0Gh%2BFTOpa%2F9wIO7rYjMimU%2BvPjtFduqSPJ359mOBi78Jt0ikI9DeMMFU6KOxuRlqhSAu7QCVBwwyveLxAY6pgHgFAgMSL%2FBafmP7hPGfl6pBCdWn2muRQF6j7RtC7A7Wr3bqBeG0iFRKJVel0NeIdYSV41tmyRRyyZmOp%2FagHHveT5CDkaeHt5f%2F4e1NNbZRiF1B7mLa0JCTUWeLkuSZ0uYN3IJsm4eTrhBJoh6nOy8xbWaH%2FrklfbTWLkqt%2BErTjIZS4NZRD%2BaLq3Oc2QOaUHi%2FLSCjO9XpIYPpz4Vgn1oyDMgU19O&X-Amz-Signature=a984d05fb5520e5591d657b6b47d2617e4bb869238544c4a9640785090e0964b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F63ELWQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFODLrVlpTGwhpFtlzWH43rD58lkWr3crDmAuWvevUqmAiA0pDGHOSzLy7Hp9lrF5%2Bg7T35%2BUifgtknbJ3ENDl5H6Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMIPmfa80anljwdHFnKtwDUMOZAT8uZJOgsJqnsh1EOZ5rhMN1JLcI2XvIJps%2FkjVo8GcMwbaojTHk0qG1mBNrn7hjR8SegqYnoxo8Jn0Ty6UegodxrHxN9lDgEtI7jGJ1CF814fRv%2FW4iU5LVZqBjEcgH23BBEom3Dl2nCG%2BzklD0ZKIyJhfLULpJ6VGV%2BZqfqjHDIo9vju5qKRWGiIVAOcs3JfHrfuhm7JEIOKPjI39BotB1BpTCQF4pOWQCDB5dThb46xc5z4e59uglgOlLYxNCkJz3GviDaOLZL%2BZO3QrHM20w4y4vJBAhi6ZWVLSG0b7C6ELGuHj1vdunUO6Oni56KAYcQLGgZGWq9pYv61g3sTO0ExGBAa4xzCYW7zSbtzrxLjkNpvew9cXMoPVRl6rzZboBAIWwdS57Iv3%2BY%2BW1fP8ZWmzeyUPLeqiFCzX6usHKcZdi0nmPAhrg3LwBN5RofBzYxLlGJQBO8MGGv8dloHJrE%2BZx4lEw3ZewgOFfPAu%2FuocnRs%2B2mUibtnk0seJ0zY29x9GeHS8VHJuGhmiwPcVUf3HoPsYdJCpC092LBE5Dw0Gh%2BFTOpa%2F9wIO7rYjMimU%2BvPjtFduqSPJ359mOBi78Jt0ikI9DeMMFU6KOxuRlqhSAu7QCVBwwyveLxAY6pgHgFAgMSL%2FBafmP7hPGfl6pBCdWn2muRQF6j7RtC7A7Wr3bqBeG0iFRKJVel0NeIdYSV41tmyRRyyZmOp%2FagHHveT5CDkaeHt5f%2F4e1NNbZRiF1B7mLa0JCTUWeLkuSZ0uYN3IJsm4eTrhBJoh6nOy8xbWaH%2FrklfbTWLkqt%2BErTjIZS4NZRD%2BaLq3Oc2QOaUHi%2FLSCjO9XpIYPpz4Vgn1oyDMgU19O&X-Amz-Signature=57a919473c39233992e77c065f2086a2eb35b0f04a2be50d96499bbac8935cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F63ELWQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIFODLrVlpTGwhpFtlzWH43rD58lkWr3crDmAuWvevUqmAiA0pDGHOSzLy7Hp9lrF5%2Bg7T35%2BUifgtknbJ3ENDl5H6Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMIPmfa80anljwdHFnKtwDUMOZAT8uZJOgsJqnsh1EOZ5rhMN1JLcI2XvIJps%2FkjVo8GcMwbaojTHk0qG1mBNrn7hjR8SegqYnoxo8Jn0Ty6UegodxrHxN9lDgEtI7jGJ1CF814fRv%2FW4iU5LVZqBjEcgH23BBEom3Dl2nCG%2BzklD0ZKIyJhfLULpJ6VGV%2BZqfqjHDIo9vju5qKRWGiIVAOcs3JfHrfuhm7JEIOKPjI39BotB1BpTCQF4pOWQCDB5dThb46xc5z4e59uglgOlLYxNCkJz3GviDaOLZL%2BZO3QrHM20w4y4vJBAhi6ZWVLSG0b7C6ELGuHj1vdunUO6Oni56KAYcQLGgZGWq9pYv61g3sTO0ExGBAa4xzCYW7zSbtzrxLjkNpvew9cXMoPVRl6rzZboBAIWwdS57Iv3%2BY%2BW1fP8ZWmzeyUPLeqiFCzX6usHKcZdi0nmPAhrg3LwBN5RofBzYxLlGJQBO8MGGv8dloHJrE%2BZx4lEw3ZewgOFfPAu%2FuocnRs%2B2mUibtnk0seJ0zY29x9GeHS8VHJuGhmiwPcVUf3HoPsYdJCpC092LBE5Dw0Gh%2BFTOpa%2F9wIO7rYjMimU%2BvPjtFduqSPJ359mOBi78Jt0ikI9DeMMFU6KOxuRlqhSAu7QCVBwwyveLxAY6pgHgFAgMSL%2FBafmP7hPGfl6pBCdWn2muRQF6j7RtC7A7Wr3bqBeG0iFRKJVel0NeIdYSV41tmyRRyyZmOp%2FagHHveT5CDkaeHt5f%2F4e1NNbZRiF1B7mLa0JCTUWeLkuSZ0uYN3IJsm4eTrhBJoh6nOy8xbWaH%2FrklfbTWLkqt%2BErTjIZS4NZRD%2BaLq3Oc2QOaUHi%2FLSCjO9XpIYPpz4Vgn1oyDMgU19O&X-Amz-Signature=71173805c83c6a9ad416842672a3c7d5696f6afaae63ccdcbc2a15f05957c5aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

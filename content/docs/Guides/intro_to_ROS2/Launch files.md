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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YNOHRC%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJFMEMCH0yShY2Lr%2Bc6D9VmYgrugxF4F5zkDijUtBFLriO%2B67YCIDRH%2FpdNn%2B0BFbWQrV3kkAbhxJ9zuFVvo8x9mMYcFR1OKv8DCBMQABoMNjM3NDIzMTgzODA1Igw91TQumBME6AP1n20q3AMmItGJbnEK4k46PH8IjansSxW3UkMBp7ROPjVV3SB1%2BQ1Ee3BYYXw3P3NnYbK0D06eZbSMFMm4bfbeGPAHMXX7gUcXyRdeqUknBDzuVg1xokoKPYv95Q6VoImVM7vNP3BVkSgy4ory6yDTQPzKrXRasOzOdg%2B7I%2BIMBQW9V4Ax%2BoBqlAUJyNkBkEBn3Nzkzr%2FdOJ%2Bv4pccD6d%2By%2BCjiEELfzZ9BAXYYj%2B8ki8%2FwTGRhIooGOx6iVLigyP4xxskvzAcoOuRJKxHn9F1aOO2G3qea%2FmZXyXcRLuSusZ34NF8PLuzeLwX5JWo6eJmaCqAA9zN24GKyo79sdshjUV%2Fm4zpV3jt2BE7xc%2FTJb5VFSnw%2F6eVQrXjdQoY%2FA7ADtDXNAD6n6iJXlGx6b%2F3M7ur6s5PiXAzxvl9tl1xGrYFTqWoxJv9nqUFzMhwaISKS80TwSTc9VWgLThUgqCIddtBKcd6%2FG8rqMzlBaRM4waTCFXZaPBLpKr2x5Arglgpzcpc98ckWBp8WeG6Bymd%2B9Ho%2BpO2kuFTUJqt%2BQwCfDrKAwtvSJyCrkIc4gkx4O5L4q4uuiSAjYDyA5DotsnopS3zFKCHC7zX8iBsdMyocL5%2FLEnk1C47jEbZ%2FNGwwtKEfjCAqsbBBjqnAYQw6ueu6Qd%2F9ZJLEWoVOpyRhlz6LAfCxLK6pJnmfB91DWuY7fQOPr9nC0So64d3hY1wDRSr5AiB4EZff0d8vu06%2BXuf1tcOsEh4JUFXCSCiSa6CsAK31LDLgZLjxNPXC4FJ%2FvPkXVzH1oNXx6fv7fi7sch5n9eoZQOjd2RvdPupQLCRQ2c%2BBT%2FxI0iQ4zas8K%2BPEtGsfYpvXdDEtJl2s6%2BSjXVbJtJ4&X-Amz-Signature=32998b2f5e03f379ae22e6a92f284ef02d0d0c6b81ffa4e7e2ba3dcd57ec113a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YNOHRC%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJFMEMCH0yShY2Lr%2Bc6D9VmYgrugxF4F5zkDijUtBFLriO%2B67YCIDRH%2FpdNn%2B0BFbWQrV3kkAbhxJ9zuFVvo8x9mMYcFR1OKv8DCBMQABoMNjM3NDIzMTgzODA1Igw91TQumBME6AP1n20q3AMmItGJbnEK4k46PH8IjansSxW3UkMBp7ROPjVV3SB1%2BQ1Ee3BYYXw3P3NnYbK0D06eZbSMFMm4bfbeGPAHMXX7gUcXyRdeqUknBDzuVg1xokoKPYv95Q6VoImVM7vNP3BVkSgy4ory6yDTQPzKrXRasOzOdg%2B7I%2BIMBQW9V4Ax%2BoBqlAUJyNkBkEBn3Nzkzr%2FdOJ%2Bv4pccD6d%2By%2BCjiEELfzZ9BAXYYj%2B8ki8%2FwTGRhIooGOx6iVLigyP4xxskvzAcoOuRJKxHn9F1aOO2G3qea%2FmZXyXcRLuSusZ34NF8PLuzeLwX5JWo6eJmaCqAA9zN24GKyo79sdshjUV%2Fm4zpV3jt2BE7xc%2FTJb5VFSnw%2F6eVQrXjdQoY%2FA7ADtDXNAD6n6iJXlGx6b%2F3M7ur6s5PiXAzxvl9tl1xGrYFTqWoxJv9nqUFzMhwaISKS80TwSTc9VWgLThUgqCIddtBKcd6%2FG8rqMzlBaRM4waTCFXZaPBLpKr2x5Arglgpzcpc98ckWBp8WeG6Bymd%2B9Ho%2BpO2kuFTUJqt%2BQwCfDrKAwtvSJyCrkIc4gkx4O5L4q4uuiSAjYDyA5DotsnopS3zFKCHC7zX8iBsdMyocL5%2FLEnk1C47jEbZ%2FNGwwtKEfjCAqsbBBjqnAYQw6ueu6Qd%2F9ZJLEWoVOpyRhlz6LAfCxLK6pJnmfB91DWuY7fQOPr9nC0So64d3hY1wDRSr5AiB4EZff0d8vu06%2BXuf1tcOsEh4JUFXCSCiSa6CsAK31LDLgZLjxNPXC4FJ%2FvPkXVzH1oNXx6fv7fi7sch5n9eoZQOjd2RvdPupQLCRQ2c%2BBT%2FxI0iQ4zas8K%2BPEtGsfYpvXdDEtJl2s6%2BSjXVbJtJ4&X-Amz-Signature=3bceca23472c1b46a317f9f4bbd7a2bf421c47ebbf11248ac1d73043c4567fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2YNOHRC%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T140712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJFMEMCH0yShY2Lr%2Bc6D9VmYgrugxF4F5zkDijUtBFLriO%2B67YCIDRH%2FpdNn%2B0BFbWQrV3kkAbhxJ9zuFVvo8x9mMYcFR1OKv8DCBMQABoMNjM3NDIzMTgzODA1Igw91TQumBME6AP1n20q3AMmItGJbnEK4k46PH8IjansSxW3UkMBp7ROPjVV3SB1%2BQ1Ee3BYYXw3P3NnYbK0D06eZbSMFMm4bfbeGPAHMXX7gUcXyRdeqUknBDzuVg1xokoKPYv95Q6VoImVM7vNP3BVkSgy4ory6yDTQPzKrXRasOzOdg%2B7I%2BIMBQW9V4Ax%2BoBqlAUJyNkBkEBn3Nzkzr%2FdOJ%2Bv4pccD6d%2By%2BCjiEELfzZ9BAXYYj%2B8ki8%2FwTGRhIooGOx6iVLigyP4xxskvzAcoOuRJKxHn9F1aOO2G3qea%2FmZXyXcRLuSusZ34NF8PLuzeLwX5JWo6eJmaCqAA9zN24GKyo79sdshjUV%2Fm4zpV3jt2BE7xc%2FTJb5VFSnw%2F6eVQrXjdQoY%2FA7ADtDXNAD6n6iJXlGx6b%2F3M7ur6s5PiXAzxvl9tl1xGrYFTqWoxJv9nqUFzMhwaISKS80TwSTc9VWgLThUgqCIddtBKcd6%2FG8rqMzlBaRM4waTCFXZaPBLpKr2x5Arglgpzcpc98ckWBp8WeG6Bymd%2B9Ho%2BpO2kuFTUJqt%2BQwCfDrKAwtvSJyCrkIc4gkx4O5L4q4uuiSAjYDyA5DotsnopS3zFKCHC7zX8iBsdMyocL5%2FLEnk1C47jEbZ%2FNGwwtKEfjCAqsbBBjqnAYQw6ueu6Qd%2F9ZJLEWoVOpyRhlz6LAfCxLK6pJnmfB91DWuY7fQOPr9nC0So64d3hY1wDRSr5AiB4EZff0d8vu06%2BXuf1tcOsEh4JUFXCSCiSa6CsAK31LDLgZLjxNPXC4FJ%2FvPkXVzH1oNXx6fv7fi7sch5n9eoZQOjd2RvdPupQLCRQ2c%2BBT%2FxI0iQ4zas8K%2BPEtGsfYpvXdDEtJl2s6%2BSjXVbJtJ4&X-Amz-Signature=a274ce8915c04fdb80525fd4cf1052a4dccba44c81a930c66d85f7e616fb669e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

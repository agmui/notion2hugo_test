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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVQIWLT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC%2Fsi0jelF5tHTQPoV3qvZUtXC1TZJ0dAtqpvLlTGBGXAIhAK47zB4HHuberAKaNrGGb0KVludFNb%2BjVYIQ70mEzPrxKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2eJHjkvUBRQLMohMq3ANSCjYY4nKjAnG9vdNp0hOim%2F29fI4SVjS7qRnOprDYqOMaxrTds4YkRXCn1Gyc8e3qQOkM5eVxzX5nKWf%2B6u%2FqTs4zUymqousXFdbvuCNqbqSIhgZg5lRodXED2yD6CygyfphDzLJb%2BLumYEYh25v1ka80uSNVfzicKJXlpFGFhm3Gkys17DqtIEkctU%2BAyUVc4%2FVNewaeuxniD1FOHB3NT1s2VOqCyRc5hg6Nt6dO7mStVDPL2l4aRz%2F7FTxQN7KIcARnNxAYq8AZlfXllJis5RrEs6T%2BhSBVcdS5YHOxMRFR3WdJDZQLoRIRkYfkd7y1N82D%2FOmaLxtn0atnIXK%2BiHEJLM4aANfFyQ58FuZgoI5D%2FTam6c1AiSBfMryni2m2j7TMPsEPvZUqEjNYVQDAPrmhaF50AMr2mjmyurEZKxJEORrJA7PTWBEUM0u2pO%2BnDYJMRKRnnxDyI%2FUHmcXCoIYikW5scbdZr5JE5chp1X2h2JYcPqJeuvGD8N5PORmO06y1LV4pGxYtUiupzWOpkvJ8lqiuElhE9Tlz46jFkA7PXejdyGYFRyVWZYqnuAPMbhKE1SC%2BFwG%2BwxZ05Nrhp32xg0gHRu13mFyjOTIF4Elv9RYMLpH3DnhetjCHyc3ABjqkAY1I4NKaQTrZRlXZGwQQPZMUptRHvLNKW%2ByG69qZfkU4bH7xtcL2O4KWHkw2%2FuGVm4epjctV2TZ8n2rGUYErtjx892GfQGFfm7A4PwmtOe6wMvsbUeqHmChBf3NJ%2BPNvZscarl4aruqMFo8eKlQlachct28DKEJPMqYgpj1GrtVma3EvDdbGpS3DcG5iQ2L%2BlOlcozVzTohrxc%2BGLTw46jukSEIU&X-Amz-Signature=68b855110f873c5dbea2b657a4db2492e5d0683e05d87fe994244d9c3660f3e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVQIWLT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC%2Fsi0jelF5tHTQPoV3qvZUtXC1TZJ0dAtqpvLlTGBGXAIhAK47zB4HHuberAKaNrGGb0KVludFNb%2BjVYIQ70mEzPrxKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2eJHjkvUBRQLMohMq3ANSCjYY4nKjAnG9vdNp0hOim%2F29fI4SVjS7qRnOprDYqOMaxrTds4YkRXCn1Gyc8e3qQOkM5eVxzX5nKWf%2B6u%2FqTs4zUymqousXFdbvuCNqbqSIhgZg5lRodXED2yD6CygyfphDzLJb%2BLumYEYh25v1ka80uSNVfzicKJXlpFGFhm3Gkys17DqtIEkctU%2BAyUVc4%2FVNewaeuxniD1FOHB3NT1s2VOqCyRc5hg6Nt6dO7mStVDPL2l4aRz%2F7FTxQN7KIcARnNxAYq8AZlfXllJis5RrEs6T%2BhSBVcdS5YHOxMRFR3WdJDZQLoRIRkYfkd7y1N82D%2FOmaLxtn0atnIXK%2BiHEJLM4aANfFyQ58FuZgoI5D%2FTam6c1AiSBfMryni2m2j7TMPsEPvZUqEjNYVQDAPrmhaF50AMr2mjmyurEZKxJEORrJA7PTWBEUM0u2pO%2BnDYJMRKRnnxDyI%2FUHmcXCoIYikW5scbdZr5JE5chp1X2h2JYcPqJeuvGD8N5PORmO06y1LV4pGxYtUiupzWOpkvJ8lqiuElhE9Tlz46jFkA7PXejdyGYFRyVWZYqnuAPMbhKE1SC%2BFwG%2BwxZ05Nrhp32xg0gHRu13mFyjOTIF4Elv9RYMLpH3DnhetjCHyc3ABjqkAY1I4NKaQTrZRlXZGwQQPZMUptRHvLNKW%2ByG69qZfkU4bH7xtcL2O4KWHkw2%2FuGVm4epjctV2TZ8n2rGUYErtjx892GfQGFfm7A4PwmtOe6wMvsbUeqHmChBf3NJ%2BPNvZscarl4aruqMFo8eKlQlachct28DKEJPMqYgpj1GrtVma3EvDdbGpS3DcG5iQ2L%2BlOlcozVzTohrxc%2BGLTw46jukSEIU&X-Amz-Signature=012c5e658391500f5b271c40e50693736423d62e6173c93eb2d08916915dcf1c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZVQIWLT%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T121502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQC%2Fsi0jelF5tHTQPoV3qvZUtXC1TZJ0dAtqpvLlTGBGXAIhAK47zB4HHuberAKaNrGGb0KVludFNb%2BjVYIQ70mEzPrxKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2eJHjkvUBRQLMohMq3ANSCjYY4nKjAnG9vdNp0hOim%2F29fI4SVjS7qRnOprDYqOMaxrTds4YkRXCn1Gyc8e3qQOkM5eVxzX5nKWf%2B6u%2FqTs4zUymqousXFdbvuCNqbqSIhgZg5lRodXED2yD6CygyfphDzLJb%2BLumYEYh25v1ka80uSNVfzicKJXlpFGFhm3Gkys17DqtIEkctU%2BAyUVc4%2FVNewaeuxniD1FOHB3NT1s2VOqCyRc5hg6Nt6dO7mStVDPL2l4aRz%2F7FTxQN7KIcARnNxAYq8AZlfXllJis5RrEs6T%2BhSBVcdS5YHOxMRFR3WdJDZQLoRIRkYfkd7y1N82D%2FOmaLxtn0atnIXK%2BiHEJLM4aANfFyQ58FuZgoI5D%2FTam6c1AiSBfMryni2m2j7TMPsEPvZUqEjNYVQDAPrmhaF50AMr2mjmyurEZKxJEORrJA7PTWBEUM0u2pO%2BnDYJMRKRnnxDyI%2FUHmcXCoIYikW5scbdZr5JE5chp1X2h2JYcPqJeuvGD8N5PORmO06y1LV4pGxYtUiupzWOpkvJ8lqiuElhE9Tlz46jFkA7PXejdyGYFRyVWZYqnuAPMbhKE1SC%2BFwG%2BwxZ05Nrhp32xg0gHRu13mFyjOTIF4Elv9RYMLpH3DnhetjCHyc3ABjqkAY1I4NKaQTrZRlXZGwQQPZMUptRHvLNKW%2ByG69qZfkU4bH7xtcL2O4KWHkw2%2FuGVm4epjctV2TZ8n2rGUYErtjx892GfQGFfm7A4PwmtOe6wMvsbUeqHmChBf3NJ%2BPNvZscarl4aruqMFo8eKlQlachct28DKEJPMqYgpj1GrtVma3EvDdbGpS3DcG5iQ2L%2BlOlcozVzTohrxc%2BGLTw46jukSEIU&X-Amz-Signature=f49a7bf59e17e2690295304b39f020fef343b8e77d0baac0914c1c214f308e1b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

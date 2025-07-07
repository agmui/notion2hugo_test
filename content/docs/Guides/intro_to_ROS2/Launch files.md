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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFXMNDSO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDAd%2B4dMO1KOAZFl6JaRCH%2FRz0Vsj9OCDkAM1I2yy6M7gIhAI%2FAOXTVayMENwVfd6Vj15EOjzARzj6xN%2Fma4SqXMFiNKv8DCGgQABoMNjM3NDIzMTgzODA1IgwPhPqC0ZwWdNCwdYoq3AOCiTd3oPDLMZmuSmUdAOBJv93BnyZ%2B5S9HkjJP8Klf8k2yJLbiPvu5wOQxy8uiVoKFYdwKdU7U3SdN6Qva24Nj1gwyRwZnNjXQOf1yioIeOXfYktiBrvPQU9LYh0Ud7b2VYW%2FReZx0DT2vdirv9ttrw%2FtB5Ok85ua382FH6QJJY5VEKHGfiEloAM9DqRxQoZagcBZ9pyZy6k134qk6%2FHvUuENKvyntwbozqY24V4%2FRIky8cPNwaFHNnUMX0WFxzWzJzHEJSkQ1I77a2mRMBQpF2XSJIyjAOled7Gc%2FXhiJBT9Cr5D0FD0u8h5KixsWQgxJ7KimUtZCIufe7nvwX9l4vCq%2BKQNEAtWKAuGfUfsF3a2a0CczmTfiY0oQuYtlvhPktmTx4Kd6G1ckAAK39lhoAiNG7xFne%2FMPFPzbFg1iD%2FBj7CrTM%2BtdfYNhzed67lBx%2BK%2F4RuWOe07ra3mJOt9Me94T5NX1pVafZVux21Jyykk8hM66ACpoRC9rK6I1xAWCkmN9ilTWFi1Z1%2FpVJFiorSCawMq%2FWwshu2huSDkXBu%2FGg4GzcPQcG8wyokP8IWe3WsdU4nXHzdbpLjUcA8EXvQ77YpYYw%2BzAGzhpVmccu%2BqytN53UXYlH4n%2FkzDyhqzDBjqkAXgwFk8THXbsmryYwY%2BqqiPH%2B3RuK446iByjdnep%2BJcchgWTFtRoR%2FMnWBUNA0jIcZQRkF5ZMnVymE0ooTRwMZuMvHgu5pYamObPnp3Oll%2BVNLosfmuD4gv90tg1bfMkAwyCTuji8lrkwhb8uRbs9shUuHMW08OvaUbjeAdBPdFVMFoizIGFFeS8XRcUA%2F1PE5514%2FiddGpfHwjWOTib3HcNMqCz&X-Amz-Signature=22a0e7203bc343abc48f0f3f306a7ecd1845a155f2f2490e4232a23c2cfd0657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFXMNDSO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDAd%2B4dMO1KOAZFl6JaRCH%2FRz0Vsj9OCDkAM1I2yy6M7gIhAI%2FAOXTVayMENwVfd6Vj15EOjzARzj6xN%2Fma4SqXMFiNKv8DCGgQABoMNjM3NDIzMTgzODA1IgwPhPqC0ZwWdNCwdYoq3AOCiTd3oPDLMZmuSmUdAOBJv93BnyZ%2B5S9HkjJP8Klf8k2yJLbiPvu5wOQxy8uiVoKFYdwKdU7U3SdN6Qva24Nj1gwyRwZnNjXQOf1yioIeOXfYktiBrvPQU9LYh0Ud7b2VYW%2FReZx0DT2vdirv9ttrw%2FtB5Ok85ua382FH6QJJY5VEKHGfiEloAM9DqRxQoZagcBZ9pyZy6k134qk6%2FHvUuENKvyntwbozqY24V4%2FRIky8cPNwaFHNnUMX0WFxzWzJzHEJSkQ1I77a2mRMBQpF2XSJIyjAOled7Gc%2FXhiJBT9Cr5D0FD0u8h5KixsWQgxJ7KimUtZCIufe7nvwX9l4vCq%2BKQNEAtWKAuGfUfsF3a2a0CczmTfiY0oQuYtlvhPktmTx4Kd6G1ckAAK39lhoAiNG7xFne%2FMPFPzbFg1iD%2FBj7CrTM%2BtdfYNhzed67lBx%2BK%2F4RuWOe07ra3mJOt9Me94T5NX1pVafZVux21Jyykk8hM66ACpoRC9rK6I1xAWCkmN9ilTWFi1Z1%2FpVJFiorSCawMq%2FWwshu2huSDkXBu%2FGg4GzcPQcG8wyokP8IWe3WsdU4nXHzdbpLjUcA8EXvQ77YpYYw%2BzAGzhpVmccu%2BqytN53UXYlH4n%2FkzDyhqzDBjqkAXgwFk8THXbsmryYwY%2BqqiPH%2B3RuK446iByjdnep%2BJcchgWTFtRoR%2FMnWBUNA0jIcZQRkF5ZMnVymE0ooTRwMZuMvHgu5pYamObPnp3Oll%2BVNLosfmuD4gv90tg1bfMkAwyCTuji8lrkwhb8uRbs9shUuHMW08OvaUbjeAdBPdFVMFoizIGFFeS8XRcUA%2F1PE5514%2FiddGpfHwjWOTib3HcNMqCz&X-Amz-Signature=6d48db98b9f491793f8adef9fd634a212a96f0f3b5e282fdc6615c456663a216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFXMNDSO%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDAd%2B4dMO1KOAZFl6JaRCH%2FRz0Vsj9OCDkAM1I2yy6M7gIhAI%2FAOXTVayMENwVfd6Vj15EOjzARzj6xN%2Fma4SqXMFiNKv8DCGgQABoMNjM3NDIzMTgzODA1IgwPhPqC0ZwWdNCwdYoq3AOCiTd3oPDLMZmuSmUdAOBJv93BnyZ%2B5S9HkjJP8Klf8k2yJLbiPvu5wOQxy8uiVoKFYdwKdU7U3SdN6Qva24Nj1gwyRwZnNjXQOf1yioIeOXfYktiBrvPQU9LYh0Ud7b2VYW%2FReZx0DT2vdirv9ttrw%2FtB5Ok85ua382FH6QJJY5VEKHGfiEloAM9DqRxQoZagcBZ9pyZy6k134qk6%2FHvUuENKvyntwbozqY24V4%2FRIky8cPNwaFHNnUMX0WFxzWzJzHEJSkQ1I77a2mRMBQpF2XSJIyjAOled7Gc%2FXhiJBT9Cr5D0FD0u8h5KixsWQgxJ7KimUtZCIufe7nvwX9l4vCq%2BKQNEAtWKAuGfUfsF3a2a0CczmTfiY0oQuYtlvhPktmTx4Kd6G1ckAAK39lhoAiNG7xFne%2FMPFPzbFg1iD%2FBj7CrTM%2BtdfYNhzed67lBx%2BK%2F4RuWOe07ra3mJOt9Me94T5NX1pVafZVux21Jyykk8hM66ACpoRC9rK6I1xAWCkmN9ilTWFi1Z1%2FpVJFiorSCawMq%2FWwshu2huSDkXBu%2FGg4GzcPQcG8wyokP8IWe3WsdU4nXHzdbpLjUcA8EXvQ77YpYYw%2BzAGzhpVmccu%2BqytN53UXYlH4n%2FkzDyhqzDBjqkAXgwFk8THXbsmryYwY%2BqqiPH%2B3RuK446iByjdnep%2BJcchgWTFtRoR%2FMnWBUNA0jIcZQRkF5ZMnVymE0ooTRwMZuMvHgu5pYamObPnp3Oll%2BVNLosfmuD4gv90tg1bfMkAwyCTuji8lrkwhb8uRbs9shUuHMW08OvaUbjeAdBPdFVMFoizIGFFeS8XRcUA%2F1PE5514%2FiddGpfHwjWOTib3HcNMqCz&X-Amz-Signature=1a1473b083bb9f19e8e9a9706d4236f438fc51212b2117681cbb88196ed8fd38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

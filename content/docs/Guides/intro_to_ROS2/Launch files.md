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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGP2I46V%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCu95z6V%2B%2BEONvR%2FcpOCy6aYOaolGojII32R5IME%2FM9xAIgQx49qIlvXFTf6D1CllfBMzFQHOvB2P9u1Vj2Evvu4dIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXK0eJMb97DUxgldircA585P7k1yc0hMTgb928brOx5DVOvGngUcupTF7m4RaeGagHJ1X3SzEqryXz%2FNNbld%2FGnatmH8Nq4TlmcBkdOiRV8E%2FP%2BkSpe1vjQ%2Fwep1stJeG%2FtOe5RZVwNsJr0QTQQDsfr2TB3tEE4hrEd9n8a00K2mVVAKgVUxKTgD%2Fxua7HS8TM8nZJSZ73%2FREpcO%2BtEcL3rrqPDpcyvn002%2FLBp0qo2QZ80PdUBMvscF7rAHkwcC79rMNyJEgnC4OJhAJ5ffQJeqrApwS3Yz8naTvpDbkWr9MA0EeZW1uiPXpip%2F2fXRnrtViss0ZjuAVu2N3LMgyvhiKSI09HyL8Apvx0F156n5qx28pP5Cc3%2BFoWe%2FG066O%2FVMinRu66JXWFduAbMsDIuJHKe9yp89RVohYHQnnmqo5JWMPuWzF1Fx2uMJ%2BOV9sHmEc0qfFnYDj0oZU4BqxO0nxtVhco6IJ8NZWfjrGHNRg6rPQiNFe7oAzDHrl2xebNv%2FiMOidfd8%2BvDdNdqzCQcm4uXn%2BYIyhB1bJr3MeJiAFyvj%2Fkwgn8Dt%2FnaqEU09mIsnnYEd6dvwX8oisApSZJrY4jMtNTJWQJpzpiwHZ3Bh8%2Bcg622RIo1dgGugTcSv%2BRFTCLUTWpV9R2oMPG2qMIGOqUBj2fwpuRTVCANZ7Yae%2FmxR3oPS%2Buku99%2BXifwPOgoESnYPY9LUuKnFd%2BFQOmE2OIiDCviNmifQJmr6jDi7s4Sdfj14m%2BrOAQQNPxIkFYsADUlvb0sy%2Bi2ynXfG%2F9QL4vj9eICRIBewlokI24Ln2CpRKqw6MopJiu6cXwa5aNpT5INw5MLZMgwM%2FYDqss%2F0K%2FW971p%2B3d7Ms%2BNZGf8snBleFBDCyQ9&X-Amz-Signature=1f98f4e6469a51a3992e38ffd3ad13a995e21d35442def34cf50b99611128df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGP2I46V%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCu95z6V%2B%2BEONvR%2FcpOCy6aYOaolGojII32R5IME%2FM9xAIgQx49qIlvXFTf6D1CllfBMzFQHOvB2P9u1Vj2Evvu4dIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXK0eJMb97DUxgldircA585P7k1yc0hMTgb928brOx5DVOvGngUcupTF7m4RaeGagHJ1X3SzEqryXz%2FNNbld%2FGnatmH8Nq4TlmcBkdOiRV8E%2FP%2BkSpe1vjQ%2Fwep1stJeG%2FtOe5RZVwNsJr0QTQQDsfr2TB3tEE4hrEd9n8a00K2mVVAKgVUxKTgD%2Fxua7HS8TM8nZJSZ73%2FREpcO%2BtEcL3rrqPDpcyvn002%2FLBp0qo2QZ80PdUBMvscF7rAHkwcC79rMNyJEgnC4OJhAJ5ffQJeqrApwS3Yz8naTvpDbkWr9MA0EeZW1uiPXpip%2F2fXRnrtViss0ZjuAVu2N3LMgyvhiKSI09HyL8Apvx0F156n5qx28pP5Cc3%2BFoWe%2FG066O%2FVMinRu66JXWFduAbMsDIuJHKe9yp89RVohYHQnnmqo5JWMPuWzF1Fx2uMJ%2BOV9sHmEc0qfFnYDj0oZU4BqxO0nxtVhco6IJ8NZWfjrGHNRg6rPQiNFe7oAzDHrl2xebNv%2FiMOidfd8%2BvDdNdqzCQcm4uXn%2BYIyhB1bJr3MeJiAFyvj%2Fkwgn8Dt%2FnaqEU09mIsnnYEd6dvwX8oisApSZJrY4jMtNTJWQJpzpiwHZ3Bh8%2Bcg622RIo1dgGugTcSv%2BRFTCLUTWpV9R2oMPG2qMIGOqUBj2fwpuRTVCANZ7Yae%2FmxR3oPS%2Buku99%2BXifwPOgoESnYPY9LUuKnFd%2BFQOmE2OIiDCviNmifQJmr6jDi7s4Sdfj14m%2BrOAQQNPxIkFYsADUlvb0sy%2Bi2ynXfG%2F9QL4vj9eICRIBewlokI24Ln2CpRKqw6MopJiu6cXwa5aNpT5INw5MLZMgwM%2FYDqss%2F0K%2FW971p%2B3d7Ms%2BNZGf8snBleFBDCyQ9&X-Amz-Signature=b9b1db4eab9dbd550b3c49f982144a4cd31e82e988b5dd54f7de4f79b5b58c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGP2I46V%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCu95z6V%2B%2BEONvR%2FcpOCy6aYOaolGojII32R5IME%2FM9xAIgQx49qIlvXFTf6D1CllfBMzFQHOvB2P9u1Vj2Evvu4dIqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXK0eJMb97DUxgldircA585P7k1yc0hMTgb928brOx5DVOvGngUcupTF7m4RaeGagHJ1X3SzEqryXz%2FNNbld%2FGnatmH8Nq4TlmcBkdOiRV8E%2FP%2BkSpe1vjQ%2Fwep1stJeG%2FtOe5RZVwNsJr0QTQQDsfr2TB3tEE4hrEd9n8a00K2mVVAKgVUxKTgD%2Fxua7HS8TM8nZJSZ73%2FREpcO%2BtEcL3rrqPDpcyvn002%2FLBp0qo2QZ80PdUBMvscF7rAHkwcC79rMNyJEgnC4OJhAJ5ffQJeqrApwS3Yz8naTvpDbkWr9MA0EeZW1uiPXpip%2F2fXRnrtViss0ZjuAVu2N3LMgyvhiKSI09HyL8Apvx0F156n5qx28pP5Cc3%2BFoWe%2FG066O%2FVMinRu66JXWFduAbMsDIuJHKe9yp89RVohYHQnnmqo5JWMPuWzF1Fx2uMJ%2BOV9sHmEc0qfFnYDj0oZU4BqxO0nxtVhco6IJ8NZWfjrGHNRg6rPQiNFe7oAzDHrl2xebNv%2FiMOidfd8%2BvDdNdqzCQcm4uXn%2BYIyhB1bJr3MeJiAFyvj%2Fkwgn8Dt%2FnaqEU09mIsnnYEd6dvwX8oisApSZJrY4jMtNTJWQJpzpiwHZ3Bh8%2Bcg622RIo1dgGugTcSv%2BRFTCLUTWpV9R2oMPG2qMIGOqUBj2fwpuRTVCANZ7Yae%2FmxR3oPS%2Buku99%2BXifwPOgoESnYPY9LUuKnFd%2BFQOmE2OIiDCviNmifQJmr6jDi7s4Sdfj14m%2BrOAQQNPxIkFYsADUlvb0sy%2Bi2ynXfG%2F9QL4vj9eICRIBewlokI24Ln2CpRKqw6MopJiu6cXwa5aNpT5INw5MLZMgwM%2FYDqss%2F0K%2FW971p%2B3d7Ms%2BNZGf8snBleFBDCyQ9&X-Amz-Signature=219a65405fe84b70da2328e61dcab9c5a6f6cfc6f4ad589515c5deff8e8bd3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

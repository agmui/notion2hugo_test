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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W7ZC4BO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD71DYjchj%2F%2Fi45dYaztbjl74N5TIJ7CFHHRCEg2Yju9wIgFL3g9epzFcc8C32WeZNobpQvjQ52QgTLkhjHRRhaeqUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtuYM3FiCLr9o5EIyrcA0M83fkNNQmvHigkBduJnzruuknyun7TSsYOeQdCB9YUU2ZL%2BXv1dfj%2Bi%2Bw4thRxFk2beLA1K9aBbJmgselip3RPz88nf%2B1H8lDVUvhgjPr2PAWNmNE9e7kc0fnf404wEGS5vUPKlKURr2zm%2F6LkTl7ZOjLA0wOXr9i%2BvWeUSQUhYKhEMb6RSF2KoV9PF9DpOK0xN5ZderO0Bf9whRkrAXb%2F9UzlcLJ4pKKnIln4jCHnhMTMsezJEjWwUcba8aNeHENTNRhnesxk9h22Xb5Pxy26C40JfGhIsDMfZu5rudhTEgd7Ii%2BZ6q8A4injeJWnmVNwdGHDtEnOLGql92xPGkAUv9IIXy2RGXCPe95Rt%2BCP%2FsuwTyjNMPGN3rWd%2FjMopCfAHouvWwhxdrUpAL836DgHt6QQ4x8qLU3VhVtBpBVFX9mr5v4d3SO8HKn9rn3rIryBy93pr5hzbA61o8wCvgQw5I%2BooDPabAcabk2vSRSZ3hDSKqjBatJRxcXySBxufBWQNjI50ZsQzDyd23SQvBftbGTaNePuQpQdruu3MCrfRwFGmBoCJv0XdSYnPjuwbueFxFdm01LSQei%2FR0eX8AQtQfwHmX87ViH9Z5OyZlqZZewnZFPnEZY6j4yBMIj7hcMGOqUBMIG7c4rMykvcLldl52iTLYSnEhLIZFWAQUSL9TobFs6vp4O7hd7%2BFexkS8wfIpd09MWgvaYdtOmb2NmxKhh8LpWzbCQNtD7CTDWdej7aSUKd7KPWxu7%2FPCDx7bjIq%2B11O7QB56SKjgdCRWw5USCuhp4RR6Wp7PONLX2KZiPtdFgtHmIArSbiUPmNBuzw3qZ73hDEWOdktWCvk55cJz3pW3l3IT2B&X-Amz-Signature=8ff4a24452626acd7517788615eacf52f3c7f5a13c9275a1cda997fa4a881f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W7ZC4BO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD71DYjchj%2F%2Fi45dYaztbjl74N5TIJ7CFHHRCEg2Yju9wIgFL3g9epzFcc8C32WeZNobpQvjQ52QgTLkhjHRRhaeqUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtuYM3FiCLr9o5EIyrcA0M83fkNNQmvHigkBduJnzruuknyun7TSsYOeQdCB9YUU2ZL%2BXv1dfj%2Bi%2Bw4thRxFk2beLA1K9aBbJmgselip3RPz88nf%2B1H8lDVUvhgjPr2PAWNmNE9e7kc0fnf404wEGS5vUPKlKURr2zm%2F6LkTl7ZOjLA0wOXr9i%2BvWeUSQUhYKhEMb6RSF2KoV9PF9DpOK0xN5ZderO0Bf9whRkrAXb%2F9UzlcLJ4pKKnIln4jCHnhMTMsezJEjWwUcba8aNeHENTNRhnesxk9h22Xb5Pxy26C40JfGhIsDMfZu5rudhTEgd7Ii%2BZ6q8A4injeJWnmVNwdGHDtEnOLGql92xPGkAUv9IIXy2RGXCPe95Rt%2BCP%2FsuwTyjNMPGN3rWd%2FjMopCfAHouvWwhxdrUpAL836DgHt6QQ4x8qLU3VhVtBpBVFX9mr5v4d3SO8HKn9rn3rIryBy93pr5hzbA61o8wCvgQw5I%2BooDPabAcabk2vSRSZ3hDSKqjBatJRxcXySBxufBWQNjI50ZsQzDyd23SQvBftbGTaNePuQpQdruu3MCrfRwFGmBoCJv0XdSYnPjuwbueFxFdm01LSQei%2FR0eX8AQtQfwHmX87ViH9Z5OyZlqZZewnZFPnEZY6j4yBMIj7hcMGOqUBMIG7c4rMykvcLldl52iTLYSnEhLIZFWAQUSL9TobFs6vp4O7hd7%2BFexkS8wfIpd09MWgvaYdtOmb2NmxKhh8LpWzbCQNtD7CTDWdej7aSUKd7KPWxu7%2FPCDx7bjIq%2B11O7QB56SKjgdCRWw5USCuhp4RR6Wp7PONLX2KZiPtdFgtHmIArSbiUPmNBuzw3qZ73hDEWOdktWCvk55cJz3pW3l3IT2B&X-Amz-Signature=f94617f015eeb09e9b18887d88def1834baedbb168473715b14c53ed532dce8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W7ZC4BO%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD71DYjchj%2F%2Fi45dYaztbjl74N5TIJ7CFHHRCEg2Yju9wIgFL3g9epzFcc8C32WeZNobpQvjQ52QgTLkhjHRRhaeqUqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtuYM3FiCLr9o5EIyrcA0M83fkNNQmvHigkBduJnzruuknyun7TSsYOeQdCB9YUU2ZL%2BXv1dfj%2Bi%2Bw4thRxFk2beLA1K9aBbJmgselip3RPz88nf%2B1H8lDVUvhgjPr2PAWNmNE9e7kc0fnf404wEGS5vUPKlKURr2zm%2F6LkTl7ZOjLA0wOXr9i%2BvWeUSQUhYKhEMb6RSF2KoV9PF9DpOK0xN5ZderO0Bf9whRkrAXb%2F9UzlcLJ4pKKnIln4jCHnhMTMsezJEjWwUcba8aNeHENTNRhnesxk9h22Xb5Pxy26C40JfGhIsDMfZu5rudhTEgd7Ii%2BZ6q8A4injeJWnmVNwdGHDtEnOLGql92xPGkAUv9IIXy2RGXCPe95Rt%2BCP%2FsuwTyjNMPGN3rWd%2FjMopCfAHouvWwhxdrUpAL836DgHt6QQ4x8qLU3VhVtBpBVFX9mr5v4d3SO8HKn9rn3rIryBy93pr5hzbA61o8wCvgQw5I%2BooDPabAcabk2vSRSZ3hDSKqjBatJRxcXySBxufBWQNjI50ZsQzDyd23SQvBftbGTaNePuQpQdruu3MCrfRwFGmBoCJv0XdSYnPjuwbueFxFdm01LSQei%2FR0eX8AQtQfwHmX87ViH9Z5OyZlqZZewnZFPnEZY6j4yBMIj7hcMGOqUBMIG7c4rMykvcLldl52iTLYSnEhLIZFWAQUSL9TobFs6vp4O7hd7%2BFexkS8wfIpd09MWgvaYdtOmb2NmxKhh8LpWzbCQNtD7CTDWdej7aSUKd7KPWxu7%2FPCDx7bjIq%2B11O7QB56SKjgdCRWw5USCuhp4RR6Wp7PONLX2KZiPtdFgtHmIArSbiUPmNBuzw3qZ73hDEWOdktWCvk55cJz3pW3l3IT2B&X-Amz-Signature=aed31bb6254f8c209791ff2212ce4fd2b6f1b84532054d09878f9250f327ecec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZEHKBD4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDzZFbEjoyRf5SoFi80zEVjaoVBRF63AHgcGRvQosJB8wIgNTUPOO5oLpu1O0OjqygjlswZ0BeP4n%2F35k%2FUU%2F8bW9sqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxRKKp9xywKLTf3pyrcA9wjJqJe9VW22gr6%2FUTObaqq3AAGRsued7XTD2T9OoIxiiZ11lmQPilUC8GZK0fJnfHRKmwe4ZSbavcdyXuhcTOZK3v0JP32vrc%2F4SV4Rnz7hPuRO8REp3wvfcRstiXLUOQYjtM1h4C%2Bu3uQSBM1nUU%2BrrsHTltaQymtMLXSYhedXR6ctRvAzto8sMelX4oZA57krdm4uTO38IBbFKxwqMLkiv2QiOHfPW5Xgni3FgO9zJy775bnlV7cThb%2BteL9rrVbdY0Z%2FK2Kb7ieAiMTom%2FK4qg%2FADsKVecBkxO%2FHW%2BCj7si1XAyTONy%2FsKGSu3C8cVoJLVAI5ZmqLZOu0jz9lNOdSMFwh3LWMw2ybX9w5AwQbsSLk6A9RtvHEmmb7dxQz1QN1fhcWjSS8Bgdd%2BVyoLYoWri3sQjCqhuzflHravhKXYRwP71YcB975Uzs7m7BLYsF44cxqVFmcSWEuSSge5suyHYGaUKWA3Qykqv7fIOt%2Bf7VzGy1fXfK0xMu7joUhjRvzN64C8T8Rh%2F6%2B8gV3W2sfq18%2BZiYvRCa%2BPNnwtJJ9MuXqphIe951UiUchHm3gvqAbP0nJY4WXV7AQequG%2B1sbYUQkwytZc1e%2FlntmETPXe2T4wQ2iruSC2QMKPj2L8GOqUBsqqecrRBXBefjTubJmXBgKQTolUTjUJlGRK9AHVCoJa%2F%2BGr7s3OME%2FR8aS3vMW3onPeP7rSi9TDQ9BirSo9MP4TNAu3JgHeDYxtp%2FYGx%2B81qfwv1fbdhFsklJnu8dcRl%2BAOGIoQlDm2iyblUqXM4uC55BHRsy2NPi641d3DDXEEYJJgSVkAKHxzAPI2Nwj2w4cLmbeunzNsdcTRYQIrX6vXAa4WN&X-Amz-Signature=7e51ee4d9a2a99b4799ca612792a72be3a7ce4ee54b593f4207a6af844139455&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZEHKBD4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDzZFbEjoyRf5SoFi80zEVjaoVBRF63AHgcGRvQosJB8wIgNTUPOO5oLpu1O0OjqygjlswZ0BeP4n%2F35k%2FUU%2F8bW9sqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxRKKp9xywKLTf3pyrcA9wjJqJe9VW22gr6%2FUTObaqq3AAGRsued7XTD2T9OoIxiiZ11lmQPilUC8GZK0fJnfHRKmwe4ZSbavcdyXuhcTOZK3v0JP32vrc%2F4SV4Rnz7hPuRO8REp3wvfcRstiXLUOQYjtM1h4C%2Bu3uQSBM1nUU%2BrrsHTltaQymtMLXSYhedXR6ctRvAzto8sMelX4oZA57krdm4uTO38IBbFKxwqMLkiv2QiOHfPW5Xgni3FgO9zJy775bnlV7cThb%2BteL9rrVbdY0Z%2FK2Kb7ieAiMTom%2FK4qg%2FADsKVecBkxO%2FHW%2BCj7si1XAyTONy%2FsKGSu3C8cVoJLVAI5ZmqLZOu0jz9lNOdSMFwh3LWMw2ybX9w5AwQbsSLk6A9RtvHEmmb7dxQz1QN1fhcWjSS8Bgdd%2BVyoLYoWri3sQjCqhuzflHravhKXYRwP71YcB975Uzs7m7BLYsF44cxqVFmcSWEuSSge5suyHYGaUKWA3Qykqv7fIOt%2Bf7VzGy1fXfK0xMu7joUhjRvzN64C8T8Rh%2F6%2B8gV3W2sfq18%2BZiYvRCa%2BPNnwtJJ9MuXqphIe951UiUchHm3gvqAbP0nJY4WXV7AQequG%2B1sbYUQkwytZc1e%2FlntmETPXe2T4wQ2iruSC2QMKPj2L8GOqUBsqqecrRBXBefjTubJmXBgKQTolUTjUJlGRK9AHVCoJa%2F%2BGr7s3OME%2FR8aS3vMW3onPeP7rSi9TDQ9BirSo9MP4TNAu3JgHeDYxtp%2FYGx%2B81qfwv1fbdhFsklJnu8dcRl%2BAOGIoQlDm2iyblUqXM4uC55BHRsy2NPi641d3DDXEEYJJgSVkAKHxzAPI2Nwj2w4cLmbeunzNsdcTRYQIrX6vXAa4WN&X-Amz-Signature=eb5ec79f66836df080ea161b233e287bf5bde8daa8eedc2d63c6fc441a929e25&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZEHKBD4%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T090933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQDzZFbEjoyRf5SoFi80zEVjaoVBRF63AHgcGRvQosJB8wIgNTUPOO5oLpu1O0OjqygjlswZ0BeP4n%2F35k%2FUU%2F8bW9sqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxRKKp9xywKLTf3pyrcA9wjJqJe9VW22gr6%2FUTObaqq3AAGRsued7XTD2T9OoIxiiZ11lmQPilUC8GZK0fJnfHRKmwe4ZSbavcdyXuhcTOZK3v0JP32vrc%2F4SV4Rnz7hPuRO8REp3wvfcRstiXLUOQYjtM1h4C%2Bu3uQSBM1nUU%2BrrsHTltaQymtMLXSYhedXR6ctRvAzto8sMelX4oZA57krdm4uTO38IBbFKxwqMLkiv2QiOHfPW5Xgni3FgO9zJy775bnlV7cThb%2BteL9rrVbdY0Z%2FK2Kb7ieAiMTom%2FK4qg%2FADsKVecBkxO%2FHW%2BCj7si1XAyTONy%2FsKGSu3C8cVoJLVAI5ZmqLZOu0jz9lNOdSMFwh3LWMw2ybX9w5AwQbsSLk6A9RtvHEmmb7dxQz1QN1fhcWjSS8Bgdd%2BVyoLYoWri3sQjCqhuzflHravhKXYRwP71YcB975Uzs7m7BLYsF44cxqVFmcSWEuSSge5suyHYGaUKWA3Qykqv7fIOt%2Bf7VzGy1fXfK0xMu7joUhjRvzN64C8T8Rh%2F6%2B8gV3W2sfq18%2BZiYvRCa%2BPNnwtJJ9MuXqphIe951UiUchHm3gvqAbP0nJY4WXV7AQequG%2B1sbYUQkwytZc1e%2FlntmETPXe2T4wQ2iruSC2QMKPj2L8GOqUBsqqecrRBXBefjTubJmXBgKQTolUTjUJlGRK9AHVCoJa%2F%2BGr7s3OME%2FR8aS3vMW3onPeP7rSi9TDQ9BirSo9MP4TNAu3JgHeDYxtp%2FYGx%2B81qfwv1fbdhFsklJnu8dcRl%2BAOGIoQlDm2iyblUqXM4uC55BHRsy2NPi641d3DDXEEYJJgSVkAKHxzAPI2Nwj2w4cLmbeunzNsdcTRYQIrX6vXAa4WN&X-Amz-Signature=7d6db0c601dc374dafdfbd7a3c99d32ffc8c1e97ff4590a18db7c2ee1b91ded2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

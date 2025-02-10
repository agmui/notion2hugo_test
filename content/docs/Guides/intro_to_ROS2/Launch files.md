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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P2C7KNW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqDjVj5iLCMLDZUaqND7AZSi4RTawfVkhpZDD%2BF3RnSQIhAKPU8PbqWyeCkBhIemQFmocIAG4yNfRmjC4Q38XaM8RaKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE3XJ2%2BRLYllIAbsMq3APf%2FsoQMZLtoYoCW%2F%2BeQT6IKZzYZDMIKCKBQhZqNLC%2Bk0tDABQbNazc6Z0pxMqoNrUJCMptGt5JzO%2FxbEF9G4M0B%2FHZBq6yWXNXS9yx4Q3zwZZBq4orgG2T662ZKcdMtJNNa8U%2Bx%2BpKXhD5H1RWFckOwkii6pTWT%2BLLiScOTV0EOZpi5RTWEOL6N8JE%2FfxAgdAI8zOyFP1ByPDl9dyFXKxPLF%2BPK1OZEL0jPAEakZXc9Ot2g5uLSGJw0S62DUr0l%2BrCn3EnwBFeCFVRIhJcmCFHPP%2BMAPxdphriub5q16u6GSMQYX5VlY0GZmn05K5Lun9J7pKJEYbNjSvnbXWEfnZrqe%2B5qdPhrJXnWDWcUxjKTRbip%2FktXRdo%2FsgAdeKh6BJen0Rq2dq8kiQg4kk8IPL2EkkSaWdiIuuo4TxBFdLLDOkN%2Bn5jox9gp5E%2BFOnn0HRJjImOgHXE3pChFbLIwkxfYsNH2SSfJ4GZYlajEnwprvulkuBnzrOQgeQT7H1y1jjwAJ84FQwei5vKhoE5YTmWdqkOx4AvqQiUCgz88j9MgYUwEgVE9d0w%2Fbit4rRnb%2B%2B6lKyYIyY84HI2y8R%2BJhetA%2FKDe15qqZ5lzlz3Voyzos5EbPPcBy%2FA5LxjKTDr%2BaW9BjqkAapGFXIyDUmtvkZBasKtyGED7SVUZKdMSlwODnX8PUnKS2xyz4wrjTQm%2FsmKsf995VHJdaEA9wfHC%2FCfuqjWsukdcoEH2Da576Dv5YGlXPOhlxhQ7sILuebzPnMd54yd6cLvXJ8au3eoLzZz8S%2BxAS4kx2gE2BvrycQ%2FQdxWEI%2BuV4J4UsRnTLAeeRSu%2FQiWN0DBkZdC%2FRdeNQUNNHWPsAEt0sGn&X-Amz-Signature=ed1bf453786d9b7eb5d748e8cf1ef021f2bb177f31847a3d6157519796025165&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P2C7KNW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqDjVj5iLCMLDZUaqND7AZSi4RTawfVkhpZDD%2BF3RnSQIhAKPU8PbqWyeCkBhIemQFmocIAG4yNfRmjC4Q38XaM8RaKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE3XJ2%2BRLYllIAbsMq3APf%2FsoQMZLtoYoCW%2F%2BeQT6IKZzYZDMIKCKBQhZqNLC%2Bk0tDABQbNazc6Z0pxMqoNrUJCMptGt5JzO%2FxbEF9G4M0B%2FHZBq6yWXNXS9yx4Q3zwZZBq4orgG2T662ZKcdMtJNNa8U%2Bx%2BpKXhD5H1RWFckOwkii6pTWT%2BLLiScOTV0EOZpi5RTWEOL6N8JE%2FfxAgdAI8zOyFP1ByPDl9dyFXKxPLF%2BPK1OZEL0jPAEakZXc9Ot2g5uLSGJw0S62DUr0l%2BrCn3EnwBFeCFVRIhJcmCFHPP%2BMAPxdphriub5q16u6GSMQYX5VlY0GZmn05K5Lun9J7pKJEYbNjSvnbXWEfnZrqe%2B5qdPhrJXnWDWcUxjKTRbip%2FktXRdo%2FsgAdeKh6BJen0Rq2dq8kiQg4kk8IPL2EkkSaWdiIuuo4TxBFdLLDOkN%2Bn5jox9gp5E%2BFOnn0HRJjImOgHXE3pChFbLIwkxfYsNH2SSfJ4GZYlajEnwprvulkuBnzrOQgeQT7H1y1jjwAJ84FQwei5vKhoE5YTmWdqkOx4AvqQiUCgz88j9MgYUwEgVE9d0w%2Fbit4rRnb%2B%2B6lKyYIyY84HI2y8R%2BJhetA%2FKDe15qqZ5lzlz3Voyzos5EbPPcBy%2FA5LxjKTDr%2BaW9BjqkAapGFXIyDUmtvkZBasKtyGED7SVUZKdMSlwODnX8PUnKS2xyz4wrjTQm%2FsmKsf995VHJdaEA9wfHC%2FCfuqjWsukdcoEH2Da576Dv5YGlXPOhlxhQ7sILuebzPnMd54yd6cLvXJ8au3eoLzZz8S%2BxAS4kx2gE2BvrycQ%2FQdxWEI%2BuV4J4UsRnTLAeeRSu%2FQiWN0DBkZdC%2FRdeNQUNNHWPsAEt0sGn&X-Amz-Signature=42d620796e769ee3b4449a8cbf35727b96d78188d27ed55bb4751657e71d8dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P2C7KNW%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqDjVj5iLCMLDZUaqND7AZSi4RTawfVkhpZDD%2BF3RnSQIhAKPU8PbqWyeCkBhIemQFmocIAG4yNfRmjC4Q38XaM8RaKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzE3XJ2%2BRLYllIAbsMq3APf%2FsoQMZLtoYoCW%2F%2BeQT6IKZzYZDMIKCKBQhZqNLC%2Bk0tDABQbNazc6Z0pxMqoNrUJCMptGt5JzO%2FxbEF9G4M0B%2FHZBq6yWXNXS9yx4Q3zwZZBq4orgG2T662ZKcdMtJNNa8U%2Bx%2BpKXhD5H1RWFckOwkii6pTWT%2BLLiScOTV0EOZpi5RTWEOL6N8JE%2FfxAgdAI8zOyFP1ByPDl9dyFXKxPLF%2BPK1OZEL0jPAEakZXc9Ot2g5uLSGJw0S62DUr0l%2BrCn3EnwBFeCFVRIhJcmCFHPP%2BMAPxdphriub5q16u6GSMQYX5VlY0GZmn05K5Lun9J7pKJEYbNjSvnbXWEfnZrqe%2B5qdPhrJXnWDWcUxjKTRbip%2FktXRdo%2FsgAdeKh6BJen0Rq2dq8kiQg4kk8IPL2EkkSaWdiIuuo4TxBFdLLDOkN%2Bn5jox9gp5E%2BFOnn0HRJjImOgHXE3pChFbLIwkxfYsNH2SSfJ4GZYlajEnwprvulkuBnzrOQgeQT7H1y1jjwAJ84FQwei5vKhoE5YTmWdqkOx4AvqQiUCgz88j9MgYUwEgVE9d0w%2Fbit4rRnb%2B%2B6lKyYIyY84HI2y8R%2BJhetA%2FKDe15qqZ5lzlz3Voyzos5EbPPcBy%2FA5LxjKTDr%2BaW9BjqkAapGFXIyDUmtvkZBasKtyGED7SVUZKdMSlwODnX8PUnKS2xyz4wrjTQm%2FsmKsf995VHJdaEA9wfHC%2FCfuqjWsukdcoEH2Da576Dv5YGlXPOhlxhQ7sILuebzPnMd54yd6cLvXJ8au3eoLzZz8S%2BxAS4kx2gE2BvrycQ%2FQdxWEI%2BuV4J4UsRnTLAeeRSu%2FQiWN0DBkZdC%2FRdeNQUNNHWPsAEt0sGn&X-Amz-Signature=70faaeb0d40fe716283eb417cf4cd74e02542f1dc7eefd731f3c3f4147310a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

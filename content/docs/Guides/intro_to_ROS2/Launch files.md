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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODZFEK7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3HLto4MPIRC0%2BV5NT1PmkhIttre2LGEQymv6QRKMjaAiEAm9qGWE3sLUHky5wgX%2F8TmEO1xsIufiU4naOgyw6HMB8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAG3YaQPKe756UhGoyrcAzReqf0FekL2brQRRtWtvSGOCvpdNg5FkAnY7F%2BftnQbPTpxNfzCqB92qPNoWi%2BeY9na2VDUPBMqT3hI99946Z9WgM7iql024sRYdjm0HrrTI5qYrYDqMw1tO9Z2whXhVwyxvfdecy0r7m0M8vdJlf4M90U%2B96SxuJngjRQ8%2BM0%2BiR%2BhDTRcjuAekX4cG4oXclluz5%2Flcl3Xd2%2BLbTJb%2FsbYyKPM6NxozMatVL2Hemr05kR%2B%2BV5X5qhUQ6fdQPFDQmqB57jxr%2F4mbmLZsCMLHlyEwAEjXRvXSD5NRXqAJrB2f0usm7xF%2Ba%2Bu6w%2FzLZqdSy5UndN8COKWJyB77UMryRQh3z77s0ZU9OnMNDzMCY3vYM1BP45XXV0g7Bt%2BOET9gSjpUXtPmMtJ8mSQ1qhEPJCdh61lmTwrc%2FLOBbck17qYV0b2hsw9AffESUxmMMjgTRnvQpOM7%2FM8wIyB9i%2BrZTbkiqwwGA7v7uqg%2FZJHgcqXCNwdtmSyK6Hfnp%2FRytM6vySi4cAs7SzPEbNUCNf7fVTuJCkpZzD03rCKHFCuAJfw94X2zd524QDuif6Ctb8A38SS6xOzX9y%2FvUw5ybUZEIi9czmSa9JkLf%2By83zmhQYuf%2F9aJwqcFPbxigTPMPqR374GOqUBO7AsV4YYJoN9QzQUr4KRvoIafO7FhDV8Fg0Re2Jjn6k%2B4QNxmzqEq2pPFtz4eOzZCXILPrONlTqsA4L0fK0i04AMQOMZim%2FXE3oCo5nfELgE9lXIm7cKholduueI1ToOkfiQIDbl%2Feroav%2FLvKMvlEMo7UzekogEUlQyzIchQ%2Fx21RFXWgbJ8e09M5GufsW5B1FAPFYQ4ec2zKrFgldnSAfwpqSa&X-Amz-Signature=d925dc9888ac78f2224a859d49724bf4e1568af938d22cab2a5c7a8a305e96ff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODZFEK7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3HLto4MPIRC0%2BV5NT1PmkhIttre2LGEQymv6QRKMjaAiEAm9qGWE3sLUHky5wgX%2F8TmEO1xsIufiU4naOgyw6HMB8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAG3YaQPKe756UhGoyrcAzReqf0FekL2brQRRtWtvSGOCvpdNg5FkAnY7F%2BftnQbPTpxNfzCqB92qPNoWi%2BeY9na2VDUPBMqT3hI99946Z9WgM7iql024sRYdjm0HrrTI5qYrYDqMw1tO9Z2whXhVwyxvfdecy0r7m0M8vdJlf4M90U%2B96SxuJngjRQ8%2BM0%2BiR%2BhDTRcjuAekX4cG4oXclluz5%2Flcl3Xd2%2BLbTJb%2FsbYyKPM6NxozMatVL2Hemr05kR%2B%2BV5X5qhUQ6fdQPFDQmqB57jxr%2F4mbmLZsCMLHlyEwAEjXRvXSD5NRXqAJrB2f0usm7xF%2Ba%2Bu6w%2FzLZqdSy5UndN8COKWJyB77UMryRQh3z77s0ZU9OnMNDzMCY3vYM1BP45XXV0g7Bt%2BOET9gSjpUXtPmMtJ8mSQ1qhEPJCdh61lmTwrc%2FLOBbck17qYV0b2hsw9AffESUxmMMjgTRnvQpOM7%2FM8wIyB9i%2BrZTbkiqwwGA7v7uqg%2FZJHgcqXCNwdtmSyK6Hfnp%2FRytM6vySi4cAs7SzPEbNUCNf7fVTuJCkpZzD03rCKHFCuAJfw94X2zd524QDuif6Ctb8A38SS6xOzX9y%2FvUw5ybUZEIi9czmSa9JkLf%2By83zmhQYuf%2F9aJwqcFPbxigTPMPqR374GOqUBO7AsV4YYJoN9QzQUr4KRvoIafO7FhDV8Fg0Re2Jjn6k%2B4QNxmzqEq2pPFtz4eOzZCXILPrONlTqsA4L0fK0i04AMQOMZim%2FXE3oCo5nfELgE9lXIm7cKholduueI1ToOkfiQIDbl%2Feroav%2FLvKMvlEMo7UzekogEUlQyzIchQ%2Fx21RFXWgbJ8e09M5GufsW5B1FAPFYQ4ec2zKrFgldnSAfwpqSa&X-Amz-Signature=275939baa38eb611ef15a60afb1ff1d9f3cb55b96d7ef64124a8e33015b7e416&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ODZFEK7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T070906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3HLto4MPIRC0%2BV5NT1PmkhIttre2LGEQymv6QRKMjaAiEAm9qGWE3sLUHky5wgX%2F8TmEO1xsIufiU4naOgyw6HMB8q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAG3YaQPKe756UhGoyrcAzReqf0FekL2brQRRtWtvSGOCvpdNg5FkAnY7F%2BftnQbPTpxNfzCqB92qPNoWi%2BeY9na2VDUPBMqT3hI99946Z9WgM7iql024sRYdjm0HrrTI5qYrYDqMw1tO9Z2whXhVwyxvfdecy0r7m0M8vdJlf4M90U%2B96SxuJngjRQ8%2BM0%2BiR%2BhDTRcjuAekX4cG4oXclluz5%2Flcl3Xd2%2BLbTJb%2FsbYyKPM6NxozMatVL2Hemr05kR%2B%2BV5X5qhUQ6fdQPFDQmqB57jxr%2F4mbmLZsCMLHlyEwAEjXRvXSD5NRXqAJrB2f0usm7xF%2Ba%2Bu6w%2FzLZqdSy5UndN8COKWJyB77UMryRQh3z77s0ZU9OnMNDzMCY3vYM1BP45XXV0g7Bt%2BOET9gSjpUXtPmMtJ8mSQ1qhEPJCdh61lmTwrc%2FLOBbck17qYV0b2hsw9AffESUxmMMjgTRnvQpOM7%2FM8wIyB9i%2BrZTbkiqwwGA7v7uqg%2FZJHgcqXCNwdtmSyK6Hfnp%2FRytM6vySi4cAs7SzPEbNUCNf7fVTuJCkpZzD03rCKHFCuAJfw94X2zd524QDuif6Ctb8A38SS6xOzX9y%2FvUw5ybUZEIi9czmSa9JkLf%2By83zmhQYuf%2F9aJwqcFPbxigTPMPqR374GOqUBO7AsV4YYJoN9QzQUr4KRvoIafO7FhDV8Fg0Re2Jjn6k%2B4QNxmzqEq2pPFtz4eOzZCXILPrONlTqsA4L0fK0i04AMQOMZim%2FXE3oCo5nfELgE9lXIm7cKholduueI1ToOkfiQIDbl%2Feroav%2FLvKMvlEMo7UzekogEUlQyzIchQ%2Fx21RFXWgbJ8e09M5GufsW5B1FAPFYQ4ec2zKrFgldnSAfwpqSa&X-Amz-Signature=40988080b7b564f6b80443b351b64f4dc25a3f9d9f8ea085b93e3967a28e542c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

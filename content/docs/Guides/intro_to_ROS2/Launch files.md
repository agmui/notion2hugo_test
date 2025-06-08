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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7MSY2V%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhZiSG7y5hBO3HCtvoprMupnQlnZcDTlRFdu8f4RAPqAiEA9Xzf2QKQTSkoJVCBzt5ltdO3VYwufIj5nuIyvEao%2FPkqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFcxEJ3z%2FMvUaiWGircA5zTcPhZQ1m1ods%2Ftc49QpPNW4WbPN8XNza5D5m%2FxKr%2FABDPp63ZKSZne0G6CCiwgibWP1JchqXEtGofVN9xDxNz%2FcRZilB915kpwPNtb4PqeBPGI5lVKzjxPK2WSh90d1o3vDfl1S%2BF%2FEh4WtHAQdwiyDGdeuGmgzRFvXO6EPpy70urauvMWW4lwqow8Caok%2BEGccl7kZ90HZbN8qQEcLESfnK52ekJzn83zaJQLS%2BzJgS4s3cW9Kw2wncj8gvwH9y%2FnnRna8%2BJJN1W8U1tUoQNHHos6YMbsRBYOeQofzVcuKTIbU8bfeK%2FP%2FaRQoicRjwdF58d4R11AAIFH0UEXz4z4zDDSlV%2FSRGfHn4EUWSuBQy3eVpWk2P4ybooNbiurgAUYTkuI61C0z8wLfurJzDXkqGJ8YDILqv2S58ILE4l2Ht8UtGyIZCFEo20QWIyHc%2FZrAovMy6CkT4v3s8%2BOi5nBSmxHZcmWvEgrhDSRTRFgsfQSo%2FYsiR3NvzLmaD0YEV%2FJAcRQuDpA8lB%2FfoCdFKkx7VCBBVmUZRYIIahU57XBaXNDSfD0ogagYRZYKq7vx2%2F%2FYmKggTuulPwtnMKICwhHLJuBn0iw98w0mu8HxO2GvMH4rtMFZd8ER8MMJjYl8IGOqUBObj5uoH7C%2Bhk3qCX6nGWbqBQWITf3tkzrWrT5FhbqhSSGTa2t%2Bi8KgNGC%2FSxGMxpsFhrHmKCDRTjFzHje9K9cBTcGXRLgZwhlWJx1wbhJIXIJquoTW2f%2BQYEtPHe6dM7bbeB5B%2Bh7Qp5lMpd%2BHWUaN1lBQRaqqfhj473GgnzdFTpOpRYieM0iNAAl7CoHhePg72j9qyblMkvcjllJiAG2eO2WWP%2B&X-Amz-Signature=a540a1b640e5e45fcee74da156a90af7e658380c8de7e9e148ad84ba78a7cb07&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7MSY2V%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhZiSG7y5hBO3HCtvoprMupnQlnZcDTlRFdu8f4RAPqAiEA9Xzf2QKQTSkoJVCBzt5ltdO3VYwufIj5nuIyvEao%2FPkqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFcxEJ3z%2FMvUaiWGircA5zTcPhZQ1m1ods%2Ftc49QpPNW4WbPN8XNza5D5m%2FxKr%2FABDPp63ZKSZne0G6CCiwgibWP1JchqXEtGofVN9xDxNz%2FcRZilB915kpwPNtb4PqeBPGI5lVKzjxPK2WSh90d1o3vDfl1S%2BF%2FEh4WtHAQdwiyDGdeuGmgzRFvXO6EPpy70urauvMWW4lwqow8Caok%2BEGccl7kZ90HZbN8qQEcLESfnK52ekJzn83zaJQLS%2BzJgS4s3cW9Kw2wncj8gvwH9y%2FnnRna8%2BJJN1W8U1tUoQNHHos6YMbsRBYOeQofzVcuKTIbU8bfeK%2FP%2FaRQoicRjwdF58d4R11AAIFH0UEXz4z4zDDSlV%2FSRGfHn4EUWSuBQy3eVpWk2P4ybooNbiurgAUYTkuI61C0z8wLfurJzDXkqGJ8YDILqv2S58ILE4l2Ht8UtGyIZCFEo20QWIyHc%2FZrAovMy6CkT4v3s8%2BOi5nBSmxHZcmWvEgrhDSRTRFgsfQSo%2FYsiR3NvzLmaD0YEV%2FJAcRQuDpA8lB%2FfoCdFKkx7VCBBVmUZRYIIahU57XBaXNDSfD0ogagYRZYKq7vx2%2F%2FYmKggTuulPwtnMKICwhHLJuBn0iw98w0mu8HxO2GvMH4rtMFZd8ER8MMJjYl8IGOqUBObj5uoH7C%2Bhk3qCX6nGWbqBQWITf3tkzrWrT5FhbqhSSGTa2t%2Bi8KgNGC%2FSxGMxpsFhrHmKCDRTjFzHje9K9cBTcGXRLgZwhlWJx1wbhJIXIJquoTW2f%2BQYEtPHe6dM7bbeB5B%2Bh7Qp5lMpd%2BHWUaN1lBQRaqqfhj473GgnzdFTpOpRYieM0iNAAl7CoHhePg72j9qyblMkvcjllJiAG2eO2WWP%2B&X-Amz-Signature=c66d5d6f2dfb906b11be3ee9252acce29b99808fa3f4bc43d7d1b35716f69383&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P7MSY2V%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhZiSG7y5hBO3HCtvoprMupnQlnZcDTlRFdu8f4RAPqAiEA9Xzf2QKQTSkoJVCBzt5ltdO3VYwufIj5nuIyvEao%2FPkqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFcxEJ3z%2FMvUaiWGircA5zTcPhZQ1m1ods%2Ftc49QpPNW4WbPN8XNza5D5m%2FxKr%2FABDPp63ZKSZne0G6CCiwgibWP1JchqXEtGofVN9xDxNz%2FcRZilB915kpwPNtb4PqeBPGI5lVKzjxPK2WSh90d1o3vDfl1S%2BF%2FEh4WtHAQdwiyDGdeuGmgzRFvXO6EPpy70urauvMWW4lwqow8Caok%2BEGccl7kZ90HZbN8qQEcLESfnK52ekJzn83zaJQLS%2BzJgS4s3cW9Kw2wncj8gvwH9y%2FnnRna8%2BJJN1W8U1tUoQNHHos6YMbsRBYOeQofzVcuKTIbU8bfeK%2FP%2FaRQoicRjwdF58d4R11AAIFH0UEXz4z4zDDSlV%2FSRGfHn4EUWSuBQy3eVpWk2P4ybooNbiurgAUYTkuI61C0z8wLfurJzDXkqGJ8YDILqv2S58ILE4l2Ht8UtGyIZCFEo20QWIyHc%2FZrAovMy6CkT4v3s8%2BOi5nBSmxHZcmWvEgrhDSRTRFgsfQSo%2FYsiR3NvzLmaD0YEV%2FJAcRQuDpA8lB%2FfoCdFKkx7VCBBVmUZRYIIahU57XBaXNDSfD0ogagYRZYKq7vx2%2F%2FYmKggTuulPwtnMKICwhHLJuBn0iw98w0mu8HxO2GvMH4rtMFZd8ER8MMJjYl8IGOqUBObj5uoH7C%2Bhk3qCX6nGWbqBQWITf3tkzrWrT5FhbqhSSGTa2t%2Bi8KgNGC%2FSxGMxpsFhrHmKCDRTjFzHje9K9cBTcGXRLgZwhlWJx1wbhJIXIJquoTW2f%2BQYEtPHe6dM7bbeB5B%2Bh7Qp5lMpd%2BHWUaN1lBQRaqqfhj473GgnzdFTpOpRYieM0iNAAl7CoHhePg72j9qyblMkvcjllJiAG2eO2WWP%2B&X-Amz-Signature=741bc9aeb945f1a0eb66e9889988f2be6fc0467132c7c473f59d0905b41992ad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

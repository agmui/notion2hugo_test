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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQMPCCZ4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrMQJ5k4%2FE186jnaJdmoeDR8vr0kTLK6eSakwZzgpkQIhAPeaAzSt1T1wgdgMXv5DRAAlIh%2F6npalhW%2BtKe%2Bn6NBoKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaYiTCHWJUm05q04cq3AP093NwjHF4ix%2ByrR7BmOiDXLBYzCVdd2Z4uHzIx%2BsFxkbgrXHzRLJA4QoohAnP%2BsA5lFLZhpfW0y5d8dUQfXNnWyf0IEXz%2FJkUIISMtlySpKL72cR4r4lBEj0MCsmw%2BhUnR0YoGuzsA049JSVqQTU7Zot0uLp3LzHFs9kjV%2FMsPdzAX1n7xCFW7bKUdeMhAbXGPml3qzFs3edZ14K1%2B%2FvL440Vp9gfXg%2BxyymAMZe8hwCeZKds%2BwYVL%2B6puf%2FQk21SYPZOwRxowD4cphKW%2BQ8WEjse6cZR9HQDs2SPUQcCWMQ10a6aNwBo2IVhx%2B%2F8J0ivw5SENwF687yuoPgHXJ49WwbQOQPZpMVlpFq6I9d%2F6st7L8rPBYV77C26nrBEhcGPTWPzL6fdk%2FVgsM7CJKu%2BRs8hisjvOsfSRO07f8Q6Vq5Lex6kEcWhGFNu%2Fa9qXw%2FDHyxcWR6M9Glx1LCuQ5D0MqqCawOP2dV0UaPaHOcQWKxfxtrANnLzMhjkr6gY1ttaS0jb7kLTjJ3ijyPtt8k0yfzO7qsIR3ZduDwxgXCRBQ%2Bs3CYShWS5dny%2BnohDlFl090gpEAy1xsTGoZRBUZYg2xbmOylIjxWc1w1e4ZpG91bNuZqU6BePl3Q7kjCBiJ%2FCBjqkAWmtN8n5yKFqvZdRnguPjQuxPmPNIpIHavBGbW22lBSw%2B0s3KRc6qraunaAIGSLIXRH8M2pFhVdZjXBQuE7D4on68HjhtWqef9mCms9Rov2%2FCPgjCel92sjpxuig%2Brulge2WTM04NvD6gJKd2eKUT4jPX74LDCPhPsao9OFd0APuSGf9d9S2aX2CrC8FDpwHwv0cb8ALVeFPSlfXc2V1y2Oz9N90&X-Amz-Signature=90d5f542db4aa4efa0d050309479e7af52c17a3f67afd61e124a033fb546854f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQMPCCZ4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrMQJ5k4%2FE186jnaJdmoeDR8vr0kTLK6eSakwZzgpkQIhAPeaAzSt1T1wgdgMXv5DRAAlIh%2F6npalhW%2BtKe%2Bn6NBoKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaYiTCHWJUm05q04cq3AP093NwjHF4ix%2ByrR7BmOiDXLBYzCVdd2Z4uHzIx%2BsFxkbgrXHzRLJA4QoohAnP%2BsA5lFLZhpfW0y5d8dUQfXNnWyf0IEXz%2FJkUIISMtlySpKL72cR4r4lBEj0MCsmw%2BhUnR0YoGuzsA049JSVqQTU7Zot0uLp3LzHFs9kjV%2FMsPdzAX1n7xCFW7bKUdeMhAbXGPml3qzFs3edZ14K1%2B%2FvL440Vp9gfXg%2BxyymAMZe8hwCeZKds%2BwYVL%2B6puf%2FQk21SYPZOwRxowD4cphKW%2BQ8WEjse6cZR9HQDs2SPUQcCWMQ10a6aNwBo2IVhx%2B%2F8J0ivw5SENwF687yuoPgHXJ49WwbQOQPZpMVlpFq6I9d%2F6st7L8rPBYV77C26nrBEhcGPTWPzL6fdk%2FVgsM7CJKu%2BRs8hisjvOsfSRO07f8Q6Vq5Lex6kEcWhGFNu%2Fa9qXw%2FDHyxcWR6M9Glx1LCuQ5D0MqqCawOP2dV0UaPaHOcQWKxfxtrANnLzMhjkr6gY1ttaS0jb7kLTjJ3ijyPtt8k0yfzO7qsIR3ZduDwxgXCRBQ%2Bs3CYShWS5dny%2BnohDlFl090gpEAy1xsTGoZRBUZYg2xbmOylIjxWc1w1e4ZpG91bNuZqU6BePl3Q7kjCBiJ%2FCBjqkAWmtN8n5yKFqvZdRnguPjQuxPmPNIpIHavBGbW22lBSw%2B0s3KRc6qraunaAIGSLIXRH8M2pFhVdZjXBQuE7D4on68HjhtWqef9mCms9Rov2%2FCPgjCel92sjpxuig%2Brulge2WTM04NvD6gJKd2eKUT4jPX74LDCPhPsao9OFd0APuSGf9d9S2aX2CrC8FDpwHwv0cb8ALVeFPSlfXc2V1y2Oz9N90&X-Amz-Signature=20bc4b1ded1934cc5f19f941bee6c0957828a6ff97461bab4679e1b46b089450&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQMPCCZ4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrMQJ5k4%2FE186jnaJdmoeDR8vr0kTLK6eSakwZzgpkQIhAPeaAzSt1T1wgdgMXv5DRAAlIh%2F6npalhW%2BtKe%2Bn6NBoKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyaYiTCHWJUm05q04cq3AP093NwjHF4ix%2ByrR7BmOiDXLBYzCVdd2Z4uHzIx%2BsFxkbgrXHzRLJA4QoohAnP%2BsA5lFLZhpfW0y5d8dUQfXNnWyf0IEXz%2FJkUIISMtlySpKL72cR4r4lBEj0MCsmw%2BhUnR0YoGuzsA049JSVqQTU7Zot0uLp3LzHFs9kjV%2FMsPdzAX1n7xCFW7bKUdeMhAbXGPml3qzFs3edZ14K1%2B%2FvL440Vp9gfXg%2BxyymAMZe8hwCeZKds%2BwYVL%2B6puf%2FQk21SYPZOwRxowD4cphKW%2BQ8WEjse6cZR9HQDs2SPUQcCWMQ10a6aNwBo2IVhx%2B%2F8J0ivw5SENwF687yuoPgHXJ49WwbQOQPZpMVlpFq6I9d%2F6st7L8rPBYV77C26nrBEhcGPTWPzL6fdk%2FVgsM7CJKu%2BRs8hisjvOsfSRO07f8Q6Vq5Lex6kEcWhGFNu%2Fa9qXw%2FDHyxcWR6M9Glx1LCuQ5D0MqqCawOP2dV0UaPaHOcQWKxfxtrANnLzMhjkr6gY1ttaS0jb7kLTjJ3ijyPtt8k0yfzO7qsIR3ZduDwxgXCRBQ%2Bs3CYShWS5dny%2BnohDlFl090gpEAy1xsTGoZRBUZYg2xbmOylIjxWc1w1e4ZpG91bNuZqU6BePl3Q7kjCBiJ%2FCBjqkAWmtN8n5yKFqvZdRnguPjQuxPmPNIpIHavBGbW22lBSw%2B0s3KRc6qraunaAIGSLIXRH8M2pFhVdZjXBQuE7D4on68HjhtWqef9mCms9Rov2%2FCPgjCel92sjpxuig%2Brulge2WTM04NvD6gJKd2eKUT4jPX74LDCPhPsao9OFd0APuSGf9d9S2aX2CrC8FDpwHwv0cb8ALVeFPSlfXc2V1y2Oz9N90&X-Amz-Signature=35ead600d2cfc7b767a6ccf56b9a5a92673312cb03080255ac191e6aac81512c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

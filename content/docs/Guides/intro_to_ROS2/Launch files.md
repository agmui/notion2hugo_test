---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VD4RAGQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCQ6lXdfMjbRSbNUC%2B%2Bk8zh5kTMFzOiHziI15jYTl4TwAIhAMW%2B7QGQ0qBNUGfa0iiMxZXGva6d9avNqls3dZou3G7YKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSVrUKEnZt79DVW7kq3AO4tfESu1biIHypmGuQNRWIPK1KubD5UNHRI9B67s%2FqA5cZFGxWtCV9v7ozKEGps2oHgruVNLEgvvcJyQjzW6ri5MDyP%2BKVGC%2BJk5POM2WkpHIFBDHDKIpm94oXfn8gZjc5IcweG6e8b%2FMypCcnU773RChHie56Pk8vurLEPCCXHbtsG7j1fHrjT%2FI9voP74%2BoaeYf8rd3bwAnpZUr%2BzpnaeheiA2AhMQLVGz38voK3gF9L9C1cY529uG6oTYjL7pWaIyAWiUue85ZqPRUpfY%2BpmMlEp7hOpY3ECfEdnP1XiiXVHbXA2E8sh7gdnXJ5RTGbr%2FaJQst2r2fEJJKl2wbG%2BB8zxsxaEBe70at2kxRyUElrDaCkJKSTjsRRS1Z81AXyDXngPKywCg684pMNh0g4S832%2FvizAs3PXH9M11zDqJ6DHdsuwaiyty5XpEx7VWssSH4HDKm%2FhONfZqnHCXvUMtklEC%2FOsi5Bmm9TDM0psFiB%2Fxo1iPN95yQiaI8Wm%2BCFSRunQ0uyPo990LByYrB6HvoAQ0cKTRvOx75KW%2Fua9L51VqlzRyVeq%2F77Eti5tO4w8YJsPiOBm9TAKqCZCsqYHRi94J4YkzWFXmzelZhLD%2B8D1IFVI1s6UWo3UTDf0Z7EBjqkAVGFo3adhOwioVbuT%2FyywBIvcvghzNbXouBFuyMU3wmOmDqCobHiByCIVQfkybhzBSti4dXJXiGGiCcMag3aicQk8BML4GD04anE1c3XsLaZhNv6tpqHiPNRBNfO1nAflo2OKitY0RThUbi5ZMnclfkIb0lsPj6I9OlM9q%2FQKRFwn2jZgFVVWgO0kIDJ64aM2Y40QdrEoD5QBBr%2FZHcKP0Ag42d3&X-Amz-Signature=0377849ef058e2ec53ef3809143aa9db21a9e39e8c7aaf0aaa6acc01b2379d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VD4RAGQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCQ6lXdfMjbRSbNUC%2B%2Bk8zh5kTMFzOiHziI15jYTl4TwAIhAMW%2B7QGQ0qBNUGfa0iiMxZXGva6d9avNqls3dZou3G7YKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSVrUKEnZt79DVW7kq3AO4tfESu1biIHypmGuQNRWIPK1KubD5UNHRI9B67s%2FqA5cZFGxWtCV9v7ozKEGps2oHgruVNLEgvvcJyQjzW6ri5MDyP%2BKVGC%2BJk5POM2WkpHIFBDHDKIpm94oXfn8gZjc5IcweG6e8b%2FMypCcnU773RChHie56Pk8vurLEPCCXHbtsG7j1fHrjT%2FI9voP74%2BoaeYf8rd3bwAnpZUr%2BzpnaeheiA2AhMQLVGz38voK3gF9L9C1cY529uG6oTYjL7pWaIyAWiUue85ZqPRUpfY%2BpmMlEp7hOpY3ECfEdnP1XiiXVHbXA2E8sh7gdnXJ5RTGbr%2FaJQst2r2fEJJKl2wbG%2BB8zxsxaEBe70at2kxRyUElrDaCkJKSTjsRRS1Z81AXyDXngPKywCg684pMNh0g4S832%2FvizAs3PXH9M11zDqJ6DHdsuwaiyty5XpEx7VWssSH4HDKm%2FhONfZqnHCXvUMtklEC%2FOsi5Bmm9TDM0psFiB%2Fxo1iPN95yQiaI8Wm%2BCFSRunQ0uyPo990LByYrB6HvoAQ0cKTRvOx75KW%2Fua9L51VqlzRyVeq%2F77Eti5tO4w8YJsPiOBm9TAKqCZCsqYHRi94J4YkzWFXmzelZhLD%2B8D1IFVI1s6UWo3UTDf0Z7EBjqkAVGFo3adhOwioVbuT%2FyywBIvcvghzNbXouBFuyMU3wmOmDqCobHiByCIVQfkybhzBSti4dXJXiGGiCcMag3aicQk8BML4GD04anE1c3XsLaZhNv6tpqHiPNRBNfO1nAflo2OKitY0RThUbi5ZMnclfkIb0lsPj6I9OlM9q%2FQKRFwn2jZgFVVWgO0kIDJ64aM2Y40QdrEoD5QBBr%2FZHcKP0Ag42d3&X-Amz-Signature=5fccfc6185b9be067ef792e297e22232ea973356e8b14e4d930dac5d2208fed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VD4RAGQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T181350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCQ6lXdfMjbRSbNUC%2B%2Bk8zh5kTMFzOiHziI15jYTl4TwAIhAMW%2B7QGQ0qBNUGfa0iiMxZXGva6d9avNqls3dZou3G7YKogECJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSVrUKEnZt79DVW7kq3AO4tfESu1biIHypmGuQNRWIPK1KubD5UNHRI9B67s%2FqA5cZFGxWtCV9v7ozKEGps2oHgruVNLEgvvcJyQjzW6ri5MDyP%2BKVGC%2BJk5POM2WkpHIFBDHDKIpm94oXfn8gZjc5IcweG6e8b%2FMypCcnU773RChHie56Pk8vurLEPCCXHbtsG7j1fHrjT%2FI9voP74%2BoaeYf8rd3bwAnpZUr%2BzpnaeheiA2AhMQLVGz38voK3gF9L9C1cY529uG6oTYjL7pWaIyAWiUue85ZqPRUpfY%2BpmMlEp7hOpY3ECfEdnP1XiiXVHbXA2E8sh7gdnXJ5RTGbr%2FaJQst2r2fEJJKl2wbG%2BB8zxsxaEBe70at2kxRyUElrDaCkJKSTjsRRS1Z81AXyDXngPKywCg684pMNh0g4S832%2FvizAs3PXH9M11zDqJ6DHdsuwaiyty5XpEx7VWssSH4HDKm%2FhONfZqnHCXvUMtklEC%2FOsi5Bmm9TDM0psFiB%2Fxo1iPN95yQiaI8Wm%2BCFSRunQ0uyPo990LByYrB6HvoAQ0cKTRvOx75KW%2Fua9L51VqlzRyVeq%2F77Eti5tO4w8YJsPiOBm9TAKqCZCsqYHRi94J4YkzWFXmzelZhLD%2B8D1IFVI1s6UWo3UTDf0Z7EBjqkAVGFo3adhOwioVbuT%2FyywBIvcvghzNbXouBFuyMU3wmOmDqCobHiByCIVQfkybhzBSti4dXJXiGGiCcMag3aicQk8BML4GD04anE1c3XsLaZhNv6tpqHiPNRBNfO1nAflo2OKitY0RThUbi5ZMnclfkIb0lsPj6I9OlM9q%2FQKRFwn2jZgFVVWgO0kIDJ64aM2Y40QdrEoD5QBBr%2FZHcKP0Ag42d3&X-Amz-Signature=ee692f6e01fc45729dfbed3f9183df17e55d1fe13b2008f887198674c1741154&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

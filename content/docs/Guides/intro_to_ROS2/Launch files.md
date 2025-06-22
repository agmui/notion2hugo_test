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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSRBIXE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCD4vXBB31j%2Fi70QVuKz7zo7XSZUS44Nu0vf0n2%2F9u9swIgYUVS8PFmO9YZRueRv52MDDd6yV1eZE%2BNVHw1VAzBRdkqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGiN5ZcYhjJZjcmyrcA4kNN0jMB9kqfUOZ1GjDoZNJaI%2FrFQEqSh2xcJousX5vIvdme5XAhqCsNPTFdYsngSQvfrs6D9oy8rlAcxAOGBDzFDBVBAdahYUmmu2LUrtPOE%2BDRNkbC2dvBWDUJm76rqthgSd0riJWd2pZw%2Bh%2BIaPTsuEJiMLkt0yd%2F%2BkKD8YXPo8txmosnJjOQiup9xtb0zKIJwcOOnJ4FYHD70Gz1fOUDW2Qet9GNoDMlJ2ZSc2mN2GtCJE6upNV1NaYehWEOljkJDbXDus%2FF61nRi0hIKZdsG4W70qWJJu%2Bn5VtyAeTZxQ62XNlKS4XznfTJw88rQ%2B3rozQo5Hd7aDSVP%2B%2BptdH%2FuoqohwnCxep1FIQ6EtS9xVLMMSVRb4Vr85tsioj2unjNrrX4g3euMPHFu5JWOGk%2FccKaEw1RNitfN0Ooikz4xn7u5fNlI%2BL7HiwsI4WnECi62%2F7XewJelzOtVmq3QN%2B2uYjxyHt9MEh7ESo5Z1qO9W5QZgoyekBoMmxtn1Iu66PnhZ%2BJIw8t5RGPtubwbbenV%2Fe57pfeefqX2tzqk6w6WGwxlQidmPqdHs2GnccCrXp3Ll1R4oLSpDf0Y9NsWLsSXE61eliYV2RNkK8%2FZR1NXxVRUb%2BpFRLVELqMMbH4cIGOqUBmBkyrUaFP2kmJeu20A1hzQlufIYwJDkUIj5UHJQlS26KAnEk1XdvTwb6hbIgx5KqgM7Uib3eK8gj9A6LMbKV2LKgnicmJRm5yOcGfW%2F1baZ2KKxuMmp8PL%2BGsqcziqxeS2cN0Qe5AQknd6HmpBCHpScoPtOsKCJX18dou623GY4f%2FGldZwPaemhQkGAwJfCbOsZL6kK4hux%2FrIamMCfJHJGqx8q1&X-Amz-Signature=bd8bb6484f13ff14e709ffeaed498f38fc09c0cc579f69c20b262f0a61850a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSRBIXE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCD4vXBB31j%2Fi70QVuKz7zo7XSZUS44Nu0vf0n2%2F9u9swIgYUVS8PFmO9YZRueRv52MDDd6yV1eZE%2BNVHw1VAzBRdkqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGiN5ZcYhjJZjcmyrcA4kNN0jMB9kqfUOZ1GjDoZNJaI%2FrFQEqSh2xcJousX5vIvdme5XAhqCsNPTFdYsngSQvfrs6D9oy8rlAcxAOGBDzFDBVBAdahYUmmu2LUrtPOE%2BDRNkbC2dvBWDUJm76rqthgSd0riJWd2pZw%2Bh%2BIaPTsuEJiMLkt0yd%2F%2BkKD8YXPo8txmosnJjOQiup9xtb0zKIJwcOOnJ4FYHD70Gz1fOUDW2Qet9GNoDMlJ2ZSc2mN2GtCJE6upNV1NaYehWEOljkJDbXDus%2FF61nRi0hIKZdsG4W70qWJJu%2Bn5VtyAeTZxQ62XNlKS4XznfTJw88rQ%2B3rozQo5Hd7aDSVP%2B%2BptdH%2FuoqohwnCxep1FIQ6EtS9xVLMMSVRb4Vr85tsioj2unjNrrX4g3euMPHFu5JWOGk%2FccKaEw1RNitfN0Ooikz4xn7u5fNlI%2BL7HiwsI4WnECi62%2F7XewJelzOtVmq3QN%2B2uYjxyHt9MEh7ESo5Z1qO9W5QZgoyekBoMmxtn1Iu66PnhZ%2BJIw8t5RGPtubwbbenV%2Fe57pfeefqX2tzqk6w6WGwxlQidmPqdHs2GnccCrXp3Ll1R4oLSpDf0Y9NsWLsSXE61eliYV2RNkK8%2FZR1NXxVRUb%2BpFRLVELqMMbH4cIGOqUBmBkyrUaFP2kmJeu20A1hzQlufIYwJDkUIj5UHJQlS26KAnEk1XdvTwb6hbIgx5KqgM7Uib3eK8gj9A6LMbKV2LKgnicmJRm5yOcGfW%2F1baZ2KKxuMmp8PL%2BGsqcziqxeS2cN0Qe5AQknd6HmpBCHpScoPtOsKCJX18dou623GY4f%2FGldZwPaemhQkGAwJfCbOsZL6kK4hux%2FrIamMCfJHJGqx8q1&X-Amz-Signature=0e2c27802a5278aebbdbf3c90a116bdbf6943a7f0669f9a934d2ff761c5801b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KSRBIXE%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQCD4vXBB31j%2Fi70QVuKz7zo7XSZUS44Nu0vf0n2%2F9u9swIgYUVS8PFmO9YZRueRv52MDDd6yV1eZE%2BNVHw1VAzBRdkqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvGiN5ZcYhjJZjcmyrcA4kNN0jMB9kqfUOZ1GjDoZNJaI%2FrFQEqSh2xcJousX5vIvdme5XAhqCsNPTFdYsngSQvfrs6D9oy8rlAcxAOGBDzFDBVBAdahYUmmu2LUrtPOE%2BDRNkbC2dvBWDUJm76rqthgSd0riJWd2pZw%2Bh%2BIaPTsuEJiMLkt0yd%2F%2BkKD8YXPo8txmosnJjOQiup9xtb0zKIJwcOOnJ4FYHD70Gz1fOUDW2Qet9GNoDMlJ2ZSc2mN2GtCJE6upNV1NaYehWEOljkJDbXDus%2FF61nRi0hIKZdsG4W70qWJJu%2Bn5VtyAeTZxQ62XNlKS4XznfTJw88rQ%2B3rozQo5Hd7aDSVP%2B%2BptdH%2FuoqohwnCxep1FIQ6EtS9xVLMMSVRb4Vr85tsioj2unjNrrX4g3euMPHFu5JWOGk%2FccKaEw1RNitfN0Ooikz4xn7u5fNlI%2BL7HiwsI4WnECi62%2F7XewJelzOtVmq3QN%2B2uYjxyHt9MEh7ESo5Z1qO9W5QZgoyekBoMmxtn1Iu66PnhZ%2BJIw8t5RGPtubwbbenV%2Fe57pfeefqX2tzqk6w6WGwxlQidmPqdHs2GnccCrXp3Ll1R4oLSpDf0Y9NsWLsSXE61eliYV2RNkK8%2FZR1NXxVRUb%2BpFRLVELqMMbH4cIGOqUBmBkyrUaFP2kmJeu20A1hzQlufIYwJDkUIj5UHJQlS26KAnEk1XdvTwb6hbIgx5KqgM7Uib3eK8gj9A6LMbKV2LKgnicmJRm5yOcGfW%2F1baZ2KKxuMmp8PL%2BGsqcziqxeS2cN0Qe5AQknd6HmpBCHpScoPtOsKCJX18dou623GY4f%2FGldZwPaemhQkGAwJfCbOsZL6kK4hux%2FrIamMCfJHJGqx8q1&X-Amz-Signature=ed40bb53d870da5ca2eb0d242c835391d3dc9951a642dd1333b242eaeb3fa8fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

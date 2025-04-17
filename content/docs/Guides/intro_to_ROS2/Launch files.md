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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466426XA43F%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfI4hnCcxy0OwVyC6pasAYEmc3yDfWAlZoOJel9eH4kAiBQVE6%2FaTRfjiSvkPGDkxXhrpDJuFTcYA3oP9v54mGQWSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnxcmFTSAsKcNsatyKtwDeKs53jb1Glncj9XdRPm73lFharcU7yR994tEesZ5tfxg7ZkmzCPi2sT9gW8BrXBDsJoyXTznD%2FwUMlKOqq3n7srdoAo6ALBPM8MgcSfHt68VO3fKUQGRcA4g2c9nEsOmTKsSYssE7qk1Ay1d7sxMUv5oyPQR2lr0ZxX7A3Oe3yRDHTkAVs0wC1zCXTzzC4tV3LC9r4NjFrIVlF67el7R3t6mjTfTOfGrPM%2FZCPcagzo30kEBa5GBGA68Y7jgQb%2B3RwqeJE42HCbT0QsQ8jwqSzlQSCD%2FPTmcxsuLMwW3BVD52Hggw7bO7jVsMdIgKS7mBBt39ph9a6fbxzeA71Zbws6VgLJZt%2BK0CrXQ8YLyCNG1SssLoGnoUmIepuzTfsaFikpHpLV4Yk99hf8W86Zntuthtx%2BhxWvSW7hzCtBrnQXiQ8Cl6zt13bA%2BZCkOZHP%2Bw1I0Je79pR72HwwOZmtfughIRa0g8ta5mZ2y4PLCCnC2V%2Fp3SdowsPNBxX1pyR9%2Fe7Vz2MJKgNz25I5BUyIJnWwaJaSXlVm6QqYTLvVOJBZEyTODdshiMGalp%2BPWddKWJ3AzrZe0BUNGDcri8koEefW4TC4cDUXe8tz%2FjLCPgwcR%2BF4FxVy2%2BRqY1U0wnMiCwAY6pgExpUyR%2BWjdNG1UbVRPnvP3tcxhM5ewqPAGHBaJN3oz9on%2BSji5vP5YNVsVtCbjlkh22dMmrCG1YaPvDGZTz1BcPYUmB4qGXyW2r3v6eb67%2BUTVhMZVVdnYSzU4%2FFrEIXmuIenan7bMfVKDK92NDuGNMxnADWOsm0Znez5MHjw0%2BUODq7gRqlIQlS4ejYeotbPGaDccLLdzmvqyBSbzQvfRrm53N1%2F5&X-Amz-Signature=4cb2169a879c1d81f0ec4c43f255273ad8ccdf8fbe2045915daf7215d0a94d83&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466426XA43F%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfI4hnCcxy0OwVyC6pasAYEmc3yDfWAlZoOJel9eH4kAiBQVE6%2FaTRfjiSvkPGDkxXhrpDJuFTcYA3oP9v54mGQWSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnxcmFTSAsKcNsatyKtwDeKs53jb1Glncj9XdRPm73lFharcU7yR994tEesZ5tfxg7ZkmzCPi2sT9gW8BrXBDsJoyXTznD%2FwUMlKOqq3n7srdoAo6ALBPM8MgcSfHt68VO3fKUQGRcA4g2c9nEsOmTKsSYssE7qk1Ay1d7sxMUv5oyPQR2lr0ZxX7A3Oe3yRDHTkAVs0wC1zCXTzzC4tV3LC9r4NjFrIVlF67el7R3t6mjTfTOfGrPM%2FZCPcagzo30kEBa5GBGA68Y7jgQb%2B3RwqeJE42HCbT0QsQ8jwqSzlQSCD%2FPTmcxsuLMwW3BVD52Hggw7bO7jVsMdIgKS7mBBt39ph9a6fbxzeA71Zbws6VgLJZt%2BK0CrXQ8YLyCNG1SssLoGnoUmIepuzTfsaFikpHpLV4Yk99hf8W86Zntuthtx%2BhxWvSW7hzCtBrnQXiQ8Cl6zt13bA%2BZCkOZHP%2Bw1I0Je79pR72HwwOZmtfughIRa0g8ta5mZ2y4PLCCnC2V%2Fp3SdowsPNBxX1pyR9%2Fe7Vz2MJKgNz25I5BUyIJnWwaJaSXlVm6QqYTLvVOJBZEyTODdshiMGalp%2BPWddKWJ3AzrZe0BUNGDcri8koEefW4TC4cDUXe8tz%2FjLCPgwcR%2BF4FxVy2%2BRqY1U0wnMiCwAY6pgExpUyR%2BWjdNG1UbVRPnvP3tcxhM5ewqPAGHBaJN3oz9on%2BSji5vP5YNVsVtCbjlkh22dMmrCG1YaPvDGZTz1BcPYUmB4qGXyW2r3v6eb67%2BUTVhMZVVdnYSzU4%2FFrEIXmuIenan7bMfVKDK92NDuGNMxnADWOsm0Znez5MHjw0%2BUODq7gRqlIQlS4ejYeotbPGaDccLLdzmvqyBSbzQvfRrm53N1%2F5&X-Amz-Signature=54f331e22716d95d9a770e809cf7108bbd4b633712b7ff5f7131bfc6f9dae095&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466426XA43F%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfI4hnCcxy0OwVyC6pasAYEmc3yDfWAlZoOJel9eH4kAiBQVE6%2FaTRfjiSvkPGDkxXhrpDJuFTcYA3oP9v54mGQWSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMnxcmFTSAsKcNsatyKtwDeKs53jb1Glncj9XdRPm73lFharcU7yR994tEesZ5tfxg7ZkmzCPi2sT9gW8BrXBDsJoyXTznD%2FwUMlKOqq3n7srdoAo6ALBPM8MgcSfHt68VO3fKUQGRcA4g2c9nEsOmTKsSYssE7qk1Ay1d7sxMUv5oyPQR2lr0ZxX7A3Oe3yRDHTkAVs0wC1zCXTzzC4tV3LC9r4NjFrIVlF67el7R3t6mjTfTOfGrPM%2FZCPcagzo30kEBa5GBGA68Y7jgQb%2B3RwqeJE42HCbT0QsQ8jwqSzlQSCD%2FPTmcxsuLMwW3BVD52Hggw7bO7jVsMdIgKS7mBBt39ph9a6fbxzeA71Zbws6VgLJZt%2BK0CrXQ8YLyCNG1SssLoGnoUmIepuzTfsaFikpHpLV4Yk99hf8W86Zntuthtx%2BhxWvSW7hzCtBrnQXiQ8Cl6zt13bA%2BZCkOZHP%2Bw1I0Je79pR72HwwOZmtfughIRa0g8ta5mZ2y4PLCCnC2V%2Fp3SdowsPNBxX1pyR9%2Fe7Vz2MJKgNz25I5BUyIJnWwaJaSXlVm6QqYTLvVOJBZEyTODdshiMGalp%2BPWddKWJ3AzrZe0BUNGDcri8koEefW4TC4cDUXe8tz%2FjLCPgwcR%2BF4FxVy2%2BRqY1U0wnMiCwAY6pgExpUyR%2BWjdNG1UbVRPnvP3tcxhM5ewqPAGHBaJN3oz9on%2BSji5vP5YNVsVtCbjlkh22dMmrCG1YaPvDGZTz1BcPYUmB4qGXyW2r3v6eb67%2BUTVhMZVVdnYSzU4%2FFrEIXmuIenan7bMfVKDK92NDuGNMxnADWOsm0Znez5MHjw0%2BUODq7gRqlIQlS4ejYeotbPGaDccLLdzmvqyBSbzQvfRrm53N1%2F5&X-Amz-Signature=379ae3a1c2460ea16ab0b4a25da003e12fbc6e65c399fd9c5534efceefadc729&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

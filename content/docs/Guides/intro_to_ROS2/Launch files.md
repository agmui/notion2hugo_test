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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJFHFHY%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEavx9C5cJ57b17z8aSfgEopfl19aR4XsWLP%2FeBKiAagIhAIMjN1C3zs9k9%2FF9Oe4ktvvMNARzfpamE2D7BN8is4pMKv8DCCcQABoMNjM3NDIzMTgzODA1IgxwJqjP0yEt7MfXYB8q3AOp5ZQkpk6ZIrnP8r9FaY%2BstbAwONjsvfqYlo7mFwaldWY8Z29EhHkV%2BCtmpBBjY9FSEjoBkAFbHkUlJimmEz8i%2FgeaXWvt7Aq8uFFvRqmij875MoPJB4LfeP23u6IohAp4zMxOPpy3LVSFzzDjTRZ3YH98wXzCQaMgi6A%2FePXLxRo%2Fa%2FhlfmkKP2L0%2BzcJl%2B39WLWq%2BCvTvEAbCO3Lc6Luk2dkXD6nU%2BLWehbsmScDxzPEJcbP8F12q8Cn%2B7xkTgeX39wwmlcCtfqeQTL%2B6Fmf1jmoh8V5Uga3cmuta1WcE%2BjZDRKuRy0OIwKfwmONaOMEcqknSsBP8ow%2BW2xg9y%2BcIu1fyootuuFs8Aln8Zy5tisvvZwFOm0KwyHCX%2BijgE%2FNZ6L1GBBtr5jUWDbyQ4on2xF%2F5jVbtnMmQzNGzx8OSHal403AS6gv5EZqdadOFPzC6KSXGsMXpkaVjGkXhXwZM%2BLaA29VORtXNgHzoLo8Ewpd5anDQRKT7CAQHXgGVDYZ3%2FUFw3QuNqCSAaii%2BliUR9Rv%2F2SlI9shPuxYoLrsJcvpJTt1ENFs3a8n6rsmtR5yffzFC1Qdvk9ITa9j2FFexSY%2FRm4mfX7OUQF%2FhEFf3Jv5lNXDA31O%2BupryzCCwru9BjqkATHZrUPIY1ZpPEg078zw7peoFlgvr8ulYBKmE1XtaMDvleqgmKv%2B6snFUiLQNQLy4lt9dD3tPfuNyBm2FIA7aAACOMAA%2Bf7YG5XumVzIqJQ2AoZCKtmOtcxKCvHWf7uitfA68GZo5eqayG2GKZFrL34LsylNTDUSnQiNYrJh8r16N3snI0PEwX%2B35C89nhKFLPUPmpqBy8eTSn3vbZs1Dll4mbos&X-Amz-Signature=8e5bcb023b6ebcacd2fb2b1f339cd32f5ac8fab8a202fe525b31e42cef1d2dd3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJFHFHY%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEavx9C5cJ57b17z8aSfgEopfl19aR4XsWLP%2FeBKiAagIhAIMjN1C3zs9k9%2FF9Oe4ktvvMNARzfpamE2D7BN8is4pMKv8DCCcQABoMNjM3NDIzMTgzODA1IgxwJqjP0yEt7MfXYB8q3AOp5ZQkpk6ZIrnP8r9FaY%2BstbAwONjsvfqYlo7mFwaldWY8Z29EhHkV%2BCtmpBBjY9FSEjoBkAFbHkUlJimmEz8i%2FgeaXWvt7Aq8uFFvRqmij875MoPJB4LfeP23u6IohAp4zMxOPpy3LVSFzzDjTRZ3YH98wXzCQaMgi6A%2FePXLxRo%2Fa%2FhlfmkKP2L0%2BzcJl%2B39WLWq%2BCvTvEAbCO3Lc6Luk2dkXD6nU%2BLWehbsmScDxzPEJcbP8F12q8Cn%2B7xkTgeX39wwmlcCtfqeQTL%2B6Fmf1jmoh8V5Uga3cmuta1WcE%2BjZDRKuRy0OIwKfwmONaOMEcqknSsBP8ow%2BW2xg9y%2BcIu1fyootuuFs8Aln8Zy5tisvvZwFOm0KwyHCX%2BijgE%2FNZ6L1GBBtr5jUWDbyQ4on2xF%2F5jVbtnMmQzNGzx8OSHal403AS6gv5EZqdadOFPzC6KSXGsMXpkaVjGkXhXwZM%2BLaA29VORtXNgHzoLo8Ewpd5anDQRKT7CAQHXgGVDYZ3%2FUFw3QuNqCSAaii%2BliUR9Rv%2F2SlI9shPuxYoLrsJcvpJTt1ENFs3a8n6rsmtR5yffzFC1Qdvk9ITa9j2FFexSY%2FRm4mfX7OUQF%2FhEFf3Jv5lNXDA31O%2BupryzCCwru9BjqkATHZrUPIY1ZpPEg078zw7peoFlgvr8ulYBKmE1XtaMDvleqgmKv%2B6snFUiLQNQLy4lt9dD3tPfuNyBm2FIA7aAACOMAA%2Bf7YG5XumVzIqJQ2AoZCKtmOtcxKCvHWf7uitfA68GZo5eqayG2GKZFrL34LsylNTDUSnQiNYrJh8r16N3snI0PEwX%2B35C89nhKFLPUPmpqBy8eTSn3vbZs1Dll4mbos&X-Amz-Signature=3278713adad2fd151f9cfb103574d4b8310d9bc066e0a695129a406e007e7f69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USJFHFHY%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEavx9C5cJ57b17z8aSfgEopfl19aR4XsWLP%2FeBKiAagIhAIMjN1C3zs9k9%2FF9Oe4ktvvMNARzfpamE2D7BN8is4pMKv8DCCcQABoMNjM3NDIzMTgzODA1IgxwJqjP0yEt7MfXYB8q3AOp5ZQkpk6ZIrnP8r9FaY%2BstbAwONjsvfqYlo7mFwaldWY8Z29EhHkV%2BCtmpBBjY9FSEjoBkAFbHkUlJimmEz8i%2FgeaXWvt7Aq8uFFvRqmij875MoPJB4LfeP23u6IohAp4zMxOPpy3LVSFzzDjTRZ3YH98wXzCQaMgi6A%2FePXLxRo%2Fa%2FhlfmkKP2L0%2BzcJl%2B39WLWq%2BCvTvEAbCO3Lc6Luk2dkXD6nU%2BLWehbsmScDxzPEJcbP8F12q8Cn%2B7xkTgeX39wwmlcCtfqeQTL%2B6Fmf1jmoh8V5Uga3cmuta1WcE%2BjZDRKuRy0OIwKfwmONaOMEcqknSsBP8ow%2BW2xg9y%2BcIu1fyootuuFs8Aln8Zy5tisvvZwFOm0KwyHCX%2BijgE%2FNZ6L1GBBtr5jUWDbyQ4on2xF%2F5jVbtnMmQzNGzx8OSHal403AS6gv5EZqdadOFPzC6KSXGsMXpkaVjGkXhXwZM%2BLaA29VORtXNgHzoLo8Ewpd5anDQRKT7CAQHXgGVDYZ3%2FUFw3QuNqCSAaii%2BliUR9Rv%2F2SlI9shPuxYoLrsJcvpJTt1ENFs3a8n6rsmtR5yffzFC1Qdvk9ITa9j2FFexSY%2FRm4mfX7OUQF%2FhEFf3Jv5lNXDA31O%2BupryzCCwru9BjqkATHZrUPIY1ZpPEg078zw7peoFlgvr8ulYBKmE1XtaMDvleqgmKv%2B6snFUiLQNQLy4lt9dD3tPfuNyBm2FIA7aAACOMAA%2Bf7YG5XumVzIqJQ2AoZCKtmOtcxKCvHWf7uitfA68GZo5eqayG2GKZFrL34LsylNTDUSnQiNYrJh8r16N3snI0PEwX%2B35C89nhKFLPUPmpqBy8eTSn3vbZs1Dll4mbos&X-Amz-Signature=39616ae612b48761ecf32738f4d7ad4ffdb2381bfea3dbe691c08b1977faa837&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

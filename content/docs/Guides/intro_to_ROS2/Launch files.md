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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQU56WN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGG6ES8Bb%2Boor5fjfJnSJmEJKdC1kdzLojXvJ77robr7AiAcidbT7lkx5QyzSK71udUJp4layXXWoh%2FBwEXWaHhoECr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMQsTwEEHifv8ezOsSKtwDk8qq%2BClVW7IeseET6hK8z%2BBI7fX%2FUzWNG0itkGJ1Ki0KPZpaGW4JndIO4G2H3cVkYUV2grAhjYFPh2g8AfBd4kaDBVt3a2hXll2GgcNbZUwOvkEmpac3J6wRpJQ6PLBhDMM6l2tYDeOBj5DqlFnPXGH5QFWySI%2F4ztjV8tlGh5eweBFKdBYA7Gbt8FGjADzdRXv8DDSfVvhwgCxQQMMwFkVq7Zz61omckAARrgA7rRVgij4XXUTGX6rYOhTLJcrmHFw7t79Ep%2F%2BglJh0g1KakFG6gBmbjik1jsEL1oAFZRGgvvPMVck%2FAnMEZYaKiGzxzA9Fu5mnVPjQPZkgAnlv8XUic9Iq588zOWwyonLTwtvj8Fmt59Cn%2FPZtM2RjluY%2BJXgGd7seU%2FOhsgHZ7SQAO%2FZjp3NGsM6kt2r1G%2FFf8Z%2BPCU8Vk%2F45xzC91b%2BMUTXkaddXdZ5fwlo5xoLULPrkC2VVkqxMgxCvqFfldldQt2pZ9xLebIm%2FLmTadhUAC6y4xmgfDSHX02Wor1e25CJNRVY0EQwtCl%2FG0Jf4akrTfPAq7uIXvnfum%2F4zye44gJ7YTOIGcuLBnvBelCB8g3ItPI3M4y%2B4f80H%2Bz4Sp6S1YrlHnT6zLe%2B6QwbVWbYwpamHwgY6pgGBD38uT7ZSpBKSMQP%2BihHD8tlKJhlDNX0gGNYxHw7Cy%2BB2GpPoZZ5Mi30FoLViJ1w29DWwmVm35pNXqxN9uBN08OUJUU0%2F9U0ThCQrszRvfInw0nJFEacStRML16pSMzG9iEG8AIaOYVrSOZVsNagAvvdYUw%2FG%2B4OezWJ0JQ4WUMZjb3oMpdsor2D9hVUE2gGMIh%2FwMfPLjf%2B2PfeCrH8s6Rso9m1j&X-Amz-Signature=e9633c2f90f8c34dc11b5a6ec8ccce6a76781a1a5be63a0b5cb9d1e52097f97a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQU56WN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGG6ES8Bb%2Boor5fjfJnSJmEJKdC1kdzLojXvJ77robr7AiAcidbT7lkx5QyzSK71udUJp4layXXWoh%2FBwEXWaHhoECr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMQsTwEEHifv8ezOsSKtwDk8qq%2BClVW7IeseET6hK8z%2BBI7fX%2FUzWNG0itkGJ1Ki0KPZpaGW4JndIO4G2H3cVkYUV2grAhjYFPh2g8AfBd4kaDBVt3a2hXll2GgcNbZUwOvkEmpac3J6wRpJQ6PLBhDMM6l2tYDeOBj5DqlFnPXGH5QFWySI%2F4ztjV8tlGh5eweBFKdBYA7Gbt8FGjADzdRXv8DDSfVvhwgCxQQMMwFkVq7Zz61omckAARrgA7rRVgij4XXUTGX6rYOhTLJcrmHFw7t79Ep%2F%2BglJh0g1KakFG6gBmbjik1jsEL1oAFZRGgvvPMVck%2FAnMEZYaKiGzxzA9Fu5mnVPjQPZkgAnlv8XUic9Iq588zOWwyonLTwtvj8Fmt59Cn%2FPZtM2RjluY%2BJXgGd7seU%2FOhsgHZ7SQAO%2FZjp3NGsM6kt2r1G%2FFf8Z%2BPCU8Vk%2F45xzC91b%2BMUTXkaddXdZ5fwlo5xoLULPrkC2VVkqxMgxCvqFfldldQt2pZ9xLebIm%2FLmTadhUAC6y4xmgfDSHX02Wor1e25CJNRVY0EQwtCl%2FG0Jf4akrTfPAq7uIXvnfum%2F4zye44gJ7YTOIGcuLBnvBelCB8g3ItPI3M4y%2B4f80H%2Bz4Sp6S1YrlHnT6zLe%2B6QwbVWbYwpamHwgY6pgGBD38uT7ZSpBKSMQP%2BihHD8tlKJhlDNX0gGNYxHw7Cy%2BB2GpPoZZ5Mi30FoLViJ1w29DWwmVm35pNXqxN9uBN08OUJUU0%2F9U0ThCQrszRvfInw0nJFEacStRML16pSMzG9iEG8AIaOYVrSOZVsNagAvvdYUw%2FG%2B4OezWJ0JQ4WUMZjb3oMpdsor2D9hVUE2gGMIh%2FwMfPLjf%2B2PfeCrH8s6Rso9m1j&X-Amz-Signature=a1abc9322d29b873495dc4fffaa75eee78f1936a8d1d2cdff00c3e27d8997088&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZQU56WN%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T190122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGG6ES8Bb%2Boor5fjfJnSJmEJKdC1kdzLojXvJ77robr7AiAcidbT7lkx5QyzSK71udUJp4layXXWoh%2FBwEXWaHhoECr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMQsTwEEHifv8ezOsSKtwDk8qq%2BClVW7IeseET6hK8z%2BBI7fX%2FUzWNG0itkGJ1Ki0KPZpaGW4JndIO4G2H3cVkYUV2grAhjYFPh2g8AfBd4kaDBVt3a2hXll2GgcNbZUwOvkEmpac3J6wRpJQ6PLBhDMM6l2tYDeOBj5DqlFnPXGH5QFWySI%2F4ztjV8tlGh5eweBFKdBYA7Gbt8FGjADzdRXv8DDSfVvhwgCxQQMMwFkVq7Zz61omckAARrgA7rRVgij4XXUTGX6rYOhTLJcrmHFw7t79Ep%2F%2BglJh0g1KakFG6gBmbjik1jsEL1oAFZRGgvvPMVck%2FAnMEZYaKiGzxzA9Fu5mnVPjQPZkgAnlv8XUic9Iq588zOWwyonLTwtvj8Fmt59Cn%2FPZtM2RjluY%2BJXgGd7seU%2FOhsgHZ7SQAO%2FZjp3NGsM6kt2r1G%2FFf8Z%2BPCU8Vk%2F45xzC91b%2BMUTXkaddXdZ5fwlo5xoLULPrkC2VVkqxMgxCvqFfldldQt2pZ9xLebIm%2FLmTadhUAC6y4xmgfDSHX02Wor1e25CJNRVY0EQwtCl%2FG0Jf4akrTfPAq7uIXvnfum%2F4zye44gJ7YTOIGcuLBnvBelCB8g3ItPI3M4y%2B4f80H%2Bz4Sp6S1YrlHnT6zLe%2B6QwbVWbYwpamHwgY6pgGBD38uT7ZSpBKSMQP%2BihHD8tlKJhlDNX0gGNYxHw7Cy%2BB2GpPoZZ5Mi30FoLViJ1w29DWwmVm35pNXqxN9uBN08OUJUU0%2F9U0ThCQrszRvfInw0nJFEacStRML16pSMzG9iEG8AIaOYVrSOZVsNagAvvdYUw%2FG%2B4OezWJ0JQ4WUMZjb3oMpdsor2D9hVUE2gGMIh%2FwMfPLjf%2B2PfeCrH8s6Rso9m1j&X-Amz-Signature=ef7a3452db87736ad32a4b9523dd8118edac8761be78c8e049c8edc959cc85e1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

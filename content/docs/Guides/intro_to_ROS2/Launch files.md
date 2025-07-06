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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFG6U3QE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIH4WlbpAxBoRWph9FPiQNBfrgb4supcSiRoMHQBN621hAiAzpkvMaZ2hBIbIwLA3WieAwrFa8VgHeFvQMRewW4AKfCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMtxrQMIskkTyFeDaxKtwDKS7cWaI2cbo6J2aU0tGAukC6FcnBeEAQNsApa%2B7t116aHMQxSHYlVPCeB6vXn%2BMKrtVeh3hzQKzYwXbHaIwBR45bQAW7R2Tu2maUu%2BnyLtmK2rXrX7UcMIU%2Flt4FMSfKFX3OcHWbqNDBaTPc5TSGSBx%2F1QjQEPdd2SPyhVQuRRVOJxossm4bTfitHVhZsCBfVu9PLIuxzssmNDspgyqcP1SftMHQLFAk3F8t8AJMDKI8Hxd195J2j0n1P%2F%2FgB8zW9vHSaUkMFBaZaBvVpWG52m4uowQc5DXRjv9Vzl6ASeaXtrUOQfMQxswXfpHOZIRKlD2xqP0RDrgoRq%2BN%2FFAeENnjKydPvlwXVC1iCvgYRyPKIOVdJUwVkYKJTray5QAzf%2Fo1YpQLXRChMTOrapiRcUTOwAZSjEm3P7rZagCShA2uEI2OJo7nE5UO%2BOdvL5vqktueXuF3MKIASrGK3vXe0vyBTO%2FJvPLFhsjoimt0soHDmqtt2gs8PihL9V8sMzofve1v4FsfQbe%2FQNWXx9aUfwBwHP6j5GngaJT7cuIvBCM1z2%2F0IH0BZDeal6FOIe4mrsynubaXYm130aj2Gxfa%2Bu7LyBaq98CjEM%2BemszVWHle27GJIWa0YFZ6s48wvI6nwwY6pgHJPBEUSNFRJbIh7vqOwyjL0KcZe4mlylz59FJyRPPoFxa94cJdyfgHJwMKx2jeAKMR9IOSzkrnSCFhnOO0zcqpcdaqvaD4OZZQadz%2BX1m2MNufrsFbh2O%2FQExuPtjnaZ3hLc%2BXYwSnpEo%2BtWMOW7cJqZsKN7%2FiwgwUsjZ5esMJDGTO%2B2sTLnERk2sj4Vw1elG1QRSFYft8pojKVL%2BYy0aEop82Rto4&X-Amz-Signature=ea1574061666eb20ecfe69cc9c3ce2b4de8dc3d7b3d11b2d81b9d1b7450658fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFG6U3QE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIH4WlbpAxBoRWph9FPiQNBfrgb4supcSiRoMHQBN621hAiAzpkvMaZ2hBIbIwLA3WieAwrFa8VgHeFvQMRewW4AKfCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMtxrQMIskkTyFeDaxKtwDKS7cWaI2cbo6J2aU0tGAukC6FcnBeEAQNsApa%2B7t116aHMQxSHYlVPCeB6vXn%2BMKrtVeh3hzQKzYwXbHaIwBR45bQAW7R2Tu2maUu%2BnyLtmK2rXrX7UcMIU%2Flt4FMSfKFX3OcHWbqNDBaTPc5TSGSBx%2F1QjQEPdd2SPyhVQuRRVOJxossm4bTfitHVhZsCBfVu9PLIuxzssmNDspgyqcP1SftMHQLFAk3F8t8AJMDKI8Hxd195J2j0n1P%2F%2FgB8zW9vHSaUkMFBaZaBvVpWG52m4uowQc5DXRjv9Vzl6ASeaXtrUOQfMQxswXfpHOZIRKlD2xqP0RDrgoRq%2BN%2FFAeENnjKydPvlwXVC1iCvgYRyPKIOVdJUwVkYKJTray5QAzf%2Fo1YpQLXRChMTOrapiRcUTOwAZSjEm3P7rZagCShA2uEI2OJo7nE5UO%2BOdvL5vqktueXuF3MKIASrGK3vXe0vyBTO%2FJvPLFhsjoimt0soHDmqtt2gs8PihL9V8sMzofve1v4FsfQbe%2FQNWXx9aUfwBwHP6j5GngaJT7cuIvBCM1z2%2F0IH0BZDeal6FOIe4mrsynubaXYm130aj2Gxfa%2Bu7LyBaq98CjEM%2BemszVWHle27GJIWa0YFZ6s48wvI6nwwY6pgHJPBEUSNFRJbIh7vqOwyjL0KcZe4mlylz59FJyRPPoFxa94cJdyfgHJwMKx2jeAKMR9IOSzkrnSCFhnOO0zcqpcdaqvaD4OZZQadz%2BX1m2MNufrsFbh2O%2FQExuPtjnaZ3hLc%2BXYwSnpEo%2BtWMOW7cJqZsKN7%2FiwgwUsjZ5esMJDGTO%2B2sTLnERk2sj4Vw1elG1QRSFYft8pojKVL%2BYy0aEop82Rto4&X-Amz-Signature=e2cf7f08c683babceb88f249614ef60ca9f03566637810b25a8cdc16eae8122c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFG6U3QE%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIH4WlbpAxBoRWph9FPiQNBfrgb4supcSiRoMHQBN621hAiAzpkvMaZ2hBIbIwLA3WieAwrFa8VgHeFvQMRewW4AKfCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIMtxrQMIskkTyFeDaxKtwDKS7cWaI2cbo6J2aU0tGAukC6FcnBeEAQNsApa%2B7t116aHMQxSHYlVPCeB6vXn%2BMKrtVeh3hzQKzYwXbHaIwBR45bQAW7R2Tu2maUu%2BnyLtmK2rXrX7UcMIU%2Flt4FMSfKFX3OcHWbqNDBaTPc5TSGSBx%2F1QjQEPdd2SPyhVQuRRVOJxossm4bTfitHVhZsCBfVu9PLIuxzssmNDspgyqcP1SftMHQLFAk3F8t8AJMDKI8Hxd195J2j0n1P%2F%2FgB8zW9vHSaUkMFBaZaBvVpWG52m4uowQc5DXRjv9Vzl6ASeaXtrUOQfMQxswXfpHOZIRKlD2xqP0RDrgoRq%2BN%2FFAeENnjKydPvlwXVC1iCvgYRyPKIOVdJUwVkYKJTray5QAzf%2Fo1YpQLXRChMTOrapiRcUTOwAZSjEm3P7rZagCShA2uEI2OJo7nE5UO%2BOdvL5vqktueXuF3MKIASrGK3vXe0vyBTO%2FJvPLFhsjoimt0soHDmqtt2gs8PihL9V8sMzofve1v4FsfQbe%2FQNWXx9aUfwBwHP6j5GngaJT7cuIvBCM1z2%2F0IH0BZDeal6FOIe4mrsynubaXYm130aj2Gxfa%2Bu7LyBaq98CjEM%2BemszVWHle27GJIWa0YFZ6s48wvI6nwwY6pgHJPBEUSNFRJbIh7vqOwyjL0KcZe4mlylz59FJyRPPoFxa94cJdyfgHJwMKx2jeAKMR9IOSzkrnSCFhnOO0zcqpcdaqvaD4OZZQadz%2BX1m2MNufrsFbh2O%2FQExuPtjnaZ3hLc%2BXYwSnpEo%2BtWMOW7cJqZsKN7%2FiwgwUsjZ5esMJDGTO%2B2sTLnERk2sj4Vw1elG1QRSFYft8pojKVL%2BYy0aEop82Rto4&X-Amz-Signature=462d2f14afc5e09031aeac20293ec65036aeebd08581ceb6a9ce69d99ff47c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

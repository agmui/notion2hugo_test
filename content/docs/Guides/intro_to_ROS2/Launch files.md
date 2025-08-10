---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VWZHIZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKGQT9KLCPWS5ttUSdeFlrJxeFYqiUqTA0WbbTGrk89AiBr%2BANlCQsru594q3BgBnNEVMvRYIQM9%2B%2BMd8fYalLzMSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHIQB17bj0GsZchkKtwDGdRR2gJFJOK%2BnbUFsvG87oQmijfgQFnKvrOn3Yo955mcgI0dUTTHENl2NZpgsEi3hFYnAOhKsk6Szf4Lta1rAOqXlRhvEMIR%2FkK3MccaCjXscXDQgDpwQEjvm5ZPB5H0RmQQ5pnm%2Ffq7P6BYIlyehtcNtuuGGMmGFZdK0ldVAKaNYaM%2BYf3W0Dt%2BRYiRx84F6OsjZDp9GgLFw3LV0yBTqfmWdK%2FkMWB%2BHukXv%2BnyxNd1IxFQlfPpLd72sDlnLVEuOazGtMp5vDskZHwBhn7odzdFKMi%2Blj0yf1ImaZmJi1FLQl8Py3LvKKtB5f6f1VBrr8sPYEs8bOffzNAp5evBqCdYdegHHo45tkqwX%2FVRA5VziDi4xsC4jBKC6JS25OhtsbWK4nk%2B2re4oueS1zIQL0c4f%2FIQiRpcWl9D9Ryqe1YPVj0ULOlasYj8Ev3%2B0s%2Fn%2FbonAoYImuqHvJ6WkO6pzQTHY5fF%2BgiGoJEOV2a0bhimwwzyaiOBZ0V6146qUxDBo8efBB4iVkFyuogrrwzq6Lj95y3pJ0Z3tmomHnB3wjE6iVBbCQ0nkUjOs9RPC%2FnGb53izUzfw4UiIByXj5iZ5KrX4leiAD4q2bE46SDHeh38zVdqECFEQqijSU8wxb%2FixAY6pgHcFukkObbR141IyECO0RGNFaNZ%2BRAOSTMt4JHwTB3orPb%2BM72Fqn%2BLMm4xymbz8ScM6upFnMv9xylG%2Bel8%2BVNPSLFQknBSso5jB3B7t9taTUW%2Fvrvc%2B1Ml4bK2%2FqOYqu9E2yysjGskxlfLX55M72QBMNw%2BHAC07k2GwWcOnAnHptbu5IFVK2gUWWca6nXaecTpL%2F4q4xwtIc1V1W2enIbbP3a03H3X&X-Amz-Signature=3da61f29ff9a90eeeecc3f45d545ab4dc1be3fbfdb5b7e599ad5f8516a1891ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VWZHIZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKGQT9KLCPWS5ttUSdeFlrJxeFYqiUqTA0WbbTGrk89AiBr%2BANlCQsru594q3BgBnNEVMvRYIQM9%2B%2BMd8fYalLzMSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHIQB17bj0GsZchkKtwDGdRR2gJFJOK%2BnbUFsvG87oQmijfgQFnKvrOn3Yo955mcgI0dUTTHENl2NZpgsEi3hFYnAOhKsk6Szf4Lta1rAOqXlRhvEMIR%2FkK3MccaCjXscXDQgDpwQEjvm5ZPB5H0RmQQ5pnm%2Ffq7P6BYIlyehtcNtuuGGMmGFZdK0ldVAKaNYaM%2BYf3W0Dt%2BRYiRx84F6OsjZDp9GgLFw3LV0yBTqfmWdK%2FkMWB%2BHukXv%2BnyxNd1IxFQlfPpLd72sDlnLVEuOazGtMp5vDskZHwBhn7odzdFKMi%2Blj0yf1ImaZmJi1FLQl8Py3LvKKtB5f6f1VBrr8sPYEs8bOffzNAp5evBqCdYdegHHo45tkqwX%2FVRA5VziDi4xsC4jBKC6JS25OhtsbWK4nk%2B2re4oueS1zIQL0c4f%2FIQiRpcWl9D9Ryqe1YPVj0ULOlasYj8Ev3%2B0s%2Fn%2FbonAoYImuqHvJ6WkO6pzQTHY5fF%2BgiGoJEOV2a0bhimwwzyaiOBZ0V6146qUxDBo8efBB4iVkFyuogrrwzq6Lj95y3pJ0Z3tmomHnB3wjE6iVBbCQ0nkUjOs9RPC%2FnGb53izUzfw4UiIByXj5iZ5KrX4leiAD4q2bE46SDHeh38zVdqECFEQqijSU8wxb%2FixAY6pgHcFukkObbR141IyECO0RGNFaNZ%2BRAOSTMt4JHwTB3orPb%2BM72Fqn%2BLMm4xymbz8ScM6upFnMv9xylG%2Bel8%2BVNPSLFQknBSso5jB3B7t9taTUW%2Fvrvc%2B1Ml4bK2%2FqOYqu9E2yysjGskxlfLX55M72QBMNw%2BHAC07k2GwWcOnAnHptbu5IFVK2gUWWca6nXaecTpL%2F4q4xwtIc1V1W2enIbbP3a03H3X&X-Amz-Signature=af5b5664b1685a4edc0296de730ac29953b7851dc2b420a8d30e82cb1053be53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VWZHIZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKGQT9KLCPWS5ttUSdeFlrJxeFYqiUqTA0WbbTGrk89AiBr%2BANlCQsru594q3BgBnNEVMvRYIQM9%2B%2BMd8fYalLzMSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIHIQB17bj0GsZchkKtwDGdRR2gJFJOK%2BnbUFsvG87oQmijfgQFnKvrOn3Yo955mcgI0dUTTHENl2NZpgsEi3hFYnAOhKsk6Szf4Lta1rAOqXlRhvEMIR%2FkK3MccaCjXscXDQgDpwQEjvm5ZPB5H0RmQQ5pnm%2Ffq7P6BYIlyehtcNtuuGGMmGFZdK0ldVAKaNYaM%2BYf3W0Dt%2BRYiRx84F6OsjZDp9GgLFw3LV0yBTqfmWdK%2FkMWB%2BHukXv%2BnyxNd1IxFQlfPpLd72sDlnLVEuOazGtMp5vDskZHwBhn7odzdFKMi%2Blj0yf1ImaZmJi1FLQl8Py3LvKKtB5f6f1VBrr8sPYEs8bOffzNAp5evBqCdYdegHHo45tkqwX%2FVRA5VziDi4xsC4jBKC6JS25OhtsbWK4nk%2B2re4oueS1zIQL0c4f%2FIQiRpcWl9D9Ryqe1YPVj0ULOlasYj8Ev3%2B0s%2Fn%2FbonAoYImuqHvJ6WkO6pzQTHY5fF%2BgiGoJEOV2a0bhimwwzyaiOBZ0V6146qUxDBo8efBB4iVkFyuogrrwzq6Lj95y3pJ0Z3tmomHnB3wjE6iVBbCQ0nkUjOs9RPC%2FnGb53izUzfw4UiIByXj5iZ5KrX4leiAD4q2bE46SDHeh38zVdqECFEQqijSU8wxb%2FixAY6pgHcFukkObbR141IyECO0RGNFaNZ%2BRAOSTMt4JHwTB3orPb%2BM72Fqn%2BLMm4xymbz8ScM6upFnMv9xylG%2Bel8%2BVNPSLFQknBSso5jB3B7t9taTUW%2Fvrvc%2B1Ml4bK2%2FqOYqu9E2yysjGskxlfLX55M72QBMNw%2BHAC07k2GwWcOnAnHptbu5IFVK2gUWWca6nXaecTpL%2F4q4xwtIc1V1W2enIbbP3a03H3X&X-Amz-Signature=104ab53736092434d42c5e4c454ad2ed0708c2c4bd97927ab5dce98e4469ab19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

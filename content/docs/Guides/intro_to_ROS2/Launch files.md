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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPFNMZVQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDiBgNKIqUDP5HvtuN6Qy2hKr%2B13W2tUHgsq%2B5O3L%2BxIwIgY3dQnu3vRkCUVnJ%2BBP6aWbj%2BHniZtokgzPQQV2b4%2BHUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDInQrgHlAB9O%2F3Y03CrcA3DlI5UwH1dTH1AvajlaRbMDKaKsTpqSA7W7tEZfj6zdGh%2BJ96Zn5uStvJym9IzxbILCBeZuznp8lyW5tWbTghsGSOHYqAFdlBlt77%2FaFNMPujaRq%2F7fFC%2FHdFqTElhXZp67aDNrA5nzDnTsKdOO%2FT%2B1aZnNOVE7ncVC%2F8yljXVMHuNxPwYHaTGGb8vemKlhVvbSn%2B1pclHVm26yraBizj7ZaiQ8YqNYDjSQgDGJmAco8zXXrjfC8zul174Tb2w2X1Txv9Imp%2B%2BaXJh4aXwS4S7x5unkDV2PUDGkiitNZ3mLs4wIFhYeVUN0EFOmzMJ0jA%2FvOKeJn2ibIZbo0MKuCVB%2BOkvqERgXL7zrA3Xkt1MWOZfM2q3f6n2%2Fy42BjwG%2BkNrwt9QjJkwbTBAQRfUGFhdZeP2lcq8QxCldoV41Ozin3Ta78UzYjR%2FQbKm9cvUHXqY6Ydwyuag%2F6A03GvxsfFQtvEBudag3pOHsCbKChIpXLaK4GKYFfj7PUVZ8mkq5f%2BBz%2BOfcYH%2FzBJ5pVzjFT1uM%2ByKNARvQ5aSOLsQYaiEy%2Bq%2B40k3xPieAiYy6%2Bqji%2FsIqnpvzmzsCoc2YQE8aS3K2CgCyt%2BYfJLKV3qfOlTtG9dCLpWrOF%2FGOD7ZbMProqMAGOqUBaXH78sC7e2BArUH2C83iwn83hn%2BCtHYfogyMYNHbc8JvwL1ZWx%2Fka9Nc%2Bfe6bEuqTFRSaVqyQEs0jYvjEWWe2LU6TsAsPThG%2FNOnJXaSvSvGd6cX6Jfk7ciW9eJgm3ayN7S7TuYZDL9DxB2tvumDDq4E09mB3KI%2F8KAUFQpyCFekV%2F2od28NHl7lZAGsmWL49BAzDblTVcqJepDMn%2B6vlUzwhDUi&X-Amz-Signature=d7f669338439f26d2ddb705e1a38804d1c0b1f692cbe3caf1c13bf1bc568f656&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPFNMZVQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDiBgNKIqUDP5HvtuN6Qy2hKr%2B13W2tUHgsq%2B5O3L%2BxIwIgY3dQnu3vRkCUVnJ%2BBP6aWbj%2BHniZtokgzPQQV2b4%2BHUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDInQrgHlAB9O%2F3Y03CrcA3DlI5UwH1dTH1AvajlaRbMDKaKsTpqSA7W7tEZfj6zdGh%2BJ96Zn5uStvJym9IzxbILCBeZuznp8lyW5tWbTghsGSOHYqAFdlBlt77%2FaFNMPujaRq%2F7fFC%2FHdFqTElhXZp67aDNrA5nzDnTsKdOO%2FT%2B1aZnNOVE7ncVC%2F8yljXVMHuNxPwYHaTGGb8vemKlhVvbSn%2B1pclHVm26yraBizj7ZaiQ8YqNYDjSQgDGJmAco8zXXrjfC8zul174Tb2w2X1Txv9Imp%2B%2BaXJh4aXwS4S7x5unkDV2PUDGkiitNZ3mLs4wIFhYeVUN0EFOmzMJ0jA%2FvOKeJn2ibIZbo0MKuCVB%2BOkvqERgXL7zrA3Xkt1MWOZfM2q3f6n2%2Fy42BjwG%2BkNrwt9QjJkwbTBAQRfUGFhdZeP2lcq8QxCldoV41Ozin3Ta78UzYjR%2FQbKm9cvUHXqY6Ydwyuag%2F6A03GvxsfFQtvEBudag3pOHsCbKChIpXLaK4GKYFfj7PUVZ8mkq5f%2BBz%2BOfcYH%2FzBJ5pVzjFT1uM%2ByKNARvQ5aSOLsQYaiEy%2Bq%2B40k3xPieAiYy6%2Bqji%2FsIqnpvzmzsCoc2YQE8aS3K2CgCyt%2BYfJLKV3qfOlTtG9dCLpWrOF%2FGOD7ZbMProqMAGOqUBaXH78sC7e2BArUH2C83iwn83hn%2BCtHYfogyMYNHbc8JvwL1ZWx%2Fka9Nc%2Bfe6bEuqTFRSaVqyQEs0jYvjEWWe2LU6TsAsPThG%2FNOnJXaSvSvGd6cX6Jfk7ciW9eJgm3ayN7S7TuYZDL9DxB2tvumDDq4E09mB3KI%2F8KAUFQpyCFekV%2F2od28NHl7lZAGsmWL49BAzDblTVcqJepDMn%2B6vlUzwhDUi&X-Amz-Signature=5cc61989b22807357ef55133e04a8018fd9774ca1bd17a95a4ef817b85df493b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPFNMZVQ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T132150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDiBgNKIqUDP5HvtuN6Qy2hKr%2B13W2tUHgsq%2B5O3L%2BxIwIgY3dQnu3vRkCUVnJ%2BBP6aWbj%2BHniZtokgzPQQV2b4%2BHUq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDInQrgHlAB9O%2F3Y03CrcA3DlI5UwH1dTH1AvajlaRbMDKaKsTpqSA7W7tEZfj6zdGh%2BJ96Zn5uStvJym9IzxbILCBeZuznp8lyW5tWbTghsGSOHYqAFdlBlt77%2FaFNMPujaRq%2F7fFC%2FHdFqTElhXZp67aDNrA5nzDnTsKdOO%2FT%2B1aZnNOVE7ncVC%2F8yljXVMHuNxPwYHaTGGb8vemKlhVvbSn%2B1pclHVm26yraBizj7ZaiQ8YqNYDjSQgDGJmAco8zXXrjfC8zul174Tb2w2X1Txv9Imp%2B%2BaXJh4aXwS4S7x5unkDV2PUDGkiitNZ3mLs4wIFhYeVUN0EFOmzMJ0jA%2FvOKeJn2ibIZbo0MKuCVB%2BOkvqERgXL7zrA3Xkt1MWOZfM2q3f6n2%2Fy42BjwG%2BkNrwt9QjJkwbTBAQRfUGFhdZeP2lcq8QxCldoV41Ozin3Ta78UzYjR%2FQbKm9cvUHXqY6Ydwyuag%2F6A03GvxsfFQtvEBudag3pOHsCbKChIpXLaK4GKYFfj7PUVZ8mkq5f%2BBz%2BOfcYH%2FzBJ5pVzjFT1uM%2ByKNARvQ5aSOLsQYaiEy%2Bq%2B40k3xPieAiYy6%2Bqji%2FsIqnpvzmzsCoc2YQE8aS3K2CgCyt%2BYfJLKV3qfOlTtG9dCLpWrOF%2FGOD7ZbMProqMAGOqUBaXH78sC7e2BArUH2C83iwn83hn%2BCtHYfogyMYNHbc8JvwL1ZWx%2Fka9Nc%2Bfe6bEuqTFRSaVqyQEs0jYvjEWWe2LU6TsAsPThG%2FNOnJXaSvSvGd6cX6Jfk7ciW9eJgm3ayN7S7TuYZDL9DxB2tvumDDq4E09mB3KI%2F8KAUFQpyCFekV%2F2od28NHl7lZAGsmWL49BAzDblTVcqJepDMn%2B6vlUzwhDUi&X-Amz-Signature=09e87047fd46d86c1b4b25e926b7a3f07d06e8e5580267cdd927dcac9014afa1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

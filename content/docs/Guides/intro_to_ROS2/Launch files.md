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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF5R454%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7CsNOnt9gSfiNYDwJLTvmnoE33XLcrKsPq0qZlVsSDAiEAj7oo1br2wH%2B0qGKCaB94CAgTrcM%2B3nszYBNXIp8iNTsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCzEXtLn4QcMUSrqbircA6MjBiO7Iphrds8Wzq%2FV4OfCGLBKpWjlmYGO8ff1AG092rgwddC55MW175s3ekTq9HwedmLL2RacPfQOxg%2BitroW5UxlLMwfC1SnSOTt2o%2FAlXVUtekSa3j%2FMe95AibPfbO4R4lsf7G%2FXhR2Pp8rAcCdYelCeTimCqFq7w25rbdEYiTa4EgczWPm5Updb4zyNiNRyrUDIt%2Bggz%2Bh7%2BS8b%2FjC19upUJNA%2BSFV%2FtCHCn8F%2FQUS4DOYhbnftth%2BH4N0bAsqwUeVfn%2BzI3Uklq8euXJb8Jk9H7HADV3fXT0iGi5aaNkybFCC7DUknaWTY%2B9oG9jWzN3N8n4fpn0ORDopKcUEDrK3uM6kEwmZz5psM2fjjpWkYzAbyVOckS3T91OD8zje8T%2BtTZp3dvNFNF%2B1AgDFHtvZXC05FjDIc9OuCyJ3neQN9FWtDnxez%2F6cZN4TeYQuxes3W1q600CoE2PT7Wy%2BOuHA6goLeZScreI2pZPVeIQtTwyH%2BH7%2FL9hkOsxFEVDXnl%2FEy6Ij511NQG4T4UYgoJQ8JTn2c7NjS6IlVKpUfD4arNwZZIryTH%2Bkc%2Fzjj6hjhJzEW3UOsfrhYruQe3nUDjo7ihJh6f5ZnD3b0NbOuRcGZwqnfonoGMZMMNLvmsEGOqUB0EwYuBJWi6cUmMR7wDvAIZHJlnTrfVOiXLK2X%2FOhFCLphNcTImOTFKLGNgwer2JaIqNJdGcTLzPpWsxufx0NUNLxC82OlI%2BUhGNBkIuowpKrvE6fs2SqzdMx5EeXXNaNZjPYMX8ngyJ7BDPdDHrdqKg%2FWb7L%2FCt4ja%2F5bimpJXMZdDSIgFroj06FljKr9VR23EV2U0KodQ%2B1pV2RJ5d8RXlIO07m&X-Amz-Signature=7e40224bd3cff31d9225b0aa7e1c5052b74503b84150e6214cba6b07cce7b5a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF5R454%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7CsNOnt9gSfiNYDwJLTvmnoE33XLcrKsPq0qZlVsSDAiEAj7oo1br2wH%2B0qGKCaB94CAgTrcM%2B3nszYBNXIp8iNTsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCzEXtLn4QcMUSrqbircA6MjBiO7Iphrds8Wzq%2FV4OfCGLBKpWjlmYGO8ff1AG092rgwddC55MW175s3ekTq9HwedmLL2RacPfQOxg%2BitroW5UxlLMwfC1SnSOTt2o%2FAlXVUtekSa3j%2FMe95AibPfbO4R4lsf7G%2FXhR2Pp8rAcCdYelCeTimCqFq7w25rbdEYiTa4EgczWPm5Updb4zyNiNRyrUDIt%2Bggz%2Bh7%2BS8b%2FjC19upUJNA%2BSFV%2FtCHCn8F%2FQUS4DOYhbnftth%2BH4N0bAsqwUeVfn%2BzI3Uklq8euXJb8Jk9H7HADV3fXT0iGi5aaNkybFCC7DUknaWTY%2B9oG9jWzN3N8n4fpn0ORDopKcUEDrK3uM6kEwmZz5psM2fjjpWkYzAbyVOckS3T91OD8zje8T%2BtTZp3dvNFNF%2B1AgDFHtvZXC05FjDIc9OuCyJ3neQN9FWtDnxez%2F6cZN4TeYQuxes3W1q600CoE2PT7Wy%2BOuHA6goLeZScreI2pZPVeIQtTwyH%2BH7%2FL9hkOsxFEVDXnl%2FEy6Ij511NQG4T4UYgoJQ8JTn2c7NjS6IlVKpUfD4arNwZZIryTH%2Bkc%2Fzjj6hjhJzEW3UOsfrhYruQe3nUDjo7ihJh6f5ZnD3b0NbOuRcGZwqnfonoGMZMMNLvmsEGOqUB0EwYuBJWi6cUmMR7wDvAIZHJlnTrfVOiXLK2X%2FOhFCLphNcTImOTFKLGNgwer2JaIqNJdGcTLzPpWsxufx0NUNLxC82OlI%2BUhGNBkIuowpKrvE6fs2SqzdMx5EeXXNaNZjPYMX8ngyJ7BDPdDHrdqKg%2FWb7L%2FCt4ja%2F5bimpJXMZdDSIgFroj06FljKr9VR23EV2U0KodQ%2B1pV2RJ5d8RXlIO07m&X-Amz-Signature=2d6ba8190fc13382ae7ae98e5430796e5f28c0dd76fcc2a06f4c7bfa34f979f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKF5R454%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7CsNOnt9gSfiNYDwJLTvmnoE33XLcrKsPq0qZlVsSDAiEAj7oo1br2wH%2B0qGKCaB94CAgTrcM%2B3nszYBNXIp8iNTsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCzEXtLn4QcMUSrqbircA6MjBiO7Iphrds8Wzq%2FV4OfCGLBKpWjlmYGO8ff1AG092rgwddC55MW175s3ekTq9HwedmLL2RacPfQOxg%2BitroW5UxlLMwfC1SnSOTt2o%2FAlXVUtekSa3j%2FMe95AibPfbO4R4lsf7G%2FXhR2Pp8rAcCdYelCeTimCqFq7w25rbdEYiTa4EgczWPm5Updb4zyNiNRyrUDIt%2Bggz%2Bh7%2BS8b%2FjC19upUJNA%2BSFV%2FtCHCn8F%2FQUS4DOYhbnftth%2BH4N0bAsqwUeVfn%2BzI3Uklq8euXJb8Jk9H7HADV3fXT0iGi5aaNkybFCC7DUknaWTY%2B9oG9jWzN3N8n4fpn0ORDopKcUEDrK3uM6kEwmZz5psM2fjjpWkYzAbyVOckS3T91OD8zje8T%2BtTZp3dvNFNF%2B1AgDFHtvZXC05FjDIc9OuCyJ3neQN9FWtDnxez%2F6cZN4TeYQuxes3W1q600CoE2PT7Wy%2BOuHA6goLeZScreI2pZPVeIQtTwyH%2BH7%2FL9hkOsxFEVDXnl%2FEy6Ij511NQG4T4UYgoJQ8JTn2c7NjS6IlVKpUfD4arNwZZIryTH%2Bkc%2Fzjj6hjhJzEW3UOsfrhYruQe3nUDjo7ihJh6f5ZnD3b0NbOuRcGZwqnfonoGMZMMNLvmsEGOqUB0EwYuBJWi6cUmMR7wDvAIZHJlnTrfVOiXLK2X%2FOhFCLphNcTImOTFKLGNgwer2JaIqNJdGcTLzPpWsxufx0NUNLxC82OlI%2BUhGNBkIuowpKrvE6fs2SqzdMx5EeXXNaNZjPYMX8ngyJ7BDPdDHrdqKg%2FWb7L%2FCt4ja%2F5bimpJXMZdDSIgFroj06FljKr9VR23EV2U0KodQ%2B1pV2RJ5d8RXlIO07m&X-Amz-Signature=0d2875ff3a4984466f24a802f35d553b6ade5a924146cec194a079e3e3651498&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

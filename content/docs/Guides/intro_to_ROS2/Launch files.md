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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3ZGE2Y%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCW8a8OUNwBpRZpX9ft9KzTJU6v1FKKDqrVxVtw9NmPqwIgQ8Kje1fOQ%2BLdAYcuWgGbabcWlOZjwCJGNKiTa47ZmnEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOf7TMj%2FKQOdG7sE1CrcA%2Fgo58nNFiJj%2Fg2TCFaBRoQdWAr6d2sI31oycF2pONxi4gFw8y9QEwcjCY4xY8ysXDXSDulKsn79j10nmJmIEl9JZqfqtg8%2FjFGCy8s3xRShoC%2FatMhd5eX7Ny3NwSU%2Fe%2B3ibiRFEeK7S8NJjHriRdcxKQUX4m0NbTSsxrUlA0mVa40Bod4MdMcSd1apJr19PydnHo0GCiMIP0UGe%2FEQnNrmsAPPOzDj%2FGrUnLGmK9QzbXAq0MfgJcfxlL2MoCxo7Z1JgVQ76FkYPx4XUmGCvs6ayrHosulQZY1m2rGG2RigkUP3uE%2B6L3iwQK1cscrE52E1FQaWj1ORyTm6L6jEwhVV%2F4p9G1%2FP0MV3163720xaILUsXaUkXrOTBWqZZ7HhFWN%2FfPfjSZ5Cqsu4TMb8%2BB%2BQkCpjNLn7qeRbVbT3a%2BJ9PjQeoYs254xXj0cYXA4UhLfXCZhZ05D%2BWFD2cbgX7OFDi8JpIb8YUgizEqPqJwToENZMTcKBKscF8PwFh1ZmPnYZ5GFh%2B4uQvWQtzC5y7PJSw5sc9EslPLu5FanH2OavQkPkUU2R7otApgrOeqQl2AgcuPeJoCQqLhee6cfvS6XwuT8HdstuGzu01f%2B8%2Bgg53w28JE3EUa0jcBJqMN6TtcIGOqUByxpWQ5RnKPHQWodyOxA32cUBzE6jjGxNGYEGn8OL3Q6Jo9TFRwChLwX6RNW5dBIptS1DKwsI%2FsWW43Jaqe3Ze0THGHEk%2F5mCpXPx4uCee1hWYu%2FD8mck4IiiRzOQRtHPvaoT4TU4jgsTn%2FsyuVultw4NC3%2BGcKoFb3LxRPHZ94wJ%2FUorHwdiJGBJT9adhz3rS%2B0UDouaNHvmpydx0%2BAih8FBda30&X-Amz-Signature=74447df0217fac6fe9c38f43be10ee4277cd8c565c2bf0b2dbeee45465bb7236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3ZGE2Y%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCW8a8OUNwBpRZpX9ft9KzTJU6v1FKKDqrVxVtw9NmPqwIgQ8Kje1fOQ%2BLdAYcuWgGbabcWlOZjwCJGNKiTa47ZmnEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOf7TMj%2FKQOdG7sE1CrcA%2Fgo58nNFiJj%2Fg2TCFaBRoQdWAr6d2sI31oycF2pONxi4gFw8y9QEwcjCY4xY8ysXDXSDulKsn79j10nmJmIEl9JZqfqtg8%2FjFGCy8s3xRShoC%2FatMhd5eX7Ny3NwSU%2Fe%2B3ibiRFEeK7S8NJjHriRdcxKQUX4m0NbTSsxrUlA0mVa40Bod4MdMcSd1apJr19PydnHo0GCiMIP0UGe%2FEQnNrmsAPPOzDj%2FGrUnLGmK9QzbXAq0MfgJcfxlL2MoCxo7Z1JgVQ76FkYPx4XUmGCvs6ayrHosulQZY1m2rGG2RigkUP3uE%2B6L3iwQK1cscrE52E1FQaWj1ORyTm6L6jEwhVV%2F4p9G1%2FP0MV3163720xaILUsXaUkXrOTBWqZZ7HhFWN%2FfPfjSZ5Cqsu4TMb8%2BB%2BQkCpjNLn7qeRbVbT3a%2BJ9PjQeoYs254xXj0cYXA4UhLfXCZhZ05D%2BWFD2cbgX7OFDi8JpIb8YUgizEqPqJwToENZMTcKBKscF8PwFh1ZmPnYZ5GFh%2B4uQvWQtzC5y7PJSw5sc9EslPLu5FanH2OavQkPkUU2R7otApgrOeqQl2AgcuPeJoCQqLhee6cfvS6XwuT8HdstuGzu01f%2B8%2Bgg53w28JE3EUa0jcBJqMN6TtcIGOqUByxpWQ5RnKPHQWodyOxA32cUBzE6jjGxNGYEGn8OL3Q6Jo9TFRwChLwX6RNW5dBIptS1DKwsI%2FsWW43Jaqe3Ze0THGHEk%2F5mCpXPx4uCee1hWYu%2FD8mck4IiiRzOQRtHPvaoT4TU4jgsTn%2FsyuVultw4NC3%2BGcKoFb3LxRPHZ94wJ%2FUorHwdiJGBJT9adhz3rS%2B0UDouaNHvmpydx0%2BAih8FBda30&X-Amz-Signature=73f2b12a4df24610016d93eae38d3eba46029d0624fc63936f2c64fa12111608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3ZGE2Y%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T110153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQCW8a8OUNwBpRZpX9ft9KzTJU6v1FKKDqrVxVtw9NmPqwIgQ8Kje1fOQ%2BLdAYcuWgGbabcWlOZjwCJGNKiTa47ZmnEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDOf7TMj%2FKQOdG7sE1CrcA%2Fgo58nNFiJj%2Fg2TCFaBRoQdWAr6d2sI31oycF2pONxi4gFw8y9QEwcjCY4xY8ysXDXSDulKsn79j10nmJmIEl9JZqfqtg8%2FjFGCy8s3xRShoC%2FatMhd5eX7Ny3NwSU%2Fe%2B3ibiRFEeK7S8NJjHriRdcxKQUX4m0NbTSsxrUlA0mVa40Bod4MdMcSd1apJr19PydnHo0GCiMIP0UGe%2FEQnNrmsAPPOzDj%2FGrUnLGmK9QzbXAq0MfgJcfxlL2MoCxo7Z1JgVQ76FkYPx4XUmGCvs6ayrHosulQZY1m2rGG2RigkUP3uE%2B6L3iwQK1cscrE52E1FQaWj1ORyTm6L6jEwhVV%2F4p9G1%2FP0MV3163720xaILUsXaUkXrOTBWqZZ7HhFWN%2FfPfjSZ5Cqsu4TMb8%2BB%2BQkCpjNLn7qeRbVbT3a%2BJ9PjQeoYs254xXj0cYXA4UhLfXCZhZ05D%2BWFD2cbgX7OFDi8JpIb8YUgizEqPqJwToENZMTcKBKscF8PwFh1ZmPnYZ5GFh%2B4uQvWQtzC5y7PJSw5sc9EslPLu5FanH2OavQkPkUU2R7otApgrOeqQl2AgcuPeJoCQqLhee6cfvS6XwuT8HdstuGzu01f%2B8%2Bgg53w28JE3EUa0jcBJqMN6TtcIGOqUByxpWQ5RnKPHQWodyOxA32cUBzE6jjGxNGYEGn8OL3Q6Jo9TFRwChLwX6RNW5dBIptS1DKwsI%2FsWW43Jaqe3Ze0THGHEk%2F5mCpXPx4uCee1hWYu%2FD8mck4IiiRzOQRtHPvaoT4TU4jgsTn%2FsyuVultw4NC3%2BGcKoFb3LxRPHZ94wJ%2FUorHwdiJGBJT9adhz3rS%2B0UDouaNHvmpydx0%2BAih8FBda30&X-Amz-Signature=b2b4a645f5c22b39fce993f2779fbb1aa6beb9c0edd5ea86b2027a8d919d8885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

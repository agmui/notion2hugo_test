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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIBAFNG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwSN8ueJm5aadtvK3YQY6nOJryNm56bFwwQxT%2BQeX8LAIgf0P0211Vsf6DBoIhHocE1ufz%2FbuESUj3pZHcObAQbxcq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDEqahaSCb5Fqe14qEircA5ysTigkGqsjyRge%2BsNcrswzvpGqJeqEU%2BP26P%2BYfjxy%2Fjl6l6y2vBCeQkvByobekvjKWi1WyoPb0TguBR3opV6O3prK198CE50VMEh%2FcSXZskE84bN52S9SHy2dPnMKmQmturAs%2BlDFQ80gw3aiaLr2QFgi3xMlxMtVs3el8Q9zAk2dIxbtyzb%2BUT%2FBgxzJQPbbAkstx3EdT0rBVlNb4jZzH0GVybjowV149vB03lBO90g%2F6BY%2BnMGQKvUXxbnKVX07nuszUOR2AoV0JXRVPm2LEVd2gPxTdfm%2BN5Qy3NaFf6DtnjZPwSW%2F2v5DLsJIHiWPI6%2FzZcQoOzegOg1aXxYQAqQQH9tXsYjU1F9LutlTfqJK0R52pFc9vMaJFrmQcPz20RzmRxD84MZwd9yqKHJLxa2D47l8dZoc%2BcwpxTxj0XGc5D8JnJ7jXU5livpI%2BMZIJ0CPauGSi60J019HCDcGp7mcDM5oggefl9FzMnL2qsbQWZR8Y0esP%2F%2BbAtCuXdIrLOWZ1af7qB1mhKt6fnPdr7T7tbHsazPBhn7xWI%2FeNBWaVJlirdu0C%2F8yYMi3BOOt9HhjL7iADhI9fwl0W8mP2ZwjOTYLMCH%2Fj3JrEAnwUTP9ONaDxQD4sE3qMPPA878GOqUBnOK9QgrwP7PNvnG%2FZNtNseLt0zb4xpTAri1N9VJZKjTv5%2B4hY987LQ%2Bz%2FqXhfUJ%2FlEpRmk%2FfSip8XWPAcELunMDOCTBtnBCvV%2Fcq3%2BXbMSDvv327eDqDVg47%2FyLlCxUcRaWhm3hP4Pm1kiIMMn3rosJ7leIpGhAFkwbmovpyLBqwWi59M%2B0OEIZ74ciOdsimtvw7q1LlXfqjRFJeW4gYUow%2FtuuG&X-Amz-Signature=761711c8c663fbbf22238b397cf3562b01d7bffb09b7c1b7220eb2dc950b1d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIBAFNG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwSN8ueJm5aadtvK3YQY6nOJryNm56bFwwQxT%2BQeX8LAIgf0P0211Vsf6DBoIhHocE1ufz%2FbuESUj3pZHcObAQbxcq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDEqahaSCb5Fqe14qEircA5ysTigkGqsjyRge%2BsNcrswzvpGqJeqEU%2BP26P%2BYfjxy%2Fjl6l6y2vBCeQkvByobekvjKWi1WyoPb0TguBR3opV6O3prK198CE50VMEh%2FcSXZskE84bN52S9SHy2dPnMKmQmturAs%2BlDFQ80gw3aiaLr2QFgi3xMlxMtVs3el8Q9zAk2dIxbtyzb%2BUT%2FBgxzJQPbbAkstx3EdT0rBVlNb4jZzH0GVybjowV149vB03lBO90g%2F6BY%2BnMGQKvUXxbnKVX07nuszUOR2AoV0JXRVPm2LEVd2gPxTdfm%2BN5Qy3NaFf6DtnjZPwSW%2F2v5DLsJIHiWPI6%2FzZcQoOzegOg1aXxYQAqQQH9tXsYjU1F9LutlTfqJK0R52pFc9vMaJFrmQcPz20RzmRxD84MZwd9yqKHJLxa2D47l8dZoc%2BcwpxTxj0XGc5D8JnJ7jXU5livpI%2BMZIJ0CPauGSi60J019HCDcGp7mcDM5oggefl9FzMnL2qsbQWZR8Y0esP%2F%2BbAtCuXdIrLOWZ1af7qB1mhKt6fnPdr7T7tbHsazPBhn7xWI%2FeNBWaVJlirdu0C%2F8yYMi3BOOt9HhjL7iADhI9fwl0W8mP2ZwjOTYLMCH%2Fj3JrEAnwUTP9ONaDxQD4sE3qMPPA878GOqUBnOK9QgrwP7PNvnG%2FZNtNseLt0zb4xpTAri1N9VJZKjTv5%2B4hY987LQ%2Bz%2FqXhfUJ%2FlEpRmk%2FfSip8XWPAcELunMDOCTBtnBCvV%2Fcq3%2BXbMSDvv327eDqDVg47%2FyLlCxUcRaWhm3hP4Pm1kiIMMn3rosJ7leIpGhAFkwbmovpyLBqwWi59M%2B0OEIZ74ciOdsimtvw7q1LlXfqjRFJeW4gYUow%2FtuuG&X-Amz-Signature=bc809e3b7a59e70264219938bbe8ff53d5ad810055c825614112f9ef3cccbaba&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZIBAFNG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwSN8ueJm5aadtvK3YQY6nOJryNm56bFwwQxT%2BQeX8LAIgf0P0211Vsf6DBoIhHocE1ufz%2FbuESUj3pZHcObAQbxcq%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDEqahaSCb5Fqe14qEircA5ysTigkGqsjyRge%2BsNcrswzvpGqJeqEU%2BP26P%2BYfjxy%2Fjl6l6y2vBCeQkvByobekvjKWi1WyoPb0TguBR3opV6O3prK198CE50VMEh%2FcSXZskE84bN52S9SHy2dPnMKmQmturAs%2BlDFQ80gw3aiaLr2QFgi3xMlxMtVs3el8Q9zAk2dIxbtyzb%2BUT%2FBgxzJQPbbAkstx3EdT0rBVlNb4jZzH0GVybjowV149vB03lBO90g%2F6BY%2BnMGQKvUXxbnKVX07nuszUOR2AoV0JXRVPm2LEVd2gPxTdfm%2BN5Qy3NaFf6DtnjZPwSW%2F2v5DLsJIHiWPI6%2FzZcQoOzegOg1aXxYQAqQQH9tXsYjU1F9LutlTfqJK0R52pFc9vMaJFrmQcPz20RzmRxD84MZwd9yqKHJLxa2D47l8dZoc%2BcwpxTxj0XGc5D8JnJ7jXU5livpI%2BMZIJ0CPauGSi60J019HCDcGp7mcDM5oggefl9FzMnL2qsbQWZR8Y0esP%2F%2BbAtCuXdIrLOWZ1af7qB1mhKt6fnPdr7T7tbHsazPBhn7xWI%2FeNBWaVJlirdu0C%2F8yYMi3BOOt9HhjL7iADhI9fwl0W8mP2ZwjOTYLMCH%2Fj3JrEAnwUTP9ONaDxQD4sE3qMPPA878GOqUBnOK9QgrwP7PNvnG%2FZNtNseLt0zb4xpTAri1N9VJZKjTv5%2B4hY987LQ%2Bz%2FqXhfUJ%2FlEpRmk%2FfSip8XWPAcELunMDOCTBtnBCvV%2Fcq3%2BXbMSDvv327eDqDVg47%2FyLlCxUcRaWhm3hP4Pm1kiIMMn3rosJ7leIpGhAFkwbmovpyLBqwWi59M%2B0OEIZ74ciOdsimtvw7q1LlXfqjRFJeW4gYUow%2FtuuG&X-Amz-Signature=2f788f98b79fc6d6bdb53395953c62e8a9f9d95469f61e12593bd7d573a3fe1f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

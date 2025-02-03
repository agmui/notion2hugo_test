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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNC3IKW6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAOvsx67l%2BGDm0RFHGz%2BlVg6oKTdZP2KK2Y08Yf04INAiBOneZ1sMY2v2EzN%2BIFKI2QSnkX9sD19DAHr30mNP5JDiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZzsqj63t6fmAOlXxKtwD3Zyd%2Fdd27W3eqMLiiEn%2FE39GctCMFW8TWS%2B3EBh5RMf9akKyVvMsMf3mKXfGdO5ThRBSbLAsY1n9xFJxlt4oxik8eyVoGw4C1lByuZ9MxVUVQ%2Flawh%2BUjxPoWQHuUGiy%2Bp%2BSA%2FGzUcMHigq9aZuNb34JzCq2Y0ABj8dHAVnvGp5lxUJN7FG096LN0S8k4TkqqcGKhluiqSLJdOCt0bPSRkBDgU%2Bx4L5yDE%2Fa6odPbtGyDPVLFccz4XEoBOaQEr1Rxbh3gKizOQHjWz5Pw2WsOEK6CO18Cfgcb%2BnY%2BCEJmgA2e36rfVRPquapKCF9oULrLOjgFaUZPsKkmMZFIRDFqBrWRUDSkwkLKdaUdVx0bpStg5Bie%2BR3M8WxLLHnLqaQ5R9C%2FpiW%2FN4O7b7Tj9TTjIpT0kauJBDRY%2FdUK%2FsPvRuNGATrrawb7Dgn8w0CIMaa%2ByYFexYtoxnE1%2BVFbUGtY2eVKVyUwRUUawFk0X%2BdR%2FrW9LmVDaQ0iE0fuILObjCd3CToRpfsEkvHi0ragu5T4k0xyLy23AVSFrQVadBtmo95%2Fcedy39CvYnzntc1rHUeFYk9tQUSYEg3tPcCOrCyQ5rJo9vFi8y4iccbXlhkXXBoELQWn5FwjeVg9Fww4eb%2FvAY6pgEadudt9OfjpQwO%2B4k9sOQXs7uvtvvN9W5M%2FlpEtPxx6rimHB0Nh2WNv6%2F4%2FTPrp%2B2WG2eCU%2Bndo%2FGfZQPiGO8AJkkbXwYRXsJHZhBC1nX%2BaD%2FKdF%2Bh0nzC8NdCkN7WKc5QHH%2B0M7xmifJudmgMZu%2BNWzkB2844RskzV65H6H6xXP%2BIhMbEWGU6GfjiQy7GvWnX6w%2BVoB479OleHokn%2BcPaf1tgT8u8&X-Amz-Signature=598d095cb1100dcd4712b9e978897d8fad789b43f9823764c382ecda8858e7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNC3IKW6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAOvsx67l%2BGDm0RFHGz%2BlVg6oKTdZP2KK2Y08Yf04INAiBOneZ1sMY2v2EzN%2BIFKI2QSnkX9sD19DAHr30mNP5JDiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZzsqj63t6fmAOlXxKtwD3Zyd%2Fdd27W3eqMLiiEn%2FE39GctCMFW8TWS%2B3EBh5RMf9akKyVvMsMf3mKXfGdO5ThRBSbLAsY1n9xFJxlt4oxik8eyVoGw4C1lByuZ9MxVUVQ%2Flawh%2BUjxPoWQHuUGiy%2Bp%2BSA%2FGzUcMHigq9aZuNb34JzCq2Y0ABj8dHAVnvGp5lxUJN7FG096LN0S8k4TkqqcGKhluiqSLJdOCt0bPSRkBDgU%2Bx4L5yDE%2Fa6odPbtGyDPVLFccz4XEoBOaQEr1Rxbh3gKizOQHjWz5Pw2WsOEK6CO18Cfgcb%2BnY%2BCEJmgA2e36rfVRPquapKCF9oULrLOjgFaUZPsKkmMZFIRDFqBrWRUDSkwkLKdaUdVx0bpStg5Bie%2BR3M8WxLLHnLqaQ5R9C%2FpiW%2FN4O7b7Tj9TTjIpT0kauJBDRY%2FdUK%2FsPvRuNGATrrawb7Dgn8w0CIMaa%2ByYFexYtoxnE1%2BVFbUGtY2eVKVyUwRUUawFk0X%2BdR%2FrW9LmVDaQ0iE0fuILObjCd3CToRpfsEkvHi0ragu5T4k0xyLy23AVSFrQVadBtmo95%2Fcedy39CvYnzntc1rHUeFYk9tQUSYEg3tPcCOrCyQ5rJo9vFi8y4iccbXlhkXXBoELQWn5FwjeVg9Fww4eb%2FvAY6pgEadudt9OfjpQwO%2B4k9sOQXs7uvtvvN9W5M%2FlpEtPxx6rimHB0Nh2WNv6%2F4%2FTPrp%2B2WG2eCU%2Bndo%2FGfZQPiGO8AJkkbXwYRXsJHZhBC1nX%2BaD%2FKdF%2Bh0nzC8NdCkN7WKc5QHH%2B0M7xmifJudmgMZu%2BNWzkB2844RskzV65H6H6xXP%2BIhMbEWGU6GfjiQy7GvWnX6w%2BVoB479OleHokn%2BcPaf1tgT8u8&X-Amz-Signature=5aa0c0b7dc6b21266614518c9fb34f4c5c423a01095674e10e8973f643f01921&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNC3IKW6%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAOvsx67l%2BGDm0RFHGz%2BlVg6oKTdZP2KK2Y08Yf04INAiBOneZ1sMY2v2EzN%2BIFKI2QSnkX9sD19DAHr30mNP5JDiqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZzsqj63t6fmAOlXxKtwD3Zyd%2Fdd27W3eqMLiiEn%2FE39GctCMFW8TWS%2B3EBh5RMf9akKyVvMsMf3mKXfGdO5ThRBSbLAsY1n9xFJxlt4oxik8eyVoGw4C1lByuZ9MxVUVQ%2Flawh%2BUjxPoWQHuUGiy%2Bp%2BSA%2FGzUcMHigq9aZuNb34JzCq2Y0ABj8dHAVnvGp5lxUJN7FG096LN0S8k4TkqqcGKhluiqSLJdOCt0bPSRkBDgU%2Bx4L5yDE%2Fa6odPbtGyDPVLFccz4XEoBOaQEr1Rxbh3gKizOQHjWz5Pw2WsOEK6CO18Cfgcb%2BnY%2BCEJmgA2e36rfVRPquapKCF9oULrLOjgFaUZPsKkmMZFIRDFqBrWRUDSkwkLKdaUdVx0bpStg5Bie%2BR3M8WxLLHnLqaQ5R9C%2FpiW%2FN4O7b7Tj9TTjIpT0kauJBDRY%2FdUK%2FsPvRuNGATrrawb7Dgn8w0CIMaa%2ByYFexYtoxnE1%2BVFbUGtY2eVKVyUwRUUawFk0X%2BdR%2FrW9LmVDaQ0iE0fuILObjCd3CToRpfsEkvHi0ragu5T4k0xyLy23AVSFrQVadBtmo95%2Fcedy39CvYnzntc1rHUeFYk9tQUSYEg3tPcCOrCyQ5rJo9vFi8y4iccbXlhkXXBoELQWn5FwjeVg9Fww4eb%2FvAY6pgEadudt9OfjpQwO%2B4k9sOQXs7uvtvvN9W5M%2FlpEtPxx6rimHB0Nh2WNv6%2F4%2FTPrp%2B2WG2eCU%2Bndo%2FGfZQPiGO8AJkkbXwYRXsJHZhBC1nX%2BaD%2FKdF%2Bh0nzC8NdCkN7WKc5QHH%2B0M7xmifJudmgMZu%2BNWzkB2844RskzV65H6H6xXP%2BIhMbEWGU6GfjiQy7GvWnX6w%2BVoB479OleHokn%2BcPaf1tgT8u8&X-Amz-Signature=687edb437c57ed70f6512ed4450c2e23904d33a43514e8fe3446ba1f8bb195e9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

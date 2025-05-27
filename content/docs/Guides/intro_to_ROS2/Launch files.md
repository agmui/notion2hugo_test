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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DVOXQ6S%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAdO6TEeoUrPuUwOlGigeQKXA0d3MHA%2BRVPKKM46oMlQIgGaexfmU2a6vbd3RAsQ6kNEnb%2FCJMLfo9j9Cazv7sjUAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKS8szYFd8s0SfAk%2FCrcAwm1GgyxlIOKaqFoDrdwYzMBJqk74zy819yOb%2FrNINWUypgB0qx2OyiHSluXF%2F7MH4tj8fPuOkSGFtfHAv1As8MhDcPYRZbLbylsDe1gWVsFbwydkLwM%2F3V31%2FRttnQjaBC44vH2jQo4uT30DSq%2FVYyGOqNO7T99%2B0Qg89K7%2FOdWf0qJepgm%2BIl8qmYz%2BLgd4QLWoTrfGn%2BNV477GA%2FaVCAboSmLcwYntnfyuRKQ6p6wMALJMGl4aFLH4%2B0pAiGQ1B4Rty0ppjVjnC9O856eqlHmmycDW0XIKyWbTadDsB6gendtIqlD66qwsxTKtjWIiuRzShWPxFeP1ZMYiv6k%2F5rp7Dn0HRAYNjK6cYLQHTag9XtrfVWqa74UDEbytVyHT6qQzuYQcVYFJTHb2Zd9qysRbRXO6GA8a6IsY%2BAOdNPUf9Oft5LbQTqqgES5ZzZMzFF76TyDhpWjYl4EbK8OHbSHtjtEuSNpF9s7Z9U66a9ArrPbNfe7f1s54KG2byrsydWn%2FO4WQbD4j%2FXymD4NfZz7bhxq4jjlqr4f1yNXb%2Bqt0JHlPzO3vRTLVMkFy4t4iuRLH%2BrVAO4CwB5a7I%2FLKVYF4hK7OmF4rds2L8TbuK%2BbDDzucKTlAQAJmnPrMM7J2MEGOqUBkBABU4UEzjfzX0aTNdrPeIaYEGRpOxYczpH7sq8ZWDZLcAtNVe%2FR1NTChu99ZEdifAkoStX8dkGjeDNbmkhW0ZdxWwEF8KqRyXjYiwIvY5SM8glJUpAUneK3AQllTTxzgLPP%2B9S%2F09bYNGfZyCZOfE5hFVjWHZrtLIre3Y4P56vWuJWkleOF8QVDdhT2pEPB1o23DWezrsOczUB7DVFHV%2FqsyUBl&X-Amz-Signature=75f4f606fd6cb6e2f7c8ceb9362aca185bdadfd8b9ac80f65f5795a4e7a8b94d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DVOXQ6S%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAdO6TEeoUrPuUwOlGigeQKXA0d3MHA%2BRVPKKM46oMlQIgGaexfmU2a6vbd3RAsQ6kNEnb%2FCJMLfo9j9Cazv7sjUAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKS8szYFd8s0SfAk%2FCrcAwm1GgyxlIOKaqFoDrdwYzMBJqk74zy819yOb%2FrNINWUypgB0qx2OyiHSluXF%2F7MH4tj8fPuOkSGFtfHAv1As8MhDcPYRZbLbylsDe1gWVsFbwydkLwM%2F3V31%2FRttnQjaBC44vH2jQo4uT30DSq%2FVYyGOqNO7T99%2B0Qg89K7%2FOdWf0qJepgm%2BIl8qmYz%2BLgd4QLWoTrfGn%2BNV477GA%2FaVCAboSmLcwYntnfyuRKQ6p6wMALJMGl4aFLH4%2B0pAiGQ1B4Rty0ppjVjnC9O856eqlHmmycDW0XIKyWbTadDsB6gendtIqlD66qwsxTKtjWIiuRzShWPxFeP1ZMYiv6k%2F5rp7Dn0HRAYNjK6cYLQHTag9XtrfVWqa74UDEbytVyHT6qQzuYQcVYFJTHb2Zd9qysRbRXO6GA8a6IsY%2BAOdNPUf9Oft5LbQTqqgES5ZzZMzFF76TyDhpWjYl4EbK8OHbSHtjtEuSNpF9s7Z9U66a9ArrPbNfe7f1s54KG2byrsydWn%2FO4WQbD4j%2FXymD4NfZz7bhxq4jjlqr4f1yNXb%2Bqt0JHlPzO3vRTLVMkFy4t4iuRLH%2BrVAO4CwB5a7I%2FLKVYF4hK7OmF4rds2L8TbuK%2BbDDzucKTlAQAJmnPrMM7J2MEGOqUBkBABU4UEzjfzX0aTNdrPeIaYEGRpOxYczpH7sq8ZWDZLcAtNVe%2FR1NTChu99ZEdifAkoStX8dkGjeDNbmkhW0ZdxWwEF8KqRyXjYiwIvY5SM8glJUpAUneK3AQllTTxzgLPP%2B9S%2F09bYNGfZyCZOfE5hFVjWHZrtLIre3Y4P56vWuJWkleOF8QVDdhT2pEPB1o23DWezrsOczUB7DVFHV%2FqsyUBl&X-Amz-Signature=1d8587e576d1879827a4aa720ff4270cefe8988882e1ae082f45ca0346c6947b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DVOXQ6S%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T210823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAdO6TEeoUrPuUwOlGigeQKXA0d3MHA%2BRVPKKM46oMlQIgGaexfmU2a6vbd3RAsQ6kNEnb%2FCJMLfo9j9Cazv7sjUAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKS8szYFd8s0SfAk%2FCrcAwm1GgyxlIOKaqFoDrdwYzMBJqk74zy819yOb%2FrNINWUypgB0qx2OyiHSluXF%2F7MH4tj8fPuOkSGFtfHAv1As8MhDcPYRZbLbylsDe1gWVsFbwydkLwM%2F3V31%2FRttnQjaBC44vH2jQo4uT30DSq%2FVYyGOqNO7T99%2B0Qg89K7%2FOdWf0qJepgm%2BIl8qmYz%2BLgd4QLWoTrfGn%2BNV477GA%2FaVCAboSmLcwYntnfyuRKQ6p6wMALJMGl4aFLH4%2B0pAiGQ1B4Rty0ppjVjnC9O856eqlHmmycDW0XIKyWbTadDsB6gendtIqlD66qwsxTKtjWIiuRzShWPxFeP1ZMYiv6k%2F5rp7Dn0HRAYNjK6cYLQHTag9XtrfVWqa74UDEbytVyHT6qQzuYQcVYFJTHb2Zd9qysRbRXO6GA8a6IsY%2BAOdNPUf9Oft5LbQTqqgES5ZzZMzFF76TyDhpWjYl4EbK8OHbSHtjtEuSNpF9s7Z9U66a9ArrPbNfe7f1s54KG2byrsydWn%2FO4WQbD4j%2FXymD4NfZz7bhxq4jjlqr4f1yNXb%2Bqt0JHlPzO3vRTLVMkFy4t4iuRLH%2BrVAO4CwB5a7I%2FLKVYF4hK7OmF4rds2L8TbuK%2BbDDzucKTlAQAJmnPrMM7J2MEGOqUBkBABU4UEzjfzX0aTNdrPeIaYEGRpOxYczpH7sq8ZWDZLcAtNVe%2FR1NTChu99ZEdifAkoStX8dkGjeDNbmkhW0ZdxWwEF8KqRyXjYiwIvY5SM8glJUpAUneK3AQllTTxzgLPP%2B9S%2F09bYNGfZyCZOfE5hFVjWHZrtLIre3Y4P56vWuJWkleOF8QVDdhT2pEPB1o23DWezrsOczUB7DVFHV%2FqsyUBl&X-Amz-Signature=55b34c910b157caf14fa6c4b1dfd04d9dec8ae42aee18a47d04ac3b3b8d8019b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

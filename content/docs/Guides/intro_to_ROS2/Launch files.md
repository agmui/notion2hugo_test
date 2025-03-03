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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V767KPL5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAucGC1vKOuwCjcmU7B1G3s0lJQIkJfZHRjKPl8bkaUAiATjDnnOjqqSd4pr6kEj9qO09woxmjvc80A41dU1xAfBSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnyuQtuxPQmxDRLiHKtwDW1hc2VNzTXcHol21%2FgeJfqa9THqzASK60nhiZb6BvG0awrcMbqRsYuMBrwtF52cVNBk14BogG%2Bfd%2FGLDV1AroUXCbVaP30l4KZlYY%2BvIlJBZBuQ0JNTPw5ArBM7VkEINCbAZuD%2BgYWpyfBKBrY%2BStCN3C1ZWqd%2FPfQ9aej%2FlVYU2U7c%2BcJf0B%2FpF5hWYAoLRulna%2FkcC3XI0aSRjMuPsWGDNmpSpLjiiuZSH7OTdRhC4Scyxp1NubUVs%2FKTFknjjkzu%2B2EfU2gAwARinvcKBrlZOrummTatzD8atLz%2Fjpwzsv8R6JQGys0%2B2OvQwm7Kc43Is20GfP%2FXEOKYzY3XegwNFsyKTQnK%2FfvDes1K5bUGhuVm9FBpEs8fgVVF4oLr0355m6iozVyv9ODcKajzjV8pYI9H5gOtH99TriMHIXw0mxc6f6%2BmLkt1xF4TMuOaNz4aRX0Ul4FMQ6PauLlGEybgAHm3xhIbRa2k%2F7lWFCuMkl5tgjBdnc%2BpPovNOQ%2BItgg9r7N9Va2pNh5ajVfNLoSnoBrrkOcwSyGp%2F1O89wXeqXXalVDBEIfcZFjfHKop8fdy4aIR5cVmc%2BJfhQ3rhgncbvh2IGWgE2rtdmEqzvo7l%2F6VJRdsIAm93Q5gwk7qYvgY6pgG%2BUnWFlAqjOlSB3eHVTmVH3uLG9RZnE10I3Z3n4g9JkKY7ssB8LRrU3mlo%2FQkAjHJThI1nVrQIM%2BKC7lfXSPTaZ7L1TUX5q5UH%2FCkeJam6C7i5QcKoTCfmzc1FLUrIxLZOa666AqIrLgRf%2FVXe%2FQSPFrEGcLipJia%2FH9Ot1OQH2QKN3TCZxx7uyRPHntwtdnr7d2eih6zPCn75Sl%2BvJuFbspIHMPMy&X-Amz-Signature=a6b11769a945ccbecf0f7dc8bf705a8bd073164260e0c88bd1875629475ad53b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V767KPL5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAucGC1vKOuwCjcmU7B1G3s0lJQIkJfZHRjKPl8bkaUAiATjDnnOjqqSd4pr6kEj9qO09woxmjvc80A41dU1xAfBSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnyuQtuxPQmxDRLiHKtwDW1hc2VNzTXcHol21%2FgeJfqa9THqzASK60nhiZb6BvG0awrcMbqRsYuMBrwtF52cVNBk14BogG%2Bfd%2FGLDV1AroUXCbVaP30l4KZlYY%2BvIlJBZBuQ0JNTPw5ArBM7VkEINCbAZuD%2BgYWpyfBKBrY%2BStCN3C1ZWqd%2FPfQ9aej%2FlVYU2U7c%2BcJf0B%2FpF5hWYAoLRulna%2FkcC3XI0aSRjMuPsWGDNmpSpLjiiuZSH7OTdRhC4Scyxp1NubUVs%2FKTFknjjkzu%2B2EfU2gAwARinvcKBrlZOrummTatzD8atLz%2Fjpwzsv8R6JQGys0%2B2OvQwm7Kc43Is20GfP%2FXEOKYzY3XegwNFsyKTQnK%2FfvDes1K5bUGhuVm9FBpEs8fgVVF4oLr0355m6iozVyv9ODcKajzjV8pYI9H5gOtH99TriMHIXw0mxc6f6%2BmLkt1xF4TMuOaNz4aRX0Ul4FMQ6PauLlGEybgAHm3xhIbRa2k%2F7lWFCuMkl5tgjBdnc%2BpPovNOQ%2BItgg9r7N9Va2pNh5ajVfNLoSnoBrrkOcwSyGp%2F1O89wXeqXXalVDBEIfcZFjfHKop8fdy4aIR5cVmc%2BJfhQ3rhgncbvh2IGWgE2rtdmEqzvo7l%2F6VJRdsIAm93Q5gwk7qYvgY6pgG%2BUnWFlAqjOlSB3eHVTmVH3uLG9RZnE10I3Z3n4g9JkKY7ssB8LRrU3mlo%2FQkAjHJThI1nVrQIM%2BKC7lfXSPTaZ7L1TUX5q5UH%2FCkeJam6C7i5QcKoTCfmzc1FLUrIxLZOa666AqIrLgRf%2FVXe%2FQSPFrEGcLipJia%2FH9Ot1OQH2QKN3TCZxx7uyRPHntwtdnr7d2eih6zPCn75Sl%2BvJuFbspIHMPMy&X-Amz-Signature=f5caf1696a60e713d157fdf089fe74c9ab291e163cf903f9c53603932a0703ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V767KPL5%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAucGC1vKOuwCjcmU7B1G3s0lJQIkJfZHRjKPl8bkaUAiATjDnnOjqqSd4pr6kEj9qO09woxmjvc80A41dU1xAfBSqIBAje%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnyuQtuxPQmxDRLiHKtwDW1hc2VNzTXcHol21%2FgeJfqa9THqzASK60nhiZb6BvG0awrcMbqRsYuMBrwtF52cVNBk14BogG%2Bfd%2FGLDV1AroUXCbVaP30l4KZlYY%2BvIlJBZBuQ0JNTPw5ArBM7VkEINCbAZuD%2BgYWpyfBKBrY%2BStCN3C1ZWqd%2FPfQ9aej%2FlVYU2U7c%2BcJf0B%2FpF5hWYAoLRulna%2FkcC3XI0aSRjMuPsWGDNmpSpLjiiuZSH7OTdRhC4Scyxp1NubUVs%2FKTFknjjkzu%2B2EfU2gAwARinvcKBrlZOrummTatzD8atLz%2Fjpwzsv8R6JQGys0%2B2OvQwm7Kc43Is20GfP%2FXEOKYzY3XegwNFsyKTQnK%2FfvDes1K5bUGhuVm9FBpEs8fgVVF4oLr0355m6iozVyv9ODcKajzjV8pYI9H5gOtH99TriMHIXw0mxc6f6%2BmLkt1xF4TMuOaNz4aRX0Ul4FMQ6PauLlGEybgAHm3xhIbRa2k%2F7lWFCuMkl5tgjBdnc%2BpPovNOQ%2BItgg9r7N9Va2pNh5ajVfNLoSnoBrrkOcwSyGp%2F1O89wXeqXXalVDBEIfcZFjfHKop8fdy4aIR5cVmc%2BJfhQ3rhgncbvh2IGWgE2rtdmEqzvo7l%2F6VJRdsIAm93Q5gwk7qYvgY6pgG%2BUnWFlAqjOlSB3eHVTmVH3uLG9RZnE10I3Z3n4g9JkKY7ssB8LRrU3mlo%2FQkAjHJThI1nVrQIM%2BKC7lfXSPTaZ7L1TUX5q5UH%2FCkeJam6C7i5QcKoTCfmzc1FLUrIxLZOa666AqIrLgRf%2FVXe%2FQSPFrEGcLipJia%2FH9Ot1OQH2QKN3TCZxx7uyRPHntwtdnr7d2eih6zPCn75Sl%2BvJuFbspIHMPMy&X-Amz-Signature=a6aef0ae466dcdeff91d99122dff896ff8d3c8008143aa1f843ac1d480c5fef7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

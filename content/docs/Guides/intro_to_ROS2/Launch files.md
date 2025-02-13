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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FKNTFGR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxMNAhkv2d42V0UAFcW8nY7f2y%2BeZLmN5sIV89WKf6WAIgFi1dHOxqOAB256XWP23GHWenVWESaJz6WdUpzgs1y4Uq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCR9QyhqB4mjmkiFWSrcAzUWvMfIfUmxUDwd7wEBE%2Fc5GNNF2t42fbDvNgjP4CY2DLVPaYfCnNjD4wnlhCSgOKJbxyPfCIUJWmqQJ55b9uESL%2BUEHZEy0E%2BnltyeyMxAf88edcLgCVr3VZdUvz7nDbYNxnBhyaz2BFmld3fqyVaGEn3Otn4qZfRNlkZkN2Dndmsl7YIJPPYJsj6WQOS09OnddMEcMk0IVOioeVBJjleZndvYH69WtH%2BZbKdn5QpwErA17vGfzzqGoHCLyCwpWr8wtHuQ%2FIhPmmReSsiwEul6d7I0CYMBgjr3QHxCEVJjR45PymuDI7A3oM1WmZ88b5TX3h9nmVYbcS%2FL6pgksXdePQ6bF%2FW1wPTcBvFuXihyQzv9RWjnl3WyOYji0rZ9nFYbY2DixqKD5KUtKznCYa4zSJ0sBgiKeVsmWfBJJhVRrtUpE%2F%2FwWMqWj6xHz5X%2Bbvv5AiwYBTG4xRQM7%2BE0UagtVRklFT5zSvO4C7rz4EzZdqS0%2BQ3SMc6uum1mDpaamVImGL3QI8L3NhXnoVYsl%2FosvKUvAas56IMQtjg%2BMNDwozwM%2B9CLsLhsUzUMH40ju%2BUTDt3MBxkc4SOZ%2F52gWFNs15VNl6HXviioZ9Zh5GI6yaZJDITBq5OD55aPMPLdt70GOqUBPSaEmQbLsn4%2F3%2F4MAdEchyU0kzv%2FNBsvBJLYrrGX7LPAwKZJYNdKyvcM3V0QSAMDIztb%2F%2BmU2SCFyIMqHpV4CIwGI1Mzka2nsCovWqoFkjI8GPrDTx10%2Bj2%2F6TcUW%2B%2BgHxc9fA2Pk2feFwoQuXnM%2Bz25Jbt1KfppxaKoGTKNGPdiCXbMNNrY0fgGp2IkcM2oRlr5ygrt0hOoSznWF7m18uM9ro3V&X-Amz-Signature=a5a61bcbb6c6112978316dcb2534c23a24eac15dbdbc9a4743f91316eb063938&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FKNTFGR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxMNAhkv2d42V0UAFcW8nY7f2y%2BeZLmN5sIV89WKf6WAIgFi1dHOxqOAB256XWP23GHWenVWESaJz6WdUpzgs1y4Uq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCR9QyhqB4mjmkiFWSrcAzUWvMfIfUmxUDwd7wEBE%2Fc5GNNF2t42fbDvNgjP4CY2DLVPaYfCnNjD4wnlhCSgOKJbxyPfCIUJWmqQJ55b9uESL%2BUEHZEy0E%2BnltyeyMxAf88edcLgCVr3VZdUvz7nDbYNxnBhyaz2BFmld3fqyVaGEn3Otn4qZfRNlkZkN2Dndmsl7YIJPPYJsj6WQOS09OnddMEcMk0IVOioeVBJjleZndvYH69WtH%2BZbKdn5QpwErA17vGfzzqGoHCLyCwpWr8wtHuQ%2FIhPmmReSsiwEul6d7I0CYMBgjr3QHxCEVJjR45PymuDI7A3oM1WmZ88b5TX3h9nmVYbcS%2FL6pgksXdePQ6bF%2FW1wPTcBvFuXihyQzv9RWjnl3WyOYji0rZ9nFYbY2DixqKD5KUtKznCYa4zSJ0sBgiKeVsmWfBJJhVRrtUpE%2F%2FwWMqWj6xHz5X%2Bbvv5AiwYBTG4xRQM7%2BE0UagtVRklFT5zSvO4C7rz4EzZdqS0%2BQ3SMc6uum1mDpaamVImGL3QI8L3NhXnoVYsl%2FosvKUvAas56IMQtjg%2BMNDwozwM%2B9CLsLhsUzUMH40ju%2BUTDt3MBxkc4SOZ%2F52gWFNs15VNl6HXviioZ9Zh5GI6yaZJDITBq5OD55aPMPLdt70GOqUBPSaEmQbLsn4%2F3%2F4MAdEchyU0kzv%2FNBsvBJLYrrGX7LPAwKZJYNdKyvcM3V0QSAMDIztb%2F%2BmU2SCFyIMqHpV4CIwGI1Mzka2nsCovWqoFkjI8GPrDTx10%2Bj2%2F6TcUW%2B%2BgHxc9fA2Pk2feFwoQuXnM%2Bz25Jbt1KfppxaKoGTKNGPdiCXbMNNrY0fgGp2IkcM2oRlr5ygrt0hOoSznWF7m18uM9ro3V&X-Amz-Signature=f3b2fef2ffa2c8627dadced54f5e3cd6f047c33d22cd07277a0632f34f99e5c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FKNTFGR%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxMNAhkv2d42V0UAFcW8nY7f2y%2BeZLmN5sIV89WKf6WAIgFi1dHOxqOAB256XWP23GHWenVWESaJz6WdUpzgs1y4Uq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDCR9QyhqB4mjmkiFWSrcAzUWvMfIfUmxUDwd7wEBE%2Fc5GNNF2t42fbDvNgjP4CY2DLVPaYfCnNjD4wnlhCSgOKJbxyPfCIUJWmqQJ55b9uESL%2BUEHZEy0E%2BnltyeyMxAf88edcLgCVr3VZdUvz7nDbYNxnBhyaz2BFmld3fqyVaGEn3Otn4qZfRNlkZkN2Dndmsl7YIJPPYJsj6WQOS09OnddMEcMk0IVOioeVBJjleZndvYH69WtH%2BZbKdn5QpwErA17vGfzzqGoHCLyCwpWr8wtHuQ%2FIhPmmReSsiwEul6d7I0CYMBgjr3QHxCEVJjR45PymuDI7A3oM1WmZ88b5TX3h9nmVYbcS%2FL6pgksXdePQ6bF%2FW1wPTcBvFuXihyQzv9RWjnl3WyOYji0rZ9nFYbY2DixqKD5KUtKznCYa4zSJ0sBgiKeVsmWfBJJhVRrtUpE%2F%2FwWMqWj6xHz5X%2Bbvv5AiwYBTG4xRQM7%2BE0UagtVRklFT5zSvO4C7rz4EzZdqS0%2BQ3SMc6uum1mDpaamVImGL3QI8L3NhXnoVYsl%2FosvKUvAas56IMQtjg%2BMNDwozwM%2B9CLsLhsUzUMH40ju%2BUTDt3MBxkc4SOZ%2F52gWFNs15VNl6HXviioZ9Zh5GI6yaZJDITBq5OD55aPMPLdt70GOqUBPSaEmQbLsn4%2F3%2F4MAdEchyU0kzv%2FNBsvBJLYrrGX7LPAwKZJYNdKyvcM3V0QSAMDIztb%2F%2BmU2SCFyIMqHpV4CIwGI1Mzka2nsCovWqoFkjI8GPrDTx10%2Bj2%2F6TcUW%2B%2BgHxc9fA2Pk2feFwoQuXnM%2Bz25Jbt1KfppxaKoGTKNGPdiCXbMNNrY0fgGp2IkcM2oRlr5ygrt0hOoSznWF7m18uM9ro3V&X-Amz-Signature=412bfa07db4fdc114d1a632b1d09e0aed702a597c96dd5c5bf3d2f1dd2ecacfe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

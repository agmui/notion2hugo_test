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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPJGWHM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVsLPM8xFMWlPk6X7yV2PIOrGQv%2FNyDB2gi%2BvxYxPOjAIgJ3i3gub%2B78TWxy438CuaxsEoBa%2F3%2B8d7ps1zA0wMOCcq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDK5AbjwBgtdbeG2RbyrcA1b5e%2FINEUhQqoqYf%2BYO86%2BDiR6ceDiJHwk8uOmOGvhK0hwqdlyDcbwFpQR2EOrAZmYhRI0%2ByUHyuV1WpcbPoK1RjfIctXQLqVOUDN2UMSsLkKITExw8Lj5K6aPzcC6nmwPp1UAuHYnPYQTIrib3Fd22JN3VktUgSSxvVkzRrUbn%2BB84Q31Oip8LoP23Kd3zGABfTlZ%2BE355lG0RX4MT9sJGBSmejYhwPj5WuixOqEbHEB11uvFPX782VKuNfGjIH4F57%2BGcmg1zg7toq%2BWIw9g%2FSuvEueZMljmdJtkIOXPquY1bTGkQoX4owk%2BxsC8DGGo9SyUx90jLyAul5Q%2BOjCa4gpanC4Xd8rlgU24gNxTgZmAKTBG5Gmd8a5sPv%2FlIA8OWw490lMs5cFqaLb3cxSmV95EPyBk3O656aQf3RMqOqfMhcT%2BN8Kr7lhIKcorXf00rc0%2BStgdLzWDXPVUHL%2FRy4afNWndaqFja%2B5fNdeitAI0GwrqJ8437qgMs6uOGotpc7ZXo5puvGl2MUPBmmdO7lC6DgJmxooX%2FVckbv0mwJbKC4JsXW7ZctrKEO8AdBfJOIiKpcGXNWBYCz5QHfBKxSVjVQSjEg%2BND1Pu4tX4lY3Tbrq6%2FyaVpPiKsMPXq9r8GOqUB%2FiqK64EVLTjk2d3fCfSg59O3dGNTsnRgH2UZSCdOli4O7sLOzT79bMI3aXLcYJ6Milm6BJUznzw5V2JDuhffQOUnECm2EWOEkgu8wJZlBSlazYhV8xLEkWtPERs2%2BRYSIGT4I2fPnxmv%2BwdSjBsiEOp7eT1b9YPIpoI0UiccfE7KFpxHZISQ8c3cOiseNuvr3wxCdoh5O1QEdMrmwSxx32%2BGYoYJ&X-Amz-Signature=0ddf4aaf4c505fa3fbd910a7aa4729f654e1b760a3e89df78cf050469ceaaa6d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPJGWHM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVsLPM8xFMWlPk6X7yV2PIOrGQv%2FNyDB2gi%2BvxYxPOjAIgJ3i3gub%2B78TWxy438CuaxsEoBa%2F3%2B8d7ps1zA0wMOCcq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDK5AbjwBgtdbeG2RbyrcA1b5e%2FINEUhQqoqYf%2BYO86%2BDiR6ceDiJHwk8uOmOGvhK0hwqdlyDcbwFpQR2EOrAZmYhRI0%2ByUHyuV1WpcbPoK1RjfIctXQLqVOUDN2UMSsLkKITExw8Lj5K6aPzcC6nmwPp1UAuHYnPYQTIrib3Fd22JN3VktUgSSxvVkzRrUbn%2BB84Q31Oip8LoP23Kd3zGABfTlZ%2BE355lG0RX4MT9sJGBSmejYhwPj5WuixOqEbHEB11uvFPX782VKuNfGjIH4F57%2BGcmg1zg7toq%2BWIw9g%2FSuvEueZMljmdJtkIOXPquY1bTGkQoX4owk%2BxsC8DGGo9SyUx90jLyAul5Q%2BOjCa4gpanC4Xd8rlgU24gNxTgZmAKTBG5Gmd8a5sPv%2FlIA8OWw490lMs5cFqaLb3cxSmV95EPyBk3O656aQf3RMqOqfMhcT%2BN8Kr7lhIKcorXf00rc0%2BStgdLzWDXPVUHL%2FRy4afNWndaqFja%2B5fNdeitAI0GwrqJ8437qgMs6uOGotpc7ZXo5puvGl2MUPBmmdO7lC6DgJmxooX%2FVckbv0mwJbKC4JsXW7ZctrKEO8AdBfJOIiKpcGXNWBYCz5QHfBKxSVjVQSjEg%2BND1Pu4tX4lY3Tbrq6%2FyaVpPiKsMPXq9r8GOqUB%2FiqK64EVLTjk2d3fCfSg59O3dGNTsnRgH2UZSCdOli4O7sLOzT79bMI3aXLcYJ6Milm6BJUznzw5V2JDuhffQOUnECm2EWOEkgu8wJZlBSlazYhV8xLEkWtPERs2%2BRYSIGT4I2fPnxmv%2BwdSjBsiEOp7eT1b9YPIpoI0UiccfE7KFpxHZISQ8c3cOiseNuvr3wxCdoh5O1QEdMrmwSxx32%2BGYoYJ&X-Amz-Signature=9d5173ee9ae082d57a6bea5574501d9c785bd2251e2bd4a93bb2bdd59ec5b23c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JPJGWHM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T022252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVsLPM8xFMWlPk6X7yV2PIOrGQv%2FNyDB2gi%2BvxYxPOjAIgJ3i3gub%2B78TWxy438CuaxsEoBa%2F3%2B8d7ps1zA0wMOCcq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDK5AbjwBgtdbeG2RbyrcA1b5e%2FINEUhQqoqYf%2BYO86%2BDiR6ceDiJHwk8uOmOGvhK0hwqdlyDcbwFpQR2EOrAZmYhRI0%2ByUHyuV1WpcbPoK1RjfIctXQLqVOUDN2UMSsLkKITExw8Lj5K6aPzcC6nmwPp1UAuHYnPYQTIrib3Fd22JN3VktUgSSxvVkzRrUbn%2BB84Q31Oip8LoP23Kd3zGABfTlZ%2BE355lG0RX4MT9sJGBSmejYhwPj5WuixOqEbHEB11uvFPX782VKuNfGjIH4F57%2BGcmg1zg7toq%2BWIw9g%2FSuvEueZMljmdJtkIOXPquY1bTGkQoX4owk%2BxsC8DGGo9SyUx90jLyAul5Q%2BOjCa4gpanC4Xd8rlgU24gNxTgZmAKTBG5Gmd8a5sPv%2FlIA8OWw490lMs5cFqaLb3cxSmV95EPyBk3O656aQf3RMqOqfMhcT%2BN8Kr7lhIKcorXf00rc0%2BStgdLzWDXPVUHL%2FRy4afNWndaqFja%2B5fNdeitAI0GwrqJ8437qgMs6uOGotpc7ZXo5puvGl2MUPBmmdO7lC6DgJmxooX%2FVckbv0mwJbKC4JsXW7ZctrKEO8AdBfJOIiKpcGXNWBYCz5QHfBKxSVjVQSjEg%2BND1Pu4tX4lY3Tbrq6%2FyaVpPiKsMPXq9r8GOqUB%2FiqK64EVLTjk2d3fCfSg59O3dGNTsnRgH2UZSCdOli4O7sLOzT79bMI3aXLcYJ6Milm6BJUznzw5V2JDuhffQOUnECm2EWOEkgu8wJZlBSlazYhV8xLEkWtPERs2%2BRYSIGT4I2fPnxmv%2BwdSjBsiEOp7eT1b9YPIpoI0UiccfE7KFpxHZISQ8c3cOiseNuvr3wxCdoh5O1QEdMrmwSxx32%2BGYoYJ&X-Amz-Signature=5060cafc4860baa5909860282d51431b4b95656771d49df5214557687945b1a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

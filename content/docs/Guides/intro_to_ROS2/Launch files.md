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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XODSYZ4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnAmtce7RPTPIuukhVy9cK3kfabw%2FSaUoEyuT2VgjEFgIgeDCoZZd4WwuIEERzkj%2FCUDfUouFECfyu4Dweghq0wRkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsNP%2F05E%2BHfmeLDwircA3nvWgIr%2Fw3QPteELigXmp1aDdaajgiqiCJMmayz1eFtpIu6hl0S49pHuUx5e2Vd05iCM3E0fcAsdBPngTHzh2GqlOi79e2vRu6%2FTAxIQ1epynJmLolBZ4k4qXYgUnW91GCuTCPIbe2iUkq3qIQrb%2BifJVfJ4i9RcSjoVxnTQ%2FDIvKNFifcNoFebPN00mzqXsLo%2B7S3hQbsuX7Y%2FpSX3E8RNvwvpTAWMJ0MELR0tJlKbToPgs9MtO5fbynqTNGkwuWtCWEYa%2BT1EHVPDbn6LvFYgulPTBvZ%2B1m1ilpQEQz264ihpB0mAKdrtkhZ8olrpaygEmQD%2FyiVmAlM12Bu1kLrWoBnF9fpTzbfp6x854Del%2B7L%2BE9oWb9HteqCHDavOcPv9OU69B03rVTcFm71%2BLVfC4s4nPIvibOiZdU804hznQ%2BG1ID4B6d1yLcTe5fEOkv9LkOjucd2Euw7GYKi5C0XyRLbA%2BhaZ%2FAndhS6XQySKNIubrXHYkmCbBQzqJzZWqql4XGvy5g5X1qn%2BD2qbEiYmkuUvRzoQIrGm9XEfyNc7yIRQT8J1%2F079%2BgV4Rv3XyCKy3Jyo0nZRkKKz6MTl%2FMnapooDIeEmpKM8pyKNPR78bCTVpVPwk2NUa6c1MPH90coGOqUBbVmY0E595AXcv0bawjDjcU%2BJBIAfeoHSUw6iAbQkKMwyLnnm7KE5dIdVaX0qCmyvbVt5x4kq1JwtJktIXcOxKzzmn8rpvJq04ymkD94PlCvrhMPL9LiNYB31Yud%2B73fMHorhquiOMk3IfCFmkvxCLYmM4tPppF%2FWTnQes9d4eSzOPShh59PVVHneSMO6HcMontM7FVVjwgGeHLXCNeIfaS%2FY2U5u&X-Amz-Signature=75fa48c6336399c141b4aa8e2cd73ad4b428d6df10a666095d94c3b40d48392d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XODSYZ4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnAmtce7RPTPIuukhVy9cK3kfabw%2FSaUoEyuT2VgjEFgIgeDCoZZd4WwuIEERzkj%2FCUDfUouFECfyu4Dweghq0wRkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsNP%2F05E%2BHfmeLDwircA3nvWgIr%2Fw3QPteELigXmp1aDdaajgiqiCJMmayz1eFtpIu6hl0S49pHuUx5e2Vd05iCM3E0fcAsdBPngTHzh2GqlOi79e2vRu6%2FTAxIQ1epynJmLolBZ4k4qXYgUnW91GCuTCPIbe2iUkq3qIQrb%2BifJVfJ4i9RcSjoVxnTQ%2FDIvKNFifcNoFebPN00mzqXsLo%2B7S3hQbsuX7Y%2FpSX3E8RNvwvpTAWMJ0MELR0tJlKbToPgs9MtO5fbynqTNGkwuWtCWEYa%2BT1EHVPDbn6LvFYgulPTBvZ%2B1m1ilpQEQz264ihpB0mAKdrtkhZ8olrpaygEmQD%2FyiVmAlM12Bu1kLrWoBnF9fpTzbfp6x854Del%2B7L%2BE9oWb9HteqCHDavOcPv9OU69B03rVTcFm71%2BLVfC4s4nPIvibOiZdU804hznQ%2BG1ID4B6d1yLcTe5fEOkv9LkOjucd2Euw7GYKi5C0XyRLbA%2BhaZ%2FAndhS6XQySKNIubrXHYkmCbBQzqJzZWqql4XGvy5g5X1qn%2BD2qbEiYmkuUvRzoQIrGm9XEfyNc7yIRQT8J1%2F079%2BgV4Rv3XyCKy3Jyo0nZRkKKz6MTl%2FMnapooDIeEmpKM8pyKNPR78bCTVpVPwk2NUa6c1MPH90coGOqUBbVmY0E595AXcv0bawjDjcU%2BJBIAfeoHSUw6iAbQkKMwyLnnm7KE5dIdVaX0qCmyvbVt5x4kq1JwtJktIXcOxKzzmn8rpvJq04ymkD94PlCvrhMPL9LiNYB31Yud%2B73fMHorhquiOMk3IfCFmkvxCLYmM4tPppF%2FWTnQes9d4eSzOPShh59PVVHneSMO6HcMontM7FVVjwgGeHLXCNeIfaS%2FY2U5u&X-Amz-Signature=5f35ca411e68e37df6008b5ecf7a27543898d567155774f35e2533a755b8c001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XODSYZ4%2F20251231%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251231T014619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnAmtce7RPTPIuukhVy9cK3kfabw%2FSaUoEyuT2VgjEFgIgeDCoZZd4WwuIEERzkj%2FCUDfUouFECfyu4Dweghq0wRkqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHsNP%2F05E%2BHfmeLDwircA3nvWgIr%2Fw3QPteELigXmp1aDdaajgiqiCJMmayz1eFtpIu6hl0S49pHuUx5e2Vd05iCM3E0fcAsdBPngTHzh2GqlOi79e2vRu6%2FTAxIQ1epynJmLolBZ4k4qXYgUnW91GCuTCPIbe2iUkq3qIQrb%2BifJVfJ4i9RcSjoVxnTQ%2FDIvKNFifcNoFebPN00mzqXsLo%2B7S3hQbsuX7Y%2FpSX3E8RNvwvpTAWMJ0MELR0tJlKbToPgs9MtO5fbynqTNGkwuWtCWEYa%2BT1EHVPDbn6LvFYgulPTBvZ%2B1m1ilpQEQz264ihpB0mAKdrtkhZ8olrpaygEmQD%2FyiVmAlM12Bu1kLrWoBnF9fpTzbfp6x854Del%2B7L%2BE9oWb9HteqCHDavOcPv9OU69B03rVTcFm71%2BLVfC4s4nPIvibOiZdU804hznQ%2BG1ID4B6d1yLcTe5fEOkv9LkOjucd2Euw7GYKi5C0XyRLbA%2BhaZ%2FAndhS6XQySKNIubrXHYkmCbBQzqJzZWqql4XGvy5g5X1qn%2BD2qbEiYmkuUvRzoQIrGm9XEfyNc7yIRQT8J1%2F079%2BgV4Rv3XyCKy3Jyo0nZRkKKz6MTl%2FMnapooDIeEmpKM8pyKNPR78bCTVpVPwk2NUa6c1MPH90coGOqUBbVmY0E595AXcv0bawjDjcU%2BJBIAfeoHSUw6iAbQkKMwyLnnm7KE5dIdVaX0qCmyvbVt5x4kq1JwtJktIXcOxKzzmn8rpvJq04ymkD94PlCvrhMPL9LiNYB31Yud%2B73fMHorhquiOMk3IfCFmkvxCLYmM4tPppF%2FWTnQes9d4eSzOPShh59PVVHneSMO6HcMontM7FVVjwgGeHLXCNeIfaS%2FY2U5u&X-Amz-Signature=f9bda24c0f0a1c3e7d674acc5895fc1a9e23545737b15083ae25417b2af4cf0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

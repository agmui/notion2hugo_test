---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6Z6TJR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx5ebyOf2HG5ccNMSx7R%2F5%2BePGHhKdGUDFWxcfXj0jEQIhAM2dU%2FETVGese24sqLEpGmvpTXFvik4mFK958Geq3EtgKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNyx3ghvV6HLVqpSUq3AMa1PvcjIIvoZOw2H8EIcOQu4p14IoRjlx%2BrRQzK0uFUjcpWaOhr3d1iS0sDmeP203fl48fJAPWDT6Bf99tqGahVx%2FZwbx7m5xU2ER1dE517RsGuiu1RxzIzq9TB%2BMWbonV1WpDiC9uITmf97msHoLtZ3Zh0NTEi4X5k8WhFrx1G3ypijpCbCmtHlnYxNJElqXGgowyoqrGy4UUUNu2ekuOC2%2BKDbjRJit5Fxr%2FPrelMqF8HtvtlyDVzLWyRgMpUKN8skKsKugJuWEBccRQ%2Fw8QRWEsQVAysTB15frHkQf1lAcUstgSapVJV%2B1PsHfv33KJ1yWbDPSEZdtdlC5QrCUdRh%2FTeZ9nji%2BTio86k%2BvjMqtUBrcFnHvFZCmGytLhi2kkQjdhtc438RxELcFur0p3pntUAncTQHTVDsV%2Fjrht06GWFKZC0AEbGiqfyiEN%2Ber%2B1vYYR6BJ5qq5%2BZwUjmnLCu%2Fqg%2B6NRXLTKw%2FkwEIIosGrfI%2BtcsNxBTyJAEpBNbLFIxKv9fghTkrYWh4t2ztQanoZ%2FPZL5i5syjMRo5cRoK5VKN6hl7%2Bt%2FwMYNaTuePUqjzCp3dPkv%2Fg9rtE9BKavI5SIUqshsrgd7Q31fAHtmC9cjQPH6vRnDhAzlzC%2BzK%2FEBjqkASQ0qtTXFWQ%2F6%2BxRBMsCD810LutdWj1JXH4gCnLJcIc2LhrS3xTNT4VmiaSoYiD9vuT2clPIfhVnR338%2FvIK5fx9Jp7Yxkb%2FcEJbo%2FEne%2BtggMkYvLcUWqf7sEkF5oSppscZLuPoPaPRTzdm4T40L%2FB0orKR%2FMkoyNAQXmBcu7jSLUPkPSAEI2pDxR1sYCTS9FnN358s%2FeMHd1reKtSC9HWd8ICF&X-Amz-Signature=8904aca572b683d0d78c7ae4ae4217a714da601e5da434806cb057aa3cbe781d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6Z6TJR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx5ebyOf2HG5ccNMSx7R%2F5%2BePGHhKdGUDFWxcfXj0jEQIhAM2dU%2FETVGese24sqLEpGmvpTXFvik4mFK958Geq3EtgKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNyx3ghvV6HLVqpSUq3AMa1PvcjIIvoZOw2H8EIcOQu4p14IoRjlx%2BrRQzK0uFUjcpWaOhr3d1iS0sDmeP203fl48fJAPWDT6Bf99tqGahVx%2FZwbx7m5xU2ER1dE517RsGuiu1RxzIzq9TB%2BMWbonV1WpDiC9uITmf97msHoLtZ3Zh0NTEi4X5k8WhFrx1G3ypijpCbCmtHlnYxNJElqXGgowyoqrGy4UUUNu2ekuOC2%2BKDbjRJit5Fxr%2FPrelMqF8HtvtlyDVzLWyRgMpUKN8skKsKugJuWEBccRQ%2Fw8QRWEsQVAysTB15frHkQf1lAcUstgSapVJV%2B1PsHfv33KJ1yWbDPSEZdtdlC5QrCUdRh%2FTeZ9nji%2BTio86k%2BvjMqtUBrcFnHvFZCmGytLhi2kkQjdhtc438RxELcFur0p3pntUAncTQHTVDsV%2Fjrht06GWFKZC0AEbGiqfyiEN%2Ber%2B1vYYR6BJ5qq5%2BZwUjmnLCu%2Fqg%2B6NRXLTKw%2FkwEIIosGrfI%2BtcsNxBTyJAEpBNbLFIxKv9fghTkrYWh4t2ztQanoZ%2FPZL5i5syjMRo5cRoK5VKN6hl7%2Bt%2FwMYNaTuePUqjzCp3dPkv%2Fg9rtE9BKavI5SIUqshsrgd7Q31fAHtmC9cjQPH6vRnDhAzlzC%2BzK%2FEBjqkASQ0qtTXFWQ%2F6%2BxRBMsCD810LutdWj1JXH4gCnLJcIc2LhrS3xTNT4VmiaSoYiD9vuT2clPIfhVnR338%2FvIK5fx9Jp7Yxkb%2FcEJbo%2FEne%2BtggMkYvLcUWqf7sEkF5oSppscZLuPoPaPRTzdm4T40L%2FB0orKR%2FMkoyNAQXmBcu7jSLUPkPSAEI2pDxR1sYCTS9FnN358s%2FeMHd1reKtSC9HWd8ICF&X-Amz-Signature=3cf8b44a9738fb98eba5e37f2977c28b6a3e24516c68e3d5eba06e650c443460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6Z6TJR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx5ebyOf2HG5ccNMSx7R%2F5%2BePGHhKdGUDFWxcfXj0jEQIhAM2dU%2FETVGese24sqLEpGmvpTXFvik4mFK958Geq3EtgKogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNyx3ghvV6HLVqpSUq3AMa1PvcjIIvoZOw2H8EIcOQu4p14IoRjlx%2BrRQzK0uFUjcpWaOhr3d1iS0sDmeP203fl48fJAPWDT6Bf99tqGahVx%2FZwbx7m5xU2ER1dE517RsGuiu1RxzIzq9TB%2BMWbonV1WpDiC9uITmf97msHoLtZ3Zh0NTEi4X5k8WhFrx1G3ypijpCbCmtHlnYxNJElqXGgowyoqrGy4UUUNu2ekuOC2%2BKDbjRJit5Fxr%2FPrelMqF8HtvtlyDVzLWyRgMpUKN8skKsKugJuWEBccRQ%2Fw8QRWEsQVAysTB15frHkQf1lAcUstgSapVJV%2B1PsHfv33KJ1yWbDPSEZdtdlC5QrCUdRh%2FTeZ9nji%2BTio86k%2BvjMqtUBrcFnHvFZCmGytLhi2kkQjdhtc438RxELcFur0p3pntUAncTQHTVDsV%2Fjrht06GWFKZC0AEbGiqfyiEN%2Ber%2B1vYYR6BJ5qq5%2BZwUjmnLCu%2Fqg%2B6NRXLTKw%2FkwEIIosGrfI%2BtcsNxBTyJAEpBNbLFIxKv9fghTkrYWh4t2ztQanoZ%2FPZL5i5syjMRo5cRoK5VKN6hl7%2Bt%2FwMYNaTuePUqjzCp3dPkv%2Fg9rtE9BKavI5SIUqshsrgd7Q31fAHtmC9cjQPH6vRnDhAzlzC%2BzK%2FEBjqkASQ0qtTXFWQ%2F6%2BxRBMsCD810LutdWj1JXH4gCnLJcIc2LhrS3xTNT4VmiaSoYiD9vuT2clPIfhVnR338%2FvIK5fx9Jp7Yxkb%2FcEJbo%2FEne%2BtggMkYvLcUWqf7sEkF5oSppscZLuPoPaPRTzdm4T40L%2FB0orKR%2FMkoyNAQXmBcu7jSLUPkPSAEI2pDxR1sYCTS9FnN358s%2FeMHd1reKtSC9HWd8ICF&X-Amz-Signature=2df23d7c6848cbac9b77c468b0d66f5ca977c4364807a21e0c06c50ec53eb457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARI7NGV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMtYNIr9O7i5ZZE0EbXI8fGYUfbLnaPBQPY7Lhc17tmAiB%2FKBXDpcKFA8Jx8nWRcM92%2FST0dsR1QJduD1TaCXotHyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFz2BpIp613qwAmqIKtwDoZtuiphplULAFsT%2FbcCND7rwnw9RXOJ0fX09zXp8x3rx0puguWg2H37xK0SK%2FF4H6t6LFABBLOqGFh%2FVLlyirYK8rhXXI%2FVMqvtNRn7h%2FptatA6dda2LwMgoPUCg%2FPUwUgci7%2FNJCM2QyDw4aX4PE4s1CROUUpFDokWbGMew95cTdJWpjOzy15VEzjfy8OLtkCzQ5h4N2gxJ8I70OUNvPVtFcyF2KUPupmCy62%2FrzD9zt5J8GtvKM1D2C4Un9Qfvcekj90adLg73Qsv0ujAuPTVxZ0At%2FbqeG2HthdROeb3D9fuk0aMWxDVvGE71rVtWk0rBewK0Jsuqvq1gCOS6SJZAlfGw8Km%2Byvffxq%2FVBYdouCSQH6ysLhXCYgnZWc17DDIR%2Bfzes350xlJ113GLUQmeSdOgYzPh2GvnteCQdtLBMXvHhRXtWkNal13MHxse6TcAEU7VVTBU5AQ4G4om5iNlszOBdqjpkBpX1h65x6XAuMBC8TkJdhsYv7eiaZRvn1do7foc1Dw2TcVTfVaSPpXZGSNyjOjEE20P1VDuc7H4g4pKZX%2BlgLizqZs%2F6P%2BUizQZHxMPgRY8NiaK%2Fc4BuwesN1rhV9RQPP1NEWepy308FGgsniUQrtMVPZsw1KTDwAY6pgFopkSKy97jYs%2FzuK9DhcMYLYOR7pasee%2FGDMMN99at9HlFH40w7aoRKPn7tfSZe4sTEpxB4%2F8iV6O%2FqJ5h9tKPHJZYvo1qOvrw%2Bzbn9AZPldMA8oDxpsBf63xQq0EKp1U80f8YCZXj2T8UaFcunQKcOKvmgleOgc1Qf4xAXuiWg9ubI8%2FdC6dWjpj0FJCCBmx9C9qJuBZBgscEOZI36QZPwaMKK2yT&X-Amz-Signature=68e5d5d0a93c4a6e70f00121f9c5d309c30b39923b946f2a660c496b87605143&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARI7NGV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMtYNIr9O7i5ZZE0EbXI8fGYUfbLnaPBQPY7Lhc17tmAiB%2FKBXDpcKFA8Jx8nWRcM92%2FST0dsR1QJduD1TaCXotHyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFz2BpIp613qwAmqIKtwDoZtuiphplULAFsT%2FbcCND7rwnw9RXOJ0fX09zXp8x3rx0puguWg2H37xK0SK%2FF4H6t6LFABBLOqGFh%2FVLlyirYK8rhXXI%2FVMqvtNRn7h%2FptatA6dda2LwMgoPUCg%2FPUwUgci7%2FNJCM2QyDw4aX4PE4s1CROUUpFDokWbGMew95cTdJWpjOzy15VEzjfy8OLtkCzQ5h4N2gxJ8I70OUNvPVtFcyF2KUPupmCy62%2FrzD9zt5J8GtvKM1D2C4Un9Qfvcekj90adLg73Qsv0ujAuPTVxZ0At%2FbqeG2HthdROeb3D9fuk0aMWxDVvGE71rVtWk0rBewK0Jsuqvq1gCOS6SJZAlfGw8Km%2Byvffxq%2FVBYdouCSQH6ysLhXCYgnZWc17DDIR%2Bfzes350xlJ113GLUQmeSdOgYzPh2GvnteCQdtLBMXvHhRXtWkNal13MHxse6TcAEU7VVTBU5AQ4G4om5iNlszOBdqjpkBpX1h65x6XAuMBC8TkJdhsYv7eiaZRvn1do7foc1Dw2TcVTfVaSPpXZGSNyjOjEE20P1VDuc7H4g4pKZX%2BlgLizqZs%2F6P%2BUizQZHxMPgRY8NiaK%2Fc4BuwesN1rhV9RQPP1NEWepy308FGgsniUQrtMVPZsw1KTDwAY6pgFopkSKy97jYs%2FzuK9DhcMYLYOR7pasee%2FGDMMN99at9HlFH40w7aoRKPn7tfSZe4sTEpxB4%2F8iV6O%2FqJ5h9tKPHJZYvo1qOvrw%2Bzbn9AZPldMA8oDxpsBf63xQq0EKp1U80f8YCZXj2T8UaFcunQKcOKvmgleOgc1Qf4xAXuiWg9ubI8%2FdC6dWjpj0FJCCBmx9C9qJuBZBgscEOZI36QZPwaMKK2yT&X-Amz-Signature=777bc6673e78f51fa6b02be3c9ad3b907c7d20d6e220708b0e5408198efcf43f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ARI7NGV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T140907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMtYNIr9O7i5ZZE0EbXI8fGYUfbLnaPBQPY7Lhc17tmAiB%2FKBXDpcKFA8Jx8nWRcM92%2FST0dsR1QJduD1TaCXotHyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFz2BpIp613qwAmqIKtwDoZtuiphplULAFsT%2FbcCND7rwnw9RXOJ0fX09zXp8x3rx0puguWg2H37xK0SK%2FF4H6t6LFABBLOqGFh%2FVLlyirYK8rhXXI%2FVMqvtNRn7h%2FptatA6dda2LwMgoPUCg%2FPUwUgci7%2FNJCM2QyDw4aX4PE4s1CROUUpFDokWbGMew95cTdJWpjOzy15VEzjfy8OLtkCzQ5h4N2gxJ8I70OUNvPVtFcyF2KUPupmCy62%2FrzD9zt5J8GtvKM1D2C4Un9Qfvcekj90adLg73Qsv0ujAuPTVxZ0At%2FbqeG2HthdROeb3D9fuk0aMWxDVvGE71rVtWk0rBewK0Jsuqvq1gCOS6SJZAlfGw8Km%2Byvffxq%2FVBYdouCSQH6ysLhXCYgnZWc17DDIR%2Bfzes350xlJ113GLUQmeSdOgYzPh2GvnteCQdtLBMXvHhRXtWkNal13MHxse6TcAEU7VVTBU5AQ4G4om5iNlszOBdqjpkBpX1h65x6XAuMBC8TkJdhsYv7eiaZRvn1do7foc1Dw2TcVTfVaSPpXZGSNyjOjEE20P1VDuc7H4g4pKZX%2BlgLizqZs%2F6P%2BUizQZHxMPgRY8NiaK%2Fc4BuwesN1rhV9RQPP1NEWepy308FGgsniUQrtMVPZsw1KTDwAY6pgFopkSKy97jYs%2FzuK9DhcMYLYOR7pasee%2FGDMMN99at9HlFH40w7aoRKPn7tfSZe4sTEpxB4%2F8iV6O%2FqJ5h9tKPHJZYvo1qOvrw%2Bzbn9AZPldMA8oDxpsBf63xQq0EKp1U80f8YCZXj2T8UaFcunQKcOKvmgleOgc1Qf4xAXuiWg9ubI8%2FdC6dWjpj0FJCCBmx9C9qJuBZBgscEOZI36QZPwaMKK2yT&X-Amz-Signature=6d49d1e331cc1c1ed510a0cccf52ba6472fa8201cd32536856ecd850f4db7f42&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HGFQI7D%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW4UXU7whqYPRm8fbpTz6aaSibtNPNUOF3%2BX7%2BOcMLlAiEAiARTvmiFPvVjOSc8memYrjARfcUdAQBGiFxbOUoKqiEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDMfH1ZglwHHdvHsPQSrcA8k6pAb1L7%2FbsRfAWzikYF8GpCpnMK2Uj34lUUWSeIFtW9voECDg013hQ3Us%2FbmbMjTcDN91uHvQVTACDO26hjGvbVRAGbuPEt5SSH%2FPNaIsOsLe8VHCEO36%2BqdsBykJKCsIVfsn8Qyesf9gxbbRCMGGvPSsTwySKKbYBZs9VxcLNflmKpFJfPcvhCvD%2BAD0PeH8LugP3%2F5229yNq%2FEVMf6lU%2F72cRaphpKo8IP2hajUjPxBR2KyHhVUwTQnJVnOJV8zIIA71vn6zQuzFHCSMoBD%2FabMh00gd3yjkbD30ow5rhRKci22oQiKR%2FFbY4ag0pYrTw9odvIZLUxvwgnVBTF4xzTLe4fDwYrZ7Hke8rFty1%2F%2BaQBWgpdFH2FxMuad2%2FGVjenBs5y5mu%2BzRp9RxIjxnFiD%2BG0NnfL5n8ApkSX9Wx7eIkr8TlL8aXJMU6urPUcqL0fo43qqMcyZl0ZTSu9ocUz%2FqKT8Fpz9QhnbODeJ799P8%2BpPXnXJ2qL29B6uTVgA9fBZd%2F9wk6Smasn%2FbCRP%2Bx3WCB1J2lbISfwRgyVmEMOpuBbalvyH4aGgWrJAQZYHy%2BWlCpapQjLY5MllJuQ3lPQil71SrXVa6IBOvuFNASKdwMgO2RnUasd5MJ%2BVj8IGOqUB7wiAh49qaNf3GwQdHq%2FDAifdR%2BOpXOOhhglDkP4lbdUbZhrZb0BpzFAsr9nitXOSXes26Q80CNimcBfDcE5Z8hl%2F6Xx0MPEKxARzyG4umkJ%2F%2B4veAaYtgErhRi%2FyzCU0%2BigpbFXuVS5IWBRednpN2Ic5JbfENAftJ%2FoGfQjf2bE8iubzQv6cRYdFx6hN%2BDgtOiOWghQHR3%2B7Gs9m8XYNA1AJPvkE&X-Amz-Signature=f85dad421a3ecd69fdf27cce96a0f95533aeaccd261ad7808d44ef699c1bb6e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HGFQI7D%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW4UXU7whqYPRm8fbpTz6aaSibtNPNUOF3%2BX7%2BOcMLlAiEAiARTvmiFPvVjOSc8memYrjARfcUdAQBGiFxbOUoKqiEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDMfH1ZglwHHdvHsPQSrcA8k6pAb1L7%2FbsRfAWzikYF8GpCpnMK2Uj34lUUWSeIFtW9voECDg013hQ3Us%2FbmbMjTcDN91uHvQVTACDO26hjGvbVRAGbuPEt5SSH%2FPNaIsOsLe8VHCEO36%2BqdsBykJKCsIVfsn8Qyesf9gxbbRCMGGvPSsTwySKKbYBZs9VxcLNflmKpFJfPcvhCvD%2BAD0PeH8LugP3%2F5229yNq%2FEVMf6lU%2F72cRaphpKo8IP2hajUjPxBR2KyHhVUwTQnJVnOJV8zIIA71vn6zQuzFHCSMoBD%2FabMh00gd3yjkbD30ow5rhRKci22oQiKR%2FFbY4ag0pYrTw9odvIZLUxvwgnVBTF4xzTLe4fDwYrZ7Hke8rFty1%2F%2BaQBWgpdFH2FxMuad2%2FGVjenBs5y5mu%2BzRp9RxIjxnFiD%2BG0NnfL5n8ApkSX9Wx7eIkr8TlL8aXJMU6urPUcqL0fo43qqMcyZl0ZTSu9ocUz%2FqKT8Fpz9QhnbODeJ799P8%2BpPXnXJ2qL29B6uTVgA9fBZd%2F9wk6Smasn%2FbCRP%2Bx3WCB1J2lbISfwRgyVmEMOpuBbalvyH4aGgWrJAQZYHy%2BWlCpapQjLY5MllJuQ3lPQil71SrXVa6IBOvuFNASKdwMgO2RnUasd5MJ%2BVj8IGOqUB7wiAh49qaNf3GwQdHq%2FDAifdR%2BOpXOOhhglDkP4lbdUbZhrZb0BpzFAsr9nitXOSXes26Q80CNimcBfDcE5Z8hl%2F6Xx0MPEKxARzyG4umkJ%2F%2B4veAaYtgErhRi%2FyzCU0%2BigpbFXuVS5IWBRednpN2Ic5JbfENAftJ%2FoGfQjf2bE8iubzQv6cRYdFx6hN%2BDgtOiOWghQHR3%2B7Gs9m8XYNA1AJPvkE&X-Amz-Signature=60b3689cc6ebfadc1c611e9d8b122902218f1155f2eb7c34c798a2f999887c13&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HGFQI7D%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW4UXU7whqYPRm8fbpTz6aaSibtNPNUOF3%2BX7%2BOcMLlAiEAiARTvmiFPvVjOSc8memYrjARfcUdAQBGiFxbOUoKqiEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDMfH1ZglwHHdvHsPQSrcA8k6pAb1L7%2FbsRfAWzikYF8GpCpnMK2Uj34lUUWSeIFtW9voECDg013hQ3Us%2FbmbMjTcDN91uHvQVTACDO26hjGvbVRAGbuPEt5SSH%2FPNaIsOsLe8VHCEO36%2BqdsBykJKCsIVfsn8Qyesf9gxbbRCMGGvPSsTwySKKbYBZs9VxcLNflmKpFJfPcvhCvD%2BAD0PeH8LugP3%2F5229yNq%2FEVMf6lU%2F72cRaphpKo8IP2hajUjPxBR2KyHhVUwTQnJVnOJV8zIIA71vn6zQuzFHCSMoBD%2FabMh00gd3yjkbD30ow5rhRKci22oQiKR%2FFbY4ag0pYrTw9odvIZLUxvwgnVBTF4xzTLe4fDwYrZ7Hke8rFty1%2F%2BaQBWgpdFH2FxMuad2%2FGVjenBs5y5mu%2BzRp9RxIjxnFiD%2BG0NnfL5n8ApkSX9Wx7eIkr8TlL8aXJMU6urPUcqL0fo43qqMcyZl0ZTSu9ocUz%2FqKT8Fpz9QhnbODeJ799P8%2BpPXnXJ2qL29B6uTVgA9fBZd%2F9wk6Smasn%2FbCRP%2Bx3WCB1J2lbISfwRgyVmEMOpuBbalvyH4aGgWrJAQZYHy%2BWlCpapQjLY5MllJuQ3lPQil71SrXVa6IBOvuFNASKdwMgO2RnUasd5MJ%2BVj8IGOqUB7wiAh49qaNf3GwQdHq%2FDAifdR%2BOpXOOhhglDkP4lbdUbZhrZb0BpzFAsr9nitXOSXes26Q80CNimcBfDcE5Z8hl%2F6Xx0MPEKxARzyG4umkJ%2F%2B4veAaYtgErhRi%2FyzCU0%2BigpbFXuVS5IWBRednpN2Ic5JbfENAftJ%2FoGfQjf2bE8iubzQv6cRYdFx6hN%2BDgtOiOWghQHR3%2B7Gs9m8XYNA1AJPvkE&X-Amz-Signature=df7aab0ed6c2ada78c601327fd4a5b5fd8850d8b6ca6a193eb05ac77393fb163&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

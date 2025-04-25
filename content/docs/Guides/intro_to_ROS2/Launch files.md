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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25HAOLS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAFTWELw2n3Hr0JfWB2GD%2FYPWxVvDbZa6%2B5SIuY8eqjAIgB5IHBECr4qFxyZeBa8cW%2BiourmfTsjX3DlzHqnF35B4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCEkZ2u7drUv4GirryrcA%2B2%2FMswO%2FsN0EdnsUPXCbQRbugf5TKfLBNO%2BXkCXLD04Osju3jmshrBiFRfhQU7FKJ0e566Cn9R1W9XrNyRIHQe%2B6TgJaeXENo6%2BuqBxedEyAousFwDb%2Bu2sXgWF8pGP%2F9L6XspSLYG%2BHAEdD9DXhLrpz9vzqERiJ%2B5cCybUTqCgwaHl4DLqM7fwdPgBGio3YM7BjJPh2GbpRRN5oX%2BYBW57AeBSO%2BKDhB%2BHWijQAZRFVOdu7YnFsF3Hteu%2FBZyqefW58dDoRgs3j9le3BC0OyxCmlSL%2F4%2FUnSM4l1TiCK782ek5Ye328ewlZGJAcsM9KBLLJrv9ugXR5AYcUjV%2FBF3EWO0w%2Fqbj104Bej24duKH1woZZnnwYCVM7VRuel6ORGowjYLBguYoSb6PKR5ffkRsl9EdZ2njsz4SJ%2B2qiaBPoU%2BL7sCSAnsCKy8b3G%2BUE9DTudnRm2PzuU%2Bt3vATAvuFaAlv1aOUetOykFRrYwnKRCWcYF6rYPlVC7xKvftnaol8Uedz670qdzCLORsQ58%2FrBd13cgp6jw0BaZQBPlXaEIpEXIdgyzUoUoh9w999uKtlNRtBRsBozT4LNwba%2FiVX%2FcNeYLfP75rJpLpaYRRrS7Y%2FCVryl8dX089kMKz6q8AGOqUBCRT3pezTnWfOPDjF0AVXtOAYg8xeX04dbHba49a9caTNurLzg801%2BYUSJr9zVv3vejCkt21MDQfk3B%2FNHPvmhYyaG9HJ%2FbMlbEec%2FAcxAqJXSGj0Zd17nQZ4H3G7NjH6zWCEz%2FHX66snX4WwKFYqSxb4kfRYpSC7%2FpbItE2fvdCDK6i6w%2FvD9Iu8gyTzbsbY%2FdnjGACQSiV8P7t3ua%2BSO%2FMGNg8g&X-Amz-Signature=46e2733709ec335452cbad7c64dbcf51d48829e2f71e114eef79c44e6e6aa6cc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25HAOLS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAFTWELw2n3Hr0JfWB2GD%2FYPWxVvDbZa6%2B5SIuY8eqjAIgB5IHBECr4qFxyZeBa8cW%2BiourmfTsjX3DlzHqnF35B4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCEkZ2u7drUv4GirryrcA%2B2%2FMswO%2FsN0EdnsUPXCbQRbugf5TKfLBNO%2BXkCXLD04Osju3jmshrBiFRfhQU7FKJ0e566Cn9R1W9XrNyRIHQe%2B6TgJaeXENo6%2BuqBxedEyAousFwDb%2Bu2sXgWF8pGP%2F9L6XspSLYG%2BHAEdD9DXhLrpz9vzqERiJ%2B5cCybUTqCgwaHl4DLqM7fwdPgBGio3YM7BjJPh2GbpRRN5oX%2BYBW57AeBSO%2BKDhB%2BHWijQAZRFVOdu7YnFsF3Hteu%2FBZyqefW58dDoRgs3j9le3BC0OyxCmlSL%2F4%2FUnSM4l1TiCK782ek5Ye328ewlZGJAcsM9KBLLJrv9ugXR5AYcUjV%2FBF3EWO0w%2Fqbj104Bej24duKH1woZZnnwYCVM7VRuel6ORGowjYLBguYoSb6PKR5ffkRsl9EdZ2njsz4SJ%2B2qiaBPoU%2BL7sCSAnsCKy8b3G%2BUE9DTudnRm2PzuU%2Bt3vATAvuFaAlv1aOUetOykFRrYwnKRCWcYF6rYPlVC7xKvftnaol8Uedz670qdzCLORsQ58%2FrBd13cgp6jw0BaZQBPlXaEIpEXIdgyzUoUoh9w999uKtlNRtBRsBozT4LNwba%2FiVX%2FcNeYLfP75rJpLpaYRRrS7Y%2FCVryl8dX089kMKz6q8AGOqUBCRT3pezTnWfOPDjF0AVXtOAYg8xeX04dbHba49a9caTNurLzg801%2BYUSJr9zVv3vejCkt21MDQfk3B%2FNHPvmhYyaG9HJ%2FbMlbEec%2FAcxAqJXSGj0Zd17nQZ4H3G7NjH6zWCEz%2FHX66snX4WwKFYqSxb4kfRYpSC7%2FpbItE2fvdCDK6i6w%2FvD9Iu8gyTzbsbY%2FdnjGACQSiV8P7t3ua%2BSO%2FMGNg8g&X-Amz-Signature=4bbfa32584e51123dbbe2106fac714f16f2e7462bd2f366bd5f2325632a9ec08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T25HAOLS%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T033021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAFTWELw2n3Hr0JfWB2GD%2FYPWxVvDbZa6%2B5SIuY8eqjAIgB5IHBECr4qFxyZeBa8cW%2BiourmfTsjX3DlzHqnF35B4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDCEkZ2u7drUv4GirryrcA%2B2%2FMswO%2FsN0EdnsUPXCbQRbugf5TKfLBNO%2BXkCXLD04Osju3jmshrBiFRfhQU7FKJ0e566Cn9R1W9XrNyRIHQe%2B6TgJaeXENo6%2BuqBxedEyAousFwDb%2Bu2sXgWF8pGP%2F9L6XspSLYG%2BHAEdD9DXhLrpz9vzqERiJ%2B5cCybUTqCgwaHl4DLqM7fwdPgBGio3YM7BjJPh2GbpRRN5oX%2BYBW57AeBSO%2BKDhB%2BHWijQAZRFVOdu7YnFsF3Hteu%2FBZyqefW58dDoRgs3j9le3BC0OyxCmlSL%2F4%2FUnSM4l1TiCK782ek5Ye328ewlZGJAcsM9KBLLJrv9ugXR5AYcUjV%2FBF3EWO0w%2Fqbj104Bej24duKH1woZZnnwYCVM7VRuel6ORGowjYLBguYoSb6PKR5ffkRsl9EdZ2njsz4SJ%2B2qiaBPoU%2BL7sCSAnsCKy8b3G%2BUE9DTudnRm2PzuU%2Bt3vATAvuFaAlv1aOUetOykFRrYwnKRCWcYF6rYPlVC7xKvftnaol8Uedz670qdzCLORsQ58%2FrBd13cgp6jw0BaZQBPlXaEIpEXIdgyzUoUoh9w999uKtlNRtBRsBozT4LNwba%2FiVX%2FcNeYLfP75rJpLpaYRRrS7Y%2FCVryl8dX089kMKz6q8AGOqUBCRT3pezTnWfOPDjF0AVXtOAYg8xeX04dbHba49a9caTNurLzg801%2BYUSJr9zVv3vejCkt21MDQfk3B%2FNHPvmhYyaG9HJ%2FbMlbEec%2FAcxAqJXSGj0Zd17nQZ4H3G7NjH6zWCEz%2FHX66snX4WwKFYqSxb4kfRYpSC7%2FpbItE2fvdCDK6i6w%2FvD9Iu8gyTzbsbY%2FdnjGACQSiV8P7t3ua%2BSO%2FMGNg8g&X-Amz-Signature=57f1a85287543a771aa7c9fb9bc548d225fbfcb1f412553c7f0cb830d846a476&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

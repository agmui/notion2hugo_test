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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKX6CPD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN3Pt%2Bsqe9yR52D0zR2S7EmEAzD%2FnWjKz4stjIq%2BTNQwIgK6%2BaIimEhhKFSH%2B7eua53vee%2F8QHHN8P6VU75zb2xJQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCaVgamFai5GJhlaSrcA16lFoE1dSmm6U2cuUcspZAh%2FkOhhSj0j3jilL06DYWmckyFUANQuvM3w4HZNG4dybS9spg2U0rYaAYAZ72DwuncoN3ju03nWTE%2Fc9%2BfQYeIjU%2FXzk6IEUVrKtYeNXweyFyUQ48L4KEBU4g8rht4C2ppQny5XUt6O8cdyBymRULNGEyL1XQUvuAsssvKsahdb1%2FyPHtq8Lt%2FPjOlAoifEYfp%2F%2FV7CkIdLS10Fcd6YSIkDg13vjCPVAaS79zI3j%2F4ILSPkgL7bFKuvSyaCMwGN5OFvQL2arxzLHQItfQwVOs9j0scpjPb%2BcOVS%2Bpg7rgOERPnStGyE7wDVvbQv8m4Oc0oumlpNqWZ43Cc8GGvZVpMyiyKiyUwU0WR5JIMYnn9i1asZDeUn9%2BFFwnHks3W%2BNL4%2Flscet5qbIdQ7pPEqAPQKxASXI7OJOcWAXdsm6e%2FlYg5OncdqsenOjILEUxBQkJDHDGnkQUCKHZUC0JN5N01EZ1Mq%2BssilaCSpLdpJs2ywWkP8vPZcSMKpEyRn43hRaBSCBNs1qh9OY3vP43nVCVKx8TFMEZHeTUCWuBooR6QotjUjsY7jdb4tQvVZ%2FGtqIkjli%2FMlK68rMoTjDe0yQYsMo%2FPfOzJTvvlrlbMJPK%2BLwGOqUB2u7ewcrff5RnUSt6s0cK5ejWIVNmz%2FeblIQyBiYr05YmrevKVwbV26VZH531rF6FUOZrPGA3maDbxgBNFfQOQ1Dz86r5GrSYJdvrm3%2FQ2vVHsgjC%2F0pewZuYrBse6soUzKV0XZirdQn0e1NtWNkk3dqoicElyClkBskgniJ936Ug2%2FmSOxjYlP8y9sUZqKbGbhZJG%2BikjEbhJ8IkBGS76X%2FZ3%2BCN&X-Amz-Signature=2554d48ef43d14a9cad556e7397cd3c8dbaa93d95abd3aa5a5f4b068bee74b2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKX6CPD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN3Pt%2Bsqe9yR52D0zR2S7EmEAzD%2FnWjKz4stjIq%2BTNQwIgK6%2BaIimEhhKFSH%2B7eua53vee%2F8QHHN8P6VU75zb2xJQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCaVgamFai5GJhlaSrcA16lFoE1dSmm6U2cuUcspZAh%2FkOhhSj0j3jilL06DYWmckyFUANQuvM3w4HZNG4dybS9spg2U0rYaAYAZ72DwuncoN3ju03nWTE%2Fc9%2BfQYeIjU%2FXzk6IEUVrKtYeNXweyFyUQ48L4KEBU4g8rht4C2ppQny5XUt6O8cdyBymRULNGEyL1XQUvuAsssvKsahdb1%2FyPHtq8Lt%2FPjOlAoifEYfp%2F%2FV7CkIdLS10Fcd6YSIkDg13vjCPVAaS79zI3j%2F4ILSPkgL7bFKuvSyaCMwGN5OFvQL2arxzLHQItfQwVOs9j0scpjPb%2BcOVS%2Bpg7rgOERPnStGyE7wDVvbQv8m4Oc0oumlpNqWZ43Cc8GGvZVpMyiyKiyUwU0WR5JIMYnn9i1asZDeUn9%2BFFwnHks3W%2BNL4%2Flscet5qbIdQ7pPEqAPQKxASXI7OJOcWAXdsm6e%2FlYg5OncdqsenOjILEUxBQkJDHDGnkQUCKHZUC0JN5N01EZ1Mq%2BssilaCSpLdpJs2ywWkP8vPZcSMKpEyRn43hRaBSCBNs1qh9OY3vP43nVCVKx8TFMEZHeTUCWuBooR6QotjUjsY7jdb4tQvVZ%2FGtqIkjli%2FMlK68rMoTjDe0yQYsMo%2FPfOzJTvvlrlbMJPK%2BLwGOqUB2u7ewcrff5RnUSt6s0cK5ejWIVNmz%2FeblIQyBiYr05YmrevKVwbV26VZH531rF6FUOZrPGA3maDbxgBNFfQOQ1Dz86r5GrSYJdvrm3%2FQ2vVHsgjC%2F0pewZuYrBse6soUzKV0XZirdQn0e1NtWNkk3dqoicElyClkBskgniJ936Ug2%2FmSOxjYlP8y9sUZqKbGbhZJG%2BikjEbhJ8IkBGS76X%2FZ3%2BCN&X-Amz-Signature=be49639b5df53befe5135a0aadbaf12a2d592a69190cda311a22646fb7c07224&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKX6CPD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T150252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN3Pt%2Bsqe9yR52D0zR2S7EmEAzD%2FnWjKz4stjIq%2BTNQwIgK6%2BaIimEhhKFSH%2B7eua53vee%2F8QHHN8P6VU75zb2xJQqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLCaVgamFai5GJhlaSrcA16lFoE1dSmm6U2cuUcspZAh%2FkOhhSj0j3jilL06DYWmckyFUANQuvM3w4HZNG4dybS9spg2U0rYaAYAZ72DwuncoN3ju03nWTE%2Fc9%2BfQYeIjU%2FXzk6IEUVrKtYeNXweyFyUQ48L4KEBU4g8rht4C2ppQny5XUt6O8cdyBymRULNGEyL1XQUvuAsssvKsahdb1%2FyPHtq8Lt%2FPjOlAoifEYfp%2F%2FV7CkIdLS10Fcd6YSIkDg13vjCPVAaS79zI3j%2F4ILSPkgL7bFKuvSyaCMwGN5OFvQL2arxzLHQItfQwVOs9j0scpjPb%2BcOVS%2Bpg7rgOERPnStGyE7wDVvbQv8m4Oc0oumlpNqWZ43Cc8GGvZVpMyiyKiyUwU0WR5JIMYnn9i1asZDeUn9%2BFFwnHks3W%2BNL4%2Flscet5qbIdQ7pPEqAPQKxASXI7OJOcWAXdsm6e%2FlYg5OncdqsenOjILEUxBQkJDHDGnkQUCKHZUC0JN5N01EZ1Mq%2BssilaCSpLdpJs2ywWkP8vPZcSMKpEyRn43hRaBSCBNs1qh9OY3vP43nVCVKx8TFMEZHeTUCWuBooR6QotjUjsY7jdb4tQvVZ%2FGtqIkjli%2FMlK68rMoTjDe0yQYsMo%2FPfOzJTvvlrlbMJPK%2BLwGOqUB2u7ewcrff5RnUSt6s0cK5ejWIVNmz%2FeblIQyBiYr05YmrevKVwbV26VZH531rF6FUOZrPGA3maDbxgBNFfQOQ1Dz86r5GrSYJdvrm3%2FQ2vVHsgjC%2F0pewZuYrBse6soUzKV0XZirdQn0e1NtWNkk3dqoicElyClkBskgniJ936Ug2%2FmSOxjYlP8y9sUZqKbGbhZJG%2BikjEbhJ8IkBGS76X%2FZ3%2BCN&X-Amz-Signature=24eff063ebfce7e36e19ad0eb6a22afd337f8e7c35b8d5f983078dc5e35e742d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

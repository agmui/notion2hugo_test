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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZFKSFSL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR667tLk3UoDlLx40tkkH3TzEN%2F1YiHD%2FpmQRXDcv9fAIhAM4dwKTUs3E%2FS0EZlGNO08jKznlivqikCIqksECiEqUvKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzM6dAtbguOSzrrnj4q3ANKDlJpSUCs9jShlXmm5Oh1ZaIWzdsZ%2BHccrMjy3DZFdzOZAVePAVX5xMDBQFbINrDvhiKS6XCqFwfI7wIkhAetowNm4gxVljYEUY0%2FbezaRioMTfi5ZhBbwdaOMNFV7qRox9PgfkHgRfv9gdkKpg4lqEzrEXQ5SnH6C4ndsbdZ8VFm96PC4Zg0v6OOJ7ueMRZARnlQRu8Ml57F%2BnIVaGa4oJ%2FgV%2BhnsJ91EL5jAtZazt3qOy8tODJJ11eFZfJXnVV6ptzTh8IndXxKLR3vSEOk1lB37c95IKHZ5k2cNbn%2FP9gp1GuGOzUUm9lM0vLTSzaNItg5PdWEjtxjWaH4KYsGw9rMM%2FcOih0AFkEjwMsDoyFVAOhjm06O5lxeOyxiFcIarTwyC60%2F6Y1vw%2Bt6TYDi%2BYoYZwAtrk812sskEBLArAa0msAXHP22l0X9mynkY8bHE%2FBOpMVPd2qUIXyDR1ZngICAlHMis9VgRW8WT16kd4muz8iVN8sWjGB3a1yDhX22n834fyfLqpglt13RRdKZONH7q7%2FefnehdKNiSTatJNiaI2b%2F%2FxCmZ7TcNmUMwIM247O8Q1XM8K21sEZpFuVBMK4LCEE8c0VCzApeqGB4zxXbbu8nrTyEpj0WYTDamZ2%2BBjqkAQUhwYXpeBVdd5JLXUCx2hCqru9bQmxLCXS%2Fp1ILHVe7c1oagh6nfuO7DXVi3abZfmmDRD6vU4jQw3El6Q5uGSelAfLr8xoKD7O1%2FHaUkSxn4g1HtBFCuo09mnw0kgZYEVLTviJj4Mtx0KfQy645Ct3k3TIBVfpgFJkcvPybrqvpQjKB0UhEXUbFU%2BqMcWOc4NKTuJ55UxP48GY4MReE9i5JRzj8&X-Amz-Signature=728dcaca7786b20d5b4d0e998f11bbc83d2f893362fe24f704f10a0d0fee319c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZFKSFSL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR667tLk3UoDlLx40tkkH3TzEN%2F1YiHD%2FpmQRXDcv9fAIhAM4dwKTUs3E%2FS0EZlGNO08jKznlivqikCIqksECiEqUvKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzM6dAtbguOSzrrnj4q3ANKDlJpSUCs9jShlXmm5Oh1ZaIWzdsZ%2BHccrMjy3DZFdzOZAVePAVX5xMDBQFbINrDvhiKS6XCqFwfI7wIkhAetowNm4gxVljYEUY0%2FbezaRioMTfi5ZhBbwdaOMNFV7qRox9PgfkHgRfv9gdkKpg4lqEzrEXQ5SnH6C4ndsbdZ8VFm96PC4Zg0v6OOJ7ueMRZARnlQRu8Ml57F%2BnIVaGa4oJ%2FgV%2BhnsJ91EL5jAtZazt3qOy8tODJJ11eFZfJXnVV6ptzTh8IndXxKLR3vSEOk1lB37c95IKHZ5k2cNbn%2FP9gp1GuGOzUUm9lM0vLTSzaNItg5PdWEjtxjWaH4KYsGw9rMM%2FcOih0AFkEjwMsDoyFVAOhjm06O5lxeOyxiFcIarTwyC60%2F6Y1vw%2Bt6TYDi%2BYoYZwAtrk812sskEBLArAa0msAXHP22l0X9mynkY8bHE%2FBOpMVPd2qUIXyDR1ZngICAlHMis9VgRW8WT16kd4muz8iVN8sWjGB3a1yDhX22n834fyfLqpglt13RRdKZONH7q7%2FefnehdKNiSTatJNiaI2b%2F%2FxCmZ7TcNmUMwIM247O8Q1XM8K21sEZpFuVBMK4LCEE8c0VCzApeqGB4zxXbbu8nrTyEpj0WYTDamZ2%2BBjqkAQUhwYXpeBVdd5JLXUCx2hCqru9bQmxLCXS%2Fp1ILHVe7c1oagh6nfuO7DXVi3abZfmmDRD6vU4jQw3El6Q5uGSelAfLr8xoKD7O1%2FHaUkSxn4g1HtBFCuo09mnw0kgZYEVLTviJj4Mtx0KfQy645Ct3k3TIBVfpgFJkcvPybrqvpQjKB0UhEXUbFU%2BqMcWOc4NKTuJ55UxP48GY4MReE9i5JRzj8&X-Amz-Signature=ba2340d634cf27b6d35c663348d1662f70b58b40b9e4a81b901a2d3306584423&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZFKSFSL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T190225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR667tLk3UoDlLx40tkkH3TzEN%2F1YiHD%2FpmQRXDcv9fAIhAM4dwKTUs3E%2FS0EZlGNO08jKznlivqikCIqksECiEqUvKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzM6dAtbguOSzrrnj4q3ANKDlJpSUCs9jShlXmm5Oh1ZaIWzdsZ%2BHccrMjy3DZFdzOZAVePAVX5xMDBQFbINrDvhiKS6XCqFwfI7wIkhAetowNm4gxVljYEUY0%2FbezaRioMTfi5ZhBbwdaOMNFV7qRox9PgfkHgRfv9gdkKpg4lqEzrEXQ5SnH6C4ndsbdZ8VFm96PC4Zg0v6OOJ7ueMRZARnlQRu8Ml57F%2BnIVaGa4oJ%2FgV%2BhnsJ91EL5jAtZazt3qOy8tODJJ11eFZfJXnVV6ptzTh8IndXxKLR3vSEOk1lB37c95IKHZ5k2cNbn%2FP9gp1GuGOzUUm9lM0vLTSzaNItg5PdWEjtxjWaH4KYsGw9rMM%2FcOih0AFkEjwMsDoyFVAOhjm06O5lxeOyxiFcIarTwyC60%2F6Y1vw%2Bt6TYDi%2BYoYZwAtrk812sskEBLArAa0msAXHP22l0X9mynkY8bHE%2FBOpMVPd2qUIXyDR1ZngICAlHMis9VgRW8WT16kd4muz8iVN8sWjGB3a1yDhX22n834fyfLqpglt13RRdKZONH7q7%2FefnehdKNiSTatJNiaI2b%2F%2FxCmZ7TcNmUMwIM247O8Q1XM8K21sEZpFuVBMK4LCEE8c0VCzApeqGB4zxXbbu8nrTyEpj0WYTDamZ2%2BBjqkAQUhwYXpeBVdd5JLXUCx2hCqru9bQmxLCXS%2Fp1ILHVe7c1oagh6nfuO7DXVi3abZfmmDRD6vU4jQw3El6Q5uGSelAfLr8xoKD7O1%2FHaUkSxn4g1HtBFCuo09mnw0kgZYEVLTviJj4Mtx0KfQy645Ct3k3TIBVfpgFJkcvPybrqvpQjKB0UhEXUbFU%2BqMcWOc4NKTuJ55UxP48GY4MReE9i5JRzj8&X-Amz-Signature=eb1179dec35ec76f113b2e64ce8215c626f4f459c7b0ee032381251504ff07ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

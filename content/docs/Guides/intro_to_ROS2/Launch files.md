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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4DD5TP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHKRkFk1NRKSvSaHJkZPPPw4jdIRnR4z2QtLKxtHBHMwIhANZfDxYCu9iKxASMuonb64tQz5Ki2bli2%2FDD%2FS%2BMea1VKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaStBRTLNE5ZbGyCkq3AOa8WzdaagBoDZswC5O%2F2FGzFylqhhVHVQHl4r78I6tLHJED%2BTx%2FET0fT5kj5GGClEh1q%2BbCXCzA%2B%2FpCwDs6DjPKtsCIWAncnutv13jfhaa%2FoYU5dZp2SrmsNFz%2Byy6bfPiH6%2Bmbai2ybUlxUOQDaj%2BLfAiwcjWqnGaC7ST8%2BB47VlKGkxTp0GXOKcCV6p9%2B2iOWLs1vetrGL1ayh3OV7i1l6Vys3rwVogiM03gUuvAcVTRnszWfh81VMbtu5G454775Rc5Pz%2FPQ0%2Fou4ogKtECXNb0YqGdtSxzTHKDb%2FC7cKOtt6eOxlIeo2siepwWgLWT%2F41ro5v7uEvlSSuAZOVSCt%2BqDxdIYNhiK124nxiATLr3P%2BLwFEQ6Fj4PhkU1icJu85LtrXs9YlXWcj73HpwMYjViB2n6o6x2naVn4hbrFjVK6hPWUjsopjAQNuOPOVuaZp%2FLJE3cYQA69k4FAjxPwm%2FD0%2Blby6%2BRvsLVoSZkROfhzDQw5oN4ZwLtEV8IwjJbitwlJIoezqyddXNZrM0KcZC2QXIfBTI%2BdsYGEnamORKoApa8JrJrh04nGuY8VmX3E7k7nweDLLIJV%2B6myaES9KLttLMdhm87tUMjmnLv2g%2BAqJVMDQE7xdzyfjDgkvfDBjqkAR%2B%2BfHp2kvtLWzVjxwYUqRxIkxglAUpTwU2yeQc5fnBZbMH3bc%2Fp7wzNmksS8Wp2zO4WZioR167mnHUMfLIFV0ET9d6cfTUCych3D%2BZyeGT7H6UKoGU%2FOmrS7KI07mxCtRpKoi2bzgJzd7pBUXptQZuMlxJUpUtaqsH6P9s1BAX%2BxeBQvFWfHQFtaoSmr2F2ehOm1OKta742tmp1yshA2103bKBm&X-Amz-Signature=5584ea2cb879dbd8b8ade28f85c60a2263d90d6fa7c700a655a3e5eddd4d5be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4DD5TP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHKRkFk1NRKSvSaHJkZPPPw4jdIRnR4z2QtLKxtHBHMwIhANZfDxYCu9iKxASMuonb64tQz5Ki2bli2%2FDD%2FS%2BMea1VKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaStBRTLNE5ZbGyCkq3AOa8WzdaagBoDZswC5O%2F2FGzFylqhhVHVQHl4r78I6tLHJED%2BTx%2FET0fT5kj5GGClEh1q%2BbCXCzA%2B%2FpCwDs6DjPKtsCIWAncnutv13jfhaa%2FoYU5dZp2SrmsNFz%2Byy6bfPiH6%2Bmbai2ybUlxUOQDaj%2BLfAiwcjWqnGaC7ST8%2BB47VlKGkxTp0GXOKcCV6p9%2B2iOWLs1vetrGL1ayh3OV7i1l6Vys3rwVogiM03gUuvAcVTRnszWfh81VMbtu5G454775Rc5Pz%2FPQ0%2Fou4ogKtECXNb0YqGdtSxzTHKDb%2FC7cKOtt6eOxlIeo2siepwWgLWT%2F41ro5v7uEvlSSuAZOVSCt%2BqDxdIYNhiK124nxiATLr3P%2BLwFEQ6Fj4PhkU1icJu85LtrXs9YlXWcj73HpwMYjViB2n6o6x2naVn4hbrFjVK6hPWUjsopjAQNuOPOVuaZp%2FLJE3cYQA69k4FAjxPwm%2FD0%2Blby6%2BRvsLVoSZkROfhzDQw5oN4ZwLtEV8IwjJbitwlJIoezqyddXNZrM0KcZC2QXIfBTI%2BdsYGEnamORKoApa8JrJrh04nGuY8VmX3E7k7nweDLLIJV%2B6myaES9KLttLMdhm87tUMjmnLv2g%2BAqJVMDQE7xdzyfjDgkvfDBjqkAR%2B%2BfHp2kvtLWzVjxwYUqRxIkxglAUpTwU2yeQc5fnBZbMH3bc%2Fp7wzNmksS8Wp2zO4WZioR167mnHUMfLIFV0ET9d6cfTUCych3D%2BZyeGT7H6UKoGU%2FOmrS7KI07mxCtRpKoi2bzgJzd7pBUXptQZuMlxJUpUtaqsH6P9s1BAX%2BxeBQvFWfHQFtaoSmr2F2ehOm1OKta742tmp1yshA2103bKBm&X-Amz-Signature=bb779cae659831c409d2fa3935c9693c09fce6f5dba3d5412cf56c7ec531f752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4DD5TP%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T051836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHKRkFk1NRKSvSaHJkZPPPw4jdIRnR4z2QtLKxtHBHMwIhANZfDxYCu9iKxASMuonb64tQz5Ki2bli2%2FDD%2FS%2BMea1VKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaStBRTLNE5ZbGyCkq3AOa8WzdaagBoDZswC5O%2F2FGzFylqhhVHVQHl4r78I6tLHJED%2BTx%2FET0fT5kj5GGClEh1q%2BbCXCzA%2B%2FpCwDs6DjPKtsCIWAncnutv13jfhaa%2FoYU5dZp2SrmsNFz%2Byy6bfPiH6%2Bmbai2ybUlxUOQDaj%2BLfAiwcjWqnGaC7ST8%2BB47VlKGkxTp0GXOKcCV6p9%2B2iOWLs1vetrGL1ayh3OV7i1l6Vys3rwVogiM03gUuvAcVTRnszWfh81VMbtu5G454775Rc5Pz%2FPQ0%2Fou4ogKtECXNb0YqGdtSxzTHKDb%2FC7cKOtt6eOxlIeo2siepwWgLWT%2F41ro5v7uEvlSSuAZOVSCt%2BqDxdIYNhiK124nxiATLr3P%2BLwFEQ6Fj4PhkU1icJu85LtrXs9YlXWcj73HpwMYjViB2n6o6x2naVn4hbrFjVK6hPWUjsopjAQNuOPOVuaZp%2FLJE3cYQA69k4FAjxPwm%2FD0%2Blby6%2BRvsLVoSZkROfhzDQw5oN4ZwLtEV8IwjJbitwlJIoezqyddXNZrM0KcZC2QXIfBTI%2BdsYGEnamORKoApa8JrJrh04nGuY8VmX3E7k7nweDLLIJV%2B6myaES9KLttLMdhm87tUMjmnLv2g%2BAqJVMDQE7xdzyfjDgkvfDBjqkAR%2B%2BfHp2kvtLWzVjxwYUqRxIkxglAUpTwU2yeQc5fnBZbMH3bc%2Fp7wzNmksS8Wp2zO4WZioR167mnHUMfLIFV0ET9d6cfTUCych3D%2BZyeGT7H6UKoGU%2FOmrS7KI07mxCtRpKoi2bzgJzd7pBUXptQZuMlxJUpUtaqsH6P9s1BAX%2BxeBQvFWfHQFtaoSmr2F2ehOm1OKta742tmp1yshA2103bKBm&X-Amz-Signature=c98d6f87e1454524a81b10da0cfc66b456c158e57f7bf766f04a9f0a07da8d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

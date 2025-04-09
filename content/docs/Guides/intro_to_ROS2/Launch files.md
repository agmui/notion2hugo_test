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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W6AY6VN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCID8NIaHHIoWFhj1Pv4vycPa021xlx%2F1nXCTEWhJJNPAwAiAVvP%2FoQoEynK50PhWB6VYJ1sqEOSvZLJToHwx0IgT7rSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOk%2B5kDkXUSJNkACrKtwDbqCKPkElc8YV%2BnF93NYxKED2SK8w2l56vK8qIR87ntRqAwCaYS7Nxpz6aIGG%2Bsa6Mj%2FXMgUg3M8xjU4Plxsmdz8HOBjSuqgdMtALYlHZan2%2BrlVqNe3kfgIaZC93PZPMsVle4kz5IK14HMD%2FuKni6u%2Bm4gu9DGPOV2IRfknpwCikV1H4mXd%2F3O0EArH%2B3yWC3DYYWIHRQOUAZIWIfa3jK7In6nTkrOGdm7ht1XhxK6TexT3JJwFGMh7ZKVq4RPGXNZgmnKm%2BkLVu6kdxbV1cbPXrv0xIGfoym1yxGY4CJfFC7zz%2BX3VMGsFEKIwPEcLI74zR2Qv1ldyYQqTk65xfeJZ3wpDGBGliYoULExJZtOg%2F8P0xfHFjLYW7UJxHxlfuY8clPcOFGFadz4xb7%2FDemKdghvqy1%2BqIbE1WYEA9TrBIpByceuQA20PMIj%2Bcr5bxDjA8SCTyZgsb5T2i2lShAqC4YDzucq%2Ffn1pHaeaSmusXJ0mEFEEtqx6wvOYryH8BBjJmU4Zda3T6FvIKFirlwHQiokqYzt7fkAX5LwBmv1WtdATOnnM3bxUbj4KOtUJ9MVFoFFBjVrjXPLLwsagcGAmlxOxvDSpzcyosZ509qLCVa30Bsqi9JRkzaeswnuHWvwY6pgEwfiA%2BGeHq5LR%2FZdmy%2FqvsEqPpURix1RSeSdUd9xZp6VpC27mfvTR7iIK2ugb1JJ8m84gqa%2BRfFCt66TwO2Gv7k4kDDrQ7LFkW7tCBJ1G1kjyPQrJNjC2zODNkpai%2FVXz09S0b4BPsfGhFHeosrbk91dqHrdnBMICCKxuPisAnCL4enKVrNDvKFJY96dicJ6bTaRb6VCaEX1stxt4DxKHZDNKXzj4k&X-Amz-Signature=e5c0e1aa61b96e9951ef8a8b9e4f02dc908d6480b85a7dc689987cdc5adb91f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W6AY6VN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCID8NIaHHIoWFhj1Pv4vycPa021xlx%2F1nXCTEWhJJNPAwAiAVvP%2FoQoEynK50PhWB6VYJ1sqEOSvZLJToHwx0IgT7rSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOk%2B5kDkXUSJNkACrKtwDbqCKPkElc8YV%2BnF93NYxKED2SK8w2l56vK8qIR87ntRqAwCaYS7Nxpz6aIGG%2Bsa6Mj%2FXMgUg3M8xjU4Plxsmdz8HOBjSuqgdMtALYlHZan2%2BrlVqNe3kfgIaZC93PZPMsVle4kz5IK14HMD%2FuKni6u%2Bm4gu9DGPOV2IRfknpwCikV1H4mXd%2F3O0EArH%2B3yWC3DYYWIHRQOUAZIWIfa3jK7In6nTkrOGdm7ht1XhxK6TexT3JJwFGMh7ZKVq4RPGXNZgmnKm%2BkLVu6kdxbV1cbPXrv0xIGfoym1yxGY4CJfFC7zz%2BX3VMGsFEKIwPEcLI74zR2Qv1ldyYQqTk65xfeJZ3wpDGBGliYoULExJZtOg%2F8P0xfHFjLYW7UJxHxlfuY8clPcOFGFadz4xb7%2FDemKdghvqy1%2BqIbE1WYEA9TrBIpByceuQA20PMIj%2Bcr5bxDjA8SCTyZgsb5T2i2lShAqC4YDzucq%2Ffn1pHaeaSmusXJ0mEFEEtqx6wvOYryH8BBjJmU4Zda3T6FvIKFirlwHQiokqYzt7fkAX5LwBmv1WtdATOnnM3bxUbj4KOtUJ9MVFoFFBjVrjXPLLwsagcGAmlxOxvDSpzcyosZ509qLCVa30Bsqi9JRkzaeswnuHWvwY6pgEwfiA%2BGeHq5LR%2FZdmy%2FqvsEqPpURix1RSeSdUd9xZp6VpC27mfvTR7iIK2ugb1JJ8m84gqa%2BRfFCt66TwO2Gv7k4kDDrQ7LFkW7tCBJ1G1kjyPQrJNjC2zODNkpai%2FVXz09S0b4BPsfGhFHeosrbk91dqHrdnBMICCKxuPisAnCL4enKVrNDvKFJY96dicJ6bTaRb6VCaEX1stxt4DxKHZDNKXzj4k&X-Amz-Signature=56fd1bd952f9aee786aa7a6beb2af931c7b7dab685eb63facd1fc64ee56061ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667W6AY6VN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T003859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCID8NIaHHIoWFhj1Pv4vycPa021xlx%2F1nXCTEWhJJNPAwAiAVvP%2FoQoEynK50PhWB6VYJ1sqEOSvZLJToHwx0IgT7rSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOk%2B5kDkXUSJNkACrKtwDbqCKPkElc8YV%2BnF93NYxKED2SK8w2l56vK8qIR87ntRqAwCaYS7Nxpz6aIGG%2Bsa6Mj%2FXMgUg3M8xjU4Plxsmdz8HOBjSuqgdMtALYlHZan2%2BrlVqNe3kfgIaZC93PZPMsVle4kz5IK14HMD%2FuKni6u%2Bm4gu9DGPOV2IRfknpwCikV1H4mXd%2F3O0EArH%2B3yWC3DYYWIHRQOUAZIWIfa3jK7In6nTkrOGdm7ht1XhxK6TexT3JJwFGMh7ZKVq4RPGXNZgmnKm%2BkLVu6kdxbV1cbPXrv0xIGfoym1yxGY4CJfFC7zz%2BX3VMGsFEKIwPEcLI74zR2Qv1ldyYQqTk65xfeJZ3wpDGBGliYoULExJZtOg%2F8P0xfHFjLYW7UJxHxlfuY8clPcOFGFadz4xb7%2FDemKdghvqy1%2BqIbE1WYEA9TrBIpByceuQA20PMIj%2Bcr5bxDjA8SCTyZgsb5T2i2lShAqC4YDzucq%2Ffn1pHaeaSmusXJ0mEFEEtqx6wvOYryH8BBjJmU4Zda3T6FvIKFirlwHQiokqYzt7fkAX5LwBmv1WtdATOnnM3bxUbj4KOtUJ9MVFoFFBjVrjXPLLwsagcGAmlxOxvDSpzcyosZ509qLCVa30Bsqi9JRkzaeswnuHWvwY6pgEwfiA%2BGeHq5LR%2FZdmy%2FqvsEqPpURix1RSeSdUd9xZp6VpC27mfvTR7iIK2ugb1JJ8m84gqa%2BRfFCt66TwO2Gv7k4kDDrQ7LFkW7tCBJ1G1kjyPQrJNjC2zODNkpai%2FVXz09S0b4BPsfGhFHeosrbk91dqHrdnBMICCKxuPisAnCL4enKVrNDvKFJY96dicJ6bTaRb6VCaEX1stxt4DxKHZDNKXzj4k&X-Amz-Signature=ce35288b4f171d978d17e32519dac305a730dc1041111aac21b5fe542a85e222&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

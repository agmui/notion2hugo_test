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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHSQBLP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIAT9VkWXIJxsc5ZBFWtU%2B5Dc2F8e3%2Bysa%2F%2FUexO%2B0EkTAiBDSI41mi42Wu%2F9lWoygXSN2g9akkWJOTgqnCBLRPh%2FxCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTG%2BWrthC6k8RIsbUKtwDsg9zqMRSYu3dfK5o1Ig%2BvMZuLh0KEFaZ2RJzB%2BGLEC4kh3BxxY%2Bej4N9aqG9zfyWmU8%2BbKBmOvlw1aGUzb2n4EUbCcZHBtaY8wtdZaXpvWBlgxcxBXECC4kmtxMysYwVG5FQc6ThIWz9U3wSTPoc6aapSQnUTaW%2FYVS0RScUk%2F49UeVbH7oAnxNV%2FaYpiEIXOlPWYHQSQ%2FnFN%2FOD6TFl0etID0oz2im9fcXCmyt02LFcoWZb8BGA67vVbHxFI7ZFAo96Rn%2F9bCSQ8rxx4YrXuN%2Bi%2BVhZjYdkebFVyDqiz2sa%2FZ2wLF4ygBPVgUer0QygGyNHi0F16iRgWbqlCnaEWk9Y%2B8Byo8ipEvpRwhD9tvUJMfwUVl88yQ3r5NVrQWC5lRy0Ikcyqxu2JJLIezCVedWykgkRlV5mcaQUqq%2FNsfKh8hVeQAFPJfUDTNtsk%2Bv66FBBtl%2Fq7aNQpPNjGEdFKKujPzfZMV8jQfKcsbHugExR%2Bxo08xlsEkUnSJEwb%2F81CIaFVO1mRw61UK68p0e03fpUscXaeIQyBiklvL4mlbp6wogaBw6bra3Z4VJ1zh%2F6ayaGos6klwdD%2BRgCTM4%2B1K%2FwZgKQgBuKUXzivO%2BG148G6tJWHn6jkiBMwMQw5L3evwY6pgEAl%2FfYQId9oZW4427ZQveqLaY9dWOkpBcrlmyuXWXRKRrl%2FB5UYiTpTJRdH17ERnUIg%2BgL1jYKnJUu7qFuSdhB3bFz7UWRBcAM9WXzbr3zWZnkCQdBOzsJBmDKP7HJ7zwcEXKJeVZynPl3SlLWpcvCFEVtMQTD6RR5P46lfxyBYAD5cI81%2Fpxj70wXsiQCHJodg59jb7HKhvtUB%2B7ARiI3X%2FrOqoJ8&X-Amz-Signature=e362fab54cfb4708078957fa4617f458de27f79f8671eb24c9de79d6e5af4aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHSQBLP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIAT9VkWXIJxsc5ZBFWtU%2B5Dc2F8e3%2Bysa%2F%2FUexO%2B0EkTAiBDSI41mi42Wu%2F9lWoygXSN2g9akkWJOTgqnCBLRPh%2FxCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTG%2BWrthC6k8RIsbUKtwDsg9zqMRSYu3dfK5o1Ig%2BvMZuLh0KEFaZ2RJzB%2BGLEC4kh3BxxY%2Bej4N9aqG9zfyWmU8%2BbKBmOvlw1aGUzb2n4EUbCcZHBtaY8wtdZaXpvWBlgxcxBXECC4kmtxMysYwVG5FQc6ThIWz9U3wSTPoc6aapSQnUTaW%2FYVS0RScUk%2F49UeVbH7oAnxNV%2FaYpiEIXOlPWYHQSQ%2FnFN%2FOD6TFl0etID0oz2im9fcXCmyt02LFcoWZb8BGA67vVbHxFI7ZFAo96Rn%2F9bCSQ8rxx4YrXuN%2Bi%2BVhZjYdkebFVyDqiz2sa%2FZ2wLF4ygBPVgUer0QygGyNHi0F16iRgWbqlCnaEWk9Y%2B8Byo8ipEvpRwhD9tvUJMfwUVl88yQ3r5NVrQWC5lRy0Ikcyqxu2JJLIezCVedWykgkRlV5mcaQUqq%2FNsfKh8hVeQAFPJfUDTNtsk%2Bv66FBBtl%2Fq7aNQpPNjGEdFKKujPzfZMV8jQfKcsbHugExR%2Bxo08xlsEkUnSJEwb%2F81CIaFVO1mRw61UK68p0e03fpUscXaeIQyBiklvL4mlbp6wogaBw6bra3Z4VJ1zh%2F6ayaGos6klwdD%2BRgCTM4%2B1K%2FwZgKQgBuKUXzivO%2BG148G6tJWHn6jkiBMwMQw5L3evwY6pgEAl%2FfYQId9oZW4427ZQveqLaY9dWOkpBcrlmyuXWXRKRrl%2FB5UYiTpTJRdH17ERnUIg%2BgL1jYKnJUu7qFuSdhB3bFz7UWRBcAM9WXzbr3zWZnkCQdBOzsJBmDKP7HJ7zwcEXKJeVZynPl3SlLWpcvCFEVtMQTD6RR5P46lfxyBYAD5cI81%2Fpxj70wXsiQCHJodg59jb7HKhvtUB%2B7ARiI3X%2FrOqoJ8&X-Amz-Signature=a5897317b8c378a1a131bc76957c7780ad15cbe42af3fb7f9a8989b55fb4ca2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FHSQBLP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIAT9VkWXIJxsc5ZBFWtU%2B5Dc2F8e3%2Bysa%2F%2FUexO%2B0EkTAiBDSI41mi42Wu%2F9lWoygXSN2g9akkWJOTgqnCBLRPh%2FxCqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTG%2BWrthC6k8RIsbUKtwDsg9zqMRSYu3dfK5o1Ig%2BvMZuLh0KEFaZ2RJzB%2BGLEC4kh3BxxY%2Bej4N9aqG9zfyWmU8%2BbKBmOvlw1aGUzb2n4EUbCcZHBtaY8wtdZaXpvWBlgxcxBXECC4kmtxMysYwVG5FQc6ThIWz9U3wSTPoc6aapSQnUTaW%2FYVS0RScUk%2F49UeVbH7oAnxNV%2FaYpiEIXOlPWYHQSQ%2FnFN%2FOD6TFl0etID0oz2im9fcXCmyt02LFcoWZb8BGA67vVbHxFI7ZFAo96Rn%2F9bCSQ8rxx4YrXuN%2Bi%2BVhZjYdkebFVyDqiz2sa%2FZ2wLF4ygBPVgUer0QygGyNHi0F16iRgWbqlCnaEWk9Y%2B8Byo8ipEvpRwhD9tvUJMfwUVl88yQ3r5NVrQWC5lRy0Ikcyqxu2JJLIezCVedWykgkRlV5mcaQUqq%2FNsfKh8hVeQAFPJfUDTNtsk%2Bv66FBBtl%2Fq7aNQpPNjGEdFKKujPzfZMV8jQfKcsbHugExR%2Bxo08xlsEkUnSJEwb%2F81CIaFVO1mRw61UK68p0e03fpUscXaeIQyBiklvL4mlbp6wogaBw6bra3Z4VJ1zh%2F6ayaGos6klwdD%2BRgCTM4%2B1K%2FwZgKQgBuKUXzivO%2BG148G6tJWHn6jkiBMwMQw5L3evwY6pgEAl%2FfYQId9oZW4427ZQveqLaY9dWOkpBcrlmyuXWXRKRrl%2FB5UYiTpTJRdH17ERnUIg%2BgL1jYKnJUu7qFuSdhB3bFz7UWRBcAM9WXzbr3zWZnkCQdBOzsJBmDKP7HJ7zwcEXKJeVZynPl3SlLWpcvCFEVtMQTD6RR5P46lfxyBYAD5cI81%2Fpxj70wXsiQCHJodg59jb7HKhvtUB%2B7ARiI3X%2FrOqoJ8&X-Amz-Signature=acf809b9ed8c7c7faf5028945a7dd6921a375d0114aae773cc3a047799a3e3bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2NUY5BW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg7JgC0izndnXIK%2BlnOD9eVfvEO0NtNjTX258FCCK28gIgcXy0UI%2BxarIjLj6sRBS6GabReiTdrEm5eMB%2FnegOb0EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCrsd0WyYGkvJ%2B1GSrcA%2BdiSg9OAgS%2F5ZImPPV441yLbthJ9TyV%2FLyfrJtgSN7U5stOpHbJJHlBR70VuIMUeGXBUm3ZuUE9ATFtJMBzmZrrgL8IQ%2Fu9rnfC4p5PtLlcHXBI7gSZ9%2Bzf5fUV%2BROnGo0o%2Fy77x7kuFKSiR4hrX5cFJVKaHygfQ4EPftfswV4JZUegDrNwHPaOtdB4UdSVzhb7A2J4ILQQVorQz8Iv0bKGr5NXYO7bjBRa%2Fi2QMR0b2%2BgDHdxsHV0CYnZUbbrOa2w1bSutAJS%2BuAUk7vhAVvh7IPl%2F3w9kb4byyJwkQL83frYMnuTLeOWSjVzWpl1GYZqKrHxi%2BCiM2LKmLLb%2FP%2FbyvcHQo2AFDiE0FBfHZZaj9u0ihSoIfaXx3KHWGx%2BMg%2B2Yunvc%2FSiNvV5nt2Tp320HmQfyaJdqo0is%2Bp4KiOLRsVbUNZhzAmSGgff2HuT3OT0CB8qXgwS%2FvvjUeVvkcbmoMYSMQaWyx9Hftesrn%2F%2F5bs29%2BGanwmpQTv%2FUjnVVjCbanYQJp9%2B4icmnB2Ek2CX8zxVgvIwpYjBR0RRcQ5ws6pSnX6MXUV4YVjtKofz2HiyIrFNpSuqkPesP05trGlQNeXjUWxtyXeucFN%2FqIGW%2BlAm1WFvjY0cxiKoUMMGck8IGOqUBlEMmz%2Fj2QxuDBJsHWpfeTPiq6%2Bli4M6N7AphDsdxWqo2Mv4lJOcSnR%2Fu2eyTOb0vbEl0dhv8C%2F23m4DxdV8kA3x%2FyadTSDg6qPmC%2FZ1Z4g2u%2FNUv5iE34QQPRGMSE4B%2BHw%2BtnJjlU%2BFx4yj%2FTNEOmdOOqhxC79ojGZX18XaELIyin0EEAXiaCImNVBZW8FwXpkXJxQYxAPPZrTUe0vq%2BpBf%2BJvsP&X-Amz-Signature=5de888f833fb178708eb8bd07480cee9b517ea4653873a525375f30ff7e2ff4a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2NUY5BW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg7JgC0izndnXIK%2BlnOD9eVfvEO0NtNjTX258FCCK28gIgcXy0UI%2BxarIjLj6sRBS6GabReiTdrEm5eMB%2FnegOb0EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCrsd0WyYGkvJ%2B1GSrcA%2BdiSg9OAgS%2F5ZImPPV441yLbthJ9TyV%2FLyfrJtgSN7U5stOpHbJJHlBR70VuIMUeGXBUm3ZuUE9ATFtJMBzmZrrgL8IQ%2Fu9rnfC4p5PtLlcHXBI7gSZ9%2Bzf5fUV%2BROnGo0o%2Fy77x7kuFKSiR4hrX5cFJVKaHygfQ4EPftfswV4JZUegDrNwHPaOtdB4UdSVzhb7A2J4ILQQVorQz8Iv0bKGr5NXYO7bjBRa%2Fi2QMR0b2%2BgDHdxsHV0CYnZUbbrOa2w1bSutAJS%2BuAUk7vhAVvh7IPl%2F3w9kb4byyJwkQL83frYMnuTLeOWSjVzWpl1GYZqKrHxi%2BCiM2LKmLLb%2FP%2FbyvcHQo2AFDiE0FBfHZZaj9u0ihSoIfaXx3KHWGx%2BMg%2B2Yunvc%2FSiNvV5nt2Tp320HmQfyaJdqo0is%2Bp4KiOLRsVbUNZhzAmSGgff2HuT3OT0CB8qXgwS%2FvvjUeVvkcbmoMYSMQaWyx9Hftesrn%2F%2F5bs29%2BGanwmpQTv%2FUjnVVjCbanYQJp9%2B4icmnB2Ek2CX8zxVgvIwpYjBR0RRcQ5ws6pSnX6MXUV4YVjtKofz2HiyIrFNpSuqkPesP05trGlQNeXjUWxtyXeucFN%2FqIGW%2BlAm1WFvjY0cxiKoUMMGck8IGOqUBlEMmz%2Fj2QxuDBJsHWpfeTPiq6%2Bli4M6N7AphDsdxWqo2Mv4lJOcSnR%2Fu2eyTOb0vbEl0dhv8C%2F23m4DxdV8kA3x%2FyadTSDg6qPmC%2FZ1Z4g2u%2FNUv5iE34QQPRGMSE4B%2BHw%2BtnJjlU%2BFx4yj%2FTNEOmdOOqhxC79ojGZX18XaELIyin0EEAXiaCImNVBZW8FwXpkXJxQYxAPPZrTUe0vq%2BpBf%2BJvsP&X-Amz-Signature=6c12cd900aa0755bd3baf65a9c5eb9253d1991edc777ef7d60ca044ca13b8ae9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2NUY5BW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T034517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg7JgC0izndnXIK%2BlnOD9eVfvEO0NtNjTX258FCCK28gIgcXy0UI%2BxarIjLj6sRBS6GabReiTdrEm5eMB%2FnegOb0EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBCrsd0WyYGkvJ%2B1GSrcA%2BdiSg9OAgS%2F5ZImPPV441yLbthJ9TyV%2FLyfrJtgSN7U5stOpHbJJHlBR70VuIMUeGXBUm3ZuUE9ATFtJMBzmZrrgL8IQ%2Fu9rnfC4p5PtLlcHXBI7gSZ9%2Bzf5fUV%2BROnGo0o%2Fy77x7kuFKSiR4hrX5cFJVKaHygfQ4EPftfswV4JZUegDrNwHPaOtdB4UdSVzhb7A2J4ILQQVorQz8Iv0bKGr5NXYO7bjBRa%2Fi2QMR0b2%2BgDHdxsHV0CYnZUbbrOa2w1bSutAJS%2BuAUk7vhAVvh7IPl%2F3w9kb4byyJwkQL83frYMnuTLeOWSjVzWpl1GYZqKrHxi%2BCiM2LKmLLb%2FP%2FbyvcHQo2AFDiE0FBfHZZaj9u0ihSoIfaXx3KHWGx%2BMg%2B2Yunvc%2FSiNvV5nt2Tp320HmQfyaJdqo0is%2Bp4KiOLRsVbUNZhzAmSGgff2HuT3OT0CB8qXgwS%2FvvjUeVvkcbmoMYSMQaWyx9Hftesrn%2F%2F5bs29%2BGanwmpQTv%2FUjnVVjCbanYQJp9%2B4icmnB2Ek2CX8zxVgvIwpYjBR0RRcQ5ws6pSnX6MXUV4YVjtKofz2HiyIrFNpSuqkPesP05trGlQNeXjUWxtyXeucFN%2FqIGW%2BlAm1WFvjY0cxiKoUMMGck8IGOqUBlEMmz%2Fj2QxuDBJsHWpfeTPiq6%2Bli4M6N7AphDsdxWqo2Mv4lJOcSnR%2Fu2eyTOb0vbEl0dhv8C%2F23m4DxdV8kA3x%2FyadTSDg6qPmC%2FZ1Z4g2u%2FNUv5iE34QQPRGMSE4B%2BHw%2BtnJjlU%2BFx4yj%2FTNEOmdOOqhxC79ojGZX18XaELIyin0EEAXiaCImNVBZW8FwXpkXJxQYxAPPZrTUe0vq%2BpBf%2BJvsP&X-Amz-Signature=c7b11bd9282dffed37ea1fe631dc0da7b49c64c931f2dc10e73b7e35cdd85949&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466726VIOU5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCICird2msuZUiZ%2BTO7FpNZ%2BUtp08nFmEUtyW5ZVYcDy94AiEA331FjVhD8vfOnHkQR7DVdHZHD3WYb0EqF9Xfwud8XrIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeYum%2FLDNoEIMz5DyrcA2AWeJzZOpFeUlTZcLudPoqsNrpeBdXgOUXKrhGZZVmoMNd7%2FPrL9PW0m0cfgq7Rf93fTYceHG%2F915SnIvE8%2BKWE%2B5Lfp3%2FLWfxnX0OR8eY4AshTyQEMebmk4H%2B12p02m9VrZQ3OrZYlXF8jihYG75M%2FOahFgFRPTpr4AjqlGDQQhyNmxddEYUsD3Y4owZXGcd7A0KcRU%2B8oarLW7gJJO1mQi0bdJF1BjmDmR3hOo%2FeFJHhZj4sNMwfp3VshDvKVuQAXaOaDMhRyeEbQ%2B%2BP29OM1H6sl96Wr8nup646e%2FVLzDVxJ52CAKm703LmYAVmB%2Bfu1ySAbKiunewxnj20xAfcMwu7N8HeO%2FmZhfQv4nsJ1YQ9ceGNJc%2BaJpvZg26zUcNQGPGHlisQzRbOkBbPqv278nDU81djHWLY38aYp7jxi8dsAG3Mm%2BzV5SzjgnWQGJNYvMAFwkTaHP7FUVo6VGl%2FK8opGE3KJIdvI1SuHY%2F%2BoL%2BDar95M%2FOS73%2F0ydg%2F21%2FpM8T6cS6UsSV9phIaeeOD%2BJbzdt%2BNZ1OY7p3vl7Cnl4QD4zsklxI72sSiZsCwQM13TTqnwuQyIpZOUSZti%2BE0LSLfP%2F3dxj1kEzOiXJVSev9fa59IngmJ6PUFLMMSG1sAGOqUBmK8pu%2FJWLBACDlcyHhYhGJiylJcOKEDHGbp9iZ2S15%2B1YDoO11C0NtUkUimHOZ%2Bd0NhObI5R1Og1vSkOmj7TNpDNl7NzHe5AM9tgNG6Cezz1ABker5Llv14SoNeXDc0sFhKbKZecjgKItd9iSvEbitkwMF%2FIY76p2srd0LXg0S0UzFkcTc%2FwsyeCO2PelK2Zq0yms39fnXG8ts7Rr01AKaIOqg4V&X-Amz-Signature=7996b57ff7c47a99b6f39c4c404293ad8258dd43e62fac2a3e0ae5b149049769&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466726VIOU5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCICird2msuZUiZ%2BTO7FpNZ%2BUtp08nFmEUtyW5ZVYcDy94AiEA331FjVhD8vfOnHkQR7DVdHZHD3WYb0EqF9Xfwud8XrIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeYum%2FLDNoEIMz5DyrcA2AWeJzZOpFeUlTZcLudPoqsNrpeBdXgOUXKrhGZZVmoMNd7%2FPrL9PW0m0cfgq7Rf93fTYceHG%2F915SnIvE8%2BKWE%2B5Lfp3%2FLWfxnX0OR8eY4AshTyQEMebmk4H%2B12p02m9VrZQ3OrZYlXF8jihYG75M%2FOahFgFRPTpr4AjqlGDQQhyNmxddEYUsD3Y4owZXGcd7A0KcRU%2B8oarLW7gJJO1mQi0bdJF1BjmDmR3hOo%2FeFJHhZj4sNMwfp3VshDvKVuQAXaOaDMhRyeEbQ%2B%2BP29OM1H6sl96Wr8nup646e%2FVLzDVxJ52CAKm703LmYAVmB%2Bfu1ySAbKiunewxnj20xAfcMwu7N8HeO%2FmZhfQv4nsJ1YQ9ceGNJc%2BaJpvZg26zUcNQGPGHlisQzRbOkBbPqv278nDU81djHWLY38aYp7jxi8dsAG3Mm%2BzV5SzjgnWQGJNYvMAFwkTaHP7FUVo6VGl%2FK8opGE3KJIdvI1SuHY%2F%2BoL%2BDar95M%2FOS73%2F0ydg%2F21%2FpM8T6cS6UsSV9phIaeeOD%2BJbzdt%2BNZ1OY7p3vl7Cnl4QD4zsklxI72sSiZsCwQM13TTqnwuQyIpZOUSZti%2BE0LSLfP%2F3dxj1kEzOiXJVSev9fa59IngmJ6PUFLMMSG1sAGOqUBmK8pu%2FJWLBACDlcyHhYhGJiylJcOKEDHGbp9iZ2S15%2B1YDoO11C0NtUkUimHOZ%2Bd0NhObI5R1Og1vSkOmj7TNpDNl7NzHe5AM9tgNG6Cezz1ABker5Llv14SoNeXDc0sFhKbKZecjgKItd9iSvEbitkwMF%2FIY76p2srd0LXg0S0UzFkcTc%2FwsyeCO2PelK2Zq0yms39fnXG8ts7Rr01AKaIOqg4V&X-Amz-Signature=24dd1faf317f5338db895026ecfb05a95540f79d7478b4d7f78a861ec2a93068&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466726VIOU5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T081014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCICird2msuZUiZ%2BTO7FpNZ%2BUtp08nFmEUtyW5ZVYcDy94AiEA331FjVhD8vfOnHkQR7DVdHZHD3WYb0EqF9Xfwud8XrIqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeYum%2FLDNoEIMz5DyrcA2AWeJzZOpFeUlTZcLudPoqsNrpeBdXgOUXKrhGZZVmoMNd7%2FPrL9PW0m0cfgq7Rf93fTYceHG%2F915SnIvE8%2BKWE%2B5Lfp3%2FLWfxnX0OR8eY4AshTyQEMebmk4H%2B12p02m9VrZQ3OrZYlXF8jihYG75M%2FOahFgFRPTpr4AjqlGDQQhyNmxddEYUsD3Y4owZXGcd7A0KcRU%2B8oarLW7gJJO1mQi0bdJF1BjmDmR3hOo%2FeFJHhZj4sNMwfp3VshDvKVuQAXaOaDMhRyeEbQ%2B%2BP29OM1H6sl96Wr8nup646e%2FVLzDVxJ52CAKm703LmYAVmB%2Bfu1ySAbKiunewxnj20xAfcMwu7N8HeO%2FmZhfQv4nsJ1YQ9ceGNJc%2BaJpvZg26zUcNQGPGHlisQzRbOkBbPqv278nDU81djHWLY38aYp7jxi8dsAG3Mm%2BzV5SzjgnWQGJNYvMAFwkTaHP7FUVo6VGl%2FK8opGE3KJIdvI1SuHY%2F%2BoL%2BDar95M%2FOS73%2F0ydg%2F21%2FpM8T6cS6UsSV9phIaeeOD%2BJbzdt%2BNZ1OY7p3vl7Cnl4QD4zsklxI72sSiZsCwQM13TTqnwuQyIpZOUSZti%2BE0LSLfP%2F3dxj1kEzOiXJVSev9fa59IngmJ6PUFLMMSG1sAGOqUBmK8pu%2FJWLBACDlcyHhYhGJiylJcOKEDHGbp9iZ2S15%2B1YDoO11C0NtUkUimHOZ%2Bd0NhObI5R1Og1vSkOmj7TNpDNl7NzHe5AM9tgNG6Cezz1ABker5Llv14SoNeXDc0sFhKbKZecjgKItd9iSvEbitkwMF%2FIY76p2srd0LXg0S0UzFkcTc%2FwsyeCO2PelK2Zq0yms39fnXG8ts7Rr01AKaIOqg4V&X-Amz-Signature=71f0f52164fc88690eb3bdeb3de0438f4230e62af80fc478e97ff4781518cdfd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

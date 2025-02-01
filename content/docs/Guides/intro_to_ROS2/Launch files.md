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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VX7J3J%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBK99Jzthw0G34dVanTEamIlJUaQCGSvz94H9CVg%2F5stAiEAukpbyPZw%2BKTacrz4KIxDkbrKXKEZQoSrkxPhPWJdKi0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcBbRJmhL%2BztqGlYSrcAx%2BaLwDCAEJvNfWY1osFVNsbD%2FwZZ5uM10Y%2BDp8%2FIEpVLPDdesNxw5FnxeRBCsJglXHGsRftSuybKAQ91Uzx7JpU%2B67bHq8pElefeP4GKPvpyWwzzatdjlimGOdlaFlbtlu4ow8aL4tyXZJNZ75dCoPKf3ro7Tv3CSWyToutw6GIcCgyhgZO5iM6nU7l6GMGQVe0P3qqzqAzrQxEQM7R1WMxVw2QJbow0WXBnvYi%2B9KpXfMQyll594qa11VcwQTSYBobj5jtcmoURhCQ9VCdVpm1oKXwVMjzk%2Fwqv95MkE%2FlvggZcnRl4joGdaIHwHcWIaTSsTbaEjVQPEeDT3W3lw6EvakEyZh1mnLDl2l0qIOaBm%2F9HaEfxiXupYR0HV5JxIyjGLwd1ixRnCCHqJLZHoJ9huB6wM0inZIa6oLQP5pQhDIqgRG6A0JDDiyl1BGh82GKkyh%2B5ExevKq%2BmlihFF%2BakTKxgcagH7Uuabmmwwr%2BXBQs1Vj%2FZx3e%2F%2Fdw05IVdt5q%2Bbx49v2uIfLe1VNW3Q%2BPNNHO8GJJ3O5XjTS1YKt39c2zQJdHwPnGGdQH7GeUzvGe6Hk8agGb%2FsztO3HXuQ7yH79m3A%2F5ZDAmYLZysBj3dlDw5c9hXv2xIKIgMPbD%2BLwGOqUB3DWK9pd%2FJwYBl0xMgpDYOiXQDXevgnAKvkmkI7W49KiPsEpBdZjbHldQypFMywljyalbCpbInuMJHSdsKT%2FJar%2FyBnzvF0rhj0yHV0xalLUZ3g3bS3k0LbNcCfGsEGjrpzi1vK7xOSmJIA2C9jQZgOoBdzRe0udZG6scdTMhvXLDiSFr3y12gqRuHklPPYNiqcvt8hyTckyaRe6jfqRfOIifvNPt&X-Amz-Signature=ffbbf92854b60b8d19f2e672f25629bfb38c29b1a7235c527de949ba36715d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VX7J3J%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBK99Jzthw0G34dVanTEamIlJUaQCGSvz94H9CVg%2F5stAiEAukpbyPZw%2BKTacrz4KIxDkbrKXKEZQoSrkxPhPWJdKi0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcBbRJmhL%2BztqGlYSrcAx%2BaLwDCAEJvNfWY1osFVNsbD%2FwZZ5uM10Y%2BDp8%2FIEpVLPDdesNxw5FnxeRBCsJglXHGsRftSuybKAQ91Uzx7JpU%2B67bHq8pElefeP4GKPvpyWwzzatdjlimGOdlaFlbtlu4ow8aL4tyXZJNZ75dCoPKf3ro7Tv3CSWyToutw6GIcCgyhgZO5iM6nU7l6GMGQVe0P3qqzqAzrQxEQM7R1WMxVw2QJbow0WXBnvYi%2B9KpXfMQyll594qa11VcwQTSYBobj5jtcmoURhCQ9VCdVpm1oKXwVMjzk%2Fwqv95MkE%2FlvggZcnRl4joGdaIHwHcWIaTSsTbaEjVQPEeDT3W3lw6EvakEyZh1mnLDl2l0qIOaBm%2F9HaEfxiXupYR0HV5JxIyjGLwd1ixRnCCHqJLZHoJ9huB6wM0inZIa6oLQP5pQhDIqgRG6A0JDDiyl1BGh82GKkyh%2B5ExevKq%2BmlihFF%2BakTKxgcagH7Uuabmmwwr%2BXBQs1Vj%2FZx3e%2F%2Fdw05IVdt5q%2Bbx49v2uIfLe1VNW3Q%2BPNNHO8GJJ3O5XjTS1YKt39c2zQJdHwPnGGdQH7GeUzvGe6Hk8agGb%2FsztO3HXuQ7yH79m3A%2F5ZDAmYLZysBj3dlDw5c9hXv2xIKIgMPbD%2BLwGOqUB3DWK9pd%2FJwYBl0xMgpDYOiXQDXevgnAKvkmkI7W49KiPsEpBdZjbHldQypFMywljyalbCpbInuMJHSdsKT%2FJar%2FyBnzvF0rhj0yHV0xalLUZ3g3bS3k0LbNcCfGsEGjrpzi1vK7xOSmJIA2C9jQZgOoBdzRe0udZG6scdTMhvXLDiSFr3y12gqRuHklPPYNiqcvt8hyTckyaRe6jfqRfOIifvNPt&X-Amz-Signature=a8ed06d8cac45d2d0528c793629ac7342cd0367351e9e8b5527b149dc227d63d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2VX7J3J%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBK99Jzthw0G34dVanTEamIlJUaQCGSvz94H9CVg%2F5stAiEAukpbyPZw%2BKTacrz4KIxDkbrKXKEZQoSrkxPhPWJdKi0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcBbRJmhL%2BztqGlYSrcAx%2BaLwDCAEJvNfWY1osFVNsbD%2FwZZ5uM10Y%2BDp8%2FIEpVLPDdesNxw5FnxeRBCsJglXHGsRftSuybKAQ91Uzx7JpU%2B67bHq8pElefeP4GKPvpyWwzzatdjlimGOdlaFlbtlu4ow8aL4tyXZJNZ75dCoPKf3ro7Tv3CSWyToutw6GIcCgyhgZO5iM6nU7l6GMGQVe0P3qqzqAzrQxEQM7R1WMxVw2QJbow0WXBnvYi%2B9KpXfMQyll594qa11VcwQTSYBobj5jtcmoURhCQ9VCdVpm1oKXwVMjzk%2Fwqv95MkE%2FlvggZcnRl4joGdaIHwHcWIaTSsTbaEjVQPEeDT3W3lw6EvakEyZh1mnLDl2l0qIOaBm%2F9HaEfxiXupYR0HV5JxIyjGLwd1ixRnCCHqJLZHoJ9huB6wM0inZIa6oLQP5pQhDIqgRG6A0JDDiyl1BGh82GKkyh%2B5ExevKq%2BmlihFF%2BakTKxgcagH7Uuabmmwwr%2BXBQs1Vj%2FZx3e%2F%2Fdw05IVdt5q%2Bbx49v2uIfLe1VNW3Q%2BPNNHO8GJJ3O5XjTS1YKt39c2zQJdHwPnGGdQH7GeUzvGe6Hk8agGb%2FsztO3HXuQ7yH79m3A%2F5ZDAmYLZysBj3dlDw5c9hXv2xIKIgMPbD%2BLwGOqUB3DWK9pd%2FJwYBl0xMgpDYOiXQDXevgnAKvkmkI7W49KiPsEpBdZjbHldQypFMywljyalbCpbInuMJHSdsKT%2FJar%2FyBnzvF0rhj0yHV0xalLUZ3g3bS3k0LbNcCfGsEGjrpzi1vK7xOSmJIA2C9jQZgOoBdzRe0udZG6scdTMhvXLDiSFr3y12gqRuHklPPYNiqcvt8hyTckyaRe6jfqRfOIifvNPt&X-Amz-Signature=aba0d016e401344d2ae6b00c7b08dabacd200a5be44fdd044510c929a4c62763&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

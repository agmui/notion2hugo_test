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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFQSG5Y%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXLd6DXsqrXVCtxRKgK1DXVNkZ3IbLM8UU0%2FH%2BRpKaIAIgFdnKtWKXoJcPmETz0KtOWdtyiCaHBgyWKdPt4g7GiCUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCivcaRPg5e1rHxXNircAy7UvPuDlBACKZ%2BTJxsAy5zZA%2BmDkqt2y9U9CDSuRuuJJTVCVoOVyo9wXumxE7jiXbe%2Bb3U1WZP0M5FwO4h6k4hxaUGALOtL6A3GxKP8ToP32Yb1NGxPj3kU7avn7MlMFPrE02ZT5ruFq%2F7NbzJuC%2Fy5xqxkPOBvS2m7%2FsDkSvEVrGqiQfYsEc75JZPYKSzU9x8HM4IBHTTDizBcs5hbIM47mhnl6oPeh08XDG0bvVeF7pq%2BRn5fQ3Tp2sKp5i%2BMv7Da6Vfz%2F9TW%2FHKIsd1F%2BCvA%2FNJasImPqWUCHA4QjbKGtL5Xv8C9YA8lIUJkdYHDY04z%2B4pMvRKwEC01LCtE94Ap0Pwrih8LbAaMJLKLxiPy4MZR3cLyO9HNUp%2FU84B%2FcCH1Lf2X1FpcMWZtK%2BjtpmVckYpf9CcSwSR4B8DDBI5BFNKrxsh9TaN5eNvqg0TWlMO278iisJPCdwg1BAOSCm4CZIsUH9vnp7Qc3MwMolOBuUtCh0ax1Bi4XVBe09ieNDpVwqs7Yp4%2FqWcwQzdj13tP1%2FxM0%2Fkg7LDV3xwO1ZRlbo9JEQ9R5JIRNiYXGtjL%2FkQgN1YdftTfJnlAQrwQY0KYrM1VWFRTF82ccZEXZjAhVB8jo1Xbtem%2B%2FYc9MMDKt8MGOqUB%2BuBLB1yZPDX2qaAYqnjf2ARjZ313Kxw%2BNyF1oi6vyop2s%2BOa%2F8DUJjYjYwVcv5IrcqwYN%2Fvandb9OHJS0hri%2FP6IZhLxN2cUA0N7MP%2FZvfqQM8Xnaq62u5DHs%2Ba7yB84UGp5IskT%2BD2THxFCXArPL9%2FpR6eSjv37j7YfgKHO0NXdP%2BIxzZ2SNr1B8BIoYdB0WoJaBe%2B3UE5ZrMTPAjhLSMaQgXle&X-Amz-Signature=c14a300c30134a573222a5019c22072ac057429792283325eb49cc9702ef5643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFQSG5Y%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXLd6DXsqrXVCtxRKgK1DXVNkZ3IbLM8UU0%2FH%2BRpKaIAIgFdnKtWKXoJcPmETz0KtOWdtyiCaHBgyWKdPt4g7GiCUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCivcaRPg5e1rHxXNircAy7UvPuDlBACKZ%2BTJxsAy5zZA%2BmDkqt2y9U9CDSuRuuJJTVCVoOVyo9wXumxE7jiXbe%2Bb3U1WZP0M5FwO4h6k4hxaUGALOtL6A3GxKP8ToP32Yb1NGxPj3kU7avn7MlMFPrE02ZT5ruFq%2F7NbzJuC%2Fy5xqxkPOBvS2m7%2FsDkSvEVrGqiQfYsEc75JZPYKSzU9x8HM4IBHTTDizBcs5hbIM47mhnl6oPeh08XDG0bvVeF7pq%2BRn5fQ3Tp2sKp5i%2BMv7Da6Vfz%2F9TW%2FHKIsd1F%2BCvA%2FNJasImPqWUCHA4QjbKGtL5Xv8C9YA8lIUJkdYHDY04z%2B4pMvRKwEC01LCtE94Ap0Pwrih8LbAaMJLKLxiPy4MZR3cLyO9HNUp%2FU84B%2FcCH1Lf2X1FpcMWZtK%2BjtpmVckYpf9CcSwSR4B8DDBI5BFNKrxsh9TaN5eNvqg0TWlMO278iisJPCdwg1BAOSCm4CZIsUH9vnp7Qc3MwMolOBuUtCh0ax1Bi4XVBe09ieNDpVwqs7Yp4%2FqWcwQzdj13tP1%2FxM0%2Fkg7LDV3xwO1ZRlbo9JEQ9R5JIRNiYXGtjL%2FkQgN1YdftTfJnlAQrwQY0KYrM1VWFRTF82ccZEXZjAhVB8jo1Xbtem%2B%2FYc9MMDKt8MGOqUB%2BuBLB1yZPDX2qaAYqnjf2ARjZ313Kxw%2BNyF1oi6vyop2s%2BOa%2F8DUJjYjYwVcv5IrcqwYN%2Fvandb9OHJS0hri%2FP6IZhLxN2cUA0N7MP%2FZvfqQM8Xnaq62u5DHs%2Ba7yB84UGp5IskT%2BD2THxFCXArPL9%2FpR6eSjv37j7YfgKHO0NXdP%2BIxzZ2SNr1B8BIoYdB0WoJaBe%2B3UE5ZrMTPAjhLSMaQgXle&X-Amz-Signature=bba7b498f7fe5ecceb8243e765ad1d8441efa82a10cdcc63f2532ebeccb1900c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZFQSG5Y%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T042354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXLd6DXsqrXVCtxRKgK1DXVNkZ3IbLM8UU0%2FH%2BRpKaIAIgFdnKtWKXoJcPmETz0KtOWdtyiCaHBgyWKdPt4g7GiCUqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCivcaRPg5e1rHxXNircAy7UvPuDlBACKZ%2BTJxsAy5zZA%2BmDkqt2y9U9CDSuRuuJJTVCVoOVyo9wXumxE7jiXbe%2Bb3U1WZP0M5FwO4h6k4hxaUGALOtL6A3GxKP8ToP32Yb1NGxPj3kU7avn7MlMFPrE02ZT5ruFq%2F7NbzJuC%2Fy5xqxkPOBvS2m7%2FsDkSvEVrGqiQfYsEc75JZPYKSzU9x8HM4IBHTTDizBcs5hbIM47mhnl6oPeh08XDG0bvVeF7pq%2BRn5fQ3Tp2sKp5i%2BMv7Da6Vfz%2F9TW%2FHKIsd1F%2BCvA%2FNJasImPqWUCHA4QjbKGtL5Xv8C9YA8lIUJkdYHDY04z%2B4pMvRKwEC01LCtE94Ap0Pwrih8LbAaMJLKLxiPy4MZR3cLyO9HNUp%2FU84B%2FcCH1Lf2X1FpcMWZtK%2BjtpmVckYpf9CcSwSR4B8DDBI5BFNKrxsh9TaN5eNvqg0TWlMO278iisJPCdwg1BAOSCm4CZIsUH9vnp7Qc3MwMolOBuUtCh0ax1Bi4XVBe09ieNDpVwqs7Yp4%2FqWcwQzdj13tP1%2FxM0%2Fkg7LDV3xwO1ZRlbo9JEQ9R5JIRNiYXGtjL%2FkQgN1YdftTfJnlAQrwQY0KYrM1VWFRTF82ccZEXZjAhVB8jo1Xbtem%2B%2FYc9MMDKt8MGOqUB%2BuBLB1yZPDX2qaAYqnjf2ARjZ313Kxw%2BNyF1oi6vyop2s%2BOa%2F8DUJjYjYwVcv5IrcqwYN%2Fvandb9OHJS0hri%2FP6IZhLxN2cUA0N7MP%2FZvfqQM8Xnaq62u5DHs%2Ba7yB84UGp5IskT%2BD2THxFCXArPL9%2FpR6eSjv37j7YfgKHO0NXdP%2BIxzZ2SNr1B8BIoYdB0WoJaBe%2B3UE5ZrMTPAjhLSMaQgXle&X-Amz-Signature=76355245704ddf2dedd1e57a56802d15563ae45d26f53057f65f47281b67f69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

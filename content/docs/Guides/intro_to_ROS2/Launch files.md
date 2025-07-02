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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U22B4UP2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAU4wvwqxAyJFhhJxBT%2FGbRnePC4hydv04cT90ksC1MwIhAOPinRbx5JckijjQ91qaIsXx8UEF90zhcFeGBEmeM%2FrZKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgVnI3dwS6USWd1uUq3APv4%2BrkJqTNczU8gPrrX98RtkbzudTxC8rCo5O4WMW1ySNBYJ4FGV%2FjVmiiB606RGD8lR6PO6yseFZg6DoYcjdIK4TcDhX2S38Gm5tieOsIXLIudRlKswVPlhcrS2ziHFopCxyyyRw8rhOxGHMMn1zy%2F6YjxgEedXRax9CA20kdqTdiEF4n6mk2W5KCEKkf7vix9zvm%2FNm5CNbFNaDSmhqcRBsB%2B3CYqYm4iqqeX9WPdC%2FmVxGeubuYM9sbs0XgVv5Nz%2FVth6AlCZZj1jlt%2B31zacWb7XOlvvaBaaxOlw1e7rXPSMQ86j0BuSl3KBi4f4PhH8KRO553nmNJ167LgtD9ohsDKxTB8GpcfTrcM%2B7uIysNQuFv%2BTM3Ee17CykPEh6nPaHgliaJcfwaMlRs%2B%2BnAU7tQ5VhdnGjmtDVpb1Gx0mJvPhnBYnyTINxUUir%2FYswnDiXrkZk7vxiqIbNCZUofrYJXKkt5sh%2BGfMFaVLwz8iDbfAU5IFtwcg%2FztTLxKqYWpCqBCHrV1Vel2l50j4%2BcryOQguF2K5w5mWtU%2Fmyow8YiKhe2o2DnXrClpCBtdb2H3KbVeVF%2Bb2fkWN4kfedORV0EINEEFx5TEicfdBLpo1ydcZWCqPwXu0V%2FvTCTtZPDBjqkAQWBbAuDLjXuiVvgi6RcaQ14ohU0zawNkf1FXkWuYn5F8TtRhaV3LKlDH2i8WFU9iQsFMYtDPHnltfIDIRJvlj7CCy1jzRrOAiNkBMpT3dOJWDiKWeJ9hfxbZQJl4tRZCJ3PHfkFrENLLOTa0i%2BqUnJEYHw%2BTXNyGooW99fHOtZ7p4oMaYpwCeNUrVxA8CbV7OqvAHvNvt6faEuBhg0vc7FsgJw6&X-Amz-Signature=1157483943f1c0c21f91789fd19ec405b8f8d4a3b8b3a14eeaa3c642e042d51a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U22B4UP2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAU4wvwqxAyJFhhJxBT%2FGbRnePC4hydv04cT90ksC1MwIhAOPinRbx5JckijjQ91qaIsXx8UEF90zhcFeGBEmeM%2FrZKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgVnI3dwS6USWd1uUq3APv4%2BrkJqTNczU8gPrrX98RtkbzudTxC8rCo5O4WMW1ySNBYJ4FGV%2FjVmiiB606RGD8lR6PO6yseFZg6DoYcjdIK4TcDhX2S38Gm5tieOsIXLIudRlKswVPlhcrS2ziHFopCxyyyRw8rhOxGHMMn1zy%2F6YjxgEedXRax9CA20kdqTdiEF4n6mk2W5KCEKkf7vix9zvm%2FNm5CNbFNaDSmhqcRBsB%2B3CYqYm4iqqeX9WPdC%2FmVxGeubuYM9sbs0XgVv5Nz%2FVth6AlCZZj1jlt%2B31zacWb7XOlvvaBaaxOlw1e7rXPSMQ86j0BuSl3KBi4f4PhH8KRO553nmNJ167LgtD9ohsDKxTB8GpcfTrcM%2B7uIysNQuFv%2BTM3Ee17CykPEh6nPaHgliaJcfwaMlRs%2B%2BnAU7tQ5VhdnGjmtDVpb1Gx0mJvPhnBYnyTINxUUir%2FYswnDiXrkZk7vxiqIbNCZUofrYJXKkt5sh%2BGfMFaVLwz8iDbfAU5IFtwcg%2FztTLxKqYWpCqBCHrV1Vel2l50j4%2BcryOQguF2K5w5mWtU%2Fmyow8YiKhe2o2DnXrClpCBtdb2H3KbVeVF%2Bb2fkWN4kfedORV0EINEEFx5TEicfdBLpo1ydcZWCqPwXu0V%2FvTCTtZPDBjqkAQWBbAuDLjXuiVvgi6RcaQ14ohU0zawNkf1FXkWuYn5F8TtRhaV3LKlDH2i8WFU9iQsFMYtDPHnltfIDIRJvlj7CCy1jzRrOAiNkBMpT3dOJWDiKWeJ9hfxbZQJl4tRZCJ3PHfkFrENLLOTa0i%2BqUnJEYHw%2BTXNyGooW99fHOtZ7p4oMaYpwCeNUrVxA8CbV7OqvAHvNvt6faEuBhg0vc7FsgJw6&X-Amz-Signature=ac61be4279147695f6e9de25ef5758aa4f508370a161d0b6a8aa2bb2b962d8e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U22B4UP2%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T081306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAU4wvwqxAyJFhhJxBT%2FGbRnePC4hydv04cT90ksC1MwIhAOPinRbx5JckijjQ91qaIsXx8UEF90zhcFeGBEmeM%2FrZKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgVnI3dwS6USWd1uUq3APv4%2BrkJqTNczU8gPrrX98RtkbzudTxC8rCo5O4WMW1ySNBYJ4FGV%2FjVmiiB606RGD8lR6PO6yseFZg6DoYcjdIK4TcDhX2S38Gm5tieOsIXLIudRlKswVPlhcrS2ziHFopCxyyyRw8rhOxGHMMn1zy%2F6YjxgEedXRax9CA20kdqTdiEF4n6mk2W5KCEKkf7vix9zvm%2FNm5CNbFNaDSmhqcRBsB%2B3CYqYm4iqqeX9WPdC%2FmVxGeubuYM9sbs0XgVv5Nz%2FVth6AlCZZj1jlt%2B31zacWb7XOlvvaBaaxOlw1e7rXPSMQ86j0BuSl3KBi4f4PhH8KRO553nmNJ167LgtD9ohsDKxTB8GpcfTrcM%2B7uIysNQuFv%2BTM3Ee17CykPEh6nPaHgliaJcfwaMlRs%2B%2BnAU7tQ5VhdnGjmtDVpb1Gx0mJvPhnBYnyTINxUUir%2FYswnDiXrkZk7vxiqIbNCZUofrYJXKkt5sh%2BGfMFaVLwz8iDbfAU5IFtwcg%2FztTLxKqYWpCqBCHrV1Vel2l50j4%2BcryOQguF2K5w5mWtU%2Fmyow8YiKhe2o2DnXrClpCBtdb2H3KbVeVF%2Bb2fkWN4kfedORV0EINEEFx5TEicfdBLpo1ydcZWCqPwXu0V%2FvTCTtZPDBjqkAQWBbAuDLjXuiVvgi6RcaQ14ohU0zawNkf1FXkWuYn5F8TtRhaV3LKlDH2i8WFU9iQsFMYtDPHnltfIDIRJvlj7CCy1jzRrOAiNkBMpT3dOJWDiKWeJ9hfxbZQJl4tRZCJ3PHfkFrENLLOTa0i%2BqUnJEYHw%2BTXNyGooW99fHOtZ7p4oMaYpwCeNUrVxA8CbV7OqvAHvNvt6faEuBhg0vc7FsgJw6&X-Amz-Signature=8859377b4a9ad896e0ca858a8db9e88077df50f52adc559d4c8aa1e538d29fb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

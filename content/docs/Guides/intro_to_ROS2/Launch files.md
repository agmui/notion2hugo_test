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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMS5A67W%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMjb8%2FVfP9E9J77ecfGCfHlQ8KJAH2R0enzgQu8E3MPwIhAJj6pS1%2FvhERYmCOk2ErcPYpuR8G0cM3LWB0Cpa86%2FHxKv8DCG8QABoMNjM3NDIzMTgzODA1IgzR42F0PJEqDIu9%2FxQq3AN5xoihjvEVjw0FZkrNubekXEWHI36n0oKfEbao1%2FWp2m7OunIZPJIgrCkz%2Fg3ZJTIb5IOyTVZsRgprsSOBQ%2FsNyF5Sxtea3UJqHBhGh62MUp0PLrrfAocsPFRL1tYriUY4wGNKWc445IQV4q%2FcvILd%2Bs%2FOWGOVLfmlpKQyq6rr12Mw60dDJVvlfVkqx2Hj2wvi%2Fq31JsxzdvNTAqt%2F1w0t6Kgatrk5zsq8ULBs86E8pLIB%2BRE5i9juQtYJ6NDc%2FKH%2FVyWAT7iQwByxr%2FDQBypYWpEZBhOv57XXOLRBKyxXSfGeq%2Bt%2BbkRB%2BsYaxvWySfFZ5Vhr0u6YS5ehOIHKugSu3cMUevzSQie6bRAh%2BJ2HvjyCDPBWda0nEh9ZMW5T7MpRRQsQzBnn3ZbeGQKWsQzKejLwzrmYpPFYpUr2YHybmbqTkLkWt0QSneKen%2BVdjk11yC5IicbXGll0PGuYyl63XKSV9Kgm2F3rj4PKv1DxbfYA%2Fhs4r%2F6zh4TA5NIt59sKkCZ9zEDpV0lDo%2BmmEVvZQzcKqC3G5x80oG3WkFE4nEKCc%2F%2Bjb6OT%2BkOhOd3Le8HdVlekB2K6%2Fnj%2BdVBR6karGojF5h9g0rDV5BzCtyjlN67e8JftXyx9JJc7VzCTxNrBBjqkAVE2YJbhemXyaRl5BkWXaVKerzYtZzu4oxyFWMtdTCuYhE54u7srJ7QKqQBZrW%2BU%2F0evpTM1zcnpjfnlAkuAZkm03DIhSh76hZTUJufPl1f9TAf%2BByQ5mqY71B%2Bfaa8hvjhC74SsgJ%2Fyg7HRqVmkBIsl67giBOTdjmiylzkkIcO4Z%2BhO6pEEN30dMis7GIj9S3AANu7X0ws1ykdezJEM3u8KAQNQ&X-Amz-Signature=c938ded3404d5dc388f928ebb9c7ffc63c4cc10ac17c86da5d46e68cbc6cc823&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMS5A67W%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMjb8%2FVfP9E9J77ecfGCfHlQ8KJAH2R0enzgQu8E3MPwIhAJj6pS1%2FvhERYmCOk2ErcPYpuR8G0cM3LWB0Cpa86%2FHxKv8DCG8QABoMNjM3NDIzMTgzODA1IgzR42F0PJEqDIu9%2FxQq3AN5xoihjvEVjw0FZkrNubekXEWHI36n0oKfEbao1%2FWp2m7OunIZPJIgrCkz%2Fg3ZJTIb5IOyTVZsRgprsSOBQ%2FsNyF5Sxtea3UJqHBhGh62MUp0PLrrfAocsPFRL1tYriUY4wGNKWc445IQV4q%2FcvILd%2Bs%2FOWGOVLfmlpKQyq6rr12Mw60dDJVvlfVkqx2Hj2wvi%2Fq31JsxzdvNTAqt%2F1w0t6Kgatrk5zsq8ULBs86E8pLIB%2BRE5i9juQtYJ6NDc%2FKH%2FVyWAT7iQwByxr%2FDQBypYWpEZBhOv57XXOLRBKyxXSfGeq%2Bt%2BbkRB%2BsYaxvWySfFZ5Vhr0u6YS5ehOIHKugSu3cMUevzSQie6bRAh%2BJ2HvjyCDPBWda0nEh9ZMW5T7MpRRQsQzBnn3ZbeGQKWsQzKejLwzrmYpPFYpUr2YHybmbqTkLkWt0QSneKen%2BVdjk11yC5IicbXGll0PGuYyl63XKSV9Kgm2F3rj4PKv1DxbfYA%2Fhs4r%2F6zh4TA5NIt59sKkCZ9zEDpV0lDo%2BmmEVvZQzcKqC3G5x80oG3WkFE4nEKCc%2F%2Bjb6OT%2BkOhOd3Le8HdVlekB2K6%2Fnj%2BdVBR6karGojF5h9g0rDV5BzCtyjlN67e8JftXyx9JJc7VzCTxNrBBjqkAVE2YJbhemXyaRl5BkWXaVKerzYtZzu4oxyFWMtdTCuYhE54u7srJ7QKqQBZrW%2BU%2F0evpTM1zcnpjfnlAkuAZkm03DIhSh76hZTUJufPl1f9TAf%2BByQ5mqY71B%2Bfaa8hvjhC74SsgJ%2Fyg7HRqVmkBIsl67giBOTdjmiylzkkIcO4Z%2BhO6pEEN30dMis7GIj9S3AANu7X0ws1ykdezJEM3u8KAQNQ&X-Amz-Signature=0433805ab0a3bc5fc0a090a062bd1884d55c09dca9d52e2d1bfa1d4ba3942871&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMS5A67W%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMjb8%2FVfP9E9J77ecfGCfHlQ8KJAH2R0enzgQu8E3MPwIhAJj6pS1%2FvhERYmCOk2ErcPYpuR8G0cM3LWB0Cpa86%2FHxKv8DCG8QABoMNjM3NDIzMTgzODA1IgzR42F0PJEqDIu9%2FxQq3AN5xoihjvEVjw0FZkrNubekXEWHI36n0oKfEbao1%2FWp2m7OunIZPJIgrCkz%2Fg3ZJTIb5IOyTVZsRgprsSOBQ%2FsNyF5Sxtea3UJqHBhGh62MUp0PLrrfAocsPFRL1tYriUY4wGNKWc445IQV4q%2FcvILd%2Bs%2FOWGOVLfmlpKQyq6rr12Mw60dDJVvlfVkqx2Hj2wvi%2Fq31JsxzdvNTAqt%2F1w0t6Kgatrk5zsq8ULBs86E8pLIB%2BRE5i9juQtYJ6NDc%2FKH%2FVyWAT7iQwByxr%2FDQBypYWpEZBhOv57XXOLRBKyxXSfGeq%2Bt%2BbkRB%2BsYaxvWySfFZ5Vhr0u6YS5ehOIHKugSu3cMUevzSQie6bRAh%2BJ2HvjyCDPBWda0nEh9ZMW5T7MpRRQsQzBnn3ZbeGQKWsQzKejLwzrmYpPFYpUr2YHybmbqTkLkWt0QSneKen%2BVdjk11yC5IicbXGll0PGuYyl63XKSV9Kgm2F3rj4PKv1DxbfYA%2Fhs4r%2F6zh4TA5NIt59sKkCZ9zEDpV0lDo%2BmmEVvZQzcKqC3G5x80oG3WkFE4nEKCc%2F%2Bjb6OT%2BkOhOd3Le8HdVlekB2K6%2Fnj%2BdVBR6karGojF5h9g0rDV5BzCtyjlN67e8JftXyx9JJc7VzCTxNrBBjqkAVE2YJbhemXyaRl5BkWXaVKerzYtZzu4oxyFWMtdTCuYhE54u7srJ7QKqQBZrW%2BU%2F0evpTM1zcnpjfnlAkuAZkm03DIhSh76hZTUJufPl1f9TAf%2BByQ5mqY71B%2Bfaa8hvjhC74SsgJ%2Fyg7HRqVmkBIsl67giBOTdjmiylzkkIcO4Z%2BhO6pEEN30dMis7GIj9S3AANu7X0ws1ykdezJEM3u8KAQNQ&X-Amz-Signature=91a0dbe8c015cfbb2e9bba2538ba4aab6bfab417ab2cb63f6c55f58d2b1065c5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

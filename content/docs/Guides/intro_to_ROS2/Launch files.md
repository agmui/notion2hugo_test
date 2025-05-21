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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NNC267%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGMNicMSzmLbwjwl7LqDEIGbJZ1PGaJIliVVI1K0VSV4AiEA4kE%2FbTnNWl1aMwQMh10PkGo6cqgCj%2BJPXEE%2FHZeKWSsqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKH2vb%2BfnpMj88jqircA9YGMHBJysdlKcw5MMPslTtqLFLTdfsGG5dHjwgj6DzPA3TUnHPlDLMoAxdnNhULfjc%2F3bGypUFwfb0pzFOZ3lnWHK58BOG7zC%2B1NJ82j%2F4OTiLeg6n2L8nD%2BM9MM686BgVIysPJAhjYm9tZSKExi9riag2Qqq%2FDzOBlCePCu5uBbsHBT9RCkHXu3ra8y2roekB4lVIpWxBWmNPknfJHzSTOLflMABlZQp91h%2F8qAFyotTgHHMQAcSLBMeDuIoT0ypQSjE7T%2BPmGar6C6CY%2BcKmDYEjQSq9rwNi1x2osM6nr5HTtMxKbL%2FoBP2H7cH6bMKEUCKNPzFi271%2FHzXyGIe%2F%2FU3EPwQSccfOxTOxfJ9p%2BP8oxo7NHel1VsuM34NAfMfDsA8MVOOnRoit3%2BNy00QPEdPhMYp%2FWX6s%2BL%2Bpel97SUqEs2UgPooeFPPCjF7Ylm6aT1FmaYkY8hMdNKLmOF0Tx7EhApN%2FpvGpEZrurICOryreS%2FO5IOkQEn1ChvJaiGf4C%2FUfXWczJq%2BKbHyjsTYdb3ZMNqu0C8McwMy0RtC6muj4K0U5eoM1c7m7f1oy5ZJ3IXBW9bScq8XOELc1X2pwga%2F5eBBCgyp55Yr4X4Nfd8bkMUsuHATAGjE8eMInBuMEGOqUBR%2FU%2FSC%2FIUOV%2Fu5WvhsyfQF%2BXzjGxwsSFnSIwJKe4a%2FYq9Kqz%2FQW%2Fk%2F5f8cnWW02aPRs7OdHXN%2FAwHKeTFqjz7ruxv6UUlMPtS3rPg07q6j6OL3Jx1fqHLk20ykfsLr4StrZvX5OHRQzKlTKi8FNy5mqTHKgF%2FLTjOkVwmXmCQ5UvCMVsYtD70N7Q%2FHbdorK4Pe3H%2FQr22eEwRU39%2FkJS98v9%2BJkk&X-Amz-Signature=bea9a0e6ea164aa3b0287f39ff46b0fb07045c9c5947132c30e5103970510ed2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NNC267%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGMNicMSzmLbwjwl7LqDEIGbJZ1PGaJIliVVI1K0VSV4AiEA4kE%2FbTnNWl1aMwQMh10PkGo6cqgCj%2BJPXEE%2FHZeKWSsqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKH2vb%2BfnpMj88jqircA9YGMHBJysdlKcw5MMPslTtqLFLTdfsGG5dHjwgj6DzPA3TUnHPlDLMoAxdnNhULfjc%2F3bGypUFwfb0pzFOZ3lnWHK58BOG7zC%2B1NJ82j%2F4OTiLeg6n2L8nD%2BM9MM686BgVIysPJAhjYm9tZSKExi9riag2Qqq%2FDzOBlCePCu5uBbsHBT9RCkHXu3ra8y2roekB4lVIpWxBWmNPknfJHzSTOLflMABlZQp91h%2F8qAFyotTgHHMQAcSLBMeDuIoT0ypQSjE7T%2BPmGar6C6CY%2BcKmDYEjQSq9rwNi1x2osM6nr5HTtMxKbL%2FoBP2H7cH6bMKEUCKNPzFi271%2FHzXyGIe%2F%2FU3EPwQSccfOxTOxfJ9p%2BP8oxo7NHel1VsuM34NAfMfDsA8MVOOnRoit3%2BNy00QPEdPhMYp%2FWX6s%2BL%2Bpel97SUqEs2UgPooeFPPCjF7Ylm6aT1FmaYkY8hMdNKLmOF0Tx7EhApN%2FpvGpEZrurICOryreS%2FO5IOkQEn1ChvJaiGf4C%2FUfXWczJq%2BKbHyjsTYdb3ZMNqu0C8McwMy0RtC6muj4K0U5eoM1c7m7f1oy5ZJ3IXBW9bScq8XOELc1X2pwga%2F5eBBCgyp55Yr4X4Nfd8bkMUsuHATAGjE8eMInBuMEGOqUBR%2FU%2FSC%2FIUOV%2Fu5WvhsyfQF%2BXzjGxwsSFnSIwJKe4a%2FYq9Kqz%2FQW%2Fk%2F5f8cnWW02aPRs7OdHXN%2FAwHKeTFqjz7ruxv6UUlMPtS3rPg07q6j6OL3Jx1fqHLk20ykfsLr4StrZvX5OHRQzKlTKi8FNy5mqTHKgF%2FLTjOkVwmXmCQ5UvCMVsYtD70N7Q%2FHbdorK4Pe3H%2FQr22eEwRU39%2FkJS98v9%2BJkk&X-Amz-Signature=ffac8319fddb7ec9420baa1b83d5374dda8cd11d435071f3374e4bf8464335bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NNC267%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGMNicMSzmLbwjwl7LqDEIGbJZ1PGaJIliVVI1K0VSV4AiEA4kE%2FbTnNWl1aMwQMh10PkGo6cqgCj%2BJPXEE%2FHZeKWSsqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJKH2vb%2BfnpMj88jqircA9YGMHBJysdlKcw5MMPslTtqLFLTdfsGG5dHjwgj6DzPA3TUnHPlDLMoAxdnNhULfjc%2F3bGypUFwfb0pzFOZ3lnWHK58BOG7zC%2B1NJ82j%2F4OTiLeg6n2L8nD%2BM9MM686BgVIysPJAhjYm9tZSKExi9riag2Qqq%2FDzOBlCePCu5uBbsHBT9RCkHXu3ra8y2roekB4lVIpWxBWmNPknfJHzSTOLflMABlZQp91h%2F8qAFyotTgHHMQAcSLBMeDuIoT0ypQSjE7T%2BPmGar6C6CY%2BcKmDYEjQSq9rwNi1x2osM6nr5HTtMxKbL%2FoBP2H7cH6bMKEUCKNPzFi271%2FHzXyGIe%2F%2FU3EPwQSccfOxTOxfJ9p%2BP8oxo7NHel1VsuM34NAfMfDsA8MVOOnRoit3%2BNy00QPEdPhMYp%2FWX6s%2BL%2Bpel97SUqEs2UgPooeFPPCjF7Ylm6aT1FmaYkY8hMdNKLmOF0Tx7EhApN%2FpvGpEZrurICOryreS%2FO5IOkQEn1ChvJaiGf4C%2FUfXWczJq%2BKbHyjsTYdb3ZMNqu0C8McwMy0RtC6muj4K0U5eoM1c7m7f1oy5ZJ3IXBW9bScq8XOELc1X2pwga%2F5eBBCgyp55Yr4X4Nfd8bkMUsuHATAGjE8eMInBuMEGOqUBR%2FU%2FSC%2FIUOV%2Fu5WvhsyfQF%2BXzjGxwsSFnSIwJKe4a%2FYq9Kqz%2FQW%2Fk%2F5f8cnWW02aPRs7OdHXN%2FAwHKeTFqjz7ruxv6UUlMPtS3rPg07q6j6OL3Jx1fqHLk20ykfsLr4StrZvX5OHRQzKlTKi8FNy5mqTHKgF%2FLTjOkVwmXmCQ5UvCMVsYtD70N7Q%2FHbdorK4Pe3H%2FQr22eEwRU39%2FkJS98v9%2BJkk&X-Amz-Signature=346a255e0cf8039306d102067e9045da22badd23845225df8c3d17aab9a0042d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

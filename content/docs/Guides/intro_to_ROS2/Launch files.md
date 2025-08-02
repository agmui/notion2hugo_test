---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5HBGKOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMU8Xk%2B3%2BRQxNSxU4PR4BCZthH34WXHDKKwCkljBO%2BfAIhANaV%2FOr1qQlBF3k2R3b3ilEV3fkxYbIYoCMvJv7Ps0xHKv8DCBYQABoMNjM3NDIzMTgzODA1IgyJSBvWJzLsrM8Ddlcq3APkdt8plH9OvucqyUAycPTg1qmvwVwqcFAG2Vn3V%2BOY3oLxtMLIsbbFjXTqirlCVefS4VwTVJk5pv0WtEzWP2hQ3%2FKOffw0oaC%2F0VGE%2F5haT4jFU5dtCjoxxnpbe4fpdpSYUPKnre9mCNTU7ghXGCJjNecxJ7NDyvwO3jHi5BPcRIu%2BFFJ%2Fw17Z697vc9k%2FcYn3zrTRNWhQbs7F4kh%2BQRD4NWY%2FwEZ35qBdBrI2KDjUY8vK4%2Br2uu%2FpNBik%2F295HwC0%2BP8UuQ2oKsyK0kp0W96%2FyGhdyspuRxOg9wnVC1GQnDJLhLx%2F%2B4oU70KLA%2F%2FLvk10D7OClA7Pl0EMIBXe1ZOTtGQCuVTzKsRskBLn%2FSbKABP8rZRu2Ld7ElV8Xz%2FU5X8i3aTldLsYz%2FYz5ZaChXiLphfv6yJ1n6j0ak6BZ8i0LuYwwpO1tCXPxLB2CSFfJoiOQPtnTvVrthIvkgpdGK4PLwbMowFYfncXMETrBNpSJ5PksaH40ZKM3iqKP02mUtlfMOxPjhZNpSIxSjhRu9kGtwACjORpo8Iq9B6BnljIwZmrhBzN20b65TElL9vkeaEzrpLC5c0w1cOd1YkEdfuw0bN4hDyj75q63WBP7RAclBzXn5y0M0J0C0WxjTDrkrjEBjqkAVVuLQPOyqNP%2BQaJ2CIqgnZiISA8xQWY3X23h6LRlWjb%2FHyC0X16GA7WcM5rGwKNM90ABGwymRQ0gCd0GoTih4hzEjJtriYtjCeHdp2s4AQdFbEcdeiFWcb3%2BX6XAj80TQOoic9qYKV9u9%2FgK9CfrkVrze3LIlIpNMTDxiyS3jpv96BeStZ5cnXyoAbIZCgotAJiQXBmEKe%2B%2FU4GtBKn2GPs3xu3&X-Amz-Signature=580611620e049abe1252c66ffd5b2676b109b804d65202cd31312c6443399fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5HBGKOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMU8Xk%2B3%2BRQxNSxU4PR4BCZthH34WXHDKKwCkljBO%2BfAIhANaV%2FOr1qQlBF3k2R3b3ilEV3fkxYbIYoCMvJv7Ps0xHKv8DCBYQABoMNjM3NDIzMTgzODA1IgyJSBvWJzLsrM8Ddlcq3APkdt8plH9OvucqyUAycPTg1qmvwVwqcFAG2Vn3V%2BOY3oLxtMLIsbbFjXTqirlCVefS4VwTVJk5pv0WtEzWP2hQ3%2FKOffw0oaC%2F0VGE%2F5haT4jFU5dtCjoxxnpbe4fpdpSYUPKnre9mCNTU7ghXGCJjNecxJ7NDyvwO3jHi5BPcRIu%2BFFJ%2Fw17Z697vc9k%2FcYn3zrTRNWhQbs7F4kh%2BQRD4NWY%2FwEZ35qBdBrI2KDjUY8vK4%2Br2uu%2FpNBik%2F295HwC0%2BP8UuQ2oKsyK0kp0W96%2FyGhdyspuRxOg9wnVC1GQnDJLhLx%2F%2B4oU70KLA%2F%2FLvk10D7OClA7Pl0EMIBXe1ZOTtGQCuVTzKsRskBLn%2FSbKABP8rZRu2Ld7ElV8Xz%2FU5X8i3aTldLsYz%2FYz5ZaChXiLphfv6yJ1n6j0ak6BZ8i0LuYwwpO1tCXPxLB2CSFfJoiOQPtnTvVrthIvkgpdGK4PLwbMowFYfncXMETrBNpSJ5PksaH40ZKM3iqKP02mUtlfMOxPjhZNpSIxSjhRu9kGtwACjORpo8Iq9B6BnljIwZmrhBzN20b65TElL9vkeaEzrpLC5c0w1cOd1YkEdfuw0bN4hDyj75q63WBP7RAclBzXn5y0M0J0C0WxjTDrkrjEBjqkAVVuLQPOyqNP%2BQaJ2CIqgnZiISA8xQWY3X23h6LRlWjb%2FHyC0X16GA7WcM5rGwKNM90ABGwymRQ0gCd0GoTih4hzEjJtriYtjCeHdp2s4AQdFbEcdeiFWcb3%2BX6XAj80TQOoic9qYKV9u9%2FgK9CfrkVrze3LIlIpNMTDxiyS3jpv96BeStZ5cnXyoAbIZCgotAJiQXBmEKe%2B%2FU4GtBKn2GPs3xu3&X-Amz-Signature=43ce805784b0dd860cd7b8181a951f21c2cc199e4e92130c51962331cecb1567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5HBGKOR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T170813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMU8Xk%2B3%2BRQxNSxU4PR4BCZthH34WXHDKKwCkljBO%2BfAIhANaV%2FOr1qQlBF3k2R3b3ilEV3fkxYbIYoCMvJv7Ps0xHKv8DCBYQABoMNjM3NDIzMTgzODA1IgyJSBvWJzLsrM8Ddlcq3APkdt8plH9OvucqyUAycPTg1qmvwVwqcFAG2Vn3V%2BOY3oLxtMLIsbbFjXTqirlCVefS4VwTVJk5pv0WtEzWP2hQ3%2FKOffw0oaC%2F0VGE%2F5haT4jFU5dtCjoxxnpbe4fpdpSYUPKnre9mCNTU7ghXGCJjNecxJ7NDyvwO3jHi5BPcRIu%2BFFJ%2Fw17Z697vc9k%2FcYn3zrTRNWhQbs7F4kh%2BQRD4NWY%2FwEZ35qBdBrI2KDjUY8vK4%2Br2uu%2FpNBik%2F295HwC0%2BP8UuQ2oKsyK0kp0W96%2FyGhdyspuRxOg9wnVC1GQnDJLhLx%2F%2B4oU70KLA%2F%2FLvk10D7OClA7Pl0EMIBXe1ZOTtGQCuVTzKsRskBLn%2FSbKABP8rZRu2Ld7ElV8Xz%2FU5X8i3aTldLsYz%2FYz5ZaChXiLphfv6yJ1n6j0ak6BZ8i0LuYwwpO1tCXPxLB2CSFfJoiOQPtnTvVrthIvkgpdGK4PLwbMowFYfncXMETrBNpSJ5PksaH40ZKM3iqKP02mUtlfMOxPjhZNpSIxSjhRu9kGtwACjORpo8Iq9B6BnljIwZmrhBzN20b65TElL9vkeaEzrpLC5c0w1cOd1YkEdfuw0bN4hDyj75q63WBP7RAclBzXn5y0M0J0C0WxjTDrkrjEBjqkAVVuLQPOyqNP%2BQaJ2CIqgnZiISA8xQWY3X23h6LRlWjb%2FHyC0X16GA7WcM5rGwKNM90ABGwymRQ0gCd0GoTih4hzEjJtriYtjCeHdp2s4AQdFbEcdeiFWcb3%2BX6XAj80TQOoic9qYKV9u9%2FgK9CfrkVrze3LIlIpNMTDxiyS3jpv96BeStZ5cnXyoAbIZCgotAJiQXBmEKe%2B%2FU4GtBKn2GPs3xu3&X-Amz-Signature=7d7435754ce5ea72fb88e49aa53b76ad224e14be6d9a04312c0b84f2dbca8598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

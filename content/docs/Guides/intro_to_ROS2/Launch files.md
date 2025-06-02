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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLA7QNU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDvO080Z%2FeMG0OUK%2FFUVD9TviiyVm5A26XDQ8a%2B7ljWiwIgF3G2tl8ThPL4y2d%2FHIpuudH5jFpOQ0EddYGZBfYPYR4qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs5uILzPAWIhd0g0ircAwHvq1lwJe6dJ3AT%2BFZZSuo7wiBGtE9dPav1mLtKyWS3%2BB2hfeUoF1sbyPFbGhz%2BWG56f8uumsVQcQOcVzmsVlfudeJ4GPzk1cGv9A1MzVU3PvaEdi9QnUoxEJV3%2BtRZ4GFHu%2FYxfnoN0vJTY0FLOozUfYbGPgWDZtaR0OZzmQQ9NzDzRy9CW5XqNu3Yq%2BahxCds3WxMnwYm%2BIJq26vMXQKvZIGCwtnVCMqyy74YbdHRfWjW789qvtvsbpd6LagrNmo8rSI186NMhcMib%2B%2Bm0GbL4XNFUk5ZsCOVRFRiUE%2BzWxDY8Xv0WII8T7jWYw0yaD5fZSDoyV6UKKKHjVn6lkawWWnYw0JWZGkbYwUtulzhAjwEIJ1MbtRmvhYyD6cv9DmFq2gtBS8BTkrBbVjoqBHcoV1Tisw3AgIva8beyONqCe6Fl5c0qfg2keAKhIDB2bfEnpnNk0QL21QS0QEWJPTfpjmD6oG4sgeeVsLum4bvHXnQjx2p9ixEGaEC%2Bpkt3Pc1uB28QYcFpB%2FG1nw5s7CkBrzKUs7vL%2Fae2r3fiBM3R2hbHu2CSHwYesZEfCTe2yItDU6BqGvqqor4m2RSFq46%2FCrJ8swmiG8Fhf%2F0XCWcO4BjW2v7PUU6HhP6MNmQ9cEGOqUB1n9eOA1sVVMYu6fkDPzTStpD0KsID6b98uPG03oDoDyeyCXmBtoI8IcvvX%2Bh8Tb9yoM0RdzAfVXP9aeUmQP5dwQtA6xg5a04EjUEI%2FqhwD5lVN4lmkvoSwwyQWhLkSQH3Ggm3F1%2BcEmf3075nWnEVG%2FgbEN0f2eiWzFF975mkUYSc3J9v0Zq31JVPLwCUZr5Apz3ofmHRcvUg592STJX7Jpj2KDX&X-Amz-Signature=7c59f409811f039e71e26b75af46641a142ea1886c3404e203893c2cd373ed07&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLA7QNU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDvO080Z%2FeMG0OUK%2FFUVD9TviiyVm5A26XDQ8a%2B7ljWiwIgF3G2tl8ThPL4y2d%2FHIpuudH5jFpOQ0EddYGZBfYPYR4qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs5uILzPAWIhd0g0ircAwHvq1lwJe6dJ3AT%2BFZZSuo7wiBGtE9dPav1mLtKyWS3%2BB2hfeUoF1sbyPFbGhz%2BWG56f8uumsVQcQOcVzmsVlfudeJ4GPzk1cGv9A1MzVU3PvaEdi9QnUoxEJV3%2BtRZ4GFHu%2FYxfnoN0vJTY0FLOozUfYbGPgWDZtaR0OZzmQQ9NzDzRy9CW5XqNu3Yq%2BahxCds3WxMnwYm%2BIJq26vMXQKvZIGCwtnVCMqyy74YbdHRfWjW789qvtvsbpd6LagrNmo8rSI186NMhcMib%2B%2Bm0GbL4XNFUk5ZsCOVRFRiUE%2BzWxDY8Xv0WII8T7jWYw0yaD5fZSDoyV6UKKKHjVn6lkawWWnYw0JWZGkbYwUtulzhAjwEIJ1MbtRmvhYyD6cv9DmFq2gtBS8BTkrBbVjoqBHcoV1Tisw3AgIva8beyONqCe6Fl5c0qfg2keAKhIDB2bfEnpnNk0QL21QS0QEWJPTfpjmD6oG4sgeeVsLum4bvHXnQjx2p9ixEGaEC%2Bpkt3Pc1uB28QYcFpB%2FG1nw5s7CkBrzKUs7vL%2Fae2r3fiBM3R2hbHu2CSHwYesZEfCTe2yItDU6BqGvqqor4m2RSFq46%2FCrJ8swmiG8Fhf%2F0XCWcO4BjW2v7PUU6HhP6MNmQ9cEGOqUB1n9eOA1sVVMYu6fkDPzTStpD0KsID6b98uPG03oDoDyeyCXmBtoI8IcvvX%2Bh8Tb9yoM0RdzAfVXP9aeUmQP5dwQtA6xg5a04EjUEI%2FqhwD5lVN4lmkvoSwwyQWhLkSQH3Ggm3F1%2BcEmf3075nWnEVG%2FgbEN0f2eiWzFF975mkUYSc3J9v0Zq31JVPLwCUZr5Apz3ofmHRcvUg592STJX7Jpj2KDX&X-Amz-Signature=664f64fdd5e5206c74429a593d92af3ff24108d643f5d1de1ec1b54c28d832b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRLA7QNU%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDvO080Z%2FeMG0OUK%2FFUVD9TviiyVm5A26XDQ8a%2B7ljWiwIgF3G2tl8ThPL4y2d%2FHIpuudH5jFpOQ0EddYGZBfYPYR4qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJs5uILzPAWIhd0g0ircAwHvq1lwJe6dJ3AT%2BFZZSuo7wiBGtE9dPav1mLtKyWS3%2BB2hfeUoF1sbyPFbGhz%2BWG56f8uumsVQcQOcVzmsVlfudeJ4GPzk1cGv9A1MzVU3PvaEdi9QnUoxEJV3%2BtRZ4GFHu%2FYxfnoN0vJTY0FLOozUfYbGPgWDZtaR0OZzmQQ9NzDzRy9CW5XqNu3Yq%2BahxCds3WxMnwYm%2BIJq26vMXQKvZIGCwtnVCMqyy74YbdHRfWjW789qvtvsbpd6LagrNmo8rSI186NMhcMib%2B%2Bm0GbL4XNFUk5ZsCOVRFRiUE%2BzWxDY8Xv0WII8T7jWYw0yaD5fZSDoyV6UKKKHjVn6lkawWWnYw0JWZGkbYwUtulzhAjwEIJ1MbtRmvhYyD6cv9DmFq2gtBS8BTkrBbVjoqBHcoV1Tisw3AgIva8beyONqCe6Fl5c0qfg2keAKhIDB2bfEnpnNk0QL21QS0QEWJPTfpjmD6oG4sgeeVsLum4bvHXnQjx2p9ixEGaEC%2Bpkt3Pc1uB28QYcFpB%2FG1nw5s7CkBrzKUs7vL%2Fae2r3fiBM3R2hbHu2CSHwYesZEfCTe2yItDU6BqGvqqor4m2RSFq46%2FCrJ8swmiG8Fhf%2F0XCWcO4BjW2v7PUU6HhP6MNmQ9cEGOqUB1n9eOA1sVVMYu6fkDPzTStpD0KsID6b98uPG03oDoDyeyCXmBtoI8IcvvX%2Bh8Tb9yoM0RdzAfVXP9aeUmQP5dwQtA6xg5a04EjUEI%2FqhwD5lVN4lmkvoSwwyQWhLkSQH3Ggm3F1%2BcEmf3075nWnEVG%2FgbEN0f2eiWzFF975mkUYSc3J9v0Zq31JVPLwCUZr5Apz3ofmHRcvUg592STJX7Jpj2KDX&X-Amz-Signature=4c83d6688b3b4f8b5768554365084f71e9ccd3d164b2324364cda7c5a6e4d79a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

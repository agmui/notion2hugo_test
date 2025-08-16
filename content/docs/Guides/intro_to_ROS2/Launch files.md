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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H7VNIMY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCsvgNYRNDQ5xVIaSLH4f6RYkyeh4lWD1E%2FAmt2KDSsgAIgfYh8VMPCB%2FFgCC7mSy3EeJWKinq93yfOWmBzsIT%2FnPgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDP7ndfAx9cmjqNaCwCrcA5iv6yUpTVpu0KWtezO%2FmgrQv9TgSaypPM0txa0zaH92jmlwNJUWYYSAFQdXLopFL9PQa4WYV3oUr5VZtFslYH09vjdl7iH7474vFpvXOgkK6vbjdleWSqJJ8yqSq18slKq%2BBDOiYMXMUqqIUuM4a0TEkM0%2BNsB7IN7qzl1fgmtUynmHHTNvJ3Odn9cH%2BbnPuPwpf7v5y3xAIv0fs%2BiJrzLVPS8%2BDyh8HPvMMMSxcFpJshCi96ZAySzUQmYmY62BBDg76flrvE7bEqOcNS6DJX6Jy693C2VEeDoXZrpmokH4GmCGPNwhiI%2ByH4iLHsc0hxTewlh%2FJD%2Frw8g7Kjhm78XVSXnW9OjHo2VEjlo8W9Qt7jrGLw5n3ymH87EAh06dhqUkged7pqOr9sz5jsjs%2Bvmd3ZV%2FfN10GoKF%2F%2B4W1L6o3L4taXcMFqa38yIHOTegxiiWK5UX4oGpPmXLTLfQTuARO0IbK%2Fm5A3DdlF3Ikns64%2BM%2FMdeKdFbaJ0u6H2HFzW2EWXwfV0UXtZaznsQKfd9CEyGjA%2BvvMBaM%2B%2FG6R4EMDj5W5Gxny6JMgfQb4yM1CfKjCcxShjhS0qg%2B0Oit7eZ4BpIjK0bK6ma%2BRCx1mYsNUU5zpcQzxS4iMdv3MODY%2FsQGOqUB%2FM51IarWgrytzCv2vdXRtT9bKkNNMoqkMe1zMihqn2f5NGy9h5M9kyMV6QOjKcbYTmPhCOhfumP4YqAidZY7MPRcuRxcHWXdr0xQ0%2BgBbm5AjA1IK8%2FVzGvy4Hvuac%2BuHcvCrlXEcbhndisKb3kD37nh3Ki%2FyY9imk7nrLpfDTIIvktCE1kSV4T7nOPUb%2BxdHDZGXj16%2Bo%2Fo5GnPYOy%2Bh3GaGWqn&X-Amz-Signature=045289fc4b0e325eafb4094a6071cf27e391339af031eb1d64ff6ca809f235f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H7VNIMY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCsvgNYRNDQ5xVIaSLH4f6RYkyeh4lWD1E%2FAmt2KDSsgAIgfYh8VMPCB%2FFgCC7mSy3EeJWKinq93yfOWmBzsIT%2FnPgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDP7ndfAx9cmjqNaCwCrcA5iv6yUpTVpu0KWtezO%2FmgrQv9TgSaypPM0txa0zaH92jmlwNJUWYYSAFQdXLopFL9PQa4WYV3oUr5VZtFslYH09vjdl7iH7474vFpvXOgkK6vbjdleWSqJJ8yqSq18slKq%2BBDOiYMXMUqqIUuM4a0TEkM0%2BNsB7IN7qzl1fgmtUynmHHTNvJ3Odn9cH%2BbnPuPwpf7v5y3xAIv0fs%2BiJrzLVPS8%2BDyh8HPvMMMSxcFpJshCi96ZAySzUQmYmY62BBDg76flrvE7bEqOcNS6DJX6Jy693C2VEeDoXZrpmokH4GmCGPNwhiI%2ByH4iLHsc0hxTewlh%2FJD%2Frw8g7Kjhm78XVSXnW9OjHo2VEjlo8W9Qt7jrGLw5n3ymH87EAh06dhqUkged7pqOr9sz5jsjs%2Bvmd3ZV%2FfN10GoKF%2F%2B4W1L6o3L4taXcMFqa38yIHOTegxiiWK5UX4oGpPmXLTLfQTuARO0IbK%2Fm5A3DdlF3Ikns64%2BM%2FMdeKdFbaJ0u6H2HFzW2EWXwfV0UXtZaznsQKfd9CEyGjA%2BvvMBaM%2B%2FG6R4EMDj5W5Gxny6JMgfQb4yM1CfKjCcxShjhS0qg%2B0Oit7eZ4BpIjK0bK6ma%2BRCx1mYsNUU5zpcQzxS4iMdv3MODY%2FsQGOqUB%2FM51IarWgrytzCv2vdXRtT9bKkNNMoqkMe1zMihqn2f5NGy9h5M9kyMV6QOjKcbYTmPhCOhfumP4YqAidZY7MPRcuRxcHWXdr0xQ0%2BgBbm5AjA1IK8%2FVzGvy4Hvuac%2BuHcvCrlXEcbhndisKb3kD37nh3Ki%2FyY9imk7nrLpfDTIIvktCE1kSV4T7nOPUb%2BxdHDZGXj16%2Bo%2Fo5GnPYOy%2Bh3GaGWqn&X-Amz-Signature=678b94c9b2675fa609acfea79fb7e5f95aed91518206dfd1cb8e08f088a5a5e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H7VNIMY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCsvgNYRNDQ5xVIaSLH4f6RYkyeh4lWD1E%2FAmt2KDSsgAIgfYh8VMPCB%2FFgCC7mSy3EeJWKinq93yfOWmBzsIT%2FnPgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDP7ndfAx9cmjqNaCwCrcA5iv6yUpTVpu0KWtezO%2FmgrQv9TgSaypPM0txa0zaH92jmlwNJUWYYSAFQdXLopFL9PQa4WYV3oUr5VZtFslYH09vjdl7iH7474vFpvXOgkK6vbjdleWSqJJ8yqSq18slKq%2BBDOiYMXMUqqIUuM4a0TEkM0%2BNsB7IN7qzl1fgmtUynmHHTNvJ3Odn9cH%2BbnPuPwpf7v5y3xAIv0fs%2BiJrzLVPS8%2BDyh8HPvMMMSxcFpJshCi96ZAySzUQmYmY62BBDg76flrvE7bEqOcNS6DJX6Jy693C2VEeDoXZrpmokH4GmCGPNwhiI%2ByH4iLHsc0hxTewlh%2FJD%2Frw8g7Kjhm78XVSXnW9OjHo2VEjlo8W9Qt7jrGLw5n3ymH87EAh06dhqUkged7pqOr9sz5jsjs%2Bvmd3ZV%2FfN10GoKF%2F%2B4W1L6o3L4taXcMFqa38yIHOTegxiiWK5UX4oGpPmXLTLfQTuARO0IbK%2Fm5A3DdlF3Ikns64%2BM%2FMdeKdFbaJ0u6H2HFzW2EWXwfV0UXtZaznsQKfd9CEyGjA%2BvvMBaM%2B%2FG6R4EMDj5W5Gxny6JMgfQb4yM1CfKjCcxShjhS0qg%2B0Oit7eZ4BpIjK0bK6ma%2BRCx1mYsNUU5zpcQzxS4iMdv3MODY%2FsQGOqUB%2FM51IarWgrytzCv2vdXRtT9bKkNNMoqkMe1zMihqn2f5NGy9h5M9kyMV6QOjKcbYTmPhCOhfumP4YqAidZY7MPRcuRxcHWXdr0xQ0%2BgBbm5AjA1IK8%2FVzGvy4Hvuac%2BuHcvCrlXEcbhndisKb3kD37nh3Ki%2FyY9imk7nrLpfDTIIvktCE1kSV4T7nOPUb%2BxdHDZGXj16%2Bo%2Fo5GnPYOy%2Bh3GaGWqn&X-Amz-Signature=39ad30bc2042bcdec5f8fce453125e1f5c2fe1d696267a5b67e2d2dcdc3a2669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJZXIBAC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICpZb0s7Zogk6A%2FYoeuvX0UYRpeiub3rXsLmN2Yir1phAiEAyZp6AtQ8FrG78B%2BZruKKs0a%2BnlO%2BSIChTLQs89HmU98qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKicJM7i%2B9XRIH%2FNdCrcA%2FeqLDqV3FL3tiVEtNlwHKa5lgwJQ2zZMQHdmryYyFQHLWEyQ6oiAISEqEszMCi0r3H0N50e2s4qKf8QzDRZYxqAT7T%2BK5XTwdO0pbBBaltTeK%2B%2BuOCm12q%2B%2FKCuUanzMTFRjY6mDtcyRbkoh9DHapsVmLNIO6vV845M7XCaliNn6QlnAc6P4MGO53mF2vhwc8Lc8cESQRRDVStZhN2at%2BtcCGh7X9oTBx1n%2BXAR0u5AO6O7vvHVwykQhhYst6iAcWMwqeRQwRdQK3PiMSu%2F34Jr%2BNUJ6%2BRmJVW3sp%2FSbxm%2FG%2Fj%2F8Gn9kSPoMR%2B7t0JHwRWuQE9sejHMq%2BQ0qaizHzdK44YQBlkWlKEQCtI%2FEDmXj5kiSWlbhyUinFUHdVY%2BMXMNauoQiADSn8ehZNyFj0zkW30QzYf4mI0KJRfBOcVEbd1%2B7yKhtFtpgXqm2S9EAkamd7SYffyEH4jdgPQZk3UIoARgTuhM06mASJxHwpLM482Pn1ZeNqzfBa55OdiKdvzEojStxeZIi9vZuYDhXK6AY1kWgnWKgvyHdiuGTffExtnzGpMucE4FmIPaCtAJTavLoIz8VBnbX%2FjenU5p4yCmg%2FheG4Ge47q1aVinxjNDer%2BcERFYVCVFXBUCMPqZ6sMGOqUBk%2B3W5pTahwvU4cTZOD4E71vsoW%2Fw6j6hLlQw%2BN2wiNmtncbkLePQV6d%2FvhP8aOIlm2mXiVL6%2F1H8VQHaj19WA%2FNaWx1rFthyGNk8SVho1nWk02mKzQFKzRd90dTyd1y%2BBy9DDjyMIvV0O12amiuRoclewI1eDy%2Fix0lKwfaWHqg9IeH2SAH8HdfrDhN54THSiXXrnAYVhkbKwzRIcL6U8nAb0WJc&X-Amz-Signature=594bc94fc221e618d4f5499108248358744df5ac0810bc828320243d21a60912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJZXIBAC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICpZb0s7Zogk6A%2FYoeuvX0UYRpeiub3rXsLmN2Yir1phAiEAyZp6AtQ8FrG78B%2BZruKKs0a%2BnlO%2BSIChTLQs89HmU98qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKicJM7i%2B9XRIH%2FNdCrcA%2FeqLDqV3FL3tiVEtNlwHKa5lgwJQ2zZMQHdmryYyFQHLWEyQ6oiAISEqEszMCi0r3H0N50e2s4qKf8QzDRZYxqAT7T%2BK5XTwdO0pbBBaltTeK%2B%2BuOCm12q%2B%2FKCuUanzMTFRjY6mDtcyRbkoh9DHapsVmLNIO6vV845M7XCaliNn6QlnAc6P4MGO53mF2vhwc8Lc8cESQRRDVStZhN2at%2BtcCGh7X9oTBx1n%2BXAR0u5AO6O7vvHVwykQhhYst6iAcWMwqeRQwRdQK3PiMSu%2F34Jr%2BNUJ6%2BRmJVW3sp%2FSbxm%2FG%2Fj%2F8Gn9kSPoMR%2B7t0JHwRWuQE9sejHMq%2BQ0qaizHzdK44YQBlkWlKEQCtI%2FEDmXj5kiSWlbhyUinFUHdVY%2BMXMNauoQiADSn8ehZNyFj0zkW30QzYf4mI0KJRfBOcVEbd1%2B7yKhtFtpgXqm2S9EAkamd7SYffyEH4jdgPQZk3UIoARgTuhM06mASJxHwpLM482Pn1ZeNqzfBa55OdiKdvzEojStxeZIi9vZuYDhXK6AY1kWgnWKgvyHdiuGTffExtnzGpMucE4FmIPaCtAJTavLoIz8VBnbX%2FjenU5p4yCmg%2FheG4Ge47q1aVinxjNDer%2BcERFYVCVFXBUCMPqZ6sMGOqUBk%2B3W5pTahwvU4cTZOD4E71vsoW%2Fw6j6hLlQw%2BN2wiNmtncbkLePQV6d%2FvhP8aOIlm2mXiVL6%2F1H8VQHaj19WA%2FNaWx1rFthyGNk8SVho1nWk02mKzQFKzRd90dTyd1y%2BBy9DDjyMIvV0O12amiuRoclewI1eDy%2Fix0lKwfaWHqg9IeH2SAH8HdfrDhN54THSiXXrnAYVhkbKwzRIcL6U8nAb0WJc&X-Amz-Signature=75dc49f411703f22df4fa1c70c2a9b6bf1cf7121f16fbb8ccc08bf42968d6403&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJZXIBAC%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T190851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICpZb0s7Zogk6A%2FYoeuvX0UYRpeiub3rXsLmN2Yir1phAiEAyZp6AtQ8FrG78B%2BZruKKs0a%2BnlO%2BSIChTLQs89HmU98qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKicJM7i%2B9XRIH%2FNdCrcA%2FeqLDqV3FL3tiVEtNlwHKa5lgwJQ2zZMQHdmryYyFQHLWEyQ6oiAISEqEszMCi0r3H0N50e2s4qKf8QzDRZYxqAT7T%2BK5XTwdO0pbBBaltTeK%2B%2BuOCm12q%2B%2FKCuUanzMTFRjY6mDtcyRbkoh9DHapsVmLNIO6vV845M7XCaliNn6QlnAc6P4MGO53mF2vhwc8Lc8cESQRRDVStZhN2at%2BtcCGh7X9oTBx1n%2BXAR0u5AO6O7vvHVwykQhhYst6iAcWMwqeRQwRdQK3PiMSu%2F34Jr%2BNUJ6%2BRmJVW3sp%2FSbxm%2FG%2Fj%2F8Gn9kSPoMR%2B7t0JHwRWuQE9sejHMq%2BQ0qaizHzdK44YQBlkWlKEQCtI%2FEDmXj5kiSWlbhyUinFUHdVY%2BMXMNauoQiADSn8ehZNyFj0zkW30QzYf4mI0KJRfBOcVEbd1%2B7yKhtFtpgXqm2S9EAkamd7SYffyEH4jdgPQZk3UIoARgTuhM06mASJxHwpLM482Pn1ZeNqzfBa55OdiKdvzEojStxeZIi9vZuYDhXK6AY1kWgnWKgvyHdiuGTffExtnzGpMucE4FmIPaCtAJTavLoIz8VBnbX%2FjenU5p4yCmg%2FheG4Ge47q1aVinxjNDer%2BcERFYVCVFXBUCMPqZ6sMGOqUBk%2B3W5pTahwvU4cTZOD4E71vsoW%2Fw6j6hLlQw%2BN2wiNmtncbkLePQV6d%2FvhP8aOIlm2mXiVL6%2F1H8VQHaj19WA%2FNaWx1rFthyGNk8SVho1nWk02mKzQFKzRd90dTyd1y%2BBy9DDjyMIvV0O12amiuRoclewI1eDy%2Fix0lKwfaWHqg9IeH2SAH8HdfrDhN54THSiXXrnAYVhkbKwzRIcL6U8nAb0WJc&X-Amz-Signature=d97c2177275c92dcea2d9928b220f505fb469977a367c1daa8e03890e3e8704e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

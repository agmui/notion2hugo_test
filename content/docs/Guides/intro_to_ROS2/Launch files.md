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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUCNLB4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCQy1VrJYIjBUPS9w2a3YE2NgFa1mhbaHmZtI6oXOgnLQIgOaywUoZc1O5KqqcUw9x5RoE%2FczmRpVDh2XLUK%2BL1bagq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDC2paCtIfZ53VUObMCrcA69uhhk6l%2F0OScqpL0PgLnEG8qCryfihwZG0e9drtsx%2BYqzOdSzfJ7rhDcInZsf7JESlIsu0g7eL8llLTD2xFFSGwVhSTblSDgN59GXJNz%2FA758xlsn3YCD0oVssz4qAdq%2FXRXRIDrQxiGLfRwEul%2FzPVmn90A1Kbd%2BhCdYD00fuKME2WPVYIJu2l164n8WG7saHcVrLouhw0GfuzsjrNCKeD28APeQogM%2Fi6P6IqzaZ7gn4DG7DDuSiPviX6Xg%2BK7rTYYW1eug5j6c9Htpg5iIMOlTqxxSdAad%2BV5ML9e%2FVnNFKvO3x6YlDgDkXYFANOa%2BrMEm6m4q%2Bj9kLoXjUZ1lsuJHa%2FewNlvjYMja0TUKoKlS2op3DOROTi2WVlel5h9d7R1%2FFWTFlSovNxXVmAhSPU2oIzSqxjgdW0uQxQigofu748IZmIoPYmQ08wFi7hlyNR8FnH3gYAtIY7oPbsahj2nqp9SqLH8dzy3%2BC9CrzhuQog%2B%2BbnvMfDheAE7m5gk3NhDlHere%2FvtcDYbMvmfyTo6eYw0i%2B0zYyGUpkNdF%2Frri%2BXRXkICus8s2YjoMGTLb%2FXnSV2xdWAH1kIccBhtCKvqg24CMWO4DGLBHFT0xIEwJf%2BTQS%2FNmNOIdxMLHSk70GOqUBGmb60NOO9xTh2dWF9pwwLRS88b3CIOGdYOlU%2FIHnY1Gf0qv6M5wBxYxroDk3FJl5QVQPPiarmcAIXbWeMiFxsfftHu4tP2I1bzblBBy6is8O8MyHhfgzwZOoz0lAcdV6%2FSOkQ0m2SGz6RqrlnaTAhKoMNbj%2B4FgiVj6UeQVieUQ5YZWPYxLiQUUstMn7XV%2BQHtmZ9NRXQHMAudYzQMpPIhTKJR1x&X-Amz-Signature=1b9cbb6dcc8bdc08f13541cc90aac07aabe65e389dbf54c1e8f895cfb14db17a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUCNLB4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCQy1VrJYIjBUPS9w2a3YE2NgFa1mhbaHmZtI6oXOgnLQIgOaywUoZc1O5KqqcUw9x5RoE%2FczmRpVDh2XLUK%2BL1bagq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDC2paCtIfZ53VUObMCrcA69uhhk6l%2F0OScqpL0PgLnEG8qCryfihwZG0e9drtsx%2BYqzOdSzfJ7rhDcInZsf7JESlIsu0g7eL8llLTD2xFFSGwVhSTblSDgN59GXJNz%2FA758xlsn3YCD0oVssz4qAdq%2FXRXRIDrQxiGLfRwEul%2FzPVmn90A1Kbd%2BhCdYD00fuKME2WPVYIJu2l164n8WG7saHcVrLouhw0GfuzsjrNCKeD28APeQogM%2Fi6P6IqzaZ7gn4DG7DDuSiPviX6Xg%2BK7rTYYW1eug5j6c9Htpg5iIMOlTqxxSdAad%2BV5ML9e%2FVnNFKvO3x6YlDgDkXYFANOa%2BrMEm6m4q%2Bj9kLoXjUZ1lsuJHa%2FewNlvjYMja0TUKoKlS2op3DOROTi2WVlel5h9d7R1%2FFWTFlSovNxXVmAhSPU2oIzSqxjgdW0uQxQigofu748IZmIoPYmQ08wFi7hlyNR8FnH3gYAtIY7oPbsahj2nqp9SqLH8dzy3%2BC9CrzhuQog%2B%2BbnvMfDheAE7m5gk3NhDlHere%2FvtcDYbMvmfyTo6eYw0i%2B0zYyGUpkNdF%2Frri%2BXRXkICus8s2YjoMGTLb%2FXnSV2xdWAH1kIccBhtCKvqg24CMWO4DGLBHFT0xIEwJf%2BTQS%2FNmNOIdxMLHSk70GOqUBGmb60NOO9xTh2dWF9pwwLRS88b3CIOGdYOlU%2FIHnY1Gf0qv6M5wBxYxroDk3FJl5QVQPPiarmcAIXbWeMiFxsfftHu4tP2I1bzblBBy6is8O8MyHhfgzwZOoz0lAcdV6%2FSOkQ0m2SGz6RqrlnaTAhKoMNbj%2B4FgiVj6UeQVieUQ5YZWPYxLiQUUstMn7XV%2BQHtmZ9NRXQHMAudYzQMpPIhTKJR1x&X-Amz-Signature=01341c52869f95e7b230c8658f3681af00b1060ab43cda14c1f50c574ceb79bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUCNLB4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T170118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCQy1VrJYIjBUPS9w2a3YE2NgFa1mhbaHmZtI6oXOgnLQIgOaywUoZc1O5KqqcUw9x5RoE%2FczmRpVDh2XLUK%2BL1bagq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDC2paCtIfZ53VUObMCrcA69uhhk6l%2F0OScqpL0PgLnEG8qCryfihwZG0e9drtsx%2BYqzOdSzfJ7rhDcInZsf7JESlIsu0g7eL8llLTD2xFFSGwVhSTblSDgN59GXJNz%2FA758xlsn3YCD0oVssz4qAdq%2FXRXRIDrQxiGLfRwEul%2FzPVmn90A1Kbd%2BhCdYD00fuKME2WPVYIJu2l164n8WG7saHcVrLouhw0GfuzsjrNCKeD28APeQogM%2Fi6P6IqzaZ7gn4DG7DDuSiPviX6Xg%2BK7rTYYW1eug5j6c9Htpg5iIMOlTqxxSdAad%2BV5ML9e%2FVnNFKvO3x6YlDgDkXYFANOa%2BrMEm6m4q%2Bj9kLoXjUZ1lsuJHa%2FewNlvjYMja0TUKoKlS2op3DOROTi2WVlel5h9d7R1%2FFWTFlSovNxXVmAhSPU2oIzSqxjgdW0uQxQigofu748IZmIoPYmQ08wFi7hlyNR8FnH3gYAtIY7oPbsahj2nqp9SqLH8dzy3%2BC9CrzhuQog%2B%2BbnvMfDheAE7m5gk3NhDlHere%2FvtcDYbMvmfyTo6eYw0i%2B0zYyGUpkNdF%2Frri%2BXRXkICus8s2YjoMGTLb%2FXnSV2xdWAH1kIccBhtCKvqg24CMWO4DGLBHFT0xIEwJf%2BTQS%2FNmNOIdxMLHSk70GOqUBGmb60NOO9xTh2dWF9pwwLRS88b3CIOGdYOlU%2FIHnY1Gf0qv6M5wBxYxroDk3FJl5QVQPPiarmcAIXbWeMiFxsfftHu4tP2I1bzblBBy6is8O8MyHhfgzwZOoz0lAcdV6%2FSOkQ0m2SGz6RqrlnaTAhKoMNbj%2B4FgiVj6UeQVieUQ5YZWPYxLiQUUstMn7XV%2BQHtmZ9NRXQHMAudYzQMpPIhTKJR1x&X-Amz-Signature=b6b5fa0f5004417ff9b698d4a5097be0575234301aaec937c9e76f3bbf58c7f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

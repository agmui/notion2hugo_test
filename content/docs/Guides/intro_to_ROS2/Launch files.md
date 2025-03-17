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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YXUZ6VG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDge8t2DOZkUf3%2FmC42xeiJcSnTT1Wm%2FylIJRiQLVLrngIgW5VTWigb8FOdI8YWMFgoSJIBXCZgdAcL35Xt3Sw39G8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDM%2FMgPWvMAvImTbKMCrcA1EHLpNIJ6DwoEavZQZtx6oDtFyJzhJUlgvoyw8R%2BPhKvh%2FZQ5RG6yx337AP1OkoH2f%2FUaxTUVTT2V9Xg8FwNPLDxCGB1jWQmcMDhpv2xbXUlS24%2B1zCdrh2WTojp%2BcfN8CfFhqTplI5N1D2LmnxHJDwWsegtXtW7RhM25dkbLhw8fQ%2BBgoV%2F32V5i6TkyyUFOunC%2BR3%2B%2FrWVVJj7F1Tf32Y4pwz6KO9rtiofA06wXgL8vXialB0XXqV71Co5ysUsG2K0LwBtDLNucPINvMzsp60DQyO6kk6gX3VieI%2Bki2eDUDuJuS15AHoJ82DC2GrGKaxKBbTmlLIPXOM7WOKR7fao0HYVJR7Eo7tnuTwXsaNyezuURDt0U3xAvmPVOg8GAO3ozH%2Bll6BQyf8nS%2BGmD6wbqwAx5Fpg4itrZR%2BLmSRPFyYZWvQFC9ZaHQPlux0ioc%2Ft9tPK1nrq0v%2F%2BAk9Gp1o%2FkeoSApuACqtSFSFBa8Z3jsB%2BX0SiVF8c4D2IeW6wPmTB3JAIZiNqMLyspo7zXYTMHiJKbAkf50zwGY75NjB3Ci1MnWtkuTAZ39hwPhxPNyhObVhz262YtDHf43LEAgozuuSTHZ8iuxwfN5UiB%2BaJzExctL0IERFBNw6MNqL4L4GOqUBzK%2Fiiqs7p1IzJj5qMnguaBQKiKA7DdrtdehPdfvwvx91kaCknoO8%2FvG0Ahq1Aw%2Bm%2FD8jAKGqOF3PdqLwT4ZiBrL4k4sSXwdnjezfPk8p2NaEPfzFDNDYlp4CU53b7y5SGOdHmkkd3LS1JT56DeJKm59Krn6IihuC9N495lWRnMMWSYJvUHuWRjYAYg%2BtAF2oW8VrcdmuLU3CNGkX5YM%2BDu94%2FCYr&X-Amz-Signature=f4e0b43462cb6b6b58258e4dd661d9104b0834bda9906c0f9d6405088cdb5abd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YXUZ6VG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDge8t2DOZkUf3%2FmC42xeiJcSnTT1Wm%2FylIJRiQLVLrngIgW5VTWigb8FOdI8YWMFgoSJIBXCZgdAcL35Xt3Sw39G8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDM%2FMgPWvMAvImTbKMCrcA1EHLpNIJ6DwoEavZQZtx6oDtFyJzhJUlgvoyw8R%2BPhKvh%2FZQ5RG6yx337AP1OkoH2f%2FUaxTUVTT2V9Xg8FwNPLDxCGB1jWQmcMDhpv2xbXUlS24%2B1zCdrh2WTojp%2BcfN8CfFhqTplI5N1D2LmnxHJDwWsegtXtW7RhM25dkbLhw8fQ%2BBgoV%2F32V5i6TkyyUFOunC%2BR3%2B%2FrWVVJj7F1Tf32Y4pwz6KO9rtiofA06wXgL8vXialB0XXqV71Co5ysUsG2K0LwBtDLNucPINvMzsp60DQyO6kk6gX3VieI%2Bki2eDUDuJuS15AHoJ82DC2GrGKaxKBbTmlLIPXOM7WOKR7fao0HYVJR7Eo7tnuTwXsaNyezuURDt0U3xAvmPVOg8GAO3ozH%2Bll6BQyf8nS%2BGmD6wbqwAx5Fpg4itrZR%2BLmSRPFyYZWvQFC9ZaHQPlux0ioc%2Ft9tPK1nrq0v%2F%2BAk9Gp1o%2FkeoSApuACqtSFSFBa8Z3jsB%2BX0SiVF8c4D2IeW6wPmTB3JAIZiNqMLyspo7zXYTMHiJKbAkf50zwGY75NjB3Ci1MnWtkuTAZ39hwPhxPNyhObVhz262YtDHf43LEAgozuuSTHZ8iuxwfN5UiB%2BaJzExctL0IERFBNw6MNqL4L4GOqUBzK%2Fiiqs7p1IzJj5qMnguaBQKiKA7DdrtdehPdfvwvx91kaCknoO8%2FvG0Ahq1Aw%2Bm%2FD8jAKGqOF3PdqLwT4ZiBrL4k4sSXwdnjezfPk8p2NaEPfzFDNDYlp4CU53b7y5SGOdHmkkd3LS1JT56DeJKm59Krn6IihuC9N495lWRnMMWSYJvUHuWRjYAYg%2BtAF2oW8VrcdmuLU3CNGkX5YM%2BDu94%2FCYr&X-Amz-Signature=d9b9db9fa4c6acff9129626e8982ec6b82a11643e8393c9175d9602305239404&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YXUZ6VG%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T121449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDge8t2DOZkUf3%2FmC42xeiJcSnTT1Wm%2FylIJRiQLVLrngIgW5VTWigb8FOdI8YWMFgoSJIBXCZgdAcL35Xt3Sw39G8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDM%2FMgPWvMAvImTbKMCrcA1EHLpNIJ6DwoEavZQZtx6oDtFyJzhJUlgvoyw8R%2BPhKvh%2FZQ5RG6yx337AP1OkoH2f%2FUaxTUVTT2V9Xg8FwNPLDxCGB1jWQmcMDhpv2xbXUlS24%2B1zCdrh2WTojp%2BcfN8CfFhqTplI5N1D2LmnxHJDwWsegtXtW7RhM25dkbLhw8fQ%2BBgoV%2F32V5i6TkyyUFOunC%2BR3%2B%2FrWVVJj7F1Tf32Y4pwz6KO9rtiofA06wXgL8vXialB0XXqV71Co5ysUsG2K0LwBtDLNucPINvMzsp60DQyO6kk6gX3VieI%2Bki2eDUDuJuS15AHoJ82DC2GrGKaxKBbTmlLIPXOM7WOKR7fao0HYVJR7Eo7tnuTwXsaNyezuURDt0U3xAvmPVOg8GAO3ozH%2Bll6BQyf8nS%2BGmD6wbqwAx5Fpg4itrZR%2BLmSRPFyYZWvQFC9ZaHQPlux0ioc%2Ft9tPK1nrq0v%2F%2BAk9Gp1o%2FkeoSApuACqtSFSFBa8Z3jsB%2BX0SiVF8c4D2IeW6wPmTB3JAIZiNqMLyspo7zXYTMHiJKbAkf50zwGY75NjB3Ci1MnWtkuTAZ39hwPhxPNyhObVhz262YtDHf43LEAgozuuSTHZ8iuxwfN5UiB%2BaJzExctL0IERFBNw6MNqL4L4GOqUBzK%2Fiiqs7p1IzJj5qMnguaBQKiKA7DdrtdehPdfvwvx91kaCknoO8%2FvG0Ahq1Aw%2Bm%2FD8jAKGqOF3PdqLwT4ZiBrL4k4sSXwdnjezfPk8p2NaEPfzFDNDYlp4CU53b7y5SGOdHmkkd3LS1JT56DeJKm59Krn6IihuC9N495lWRnMMWSYJvUHuWRjYAYg%2BtAF2oW8VrcdmuLU3CNGkX5YM%2BDu94%2FCYr&X-Amz-Signature=d38df851f33500d8a90af9538d97264174fa6e92f0096eefa741731b3dac12b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T6OVSTP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj0evOh%2BxfAQWIPRbiMiMM4kCxVTuElf5IMHnE7ZXL0AiEA%2FaUd%2B%2FEwVZXEuwU4%2Fkm6xC0etSStkm%2FJ%2FV596FZgJ60qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtOCtsvbyX9n5SxNSrcA91SmJyY6dNjQqt%2FSp3Hwic3xTLMCBDIKwZMNT81vFybc%2BrEQccWXS9yutPXZK3VXR1cNOr3wY2GYxR74UJqPdc4SJ%2B%2BeSltaHg9J5ahhQg8nvFWXLypPxV61QP6cyn%2BWz0K52miLaxixmRoNkhfDSy6twW%2F%2BRmdodJ%2FXYlXdurRh37yg1deJK6cT8aWzHiHJEtaZMYBKOLNWRcjkimabP8uwRe0OJA2n8bJaeDs%2F%2FDT16jZ96XD4UssWDdSqGD7t4VLYYSc1%2FyNLE%2B82K%2B4hm8gHIyKhCpoOWa5ggajneEA4jqOBXBtDHF09WqHbuLfjf7Apj5t0BpoctN5IsPVO98sBGAoTSL2ADODJ7o9xZLqjk77yGP6iwpnWNp4CEqRxuRT6m6qdxT6SYkSEc0VGkYX4O9wmImYkp%2BKfltnpC9yOXIfr6Hx%2B0CgyQMSwLvRO6AdijDH16exH7LV8DSl%2FUIJmdGZbuHtinF0L4SjZz3euiDATGbIaH%2FNuX%2B6fKbWGMXiDoPO74fl%2BEOyt3IEupNUiAdIFwALk9V156Gih1TMFoug3G13TYPnx3716YVs%2Bug%2BMxsmhe4pvHnkhaX5VX2wP98yEutImq9P%2BOPJthuo6NFgeaHGfAzJUMQcMJCLucMGOqUBzqFbLfAM8fUdzcG2xeb9yYmmtDwScrrIYs4GDdTU8hcisTqK60nJrDhSFx14rXl3k41zVMkh1bd8OPyhz2LQzox1z1WDP8mM%2BxRMzQRQ68XRLF2ZT%2BbJqi6W6IObsn7Sy7Nl5ich5k750POU3ccxbLSXgLeUEvHl2ykrD5Vs%2BaBzZIuiENhFM47XqRM5oeuQpBeMgvgXVM2b5PmcueP3kl9WyI%2BG&X-Amz-Signature=f841bea7eb0147ed1c33476cd8aadaf79ef2ee3c3d76c74e7a49bbd7867c623b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T6OVSTP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj0evOh%2BxfAQWIPRbiMiMM4kCxVTuElf5IMHnE7ZXL0AiEA%2FaUd%2B%2FEwVZXEuwU4%2Fkm6xC0etSStkm%2FJ%2FV596FZgJ60qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtOCtsvbyX9n5SxNSrcA91SmJyY6dNjQqt%2FSp3Hwic3xTLMCBDIKwZMNT81vFybc%2BrEQccWXS9yutPXZK3VXR1cNOr3wY2GYxR74UJqPdc4SJ%2B%2BeSltaHg9J5ahhQg8nvFWXLypPxV61QP6cyn%2BWz0K52miLaxixmRoNkhfDSy6twW%2F%2BRmdodJ%2FXYlXdurRh37yg1deJK6cT8aWzHiHJEtaZMYBKOLNWRcjkimabP8uwRe0OJA2n8bJaeDs%2F%2FDT16jZ96XD4UssWDdSqGD7t4VLYYSc1%2FyNLE%2B82K%2B4hm8gHIyKhCpoOWa5ggajneEA4jqOBXBtDHF09WqHbuLfjf7Apj5t0BpoctN5IsPVO98sBGAoTSL2ADODJ7o9xZLqjk77yGP6iwpnWNp4CEqRxuRT6m6qdxT6SYkSEc0VGkYX4O9wmImYkp%2BKfltnpC9yOXIfr6Hx%2B0CgyQMSwLvRO6AdijDH16exH7LV8DSl%2FUIJmdGZbuHtinF0L4SjZz3euiDATGbIaH%2FNuX%2B6fKbWGMXiDoPO74fl%2BEOyt3IEupNUiAdIFwALk9V156Gih1TMFoug3G13TYPnx3716YVs%2Bug%2BMxsmhe4pvHnkhaX5VX2wP98yEutImq9P%2BOPJthuo6NFgeaHGfAzJUMQcMJCLucMGOqUBzqFbLfAM8fUdzcG2xeb9yYmmtDwScrrIYs4GDdTU8hcisTqK60nJrDhSFx14rXl3k41zVMkh1bd8OPyhz2LQzox1z1WDP8mM%2BxRMzQRQ68XRLF2ZT%2BbJqi6W6IObsn7Sy7Nl5ich5k750POU3ccxbLSXgLeUEvHl2ykrD5Vs%2BaBzZIuiENhFM47XqRM5oeuQpBeMgvgXVM2b5PmcueP3kl9WyI%2BG&X-Amz-Signature=3b7e2f39ab89de7937132d92371cb5d3f18fb0fcd5a1e5bad43152f1ed67e7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T6OVSTP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEj0evOh%2BxfAQWIPRbiMiMM4kCxVTuElf5IMHnE7ZXL0AiEA%2FaUd%2B%2FEwVZXEuwU4%2Fkm6xC0etSStkm%2FJ%2FV596FZgJ60qiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtOCtsvbyX9n5SxNSrcA91SmJyY6dNjQqt%2FSp3Hwic3xTLMCBDIKwZMNT81vFybc%2BrEQccWXS9yutPXZK3VXR1cNOr3wY2GYxR74UJqPdc4SJ%2B%2BeSltaHg9J5ahhQg8nvFWXLypPxV61QP6cyn%2BWz0K52miLaxixmRoNkhfDSy6twW%2F%2BRmdodJ%2FXYlXdurRh37yg1deJK6cT8aWzHiHJEtaZMYBKOLNWRcjkimabP8uwRe0OJA2n8bJaeDs%2F%2FDT16jZ96XD4UssWDdSqGD7t4VLYYSc1%2FyNLE%2B82K%2B4hm8gHIyKhCpoOWa5ggajneEA4jqOBXBtDHF09WqHbuLfjf7Apj5t0BpoctN5IsPVO98sBGAoTSL2ADODJ7o9xZLqjk77yGP6iwpnWNp4CEqRxuRT6m6qdxT6SYkSEc0VGkYX4O9wmImYkp%2BKfltnpC9yOXIfr6Hx%2B0CgyQMSwLvRO6AdijDH16exH7LV8DSl%2FUIJmdGZbuHtinF0L4SjZz3euiDATGbIaH%2FNuX%2B6fKbWGMXiDoPO74fl%2BEOyt3IEupNUiAdIFwALk9V156Gih1TMFoug3G13TYPnx3716YVs%2Bug%2BMxsmhe4pvHnkhaX5VX2wP98yEutImq9P%2BOPJthuo6NFgeaHGfAzJUMQcMJCLucMGOqUBzqFbLfAM8fUdzcG2xeb9yYmmtDwScrrIYs4GDdTU8hcisTqK60nJrDhSFx14rXl3k41zVMkh1bd8OPyhz2LQzox1z1WDP8mM%2BxRMzQRQ68XRLF2ZT%2BbJqi6W6IObsn7Sy7Nl5ich5k750POU3ccxbLSXgLeUEvHl2ykrD5Vs%2BaBzZIuiENhFM47XqRM5oeuQpBeMgvgXVM2b5PmcueP3kl9WyI%2BG&X-Amz-Signature=a52ca5c5e19358e20e71fc01f32394e941cd2e46a2c46f9105250e4849d4be9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

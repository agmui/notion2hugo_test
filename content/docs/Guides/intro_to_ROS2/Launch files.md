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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRBXQTY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClFjqMLm73z%2FgbfeKo0HhZGmiMydNHAK1VecaliFmw%2BAiEAwCGC35jX2gKbCh7bLwSBOt2kI9Tvroz6FbUiGXOKvV4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCRJp4vUS0QuBLRsircAyi5REx%2B6cnd%2BSAfYxB4ijmRulOjI%2FfJuTqIrNl%2B8QyH9W51SvUeIYjXQkHoUB5hX8D02vq0W3XqmfEGLapNl69m%2F9HpI%2BGgkJpAS93DK10CVme4wFz4eovdsL%2FweeUBkaVm7w2qZU7N37z%2BYaYT0B8QgItPT3FZ1vE33gj%2FVs15ICyAA%2B09TSzCJ1h7mfzmUNaMD3tMRs1pU1Pff06s%2Bl%2FS3FNQoD31FeqAQLn8LJxvC1tAJqsNsspreI142QcOjIIE7psitz9oNZ0TbOHns%2FAcxpn4eRlVC2NPRNPs4b58bC%2Fn7%2BKIM18QJ%2FHrbzfIRJNmbId5nLyAvXtT66llupvlX%2BwNY1cBs8HPIhjE%2FAY6R7%2Fk%2BzV1Sx%2B8FdLnflG5p5BQd%2FXYnIK0xX8ZKsuyHsy1U2LGMilLTAdEYmx8e5TMbcSns%2BTi4W%2Bab48%2FB6An4B2V0Gn%2Ftwv917l0cg1f1MySnH%2F4%2BKIGLZbSuFSuqxvFZ7CaecXZ7oJ%2F62vWVAR35emHOLbKlb2kU5Zg13VGsvpMxoXAoAFZE%2BN%2B5ZY7fF7pTKI34r93Z3YQmDQhDwyDHZ28OhqqKo81L8mkLKk5wtBsg6mYlqMuA6qO%2FQRxeV0fgO5AS6V4ZbYO7A1nMP3R5sQGOqUB2RulZGuL9s0Ny4SlsNShzBllF4V8VK%2FeMRroOLB6pjXvt3FV624LN8G5yuZumWubU1GYpmKjI%2F5yCMp9hqG92XlS7Q59zHUnLQYS92QntIsY7VFGxjIZgzl%2F0WIaSaY9hA8M1q2FDyJJx00cwoAtSWYv6IWXbH3r6Y23t64KqBaSp1Y0OLz2ilSEH6TNLpyMeHKmJEnQHh%2FbfsuRHQt6SXHzch1H&X-Amz-Signature=c23aa833c3a24313328282c4d81bcc51da524f8f7f5a5713f59476f61db7b383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRBXQTY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClFjqMLm73z%2FgbfeKo0HhZGmiMydNHAK1VecaliFmw%2BAiEAwCGC35jX2gKbCh7bLwSBOt2kI9Tvroz6FbUiGXOKvV4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCRJp4vUS0QuBLRsircAyi5REx%2B6cnd%2BSAfYxB4ijmRulOjI%2FfJuTqIrNl%2B8QyH9W51SvUeIYjXQkHoUB5hX8D02vq0W3XqmfEGLapNl69m%2F9HpI%2BGgkJpAS93DK10CVme4wFz4eovdsL%2FweeUBkaVm7w2qZU7N37z%2BYaYT0B8QgItPT3FZ1vE33gj%2FVs15ICyAA%2B09TSzCJ1h7mfzmUNaMD3tMRs1pU1Pff06s%2Bl%2FS3FNQoD31FeqAQLn8LJxvC1tAJqsNsspreI142QcOjIIE7psitz9oNZ0TbOHns%2FAcxpn4eRlVC2NPRNPs4b58bC%2Fn7%2BKIM18QJ%2FHrbzfIRJNmbId5nLyAvXtT66llupvlX%2BwNY1cBs8HPIhjE%2FAY6R7%2Fk%2BzV1Sx%2B8FdLnflG5p5BQd%2FXYnIK0xX8ZKsuyHsy1U2LGMilLTAdEYmx8e5TMbcSns%2BTi4W%2Bab48%2FB6An4B2V0Gn%2Ftwv917l0cg1f1MySnH%2F4%2BKIGLZbSuFSuqxvFZ7CaecXZ7oJ%2F62vWVAR35emHOLbKlb2kU5Zg13VGsvpMxoXAoAFZE%2BN%2B5ZY7fF7pTKI34r93Z3YQmDQhDwyDHZ28OhqqKo81L8mkLKk5wtBsg6mYlqMuA6qO%2FQRxeV0fgO5AS6V4ZbYO7A1nMP3R5sQGOqUB2RulZGuL9s0Ny4SlsNShzBllF4V8VK%2FeMRroOLB6pjXvt3FV624LN8G5yuZumWubU1GYpmKjI%2F5yCMp9hqG92XlS7Q59zHUnLQYS92QntIsY7VFGxjIZgzl%2F0WIaSaY9hA8M1q2FDyJJx00cwoAtSWYv6IWXbH3r6Y23t64KqBaSp1Y0OLz2ilSEH6TNLpyMeHKmJEnQHh%2FbfsuRHQt6SXHzch1H&X-Amz-Signature=aed9fd0368b04cb65a3fa8a2ece08759610c1e614f384caab57dd03dc8708f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRRBXQTY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClFjqMLm73z%2FgbfeKo0HhZGmiMydNHAK1VecaliFmw%2BAiEAwCGC35jX2gKbCh7bLwSBOt2kI9Tvroz6FbUiGXOKvV4qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCRJp4vUS0QuBLRsircAyi5REx%2B6cnd%2BSAfYxB4ijmRulOjI%2FfJuTqIrNl%2B8QyH9W51SvUeIYjXQkHoUB5hX8D02vq0W3XqmfEGLapNl69m%2F9HpI%2BGgkJpAS93DK10CVme4wFz4eovdsL%2FweeUBkaVm7w2qZU7N37z%2BYaYT0B8QgItPT3FZ1vE33gj%2FVs15ICyAA%2B09TSzCJ1h7mfzmUNaMD3tMRs1pU1Pff06s%2Bl%2FS3FNQoD31FeqAQLn8LJxvC1tAJqsNsspreI142QcOjIIE7psitz9oNZ0TbOHns%2FAcxpn4eRlVC2NPRNPs4b58bC%2Fn7%2BKIM18QJ%2FHrbzfIRJNmbId5nLyAvXtT66llupvlX%2BwNY1cBs8HPIhjE%2FAY6R7%2Fk%2BzV1Sx%2B8FdLnflG5p5BQd%2FXYnIK0xX8ZKsuyHsy1U2LGMilLTAdEYmx8e5TMbcSns%2BTi4W%2Bab48%2FB6An4B2V0Gn%2Ftwv917l0cg1f1MySnH%2F4%2BKIGLZbSuFSuqxvFZ7CaecXZ7oJ%2F62vWVAR35emHOLbKlb2kU5Zg13VGsvpMxoXAoAFZE%2BN%2B5ZY7fF7pTKI34r93Z3YQmDQhDwyDHZ28OhqqKo81L8mkLKk5wtBsg6mYlqMuA6qO%2FQRxeV0fgO5AS6V4ZbYO7A1nMP3R5sQGOqUB2RulZGuL9s0Ny4SlsNShzBllF4V8VK%2FeMRroOLB6pjXvt3FV624LN8G5yuZumWubU1GYpmKjI%2F5yCMp9hqG92XlS7Q59zHUnLQYS92QntIsY7VFGxjIZgzl%2F0WIaSaY9hA8M1q2FDyJJx00cwoAtSWYv6IWXbH3r6Y23t64KqBaSp1Y0OLz2ilSEH6TNLpyMeHKmJEnQHh%2FbfsuRHQt6SXHzch1H&X-Amz-Signature=0b6b0f919e8ab027a977d11f57972720db8fdef5131e74ae5b3d62ac15d5aa55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

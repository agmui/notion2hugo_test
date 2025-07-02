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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XOL7RVT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB67VKmax%2BoywAn9b0OldZkoHpzRRE2Zj186WGMOrVLdAiBX3HzWZXZKGoQ0mFFAQq9WUk8aRbucCH96Wzm2mM%2FBCCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOjtXNCbIuvRUZm72KtwDABD2MzQRdxTgk%2BxD7KlBv2%2FcSOBhsKAvPrqvAtx%2FO%2Bowc3QgsSwAnEsr8FnKAyGhu52dFLkN8bTLVjyf4lPzel35BmTad8tkY4zEcdr7eSTAeoRUjS5twrj7uFBwFEhOEYJ4pzuoPI4k%2FxpVPir9PKFBlo498XqxfYAXC8eQQxXU8f2immvRP1FHrwb3YYRxD2MGjyLoL8clrsu46ZV0A2bIn40SMre470vF3hppnnVXTbMCxl3F1FHMiAGiIwySgF9n%2F0A9qbntfObjN%2FJ3FmA9jts4ZPFVq%2BwgHVVklzSBwMXVkbPYc5GHVWJQpDAW76tTkzTgDtyF0qc%2FV5QSj8e2AvKazEmLmwQOS81kY4dRPknVPyNSub3Clz2p5iZZO%2FJb1rRa1vgh%2FoXg5B5L9ve8GHfWLGdbEeGQJv4hX%2FM%2FmjCutusC6pI36ZQtnkU0PZjYp2nwDRnH1QMpjaQKExW2SBabXrW0OG5RGZhVg9QyCMaa0HWOoh0nFXlDGD3KZTA8wShQpasli1tPThQmLN5OSJw9WrEhnf%2BNmwjkV0IV24BjhywLqsoBd%2BkfbSvUGaz%2BkIlwpgrxAe8OMv073LY3E3WMTBIlW1dy3DL3DwYaK57jOOMn6eoeojww75OWwwY6pgE025xo1kG2mqYbS4CdbGlEO2aBnpvtGbE2jGc3IwTzgmOuVQ7J5YLragzl%2Bs69feeAVHUdmiTwkDrfm6Qm2nWWgMIqQkVudg6gGnHgh0X%2BlI3QDyz4CWVQc4YKuWZXXaBU%2B455m5Oik5%2BaxyWlp4%2BfKqoTmyLipn5RNmkIoqQ0Oio4lTmCvACFaThMNEBTPJlGDMvVJREudCUVyC2%2F0VCqPflIOQzT&X-Amz-Signature=97b95402aa8543fa0027607b1b7b1d68aaafd80c0867480eb471cffb7a4d8756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XOL7RVT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB67VKmax%2BoywAn9b0OldZkoHpzRRE2Zj186WGMOrVLdAiBX3HzWZXZKGoQ0mFFAQq9WUk8aRbucCH96Wzm2mM%2FBCCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOjtXNCbIuvRUZm72KtwDABD2MzQRdxTgk%2BxD7KlBv2%2FcSOBhsKAvPrqvAtx%2FO%2Bowc3QgsSwAnEsr8FnKAyGhu52dFLkN8bTLVjyf4lPzel35BmTad8tkY4zEcdr7eSTAeoRUjS5twrj7uFBwFEhOEYJ4pzuoPI4k%2FxpVPir9PKFBlo498XqxfYAXC8eQQxXU8f2immvRP1FHrwb3YYRxD2MGjyLoL8clrsu46ZV0A2bIn40SMre470vF3hppnnVXTbMCxl3F1FHMiAGiIwySgF9n%2F0A9qbntfObjN%2FJ3FmA9jts4ZPFVq%2BwgHVVklzSBwMXVkbPYc5GHVWJQpDAW76tTkzTgDtyF0qc%2FV5QSj8e2AvKazEmLmwQOS81kY4dRPknVPyNSub3Clz2p5iZZO%2FJb1rRa1vgh%2FoXg5B5L9ve8GHfWLGdbEeGQJv4hX%2FM%2FmjCutusC6pI36ZQtnkU0PZjYp2nwDRnH1QMpjaQKExW2SBabXrW0OG5RGZhVg9QyCMaa0HWOoh0nFXlDGD3KZTA8wShQpasli1tPThQmLN5OSJw9WrEhnf%2BNmwjkV0IV24BjhywLqsoBd%2BkfbSvUGaz%2BkIlwpgrxAe8OMv073LY3E3WMTBIlW1dy3DL3DwYaK57jOOMn6eoeojww75OWwwY6pgE025xo1kG2mqYbS4CdbGlEO2aBnpvtGbE2jGc3IwTzgmOuVQ7J5YLragzl%2Bs69feeAVHUdmiTwkDrfm6Qm2nWWgMIqQkVudg6gGnHgh0X%2BlI3QDyz4CWVQc4YKuWZXXaBU%2B455m5Oik5%2BaxyWlp4%2BfKqoTmyLipn5RNmkIoqQ0Oio4lTmCvACFaThMNEBTPJlGDMvVJREudCUVyC2%2F0VCqPflIOQzT&X-Amz-Signature=2ebe9e17e876d7afee9c13ea93d356d92749c1956cbb170dcd7587238a0b4be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XOL7RVT%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB67VKmax%2BoywAn9b0OldZkoHpzRRE2Zj186WGMOrVLdAiBX3HzWZXZKGoQ0mFFAQq9WUk8aRbucCH96Wzm2mM%2FBCCqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOjtXNCbIuvRUZm72KtwDABD2MzQRdxTgk%2BxD7KlBv2%2FcSOBhsKAvPrqvAtx%2FO%2Bowc3QgsSwAnEsr8FnKAyGhu52dFLkN8bTLVjyf4lPzel35BmTad8tkY4zEcdr7eSTAeoRUjS5twrj7uFBwFEhOEYJ4pzuoPI4k%2FxpVPir9PKFBlo498XqxfYAXC8eQQxXU8f2immvRP1FHrwb3YYRxD2MGjyLoL8clrsu46ZV0A2bIn40SMre470vF3hppnnVXTbMCxl3F1FHMiAGiIwySgF9n%2F0A9qbntfObjN%2FJ3FmA9jts4ZPFVq%2BwgHVVklzSBwMXVkbPYc5GHVWJQpDAW76tTkzTgDtyF0qc%2FV5QSj8e2AvKazEmLmwQOS81kY4dRPknVPyNSub3Clz2p5iZZO%2FJb1rRa1vgh%2FoXg5B5L9ve8GHfWLGdbEeGQJv4hX%2FM%2FmjCutusC6pI36ZQtnkU0PZjYp2nwDRnH1QMpjaQKExW2SBabXrW0OG5RGZhVg9QyCMaa0HWOoh0nFXlDGD3KZTA8wShQpasli1tPThQmLN5OSJw9WrEhnf%2BNmwjkV0IV24BjhywLqsoBd%2BkfbSvUGaz%2BkIlwpgrxAe8OMv073LY3E3WMTBIlW1dy3DL3DwYaK57jOOMn6eoeojww75OWwwY6pgE025xo1kG2mqYbS4CdbGlEO2aBnpvtGbE2jGc3IwTzgmOuVQ7J5YLragzl%2Bs69feeAVHUdmiTwkDrfm6Qm2nWWgMIqQkVudg6gGnHgh0X%2BlI3QDyz4CWVQc4YKuWZXXaBU%2B455m5Oik5%2BaxyWlp4%2BfKqoTmyLipn5RNmkIoqQ0Oio4lTmCvACFaThMNEBTPJlGDMvVJREudCUVyC2%2F0VCqPflIOQzT&X-Amz-Signature=ee1f48104d12c8b49ed45d379fa67f8abc13b6e8cec2755b4990583ecca02b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

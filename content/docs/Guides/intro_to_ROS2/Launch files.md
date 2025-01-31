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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GTOP5T%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2F6Q5jF64jQWm1wrkI1kL6eYdyDsJjoyYjaGcKLJoPAIgLeq2x%2BB2UxZN%2FVsVa1V9SYBENbthlP61c4LYURBmzpsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyWGwQcRAkP9wTqHircAwduHa6b60jbmykx9oi0Ra86YWPkIWBeYJHU2PshSGW0XkWI%2BG9Iewb0i78zZXyMhMuS3TKO%2FA0vwxtgkK9kTkBCG8COpeNlmJ4KRkJJNz47H7UTlIsGvypsT7jvgO%2F5znkd4vxsfIsiwstchzVXH7jDuemDJlOMwUz33NriNUHygIntG5nAc0r47TukN1LK0k%2FSBYbLBcSQ%2FSnv%2FpKOCJG%2FtRSP5WaZyyk7j%2BQJUdAcrw4q0s4oHgM4yh7mvhSr7wADLV17TFyAxXymtgmx2lkClP5kSMwLgcxcWAar7KpKoToxBPL3EzJpFh5XWKFx9sFoGFSNHBgbU%2FkLu9FpG4OC8rY5fUC5MLFypj5rGD6dmQ1pj14cuv1hg80a6N%2BypSc14fkhych1gIq%2FlNZn%2Bi4tvplfe0V9YjwMWQ5raosH6D6Q3E4M%2BBR0tBq08%2FUIrsPrilrNvFlttXGKyYAV9Y0LNUWAop3OtOFpaGlwMMpelK3Nk6L%2BKBeygAuApL%2F5ivW1VvB6vyWEo2LAmPuV1Mki8oRC3ejstMp%2B6ZOrqGsMPsa4rNXDugGqaUMnR%2FWuAhjWIkShThRhJ5EaPI4ruOfJAPqsvXlvKOut7VzB95J2pP92R9DovJCBA%2FQ%2FMMnR8LwGOqUBIIRLmBKvklAnE%2BT3PUIVE%2FqnEnk51%2B%2B03vkTWChhnsb2vRZItT7fVoJ1r2BheXMoJHKz7IA6xNn%2BulmZJcnlzn8NR8Sh%2B%2BxNNCNjMccLmnycyzKWz1%2BRnm0yOlwWuHmqAmGeWYMTbuvypvOmdAcpLGGtP2T5QT%2FF7X19UjctUWKqTi%2BlJehJ4PR1GLaueLnJF8HSfOTAWeV%2FeaVndE11gTjy3ecQ&X-Amz-Signature=7a28d41cdce5e313d6999b805f74a9a08acfaa1eef966b3be223b34b08c45ecc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GTOP5T%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2F6Q5jF64jQWm1wrkI1kL6eYdyDsJjoyYjaGcKLJoPAIgLeq2x%2BB2UxZN%2FVsVa1V9SYBENbthlP61c4LYURBmzpsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyWGwQcRAkP9wTqHircAwduHa6b60jbmykx9oi0Ra86YWPkIWBeYJHU2PshSGW0XkWI%2BG9Iewb0i78zZXyMhMuS3TKO%2FA0vwxtgkK9kTkBCG8COpeNlmJ4KRkJJNz47H7UTlIsGvypsT7jvgO%2F5znkd4vxsfIsiwstchzVXH7jDuemDJlOMwUz33NriNUHygIntG5nAc0r47TukN1LK0k%2FSBYbLBcSQ%2FSnv%2FpKOCJG%2FtRSP5WaZyyk7j%2BQJUdAcrw4q0s4oHgM4yh7mvhSr7wADLV17TFyAxXymtgmx2lkClP5kSMwLgcxcWAar7KpKoToxBPL3EzJpFh5XWKFx9sFoGFSNHBgbU%2FkLu9FpG4OC8rY5fUC5MLFypj5rGD6dmQ1pj14cuv1hg80a6N%2BypSc14fkhych1gIq%2FlNZn%2Bi4tvplfe0V9YjwMWQ5raosH6D6Q3E4M%2BBR0tBq08%2FUIrsPrilrNvFlttXGKyYAV9Y0LNUWAop3OtOFpaGlwMMpelK3Nk6L%2BKBeygAuApL%2F5ivW1VvB6vyWEo2LAmPuV1Mki8oRC3ejstMp%2B6ZOrqGsMPsa4rNXDugGqaUMnR%2FWuAhjWIkShThRhJ5EaPI4ruOfJAPqsvXlvKOut7VzB95J2pP92R9DovJCBA%2FQ%2FMMnR8LwGOqUBIIRLmBKvklAnE%2BT3PUIVE%2FqnEnk51%2B%2B03vkTWChhnsb2vRZItT7fVoJ1r2BheXMoJHKz7IA6xNn%2BulmZJcnlzn8NR8Sh%2B%2BxNNCNjMccLmnycyzKWz1%2BRnm0yOlwWuHmqAmGeWYMTbuvypvOmdAcpLGGtP2T5QT%2FF7X19UjctUWKqTi%2BlJehJ4PR1GLaueLnJF8HSfOTAWeV%2FeaVndE11gTjy3ecQ&X-Amz-Signature=a400f1ebdbecd37d8189f26e129cfde17aaadc34dba278e7626b05979fba6a5f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7GTOP5T%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T030909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2F6Q5jF64jQWm1wrkI1kL6eYdyDsJjoyYjaGcKLJoPAIgLeq2x%2BB2UxZN%2FVsVa1V9SYBENbthlP61c4LYURBmzpsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyWGwQcRAkP9wTqHircAwduHa6b60jbmykx9oi0Ra86YWPkIWBeYJHU2PshSGW0XkWI%2BG9Iewb0i78zZXyMhMuS3TKO%2FA0vwxtgkK9kTkBCG8COpeNlmJ4KRkJJNz47H7UTlIsGvypsT7jvgO%2F5znkd4vxsfIsiwstchzVXH7jDuemDJlOMwUz33NriNUHygIntG5nAc0r47TukN1LK0k%2FSBYbLBcSQ%2FSnv%2FpKOCJG%2FtRSP5WaZyyk7j%2BQJUdAcrw4q0s4oHgM4yh7mvhSr7wADLV17TFyAxXymtgmx2lkClP5kSMwLgcxcWAar7KpKoToxBPL3EzJpFh5XWKFx9sFoGFSNHBgbU%2FkLu9FpG4OC8rY5fUC5MLFypj5rGD6dmQ1pj14cuv1hg80a6N%2BypSc14fkhych1gIq%2FlNZn%2Bi4tvplfe0V9YjwMWQ5raosH6D6Q3E4M%2BBR0tBq08%2FUIrsPrilrNvFlttXGKyYAV9Y0LNUWAop3OtOFpaGlwMMpelK3Nk6L%2BKBeygAuApL%2F5ivW1VvB6vyWEo2LAmPuV1Mki8oRC3ejstMp%2B6ZOrqGsMPsa4rNXDugGqaUMnR%2FWuAhjWIkShThRhJ5EaPI4ruOfJAPqsvXlvKOut7VzB95J2pP92R9DovJCBA%2FQ%2FMMnR8LwGOqUBIIRLmBKvklAnE%2BT3PUIVE%2FqnEnk51%2B%2B03vkTWChhnsb2vRZItT7fVoJ1r2BheXMoJHKz7IA6xNn%2BulmZJcnlzn8NR8Sh%2B%2BxNNCNjMccLmnycyzKWz1%2BRnm0yOlwWuHmqAmGeWYMTbuvypvOmdAcpLGGtP2T5QT%2FF7X19UjctUWKqTi%2BlJehJ4PR1GLaueLnJF8HSfOTAWeV%2FeaVndE11gTjy3ecQ&X-Amz-Signature=9908550e311aeb1d47b5259c20c37481596352b5ce9051d61d0a2a9d06849b2d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

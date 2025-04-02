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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYFCLBZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGXIeY39G0ZMJsshi%2FOK2ozerKs5HZdvr7r28yL73VhKAiEAlBzoCTIQla%2FamZ9jkD42s0YwK3N8Uh%2BU2ftWjsGZUsAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPxRl2nvQ0Jyu9qRCrcAzfzPxR%2FF5Pq9ouBp6XXWH1JsDQD2yAffiS4llOMEgE%2FYjA3dh1D16t2OqMsLbhAMCb4kWyUK7%2FV%2B40iQyj0S95aQn2xmAe%2FyfdxyWClJhESwJ8gSgFt3ay%2BQDKWmonPwo4uX7nWJIlKzTRA%2Fdiaha0vTSemp1Ftp9WXN2hNaRIpEsUZOX7ExX1aJCPWT0HXskyn%2BRFsEXf%2BAp6JsPP2zN8YEk9YgGsiPoH6qSYbFXPxFJgRKqFYRlefEw7sefMKyDvkmwsF%2FF%2FxeOg88NBgEPPmEk1i40UIW0KXFwsO7%2FCtA%2BXMOa84CinB36Oz%2FL4p64kVqybjPwDcR8i8XuTwlddhzuZg0T0oyAL92xT0GOkPQYVpFZEXZW7UFyRYkgJ1hOHO%2F9Kb%2Fl%2BPtXF5ceujOlYnaLaoVnIMdU1fvvUBuIokxouTtBM8YTgjGqvIHHz7WHc9%2FbrpavB2LGIPKMI%2F5Qchgaicdz5uGBQvI5SUIaiCS3YVLuQ1afrLP33T5PD0q1J%2FSYZpSpmkKpPxT3fT7hdSd1VDX7o5bZE82sp%2BlnuQcGTAci9fHwTZ1mfoE48D0oL6eh%2BORk0IUiX43qwURthp6EIabsWoWTQ9yfSBKRv7pXhwnltuVMz55rNfMITps78GOqUBqDLbPU%2FCvJtkiIk%2FKATeK11iNQlPnsu%2Fx8T0rLgkCNbt4ClZvBQjDfL7U399jHr3sBuU8YLQO6SYewKh0HeXDPi%2FEflyh79qEgLghCIZJtd%2BEDmIH1Qysd%2Bjb4rZQDY25lWmP4NPoMopGkyN2%2BNMHFOsqSFLGTWH4cE0LZboA6hGQXcFVfBpORsaWDES%2B4Wxk0ilqcCVgUGj61O6q2bRWqwlreBD&X-Amz-Signature=caec8afe2b96f51ff7dde628d737a7f788a6571b8ca8a21295e3c3f38fa10ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYFCLBZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGXIeY39G0ZMJsshi%2FOK2ozerKs5HZdvr7r28yL73VhKAiEAlBzoCTIQla%2FamZ9jkD42s0YwK3N8Uh%2BU2ftWjsGZUsAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPxRl2nvQ0Jyu9qRCrcAzfzPxR%2FF5Pq9ouBp6XXWH1JsDQD2yAffiS4llOMEgE%2FYjA3dh1D16t2OqMsLbhAMCb4kWyUK7%2FV%2B40iQyj0S95aQn2xmAe%2FyfdxyWClJhESwJ8gSgFt3ay%2BQDKWmonPwo4uX7nWJIlKzTRA%2Fdiaha0vTSemp1Ftp9WXN2hNaRIpEsUZOX7ExX1aJCPWT0HXskyn%2BRFsEXf%2BAp6JsPP2zN8YEk9YgGsiPoH6qSYbFXPxFJgRKqFYRlefEw7sefMKyDvkmwsF%2FF%2FxeOg88NBgEPPmEk1i40UIW0KXFwsO7%2FCtA%2BXMOa84CinB36Oz%2FL4p64kVqybjPwDcR8i8XuTwlddhzuZg0T0oyAL92xT0GOkPQYVpFZEXZW7UFyRYkgJ1hOHO%2F9Kb%2Fl%2BPtXF5ceujOlYnaLaoVnIMdU1fvvUBuIokxouTtBM8YTgjGqvIHHz7WHc9%2FbrpavB2LGIPKMI%2F5Qchgaicdz5uGBQvI5SUIaiCS3YVLuQ1afrLP33T5PD0q1J%2FSYZpSpmkKpPxT3fT7hdSd1VDX7o5bZE82sp%2BlnuQcGTAci9fHwTZ1mfoE48D0oL6eh%2BORk0IUiX43qwURthp6EIabsWoWTQ9yfSBKRv7pXhwnltuVMz55rNfMITps78GOqUBqDLbPU%2FCvJtkiIk%2FKATeK11iNQlPnsu%2Fx8T0rLgkCNbt4ClZvBQjDfL7U399jHr3sBuU8YLQO6SYewKh0HeXDPi%2FEflyh79qEgLghCIZJtd%2BEDmIH1Qysd%2Bjb4rZQDY25lWmP4NPoMopGkyN2%2BNMHFOsqSFLGTWH4cE0LZboA6hGQXcFVfBpORsaWDES%2B4Wxk0ilqcCVgUGj61O6q2bRWqwlreBD&X-Amz-Signature=8e4781379f62043ed79bbf33b6779c50a726eea8d975fbd430888fd50f39c311&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CYFCLBZ%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGXIeY39G0ZMJsshi%2FOK2ozerKs5HZdvr7r28yL73VhKAiEAlBzoCTIQla%2FamZ9jkD42s0YwK3N8Uh%2BU2ftWjsGZUsAqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPxRl2nvQ0Jyu9qRCrcAzfzPxR%2FF5Pq9ouBp6XXWH1JsDQD2yAffiS4llOMEgE%2FYjA3dh1D16t2OqMsLbhAMCb4kWyUK7%2FV%2B40iQyj0S95aQn2xmAe%2FyfdxyWClJhESwJ8gSgFt3ay%2BQDKWmonPwo4uX7nWJIlKzTRA%2Fdiaha0vTSemp1Ftp9WXN2hNaRIpEsUZOX7ExX1aJCPWT0HXskyn%2BRFsEXf%2BAp6JsPP2zN8YEk9YgGsiPoH6qSYbFXPxFJgRKqFYRlefEw7sefMKyDvkmwsF%2FF%2FxeOg88NBgEPPmEk1i40UIW0KXFwsO7%2FCtA%2BXMOa84CinB36Oz%2FL4p64kVqybjPwDcR8i8XuTwlddhzuZg0T0oyAL92xT0GOkPQYVpFZEXZW7UFyRYkgJ1hOHO%2F9Kb%2Fl%2BPtXF5ceujOlYnaLaoVnIMdU1fvvUBuIokxouTtBM8YTgjGqvIHHz7WHc9%2FbrpavB2LGIPKMI%2F5Qchgaicdz5uGBQvI5SUIaiCS3YVLuQ1afrLP33T5PD0q1J%2FSYZpSpmkKpPxT3fT7hdSd1VDX7o5bZE82sp%2BlnuQcGTAci9fHwTZ1mfoE48D0oL6eh%2BORk0IUiX43qwURthp6EIabsWoWTQ9yfSBKRv7pXhwnltuVMz55rNfMITps78GOqUBqDLbPU%2FCvJtkiIk%2FKATeK11iNQlPnsu%2Fx8T0rLgkCNbt4ClZvBQjDfL7U399jHr3sBuU8YLQO6SYewKh0HeXDPi%2FEflyh79qEgLghCIZJtd%2BEDmIH1Qysd%2Bjb4rZQDY25lWmP4NPoMopGkyN2%2BNMHFOsqSFLGTWH4cE0LZboA6hGQXcFVfBpORsaWDES%2B4Wxk0ilqcCVgUGj61O6q2bRWqwlreBD&X-Amz-Signature=bc8db330ffa73fc5f682842b1b6b04e29681431d1ab32ff70d88d92f21528c63&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

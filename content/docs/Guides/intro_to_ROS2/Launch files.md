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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQKYMES%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCFphSnYRFd338m33jHbrQs%2Fq7SD%2B84SPvxjKaTdf%2BYgQIgJ3zQLVegbI7uHYN8Bx0oYf3XYrD0pXClcJj4HLGQatsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD48F3PdSB4D%2FC%2FJ3yrcAy9RPn0xlEmMJG7fFfptLWVWYMyQ8kOXBzG1l9GlIBxHSBX9fgnWDbomXB9AENCGWwfmlgMM%2Fl8iL7AsUMpt6Qc%2BLPp5fzNpJCuT5wEaJtZbWkFOUXYbBKNw7DBfmjsweZ6oUmuNJm738OcroHTOO7xKoUVXLmk7awo4tAyJBydmckRf8VwUGiFULER77nPJ3X4cbsgkk8eomG11Edn%2BFQZIQhy0W27hIN3c2xg7C3eKqJ9TqIQLvmeMNQ4uO1RSzGmCmKNuHHigT7WRpvl99vWvliuv2%2B4dKGIejgyCT46XZGnyg%2BblR1rjlsCpTiRFOMuLsSr5yL3gGbCg4%2FcPaI1%2BfXCqR6PBMUvqGo7c2nVEoGg%2FD368j9oqFzUL3pE1FczMmulPFZxmHsmSinbGitxvxyscd2RNEabNOCwmhmNY%2FdOqsjhCbPMXAW6FUTNB%2B4eVdcnKLnRhDCtpbXo8gmGL32wmUUOH9SCE1yAEH7ntJ1dZDhZuumn44ofxH%2F6aksP12QWJjJIA%2BXF7dTB1KKa4akcrWsF1FBshvuMlm1wyduMU2SMV%2FKpI5wml%2BhKsTDdGMz%2Bo0I%2BGGFn15k%2B%2BSGdTpdH5Qgt%2Bg3tkBSK9wq8o%2F0Rt5R4WvWd1pWaMMNv0ycAGOqUBPn0s8Lr7HQvxuCDWgJyp3zRWp3QFTeROYkMQPk9NKfMPYJwfWMFzUGm%2Bp1NDgxHDMZ6MsX1D2GjanXvbdOlIQLgsy1TazOothOr2BsgniBZ63CqQPFUz0EhGvryYzi%2FWGhTZDQVc%2F25oSMMvXICdEj6Mmwd1eWU%2Bc80KVwUNk6myhBQUsjwlr%2FPQxHMNGork%2B7o6CwIR9weIoHPgd3ako%2BtLeAJl&X-Amz-Signature=53aeb957c30c4f404c690e6ad01a7625f2f021f540c522c51aa7f07b9f1fb67d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQKYMES%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCFphSnYRFd338m33jHbrQs%2Fq7SD%2B84SPvxjKaTdf%2BYgQIgJ3zQLVegbI7uHYN8Bx0oYf3XYrD0pXClcJj4HLGQatsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD48F3PdSB4D%2FC%2FJ3yrcAy9RPn0xlEmMJG7fFfptLWVWYMyQ8kOXBzG1l9GlIBxHSBX9fgnWDbomXB9AENCGWwfmlgMM%2Fl8iL7AsUMpt6Qc%2BLPp5fzNpJCuT5wEaJtZbWkFOUXYbBKNw7DBfmjsweZ6oUmuNJm738OcroHTOO7xKoUVXLmk7awo4tAyJBydmckRf8VwUGiFULER77nPJ3X4cbsgkk8eomG11Edn%2BFQZIQhy0W27hIN3c2xg7C3eKqJ9TqIQLvmeMNQ4uO1RSzGmCmKNuHHigT7WRpvl99vWvliuv2%2B4dKGIejgyCT46XZGnyg%2BblR1rjlsCpTiRFOMuLsSr5yL3gGbCg4%2FcPaI1%2BfXCqR6PBMUvqGo7c2nVEoGg%2FD368j9oqFzUL3pE1FczMmulPFZxmHsmSinbGitxvxyscd2RNEabNOCwmhmNY%2FdOqsjhCbPMXAW6FUTNB%2B4eVdcnKLnRhDCtpbXo8gmGL32wmUUOH9SCE1yAEH7ntJ1dZDhZuumn44ofxH%2F6aksP12QWJjJIA%2BXF7dTB1KKa4akcrWsF1FBshvuMlm1wyduMU2SMV%2FKpI5wml%2BhKsTDdGMz%2Bo0I%2BGGFn15k%2B%2BSGdTpdH5Qgt%2Bg3tkBSK9wq8o%2F0Rt5R4WvWd1pWaMMNv0ycAGOqUBPn0s8Lr7HQvxuCDWgJyp3zRWp3QFTeROYkMQPk9NKfMPYJwfWMFzUGm%2Bp1NDgxHDMZ6MsX1D2GjanXvbdOlIQLgsy1TazOothOr2BsgniBZ63CqQPFUz0EhGvryYzi%2FWGhTZDQVc%2F25oSMMvXICdEj6Mmwd1eWU%2Bc80KVwUNk6myhBQUsjwlr%2FPQxHMNGork%2B7o6CwIR9weIoHPgd3ako%2BtLeAJl&X-Amz-Signature=7292abca71c4c581b540d20ca3092b9588707cabda43c65d19013cf131f088c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XQKYMES%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCFphSnYRFd338m33jHbrQs%2Fq7SD%2B84SPvxjKaTdf%2BYgQIgJ3zQLVegbI7uHYN8Bx0oYf3XYrD0pXClcJj4HLGQatsqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD48F3PdSB4D%2FC%2FJ3yrcAy9RPn0xlEmMJG7fFfptLWVWYMyQ8kOXBzG1l9GlIBxHSBX9fgnWDbomXB9AENCGWwfmlgMM%2Fl8iL7AsUMpt6Qc%2BLPp5fzNpJCuT5wEaJtZbWkFOUXYbBKNw7DBfmjsweZ6oUmuNJm738OcroHTOO7xKoUVXLmk7awo4tAyJBydmckRf8VwUGiFULER77nPJ3X4cbsgkk8eomG11Edn%2BFQZIQhy0W27hIN3c2xg7C3eKqJ9TqIQLvmeMNQ4uO1RSzGmCmKNuHHigT7WRpvl99vWvliuv2%2B4dKGIejgyCT46XZGnyg%2BblR1rjlsCpTiRFOMuLsSr5yL3gGbCg4%2FcPaI1%2BfXCqR6PBMUvqGo7c2nVEoGg%2FD368j9oqFzUL3pE1FczMmulPFZxmHsmSinbGitxvxyscd2RNEabNOCwmhmNY%2FdOqsjhCbPMXAW6FUTNB%2B4eVdcnKLnRhDCtpbXo8gmGL32wmUUOH9SCE1yAEH7ntJ1dZDhZuumn44ofxH%2F6aksP12QWJjJIA%2BXF7dTB1KKa4akcrWsF1FBshvuMlm1wyduMU2SMV%2FKpI5wml%2BhKsTDdGMz%2Bo0I%2BGGFn15k%2B%2BSGdTpdH5Qgt%2Bg3tkBSK9wq8o%2F0Rt5R4WvWd1pWaMMNv0ycAGOqUBPn0s8Lr7HQvxuCDWgJyp3zRWp3QFTeROYkMQPk9NKfMPYJwfWMFzUGm%2Bp1NDgxHDMZ6MsX1D2GjanXvbdOlIQLgsy1TazOothOr2BsgniBZ63CqQPFUz0EhGvryYzi%2FWGhTZDQVc%2F25oSMMvXICdEj6Mmwd1eWU%2Bc80KVwUNk6myhBQUsjwlr%2FPQxHMNGork%2B7o6CwIR9weIoHPgd3ako%2BtLeAJl&X-Amz-Signature=cf3a7832152652a7490eeb5b19856ceb51d78561c18ac8fc509be22d203ff3ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

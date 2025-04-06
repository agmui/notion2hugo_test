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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YW5XT5H%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4gTaXHvzTbywWgQkUP7acGNmI8hImcvwMUDwARJK95wIgOeJIWwQOjGgtzNHwH78h6TvjXkSnZHUKz6v8pH3%2BhGMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIU8f3FOOHJOQ5Z5BSrcA4F%2BHMIuBj5oFLOJ%2BnxAEYuk7sX9YSPN7KkZZk7J2%2FOLOLyd6npN%2B4znKrI7hkXmeaDW66Tuogp8BPcvCCpza%2B%2BRuAUyMukeRiOqdDSB7qXPhBmSbGIXWld5rlATJ2Vbp%2BktD5M8cbfnUNW3zUvyWnRGQIs%2FysY%2BT3pv%2BptTgB2BNuYIxT%2B0VhuWKDbKi48pF7WxAwGsOTfl%2BoiWCHoRgdlfnZd8goNMsnfqktS4flEnQ%2BGeVuf4uBXMA5LzQHuJNdwiJnll6bXo2%2FOP2zLkpk4SZ665sIPSgSLJeRRKCD%2BwT3SlcRWeuyHF65GVwOq6nxOaSJ8cxYSzFfP0u9zSc%2FLnq%2BBpwleMiFRLxaIoQ%2BszEIE5ym9GMAZ2r1X5%2FPMNZj8yYNhGjtcZE9FrJ8IBvbRrZNxisNNvOUYW5%2FIaX5EIPIDLdQPX1eKXcFkoMppFoRy7nXeo15dvwxv5ap%2FtmeONtak%2But1eBOcQ%2FC9x%2BV3gXruO%2F8N1fGSz5TExxiWEUK4RsDBTOTfM%2B4MygWFavcMukMMtPLHOSS62dWlZEOmAQG98BReQ%2B%2BIof3XPgsHbrPlJ8pKvyfgLyvrK1%2Fzgvuf4InN3kGMlOExltjXEzzQ2BAwR%2Bjb3QGvATu8nMNP0y78GOqUBd6Ao0K0LqoldK5WXjqpXa2UeLbTJbycYLmqgvwNDxYiFTCPaDhD0K5TfhVVYY1nlCboAXLLdB4IGoE9%2BX%2FW0iqujNegn5cVh5ai6upmzQv6QFWHD2HUvjwpuHuyT%2ByLngKf6Qf7duWFuz%2BlZIrSvKVyjLYdQCVRQBTfYLho6jQdSliiLBzoyu0uhSEoT5cGS0vAfmirXTqMf%2Bb42SPKovRKb5xKb&X-Amz-Signature=0bd15844ad7437323e7c2c2b7370ba7c78e3a26fd709f3b5ef69b9701e24ee3a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YW5XT5H%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4gTaXHvzTbywWgQkUP7acGNmI8hImcvwMUDwARJK95wIgOeJIWwQOjGgtzNHwH78h6TvjXkSnZHUKz6v8pH3%2BhGMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIU8f3FOOHJOQ5Z5BSrcA4F%2BHMIuBj5oFLOJ%2BnxAEYuk7sX9YSPN7KkZZk7J2%2FOLOLyd6npN%2B4znKrI7hkXmeaDW66Tuogp8BPcvCCpza%2B%2BRuAUyMukeRiOqdDSB7qXPhBmSbGIXWld5rlATJ2Vbp%2BktD5M8cbfnUNW3zUvyWnRGQIs%2FysY%2BT3pv%2BptTgB2BNuYIxT%2B0VhuWKDbKi48pF7WxAwGsOTfl%2BoiWCHoRgdlfnZd8goNMsnfqktS4flEnQ%2BGeVuf4uBXMA5LzQHuJNdwiJnll6bXo2%2FOP2zLkpk4SZ665sIPSgSLJeRRKCD%2BwT3SlcRWeuyHF65GVwOq6nxOaSJ8cxYSzFfP0u9zSc%2FLnq%2BBpwleMiFRLxaIoQ%2BszEIE5ym9GMAZ2r1X5%2FPMNZj8yYNhGjtcZE9FrJ8IBvbRrZNxisNNvOUYW5%2FIaX5EIPIDLdQPX1eKXcFkoMppFoRy7nXeo15dvwxv5ap%2FtmeONtak%2But1eBOcQ%2FC9x%2BV3gXruO%2F8N1fGSz5TExxiWEUK4RsDBTOTfM%2B4MygWFavcMukMMtPLHOSS62dWlZEOmAQG98BReQ%2B%2BIof3XPgsHbrPlJ8pKvyfgLyvrK1%2Fzgvuf4InN3kGMlOExltjXEzzQ2BAwR%2Bjb3QGvATu8nMNP0y78GOqUBd6Ao0K0LqoldK5WXjqpXa2UeLbTJbycYLmqgvwNDxYiFTCPaDhD0K5TfhVVYY1nlCboAXLLdB4IGoE9%2BX%2FW0iqujNegn5cVh5ai6upmzQv6QFWHD2HUvjwpuHuyT%2ByLngKf6Qf7duWFuz%2BlZIrSvKVyjLYdQCVRQBTfYLho6jQdSliiLBzoyu0uhSEoT5cGS0vAfmirXTqMf%2Bb42SPKovRKb5xKb&X-Amz-Signature=963a369931de47c4838631b57703d49744700595bfb87c9c69c3b45bc5a5e8fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YW5XT5H%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4gTaXHvzTbywWgQkUP7acGNmI8hImcvwMUDwARJK95wIgOeJIWwQOjGgtzNHwH78h6TvjXkSnZHUKz6v8pH3%2BhGMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIU8f3FOOHJOQ5Z5BSrcA4F%2BHMIuBj5oFLOJ%2BnxAEYuk7sX9YSPN7KkZZk7J2%2FOLOLyd6npN%2B4znKrI7hkXmeaDW66Tuogp8BPcvCCpza%2B%2BRuAUyMukeRiOqdDSB7qXPhBmSbGIXWld5rlATJ2Vbp%2BktD5M8cbfnUNW3zUvyWnRGQIs%2FysY%2BT3pv%2BptTgB2BNuYIxT%2B0VhuWKDbKi48pF7WxAwGsOTfl%2BoiWCHoRgdlfnZd8goNMsnfqktS4flEnQ%2BGeVuf4uBXMA5LzQHuJNdwiJnll6bXo2%2FOP2zLkpk4SZ665sIPSgSLJeRRKCD%2BwT3SlcRWeuyHF65GVwOq6nxOaSJ8cxYSzFfP0u9zSc%2FLnq%2BBpwleMiFRLxaIoQ%2BszEIE5ym9GMAZ2r1X5%2FPMNZj8yYNhGjtcZE9FrJ8IBvbRrZNxisNNvOUYW5%2FIaX5EIPIDLdQPX1eKXcFkoMppFoRy7nXeo15dvwxv5ap%2FtmeONtak%2But1eBOcQ%2FC9x%2BV3gXruO%2F8N1fGSz5TExxiWEUK4RsDBTOTfM%2B4MygWFavcMukMMtPLHOSS62dWlZEOmAQG98BReQ%2B%2BIof3XPgsHbrPlJ8pKvyfgLyvrK1%2Fzgvuf4InN3kGMlOExltjXEzzQ2BAwR%2Bjb3QGvATu8nMNP0y78GOqUBd6Ao0K0LqoldK5WXjqpXa2UeLbTJbycYLmqgvwNDxYiFTCPaDhD0K5TfhVVYY1nlCboAXLLdB4IGoE9%2BX%2FW0iqujNegn5cVh5ai6upmzQv6QFWHD2HUvjwpuHuyT%2ByLngKf6Qf7duWFuz%2BlZIrSvKVyjLYdQCVRQBTfYLho6jQdSliiLBzoyu0uhSEoT5cGS0vAfmirXTqMf%2Bb42SPKovRKb5xKb&X-Amz-Signature=4ad043d279e20cb88b93b73a0f995fe5abdec2340deca4edb4aa731e743702dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

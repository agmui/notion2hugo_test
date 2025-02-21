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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVAGX2MA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7pQ%2BJtink4kianNQATaegBvIDfwoBfbbNk%2FcL2vh5hAIhANrAmTezN5TGXq%2BzL08vZtSDQl%2FHMHHMcb6aTZUE95wvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI58I3sxjXqBgbR4gq3AME7AQ5Sv93m3oouHExMQtDvZro%2BsqqjnUQ0weCx1LsT%2FAaKP%2BGsKbgv6xEY8eQYMvCBKeuZIPgnZqSkLTJXlhpehi3IyR%2BU9tnaxfa8daM6sKHsF6L3Rz75son0QANQokBO7P3Xsj6uzPzIFJuY9VoHaZuBxLnsOi1McoyG%2BN7U%2FpAR3PjsDRK0BJ8I8yGwezb%2BswChMgjkiaZLMLXIP5Gnv0gKAbPOgjkdgQgB4ITFoeGIZsPVEmqvGGIiiDrlmZDkeGqTlhaUPk9XHdNiEDw90wNVp%2B95NZ7%2BZ1VCCKFIXg0CoMv62Rm2ggV%2BEXIgNjRf1wJvAZGx9Ql64IKxXOqeDVKsokORlXmmDxZeCrFfhDH0af%2FOclKLzFMoQBZFlei9ljYVDaLJpKoZEGU3v4fyZvEJ8hO96fLdZjxU2X4MilKCm6rIRgQHb2uiYPXP%2FuLMvhs4jVBFRR7fw%2FKuHEQ5%2FK%2BY7YcKr2jel%2FqA5M5Tgj4MtI15RtqYxB%2FMvo3fjJlzEiLj03BZwdV5uF%2FeWzBCzKrJ3SIZXvDiPSyqHYlPd8b01dA0GlrFP7JZGhHDl8cedgebyVZdhTpVu2z4qbf1WA5Q2W%2FvdcAE8f46NRm%2FeAJzv9rvnRmlkjAtTCX3uC9BjqkAUaSj2wy0JQOtt8NfSRMnDJTwq7ettMnYXp4TH5e%2B1Xg88KYGhkpu%2FkgBJrqySTrgYrTnAFQaLUFBhFHcqoVDqMQ4cC9%2FI%2F3ke%2Fws%2F6lH2DHq2yd7AnOLhtMRtI2NCnK9S1ZzPYAu7usYmHViSj8xJbCNodwc0DaYjGwHh%2FH2eJ5bNKpcieUN%2BC8Qtf6bK9UXeutN42g9IsyKd3GtxNG40QokA7h&X-Amz-Signature=16d1a4a1d55f6b6d303a5d8c0d4ea221ce44a0be4c9117b2dda6cf33bf7e89e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVAGX2MA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7pQ%2BJtink4kianNQATaegBvIDfwoBfbbNk%2FcL2vh5hAIhANrAmTezN5TGXq%2BzL08vZtSDQl%2FHMHHMcb6aTZUE95wvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI58I3sxjXqBgbR4gq3AME7AQ5Sv93m3oouHExMQtDvZro%2BsqqjnUQ0weCx1LsT%2FAaKP%2BGsKbgv6xEY8eQYMvCBKeuZIPgnZqSkLTJXlhpehi3IyR%2BU9tnaxfa8daM6sKHsF6L3Rz75son0QANQokBO7P3Xsj6uzPzIFJuY9VoHaZuBxLnsOi1McoyG%2BN7U%2FpAR3PjsDRK0BJ8I8yGwezb%2BswChMgjkiaZLMLXIP5Gnv0gKAbPOgjkdgQgB4ITFoeGIZsPVEmqvGGIiiDrlmZDkeGqTlhaUPk9XHdNiEDw90wNVp%2B95NZ7%2BZ1VCCKFIXg0CoMv62Rm2ggV%2BEXIgNjRf1wJvAZGx9Ql64IKxXOqeDVKsokORlXmmDxZeCrFfhDH0af%2FOclKLzFMoQBZFlei9ljYVDaLJpKoZEGU3v4fyZvEJ8hO96fLdZjxU2X4MilKCm6rIRgQHb2uiYPXP%2FuLMvhs4jVBFRR7fw%2FKuHEQ5%2FK%2BY7YcKr2jel%2FqA5M5Tgj4MtI15RtqYxB%2FMvo3fjJlzEiLj03BZwdV5uF%2FeWzBCzKrJ3SIZXvDiPSyqHYlPd8b01dA0GlrFP7JZGhHDl8cedgebyVZdhTpVu2z4qbf1WA5Q2W%2FvdcAE8f46NRm%2FeAJzv9rvnRmlkjAtTCX3uC9BjqkAUaSj2wy0JQOtt8NfSRMnDJTwq7ettMnYXp4TH5e%2B1Xg88KYGhkpu%2FkgBJrqySTrgYrTnAFQaLUFBhFHcqoVDqMQ4cC9%2FI%2F3ke%2Fws%2F6lH2DHq2yd7AnOLhtMRtI2NCnK9S1ZzPYAu7usYmHViSj8xJbCNodwc0DaYjGwHh%2FH2eJ5bNKpcieUN%2BC8Qtf6bK9UXeutN42g9IsyKd3GtxNG40QokA7h&X-Amz-Signature=59829130d88cfb82ad151e163f9b6868038fa2991ef10e00b246835d0cf85186&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVAGX2MA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T081052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7pQ%2BJtink4kianNQATaegBvIDfwoBfbbNk%2FcL2vh5hAIhANrAmTezN5TGXq%2BzL08vZtSDQl%2FHMHHMcb6aTZUE95wvKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxI58I3sxjXqBgbR4gq3AME7AQ5Sv93m3oouHExMQtDvZro%2BsqqjnUQ0weCx1LsT%2FAaKP%2BGsKbgv6xEY8eQYMvCBKeuZIPgnZqSkLTJXlhpehi3IyR%2BU9tnaxfa8daM6sKHsF6L3Rz75son0QANQokBO7P3Xsj6uzPzIFJuY9VoHaZuBxLnsOi1McoyG%2BN7U%2FpAR3PjsDRK0BJ8I8yGwezb%2BswChMgjkiaZLMLXIP5Gnv0gKAbPOgjkdgQgB4ITFoeGIZsPVEmqvGGIiiDrlmZDkeGqTlhaUPk9XHdNiEDw90wNVp%2B95NZ7%2BZ1VCCKFIXg0CoMv62Rm2ggV%2BEXIgNjRf1wJvAZGx9Ql64IKxXOqeDVKsokORlXmmDxZeCrFfhDH0af%2FOclKLzFMoQBZFlei9ljYVDaLJpKoZEGU3v4fyZvEJ8hO96fLdZjxU2X4MilKCm6rIRgQHb2uiYPXP%2FuLMvhs4jVBFRR7fw%2FKuHEQ5%2FK%2BY7YcKr2jel%2FqA5M5Tgj4MtI15RtqYxB%2FMvo3fjJlzEiLj03BZwdV5uF%2FeWzBCzKrJ3SIZXvDiPSyqHYlPd8b01dA0GlrFP7JZGhHDl8cedgebyVZdhTpVu2z4qbf1WA5Q2W%2FvdcAE8f46NRm%2FeAJzv9rvnRmlkjAtTCX3uC9BjqkAUaSj2wy0JQOtt8NfSRMnDJTwq7ettMnYXp4TH5e%2B1Xg88KYGhkpu%2FkgBJrqySTrgYrTnAFQaLUFBhFHcqoVDqMQ4cC9%2FI%2F3ke%2Fws%2F6lH2DHq2yd7AnOLhtMRtI2NCnK9S1ZzPYAu7usYmHViSj8xJbCNodwc0DaYjGwHh%2FH2eJ5bNKpcieUN%2BC8Qtf6bK9UXeutN42g9IsyKd3GtxNG40QokA7h&X-Amz-Signature=c7277e2d6d10ebbfbdf165abd44ec1c69328c4b005fb170ec5c479d02c1cd0b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

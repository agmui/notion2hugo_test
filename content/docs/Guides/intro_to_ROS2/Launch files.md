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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNL5VAAM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDpXXXHNXDWQ6rAbuDtTrl4T8wAxT16tzoPkFtbaMztNAiB2MIg1fyj9x2S2hdmVC2D%2FOhVD%2BHd9bCyKfg%2BdfWeKKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM9cTn5OlZ61vgrCx%2BKtwD5xffkHZeDZndu%2FUguuEhm2HP%2BwxbpUGcVRTd7LV%2BJpZVMgLcSEVwpZZlJ9Ly9BSdmouv%2FBcOe4jkAzL3hpiwHFdTLfm0izZ9Ra%2B%2B%2FwY3gZuzfwKtASkbFOQx1iRC%2BQ9adS8%2BxYgcw2vbX8b%2BU5CQXpjHz6cTHgVZD64wRBoxeBl2XhN%2F8Sx%2BEn5yTzzav9RtETmNigE2Gcv0P534pnisxXIwPDFzHbjFpzfz6yk5WxxYzsYtFntmNTSNrwweWvwPDPXuTlpViVMBZfBDk%2FtSAawfng6zUsa13MF9qfdlVMR6hqWCHUHNXrYqioInF8%2FwJ3K4yPpdvT%2BfQ3PR6dT3Q8ApXO4T6He7%2FbaOiZ9abt5xrdJ3cLb%2F9hz17qcjDnYff3WEZjHzMSxxw8%2B31%2FTiWxXTcP7kJX71IcIvJ%2FDQFLEFSx9wUEqbi01DhQbgD0wCnxMPiYKDcVH1cCiMqiLoa82nES299XLi11rMAj5wng5Oj9yIraVyUs04UGCtc1uJvNmnU9cVTe%2Fhk1PLUnbkX05l1f6X%2F6j8gvJ67qdhPjFqdk2oblEdkIRO4DDIyiqp1iVl2pPkzNoPuWuDvsUpz4eQ0iEF%2FzeilxIkEpcgMI44nRyUTkSFBuBSRCQwrqH2vQY6pgHG3ZW3XLsxKgJw0EzQguKpIWIIlOkezeh%2FWIhNkQK9oRwG74ggeUa8KwN7z%2F0I1qYWER4QNxb20czuWOftpT6%2FqKRkTubcsqv79GUTXqdeq8mdHax26XWeLDlLtjCRPLD7vEhTljJqn6YaeEdaVPiJ5zllDwtfjlyRbwRe%2BEV1ezbflNrHTmtwzK0Y14Qe8f3Kt66M8of1mVeNC1nDPob%2FPODVypc3&X-Amz-Signature=26162fe00a0e4e4ad3e16094f784f024715a5b0df152a042679975b9d8262c93&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNL5VAAM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDpXXXHNXDWQ6rAbuDtTrl4T8wAxT16tzoPkFtbaMztNAiB2MIg1fyj9x2S2hdmVC2D%2FOhVD%2BHd9bCyKfg%2BdfWeKKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM9cTn5OlZ61vgrCx%2BKtwD5xffkHZeDZndu%2FUguuEhm2HP%2BwxbpUGcVRTd7LV%2BJpZVMgLcSEVwpZZlJ9Ly9BSdmouv%2FBcOe4jkAzL3hpiwHFdTLfm0izZ9Ra%2B%2B%2FwY3gZuzfwKtASkbFOQx1iRC%2BQ9adS8%2BxYgcw2vbX8b%2BU5CQXpjHz6cTHgVZD64wRBoxeBl2XhN%2F8Sx%2BEn5yTzzav9RtETmNigE2Gcv0P534pnisxXIwPDFzHbjFpzfz6yk5WxxYzsYtFntmNTSNrwweWvwPDPXuTlpViVMBZfBDk%2FtSAawfng6zUsa13MF9qfdlVMR6hqWCHUHNXrYqioInF8%2FwJ3K4yPpdvT%2BfQ3PR6dT3Q8ApXO4T6He7%2FbaOiZ9abt5xrdJ3cLb%2F9hz17qcjDnYff3WEZjHzMSxxw8%2B31%2FTiWxXTcP7kJX71IcIvJ%2FDQFLEFSx9wUEqbi01DhQbgD0wCnxMPiYKDcVH1cCiMqiLoa82nES299XLi11rMAj5wng5Oj9yIraVyUs04UGCtc1uJvNmnU9cVTe%2Fhk1PLUnbkX05l1f6X%2F6j8gvJ67qdhPjFqdk2oblEdkIRO4DDIyiqp1iVl2pPkzNoPuWuDvsUpz4eQ0iEF%2FzeilxIkEpcgMI44nRyUTkSFBuBSRCQwrqH2vQY6pgHG3ZW3XLsxKgJw0EzQguKpIWIIlOkezeh%2FWIhNkQK9oRwG74ggeUa8KwN7z%2F0I1qYWER4QNxb20czuWOftpT6%2FqKRkTubcsqv79GUTXqdeq8mdHax26XWeLDlLtjCRPLD7vEhTljJqn6YaeEdaVPiJ5zllDwtfjlyRbwRe%2BEV1ezbflNrHTmtwzK0Y14Qe8f3Kt66M8of1mVeNC1nDPob%2FPODVypc3&X-Amz-Signature=0ea01abc7e4744cf28c572aa7a6544465e46821eeabdb0bf28d401be42345711&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNL5VAAM%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIDpXXXHNXDWQ6rAbuDtTrl4T8wAxT16tzoPkFtbaMztNAiB2MIg1fyj9x2S2hdmVC2D%2FOhVD%2BHd9bCyKfg%2BdfWeKKSr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM9cTn5OlZ61vgrCx%2BKtwD5xffkHZeDZndu%2FUguuEhm2HP%2BwxbpUGcVRTd7LV%2BJpZVMgLcSEVwpZZlJ9Ly9BSdmouv%2FBcOe4jkAzL3hpiwHFdTLfm0izZ9Ra%2B%2B%2FwY3gZuzfwKtASkbFOQx1iRC%2BQ9adS8%2BxYgcw2vbX8b%2BU5CQXpjHz6cTHgVZD64wRBoxeBl2XhN%2F8Sx%2BEn5yTzzav9RtETmNigE2Gcv0P534pnisxXIwPDFzHbjFpzfz6yk5WxxYzsYtFntmNTSNrwweWvwPDPXuTlpViVMBZfBDk%2FtSAawfng6zUsa13MF9qfdlVMR6hqWCHUHNXrYqioInF8%2FwJ3K4yPpdvT%2BfQ3PR6dT3Q8ApXO4T6He7%2FbaOiZ9abt5xrdJ3cLb%2F9hz17qcjDnYff3WEZjHzMSxxw8%2B31%2FTiWxXTcP7kJX71IcIvJ%2FDQFLEFSx9wUEqbi01DhQbgD0wCnxMPiYKDcVH1cCiMqiLoa82nES299XLi11rMAj5wng5Oj9yIraVyUs04UGCtc1uJvNmnU9cVTe%2Fhk1PLUnbkX05l1f6X%2F6j8gvJ67qdhPjFqdk2oblEdkIRO4DDIyiqp1iVl2pPkzNoPuWuDvsUpz4eQ0iEF%2FzeilxIkEpcgMI44nRyUTkSFBuBSRCQwrqH2vQY6pgHG3ZW3XLsxKgJw0EzQguKpIWIIlOkezeh%2FWIhNkQK9oRwG74ggeUa8KwN7z%2F0I1qYWER4QNxb20czuWOftpT6%2FqKRkTubcsqv79GUTXqdeq8mdHax26XWeLDlLtjCRPLD7vEhTljJqn6YaeEdaVPiJ5zllDwtfjlyRbwRe%2BEV1ezbflNrHTmtwzK0Y14Qe8f3Kt66M8of1mVeNC1nDPob%2FPODVypc3&X-Amz-Signature=9248dc1c1f70ffa336fd0049e77ecfb9adac35852aec9b3966c40fcaf191b09c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

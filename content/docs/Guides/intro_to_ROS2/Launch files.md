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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU4MJXZW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUPqeOLlMYiFq9vH3wQnZ1KoZatY3tGqyuxQPW3h2h3gIgAcvCUNTvtO5Jd9uYWAHOtukeT8hoOGSLzJwe8%2BzpUjsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKuuf5WyBdE7muhdiircA%2B%2BlzWiPw%2FHRk%2Fw30qWT6k86OtUy7Qmi7WljLh0QP7nQPIoNDLTOAbEtOo4WeTcI0X8HPFBUnl8vf5HhFhNEarpJ84QV9p3zlaWWqBwELqw96fUFTDgHn%2FFqtTUoXsp6RCa6U3stOMuk3e7r%2BEzu8yjznlTsWdDCRdxbg576ZtFGgHAji6n2a9yWpbD29TmHjRN%2BEASuXGilw2K2MkjQ1TwkJ%2BbfEb5hi7uKWCASvrLsMGodtcIi7GMZaVEmqnXr1P8SNDx%2BdwtRQNStIXiPGcjdNuAZbQQOGoads01YYz5%2FCXLY3FUA%2BFPhjqAeDO0Em%2Fgg%2Fglw0xbjfrdUPattRPafo0JQA92bmIyZvajGiFVPj1GOAENV8rLrSoYOFlP%2BPwGNUfr92neGCspLke7%2BymItP%2FFkdNvQ0oSKB8%2B6dsmcOdhob78s5hq9Gb%2BZuz%2BeQ4VmAMi4BSSuy7xTEWCGU3tD%2FeQtiuwW1kP8oV%2Bcif3RJS2e9Mt15cV7L9uIgn%2BAann%2BT8eKWhUf4Azp63L69cTdNHA%2FCKoclFJEDu4KffGrW%2F25UqCj9s86lIutIPfnuDQin3rB3pOhabFCC8Kx%2FMq1m6uAzguZ8Vm8Z9K4ofowYDHM%2FXnvFDDOGOFJMIDGzsMGOqUBetHJ%2F6bk0pZHefHSLELQnEdCoR3CGpWF7TE9vRWiqmX0i3yfpyTZdJ%2B6p1Su5EnlVqUGaH2KStO86ax0cKjMMG0IaBXPK6J%2F7EJ4BG6NiPSSL%2B7t%2Bwxsq%2Fcm5NRx1NU1r6ARdgbiBh3M1T2%2BmZUbkiRefq%2B04IfIaEtE6Qupq8UBNMQGKqRu3kJe5ZyCBMM59I1rt7LTWVM1BBU9zEJyeuKcavDl&X-Amz-Signature=6e83e7eef4c10d3fe62a36b4bf9debc1c77fcf17acccd1b49bf4efc4ab7580bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU4MJXZW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUPqeOLlMYiFq9vH3wQnZ1KoZatY3tGqyuxQPW3h2h3gIgAcvCUNTvtO5Jd9uYWAHOtukeT8hoOGSLzJwe8%2BzpUjsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKuuf5WyBdE7muhdiircA%2B%2BlzWiPw%2FHRk%2Fw30qWT6k86OtUy7Qmi7WljLh0QP7nQPIoNDLTOAbEtOo4WeTcI0X8HPFBUnl8vf5HhFhNEarpJ84QV9p3zlaWWqBwELqw96fUFTDgHn%2FFqtTUoXsp6RCa6U3stOMuk3e7r%2BEzu8yjznlTsWdDCRdxbg576ZtFGgHAji6n2a9yWpbD29TmHjRN%2BEASuXGilw2K2MkjQ1TwkJ%2BbfEb5hi7uKWCASvrLsMGodtcIi7GMZaVEmqnXr1P8SNDx%2BdwtRQNStIXiPGcjdNuAZbQQOGoads01YYz5%2FCXLY3FUA%2BFPhjqAeDO0Em%2Fgg%2Fglw0xbjfrdUPattRPafo0JQA92bmIyZvajGiFVPj1GOAENV8rLrSoYOFlP%2BPwGNUfr92neGCspLke7%2BymItP%2FFkdNvQ0oSKB8%2B6dsmcOdhob78s5hq9Gb%2BZuz%2BeQ4VmAMi4BSSuy7xTEWCGU3tD%2FeQtiuwW1kP8oV%2Bcif3RJS2e9Mt15cV7L9uIgn%2BAann%2BT8eKWhUf4Azp63L69cTdNHA%2FCKoclFJEDu4KffGrW%2F25UqCj9s86lIutIPfnuDQin3rB3pOhabFCC8Kx%2FMq1m6uAzguZ8Vm8Z9K4ofowYDHM%2FXnvFDDOGOFJMIDGzsMGOqUBetHJ%2F6bk0pZHefHSLELQnEdCoR3CGpWF7TE9vRWiqmX0i3yfpyTZdJ%2B6p1Su5EnlVqUGaH2KStO86ax0cKjMMG0IaBXPK6J%2F7EJ4BG6NiPSSL%2B7t%2Bwxsq%2Fcm5NRx1NU1r6ARdgbiBh3M1T2%2BmZUbkiRefq%2B04IfIaEtE6Qupq8UBNMQGKqRu3kJe5ZyCBMM59I1rt7LTWVM1BBU9zEJyeuKcavDl&X-Amz-Signature=6b673566fa8411fa9753992df1643a8334847070e6f9282f50d448571392cff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU4MJXZW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUPqeOLlMYiFq9vH3wQnZ1KoZatY3tGqyuxQPW3h2h3gIgAcvCUNTvtO5Jd9uYWAHOtukeT8hoOGSLzJwe8%2BzpUjsq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDKuuf5WyBdE7muhdiircA%2B%2BlzWiPw%2FHRk%2Fw30qWT6k86OtUy7Qmi7WljLh0QP7nQPIoNDLTOAbEtOo4WeTcI0X8HPFBUnl8vf5HhFhNEarpJ84QV9p3zlaWWqBwELqw96fUFTDgHn%2FFqtTUoXsp6RCa6U3stOMuk3e7r%2BEzu8yjznlTsWdDCRdxbg576ZtFGgHAji6n2a9yWpbD29TmHjRN%2BEASuXGilw2K2MkjQ1TwkJ%2BbfEb5hi7uKWCASvrLsMGodtcIi7GMZaVEmqnXr1P8SNDx%2BdwtRQNStIXiPGcjdNuAZbQQOGoads01YYz5%2FCXLY3FUA%2BFPhjqAeDO0Em%2Fgg%2Fglw0xbjfrdUPattRPafo0JQA92bmIyZvajGiFVPj1GOAENV8rLrSoYOFlP%2BPwGNUfr92neGCspLke7%2BymItP%2FFkdNvQ0oSKB8%2B6dsmcOdhob78s5hq9Gb%2BZuz%2BeQ4VmAMi4BSSuy7xTEWCGU3tD%2FeQtiuwW1kP8oV%2Bcif3RJS2e9Mt15cV7L9uIgn%2BAann%2BT8eKWhUf4Azp63L69cTdNHA%2FCKoclFJEDu4KffGrW%2F25UqCj9s86lIutIPfnuDQin3rB3pOhabFCC8Kx%2FMq1m6uAzguZ8Vm8Z9K4ofowYDHM%2FXnvFDDOGOFJMIDGzsMGOqUBetHJ%2F6bk0pZHefHSLELQnEdCoR3CGpWF7TE9vRWiqmX0i3yfpyTZdJ%2B6p1Su5EnlVqUGaH2KStO86ax0cKjMMG0IaBXPK6J%2F7EJ4BG6NiPSSL%2B7t%2Bwxsq%2Fcm5NRx1NU1r6ARdgbiBh3M1T2%2BmZUbkiRefq%2B04IfIaEtE6Qupq8UBNMQGKqRu3kJe5ZyCBMM59I1rt7LTWVM1BBU9zEJyeuKcavDl&X-Amz-Signature=ba6c2953d3a552b7dcbd70e1df51f3f83839d37977afe65581d3f8f257549390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

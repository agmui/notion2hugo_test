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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TXUQC5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1kE0WZuVKTnTXHfhm0dzf2Yiiw2mfyPaX0ikNrtQWlwIhAKSAr7ykBXADzrR9D9bRAn7PXkpka48%2FCuiv1IBJnoTpKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXwtUp1Fr81zijlF8q3ANT1SBuMNJiv%2BsRoxv%2FOPgutPIL1LeslIT%2Bw%2BBD2b%2FEdHl0ZSaok20v%2BB%2FrLzdXj9WLNdg86NfMAcMqN5dMiFn198HVA45CGjYESH6IwzmkebZAjgpHVLQd62pAxeKOI%2FVGDr4taj8StsHcWEGUUb6F6fbxMqiYwn728o5GhgB2BWFv6pw8FLjETov8vpCTVZ%2FmVSsSO4fOUeF7DUwr2%2B86SilxF41dpmhcakkVSQ6Y18QKJVio0PvvnmwXPIkqL%2BgO1XTQN9YbvRJ2yOHCU%2F23ENAiy15MLtCieIxJmInyXIbHil02PY6kuHAzIYEDmgR0H4RIGR7TraLUGkp%2B43bCrKGigcS51yFGsOEGTjXhMKqHZKQaLMyodjSE%2FILWijHKwnBnltEBmDZ%2Bzz5PgXSsI3hzblLfxylC3Go%2B%2BcTsI6aOt9WsondsmkgR2CvcHusBH4azKO%2F4fRMnePTOSM%2FcGfOXDShKoE93Rem0ZT6CDsBChQDlh1k8VHchYw4yL7woCASmexSKzI61zKz9zbNX8wBml4Fz%2FBk%2BFtlcDlwNgFq9EQ96Gyir5bA0P9lxfRuRDG5%2F4pfeVS6hQTwDFclfRRuS3A1%2BrdJecKOJsdOXWrLz3RssHiBIMJXK7zCunpvCBjqkAT8BFgeIVunIpy%2BWVt4DIrR0F1mc8XoVBbSO1jJwwerrKM8vQDefdNN9wKxUUyPvv5HT7PSGd4Q8ZaB%2FlAlEnixh1HcOn3OkAXs0ji7tZ374Ky5jA5Ht8Z6XWxV3FZZUOrC9fRyVaYqHigmEO3RgPRlCh%2B94mUNmeBmnaypGgLNHPoXABrqMDLHAGJmInqb4ORkzMFYwIHIOOQ5ay89%2FnYZu6ndv&X-Amz-Signature=351e15f56346e20e37308e5bcfd4d06aa8ebba3eb70c362c3ba9b85fc8e05887&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TXUQC5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1kE0WZuVKTnTXHfhm0dzf2Yiiw2mfyPaX0ikNrtQWlwIhAKSAr7ykBXADzrR9D9bRAn7PXkpka48%2FCuiv1IBJnoTpKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXwtUp1Fr81zijlF8q3ANT1SBuMNJiv%2BsRoxv%2FOPgutPIL1LeslIT%2Bw%2BBD2b%2FEdHl0ZSaok20v%2BB%2FrLzdXj9WLNdg86NfMAcMqN5dMiFn198HVA45CGjYESH6IwzmkebZAjgpHVLQd62pAxeKOI%2FVGDr4taj8StsHcWEGUUb6F6fbxMqiYwn728o5GhgB2BWFv6pw8FLjETov8vpCTVZ%2FmVSsSO4fOUeF7DUwr2%2B86SilxF41dpmhcakkVSQ6Y18QKJVio0PvvnmwXPIkqL%2BgO1XTQN9YbvRJ2yOHCU%2F23ENAiy15MLtCieIxJmInyXIbHil02PY6kuHAzIYEDmgR0H4RIGR7TraLUGkp%2B43bCrKGigcS51yFGsOEGTjXhMKqHZKQaLMyodjSE%2FILWijHKwnBnltEBmDZ%2Bzz5PgXSsI3hzblLfxylC3Go%2B%2BcTsI6aOt9WsondsmkgR2CvcHusBH4azKO%2F4fRMnePTOSM%2FcGfOXDShKoE93Rem0ZT6CDsBChQDlh1k8VHchYw4yL7woCASmexSKzI61zKz9zbNX8wBml4Fz%2FBk%2BFtlcDlwNgFq9EQ96Gyir5bA0P9lxfRuRDG5%2F4pfeVS6hQTwDFclfRRuS3A1%2BrdJecKOJsdOXWrLz3RssHiBIMJXK7zCunpvCBjqkAT8BFgeIVunIpy%2BWVt4DIrR0F1mc8XoVBbSO1jJwwerrKM8vQDefdNN9wKxUUyPvv5HT7PSGd4Q8ZaB%2FlAlEnixh1HcOn3OkAXs0ji7tZ374Ky5jA5Ht8Z6XWxV3FZZUOrC9fRyVaYqHigmEO3RgPRlCh%2B94mUNmeBmnaypGgLNHPoXABrqMDLHAGJmInqb4ORkzMFYwIHIOOQ5ay89%2FnYZu6ndv&X-Amz-Signature=093475a51758851a2d4dd0b9bacb4f7cb8601a3f065abd1c3917d6b0705e9df6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664TXUQC5%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T132451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1kE0WZuVKTnTXHfhm0dzf2Yiiw2mfyPaX0ikNrtQWlwIhAKSAr7ykBXADzrR9D9bRAn7PXkpka48%2FCuiv1IBJnoTpKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXwtUp1Fr81zijlF8q3ANT1SBuMNJiv%2BsRoxv%2FOPgutPIL1LeslIT%2Bw%2BBD2b%2FEdHl0ZSaok20v%2BB%2FrLzdXj9WLNdg86NfMAcMqN5dMiFn198HVA45CGjYESH6IwzmkebZAjgpHVLQd62pAxeKOI%2FVGDr4taj8StsHcWEGUUb6F6fbxMqiYwn728o5GhgB2BWFv6pw8FLjETov8vpCTVZ%2FmVSsSO4fOUeF7DUwr2%2B86SilxF41dpmhcakkVSQ6Y18QKJVio0PvvnmwXPIkqL%2BgO1XTQN9YbvRJ2yOHCU%2F23ENAiy15MLtCieIxJmInyXIbHil02PY6kuHAzIYEDmgR0H4RIGR7TraLUGkp%2B43bCrKGigcS51yFGsOEGTjXhMKqHZKQaLMyodjSE%2FILWijHKwnBnltEBmDZ%2Bzz5PgXSsI3hzblLfxylC3Go%2B%2BcTsI6aOt9WsondsmkgR2CvcHusBH4azKO%2F4fRMnePTOSM%2FcGfOXDShKoE93Rem0ZT6CDsBChQDlh1k8VHchYw4yL7woCASmexSKzI61zKz9zbNX8wBml4Fz%2FBk%2BFtlcDlwNgFq9EQ96Gyir5bA0P9lxfRuRDG5%2F4pfeVS6hQTwDFclfRRuS3A1%2BrdJecKOJsdOXWrLz3RssHiBIMJXK7zCunpvCBjqkAT8BFgeIVunIpy%2BWVt4DIrR0F1mc8XoVBbSO1jJwwerrKM8vQDefdNN9wKxUUyPvv5HT7PSGd4Q8ZaB%2FlAlEnixh1HcOn3OkAXs0ji7tZ374Ky5jA5Ht8Z6XWxV3FZZUOrC9fRyVaYqHigmEO3RgPRlCh%2B94mUNmeBmnaypGgLNHPoXABrqMDLHAGJmInqb4ORkzMFYwIHIOOQ5ay89%2FnYZu6ndv&X-Amz-Signature=ba2c53518909d68572a0b6dd137b344f83580c816c3f07f3abd49f39d72ecef7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

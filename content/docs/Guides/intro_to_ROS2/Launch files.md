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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJXKPW53%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnd6uU0lM77QTdiMAa7gVPk71Wgp8PXfjjRHkM5gAysAiA0DZh%2FLxhEveSvOqfkoY46hk3xdEhrqnldCL4%2Bfyoo0ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMreoKeW6XtyuC0S63KtwDctC9zMQlLVXUVsAFdRbO6QmCkJJfRGvwfcanyz%2F558%2BGtTkn6DuOuQkfxe%2B9l1ocN1F9MGTaqcjiHVp03vXIMQ9fT2gAKMSZGHvb%2FB9gMJWfOLDsMICIMmy0cMUhjRMa4eIhqxiej1%2FsTUdM8zZBh0zzuGRs8PIuCQQtcT3bNGxf%2FjWpstroqJ8x9AkEKh7FgQDCfm%2BH8ab3C7vRcQMLTti7L1jOPZ0YW2Q15IZqmJh3v2r0LPJ6Dw%2FB8MkDaUDO7UgjVolbcK6ZlJ3LuZzrBuEpoqv%2FfelBlxYoT1w%2FSMz3matgz%2FoWFvn9YueLRIECTKOBGoYdYurz%2B00s3nFF4uiSXeGak%2B9eZ%2BICxxErb4PX7bThP7s2ga8lE%2F%2Fz0UKcYcqxuG0JKev%2FxVq%2FI33dnHBAx%2B0oHV5jmwMycTZmyUS8m4RuHUPAAJHcB6AoyYOnkfuaoQxsI8qLr6Ch5BDR2uPXPwFwOSte8jh%2F7%2F6xYKQ37%2FuaNmDttWZHL8PemCRJSWg2oNTjVEBFoZSlFmWKLrikFrgqFMaAIttM9%2F8U4fCVeXahaHEUKuX4z3Qkv9%2BylsojzWhQ%2BX2SbgrE2pWdnN6BgMY%2FCfGwU0R35MHBpGQDW%2BY6Ut%2BFZZWOMjAwiOSLvwY6pgHz63xLZ2BOnINONvdvgCNlxY5qyTuPzB7xmHs9VDTY%2BVSXOaDlU0LnrrkoVbmXrJwXt8YWXJX9BC8jKdbrLnPVIr3YzozCDHNbmPr5XEByaaa4zmiBIRT07BEcPBUOIZc0HQ1086bKt0wru34avFbflv%2FxBInyRLjn24jrVV3xAT56QNSKbSll8zsseonOFPbmNlFYc34gjrAh6QpIf9aZ26kwMtbQ&X-Amz-Signature=8dfa313efe20244ef249935fe0d7023fb5cbf8b96ac2cbb4eb6938ea93efa94c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJXKPW53%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnd6uU0lM77QTdiMAa7gVPk71Wgp8PXfjjRHkM5gAysAiA0DZh%2FLxhEveSvOqfkoY46hk3xdEhrqnldCL4%2Bfyoo0ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMreoKeW6XtyuC0S63KtwDctC9zMQlLVXUVsAFdRbO6QmCkJJfRGvwfcanyz%2F558%2BGtTkn6DuOuQkfxe%2B9l1ocN1F9MGTaqcjiHVp03vXIMQ9fT2gAKMSZGHvb%2FB9gMJWfOLDsMICIMmy0cMUhjRMa4eIhqxiej1%2FsTUdM8zZBh0zzuGRs8PIuCQQtcT3bNGxf%2FjWpstroqJ8x9AkEKh7FgQDCfm%2BH8ab3C7vRcQMLTti7L1jOPZ0YW2Q15IZqmJh3v2r0LPJ6Dw%2FB8MkDaUDO7UgjVolbcK6ZlJ3LuZzrBuEpoqv%2FfelBlxYoT1w%2FSMz3matgz%2FoWFvn9YueLRIECTKOBGoYdYurz%2B00s3nFF4uiSXeGak%2B9eZ%2BICxxErb4PX7bThP7s2ga8lE%2F%2Fz0UKcYcqxuG0JKev%2FxVq%2FI33dnHBAx%2B0oHV5jmwMycTZmyUS8m4RuHUPAAJHcB6AoyYOnkfuaoQxsI8qLr6Ch5BDR2uPXPwFwOSte8jh%2F7%2F6xYKQ37%2FuaNmDttWZHL8PemCRJSWg2oNTjVEBFoZSlFmWKLrikFrgqFMaAIttM9%2F8U4fCVeXahaHEUKuX4z3Qkv9%2BylsojzWhQ%2BX2SbgrE2pWdnN6BgMY%2FCfGwU0R35MHBpGQDW%2BY6Ut%2BFZZWOMjAwiOSLvwY6pgHz63xLZ2BOnINONvdvgCNlxY5qyTuPzB7xmHs9VDTY%2BVSXOaDlU0LnrrkoVbmXrJwXt8YWXJX9BC8jKdbrLnPVIr3YzozCDHNbmPr5XEByaaa4zmiBIRT07BEcPBUOIZc0HQ1086bKt0wru34avFbflv%2FxBInyRLjn24jrVV3xAT56QNSKbSll8zsseonOFPbmNlFYc34gjrAh6QpIf9aZ26kwMtbQ&X-Amz-Signature=f835a4c08a15c088ba8a1401034c54bfd921ac3126ea8b005b81526090e58700&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJXKPW53%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnd6uU0lM77QTdiMAa7gVPk71Wgp8PXfjjRHkM5gAysAiA0DZh%2FLxhEveSvOqfkoY46hk3xdEhrqnldCL4%2Bfyoo0ir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMreoKeW6XtyuC0S63KtwDctC9zMQlLVXUVsAFdRbO6QmCkJJfRGvwfcanyz%2F558%2BGtTkn6DuOuQkfxe%2B9l1ocN1F9MGTaqcjiHVp03vXIMQ9fT2gAKMSZGHvb%2FB9gMJWfOLDsMICIMmy0cMUhjRMa4eIhqxiej1%2FsTUdM8zZBh0zzuGRs8PIuCQQtcT3bNGxf%2FjWpstroqJ8x9AkEKh7FgQDCfm%2BH8ab3C7vRcQMLTti7L1jOPZ0YW2Q15IZqmJh3v2r0LPJ6Dw%2FB8MkDaUDO7UgjVolbcK6ZlJ3LuZzrBuEpoqv%2FfelBlxYoT1w%2FSMz3matgz%2FoWFvn9YueLRIECTKOBGoYdYurz%2B00s3nFF4uiSXeGak%2B9eZ%2BICxxErb4PX7bThP7s2ga8lE%2F%2Fz0UKcYcqxuG0JKev%2FxVq%2FI33dnHBAx%2B0oHV5jmwMycTZmyUS8m4RuHUPAAJHcB6AoyYOnkfuaoQxsI8qLr6Ch5BDR2uPXPwFwOSte8jh%2F7%2F6xYKQ37%2FuaNmDttWZHL8PemCRJSWg2oNTjVEBFoZSlFmWKLrikFrgqFMaAIttM9%2F8U4fCVeXahaHEUKuX4z3Qkv9%2BylsojzWhQ%2BX2SbgrE2pWdnN6BgMY%2FCfGwU0R35MHBpGQDW%2BY6Ut%2BFZZWOMjAwiOSLvwY6pgHz63xLZ2BOnINONvdvgCNlxY5qyTuPzB7xmHs9VDTY%2BVSXOaDlU0LnrrkoVbmXrJwXt8YWXJX9BC8jKdbrLnPVIr3YzozCDHNbmPr5XEByaaa4zmiBIRT07BEcPBUOIZc0HQ1086bKt0wru34avFbflv%2FxBInyRLjn24jrVV3xAT56QNSKbSll8zsseonOFPbmNlFYc34gjrAh6QpIf9aZ26kwMtbQ&X-Amz-Signature=3003e2c091f00ce6fb11dd9476a04b718ecab96416daf1e1fafcb678809dd7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

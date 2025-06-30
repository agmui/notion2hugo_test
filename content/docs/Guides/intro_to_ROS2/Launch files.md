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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLZFIKM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKZq23m66Bkh6hf1s9FyecNxeIN0Ql2WSiXb2Udts62AiEA9Sjh%2FGvxMlE8QQsgp6dXE0cidcnNDd7QJCV2zJKlQL4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbZxLTVKcW5XZKX5ircA5EhHkjSy6txsxg01ZbwkFam1WZYmcGO4iYdAmxgBcibHJT9FOsdl62oQHv6QmNadkpHJQ2SoQffDc%2Br6McytFBOnjR1%2BLWZGloyTKFQdfwvT2fuTOH3phI9pk5X%2Fb2CyB%2FU7VFvMxJPbq8b7qVG7WtIpFqHUV101QowaQL3WDFTmdMMAVGCOYuz5mvpn81Yr9jr33CKgNvFkz5i1k38fOIPIe1xvLIJ5ARwiOY8aaed7tzyjCpS2EY9XKVbodLfYGeLWsLmj4NKxUqPi5tHqMgkPh5f6wipA%2BZZIgOgntMTRwI%2BsOk5wpRkpGNZDZd4iDpgaw81oJS3L2oCczHnQfU1mvGbweybU78ZUXQdpPxjuHCeu0WTd3k%2BfIebZjET4uSpd3qj3WYX5WKmVUfcsXFvunq%2Fi7ICbMTwlIX2QtjCshHK1AgjWihFVBgKdaZjeaRmG1TuDljgRcd0d69%2B5WZMmlBkFgUNacNdt7PmQ25Jz89u6DdqZ%2B9l6O4baWAHQlh%2F%2Ffj9%2F7NmNNZdYPmLoh9UXyuDty0D5PIFrjp1eTPY%2Fp87k3DZmYcbDvVuhfoz1O23lH4rc9IMknnivKlCRQIyIJ0WDCIElxzDWyMM2XsUOG6usb3Lb9t%2F1isGMLa7iMMGOqUB7UjVlQozww6NeGRQM6ik47AerEtz1qTCZawLx7b31IhJj43N6tPcRVLR6Z3linIyBE4QZz3QhNtqPvCx5HDSoc2dguXp%2FQ2KapPLA7KKYPdD4OBwGplpSCUDjp6%2B86davcqGr2WBcGcGPchTypOXPlMeiei2nEPDGdBjmyXY%2BnhNXNFU8Zh4soHjhtZ4po5muagiGW7Rq3lcQQNtdHwPlUavyQkF&X-Amz-Signature=28b538c819b53651aaa7bee4ea9242c4733fe3bb72ebc5af98afbf52f84e31a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLZFIKM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKZq23m66Bkh6hf1s9FyecNxeIN0Ql2WSiXb2Udts62AiEA9Sjh%2FGvxMlE8QQsgp6dXE0cidcnNDd7QJCV2zJKlQL4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbZxLTVKcW5XZKX5ircA5EhHkjSy6txsxg01ZbwkFam1WZYmcGO4iYdAmxgBcibHJT9FOsdl62oQHv6QmNadkpHJQ2SoQffDc%2Br6McytFBOnjR1%2BLWZGloyTKFQdfwvT2fuTOH3phI9pk5X%2Fb2CyB%2FU7VFvMxJPbq8b7qVG7WtIpFqHUV101QowaQL3WDFTmdMMAVGCOYuz5mvpn81Yr9jr33CKgNvFkz5i1k38fOIPIe1xvLIJ5ARwiOY8aaed7tzyjCpS2EY9XKVbodLfYGeLWsLmj4NKxUqPi5tHqMgkPh5f6wipA%2BZZIgOgntMTRwI%2BsOk5wpRkpGNZDZd4iDpgaw81oJS3L2oCczHnQfU1mvGbweybU78ZUXQdpPxjuHCeu0WTd3k%2BfIebZjET4uSpd3qj3WYX5WKmVUfcsXFvunq%2Fi7ICbMTwlIX2QtjCshHK1AgjWihFVBgKdaZjeaRmG1TuDljgRcd0d69%2B5WZMmlBkFgUNacNdt7PmQ25Jz89u6DdqZ%2B9l6O4baWAHQlh%2F%2Ffj9%2F7NmNNZdYPmLoh9UXyuDty0D5PIFrjp1eTPY%2Fp87k3DZmYcbDvVuhfoz1O23lH4rc9IMknnivKlCRQIyIJ0WDCIElxzDWyMM2XsUOG6usb3Lb9t%2F1isGMLa7iMMGOqUB7UjVlQozww6NeGRQM6ik47AerEtz1qTCZawLx7b31IhJj43N6tPcRVLR6Z3linIyBE4QZz3QhNtqPvCx5HDSoc2dguXp%2FQ2KapPLA7KKYPdD4OBwGplpSCUDjp6%2B86davcqGr2WBcGcGPchTypOXPlMeiei2nEPDGdBjmyXY%2BnhNXNFU8Zh4soHjhtZ4po5muagiGW7Rq3lcQQNtdHwPlUavyQkF&X-Amz-Signature=e2c11bc8969a18ed3eee96619665b85a0496952d953a690a169c71e38f964be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TLZFIKM%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKZq23m66Bkh6hf1s9FyecNxeIN0Ql2WSiXb2Udts62AiEA9Sjh%2FGvxMlE8QQsgp6dXE0cidcnNDd7QJCV2zJKlQL4qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNbZxLTVKcW5XZKX5ircA5EhHkjSy6txsxg01ZbwkFam1WZYmcGO4iYdAmxgBcibHJT9FOsdl62oQHv6QmNadkpHJQ2SoQffDc%2Br6McytFBOnjR1%2BLWZGloyTKFQdfwvT2fuTOH3phI9pk5X%2Fb2CyB%2FU7VFvMxJPbq8b7qVG7WtIpFqHUV101QowaQL3WDFTmdMMAVGCOYuz5mvpn81Yr9jr33CKgNvFkz5i1k38fOIPIe1xvLIJ5ARwiOY8aaed7tzyjCpS2EY9XKVbodLfYGeLWsLmj4NKxUqPi5tHqMgkPh5f6wipA%2BZZIgOgntMTRwI%2BsOk5wpRkpGNZDZd4iDpgaw81oJS3L2oCczHnQfU1mvGbweybU78ZUXQdpPxjuHCeu0WTd3k%2BfIebZjET4uSpd3qj3WYX5WKmVUfcsXFvunq%2Fi7ICbMTwlIX2QtjCshHK1AgjWihFVBgKdaZjeaRmG1TuDljgRcd0d69%2B5WZMmlBkFgUNacNdt7PmQ25Jz89u6DdqZ%2B9l6O4baWAHQlh%2F%2Ffj9%2F7NmNNZdYPmLoh9UXyuDty0D5PIFrjp1eTPY%2Fp87k3DZmYcbDvVuhfoz1O23lH4rc9IMknnivKlCRQIyIJ0WDCIElxzDWyMM2XsUOG6usb3Lb9t%2F1isGMLa7iMMGOqUB7UjVlQozww6NeGRQM6ik47AerEtz1qTCZawLx7b31IhJj43N6tPcRVLR6Z3linIyBE4QZz3QhNtqPvCx5HDSoc2dguXp%2FQ2KapPLA7KKYPdD4OBwGplpSCUDjp6%2B86davcqGr2WBcGcGPchTypOXPlMeiei2nEPDGdBjmyXY%2BnhNXNFU8Zh4soHjhtZ4po5muagiGW7Rq3lcQQNtdHwPlUavyQkF&X-Amz-Signature=3943758f2d5e983bec7888549e7416762358264b731cf830f2150d401fce136f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

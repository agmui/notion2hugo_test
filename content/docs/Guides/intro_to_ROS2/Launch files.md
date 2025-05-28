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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7XPAUC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4LI0X2b9%2B2X%2BK98Kn2pZRtkk4%2BnLrLFUAIfsUgmirkAIgeS2xHLqCplF5PfUIt4rIRc5TxRscfZiibhUCcSckYMcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMP%2F0jZ7JmnZSYMfOCrcA1x2f%2B87Pn3Lq1cICVUllpvStpGFvioCLMbAOKdB5yQGYCW50vGAtxxV8cjBd5pQP%2F8u%2BwTK3xpmVZhtQXX0Rj4Cf6PsfBG%2BpuBXX0APlDV1vZ9gjCI%2BFiTa%2F60%2FN50kWNil8DopgcDmGbEbl0jiikdrpf8bT6eW94zf2J1D1YRRTU7Nci1QKEuxTBn1T%2BBTdxkrxe2KpwT7sFGJVXi9Kk0cbZ6n7y8BISfwym99J515bSq2YhQqKie3GBesHNwlol0yt45WbruvXll8BJHQTDv7pZmajM4jdljjNbhl0Qr1PE%2FG5S9xEt3wFN%2BdEycxhR29uq8z23q8JLIy93i1tHrbzULPZlVdvkMtxPMkzYP2k%2FHmsClFsESYM9iOHOkapH8WRaBEe13cY6le6UkC5eE%2FI1ykySaXgsYXWsFSkxjoy6ZJN3imJbz0JDBIYmyCQealjNFzCsXt1WsRqxzZGjGl3gGUFyzlyKeJ8TOY0P27oh7Gjgz2Zkhm5EthK9%2FjBr033L6dS1jWQbhnvHy3pLql6bBRBTPu0CKRvT%2BaLfJwEFD%2B3z8IxPTEc3R1kSZ5ENJv4gS9ggLdetfMgCoy41LWb8hkQpyrGAuCq3edgMcB9lL4ko56dKDowAYgMJv43MEGOqUBtacQt2GakcgCVRYssnn6SVn9d7c8GdN8SeiBxwEroV2cY3z5xyexcCDPS4bjkIh%2F611eU%2FvsZVl%2B6So7%2BPT3JLm7sVhT3SDasvPluIOHEgdEDlKAImxSLMZ5sIxLo4XD8wDhitTkD9yzyYOP5Vgu8l5mwkJ%2FxNzyvnOjR7rb2RlRADZLIvbur9Ajth%2FxaKDL6T9w7%2F3kUjdxWsl1LPZ57CBJ4ykF&X-Amz-Signature=2bd20a5ab4332840ca413f0dacb8a6385cb04ff066b1c4510be334ec09627afd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7XPAUC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4LI0X2b9%2B2X%2BK98Kn2pZRtkk4%2BnLrLFUAIfsUgmirkAIgeS2xHLqCplF5PfUIt4rIRc5TxRscfZiibhUCcSckYMcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMP%2F0jZ7JmnZSYMfOCrcA1x2f%2B87Pn3Lq1cICVUllpvStpGFvioCLMbAOKdB5yQGYCW50vGAtxxV8cjBd5pQP%2F8u%2BwTK3xpmVZhtQXX0Rj4Cf6PsfBG%2BpuBXX0APlDV1vZ9gjCI%2BFiTa%2F60%2FN50kWNil8DopgcDmGbEbl0jiikdrpf8bT6eW94zf2J1D1YRRTU7Nci1QKEuxTBn1T%2BBTdxkrxe2KpwT7sFGJVXi9Kk0cbZ6n7y8BISfwym99J515bSq2YhQqKie3GBesHNwlol0yt45WbruvXll8BJHQTDv7pZmajM4jdljjNbhl0Qr1PE%2FG5S9xEt3wFN%2BdEycxhR29uq8z23q8JLIy93i1tHrbzULPZlVdvkMtxPMkzYP2k%2FHmsClFsESYM9iOHOkapH8WRaBEe13cY6le6UkC5eE%2FI1ykySaXgsYXWsFSkxjoy6ZJN3imJbz0JDBIYmyCQealjNFzCsXt1WsRqxzZGjGl3gGUFyzlyKeJ8TOY0P27oh7Gjgz2Zkhm5EthK9%2FjBr033L6dS1jWQbhnvHy3pLql6bBRBTPu0CKRvT%2BaLfJwEFD%2B3z8IxPTEc3R1kSZ5ENJv4gS9ggLdetfMgCoy41LWb8hkQpyrGAuCq3edgMcB9lL4ko56dKDowAYgMJv43MEGOqUBtacQt2GakcgCVRYssnn6SVn9d7c8GdN8SeiBxwEroV2cY3z5xyexcCDPS4bjkIh%2F611eU%2FvsZVl%2B6So7%2BPT3JLm7sVhT3SDasvPluIOHEgdEDlKAImxSLMZ5sIxLo4XD8wDhitTkD9yzyYOP5Vgu8l5mwkJ%2FxNzyvnOjR7rb2RlRADZLIvbur9Ajth%2FxaKDL6T9w7%2F3kUjdxWsl1LPZ57CBJ4ykF&X-Amz-Signature=5bf8942e45be12adad99d9892fa59b2604bdb1cfa0bdfec53cbbae3b21159966&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7XPAUC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T170828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4LI0X2b9%2B2X%2BK98Kn2pZRtkk4%2BnLrLFUAIfsUgmirkAIgeS2xHLqCplF5PfUIt4rIRc5TxRscfZiibhUCcSckYMcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMP%2F0jZ7JmnZSYMfOCrcA1x2f%2B87Pn3Lq1cICVUllpvStpGFvioCLMbAOKdB5yQGYCW50vGAtxxV8cjBd5pQP%2F8u%2BwTK3xpmVZhtQXX0Rj4Cf6PsfBG%2BpuBXX0APlDV1vZ9gjCI%2BFiTa%2F60%2FN50kWNil8DopgcDmGbEbl0jiikdrpf8bT6eW94zf2J1D1YRRTU7Nci1QKEuxTBn1T%2BBTdxkrxe2KpwT7sFGJVXi9Kk0cbZ6n7y8BISfwym99J515bSq2YhQqKie3GBesHNwlol0yt45WbruvXll8BJHQTDv7pZmajM4jdljjNbhl0Qr1PE%2FG5S9xEt3wFN%2BdEycxhR29uq8z23q8JLIy93i1tHrbzULPZlVdvkMtxPMkzYP2k%2FHmsClFsESYM9iOHOkapH8WRaBEe13cY6le6UkC5eE%2FI1ykySaXgsYXWsFSkxjoy6ZJN3imJbz0JDBIYmyCQealjNFzCsXt1WsRqxzZGjGl3gGUFyzlyKeJ8TOY0P27oh7Gjgz2Zkhm5EthK9%2FjBr033L6dS1jWQbhnvHy3pLql6bBRBTPu0CKRvT%2BaLfJwEFD%2B3z8IxPTEc3R1kSZ5ENJv4gS9ggLdetfMgCoy41LWb8hkQpyrGAuCq3edgMcB9lL4ko56dKDowAYgMJv43MEGOqUBtacQt2GakcgCVRYssnn6SVn9d7c8GdN8SeiBxwEroV2cY3z5xyexcCDPS4bjkIh%2F611eU%2FvsZVl%2B6So7%2BPT3JLm7sVhT3SDasvPluIOHEgdEDlKAImxSLMZ5sIxLo4XD8wDhitTkD9yzyYOP5Vgu8l5mwkJ%2FxNzyvnOjR7rb2RlRADZLIvbur9Ajth%2FxaKDL6T9w7%2F3kUjdxWsl1LPZ57CBJ4ykF&X-Amz-Signature=ec229056cead5a699a1ac78f0ee276b0f04dfd234f80c45bd600ff868c971a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

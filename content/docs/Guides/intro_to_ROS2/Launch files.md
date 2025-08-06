---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSMBDH7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQD8WTx3a5But18LSYqgc02clJCJ1VFwDbUO78uHueXfeQIgeQw%2FDxBMtMQSpOeoSNUB1R9uuBtMpMegqeuEiVxe0aYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIl9NrFg2%2FxfWyrOzCrcA9KN9kiKJFP2oZyj23kOz5Y3mIt%2FSQfJwfin8wDi9yW1NanMBGmU%2BPrzNkUzddiuU2YWjZnKGXi4lC9zmdmvP7ONV2Snm1H3aItq0psWyg%2BToIUQuvSoRnbub2ZwBpFBFpiK%2FZqRw7Or6inkahbzDYzxCVWKjydflzO4%2Fh%2BTOKH%2B%2Bw3T496JcQogW1t%2B3X5rjSKOjmFL1ivUOomu6bHgMMbyvNUYCM%2BL6n%2BqK%2Fxl7lraN4U3Km69a8w88rRgYrzn9MvDojrneLf6f8VutX3ci4%2BCDfq16TWtizBDfeY32N%2B7F36yxi4ZDJWM7Nk2oDYRTVT88sKRwAvEnXagG9a0LAes5T2VU1iKpKj3D0HeXzCiiemmN%2BTyOoNxR9%2BzUkbDFblLXU6pxTpPjQ4YqXdU6TMQoeYGzdlS0p6z4%2Bf1o19DHgedq13bOwbMSOAfwZJ5X%2FzDx%2Fdp5f1uiLSrrkT7sB05iFg2kmgY1vJSCxbOfVIkyqp4rdWAgSPKW%2BxsorUpuQV1bsaZjzffjZ2fPwqSS5SgILpDFz7IutPR8EF2z9gGoiP%2Bqw061YT1h1tNMvK4MAkjvXdQg5nITcvS1vVU6iQrgAjoIdLKVLOXop576%2BBFypUIr%2BkF605S7TGXMK2uzcQGOqUBjsJEaVbxKuIO3G2Z5YzLvPy5wx7AEm%2BI1ih0CD7C8u1m%2FRJGEXBsURaT53vcK%2BJtWc2jL1Ud7CIdjh7QBcqqyjbhfBRURY8n3ttnLh2ZXguwAUhHVPgNGd%2FL2ed5QPrQoebQ6XKdfTtSI8S0DRYCcbjGbbGWbZDnoUkYLXrFBtqkKA%2BpSfUsYAV%2FSNFWkhdp4CbepsjyeRjt9RZMyLSRYoVLBRLi&X-Amz-Signature=a4e0e2e3548415c8ebbcef5400f28d85a02bcd1889b48691f828aa76c2a77bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSMBDH7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQD8WTx3a5But18LSYqgc02clJCJ1VFwDbUO78uHueXfeQIgeQw%2FDxBMtMQSpOeoSNUB1R9uuBtMpMegqeuEiVxe0aYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIl9NrFg2%2FxfWyrOzCrcA9KN9kiKJFP2oZyj23kOz5Y3mIt%2FSQfJwfin8wDi9yW1NanMBGmU%2BPrzNkUzddiuU2YWjZnKGXi4lC9zmdmvP7ONV2Snm1H3aItq0psWyg%2BToIUQuvSoRnbub2ZwBpFBFpiK%2FZqRw7Or6inkahbzDYzxCVWKjydflzO4%2Fh%2BTOKH%2B%2Bw3T496JcQogW1t%2B3X5rjSKOjmFL1ivUOomu6bHgMMbyvNUYCM%2BL6n%2BqK%2Fxl7lraN4U3Km69a8w88rRgYrzn9MvDojrneLf6f8VutX3ci4%2BCDfq16TWtizBDfeY32N%2B7F36yxi4ZDJWM7Nk2oDYRTVT88sKRwAvEnXagG9a0LAes5T2VU1iKpKj3D0HeXzCiiemmN%2BTyOoNxR9%2BzUkbDFblLXU6pxTpPjQ4YqXdU6TMQoeYGzdlS0p6z4%2Bf1o19DHgedq13bOwbMSOAfwZJ5X%2FzDx%2Fdp5f1uiLSrrkT7sB05iFg2kmgY1vJSCxbOfVIkyqp4rdWAgSPKW%2BxsorUpuQV1bsaZjzffjZ2fPwqSS5SgILpDFz7IutPR8EF2z9gGoiP%2Bqw061YT1h1tNMvK4MAkjvXdQg5nITcvS1vVU6iQrgAjoIdLKVLOXop576%2BBFypUIr%2BkF605S7TGXMK2uzcQGOqUBjsJEaVbxKuIO3G2Z5YzLvPy5wx7AEm%2BI1ih0CD7C8u1m%2FRJGEXBsURaT53vcK%2BJtWc2jL1Ud7CIdjh7QBcqqyjbhfBRURY8n3ttnLh2ZXguwAUhHVPgNGd%2FL2ed5QPrQoebQ6XKdfTtSI8S0DRYCcbjGbbGWbZDnoUkYLXrFBtqkKA%2BpSfUsYAV%2FSNFWkhdp4CbepsjyeRjt9RZMyLSRYoVLBRLi&X-Amz-Signature=e463606563b811c97942bf5fd5b2268e75780887cb55fd03f9352a646371a511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNSMBDH7%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQD8WTx3a5But18LSYqgc02clJCJ1VFwDbUO78uHueXfeQIgeQw%2FDxBMtMQSpOeoSNUB1R9uuBtMpMegqeuEiVxe0aYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIl9NrFg2%2FxfWyrOzCrcA9KN9kiKJFP2oZyj23kOz5Y3mIt%2FSQfJwfin8wDi9yW1NanMBGmU%2BPrzNkUzddiuU2YWjZnKGXi4lC9zmdmvP7ONV2Snm1H3aItq0psWyg%2BToIUQuvSoRnbub2ZwBpFBFpiK%2FZqRw7Or6inkahbzDYzxCVWKjydflzO4%2Fh%2BTOKH%2B%2Bw3T496JcQogW1t%2B3X5rjSKOjmFL1ivUOomu6bHgMMbyvNUYCM%2BL6n%2BqK%2Fxl7lraN4U3Km69a8w88rRgYrzn9MvDojrneLf6f8VutX3ci4%2BCDfq16TWtizBDfeY32N%2B7F36yxi4ZDJWM7Nk2oDYRTVT88sKRwAvEnXagG9a0LAes5T2VU1iKpKj3D0HeXzCiiemmN%2BTyOoNxR9%2BzUkbDFblLXU6pxTpPjQ4YqXdU6TMQoeYGzdlS0p6z4%2Bf1o19DHgedq13bOwbMSOAfwZJ5X%2FzDx%2Fdp5f1uiLSrrkT7sB05iFg2kmgY1vJSCxbOfVIkyqp4rdWAgSPKW%2BxsorUpuQV1bsaZjzffjZ2fPwqSS5SgILpDFz7IutPR8EF2z9gGoiP%2Bqw061YT1h1tNMvK4MAkjvXdQg5nITcvS1vVU6iQrgAjoIdLKVLOXop576%2BBFypUIr%2BkF605S7TGXMK2uzcQGOqUBjsJEaVbxKuIO3G2Z5YzLvPy5wx7AEm%2BI1ih0CD7C8u1m%2FRJGEXBsURaT53vcK%2BJtWc2jL1Ud7CIdjh7QBcqqyjbhfBRURY8n3ttnLh2ZXguwAUhHVPgNGd%2FL2ed5QPrQoebQ6XKdfTtSI8S0DRYCcbjGbbGWbZDnoUkYLXrFBtqkKA%2BpSfUsYAV%2FSNFWkhdp4CbepsjyeRjt9RZMyLSRYoVLBRLi&X-Amz-Signature=4a76ee7c70aed374ebe8e1830770b176f5df29f35fa8f9c8bde747fa0ccf6168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

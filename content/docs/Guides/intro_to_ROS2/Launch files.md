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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYCDS3LS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC6At7sGHqzy7BFMNjAD%2BpMEAE3A8UkZbPif%2F1noaLlnQIhALuDaR3MXaCigYqk8MhW1ecrWuIBy8CMJkU2GE%2FRHZx3KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvXiDbdJ%2BbONM8E%2Bkq3ANcTsj0JcJTjWz0oS730l67RnywUlLroAasjjeb%2BT9rhdeR8DhQp066knD%2B9WA4u7P2VoUGqFQqSnKCxc02LC3jGrMKYdJS9iRUroiwGOhiFQ9CByeLG5pVgnVm8nd8KM%2FMWzieSYQbB2zNcAnyMYAvogJmSUIQg0Cv5kqGF%2BSw0sySahPZzNkDAWPMkb%2FyC5XcHQHf9ShRutSwkiheEViOm%2Fe4c5oYVxno%2BgNCqK0xaUSVH6NFK37ND3PPUs%2BnI35TRp8H%2BGRDKF0EtkPNPFf4aG15qReV8V5K6DNfh%2FfKElu3K%2BS%2F4uqBUuWlv0R8QUUS8zAKedgrXPIxAMzuxrlFR7T4CMe6IX6w79XtqRTfnUXO4aA2B9tOft2Ogvu7wceGWR5vOfTcFB256Wm%2BX175ndzSn%2F4VsDDB93veMFt4IXJIAW2fYyqsKnxYyZH6w%2Fs5GxtS%2BAcLaPr1UZdq0qevTgRkW5UFhHRV3Z%2Bdc0z0bf82VVYL5uPfTqpf6TX%2B6WaC2EysF%2FePQ1kOiQLCZoWkHxinhxVhEQ8m9PiTNpPvSwS1jXs3vtuU8JdeOqAnjsebBCUZtimfeXJJPrisQkYCzKTw5dGuh8auU3RysIyoft7lKko4SchlAxc23TDLoZnABjqkAVtypbAFVLCCBOGRBeRHT36WERqYuZGH3IQ0sS4Pu3eLyhKLlDevrqB%2BL0IRfAGHxZnVIiSyzPJANThOrJJJagRkKG7jm8lIqUoLmTHGZLefPFCGutpyPDSF%2BRaB1x83BUZiWp%2BYlKRhTCfvs3hdzvgjP5sOf0nR3nMZoEvsZPJbxMIUpk5nySsHao%2BZC1P1V7mj6UxFs4YQ25uBrxDDS0HF4z5z&X-Amz-Signature=a87b76f682aa6b6d3fa6191891a1830c7302009ae0891707b3afa02ce4fcd139&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYCDS3LS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC6At7sGHqzy7BFMNjAD%2BpMEAE3A8UkZbPif%2F1noaLlnQIhALuDaR3MXaCigYqk8MhW1ecrWuIBy8CMJkU2GE%2FRHZx3KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvXiDbdJ%2BbONM8E%2Bkq3ANcTsj0JcJTjWz0oS730l67RnywUlLroAasjjeb%2BT9rhdeR8DhQp066knD%2B9WA4u7P2VoUGqFQqSnKCxc02LC3jGrMKYdJS9iRUroiwGOhiFQ9CByeLG5pVgnVm8nd8KM%2FMWzieSYQbB2zNcAnyMYAvogJmSUIQg0Cv5kqGF%2BSw0sySahPZzNkDAWPMkb%2FyC5XcHQHf9ShRutSwkiheEViOm%2Fe4c5oYVxno%2BgNCqK0xaUSVH6NFK37ND3PPUs%2BnI35TRp8H%2BGRDKF0EtkPNPFf4aG15qReV8V5K6DNfh%2FfKElu3K%2BS%2F4uqBUuWlv0R8QUUS8zAKedgrXPIxAMzuxrlFR7T4CMe6IX6w79XtqRTfnUXO4aA2B9tOft2Ogvu7wceGWR5vOfTcFB256Wm%2BX175ndzSn%2F4VsDDB93veMFt4IXJIAW2fYyqsKnxYyZH6w%2Fs5GxtS%2BAcLaPr1UZdq0qevTgRkW5UFhHRV3Z%2Bdc0z0bf82VVYL5uPfTqpf6TX%2B6WaC2EysF%2FePQ1kOiQLCZoWkHxinhxVhEQ8m9PiTNpPvSwS1jXs3vtuU8JdeOqAnjsebBCUZtimfeXJJPrisQkYCzKTw5dGuh8auU3RysIyoft7lKko4SchlAxc23TDLoZnABjqkAVtypbAFVLCCBOGRBeRHT36WERqYuZGH3IQ0sS4Pu3eLyhKLlDevrqB%2BL0IRfAGHxZnVIiSyzPJANThOrJJJagRkKG7jm8lIqUoLmTHGZLefPFCGutpyPDSF%2BRaB1x83BUZiWp%2BYlKRhTCfvs3hdzvgjP5sOf0nR3nMZoEvsZPJbxMIUpk5nySsHao%2BZC1P1V7mj6UxFs4YQ25uBrxDDS0HF4z5z&X-Amz-Signature=27232fd16fb2de5083e312b59b547bffecf3205ae51aaa8577236e8a66382d08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYCDS3LS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQC6At7sGHqzy7BFMNjAD%2BpMEAE3A8UkZbPif%2F1noaLlnQIhALuDaR3MXaCigYqk8MhW1ecrWuIBy8CMJkU2GE%2FRHZx3KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyvXiDbdJ%2BbONM8E%2Bkq3ANcTsj0JcJTjWz0oS730l67RnywUlLroAasjjeb%2BT9rhdeR8DhQp066knD%2B9WA4u7P2VoUGqFQqSnKCxc02LC3jGrMKYdJS9iRUroiwGOhiFQ9CByeLG5pVgnVm8nd8KM%2FMWzieSYQbB2zNcAnyMYAvogJmSUIQg0Cv5kqGF%2BSw0sySahPZzNkDAWPMkb%2FyC5XcHQHf9ShRutSwkiheEViOm%2Fe4c5oYVxno%2BgNCqK0xaUSVH6NFK37ND3PPUs%2BnI35TRp8H%2BGRDKF0EtkPNPFf4aG15qReV8V5K6DNfh%2FfKElu3K%2BS%2F4uqBUuWlv0R8QUUS8zAKedgrXPIxAMzuxrlFR7T4CMe6IX6w79XtqRTfnUXO4aA2B9tOft2Ogvu7wceGWR5vOfTcFB256Wm%2BX175ndzSn%2F4VsDDB93veMFt4IXJIAW2fYyqsKnxYyZH6w%2Fs5GxtS%2BAcLaPr1UZdq0qevTgRkW5UFhHRV3Z%2Bdc0z0bf82VVYL5uPfTqpf6TX%2B6WaC2EysF%2FePQ1kOiQLCZoWkHxinhxVhEQ8m9PiTNpPvSwS1jXs3vtuU8JdeOqAnjsebBCUZtimfeXJJPrisQkYCzKTw5dGuh8auU3RysIyoft7lKko4SchlAxc23TDLoZnABjqkAVtypbAFVLCCBOGRBeRHT36WERqYuZGH3IQ0sS4Pu3eLyhKLlDevrqB%2BL0IRfAGHxZnVIiSyzPJANThOrJJJagRkKG7jm8lIqUoLmTHGZLefPFCGutpyPDSF%2BRaB1x83BUZiWp%2BYlKRhTCfvs3hdzvgjP5sOf0nR3nMZoEvsZPJbxMIUpk5nySsHao%2BZC1P1V7mj6UxFs4YQ25uBrxDDS0HF4z5z&X-Amz-Signature=fad485b1a8d251ececfa75affe74e85462625c20542ea1292981727824987858&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

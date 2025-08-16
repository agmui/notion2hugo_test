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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X4GSFPU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDQfHxEcqaJSOUpn%2Fl%2FcTBBA4dlhq%2BPdfD5ln9Kem%2FGTAiAIroeVGRTfrI9JM65FelkXDGDnQ3fzxl84rktPdgyrxyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMoEIHpHK0IGPu5aq0KtwDloI1KI%2F%2FfQFeisqhdg%2FIe0lyHPVDlv68nbQEzNhr8yBuP%2FIlz%2BPoDcsLJpk6r9LO65Quxuf%2BN7Ofyf6vMI7WhmXPGIt7lC1Ey8G%2FXqnYJPKoqTamSSyIhFr%2FPSxEhJxBl1hma9wk4S%2FLl4fqXfqvwc9mq3UNNXR8ZpF2BAwErVHfoX1LY2BkqHE5Sdy1IbgGHNRMKXBw0ukFscY8Q6pX9YyQb4hK8i4aT4jmdPOkfIROjahxsYJWy%2B5q1zTPsY5bEVDTRz08zzn5fX4k7Y3cRptdyLk8fbCRy%2BH3cDnH9ul%2F2WJ1LCWouAM2h9xef09szBwPhk5caemMcatLEuh2l5MJPX2jkY95ARzFqg%2BSBKmo91bAyEUrNiAlh%2BWzY0tDbwc3pH5ZHc2C9B6V8QhKdnjPOPxwynMif3NPqu4y1c%2Fnxx%2FviQebXOFoAuHeUcI4tAni0yRPNvCfSO6m8moI0ooVOJKJstFKjMCzCDkqMyvdGzLmEfHLTuWet%2FH9H3ltiW8lopprQiwuMOXC%2FcvyhTyGsG9FpLTkOXcPZ6d8dWHPTXyOd6iAX7Tb%2Fvst5O4cb7nMNJKJmYJfr4wzcB4o1tzFAAUsfEbxdxP%2F4V7fKblihQYi3EEfZ1ULRmMwvp2CxQY6pgGzUbflvVeNWRXtXIIDuPvT5Nexf%2BmDyq8%2FBNXK2c%2B30aWzui8%2Fg%2FOuewe87vDv4LePG6L%2FY8II1Ic9zvFAfAv6tqLRmu%2FVtUDdlU%2F3DoF88pTdobNWnS7ZaKehIfd%2F4oFwa6x8mz7lpjGK9M2kvzJ1KRqGG0gHFH9zquFJ%2BuOt4zsV0gm2wg14iESOOqZOHBeUE5vHEmlVX6Uky1%2FRFvTRI%2BlkeB34&X-Amz-Signature=1473975dcccc828d09fd8cc76886c9a0ace084f9dca233ddc6da8de5cb52f38c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X4GSFPU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDQfHxEcqaJSOUpn%2Fl%2FcTBBA4dlhq%2BPdfD5ln9Kem%2FGTAiAIroeVGRTfrI9JM65FelkXDGDnQ3fzxl84rktPdgyrxyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMoEIHpHK0IGPu5aq0KtwDloI1KI%2F%2FfQFeisqhdg%2FIe0lyHPVDlv68nbQEzNhr8yBuP%2FIlz%2BPoDcsLJpk6r9LO65Quxuf%2BN7Ofyf6vMI7WhmXPGIt7lC1Ey8G%2FXqnYJPKoqTamSSyIhFr%2FPSxEhJxBl1hma9wk4S%2FLl4fqXfqvwc9mq3UNNXR8ZpF2BAwErVHfoX1LY2BkqHE5Sdy1IbgGHNRMKXBw0ukFscY8Q6pX9YyQb4hK8i4aT4jmdPOkfIROjahxsYJWy%2B5q1zTPsY5bEVDTRz08zzn5fX4k7Y3cRptdyLk8fbCRy%2BH3cDnH9ul%2F2WJ1LCWouAM2h9xef09szBwPhk5caemMcatLEuh2l5MJPX2jkY95ARzFqg%2BSBKmo91bAyEUrNiAlh%2BWzY0tDbwc3pH5ZHc2C9B6V8QhKdnjPOPxwynMif3NPqu4y1c%2Fnxx%2FviQebXOFoAuHeUcI4tAni0yRPNvCfSO6m8moI0ooVOJKJstFKjMCzCDkqMyvdGzLmEfHLTuWet%2FH9H3ltiW8lopprQiwuMOXC%2FcvyhTyGsG9FpLTkOXcPZ6d8dWHPTXyOd6iAX7Tb%2Fvst5O4cb7nMNJKJmYJfr4wzcB4o1tzFAAUsfEbxdxP%2F4V7fKblihQYi3EEfZ1ULRmMwvp2CxQY6pgGzUbflvVeNWRXtXIIDuPvT5Nexf%2BmDyq8%2FBNXK2c%2B30aWzui8%2Fg%2FOuewe87vDv4LePG6L%2FY8II1Ic9zvFAfAv6tqLRmu%2FVtUDdlU%2F3DoF88pTdobNWnS7ZaKehIfd%2F4oFwa6x8mz7lpjGK9M2kvzJ1KRqGG0gHFH9zquFJ%2BuOt4zsV0gm2wg14iESOOqZOHBeUE5vHEmlVX6Uky1%2FRFvTRI%2BlkeB34&X-Amz-Signature=994af0d49989d7235e93c0844b052384f7a92e7b4fcc4640845f163dacd60916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X4GSFPU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T160932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIDQfHxEcqaJSOUpn%2Fl%2FcTBBA4dlhq%2BPdfD5ln9Kem%2FGTAiAIroeVGRTfrI9JM65FelkXDGDnQ3fzxl84rktPdgyrxyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMoEIHpHK0IGPu5aq0KtwDloI1KI%2F%2FfQFeisqhdg%2FIe0lyHPVDlv68nbQEzNhr8yBuP%2FIlz%2BPoDcsLJpk6r9LO65Quxuf%2BN7Ofyf6vMI7WhmXPGIt7lC1Ey8G%2FXqnYJPKoqTamSSyIhFr%2FPSxEhJxBl1hma9wk4S%2FLl4fqXfqvwc9mq3UNNXR8ZpF2BAwErVHfoX1LY2BkqHE5Sdy1IbgGHNRMKXBw0ukFscY8Q6pX9YyQb4hK8i4aT4jmdPOkfIROjahxsYJWy%2B5q1zTPsY5bEVDTRz08zzn5fX4k7Y3cRptdyLk8fbCRy%2BH3cDnH9ul%2F2WJ1LCWouAM2h9xef09szBwPhk5caemMcatLEuh2l5MJPX2jkY95ARzFqg%2BSBKmo91bAyEUrNiAlh%2BWzY0tDbwc3pH5ZHc2C9B6V8QhKdnjPOPxwynMif3NPqu4y1c%2Fnxx%2FviQebXOFoAuHeUcI4tAni0yRPNvCfSO6m8moI0ooVOJKJstFKjMCzCDkqMyvdGzLmEfHLTuWet%2FH9H3ltiW8lopprQiwuMOXC%2FcvyhTyGsG9FpLTkOXcPZ6d8dWHPTXyOd6iAX7Tb%2Fvst5O4cb7nMNJKJmYJfr4wzcB4o1tzFAAUsfEbxdxP%2F4V7fKblihQYi3EEfZ1ULRmMwvp2CxQY6pgGzUbflvVeNWRXtXIIDuPvT5Nexf%2BmDyq8%2FBNXK2c%2B30aWzui8%2Fg%2FOuewe87vDv4LePG6L%2FY8II1Ic9zvFAfAv6tqLRmu%2FVtUDdlU%2F3DoF88pTdobNWnS7ZaKehIfd%2F4oFwa6x8mz7lpjGK9M2kvzJ1KRqGG0gHFH9zquFJ%2BuOt4zsV0gm2wg14iESOOqZOHBeUE5vHEmlVX6Uky1%2FRFvTRI%2BlkeB34&X-Amz-Signature=13c6911092802f7c87004a74c3b60c0e0a2a76199510322dfa4819326ef243cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

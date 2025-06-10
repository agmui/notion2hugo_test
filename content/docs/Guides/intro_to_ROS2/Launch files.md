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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ZMT7XG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICN4nC9RqtUH7oOFziIWlBdXWNvChqvYoH9nH3Ri4a0gAiBV%2FgNmMPVrPpVdXvTY%2B4aGJvu5iQxwFgVZsUtc%2B5zwpSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp53o3T6QAhJ5sGNrKtwDI4sd5QQXveZumF3DIG92o6KlsrbPmIyJ6wGInEnylp6X1HgmjqRdtVIxRRqBEG7chEijy%2Bq2pIvDkWG0K0HbpTu76E3Fmp%2Bncu6Od2N0Twp%2F1cFqmamecmeztKSEks6NARMHIAEmFhp0x6QdlJgiwJqZy2bODy8fDcjiOEOoz4NoQQ%2B0icSvXtNK4zxfHTP%2BT%2BaVRaojR0hoszBOk%2FBHpNE1ECNIO2npamdzoRq%2FLjMVHFD1SV6kGQO3o7YLYVKXL6VOXAlaii3stheNFfnRF8Fv%2FqxtgYv10NnHhso%2BCc667Aht6gfDb7bqqiZRaK88G6AHFfpAGaKy0gtbsXWCZtYA%2FrEu8I%2FOksgRv0qujQshVGaVThWmsCCDYcEpH9qpVso7uT7xo7RvjdlwDi71WnQ6HR1aTY4PT9vGZcmSLvZIIMnsYK45qqweuFi16puNbIDtXKR5vRVyO0yR0phxZlDTDjiLzSPQuYlgDThvzMQmewtR%2F5%2Bihz1oDE05bTZYNRDKeLam5bsrrFikUEQn%2FJlJ%2FNmX%2BHoTkYp%2BBfGLwKGGuhMeIE%2BKoDlgngUrNzJkmcSWQTHGcL8OrEvPFPQftw%2BJx1yXC%2B5cq8G2T9JdkhAFPMmujn9Ga0QN8Bkw99agwgY6pgF0INvDu5GGW0mthEjNngI%2FJjkAx%2BI9WcM9iwJ%2FBqbAI%2FM1GUraaN%2FCKGJZT%2FDb0C3l40uI9zVORdd5fVuRNdM2Y%2B0ngmQ65UkWCozWugk3NTnJF0UBgiFyvDR%2B5sCMXHkOceUZ%2F%2FfKeothbDtN5mgnrPEowj74yrbCM4InYUwJ9OHuEvFxyV%2Biisqw9rO5jaKFEuaRjTzVli84w5Eb15j167Rz79r%2B&X-Amz-Signature=42a2d2c671221e4bc6574fd96765e0772a3287d5914d89501c7727a9cf4525f0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ZMT7XG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICN4nC9RqtUH7oOFziIWlBdXWNvChqvYoH9nH3Ri4a0gAiBV%2FgNmMPVrPpVdXvTY%2B4aGJvu5iQxwFgVZsUtc%2B5zwpSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp53o3T6QAhJ5sGNrKtwDI4sd5QQXveZumF3DIG92o6KlsrbPmIyJ6wGInEnylp6X1HgmjqRdtVIxRRqBEG7chEijy%2Bq2pIvDkWG0K0HbpTu76E3Fmp%2Bncu6Od2N0Twp%2F1cFqmamecmeztKSEks6NARMHIAEmFhp0x6QdlJgiwJqZy2bODy8fDcjiOEOoz4NoQQ%2B0icSvXtNK4zxfHTP%2BT%2BaVRaojR0hoszBOk%2FBHpNE1ECNIO2npamdzoRq%2FLjMVHFD1SV6kGQO3o7YLYVKXL6VOXAlaii3stheNFfnRF8Fv%2FqxtgYv10NnHhso%2BCc667Aht6gfDb7bqqiZRaK88G6AHFfpAGaKy0gtbsXWCZtYA%2FrEu8I%2FOksgRv0qujQshVGaVThWmsCCDYcEpH9qpVso7uT7xo7RvjdlwDi71WnQ6HR1aTY4PT9vGZcmSLvZIIMnsYK45qqweuFi16puNbIDtXKR5vRVyO0yR0phxZlDTDjiLzSPQuYlgDThvzMQmewtR%2F5%2Bihz1oDE05bTZYNRDKeLam5bsrrFikUEQn%2FJlJ%2FNmX%2BHoTkYp%2BBfGLwKGGuhMeIE%2BKoDlgngUrNzJkmcSWQTHGcL8OrEvPFPQftw%2BJx1yXC%2B5cq8G2T9JdkhAFPMmujn9Ga0QN8Bkw99agwgY6pgF0INvDu5GGW0mthEjNngI%2FJjkAx%2BI9WcM9iwJ%2FBqbAI%2FM1GUraaN%2FCKGJZT%2FDb0C3l40uI9zVORdd5fVuRNdM2Y%2B0ngmQ65UkWCozWugk3NTnJF0UBgiFyvDR%2B5sCMXHkOceUZ%2F%2FfKeothbDtN5mgnrPEowj74yrbCM4InYUwJ9OHuEvFxyV%2Biisqw9rO5jaKFEuaRjTzVli84w5Eb15j167Rz79r%2B&X-Amz-Signature=390b5d1662ae5484ca887a2bcb3e88f3d53716c7e403c9c188ca7d8a4a29318b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ZMT7XG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T150938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICN4nC9RqtUH7oOFziIWlBdXWNvChqvYoH9nH3Ri4a0gAiBV%2FgNmMPVrPpVdXvTY%2B4aGJvu5iQxwFgVZsUtc%2B5zwpSqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp53o3T6QAhJ5sGNrKtwDI4sd5QQXveZumF3DIG92o6KlsrbPmIyJ6wGInEnylp6X1HgmjqRdtVIxRRqBEG7chEijy%2Bq2pIvDkWG0K0HbpTu76E3Fmp%2Bncu6Od2N0Twp%2F1cFqmamecmeztKSEks6NARMHIAEmFhp0x6QdlJgiwJqZy2bODy8fDcjiOEOoz4NoQQ%2B0icSvXtNK4zxfHTP%2BT%2BaVRaojR0hoszBOk%2FBHpNE1ECNIO2npamdzoRq%2FLjMVHFD1SV6kGQO3o7YLYVKXL6VOXAlaii3stheNFfnRF8Fv%2FqxtgYv10NnHhso%2BCc667Aht6gfDb7bqqiZRaK88G6AHFfpAGaKy0gtbsXWCZtYA%2FrEu8I%2FOksgRv0qujQshVGaVThWmsCCDYcEpH9qpVso7uT7xo7RvjdlwDi71WnQ6HR1aTY4PT9vGZcmSLvZIIMnsYK45qqweuFi16puNbIDtXKR5vRVyO0yR0phxZlDTDjiLzSPQuYlgDThvzMQmewtR%2F5%2Bihz1oDE05bTZYNRDKeLam5bsrrFikUEQn%2FJlJ%2FNmX%2BHoTkYp%2BBfGLwKGGuhMeIE%2BKoDlgngUrNzJkmcSWQTHGcL8OrEvPFPQftw%2BJx1yXC%2B5cq8G2T9JdkhAFPMmujn9Ga0QN8Bkw99agwgY6pgF0INvDu5GGW0mthEjNngI%2FJjkAx%2BI9WcM9iwJ%2FBqbAI%2FM1GUraaN%2FCKGJZT%2FDb0C3l40uI9zVORdd5fVuRNdM2Y%2B0ngmQ65UkWCozWugk3NTnJF0UBgiFyvDR%2B5sCMXHkOceUZ%2F%2FfKeothbDtN5mgnrPEowj74yrbCM4InYUwJ9OHuEvFxyV%2Biisqw9rO5jaKFEuaRjTzVli84w5Eb15j167Rz79r%2B&X-Amz-Signature=bf5cfd9abefe2ae3750b6b49a36d700cc2852461a65d0ca8f3cfe20bdaee4023&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

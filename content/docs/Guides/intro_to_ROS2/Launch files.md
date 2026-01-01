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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKG4QXY%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCFWKponBwth9MiFpY8nuAhXOtraeEyRDRikHYU56Jy1wIhANsADwMvz5pPe7UG6E6nVLxWAni68fFPbQdgLF41yeg5KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMX6maSnTqmvdo06cq3ANAQ0Uu3Zy9ddJ6yNfj4ThiWuQ246V%2BX59hB8eCLk%2BOlxgv7Yw8x7IU%2BD3eV%2B5kN5uMV%2F1J0Uap8VDKEZH%2B7G3vorBbddDC26h37RR2PoLosZnSH6e48atdq2Z3vAgJxqhI8q6X%2FBDxqCLBKv03%2FEUHCEOGZBzPFmodx%2F%2FCWG7cGNRzlEfUN9ViEHE%2BR3zJeO6CfdcFTX1HjqOM9G3gTIdjpeNUDUj2VAcjiERhA%2Fzz6VfKURi8%2FV3%2BLghrXp5mx%2Bm3P39qmywYDmqRPy73m%2BBWZu7NEvNX763CUT7%2FdOovOgWrtAJCNjnMg9ewhpYsJngfpSA0f2ajepmMfqjjm92yJoFkr4%2BTH%2FN%2FchQllZmG4ENGgqlE8%2FFh0%2Fz0sN93PzbQEUgG8vmQvL0YMNgi1q7%2FkXnK2D39wi5pLrFSmObNQn4Kqkjc9IqdQRqmjttB6GXn9PzPUzVmXDgmNC7fK6l%2F4ajcIqevxVJZ2ytpE%2F8iinDykblZujvU4GdmI7jRc4fXjLXAbNtNumzfcZytfulczKXc3Fx2oUjFNt8yULMzurojzV6tueHpAcuv9qKWOfcj3UKfSNfJvh9YWLthfiY8Oi3RhIj4h%2FTAuDz8tzUi4MtdelYRC6uQDxQsPTCMn9fKBjqkAQISW48TawqwScjBMn6B5FrwQxmAXxFq3onRSQOTiUtLjBTcGghExbBAEEWKt4%2FwTe45TkyXdQYE%2BsjJsPYO6JVjcqgJF8mkS%2BXuhx5UTdUBlNJkUSangrjErbM%2BkXrmBLtgloJFkeug2XQyP4%2BnES30hYABhzWOxxHBgI93Yflefd0OIw3nM0JVit8msdeFR5nwMQv%2Fd1%2FUtoFrDWq49va%2FmR2K&X-Amz-Signature=0f6a49ab2937ca1cc39ae771f5c67a161488ae4c4eb6533ed13b6126ec8a2207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKG4QXY%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCFWKponBwth9MiFpY8nuAhXOtraeEyRDRikHYU56Jy1wIhANsADwMvz5pPe7UG6E6nVLxWAni68fFPbQdgLF41yeg5KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMX6maSnTqmvdo06cq3ANAQ0Uu3Zy9ddJ6yNfj4ThiWuQ246V%2BX59hB8eCLk%2BOlxgv7Yw8x7IU%2BD3eV%2B5kN5uMV%2F1J0Uap8VDKEZH%2B7G3vorBbddDC26h37RR2PoLosZnSH6e48atdq2Z3vAgJxqhI8q6X%2FBDxqCLBKv03%2FEUHCEOGZBzPFmodx%2F%2FCWG7cGNRzlEfUN9ViEHE%2BR3zJeO6CfdcFTX1HjqOM9G3gTIdjpeNUDUj2VAcjiERhA%2Fzz6VfKURi8%2FV3%2BLghrXp5mx%2Bm3P39qmywYDmqRPy73m%2BBWZu7NEvNX763CUT7%2FdOovOgWrtAJCNjnMg9ewhpYsJngfpSA0f2ajepmMfqjjm92yJoFkr4%2BTH%2FN%2FchQllZmG4ENGgqlE8%2FFh0%2Fz0sN93PzbQEUgG8vmQvL0YMNgi1q7%2FkXnK2D39wi5pLrFSmObNQn4Kqkjc9IqdQRqmjttB6GXn9PzPUzVmXDgmNC7fK6l%2F4ajcIqevxVJZ2ytpE%2F8iinDykblZujvU4GdmI7jRc4fXjLXAbNtNumzfcZytfulczKXc3Fx2oUjFNt8yULMzurojzV6tueHpAcuv9qKWOfcj3UKfSNfJvh9YWLthfiY8Oi3RhIj4h%2FTAuDz8tzUi4MtdelYRC6uQDxQsPTCMn9fKBjqkAQISW48TawqwScjBMn6B5FrwQxmAXxFq3onRSQOTiUtLjBTcGghExbBAEEWKt4%2FwTe45TkyXdQYE%2BsjJsPYO6JVjcqgJF8mkS%2BXuhx5UTdUBlNJkUSangrjErbM%2BkXrmBLtgloJFkeug2XQyP4%2BnES30hYABhzWOxxHBgI93Yflefd0OIw3nM0JVit8msdeFR5nwMQv%2Fd1%2FUtoFrDWq49va%2FmR2K&X-Amz-Signature=5705767f7804472df0dff7645d2e45bfcb4c17d7ccb80c9fe55f56be4222fd53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DKG4QXY%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCFWKponBwth9MiFpY8nuAhXOtraeEyRDRikHYU56Jy1wIhANsADwMvz5pPe7UG6E6nVLxWAni68fFPbQdgLF41yeg5KogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMX6maSnTqmvdo06cq3ANAQ0Uu3Zy9ddJ6yNfj4ThiWuQ246V%2BX59hB8eCLk%2BOlxgv7Yw8x7IU%2BD3eV%2B5kN5uMV%2F1J0Uap8VDKEZH%2B7G3vorBbddDC26h37RR2PoLosZnSH6e48atdq2Z3vAgJxqhI8q6X%2FBDxqCLBKv03%2FEUHCEOGZBzPFmodx%2F%2FCWG7cGNRzlEfUN9ViEHE%2BR3zJeO6CfdcFTX1HjqOM9G3gTIdjpeNUDUj2VAcjiERhA%2Fzz6VfKURi8%2FV3%2BLghrXp5mx%2Bm3P39qmywYDmqRPy73m%2BBWZu7NEvNX763CUT7%2FdOovOgWrtAJCNjnMg9ewhpYsJngfpSA0f2ajepmMfqjjm92yJoFkr4%2BTH%2FN%2FchQllZmG4ENGgqlE8%2FFh0%2Fz0sN93PzbQEUgG8vmQvL0YMNgi1q7%2FkXnK2D39wi5pLrFSmObNQn4Kqkjc9IqdQRqmjttB6GXn9PzPUzVmXDgmNC7fK6l%2F4ajcIqevxVJZ2ytpE%2F8iinDykblZujvU4GdmI7jRc4fXjLXAbNtNumzfcZytfulczKXc3Fx2oUjFNt8yULMzurojzV6tueHpAcuv9qKWOfcj3UKfSNfJvh9YWLthfiY8Oi3RhIj4h%2FTAuDz8tzUi4MtdelYRC6uQDxQsPTCMn9fKBjqkAQISW48TawqwScjBMn6B5FrwQxmAXxFq3onRSQOTiUtLjBTcGghExbBAEEWKt4%2FwTe45TkyXdQYE%2BsjJsPYO6JVjcqgJF8mkS%2BXuhx5UTdUBlNJkUSangrjErbM%2BkXrmBLtgloJFkeug2XQyP4%2BnES30hYABhzWOxxHBgI93Yflefd0OIw3nM0JVit8msdeFR5nwMQv%2Fd1%2FUtoFrDWq49va%2FmR2K&X-Amz-Signature=3a9a135b361ed543494127311fec81664d33fae2124852383fe5e6c83ed1a65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

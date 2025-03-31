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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQQLOGNC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCUFyjf3abYi3fq3LMPbZWZqfeByNieh7LVyMJo%2F9VILgIgNQI1AznZTz7llGdUNVc4A8ulFIhXE7Xrmy%2Fg0RwoG3cqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8o7o35vhHplQT6yCrcA%2Beuv8zA9iZhyPlobTErEMuax01KsB0xIu6O2SeJh473ZMoAvDeK4w7zmxbr8OKnlv0Yo%2FdjY%2B4%2FpwGQg1X3z%2BAoG7wlI8uOP84PXKgIo896Kq7arHH%2FgVDs%2FH3Ffj2I8m0WQtvQ2FjPn7ZDbkpTsuADY7qsAl4SjJti172t8TwaUhpa4InO3UylaAdKnbgMd8CCmhezOp%2FLU1dPQOH2IFeR%2FwBQCk2elmgCN28NdzTd7B6G8dSMncXAL6v%2BtkWZSG9viGi6fcPbtCtJCDLRqMLuH%2FZfCJnrrydTls7JxXsBNUjyvO7sH55DzMU2FTK13qRLG4JZD3VmLIkRhyZu9mfLQSSDJ2SJIVKBB482YsozKfqUdKBjbhR0ZXqpfMcmNNGN4L6osGUs3FO1rMFYeT6XUHzGkPeFNSzDcemf6ErDSmpu9iAunNbx%2BU7jXTDpSNdfPEFgTybtqpBnRFLNKV5t7DShL%2FgRZs8y8FJC7THDHOISv%2FcY%2BiBflIhJjBuo7H65EwSQ%2F3AfBApUqyksxlwYeR83shctG4ncCZvwIPJD5nyOeLNGlJhsoJDUHhc9o8k8AZcpmyAULJhNHXt7hQLJVLxyCOl4XUJKAC3BdGAOAmao6zPEovmBc90WMOO7p78GOqUBd3o%2BS95QuvTfLQpgDdkO8oHKOpUvlOUAoW9bXs505NqF7Sc62hNLfzIFnLB42TkJcGyKwvCFYx2kxoYSjJUGJqjfFFiIU6oEsr1zM%2BcLpCVdVIpPKDZNsV%2Bi7qYfQFARM1sFfdoFzwLZIFc36dmMR2e%2F7C3XOqUWwIziCP2WTa9v3riV3ibFN8LB1GX%2BuvqqPifQnX5pf%2FUi9Ys5F3YO4Y%2FObUj1&X-Amz-Signature=b54e0b3569f7a6acaece9c99b9ea3d770eb15613cb55575c6e5cb909d7c17e35&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQQLOGNC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCUFyjf3abYi3fq3LMPbZWZqfeByNieh7LVyMJo%2F9VILgIgNQI1AznZTz7llGdUNVc4A8ulFIhXE7Xrmy%2Fg0RwoG3cqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8o7o35vhHplQT6yCrcA%2Beuv8zA9iZhyPlobTErEMuax01KsB0xIu6O2SeJh473ZMoAvDeK4w7zmxbr8OKnlv0Yo%2FdjY%2B4%2FpwGQg1X3z%2BAoG7wlI8uOP84PXKgIo896Kq7arHH%2FgVDs%2FH3Ffj2I8m0WQtvQ2FjPn7ZDbkpTsuADY7qsAl4SjJti172t8TwaUhpa4InO3UylaAdKnbgMd8CCmhezOp%2FLU1dPQOH2IFeR%2FwBQCk2elmgCN28NdzTd7B6G8dSMncXAL6v%2BtkWZSG9viGi6fcPbtCtJCDLRqMLuH%2FZfCJnrrydTls7JxXsBNUjyvO7sH55DzMU2FTK13qRLG4JZD3VmLIkRhyZu9mfLQSSDJ2SJIVKBB482YsozKfqUdKBjbhR0ZXqpfMcmNNGN4L6osGUs3FO1rMFYeT6XUHzGkPeFNSzDcemf6ErDSmpu9iAunNbx%2BU7jXTDpSNdfPEFgTybtqpBnRFLNKV5t7DShL%2FgRZs8y8FJC7THDHOISv%2FcY%2BiBflIhJjBuo7H65EwSQ%2F3AfBApUqyksxlwYeR83shctG4ncCZvwIPJD5nyOeLNGlJhsoJDUHhc9o8k8AZcpmyAULJhNHXt7hQLJVLxyCOl4XUJKAC3BdGAOAmao6zPEovmBc90WMOO7p78GOqUBd3o%2BS95QuvTfLQpgDdkO8oHKOpUvlOUAoW9bXs505NqF7Sc62hNLfzIFnLB42TkJcGyKwvCFYx2kxoYSjJUGJqjfFFiIU6oEsr1zM%2BcLpCVdVIpPKDZNsV%2Bi7qYfQFARM1sFfdoFzwLZIFc36dmMR2e%2F7C3XOqUWwIziCP2WTa9v3riV3ibFN8LB1GX%2BuvqqPifQnX5pf%2FUi9Ys5F3YO4Y%2FObUj1&X-Amz-Signature=fa4a6dee45c04332d44bf8052fe806c658756e5838770c05e208ad4809a340a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQQLOGNC%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCUFyjf3abYi3fq3LMPbZWZqfeByNieh7LVyMJo%2F9VILgIgNQI1AznZTz7llGdUNVc4A8ulFIhXE7Xrmy%2Fg0RwoG3cqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG8o7o35vhHplQT6yCrcA%2Beuv8zA9iZhyPlobTErEMuax01KsB0xIu6O2SeJh473ZMoAvDeK4w7zmxbr8OKnlv0Yo%2FdjY%2B4%2FpwGQg1X3z%2BAoG7wlI8uOP84PXKgIo896Kq7arHH%2FgVDs%2FH3Ffj2I8m0WQtvQ2FjPn7ZDbkpTsuADY7qsAl4SjJti172t8TwaUhpa4InO3UylaAdKnbgMd8CCmhezOp%2FLU1dPQOH2IFeR%2FwBQCk2elmgCN28NdzTd7B6G8dSMncXAL6v%2BtkWZSG9viGi6fcPbtCtJCDLRqMLuH%2FZfCJnrrydTls7JxXsBNUjyvO7sH55DzMU2FTK13qRLG4JZD3VmLIkRhyZu9mfLQSSDJ2SJIVKBB482YsozKfqUdKBjbhR0ZXqpfMcmNNGN4L6osGUs3FO1rMFYeT6XUHzGkPeFNSzDcemf6ErDSmpu9iAunNbx%2BU7jXTDpSNdfPEFgTybtqpBnRFLNKV5t7DShL%2FgRZs8y8FJC7THDHOISv%2FcY%2BiBflIhJjBuo7H65EwSQ%2F3AfBApUqyksxlwYeR83shctG4ncCZvwIPJD5nyOeLNGlJhsoJDUHhc9o8k8AZcpmyAULJhNHXt7hQLJVLxyCOl4XUJKAC3BdGAOAmao6zPEovmBc90WMOO7p78GOqUBd3o%2BS95QuvTfLQpgDdkO8oHKOpUvlOUAoW9bXs505NqF7Sc62hNLfzIFnLB42TkJcGyKwvCFYx2kxoYSjJUGJqjfFFiIU6oEsr1zM%2BcLpCVdVIpPKDZNsV%2Bi7qYfQFARM1sFfdoFzwLZIFc36dmMR2e%2F7C3XOqUWwIziCP2WTa9v3riV3ibFN8LB1GX%2BuvqqPifQnX5pf%2FUi9Ys5F3YO4Y%2FObUj1&X-Amz-Signature=412486366ffd0d666a0bb4d7f554e59dfc34915eba632a2cc5f328e2ae96c93d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

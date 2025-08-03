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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUINLR3W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxjOxyUJ6MdkJGh328Xvoh3ZJUsCgqaqBm7J7FB4HY7QIhAOQBGxAxOIBOBgqx9hbRsoFY7V9tlK8M4RUsMPB4TUjwKv8DCC8QABoMNjM3NDIzMTgzODA1IgyZHa0rWkCciyW4MbMq3AOJkAm2lLdev2iGhSoHHX%2FwU%2FpO9H54vxvINMedXmiQ2lg4Uer68ti56TbOfNsjNCK%2FIc4WUHPP8Wl06ix81c7WpUL7WGCp1bDqnU6HigOylyH3z5u7CiEcxnFFEZCIuroiGPKI%2FUNfd0d5s5BPNlde3GioLN3rfNGaYshTx7TFwEEvkcJKTuxDhgZkDYDaGMGcJTAvD9FgLPHyVyqUIfk44vj6KpEMkjst4xhCY2mtRdKhh0Q1Jr%2Bop3WlPRaxqQH2LMtqYp2n4C2H9YRw%2FbflY167REtRREFrBXVAhpqxKrNhtDDDIbUDLA5wmoOmAbd63XIl9zkh99W8%2Fsxtx9QVuomEKqDWi88VJ1oXIIQFJWwOcTfZcUYBbkxR5SS6S3yqfaiKSvly3ey2uhRTjShJ%2BbBbuEEG%2FBQQjNdBj2K2jRQIfl9wCyBmEp%2Bxpoyrnu%2Bnkc3630AMYVo0px9%2BX2jZvzZ%2FAoxpthulEY6yXn%2BfydfxqqLrC%2FWm0mg2qZAsaw89XURGjwPAdkWf2Vxg4uHMIz9C3gQLT0CA9NFMjUsacGcY5pBumg2M9sFSUv5Vw6LF4WjLz%2BkOn9C8SNGaGa4Hb8ywHhdrpdCwOg3Nf6fH%2FNFnus7b7qVSqAAvyDDL0r3EBjqkARUukWXGGjkySg5SmNb1Fiq2ECvR55D4lp9TQUq0p3n2S3IAaKcRb4JYV1VHKU7o7B6wjj8L%2BUE4k9XM4gjgwpplt9mpe%2BTE8pOkb5MpWsiJ%2F5r7FRYA9srGqBrrdnW7ssWV1AQs2xexyMKazNJpmGe5KOniuLui%2BpCVGTrBh%2FLDyQ4IVbHh8rK%2B5INaxSzWz%2FQsWQ2z84WS9l6I9IXOIycBkfnl&X-Amz-Signature=289354bc0e937912f21f061d0f67090f88f41850324498d29ec73fc44ca4965d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUINLR3W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxjOxyUJ6MdkJGh328Xvoh3ZJUsCgqaqBm7J7FB4HY7QIhAOQBGxAxOIBOBgqx9hbRsoFY7V9tlK8M4RUsMPB4TUjwKv8DCC8QABoMNjM3NDIzMTgzODA1IgyZHa0rWkCciyW4MbMq3AOJkAm2lLdev2iGhSoHHX%2FwU%2FpO9H54vxvINMedXmiQ2lg4Uer68ti56TbOfNsjNCK%2FIc4WUHPP8Wl06ix81c7WpUL7WGCp1bDqnU6HigOylyH3z5u7CiEcxnFFEZCIuroiGPKI%2FUNfd0d5s5BPNlde3GioLN3rfNGaYshTx7TFwEEvkcJKTuxDhgZkDYDaGMGcJTAvD9FgLPHyVyqUIfk44vj6KpEMkjst4xhCY2mtRdKhh0Q1Jr%2Bop3WlPRaxqQH2LMtqYp2n4C2H9YRw%2FbflY167REtRREFrBXVAhpqxKrNhtDDDIbUDLA5wmoOmAbd63XIl9zkh99W8%2Fsxtx9QVuomEKqDWi88VJ1oXIIQFJWwOcTfZcUYBbkxR5SS6S3yqfaiKSvly3ey2uhRTjShJ%2BbBbuEEG%2FBQQjNdBj2K2jRQIfl9wCyBmEp%2Bxpoyrnu%2Bnkc3630AMYVo0px9%2BX2jZvzZ%2FAoxpthulEY6yXn%2BfydfxqqLrC%2FWm0mg2qZAsaw89XURGjwPAdkWf2Vxg4uHMIz9C3gQLT0CA9NFMjUsacGcY5pBumg2M9sFSUv5Vw6LF4WjLz%2BkOn9C8SNGaGa4Hb8ywHhdrpdCwOg3Nf6fH%2FNFnus7b7qVSqAAvyDDL0r3EBjqkARUukWXGGjkySg5SmNb1Fiq2ECvR55D4lp9TQUq0p3n2S3IAaKcRb4JYV1VHKU7o7B6wjj8L%2BUE4k9XM4gjgwpplt9mpe%2BTE8pOkb5MpWsiJ%2F5r7FRYA9srGqBrrdnW7ssWV1AQs2xexyMKazNJpmGe5KOniuLui%2BpCVGTrBh%2FLDyQ4IVbHh8rK%2B5INaxSzWz%2FQsWQ2z84WS9l6I9IXOIycBkfnl&X-Amz-Signature=f527e31e98965b432a721b71abf6decff46cdb6a83933603ce505eba0210edbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUINLR3W%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxjOxyUJ6MdkJGh328Xvoh3ZJUsCgqaqBm7J7FB4HY7QIhAOQBGxAxOIBOBgqx9hbRsoFY7V9tlK8M4RUsMPB4TUjwKv8DCC8QABoMNjM3NDIzMTgzODA1IgyZHa0rWkCciyW4MbMq3AOJkAm2lLdev2iGhSoHHX%2FwU%2FpO9H54vxvINMedXmiQ2lg4Uer68ti56TbOfNsjNCK%2FIc4WUHPP8Wl06ix81c7WpUL7WGCp1bDqnU6HigOylyH3z5u7CiEcxnFFEZCIuroiGPKI%2FUNfd0d5s5BPNlde3GioLN3rfNGaYshTx7TFwEEvkcJKTuxDhgZkDYDaGMGcJTAvD9FgLPHyVyqUIfk44vj6KpEMkjst4xhCY2mtRdKhh0Q1Jr%2Bop3WlPRaxqQH2LMtqYp2n4C2H9YRw%2FbflY167REtRREFrBXVAhpqxKrNhtDDDIbUDLA5wmoOmAbd63XIl9zkh99W8%2Fsxtx9QVuomEKqDWi88VJ1oXIIQFJWwOcTfZcUYBbkxR5SS6S3yqfaiKSvly3ey2uhRTjShJ%2BbBbuEEG%2FBQQjNdBj2K2jRQIfl9wCyBmEp%2Bxpoyrnu%2Bnkc3630AMYVo0px9%2BX2jZvzZ%2FAoxpthulEY6yXn%2BfydfxqqLrC%2FWm0mg2qZAsaw89XURGjwPAdkWf2Vxg4uHMIz9C3gQLT0CA9NFMjUsacGcY5pBumg2M9sFSUv5Vw6LF4WjLz%2BkOn9C8SNGaGa4Hb8ywHhdrpdCwOg3Nf6fH%2FNFnus7b7qVSqAAvyDDL0r3EBjqkARUukWXGGjkySg5SmNb1Fiq2ECvR55D4lp9TQUq0p3n2S3IAaKcRb4JYV1VHKU7o7B6wjj8L%2BUE4k9XM4gjgwpplt9mpe%2BTE8pOkb5MpWsiJ%2F5r7FRYA9srGqBrrdnW7ssWV1AQs2xexyMKazNJpmGe5KOniuLui%2BpCVGTrBh%2FLDyQ4IVbHh8rK%2B5INaxSzWz%2FQsWQ2z84WS9l6I9IXOIycBkfnl&X-Amz-Signature=3923a78cea4d086cf0a2a3fb1039834e29855a8f657fe1d00905d26b807498ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EY6FN4K%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClRhnXQKtX6gY7PqYdpBFcf4zytJd%2B1%2B4P2B8UqWEHQgIhANZOg5HnXKCR5TaBXyeItVPa1Qyrfz3XX7ETdJaCj9FXKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN9CPwZiHh6dV3%2Bk8q3AMmeuE%2BR2hB8IzLoQkCxr3wxe9mjlC%2FObTBgeplfxtflfP5afsORgRqTv%2BWiC83Jplt9q%2BeJciEtE4AoucKsIiBWtIfld5Up5%2BEDhQ2B1ezxsSGD%2FFFbIaEEZirdmmytWe%2BOnZ1%2BO7NoxK8sxLG2u4jIzAZnFxeY%2FJHCT%2BlCDE0C%2BNFlkP5%2Bs2yvJ2HKCjJkI5cUEWN2NlkHOgeYXKFcG3eGcaLpCnnht2MqKB36QMRg7XT%2BTlxITGVQivU%2B4ANhbcCR5cFDIpuygT23K1E0Shx9qeSNk8CCaXcoG9oI%2FTj4nIhPKfviKWVDickHcUQZ8ArOOoQ9f9rMD7c6ZztCReNo8WzoO4vP9ptJ9Z1X7b2fm7VyWLPhEcJwu2pWUk48lGGKkP3tzZdi1s7Xa5H82e6nLNuHfXtAP9FXnW%2BLU8frL4FwGrGIGuC4lNKb7N%2BFXtj9CJmbttB2pAvA6stEMCisiKhs3dSDHZyMqOyTB2jkVKwfzx2nb1bGE1EzmVMQppMr7tfKtRRttZkVDwydqs3RmyA4dtp7BA7X4YtIFQx6OL%2FUz%2BCA%2BF2BgFF3qMH6E3sQtjI2W8H0WnFs41sy%2FdVM5hQBtS1oHbHROMDzDY9utXmDTRyxL83sodqrDCBk%2FfDBjqkAVAlqz9DXtheGNPM6OvOeC1iYDpeg3PULpbfxt5BqWMy%2F0ylX%2Fw1ZcwEqhtGYTW4Zz0uTqS8tKKbACa9QxGFGBL1NDaGgpSUr%2BpozozG0azV7uFokTQps%2BCDBWdvcgcHEUK21IXYWcBM1qglq0kdxRIzS56ZMis57PLFs38wODbHtYWJr9m6yBuz0RuqHSMUhd9i9ZdCQ%2Bz%2FQrOhHmGyGthMJAJj&X-Amz-Signature=d1b5b4cf00cc44034a351c8f13a2ab23dd8bca5ae239bf9fdef165f4d5e6c375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EY6FN4K%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClRhnXQKtX6gY7PqYdpBFcf4zytJd%2B1%2B4P2B8UqWEHQgIhANZOg5HnXKCR5TaBXyeItVPa1Qyrfz3XX7ETdJaCj9FXKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN9CPwZiHh6dV3%2Bk8q3AMmeuE%2BR2hB8IzLoQkCxr3wxe9mjlC%2FObTBgeplfxtflfP5afsORgRqTv%2BWiC83Jplt9q%2BeJciEtE4AoucKsIiBWtIfld5Up5%2BEDhQ2B1ezxsSGD%2FFFbIaEEZirdmmytWe%2BOnZ1%2BO7NoxK8sxLG2u4jIzAZnFxeY%2FJHCT%2BlCDE0C%2BNFlkP5%2Bs2yvJ2HKCjJkI5cUEWN2NlkHOgeYXKFcG3eGcaLpCnnht2MqKB36QMRg7XT%2BTlxITGVQivU%2B4ANhbcCR5cFDIpuygT23K1E0Shx9qeSNk8CCaXcoG9oI%2FTj4nIhPKfviKWVDickHcUQZ8ArOOoQ9f9rMD7c6ZztCReNo8WzoO4vP9ptJ9Z1X7b2fm7VyWLPhEcJwu2pWUk48lGGKkP3tzZdi1s7Xa5H82e6nLNuHfXtAP9FXnW%2BLU8frL4FwGrGIGuC4lNKb7N%2BFXtj9CJmbttB2pAvA6stEMCisiKhs3dSDHZyMqOyTB2jkVKwfzx2nb1bGE1EzmVMQppMr7tfKtRRttZkVDwydqs3RmyA4dtp7BA7X4YtIFQx6OL%2FUz%2BCA%2BF2BgFF3qMH6E3sQtjI2W8H0WnFs41sy%2FdVM5hQBtS1oHbHROMDzDY9utXmDTRyxL83sodqrDCBk%2FfDBjqkAVAlqz9DXtheGNPM6OvOeC1iYDpeg3PULpbfxt5BqWMy%2F0ylX%2Fw1ZcwEqhtGYTW4Zz0uTqS8tKKbACa9QxGFGBL1NDaGgpSUr%2BpozozG0azV7uFokTQps%2BCDBWdvcgcHEUK21IXYWcBM1qglq0kdxRIzS56ZMis57PLFs38wODbHtYWJr9m6yBuz0RuqHSMUhd9i9ZdCQ%2Bz%2FQrOhHmGyGthMJAJj&X-Amz-Signature=61a8ea3fdfaa3573f8e294e4c1b5942704697680bdf2bf98374f82645b522c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EY6FN4K%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T071738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClRhnXQKtX6gY7PqYdpBFcf4zytJd%2B1%2B4P2B8UqWEHQgIhANZOg5HnXKCR5TaBXyeItVPa1Qyrfz3XX7ETdJaCj9FXKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyN9CPwZiHh6dV3%2Bk8q3AMmeuE%2BR2hB8IzLoQkCxr3wxe9mjlC%2FObTBgeplfxtflfP5afsORgRqTv%2BWiC83Jplt9q%2BeJciEtE4AoucKsIiBWtIfld5Up5%2BEDhQ2B1ezxsSGD%2FFFbIaEEZirdmmytWe%2BOnZ1%2BO7NoxK8sxLG2u4jIzAZnFxeY%2FJHCT%2BlCDE0C%2BNFlkP5%2Bs2yvJ2HKCjJkI5cUEWN2NlkHOgeYXKFcG3eGcaLpCnnht2MqKB36QMRg7XT%2BTlxITGVQivU%2B4ANhbcCR5cFDIpuygT23K1E0Shx9qeSNk8CCaXcoG9oI%2FTj4nIhPKfviKWVDickHcUQZ8ArOOoQ9f9rMD7c6ZztCReNo8WzoO4vP9ptJ9Z1X7b2fm7VyWLPhEcJwu2pWUk48lGGKkP3tzZdi1s7Xa5H82e6nLNuHfXtAP9FXnW%2BLU8frL4FwGrGIGuC4lNKb7N%2BFXtj9CJmbttB2pAvA6stEMCisiKhs3dSDHZyMqOyTB2jkVKwfzx2nb1bGE1EzmVMQppMr7tfKtRRttZkVDwydqs3RmyA4dtp7BA7X4YtIFQx6OL%2FUz%2BCA%2BF2BgFF3qMH6E3sQtjI2W8H0WnFs41sy%2FdVM5hQBtS1oHbHROMDzDY9utXmDTRyxL83sodqrDCBk%2FfDBjqkAVAlqz9DXtheGNPM6OvOeC1iYDpeg3PULpbfxt5BqWMy%2F0ylX%2Fw1ZcwEqhtGYTW4Zz0uTqS8tKKbACa9QxGFGBL1NDaGgpSUr%2BpozozG0azV7uFokTQps%2BCDBWdvcgcHEUK21IXYWcBM1qglq0kdxRIzS56ZMis57PLFs38wODbHtYWJr9m6yBuz0RuqHSMUhd9i9ZdCQ%2Bz%2FQrOhHmGyGthMJAJj&X-Amz-Signature=7a241f4a82b200d979501e9606c56c6c6a7b2b4ca5dc2e42b2cb53e984c1c0f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

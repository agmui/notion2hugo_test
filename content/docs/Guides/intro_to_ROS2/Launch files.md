---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMEST3F%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDm46q7SoIqXmxosagEFsVE7Bw62EVvlI8MhsIWPK0XyAIhALqmNiSe%2FQOCvTJofy2VFOsWZHpqWgnCkBzKQWh5NfuJKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW8OzSJd%2FAt9XJS6Yq3ANmtYo6%2FgGTYkVSDhvBmRd2GnAOqvlM6oDzggKUmnk71UXfwb0FSOtankGUYkKU0z2PS2xQ3RUeqYJEZmQZEbpFiUb%2FObf2J5xsAXo0DMGXHpyO0UQGdKLo8CX4WRdCon5T%2BS7FQsi6GYOC3upNc8R2Qz%2BxX0tg%2BN6SnOsdcRHVRskg9mD36jVQTwkLJJrAOlJ4CmBkd7E6Ls1G2TefaJypye6o806mC1fDccAaPCrrT2I1SZk3%2BSaiSyNMIDabnWDFsKP1GOQGYetTwFr7aJCmk0Z7LnwRWInIz%2Fd3iW%2FvSZqSTwmi5Wha0n%2BvpwAdl8FXubN8G7bpnv4o6PrM3Dx5Xlhtuud4UXIOF9muu0pBCLJ4Oq4AgosQGXt3Mxl%2F7tU3pzHPJFxUTzM4%2F%2BxDLPLJQ2y9T30CMizQg89%2BgKmR86h4CKpQgN7J9aJiWtDn8hDLv9nY6tH7xtQ68lUnW%2B4kbFiAty6i0HCucH4%2FnKwMDTe9NpxaJMkVnp%2BpPPAwI%2BXgZEe8SXl%2BOJQTUqblgdCnNLljv4LzHlY%2BN2mPlp3TmLsxW3GcAIT8WJrGFOqb1%2FMRI4DuC3V278oMnYdLPPZfpOiHJVJjyZwlInB17jDdCiZcoIfjV92yWmKxujDDj5zEBjqkAavCUPaYlUmDqu0USzsJBIGqAXZQwQlQfbgzVwtucrrYgOxxF2Y1YimEid%2BdIaLwfsqOepqVKEV%2BV7S2ySlLy1S%2FGO1E2T3%2FnE6PWZ6%2B7Bm031NftCwMOBAEgOxSLE1GOj33kwtHmJ%2FHTsH8tU6gkwX4Am3CSDQRjkTon72acI%2BirjOZwCaRTfoBES9gAg4VFQyNgvkdA60ALGsK7%2FrMF66InNE6&X-Amz-Signature=89c0ba1e5410471c4645e07992aca0d9e8ab048312994f16b274d1973d5f776a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMEST3F%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDm46q7SoIqXmxosagEFsVE7Bw62EVvlI8MhsIWPK0XyAIhALqmNiSe%2FQOCvTJofy2VFOsWZHpqWgnCkBzKQWh5NfuJKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW8OzSJd%2FAt9XJS6Yq3ANmtYo6%2FgGTYkVSDhvBmRd2GnAOqvlM6oDzggKUmnk71UXfwb0FSOtankGUYkKU0z2PS2xQ3RUeqYJEZmQZEbpFiUb%2FObf2J5xsAXo0DMGXHpyO0UQGdKLo8CX4WRdCon5T%2BS7FQsi6GYOC3upNc8R2Qz%2BxX0tg%2BN6SnOsdcRHVRskg9mD36jVQTwkLJJrAOlJ4CmBkd7E6Ls1G2TefaJypye6o806mC1fDccAaPCrrT2I1SZk3%2BSaiSyNMIDabnWDFsKP1GOQGYetTwFr7aJCmk0Z7LnwRWInIz%2Fd3iW%2FvSZqSTwmi5Wha0n%2BvpwAdl8FXubN8G7bpnv4o6PrM3Dx5Xlhtuud4UXIOF9muu0pBCLJ4Oq4AgosQGXt3Mxl%2F7tU3pzHPJFxUTzM4%2F%2BxDLPLJQ2y9T30CMizQg89%2BgKmR86h4CKpQgN7J9aJiWtDn8hDLv9nY6tH7xtQ68lUnW%2B4kbFiAty6i0HCucH4%2FnKwMDTe9NpxaJMkVnp%2BpPPAwI%2BXgZEe8SXl%2BOJQTUqblgdCnNLljv4LzHlY%2BN2mPlp3TmLsxW3GcAIT8WJrGFOqb1%2FMRI4DuC3V278oMnYdLPPZfpOiHJVJjyZwlInB17jDdCiZcoIfjV92yWmKxujDDj5zEBjqkAavCUPaYlUmDqu0USzsJBIGqAXZQwQlQfbgzVwtucrrYgOxxF2Y1YimEid%2BdIaLwfsqOepqVKEV%2BV7S2ySlLy1S%2FGO1E2T3%2FnE6PWZ6%2B7Bm031NftCwMOBAEgOxSLE1GOj33kwtHmJ%2FHTsH8tU6gkwX4Am3CSDQRjkTon72acI%2BirjOZwCaRTfoBES9gAg4VFQyNgvkdA60ALGsK7%2FrMF66InNE6&X-Amz-Signature=09f6ce6e439eeb1538c38b8e6bfa9c828f8b9f75452a40791bd02639f63635a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMEST3F%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDm46q7SoIqXmxosagEFsVE7Bw62EVvlI8MhsIWPK0XyAIhALqmNiSe%2FQOCvTJofy2VFOsWZHpqWgnCkBzKQWh5NfuJKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW8OzSJd%2FAt9XJS6Yq3ANmtYo6%2FgGTYkVSDhvBmRd2GnAOqvlM6oDzggKUmnk71UXfwb0FSOtankGUYkKU0z2PS2xQ3RUeqYJEZmQZEbpFiUb%2FObf2J5xsAXo0DMGXHpyO0UQGdKLo8CX4WRdCon5T%2BS7FQsi6GYOC3upNc8R2Qz%2BxX0tg%2BN6SnOsdcRHVRskg9mD36jVQTwkLJJrAOlJ4CmBkd7E6Ls1G2TefaJypye6o806mC1fDccAaPCrrT2I1SZk3%2BSaiSyNMIDabnWDFsKP1GOQGYetTwFr7aJCmk0Z7LnwRWInIz%2Fd3iW%2FvSZqSTwmi5Wha0n%2BvpwAdl8FXubN8G7bpnv4o6PrM3Dx5Xlhtuud4UXIOF9muu0pBCLJ4Oq4AgosQGXt3Mxl%2F7tU3pzHPJFxUTzM4%2F%2BxDLPLJQ2y9T30CMizQg89%2BgKmR86h4CKpQgN7J9aJiWtDn8hDLv9nY6tH7xtQ68lUnW%2B4kbFiAty6i0HCucH4%2FnKwMDTe9NpxaJMkVnp%2BpPPAwI%2BXgZEe8SXl%2BOJQTUqblgdCnNLljv4LzHlY%2BN2mPlp3TmLsxW3GcAIT8WJrGFOqb1%2FMRI4DuC3V278oMnYdLPPZfpOiHJVJjyZwlInB17jDdCiZcoIfjV92yWmKxujDDj5zEBjqkAavCUPaYlUmDqu0USzsJBIGqAXZQwQlQfbgzVwtucrrYgOxxF2Y1YimEid%2BdIaLwfsqOepqVKEV%2BV7S2ySlLy1S%2FGO1E2T3%2FnE6PWZ6%2B7Bm031NftCwMOBAEgOxSLE1GOj33kwtHmJ%2FHTsH8tU6gkwX4Am3CSDQRjkTon72acI%2BirjOZwCaRTfoBES9gAg4VFQyNgvkdA60ALGsK7%2FrMF66InNE6&X-Amz-Signature=029887fb9317e4f21061c8b0b52977b2b48c99f94061252e2089d4078329c224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLFILGZW%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIATusVFmvsYsFRxEUHhCD3FGoQs%2F%2F8rNWGQzj%2BW0bdoXAiAOVy6t3b2ZeEA4R7kATAUHiqFQ0y5FlF9Bpk30rbMT2SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpy33X6fa9JzbiFwcKtwDabPwZI5neDxbyGKV74Ukwl2jVLuYRdaXkb3WsaqwFLoDUdifFwRFKrVPaXatn3V6jrYqnPizGgLcHtPopKPr7kPCK6Uw%2BEK4q4lvyKQNfjLk44EEwoKEr6xGK1nxX0VRX7Gk8NhnrdEc6vc%2BnGdJH0TrKHKFy%2FRs%2BmON2xytOuwrg%2FOx8RBpLiKNAXun3DIoA8NSbtWMfqIzKkaPnjD5B1TZ5AJ50vmKNRxoQDn1XHK7ZVmV8sj3PEzG07EAls86kuBG4IFFXLckl5aDtJSmHCdewdd6BD7px1ODQXfT3GzFJqTYblZ9zGvySXdlOe2YnVM6g%2Fu4dTsJs0jaX4rY2NebTeum2rRbE1%2B9j0j3ceiU0FZ5JaYiS2REFzFuQqqJw5lIwY%2FWQ0NOPHF5sy5gVYZiPI%2BD%2FjCs9pL4I5T7RBcflCi%2F7YJ0Q66NtJQChiUyG4%2FZXW0NXXSwEZwGd%2FjpANZ7uD6oBB2oB8c1ybtIKQrap7DYC0mLKgU2jvhQjgS0s4NzPzhQZAvlMDInFpjxZBb8e8DoSnopGdb%2Fh6mVSvVZJT3abwBcr0o32uKbBnj9fY4dCA2vFsRajHflWKWChlCxGVOPf%2Bqb%2F33L%2FYL6QAUFDoLjw4saPEcXpRQwvpCswgY6pgFTwUDyId96NpdXRYYish6GY77prkO8rMLlMtzYE3u9efVoqhKmyBCRySfhuR8ymOJQNnovisKb%2BeX70s9AJ4DtYCjlr%2BON7gfDgM0NSP%2B%2BgiWCEXYI5szkPuVYbr%2FGpXA2jDx5NBb35kIqgJN7kv%2FANGDvlUnGjxCH7DeRL0Ntw%2FSjJ8PqonK7oGlmPaXwC6vzy9UYM0ztcN%2FYdYGaAnUIkLoH1EvT&X-Amz-Signature=285e540b685cf5186008b68f46134623ebdf4f5db66708763a75c2d8d8a1c0cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLFILGZW%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIATusVFmvsYsFRxEUHhCD3FGoQs%2F%2F8rNWGQzj%2BW0bdoXAiAOVy6t3b2ZeEA4R7kATAUHiqFQ0y5FlF9Bpk30rbMT2SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpy33X6fa9JzbiFwcKtwDabPwZI5neDxbyGKV74Ukwl2jVLuYRdaXkb3WsaqwFLoDUdifFwRFKrVPaXatn3V6jrYqnPizGgLcHtPopKPr7kPCK6Uw%2BEK4q4lvyKQNfjLk44EEwoKEr6xGK1nxX0VRX7Gk8NhnrdEc6vc%2BnGdJH0TrKHKFy%2FRs%2BmON2xytOuwrg%2FOx8RBpLiKNAXun3DIoA8NSbtWMfqIzKkaPnjD5B1TZ5AJ50vmKNRxoQDn1XHK7ZVmV8sj3PEzG07EAls86kuBG4IFFXLckl5aDtJSmHCdewdd6BD7px1ODQXfT3GzFJqTYblZ9zGvySXdlOe2YnVM6g%2Fu4dTsJs0jaX4rY2NebTeum2rRbE1%2B9j0j3ceiU0FZ5JaYiS2REFzFuQqqJw5lIwY%2FWQ0NOPHF5sy5gVYZiPI%2BD%2FjCs9pL4I5T7RBcflCi%2F7YJ0Q66NtJQChiUyG4%2FZXW0NXXSwEZwGd%2FjpANZ7uD6oBB2oB8c1ybtIKQrap7DYC0mLKgU2jvhQjgS0s4NzPzhQZAvlMDInFpjxZBb8e8DoSnopGdb%2Fh6mVSvVZJT3abwBcr0o32uKbBnj9fY4dCA2vFsRajHflWKWChlCxGVOPf%2Bqb%2F33L%2FYL6QAUFDoLjw4saPEcXpRQwvpCswgY6pgFTwUDyId96NpdXRYYish6GY77prkO8rMLlMtzYE3u9efVoqhKmyBCRySfhuR8ymOJQNnovisKb%2BeX70s9AJ4DtYCjlr%2BON7gfDgM0NSP%2B%2BgiWCEXYI5szkPuVYbr%2FGpXA2jDx5NBb35kIqgJN7kv%2FANGDvlUnGjxCH7DeRL0Ntw%2FSjJ8PqonK7oGlmPaXwC6vzy9UYM0ztcN%2FYdYGaAnUIkLoH1EvT&X-Amz-Signature=5e2073d791930ea5f3b48ede1117508bf3a60226d027d91ff25e8e4b8859db8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLFILGZW%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T201017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIATusVFmvsYsFRxEUHhCD3FGoQs%2F%2F8rNWGQzj%2BW0bdoXAiAOVy6t3b2ZeEA4R7kATAUHiqFQ0y5FlF9Bpk30rbMT2SqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpy33X6fa9JzbiFwcKtwDabPwZI5neDxbyGKV74Ukwl2jVLuYRdaXkb3WsaqwFLoDUdifFwRFKrVPaXatn3V6jrYqnPizGgLcHtPopKPr7kPCK6Uw%2BEK4q4lvyKQNfjLk44EEwoKEr6xGK1nxX0VRX7Gk8NhnrdEc6vc%2BnGdJH0TrKHKFy%2FRs%2BmON2xytOuwrg%2FOx8RBpLiKNAXun3DIoA8NSbtWMfqIzKkaPnjD5B1TZ5AJ50vmKNRxoQDn1XHK7ZVmV8sj3PEzG07EAls86kuBG4IFFXLckl5aDtJSmHCdewdd6BD7px1ODQXfT3GzFJqTYblZ9zGvySXdlOe2YnVM6g%2Fu4dTsJs0jaX4rY2NebTeum2rRbE1%2B9j0j3ceiU0FZ5JaYiS2REFzFuQqqJw5lIwY%2FWQ0NOPHF5sy5gVYZiPI%2BD%2FjCs9pL4I5T7RBcflCi%2F7YJ0Q66NtJQChiUyG4%2FZXW0NXXSwEZwGd%2FjpANZ7uD6oBB2oB8c1ybtIKQrap7DYC0mLKgU2jvhQjgS0s4NzPzhQZAvlMDInFpjxZBb8e8DoSnopGdb%2Fh6mVSvVZJT3abwBcr0o32uKbBnj9fY4dCA2vFsRajHflWKWChlCxGVOPf%2Bqb%2F33L%2FYL6QAUFDoLjw4saPEcXpRQwvpCswgY6pgFTwUDyId96NpdXRYYish6GY77prkO8rMLlMtzYE3u9efVoqhKmyBCRySfhuR8ymOJQNnovisKb%2BeX70s9AJ4DtYCjlr%2BON7gfDgM0NSP%2B%2BgiWCEXYI5szkPuVYbr%2FGpXA2jDx5NBb35kIqgJN7kv%2FANGDvlUnGjxCH7DeRL0Ntw%2FSjJ8PqonK7oGlmPaXwC6vzy9UYM0ztcN%2FYdYGaAnUIkLoH1EvT&X-Amz-Signature=7fc4780300d482f5d567b57ff35f398325984bf29800922d1ca4b33c59a6fcd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

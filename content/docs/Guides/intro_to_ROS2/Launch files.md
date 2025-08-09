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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PENVOQG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDjvwtx5bXK1UHfHqEBoR0fSOqIFLy7m%2Fs6xnftZvi0%2FAIhAMMB4TLdwvWeu0NJ0V0BVLByO5nXkBlT4Q5p7XPDgPN4KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXe1vcHjjD5GfheDQq3AN8qUZ68mJb4zUUnUpI6mjeqO31vxFKlIif58yO1JBXS15%2FXC2L4qpc5mtlPnUsvG9TffVyY96R0ZyNIwItHAAnYJ6EpnB%2BWPMxijZNQKg8yWQjRjr2v1IP9C52vp6UPQIcVAene%2FoDJFLQ7xjpWwI%2F3XaCeHWqWHy77Wo%2F%2FqjEBGCZTzObnV1%2FBF8%2BnQ5YTcYbKT3JiKa6Xg45YWSr5kQpSrt%2BQ0cngFRlOKPaCtOZASY3bnCxlm%2B8HCDYVbFumTysrhVBzAZoXtH9dJ%2Bpnmvi6kSAhTHEeYBx0lJRHHIFu22dPRwixi5Grz0BcOZMJXQk9Bu5mobjAZ4h4TPfs8esfgaI6iUClh25o%2B%2FZIVKW%2BFTDxrb%2FAFIBUpx4iEFW%2FliriCGG5LJAER1Blb5yCqUtZ3hb3ZfQG7HbYuHDA9s%2F%2F8ZTmEG3bIGXTOejgVMsfc6jlGLyUS3ockktPap1oLOjTGl4vbXC7NB2IyANtgnqTB%2FIqLg4LO3ivVNJXqX3c2jC1HCloMpUOocOOUy560xcTZQgI7vMVQ7i5pZHrRzsAydfJi0w4%2F1eqRKw4cW3JKdjYPCIlNSu1QP24jK8%2BEUyyYxWKwq42OXHXRqZDwUj4%2B8k6urLQG%2FgeCE68DDGxNvEBjqkAax2hDB9OQ6keD3BJOyl3OPOgKQ65O8CgXKRUUrXW80quwxgFQ8%2BfIj327JSIZre%2F0i%2BUhyHar%2FWvPOX%2BCWPd3%2FVDNeO8TrVl9ascMxJ92NCXewgHPp8905iIUuw%2BOFiPZPtoTAuubRPyFPf%2Fm2pnsIja%2FY9LdUC2L4RBzPKsZhpv9jBfbZD4c%2FGqxFaMo8hN0W4xFzXBAUqAD4QnO6uryWZuGvi&X-Amz-Signature=0524b1d6ea0faa34aa958989440af837926e2354ce38018e8afe43f1209c3e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PENVOQG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDjvwtx5bXK1UHfHqEBoR0fSOqIFLy7m%2Fs6xnftZvi0%2FAIhAMMB4TLdwvWeu0NJ0V0BVLByO5nXkBlT4Q5p7XPDgPN4KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXe1vcHjjD5GfheDQq3AN8qUZ68mJb4zUUnUpI6mjeqO31vxFKlIif58yO1JBXS15%2FXC2L4qpc5mtlPnUsvG9TffVyY96R0ZyNIwItHAAnYJ6EpnB%2BWPMxijZNQKg8yWQjRjr2v1IP9C52vp6UPQIcVAene%2FoDJFLQ7xjpWwI%2F3XaCeHWqWHy77Wo%2F%2FqjEBGCZTzObnV1%2FBF8%2BnQ5YTcYbKT3JiKa6Xg45YWSr5kQpSrt%2BQ0cngFRlOKPaCtOZASY3bnCxlm%2B8HCDYVbFumTysrhVBzAZoXtH9dJ%2Bpnmvi6kSAhTHEeYBx0lJRHHIFu22dPRwixi5Grz0BcOZMJXQk9Bu5mobjAZ4h4TPfs8esfgaI6iUClh25o%2B%2FZIVKW%2BFTDxrb%2FAFIBUpx4iEFW%2FliriCGG5LJAER1Blb5yCqUtZ3hb3ZfQG7HbYuHDA9s%2F%2F8ZTmEG3bIGXTOejgVMsfc6jlGLyUS3ockktPap1oLOjTGl4vbXC7NB2IyANtgnqTB%2FIqLg4LO3ivVNJXqX3c2jC1HCloMpUOocOOUy560xcTZQgI7vMVQ7i5pZHrRzsAydfJi0w4%2F1eqRKw4cW3JKdjYPCIlNSu1QP24jK8%2BEUyyYxWKwq42OXHXRqZDwUj4%2B8k6urLQG%2FgeCE68DDGxNvEBjqkAax2hDB9OQ6keD3BJOyl3OPOgKQ65O8CgXKRUUrXW80quwxgFQ8%2BfIj327JSIZre%2F0i%2BUhyHar%2FWvPOX%2BCWPd3%2FVDNeO8TrVl9ascMxJ92NCXewgHPp8905iIUuw%2BOFiPZPtoTAuubRPyFPf%2Fm2pnsIja%2FY9LdUC2L4RBzPKsZhpv9jBfbZD4c%2FGqxFaMo8hN0W4xFzXBAUqAD4QnO6uryWZuGvi&X-Amz-Signature=95332ae3fd90bff601a43621a3b25651eeaead661d64b95c5ac22e779b7b7859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PENVOQG%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDjvwtx5bXK1UHfHqEBoR0fSOqIFLy7m%2Fs6xnftZvi0%2FAIhAMMB4TLdwvWeu0NJ0V0BVLByO5nXkBlT4Q5p7XPDgPN4KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXe1vcHjjD5GfheDQq3AN8qUZ68mJb4zUUnUpI6mjeqO31vxFKlIif58yO1JBXS15%2FXC2L4qpc5mtlPnUsvG9TffVyY96R0ZyNIwItHAAnYJ6EpnB%2BWPMxijZNQKg8yWQjRjr2v1IP9C52vp6UPQIcVAene%2FoDJFLQ7xjpWwI%2F3XaCeHWqWHy77Wo%2F%2FqjEBGCZTzObnV1%2FBF8%2BnQ5YTcYbKT3JiKa6Xg45YWSr5kQpSrt%2BQ0cngFRlOKPaCtOZASY3bnCxlm%2B8HCDYVbFumTysrhVBzAZoXtH9dJ%2Bpnmvi6kSAhTHEeYBx0lJRHHIFu22dPRwixi5Grz0BcOZMJXQk9Bu5mobjAZ4h4TPfs8esfgaI6iUClh25o%2B%2FZIVKW%2BFTDxrb%2FAFIBUpx4iEFW%2FliriCGG5LJAER1Blb5yCqUtZ3hb3ZfQG7HbYuHDA9s%2F%2F8ZTmEG3bIGXTOejgVMsfc6jlGLyUS3ockktPap1oLOjTGl4vbXC7NB2IyANtgnqTB%2FIqLg4LO3ivVNJXqX3c2jC1HCloMpUOocOOUy560xcTZQgI7vMVQ7i5pZHrRzsAydfJi0w4%2F1eqRKw4cW3JKdjYPCIlNSu1QP24jK8%2BEUyyYxWKwq42OXHXRqZDwUj4%2B8k6urLQG%2FgeCE68DDGxNvEBjqkAax2hDB9OQ6keD3BJOyl3OPOgKQ65O8CgXKRUUrXW80quwxgFQ8%2BfIj327JSIZre%2F0i%2BUhyHar%2FWvPOX%2BCWPd3%2FVDNeO8TrVl9ascMxJ92NCXewgHPp8905iIUuw%2BOFiPZPtoTAuubRPyFPf%2Fm2pnsIja%2FY9LdUC2L4RBzPKsZhpv9jBfbZD4c%2FGqxFaMo8hN0W4xFzXBAUqAD4QnO6uryWZuGvi&X-Amz-Signature=87779d5241d7789c2abdfa99a8ae9b238855f8fd1e301d2cc2c20aeb6b5a1322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

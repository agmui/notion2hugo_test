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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHK6G4BG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIH2KO8QTPB1JbxWB3v4iBuGMxcWvqmkBj0qyJluHvOk1AiBb7ZOCgBd%2F0CmFE8x68PG99IminnVRg60Q%2F6%2F8oo2PYiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLvlPA78wPDHFjZY0KtwDjaTEp1ZXL%2F14Mjne3qLjZMyZSttfMR3kNhrFbkDwcC7%2BwZW5nE5h%2BgwJlGBCo0WFFF%2FX3waxvkpslB%2BUOqXen%2BxJbtyujYbquOnIQ4zTFYU5Tsh0YsIMYDO4tW21tBrCbuU2jK5zVRPntwIjdE8owXQoh5vlfHK61NX0iqZh0xA8wYznqEwvOk8D0%2FzTPJKIoqJDItuwOSEIPqaXrHoCQOCOQ51X4osgGx8EZLw9nNMD9TKXIR5YAaSYOQqCLnrx0KfgRK%2FxqmbIfPC34uyAOojkNtqp1tqUWUvmhLTsCiWQZIDMKbMzibTnfFw8APme82t4IylwksuiH5Zc2Nc4Hp68g3LBMtJjhOIQwSMMJA%2BRP%2Fny8M7vOC5IEvMTZujzmERJ9RyB%2BOIplvxpVfXjxzGvz3VUlNtSxIQ5fgRNIE9O3LazmhylZWUhZ3UXcqX7rG3hHntBevjTVDKo40owXUJ32a0CDzcXqhVyRmj9XKTPzU6%2Bo%2FVkPc9uL41iNRqzaO%2BP0K1uu%2FeVK8lK9gFvFDuhT%2BCuNy1wUZ%2Bf6Uv5tZ%2BDc9mqTAsPS2VcgUAYE5GwgqOebm47nqKbUxTpGlV9d%2B2lRYPt24OXa%2F0Sv9aURX1sL9lVBwcTDXFOWyEw1dGQwQY6pgGS1c5Bxj7wJ1D94tF2KyAvYNsQ93MMqjhAmWm39eUZnuP0ML9g4f1xjrJycDYJstqRjPhZGwy%2FZU4R6WcYwGKS9gJrMaE8i4Xf2r6KyJJcIkZj%2FvmtkmD2c0oSjeu2lUTuDZ7SslK1KH6JLa4XXJHlH2gId66ozj4J4i2ivXCjKy1lrpjfNpiXPODrRMSwkEHbePU0V0poXr0BYOmhiUw7bRHAO5J1&X-Amz-Signature=9ecac011273596bee83d4e10895935f51212741103f9a699f80ea15ec2779f75&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHK6G4BG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIH2KO8QTPB1JbxWB3v4iBuGMxcWvqmkBj0qyJluHvOk1AiBb7ZOCgBd%2F0CmFE8x68PG99IminnVRg60Q%2F6%2F8oo2PYiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLvlPA78wPDHFjZY0KtwDjaTEp1ZXL%2F14Mjne3qLjZMyZSttfMR3kNhrFbkDwcC7%2BwZW5nE5h%2BgwJlGBCo0WFFF%2FX3waxvkpslB%2BUOqXen%2BxJbtyujYbquOnIQ4zTFYU5Tsh0YsIMYDO4tW21tBrCbuU2jK5zVRPntwIjdE8owXQoh5vlfHK61NX0iqZh0xA8wYznqEwvOk8D0%2FzTPJKIoqJDItuwOSEIPqaXrHoCQOCOQ51X4osgGx8EZLw9nNMD9TKXIR5YAaSYOQqCLnrx0KfgRK%2FxqmbIfPC34uyAOojkNtqp1tqUWUvmhLTsCiWQZIDMKbMzibTnfFw8APme82t4IylwksuiH5Zc2Nc4Hp68g3LBMtJjhOIQwSMMJA%2BRP%2Fny8M7vOC5IEvMTZujzmERJ9RyB%2BOIplvxpVfXjxzGvz3VUlNtSxIQ5fgRNIE9O3LazmhylZWUhZ3UXcqX7rG3hHntBevjTVDKo40owXUJ32a0CDzcXqhVyRmj9XKTPzU6%2Bo%2FVkPc9uL41iNRqzaO%2BP0K1uu%2FeVK8lK9gFvFDuhT%2BCuNy1wUZ%2Bf6Uv5tZ%2BDc9mqTAsPS2VcgUAYE5GwgqOebm47nqKbUxTpGlV9d%2B2lRYPt24OXa%2F0Sv9aURX1sL9lVBwcTDXFOWyEw1dGQwQY6pgGS1c5Bxj7wJ1D94tF2KyAvYNsQ93MMqjhAmWm39eUZnuP0ML9g4f1xjrJycDYJstqRjPhZGwy%2FZU4R6WcYwGKS9gJrMaE8i4Xf2r6KyJJcIkZj%2FvmtkmD2c0oSjeu2lUTuDZ7SslK1KH6JLa4XXJHlH2gId66ozj4J4i2ivXCjKy1lrpjfNpiXPODrRMSwkEHbePU0V0poXr0BYOmhiUw7bRHAO5J1&X-Amz-Signature=9ae348ec072a0a36fa547cd5d34cc8c99880b3f7ee2d4cbfdea0932d8fdebee3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHK6G4BG%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T061258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJGMEQCIH2KO8QTPB1JbxWB3v4iBuGMxcWvqmkBj0qyJluHvOk1AiBb7ZOCgBd%2F0CmFE8x68PG99IminnVRg60Q%2F6%2F8oo2PYiqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLvlPA78wPDHFjZY0KtwDjaTEp1ZXL%2F14Mjne3qLjZMyZSttfMR3kNhrFbkDwcC7%2BwZW5nE5h%2BgwJlGBCo0WFFF%2FX3waxvkpslB%2BUOqXen%2BxJbtyujYbquOnIQ4zTFYU5Tsh0YsIMYDO4tW21tBrCbuU2jK5zVRPntwIjdE8owXQoh5vlfHK61NX0iqZh0xA8wYznqEwvOk8D0%2FzTPJKIoqJDItuwOSEIPqaXrHoCQOCOQ51X4osgGx8EZLw9nNMD9TKXIR5YAaSYOQqCLnrx0KfgRK%2FxqmbIfPC34uyAOojkNtqp1tqUWUvmhLTsCiWQZIDMKbMzibTnfFw8APme82t4IylwksuiH5Zc2Nc4Hp68g3LBMtJjhOIQwSMMJA%2BRP%2Fny8M7vOC5IEvMTZujzmERJ9RyB%2BOIplvxpVfXjxzGvz3VUlNtSxIQ5fgRNIE9O3LazmhylZWUhZ3UXcqX7rG3hHntBevjTVDKo40owXUJ32a0CDzcXqhVyRmj9XKTPzU6%2Bo%2FVkPc9uL41iNRqzaO%2BP0K1uu%2FeVK8lK9gFvFDuhT%2BCuNy1wUZ%2Bf6Uv5tZ%2BDc9mqTAsPS2VcgUAYE5GwgqOebm47nqKbUxTpGlV9d%2B2lRYPt24OXa%2F0Sv9aURX1sL9lVBwcTDXFOWyEw1dGQwQY6pgGS1c5Bxj7wJ1D94tF2KyAvYNsQ93MMqjhAmWm39eUZnuP0ML9g4f1xjrJycDYJstqRjPhZGwy%2FZU4R6WcYwGKS9gJrMaE8i4Xf2r6KyJJcIkZj%2FvmtkmD2c0oSjeu2lUTuDZ7SslK1KH6JLa4XXJHlH2gId66ozj4J4i2ivXCjKy1lrpjfNpiXPODrRMSwkEHbePU0V0poXr0BYOmhiUw7bRHAO5J1&X-Amz-Signature=4d0100d6f5c6c08feb9c4ec33b476d74462de396ca0dec931e952c63ab3f59eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

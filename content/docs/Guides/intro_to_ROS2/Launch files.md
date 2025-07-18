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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7KOBVU2%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDSBBzPg9vJTgUaUezDjxL2y6WGGyDOuhb%2FbvIF9p6FgQIgPl1ikLDarDVGWRo1%2F8MWcI2Rt26vJ9HTSYhHmIL95PUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLXZiolA39NF0xTbCrcA28SItQ1OnWhBuycDhehv0P2BtAd1n4GTra3QZzS6YexGK2q0MzEEmMIOCeykI7qxHJp0qiMinjHALkdQjh0dwyVurqU5nry%2B7i3%2FJwCnuYlJjLeScu6sGxDfECaqGYEKxRYOtHaqx3%2FEV3aaCF2RMhBW1C14JWxU9bBOcvMUQx7arWLl8CGCyHuXyZVs01gKqMe4SRc7MqvgWZycP2CSxkpJgjqUGV8F%2BFFp8i6GSagXwQ55ecTqb9kb%2FQdTYnOC%2FvVGP3FESBZbEXdoFcG2kLQCsbxoeC9HwD0MT%2BWIEAEdjOfklQLWe0BuJZaDdLvhcL2rFX5SSdTgtY40w4PwHqXxyI5TBAOCA5o%2FJT9vtgkpINu%2FNWmAQ%2FepnrFF99sOoS7Y2USsfly%2BMOK%2FbnUEnWNjo83ZTlAFIkxy5GZ%2BdDJHGSrNsW9jazE9GxrPnJaqmijDhwQOgWpFgTS9HZZCyuE%2BE2uMXkde6%2F%2FBS1lx1M%2FJ4RaldkDUdbMmO0AEx33eiOEiiACQ5oY967weqUEjywXbUCG1w2El98aw4GIf2FBuazIkmr0UdpcWf2M%2Bd%2F2NC3BLUxCpn0B%2FUHvi6CV6aNk%2BsI5UFoN7TT3ixMBPKJQWBvJ75ef%2BdVRgDpaMJKL68MGOqUBa5bRZrYfW5iW1Pw5C2IosLrtWmHRYthmVOXDYQBDkwgBXoXyJIBALtJLoa2t%2FPRYyM8YKxnNvBP81zrqbIj%2BQHceEZ6trtur%2FXx3BCmYHnVBAOKXgFZh0IsuW%2FgyoneVL03Js%2BAHo9yt85bDVjWSy%2BRvkOHHT3pWpGoXJ3RdqYuOspaHVdvuGoXJT%2FA4SELTLZDzj8PVQayoTGCcfsNtdesQF%2FiY&X-Amz-Signature=e06ad11571476a301097649ddc7db71702ba0f231321f4db1e3191d1ca0f2ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7KOBVU2%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDSBBzPg9vJTgUaUezDjxL2y6WGGyDOuhb%2FbvIF9p6FgQIgPl1ikLDarDVGWRo1%2F8MWcI2Rt26vJ9HTSYhHmIL95PUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLXZiolA39NF0xTbCrcA28SItQ1OnWhBuycDhehv0P2BtAd1n4GTra3QZzS6YexGK2q0MzEEmMIOCeykI7qxHJp0qiMinjHALkdQjh0dwyVurqU5nry%2B7i3%2FJwCnuYlJjLeScu6sGxDfECaqGYEKxRYOtHaqx3%2FEV3aaCF2RMhBW1C14JWxU9bBOcvMUQx7arWLl8CGCyHuXyZVs01gKqMe4SRc7MqvgWZycP2CSxkpJgjqUGV8F%2BFFp8i6GSagXwQ55ecTqb9kb%2FQdTYnOC%2FvVGP3FESBZbEXdoFcG2kLQCsbxoeC9HwD0MT%2BWIEAEdjOfklQLWe0BuJZaDdLvhcL2rFX5SSdTgtY40w4PwHqXxyI5TBAOCA5o%2FJT9vtgkpINu%2FNWmAQ%2FepnrFF99sOoS7Y2USsfly%2BMOK%2FbnUEnWNjo83ZTlAFIkxy5GZ%2BdDJHGSrNsW9jazE9GxrPnJaqmijDhwQOgWpFgTS9HZZCyuE%2BE2uMXkde6%2F%2FBS1lx1M%2FJ4RaldkDUdbMmO0AEx33eiOEiiACQ5oY967weqUEjywXbUCG1w2El98aw4GIf2FBuazIkmr0UdpcWf2M%2Bd%2F2NC3BLUxCpn0B%2FUHvi6CV6aNk%2BsI5UFoN7TT3ixMBPKJQWBvJ75ef%2BdVRgDpaMJKL68MGOqUBa5bRZrYfW5iW1Pw5C2IosLrtWmHRYthmVOXDYQBDkwgBXoXyJIBALtJLoa2t%2FPRYyM8YKxnNvBP81zrqbIj%2BQHceEZ6trtur%2FXx3BCmYHnVBAOKXgFZh0IsuW%2FgyoneVL03Js%2BAHo9yt85bDVjWSy%2BRvkOHHT3pWpGoXJ3RdqYuOspaHVdvuGoXJT%2FA4SELTLZDzj8PVQayoTGCcfsNtdesQF%2FiY&X-Amz-Signature=d625a8a57ae011937d7ffee11a743cbe1728bbe32d1dddc2cf35d2e1ecba3053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7KOBVU2%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDSBBzPg9vJTgUaUezDjxL2y6WGGyDOuhb%2FbvIF9p6FgQIgPl1ikLDarDVGWRo1%2F8MWcI2Rt26vJ9HTSYhHmIL95PUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLXZiolA39NF0xTbCrcA28SItQ1OnWhBuycDhehv0P2BtAd1n4GTra3QZzS6YexGK2q0MzEEmMIOCeykI7qxHJp0qiMinjHALkdQjh0dwyVurqU5nry%2B7i3%2FJwCnuYlJjLeScu6sGxDfECaqGYEKxRYOtHaqx3%2FEV3aaCF2RMhBW1C14JWxU9bBOcvMUQx7arWLl8CGCyHuXyZVs01gKqMe4SRc7MqvgWZycP2CSxkpJgjqUGV8F%2BFFp8i6GSagXwQ55ecTqb9kb%2FQdTYnOC%2FvVGP3FESBZbEXdoFcG2kLQCsbxoeC9HwD0MT%2BWIEAEdjOfklQLWe0BuJZaDdLvhcL2rFX5SSdTgtY40w4PwHqXxyI5TBAOCA5o%2FJT9vtgkpINu%2FNWmAQ%2FepnrFF99sOoS7Y2USsfly%2BMOK%2FbnUEnWNjo83ZTlAFIkxy5GZ%2BdDJHGSrNsW9jazE9GxrPnJaqmijDhwQOgWpFgTS9HZZCyuE%2BE2uMXkde6%2F%2FBS1lx1M%2FJ4RaldkDUdbMmO0AEx33eiOEiiACQ5oY967weqUEjywXbUCG1w2El98aw4GIf2FBuazIkmr0UdpcWf2M%2Bd%2F2NC3BLUxCpn0B%2FUHvi6CV6aNk%2BsI5UFoN7TT3ixMBPKJQWBvJ75ef%2BdVRgDpaMJKL68MGOqUBa5bRZrYfW5iW1Pw5C2IosLrtWmHRYthmVOXDYQBDkwgBXoXyJIBALtJLoa2t%2FPRYyM8YKxnNvBP81zrqbIj%2BQHceEZ6trtur%2FXx3BCmYHnVBAOKXgFZh0IsuW%2FgyoneVL03Js%2BAHo9yt85bDVjWSy%2BRvkOHHT3pWpGoXJ3RdqYuOspaHVdvuGoXJT%2FA4SELTLZDzj8PVQayoTGCcfsNtdesQF%2FiY&X-Amz-Signature=118c12d19ed523dd3173037c7f5c565fb4775ca39bb31a3ccd073ad58ca9c58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

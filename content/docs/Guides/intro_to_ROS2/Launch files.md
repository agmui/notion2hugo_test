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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDV3EH54%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcXNNVQghA8LXHqbdahBAUgouoGiKrjyTlUgqAYH2woAiBmnxQJ4wst1oPHjJzUKvtn9a2akfWsuVO0u88Ido8uQyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVPl1aaH0L1PgPDkKtwDwnWbdKWDFZGLdDfHn7uR455TPiu2O9skRTUnUV9hqk2lxjmR8nHiyKsMKSr6VOE3rgstOXexHpdN0YiMg%2FFnQfl4WlSrwWRTW4QBy4hsI2PA4HR%2BRlb%2BuwTQ2JBQJoQWTWjK8qUSj2uKlr3kIUy2WJrEiYJHyRAVPE0H1wleqeI54PznaDzpH0MVvZEgpos3wDVx2XkcrfaPGA5gKDIYwBLCl2TdeKoF8F7pDUXcYG%2BN2gGvGsuoQk3jydHLPQsdZVVzzf%2BlQTCuCfVfKnnkYjyXdNrcR%2F0S5BYTRSOPingyZdZirqRiiu9ytRN6fLXIyUhwJmA69dAeRnnW%2BchK1fHob9HTynKdCoRMxmnCw5gw%2F%2BJ0lqIWQXJnjhfCMBpgiDRlfD5Hj7cLeygEXluyVEM1u8CwntTxcw3f34wG3g4JcrUrzowd1K7pNypuc8%2B6xNZhYgfQIGV2O%2BMfW%2BR9BXk%2B6Lmi2aRgxOy2nnv%2BKwnBd4mpmN6WxKIwe0wQLh6xzGBx%2BX%2B2iJxnXPhVYzoRwCU8Ib5nu4bv3wQzC3QgTisZ1yWEbRpqI3eqFgDwF2oMgRzD7uyvnhaGvKKMKg4tXfYlZFVF%2FkNjdrt6bqploOf1swmSsc86qa01Migw29LYvQY6pgFQRGKQPpYw3e3RYXQauloAWsH0tmSExNEYu8KIEBp4WaYjdsfofPBAR%2FXCSkfdOiAg0yB2VKWdnDOKGqfVwas1cE1R8SsfnoqIsw6%2FuleI3YGYuItWLpnNoO0cBOQl0bAm592NCfOYKYNEaAEpkM3MJocA%2FZ5%2FoHFSMeThw2EozXPamIpb9r1JYUYh6IEwOrGqxbPYrJNTiRaBLl8HHCYQwqsyeYju&X-Amz-Signature=c33226dfa0c2a9371c7e96eb8761fbb7c60431adc41a1cac2addb002a37150a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDV3EH54%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcXNNVQghA8LXHqbdahBAUgouoGiKrjyTlUgqAYH2woAiBmnxQJ4wst1oPHjJzUKvtn9a2akfWsuVO0u88Ido8uQyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVPl1aaH0L1PgPDkKtwDwnWbdKWDFZGLdDfHn7uR455TPiu2O9skRTUnUV9hqk2lxjmR8nHiyKsMKSr6VOE3rgstOXexHpdN0YiMg%2FFnQfl4WlSrwWRTW4QBy4hsI2PA4HR%2BRlb%2BuwTQ2JBQJoQWTWjK8qUSj2uKlr3kIUy2WJrEiYJHyRAVPE0H1wleqeI54PznaDzpH0MVvZEgpos3wDVx2XkcrfaPGA5gKDIYwBLCl2TdeKoF8F7pDUXcYG%2BN2gGvGsuoQk3jydHLPQsdZVVzzf%2BlQTCuCfVfKnnkYjyXdNrcR%2F0S5BYTRSOPingyZdZirqRiiu9ytRN6fLXIyUhwJmA69dAeRnnW%2BchK1fHob9HTynKdCoRMxmnCw5gw%2F%2BJ0lqIWQXJnjhfCMBpgiDRlfD5Hj7cLeygEXluyVEM1u8CwntTxcw3f34wG3g4JcrUrzowd1K7pNypuc8%2B6xNZhYgfQIGV2O%2BMfW%2BR9BXk%2B6Lmi2aRgxOy2nnv%2BKwnBd4mpmN6WxKIwe0wQLh6xzGBx%2BX%2B2iJxnXPhVYzoRwCU8Ib5nu4bv3wQzC3QgTisZ1yWEbRpqI3eqFgDwF2oMgRzD7uyvnhaGvKKMKg4tXfYlZFVF%2FkNjdrt6bqploOf1swmSsc86qa01Migw29LYvQY6pgFQRGKQPpYw3e3RYXQauloAWsH0tmSExNEYu8KIEBp4WaYjdsfofPBAR%2FXCSkfdOiAg0yB2VKWdnDOKGqfVwas1cE1R8SsfnoqIsw6%2FuleI3YGYuItWLpnNoO0cBOQl0bAm592NCfOYKYNEaAEpkM3MJocA%2FZ5%2FoHFSMeThw2EozXPamIpb9r1JYUYh6IEwOrGqxbPYrJNTiRaBLl8HHCYQwqsyeYju&X-Amz-Signature=cc3fafde57b3e9ef8ed9e5c3e27a6f4edad8e336adc7fdeab3738e7ac6a14e24&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDV3EH54%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcXNNVQghA8LXHqbdahBAUgouoGiKrjyTlUgqAYH2woAiBmnxQJ4wst1oPHjJzUKvtn9a2akfWsuVO0u88Ido8uQyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkVPl1aaH0L1PgPDkKtwDwnWbdKWDFZGLdDfHn7uR455TPiu2O9skRTUnUV9hqk2lxjmR8nHiyKsMKSr6VOE3rgstOXexHpdN0YiMg%2FFnQfl4WlSrwWRTW4QBy4hsI2PA4HR%2BRlb%2BuwTQ2JBQJoQWTWjK8qUSj2uKlr3kIUy2WJrEiYJHyRAVPE0H1wleqeI54PznaDzpH0MVvZEgpos3wDVx2XkcrfaPGA5gKDIYwBLCl2TdeKoF8F7pDUXcYG%2BN2gGvGsuoQk3jydHLPQsdZVVzzf%2BlQTCuCfVfKnnkYjyXdNrcR%2F0S5BYTRSOPingyZdZirqRiiu9ytRN6fLXIyUhwJmA69dAeRnnW%2BchK1fHob9HTynKdCoRMxmnCw5gw%2F%2BJ0lqIWQXJnjhfCMBpgiDRlfD5Hj7cLeygEXluyVEM1u8CwntTxcw3f34wG3g4JcrUrzowd1K7pNypuc8%2B6xNZhYgfQIGV2O%2BMfW%2BR9BXk%2B6Lmi2aRgxOy2nnv%2BKwnBd4mpmN6WxKIwe0wQLh6xzGBx%2BX%2B2iJxnXPhVYzoRwCU8Ib5nu4bv3wQzC3QgTisZ1yWEbRpqI3eqFgDwF2oMgRzD7uyvnhaGvKKMKg4tXfYlZFVF%2FkNjdrt6bqploOf1swmSsc86qa01Migw29LYvQY6pgFQRGKQPpYw3e3RYXQauloAWsH0tmSExNEYu8KIEBp4WaYjdsfofPBAR%2FXCSkfdOiAg0yB2VKWdnDOKGqfVwas1cE1R8SsfnoqIsw6%2FuleI3YGYuItWLpnNoO0cBOQl0bAm592NCfOYKYNEaAEpkM3MJocA%2FZ5%2FoHFSMeThw2EozXPamIpb9r1JYUYh6IEwOrGqxbPYrJNTiRaBLl8HHCYQwqsyeYju&X-Amz-Signature=e3d4d476f20782e48ab0cd8ee0c504ac3993dacc004434b83ba2e595daf7a7a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

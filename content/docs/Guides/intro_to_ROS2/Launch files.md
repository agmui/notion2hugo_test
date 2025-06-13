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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB5LMBNS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIB157um1RHkVWhIq2M0IV%2B6bc%2BXsPUTtkskSIlanlZ3NAiAb7oQjj1Ngr7yqEXKN7nEdWG3%2FcOUGnbJFGBeKmRGW%2BSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMli8MUkB5npR0hKX%2BKtwDxgsIPSw8qKtRTemqWHZtlBlD%2BPFv25KfZgCIpEdm%2FiloG7g26HpVv6dB18f57hytcWAq8pl%2BUUyoBDMOAJT7TLu3RbqP%2FzBwUQp5BLXmREGgTJGHNUpZxT7jRyxRqPL0NFImLGeSqpyYp2N37SkxKE9cFDfu5aB8g5JF30iGQDq2vxkC%2F5IFT6VJ%2B4f1y93WmTPa5kjzLWxSGnf6AEbsmLNxVasz4bqj7ixk3dH2o5S6E1I8V5x4OhaMPxebgpKlaRkGk5JMJrCO6%2F4tUCtg4DZf2S19SOy6fJ9aHhJarOcaTLw9mJXQ5GOLbSzMc92oEJHKL3jaEp7Lb2SpHjAZB3SBOwf%2FMxO9080DxNHC9Omm3R%2F2igFBZVpSLcyDHFPktA0XG2vvJKuhArw9Bn3G4sJIMfeF1sTKRWNQTfmGi0VRKlxK33Agk6tTxhSILJQm3%2FWafcL%2F7UjGCLh6XcZd5Nl7RxA6Vj2BWJDk3kXmApHWAndmNIhb%2FQz%2BEa1Hs3fqjI8wKa2OJMGNrRceE3lWTGNBXOKRfP0UOchuBAWBiB2J9ei1oxAhfwxajOqKTMe3lZGvRqjC8vsT0AC1%2BNZuoQJiukOpjp46jc2ZpEDDSLkwoQWzWO5nEBDnqJ8wj6qwwgY6pgF3OzKrlRmTlE8lwke6xCgBIc1reEV6r3XuVOOGh2vUZjoz75alysEb9L1qNXG5eM1%2B%2FYI6sooZfQUDxf27xK0ul0DhI4qWNeHTxLUBMZLwK1GSsx9aEKA52lGrQlFInTSI0Ieg6foSRDuRduZ2ssgjva1j9VIy0XpiBmWM%2BTatsVhQguC7%2FdvTyJ41zv907Vjxn6CO286ap91GZEn8CK2uK8rkRLZw&X-Amz-Signature=508654ead8bd41dab05c04591446c68c35afcdb1f3f53c7b3c6ab90b040cb019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB5LMBNS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIB157um1RHkVWhIq2M0IV%2B6bc%2BXsPUTtkskSIlanlZ3NAiAb7oQjj1Ngr7yqEXKN7nEdWG3%2FcOUGnbJFGBeKmRGW%2BSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMli8MUkB5npR0hKX%2BKtwDxgsIPSw8qKtRTemqWHZtlBlD%2BPFv25KfZgCIpEdm%2FiloG7g26HpVv6dB18f57hytcWAq8pl%2BUUyoBDMOAJT7TLu3RbqP%2FzBwUQp5BLXmREGgTJGHNUpZxT7jRyxRqPL0NFImLGeSqpyYp2N37SkxKE9cFDfu5aB8g5JF30iGQDq2vxkC%2F5IFT6VJ%2B4f1y93WmTPa5kjzLWxSGnf6AEbsmLNxVasz4bqj7ixk3dH2o5S6E1I8V5x4OhaMPxebgpKlaRkGk5JMJrCO6%2F4tUCtg4DZf2S19SOy6fJ9aHhJarOcaTLw9mJXQ5GOLbSzMc92oEJHKL3jaEp7Lb2SpHjAZB3SBOwf%2FMxO9080DxNHC9Omm3R%2F2igFBZVpSLcyDHFPktA0XG2vvJKuhArw9Bn3G4sJIMfeF1sTKRWNQTfmGi0VRKlxK33Agk6tTxhSILJQm3%2FWafcL%2F7UjGCLh6XcZd5Nl7RxA6Vj2BWJDk3kXmApHWAndmNIhb%2FQz%2BEa1Hs3fqjI8wKa2OJMGNrRceE3lWTGNBXOKRfP0UOchuBAWBiB2J9ei1oxAhfwxajOqKTMe3lZGvRqjC8vsT0AC1%2BNZuoQJiukOpjp46jc2ZpEDDSLkwoQWzWO5nEBDnqJ8wj6qwwgY6pgF3OzKrlRmTlE8lwke6xCgBIc1reEV6r3XuVOOGh2vUZjoz75alysEb9L1qNXG5eM1%2B%2FYI6sooZfQUDxf27xK0ul0DhI4qWNeHTxLUBMZLwK1GSsx9aEKA52lGrQlFInTSI0Ieg6foSRDuRduZ2ssgjva1j9VIy0XpiBmWM%2BTatsVhQguC7%2FdvTyJ41zv907Vjxn6CO286ap91GZEn8CK2uK8rkRLZw&X-Amz-Signature=12e5e9543088a36696ed80652f1f3d5b9b50048f61f5e2dd1ca8cdb5a645552f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB5LMBNS%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIB157um1RHkVWhIq2M0IV%2B6bc%2BXsPUTtkskSIlanlZ3NAiAb7oQjj1Ngr7yqEXKN7nEdWG3%2FcOUGnbJFGBeKmRGW%2BSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMli8MUkB5npR0hKX%2BKtwDxgsIPSw8qKtRTemqWHZtlBlD%2BPFv25KfZgCIpEdm%2FiloG7g26HpVv6dB18f57hytcWAq8pl%2BUUyoBDMOAJT7TLu3RbqP%2FzBwUQp5BLXmREGgTJGHNUpZxT7jRyxRqPL0NFImLGeSqpyYp2N37SkxKE9cFDfu5aB8g5JF30iGQDq2vxkC%2F5IFT6VJ%2B4f1y93WmTPa5kjzLWxSGnf6AEbsmLNxVasz4bqj7ixk3dH2o5S6E1I8V5x4OhaMPxebgpKlaRkGk5JMJrCO6%2F4tUCtg4DZf2S19SOy6fJ9aHhJarOcaTLw9mJXQ5GOLbSzMc92oEJHKL3jaEp7Lb2SpHjAZB3SBOwf%2FMxO9080DxNHC9Omm3R%2F2igFBZVpSLcyDHFPktA0XG2vvJKuhArw9Bn3G4sJIMfeF1sTKRWNQTfmGi0VRKlxK33Agk6tTxhSILJQm3%2FWafcL%2F7UjGCLh6XcZd5Nl7RxA6Vj2BWJDk3kXmApHWAndmNIhb%2FQz%2BEa1Hs3fqjI8wKa2OJMGNrRceE3lWTGNBXOKRfP0UOchuBAWBiB2J9ei1oxAhfwxajOqKTMe3lZGvRqjC8vsT0AC1%2BNZuoQJiukOpjp46jc2ZpEDDSLkwoQWzWO5nEBDnqJ8wj6qwwgY6pgF3OzKrlRmTlE8lwke6xCgBIc1reEV6r3XuVOOGh2vUZjoz75alysEb9L1qNXG5eM1%2B%2FYI6sooZfQUDxf27xK0ul0DhI4qWNeHTxLUBMZLwK1GSsx9aEKA52lGrQlFInTSI0Ieg6foSRDuRduZ2ssgjva1j9VIy0XpiBmWM%2BTatsVhQguC7%2FdvTyJ41zv907Vjxn6CO286ap91GZEn8CK2uK8rkRLZw&X-Amz-Signature=126498654a31802757cd30e9e44d7eba80a112139304195210e1ce24c1540bae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

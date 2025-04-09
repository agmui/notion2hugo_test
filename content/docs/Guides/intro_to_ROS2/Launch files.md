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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXU3EQ3S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICJpHKS4iupnqtuAZJygBfikuKT3LixdNu8AcPB1wO%2BhAiEA9Ykl09Rk7FiGky9xdVQ3HfiMQ43FnI%2FIaUS9xGyLd28qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBF2%2FMVftkWOkHCabircA5AwIjBt7VTWkoySh7uyuVNd44dCavD3ePLFAmNfI7Bg0Fkct1gHBNpn9i5riuihU6unbQENK%2B4ckpPIzEVeEzzsOutP2HAz84ByruT6syPyrL8l42%2FRC9%2BOlhl3w4m50opzWLKFSxnf6S7CWG5sltr6xc2ZNwEUmw52xtn2i2kw3t4tDLBExLeHLTaahvifX55POEaLZVeRWG%2BBXtRtnt2Mkgqi%2B8T1L1Gh7FvT%2B1OQ5%2BS3Jz%2FYRreYYwJ4MqBloDzNq4zy%2BJFmY6uQDtxbndFS1pObSbT2zKdBeZgu2gmT24BomzfQyuUHFovRK0BH9rx%2B71Juj9390qbqoTbUBUzT26WSb5JE8YO4dgHXA%2F5ZzTFeSgthxbAwxkq0IGDsD27saQXShayq7oqRebDztLZZKOyXl8G%2BKfiAkL7bR9ZYhoZbiCVjoD1hRUnV4qJ1f96O7JRYiEFrVia4nH2thDi4qIyMMUnskyNoCe4XEChIgVOuSQ9UzC%2FKhDmvuq%2BlqRCpFido576yz0ErE3QMvUKkd%2BRT4j9dB8sBgc10M3CmcJMkKhvQV4dzSvER7B3AnMJdptwNvD5N96Z1SoTn43uzPDTKeOL16tYZ5MHvMnPzOWZ6Qed1WBRbfP6EMLSj178GOqUBxWeTTjLfZN9hBgG1FCESbKCwMPF74z5Kq6I1Lokq16LfqVVZX8KmitQA5VguoH14TPcB71k24HHMfd9MyBauv3gToeeb6oChYefZ2nSLKeO6sde%2FsiFQkorlWLyfmtYh3IyQdmnU5GmwoXsS87vpr%2B1OtH22OerVat%2BOJrtLHtEE8PyFI8e0l69bYAdAklXqwHO7VYbza%2Bn9o6ZY52dcvEvZna4S&X-Amz-Signature=57d0370f2c9ea93bda9cbdf22d361bf88270ea507b4aeb2802de022b0cbf4f73&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXU3EQ3S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICJpHKS4iupnqtuAZJygBfikuKT3LixdNu8AcPB1wO%2BhAiEA9Ykl09Rk7FiGky9xdVQ3HfiMQ43FnI%2FIaUS9xGyLd28qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBF2%2FMVftkWOkHCabircA5AwIjBt7VTWkoySh7uyuVNd44dCavD3ePLFAmNfI7Bg0Fkct1gHBNpn9i5riuihU6unbQENK%2B4ckpPIzEVeEzzsOutP2HAz84ByruT6syPyrL8l42%2FRC9%2BOlhl3w4m50opzWLKFSxnf6S7CWG5sltr6xc2ZNwEUmw52xtn2i2kw3t4tDLBExLeHLTaahvifX55POEaLZVeRWG%2BBXtRtnt2Mkgqi%2B8T1L1Gh7FvT%2B1OQ5%2BS3Jz%2FYRreYYwJ4MqBloDzNq4zy%2BJFmY6uQDtxbndFS1pObSbT2zKdBeZgu2gmT24BomzfQyuUHFovRK0BH9rx%2B71Juj9390qbqoTbUBUzT26WSb5JE8YO4dgHXA%2F5ZzTFeSgthxbAwxkq0IGDsD27saQXShayq7oqRebDztLZZKOyXl8G%2BKfiAkL7bR9ZYhoZbiCVjoD1hRUnV4qJ1f96O7JRYiEFrVia4nH2thDi4qIyMMUnskyNoCe4XEChIgVOuSQ9UzC%2FKhDmvuq%2BlqRCpFido576yz0ErE3QMvUKkd%2BRT4j9dB8sBgc10M3CmcJMkKhvQV4dzSvER7B3AnMJdptwNvD5N96Z1SoTn43uzPDTKeOL16tYZ5MHvMnPzOWZ6Qed1WBRbfP6EMLSj178GOqUBxWeTTjLfZN9hBgG1FCESbKCwMPF74z5Kq6I1Lokq16LfqVVZX8KmitQA5VguoH14TPcB71k24HHMfd9MyBauv3gToeeb6oChYefZ2nSLKeO6sde%2FsiFQkorlWLyfmtYh3IyQdmnU5GmwoXsS87vpr%2B1OtH22OerVat%2BOJrtLHtEE8PyFI8e0l69bYAdAklXqwHO7VYbza%2Bn9o6ZY52dcvEvZna4S&X-Amz-Signature=2eb4213e9567908cceb1044e79e8c60f0e52e9e0d021ac40ed152a5a648daa88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXU3EQ3S%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICJpHKS4iupnqtuAZJygBfikuKT3LixdNu8AcPB1wO%2BhAiEA9Ykl09Rk7FiGky9xdVQ3HfiMQ43FnI%2FIaUS9xGyLd28qiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBF2%2FMVftkWOkHCabircA5AwIjBt7VTWkoySh7uyuVNd44dCavD3ePLFAmNfI7Bg0Fkct1gHBNpn9i5riuihU6unbQENK%2B4ckpPIzEVeEzzsOutP2HAz84ByruT6syPyrL8l42%2FRC9%2BOlhl3w4m50opzWLKFSxnf6S7CWG5sltr6xc2ZNwEUmw52xtn2i2kw3t4tDLBExLeHLTaahvifX55POEaLZVeRWG%2BBXtRtnt2Mkgqi%2B8T1L1Gh7FvT%2B1OQ5%2BS3Jz%2FYRreYYwJ4MqBloDzNq4zy%2BJFmY6uQDtxbndFS1pObSbT2zKdBeZgu2gmT24BomzfQyuUHFovRK0BH9rx%2B71Juj9390qbqoTbUBUzT26WSb5JE8YO4dgHXA%2F5ZzTFeSgthxbAwxkq0IGDsD27saQXShayq7oqRebDztLZZKOyXl8G%2BKfiAkL7bR9ZYhoZbiCVjoD1hRUnV4qJ1f96O7JRYiEFrVia4nH2thDi4qIyMMUnskyNoCe4XEChIgVOuSQ9UzC%2FKhDmvuq%2BlqRCpFido576yz0ErE3QMvUKkd%2BRT4j9dB8sBgc10M3CmcJMkKhvQV4dzSvER7B3AnMJdptwNvD5N96Z1SoTn43uzPDTKeOL16tYZ5MHvMnPzOWZ6Qed1WBRbfP6EMLSj178GOqUBxWeTTjLfZN9hBgG1FCESbKCwMPF74z5Kq6I1Lokq16LfqVVZX8KmitQA5VguoH14TPcB71k24HHMfd9MyBauv3gToeeb6oChYefZ2nSLKeO6sde%2FsiFQkorlWLyfmtYh3IyQdmnU5GmwoXsS87vpr%2B1OtH22OerVat%2BOJrtLHtEE8PyFI8e0l69bYAdAklXqwHO7VYbza%2Bn9o6ZY52dcvEvZna4S&X-Amz-Signature=1f65d20557510337947e53437a9647cd19fbf9d6fb99ae0f5491940d94f33327&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

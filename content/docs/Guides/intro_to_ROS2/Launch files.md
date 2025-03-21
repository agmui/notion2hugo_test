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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEDRV7W%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDV%2BEEM6XZ4iVeTn%2FBGAkxnlcjYfmR5jXojX2TcIlQyLgIhANVkg435bcBxZBN7t2lA5ErU2yWYd3wMC1G2KYBtVsrnKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsmv7TfNGxRZGuu%2Fgq3AO5gxY5Sb2SuNypKcVyifnzT7vHKfm8gKA6IZFasxREpsKoh1GIQ5EWGUceKNXiSHFyZlquSfCNTtYPhMvDuhwCFhvgypejdbAoShk6kOmfL2gO7ASsoZFyZEJAJqQWH4s%2FvNKR%2FahoN4mAprrk%2FIGc0BOWGKZwNXNggtk0K3NrQqq75ZmsLJKSXCaEfSbw1oNNLaz0moRkNlWMIL62QodpFLyvsYAP8VKVmNeUe52XA6qKmDYJ7eldd1n7%2BiMsD8PbgM2V8WvFy9kVjzwIhFYewosIbD4YKHyPsoI5NpTbU%2Bgnd9O0Xi9CUOeXovMQfjLxq%2B7uMPycGS5R5v0vQ1lvqg6g1nW0vF%2BE%2FaGCWuThxPzIeKVFlOa%2FNI%2F4o7Naj30w2bRntRUAzdTk9BJ6mLnQs72vx3BggMqe0Gp%2Fc8XiutfdbzL0DcEcVZuCQJzRQ4f9%2Bd609n1VDkyuPuHd1hm05G7jWHh1Oqu19S15NmtL4Pbsb2wrJTpEhZnmHIoL%2B7BEgW8OKxa%2BTH5SFRPdFD29RFCZGrnwmdQ5ncoj7Mv0cxEbjIBg1Nux2xq6Mgp59vme6CzjUAO0Y2jCmdeNs7q5tuhO5%2BNPo%2BZ8WBu%2BODyCkWh5YBGtBJigj5kz0DCO2%2FW%2BBjqkAQm3add%2FCloshWUgtKw8M%2BhSvGfq3P1eUf1zCdFqlnD8JPH9LkCX5HFp2FX8jbECeo1S%2BFKrHdYpnRQr89w5nYBR2Zy2ITOBsNOWe%2Bp8JKBLninyE6FiBySHaznURpkzYr9XRczX6bM%2Bqek90bJsMkTgLbRhUQtrgHVzkE0zvlsZUJgT7NuVbZcN%2F6twS%2Blo28l0S3KqQAU1bFZswzBbFzexNPjt&X-Amz-Signature=7e692f5c572e566edd8492aa1251a034a4862d56098a4f88209333cafae29631&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEDRV7W%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDV%2BEEM6XZ4iVeTn%2FBGAkxnlcjYfmR5jXojX2TcIlQyLgIhANVkg435bcBxZBN7t2lA5ErU2yWYd3wMC1G2KYBtVsrnKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsmv7TfNGxRZGuu%2Fgq3AO5gxY5Sb2SuNypKcVyifnzT7vHKfm8gKA6IZFasxREpsKoh1GIQ5EWGUceKNXiSHFyZlquSfCNTtYPhMvDuhwCFhvgypejdbAoShk6kOmfL2gO7ASsoZFyZEJAJqQWH4s%2FvNKR%2FahoN4mAprrk%2FIGc0BOWGKZwNXNggtk0K3NrQqq75ZmsLJKSXCaEfSbw1oNNLaz0moRkNlWMIL62QodpFLyvsYAP8VKVmNeUe52XA6qKmDYJ7eldd1n7%2BiMsD8PbgM2V8WvFy9kVjzwIhFYewosIbD4YKHyPsoI5NpTbU%2Bgnd9O0Xi9CUOeXovMQfjLxq%2B7uMPycGS5R5v0vQ1lvqg6g1nW0vF%2BE%2FaGCWuThxPzIeKVFlOa%2FNI%2F4o7Naj30w2bRntRUAzdTk9BJ6mLnQs72vx3BggMqe0Gp%2Fc8XiutfdbzL0DcEcVZuCQJzRQ4f9%2Bd609n1VDkyuPuHd1hm05G7jWHh1Oqu19S15NmtL4Pbsb2wrJTpEhZnmHIoL%2B7BEgW8OKxa%2BTH5SFRPdFD29RFCZGrnwmdQ5ncoj7Mv0cxEbjIBg1Nux2xq6Mgp59vme6CzjUAO0Y2jCmdeNs7q5tuhO5%2BNPo%2BZ8WBu%2BODyCkWh5YBGtBJigj5kz0DCO2%2FW%2BBjqkAQm3add%2FCloshWUgtKw8M%2BhSvGfq3P1eUf1zCdFqlnD8JPH9LkCX5HFp2FX8jbECeo1S%2BFKrHdYpnRQr89w5nYBR2Zy2ITOBsNOWe%2Bp8JKBLninyE6FiBySHaznURpkzYr9XRczX6bM%2Bqek90bJsMkTgLbRhUQtrgHVzkE0zvlsZUJgT7NuVbZcN%2F6twS%2Blo28l0S3KqQAU1bFZswzBbFzexNPjt&X-Amz-Signature=5b3df897f1cc349ff093f417633da9ae9548bde57d3ec23f67990cd4bf172608&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTEDRV7W%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQDV%2BEEM6XZ4iVeTn%2FBGAkxnlcjYfmR5jXojX2TcIlQyLgIhANVkg435bcBxZBN7t2lA5ErU2yWYd3wMC1G2KYBtVsrnKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsmv7TfNGxRZGuu%2Fgq3AO5gxY5Sb2SuNypKcVyifnzT7vHKfm8gKA6IZFasxREpsKoh1GIQ5EWGUceKNXiSHFyZlquSfCNTtYPhMvDuhwCFhvgypejdbAoShk6kOmfL2gO7ASsoZFyZEJAJqQWH4s%2FvNKR%2FahoN4mAprrk%2FIGc0BOWGKZwNXNggtk0K3NrQqq75ZmsLJKSXCaEfSbw1oNNLaz0moRkNlWMIL62QodpFLyvsYAP8VKVmNeUe52XA6qKmDYJ7eldd1n7%2BiMsD8PbgM2V8WvFy9kVjzwIhFYewosIbD4YKHyPsoI5NpTbU%2Bgnd9O0Xi9CUOeXovMQfjLxq%2B7uMPycGS5R5v0vQ1lvqg6g1nW0vF%2BE%2FaGCWuThxPzIeKVFlOa%2FNI%2F4o7Naj30w2bRntRUAzdTk9BJ6mLnQs72vx3BggMqe0Gp%2Fc8XiutfdbzL0DcEcVZuCQJzRQ4f9%2Bd609n1VDkyuPuHd1hm05G7jWHh1Oqu19S15NmtL4Pbsb2wrJTpEhZnmHIoL%2B7BEgW8OKxa%2BTH5SFRPdFD29RFCZGrnwmdQ5ncoj7Mv0cxEbjIBg1Nux2xq6Mgp59vme6CzjUAO0Y2jCmdeNs7q5tuhO5%2BNPo%2BZ8WBu%2BODyCkWh5YBGtBJigj5kz0DCO2%2FW%2BBjqkAQm3add%2FCloshWUgtKw8M%2BhSvGfq3P1eUf1zCdFqlnD8JPH9LkCX5HFp2FX8jbECeo1S%2BFKrHdYpnRQr89w5nYBR2Zy2ITOBsNOWe%2Bp8JKBLninyE6FiBySHaznURpkzYr9XRczX6bM%2Bqek90bJsMkTgLbRhUQtrgHVzkE0zvlsZUJgT7NuVbZcN%2F6twS%2Blo28l0S3KqQAU1bFZswzBbFzexNPjt&X-Amz-Signature=1d0e98dab9c2a4a4f8645d2d903fd4256a34c41103b6ee0d8067b7c49a21e764&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YXNZDP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEEJMrw4wV9F5C%2FC9ttMZCOqlxkercYoYuLloQU9%2FLBwIhAJBIPv2zlb83tlGXNA%2B7EjAIX3few%2FlvhsrYyS%2BW1Y2SKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtpQuZIvx1yCfZByoq3AOOEsgJ2QTBRwuch6%2F9qZ2rZKErLTBn0nbYlQGnqxVjOTMxcqO6kZqQMqaPsOyVHj1Rw%2B9ZdiDNRK%2BIBpao8HVfb8azBMxlgT%2F%2BCEfPZWtFiAxz%2BelLbjCWS85EeQ1KZ0seT%2FjN95KeWb59gCcX5628jVjYdAN2ASq8Nijm1vlXxwEe2NSQHS4jAzMpKPsCrzg8LUXNOk9kZ8R5z4jS9SEdtxKSOBi0NkaRYtcJtDRnQwaL3HqYGNZ2GoMLYQl3P6Umb6Y2qx0Lsw3lgS5m%2FsL0XSVNi0Iy%2Fkvh8u%2BN5LlQZW1fB7ifrFdnpIfex3cOTzy9sRAQ2AedmgdBuRRqqMW18G7hHeaQ8%2BJ7uTPqECC0ZFfmGLXq4GGOMCANxAarYO4uLcPgi8XYetc7zG%2BQEpp%2FKzksADc5vX1LWhziZUiLVokV1gNqWsQ%2BGZXjJDA1B8TjbEiLA9Jw3hKCdfwdhaw1WfieFE7%2BpaC%2B7gFuRACjG5j2Tnz7mxyBeYm6WY1efK5NYUi4%2BxnQhMcXDBPBmjYTCZBjKN7g%2FNu%2FdNYiZ7Tz0p3BToxFW9%2FL%2F4yHMP4vXkJvcmVF018vYwFGiQ1T5nvhBFuRXmiBN87laUcuU%2B5fZ%2BYWAqMjwT1hsb3QnDDYxs%2B%2BBjqkAYFRltKUnatA3heO5%2Bu8mSqbhu5vLUUIoRHwKlPqh%2FOKgBJzKBEvTGIPjEyjqNq5TlCIpUlQupxm%2B0Zq4%2FmtRbnbeHaB%2BYEEBZotYBpm%2BkGZLv%2FB6xD6G26d%2FBLEau11%2B2vFQ8e495Prbe1PvN5HP5M4OXs1WcOAFEt%2BZgN5t1dC0wS0S8RCsi0IBn0k%2FM4iYfHR05urQv6NdAV%2FvIAA9E8w%2BPz3&X-Amz-Signature=9134b63d92773745044adda669b9f51dece5a39c7611c1821ecda313884494da&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YXNZDP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEEJMrw4wV9F5C%2FC9ttMZCOqlxkercYoYuLloQU9%2FLBwIhAJBIPv2zlb83tlGXNA%2B7EjAIX3few%2FlvhsrYyS%2BW1Y2SKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtpQuZIvx1yCfZByoq3AOOEsgJ2QTBRwuch6%2F9qZ2rZKErLTBn0nbYlQGnqxVjOTMxcqO6kZqQMqaPsOyVHj1Rw%2B9ZdiDNRK%2BIBpao8HVfb8azBMxlgT%2F%2BCEfPZWtFiAxz%2BelLbjCWS85EeQ1KZ0seT%2FjN95KeWb59gCcX5628jVjYdAN2ASq8Nijm1vlXxwEe2NSQHS4jAzMpKPsCrzg8LUXNOk9kZ8R5z4jS9SEdtxKSOBi0NkaRYtcJtDRnQwaL3HqYGNZ2GoMLYQl3P6Umb6Y2qx0Lsw3lgS5m%2FsL0XSVNi0Iy%2Fkvh8u%2BN5LlQZW1fB7ifrFdnpIfex3cOTzy9sRAQ2AedmgdBuRRqqMW18G7hHeaQ8%2BJ7uTPqECC0ZFfmGLXq4GGOMCANxAarYO4uLcPgi8XYetc7zG%2BQEpp%2FKzksADc5vX1LWhziZUiLVokV1gNqWsQ%2BGZXjJDA1B8TjbEiLA9Jw3hKCdfwdhaw1WfieFE7%2BpaC%2B7gFuRACjG5j2Tnz7mxyBeYm6WY1efK5NYUi4%2BxnQhMcXDBPBmjYTCZBjKN7g%2FNu%2FdNYiZ7Tz0p3BToxFW9%2FL%2F4yHMP4vXkJvcmVF018vYwFGiQ1T5nvhBFuRXmiBN87laUcuU%2B5fZ%2BYWAqMjwT1hsb3QnDDYxs%2B%2BBjqkAYFRltKUnatA3heO5%2Bu8mSqbhu5vLUUIoRHwKlPqh%2FOKgBJzKBEvTGIPjEyjqNq5TlCIpUlQupxm%2B0Zq4%2FmtRbnbeHaB%2BYEEBZotYBpm%2BkGZLv%2FB6xD6G26d%2FBLEau11%2B2vFQ8e495Prbe1PvN5HP5M4OXs1WcOAFEt%2BZgN5t1dC0wS0S8RCsi0IBn0k%2FM4iYfHR05urQv6NdAV%2FvIAA9E8w%2BPz3&X-Amz-Signature=11536dd825557b161ef7be1f52cc41138ee9aacc940e3fce656cc8e915cb1af7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675YXNZDP%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEEJMrw4wV9F5C%2FC9ttMZCOqlxkercYoYuLloQU9%2FLBwIhAJBIPv2zlb83tlGXNA%2B7EjAIX3few%2FlvhsrYyS%2BW1Y2SKogECOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtpQuZIvx1yCfZByoq3AOOEsgJ2QTBRwuch6%2F9qZ2rZKErLTBn0nbYlQGnqxVjOTMxcqO6kZqQMqaPsOyVHj1Rw%2B9ZdiDNRK%2BIBpao8HVfb8azBMxlgT%2F%2BCEfPZWtFiAxz%2BelLbjCWS85EeQ1KZ0seT%2FjN95KeWb59gCcX5628jVjYdAN2ASq8Nijm1vlXxwEe2NSQHS4jAzMpKPsCrzg8LUXNOk9kZ8R5z4jS9SEdtxKSOBi0NkaRYtcJtDRnQwaL3HqYGNZ2GoMLYQl3P6Umb6Y2qx0Lsw3lgS5m%2FsL0XSVNi0Iy%2Fkvh8u%2BN5LlQZW1fB7ifrFdnpIfex3cOTzy9sRAQ2AedmgdBuRRqqMW18G7hHeaQ8%2BJ7uTPqECC0ZFfmGLXq4GGOMCANxAarYO4uLcPgi8XYetc7zG%2BQEpp%2FKzksADc5vX1LWhziZUiLVokV1gNqWsQ%2BGZXjJDA1B8TjbEiLA9Jw3hKCdfwdhaw1WfieFE7%2BpaC%2B7gFuRACjG5j2Tnz7mxyBeYm6WY1efK5NYUi4%2BxnQhMcXDBPBmjYTCZBjKN7g%2FNu%2FdNYiZ7Tz0p3BToxFW9%2FL%2F4yHMP4vXkJvcmVF018vYwFGiQ1T5nvhBFuRXmiBN87laUcuU%2B5fZ%2BYWAqMjwT1hsb3QnDDYxs%2B%2BBjqkAYFRltKUnatA3heO5%2Bu8mSqbhu5vLUUIoRHwKlPqh%2FOKgBJzKBEvTGIPjEyjqNq5TlCIpUlQupxm%2B0Zq4%2FmtRbnbeHaB%2BYEEBZotYBpm%2BkGZLv%2FB6xD6G26d%2FBLEau11%2B2vFQ8e495Prbe1PvN5HP5M4OXs1WcOAFEt%2BZgN5t1dC0wS0S8RCsi0IBn0k%2FM4iYfHR05urQv6NdAV%2FvIAA9E8w%2BPz3&X-Amz-Signature=af301bfe7293589f00054def371b964d8a13ecddbd61e4b6b660598b1cc67d27&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

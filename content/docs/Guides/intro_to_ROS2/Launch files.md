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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDGCW77Y%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICikMZoO0D7JKtBXeby1nmtLyPNzgfQfW8K0a0I8iGA2AiBIhbhcV%2BucEOMcH4f7mFl3Fd0MMXk0z9OhQJ1o5%2FnYVyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMw6Wt8I88ALANhradKtwDVjfSs2raVz%2B%2FAkvANfV3Wzii9jhrImbu2Sh%2F9xfZK225PDR%2F4wDiQlsUwOwJxrYCAQVUTFNQ0UWjeQqjxQz0je6P%2FtsS%2FOy%2BodSzgHgg6Z3qQ%2BPHD5ANZxtGkvPSG1pxI9nY8g2lylijslAYXl%2FTqudp9itlr0uTyXOVFJUgoQ3uBC8xcE4Jg6fNmId0cXhWumiYHwMd%2FE9diuvkcoy3N%2BQiBTALHoRxu6Brk%2FsT%2BhUo3E7J2jbeiruz2b%2B1BJ4WVb2c2S9ucZwaRvt4%2Bu7lqNxQPvzGMoEBVqlg0j%2BKOQqSrKy3TV0x2px30n0Z%2BgITatiJDxQau7gE1TaG2HbkPF%2FJZM4c%2Ft9qTvPJfsvH9Mv7Dd2O8Xat9VCF3oJp%2BDxbsoZqFIby3UdNpDonF9JVi2O91Wvk6lILtE0WEeeSBPUKCP6VbQ1K9IliRy4SqrebGGnedLbE%2F8lSjrU%2FpE%2F99mWacppEJRFv6zPDJOE1%2FF2GCnvNj%2BkIBSk9407fqHzScuqMmtxxPWt6vBxaiWbVtWetDicrwhygVwpdNDpZa1s2XK3CcsGgvCCN9iJjQL%2B3FgCzynnglOB9zJcwvjtdyAJpqbSCzQVXCrhI0Ghrd2fOjSrGhueCna%2BtRcIwpPGMvQY6pgH6ZNpqvqQymU6QpFxfhuiaIcVljzZBPc0eoJwy0XMMY8%2Bnov%2FvQ92lTFdQAaUqFaDA5kylrnr5hPl40ZL5UO7hAn7uQ704b99QTfZ%2F4Vf5O3eiwEcDNjB76lN%2Fkr9CMbnIXYNqmzfq%2F2xWrBX2g1pWP0cGCJ%2FRwjbaoZ6h%2F5A0pATkmWJ6eoaPL2lzcL8Hbl0J7pm7tQS3GH9jcqkyBYjONBQLI3%2Fh&X-Amz-Signature=80da54f75f43143a28560bebcaaa113ba584c17ea4e1ef47462468050bf9b449&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDGCW77Y%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICikMZoO0D7JKtBXeby1nmtLyPNzgfQfW8K0a0I8iGA2AiBIhbhcV%2BucEOMcH4f7mFl3Fd0MMXk0z9OhQJ1o5%2FnYVyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMw6Wt8I88ALANhradKtwDVjfSs2raVz%2B%2FAkvANfV3Wzii9jhrImbu2Sh%2F9xfZK225PDR%2F4wDiQlsUwOwJxrYCAQVUTFNQ0UWjeQqjxQz0je6P%2FtsS%2FOy%2BodSzgHgg6Z3qQ%2BPHD5ANZxtGkvPSG1pxI9nY8g2lylijslAYXl%2FTqudp9itlr0uTyXOVFJUgoQ3uBC8xcE4Jg6fNmId0cXhWumiYHwMd%2FE9diuvkcoy3N%2BQiBTALHoRxu6Brk%2FsT%2BhUo3E7J2jbeiruz2b%2B1BJ4WVb2c2S9ucZwaRvt4%2Bu7lqNxQPvzGMoEBVqlg0j%2BKOQqSrKy3TV0x2px30n0Z%2BgITatiJDxQau7gE1TaG2HbkPF%2FJZM4c%2Ft9qTvPJfsvH9Mv7Dd2O8Xat9VCF3oJp%2BDxbsoZqFIby3UdNpDonF9JVi2O91Wvk6lILtE0WEeeSBPUKCP6VbQ1K9IliRy4SqrebGGnedLbE%2F8lSjrU%2FpE%2F99mWacppEJRFv6zPDJOE1%2FF2GCnvNj%2BkIBSk9407fqHzScuqMmtxxPWt6vBxaiWbVtWetDicrwhygVwpdNDpZa1s2XK3CcsGgvCCN9iJjQL%2B3FgCzynnglOB9zJcwvjtdyAJpqbSCzQVXCrhI0Ghrd2fOjSrGhueCna%2BtRcIwpPGMvQY6pgH6ZNpqvqQymU6QpFxfhuiaIcVljzZBPc0eoJwy0XMMY8%2Bnov%2FvQ92lTFdQAaUqFaDA5kylrnr5hPl40ZL5UO7hAn7uQ704b99QTfZ%2F4Vf5O3eiwEcDNjB76lN%2Fkr9CMbnIXYNqmzfq%2F2xWrBX2g1pWP0cGCJ%2FRwjbaoZ6h%2F5A0pATkmWJ6eoaPL2lzcL8Hbl0J7pm7tQS3GH9jcqkyBYjONBQLI3%2Fh&X-Amz-Signature=6374eae7678f3a2d1072ba87dde16410089f80cb5c1aeaf932755fe5b34f35c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDGCW77Y%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICikMZoO0D7JKtBXeby1nmtLyPNzgfQfW8K0a0I8iGA2AiBIhbhcV%2BucEOMcH4f7mFl3Fd0MMXk0z9OhQJ1o5%2FnYVyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMw6Wt8I88ALANhradKtwDVjfSs2raVz%2B%2FAkvANfV3Wzii9jhrImbu2Sh%2F9xfZK225PDR%2F4wDiQlsUwOwJxrYCAQVUTFNQ0UWjeQqjxQz0je6P%2FtsS%2FOy%2BodSzgHgg6Z3qQ%2BPHD5ANZxtGkvPSG1pxI9nY8g2lylijslAYXl%2FTqudp9itlr0uTyXOVFJUgoQ3uBC8xcE4Jg6fNmId0cXhWumiYHwMd%2FE9diuvkcoy3N%2BQiBTALHoRxu6Brk%2FsT%2BhUo3E7J2jbeiruz2b%2B1BJ4WVb2c2S9ucZwaRvt4%2Bu7lqNxQPvzGMoEBVqlg0j%2BKOQqSrKy3TV0x2px30n0Z%2BgITatiJDxQau7gE1TaG2HbkPF%2FJZM4c%2Ft9qTvPJfsvH9Mv7Dd2O8Xat9VCF3oJp%2BDxbsoZqFIby3UdNpDonF9JVi2O91Wvk6lILtE0WEeeSBPUKCP6VbQ1K9IliRy4SqrebGGnedLbE%2F8lSjrU%2FpE%2F99mWacppEJRFv6zPDJOE1%2FF2GCnvNj%2BkIBSk9407fqHzScuqMmtxxPWt6vBxaiWbVtWetDicrwhygVwpdNDpZa1s2XK3CcsGgvCCN9iJjQL%2B3FgCzynnglOB9zJcwvjtdyAJpqbSCzQVXCrhI0Ghrd2fOjSrGhueCna%2BtRcIwpPGMvQY6pgH6ZNpqvqQymU6QpFxfhuiaIcVljzZBPc0eoJwy0XMMY8%2Bnov%2FvQ92lTFdQAaUqFaDA5kylrnr5hPl40ZL5UO7hAn7uQ704b99QTfZ%2F4Vf5O3eiwEcDNjB76lN%2Fkr9CMbnIXYNqmzfq%2F2xWrBX2g1pWP0cGCJ%2FRwjbaoZ6h%2F5A0pATkmWJ6eoaPL2lzcL8Hbl0J7pm7tQS3GH9jcqkyBYjONBQLI3%2Fh&X-Amz-Signature=67bed055b8d42d7e6c6ee53c06910fe685407911af7ac07df9a3b59675d49f34&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

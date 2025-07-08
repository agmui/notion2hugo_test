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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TZYRI6D%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDBXg%2F2u0B9%2FXuOgc0MZjScZVPER0x7nKDRQCHvzegiQIhAJyJ8NqH5U%2B3A35aHkE79JeQSqxRirIEpZNyC3FVdPnUKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8zd45hVB0U0PqzGsq3AMIkgJ%2BUZFP6qisMTM%2BH896HMs5qMvHU%2Fgnl%2F4mjUaoOjNgrG93yd%2B5jczW9en2hspgRHY%2FnruqLO8vNTmWBE7zwdogSzXdbT6W2eMhEK68gj9mlurlSV4UpU%2BILFjnHnnK2uAvVsQY6TKC%2FZfGWhdyrK45XLxe9639hZeBIXwwwnpH%2FHcd5Lv0a2mMyCHcunYZkJ7Bg1aruf1yDx8MgqcrXaPRzmSb7Yl57w%2F2n7yPMBDTplmHjN7ZexYp8QgyLsylaew1h5y7WB%2B0c1IHri0w3cWwrlbEZwsvMiiY3Z48Qnaziorlyt2jVFRjHU%2BHV2c81vx0CJM5OnIspEU11avZq8IAmEoRmiP10H8%2ByqDEQq%2BiZ%2Bs2Z873txdmusJikc%2FGqOCWmp48kloXyRm10yaSNvyc4knUBl5X5lobLWIVbV9BLYtA7BNcvkJtfvcAixzQ4KFo6bN4nQDGOWW1f5hsgdBuTL3CxPZpCmPGPj4UwEnm7kn6uAc6NwC%2FVI3sVXWIQGNCSjgr4SRI7qa9RHU7eXEQ5z34sJQcapY3NcdN5UmDRr4Mo5oE8TmLq83%2FQVgrdcctk225yuqm%2F%2BSn8NGKqqLrili%2F92NS077myuQmVPDYc0VfCwP19GkhDTCbgLXDBjqkAVrfHJCxDUtTNMGr%2FFm0P%2B91mdEivFEfwT%2B%2F4bMiZewX3TEh3rT8U7jFbL7UPMJX%2BO%2F7kPBes1QgNmlGbcgR1rT1NqVwgwhy2Wpzd8NO6r3lqp5gmTjNeD1eC%2BIGGMPEOKjjOU66R9XUKB0xeSyE%2BQnmyF8uc%2Bd6jCrSX92YgYuwQKFmRvweaAspIcNxbi725Sh6liaAmGGfHCaqqG0LIzf5ufGy&X-Amz-Signature=8752c837a2fdde30249ee9e40abdac5f3f2c244b3bfd73c243fb3123b2f02a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TZYRI6D%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDBXg%2F2u0B9%2FXuOgc0MZjScZVPER0x7nKDRQCHvzegiQIhAJyJ8NqH5U%2B3A35aHkE79JeQSqxRirIEpZNyC3FVdPnUKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8zd45hVB0U0PqzGsq3AMIkgJ%2BUZFP6qisMTM%2BH896HMs5qMvHU%2Fgnl%2F4mjUaoOjNgrG93yd%2B5jczW9en2hspgRHY%2FnruqLO8vNTmWBE7zwdogSzXdbT6W2eMhEK68gj9mlurlSV4UpU%2BILFjnHnnK2uAvVsQY6TKC%2FZfGWhdyrK45XLxe9639hZeBIXwwwnpH%2FHcd5Lv0a2mMyCHcunYZkJ7Bg1aruf1yDx8MgqcrXaPRzmSb7Yl57w%2F2n7yPMBDTplmHjN7ZexYp8QgyLsylaew1h5y7WB%2B0c1IHri0w3cWwrlbEZwsvMiiY3Z48Qnaziorlyt2jVFRjHU%2BHV2c81vx0CJM5OnIspEU11avZq8IAmEoRmiP10H8%2ByqDEQq%2BiZ%2Bs2Z873txdmusJikc%2FGqOCWmp48kloXyRm10yaSNvyc4knUBl5X5lobLWIVbV9BLYtA7BNcvkJtfvcAixzQ4KFo6bN4nQDGOWW1f5hsgdBuTL3CxPZpCmPGPj4UwEnm7kn6uAc6NwC%2FVI3sVXWIQGNCSjgr4SRI7qa9RHU7eXEQ5z34sJQcapY3NcdN5UmDRr4Mo5oE8TmLq83%2FQVgrdcctk225yuqm%2F%2BSn8NGKqqLrili%2F92NS077myuQmVPDYc0VfCwP19GkhDTCbgLXDBjqkAVrfHJCxDUtTNMGr%2FFm0P%2B91mdEivFEfwT%2B%2F4bMiZewX3TEh3rT8U7jFbL7UPMJX%2BO%2F7kPBes1QgNmlGbcgR1rT1NqVwgwhy2Wpzd8NO6r3lqp5gmTjNeD1eC%2BIGGMPEOKjjOU66R9XUKB0xeSyE%2BQnmyF8uc%2Bd6jCrSX92YgYuwQKFmRvweaAspIcNxbi725Sh6liaAmGGfHCaqqG0LIzf5ufGy&X-Amz-Signature=07fe36de25e7dc32c687ed3cc03721d305a67535c1383503f41d7439dad438f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TZYRI6D%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDBXg%2F2u0B9%2FXuOgc0MZjScZVPER0x7nKDRQCHvzegiQIhAJyJ8NqH5U%2B3A35aHkE79JeQSqxRirIEpZNyC3FVdPnUKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8zd45hVB0U0PqzGsq3AMIkgJ%2BUZFP6qisMTM%2BH896HMs5qMvHU%2Fgnl%2F4mjUaoOjNgrG93yd%2B5jczW9en2hspgRHY%2FnruqLO8vNTmWBE7zwdogSzXdbT6W2eMhEK68gj9mlurlSV4UpU%2BILFjnHnnK2uAvVsQY6TKC%2FZfGWhdyrK45XLxe9639hZeBIXwwwnpH%2FHcd5Lv0a2mMyCHcunYZkJ7Bg1aruf1yDx8MgqcrXaPRzmSb7Yl57w%2F2n7yPMBDTplmHjN7ZexYp8QgyLsylaew1h5y7WB%2B0c1IHri0w3cWwrlbEZwsvMiiY3Z48Qnaziorlyt2jVFRjHU%2BHV2c81vx0CJM5OnIspEU11avZq8IAmEoRmiP10H8%2ByqDEQq%2BiZ%2Bs2Z873txdmusJikc%2FGqOCWmp48kloXyRm10yaSNvyc4knUBl5X5lobLWIVbV9BLYtA7BNcvkJtfvcAixzQ4KFo6bN4nQDGOWW1f5hsgdBuTL3CxPZpCmPGPj4UwEnm7kn6uAc6NwC%2FVI3sVXWIQGNCSjgr4SRI7qa9RHU7eXEQ5z34sJQcapY3NcdN5UmDRr4Mo5oE8TmLq83%2FQVgrdcctk225yuqm%2F%2BSn8NGKqqLrili%2F92NS077myuQmVPDYc0VfCwP19GkhDTCbgLXDBjqkAVrfHJCxDUtTNMGr%2FFm0P%2B91mdEivFEfwT%2B%2F4bMiZewX3TEh3rT8U7jFbL7UPMJX%2BO%2F7kPBes1QgNmlGbcgR1rT1NqVwgwhy2Wpzd8NO6r3lqp5gmTjNeD1eC%2BIGGMPEOKjjOU66R9XUKB0xeSyE%2BQnmyF8uc%2Bd6jCrSX92YgYuwQKFmRvweaAspIcNxbi725Sh6liaAmGGfHCaqqG0LIzf5ufGy&X-Amz-Signature=2271b7a182c8470f322f0418ef5f967dca654cf6ececf1a0ba3aa8db18213771&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

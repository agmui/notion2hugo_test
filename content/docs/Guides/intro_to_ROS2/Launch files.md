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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4PRVLV%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOORmp690O%2Bg2KbjqqWCxk0g1mMF6q4mYLrJ%2F5jAfvTAiEA7C8CvCjWlHmKo0MzFOwCQn1bmh3pUXG3kf0hIO7aji0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL9J5Qae3AtReIk0ircAzzESdpo03SqVc4199Cz2SGiHWMjbLqCLpevbJya9EVtzUa2%2FLAv%2BHPWEt9N3sDXDR5DVx6Yynw5QlxtH%2Ff%2FTvWFlYHMxk8NvEgd3Pyjl7BEzSZMuCQAWZFaCdVIHwKmGzw1reR6xc7T5l8wNFPHdo2sM9J2DA7WEFYMsZIo69cjaGWI5mLsYPRCIv%2Fn0HZ%2FASboc5oPd8KDaa7I1DLQpCJr4aQAoO4qy1NVeBcHRe9fkvJJJ5AN3ugQMvklN%2B6WlBVLrwiNMmSOPBO6BGoqZoz4b8DNYgZVcjmX2rkQ%2FbFJFjDaKniTViBzK4%2FQk%2B4Dhv8nUahokoRBKxj%2FqD1CFlKWSZ98I0BDIxTTC%2BVVh6NloedQ2EQa4h%2FenEw96sJF7PcDjk0hASXjkWt%2B99hJnrhR4kwS299zq56kAsdaYVxoGw8WioUqwUWyRrbv6GiNpxWdbzg0D16Nqvof9%2FJyTnDXz0bJdGsOmDhYXcstUOmmKVjKXEu3SH337MoFL8FLw4SR3xlcHJfjoNGk1mqOpyomXhzzdF0xOWCQPa7GfwWzVXOI5VVCabW404p0l7Fo8w%2ByDx4B95FYX%2Fb5BH7fqAmvMLTeAMiMQVN3cT5906zd6JdNavbjk2g82DR3MOal97wGOqUB2klFMUn19uIeBzEAl9DHBqgWVbTa30yfEdKVfYugAW5Xm1toivV8J9TpZGb7DWpWkneJRRmBM6laptI7y9mXgtWV0ou4CpbiGlUWQWyNGeyJVUWrPw%2F64FBskT8lhRvID39cx80qi7A%2BQqJxYWUcfOyVA2JHz7g0JxzOSHQf2CS7PIO3N4mMi7Jq%2FXVUb%2FMwuQMOn3Uz6d56ezMiMSgJ7tWppAb5&X-Amz-Signature=e978c3c6dd26cd390a0622dc8b4c0237f30708084aab5f9d4bede3ea5077a70a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4PRVLV%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOORmp690O%2Bg2KbjqqWCxk0g1mMF6q4mYLrJ%2F5jAfvTAiEA7C8CvCjWlHmKo0MzFOwCQn1bmh3pUXG3kf0hIO7aji0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL9J5Qae3AtReIk0ircAzzESdpo03SqVc4199Cz2SGiHWMjbLqCLpevbJya9EVtzUa2%2FLAv%2BHPWEt9N3sDXDR5DVx6Yynw5QlxtH%2Ff%2FTvWFlYHMxk8NvEgd3Pyjl7BEzSZMuCQAWZFaCdVIHwKmGzw1reR6xc7T5l8wNFPHdo2sM9J2DA7WEFYMsZIo69cjaGWI5mLsYPRCIv%2Fn0HZ%2FASboc5oPd8KDaa7I1DLQpCJr4aQAoO4qy1NVeBcHRe9fkvJJJ5AN3ugQMvklN%2B6WlBVLrwiNMmSOPBO6BGoqZoz4b8DNYgZVcjmX2rkQ%2FbFJFjDaKniTViBzK4%2FQk%2B4Dhv8nUahokoRBKxj%2FqD1CFlKWSZ98I0BDIxTTC%2BVVh6NloedQ2EQa4h%2FenEw96sJF7PcDjk0hASXjkWt%2B99hJnrhR4kwS299zq56kAsdaYVxoGw8WioUqwUWyRrbv6GiNpxWdbzg0D16Nqvof9%2FJyTnDXz0bJdGsOmDhYXcstUOmmKVjKXEu3SH337MoFL8FLw4SR3xlcHJfjoNGk1mqOpyomXhzzdF0xOWCQPa7GfwWzVXOI5VVCabW404p0l7Fo8w%2ByDx4B95FYX%2Fb5BH7fqAmvMLTeAMiMQVN3cT5906zd6JdNavbjk2g82DR3MOal97wGOqUB2klFMUn19uIeBzEAl9DHBqgWVbTa30yfEdKVfYugAW5Xm1toivV8J9TpZGb7DWpWkneJRRmBM6laptI7y9mXgtWV0ou4CpbiGlUWQWyNGeyJVUWrPw%2F64FBskT8lhRvID39cx80qi7A%2BQqJxYWUcfOyVA2JHz7g0JxzOSHQf2CS7PIO3N4mMi7Jq%2FXVUb%2FMwuQMOn3Uz6d56ezMiMSgJ7tWppAb5&X-Amz-Signature=0facadf68cebf3c4e1daf0d306d5c892263876cf11f96dd357177951182bba33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY4PRVLV%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T080858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOORmp690O%2Bg2KbjqqWCxk0g1mMF6q4mYLrJ%2F5jAfvTAiEA7C8CvCjWlHmKo0MzFOwCQn1bmh3pUXG3kf0hIO7aji0qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL9J5Qae3AtReIk0ircAzzESdpo03SqVc4199Cz2SGiHWMjbLqCLpevbJya9EVtzUa2%2FLAv%2BHPWEt9N3sDXDR5DVx6Yynw5QlxtH%2Ff%2FTvWFlYHMxk8NvEgd3Pyjl7BEzSZMuCQAWZFaCdVIHwKmGzw1reR6xc7T5l8wNFPHdo2sM9J2DA7WEFYMsZIo69cjaGWI5mLsYPRCIv%2Fn0HZ%2FASboc5oPd8KDaa7I1DLQpCJr4aQAoO4qy1NVeBcHRe9fkvJJJ5AN3ugQMvklN%2B6WlBVLrwiNMmSOPBO6BGoqZoz4b8DNYgZVcjmX2rkQ%2FbFJFjDaKniTViBzK4%2FQk%2B4Dhv8nUahokoRBKxj%2FqD1CFlKWSZ98I0BDIxTTC%2BVVh6NloedQ2EQa4h%2FenEw96sJF7PcDjk0hASXjkWt%2B99hJnrhR4kwS299zq56kAsdaYVxoGw8WioUqwUWyRrbv6GiNpxWdbzg0D16Nqvof9%2FJyTnDXz0bJdGsOmDhYXcstUOmmKVjKXEu3SH337MoFL8FLw4SR3xlcHJfjoNGk1mqOpyomXhzzdF0xOWCQPa7GfwWzVXOI5VVCabW404p0l7Fo8w%2ByDx4B95FYX%2Fb5BH7fqAmvMLTeAMiMQVN3cT5906zd6JdNavbjk2g82DR3MOal97wGOqUB2klFMUn19uIeBzEAl9DHBqgWVbTa30yfEdKVfYugAW5Xm1toivV8J9TpZGb7DWpWkneJRRmBM6laptI7y9mXgtWV0ou4CpbiGlUWQWyNGeyJVUWrPw%2F64FBskT8lhRvID39cx80qi7A%2BQqJxYWUcfOyVA2JHz7g0JxzOSHQf2CS7PIO3N4mMi7Jq%2FXVUb%2FMwuQMOn3Uz6d56ezMiMSgJ7tWppAb5&X-Amz-Signature=a5f8fd55e17eb68a5a30cce77275eb451f29e37b58e3eedfe9341001b06a8a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

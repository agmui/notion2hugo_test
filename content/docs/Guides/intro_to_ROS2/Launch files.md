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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSDRLZN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNEV9gLR1ci3SEtdfdTn9CeaeocHKycDL07Z77y5zr5AiEAvBWpJDmgApn%2FlqnhBbWeNv3RQOwJnkp4G8b0U0Vt2mYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGahYy06Hisdcmji4SrcA4U8AKCzvd%2FTCejeb4JxziAergcJNa%2BQNCiHuYbMOEaAtGYa41RV5GJmECa0Xg8sEuiYyt0dewgwZ1qaot3pJwqKtuhxWFF1HXzN9mz9bntw12%2BamFdlfJx5SZbbKqFaj4phAedlCu%2BrL7DzJp7ClQyV%2BChAgwzvXsjJ3PtWHP9e3FZywIqosa6gb%2Bx94sEJ2vgdAi2PuHfvt93EEbeGhfOOriSI9OhlS65CeINJIVyNtFt6zGWTUlFGBaljdSPr%2FIWSLdlpKhhgjST%2B3R4gl5GPunObRsT0ra5jn7JuA1UjNtMIjAi2maXT1YhGMqrIhxF0h7Vk9lWtta%2FhBSpaKiXZoYILi2prne9fP%2BFdQcF8SBJhW13EtxLfTwZVuLdHVTf%2BErefpfvtEslZMgHsoWODNa8Fuu110Grsr1r6VeAAAiJjyc5nM5G%2BoGRrh628g%2FXX0alZMaPMJTeUwlIriN5HK9sdcHCS7hOkUAIq5NiiYYvprdFFYjs8xde6hIJECV%2Fr3e4mSsgibyQKsAIArIvjxnBGbBcOzImyPTrSKDZhKROhorBy9LAJLZekJZqnjZRR45YnYnCYP%2Bd9TmVjVFIPuJbxDda%2FCa274rEX34nJgkPoahkx7Fr6ReIZMISIp8EGOqUBilG2evzxVrKHBoOaA8wBRNlajBK6ZS8oa1QILjKu5F6zmwebqVX4MagQgrsBW3TtN4DLOJb4w0uQSXp0rsIIo9hOpxJCSFCMYM8z0PBoahVQZ1CKTPWGxOJLUyRaTa%2BTg2T2%2FNzJo3L4GjEhQTD7xYH6u75FRsIrYTuAJnq51FVTK5igsmOMrc01ln%2By1R8lrxRIl%2BC3kinRoG25S1xjCkb0FsTK&X-Amz-Signature=4576e09610dcfaf8428beaceda135b72f12bf1d3e0dc8ac88ddf0329b933691c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSDRLZN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNEV9gLR1ci3SEtdfdTn9CeaeocHKycDL07Z77y5zr5AiEAvBWpJDmgApn%2FlqnhBbWeNv3RQOwJnkp4G8b0U0Vt2mYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGahYy06Hisdcmji4SrcA4U8AKCzvd%2FTCejeb4JxziAergcJNa%2BQNCiHuYbMOEaAtGYa41RV5GJmECa0Xg8sEuiYyt0dewgwZ1qaot3pJwqKtuhxWFF1HXzN9mz9bntw12%2BamFdlfJx5SZbbKqFaj4phAedlCu%2BrL7DzJp7ClQyV%2BChAgwzvXsjJ3PtWHP9e3FZywIqosa6gb%2Bx94sEJ2vgdAi2PuHfvt93EEbeGhfOOriSI9OhlS65CeINJIVyNtFt6zGWTUlFGBaljdSPr%2FIWSLdlpKhhgjST%2B3R4gl5GPunObRsT0ra5jn7JuA1UjNtMIjAi2maXT1YhGMqrIhxF0h7Vk9lWtta%2FhBSpaKiXZoYILi2prne9fP%2BFdQcF8SBJhW13EtxLfTwZVuLdHVTf%2BErefpfvtEslZMgHsoWODNa8Fuu110Grsr1r6VeAAAiJjyc5nM5G%2BoGRrh628g%2FXX0alZMaPMJTeUwlIriN5HK9sdcHCS7hOkUAIq5NiiYYvprdFFYjs8xde6hIJECV%2Fr3e4mSsgibyQKsAIArIvjxnBGbBcOzImyPTrSKDZhKROhorBy9LAJLZekJZqnjZRR45YnYnCYP%2Bd9TmVjVFIPuJbxDda%2FCa274rEX34nJgkPoahkx7Fr6ReIZMISIp8EGOqUBilG2evzxVrKHBoOaA8wBRNlajBK6ZS8oa1QILjKu5F6zmwebqVX4MagQgrsBW3TtN4DLOJb4w0uQSXp0rsIIo9hOpxJCSFCMYM8z0PBoahVQZ1CKTPWGxOJLUyRaTa%2BTg2T2%2FNzJo3L4GjEhQTD7xYH6u75FRsIrYTuAJnq51FVTK5igsmOMrc01ln%2By1R8lrxRIl%2BC3kinRoG25S1xjCkb0FsTK&X-Amz-Signature=92da779521ba480304c05af37295088ae5611a898e8c3e3c9ff7c5098e1251af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLSDRLZN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFNEV9gLR1ci3SEtdfdTn9CeaeocHKycDL07Z77y5zr5AiEAvBWpJDmgApn%2FlqnhBbWeNv3RQOwJnkp4G8b0U0Vt2mYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGahYy06Hisdcmji4SrcA4U8AKCzvd%2FTCejeb4JxziAergcJNa%2BQNCiHuYbMOEaAtGYa41RV5GJmECa0Xg8sEuiYyt0dewgwZ1qaot3pJwqKtuhxWFF1HXzN9mz9bntw12%2BamFdlfJx5SZbbKqFaj4phAedlCu%2BrL7DzJp7ClQyV%2BChAgwzvXsjJ3PtWHP9e3FZywIqosa6gb%2Bx94sEJ2vgdAi2PuHfvt93EEbeGhfOOriSI9OhlS65CeINJIVyNtFt6zGWTUlFGBaljdSPr%2FIWSLdlpKhhgjST%2B3R4gl5GPunObRsT0ra5jn7JuA1UjNtMIjAi2maXT1YhGMqrIhxF0h7Vk9lWtta%2FhBSpaKiXZoYILi2prne9fP%2BFdQcF8SBJhW13EtxLfTwZVuLdHVTf%2BErefpfvtEslZMgHsoWODNa8Fuu110Grsr1r6VeAAAiJjyc5nM5G%2BoGRrh628g%2FXX0alZMaPMJTeUwlIriN5HK9sdcHCS7hOkUAIq5NiiYYvprdFFYjs8xde6hIJECV%2Fr3e4mSsgibyQKsAIArIvjxnBGbBcOzImyPTrSKDZhKROhorBy9LAJLZekJZqnjZRR45YnYnCYP%2Bd9TmVjVFIPuJbxDda%2FCa274rEX34nJgkPoahkx7Fr6ReIZMISIp8EGOqUBilG2evzxVrKHBoOaA8wBRNlajBK6ZS8oa1QILjKu5F6zmwebqVX4MagQgrsBW3TtN4DLOJb4w0uQSXp0rsIIo9hOpxJCSFCMYM8z0PBoahVQZ1CKTPWGxOJLUyRaTa%2BTg2T2%2FNzJo3L4GjEhQTD7xYH6u75FRsIrYTuAJnq51FVTK5igsmOMrc01ln%2By1R8lrxRIl%2BC3kinRoG25S1xjCkb0FsTK&X-Amz-Signature=1673898472cc09daba91bb058d6f9cbdd7569858c4d0b1c3da93dda7b7630b63&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

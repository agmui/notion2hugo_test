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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3ZXJEQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDtjKu4enJMEWuhI7%2FHs%2Fi9IyaVN%2F6eyIT8wJlVMTOSTAIgSjD0GPk5A%2FLGKbJxiPGIsJ7RYSSPn4M%2FnOQgjKNGn9AqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkPwTAgNI9E9smM4CrcA7h42WCMVRRKPLG4uLWyx5Roc4QhMERwA8pAsYKS%2BEwFElp4p7p2bP1iORmLdADrD4FeIex4mln5oBUYXB0p3%2F02QnwMqOC%2FUKz5PgAS1uNTD8B1waBQkIokeN7TYFCDDzkLwR%2BkuxJJ6iNle%2FyiTxB29PvKMujSZILuOxfzAIzPEnQkFwWB5zqF%2Ft4L45Dq6Ypp%2B%2BPR7QhLZ83HzqegX%2BJsqUqC42wlvoX0UQ8xSSPuXRzgvGaS3VW4QcZh0Yhg1QKiyoT7z1HUwR9oSm%2BLjKgRjB1v2gb8hzsJ7R6TNxiq7DJAyMxpfYb4VbI9I8%2F6ASOaiubdmOOvCx4ikNDiDtycSMNS3d00EPbUVldiEN0AE8DgVllFuNCKL9WHRGAN3UBc6DHK3%2B9j9BIcNULWedBBcJiw%2BcIiZpkvvosEj4wwCh9CaElTYCW1xcZIODIyB9KAisMoy6jCHpMMG4CbmGxP8upziiiWsnfRz9EB3ZImfzbjr5j7pA%2FFp94OX37Qea0PHd17sttNtLaqTMonKdxcf9WvmOSxUC9QEfnFe1gtSkaBbwL8juISaXzjzTM3aXAGAmNjn5mSnoertD0acCI%2FgMfYFPYd9vKWsjmObR78X15dSHOpuhxcfUACMLmTusEGOqUB8mGfrzixiUrKpNJUpt9wB8BMBUn3%2Biz4nYRLJaFUblkuXmkMgKrsd%2Buvb%2FE%2BP4yody6CJNkbAR6wytwqzSi3H35l4xB1cv4vuXHo1s5QYYJSJ8uDY0C48wImcKl1aZRp3VeiLzIMEeCWkjJdPsz0Q0PAoR6RwBsQhJunVw75iNE%2Bru9ZKWUA7RQ8pei96xl7obEq%2FdMpJgPpIy0H3z1sft8MqYpo&X-Amz-Signature=6614abc8ee9173f13421f88668096d673c2ba0dd81891bc37f31001ebc3a3ef8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3ZXJEQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDtjKu4enJMEWuhI7%2FHs%2Fi9IyaVN%2F6eyIT8wJlVMTOSTAIgSjD0GPk5A%2FLGKbJxiPGIsJ7RYSSPn4M%2FnOQgjKNGn9AqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkPwTAgNI9E9smM4CrcA7h42WCMVRRKPLG4uLWyx5Roc4QhMERwA8pAsYKS%2BEwFElp4p7p2bP1iORmLdADrD4FeIex4mln5oBUYXB0p3%2F02QnwMqOC%2FUKz5PgAS1uNTD8B1waBQkIokeN7TYFCDDzkLwR%2BkuxJJ6iNle%2FyiTxB29PvKMujSZILuOxfzAIzPEnQkFwWB5zqF%2Ft4L45Dq6Ypp%2B%2BPR7QhLZ83HzqegX%2BJsqUqC42wlvoX0UQ8xSSPuXRzgvGaS3VW4QcZh0Yhg1QKiyoT7z1HUwR9oSm%2BLjKgRjB1v2gb8hzsJ7R6TNxiq7DJAyMxpfYb4VbI9I8%2F6ASOaiubdmOOvCx4ikNDiDtycSMNS3d00EPbUVldiEN0AE8DgVllFuNCKL9WHRGAN3UBc6DHK3%2B9j9BIcNULWedBBcJiw%2BcIiZpkvvosEj4wwCh9CaElTYCW1xcZIODIyB9KAisMoy6jCHpMMG4CbmGxP8upziiiWsnfRz9EB3ZImfzbjr5j7pA%2FFp94OX37Qea0PHd17sttNtLaqTMonKdxcf9WvmOSxUC9QEfnFe1gtSkaBbwL8juISaXzjzTM3aXAGAmNjn5mSnoertD0acCI%2FgMfYFPYd9vKWsjmObR78X15dSHOpuhxcfUACMLmTusEGOqUB8mGfrzixiUrKpNJUpt9wB8BMBUn3%2Biz4nYRLJaFUblkuXmkMgKrsd%2Buvb%2FE%2BP4yody6CJNkbAR6wytwqzSi3H35l4xB1cv4vuXHo1s5QYYJSJ8uDY0C48wImcKl1aZRp3VeiLzIMEeCWkjJdPsz0Q0PAoR6RwBsQhJunVw75iNE%2Bru9ZKWUA7RQ8pei96xl7obEq%2FdMpJgPpIy0H3z1sft8MqYpo&X-Amz-Signature=5f5cf24a43c1f0ab9d21d057a14b4ac8405198ad1db519b9169fdd86d5750405&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX3ZXJEQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDtjKu4enJMEWuhI7%2FHs%2Fi9IyaVN%2F6eyIT8wJlVMTOSTAIgSjD0GPk5A%2FLGKbJxiPGIsJ7RYSSPn4M%2FnOQgjKNGn9AqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHkPwTAgNI9E9smM4CrcA7h42WCMVRRKPLG4uLWyx5Roc4QhMERwA8pAsYKS%2BEwFElp4p7p2bP1iORmLdADrD4FeIex4mln5oBUYXB0p3%2F02QnwMqOC%2FUKz5PgAS1uNTD8B1waBQkIokeN7TYFCDDzkLwR%2BkuxJJ6iNle%2FyiTxB29PvKMujSZILuOxfzAIzPEnQkFwWB5zqF%2Ft4L45Dq6Ypp%2B%2BPR7QhLZ83HzqegX%2BJsqUqC42wlvoX0UQ8xSSPuXRzgvGaS3VW4QcZh0Yhg1QKiyoT7z1HUwR9oSm%2BLjKgRjB1v2gb8hzsJ7R6TNxiq7DJAyMxpfYb4VbI9I8%2F6ASOaiubdmOOvCx4ikNDiDtycSMNS3d00EPbUVldiEN0AE8DgVllFuNCKL9WHRGAN3UBc6DHK3%2B9j9BIcNULWedBBcJiw%2BcIiZpkvvosEj4wwCh9CaElTYCW1xcZIODIyB9KAisMoy6jCHpMMG4CbmGxP8upziiiWsnfRz9EB3ZImfzbjr5j7pA%2FFp94OX37Qea0PHd17sttNtLaqTMonKdxcf9WvmOSxUC9QEfnFe1gtSkaBbwL8juISaXzjzTM3aXAGAmNjn5mSnoertD0acCI%2FgMfYFPYd9vKWsjmObR78X15dSHOpuhxcfUACMLmTusEGOqUB8mGfrzixiUrKpNJUpt9wB8BMBUn3%2Biz4nYRLJaFUblkuXmkMgKrsd%2Buvb%2FE%2BP4yody6CJNkbAR6wytwqzSi3H35l4xB1cv4vuXHo1s5QYYJSJ8uDY0C48wImcKl1aZRp3VeiLzIMEeCWkjJdPsz0Q0PAoR6RwBsQhJunVw75iNE%2Bru9ZKWUA7RQ8pei96xl7obEq%2FdMpJgPpIy0H3z1sft8MqYpo&X-Amz-Signature=f2a5328e217433fc264a4fc27cd6ba2557bd6d66fd17d191d64f74109454b524&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

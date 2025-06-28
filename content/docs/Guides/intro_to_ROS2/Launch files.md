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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DXHGI4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNvkpnrfODy262OtKqs7iBcGg1emFXsx2378T7S39%2FdAiEAurLkJBQjAOkJBdKMueg5M%2BNsJCUqOuhVDVFZhrvELZQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkzYewVwOCgfqPKRCrcA5AsC9D5aiQb2wDEcxeAqUkgG4ou1a5%2Bu9wD0OOyB8hP8cxCqzmBXnXL4TCwuO0uJLb9FyPPZ6GnJ9r2DRFVtXfDK20snj99J47rSIJhLAfyKwvLeOgZiQ2j9g8BhMOc6XSjpleeOjYTHxlJFIZW%2BkAswyVMeJu4BPta%2FpTBVW0vl%2BMY11FzzH0SL419DAd%2BmLf0YJLHGF6z6HlPILwGF1Hwyk0rzIIM9bkZG5zde4itgl0%2F%2FQkdzJR1AzjqIarkOILmtp97zyWlUZEwXUZLzLT%2Fbjd6Zql5VkkuLJlJYtulfYmtLo6ym5nMm0thZc7wDvGDaKV%2Bdde%2BUPlxsZC%2B%2B%2FK5zA61J4tygnma%2B%2FWccm9jMdabL8zJwFHPIgGR06vBioxwmqgWmMYXi30NvE50N0cQII4Z6u5fPybw6X1YZgnD3g%2BuLphqtysBTRNHTdIeLQkJG5YiWd7S3vmcHXB6lsXFl%2BktCxtroPucwfIkkTja6jAfucSRqyBj53t3atMbZu3%2B3lrlr20Qi7%2FwgqO8%2BhHBDkAXaX07Upj56ZZL0CpD5TSmXmpt7vZh%2F%2Booynj0maiqBsj%2FkWAo07nNDt%2FtuLBcQkOfhZft6xpd34x%2BJPQUnFaoDF2MVuHgQeJPMLSQ%2F8IGOqUBtQhp8sQ6WBRp3VZ%2Ffz70o5dmMiTOZ2mnQQgvrgPA237PfCP4bKe6pRYttMBTc9g8KZyIxY%2BTIOiEkOHHSer4fcLnRK%2FqdVx%2BUChg7%2FY7jftpP%2B7K24PVaMs5Z7zYS5W63vVJwGL48n%2B2o3HJ7kF97g7ugGMQxGrNk%2FCZLKXsdP6wMx0eiaBxeTJqCqb747Q8Vyja%2BuZRRaPS6VZ6jk8aHhfqLOy2&X-Amz-Signature=afa832ada55ea10126fdf72c7b3c894326178e24d9af41ea22ad3527a3062419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DXHGI4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNvkpnrfODy262OtKqs7iBcGg1emFXsx2378T7S39%2FdAiEAurLkJBQjAOkJBdKMueg5M%2BNsJCUqOuhVDVFZhrvELZQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkzYewVwOCgfqPKRCrcA5AsC9D5aiQb2wDEcxeAqUkgG4ou1a5%2Bu9wD0OOyB8hP8cxCqzmBXnXL4TCwuO0uJLb9FyPPZ6GnJ9r2DRFVtXfDK20snj99J47rSIJhLAfyKwvLeOgZiQ2j9g8BhMOc6XSjpleeOjYTHxlJFIZW%2BkAswyVMeJu4BPta%2FpTBVW0vl%2BMY11FzzH0SL419DAd%2BmLf0YJLHGF6z6HlPILwGF1Hwyk0rzIIM9bkZG5zde4itgl0%2F%2FQkdzJR1AzjqIarkOILmtp97zyWlUZEwXUZLzLT%2Fbjd6Zql5VkkuLJlJYtulfYmtLo6ym5nMm0thZc7wDvGDaKV%2Bdde%2BUPlxsZC%2B%2B%2FK5zA61J4tygnma%2B%2FWccm9jMdabL8zJwFHPIgGR06vBioxwmqgWmMYXi30NvE50N0cQII4Z6u5fPybw6X1YZgnD3g%2BuLphqtysBTRNHTdIeLQkJG5YiWd7S3vmcHXB6lsXFl%2BktCxtroPucwfIkkTja6jAfucSRqyBj53t3atMbZu3%2B3lrlr20Qi7%2FwgqO8%2BhHBDkAXaX07Upj56ZZL0CpD5TSmXmpt7vZh%2F%2Booynj0maiqBsj%2FkWAo07nNDt%2FtuLBcQkOfhZft6xpd34x%2BJPQUnFaoDF2MVuHgQeJPMLSQ%2F8IGOqUBtQhp8sQ6WBRp3VZ%2Ffz70o5dmMiTOZ2mnQQgvrgPA237PfCP4bKe6pRYttMBTc9g8KZyIxY%2BTIOiEkOHHSer4fcLnRK%2FqdVx%2BUChg7%2FY7jftpP%2B7K24PVaMs5Z7zYS5W63vVJwGL48n%2B2o3HJ7kF97g7ugGMQxGrNk%2FCZLKXsdP6wMx0eiaBxeTJqCqb747Q8Vyja%2BuZRRaPS6VZ6jk8aHhfqLOy2&X-Amz-Signature=e67a0acf6a87b183600a5f4161d966358bc9fa9d2726c258c606033050099f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656DXHGI4%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNvkpnrfODy262OtKqs7iBcGg1emFXsx2378T7S39%2FdAiEAurLkJBQjAOkJBdKMueg5M%2BNsJCUqOuhVDVFZhrvELZQqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkzYewVwOCgfqPKRCrcA5AsC9D5aiQb2wDEcxeAqUkgG4ou1a5%2Bu9wD0OOyB8hP8cxCqzmBXnXL4TCwuO0uJLb9FyPPZ6GnJ9r2DRFVtXfDK20snj99J47rSIJhLAfyKwvLeOgZiQ2j9g8BhMOc6XSjpleeOjYTHxlJFIZW%2BkAswyVMeJu4BPta%2FpTBVW0vl%2BMY11FzzH0SL419DAd%2BmLf0YJLHGF6z6HlPILwGF1Hwyk0rzIIM9bkZG5zde4itgl0%2F%2FQkdzJR1AzjqIarkOILmtp97zyWlUZEwXUZLzLT%2Fbjd6Zql5VkkuLJlJYtulfYmtLo6ym5nMm0thZc7wDvGDaKV%2Bdde%2BUPlxsZC%2B%2B%2FK5zA61J4tygnma%2B%2FWccm9jMdabL8zJwFHPIgGR06vBioxwmqgWmMYXi30NvE50N0cQII4Z6u5fPybw6X1YZgnD3g%2BuLphqtysBTRNHTdIeLQkJG5YiWd7S3vmcHXB6lsXFl%2BktCxtroPucwfIkkTja6jAfucSRqyBj53t3atMbZu3%2B3lrlr20Qi7%2FwgqO8%2BhHBDkAXaX07Upj56ZZL0CpD5TSmXmpt7vZh%2F%2Booynj0maiqBsj%2FkWAo07nNDt%2FtuLBcQkOfhZft6xpd34x%2BJPQUnFaoDF2MVuHgQeJPMLSQ%2F8IGOqUBtQhp8sQ6WBRp3VZ%2Ffz70o5dmMiTOZ2mnQQgvrgPA237PfCP4bKe6pRYttMBTc9g8KZyIxY%2BTIOiEkOHHSer4fcLnRK%2FqdVx%2BUChg7%2FY7jftpP%2B7K24PVaMs5Z7zYS5W63vVJwGL48n%2B2o3HJ7kF97g7ugGMQxGrNk%2FCZLKXsdP6wMx0eiaBxeTJqCqb747Q8Vyja%2BuZRRaPS6VZ6jk8aHhfqLOy2&X-Amz-Signature=d467eb648d04007659287467114d0bbcedf74efc0f96fb33407433aa0b2c53ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL644TDZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCydgTGXLdeneDOhQZoKSlZzcbUKQTZ3BGr3h6l6aH%2B3AIgaodIDMKuLQXWsXB%2BjiGuwYxd7uJpB0AAMXC1Mej8Mu4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGP7juYJCyArdmx4ASrcA%2BI1wt%2BnnFhiv2lrckr%2FQVpvgczJko0tfIVdFuwyGUE5OXKHkhFj5yhAN33%2BV37IdzMdJFslBOoeTrnhddew%2B7vUwO4AwhUXMhvu4J%2FCxCuCQ%2FqDbxPruJ09Xlv18zp7ReqZQikpBB7SMj1fjsggij60eZn%2FSnxhEXdNdHGGOExr0MSv7WX2kpCvJbCzcNZAJWOz%2B4VEsfAFiNM3hE25D62TmKBntR9hPqXldFZ49czc%2B5kR5SZL%2FC2BzW73%2BPymZdVmEmNyi8uT6QHm0vyIQdcOWv1XHXLNwFc8k%2FRX3R5jjyZMxOxNO%2F2fvFoOeqHFKz1zHpJUQhMSB%2FjDhPa%2FX5gYGX26lyndojMziYorfXm09bgkol7eoe6HacOrTDw1l7k%2BGp0G4Qc9HEuO8DAfwUaCu4Vw%2FoiSGir80haPPFoWqZ8y4E9raUUR0skAqfLYtVXoOvBZTKPmGAyvT%2BHjmjfuF4kLyMx3Ndksy%2FYNiSX7EhGyOHW%2BK3qvF7TeJx12MVfakyclqVdg5DLma%2B1YVvbaTW07y8iol7umwvqEUkzcivtCn88TQNZ8uQZCGB3Ftf3hooQCLYFEhiGQcqYtCpSty%2BWD35lb64gY%2FzGfAvbQJ436srxgIDSk4TGhMOqI%2F8EGOqUBJe0YMq4M1AQlvZBVhNUJvMJWw95b%2BRQ5uwJYOb0xHEs0lSgf%2FuuGYFWalKmWqJQboAHAQR0Z36YHqSTtq7xmqUzF3I9av4E1JWORrBsL5Ri6lt8VJPJ1XUjKwDe0ATMja0xSmC4ot%2BP8Yngp9fOfz4ZC%2BeEHfdYlhO5cfyXMo7QdFgAxBMqEC1yRZei3WEMJfLNpdbcMB935n%2FBUzN0%2Bob8oakhm&X-Amz-Signature=3644c84b0f75b2346339112e82ad02cb799ccfe89352e7fe5a94beda765a17f6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL644TDZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCydgTGXLdeneDOhQZoKSlZzcbUKQTZ3BGr3h6l6aH%2B3AIgaodIDMKuLQXWsXB%2BjiGuwYxd7uJpB0AAMXC1Mej8Mu4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGP7juYJCyArdmx4ASrcA%2BI1wt%2BnnFhiv2lrckr%2FQVpvgczJko0tfIVdFuwyGUE5OXKHkhFj5yhAN33%2BV37IdzMdJFslBOoeTrnhddew%2B7vUwO4AwhUXMhvu4J%2FCxCuCQ%2FqDbxPruJ09Xlv18zp7ReqZQikpBB7SMj1fjsggij60eZn%2FSnxhEXdNdHGGOExr0MSv7WX2kpCvJbCzcNZAJWOz%2B4VEsfAFiNM3hE25D62TmKBntR9hPqXldFZ49czc%2B5kR5SZL%2FC2BzW73%2BPymZdVmEmNyi8uT6QHm0vyIQdcOWv1XHXLNwFc8k%2FRX3R5jjyZMxOxNO%2F2fvFoOeqHFKz1zHpJUQhMSB%2FjDhPa%2FX5gYGX26lyndojMziYorfXm09bgkol7eoe6HacOrTDw1l7k%2BGp0G4Qc9HEuO8DAfwUaCu4Vw%2FoiSGir80haPPFoWqZ8y4E9raUUR0skAqfLYtVXoOvBZTKPmGAyvT%2BHjmjfuF4kLyMx3Ndksy%2FYNiSX7EhGyOHW%2BK3qvF7TeJx12MVfakyclqVdg5DLma%2B1YVvbaTW07y8iol7umwvqEUkzcivtCn88TQNZ8uQZCGB3Ftf3hooQCLYFEhiGQcqYtCpSty%2BWD35lb64gY%2FzGfAvbQJ436srxgIDSk4TGhMOqI%2F8EGOqUBJe0YMq4M1AQlvZBVhNUJvMJWw95b%2BRQ5uwJYOb0xHEs0lSgf%2FuuGYFWalKmWqJQboAHAQR0Z36YHqSTtq7xmqUzF3I9av4E1JWORrBsL5Ri6lt8VJPJ1XUjKwDe0ATMja0xSmC4ot%2BP8Yngp9fOfz4ZC%2BeEHfdYlhO5cfyXMo7QdFgAxBMqEC1yRZei3WEMJfLNpdbcMB935n%2FBUzN0%2Bob8oakhm&X-Amz-Signature=3899cdbd6b31849b1cf990211c2e5997d1cb9bca4aa3de8dc1f5ccbf8203d3ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL644TDZ%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T061333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQCydgTGXLdeneDOhQZoKSlZzcbUKQTZ3BGr3h6l6aH%2B3AIgaodIDMKuLQXWsXB%2BjiGuwYxd7uJpB0AAMXC1Mej8Mu4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDGP7juYJCyArdmx4ASrcA%2BI1wt%2BnnFhiv2lrckr%2FQVpvgczJko0tfIVdFuwyGUE5OXKHkhFj5yhAN33%2BV37IdzMdJFslBOoeTrnhddew%2B7vUwO4AwhUXMhvu4J%2FCxCuCQ%2FqDbxPruJ09Xlv18zp7ReqZQikpBB7SMj1fjsggij60eZn%2FSnxhEXdNdHGGOExr0MSv7WX2kpCvJbCzcNZAJWOz%2B4VEsfAFiNM3hE25D62TmKBntR9hPqXldFZ49czc%2B5kR5SZL%2FC2BzW73%2BPymZdVmEmNyi8uT6QHm0vyIQdcOWv1XHXLNwFc8k%2FRX3R5jjyZMxOxNO%2F2fvFoOeqHFKz1zHpJUQhMSB%2FjDhPa%2FX5gYGX26lyndojMziYorfXm09bgkol7eoe6HacOrTDw1l7k%2BGp0G4Qc9HEuO8DAfwUaCu4Vw%2FoiSGir80haPPFoWqZ8y4E9raUUR0skAqfLYtVXoOvBZTKPmGAyvT%2BHjmjfuF4kLyMx3Ndksy%2FYNiSX7EhGyOHW%2BK3qvF7TeJx12MVfakyclqVdg5DLma%2B1YVvbaTW07y8iol7umwvqEUkzcivtCn88TQNZ8uQZCGB3Ftf3hooQCLYFEhiGQcqYtCpSty%2BWD35lb64gY%2FzGfAvbQJ436srxgIDSk4TGhMOqI%2F8EGOqUBJe0YMq4M1AQlvZBVhNUJvMJWw95b%2BRQ5uwJYOb0xHEs0lSgf%2FuuGYFWalKmWqJQboAHAQR0Z36YHqSTtq7xmqUzF3I9av4E1JWORrBsL5Ri6lt8VJPJ1XUjKwDe0ATMja0xSmC4ot%2BP8Yngp9fOfz4ZC%2BeEHfdYlhO5cfyXMo7QdFgAxBMqEC1yRZei3WEMJfLNpdbcMB935n%2FBUzN0%2Bob8oakhm&X-Amz-Signature=3cfd8bf841cc1770b019d35a84d80c4aec50e5a37501ef18af0d05af2ea2e7bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

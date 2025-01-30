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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVHRFQD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFkWPOMEd9%2B102QPgZ7F0pLQ0mvWQxZWtUdGKbxC8JrAiBo0UsFo9actIMIsXB9%2B9ILpFtiHZcCxPeA88zAut0e4iqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhsmRgjiU4h0A4EyKtwDQ1tCAQoJaN%2Bb3zLh2mI9HmttTgIZZ2EvOy0u9nI%2BhNZqAsRmaKHLpFpwXr2hwinjcb3I%2BrbL31GW65i082y5r5HmNm7kgcejaGhX1TGpwI9%2B1yN03ZXrkddB%2BS0SUpWKaOJkxeVp4N7NT%2ByTmPmE5M2fUjrVyrjZ%2BYlx6nu41FluyY8K%2BmctZdUQoG3Uu5CQ9ODqPuQStVZUSU6LsM8%2F5vMO1vS013kfr70vVg4CYvuB5USoGFi5LNlMkcGvuKpOUDuF%2FLfXl010JERd%2FqR3HnOS%2FDOntoLR%2F%2FtpaZ475WeAb5oy%2B%2F8X%2Blvm3OQAjL0MlsjijbT5XILcrDro9740dxIbPbXzfvrLmbGmoW%2FdKNpgcJGjajyYgIltNaM%2FNIyIVCU3GKOSA7gZ%2BOccKxy3KQxQoOMDvrnQ1BFPNGNLhrsuYGpMWKZUAXHUxJH15VkjU5qWtEFWnC12OZ%2B9YjFjEBbTllWPvyTI9Pw5Vf330yxtND%2FGv3W6aGY%2BRw5LHAUgVTvDjwjDoUenGuOGxP0ebfNnufdUZJo6XvAonsK59cnNXCfVdltskp7zGcoLNSPq4l7BhpOUsmVZyt6F85eaENtq5Hnes2%2BcQGSbqpZBS8VBSzC4IdQtcg00ykQwyvztvAY6pgE%2Fm0iRUx5XjvqR35NTVtohEJPWff1CN%2F1PtqJGy5OV2Sbmg9G6avmslsCqQk3bdStFYxiO9dBaSgCMJqTL7x7y%2FSB5b%2F9Funa24mPdK4ypD70TNWj7tANshImAAvS%2FqBEsQJFdtxZK4nl6tnxJWv95Y8221uZiKFqZ3QOWlH2Q2LuDx2LqC4XjzLRIcZPT%2ByfHHWTl2e1ncUoQ2Z8U6XwCcDK%2FwdoW&X-Amz-Signature=b2452ce5a6a3ab3d03f427c8205421e7b4538ae0d8b2740d2ea52a9886fc0bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVHRFQD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFkWPOMEd9%2B102QPgZ7F0pLQ0mvWQxZWtUdGKbxC8JrAiBo0UsFo9actIMIsXB9%2B9ILpFtiHZcCxPeA88zAut0e4iqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhsmRgjiU4h0A4EyKtwDQ1tCAQoJaN%2Bb3zLh2mI9HmttTgIZZ2EvOy0u9nI%2BhNZqAsRmaKHLpFpwXr2hwinjcb3I%2BrbL31GW65i082y5r5HmNm7kgcejaGhX1TGpwI9%2B1yN03ZXrkddB%2BS0SUpWKaOJkxeVp4N7NT%2ByTmPmE5M2fUjrVyrjZ%2BYlx6nu41FluyY8K%2BmctZdUQoG3Uu5CQ9ODqPuQStVZUSU6LsM8%2F5vMO1vS013kfr70vVg4CYvuB5USoGFi5LNlMkcGvuKpOUDuF%2FLfXl010JERd%2FqR3HnOS%2FDOntoLR%2F%2FtpaZ475WeAb5oy%2B%2F8X%2Blvm3OQAjL0MlsjijbT5XILcrDro9740dxIbPbXzfvrLmbGmoW%2FdKNpgcJGjajyYgIltNaM%2FNIyIVCU3GKOSA7gZ%2BOccKxy3KQxQoOMDvrnQ1BFPNGNLhrsuYGpMWKZUAXHUxJH15VkjU5qWtEFWnC12OZ%2B9YjFjEBbTllWPvyTI9Pw5Vf330yxtND%2FGv3W6aGY%2BRw5LHAUgVTvDjwjDoUenGuOGxP0ebfNnufdUZJo6XvAonsK59cnNXCfVdltskp7zGcoLNSPq4l7BhpOUsmVZyt6F85eaENtq5Hnes2%2BcQGSbqpZBS8VBSzC4IdQtcg00ykQwyvztvAY6pgE%2Fm0iRUx5XjvqR35NTVtohEJPWff1CN%2F1PtqJGy5OV2Sbmg9G6avmslsCqQk3bdStFYxiO9dBaSgCMJqTL7x7y%2FSB5b%2F9Funa24mPdK4ypD70TNWj7tANshImAAvS%2FqBEsQJFdtxZK4nl6tnxJWv95Y8221uZiKFqZ3QOWlH2Q2LuDx2LqC4XjzLRIcZPT%2ByfHHWTl2e1ncUoQ2Z8U6XwCcDK%2FwdoW&X-Amz-Signature=80e8f820f18094e290090d570430ab06dfd2e9fa2ae5b13f51624b9f52b7081c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLVHRFQD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFkWPOMEd9%2B102QPgZ7F0pLQ0mvWQxZWtUdGKbxC8JrAiBo0UsFo9actIMIsXB9%2B9ILpFtiHZcCxPeA88zAut0e4iqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnhsmRgjiU4h0A4EyKtwDQ1tCAQoJaN%2Bb3zLh2mI9HmttTgIZZ2EvOy0u9nI%2BhNZqAsRmaKHLpFpwXr2hwinjcb3I%2BrbL31GW65i082y5r5HmNm7kgcejaGhX1TGpwI9%2B1yN03ZXrkddB%2BS0SUpWKaOJkxeVp4N7NT%2ByTmPmE5M2fUjrVyrjZ%2BYlx6nu41FluyY8K%2BmctZdUQoG3Uu5CQ9ODqPuQStVZUSU6LsM8%2F5vMO1vS013kfr70vVg4CYvuB5USoGFi5LNlMkcGvuKpOUDuF%2FLfXl010JERd%2FqR3HnOS%2FDOntoLR%2F%2FtpaZ475WeAb5oy%2B%2F8X%2Blvm3OQAjL0MlsjijbT5XILcrDro9740dxIbPbXzfvrLmbGmoW%2FdKNpgcJGjajyYgIltNaM%2FNIyIVCU3GKOSA7gZ%2BOccKxy3KQxQoOMDvrnQ1BFPNGNLhrsuYGpMWKZUAXHUxJH15VkjU5qWtEFWnC12OZ%2B9YjFjEBbTllWPvyTI9Pw5Vf330yxtND%2FGv3W6aGY%2BRw5LHAUgVTvDjwjDoUenGuOGxP0ebfNnufdUZJo6XvAonsK59cnNXCfVdltskp7zGcoLNSPq4l7BhpOUsmVZyt6F85eaENtq5Hnes2%2BcQGSbqpZBS8VBSzC4IdQtcg00ykQwyvztvAY6pgE%2Fm0iRUx5XjvqR35NTVtohEJPWff1CN%2F1PtqJGy5OV2Sbmg9G6avmslsCqQk3bdStFYxiO9dBaSgCMJqTL7x7y%2FSB5b%2F9Funa24mPdK4ypD70TNWj7tANshImAAvS%2FqBEsQJFdtxZK4nl6tnxJWv95Y8221uZiKFqZ3QOWlH2Q2LuDx2LqC4XjzLRIcZPT%2ByfHHWTl2e1ncUoQ2Z8U6XwCcDK%2FwdoW&X-Amz-Signature=a48221b37d2be8953397e23d338eec7aad532f42d0def6a39500b74795672ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

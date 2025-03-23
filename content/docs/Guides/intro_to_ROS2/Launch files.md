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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J52KDIH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCqMISmFCQF0S1nDHGw0c6OjwstZ8cP3PoQWCdXjxhagAIgTQwvz7h4i1L%2B0n3p0DUCKRyXGMK%2BibLsjDBPciIeoGAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUdLeZO6xBolis90yrcAxJp%2FKJrh5jqs3MAWeQ3iajOLbeNWtOjtK%2FZtGFm4BB0JzEZxqnG80s%2FzO%2Fv1bGajpQKhFhh85yX4ZlbfSmBerFmSvDozMFDX933XhPiRxBU96larFLSQEiPYHKoaS9A7Xv%2FL5WUGwQaRUfmFPTbig9TlhBgoo5jx7oa9dd1jYd3%2BPTJ2t47eyOSBRR%2FYrm6whVCx5Vzf5Gcne%2BblwrzIYvQeDxoToScXhzwPUPDtNYAFQAwjGe0T2nbMWxd4wnnPOElIOy4J9oQEIj3wN%2B61vWSgi0ep8WL3QO7Zi6DZt4OC4952Ixaj9DBb7fWE9ygrkFJJFrZBvPAbAheqOW2YY3D0wYAwNUulPSVEiK4Pd5VSSeV%2FcKixTdfGOHvCXgFUgaujBva0MsvS%2FqfzJBeWUJMN1NwMClvJE4cjsnAzX3ObB1rmgDXgT1rW5z7P25TmJQVH2wSF6sfuO%2Bm5YsYgZX89XwnDgWizNvfygkKaun36xILp%2B6WRPDNd0%2FRmh0ZhEIVS0VjxmvlZJqeA%2BUZ6dWYDAaGDWnWwrYUYoa0CkFnDqak1N3HX9XawUQnSMo2ztIxkyAL%2Fw9oHGq7bhpRTV0EX2mCWwIVXHosYzUl68RsTyhHd23AeeAf22SSMJHN%2F74GOqUB7z6ypkWaIbfDIjXTnFxc5HJ81RvYGJQokKl3S2jesyBF8v7pcAjPdhcQZjyXAE%2BUGfChdHw%2B8ruKQULHoft%2Fm3ZcN%2FDAnxMAWZV6UaI1ECpIXYpH8w0q14ZhqZ0RXG%2B725HN7OVzyPAv9%2FViZANJNwsKm2rI8%2BDGrhPFCnX5KpgURzmrAhOS%2BTa2g3In%2FcCm9td7wMLj%2F%2FVFXVckhWnDAlwbkZBx&X-Amz-Signature=3ae2ac5d8b967ae738b1b38bb8c26ab49222e03dd34853a71ac4385ee445e6fe&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J52KDIH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCqMISmFCQF0S1nDHGw0c6OjwstZ8cP3PoQWCdXjxhagAIgTQwvz7h4i1L%2B0n3p0DUCKRyXGMK%2BibLsjDBPciIeoGAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUdLeZO6xBolis90yrcAxJp%2FKJrh5jqs3MAWeQ3iajOLbeNWtOjtK%2FZtGFm4BB0JzEZxqnG80s%2FzO%2Fv1bGajpQKhFhh85yX4ZlbfSmBerFmSvDozMFDX933XhPiRxBU96larFLSQEiPYHKoaS9A7Xv%2FL5WUGwQaRUfmFPTbig9TlhBgoo5jx7oa9dd1jYd3%2BPTJ2t47eyOSBRR%2FYrm6whVCx5Vzf5Gcne%2BblwrzIYvQeDxoToScXhzwPUPDtNYAFQAwjGe0T2nbMWxd4wnnPOElIOy4J9oQEIj3wN%2B61vWSgi0ep8WL3QO7Zi6DZt4OC4952Ixaj9DBb7fWE9ygrkFJJFrZBvPAbAheqOW2YY3D0wYAwNUulPSVEiK4Pd5VSSeV%2FcKixTdfGOHvCXgFUgaujBva0MsvS%2FqfzJBeWUJMN1NwMClvJE4cjsnAzX3ObB1rmgDXgT1rW5z7P25TmJQVH2wSF6sfuO%2Bm5YsYgZX89XwnDgWizNvfygkKaun36xILp%2B6WRPDNd0%2FRmh0ZhEIVS0VjxmvlZJqeA%2BUZ6dWYDAaGDWnWwrYUYoa0CkFnDqak1N3HX9XawUQnSMo2ztIxkyAL%2Fw9oHGq7bhpRTV0EX2mCWwIVXHosYzUl68RsTyhHd23AeeAf22SSMJHN%2F74GOqUB7z6ypkWaIbfDIjXTnFxc5HJ81RvYGJQokKl3S2jesyBF8v7pcAjPdhcQZjyXAE%2BUGfChdHw%2B8ruKQULHoft%2Fm3ZcN%2FDAnxMAWZV6UaI1ECpIXYpH8w0q14ZhqZ0RXG%2B725HN7OVzyPAv9%2FViZANJNwsKm2rI8%2BDGrhPFCnX5KpgURzmrAhOS%2BTa2g3In%2FcCm9td7wMLj%2F%2FVFXVckhWnDAlwbkZBx&X-Amz-Signature=f1f4df3200e79ee3076ea1b52f475462f3b332fcf3d1a204ac520752755f5124&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J52KDIH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCqMISmFCQF0S1nDHGw0c6OjwstZ8cP3PoQWCdXjxhagAIgTQwvz7h4i1L%2B0n3p0DUCKRyXGMK%2BibLsjDBPciIeoGAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUdLeZO6xBolis90yrcAxJp%2FKJrh5jqs3MAWeQ3iajOLbeNWtOjtK%2FZtGFm4BB0JzEZxqnG80s%2FzO%2Fv1bGajpQKhFhh85yX4ZlbfSmBerFmSvDozMFDX933XhPiRxBU96larFLSQEiPYHKoaS9A7Xv%2FL5WUGwQaRUfmFPTbig9TlhBgoo5jx7oa9dd1jYd3%2BPTJ2t47eyOSBRR%2FYrm6whVCx5Vzf5Gcne%2BblwrzIYvQeDxoToScXhzwPUPDtNYAFQAwjGe0T2nbMWxd4wnnPOElIOy4J9oQEIj3wN%2B61vWSgi0ep8WL3QO7Zi6DZt4OC4952Ixaj9DBb7fWE9ygrkFJJFrZBvPAbAheqOW2YY3D0wYAwNUulPSVEiK4Pd5VSSeV%2FcKixTdfGOHvCXgFUgaujBva0MsvS%2FqfzJBeWUJMN1NwMClvJE4cjsnAzX3ObB1rmgDXgT1rW5z7P25TmJQVH2wSF6sfuO%2Bm5YsYgZX89XwnDgWizNvfygkKaun36xILp%2B6WRPDNd0%2FRmh0ZhEIVS0VjxmvlZJqeA%2BUZ6dWYDAaGDWnWwrYUYoa0CkFnDqak1N3HX9XawUQnSMo2ztIxkyAL%2Fw9oHGq7bhpRTV0EX2mCWwIVXHosYzUl68RsTyhHd23AeeAf22SSMJHN%2F74GOqUB7z6ypkWaIbfDIjXTnFxc5HJ81RvYGJQokKl3S2jesyBF8v7pcAjPdhcQZjyXAE%2BUGfChdHw%2B8ruKQULHoft%2Fm3ZcN%2FDAnxMAWZV6UaI1ECpIXYpH8w0q14ZhqZ0RXG%2B725HN7OVzyPAv9%2FViZANJNwsKm2rI8%2BDGrhPFCnX5KpgURzmrAhOS%2BTa2g3In%2FcCm9td7wMLj%2F%2FVFXVckhWnDAlwbkZBx&X-Amz-Signature=bb21ec14be79de576d8aaeb5fba395b0799fc3924f05ad6a36a5bdbfade201f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

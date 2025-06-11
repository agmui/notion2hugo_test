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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466557V3YHL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz8Y3bu4%2FUwUKqs9myp3wfwQFeV4xTf%2BjcbCH9gZvk%2BAiEAnSJA4Ti8hdfugZ0RSJEer7UDS2%2FgtycyAgqnqfJjRJoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYdC%2FnId03AkX1moSrcA%2FCZSui%2BrkQsHLXCggjoU0MsVR%2B6cdcEdqAuphcenVhp0PJCvXBzy%2B9Fq9TjI1HNw4lWzk6D5ZpkGdBqsiUpiet5ONJukBlRlkH2%2BA4ilph8EJpb30GTln3RlXxVfUntM9skaYvXyzhensArzkJkTyW4I%2BAylXNLd0h38zP98UHTpa7FKxW%2Fdu2s6nRTNBoRl1XWjOpCGcBuPpbigCfFiyh%2FRs52V7sY0wK9XSO3Q9LgjZ2Hv9BPm6iGMOOl%2FY8E5nAa69QEH8HUSBoJnVfhGlFj%2FwG%2BQYO%2Bup%2Fd09jo8wtv9HlUZTd7oovW7aZEEqbzAmRHHQCwgRqtc%2Bu%2Bv1KI0iNp%2FyXrTvxEpUCi7CKaiLfYt6iGqiZ6pWQQMpRmBP7B%2FOW%2BYWBz29%2F6K%2FCc9fwKYybkuw7IZebL%2BxAYe7Rg1Hd4KikOJb6IdCtVzD6IA0Q5TY1%2F3SbO2BPGu6iM5JICw5Q3%2BhDQsLXmFaSmRvxAjL0ifM1iV4ejkIkb%2F5lFJvzkq9hChhjphuThaNGH9WlUx0W4GuDVG3hXfHbpsMTKxr9Hj5GVaHWCrLZGcsVG9siSSR9geAl1vBHU20jDXqtw57mrUsFB9hnZXAb1BvnhtULaeHb6MkJvtBay4JSgMLDeo8IGOqUB%2F5yR1NRpBDOYg9l%2FDvnGWpchkgLTO68n4ENYHGIa005NFAoqGLc4sNrFdFUZoZHGdh6%2F4Wu1pilS0XX4VIE5LT1TOK5e1o1aGsZZ%2BQ9b%2Bjrw%2ByqjrRqu7GI%2BCM9QUhyQgKOxLr20Gxw%2BJyC4ZIdAAz35kATD7MeI3%2B3XuZTIfVx9jkxgiB97bZJSYzhJgjCNR4KdNwtH0874Or%2FAnHoR8GcgUm3Y&X-Amz-Signature=857d8a158b78f3e49304406fe004652ebf669b8b6d19baa2bc7219b344d71f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466557V3YHL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz8Y3bu4%2FUwUKqs9myp3wfwQFeV4xTf%2BjcbCH9gZvk%2BAiEAnSJA4Ti8hdfugZ0RSJEer7UDS2%2FgtycyAgqnqfJjRJoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYdC%2FnId03AkX1moSrcA%2FCZSui%2BrkQsHLXCggjoU0MsVR%2B6cdcEdqAuphcenVhp0PJCvXBzy%2B9Fq9TjI1HNw4lWzk6D5ZpkGdBqsiUpiet5ONJukBlRlkH2%2BA4ilph8EJpb30GTln3RlXxVfUntM9skaYvXyzhensArzkJkTyW4I%2BAylXNLd0h38zP98UHTpa7FKxW%2Fdu2s6nRTNBoRl1XWjOpCGcBuPpbigCfFiyh%2FRs52V7sY0wK9XSO3Q9LgjZ2Hv9BPm6iGMOOl%2FY8E5nAa69QEH8HUSBoJnVfhGlFj%2FwG%2BQYO%2Bup%2Fd09jo8wtv9HlUZTd7oovW7aZEEqbzAmRHHQCwgRqtc%2Bu%2Bv1KI0iNp%2FyXrTvxEpUCi7CKaiLfYt6iGqiZ6pWQQMpRmBP7B%2FOW%2BYWBz29%2F6K%2FCc9fwKYybkuw7IZebL%2BxAYe7Rg1Hd4KikOJb6IdCtVzD6IA0Q5TY1%2F3SbO2BPGu6iM5JICw5Q3%2BhDQsLXmFaSmRvxAjL0ifM1iV4ejkIkb%2F5lFJvzkq9hChhjphuThaNGH9WlUx0W4GuDVG3hXfHbpsMTKxr9Hj5GVaHWCrLZGcsVG9siSSR9geAl1vBHU20jDXqtw57mrUsFB9hnZXAb1BvnhtULaeHb6MkJvtBay4JSgMLDeo8IGOqUB%2F5yR1NRpBDOYg9l%2FDvnGWpchkgLTO68n4ENYHGIa005NFAoqGLc4sNrFdFUZoZHGdh6%2F4Wu1pilS0XX4VIE5LT1TOK5e1o1aGsZZ%2BQ9b%2Bjrw%2ByqjrRqu7GI%2BCM9QUhyQgKOxLr20Gxw%2BJyC4ZIdAAz35kATD7MeI3%2B3XuZTIfVx9jkxgiB97bZJSYzhJgjCNR4KdNwtH0874Or%2FAnHoR8GcgUm3Y&X-Amz-Signature=472e9a6a934b0522ab0a0f25930d35c00e879bd72b8768c53b90c44f7e0c155d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466557V3YHL%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T034111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz8Y3bu4%2FUwUKqs9myp3wfwQFeV4xTf%2BjcbCH9gZvk%2BAiEAnSJA4Ti8hdfugZ0RSJEer7UDS2%2FgtycyAgqnqfJjRJoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYdC%2FnId03AkX1moSrcA%2FCZSui%2BrkQsHLXCggjoU0MsVR%2B6cdcEdqAuphcenVhp0PJCvXBzy%2B9Fq9TjI1HNw4lWzk6D5ZpkGdBqsiUpiet5ONJukBlRlkH2%2BA4ilph8EJpb30GTln3RlXxVfUntM9skaYvXyzhensArzkJkTyW4I%2BAylXNLd0h38zP98UHTpa7FKxW%2Fdu2s6nRTNBoRl1XWjOpCGcBuPpbigCfFiyh%2FRs52V7sY0wK9XSO3Q9LgjZ2Hv9BPm6iGMOOl%2FY8E5nAa69QEH8HUSBoJnVfhGlFj%2FwG%2BQYO%2Bup%2Fd09jo8wtv9HlUZTd7oovW7aZEEqbzAmRHHQCwgRqtc%2Bu%2Bv1KI0iNp%2FyXrTvxEpUCi7CKaiLfYt6iGqiZ6pWQQMpRmBP7B%2FOW%2BYWBz29%2F6K%2FCc9fwKYybkuw7IZebL%2BxAYe7Rg1Hd4KikOJb6IdCtVzD6IA0Q5TY1%2F3SbO2BPGu6iM5JICw5Q3%2BhDQsLXmFaSmRvxAjL0ifM1iV4ejkIkb%2F5lFJvzkq9hChhjphuThaNGH9WlUx0W4GuDVG3hXfHbpsMTKxr9Hj5GVaHWCrLZGcsVG9siSSR9geAl1vBHU20jDXqtw57mrUsFB9hnZXAb1BvnhtULaeHb6MkJvtBay4JSgMLDeo8IGOqUB%2F5yR1NRpBDOYg9l%2FDvnGWpchkgLTO68n4ENYHGIa005NFAoqGLc4sNrFdFUZoZHGdh6%2F4Wu1pilS0XX4VIE5LT1TOK5e1o1aGsZZ%2BQ9b%2Bjrw%2ByqjrRqu7GI%2BCM9QUhyQgKOxLr20Gxw%2BJyC4ZIdAAz35kATD7MeI3%2B3XuZTIfVx9jkxgiB97bZJSYzhJgjCNR4KdNwtH0874Or%2FAnHoR8GcgUm3Y&X-Amz-Signature=2e3fdc8d65c962f2a236690471c2f5d42c02949bfa4972688b5e9a613206b9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

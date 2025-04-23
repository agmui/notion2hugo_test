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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHYEWIZO%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDRvva%2BGJsvr81fdvnOrw6B30Rh9KgdGdRZCj90xHZaNAiAdg1MuT3ICq5wFUoMcyHanBq7BvMOVo834SHe%2Bi6xk3yqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi2dUw9Hh5eP4ZqyxKtwDzBfDZ65SZOJc5WFmPjTaJEsBonnsJlo531qKbqqdHwh8x3agE5lLpK9HSv5%2Buw2TuXzNGSqcspXAzDJf2d4p7nxZT%2B53lB8MtVT0SgylF%2FABcjXJMdwWM9EfSISu2iQDMnOZJY22V31eSWNmh6CynPDf%2BEKYCCrx%2Bk5BRBKSxw0qVu55MGwQZ6XePxoh%2F0i4yhbpMu7%2Fr%2FFOLh8c0CwgDaArTCRap%2FgQMxnK01tMUbuEa2WDOXfXb0PmHJ3t3R9K9%2Fft7B1lhfi6H2ykzon905WDcc8iDsRp2LSLU1A04w3u%2BkoFlA7Q39MO6c3fWaVkC97Hg0XsJnRLi8bbhdhC0XP%2BUZAkJXJEVlEFh2yAq878s%2FsMXbyCxNuzh%2B0A7JFfZXL63oBgL1weksl03weCRcTuB7H%2FB4jVrrIBRiNDx71kdn%2Bsc5znJcprr3w5fKlb02IeCpG61ekuHkL4AWBpudpzPigs2OGHu2JXH1sEI8hMz7ErVvJnY0qYCAawcy88h0GKYGp%2BsWmzMpLUnhA30CaRIszg9Tyt1%2FukgTKnu1EUSMMRJ3nx1THqVzIuRQyeG38oR4w5TMGG9oPB2vdyQnEALJ508gky%2FdbSj5CQrECOrvxaF1FKYfi6IxMw69akwAY6pgGv5kd0N%2F%2BBUx%2FI4lbQo%2FyftCuUv4Y8vRjYwAWhCVOTyJZ%2BaJwzx1oPdKAbHR0CMh7a05nRALYRHDhmKmKbEd5Iam8NBkVO66vGwwA8ZIbnMh78MOutK7SWy%2F%2Bfl%2FCp8N9ASXvGR5RSgdrvqbZc2%2F0SbvLvwKcPuzoS9XAJXgGV2FZaemteuSsOE5rNicibylQHwfj%2FQZXdKHrho0Jhqj5xzETaV%2BOf&X-Amz-Signature=e32704a4de081b85572b5aa9efaa3b6f84677b7ffba310c8c4b2c320c6167cee&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHYEWIZO%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDRvva%2BGJsvr81fdvnOrw6B30Rh9KgdGdRZCj90xHZaNAiAdg1MuT3ICq5wFUoMcyHanBq7BvMOVo834SHe%2Bi6xk3yqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi2dUw9Hh5eP4ZqyxKtwDzBfDZ65SZOJc5WFmPjTaJEsBonnsJlo531qKbqqdHwh8x3agE5lLpK9HSv5%2Buw2TuXzNGSqcspXAzDJf2d4p7nxZT%2B53lB8MtVT0SgylF%2FABcjXJMdwWM9EfSISu2iQDMnOZJY22V31eSWNmh6CynPDf%2BEKYCCrx%2Bk5BRBKSxw0qVu55MGwQZ6XePxoh%2F0i4yhbpMu7%2Fr%2FFOLh8c0CwgDaArTCRap%2FgQMxnK01tMUbuEa2WDOXfXb0PmHJ3t3R9K9%2Fft7B1lhfi6H2ykzon905WDcc8iDsRp2LSLU1A04w3u%2BkoFlA7Q39MO6c3fWaVkC97Hg0XsJnRLi8bbhdhC0XP%2BUZAkJXJEVlEFh2yAq878s%2FsMXbyCxNuzh%2B0A7JFfZXL63oBgL1weksl03weCRcTuB7H%2FB4jVrrIBRiNDx71kdn%2Bsc5znJcprr3w5fKlb02IeCpG61ekuHkL4AWBpudpzPigs2OGHu2JXH1sEI8hMz7ErVvJnY0qYCAawcy88h0GKYGp%2BsWmzMpLUnhA30CaRIszg9Tyt1%2FukgTKnu1EUSMMRJ3nx1THqVzIuRQyeG38oR4w5TMGG9oPB2vdyQnEALJ508gky%2FdbSj5CQrECOrvxaF1FKYfi6IxMw69akwAY6pgGv5kd0N%2F%2BBUx%2FI4lbQo%2FyftCuUv4Y8vRjYwAWhCVOTyJZ%2BaJwzx1oPdKAbHR0CMh7a05nRALYRHDhmKmKbEd5Iam8NBkVO66vGwwA8ZIbnMh78MOutK7SWy%2F%2Bfl%2FCp8N9ASXvGR5RSgdrvqbZc2%2F0SbvLvwKcPuzoS9XAJXgGV2FZaemteuSsOE5rNicibylQHwfj%2FQZXdKHrho0Jhqj5xzETaV%2BOf&X-Amz-Signature=916dc7e5ef06242a779cc53c0d2707b526727bc96e6e27af321f01e0dfdfc5be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHYEWIZO%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIDRvva%2BGJsvr81fdvnOrw6B30Rh9KgdGdRZCj90xHZaNAiAdg1MuT3ICq5wFUoMcyHanBq7BvMOVo834SHe%2Bi6xk3yqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMi2dUw9Hh5eP4ZqyxKtwDzBfDZ65SZOJc5WFmPjTaJEsBonnsJlo531qKbqqdHwh8x3agE5lLpK9HSv5%2Buw2TuXzNGSqcspXAzDJf2d4p7nxZT%2B53lB8MtVT0SgylF%2FABcjXJMdwWM9EfSISu2iQDMnOZJY22V31eSWNmh6CynPDf%2BEKYCCrx%2Bk5BRBKSxw0qVu55MGwQZ6XePxoh%2F0i4yhbpMu7%2Fr%2FFOLh8c0CwgDaArTCRap%2FgQMxnK01tMUbuEa2WDOXfXb0PmHJ3t3R9K9%2Fft7B1lhfi6H2ykzon905WDcc8iDsRp2LSLU1A04w3u%2BkoFlA7Q39MO6c3fWaVkC97Hg0XsJnRLi8bbhdhC0XP%2BUZAkJXJEVlEFh2yAq878s%2FsMXbyCxNuzh%2B0A7JFfZXL63oBgL1weksl03weCRcTuB7H%2FB4jVrrIBRiNDx71kdn%2Bsc5znJcprr3w5fKlb02IeCpG61ekuHkL4AWBpudpzPigs2OGHu2JXH1sEI8hMz7ErVvJnY0qYCAawcy88h0GKYGp%2BsWmzMpLUnhA30CaRIszg9Tyt1%2FukgTKnu1EUSMMRJ3nx1THqVzIuRQyeG38oR4w5TMGG9oPB2vdyQnEALJ508gky%2FdbSj5CQrECOrvxaF1FKYfi6IxMw69akwAY6pgGv5kd0N%2F%2BBUx%2FI4lbQo%2FyftCuUv4Y8vRjYwAWhCVOTyJZ%2BaJwzx1oPdKAbHR0CMh7a05nRALYRHDhmKmKbEd5Iam8NBkVO66vGwwA8ZIbnMh78MOutK7SWy%2F%2Bfl%2FCp8N9ASXvGR5RSgdrvqbZc2%2F0SbvLvwKcPuzoS9XAJXgGV2FZaemteuSsOE5rNicibylQHwfj%2FQZXdKHrho0Jhqj5xzETaV%2BOf&X-Amz-Signature=9f3a333db1120ae0a74ff513fc630914cff2eb9cde062dfe62aceac133b152d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

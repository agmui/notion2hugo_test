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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2ED5BX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIH6C7GFFU6AS1IsineY00bDmTsx9OToxOcDj9AYAiOpTAiBlsuwF9ORxOUvccH2jfG0ImcefS2FcGbzpYA0np1Ducyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMn92Vmi8hGvT4n0eYKtwDlzjVvumTvX8vwMPuSbZeLZ%2BF7HIbEkm%2BfwqFHziDaqK4e5GpJDMvOS1XAccg4USHvjH2azqFth%2BVNQCGb0Em08m%2FqTQ2ySVERB8Tzn6gr3h61oh5EKPlmC%2FUBNiOKz%2BFHPZVnl9vN7FTPAopNkpgd3rwvbg4%2BdSyZ59jDveEri2feJ8SGOsQdNcNDWxlebWjgeRAK%2BrPXpxTnSvX7bEPA%2F8A2932GZ4weInNvzsFnhjlyotx9SuB1w0H3Iue%2BCgi9RIkVKQRiXQLQZq1nmVm28efl3rK8pGye6l6b6U%2BhmWrZaYTyTQHMPy3t8KDRddlc%2B%2BtLkXB3X1uwSWT341XP9I0bu%2FXbv9beLa4OuKO09BWYUbH6mJuj4C2zUd48hXjzz9lknphM4YKj5qh5yvV0nfK%2FP6Fs0TPQImiVpSB44ylUF9lNDKc%2FLQBZHN9g5e1AL2HSMvEBC%2BM%2FQKhCnCo8yz3gzz%2FhkRIhgP0i5NTUG3QixQe%2BWh3oOLpS7vdC3Kudaug3ZwM9OPG0IHzy1%2BC6Mf%2FBFlDFzo4bvotqD1yvIAKw99tBZKKZQgdwKg6O3g8iySzvjzo5ut0HyTIZoUq9ARKSFyCVVHGHsvKYv8l6QAnr%2FhaIM1BnKuQrN0w8aLRwwY6pgEFT9Enu1zhn%2FJ52ryI%2BD3vlL6ZvqeNrQJc7YwLh1PmMywaCOQvhJ1AhMGUvKFAjmWhg%2BShsy%2FMFtEkhOIacLOPputsAyDy2NDtINsPot67zSkwA10USPucN%2FDy3L%2F4pD9AJY%2FvB0siNqXQtYEIsmIqqtha%2F8hnESuY8lCIr744GI185bvPvwuwkwWtr%2B3JDm2zZeiDeg%2BVdMBkJBuol7%2FFyCCcbmcg&X-Amz-Signature=311823f49ff327b472ec5f362829e860f7186ba32e895cf92a39f24f9ae47b2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2ED5BX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIH6C7GFFU6AS1IsineY00bDmTsx9OToxOcDj9AYAiOpTAiBlsuwF9ORxOUvccH2jfG0ImcefS2FcGbzpYA0np1Ducyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMn92Vmi8hGvT4n0eYKtwDlzjVvumTvX8vwMPuSbZeLZ%2BF7HIbEkm%2BfwqFHziDaqK4e5GpJDMvOS1XAccg4USHvjH2azqFth%2BVNQCGb0Em08m%2FqTQ2ySVERB8Tzn6gr3h61oh5EKPlmC%2FUBNiOKz%2BFHPZVnl9vN7FTPAopNkpgd3rwvbg4%2BdSyZ59jDveEri2feJ8SGOsQdNcNDWxlebWjgeRAK%2BrPXpxTnSvX7bEPA%2F8A2932GZ4weInNvzsFnhjlyotx9SuB1w0H3Iue%2BCgi9RIkVKQRiXQLQZq1nmVm28efl3rK8pGye6l6b6U%2BhmWrZaYTyTQHMPy3t8KDRddlc%2B%2BtLkXB3X1uwSWT341XP9I0bu%2FXbv9beLa4OuKO09BWYUbH6mJuj4C2zUd48hXjzz9lknphM4YKj5qh5yvV0nfK%2FP6Fs0TPQImiVpSB44ylUF9lNDKc%2FLQBZHN9g5e1AL2HSMvEBC%2BM%2FQKhCnCo8yz3gzz%2FhkRIhgP0i5NTUG3QixQe%2BWh3oOLpS7vdC3Kudaug3ZwM9OPG0IHzy1%2BC6Mf%2FBFlDFzo4bvotqD1yvIAKw99tBZKKZQgdwKg6O3g8iySzvjzo5ut0HyTIZoUq9ARKSFyCVVHGHsvKYv8l6QAnr%2FhaIM1BnKuQrN0w8aLRwwY6pgEFT9Enu1zhn%2FJ52ryI%2BD3vlL6ZvqeNrQJc7YwLh1PmMywaCOQvhJ1AhMGUvKFAjmWhg%2BShsy%2FMFtEkhOIacLOPputsAyDy2NDtINsPot67zSkwA10USPucN%2FDy3L%2F4pD9AJY%2FvB0siNqXQtYEIsmIqqtha%2F8hnESuY8lCIr744GI185bvPvwuwkwWtr%2B3JDm2zZeiDeg%2BVdMBkJBuol7%2FFyCCcbmcg&X-Amz-Signature=bf89d5816e2d33580603062b17114f16066157d59421e580a3e3f94281e61435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L2ED5BX%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T004748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIH6C7GFFU6AS1IsineY00bDmTsx9OToxOcDj9AYAiOpTAiBlsuwF9ORxOUvccH2jfG0ImcefS2FcGbzpYA0np1Ducyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMn92Vmi8hGvT4n0eYKtwDlzjVvumTvX8vwMPuSbZeLZ%2BF7HIbEkm%2BfwqFHziDaqK4e5GpJDMvOS1XAccg4USHvjH2azqFth%2BVNQCGb0Em08m%2FqTQ2ySVERB8Tzn6gr3h61oh5EKPlmC%2FUBNiOKz%2BFHPZVnl9vN7FTPAopNkpgd3rwvbg4%2BdSyZ59jDveEri2feJ8SGOsQdNcNDWxlebWjgeRAK%2BrPXpxTnSvX7bEPA%2F8A2932GZ4weInNvzsFnhjlyotx9SuB1w0H3Iue%2BCgi9RIkVKQRiXQLQZq1nmVm28efl3rK8pGye6l6b6U%2BhmWrZaYTyTQHMPy3t8KDRddlc%2B%2BtLkXB3X1uwSWT341XP9I0bu%2FXbv9beLa4OuKO09BWYUbH6mJuj4C2zUd48hXjzz9lknphM4YKj5qh5yvV0nfK%2FP6Fs0TPQImiVpSB44ylUF9lNDKc%2FLQBZHN9g5e1AL2HSMvEBC%2BM%2FQKhCnCo8yz3gzz%2FhkRIhgP0i5NTUG3QixQe%2BWh3oOLpS7vdC3Kudaug3ZwM9OPG0IHzy1%2BC6Mf%2FBFlDFzo4bvotqD1yvIAKw99tBZKKZQgdwKg6O3g8iySzvjzo5ut0HyTIZoUq9ARKSFyCVVHGHsvKYv8l6QAnr%2FhaIM1BnKuQrN0w8aLRwwY6pgEFT9Enu1zhn%2FJ52ryI%2BD3vlL6ZvqeNrQJc7YwLh1PmMywaCOQvhJ1AhMGUvKFAjmWhg%2BShsy%2FMFtEkhOIacLOPputsAyDy2NDtINsPot67zSkwA10USPucN%2FDy3L%2F4pD9AJY%2FvB0siNqXQtYEIsmIqqtha%2F8hnESuY8lCIr744GI185bvPvwuwkwWtr%2B3JDm2zZeiDeg%2BVdMBkJBuol7%2FFyCCcbmcg&X-Amz-Signature=036a56463b97084d123bc981ca1a62ad90b48665224c50baddd529395074dd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

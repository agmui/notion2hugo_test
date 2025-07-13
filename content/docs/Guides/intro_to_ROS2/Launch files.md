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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642T4HSRP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGxs8II26wPaxPWkV3ntTeuzzkGiYVJW4k8YMlYgS33TAiA4NLPPxpwjNvXuTYL%2Bny4pPGw5K8EYb%2FJYUOZPV5fuVir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMpSAQxjljQsZM9AqtKtwDXMKE9yY0zy6kXyAim9YLNJLwAg6MSPmD2moWVZ0P%2FX%2BLu39b9NcG5ZKpReqLjrEPeIphNBiYpo8bGpvqucv5O7YLlYlfJBv7xoYCgnT4jO%2BB5lIsDfrE465hY1rRUWrTq%2BZ4xHJRccLWbAD5OZqumS0KjaxHFq1xCEbRt4xHn2ZMc49ki2d3TikEr5bjfVgdgWVvauADQ0UfNeEeLpBPbHvLjMDTVAQdOSlYFZSCEHM49Ixh%2F9%2Fyd8DXLE4VnTQ85qua0CfRdERv6GWXyuGdOiZ7Zz9vnB%2FqoGDuYkt3nG2dgAFcoh1gEGqIN4wNUNgKxuS%2FSk7vrsVvXkCLattGgNGxqOkSISeqZFTo2gQoQqab2JuDw%2BF7f%2F23RTb8kcOu0%2FXjhUUlCkxQXukx4JlVIecj9fb51yJ7hi2bFa2G%2FCMkg278O4O%2BFXtBxF4toKibqLiPAC%2FRZ%2B%2FlNa35uC5ejRPf5Xxnxgkuo3gP34yrkILMJSeKIFbdCKSAiIExu8Yjig6U6t4lrPhEj07LMZjfzfsUJpzAE57lCyOtwXNL5IAe2L5607KSCUYMV3eyZT5q4A7g8ib6cxT1sslNEW46ex%2BKKyMglvOgReVWvTE2TE52H8wIvbaBbCeIsYkwo%2BfPwwY6pgFxz%2FGfuNLKNt0ii%2BC%2Fj1MJV42PZhutQmozaWpHEoFbmGSk9Jy0hOtKBWYmsg4wcINIshsV0Qoq%2FUp14AjQnGNZd8RhsZDOrQTMJdB%2FG3TNy%2BZv2UtKT7NUz9N0rgQy6QUJ7mnDzfdWq3ZL2RvpO3aajRAijKQgHo5Ds5q1AQTl2lO0wi3vW76UunAn3uSlYKeeNLrIkhLOEaaAlYoSjnH0zRgu%2BYcf&X-Amz-Signature=e89a8fcc0eaeb59b35e933bbbd6c03a6a0903311d1b4a1cf7d0aa23881a8dc47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642T4HSRP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGxs8II26wPaxPWkV3ntTeuzzkGiYVJW4k8YMlYgS33TAiA4NLPPxpwjNvXuTYL%2Bny4pPGw5K8EYb%2FJYUOZPV5fuVir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMpSAQxjljQsZM9AqtKtwDXMKE9yY0zy6kXyAim9YLNJLwAg6MSPmD2moWVZ0P%2FX%2BLu39b9NcG5ZKpReqLjrEPeIphNBiYpo8bGpvqucv5O7YLlYlfJBv7xoYCgnT4jO%2BB5lIsDfrE465hY1rRUWrTq%2BZ4xHJRccLWbAD5OZqumS0KjaxHFq1xCEbRt4xHn2ZMc49ki2d3TikEr5bjfVgdgWVvauADQ0UfNeEeLpBPbHvLjMDTVAQdOSlYFZSCEHM49Ixh%2F9%2Fyd8DXLE4VnTQ85qua0CfRdERv6GWXyuGdOiZ7Zz9vnB%2FqoGDuYkt3nG2dgAFcoh1gEGqIN4wNUNgKxuS%2FSk7vrsVvXkCLattGgNGxqOkSISeqZFTo2gQoQqab2JuDw%2BF7f%2F23RTb8kcOu0%2FXjhUUlCkxQXukx4JlVIecj9fb51yJ7hi2bFa2G%2FCMkg278O4O%2BFXtBxF4toKibqLiPAC%2FRZ%2B%2FlNa35uC5ejRPf5Xxnxgkuo3gP34yrkILMJSeKIFbdCKSAiIExu8Yjig6U6t4lrPhEj07LMZjfzfsUJpzAE57lCyOtwXNL5IAe2L5607KSCUYMV3eyZT5q4A7g8ib6cxT1sslNEW46ex%2BKKyMglvOgReVWvTE2TE52H8wIvbaBbCeIsYkwo%2BfPwwY6pgFxz%2FGfuNLKNt0ii%2BC%2Fj1MJV42PZhutQmozaWpHEoFbmGSk9Jy0hOtKBWYmsg4wcINIshsV0Qoq%2FUp14AjQnGNZd8RhsZDOrQTMJdB%2FG3TNy%2BZv2UtKT7NUz9N0rgQy6QUJ7mnDzfdWq3ZL2RvpO3aajRAijKQgHo5Ds5q1AQTl2lO0wi3vW76UunAn3uSlYKeeNLrIkhLOEaaAlYoSjnH0zRgu%2BYcf&X-Amz-Signature=feb6f9a679257bca5a0d19043e472d37dfd1207a49e9b7ea91a583d2d10b7a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642T4HSRP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIGxs8II26wPaxPWkV3ntTeuzzkGiYVJW4k8YMlYgS33TAiA4NLPPxpwjNvXuTYL%2Bny4pPGw5K8EYb%2FJYUOZPV5fuVir%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMpSAQxjljQsZM9AqtKtwDXMKE9yY0zy6kXyAim9YLNJLwAg6MSPmD2moWVZ0P%2FX%2BLu39b9NcG5ZKpReqLjrEPeIphNBiYpo8bGpvqucv5O7YLlYlfJBv7xoYCgnT4jO%2BB5lIsDfrE465hY1rRUWrTq%2BZ4xHJRccLWbAD5OZqumS0KjaxHFq1xCEbRt4xHn2ZMc49ki2d3TikEr5bjfVgdgWVvauADQ0UfNeEeLpBPbHvLjMDTVAQdOSlYFZSCEHM49Ixh%2F9%2Fyd8DXLE4VnTQ85qua0CfRdERv6GWXyuGdOiZ7Zz9vnB%2FqoGDuYkt3nG2dgAFcoh1gEGqIN4wNUNgKxuS%2FSk7vrsVvXkCLattGgNGxqOkSISeqZFTo2gQoQqab2JuDw%2BF7f%2F23RTb8kcOu0%2FXjhUUlCkxQXukx4JlVIecj9fb51yJ7hi2bFa2G%2FCMkg278O4O%2BFXtBxF4toKibqLiPAC%2FRZ%2B%2FlNa35uC5ejRPf5Xxnxgkuo3gP34yrkILMJSeKIFbdCKSAiIExu8Yjig6U6t4lrPhEj07LMZjfzfsUJpzAE57lCyOtwXNL5IAe2L5607KSCUYMV3eyZT5q4A7g8ib6cxT1sslNEW46ex%2BKKyMglvOgReVWvTE2TE52H8wIvbaBbCeIsYkwo%2BfPwwY6pgFxz%2FGfuNLKNt0ii%2BC%2Fj1MJV42PZhutQmozaWpHEoFbmGSk9Jy0hOtKBWYmsg4wcINIshsV0Qoq%2FUp14AjQnGNZd8RhsZDOrQTMJdB%2FG3TNy%2BZv2UtKT7NUz9N0rgQy6QUJ7mnDzfdWq3ZL2RvpO3aajRAijKQgHo5Ds5q1AQTl2lO0wi3vW76UunAn3uSlYKeeNLrIkhLOEaaAlYoSjnH0zRgu%2BYcf&X-Amz-Signature=bf75fcc14e5f2d23c07bb663035c63b0b59c5c20d573e4d4da287e53ee8f29aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

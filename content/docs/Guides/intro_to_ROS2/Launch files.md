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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXFJVBSD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDR5kl%2Fn0ezyrdIbyyICz0uRd5QY4HD8iK1QBtPSJ3tawIhAP7Ri6qTWzDhIMKFoP230y9yN1olKHDTiyI5BN0pKASyKv8DCCoQABoMNjM3NDIzMTgzODA1IgwUmfdtYBg34Ppx7Wwq3AMdwQfSSNSFpNYynRoQWHELYyscmyIXJ959BEcWXy3rXQOvqIZZiagildWNAH0dB5EgAdj8l5PDXZdVHCr1wTpNMMUfwlApCCiX04jWlsInUVYCNbwJ4m2uc4W34lKcshOL0K4gyo4RH3QZrVK8Duq2lc8y0RyxZkb2%2BSavDJrm04%2BbkdDjd6DtugW%2F0pZt3kJW3URmhzR02WIOsCPytenxdEJRNTtfaS5nSS6lF40pqU2EHr2Kq3wWVx5sjycDK7IEtC%2BGDRQvzTa0ASFqsVwgs799Aenol2eebCh1UEw32v2ksGI8LK%2BNqtuBZjCX4AshbldP0g9pi67RbR%2BSPJW6dKhIp9fMgxYVE2k83Cj%2FPdouugwK93mTwtZ0trVS09BULrNtmdQ4HJTTn5I6c2zmclWnBSx0FMcKpAr5lvNBpaOR5Tkk2Zoj4dZKu7qE%2Fl4fg0tC2dzkvEinguZgNHTuKzokGDqdazvZ2F3Zs8IIl227ZKYldgOqrg0CZELZ9Wuo9%2BDi8QTxL%2BoDiaRUn3LQAT%2FzvcvoDqKZBTEsBkwpY5QNKYRNUBFqRYvWzMailUjmGK9NZp%2FxoC0uxnnRSQ9%2FLI1LoZ9XWeztyhF2sb31MdR7bs9pdyA%2FH43jSjCjiNPDBjqkAR9dlYwpOHEdoHQRUBdzpkCd%2BN3pRRmZMk8IJgR0Eb6R%2FE%2BaSZ6JgE3Ct3vUrnyrcbe45uht2MXK232pmD3fFvdFFjyM1oRt%2BmDX60GAuVw%2BJL44CyR1N%2BVxVWeTpuQ%2B6tHbTTYB0bmpYLQ8X538rPAJFncpG3%2BlDtsenOAGrOKczNzahu%2BMZ%2FRk7NWUdo9CrMLx7gELf1oWyUjGpPEFmA7Wi4Bi&X-Amz-Signature=e03e515fc529784cdbb26195e0461772e43d4d60677af37337f064f18576e37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXFJVBSD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDR5kl%2Fn0ezyrdIbyyICz0uRd5QY4HD8iK1QBtPSJ3tawIhAP7Ri6qTWzDhIMKFoP230y9yN1olKHDTiyI5BN0pKASyKv8DCCoQABoMNjM3NDIzMTgzODA1IgwUmfdtYBg34Ppx7Wwq3AMdwQfSSNSFpNYynRoQWHELYyscmyIXJ959BEcWXy3rXQOvqIZZiagildWNAH0dB5EgAdj8l5PDXZdVHCr1wTpNMMUfwlApCCiX04jWlsInUVYCNbwJ4m2uc4W34lKcshOL0K4gyo4RH3QZrVK8Duq2lc8y0RyxZkb2%2BSavDJrm04%2BbkdDjd6DtugW%2F0pZt3kJW3URmhzR02WIOsCPytenxdEJRNTtfaS5nSS6lF40pqU2EHr2Kq3wWVx5sjycDK7IEtC%2BGDRQvzTa0ASFqsVwgs799Aenol2eebCh1UEw32v2ksGI8LK%2BNqtuBZjCX4AshbldP0g9pi67RbR%2BSPJW6dKhIp9fMgxYVE2k83Cj%2FPdouugwK93mTwtZ0trVS09BULrNtmdQ4HJTTn5I6c2zmclWnBSx0FMcKpAr5lvNBpaOR5Tkk2Zoj4dZKu7qE%2Fl4fg0tC2dzkvEinguZgNHTuKzokGDqdazvZ2F3Zs8IIl227ZKYldgOqrg0CZELZ9Wuo9%2BDi8QTxL%2BoDiaRUn3LQAT%2FzvcvoDqKZBTEsBkwpY5QNKYRNUBFqRYvWzMailUjmGK9NZp%2FxoC0uxnnRSQ9%2FLI1LoZ9XWeztyhF2sb31MdR7bs9pdyA%2FH43jSjCjiNPDBjqkAR9dlYwpOHEdoHQRUBdzpkCd%2BN3pRRmZMk8IJgR0Eb6R%2FE%2BaSZ6JgE3Ct3vUrnyrcbe45uht2MXK232pmD3fFvdFFjyM1oRt%2BmDX60GAuVw%2BJL44CyR1N%2BVxVWeTpuQ%2B6tHbTTYB0bmpYLQ8X538rPAJFncpG3%2BlDtsenOAGrOKczNzahu%2BMZ%2FRk7NWUdo9CrMLx7gELf1oWyUjGpPEFmA7Wi4Bi&X-Amz-Signature=557a3188f7963b410b8f224a3ea5da37e1cfd676be2b13fc9f604600f93459e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXFJVBSD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDR5kl%2Fn0ezyrdIbyyICz0uRd5QY4HD8iK1QBtPSJ3tawIhAP7Ri6qTWzDhIMKFoP230y9yN1olKHDTiyI5BN0pKASyKv8DCCoQABoMNjM3NDIzMTgzODA1IgwUmfdtYBg34Ppx7Wwq3AMdwQfSSNSFpNYynRoQWHELYyscmyIXJ959BEcWXy3rXQOvqIZZiagildWNAH0dB5EgAdj8l5PDXZdVHCr1wTpNMMUfwlApCCiX04jWlsInUVYCNbwJ4m2uc4W34lKcshOL0K4gyo4RH3QZrVK8Duq2lc8y0RyxZkb2%2BSavDJrm04%2BbkdDjd6DtugW%2F0pZt3kJW3URmhzR02WIOsCPytenxdEJRNTtfaS5nSS6lF40pqU2EHr2Kq3wWVx5sjycDK7IEtC%2BGDRQvzTa0ASFqsVwgs799Aenol2eebCh1UEw32v2ksGI8LK%2BNqtuBZjCX4AshbldP0g9pi67RbR%2BSPJW6dKhIp9fMgxYVE2k83Cj%2FPdouugwK93mTwtZ0trVS09BULrNtmdQ4HJTTn5I6c2zmclWnBSx0FMcKpAr5lvNBpaOR5Tkk2Zoj4dZKu7qE%2Fl4fg0tC2dzkvEinguZgNHTuKzokGDqdazvZ2F3Zs8IIl227ZKYldgOqrg0CZELZ9Wuo9%2BDi8QTxL%2BoDiaRUn3LQAT%2FzvcvoDqKZBTEsBkwpY5QNKYRNUBFqRYvWzMailUjmGK9NZp%2FxoC0uxnnRSQ9%2FLI1LoZ9XWeztyhF2sb31MdR7bs9pdyA%2FH43jSjCjiNPDBjqkAR9dlYwpOHEdoHQRUBdzpkCd%2BN3pRRmZMk8IJgR0Eb6R%2FE%2BaSZ6JgE3Ct3vUrnyrcbe45uht2MXK232pmD3fFvdFFjyM1oRt%2BmDX60GAuVw%2BJL44CyR1N%2BVxVWeTpuQ%2B6tHbTTYB0bmpYLQ8X538rPAJFncpG3%2BlDtsenOAGrOKczNzahu%2BMZ%2FRk7NWUdo9CrMLx7gELf1oWyUjGpPEFmA7Wi4Bi&X-Amz-Signature=22cdadb679cb86c882815aeac042112f7b1b7e36747b48577f53749426fad7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCAJC7KT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGi%2BwvExgtK2P1T02r5N7ZwcxTwK6LQ2QBAL1SRm%2BfNNAiEAnywh21AbDEC3s61fL7dlsAul%2BblQlKZLDcPt6mH%2F9poq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIOraboxrVFETZtXAircA2sjUTWRUfEw5zEF8rT%2FsOfNUhkQNwTSoWMt2ZdiDZxz82WTlXHRabkwPDwtRozO%2FcA9qq5ipmdl9%2B%2BBWRrfSVMHaSKwGlI83JMT3retS5nbX4QtHrF0CmtKq8gqxPwtRalf8oREIsXqL%2BfAQ4xCG7Ryvmf4e%2F8nza4fPm0YFDQffDUhd2TTldUe0QcC7MUD0ZqCyvbZ97TA6YkyIA7ASnuyUNAhhVCxBSGKAnuVrrNDqbRN7%2FoaKqR0aOQjtpMX%2F6UTNHuAxsE8DpfSh9SLuOgZUm2Sc1B7PatGChsrsm4pdojulEL8%2BKymo9EAqUMK4HTXgiseAVn9%2Fphk5e07VxG3yXedqw5hPQu93HjZfZ1uoJ8PDZITTunD1w61FLyZmgnq9ycqb8Gp%2BEFzyEz0NJ1rYYPG1tZu4HTNLF3OI2DAicErTve8JKRBld3LET1s7%2BOj3U2PFgxapj15zv0FKVJILktk8Z9Zq68MUyQsjkJzXWJvqEIQMDsMIcGERwSXu38j8CcDi4qm4lXC2x4CcDVkDpyy0sH2CIqC5yTSjRph4qB%2BAy4lpErMRHi%2BQnMsL7npERqyFtCi9IkRIHUjOuTUz3EztaZdYld5LwpYr5ny%2Fz1D8kkkFwcJn6A6ML6N5cMGOqUBHcDN7ZZ%2Br0hu3Fe6t%2BoaRLUM3s9SvX9ZlVfK5%2FzJIW0lsY3eYmibBa2OsaTHClSm2F1nu0ZfJMblmE6OUodtdzTig88KqNbbqOhJapcqJqETaIYmMR%2Bpv1zvk3Az6b6%2BeZrXa%2BGwBstGWAUCckOEP9clJKSFNAL07CMOOwHSschfNUyWCnm7KMdaAFR4wTJafgSMz1cylBpfEapQ%2FlYJ0KjXeXGD&X-Amz-Signature=383e8a3e1e58ca40b906510681058100854f8cdbb503bdc4ef957136fb96f66a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCAJC7KT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGi%2BwvExgtK2P1T02r5N7ZwcxTwK6LQ2QBAL1SRm%2BfNNAiEAnywh21AbDEC3s61fL7dlsAul%2BblQlKZLDcPt6mH%2F9poq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIOraboxrVFETZtXAircA2sjUTWRUfEw5zEF8rT%2FsOfNUhkQNwTSoWMt2ZdiDZxz82WTlXHRabkwPDwtRozO%2FcA9qq5ipmdl9%2B%2BBWRrfSVMHaSKwGlI83JMT3retS5nbX4QtHrF0CmtKq8gqxPwtRalf8oREIsXqL%2BfAQ4xCG7Ryvmf4e%2F8nza4fPm0YFDQffDUhd2TTldUe0QcC7MUD0ZqCyvbZ97TA6YkyIA7ASnuyUNAhhVCxBSGKAnuVrrNDqbRN7%2FoaKqR0aOQjtpMX%2F6UTNHuAxsE8DpfSh9SLuOgZUm2Sc1B7PatGChsrsm4pdojulEL8%2BKymo9EAqUMK4HTXgiseAVn9%2Fphk5e07VxG3yXedqw5hPQu93HjZfZ1uoJ8PDZITTunD1w61FLyZmgnq9ycqb8Gp%2BEFzyEz0NJ1rYYPG1tZu4HTNLF3OI2DAicErTve8JKRBld3LET1s7%2BOj3U2PFgxapj15zv0FKVJILktk8Z9Zq68MUyQsjkJzXWJvqEIQMDsMIcGERwSXu38j8CcDi4qm4lXC2x4CcDVkDpyy0sH2CIqC5yTSjRph4qB%2BAy4lpErMRHi%2BQnMsL7npERqyFtCi9IkRIHUjOuTUz3EztaZdYld5LwpYr5ny%2Fz1D8kkkFwcJn6A6ML6N5cMGOqUBHcDN7ZZ%2Br0hu3Fe6t%2BoaRLUM3s9SvX9ZlVfK5%2FzJIW0lsY3eYmibBa2OsaTHClSm2F1nu0ZfJMblmE6OUodtdzTig88KqNbbqOhJapcqJqETaIYmMR%2Bpv1zvk3Az6b6%2BeZrXa%2BGwBstGWAUCckOEP9clJKSFNAL07CMOOwHSschfNUyWCnm7KMdaAFR4wTJafgSMz1cylBpfEapQ%2FlYJ0KjXeXGD&X-Amz-Signature=868c9f23d010bf0b65cf0504e0450887a9ab3ac8ba25f13e0f4c4c6cbf46e83f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCAJC7KT%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGi%2BwvExgtK2P1T02r5N7ZwcxTwK6LQ2QBAL1SRm%2BfNNAiEAnywh21AbDEC3s61fL7dlsAul%2BblQlKZLDcPt6mH%2F9poq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIOraboxrVFETZtXAircA2sjUTWRUfEw5zEF8rT%2FsOfNUhkQNwTSoWMt2ZdiDZxz82WTlXHRabkwPDwtRozO%2FcA9qq5ipmdl9%2B%2BBWRrfSVMHaSKwGlI83JMT3retS5nbX4QtHrF0CmtKq8gqxPwtRalf8oREIsXqL%2BfAQ4xCG7Ryvmf4e%2F8nza4fPm0YFDQffDUhd2TTldUe0QcC7MUD0ZqCyvbZ97TA6YkyIA7ASnuyUNAhhVCxBSGKAnuVrrNDqbRN7%2FoaKqR0aOQjtpMX%2F6UTNHuAxsE8DpfSh9SLuOgZUm2Sc1B7PatGChsrsm4pdojulEL8%2BKymo9EAqUMK4HTXgiseAVn9%2Fphk5e07VxG3yXedqw5hPQu93HjZfZ1uoJ8PDZITTunD1w61FLyZmgnq9ycqb8Gp%2BEFzyEz0NJ1rYYPG1tZu4HTNLF3OI2DAicErTve8JKRBld3LET1s7%2BOj3U2PFgxapj15zv0FKVJILktk8Z9Zq68MUyQsjkJzXWJvqEIQMDsMIcGERwSXu38j8CcDi4qm4lXC2x4CcDVkDpyy0sH2CIqC5yTSjRph4qB%2BAy4lpErMRHi%2BQnMsL7npERqyFtCi9IkRIHUjOuTUz3EztaZdYld5LwpYr5ny%2Fz1D8kkkFwcJn6A6ML6N5cMGOqUBHcDN7ZZ%2Br0hu3Fe6t%2BoaRLUM3s9SvX9ZlVfK5%2FzJIW0lsY3eYmibBa2OsaTHClSm2F1nu0ZfJMblmE6OUodtdzTig88KqNbbqOhJapcqJqETaIYmMR%2Bpv1zvk3Az6b6%2BeZrXa%2BGwBstGWAUCckOEP9clJKSFNAL07CMOOwHSschfNUyWCnm7KMdaAFR4wTJafgSMz1cylBpfEapQ%2FlYJ0KjXeXGD&X-Amz-Signature=c1c534b8f9614c927c029a32a850b260fd68fae0dea49a7039899d6b73ab82c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

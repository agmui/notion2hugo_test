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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF6XAD3Z%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbSjAIQsHUWNdazo1VwYpp4fzHOEMy5iXms2jtvXHgpQIhAI14T39Xdj9aZdYWQP1e91DGLuWovsHekRic1hVS9yJ9Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwVtHGFWWvPsRqjq2Eq3APCa5cFf3WqMn1Hujfa8u3vED0ynoz7JlB1ksXvXL4WYno1J5lZWB4%2B4hMaQVnXFuvYlF23%2FvtRoBgZeeEZOQGJC%2Br3N6SBKiT%2BUmlj3epXmqZjkYWQwp1zVZa8CCU0lIoBWFY%2F26DumB%2BAb05aK6OalGPpqbthuCqv6ShewR83a6oJWTU%2BuYyWlOxnsvVCdx6pnV2GrqALA%2B3%2FiyPP8iQO7ABzMxCHK4uQnhARE%2F9uVVD4LZNg8T8jSYy%2B6IB2Z%2FZVeCMn%2F1xdk0xFinhYSPeCayK2pGn17CpK4d9df2oMSHIKxAsM8jEBabIixk0J0UZdXV4fnjdMqmNXXeI%2BLNwq4qbs1TKWS7%2BKSSz4k60NltV1z5c3K9bofsRjnuXbKDROZ3aIKetrks7oiO8kjHNRYNH8ZfHMGcbIDEkICZ%2FEN3uYVw7xYtPkDP5dveSZXr8OhIN15gnUwm%2BtNJ4dlR%2Bw1X2f9bPr7NiUHKE%2FFKdUZrqAAQ7XjWXidKXNQY9C4fQXHH3NIsSOCDF8Q7IXGQJLJjEpSvRn7ESWRRCNXn5P9%2FoTcZSRSezcnndJMPG5koe%2B3dvAOwHODPesv9kaMEuRcKEA2%2BUtpglXyC22WTktb0jtPfP6bbVm1u%2F%2FnDCdhLLABjqkAcVIFWR7eVqG6p%2B2XG6Kgpi2DTlshHtPy3T25aT9Vqa5ZMi15VyOwPuJNd4L469W5a64UcSbw6b4cZ3hD%2FGrBev2BAWq4hKdpX4HjKz4Hscwn5EwO%2FkC%2Ftk%2BZIH5GyokXnJMsuNZ%2BbK7fDrZr8BqbrMLGCfupzox95cXjHrAeiffX73mwdORQazIWp2eD6vVlhqH6DvsyPYIkzCUdgHi6X2kBnUf&X-Amz-Signature=6ba5ac820a421f9f9ee3e00264fef553b71cb19f25a58a8058beaa805211de98&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF6XAD3Z%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbSjAIQsHUWNdazo1VwYpp4fzHOEMy5iXms2jtvXHgpQIhAI14T39Xdj9aZdYWQP1e91DGLuWovsHekRic1hVS9yJ9Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwVtHGFWWvPsRqjq2Eq3APCa5cFf3WqMn1Hujfa8u3vED0ynoz7JlB1ksXvXL4WYno1J5lZWB4%2B4hMaQVnXFuvYlF23%2FvtRoBgZeeEZOQGJC%2Br3N6SBKiT%2BUmlj3epXmqZjkYWQwp1zVZa8CCU0lIoBWFY%2F26DumB%2BAb05aK6OalGPpqbthuCqv6ShewR83a6oJWTU%2BuYyWlOxnsvVCdx6pnV2GrqALA%2B3%2FiyPP8iQO7ABzMxCHK4uQnhARE%2F9uVVD4LZNg8T8jSYy%2B6IB2Z%2FZVeCMn%2F1xdk0xFinhYSPeCayK2pGn17CpK4d9df2oMSHIKxAsM8jEBabIixk0J0UZdXV4fnjdMqmNXXeI%2BLNwq4qbs1TKWS7%2BKSSz4k60NltV1z5c3K9bofsRjnuXbKDROZ3aIKetrks7oiO8kjHNRYNH8ZfHMGcbIDEkICZ%2FEN3uYVw7xYtPkDP5dveSZXr8OhIN15gnUwm%2BtNJ4dlR%2Bw1X2f9bPr7NiUHKE%2FFKdUZrqAAQ7XjWXidKXNQY9C4fQXHH3NIsSOCDF8Q7IXGQJLJjEpSvRn7ESWRRCNXn5P9%2FoTcZSRSezcnndJMPG5koe%2B3dvAOwHODPesv9kaMEuRcKEA2%2BUtpglXyC22WTktb0jtPfP6bbVm1u%2F%2FnDCdhLLABjqkAcVIFWR7eVqG6p%2B2XG6Kgpi2DTlshHtPy3T25aT9Vqa5ZMi15VyOwPuJNd4L469W5a64UcSbw6b4cZ3hD%2FGrBev2BAWq4hKdpX4HjKz4Hscwn5EwO%2FkC%2Ftk%2BZIH5GyokXnJMsuNZ%2BbK7fDrZr8BqbrMLGCfupzox95cXjHrAeiffX73mwdORQazIWp2eD6vVlhqH6DvsyPYIkzCUdgHi6X2kBnUf&X-Amz-Signature=eead4c97ed85428acd7646bba7184543794cc7df2caaf4884220129ef7b65268&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF6XAD3Z%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbSjAIQsHUWNdazo1VwYpp4fzHOEMy5iXms2jtvXHgpQIhAI14T39Xdj9aZdYWQP1e91DGLuWovsHekRic1hVS9yJ9Kv8DCEAQABoMNjM3NDIzMTgzODA1IgwVtHGFWWvPsRqjq2Eq3APCa5cFf3WqMn1Hujfa8u3vED0ynoz7JlB1ksXvXL4WYno1J5lZWB4%2B4hMaQVnXFuvYlF23%2FvtRoBgZeeEZOQGJC%2Br3N6SBKiT%2BUmlj3epXmqZjkYWQwp1zVZa8CCU0lIoBWFY%2F26DumB%2BAb05aK6OalGPpqbthuCqv6ShewR83a6oJWTU%2BuYyWlOxnsvVCdx6pnV2GrqALA%2B3%2FiyPP8iQO7ABzMxCHK4uQnhARE%2F9uVVD4LZNg8T8jSYy%2B6IB2Z%2FZVeCMn%2F1xdk0xFinhYSPeCayK2pGn17CpK4d9df2oMSHIKxAsM8jEBabIixk0J0UZdXV4fnjdMqmNXXeI%2BLNwq4qbs1TKWS7%2BKSSz4k60NltV1z5c3K9bofsRjnuXbKDROZ3aIKetrks7oiO8kjHNRYNH8ZfHMGcbIDEkICZ%2FEN3uYVw7xYtPkDP5dveSZXr8OhIN15gnUwm%2BtNJ4dlR%2Bw1X2f9bPr7NiUHKE%2FFKdUZrqAAQ7XjWXidKXNQY9C4fQXHH3NIsSOCDF8Q7IXGQJLJjEpSvRn7ESWRRCNXn5P9%2FoTcZSRSezcnndJMPG5koe%2B3dvAOwHODPesv9kaMEuRcKEA2%2BUtpglXyC22WTktb0jtPfP6bbVm1u%2F%2FnDCdhLLABjqkAcVIFWR7eVqG6p%2B2XG6Kgpi2DTlshHtPy3T25aT9Vqa5ZMi15VyOwPuJNd4L469W5a64UcSbw6b4cZ3hD%2FGrBev2BAWq4hKdpX4HjKz4Hscwn5EwO%2FkC%2Ftk%2BZIH5GyokXnJMsuNZ%2BbK7fDrZr8BqbrMLGCfupzox95cXjHrAeiffX73mwdORQazIWp2eD6vVlhqH6DvsyPYIkzCUdgHi6X2kBnUf&X-Amz-Signature=08fc4737ee6f91e7f956ed3b4326b5fcaecca2d2bb9f798759c272a64c991e61&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

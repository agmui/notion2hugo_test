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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRBJV3UU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD945TrNMbXLEHZM6KonwQHyeI8t1naGRwuWY34JDIHawIhANFglrNvMwxd5jlNETPAP6kQNlFcILJ%2BPzewQ1fNbB%2FIKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwecyXfww%2B2KACFo7Qq3AMOOE8B1Ms3wa0S26TPau5wiCpKcQS0S7Q%2FLVBwIV3TvVAviOQWgdrSpQWo%2F614PxwZCiqrreJXEMXgHo2HzM%2F%2BgqL8E9rTFpCVqlF1BzDSUkPvgtvbT53mhgYAqKUU6H7ebzVWy2H%2BzCNH0NverB4AGl3xt0%2FFmxW7U1i57sIE6heeNz5dtOG2UKpm214Zh4NZfAeIWzBoDUpK5VDekr0BgNX0hCC8eE%2F%2FZ5LFu%2FE8KvvzFrqXEYbvbgoqba%2Bp2gEA53N0v%2FA9L63K2GXF8i%2B6MJ3RTQuuxbKUJJnXsZmSI4zXyC9VKQh6pbSxXcXLQ%2FbEopStsJwVE370HtIPANju6944p6D%2FT5pIhZhq7QG6Tj6lv5pTdD0fiGDNWmNXsM9Cy%2BQK5DZGta75nuRchT5oyVAXEsUIvDJ7AovXlS917JCmn4viHB1zWZ%2F5oiI25NVs5emAj9ZrfxrDmJY0FSo2RY2MhWcp8kzMYrJJxYsJ%2FAmTB%2FpXGErsPQ5BZgYFp%2Fw8%2Bqc7cN771dwotsfYlwgKdh6pbQyjpY3F5vOjhRr7obZrHtIwd%2BrGoq%2FlRO3mdhBbQnwyJG9TepbZk4VGvTDi2xeHkg5qDBpzEhm%2BoncwmcvGjnJa3Rb%2Bw5qhcTCmstK9BjqkAVHL1fM%2FiSaGqnfstC%2BdtOYxgon4NhgNy7CJKBFHDs%2BumAoRc4Wqhp6LCQs%2BhQFYvEVGp9da%2FiksH%2B6ihqH0nj5YIGN%2BISHXhhSsi%2BvFth5359ohSYXx3jq0q%2BEkhKC7L56F%2B3joE0poz6x2fu1RsV1m69%2FRUcY5mVXryaT%2FqvYS%2FfjW8eoLDBbqbIC1e6XIfwkg5v%2F7hl9%2FYEbGFyjwwyVlhCD4&X-Amz-Signature=0b8478b61e4313926dd62811b9b321ac518e8e3666127effe775832dd8188870&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRBJV3UU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD945TrNMbXLEHZM6KonwQHyeI8t1naGRwuWY34JDIHawIhANFglrNvMwxd5jlNETPAP6kQNlFcILJ%2BPzewQ1fNbB%2FIKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwecyXfww%2B2KACFo7Qq3AMOOE8B1Ms3wa0S26TPau5wiCpKcQS0S7Q%2FLVBwIV3TvVAviOQWgdrSpQWo%2F614PxwZCiqrreJXEMXgHo2HzM%2F%2BgqL8E9rTFpCVqlF1BzDSUkPvgtvbT53mhgYAqKUU6H7ebzVWy2H%2BzCNH0NverB4AGl3xt0%2FFmxW7U1i57sIE6heeNz5dtOG2UKpm214Zh4NZfAeIWzBoDUpK5VDekr0BgNX0hCC8eE%2F%2FZ5LFu%2FE8KvvzFrqXEYbvbgoqba%2Bp2gEA53N0v%2FA9L63K2GXF8i%2B6MJ3RTQuuxbKUJJnXsZmSI4zXyC9VKQh6pbSxXcXLQ%2FbEopStsJwVE370HtIPANju6944p6D%2FT5pIhZhq7QG6Tj6lv5pTdD0fiGDNWmNXsM9Cy%2BQK5DZGta75nuRchT5oyVAXEsUIvDJ7AovXlS917JCmn4viHB1zWZ%2F5oiI25NVs5emAj9ZrfxrDmJY0FSo2RY2MhWcp8kzMYrJJxYsJ%2FAmTB%2FpXGErsPQ5BZgYFp%2Fw8%2Bqc7cN771dwotsfYlwgKdh6pbQyjpY3F5vOjhRr7obZrHtIwd%2BrGoq%2FlRO3mdhBbQnwyJG9TepbZk4VGvTDi2xeHkg5qDBpzEhm%2BoncwmcvGjnJa3Rb%2Bw5qhcTCmstK9BjqkAVHL1fM%2FiSaGqnfstC%2BdtOYxgon4NhgNy7CJKBFHDs%2BumAoRc4Wqhp6LCQs%2BhQFYvEVGp9da%2FiksH%2B6ihqH0nj5YIGN%2BISHXhhSsi%2BvFth5359ohSYXx3jq0q%2BEkhKC7L56F%2B3joE0poz6x2fu1RsV1m69%2FRUcY5mVXryaT%2FqvYS%2FfjW8eoLDBbqbIC1e6XIfwkg5v%2F7hl9%2FYEbGFyjwwyVlhCD4&X-Amz-Signature=0e253f06750af402a31cd4692a463efc4e727e55608bce18c64a0134af0fd1e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRBJV3UU%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD945TrNMbXLEHZM6KonwQHyeI8t1naGRwuWY34JDIHawIhANFglrNvMwxd5jlNETPAP6kQNlFcILJ%2BPzewQ1fNbB%2FIKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwecyXfww%2B2KACFo7Qq3AMOOE8B1Ms3wa0S26TPau5wiCpKcQS0S7Q%2FLVBwIV3TvVAviOQWgdrSpQWo%2F614PxwZCiqrreJXEMXgHo2HzM%2F%2BgqL8E9rTFpCVqlF1BzDSUkPvgtvbT53mhgYAqKUU6H7ebzVWy2H%2BzCNH0NverB4AGl3xt0%2FFmxW7U1i57sIE6heeNz5dtOG2UKpm214Zh4NZfAeIWzBoDUpK5VDekr0BgNX0hCC8eE%2F%2FZ5LFu%2FE8KvvzFrqXEYbvbgoqba%2Bp2gEA53N0v%2FA9L63K2GXF8i%2B6MJ3RTQuuxbKUJJnXsZmSI4zXyC9VKQh6pbSxXcXLQ%2FbEopStsJwVE370HtIPANju6944p6D%2FT5pIhZhq7QG6Tj6lv5pTdD0fiGDNWmNXsM9Cy%2BQK5DZGta75nuRchT5oyVAXEsUIvDJ7AovXlS917JCmn4viHB1zWZ%2F5oiI25NVs5emAj9ZrfxrDmJY0FSo2RY2MhWcp8kzMYrJJxYsJ%2FAmTB%2FpXGErsPQ5BZgYFp%2Fw8%2Bqc7cN771dwotsfYlwgKdh6pbQyjpY3F5vOjhRr7obZrHtIwd%2BrGoq%2FlRO3mdhBbQnwyJG9TepbZk4VGvTDi2xeHkg5qDBpzEhm%2BoncwmcvGjnJa3Rb%2Bw5qhcTCmstK9BjqkAVHL1fM%2FiSaGqnfstC%2BdtOYxgon4NhgNy7CJKBFHDs%2BumAoRc4Wqhp6LCQs%2BhQFYvEVGp9da%2FiksH%2B6ihqH0nj5YIGN%2BISHXhhSsi%2BvFth5359ohSYXx3jq0q%2BEkhKC7L56F%2B3joE0poz6x2fu1RsV1m69%2FRUcY5mVXryaT%2FqvYS%2FfjW8eoLDBbqbIC1e6XIfwkg5v%2F7hl9%2FYEbGFyjwwyVlhCD4&X-Amz-Signature=8f0b5291e0939d7950c7f1c6adfe484d5c059db369960623ad135362377bb564&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESZX5F5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG%2FJLYezjbKG3wHkufbvn8nbu9sPBb2xmLAArfJk6GAgIhAMwOIyFyjkpEEYTUmtEx5TJ3xRJVV%2BEAG%2FhpJFhgItp%2BKv8DCFsQABoMNjM3NDIzMTgzODA1IgwFLXtNzX3cpJQsl2Eq3ANrV0nUdUzgYIzL9oNHfVg9ljdqzn9A%2BZjgYuIPU2UeAvHdlmsdlTL0plhs7AMKjIk2tsW3PvNAuAtJ9C5emJhGmLU2STHgKHJKYE1exyaq0SoXyXRqqiTWlBYpZWJVOYGR6hLxAcBX%2F99eWIPGkT%2B76q7Np%2BcM6d7eODKZIqLHIsmO7XyXrYHGYoj1HJYep6XGWdh2082u6O2BwlPCaEFcpI9TdhAQNQ7LsthZSyfFjXUXakDhko89jGGThFcnoltR9i6GWi90vp5lsxu6uO3q8eQDscGSK2pSBVgu0YG4lOiuNxTFp4Lzg4vG7BbCvNq5ITjLCz8d0hkid2dU9tNsjx2d34%2BSJWaBv%2B53gB3jXmzoiblRsvHIm3wKPMWKR%2BhrOnldhKZH8My4WivGmepsMBRy%2B5i9QXYyefgVIO16MtN%2BP2VO39Qgp48kw%2F4x7JjJHGvJ%2FLkzPr%2Fd2BRXH4i0StcYE%2FyMwHkVtKHPkpIn8LVbbQeZF4j3D4sy%2BYN0dwamLsGdrmQ35tBYXKGsCHXnRe8438xkWoZ%2FJsMBTWe%2BEDuMVSsxoOVpGQwh5KHTH3r8JgcqiHJaP1jaDEl3s2%2F44aKFejP3CXd8HYNpSVk5rPO%2BFVUbVKYgw2hI%2BjC%2F0OzABjqkAQSYk6GgrIZvoBZMU7jG0tZxloE92o1uZkDTu8n%2BHFDOd3q08sxwRZNLPdVtsArRAawCTI0iBVSLhrGllCmznI8RH7pPC4gDhCkkmuVYRJVlrXVPAB8kkRmWX24QtQMcCku6WetW2dl4hThBG%2F31u%2BnE93XH5Vyjme5r46qRtTRQ0nQHp5e%2FnNIXZQ5l2conaHGeNL5oQJEuWJBXoUi8nYj%2BZhXj&X-Amz-Signature=fac7e29dfb8fc98e4ce48c68c59eeeb2d55aba0c089d3af11aed92bfcd86e2a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESZX5F5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG%2FJLYezjbKG3wHkufbvn8nbu9sPBb2xmLAArfJk6GAgIhAMwOIyFyjkpEEYTUmtEx5TJ3xRJVV%2BEAG%2FhpJFhgItp%2BKv8DCFsQABoMNjM3NDIzMTgzODA1IgwFLXtNzX3cpJQsl2Eq3ANrV0nUdUzgYIzL9oNHfVg9ljdqzn9A%2BZjgYuIPU2UeAvHdlmsdlTL0plhs7AMKjIk2tsW3PvNAuAtJ9C5emJhGmLU2STHgKHJKYE1exyaq0SoXyXRqqiTWlBYpZWJVOYGR6hLxAcBX%2F99eWIPGkT%2B76q7Np%2BcM6d7eODKZIqLHIsmO7XyXrYHGYoj1HJYep6XGWdh2082u6O2BwlPCaEFcpI9TdhAQNQ7LsthZSyfFjXUXakDhko89jGGThFcnoltR9i6GWi90vp5lsxu6uO3q8eQDscGSK2pSBVgu0YG4lOiuNxTFp4Lzg4vG7BbCvNq5ITjLCz8d0hkid2dU9tNsjx2d34%2BSJWaBv%2B53gB3jXmzoiblRsvHIm3wKPMWKR%2BhrOnldhKZH8My4WivGmepsMBRy%2B5i9QXYyefgVIO16MtN%2BP2VO39Qgp48kw%2F4x7JjJHGvJ%2FLkzPr%2Fd2BRXH4i0StcYE%2FyMwHkVtKHPkpIn8LVbbQeZF4j3D4sy%2BYN0dwamLsGdrmQ35tBYXKGsCHXnRe8438xkWoZ%2FJsMBTWe%2BEDuMVSsxoOVpGQwh5KHTH3r8JgcqiHJaP1jaDEl3s2%2F44aKFejP3CXd8HYNpSVk5rPO%2BFVUbVKYgw2hI%2BjC%2F0OzABjqkAQSYk6GgrIZvoBZMU7jG0tZxloE92o1uZkDTu8n%2BHFDOd3q08sxwRZNLPdVtsArRAawCTI0iBVSLhrGllCmznI8RH7pPC4gDhCkkmuVYRJVlrXVPAB8kkRmWX24QtQMcCku6WetW2dl4hThBG%2F31u%2BnE93XH5Vyjme5r46qRtTRQ0nQHp5e%2FnNIXZQ5l2conaHGeNL5oQJEuWJBXoUi8nYj%2BZhXj&X-Amz-Signature=717bda347e9606ba153139984dc61dd7398382bdc36414a6a86fdde8cc9562cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WESZX5F5%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG%2FJLYezjbKG3wHkufbvn8nbu9sPBb2xmLAArfJk6GAgIhAMwOIyFyjkpEEYTUmtEx5TJ3xRJVV%2BEAG%2FhpJFhgItp%2BKv8DCFsQABoMNjM3NDIzMTgzODA1IgwFLXtNzX3cpJQsl2Eq3ANrV0nUdUzgYIzL9oNHfVg9ljdqzn9A%2BZjgYuIPU2UeAvHdlmsdlTL0plhs7AMKjIk2tsW3PvNAuAtJ9C5emJhGmLU2STHgKHJKYE1exyaq0SoXyXRqqiTWlBYpZWJVOYGR6hLxAcBX%2F99eWIPGkT%2B76q7Np%2BcM6d7eODKZIqLHIsmO7XyXrYHGYoj1HJYep6XGWdh2082u6O2BwlPCaEFcpI9TdhAQNQ7LsthZSyfFjXUXakDhko89jGGThFcnoltR9i6GWi90vp5lsxu6uO3q8eQDscGSK2pSBVgu0YG4lOiuNxTFp4Lzg4vG7BbCvNq5ITjLCz8d0hkid2dU9tNsjx2d34%2BSJWaBv%2B53gB3jXmzoiblRsvHIm3wKPMWKR%2BhrOnldhKZH8My4WivGmepsMBRy%2B5i9QXYyefgVIO16MtN%2BP2VO39Qgp48kw%2F4x7JjJHGvJ%2FLkzPr%2Fd2BRXH4i0StcYE%2FyMwHkVtKHPkpIn8LVbbQeZF4j3D4sy%2BYN0dwamLsGdrmQ35tBYXKGsCHXnRe8438xkWoZ%2FJsMBTWe%2BEDuMVSsxoOVpGQwh5KHTH3r8JgcqiHJaP1jaDEl3s2%2F44aKFejP3CXd8HYNpSVk5rPO%2BFVUbVKYgw2hI%2BjC%2F0OzABjqkAQSYk6GgrIZvoBZMU7jG0tZxloE92o1uZkDTu8n%2BHFDOd3q08sxwRZNLPdVtsArRAawCTI0iBVSLhrGllCmznI8RH7pPC4gDhCkkmuVYRJVlrXVPAB8kkRmWX24QtQMcCku6WetW2dl4hThBG%2F31u%2BnE93XH5Vyjme5r46qRtTRQ0nQHp5e%2FnNIXZQ5l2conaHGeNL5oQJEuWJBXoUi8nYj%2BZhXj&X-Amz-Signature=41b47965fac5881ad9654c7cbc186764f8221d8bcb0edfd24538bc7dddc2ef08&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

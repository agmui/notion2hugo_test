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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGM53SG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKgPYZNiLcaEUG5oRsd81l%2FZpkmLx9XDMIYFvJ65SfswIhANI5wA1YEwMUOpnPWi4PyDh2P5X3W9bNxkMoU3YUDoljKv8DCHsQABoMNjM3NDIzMTgzODA1IgxeiZsZN3%2BJmCdIx74q3APRGGPYB1PtRYNDjIGvWt1TBx5kgUEmYMY0Ek%2FMQ4xgn7%2F3nlMXpsU8ELb2CjFA4rUJeww2pCw7DG5MtUwLpk%2FZqPLJde1TAjWj%2B6KAAZr7ePTFgUALJcT6NaSAbqtONg0%2F6mKmsk9O01KhDZ7f%2BpdBwk8mtCZsmP0WoK%2BevvJ0iVHDMg01av5P2RVTV4nK9mZvRVlBN%2B%2BTODxxNsGoMSUhGwz2cwwYnMOG5IhRTGT%2B6q89CR7qee%2BZBtliMxDC8EKu7Txf1Xg%2BIUW6ow2lCC42iILrnCV3mtigKBsliy48i5TLybByl6611I9bDVViXnxsftI7lFElXhCrTWVdN6WfdLddMVNsYWmsdDAzeWjQCUZ3xEZt0qdwnEOcJAs%2F4xbHldj5uQIGO97if%2FrDrq98iP4HtnOXvxOfo%2FShHP%2BwaCVKC6e8VL3usHxdZYqeGG8Au%2B0uLi0zkyXeJnD59nWsEt4uCnMb8Qta5eimyjAchurmNlMGHGlYYKWvgijwJFqmGIBJelokbohQpwioeVq6a%2FF9XOTLFQoZ8S4j5GTb9zqsOg56zabIZedmjuAYRi2%2F7Qgj%2FUQRswznejYpeennTEE8ibkN%2FuR%2B8XHyUIaGXaylD42x%2BhnCzCzlqTC838bCBjqkAXZxx7mX1tDr5QUXKqBWUsyCMQBCd0gMb%2FBrA6sqfOi90eRzFK%2BQUX7YXkIZRq1xv89hR%2FWDpmyVcnj8S2ev4xuBOdna5fjsWYfOYiI3jnY9vfFyjbxPpxVLK%2Fb8j4X%2FY0SnQ9smej6GPtyC0PE7xqxsia38JK0a5A4mBUWf5hpukoSjtCSCN%2BUCVYbqgjv4NOWReG5010kHMBeKi%2F4cD%2F6zbT3N&X-Amz-Signature=d62fe7b8e95c34aa8f3e8eb216828cad4a877c45b56c81f20b0af2ee79a0fed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGM53SG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKgPYZNiLcaEUG5oRsd81l%2FZpkmLx9XDMIYFvJ65SfswIhANI5wA1YEwMUOpnPWi4PyDh2P5X3W9bNxkMoU3YUDoljKv8DCHsQABoMNjM3NDIzMTgzODA1IgxeiZsZN3%2BJmCdIx74q3APRGGPYB1PtRYNDjIGvWt1TBx5kgUEmYMY0Ek%2FMQ4xgn7%2F3nlMXpsU8ELb2CjFA4rUJeww2pCw7DG5MtUwLpk%2FZqPLJde1TAjWj%2B6KAAZr7ePTFgUALJcT6NaSAbqtONg0%2F6mKmsk9O01KhDZ7f%2BpdBwk8mtCZsmP0WoK%2BevvJ0iVHDMg01av5P2RVTV4nK9mZvRVlBN%2B%2BTODxxNsGoMSUhGwz2cwwYnMOG5IhRTGT%2B6q89CR7qee%2BZBtliMxDC8EKu7Txf1Xg%2BIUW6ow2lCC42iILrnCV3mtigKBsliy48i5TLybByl6611I9bDVViXnxsftI7lFElXhCrTWVdN6WfdLddMVNsYWmsdDAzeWjQCUZ3xEZt0qdwnEOcJAs%2F4xbHldj5uQIGO97if%2FrDrq98iP4HtnOXvxOfo%2FShHP%2BwaCVKC6e8VL3usHxdZYqeGG8Au%2B0uLi0zkyXeJnD59nWsEt4uCnMb8Qta5eimyjAchurmNlMGHGlYYKWvgijwJFqmGIBJelokbohQpwioeVq6a%2FF9XOTLFQoZ8S4j5GTb9zqsOg56zabIZedmjuAYRi2%2F7Qgj%2FUQRswznejYpeennTEE8ibkN%2FuR%2B8XHyUIaGXaylD42x%2BhnCzCzlqTC838bCBjqkAXZxx7mX1tDr5QUXKqBWUsyCMQBCd0gMb%2FBrA6sqfOi90eRzFK%2BQUX7YXkIZRq1xv89hR%2FWDpmyVcnj8S2ev4xuBOdna5fjsWYfOYiI3jnY9vfFyjbxPpxVLK%2Fb8j4X%2FY0SnQ9smej6GPtyC0PE7xqxsia38JK0a5A4mBUWf5hpukoSjtCSCN%2BUCVYbqgjv4NOWReG5010kHMBeKi%2F4cD%2F6zbT3N&X-Amz-Signature=81c20d7aea9e7c493d14b0751f5ffbdc98a513790fdc8c279ff3e5f57455bfc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QGM53SG%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKgPYZNiLcaEUG5oRsd81l%2FZpkmLx9XDMIYFvJ65SfswIhANI5wA1YEwMUOpnPWi4PyDh2P5X3W9bNxkMoU3YUDoljKv8DCHsQABoMNjM3NDIzMTgzODA1IgxeiZsZN3%2BJmCdIx74q3APRGGPYB1PtRYNDjIGvWt1TBx5kgUEmYMY0Ek%2FMQ4xgn7%2F3nlMXpsU8ELb2CjFA4rUJeww2pCw7DG5MtUwLpk%2FZqPLJde1TAjWj%2B6KAAZr7ePTFgUALJcT6NaSAbqtONg0%2F6mKmsk9O01KhDZ7f%2BpdBwk8mtCZsmP0WoK%2BevvJ0iVHDMg01av5P2RVTV4nK9mZvRVlBN%2B%2BTODxxNsGoMSUhGwz2cwwYnMOG5IhRTGT%2B6q89CR7qee%2BZBtliMxDC8EKu7Txf1Xg%2BIUW6ow2lCC42iILrnCV3mtigKBsliy48i5TLybByl6611I9bDVViXnxsftI7lFElXhCrTWVdN6WfdLddMVNsYWmsdDAzeWjQCUZ3xEZt0qdwnEOcJAs%2F4xbHldj5uQIGO97if%2FrDrq98iP4HtnOXvxOfo%2FShHP%2BwaCVKC6e8VL3usHxdZYqeGG8Au%2B0uLi0zkyXeJnD59nWsEt4uCnMb8Qta5eimyjAchurmNlMGHGlYYKWvgijwJFqmGIBJelokbohQpwioeVq6a%2FF9XOTLFQoZ8S4j5GTb9zqsOg56zabIZedmjuAYRi2%2F7Qgj%2FUQRswznejYpeennTEE8ibkN%2FuR%2B8XHyUIaGXaylD42x%2BhnCzCzlqTC838bCBjqkAXZxx7mX1tDr5QUXKqBWUsyCMQBCd0gMb%2FBrA6sqfOi90eRzFK%2BQUX7YXkIZRq1xv89hR%2FWDpmyVcnj8S2ev4xuBOdna5fjsWYfOYiI3jnY9vfFyjbxPpxVLK%2Fb8j4X%2FY0SnQ9smej6GPtyC0PE7xqxsia38JK0a5A4mBUWf5hpukoSjtCSCN%2BUCVYbqgjv4NOWReG5010kHMBeKi%2F4cD%2F6zbT3N&X-Amz-Signature=c7140b95811c93038cd7e0c3872d0fe3ca0d3e5acafd251d9bc0bf30e7f5abb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

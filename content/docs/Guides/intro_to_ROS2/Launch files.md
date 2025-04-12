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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2OCPLE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCyp%2B1kEvBoXeHQLUYkieHorA4ORWuQHLrYgBoqDmBbYwIhAM67UGQFWvpF1v%2F9SY1vHusxZ%2Btw5F4VNqPNCiD332bTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHagtmjNOVDfhYgdEq3AMpsJxX1WUpV8sQ3R9gkW4PBzzYOQDHcSESvk2On%2BMqEmnKw8IIidSqYNhAWA%2BotHWX%2B7yUjSguhRLyfteJoWMw6l0ph63UxxDWp2yC8bdco911tU92Z9GmQH9UYBbJocwwTUdCDmnwUPhs49GF1hg%2Bku0vpZfg7mTedVfvvQQAHzVhDNIJLxJ1VX5imABcKb%2Fpxb4pHrb30Su0HHjrDC%2B2gXrmpqXaPRD5KzGC4n0Cxc%2F2TtogGUaLneHP3Un5EXxsimGBiVZjNdj4UuLJmQyPWHe7uXtqR1wlVp7z9IjwnzKxCxyt8fc8H62B21XRr4Uh0MLBIuwtGyNcgQ4UAHSSNvj9iQNz1dYcML2Tr9JgGqAtGfJnQm1S0A62B1hUOvBZMnDA56glYIvabsLr1JJINxPcL1r0o7zg8U44L%2BKi6%2B%2FT3wS6GGyfzKqZtd6%2FsUlxCENCvlWsH4zlf932ll8v%2FjPPdFYqXju3ZClcKXEqNj%2FqR%2BE6qxlqCHpVTqmqNWfAplRDRQW1Lg9WVahXnCC516BNnEdz03Eeogu0z%2F0qs9QmjG3frR%2FDZrg%2BrUJAHHUartc32j22OjqZ2CNLRFgiXQQQooBSAi7XlXBjDTm4qZhX7miZdHIGQARN%2BTDojOi%2FBjqkAbudnq0CYuxiB1mZaIuQyguKAetwPd3G7zalS9mZ0Q2np1poyf%2F5l4ScGE7SvktTIzmWW%2FdavUDbCQchUjeqPKI3KpBLAcfHLnQ578C4WIbXl2KeGLD1VoWcI0huc1Ps7tde2Id0yLE%2BIZ2HcWuGBPCfr1rm%2F89ffD3DLuuYkb2N5tQZ9iNn0e8PKcSvFpR2GGqox60GIHEMaXj%2FY6TAGyKGDIIK&X-Amz-Signature=3412581e89af4cca2820570188580a336eea35edf17de7d7225b30ef7e2b5b5c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2OCPLE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCyp%2B1kEvBoXeHQLUYkieHorA4ORWuQHLrYgBoqDmBbYwIhAM67UGQFWvpF1v%2F9SY1vHusxZ%2Btw5F4VNqPNCiD332bTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHagtmjNOVDfhYgdEq3AMpsJxX1WUpV8sQ3R9gkW4PBzzYOQDHcSESvk2On%2BMqEmnKw8IIidSqYNhAWA%2BotHWX%2B7yUjSguhRLyfteJoWMw6l0ph63UxxDWp2yC8bdco911tU92Z9GmQH9UYBbJocwwTUdCDmnwUPhs49GF1hg%2Bku0vpZfg7mTedVfvvQQAHzVhDNIJLxJ1VX5imABcKb%2Fpxb4pHrb30Su0HHjrDC%2B2gXrmpqXaPRD5KzGC4n0Cxc%2F2TtogGUaLneHP3Un5EXxsimGBiVZjNdj4UuLJmQyPWHe7uXtqR1wlVp7z9IjwnzKxCxyt8fc8H62B21XRr4Uh0MLBIuwtGyNcgQ4UAHSSNvj9iQNz1dYcML2Tr9JgGqAtGfJnQm1S0A62B1hUOvBZMnDA56glYIvabsLr1JJINxPcL1r0o7zg8U44L%2BKi6%2B%2FT3wS6GGyfzKqZtd6%2FsUlxCENCvlWsH4zlf932ll8v%2FjPPdFYqXju3ZClcKXEqNj%2FqR%2BE6qxlqCHpVTqmqNWfAplRDRQW1Lg9WVahXnCC516BNnEdz03Eeogu0z%2F0qs9QmjG3frR%2FDZrg%2BrUJAHHUartc32j22OjqZ2CNLRFgiXQQQooBSAi7XlXBjDTm4qZhX7miZdHIGQARN%2BTDojOi%2FBjqkAbudnq0CYuxiB1mZaIuQyguKAetwPd3G7zalS9mZ0Q2np1poyf%2F5l4ScGE7SvktTIzmWW%2FdavUDbCQchUjeqPKI3KpBLAcfHLnQ578C4WIbXl2KeGLD1VoWcI0huc1Ps7tde2Id0yLE%2BIZ2HcWuGBPCfr1rm%2F89ffD3DLuuYkb2N5tQZ9iNn0e8PKcSvFpR2GGqox60GIHEMaXj%2FY6TAGyKGDIIK&X-Amz-Signature=1a5fa9725c29b86d9e0e02650f8e0849e995d30a95137ce22551e572cb8bbac3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T2OCPLE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCyp%2B1kEvBoXeHQLUYkieHorA4ORWuQHLrYgBoqDmBbYwIhAM67UGQFWvpF1v%2F9SY1vHusxZ%2Btw5F4VNqPNCiD332bTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHagtmjNOVDfhYgdEq3AMpsJxX1WUpV8sQ3R9gkW4PBzzYOQDHcSESvk2On%2BMqEmnKw8IIidSqYNhAWA%2BotHWX%2B7yUjSguhRLyfteJoWMw6l0ph63UxxDWp2yC8bdco911tU92Z9GmQH9UYBbJocwwTUdCDmnwUPhs49GF1hg%2Bku0vpZfg7mTedVfvvQQAHzVhDNIJLxJ1VX5imABcKb%2Fpxb4pHrb30Su0HHjrDC%2B2gXrmpqXaPRD5KzGC4n0Cxc%2F2TtogGUaLneHP3Un5EXxsimGBiVZjNdj4UuLJmQyPWHe7uXtqR1wlVp7z9IjwnzKxCxyt8fc8H62B21XRr4Uh0MLBIuwtGyNcgQ4UAHSSNvj9iQNz1dYcML2Tr9JgGqAtGfJnQm1S0A62B1hUOvBZMnDA56glYIvabsLr1JJINxPcL1r0o7zg8U44L%2BKi6%2B%2FT3wS6GGyfzKqZtd6%2FsUlxCENCvlWsH4zlf932ll8v%2FjPPdFYqXju3ZClcKXEqNj%2FqR%2BE6qxlqCHpVTqmqNWfAplRDRQW1Lg9WVahXnCC516BNnEdz03Eeogu0z%2F0qs9QmjG3frR%2FDZrg%2BrUJAHHUartc32j22OjqZ2CNLRFgiXQQQooBSAi7XlXBjDTm4qZhX7miZdHIGQARN%2BTDojOi%2FBjqkAbudnq0CYuxiB1mZaIuQyguKAetwPd3G7zalS9mZ0Q2np1poyf%2F5l4ScGE7SvktTIzmWW%2FdavUDbCQchUjeqPKI3KpBLAcfHLnQ578C4WIbXl2KeGLD1VoWcI0huc1Ps7tde2Id0yLE%2BIZ2HcWuGBPCfr1rm%2F89ffD3DLuuYkb2N5tQZ9iNn0e8PKcSvFpR2GGqox60GIHEMaXj%2FY6TAGyKGDIIK&X-Amz-Signature=d5f369347a12552d21b834961b75fafd936a4273fd4ff97fe73d0aee81d4559c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

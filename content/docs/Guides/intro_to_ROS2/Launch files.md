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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FG3TBG%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDHgJl2D2zO5uppzf%2B7qhmzEEQ0IT73F0GE8U1q2NNnWQIhAIqPPV42elzDDguAx0mTo0nLFU3NNUB9HhIG8bwO1UUEKv8DCEoQABoMNjM3NDIzMTgzODA1Igzvii3A3wVbTEajiJgq3AM1Csd8VIJMS18k1frdZBZ8eLvTQ1SsCT%2FPrsNcT8Tc%2BeIXbfRG45nb4jz%2BovorUDowOU4XeJReRdtzPZyIubBJSwT1CIMVNnciI3DkUP1KMXo41Qdr7F2TyoH%2Flf067Jpg%2FpclCYvbwpmJXwPf656FuK7DDnY%2FarshmGxRxTidQd4rTWt7OgfvH6JLolN9KXu5JiMeBXd%2BHOi0%2B5N0CcCPpfom4%2BuLrBwQwlfC9VGoNZBnEPJe6JaqRRI%2FcyRLXSTLfvsAh%2FuHm0hf%2FpxcZJOVd7hLZnf7vTMlXuoRjc7SvKTY%2F4Lyu2ESESbNu58ugN767StvNT8YlklU66yjdo71RyQBTKycg1LuezZXq0KvzNCuPScp3qBM%2BFW4iLf9IISba3OczeMlkSEhXyDFO421m8ZkrD75sDxkUErXRaA%2BIMnPbor5HzmhY9Ga9gXj0J1ueLYgcOGeiFtPF1r7R5gj98GQkaMnRk8XmAEafQWzlumVPGWc414qx%2F0Ufy67MgwlCWXtZJFmuztgGIO96YU9heLWBe4N5kG3fnMCgFq831LBPufcqHYnz7%2B%2F0E5NjcCwmmHMZ%2Bu%2Bl0vLQd0iicD5pbtDekxLNZD51fA5O8ZE6Z7rrHRZqfi2cBKUkTDAwKy%2BBjqkAXv1OEXZrOzrxMAcGd5KcWDVtBc51prxm7l04pHTBTwVviTIjuVuGqyLt9Asu08PykuQHStIa3X7AzWSX6pYLXNI%2F8teDhZM0xe87sgBVnUtDoEA1fKh85xPKGN7W1dY0Sq2dDmgIjmnLUEHR2u0MJuf699xDDtoRzE2uSU9dbyu3dsc7RCEVeJzSh140TD7Z5wwOURO84iOGZNoVICSPUIpjqqD&X-Amz-Signature=0dca2d26c97b2518a09ba765af644a1141b3e000ca161195ff0167c82c7ce8a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FG3TBG%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDHgJl2D2zO5uppzf%2B7qhmzEEQ0IT73F0GE8U1q2NNnWQIhAIqPPV42elzDDguAx0mTo0nLFU3NNUB9HhIG8bwO1UUEKv8DCEoQABoMNjM3NDIzMTgzODA1Igzvii3A3wVbTEajiJgq3AM1Csd8VIJMS18k1frdZBZ8eLvTQ1SsCT%2FPrsNcT8Tc%2BeIXbfRG45nb4jz%2BovorUDowOU4XeJReRdtzPZyIubBJSwT1CIMVNnciI3DkUP1KMXo41Qdr7F2TyoH%2Flf067Jpg%2FpclCYvbwpmJXwPf656FuK7DDnY%2FarshmGxRxTidQd4rTWt7OgfvH6JLolN9KXu5JiMeBXd%2BHOi0%2B5N0CcCPpfom4%2BuLrBwQwlfC9VGoNZBnEPJe6JaqRRI%2FcyRLXSTLfvsAh%2FuHm0hf%2FpxcZJOVd7hLZnf7vTMlXuoRjc7SvKTY%2F4Lyu2ESESbNu58ugN767StvNT8YlklU66yjdo71RyQBTKycg1LuezZXq0KvzNCuPScp3qBM%2BFW4iLf9IISba3OczeMlkSEhXyDFO421m8ZkrD75sDxkUErXRaA%2BIMnPbor5HzmhY9Ga9gXj0J1ueLYgcOGeiFtPF1r7R5gj98GQkaMnRk8XmAEafQWzlumVPGWc414qx%2F0Ufy67MgwlCWXtZJFmuztgGIO96YU9heLWBe4N5kG3fnMCgFq831LBPufcqHYnz7%2B%2F0E5NjcCwmmHMZ%2Bu%2Bl0vLQd0iicD5pbtDekxLNZD51fA5O8ZE6Z7rrHRZqfi2cBKUkTDAwKy%2BBjqkAXv1OEXZrOzrxMAcGd5KcWDVtBc51prxm7l04pHTBTwVviTIjuVuGqyLt9Asu08PykuQHStIa3X7AzWSX6pYLXNI%2F8teDhZM0xe87sgBVnUtDoEA1fKh85xPKGN7W1dY0Sq2dDmgIjmnLUEHR2u0MJuf699xDDtoRzE2uSU9dbyu3dsc7RCEVeJzSh140TD7Z5wwOURO84iOGZNoVICSPUIpjqqD&X-Amz-Signature=4d24c2fdcea7d9e5f9248d2e8cf646ecc3642e7acc6f1d6a7829c9f4166e6c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FG3TBG%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDHgJl2D2zO5uppzf%2B7qhmzEEQ0IT73F0GE8U1q2NNnWQIhAIqPPV42elzDDguAx0mTo0nLFU3NNUB9HhIG8bwO1UUEKv8DCEoQABoMNjM3NDIzMTgzODA1Igzvii3A3wVbTEajiJgq3AM1Csd8VIJMS18k1frdZBZ8eLvTQ1SsCT%2FPrsNcT8Tc%2BeIXbfRG45nb4jz%2BovorUDowOU4XeJReRdtzPZyIubBJSwT1CIMVNnciI3DkUP1KMXo41Qdr7F2TyoH%2Flf067Jpg%2FpclCYvbwpmJXwPf656FuK7DDnY%2FarshmGxRxTidQd4rTWt7OgfvH6JLolN9KXu5JiMeBXd%2BHOi0%2B5N0CcCPpfom4%2BuLrBwQwlfC9VGoNZBnEPJe6JaqRRI%2FcyRLXSTLfvsAh%2FuHm0hf%2FpxcZJOVd7hLZnf7vTMlXuoRjc7SvKTY%2F4Lyu2ESESbNu58ugN767StvNT8YlklU66yjdo71RyQBTKycg1LuezZXq0KvzNCuPScp3qBM%2BFW4iLf9IISba3OczeMlkSEhXyDFO421m8ZkrD75sDxkUErXRaA%2BIMnPbor5HzmhY9Ga9gXj0J1ueLYgcOGeiFtPF1r7R5gj98GQkaMnRk8XmAEafQWzlumVPGWc414qx%2F0Ufy67MgwlCWXtZJFmuztgGIO96YU9heLWBe4N5kG3fnMCgFq831LBPufcqHYnz7%2B%2F0E5NjcCwmmHMZ%2Bu%2Bl0vLQd0iicD5pbtDekxLNZD51fA5O8ZE6Z7rrHRZqfi2cBKUkTDAwKy%2BBjqkAXv1OEXZrOzrxMAcGd5KcWDVtBc51prxm7l04pHTBTwVviTIjuVuGqyLt9Asu08PykuQHStIa3X7AzWSX6pYLXNI%2F8teDhZM0xe87sgBVnUtDoEA1fKh85xPKGN7W1dY0Sq2dDmgIjmnLUEHR2u0MJuf699xDDtoRzE2uSU9dbyu3dsc7RCEVeJzSh140TD7Z5wwOURO84iOGZNoVICSPUIpjqqD&X-Amz-Signature=316e87a107a9c56cc179cb1ad9f79b7776ebca7781af18efa034737df6898d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

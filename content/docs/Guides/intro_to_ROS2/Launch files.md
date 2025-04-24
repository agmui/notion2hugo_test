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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTWK2TD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDcKCezD5Hp%2F0I1DSVVXs8BINbpMvfc0VVhMN3RQF%2BFjgIgav%2FKwKbgcI2CbWdm8HEs5XA%2BuJsSAe1RPlrXqvjR4bgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGZH9RvUlE0ZkyqudircA2DdcFFJeXUTYvlJ9pKII2klMaaUosT2Vm9P02M9hojgeymL1%2FsYm1q3o06eKwxiLXjmyZ5YwgDZKJBwWT53Yl%2BjOrD%2BY4iR1Z3kkpXdoM80ETuBeHQryeISLNdcDMfdeqBlODkiuwyCralTuBZpDwmu4WOKkNufbGle6tUZ5MKvH0nMay5x2p4eRwuWRYfj8nqHkBmzLxRDFUsID1DcuGzyZks7b0%2B3KLlHmXUyRhIgBUp5p%2FKhmrJHwx%2FsL%2Bkj21CQNJqnaNfv8GgmvxacWSU4AbnLqmSAfIZuJVceh01kA0HSSXAoQmA3eSh5KLwRtyoK4DexaegKV98IgBiewEgWquW2ZZgs4ECM%2F0Msf%2F7ZVWSYKRWf9WBhWIP1%2FPtFjJUnsvUgXgo6KWhIK9M%2FOcy44i5U2DV3eIMR7NFVArnTu9W2CqpErVoh4ZT5MGL0B85dYTu9VkVQsMRhBCqr5OtxnFCAYjrIavoghs9DZNtjEuRb%2B%2FK6u%2Fg%2FvEoO2XpXzgQWMU3FCZGTC8X30M%2FwK4lv%2BY68MqIJ2El%2B2UXfIuZx%2BgjUpY18TpdIh%2BvtP0mc6ZEZzE%2FsC9YJ8alPlg4W8gvQH7UYTGSVVy5wBWKoCJomp%2BhgOwJA%2Fy8ZlhlqMPm0p8AGOqUB38S7mpiHXO8gL9jnviMX5iOlUZs1D1eY4CBSJKoMXwkZvN0sn%2BffYZN3Oc8KPeHpwgXPYhpMx5MPC4t1wmkDa1mkT3V5JWjAtnIQTLmjZN50IRf8NkEKQ2fEXDatr1afL4e5p2yMcXs%2Fjz5sdH6zFwoh508o4WffaL8gCCCHl1YnY5gNqKLO95MUyeoWbN0ab4LukGIRHhjIxbXyUp3LEdlYq%2F0i&X-Amz-Signature=a8af83f6ab7cb1257bd1690dc414191d2baf31c4e5a1294591915bf7f4ece54c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTWK2TD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDcKCezD5Hp%2F0I1DSVVXs8BINbpMvfc0VVhMN3RQF%2BFjgIgav%2FKwKbgcI2CbWdm8HEs5XA%2BuJsSAe1RPlrXqvjR4bgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGZH9RvUlE0ZkyqudircA2DdcFFJeXUTYvlJ9pKII2klMaaUosT2Vm9P02M9hojgeymL1%2FsYm1q3o06eKwxiLXjmyZ5YwgDZKJBwWT53Yl%2BjOrD%2BY4iR1Z3kkpXdoM80ETuBeHQryeISLNdcDMfdeqBlODkiuwyCralTuBZpDwmu4WOKkNufbGle6tUZ5MKvH0nMay5x2p4eRwuWRYfj8nqHkBmzLxRDFUsID1DcuGzyZks7b0%2B3KLlHmXUyRhIgBUp5p%2FKhmrJHwx%2FsL%2Bkj21CQNJqnaNfv8GgmvxacWSU4AbnLqmSAfIZuJVceh01kA0HSSXAoQmA3eSh5KLwRtyoK4DexaegKV98IgBiewEgWquW2ZZgs4ECM%2F0Msf%2F7ZVWSYKRWf9WBhWIP1%2FPtFjJUnsvUgXgo6KWhIK9M%2FOcy44i5U2DV3eIMR7NFVArnTu9W2CqpErVoh4ZT5MGL0B85dYTu9VkVQsMRhBCqr5OtxnFCAYjrIavoghs9DZNtjEuRb%2B%2FK6u%2Fg%2FvEoO2XpXzgQWMU3FCZGTC8X30M%2FwK4lv%2BY68MqIJ2El%2B2UXfIuZx%2BgjUpY18TpdIh%2BvtP0mc6ZEZzE%2FsC9YJ8alPlg4W8gvQH7UYTGSVVy5wBWKoCJomp%2BhgOwJA%2Fy8ZlhlqMPm0p8AGOqUB38S7mpiHXO8gL9jnviMX5iOlUZs1D1eY4CBSJKoMXwkZvN0sn%2BffYZN3Oc8KPeHpwgXPYhpMx5MPC4t1wmkDa1mkT3V5JWjAtnIQTLmjZN50IRf8NkEKQ2fEXDatr1afL4e5p2yMcXs%2Fjz5sdH6zFwoh508o4WffaL8gCCCHl1YnY5gNqKLO95MUyeoWbN0ab4LukGIRHhjIxbXyUp3LEdlYq%2F0i&X-Amz-Signature=3fab411f77d1a23c628d72591eaae97646df7ffb6a834f33c129f38ad2482824&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTWK2TD%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDcKCezD5Hp%2F0I1DSVVXs8BINbpMvfc0VVhMN3RQF%2BFjgIgav%2FKwKbgcI2CbWdm8HEs5XA%2BuJsSAe1RPlrXqvjR4bgq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGZH9RvUlE0ZkyqudircA2DdcFFJeXUTYvlJ9pKII2klMaaUosT2Vm9P02M9hojgeymL1%2FsYm1q3o06eKwxiLXjmyZ5YwgDZKJBwWT53Yl%2BjOrD%2BY4iR1Z3kkpXdoM80ETuBeHQryeISLNdcDMfdeqBlODkiuwyCralTuBZpDwmu4WOKkNufbGle6tUZ5MKvH0nMay5x2p4eRwuWRYfj8nqHkBmzLxRDFUsID1DcuGzyZks7b0%2B3KLlHmXUyRhIgBUp5p%2FKhmrJHwx%2FsL%2Bkj21CQNJqnaNfv8GgmvxacWSU4AbnLqmSAfIZuJVceh01kA0HSSXAoQmA3eSh5KLwRtyoK4DexaegKV98IgBiewEgWquW2ZZgs4ECM%2F0Msf%2F7ZVWSYKRWf9WBhWIP1%2FPtFjJUnsvUgXgo6KWhIK9M%2FOcy44i5U2DV3eIMR7NFVArnTu9W2CqpErVoh4ZT5MGL0B85dYTu9VkVQsMRhBCqr5OtxnFCAYjrIavoghs9DZNtjEuRb%2B%2FK6u%2Fg%2FvEoO2XpXzgQWMU3FCZGTC8X30M%2FwK4lv%2BY68MqIJ2El%2B2UXfIuZx%2BgjUpY18TpdIh%2BvtP0mc6ZEZzE%2FsC9YJ8alPlg4W8gvQH7UYTGSVVy5wBWKoCJomp%2BhgOwJA%2Fy8ZlhlqMPm0p8AGOqUB38S7mpiHXO8gL9jnviMX5iOlUZs1D1eY4CBSJKoMXwkZvN0sn%2BffYZN3Oc8KPeHpwgXPYhpMx5MPC4t1wmkDa1mkT3V5JWjAtnIQTLmjZN50IRf8NkEKQ2fEXDatr1afL4e5p2yMcXs%2Fjz5sdH6zFwoh508o4WffaL8gCCCHl1YnY5gNqKLO95MUyeoWbN0ab4LukGIRHhjIxbXyUp3LEdlYq%2F0i&X-Amz-Signature=13abb4be80f19084393d61d0316d433a5957d33aa7595d623a98662f74030c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

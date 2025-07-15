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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETFILEC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDRlpcPIMMkIPJrbRn%2BVD7OrSLl9ZL418657j6%2F1fljDQIhAKKWWrfvc7q2K5AJq2FHvTWDwO6bBcvRNef0qflUHVtnKv8DCEUQABoMNjM3NDIzMTgzODA1Igzfd6kjixEPKEsgAZcq3AN14nDUT7Fx2EbYpilkSxERQk8nXDK4pzuafhrK%2FRlKTLYsfqSqdOiXBzTHdkJZwrcTwiboz6%2FnL3Lhgv06e9rrjaOS3KLXU0M1Stga68LTPNLRtLi%2FjDmayAI7XYPxsj3sBLlYkl66SDHMd27lTK3JvDvd6T%2BzP2f88CHeGWJc%2F7cbToNhYTv650Y4Ihk8WyZClC%2BFT0UVzSmgVSSMn9yfe%2FK8Te6NMKc5fUi41vmrpaP7mPh3%2B9evWZ1EH34%2BeHRFhXnMJVuhO8xXqdInvr9Ydb3bfSNGZNO3XxrcZY%2BG%2Bu8Jae9H5wBz1KPEgPgREw09qKXx1EZzKFKHQR%2Fm9WcnW9RMWEAocHsH1iyjOfFhP12iZ4fXxvvp0DdtT%2Bzj0ZGtdeTEQGdQfCBSJrkRj3RGvz0sQ91JPQaC%2BXFYT9p%2FhYKFpDOY4yCFcbSPORwhodp1pGSNjxY5S0R%2B469j8B5YYIkdAtgdFp%2F22JtJyenmXDfVy%2BgoZNIGryy1JH8KPKuL2djFc46V0PKYEqcBo7M5pdRq%2Bj3gx3%2B%2F3AYnZL7TTgRL%2FjjuEdHd1pwbLxz0BDEwU4hfvBuhmxcLGD%2F5H%2FiHqvx0XwCDIBvLaEAnsH5P%2Bm%2F4s5%2F1fAgK8xBZ9DDBg9nDBjqkAdyrmxiKSk5pZPJXlszfhq1ZrOy3K0kxrSz%2F%2Fx4LtPLLwlRcNPkOiVgmPmpDi3TaZO328lO23Zr8k4U67JImZg3%2BfhMZFxheUW6StO0cf8QGMckx4pcaaw5xjr0aJEUHK%2Bvc2ZAJoHYHZ5%2BBeyqBdUQCYiObqdX%2FyLFYObKTmH1KSSLdopl4KG79T1UAR8xs7SapGA7lIfdamb0uiKP5IyzrveeL&X-Amz-Signature=fef940f18fe1599c2323dfe85f9dbb236753194b2a343f4d7ff444cb9265c79f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETFILEC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDRlpcPIMMkIPJrbRn%2BVD7OrSLl9ZL418657j6%2F1fljDQIhAKKWWrfvc7q2K5AJq2FHvTWDwO6bBcvRNef0qflUHVtnKv8DCEUQABoMNjM3NDIzMTgzODA1Igzfd6kjixEPKEsgAZcq3AN14nDUT7Fx2EbYpilkSxERQk8nXDK4pzuafhrK%2FRlKTLYsfqSqdOiXBzTHdkJZwrcTwiboz6%2FnL3Lhgv06e9rrjaOS3KLXU0M1Stga68LTPNLRtLi%2FjDmayAI7XYPxsj3sBLlYkl66SDHMd27lTK3JvDvd6T%2BzP2f88CHeGWJc%2F7cbToNhYTv650Y4Ihk8WyZClC%2BFT0UVzSmgVSSMn9yfe%2FK8Te6NMKc5fUi41vmrpaP7mPh3%2B9evWZ1EH34%2BeHRFhXnMJVuhO8xXqdInvr9Ydb3bfSNGZNO3XxrcZY%2BG%2Bu8Jae9H5wBz1KPEgPgREw09qKXx1EZzKFKHQR%2Fm9WcnW9RMWEAocHsH1iyjOfFhP12iZ4fXxvvp0DdtT%2Bzj0ZGtdeTEQGdQfCBSJrkRj3RGvz0sQ91JPQaC%2BXFYT9p%2FhYKFpDOY4yCFcbSPORwhodp1pGSNjxY5S0R%2B469j8B5YYIkdAtgdFp%2F22JtJyenmXDfVy%2BgoZNIGryy1JH8KPKuL2djFc46V0PKYEqcBo7M5pdRq%2Bj3gx3%2B%2F3AYnZL7TTgRL%2FjjuEdHd1pwbLxz0BDEwU4hfvBuhmxcLGD%2F5H%2FiHqvx0XwCDIBvLaEAnsH5P%2Bm%2F4s5%2F1fAgK8xBZ9DDBg9nDBjqkAdyrmxiKSk5pZPJXlszfhq1ZrOy3K0kxrSz%2F%2Fx4LtPLLwlRcNPkOiVgmPmpDi3TaZO328lO23Zr8k4U67JImZg3%2BfhMZFxheUW6StO0cf8QGMckx4pcaaw5xjr0aJEUHK%2Bvc2ZAJoHYHZ5%2BBeyqBdUQCYiObqdX%2FyLFYObKTmH1KSSLdopl4KG79T1UAR8xs7SapGA7lIfdamb0uiKP5IyzrveeL&X-Amz-Signature=6fb28d5ff0266b95361f91d9e631b9823ce47156ec3bc0a01c8239713d5c8ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WETFILEC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDRlpcPIMMkIPJrbRn%2BVD7OrSLl9ZL418657j6%2F1fljDQIhAKKWWrfvc7q2K5AJq2FHvTWDwO6bBcvRNef0qflUHVtnKv8DCEUQABoMNjM3NDIzMTgzODA1Igzfd6kjixEPKEsgAZcq3AN14nDUT7Fx2EbYpilkSxERQk8nXDK4pzuafhrK%2FRlKTLYsfqSqdOiXBzTHdkJZwrcTwiboz6%2FnL3Lhgv06e9rrjaOS3KLXU0M1Stga68LTPNLRtLi%2FjDmayAI7XYPxsj3sBLlYkl66SDHMd27lTK3JvDvd6T%2BzP2f88CHeGWJc%2F7cbToNhYTv650Y4Ihk8WyZClC%2BFT0UVzSmgVSSMn9yfe%2FK8Te6NMKc5fUi41vmrpaP7mPh3%2B9evWZ1EH34%2BeHRFhXnMJVuhO8xXqdInvr9Ydb3bfSNGZNO3XxrcZY%2BG%2Bu8Jae9H5wBz1KPEgPgREw09qKXx1EZzKFKHQR%2Fm9WcnW9RMWEAocHsH1iyjOfFhP12iZ4fXxvvp0DdtT%2Bzj0ZGtdeTEQGdQfCBSJrkRj3RGvz0sQ91JPQaC%2BXFYT9p%2FhYKFpDOY4yCFcbSPORwhodp1pGSNjxY5S0R%2B469j8B5YYIkdAtgdFp%2F22JtJyenmXDfVy%2BgoZNIGryy1JH8KPKuL2djFc46V0PKYEqcBo7M5pdRq%2Bj3gx3%2B%2F3AYnZL7TTgRL%2FjjuEdHd1pwbLxz0BDEwU4hfvBuhmxcLGD%2F5H%2FiHqvx0XwCDIBvLaEAnsH5P%2Bm%2F4s5%2F1fAgK8xBZ9DDBg9nDBjqkAdyrmxiKSk5pZPJXlszfhq1ZrOy3K0kxrSz%2F%2Fx4LtPLLwlRcNPkOiVgmPmpDi3TaZO328lO23Zr8k4U67JImZg3%2BfhMZFxheUW6StO0cf8QGMckx4pcaaw5xjr0aJEUHK%2Bvc2ZAJoHYHZ5%2BBeyqBdUQCYiObqdX%2FyLFYObKTmH1KSSLdopl4KG79T1UAR8xs7SapGA7lIfdamb0uiKP5IyzrveeL&X-Amz-Signature=eb6c4ee10e53d94661eba3dbfa83d962fbbe760e519484e1e9d52742bd18fec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

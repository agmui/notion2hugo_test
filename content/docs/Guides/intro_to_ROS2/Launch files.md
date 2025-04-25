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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466322XZ7EV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqqmLud%2FWLd1PPtkbaPGxhA7dWY3yXSdhLGm8W5mwLkgIhAL6U7gCsE0ZVgZ1nwzZ113LfSPlqIgLXlMjAtLwz%2FTUVKv8DCDYQABoMNjM3NDIzMTgzODA1IgwnKSQp58cfc9%2F%2Bw6oq3APrxOrmqEJZeew3j9RhXq6FR1QSb5iQVSz2enP%2FiRtgm88S7V7hHx%2Fn9o93m3T9JOCn8BOBIJzydqPy4blzrZmWkKBUsN6J4Z5vzHSMgZbFZt2aJPbfvNlYb5v1vQcJF%2BSIQHgBUvsM%2FApn9zIK66V8motdgoTrBWEeg42ttLCrKzkDTu4naPy211X6bqOSxtsjAj45%2FdXhatrY%2Fk7GhkUF%2FBhG6NPlIXAKXxUV28rhJxHxdWuiJmPJKPzKhhe%2FV3EeJRbiSozeAPUUw9i3Day4%2BAxPmOmjrZmhbeCKI7MNp3nX2H7kuW4NhphRAnpdf7HlMglbAs3luXWqqxCH4ykbgDpDv6GxghR6%2FD5T%2FGTsFK8npZEkcVwFUwZkO9RYwQYo5MITl9ifCfUBJmQQU4N%2FraGa%2Fut2D%2F%2BAaAH3FVc1zmXRlq3LadRUjIWgTrUoO7YUxMthhuLZIVQ3yQFCX8Yf2gq63wG6Qw0%2FLGyKnL6ezUG9Pq2JphDeGCcSfct%2BesH%2BEqMuUBx6egB5qgDot0hri77TVV8HlqCAf%2FD1z%2FWrnVWGjrywSJokMpC9XZS6pU2hHy%2Fs9CM%2FLixRgeZ4zxfhJT3SSx5nxHJZtms8CSQOSNb3rCGcFTALLxoGajCE7K%2FABjqkAak9NOAPRfE3UqpiFFJN1Spkrwqcta7eCoeE0FE6VtVyDN976jBybj%2Bna9mmt%2F9Mq6x6%2Fm9XoJM6%2FwEkNwUh4qFC%2BahYNE1L4Qm2nx219GSCoWN%2FJO3ypbd47db1fDpCqHNHDAca5B8DGG2DAE%2FzKhQO7ZXsdXs%2B1YwjqJOIwVDzpI1Kh3I6zT%2Ba5juNq8tYzqTcTPVAtC4I8qOo%2BSMgtc3dzEym&X-Amz-Signature=2e3cb26d014b95c6d909cf0364ce0595c0d292bf2a7aa95120f6a89e48d64af1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466322XZ7EV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqqmLud%2FWLd1PPtkbaPGxhA7dWY3yXSdhLGm8W5mwLkgIhAL6U7gCsE0ZVgZ1nwzZ113LfSPlqIgLXlMjAtLwz%2FTUVKv8DCDYQABoMNjM3NDIzMTgzODA1IgwnKSQp58cfc9%2F%2Bw6oq3APrxOrmqEJZeew3j9RhXq6FR1QSb5iQVSz2enP%2FiRtgm88S7V7hHx%2Fn9o93m3T9JOCn8BOBIJzydqPy4blzrZmWkKBUsN6J4Z5vzHSMgZbFZt2aJPbfvNlYb5v1vQcJF%2BSIQHgBUvsM%2FApn9zIK66V8motdgoTrBWEeg42ttLCrKzkDTu4naPy211X6bqOSxtsjAj45%2FdXhatrY%2Fk7GhkUF%2FBhG6NPlIXAKXxUV28rhJxHxdWuiJmPJKPzKhhe%2FV3EeJRbiSozeAPUUw9i3Day4%2BAxPmOmjrZmhbeCKI7MNp3nX2H7kuW4NhphRAnpdf7HlMglbAs3luXWqqxCH4ykbgDpDv6GxghR6%2FD5T%2FGTsFK8npZEkcVwFUwZkO9RYwQYo5MITl9ifCfUBJmQQU4N%2FraGa%2Fut2D%2F%2BAaAH3FVc1zmXRlq3LadRUjIWgTrUoO7YUxMthhuLZIVQ3yQFCX8Yf2gq63wG6Qw0%2FLGyKnL6ezUG9Pq2JphDeGCcSfct%2BesH%2BEqMuUBx6egB5qgDot0hri77TVV8HlqCAf%2FD1z%2FWrnVWGjrywSJokMpC9XZS6pU2hHy%2Fs9CM%2FLixRgeZ4zxfhJT3SSx5nxHJZtms8CSQOSNb3rCGcFTALLxoGajCE7K%2FABjqkAak9NOAPRfE3UqpiFFJN1Spkrwqcta7eCoeE0FE6VtVyDN976jBybj%2Bna9mmt%2F9Mq6x6%2Fm9XoJM6%2FwEkNwUh4qFC%2BahYNE1L4Qm2nx219GSCoWN%2FJO3ypbd47db1fDpCqHNHDAca5B8DGG2DAE%2FzKhQO7ZXsdXs%2B1YwjqJOIwVDzpI1Kh3I6zT%2Ba5juNq8tYzqTcTPVAtC4I8qOo%2BSMgtc3dzEym&X-Amz-Signature=47a6e6375d22bcd0e0372fb903b6f4566747a15513dbbc642efad1987b87f758&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466322XZ7EV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqqmLud%2FWLd1PPtkbaPGxhA7dWY3yXSdhLGm8W5mwLkgIhAL6U7gCsE0ZVgZ1nwzZ113LfSPlqIgLXlMjAtLwz%2FTUVKv8DCDYQABoMNjM3NDIzMTgzODA1IgwnKSQp58cfc9%2F%2Bw6oq3APrxOrmqEJZeew3j9RhXq6FR1QSb5iQVSz2enP%2FiRtgm88S7V7hHx%2Fn9o93m3T9JOCn8BOBIJzydqPy4blzrZmWkKBUsN6J4Z5vzHSMgZbFZt2aJPbfvNlYb5v1vQcJF%2BSIQHgBUvsM%2FApn9zIK66V8motdgoTrBWEeg42ttLCrKzkDTu4naPy211X6bqOSxtsjAj45%2FdXhatrY%2Fk7GhkUF%2FBhG6NPlIXAKXxUV28rhJxHxdWuiJmPJKPzKhhe%2FV3EeJRbiSozeAPUUw9i3Day4%2BAxPmOmjrZmhbeCKI7MNp3nX2H7kuW4NhphRAnpdf7HlMglbAs3luXWqqxCH4ykbgDpDv6GxghR6%2FD5T%2FGTsFK8npZEkcVwFUwZkO9RYwQYo5MITl9ifCfUBJmQQU4N%2FraGa%2Fut2D%2F%2BAaAH3FVc1zmXRlq3LadRUjIWgTrUoO7YUxMthhuLZIVQ3yQFCX8Yf2gq63wG6Qw0%2FLGyKnL6ezUG9Pq2JphDeGCcSfct%2BesH%2BEqMuUBx6egB5qgDot0hri77TVV8HlqCAf%2FD1z%2FWrnVWGjrywSJokMpC9XZS6pU2hHy%2Fs9CM%2FLixRgeZ4zxfhJT3SSx5nxHJZtms8CSQOSNb3rCGcFTALLxoGajCE7K%2FABjqkAak9NOAPRfE3UqpiFFJN1Spkrwqcta7eCoeE0FE6VtVyDN976jBybj%2Bna9mmt%2F9Mq6x6%2Fm9XoJM6%2FwEkNwUh4qFC%2BahYNE1L4Qm2nx219GSCoWN%2FJO3ypbd47db1fDpCqHNHDAca5B8DGG2DAE%2FzKhQO7ZXsdXs%2B1YwjqJOIwVDzpI1Kh3I6zT%2Ba5juNq8tYzqTcTPVAtC4I8qOo%2BSMgtc3dzEym&X-Amz-Signature=67660ba87a39efa06587969cc0b8758b9ae2ac6d26bc849f254f5e9c003c8478&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

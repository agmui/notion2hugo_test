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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S5BGQPO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICMryH3zoLfNl%2Fk%2FmG%2BRaUf%2FQ8n3v2Lp3AZTk23aXM1VAiEA0QUpkKPglCSUXfeJ1YyAMXDZvYHJXNpP0sSGFoopbPEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqDPu52qEhTflnl8yrcAz9mHSh80dnqjLukpIq35XpW5XmfVs71isF4tCUbqTYXwwMQDwtFZXf7s5poqQONGzEb3Gb5eQZE57QTh%2BfL%2BJVa8TvkQ0id0nkVHLdW3gcFKihDyODXZw2OlQN%2BD%2FkzTd5zxaDIkaCa%2FnSQkBd2MDPqJdrVs%2Fs0JvZ9%2F6R8Qs3o9FYgmUL8NAIwRuu3XM95VAciZBjxYTzi5PpgCutifTkNzebn9vuucKlM%2Fua6NcP62zLg3WO4mQ%2BBclESfChJ1LEwCEl6KhBx6JCfJ1iZEiD2ajiMgtlCchPnJ8USFKdzkOs334GqgTsbzNIuyV96EfF5I9fKL4JCt7Jnpji0n2z%2B7Jv0%2F6MMaWS%2FcfyuZ0RQtMF%2Fd9Rsix%2BrTHpgrd8v6USEGG7HOUvAfpAFpNcKGB6rcZvBmDM9lONS2Bs5S0HFKcPDLP2DDih8Tt3tHt6nRW0V9QSsStLcDm4%2FjKZ6KN4RZI7e8DtBm1r5nUjQyrT9rJIwsMdgAFRtAgtl7UR%2FIGO9lLmvzAQA1sINQlyVJxniucwuZbIxlybYTj6po%2FtEPXvo5Zy2CWPld4uOiM3al%2BppoZXxcNwwPVbv8or6XxcdNlmDPfS7hiSB7cPXAA%2BFt2mUusuEaP%2BKf6U5MOrXj74GOqUB3%2FnAMZd3gWGl5h9q1cCtD386wU0FyVQLeFE44Untv5G7b1lOiP3yrsF8FRglt5ezf08uBJQznQEoSCdOQx5KzHv21ZXWziCPLcJc7KP4nHiCko0g8ETBrhq2eDIuLutxoUa2u0O7hSLZrMlb%2FQb6VGZ9vdzsJ7Ue0gaXFI5p7lNZq3jvnX%2BfsAVy6CS00V%2FCHESYvIrfyU77V5tNXLC%2BJbS6rxGE&X-Amz-Signature=368e77c94f3dc396d2abe40e0e7e73ef7655a11013fdfa2b163cbb5195ce02e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S5BGQPO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICMryH3zoLfNl%2Fk%2FmG%2BRaUf%2FQ8n3v2Lp3AZTk23aXM1VAiEA0QUpkKPglCSUXfeJ1YyAMXDZvYHJXNpP0sSGFoopbPEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqDPu52qEhTflnl8yrcAz9mHSh80dnqjLukpIq35XpW5XmfVs71isF4tCUbqTYXwwMQDwtFZXf7s5poqQONGzEb3Gb5eQZE57QTh%2BfL%2BJVa8TvkQ0id0nkVHLdW3gcFKihDyODXZw2OlQN%2BD%2FkzTd5zxaDIkaCa%2FnSQkBd2MDPqJdrVs%2Fs0JvZ9%2F6R8Qs3o9FYgmUL8NAIwRuu3XM95VAciZBjxYTzi5PpgCutifTkNzebn9vuucKlM%2Fua6NcP62zLg3WO4mQ%2BBclESfChJ1LEwCEl6KhBx6JCfJ1iZEiD2ajiMgtlCchPnJ8USFKdzkOs334GqgTsbzNIuyV96EfF5I9fKL4JCt7Jnpji0n2z%2B7Jv0%2F6MMaWS%2FcfyuZ0RQtMF%2Fd9Rsix%2BrTHpgrd8v6USEGG7HOUvAfpAFpNcKGB6rcZvBmDM9lONS2Bs5S0HFKcPDLP2DDih8Tt3tHt6nRW0V9QSsStLcDm4%2FjKZ6KN4RZI7e8DtBm1r5nUjQyrT9rJIwsMdgAFRtAgtl7UR%2FIGO9lLmvzAQA1sINQlyVJxniucwuZbIxlybYTj6po%2FtEPXvo5Zy2CWPld4uOiM3al%2BppoZXxcNwwPVbv8or6XxcdNlmDPfS7hiSB7cPXAA%2BFt2mUusuEaP%2BKf6U5MOrXj74GOqUB3%2FnAMZd3gWGl5h9q1cCtD386wU0FyVQLeFE44Untv5G7b1lOiP3yrsF8FRglt5ezf08uBJQznQEoSCdOQx5KzHv21ZXWziCPLcJc7KP4nHiCko0g8ETBrhq2eDIuLutxoUa2u0O7hSLZrMlb%2FQb6VGZ9vdzsJ7Ue0gaXFI5p7lNZq3jvnX%2BfsAVy6CS00V%2FCHESYvIrfyU77V5tNXLC%2BJbS6rxGE&X-Amz-Signature=f3b960681c315793b0d6717778638f2b798e5a5fdfcdd310b9519570b6a49243&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S5BGQPO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T110126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCICMryH3zoLfNl%2Fk%2FmG%2BRaUf%2FQ8n3v2Lp3AZTk23aXM1VAiEA0QUpkKPglCSUXfeJ1YyAMXDZvYHJXNpP0sSGFoopbPEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHqDPu52qEhTflnl8yrcAz9mHSh80dnqjLukpIq35XpW5XmfVs71isF4tCUbqTYXwwMQDwtFZXf7s5poqQONGzEb3Gb5eQZE57QTh%2BfL%2BJVa8TvkQ0id0nkVHLdW3gcFKihDyODXZw2OlQN%2BD%2FkzTd5zxaDIkaCa%2FnSQkBd2MDPqJdrVs%2Fs0JvZ9%2F6R8Qs3o9FYgmUL8NAIwRuu3XM95VAciZBjxYTzi5PpgCutifTkNzebn9vuucKlM%2Fua6NcP62zLg3WO4mQ%2BBclESfChJ1LEwCEl6KhBx6JCfJ1iZEiD2ajiMgtlCchPnJ8USFKdzkOs334GqgTsbzNIuyV96EfF5I9fKL4JCt7Jnpji0n2z%2B7Jv0%2F6MMaWS%2FcfyuZ0RQtMF%2Fd9Rsix%2BrTHpgrd8v6USEGG7HOUvAfpAFpNcKGB6rcZvBmDM9lONS2Bs5S0HFKcPDLP2DDih8Tt3tHt6nRW0V9QSsStLcDm4%2FjKZ6KN4RZI7e8DtBm1r5nUjQyrT9rJIwsMdgAFRtAgtl7UR%2FIGO9lLmvzAQA1sINQlyVJxniucwuZbIxlybYTj6po%2FtEPXvo5Zy2CWPld4uOiM3al%2BppoZXxcNwwPVbv8or6XxcdNlmDPfS7hiSB7cPXAA%2BFt2mUusuEaP%2BKf6U5MOrXj74GOqUB3%2FnAMZd3gWGl5h9q1cCtD386wU0FyVQLeFE44Untv5G7b1lOiP3yrsF8FRglt5ezf08uBJQznQEoSCdOQx5KzHv21ZXWziCPLcJc7KP4nHiCko0g8ETBrhq2eDIuLutxoUa2u0O7hSLZrMlb%2FQb6VGZ9vdzsJ7Ue0gaXFI5p7lNZq3jvnX%2BfsAVy6CS00V%2FCHESYvIrfyU77V5tNXLC%2BJbS6rxGE&X-Amz-Signature=555c0cd6ed8fc6cd7640e21d874032146b15708e2a2559c21123198d1a65d5d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

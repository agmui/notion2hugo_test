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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J5ZA724%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2gUuPG5odMrU%2BQYOl5aehFOmQxpITsXcKQZZE0wW%2BlQIgDo42eL6oXYJx%2BAoCsSuDDr1RFQd2WLLvBCUIUYwEJCQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8cEb2Nh1ysp%2BfQyCrcAz1HeWXXRk1EflGKdyZx%2FVbpKpIupwVrkV2sJVxcWvZLcu3uEUZCYdAENxL3ZBGt5RMrueDUrSe9BhPG2V8PdYQ5nqGd%2Fr3yd33n8qQG8%2FVNtaZrDwjtKDDbw%2Bl%2BwU4QJO5lJFbYHiQwHTAbt%2BjizkxAapXAT%2FDza64MJno4uylRYPjwv92a1mTgw8bQ%2BolITDpXVAk4Uuz70Owqvtg2k1Kk3VIu1rADaWuD7fFqYVJPZb8X9YbjhvLBcyU74pY36%2FSSJ%2BNHkQgNt%2BfLKvSZHtVvC55PyJQaXJgECehmDfBSUt%2BNbSRWBEvKbje19VXbXHjCFuLCL4XVaBVp8DjlPR3e0Js%2BuydFzo1yI3U1kvTvq5lWeFNb0cGo92fCUHitj4NaPscwI5qG%2BK9lP5K5qlfeAk%2FSe%2B69cXEMcsZ7O5SKeUxnry0VkwoMVQObwtttJMeCuAfH5CZL9KMBgfxvbwha4NUAWigKgGibI1VMeVrzAi0QFo1pOYeasqiMmuvsUHGrGh%2FlLh0nY5IHO%2FQav69RPai7dwgeBKfjHqj0EoTSgFB7sPsV4iDIeACAICS9ZpoMh0LJUuOXxnOy9BXkKjSA3JGUHb6xszYUC6f3fYJUR9ZqpZRJz11ClRKPMJzd9LwGOqUBZ80BDRc4%2FqpQ2nj9sgUiOr8aXp6WbfJQJots9AUVEVuwAUebHgvXuK3XQnw0NOj6s19rG1w0GMinvx751cEctH2DnTf6fj%2FLzBKJiFQIgHqj3jOLQfa82w5raTwUDw%2FMWTuQzvlrNPr9n8SQHei346I31oc%2BROjHNnBPnO%2B%2Bt7fCnvxW4u783pDRlzzZmwchfocU1T0%2F8BoECGca90AKLLPcur5C&X-Amz-Signature=dbcf4bdbbc9ae5798e599767556e6cbb14f2d309b2835a88874131c7f742fa63&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J5ZA724%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2gUuPG5odMrU%2BQYOl5aehFOmQxpITsXcKQZZE0wW%2BlQIgDo42eL6oXYJx%2BAoCsSuDDr1RFQd2WLLvBCUIUYwEJCQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8cEb2Nh1ysp%2BfQyCrcAz1HeWXXRk1EflGKdyZx%2FVbpKpIupwVrkV2sJVxcWvZLcu3uEUZCYdAENxL3ZBGt5RMrueDUrSe9BhPG2V8PdYQ5nqGd%2Fr3yd33n8qQG8%2FVNtaZrDwjtKDDbw%2Bl%2BwU4QJO5lJFbYHiQwHTAbt%2BjizkxAapXAT%2FDza64MJno4uylRYPjwv92a1mTgw8bQ%2BolITDpXVAk4Uuz70Owqvtg2k1Kk3VIu1rADaWuD7fFqYVJPZb8X9YbjhvLBcyU74pY36%2FSSJ%2BNHkQgNt%2BfLKvSZHtVvC55PyJQaXJgECehmDfBSUt%2BNbSRWBEvKbje19VXbXHjCFuLCL4XVaBVp8DjlPR3e0Js%2BuydFzo1yI3U1kvTvq5lWeFNb0cGo92fCUHitj4NaPscwI5qG%2BK9lP5K5qlfeAk%2FSe%2B69cXEMcsZ7O5SKeUxnry0VkwoMVQObwtttJMeCuAfH5CZL9KMBgfxvbwha4NUAWigKgGibI1VMeVrzAi0QFo1pOYeasqiMmuvsUHGrGh%2FlLh0nY5IHO%2FQav69RPai7dwgeBKfjHqj0EoTSgFB7sPsV4iDIeACAICS9ZpoMh0LJUuOXxnOy9BXkKjSA3JGUHb6xszYUC6f3fYJUR9ZqpZRJz11ClRKPMJzd9LwGOqUBZ80BDRc4%2FqpQ2nj9sgUiOr8aXp6WbfJQJots9AUVEVuwAUebHgvXuK3XQnw0NOj6s19rG1w0GMinvx751cEctH2DnTf6fj%2FLzBKJiFQIgHqj3jOLQfa82w5raTwUDw%2FMWTuQzvlrNPr9n8SQHei346I31oc%2BROjHNnBPnO%2B%2Bt7fCnvxW4u783pDRlzzZmwchfocU1T0%2F8BoECGca90AKLLPcur5C&X-Amz-Signature=e06b06b2b6af3bda315d695a361a7687c73309d626241db090012339d2f05085&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J5ZA724%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2gUuPG5odMrU%2BQYOl5aehFOmQxpITsXcKQZZE0wW%2BlQIgDo42eL6oXYJx%2BAoCsSuDDr1RFQd2WLLvBCUIUYwEJCQqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ8cEb2Nh1ysp%2BfQyCrcAz1HeWXXRk1EflGKdyZx%2FVbpKpIupwVrkV2sJVxcWvZLcu3uEUZCYdAENxL3ZBGt5RMrueDUrSe9BhPG2V8PdYQ5nqGd%2Fr3yd33n8qQG8%2FVNtaZrDwjtKDDbw%2Bl%2BwU4QJO5lJFbYHiQwHTAbt%2BjizkxAapXAT%2FDza64MJno4uylRYPjwv92a1mTgw8bQ%2BolITDpXVAk4Uuz70Owqvtg2k1Kk3VIu1rADaWuD7fFqYVJPZb8X9YbjhvLBcyU74pY36%2FSSJ%2BNHkQgNt%2BfLKvSZHtVvC55PyJQaXJgECehmDfBSUt%2BNbSRWBEvKbje19VXbXHjCFuLCL4XVaBVp8DjlPR3e0Js%2BuydFzo1yI3U1kvTvq5lWeFNb0cGo92fCUHitj4NaPscwI5qG%2BK9lP5K5qlfeAk%2FSe%2B69cXEMcsZ7O5SKeUxnry0VkwoMVQObwtttJMeCuAfH5CZL9KMBgfxvbwha4NUAWigKgGibI1VMeVrzAi0QFo1pOYeasqiMmuvsUHGrGh%2FlLh0nY5IHO%2FQav69RPai7dwgeBKfjHqj0EoTSgFB7sPsV4iDIeACAICS9ZpoMh0LJUuOXxnOy9BXkKjSA3JGUHb6xszYUC6f3fYJUR9ZqpZRJz11ClRKPMJzd9LwGOqUBZ80BDRc4%2FqpQ2nj9sgUiOr8aXp6WbfJQJots9AUVEVuwAUebHgvXuK3XQnw0NOj6s19rG1w0GMinvx751cEctH2DnTf6fj%2FLzBKJiFQIgHqj3jOLQfa82w5raTwUDw%2FMWTuQzvlrNPr9n8SQHei346I31oc%2BROjHNnBPnO%2B%2Bt7fCnvxW4u783pDRlzzZmwchfocU1T0%2F8BoECGca90AKLLPcur5C&X-Amz-Signature=f8411758cfa51f9e5cbaa4d742392f38f2fa269abba75513de6740808288d4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPYTQUE%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHQxZT42hLbYlk89RSD654VP5rHsDdbbZxF2aG2ktnJgIhAP%2BCGo%2BFS49PLRe2ZwZoQupWS6AH3wLeLQz7RyI98m9BKv8DCEEQABoMNjM3NDIzMTgzODA1Igz0Wz9%2B1WGhFOawpP8q3AMwIeWUH%2FfWtIsUzbGSraK8qAyQjxNar1erUiRBTJU0mXUELVLBkGoT2YZIpH5TvrngQ0YZM%2B1N4saexhRaFFkdbk%2FXr6wYN9BTfeU5ed3h4uchrL90plselwDKGE6FhkUFF8vqZzOnRsDkfMON6yNlgHDwbqb8cZEYDo0poSjv3p2WlOA00pLvAmoRhAhxaQnp0iBwWNNdrX%2Bbxzbt8MLECY84oPvp3OOzeoKrUhA6KmbIHGq43aYR6omPXeoKXuFf9Jvw4lkz9zLGshatvZlAQ5o4b8mPhok3u6d6loBmjnGqXF1vtpUo6KqBzZzUMI1QK64jpGdDLZ54jYg9TEEM6zT9XL0%2BL35jlfrB7gDMp9VFsCrij2CO8PPi9OKjKyCcAQb8MG9hOuu3ymdjcyhwlCuGSNjQXwTnRUCVUOg%2BoH5mJR8c9bAmqejKUwqcqWKhqj7PqyRQUfTvn8nC9%2B22zDTeCJrPZXeYTzw1FB6JnHjVINbB0IXj60pYb0EB4CA0Mm8eDR0EYKcKwSeWPRbRWnK8JdYVk6LYfXxzG6Kn%2BOYUWr4p8jPfgKCxpSe9fzi08gyMeR6XFnItPzyNap1eGk1Px7GEb3SBtLfJPY0z8OAoWhO7%2Fh3fDNHNazCX05vBBjqkAVPiiAz5tgCh0dPJfmZGQ%2Fpl51HCQPL5GqwZHxhUUWYS7OaCqHt6BIRmWSEZ8f0mQ4Wtqu1c8mJr71OxadLjuWYBKC916YTm4dMdI5HCUqBmcR6vb%2BOsq3EtJV0JMwYvxeOWKwZyA7VKI%2BJfwiogqkrbu28XdeSan3VAcLZrO%2BQAJ4cGyalGf7ZbwiiQ1aSwhRFVc6IUNH3Qqbnnt%2FOf5XFl7%2FKV&X-Amz-Signature=37976acb4a2d6ca38586da2ffa28386b456901616ec3b0f25cd5544b2abf15ca&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPYTQUE%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHQxZT42hLbYlk89RSD654VP5rHsDdbbZxF2aG2ktnJgIhAP%2BCGo%2BFS49PLRe2ZwZoQupWS6AH3wLeLQz7RyI98m9BKv8DCEEQABoMNjM3NDIzMTgzODA1Igz0Wz9%2B1WGhFOawpP8q3AMwIeWUH%2FfWtIsUzbGSraK8qAyQjxNar1erUiRBTJU0mXUELVLBkGoT2YZIpH5TvrngQ0YZM%2B1N4saexhRaFFkdbk%2FXr6wYN9BTfeU5ed3h4uchrL90plselwDKGE6FhkUFF8vqZzOnRsDkfMON6yNlgHDwbqb8cZEYDo0poSjv3p2WlOA00pLvAmoRhAhxaQnp0iBwWNNdrX%2Bbxzbt8MLECY84oPvp3OOzeoKrUhA6KmbIHGq43aYR6omPXeoKXuFf9Jvw4lkz9zLGshatvZlAQ5o4b8mPhok3u6d6loBmjnGqXF1vtpUo6KqBzZzUMI1QK64jpGdDLZ54jYg9TEEM6zT9XL0%2BL35jlfrB7gDMp9VFsCrij2CO8PPi9OKjKyCcAQb8MG9hOuu3ymdjcyhwlCuGSNjQXwTnRUCVUOg%2BoH5mJR8c9bAmqejKUwqcqWKhqj7PqyRQUfTvn8nC9%2B22zDTeCJrPZXeYTzw1FB6JnHjVINbB0IXj60pYb0EB4CA0Mm8eDR0EYKcKwSeWPRbRWnK8JdYVk6LYfXxzG6Kn%2BOYUWr4p8jPfgKCxpSe9fzi08gyMeR6XFnItPzyNap1eGk1Px7GEb3SBtLfJPY0z8OAoWhO7%2Fh3fDNHNazCX05vBBjqkAVPiiAz5tgCh0dPJfmZGQ%2Fpl51HCQPL5GqwZHxhUUWYS7OaCqHt6BIRmWSEZ8f0mQ4Wtqu1c8mJr71OxadLjuWYBKC916YTm4dMdI5HCUqBmcR6vb%2BOsq3EtJV0JMwYvxeOWKwZyA7VKI%2BJfwiogqkrbu28XdeSan3VAcLZrO%2BQAJ4cGyalGf7ZbwiiQ1aSwhRFVc6IUNH3Qqbnnt%2FOf5XFl7%2FKV&X-Amz-Signature=393d23373e71ed8afacd6282d1d11221eae9d718511c928e02420c373f1ab9f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KPYTQUE%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHQxZT42hLbYlk89RSD654VP5rHsDdbbZxF2aG2ktnJgIhAP%2BCGo%2BFS49PLRe2ZwZoQupWS6AH3wLeLQz7RyI98m9BKv8DCEEQABoMNjM3NDIzMTgzODA1Igz0Wz9%2B1WGhFOawpP8q3AMwIeWUH%2FfWtIsUzbGSraK8qAyQjxNar1erUiRBTJU0mXUELVLBkGoT2YZIpH5TvrngQ0YZM%2B1N4saexhRaFFkdbk%2FXr6wYN9BTfeU5ed3h4uchrL90plselwDKGE6FhkUFF8vqZzOnRsDkfMON6yNlgHDwbqb8cZEYDo0poSjv3p2WlOA00pLvAmoRhAhxaQnp0iBwWNNdrX%2Bbxzbt8MLECY84oPvp3OOzeoKrUhA6KmbIHGq43aYR6omPXeoKXuFf9Jvw4lkz9zLGshatvZlAQ5o4b8mPhok3u6d6loBmjnGqXF1vtpUo6KqBzZzUMI1QK64jpGdDLZ54jYg9TEEM6zT9XL0%2BL35jlfrB7gDMp9VFsCrij2CO8PPi9OKjKyCcAQb8MG9hOuu3ymdjcyhwlCuGSNjQXwTnRUCVUOg%2BoH5mJR8c9bAmqejKUwqcqWKhqj7PqyRQUfTvn8nC9%2B22zDTeCJrPZXeYTzw1FB6JnHjVINbB0IXj60pYb0EB4CA0Mm8eDR0EYKcKwSeWPRbRWnK8JdYVk6LYfXxzG6Kn%2BOYUWr4p8jPfgKCxpSe9fzi08gyMeR6XFnItPzyNap1eGk1Px7GEb3SBtLfJPY0z8OAoWhO7%2Fh3fDNHNazCX05vBBjqkAVPiiAz5tgCh0dPJfmZGQ%2Fpl51HCQPL5GqwZHxhUUWYS7OaCqHt6BIRmWSEZ8f0mQ4Wtqu1c8mJr71OxadLjuWYBKC916YTm4dMdI5HCUqBmcR6vb%2BOsq3EtJV0JMwYvxeOWKwZyA7VKI%2BJfwiogqkrbu28XdeSan3VAcLZrO%2BQAJ4cGyalGf7ZbwiiQ1aSwhRFVc6IUNH3Qqbnnt%2FOf5XFl7%2FKV&X-Amz-Signature=e0c81e41f1d1f751b9845cba8eddd32e05fa6298cf9d9b2946652d667442521f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

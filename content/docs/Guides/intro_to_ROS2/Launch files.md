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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRTPQXRV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGCHqTSFke8EcsDBXgFGyVFhj10VyJzDUiyepdvY18qQIgWRIZ06DneKAwvuvqnLzbqvOeYqw3TKgkN%2Fj%2BTXJDOdsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJa6rgLi%2BkQiEmeD7yrcA1JhTzrQqnnhwoaUxfU0M1R2JUZzqEUgM4a1NBQJczlrGNlEpPTsgwJJWzfWHcEemW1LNFnCBpZ93xwAPJPxemtCOYyYAm920trTKOnBBNFeWMo6cxCplIxJv3HvRKFWYezCZVTcq3yC4T2czubhJn1BJTFrsw1AThhayuuVhBgDfeuHtCuJVTXxVYG5oxSW7ZZm65fN1MoRrM%2FaHS2QmvR%2BZyaEJKjehosqmocB%2B9GLpZH92IQRMnxFmQ9VyyojedIJfDkgZ68EH43%2Bc5FOSQWFf4yYXQ7ZzBYamF4xMSOT6AIv8LFWCsYMgV9QwPKbhVBDeLaYwYo9hpQhPlFhKVy1gfB8jtyf7hb4c1SaFJksTAZH8zxKCZTDxlr4JRfYqBPZfE5ptXzAWHfcQMJYRyHR%2BtZ7qUObvU7EdZK32DfZvw6Rw3vHVnhyQ2lw7stkxXkCq8W5monYF9G%2FkOtxU1YSSLmHXvlov544Csy%2FiGU9MENjJS6yTFflPFTaB797RyJeiFeNsvE%2BU%2F3KPcfCk3ksq9wo9dJEVw8iZpJqLj0mj8sdUY%2BQ8Pf7Ft5PypRd8zHwD%2BAaFXnSIp3zbscHOeL8NJtPsjW2T4oFsXH1vRjY%2FO0jkDYxUqufc0pdMJ7EwsAGOqUB6CICJxKR3164MWDAnld%2FwzQ%2F8jvzs115z6XuqTWMNkwjj9ZBNrYApXMVxwNUNqxIr3uZY7uFnDKTCL5xie5NQwRD1CCnJM%2FlUr8IE5eIeilKBQi7ed0e%2F7MbBgGSpF3%2B2Y737mbxxAaVO%2FKEH%2FV8zBy%2BjOjfTdDX1pZ9Jpwlxz8phyqN7IfGcrnsIL2KMpYwSlYOoalnY0%2B%2B2jFqCMKjBpiV5Ne%2F&X-Amz-Signature=18634bfc7d531be84ef5de6a31c1d2b9ffa15a9c43db022693f15d35ff101339&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRTPQXRV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGCHqTSFke8EcsDBXgFGyVFhj10VyJzDUiyepdvY18qQIgWRIZ06DneKAwvuvqnLzbqvOeYqw3TKgkN%2Fj%2BTXJDOdsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJa6rgLi%2BkQiEmeD7yrcA1JhTzrQqnnhwoaUxfU0M1R2JUZzqEUgM4a1NBQJczlrGNlEpPTsgwJJWzfWHcEemW1LNFnCBpZ93xwAPJPxemtCOYyYAm920trTKOnBBNFeWMo6cxCplIxJv3HvRKFWYezCZVTcq3yC4T2czubhJn1BJTFrsw1AThhayuuVhBgDfeuHtCuJVTXxVYG5oxSW7ZZm65fN1MoRrM%2FaHS2QmvR%2BZyaEJKjehosqmocB%2B9GLpZH92IQRMnxFmQ9VyyojedIJfDkgZ68EH43%2Bc5FOSQWFf4yYXQ7ZzBYamF4xMSOT6AIv8LFWCsYMgV9QwPKbhVBDeLaYwYo9hpQhPlFhKVy1gfB8jtyf7hb4c1SaFJksTAZH8zxKCZTDxlr4JRfYqBPZfE5ptXzAWHfcQMJYRyHR%2BtZ7qUObvU7EdZK32DfZvw6Rw3vHVnhyQ2lw7stkxXkCq8W5monYF9G%2FkOtxU1YSSLmHXvlov544Csy%2FiGU9MENjJS6yTFflPFTaB797RyJeiFeNsvE%2BU%2F3KPcfCk3ksq9wo9dJEVw8iZpJqLj0mj8sdUY%2BQ8Pf7Ft5PypRd8zHwD%2BAaFXnSIp3zbscHOeL8NJtPsjW2T4oFsXH1vRjY%2FO0jkDYxUqufc0pdMJ7EwsAGOqUB6CICJxKR3164MWDAnld%2FwzQ%2F8jvzs115z6XuqTWMNkwjj9ZBNrYApXMVxwNUNqxIr3uZY7uFnDKTCL5xie5NQwRD1CCnJM%2FlUr8IE5eIeilKBQi7ed0e%2F7MbBgGSpF3%2B2Y737mbxxAaVO%2FKEH%2FV8zBy%2BjOjfTdDX1pZ9Jpwlxz8phyqN7IfGcrnsIL2KMpYwSlYOoalnY0%2B%2B2jFqCMKjBpiV5Ne%2F&X-Amz-Signature=a90edb79bfcb0890dff97b4df92bad2d50b4ff98990df60eabc56003c59ccf12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRTPQXRV%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGCHqTSFke8EcsDBXgFGyVFhj10VyJzDUiyepdvY18qQIgWRIZ06DneKAwvuvqnLzbqvOeYqw3TKgkN%2Fj%2BTXJDOdsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJa6rgLi%2BkQiEmeD7yrcA1JhTzrQqnnhwoaUxfU0M1R2JUZzqEUgM4a1NBQJczlrGNlEpPTsgwJJWzfWHcEemW1LNFnCBpZ93xwAPJPxemtCOYyYAm920trTKOnBBNFeWMo6cxCplIxJv3HvRKFWYezCZVTcq3yC4T2czubhJn1BJTFrsw1AThhayuuVhBgDfeuHtCuJVTXxVYG5oxSW7ZZm65fN1MoRrM%2FaHS2QmvR%2BZyaEJKjehosqmocB%2B9GLpZH92IQRMnxFmQ9VyyojedIJfDkgZ68EH43%2Bc5FOSQWFf4yYXQ7ZzBYamF4xMSOT6AIv8LFWCsYMgV9QwPKbhVBDeLaYwYo9hpQhPlFhKVy1gfB8jtyf7hb4c1SaFJksTAZH8zxKCZTDxlr4JRfYqBPZfE5ptXzAWHfcQMJYRyHR%2BtZ7qUObvU7EdZK32DfZvw6Rw3vHVnhyQ2lw7stkxXkCq8W5monYF9G%2FkOtxU1YSSLmHXvlov544Csy%2FiGU9MENjJS6yTFflPFTaB797RyJeiFeNsvE%2BU%2F3KPcfCk3ksq9wo9dJEVw8iZpJqLj0mj8sdUY%2BQ8Pf7Ft5PypRd8zHwD%2BAaFXnSIp3zbscHOeL8NJtPsjW2T4oFsXH1vRjY%2FO0jkDYxUqufc0pdMJ7EwsAGOqUB6CICJxKR3164MWDAnld%2FwzQ%2F8jvzs115z6XuqTWMNkwjj9ZBNrYApXMVxwNUNqxIr3uZY7uFnDKTCL5xie5NQwRD1CCnJM%2FlUr8IE5eIeilKBQi7ed0e%2F7MbBgGSpF3%2B2Y737mbxxAaVO%2FKEH%2FV8zBy%2BjOjfTdDX1pZ9Jpwlxz8phyqN7IfGcrnsIL2KMpYwSlYOoalnY0%2B%2B2jFqCMKjBpiV5Ne%2F&X-Amz-Signature=8c6184b58219f85ad9860bdc43c2e0011f1911f1b6a10a94292fab279f39631b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB23AQ6U%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDom%2FsKxVZgvt%2BK4b4BWXfXYjbbwIvOdbeVkxaGeJMuFgIgRcWb9%2BTOPXBSdf%2B2hx%2BfOFVJEv4sXloeTvO2e%2B4mUPwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcBdxI8VNI0xwPQWCrcAzwUpkK8Mo6aIoMWj4ldV2t4JCNIAKAl2QL%2Bggcr8jpmK2xGNODQYDaEYgDgxRAV90LxdmbP6H1oC5BnU8VaaCTdfvVKrEMhLHdytUoI9F3y2Jqz%2BEbQrLTOdmyVjW%2BR1R40joakXHXGuxKICFVSv3f6d1XVdeQcRTK0VLNX2VPj%2FKOtfwd5Rq8K4vK0ubNAsgzo9jziYjsUuNpj5OISxbOaLw8mPhJ8eZFu0J%2FeZh4drclblq0c6Px4sUeX%2B5RQPxDW5T%2FpxEZBsjuOt2qEGYQtEyiu3rd8N97HHmqhZcHtDJdO3fNpQZKLl4hpvulor1vHo4EtXWJcZJSYt8wvMmHQ4Oznpfe9B76SQXa7YY43CzWSsw%2BaZySbksRi%2FlLbFB9OH3zqw7Ow5aGeM8HyJrUPF1867wT%2FZeiSFDcDPYj28VqiKI9f7msNu2PgTyiG38Y3llyd%2BrcFjEVEkJqV4PRsZycSSEmBWmJ8SqUzI49Thb3u6aQXzcqbEFJsieXjrMAp9q6XYkUkJXPkSQfubpYX5LSfRQQtw%2BzuihCaj3evvDWytuqgD%2BG0mEsFLRC1E4pOQNMiFl0hd9d8Pfi%2B1buto6V9N2zKtHbxxnhclgYhmLc%2BCzq56Jq6xTHLMIOH%2FsAGOqUBiv4uT9aHMEndGzBNqtRMX7uALEnMZe4%2FvgMdHsOhY%2Fnvnq58lZfzvJ4HtLp5T4yLaVz3ODxxeUEq6qOH6p3lTa62z%2FgzG%2F%2FTLhHDc4FJyUPcY%2F3CVgu36VlyF5LDgAwlk5UXr7OZY8b%2BibF0SlrkisBg4rtHWfq1X3rFY1gnlqQy3wGFe%2BVFj%2F0n5%2FCXl8cZ0aBqyTno%2FepUagXA3x3lATWTcKJo&X-Amz-Signature=ffab8737a8bb92c581cea858cba6ce6fb9b989149a97cd4e39d7f1b180883671&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB23AQ6U%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDom%2FsKxVZgvt%2BK4b4BWXfXYjbbwIvOdbeVkxaGeJMuFgIgRcWb9%2BTOPXBSdf%2B2hx%2BfOFVJEv4sXloeTvO2e%2B4mUPwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcBdxI8VNI0xwPQWCrcAzwUpkK8Mo6aIoMWj4ldV2t4JCNIAKAl2QL%2Bggcr8jpmK2xGNODQYDaEYgDgxRAV90LxdmbP6H1oC5BnU8VaaCTdfvVKrEMhLHdytUoI9F3y2Jqz%2BEbQrLTOdmyVjW%2BR1R40joakXHXGuxKICFVSv3f6d1XVdeQcRTK0VLNX2VPj%2FKOtfwd5Rq8K4vK0ubNAsgzo9jziYjsUuNpj5OISxbOaLw8mPhJ8eZFu0J%2FeZh4drclblq0c6Px4sUeX%2B5RQPxDW5T%2FpxEZBsjuOt2qEGYQtEyiu3rd8N97HHmqhZcHtDJdO3fNpQZKLl4hpvulor1vHo4EtXWJcZJSYt8wvMmHQ4Oznpfe9B76SQXa7YY43CzWSsw%2BaZySbksRi%2FlLbFB9OH3zqw7Ow5aGeM8HyJrUPF1867wT%2FZeiSFDcDPYj28VqiKI9f7msNu2PgTyiG38Y3llyd%2BrcFjEVEkJqV4PRsZycSSEmBWmJ8SqUzI49Thb3u6aQXzcqbEFJsieXjrMAp9q6XYkUkJXPkSQfubpYX5LSfRQQtw%2BzuihCaj3evvDWytuqgD%2BG0mEsFLRC1E4pOQNMiFl0hd9d8Pfi%2B1buto6V9N2zKtHbxxnhclgYhmLc%2BCzq56Jq6xTHLMIOH%2FsAGOqUBiv4uT9aHMEndGzBNqtRMX7uALEnMZe4%2FvgMdHsOhY%2Fnvnq58lZfzvJ4HtLp5T4yLaVz3ODxxeUEq6qOH6p3lTa62z%2FgzG%2F%2FTLhHDc4FJyUPcY%2F3CVgu36VlyF5LDgAwlk5UXr7OZY8b%2BibF0SlrkisBg4rtHWfq1X3rFY1gnlqQy3wGFe%2BVFj%2F0n5%2FCXl8cZ0aBqyTno%2FepUagXA3x3lATWTcKJo&X-Amz-Signature=a35e0f52cb37e45ca480ab37134d654362972d791a353e360d8a67c04237982d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB23AQ6U%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDom%2FsKxVZgvt%2BK4b4BWXfXYjbbwIvOdbeVkxaGeJMuFgIgRcWb9%2BTOPXBSdf%2B2hx%2BfOFVJEv4sXloeTvO2e%2B4mUPwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMcBdxI8VNI0xwPQWCrcAzwUpkK8Mo6aIoMWj4ldV2t4JCNIAKAl2QL%2Bggcr8jpmK2xGNODQYDaEYgDgxRAV90LxdmbP6H1oC5BnU8VaaCTdfvVKrEMhLHdytUoI9F3y2Jqz%2BEbQrLTOdmyVjW%2BR1R40joakXHXGuxKICFVSv3f6d1XVdeQcRTK0VLNX2VPj%2FKOtfwd5Rq8K4vK0ubNAsgzo9jziYjsUuNpj5OISxbOaLw8mPhJ8eZFu0J%2FeZh4drclblq0c6Px4sUeX%2B5RQPxDW5T%2FpxEZBsjuOt2qEGYQtEyiu3rd8N97HHmqhZcHtDJdO3fNpQZKLl4hpvulor1vHo4EtXWJcZJSYt8wvMmHQ4Oznpfe9B76SQXa7YY43CzWSsw%2BaZySbksRi%2FlLbFB9OH3zqw7Ow5aGeM8HyJrUPF1867wT%2FZeiSFDcDPYj28VqiKI9f7msNu2PgTyiG38Y3llyd%2BrcFjEVEkJqV4PRsZycSSEmBWmJ8SqUzI49Thb3u6aQXzcqbEFJsieXjrMAp9q6XYkUkJXPkSQfubpYX5LSfRQQtw%2BzuihCaj3evvDWytuqgD%2BG0mEsFLRC1E4pOQNMiFl0hd9d8Pfi%2B1buto6V9N2zKtHbxxnhclgYhmLc%2BCzq56Jq6xTHLMIOH%2FsAGOqUBiv4uT9aHMEndGzBNqtRMX7uALEnMZe4%2FvgMdHsOhY%2Fnvnq58lZfzvJ4HtLp5T4yLaVz3ODxxeUEq6qOH6p3lTa62z%2FgzG%2F%2FTLhHDc4FJyUPcY%2F3CVgu36VlyF5LDgAwlk5UXr7OZY8b%2BibF0SlrkisBg4rtHWfq1X3rFY1gnlqQy3wGFe%2BVFj%2F0n5%2FCXl8cZ0aBqyTno%2FepUagXA3x3lATWTcKJo&X-Amz-Signature=3454218cf05e26f5aa4e0c6da7952041665391a19bc4e87997890b38d0c217df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

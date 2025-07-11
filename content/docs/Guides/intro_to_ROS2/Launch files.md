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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AGNINJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTplr6JG1FjiBCgBXZ8JzUBfcdQC73VloGqKVHnA5qagIgWIhNSxXswyhoP9NQr58fpUCTVp78EExGpVDBxFMbgWwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1yoHaFe74bfq0pRircAw7WXdh7GYPFgZLXPoiGjDkIK%2FvYYGTeQMW2DxkAmG6zL%2BLJYI%2Fk1Xo93If8d9qy%2FjFLIF0fhL4dS0devccXk19%2BwBKo%2FaDYyONSoyrV%2FksCLyUR3dO8kIS5ySZHXHAhei50KYXQbYU7JllkHAhvmauBvJ1DhsOox85QEcQ7kR04SnC7j1vs4AI%2Bm3YlUIB7HBPi7VkjkQxH%2FeSWW9%2BAKQ11SSl3cF50aRL%2B%2BP4Q6%2F%2BUQAryRgJwybh%2B2n3TpkTU524jNZZwySqU%2BK3OsLEQv4AoGlBeeV5N9gU8iTLa2GiMMWyndfF9k87jycDTA7QAw9s0qCyYEswSZGDMnYq2TioGA99HwOEea4tjqQhRuVSqEQ8z%2F3bAFofqQvEpHYoGRqd9xz2Z4BXD1jY2KSJEOXlORCkfJOTyUxz8cRAyUM14b8ElTmsBGi%2Bj9HhSejMcbqSXsleca24o1dZz6iHUgx7jR3ZcWVzkr8C0KqITekkbRGnQpXRtCl2mmPzbW%2FHT1KwRrH6%2FNY5I9pdK1dq%2FA7AK%2BiVbNjNeQ7oc7cLQJvT4tO1xAEAEZlBwCzfpYRwhqTyvKo4kU2JjpEAzsqpXxld7ia%2BcAH1lBc%2Fvn9Pt9FB3tmOW1JiMlA%2Bb8an4MJT9wsMGOqUBZOuas%2BlzywM%2BSfpYp2yPdisOQTqWptcT01dvcoTKwBsFxxKzjgHNjI8BInUS3E4jnzELHDj2gGARIWxEbU3A2Ijx9Pcy12M%2BCBUXFn31w0an63ZraANiQblJeU9VvWjw0f2Meb5W99a4mBmJrB0sg87OpLe%2BcuHiYNM1NB3JQYJ9mByFMq4ente8Bqy0SDH9kPdM%2FpPJQhSzV94STnk%2FH8NfPNwI&X-Amz-Signature=869ba8e3b1a48f222e6df4518ad36188375df40d9b23c8be4649bf165118b2e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AGNINJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTplr6JG1FjiBCgBXZ8JzUBfcdQC73VloGqKVHnA5qagIgWIhNSxXswyhoP9NQr58fpUCTVp78EExGpVDBxFMbgWwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1yoHaFe74bfq0pRircAw7WXdh7GYPFgZLXPoiGjDkIK%2FvYYGTeQMW2DxkAmG6zL%2BLJYI%2Fk1Xo93If8d9qy%2FjFLIF0fhL4dS0devccXk19%2BwBKo%2FaDYyONSoyrV%2FksCLyUR3dO8kIS5ySZHXHAhei50KYXQbYU7JllkHAhvmauBvJ1DhsOox85QEcQ7kR04SnC7j1vs4AI%2Bm3YlUIB7HBPi7VkjkQxH%2FeSWW9%2BAKQ11SSl3cF50aRL%2B%2BP4Q6%2F%2BUQAryRgJwybh%2B2n3TpkTU524jNZZwySqU%2BK3OsLEQv4AoGlBeeV5N9gU8iTLa2GiMMWyndfF9k87jycDTA7QAw9s0qCyYEswSZGDMnYq2TioGA99HwOEea4tjqQhRuVSqEQ8z%2F3bAFofqQvEpHYoGRqd9xz2Z4BXD1jY2KSJEOXlORCkfJOTyUxz8cRAyUM14b8ElTmsBGi%2Bj9HhSejMcbqSXsleca24o1dZz6iHUgx7jR3ZcWVzkr8C0KqITekkbRGnQpXRtCl2mmPzbW%2FHT1KwRrH6%2FNY5I9pdK1dq%2FA7AK%2BiVbNjNeQ7oc7cLQJvT4tO1xAEAEZlBwCzfpYRwhqTyvKo4kU2JjpEAzsqpXxld7ia%2BcAH1lBc%2Fvn9Pt9FB3tmOW1JiMlA%2Bb8an4MJT9wsMGOqUBZOuas%2BlzywM%2BSfpYp2yPdisOQTqWptcT01dvcoTKwBsFxxKzjgHNjI8BInUS3E4jnzELHDj2gGARIWxEbU3A2Ijx9Pcy12M%2BCBUXFn31w0an63ZraANiQblJeU9VvWjw0f2Meb5W99a4mBmJrB0sg87OpLe%2BcuHiYNM1NB3JQYJ9mByFMq4ente8Bqy0SDH9kPdM%2FpPJQhSzV94STnk%2FH8NfPNwI&X-Amz-Signature=cb1b5bc6a24dfe8a6eaa4acba4c3ac84d924f22bdb60435c49c9a89b4527c1d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AGNINJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTplr6JG1FjiBCgBXZ8JzUBfcdQC73VloGqKVHnA5qagIgWIhNSxXswyhoP9NQr58fpUCTVp78EExGpVDBxFMbgWwqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1yoHaFe74bfq0pRircAw7WXdh7GYPFgZLXPoiGjDkIK%2FvYYGTeQMW2DxkAmG6zL%2BLJYI%2Fk1Xo93If8d9qy%2FjFLIF0fhL4dS0devccXk19%2BwBKo%2FaDYyONSoyrV%2FksCLyUR3dO8kIS5ySZHXHAhei50KYXQbYU7JllkHAhvmauBvJ1DhsOox85QEcQ7kR04SnC7j1vs4AI%2Bm3YlUIB7HBPi7VkjkQxH%2FeSWW9%2BAKQ11SSl3cF50aRL%2B%2BP4Q6%2F%2BUQAryRgJwybh%2B2n3TpkTU524jNZZwySqU%2BK3OsLEQv4AoGlBeeV5N9gU8iTLa2GiMMWyndfF9k87jycDTA7QAw9s0qCyYEswSZGDMnYq2TioGA99HwOEea4tjqQhRuVSqEQ8z%2F3bAFofqQvEpHYoGRqd9xz2Z4BXD1jY2KSJEOXlORCkfJOTyUxz8cRAyUM14b8ElTmsBGi%2Bj9HhSejMcbqSXsleca24o1dZz6iHUgx7jR3ZcWVzkr8C0KqITekkbRGnQpXRtCl2mmPzbW%2FHT1KwRrH6%2FNY5I9pdK1dq%2FA7AK%2BiVbNjNeQ7oc7cLQJvT4tO1xAEAEZlBwCzfpYRwhqTyvKo4kU2JjpEAzsqpXxld7ia%2BcAH1lBc%2Fvn9Pt9FB3tmOW1JiMlA%2Bb8an4MJT9wsMGOqUBZOuas%2BlzywM%2BSfpYp2yPdisOQTqWptcT01dvcoTKwBsFxxKzjgHNjI8BInUS3E4jnzELHDj2gGARIWxEbU3A2Ijx9Pcy12M%2BCBUXFn31w0an63ZraANiQblJeU9VvWjw0f2Meb5W99a4mBmJrB0sg87OpLe%2BcuHiYNM1NB3JQYJ9mByFMq4ente8Bqy0SDH9kPdM%2FpPJQhSzV94STnk%2FH8NfPNwI&X-Amz-Signature=aebc34a0ba0c95324f9eae657912548a1157f388caffa86bc0bf4d88b2a0fa96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

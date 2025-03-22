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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFIEUSE%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCU2uek0Jdr6ZkWzChE60OLGijAhojVNmiKdyPe7I2huQIhAMtB2%2FPWMzhFZA8LVbKRFT87j6N4jCEi3caQCWae7RT%2BKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAEpXD3zu%2B9FSP9E4q3APnjO8yX3tBE6fcc%2BtO%2FrwwALC6fsRsqiCXsUmBuArFXIEbHb4v36sQ4%2BMqcWYTg8bRMFmKszie7x6cSUIMcN1hunK5OYRTbkYli2JGlyRagCjMqBCFgEI7R80LikooqBh0Hy8aPUg0GxHJljh0XfaW2ANzbjCm446oqm8sdsCkj24VbrDoMLvVViGozybkKG5AQjkxHmjUsPNSvzLlE%2F%2Fw4SjxDi1fqqsdH7BKtWS%2Bc629lg3tvLTvtiAqVqFCI1rExJ%2BWyK427Zm7aDqFmblB5v6tVcCGz6cb4HdQ1o9dZ9XHzaimT8by%2BPhMkliL6s8YiYZ1mUtlyTVqOEAJptN8TOcrrwZNW656XCbTvR6YnmDIkHgqo2snioh%2BjciCOpu2bdVE1aArE85oTJNDQsEfbMTrtSWeCRKPooAqltXbKCg3gjpWEM7RioTIeT4n0q2aVxD%2BxYYswZDQvOlo4hHl9XjC9q%2BZjdVK5ouvaDvCsIHgQqYYDySQnLz4fzb%2FcqLQjfSS9SMVlBjZ1J35meY6nJ%2FRokDP%2Frm8%2FT31kHGbW8i6yQ1YZS46qwYeC9XhXg4j55UhIimLFy%2FvP711AFfTBdLATw6uP9jay0acfPShiYUkCsaFIQKENr6%2BFDD%2F9fq%2BBjqkAS%2Fwb0nlpLj0GnW8XploBOsXCybOdP1QMGs9RDV7gT9i2jvdnCU4YpGhW0X91wXhbrae%2BJ12aGtydT1tk%2FQULuEr4Ahr0lT3qKlIbY9OirVAIl3NcgL9I30JeIbuetCWXxIUuTtnJxJwh0Xw%2F1LxBYJx8jK7552yfhYe%2FjmnfUh5d5HqmHWEUqdsPCtUD0aXX%2BgDP7XQ68PTSoWHTf5eqybJzqEg&X-Amz-Signature=c1fcf94cd29cc8a0a9b82812f01d2537aa3e644f1bade28c95f9f9085da5c461&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFIEUSE%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCU2uek0Jdr6ZkWzChE60OLGijAhojVNmiKdyPe7I2huQIhAMtB2%2FPWMzhFZA8LVbKRFT87j6N4jCEi3caQCWae7RT%2BKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAEpXD3zu%2B9FSP9E4q3APnjO8yX3tBE6fcc%2BtO%2FrwwALC6fsRsqiCXsUmBuArFXIEbHb4v36sQ4%2BMqcWYTg8bRMFmKszie7x6cSUIMcN1hunK5OYRTbkYli2JGlyRagCjMqBCFgEI7R80LikooqBh0Hy8aPUg0GxHJljh0XfaW2ANzbjCm446oqm8sdsCkj24VbrDoMLvVViGozybkKG5AQjkxHmjUsPNSvzLlE%2F%2Fw4SjxDi1fqqsdH7BKtWS%2Bc629lg3tvLTvtiAqVqFCI1rExJ%2BWyK427Zm7aDqFmblB5v6tVcCGz6cb4HdQ1o9dZ9XHzaimT8by%2BPhMkliL6s8YiYZ1mUtlyTVqOEAJptN8TOcrrwZNW656XCbTvR6YnmDIkHgqo2snioh%2BjciCOpu2bdVE1aArE85oTJNDQsEfbMTrtSWeCRKPooAqltXbKCg3gjpWEM7RioTIeT4n0q2aVxD%2BxYYswZDQvOlo4hHl9XjC9q%2BZjdVK5ouvaDvCsIHgQqYYDySQnLz4fzb%2FcqLQjfSS9SMVlBjZ1J35meY6nJ%2FRokDP%2Frm8%2FT31kHGbW8i6yQ1YZS46qwYeC9XhXg4j55UhIimLFy%2FvP711AFfTBdLATw6uP9jay0acfPShiYUkCsaFIQKENr6%2BFDD%2F9fq%2BBjqkAS%2Fwb0nlpLj0GnW8XploBOsXCybOdP1QMGs9RDV7gT9i2jvdnCU4YpGhW0X91wXhbrae%2BJ12aGtydT1tk%2FQULuEr4Ahr0lT3qKlIbY9OirVAIl3NcgL9I30JeIbuetCWXxIUuTtnJxJwh0Xw%2F1LxBYJx8jK7552yfhYe%2FjmnfUh5d5HqmHWEUqdsPCtUD0aXX%2BgDP7XQ68PTSoWHTf5eqybJzqEg&X-Amz-Signature=0dc61c03352b09c1f99f4f1bd68b793db37d9d28a4070bd2630281a1acbdf231&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFIEUSE%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T140149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCU2uek0Jdr6ZkWzChE60OLGijAhojVNmiKdyPe7I2huQIhAMtB2%2FPWMzhFZA8LVbKRFT87j6N4jCEi3caQCWae7RT%2BKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAEpXD3zu%2B9FSP9E4q3APnjO8yX3tBE6fcc%2BtO%2FrwwALC6fsRsqiCXsUmBuArFXIEbHb4v36sQ4%2BMqcWYTg8bRMFmKszie7x6cSUIMcN1hunK5OYRTbkYli2JGlyRagCjMqBCFgEI7R80LikooqBh0Hy8aPUg0GxHJljh0XfaW2ANzbjCm446oqm8sdsCkj24VbrDoMLvVViGozybkKG5AQjkxHmjUsPNSvzLlE%2F%2Fw4SjxDi1fqqsdH7BKtWS%2Bc629lg3tvLTvtiAqVqFCI1rExJ%2BWyK427Zm7aDqFmblB5v6tVcCGz6cb4HdQ1o9dZ9XHzaimT8by%2BPhMkliL6s8YiYZ1mUtlyTVqOEAJptN8TOcrrwZNW656XCbTvR6YnmDIkHgqo2snioh%2BjciCOpu2bdVE1aArE85oTJNDQsEfbMTrtSWeCRKPooAqltXbKCg3gjpWEM7RioTIeT4n0q2aVxD%2BxYYswZDQvOlo4hHl9XjC9q%2BZjdVK5ouvaDvCsIHgQqYYDySQnLz4fzb%2FcqLQjfSS9SMVlBjZ1J35meY6nJ%2FRokDP%2Frm8%2FT31kHGbW8i6yQ1YZS46qwYeC9XhXg4j55UhIimLFy%2FvP711AFfTBdLATw6uP9jay0acfPShiYUkCsaFIQKENr6%2BFDD%2F9fq%2BBjqkAS%2Fwb0nlpLj0GnW8XploBOsXCybOdP1QMGs9RDV7gT9i2jvdnCU4YpGhW0X91wXhbrae%2BJ12aGtydT1tk%2FQULuEr4Ahr0lT3qKlIbY9OirVAIl3NcgL9I30JeIbuetCWXxIUuTtnJxJwh0Xw%2F1LxBYJx8jK7552yfhYe%2FjmnfUh5d5HqmHWEUqdsPCtUD0aXX%2BgDP7XQ68PTSoWHTf5eqybJzqEg&X-Amz-Signature=91337271001370f41130a6733aa9282b5cf75ab077712feec079b513886b70d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

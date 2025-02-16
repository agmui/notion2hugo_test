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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676WEL24W%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2BUMUThP98kG3Bs0sx1jU5p6v47GGUNrHNoi9F4d78IwIgJDg7hImyBjj%2F2WOk%2B627b9CxhW46pked1JwihSypMGMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFTuIyVa9M2dAlaSXSrcA8wN7POGjlCm1RQzfff7xDlOYBiwHvhtYIHo3bMYgHNHAr%2FL2R5nd5MvNcdaquCkbTyfHEih7OBFDztWIZoHMGkUwOQ79%2FOxIAPe%2BgTKv4PsT0BcGct3BIC52Gvm1WSl%2BjUNhjvq83t43l8%2F9JIJGan0O4kgBwcCqDGVIl3WcWs3FLfmsVdSkagfkk84fT1VLz%2BBrTj8yLSfRSeqql%2BExgobIUiEPmw8bweQzpYU3E%2Bey4VbIOfPe28IpF9jguprAlmWoXpWQ3FCO6lwQf2pkVGqIaGykbEJAPjA6kOlTlL9H%2BgMLYk871jH56JTEEm4gogkI%2BRy2w%2F9D7oux1mWo8pJ910qUmGUr1VMvu7FXVNoiA4Y5qeD%2BZMHuVQi5lT4XsWzVT7Z9RI5iRRvJrY3WuqnDaaCn0n523a3eHMo41ltLEuhGsNAr9GjdLrYqKEihXgrK9GhhMaOI3cj%2Fkt4TkgfTqVD3fo5Oh%2FlLQPsp5rGvsGV847eB1IcuQcgG4wVVrXMpPNLM7IvkO0CiEwCo53D7o%2B0A7zTz1tWPsOES96Eng9mlBuXt4j%2Bk7V79VS1oX0WclkRDJaotu41CsIVIw%2FBP86Xy5TXTZS7ZAc%2BAYgQZ8gfjZKVTqv6rlhUMKv%2Bxb0GOqUBlYVVoCEsomGo3jTm2ZIk69vOhp3k80QjRHQn9AQd0iNUI0VHWaZPULz46hqMECSYF6sz2ANHe7go%2FsIT346Yo75qF1%2FhuIrvk8HHDa57BONXnRX0rAtNZPrCnp15NYfbydOxvul8VE9TYsT%2F9zefm%2FqwudFRrEkFETqLNj49OZkUwsHS2fcb4zkN7ReHQwDWYDF2zxJl3CoEVaGXAF4x0yvNDVUn&X-Amz-Signature=be19fcce882c767dfbd20220438573b7ccbe3f2d033c87474eb6bfe3c147201f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676WEL24W%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2BUMUThP98kG3Bs0sx1jU5p6v47GGUNrHNoi9F4d78IwIgJDg7hImyBjj%2F2WOk%2B627b9CxhW46pked1JwihSypMGMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFTuIyVa9M2dAlaSXSrcA8wN7POGjlCm1RQzfff7xDlOYBiwHvhtYIHo3bMYgHNHAr%2FL2R5nd5MvNcdaquCkbTyfHEih7OBFDztWIZoHMGkUwOQ79%2FOxIAPe%2BgTKv4PsT0BcGct3BIC52Gvm1WSl%2BjUNhjvq83t43l8%2F9JIJGan0O4kgBwcCqDGVIl3WcWs3FLfmsVdSkagfkk84fT1VLz%2BBrTj8yLSfRSeqql%2BExgobIUiEPmw8bweQzpYU3E%2Bey4VbIOfPe28IpF9jguprAlmWoXpWQ3FCO6lwQf2pkVGqIaGykbEJAPjA6kOlTlL9H%2BgMLYk871jH56JTEEm4gogkI%2BRy2w%2F9D7oux1mWo8pJ910qUmGUr1VMvu7FXVNoiA4Y5qeD%2BZMHuVQi5lT4XsWzVT7Z9RI5iRRvJrY3WuqnDaaCn0n523a3eHMo41ltLEuhGsNAr9GjdLrYqKEihXgrK9GhhMaOI3cj%2Fkt4TkgfTqVD3fo5Oh%2FlLQPsp5rGvsGV847eB1IcuQcgG4wVVrXMpPNLM7IvkO0CiEwCo53D7o%2B0A7zTz1tWPsOES96Eng9mlBuXt4j%2Bk7V79VS1oX0WclkRDJaotu41CsIVIw%2FBP86Xy5TXTZS7ZAc%2BAYgQZ8gfjZKVTqv6rlhUMKv%2Bxb0GOqUBlYVVoCEsomGo3jTm2ZIk69vOhp3k80QjRHQn9AQd0iNUI0VHWaZPULz46hqMECSYF6sz2ANHe7go%2FsIT346Yo75qF1%2FhuIrvk8HHDa57BONXnRX0rAtNZPrCnp15NYfbydOxvul8VE9TYsT%2F9zefm%2FqwudFRrEkFETqLNj49OZkUwsHS2fcb4zkN7ReHQwDWYDF2zxJl3CoEVaGXAF4x0yvNDVUn&X-Amz-Signature=179a4f204c930a208b1a74279a92ac14d35bbb0df18efc5ad31a41acfcccc9ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676WEL24W%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T100706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQC%2BUMUThP98kG3Bs0sx1jU5p6v47GGUNrHNoi9F4d78IwIgJDg7hImyBjj%2F2WOk%2B627b9CxhW46pked1JwihSypMGMq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFTuIyVa9M2dAlaSXSrcA8wN7POGjlCm1RQzfff7xDlOYBiwHvhtYIHo3bMYgHNHAr%2FL2R5nd5MvNcdaquCkbTyfHEih7OBFDztWIZoHMGkUwOQ79%2FOxIAPe%2BgTKv4PsT0BcGct3BIC52Gvm1WSl%2BjUNhjvq83t43l8%2F9JIJGan0O4kgBwcCqDGVIl3WcWs3FLfmsVdSkagfkk84fT1VLz%2BBrTj8yLSfRSeqql%2BExgobIUiEPmw8bweQzpYU3E%2Bey4VbIOfPe28IpF9jguprAlmWoXpWQ3FCO6lwQf2pkVGqIaGykbEJAPjA6kOlTlL9H%2BgMLYk871jH56JTEEm4gogkI%2BRy2w%2F9D7oux1mWo8pJ910qUmGUr1VMvu7FXVNoiA4Y5qeD%2BZMHuVQi5lT4XsWzVT7Z9RI5iRRvJrY3WuqnDaaCn0n523a3eHMo41ltLEuhGsNAr9GjdLrYqKEihXgrK9GhhMaOI3cj%2Fkt4TkgfTqVD3fo5Oh%2FlLQPsp5rGvsGV847eB1IcuQcgG4wVVrXMpPNLM7IvkO0CiEwCo53D7o%2B0A7zTz1tWPsOES96Eng9mlBuXt4j%2Bk7V79VS1oX0WclkRDJaotu41CsIVIw%2FBP86Xy5TXTZS7ZAc%2BAYgQZ8gfjZKVTqv6rlhUMKv%2Bxb0GOqUBlYVVoCEsomGo3jTm2ZIk69vOhp3k80QjRHQn9AQd0iNUI0VHWaZPULz46hqMECSYF6sz2ANHe7go%2FsIT346Yo75qF1%2FhuIrvk8HHDa57BONXnRX0rAtNZPrCnp15NYfbydOxvul8VE9TYsT%2F9zefm%2FqwudFRrEkFETqLNj49OZkUwsHS2fcb4zkN7ReHQwDWYDF2zxJl3CoEVaGXAF4x0yvNDVUn&X-Amz-Signature=cf43ff9b21a30c71d7a3ad3f3db1c5e51457676bfeee19e5a67932a1ca516005&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

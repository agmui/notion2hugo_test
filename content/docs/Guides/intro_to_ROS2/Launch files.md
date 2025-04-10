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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQVCAQ3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIQDrVCHIdKGXTktfkZ%2BOqTfUs9Iy%2BGdqKRLnCTO9jMt44AIfH%2B1GddXVtyD33BtqzSInvG%2BmZD%2FNR2cCeL0H1tigySqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8GfSaaNjaEyEQ1kKtwDNFpLk4qHzyxMCBqV3%2Fz6IZhDaBStj8c%2B2fxeKsQ%2BwmrP0I98DPqRlVPpTAqe3gZ8yPcGk5EmtE1vbqPw6t9yZfzLNk6iU5v6jwnQSjhFJ%2BuXPZ62B7cmvbr4ElMOYuJjxynHGW%2BGLauabRpLxmW%2Bvw9t2rLO313oQuWMNTkKl04vHgSNGE8Og4O0QsmdomzOXo4EGdEKZryN5W1VN0%2FkQFdwf2gG3lLGKzvOdwpwakVwbtFk7JTbn%2BUUEzITZ8SqG7NGeKnwLXEuv%2FHbvrmMyhxPK%2Bo9blz3ysfEtEdf2K24i04fRRfHzeWyRQk6owMjtla7CM19kkgR8rsEq2yfAu%2BUO4V5%2FB54%2F3axEFRShXpRQ4MlWeXQsCyOTGZKBqN%2FocTAcwgwy5XEqMBg%2Fo%2BFljc4WtjFPg17xW9lKxXUYuCjT1aj0WTlCcMIN2aD8opsSvcRxnhfvqlUpgtfJFav17gsf5RkhZ%2F4jYe2XkhsVXhfvJpKdN6v9icoG59rRMKY0aC0g9mKaKgDEb3BYRWdKtdi1ZbujwzES0pXCQ7I5bWLyuED1bjYNwsVPrAeIYr1VuufQIzT%2BKzp4M5iB7peDjG%2B9XdyBJkqYoh9cmYkx6yPMi6MM%2F%2BjkWk5BT8w%2BJ%2FfvwY6pgFFZxByDF%2Fg8FWTdyh4rBfi8sbV1SuHWEphRlrzdhABeH1UzA0fqlSJfOIbW6cKV4w%2FIL7BxzDJuPLein2V9FfKXxQI0C%2Bqx4igDDjkSgvA%2B%2FdRoGf4618OWLy7yENqb80fI2H2p4ERF8c1xuDkIR3acmRT%2BDb7X68gU8YNyLAaolEFkKyQicLMhx%2BINUS6TDRxwExv85quU%2Ff9swfXpTb0vw89LOF%2B&X-Amz-Signature=a610fb7f871c4ef6741f720b68f540a1d5fe46fdab9d5ed26ddf5bed0da393b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQVCAQ3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIQDrVCHIdKGXTktfkZ%2BOqTfUs9Iy%2BGdqKRLnCTO9jMt44AIfH%2B1GddXVtyD33BtqzSInvG%2BmZD%2FNR2cCeL0H1tigySqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8GfSaaNjaEyEQ1kKtwDNFpLk4qHzyxMCBqV3%2Fz6IZhDaBStj8c%2B2fxeKsQ%2BwmrP0I98DPqRlVPpTAqe3gZ8yPcGk5EmtE1vbqPw6t9yZfzLNk6iU5v6jwnQSjhFJ%2BuXPZ62B7cmvbr4ElMOYuJjxynHGW%2BGLauabRpLxmW%2Bvw9t2rLO313oQuWMNTkKl04vHgSNGE8Og4O0QsmdomzOXo4EGdEKZryN5W1VN0%2FkQFdwf2gG3lLGKzvOdwpwakVwbtFk7JTbn%2BUUEzITZ8SqG7NGeKnwLXEuv%2FHbvrmMyhxPK%2Bo9blz3ysfEtEdf2K24i04fRRfHzeWyRQk6owMjtla7CM19kkgR8rsEq2yfAu%2BUO4V5%2FB54%2F3axEFRShXpRQ4MlWeXQsCyOTGZKBqN%2FocTAcwgwy5XEqMBg%2Fo%2BFljc4WtjFPg17xW9lKxXUYuCjT1aj0WTlCcMIN2aD8opsSvcRxnhfvqlUpgtfJFav17gsf5RkhZ%2F4jYe2XkhsVXhfvJpKdN6v9icoG59rRMKY0aC0g9mKaKgDEb3BYRWdKtdi1ZbujwzES0pXCQ7I5bWLyuED1bjYNwsVPrAeIYr1VuufQIzT%2BKzp4M5iB7peDjG%2B9XdyBJkqYoh9cmYkx6yPMi6MM%2F%2BjkWk5BT8w%2BJ%2FfvwY6pgFFZxByDF%2Fg8FWTdyh4rBfi8sbV1SuHWEphRlrzdhABeH1UzA0fqlSJfOIbW6cKV4w%2FIL7BxzDJuPLein2V9FfKXxQI0C%2Bqx4igDDjkSgvA%2B%2FdRoGf4618OWLy7yENqb80fI2H2p4ERF8c1xuDkIR3acmRT%2BDb7X68gU8YNyLAaolEFkKyQicLMhx%2BINUS6TDRxwExv85quU%2Ff9swfXpTb0vw89LOF%2B&X-Amz-Signature=bf7d9125652ed897eba85aabfe94af930c515769c1ca31b083b1a478bd25bb9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSQVCAQ3%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T140847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIQDrVCHIdKGXTktfkZ%2BOqTfUs9Iy%2BGdqKRLnCTO9jMt44AIfH%2B1GddXVtyD33BtqzSInvG%2BmZD%2FNR2cCeL0H1tigySqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMh8GfSaaNjaEyEQ1kKtwDNFpLk4qHzyxMCBqV3%2Fz6IZhDaBStj8c%2B2fxeKsQ%2BwmrP0I98DPqRlVPpTAqe3gZ8yPcGk5EmtE1vbqPw6t9yZfzLNk6iU5v6jwnQSjhFJ%2BuXPZ62B7cmvbr4ElMOYuJjxynHGW%2BGLauabRpLxmW%2Bvw9t2rLO313oQuWMNTkKl04vHgSNGE8Og4O0QsmdomzOXo4EGdEKZryN5W1VN0%2FkQFdwf2gG3lLGKzvOdwpwakVwbtFk7JTbn%2BUUEzITZ8SqG7NGeKnwLXEuv%2FHbvrmMyhxPK%2Bo9blz3ysfEtEdf2K24i04fRRfHzeWyRQk6owMjtla7CM19kkgR8rsEq2yfAu%2BUO4V5%2FB54%2F3axEFRShXpRQ4MlWeXQsCyOTGZKBqN%2FocTAcwgwy5XEqMBg%2Fo%2BFljc4WtjFPg17xW9lKxXUYuCjT1aj0WTlCcMIN2aD8opsSvcRxnhfvqlUpgtfJFav17gsf5RkhZ%2F4jYe2XkhsVXhfvJpKdN6v9icoG59rRMKY0aC0g9mKaKgDEb3BYRWdKtdi1ZbujwzES0pXCQ7I5bWLyuED1bjYNwsVPrAeIYr1VuufQIzT%2BKzp4M5iB7peDjG%2B9XdyBJkqYoh9cmYkx6yPMi6MM%2F%2BjkWk5BT8w%2BJ%2FfvwY6pgFFZxByDF%2Fg8FWTdyh4rBfi8sbV1SuHWEphRlrzdhABeH1UzA0fqlSJfOIbW6cKV4w%2FIL7BxzDJuPLein2V9FfKXxQI0C%2Bqx4igDDjkSgvA%2B%2FdRoGf4618OWLy7yENqb80fI2H2p4ERF8c1xuDkIR3acmRT%2BDb7X68gU8YNyLAaolEFkKyQicLMhx%2BINUS6TDRxwExv85quU%2Ff9swfXpTb0vw89LOF%2B&X-Amz-Signature=4a86282828ba7e47413fe1f6e4f42acc624e08aced678ad9670ee6b81b56494c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

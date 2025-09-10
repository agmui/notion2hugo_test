---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCOEQDT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIC3J%2FqG%2BiIWZpb%2FwLvwIZAj4afDwZasA9t1u5i9JRfaWAiBq7rihiqFbusr%2Byosu5q%2FXLKYImPuUO0fqyxr%2Fp65jhiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQusmWKPHYwMSEfaEKtwDeg2pQwUDCH0T5eZ3y9%2B6%2FAyL%2FqfSNuHBhjUSAX%2BEApBlknq1o0DuvjJY2oF7FabaxxmaHUqiw7oyteAo2gWJUKE61mnYNhFbAeoA6%2BGwStJ%2F864%2FH4B6HNl7tJIdCFxhhJ%2Fe5hdFbiWs3laRFaqc34lQGIh4vRjABgkjXwGzFF%2BdSGMPwfwZH6MQhe6z%2F90IW%2F8VoIdom5Sc93mkIc6KqxPjrUgk6Ot3sNJ%2BqS5qs7f6zLR2VyygTYTexN%2BXlVDkzDz8xKNE8qLjbrs3uE%2FguLudmxfZFdk3kCRl1uy6sKD9E0Av3bcJrgfIH8nIQsV8L5GdGifmsXc1gPrWvhtJ2TgEhWRaXaGObHz2RywabVN9Dv4fEGZ4ezm6IAnwob%2F9DoxfTaAMi4cp%2Bm5zlk7aAZWvcI3gr8M2UWRcg%2F1SOFX7zUmuHllgAZo%2FCdq0jkcnVIPP779G0Q%2FphYL697ajJ1x8rKevAssKgwmRy7Ub3sSsdamspIjQUjnYsh2wmHxgZU9PNvuMLSlScwtCYwS7xdZo%2F37uBUGoxdIWJoxdbOipQYASm6HExK6wTrHvsFXadmX8ajgNvVJb8HrjnYzZ4zx82fQ3IcO6wqEvtmGlfjpy5cNq95QcRc3IX%2Bkw1YuDxgY6pgFbcOv%2BS6YYKPh4tQyTZRC1bEPwDqirAGT2hoe8LXXIJ5j4UkajuRzkBY6y3jd87GJXUw%2B5v3%2B146O4ROPI596Iw1PkWoG6AOpnryL7Q7fJU4ty5iUZ1lvZJJw04veyWEp8mtfT1%2BdECOeWaU1FBmYSofhYDO3YeJAoT%2BsJ2dkFLS72PlbbJgxfr5XgHkwMcx%2F1ek%2Bn8xs1Zk8UbEwZoxx2%2FcY2MoNV&X-Amz-Signature=8935c676163ada2db48a7dfff3d15d91944a171da568d4cf7c55545479a6e314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCOEQDT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIC3J%2FqG%2BiIWZpb%2FwLvwIZAj4afDwZasA9t1u5i9JRfaWAiBq7rihiqFbusr%2Byosu5q%2FXLKYImPuUO0fqyxr%2Fp65jhiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQusmWKPHYwMSEfaEKtwDeg2pQwUDCH0T5eZ3y9%2B6%2FAyL%2FqfSNuHBhjUSAX%2BEApBlknq1o0DuvjJY2oF7FabaxxmaHUqiw7oyteAo2gWJUKE61mnYNhFbAeoA6%2BGwStJ%2F864%2FH4B6HNl7tJIdCFxhhJ%2Fe5hdFbiWs3laRFaqc34lQGIh4vRjABgkjXwGzFF%2BdSGMPwfwZH6MQhe6z%2F90IW%2F8VoIdom5Sc93mkIc6KqxPjrUgk6Ot3sNJ%2BqS5qs7f6zLR2VyygTYTexN%2BXlVDkzDz8xKNE8qLjbrs3uE%2FguLudmxfZFdk3kCRl1uy6sKD9E0Av3bcJrgfIH8nIQsV8L5GdGifmsXc1gPrWvhtJ2TgEhWRaXaGObHz2RywabVN9Dv4fEGZ4ezm6IAnwob%2F9DoxfTaAMi4cp%2Bm5zlk7aAZWvcI3gr8M2UWRcg%2F1SOFX7zUmuHllgAZo%2FCdq0jkcnVIPP779G0Q%2FphYL697ajJ1x8rKevAssKgwmRy7Ub3sSsdamspIjQUjnYsh2wmHxgZU9PNvuMLSlScwtCYwS7xdZo%2F37uBUGoxdIWJoxdbOipQYASm6HExK6wTrHvsFXadmX8ajgNvVJb8HrjnYzZ4zx82fQ3IcO6wqEvtmGlfjpy5cNq95QcRc3IX%2Bkw1YuDxgY6pgFbcOv%2BS6YYKPh4tQyTZRC1bEPwDqirAGT2hoe8LXXIJ5j4UkajuRzkBY6y3jd87GJXUw%2B5v3%2B146O4ROPI596Iw1PkWoG6AOpnryL7Q7fJU4ty5iUZ1lvZJJw04veyWEp8mtfT1%2BdECOeWaU1FBmYSofhYDO3YeJAoT%2BsJ2dkFLS72PlbbJgxfr5XgHkwMcx%2F1ek%2Bn8xs1Zk8UbEwZoxx2%2FcY2MoNV&X-Amz-Signature=d9975dcb52cf7c05913434edebfaef47ad9d9b8c461aca8b6e1af5a3dd2442e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCOEQDT%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIC3J%2FqG%2BiIWZpb%2FwLvwIZAj4afDwZasA9t1u5i9JRfaWAiBq7rihiqFbusr%2Byosu5q%2FXLKYImPuUO0fqyxr%2Fp65jhiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQusmWKPHYwMSEfaEKtwDeg2pQwUDCH0T5eZ3y9%2B6%2FAyL%2FqfSNuHBhjUSAX%2BEApBlknq1o0DuvjJY2oF7FabaxxmaHUqiw7oyteAo2gWJUKE61mnYNhFbAeoA6%2BGwStJ%2F864%2FH4B6HNl7tJIdCFxhhJ%2Fe5hdFbiWs3laRFaqc34lQGIh4vRjABgkjXwGzFF%2BdSGMPwfwZH6MQhe6z%2F90IW%2F8VoIdom5Sc93mkIc6KqxPjrUgk6Ot3sNJ%2BqS5qs7f6zLR2VyygTYTexN%2BXlVDkzDz8xKNE8qLjbrs3uE%2FguLudmxfZFdk3kCRl1uy6sKD9E0Av3bcJrgfIH8nIQsV8L5GdGifmsXc1gPrWvhtJ2TgEhWRaXaGObHz2RywabVN9Dv4fEGZ4ezm6IAnwob%2F9DoxfTaAMi4cp%2Bm5zlk7aAZWvcI3gr8M2UWRcg%2F1SOFX7zUmuHllgAZo%2FCdq0jkcnVIPP779G0Q%2FphYL697ajJ1x8rKevAssKgwmRy7Ub3sSsdamspIjQUjnYsh2wmHxgZU9PNvuMLSlScwtCYwS7xdZo%2F37uBUGoxdIWJoxdbOipQYASm6HExK6wTrHvsFXadmX8ajgNvVJb8HrjnYzZ4zx82fQ3IcO6wqEvtmGlfjpy5cNq95QcRc3IX%2Bkw1YuDxgY6pgFbcOv%2BS6YYKPh4tQyTZRC1bEPwDqirAGT2hoe8LXXIJ5j4UkajuRzkBY6y3jd87GJXUw%2B5v3%2B146O4ROPI596Iw1PkWoG6AOpnryL7Q7fJU4ty5iUZ1lvZJJw04veyWEp8mtfT1%2BdECOeWaU1FBmYSofhYDO3YeJAoT%2BsJ2dkFLS72PlbbJgxfr5XgHkwMcx%2F1ek%2Bn8xs1Zk8UbEwZoxx2%2FcY2MoNV&X-Amz-Signature=45f32eab215c0549dcb6a5b60f1d72a1fdadfad61b7bc64f56e0ff2174a92509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

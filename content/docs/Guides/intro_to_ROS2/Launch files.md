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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6SXORB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtIMlB8eKzp9v5NG3jdYTDGLXcOtSI9sNsd96gJe5ttAiEA%2BBX0YHyUmiQcViE9CQD6bt6CCjk9E%2BmJviSjyxDGbE4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzADdg95z7iX18IqircAwKYTSF5t6zFOZEOncSdimFCXYnFu1ogJMI9ctvcLPvOENFrQ%2Bc0z5CoisI1Sjh3QqZB6hPi0kzxzHtgDm774uXsmbLbpSElG3YtFrUcFLKfWLwAvma96ZW4jlWJSvl9cJMOal%2FKLWUKPj1D3bDw%2FbWGX7L%2Bb0wmLiKzlYJrqV27X3pgiWQlKDQ6BW%2BXvBrPMFgf0LsnVK3vYlN8LIpo8Mg2gGcSs3xjsDVHCf23PVFaQxyRqWArOXNTWpHNTWBfCrXVriqO5RiMxnyC7OnawF9JTHmCkDk6dx2X8TOfDHTDq%2Bf1slBmInS%2BWi5nmjXA5%2FNMDYaz4e9kw4K7%2BxCqnwvvIFUH9gy3YWFzaucCzN0x%2FWvJ1TdnXcyo5sFj7TMEAbrq3Kqv2hyPOQ6A3qijpQ1rh5RhXOzYjMp5x7qELlBlEcGsQcNp7ccoDNYqxFcbg4YF5ryuDJynuEkXibSJJos1S1d6Vnb1YeO70XOjjoFV0ZeDt2NY%2BEq8f1Es3EHgiTCddDfgQyvKlAZCS5Y4y3xJM5mkAaecIT7Gc5D89itb4Y0C6XSmaRz7yqhfQy2CpKXnN6N4S4VZ%2BnvUSp1QtlA%2F%2BJC7IsJ4Kbd9ssAEz%2FZmOyS5QFgSL0ZMpqr9MJ3F7MMGOqUBOAWn3ocwzZO79fZp73FPMblktujlRO%2BKdiBiRtQt4Y3hzp%2BXuzksN1Zs94UhZ%2BhEcAAKswFdW%2Bzzj2oHEpv10e%2Bka1e1sAaixSV4BCmzApSwHOEtWKxrdJ4jXl76ADD%2FSwS1kjq%2FJ%2F%2FeTfVxGXPxAdrpe%2BsAKEqoEZD%2BqPGLoyNsEAWhE9w1tIeQGff6dhBVRBVA%2BGEo52fUJMOT1gREqhybUEZ0&X-Amz-Signature=b2754426ad8a566c923f615a939937b61f50794360ec520d4023226cb091b93c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6SXORB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtIMlB8eKzp9v5NG3jdYTDGLXcOtSI9sNsd96gJe5ttAiEA%2BBX0YHyUmiQcViE9CQD6bt6CCjk9E%2BmJviSjyxDGbE4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzADdg95z7iX18IqircAwKYTSF5t6zFOZEOncSdimFCXYnFu1ogJMI9ctvcLPvOENFrQ%2Bc0z5CoisI1Sjh3QqZB6hPi0kzxzHtgDm774uXsmbLbpSElG3YtFrUcFLKfWLwAvma96ZW4jlWJSvl9cJMOal%2FKLWUKPj1D3bDw%2FbWGX7L%2Bb0wmLiKzlYJrqV27X3pgiWQlKDQ6BW%2BXvBrPMFgf0LsnVK3vYlN8LIpo8Mg2gGcSs3xjsDVHCf23PVFaQxyRqWArOXNTWpHNTWBfCrXVriqO5RiMxnyC7OnawF9JTHmCkDk6dx2X8TOfDHTDq%2Bf1slBmInS%2BWi5nmjXA5%2FNMDYaz4e9kw4K7%2BxCqnwvvIFUH9gy3YWFzaucCzN0x%2FWvJ1TdnXcyo5sFj7TMEAbrq3Kqv2hyPOQ6A3qijpQ1rh5RhXOzYjMp5x7qELlBlEcGsQcNp7ccoDNYqxFcbg4YF5ryuDJynuEkXibSJJos1S1d6Vnb1YeO70XOjjoFV0ZeDt2NY%2BEq8f1Es3EHgiTCddDfgQyvKlAZCS5Y4y3xJM5mkAaecIT7Gc5D89itb4Y0C6XSmaRz7yqhfQy2CpKXnN6N4S4VZ%2BnvUSp1QtlA%2F%2BJC7IsJ4Kbd9ssAEz%2FZmOyS5QFgSL0ZMpqr9MJ3F7MMGOqUBOAWn3ocwzZO79fZp73FPMblktujlRO%2BKdiBiRtQt4Y3hzp%2BXuzksN1Zs94UhZ%2BhEcAAKswFdW%2Bzzj2oHEpv10e%2Bka1e1sAaixSV4BCmzApSwHOEtWKxrdJ4jXl76ADD%2FSwS1kjq%2FJ%2F%2FeTfVxGXPxAdrpe%2BsAKEqoEZD%2BqPGLoyNsEAWhE9w1tIeQGff6dhBVRBVA%2BGEo52fUJMOT1gREqhybUEZ0&X-Amz-Signature=a9cf752e6f3c2a855f20cfc1f84d6dcb22a814706eff0fc25eee9326bda1265e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U6SXORB%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtIMlB8eKzp9v5NG3jdYTDGLXcOtSI9sNsd96gJe5ttAiEA%2BBX0YHyUmiQcViE9CQD6bt6CCjk9E%2BmJviSjyxDGbE4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzADdg95z7iX18IqircAwKYTSF5t6zFOZEOncSdimFCXYnFu1ogJMI9ctvcLPvOENFrQ%2Bc0z5CoisI1Sjh3QqZB6hPi0kzxzHtgDm774uXsmbLbpSElG3YtFrUcFLKfWLwAvma96ZW4jlWJSvl9cJMOal%2FKLWUKPj1D3bDw%2FbWGX7L%2Bb0wmLiKzlYJrqV27X3pgiWQlKDQ6BW%2BXvBrPMFgf0LsnVK3vYlN8LIpo8Mg2gGcSs3xjsDVHCf23PVFaQxyRqWArOXNTWpHNTWBfCrXVriqO5RiMxnyC7OnawF9JTHmCkDk6dx2X8TOfDHTDq%2Bf1slBmInS%2BWi5nmjXA5%2FNMDYaz4e9kw4K7%2BxCqnwvvIFUH9gy3YWFzaucCzN0x%2FWvJ1TdnXcyo5sFj7TMEAbrq3Kqv2hyPOQ6A3qijpQ1rh5RhXOzYjMp5x7qELlBlEcGsQcNp7ccoDNYqxFcbg4YF5ryuDJynuEkXibSJJos1S1d6Vnb1YeO70XOjjoFV0ZeDt2NY%2BEq8f1Es3EHgiTCddDfgQyvKlAZCS5Y4y3xJM5mkAaecIT7Gc5D89itb4Y0C6XSmaRz7yqhfQy2CpKXnN6N4S4VZ%2BnvUSp1QtlA%2F%2BJC7IsJ4Kbd9ssAEz%2FZmOyS5QFgSL0ZMpqr9MJ3F7MMGOqUBOAWn3ocwzZO79fZp73FPMblktujlRO%2BKdiBiRtQt4Y3hzp%2BXuzksN1Zs94UhZ%2BhEcAAKswFdW%2Bzzj2oHEpv10e%2Bka1e1sAaixSV4BCmzApSwHOEtWKxrdJ4jXl76ADD%2FSwS1kjq%2FJ%2F%2FeTfVxGXPxAdrpe%2BsAKEqoEZD%2BqPGLoyNsEAWhE9w1tIeQGff6dhBVRBVA%2BGEo52fUJMOT1gREqhybUEZ0&X-Amz-Signature=42e0a269821c0a430b9120596cc04203ab579a3e478d457b2ce16b78704b5694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

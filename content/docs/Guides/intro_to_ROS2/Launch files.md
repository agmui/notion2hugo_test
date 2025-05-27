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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUZC26XT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF4AVQmy3gGekNi5QzdEFzrHjrrVUGjeBVANwNWy7WpAiEAwktt0VN32lYpe7kv4rpfl1W3Da8hY0wDbYxyPfsFL2sq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDO3%2BHPbHDx2bXlWPcSrcA2R6h00OpgXl8mwPqTQitOIF6GqLKlIUwUSXNCmzaTHrHHSWv4IAcmqJcVn9lmLfo21VFnksemqMCBCJxNHNsgjZ2hQWrMc3YinKsWGiqJNQIcXOfAT%2Bwel%2FX317E9I8k2MUr8uIkrHa4DPaueiw7aBLkT4LTWNWYNRb8HNOna2ETvbIv41qGyU0GC9H4GKFcksGPAWgAQb5MzRQThNka03QqRMxc%2FUlmhznFjh5czntlUxXz7wHyEpEZrOBfJEV7FZmj3XKOScLY6Oksppa44Uioij7sQ68xlPQisFPixa350h94QMQjOQTyr8WC3S9QawKqmr0Qfkpqm06pnNU1YIDHphgpUvGr5tBZCV3kx67DYD5gYWzmI92GA9NzYiJi%2FAzvx2NH7HNpJSh1fBCM%2B3KUB9tL%2FP308TgYsMOpycMp9CB%2FeO7glU3Nx4pfQHOWUl1fmbcYyU5rM8SkiMVs0TvTcl59LxJzbZJ8RZU9UJNoXm3217o2z%2Fw3GUW%2F6U0QyI%2FefhxLWaB3CkB1FHNKsW7z99sGRSWufCZRckFUeetiF%2FLbRzqUKsFWWLKAKXNznv%2Bep91gjhlKci3Q7sozfcCIEtmBvzaNw6PPKfJc7bv%2B1JzQb7hIN9CzwTlMKCQ1cEGOqUBXwKCFK2qf5zFxwpTQX35m1hPHkv34If9us4ZORTGavmb7IDotRZ6Ivmk6BnHAiGdPxDkuToOF5kFTho73QAwWfC31zcufLEw1y1IPjF5W7Qejh%2BISQnpv6wgTW2J9DhuvtcFHRF1m6TT%2BQRxIohDYJmxSnaNYYQU3ISmKeXzX5XxzZaT9L%2F05SVeTZDFradv7lS34IQM1xbtLKAcURhDeznfjaas&X-Amz-Signature=6220513de5614d760a1d8bd3dd070c3ae9703e3fe05bb771cce058684c0cf1ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUZC26XT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF4AVQmy3gGekNi5QzdEFzrHjrrVUGjeBVANwNWy7WpAiEAwktt0VN32lYpe7kv4rpfl1W3Da8hY0wDbYxyPfsFL2sq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDO3%2BHPbHDx2bXlWPcSrcA2R6h00OpgXl8mwPqTQitOIF6GqLKlIUwUSXNCmzaTHrHHSWv4IAcmqJcVn9lmLfo21VFnksemqMCBCJxNHNsgjZ2hQWrMc3YinKsWGiqJNQIcXOfAT%2Bwel%2FX317E9I8k2MUr8uIkrHa4DPaueiw7aBLkT4LTWNWYNRb8HNOna2ETvbIv41qGyU0GC9H4GKFcksGPAWgAQb5MzRQThNka03QqRMxc%2FUlmhznFjh5czntlUxXz7wHyEpEZrOBfJEV7FZmj3XKOScLY6Oksppa44Uioij7sQ68xlPQisFPixa350h94QMQjOQTyr8WC3S9QawKqmr0Qfkpqm06pnNU1YIDHphgpUvGr5tBZCV3kx67DYD5gYWzmI92GA9NzYiJi%2FAzvx2NH7HNpJSh1fBCM%2B3KUB9tL%2FP308TgYsMOpycMp9CB%2FeO7glU3Nx4pfQHOWUl1fmbcYyU5rM8SkiMVs0TvTcl59LxJzbZJ8RZU9UJNoXm3217o2z%2Fw3GUW%2F6U0QyI%2FefhxLWaB3CkB1FHNKsW7z99sGRSWufCZRckFUeetiF%2FLbRzqUKsFWWLKAKXNznv%2Bep91gjhlKci3Q7sozfcCIEtmBvzaNw6PPKfJc7bv%2B1JzQb7hIN9CzwTlMKCQ1cEGOqUBXwKCFK2qf5zFxwpTQX35m1hPHkv34If9us4ZORTGavmb7IDotRZ6Ivmk6BnHAiGdPxDkuToOF5kFTho73QAwWfC31zcufLEw1y1IPjF5W7Qejh%2BISQnpv6wgTW2J9DhuvtcFHRF1m6TT%2BQRxIohDYJmxSnaNYYQU3ISmKeXzX5XxzZaT9L%2F05SVeTZDFradv7lS34IQM1xbtLKAcURhDeznfjaas&X-Amz-Signature=65895de9afbb038f673dd3b9904dd0e368efee22e258cfb7aeb0324fbfe8748f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUZC26XT%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T061256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF4AVQmy3gGekNi5QzdEFzrHjrrVUGjeBVANwNWy7WpAiEAwktt0VN32lYpe7kv4rpfl1W3Da8hY0wDbYxyPfsFL2sq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDO3%2BHPbHDx2bXlWPcSrcA2R6h00OpgXl8mwPqTQitOIF6GqLKlIUwUSXNCmzaTHrHHSWv4IAcmqJcVn9lmLfo21VFnksemqMCBCJxNHNsgjZ2hQWrMc3YinKsWGiqJNQIcXOfAT%2Bwel%2FX317E9I8k2MUr8uIkrHa4DPaueiw7aBLkT4LTWNWYNRb8HNOna2ETvbIv41qGyU0GC9H4GKFcksGPAWgAQb5MzRQThNka03QqRMxc%2FUlmhznFjh5czntlUxXz7wHyEpEZrOBfJEV7FZmj3XKOScLY6Oksppa44Uioij7sQ68xlPQisFPixa350h94QMQjOQTyr8WC3S9QawKqmr0Qfkpqm06pnNU1YIDHphgpUvGr5tBZCV3kx67DYD5gYWzmI92GA9NzYiJi%2FAzvx2NH7HNpJSh1fBCM%2B3KUB9tL%2FP308TgYsMOpycMp9CB%2FeO7glU3Nx4pfQHOWUl1fmbcYyU5rM8SkiMVs0TvTcl59LxJzbZJ8RZU9UJNoXm3217o2z%2Fw3GUW%2F6U0QyI%2FefhxLWaB3CkB1FHNKsW7z99sGRSWufCZRckFUeetiF%2FLbRzqUKsFWWLKAKXNznv%2Bep91gjhlKci3Q7sozfcCIEtmBvzaNw6PPKfJc7bv%2B1JzQb7hIN9CzwTlMKCQ1cEGOqUBXwKCFK2qf5zFxwpTQX35m1hPHkv34If9us4ZORTGavmb7IDotRZ6Ivmk6BnHAiGdPxDkuToOF5kFTho73QAwWfC31zcufLEw1y1IPjF5W7Qejh%2BISQnpv6wgTW2J9DhuvtcFHRF1m6TT%2BQRxIohDYJmxSnaNYYQU3ISmKeXzX5XxzZaT9L%2F05SVeTZDFradv7lS34IQM1xbtLKAcURhDeznfjaas&X-Amz-Signature=9b655646d4d538bb945993f05c54aed0256f09f1184f7b8503b7df61b85aa0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTO7OELT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDr%2FjFrjtF%2Fa42UuSsKCdVsOqQT%2FxiYdXIMRxYq9015GwIgFlSI5Yh%2BY124skE0S9VQgA59eTJDeyAlYhC7871sLjYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDJhKuBFRpAMYl%2BS4TCrcAy%2BsAPqX%2B2DqHxvYYEymT1UWlN8mU4wwQCsypCGS9CObQVR%2B02kcncjCXUzVtyoGmjEneZXYwSTqRdfjuCO2x0qvrodsM23ajMJmpLQoMzWDwDSrqWvoSo3OejN%2F8rlCeuXN7OjPNNO9ozdYrHXfqLqzrQohnXKZY7wQCNcMiCv%2BcuZBfNLIlYpMF19QVuA9x13JMjFRV5I4jvBTPVoDi94GbRyl4d4lng%2BjcVT05i8sIZQbS%2B5dqD8sDBbhoNelsZ93rL8KH2GSYggGg5f7YfzHWACvXQYNuzHuVbH%2BkH2tZ3eCFpJCmUAz8byfuW6Kmx54FK1B8HajLZZ%2BtoFlkEugVz22peLAkwQFAGydF9zpkfzugQa%2BA5Mr2yQNAOCfTBIPbcvxQOCbsxsu8lFBOLCRp2MTXikXX4%2FjyH4M%2BOPjXgBVMhqf4fenvG9WFlOlE1xOQ9CdCdIejoDHiQsWjzs9d0su6gHZNXf%2FOt3gxD3XsPfzCqNbq9uqjHVVqmQjbg2wv54CcCPQ6qgZed%2FwCj%2BgpUjBHFg6WZTXwLP0TYosg2FFguwL41kUWR3JFec%2BcUWglC%2FcmNR7SdJJHiDuISifschnRL8nIgIVN6v8ZII7LMLuf2F61VYGaAbzMPuFq8MGOqUBbFbNITXd3C7yzBoM2Je7hpaUz26pq%2B3sSpIz%2FjLy9ID%2BR0pwBTiTcP7txzHxUzgVtBPBvlL6lRxEh%2BYYBpSijZz6VUzUkjbIHiZgmwo96Ssunc4fHUZ8XuKDDjus%2BndmvaaotxjAO1mHi31po120Tupa5NllGi8GzZA6ZxMHhqJ5dihxULyZ8iM54bzOTvdzj6kRW6X9qxAFgllOZikXEvahFprd&X-Amz-Signature=b5877441ead94c0ba77e3fafc8e2871a6a4d893bdf94014841b7ecf2f738f678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTO7OELT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDr%2FjFrjtF%2Fa42UuSsKCdVsOqQT%2FxiYdXIMRxYq9015GwIgFlSI5Yh%2BY124skE0S9VQgA59eTJDeyAlYhC7871sLjYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDJhKuBFRpAMYl%2BS4TCrcAy%2BsAPqX%2B2DqHxvYYEymT1UWlN8mU4wwQCsypCGS9CObQVR%2B02kcncjCXUzVtyoGmjEneZXYwSTqRdfjuCO2x0qvrodsM23ajMJmpLQoMzWDwDSrqWvoSo3OejN%2F8rlCeuXN7OjPNNO9ozdYrHXfqLqzrQohnXKZY7wQCNcMiCv%2BcuZBfNLIlYpMF19QVuA9x13JMjFRV5I4jvBTPVoDi94GbRyl4d4lng%2BjcVT05i8sIZQbS%2B5dqD8sDBbhoNelsZ93rL8KH2GSYggGg5f7YfzHWACvXQYNuzHuVbH%2BkH2tZ3eCFpJCmUAz8byfuW6Kmx54FK1B8HajLZZ%2BtoFlkEugVz22peLAkwQFAGydF9zpkfzugQa%2BA5Mr2yQNAOCfTBIPbcvxQOCbsxsu8lFBOLCRp2MTXikXX4%2FjyH4M%2BOPjXgBVMhqf4fenvG9WFlOlE1xOQ9CdCdIejoDHiQsWjzs9d0su6gHZNXf%2FOt3gxD3XsPfzCqNbq9uqjHVVqmQjbg2wv54CcCPQ6qgZed%2FwCj%2BgpUjBHFg6WZTXwLP0TYosg2FFguwL41kUWR3JFec%2BcUWglC%2FcmNR7SdJJHiDuISifschnRL8nIgIVN6v8ZII7LMLuf2F61VYGaAbzMPuFq8MGOqUBbFbNITXd3C7yzBoM2Je7hpaUz26pq%2B3sSpIz%2FjLy9ID%2BR0pwBTiTcP7txzHxUzgVtBPBvlL6lRxEh%2BYYBpSijZz6VUzUkjbIHiZgmwo96Ssunc4fHUZ8XuKDDjus%2BndmvaaotxjAO1mHi31po120Tupa5NllGi8GzZA6ZxMHhqJ5dihxULyZ8iM54bzOTvdzj6kRW6X9qxAFgllOZikXEvahFprd&X-Amz-Signature=7b60d4f8bc000f363949c84a1077f9b4d54125ae595919b1774ceb954d6d0b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTO7OELT%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQDr%2FjFrjtF%2Fa42UuSsKCdVsOqQT%2FxiYdXIMRxYq9015GwIgFlSI5Yh%2BY124skE0S9VQgA59eTJDeyAlYhC7871sLjYq%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDJhKuBFRpAMYl%2BS4TCrcAy%2BsAPqX%2B2DqHxvYYEymT1UWlN8mU4wwQCsypCGS9CObQVR%2B02kcncjCXUzVtyoGmjEneZXYwSTqRdfjuCO2x0qvrodsM23ajMJmpLQoMzWDwDSrqWvoSo3OejN%2F8rlCeuXN7OjPNNO9ozdYrHXfqLqzrQohnXKZY7wQCNcMiCv%2BcuZBfNLIlYpMF19QVuA9x13JMjFRV5I4jvBTPVoDi94GbRyl4d4lng%2BjcVT05i8sIZQbS%2B5dqD8sDBbhoNelsZ93rL8KH2GSYggGg5f7YfzHWACvXQYNuzHuVbH%2BkH2tZ3eCFpJCmUAz8byfuW6Kmx54FK1B8HajLZZ%2BtoFlkEugVz22peLAkwQFAGydF9zpkfzugQa%2BA5Mr2yQNAOCfTBIPbcvxQOCbsxsu8lFBOLCRp2MTXikXX4%2FjyH4M%2BOPjXgBVMhqf4fenvG9WFlOlE1xOQ9CdCdIejoDHiQsWjzs9d0su6gHZNXf%2FOt3gxD3XsPfzCqNbq9uqjHVVqmQjbg2wv54CcCPQ6qgZed%2FwCj%2BgpUjBHFg6WZTXwLP0TYosg2FFguwL41kUWR3JFec%2BcUWglC%2FcmNR7SdJJHiDuISifschnRL8nIgIVN6v8ZII7LMLuf2F61VYGaAbzMPuFq8MGOqUBbFbNITXd3C7yzBoM2Je7hpaUz26pq%2B3sSpIz%2FjLy9ID%2BR0pwBTiTcP7txzHxUzgVtBPBvlL6lRxEh%2BYYBpSijZz6VUzUkjbIHiZgmwo96Ssunc4fHUZ8XuKDDjus%2BndmvaaotxjAO1mHi31po120Tupa5NllGi8GzZA6ZxMHhqJ5dihxULyZ8iM54bzOTvdzj6kRW6X9qxAFgllOZikXEvahFprd&X-Amz-Signature=652fea2b110d87f50d8b54dc9fa54cc60937401cfbcb883a0288595f20df55de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

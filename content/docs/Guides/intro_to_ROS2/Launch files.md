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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YT4KP7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQItHRq4LJbrGW3SF%2BTVhCwDUopuVFs5YaUk1YITOrIQIhAOgcBJC6LseMaOQxNteZgz9%2F9veDaTqtDlNA8ySHElH3KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYGLLnGZes8hLn9Ggq3AOdgT5nP6K0Ui9dseXCDNK%2FkW7NVQzH9o6e42B%2BT2f7Wk%2Fubwrnj6eW%2FgtKeU%2F3XyfgxV5MW2fJMGr9g3IVxwa%2BmWF4K4iMmuWzKPcw0Uq2jHDmceuEzgBqscIvCXYiSELLOvlPUUNTt9e8Q4JzzXLIPrgmgYlhxi4p7%2BABxipiK%2Fe57Rxof6vBxLjMk%2FeNJPR73qWrf2dafhHB9Vs9Ix%2Fr2guhciB%2FJQ8aK%2Fax4iYNLuj00ZHbhU%2FRnGFaAvED%2FSbZptaKX4cbVLExjzsOVEWe1P1hvC%2FNzJVn1SCtupaMHpBXoZx8BjWoFOnHl57IaRSEpv2SPjkCLU%2FwG2BFv2mkGkNsrlSY2rDgGoznMxcqr4PrTx6yL0xumEsrKXs7oyuXV1IxGI%2BWH8BECx%2Bp%2FF3oQhH9aP5wG74J%2FM%2FKe2hF1K%2FN2DYomNDtLvbpC8mNTMFBsovfbgxp0aWrey9elIQULFJhdggNoyalQcoGfSm%2FDbGFaCWOVdP49fc8%2FECpqonKCDToYeMQcIgtLrvJjgoE7DtEkGtRZL%2Bxr0XJTYwnCIeFszuvawg3VfaluU1sIdJaRK%2Bdw33hFiv0gQoCeBJNon45HnphlMBZ1sEoNEK7vXs5ndppWSByTHfrzjD5%2B8LABjqkASliUkrmbsey1JssZh06yIvlgf0%2BZsKCHXBUHifcAHoNZqzU%2B6AgI%2B6g9V7HpfWcarabxoXDL0xUAMS7nZp42yLlWo%2F31RR75tF0oRGUSJEJGmykNMPT6ab2m4Eh5Sgc76oqiYjOit1p6nH4pig1RVdCq%2FfOVWw%2Bg1SSVmhbXbesQzyC5Bf2RjaiMmDOBO6yj5AWZ%2BuKJnvumni9X7QjDUeRkJcN&X-Amz-Signature=4fba03edc03ba205eb71be8f0b4f5467d9878ee439f0dc30050751a1ac225620&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YT4KP7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQItHRq4LJbrGW3SF%2BTVhCwDUopuVFs5YaUk1YITOrIQIhAOgcBJC6LseMaOQxNteZgz9%2F9veDaTqtDlNA8ySHElH3KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYGLLnGZes8hLn9Ggq3AOdgT5nP6K0Ui9dseXCDNK%2FkW7NVQzH9o6e42B%2BT2f7Wk%2Fubwrnj6eW%2FgtKeU%2F3XyfgxV5MW2fJMGr9g3IVxwa%2BmWF4K4iMmuWzKPcw0Uq2jHDmceuEzgBqscIvCXYiSELLOvlPUUNTt9e8Q4JzzXLIPrgmgYlhxi4p7%2BABxipiK%2Fe57Rxof6vBxLjMk%2FeNJPR73qWrf2dafhHB9Vs9Ix%2Fr2guhciB%2FJQ8aK%2Fax4iYNLuj00ZHbhU%2FRnGFaAvED%2FSbZptaKX4cbVLExjzsOVEWe1P1hvC%2FNzJVn1SCtupaMHpBXoZx8BjWoFOnHl57IaRSEpv2SPjkCLU%2FwG2BFv2mkGkNsrlSY2rDgGoznMxcqr4PrTx6yL0xumEsrKXs7oyuXV1IxGI%2BWH8BECx%2Bp%2FF3oQhH9aP5wG74J%2FM%2FKe2hF1K%2FN2DYomNDtLvbpC8mNTMFBsovfbgxp0aWrey9elIQULFJhdggNoyalQcoGfSm%2FDbGFaCWOVdP49fc8%2FECpqonKCDToYeMQcIgtLrvJjgoE7DtEkGtRZL%2Bxr0XJTYwnCIeFszuvawg3VfaluU1sIdJaRK%2Bdw33hFiv0gQoCeBJNon45HnphlMBZ1sEoNEK7vXs5ndppWSByTHfrzjD5%2B8LABjqkASliUkrmbsey1JssZh06yIvlgf0%2BZsKCHXBUHifcAHoNZqzU%2B6AgI%2B6g9V7HpfWcarabxoXDL0xUAMS7nZp42yLlWo%2F31RR75tF0oRGUSJEJGmykNMPT6ab2m4Eh5Sgc76oqiYjOit1p6nH4pig1RVdCq%2FfOVWw%2Bg1SSVmhbXbesQzyC5Bf2RjaiMmDOBO6yj5AWZ%2BuKJnvumni9X7QjDUeRkJcN&X-Amz-Signature=2ac796c97e206a8b7e3d0ca8071b4789bf5b0833574ea2268cb229efa4264d97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YT4KP7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T121618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQItHRq4LJbrGW3SF%2BTVhCwDUopuVFs5YaUk1YITOrIQIhAOgcBJC6LseMaOQxNteZgz9%2F9veDaTqtDlNA8ySHElH3KogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYGLLnGZes8hLn9Ggq3AOdgT5nP6K0Ui9dseXCDNK%2FkW7NVQzH9o6e42B%2BT2f7Wk%2Fubwrnj6eW%2FgtKeU%2F3XyfgxV5MW2fJMGr9g3IVxwa%2BmWF4K4iMmuWzKPcw0Uq2jHDmceuEzgBqscIvCXYiSELLOvlPUUNTt9e8Q4JzzXLIPrgmgYlhxi4p7%2BABxipiK%2Fe57Rxof6vBxLjMk%2FeNJPR73qWrf2dafhHB9Vs9Ix%2Fr2guhciB%2FJQ8aK%2Fax4iYNLuj00ZHbhU%2FRnGFaAvED%2FSbZptaKX4cbVLExjzsOVEWe1P1hvC%2FNzJVn1SCtupaMHpBXoZx8BjWoFOnHl57IaRSEpv2SPjkCLU%2FwG2BFv2mkGkNsrlSY2rDgGoznMxcqr4PrTx6yL0xumEsrKXs7oyuXV1IxGI%2BWH8BECx%2Bp%2FF3oQhH9aP5wG74J%2FM%2FKe2hF1K%2FN2DYomNDtLvbpC8mNTMFBsovfbgxp0aWrey9elIQULFJhdggNoyalQcoGfSm%2FDbGFaCWOVdP49fc8%2FECpqonKCDToYeMQcIgtLrvJjgoE7DtEkGtRZL%2Bxr0XJTYwnCIeFszuvawg3VfaluU1sIdJaRK%2Bdw33hFiv0gQoCeBJNon45HnphlMBZ1sEoNEK7vXs5ndppWSByTHfrzjD5%2B8LABjqkASliUkrmbsey1JssZh06yIvlgf0%2BZsKCHXBUHifcAHoNZqzU%2B6AgI%2B6g9V7HpfWcarabxoXDL0xUAMS7nZp42yLlWo%2F31RR75tF0oRGUSJEJGmykNMPT6ab2m4Eh5Sgc76oqiYjOit1p6nH4pig1RVdCq%2FfOVWw%2Bg1SSVmhbXbesQzyC5Bf2RjaiMmDOBO6yj5AWZ%2BuKJnvumni9X7QjDUeRkJcN&X-Amz-Signature=2b579a1c2c89e4ece39c6143ec5af096c423e7895c65fa4ad29b59f7f0844093&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

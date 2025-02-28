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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BTLTDUW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCW2hqj71b8qaEHAVpj62ybWrFwaNJCHcFklgiCN%2BuYfgIhAJLLcDDoAIvfgTRpE8D5wB47NwZUbjjE21MEknrwcLaTKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIqsuPn0e1blsb5DYq3AOiN8PGBagKJ8E6zsdyBimGtvyrnHX%2FSiU%2B1pYCSyoOAs72apqVUxleE2uvR%2BK8bnNqublQ9i3bB095Yjd5A%2FVXNvaEZ%2BswsAqrGqadaQsWidMu6pznD1Toa%2FcytS8V0yiFCw8GAZ9v89gUiUv4uFGfqjTXjzQR%2F%2FDbUaTw7ETfwAyduqx0sBh%2BhQwlzwXHOVxBi%2BoTnlBtBLzocejiLHojs1WFlVL6ZkQYkWki3fosav7aY%2FNdxkmsfEDLKmsxzudHnHOY1Yik%2BtjHk8xq0adyzaGEOCnOuKKZ%2BCRNKn8dTWTxwE%2BfKzzJnYTjSBSbks5oga6NyyHBw73GtmxWaPVphEH1MIJM38dU%2BkXja4jSAjMcUzAI99RpEXowS4cbG19kpuiN%2F8loLGPQmlunDNQ%2FUcnMRQdUTbIIsQ8XvjCFFeiClvStMQrQDdf7favkVwZth9qowh16QPgQxQ2vjy%2FVaIjVxcAxCjbRSUNuugQwTANnuTang9ypkxlrWj3dU9cRuKI0pZK%2Bpp8qiJNdI%2Blr2m1dxMvGhQItL7SJ66irAT3krdix5AR7t4MNlg4jPjNnrc1OMTIfv1LokGVfo6vcBqekDN7k%2BKlJwUsttZWNGWAlLqd691nPc%2FGMejC5i4i%2BBjqkAQltw8f6JeAVSqqoZGdOgAkZbTcPU5bZhs38sKcbwBFh%2BgLHDpEIPOMC%2BHNOnD%2BfwrKntutJbLkPWLkc0Lm4e%2FGY1B9jFrXDd2Q49X5FCHAWPELYZTS%2FCX0l0CCWyMvypu609k8Sh9ysaGMjh9IoVotmR9utDmGvVssy4Lv6FjtCgASFS4TcqKBaUEhRlFBkaP2GKylYZ2XR03jgRQ1HQ1n4V1UI&X-Amz-Signature=20dc9086ab70bfbdeb345e017189b7301897113ef67dd55f4b067edbf5a2eb6f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BTLTDUW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCW2hqj71b8qaEHAVpj62ybWrFwaNJCHcFklgiCN%2BuYfgIhAJLLcDDoAIvfgTRpE8D5wB47NwZUbjjE21MEknrwcLaTKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIqsuPn0e1blsb5DYq3AOiN8PGBagKJ8E6zsdyBimGtvyrnHX%2FSiU%2B1pYCSyoOAs72apqVUxleE2uvR%2BK8bnNqublQ9i3bB095Yjd5A%2FVXNvaEZ%2BswsAqrGqadaQsWidMu6pznD1Toa%2FcytS8V0yiFCw8GAZ9v89gUiUv4uFGfqjTXjzQR%2F%2FDbUaTw7ETfwAyduqx0sBh%2BhQwlzwXHOVxBi%2BoTnlBtBLzocejiLHojs1WFlVL6ZkQYkWki3fosav7aY%2FNdxkmsfEDLKmsxzudHnHOY1Yik%2BtjHk8xq0adyzaGEOCnOuKKZ%2BCRNKn8dTWTxwE%2BfKzzJnYTjSBSbks5oga6NyyHBw73GtmxWaPVphEH1MIJM38dU%2BkXja4jSAjMcUzAI99RpEXowS4cbG19kpuiN%2F8loLGPQmlunDNQ%2FUcnMRQdUTbIIsQ8XvjCFFeiClvStMQrQDdf7favkVwZth9qowh16QPgQxQ2vjy%2FVaIjVxcAxCjbRSUNuugQwTANnuTang9ypkxlrWj3dU9cRuKI0pZK%2Bpp8qiJNdI%2Blr2m1dxMvGhQItL7SJ66irAT3krdix5AR7t4MNlg4jPjNnrc1OMTIfv1LokGVfo6vcBqekDN7k%2BKlJwUsttZWNGWAlLqd691nPc%2FGMejC5i4i%2BBjqkAQltw8f6JeAVSqqoZGdOgAkZbTcPU5bZhs38sKcbwBFh%2BgLHDpEIPOMC%2BHNOnD%2BfwrKntutJbLkPWLkc0Lm4e%2FGY1B9jFrXDd2Q49X5FCHAWPELYZTS%2FCX0l0CCWyMvypu609k8Sh9ysaGMjh9IoVotmR9utDmGvVssy4Lv6FjtCgASFS4TcqKBaUEhRlFBkaP2GKylYZ2XR03jgRQ1HQ1n4V1UI&X-Amz-Signature=00d037f528cc4bc58f12cc7b5ee326d4c62c77c7f891149601ce40a07e7783c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BTLTDUW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T190242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCW2hqj71b8qaEHAVpj62ybWrFwaNJCHcFklgiCN%2BuYfgIhAJLLcDDoAIvfgTRpE8D5wB47NwZUbjjE21MEknrwcLaTKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyIqsuPn0e1blsb5DYq3AOiN8PGBagKJ8E6zsdyBimGtvyrnHX%2FSiU%2B1pYCSyoOAs72apqVUxleE2uvR%2BK8bnNqublQ9i3bB095Yjd5A%2FVXNvaEZ%2BswsAqrGqadaQsWidMu6pznD1Toa%2FcytS8V0yiFCw8GAZ9v89gUiUv4uFGfqjTXjzQR%2F%2FDbUaTw7ETfwAyduqx0sBh%2BhQwlzwXHOVxBi%2BoTnlBtBLzocejiLHojs1WFlVL6ZkQYkWki3fosav7aY%2FNdxkmsfEDLKmsxzudHnHOY1Yik%2BtjHk8xq0adyzaGEOCnOuKKZ%2BCRNKn8dTWTxwE%2BfKzzJnYTjSBSbks5oga6NyyHBw73GtmxWaPVphEH1MIJM38dU%2BkXja4jSAjMcUzAI99RpEXowS4cbG19kpuiN%2F8loLGPQmlunDNQ%2FUcnMRQdUTbIIsQ8XvjCFFeiClvStMQrQDdf7favkVwZth9qowh16QPgQxQ2vjy%2FVaIjVxcAxCjbRSUNuugQwTANnuTang9ypkxlrWj3dU9cRuKI0pZK%2Bpp8qiJNdI%2Blr2m1dxMvGhQItL7SJ66irAT3krdix5AR7t4MNlg4jPjNnrc1OMTIfv1LokGVfo6vcBqekDN7k%2BKlJwUsttZWNGWAlLqd691nPc%2FGMejC5i4i%2BBjqkAQltw8f6JeAVSqqoZGdOgAkZbTcPU5bZhs38sKcbwBFh%2BgLHDpEIPOMC%2BHNOnD%2BfwrKntutJbLkPWLkc0Lm4e%2FGY1B9jFrXDd2Q49X5FCHAWPELYZTS%2FCX0l0CCWyMvypu609k8Sh9ysaGMjh9IoVotmR9utDmGvVssy4Lv6FjtCgASFS4TcqKBaUEhRlFBkaP2GKylYZ2XR03jgRQ1HQ1n4V1UI&X-Amz-Signature=7d63423f2cafe37dfc6db26c985aa43b969a5b86a0dc61aa76cf810b55cdc248&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

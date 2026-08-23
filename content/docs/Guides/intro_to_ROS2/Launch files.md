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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664GF5B63%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCZKRsgXIFfLgUnudDtDMHnto1kb8egrXgDn76GK0jnngIhAObCPCMBN2%2FwL5xyw4BHW5XNVQ2C64p385dGDWQZrnwkKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJZFjYh3KViN7cyWIq3APr1QaRhofZJa2sx%2BqBqkGJ4%2BozCQOh%2FH59Nax88CGI9DgCqiRODTDUUayweI0mX0a0EDrCHcJYGHLTg43bLYm1To9wyqgMKzo5WMuFjqPTEOJ7dXDoGyzsWDvg2H1NP0m%2FSOvGgG5KPZSESA86gVqfPr4vGG%2Fot74jki411roHYv3vbNti8NqqNyOXuNYdh7IbjzpiFslvTwdqdRRvjThC082v009p1dJPTQGgEUO1pewja1Q9EYHBjtBZrkJctytKEWL360Nc0S%2F0KAKWfJwhKnMehPwaMAI40BEcoYB%2F4DKwfiPRYpBmm%2F6IPUbsuSYo3qcfYwifcJpulJDLtl1ezHrAzxDn9V1SJ96IF4le%2BUilTTVtSlXbSHfo9hNMKGYb9c4Gsm0KWEHv7MaHLk6XwZZQmGBm2tzwBrOjwoDoLvgdPQ0%2Fhim%2BSbp80IMQn9%2BzVeW0VyNtcFVwVrpIBSvrFgIZTRsac6xVjZkpOgvfquw%2Bp6ijBucsTe4fhWhjrH2eEwHgIQQT047110xJ5rui4zH51iqwqOpOUK2tNtl7ikoj7sE9TDw51eCaSUvJctj56cAnY1QnANA8RTX7zimoVNjbRWOyr294GLVxKIPWw7KLALaKDGH98IxytzDwhKnUBjqkAQdHxDi5BwHsa80PlQoXHXvQrUy3gy%2FNb5w%2F5UTOWj9wcjd9sYVt2ppxI%2BFIPihck3q9bn9QVvDOR2cgQNOToOnIHIJNPI%2F1nf%2F8zOpck2yWL8m4fyiSAnEIQYfCcbMnEgJ0YA7SYOKLYxh2%2BfPJ%2Bwivz6GdwYG49He7wEM8qxp8bolRe%2FRrXcPo1KcxNmzMU7fBjputfTFrlPeuRu2bH%2F4HVMY%2F&X-Amz-Signature=c78a47eb7518a889c95e62b07c56c2d5533af18f5884e02b737bf0a9ecdf487a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664GF5B63%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCZKRsgXIFfLgUnudDtDMHnto1kb8egrXgDn76GK0jnngIhAObCPCMBN2%2FwL5xyw4BHW5XNVQ2C64p385dGDWQZrnwkKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJZFjYh3KViN7cyWIq3APr1QaRhofZJa2sx%2BqBqkGJ4%2BozCQOh%2FH59Nax88CGI9DgCqiRODTDUUayweI0mX0a0EDrCHcJYGHLTg43bLYm1To9wyqgMKzo5WMuFjqPTEOJ7dXDoGyzsWDvg2H1NP0m%2FSOvGgG5KPZSESA86gVqfPr4vGG%2Fot74jki411roHYv3vbNti8NqqNyOXuNYdh7IbjzpiFslvTwdqdRRvjThC082v009p1dJPTQGgEUO1pewja1Q9EYHBjtBZrkJctytKEWL360Nc0S%2F0KAKWfJwhKnMehPwaMAI40BEcoYB%2F4DKwfiPRYpBmm%2F6IPUbsuSYo3qcfYwifcJpulJDLtl1ezHrAzxDn9V1SJ96IF4le%2BUilTTVtSlXbSHfo9hNMKGYb9c4Gsm0KWEHv7MaHLk6XwZZQmGBm2tzwBrOjwoDoLvgdPQ0%2Fhim%2BSbp80IMQn9%2BzVeW0VyNtcFVwVrpIBSvrFgIZTRsac6xVjZkpOgvfquw%2Bp6ijBucsTe4fhWhjrH2eEwHgIQQT047110xJ5rui4zH51iqwqOpOUK2tNtl7ikoj7sE9TDw51eCaSUvJctj56cAnY1QnANA8RTX7zimoVNjbRWOyr294GLVxKIPWw7KLALaKDGH98IxytzDwhKnUBjqkAQdHxDi5BwHsa80PlQoXHXvQrUy3gy%2FNb5w%2F5UTOWj9wcjd9sYVt2ppxI%2BFIPihck3q9bn9QVvDOR2cgQNOToOnIHIJNPI%2F1nf%2F8zOpck2yWL8m4fyiSAnEIQYfCcbMnEgJ0YA7SYOKLYxh2%2BfPJ%2Bwivz6GdwYG49He7wEM8qxp8bolRe%2FRrXcPo1KcxNmzMU7fBjputfTFrlPeuRu2bH%2F4HVMY%2F&X-Amz-Signature=a7e2d68185cc18f6fd2de32b07ef4c4ddf4697aa6a3f0fa869e8e5903d31fb9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664GF5B63%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCZKRsgXIFfLgUnudDtDMHnto1kb8egrXgDn76GK0jnngIhAObCPCMBN2%2FwL5xyw4BHW5XNVQ2C64p385dGDWQZrnwkKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJZFjYh3KViN7cyWIq3APr1QaRhofZJa2sx%2BqBqkGJ4%2BozCQOh%2FH59Nax88CGI9DgCqiRODTDUUayweI0mX0a0EDrCHcJYGHLTg43bLYm1To9wyqgMKzo5WMuFjqPTEOJ7dXDoGyzsWDvg2H1NP0m%2FSOvGgG5KPZSESA86gVqfPr4vGG%2Fot74jki411roHYv3vbNti8NqqNyOXuNYdh7IbjzpiFslvTwdqdRRvjThC082v009p1dJPTQGgEUO1pewja1Q9EYHBjtBZrkJctytKEWL360Nc0S%2F0KAKWfJwhKnMehPwaMAI40BEcoYB%2F4DKwfiPRYpBmm%2F6IPUbsuSYo3qcfYwifcJpulJDLtl1ezHrAzxDn9V1SJ96IF4le%2BUilTTVtSlXbSHfo9hNMKGYb9c4Gsm0KWEHv7MaHLk6XwZZQmGBm2tzwBrOjwoDoLvgdPQ0%2Fhim%2BSbp80IMQn9%2BzVeW0VyNtcFVwVrpIBSvrFgIZTRsac6xVjZkpOgvfquw%2Bp6ijBucsTe4fhWhjrH2eEwHgIQQT047110xJ5rui4zH51iqwqOpOUK2tNtl7ikoj7sE9TDw51eCaSUvJctj56cAnY1QnANA8RTX7zimoVNjbRWOyr294GLVxKIPWw7KLALaKDGH98IxytzDwhKnUBjqkAQdHxDi5BwHsa80PlQoXHXvQrUy3gy%2FNb5w%2F5UTOWj9wcjd9sYVt2ppxI%2BFIPihck3q9bn9QVvDOR2cgQNOToOnIHIJNPI%2F1nf%2F8zOpck2yWL8m4fyiSAnEIQYfCcbMnEgJ0YA7SYOKLYxh2%2BfPJ%2Bwivz6GdwYG49He7wEM8qxp8bolRe%2FRrXcPo1KcxNmzMU7fBjputfTFrlPeuRu2bH%2F4HVMY%2F&X-Amz-Signature=a346bd8edb49c58f10256cae37cb90846babf02d5060c283743925588e15c8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

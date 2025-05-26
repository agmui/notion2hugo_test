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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4G3VNG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIBFfJt3EBySaiDekWDyBrg3S2BQLAPnNKr%2FBiP1ny7q8AiEAtumIKlQTe91B0BSlFwLTga5VaDAv6%2FJNtzzxp%2FZGm24q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGcuG4409aBDuX%2FcwSrcA%2F%2F9rPGkva4tORzbxrwdfuQDi3%2Bq%2FBWNVwZfN%2F9PfwCFteNAVAg3ql0sfryVQHkeOrRpKySX7OE4Q767dJUex%2BjbspU8dMLjlJsVdrGjb2qlfIYsghMdBq5BDfafX6fu1ihTVAf0jJYOqV8FGOpdv2I8%2BblqeM8t0C%2FAycKEnPt665nAKWC8%2Fi6oO4TnaS%2Bggwh9Cxghy3u1t3sXAfCI5vBRPrfSVREheCzcwICD07PZXFBGL%2Fttj7FDReZRhbBTNRwUL09b%2FVoEssM8ysWnpW1lVHjC5UaVOkIDv6isUGFgQYIUXBGlQBWpckFikK04joq%2BSl5rymyBTyJrBs8y%2FZ5CPxhi9O9eno2gyY9CUAfK%2BUk1vE2YyZt%2BQJpmsL1npoMITBfrhDbpgwHQhhGBqnfiFikaQC4wDrBEvv6ra9wPZnB1CRYpFpQlW3%2BHeAIebidPGHdd4qytZBsOWn8RsPpYd%2FhLuUY0DdjPKXLUnKs3BBhA4R%2BxDrl2Gz%2FuK5lP9VnDlhwaRsyTNiB6jHsL4r9JZiXEkbeIjBDsg9LvYarS8R9jxsEyIVSEfavsIUaz6iA9EWckahUPEFZ0HOJqGSLKeuGL9A11xVhzMuM%2BwT2hzNjaH5oy16qHgrYrMOfg0MEGOqUBmZ49swVdpFUHx0MJCY%2ByLMhMLBh3yFOjsIrizpYBK952Xi3xemwEVdZFEqGhCVv8rnIH4N8to8mzPCcgcLtIN6ukUMAYfWw70WSCIe4q5jMZyQw8ZHBHmHBLF4%2F2y7ayhU5JP5VV5yHzALD9j8TTJJVJQzbw9iTWOAFQf%2FQFXW%2BFqs%2BYAWQH6s6QLlfxyDnkLL3c2vH0I1ebMjAtWQ4e1mZoIHO6&X-Amz-Signature=5f339a31945fb5907a716a52e3f75b28d1f687a1262b110cc8c7ea4f169f8de6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4G3VNG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIBFfJt3EBySaiDekWDyBrg3S2BQLAPnNKr%2FBiP1ny7q8AiEAtumIKlQTe91B0BSlFwLTga5VaDAv6%2FJNtzzxp%2FZGm24q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGcuG4409aBDuX%2FcwSrcA%2F%2F9rPGkva4tORzbxrwdfuQDi3%2Bq%2FBWNVwZfN%2F9PfwCFteNAVAg3ql0sfryVQHkeOrRpKySX7OE4Q767dJUex%2BjbspU8dMLjlJsVdrGjb2qlfIYsghMdBq5BDfafX6fu1ihTVAf0jJYOqV8FGOpdv2I8%2BblqeM8t0C%2FAycKEnPt665nAKWC8%2Fi6oO4TnaS%2Bggwh9Cxghy3u1t3sXAfCI5vBRPrfSVREheCzcwICD07PZXFBGL%2Fttj7FDReZRhbBTNRwUL09b%2FVoEssM8ysWnpW1lVHjC5UaVOkIDv6isUGFgQYIUXBGlQBWpckFikK04joq%2BSl5rymyBTyJrBs8y%2FZ5CPxhi9O9eno2gyY9CUAfK%2BUk1vE2YyZt%2BQJpmsL1npoMITBfrhDbpgwHQhhGBqnfiFikaQC4wDrBEvv6ra9wPZnB1CRYpFpQlW3%2BHeAIebidPGHdd4qytZBsOWn8RsPpYd%2FhLuUY0DdjPKXLUnKs3BBhA4R%2BxDrl2Gz%2FuK5lP9VnDlhwaRsyTNiB6jHsL4r9JZiXEkbeIjBDsg9LvYarS8R9jxsEyIVSEfavsIUaz6iA9EWckahUPEFZ0HOJqGSLKeuGL9A11xVhzMuM%2BwT2hzNjaH5oy16qHgrYrMOfg0MEGOqUBmZ49swVdpFUHx0MJCY%2ByLMhMLBh3yFOjsIrizpYBK952Xi3xemwEVdZFEqGhCVv8rnIH4N8to8mzPCcgcLtIN6ukUMAYfWw70WSCIe4q5jMZyQw8ZHBHmHBLF4%2F2y7ayhU5JP5VV5yHzALD9j8TTJJVJQzbw9iTWOAFQf%2FQFXW%2BFqs%2BYAWQH6s6QLlfxyDnkLL3c2vH0I1ebMjAtWQ4e1mZoIHO6&X-Amz-Signature=7e0c5c247f6bed101c7dc57e2118a366b7d54a0d6c6fc70fd9be15ea3d61691c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR4G3VNG%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIBFfJt3EBySaiDekWDyBrg3S2BQLAPnNKr%2FBiP1ny7q8AiEAtumIKlQTe91B0BSlFwLTga5VaDAv6%2FJNtzzxp%2FZGm24q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDGcuG4409aBDuX%2FcwSrcA%2F%2F9rPGkva4tORzbxrwdfuQDi3%2Bq%2FBWNVwZfN%2F9PfwCFteNAVAg3ql0sfryVQHkeOrRpKySX7OE4Q767dJUex%2BjbspU8dMLjlJsVdrGjb2qlfIYsghMdBq5BDfafX6fu1ihTVAf0jJYOqV8FGOpdv2I8%2BblqeM8t0C%2FAycKEnPt665nAKWC8%2Fi6oO4TnaS%2Bggwh9Cxghy3u1t3sXAfCI5vBRPrfSVREheCzcwICD07PZXFBGL%2Fttj7FDReZRhbBTNRwUL09b%2FVoEssM8ysWnpW1lVHjC5UaVOkIDv6isUGFgQYIUXBGlQBWpckFikK04joq%2BSl5rymyBTyJrBs8y%2FZ5CPxhi9O9eno2gyY9CUAfK%2BUk1vE2YyZt%2BQJpmsL1npoMITBfrhDbpgwHQhhGBqnfiFikaQC4wDrBEvv6ra9wPZnB1CRYpFpQlW3%2BHeAIebidPGHdd4qytZBsOWn8RsPpYd%2FhLuUY0DdjPKXLUnKs3BBhA4R%2BxDrl2Gz%2FuK5lP9VnDlhwaRsyTNiB6jHsL4r9JZiXEkbeIjBDsg9LvYarS8R9jxsEyIVSEfavsIUaz6iA9EWckahUPEFZ0HOJqGSLKeuGL9A11xVhzMuM%2BwT2hzNjaH5oy16qHgrYrMOfg0MEGOqUBmZ49swVdpFUHx0MJCY%2ByLMhMLBh3yFOjsIrizpYBK952Xi3xemwEVdZFEqGhCVv8rnIH4N8to8mzPCcgcLtIN6ukUMAYfWw70WSCIe4q5jMZyQw8ZHBHmHBLF4%2F2y7ayhU5JP5VV5yHzALD9j8TTJJVJQzbw9iTWOAFQf%2FQFXW%2BFqs%2BYAWQH6s6QLlfxyDnkLL3c2vH0I1ebMjAtWQ4e1mZoIHO6&X-Amz-Signature=e9309f128dc2b305793a2a883fd156001266d8cdd8ad80cfd7c87cef8bb674b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

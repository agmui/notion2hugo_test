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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4IQKNF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGESA5nHq5u5HOoYFful%2BW5iSDtQGpuTMt28NHhiRnZ4AiEA9CmSUrBlSBHh8D7nJXvjGavGQWDxWevZWmYj2Rs%2Bg3gqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAfA01O%2BRsWLwE7pircA%2F2%2FGa3dQauncJjzLrLQWuOIxWf2HOvCQmvEwUgz3d%2B%2BfeD7Wlm0palBE5jP%2Fp3Yvc3AGJ2ZjllwH0RR%2FWRkIswSemdnRVehhZzmcBLFaPzDn3hYX%2FBo2%2ByKn4sttGlMug%2BqqetQ80cPf%2FVlY%2BnsX4U%2B%2FZegQpJGHG7o%2FXhmnJjGNGrkuxfwCFK7TMzD68leSW9ea10TyaFz1n9nDntjLkd%2ByJpsq8WYrhMleJU9WTTvz%2B92%2FFuxIkvpmxJkQcCmz5j8EnVInG43DjsYDL0T264%2BkQc2Fh1wjdCjXMeszerumpzBXQA%2FOMQXlicrbl2WmaLTAyXWVLC2S%2FiQaFKQ79SqiCHLVUszWiL5iDQ9RzlQS9WaQCnkMIi0t7veuJ4ZLLWtE7wl%2BdrZyL8Q2Y2FMegVLBwwrNh9qV7q3gaq2ZrC2KUswzFOly7%2FoyJ41G6mqhaWQZqUU65Hp2q%2Fbb9pvjYl6vNr%2FG54AbcreksIC3tlsMT8T5M0KqtaC%2FeEfdvRLfLJqp%2BRfmW2yeF7vHV3hyuKVmwDIpBANW3b%2Bf5iQFC0vWfcnxYjocE%2Br5C%2BdNvgLCS86zx7AibjrGkdTkflX7%2BE4jELuSR7v%2Bs%2Bh6t4Lqo6ZLfsCIyE3jdgkTK1MMy8%2B7wGOqUBcDPvli8hywPeNJGHnYY19l2ixqMWlmoU%2FFdAnLoRo3aFsVnikiXsWZCGBS44oIiyDhOgIIaiHgz1JJN4u%2FQQS10%2FIrGcyD8w9zPj3S5Z253Yn%2Bh9u1aUaKGhzfn3yK4H8sPLNTO4idH72ssug2%2BGmIuNKX047wU%2BvewNTHGyq62p7Pjm87popuejYiBCjXgd76yctVDqwsRUCoLQQU4wuE9T09EA&X-Amz-Signature=cf1095c7d39fc458b994ed50a2a27bcb5fe6fcfb5881f16a8a769b3623019b91&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4IQKNF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGESA5nHq5u5HOoYFful%2BW5iSDtQGpuTMt28NHhiRnZ4AiEA9CmSUrBlSBHh8D7nJXvjGavGQWDxWevZWmYj2Rs%2Bg3gqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAfA01O%2BRsWLwE7pircA%2F2%2FGa3dQauncJjzLrLQWuOIxWf2HOvCQmvEwUgz3d%2B%2BfeD7Wlm0palBE5jP%2Fp3Yvc3AGJ2ZjllwH0RR%2FWRkIswSemdnRVehhZzmcBLFaPzDn3hYX%2FBo2%2ByKn4sttGlMug%2BqqetQ80cPf%2FVlY%2BnsX4U%2B%2FZegQpJGHG7o%2FXhmnJjGNGrkuxfwCFK7TMzD68leSW9ea10TyaFz1n9nDntjLkd%2ByJpsq8WYrhMleJU9WTTvz%2B92%2FFuxIkvpmxJkQcCmz5j8EnVInG43DjsYDL0T264%2BkQc2Fh1wjdCjXMeszerumpzBXQA%2FOMQXlicrbl2WmaLTAyXWVLC2S%2FiQaFKQ79SqiCHLVUszWiL5iDQ9RzlQS9WaQCnkMIi0t7veuJ4ZLLWtE7wl%2BdrZyL8Q2Y2FMegVLBwwrNh9qV7q3gaq2ZrC2KUswzFOly7%2FoyJ41G6mqhaWQZqUU65Hp2q%2Fbb9pvjYl6vNr%2FG54AbcreksIC3tlsMT8T5M0KqtaC%2FeEfdvRLfLJqp%2BRfmW2yeF7vHV3hyuKVmwDIpBANW3b%2Bf5iQFC0vWfcnxYjocE%2Br5C%2BdNvgLCS86zx7AibjrGkdTkflX7%2BE4jELuSR7v%2Bs%2Bh6t4Lqo6ZLfsCIyE3jdgkTK1MMy8%2B7wGOqUBcDPvli8hywPeNJGHnYY19l2ixqMWlmoU%2FFdAnLoRo3aFsVnikiXsWZCGBS44oIiyDhOgIIaiHgz1JJN4u%2FQQS10%2FIrGcyD8w9zPj3S5Z253Yn%2Bh9u1aUaKGhzfn3yK4H8sPLNTO4idH72ssug2%2BGmIuNKX047wU%2BvewNTHGyq62p7Pjm87popuejYiBCjXgd76yctVDqwsRUCoLQQU4wuE9T09EA&X-Amz-Signature=ffb3c9050a0e024f1e8f24bd30d3530ce868d511d3d614fce1db020bc8d5a6c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F4IQKNF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T031111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGESA5nHq5u5HOoYFful%2BW5iSDtQGpuTMt28NHhiRnZ4AiEA9CmSUrBlSBHh8D7nJXvjGavGQWDxWevZWmYj2Rs%2Bg3gqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAfA01O%2BRsWLwE7pircA%2F2%2FGa3dQauncJjzLrLQWuOIxWf2HOvCQmvEwUgz3d%2B%2BfeD7Wlm0palBE5jP%2Fp3Yvc3AGJ2ZjllwH0RR%2FWRkIswSemdnRVehhZzmcBLFaPzDn3hYX%2FBo2%2ByKn4sttGlMug%2BqqetQ80cPf%2FVlY%2BnsX4U%2B%2FZegQpJGHG7o%2FXhmnJjGNGrkuxfwCFK7TMzD68leSW9ea10TyaFz1n9nDntjLkd%2ByJpsq8WYrhMleJU9WTTvz%2B92%2FFuxIkvpmxJkQcCmz5j8EnVInG43DjsYDL0T264%2BkQc2Fh1wjdCjXMeszerumpzBXQA%2FOMQXlicrbl2WmaLTAyXWVLC2S%2FiQaFKQ79SqiCHLVUszWiL5iDQ9RzlQS9WaQCnkMIi0t7veuJ4ZLLWtE7wl%2BdrZyL8Q2Y2FMegVLBwwrNh9qV7q3gaq2ZrC2KUswzFOly7%2FoyJ41G6mqhaWQZqUU65Hp2q%2Fbb9pvjYl6vNr%2FG54AbcreksIC3tlsMT8T5M0KqtaC%2FeEfdvRLfLJqp%2BRfmW2yeF7vHV3hyuKVmwDIpBANW3b%2Bf5iQFC0vWfcnxYjocE%2Br5C%2BdNvgLCS86zx7AibjrGkdTkflX7%2BE4jELuSR7v%2Bs%2Bh6t4Lqo6ZLfsCIyE3jdgkTK1MMy8%2B7wGOqUBcDPvli8hywPeNJGHnYY19l2ixqMWlmoU%2FFdAnLoRo3aFsVnikiXsWZCGBS44oIiyDhOgIIaiHgz1JJN4u%2FQQS10%2FIrGcyD8w9zPj3S5Z253Yn%2Bh9u1aUaKGhzfn3yK4H8sPLNTO4idH72ssug2%2BGmIuNKX047wU%2BvewNTHGyq62p7Pjm87popuejYiBCjXgd76yctVDqwsRUCoLQQU4wuE9T09EA&X-Amz-Signature=d2bb26ee580764f636485493b4e0fca861ddda14ce8ae7605c4ef7cefacc9be1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

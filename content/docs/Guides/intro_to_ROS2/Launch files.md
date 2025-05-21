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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7ZFST2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcFklTXanKHz7j4TVEfhK54eQz2doEtcE7GTC2qLknAiAXRvaQX60XevMdzTg%2F82IPvTyaKHqDn1NB7iFWzmYgwiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQoqIUH%2Fs6mIXaPmGKtwDCs22TEOr2Nzho28z4GW4i7tKHHBlLJO4wkc3d65wIQC%2F86UtA929Zc8h6JZ6zef7n1dwoYc%2Fv4W4PvxEzkMOGYO1R%2FO1KVll3m07VpH0lyy3ycHl%2FOfJpQagZcXwsWehaSZvgRQ3FAZuHhQXTocvCDXLCgge4L9jY2Nk3tpENkvBRhDXWDyxpZnDOCIZNyCNwOgrOPDT2lOuJbTc9Rgv5sQkWufS67Ty%2FnB4INutrz8YU%2FVTTJc%2FzaKbyG4oUQrKQaM6SVvkMa1TOgerYj6Ty98HHLZxfro076CY%2BPzHCMgKc94EbtuF%2BWcKwRrLGmHTuivDTpnZD2tysgxShZlonzylKJUXxS7auizig%2FLzuG9DfDpTL3qO45gZMZAKji2HftYWY9pRHYL%2FYsitmGB%2FUq9l2Tdbgk%2FxGSLBsEob3qSUHVw52XPsmxjyIvBuxOSscg8c1mYfx%2BT5vW4Sl7W6aFeXbLd495k3aSxha4RsIjXRNIr5sAUkAJtmILChBFiYzvdvHj6D6QrpGGfmBQtDEBexjNGWeKoNRkXmozqGgIs7dotni22IlqzxyNC5emZ4NYzGXOXGV%2BrpzvfOqbdRhOB4iFhCoykxFppt%2FJhNm41VE6YLeVkj7aMPqy4wm6%2B1wQY6pgGeZczsVUKZOjt%2BaYzGdsPCdxAtoc%2BSZs9ozkhWGZ%2FaGQyK2Q9NoQ%2B7C1lvx0tPyJxJIiOTzmNBX0RYytVJ41eUPIrH6Ca3zW5yPG0YVAd5lYeXAEZRCB7leYosuXKVyo7p9%2BaOOPDPL7ZiMte6doJvgovTgvBcn2tZi0RJv5FYxLMQNceaPhUlnvK1PQXVMLNSMkIuzWcKbH7XCy%2FSiJTAxtJzYWaQ&X-Amz-Signature=a741386bec6cfcf42191a7401f66c4920c87d89762f73b5f584d556c8a3bb1e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7ZFST2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcFklTXanKHz7j4TVEfhK54eQz2doEtcE7GTC2qLknAiAXRvaQX60XevMdzTg%2F82IPvTyaKHqDn1NB7iFWzmYgwiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQoqIUH%2Fs6mIXaPmGKtwDCs22TEOr2Nzho28z4GW4i7tKHHBlLJO4wkc3d65wIQC%2F86UtA929Zc8h6JZ6zef7n1dwoYc%2Fv4W4PvxEzkMOGYO1R%2FO1KVll3m07VpH0lyy3ycHl%2FOfJpQagZcXwsWehaSZvgRQ3FAZuHhQXTocvCDXLCgge4L9jY2Nk3tpENkvBRhDXWDyxpZnDOCIZNyCNwOgrOPDT2lOuJbTc9Rgv5sQkWufS67Ty%2FnB4INutrz8YU%2FVTTJc%2FzaKbyG4oUQrKQaM6SVvkMa1TOgerYj6Ty98HHLZxfro076CY%2BPzHCMgKc94EbtuF%2BWcKwRrLGmHTuivDTpnZD2tysgxShZlonzylKJUXxS7auizig%2FLzuG9DfDpTL3qO45gZMZAKji2HftYWY9pRHYL%2FYsitmGB%2FUq9l2Tdbgk%2FxGSLBsEob3qSUHVw52XPsmxjyIvBuxOSscg8c1mYfx%2BT5vW4Sl7W6aFeXbLd495k3aSxha4RsIjXRNIr5sAUkAJtmILChBFiYzvdvHj6D6QrpGGfmBQtDEBexjNGWeKoNRkXmozqGgIs7dotni22IlqzxyNC5emZ4NYzGXOXGV%2BrpzvfOqbdRhOB4iFhCoykxFppt%2FJhNm41VE6YLeVkj7aMPqy4wm6%2B1wQY6pgGeZczsVUKZOjt%2BaYzGdsPCdxAtoc%2BSZs9ozkhWGZ%2FaGQyK2Q9NoQ%2B7C1lvx0tPyJxJIiOTzmNBX0RYytVJ41eUPIrH6Ca3zW5yPG0YVAd5lYeXAEZRCB7leYosuXKVyo7p9%2BaOOPDPL7ZiMte6doJvgovTgvBcn2tZi0RJv5FYxLMQNceaPhUlnvK1PQXVMLNSMkIuzWcKbH7XCy%2FSiJTAxtJzYWaQ&X-Amz-Signature=871cf1e6306a3da7f2c559a67712afa7bd970b059693d84af4e5a34055dcfc3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7ZFST2%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICEcFklTXanKHz7j4TVEfhK54eQz2doEtcE7GTC2qLknAiAXRvaQX60XevMdzTg%2F82IPvTyaKHqDn1NB7iFWzmYgwiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQoqIUH%2Fs6mIXaPmGKtwDCs22TEOr2Nzho28z4GW4i7tKHHBlLJO4wkc3d65wIQC%2F86UtA929Zc8h6JZ6zef7n1dwoYc%2Fv4W4PvxEzkMOGYO1R%2FO1KVll3m07VpH0lyy3ycHl%2FOfJpQagZcXwsWehaSZvgRQ3FAZuHhQXTocvCDXLCgge4L9jY2Nk3tpENkvBRhDXWDyxpZnDOCIZNyCNwOgrOPDT2lOuJbTc9Rgv5sQkWufS67Ty%2FnB4INutrz8YU%2FVTTJc%2FzaKbyG4oUQrKQaM6SVvkMa1TOgerYj6Ty98HHLZxfro076CY%2BPzHCMgKc94EbtuF%2BWcKwRrLGmHTuivDTpnZD2tysgxShZlonzylKJUXxS7auizig%2FLzuG9DfDpTL3qO45gZMZAKji2HftYWY9pRHYL%2FYsitmGB%2FUq9l2Tdbgk%2FxGSLBsEob3qSUHVw52XPsmxjyIvBuxOSscg8c1mYfx%2BT5vW4Sl7W6aFeXbLd495k3aSxha4RsIjXRNIr5sAUkAJtmILChBFiYzvdvHj6D6QrpGGfmBQtDEBexjNGWeKoNRkXmozqGgIs7dotni22IlqzxyNC5emZ4NYzGXOXGV%2BrpzvfOqbdRhOB4iFhCoykxFppt%2FJhNm41VE6YLeVkj7aMPqy4wm6%2B1wQY6pgGeZczsVUKZOjt%2BaYzGdsPCdxAtoc%2BSZs9ozkhWGZ%2FaGQyK2Q9NoQ%2B7C1lvx0tPyJxJIiOTzmNBX0RYytVJ41eUPIrH6Ca3zW5yPG0YVAd5lYeXAEZRCB7leYosuXKVyo7p9%2BaOOPDPL7ZiMte6doJvgovTgvBcn2tZi0RJv5FYxLMQNceaPhUlnvK1PQXVMLNSMkIuzWcKbH7XCy%2FSiJTAxtJzYWaQ&X-Amz-Signature=d24a3ab4914f35ab4d81143e1cbb55782c6e41c6b99b845b157a62471e024bd5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

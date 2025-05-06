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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RSEUUQ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChSXIt9zXbYQwi6N4bQnDtFbjz7AtqBCxJ0w%2FSzXXa1wIhAK8%2BpKi2beL%2BWe%2F0ttd%2Bcl1zlsYQW%2BTD9%2F8mnhEC2Q6BKv8DCEMQABoMNjM3NDIzMTgzODA1IgzLNjmWAxm%2Bgq8qe4cq3AMxppJM2p8%2BzKR3jby1sBM6l639PYx6taeWvz%2BBJCCdiS9Xh2LALoHPtbU0TFUwBo0Asi2ajbKZJIPDmgd5bVKlX0l147c9N8P8y%2F4iUuduTxUYrK5jqGSCZWAy6Lm3O1v%2FhjHpHuYtL7wjotEHUOF2xahXX1qMTSStMF50fg1i5uH1GmyDvI0buCVEQh8McNYTib%2Bxll9%2B3kGEtSoq00KAAnGNRzzdoykAbroLFTZCbjJYbt7Br4LADQvFwWNkXZ5LYsYSMKB7u3dP3Y3GGyJ1pgAKoHPILi70xOG7ahEnapzSo5QH%2FZtGozMWgVk%2FVjkRFW4UHc1IV%2BjdLgmZ%2BS8oE6izdNZcjUBYLQkpSI4v4liUTo%2FNYFQvObxPurMMdqhJ5I1HtJwixjMfSXfxsFui6pUngmWH1gwP7ZV9EfZx0DLyGVFGNXCHfhmVapIqnsh1c%2FLJa5DVs5NwkxBTy%2BzuGO0xrSej6PEkOpFfCFZoPikcrA87d80PZd9wLcXtHSHzOVuNWS7r%2B36B%2Fr%2BJ%2BYQAv7y3y9OopD1mxm88HTebt%2FD1u8Wy%2BHgfQwIgm1qNCLkWojj%2F8iIYcCGb18sDR%2BHm2b%2BWgR0U4lOhi88tdOYr%2BYNTjPCtuMZLxTGlNDDEwufABjqkARGierYVV3%2BCzma%2FpSPDOyMlSqtGl%2Fj3RnjFe3RYdbbyMMGE45qaQgU9CGhRPTv6HL7bZTU91KVcBUHwjtachOAdZFL6x%2FljVmvBvcr%2FGcwY%2FH%2BqCC0DaemGSiMmdqX3mYGbtR%2FD3blGH86JUpQ9kqbsXxyxyEm9CcyJvgWQHfCk3c0%2Fuy3rFGu8%2FqLYUT1RRgsnu9mV7ieMVCugNfMD9NDiYQq4&X-Amz-Signature=35d645997ab1333ec896dec3ea5add9ae6348514a987b09a1023dc0349efc0a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RSEUUQ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChSXIt9zXbYQwi6N4bQnDtFbjz7AtqBCxJ0w%2FSzXXa1wIhAK8%2BpKi2beL%2BWe%2F0ttd%2Bcl1zlsYQW%2BTD9%2F8mnhEC2Q6BKv8DCEMQABoMNjM3NDIzMTgzODA1IgzLNjmWAxm%2Bgq8qe4cq3AMxppJM2p8%2BzKR3jby1sBM6l639PYx6taeWvz%2BBJCCdiS9Xh2LALoHPtbU0TFUwBo0Asi2ajbKZJIPDmgd5bVKlX0l147c9N8P8y%2F4iUuduTxUYrK5jqGSCZWAy6Lm3O1v%2FhjHpHuYtL7wjotEHUOF2xahXX1qMTSStMF50fg1i5uH1GmyDvI0buCVEQh8McNYTib%2Bxll9%2B3kGEtSoq00KAAnGNRzzdoykAbroLFTZCbjJYbt7Br4LADQvFwWNkXZ5LYsYSMKB7u3dP3Y3GGyJ1pgAKoHPILi70xOG7ahEnapzSo5QH%2FZtGozMWgVk%2FVjkRFW4UHc1IV%2BjdLgmZ%2BS8oE6izdNZcjUBYLQkpSI4v4liUTo%2FNYFQvObxPurMMdqhJ5I1HtJwixjMfSXfxsFui6pUngmWH1gwP7ZV9EfZx0DLyGVFGNXCHfhmVapIqnsh1c%2FLJa5DVs5NwkxBTy%2BzuGO0xrSej6PEkOpFfCFZoPikcrA87d80PZd9wLcXtHSHzOVuNWS7r%2B36B%2Fr%2BJ%2BYQAv7y3y9OopD1mxm88HTebt%2FD1u8Wy%2BHgfQwIgm1qNCLkWojj%2F8iIYcCGb18sDR%2BHm2b%2BWgR0U4lOhi88tdOYr%2BYNTjPCtuMZLxTGlNDDEwufABjqkARGierYVV3%2BCzma%2FpSPDOyMlSqtGl%2Fj3RnjFe3RYdbbyMMGE45qaQgU9CGhRPTv6HL7bZTU91KVcBUHwjtachOAdZFL6x%2FljVmvBvcr%2FGcwY%2FH%2BqCC0DaemGSiMmdqX3mYGbtR%2FD3blGH86JUpQ9kqbsXxyxyEm9CcyJvgWQHfCk3c0%2Fuy3rFGu8%2FqLYUT1RRgsnu9mV7ieMVCugNfMD9NDiYQq4&X-Amz-Signature=3cb3c6de2feffcede1f19913033cd0712d7105685e56c2db9dccace1ebe2a880&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672RSEUUQ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T110737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChSXIt9zXbYQwi6N4bQnDtFbjz7AtqBCxJ0w%2FSzXXa1wIhAK8%2BpKi2beL%2BWe%2F0ttd%2Bcl1zlsYQW%2BTD9%2F8mnhEC2Q6BKv8DCEMQABoMNjM3NDIzMTgzODA1IgzLNjmWAxm%2Bgq8qe4cq3AMxppJM2p8%2BzKR3jby1sBM6l639PYx6taeWvz%2BBJCCdiS9Xh2LALoHPtbU0TFUwBo0Asi2ajbKZJIPDmgd5bVKlX0l147c9N8P8y%2F4iUuduTxUYrK5jqGSCZWAy6Lm3O1v%2FhjHpHuYtL7wjotEHUOF2xahXX1qMTSStMF50fg1i5uH1GmyDvI0buCVEQh8McNYTib%2Bxll9%2B3kGEtSoq00KAAnGNRzzdoykAbroLFTZCbjJYbt7Br4LADQvFwWNkXZ5LYsYSMKB7u3dP3Y3GGyJ1pgAKoHPILi70xOG7ahEnapzSo5QH%2FZtGozMWgVk%2FVjkRFW4UHc1IV%2BjdLgmZ%2BS8oE6izdNZcjUBYLQkpSI4v4liUTo%2FNYFQvObxPurMMdqhJ5I1HtJwixjMfSXfxsFui6pUngmWH1gwP7ZV9EfZx0DLyGVFGNXCHfhmVapIqnsh1c%2FLJa5DVs5NwkxBTy%2BzuGO0xrSej6PEkOpFfCFZoPikcrA87d80PZd9wLcXtHSHzOVuNWS7r%2B36B%2Fr%2BJ%2BYQAv7y3y9OopD1mxm88HTebt%2FD1u8Wy%2BHgfQwIgm1qNCLkWojj%2F8iIYcCGb18sDR%2BHm2b%2BWgR0U4lOhi88tdOYr%2BYNTjPCtuMZLxTGlNDDEwufABjqkARGierYVV3%2BCzma%2FpSPDOyMlSqtGl%2Fj3RnjFe3RYdbbyMMGE45qaQgU9CGhRPTv6HL7bZTU91KVcBUHwjtachOAdZFL6x%2FljVmvBvcr%2FGcwY%2FH%2BqCC0DaemGSiMmdqX3mYGbtR%2FD3blGH86JUpQ9kqbsXxyxyEm9CcyJvgWQHfCk3c0%2Fuy3rFGu8%2FqLYUT1RRgsnu9mV7ieMVCugNfMD9NDiYQq4&X-Amz-Signature=dfcdd5cdf9edf57aa3bee9fa2d539f19944a307095d3d1cbfce78fb7765733e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

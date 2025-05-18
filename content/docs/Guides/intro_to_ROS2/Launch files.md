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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AGMUGVM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbAsdkS%2BeXdjXAliF%2BYQ3M53vvZxXN%2Fy5thffY16vN7gIhAJ3xdjYnzD7RWKt8ZeZYmFqTSyuCXdf%2FUOQlK0OxGzqWKv8DCHUQABoMNjM3NDIzMTgzODA1IgwAZE8vd%2BXb2OoqhwEq3AM3qXGgPr8H5edtY4OwxhLCKgjojyI76OfyjTGk4%2Bg2Hs42Aqqqjq8zsDs5ZATVa2%2FgwENkOliB8kq2ws8sJavsHqOJ88Fl8h%2B1R1pB5yTzD%2B1UrcJVW0G0uh79wWzntfC9X9ObItAF1SwUQQUim0xcWnGa6muFt5l30noRBQxmHvklaR8xfNSgTwEMAeCLF6KBOhldmfJB%2FhCeUOcciAxd6zhj1HUuDAtW8jfFF8w6%2FJIV7WRJFoe5puvRuKFN6TB%2FYX7%2FIbwxdmZzpDH6gmoNfB0ht%2B5FIawgzV%2BJ93TXY7Sgj2rJVAUy2YqTfz9dcmfIBs8%2B0uxim2B7%2F1Vu6vW8EVkVLEvmRtBSO88wKmlcEPPzeoAHBz64KAaDU80sZzamNSHBoJyPDAjQNU519oi5b0%2FzuWNTKhCrLe6DmK3dHYrbDNNj2EvkrjD2zgR6WwS9lgUwdGQ6ic1u0pkfaS6fodYnnUHCkH1rUD5KhvFpNmi0y96UantHW761tDt7zNdSF07heuSHH6XaidkDJiXeqO4Z9%2FrvWXeS963XfGfevDEQsYhr3IFOE3mtlBv4rzCpB6p0Iq9oOJKaiFy61OfzeSTAGpSwnfJs0hz8jcIK8LJpVq1DTZC7ZkVMrjC3mafBBjqkAZp2P%2BfZIqqu1v2SPyLPHYeiuylbZf0EzYTVZDv85go6R4SlpfYG58DP5qQLz%2BynOuSDm1FxaoffglXP%2BKfyJsfLsjaFsIjeVrQmzd4vYRzsmIb%2FFQZbDt78mZM22IAfXWSEpEPX9p1IiSb742T2f9NUhiLVk6Gfs1oUOZm9XgeyV779fCG4rmX5%2Bk1t5gAOSzV5uKKNVac3gUhL2vFotSWrdUmu&X-Amz-Signature=0140cb910fed719dfbedad09cdb7d339756d1aa05b37ad12415a6739de3f0eb0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AGMUGVM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbAsdkS%2BeXdjXAliF%2BYQ3M53vvZxXN%2Fy5thffY16vN7gIhAJ3xdjYnzD7RWKt8ZeZYmFqTSyuCXdf%2FUOQlK0OxGzqWKv8DCHUQABoMNjM3NDIzMTgzODA1IgwAZE8vd%2BXb2OoqhwEq3AM3qXGgPr8H5edtY4OwxhLCKgjojyI76OfyjTGk4%2Bg2Hs42Aqqqjq8zsDs5ZATVa2%2FgwENkOliB8kq2ws8sJavsHqOJ88Fl8h%2B1R1pB5yTzD%2B1UrcJVW0G0uh79wWzntfC9X9ObItAF1SwUQQUim0xcWnGa6muFt5l30noRBQxmHvklaR8xfNSgTwEMAeCLF6KBOhldmfJB%2FhCeUOcciAxd6zhj1HUuDAtW8jfFF8w6%2FJIV7WRJFoe5puvRuKFN6TB%2FYX7%2FIbwxdmZzpDH6gmoNfB0ht%2B5FIawgzV%2BJ93TXY7Sgj2rJVAUy2YqTfz9dcmfIBs8%2B0uxim2B7%2F1Vu6vW8EVkVLEvmRtBSO88wKmlcEPPzeoAHBz64KAaDU80sZzamNSHBoJyPDAjQNU519oi5b0%2FzuWNTKhCrLe6DmK3dHYrbDNNj2EvkrjD2zgR6WwS9lgUwdGQ6ic1u0pkfaS6fodYnnUHCkH1rUD5KhvFpNmi0y96UantHW761tDt7zNdSF07heuSHH6XaidkDJiXeqO4Z9%2FrvWXeS963XfGfevDEQsYhr3IFOE3mtlBv4rzCpB6p0Iq9oOJKaiFy61OfzeSTAGpSwnfJs0hz8jcIK8LJpVq1DTZC7ZkVMrjC3mafBBjqkAZp2P%2BfZIqqu1v2SPyLPHYeiuylbZf0EzYTVZDv85go6R4SlpfYG58DP5qQLz%2BynOuSDm1FxaoffglXP%2BKfyJsfLsjaFsIjeVrQmzd4vYRzsmIb%2FFQZbDt78mZM22IAfXWSEpEPX9p1IiSb742T2f9NUhiLVk6Gfs1oUOZm9XgeyV779fCG4rmX5%2Bk1t5gAOSzV5uKKNVac3gUhL2vFotSWrdUmu&X-Amz-Signature=278dc25f7fe7c571ccf9de789a2b7b3b2738bb510ffb3cc7c2888303e4691629&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AGMUGVM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbAsdkS%2BeXdjXAliF%2BYQ3M53vvZxXN%2Fy5thffY16vN7gIhAJ3xdjYnzD7RWKt8ZeZYmFqTSyuCXdf%2FUOQlK0OxGzqWKv8DCHUQABoMNjM3NDIzMTgzODA1IgwAZE8vd%2BXb2OoqhwEq3AM3qXGgPr8H5edtY4OwxhLCKgjojyI76OfyjTGk4%2Bg2Hs42Aqqqjq8zsDs5ZATVa2%2FgwENkOliB8kq2ws8sJavsHqOJ88Fl8h%2B1R1pB5yTzD%2B1UrcJVW0G0uh79wWzntfC9X9ObItAF1SwUQQUim0xcWnGa6muFt5l30noRBQxmHvklaR8xfNSgTwEMAeCLF6KBOhldmfJB%2FhCeUOcciAxd6zhj1HUuDAtW8jfFF8w6%2FJIV7WRJFoe5puvRuKFN6TB%2FYX7%2FIbwxdmZzpDH6gmoNfB0ht%2B5FIawgzV%2BJ93TXY7Sgj2rJVAUy2YqTfz9dcmfIBs8%2B0uxim2B7%2F1Vu6vW8EVkVLEvmRtBSO88wKmlcEPPzeoAHBz64KAaDU80sZzamNSHBoJyPDAjQNU519oi5b0%2FzuWNTKhCrLe6DmK3dHYrbDNNj2EvkrjD2zgR6WwS9lgUwdGQ6ic1u0pkfaS6fodYnnUHCkH1rUD5KhvFpNmi0y96UantHW761tDt7zNdSF07heuSHH6XaidkDJiXeqO4Z9%2FrvWXeS963XfGfevDEQsYhr3IFOE3mtlBv4rzCpB6p0Iq9oOJKaiFy61OfzeSTAGpSwnfJs0hz8jcIK8LJpVq1DTZC7ZkVMrjC3mafBBjqkAZp2P%2BfZIqqu1v2SPyLPHYeiuylbZf0EzYTVZDv85go6R4SlpfYG58DP5qQLz%2BynOuSDm1FxaoffglXP%2BKfyJsfLsjaFsIjeVrQmzd4vYRzsmIb%2FFQZbDt78mZM22IAfXWSEpEPX9p1IiSb742T2f9NUhiLVk6Gfs1oUOZm9XgeyV779fCG4rmX5%2Bk1t5gAOSzV5uKKNVac3gUhL2vFotSWrdUmu&X-Amz-Signature=17f7f48bedd0ade18d6a58ddd328f92c8bf95a405e1f6d03e7168acd66c4bec6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

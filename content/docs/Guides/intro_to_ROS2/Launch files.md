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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYXUAI3N%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHZc3rEQoyjIlc8WQx700i1iMEJRDvvXBwcOc0RzjUAKAiBx7d9Xl2iDU7MN1w27Hvr32ULj47GFALgNCTwnzgQUPSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnA502BggelKIjopTKtwD9fp0LpzpX3FH3o0uPPdl08POYmf2TdwtneKZqZvZ1QP%2BXkFGJEhMgSRER5gmXkJ0bzBw%2F0EuaO1PcfoY72R8CyJApWUFrkOEXR%2FOsHSZexM%2B4Xr1Bb%2B8rZ0eu%2BGuQ%2BdBYwwGY0hgq%2FIt%2FKUbGsx3k4%2Fln8tgMvZV9IyCt8JMXgIyXoFXBkZHiH5mtffM6nwxbRe8Eik1E6fJ6yrtyvb4ge0pqAEwDqkhP04%2FlzpxriQvsJwjImJcZl6LK9U1xBRiq9RddkEkc7kd1SYsDQ9UiCNRhfUGLPm27cw8BMXjsEv1DSJ5DzAFaNJ1BOrclm4cul3JxGzhGwNK7eypRPZiddmeHaKZcaxH38bodd2JgLSrLYNV5HrtHfe4D%2F3G8X8MWPFdTkRYrvEeoW2NnLKK6p9I9Klxdn4kIQrZh8%2B69vA7DVLTcwU8xcM1A%2F3JqaZnZRrJ5LsInTxSRY5yOqeu7OOtBDRFDAzngCzIhLrBpXZVhNn%2FZQ9nN5Bj160cpPnEkTKVPK9csNwALDpPheiV%2BudoLR1K6G4nW8RsuhGfVrlSR5rh8zdy%2FrBi8LGcRDc%2BM3vi%2F0xQrisUchM065wSIug2MgA8LfdZLWYSssnmk%2BrFRyrEThWxiTePJLQwtaq7vgY6pgH4WiuHfBmP8xt3nuyg8fZKitcbOpgsIyk0POln9o0aRM%2BqkWCXMzWc3TB8jiMKo2MuFTP3wUBqPXnMlNNRO3sIEV4qsypgmqqXbCcFIIAmF0KdC1KgCKMpC5E0c%2BCKP4rEljeFDDrwloj8PhyhVRprvX0vlgqrTlyMQVIgfW4a0Wc9%2FayW9Xy1bXk3OGIKPw3R1icgBVHS%2BqJpocgrLm7c%2FyA92O%2Bz&X-Amz-Signature=9a43b099a7887dba64a8d43147b994eb28e0f7fed98776f561d6e57c7d633939&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYXUAI3N%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHZc3rEQoyjIlc8WQx700i1iMEJRDvvXBwcOc0RzjUAKAiBx7d9Xl2iDU7MN1w27Hvr32ULj47GFALgNCTwnzgQUPSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnA502BggelKIjopTKtwD9fp0LpzpX3FH3o0uPPdl08POYmf2TdwtneKZqZvZ1QP%2BXkFGJEhMgSRER5gmXkJ0bzBw%2F0EuaO1PcfoY72R8CyJApWUFrkOEXR%2FOsHSZexM%2B4Xr1Bb%2B8rZ0eu%2BGuQ%2BdBYwwGY0hgq%2FIt%2FKUbGsx3k4%2Fln8tgMvZV9IyCt8JMXgIyXoFXBkZHiH5mtffM6nwxbRe8Eik1E6fJ6yrtyvb4ge0pqAEwDqkhP04%2FlzpxriQvsJwjImJcZl6LK9U1xBRiq9RddkEkc7kd1SYsDQ9UiCNRhfUGLPm27cw8BMXjsEv1DSJ5DzAFaNJ1BOrclm4cul3JxGzhGwNK7eypRPZiddmeHaKZcaxH38bodd2JgLSrLYNV5HrtHfe4D%2F3G8X8MWPFdTkRYrvEeoW2NnLKK6p9I9Klxdn4kIQrZh8%2B69vA7DVLTcwU8xcM1A%2F3JqaZnZRrJ5LsInTxSRY5yOqeu7OOtBDRFDAzngCzIhLrBpXZVhNn%2FZQ9nN5Bj160cpPnEkTKVPK9csNwALDpPheiV%2BudoLR1K6G4nW8RsuhGfVrlSR5rh8zdy%2FrBi8LGcRDc%2BM3vi%2F0xQrisUchM065wSIug2MgA8LfdZLWYSssnmk%2BrFRyrEThWxiTePJLQwtaq7vgY6pgH4WiuHfBmP8xt3nuyg8fZKitcbOpgsIyk0POln9o0aRM%2BqkWCXMzWc3TB8jiMKo2MuFTP3wUBqPXnMlNNRO3sIEV4qsypgmqqXbCcFIIAmF0KdC1KgCKMpC5E0c%2BCKP4rEljeFDDrwloj8PhyhVRprvX0vlgqrTlyMQVIgfW4a0Wc9%2FayW9Xy1bXk3OGIKPw3R1icgBVHS%2BqJpocgrLm7c%2FyA92O%2Bz&X-Amz-Signature=e19ef08cd1f865cd4b57a3ae3ceaed9665f2fb935cdd9cc67d96d906a5695c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYXUAI3N%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHZc3rEQoyjIlc8WQx700i1iMEJRDvvXBwcOc0RzjUAKAiBx7d9Xl2iDU7MN1w27Hvr32ULj47GFALgNCTwnzgQUPSqIBAiN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnA502BggelKIjopTKtwD9fp0LpzpX3FH3o0uPPdl08POYmf2TdwtneKZqZvZ1QP%2BXkFGJEhMgSRER5gmXkJ0bzBw%2F0EuaO1PcfoY72R8CyJApWUFrkOEXR%2FOsHSZexM%2B4Xr1Bb%2B8rZ0eu%2BGuQ%2BdBYwwGY0hgq%2FIt%2FKUbGsx3k4%2Fln8tgMvZV9IyCt8JMXgIyXoFXBkZHiH5mtffM6nwxbRe8Eik1E6fJ6yrtyvb4ge0pqAEwDqkhP04%2FlzpxriQvsJwjImJcZl6LK9U1xBRiq9RddkEkc7kd1SYsDQ9UiCNRhfUGLPm27cw8BMXjsEv1DSJ5DzAFaNJ1BOrclm4cul3JxGzhGwNK7eypRPZiddmeHaKZcaxH38bodd2JgLSrLYNV5HrtHfe4D%2F3G8X8MWPFdTkRYrvEeoW2NnLKK6p9I9Klxdn4kIQrZh8%2B69vA7DVLTcwU8xcM1A%2F3JqaZnZRrJ5LsInTxSRY5yOqeu7OOtBDRFDAzngCzIhLrBpXZVhNn%2FZQ9nN5Bj160cpPnEkTKVPK9csNwALDpPheiV%2BudoLR1K6G4nW8RsuhGfVrlSR5rh8zdy%2FrBi8LGcRDc%2BM3vi%2F0xQrisUchM065wSIug2MgA8LfdZLWYSssnmk%2BrFRyrEThWxiTePJLQwtaq7vgY6pgH4WiuHfBmP8xt3nuyg8fZKitcbOpgsIyk0POln9o0aRM%2BqkWCXMzWc3TB8jiMKo2MuFTP3wUBqPXnMlNNRO3sIEV4qsypgmqqXbCcFIIAmF0KdC1KgCKMpC5E0c%2BCKP4rEljeFDDrwloj8PhyhVRprvX0vlgqrTlyMQVIgfW4a0Wc9%2FayW9Xy1bXk3OGIKPw3R1icgBVHS%2BqJpocgrLm7c%2FyA92O%2Bz&X-Amz-Signature=cf70b3f6127ab804b2aa5ba8199f5c2bdf10cc2ff8d397f1b100b214a8c582ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

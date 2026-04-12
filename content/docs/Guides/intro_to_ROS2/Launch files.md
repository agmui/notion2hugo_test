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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZODONWN%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHe6N39CPm3%2BZORpedWGC57U%2B6BOSzhECivcV5CSLWkBAiBuJFfDdbix8rdIXlsnN00fl1xgxLbewSJo9jHe4U%2FFAir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMSRAuNZn6Vc9IehkMKtwDLbiGlQorjwMNTAfx9NbyiNFvNfBPtOgwVDrnN0t1kBTqd%2BRlE8fhyEoSklmrqrblGc9swciuttIfcXFR02ZrAWKuUWR1FonS6mdRnkYRMCJ7VsmE6tyTjhyIqE2Z3WwYAsmfjSzVimmdHlKZ6lrpg%2FknuYMsg0mm%2B9sb7Li9IZnO6AKi6gLrrR4w%2F6O4EMMHOD0ENQCwOaJswSKaF%2Fdm0yOWQABTD9FHAybgHFKgCKTqe2BfX7QLYOo3biU2uh%2B1WEQw%2FDLAHrzfOvbKMY%2B2DvbZbLusMViJqz5tuoY6%2B3kny%2F73CFGVdaiZMNdO5yzIejCxYcLYFDw3aYfcGdFQe2%2BUfRLaoVFJNURlUZEAKHACgNucOj1ur4IPDVmijkIyFPFQ9oJvpxBYnV1xPn2V5bLPZ%2FNZ4Vsq5bRKH42KlI5mQYTwaFedWIYmXneU7QXQG3T%2F3imlN%2F1IEMVb3xe%2BTGmKwZYDMXhYCjF1x%2FzoT97ze9ADK1%2BXP38FDlgJCk%2FksjB9%2F%2BxpSp0rZMedwrBaVktE%2BYeCiGBW5%2B0sdHyVqueNMJ5PhzfBRVVTNFkrVZ35Ul2LQk%2BrSzyNZFHN1h23yiA9qz1asMs8Y9zKMratFqcchNSLfvgF9%2FdwLywwy4bszgY6pgF2%2FvQc2E8jx2%2FgrjnOxVyot4HJGRMcCyRs3abMmlMoroeKmspGjzSvtBL8RkJi0CUqTVibYLQmkmwKG0tq3Y9D1zgcFIGYV2OnGjNE1Q3WtlPHBuQ4DAyN%2FByXBJOU2mU4XvE8zetk9iWnOQ1SpqaYmqzhNR6404VunhRSg1M8zvdbcehu1X9GUhq39BIMII9XtoJRKEB2rYnduADlJLiW9NqTNsH8&X-Amz-Signature=3d8056e88aaa39a42d153b71df9018d553d28178e92dda41ea9f7007ac8dcf6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZODONWN%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHe6N39CPm3%2BZORpedWGC57U%2B6BOSzhECivcV5CSLWkBAiBuJFfDdbix8rdIXlsnN00fl1xgxLbewSJo9jHe4U%2FFAir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMSRAuNZn6Vc9IehkMKtwDLbiGlQorjwMNTAfx9NbyiNFvNfBPtOgwVDrnN0t1kBTqd%2BRlE8fhyEoSklmrqrblGc9swciuttIfcXFR02ZrAWKuUWR1FonS6mdRnkYRMCJ7VsmE6tyTjhyIqE2Z3WwYAsmfjSzVimmdHlKZ6lrpg%2FknuYMsg0mm%2B9sb7Li9IZnO6AKi6gLrrR4w%2F6O4EMMHOD0ENQCwOaJswSKaF%2Fdm0yOWQABTD9FHAybgHFKgCKTqe2BfX7QLYOo3biU2uh%2B1WEQw%2FDLAHrzfOvbKMY%2B2DvbZbLusMViJqz5tuoY6%2B3kny%2F73CFGVdaiZMNdO5yzIejCxYcLYFDw3aYfcGdFQe2%2BUfRLaoVFJNURlUZEAKHACgNucOj1ur4IPDVmijkIyFPFQ9oJvpxBYnV1xPn2V5bLPZ%2FNZ4Vsq5bRKH42KlI5mQYTwaFedWIYmXneU7QXQG3T%2F3imlN%2F1IEMVb3xe%2BTGmKwZYDMXhYCjF1x%2FzoT97ze9ADK1%2BXP38FDlgJCk%2FksjB9%2F%2BxpSp0rZMedwrBaVktE%2BYeCiGBW5%2B0sdHyVqueNMJ5PhzfBRVVTNFkrVZ35Ul2LQk%2BrSzyNZFHN1h23yiA9qz1asMs8Y9zKMratFqcchNSLfvgF9%2FdwLywwy4bszgY6pgF2%2FvQc2E8jx2%2FgrjnOxVyot4HJGRMcCyRs3abMmlMoroeKmspGjzSvtBL8RkJi0CUqTVibYLQmkmwKG0tq3Y9D1zgcFIGYV2OnGjNE1Q3WtlPHBuQ4DAyN%2FByXBJOU2mU4XvE8zetk9iWnOQ1SpqaYmqzhNR6404VunhRSg1M8zvdbcehu1X9GUhq39BIMII9XtoJRKEB2rYnduADlJLiW9NqTNsH8&X-Amz-Signature=080cb8f12c7ad479ff167272e8dd4f6c66c178a2b4330500d97e128d4a0938d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZODONWN%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHe6N39CPm3%2BZORpedWGC57U%2B6BOSzhECivcV5CSLWkBAiBuJFfDdbix8rdIXlsnN00fl1xgxLbewSJo9jHe4U%2FFAir%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMSRAuNZn6Vc9IehkMKtwDLbiGlQorjwMNTAfx9NbyiNFvNfBPtOgwVDrnN0t1kBTqd%2BRlE8fhyEoSklmrqrblGc9swciuttIfcXFR02ZrAWKuUWR1FonS6mdRnkYRMCJ7VsmE6tyTjhyIqE2Z3WwYAsmfjSzVimmdHlKZ6lrpg%2FknuYMsg0mm%2B9sb7Li9IZnO6AKi6gLrrR4w%2F6O4EMMHOD0ENQCwOaJswSKaF%2Fdm0yOWQABTD9FHAybgHFKgCKTqe2BfX7QLYOo3biU2uh%2B1WEQw%2FDLAHrzfOvbKMY%2B2DvbZbLusMViJqz5tuoY6%2B3kny%2F73CFGVdaiZMNdO5yzIejCxYcLYFDw3aYfcGdFQe2%2BUfRLaoVFJNURlUZEAKHACgNucOj1ur4IPDVmijkIyFPFQ9oJvpxBYnV1xPn2V5bLPZ%2FNZ4Vsq5bRKH42KlI5mQYTwaFedWIYmXneU7QXQG3T%2F3imlN%2F1IEMVb3xe%2BTGmKwZYDMXhYCjF1x%2FzoT97ze9ADK1%2BXP38FDlgJCk%2FksjB9%2F%2BxpSp0rZMedwrBaVktE%2BYeCiGBW5%2B0sdHyVqueNMJ5PhzfBRVVTNFkrVZ35Ul2LQk%2BrSzyNZFHN1h23yiA9qz1asMs8Y9zKMratFqcchNSLfvgF9%2FdwLywwy4bszgY6pgF2%2FvQc2E8jx2%2FgrjnOxVyot4HJGRMcCyRs3abMmlMoroeKmspGjzSvtBL8RkJi0CUqTVibYLQmkmwKG0tq3Y9D1zgcFIGYV2OnGjNE1Q3WtlPHBuQ4DAyN%2FByXBJOU2mU4XvE8zetk9iWnOQ1SpqaYmqzhNR6404VunhRSg1M8zvdbcehu1X9GUhq39BIMII9XtoJRKEB2rYnduADlJLiW9NqTNsH8&X-Amz-Signature=c71b427899fa5c283cd003ac03f7ab19ddf238d99b2e0c90127f59153d8d5236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

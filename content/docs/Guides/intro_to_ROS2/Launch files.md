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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMD6QWL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9Gx3rlpNSadYuJ8vHh6K4OP7Tt6PoP8omPex78i4nOAiAbR1Cv68KqgcBpMVbIBPdeCr4Agl0RtX3rxKvKQvOFHyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs1eVtr9oxr0vHbPjKtwDrbq7%2BYa0kc2z%2B1MVJR6SNkKs2%2BbpyHD53AiviKzAGBntkuYmR2Tv1wrOENfm3qEHdYuju0xEeEpea884180dQOQTgnWq6HbqNiaBxSuvqqeQwGGq5zjY8yzH2a5BFw1C4LU9IRKBnJnfCP%2Fa97TDS8x6CuE45KaxcMPhv%2FdraqqjfTMYdKoohF%2Ft18xPxNZkRBE7EPXDmyAVh%2Fhu79akdROKwu1QJuG6D4f4QzRchNbzexX7ivKvFYR1FGVeCXPqJl3tMW9xMs6aQtC0taBhlDmC3Ugh68hXQHdBSHa7P3Z%2FTwc2nmd9rR7vvhW84kkNAgDECu43g%2BHZuL7N4FTK1sbjtmsags0ODfYHQgn7mhP4BAV2HuHYszIWME%2F3Kg%2FSpcwj1QW28IxlhiJFdumffVbSJDk73dvS0amBghXsWsfGvENDjEvnZxLCE%2FtZSit9uhztsWiu%2F7p5QFr3eV8JmD2oJcoYwrcXYkA2A5Q9yEVRSBnRkuuf9Uvt846Q%2FG1u3XGdwf8QLpXlmYbX03yn9tG%2Be7MiwrS8IBmVfXzsqlFGaZvrMK29LTq9jjoLPWz4M2CdWsGH8Sfn%2FIFoqpMikWec2Vv7TSCNyLUXhKOn7u8GfYdphRq6QS9%2FgSkw%2FbCUwgY6pgE5PaMKbHaOS8Lq9GtsA8xg4XMw%2BoJydrfAbszMTky%2FYHLDQwrmJzETUkzx78p2hMpSv4PjdQHZ7qhasFONYiaaAAzkkGwsUW16l%2Fw%2FTv%2BUwgqXvCjLDU5oTGy1WmO2Ge7NgJoGKzmAzSocMyTQTQhObJ26W84V20timGiufcu7naRs7QTvRX7CW7WEllt17VMnv4CPqcbSNTyWArrG49%2B4ie45GSZ5&X-Amz-Signature=238186de8b9fb31527e78dc80dc54df456fefc3a9201f36909dc82c9699cc5c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMD6QWL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9Gx3rlpNSadYuJ8vHh6K4OP7Tt6PoP8omPex78i4nOAiAbR1Cv68KqgcBpMVbIBPdeCr4Agl0RtX3rxKvKQvOFHyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs1eVtr9oxr0vHbPjKtwDrbq7%2BYa0kc2z%2B1MVJR6SNkKs2%2BbpyHD53AiviKzAGBntkuYmR2Tv1wrOENfm3qEHdYuju0xEeEpea884180dQOQTgnWq6HbqNiaBxSuvqqeQwGGq5zjY8yzH2a5BFw1C4LU9IRKBnJnfCP%2Fa97TDS8x6CuE45KaxcMPhv%2FdraqqjfTMYdKoohF%2Ft18xPxNZkRBE7EPXDmyAVh%2Fhu79akdROKwu1QJuG6D4f4QzRchNbzexX7ivKvFYR1FGVeCXPqJl3tMW9xMs6aQtC0taBhlDmC3Ugh68hXQHdBSHa7P3Z%2FTwc2nmd9rR7vvhW84kkNAgDECu43g%2BHZuL7N4FTK1sbjtmsags0ODfYHQgn7mhP4BAV2HuHYszIWME%2F3Kg%2FSpcwj1QW28IxlhiJFdumffVbSJDk73dvS0amBghXsWsfGvENDjEvnZxLCE%2FtZSit9uhztsWiu%2F7p5QFr3eV8JmD2oJcoYwrcXYkA2A5Q9yEVRSBnRkuuf9Uvt846Q%2FG1u3XGdwf8QLpXlmYbX03yn9tG%2Be7MiwrS8IBmVfXzsqlFGaZvrMK29LTq9jjoLPWz4M2CdWsGH8Sfn%2FIFoqpMikWec2Vv7TSCNyLUXhKOn7u8GfYdphRq6QS9%2FgSkw%2FbCUwgY6pgE5PaMKbHaOS8Lq9GtsA8xg4XMw%2BoJydrfAbszMTky%2FYHLDQwrmJzETUkzx78p2hMpSv4PjdQHZ7qhasFONYiaaAAzkkGwsUW16l%2Fw%2FTv%2BUwgqXvCjLDU5oTGy1WmO2Ge7NgJoGKzmAzSocMyTQTQhObJ26W84V20timGiufcu7naRs7QTvRX7CW7WEllt17VMnv4CPqcbSNTyWArrG49%2B4ie45GSZ5&X-Amz-Signature=e859053eaf7051a05d08724586e020bd2f60cb4b4ce2b29e0e8560aae7f8742a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLMD6QWL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF9Gx3rlpNSadYuJ8vHh6K4OP7Tt6PoP8omPex78i4nOAiAbR1Cv68KqgcBpMVbIBPdeCr4Agl0RtX3rxKvKQvOFHyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs1eVtr9oxr0vHbPjKtwDrbq7%2BYa0kc2z%2B1MVJR6SNkKs2%2BbpyHD53AiviKzAGBntkuYmR2Tv1wrOENfm3qEHdYuju0xEeEpea884180dQOQTgnWq6HbqNiaBxSuvqqeQwGGq5zjY8yzH2a5BFw1C4LU9IRKBnJnfCP%2Fa97TDS8x6CuE45KaxcMPhv%2FdraqqjfTMYdKoohF%2Ft18xPxNZkRBE7EPXDmyAVh%2Fhu79akdROKwu1QJuG6D4f4QzRchNbzexX7ivKvFYR1FGVeCXPqJl3tMW9xMs6aQtC0taBhlDmC3Ugh68hXQHdBSHa7P3Z%2FTwc2nmd9rR7vvhW84kkNAgDECu43g%2BHZuL7N4FTK1sbjtmsags0ODfYHQgn7mhP4BAV2HuHYszIWME%2F3Kg%2FSpcwj1QW28IxlhiJFdumffVbSJDk73dvS0amBghXsWsfGvENDjEvnZxLCE%2FtZSit9uhztsWiu%2F7p5QFr3eV8JmD2oJcoYwrcXYkA2A5Q9yEVRSBnRkuuf9Uvt846Q%2FG1u3XGdwf8QLpXlmYbX03yn9tG%2Be7MiwrS8IBmVfXzsqlFGaZvrMK29LTq9jjoLPWz4M2CdWsGH8Sfn%2FIFoqpMikWec2Vv7TSCNyLUXhKOn7u8GfYdphRq6QS9%2FgSkw%2FbCUwgY6pgE5PaMKbHaOS8Lq9GtsA8xg4XMw%2BoJydrfAbszMTky%2FYHLDQwrmJzETUkzx78p2hMpSv4PjdQHZ7qhasFONYiaaAAzkkGwsUW16l%2Fw%2FTv%2BUwgqXvCjLDU5oTGy1WmO2Ge7NgJoGKzmAzSocMyTQTQhObJ26W84V20timGiufcu7naRs7QTvRX7CW7WEllt17VMnv4CPqcbSNTyWArrG49%2B4ie45GSZ5&X-Amz-Signature=599c50ff23be9de3ccb32d201d5ff24001a31c2a1cc18c036431d48b8cf9b1cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMEYFHIG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyf3Ok%2FzeUsQ1uKCpNdvZaeY%2Fl0hDqrxI2RP6xe5PtuwIhAPiJfVEIu%2FEcSfo3wVv5Nyc2cuEB2Bz3Igc1Y5MZ39KBKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhn0GukdEhHp74oC8q3ANAnh3Wz23Y5YffoDONXqYxSlCO21kTxSwEno6VLBppNxj47ukEWmGHwzGXAStXrfrZLoDml5YN94OuaUKYc8NPN4i0dlza4APy5s4UZh6UHC6AdJE64kjDCKbfMpFiavBAqxl2rfvb21D4y40OGGxEi%2Bva4H80YOAd4KirF%2BiP5W49U0gZ9uFwXUB7ko7acVuKKfgGNrdLwjbPiFz0E4sS%2BlhnrTuntdaP5lz7Wks7su4dULzCuUJSY%2BoVRIQLo1SBau3JI2xNEz5aV3pSs%2BSCDB%2FInjTndCgJ%2F04yR6SjhA0RtUclfqbkJ11prH3eaf6SX73FMgoqp3Bv5YIxlz%2BWglvUtT7SBmHc2bTQBoZ2tmF3xjSjlQJg9p5kJtf%2BkV9f17mOXu9FErDMwBTmBroUYjcdB0ZsqFxn4AN1Y6C1igbv1ZAiOe9au%2BpBw4SXyekGVDGAPNrLeoxIR14UcIC0ZWRvfVPDS0%2Bq%2Fe1TxpxJOwkiXyf%2BUcupYp77tGiuzWUpFVfxP7KXrTLQ%2Bc2uMEzMmXnxe4gem03emvzdIei01792E4ZcusylgeI%2BOmb89VbF94T51IpQTP0xjMwXSKJTW6FgXVl7J5a1g4x%2BAV8MVq0JWQkKnLkkD4RaGTC%2F5PXABjqkAcSASTqUH0KgFC46R1t1IuxalnpFdvHHSRujuuaNAYChQA%2FOCpdLBX0xNqhHZtoB8j0bqZoNOyUkV4LCo8wb7QXb4mr%2B00BIEFKL2IQtXb%2Far8a5dPEEuefS7AuDI4XGuOX5gXzC4vGklr6rrgSf81WTxUH7P%2FpP4jF%2FSBoiPSZx4BYiVFgZ8xUy40bB%2BH0d2fFcoXVl674RmDfdagk2MpAGjMXa&X-Amz-Signature=bbdbe7bfec37a5b7d6ab18081119b23d4fe0249d6d7315bc076d8662f05e4991&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMEYFHIG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyf3Ok%2FzeUsQ1uKCpNdvZaeY%2Fl0hDqrxI2RP6xe5PtuwIhAPiJfVEIu%2FEcSfo3wVv5Nyc2cuEB2Bz3Igc1Y5MZ39KBKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhn0GukdEhHp74oC8q3ANAnh3Wz23Y5YffoDONXqYxSlCO21kTxSwEno6VLBppNxj47ukEWmGHwzGXAStXrfrZLoDml5YN94OuaUKYc8NPN4i0dlza4APy5s4UZh6UHC6AdJE64kjDCKbfMpFiavBAqxl2rfvb21D4y40OGGxEi%2Bva4H80YOAd4KirF%2BiP5W49U0gZ9uFwXUB7ko7acVuKKfgGNrdLwjbPiFz0E4sS%2BlhnrTuntdaP5lz7Wks7su4dULzCuUJSY%2BoVRIQLo1SBau3JI2xNEz5aV3pSs%2BSCDB%2FInjTndCgJ%2F04yR6SjhA0RtUclfqbkJ11prH3eaf6SX73FMgoqp3Bv5YIxlz%2BWglvUtT7SBmHc2bTQBoZ2tmF3xjSjlQJg9p5kJtf%2BkV9f17mOXu9FErDMwBTmBroUYjcdB0ZsqFxn4AN1Y6C1igbv1ZAiOe9au%2BpBw4SXyekGVDGAPNrLeoxIR14UcIC0ZWRvfVPDS0%2Bq%2Fe1TxpxJOwkiXyf%2BUcupYp77tGiuzWUpFVfxP7KXrTLQ%2Bc2uMEzMmXnxe4gem03emvzdIei01792E4ZcusylgeI%2BOmb89VbF94T51IpQTP0xjMwXSKJTW6FgXVl7J5a1g4x%2BAV8MVq0JWQkKnLkkD4RaGTC%2F5PXABjqkAcSASTqUH0KgFC46R1t1IuxalnpFdvHHSRujuuaNAYChQA%2FOCpdLBX0xNqhHZtoB8j0bqZoNOyUkV4LCo8wb7QXb4mr%2B00BIEFKL2IQtXb%2Far8a5dPEEuefS7AuDI4XGuOX5gXzC4vGklr6rrgSf81WTxUH7P%2FpP4jF%2FSBoiPSZx4BYiVFgZ8xUy40bB%2BH0d2fFcoXVl674RmDfdagk2MpAGjMXa&X-Amz-Signature=40c76b74e51f361acf01aa8952bd3ae4c7f338b73f662f81a734a22c31ac54aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMEYFHIG%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T033414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyf3Ok%2FzeUsQ1uKCpNdvZaeY%2Fl0hDqrxI2RP6xe5PtuwIhAPiJfVEIu%2FEcSfo3wVv5Nyc2cuEB2Bz3Igc1Y5MZ39KBKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhn0GukdEhHp74oC8q3ANAnh3Wz23Y5YffoDONXqYxSlCO21kTxSwEno6VLBppNxj47ukEWmGHwzGXAStXrfrZLoDml5YN94OuaUKYc8NPN4i0dlza4APy5s4UZh6UHC6AdJE64kjDCKbfMpFiavBAqxl2rfvb21D4y40OGGxEi%2Bva4H80YOAd4KirF%2BiP5W49U0gZ9uFwXUB7ko7acVuKKfgGNrdLwjbPiFz0E4sS%2BlhnrTuntdaP5lz7Wks7su4dULzCuUJSY%2BoVRIQLo1SBau3JI2xNEz5aV3pSs%2BSCDB%2FInjTndCgJ%2F04yR6SjhA0RtUclfqbkJ11prH3eaf6SX73FMgoqp3Bv5YIxlz%2BWglvUtT7SBmHc2bTQBoZ2tmF3xjSjlQJg9p5kJtf%2BkV9f17mOXu9FErDMwBTmBroUYjcdB0ZsqFxn4AN1Y6C1igbv1ZAiOe9au%2BpBw4SXyekGVDGAPNrLeoxIR14UcIC0ZWRvfVPDS0%2Bq%2Fe1TxpxJOwkiXyf%2BUcupYp77tGiuzWUpFVfxP7KXrTLQ%2Bc2uMEzMmXnxe4gem03emvzdIei01792E4ZcusylgeI%2BOmb89VbF94T51IpQTP0xjMwXSKJTW6FgXVl7J5a1g4x%2BAV8MVq0JWQkKnLkkD4RaGTC%2F5PXABjqkAcSASTqUH0KgFC46R1t1IuxalnpFdvHHSRujuuaNAYChQA%2FOCpdLBX0xNqhHZtoB8j0bqZoNOyUkV4LCo8wb7QXb4mr%2B00BIEFKL2IQtXb%2Far8a5dPEEuefS7AuDI4XGuOX5gXzC4vGklr6rrgSf81WTxUH7P%2FpP4jF%2FSBoiPSZx4BYiVFgZ8xUy40bB%2BH0d2fFcoXVl674RmDfdagk2MpAGjMXa&X-Amz-Signature=4df09e33d5803e3f05efe851bb80b8891088919b87361df15a966dd2ab2acc0f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYOQCLL%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvsKfl2HK2biJzxIApWa1334WxxzUiRNta5PFsLaXd9AiEAlywUZWXUShMNWXvjpWaeMVGn9i62qp3jkJ3L5PFk10IqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1ikRejqpm01eGjDircA5T%2FxtV5cckmHsCri58v5oQ7ytp5D44BH53OVYMeqSv2BL3ewI2wZsXWXLIS%2FKH8y3uavzMfUQpcHej7K75hmek99H%2B8BV5JQLab0%2Fj%2F96FRabXT3mS%2Ff2xvzEWEv2RSuHH%2Bp76nvVuDUJoubHZ4Qh9%2F6K7%2FHd%2FRoPOycvt%2FkLIYCX%2F0fUMnCC2tCDeY%2ByUzK9J%2F%2BfKRpW31P9mticyC96e2Xlu8Yh5%2Fr5ACDz4XqgZLSnPwZZysBmkUYWpWDqHl7NIugNcina%2Bqp%2BF7nfdlomry6tc1YJ3KJop0tklk9ZqLfqGufV0gTJNb6KizCj4wNdwn2e1%2Fqy55IRVo%2BgWfAsLOSDlbcM95tYoIc4e%2BJVffyfuPu%2FcusAnW%2FmJfzPZFjr%2FcyL2AltefR94qcefJpU%2BBFX48UH0Q1k2N8eP5qT%2BrADZnTctXlQzLtATWoF1xo1WHx2FCc6ozq6pUs10TEZ3vOhIiZHHpDlDa230OyTuWzR4p1%2F12xWSGYsD5dpJe1lp9c%2FYDY6fkz7IUNkQdaSTbOPhX01F9wq28096EoPF96c%2BsBx88dQ0Do8lNeC%2FpW2zby0093cIjgZrtB%2BuvhWj%2BgfcmN4%2Bc0yufhRNfXpZrjNtriB1lF59pcjiJMO2l97wGOqUB0TT7AVus1WeKa5fX02iuVM9kJ0sAP3C06SWxjl3kgurdMzxUrnN7cDqArvgvzJ%2BBM6Lia0b0HLupCFl07YIczbiMGyaybwhsfKEnG1gsqn%2BG2fIbXR2eqqbZindxb7gGbla9y2Cgl1vkj1nsx2oLyd7byexmvSV5REgxJ6RrMs6H0vHiSszGj04A6CnnLBG4kObCaNckVfXXNEKr68f%2BEvtH0Tsz&X-Amz-Signature=fe09ecdac697e2fd06704411590a487eeac2a6f6dd693bc378fe503f34dca85e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYOQCLL%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvsKfl2HK2biJzxIApWa1334WxxzUiRNta5PFsLaXd9AiEAlywUZWXUShMNWXvjpWaeMVGn9i62qp3jkJ3L5PFk10IqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1ikRejqpm01eGjDircA5T%2FxtV5cckmHsCri58v5oQ7ytp5D44BH53OVYMeqSv2BL3ewI2wZsXWXLIS%2FKH8y3uavzMfUQpcHej7K75hmek99H%2B8BV5JQLab0%2Fj%2F96FRabXT3mS%2Ff2xvzEWEv2RSuHH%2Bp76nvVuDUJoubHZ4Qh9%2F6K7%2FHd%2FRoPOycvt%2FkLIYCX%2F0fUMnCC2tCDeY%2ByUzK9J%2F%2BfKRpW31P9mticyC96e2Xlu8Yh5%2Fr5ACDz4XqgZLSnPwZZysBmkUYWpWDqHl7NIugNcina%2Bqp%2BF7nfdlomry6tc1YJ3KJop0tklk9ZqLfqGufV0gTJNb6KizCj4wNdwn2e1%2Fqy55IRVo%2BgWfAsLOSDlbcM95tYoIc4e%2BJVffyfuPu%2FcusAnW%2FmJfzPZFjr%2FcyL2AltefR94qcefJpU%2BBFX48UH0Q1k2N8eP5qT%2BrADZnTctXlQzLtATWoF1xo1WHx2FCc6ozq6pUs10TEZ3vOhIiZHHpDlDa230OyTuWzR4p1%2F12xWSGYsD5dpJe1lp9c%2FYDY6fkz7IUNkQdaSTbOPhX01F9wq28096EoPF96c%2BsBx88dQ0Do8lNeC%2FpW2zby0093cIjgZrtB%2BuvhWj%2BgfcmN4%2Bc0yufhRNfXpZrjNtriB1lF59pcjiJMO2l97wGOqUB0TT7AVus1WeKa5fX02iuVM9kJ0sAP3C06SWxjl3kgurdMzxUrnN7cDqArvgvzJ%2BBM6Lia0b0HLupCFl07YIczbiMGyaybwhsfKEnG1gsqn%2BG2fIbXR2eqqbZindxb7gGbla9y2Cgl1vkj1nsx2oLyd7byexmvSV5REgxJ6RrMs6H0vHiSszGj04A6CnnLBG4kObCaNckVfXXNEKr68f%2BEvtH0Tsz&X-Amz-Signature=11f1748c4816e989736c711d9209aed8b99d93f3f7e9b869c9262aca3e4b223d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROYOQCLL%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvsKfl2HK2biJzxIApWa1334WxxzUiRNta5PFsLaXd9AiEAlywUZWXUShMNWXvjpWaeMVGn9i62qp3jkJ3L5PFk10IqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1ikRejqpm01eGjDircA5T%2FxtV5cckmHsCri58v5oQ7ytp5D44BH53OVYMeqSv2BL3ewI2wZsXWXLIS%2FKH8y3uavzMfUQpcHej7K75hmek99H%2B8BV5JQLab0%2Fj%2F96FRabXT3mS%2Ff2xvzEWEv2RSuHH%2Bp76nvVuDUJoubHZ4Qh9%2F6K7%2FHd%2FRoPOycvt%2FkLIYCX%2F0fUMnCC2tCDeY%2ByUzK9J%2F%2BfKRpW31P9mticyC96e2Xlu8Yh5%2Fr5ACDz4XqgZLSnPwZZysBmkUYWpWDqHl7NIugNcina%2Bqp%2BF7nfdlomry6tc1YJ3KJop0tklk9ZqLfqGufV0gTJNb6KizCj4wNdwn2e1%2Fqy55IRVo%2BgWfAsLOSDlbcM95tYoIc4e%2BJVffyfuPu%2FcusAnW%2FmJfzPZFjr%2FcyL2AltefR94qcefJpU%2BBFX48UH0Q1k2N8eP5qT%2BrADZnTctXlQzLtATWoF1xo1WHx2FCc6ozq6pUs10TEZ3vOhIiZHHpDlDa230OyTuWzR4p1%2F12xWSGYsD5dpJe1lp9c%2FYDY6fkz7IUNkQdaSTbOPhX01F9wq28096EoPF96c%2BsBx88dQ0Do8lNeC%2FpW2zby0093cIjgZrtB%2BuvhWj%2BgfcmN4%2Bc0yufhRNfXpZrjNtriB1lF59pcjiJMO2l97wGOqUB0TT7AVus1WeKa5fX02iuVM9kJ0sAP3C06SWxjl3kgurdMzxUrnN7cDqArvgvzJ%2BBM6Lia0b0HLupCFl07YIczbiMGyaybwhsfKEnG1gsqn%2BG2fIbXR2eqqbZindxb7gGbla9y2Cgl1vkj1nsx2oLyd7byexmvSV5REgxJ6RrMs6H0vHiSszGj04A6CnnLBG4kObCaNckVfXXNEKr68f%2BEvtH0Tsz&X-Amz-Signature=9209cfdfd0b96ce37e978acab28d2a7c2909297756bcca0c16ffd2f2d21850a1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIKW7VDZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkdJsod%2B37%2BTKhIesO%2BdSQLOpwxmJvGqmxf63ryJpSawIgFatxVPxrdmlpN54%2FaHs94oWoROVwjRoTVQXngpI4l6kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCI5sODKsUGmCmjw6yrcAzWKoirjD14Pz1yKfCl6aiEeicSfK%2FMgTRr0ucjABZkyQqwyRsVaivqSh2cmg5NBo8JTNr1kQwu%2F4tTdLldWy714wUvYy6wsUMTB76E9BuPPsHiZj3AshOurEKAz1pA0xPFrrFU54hfNPZyxQCr8bzi4gYQchvc0C8jARa3amBPrcqBfc1ITVHjyms96XlJoN5dvfVnuSafsxiQtuIEI0YJa6VQzMmf1mCMQj8x12H%2F1pQgwjUZl8zfZsGs2Y68U3EZxMg8%2Fe7RePOsj3KxWvTUykarC3tZUGN0Ua%2FW8SVpBR1GWXvAoybGVEQAiilYkKD4N4v%2BKPsdcPHUVbVe62Wu8D7JPzWjtqw1Mcn3Kag3t%2FrIVUxFTDt7wedTs6VRK%2FvrrzyEe7BrdlacgbmdZPbRIwlYLFZNh39KvjCXJw9m%2BdO%2BeYj8Eu6O11BZn9kq4LXUT9gKSpKAh66VRQkcXzqb77lNiSDaZUQBQ9iwRVNmPHqKOAbTPzL2tugoyAbezqI0ko8RVXBzuprG3F0ev0RHMYyAjkYjmBpQY4eSjNsVuFRoGbkDG9xwY7EJijW%2B8hxMNi7uVcGDqbsaZqckQHPGPoOWig%2Fp1jP2seDMGf3AbDpFrhT7wJgVdrfbYMOvjob0GOqUBtaw7onpJa%2BpGo7GpfPAPcPx9C3qBo%2FlAbnSpoCxZJ5cLe3ZIR0RgPiO3yOa1SikZwxQvincXzuz5vFfE26VWCq24DChtdEtMwo53NBR4QXr0gcMyr6PIfQ%2F3qZQulbDFF8y99ANrzQ5IlQBjEJK1m2zMqofK0pZeqZoBiv99Zjp77yN5vDhB0fxdqLfCXEOnTUejyiJABK1xpJROl9uDZ2T53zaY&X-Amz-Signature=f64046678627a02467d83bae6d1a33d1d6d31d884df0552186549b94ed7f43f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIKW7VDZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkdJsod%2B37%2BTKhIesO%2BdSQLOpwxmJvGqmxf63ryJpSawIgFatxVPxrdmlpN54%2FaHs94oWoROVwjRoTVQXngpI4l6kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCI5sODKsUGmCmjw6yrcAzWKoirjD14Pz1yKfCl6aiEeicSfK%2FMgTRr0ucjABZkyQqwyRsVaivqSh2cmg5NBo8JTNr1kQwu%2F4tTdLldWy714wUvYy6wsUMTB76E9BuPPsHiZj3AshOurEKAz1pA0xPFrrFU54hfNPZyxQCr8bzi4gYQchvc0C8jARa3amBPrcqBfc1ITVHjyms96XlJoN5dvfVnuSafsxiQtuIEI0YJa6VQzMmf1mCMQj8x12H%2F1pQgwjUZl8zfZsGs2Y68U3EZxMg8%2Fe7RePOsj3KxWvTUykarC3tZUGN0Ua%2FW8SVpBR1GWXvAoybGVEQAiilYkKD4N4v%2BKPsdcPHUVbVe62Wu8D7JPzWjtqw1Mcn3Kag3t%2FrIVUxFTDt7wedTs6VRK%2FvrrzyEe7BrdlacgbmdZPbRIwlYLFZNh39KvjCXJw9m%2BdO%2BeYj8Eu6O11BZn9kq4LXUT9gKSpKAh66VRQkcXzqb77lNiSDaZUQBQ9iwRVNmPHqKOAbTPzL2tugoyAbezqI0ko8RVXBzuprG3F0ev0RHMYyAjkYjmBpQY4eSjNsVuFRoGbkDG9xwY7EJijW%2B8hxMNi7uVcGDqbsaZqckQHPGPoOWig%2Fp1jP2seDMGf3AbDpFrhT7wJgVdrfbYMOvjob0GOqUBtaw7onpJa%2BpGo7GpfPAPcPx9C3qBo%2FlAbnSpoCxZJ5cLe3ZIR0RgPiO3yOa1SikZwxQvincXzuz5vFfE26VWCq24DChtdEtMwo53NBR4QXr0gcMyr6PIfQ%2F3qZQulbDFF8y99ANrzQ5IlQBjEJK1m2zMqofK0pZeqZoBiv99Zjp77yN5vDhB0fxdqLfCXEOnTUejyiJABK1xpJROl9uDZ2T53zaY&X-Amz-Signature=c3544cfb3aa423661db914307790faec0696811a595929b7eca8d8e67999bc6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIKW7VDZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkdJsod%2B37%2BTKhIesO%2BdSQLOpwxmJvGqmxf63ryJpSawIgFatxVPxrdmlpN54%2FaHs94oWoROVwjRoTVQXngpI4l6kqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCI5sODKsUGmCmjw6yrcAzWKoirjD14Pz1yKfCl6aiEeicSfK%2FMgTRr0ucjABZkyQqwyRsVaivqSh2cmg5NBo8JTNr1kQwu%2F4tTdLldWy714wUvYy6wsUMTB76E9BuPPsHiZj3AshOurEKAz1pA0xPFrrFU54hfNPZyxQCr8bzi4gYQchvc0C8jARa3amBPrcqBfc1ITVHjyms96XlJoN5dvfVnuSafsxiQtuIEI0YJa6VQzMmf1mCMQj8x12H%2F1pQgwjUZl8zfZsGs2Y68U3EZxMg8%2Fe7RePOsj3KxWvTUykarC3tZUGN0Ua%2FW8SVpBR1GWXvAoybGVEQAiilYkKD4N4v%2BKPsdcPHUVbVe62Wu8D7JPzWjtqw1Mcn3Kag3t%2FrIVUxFTDt7wedTs6VRK%2FvrrzyEe7BrdlacgbmdZPbRIwlYLFZNh39KvjCXJw9m%2BdO%2BeYj8Eu6O11BZn9kq4LXUT9gKSpKAh66VRQkcXzqb77lNiSDaZUQBQ9iwRVNmPHqKOAbTPzL2tugoyAbezqI0ko8RVXBzuprG3F0ev0RHMYyAjkYjmBpQY4eSjNsVuFRoGbkDG9xwY7EJijW%2B8hxMNi7uVcGDqbsaZqckQHPGPoOWig%2Fp1jP2seDMGf3AbDpFrhT7wJgVdrfbYMOvjob0GOqUBtaw7onpJa%2BpGo7GpfPAPcPx9C3qBo%2FlAbnSpoCxZJ5cLe3ZIR0RgPiO3yOa1SikZwxQvincXzuz5vFfE26VWCq24DChtdEtMwo53NBR4QXr0gcMyr6PIfQ%2F3qZQulbDFF8y99ANrzQ5IlQBjEJK1m2zMqofK0pZeqZoBiv99Zjp77yN5vDhB0fxdqLfCXEOnTUejyiJABK1xpJROl9uDZ2T53zaY&X-Amz-Signature=2b06e3e941145806a88fd3c44ebfe227e7d05cafa88113f11f83af0400f35244&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

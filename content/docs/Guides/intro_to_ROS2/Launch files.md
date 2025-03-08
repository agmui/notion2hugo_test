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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYJPNPI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICThs%2BEtY9CEzNtWrRROiY99RgHuXSxuEDcx6aI18efPAiA4WwnKpF6PJIWSxB1SGSNs2z9n7%2Bia2qb5uILzMeo88ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMiHNzD42E2EiaQJ3oKtwDOPjk%2BjjkSVoKihsTayA5TttVjM4jHAgQnhYQR%2FWTSBPgfkfj%2FobIKbLVQO7ZGxZ%2F7diM%2FKduEpkjXNuHJANcFxdl9hJu7cx%2By8zyfbxXodI%2BJnmvFyAIPl3MEab72sGoz24d7FBk5ePwrF832JEnAaOQrcpMLRzVspvVzwqAaPQUpr%2Fm3rTuTgc4F0slTA209WVbJg%2FlPhs36%2FfCadrB6O8Xj2dB5e8FA18Hr%2F4FmBgmbBB2VV8TOBg%2FJP72FSCkm%2B6%2Fhc3dc%2FNqffUxdVSMSBK7U1T6h1WV8nkkx0L6Pl2MCEvynYvWB4ynOLTKO%2FJ3WycuZcKrpb8J31uijhjoI0qI1tKY%2BnzqvZ0X%2BmKTNqsMkefVYYG%2BknwiD2PDr2mwmQigOEhBCjf075yKNuzCFOYoJ%2FnF3yCGuVFLA7UFZeF%2BGLJ4Xj6GvI4dVQxZ1AxQsqLrYQVj6dOiqO1Fi81LR6bRQznXOUNzKpmSUUxqguyJ%2FKWh7flMkkzJr5O2lqYIlIrwJ6Lnzp1Sg%2FjbwHy3UMK0yi3U%2BAzOuQCf2yQc0Dux9%2FiKv%2B88n1JTw4Ihodi5meB2pf9OJePp5tPhHFrY0UJj9IKlaMISwtMktYROYVjvTIjTfA9azm0u0oEwmr2uvgY6pgG%2BT7bksAZr0yW32BwLs6Dqxh0yizVLP3fjzI5bhS9to1erWHN4xFxzy2BFp4dVgqpLjag%2BnHe4tBStwav8qfJqpeL21PUiefUf3P2DpBPkG8ILOqSgyOQ5IbXkq2UYhfTfhiqgKhlNLzN%2B8fM7t%2BGZqLCac1tBiMZq%2FV8VFABYfmf8TshBi1WNlMvXOPunhRj6n9%2Fy346qcayb6Eqi880FNOzoaenl&X-Amz-Signature=fcfceb7d6e9240426b125539d4e560ceea133f67c13ec6c4b1090efbdf04d9f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYJPNPI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICThs%2BEtY9CEzNtWrRROiY99RgHuXSxuEDcx6aI18efPAiA4WwnKpF6PJIWSxB1SGSNs2z9n7%2Bia2qb5uILzMeo88ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMiHNzD42E2EiaQJ3oKtwDOPjk%2BjjkSVoKihsTayA5TttVjM4jHAgQnhYQR%2FWTSBPgfkfj%2FobIKbLVQO7ZGxZ%2F7diM%2FKduEpkjXNuHJANcFxdl9hJu7cx%2By8zyfbxXodI%2BJnmvFyAIPl3MEab72sGoz24d7FBk5ePwrF832JEnAaOQrcpMLRzVspvVzwqAaPQUpr%2Fm3rTuTgc4F0slTA209WVbJg%2FlPhs36%2FfCadrB6O8Xj2dB5e8FA18Hr%2F4FmBgmbBB2VV8TOBg%2FJP72FSCkm%2B6%2Fhc3dc%2FNqffUxdVSMSBK7U1T6h1WV8nkkx0L6Pl2MCEvynYvWB4ynOLTKO%2FJ3WycuZcKrpb8J31uijhjoI0qI1tKY%2BnzqvZ0X%2BmKTNqsMkefVYYG%2BknwiD2PDr2mwmQigOEhBCjf075yKNuzCFOYoJ%2FnF3yCGuVFLA7UFZeF%2BGLJ4Xj6GvI4dVQxZ1AxQsqLrYQVj6dOiqO1Fi81LR6bRQznXOUNzKpmSUUxqguyJ%2FKWh7flMkkzJr5O2lqYIlIrwJ6Lnzp1Sg%2FjbwHy3UMK0yi3U%2BAzOuQCf2yQc0Dux9%2FiKv%2B88n1JTw4Ihodi5meB2pf9OJePp5tPhHFrY0UJj9IKlaMISwtMktYROYVjvTIjTfA9azm0u0oEwmr2uvgY6pgG%2BT7bksAZr0yW32BwLs6Dqxh0yizVLP3fjzI5bhS9to1erWHN4xFxzy2BFp4dVgqpLjag%2BnHe4tBStwav8qfJqpeL21PUiefUf3P2DpBPkG8ILOqSgyOQ5IbXkq2UYhfTfhiqgKhlNLzN%2B8fM7t%2BGZqLCac1tBiMZq%2FV8VFABYfmf8TshBi1WNlMvXOPunhRj6n9%2Fy346qcayb6Eqi880FNOzoaenl&X-Amz-Signature=ef0264e43ab9ff3076b9bc68fbe54b0656313d5f9264654ad0c470aea96a776c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GYJPNPI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T014527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCICThs%2BEtY9CEzNtWrRROiY99RgHuXSxuEDcx6aI18efPAiA4WwnKpF6PJIWSxB1SGSNs2z9n7%2Bia2qb5uILzMeo88ir%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMiHNzD42E2EiaQJ3oKtwDOPjk%2BjjkSVoKihsTayA5TttVjM4jHAgQnhYQR%2FWTSBPgfkfj%2FobIKbLVQO7ZGxZ%2F7diM%2FKduEpkjXNuHJANcFxdl9hJu7cx%2By8zyfbxXodI%2BJnmvFyAIPl3MEab72sGoz24d7FBk5ePwrF832JEnAaOQrcpMLRzVspvVzwqAaPQUpr%2Fm3rTuTgc4F0slTA209WVbJg%2FlPhs36%2FfCadrB6O8Xj2dB5e8FA18Hr%2F4FmBgmbBB2VV8TOBg%2FJP72FSCkm%2B6%2Fhc3dc%2FNqffUxdVSMSBK7U1T6h1WV8nkkx0L6Pl2MCEvynYvWB4ynOLTKO%2FJ3WycuZcKrpb8J31uijhjoI0qI1tKY%2BnzqvZ0X%2BmKTNqsMkefVYYG%2BknwiD2PDr2mwmQigOEhBCjf075yKNuzCFOYoJ%2FnF3yCGuVFLA7UFZeF%2BGLJ4Xj6GvI4dVQxZ1AxQsqLrYQVj6dOiqO1Fi81LR6bRQznXOUNzKpmSUUxqguyJ%2FKWh7flMkkzJr5O2lqYIlIrwJ6Lnzp1Sg%2FjbwHy3UMK0yi3U%2BAzOuQCf2yQc0Dux9%2FiKv%2B88n1JTw4Ihodi5meB2pf9OJePp5tPhHFrY0UJj9IKlaMISwtMktYROYVjvTIjTfA9azm0u0oEwmr2uvgY6pgG%2BT7bksAZr0yW32BwLs6Dqxh0yizVLP3fjzI5bhS9to1erWHN4xFxzy2BFp4dVgqpLjag%2BnHe4tBStwav8qfJqpeL21PUiefUf3P2DpBPkG8ILOqSgyOQ5IbXkq2UYhfTfhiqgKhlNLzN%2B8fM7t%2BGZqLCac1tBiMZq%2FV8VFABYfmf8TshBi1WNlMvXOPunhRj6n9%2Fy346qcayb6Eqi880FNOzoaenl&X-Amz-Signature=bfba75e811ff45bba0fbecdfe5c2ef79f96de6b02d6fd9e99549aff0bedfe11a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

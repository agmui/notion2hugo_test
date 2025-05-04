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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5GS63M%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCkSyNdxGQTF0jNtzaF1htQKOpCZAVTimQn%2FU1RuYHMHwIgdblRit8gFerag0Z07RAqCWy%2B4bS%2FxP3Qz2GkbWrhqLwqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdhrCxwT2d6GYhYhSrcAxhTnRZswUFnWfap4bu6vA0GRDznmNtU7DY0ASN7QhVL%2FCV96niCR7w4rJ3xTmHWEDMV3DnoRtLD6GAw9RF%2BCqOqV7BUiZVyCTAkqkHukpko%2Fo9H%2F0fIJdOdJJ5majuvY0DB0PozwrWRAO9lBNsfeICJO60X%2FU%2B7ZknC7ACUyGsakUVEwTXvhtvEcfTxdi%2BctpKsvoxqfe2I1zhdOmHTKfyHyhUZJJNY4H014LdTJceOgHUZqxnBSeozScopRtanpMDCtCbhUGCyLjUzAZW4%2BRTvpceNDiXoKjKDBfWSV7LQf1vjSjuYRQD%2FjCXKBPSjfqu84iyDeNt1y3fUcrBTSdyr7seO4p2u9RYYiNyGLj5UJNOa1bcnSXtiFrNopLaVRQHgTXdtgj7oTPz4OGMPCivuQPX%2BjZxWTB2S4b2ObStvKPcX3P5JzboH%2BM6yaTqfdKodMSxyyM%2BXIdj5gO5nzzSbOqsY0kr6ra8we0FyM%2Bj5AXLwifWjQeim3V8%2BbEVOs98fokBM9dWcCzkQgXEyCw%2BBmRG%2Bw5Sd5%2BxyZJmt%2BuSHOx%2Fazfj5FbblKmv4WjKhhIo7fKyXiq3MhC7WUZu2QPXDkL9UVxzMh3Vf%2FU6srkte2fnoICgXn5YSYAKoML3Y2sAGOqUBUOuTLt09CoY%2BKsqf%2F%2FVTBgjPmwKMREaL7vOjRWsjvf2YjYEQwYJqtJkkLxCN4ifMKG%2FnBJvYbgvC1sAtULLF5ToZDdFJvCcN8M6O%2BJfCcwdRM2zml7NoOY8mIQkRxcWUxAayQ2iOtrxQf5yeNcPE%2B%2BzjK5dtRJVgYphBuXsP1g8EsAVWNmn9ec6HOl0YCUD6cYKWuW2JqJe2GuXU065fgZgJVtCB&X-Amz-Signature=0f457974e29bb55d32056a0842bf16a39f01bcd545713c262ad35e2751f9e83a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5GS63M%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCkSyNdxGQTF0jNtzaF1htQKOpCZAVTimQn%2FU1RuYHMHwIgdblRit8gFerag0Z07RAqCWy%2B4bS%2FxP3Qz2GkbWrhqLwqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdhrCxwT2d6GYhYhSrcAxhTnRZswUFnWfap4bu6vA0GRDznmNtU7DY0ASN7QhVL%2FCV96niCR7w4rJ3xTmHWEDMV3DnoRtLD6GAw9RF%2BCqOqV7BUiZVyCTAkqkHukpko%2Fo9H%2F0fIJdOdJJ5majuvY0DB0PozwrWRAO9lBNsfeICJO60X%2FU%2B7ZknC7ACUyGsakUVEwTXvhtvEcfTxdi%2BctpKsvoxqfe2I1zhdOmHTKfyHyhUZJJNY4H014LdTJceOgHUZqxnBSeozScopRtanpMDCtCbhUGCyLjUzAZW4%2BRTvpceNDiXoKjKDBfWSV7LQf1vjSjuYRQD%2FjCXKBPSjfqu84iyDeNt1y3fUcrBTSdyr7seO4p2u9RYYiNyGLj5UJNOa1bcnSXtiFrNopLaVRQHgTXdtgj7oTPz4OGMPCivuQPX%2BjZxWTB2S4b2ObStvKPcX3P5JzboH%2BM6yaTqfdKodMSxyyM%2BXIdj5gO5nzzSbOqsY0kr6ra8we0FyM%2Bj5AXLwifWjQeim3V8%2BbEVOs98fokBM9dWcCzkQgXEyCw%2BBmRG%2Bw5Sd5%2BxyZJmt%2BuSHOx%2Fazfj5FbblKmv4WjKhhIo7fKyXiq3MhC7WUZu2QPXDkL9UVxzMh3Vf%2FU6srkte2fnoICgXn5YSYAKoML3Y2sAGOqUBUOuTLt09CoY%2BKsqf%2F%2FVTBgjPmwKMREaL7vOjRWsjvf2YjYEQwYJqtJkkLxCN4ifMKG%2FnBJvYbgvC1sAtULLF5ToZDdFJvCcN8M6O%2BJfCcwdRM2zml7NoOY8mIQkRxcWUxAayQ2iOtrxQf5yeNcPE%2B%2BzjK5dtRJVgYphBuXsP1g8EsAVWNmn9ec6HOl0YCUD6cYKWuW2JqJe2GuXU065fgZgJVtCB&X-Amz-Signature=1d01c8720e531da12de67c6d0d1d95620e8d61c5a99e1072b49361f6181a4cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TY5GS63M%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T004531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCkSyNdxGQTF0jNtzaF1htQKOpCZAVTimQn%2FU1RuYHMHwIgdblRit8gFerag0Z07RAqCWy%2B4bS%2FxP3Qz2GkbWrhqLwqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdhrCxwT2d6GYhYhSrcAxhTnRZswUFnWfap4bu6vA0GRDznmNtU7DY0ASN7QhVL%2FCV96niCR7w4rJ3xTmHWEDMV3DnoRtLD6GAw9RF%2BCqOqV7BUiZVyCTAkqkHukpko%2Fo9H%2F0fIJdOdJJ5majuvY0DB0PozwrWRAO9lBNsfeICJO60X%2FU%2B7ZknC7ACUyGsakUVEwTXvhtvEcfTxdi%2BctpKsvoxqfe2I1zhdOmHTKfyHyhUZJJNY4H014LdTJceOgHUZqxnBSeozScopRtanpMDCtCbhUGCyLjUzAZW4%2BRTvpceNDiXoKjKDBfWSV7LQf1vjSjuYRQD%2FjCXKBPSjfqu84iyDeNt1y3fUcrBTSdyr7seO4p2u9RYYiNyGLj5UJNOa1bcnSXtiFrNopLaVRQHgTXdtgj7oTPz4OGMPCivuQPX%2BjZxWTB2S4b2ObStvKPcX3P5JzboH%2BM6yaTqfdKodMSxyyM%2BXIdj5gO5nzzSbOqsY0kr6ra8we0FyM%2Bj5AXLwifWjQeim3V8%2BbEVOs98fokBM9dWcCzkQgXEyCw%2BBmRG%2Bw5Sd5%2BxyZJmt%2BuSHOx%2Fazfj5FbblKmv4WjKhhIo7fKyXiq3MhC7WUZu2QPXDkL9UVxzMh3Vf%2FU6srkte2fnoICgXn5YSYAKoML3Y2sAGOqUBUOuTLt09CoY%2BKsqf%2F%2FVTBgjPmwKMREaL7vOjRWsjvf2YjYEQwYJqtJkkLxCN4ifMKG%2FnBJvYbgvC1sAtULLF5ToZDdFJvCcN8M6O%2BJfCcwdRM2zml7NoOY8mIQkRxcWUxAayQ2iOtrxQf5yeNcPE%2B%2BzjK5dtRJVgYphBuXsP1g8EsAVWNmn9ec6HOl0YCUD6cYKWuW2JqJe2GuXU065fgZgJVtCB&X-Amz-Signature=16f96ee9825ef30ec588283a6953237cc3b0040c1b489fea71e759bd77bc7aa1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

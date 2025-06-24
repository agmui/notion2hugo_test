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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVY27CDZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIG%2Bt7alG%2FNxscPEklJ5PMECUCLVrs%2FEQK5bSLsK%2FxrExAiEA1fbSxhA7RHkzHeRQPCCWq7JZhQVQg7%2BTsrwnwr4oTcUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGOEsa95NOmee7huCircAyMOWelJhK%2F%2BUCe3dRpvkJWL%2Be7SpTGK%2FiNP7ENTKcwBGRwW0WCnXxPR5eHSRGO47UscObw%2Ba184H49UQsDaLKidNksrOkotVe6ip1auwPzpyZEiRuVmUOjeEMRS1wQ2dSBsnc9d9cVX3FWOjc27QTFR62bMqFaDv48%2F16uw1jCal4uDh5P87mZDVjy%2FiEv5kGt04EWOw1%2FBqg%2Fl0A8vJZjHNQU52VGNMZw0QsrMdWzHI8C98RBGL%2FAZevD2ENF4D7Ge6sQQBfHi%2F3ZYESpouzpm%2BmO60Kr0dK3FuCtDAXfpB98Yh8qS4tCo9ZVECMaSUt2rmba%2FqWwGTKH6QCNOgCSXTmoAOACGIjgyE14ZwX%2BM0A3FM0o6i5XhUsA5rgnEIciLVx89ZzgRnyKykz6vWUSjdM4KP94oVD8%2Fe7hM89kEEq1VKMkk2MAd5mqUy7%2FpiexJdkt%2BiBiPY9KWTDBuVpeC%2Brlp59e%2B1hBzLRl775UQvcd%2FmB2fH%2Bz4eF4rPS3rz0eq2A%2FZTilbtzHHlKMgsqgp%2Fp%2FlLIKwolQf8VvL3FkdNJ%2BqXKmsyW1K7OwCMU1pewQjLq58O8TokFHkc1YAen6FG0rfQkC%2FV8cnWz0SHQYuwADFhfVgfip0%2BLBNMLK47MIGOqUBLpi52yvBtjAQ1VoG36fzlAMUwshiLstt6gavmuUtngRneQ%2B9ySLRHHh6ax2iXAIKeIastWqQkhCYu9FuvEqy%2FbkkmH0z7xX4SxEoNzwMxu9LaZyytPmJFY5KvEk86qXXFlzR%2BwXh6aBkj8fMw64olVWmZrJePzEyT9i%2B53xqwnm%2FuhyfnEvkULaUfcqnDrDcR2LGv6kbJdwjVuu6GPhSZU5tRTUO&X-Amz-Signature=1b77146af264e77064446703bb5f2912ddb15bb1b693339bdb55fb6a8106d2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVY27CDZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIG%2Bt7alG%2FNxscPEklJ5PMECUCLVrs%2FEQK5bSLsK%2FxrExAiEA1fbSxhA7RHkzHeRQPCCWq7JZhQVQg7%2BTsrwnwr4oTcUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGOEsa95NOmee7huCircAyMOWelJhK%2F%2BUCe3dRpvkJWL%2Be7SpTGK%2FiNP7ENTKcwBGRwW0WCnXxPR5eHSRGO47UscObw%2Ba184H49UQsDaLKidNksrOkotVe6ip1auwPzpyZEiRuVmUOjeEMRS1wQ2dSBsnc9d9cVX3FWOjc27QTFR62bMqFaDv48%2F16uw1jCal4uDh5P87mZDVjy%2FiEv5kGt04EWOw1%2FBqg%2Fl0A8vJZjHNQU52VGNMZw0QsrMdWzHI8C98RBGL%2FAZevD2ENF4D7Ge6sQQBfHi%2F3ZYESpouzpm%2BmO60Kr0dK3FuCtDAXfpB98Yh8qS4tCo9ZVECMaSUt2rmba%2FqWwGTKH6QCNOgCSXTmoAOACGIjgyE14ZwX%2BM0A3FM0o6i5XhUsA5rgnEIciLVx89ZzgRnyKykz6vWUSjdM4KP94oVD8%2Fe7hM89kEEq1VKMkk2MAd5mqUy7%2FpiexJdkt%2BiBiPY9KWTDBuVpeC%2Brlp59e%2B1hBzLRl775UQvcd%2FmB2fH%2Bz4eF4rPS3rz0eq2A%2FZTilbtzHHlKMgsqgp%2Fp%2FlLIKwolQf8VvL3FkdNJ%2BqXKmsyW1K7OwCMU1pewQjLq58O8TokFHkc1YAen6FG0rfQkC%2FV8cnWz0SHQYuwADFhfVgfip0%2BLBNMLK47MIGOqUBLpi52yvBtjAQ1VoG36fzlAMUwshiLstt6gavmuUtngRneQ%2B9ySLRHHh6ax2iXAIKeIastWqQkhCYu9FuvEqy%2FbkkmH0z7xX4SxEoNzwMxu9LaZyytPmJFY5KvEk86qXXFlzR%2BwXh6aBkj8fMw64olVWmZrJePzEyT9i%2B53xqwnm%2FuhyfnEvkULaUfcqnDrDcR2LGv6kbJdwjVuu6GPhSZU5tRTUO&X-Amz-Signature=10464c099c1eafd46c1184c8c24e0c254ac26d27b2f52a6707c974c41c5d277e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVY27CDZ%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIG%2Bt7alG%2FNxscPEklJ5PMECUCLVrs%2FEQK5bSLsK%2FxrExAiEA1fbSxhA7RHkzHeRQPCCWq7JZhQVQg7%2BTsrwnwr4oTcUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGOEsa95NOmee7huCircAyMOWelJhK%2F%2BUCe3dRpvkJWL%2Be7SpTGK%2FiNP7ENTKcwBGRwW0WCnXxPR5eHSRGO47UscObw%2Ba184H49UQsDaLKidNksrOkotVe6ip1auwPzpyZEiRuVmUOjeEMRS1wQ2dSBsnc9d9cVX3FWOjc27QTFR62bMqFaDv48%2F16uw1jCal4uDh5P87mZDVjy%2FiEv5kGt04EWOw1%2FBqg%2Fl0A8vJZjHNQU52VGNMZw0QsrMdWzHI8C98RBGL%2FAZevD2ENF4D7Ge6sQQBfHi%2F3ZYESpouzpm%2BmO60Kr0dK3FuCtDAXfpB98Yh8qS4tCo9ZVECMaSUt2rmba%2FqWwGTKH6QCNOgCSXTmoAOACGIjgyE14ZwX%2BM0A3FM0o6i5XhUsA5rgnEIciLVx89ZzgRnyKykz6vWUSjdM4KP94oVD8%2Fe7hM89kEEq1VKMkk2MAd5mqUy7%2FpiexJdkt%2BiBiPY9KWTDBuVpeC%2Brlp59e%2B1hBzLRl775UQvcd%2FmB2fH%2Bz4eF4rPS3rz0eq2A%2FZTilbtzHHlKMgsqgp%2Fp%2FlLIKwolQf8VvL3FkdNJ%2BqXKmsyW1K7OwCMU1pewQjLq58O8TokFHkc1YAen6FG0rfQkC%2FV8cnWz0SHQYuwADFhfVgfip0%2BLBNMLK47MIGOqUBLpi52yvBtjAQ1VoG36fzlAMUwshiLstt6gavmuUtngRneQ%2B9ySLRHHh6ax2iXAIKeIastWqQkhCYu9FuvEqy%2FbkkmH0z7xX4SxEoNzwMxu9LaZyytPmJFY5KvEk86qXXFlzR%2BwXh6aBkj8fMw64olVWmZrJePzEyT9i%2B53xqwnm%2FuhyfnEvkULaUfcqnDrDcR2LGv6kbJdwjVuu6GPhSZU5tRTUO&X-Amz-Signature=ba6be6a7911c9860a276c69bf40982f2dbddefed8f554486b239f6f1999ef84b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

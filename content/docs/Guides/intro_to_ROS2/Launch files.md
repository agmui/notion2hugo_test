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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKMB5F6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRr9xGuwiY%2F6pMenx0IL%2BlwGMsAGLGjch%2Fr4P9IztZUQIgXoU0LcNNmiGUebgZsw9r7OzIZ8b629SHgsOLWD20BPsqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA386xsYzIPbs7d6QCrcA8WKziJMrLyv5QOM7CFNdwImorGZVYMUgZtZIZsaqWsrz%2FguAVUGRES33qGpYAcBgBhKEfbioZzrF4zN7sXPAaIcMzIlHHznACOCox939Mozln7ppFPxvxAoINMIsQmQLkI0zoTyZP4jm7Bx9iaYJ%2F3Hxidp0td1IQxymS1zNNbWpkqjV6Yc50I77MylAMyEntzk8BfhXwxXUhyK7KJuou6pTa6FGrGl%2FMbBrMSLD2G0HqUOLjahzkJN4t4uJXalDRvmay7Ys8jet0aa4AQLev%2B43b0cY2DHBoszL8OGmwTxpswNiElV%2BDvRX7E5jYEZG8pg675jrjIasA5XyDUM58qtiH6vZ%2BGW5LcXvj%2Brd91vEjqLgc%2FvcEUIrW12l7EAMD32fLy3XXCGzyxkXUUZBwkfbQhA1lZsZCjtNiZaZiHR%2BZVKNhqn38O%2BUY0dS8EzgL%2BRB9FUGIuNyBmulJs3AW4i9ECAUzqW0JVHMKdbBmON14tqnPAg0xK%2BQm6nlzp9yMjDzNFdaTGJMB%2BYphRLKuGCIREJ1XRmujRg7jk%2Fo6s4VjR9SDFKwpKDzSNQ1libtOHBOo14Glxd9Zfi%2FHI%2FE6y7jzusV2IR%2FpJHGtM35Ob4eE%2FhyNq43%2FVDdN2CMJTo6LwGOqUBxbLnyI7D0o83SP4yAqC7D4M444c6UPI6Gt3aWnsz7pX4VrJwQbMdTvVohwPgPQJvizRD2ziZ27cPR9xb1MI135sZ6ACkKQiA54%2BT8JioTS%2Bldp0oXctGhQspuaPi%2B8wsspLm6gED6exbL6897u32yK17GgX4%2FPbUMfO2MrTDcnBCEUBSlOMCo4lDZbaA7bOdtvbzTXOfu71qpAhIHMj9AlrPg%2Bap&X-Amz-Signature=c61ee52f08a26f433a16f996b5ef86ebaf146def4c28f0cf0d1493448fdab5a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKMB5F6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRr9xGuwiY%2F6pMenx0IL%2BlwGMsAGLGjch%2Fr4P9IztZUQIgXoU0LcNNmiGUebgZsw9r7OzIZ8b629SHgsOLWD20BPsqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA386xsYzIPbs7d6QCrcA8WKziJMrLyv5QOM7CFNdwImorGZVYMUgZtZIZsaqWsrz%2FguAVUGRES33qGpYAcBgBhKEfbioZzrF4zN7sXPAaIcMzIlHHznACOCox939Mozln7ppFPxvxAoINMIsQmQLkI0zoTyZP4jm7Bx9iaYJ%2F3Hxidp0td1IQxymS1zNNbWpkqjV6Yc50I77MylAMyEntzk8BfhXwxXUhyK7KJuou6pTa6FGrGl%2FMbBrMSLD2G0HqUOLjahzkJN4t4uJXalDRvmay7Ys8jet0aa4AQLev%2B43b0cY2DHBoszL8OGmwTxpswNiElV%2BDvRX7E5jYEZG8pg675jrjIasA5XyDUM58qtiH6vZ%2BGW5LcXvj%2Brd91vEjqLgc%2FvcEUIrW12l7EAMD32fLy3XXCGzyxkXUUZBwkfbQhA1lZsZCjtNiZaZiHR%2BZVKNhqn38O%2BUY0dS8EzgL%2BRB9FUGIuNyBmulJs3AW4i9ECAUzqW0JVHMKdbBmON14tqnPAg0xK%2BQm6nlzp9yMjDzNFdaTGJMB%2BYphRLKuGCIREJ1XRmujRg7jk%2Fo6s4VjR9SDFKwpKDzSNQ1libtOHBOo14Glxd9Zfi%2FHI%2FE6y7jzusV2IR%2FpJHGtM35Ob4eE%2FhyNq43%2FVDdN2CMJTo6LwGOqUBxbLnyI7D0o83SP4yAqC7D4M444c6UPI6Gt3aWnsz7pX4VrJwQbMdTvVohwPgPQJvizRD2ziZ27cPR9xb1MI135sZ6ACkKQiA54%2BT8JioTS%2Bldp0oXctGhQspuaPi%2B8wsspLm6gED6exbL6897u32yK17GgX4%2FPbUMfO2MrTDcnBCEUBSlOMCo4lDZbaA7bOdtvbzTXOfu71qpAhIHMj9AlrPg%2Bap&X-Amz-Signature=c9c47aeeeee2a915e9b0cb2c57e3323c95fe3f6fb5986713421ccf6bba145ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSKMB5F6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRr9xGuwiY%2F6pMenx0IL%2BlwGMsAGLGjch%2Fr4P9IztZUQIgXoU0LcNNmiGUebgZsw9r7OzIZ8b629SHgsOLWD20BPsqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA386xsYzIPbs7d6QCrcA8WKziJMrLyv5QOM7CFNdwImorGZVYMUgZtZIZsaqWsrz%2FguAVUGRES33qGpYAcBgBhKEfbioZzrF4zN7sXPAaIcMzIlHHznACOCox939Mozln7ppFPxvxAoINMIsQmQLkI0zoTyZP4jm7Bx9iaYJ%2F3Hxidp0td1IQxymS1zNNbWpkqjV6Yc50I77MylAMyEntzk8BfhXwxXUhyK7KJuou6pTa6FGrGl%2FMbBrMSLD2G0HqUOLjahzkJN4t4uJXalDRvmay7Ys8jet0aa4AQLev%2B43b0cY2DHBoszL8OGmwTxpswNiElV%2BDvRX7E5jYEZG8pg675jrjIasA5XyDUM58qtiH6vZ%2BGW5LcXvj%2Brd91vEjqLgc%2FvcEUIrW12l7EAMD32fLy3XXCGzyxkXUUZBwkfbQhA1lZsZCjtNiZaZiHR%2BZVKNhqn38O%2BUY0dS8EzgL%2BRB9FUGIuNyBmulJs3AW4i9ECAUzqW0JVHMKdbBmON14tqnPAg0xK%2BQm6nlzp9yMjDzNFdaTGJMB%2BYphRLKuGCIREJ1XRmujRg7jk%2Fo6s4VjR9SDFKwpKDzSNQ1libtOHBOo14Glxd9Zfi%2FHI%2FE6y7jzusV2IR%2FpJHGtM35Ob4eE%2FhyNq43%2FVDdN2CMJTo6LwGOqUBxbLnyI7D0o83SP4yAqC7D4M444c6UPI6Gt3aWnsz7pX4VrJwQbMdTvVohwPgPQJvizRD2ziZ27cPR9xb1MI135sZ6ACkKQiA54%2BT8JioTS%2Bldp0oXctGhQspuaPi%2B8wsspLm6gED6exbL6897u32yK17GgX4%2FPbUMfO2MrTDcnBCEUBSlOMCo4lDZbaA7bOdtvbzTXOfu71qpAhIHMj9AlrPg%2Bap&X-Amz-Signature=fee62c577ebf1d29e7fe27a4bd3a6aeeb95421fb91642ec02b980d7bd5eb3a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

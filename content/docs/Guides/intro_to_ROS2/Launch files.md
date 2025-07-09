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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5B7MN4W%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyLAXV0w20zMBbcrrU%2BlJfb7Ltoql11G%2FOtr5A6TdZjwIhAKgpne8R6xWAK0JsAdGZkgFywplIcAKeYdEEnAnsE9ipKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa0UO4fZLlek0lRzUq3AP71bQuXfEXM9nPX0cLlkRLNnqYzXbxrlcehFT3fAVGx0WG2s03212RcwyjME1lr6C59nHzcEAAXBuZb1q33%2FZCDWhKpYGppavfZOLVW3XlM7OyvqeBf3C%2FYpM3L20nsnvZdNvE97J2GKwf0qa8zaCgj%2B4J9CiZc7bi4HcFKfhd2g333vRqpi6Y%2F%2FjH5kcViQuMZp0whKVWLZIVQj99t%2B1u5%2BIeZZSZaHvODxsVwZl50dHHPkL4NClFgWBL%2B7wyxRbb4ixjFERCDnxg9%2FoxfF1zMHhFyPbey9DVmCapWMT4Gjz5CGmemhk3I5hSKLxDu41H9FpT24ZFoY1guGaz8b3p7fwrHnBE8U9kw2vGYwSI5yFbC1aVA9w7xfst4i6sRlswf47HuFzxGqj%2FfmhUNy3TD%2Bx2pyhyHe5z7pWREHXfSf6uWT8z7Q3qkSD4R513Lx3lE63rTwRTGZXb3QKKpppS8%2FzBActVnVpHf0DvYWvfWJgvJi8YxysjabcqyaonIVAe%2FpZnKtPOhFTs3Sj6IKmPh2hWTUoZruY%2B5MzrZpNSzhyKz%2F%2F4IkR%2B%2B3LYBkQwmexZjhsLStF4DT1TwSTSvyKKopbt8eNuznAzcgkYXWCyVu%2FvkM0IhGCu5T3FKDDUxbvDBjqkASkEccz8434EHEYRupY23DwNqPWrqMgeteQTk4djX6dqjwQtPaBgMOOqSh%2BhehDXcSpJZut3%2F9e8SIJPdVaVUAsbHwUru6M4Kv0O6aoNrZE3NWqd%2BtCzQt6IZ5vxeI%2BxPGHVFgqnKbFGiDBC9xQZFRa%2BuQha9uqt5BOHU%2FoLjp9QZiQqmTkw5ihLLS3DoxRhKFBWlNkDXhhNMrUcqF0Uv18qN14d&X-Amz-Signature=9462561f4934bd20318341a83ae1f98d00fbc30b9c5bdd6b195712d01a6e8f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5B7MN4W%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyLAXV0w20zMBbcrrU%2BlJfb7Ltoql11G%2FOtr5A6TdZjwIhAKgpne8R6xWAK0JsAdGZkgFywplIcAKeYdEEnAnsE9ipKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa0UO4fZLlek0lRzUq3AP71bQuXfEXM9nPX0cLlkRLNnqYzXbxrlcehFT3fAVGx0WG2s03212RcwyjME1lr6C59nHzcEAAXBuZb1q33%2FZCDWhKpYGppavfZOLVW3XlM7OyvqeBf3C%2FYpM3L20nsnvZdNvE97J2GKwf0qa8zaCgj%2B4J9CiZc7bi4HcFKfhd2g333vRqpi6Y%2F%2FjH5kcViQuMZp0whKVWLZIVQj99t%2B1u5%2BIeZZSZaHvODxsVwZl50dHHPkL4NClFgWBL%2B7wyxRbb4ixjFERCDnxg9%2FoxfF1zMHhFyPbey9DVmCapWMT4Gjz5CGmemhk3I5hSKLxDu41H9FpT24ZFoY1guGaz8b3p7fwrHnBE8U9kw2vGYwSI5yFbC1aVA9w7xfst4i6sRlswf47HuFzxGqj%2FfmhUNy3TD%2Bx2pyhyHe5z7pWREHXfSf6uWT8z7Q3qkSD4R513Lx3lE63rTwRTGZXb3QKKpppS8%2FzBActVnVpHf0DvYWvfWJgvJi8YxysjabcqyaonIVAe%2FpZnKtPOhFTs3Sj6IKmPh2hWTUoZruY%2B5MzrZpNSzhyKz%2F%2F4IkR%2B%2B3LYBkQwmexZjhsLStF4DT1TwSTSvyKKopbt8eNuznAzcgkYXWCyVu%2FvkM0IhGCu5T3FKDDUxbvDBjqkASkEccz8434EHEYRupY23DwNqPWrqMgeteQTk4djX6dqjwQtPaBgMOOqSh%2BhehDXcSpJZut3%2F9e8SIJPdVaVUAsbHwUru6M4Kv0O6aoNrZE3NWqd%2BtCzQt6IZ5vxeI%2BxPGHVFgqnKbFGiDBC9xQZFRa%2BuQha9uqt5BOHU%2FoLjp9QZiQqmTkw5ihLLS3DoxRhKFBWlNkDXhhNMrUcqF0Uv18qN14d&X-Amz-Signature=2beca561fc0ef17305863e375977f0bae8a1913fecffdde625e2f8c35994f264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5B7MN4W%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyLAXV0w20zMBbcrrU%2BlJfb7Ltoql11G%2FOtr5A6TdZjwIhAKgpne8R6xWAK0JsAdGZkgFywplIcAKeYdEEnAnsE9ipKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwa0UO4fZLlek0lRzUq3AP71bQuXfEXM9nPX0cLlkRLNnqYzXbxrlcehFT3fAVGx0WG2s03212RcwyjME1lr6C59nHzcEAAXBuZb1q33%2FZCDWhKpYGppavfZOLVW3XlM7OyvqeBf3C%2FYpM3L20nsnvZdNvE97J2GKwf0qa8zaCgj%2B4J9CiZc7bi4HcFKfhd2g333vRqpi6Y%2F%2FjH5kcViQuMZp0whKVWLZIVQj99t%2B1u5%2BIeZZSZaHvODxsVwZl50dHHPkL4NClFgWBL%2B7wyxRbb4ixjFERCDnxg9%2FoxfF1zMHhFyPbey9DVmCapWMT4Gjz5CGmemhk3I5hSKLxDu41H9FpT24ZFoY1guGaz8b3p7fwrHnBE8U9kw2vGYwSI5yFbC1aVA9w7xfst4i6sRlswf47HuFzxGqj%2FfmhUNy3TD%2Bx2pyhyHe5z7pWREHXfSf6uWT8z7Q3qkSD4R513Lx3lE63rTwRTGZXb3QKKpppS8%2FzBActVnVpHf0DvYWvfWJgvJi8YxysjabcqyaonIVAe%2FpZnKtPOhFTs3Sj6IKmPh2hWTUoZruY%2B5MzrZpNSzhyKz%2F%2F4IkR%2B%2B3LYBkQwmexZjhsLStF4DT1TwSTSvyKKopbt8eNuznAzcgkYXWCyVu%2FvkM0IhGCu5T3FKDDUxbvDBjqkASkEccz8434EHEYRupY23DwNqPWrqMgeteQTk4djX6dqjwQtPaBgMOOqSh%2BhehDXcSpJZut3%2F9e8SIJPdVaVUAsbHwUru6M4Kv0O6aoNrZE3NWqd%2BtCzQt6IZ5vxeI%2BxPGHVFgqnKbFGiDBC9xQZFRa%2BuQha9uqt5BOHU%2FoLjp9QZiQqmTkw5ihLLS3DoxRhKFBWlNkDXhhNMrUcqF0Uv18qN14d&X-Amz-Signature=91769d4242380a95e4fb10f6f1ab1ad11be1c52338ab0edfb83b678c93a6b2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOVUTD7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHamzhr7jdCtUUvk9UqZcbPXehEzFqqRGh0umZD6EOkkAiEAqsidxdFiaAB3E%2FtKk%2B1SNdBGZeyfbThNO1JREGI515Qq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBMNdxVc%2B3Ptt4zXICrcA65QaiHoiQkYj2qne5F0mzVXAccu2odrPzfOzjjNlpJc2glCgJUZU2MGcqo8fHxPpWRiYWkH0AYxqkC11l8Jgg7Mfu1wp6wq2Yg2WzMWJfTrUq0b7vK2KBQjBb6vWGMZSL6GQ%2BIbEm6bteVaaU4f6mKxbnujxsrhHcp0FMs6oZ0wUEHlO3AmXh15jVVHmlsQr94cMqymj9HQExdg8XMWY8cr7X06AOhmCM%2B94mXQDGEsGGE21xS%2FQs7EYdcVmhaekz%2B80Xl%2BwtIjjBAmXTk1raSsN5mN%2BQJdUvSVdhP2GbodgeGmh%2BzDDlnP5%2BmffpVyaSt%2BLeSEf3mG1xg4U8L1cQzNXS%2Bws3oH%2FvANsfd6GTBgLp9CntZrKLdGHZ4EjrXJ5a6kX6f9S3JyrcnGmR6LZda86S8EPj7UiEdEM13DGBNXSKPDouP%2FR1BGIw5YukXNo6%2BhBq3x%2BJgkon9ZIUzSd9RYEQe0lagMvOoH2TxerHUpu1znYeRBrQP49VFEkhU8mrG091dPDoKfDXMcP27c7XrAlqnVheCoLls8hQcLd2IBUD%2FS8lGNXP6%2BmbuJRXUoNHJpHXsMvLi%2F2q1afvcpyLBoli08KqbnqqAhHoByzCe4T8X1m4H3Pvl4LOWVMNv9kL0GOqUBv3JblEQ%2BCfi6b8ai52mt7%2BOIwgsGHRdRWMU2cHbirM52vZbe6T9XYQaK%2BXfWs7L6SOfUwesRO1TpAHoVQYONF%2FgewRiB%2B%2F523LpVXB2j9MGsNqTy8FyHFxPCkMx4UHrBjsVRu6Fk1n6125RADC%2Feud%2B1M0WGR%2Blw3BVB2MSO4AdhB%2FznuUb82RcvxxYXIe7z4e0IgiT6%2FbaBG5it90I988zOeJhv&X-Amz-Signature=6c34c0ce5fa46c3014d36f51c302d4a068481620aa22aa94d4a9b05412c2b39f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOVUTD7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHamzhr7jdCtUUvk9UqZcbPXehEzFqqRGh0umZD6EOkkAiEAqsidxdFiaAB3E%2FtKk%2B1SNdBGZeyfbThNO1JREGI515Qq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBMNdxVc%2B3Ptt4zXICrcA65QaiHoiQkYj2qne5F0mzVXAccu2odrPzfOzjjNlpJc2glCgJUZU2MGcqo8fHxPpWRiYWkH0AYxqkC11l8Jgg7Mfu1wp6wq2Yg2WzMWJfTrUq0b7vK2KBQjBb6vWGMZSL6GQ%2BIbEm6bteVaaU4f6mKxbnujxsrhHcp0FMs6oZ0wUEHlO3AmXh15jVVHmlsQr94cMqymj9HQExdg8XMWY8cr7X06AOhmCM%2B94mXQDGEsGGE21xS%2FQs7EYdcVmhaekz%2B80Xl%2BwtIjjBAmXTk1raSsN5mN%2BQJdUvSVdhP2GbodgeGmh%2BzDDlnP5%2BmffpVyaSt%2BLeSEf3mG1xg4U8L1cQzNXS%2Bws3oH%2FvANsfd6GTBgLp9CntZrKLdGHZ4EjrXJ5a6kX6f9S3JyrcnGmR6LZda86S8EPj7UiEdEM13DGBNXSKPDouP%2FR1BGIw5YukXNo6%2BhBq3x%2BJgkon9ZIUzSd9RYEQe0lagMvOoH2TxerHUpu1znYeRBrQP49VFEkhU8mrG091dPDoKfDXMcP27c7XrAlqnVheCoLls8hQcLd2IBUD%2FS8lGNXP6%2BmbuJRXUoNHJpHXsMvLi%2F2q1afvcpyLBoli08KqbnqqAhHoByzCe4T8X1m4H3Pvl4LOWVMNv9kL0GOqUBv3JblEQ%2BCfi6b8ai52mt7%2BOIwgsGHRdRWMU2cHbirM52vZbe6T9XYQaK%2BXfWs7L6SOfUwesRO1TpAHoVQYONF%2FgewRiB%2B%2F523LpVXB2j9MGsNqTy8FyHFxPCkMx4UHrBjsVRu6Fk1n6125RADC%2Feud%2B1M0WGR%2Blw3BVB2MSO4AdhB%2FznuUb82RcvxxYXIe7z4e0IgiT6%2FbaBG5it90I988zOeJhv&X-Amz-Signature=00c92e6b4cb6ec8a80ef5a7b50a4e164fd568cbdf497920a4e1ff9fcecfbedae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOVUTD7%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHamzhr7jdCtUUvk9UqZcbPXehEzFqqRGh0umZD6EOkkAiEAqsidxdFiaAB3E%2FtKk%2B1SNdBGZeyfbThNO1JREGI515Qq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDBMNdxVc%2B3Ptt4zXICrcA65QaiHoiQkYj2qne5F0mzVXAccu2odrPzfOzjjNlpJc2glCgJUZU2MGcqo8fHxPpWRiYWkH0AYxqkC11l8Jgg7Mfu1wp6wq2Yg2WzMWJfTrUq0b7vK2KBQjBb6vWGMZSL6GQ%2BIbEm6bteVaaU4f6mKxbnujxsrhHcp0FMs6oZ0wUEHlO3AmXh15jVVHmlsQr94cMqymj9HQExdg8XMWY8cr7X06AOhmCM%2B94mXQDGEsGGE21xS%2FQs7EYdcVmhaekz%2B80Xl%2BwtIjjBAmXTk1raSsN5mN%2BQJdUvSVdhP2GbodgeGmh%2BzDDlnP5%2BmffpVyaSt%2BLeSEf3mG1xg4U8L1cQzNXS%2Bws3oH%2FvANsfd6GTBgLp9CntZrKLdGHZ4EjrXJ5a6kX6f9S3JyrcnGmR6LZda86S8EPj7UiEdEM13DGBNXSKPDouP%2FR1BGIw5YukXNo6%2BhBq3x%2BJgkon9ZIUzSd9RYEQe0lagMvOoH2TxerHUpu1znYeRBrQP49VFEkhU8mrG091dPDoKfDXMcP27c7XrAlqnVheCoLls8hQcLd2IBUD%2FS8lGNXP6%2BmbuJRXUoNHJpHXsMvLi%2F2q1afvcpyLBoli08KqbnqqAhHoByzCe4T8X1m4H3Pvl4LOWVMNv9kL0GOqUBv3JblEQ%2BCfi6b8ai52mt7%2BOIwgsGHRdRWMU2cHbirM52vZbe6T9XYQaK%2BXfWs7L6SOfUwesRO1TpAHoVQYONF%2FgewRiB%2B%2F523LpVXB2j9MGsNqTy8FyHFxPCkMx4UHrBjsVRu6Fk1n6125RADC%2Feud%2B1M0WGR%2Blw3BVB2MSO4AdhB%2FznuUb82RcvxxYXIe7z4e0IgiT6%2FbaBG5it90I988zOeJhv&X-Amz-Signature=5e26cc016f6c79503d1034650c98fdf0005c7a5f86aec6f5d05720dfe595f2f0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

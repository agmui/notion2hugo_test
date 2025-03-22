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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WRTZLXT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDin9UfrMZjvfC4bfXVpmg3yzM11Eje%2BzEVoA27LfKrSQIgU178Tm4ppvrBocokOuo7YhdzGbJE%2B8ZZqBeJZln49qIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdBBGnQa1Q9qg3MYircA8WD2kW4NSOEYWYPxkByTYUR%2Fv4dpDfnvFpDDRBM15Xn%2FZar%2BsTYx6ivWmxwPLPXfivf1kSz1NAPAnGa0PA%2BZE7CuLTFMC5zN8yYP8vokXjk%2BOZs1LfwlVZfnWh4IOnCu2OcF5BALCjTbnJi%2FeVf8seaIw84wI51cHnTjl7AL%2BWzHg%2BTQtNf6u0wDlsJELOwNGc41xkRCfRymd3pAyQmM5MerzUQjdsI6T5tj5R9v%2Ff49hbjPRIg5nfy35v%2Bo2U4aeZoDVhIlGrNoRu%2BYX%2BH4YWtJptcm1fPLAH%2FMSjaZo8NCNfUpHKqdguCbpYETRnUu7eeCNxiRn65ivywaNJiXEuqWBOBNRRgMWmTBsxl2t2ACpVCJPoQ%2B6mzFioDdRw7EvFUniCR0FpB6R0WsfE12MJ%2BQ0FAmDqCgCFECKZOPaj3PKlDGLp%2FJQKm2fU1yQF5BpkHYWijeV470FUEMqDXQKnrB9GojFp4qGEJk7R5iDvzCK2kgcXRTr1qEaAkq25al2Oe071tG0BFUyaRnDvLbY3FyN3sFpVq6FiVAkVegzXGOoVNePApDAHgeLJ%2FA6k1XJyouteg3GwgNZdPmDJWWwEt1obSWaSM0BogSZNzwhnOLjGy7SzrU6hL3SspMO%2BX%2FL4GOqUBDxp%2BLLMypDU6RlBTsHTWfilEe%2FWRfBNQILrhKaIAbJ7pamnIyvCASvvvei3w8XLz0BurKl1ofPLnfER3imVqioiQo9%2BX9KHNgvyBug0OFjisApTIKpS5axc9jb70AceUoZYlU90wFqSBccdShJJBj6q2QDyJ4V6JVdyhFRjLedkLtFV%2FIJtQK96J%2F10hOHx1IfJqXKMSY9MJNTkXo6lBWXWmPc6m&X-Amz-Signature=2e7706c13a48ff1240b6bcd13bd9ea052224836769136a18ca74de269add27d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WRTZLXT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDin9UfrMZjvfC4bfXVpmg3yzM11Eje%2BzEVoA27LfKrSQIgU178Tm4ppvrBocokOuo7YhdzGbJE%2B8ZZqBeJZln49qIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdBBGnQa1Q9qg3MYircA8WD2kW4NSOEYWYPxkByTYUR%2Fv4dpDfnvFpDDRBM15Xn%2FZar%2BsTYx6ivWmxwPLPXfivf1kSz1NAPAnGa0PA%2BZE7CuLTFMC5zN8yYP8vokXjk%2BOZs1LfwlVZfnWh4IOnCu2OcF5BALCjTbnJi%2FeVf8seaIw84wI51cHnTjl7AL%2BWzHg%2BTQtNf6u0wDlsJELOwNGc41xkRCfRymd3pAyQmM5MerzUQjdsI6T5tj5R9v%2Ff49hbjPRIg5nfy35v%2Bo2U4aeZoDVhIlGrNoRu%2BYX%2BH4YWtJptcm1fPLAH%2FMSjaZo8NCNfUpHKqdguCbpYETRnUu7eeCNxiRn65ivywaNJiXEuqWBOBNRRgMWmTBsxl2t2ACpVCJPoQ%2B6mzFioDdRw7EvFUniCR0FpB6R0WsfE12MJ%2BQ0FAmDqCgCFECKZOPaj3PKlDGLp%2FJQKm2fU1yQF5BpkHYWijeV470FUEMqDXQKnrB9GojFp4qGEJk7R5iDvzCK2kgcXRTr1qEaAkq25al2Oe071tG0BFUyaRnDvLbY3FyN3sFpVq6FiVAkVegzXGOoVNePApDAHgeLJ%2FA6k1XJyouteg3GwgNZdPmDJWWwEt1obSWaSM0BogSZNzwhnOLjGy7SzrU6hL3SspMO%2BX%2FL4GOqUBDxp%2BLLMypDU6RlBTsHTWfilEe%2FWRfBNQILrhKaIAbJ7pamnIyvCASvvvei3w8XLz0BurKl1ofPLnfER3imVqioiQo9%2BX9KHNgvyBug0OFjisApTIKpS5axc9jb70AceUoZYlU90wFqSBccdShJJBj6q2QDyJ4V6JVdyhFRjLedkLtFV%2FIJtQK96J%2F10hOHx1IfJqXKMSY9MJNTkXo6lBWXWmPc6m&X-Amz-Signature=86cb63c41a3d4e9d01c83146142c4f28eac4d4e8ebb12a66a9b14f0957b7f412&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WRTZLXT%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T200801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDin9UfrMZjvfC4bfXVpmg3yzM11Eje%2BzEVoA27LfKrSQIgU178Tm4ppvrBocokOuo7YhdzGbJE%2B8ZZqBeJZln49qIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdBBGnQa1Q9qg3MYircA8WD2kW4NSOEYWYPxkByTYUR%2Fv4dpDfnvFpDDRBM15Xn%2FZar%2BsTYx6ivWmxwPLPXfivf1kSz1NAPAnGa0PA%2BZE7CuLTFMC5zN8yYP8vokXjk%2BOZs1LfwlVZfnWh4IOnCu2OcF5BALCjTbnJi%2FeVf8seaIw84wI51cHnTjl7AL%2BWzHg%2BTQtNf6u0wDlsJELOwNGc41xkRCfRymd3pAyQmM5MerzUQjdsI6T5tj5R9v%2Ff49hbjPRIg5nfy35v%2Bo2U4aeZoDVhIlGrNoRu%2BYX%2BH4YWtJptcm1fPLAH%2FMSjaZo8NCNfUpHKqdguCbpYETRnUu7eeCNxiRn65ivywaNJiXEuqWBOBNRRgMWmTBsxl2t2ACpVCJPoQ%2B6mzFioDdRw7EvFUniCR0FpB6R0WsfE12MJ%2BQ0FAmDqCgCFECKZOPaj3PKlDGLp%2FJQKm2fU1yQF5BpkHYWijeV470FUEMqDXQKnrB9GojFp4qGEJk7R5iDvzCK2kgcXRTr1qEaAkq25al2Oe071tG0BFUyaRnDvLbY3FyN3sFpVq6FiVAkVegzXGOoVNePApDAHgeLJ%2FA6k1XJyouteg3GwgNZdPmDJWWwEt1obSWaSM0BogSZNzwhnOLjGy7SzrU6hL3SspMO%2BX%2FL4GOqUBDxp%2BLLMypDU6RlBTsHTWfilEe%2FWRfBNQILrhKaIAbJ7pamnIyvCASvvvei3w8XLz0BurKl1ofPLnfER3imVqioiQo9%2BX9KHNgvyBug0OFjisApTIKpS5axc9jb70AceUoZYlU90wFqSBccdShJJBj6q2QDyJ4V6JVdyhFRjLedkLtFV%2FIJtQK96J%2F10hOHx1IfJqXKMSY9MJNTkXo6lBWXWmPc6m&X-Amz-Signature=608663654bde7980382f5f83c9f20347a2a15575389ff24a5764e9be7a0555df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXYW3ECO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIEE0%2Btp5VJ6SWFAnJ0536C2QS39MGqdKYZ7qqBDuN%2Fs9AiAHpCcjWGOdteyvm4QZxDcNewzEoOv4hk4nqoS0J1J5liqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLjof6zmtfwB2%2FBoKtwDf%2BQN3%2BJSxzGZuRkSymhl2uEWCDeOLRnFCOHvbkhdERFX1arcwZ%2FjXBqYKU%2BDylW%2FRXQZ99rOqBDEeMTR5IewYI%2F6wYNrR0Fub60UrXrdYtj31NDIwE4WC3uIABB3rXx0NDUDlLJF1LzrCiGkmxBY1v5sf%2B3eqjJNGOiCFajSDUnyLdi9ODiCq0r2R2otJGFZ1F4CxCZHvZbcTAKRrnlw7eOK1ehqs6RBfEMLMXVk6H8nhZLYHClvOOGLFQPSnDj8HzcyBfR%2BxUF%2BhC%2BhMry1VO0lMks%2BN3qO1qJCdFrDmmZB311wMJz1j5AhTtHt0Lra%2FYAH7Jq3C5NwoYzdadb79c7CfX8y1RGLHuprrOHDwf39o3RjYFmUr8nQ4l7suYvyDCKhp4qreSn%2BhV58r7Ye2DvOdhnsfEmS%2FxWBk%2BAEph7NsWyyhGXi%2FfIbgItbM28MolU8QwuinbfTNlXsNIVMknckjXjgxnI9LOkHRCjC3XzABpZcYO%2FcwOJHm3TArETGX1pm7W6gfamBJVddPlKUtl5T5vMzdmYjNwxCGzkKxfSW1hvNuxozZX9GT5wRd5kXztbiEWNCd2IWXIl5dyOQLsuyVbcjlsAWviz4xF7SG2W9zLX%2BMQOQ%2BFMASpQwhrjnvwY6pgF7S66UxTZ03MJT3SQjqPctsOoLdkCd45Dyjylx4Q9Kz9frJNk1A6y%2Bvp4GiCkLc7bs5T2EyQF%2Fjo8epB%2FQpbslEMTSIKgmNTJq8p8H%2BD%2FmjD7%2BQYE%2BAImgpfBVtNXbba9WQryznPHYAj%2F98fNEfN%2FzZFh%2FxMRzNQ6wrf1qYj%2FzuZNb4r6VS8pQ%2BukBUZEo5l0yNnLogA9SpQqk6H4X0SWuuM9lY6xo&X-Amz-Signature=84385e1f75e7c073c7b1bfb3c733adfbfc895f4e92f9bf6669fe52d66f024d78&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXYW3ECO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIEE0%2Btp5VJ6SWFAnJ0536C2QS39MGqdKYZ7qqBDuN%2Fs9AiAHpCcjWGOdteyvm4QZxDcNewzEoOv4hk4nqoS0J1J5liqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLjof6zmtfwB2%2FBoKtwDf%2BQN3%2BJSxzGZuRkSymhl2uEWCDeOLRnFCOHvbkhdERFX1arcwZ%2FjXBqYKU%2BDylW%2FRXQZ99rOqBDEeMTR5IewYI%2F6wYNrR0Fub60UrXrdYtj31NDIwE4WC3uIABB3rXx0NDUDlLJF1LzrCiGkmxBY1v5sf%2B3eqjJNGOiCFajSDUnyLdi9ODiCq0r2R2otJGFZ1F4CxCZHvZbcTAKRrnlw7eOK1ehqs6RBfEMLMXVk6H8nhZLYHClvOOGLFQPSnDj8HzcyBfR%2BxUF%2BhC%2BhMry1VO0lMks%2BN3qO1qJCdFrDmmZB311wMJz1j5AhTtHt0Lra%2FYAH7Jq3C5NwoYzdadb79c7CfX8y1RGLHuprrOHDwf39o3RjYFmUr8nQ4l7suYvyDCKhp4qreSn%2BhV58r7Ye2DvOdhnsfEmS%2FxWBk%2BAEph7NsWyyhGXi%2FfIbgItbM28MolU8QwuinbfTNlXsNIVMknckjXjgxnI9LOkHRCjC3XzABpZcYO%2FcwOJHm3TArETGX1pm7W6gfamBJVddPlKUtl5T5vMzdmYjNwxCGzkKxfSW1hvNuxozZX9GT5wRd5kXztbiEWNCd2IWXIl5dyOQLsuyVbcjlsAWviz4xF7SG2W9zLX%2BMQOQ%2BFMASpQwhrjnvwY6pgF7S66UxTZ03MJT3SQjqPctsOoLdkCd45Dyjylx4Q9Kz9frJNk1A6y%2Bvp4GiCkLc7bs5T2EyQF%2Fjo8epB%2FQpbslEMTSIKgmNTJq8p8H%2BD%2FmjD7%2BQYE%2BAImgpfBVtNXbba9WQryznPHYAj%2F98fNEfN%2FzZFh%2FxMRzNQ6wrf1qYj%2FzuZNb4r6VS8pQ%2BukBUZEo5l0yNnLogA9SpQqk6H4X0SWuuM9lY6xo&X-Amz-Signature=8fcc76621edfedcc4c80d20ef957c083360d98ec0a96ea2081d1c35d83cb70b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXYW3ECO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIEE0%2Btp5VJ6SWFAnJ0536C2QS39MGqdKYZ7qqBDuN%2Fs9AiAHpCcjWGOdteyvm4QZxDcNewzEoOv4hk4nqoS0J1J5liqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBLjof6zmtfwB2%2FBoKtwDf%2BQN3%2BJSxzGZuRkSymhl2uEWCDeOLRnFCOHvbkhdERFX1arcwZ%2FjXBqYKU%2BDylW%2FRXQZ99rOqBDEeMTR5IewYI%2F6wYNrR0Fub60UrXrdYtj31NDIwE4WC3uIABB3rXx0NDUDlLJF1LzrCiGkmxBY1v5sf%2B3eqjJNGOiCFajSDUnyLdi9ODiCq0r2R2otJGFZ1F4CxCZHvZbcTAKRrnlw7eOK1ehqs6RBfEMLMXVk6H8nhZLYHClvOOGLFQPSnDj8HzcyBfR%2BxUF%2BhC%2BhMry1VO0lMks%2BN3qO1qJCdFrDmmZB311wMJz1j5AhTtHt0Lra%2FYAH7Jq3C5NwoYzdadb79c7CfX8y1RGLHuprrOHDwf39o3RjYFmUr8nQ4l7suYvyDCKhp4qreSn%2BhV58r7Ye2DvOdhnsfEmS%2FxWBk%2BAEph7NsWyyhGXi%2FfIbgItbM28MolU8QwuinbfTNlXsNIVMknckjXjgxnI9LOkHRCjC3XzABpZcYO%2FcwOJHm3TArETGX1pm7W6gfamBJVddPlKUtl5T5vMzdmYjNwxCGzkKxfSW1hvNuxozZX9GT5wRd5kXztbiEWNCd2IWXIl5dyOQLsuyVbcjlsAWviz4xF7SG2W9zLX%2BMQOQ%2BFMASpQwhrjnvwY6pgF7S66UxTZ03MJT3SQjqPctsOoLdkCd45Dyjylx4Q9Kz9frJNk1A6y%2Bvp4GiCkLc7bs5T2EyQF%2Fjo8epB%2FQpbslEMTSIKgmNTJq8p8H%2BD%2FmjD7%2BQYE%2BAImgpfBVtNXbba9WQryznPHYAj%2F98fNEfN%2FzZFh%2FxMRzNQ6wrf1qYj%2FzuZNb4r6VS8pQ%2BukBUZEo5l0yNnLogA9SpQqk6H4X0SWuuM9lY6xo&X-Amz-Signature=301a5ba1f8d6bcf346e3770a888e68c53cda07bf5e68ef9414ef3f6ea896ddcf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626IPXKFX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDilmYMG3yB%2BGcNsOxRLihE%2B%2FZkvKNbD0htLObNqVewHQIgQK3xUQSZfdbubrA%2F20xUGFXHn0wXJ%2B%2BFKgGu3uPtEDUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEgbyj%2F2UU3mgOXfnSrcA8EcX%2FO%2BQcDpvWkuDWmoN4Jl18DEC40tSYMpyPy9eWcCJlTc5Ap8AeWKWgquKlO6qGbgu9gMNWlvKhAcAo3D6MQ7vx%2FlUiBm%2Ff%2Bs1%2BxGHoJkHkHP5jLbNidKzH7ROZKxZTVoEApP%2B9Ne%2FJf51PiIGTpys8dM3Np2X48Ku%2FUjYcCzzd6ft0ZccjuOpakHGkKLC7quT7z9XEfw73hma5mVYVcuOa1eZW%2B7Cz5GR9FsFmYoCXNSog52i3%2F7Lsl5ZhAnGwzV8EVnTS%2B6JZ7ffZHioixyx5Pre9Vz5vZNl2OgCbhmkAAIq2MfZuYVqc59qfB6Q3T4C%2FDnbjzvwOlZyoYR3%2FFxg2Xs5sxmjWca3v%2FvOvhMMVKVEtVpyxr8cdRoFb5tUeTk5U%2BJqQGZDZ4vJMx266XT%2F0e8S7CGJDjyL53wPoFP6g1JNbsaRHAiPQPkUNbRzFTnRQm03NY%2FSdUF%2F8gYu1H14nvfn8z%2BzaqXhgumtKDzjskU96bKDZIBMGitEhF5%2BibuSG4IT5LbrBrlxikg3mAzdGQAzqOh56pYQAElV3dChyi1j4Wdtpdy0XLEmxl1kLoV34PaziKRiM%2FtUEj9QMfreiq7kr%2FsYfb3N1n5ryD6orT8fztdb5PdQPc7MOf2pL4GOqUBMaE7re0xk5uKLtoJkRNmt4eEyFECFYqRbKFw%2FW9oEwfElDrEPA%2FYieUYr%2B2sFh79QceL5U9pk3Vd%2Fc%2BVqa4ugL79p8p2JqpNlXONNhx8DyZDt14iNKIVCyiobmAKD2km%2Fh%2BTesxhvBkmi%2BAnQQHs8H%2FcEM72J1CEAyIS0whbNTb4jiED1E5wmq44On0XZYAuuy9tYuYAlhZOMjjVeB2Yuku8qycS&X-Amz-Signature=2c1b2e6faa11ae770111792a08a5c945b90d3a5a7805b0932afa350ce60475dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626IPXKFX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDilmYMG3yB%2BGcNsOxRLihE%2B%2FZkvKNbD0htLObNqVewHQIgQK3xUQSZfdbubrA%2F20xUGFXHn0wXJ%2B%2BFKgGu3uPtEDUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEgbyj%2F2UU3mgOXfnSrcA8EcX%2FO%2BQcDpvWkuDWmoN4Jl18DEC40tSYMpyPy9eWcCJlTc5Ap8AeWKWgquKlO6qGbgu9gMNWlvKhAcAo3D6MQ7vx%2FlUiBm%2Ff%2Bs1%2BxGHoJkHkHP5jLbNidKzH7ROZKxZTVoEApP%2B9Ne%2FJf51PiIGTpys8dM3Np2X48Ku%2FUjYcCzzd6ft0ZccjuOpakHGkKLC7quT7z9XEfw73hma5mVYVcuOa1eZW%2B7Cz5GR9FsFmYoCXNSog52i3%2F7Lsl5ZhAnGwzV8EVnTS%2B6JZ7ffZHioixyx5Pre9Vz5vZNl2OgCbhmkAAIq2MfZuYVqc59qfB6Q3T4C%2FDnbjzvwOlZyoYR3%2FFxg2Xs5sxmjWca3v%2FvOvhMMVKVEtVpyxr8cdRoFb5tUeTk5U%2BJqQGZDZ4vJMx266XT%2F0e8S7CGJDjyL53wPoFP6g1JNbsaRHAiPQPkUNbRzFTnRQm03NY%2FSdUF%2F8gYu1H14nvfn8z%2BzaqXhgumtKDzjskU96bKDZIBMGitEhF5%2BibuSG4IT5LbrBrlxikg3mAzdGQAzqOh56pYQAElV3dChyi1j4Wdtpdy0XLEmxl1kLoV34PaziKRiM%2FtUEj9QMfreiq7kr%2FsYfb3N1n5ryD6orT8fztdb5PdQPc7MOf2pL4GOqUBMaE7re0xk5uKLtoJkRNmt4eEyFECFYqRbKFw%2FW9oEwfElDrEPA%2FYieUYr%2B2sFh79QceL5U9pk3Vd%2Fc%2BVqa4ugL79p8p2JqpNlXONNhx8DyZDt14iNKIVCyiobmAKD2km%2Fh%2BTesxhvBkmi%2BAnQQHs8H%2FcEM72J1CEAyIS0whbNTb4jiED1E5wmq44On0XZYAuuy9tYuYAlhZOMjjVeB2Yuku8qycS&X-Amz-Signature=cadc99ed0d4c25604246a40823682d654fbef2560d12c346b47e054296c8c767&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626IPXKFX%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDilmYMG3yB%2BGcNsOxRLihE%2B%2FZkvKNbD0htLObNqVewHQIgQK3xUQSZfdbubrA%2F20xUGFXHn0wXJ%2B%2BFKgGu3uPtEDUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEgbyj%2F2UU3mgOXfnSrcA8EcX%2FO%2BQcDpvWkuDWmoN4Jl18DEC40tSYMpyPy9eWcCJlTc5Ap8AeWKWgquKlO6qGbgu9gMNWlvKhAcAo3D6MQ7vx%2FlUiBm%2Ff%2Bs1%2BxGHoJkHkHP5jLbNidKzH7ROZKxZTVoEApP%2B9Ne%2FJf51PiIGTpys8dM3Np2X48Ku%2FUjYcCzzd6ft0ZccjuOpakHGkKLC7quT7z9XEfw73hma5mVYVcuOa1eZW%2B7Cz5GR9FsFmYoCXNSog52i3%2F7Lsl5ZhAnGwzV8EVnTS%2B6JZ7ffZHioixyx5Pre9Vz5vZNl2OgCbhmkAAIq2MfZuYVqc59qfB6Q3T4C%2FDnbjzvwOlZyoYR3%2FFxg2Xs5sxmjWca3v%2FvOvhMMVKVEtVpyxr8cdRoFb5tUeTk5U%2BJqQGZDZ4vJMx266XT%2F0e8S7CGJDjyL53wPoFP6g1JNbsaRHAiPQPkUNbRzFTnRQm03NY%2FSdUF%2F8gYu1H14nvfn8z%2BzaqXhgumtKDzjskU96bKDZIBMGitEhF5%2BibuSG4IT5LbrBrlxikg3mAzdGQAzqOh56pYQAElV3dChyi1j4Wdtpdy0XLEmxl1kLoV34PaziKRiM%2FtUEj9QMfreiq7kr%2FsYfb3N1n5ryD6orT8fztdb5PdQPc7MOf2pL4GOqUBMaE7re0xk5uKLtoJkRNmt4eEyFECFYqRbKFw%2FW9oEwfElDrEPA%2FYieUYr%2B2sFh79QceL5U9pk3Vd%2Fc%2BVqa4ugL79p8p2JqpNlXONNhx8DyZDt14iNKIVCyiobmAKD2km%2Fh%2BTesxhvBkmi%2BAnQQHs8H%2FcEM72J1CEAyIS0whbNTb4jiED1E5wmq44On0XZYAuuy9tYuYAlhZOMjjVeB2Yuku8qycS&X-Amz-Signature=e8d9d911427c0ce9ef1e4531a169d94656ac60b44c142eabc4c198604aa7f441&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

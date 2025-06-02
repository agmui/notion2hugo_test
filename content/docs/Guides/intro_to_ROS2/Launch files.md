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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMW7XQD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC3lwXajmGwzD9t%2FqtMkAiS6xKxFmP%2FNZX5sIPJL1SKRgIgHe79kFGWkf7h7461Uv%2F0s0LQwXTizCZ4rPthQ3WeKSQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl8Sp5XZbVebZDgKyrcA73zaRLjW2w1QoyvNYBxJ5fxzTSYu6WPXgIN763i%2BbhhDiOYH0LEIhaQMREQPXG6rFFbAoBwyZQZDCmA0WiRuUVj%2BvOlf%2BuPWQb3TlPZEL4iP71yQ8IG0AWgoCFRc6omr%2FpzNZG8jAMUV2GDTRBgP1G4KpK%2BiEZJgGILg7SzsWYHCgltvwPTUhOe9nhqmpfcWjH82ATYlH%2BQywKwu4KW48HdV84yTXL8k7osPerw19xFkV6WFaGQ4gF9KvZnXjlDqY788slg%2BZ3CjH%2Be9RwBa19Jl%2BpdBZLuxOWdgvEzCu8t6eXxdQHPEP6ZIQBWc8TvjOy%2BgATxvCxYZru%2B%2FxjeE6dPDeVhlbnQv3cHUQk2nUeylJ%2FboUAMzQGmhyA5cmfW2hnU3Pr3M5%2FZSVU03NmkEh2htdjEqHt6%2Bg7R%2BTGoQL60BCxrD00pTX0ZLyi0V34t6HV533HIEHFJ%2FFFdEDdCAYZoHt%2Fb3gnsCQQ35tD7RCxT1XeTibci%2BipFWKfXkeW%2BOOv4Ve7MI2141WiUnGsNu43wA2itl7yTYJR8unkxiW1%2Ba5qBXo%2FSNWbF63rYY6svLMMgC%2B3DCvD6MWQF6Y7%2By3gywQ4TYCKjwMchy22RFvd1J3EXM4Y8YV2%2B9%2BiYMI219sEGOqUB05ej1XLLwYwA3XBRMil6RT%2BC0JOp9gDRdwTN9c%2BqAa2I39WuLAA5wXBlPjVxjFLm8XBkkGXP4R%2FGqzbFz%2BiYvTKorXM7gocGzfLpjTi7T5Hxd72teIG%2F%2Fy9Kd48FqUMtUkpMZwQXhP5dXpLL2y8jnm1woXgfoK%2Fw5SZKatL1adnoKwXZZd2dllmvwe1gBUI0CoRlCtS%2Fjw9C1nyhHD4OxeaDztja&X-Amz-Signature=502d93b01d63d7cdc6d447039a5bdb1d8d8bf374793654a09f316cd5063b8504&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMW7XQD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC3lwXajmGwzD9t%2FqtMkAiS6xKxFmP%2FNZX5sIPJL1SKRgIgHe79kFGWkf7h7461Uv%2F0s0LQwXTizCZ4rPthQ3WeKSQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl8Sp5XZbVebZDgKyrcA73zaRLjW2w1QoyvNYBxJ5fxzTSYu6WPXgIN763i%2BbhhDiOYH0LEIhaQMREQPXG6rFFbAoBwyZQZDCmA0WiRuUVj%2BvOlf%2BuPWQb3TlPZEL4iP71yQ8IG0AWgoCFRc6omr%2FpzNZG8jAMUV2GDTRBgP1G4KpK%2BiEZJgGILg7SzsWYHCgltvwPTUhOe9nhqmpfcWjH82ATYlH%2BQywKwu4KW48HdV84yTXL8k7osPerw19xFkV6WFaGQ4gF9KvZnXjlDqY788slg%2BZ3CjH%2Be9RwBa19Jl%2BpdBZLuxOWdgvEzCu8t6eXxdQHPEP6ZIQBWc8TvjOy%2BgATxvCxYZru%2B%2FxjeE6dPDeVhlbnQv3cHUQk2nUeylJ%2FboUAMzQGmhyA5cmfW2hnU3Pr3M5%2FZSVU03NmkEh2htdjEqHt6%2Bg7R%2BTGoQL60BCxrD00pTX0ZLyi0V34t6HV533HIEHFJ%2FFFdEDdCAYZoHt%2Fb3gnsCQQ35tD7RCxT1XeTibci%2BipFWKfXkeW%2BOOv4Ve7MI2141WiUnGsNu43wA2itl7yTYJR8unkxiW1%2Ba5qBXo%2FSNWbF63rYY6svLMMgC%2B3DCvD6MWQF6Y7%2By3gywQ4TYCKjwMchy22RFvd1J3EXM4Y8YV2%2B9%2BiYMI219sEGOqUB05ej1XLLwYwA3XBRMil6RT%2BC0JOp9gDRdwTN9c%2BqAa2I39WuLAA5wXBlPjVxjFLm8XBkkGXP4R%2FGqzbFz%2BiYvTKorXM7gocGzfLpjTi7T5Hxd72teIG%2F%2Fy9Kd48FqUMtUkpMZwQXhP5dXpLL2y8jnm1woXgfoK%2Fw5SZKatL1adnoKwXZZd2dllmvwe1gBUI0CoRlCtS%2Fjw9C1nyhHD4OxeaDztja&X-Amz-Signature=093804854717f26351adc5fa5de77f72bc1b01f610d613bb89482975f276a453&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMW7XQD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T150958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC3lwXajmGwzD9t%2FqtMkAiS6xKxFmP%2FNZX5sIPJL1SKRgIgHe79kFGWkf7h7461Uv%2F0s0LQwXTizCZ4rPthQ3WeKSQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl8Sp5XZbVebZDgKyrcA73zaRLjW2w1QoyvNYBxJ5fxzTSYu6WPXgIN763i%2BbhhDiOYH0LEIhaQMREQPXG6rFFbAoBwyZQZDCmA0WiRuUVj%2BvOlf%2BuPWQb3TlPZEL4iP71yQ8IG0AWgoCFRc6omr%2FpzNZG8jAMUV2GDTRBgP1G4KpK%2BiEZJgGILg7SzsWYHCgltvwPTUhOe9nhqmpfcWjH82ATYlH%2BQywKwu4KW48HdV84yTXL8k7osPerw19xFkV6WFaGQ4gF9KvZnXjlDqY788slg%2BZ3CjH%2Be9RwBa19Jl%2BpdBZLuxOWdgvEzCu8t6eXxdQHPEP6ZIQBWc8TvjOy%2BgATxvCxYZru%2B%2FxjeE6dPDeVhlbnQv3cHUQk2nUeylJ%2FboUAMzQGmhyA5cmfW2hnU3Pr3M5%2FZSVU03NmkEh2htdjEqHt6%2Bg7R%2BTGoQL60BCxrD00pTX0ZLyi0V34t6HV533HIEHFJ%2FFFdEDdCAYZoHt%2Fb3gnsCQQ35tD7RCxT1XeTibci%2BipFWKfXkeW%2BOOv4Ve7MI2141WiUnGsNu43wA2itl7yTYJR8unkxiW1%2Ba5qBXo%2FSNWbF63rYY6svLMMgC%2B3DCvD6MWQF6Y7%2By3gywQ4TYCKjwMchy22RFvd1J3EXM4Y8YV2%2B9%2BiYMI219sEGOqUB05ej1XLLwYwA3XBRMil6RT%2BC0JOp9gDRdwTN9c%2BqAa2I39WuLAA5wXBlPjVxjFLm8XBkkGXP4R%2FGqzbFz%2BiYvTKorXM7gocGzfLpjTi7T5Hxd72teIG%2F%2Fy9Kd48FqUMtUkpMZwQXhP5dXpLL2y8jnm1woXgfoK%2Fw5SZKatL1adnoKwXZZd2dllmvwe1gBUI0CoRlCtS%2Fjw9C1nyhHD4OxeaDztja&X-Amz-Signature=19423d70d80f6aeca75576ae295a7382c03d3df1cf1765e133df91af15f8b1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

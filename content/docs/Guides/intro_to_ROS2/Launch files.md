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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKCA6PO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG8hWvzTyR8MZh8zegF4zeuXBe%2BBxqKTJCeQ8A4YX%2FbgIhALUlHtdt0owbO7f%2BK5r%2B7eEJmoAsuXfgb4tkWaBVrXCyKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNyOOs5OYPoG5oba0q3AO15EjKkbmnQvITq4cvW5mrmOoT5gG8ShjAV84IRngjdtST%2FIpAYn0XoFh%2B6OLfRmNACvXJPdGWyjlulBfhmNYH4AKrGI84pvzaZ5sCstUxxLji0AEjbJkZqSlpUtv9agDZngqeBPzCMu1rQ34GaojJJSpL8w3hxgodcv28LQv3f2AnWwmqa2InAbfdHLsKpqS9O5JIZNGdAL%2BTyg3cb7aJwsRCyiWPqXPnwToS3WHrUSrBE2FWlnhqBbXBab2osXTfZZuoRGyNfTI2N%2FvL4J5HPcZI0G0uchIaFofP3IaJRKY1FGwqhuFKrZsLWHw8BdF6%2BLyoQE4L2bMNuYN7G0jYh0O452JlnWteMjAl5Fnmo%2BslkISrvVQCMqQS8VePXXq6sFZ%2Fr9wa9pLLGWLMni9KJ7lzsQFVv5wvEZboUKL1dwckAG30Hf9besOAU4o6SHyeDHWUx%2FejUtbLBtPV%2BdMDOrT49Nd0WYmcNJpYL5PHgA2sE8u1%2By7eIxdfKs3Ghowc9oUW9RDK1QfsZwQMbYO7T8fXJTvR3Fxe8N4Kws3zaN5pNtYBdmt7vg7pfNDWx52k2VUqyvU%2FuB62VARSDg41jyerVQwmpMOk6PDwj%2BxTVv0F3vXTf7h%2BE6pO5zDk7ti9BjqkAaacKGszRvNXq1FZGFiMOY0R8jGEjgq6X2uvNds80BrbIMaXGCpQhcU7AjMA6uM3565niZVUDdumZkmyIbfShj5ORw3UPj9AYw1DD9vfsFMiIet1rj8h7dqsLaImVjLlw8o3EonfANuhqkqyyxGWpvlNijNHCllpTkcvf85L3BO%2FRJkLVmkBJAtqS5xqKhWBYnRFtcLX2Y9FD16JgKm2rQU2u62U&X-Amz-Signature=72b3fa9e80aa98db835475cffcce888e220ed184a2e30afee113f4bd769e8c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKCA6PO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG8hWvzTyR8MZh8zegF4zeuXBe%2BBxqKTJCeQ8A4YX%2FbgIhALUlHtdt0owbO7f%2BK5r%2B7eEJmoAsuXfgb4tkWaBVrXCyKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNyOOs5OYPoG5oba0q3AO15EjKkbmnQvITq4cvW5mrmOoT5gG8ShjAV84IRngjdtST%2FIpAYn0XoFh%2B6OLfRmNACvXJPdGWyjlulBfhmNYH4AKrGI84pvzaZ5sCstUxxLji0AEjbJkZqSlpUtv9agDZngqeBPzCMu1rQ34GaojJJSpL8w3hxgodcv28LQv3f2AnWwmqa2InAbfdHLsKpqS9O5JIZNGdAL%2BTyg3cb7aJwsRCyiWPqXPnwToS3WHrUSrBE2FWlnhqBbXBab2osXTfZZuoRGyNfTI2N%2FvL4J5HPcZI0G0uchIaFofP3IaJRKY1FGwqhuFKrZsLWHw8BdF6%2BLyoQE4L2bMNuYN7G0jYh0O452JlnWteMjAl5Fnmo%2BslkISrvVQCMqQS8VePXXq6sFZ%2Fr9wa9pLLGWLMni9KJ7lzsQFVv5wvEZboUKL1dwckAG30Hf9besOAU4o6SHyeDHWUx%2FejUtbLBtPV%2BdMDOrT49Nd0WYmcNJpYL5PHgA2sE8u1%2By7eIxdfKs3Ghowc9oUW9RDK1QfsZwQMbYO7T8fXJTvR3Fxe8N4Kws3zaN5pNtYBdmt7vg7pfNDWx52k2VUqyvU%2FuB62VARSDg41jyerVQwmpMOk6PDwj%2BxTVv0F3vXTf7h%2BE6pO5zDk7ti9BjqkAaacKGszRvNXq1FZGFiMOY0R8jGEjgq6X2uvNds80BrbIMaXGCpQhcU7AjMA6uM3565niZVUDdumZkmyIbfShj5ORw3UPj9AYw1DD9vfsFMiIet1rj8h7dqsLaImVjLlw8o3EonfANuhqkqyyxGWpvlNijNHCllpTkcvf85L3BO%2FRJkLVmkBJAtqS5xqKhWBYnRFtcLX2Y9FD16JgKm2rQU2u62U&X-Amz-Signature=9befd2112582e85d6bbe6e7549dc34654cfdccc0c3dc3a39f8ac569d51e81e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKCA6PO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG8hWvzTyR8MZh8zegF4zeuXBe%2BBxqKTJCeQ8A4YX%2FbgIhALUlHtdt0owbO7f%2BK5r%2B7eEJmoAsuXfgb4tkWaBVrXCyKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNyOOs5OYPoG5oba0q3AO15EjKkbmnQvITq4cvW5mrmOoT5gG8ShjAV84IRngjdtST%2FIpAYn0XoFh%2B6OLfRmNACvXJPdGWyjlulBfhmNYH4AKrGI84pvzaZ5sCstUxxLji0AEjbJkZqSlpUtv9agDZngqeBPzCMu1rQ34GaojJJSpL8w3hxgodcv28LQv3f2AnWwmqa2InAbfdHLsKpqS9O5JIZNGdAL%2BTyg3cb7aJwsRCyiWPqXPnwToS3WHrUSrBE2FWlnhqBbXBab2osXTfZZuoRGyNfTI2N%2FvL4J5HPcZI0G0uchIaFofP3IaJRKY1FGwqhuFKrZsLWHw8BdF6%2BLyoQE4L2bMNuYN7G0jYh0O452JlnWteMjAl5Fnmo%2BslkISrvVQCMqQS8VePXXq6sFZ%2Fr9wa9pLLGWLMni9KJ7lzsQFVv5wvEZboUKL1dwckAG30Hf9besOAU4o6SHyeDHWUx%2FejUtbLBtPV%2BdMDOrT49Nd0WYmcNJpYL5PHgA2sE8u1%2By7eIxdfKs3Ghowc9oUW9RDK1QfsZwQMbYO7T8fXJTvR3Fxe8N4Kws3zaN5pNtYBdmt7vg7pfNDWx52k2VUqyvU%2FuB62VARSDg41jyerVQwmpMOk6PDwj%2BxTVv0F3vXTf7h%2BE6pO5zDk7ti9BjqkAaacKGszRvNXq1FZGFiMOY0R8jGEjgq6X2uvNds80BrbIMaXGCpQhcU7AjMA6uM3565niZVUDdumZkmyIbfShj5ORw3UPj9AYw1DD9vfsFMiIet1rj8h7dqsLaImVjLlw8o3EonfANuhqkqyyxGWpvlNijNHCllpTkcvf85L3BO%2FRJkLVmkBJAtqS5xqKhWBYnRFtcLX2Y9FD16JgKm2rQU2u62U&X-Amz-Signature=d2bcc8097e4c02236162928c766d79a06e9cb06e87f897d5e2230474b9dd340d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

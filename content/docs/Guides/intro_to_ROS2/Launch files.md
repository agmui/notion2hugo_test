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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CPBTMMZ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIF%2B4hD5%2BV0PS0JjpY35UlfVCOpC4Tv62sjmZ%2FQ84HeCcAiA5nnQZ1BiYDhBJKx%2Bex3KFNv%2B3lxy9wNfdQmf%2Bvt61HiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVvTDxphoYCta79AzKtwDB2L%2BB30onC4sb222knH4rZz7nby7%2F%2Ft%2FlMaccyRRTPoiQpeAy0%2FbmtH2Uj6Bt%2Fwj1c9I8zB92IywBWQdlsYG2yCtGyyy%2F%2FUgLJxmi91vKSuP1H8z2HQIaIwHNaKhdW5JFh3g%2FB7zVuc2l0ic6lWOFgXBbjpSyN%2Fg2Wp1PP04zJdDdcjn%2BXSOSft%2B5cxtVF%2FafhMginBvchOZ3g2IhZK3Fx6kOvlPFdpiijjIoj2KkAmPfNrTdPAFxZIFx2mBz63i5HN%2F8EQaZg4Mu4G90qe4LLQIbh%2By3KrpvZXeXqcXuX3Opnld2nnco72nXO1afVrMKBVWJ4aWZm4tulx6ZceCUvdUPLFnZFLWEKW4beM8IX57aE528VqLEiy3nz0q%2Bbcw2ysDUImRO3HIxCC2Bgry4X7JyzVXX1GOaLV63YKuPp3Za9mTQ7RPTW0crkiIRuQwjPjw24847alKlcYzWZQvM9stz0JsVpY1TjXRo99c%2BvZ%2FiH8P%2FYqbX4XGAD5xtrlNyql6W5fFvhzumLBy7pYK8uioFYtT%2FKTJA8SKTViS%2BR7TOsnWHI1GZnTJl2uZv9pBjHiHCkCadM4rIqQBqDBIx24dDyomMj6%2FBwZEWmbLY%2F7%2Flh4PQ%2BM6RbGFDNownaGkwAY6pgEqz6SmbLAwYGgIGa%2FKzLI8L4wuqJvy9iywKlgMOCAOHT0kPGDxz9PCXy%2Fn7hu2I7DwY%2BcqN6ihpvcJSGu2gVyv69JqAOFsIZMBlJQXjAhG4J9Ed0GpQXqKC4ENsB82HFcopZq15VaaXIP87QNChExb7f01P546DRnQPGzXuXqfU0%2BCAdMHZ1VugantCjdM79g%2FgMnUvaWXryDAneuy8TDbbUavLf%2FV&X-Amz-Signature=509c0d92efd0b1b4d6beb3e837bb694f926a0a77fc4b7cade292e93f0c27e015&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CPBTMMZ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIF%2B4hD5%2BV0PS0JjpY35UlfVCOpC4Tv62sjmZ%2FQ84HeCcAiA5nnQZ1BiYDhBJKx%2Bex3KFNv%2B3lxy9wNfdQmf%2Bvt61HiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVvTDxphoYCta79AzKtwDB2L%2BB30onC4sb222knH4rZz7nby7%2F%2Ft%2FlMaccyRRTPoiQpeAy0%2FbmtH2Uj6Bt%2Fwj1c9I8zB92IywBWQdlsYG2yCtGyyy%2F%2FUgLJxmi91vKSuP1H8z2HQIaIwHNaKhdW5JFh3g%2FB7zVuc2l0ic6lWOFgXBbjpSyN%2Fg2Wp1PP04zJdDdcjn%2BXSOSft%2B5cxtVF%2FafhMginBvchOZ3g2IhZK3Fx6kOvlPFdpiijjIoj2KkAmPfNrTdPAFxZIFx2mBz63i5HN%2F8EQaZg4Mu4G90qe4LLQIbh%2By3KrpvZXeXqcXuX3Opnld2nnco72nXO1afVrMKBVWJ4aWZm4tulx6ZceCUvdUPLFnZFLWEKW4beM8IX57aE528VqLEiy3nz0q%2Bbcw2ysDUImRO3HIxCC2Bgry4X7JyzVXX1GOaLV63YKuPp3Za9mTQ7RPTW0crkiIRuQwjPjw24847alKlcYzWZQvM9stz0JsVpY1TjXRo99c%2BvZ%2FiH8P%2FYqbX4XGAD5xtrlNyql6W5fFvhzumLBy7pYK8uioFYtT%2FKTJA8SKTViS%2BR7TOsnWHI1GZnTJl2uZv9pBjHiHCkCadM4rIqQBqDBIx24dDyomMj6%2FBwZEWmbLY%2F7%2Flh4PQ%2BM6RbGFDNownaGkwAY6pgEqz6SmbLAwYGgIGa%2FKzLI8L4wuqJvy9iywKlgMOCAOHT0kPGDxz9PCXy%2Fn7hu2I7DwY%2BcqN6ihpvcJSGu2gVyv69JqAOFsIZMBlJQXjAhG4J9Ed0GpQXqKC4ENsB82HFcopZq15VaaXIP87QNChExb7f01P546DRnQPGzXuXqfU0%2BCAdMHZ1VugantCjdM79g%2FgMnUvaWXryDAneuy8TDbbUavLf%2FV&X-Amz-Signature=69b3fa92869f6fc979bc31e960d527c157f58f147001d00d865ff04fe3a2c21c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CPBTMMZ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIF%2B4hD5%2BV0PS0JjpY35UlfVCOpC4Tv62sjmZ%2FQ84HeCcAiA5nnQZ1BiYDhBJKx%2Bex3KFNv%2B3lxy9wNfdQmf%2Bvt61HiqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVvTDxphoYCta79AzKtwDB2L%2BB30onC4sb222knH4rZz7nby7%2F%2Ft%2FlMaccyRRTPoiQpeAy0%2FbmtH2Uj6Bt%2Fwj1c9I8zB92IywBWQdlsYG2yCtGyyy%2F%2FUgLJxmi91vKSuP1H8z2HQIaIwHNaKhdW5JFh3g%2FB7zVuc2l0ic6lWOFgXBbjpSyN%2Fg2Wp1PP04zJdDdcjn%2BXSOSft%2B5cxtVF%2FafhMginBvchOZ3g2IhZK3Fx6kOvlPFdpiijjIoj2KkAmPfNrTdPAFxZIFx2mBz63i5HN%2F8EQaZg4Mu4G90qe4LLQIbh%2By3KrpvZXeXqcXuX3Opnld2nnco72nXO1afVrMKBVWJ4aWZm4tulx6ZceCUvdUPLFnZFLWEKW4beM8IX57aE528VqLEiy3nz0q%2Bbcw2ysDUImRO3HIxCC2Bgry4X7JyzVXX1GOaLV63YKuPp3Za9mTQ7RPTW0crkiIRuQwjPjw24847alKlcYzWZQvM9stz0JsVpY1TjXRo99c%2BvZ%2FiH8P%2FYqbX4XGAD5xtrlNyql6W5fFvhzumLBy7pYK8uioFYtT%2FKTJA8SKTViS%2BR7TOsnWHI1GZnTJl2uZv9pBjHiHCkCadM4rIqQBqDBIx24dDyomMj6%2FBwZEWmbLY%2F7%2Flh4PQ%2BM6RbGFDNownaGkwAY6pgEqz6SmbLAwYGgIGa%2FKzLI8L4wuqJvy9iywKlgMOCAOHT0kPGDxz9PCXy%2Fn7hu2I7DwY%2BcqN6ihpvcJSGu2gVyv69JqAOFsIZMBlJQXjAhG4J9Ed0GpQXqKC4ENsB82HFcopZq15VaaXIP87QNChExb7f01P546DRnQPGzXuXqfU0%2BCAdMHZ1VugantCjdM79g%2FgMnUvaWXryDAneuy8TDbbUavLf%2FV&X-Amz-Signature=45a5033e25e813bb6628851633c0629072bf09fb0f46f11b24762a7ec30773bc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

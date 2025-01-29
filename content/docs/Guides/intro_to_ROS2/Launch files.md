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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NWU64FV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCR8%2Fx9JyVFG2DKTyQ28hrDggN1svZ2%2FJXTMD5J6LT30AIgQV41J%2BojT8PCpX4nkucH24yWHQaBBklYdSSm19v6IU0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtu3Gv56VCaMi%2FN%2FSrcA9B141kQDs%2BAqqH1OwuYblSKtTZHzN89kZrus%2F0HqpZ48vTEQHIeQ58rNuJH5pwZgGp%2BDN5WVa5KNOfwFQxAMB7m3kov6Nas%2ByCiKaxaGQNBvs9xGe9vtRTBHBeyXbJunTOPVia4U0Q1iuhkUoOn9o5tdNCLKTdgVqgG%2FQCoBKj8fPk8BXk5bDQZHCHO4LlEbYoYmP1CPm%2Bcl9O%2BQWYMh4M5ac3xhm0NxiMwvc1vggCdUK3%2F7Ys42dj1%2Bpjp3lPJGYv6APQNWWpOLy%2BD5ppE7Csqz2jXisUNqD4URNiee06aXd05s7rAl7BCIyo6%2BuYQMo0L%2BHHcghrjq%2FZnPwdt1aQerNK9fcw%2FZh9oZHmE4gconA9ZzKK5741%2B%2Be40cvpRiiJPtIVenrKKoQXoc373Z3oIfhfVjcK37tRAZnSqUEaS9jlqv6W7sMq%2BWa9fR0tE71A4YDhfI5fPjKJVg70xRzOC3Y2EldTHGT4xDspBKsTSpNec7ah0wbiwYPpWP6eemWuY7ON6hBB%2BsQb85qR%2FTlO7iUzasmddMhiixuvVMKlUb%2FKyXT0GqY34ydyInvWjl7pl9QP%2BMHLqjrLhXBatkBHyiNgdeS6v0xZIxi8FWCWF2s4Rsj3O5X0YXPoOMO675rwGOqUBZ22L%2Bzk8IRC%2F%2BwJrTs%2FoIB7WtQ9a1tmy%2BbIlBe3YcONKN0B5qtncjceunD5f9f%2FYa2QTHhom8cN0K%2Fj9mVW4Fufb8%2BR513xItfi4SOgerphWQnUlyljIfhKTzODNRnfQ%2BuzDGcPHvayGAuRimvfl1h7B4OSR6XiMC7NNYYwy7cKSKDdeyMi2xRy2OO3i2DqbD3fHuEvuui9Mp7IoIjI75ShOeIGj&X-Amz-Signature=33f22f2fa58afebc5a211fbd19ad4012feeeeefb5852986971233878e0bdd7e4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NWU64FV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCR8%2Fx9JyVFG2DKTyQ28hrDggN1svZ2%2FJXTMD5J6LT30AIgQV41J%2BojT8PCpX4nkucH24yWHQaBBklYdSSm19v6IU0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtu3Gv56VCaMi%2FN%2FSrcA9B141kQDs%2BAqqH1OwuYblSKtTZHzN89kZrus%2F0HqpZ48vTEQHIeQ58rNuJH5pwZgGp%2BDN5WVa5KNOfwFQxAMB7m3kov6Nas%2ByCiKaxaGQNBvs9xGe9vtRTBHBeyXbJunTOPVia4U0Q1iuhkUoOn9o5tdNCLKTdgVqgG%2FQCoBKj8fPk8BXk5bDQZHCHO4LlEbYoYmP1CPm%2Bcl9O%2BQWYMh4M5ac3xhm0NxiMwvc1vggCdUK3%2F7Ys42dj1%2Bpjp3lPJGYv6APQNWWpOLy%2BD5ppE7Csqz2jXisUNqD4URNiee06aXd05s7rAl7BCIyo6%2BuYQMo0L%2BHHcghrjq%2FZnPwdt1aQerNK9fcw%2FZh9oZHmE4gconA9ZzKK5741%2B%2Be40cvpRiiJPtIVenrKKoQXoc373Z3oIfhfVjcK37tRAZnSqUEaS9jlqv6W7sMq%2BWa9fR0tE71A4YDhfI5fPjKJVg70xRzOC3Y2EldTHGT4xDspBKsTSpNec7ah0wbiwYPpWP6eemWuY7ON6hBB%2BsQb85qR%2FTlO7iUzasmddMhiixuvVMKlUb%2FKyXT0GqY34ydyInvWjl7pl9QP%2BMHLqjrLhXBatkBHyiNgdeS6v0xZIxi8FWCWF2s4Rsj3O5X0YXPoOMO675rwGOqUBZ22L%2Bzk8IRC%2F%2BwJrTs%2FoIB7WtQ9a1tmy%2BbIlBe3YcONKN0B5qtncjceunD5f9f%2FYa2QTHhom8cN0K%2Fj9mVW4Fufb8%2BR513xItfi4SOgerphWQnUlyljIfhKTzODNRnfQ%2BuzDGcPHvayGAuRimvfl1h7B4OSR6XiMC7NNYYwy7cKSKDdeyMi2xRy2OO3i2DqbD3fHuEvuui9Mp7IoIjI75ShOeIGj&X-Amz-Signature=6c4251238747550e5fe5c9e0761ff4914ba0adc8aa1c3f328793646031a092e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NWU64FV%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCR8%2Fx9JyVFG2DKTyQ28hrDggN1svZ2%2FJXTMD5J6LT30AIgQV41J%2BojT8PCpX4nkucH24yWHQaBBklYdSSm19v6IU0qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKtu3Gv56VCaMi%2FN%2FSrcA9B141kQDs%2BAqqH1OwuYblSKtTZHzN89kZrus%2F0HqpZ48vTEQHIeQ58rNuJH5pwZgGp%2BDN5WVa5KNOfwFQxAMB7m3kov6Nas%2ByCiKaxaGQNBvs9xGe9vtRTBHBeyXbJunTOPVia4U0Q1iuhkUoOn9o5tdNCLKTdgVqgG%2FQCoBKj8fPk8BXk5bDQZHCHO4LlEbYoYmP1CPm%2Bcl9O%2BQWYMh4M5ac3xhm0NxiMwvc1vggCdUK3%2F7Ys42dj1%2Bpjp3lPJGYv6APQNWWpOLy%2BD5ppE7Csqz2jXisUNqD4URNiee06aXd05s7rAl7BCIyo6%2BuYQMo0L%2BHHcghrjq%2FZnPwdt1aQerNK9fcw%2FZh9oZHmE4gconA9ZzKK5741%2B%2Be40cvpRiiJPtIVenrKKoQXoc373Z3oIfhfVjcK37tRAZnSqUEaS9jlqv6W7sMq%2BWa9fR0tE71A4YDhfI5fPjKJVg70xRzOC3Y2EldTHGT4xDspBKsTSpNec7ah0wbiwYPpWP6eemWuY7ON6hBB%2BsQb85qR%2FTlO7iUzasmddMhiixuvVMKlUb%2FKyXT0GqY34ydyInvWjl7pl9QP%2BMHLqjrLhXBatkBHyiNgdeS6v0xZIxi8FWCWF2s4Rsj3O5X0YXPoOMO675rwGOqUBZ22L%2Bzk8IRC%2F%2BwJrTs%2FoIB7WtQ9a1tmy%2BbIlBe3YcONKN0B5qtncjceunD5f9f%2FYa2QTHhom8cN0K%2Fj9mVW4Fufb8%2BR513xItfi4SOgerphWQnUlyljIfhKTzODNRnfQ%2BuzDGcPHvayGAuRimvfl1h7B4OSR6XiMC7NNYYwy7cKSKDdeyMi2xRy2OO3i2DqbD3fHuEvuui9Mp7IoIjI75ShOeIGj&X-Amz-Signature=4c25b6acf2f52e7e8a9818d586fd414beb6775febc838c898c31d91a3c548f22&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

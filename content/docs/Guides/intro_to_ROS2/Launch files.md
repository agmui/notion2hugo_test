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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLUO4UJM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD1YKnqRnywm9La4Q1co5P7ssygJY7bZD2%2BJPaHa8zutAIhALWrh6AwBdI8I0dpwZFFWrzKw8Hisp9ZTpWCRRQewByyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl%2Fg8ta28PVMYYmTcq3AMwGCw9TcTiFXWbpNGta19EwMnUhzkQ%2BzvEMevqCG5XTY2ZhAFv2xciD5QFhmEgYRmzkIhrYl7HZpA5qzIq%2B%2B6d52xmSuthSie3D0lIQFUcGRz7lWEHlvzY3MvmOoBsR80KTx1uvLNgA5aWqY6d1Kkr0C43eCbFGXUxQHDCqbEqBHuX0S2td76hYu%2B7joX%2Be%2B1D7Ss%2Bx%2FnnK185nCOFfiM0WYxdqfGAcLrRPMkwTiAsIQ0f3GKAFoTW7k0gF9piJJGwMhqHg6HIOIEplJQaIlCu1MhuNOwxrDz%2BNDSjj3vtDT7S4NLe1sLeBufKPHUfvWewYo7vQdiqi04ubi8kO4ro%2BFW0ui9Lnj0kb4kjMvhztOi%2FyquzgVa0eYotQGrINir3hNOJ9QCCBCKgIdLKmPhKy79S9ImxfECUo9fqujKJBKVS0PlIrofL%2FqmohvNqmfE4rIBOtUviGt7KNeGfgv%2FXF5sMOZh6bZnZ27mnjCHA0JHPxBzkVZdGYpu5E4RgWQyUz%2F2OCxSR7dK%2FlcoQiYL2vh9b6mkLyNvqqMLgT1hngrOFdvTiHydOqQ6wjtcVwKhuU7WjTRhSanUwcO3l3yDj8dK9dVy9FT38mwTaowK2JrVm45Os%2FYVwZKgzxTCj76jCBjqkAbaDtr1h6CnfgPIn6sSoAOrCjnZN9IpFpq1dVXpmMlhiSkxfVDVxlbm7vKEOYpbaVzU8uJrKJEGCnX6nOH%2B9Y6%2F0ELMhlo9natyzhUKUwbbZZhwJKbqARqcqpyO7HGLNbIoezaqh2JeLlEbtEfkjErSzacA0JCdvUdvUqhhEUkAfaT8HvnroZgN39BokkPl7NCCgWSdOXjEl2rlLWsY8pKuz9pMP&X-Amz-Signature=3a381d9af0c5ce5ab58ed48297ccf2d75e621707f88aa9f0e5dfa742fb33cab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLUO4UJM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD1YKnqRnywm9La4Q1co5P7ssygJY7bZD2%2BJPaHa8zutAIhALWrh6AwBdI8I0dpwZFFWrzKw8Hisp9ZTpWCRRQewByyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl%2Fg8ta28PVMYYmTcq3AMwGCw9TcTiFXWbpNGta19EwMnUhzkQ%2BzvEMevqCG5XTY2ZhAFv2xciD5QFhmEgYRmzkIhrYl7HZpA5qzIq%2B%2B6d52xmSuthSie3D0lIQFUcGRz7lWEHlvzY3MvmOoBsR80KTx1uvLNgA5aWqY6d1Kkr0C43eCbFGXUxQHDCqbEqBHuX0S2td76hYu%2B7joX%2Be%2B1D7Ss%2Bx%2FnnK185nCOFfiM0WYxdqfGAcLrRPMkwTiAsIQ0f3GKAFoTW7k0gF9piJJGwMhqHg6HIOIEplJQaIlCu1MhuNOwxrDz%2BNDSjj3vtDT7S4NLe1sLeBufKPHUfvWewYo7vQdiqi04ubi8kO4ro%2BFW0ui9Lnj0kb4kjMvhztOi%2FyquzgVa0eYotQGrINir3hNOJ9QCCBCKgIdLKmPhKy79S9ImxfECUo9fqujKJBKVS0PlIrofL%2FqmohvNqmfE4rIBOtUviGt7KNeGfgv%2FXF5sMOZh6bZnZ27mnjCHA0JHPxBzkVZdGYpu5E4RgWQyUz%2F2OCxSR7dK%2FlcoQiYL2vh9b6mkLyNvqqMLgT1hngrOFdvTiHydOqQ6wjtcVwKhuU7WjTRhSanUwcO3l3yDj8dK9dVy9FT38mwTaowK2JrVm45Os%2FYVwZKgzxTCj76jCBjqkAbaDtr1h6CnfgPIn6sSoAOrCjnZN9IpFpq1dVXpmMlhiSkxfVDVxlbm7vKEOYpbaVzU8uJrKJEGCnX6nOH%2B9Y6%2F0ELMhlo9natyzhUKUwbbZZhwJKbqARqcqpyO7HGLNbIoezaqh2JeLlEbtEfkjErSzacA0JCdvUdvUqhhEUkAfaT8HvnroZgN39BokkPl7NCCgWSdOXjEl2rlLWsY8pKuz9pMP&X-Amz-Signature=a78d592d112dbec120996e67cabf8254fc22386fed7381b3e783f02a2062cdb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLUO4UJM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T022954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD1YKnqRnywm9La4Q1co5P7ssygJY7bZD2%2BJPaHa8zutAIhALWrh6AwBdI8I0dpwZFFWrzKw8Hisp9ZTpWCRRQewByyKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzl%2Fg8ta28PVMYYmTcq3AMwGCw9TcTiFXWbpNGta19EwMnUhzkQ%2BzvEMevqCG5XTY2ZhAFv2xciD5QFhmEgYRmzkIhrYl7HZpA5qzIq%2B%2B6d52xmSuthSie3D0lIQFUcGRz7lWEHlvzY3MvmOoBsR80KTx1uvLNgA5aWqY6d1Kkr0C43eCbFGXUxQHDCqbEqBHuX0S2td76hYu%2B7joX%2Be%2B1D7Ss%2Bx%2FnnK185nCOFfiM0WYxdqfGAcLrRPMkwTiAsIQ0f3GKAFoTW7k0gF9piJJGwMhqHg6HIOIEplJQaIlCu1MhuNOwxrDz%2BNDSjj3vtDT7S4NLe1sLeBufKPHUfvWewYo7vQdiqi04ubi8kO4ro%2BFW0ui9Lnj0kb4kjMvhztOi%2FyquzgVa0eYotQGrINir3hNOJ9QCCBCKgIdLKmPhKy79S9ImxfECUo9fqujKJBKVS0PlIrofL%2FqmohvNqmfE4rIBOtUviGt7KNeGfgv%2FXF5sMOZh6bZnZ27mnjCHA0JHPxBzkVZdGYpu5E4RgWQyUz%2F2OCxSR7dK%2FlcoQiYL2vh9b6mkLyNvqqMLgT1hngrOFdvTiHydOqQ6wjtcVwKhuU7WjTRhSanUwcO3l3yDj8dK9dVy9FT38mwTaowK2JrVm45Os%2FYVwZKgzxTCj76jCBjqkAbaDtr1h6CnfgPIn6sSoAOrCjnZN9IpFpq1dVXpmMlhiSkxfVDVxlbm7vKEOYpbaVzU8uJrKJEGCnX6nOH%2B9Y6%2F0ELMhlo9natyzhUKUwbbZZhwJKbqARqcqpyO7HGLNbIoezaqh2JeLlEbtEfkjErSzacA0JCdvUdvUqhhEUkAfaT8HvnroZgN39BokkPl7NCCgWSdOXjEl2rlLWsY8pKuz9pMP&X-Amz-Signature=855cc4751e1e7f8c0813ef93488dc5ab9baaf8c43508e13d4d9e044ac262dbb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

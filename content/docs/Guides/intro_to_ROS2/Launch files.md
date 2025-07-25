---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCIFXSA5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCRqo4%2B7w8kv6X1DyOly8b5UNzXH%2B69MxwOVAO7pgSU3QIhAKictGnuzDEg5ygJfeInZxvNHgQnB%2Bs%2FtAkWHQPyVwo6Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwOhk70otStxP0yGUMq3AMc6ZekyVv4GE6IXW85fVDXb1Rwb6Uglzn25%2BFpLatynkJfzKjnVq7DyKdQgbhl6%2Bbl%2Bh3meHaVWRcP%2BnrbM%2BRedgQB7i6EcdavAs44nGFa3Y6PJqusm4RQgs4E68Wt6MjCXfCsu6IHY5Cw9Odxx7BdTV%2BbpwWateFsMKbjgA02jrQ6NxTqhAjRUbITAjpbvC1SDWcMdtIc6Am9TQlAq50beTuXqZtS0Fi3fQmBbnjQkuTE3kZJRMTVLRdvS6pn7u1hWUL%2BoEwDWQgORpUF3Gsh9jFVQ98oCMBmUOsm1ATXlTAdd8UXac6ZycEgsmjM9i78xS0ueX5%2F6P4XYQePo8lJqhH2AP%2Ffg%2BP9HZk7V7S4gZ%2FL5BnjOXsm8OqoLVTaiatSLF8MjRvvresPwXKkJA%2FTH2kOeBueco24HnZYSIJSQCLUTv3XC%2BXh3K2kpdKRUSZ%2B%2FkVwAxSqgahoaN1V3ybbH%2FlziN1JQAN%2BsZQnK49k11NXu%2B2xzuQFRqMoY0IvrQKgo8wUvZZBj6qPLO0St1nNsijctRkQ3Xi2JvazX9VBBe6KJOlrRsIDHu4ce5WhIZMwFwmAGhymGawY1JvyMgQJQmqxJO3wwigAd8Soeo8QvYL9b5cLTDGH2vxnmjCRho7EBjqkAYM6es%2FgZkzRBVbDtuUCBfm3CtAvMDUF%2FtL5%2FE21rHiztndTX4lyp0tistwKJKxxp%2FvyODKjA1cGqeowO7EEAqMjWj7nnvapmnh0XjIB%2F9EBEisCMosYDYCH%2FG%2BSS5rN4BrOxVWyyz6qkg9i6ajDWl8sS5ZHYORQiZ%2FNIQgo0GRSvGSw1ixrELVxLjva1XCIRwUO3Q3bC7LCfYcNJC0HHM2GZXZ3&X-Amz-Signature=2583438a6939f43358fee6a6de729b474c6dafdbe2618742776126252c2f5fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCIFXSA5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCRqo4%2B7w8kv6X1DyOly8b5UNzXH%2B69MxwOVAO7pgSU3QIhAKictGnuzDEg5ygJfeInZxvNHgQnB%2Bs%2FtAkWHQPyVwo6Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwOhk70otStxP0yGUMq3AMc6ZekyVv4GE6IXW85fVDXb1Rwb6Uglzn25%2BFpLatynkJfzKjnVq7DyKdQgbhl6%2Bbl%2Bh3meHaVWRcP%2BnrbM%2BRedgQB7i6EcdavAs44nGFa3Y6PJqusm4RQgs4E68Wt6MjCXfCsu6IHY5Cw9Odxx7BdTV%2BbpwWateFsMKbjgA02jrQ6NxTqhAjRUbITAjpbvC1SDWcMdtIc6Am9TQlAq50beTuXqZtS0Fi3fQmBbnjQkuTE3kZJRMTVLRdvS6pn7u1hWUL%2BoEwDWQgORpUF3Gsh9jFVQ98oCMBmUOsm1ATXlTAdd8UXac6ZycEgsmjM9i78xS0ueX5%2F6P4XYQePo8lJqhH2AP%2Ffg%2BP9HZk7V7S4gZ%2FL5BnjOXsm8OqoLVTaiatSLF8MjRvvresPwXKkJA%2FTH2kOeBueco24HnZYSIJSQCLUTv3XC%2BXh3K2kpdKRUSZ%2B%2FkVwAxSqgahoaN1V3ybbH%2FlziN1JQAN%2BsZQnK49k11NXu%2B2xzuQFRqMoY0IvrQKgo8wUvZZBj6qPLO0St1nNsijctRkQ3Xi2JvazX9VBBe6KJOlrRsIDHu4ce5WhIZMwFwmAGhymGawY1JvyMgQJQmqxJO3wwigAd8Soeo8QvYL9b5cLTDGH2vxnmjCRho7EBjqkAYM6es%2FgZkzRBVbDtuUCBfm3CtAvMDUF%2FtL5%2FE21rHiztndTX4lyp0tistwKJKxxp%2FvyODKjA1cGqeowO7EEAqMjWj7nnvapmnh0XjIB%2F9EBEisCMosYDYCH%2FG%2BSS5rN4BrOxVWyyz6qkg9i6ajDWl8sS5ZHYORQiZ%2FNIQgo0GRSvGSw1ixrELVxLjva1XCIRwUO3Q3bC7LCfYcNJC0HHM2GZXZ3&X-Amz-Signature=a25f3bbac044036ecb9dee562a9ac55d192e8cd5d6bc402b8caa43fc1ada1a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCIFXSA5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCRqo4%2B7w8kv6X1DyOly8b5UNzXH%2B69MxwOVAO7pgSU3QIhAKictGnuzDEg5ygJfeInZxvNHgQnB%2Bs%2FtAkWHQPyVwo6Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwOhk70otStxP0yGUMq3AMc6ZekyVv4GE6IXW85fVDXb1Rwb6Uglzn25%2BFpLatynkJfzKjnVq7DyKdQgbhl6%2Bbl%2Bh3meHaVWRcP%2BnrbM%2BRedgQB7i6EcdavAs44nGFa3Y6PJqusm4RQgs4E68Wt6MjCXfCsu6IHY5Cw9Odxx7BdTV%2BbpwWateFsMKbjgA02jrQ6NxTqhAjRUbITAjpbvC1SDWcMdtIc6Am9TQlAq50beTuXqZtS0Fi3fQmBbnjQkuTE3kZJRMTVLRdvS6pn7u1hWUL%2BoEwDWQgORpUF3Gsh9jFVQ98oCMBmUOsm1ATXlTAdd8UXac6ZycEgsmjM9i78xS0ueX5%2F6P4XYQePo8lJqhH2AP%2Ffg%2BP9HZk7V7S4gZ%2FL5BnjOXsm8OqoLVTaiatSLF8MjRvvresPwXKkJA%2FTH2kOeBueco24HnZYSIJSQCLUTv3XC%2BXh3K2kpdKRUSZ%2B%2FkVwAxSqgahoaN1V3ybbH%2FlziN1JQAN%2BsZQnK49k11NXu%2B2xzuQFRqMoY0IvrQKgo8wUvZZBj6qPLO0St1nNsijctRkQ3Xi2JvazX9VBBe6KJOlrRsIDHu4ce5WhIZMwFwmAGhymGawY1JvyMgQJQmqxJO3wwigAd8Soeo8QvYL9b5cLTDGH2vxnmjCRho7EBjqkAYM6es%2FgZkzRBVbDtuUCBfm3CtAvMDUF%2FtL5%2FE21rHiztndTX4lyp0tistwKJKxxp%2FvyODKjA1cGqeowO7EEAqMjWj7nnvapmnh0XjIB%2F9EBEisCMosYDYCH%2FG%2BSS5rN4BrOxVWyyz6qkg9i6ajDWl8sS5ZHYORQiZ%2FNIQgo0GRSvGSw1ixrELVxLjva1XCIRwUO3Q3bC7LCfYcNJC0HHM2GZXZ3&X-Amz-Signature=d511be6d85104a16038d41cc6ae6df95a4edf5bbb2590591e3b21cbf8c801d5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

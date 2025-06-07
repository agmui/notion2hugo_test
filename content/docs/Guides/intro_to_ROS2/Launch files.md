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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIYVWJSF%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw%2FxYO4wCTY6YMHLp3vg1blDayqYmed4aaJh%2BoxToZHgIhAJt4%2FiYFtqUZpEN%2BCTAEiH4tq7DsBiiYoit0cP1oKt4SKv8DCHIQABoMNjM3NDIzMTgzODA1Igw4qDMi0KbQIx8Adzkq3ANFDwgEA0qQdOl5zZKNr8mblrJBa7KvVyHCiVhHIB4GcVr4wL2wzMpcDquti5Exi5PtIHygAyWXQG43%2BQ5cIMvtgYOYJyfhVo3hTvFx5pOk%2BVe%2FmigfqSF4bP0J3CENfaNAUFXyRyOq5wR3SLLiq1KK12TvfLavQ1dlefkHkg4Xl%2FR%2B55w2gEXYizHql%2FyJLiZ2DuYDBDuK%2BJ%2FNl1pz%2BcspOdsUi%2BCol7Uo2qDxuHoJHpOLDQprxMoBIOF7cbOqyMdTE%2F0V9l6bohiLPPQByM%2FMYr0aHDirqe0Tv9R3gDNwT2D2LeiFzCpXxlqAC3fhpYqsUZfrAD%2FuIvKl%2BrGkpWModQ4Dz6MicrN3QDgvsuA5MYSo6JP%2Fks3Wa%2B0DMAn6V1P51VbAI6sBgDFhQOuKQ1%2Ftwp%2Bw2am2kbbjxtLI7lg5x%2F7Ne4eQOgZcjYOc16uAj%2Bj3cgxesWUubkRnUrPPMgZ34HhSpx0DvKhhMF70KrAYnhWvcB93v76ZmG3RTxksjPpU84AUUh5xHJFE23MlEYEdOfskUzbp%2FrSeClC8epy2osQvWli%2F6hNAiTcjhxupmj0Hw5BWvtkWg0APjXMGHQAOujdJiLTDN60tCUSy4%2FGoS9hqwhPa7rl2jGx8YTC2%2Bo%2FCBjqkAWWCryFaOz%2F%2B0xpzS929spn6kPL9e14baXpptaRLJn5ufCLba2ZJOzo%2Bol6GrDllmQcXmgVbzwAgyIeunJMinCfbZcOul5RQzVxpDjHCCyHHXQBRI16XKn0HshaZsarzqq8Jyc4EhKHJHrGWjLm5BLZ6riE5JLiYxjJ%2FfBCV0T5VxPC1Ff9FKMKnq%2FPELyGYXndA5ssD%2BiBtSLpXPUN8i9dpod4S&X-Amz-Signature=d247a7cff88baa9843db8999fddf5f564193c8021634d3e334329d1b179f3ade&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIYVWJSF%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw%2FxYO4wCTY6YMHLp3vg1blDayqYmed4aaJh%2BoxToZHgIhAJt4%2FiYFtqUZpEN%2BCTAEiH4tq7DsBiiYoit0cP1oKt4SKv8DCHIQABoMNjM3NDIzMTgzODA1Igw4qDMi0KbQIx8Adzkq3ANFDwgEA0qQdOl5zZKNr8mblrJBa7KvVyHCiVhHIB4GcVr4wL2wzMpcDquti5Exi5PtIHygAyWXQG43%2BQ5cIMvtgYOYJyfhVo3hTvFx5pOk%2BVe%2FmigfqSF4bP0J3CENfaNAUFXyRyOq5wR3SLLiq1KK12TvfLavQ1dlefkHkg4Xl%2FR%2B55w2gEXYizHql%2FyJLiZ2DuYDBDuK%2BJ%2FNl1pz%2BcspOdsUi%2BCol7Uo2qDxuHoJHpOLDQprxMoBIOF7cbOqyMdTE%2F0V9l6bohiLPPQByM%2FMYr0aHDirqe0Tv9R3gDNwT2D2LeiFzCpXxlqAC3fhpYqsUZfrAD%2FuIvKl%2BrGkpWModQ4Dz6MicrN3QDgvsuA5MYSo6JP%2Fks3Wa%2B0DMAn6V1P51VbAI6sBgDFhQOuKQ1%2Ftwp%2Bw2am2kbbjxtLI7lg5x%2F7Ne4eQOgZcjYOc16uAj%2Bj3cgxesWUubkRnUrPPMgZ34HhSpx0DvKhhMF70KrAYnhWvcB93v76ZmG3RTxksjPpU84AUUh5xHJFE23MlEYEdOfskUzbp%2FrSeClC8epy2osQvWli%2F6hNAiTcjhxupmj0Hw5BWvtkWg0APjXMGHQAOujdJiLTDN60tCUSy4%2FGoS9hqwhPa7rl2jGx8YTC2%2Bo%2FCBjqkAWWCryFaOz%2F%2B0xpzS929spn6kPL9e14baXpptaRLJn5ufCLba2ZJOzo%2Bol6GrDllmQcXmgVbzwAgyIeunJMinCfbZcOul5RQzVxpDjHCCyHHXQBRI16XKn0HshaZsarzqq8Jyc4EhKHJHrGWjLm5BLZ6riE5JLiYxjJ%2FfBCV0T5VxPC1Ff9FKMKnq%2FPELyGYXndA5ssD%2BiBtSLpXPUN8i9dpod4S&X-Amz-Signature=a1845723174efc1a13f8ddcd3a8a24e233a87f5cd6ce94edd6d865aabe2d3bed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIYVWJSF%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCw%2FxYO4wCTY6YMHLp3vg1blDayqYmed4aaJh%2BoxToZHgIhAJt4%2FiYFtqUZpEN%2BCTAEiH4tq7DsBiiYoit0cP1oKt4SKv8DCHIQABoMNjM3NDIzMTgzODA1Igw4qDMi0KbQIx8Adzkq3ANFDwgEA0qQdOl5zZKNr8mblrJBa7KvVyHCiVhHIB4GcVr4wL2wzMpcDquti5Exi5PtIHygAyWXQG43%2BQ5cIMvtgYOYJyfhVo3hTvFx5pOk%2BVe%2FmigfqSF4bP0J3CENfaNAUFXyRyOq5wR3SLLiq1KK12TvfLavQ1dlefkHkg4Xl%2FR%2B55w2gEXYizHql%2FyJLiZ2DuYDBDuK%2BJ%2FNl1pz%2BcspOdsUi%2BCol7Uo2qDxuHoJHpOLDQprxMoBIOF7cbOqyMdTE%2F0V9l6bohiLPPQByM%2FMYr0aHDirqe0Tv9R3gDNwT2D2LeiFzCpXxlqAC3fhpYqsUZfrAD%2FuIvKl%2BrGkpWModQ4Dz6MicrN3QDgvsuA5MYSo6JP%2Fks3Wa%2B0DMAn6V1P51VbAI6sBgDFhQOuKQ1%2Ftwp%2Bw2am2kbbjxtLI7lg5x%2F7Ne4eQOgZcjYOc16uAj%2Bj3cgxesWUubkRnUrPPMgZ34HhSpx0DvKhhMF70KrAYnhWvcB93v76ZmG3RTxksjPpU84AUUh5xHJFE23MlEYEdOfskUzbp%2FrSeClC8epy2osQvWli%2F6hNAiTcjhxupmj0Hw5BWvtkWg0APjXMGHQAOujdJiLTDN60tCUSy4%2FGoS9hqwhPa7rl2jGx8YTC2%2Bo%2FCBjqkAWWCryFaOz%2F%2B0xpzS929spn6kPL9e14baXpptaRLJn5ufCLba2ZJOzo%2Bol6GrDllmQcXmgVbzwAgyIeunJMinCfbZcOul5RQzVxpDjHCCyHHXQBRI16XKn0HshaZsarzqq8Jyc4EhKHJHrGWjLm5BLZ6riE5JLiYxjJ%2FfBCV0T5VxPC1Ff9FKMKnq%2FPELyGYXndA5ssD%2BiBtSLpXPUN8i9dpod4S&X-Amz-Signature=5fcca2467b6e4809ff5d746406357c3ece1d47518bad715365e7440561078355&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

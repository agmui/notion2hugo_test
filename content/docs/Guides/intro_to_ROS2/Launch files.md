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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOLDQLMF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLUotPnskSO4wEscjOPrtlqpWZk6gUed2X3TJutDnhFAiAUq2KHyauGRtdSeku8ByrUq%2Fyryl73JQ7947TaGfKtkiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM87noYwApiqP8E89yKtwDaLHPHCMi2nl3CdyQoBq1l4RtKOwaDlsYQkiuCs4bYWKmQ75YlQAhjykyhdcdtoaFKru5Bn3Z9kZyBnygKWq4lTTo7SZBoFYsxIsN0YFcCDY2pbabgwqaqRDTA8%2FtS%2BypzY%2FA9RlWbWevUklZ%2BRIYt3nfia%2B1XYtRtDSvR75xSf96%2B7gdKnK62EhvY3PNAyz%2Fj1Y0SoJJO1iW%2BKVXbvq8oYrxZDk99gZUz1W6hRnxbhgiH1Gzda4rnLn3mMxe0qKjmxSHbAw6VLv0MlMzsQoYGNx0hwP5kNG86cr98yQjABH95QDO1MSBvJAYNMsT79dfmj4l81suGLQMVxOSKRUJO6SeqncjrvC4LFUS%2Fgu9P35qeP%2F3wp%2Fsb%2FHZI7upM7rKKVzPAH0cF5klAWuTmy8jK3pmom%2FiS1KEDblQwYobYffS6OIhIPDAnuuE3GZWc9%2F5%2B82dXiYt6U5KPAuHc%2F8ZosGjh2ZxUS0VeAkpTXdrZsonpJL0zDOlwsJOTS41DhoYHEZb588eQxiAHXe8ALQt3nslckLeUM6VFs7tkpUsb5WZQL1ypyTk4QMNSLV60qxl38RwE0pEhNVoyQgvkRtr25gelfumfoSoAMCbK3xAdjva7m8S0Hnf6sz5qXcw1Z6EvwY6pgEeQ%2FIH4K%2BRHuJ%2BfhLowwVCdeCwC%2BkNXwpzoX2lSeQAFCvGBwI1xwc2crUtwFrzSgrcZuO8idGlc%2Fd8StM6vjd667x9aF29l8JG9cprP7ZhRov8f1Uv0whjDEFnSCFFF3VWr9dx3ZyNzfRtiR0WBJshydLZvFSK%2FZBE36KaKoNbJPInVxCzwFBeid48nPAxvLmf7CyCLiD%2BbtWBfYJ1cYwQLXJ5leRL&X-Amz-Signature=38a91135dbc1b35186868a73c6466aceae7c3d9707569b31ea818955547c0ed0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOLDQLMF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLUotPnskSO4wEscjOPrtlqpWZk6gUed2X3TJutDnhFAiAUq2KHyauGRtdSeku8ByrUq%2Fyryl73JQ7947TaGfKtkiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM87noYwApiqP8E89yKtwDaLHPHCMi2nl3CdyQoBq1l4RtKOwaDlsYQkiuCs4bYWKmQ75YlQAhjykyhdcdtoaFKru5Bn3Z9kZyBnygKWq4lTTo7SZBoFYsxIsN0YFcCDY2pbabgwqaqRDTA8%2FtS%2BypzY%2FA9RlWbWevUklZ%2BRIYt3nfia%2B1XYtRtDSvR75xSf96%2B7gdKnK62EhvY3PNAyz%2Fj1Y0SoJJO1iW%2BKVXbvq8oYrxZDk99gZUz1W6hRnxbhgiH1Gzda4rnLn3mMxe0qKjmxSHbAw6VLv0MlMzsQoYGNx0hwP5kNG86cr98yQjABH95QDO1MSBvJAYNMsT79dfmj4l81suGLQMVxOSKRUJO6SeqncjrvC4LFUS%2Fgu9P35qeP%2F3wp%2Fsb%2FHZI7upM7rKKVzPAH0cF5klAWuTmy8jK3pmom%2FiS1KEDblQwYobYffS6OIhIPDAnuuE3GZWc9%2F5%2B82dXiYt6U5KPAuHc%2F8ZosGjh2ZxUS0VeAkpTXdrZsonpJL0zDOlwsJOTS41DhoYHEZb588eQxiAHXe8ALQt3nslckLeUM6VFs7tkpUsb5WZQL1ypyTk4QMNSLV60qxl38RwE0pEhNVoyQgvkRtr25gelfumfoSoAMCbK3xAdjva7m8S0Hnf6sz5qXcw1Z6EvwY6pgEeQ%2FIH4K%2BRHuJ%2BfhLowwVCdeCwC%2BkNXwpzoX2lSeQAFCvGBwI1xwc2crUtwFrzSgrcZuO8idGlc%2Fd8StM6vjd667x9aF29l8JG9cprP7ZhRov8f1Uv0whjDEFnSCFFF3VWr9dx3ZyNzfRtiR0WBJshydLZvFSK%2FZBE36KaKoNbJPInVxCzwFBeid48nPAxvLmf7CyCLiD%2BbtWBfYJ1cYwQLXJ5leRL&X-Amz-Signature=0de209feb94a2ecdad3a4b77c0fb53ee3ed23900194256ce832ed60155ab0d7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOLDQLMF%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T081212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLUotPnskSO4wEscjOPrtlqpWZk6gUed2X3TJutDnhFAiAUq2KHyauGRtdSeku8ByrUq%2Fyryl73JQ7947TaGfKtkiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM87noYwApiqP8E89yKtwDaLHPHCMi2nl3CdyQoBq1l4RtKOwaDlsYQkiuCs4bYWKmQ75YlQAhjykyhdcdtoaFKru5Bn3Z9kZyBnygKWq4lTTo7SZBoFYsxIsN0YFcCDY2pbabgwqaqRDTA8%2FtS%2BypzY%2FA9RlWbWevUklZ%2BRIYt3nfia%2B1XYtRtDSvR75xSf96%2B7gdKnK62EhvY3PNAyz%2Fj1Y0SoJJO1iW%2BKVXbvq8oYrxZDk99gZUz1W6hRnxbhgiH1Gzda4rnLn3mMxe0qKjmxSHbAw6VLv0MlMzsQoYGNx0hwP5kNG86cr98yQjABH95QDO1MSBvJAYNMsT79dfmj4l81suGLQMVxOSKRUJO6SeqncjrvC4LFUS%2Fgu9P35qeP%2F3wp%2Fsb%2FHZI7upM7rKKVzPAH0cF5klAWuTmy8jK3pmom%2FiS1KEDblQwYobYffS6OIhIPDAnuuE3GZWc9%2F5%2B82dXiYt6U5KPAuHc%2F8ZosGjh2ZxUS0VeAkpTXdrZsonpJL0zDOlwsJOTS41DhoYHEZb588eQxiAHXe8ALQt3nslckLeUM6VFs7tkpUsb5WZQL1ypyTk4QMNSLV60qxl38RwE0pEhNVoyQgvkRtr25gelfumfoSoAMCbK3xAdjva7m8S0Hnf6sz5qXcw1Z6EvwY6pgEeQ%2FIH4K%2BRHuJ%2BfhLowwVCdeCwC%2BkNXwpzoX2lSeQAFCvGBwI1xwc2crUtwFrzSgrcZuO8idGlc%2Fd8StM6vjd667x9aF29l8JG9cprP7ZhRov8f1Uv0whjDEFnSCFFF3VWr9dx3ZyNzfRtiR0WBJshydLZvFSK%2FZBE36KaKoNbJPInVxCzwFBeid48nPAxvLmf7CyCLiD%2BbtWBfYJ1cYwQLXJ5leRL&X-Amz-Signature=36f9cf76a1da99520c096785388c1277ceb52758169c5ab62858a87d6454b7fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

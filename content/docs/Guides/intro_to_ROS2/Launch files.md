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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIF3N46T%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC2E6UXQ7UVVCxYsWVHlOcaD887sw3Y2%2FEeXjI%2BR7lv2AIhAIbJg7gsDlzJz6LwBt75lVKk3HtZpE06M%2BURabwA8JwFKv8DCHsQABoMNjM3NDIzMTgzODA1IgxlkYtdLGKy1aJt0vAq3AMqtit3wak4E2EUwcZMOzs1YLFZqzbeJg2U0uAk4dfkyyPU5v6InW7FuoFxdojRH0HbRvLDskhRT2opaS%2FJnU%2B44CqOs0%2BANoKcgT63yWzKUDTMMzzPCM4zmZEVDyGSGqCrOks5BT%2B1OBB8fchyLDxpGkpAzIAIlcffTJdFMreWtTSfzBllv0Ji%2BTxBtZYpeKXQACMMTHMvPqLWEQFVd5ZCLZRU1KtBU4znlzXz%2F5ywm6oU3cUwXAEELlIqlNy%2FgXLXsj5HOosMwI7J9aog0Wwm7Kfhdbrp3vVBUHk8XJTjg6yN5QwpHC4UKPjV3sj%2Fl7jIi6uFUe%2FMwW6TT5FrQQWtB%2F%2BRMgJ2vSaWrieM7KhqU3T7KVI6frhbpYWmPKLk6Tx6XoCSN7RJA4m75Yx5M1Jb%2Bgm1OaI4UzzOada%2F8TxK61jqndrwkr5%2FRd1ZeFnV90QAk76c9BCN%2FE7sZiP6Kbk4jH%2BgXFnOpKj5FQXEd5IErTINP2INnyb5ze7uj5VzACvvGa76cjjZLKWz%2BmH%2B7JCRsrUOgBDgaQbIvBNRnzVyEA%2BOyzNFkv8KUYNxYwE6CnfikpzzWF65grfUfmAzVSWfckEqAQCFOMPyHDTyobBdDbYu3vY5MW4mrC3QkTDYutW%2FBjqkAReEna3uyGZpbYGfW0wAssUur5%2BYkOOn0voaDwJuuykUFcbQCgvF8mpYKC8v233wDikbNzflrku4Tncr0WG15%2FGnEWCCvOouVTVZa6y2aop8XrUYlXCIaurcrauwiBqspgsh0mN7DHK4PBTh8771tv9IIblZt0rfoaC8YDKMYSyKO2yQyJAjYq0J1o2QsD45wmA7PGNBoxfx0b4gQnIUC56s9Hri&X-Amz-Signature=554c468be79a31f0b3406e811dc13c839d355f3a0600f5ab380cbb1ea546f81d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIF3N46T%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC2E6UXQ7UVVCxYsWVHlOcaD887sw3Y2%2FEeXjI%2BR7lv2AIhAIbJg7gsDlzJz6LwBt75lVKk3HtZpE06M%2BURabwA8JwFKv8DCHsQABoMNjM3NDIzMTgzODA1IgxlkYtdLGKy1aJt0vAq3AMqtit3wak4E2EUwcZMOzs1YLFZqzbeJg2U0uAk4dfkyyPU5v6InW7FuoFxdojRH0HbRvLDskhRT2opaS%2FJnU%2B44CqOs0%2BANoKcgT63yWzKUDTMMzzPCM4zmZEVDyGSGqCrOks5BT%2B1OBB8fchyLDxpGkpAzIAIlcffTJdFMreWtTSfzBllv0Ji%2BTxBtZYpeKXQACMMTHMvPqLWEQFVd5ZCLZRU1KtBU4znlzXz%2F5ywm6oU3cUwXAEELlIqlNy%2FgXLXsj5HOosMwI7J9aog0Wwm7Kfhdbrp3vVBUHk8XJTjg6yN5QwpHC4UKPjV3sj%2Fl7jIi6uFUe%2FMwW6TT5FrQQWtB%2F%2BRMgJ2vSaWrieM7KhqU3T7KVI6frhbpYWmPKLk6Tx6XoCSN7RJA4m75Yx5M1Jb%2Bgm1OaI4UzzOada%2F8TxK61jqndrwkr5%2FRd1ZeFnV90QAk76c9BCN%2FE7sZiP6Kbk4jH%2BgXFnOpKj5FQXEd5IErTINP2INnyb5ze7uj5VzACvvGa76cjjZLKWz%2BmH%2B7JCRsrUOgBDgaQbIvBNRnzVyEA%2BOyzNFkv8KUYNxYwE6CnfikpzzWF65grfUfmAzVSWfckEqAQCFOMPyHDTyobBdDbYu3vY5MW4mrC3QkTDYutW%2FBjqkAReEna3uyGZpbYGfW0wAssUur5%2BYkOOn0voaDwJuuykUFcbQCgvF8mpYKC8v233wDikbNzflrku4Tncr0WG15%2FGnEWCCvOouVTVZa6y2aop8XrUYlXCIaurcrauwiBqspgsh0mN7DHK4PBTh8771tv9IIblZt0rfoaC8YDKMYSyKO2yQyJAjYq0J1o2QsD45wmA7PGNBoxfx0b4gQnIUC56s9Hri&X-Amz-Signature=b130d0a62dd209909955a4b0c1602ce97707325ac41a2a65429c171321fbf50c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIF3N46T%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQC2E6UXQ7UVVCxYsWVHlOcaD887sw3Y2%2FEeXjI%2BR7lv2AIhAIbJg7gsDlzJz6LwBt75lVKk3HtZpE06M%2BURabwA8JwFKv8DCHsQABoMNjM3NDIzMTgzODA1IgxlkYtdLGKy1aJt0vAq3AMqtit3wak4E2EUwcZMOzs1YLFZqzbeJg2U0uAk4dfkyyPU5v6InW7FuoFxdojRH0HbRvLDskhRT2opaS%2FJnU%2B44CqOs0%2BANoKcgT63yWzKUDTMMzzPCM4zmZEVDyGSGqCrOks5BT%2B1OBB8fchyLDxpGkpAzIAIlcffTJdFMreWtTSfzBllv0Ji%2BTxBtZYpeKXQACMMTHMvPqLWEQFVd5ZCLZRU1KtBU4znlzXz%2F5ywm6oU3cUwXAEELlIqlNy%2FgXLXsj5HOosMwI7J9aog0Wwm7Kfhdbrp3vVBUHk8XJTjg6yN5QwpHC4UKPjV3sj%2Fl7jIi6uFUe%2FMwW6TT5FrQQWtB%2F%2BRMgJ2vSaWrieM7KhqU3T7KVI6frhbpYWmPKLk6Tx6XoCSN7RJA4m75Yx5M1Jb%2Bgm1OaI4UzzOada%2F8TxK61jqndrwkr5%2FRd1ZeFnV90QAk76c9BCN%2FE7sZiP6Kbk4jH%2BgXFnOpKj5FQXEd5IErTINP2INnyb5ze7uj5VzACvvGa76cjjZLKWz%2BmH%2B7JCRsrUOgBDgaQbIvBNRnzVyEA%2BOyzNFkv8KUYNxYwE6CnfikpzzWF65grfUfmAzVSWfckEqAQCFOMPyHDTyobBdDbYu3vY5MW4mrC3QkTDYutW%2FBjqkAReEna3uyGZpbYGfW0wAssUur5%2BYkOOn0voaDwJuuykUFcbQCgvF8mpYKC8v233wDikbNzflrku4Tncr0WG15%2FGnEWCCvOouVTVZa6y2aop8XrUYlXCIaurcrauwiBqspgsh0mN7DHK4PBTh8771tv9IIblZt0rfoaC8YDKMYSyKO2yQyJAjYq0J1o2QsD45wmA7PGNBoxfx0b4gQnIUC56s9Hri&X-Amz-Signature=b347693d5afa9ace958c0971e51c9f404fde5550d314adcb437013eccfe3e0b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QHXW7B%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAR6oJgS4yzreTOVMaG7FfVStRwl%2Bf4gYr%2BB4KI0kzSAiBYcRL0XitKNIBSwkulFH0AUXAR2MdsYhBLDihxj7RMdiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMznXsnSXmOsOPKdhhKtwDrzc5Xw5k4MU5SbZl6ouWiEhr401AnQA1QhCtjJxYYMTDhbQfrmqe1HINj37feT87GaE8QjEqFCVCrdFBStNKuZn0Y14bk1Cy4rkl7U7REZP%2BtOfObLpyW3lQ63BGEpI2eS2ZQOGBll9ydh90mHsVgJuRZmlzdcLkSosWBSTLVfnK65PAhjt5rsZFesqHzxzUimG3xKvoCIQZcwNQRUObqMy4ZwaRUZ73oXqO%2FEQVwCI7nQG36cZIOGh3W%2FtP6U1NLEJTyJAzLY06KQq%2FbiAtguHatASeubLxsNWibq8b4kDYp17KJKK92KNUsMkcbEs%2BgMpCpJDE3u0Gy53o5Q6D41SkN%2BKgwIR85j9ok2pA%2BvrSEzoYV%2BEFV92vK3GQkx2%2BgxolBNikHLle7pM0Cem%2BSTVVWSHlUy3kOBL6qDbHiagV7Lirr%2BylUNopOL45wXaOGIiYhUtBtCkp0%2FCORJ6R9%2B9aLBUvwzcfFh%2B47IH8rvEdIV6qSO1bJJTuauZQtM%2BYyagvsbKX3OihbunApt%2Bt4NJu2shbh7B03FeMJII8GZ3IRGdtY1ZvKsiqc5Zhd2pr%2FJsJ0ucsPTPL%2FfwuXEhDFkRA%2FJDt0PiFX9EJX3%2BLfdwrff8P6XwaIV95dmkw4JOxwQY6pgHl29ScrwQ2aV0gZicGvUNrWttaNDll%2Bptex4tq9Ofj7%2Btjg3dHVvxEFG01m5h9Pp3s29B%2BC7wlmrB2AA5LSGDHbpOJu0Y%2Fgvn%2BemQb4s%2FJZqVpHJms4FnHkFtplrbveP%2FCcZOmIzBB1jOlKjT6cMxb1yzfAWYewCGfB%2Fc1APZJqJRzRu6niXEJPgZXiPohDVINOyEtO3clIgvz6P5fRmQBZnfVUxCG&X-Amz-Signature=701bc5a49a94f31d3f9164b6c51ecd49993272159c8c8e004b0f082574f916cb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QHXW7B%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAR6oJgS4yzreTOVMaG7FfVStRwl%2Bf4gYr%2BB4KI0kzSAiBYcRL0XitKNIBSwkulFH0AUXAR2MdsYhBLDihxj7RMdiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMznXsnSXmOsOPKdhhKtwDrzc5Xw5k4MU5SbZl6ouWiEhr401AnQA1QhCtjJxYYMTDhbQfrmqe1HINj37feT87GaE8QjEqFCVCrdFBStNKuZn0Y14bk1Cy4rkl7U7REZP%2BtOfObLpyW3lQ63BGEpI2eS2ZQOGBll9ydh90mHsVgJuRZmlzdcLkSosWBSTLVfnK65PAhjt5rsZFesqHzxzUimG3xKvoCIQZcwNQRUObqMy4ZwaRUZ73oXqO%2FEQVwCI7nQG36cZIOGh3W%2FtP6U1NLEJTyJAzLY06KQq%2FbiAtguHatASeubLxsNWibq8b4kDYp17KJKK92KNUsMkcbEs%2BgMpCpJDE3u0Gy53o5Q6D41SkN%2BKgwIR85j9ok2pA%2BvrSEzoYV%2BEFV92vK3GQkx2%2BgxolBNikHLle7pM0Cem%2BSTVVWSHlUy3kOBL6qDbHiagV7Lirr%2BylUNopOL45wXaOGIiYhUtBtCkp0%2FCORJ6R9%2B9aLBUvwzcfFh%2B47IH8rvEdIV6qSO1bJJTuauZQtM%2BYyagvsbKX3OihbunApt%2Bt4NJu2shbh7B03FeMJII8GZ3IRGdtY1ZvKsiqc5Zhd2pr%2FJsJ0ucsPTPL%2FfwuXEhDFkRA%2FJDt0PiFX9EJX3%2BLfdwrff8P6XwaIV95dmkw4JOxwQY6pgHl29ScrwQ2aV0gZicGvUNrWttaNDll%2Bptex4tq9Ofj7%2Btjg3dHVvxEFG01m5h9Pp3s29B%2BC7wlmrB2AA5LSGDHbpOJu0Y%2Fgvn%2BemQb4s%2FJZqVpHJms4FnHkFtplrbveP%2FCcZOmIzBB1jOlKjT6cMxb1yzfAWYewCGfB%2Fc1APZJqJRzRu6niXEJPgZXiPohDVINOyEtO3clIgvz6P5fRmQBZnfVUxCG&X-Amz-Signature=c13397c5dc4fa571d502802f39d63bc95b554e450a9572b86a8405f924beaadb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QHXW7B%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAR6oJgS4yzreTOVMaG7FfVStRwl%2Bf4gYr%2BB4KI0kzSAiBYcRL0XitKNIBSwkulFH0AUXAR2MdsYhBLDihxj7RMdiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMznXsnSXmOsOPKdhhKtwDrzc5Xw5k4MU5SbZl6ouWiEhr401AnQA1QhCtjJxYYMTDhbQfrmqe1HINj37feT87GaE8QjEqFCVCrdFBStNKuZn0Y14bk1Cy4rkl7U7REZP%2BtOfObLpyW3lQ63BGEpI2eS2ZQOGBll9ydh90mHsVgJuRZmlzdcLkSosWBSTLVfnK65PAhjt5rsZFesqHzxzUimG3xKvoCIQZcwNQRUObqMy4ZwaRUZ73oXqO%2FEQVwCI7nQG36cZIOGh3W%2FtP6U1NLEJTyJAzLY06KQq%2FbiAtguHatASeubLxsNWibq8b4kDYp17KJKK92KNUsMkcbEs%2BgMpCpJDE3u0Gy53o5Q6D41SkN%2BKgwIR85j9ok2pA%2BvrSEzoYV%2BEFV92vK3GQkx2%2BgxolBNikHLle7pM0Cem%2BSTVVWSHlUy3kOBL6qDbHiagV7Lirr%2BylUNopOL45wXaOGIiYhUtBtCkp0%2FCORJ6R9%2B9aLBUvwzcfFh%2B47IH8rvEdIV6qSO1bJJTuauZQtM%2BYyagvsbKX3OihbunApt%2Bt4NJu2shbh7B03FeMJII8GZ3IRGdtY1ZvKsiqc5Zhd2pr%2FJsJ0ucsPTPL%2FfwuXEhDFkRA%2FJDt0PiFX9EJX3%2BLfdwrff8P6XwaIV95dmkw4JOxwQY6pgHl29ScrwQ2aV0gZicGvUNrWttaNDll%2Bptex4tq9Ofj7%2Btjg3dHVvxEFG01m5h9Pp3s29B%2BC7wlmrB2AA5LSGDHbpOJu0Y%2Fgvn%2BemQb4s%2FJZqVpHJms4FnHkFtplrbveP%2FCcZOmIzBB1jOlKjT6cMxb1yzfAWYewCGfB%2Fc1APZJqJRzRu6niXEJPgZXiPohDVINOyEtO3clIgvz6P5fRmQBZnfVUxCG&X-Amz-Signature=1295506aff3524b002780d8285abdda570b2eed9c0dbca97fc840d7be1fcd230&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

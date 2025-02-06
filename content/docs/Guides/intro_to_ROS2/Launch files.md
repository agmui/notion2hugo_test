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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZB6SIV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC3uZqNwuuQUEAGM9gyAG%2FHhQwQdIH7tItfAmq7MilfxQIgdFyrXE7NFELlkT4T2yNxzy3%2FM5NAicZgDj0utGx%2BchUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLh%2F7rNq800Z7eOxkCrcA9fdPrP9LijJ00apvScvFIdBqjd0o90OUMGzLE0eOR6nV%2B4DFS58hu4lyyCe8Pf%2F48%2FiiukhdHKIqZVFMF%2ByEdwksnq4JlvlEHH9k4w19bYIWGElFKd4fPICm8CyEHJ19mZcDqnFBnzZ0Jk5XgR%2FIYb%2B2nAxkVM7OOzsEa%2FewdCJaPFBPu05mJujEypxoE6Ge7rSvchcDgK%2B4Hnf32e2Tjt9AuAubRy1tVodtyQvq9zPFnDJhb6Js8sJKKYG5owolB18OsRMOt2RqGby%2FOOt2%2BIS67EDr7vkTvJODB6uwjxX%2BCjqDIEB1fl1RmcMkLP5ElrcoYhO%2BhOmWVuMVa%2Fdqqb%2FfgcvxtAga6t%2F5NZ6%2FuM7tvvkA%2F2AnZEECzFf0VQkDtF6xCafd%2BrEYqOiOCiFsWpgMGQ1ueKxUkxTSGvYilJEvkldYPE5P8TOiJmRot8vhn57V8XGXSMUFDfpvxuuHJgJ%2BrHWt6bSwEGXPqZa7CfI5tS7YBRbpLMfIPrYUOX1urlYb5z8cdQ%2BsE3lIakkhAJeE0QmghuhJulM0q8b2C7ds4%2Fe3SH%2B%2BYzt0JGgWi3kCVdxBjQw44LmxYD94KQ8wMNbfo61CSTCmp92DOwsEsP%2FD%2BTPz8mvn%2FpOqq25MP6dk70GOqUBCrrnLjFPexTnjeF176wK2yWriNQLQZ7WtM6knds4HFq2kv8dSivkLjAXdND5nFPPV5rNJjrE1pG698SDbrCkt4fW3RZ4BuRF5yW7aNapXBlyRFqA2j%2FNSLVNwC8dU9Vo3yGCXXoeMevUzS2b4qRNtYGOZ2Qt%2BGdAFi52oUrnpDxSpR4acCaNFENQrFsVS6Zi1uQ4rpg0z5Kj21uXF1dYKNvy%2FU3j&X-Amz-Signature=e0b7290f30c9c7fba8e50b23876cd98c5612c834e9b89adb2c83e4b1309a5440&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZB6SIV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC3uZqNwuuQUEAGM9gyAG%2FHhQwQdIH7tItfAmq7MilfxQIgdFyrXE7NFELlkT4T2yNxzy3%2FM5NAicZgDj0utGx%2BchUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLh%2F7rNq800Z7eOxkCrcA9fdPrP9LijJ00apvScvFIdBqjd0o90OUMGzLE0eOR6nV%2B4DFS58hu4lyyCe8Pf%2F48%2FiiukhdHKIqZVFMF%2ByEdwksnq4JlvlEHH9k4w19bYIWGElFKd4fPICm8CyEHJ19mZcDqnFBnzZ0Jk5XgR%2FIYb%2B2nAxkVM7OOzsEa%2FewdCJaPFBPu05mJujEypxoE6Ge7rSvchcDgK%2B4Hnf32e2Tjt9AuAubRy1tVodtyQvq9zPFnDJhb6Js8sJKKYG5owolB18OsRMOt2RqGby%2FOOt2%2BIS67EDr7vkTvJODB6uwjxX%2BCjqDIEB1fl1RmcMkLP5ElrcoYhO%2BhOmWVuMVa%2Fdqqb%2FfgcvxtAga6t%2F5NZ6%2FuM7tvvkA%2F2AnZEECzFf0VQkDtF6xCafd%2BrEYqOiOCiFsWpgMGQ1ueKxUkxTSGvYilJEvkldYPE5P8TOiJmRot8vhn57V8XGXSMUFDfpvxuuHJgJ%2BrHWt6bSwEGXPqZa7CfI5tS7YBRbpLMfIPrYUOX1urlYb5z8cdQ%2BsE3lIakkhAJeE0QmghuhJulM0q8b2C7ds4%2Fe3SH%2B%2BYzt0JGgWi3kCVdxBjQw44LmxYD94KQ8wMNbfo61CSTCmp92DOwsEsP%2FD%2BTPz8mvn%2FpOqq25MP6dk70GOqUBCrrnLjFPexTnjeF176wK2yWriNQLQZ7WtM6knds4HFq2kv8dSivkLjAXdND5nFPPV5rNJjrE1pG698SDbrCkt4fW3RZ4BuRF5yW7aNapXBlyRFqA2j%2FNSLVNwC8dU9Vo3yGCXXoeMevUzS2b4qRNtYGOZ2Qt%2BGdAFi52oUrnpDxSpR4acCaNFENQrFsVS6Zi1uQ4rpg0z5Kj21uXF1dYKNvy%2FU3j&X-Amz-Signature=41c6d03fb3a93b3cec9d723948a22127b4d60a22cf880ec14ed011907e162cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZB6SIV%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIQC3uZqNwuuQUEAGM9gyAG%2FHhQwQdIH7tItfAmq7MilfxQIgdFyrXE7NFELlkT4T2yNxzy3%2FM5NAicZgDj0utGx%2BchUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLh%2F7rNq800Z7eOxkCrcA9fdPrP9LijJ00apvScvFIdBqjd0o90OUMGzLE0eOR6nV%2B4DFS58hu4lyyCe8Pf%2F48%2FiiukhdHKIqZVFMF%2ByEdwksnq4JlvlEHH9k4w19bYIWGElFKd4fPICm8CyEHJ19mZcDqnFBnzZ0Jk5XgR%2FIYb%2B2nAxkVM7OOzsEa%2FewdCJaPFBPu05mJujEypxoE6Ge7rSvchcDgK%2B4Hnf32e2Tjt9AuAubRy1tVodtyQvq9zPFnDJhb6Js8sJKKYG5owolB18OsRMOt2RqGby%2FOOt2%2BIS67EDr7vkTvJODB6uwjxX%2BCjqDIEB1fl1RmcMkLP5ElrcoYhO%2BhOmWVuMVa%2Fdqqb%2FfgcvxtAga6t%2F5NZ6%2FuM7tvvkA%2F2AnZEECzFf0VQkDtF6xCafd%2BrEYqOiOCiFsWpgMGQ1ueKxUkxTSGvYilJEvkldYPE5P8TOiJmRot8vhn57V8XGXSMUFDfpvxuuHJgJ%2BrHWt6bSwEGXPqZa7CfI5tS7YBRbpLMfIPrYUOX1urlYb5z8cdQ%2BsE3lIakkhAJeE0QmghuhJulM0q8b2C7ds4%2Fe3SH%2B%2BYzt0JGgWi3kCVdxBjQw44LmxYD94KQ8wMNbfo61CSTCmp92DOwsEsP%2FD%2BTPz8mvn%2FpOqq25MP6dk70GOqUBCrrnLjFPexTnjeF176wK2yWriNQLQZ7WtM6knds4HFq2kv8dSivkLjAXdND5nFPPV5rNJjrE1pG698SDbrCkt4fW3RZ4BuRF5yW7aNapXBlyRFqA2j%2FNSLVNwC8dU9Vo3yGCXXoeMevUzS2b4qRNtYGOZ2Qt%2BGdAFi52oUrnpDxSpR4acCaNFENQrFsVS6Zi1uQ4rpg0z5Kj21uXF1dYKNvy%2FU3j&X-Amz-Signature=9d816fc1daf12a80b078f04a5a8ce6e427d69741203cd39e8aae72f1641d0da7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

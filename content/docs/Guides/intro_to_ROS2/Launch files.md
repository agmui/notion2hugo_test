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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2I4S6E3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCy7xRw6tshimTBGwtMu4SGsywfZtLsRMVQcaFqD197JgIhAIWUH1tT1uDgA7STPRQlIkI0NFBbU%2BHY%2B2Wprb2YwT7eKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BUktBv7%2B9FeqetsQq3AMWfptEYOsWyZBHRl8p0CuTgb2oOk0pPYpX6Ti%2BcCZn58LX%2BwCV7aX2AUy%2BmDvr%2B%2BkXTb%2FQxKAi%2Bk1EXz02s3kEvZEbg%2BmBkZGBSgWKDFUusGGFCl5P2Oja6ZctO30MAWd2eXO%2FsAvVc6S3Bggytgg8W576yXNw7zS2QY5O5c8uTKTUvPLAd7TyrmIk3ZfKS8pWa%2Ftgcmin7%2F0Frf%2Br6PSX5IB3lPfjLQkBP%2BWDCMvRhEyg8t7xHmaRDalbFvwyjYVikzFlqE7CcwbsOyj6aXC1Eo1TNKSM6eZjpmBQV4SiGb7Z4GzKjnBlTPL9hqUSZ5bdmRyeUH7fHc%2BHqwkypro0BmCxT6DD9F9e%2Bzc3MOxAPBeHI1oHbgD4cyatFXUIs2GY7xK0mKfkedfXjf6eNwnFZi9E%2B1%2FchFE1288gN3L%2B1vk1PG1kptaXV4Wirahr7CewvpMf5hsyLTHKiSfpV3ptqSYIzW76bMtqmwkAR5589IZABb9tszX3HYznVQ7Ux1x8EjgUXHoqvqg0zonw6bKpNQsPpboTboPtR8xadALJUEsJOsvNfnRVz7Rz6KWbVXSzi6%2BXc0%2BXAZPlE5V0iyI4rCb1X8mvHiudyRkULaeB3NhbKVh7eDU%2BhNeoCzCS84S%2BBjqkAS5ofrM15ulE53HtYbSLV%2FK27pDGDDIRLrdjvOZDSVFYnIzWsM2CyAl1bs5DmHDhypTHSnG3SBnkPTUX9ECOk7zvgBOU9cGDAR3LHaCRh69Hupat8hSQH25Oi%2FPH6JP6oaFntPz8Fjq%2FGPJQRWB5xbtpaw0yFMySeHPxyP6YzMxZ2ky%2F6JkKC3Uxguuxwg7QIOiHqOGE2KOigvuXbOwMMguyq6%2Fx&X-Amz-Signature=feced95a163f8fcc7ec07a801656a2e47fe2a5b3831d9880bfaa52a314b0f337&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2I4S6E3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCy7xRw6tshimTBGwtMu4SGsywfZtLsRMVQcaFqD197JgIhAIWUH1tT1uDgA7STPRQlIkI0NFBbU%2BHY%2B2Wprb2YwT7eKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BUktBv7%2B9FeqetsQq3AMWfptEYOsWyZBHRl8p0CuTgb2oOk0pPYpX6Ti%2BcCZn58LX%2BwCV7aX2AUy%2BmDvr%2B%2BkXTb%2FQxKAi%2Bk1EXz02s3kEvZEbg%2BmBkZGBSgWKDFUusGGFCl5P2Oja6ZctO30MAWd2eXO%2FsAvVc6S3Bggytgg8W576yXNw7zS2QY5O5c8uTKTUvPLAd7TyrmIk3ZfKS8pWa%2Ftgcmin7%2F0Frf%2Br6PSX5IB3lPfjLQkBP%2BWDCMvRhEyg8t7xHmaRDalbFvwyjYVikzFlqE7CcwbsOyj6aXC1Eo1TNKSM6eZjpmBQV4SiGb7Z4GzKjnBlTPL9hqUSZ5bdmRyeUH7fHc%2BHqwkypro0BmCxT6DD9F9e%2Bzc3MOxAPBeHI1oHbgD4cyatFXUIs2GY7xK0mKfkedfXjf6eNwnFZi9E%2B1%2FchFE1288gN3L%2B1vk1PG1kptaXV4Wirahr7CewvpMf5hsyLTHKiSfpV3ptqSYIzW76bMtqmwkAR5589IZABb9tszX3HYznVQ7Ux1x8EjgUXHoqvqg0zonw6bKpNQsPpboTboPtR8xadALJUEsJOsvNfnRVz7Rz6KWbVXSzi6%2BXc0%2BXAZPlE5V0iyI4rCb1X8mvHiudyRkULaeB3NhbKVh7eDU%2BhNeoCzCS84S%2BBjqkAS5ofrM15ulE53HtYbSLV%2FK27pDGDDIRLrdjvOZDSVFYnIzWsM2CyAl1bs5DmHDhypTHSnG3SBnkPTUX9ECOk7zvgBOU9cGDAR3LHaCRh69Hupat8hSQH25Oi%2FPH6JP6oaFntPz8Fjq%2FGPJQRWB5xbtpaw0yFMySeHPxyP6YzMxZ2ky%2F6JkKC3Uxguuxwg7QIOiHqOGE2KOigvuXbOwMMguyq6%2Fx&X-Amz-Signature=a16088cee0772beffdf1e141901aba540217ecb241b6bccbe69b28c43c4f7c23&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2I4S6E3%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQCy7xRw6tshimTBGwtMu4SGsywfZtLsRMVQcaFqD197JgIhAIWUH1tT1uDgA7STPRQlIkI0NFBbU%2BHY%2B2Wprb2YwT7eKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BUktBv7%2B9FeqetsQq3AMWfptEYOsWyZBHRl8p0CuTgb2oOk0pPYpX6Ti%2BcCZn58LX%2BwCV7aX2AUy%2BmDvr%2B%2BkXTb%2FQxKAi%2Bk1EXz02s3kEvZEbg%2BmBkZGBSgWKDFUusGGFCl5P2Oja6ZctO30MAWd2eXO%2FsAvVc6S3Bggytgg8W576yXNw7zS2QY5O5c8uTKTUvPLAd7TyrmIk3ZfKS8pWa%2Ftgcmin7%2F0Frf%2Br6PSX5IB3lPfjLQkBP%2BWDCMvRhEyg8t7xHmaRDalbFvwyjYVikzFlqE7CcwbsOyj6aXC1Eo1TNKSM6eZjpmBQV4SiGb7Z4GzKjnBlTPL9hqUSZ5bdmRyeUH7fHc%2BHqwkypro0BmCxT6DD9F9e%2Bzc3MOxAPBeHI1oHbgD4cyatFXUIs2GY7xK0mKfkedfXjf6eNwnFZi9E%2B1%2FchFE1288gN3L%2B1vk1PG1kptaXV4Wirahr7CewvpMf5hsyLTHKiSfpV3ptqSYIzW76bMtqmwkAR5589IZABb9tszX3HYznVQ7Ux1x8EjgUXHoqvqg0zonw6bKpNQsPpboTboPtR8xadALJUEsJOsvNfnRVz7Rz6KWbVXSzi6%2BXc0%2BXAZPlE5V0iyI4rCb1X8mvHiudyRkULaeB3NhbKVh7eDU%2BhNeoCzCS84S%2BBjqkAS5ofrM15ulE53HtYbSLV%2FK27pDGDDIRLrdjvOZDSVFYnIzWsM2CyAl1bs5DmHDhypTHSnG3SBnkPTUX9ECOk7zvgBOU9cGDAR3LHaCRh69Hupat8hSQH25Oi%2FPH6JP6oaFntPz8Fjq%2FGPJQRWB5xbtpaw0yFMySeHPxyP6YzMxZ2ky%2F6JkKC3Uxguuxwg7QIOiHqOGE2KOigvuXbOwMMguyq6%2Fx&X-Amz-Signature=9184e968b4dba965890313dc489941f1fd5fb48f5adf69b13562e058b0bb17b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

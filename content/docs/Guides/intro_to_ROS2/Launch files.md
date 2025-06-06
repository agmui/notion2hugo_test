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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSCDIYS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIA4uS1p1juH75xMNxI597xze%2By9Fny66Fn2NUw55u5s%2BAiAkhC%2FFLeazthByg%2BTd04Oe%2BbhdLLUmDjX2ajWEsHtWzCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM08nEUQ19d9c2vsvuKtwDws5xcJ%2BAIXa1MW7LRRaaO32NvkomMN5He4G%2FqCfXX17xOW%2B05xNpWASu01UAJN5KPMCJisSQaiEajNO%2FSG80T6MNsYG44t4UsMvJXwl5mrrj2cS4MG58THhvuH0pbuOot2vclTGzBr%2BMFKZ1aH6ENWkg38PKJcGIQ03VVHONNuEUA8cM4u%2BtYSTgSpPrpnUiVY8z8wbekolzvnPmiP9LgYqqQDKJD1CPiAovNthxNjRgz0nwR06XVdu4iZ7acpPCv87%2FwP0FgRGbwJkEuajz0pkPvyZFE1ll8rRkh8WjmO5Y1tSqyKOUQlNNZ78OtlqGjGtShB94iv0uZwoOxT4GAvoYnb40KVIjlsxt4qYy1RaNcUPAyPT8GRCP3gP87QcwRjW%2FbBzmE338Y8m7Qb%2FtkBjN8QSMhTUQzQZzQ2AkqblK9e%2Bl6eShUJcM2hgElhOe9kyiKAaLH26JzMGW0%2B0uubQGElmsw67wtwMepoaV9aZV38J8i7t8Ojo73RDuYFKSbKgtshwtOXvaGqyL9RJVGneq9udPFtxPQ1mKKPihWczFMNLPWqP675f32y%2BVuW0CpBnH6ICHWR8cvbEG84768ZBeZFv%2Fy4xP%2B%2FsNjo7bnm3KKvWXv9wxjeVIdzYw1vuIwgY6pgHvCi%2FJ1zTutltKe6uKaM9Sk3MJXss%2BcQPRz24LdN4J%2Fg24lAH3nvzh3iyrUHw9cSAOOxDe2T6SRgb9%2FKh2fyLnX3%2Fld6NBdSABwplIwyklSiqLb4Dvpeu7sprJOcRWUIwLPqbNhAA8YcOkslVZ%2FnoY1VFudOy6mWa%2FZGxr0CROuFADOTUCGrNg6maIigo0zMggViqlleeZzZWZKN5HeISfoE%2BBhYcd&X-Amz-Signature=8d12cbdc7f9693380b5432eb0a26af390ce58cbb5c629c9973ecb427282c2422&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSCDIYS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIA4uS1p1juH75xMNxI597xze%2By9Fny66Fn2NUw55u5s%2BAiAkhC%2FFLeazthByg%2BTd04Oe%2BbhdLLUmDjX2ajWEsHtWzCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM08nEUQ19d9c2vsvuKtwDws5xcJ%2BAIXa1MW7LRRaaO32NvkomMN5He4G%2FqCfXX17xOW%2B05xNpWASu01UAJN5KPMCJisSQaiEajNO%2FSG80T6MNsYG44t4UsMvJXwl5mrrj2cS4MG58THhvuH0pbuOot2vclTGzBr%2BMFKZ1aH6ENWkg38PKJcGIQ03VVHONNuEUA8cM4u%2BtYSTgSpPrpnUiVY8z8wbekolzvnPmiP9LgYqqQDKJD1CPiAovNthxNjRgz0nwR06XVdu4iZ7acpPCv87%2FwP0FgRGbwJkEuajz0pkPvyZFE1ll8rRkh8WjmO5Y1tSqyKOUQlNNZ78OtlqGjGtShB94iv0uZwoOxT4GAvoYnb40KVIjlsxt4qYy1RaNcUPAyPT8GRCP3gP87QcwRjW%2FbBzmE338Y8m7Qb%2FtkBjN8QSMhTUQzQZzQ2AkqblK9e%2Bl6eShUJcM2hgElhOe9kyiKAaLH26JzMGW0%2B0uubQGElmsw67wtwMepoaV9aZV38J8i7t8Ojo73RDuYFKSbKgtshwtOXvaGqyL9RJVGneq9udPFtxPQ1mKKPihWczFMNLPWqP675f32y%2BVuW0CpBnH6ICHWR8cvbEG84768ZBeZFv%2Fy4xP%2B%2FsNjo7bnm3KKvWXv9wxjeVIdzYw1vuIwgY6pgHvCi%2FJ1zTutltKe6uKaM9Sk3MJXss%2BcQPRz24LdN4J%2Fg24lAH3nvzh3iyrUHw9cSAOOxDe2T6SRgb9%2FKh2fyLnX3%2Fld6NBdSABwplIwyklSiqLb4Dvpeu7sprJOcRWUIwLPqbNhAA8YcOkslVZ%2FnoY1VFudOy6mWa%2FZGxr0CROuFADOTUCGrNg6maIigo0zMggViqlleeZzZWZKN5HeISfoE%2BBhYcd&X-Amz-Signature=8183c0071f57d5133401d9a61e695919cb9ad52c1af450a7f2614b87ffeb0a05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GSCDIYS%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIA4uS1p1juH75xMNxI597xze%2By9Fny66Fn2NUw55u5s%2BAiAkhC%2FFLeazthByg%2BTd04Oe%2BbhdLLUmDjX2ajWEsHtWzCr%2FAwhSEAAaDDYzNzQyMzE4MzgwNSIM08nEUQ19d9c2vsvuKtwDws5xcJ%2BAIXa1MW7LRRaaO32NvkomMN5He4G%2FqCfXX17xOW%2B05xNpWASu01UAJN5KPMCJisSQaiEajNO%2FSG80T6MNsYG44t4UsMvJXwl5mrrj2cS4MG58THhvuH0pbuOot2vclTGzBr%2BMFKZ1aH6ENWkg38PKJcGIQ03VVHONNuEUA8cM4u%2BtYSTgSpPrpnUiVY8z8wbekolzvnPmiP9LgYqqQDKJD1CPiAovNthxNjRgz0nwR06XVdu4iZ7acpPCv87%2FwP0FgRGbwJkEuajz0pkPvyZFE1ll8rRkh8WjmO5Y1tSqyKOUQlNNZ78OtlqGjGtShB94iv0uZwoOxT4GAvoYnb40KVIjlsxt4qYy1RaNcUPAyPT8GRCP3gP87QcwRjW%2FbBzmE338Y8m7Qb%2FtkBjN8QSMhTUQzQZzQ2AkqblK9e%2Bl6eShUJcM2hgElhOe9kyiKAaLH26JzMGW0%2B0uubQGElmsw67wtwMepoaV9aZV38J8i7t8Ojo73RDuYFKSbKgtshwtOXvaGqyL9RJVGneq9udPFtxPQ1mKKPihWczFMNLPWqP675f32y%2BVuW0CpBnH6ICHWR8cvbEG84768ZBeZFv%2Fy4xP%2B%2FsNjo7bnm3KKvWXv9wxjeVIdzYw1vuIwgY6pgHvCi%2FJ1zTutltKe6uKaM9Sk3MJXss%2BcQPRz24LdN4J%2Fg24lAH3nvzh3iyrUHw9cSAOOxDe2T6SRgb9%2FKh2fyLnX3%2Fld6NBdSABwplIwyklSiqLb4Dvpeu7sprJOcRWUIwLPqbNhAA8YcOkslVZ%2FnoY1VFudOy6mWa%2FZGxr0CROuFADOTUCGrNg6maIigo0zMggViqlleeZzZWZKN5HeISfoE%2BBhYcd&X-Amz-Signature=0dcbff07860d2d43e451ef90fc83ffdd499bb6f67eb938827af38b5765f715a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

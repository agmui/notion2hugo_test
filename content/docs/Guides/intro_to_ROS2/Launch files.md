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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT75X55V%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF8ptVbZWJfggkUMok8MlZeP%2FjJDZ%2BAIxx7bDBRcsYgAIgAqTvqfFqrkpOxwZM5RtT4tUdN%2FSyC3pbV91fjxp9urYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAwDU%2FvhI5CG3gqtKCrcA8%2B%2BE1DU40dKvwEGiVzVRsrUuyiNj6OD9mGobA2BWRx4Epzi1QQ9GazAd%2BiagfGHDQVPeqogo%2FRqV0LLtLoX%2F9tPsKtLWHV3RIxPsqEJBWFb9vKshH0XjuMn3zxkFY%2BWym2YK4J7rR6x4dYrEpqiUDXPBaz2aBFwY%2B0yJRYjdwHAqSHbzTKiHaoWRUKL9XogROHqj9BY%2BE64QvSYTqOFWjDNtHFTpfybmEIiofCCYUh%2F1D7rp5mkk2imaALCmH%2BC%2FlNPQ3erjAP0hMVw%2BqZNUmVqDNxhsWQbQcnMFm2mb3O4zY%2Fp7b5VNgpVAcNxig82YFfFXHLhTWwbanUQJMLVK0kpNku85k%2BRXay%2BAwdLNUbDQ7TjewMt8ls78FapXIKbnFnmwx0BUYodoGFagpH5fKflsx6Il02hnsKia2NYiIsHXhTXuq1hsa1gZGncexM4h7dA5Nw9%2BC6FkGc5k%2BR36BGzxrYCgv%2BwPKL5pG1RJYcvf8Te2XB8m78qQxxJDvIa%2FrvTFmC%2FBlrtoJkkq8mMc2AgCoJSTjbxqoptInK0q4%2BsMow8KDX%2B1J72AK96W9EQyLJnuNL626K6o3mO8PnX9YRE5DiH9oejsJ7296imwWUZcPGTOWfpSZtkSORRMKXvwr8GOqUBKOVqdcBAaz%2FVWesYXb3bMqUw24LJYVgoxVl8RSaw%2BOq5XpTP%2FBYCK0lqu9ncq22Yh0Kgwxxid3t0gvWYMhFN7%2FBkTxp4v301Myl%2BDZz1ScP54RbneoE7ihXtAg8A0vQmXemkLr3s4I611XxIafA1F6Mpax%2Fr6tEPdaq7UEHPK8gi6jy5CMg1yFAkfQ2xd%2BEb6wf0qMPfkXH4o9%2FyHedytyUm3jxD&X-Amz-Signature=e611b27e10f54d4f9e28b22dc0bdcb7d25f118772380d4c4eeb244937e94b030&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT75X55V%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF8ptVbZWJfggkUMok8MlZeP%2FjJDZ%2BAIxx7bDBRcsYgAIgAqTvqfFqrkpOxwZM5RtT4tUdN%2FSyC3pbV91fjxp9urYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAwDU%2FvhI5CG3gqtKCrcA8%2B%2BE1DU40dKvwEGiVzVRsrUuyiNj6OD9mGobA2BWRx4Epzi1QQ9GazAd%2BiagfGHDQVPeqogo%2FRqV0LLtLoX%2F9tPsKtLWHV3RIxPsqEJBWFb9vKshH0XjuMn3zxkFY%2BWym2YK4J7rR6x4dYrEpqiUDXPBaz2aBFwY%2B0yJRYjdwHAqSHbzTKiHaoWRUKL9XogROHqj9BY%2BE64QvSYTqOFWjDNtHFTpfybmEIiofCCYUh%2F1D7rp5mkk2imaALCmH%2BC%2FlNPQ3erjAP0hMVw%2BqZNUmVqDNxhsWQbQcnMFm2mb3O4zY%2Fp7b5VNgpVAcNxig82YFfFXHLhTWwbanUQJMLVK0kpNku85k%2BRXay%2BAwdLNUbDQ7TjewMt8ls78FapXIKbnFnmwx0BUYodoGFagpH5fKflsx6Il02hnsKia2NYiIsHXhTXuq1hsa1gZGncexM4h7dA5Nw9%2BC6FkGc5k%2BR36BGzxrYCgv%2BwPKL5pG1RJYcvf8Te2XB8m78qQxxJDvIa%2FrvTFmC%2FBlrtoJkkq8mMc2AgCoJSTjbxqoptInK0q4%2BsMow8KDX%2B1J72AK96W9EQyLJnuNL626K6o3mO8PnX9YRE5DiH9oejsJ7296imwWUZcPGTOWfpSZtkSORRMKXvwr8GOqUBKOVqdcBAaz%2FVWesYXb3bMqUw24LJYVgoxVl8RSaw%2BOq5XpTP%2FBYCK0lqu9ncq22Yh0Kgwxxid3t0gvWYMhFN7%2FBkTxp4v301Myl%2BDZz1ScP54RbneoE7ihXtAg8A0vQmXemkLr3s4I611XxIafA1F6Mpax%2Fr6tEPdaq7UEHPK8gi6jy5CMg1yFAkfQ2xd%2BEb6wf0qMPfkXH4o9%2FyHedytyUm3jxD&X-Amz-Signature=b2e4a87da8e2f9cd706b5097844643ee486ab2988931f97fb3431bfd7255921c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT75X55V%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF8ptVbZWJfggkUMok8MlZeP%2FjJDZ%2BAIxx7bDBRcsYgAIgAqTvqfFqrkpOxwZM5RtT4tUdN%2FSyC3pbV91fjxp9urYq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDAwDU%2FvhI5CG3gqtKCrcA8%2B%2BE1DU40dKvwEGiVzVRsrUuyiNj6OD9mGobA2BWRx4Epzi1QQ9GazAd%2BiagfGHDQVPeqogo%2FRqV0LLtLoX%2F9tPsKtLWHV3RIxPsqEJBWFb9vKshH0XjuMn3zxkFY%2BWym2YK4J7rR6x4dYrEpqiUDXPBaz2aBFwY%2B0yJRYjdwHAqSHbzTKiHaoWRUKL9XogROHqj9BY%2BE64QvSYTqOFWjDNtHFTpfybmEIiofCCYUh%2F1D7rp5mkk2imaALCmH%2BC%2FlNPQ3erjAP0hMVw%2BqZNUmVqDNxhsWQbQcnMFm2mb3O4zY%2Fp7b5VNgpVAcNxig82YFfFXHLhTWwbanUQJMLVK0kpNku85k%2BRXay%2BAwdLNUbDQ7TjewMt8ls78FapXIKbnFnmwx0BUYodoGFagpH5fKflsx6Il02hnsKia2NYiIsHXhTXuq1hsa1gZGncexM4h7dA5Nw9%2BC6FkGc5k%2BR36BGzxrYCgv%2BwPKL5pG1RJYcvf8Te2XB8m78qQxxJDvIa%2FrvTFmC%2FBlrtoJkkq8mMc2AgCoJSTjbxqoptInK0q4%2BsMow8KDX%2B1J72AK96W9EQyLJnuNL626K6o3mO8PnX9YRE5DiH9oejsJ7296imwWUZcPGTOWfpSZtkSORRMKXvwr8GOqUBKOVqdcBAaz%2FVWesYXb3bMqUw24LJYVgoxVl8RSaw%2BOq5XpTP%2FBYCK0lqu9ncq22Yh0Kgwxxid3t0gvWYMhFN7%2FBkTxp4v301Myl%2BDZz1ScP54RbneoE7ihXtAg8A0vQmXemkLr3s4I611XxIafA1F6Mpax%2Fr6tEPdaq7UEHPK8gi6jy5CMg1yFAkfQ2xd%2BEb6wf0qMPfkXH4o9%2FyHedytyUm3jxD&X-Amz-Signature=a2aac763a6071fe8788fc4057a4f513a30661a0843b179d9c2c4640128c0284e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO4FVVHM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICVEyy22xmXkt1EdfICU0G2xucR8brX5rZ%2BTQ5FA1KeuAiAlFsQt0qE5zVgPofP7uqMeyxuGrdrvaFoKbubjU91VPCqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ9a7zVTKFtTzi06BKtwD%2B0OKWQgXAi%2FOGDeGJljvQZ%2BBAGnUrJW9%2FLuddF7eXTmJ24XmIhwYvlsB3Mp2peAjYjq2zF4slmnHyFOXdPvbBPV2%2FyQkjo6%2FE81On4KHPVVqm32EvonVXwptoTnB029PSfEg7blr7u2k5miU4UdbxJNLLCAJ9HN5vmMyd8DINe25K4a1IWae%2BCWsijsDgNqGr4Xr1YaR1%2FlVwxwcKb3dID%2FYw1hS0yIrYQV6CzCzdWQYEyRj7K59N8nXwNKhpXDEr8aZ7IZfn4Jac4EUO1BndoLtUGM3C%2BtXzNJIBj3u5JqoakO2RxfJffYElzVzsCCro0j%2BkYXnNa80LhgUb6ak9dbT3qJQQDHwJK%2BUuxY6S7N8VK9FZMOX2aTL6S7oFSjL334IxfnxFUjpPQw%2BKdj4ZH6IGd4U%2Ffn70J6bg3p8V6W%2BU2dHRargzurhLqegXNPvsN%2BcrNbEqs8IKan1cnHHop110Igs69zbZSU%2FGhsM83uwgteIJfytPpCakdUCo6KiTG4ayCfEJDXR5VAe6iuArv51%2B709%2FdE%2FmdPrEpd856vCSSvwdpF5%2By1XT%2FwcW%2FeD42IIT4KBo6hrLCPu4aMP3ej9AW%2B8BPK0Y5MciSbScvocrTpuEBt9tNf90j8wtqLIvgY6pgGrqph7sFBEGgwCPIPSmZQZTgkVLSDVVA5iM2Rfi5ql2uAIO%2FlQ%2FhehmPwCxEisuID0zkgegq0BNTdpdHnx5g0wU%2FvXq4nCi6WuheoEuYk9818g7NWl%2ByY10ZKKn8trnsYQe3IOJmPLqTIOleuce0iMiSiDbcsfAeqTqsaYFjopaGMoQxIbuOzv7Ld91HwkCq29Dt37tabsGjKzNrHCdlXaCVpc8rb7&X-Amz-Signature=ad1681fa7c01c2209b48898643d6a6ea0e5841d1c36ee33749472716c98bc303&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO4FVVHM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICVEyy22xmXkt1EdfICU0G2xucR8brX5rZ%2BTQ5FA1KeuAiAlFsQt0qE5zVgPofP7uqMeyxuGrdrvaFoKbubjU91VPCqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ9a7zVTKFtTzi06BKtwD%2B0OKWQgXAi%2FOGDeGJljvQZ%2BBAGnUrJW9%2FLuddF7eXTmJ24XmIhwYvlsB3Mp2peAjYjq2zF4slmnHyFOXdPvbBPV2%2FyQkjo6%2FE81On4KHPVVqm32EvonVXwptoTnB029PSfEg7blr7u2k5miU4UdbxJNLLCAJ9HN5vmMyd8DINe25K4a1IWae%2BCWsijsDgNqGr4Xr1YaR1%2FlVwxwcKb3dID%2FYw1hS0yIrYQV6CzCzdWQYEyRj7K59N8nXwNKhpXDEr8aZ7IZfn4Jac4EUO1BndoLtUGM3C%2BtXzNJIBj3u5JqoakO2RxfJffYElzVzsCCro0j%2BkYXnNa80LhgUb6ak9dbT3qJQQDHwJK%2BUuxY6S7N8VK9FZMOX2aTL6S7oFSjL334IxfnxFUjpPQw%2BKdj4ZH6IGd4U%2Ffn70J6bg3p8V6W%2BU2dHRargzurhLqegXNPvsN%2BcrNbEqs8IKan1cnHHop110Igs69zbZSU%2FGhsM83uwgteIJfytPpCakdUCo6KiTG4ayCfEJDXR5VAe6iuArv51%2B709%2FdE%2FmdPrEpd856vCSSvwdpF5%2By1XT%2FwcW%2FeD42IIT4KBo6hrLCPu4aMP3ej9AW%2B8BPK0Y5MciSbScvocrTpuEBt9tNf90j8wtqLIvgY6pgGrqph7sFBEGgwCPIPSmZQZTgkVLSDVVA5iM2Rfi5ql2uAIO%2FlQ%2FhehmPwCxEisuID0zkgegq0BNTdpdHnx5g0wU%2FvXq4nCi6WuheoEuYk9818g7NWl%2ByY10ZKKn8trnsYQe3IOJmPLqTIOleuce0iMiSiDbcsfAeqTqsaYFjopaGMoQxIbuOzv7Ld91HwkCq29Dt37tabsGjKzNrHCdlXaCVpc8rb7&X-Amz-Signature=aecfb17bff5563591079fc631e568808bcb168b076539973cf76f010b0b71913&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO4FVVHM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T230812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCICVEyy22xmXkt1EdfICU0G2xucR8brX5rZ%2BTQ5FA1KeuAiAlFsQt0qE5zVgPofP7uqMeyxuGrdrvaFoKbubjU91VPCqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ9a7zVTKFtTzi06BKtwD%2B0OKWQgXAi%2FOGDeGJljvQZ%2BBAGnUrJW9%2FLuddF7eXTmJ24XmIhwYvlsB3Mp2peAjYjq2zF4slmnHyFOXdPvbBPV2%2FyQkjo6%2FE81On4KHPVVqm32EvonVXwptoTnB029PSfEg7blr7u2k5miU4UdbxJNLLCAJ9HN5vmMyd8DINe25K4a1IWae%2BCWsijsDgNqGr4Xr1YaR1%2FlVwxwcKb3dID%2FYw1hS0yIrYQV6CzCzdWQYEyRj7K59N8nXwNKhpXDEr8aZ7IZfn4Jac4EUO1BndoLtUGM3C%2BtXzNJIBj3u5JqoakO2RxfJffYElzVzsCCro0j%2BkYXnNa80LhgUb6ak9dbT3qJQQDHwJK%2BUuxY6S7N8VK9FZMOX2aTL6S7oFSjL334IxfnxFUjpPQw%2BKdj4ZH6IGd4U%2Ffn70J6bg3p8V6W%2BU2dHRargzurhLqegXNPvsN%2BcrNbEqs8IKan1cnHHop110Igs69zbZSU%2FGhsM83uwgteIJfytPpCakdUCo6KiTG4ayCfEJDXR5VAe6iuArv51%2B709%2FdE%2FmdPrEpd856vCSSvwdpF5%2By1XT%2FwcW%2FeD42IIT4KBo6hrLCPu4aMP3ej9AW%2B8BPK0Y5MciSbScvocrTpuEBt9tNf90j8wtqLIvgY6pgGrqph7sFBEGgwCPIPSmZQZTgkVLSDVVA5iM2Rfi5ql2uAIO%2FlQ%2FhehmPwCxEisuID0zkgegq0BNTdpdHnx5g0wU%2FvXq4nCi6WuheoEuYk9818g7NWl%2ByY10ZKKn8trnsYQe3IOJmPLqTIOleuce0iMiSiDbcsfAeqTqsaYFjopaGMoQxIbuOzv7Ld91HwkCq29Dt37tabsGjKzNrHCdlXaCVpc8rb7&X-Amz-Signature=bc47633be407dbe8308723ecad4e4a0dfc9bcfa6c4d83777e54eeb0e75071727&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIGTIYZN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC7EM1Qt1RswsiJhBtMc0SPHmVrC4Vl3bzjJTsI%2FfYb%2FQIhAKI0Ev2D5l0r10aUj%2Bu2D8JMQK6dIVTR6aN2mJ6C7uXXKv8DCFEQABoMNjM3NDIzMTgzODA1IgxJCBfBD5toqVGixMIq3APaVeyKEm3fEJqOu7MJb%2Bm7%2FHD2fkx3ltWyUEwCYKSOh889pQCqBz9lfZeZ7OiO4IWojPoStwZpZS4nauA%2B7qRVdU%2F2Y6rDBVQat6ko5VtiFjOpbaj%2B4x4scOq3az6GJGJs%2Bk9arjpjCTDq2DgXRmJu1m3ZX85OdYk8VMWAkp%2FK%2FxeOWCuEE%2B%2FP6qiTbQOcdT2wwbtcF1vpfIrtaTnPkkBTpVOLsTGldI1MLPBgTuPrcD%2BqNOeEuBXxQYy%2FDAk2JEFVBJfHaVZP45FilCk2tjEh6RICR8dvrRXSFk6kcJZ8XEYuggjbfwcconpUCA21xippLb2zxYd9U4TLD9Svx8i0iBIkQrepXIs%2B4W2SkIOcSb1EtcgmmGoCOPpyBTwMtdXxpwObguokffqHMkPhdVTFRaJQ9cL0R4TjM8yE56jjLFzVb8hmulVqPyd9SpD1RaOGWW5J7frsHvwJqIgk6OIZYa%2BnnakFOEws8F7j8oo7qCkIQ0TffP8c2dLINEuF0yTl8VzxmYpaGnxh3y7LZxZ05vwNFZaNL3ZKfMsx3O%2F8%2BaNYdirv2ohAPzvHZrJVjmlbPNXCk9IQKqiVveoKtrin%2FV2PT8Mjb8efk8Ia8PGP5xf1OMwWfiibAbt9kDDFgqfDBjqkASVMHyOGgIpeyvAdB5J0wR9AlpmBJHO%2BJRYisk0HVASl8VCPEAOQ6X7m%2BhMCU%2BB0lR74PHfQEQwzO%2BN3XwLyREiNEQB2PUgTZjLUxSxELYqpfqDfhxF12SqVb1b27CM95rseTcZqU6Wkq6V4pKRE0x3F5SFi5UOR%2Bjdms5D5kOcommadgKnOLYbxYSD4K%2Fbw6Zj4yp4CO3n7mnfk7nNa1kmquAKL&X-Amz-Signature=50f6e3153ec34c78336c94a66c9d5a233f2564d7d10fa8cf88241cee75810cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIGTIYZN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC7EM1Qt1RswsiJhBtMc0SPHmVrC4Vl3bzjJTsI%2FfYb%2FQIhAKI0Ev2D5l0r10aUj%2Bu2D8JMQK6dIVTR6aN2mJ6C7uXXKv8DCFEQABoMNjM3NDIzMTgzODA1IgxJCBfBD5toqVGixMIq3APaVeyKEm3fEJqOu7MJb%2Bm7%2FHD2fkx3ltWyUEwCYKSOh889pQCqBz9lfZeZ7OiO4IWojPoStwZpZS4nauA%2B7qRVdU%2F2Y6rDBVQat6ko5VtiFjOpbaj%2B4x4scOq3az6GJGJs%2Bk9arjpjCTDq2DgXRmJu1m3ZX85OdYk8VMWAkp%2FK%2FxeOWCuEE%2B%2FP6qiTbQOcdT2wwbtcF1vpfIrtaTnPkkBTpVOLsTGldI1MLPBgTuPrcD%2BqNOeEuBXxQYy%2FDAk2JEFVBJfHaVZP45FilCk2tjEh6RICR8dvrRXSFk6kcJZ8XEYuggjbfwcconpUCA21xippLb2zxYd9U4TLD9Svx8i0iBIkQrepXIs%2B4W2SkIOcSb1EtcgmmGoCOPpyBTwMtdXxpwObguokffqHMkPhdVTFRaJQ9cL0R4TjM8yE56jjLFzVb8hmulVqPyd9SpD1RaOGWW5J7frsHvwJqIgk6OIZYa%2BnnakFOEws8F7j8oo7qCkIQ0TffP8c2dLINEuF0yTl8VzxmYpaGnxh3y7LZxZ05vwNFZaNL3ZKfMsx3O%2F8%2BaNYdirv2ohAPzvHZrJVjmlbPNXCk9IQKqiVveoKtrin%2FV2PT8Mjb8efk8Ia8PGP5xf1OMwWfiibAbt9kDDFgqfDBjqkASVMHyOGgIpeyvAdB5J0wR9AlpmBJHO%2BJRYisk0HVASl8VCPEAOQ6X7m%2BhMCU%2BB0lR74PHfQEQwzO%2BN3XwLyREiNEQB2PUgTZjLUxSxELYqpfqDfhxF12SqVb1b27CM95rseTcZqU6Wkq6V4pKRE0x3F5SFi5UOR%2Bjdms5D5kOcommadgKnOLYbxYSD4K%2Fbw6Zj4yp4CO3n7mnfk7nNa1kmquAKL&X-Amz-Signature=b647aa14e91762538e7f49dc149a74374f0efb4a2c499639e46e1ebdb8ad0246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIGTIYZN%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC7EM1Qt1RswsiJhBtMc0SPHmVrC4Vl3bzjJTsI%2FfYb%2FQIhAKI0Ev2D5l0r10aUj%2Bu2D8JMQK6dIVTR6aN2mJ6C7uXXKv8DCFEQABoMNjM3NDIzMTgzODA1IgxJCBfBD5toqVGixMIq3APaVeyKEm3fEJqOu7MJb%2Bm7%2FHD2fkx3ltWyUEwCYKSOh889pQCqBz9lfZeZ7OiO4IWojPoStwZpZS4nauA%2B7qRVdU%2F2Y6rDBVQat6ko5VtiFjOpbaj%2B4x4scOq3az6GJGJs%2Bk9arjpjCTDq2DgXRmJu1m3ZX85OdYk8VMWAkp%2FK%2FxeOWCuEE%2B%2FP6qiTbQOcdT2wwbtcF1vpfIrtaTnPkkBTpVOLsTGldI1MLPBgTuPrcD%2BqNOeEuBXxQYy%2FDAk2JEFVBJfHaVZP45FilCk2tjEh6RICR8dvrRXSFk6kcJZ8XEYuggjbfwcconpUCA21xippLb2zxYd9U4TLD9Svx8i0iBIkQrepXIs%2B4W2SkIOcSb1EtcgmmGoCOPpyBTwMtdXxpwObguokffqHMkPhdVTFRaJQ9cL0R4TjM8yE56jjLFzVb8hmulVqPyd9SpD1RaOGWW5J7frsHvwJqIgk6OIZYa%2BnnakFOEws8F7j8oo7qCkIQ0TffP8c2dLINEuF0yTl8VzxmYpaGnxh3y7LZxZ05vwNFZaNL3ZKfMsx3O%2F8%2BaNYdirv2ohAPzvHZrJVjmlbPNXCk9IQKqiVveoKtrin%2FV2PT8Mjb8efk8Ia8PGP5xf1OMwWfiibAbt9kDDFgqfDBjqkASVMHyOGgIpeyvAdB5J0wR9AlpmBJHO%2BJRYisk0HVASl8VCPEAOQ6X7m%2BhMCU%2BB0lR74PHfQEQwzO%2BN3XwLyREiNEQB2PUgTZjLUxSxELYqpfqDfhxF12SqVb1b27CM95rseTcZqU6Wkq6V4pKRE0x3F5SFi5UOR%2Bjdms5D5kOcommadgKnOLYbxYSD4K%2Fbw6Zj4yp4CO3n7mnfk7nNa1kmquAKL&X-Amz-Signature=fbf11263780b6048e50894a0936d37bf6782ab051468b0185f821399d88180db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

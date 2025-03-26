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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNYRZAM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Ann4kIEgt%2FpjiZWhqDb1aVCDGNn5kf%2BteiGSUj1tVQIhAO9CBOsLrz3eZajTCfl6vDC2CbXgWVXGtbXCmzvUliPfKv8DCDEQABoMNjM3NDIzMTgzODA1Igw4Bt9ZvBkpW%2FsirB4q3APAclxzquRQNwHK%2F7%2BoMOIJUCz6YcQDPI6oE6yCgagG%2FUcoXlk%2FilAfmYnbV8yvst33dNxiyRmE3mqWEQ%2FwteIA5CKqCDEiAt%2FRVtTRZFVzG%2FsVk2NiY53MW%2FQx2RlB%2FBOhEgyoqi8hihKn8LeEAucOMLpYjs9DhMG%2F6shQ5xfuXMU4KnOUZrB13SCOXBSoOxxffvQFZUOF1crTcH%2BpRUUlzb%2BW%2FevCC0dgp%2FFhfAGxjXcp%2BzfEQJZ1HidkRWrd26VDud47wc775U839AUzGiQb382cA58Qs4eELpNha42gEzJWqsSViQ9rh3tAE3LWnsIq0XdisChaSzo9lzu242TlGLGVBfUVBnN3dj2YaGjC6CUycr2ScuWGcOWCjRfn%2FhBwxZf79TBAbczCvnYX8Xm9E41K434rVjs%2Bb0T%2FoKxnubyfXbDdb%2F39oM9qXppCv432g1TvJjRxJQXli50hFwatG7cE6aiOV7dOWYSauv3xnNtw%2F8cTO5BcQrKw6YhCU7vqHQB%2FP%2F%2BbfrB%2FVec8bXCT%2F%2By9wyqdg1gOY31l6cf83QOlxCncZSZEH%2FDyXOAO6L4quuQTtnhtISKh53alXiPXmgSiJ7Q0DxoNSxXObUjh%2FiWVGyy54Xu8m0Zu5DDhuJC%2FBjqkATfgoA7gH4nmPbPqHgJy9vPaAv6nusUUvhrYNJNJsoUCUz2siLLqRg7K2rhjH%2B%2BA400lG6zhP4RXGrEy%2FSaWyyx8F%2Bo564yCSM64IEn0fl6CZwXPflDfl6pJLsoMmwvdh65PD7dBRfbAx8hUpIV1PYLzJV9nogwiLgNwp1jquHw7gbILnMITdXr3UKPf4FRV0daUahSr6ooQYg%2BkUPpB%2B555dJX9&X-Amz-Signature=4324f32cd158dae6b77696f72ce2a4c526ff7798d5aee79b2c960f49dd43473a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNYRZAM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Ann4kIEgt%2FpjiZWhqDb1aVCDGNn5kf%2BteiGSUj1tVQIhAO9CBOsLrz3eZajTCfl6vDC2CbXgWVXGtbXCmzvUliPfKv8DCDEQABoMNjM3NDIzMTgzODA1Igw4Bt9ZvBkpW%2FsirB4q3APAclxzquRQNwHK%2F7%2BoMOIJUCz6YcQDPI6oE6yCgagG%2FUcoXlk%2FilAfmYnbV8yvst33dNxiyRmE3mqWEQ%2FwteIA5CKqCDEiAt%2FRVtTRZFVzG%2FsVk2NiY53MW%2FQx2RlB%2FBOhEgyoqi8hihKn8LeEAucOMLpYjs9DhMG%2F6shQ5xfuXMU4KnOUZrB13SCOXBSoOxxffvQFZUOF1crTcH%2BpRUUlzb%2BW%2FevCC0dgp%2FFhfAGxjXcp%2BzfEQJZ1HidkRWrd26VDud47wc775U839AUzGiQb382cA58Qs4eELpNha42gEzJWqsSViQ9rh3tAE3LWnsIq0XdisChaSzo9lzu242TlGLGVBfUVBnN3dj2YaGjC6CUycr2ScuWGcOWCjRfn%2FhBwxZf79TBAbczCvnYX8Xm9E41K434rVjs%2Bb0T%2FoKxnubyfXbDdb%2F39oM9qXppCv432g1TvJjRxJQXli50hFwatG7cE6aiOV7dOWYSauv3xnNtw%2F8cTO5BcQrKw6YhCU7vqHQB%2FP%2F%2BbfrB%2FVec8bXCT%2F%2By9wyqdg1gOY31l6cf83QOlxCncZSZEH%2FDyXOAO6L4quuQTtnhtISKh53alXiPXmgSiJ7Q0DxoNSxXObUjh%2FiWVGyy54Xu8m0Zu5DDhuJC%2FBjqkATfgoA7gH4nmPbPqHgJy9vPaAv6nusUUvhrYNJNJsoUCUz2siLLqRg7K2rhjH%2B%2BA400lG6zhP4RXGrEy%2FSaWyyx8F%2Bo564yCSM64IEn0fl6CZwXPflDfl6pJLsoMmwvdh65PD7dBRfbAx8hUpIV1PYLzJV9nogwiLgNwp1jquHw7gbILnMITdXr3UKPf4FRV0daUahSr6ooQYg%2BkUPpB%2B555dJX9&X-Amz-Signature=99b85fe8035dd0746b698922c9418e595d4c4cf0c786393d071d29c5229e4c16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNYRZAM%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T161045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Ann4kIEgt%2FpjiZWhqDb1aVCDGNn5kf%2BteiGSUj1tVQIhAO9CBOsLrz3eZajTCfl6vDC2CbXgWVXGtbXCmzvUliPfKv8DCDEQABoMNjM3NDIzMTgzODA1Igw4Bt9ZvBkpW%2FsirB4q3APAclxzquRQNwHK%2F7%2BoMOIJUCz6YcQDPI6oE6yCgagG%2FUcoXlk%2FilAfmYnbV8yvst33dNxiyRmE3mqWEQ%2FwteIA5CKqCDEiAt%2FRVtTRZFVzG%2FsVk2NiY53MW%2FQx2RlB%2FBOhEgyoqi8hihKn8LeEAucOMLpYjs9DhMG%2F6shQ5xfuXMU4KnOUZrB13SCOXBSoOxxffvQFZUOF1crTcH%2BpRUUlzb%2BW%2FevCC0dgp%2FFhfAGxjXcp%2BzfEQJZ1HidkRWrd26VDud47wc775U839AUzGiQb382cA58Qs4eELpNha42gEzJWqsSViQ9rh3tAE3LWnsIq0XdisChaSzo9lzu242TlGLGVBfUVBnN3dj2YaGjC6CUycr2ScuWGcOWCjRfn%2FhBwxZf79TBAbczCvnYX8Xm9E41K434rVjs%2Bb0T%2FoKxnubyfXbDdb%2F39oM9qXppCv432g1TvJjRxJQXli50hFwatG7cE6aiOV7dOWYSauv3xnNtw%2F8cTO5BcQrKw6YhCU7vqHQB%2FP%2F%2BbfrB%2FVec8bXCT%2F%2By9wyqdg1gOY31l6cf83QOlxCncZSZEH%2FDyXOAO6L4quuQTtnhtISKh53alXiPXmgSiJ7Q0DxoNSxXObUjh%2FiWVGyy54Xu8m0Zu5DDhuJC%2FBjqkATfgoA7gH4nmPbPqHgJy9vPaAv6nusUUvhrYNJNJsoUCUz2siLLqRg7K2rhjH%2B%2BA400lG6zhP4RXGrEy%2FSaWyyx8F%2Bo564yCSM64IEn0fl6CZwXPflDfl6pJLsoMmwvdh65PD7dBRfbAx8hUpIV1PYLzJV9nogwiLgNwp1jquHw7gbILnMITdXr3UKPf4FRV0daUahSr6ooQYg%2BkUPpB%2B555dJX9&X-Amz-Signature=b7537cc05153b670a96adca6e98c5ff7bc04a61b08c6c72d6378c4cde1555e86&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

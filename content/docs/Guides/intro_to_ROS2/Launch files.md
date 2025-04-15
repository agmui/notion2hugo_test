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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3EIYOM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzy709PE23otSNciiVE4wP4QNCXjOeUQzbWtkhgPLR1QIhALB7oNPtujd41lqaMUDe2BkGOl7r8F4x3FEgbXKzcSfhKv8DCDEQABoMNjM3NDIzMTgzODA1IgxPzYdtjvtryL2vDzcq3APs%2Bx1nnHgYJ7VEBtkWWxpRPJBUEoxdZS6uVWrtTFh%2BUAQCFsX2bihjdN63IuembphWuRc4eLaRN06tSDW9z2WhM7ynRXBALiZpFqDricGq4cBRdJeqJNuzZevMPONKCI54c7CPGmTSIU0q7RacxEoLrzfhAysohzeg7Wa4fT36Xh09lNgt6zTnJFsCssPC8SHAXuR9bAeymT1xL6QYaNkKwiYILPARc5keOfoDmhjf5N%2B8yl8m9tGfMtzL9epJVxmDF3bXYZVjZ%2BZYYJfmPpLPQ%2BsBqL7WJpx98iWehUvo1u2djbtoWdgBv5v1NSil1Nt0e7CDjV3XNEBGqv%2Fe5Q5UDyBdfEGj%2BnhZQhfxdxrKjWLjaJJbsJZU1RuG7XVQ5P9bZxRHJALUG9k9XewreODx69lUN6FTaKUcodqYIOsf8wuBOornvYDaKiWMFORTNVeLwbi6EcKYXd4ICv5Nf19LpUi%2FfvHt8MV0TYZ7oJwkLpXpHz06JpqKIL9Ho24V82l4uoWqLIh6%2BpDbeSohu5Eb7ruYcwpqJuRH%2Fuw%2FntJRuG2ziUbbySVIv9SsPTS%2B2Uqg36of2gZqlx5iLV1vShk3%2F7W%2BzP9titVl1lgwaOorW8TAZUYu9%2Fas5xONJzC7hPq%2FBjqkAZdoHvgkijs2Tr8NktEmofqAsjTCa6OpsMGObBFGysORpY8SgFHE2kmJLOaHh0KGHhBmCuz5NAt5oc7nEkSf6F9ORPJA928yZSn6kIsm31Tdt3SomfH1i4ZqlcTuoA%2FR9SPhYgAUgjIsCdCNJgHS6IkgtzO%2FXFYjCaA%2Fal4K6YjZiPHnNrl56K31k88PlD%2B19WUuKQAdvVRwpqwR8iYz6T2Q%2BPKa&X-Amz-Signature=39d218b9817146d029c7f36ff1daa3abaea08a22caf651cb535c1f7851473709&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3EIYOM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzy709PE23otSNciiVE4wP4QNCXjOeUQzbWtkhgPLR1QIhALB7oNPtujd41lqaMUDe2BkGOl7r8F4x3FEgbXKzcSfhKv8DCDEQABoMNjM3NDIzMTgzODA1IgxPzYdtjvtryL2vDzcq3APs%2Bx1nnHgYJ7VEBtkWWxpRPJBUEoxdZS6uVWrtTFh%2BUAQCFsX2bihjdN63IuembphWuRc4eLaRN06tSDW9z2WhM7ynRXBALiZpFqDricGq4cBRdJeqJNuzZevMPONKCI54c7CPGmTSIU0q7RacxEoLrzfhAysohzeg7Wa4fT36Xh09lNgt6zTnJFsCssPC8SHAXuR9bAeymT1xL6QYaNkKwiYILPARc5keOfoDmhjf5N%2B8yl8m9tGfMtzL9epJVxmDF3bXYZVjZ%2BZYYJfmPpLPQ%2BsBqL7WJpx98iWehUvo1u2djbtoWdgBv5v1NSil1Nt0e7CDjV3XNEBGqv%2Fe5Q5UDyBdfEGj%2BnhZQhfxdxrKjWLjaJJbsJZU1RuG7XVQ5P9bZxRHJALUG9k9XewreODx69lUN6FTaKUcodqYIOsf8wuBOornvYDaKiWMFORTNVeLwbi6EcKYXd4ICv5Nf19LpUi%2FfvHt8MV0TYZ7oJwkLpXpHz06JpqKIL9Ho24V82l4uoWqLIh6%2BpDbeSohu5Eb7ruYcwpqJuRH%2Fuw%2FntJRuG2ziUbbySVIv9SsPTS%2B2Uqg36of2gZqlx5iLV1vShk3%2F7W%2BzP9titVl1lgwaOorW8TAZUYu9%2Fas5xONJzC7hPq%2FBjqkAZdoHvgkijs2Tr8NktEmofqAsjTCa6OpsMGObBFGysORpY8SgFHE2kmJLOaHh0KGHhBmCuz5NAt5oc7nEkSf6F9ORPJA928yZSn6kIsm31Tdt3SomfH1i4ZqlcTuoA%2FR9SPhYgAUgjIsCdCNJgHS6IkgtzO%2FXFYjCaA%2Fal4K6YjZiPHnNrl56K31k88PlD%2B19WUuKQAdvVRwpqwR8iYz6T2Q%2BPKa&X-Amz-Signature=c6d14169f96ecac433b6a7ee4e310ea044039a661b3920da5be211ce0072acb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3EIYOM%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzy709PE23otSNciiVE4wP4QNCXjOeUQzbWtkhgPLR1QIhALB7oNPtujd41lqaMUDe2BkGOl7r8F4x3FEgbXKzcSfhKv8DCDEQABoMNjM3NDIzMTgzODA1IgxPzYdtjvtryL2vDzcq3APs%2Bx1nnHgYJ7VEBtkWWxpRPJBUEoxdZS6uVWrtTFh%2BUAQCFsX2bihjdN63IuembphWuRc4eLaRN06tSDW9z2WhM7ynRXBALiZpFqDricGq4cBRdJeqJNuzZevMPONKCI54c7CPGmTSIU0q7RacxEoLrzfhAysohzeg7Wa4fT36Xh09lNgt6zTnJFsCssPC8SHAXuR9bAeymT1xL6QYaNkKwiYILPARc5keOfoDmhjf5N%2B8yl8m9tGfMtzL9epJVxmDF3bXYZVjZ%2BZYYJfmPpLPQ%2BsBqL7WJpx98iWehUvo1u2djbtoWdgBv5v1NSil1Nt0e7CDjV3XNEBGqv%2Fe5Q5UDyBdfEGj%2BnhZQhfxdxrKjWLjaJJbsJZU1RuG7XVQ5P9bZxRHJALUG9k9XewreODx69lUN6FTaKUcodqYIOsf8wuBOornvYDaKiWMFORTNVeLwbi6EcKYXd4ICv5Nf19LpUi%2FfvHt8MV0TYZ7oJwkLpXpHz06JpqKIL9Ho24V82l4uoWqLIh6%2BpDbeSohu5Eb7ruYcwpqJuRH%2Fuw%2FntJRuG2ziUbbySVIv9SsPTS%2B2Uqg36of2gZqlx5iLV1vShk3%2F7W%2BzP9titVl1lgwaOorW8TAZUYu9%2Fas5xONJzC7hPq%2FBjqkAZdoHvgkijs2Tr8NktEmofqAsjTCa6OpsMGObBFGysORpY8SgFHE2kmJLOaHh0KGHhBmCuz5NAt5oc7nEkSf6F9ORPJA928yZSn6kIsm31Tdt3SomfH1i4ZqlcTuoA%2FR9SPhYgAUgjIsCdCNJgHS6IkgtzO%2FXFYjCaA%2Fal4K6YjZiPHnNrl56K31k88PlD%2B19WUuKQAdvVRwpqwR8iYz6T2Q%2BPKa&X-Amz-Signature=8a989fc57bce0034d0a68f51122a17aa9eeae7d6584341edb05b1db7c47eb536&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

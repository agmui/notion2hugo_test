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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YLKXJV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4rFcl2DQS7SYQQ3w4%2FOPvoY0sUj8l%2BYbacBOK3QuZdAiAoS9ffBOKn%2ByQxwy8f3lAw4TRNNiWvy3bsbjAjmZEWeCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdCxzf0wphssliRJ0KtwDW1b228EpRDsT%2FtA1xpRYFWEnMyTpmk0Nixiwh%2FAdmITR3Efl58bMBifTi%2F3kQ1ZPPmmSkF9n3sqfZcJNYl82gkxouMh4UhEqIgRI3q6p2VY5yfdEVdAK6fdHsdP%2BMerLDkb6h%2FIfWqcXCG3%2F1zvfdlamQnBrcBCA9UYfxK4BhYXwVALU4DflTREJ2Fy5m18jGaFhF9iWxxigGqwRoErLs%2Ff%2BQT%2FwJSXX8NiJijQQafuQuz9sm59QJifKZNEjiwEqtk8IKikdLU101Ay6jSmVBQqsCefOBGrFuA39j8rXrcOFRnHS4jjjeZYqYJubf3RAVMblAObRWKdopC%2Fm4QYNiGsaa95hAEN10WM7fuIBWlrwxZxf8NlB4QCQYExLqtKdY8OlXkYo9qWqURk7LZ3Sxo5UiXHHK9pt%2BVaQKngHE45jtmkQLL8bin9t4yLD3WB9TvamBLWryHEm3gck5IAg6KYBC6aLv%2BZe3ZT%2FYNrJva8EphwqM7vYDj5oFJhxVXewS%2FMWuBoMtAbWl22xmiRwdpVI8yEK14yivx1ypnDdMe%2FmUhxz3oQiWP5ID4TB0rmpkjkbP%2FpBMFmv%2BQFub77FoKWAb17UQZmag8u%2BKKxha7oWQjIagzkLkFgIKd4w6pGDwwY6pgEw70yrngRZIhJgrAJ0SeG4AUJmn9E3TPmqirDcdDKPaK1yuFKD62UXJEaup%2FgVdh%2FP5Z7Tuaagim6IQuFqvTfkmiS5KJ1HXsxeW38Ye9ujviqr5pPhl6sgeXnpHXD80EfvpB8SaKrA6DeM0TQfhc3R%2BnlU481HouDNZfbt4E1kAwSj6Vpnnxe2hYMyidoLE9pwnnkzzwdR5SzRNDpHA0RJw5qYuRb7&X-Amz-Signature=ad769227e066ae301e90f8a92a63bf13a95a1d33c42be64db8cbc8222eea32cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YLKXJV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4rFcl2DQS7SYQQ3w4%2FOPvoY0sUj8l%2BYbacBOK3QuZdAiAoS9ffBOKn%2ByQxwy8f3lAw4TRNNiWvy3bsbjAjmZEWeCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdCxzf0wphssliRJ0KtwDW1b228EpRDsT%2FtA1xpRYFWEnMyTpmk0Nixiwh%2FAdmITR3Efl58bMBifTi%2F3kQ1ZPPmmSkF9n3sqfZcJNYl82gkxouMh4UhEqIgRI3q6p2VY5yfdEVdAK6fdHsdP%2BMerLDkb6h%2FIfWqcXCG3%2F1zvfdlamQnBrcBCA9UYfxK4BhYXwVALU4DflTREJ2Fy5m18jGaFhF9iWxxigGqwRoErLs%2Ff%2BQT%2FwJSXX8NiJijQQafuQuz9sm59QJifKZNEjiwEqtk8IKikdLU101Ay6jSmVBQqsCefOBGrFuA39j8rXrcOFRnHS4jjjeZYqYJubf3RAVMblAObRWKdopC%2Fm4QYNiGsaa95hAEN10WM7fuIBWlrwxZxf8NlB4QCQYExLqtKdY8OlXkYo9qWqURk7LZ3Sxo5UiXHHK9pt%2BVaQKngHE45jtmkQLL8bin9t4yLD3WB9TvamBLWryHEm3gck5IAg6KYBC6aLv%2BZe3ZT%2FYNrJva8EphwqM7vYDj5oFJhxVXewS%2FMWuBoMtAbWl22xmiRwdpVI8yEK14yivx1ypnDdMe%2FmUhxz3oQiWP5ID4TB0rmpkjkbP%2FpBMFmv%2BQFub77FoKWAb17UQZmag8u%2BKKxha7oWQjIagzkLkFgIKd4w6pGDwwY6pgEw70yrngRZIhJgrAJ0SeG4AUJmn9E3TPmqirDcdDKPaK1yuFKD62UXJEaup%2FgVdh%2FP5Z7Tuaagim6IQuFqvTfkmiS5KJ1HXsxeW38Ye9ujviqr5pPhl6sgeXnpHXD80EfvpB8SaKrA6DeM0TQfhc3R%2BnlU481HouDNZfbt4E1kAwSj6Vpnnxe2hYMyidoLE9pwnnkzzwdR5SzRNDpHA0RJw5qYuRb7&X-Amz-Signature=3ba1e62f2fbede1af1913bf7cf1e759aa7bf582e31ba00a7579aad889cd737ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YLKXJV%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB4rFcl2DQS7SYQQ3w4%2FOPvoY0sUj8l%2BYbacBOK3QuZdAiAoS9ffBOKn%2ByQxwy8f3lAw4TRNNiWvy3bsbjAjmZEWeCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdCxzf0wphssliRJ0KtwDW1b228EpRDsT%2FtA1xpRYFWEnMyTpmk0Nixiwh%2FAdmITR3Efl58bMBifTi%2F3kQ1ZPPmmSkF9n3sqfZcJNYl82gkxouMh4UhEqIgRI3q6p2VY5yfdEVdAK6fdHsdP%2BMerLDkb6h%2FIfWqcXCG3%2F1zvfdlamQnBrcBCA9UYfxK4BhYXwVALU4DflTREJ2Fy5m18jGaFhF9iWxxigGqwRoErLs%2Ff%2BQT%2FwJSXX8NiJijQQafuQuz9sm59QJifKZNEjiwEqtk8IKikdLU101Ay6jSmVBQqsCefOBGrFuA39j8rXrcOFRnHS4jjjeZYqYJubf3RAVMblAObRWKdopC%2Fm4QYNiGsaa95hAEN10WM7fuIBWlrwxZxf8NlB4QCQYExLqtKdY8OlXkYo9qWqURk7LZ3Sxo5UiXHHK9pt%2BVaQKngHE45jtmkQLL8bin9t4yLD3WB9TvamBLWryHEm3gck5IAg6KYBC6aLv%2BZe3ZT%2FYNrJva8EphwqM7vYDj5oFJhxVXewS%2FMWuBoMtAbWl22xmiRwdpVI8yEK14yivx1ypnDdMe%2FmUhxz3oQiWP5ID4TB0rmpkjkbP%2FpBMFmv%2BQFub77FoKWAb17UQZmag8u%2BKKxha7oWQjIagzkLkFgIKd4w6pGDwwY6pgEw70yrngRZIhJgrAJ0SeG4AUJmn9E3TPmqirDcdDKPaK1yuFKD62UXJEaup%2FgVdh%2FP5Z7Tuaagim6IQuFqvTfkmiS5KJ1HXsxeW38Ye9ujviqr5pPhl6sgeXnpHXD80EfvpB8SaKrA6DeM0TQfhc3R%2BnlU481HouDNZfbt4E1kAwSj6Vpnnxe2hYMyidoLE9pwnnkzzwdR5SzRNDpHA0RJw5qYuRb7&X-Amz-Signature=e9a936d1222d55d889b341e12d539fbf5a90091a927662cdc14a2b1a1838d80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

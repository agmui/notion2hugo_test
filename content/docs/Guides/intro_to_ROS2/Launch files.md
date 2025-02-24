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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDGYXYYI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA29eV22znIOjvVmWJJ6uN5zk0Lm%2FXqb6m9PhT%2FSbh8vAiAEWdZqgqUWI1y6DpjvGagf39VZ5g%2BGWoAXQs%2FzGSXr7Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMrLYa4fJZDNNUMvpVKtwDhPj6E9mNKcT3mkOLAaaH5P5QNVP4VNrmOIRCC0WARBLh%2FHvzgOIzM6rlxfyQ9y3Ob3bxhMKS13VDAkMy%2BsenwUqSMWFBu0LtUVTHr%2FaHU%2Bbcgo5JCJ65sGsgRwk5PVfcuuduCj7Fq9Wuw2iQI5TAIymf%2F6tDkm0YXV7iN3KYeuGkYrKfQ4e%2Bgy7LxINlQlTRm4dA94mfdSJG0NADCQtSxzT%2FAToVLmrDoxOzlUm4ANzRLFKDX3cGG0I7yOcQZ9wRYPU0R7EMQSjWd42gBScS%2FTvEW0xMBoD6YB84MLnS%2F9NSdNq4A85A7tIWWqIqmNBwjBXS8ISGg0bSeKQSIMXC2lHK8bbBpTWwOkM%2FNnEwqYqiiiKIfUSOz%2F9f7pyL8FyykS2wfv9kQvKOlDKrae%2BgJwLee4RkxgLfJnhCTrCaCGd9PO%2BBqPH1dIPDGzY%2Fo93euKkO2dTlkiiDkuIHWLi8w55qG8oj2pgG9J3AHivd%2FK6ysfIpeXcijXZbeH0CaJYx%2Be1H%2BeJyzX15eCdCSE%2BBbPFM%2B%2Bt9QsxVKjIUf7PZlTd1pCUuWP%2BZLnoekE2icfdwp3fseCioBf3%2B3wIOwU0Y4jKMADyS6EnfaX0D6pN8o2XvnpIytrq6NPeXej0wqNfzvQY6pgHL8Q%2BMHZZCjctXJbyA392aTdmU5w4vWTyV%2BtlE6Jdya3mNtTSjNnP%2BL7RAwidUmPWMujnnKvyBK4HgE7ZgkA3%2FwwLxoyEWzcbccH2PAZNVOCSSxdsQEDjgvr9SS%2FUInxjAZXJLTHXL0OlfJL9klMzV9WqFB8aewW1Gj%2Bs7G1Y0ubEMF06poBJk9HfemxY2mZ0qxuYTJk%2FEapjlKccBaUQgl7pl5PuY&X-Amz-Signature=44791c063e9c6ddf4169e9a8b3ccb266a737e01213bc7b928a36031a7b576e4a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDGYXYYI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA29eV22znIOjvVmWJJ6uN5zk0Lm%2FXqb6m9PhT%2FSbh8vAiAEWdZqgqUWI1y6DpjvGagf39VZ5g%2BGWoAXQs%2FzGSXr7Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMrLYa4fJZDNNUMvpVKtwDhPj6E9mNKcT3mkOLAaaH5P5QNVP4VNrmOIRCC0WARBLh%2FHvzgOIzM6rlxfyQ9y3Ob3bxhMKS13VDAkMy%2BsenwUqSMWFBu0LtUVTHr%2FaHU%2Bbcgo5JCJ65sGsgRwk5PVfcuuduCj7Fq9Wuw2iQI5TAIymf%2F6tDkm0YXV7iN3KYeuGkYrKfQ4e%2Bgy7LxINlQlTRm4dA94mfdSJG0NADCQtSxzT%2FAToVLmrDoxOzlUm4ANzRLFKDX3cGG0I7yOcQZ9wRYPU0R7EMQSjWd42gBScS%2FTvEW0xMBoD6YB84MLnS%2F9NSdNq4A85A7tIWWqIqmNBwjBXS8ISGg0bSeKQSIMXC2lHK8bbBpTWwOkM%2FNnEwqYqiiiKIfUSOz%2F9f7pyL8FyykS2wfv9kQvKOlDKrae%2BgJwLee4RkxgLfJnhCTrCaCGd9PO%2BBqPH1dIPDGzY%2Fo93euKkO2dTlkiiDkuIHWLi8w55qG8oj2pgG9J3AHivd%2FK6ysfIpeXcijXZbeH0CaJYx%2Be1H%2BeJyzX15eCdCSE%2BBbPFM%2B%2Bt9QsxVKjIUf7PZlTd1pCUuWP%2BZLnoekE2icfdwp3fseCioBf3%2B3wIOwU0Y4jKMADyS6EnfaX0D6pN8o2XvnpIytrq6NPeXej0wqNfzvQY6pgHL8Q%2BMHZZCjctXJbyA392aTdmU5w4vWTyV%2BtlE6Jdya3mNtTSjNnP%2BL7RAwidUmPWMujnnKvyBK4HgE7ZgkA3%2FwwLxoyEWzcbccH2PAZNVOCSSxdsQEDjgvr9SS%2FUInxjAZXJLTHXL0OlfJL9klMzV9WqFB8aewW1Gj%2Bs7G1Y0ubEMF06poBJk9HfemxY2mZ0qxuYTJk%2FEapjlKccBaUQgl7pl5PuY&X-Amz-Signature=15baf1d7b834e15404133144e3d954b03bada03ea6241755ec2778f089dff0f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDGYXYYI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA29eV22znIOjvVmWJJ6uN5zk0Lm%2FXqb6m9PhT%2FSbh8vAiAEWdZqgqUWI1y6DpjvGagf39VZ5g%2BGWoAXQs%2FzGSXr7Cr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMrLYa4fJZDNNUMvpVKtwDhPj6E9mNKcT3mkOLAaaH5P5QNVP4VNrmOIRCC0WARBLh%2FHvzgOIzM6rlxfyQ9y3Ob3bxhMKS13VDAkMy%2BsenwUqSMWFBu0LtUVTHr%2FaHU%2Bbcgo5JCJ65sGsgRwk5PVfcuuduCj7Fq9Wuw2iQI5TAIymf%2F6tDkm0YXV7iN3KYeuGkYrKfQ4e%2Bgy7LxINlQlTRm4dA94mfdSJG0NADCQtSxzT%2FAToVLmrDoxOzlUm4ANzRLFKDX3cGG0I7yOcQZ9wRYPU0R7EMQSjWd42gBScS%2FTvEW0xMBoD6YB84MLnS%2F9NSdNq4A85A7tIWWqIqmNBwjBXS8ISGg0bSeKQSIMXC2lHK8bbBpTWwOkM%2FNnEwqYqiiiKIfUSOz%2F9f7pyL8FyykS2wfv9kQvKOlDKrae%2BgJwLee4RkxgLfJnhCTrCaCGd9PO%2BBqPH1dIPDGzY%2Fo93euKkO2dTlkiiDkuIHWLi8w55qG8oj2pgG9J3AHivd%2FK6ysfIpeXcijXZbeH0CaJYx%2Be1H%2BeJyzX15eCdCSE%2BBbPFM%2B%2Bt9QsxVKjIUf7PZlTd1pCUuWP%2BZLnoekE2icfdwp3fseCioBf3%2B3wIOwU0Y4jKMADyS6EnfaX0D6pN8o2XvnpIytrq6NPeXej0wqNfzvQY6pgHL8Q%2BMHZZCjctXJbyA392aTdmU5w4vWTyV%2BtlE6Jdya3mNtTSjNnP%2BL7RAwidUmPWMujnnKvyBK4HgE7ZgkA3%2FwwLxoyEWzcbccH2PAZNVOCSSxdsQEDjgvr9SS%2FUInxjAZXJLTHXL0OlfJL9klMzV9WqFB8aewW1Gj%2Bs7G1Y0ubEMF06poBJk9HfemxY2mZ0qxuYTJk%2FEapjlKccBaUQgl7pl5PuY&X-Amz-Signature=d93a95f2de094a526c686a913b0de849e29a05777fd0b430591f65cf757ffcb6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

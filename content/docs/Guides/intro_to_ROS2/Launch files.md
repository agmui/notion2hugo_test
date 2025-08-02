---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KODWHWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4se3hiC9XcgNSPFC3SQ1H%2FAhe1Fw0modieXbTL6CkRwIhAJvhAMrchocVhX21pTqq5sHzMDsRulsNWkCsIq8VvZCJKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh7XTxZuvRxRv4lWIq3APkSC1UfOlnTzPsEfzVdKxQwyriZcjFIl9dBNcZlYjt8ixtl%2FbMFIlVFnPiDYCZG1x6t1boWA0Pyxb3Vjj8u2A1s4T0lV%2F8Vguk0cZ9kTC0nXSBmkg2bJyVfPZptsn%2FqldqH4EFbJ%2BgHulEA36AH7b1oGD1tKAbOYWZWnn9WJwtkrYAmCfxPaO0X231lW5d46V87%2FcvAvE7X5B6Vq%2FhsfCEEjbnSxBTm1lBvw8x7d6tVe%2B4yGd5sA4hnCkuQypbZu%2Fmzluoq0KM%2FRXW%2BdahLQULHRqoGmUfTWvqX00uWL4ngTWgf5I%2FnjH1gWjqaCSiKcpkii4FBwA3MK7rdSV2jBHxLo8uTQbzvZdnodzVQ7b%2BkmqKgLCa1Wh5DmmDUfzSospJ2FtrXu%2BSJTUUJci1md9VmOoz2O7DKILgUd3MR%2BW0COn1DK9%2F1SiicI%2FP88TVQACbRlii8zsl1Po41O99j5At2E5HbLlS8dD8DdUm0b3YaLFz4iE6GQ84nTaurq6FG93WsOR4iGeWL0ZgseUgJQMnKHeRmfSd1LIXgBEkB3%2FoGFxlamL68z5EpmSORiO4e7LkBwQMvmFoi0eINhSUTJuP3lUJ4ybokfCxW4cPYatVXJK4y4KZXQxdDx9lxDDi97XEBjqkAVyPVEtuzOpH7p0R%2FjB4uYVwnFunSbM0t9VBH9b6HMNy%2BaUch%2FjyBJhxm%2Fjqfc8d2hEgb3R2%2FRGwh6pZF5ewcHb%2FJVGwjmPenYjXlThpMRuFA%2FUXVa6WKkJPDTliSvolSVERFY%2FPJkJI01ZCRCIXt4oasHIundKJZZiNQA4gNbAnxluZft9ryG9iH2ARFCNYB5pdMXmpQMJd%2BA08%2BrgHYUr0wMJB&X-Amz-Signature=546099015554f61b3b67baf31cec6cb95e4dcffa88e4bb48c0bf1bdaa6308239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KODWHWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4se3hiC9XcgNSPFC3SQ1H%2FAhe1Fw0modieXbTL6CkRwIhAJvhAMrchocVhX21pTqq5sHzMDsRulsNWkCsIq8VvZCJKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh7XTxZuvRxRv4lWIq3APkSC1UfOlnTzPsEfzVdKxQwyriZcjFIl9dBNcZlYjt8ixtl%2FbMFIlVFnPiDYCZG1x6t1boWA0Pyxb3Vjj8u2A1s4T0lV%2F8Vguk0cZ9kTC0nXSBmkg2bJyVfPZptsn%2FqldqH4EFbJ%2BgHulEA36AH7b1oGD1tKAbOYWZWnn9WJwtkrYAmCfxPaO0X231lW5d46V87%2FcvAvE7X5B6Vq%2FhsfCEEjbnSxBTm1lBvw8x7d6tVe%2B4yGd5sA4hnCkuQypbZu%2Fmzluoq0KM%2FRXW%2BdahLQULHRqoGmUfTWvqX00uWL4ngTWgf5I%2FnjH1gWjqaCSiKcpkii4FBwA3MK7rdSV2jBHxLo8uTQbzvZdnodzVQ7b%2BkmqKgLCa1Wh5DmmDUfzSospJ2FtrXu%2BSJTUUJci1md9VmOoz2O7DKILgUd3MR%2BW0COn1DK9%2F1SiicI%2FP88TVQACbRlii8zsl1Po41O99j5At2E5HbLlS8dD8DdUm0b3YaLFz4iE6GQ84nTaurq6FG93WsOR4iGeWL0ZgseUgJQMnKHeRmfSd1LIXgBEkB3%2FoGFxlamL68z5EpmSORiO4e7LkBwQMvmFoi0eINhSUTJuP3lUJ4ybokfCxW4cPYatVXJK4y4KZXQxdDx9lxDDi97XEBjqkAVyPVEtuzOpH7p0R%2FjB4uYVwnFunSbM0t9VBH9b6HMNy%2BaUch%2FjyBJhxm%2Fjqfc8d2hEgb3R2%2FRGwh6pZF5ewcHb%2FJVGwjmPenYjXlThpMRuFA%2FUXVa6WKkJPDTliSvolSVERFY%2FPJkJI01ZCRCIXt4oasHIundKJZZiNQA4gNbAnxluZft9ryG9iH2ARFCNYB5pdMXmpQMJd%2BA08%2BrgHYUr0wMJB&X-Amz-Signature=c816b4f8eefae023a502af298c2ff45b58edbeccca71dd672711d8969a862ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KODWHWT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4se3hiC9XcgNSPFC3SQ1H%2FAhe1Fw0modieXbTL6CkRwIhAJvhAMrchocVhX21pTqq5sHzMDsRulsNWkCsIq8VvZCJKogECPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxh7XTxZuvRxRv4lWIq3APkSC1UfOlnTzPsEfzVdKxQwyriZcjFIl9dBNcZlYjt8ixtl%2FbMFIlVFnPiDYCZG1x6t1boWA0Pyxb3Vjj8u2A1s4T0lV%2F8Vguk0cZ9kTC0nXSBmkg2bJyVfPZptsn%2FqldqH4EFbJ%2BgHulEA36AH7b1oGD1tKAbOYWZWnn9WJwtkrYAmCfxPaO0X231lW5d46V87%2FcvAvE7X5B6Vq%2FhsfCEEjbnSxBTm1lBvw8x7d6tVe%2B4yGd5sA4hnCkuQypbZu%2Fmzluoq0KM%2FRXW%2BdahLQULHRqoGmUfTWvqX00uWL4ngTWgf5I%2FnjH1gWjqaCSiKcpkii4FBwA3MK7rdSV2jBHxLo8uTQbzvZdnodzVQ7b%2BkmqKgLCa1Wh5DmmDUfzSospJ2FtrXu%2BSJTUUJci1md9VmOoz2O7DKILgUd3MR%2BW0COn1DK9%2F1SiicI%2FP88TVQACbRlii8zsl1Po41O99j5At2E5HbLlS8dD8DdUm0b3YaLFz4iE6GQ84nTaurq6FG93WsOR4iGeWL0ZgseUgJQMnKHeRmfSd1LIXgBEkB3%2FoGFxlamL68z5EpmSORiO4e7LkBwQMvmFoi0eINhSUTJuP3lUJ4ybokfCxW4cPYatVXJK4y4KZXQxdDx9lxDDi97XEBjqkAVyPVEtuzOpH7p0R%2FjB4uYVwnFunSbM0t9VBH9b6HMNy%2BaUch%2FjyBJhxm%2Fjqfc8d2hEgb3R2%2FRGwh6pZF5ewcHb%2FJVGwjmPenYjXlThpMRuFA%2FUXVa6WKkJPDTliSvolSVERFY%2FPJkJI01ZCRCIXt4oasHIundKJZZiNQA4gNbAnxluZft9ryG9iH2ARFCNYB5pdMXmpQMJd%2BA08%2BrgHYUr0wMJB&X-Amz-Signature=00f2430db430788487d6fcfae4d71676b8334dc4efe5ca1716624a161517ae43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

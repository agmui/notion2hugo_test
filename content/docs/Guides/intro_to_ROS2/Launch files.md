---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEONTWJW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCeVBZmDZo9mdhJhbqiVrojkihaADia8lej5ebjAgVU3gIgFk52Cne9jfgWstAcYnK%2FDOZ%2FVB3U3aYOlmyyf4N%2BZysq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIXUNG0G0iXUS9TZGyrcA0bWFKacdtE27W9oXuDQRG4qn6lUkJ0%2Bw04MTp2VGVy2zOn7%2F%2BJzytCFKxaydY0D8zmE4eHLBiGBbUrExJc9RuPmzbulGha%2FM1OgGwv1tta%2Bi%2BHkY5twdQYCgKLfCWlIgz8rVJSF7FIgocn2YoQKk69cfy7OCMTmr7is0UQlYeaXKGKRHOJhgSmLo24nQAzP3Zi9HEE4hOYanukSRQ8CdMHJ5ekFOwfehyQEEdPOQxSxvX7QBYJUTj%2B1oj%2Fk4thB75QO3cD3YXLj23%2FnyVVHOiUTNTfJu5r5Wq8iOK75tq06lD4lSn62F9oNdzfk9N3HOvubkyUhjq7ZE6rWcjRt9I1tshiEs4iOvU6JgKXW5%2Fkn0U5%2BSRJNf5Siq6pf4nve56a3Ndo9BsxjmNkcWm7uVDJoN9i1AFwt4IM3cDuqptZ8csRyyoDOi0hjP%2BzSGue8w29Od6qyvUD3GNxQXK8NFqe2iItmTuMuK3BocIhVByudfz5dIjZtJ9ddBXsQCELSyRLD51M7YTNP5fmjt%2FWsoYCvpSd6hl%2BvgEJWi5RHUSkktr%2BsKNzsw4bYyEzU47KGqtTENd%2Fn9Rg6Bt8DGxDHO5uJNJOGNdNTpwiwqqdENzewVtFPvuu7rfPWEWpBMMysx8QGOqUBwVxtNQZR8ravPZp0%2BHGdkAeAqtyElOwg4WR0yXC%2BhsoV3uwqfAtHGRIq%2BRjE7AjkMlH0giR67NJ45XUm4IgZzzLMVutIvG08piUdKgOraNSWdd639K5cA9eAxJZOhNpAjiFO%2BpxOcougK3pJObCUzHyqYWO3lvuHWYmvz4oPLraDXnAOSHBHkzcQi4Nn8snsPZyUmKTrG6EOvTwH4mZaMke0zZ%2B6&X-Amz-Signature=ccf698d9691c3de95a23f79412bf1d3cdddb79b495c8ba6f0d3b9de5c13ec814&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEONTWJW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCeVBZmDZo9mdhJhbqiVrojkihaADia8lej5ebjAgVU3gIgFk52Cne9jfgWstAcYnK%2FDOZ%2FVB3U3aYOlmyyf4N%2BZysq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIXUNG0G0iXUS9TZGyrcA0bWFKacdtE27W9oXuDQRG4qn6lUkJ0%2Bw04MTp2VGVy2zOn7%2F%2BJzytCFKxaydY0D8zmE4eHLBiGBbUrExJc9RuPmzbulGha%2FM1OgGwv1tta%2Bi%2BHkY5twdQYCgKLfCWlIgz8rVJSF7FIgocn2YoQKk69cfy7OCMTmr7is0UQlYeaXKGKRHOJhgSmLo24nQAzP3Zi9HEE4hOYanukSRQ8CdMHJ5ekFOwfehyQEEdPOQxSxvX7QBYJUTj%2B1oj%2Fk4thB75QO3cD3YXLj23%2FnyVVHOiUTNTfJu5r5Wq8iOK75tq06lD4lSn62F9oNdzfk9N3HOvubkyUhjq7ZE6rWcjRt9I1tshiEs4iOvU6JgKXW5%2Fkn0U5%2BSRJNf5Siq6pf4nve56a3Ndo9BsxjmNkcWm7uVDJoN9i1AFwt4IM3cDuqptZ8csRyyoDOi0hjP%2BzSGue8w29Od6qyvUD3GNxQXK8NFqe2iItmTuMuK3BocIhVByudfz5dIjZtJ9ddBXsQCELSyRLD51M7YTNP5fmjt%2FWsoYCvpSd6hl%2BvgEJWi5RHUSkktr%2BsKNzsw4bYyEzU47KGqtTENd%2Fn9Rg6Bt8DGxDHO5uJNJOGNdNTpwiwqqdENzewVtFPvuu7rfPWEWpBMMysx8QGOqUBwVxtNQZR8ravPZp0%2BHGdkAeAqtyElOwg4WR0yXC%2BhsoV3uwqfAtHGRIq%2BRjE7AjkMlH0giR67NJ45XUm4IgZzzLMVutIvG08piUdKgOraNSWdd639K5cA9eAxJZOhNpAjiFO%2BpxOcougK3pJObCUzHyqYWO3lvuHWYmvz4oPLraDXnAOSHBHkzcQi4Nn8snsPZyUmKTrG6EOvTwH4mZaMke0zZ%2B6&X-Amz-Signature=cda5bd0b6e25d75f26054809d2d66ec98ca3392095448c169d556688054aa291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEONTWJW%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T101124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCeVBZmDZo9mdhJhbqiVrojkihaADia8lej5ebjAgVU3gIgFk52Cne9jfgWstAcYnK%2FDOZ%2FVB3U3aYOlmyyf4N%2BZysq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIXUNG0G0iXUS9TZGyrcA0bWFKacdtE27W9oXuDQRG4qn6lUkJ0%2Bw04MTp2VGVy2zOn7%2F%2BJzytCFKxaydY0D8zmE4eHLBiGBbUrExJc9RuPmzbulGha%2FM1OgGwv1tta%2Bi%2BHkY5twdQYCgKLfCWlIgz8rVJSF7FIgocn2YoQKk69cfy7OCMTmr7is0UQlYeaXKGKRHOJhgSmLo24nQAzP3Zi9HEE4hOYanukSRQ8CdMHJ5ekFOwfehyQEEdPOQxSxvX7QBYJUTj%2B1oj%2Fk4thB75QO3cD3YXLj23%2FnyVVHOiUTNTfJu5r5Wq8iOK75tq06lD4lSn62F9oNdzfk9N3HOvubkyUhjq7ZE6rWcjRt9I1tshiEs4iOvU6JgKXW5%2Fkn0U5%2BSRJNf5Siq6pf4nve56a3Ndo9BsxjmNkcWm7uVDJoN9i1AFwt4IM3cDuqptZ8csRyyoDOi0hjP%2BzSGue8w29Od6qyvUD3GNxQXK8NFqe2iItmTuMuK3BocIhVByudfz5dIjZtJ9ddBXsQCELSyRLD51M7YTNP5fmjt%2FWsoYCvpSd6hl%2BvgEJWi5RHUSkktr%2BsKNzsw4bYyEzU47KGqtTENd%2Fn9Rg6Bt8DGxDHO5uJNJOGNdNTpwiwqqdENzewVtFPvuu7rfPWEWpBMMysx8QGOqUBwVxtNQZR8ravPZp0%2BHGdkAeAqtyElOwg4WR0yXC%2BhsoV3uwqfAtHGRIq%2BRjE7AjkMlH0giR67NJ45XUm4IgZzzLMVutIvG08piUdKgOraNSWdd639K5cA9eAxJZOhNpAjiFO%2BpxOcougK3pJObCUzHyqYWO3lvuHWYmvz4oPLraDXnAOSHBHkzcQi4Nn8snsPZyUmKTrG6EOvTwH4mZaMke0zZ%2B6&X-Amz-Signature=dab8f3595025bf7c41bd02d2cfddcd2537c1b551df555f37d0320b2e0a4b7464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

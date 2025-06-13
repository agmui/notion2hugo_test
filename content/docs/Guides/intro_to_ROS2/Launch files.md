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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVIVOODM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQChlMOe%2FSQwYCdKt7OfIRc4kNxp9RUns%2B70uILnp445TAIhAPz070FVrvrG2L%2Frkfpte1u%2FEJNYSavQ1Y%2B4SpLJ0h6MKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoMZtcIxtZcuzplkwq3ANpIZx7iJKoPBSwFb%2BaGNdD0725842f7pWkAqs3E1kScxNK86JwYV3UEIA%2BU%2FquVhCte5ZR9uP0SbKNhT1yACFx11NjgT1SyqRBzSC%2FomVfOElk10Pe3uJ8Hoz5ztYIYNl7d%2FU2qUf59BsfMIkwKTN1J%2F95o%2FpE%2Fnxzn0lvsB%2Bzsh6qFrJP5JCzYo8hdgNWxylNdojObGp1edINP6K7UG7pi0g%2FUzMllXysCUyzr%2BwO1fCHWFlvg36jggmyVgIuWGx5prf2z%2Fr1v7jGkJUq8qRraOX%2FbfD8adzhJJKjmZTv%2B09dgKrECK8XAONWv2u6l6jTdxOB5eo%2B3Qb4j3vOJjAh9%2BoOCyVeNNhdHFh4jrHrT%2BuCwI%2BnXiac5Gbxg2BmRKrkqELTU6AaBjxyk%2BqdZmWq8t624SSrNplofMx9zx2TF0rgH6xDKnC7sxzmlfiWZ91cTnPy5D9xverEg6ei0yKA6tOD3l5qJV3i%2B2hI8%2FryLuFDYnjIJGwpbhCALM4I1ZtZC3VpB7R8Yj4APL7CLNhkE5m3s%2FCfJBhPuFC4nOrFyi0lqK4yG2oNYCsoYLj0cDxAgiK2opOar6ci5OnePSWWoMyJqIFIP8aHD%2F4XnvQb%2BQcZ85Ks7fMT%2BYrqMjDw1K7CBjqkAfZ3XyEwH%2F63drRecQd%2BBxKZ1xLQnuUuaiTmFFZ2QTQZTdHRaIH4koJJuCg3QoCJtIFpafLbf5L9FCqMJ7pv0izMUciQPBBVJAV3JzDMspJQdV9sISf1Njp5K%2BuLx5M8R1SwxlMvoy%2B4VyxinvnWZ3bUAnN7gWx8XfP2JqAaRx3RxSxVVhmdZYVifn9Zz8FqpOYY0qhQRyagBzcPPIqOh7P89sR1&X-Amz-Signature=32fd519b9bb4531067fa4ea6a689d13411eecb29de86af361897fd8e92afcc62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVIVOODM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQChlMOe%2FSQwYCdKt7OfIRc4kNxp9RUns%2B70uILnp445TAIhAPz070FVrvrG2L%2Frkfpte1u%2FEJNYSavQ1Y%2B4SpLJ0h6MKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoMZtcIxtZcuzplkwq3ANpIZx7iJKoPBSwFb%2BaGNdD0725842f7pWkAqs3E1kScxNK86JwYV3UEIA%2BU%2FquVhCte5ZR9uP0SbKNhT1yACFx11NjgT1SyqRBzSC%2FomVfOElk10Pe3uJ8Hoz5ztYIYNl7d%2FU2qUf59BsfMIkwKTN1J%2F95o%2FpE%2Fnxzn0lvsB%2Bzsh6qFrJP5JCzYo8hdgNWxylNdojObGp1edINP6K7UG7pi0g%2FUzMllXysCUyzr%2BwO1fCHWFlvg36jggmyVgIuWGx5prf2z%2Fr1v7jGkJUq8qRraOX%2FbfD8adzhJJKjmZTv%2B09dgKrECK8XAONWv2u6l6jTdxOB5eo%2B3Qb4j3vOJjAh9%2BoOCyVeNNhdHFh4jrHrT%2BuCwI%2BnXiac5Gbxg2BmRKrkqELTU6AaBjxyk%2BqdZmWq8t624SSrNplofMx9zx2TF0rgH6xDKnC7sxzmlfiWZ91cTnPy5D9xverEg6ei0yKA6tOD3l5qJV3i%2B2hI8%2FryLuFDYnjIJGwpbhCALM4I1ZtZC3VpB7R8Yj4APL7CLNhkE5m3s%2FCfJBhPuFC4nOrFyi0lqK4yG2oNYCsoYLj0cDxAgiK2opOar6ci5OnePSWWoMyJqIFIP8aHD%2F4XnvQb%2BQcZ85Ks7fMT%2BYrqMjDw1K7CBjqkAfZ3XyEwH%2F63drRecQd%2BBxKZ1xLQnuUuaiTmFFZ2QTQZTdHRaIH4koJJuCg3QoCJtIFpafLbf5L9FCqMJ7pv0izMUciQPBBVJAV3JzDMspJQdV9sISf1Njp5K%2BuLx5M8R1SwxlMvoy%2B4VyxinvnWZ3bUAnN7gWx8XfP2JqAaRx3RxSxVVhmdZYVifn9Zz8FqpOYY0qhQRyagBzcPPIqOh7P89sR1&X-Amz-Signature=f5ab20268914704e4dd29a200bc625f63c7ae3b3cd4c9c341866ae656274a0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVIVOODM%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQChlMOe%2FSQwYCdKt7OfIRc4kNxp9RUns%2B70uILnp445TAIhAPz070FVrvrG2L%2Frkfpte1u%2FEJNYSavQ1Y%2B4SpLJ0h6MKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoMZtcIxtZcuzplkwq3ANpIZx7iJKoPBSwFb%2BaGNdD0725842f7pWkAqs3E1kScxNK86JwYV3UEIA%2BU%2FquVhCte5ZR9uP0SbKNhT1yACFx11NjgT1SyqRBzSC%2FomVfOElk10Pe3uJ8Hoz5ztYIYNl7d%2FU2qUf59BsfMIkwKTN1J%2F95o%2FpE%2Fnxzn0lvsB%2Bzsh6qFrJP5JCzYo8hdgNWxylNdojObGp1edINP6K7UG7pi0g%2FUzMllXysCUyzr%2BwO1fCHWFlvg36jggmyVgIuWGx5prf2z%2Fr1v7jGkJUq8qRraOX%2FbfD8adzhJJKjmZTv%2B09dgKrECK8XAONWv2u6l6jTdxOB5eo%2B3Qb4j3vOJjAh9%2BoOCyVeNNhdHFh4jrHrT%2BuCwI%2BnXiac5Gbxg2BmRKrkqELTU6AaBjxyk%2BqdZmWq8t624SSrNplofMx9zx2TF0rgH6xDKnC7sxzmlfiWZ91cTnPy5D9xverEg6ei0yKA6tOD3l5qJV3i%2B2hI8%2FryLuFDYnjIJGwpbhCALM4I1ZtZC3VpB7R8Yj4APL7CLNhkE5m3s%2FCfJBhPuFC4nOrFyi0lqK4yG2oNYCsoYLj0cDxAgiK2opOar6ci5OnePSWWoMyJqIFIP8aHD%2F4XnvQb%2BQcZ85Ks7fMT%2BYrqMjDw1K7CBjqkAfZ3XyEwH%2F63drRecQd%2BBxKZ1xLQnuUuaiTmFFZ2QTQZTdHRaIH4koJJuCg3QoCJtIFpafLbf5L9FCqMJ7pv0izMUciQPBBVJAV3JzDMspJQdV9sISf1Njp5K%2BuLx5M8R1SwxlMvoy%2B4VyxinvnWZ3bUAnN7gWx8XfP2JqAaRx3RxSxVVhmdZYVifn9Zz8FqpOYY0qhQRyagBzcPPIqOh7P89sR1&X-Amz-Signature=d2dd518a69ee7e692c68b230023f1cc0aa90ea77b7d7ac8a5836c5546bbe90a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

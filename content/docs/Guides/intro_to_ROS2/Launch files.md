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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAHXJN62%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHCdoIeng%2BVwhOmrFgPAmEF90tH8pyo5aTmzz0llO1VOAiAWfUNNItLpYZwKxrzkHGi0%2Fr088%2FTKLdJTeSDJ7WXH6iqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUWm8GdkJpR5x7UEHKtwDdQqWQyRIW60FOGSKJs4QDLER0dIUvFAIZuUAzcScCDjiL9AnlFJQFzpIwew94Iu06OZeJH2ll6J557pT80gvLQSHmcYqohBCVJekZXn6L3egDEB7vSvBMochFyrgAAxlJ1od68en4QdmWc%2F2haS3DIA1hYTtrFPL7llniIC3449kmrPqrOf2se4CtI1mbyCNf%2BhzKbSc6T8%2BD%2FE79LTtwBGZTm1%2BF3gpjLjDQb1C%2FWQFOHGDtwc7R7HRmqIfHXhkOxNE0rhRZfj1ESm7PMLOIhDnCwS4FX%2BMW7BkapEngwYNA728BkQTU5JeE4lJgHRslMk45Cy5ioZZIXKmRJcKC%2FnMmGi%2F7ydg0%2BocaoQWCauS4cg9fJeYYwxyKtvomHMAEAxb3P1xLIvkfmGfYnjKLlUwgc0%2B00N3NHiFxFk98Pp3VmXwWAMOiNuiiBuJsuOYbynGISBua33Eh8A4V1IfPwUgC%2BGNqEG7xRb8%2BeV5uB59AwVACfWiIjFEZmGcqXsIJKf39fuXRCSCfF2mtyso9TxJ9MUQ9cdGgbIMW%2B%2BMGJ9FylIZYsx0KRbXTi5pUoXbvaeZq8eKc3YKykuWbxTttM36znU0E8mmZtogbSDTI3tax26lDy91i18oyoowsKLRvQY6pgEuuzTzb0IpiQ%2B1qLxmcGZujxR3TmbeIFxbSshP%2BtuLSq2GfhuxGXOoO6N6c6gIo%2F8WhFE7e7M0b0sBTZ9rfLDimCqFZe2xu0Z%2BEPhowjbwq%2BjwHfv%2BuOT%2BRjHP2S6EpTilXMYt%2Bd3MoF8Kp7vaXHFYrXhp6faXo2%2Bd%2FVwsGxfd7BWRwxFhlLs2X7EXV2qxbIG2bywz1DeWefQ7sHGGJpsMdzDwfFnp&X-Amz-Signature=2d502a18d2441dd51e34e3d9ead69db0cbcd7c88a59ae66b25151097565d8d84&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAHXJN62%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHCdoIeng%2BVwhOmrFgPAmEF90tH8pyo5aTmzz0llO1VOAiAWfUNNItLpYZwKxrzkHGi0%2Fr088%2FTKLdJTeSDJ7WXH6iqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUWm8GdkJpR5x7UEHKtwDdQqWQyRIW60FOGSKJs4QDLER0dIUvFAIZuUAzcScCDjiL9AnlFJQFzpIwew94Iu06OZeJH2ll6J557pT80gvLQSHmcYqohBCVJekZXn6L3egDEB7vSvBMochFyrgAAxlJ1od68en4QdmWc%2F2haS3DIA1hYTtrFPL7llniIC3449kmrPqrOf2se4CtI1mbyCNf%2BhzKbSc6T8%2BD%2FE79LTtwBGZTm1%2BF3gpjLjDQb1C%2FWQFOHGDtwc7R7HRmqIfHXhkOxNE0rhRZfj1ESm7PMLOIhDnCwS4FX%2BMW7BkapEngwYNA728BkQTU5JeE4lJgHRslMk45Cy5ioZZIXKmRJcKC%2FnMmGi%2F7ydg0%2BocaoQWCauS4cg9fJeYYwxyKtvomHMAEAxb3P1xLIvkfmGfYnjKLlUwgc0%2B00N3NHiFxFk98Pp3VmXwWAMOiNuiiBuJsuOYbynGISBua33Eh8A4V1IfPwUgC%2BGNqEG7xRb8%2BeV5uB59AwVACfWiIjFEZmGcqXsIJKf39fuXRCSCfF2mtyso9TxJ9MUQ9cdGgbIMW%2B%2BMGJ9FylIZYsx0KRbXTi5pUoXbvaeZq8eKc3YKykuWbxTttM36znU0E8mmZtogbSDTI3tax26lDy91i18oyoowsKLRvQY6pgEuuzTzb0IpiQ%2B1qLxmcGZujxR3TmbeIFxbSshP%2BtuLSq2GfhuxGXOoO6N6c6gIo%2F8WhFE7e7M0b0sBTZ9rfLDimCqFZe2xu0Z%2BEPhowjbwq%2BjwHfv%2BuOT%2BRjHP2S6EpTilXMYt%2Bd3MoF8Kp7vaXHFYrXhp6faXo2%2Bd%2FVwsGxfd7BWRwxFhlLs2X7EXV2qxbIG2bywz1DeWefQ7sHGGJpsMdzDwfFnp&X-Amz-Signature=e18b5cbd8cdf729222881fb5a8ea6caf797e725cb518bf0c66016c5d411c7989&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAHXJN62%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIHCdoIeng%2BVwhOmrFgPAmEF90tH8pyo5aTmzz0llO1VOAiAWfUNNItLpYZwKxrzkHGi0%2Fr088%2FTKLdJTeSDJ7WXH6iqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUWm8GdkJpR5x7UEHKtwDdQqWQyRIW60FOGSKJs4QDLER0dIUvFAIZuUAzcScCDjiL9AnlFJQFzpIwew94Iu06OZeJH2ll6J557pT80gvLQSHmcYqohBCVJekZXn6L3egDEB7vSvBMochFyrgAAxlJ1od68en4QdmWc%2F2haS3DIA1hYTtrFPL7llniIC3449kmrPqrOf2se4CtI1mbyCNf%2BhzKbSc6T8%2BD%2FE79LTtwBGZTm1%2BF3gpjLjDQb1C%2FWQFOHGDtwc7R7HRmqIfHXhkOxNE0rhRZfj1ESm7PMLOIhDnCwS4FX%2BMW7BkapEngwYNA728BkQTU5JeE4lJgHRslMk45Cy5ioZZIXKmRJcKC%2FnMmGi%2F7ydg0%2BocaoQWCauS4cg9fJeYYwxyKtvomHMAEAxb3P1xLIvkfmGfYnjKLlUwgc0%2B00N3NHiFxFk98Pp3VmXwWAMOiNuiiBuJsuOYbynGISBua33Eh8A4V1IfPwUgC%2BGNqEG7xRb8%2BeV5uB59AwVACfWiIjFEZmGcqXsIJKf39fuXRCSCfF2mtyso9TxJ9MUQ9cdGgbIMW%2B%2BMGJ9FylIZYsx0KRbXTi5pUoXbvaeZq8eKc3YKykuWbxTttM36znU0E8mmZtogbSDTI3tax26lDy91i18oyoowsKLRvQY6pgEuuzTzb0IpiQ%2B1qLxmcGZujxR3TmbeIFxbSshP%2BtuLSq2GfhuxGXOoO6N6c6gIo%2F8WhFE7e7M0b0sBTZ9rfLDimCqFZe2xu0Z%2BEPhowjbwq%2BjwHfv%2BuOT%2BRjHP2S6EpTilXMYt%2Bd3MoF8Kp7vaXHFYrXhp6faXo2%2Bd%2FVwsGxfd7BWRwxFhlLs2X7EXV2qxbIG2bywz1DeWefQ7sHGGJpsMdzDwfFnp&X-Amz-Signature=a8ef06d33f1df087403f8f9776da7d56c8f144624925c221e4708a874f3f87af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

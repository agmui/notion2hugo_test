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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TGAHIHU%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE0d9Eqn2MNNL%2FfKIUaiPjmvV%2FUGUaf3RaMg3yEeZFhgIgYPKvH2WjuqKifFArFA53zbkbCBJ4ffqPWjLRfX4DsGkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGuYWKQctzXcKmEZUCrcA7LYV84cRDlTgS7ypP6diZyo1PyObCBvI027yelJM2dR5wh44nGVGaKG5r7ihKoGcy9cB2BiEoy%2BngiBXDIBWqc3V%2FLvWdsRQud4ncdxtW%2F55oKWFXcbT%2FdmEbBfVRXr6HywygLGdgq0hoWAMWdCBFDdVrcNIWx9IYXnvkiyDPmOh8jN7i4EgnHWBblq9NMoljtqfx6KjTZkDVSnbHSzmWt0La9d4w%2FxHOH8sazy9yY4sj1QGf0NePB3MnSadbRRBqOJ%2BAXz8fE59lTfXw71E6AyEfbL7smbv%2FaVKm3d%2BbYsra8pSuJz36upOlpoUaNuEYSdwNZzeWGhTOqWVbOLZKm6L0hM6rRqO4cq%2F%2FoULJqlg1B0EDf9s50p1YUvzYHU7bn4JWZi9e74Z7SMK5JRuGhqI4mSNWYInXQgtJpIbw%2FOJD7RDBG44vqAVKOUsG81Xal5WHcHc4rU30UkUOpK5v1KBBx9MrvWD7kft7q%2BRUDVi3YnJsOj7LX0b3ziuhAnmuEI%2Fbx7EBMU6Bk9atP0lvezJkJsmt4RuN2d%2BpXqtEtpmcDqCvqsw0mGBVYnJLW1E%2Fw06EjfXALI2kKLq0TKG%2FNhC3DAnIzhrbh5cpdqYpq6AysYdrQJuxtQgif7MJuevsAGOqUBvruLlfXLR5aiBzH7zX9a0hoAo7Jwo4JtgwO3rlOs%2F5u3ABK0FzOWTWaaPutEChulxJ175pMlCjGIWEjWnPO4Q7zSWDLL7ZRjDY5WTy3yc3UuE9Y%2Fz44nh7a0%2Fql7Y6foek0pb6CM2KXwOAPfUXWKDxQhAyOxIpOQtXsN7Xj%2F5MCQWqFhLuEXpRCUDThHhCkrZE8i1pa4hqPEE5FayKU3O503vgdO&X-Amz-Signature=7421ea63ae3179837ec5ce4cc24bbec7c5f93ad392d3a7954cc0c9ecd156e9da&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TGAHIHU%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE0d9Eqn2MNNL%2FfKIUaiPjmvV%2FUGUaf3RaMg3yEeZFhgIgYPKvH2WjuqKifFArFA53zbkbCBJ4ffqPWjLRfX4DsGkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGuYWKQctzXcKmEZUCrcA7LYV84cRDlTgS7ypP6diZyo1PyObCBvI027yelJM2dR5wh44nGVGaKG5r7ihKoGcy9cB2BiEoy%2BngiBXDIBWqc3V%2FLvWdsRQud4ncdxtW%2F55oKWFXcbT%2FdmEbBfVRXr6HywygLGdgq0hoWAMWdCBFDdVrcNIWx9IYXnvkiyDPmOh8jN7i4EgnHWBblq9NMoljtqfx6KjTZkDVSnbHSzmWt0La9d4w%2FxHOH8sazy9yY4sj1QGf0NePB3MnSadbRRBqOJ%2BAXz8fE59lTfXw71E6AyEfbL7smbv%2FaVKm3d%2BbYsra8pSuJz36upOlpoUaNuEYSdwNZzeWGhTOqWVbOLZKm6L0hM6rRqO4cq%2F%2FoULJqlg1B0EDf9s50p1YUvzYHU7bn4JWZi9e74Z7SMK5JRuGhqI4mSNWYInXQgtJpIbw%2FOJD7RDBG44vqAVKOUsG81Xal5WHcHc4rU30UkUOpK5v1KBBx9MrvWD7kft7q%2BRUDVi3YnJsOj7LX0b3ziuhAnmuEI%2Fbx7EBMU6Bk9atP0lvezJkJsmt4RuN2d%2BpXqtEtpmcDqCvqsw0mGBVYnJLW1E%2Fw06EjfXALI2kKLq0TKG%2FNhC3DAnIzhrbh5cpdqYpq6AysYdrQJuxtQgif7MJuevsAGOqUBvruLlfXLR5aiBzH7zX9a0hoAo7Jwo4JtgwO3rlOs%2F5u3ABK0FzOWTWaaPutEChulxJ175pMlCjGIWEjWnPO4Q7zSWDLL7ZRjDY5WTy3yc3UuE9Y%2Fz44nh7a0%2Fql7Y6foek0pb6CM2KXwOAPfUXWKDxQhAyOxIpOQtXsN7Xj%2F5MCQWqFhLuEXpRCUDThHhCkrZE8i1pa4hqPEE5FayKU3O503vgdO&X-Amz-Signature=991d0ace851d8be457296ee6b4571bf8b0243b8799aef387bfb914ddfb092914&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TGAHIHU%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T150911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE0d9Eqn2MNNL%2FfKIUaiPjmvV%2FUGUaf3RaMg3yEeZFhgIgYPKvH2WjuqKifFArFA53zbkbCBJ4ffqPWjLRfX4DsGkq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGuYWKQctzXcKmEZUCrcA7LYV84cRDlTgS7ypP6diZyo1PyObCBvI027yelJM2dR5wh44nGVGaKG5r7ihKoGcy9cB2BiEoy%2BngiBXDIBWqc3V%2FLvWdsRQud4ncdxtW%2F55oKWFXcbT%2FdmEbBfVRXr6HywygLGdgq0hoWAMWdCBFDdVrcNIWx9IYXnvkiyDPmOh8jN7i4EgnHWBblq9NMoljtqfx6KjTZkDVSnbHSzmWt0La9d4w%2FxHOH8sazy9yY4sj1QGf0NePB3MnSadbRRBqOJ%2BAXz8fE59lTfXw71E6AyEfbL7smbv%2FaVKm3d%2BbYsra8pSuJz36upOlpoUaNuEYSdwNZzeWGhTOqWVbOLZKm6L0hM6rRqO4cq%2F%2FoULJqlg1B0EDf9s50p1YUvzYHU7bn4JWZi9e74Z7SMK5JRuGhqI4mSNWYInXQgtJpIbw%2FOJD7RDBG44vqAVKOUsG81Xal5WHcHc4rU30UkUOpK5v1KBBx9MrvWD7kft7q%2BRUDVi3YnJsOj7LX0b3ziuhAnmuEI%2Fbx7EBMU6Bk9atP0lvezJkJsmt4RuN2d%2BpXqtEtpmcDqCvqsw0mGBVYnJLW1E%2Fw06EjfXALI2kKLq0TKG%2FNhC3DAnIzhrbh5cpdqYpq6AysYdrQJuxtQgif7MJuevsAGOqUBvruLlfXLR5aiBzH7zX9a0hoAo7Jwo4JtgwO3rlOs%2F5u3ABK0FzOWTWaaPutEChulxJ175pMlCjGIWEjWnPO4Q7zSWDLL7ZRjDY5WTy3yc3UuE9Y%2Fz44nh7a0%2Fql7Y6foek0pb6CM2KXwOAPfUXWKDxQhAyOxIpOQtXsN7Xj%2F5MCQWqFhLuEXpRCUDThHhCkrZE8i1pa4hqPEE5FayKU3O503vgdO&X-Amz-Signature=7323390ea062b3962f404621798b42e6fddeb2a286c4b192940a04948ffd1218&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

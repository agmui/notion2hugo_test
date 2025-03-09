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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCDKA6Z%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCCpm8TC9ed7KGO9weRpTqGWLaP9MheeN196ldesOvVewIgfYr3V%2FfMN%2Fj5HUKAC8EXbf7xed4C9Ena7Z5Gi388TdYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAGlx02cme9WtmnO8ircAzxQ%2BX4qT7Dm32oRMfeFxBXG4rhqO%2BB1DFFGeZ7OFub8e4AhUIP8IU%2FbZaNgQ6lYEvzR9EiSg%2FNxu2TyNzPiMTpiPjDk2mfKah%2BvYAT2fBMnjxiuaOniuIIL5E9nOF9awBgqSYnQ8OFCokdpXuFVRdUAEx0ePaENdAQpqRmhfxbO5M%2FFtEGLPDsSVUZ758xqCiQmbvT3TWn9G5wRq89KVzQbOhPwtJLbZ3qCxSSoDqWBk0jfDLZV6DUaNZ5dpVC2r3e1rxY%2FCU4EEptXQ7S%2BbSowPxorC0IAbB41U5LnkYfk3hQ1xRjtt4pekcqIWtO2HR81Xk3tv1LETiDozYk4c7sd7qXuP%2Fvd3D%2Fl%2BhTmDCSmKngVPoWF1SCit5T%2FLych3t4rEXOfSs4lY9DmOpKc7o0gxhGnRSqkApJ5xDTGY81RpFIWwWvgOsh5xtCB5lnA1PBlGCpK2nMo1WQFAHC%2BRN%2Fgo%2FfkEj2oH8X0FW6TgU5sDvCFgx9%2Bz%2BVLtaxI0NWbK1ecUNd6iWI2ufGMZYwCe%2FAhcNawleUoaGIljv8A2cf28AKH2G8Uwvu3Xl82rJ7176lr%2F3fJnNjobCdhg6JjGA9V12rLjagM7U6QKHLMtmY3ubYwPwBWjcd0d51mMLHrtL4GOqUBU%2BTveF1oRTwI%2BGKnjUcv7asKC7ZzBDRmYd3VIRsX4RnnN11Caov1So2zxjpUDtmk6RIHQd2eXuEpNn7SajJonru0UWCc7G7ZRjMowd2w6cbLKmgFjM8d7UDhigl2mrI9zPcwfc60gjBcU9jxApGpxLAfhrlhFSEH6znaQqihlv79pqINYfNFwkl25x2N5LNyCF8lH9Licxji4ZZP0K6%2B4%2Bh9BhLK&X-Amz-Signature=7298f5480410c16548e07e1344082dd8073a22fd252430b6d5ad2985ccea2d46&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCDKA6Z%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCCpm8TC9ed7KGO9weRpTqGWLaP9MheeN196ldesOvVewIgfYr3V%2FfMN%2Fj5HUKAC8EXbf7xed4C9Ena7Z5Gi388TdYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAGlx02cme9WtmnO8ircAzxQ%2BX4qT7Dm32oRMfeFxBXG4rhqO%2BB1DFFGeZ7OFub8e4AhUIP8IU%2FbZaNgQ6lYEvzR9EiSg%2FNxu2TyNzPiMTpiPjDk2mfKah%2BvYAT2fBMnjxiuaOniuIIL5E9nOF9awBgqSYnQ8OFCokdpXuFVRdUAEx0ePaENdAQpqRmhfxbO5M%2FFtEGLPDsSVUZ758xqCiQmbvT3TWn9G5wRq89KVzQbOhPwtJLbZ3qCxSSoDqWBk0jfDLZV6DUaNZ5dpVC2r3e1rxY%2FCU4EEptXQ7S%2BbSowPxorC0IAbB41U5LnkYfk3hQ1xRjtt4pekcqIWtO2HR81Xk3tv1LETiDozYk4c7sd7qXuP%2Fvd3D%2Fl%2BhTmDCSmKngVPoWF1SCit5T%2FLych3t4rEXOfSs4lY9DmOpKc7o0gxhGnRSqkApJ5xDTGY81RpFIWwWvgOsh5xtCB5lnA1PBlGCpK2nMo1WQFAHC%2BRN%2Fgo%2FfkEj2oH8X0FW6TgU5sDvCFgx9%2Bz%2BVLtaxI0NWbK1ecUNd6iWI2ufGMZYwCe%2FAhcNawleUoaGIljv8A2cf28AKH2G8Uwvu3Xl82rJ7176lr%2F3fJnNjobCdhg6JjGA9V12rLjagM7U6QKHLMtmY3ubYwPwBWjcd0d51mMLHrtL4GOqUBU%2BTveF1oRTwI%2BGKnjUcv7asKC7ZzBDRmYd3VIRsX4RnnN11Caov1So2zxjpUDtmk6RIHQd2eXuEpNn7SajJonru0UWCc7G7ZRjMowd2w6cbLKmgFjM8d7UDhigl2mrI9zPcwfc60gjBcU9jxApGpxLAfhrlhFSEH6znaQqihlv79pqINYfNFwkl25x2N5LNyCF8lH9Licxji4ZZP0K6%2B4%2Bh9BhLK&X-Amz-Signature=3ef9ca94d38a3f975c5471b117292880cd81ac8ab8c57da857ba1257d0e9f03c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCDKA6Z%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCCpm8TC9ed7KGO9weRpTqGWLaP9MheeN196ldesOvVewIgfYr3V%2FfMN%2Fj5HUKAC8EXbf7xed4C9Ena7Z5Gi388TdYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAGlx02cme9WtmnO8ircAzxQ%2BX4qT7Dm32oRMfeFxBXG4rhqO%2BB1DFFGeZ7OFub8e4AhUIP8IU%2FbZaNgQ6lYEvzR9EiSg%2FNxu2TyNzPiMTpiPjDk2mfKah%2BvYAT2fBMnjxiuaOniuIIL5E9nOF9awBgqSYnQ8OFCokdpXuFVRdUAEx0ePaENdAQpqRmhfxbO5M%2FFtEGLPDsSVUZ758xqCiQmbvT3TWn9G5wRq89KVzQbOhPwtJLbZ3qCxSSoDqWBk0jfDLZV6DUaNZ5dpVC2r3e1rxY%2FCU4EEptXQ7S%2BbSowPxorC0IAbB41U5LnkYfk3hQ1xRjtt4pekcqIWtO2HR81Xk3tv1LETiDozYk4c7sd7qXuP%2Fvd3D%2Fl%2BhTmDCSmKngVPoWF1SCit5T%2FLych3t4rEXOfSs4lY9DmOpKc7o0gxhGnRSqkApJ5xDTGY81RpFIWwWvgOsh5xtCB5lnA1PBlGCpK2nMo1WQFAHC%2BRN%2Fgo%2FfkEj2oH8X0FW6TgU5sDvCFgx9%2Bz%2BVLtaxI0NWbK1ecUNd6iWI2ufGMZYwCe%2FAhcNawleUoaGIljv8A2cf28AKH2G8Uwvu3Xl82rJ7176lr%2F3fJnNjobCdhg6JjGA9V12rLjagM7U6QKHLMtmY3ubYwPwBWjcd0d51mMLHrtL4GOqUBU%2BTveF1oRTwI%2BGKnjUcv7asKC7ZzBDRmYd3VIRsX4RnnN11Caov1So2zxjpUDtmk6RIHQd2eXuEpNn7SajJonru0UWCc7G7ZRjMowd2w6cbLKmgFjM8d7UDhigl2mrI9zPcwfc60gjBcU9jxApGpxLAfhrlhFSEH6znaQqihlv79pqINYfNFwkl25x2N5LNyCF8lH9Licxji4ZZP0K6%2B4%2Bh9BhLK&X-Amz-Signature=f57e1a0dc91875b52d02ea660c20057f0695a56b7aabcdefa76c39383a5e0390&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

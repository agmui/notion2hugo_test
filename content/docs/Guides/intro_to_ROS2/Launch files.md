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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY3XRTBB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDG1E2%2BjZa4h1uxAM%2F%2FiNdOGK%2BAo5vDCcM9noqmXu4deAIgOL6moT6Bl%2Fn8ebsHKmL28zamfYxgIUNdZPXWo2tZZrYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDD75%2Fnzus97Ofa%2FUwCrcAxiQifDcDAT7sQnTXsqljuqc%2BQ2AR%2FVHrdBQmUWnvYwYHiL1edohNCIjBd8E%2BkUT3xat1S6qBJJKoXWtJPKaDxZKcZ3D8MyEjdOEk32qrOA4yieCC%2B7iizZPJ0i0XYgUAg0B1CZMfcQ433uO8d1lsnyzF9Q0rNHAZmkyWrRroetwh3Gc5AkqLGI40wVj%2Fi0Q%2FT2X4bmOEXU%2BAHIbZFLveUGeKYLM%2Fwy3SeZVbElDttWuUAvHKGm8wl8GEDAvRLa85SkcSPYa0qhsPXCVmy4Rp3G4JK4tY4JeljMijzj8YSSVNz8VnZy88MMv4%2F%2BYDqBLWckdUA0bXeOTN4mW2YnO0sNnvbqXsuMO%2Fwwgcc%2FxpAsA9B4Z3dP6mhcJe6FQ6SqB3DqPH4NoxxLQvTfvpAjNenFrD%2FC2jDTZ5WBC%2FtMhN6y1XrUfOv11YUsvZmZbNshtq110Kn3w1dDyZXr9VUjK9%2B7m8TDpHwg%2BqWHOEycCl5cXpWTqmxSuiqb2c4kbfGtrkqozm4qYwJH07uqfkQQfgAbBMcVRgSnWkNtv2qSaUR9%2Bpu8hkUz9JFz8uHZJj85vvtYXuqlpTYqhkyKBtaXnOkqh%2FQpSG07pbR6xd1oczACeobMBD487IIXnnhIMMLDMt8IGOqUBUhU4pFSK3MUm8B38yWq2ajUmnhjt6p1NZU3RtmIobAccRR3Uwyq%2F6j2eWuVRiUVQuv9LI29os9x1yVAQxCzYNLlsV12qeOv5wRhrUnONGDuU4Qz8eLRwBaGH9QpGXokbDCCoDArmM0Mv%2BLJUNKpdvqmYActWYKBNjd65tqTF%2Fm8yRNKkojWTNNw%2FPlYNKmzeWXn3AvG9DF0HX1XjV0I76hKmu0uH&X-Amz-Signature=1a5c45ddff49171cec030613ee74d1a700d019c1f769cfb344d76767ded8bea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY3XRTBB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDG1E2%2BjZa4h1uxAM%2F%2FiNdOGK%2BAo5vDCcM9noqmXu4deAIgOL6moT6Bl%2Fn8ebsHKmL28zamfYxgIUNdZPXWo2tZZrYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDD75%2Fnzus97Ofa%2FUwCrcAxiQifDcDAT7sQnTXsqljuqc%2BQ2AR%2FVHrdBQmUWnvYwYHiL1edohNCIjBd8E%2BkUT3xat1S6qBJJKoXWtJPKaDxZKcZ3D8MyEjdOEk32qrOA4yieCC%2B7iizZPJ0i0XYgUAg0B1CZMfcQ433uO8d1lsnyzF9Q0rNHAZmkyWrRroetwh3Gc5AkqLGI40wVj%2Fi0Q%2FT2X4bmOEXU%2BAHIbZFLveUGeKYLM%2Fwy3SeZVbElDttWuUAvHKGm8wl8GEDAvRLa85SkcSPYa0qhsPXCVmy4Rp3G4JK4tY4JeljMijzj8YSSVNz8VnZy88MMv4%2F%2BYDqBLWckdUA0bXeOTN4mW2YnO0sNnvbqXsuMO%2Fwwgcc%2FxpAsA9B4Z3dP6mhcJe6FQ6SqB3DqPH4NoxxLQvTfvpAjNenFrD%2FC2jDTZ5WBC%2FtMhN6y1XrUfOv11YUsvZmZbNshtq110Kn3w1dDyZXr9VUjK9%2B7m8TDpHwg%2BqWHOEycCl5cXpWTqmxSuiqb2c4kbfGtrkqozm4qYwJH07uqfkQQfgAbBMcVRgSnWkNtv2qSaUR9%2Bpu8hkUz9JFz8uHZJj85vvtYXuqlpTYqhkyKBtaXnOkqh%2FQpSG07pbR6xd1oczACeobMBD487IIXnnhIMMLDMt8IGOqUBUhU4pFSK3MUm8B38yWq2ajUmnhjt6p1NZU3RtmIobAccRR3Uwyq%2F6j2eWuVRiUVQuv9LI29os9x1yVAQxCzYNLlsV12qeOv5wRhrUnONGDuU4Qz8eLRwBaGH9QpGXokbDCCoDArmM0Mv%2BLJUNKpdvqmYActWYKBNjd65tqTF%2Fm8yRNKkojWTNNw%2FPlYNKmzeWXn3AvG9DF0HX1XjV0I76hKmu0uH&X-Amz-Signature=371ad338180ccb7d92c308bbd95f70ce58e35afa9cf16a4e461cdcc81d9e47c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY3XRTBB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDG1E2%2BjZa4h1uxAM%2F%2FiNdOGK%2BAo5vDCcM9noqmXu4deAIgOL6moT6Bl%2Fn8ebsHKmL28zamfYxgIUNdZPXWo2tZZrYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDD75%2Fnzus97Ofa%2FUwCrcAxiQifDcDAT7sQnTXsqljuqc%2BQ2AR%2FVHrdBQmUWnvYwYHiL1edohNCIjBd8E%2BkUT3xat1S6qBJJKoXWtJPKaDxZKcZ3D8MyEjdOEk32qrOA4yieCC%2B7iizZPJ0i0XYgUAg0B1CZMfcQ433uO8d1lsnyzF9Q0rNHAZmkyWrRroetwh3Gc5AkqLGI40wVj%2Fi0Q%2FT2X4bmOEXU%2BAHIbZFLveUGeKYLM%2Fwy3SeZVbElDttWuUAvHKGm8wl8GEDAvRLa85SkcSPYa0qhsPXCVmy4Rp3G4JK4tY4JeljMijzj8YSSVNz8VnZy88MMv4%2F%2BYDqBLWckdUA0bXeOTN4mW2YnO0sNnvbqXsuMO%2Fwwgcc%2FxpAsA9B4Z3dP6mhcJe6FQ6SqB3DqPH4NoxxLQvTfvpAjNenFrD%2FC2jDTZ5WBC%2FtMhN6y1XrUfOv11YUsvZmZbNshtq110Kn3w1dDyZXr9VUjK9%2B7m8TDpHwg%2BqWHOEycCl5cXpWTqmxSuiqb2c4kbfGtrkqozm4qYwJH07uqfkQQfgAbBMcVRgSnWkNtv2qSaUR9%2Bpu8hkUz9JFz8uHZJj85vvtYXuqlpTYqhkyKBtaXnOkqh%2FQpSG07pbR6xd1oczACeobMBD487IIXnnhIMMLDMt8IGOqUBUhU4pFSK3MUm8B38yWq2ajUmnhjt6p1NZU3RtmIobAccRR3Uwyq%2F6j2eWuVRiUVQuv9LI29os9x1yVAQxCzYNLlsV12qeOv5wRhrUnONGDuU4Qz8eLRwBaGH9QpGXokbDCCoDArmM0Mv%2BLJUNKpdvqmYActWYKBNjd65tqTF%2Fm8yRNKkojWTNNw%2FPlYNKmzeWXn3AvG9DF0HX1XjV0I76hKmu0uH&X-Amz-Signature=0738135c183423648396343e0590207f9ac5213146e2613fe4d9c5515599bfca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

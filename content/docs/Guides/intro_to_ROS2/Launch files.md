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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPSWTX2%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyyDmY73lwAeZlE%2F8EVeO1rNnrGDopEJtAbEtz5ohAXAIgfT7MhPxNo0jqhTthcuB7APZTRnghQHmSVpbqpb053N8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA%2BU6yIa448%2BkaRsSrcA6bj8xyPXft%2BPtWrqpRjQsnyB2m7cQGrjKeqetNIVa5m52x3plTJzwVnpPhshZn2W9PQj4gMEgeenzGU8Ap0ZKmW9JA9B1M8WplMazuVKMFIlSqAHGeqhxm7d2aNBv21nhnX3TKebPsEF8RZpr8qFIANP0fEUJXhWeCxEs%2B8yQBlEOqIxpW8EeF5q%2F4mq%2BgVBhknp5BVjMpa6nxwni%2FklAh77KzvwhbNP9LuvDtpm2hBpltC4HbbeYf1Wq6C%2BBf02NEA3Njc4XZFrCpdHf6jZK5g0j864YIB055ySCg1EFZNvoSObPs1kf5b3Xng6uuOqTCdtfyumAsm7JR2QxJqz3JHxFcbfkKufUcc8BfgNFvl8mDPDpifOkeiUOfA2lTkhv2lMEjNKNstb8AbI75hiKJbSuRc2vEfLidL0AdZLUJmqZII0b7PtyMdMsqN9SPNbmcVQKhlOQVQTfIGLbU4kcvWloEtuE8avE%2FY4enXHmQZUatam5szlVzEDIf65KUIsdqS43aE8eN9np1GWk%2FLkDwHqNRHsEV6bXbTHlhnTozy7fHaGymZ7rCd1bgn1MXsMFqPpjR8aDXV7LOB2DOaA1Ofn5fqgptcSd%2F1UKkQGUhfPxSkWnlNQ1kdMv9qMNSr%2BcAGOqUBfw4EtMaITrTKMpU%2FHZiWMh0fnzBx7luB%2F495PJfx260gZYtLMDgJVLZH0IyyR%2BEipuL9dSeP%2FPHPboHJHI%2F%2FXazE1yC94GIYLJXbvyhklbyPwOOZs25TMN6%2Bb2D2pNb2F3LiObFPaI8ByR0Kjlkh7nYUTejTahTAK3jufYwE%2BQak1i%2BhUG1t35bdlArsBW0%2F3VDT0x2DpKn0PDppIDMW8XnSEhJY&X-Amz-Signature=1c139d3207c5fac6c0aacfe540ccd77bae5403f518c3e9abadf7dc8809b5613b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPSWTX2%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyyDmY73lwAeZlE%2F8EVeO1rNnrGDopEJtAbEtz5ohAXAIgfT7MhPxNo0jqhTthcuB7APZTRnghQHmSVpbqpb053N8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA%2BU6yIa448%2BkaRsSrcA6bj8xyPXft%2BPtWrqpRjQsnyB2m7cQGrjKeqetNIVa5m52x3plTJzwVnpPhshZn2W9PQj4gMEgeenzGU8Ap0ZKmW9JA9B1M8WplMazuVKMFIlSqAHGeqhxm7d2aNBv21nhnX3TKebPsEF8RZpr8qFIANP0fEUJXhWeCxEs%2B8yQBlEOqIxpW8EeF5q%2F4mq%2BgVBhknp5BVjMpa6nxwni%2FklAh77KzvwhbNP9LuvDtpm2hBpltC4HbbeYf1Wq6C%2BBf02NEA3Njc4XZFrCpdHf6jZK5g0j864YIB055ySCg1EFZNvoSObPs1kf5b3Xng6uuOqTCdtfyumAsm7JR2QxJqz3JHxFcbfkKufUcc8BfgNFvl8mDPDpifOkeiUOfA2lTkhv2lMEjNKNstb8AbI75hiKJbSuRc2vEfLidL0AdZLUJmqZII0b7PtyMdMsqN9SPNbmcVQKhlOQVQTfIGLbU4kcvWloEtuE8avE%2FY4enXHmQZUatam5szlVzEDIf65KUIsdqS43aE8eN9np1GWk%2FLkDwHqNRHsEV6bXbTHlhnTozy7fHaGymZ7rCd1bgn1MXsMFqPpjR8aDXV7LOB2DOaA1Ofn5fqgptcSd%2F1UKkQGUhfPxSkWnlNQ1kdMv9qMNSr%2BcAGOqUBfw4EtMaITrTKMpU%2FHZiWMh0fnzBx7luB%2F495PJfx260gZYtLMDgJVLZH0IyyR%2BEipuL9dSeP%2FPHPboHJHI%2F%2FXazE1yC94GIYLJXbvyhklbyPwOOZs25TMN6%2Bb2D2pNb2F3LiObFPaI8ByR0Kjlkh7nYUTejTahTAK3jufYwE%2BQak1i%2BhUG1t35bdlArsBW0%2F3VDT0x2DpKn0PDppIDMW8XnSEhJY&X-Amz-Signature=1fca6512ff42ea3a7aa28dea06f873d535c240b701caecefb06a4514e4a5e4e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTPSWTX2%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T201008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyyDmY73lwAeZlE%2F8EVeO1rNnrGDopEJtAbEtz5ohAXAIgfT7MhPxNo0jqhTthcuB7APZTRnghQHmSVpbqpb053N8qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKA%2BU6yIa448%2BkaRsSrcA6bj8xyPXft%2BPtWrqpRjQsnyB2m7cQGrjKeqetNIVa5m52x3plTJzwVnpPhshZn2W9PQj4gMEgeenzGU8Ap0ZKmW9JA9B1M8WplMazuVKMFIlSqAHGeqhxm7d2aNBv21nhnX3TKebPsEF8RZpr8qFIANP0fEUJXhWeCxEs%2B8yQBlEOqIxpW8EeF5q%2F4mq%2BgVBhknp5BVjMpa6nxwni%2FklAh77KzvwhbNP9LuvDtpm2hBpltC4HbbeYf1Wq6C%2BBf02NEA3Njc4XZFrCpdHf6jZK5g0j864YIB055ySCg1EFZNvoSObPs1kf5b3Xng6uuOqTCdtfyumAsm7JR2QxJqz3JHxFcbfkKufUcc8BfgNFvl8mDPDpifOkeiUOfA2lTkhv2lMEjNKNstb8AbI75hiKJbSuRc2vEfLidL0AdZLUJmqZII0b7PtyMdMsqN9SPNbmcVQKhlOQVQTfIGLbU4kcvWloEtuE8avE%2FY4enXHmQZUatam5szlVzEDIf65KUIsdqS43aE8eN9np1GWk%2FLkDwHqNRHsEV6bXbTHlhnTozy7fHaGymZ7rCd1bgn1MXsMFqPpjR8aDXV7LOB2DOaA1Ofn5fqgptcSd%2F1UKkQGUhfPxSkWnlNQ1kdMv9qMNSr%2BcAGOqUBfw4EtMaITrTKMpU%2FHZiWMh0fnzBx7luB%2F495PJfx260gZYtLMDgJVLZH0IyyR%2BEipuL9dSeP%2FPHPboHJHI%2F%2FXazE1yC94GIYLJXbvyhklbyPwOOZs25TMN6%2Bb2D2pNb2F3LiObFPaI8ByR0Kjlkh7nYUTejTahTAK3jufYwE%2BQak1i%2BhUG1t35bdlArsBW0%2F3VDT0x2DpKn0PDppIDMW8XnSEhJY&X-Amz-Signature=22c7e8652e1503721078a3d79add23e1156d25ac412c028febc93eb49de61972&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

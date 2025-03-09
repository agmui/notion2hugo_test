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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7VPKWW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDUGFzDD%2FIh%2B4Uxv0bRA5DANXcZK1L%2FJ%2FMnr7T8E85CjAIgeTxSSqUHkhi%2Fq9q0uO3ocqMNG3QiNJ%2B4wQ4VXUID85gq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFdCdUpm%2F6WKu8KdGircA4ZPUGSffxmEA5VGBOWAlB0kEHE4ylQbrw5ceZn06ciuWaJtCohRCDQcNeJMoOKnZ%2BSeaeIl1XnHEvGAHB8Xxm940xfZcD3Ki%2FtZJbB6B7xbz0RpvSsO19ZWYcjnWFO9z8OC7XK1Go4flxEFKIYfdsXYWmYN1uweRb%2Fafx7TZW3e8kibxS9Cw7sc6w6rCgSPVRTnfR6VqQmgN0FgNOgokPQ0FK7B3HNQrRnTItlFRe4surQSS2CU13pBiuLE7WZ8mZmVwlecI%2F56zurVImoltiHtInv38K8%2FMAvE%2B1z6QP%2BrOneVutM0bp75vl%2FPT0A0boAEFreGLAd7Trli6v7bZ%2Fvy9nDCDCbHxNeOcuQLeXYiIv32sLCZuh%2FwhqlWRwOtSDEla%2Fi%2BbFplMOw5%2BXrv6ZaBb7UOikMZssxhIX5Wa7aCKD17eMlz3gRBlzlq9X9vH71BEfDk2AD%2BZvTp84r39HhKlQrzMn%2Fv7ldmBq%2BtrDOhSO%2FukCbUOsKEgwC4RnYo%2F7b9i4H0MjdUpDsIm6UZlqWEL99QygY9WhxZWy5HDvjn3qOST2DeOMNl5r0ZElar5BivH1y48UtJxJObxp1eKtFqFG5MJUGV4H4ylqT5lxsQNjEiGQ210MGImn60MMOMtr4GOqUBOJ42LduW%2FQN0A2ADszDyh7INGCVxpx8yGfUiX3n94X1dOABoeCAcQoLfRbdog%2BlnVYpKg5NKw7C9BNdNPNnx8N2A79rd07%2F4TYZD%2FdWg4L02bRHLq8iY9jXiSFUl7pgDXVqrYLzgzMlf5YhrvGrqj3S4hIVeJc4Hj8sh7jIGmSGTPyRzsdY%2F2l6ZRzC5PfI1%2F3tVSS%2B1sH8DEmi3463UfaGtaMxk&X-Amz-Signature=7fe9b1b49c7f736ad78609171b6cdfa0145abf850a94fc82faf1d5aec535becd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7VPKWW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDUGFzDD%2FIh%2B4Uxv0bRA5DANXcZK1L%2FJ%2FMnr7T8E85CjAIgeTxSSqUHkhi%2Fq9q0uO3ocqMNG3QiNJ%2B4wQ4VXUID85gq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFdCdUpm%2F6WKu8KdGircA4ZPUGSffxmEA5VGBOWAlB0kEHE4ylQbrw5ceZn06ciuWaJtCohRCDQcNeJMoOKnZ%2BSeaeIl1XnHEvGAHB8Xxm940xfZcD3Ki%2FtZJbB6B7xbz0RpvSsO19ZWYcjnWFO9z8OC7XK1Go4flxEFKIYfdsXYWmYN1uweRb%2Fafx7TZW3e8kibxS9Cw7sc6w6rCgSPVRTnfR6VqQmgN0FgNOgokPQ0FK7B3HNQrRnTItlFRe4surQSS2CU13pBiuLE7WZ8mZmVwlecI%2F56zurVImoltiHtInv38K8%2FMAvE%2B1z6QP%2BrOneVutM0bp75vl%2FPT0A0boAEFreGLAd7Trli6v7bZ%2Fvy9nDCDCbHxNeOcuQLeXYiIv32sLCZuh%2FwhqlWRwOtSDEla%2Fi%2BbFplMOw5%2BXrv6ZaBb7UOikMZssxhIX5Wa7aCKD17eMlz3gRBlzlq9X9vH71BEfDk2AD%2BZvTp84r39HhKlQrzMn%2Fv7ldmBq%2BtrDOhSO%2FukCbUOsKEgwC4RnYo%2F7b9i4H0MjdUpDsIm6UZlqWEL99QygY9WhxZWy5HDvjn3qOST2DeOMNl5r0ZElar5BivH1y48UtJxJObxp1eKtFqFG5MJUGV4H4ylqT5lxsQNjEiGQ210MGImn60MMOMtr4GOqUBOJ42LduW%2FQN0A2ADszDyh7INGCVxpx8yGfUiX3n94X1dOABoeCAcQoLfRbdog%2BlnVYpKg5NKw7C9BNdNPNnx8N2A79rd07%2F4TYZD%2FdWg4L02bRHLq8iY9jXiSFUl7pgDXVqrYLzgzMlf5YhrvGrqj3S4hIVeJc4Hj8sh7jIGmSGTPyRzsdY%2F2l6ZRzC5PfI1%2F3tVSS%2B1sH8DEmi3463UfaGtaMxk&X-Amz-Signature=63a35800e89f7aa78b41193df921ca2e24492160d9b1f1da0126f792ab64ae73&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7VPKWW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T130215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDUGFzDD%2FIh%2B4Uxv0bRA5DANXcZK1L%2FJ%2FMnr7T8E85CjAIgeTxSSqUHkhi%2Fq9q0uO3ocqMNG3QiNJ%2B4wQ4VXUID85gq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFdCdUpm%2F6WKu8KdGircA4ZPUGSffxmEA5VGBOWAlB0kEHE4ylQbrw5ceZn06ciuWaJtCohRCDQcNeJMoOKnZ%2BSeaeIl1XnHEvGAHB8Xxm940xfZcD3Ki%2FtZJbB6B7xbz0RpvSsO19ZWYcjnWFO9z8OC7XK1Go4flxEFKIYfdsXYWmYN1uweRb%2Fafx7TZW3e8kibxS9Cw7sc6w6rCgSPVRTnfR6VqQmgN0FgNOgokPQ0FK7B3HNQrRnTItlFRe4surQSS2CU13pBiuLE7WZ8mZmVwlecI%2F56zurVImoltiHtInv38K8%2FMAvE%2B1z6QP%2BrOneVutM0bp75vl%2FPT0A0boAEFreGLAd7Trli6v7bZ%2Fvy9nDCDCbHxNeOcuQLeXYiIv32sLCZuh%2FwhqlWRwOtSDEla%2Fi%2BbFplMOw5%2BXrv6ZaBb7UOikMZssxhIX5Wa7aCKD17eMlz3gRBlzlq9X9vH71BEfDk2AD%2BZvTp84r39HhKlQrzMn%2Fv7ldmBq%2BtrDOhSO%2FukCbUOsKEgwC4RnYo%2F7b9i4H0MjdUpDsIm6UZlqWEL99QygY9WhxZWy5HDvjn3qOST2DeOMNl5r0ZElar5BivH1y48UtJxJObxp1eKtFqFG5MJUGV4H4ylqT5lxsQNjEiGQ210MGImn60MMOMtr4GOqUBOJ42LduW%2FQN0A2ADszDyh7INGCVxpx8yGfUiX3n94X1dOABoeCAcQoLfRbdog%2BlnVYpKg5NKw7C9BNdNPNnx8N2A79rd07%2F4TYZD%2FdWg4L02bRHLq8iY9jXiSFUl7pgDXVqrYLzgzMlf5YhrvGrqj3S4hIVeJc4Hj8sh7jIGmSGTPyRzsdY%2F2l6ZRzC5PfI1%2F3tVSS%2B1sH8DEmi3463UfaGtaMxk&X-Amz-Signature=8f214058596e336a04d806e0dd23071135b08e437054a72229f22aaa0e4fcd5a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

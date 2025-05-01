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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULN2TY6S%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEYoLdWVHdxayt3m05uhe%2FC5wIhg2LWM6a5bHekMTSt6AiAo0JDHxcbdhetH5YnFfcBO%2BsVgkFHs3sTs82ozUjMiCyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI10cOXb7hZMw%2ByoIKtwDGXkhlYDaUDxpOjWbokKZSRumtKdr4T0PEeu%2FxA4Ase7fvJvyAukZItcsAY6RM9eOhyCej1kWGZoAGKTpXFl0XtUoSlBGqZYXBpSNjJvM3YIXGBP3sTqi0vSn1hbSGQkfg9NEnfujSM%2BmgFGbSvx66KOCrOi%2BXb%2Fw8UO81zdHdQ8VOdRcOl55DCVdElOkZbLD9pIqC8M0yN8qRdKIdTzCGHoxp8CbMlBcNRsvosbY%2BG5MHHrx1Z0HJNt8nXO6%2FdSYHiLWr4jEKuQs2FQEMpQJ9hjF3wwiw3jeKZUaQs1JcWh%2FXBX8Fg659PIvi68d%2FXoBBpQujAVjj3WCc%2BSRVJe46l7nlHKYf5a5VPl6oe3eUDbAH%2F8v0345dGAE94XF2tIvu0sU%2FVXOdsKypIEVKW2HEfQAzzPRhfy8wIntOqVU5JNYIYtKaN6caUSlX5%2BcuxicYpHcZIb32R8JOO71OCoDK1SWOl5MEQcIXkbOa3UwzGwy%2FHDoDmeiJQ%2BcW3odCUu7Um4yEEWul6uPe683Q2Z3KFbpOAGzijWtAD4g%2BXO%2F7Gtt3MNhfipFFD4G1Y3l1lkm9tuIoEWYDFRvtZCJviTdAC2NJv8SBiFm%2FkQkBrUfDVaO0sHpmtS9BycEliQw1fXLwAY6pgHWzL7tvMXmf9Mq8yKmcCQVxaAEhtJrr3B1UIERFxWcIMzEVZ6GLk%2FzuVXc%2FJpIAY3ZR92J5ciHsvT4vE4SIaHCQWbt%2FUqi3wEnq9I9hbQhvJS23SZnqbBOx7sb%2BTcuTqq6vvlbHQNHAUeYgeh8RzDNVIqUytDMbso75fVdfPIJ%2Fx%2BTlKto3iPgGtaq0sYkuyTgbQPHvfi0UUJjpNHbPGM722ZT2zgU&X-Amz-Signature=625ae21fc10e7bda75659baf20e7be8298786551887447f573f194bd0fe58a2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULN2TY6S%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEYoLdWVHdxayt3m05uhe%2FC5wIhg2LWM6a5bHekMTSt6AiAo0JDHxcbdhetH5YnFfcBO%2BsVgkFHs3sTs82ozUjMiCyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI10cOXb7hZMw%2ByoIKtwDGXkhlYDaUDxpOjWbokKZSRumtKdr4T0PEeu%2FxA4Ase7fvJvyAukZItcsAY6RM9eOhyCej1kWGZoAGKTpXFl0XtUoSlBGqZYXBpSNjJvM3YIXGBP3sTqi0vSn1hbSGQkfg9NEnfujSM%2BmgFGbSvx66KOCrOi%2BXb%2Fw8UO81zdHdQ8VOdRcOl55DCVdElOkZbLD9pIqC8M0yN8qRdKIdTzCGHoxp8CbMlBcNRsvosbY%2BG5MHHrx1Z0HJNt8nXO6%2FdSYHiLWr4jEKuQs2FQEMpQJ9hjF3wwiw3jeKZUaQs1JcWh%2FXBX8Fg659PIvi68d%2FXoBBpQujAVjj3WCc%2BSRVJe46l7nlHKYf5a5VPl6oe3eUDbAH%2F8v0345dGAE94XF2tIvu0sU%2FVXOdsKypIEVKW2HEfQAzzPRhfy8wIntOqVU5JNYIYtKaN6caUSlX5%2BcuxicYpHcZIb32R8JOO71OCoDK1SWOl5MEQcIXkbOa3UwzGwy%2FHDoDmeiJQ%2BcW3odCUu7Um4yEEWul6uPe683Q2Z3KFbpOAGzijWtAD4g%2BXO%2F7Gtt3MNhfipFFD4G1Y3l1lkm9tuIoEWYDFRvtZCJviTdAC2NJv8SBiFm%2FkQkBrUfDVaO0sHpmtS9BycEliQw1fXLwAY6pgHWzL7tvMXmf9Mq8yKmcCQVxaAEhtJrr3B1UIERFxWcIMzEVZ6GLk%2FzuVXc%2FJpIAY3ZR92J5ciHsvT4vE4SIaHCQWbt%2FUqi3wEnq9I9hbQhvJS23SZnqbBOx7sb%2BTcuTqq6vvlbHQNHAUeYgeh8RzDNVIqUytDMbso75fVdfPIJ%2Fx%2BTlKto3iPgGtaq0sYkuyTgbQPHvfi0UUJjpNHbPGM722ZT2zgU&X-Amz-Signature=8a5001946b0faa3956a7bb58d29976bd9030c9c7a985fd9dc29b53de88dda651&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULN2TY6S%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T050948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIEYoLdWVHdxayt3m05uhe%2FC5wIhg2LWM6a5bHekMTSt6AiAo0JDHxcbdhetH5YnFfcBO%2BsVgkFHs3sTs82ozUjMiCyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI10cOXb7hZMw%2ByoIKtwDGXkhlYDaUDxpOjWbokKZSRumtKdr4T0PEeu%2FxA4Ase7fvJvyAukZItcsAY6RM9eOhyCej1kWGZoAGKTpXFl0XtUoSlBGqZYXBpSNjJvM3YIXGBP3sTqi0vSn1hbSGQkfg9NEnfujSM%2BmgFGbSvx66KOCrOi%2BXb%2Fw8UO81zdHdQ8VOdRcOl55DCVdElOkZbLD9pIqC8M0yN8qRdKIdTzCGHoxp8CbMlBcNRsvosbY%2BG5MHHrx1Z0HJNt8nXO6%2FdSYHiLWr4jEKuQs2FQEMpQJ9hjF3wwiw3jeKZUaQs1JcWh%2FXBX8Fg659PIvi68d%2FXoBBpQujAVjj3WCc%2BSRVJe46l7nlHKYf5a5VPl6oe3eUDbAH%2F8v0345dGAE94XF2tIvu0sU%2FVXOdsKypIEVKW2HEfQAzzPRhfy8wIntOqVU5JNYIYtKaN6caUSlX5%2BcuxicYpHcZIb32R8JOO71OCoDK1SWOl5MEQcIXkbOa3UwzGwy%2FHDoDmeiJQ%2BcW3odCUu7Um4yEEWul6uPe683Q2Z3KFbpOAGzijWtAD4g%2BXO%2F7Gtt3MNhfipFFD4G1Y3l1lkm9tuIoEWYDFRvtZCJviTdAC2NJv8SBiFm%2FkQkBrUfDVaO0sHpmtS9BycEliQw1fXLwAY6pgHWzL7tvMXmf9Mq8yKmcCQVxaAEhtJrr3B1UIERFxWcIMzEVZ6GLk%2FzuVXc%2FJpIAY3ZR92J5ciHsvT4vE4SIaHCQWbt%2FUqi3wEnq9I9hbQhvJS23SZnqbBOx7sb%2BTcuTqq6vvlbHQNHAUeYgeh8RzDNVIqUytDMbso75fVdfPIJ%2Fx%2BTlKto3iPgGtaq0sYkuyTgbQPHvfi0UUJjpNHbPGM722ZT2zgU&X-Amz-Signature=85a93738845ad798040c7cced85b746cdc588b3a350fc5f6f58e13486c78cb76&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

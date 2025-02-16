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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNLC5MP%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD1ERyIdFs0xHXO63T1pSe1yJr3xHzvfZQeBfhp8DEfLwIgfAV86IUhGsXNQkd5h3KfKncUlEIRuIWiefiU17l4IAQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGTgfOz%2BxLNaToy8myrcAw4RK6TrzQ2d1yEmtOl4D1b02NmbJnI%2FiGh%2FcKTPO8DVQYyEfnoLVnIUQgGPEajfrdDDg%2FXgEKjBtUYQcU96444G7jNgSf5q7BplRwMgumgCytqo%2FfoPKQUdgWYMqD%2FBXVzC%2FERpKaOQVdgeBWBHiiS9JoF2bvyXlb9Xgub6DkbCIWDc2IjMEIVDs55QQ8KSbnrY5nHTl5Tr2XvOlvWTyb9sJC2XDrzeSy8VEvxg8q8hRQSth8Ed4aHITA1h30M4WCy0p97%2BMFQLb4EV9XtNYVvZthpeskr3fvlWA8gAjBtXtAOVv9xY62RsnARJFIznlYy45FFMJK%2F%2FaR6Dal88xvBp8Ft73FFtinznmWtvCNFsIDMdjSUwnCHDVJMxFQ91ewGjJicFYV1gg6rkV%2FrBUNnuSs%2FbAtjtfxjo0GZi6xIb0CTOP9z7HVf3QwJBDpp7e%2Fm8qyDJxR%2FbN%2BwhOFAeAglG9TEMzt0rGZXHY2l3TMBQubU1LQY40rCAq8edXEXehG12lJDE%2Boa%2FrqJdsPOQZiA0GmkuhS7cz8J7LjFuM2m1X%2BbwZCD%2BTIH%2BX17ms17tq8ISLv%2BDpJd7J4icG%2Byame2XSpVqoHKXvQYCnqQ%2BniHIJ8gNhDTiSS3GdHVNMLPDxb0GOqUBRjzkgou7QWb6NyjP2bCY7kZoETecn1MIJEy9vzsG25D6PTfAbn7AGEOZL0gZqheU0gZQBfUsW1eugeBkbGiYsolCUam9dkgPsHaeZ2D2Ei0t0dVzb3I0LYUOa1NMjPeABWjCRpSe8unSxv4xFLo2V1ztEp7O1qbiS2u0OypOE%2BHBObs3yicfMNKekB%2FWzlZPzehWa%2FA2%2FpjiIkizci%2F4Ow945NTU&X-Amz-Signature=a365192e67b2d3d7b00f83e44266d05303ef2dc4a0e52e3911de350c24861203&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNLC5MP%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD1ERyIdFs0xHXO63T1pSe1yJr3xHzvfZQeBfhp8DEfLwIgfAV86IUhGsXNQkd5h3KfKncUlEIRuIWiefiU17l4IAQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGTgfOz%2BxLNaToy8myrcAw4RK6TrzQ2d1yEmtOl4D1b02NmbJnI%2FiGh%2FcKTPO8DVQYyEfnoLVnIUQgGPEajfrdDDg%2FXgEKjBtUYQcU96444G7jNgSf5q7BplRwMgumgCytqo%2FfoPKQUdgWYMqD%2FBXVzC%2FERpKaOQVdgeBWBHiiS9JoF2bvyXlb9Xgub6DkbCIWDc2IjMEIVDs55QQ8KSbnrY5nHTl5Tr2XvOlvWTyb9sJC2XDrzeSy8VEvxg8q8hRQSth8Ed4aHITA1h30M4WCy0p97%2BMFQLb4EV9XtNYVvZthpeskr3fvlWA8gAjBtXtAOVv9xY62RsnARJFIznlYy45FFMJK%2F%2FaR6Dal88xvBp8Ft73FFtinznmWtvCNFsIDMdjSUwnCHDVJMxFQ91ewGjJicFYV1gg6rkV%2FrBUNnuSs%2FbAtjtfxjo0GZi6xIb0CTOP9z7HVf3QwJBDpp7e%2Fm8qyDJxR%2FbN%2BwhOFAeAglG9TEMzt0rGZXHY2l3TMBQubU1LQY40rCAq8edXEXehG12lJDE%2Boa%2FrqJdsPOQZiA0GmkuhS7cz8J7LjFuM2m1X%2BbwZCD%2BTIH%2BX17ms17tq8ISLv%2BDpJd7J4icG%2Byame2XSpVqoHKXvQYCnqQ%2BniHIJ8gNhDTiSS3GdHVNMLPDxb0GOqUBRjzkgou7QWb6NyjP2bCY7kZoETecn1MIJEy9vzsG25D6PTfAbn7AGEOZL0gZqheU0gZQBfUsW1eugeBkbGiYsolCUam9dkgPsHaeZ2D2Ei0t0dVzb3I0LYUOa1NMjPeABWjCRpSe8unSxv4xFLo2V1ztEp7O1qbiS2u0OypOE%2BHBObs3yicfMNKekB%2FWzlZPzehWa%2FA2%2FpjiIkizci%2F4Ow945NTU&X-Amz-Signature=6222d37f65f45569a4fba5abdb716ddc28d5e504502711b9ec2364117e07036b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNLC5MP%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T040909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQD1ERyIdFs0xHXO63T1pSe1yJr3xHzvfZQeBfhp8DEfLwIgfAV86IUhGsXNQkd5h3KfKncUlEIRuIWiefiU17l4IAQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGTgfOz%2BxLNaToy8myrcAw4RK6TrzQ2d1yEmtOl4D1b02NmbJnI%2FiGh%2FcKTPO8DVQYyEfnoLVnIUQgGPEajfrdDDg%2FXgEKjBtUYQcU96444G7jNgSf5q7BplRwMgumgCytqo%2FfoPKQUdgWYMqD%2FBXVzC%2FERpKaOQVdgeBWBHiiS9JoF2bvyXlb9Xgub6DkbCIWDc2IjMEIVDs55QQ8KSbnrY5nHTl5Tr2XvOlvWTyb9sJC2XDrzeSy8VEvxg8q8hRQSth8Ed4aHITA1h30M4WCy0p97%2BMFQLb4EV9XtNYVvZthpeskr3fvlWA8gAjBtXtAOVv9xY62RsnARJFIznlYy45FFMJK%2F%2FaR6Dal88xvBp8Ft73FFtinznmWtvCNFsIDMdjSUwnCHDVJMxFQ91ewGjJicFYV1gg6rkV%2FrBUNnuSs%2FbAtjtfxjo0GZi6xIb0CTOP9z7HVf3QwJBDpp7e%2Fm8qyDJxR%2FbN%2BwhOFAeAglG9TEMzt0rGZXHY2l3TMBQubU1LQY40rCAq8edXEXehG12lJDE%2Boa%2FrqJdsPOQZiA0GmkuhS7cz8J7LjFuM2m1X%2BbwZCD%2BTIH%2BX17ms17tq8ISLv%2BDpJd7J4icG%2Byame2XSpVqoHKXvQYCnqQ%2BniHIJ8gNhDTiSS3GdHVNMLPDxb0GOqUBRjzkgou7QWb6NyjP2bCY7kZoETecn1MIJEy9vzsG25D6PTfAbn7AGEOZL0gZqheU0gZQBfUsW1eugeBkbGiYsolCUam9dkgPsHaeZ2D2Ei0t0dVzb3I0LYUOa1NMjPeABWjCRpSe8unSxv4xFLo2V1ztEp7O1qbiS2u0OypOE%2BHBObs3yicfMNKekB%2FWzlZPzehWa%2FA2%2FpjiIkizci%2F4Ow945NTU&X-Amz-Signature=9c5027cde9a162740e838d19124cdb9580f5133b0abe220c4c2ba8666881df81&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

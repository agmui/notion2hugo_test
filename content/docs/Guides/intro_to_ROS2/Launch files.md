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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLBYB2F%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICTc7%2FLvHF9kS117p6Gz%2BdlCD8Bftk3Qib%2BQ5e7sivzcAiEA%2BS0Qa%2FYjn8na1IM8i500ktrA8OgEBNhpHULTyWBGXYsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOp0UTGZIraNd1rnuyrcA6ct3g5wFNF1B8zYCcAfIVgCTJRLvqPVhSXsaLnz4JOrR0hjlqkTzKYKBkD0ks2o195LJN2UqWw3wH3nGloJeO5MBNgM5LUoAnVM%2BXx550QjHlihridkMZDldQfMoqZev6X97%2B%2FJKMLkkxNOsUzoYAx63yEMmuZtUyBFBm8uU0Y4LjGw8TGFOEiXR8PkDIHBDCOIRBX1zLUdwS5KoPcorCjvXvbj3a999DlphupL9O5q5AtsHY1azdIq1SNUX1uAeHIz1IcIC8D6NE4iLjjdp9K5jsijxED%2BQof9jgYHk0NtH5oh1oEs1jkyTn1mcKx1N1iTogc%2BLJlaPfuAZCriHqzWR2AMsa%2BVmmNcMerbCO0%2BClgmRNZpscwKYGEmYjPf0Izi3bCfREk6wsH1Q5PO%2Bn3FU4Fwtrddld6sn7P73Vjpfz9cJOyvydmGcvrb683Y92hDxao7L7OM9VG3uGIDyHSM%2BdVIbM%2FIbOg7SWrznQP43PZXoqrB6lI%2FJbdYcwC839G6Kg25m5vBG7LyLv9auiZbYaA3SUWmitmJgZq1A1mPIZrka%2FvjvEaM0QzRSh78b4%2Fc42inhLQBNJjJyY66t78pyCXKufi7ZvuUbrlzTvxd6EHYpJYVIhOOdbFtMNyI%2FL0GOqUBImOqKigEtQ8Hb0AFh0aMLDSuzqfhJpBW6lwV%2BPSjVp%2FB44r1PSVsrEeEtDBSP9J5bQncD19DFvzIG92iruJoI1uLITLp9cbfmSHKMGQTs5n9XeNjktwM%2BEqEH5y86Z5%2BKX%2BFxS2QiDHmmubsfjzMpmu45rv8rDH6b796Tkt24agqVS4N9LJzpYuJgIFDA0AF3HUPnPu7OWDz5s6aOlQBA8nVfViW&X-Amz-Signature=622a23dbe64a28b1c293d71a932bd3510d8c8588109056a4db0edf8f984c6b19&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLBYB2F%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICTc7%2FLvHF9kS117p6Gz%2BdlCD8Bftk3Qib%2BQ5e7sivzcAiEA%2BS0Qa%2FYjn8na1IM8i500ktrA8OgEBNhpHULTyWBGXYsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOp0UTGZIraNd1rnuyrcA6ct3g5wFNF1B8zYCcAfIVgCTJRLvqPVhSXsaLnz4JOrR0hjlqkTzKYKBkD0ks2o195LJN2UqWw3wH3nGloJeO5MBNgM5LUoAnVM%2BXx550QjHlihridkMZDldQfMoqZev6X97%2B%2FJKMLkkxNOsUzoYAx63yEMmuZtUyBFBm8uU0Y4LjGw8TGFOEiXR8PkDIHBDCOIRBX1zLUdwS5KoPcorCjvXvbj3a999DlphupL9O5q5AtsHY1azdIq1SNUX1uAeHIz1IcIC8D6NE4iLjjdp9K5jsijxED%2BQof9jgYHk0NtH5oh1oEs1jkyTn1mcKx1N1iTogc%2BLJlaPfuAZCriHqzWR2AMsa%2BVmmNcMerbCO0%2BClgmRNZpscwKYGEmYjPf0Izi3bCfREk6wsH1Q5PO%2Bn3FU4Fwtrddld6sn7P73Vjpfz9cJOyvydmGcvrb683Y92hDxao7L7OM9VG3uGIDyHSM%2BdVIbM%2FIbOg7SWrznQP43PZXoqrB6lI%2FJbdYcwC839G6Kg25m5vBG7LyLv9auiZbYaA3SUWmitmJgZq1A1mPIZrka%2FvjvEaM0QzRSh78b4%2Fc42inhLQBNJjJyY66t78pyCXKufi7ZvuUbrlzTvxd6EHYpJYVIhOOdbFtMNyI%2FL0GOqUBImOqKigEtQ8Hb0AFh0aMLDSuzqfhJpBW6lwV%2BPSjVp%2FB44r1PSVsrEeEtDBSP9J5bQncD19DFvzIG92iruJoI1uLITLp9cbfmSHKMGQTs5n9XeNjktwM%2BEqEH5y86Z5%2BKX%2BFxS2QiDHmmubsfjzMpmu45rv8rDH6b796Tkt24agqVS4N9LJzpYuJgIFDA0AF3HUPnPu7OWDz5s6aOlQBA8nVfViW&X-Amz-Signature=0130b1bcc3d858567eba8df6bd28244a9020174e4379f276c2a0978c22e0d525&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLBYB2F%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCICTc7%2FLvHF9kS117p6Gz%2BdlCD8Bftk3Qib%2BQ5e7sivzcAiEA%2BS0Qa%2FYjn8na1IM8i500ktrA8OgEBNhpHULTyWBGXYsq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOp0UTGZIraNd1rnuyrcA6ct3g5wFNF1B8zYCcAfIVgCTJRLvqPVhSXsaLnz4JOrR0hjlqkTzKYKBkD0ks2o195LJN2UqWw3wH3nGloJeO5MBNgM5LUoAnVM%2BXx550QjHlihridkMZDldQfMoqZev6X97%2B%2FJKMLkkxNOsUzoYAx63yEMmuZtUyBFBm8uU0Y4LjGw8TGFOEiXR8PkDIHBDCOIRBX1zLUdwS5KoPcorCjvXvbj3a999DlphupL9O5q5AtsHY1azdIq1SNUX1uAeHIz1IcIC8D6NE4iLjjdp9K5jsijxED%2BQof9jgYHk0NtH5oh1oEs1jkyTn1mcKx1N1iTogc%2BLJlaPfuAZCriHqzWR2AMsa%2BVmmNcMerbCO0%2BClgmRNZpscwKYGEmYjPf0Izi3bCfREk6wsH1Q5PO%2Bn3FU4Fwtrddld6sn7P73Vjpfz9cJOyvydmGcvrb683Y92hDxao7L7OM9VG3uGIDyHSM%2BdVIbM%2FIbOg7SWrznQP43PZXoqrB6lI%2FJbdYcwC839G6Kg25m5vBG7LyLv9auiZbYaA3SUWmitmJgZq1A1mPIZrka%2FvjvEaM0QzRSh78b4%2Fc42inhLQBNJjJyY66t78pyCXKufi7ZvuUbrlzTvxd6EHYpJYVIhOOdbFtMNyI%2FL0GOqUBImOqKigEtQ8Hb0AFh0aMLDSuzqfhJpBW6lwV%2BPSjVp%2FB44r1PSVsrEeEtDBSP9J5bQncD19DFvzIG92iruJoI1uLITLp9cbfmSHKMGQTs5n9XeNjktwM%2BEqEH5y86Z5%2BKX%2BFxS2QiDHmmubsfjzMpmu45rv8rDH6b796Tkt24agqVS4N9LJzpYuJgIFDA0AF3HUPnPu7OWDz5s6aOlQBA8nVfViW&X-Amz-Signature=d9347c661e5cf8197d0c6ddebf34b157b2c4e1bc811c23b24401cfc2e84f62ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

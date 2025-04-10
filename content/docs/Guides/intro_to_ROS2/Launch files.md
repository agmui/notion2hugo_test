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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2G4WQEZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAHiHjQ4ecU5n2NNaPnJWptegGQD9JXAQ44GlK1JzXHwAiBE1OCYaRu9AL36XhMcylkcK6B2UmW%2BeVb3jr17wVPFbyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzO1FsXzkd3NVk0wmKtwDLYIC2Yisojg%2FV7xpu44hw0tgBajaH9ET6yqoSI8kf0Zcx8F9lhxdr6FsS6%2BAVMmRd0RyJIkJiWjzq1%2Fajp2CGNjXPADHkRhsppd8%2BumpWoT9BhvXUT48NpVz8PhoeYfR4ABxRGXMcEgD64jW%2FxEmwZ%2Fc3aIsmxwu6bWHb2cP6m%2FzA4T8ieiFkqaQ%2FRh4FsCfiAjqNragShUmMoCiLeR4GY%2FK%2BqzwMz8MByppDpxm4DPCB3X7%2BHBY6%2FJyWhoGevKT1RbmJkV%2FisbqwVeG9zjLyITBFDbb65%2BSy%2FcQ4%2B5TYSc%2BTKAhxYh1B13AZJT2uqprnW%2BDKBtZcOrUwm%2FECYsxWkJdYaMQ6d1aj%2Bv24Q4cx1yro5o%2FnAiosJXfawiiD71CQ9qvcZIiyjhpJ%2FFZBoIuS8e57nTDuyj8RZWUZ56y7Q20mk7qUUEuvh1fM7oCzHKdB1Ibhd9zAEU60aM%2FC%2FL3tDkjVC26JfqfSFXV6CFcrDEwyLGiY87Wna1LC3LvGNgYqOD%2BHOwqbRXU8wDrTJ%2BBXqtbG3F1h82r3nz3swPD6p42PxPbOp2kb5xMQNBQs4VZoqQGky9Jl8wy2K0c7DYG08h3n7CBhDr3UzAuphBNTo0k2x%2FMoYS9K4ddzxowrrLgvwY6pgEJ123jYnwnAEIG9XUWULMOQd7Ervt%2BkYDnsSuQWixPisgbcEMsUGu2%2BWjaP0NEKdRTJ8qX%2BQ5TxBPtjpRTKCdAMUlz80lXZsBYqR%2BlU%2BECgnsPK3WY0HXVHba3FgcRsQa0%2B5IVbcFAM12xrA%2B2HJgKYtew7laSjB7BC27%2FPk%2BWwNS0Gti%2Fm08RNbl%2Fsg2MrL9ulLMZ%2FZS0rdy3GNm3qklsVFvnfSUT&X-Amz-Signature=21039f4114d559b70d1a6c7953e6b1ef6594aad5c7bb9e761a2d1cce6db78ee9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2G4WQEZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAHiHjQ4ecU5n2NNaPnJWptegGQD9JXAQ44GlK1JzXHwAiBE1OCYaRu9AL36XhMcylkcK6B2UmW%2BeVb3jr17wVPFbyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzO1FsXzkd3NVk0wmKtwDLYIC2Yisojg%2FV7xpu44hw0tgBajaH9ET6yqoSI8kf0Zcx8F9lhxdr6FsS6%2BAVMmRd0RyJIkJiWjzq1%2Fajp2CGNjXPADHkRhsppd8%2BumpWoT9BhvXUT48NpVz8PhoeYfR4ABxRGXMcEgD64jW%2FxEmwZ%2Fc3aIsmxwu6bWHb2cP6m%2FzA4T8ieiFkqaQ%2FRh4FsCfiAjqNragShUmMoCiLeR4GY%2FK%2BqzwMz8MByppDpxm4DPCB3X7%2BHBY6%2FJyWhoGevKT1RbmJkV%2FisbqwVeG9zjLyITBFDbb65%2BSy%2FcQ4%2B5TYSc%2BTKAhxYh1B13AZJT2uqprnW%2BDKBtZcOrUwm%2FECYsxWkJdYaMQ6d1aj%2Bv24Q4cx1yro5o%2FnAiosJXfawiiD71CQ9qvcZIiyjhpJ%2FFZBoIuS8e57nTDuyj8RZWUZ56y7Q20mk7qUUEuvh1fM7oCzHKdB1Ibhd9zAEU60aM%2FC%2FL3tDkjVC26JfqfSFXV6CFcrDEwyLGiY87Wna1LC3LvGNgYqOD%2BHOwqbRXU8wDrTJ%2BBXqtbG3F1h82r3nz3swPD6p42PxPbOp2kb5xMQNBQs4VZoqQGky9Jl8wy2K0c7DYG08h3n7CBhDr3UzAuphBNTo0k2x%2FMoYS9K4ddzxowrrLgvwY6pgEJ123jYnwnAEIG9XUWULMOQd7Ervt%2BkYDnsSuQWixPisgbcEMsUGu2%2BWjaP0NEKdRTJ8qX%2BQ5TxBPtjpRTKCdAMUlz80lXZsBYqR%2BlU%2BECgnsPK3WY0HXVHba3FgcRsQa0%2B5IVbcFAM12xrA%2B2HJgKYtew7laSjB7BC27%2FPk%2BWwNS0Gti%2Fm08RNbl%2Fsg2MrL9ulLMZ%2FZS0rdy3GNm3qklsVFvnfSUT&X-Amz-Signature=16a80593d94bb8bebabbc27dc0478c5d8d79fd3b74762f383a3296ecc656ac6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2G4WQEZ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T200930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIAHiHjQ4ecU5n2NNaPnJWptegGQD9JXAQ44GlK1JzXHwAiBE1OCYaRu9AL36XhMcylkcK6B2UmW%2BeVb3jr17wVPFbyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzO1FsXzkd3NVk0wmKtwDLYIC2Yisojg%2FV7xpu44hw0tgBajaH9ET6yqoSI8kf0Zcx8F9lhxdr6FsS6%2BAVMmRd0RyJIkJiWjzq1%2Fajp2CGNjXPADHkRhsppd8%2BumpWoT9BhvXUT48NpVz8PhoeYfR4ABxRGXMcEgD64jW%2FxEmwZ%2Fc3aIsmxwu6bWHb2cP6m%2FzA4T8ieiFkqaQ%2FRh4FsCfiAjqNragShUmMoCiLeR4GY%2FK%2BqzwMz8MByppDpxm4DPCB3X7%2BHBY6%2FJyWhoGevKT1RbmJkV%2FisbqwVeG9zjLyITBFDbb65%2BSy%2FcQ4%2B5TYSc%2BTKAhxYh1B13AZJT2uqprnW%2BDKBtZcOrUwm%2FECYsxWkJdYaMQ6d1aj%2Bv24Q4cx1yro5o%2FnAiosJXfawiiD71CQ9qvcZIiyjhpJ%2FFZBoIuS8e57nTDuyj8RZWUZ56y7Q20mk7qUUEuvh1fM7oCzHKdB1Ibhd9zAEU60aM%2FC%2FL3tDkjVC26JfqfSFXV6CFcrDEwyLGiY87Wna1LC3LvGNgYqOD%2BHOwqbRXU8wDrTJ%2BBXqtbG3F1h82r3nz3swPD6p42PxPbOp2kb5xMQNBQs4VZoqQGky9Jl8wy2K0c7DYG08h3n7CBhDr3UzAuphBNTo0k2x%2FMoYS9K4ddzxowrrLgvwY6pgEJ123jYnwnAEIG9XUWULMOQd7Ervt%2BkYDnsSuQWixPisgbcEMsUGu2%2BWjaP0NEKdRTJ8qX%2BQ5TxBPtjpRTKCdAMUlz80lXZsBYqR%2BlU%2BECgnsPK3WY0HXVHba3FgcRsQa0%2B5IVbcFAM12xrA%2B2HJgKYtew7laSjB7BC27%2FPk%2BWwNS0Gti%2Fm08RNbl%2Fsg2MrL9ulLMZ%2FZS0rdy3GNm3qklsVFvnfSUT&X-Amz-Signature=bd7990ef5766babf4af314fd6919e53b4d1efb7aff073a2ad565e8b4bbf9e5f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

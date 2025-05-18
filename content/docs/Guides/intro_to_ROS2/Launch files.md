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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZJTEWU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkakyLScCb6QSEFzi7WkGbSlM3DvXJM5E%2BL2J%2FkL6BJgIgWOJKVGwnK4ov9TNRfWMiDuu0T0tZKBdr%2Fl1ijrfUN4gq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCcUg8BOThY4BK5vmyrcAwAhekQl5ANK9llY3JKboPiCOEduso%2BavYtVvMNgnIZoHV3%2FU1LWWQB6qqsUL%2BLH0yqqHVXkdEv4hZJYokS5ps%2BW%2FAZ51tC6ctRsRU2g2dt1GRU6zmG%2BHga8vTm%2B3vx%2FH8tGtLLQknJcEdi0eZ9vTyPCUB0YPfHFvmEP9AOC2%2BsH8n3nXr3KsGXEFnzYXkczAu9eBUUSu9NU0XH9yJjeljU6xXDckOx21DQMaPPw7POt2FWBY7%2Byrrzwfja7sAy0iodu7ODSIMEqxwIBx1bhyDioom0LBT2KBGYuk9Tje12OpB2C60lIcgbeV4QIOXGXFJTBry0TEXh0G4yNFDCbGR2qCTKmsp13vg%2FLbNz6RVLnFq6j5PoFqnnOX9PDkXflFxezT5rkq2r4lTFkWPkm%2BQuv7TvDt6aho5XuyDUR8NI4%2B5ANG0WSJhMGqUvdTaHv0uqDu2ie6TrQesQEEAJQ1eMGEEs1o%2F0Ox053U4jhPZ4VUKnsfRdtwzsGLYfnCGDomlMoGeGQQaj%2FVyvCLgIDzlwqlwGrjV9ST7OcxeupIjRkRCB%2F8F7TAASpRBImJomzvksaBcnd5W%2BQuZAU68ZId2%2BQciQpLYMh%2Fb8Jk4OWjygTJAdDxsKibTu48n6bMO3XpMEGOqUBOf%2BGvFSOUqWPiTuOJ5SML9KL2ulfKE1ilrY%2FRyvsnDlPSd63mipzk3J44Dk9%2F%2BgmCHkruaeQXmJLICJhWDZZBpx7%2BnnjtBd616N%2Fegj0nloYL2C6kUu1gTBpy0QbSwkiLoeF5NSgIAr6jSxD%2Bqh4vlPDoGdD9Zgi8u8RMnA3N7RVanOotg0h0dAFHQhjO2IfL5vjjgUw1D3LJHLGNY4oIry96SlQ&X-Amz-Signature=1d3b4026d2d4c7af67e8333c12c65980c4b684cea11edc416392b06a95de096c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZJTEWU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkakyLScCb6QSEFzi7WkGbSlM3DvXJM5E%2BL2J%2FkL6BJgIgWOJKVGwnK4ov9TNRfWMiDuu0T0tZKBdr%2Fl1ijrfUN4gq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCcUg8BOThY4BK5vmyrcAwAhekQl5ANK9llY3JKboPiCOEduso%2BavYtVvMNgnIZoHV3%2FU1LWWQB6qqsUL%2BLH0yqqHVXkdEv4hZJYokS5ps%2BW%2FAZ51tC6ctRsRU2g2dt1GRU6zmG%2BHga8vTm%2B3vx%2FH8tGtLLQknJcEdi0eZ9vTyPCUB0YPfHFvmEP9AOC2%2BsH8n3nXr3KsGXEFnzYXkczAu9eBUUSu9NU0XH9yJjeljU6xXDckOx21DQMaPPw7POt2FWBY7%2Byrrzwfja7sAy0iodu7ODSIMEqxwIBx1bhyDioom0LBT2KBGYuk9Tje12OpB2C60lIcgbeV4QIOXGXFJTBry0TEXh0G4yNFDCbGR2qCTKmsp13vg%2FLbNz6RVLnFq6j5PoFqnnOX9PDkXflFxezT5rkq2r4lTFkWPkm%2BQuv7TvDt6aho5XuyDUR8NI4%2B5ANG0WSJhMGqUvdTaHv0uqDu2ie6TrQesQEEAJQ1eMGEEs1o%2F0Ox053U4jhPZ4VUKnsfRdtwzsGLYfnCGDomlMoGeGQQaj%2FVyvCLgIDzlwqlwGrjV9ST7OcxeupIjRkRCB%2F8F7TAASpRBImJomzvksaBcnd5W%2BQuZAU68ZId2%2BQciQpLYMh%2Fb8Jk4OWjygTJAdDxsKibTu48n6bMO3XpMEGOqUBOf%2BGvFSOUqWPiTuOJ5SML9KL2ulfKE1ilrY%2FRyvsnDlPSd63mipzk3J44Dk9%2F%2BgmCHkruaeQXmJLICJhWDZZBpx7%2BnnjtBd616N%2Fegj0nloYL2C6kUu1gTBpy0QbSwkiLoeF5NSgIAr6jSxD%2Bqh4vlPDoGdD9Zgi8u8RMnA3N7RVanOotg0h0dAFHQhjO2IfL5vjjgUw1D3LJHLGNY4oIry96SlQ&X-Amz-Signature=4b8e94841b8422a257c4162c2423a3372eddde6390e80ce4634d47b7f4b9d88f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZJTEWU%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkakyLScCb6QSEFzi7WkGbSlM3DvXJM5E%2BL2J%2FkL6BJgIgWOJKVGwnK4ov9TNRfWMiDuu0T0tZKBdr%2Fl1ijrfUN4gq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDCcUg8BOThY4BK5vmyrcAwAhekQl5ANK9llY3JKboPiCOEduso%2BavYtVvMNgnIZoHV3%2FU1LWWQB6qqsUL%2BLH0yqqHVXkdEv4hZJYokS5ps%2BW%2FAZ51tC6ctRsRU2g2dt1GRU6zmG%2BHga8vTm%2B3vx%2FH8tGtLLQknJcEdi0eZ9vTyPCUB0YPfHFvmEP9AOC2%2BsH8n3nXr3KsGXEFnzYXkczAu9eBUUSu9NU0XH9yJjeljU6xXDckOx21DQMaPPw7POt2FWBY7%2Byrrzwfja7sAy0iodu7ODSIMEqxwIBx1bhyDioom0LBT2KBGYuk9Tje12OpB2C60lIcgbeV4QIOXGXFJTBry0TEXh0G4yNFDCbGR2qCTKmsp13vg%2FLbNz6RVLnFq6j5PoFqnnOX9PDkXflFxezT5rkq2r4lTFkWPkm%2BQuv7TvDt6aho5XuyDUR8NI4%2B5ANG0WSJhMGqUvdTaHv0uqDu2ie6TrQesQEEAJQ1eMGEEs1o%2F0Ox053U4jhPZ4VUKnsfRdtwzsGLYfnCGDomlMoGeGQQaj%2FVyvCLgIDzlwqlwGrjV9ST7OcxeupIjRkRCB%2F8F7TAASpRBImJomzvksaBcnd5W%2BQuZAU68ZId2%2BQciQpLYMh%2Fb8Jk4OWjygTJAdDxsKibTu48n6bMO3XpMEGOqUBOf%2BGvFSOUqWPiTuOJ5SML9KL2ulfKE1ilrY%2FRyvsnDlPSd63mipzk3J44Dk9%2F%2BgmCHkruaeQXmJLICJhWDZZBpx7%2BnnjtBd616N%2Fegj0nloYL2C6kUu1gTBpy0QbSwkiLoeF5NSgIAr6jSxD%2Bqh4vlPDoGdD9Zgi8u8RMnA3N7RVanOotg0h0dAFHQhjO2IfL5vjjgUw1D3LJHLGNY4oIry96SlQ&X-Amz-Signature=10a6faea4fca63e7032f74092cee7f41140add219f3f242527227c547d651d78&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

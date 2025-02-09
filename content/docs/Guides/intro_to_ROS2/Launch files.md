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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFP4UVON%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdtZIMWSjKohDTmHZ31h4I%2B1RD6XXKbuAtEX5LPeqWJAiAvQsvAMFvlJtGSNPV7%2BnbYdI2KsFVR9yzc5q%2FnnNqfyCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyR%2F1yS7HZUcXM%2F0KtwDMAu8snJhJPwim1T52gnPdM7A1Iiwyk0flYSm0xYA%2B93rQJOJSBxIqxSxlwy4FuIh6%2BD3UTt9YChPtubHZ24CZPuagz1aiyOj4oJuVoEEZ0artEtZm5fEqz5mUuhhuWiugOoCP9PQoa8H15QjqnjbBwLcTfpW63gOfrbBc7%2FKCAhPcNbdX8AcZE9RXg2LaQ39irOYem0TXnA6POiwyGcSC26JldHuptEDuUXbp6x7o9NLNYRAPtdVlQj94J1s58l6DZE4Hvnms3L9YlsirLYJSQ4AVh10zcYc%2FlWOlALeHcXcd71u6HjkKr%2BlIPA%2BBtyVXPmNVbFzXnw%2B6Q%2F7qzKzBYYFswqyIhTTPNL5YYPtD9d%2FeugsAVDKhho%2FXuZMO6F%2FC9tOjhPMbLbc0OcqMWGFPbggbXi%2BnVhzGPgBXAGJGWFP3CsKAwXv8nRQkwn28EL3aWy%2FE%2FTQ9Rr%2B%2FxqdPeicG6gSWdEN5IL9DFPqhI1wu9gF3FW2KQ5bgkz79sXymf5yxGwLcBqn2RYbO4OlbMshCL2H6P7ASl7CUtfjxODXjG%2BgT70NwJEPFZmJrEXpvpqCQzwmBoIzRF7yw89jAab9n7c9wLAQJfOJoMDkyIu00ySO3yXScKHTbd5NQeEwsoCjvQY6pgEAV0%2BxhkcGYix6iR5m282UPEtiC4Xo5soxAdGPnYSNkxBHbsMz1jYJPXjzeqig8E%2BNpq2oxsX8Bx0JdEv9YP%2FHKM5dV125J292dmEHJmYADSrEVDYDRasRBiht3HwOGLYSTSM7dOUEZtWCV%2BTYyOZDpVlqKcC4F9dzmNyUIzC84uIoOVtjiKSUaPZ%2B8vQC5SrhbirkSTCOI7K8i1eMuAlvUxtgbGB9&X-Amz-Signature=3d30e674522d29b47f94b328bada6af251b7b5d1d90bc46c9d42e0ed22981efc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFP4UVON%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdtZIMWSjKohDTmHZ31h4I%2B1RD6XXKbuAtEX5LPeqWJAiAvQsvAMFvlJtGSNPV7%2BnbYdI2KsFVR9yzc5q%2FnnNqfyCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyR%2F1yS7HZUcXM%2F0KtwDMAu8snJhJPwim1T52gnPdM7A1Iiwyk0flYSm0xYA%2B93rQJOJSBxIqxSxlwy4FuIh6%2BD3UTt9YChPtubHZ24CZPuagz1aiyOj4oJuVoEEZ0artEtZm5fEqz5mUuhhuWiugOoCP9PQoa8H15QjqnjbBwLcTfpW63gOfrbBc7%2FKCAhPcNbdX8AcZE9RXg2LaQ39irOYem0TXnA6POiwyGcSC26JldHuptEDuUXbp6x7o9NLNYRAPtdVlQj94J1s58l6DZE4Hvnms3L9YlsirLYJSQ4AVh10zcYc%2FlWOlALeHcXcd71u6HjkKr%2BlIPA%2BBtyVXPmNVbFzXnw%2B6Q%2F7qzKzBYYFswqyIhTTPNL5YYPtD9d%2FeugsAVDKhho%2FXuZMO6F%2FC9tOjhPMbLbc0OcqMWGFPbggbXi%2BnVhzGPgBXAGJGWFP3CsKAwXv8nRQkwn28EL3aWy%2FE%2FTQ9Rr%2B%2FxqdPeicG6gSWdEN5IL9DFPqhI1wu9gF3FW2KQ5bgkz79sXymf5yxGwLcBqn2RYbO4OlbMshCL2H6P7ASl7CUtfjxODXjG%2BgT70NwJEPFZmJrEXpvpqCQzwmBoIzRF7yw89jAab9n7c9wLAQJfOJoMDkyIu00ySO3yXScKHTbd5NQeEwsoCjvQY6pgEAV0%2BxhkcGYix6iR5m282UPEtiC4Xo5soxAdGPnYSNkxBHbsMz1jYJPXjzeqig8E%2BNpq2oxsX8Bx0JdEv9YP%2FHKM5dV125J292dmEHJmYADSrEVDYDRasRBiht3HwOGLYSTSM7dOUEZtWCV%2BTYyOZDpVlqKcC4F9dzmNyUIzC84uIoOVtjiKSUaPZ%2B8vQC5SrhbirkSTCOI7K8i1eMuAlvUxtgbGB9&X-Amz-Signature=72193502296b1b1eecaa9f60561b1c689f5b2c93d0f8aab60b3f4459d98ad89c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFP4UVON%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T180855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdtZIMWSjKohDTmHZ31h4I%2B1RD6XXKbuAtEX5LPeqWJAiAvQsvAMFvlJtGSNPV7%2BnbYdI2KsFVR9yzc5q%2FnnNqfyCqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyR%2F1yS7HZUcXM%2F0KtwDMAu8snJhJPwim1T52gnPdM7A1Iiwyk0flYSm0xYA%2B93rQJOJSBxIqxSxlwy4FuIh6%2BD3UTt9YChPtubHZ24CZPuagz1aiyOj4oJuVoEEZ0artEtZm5fEqz5mUuhhuWiugOoCP9PQoa8H15QjqnjbBwLcTfpW63gOfrbBc7%2FKCAhPcNbdX8AcZE9RXg2LaQ39irOYem0TXnA6POiwyGcSC26JldHuptEDuUXbp6x7o9NLNYRAPtdVlQj94J1s58l6DZE4Hvnms3L9YlsirLYJSQ4AVh10zcYc%2FlWOlALeHcXcd71u6HjkKr%2BlIPA%2BBtyVXPmNVbFzXnw%2B6Q%2F7qzKzBYYFswqyIhTTPNL5YYPtD9d%2FeugsAVDKhho%2FXuZMO6F%2FC9tOjhPMbLbc0OcqMWGFPbggbXi%2BnVhzGPgBXAGJGWFP3CsKAwXv8nRQkwn28EL3aWy%2FE%2FTQ9Rr%2B%2FxqdPeicG6gSWdEN5IL9DFPqhI1wu9gF3FW2KQ5bgkz79sXymf5yxGwLcBqn2RYbO4OlbMshCL2H6P7ASl7CUtfjxODXjG%2BgT70NwJEPFZmJrEXpvpqCQzwmBoIzRF7yw89jAab9n7c9wLAQJfOJoMDkyIu00ySO3yXScKHTbd5NQeEwsoCjvQY6pgEAV0%2BxhkcGYix6iR5m282UPEtiC4Xo5soxAdGPnYSNkxBHbsMz1jYJPXjzeqig8E%2BNpq2oxsX8Bx0JdEv9YP%2FHKM5dV125J292dmEHJmYADSrEVDYDRasRBiht3HwOGLYSTSM7dOUEZtWCV%2BTYyOZDpVlqKcC4F9dzmNyUIzC84uIoOVtjiKSUaPZ%2B8vQC5SrhbirkSTCOI7K8i1eMuAlvUxtgbGB9&X-Amz-Signature=108e18c0c2979daa349a161fda23315461ca6ca96800dd69408b9c170b50b944&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

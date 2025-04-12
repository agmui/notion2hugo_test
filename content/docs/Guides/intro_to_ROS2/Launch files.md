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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ALLCFX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDBblCALrOzGXq5y9Zw88GowmEqALvlSYE71mR7aSy5GAiEAybkTrr8I7oFz1D%2FlUtmc9GUqu0rblayoGScD3g6bMSUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnOoXxNWikwntiKJircA3QX%2FivRzBFn%2FyEpkszUbKCECXI%2B6gbut%2FbIDz3gquaC0XFMg4rreTwecWQBvR%2FlDLhhDSRyl4Jmq5QnghDhpIZ4zWpRRqSLNDokA%2FU2RyRliPYG%2BCGFNdllGp39J7fgrkIexhP5p8qbB11yfJUj5HeJnpki4xf9syXRCemN%2F6OrlLCHjdUXxaxMypJofMoAvsgmBI5PF6xqVuJb1z%2BuxcMhwZpR%2BIul3dcFoA14x4Bglc%2BbyEUu%2BKgtzSfRZovT3uSZNEZrhfR%2Bsn0%2F49qFy8VDzeUSdxKFLIBMWbGtBGHJk0oqL4jkjb5byDJ1ft9vJG2Cgw8UunfNmIqk300thcgq9nPszOIQxakBpGcTnkpBpb3P43T8jZ5tkg7agIeU0jKXQ1o5USRtwdeEWM6TO7TqF%2BRH1SHRCgcVPGVI3mRlJ9SzcWFraG3l3ET2KMCWsx9GcgDgIcgaUKOE3JAiKaPUAquGgiGVjJkaLvtl0fYw9sVFINWN0KXUhHkQ56JF6AXSEtgEWF2bfQ1D%2Ba5euL2HTncTMrj74B6Yp4Ztd2h6E9gTH%2B%2FNIvKjL5Ly4i2sRO4hiipy6h%2BBnK0ypcuUuwLJR5SMISXCA097VBfwPyHvNWGXP5hoVFXHXKJKMPf66b8GOqUB5E7A9LJHury2VMhc1GhICKRph2GjwcvB%2B3izbOf7RyVJuF0AKUmHuCQXsW7Qp1u6HSSait6JFYcvOwrWIPmv2gE1wl9GWP61wSWOLABEpVhsxLEnKy62L5Vg2WF9o%2FNHLuA6ljkIri6URr9i2LspyUDrHO9dtyRlpoVm0UW%2BtZDuf1sd9GldSzruxegliAs6vn6Nn3bfNM0xM46u71Ehymo%2BW%2Fv4&X-Amz-Signature=065371cbec210a1a33d3f3fc267a907326d557b131d4e344bc57ae4866c523ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ALLCFX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDBblCALrOzGXq5y9Zw88GowmEqALvlSYE71mR7aSy5GAiEAybkTrr8I7oFz1D%2FlUtmc9GUqu0rblayoGScD3g6bMSUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnOoXxNWikwntiKJircA3QX%2FivRzBFn%2FyEpkszUbKCECXI%2B6gbut%2FbIDz3gquaC0XFMg4rreTwecWQBvR%2FlDLhhDSRyl4Jmq5QnghDhpIZ4zWpRRqSLNDokA%2FU2RyRliPYG%2BCGFNdllGp39J7fgrkIexhP5p8qbB11yfJUj5HeJnpki4xf9syXRCemN%2F6OrlLCHjdUXxaxMypJofMoAvsgmBI5PF6xqVuJb1z%2BuxcMhwZpR%2BIul3dcFoA14x4Bglc%2BbyEUu%2BKgtzSfRZovT3uSZNEZrhfR%2Bsn0%2F49qFy8VDzeUSdxKFLIBMWbGtBGHJk0oqL4jkjb5byDJ1ft9vJG2Cgw8UunfNmIqk300thcgq9nPszOIQxakBpGcTnkpBpb3P43T8jZ5tkg7agIeU0jKXQ1o5USRtwdeEWM6TO7TqF%2BRH1SHRCgcVPGVI3mRlJ9SzcWFraG3l3ET2KMCWsx9GcgDgIcgaUKOE3JAiKaPUAquGgiGVjJkaLvtl0fYw9sVFINWN0KXUhHkQ56JF6AXSEtgEWF2bfQ1D%2Ba5euL2HTncTMrj74B6Yp4Ztd2h6E9gTH%2B%2FNIvKjL5Ly4i2sRO4hiipy6h%2BBnK0ypcuUuwLJR5SMISXCA097VBfwPyHvNWGXP5hoVFXHXKJKMPf66b8GOqUB5E7A9LJHury2VMhc1GhICKRph2GjwcvB%2B3izbOf7RyVJuF0AKUmHuCQXsW7Qp1u6HSSait6JFYcvOwrWIPmv2gE1wl9GWP61wSWOLABEpVhsxLEnKy62L5Vg2WF9o%2FNHLuA6ljkIri6URr9i2LspyUDrHO9dtyRlpoVm0UW%2BtZDuf1sd9GldSzruxegliAs6vn6Nn3bfNM0xM46u71Ehymo%2BW%2Fv4&X-Amz-Signature=f60be9bd92154e09a97ad2fdb33d9da5b439b7ae4183bb29db3744510b0418d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ALLCFX%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDBblCALrOzGXq5y9Zw88GowmEqALvlSYE71mR7aSy5GAiEAybkTrr8I7oFz1D%2FlUtmc9GUqu0rblayoGScD3g6bMSUqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnOoXxNWikwntiKJircA3QX%2FivRzBFn%2FyEpkszUbKCECXI%2B6gbut%2FbIDz3gquaC0XFMg4rreTwecWQBvR%2FlDLhhDSRyl4Jmq5QnghDhpIZ4zWpRRqSLNDokA%2FU2RyRliPYG%2BCGFNdllGp39J7fgrkIexhP5p8qbB11yfJUj5HeJnpki4xf9syXRCemN%2F6OrlLCHjdUXxaxMypJofMoAvsgmBI5PF6xqVuJb1z%2BuxcMhwZpR%2BIul3dcFoA14x4Bglc%2BbyEUu%2BKgtzSfRZovT3uSZNEZrhfR%2Bsn0%2F49qFy8VDzeUSdxKFLIBMWbGtBGHJk0oqL4jkjb5byDJ1ft9vJG2Cgw8UunfNmIqk300thcgq9nPszOIQxakBpGcTnkpBpb3P43T8jZ5tkg7agIeU0jKXQ1o5USRtwdeEWM6TO7TqF%2BRH1SHRCgcVPGVI3mRlJ9SzcWFraG3l3ET2KMCWsx9GcgDgIcgaUKOE3JAiKaPUAquGgiGVjJkaLvtl0fYw9sVFINWN0KXUhHkQ56JF6AXSEtgEWF2bfQ1D%2Ba5euL2HTncTMrj74B6Yp4Ztd2h6E9gTH%2B%2FNIvKjL5Ly4i2sRO4hiipy6h%2BBnK0ypcuUuwLJR5SMISXCA097VBfwPyHvNWGXP5hoVFXHXKJKMPf66b8GOqUB5E7A9LJHury2VMhc1GhICKRph2GjwcvB%2B3izbOf7RyVJuF0AKUmHuCQXsW7Qp1u6HSSait6JFYcvOwrWIPmv2gE1wl9GWP61wSWOLABEpVhsxLEnKy62L5Vg2WF9o%2FNHLuA6ljkIri6URr9i2LspyUDrHO9dtyRlpoVm0UW%2BtZDuf1sd9GldSzruxegliAs6vn6Nn3bfNM0xM46u71Ehymo%2BW%2Fv4&X-Amz-Signature=ee20f846d34452b7b6ab55f1dc20d52d67f1b780925182a5bdf9b210d699942e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

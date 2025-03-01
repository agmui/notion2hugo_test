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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YOPJZCD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCnBMDUaNmtPx8wnWq3Pkv4SAj3Rz2qF5p9mZvQFAU4gAIgHBL3iHUYNHmo9qO4T88A5HFTKF2yMOzqgiFgkUKavDUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnEeNAqPoB2ImNkByrcA3kBUgN2wntMrgJwLVT1iElfsPJSHYsfcH1790vLrC%2B%2FzuxwPlSgmlhDDT2iuFwb%2Fu02kc%2BNAvlGZOycXFhxGlk%2FcvwTXCixr3yksjJ9t6F25K3MzJ%2Bp3e4u9YpeqVh5OITh1SsKDy4VnuhxYYR3H53yytBA8b2lv1yXXu%2Bw8E0%2FDkwiUDMQLILipkL%2FgFlMb42S9OkRufXB20c%2FveXoTeGPuZnNNqlWxMjBctEytM%2F6D3WJbnl7q6%2Fo7B4J9A7G9%2BITuv87PKTCYHCRh5HEQ9RIkNNLy1snUWSEMWNtP5p1PpvGEy1dNXo%2FNWSjiyEyqYO2hCGhSedvgIvTp4aWhLJKZ6X1XpMo%2FcFQes19fhKQSch%2BAnXFq6fim6aKuYPeun9ganHPQ0iAoiZag5WhcVAFUA24CVhYU4hafjga%2FhX3MpU50ABOd%2B0jKWQDL%2Fc%2BrM27Loq5EqRJBXcSSI5U5kzQt9HBJkF4VuoqDdHfqaclAezqLli%2BR2A8k%2F7ReDc7SD%2FCBLaflRmGhogrGnjSZOgP5cp%2BqeKDWl3wYc78dw5v2QDK7SAs%2FisVpvxJvwWbYQXk14jcAGbZRG3rxYno2Nu7D4EPgX1U32W5lgBP9FbijtWC0MgcRBvJ3DS1MKfHjb4GOqUBP1k952XnlpNqKIX0jP48ukGI9%2BCUIjD0OiEyv9G9VPd3eAtgqDRcdATrAq93FoPJnEi9n4tBkP0rhZ6MjnIqu84b7js8ygSiO6dpWrOAIrcENSkR4na%2F5rpfH5izoUAUrH7li9TSZiAb0GYiENnvyy1PYjO25cdBDkRhh%2BkD8Z9mM%2BN1IyBr8IJPOFE%2BvSQfXXrch8frHgsdyrvGgatbZG21awdb&X-Amz-Signature=90a98edd38da200931cbb56560c31b8f68e2ca2409020d664baf23a2b4aee8dd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YOPJZCD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCnBMDUaNmtPx8wnWq3Pkv4SAj3Rz2qF5p9mZvQFAU4gAIgHBL3iHUYNHmo9qO4T88A5HFTKF2yMOzqgiFgkUKavDUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnEeNAqPoB2ImNkByrcA3kBUgN2wntMrgJwLVT1iElfsPJSHYsfcH1790vLrC%2B%2FzuxwPlSgmlhDDT2iuFwb%2Fu02kc%2BNAvlGZOycXFhxGlk%2FcvwTXCixr3yksjJ9t6F25K3MzJ%2Bp3e4u9YpeqVh5OITh1SsKDy4VnuhxYYR3H53yytBA8b2lv1yXXu%2Bw8E0%2FDkwiUDMQLILipkL%2FgFlMb42S9OkRufXB20c%2FveXoTeGPuZnNNqlWxMjBctEytM%2F6D3WJbnl7q6%2Fo7B4J9A7G9%2BITuv87PKTCYHCRh5HEQ9RIkNNLy1snUWSEMWNtP5p1PpvGEy1dNXo%2FNWSjiyEyqYO2hCGhSedvgIvTp4aWhLJKZ6X1XpMo%2FcFQes19fhKQSch%2BAnXFq6fim6aKuYPeun9ganHPQ0iAoiZag5WhcVAFUA24CVhYU4hafjga%2FhX3MpU50ABOd%2B0jKWQDL%2Fc%2BrM27Loq5EqRJBXcSSI5U5kzQt9HBJkF4VuoqDdHfqaclAezqLli%2BR2A8k%2F7ReDc7SD%2FCBLaflRmGhogrGnjSZOgP5cp%2BqeKDWl3wYc78dw5v2QDK7SAs%2FisVpvxJvwWbYQXk14jcAGbZRG3rxYno2Nu7D4EPgX1U32W5lgBP9FbijtWC0MgcRBvJ3DS1MKfHjb4GOqUBP1k952XnlpNqKIX0jP48ukGI9%2BCUIjD0OiEyv9G9VPd3eAtgqDRcdATrAq93FoPJnEi9n4tBkP0rhZ6MjnIqu84b7js8ygSiO6dpWrOAIrcENSkR4na%2F5rpfH5izoUAUrH7li9TSZiAb0GYiENnvyy1PYjO25cdBDkRhh%2BkD8Z9mM%2BN1IyBr8IJPOFE%2BvSQfXXrch8frHgsdyrvGgatbZG21awdb&X-Amz-Signature=26a661a62c6aecdfbbfb94b66b8017b5f06a1ccea9ea8d5294a0df5643cb5cf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YOPJZCD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T220247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQCnBMDUaNmtPx8wnWq3Pkv4SAj3Rz2qF5p9mZvQFAU4gAIgHBL3iHUYNHmo9qO4T88A5HFTKF2yMOzqgiFgkUKavDUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKnEeNAqPoB2ImNkByrcA3kBUgN2wntMrgJwLVT1iElfsPJSHYsfcH1790vLrC%2B%2FzuxwPlSgmlhDDT2iuFwb%2Fu02kc%2BNAvlGZOycXFhxGlk%2FcvwTXCixr3yksjJ9t6F25K3MzJ%2Bp3e4u9YpeqVh5OITh1SsKDy4VnuhxYYR3H53yytBA8b2lv1yXXu%2Bw8E0%2FDkwiUDMQLILipkL%2FgFlMb42S9OkRufXB20c%2FveXoTeGPuZnNNqlWxMjBctEytM%2F6D3WJbnl7q6%2Fo7B4J9A7G9%2BITuv87PKTCYHCRh5HEQ9RIkNNLy1snUWSEMWNtP5p1PpvGEy1dNXo%2FNWSjiyEyqYO2hCGhSedvgIvTp4aWhLJKZ6X1XpMo%2FcFQes19fhKQSch%2BAnXFq6fim6aKuYPeun9ganHPQ0iAoiZag5WhcVAFUA24CVhYU4hafjga%2FhX3MpU50ABOd%2B0jKWQDL%2Fc%2BrM27Loq5EqRJBXcSSI5U5kzQt9HBJkF4VuoqDdHfqaclAezqLli%2BR2A8k%2F7ReDc7SD%2FCBLaflRmGhogrGnjSZOgP5cp%2BqeKDWl3wYc78dw5v2QDK7SAs%2FisVpvxJvwWbYQXk14jcAGbZRG3rxYno2Nu7D4EPgX1U32W5lgBP9FbijtWC0MgcRBvJ3DS1MKfHjb4GOqUBP1k952XnlpNqKIX0jP48ukGI9%2BCUIjD0OiEyv9G9VPd3eAtgqDRcdATrAq93FoPJnEi9n4tBkP0rhZ6MjnIqu84b7js8ygSiO6dpWrOAIrcENSkR4na%2F5rpfH5izoUAUrH7li9TSZiAb0GYiENnvyy1PYjO25cdBDkRhh%2BkD8Z9mM%2BN1IyBr8IJPOFE%2BvSQfXXrch8frHgsdyrvGgatbZG21awdb&X-Amz-Signature=0003211282909de01f12e5dbdc75fc5d70bce504a75a3967c50eb1caba025587&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2FYMNYG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHexgCx2bNNq8qzLw%2B3gg2cuDA4JHvmeBR3LDxnKaNFJAiEApSgEy1v4pXf7zyyMZiSXVllHmJZQLKv1c4mwLDEjLM4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNegbMW0oKTuc%2F1uOSrcA9CCK2ayUYvyYPpkY6xIlLod1G5b7BoUh7Wt3C56N18PnSDZry0A1uBvBJObCVbB%2BFGqTyGPTp%2F3gUnYbhlaPDHLVA4h%2BMlmgJVdbnLJpXuMYm6mlPGqm1EncAWHj%2B4a4bJxBPzC7uNLG%2F%2F%2FVsZh7NuV3iHVZLRlqUI4dvIKR4MYNGNPsa%2FzLXHX2ibMbn8Y31EES%2FleQXFNF3G%2FlZRvsv8KYNrwEIugDnGhQ0zet8AaOKh8Kz5BMO%2Fkp%2FgyFnI3Y7nUVmm5BMYpIPdSZc2QMkUcDiIELJRZ68in1lnI5FnGGvRdneVUuYWpEu79dNBFMJz9QN5US1KHQlGQS3tPhJAt9phAQuFZjpeKR%2BONNS2h7xvUA0O22hp6Pjdtj8Rr5RRT1zMeaxx1IouaIbQJ2EMEwZ0XW3NhafZt80id7A8JqgZoZbHEqoEZdDS4oPyXmzYpkNNA%2BHGfLIvwUqgpe3CMzwyoHA9glrlfBavTpTmg%2BsTVz6n4f1N1Om7FCYZq0AelkdB90goXinXImN%2B7%2BobwmbcNhjs9TMGqMJL843KHHiyPNq2%2BoTzptmatmth%2FLHwXPK8j7rwyrgBztPaUxUL510vkxwhIVSVcVrzrs9%2FFZpk09Y%2BygrolJg2GMKfcn8EGOqUBpDco6vWuZ7LFgbA7GCMCK06FHVxRSIPdno6WdKR2kPN9alJYsVUp8F%2FVDnQGjqGZUwSct22Ld%2Fc8oJLrUWYxUTxgV%2ByhZkMXfkJb%2Bz%2BN%2FEOQgfCSMmcCJXPejYhtVRTnehnEI2ZVv3OIn4nPQaBQiErWF9EC%2F%2BpQjkYfUgJJLX0vpafnfXbnLCO86EiGwi8ThcDS1RNujEeDHRtfuhzuioxxrHZP&X-Amz-Signature=2e4563434b876b36d9cf784c42ce502bc01e0d8904b4b44ecb99c2a8eda00d27&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2FYMNYG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHexgCx2bNNq8qzLw%2B3gg2cuDA4JHvmeBR3LDxnKaNFJAiEApSgEy1v4pXf7zyyMZiSXVllHmJZQLKv1c4mwLDEjLM4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNegbMW0oKTuc%2F1uOSrcA9CCK2ayUYvyYPpkY6xIlLod1G5b7BoUh7Wt3C56N18PnSDZry0A1uBvBJObCVbB%2BFGqTyGPTp%2F3gUnYbhlaPDHLVA4h%2BMlmgJVdbnLJpXuMYm6mlPGqm1EncAWHj%2B4a4bJxBPzC7uNLG%2F%2F%2FVsZh7NuV3iHVZLRlqUI4dvIKR4MYNGNPsa%2FzLXHX2ibMbn8Y31EES%2FleQXFNF3G%2FlZRvsv8KYNrwEIugDnGhQ0zet8AaOKh8Kz5BMO%2Fkp%2FgyFnI3Y7nUVmm5BMYpIPdSZc2QMkUcDiIELJRZ68in1lnI5FnGGvRdneVUuYWpEu79dNBFMJz9QN5US1KHQlGQS3tPhJAt9phAQuFZjpeKR%2BONNS2h7xvUA0O22hp6Pjdtj8Rr5RRT1zMeaxx1IouaIbQJ2EMEwZ0XW3NhafZt80id7A8JqgZoZbHEqoEZdDS4oPyXmzYpkNNA%2BHGfLIvwUqgpe3CMzwyoHA9glrlfBavTpTmg%2BsTVz6n4f1N1Om7FCYZq0AelkdB90goXinXImN%2B7%2BobwmbcNhjs9TMGqMJL843KHHiyPNq2%2BoTzptmatmth%2FLHwXPK8j7rwyrgBztPaUxUL510vkxwhIVSVcVrzrs9%2FFZpk09Y%2BygrolJg2GMKfcn8EGOqUBpDco6vWuZ7LFgbA7GCMCK06FHVxRSIPdno6WdKR2kPN9alJYsVUp8F%2FVDnQGjqGZUwSct22Ld%2Fc8oJLrUWYxUTxgV%2ByhZkMXfkJb%2Bz%2BN%2FEOQgfCSMmcCJXPejYhtVRTnehnEI2ZVv3OIn4nPQaBQiErWF9EC%2F%2BpQjkYfUgJJLX0vpafnfXbnLCO86EiGwi8ThcDS1RNujEeDHRtfuhzuioxxrHZP&X-Amz-Signature=a9671050c264fe834147e48d3744a543b9fb3bb6227949511b65426170832b5e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2FYMNYG%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHexgCx2bNNq8qzLw%2B3gg2cuDA4JHvmeBR3LDxnKaNFJAiEApSgEy1v4pXf7zyyMZiSXVllHmJZQLKv1c4mwLDEjLM4q%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDNegbMW0oKTuc%2F1uOSrcA9CCK2ayUYvyYPpkY6xIlLod1G5b7BoUh7Wt3C56N18PnSDZry0A1uBvBJObCVbB%2BFGqTyGPTp%2F3gUnYbhlaPDHLVA4h%2BMlmgJVdbnLJpXuMYm6mlPGqm1EncAWHj%2B4a4bJxBPzC7uNLG%2F%2F%2FVsZh7NuV3iHVZLRlqUI4dvIKR4MYNGNPsa%2FzLXHX2ibMbn8Y31EES%2FleQXFNF3G%2FlZRvsv8KYNrwEIugDnGhQ0zet8AaOKh8Kz5BMO%2Fkp%2FgyFnI3Y7nUVmm5BMYpIPdSZc2QMkUcDiIELJRZ68in1lnI5FnGGvRdneVUuYWpEu79dNBFMJz9QN5US1KHQlGQS3tPhJAt9phAQuFZjpeKR%2BONNS2h7xvUA0O22hp6Pjdtj8Rr5RRT1zMeaxx1IouaIbQJ2EMEwZ0XW3NhafZt80id7A8JqgZoZbHEqoEZdDS4oPyXmzYpkNNA%2BHGfLIvwUqgpe3CMzwyoHA9glrlfBavTpTmg%2BsTVz6n4f1N1Om7FCYZq0AelkdB90goXinXImN%2B7%2BobwmbcNhjs9TMGqMJL843KHHiyPNq2%2BoTzptmatmth%2FLHwXPK8j7rwyrgBztPaUxUL510vkxwhIVSVcVrzrs9%2FFZpk09Y%2BygrolJg2GMKfcn8EGOqUBpDco6vWuZ7LFgbA7GCMCK06FHVxRSIPdno6WdKR2kPN9alJYsVUp8F%2FVDnQGjqGZUwSct22Ld%2Fc8oJLrUWYxUTxgV%2ByhZkMXfkJb%2Bz%2BN%2FEOQgfCSMmcCJXPejYhtVRTnehnEI2ZVv3OIn4nPQaBQiErWF9EC%2F%2BpQjkYfUgJJLX0vpafnfXbnLCO86EiGwi8ThcDS1RNujEeDHRtfuhzuioxxrHZP&X-Amz-Signature=c53f9b904a2d0c1eb547ff89db7ff0200b225ad8628651e89baa5750359c166e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

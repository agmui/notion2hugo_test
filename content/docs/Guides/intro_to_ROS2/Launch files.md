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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2F3F6J%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCUxZ%2FXgIEiEH7oTZ1x%2Fgonju%2BceHpUNs4%2B3T74RisN6gIgGKV83VDnFffDNkfZOJLc7B1jOFEqjkZvqw5PD64kgxwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1lAO%2BQkz81%2BzHCvircA3OVhdAH3Xwhsc%2FjolcfRp3eL0s7foEbnZhVl4u93ptUv8Iu4nhHmHzS2TVO6vqWB9rJ4gTExLNUXV3WUQqcFfn0c9kISiswNSL6XJKBLOTLFBm02ns%2BiWmyATo2Sp6jdtE%2BzMEQni3NgxoJ0mxgglii0TFOpIuOgH%2F3ri4rheL6EI93EdQm7v5Y4tPSlbjAKkSmqJoDkdntPbp3uH1z3myJKBWRvHaYoniPVNCvy3DmVPdztBATech%2Bz2lUN7FqpI7EyR4p163xcn1FbrvACNl4b8OID%2BAxIM%2FkaDpyZ9GcboFpIuC3AZhDa3Sj7w3InPQysAghMgZeGPJOLz%2F%2FkxMy%2B7XcKLl9Tbw3YS5jLlqJHOPVqXuzhgRkWgvRQitIdmo1Z8vX5dlV%2Fnv7d6ZtrucoSlSgDLEspoQPiCIcc6MwROl%2BbFGV0wMoIWwhaEHRMcj%2BH9gyxMYO13RQeoGXQ1pK6x%2BgZ0F%2BU3HKK2q80wanY5nJrb9pL9AEyvcNSO%2BlhTHvSOmsIRFYa7Rez2TM2jJXQ8YZ3vflEE50%2FX%2BxjSCKQ1v%2FpuQq0LOx1oAx9UKap2yaIb1AddpoMbope776gtro5LVRNlFD4cvcyRI6xXQvbAL9GRV%2B%2FZ%2Bnoe6YMNuBkcAGOqUBc%2FQbLFL1j5dUOSEBMiLf1AFtWAWqByARhfa%2FkE%2FNqlwh6YVK%2BqkLCmQ9271fHK%2FcTOmsBoxq%2BA3hRWpv4VDkIPrO0hi7Wgtu98IX6%2BWtjgeHlrp19tqkVcLlkQeuDhF6WvATWMnDG2F7dRBHQrk%2FXGz0ocmekJZE1WsU%2BNagyY1ePJ6o2GTTr%2BUTJUJFfudONo9dvSpUdE3ZUBrjg08YoqOhFweJ&X-Amz-Signature=e78105309bb49fbda5c85fa407aa728437f85132c2b18df23bea03d288ab2313&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2F3F6J%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCUxZ%2FXgIEiEH7oTZ1x%2Fgonju%2BceHpUNs4%2B3T74RisN6gIgGKV83VDnFffDNkfZOJLc7B1jOFEqjkZvqw5PD64kgxwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1lAO%2BQkz81%2BzHCvircA3OVhdAH3Xwhsc%2FjolcfRp3eL0s7foEbnZhVl4u93ptUv8Iu4nhHmHzS2TVO6vqWB9rJ4gTExLNUXV3WUQqcFfn0c9kISiswNSL6XJKBLOTLFBm02ns%2BiWmyATo2Sp6jdtE%2BzMEQni3NgxoJ0mxgglii0TFOpIuOgH%2F3ri4rheL6EI93EdQm7v5Y4tPSlbjAKkSmqJoDkdntPbp3uH1z3myJKBWRvHaYoniPVNCvy3DmVPdztBATech%2Bz2lUN7FqpI7EyR4p163xcn1FbrvACNl4b8OID%2BAxIM%2FkaDpyZ9GcboFpIuC3AZhDa3Sj7w3InPQysAghMgZeGPJOLz%2F%2FkxMy%2B7XcKLl9Tbw3YS5jLlqJHOPVqXuzhgRkWgvRQitIdmo1Z8vX5dlV%2Fnv7d6ZtrucoSlSgDLEspoQPiCIcc6MwROl%2BbFGV0wMoIWwhaEHRMcj%2BH9gyxMYO13RQeoGXQ1pK6x%2BgZ0F%2BU3HKK2q80wanY5nJrb9pL9AEyvcNSO%2BlhTHvSOmsIRFYa7Rez2TM2jJXQ8YZ3vflEE50%2FX%2BxjSCKQ1v%2FpuQq0LOx1oAx9UKap2yaIb1AddpoMbope776gtro5LVRNlFD4cvcyRI6xXQvbAL9GRV%2B%2FZ%2Bnoe6YMNuBkcAGOqUBc%2FQbLFL1j5dUOSEBMiLf1AFtWAWqByARhfa%2FkE%2FNqlwh6YVK%2BqkLCmQ9271fHK%2FcTOmsBoxq%2BA3hRWpv4VDkIPrO0hi7Wgtu98IX6%2BWtjgeHlrp19tqkVcLlkQeuDhF6WvATWMnDG2F7dRBHQrk%2FXGz0ocmekJZE1WsU%2BNagyY1ePJ6o2GTTr%2BUTJUJFfudONo9dvSpUdE3ZUBrjg08YoqOhFweJ&X-Amz-Signature=4662c5c0cdc5939e25cf70d4466659466f3e4130aef6519138f1e9c083c59ddd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI2F3F6J%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCUxZ%2FXgIEiEH7oTZ1x%2Fgonju%2BceHpUNs4%2B3T74RisN6gIgGKV83VDnFffDNkfZOJLc7B1jOFEqjkZvqw5PD64kgxwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1lAO%2BQkz81%2BzHCvircA3OVhdAH3Xwhsc%2FjolcfRp3eL0s7foEbnZhVl4u93ptUv8Iu4nhHmHzS2TVO6vqWB9rJ4gTExLNUXV3WUQqcFfn0c9kISiswNSL6XJKBLOTLFBm02ns%2BiWmyATo2Sp6jdtE%2BzMEQni3NgxoJ0mxgglii0TFOpIuOgH%2F3ri4rheL6EI93EdQm7v5Y4tPSlbjAKkSmqJoDkdntPbp3uH1z3myJKBWRvHaYoniPVNCvy3DmVPdztBATech%2Bz2lUN7FqpI7EyR4p163xcn1FbrvACNl4b8OID%2BAxIM%2FkaDpyZ9GcboFpIuC3AZhDa3Sj7w3InPQysAghMgZeGPJOLz%2F%2FkxMy%2B7XcKLl9Tbw3YS5jLlqJHOPVqXuzhgRkWgvRQitIdmo1Z8vX5dlV%2Fnv7d6ZtrucoSlSgDLEspoQPiCIcc6MwROl%2BbFGV0wMoIWwhaEHRMcj%2BH9gyxMYO13RQeoGXQ1pK6x%2BgZ0F%2BU3HKK2q80wanY5nJrb9pL9AEyvcNSO%2BlhTHvSOmsIRFYa7Rez2TM2jJXQ8YZ3vflEE50%2FX%2BxjSCKQ1v%2FpuQq0LOx1oAx9UKap2yaIb1AddpoMbope776gtro5LVRNlFD4cvcyRI6xXQvbAL9GRV%2B%2FZ%2Bnoe6YMNuBkcAGOqUBc%2FQbLFL1j5dUOSEBMiLf1AFtWAWqByARhfa%2FkE%2FNqlwh6YVK%2BqkLCmQ9271fHK%2FcTOmsBoxq%2BA3hRWpv4VDkIPrO0hi7Wgtu98IX6%2BWtjgeHlrp19tqkVcLlkQeuDhF6WvATWMnDG2F7dRBHQrk%2FXGz0ocmekJZE1WsU%2BNagyY1ePJ6o2GTTr%2BUTJUJFfudONo9dvSpUdE3ZUBrjg08YoqOhFweJ&X-Amz-Signature=b9a7dd1875234b054fc737460c094492685755def02312fed00cd0951e95fde3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

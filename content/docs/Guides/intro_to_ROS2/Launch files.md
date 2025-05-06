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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH3L7VU7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF6%2F5Q6yc1%2Buec7xr3c7g%2BwE4eHrt3oe5c%2FeNAEY2SpgIgRxt2IZzlIspUEDEe7FbHOOEBycvcWW5CIXLtqE0EpAkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJNgh1FUJ%2FVmSS8YJCrcA1jw6vF%2BXMSiRYEcwRQLYGdGOvIOTL38HVj5mvVuEduhaFmEM4lCiEINPTyD5t7RJDgH03ug50FCVnKnB1u7YErDLBqL3ErAVGgR5GrY%2B80%2BJHo9vUJSquS5xxC6ibpB5QD6npBpQxABmulhujNrhX8UqPjN6XLRQ%2FANuCjetGR6Sh2I%2FPr6wXlqfkAlM5sN4%2BzGjPlUYUUYqIa1y3oufnckwNvJ0zkhaZaq5HaJDzx%2FuPIGovlHFz47lgF1CygBL3REyyXa3jHo4QFu5MziOaax5Sw75%2FFwLPwmWJ2fUwGe%2B%2FRb4aF6%2FWtk9YGjxzcVhEVfOoaswT52klQljfZ3TJwYhC4sPwnL5f0waSdXIsKGX6cUY4SZMeuxJEqvDxCCDdadMIz02Gmep%2Bt8jqEzogZFdEM1UeElGfqyDDQ1bqch7QpP%2BrJ1GxUJepDAXycnQXZrmxMD6FENRCuKnD2kTEyJ6WLKWV7B5NWSgPRV9K7SQcC3p%2BcyUwaW5wwpDt2adnVrjlbq%2F7Yx6XYfR1p33wCete2%2FoDDHygCnP%2FId0JeraMJrvIJhcpK0jrE5L%2Fugue4r7fRKk%2FeMo5HTdq3i281dNwlKTDiXxZ0OdLETS0GHX2%2F4vnvmAYjhOtbPMJnV5sAGOqUBCQD4Zcs4CbOzaY4XhPlimVg%2BGTYdOS%2BDEMavENhBZ7n6MpGS1tYTKiwnSVSiOfoNhzJ5dXrAXbnAIk4N1nP2AORABDAlZrNlka7g0JCgtwKdKPfeKGmOwW%2BeJyZERgPK4EfOtQREe7dzPNVMrsq2OEUjP7XECFRDlgdkt9AuYMv8QNs%2F0ZL18pqwXBvfRbmNHoxpLkXs7gJt1plHg4qMBb4Ba19v&X-Amz-Signature=de33b564132df4eaf5eea80745e7512877ac368b9cc70743b88b9c3bb715e51e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH3L7VU7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF6%2F5Q6yc1%2Buec7xr3c7g%2BwE4eHrt3oe5c%2FeNAEY2SpgIgRxt2IZzlIspUEDEe7FbHOOEBycvcWW5CIXLtqE0EpAkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJNgh1FUJ%2FVmSS8YJCrcA1jw6vF%2BXMSiRYEcwRQLYGdGOvIOTL38HVj5mvVuEduhaFmEM4lCiEINPTyD5t7RJDgH03ug50FCVnKnB1u7YErDLBqL3ErAVGgR5GrY%2B80%2BJHo9vUJSquS5xxC6ibpB5QD6npBpQxABmulhujNrhX8UqPjN6XLRQ%2FANuCjetGR6Sh2I%2FPr6wXlqfkAlM5sN4%2BzGjPlUYUUYqIa1y3oufnckwNvJ0zkhaZaq5HaJDzx%2FuPIGovlHFz47lgF1CygBL3REyyXa3jHo4QFu5MziOaax5Sw75%2FFwLPwmWJ2fUwGe%2B%2FRb4aF6%2FWtk9YGjxzcVhEVfOoaswT52klQljfZ3TJwYhC4sPwnL5f0waSdXIsKGX6cUY4SZMeuxJEqvDxCCDdadMIz02Gmep%2Bt8jqEzogZFdEM1UeElGfqyDDQ1bqch7QpP%2BrJ1GxUJepDAXycnQXZrmxMD6FENRCuKnD2kTEyJ6WLKWV7B5NWSgPRV9K7SQcC3p%2BcyUwaW5wwpDt2adnVrjlbq%2F7Yx6XYfR1p33wCete2%2FoDDHygCnP%2FId0JeraMJrvIJhcpK0jrE5L%2Fugue4r7fRKk%2FeMo5HTdq3i281dNwlKTDiXxZ0OdLETS0GHX2%2F4vnvmAYjhOtbPMJnV5sAGOqUBCQD4Zcs4CbOzaY4XhPlimVg%2BGTYdOS%2BDEMavENhBZ7n6MpGS1tYTKiwnSVSiOfoNhzJ5dXrAXbnAIk4N1nP2AORABDAlZrNlka7g0JCgtwKdKPfeKGmOwW%2BeJyZERgPK4EfOtQREe7dzPNVMrsq2OEUjP7XECFRDlgdkt9AuYMv8QNs%2F0ZL18pqwXBvfRbmNHoxpLkXs7gJt1plHg4qMBb4Ba19v&X-Amz-Signature=b267c67114efed1e47c7d0f2d7ac33925b85b15fa8239a0dc7192b013ac675c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH3L7VU7%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF6%2F5Q6yc1%2Buec7xr3c7g%2BwE4eHrt3oe5c%2FeNAEY2SpgIgRxt2IZzlIspUEDEe7FbHOOEBycvcWW5CIXLtqE0EpAkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJNgh1FUJ%2FVmSS8YJCrcA1jw6vF%2BXMSiRYEcwRQLYGdGOvIOTL38HVj5mvVuEduhaFmEM4lCiEINPTyD5t7RJDgH03ug50FCVnKnB1u7YErDLBqL3ErAVGgR5GrY%2B80%2BJHo9vUJSquS5xxC6ibpB5QD6npBpQxABmulhujNrhX8UqPjN6XLRQ%2FANuCjetGR6Sh2I%2FPr6wXlqfkAlM5sN4%2BzGjPlUYUUYqIa1y3oufnckwNvJ0zkhaZaq5HaJDzx%2FuPIGovlHFz47lgF1CygBL3REyyXa3jHo4QFu5MziOaax5Sw75%2FFwLPwmWJ2fUwGe%2B%2FRb4aF6%2FWtk9YGjxzcVhEVfOoaswT52klQljfZ3TJwYhC4sPwnL5f0waSdXIsKGX6cUY4SZMeuxJEqvDxCCDdadMIz02Gmep%2Bt8jqEzogZFdEM1UeElGfqyDDQ1bqch7QpP%2BrJ1GxUJepDAXycnQXZrmxMD6FENRCuKnD2kTEyJ6WLKWV7B5NWSgPRV9K7SQcC3p%2BcyUwaW5wwpDt2adnVrjlbq%2F7Yx6XYfR1p33wCete2%2FoDDHygCnP%2FId0JeraMJrvIJhcpK0jrE5L%2Fugue4r7fRKk%2FeMo5HTdq3i281dNwlKTDiXxZ0OdLETS0GHX2%2F4vnvmAYjhOtbPMJnV5sAGOqUBCQD4Zcs4CbOzaY4XhPlimVg%2BGTYdOS%2BDEMavENhBZ7n6MpGS1tYTKiwnSVSiOfoNhzJ5dXrAXbnAIk4N1nP2AORABDAlZrNlka7g0JCgtwKdKPfeKGmOwW%2BeJyZERgPK4EfOtQREe7dzPNVMrsq2OEUjP7XECFRDlgdkt9AuYMv8QNs%2F0ZL18pqwXBvfRbmNHoxpLkXs7gJt1plHg4qMBb4Ba19v&X-Amz-Signature=442b0fea6a5ce3aadd67479b6aae03f63a65d92874960ab91e13ac9de0e8e840&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

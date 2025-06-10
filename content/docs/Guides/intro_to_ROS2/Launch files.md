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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AQEJYK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBpsCKOJc10VRBnSoNnU1DaohpTo9V%2FogIMbgeY9YLkQIhANf%2FNoLUvB59Ew0QLN4YPKJwUlWMZqv5bs5GWtDewBdKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykYo%2BFSC72K5CALOkq3AMyJsxvROuD8R3dUldPo8Z9Uw%2BuLxripyM1FFyoc%2BSxn3MCQVcZ4Bar3T0aCiscAcbpOiCB684EEZaA5OcuKXyRcG5TF42wapIp5BvanoXwUdWL2Ss1hE5neqkRWKJkKmJLJQ2AjziHIZf%2BXyg9m722GOWlHyTLXGT%2BTpjwQ2Pf2%2ByiMpk112hEnVqxXbiWViesWNhoDrHhxy2AyBi0NXE4cvtGMo190LWQau%2Fttm0LepOs2RqQ9FHm7QOyQ5ETzOIPOIfWXklSnWKm2%2FBQhaRpUlIaFCWDclQoO%2F5u%2ByJ5Oy9T3v0KxkP%2FvAWbHXx8IqezP49YBRGrq0wXbr1P%2B3WpD4MwMeRhZ2f9zEJ3Kf9qxQfFuxoz1J4mwr%2BWumolJx9eE4bmeus1xRhNektaqSvbHwdrCLnbBFaiLECTnZmk9KXgkNHVEJ9toCINEKNOD%2BDJLFeVeTdZoZaQBBYZVi7LMAczsvF8qDop132dtaalj8iqsyAnhYY7hePIdcM6nSyID3mTF0lNSoG%2F6VSWgUBX%2BDwEqjnNdbLluKp6rxtAMgrNRY7Mx7mzAkcgTky7BKLjAE1M1sRGxFI1OtuYyGJPKAyl0VMTY0lFP1gseNgvJHh%2F19pi49qGsuPR2jC9iKLCBjqkAVUF3eYJKgWbFFQHW3A%2BTzW7jFjDvZYsjt0UVIL2mQVJiswYIQ5DBPqIFvAY6WwXQGdaETQGbcqdwMu%2BwsMuoOw6jUYlT7PXKkkLjHTyftk6Zu60pIVajd1Jh0KiuKAGd0ZmGxQKbREOIp0GTkUpGQSz0yH291sGOgTAYAOKa1UZ17O3pIhwFF880SmZ9lKYpuV7IVF2PW%2F1MKIrlm%2BMtl%2F%2Fltds&X-Amz-Signature=f30585451447401e0f3b2bfef8776b7120e99a65927f914b88636dd61c54a451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AQEJYK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBpsCKOJc10VRBnSoNnU1DaohpTo9V%2FogIMbgeY9YLkQIhANf%2FNoLUvB59Ew0QLN4YPKJwUlWMZqv5bs5GWtDewBdKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykYo%2BFSC72K5CALOkq3AMyJsxvROuD8R3dUldPo8Z9Uw%2BuLxripyM1FFyoc%2BSxn3MCQVcZ4Bar3T0aCiscAcbpOiCB684EEZaA5OcuKXyRcG5TF42wapIp5BvanoXwUdWL2Ss1hE5neqkRWKJkKmJLJQ2AjziHIZf%2BXyg9m722GOWlHyTLXGT%2BTpjwQ2Pf2%2ByiMpk112hEnVqxXbiWViesWNhoDrHhxy2AyBi0NXE4cvtGMo190LWQau%2Fttm0LepOs2RqQ9FHm7QOyQ5ETzOIPOIfWXklSnWKm2%2FBQhaRpUlIaFCWDclQoO%2F5u%2ByJ5Oy9T3v0KxkP%2FvAWbHXx8IqezP49YBRGrq0wXbr1P%2B3WpD4MwMeRhZ2f9zEJ3Kf9qxQfFuxoz1J4mwr%2BWumolJx9eE4bmeus1xRhNektaqSvbHwdrCLnbBFaiLECTnZmk9KXgkNHVEJ9toCINEKNOD%2BDJLFeVeTdZoZaQBBYZVi7LMAczsvF8qDop132dtaalj8iqsyAnhYY7hePIdcM6nSyID3mTF0lNSoG%2F6VSWgUBX%2BDwEqjnNdbLluKp6rxtAMgrNRY7Mx7mzAkcgTky7BKLjAE1M1sRGxFI1OtuYyGJPKAyl0VMTY0lFP1gseNgvJHh%2F19pi49qGsuPR2jC9iKLCBjqkAVUF3eYJKgWbFFQHW3A%2BTzW7jFjDvZYsjt0UVIL2mQVJiswYIQ5DBPqIFvAY6WwXQGdaETQGbcqdwMu%2BwsMuoOw6jUYlT7PXKkkLjHTyftk6Zu60pIVajd1Jh0KiuKAGd0ZmGxQKbREOIp0GTkUpGQSz0yH291sGOgTAYAOKa1UZ17O3pIhwFF880SmZ9lKYpuV7IVF2PW%2F1MKIrlm%2BMtl%2F%2Fltds&X-Amz-Signature=79ae14ad679754ec5b35b870a349a8c25e688402bff16fe4d3c3351e0f4606bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5AQEJYK%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T201048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBpsCKOJc10VRBnSoNnU1DaohpTo9V%2FogIMbgeY9YLkQIhANf%2FNoLUvB59Ew0QLN4YPKJwUlWMZqv5bs5GWtDewBdKKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykYo%2BFSC72K5CALOkq3AMyJsxvROuD8R3dUldPo8Z9Uw%2BuLxripyM1FFyoc%2BSxn3MCQVcZ4Bar3T0aCiscAcbpOiCB684EEZaA5OcuKXyRcG5TF42wapIp5BvanoXwUdWL2Ss1hE5neqkRWKJkKmJLJQ2AjziHIZf%2BXyg9m722GOWlHyTLXGT%2BTpjwQ2Pf2%2ByiMpk112hEnVqxXbiWViesWNhoDrHhxy2AyBi0NXE4cvtGMo190LWQau%2Fttm0LepOs2RqQ9FHm7QOyQ5ETzOIPOIfWXklSnWKm2%2FBQhaRpUlIaFCWDclQoO%2F5u%2ByJ5Oy9T3v0KxkP%2FvAWbHXx8IqezP49YBRGrq0wXbr1P%2B3WpD4MwMeRhZ2f9zEJ3Kf9qxQfFuxoz1J4mwr%2BWumolJx9eE4bmeus1xRhNektaqSvbHwdrCLnbBFaiLECTnZmk9KXgkNHVEJ9toCINEKNOD%2BDJLFeVeTdZoZaQBBYZVi7LMAczsvF8qDop132dtaalj8iqsyAnhYY7hePIdcM6nSyID3mTF0lNSoG%2F6VSWgUBX%2BDwEqjnNdbLluKp6rxtAMgrNRY7Mx7mzAkcgTky7BKLjAE1M1sRGxFI1OtuYyGJPKAyl0VMTY0lFP1gseNgvJHh%2F19pi49qGsuPR2jC9iKLCBjqkAVUF3eYJKgWbFFQHW3A%2BTzW7jFjDvZYsjt0UVIL2mQVJiswYIQ5DBPqIFvAY6WwXQGdaETQGbcqdwMu%2BwsMuoOw6jUYlT7PXKkkLjHTyftk6Zu60pIVajd1Jh0KiuKAGd0ZmGxQKbREOIp0GTkUpGQSz0yH291sGOgTAYAOKa1UZ17O3pIhwFF880SmZ9lKYpuV7IVF2PW%2F1MKIrlm%2BMtl%2F%2Fltds&X-Amz-Signature=340c7419136c9ee69e2c9605aad8a501ce4acb4654602548f3b3321981fcbc68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

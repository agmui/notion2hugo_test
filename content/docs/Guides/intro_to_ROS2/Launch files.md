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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QQGEQWT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPyqdspk%2F8aS%2BahSYrNqTIzzHuI5GnsVZE2YE1hFa5MAiEA40rTTkBP6b0sbt5yJJEGFe%2F0PKCg%2B3XgdLRr6i3PtLIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBnLVR8zyXMVfxzKSrcAxrnsbALYhX9VVAaXA9dVwyIPOQKRb3iOcQNT4vWRR%2BcHFbrLaFIpM30AqDtrxcTZI3vbOG7AFc0EKPUVQAH7%2FSAAHimJ2fqyhlLQUDX%2F2mYZFwnW4o4d%2FMejY9gZv45B4ueO2rYf7lNGQbSCXponQTTKdqVNTIxL4m14V6OxOYAL5NIc%2BRJsne7q5e78QAXSpHYD70m41aejEclGrh58Yg4%2BB9XDPVU%2FHHpSDAVv%2B59NjjrMll6Y26Hte1EnTMSj35OiOUW22Fvo9KbE%2Fd4Hyu906qN7JyikadRKNm6ixBDHxMvbXuMK9kMNwexuVHn%2FwfE6Dk9EmF%2BrsXWXzS9PLcmRAYVz%2BSe2%2FV8X0PBs1nDiFURUq3SD3TILRvRv9hN%2Bc4YE9nD8b83ee0s65tOTPP5UOdS0o%2FSuNv34H%2Bm8vIjXMGd41e15n2AM8AzM%2BKTavktEGQg92hlSzEyNIH0AMhQLQT0Cy1m%2F8weziTR%2BdgFsZ654x1AKGh49i8XIApM987Kz9dMXGtp4KmbnbENZz6HVdWaBiSIgqGQLUrIowFIBiHHn47am1An45VIS2OD7Bh4%2BVLhv3mWL1ZA6dBiO6CV5m8zy7da3QHd4cLovGWxzctz8rrvSADunyt8MOHC%2FbwGOqUBZSUthCtUG3mydEUoS2cPX6o2efcA2xUVOkNneHr2YUcXqmn%2FKsI9BX04yIxKpB5oZXQkC%2BWJ%2FrlKL%2FDDpLWvKYM7dZy3yJkxKaalc7XkpOh2evKlug2RlFPZUPuAfRTD8OakintLYYlj%2Fo2onC%2FXyR6X454RJ8wmdX8nUuldFLQAV3XfHKLGshbc2zrKPnRotqcRHOD4f%2Fi%2Bz78wtPGDLcH6g63y&X-Amz-Signature=317f7bb167cff496c6d681b151d5b3a85c618e6c9a7335306db394b8d493f7b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QQGEQWT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPyqdspk%2F8aS%2BahSYrNqTIzzHuI5GnsVZE2YE1hFa5MAiEA40rTTkBP6b0sbt5yJJEGFe%2F0PKCg%2B3XgdLRr6i3PtLIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBnLVR8zyXMVfxzKSrcAxrnsbALYhX9VVAaXA9dVwyIPOQKRb3iOcQNT4vWRR%2BcHFbrLaFIpM30AqDtrxcTZI3vbOG7AFc0EKPUVQAH7%2FSAAHimJ2fqyhlLQUDX%2F2mYZFwnW4o4d%2FMejY9gZv45B4ueO2rYf7lNGQbSCXponQTTKdqVNTIxL4m14V6OxOYAL5NIc%2BRJsne7q5e78QAXSpHYD70m41aejEclGrh58Yg4%2BB9XDPVU%2FHHpSDAVv%2B59NjjrMll6Y26Hte1EnTMSj35OiOUW22Fvo9KbE%2Fd4Hyu906qN7JyikadRKNm6ixBDHxMvbXuMK9kMNwexuVHn%2FwfE6Dk9EmF%2BrsXWXzS9PLcmRAYVz%2BSe2%2FV8X0PBs1nDiFURUq3SD3TILRvRv9hN%2Bc4YE9nD8b83ee0s65tOTPP5UOdS0o%2FSuNv34H%2Bm8vIjXMGd41e15n2AM8AzM%2BKTavktEGQg92hlSzEyNIH0AMhQLQT0Cy1m%2F8weziTR%2BdgFsZ654x1AKGh49i8XIApM987Kz9dMXGtp4KmbnbENZz6HVdWaBiSIgqGQLUrIowFIBiHHn47am1An45VIS2OD7Bh4%2BVLhv3mWL1ZA6dBiO6CV5m8zy7da3QHd4cLovGWxzctz8rrvSADunyt8MOHC%2FbwGOqUBZSUthCtUG3mydEUoS2cPX6o2efcA2xUVOkNneHr2YUcXqmn%2FKsI9BX04yIxKpB5oZXQkC%2BWJ%2FrlKL%2FDDpLWvKYM7dZy3yJkxKaalc7XkpOh2evKlug2RlFPZUPuAfRTD8OakintLYYlj%2Fo2onC%2FXyR6X454RJ8wmdX8nUuldFLQAV3XfHKLGshbc2zrKPnRotqcRHOD4f%2Fi%2Bz78wtPGDLcH6g63y&X-Amz-Signature=b144a06a50740808561e45d6c774271efdd82fb25312cd94bdd1eba5f63cef41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QQGEQWT%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFPyqdspk%2F8aS%2BahSYrNqTIzzHuI5GnsVZE2YE1hFa5MAiEA40rTTkBP6b0sbt5yJJEGFe%2F0PKCg%2B3XgdLRr6i3PtLIqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIBnLVR8zyXMVfxzKSrcAxrnsbALYhX9VVAaXA9dVwyIPOQKRb3iOcQNT4vWRR%2BcHFbrLaFIpM30AqDtrxcTZI3vbOG7AFc0EKPUVQAH7%2FSAAHimJ2fqyhlLQUDX%2F2mYZFwnW4o4d%2FMejY9gZv45B4ueO2rYf7lNGQbSCXponQTTKdqVNTIxL4m14V6OxOYAL5NIc%2BRJsne7q5e78QAXSpHYD70m41aejEclGrh58Yg4%2BB9XDPVU%2FHHpSDAVv%2B59NjjrMll6Y26Hte1EnTMSj35OiOUW22Fvo9KbE%2Fd4Hyu906qN7JyikadRKNm6ixBDHxMvbXuMK9kMNwexuVHn%2FwfE6Dk9EmF%2BrsXWXzS9PLcmRAYVz%2BSe2%2FV8X0PBs1nDiFURUq3SD3TILRvRv9hN%2Bc4YE9nD8b83ee0s65tOTPP5UOdS0o%2FSuNv34H%2Bm8vIjXMGd41e15n2AM8AzM%2BKTavktEGQg92hlSzEyNIH0AMhQLQT0Cy1m%2F8weziTR%2BdgFsZ654x1AKGh49i8XIApM987Kz9dMXGtp4KmbnbENZz6HVdWaBiSIgqGQLUrIowFIBiHHn47am1An45VIS2OD7Bh4%2BVLhv3mWL1ZA6dBiO6CV5m8zy7da3QHd4cLovGWxzctz8rrvSADunyt8MOHC%2FbwGOqUBZSUthCtUG3mydEUoS2cPX6o2efcA2xUVOkNneHr2YUcXqmn%2FKsI9BX04yIxKpB5oZXQkC%2BWJ%2FrlKL%2FDDpLWvKYM7dZy3yJkxKaalc7XkpOh2evKlug2RlFPZUPuAfRTD8OakintLYYlj%2Fo2onC%2FXyR6X454RJ8wmdX8nUuldFLQAV3XfHKLGshbc2zrKPnRotqcRHOD4f%2Fi%2Bz78wtPGDLcH6g63y&X-Amz-Signature=d74dc08e5eff8cbe7884e82feaac9aa941d826e04eaab10cde74afe9ace5aeba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGY3YTNV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAgtz1jZpstSziBwttKvn7XONPl0Rtg%2BljbBcUauG58%2FAiEA9vH94mLKj5AevHuf%2BmSd2rOwlZC%2Fx8RB48ctjwlFfIwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBHDz70%2FeCwHolA2CCrcA%2BbMgZEROLpv%2B2KbO6MFAjVqVL0Qtp3EnmatzFZiX9MmLnSQSq2FFMpeB%2FiYQ9Gy3K6OTlUtuZ5onZWcjUfrPedyR%2FGbR%2F32xjxplusZw6jGGxOTui4BRzxRNxZ%2BBh6LPWh%2B2EzZVElxiPMPXwSMO%2BRZHS8vNHNj1Va6X6nyVLS7My1UKQhFHzlKrkPic9I6SvcCVOfuwbz1QaPeeycq1tjGoowx6RGYJ%2Fimh1XnjPo%2FS6%2FzyLPPFpqrmHI3buY5CU%2B7VsurVEan0JiI2yP9GWOsQiIUFEwMzvv2DpXkrOebA2QP7213vx4DdKU5wWgZ5O7Lfv2nSV4QK%2Fp3O8zTmkyUsyP6vqSRZbu4DOBwGTfyAixAI%2FbjUyLpHoTRP3yApouWnQ%2BpbsIiIL3G8oZu0DPuqM3A3kXMIc%2FJj5IP8QbTFVU66v4jdOymgGkCu3cJB%2BaN3rGNz9BK1UB7C6HLwo96wecsek5bbZ%2FHTNcp134wp%2FMtHKeORIiDXL%2FdSlxahfIri1kf5%2BTlPK9o8iSxTjUbZyy7PBuDuX51LV9rjPaVq8kOjP2QncZVZrUfC13MfB%2BS0aWZ6cwrBNP1bU3QQtLfZN1c4ezywwzalhyGxJNALY7X0kmDvQzDoCTDMImvrcMGOqUBXOa6cK0s5LiXNtvRaVnfrvRtVwocriSt7GUBfzzUEiyd6aokIcda5bn04SA2h%2Fm2FYW6hbJgi6j3BiIytI%2B8%2F%2FraiNbNF2JCGG579KrXhPs%2Fwi0VSqkwYUk%2FrUzXid%2BBIQDrmPtY5iLQdNao13Mg9vCmTygC65WuNARbn2q1kbDgPMKeJaNsp2byiz3xR7bv2YDkLhcE6MeiT8IxPRiKtyFzgYtT&X-Amz-Signature=938e5945c55b1b38242d6dba6afc3ab68b8446cbcafe02a53db7da80991034c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGY3YTNV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAgtz1jZpstSziBwttKvn7XONPl0Rtg%2BljbBcUauG58%2FAiEA9vH94mLKj5AevHuf%2BmSd2rOwlZC%2Fx8RB48ctjwlFfIwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBHDz70%2FeCwHolA2CCrcA%2BbMgZEROLpv%2B2KbO6MFAjVqVL0Qtp3EnmatzFZiX9MmLnSQSq2FFMpeB%2FiYQ9Gy3K6OTlUtuZ5onZWcjUfrPedyR%2FGbR%2F32xjxplusZw6jGGxOTui4BRzxRNxZ%2BBh6LPWh%2B2EzZVElxiPMPXwSMO%2BRZHS8vNHNj1Va6X6nyVLS7My1UKQhFHzlKrkPic9I6SvcCVOfuwbz1QaPeeycq1tjGoowx6RGYJ%2Fimh1XnjPo%2FS6%2FzyLPPFpqrmHI3buY5CU%2B7VsurVEan0JiI2yP9GWOsQiIUFEwMzvv2DpXkrOebA2QP7213vx4DdKU5wWgZ5O7Lfv2nSV4QK%2Fp3O8zTmkyUsyP6vqSRZbu4DOBwGTfyAixAI%2FbjUyLpHoTRP3yApouWnQ%2BpbsIiIL3G8oZu0DPuqM3A3kXMIc%2FJj5IP8QbTFVU66v4jdOymgGkCu3cJB%2BaN3rGNz9BK1UB7C6HLwo96wecsek5bbZ%2FHTNcp134wp%2FMtHKeORIiDXL%2FdSlxahfIri1kf5%2BTlPK9o8iSxTjUbZyy7PBuDuX51LV9rjPaVq8kOjP2QncZVZrUfC13MfB%2BS0aWZ6cwrBNP1bU3QQtLfZN1c4ezywwzalhyGxJNALY7X0kmDvQzDoCTDMImvrcMGOqUBXOa6cK0s5LiXNtvRaVnfrvRtVwocriSt7GUBfzzUEiyd6aokIcda5bn04SA2h%2Fm2FYW6hbJgi6j3BiIytI%2B8%2F%2FraiNbNF2JCGG579KrXhPs%2Fwi0VSqkwYUk%2FrUzXid%2BBIQDrmPtY5iLQdNao13Mg9vCmTygC65WuNARbn2q1kbDgPMKeJaNsp2byiz3xR7bv2YDkLhcE6MeiT8IxPRiKtyFzgYtT&X-Amz-Signature=3551fe61d1b7f5e68e822b26b3c8b017ca3d088053b998c29ccb310e0b3c69e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGY3YTNV%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIAgtz1jZpstSziBwttKvn7XONPl0Rtg%2BljbBcUauG58%2FAiEA9vH94mLKj5AevHuf%2BmSd2rOwlZC%2Fx8RB48ctjwlFfIwq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDBHDz70%2FeCwHolA2CCrcA%2BbMgZEROLpv%2B2KbO6MFAjVqVL0Qtp3EnmatzFZiX9MmLnSQSq2FFMpeB%2FiYQ9Gy3K6OTlUtuZ5onZWcjUfrPedyR%2FGbR%2F32xjxplusZw6jGGxOTui4BRzxRNxZ%2BBh6LPWh%2B2EzZVElxiPMPXwSMO%2BRZHS8vNHNj1Va6X6nyVLS7My1UKQhFHzlKrkPic9I6SvcCVOfuwbz1QaPeeycq1tjGoowx6RGYJ%2Fimh1XnjPo%2FS6%2FzyLPPFpqrmHI3buY5CU%2B7VsurVEan0JiI2yP9GWOsQiIUFEwMzvv2DpXkrOebA2QP7213vx4DdKU5wWgZ5O7Lfv2nSV4QK%2Fp3O8zTmkyUsyP6vqSRZbu4DOBwGTfyAixAI%2FbjUyLpHoTRP3yApouWnQ%2BpbsIiIL3G8oZu0DPuqM3A3kXMIc%2FJj5IP8QbTFVU66v4jdOymgGkCu3cJB%2BaN3rGNz9BK1UB7C6HLwo96wecsek5bbZ%2FHTNcp134wp%2FMtHKeORIiDXL%2FdSlxahfIri1kf5%2BTlPK9o8iSxTjUbZyy7PBuDuX51LV9rjPaVq8kOjP2QncZVZrUfC13MfB%2BS0aWZ6cwrBNP1bU3QQtLfZN1c4ezywwzalhyGxJNALY7X0kmDvQzDoCTDMImvrcMGOqUBXOa6cK0s5LiXNtvRaVnfrvRtVwocriSt7GUBfzzUEiyd6aokIcda5bn04SA2h%2Fm2FYW6hbJgi6j3BiIytI%2B8%2F%2FraiNbNF2JCGG579KrXhPs%2Fwi0VSqkwYUk%2FrUzXid%2BBIQDrmPtY5iLQdNao13Mg9vCmTygC65WuNARbn2q1kbDgPMKeJaNsp2byiz3xR7bv2YDkLhcE6MeiT8IxPRiKtyFzgYtT&X-Amz-Signature=845af46e47f9f90dfcb4806dbb416f40c860efd6ed9becbb20802d4730d2cf69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

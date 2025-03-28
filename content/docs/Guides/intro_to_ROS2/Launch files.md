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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6VP2NY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuq2TvmB8zm0tOYwro4J9nWiZcmqV%2BPa3aOTrg%2BvVO%2FAiEAwHFIUHDWiARfbhAfvMOrgU7yhO%2Fh6GZSresh4VlI0LAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDxl8CL9pNAkDBShTCrcAzIOIadHZY2KbO%2FrgdDLfVg0pjlSMtOCRrkPvi%2BLdiKQicwTlUY1JyVc687jom6TzWgDsVxIkbd0XvarXW2BYhnDs3WUYKGcaABd7Uf8MHY67sSqgHzvKnWa8RhpcXAjRpJbsDYWHstga2oksaBbimT%2FOuAcMlt6ARzcvTowZXJCQJJViEdqrb3O6RIN%2B3Qp6dblqrkoEC6TYISxLPe4yztilKuwDLorzIDPXc6SCSKjdbvxJY%2BOk34HykQf%2FASfHQns%2FLvFjI5KKDc3NM6vbupStQxrEUn5gmrYFvN7xNR%2BurJi0HsD3BMWhTcpz7ir02EIG99qRumjrmqHnpvxvSxAta3RCvmVpxsMGwETvmJhG74PwmJnrhunPHiEJJxtUtr9W4fV1cg8ehpfD03urBno3%2BpWjoieX9t%2FkpCFh25Mxg7I%2FTnGxU0YBXCsr1huw%2Bc1ECQIRD9WHAz55aoX8sktZbRn1qAfOaoqH5s9EpeWyK4h%2Bl32fwqk4zOg1z7Kuq2qO2zYLtbFvECsUhaI0vVpBHutneAx0xbigkS%2BfO%2B09wtsY2Ie9ME9IejXcbRb5SdkSlx44E%2Bh%2FrfxSQmZFyQ3Lb2CWFoGlCf542fEDj7dtYQf8YS48QNpmpsaMNjpmL8GOqUBN8cfcKU6sgGbSeEJpBMv0910IA1WwGCmHIUoQZcLpbfwYKAXrlkKFpq3aI2OFzi54ZCYRb8FAWaQuvlVZK732eOdrRWla1AtFgGtLkuntiF%2BYeQ6bIeUUYRiltMJTHG1Sp0gd32VI6kuVKhr5IeqkWnWe8HEKVgdFTiKbwbaz4Awn067ZYbBHMNlHE4xbWQhjvbq2Qu20XYHo7ruTr1nxaJkdw2G&X-Amz-Signature=3d26394039e29d0f7471596600f321da6da582f5b0ebf6c7bb1618335f82c8d1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6VP2NY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuq2TvmB8zm0tOYwro4J9nWiZcmqV%2BPa3aOTrg%2BvVO%2FAiEAwHFIUHDWiARfbhAfvMOrgU7yhO%2Fh6GZSresh4VlI0LAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDxl8CL9pNAkDBShTCrcAzIOIadHZY2KbO%2FrgdDLfVg0pjlSMtOCRrkPvi%2BLdiKQicwTlUY1JyVc687jom6TzWgDsVxIkbd0XvarXW2BYhnDs3WUYKGcaABd7Uf8MHY67sSqgHzvKnWa8RhpcXAjRpJbsDYWHstga2oksaBbimT%2FOuAcMlt6ARzcvTowZXJCQJJViEdqrb3O6RIN%2B3Qp6dblqrkoEC6TYISxLPe4yztilKuwDLorzIDPXc6SCSKjdbvxJY%2BOk34HykQf%2FASfHQns%2FLvFjI5KKDc3NM6vbupStQxrEUn5gmrYFvN7xNR%2BurJi0HsD3BMWhTcpz7ir02EIG99qRumjrmqHnpvxvSxAta3RCvmVpxsMGwETvmJhG74PwmJnrhunPHiEJJxtUtr9W4fV1cg8ehpfD03urBno3%2BpWjoieX9t%2FkpCFh25Mxg7I%2FTnGxU0YBXCsr1huw%2Bc1ECQIRD9WHAz55aoX8sktZbRn1qAfOaoqH5s9EpeWyK4h%2Bl32fwqk4zOg1z7Kuq2qO2zYLtbFvECsUhaI0vVpBHutneAx0xbigkS%2BfO%2B09wtsY2Ie9ME9IejXcbRb5SdkSlx44E%2Bh%2FrfxSQmZFyQ3Lb2CWFoGlCf542fEDj7dtYQf8YS48QNpmpsaMNjpmL8GOqUBN8cfcKU6sgGbSeEJpBMv0910IA1WwGCmHIUoQZcLpbfwYKAXrlkKFpq3aI2OFzi54ZCYRb8FAWaQuvlVZK732eOdrRWla1AtFgGtLkuntiF%2BYeQ6bIeUUYRiltMJTHG1Sp0gd32VI6kuVKhr5IeqkWnWe8HEKVgdFTiKbwbaz4Awn067ZYbBHMNlHE4xbWQhjvbq2Qu20XYHo7ruTr1nxaJkdw2G&X-Amz-Signature=f7f94af25bc4488aa98a81015b678b489ed53e3c8fe3290fb661b72fea0616ad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z6VP2NY%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBuq2TvmB8zm0tOYwro4J9nWiZcmqV%2BPa3aOTrg%2BvVO%2FAiEAwHFIUHDWiARfbhAfvMOrgU7yhO%2Fh6GZSresh4VlI0LAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDDxl8CL9pNAkDBShTCrcAzIOIadHZY2KbO%2FrgdDLfVg0pjlSMtOCRrkPvi%2BLdiKQicwTlUY1JyVc687jom6TzWgDsVxIkbd0XvarXW2BYhnDs3WUYKGcaABd7Uf8MHY67sSqgHzvKnWa8RhpcXAjRpJbsDYWHstga2oksaBbimT%2FOuAcMlt6ARzcvTowZXJCQJJViEdqrb3O6RIN%2B3Qp6dblqrkoEC6TYISxLPe4yztilKuwDLorzIDPXc6SCSKjdbvxJY%2BOk34HykQf%2FASfHQns%2FLvFjI5KKDc3NM6vbupStQxrEUn5gmrYFvN7xNR%2BurJi0HsD3BMWhTcpz7ir02EIG99qRumjrmqHnpvxvSxAta3RCvmVpxsMGwETvmJhG74PwmJnrhunPHiEJJxtUtr9W4fV1cg8ehpfD03urBno3%2BpWjoieX9t%2FkpCFh25Mxg7I%2FTnGxU0YBXCsr1huw%2Bc1ECQIRD9WHAz55aoX8sktZbRn1qAfOaoqH5s9EpeWyK4h%2Bl32fwqk4zOg1z7Kuq2qO2zYLtbFvECsUhaI0vVpBHutneAx0xbigkS%2BfO%2B09wtsY2Ie9ME9IejXcbRb5SdkSlx44E%2Bh%2FrfxSQmZFyQ3Lb2CWFoGlCf542fEDj7dtYQf8YS48QNpmpsaMNjpmL8GOqUBN8cfcKU6sgGbSeEJpBMv0910IA1WwGCmHIUoQZcLpbfwYKAXrlkKFpq3aI2OFzi54ZCYRb8FAWaQuvlVZK732eOdrRWla1AtFgGtLkuntiF%2BYeQ6bIeUUYRiltMJTHG1Sp0gd32VI6kuVKhr5IeqkWnWe8HEKVgdFTiKbwbaz4Awn067ZYbBHMNlHE4xbWQhjvbq2Qu20XYHo7ruTr1nxaJkdw2G&X-Amz-Signature=dd6a84b833ad39142169d0dfebb6bfdd5e42593ee29c892aa27bb0c711b5f669&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

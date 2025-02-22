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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAAQXAC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChtjlAfMn6YPuXWFDQf%2B76SDyHuRQNMx6sKjWQO%2FEcaQIgcqDtSOlVmVkEs1nE%2Ff4RHSd9ljcGxS28grWIirxteIQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJf69rpY282xE34TmircA8PlscrTN%2B96LgbA9%2F4zrzDcRJM3IGVIjSRN7qfcv%2BE893yu9t4mK6Uf%2FbDKEASM%2BecMYrx5tuU7qnjXh2ZPXvyRHma6pjFdEsc%2FzmbDQ5JFsRC1H4FixIK5vesXaDafCuAN0qk5LdYofJkUaHGt0fWE%2B1je3RqIXA4joxvNlTgJVhnIe4beLm3CkAaEN7TEEFktn%2BN8XGSuxK2%2Fy0HAgmJykOZBFwe7m1C2324Nd75DT9XMxZ%2FzAJBKQIKK0xi1%2B7qZKtEdf2HQAMSaBwEOTOOebgZ9R4FmdaG7D69eamEXoHOqU5lzwt56Kd6%2B8aMHTYp0Mewv60Y%2FHv5A4%2FBd59SveqUV5S%2BA575YRJPJJ4rGNvWobGX4enQdV2%2FKnjHo2wrR6qS%2FtAETY0yz6wLmQJi1hV4j0WlV4jiUQ4ov%2B0JDuGHVgY%2BVE9URFTcjcRH2O7lLVG86mb6wQflgj43vk0G2hNbVH%2BWxA8tU8rWDotFggTV7mj%2BVZfbsOh3M1FRv85kaw9FIX7XmV7B1cXUiaCXKQa%2BKTUtlQMUKOuKjeBwgW0pVOYffNx28m10vAe28AoTrcMJhkUIJH0Smp6cYaqoY%2FDsfI2NhQsUUgo%2FS9BEwzLkc2VkRjOXPaPrTMPzH5b0GOqUBEje%2BwkeIm9PrVnj5M19Ac8T253xJMCoGMgThgpRCAHYgOROrr7Ii06Sg%2FBgQPC%2F1CuZ1wZLwirqvAn1rFzRbYcujPlre1XKFZB9mfEMRBZVqneEF8qv2vLdZymO4gPBVUCIoMWVEr%2BfbDpKR3wI5OG1hFxZevPW08mBmexER7TVJ4%2F28dp0Vnphdu%2B0K7DeYh7Z7VpH8wcTFirFPdUT%2B0fpAiqpl&X-Amz-Signature=26bba4ab320dc6b0d91b3c62e1122207ee60f67a284c19b628164a61a968e11a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAAQXAC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChtjlAfMn6YPuXWFDQf%2B76SDyHuRQNMx6sKjWQO%2FEcaQIgcqDtSOlVmVkEs1nE%2Ff4RHSd9ljcGxS28grWIirxteIQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJf69rpY282xE34TmircA8PlscrTN%2B96LgbA9%2F4zrzDcRJM3IGVIjSRN7qfcv%2BE893yu9t4mK6Uf%2FbDKEASM%2BecMYrx5tuU7qnjXh2ZPXvyRHma6pjFdEsc%2FzmbDQ5JFsRC1H4FixIK5vesXaDafCuAN0qk5LdYofJkUaHGt0fWE%2B1je3RqIXA4joxvNlTgJVhnIe4beLm3CkAaEN7TEEFktn%2BN8XGSuxK2%2Fy0HAgmJykOZBFwe7m1C2324Nd75DT9XMxZ%2FzAJBKQIKK0xi1%2B7qZKtEdf2HQAMSaBwEOTOOebgZ9R4FmdaG7D69eamEXoHOqU5lzwt56Kd6%2B8aMHTYp0Mewv60Y%2FHv5A4%2FBd59SveqUV5S%2BA575YRJPJJ4rGNvWobGX4enQdV2%2FKnjHo2wrR6qS%2FtAETY0yz6wLmQJi1hV4j0WlV4jiUQ4ov%2B0JDuGHVgY%2BVE9URFTcjcRH2O7lLVG86mb6wQflgj43vk0G2hNbVH%2BWxA8tU8rWDotFggTV7mj%2BVZfbsOh3M1FRv85kaw9FIX7XmV7B1cXUiaCXKQa%2BKTUtlQMUKOuKjeBwgW0pVOYffNx28m10vAe28AoTrcMJhkUIJH0Smp6cYaqoY%2FDsfI2NhQsUUgo%2FS9BEwzLkc2VkRjOXPaPrTMPzH5b0GOqUBEje%2BwkeIm9PrVnj5M19Ac8T253xJMCoGMgThgpRCAHYgOROrr7Ii06Sg%2FBgQPC%2F1CuZ1wZLwirqvAn1rFzRbYcujPlre1XKFZB9mfEMRBZVqneEF8qv2vLdZymO4gPBVUCIoMWVEr%2BfbDpKR3wI5OG1hFxZevPW08mBmexER7TVJ4%2F28dp0Vnphdu%2B0K7DeYh7Z7VpH8wcTFirFPdUT%2B0fpAiqpl&X-Amz-Signature=6ef71f3dca26a7866e7ced4f1bafe561a70ae41e589b91148d2502953c98d67e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPAAQXAC%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChtjlAfMn6YPuXWFDQf%2B76SDyHuRQNMx6sKjWQO%2FEcaQIgcqDtSOlVmVkEs1nE%2Ff4RHSd9ljcGxS28grWIirxteIQqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJf69rpY282xE34TmircA8PlscrTN%2B96LgbA9%2F4zrzDcRJM3IGVIjSRN7qfcv%2BE893yu9t4mK6Uf%2FbDKEASM%2BecMYrx5tuU7qnjXh2ZPXvyRHma6pjFdEsc%2FzmbDQ5JFsRC1H4FixIK5vesXaDafCuAN0qk5LdYofJkUaHGt0fWE%2B1je3RqIXA4joxvNlTgJVhnIe4beLm3CkAaEN7TEEFktn%2BN8XGSuxK2%2Fy0HAgmJykOZBFwe7m1C2324Nd75DT9XMxZ%2FzAJBKQIKK0xi1%2B7qZKtEdf2HQAMSaBwEOTOOebgZ9R4FmdaG7D69eamEXoHOqU5lzwt56Kd6%2B8aMHTYp0Mewv60Y%2FHv5A4%2FBd59SveqUV5S%2BA575YRJPJJ4rGNvWobGX4enQdV2%2FKnjHo2wrR6qS%2FtAETY0yz6wLmQJi1hV4j0WlV4jiUQ4ov%2B0JDuGHVgY%2BVE9URFTcjcRH2O7lLVG86mb6wQflgj43vk0G2hNbVH%2BWxA8tU8rWDotFggTV7mj%2BVZfbsOh3M1FRv85kaw9FIX7XmV7B1cXUiaCXKQa%2BKTUtlQMUKOuKjeBwgW0pVOYffNx28m10vAe28AoTrcMJhkUIJH0Smp6cYaqoY%2FDsfI2NhQsUUgo%2FS9BEwzLkc2VkRjOXPaPrTMPzH5b0GOqUBEje%2BwkeIm9PrVnj5M19Ac8T253xJMCoGMgThgpRCAHYgOROrr7Ii06Sg%2FBgQPC%2F1CuZ1wZLwirqvAn1rFzRbYcujPlre1XKFZB9mfEMRBZVqneEF8qv2vLdZymO4gPBVUCIoMWVEr%2BfbDpKR3wI5OG1hFxZevPW08mBmexER7TVJ4%2F28dp0Vnphdu%2B0K7DeYh7Z7VpH8wcTFirFPdUT%2B0fpAiqpl&X-Amz-Signature=4fffe65cc0b7ed2e9f291a09bbb99e071d8fcf2b1d36dc83a61a4248913170ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

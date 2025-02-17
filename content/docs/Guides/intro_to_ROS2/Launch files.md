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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2ZD4V5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC4hSkbftjG18p6ifC4d1v3T%2FfxvxyhvaffHZilUHtDQAiEA7qDT3xueEd4o5HXi7iBvBLZygX%2FD5oimE8a0f4AVaMoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDH6pUH0ZRKjWK4DQRCrcA%2BeRLiFM7LuhIGkz6%2BZx5vDvZFsMF1h%2BF%2FdUdjUqBOd%2FRDBNkqkwjoWLtCaEgpSDbKhm6d5NqdI%2BqUWsk%2BeyR%2B9NnxrZZtvOoSu0Lf6d9InHfB6y7rJct6D8gUxF%2FdRjnW0zP38W5pWmjUAZkXTO8XfdckKdDDHEklSvyWd4freLh%2BhWMYCqap7vAy1V2N0Xd8jxoJvVP%2FQ7DnI9uiJhax2LnrzcZFmfYlnY%2Fl7wxnb4Y92CryL7atjQfJRZbhrADqZoVdM24%2Fz3u3DQ26P%2B8eemtJQzkfIOmponNG0Tp8AfyH3oZqHp2hMc0JIGjbmhQj6srm0GRSTO9AyOULyhaPuGKTB5Pw1zRUnObzxhTIddvWJT9q9aqV1JaPC19TLRMxEkf9LHoB4%2FaWnzmQmC%2BBWziEOzIcFptco3GbkrOtw13VYiei8CmOScok0CtH4E9S0FjxT7MLvsvEv8Zqqoii90xfOWvKlSgDRxzcMMYF3LtY0Z%2B97G8l72Bt8Ijlhc%2BnAbOKseTVWCtDdk8g1MsFKnfBcuGoFI4%2BFn26p2PD%2FYwhqmWIf1eLiFN5FMc6KxkF01Fiw0NUUmYyUEIJgW%2Fo0suvJ1JmDMEJj120uy33FN%2FJL1FOzkO9JqolgWMI%2FLyr0GOqUBE2hG16G9GI%2FN4liCPDiIwfXVFQMXpRm9sjUIr8JVAUoaYPr7NH82BWsAdctfgBQ4rLfyB1qlDUG2xNcB65w9ekPa85bKqh0iCZ1Ll2cerbdWlTN9rVOpLEElBRc5YczjFPLlB26%2FDaffg3h2zJ74BxEPa8NmEn0Pd5tZINOsOtuTge%2F7Ub2OdRSsNSreDbjKRe5HzMDgdOUvIIqZ7mCeFPATPBem&X-Amz-Signature=4cc33aa988e5047fa1bc4b8ddca538b44b0c19d7f633fad3ebc15613c940464d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2ZD4V5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC4hSkbftjG18p6ifC4d1v3T%2FfxvxyhvaffHZilUHtDQAiEA7qDT3xueEd4o5HXi7iBvBLZygX%2FD5oimE8a0f4AVaMoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDH6pUH0ZRKjWK4DQRCrcA%2BeRLiFM7LuhIGkz6%2BZx5vDvZFsMF1h%2BF%2FdUdjUqBOd%2FRDBNkqkwjoWLtCaEgpSDbKhm6d5NqdI%2BqUWsk%2BeyR%2B9NnxrZZtvOoSu0Lf6d9InHfB6y7rJct6D8gUxF%2FdRjnW0zP38W5pWmjUAZkXTO8XfdckKdDDHEklSvyWd4freLh%2BhWMYCqap7vAy1V2N0Xd8jxoJvVP%2FQ7DnI9uiJhax2LnrzcZFmfYlnY%2Fl7wxnb4Y92CryL7atjQfJRZbhrADqZoVdM24%2Fz3u3DQ26P%2B8eemtJQzkfIOmponNG0Tp8AfyH3oZqHp2hMc0JIGjbmhQj6srm0GRSTO9AyOULyhaPuGKTB5Pw1zRUnObzxhTIddvWJT9q9aqV1JaPC19TLRMxEkf9LHoB4%2FaWnzmQmC%2BBWziEOzIcFptco3GbkrOtw13VYiei8CmOScok0CtH4E9S0FjxT7MLvsvEv8Zqqoii90xfOWvKlSgDRxzcMMYF3LtY0Z%2B97G8l72Bt8Ijlhc%2BnAbOKseTVWCtDdk8g1MsFKnfBcuGoFI4%2BFn26p2PD%2FYwhqmWIf1eLiFN5FMc6KxkF01Fiw0NUUmYyUEIJgW%2Fo0suvJ1JmDMEJj120uy33FN%2FJL1FOzkO9JqolgWMI%2FLyr0GOqUBE2hG16G9GI%2FN4liCPDiIwfXVFQMXpRm9sjUIr8JVAUoaYPr7NH82BWsAdctfgBQ4rLfyB1qlDUG2xNcB65w9ekPa85bKqh0iCZ1Ll2cerbdWlTN9rVOpLEElBRc5YczjFPLlB26%2FDaffg3h2zJ74BxEPa8NmEn0Pd5tZINOsOtuTge%2F7Ub2OdRSsNSreDbjKRe5HzMDgdOUvIIqZ7mCeFPATPBem&X-Amz-Signature=e00059d04241012f25b185592b711922f02bdb20314daa02b527a6e60662ddb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2ZD4V5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIC4hSkbftjG18p6ifC4d1v3T%2FfxvxyhvaffHZilUHtDQAiEA7qDT3xueEd4o5HXi7iBvBLZygX%2FD5oimE8a0f4AVaMoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDH6pUH0ZRKjWK4DQRCrcA%2BeRLiFM7LuhIGkz6%2BZx5vDvZFsMF1h%2BF%2FdUdjUqBOd%2FRDBNkqkwjoWLtCaEgpSDbKhm6d5NqdI%2BqUWsk%2BeyR%2B9NnxrZZtvOoSu0Lf6d9InHfB6y7rJct6D8gUxF%2FdRjnW0zP38W5pWmjUAZkXTO8XfdckKdDDHEklSvyWd4freLh%2BhWMYCqap7vAy1V2N0Xd8jxoJvVP%2FQ7DnI9uiJhax2LnrzcZFmfYlnY%2Fl7wxnb4Y92CryL7atjQfJRZbhrADqZoVdM24%2Fz3u3DQ26P%2B8eemtJQzkfIOmponNG0Tp8AfyH3oZqHp2hMc0JIGjbmhQj6srm0GRSTO9AyOULyhaPuGKTB5Pw1zRUnObzxhTIddvWJT9q9aqV1JaPC19TLRMxEkf9LHoB4%2FaWnzmQmC%2BBWziEOzIcFptco3GbkrOtw13VYiei8CmOScok0CtH4E9S0FjxT7MLvsvEv8Zqqoii90xfOWvKlSgDRxzcMMYF3LtY0Z%2B97G8l72Bt8Ijlhc%2BnAbOKseTVWCtDdk8g1MsFKnfBcuGoFI4%2BFn26p2PD%2FYwhqmWIf1eLiFN5FMc6KxkF01Fiw0NUUmYyUEIJgW%2Fo0suvJ1JmDMEJj120uy33FN%2FJL1FOzkO9JqolgWMI%2FLyr0GOqUBE2hG16G9GI%2FN4liCPDiIwfXVFQMXpRm9sjUIr8JVAUoaYPr7NH82BWsAdctfgBQ4rLfyB1qlDUG2xNcB65w9ekPa85bKqh0iCZ1Ll2cerbdWlTN9rVOpLEElBRc5YczjFPLlB26%2FDaffg3h2zJ74BxEPa8NmEn0Pd5tZINOsOtuTge%2F7Ub2OdRSsNSreDbjKRe5HzMDgdOUvIIqZ7mCeFPATPBem&X-Amz-Signature=92cd26dcecdd4736e998956e0d754ef50f36d475309438a0cc560d3138580d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

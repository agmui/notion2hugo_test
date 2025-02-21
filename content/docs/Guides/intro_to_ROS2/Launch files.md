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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RFV2NWC%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCji8L5kbQYkuwb9sGPHroPmlCJxGWEeIkT9VUpeoG%2FQAIhANvsSDR%2BdU3a5f6z%2Fbe184G4A17d%2B0lmDAOC8hQBqH21KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxei7HuKQe5X9oLVsIq3ANKZ%2BlpIprYC2vuVgOvcEJ6xbjjmNb%2F65flEWQnsk8SxkYzfViuClGJI4lNwW3ht%2BpFD%2FQ4Psb1o%2B9iA146avQDdGupdZPEeBhiGxDRx4PAShFO9wrmLcJNKFwePNThLsBiEHBwv9rkPmcAGRHtXC24WsmSYvtl6kKEWSyTXMGT46lRV8A1QqBNxN%2FFs62G9xPL9yLD7dWuWZ%2FPmWavgwgPusCbnkLqz9H7Pl98qU4nsBumeMXWLVG66CS2TLhUrzV2IKKPCiXQHcqBzWbrgHMCIP42T338WC9LP8eUF9pz3UeFP51%2F0XKrNxqHyVEkegm%2FWbQa9lkUQa9FJihWKYZ2zCQhZlaOnemSsGBzvv9bb3FiO9gNEDEEXiTFcWSe1mLbdHc73p1APZ3ebvzP7%2B7WeqbmNjCBE0jqKn1LA4MBc90KdJA2cTYA1ULnmrWFL5UOVnXGD6Xybj2N36pULtg0O2Ax4a66k01qucCSnfA%2FS9I49hlUeRJWTneBregwMl7qZOoQBFVgllcDe6EX0pLByVWs%2FxcqMs36qe%2FFSLHeiA3UXeisXSmJhBD3f3%2FzDrA4qlveOs7tk8xeFkSzaCkieb3tiZmfqJuXNV7fZOCr9DBfyw6yGDPYxJ9N4jCio%2BC9BjqkAWWVpXEkkhklQvczLEIVJYQlDglakUZ2g2ikIDWl%2FpeK2UX4lrDtDkBWQdYaifvZEDyod2mVwfVlC1t5Qm5jHf1mMngJhhSUos0Pfw6e6jAlTSdpfmedjkz2Kfy%2FEd3YHQkDQSKG8yoC6rNmmrGZKPCIa%2Bs5cAKSBOWs7GSqkayLO82N%2BK1C%2BgHxti1lJLzDQLq5IysXxxRKZF8UeYlJHe103VJB&X-Amz-Signature=243791d7e9c00cfd7c7ea4522e203037076bb870bd25c444dd9b59fa3dc3190e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RFV2NWC%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCji8L5kbQYkuwb9sGPHroPmlCJxGWEeIkT9VUpeoG%2FQAIhANvsSDR%2BdU3a5f6z%2Fbe184G4A17d%2B0lmDAOC8hQBqH21KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxei7HuKQe5X9oLVsIq3ANKZ%2BlpIprYC2vuVgOvcEJ6xbjjmNb%2F65flEWQnsk8SxkYzfViuClGJI4lNwW3ht%2BpFD%2FQ4Psb1o%2B9iA146avQDdGupdZPEeBhiGxDRx4PAShFO9wrmLcJNKFwePNThLsBiEHBwv9rkPmcAGRHtXC24WsmSYvtl6kKEWSyTXMGT46lRV8A1QqBNxN%2FFs62G9xPL9yLD7dWuWZ%2FPmWavgwgPusCbnkLqz9H7Pl98qU4nsBumeMXWLVG66CS2TLhUrzV2IKKPCiXQHcqBzWbrgHMCIP42T338WC9LP8eUF9pz3UeFP51%2F0XKrNxqHyVEkegm%2FWbQa9lkUQa9FJihWKYZ2zCQhZlaOnemSsGBzvv9bb3FiO9gNEDEEXiTFcWSe1mLbdHc73p1APZ3ebvzP7%2B7WeqbmNjCBE0jqKn1LA4MBc90KdJA2cTYA1ULnmrWFL5UOVnXGD6Xybj2N36pULtg0O2Ax4a66k01qucCSnfA%2FS9I49hlUeRJWTneBregwMl7qZOoQBFVgllcDe6EX0pLByVWs%2FxcqMs36qe%2FFSLHeiA3UXeisXSmJhBD3f3%2FzDrA4qlveOs7tk8xeFkSzaCkieb3tiZmfqJuXNV7fZOCr9DBfyw6yGDPYxJ9N4jCio%2BC9BjqkAWWVpXEkkhklQvczLEIVJYQlDglakUZ2g2ikIDWl%2FpeK2UX4lrDtDkBWQdYaifvZEDyod2mVwfVlC1t5Qm5jHf1mMngJhhSUos0Pfw6e6jAlTSdpfmedjkz2Kfy%2FEd3YHQkDQSKG8yoC6rNmmrGZKPCIa%2Bs5cAKSBOWs7GSqkayLO82N%2BK1C%2BgHxti1lJLzDQLq5IysXxxRKZF8UeYlJHe103VJB&X-Amz-Signature=4cd34775847b2c1b61f3b333986e5613107fd226ca4a3df63b865aa3008b71e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RFV2NWC%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCji8L5kbQYkuwb9sGPHroPmlCJxGWEeIkT9VUpeoG%2FQAIhANvsSDR%2BdU3a5f6z%2Fbe184G4A17d%2B0lmDAOC8hQBqH21KogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxei7HuKQe5X9oLVsIq3ANKZ%2BlpIprYC2vuVgOvcEJ6xbjjmNb%2F65flEWQnsk8SxkYzfViuClGJI4lNwW3ht%2BpFD%2FQ4Psb1o%2B9iA146avQDdGupdZPEeBhiGxDRx4PAShFO9wrmLcJNKFwePNThLsBiEHBwv9rkPmcAGRHtXC24WsmSYvtl6kKEWSyTXMGT46lRV8A1QqBNxN%2FFs62G9xPL9yLD7dWuWZ%2FPmWavgwgPusCbnkLqz9H7Pl98qU4nsBumeMXWLVG66CS2TLhUrzV2IKKPCiXQHcqBzWbrgHMCIP42T338WC9LP8eUF9pz3UeFP51%2F0XKrNxqHyVEkegm%2FWbQa9lkUQa9FJihWKYZ2zCQhZlaOnemSsGBzvv9bb3FiO9gNEDEEXiTFcWSe1mLbdHc73p1APZ3ebvzP7%2B7WeqbmNjCBE0jqKn1LA4MBc90KdJA2cTYA1ULnmrWFL5UOVnXGD6Xybj2N36pULtg0O2Ax4a66k01qucCSnfA%2FS9I49hlUeRJWTneBregwMl7qZOoQBFVgllcDe6EX0pLByVWs%2FxcqMs36qe%2FFSLHeiA3UXeisXSmJhBD3f3%2FzDrA4qlveOs7tk8xeFkSzaCkieb3tiZmfqJuXNV7fZOCr9DBfyw6yGDPYxJ9N4jCio%2BC9BjqkAWWVpXEkkhklQvczLEIVJYQlDglakUZ2g2ikIDWl%2FpeK2UX4lrDtDkBWQdYaifvZEDyod2mVwfVlC1t5Qm5jHf1mMngJhhSUos0Pfw6e6jAlTSdpfmedjkz2Kfy%2FEd3YHQkDQSKG8yoC6rNmmrGZKPCIa%2Bs5cAKSBOWs7GSqkayLO82N%2BK1C%2BgHxti1lJLzDQLq5IysXxxRKZF8UeYlJHe103VJB&X-Amz-Signature=7d92dc762b1255d35ea9f1eb0dbe2dfec5e6d70d29cca6e0e9363a5eaa34d63b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

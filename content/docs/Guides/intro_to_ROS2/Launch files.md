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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU3JRPQZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdMvFbHqPwzJyAnL%2Ft6ujHa8zfTgamm4R%2B1cXIcxhjFAiEAksqkX%2FQjBba5Z3gVLh1QDe4D91AmyC7EYqT0ftRSIfMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FMAbztUlplWCH6EyrcAxBRpQyypFlbCQm6j3PZ6wNAozgMBBixFBMSCtEcH53lN0%2FLqL%2F4XnojuluBrO1nPccahtghs2lC1I18A8Os3EwJh9RqkqxIby7S0G8ZA%2BZYn72pg2aVIe4XT3M1qgmj4RqmgXuu34io8uhSEhOv%2BfBa4nR38a76rbYGBU5%2BBax1%2B341ulLSX%2F1UKNMJtmFQEziYxKZ7UGP6Cg5yJThxHvuYLFIK3Gxd1m0U0JXhEnHi80O0ZpPQmy9EGoOWroWTRx2hlOyhhJ%2BIp8e%2BhzONtCY2UylL4f1nnmCntseZzVLlg8DQ3zVb8yQoqd1XhPby%2BfR1xnrYASVa71w9zuH8e%2FpFit6ZEsxkb9%2FAeBtIKXa2RL0azCjP88En0Ef0gWOiUHSln%2BZ8E4ixl%2BsVbXSs7Nrfca5iOUDFkjnkBAF12a830rNsBmpBLv3cVkwXLlbdbUiOZMPMvuXaL%2FswFPp%2FbCDYng%2FRA7Rt34ufP%2B5L8Ti9tooW7JZm6DYksoUSVL6JIou7T%2B3ToCdNKh3eZ%2F4zA9srza%2BPmMdk9o%2FfTqrHI9ayctYWnx4G%2F6pdcAaNx91%2F5%2FGo2b370LklYW7rSBYCOqexZ2m%2FEjuuJ0Kma%2BTzrloZcYlYv%2BnCAzg0Duy8MOGL7MEGOqUB1hcFvc93dFE%2FeTB7Ze36pOluikx9%2BV1AMBZBNAou3oq7i50HMXGw9o6QL8lmrPCF4dWMiPQMhrhe32PwBkcEmjqJ7O3FKhYcMYvcz6A%2F8CKMNM7ufw0yhCUhfDPM48Y9rOdlGShj25GQhaq4H0Vyp3%2FDXX3wkrINQm4inbz6a1fLMjmzILiZK2j3l1bS1u23MQRJLtXkqFp5XrLonytAA%2BY8wSIq&X-Amz-Signature=0a73bc7d9f1fb6aa881a7692e10a4a00358481772ad319af8c61b3462c1e9088&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU3JRPQZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdMvFbHqPwzJyAnL%2Ft6ujHa8zfTgamm4R%2B1cXIcxhjFAiEAksqkX%2FQjBba5Z3gVLh1QDe4D91AmyC7EYqT0ftRSIfMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FMAbztUlplWCH6EyrcAxBRpQyypFlbCQm6j3PZ6wNAozgMBBixFBMSCtEcH53lN0%2FLqL%2F4XnojuluBrO1nPccahtghs2lC1I18A8Os3EwJh9RqkqxIby7S0G8ZA%2BZYn72pg2aVIe4XT3M1qgmj4RqmgXuu34io8uhSEhOv%2BfBa4nR38a76rbYGBU5%2BBax1%2B341ulLSX%2F1UKNMJtmFQEziYxKZ7UGP6Cg5yJThxHvuYLFIK3Gxd1m0U0JXhEnHi80O0ZpPQmy9EGoOWroWTRx2hlOyhhJ%2BIp8e%2BhzONtCY2UylL4f1nnmCntseZzVLlg8DQ3zVb8yQoqd1XhPby%2BfR1xnrYASVa71w9zuH8e%2FpFit6ZEsxkb9%2FAeBtIKXa2RL0azCjP88En0Ef0gWOiUHSln%2BZ8E4ixl%2BsVbXSs7Nrfca5iOUDFkjnkBAF12a830rNsBmpBLv3cVkwXLlbdbUiOZMPMvuXaL%2FswFPp%2FbCDYng%2FRA7Rt34ufP%2B5L8Ti9tooW7JZm6DYksoUSVL6JIou7T%2B3ToCdNKh3eZ%2F4zA9srza%2BPmMdk9o%2FfTqrHI9ayctYWnx4G%2F6pdcAaNx91%2F5%2FGo2b370LklYW7rSBYCOqexZ2m%2FEjuuJ0Kma%2BTzrloZcYlYv%2BnCAzg0Duy8MOGL7MEGOqUB1hcFvc93dFE%2FeTB7Ze36pOluikx9%2BV1AMBZBNAou3oq7i50HMXGw9o6QL8lmrPCF4dWMiPQMhrhe32PwBkcEmjqJ7O3FKhYcMYvcz6A%2F8CKMNM7ufw0yhCUhfDPM48Y9rOdlGShj25GQhaq4H0Vyp3%2FDXX3wkrINQm4inbz6a1fLMjmzILiZK2j3l1bS1u23MQRJLtXkqFp5XrLonytAA%2BY8wSIq&X-Amz-Signature=108bf38d11131f829f67f542c1898c3d46d0295c0b3682daa345362c1d6b8502&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU3JRPQZ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T170208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdMvFbHqPwzJyAnL%2Ft6ujHa8zfTgamm4R%2B1cXIcxhjFAiEAksqkX%2FQjBba5Z3gVLh1QDe4D91AmyC7EYqT0ftRSIfMqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2FMAbztUlplWCH6EyrcAxBRpQyypFlbCQm6j3PZ6wNAozgMBBixFBMSCtEcH53lN0%2FLqL%2F4XnojuluBrO1nPccahtghs2lC1I18A8Os3EwJh9RqkqxIby7S0G8ZA%2BZYn72pg2aVIe4XT3M1qgmj4RqmgXuu34io8uhSEhOv%2BfBa4nR38a76rbYGBU5%2BBax1%2B341ulLSX%2F1UKNMJtmFQEziYxKZ7UGP6Cg5yJThxHvuYLFIK3Gxd1m0U0JXhEnHi80O0ZpPQmy9EGoOWroWTRx2hlOyhhJ%2BIp8e%2BhzONtCY2UylL4f1nnmCntseZzVLlg8DQ3zVb8yQoqd1XhPby%2BfR1xnrYASVa71w9zuH8e%2FpFit6ZEsxkb9%2FAeBtIKXa2RL0azCjP88En0Ef0gWOiUHSln%2BZ8E4ixl%2BsVbXSs7Nrfca5iOUDFkjnkBAF12a830rNsBmpBLv3cVkwXLlbdbUiOZMPMvuXaL%2FswFPp%2FbCDYng%2FRA7Rt34ufP%2B5L8Ti9tooW7JZm6DYksoUSVL6JIou7T%2B3ToCdNKh3eZ%2F4zA9srza%2BPmMdk9o%2FfTqrHI9ayctYWnx4G%2F6pdcAaNx91%2F5%2FGo2b370LklYW7rSBYCOqexZ2m%2FEjuuJ0Kma%2BTzrloZcYlYv%2BnCAzg0Duy8MOGL7MEGOqUB1hcFvc93dFE%2FeTB7Ze36pOluikx9%2BV1AMBZBNAou3oq7i50HMXGw9o6QL8lmrPCF4dWMiPQMhrhe32PwBkcEmjqJ7O3FKhYcMYvcz6A%2F8CKMNM7ufw0yhCUhfDPM48Y9rOdlGShj25GQhaq4H0Vyp3%2FDXX3wkrINQm4inbz6a1fLMjmzILiZK2j3l1bS1u23MQRJLtXkqFp5XrLonytAA%2BY8wSIq&X-Amz-Signature=bc993bf9f6f19bb56aa91d74c7cb11cd6cc83a5fd4108b53698f42fec02dc2e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

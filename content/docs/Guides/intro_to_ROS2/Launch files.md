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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664JQYNWE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVRkfehENOZ3bKXV91aUVv8mRAZsI%2B50w0hyHrjgsFHAiEAkFL4SCGAeuE7HHVgR7T5qN4SY6MU03gk0qywnA0sdGUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGoICH%2FgQGZ6Wa%2BYLCrcAw0dNJCWGrCwdN%2FsolyiWFv5FtkO%2FhSDBY1uySWqK1%2BLyLSAVZZPQ%2BDXEXDBDydzEZkuWUvFW1RLNnZcNJ8JJa628RS4FaXeVSwt4Zb9A5xALNjI%2FS5dhq6zASN0qn%2B0w%2Fs9R3PVuuTE4NO58PClUefcmTqX0KM9f9EHarMCv%2FAQFW9Na5pwsLVLge%2F%2BFmPk3sqbvKmHIREy300ScZlow5%2BTtt5QCJAJOJzVXETAvyqF2QZVNA%2FSE2keg%2BtSL7JKQqiBsVWk4mZ5Rm6UMiDK%2FH85RTjifJqTumGjR8HkQ0ZLIULyaUjAhJuZyi2wQ7RF1H4Rdmclb8vv9Mp18TbtbhKW7s%2BWuruGxquj6owBvwsm2eP7skZcoWh0v3qi7jLeIBoJIVBa7b9PQxMl8sVWxuHixwjefXxrq48m37q1kPsQNGbLg3lyoqCOBk5k2R9rGF6FW2l01z%2FNrmHHaQkmBHqE8zisx1YtwSldgabXxwDerDSmIKxnznS6ke9X31DLdq9NIwmeyGK7m%2FlGK6xAK8cT%2FSWcNjSTwoJCF7zOEt0wbaJT12JeaDZi3bj940f9zfMuvR3sGXUvTu%2BzlBooYclAjcTII%2BdZZjaKn97O6kyJUMv%2BbBXpDJV0oVfIML7Cxr8GOqUBZzpfClCtNolqQLV6Fodv%2FxzUkYJLfhDh2ZD%2B7cM3TX4rWIW8pPqz%2BB90R1RdihecuzV%2BB6rqJZcGtDQ8CN6WiWKkxSixRiv9NhvGrvshfrx%2BvBMcurvKHn%2BiLLunrMo94bvo6yHsYr%2FoAUUnbaiID%2B9ngsLY1zEidSq8ANabdF3HuTvg2F9awqKsIQoKf5fO3IL7aSRYnZA7tDGcyKDW3PA4YC3q&X-Amz-Signature=655a1396600616edd1314bf51fe9dfe6d70d0d8eb788e62768ff1515e791753e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664JQYNWE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVRkfehENOZ3bKXV91aUVv8mRAZsI%2B50w0hyHrjgsFHAiEAkFL4SCGAeuE7HHVgR7T5qN4SY6MU03gk0qywnA0sdGUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGoICH%2FgQGZ6Wa%2BYLCrcAw0dNJCWGrCwdN%2FsolyiWFv5FtkO%2FhSDBY1uySWqK1%2BLyLSAVZZPQ%2BDXEXDBDydzEZkuWUvFW1RLNnZcNJ8JJa628RS4FaXeVSwt4Zb9A5xALNjI%2FS5dhq6zASN0qn%2B0w%2Fs9R3PVuuTE4NO58PClUefcmTqX0KM9f9EHarMCv%2FAQFW9Na5pwsLVLge%2F%2BFmPk3sqbvKmHIREy300ScZlow5%2BTtt5QCJAJOJzVXETAvyqF2QZVNA%2FSE2keg%2BtSL7JKQqiBsVWk4mZ5Rm6UMiDK%2FH85RTjifJqTumGjR8HkQ0ZLIULyaUjAhJuZyi2wQ7RF1H4Rdmclb8vv9Mp18TbtbhKW7s%2BWuruGxquj6owBvwsm2eP7skZcoWh0v3qi7jLeIBoJIVBa7b9PQxMl8sVWxuHixwjefXxrq48m37q1kPsQNGbLg3lyoqCOBk5k2R9rGF6FW2l01z%2FNrmHHaQkmBHqE8zisx1YtwSldgabXxwDerDSmIKxnznS6ke9X31DLdq9NIwmeyGK7m%2FlGK6xAK8cT%2FSWcNjSTwoJCF7zOEt0wbaJT12JeaDZi3bj940f9zfMuvR3sGXUvTu%2BzlBooYclAjcTII%2BdZZjaKn97O6kyJUMv%2BbBXpDJV0oVfIML7Cxr8GOqUBZzpfClCtNolqQLV6Fodv%2FxzUkYJLfhDh2ZD%2B7cM3TX4rWIW8pPqz%2BB90R1RdihecuzV%2BB6rqJZcGtDQ8CN6WiWKkxSixRiv9NhvGrvshfrx%2BvBMcurvKHn%2BiLLunrMo94bvo6yHsYr%2FoAUUnbaiID%2B9ngsLY1zEidSq8ANabdF3HuTvg2F9awqKsIQoKf5fO3IL7aSRYnZA7tDGcyKDW3PA4YC3q&X-Amz-Signature=5ab35b157e8d1a3a31c18428ad53f137f55fdfcf057e0acda5b5f15f8f495f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664JQYNWE%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVRkfehENOZ3bKXV91aUVv8mRAZsI%2B50w0hyHrjgsFHAiEAkFL4SCGAeuE7HHVgR7T5qN4SY6MU03gk0qywnA0sdGUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDGoICH%2FgQGZ6Wa%2BYLCrcAw0dNJCWGrCwdN%2FsolyiWFv5FtkO%2FhSDBY1uySWqK1%2BLyLSAVZZPQ%2BDXEXDBDydzEZkuWUvFW1RLNnZcNJ8JJa628RS4FaXeVSwt4Zb9A5xALNjI%2FS5dhq6zASN0qn%2B0w%2Fs9R3PVuuTE4NO58PClUefcmTqX0KM9f9EHarMCv%2FAQFW9Na5pwsLVLge%2F%2BFmPk3sqbvKmHIREy300ScZlow5%2BTtt5QCJAJOJzVXETAvyqF2QZVNA%2FSE2keg%2BtSL7JKQqiBsVWk4mZ5Rm6UMiDK%2FH85RTjifJqTumGjR8HkQ0ZLIULyaUjAhJuZyi2wQ7RF1H4Rdmclb8vv9Mp18TbtbhKW7s%2BWuruGxquj6owBvwsm2eP7skZcoWh0v3qi7jLeIBoJIVBa7b9PQxMl8sVWxuHixwjefXxrq48m37q1kPsQNGbLg3lyoqCOBk5k2R9rGF6FW2l01z%2FNrmHHaQkmBHqE8zisx1YtwSldgabXxwDerDSmIKxnznS6ke9X31DLdq9NIwmeyGK7m%2FlGK6xAK8cT%2FSWcNjSTwoJCF7zOEt0wbaJT12JeaDZi3bj940f9zfMuvR3sGXUvTu%2BzlBooYclAjcTII%2BdZZjaKn97O6kyJUMv%2BbBXpDJV0oVfIML7Cxr8GOqUBZzpfClCtNolqQLV6Fodv%2FxzUkYJLfhDh2ZD%2B7cM3TX4rWIW8pPqz%2BB90R1RdihecuzV%2BB6rqJZcGtDQ8CN6WiWKkxSixRiv9NhvGrvshfrx%2BvBMcurvKHn%2BiLLunrMo94bvo6yHsYr%2FoAUUnbaiID%2B9ngsLY1zEidSq8ANabdF3HuTvg2F9awqKsIQoKf5fO3IL7aSRYnZA7tDGcyKDW3PA4YC3q&X-Amz-Signature=6f558cac9ee23e324833b7ea0094aa10c73f3fe90b1bca525a56c68545acdfcd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

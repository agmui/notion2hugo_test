---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZKF7RU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICrsGRMX%2BK2DLH8A4uzx2C%2BfRWTSS8qGaSBssKYNx5%2BNAiAFHA91pLnQ%2F5W5%2FXrjSzW%2F%2B01sbfYQ1Ql8YEv%2B8HglwSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPaf5Qx68v40LyBGKtwDycoKzP2%2BftymjOCrUzIt%2B8bBrCcvNfILfX0rPKNUmSELkv3FwV%2BqarcCFheFu5aw43wXSZ2Iv%2BMANrbYpXEgxwgIMV5stn6yWfkLvg0Pmd0uiJUNo%2Fzef17tBl%2BBMToqIdIqCgZNFBGtp8I85QEDAMMwnubrgdIFME3UyUScMZGKDbpqrPP2kF5lV5VAuQiM4aaMlUdynbrQCjpZHqspijiOxLPbeuioqcdtVCdLp5kz7Zsylem1Fa1fS8xPgF287bvCJu9BvYu7VQkviF4o%2Fl2ScK6%2FVoRlm1zpHtl3Tvh8Pr7vMrnMucR7XhWRhAh%2Bz2XPKS6KMTqwxxaW4Yr1XvqG%2FySIhEgpqMB%2BXwpYDqTTZg%2BEOp024c8cdbT7Cfw9gZ8paZYcYU7D7Ga5m7sPpSoiq%2BfPZPrVs1p51rff5wGXrhQRCGDSG3gJ9d7butb9DddpgCnDh%2BenpDRF9nsUl5Q9Qw2Ajwo3Mwnv0flZ1qu9Q%2BscszLdP8%2Fyw7fmktUPsG4vJ5EitOcRndVsISu6R1%2BwDA%2FC1YajxZ0eL1FLdB9XgLPzczpJV0n0F61PZ7PeY8pA0VfL3iItY7JPArhY8YUIi%2F1jRSfzwzp%2Fysh0Ri9eWuZ3blWPd04tHUMwuN%2FZxAY6pgF8ORsTM1FZV0oMWdoNLcqHBDWzew53gh78STdUe0%2FfBR4khRdmZJ2fJ5kOuE5wiYtRY9WCqZ494mBtKbVFBHYPsjVkSNau51dzePixE2XzHW1e4%2FDV46dHmfwKPK0uYzjEfcyRwiiLEYl8or5XsTxYxmVk%2B7kiC8PGcuQYEhrdk0f6E3ynz0MlCNXGHlw6e%2BW2kaAIefhLsk0aYPLPKVr3RJV9yzhX&X-Amz-Signature=bad3599b6927bca72ec621e6d56fdc29aa0c8d3771eebf712c3f1409b98eb010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZKF7RU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICrsGRMX%2BK2DLH8A4uzx2C%2BfRWTSS8qGaSBssKYNx5%2BNAiAFHA91pLnQ%2F5W5%2FXrjSzW%2F%2B01sbfYQ1Ql8YEv%2B8HglwSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPaf5Qx68v40LyBGKtwDycoKzP2%2BftymjOCrUzIt%2B8bBrCcvNfILfX0rPKNUmSELkv3FwV%2BqarcCFheFu5aw43wXSZ2Iv%2BMANrbYpXEgxwgIMV5stn6yWfkLvg0Pmd0uiJUNo%2Fzef17tBl%2BBMToqIdIqCgZNFBGtp8I85QEDAMMwnubrgdIFME3UyUScMZGKDbpqrPP2kF5lV5VAuQiM4aaMlUdynbrQCjpZHqspijiOxLPbeuioqcdtVCdLp5kz7Zsylem1Fa1fS8xPgF287bvCJu9BvYu7VQkviF4o%2Fl2ScK6%2FVoRlm1zpHtl3Tvh8Pr7vMrnMucR7XhWRhAh%2Bz2XPKS6KMTqwxxaW4Yr1XvqG%2FySIhEgpqMB%2BXwpYDqTTZg%2BEOp024c8cdbT7Cfw9gZ8paZYcYU7D7Ga5m7sPpSoiq%2BfPZPrVs1p51rff5wGXrhQRCGDSG3gJ9d7butb9DddpgCnDh%2BenpDRF9nsUl5Q9Qw2Ajwo3Mwnv0flZ1qu9Q%2BscszLdP8%2Fyw7fmktUPsG4vJ5EitOcRndVsISu6R1%2BwDA%2FC1YajxZ0eL1FLdB9XgLPzczpJV0n0F61PZ7PeY8pA0VfL3iItY7JPArhY8YUIi%2F1jRSfzwzp%2Fysh0Ri9eWuZ3blWPd04tHUMwuN%2FZxAY6pgF8ORsTM1FZV0oMWdoNLcqHBDWzew53gh78STdUe0%2FfBR4khRdmZJ2fJ5kOuE5wiYtRY9WCqZ494mBtKbVFBHYPsjVkSNau51dzePixE2XzHW1e4%2FDV46dHmfwKPK0uYzjEfcyRwiiLEYl8or5XsTxYxmVk%2B7kiC8PGcuQYEhrdk0f6E3ynz0MlCNXGHlw6e%2BW2kaAIefhLsk0aYPLPKVr3RJV9yzhX&X-Amz-Signature=c82581ec25bb023c28a1aa62838bc5743080d6c472c6b7d7094db81950200340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZKF7RU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCICrsGRMX%2BK2DLH8A4uzx2C%2BfRWTSS8qGaSBssKYNx5%2BNAiAFHA91pLnQ%2F5W5%2FXrjSzW%2F%2B01sbfYQ1Ql8YEv%2B8HglwSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzPaf5Qx68v40LyBGKtwDycoKzP2%2BftymjOCrUzIt%2B8bBrCcvNfILfX0rPKNUmSELkv3FwV%2BqarcCFheFu5aw43wXSZ2Iv%2BMANrbYpXEgxwgIMV5stn6yWfkLvg0Pmd0uiJUNo%2Fzef17tBl%2BBMToqIdIqCgZNFBGtp8I85QEDAMMwnubrgdIFME3UyUScMZGKDbpqrPP2kF5lV5VAuQiM4aaMlUdynbrQCjpZHqspijiOxLPbeuioqcdtVCdLp5kz7Zsylem1Fa1fS8xPgF287bvCJu9BvYu7VQkviF4o%2Fl2ScK6%2FVoRlm1zpHtl3Tvh8Pr7vMrnMucR7XhWRhAh%2Bz2XPKS6KMTqwxxaW4Yr1XvqG%2FySIhEgpqMB%2BXwpYDqTTZg%2BEOp024c8cdbT7Cfw9gZ8paZYcYU7D7Ga5m7sPpSoiq%2BfPZPrVs1p51rff5wGXrhQRCGDSG3gJ9d7butb9DddpgCnDh%2BenpDRF9nsUl5Q9Qw2Ajwo3Mwnv0flZ1qu9Q%2BscszLdP8%2Fyw7fmktUPsG4vJ5EitOcRndVsISu6R1%2BwDA%2FC1YajxZ0eL1FLdB9XgLPzczpJV0n0F61PZ7PeY8pA0VfL3iItY7JPArhY8YUIi%2F1jRSfzwzp%2Fysh0Ri9eWuZ3blWPd04tHUMwuN%2FZxAY6pgF8ORsTM1FZV0oMWdoNLcqHBDWzew53gh78STdUe0%2FfBR4khRdmZJ2fJ5kOuE5wiYtRY9WCqZ494mBtKbVFBHYPsjVkSNau51dzePixE2XzHW1e4%2FDV46dHmfwKPK0uYzjEfcyRwiiLEYl8or5XsTxYxmVk%2B7kiC8PGcuQYEhrdk0f6E3ynz0MlCNXGHlw6e%2BW2kaAIefhLsk0aYPLPKVr3RJV9yzhX&X-Amz-Signature=4450aefce0a4cce5c0d135c2118e46f4955ffc9060e7efbc4c38164e1b8c15e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

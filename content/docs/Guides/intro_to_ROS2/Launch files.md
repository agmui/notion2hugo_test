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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OFR7RTX%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFb4lETqUaIxsCOhTPa6jOv4KzOYoKHsFuq27Neq0ulDAiBIuCnaCCD1euPWBFZMrgdB2NJOJfywZN0k8PJdHLrXNyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWFBh%2F3B7oXv5M5XTKtwDUF5eQO%2BFauMIFMNHKiS8srn0P6ijYHeqNNAh4FQ%2F6BNKTyCcQL3cN0Y4Pf7FTCZbrN90EBah3r1ZpEeRv8PD5M52IZmcSt5SJfO6C067XnDVjZy4HbSInSNfQaMUrTGL%2BpUytHo4FP2be99pdTphrp3h4AIDyxgPxDLUNFgnjzhmUMXBJGJPdks8uEVziRxDHdP8%2B1d5vgWwOffXBHJm7bOoxITMk8sjUHNxZMtEneIgGawQxwz%2BD9v1iVaxMgMAWqw7Ep73oWl4SfDAHB4guGNoHocG5PUTOmDjHtPfKqJHTtd%2BfEHIAvBVJv1ihE5MrhP9sgd6EcG%2FUGxmeIeVHQ%2F0SYKghq6XbbbXFts1lhOabFLeDWcAR2GUHwB3DNxB1NW8CTqdyBD7rfhgkfkAuUcX4S9cbFv3Nb07xwky8JE6gJsjHP%2BSZAoEQl26Vj8FKElNkh79akmX5GBjoKjSkYIJNokdZhFqB7xQ1pAs%2BmIKM2aBd%2FOFfhypppF5p%2BmBxYcbi2gLwM2bzBuWqW0lGpXt%2BBAVJH4jMxgVQM6CRHcdyRpob%2FoogFck1SoARQ%2BLnQA76Mt6hvrlmwlse72hRcbXOaRXXMhqbVgRZe2DL3QJaOqeL4Jw3CfNY%2FYws%2FqhygY6pgEl6ubj1nI1wq7GAJgMhQDPY5xLMvz9l5nZQpALJ6wZPj8GHs1lNXv%2BOXMRk7QKQOScOZrpBm%2Fl%2FZfWVF7bDIEPzKkBjz4E88V4qM8vxO7S14vTURZK4Yx6pstP5oHb4EVihquQu5IMol75HHo2bBKtxiWfn47tiwLXjyiLBzZJfGudgS41xCs0vEFUScWZekvCQkP4kHxXdt3T8YYOKR8tXADz0dQ%2F&X-Amz-Signature=52ae07a56b56fc99b527f91e0b6d06a7fb98ff9fffeecea8702dd267fd44c3c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OFR7RTX%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFb4lETqUaIxsCOhTPa6jOv4KzOYoKHsFuq27Neq0ulDAiBIuCnaCCD1euPWBFZMrgdB2NJOJfywZN0k8PJdHLrXNyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWFBh%2F3B7oXv5M5XTKtwDUF5eQO%2BFauMIFMNHKiS8srn0P6ijYHeqNNAh4FQ%2F6BNKTyCcQL3cN0Y4Pf7FTCZbrN90EBah3r1ZpEeRv8PD5M52IZmcSt5SJfO6C067XnDVjZy4HbSInSNfQaMUrTGL%2BpUytHo4FP2be99pdTphrp3h4AIDyxgPxDLUNFgnjzhmUMXBJGJPdks8uEVziRxDHdP8%2B1d5vgWwOffXBHJm7bOoxITMk8sjUHNxZMtEneIgGawQxwz%2BD9v1iVaxMgMAWqw7Ep73oWl4SfDAHB4guGNoHocG5PUTOmDjHtPfKqJHTtd%2BfEHIAvBVJv1ihE5MrhP9sgd6EcG%2FUGxmeIeVHQ%2F0SYKghq6XbbbXFts1lhOabFLeDWcAR2GUHwB3DNxB1NW8CTqdyBD7rfhgkfkAuUcX4S9cbFv3Nb07xwky8JE6gJsjHP%2BSZAoEQl26Vj8FKElNkh79akmX5GBjoKjSkYIJNokdZhFqB7xQ1pAs%2BmIKM2aBd%2FOFfhypppF5p%2BmBxYcbi2gLwM2bzBuWqW0lGpXt%2BBAVJH4jMxgVQM6CRHcdyRpob%2FoogFck1SoARQ%2BLnQA76Mt6hvrlmwlse72hRcbXOaRXXMhqbVgRZe2DL3QJaOqeL4Jw3CfNY%2FYws%2FqhygY6pgEl6ubj1nI1wq7GAJgMhQDPY5xLMvz9l5nZQpALJ6wZPj8GHs1lNXv%2BOXMRk7QKQOScOZrpBm%2Fl%2FZfWVF7bDIEPzKkBjz4E88V4qM8vxO7S14vTURZK4Yx6pstP5oHb4EVihquQu5IMol75HHo2bBKtxiWfn47tiwLXjyiLBzZJfGudgS41xCs0vEFUScWZekvCQkP4kHxXdt3T8YYOKR8tXADz0dQ%2F&X-Amz-Signature=2a10e0a45e52d6411e5b48545f687a83ec0b4680918f9fba54f99bbfd02db277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OFR7RTX%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFb4lETqUaIxsCOhTPa6jOv4KzOYoKHsFuq27Neq0ulDAiBIuCnaCCD1euPWBFZMrgdB2NJOJfywZN0k8PJdHLrXNyqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWFBh%2F3B7oXv5M5XTKtwDUF5eQO%2BFauMIFMNHKiS8srn0P6ijYHeqNNAh4FQ%2F6BNKTyCcQL3cN0Y4Pf7FTCZbrN90EBah3r1ZpEeRv8PD5M52IZmcSt5SJfO6C067XnDVjZy4HbSInSNfQaMUrTGL%2BpUytHo4FP2be99pdTphrp3h4AIDyxgPxDLUNFgnjzhmUMXBJGJPdks8uEVziRxDHdP8%2B1d5vgWwOffXBHJm7bOoxITMk8sjUHNxZMtEneIgGawQxwz%2BD9v1iVaxMgMAWqw7Ep73oWl4SfDAHB4guGNoHocG5PUTOmDjHtPfKqJHTtd%2BfEHIAvBVJv1ihE5MrhP9sgd6EcG%2FUGxmeIeVHQ%2F0SYKghq6XbbbXFts1lhOabFLeDWcAR2GUHwB3DNxB1NW8CTqdyBD7rfhgkfkAuUcX4S9cbFv3Nb07xwky8JE6gJsjHP%2BSZAoEQl26Vj8FKElNkh79akmX5GBjoKjSkYIJNokdZhFqB7xQ1pAs%2BmIKM2aBd%2FOFfhypppF5p%2BmBxYcbi2gLwM2bzBuWqW0lGpXt%2BBAVJH4jMxgVQM6CRHcdyRpob%2FoogFck1SoARQ%2BLnQA76Mt6hvrlmwlse72hRcbXOaRXXMhqbVgRZe2DL3QJaOqeL4Jw3CfNY%2FYws%2FqhygY6pgEl6ubj1nI1wq7GAJgMhQDPY5xLMvz9l5nZQpALJ6wZPj8GHs1lNXv%2BOXMRk7QKQOScOZrpBm%2Fl%2FZfWVF7bDIEPzKkBjz4E88V4qM8vxO7S14vTURZK4Yx6pstP5oHb4EVihquQu5IMol75HHo2bBKtxiWfn47tiwLXjyiLBzZJfGudgS41xCs0vEFUScWZekvCQkP4kHxXdt3T8YYOKR8tXADz0dQ%2F&X-Amz-Signature=8bfcf22148fe2f6c6fc076ce8a83dd27ba2884a3636ea20125f8c8a766c64fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

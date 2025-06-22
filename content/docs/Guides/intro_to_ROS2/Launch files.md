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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NKD4W7Z%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIF5NzOBDwqvsl43KVMigl%2F4%2Bw3rg9OVlwiwTVpmegl4CAiEAmgl%2Bq%2BeBNltusZGKGPj0A15sE8u3mpHpHAw%2F%2BUfUbvMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4AvjRCLHqWhlJfFyrcA%2Fa4S3VRZl5VNquExZAW3bi1XMiDBQpCuY%2By409R%2FyfnOYCbG4GNqhSAhoi6reh%2FvtA7kAbi%2B%2BIXMYCAQPqbv1moNMMSjy%2FEnn0J9QzhBED8rJtxTc0fy2TJlwrlXVoNNOPZHCzHtn8oEt2rjQl65YsaF5CNzWUS8w7r0y4FXP3HXFmEIwLzLVZJ3j6NjVQeUD%2B4fv4IaH0v44iVyiqBYJa%2F8L2TWmxnxW9zPs0FQimLCX6TRuKUFqj%2FVKwXWIbJ36na0AwBS2rGB1BeELOEomHPxO6zRf7R9vfxb6aG4cbVYSybb38pEdO1y%2BhPfaFn09MTMYxuaXvtZl1DKH6jgXICD5xvd5ePUuSfne1kpR7wL4YxWaT4MK7kfxlB4wPMR56vd98iSjbEby4PsIkMVv43NREXh73%2B7h0KOj69MaWkmyi5jNPa5btKi%2B99No2aImpRnpkmvTULd8NHoHFRW4IW67NUek4YmkpNPmO%2BqlxGIncqg4pls9ysXQg8OrTPgFG7wYqAe3QNRiM0c88%2FTDPzcDt7bZdY0wW95lNULrVynbU66jUwzykDW02iirHCYTb8DC1kyYXlS7kEhFTgaoUP2aDPS%2B5Zk487nW3Ffq%2BYLBXOZ2%2FRneoPDsVTMP3H4cIGOqUBa6xDDacrUL6PYXEbdUy44EXD%2FI%2BGzX3ZlLP5TlbLlGXF4SP9K2ruGfPLcW4w%2BjuubPMBOj%2B5HQpPw9UT%2B03XAAmHZfGdGev23fQv%2BhTsaz%2FnwAAfPOcN7DPsVPHVBZ5%2FEYCKLOhhHNr37943Q5PsCM1yjtu9ng7UtZZZNFSmc0uXYMpgPhXOV9eAO7jc1nrDpfUMfQdymkdXkIWtMFJv7laIw%2FxV&X-Amz-Signature=d39b8c625a01435f5c83447b16845e9eae421ae6320a92f8408c1b6fd60b8efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NKD4W7Z%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIF5NzOBDwqvsl43KVMigl%2F4%2Bw3rg9OVlwiwTVpmegl4CAiEAmgl%2Bq%2BeBNltusZGKGPj0A15sE8u3mpHpHAw%2F%2BUfUbvMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4AvjRCLHqWhlJfFyrcA%2Fa4S3VRZl5VNquExZAW3bi1XMiDBQpCuY%2By409R%2FyfnOYCbG4GNqhSAhoi6reh%2FvtA7kAbi%2B%2BIXMYCAQPqbv1moNMMSjy%2FEnn0J9QzhBED8rJtxTc0fy2TJlwrlXVoNNOPZHCzHtn8oEt2rjQl65YsaF5CNzWUS8w7r0y4FXP3HXFmEIwLzLVZJ3j6NjVQeUD%2B4fv4IaH0v44iVyiqBYJa%2F8L2TWmxnxW9zPs0FQimLCX6TRuKUFqj%2FVKwXWIbJ36na0AwBS2rGB1BeELOEomHPxO6zRf7R9vfxb6aG4cbVYSybb38pEdO1y%2BhPfaFn09MTMYxuaXvtZl1DKH6jgXICD5xvd5ePUuSfne1kpR7wL4YxWaT4MK7kfxlB4wPMR56vd98iSjbEby4PsIkMVv43NREXh73%2B7h0KOj69MaWkmyi5jNPa5btKi%2B99No2aImpRnpkmvTULd8NHoHFRW4IW67NUek4YmkpNPmO%2BqlxGIncqg4pls9ysXQg8OrTPgFG7wYqAe3QNRiM0c88%2FTDPzcDt7bZdY0wW95lNULrVynbU66jUwzykDW02iirHCYTb8DC1kyYXlS7kEhFTgaoUP2aDPS%2B5Zk487nW3Ffq%2BYLBXOZ2%2FRneoPDsVTMP3H4cIGOqUBa6xDDacrUL6PYXEbdUy44EXD%2FI%2BGzX3ZlLP5TlbLlGXF4SP9K2ruGfPLcW4w%2BjuubPMBOj%2B5HQpPw9UT%2B03XAAmHZfGdGev23fQv%2BhTsaz%2FnwAAfPOcN7DPsVPHVBZ5%2FEYCKLOhhHNr37943Q5PsCM1yjtu9ng7UtZZZNFSmc0uXYMpgPhXOV9eAO7jc1nrDpfUMfQdymkdXkIWtMFJv7laIw%2FxV&X-Amz-Signature=dbb6a820f9bb2bc55796d9d5db1c72d07542e135015b64e92b08b0d4178fb32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NKD4W7Z%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T220814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIF5NzOBDwqvsl43KVMigl%2F4%2Bw3rg9OVlwiwTVpmegl4CAiEAmgl%2Bq%2BeBNltusZGKGPj0A15sE8u3mpHpHAw%2F%2BUfUbvMqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH4AvjRCLHqWhlJfFyrcA%2Fa4S3VRZl5VNquExZAW3bi1XMiDBQpCuY%2By409R%2FyfnOYCbG4GNqhSAhoi6reh%2FvtA7kAbi%2B%2BIXMYCAQPqbv1moNMMSjy%2FEnn0J9QzhBED8rJtxTc0fy2TJlwrlXVoNNOPZHCzHtn8oEt2rjQl65YsaF5CNzWUS8w7r0y4FXP3HXFmEIwLzLVZJ3j6NjVQeUD%2B4fv4IaH0v44iVyiqBYJa%2F8L2TWmxnxW9zPs0FQimLCX6TRuKUFqj%2FVKwXWIbJ36na0AwBS2rGB1BeELOEomHPxO6zRf7R9vfxb6aG4cbVYSybb38pEdO1y%2BhPfaFn09MTMYxuaXvtZl1DKH6jgXICD5xvd5ePUuSfne1kpR7wL4YxWaT4MK7kfxlB4wPMR56vd98iSjbEby4PsIkMVv43NREXh73%2B7h0KOj69MaWkmyi5jNPa5btKi%2B99No2aImpRnpkmvTULd8NHoHFRW4IW67NUek4YmkpNPmO%2BqlxGIncqg4pls9ysXQg8OrTPgFG7wYqAe3QNRiM0c88%2FTDPzcDt7bZdY0wW95lNULrVynbU66jUwzykDW02iirHCYTb8DC1kyYXlS7kEhFTgaoUP2aDPS%2B5Zk487nW3Ffq%2BYLBXOZ2%2FRneoPDsVTMP3H4cIGOqUBa6xDDacrUL6PYXEbdUy44EXD%2FI%2BGzX3ZlLP5TlbLlGXF4SP9K2ruGfPLcW4w%2BjuubPMBOj%2B5HQpPw9UT%2B03XAAmHZfGdGev23fQv%2BhTsaz%2FnwAAfPOcN7DPsVPHVBZ5%2FEYCKLOhhHNr37943Q5PsCM1yjtu9ng7UtZZZNFSmc0uXYMpgPhXOV9eAO7jc1nrDpfUMfQdymkdXkIWtMFJv7laIw%2FxV&X-Amz-Signature=967c5a285b46ee8a7b6898fead539cdab37d6a03cf44ae54901e5151bead4b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOB5N2XR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIC6CnxDewdHZExKE%2BJqtDpxWkSXrCnbPnqOwHx8jtIBBAiEAvvzCNibE9Oa6WOLGVBErVhlxqafEDsQIniFFNd0NfN8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeU%2FqVrMBfzRhXLXCrcA1Btx%2By6h7vgh905FjBQezuhKBVP%2ByXwbrmokoNM%2BT45heVMFd%2BXqRpi0pjAIzcnMeVnhu24F77pLRSgi5T5bJZ9WyGRR%2Fm3nBYq3LIdK4pYFRW%2BfM4sFE7a1XtQap2qxQIN6BWJgszmdWAUPG4dPhsz8tOMZHCrfdJ8sb4v9LweKqCAHgCBz9ZcIi%2FKQA3xXScT%2FBFSA2vCf7h3OQ94YEYe0WcmqSC6qLziwt394otDs%2FABJXrC5zGYdw935fSZsq7AjSpe8WZLYRBY1c%2B6ePSNwYt8rFe2emsDcZb23AOBATdSQfGDpO70owZSoOZXhXX%2B%2FwnlygOTndwF43DOfZdMHrU3uiCBELBjumbHi0raN%2F9K%2F8ZMsOdUSnySqA0WD4Vn4GrR4Ly5WNPI1ZtLXvOogJ6Qul7SCdLSfKzk6%2FFRd%2BQC7JSF8tQknNo%2BLSbwLMm6cjX3LvqJ7ZDcUaVUL9AdY%2F2sg2faL6k66R5O4HTdT5UFqngjP9%2BhAdIRTIzQ29R9dJCKeC6hN%2B6pu43NSiT2RY7LgDEKLvYjAtKbJUoXdRl2hd1VoOIVzyrpkXcBMTagSnqjtM24lspkz9Yja63XjFY9gqudH9Gom%2FbRsh%2FXbqr%2FoWtTxmKFS2KsMJvKscMGOqUB3d0DIY1BWthHi%2FRfEP5BNzySCrCn%2BwqEL3TMy1MJDZUE0klUZjDguY4aCkkSnKL77EhbRs%2FgouZPdvuiv0DM%2F81G2Fo8JZrmjhwhaGtQn1BcZTj3vGv5kxVoEBNhq94KI4d7upmnhy0e9AWReOHVNkEjosOR89mwU%2BY8p6bVL5TGl%2BQiPbruFauGJ4KmteczICQCH%2F5UyAhxErmhogcTgVKY0izJ&X-Amz-Signature=1760349e6417f2d73b67a80ac4c671707d241e5b7192786b28594261d82f89d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOB5N2XR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIC6CnxDewdHZExKE%2BJqtDpxWkSXrCnbPnqOwHx8jtIBBAiEAvvzCNibE9Oa6WOLGVBErVhlxqafEDsQIniFFNd0NfN8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeU%2FqVrMBfzRhXLXCrcA1Btx%2By6h7vgh905FjBQezuhKBVP%2ByXwbrmokoNM%2BT45heVMFd%2BXqRpi0pjAIzcnMeVnhu24F77pLRSgi5T5bJZ9WyGRR%2Fm3nBYq3LIdK4pYFRW%2BfM4sFE7a1XtQap2qxQIN6BWJgszmdWAUPG4dPhsz8tOMZHCrfdJ8sb4v9LweKqCAHgCBz9ZcIi%2FKQA3xXScT%2FBFSA2vCf7h3OQ94YEYe0WcmqSC6qLziwt394otDs%2FABJXrC5zGYdw935fSZsq7AjSpe8WZLYRBY1c%2B6ePSNwYt8rFe2emsDcZb23AOBATdSQfGDpO70owZSoOZXhXX%2B%2FwnlygOTndwF43DOfZdMHrU3uiCBELBjumbHi0raN%2F9K%2F8ZMsOdUSnySqA0WD4Vn4GrR4Ly5WNPI1ZtLXvOogJ6Qul7SCdLSfKzk6%2FFRd%2BQC7JSF8tQknNo%2BLSbwLMm6cjX3LvqJ7ZDcUaVUL9AdY%2F2sg2faL6k66R5O4HTdT5UFqngjP9%2BhAdIRTIzQ29R9dJCKeC6hN%2B6pu43NSiT2RY7LgDEKLvYjAtKbJUoXdRl2hd1VoOIVzyrpkXcBMTagSnqjtM24lspkz9Yja63XjFY9gqudH9Gom%2FbRsh%2FXbqr%2FoWtTxmKFS2KsMJvKscMGOqUB3d0DIY1BWthHi%2FRfEP5BNzySCrCn%2BwqEL3TMy1MJDZUE0klUZjDguY4aCkkSnKL77EhbRs%2FgouZPdvuiv0DM%2F81G2Fo8JZrmjhwhaGtQn1BcZTj3vGv5kxVoEBNhq94KI4d7upmnhy0e9AWReOHVNkEjosOR89mwU%2BY8p6bVL5TGl%2BQiPbruFauGJ4KmteczICQCH%2F5UyAhxErmhogcTgVKY0izJ&X-Amz-Signature=df7898e7f857e667238cdf35acaeb11e47f8db77e4561fc7a96e26118d66659b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOB5N2XR%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T004317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIC6CnxDewdHZExKE%2BJqtDpxWkSXrCnbPnqOwHx8jtIBBAiEAvvzCNibE9Oa6WOLGVBErVhlxqafEDsQIniFFNd0NfN8qiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeU%2FqVrMBfzRhXLXCrcA1Btx%2By6h7vgh905FjBQezuhKBVP%2ByXwbrmokoNM%2BT45heVMFd%2BXqRpi0pjAIzcnMeVnhu24F77pLRSgi5T5bJZ9WyGRR%2Fm3nBYq3LIdK4pYFRW%2BfM4sFE7a1XtQap2qxQIN6BWJgszmdWAUPG4dPhsz8tOMZHCrfdJ8sb4v9LweKqCAHgCBz9ZcIi%2FKQA3xXScT%2FBFSA2vCf7h3OQ94YEYe0WcmqSC6qLziwt394otDs%2FABJXrC5zGYdw935fSZsq7AjSpe8WZLYRBY1c%2B6ePSNwYt8rFe2emsDcZb23AOBATdSQfGDpO70owZSoOZXhXX%2B%2FwnlygOTndwF43DOfZdMHrU3uiCBELBjumbHi0raN%2F9K%2F8ZMsOdUSnySqA0WD4Vn4GrR4Ly5WNPI1ZtLXvOogJ6Qul7SCdLSfKzk6%2FFRd%2BQC7JSF8tQknNo%2BLSbwLMm6cjX3LvqJ7ZDcUaVUL9AdY%2F2sg2faL6k66R5O4HTdT5UFqngjP9%2BhAdIRTIzQ29R9dJCKeC6hN%2B6pu43NSiT2RY7LgDEKLvYjAtKbJUoXdRl2hd1VoOIVzyrpkXcBMTagSnqjtM24lspkz9Yja63XjFY9gqudH9Gom%2FbRsh%2FXbqr%2FoWtTxmKFS2KsMJvKscMGOqUB3d0DIY1BWthHi%2FRfEP5BNzySCrCn%2BwqEL3TMy1MJDZUE0klUZjDguY4aCkkSnKL77EhbRs%2FgouZPdvuiv0DM%2F81G2Fo8JZrmjhwhaGtQn1BcZTj3vGv5kxVoEBNhq94KI4d7upmnhy0e9AWReOHVNkEjosOR89mwU%2BY8p6bVL5TGl%2BQiPbruFauGJ4KmteczICQCH%2F5UyAhxErmhogcTgVKY0izJ&X-Amz-Signature=ee769872f5ab27b038558aeffd46e5039b3f36a9ad985b06d85bb6de0f4f615f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

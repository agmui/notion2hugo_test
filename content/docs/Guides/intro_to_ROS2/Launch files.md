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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223MPECS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHifYZCIPtstEL1jJ9vshV1BcsrdQ%2Fgq5wgYtjKeCgQGAiAVPmJaUhJe107QSQVpI1QcDQnX10ZyqHM8B8Bf3LZQtiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIDys5sd5fghujd2TKtwD5bqtuXeQHTkIKAZOICNf5VRCSbdaPLrGCS4L4A4mbtPxNtXKn3ECWZ7RVpI7FkBjZK3Y3U9KzF5Ct5V5einOCu%2F7HcwrnZlCcXNwpJIrYUTH7snwjkUEJ2IrI6J8PxDsXqta3325RSK8CdUfLRljVVORYK3dpzzj4Hn093fUgs6Z2L9jjiLvrLlkHAsENvc2g8O%2F9L4Z4qQwK6Y01Srcf5y01KzewSACmn7hXbuITklbxfIx39uR6xnBCYLmr8mMGVHM8gOXpjUb1NFCQRxDe7EHwF7q1fVrYJtw93XSzV7FPE3Z5GjXZROGVGvB%2F6OjS1DC7hLRk649PTNZz3JgPM802LYzf4937RWoj7S9WBMlAmIm0eklu83rac3TlfTsR7u7KXj6E98cK28MKV0hZgaCP3bb5NI%2Be7%2B0ddDJEQaJg7Lox%2BzoiHG5Lhq2E8sKJu9fQRRKIZL7fKhxunFxhlWCtouviQpR1Qq5qF4uGpF4bDu7xqKTHZ8rjzsE2%2Fvn5PZTdPAzB7cTuMbU%2FxXDeau91wUi7GN57NQS7%2FivhW0WmJT6J5rT3oY2fBP3B2o%2Bf%2FbnH31P2%2B6vx7EzodlH8Ij7nRd5PZxqEZOS1GaOQjTaIAzJalmmcMBRBx4wwsj2wAY6pgHfnQVGO97jJqs0UsUG1QuorEgvBfbFLHouaxnQVHhxCRSaQsNyH66E%2B2X46Mx5mEKp3lPWbr%2FxujeCY00JwCRXCGQ5gLlFPrvjpNu3pLIUspsympsW%2BdV7lmVDKm%2BVLtCPq2sSx1njMeyrBiH%2FOCeqQ919bMCxxi4LVbLbxfEWFVCbKkiKzdLMrZ41hRhoaHX5DXX8w7En6Q8d7BflE3aXv7i6FAH2&X-Amz-Signature=7eabb3c1c385fa0eae2a69b00b6070d6a8352d09ccbee4a1260d677857d384b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223MPECS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHifYZCIPtstEL1jJ9vshV1BcsrdQ%2Fgq5wgYtjKeCgQGAiAVPmJaUhJe107QSQVpI1QcDQnX10ZyqHM8B8Bf3LZQtiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIDys5sd5fghujd2TKtwD5bqtuXeQHTkIKAZOICNf5VRCSbdaPLrGCS4L4A4mbtPxNtXKn3ECWZ7RVpI7FkBjZK3Y3U9KzF5Ct5V5einOCu%2F7HcwrnZlCcXNwpJIrYUTH7snwjkUEJ2IrI6J8PxDsXqta3325RSK8CdUfLRljVVORYK3dpzzj4Hn093fUgs6Z2L9jjiLvrLlkHAsENvc2g8O%2F9L4Z4qQwK6Y01Srcf5y01KzewSACmn7hXbuITklbxfIx39uR6xnBCYLmr8mMGVHM8gOXpjUb1NFCQRxDe7EHwF7q1fVrYJtw93XSzV7FPE3Z5GjXZROGVGvB%2F6OjS1DC7hLRk649PTNZz3JgPM802LYzf4937RWoj7S9WBMlAmIm0eklu83rac3TlfTsR7u7KXj6E98cK28MKV0hZgaCP3bb5NI%2Be7%2B0ddDJEQaJg7Lox%2BzoiHG5Lhq2E8sKJu9fQRRKIZL7fKhxunFxhlWCtouviQpR1Qq5qF4uGpF4bDu7xqKTHZ8rjzsE2%2Fvn5PZTdPAzB7cTuMbU%2FxXDeau91wUi7GN57NQS7%2FivhW0WmJT6J5rT3oY2fBP3B2o%2Bf%2FbnH31P2%2B6vx7EzodlH8Ij7nRd5PZxqEZOS1GaOQjTaIAzJalmmcMBRBx4wwsj2wAY6pgHfnQVGO97jJqs0UsUG1QuorEgvBfbFLHouaxnQVHhxCRSaQsNyH66E%2B2X46Mx5mEKp3lPWbr%2FxujeCY00JwCRXCGQ5gLlFPrvjpNu3pLIUspsympsW%2BdV7lmVDKm%2BVLtCPq2sSx1njMeyrBiH%2FOCeqQ919bMCxxi4LVbLbxfEWFVCbKkiKzdLMrZ41hRhoaHX5DXX8w7En6Q8d7BflE3aXv7i6FAH2&X-Amz-Signature=3e6ab51bb9bfc390ec23936c3ef391d84527fdca66acf82da7f0d0ccb4edb5f5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466223MPECS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T070917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHifYZCIPtstEL1jJ9vshV1BcsrdQ%2Fgq5wgYtjKeCgQGAiAVPmJaUhJe107QSQVpI1QcDQnX10ZyqHM8B8Bf3LZQtiqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIDys5sd5fghujd2TKtwD5bqtuXeQHTkIKAZOICNf5VRCSbdaPLrGCS4L4A4mbtPxNtXKn3ECWZ7RVpI7FkBjZK3Y3U9KzF5Ct5V5einOCu%2F7HcwrnZlCcXNwpJIrYUTH7snwjkUEJ2IrI6J8PxDsXqta3325RSK8CdUfLRljVVORYK3dpzzj4Hn093fUgs6Z2L9jjiLvrLlkHAsENvc2g8O%2F9L4Z4qQwK6Y01Srcf5y01KzewSACmn7hXbuITklbxfIx39uR6xnBCYLmr8mMGVHM8gOXpjUb1NFCQRxDe7EHwF7q1fVrYJtw93XSzV7FPE3Z5GjXZROGVGvB%2F6OjS1DC7hLRk649PTNZz3JgPM802LYzf4937RWoj7S9WBMlAmIm0eklu83rac3TlfTsR7u7KXj6E98cK28MKV0hZgaCP3bb5NI%2Be7%2B0ddDJEQaJg7Lox%2BzoiHG5Lhq2E8sKJu9fQRRKIZL7fKhxunFxhlWCtouviQpR1Qq5qF4uGpF4bDu7xqKTHZ8rjzsE2%2Fvn5PZTdPAzB7cTuMbU%2FxXDeau91wUi7GN57NQS7%2FivhW0WmJT6J5rT3oY2fBP3B2o%2Bf%2FbnH31P2%2B6vx7EzodlH8Ij7nRd5PZxqEZOS1GaOQjTaIAzJalmmcMBRBx4wwsj2wAY6pgHfnQVGO97jJqs0UsUG1QuorEgvBfbFLHouaxnQVHhxCRSaQsNyH66E%2B2X46Mx5mEKp3lPWbr%2FxujeCY00JwCRXCGQ5gLlFPrvjpNu3pLIUspsympsW%2BdV7lmVDKm%2BVLtCPq2sSx1njMeyrBiH%2FOCeqQ919bMCxxi4LVbLbxfEWFVCbKkiKzdLMrZ41hRhoaHX5DXX8w7En6Q8d7BflE3aXv7i6FAH2&X-Amz-Signature=215466fbaa524fea3bb409d9d5e91e1274170399f0879a989e50bfa6cb10d4fc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

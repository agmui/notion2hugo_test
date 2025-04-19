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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVKZFTDJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBH0xlmKZFOuPiw3HThDaxIHasHn76IbGc%2Bkwe1XVeh%2FAiEAnD35LfyhgVonHWjyjJ%2BHzozgLoM%2FdVccv7H3LvH5RmIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbnzkg6KBmVKqxlwyrcAx2bTB6AlSSEKoYibsWGKIC8VWL7NZ%2BlqmBdtaqih%2BCvodjsWAKlg4z1OjRia4qSnZiWJKVowFbjYmPPMH6V91Z4MDYClPg5vQatumiUAlOqRaxEa52FN7DxbVbdUD4rXa%2Fc5ZMZNqIZBCtWQC2MhnlMfyIRpxxqsKlLzB7t0AXi%2FnjH3tAUV1B1LKJEvDpkGQv6DCzK3HRZlvnBL%2F8M8WLOkOa8wY2bvo6%2Fof4OdovqT7%2F3Oh4mvyKBOI4e0JeZTbkFJpmuYKaPZv%2Fl8al5Smzrxk7BWSWmX1IPdfsncVMLnDfUhQvqMzElyEq4Zsd3A9t63x3oDsSccgl0PEfC1js0%2FAp0sAIQOwMQcutiSL6rwnT1yHZ1ppCbs%2FXbCXveh6V9m75TbBWIinNe8b2Y%2FydEG7oFtdGhHw0%2BlmFi7eLqcJOblC7QM4roaN6wRqwmQCU4XuFMNXvRGUv85P4fSlOAP9eiIPKKFJQgCseNyD6OAcFRw8c%2BT3172rGP8hWEmEMMWJda0swUDcM1EM371Ojhtd9dXDUPWmLfvYjxXRDG56YKfaZ0DHa3PMH5tuDQ2hF8pvWL%2BK6028V6JDTBjTVJybM3eDydvCQxHDmXrbSksRnlbkODC2CLx%2Bi9MJyfkMAGOqUBz4uDMuwyNgjLwhAZNZIkjg1i3mF%2FjXFiJngiiAQVRXkKdQ7rAvGaQfWpRklOCmGMCeSukOnRqV6KfxnTlpwwu66mRL2yVMIzNf29kk3UN4dxyzXEfcRVkBzJcwYku7IiL%2BbxTm7wRZMqQTdggW2W%2B5vDugfTPoRw%2BoiQ6BofDdMkS4izUrlfd6%2FAIE3QS901hHe7lVkX0HKsRRs98d9AtuR1nZp%2F&X-Amz-Signature=dc88b7f1a945b81b97a34cca82a1177ab7958ef318cb6f7e0180e5888f56fc65&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVKZFTDJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBH0xlmKZFOuPiw3HThDaxIHasHn76IbGc%2Bkwe1XVeh%2FAiEAnD35LfyhgVonHWjyjJ%2BHzozgLoM%2FdVccv7H3LvH5RmIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbnzkg6KBmVKqxlwyrcAx2bTB6AlSSEKoYibsWGKIC8VWL7NZ%2BlqmBdtaqih%2BCvodjsWAKlg4z1OjRia4qSnZiWJKVowFbjYmPPMH6V91Z4MDYClPg5vQatumiUAlOqRaxEa52FN7DxbVbdUD4rXa%2Fc5ZMZNqIZBCtWQC2MhnlMfyIRpxxqsKlLzB7t0AXi%2FnjH3tAUV1B1LKJEvDpkGQv6DCzK3HRZlvnBL%2F8M8WLOkOa8wY2bvo6%2Fof4OdovqT7%2F3Oh4mvyKBOI4e0JeZTbkFJpmuYKaPZv%2Fl8al5Smzrxk7BWSWmX1IPdfsncVMLnDfUhQvqMzElyEq4Zsd3A9t63x3oDsSccgl0PEfC1js0%2FAp0sAIQOwMQcutiSL6rwnT1yHZ1ppCbs%2FXbCXveh6V9m75TbBWIinNe8b2Y%2FydEG7oFtdGhHw0%2BlmFi7eLqcJOblC7QM4roaN6wRqwmQCU4XuFMNXvRGUv85P4fSlOAP9eiIPKKFJQgCseNyD6OAcFRw8c%2BT3172rGP8hWEmEMMWJda0swUDcM1EM371Ojhtd9dXDUPWmLfvYjxXRDG56YKfaZ0DHa3PMH5tuDQ2hF8pvWL%2BK6028V6JDTBjTVJybM3eDydvCQxHDmXrbSksRnlbkODC2CLx%2Bi9MJyfkMAGOqUBz4uDMuwyNgjLwhAZNZIkjg1i3mF%2FjXFiJngiiAQVRXkKdQ7rAvGaQfWpRklOCmGMCeSukOnRqV6KfxnTlpwwu66mRL2yVMIzNf29kk3UN4dxyzXEfcRVkBzJcwYku7IiL%2BbxTm7wRZMqQTdggW2W%2B5vDugfTPoRw%2BoiQ6BofDdMkS4izUrlfd6%2FAIE3QS901hHe7lVkX0HKsRRs98d9AtuR1nZp%2F&X-Amz-Signature=befacbc8b13039924a1acb0b86ec375fb7621711361a0f274011f7b014086cec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVKZFTDJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBH0xlmKZFOuPiw3HThDaxIHasHn76IbGc%2Bkwe1XVeh%2FAiEAnD35LfyhgVonHWjyjJ%2BHzozgLoM%2FdVccv7H3LvH5RmIqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbnzkg6KBmVKqxlwyrcAx2bTB6AlSSEKoYibsWGKIC8VWL7NZ%2BlqmBdtaqih%2BCvodjsWAKlg4z1OjRia4qSnZiWJKVowFbjYmPPMH6V91Z4MDYClPg5vQatumiUAlOqRaxEa52FN7DxbVbdUD4rXa%2Fc5ZMZNqIZBCtWQC2MhnlMfyIRpxxqsKlLzB7t0AXi%2FnjH3tAUV1B1LKJEvDpkGQv6DCzK3HRZlvnBL%2F8M8WLOkOa8wY2bvo6%2Fof4OdovqT7%2F3Oh4mvyKBOI4e0JeZTbkFJpmuYKaPZv%2Fl8al5Smzrxk7BWSWmX1IPdfsncVMLnDfUhQvqMzElyEq4Zsd3A9t63x3oDsSccgl0PEfC1js0%2FAp0sAIQOwMQcutiSL6rwnT1yHZ1ppCbs%2FXbCXveh6V9m75TbBWIinNe8b2Y%2FydEG7oFtdGhHw0%2BlmFi7eLqcJOblC7QM4roaN6wRqwmQCU4XuFMNXvRGUv85P4fSlOAP9eiIPKKFJQgCseNyD6OAcFRw8c%2BT3172rGP8hWEmEMMWJda0swUDcM1EM371Ojhtd9dXDUPWmLfvYjxXRDG56YKfaZ0DHa3PMH5tuDQ2hF8pvWL%2BK6028V6JDTBjTVJybM3eDydvCQxHDmXrbSksRnlbkODC2CLx%2Bi9MJyfkMAGOqUBz4uDMuwyNgjLwhAZNZIkjg1i3mF%2FjXFiJngiiAQVRXkKdQ7rAvGaQfWpRklOCmGMCeSukOnRqV6KfxnTlpwwu66mRL2yVMIzNf29kk3UN4dxyzXEfcRVkBzJcwYku7IiL%2BbxTm7wRZMqQTdggW2W%2B5vDugfTPoRw%2BoiQ6BofDdMkS4izUrlfd6%2FAIE3QS901hHe7lVkX0HKsRRs98d9AtuR1nZp%2F&X-Amz-Signature=8993a20ee27bd9ef064905291c74e267495f634a20b716a44fccc779c52fe368&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

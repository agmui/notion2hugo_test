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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TSP7CG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSarKSTY%2Badrfhl25uBlRS2JqTgBNNThyWTfDqv3qh6gIhAOmTLSzVEf6Is2mk5%2BSFtcu75u5hC1U5Ds38cTUd46SIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx7fyPeDCl6nqHLRYq3ANJZJZtE7Gk5jAVbL7yDzgcgWBIejS8fqD6W9fRAu6%2Bt5HLvLwnuVRN2m4QyqRazoapH9OVQL%2FKUm923UGf6LeUmeM%2BtHlMgX0ro3BDS4dOHkDioH6y4b0YZZYCga5iSh6NJ%2FKRnvedLaJnXCseOPclun%2Fg3TigfnAr7KolXyr%2F%2BXf2K4ftNr%2BtILcUNpezC7ZhcUOF0QoPf44Ce46sH3agx0lWr7nZPzLVRr2oGDG153vSCAKiqDQKkafC2dKlxol4V9VFNzENjrCOaCVrf9C2jpvIK1r3x4YwCwTSjMgNxzx7ziP%2Bjw%2F3P3gLx3zbRDjaExMa0SO%2FTmxiD93nERIiLWEOlNctLUZ7EpHwQfBKpfKBjS4tSXLDf1Qvo57Nn6q92pBS4LlvXNgnc7blPg50Y1fOKal0D27ToL2Xx5CkgtUG2OBscZI8VKYvshBHci77WP6Pap9lULsmttobqu8zP%2F8AiRWjOzoFkO7Kg5VnGYX5QQWuGmMlMeuKrdTxvm1hmj6SGlr5%2Fs5kYl19vPr4zF7bOniK5wm44mEekXGfLcE11c4mS%2Fx8WgO7c4zQDcGkKqvN9QyBk%2FbyN5EZj3NRcv%2FEDKkyRZaitQ0q2GK%2FWAvuPHSx7jEkZJGPMjDDtOLBBjqkAdhJCp6Ez2aBjnHIKhR11ozrfanLS16lYCguhGRMHISwmPTBKuq7fE23l8FzEKvHcL2ogyGYXqiTtWN%2Badb2NsMIj0iXRhBX0n9tq1HRHYtcf0ZjG1KodYCJCj780iAFLOxENjtLOe4JA3zmjNypsMsadov5ip%2B%2BXGOPUFMvn%2FWdSx2SsCaC%2FXWrRuCjWSVMXAWGjqZWacF1CmBQySEQYurU3WJ8&X-Amz-Signature=822875cb7f4842c04807ab3d12f980c860289eeeda800963e24a6e2080a1abf7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TSP7CG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSarKSTY%2Badrfhl25uBlRS2JqTgBNNThyWTfDqv3qh6gIhAOmTLSzVEf6Is2mk5%2BSFtcu75u5hC1U5Ds38cTUd46SIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx7fyPeDCl6nqHLRYq3ANJZJZtE7Gk5jAVbL7yDzgcgWBIejS8fqD6W9fRAu6%2Bt5HLvLwnuVRN2m4QyqRazoapH9OVQL%2FKUm923UGf6LeUmeM%2BtHlMgX0ro3BDS4dOHkDioH6y4b0YZZYCga5iSh6NJ%2FKRnvedLaJnXCseOPclun%2Fg3TigfnAr7KolXyr%2F%2BXf2K4ftNr%2BtILcUNpezC7ZhcUOF0QoPf44Ce46sH3agx0lWr7nZPzLVRr2oGDG153vSCAKiqDQKkafC2dKlxol4V9VFNzENjrCOaCVrf9C2jpvIK1r3x4YwCwTSjMgNxzx7ziP%2Bjw%2F3P3gLx3zbRDjaExMa0SO%2FTmxiD93nERIiLWEOlNctLUZ7EpHwQfBKpfKBjS4tSXLDf1Qvo57Nn6q92pBS4LlvXNgnc7blPg50Y1fOKal0D27ToL2Xx5CkgtUG2OBscZI8VKYvshBHci77WP6Pap9lULsmttobqu8zP%2F8AiRWjOzoFkO7Kg5VnGYX5QQWuGmMlMeuKrdTxvm1hmj6SGlr5%2Fs5kYl19vPr4zF7bOniK5wm44mEekXGfLcE11c4mS%2Fx8WgO7c4zQDcGkKqvN9QyBk%2FbyN5EZj3NRcv%2FEDKkyRZaitQ0q2GK%2FWAvuPHSx7jEkZJGPMjDDtOLBBjqkAdhJCp6Ez2aBjnHIKhR11ozrfanLS16lYCguhGRMHISwmPTBKuq7fE23l8FzEKvHcL2ogyGYXqiTtWN%2Badb2NsMIj0iXRhBX0n9tq1HRHYtcf0ZjG1KodYCJCj780iAFLOxENjtLOe4JA3zmjNypsMsadov5ip%2B%2BXGOPUFMvn%2FWdSx2SsCaC%2FXWrRuCjWSVMXAWGjqZWacF1CmBQySEQYurU3WJ8&X-Amz-Signature=87078f73f7e54287054cd3036cf758234e55d2b88a3653da95746374d5cc7fef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TSP7CG%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSarKSTY%2Badrfhl25uBlRS2JqTgBNNThyWTfDqv3qh6gIhAOmTLSzVEf6Is2mk5%2BSFtcu75u5hC1U5Ds38cTUd46SIKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyx7fyPeDCl6nqHLRYq3ANJZJZtE7Gk5jAVbL7yDzgcgWBIejS8fqD6W9fRAu6%2Bt5HLvLwnuVRN2m4QyqRazoapH9OVQL%2FKUm923UGf6LeUmeM%2BtHlMgX0ro3BDS4dOHkDioH6y4b0YZZYCga5iSh6NJ%2FKRnvedLaJnXCseOPclun%2Fg3TigfnAr7KolXyr%2F%2BXf2K4ftNr%2BtILcUNpezC7ZhcUOF0QoPf44Ce46sH3agx0lWr7nZPzLVRr2oGDG153vSCAKiqDQKkafC2dKlxol4V9VFNzENjrCOaCVrf9C2jpvIK1r3x4YwCwTSjMgNxzx7ziP%2Bjw%2F3P3gLx3zbRDjaExMa0SO%2FTmxiD93nERIiLWEOlNctLUZ7EpHwQfBKpfKBjS4tSXLDf1Qvo57Nn6q92pBS4LlvXNgnc7blPg50Y1fOKal0D27ToL2Xx5CkgtUG2OBscZI8VKYvshBHci77WP6Pap9lULsmttobqu8zP%2F8AiRWjOzoFkO7Kg5VnGYX5QQWuGmMlMeuKrdTxvm1hmj6SGlr5%2Fs5kYl19vPr4zF7bOniK5wm44mEekXGfLcE11c4mS%2Fx8WgO7c4zQDcGkKqvN9QyBk%2FbyN5EZj3NRcv%2FEDKkyRZaitQ0q2GK%2FWAvuPHSx7jEkZJGPMjDDtOLBBjqkAdhJCp6Ez2aBjnHIKhR11ozrfanLS16lYCguhGRMHISwmPTBKuq7fE23l8FzEKvHcL2ogyGYXqiTtWN%2Badb2NsMIj0iXRhBX0n9tq1HRHYtcf0ZjG1KodYCJCj780iAFLOxENjtLOe4JA3zmjNypsMsadov5ip%2B%2BXGOPUFMvn%2FWdSx2SsCaC%2FXWrRuCjWSVMXAWGjqZWacF1CmBQySEQYurU3WJ8&X-Amz-Signature=826d30006297ac698f799f6e8ef57f405189f92b80b5691a32fa8029792366dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

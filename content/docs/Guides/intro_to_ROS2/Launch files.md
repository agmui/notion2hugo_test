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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YKVWE7B%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDyBgR6IK72Z14DiFEdr4zTxcV5vzp%2Fh7ffK7KqkcB2vAIhAJ6Nqbd91x2LQnh6A1mnqUbgFEWj20OcjamLVCWG0KsHKv8DCEUQABoMNjM3NDIzMTgzODA1IgxOureSG5jza3f4yyMq3AOG4yamDnfGPynzbN6nbcBh9%2Bwca1cM79ZgQJng8PDHchNWac3qZjfCGURhQdbSWUbfyglB1%2FYrivn94ZU0Pk3%2F27Uc1D699iWDVa4ibZAVKKZGld6nBHISSSwu1ihJggUpvmQ9ib85dUNj0ppbprW%2F4ePD2gtbfG447wwJYGqk4yRUkPjXjTOtGYVXO1VYoU4fLOxdNbgJkJqPy%2BT9yCeFi9Y8b1udLCoyYHTv8ElG232eBf%2BOqJ5NZViA8RXBk%2FB%2FA1DGjOe1LcU2pbkux7SVfMbSrmOBkGep5gJx3N5mUeIRt4FQHQk04KJCjHsmdgtBdYEvkTjt6WLsr6nK%2FVXoIeERwBAvWYHxFk5gueDxqnk1CSNu4iUKXGfrTk3z6R0Su1wGjowLR3ssL10B1f3rbxGTw%2FEcnrARjKbCqdYE%2Fjh%2FKeX0t4QDFl2SixLKquRTiBry%2FlHjZA6EW%2BQVxmhj9vwlm5Nt2nbhilC4PEP6hZcr8D5Uf%2Bm88vMxzLn1zwanK2A2Ihjca3kI1gmg%2B1op6TSZJioL5hx5eeUdeCnrig%2BJCB0lAn9Al%2BhEzRiJxgag4%2Bh7Xd%2F%2FyBQzfm9PohLZP%2B%2Bu1LVVrElOxb%2BgKa3RBUkgO67bQV2pyk%2FvgjDoqtHBBjqkASvIdMlGxuwNUXmoZn95w0gC0CdjjRrWpZCM0tM9oCY973xWaxzweCQfhI7TeC3fBpO%2BX%2BlSPwsnuLKvVcT7UxbxW%2FVXoEA0jiDpejdcZDu%2Fy5GwBBT1e6q%2BARcy88RCfhQXBZrdr2h88fPTyEo3cx9AfydClkb29dzYMf5c4lIJV710Drp%2B7%2BQa57HOw1qGXwepBh2ButvYyQ6kBOb%2BpvgdJ49Z&X-Amz-Signature=76eee0b185acb6294280a71dd8c95d4c3847dd1b1edc1384d1a2be1cd5120435&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YKVWE7B%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDyBgR6IK72Z14DiFEdr4zTxcV5vzp%2Fh7ffK7KqkcB2vAIhAJ6Nqbd91x2LQnh6A1mnqUbgFEWj20OcjamLVCWG0KsHKv8DCEUQABoMNjM3NDIzMTgzODA1IgxOureSG5jza3f4yyMq3AOG4yamDnfGPynzbN6nbcBh9%2Bwca1cM79ZgQJng8PDHchNWac3qZjfCGURhQdbSWUbfyglB1%2FYrivn94ZU0Pk3%2F27Uc1D699iWDVa4ibZAVKKZGld6nBHISSSwu1ihJggUpvmQ9ib85dUNj0ppbprW%2F4ePD2gtbfG447wwJYGqk4yRUkPjXjTOtGYVXO1VYoU4fLOxdNbgJkJqPy%2BT9yCeFi9Y8b1udLCoyYHTv8ElG232eBf%2BOqJ5NZViA8RXBk%2FB%2FA1DGjOe1LcU2pbkux7SVfMbSrmOBkGep5gJx3N5mUeIRt4FQHQk04KJCjHsmdgtBdYEvkTjt6WLsr6nK%2FVXoIeERwBAvWYHxFk5gueDxqnk1CSNu4iUKXGfrTk3z6R0Su1wGjowLR3ssL10B1f3rbxGTw%2FEcnrARjKbCqdYE%2Fjh%2FKeX0t4QDFl2SixLKquRTiBry%2FlHjZA6EW%2BQVxmhj9vwlm5Nt2nbhilC4PEP6hZcr8D5Uf%2Bm88vMxzLn1zwanK2A2Ihjca3kI1gmg%2B1op6TSZJioL5hx5eeUdeCnrig%2BJCB0lAn9Al%2BhEzRiJxgag4%2Bh7Xd%2F%2FyBQzfm9PohLZP%2B%2Bu1LVVrElOxb%2BgKa3RBUkgO67bQV2pyk%2FvgjDoqtHBBjqkASvIdMlGxuwNUXmoZn95w0gC0CdjjRrWpZCM0tM9oCY973xWaxzweCQfhI7TeC3fBpO%2BX%2BlSPwsnuLKvVcT7UxbxW%2FVXoEA0jiDpejdcZDu%2Fy5GwBBT1e6q%2BARcy88RCfhQXBZrdr2h88fPTyEo3cx9AfydClkb29dzYMf5c4lIJV710Drp%2B7%2BQa57HOw1qGXwepBh2ButvYyQ6kBOb%2BpvgdJ49Z&X-Amz-Signature=4b000e7cbbf5a3b1c110384eed85175d4966f0881c93a2872ef852b8ec29a9a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YKVWE7B%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDyBgR6IK72Z14DiFEdr4zTxcV5vzp%2Fh7ffK7KqkcB2vAIhAJ6Nqbd91x2LQnh6A1mnqUbgFEWj20OcjamLVCWG0KsHKv8DCEUQABoMNjM3NDIzMTgzODA1IgxOureSG5jza3f4yyMq3AOG4yamDnfGPynzbN6nbcBh9%2Bwca1cM79ZgQJng8PDHchNWac3qZjfCGURhQdbSWUbfyglB1%2FYrivn94ZU0Pk3%2F27Uc1D699iWDVa4ibZAVKKZGld6nBHISSSwu1ihJggUpvmQ9ib85dUNj0ppbprW%2F4ePD2gtbfG447wwJYGqk4yRUkPjXjTOtGYVXO1VYoU4fLOxdNbgJkJqPy%2BT9yCeFi9Y8b1udLCoyYHTv8ElG232eBf%2BOqJ5NZViA8RXBk%2FB%2FA1DGjOe1LcU2pbkux7SVfMbSrmOBkGep5gJx3N5mUeIRt4FQHQk04KJCjHsmdgtBdYEvkTjt6WLsr6nK%2FVXoIeERwBAvWYHxFk5gueDxqnk1CSNu4iUKXGfrTk3z6R0Su1wGjowLR3ssL10B1f3rbxGTw%2FEcnrARjKbCqdYE%2Fjh%2FKeX0t4QDFl2SixLKquRTiBry%2FlHjZA6EW%2BQVxmhj9vwlm5Nt2nbhilC4PEP6hZcr8D5Uf%2Bm88vMxzLn1zwanK2A2Ihjca3kI1gmg%2B1op6TSZJioL5hx5eeUdeCnrig%2BJCB0lAn9Al%2BhEzRiJxgag4%2Bh7Xd%2F%2FyBQzfm9PohLZP%2B%2Bu1LVVrElOxb%2BgKa3RBUkgO67bQV2pyk%2FvgjDoqtHBBjqkASvIdMlGxuwNUXmoZn95w0gC0CdjjRrWpZCM0tM9oCY973xWaxzweCQfhI7TeC3fBpO%2BX%2BlSPwsnuLKvVcT7UxbxW%2FVXoEA0jiDpejdcZDu%2Fy5GwBBT1e6q%2BARcy88RCfhQXBZrdr2h88fPTyEo3cx9AfydClkb29dzYMf5c4lIJV710Drp%2B7%2BQa57HOw1qGXwepBh2ButvYyQ6kBOb%2BpvgdJ49Z&X-Amz-Signature=874df4fc07face2ba0dee61386b73bc18a8facf8b2e7fbe39db30631f0b56c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

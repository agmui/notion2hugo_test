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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD73ACJN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQD5Ke%2FWAxGP3U9M4DeBwTSkOUpkwFd9BYbC7DFgJenGQwIgWSEXI%2FY67IT21SQu5YN9AGTwyCnZ%2B054an0lauMqXdIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDdPiWz2Aje1SYV7vyrcAyAXPUipNIpjhb8ulW%2BfOrV6gaMoXKFEAP3MVJeGL1mUYRyt4HF7cTbHR8%2FbBupIQkqVXB%2FuNT24ZBeF5yE6CYDQLp5xn2r6%2FWIqWECJvJ6bnbUh5CSoX9OmFeqNloylWKcfHb0iHs0UiBiwujMLG%2BVnE4dkIjN23N1k2couve%2BQiiXGpcoXEHm5LR1UZEFrQ%2BnsZGJ%2Blzqz2xvFet3kGeBFtw4sRFxKZ8zrDP%2FuAZ0iKAxeeJ5HrqRCgTHSFb4K6ZAeTW4IOiuU6H5gOopUHFMbSYQubwnRTHIgNSmCH2qtyNyP3yvsCe%2FatnHiE8et8xCUyKgSPhhw4ae0%2B0mLjcOy1eLQ3I94%2FjBovEupQxWe3Hhtgvwq6b3i%2BakeWNprwQN8xON64YoU1N6o2LlweqIvl%2BD%2BT1CVoJ74NWrnQ3euYAS%2BegfQITKtRVue9ibN6Ap81gBXB86oj%2BXVxz25jcURwK%2BdK8Cckl50dqzTPMdfAx%2BN759HcyxjM2WbZzTHHXY2S%2Bzo31KLAzZfZuXD7MfyoufzxvyprECFOmHe15U8YupFHXJ%2BaYn%2FVf8sBKmNe%2FGxQ1I7xH%2By%2F57i4i8aFxkW6pfrIT9McDaDyutkzWEUWRicAeybeVetA%2Bo0MNLMwL0GOqUBed1v4Rdjwn09%2FAGqga5r4bP%2BA%2FbmwPf5BeozuMjzJlZNrPaznrJGhDQYgDhSpB2jM2KtO2d2IKtvx13MUZ8xw6DYAJZx%2BSXYDkVBWCAhSO56nOhPodhB1qkPt4MGfx2CUkn21d7XhcVUrBhPRTI%2FxbcY5I0m3Rm9VHQLNlRp4VFlqfiPsxUneNlEstHbP6%2BaV20Yoai%2FhsRFoXkj7mEkZgWDwbzl&X-Amz-Signature=d916f4c9a7e2b03a48dd1f5fcfde4f6e85a08040298569c0f1d72dbff9f485fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD73ACJN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQD5Ke%2FWAxGP3U9M4DeBwTSkOUpkwFd9BYbC7DFgJenGQwIgWSEXI%2FY67IT21SQu5YN9AGTwyCnZ%2B054an0lauMqXdIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDdPiWz2Aje1SYV7vyrcAyAXPUipNIpjhb8ulW%2BfOrV6gaMoXKFEAP3MVJeGL1mUYRyt4HF7cTbHR8%2FbBupIQkqVXB%2FuNT24ZBeF5yE6CYDQLp5xn2r6%2FWIqWECJvJ6bnbUh5CSoX9OmFeqNloylWKcfHb0iHs0UiBiwujMLG%2BVnE4dkIjN23N1k2couve%2BQiiXGpcoXEHm5LR1UZEFrQ%2BnsZGJ%2Blzqz2xvFet3kGeBFtw4sRFxKZ8zrDP%2FuAZ0iKAxeeJ5HrqRCgTHSFb4K6ZAeTW4IOiuU6H5gOopUHFMbSYQubwnRTHIgNSmCH2qtyNyP3yvsCe%2FatnHiE8et8xCUyKgSPhhw4ae0%2B0mLjcOy1eLQ3I94%2FjBovEupQxWe3Hhtgvwq6b3i%2BakeWNprwQN8xON64YoU1N6o2LlweqIvl%2BD%2BT1CVoJ74NWrnQ3euYAS%2BegfQITKtRVue9ibN6Ap81gBXB86oj%2BXVxz25jcURwK%2BdK8Cckl50dqzTPMdfAx%2BN759HcyxjM2WbZzTHHXY2S%2Bzo31KLAzZfZuXD7MfyoufzxvyprECFOmHe15U8YupFHXJ%2BaYn%2FVf8sBKmNe%2FGxQ1I7xH%2By%2F57i4i8aFxkW6pfrIT9McDaDyutkzWEUWRicAeybeVetA%2Bo0MNLMwL0GOqUBed1v4Rdjwn09%2FAGqga5r4bP%2BA%2FbmwPf5BeozuMjzJlZNrPaznrJGhDQYgDhSpB2jM2KtO2d2IKtvx13MUZ8xw6DYAJZx%2BSXYDkVBWCAhSO56nOhPodhB1qkPt4MGfx2CUkn21d7XhcVUrBhPRTI%2FxbcY5I0m3Rm9VHQLNlRp4VFlqfiPsxUneNlEstHbP6%2BaV20Yoai%2FhsRFoXkj7mEkZgWDwbzl&X-Amz-Signature=4033201351cd12fa721e69489f31dcba665f4e018ae2ef5e5c82729f79a3db01&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD73ACJN%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T060944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQD5Ke%2FWAxGP3U9M4DeBwTSkOUpkwFd9BYbC7DFgJenGQwIgWSEXI%2FY67IT21SQu5YN9AGTwyCnZ%2B054an0lauMqXdIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDdPiWz2Aje1SYV7vyrcAyAXPUipNIpjhb8ulW%2BfOrV6gaMoXKFEAP3MVJeGL1mUYRyt4HF7cTbHR8%2FbBupIQkqVXB%2FuNT24ZBeF5yE6CYDQLp5xn2r6%2FWIqWECJvJ6bnbUh5CSoX9OmFeqNloylWKcfHb0iHs0UiBiwujMLG%2BVnE4dkIjN23N1k2couve%2BQiiXGpcoXEHm5LR1UZEFrQ%2BnsZGJ%2Blzqz2xvFet3kGeBFtw4sRFxKZ8zrDP%2FuAZ0iKAxeeJ5HrqRCgTHSFb4K6ZAeTW4IOiuU6H5gOopUHFMbSYQubwnRTHIgNSmCH2qtyNyP3yvsCe%2FatnHiE8et8xCUyKgSPhhw4ae0%2B0mLjcOy1eLQ3I94%2FjBovEupQxWe3Hhtgvwq6b3i%2BakeWNprwQN8xON64YoU1N6o2LlweqIvl%2BD%2BT1CVoJ74NWrnQ3euYAS%2BegfQITKtRVue9ibN6Ap81gBXB86oj%2BXVxz25jcURwK%2BdK8Cckl50dqzTPMdfAx%2BN759HcyxjM2WbZzTHHXY2S%2Bzo31KLAzZfZuXD7MfyoufzxvyprECFOmHe15U8YupFHXJ%2BaYn%2FVf8sBKmNe%2FGxQ1I7xH%2By%2F57i4i8aFxkW6pfrIT9McDaDyutkzWEUWRicAeybeVetA%2Bo0MNLMwL0GOqUBed1v4Rdjwn09%2FAGqga5r4bP%2BA%2FbmwPf5BeozuMjzJlZNrPaznrJGhDQYgDhSpB2jM2KtO2d2IKtvx13MUZ8xw6DYAJZx%2BSXYDkVBWCAhSO56nOhPodhB1qkPt4MGfx2CUkn21d7XhcVUrBhPRTI%2FxbcY5I0m3Rm9VHQLNlRp4VFlqfiPsxUneNlEstHbP6%2BaV20Yoai%2FhsRFoXkj7mEkZgWDwbzl&X-Amz-Signature=a2abdc5dcc5a6ff87be25c2688ed2c5fcdb222be6af18adf3a13d63ddd4bc2e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

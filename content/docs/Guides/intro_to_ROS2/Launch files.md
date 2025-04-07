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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPL6U3G%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6mrUg0x512ul35GTBcKgiLB3%2FSsBQL7m2UKXooC520AiEA249Ks5XFA%2FP95gJTFQN9c3PHY5%2F0SHyJMEs6EnEDZf8q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDG2HuPtY2ho7PwX45yrcAyHCmZGB2zZuZeBosGnXUhwPQfaJO2lvp9Vf8TYrGniiVsZNnF5LjyAPVsmhS1omi6ak5nhVVBGzD%2BcMNH6Grzrhsz5oE8%2BVjxvOmOA5Q20eTsmg9DpQUd0N1FYGRDugZVNpQ08GpS4Uc8pMpX74%2FjyTlcAE3um2Qt8sTuiYKjZBwz2%2Fc6Or%2BSLRs047lPjdlLHoFWz06clWU9JUiY4sqOeDJlpKNLPczc0APMBUsmJGVfO8%2B0CzpN%2BSHpBoXZhrSQFPKR3pI50l1lOJ%2FCUYXc%2B2DhnyBLm8efIPj75Uhk9ILGC4Rj938ouJxSkr02i1Z2LTL%2BOoRUyENi8pzqqHLaQVKAhdqYp1iJQ9bl9vWD18vmGPKSd8CalaBByaecOowOSa%2FXV9%2FXV5o1UmcZxBvWRaWIMDpA5X%2FEbxviwH9m3QSaY1suNtfErNmgPr8OiDRRzl8%2FGUyAvnaDq9tg4ue6szXJP0h6fkTXShuIWUKDgkjbfiAiBWUpt8YDrAyFQb56kHXC%2FSsXaRlh4zg2UDvhHTFz%2Bqs2o8fimVwLi4PLUenKy83zW744jgTOJtWKd9RkYb82CUzKiKySrmMMLHsPLNmajgjey%2FJGOOV9unGgjVTo8vmSGZKZ7CXWH6MPfrzb8GOqUB5jAFE4ARS3i3c9NT%2Fq35NRVeOQiIeU1vNq%2BPfykJaU1ljcqZqr8DEEYuRFpgs3gdyWNJLql%2Fceg6FMDopecDw%2FfXr%2BB3ymBreAOKTZxNkSuu7sBfTSe13bydyx5MeikY42DgjtmWY6%2FhAoxM3fP23KcRz9TGdESKNXIAIzAyuEBQPRSrzqXIOzvubFTCZSy3HKVtNf1LJ0j1UR95bwpeBbXdYFDN&X-Amz-Signature=8c41d342f687fd5b927cc5c7032ebf2bb0d187d61cd5a3428db8c453356cb428&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPL6U3G%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6mrUg0x512ul35GTBcKgiLB3%2FSsBQL7m2UKXooC520AiEA249Ks5XFA%2FP95gJTFQN9c3PHY5%2F0SHyJMEs6EnEDZf8q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDG2HuPtY2ho7PwX45yrcAyHCmZGB2zZuZeBosGnXUhwPQfaJO2lvp9Vf8TYrGniiVsZNnF5LjyAPVsmhS1omi6ak5nhVVBGzD%2BcMNH6Grzrhsz5oE8%2BVjxvOmOA5Q20eTsmg9DpQUd0N1FYGRDugZVNpQ08GpS4Uc8pMpX74%2FjyTlcAE3um2Qt8sTuiYKjZBwz2%2Fc6Or%2BSLRs047lPjdlLHoFWz06clWU9JUiY4sqOeDJlpKNLPczc0APMBUsmJGVfO8%2B0CzpN%2BSHpBoXZhrSQFPKR3pI50l1lOJ%2FCUYXc%2B2DhnyBLm8efIPj75Uhk9ILGC4Rj938ouJxSkr02i1Z2LTL%2BOoRUyENi8pzqqHLaQVKAhdqYp1iJQ9bl9vWD18vmGPKSd8CalaBByaecOowOSa%2FXV9%2FXV5o1UmcZxBvWRaWIMDpA5X%2FEbxviwH9m3QSaY1suNtfErNmgPr8OiDRRzl8%2FGUyAvnaDq9tg4ue6szXJP0h6fkTXShuIWUKDgkjbfiAiBWUpt8YDrAyFQb56kHXC%2FSsXaRlh4zg2UDvhHTFz%2Bqs2o8fimVwLi4PLUenKy83zW744jgTOJtWKd9RkYb82CUzKiKySrmMMLHsPLNmajgjey%2FJGOOV9unGgjVTo8vmSGZKZ7CXWH6MPfrzb8GOqUB5jAFE4ARS3i3c9NT%2Fq35NRVeOQiIeU1vNq%2BPfykJaU1ljcqZqr8DEEYuRFpgs3gdyWNJLql%2Fceg6FMDopecDw%2FfXr%2BB3ymBreAOKTZxNkSuu7sBfTSe13bydyx5MeikY42DgjtmWY6%2FhAoxM3fP23KcRz9TGdESKNXIAIzAyuEBQPRSrzqXIOzvubFTCZSy3HKVtNf1LJ0j1UR95bwpeBbXdYFDN&X-Amz-Signature=405567aed6817d6247fb9407f4e548030d4ff78d83f2a3f186b5ac2963dfc479&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAPL6U3G%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH6mrUg0x512ul35GTBcKgiLB3%2FSsBQL7m2UKXooC520AiEA249Ks5XFA%2FP95gJTFQN9c3PHY5%2F0SHyJMEs6EnEDZf8q%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDG2HuPtY2ho7PwX45yrcAyHCmZGB2zZuZeBosGnXUhwPQfaJO2lvp9Vf8TYrGniiVsZNnF5LjyAPVsmhS1omi6ak5nhVVBGzD%2BcMNH6Grzrhsz5oE8%2BVjxvOmOA5Q20eTsmg9DpQUd0N1FYGRDugZVNpQ08GpS4Uc8pMpX74%2FjyTlcAE3um2Qt8sTuiYKjZBwz2%2Fc6Or%2BSLRs047lPjdlLHoFWz06clWU9JUiY4sqOeDJlpKNLPczc0APMBUsmJGVfO8%2B0CzpN%2BSHpBoXZhrSQFPKR3pI50l1lOJ%2FCUYXc%2B2DhnyBLm8efIPj75Uhk9ILGC4Rj938ouJxSkr02i1Z2LTL%2BOoRUyENi8pzqqHLaQVKAhdqYp1iJQ9bl9vWD18vmGPKSd8CalaBByaecOowOSa%2FXV9%2FXV5o1UmcZxBvWRaWIMDpA5X%2FEbxviwH9m3QSaY1suNtfErNmgPr8OiDRRzl8%2FGUyAvnaDq9tg4ue6szXJP0h6fkTXShuIWUKDgkjbfiAiBWUpt8YDrAyFQb56kHXC%2FSsXaRlh4zg2UDvhHTFz%2Bqs2o8fimVwLi4PLUenKy83zW744jgTOJtWKd9RkYb82CUzKiKySrmMMLHsPLNmajgjey%2FJGOOV9unGgjVTo8vmSGZKZ7CXWH6MPfrzb8GOqUB5jAFE4ARS3i3c9NT%2Fq35NRVeOQiIeU1vNq%2BPfykJaU1ljcqZqr8DEEYuRFpgs3gdyWNJLql%2Fceg6FMDopecDw%2FfXr%2BB3ymBreAOKTZxNkSuu7sBfTSe13bydyx5MeikY42DgjtmWY6%2FhAoxM3fP23KcRz9TGdESKNXIAIzAyuEBQPRSrzqXIOzvubFTCZSy3HKVtNf1LJ0j1UR95bwpeBbXdYFDN&X-Amz-Signature=d168ad949043253862454bf61c35f24752d6db1b252289c86a1b38ffe622e6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

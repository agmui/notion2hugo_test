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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCKXPV27%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUyluWsUouMheBZ%2FfRMHGyypr9eaPgRRCRqZpsjbV7YAiEA1vl3S9Wj67IS0QJEXZRfV9eia4ykLUEkLS7I9V%2BM8%2Fgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAWwTax6MvmkDHGemyrcA0fzw0elGz9ofY2xYRVsv9H8lnB%2FRAIdTBFqhOb3czeOg41DmJUMJTuNeMP4m1qR2dsEUAJVeXhpp8jHH5wqUf2SNApQeW9hNfLPtVPIxOln7HkUSYmUfvkjqI6qWm9VIxOftRgB71pjAopGiNjRvOoy5yASa%2BpPpy72%2BptLj4HRxblfVQ30VUEEn%2BZuE0aUf43t65YjmFgCdxcpDI2OoqSBz8PPdxBdOXbJMzg%2FyOIJUKHFHFohbEROULUM9sh4XZutQKZHYuJfVPd7ECvE7dmEGTjlNMn8CgJUaW1wr38sDf75mMduiTM%2FfIIiYt69%2Fv4MdmBvABvMrGF%2FAsTJcLrAFk%2FwnuQSkMQNWw4Eao8his3KmjOLbyfZN4M5zAU%2BOTG2IbqdTyFYSJNv8ZfkdDnGaMgzmRpGBE8Bwjf7xLRxWTRs6CSv0bPYQn63pT8F23TqOlrkCntunhVeNmubuIvSRlQ5XlVRmB5i%2Frdj92zwrC2StxYK4ixoLnTOluniQILFYd%2Bsu3MEK9O3Vkfnu4EfXzG7bjoaLdWdw0P3ml5ppG1XNvR5ZSx0hZGhhRKKqOZ7pciqSuDHnZmqLqvsDviLwGvCehX5gWf1qXp5sXwGN8fXJHDY6FkRo%2FlYML%2F9mcEGOqUBdYocjbRwexWFthOxOhf90cx%2FRzyFlIJQTxfVBPFeMUe3nUfUuKEetCsQAuCIE5DJ9VVubIocoNVgDTE26jOn1tk0syYG46HhhGoSC%2Fi4D06VJCp%2BIAkthnAc%2BbMSELVAHyFauw9KqvTGvfhEXx5lOe5n8yXBRf%2Ff023qq6oWhLvsY3wZ2a%2FMC0wsy3GVO0T%2BJWC9BtU%2FhCKqU0DX6VSJkhbS1wnX&X-Amz-Signature=e815ceededc7ba460ce579acc57ec8ce3322cf4fa2172b6a858a644ff96509ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCKXPV27%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUyluWsUouMheBZ%2FfRMHGyypr9eaPgRRCRqZpsjbV7YAiEA1vl3S9Wj67IS0QJEXZRfV9eia4ykLUEkLS7I9V%2BM8%2Fgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAWwTax6MvmkDHGemyrcA0fzw0elGz9ofY2xYRVsv9H8lnB%2FRAIdTBFqhOb3czeOg41DmJUMJTuNeMP4m1qR2dsEUAJVeXhpp8jHH5wqUf2SNApQeW9hNfLPtVPIxOln7HkUSYmUfvkjqI6qWm9VIxOftRgB71pjAopGiNjRvOoy5yASa%2BpPpy72%2BptLj4HRxblfVQ30VUEEn%2BZuE0aUf43t65YjmFgCdxcpDI2OoqSBz8PPdxBdOXbJMzg%2FyOIJUKHFHFohbEROULUM9sh4XZutQKZHYuJfVPd7ECvE7dmEGTjlNMn8CgJUaW1wr38sDf75mMduiTM%2FfIIiYt69%2Fv4MdmBvABvMrGF%2FAsTJcLrAFk%2FwnuQSkMQNWw4Eao8his3KmjOLbyfZN4M5zAU%2BOTG2IbqdTyFYSJNv8ZfkdDnGaMgzmRpGBE8Bwjf7xLRxWTRs6CSv0bPYQn63pT8F23TqOlrkCntunhVeNmubuIvSRlQ5XlVRmB5i%2Frdj92zwrC2StxYK4ixoLnTOluniQILFYd%2Bsu3MEK9O3Vkfnu4EfXzG7bjoaLdWdw0P3ml5ppG1XNvR5ZSx0hZGhhRKKqOZ7pciqSuDHnZmqLqvsDviLwGvCehX5gWf1qXp5sXwGN8fXJHDY6FkRo%2FlYML%2F9mcEGOqUBdYocjbRwexWFthOxOhf90cx%2FRzyFlIJQTxfVBPFeMUe3nUfUuKEetCsQAuCIE5DJ9VVubIocoNVgDTE26jOn1tk0syYG46HhhGoSC%2Fi4D06VJCp%2BIAkthnAc%2BbMSELVAHyFauw9KqvTGvfhEXx5lOe5n8yXBRf%2Ff023qq6oWhLvsY3wZ2a%2FMC0wsy3GVO0T%2BJWC9BtU%2FhCKqU0DX6VSJkhbS1wnX&X-Amz-Signature=2f6c088be009d982944b62915bf19563be5a57d5bbd93bfb27d798d8585639ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCKXPV27%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T022809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUyluWsUouMheBZ%2FfRMHGyypr9eaPgRRCRqZpsjbV7YAiEA1vl3S9Wj67IS0QJEXZRfV9eia4ykLUEkLS7I9V%2BM8%2Fgq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDAWwTax6MvmkDHGemyrcA0fzw0elGz9ofY2xYRVsv9H8lnB%2FRAIdTBFqhOb3czeOg41DmJUMJTuNeMP4m1qR2dsEUAJVeXhpp8jHH5wqUf2SNApQeW9hNfLPtVPIxOln7HkUSYmUfvkjqI6qWm9VIxOftRgB71pjAopGiNjRvOoy5yASa%2BpPpy72%2BptLj4HRxblfVQ30VUEEn%2BZuE0aUf43t65YjmFgCdxcpDI2OoqSBz8PPdxBdOXbJMzg%2FyOIJUKHFHFohbEROULUM9sh4XZutQKZHYuJfVPd7ECvE7dmEGTjlNMn8CgJUaW1wr38sDf75mMduiTM%2FfIIiYt69%2Fv4MdmBvABvMrGF%2FAsTJcLrAFk%2FwnuQSkMQNWw4Eao8his3KmjOLbyfZN4M5zAU%2BOTG2IbqdTyFYSJNv8ZfkdDnGaMgzmRpGBE8Bwjf7xLRxWTRs6CSv0bPYQn63pT8F23TqOlrkCntunhVeNmubuIvSRlQ5XlVRmB5i%2Frdj92zwrC2StxYK4ixoLnTOluniQILFYd%2Bsu3MEK9O3Vkfnu4EfXzG7bjoaLdWdw0P3ml5ppG1XNvR5ZSx0hZGhhRKKqOZ7pciqSuDHnZmqLqvsDviLwGvCehX5gWf1qXp5sXwGN8fXJHDY6FkRo%2FlYML%2F9mcEGOqUBdYocjbRwexWFthOxOhf90cx%2FRzyFlIJQTxfVBPFeMUe3nUfUuKEetCsQAuCIE5DJ9VVubIocoNVgDTE26jOn1tk0syYG46HhhGoSC%2Fi4D06VJCp%2BIAkthnAc%2BbMSELVAHyFauw9KqvTGvfhEXx5lOe5n8yXBRf%2Ff023qq6oWhLvsY3wZ2a%2FMC0wsy3GVO0T%2BJWC9BtU%2FhCKqU0DX6VSJkhbS1wnX&X-Amz-Signature=af6170b6525518aa0e307186e6962413104338ae353cc5813946648dbc7263df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

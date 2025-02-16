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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZE4O23%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDefD4L5bWIrgDaJCscVsU3GEguLnLGr%2B7Sgbduns0fyAIhALPsdh6JNWpPEtPRx7XxE68ZrhjjbjnP91WQBw8eumIHKv8DCGUQABoMNjM3NDIzMTgzODA1IgxiXA7RqhLORLFUZV4q3AOWP0vMbo58cDg1FDCJm8Md6UGXC8JqiS2bohpMZ%2BsuCx831LZOFyjgytJrOAVOdsugfU5PiM%2BhSMc9mpTqZAuRH7mseMn9%2FtmOCjciDNpL5HOmozteMzX8TG%2BppC67DTYRb2sisdDGXuI6X%2BDn%2FTu%2FBT2cNvh%2FwmtfhxtpePDPFiZmQmqQHHhO323PydNrMVxgeDM1lHfRLReeFdFcjIs5c9UVzUOMVfpA%2Bb4Lwmv7NGBMCwcErn7nHNHCVq8Fjt0FuF0x0zJWXjRecPf0ULdwh4icbRteKaGssh5f0q%2FjqVbE4E%2FZEzvSYSqvGLDyj%2BMFEpR%2BsSkfx2MI300DhKZEcHm6iyfnXeQ1WL6bou84JKtVavFwWUaFQjJRMILk4yAfyJi5vMSgIKejqyKaR76WRDQ0nQA19RUde7dt3JBztrXHbJT3ZyR8%2BqYv0XrlBuylAtBdXDVpILzu2cb6VYKR8YEuAb4ZmrU17fDtgdKszGSu4EDkvjbS5PngZgEnH1PImSGRTBb9%2BxRdT0ZUJnHGDt1QmAIS2gU29gGUTSeCFmuI67mMvLgB6KTx6UnKSeaUJSujtldawbHyL%2Bg3BHR4trDqRa%2B8EqewlLB0BrIavNHS8RN4aadOjKrDuzCwiMm9BjqkASBe9A0lTE4lBByQH8NM2xQoKJLoNXy6tgtBGJblN00Ph%2FLT%2BQzap55lORuGc0UWdURh9wtka786QEn4t8742kQhwP4fXMvFWN7wlaZ%2FtaBooplJG9xmAK4JeBJQ1u1JQ5NZYKQZzK9TCHbCpYzBd%2Fjg6bDQkBcnpiE5RemUddYpYP4HE2XqfDdMGzJdBiqaVkr1ML1pqurmf%2F6CLHoRkcR4HUoD&X-Amz-Signature=21fd2f751f564a34504b3b816ad2f21207fb5a808279da5216091f7eb372656e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZE4O23%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDefD4L5bWIrgDaJCscVsU3GEguLnLGr%2B7Sgbduns0fyAIhALPsdh6JNWpPEtPRx7XxE68ZrhjjbjnP91WQBw8eumIHKv8DCGUQABoMNjM3NDIzMTgzODA1IgxiXA7RqhLORLFUZV4q3AOWP0vMbo58cDg1FDCJm8Md6UGXC8JqiS2bohpMZ%2BsuCx831LZOFyjgytJrOAVOdsugfU5PiM%2BhSMc9mpTqZAuRH7mseMn9%2FtmOCjciDNpL5HOmozteMzX8TG%2BppC67DTYRb2sisdDGXuI6X%2BDn%2FTu%2FBT2cNvh%2FwmtfhxtpePDPFiZmQmqQHHhO323PydNrMVxgeDM1lHfRLReeFdFcjIs5c9UVzUOMVfpA%2Bb4Lwmv7NGBMCwcErn7nHNHCVq8Fjt0FuF0x0zJWXjRecPf0ULdwh4icbRteKaGssh5f0q%2FjqVbE4E%2FZEzvSYSqvGLDyj%2BMFEpR%2BsSkfx2MI300DhKZEcHm6iyfnXeQ1WL6bou84JKtVavFwWUaFQjJRMILk4yAfyJi5vMSgIKejqyKaR76WRDQ0nQA19RUde7dt3JBztrXHbJT3ZyR8%2BqYv0XrlBuylAtBdXDVpILzu2cb6VYKR8YEuAb4ZmrU17fDtgdKszGSu4EDkvjbS5PngZgEnH1PImSGRTBb9%2BxRdT0ZUJnHGDt1QmAIS2gU29gGUTSeCFmuI67mMvLgB6KTx6UnKSeaUJSujtldawbHyL%2Bg3BHR4trDqRa%2B8EqewlLB0BrIavNHS8RN4aadOjKrDuzCwiMm9BjqkASBe9A0lTE4lBByQH8NM2xQoKJLoNXy6tgtBGJblN00Ph%2FLT%2BQzap55lORuGc0UWdURh9wtka786QEn4t8742kQhwP4fXMvFWN7wlaZ%2FtaBooplJG9xmAK4JeBJQ1u1JQ5NZYKQZzK9TCHbCpYzBd%2Fjg6bDQkBcnpiE5RemUddYpYP4HE2XqfDdMGzJdBiqaVkr1ML1pqurmf%2F6CLHoRkcR4HUoD&X-Amz-Signature=201f6def1a7d393b9d7df9aaf457ad4e9e30f9ecf9a78bc256a747f749cb69c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNZE4O23%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDefD4L5bWIrgDaJCscVsU3GEguLnLGr%2B7Sgbduns0fyAIhALPsdh6JNWpPEtPRx7XxE68ZrhjjbjnP91WQBw8eumIHKv8DCGUQABoMNjM3NDIzMTgzODA1IgxiXA7RqhLORLFUZV4q3AOWP0vMbo58cDg1FDCJm8Md6UGXC8JqiS2bohpMZ%2BsuCx831LZOFyjgytJrOAVOdsugfU5PiM%2BhSMc9mpTqZAuRH7mseMn9%2FtmOCjciDNpL5HOmozteMzX8TG%2BppC67DTYRb2sisdDGXuI6X%2BDn%2FTu%2FBT2cNvh%2FwmtfhxtpePDPFiZmQmqQHHhO323PydNrMVxgeDM1lHfRLReeFdFcjIs5c9UVzUOMVfpA%2Bb4Lwmv7NGBMCwcErn7nHNHCVq8Fjt0FuF0x0zJWXjRecPf0ULdwh4icbRteKaGssh5f0q%2FjqVbE4E%2FZEzvSYSqvGLDyj%2BMFEpR%2BsSkfx2MI300DhKZEcHm6iyfnXeQ1WL6bou84JKtVavFwWUaFQjJRMILk4yAfyJi5vMSgIKejqyKaR76WRDQ0nQA19RUde7dt3JBztrXHbJT3ZyR8%2BqYv0XrlBuylAtBdXDVpILzu2cb6VYKR8YEuAb4ZmrU17fDtgdKszGSu4EDkvjbS5PngZgEnH1PImSGRTBb9%2BxRdT0ZUJnHGDt1QmAIS2gU29gGUTSeCFmuI67mMvLgB6KTx6UnKSeaUJSujtldawbHyL%2Bg3BHR4trDqRa%2B8EqewlLB0BrIavNHS8RN4aadOjKrDuzCwiMm9BjqkASBe9A0lTE4lBByQH8NM2xQoKJLoNXy6tgtBGJblN00Ph%2FLT%2BQzap55lORuGc0UWdURh9wtka786QEn4t8742kQhwP4fXMvFWN7wlaZ%2FtaBooplJG9xmAK4JeBJQ1u1JQ5NZYKQZzK9TCHbCpYzBd%2Fjg6bDQkBcnpiE5RemUddYpYP4HE2XqfDdMGzJdBiqaVkr1ML1pqurmf%2F6CLHoRkcR4HUoD&X-Amz-Signature=24d11c119465b02d560691450f2f0267a265a668dac3cb687e7c18c857a9fc0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

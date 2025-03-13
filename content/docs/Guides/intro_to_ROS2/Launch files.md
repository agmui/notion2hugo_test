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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBAW2RX3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCpGJIWYJhma%2FSpwQBUQhBwrwmXjAaMCUoyM2v8rOZigIhAOpFXN2Rso2NR655FnJR8iu8oc9sDKbC4oNn%2FJoOLwLFKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwekajYv0dQ4JsPv1cq3AMKRrgmLNzm6%2B6JtpvwZaa9rf6DBxjTgjtL%2FJPTQAX5KbKQDmHWc01VTJQ9ZLUBTaArKXx7ZF81FzB8cwu8%2BXqlhoTbrEG%2B8tfMLB94xRvOEJfgCaRWTX1Vt5Zg7P6CMV2ZcEidmXv2Py2mz2JM%2BUa5qB03qbIrKvVNo%2BvQiwi9A1Y4kkXxw6UkcT3CFrSzhJx6V5tynwxrJltRUZUwgyuZgFPCDlI54hw%2BbK7AIYBmw4o3Qszvd9pm1BP2ifCEqQHhEQgu%2BSsLT%2BD4a1gQ6dbAGrbqoygivpKFW58ifSBuDV0DssfmVRhtU%2BN7xxC%2FultykspWcKqFuNR0dAjomj1Qk%2BU7VdEAuZ3lr4udQe%2BBvA8vQooqmxJaPhb8VvRGNiMAznz2RCdQ8rrcrhUX%2BipqcLblFYJbrgMdhlWsd6Ujir3XgLVynyO0IQKn0tj32p7aqXMkiH60t47tKEIQvJKrXIxXudLPF1sfYCul%2FzrkG3gyk9%2FxQXVZsV4fln3DbyGtuohpKyUw504zdz2UsruLMfxq%2FIf%2BoCEWgPmgMIrMEplZGKPDfR9Fk%2F0AF9qlJceFvW4dhP%2F%2FNEqbd9ZN8jA9jHSkQIpVgDkclwtEb3I1q48eGaykqf1QS4ySqTDIlsy%2BBjqkAQhq7kfNVG%2BiH3TKLJ62TS0BOxrn70yUbEMufX%2Fcy2Gj0aijBXDPFXr8KAIggtkmmLnR2Odkt7%2FvyfVlcMcAEwtG%2F%2BHK3EKFmn2po%2B1HRP33upsBZj%2BsZHlT%2BVK%2FfoSq9ydP6deVnuiqN4TQEyjfCzAi1ZRAP6X8FXDZ4yYFlDUWul%2FPdO1Kej4CLLMkpjoRlJvWS6ZgWbaL19DzJutHFbuLs9Ut&X-Amz-Signature=e0f11997c7d22dd278996e8ece2e780928f71031af28b38178798cd6c6770f16&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBAW2RX3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCpGJIWYJhma%2FSpwQBUQhBwrwmXjAaMCUoyM2v8rOZigIhAOpFXN2Rso2NR655FnJR8iu8oc9sDKbC4oNn%2FJoOLwLFKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwekajYv0dQ4JsPv1cq3AMKRrgmLNzm6%2B6JtpvwZaa9rf6DBxjTgjtL%2FJPTQAX5KbKQDmHWc01VTJQ9ZLUBTaArKXx7ZF81FzB8cwu8%2BXqlhoTbrEG%2B8tfMLB94xRvOEJfgCaRWTX1Vt5Zg7P6CMV2ZcEidmXv2Py2mz2JM%2BUa5qB03qbIrKvVNo%2BvQiwi9A1Y4kkXxw6UkcT3CFrSzhJx6V5tynwxrJltRUZUwgyuZgFPCDlI54hw%2BbK7AIYBmw4o3Qszvd9pm1BP2ifCEqQHhEQgu%2BSsLT%2BD4a1gQ6dbAGrbqoygivpKFW58ifSBuDV0DssfmVRhtU%2BN7xxC%2FultykspWcKqFuNR0dAjomj1Qk%2BU7VdEAuZ3lr4udQe%2BBvA8vQooqmxJaPhb8VvRGNiMAznz2RCdQ8rrcrhUX%2BipqcLblFYJbrgMdhlWsd6Ujir3XgLVynyO0IQKn0tj32p7aqXMkiH60t47tKEIQvJKrXIxXudLPF1sfYCul%2FzrkG3gyk9%2FxQXVZsV4fln3DbyGtuohpKyUw504zdz2UsruLMfxq%2FIf%2BoCEWgPmgMIrMEplZGKPDfR9Fk%2F0AF9qlJceFvW4dhP%2F%2FNEqbd9ZN8jA9jHSkQIpVgDkclwtEb3I1q48eGaykqf1QS4ySqTDIlsy%2BBjqkAQhq7kfNVG%2BiH3TKLJ62TS0BOxrn70yUbEMufX%2Fcy2Gj0aijBXDPFXr8KAIggtkmmLnR2Odkt7%2FvyfVlcMcAEwtG%2F%2BHK3EKFmn2po%2B1HRP33upsBZj%2BsZHlT%2BVK%2FfoSq9ydP6deVnuiqN4TQEyjfCzAi1ZRAP6X8FXDZ4yYFlDUWul%2FPdO1Kej4CLLMkpjoRlJvWS6ZgWbaL19DzJutHFbuLs9Ut&X-Amz-Signature=ec6f901349177660cba9e1f3b9a225c333f5c7303a9e1b6a65994ba97efb6d48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBAW2RX3%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T170114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCpGJIWYJhma%2FSpwQBUQhBwrwmXjAaMCUoyM2v8rOZigIhAOpFXN2Rso2NR655FnJR8iu8oc9sDKbC4oNn%2FJoOLwLFKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwekajYv0dQ4JsPv1cq3AMKRrgmLNzm6%2B6JtpvwZaa9rf6DBxjTgjtL%2FJPTQAX5KbKQDmHWc01VTJQ9ZLUBTaArKXx7ZF81FzB8cwu8%2BXqlhoTbrEG%2B8tfMLB94xRvOEJfgCaRWTX1Vt5Zg7P6CMV2ZcEidmXv2Py2mz2JM%2BUa5qB03qbIrKvVNo%2BvQiwi9A1Y4kkXxw6UkcT3CFrSzhJx6V5tynwxrJltRUZUwgyuZgFPCDlI54hw%2BbK7AIYBmw4o3Qszvd9pm1BP2ifCEqQHhEQgu%2BSsLT%2BD4a1gQ6dbAGrbqoygivpKFW58ifSBuDV0DssfmVRhtU%2BN7xxC%2FultykspWcKqFuNR0dAjomj1Qk%2BU7VdEAuZ3lr4udQe%2BBvA8vQooqmxJaPhb8VvRGNiMAznz2RCdQ8rrcrhUX%2BipqcLblFYJbrgMdhlWsd6Ujir3XgLVynyO0IQKn0tj32p7aqXMkiH60t47tKEIQvJKrXIxXudLPF1sfYCul%2FzrkG3gyk9%2FxQXVZsV4fln3DbyGtuohpKyUw504zdz2UsruLMfxq%2FIf%2BoCEWgPmgMIrMEplZGKPDfR9Fk%2F0AF9qlJceFvW4dhP%2F%2FNEqbd9ZN8jA9jHSkQIpVgDkclwtEb3I1q48eGaykqf1QS4ySqTDIlsy%2BBjqkAQhq7kfNVG%2BiH3TKLJ62TS0BOxrn70yUbEMufX%2Fcy2Gj0aijBXDPFXr8KAIggtkmmLnR2Odkt7%2FvyfVlcMcAEwtG%2F%2BHK3EKFmn2po%2B1HRP33upsBZj%2BsZHlT%2BVK%2FfoSq9ydP6deVnuiqN4TQEyjfCzAi1ZRAP6X8FXDZ4yYFlDUWul%2FPdO1Kej4CLLMkpjoRlJvWS6ZgWbaL19DzJutHFbuLs9Ut&X-Amz-Signature=8ed096e88946fd587d925f566af8ce971c4e962d731ccba90df8ce6bc63a9fd1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

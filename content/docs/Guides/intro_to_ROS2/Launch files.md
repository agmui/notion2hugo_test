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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROVSQUV4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCmUAd1lZclseOd0U5kPUDU7ZrW5s2fU2A4%2BHW9TB3g4AIhALulFltRiQel%2BiSqAWk%2Fj0Ur0srUZLCGFc26Fgw7gJjrKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypIINvPUqANligWIUq3APvU6FjHyn9HLJmr0J%2Bi%2BV5JGZbAl2N1xdC7mKBFtDgKtQay72dScA9t0elrbLmcle0frXDgJNgWMBfcO2r0JiBSvJvIAVna62J75AmFTj5fDjBGQSAwz9CfR82%2FHuytUnPVebLigeSBx1RGthH%2Ft4skQ%2F8XDMFaEK4Ypsy0untJTZr2B%2BVRw%2FUZsx0%2BlTxwUQnIted%2BndAeqw749RVoeuj5NegNLarjX24DhBBScAQcGeegeeQZfy4TTAyHBKYBNwH%2BnepNvuQT4g4algj4daeUtK5M0NsqCrPqFrzK87yV9aEpZNER8ocgj4s0EgSnjp8Q6vhaA8HlHVtecIChrM0QypIAi9371EAZOHXmtpS5Ofr2XeVY5Z2g13EN89gQ01Mux38AzlGvdif%2BQmhbmOBaqBdY1qTYU6HsVjQuE%2FXtCgj%2F6DUj6b75FNloVn8YFlRHwHbLhumUDI0xDyl4MNqHiXLT7IniKARtToImzRV2VzI3%2B6gw2gZCHA59cG8s6rvoVltbYwKjZex9sGVo5S%2FKFoK9eM5oBU5LZbJt8%2FYSk5nBoi1TXwAWSY%2Fh%2BqaXdJcj3UkENIRlpLccFNVvo4Ln641AIKBpfA7aPMLWrbC9mZThu80ubLjiDDr6jDUp%2Bi%2FBjqkAalGCBxkUaXDpOmror8zEkBv%2Byq5LCvrtHkaxkiwVOxUjUFB9kleS%2FPrsE1FohrqY1rXmedRQsNK5Klrck%2BrPUmamW0cW10L3AMP6mRqtJIn6wdg%2BWnbyn7bEV7pRtkaz5KHggk0lgRhMt73OmZEQ4n7ksl8M0N%2BJRhxEZCkqXie%2BaxHpdRTvTfHYWlc1C4dkjSaqzThYgEIAURsRSpy4UKBSE5Z&X-Amz-Signature=a53cbf976c4178c4ea2d07c7dcf956e06586ea233b65a45515a353fa0a3edadb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROVSQUV4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCmUAd1lZclseOd0U5kPUDU7ZrW5s2fU2A4%2BHW9TB3g4AIhALulFltRiQel%2BiSqAWk%2Fj0Ur0srUZLCGFc26Fgw7gJjrKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypIINvPUqANligWIUq3APvU6FjHyn9HLJmr0J%2Bi%2BV5JGZbAl2N1xdC7mKBFtDgKtQay72dScA9t0elrbLmcle0frXDgJNgWMBfcO2r0JiBSvJvIAVna62J75AmFTj5fDjBGQSAwz9CfR82%2FHuytUnPVebLigeSBx1RGthH%2Ft4skQ%2F8XDMFaEK4Ypsy0untJTZr2B%2BVRw%2FUZsx0%2BlTxwUQnIted%2BndAeqw749RVoeuj5NegNLarjX24DhBBScAQcGeegeeQZfy4TTAyHBKYBNwH%2BnepNvuQT4g4algj4daeUtK5M0NsqCrPqFrzK87yV9aEpZNER8ocgj4s0EgSnjp8Q6vhaA8HlHVtecIChrM0QypIAi9371EAZOHXmtpS5Ofr2XeVY5Z2g13EN89gQ01Mux38AzlGvdif%2BQmhbmOBaqBdY1qTYU6HsVjQuE%2FXtCgj%2F6DUj6b75FNloVn8YFlRHwHbLhumUDI0xDyl4MNqHiXLT7IniKARtToImzRV2VzI3%2B6gw2gZCHA59cG8s6rvoVltbYwKjZex9sGVo5S%2FKFoK9eM5oBU5LZbJt8%2FYSk5nBoi1TXwAWSY%2Fh%2BqaXdJcj3UkENIRlpLccFNVvo4Ln641AIKBpfA7aPMLWrbC9mZThu80ubLjiDDr6jDUp%2Bi%2FBjqkAalGCBxkUaXDpOmror8zEkBv%2Byq5LCvrtHkaxkiwVOxUjUFB9kleS%2FPrsE1FohrqY1rXmedRQsNK5Klrck%2BrPUmamW0cW10L3AMP6mRqtJIn6wdg%2BWnbyn7bEV7pRtkaz5KHggk0lgRhMt73OmZEQ4n7ksl8M0N%2BJRhxEZCkqXie%2BaxHpdRTvTfHYWlc1C4dkjSaqzThYgEIAURsRSpy4UKBSE5Z&X-Amz-Signature=2efbc0129ac8e93118acfe004b28bb0176a0da4cbf53d14bec91ea8676bed5dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROVSQUV4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T121301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCmUAd1lZclseOd0U5kPUDU7ZrW5s2fU2A4%2BHW9TB3g4AIhALulFltRiQel%2BiSqAWk%2Fj0Ur0srUZLCGFc26Fgw7gJjrKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypIINvPUqANligWIUq3APvU6FjHyn9HLJmr0J%2Bi%2BV5JGZbAl2N1xdC7mKBFtDgKtQay72dScA9t0elrbLmcle0frXDgJNgWMBfcO2r0JiBSvJvIAVna62J75AmFTj5fDjBGQSAwz9CfR82%2FHuytUnPVebLigeSBx1RGthH%2Ft4skQ%2F8XDMFaEK4Ypsy0untJTZr2B%2BVRw%2FUZsx0%2BlTxwUQnIted%2BndAeqw749RVoeuj5NegNLarjX24DhBBScAQcGeegeeQZfy4TTAyHBKYBNwH%2BnepNvuQT4g4algj4daeUtK5M0NsqCrPqFrzK87yV9aEpZNER8ocgj4s0EgSnjp8Q6vhaA8HlHVtecIChrM0QypIAi9371EAZOHXmtpS5Ofr2XeVY5Z2g13EN89gQ01Mux38AzlGvdif%2BQmhbmOBaqBdY1qTYU6HsVjQuE%2FXtCgj%2F6DUj6b75FNloVn8YFlRHwHbLhumUDI0xDyl4MNqHiXLT7IniKARtToImzRV2VzI3%2B6gw2gZCHA59cG8s6rvoVltbYwKjZex9sGVo5S%2FKFoK9eM5oBU5LZbJt8%2FYSk5nBoi1TXwAWSY%2Fh%2BqaXdJcj3UkENIRlpLccFNVvo4Ln641AIKBpfA7aPMLWrbC9mZThu80ubLjiDDr6jDUp%2Bi%2FBjqkAalGCBxkUaXDpOmror8zEkBv%2Byq5LCvrtHkaxkiwVOxUjUFB9kleS%2FPrsE1FohrqY1rXmedRQsNK5Klrck%2BrPUmamW0cW10L3AMP6mRqtJIn6wdg%2BWnbyn7bEV7pRtkaz5KHggk0lgRhMt73OmZEQ4n7ksl8M0N%2BJRhxEZCkqXie%2BaxHpdRTvTfHYWlc1C4dkjSaqzThYgEIAURsRSpy4UKBSE5Z&X-Amz-Signature=8e8d11a449cb26d3026d074eb08b1fc58c544377f70428285671139e24d8451a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

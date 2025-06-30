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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCXUU3US%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmpbcCLr0wWanuUrBH71j4QdwCV494oz9oFjNz6n5atAIhAIXDh%2BsW20%2BD4MjbRQwYtxYbyoRxkpO2cxaj623agNeDKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYqxBkkmoi5Vs0%2F0Yq3ANvEY96dLMWb%2FU5VWpOrwJ9JqpQRVhjT1wxX4D27JT6EkN5qPkEFB1%2FgXoXWt4DaqXoag7yTeWz%2B%2FX1rEG5mf%2F6hkZUeJYtJ5RlY%2BlNjHU8RkunfuASxNMikqWbfmiOe3u%2BQRu761WVwHIYU2PnOE5rIPhsm2QPPUNyaET9Yd3nULNyAOabEeZlcsTzAW4H8TK30rGORbk1AOto1LfMt5WUmet%2Fv%2BV4emqsXESomsmKvghLhtel2YrdpCfn82ECfdJ3nydkpab44RvDgOtxUWYd2%2Fs8nRBhMYo2ZZNYnpj1Ofb7%2BcBpuqaP1EKSMas8NRonBm9eLfNLqdU2wF8Hh3EqJLObOcnq9icFp0b3O46BgkMJCRfKvtFrY%2FxWzv4GIzBG%2Bqg7W1jXfB1yMSSaG5H1sVyuDoxmkqSlKcnVAKvX5YO2hbeXLEAsm0U%2Fb9sCfZIoFIoK%2FdbuBXHyJC0LEsYiKCaDJr50P%2BMU6UO%2BsHD6SgrgGp5cMq6Iia0zCMi95pzdHOp1bkXR09hETnajo6c7w%2FTnR894e1SGl6RrWY%2BDxtgsBRXlYoQceZ4omMqPn87gXsjoc3vT1aCJYhdM%2F4GuSKINqiVZtWBlCc1ULNpVErsTgCX%2B%2FXaZg9Ya9TDNoonDBjqkAbkB66CX45Y%2F0c50s5fhMiKLuVnXpuxkA%2FyveeFaKkncu6pZk7xJIi5wr3Zfnw8rDNG0u8FXIA9SKzCyzsc84VrujLQpe7kAhuTXCC02zf3ncKNN%2FE%2Fz%2ByQTSZHd60GG%2FtSgmg9IIWpKq4l5gPmmicmKDmhSnsshVmhoDIJuLXalkn%2BxXLFy60yAmOgzeg6ysQffmzcrU7EDEIHVWpP4em2DZpG5&X-Amz-Signature=15d0237483d0f6aef0e92b8ede03e03bea39121d1cdf738a047dadc14b37b1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCXUU3US%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmpbcCLr0wWanuUrBH71j4QdwCV494oz9oFjNz6n5atAIhAIXDh%2BsW20%2BD4MjbRQwYtxYbyoRxkpO2cxaj623agNeDKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYqxBkkmoi5Vs0%2F0Yq3ANvEY96dLMWb%2FU5VWpOrwJ9JqpQRVhjT1wxX4D27JT6EkN5qPkEFB1%2FgXoXWt4DaqXoag7yTeWz%2B%2FX1rEG5mf%2F6hkZUeJYtJ5RlY%2BlNjHU8RkunfuASxNMikqWbfmiOe3u%2BQRu761WVwHIYU2PnOE5rIPhsm2QPPUNyaET9Yd3nULNyAOabEeZlcsTzAW4H8TK30rGORbk1AOto1LfMt5WUmet%2Fv%2BV4emqsXESomsmKvghLhtel2YrdpCfn82ECfdJ3nydkpab44RvDgOtxUWYd2%2Fs8nRBhMYo2ZZNYnpj1Ofb7%2BcBpuqaP1EKSMas8NRonBm9eLfNLqdU2wF8Hh3EqJLObOcnq9icFp0b3O46BgkMJCRfKvtFrY%2FxWzv4GIzBG%2Bqg7W1jXfB1yMSSaG5H1sVyuDoxmkqSlKcnVAKvX5YO2hbeXLEAsm0U%2Fb9sCfZIoFIoK%2FdbuBXHyJC0LEsYiKCaDJr50P%2BMU6UO%2BsHD6SgrgGp5cMq6Iia0zCMi95pzdHOp1bkXR09hETnajo6c7w%2FTnR894e1SGl6RrWY%2BDxtgsBRXlYoQceZ4omMqPn87gXsjoc3vT1aCJYhdM%2F4GuSKINqiVZtWBlCc1ULNpVErsTgCX%2B%2FXaZg9Ya9TDNoonDBjqkAbkB66CX45Y%2F0c50s5fhMiKLuVnXpuxkA%2FyveeFaKkncu6pZk7xJIi5wr3Zfnw8rDNG0u8FXIA9SKzCyzsc84VrujLQpe7kAhuTXCC02zf3ncKNN%2FE%2Fz%2ByQTSZHd60GG%2FtSgmg9IIWpKq4l5gPmmicmKDmhSnsshVmhoDIJuLXalkn%2BxXLFy60yAmOgzeg6ysQffmzcrU7EDEIHVWpP4em2DZpG5&X-Amz-Signature=28fea81d32fa493f3626ae6a73df1c56c89ea0bcad2e6233d4b3bf2bfb1cfb70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCXUU3US%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T091203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmpbcCLr0wWanuUrBH71j4QdwCV494oz9oFjNz6n5atAIhAIXDh%2BsW20%2BD4MjbRQwYtxYbyoRxkpO2cxaj623agNeDKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYqxBkkmoi5Vs0%2F0Yq3ANvEY96dLMWb%2FU5VWpOrwJ9JqpQRVhjT1wxX4D27JT6EkN5qPkEFB1%2FgXoXWt4DaqXoag7yTeWz%2B%2FX1rEG5mf%2F6hkZUeJYtJ5RlY%2BlNjHU8RkunfuASxNMikqWbfmiOe3u%2BQRu761WVwHIYU2PnOE5rIPhsm2QPPUNyaET9Yd3nULNyAOabEeZlcsTzAW4H8TK30rGORbk1AOto1LfMt5WUmet%2Fv%2BV4emqsXESomsmKvghLhtel2YrdpCfn82ECfdJ3nydkpab44RvDgOtxUWYd2%2Fs8nRBhMYo2ZZNYnpj1Ofb7%2BcBpuqaP1EKSMas8NRonBm9eLfNLqdU2wF8Hh3EqJLObOcnq9icFp0b3O46BgkMJCRfKvtFrY%2FxWzv4GIzBG%2Bqg7W1jXfB1yMSSaG5H1sVyuDoxmkqSlKcnVAKvX5YO2hbeXLEAsm0U%2Fb9sCfZIoFIoK%2FdbuBXHyJC0LEsYiKCaDJr50P%2BMU6UO%2BsHD6SgrgGp5cMq6Iia0zCMi95pzdHOp1bkXR09hETnajo6c7w%2FTnR894e1SGl6RrWY%2BDxtgsBRXlYoQceZ4omMqPn87gXsjoc3vT1aCJYhdM%2F4GuSKINqiVZtWBlCc1ULNpVErsTgCX%2B%2FXaZg9Ya9TDNoonDBjqkAbkB66CX45Y%2F0c50s5fhMiKLuVnXpuxkA%2FyveeFaKkncu6pZk7xJIi5wr3Zfnw8rDNG0u8FXIA9SKzCyzsc84VrujLQpe7kAhuTXCC02zf3ncKNN%2FE%2Fz%2ByQTSZHd60GG%2FtSgmg9IIWpKq4l5gPmmicmKDmhSnsshVmhoDIJuLXalkn%2BxXLFy60yAmOgzeg6ysQffmzcrU7EDEIHVWpP4em2DZpG5&X-Amz-Signature=f95a0f4f4cd150325937ae460efd98617028e342b446e00b5f3a9720a03211ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

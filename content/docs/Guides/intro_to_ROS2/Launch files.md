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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I437OI5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAaTpauaaXDulB2QdfvavvplXuxEqolyxtyzjRxOTcHVAiAQux6giDcMbPeiqZ7yW784k29Kle7%2BzrWf2s2LmNNxYCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMGAl8CbUTydQbNE2HKtwD6Lt%2FqZkQPGRnKN%2FMoq4wcsyLgTzhBcDNC1M7vX3P539HfFgkTiIZJ%2Bp5rEEje%2Bm08AsAtOTQuuLHrPabFYh%2BrvWVagBhHoq9j2vJ7QtKw3mH%2FtkLCTdToWq2Mru9AwkmIpGidoDcHS89ftTBq1FglO3qoaMLjGL5AsHkUTibVeExIJDYCQOhsj0YEO9oJy8T7qPd5nW%2BkqFnjSFCA9CvbkBPT6h8F1Tj%2BDZztMGvSQoGbKMoQ3zgYfk9lkiay8uY1K7MnhL7TzecAzzzLphHHvMcFRE4e4rfqn7TvznotRGlnprcrOwQhCZa%2BHjDNzYmMp1hXJ8o05YEFFqZLlX0vnXpABE%2B0XjB8WeRMbBHJzb%2FZn5Frf8%2BzomjwG2eIefqfafEhCvuwNwU3Cmg%2F1c2%2FWCzY3M316I1mtxnfrYrvS%2FFdPGCmPElPaDeFYNSJPACajOfZ5sOxjgZhkcHt7%2BGMgxS%2Fy7OgFOZyJjXBpAOFiozk%2B9XHAJl9JPqetwhpeGns%2BQWgu9s3NZM1cZzmpb%2BNSnRqJLXksiWNI7IJy%2B6Jz90TkqMfHMF20KC1IyZin4NjnNaJt8NtdjODMmEWJj%2BAUQ73a5M2KOkDQ62hfJRAcW8pCZqsiuB2SGSgDsw79eHwgY6pgFFqGz22fpwUBI3O%2F7lBTV5uo2%2FBrL5h0NU5ltbtSYZziJRwrn6zCD7u6sTuRcT2jO1nZ5R0uRCk313cqcmttP9TqDIo2zVNxJxJt2lGz9BCU%2FwuMiZukZoUoiU46wPnDVtB8q%2FNz6I1jZPe3%2B1zao%2F6q%2B47u1h2qlZCBjkmEs9r%2FvaTegyARqY6Vf6JQEU1BOmEdD1RWH9Ddr1cQmyZ0qEtnUW%2BoYj&X-Amz-Signature=3810d3daaf473a2386d40299ac7d41aff4b26e7fcb61caa0d81b515943bf3e40&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I437OI5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAaTpauaaXDulB2QdfvavvplXuxEqolyxtyzjRxOTcHVAiAQux6giDcMbPeiqZ7yW784k29Kle7%2BzrWf2s2LmNNxYCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMGAl8CbUTydQbNE2HKtwD6Lt%2FqZkQPGRnKN%2FMoq4wcsyLgTzhBcDNC1M7vX3P539HfFgkTiIZJ%2Bp5rEEje%2Bm08AsAtOTQuuLHrPabFYh%2BrvWVagBhHoq9j2vJ7QtKw3mH%2FtkLCTdToWq2Mru9AwkmIpGidoDcHS89ftTBq1FglO3qoaMLjGL5AsHkUTibVeExIJDYCQOhsj0YEO9oJy8T7qPd5nW%2BkqFnjSFCA9CvbkBPT6h8F1Tj%2BDZztMGvSQoGbKMoQ3zgYfk9lkiay8uY1K7MnhL7TzecAzzzLphHHvMcFRE4e4rfqn7TvznotRGlnprcrOwQhCZa%2BHjDNzYmMp1hXJ8o05YEFFqZLlX0vnXpABE%2B0XjB8WeRMbBHJzb%2FZn5Frf8%2BzomjwG2eIefqfafEhCvuwNwU3Cmg%2F1c2%2FWCzY3M316I1mtxnfrYrvS%2FFdPGCmPElPaDeFYNSJPACajOfZ5sOxjgZhkcHt7%2BGMgxS%2Fy7OgFOZyJjXBpAOFiozk%2B9XHAJl9JPqetwhpeGns%2BQWgu9s3NZM1cZzmpb%2BNSnRqJLXksiWNI7IJy%2B6Jz90TkqMfHMF20KC1IyZin4NjnNaJt8NtdjODMmEWJj%2BAUQ73a5M2KOkDQ62hfJRAcW8pCZqsiuB2SGSgDsw79eHwgY6pgFFqGz22fpwUBI3O%2F7lBTV5uo2%2FBrL5h0NU5ltbtSYZziJRwrn6zCD7u6sTuRcT2jO1nZ5R0uRCk313cqcmttP9TqDIo2zVNxJxJt2lGz9BCU%2FwuMiZukZoUoiU46wPnDVtB8q%2FNz6I1jZPe3%2B1zao%2F6q%2B47u1h2qlZCBjkmEs9r%2FvaTegyARqY6Vf6JQEU1BOmEdD1RWH9Ddr1cQmyZ0qEtnUW%2BoYj&X-Amz-Signature=f56417dcdb34007bec509ecd76832ed65d3dc1d04784136629e322483be77226&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I437OI5%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIAaTpauaaXDulB2QdfvavvplXuxEqolyxtyzjRxOTcHVAiAQux6giDcMbPeiqZ7yW784k29Kle7%2BzrWf2s2LmNNxYCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMGAl8CbUTydQbNE2HKtwD6Lt%2FqZkQPGRnKN%2FMoq4wcsyLgTzhBcDNC1M7vX3P539HfFgkTiIZJ%2Bp5rEEje%2Bm08AsAtOTQuuLHrPabFYh%2BrvWVagBhHoq9j2vJ7QtKw3mH%2FtkLCTdToWq2Mru9AwkmIpGidoDcHS89ftTBq1FglO3qoaMLjGL5AsHkUTibVeExIJDYCQOhsj0YEO9oJy8T7qPd5nW%2BkqFnjSFCA9CvbkBPT6h8F1Tj%2BDZztMGvSQoGbKMoQ3zgYfk9lkiay8uY1K7MnhL7TzecAzzzLphHHvMcFRE4e4rfqn7TvznotRGlnprcrOwQhCZa%2BHjDNzYmMp1hXJ8o05YEFFqZLlX0vnXpABE%2B0XjB8WeRMbBHJzb%2FZn5Frf8%2BzomjwG2eIefqfafEhCvuwNwU3Cmg%2F1c2%2FWCzY3M316I1mtxnfrYrvS%2FFdPGCmPElPaDeFYNSJPACajOfZ5sOxjgZhkcHt7%2BGMgxS%2Fy7OgFOZyJjXBpAOFiozk%2B9XHAJl9JPqetwhpeGns%2BQWgu9s3NZM1cZzmpb%2BNSnRqJLXksiWNI7IJy%2B6Jz90TkqMfHMF20KC1IyZin4NjnNaJt8NtdjODMmEWJj%2BAUQ73a5M2KOkDQ62hfJRAcW8pCZqsiuB2SGSgDsw79eHwgY6pgFFqGz22fpwUBI3O%2F7lBTV5uo2%2FBrL5h0NU5ltbtSYZziJRwrn6zCD7u6sTuRcT2jO1nZ5R0uRCk313cqcmttP9TqDIo2zVNxJxJt2lGz9BCU%2FwuMiZukZoUoiU46wPnDVtB8q%2FNz6I1jZPe3%2B1zao%2F6q%2B47u1h2qlZCBjkmEs9r%2FvaTegyARqY6Vf6JQEU1BOmEdD1RWH9Ddr1cQmyZ0qEtnUW%2BoYj&X-Amz-Signature=62fe8cd8e755114b509b38be4c6138ddf8a8d366d9095acaa9862f6db5010c76&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

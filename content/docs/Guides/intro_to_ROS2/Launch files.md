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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFGMWAB%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDL%2BaddGqzHjk3Z29Ed%2FbpAZOwDBc04hP4u7aAmx%2BHPDgIhAP7IWaSLoYB857VZUVUPGVUP96T9vyla2tph8HkQT3mmKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYIS4nzo%2FAUOChTtEq3AN16OqDjGZRIuVb8bJ%2BRO75UP2ALm1E%2FeGkKOb0iY4modnkObSZSA6kpiWYr2%2BZZ2gkBCsezD%2BcO0WtuibBWcLN2%2FkrNgjaH%2FlVkxDF6GcwfV9aAi%2Fw9PXm6uhn5POaK%2FnpfQfK0A4l%2F7InHt70SqsHwKnK3Lpb%2Fd4NY39R50J9TdID4q7yzDQ3ugmpi09UpeiASuMk1G2Ygt4RE6AhcFIvSvtPr9vMuCd6sfzamTT%2FlPzFVWeEr4SenaDXDe6vEKH3BmUQKhbeEmS56XYL8fhOKiu3r22vwnkElfvbnY2aMGv6leTEEXgKLK6hOI4cjkgrwxmgVz3ohjtwrXRjyx50qmodqyG9g247u9mYB3zm9tWFwXyrOYP0ihL8en1rvrOJrcS8VBVc3QUOJaMgjEtAGwLclT9VCMqA%2BK00fuEm7AKIBViry%2ByFXLaEHyaSdmMvTkwta51Yz9a2pddwIyTsMif9XxYZK3dGYquqTCQQBkCGpLJrbwxZCXLBD6tHPtm5EdjclFgp3974bskWQk9XECdWSjxrzpf4DuxtxS0J9%2BOCd4AFzceompyiwNkqRD5K%2Fn0eQ9ojS7hO%2BrvUW3Bkbx25RQIiw%2FfutECrweLS%2Ff6Mo9Uw0HU9iNJsTzCp%2FpbABjqkAcGK2u1UWsmGWv73F%2FLTSs8%2FRPBEhDV8rsHlIR6FptK2iYLgKU%2BQK49KUE6U5vsAWfl19jcqKVY2%2FQWU2QCHzrn8X8DMmOCU3lZWSCVhhYEZTnDuXgr2RW54Y9UOVuPnrvTEZ67j0cFHaEJgiUH8pZDDELsHVMVM3pwDdZ0uW8sYOPBlYvwmNWJQESQOfPtSMLAgdMCBAmVKSglC2pOH99i6BIQC&X-Amz-Signature=9c4be6e6639305f5d4db07f0a55a7481fa6aa19d74cd779d9e353422e0ee4fe1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFGMWAB%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDL%2BaddGqzHjk3Z29Ed%2FbpAZOwDBc04hP4u7aAmx%2BHPDgIhAP7IWaSLoYB857VZUVUPGVUP96T9vyla2tph8HkQT3mmKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYIS4nzo%2FAUOChTtEq3AN16OqDjGZRIuVb8bJ%2BRO75UP2ALm1E%2FeGkKOb0iY4modnkObSZSA6kpiWYr2%2BZZ2gkBCsezD%2BcO0WtuibBWcLN2%2FkrNgjaH%2FlVkxDF6GcwfV9aAi%2Fw9PXm6uhn5POaK%2FnpfQfK0A4l%2F7InHt70SqsHwKnK3Lpb%2Fd4NY39R50J9TdID4q7yzDQ3ugmpi09UpeiASuMk1G2Ygt4RE6AhcFIvSvtPr9vMuCd6sfzamTT%2FlPzFVWeEr4SenaDXDe6vEKH3BmUQKhbeEmS56XYL8fhOKiu3r22vwnkElfvbnY2aMGv6leTEEXgKLK6hOI4cjkgrwxmgVz3ohjtwrXRjyx50qmodqyG9g247u9mYB3zm9tWFwXyrOYP0ihL8en1rvrOJrcS8VBVc3QUOJaMgjEtAGwLclT9VCMqA%2BK00fuEm7AKIBViry%2ByFXLaEHyaSdmMvTkwta51Yz9a2pddwIyTsMif9XxYZK3dGYquqTCQQBkCGpLJrbwxZCXLBD6tHPtm5EdjclFgp3974bskWQk9XECdWSjxrzpf4DuxtxS0J9%2BOCd4AFzceompyiwNkqRD5K%2Fn0eQ9ojS7hO%2BrvUW3Bkbx25RQIiw%2FfutECrweLS%2Ff6Mo9Uw0HU9iNJsTzCp%2FpbABjqkAcGK2u1UWsmGWv73F%2FLTSs8%2FRPBEhDV8rsHlIR6FptK2iYLgKU%2BQK49KUE6U5vsAWfl19jcqKVY2%2FQWU2QCHzrn8X8DMmOCU3lZWSCVhhYEZTnDuXgr2RW54Y9UOVuPnrvTEZ67j0cFHaEJgiUH8pZDDELsHVMVM3pwDdZ0uW8sYOPBlYvwmNWJQESQOfPtSMLAgdMCBAmVKSglC2pOH99i6BIQC&X-Amz-Signature=f55d151da9afbdb7dd4ba69c21bc9557535e81ae3c4b5ec6eb76843018b78b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSFGMWAB%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T061248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQDL%2BaddGqzHjk3Z29Ed%2FbpAZOwDBc04hP4u7aAmx%2BHPDgIhAP7IWaSLoYB857VZUVUPGVUP96T9vyla2tph8HkQT3mmKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYIS4nzo%2FAUOChTtEq3AN16OqDjGZRIuVb8bJ%2BRO75UP2ALm1E%2FeGkKOb0iY4modnkObSZSA6kpiWYr2%2BZZ2gkBCsezD%2BcO0WtuibBWcLN2%2FkrNgjaH%2FlVkxDF6GcwfV9aAi%2Fw9PXm6uhn5POaK%2FnpfQfK0A4l%2F7InHt70SqsHwKnK3Lpb%2Fd4NY39R50J9TdID4q7yzDQ3ugmpi09UpeiASuMk1G2Ygt4RE6AhcFIvSvtPr9vMuCd6sfzamTT%2FlPzFVWeEr4SenaDXDe6vEKH3BmUQKhbeEmS56XYL8fhOKiu3r22vwnkElfvbnY2aMGv6leTEEXgKLK6hOI4cjkgrwxmgVz3ohjtwrXRjyx50qmodqyG9g247u9mYB3zm9tWFwXyrOYP0ihL8en1rvrOJrcS8VBVc3QUOJaMgjEtAGwLclT9VCMqA%2BK00fuEm7AKIBViry%2ByFXLaEHyaSdmMvTkwta51Yz9a2pddwIyTsMif9XxYZK3dGYquqTCQQBkCGpLJrbwxZCXLBD6tHPtm5EdjclFgp3974bskWQk9XECdWSjxrzpf4DuxtxS0J9%2BOCd4AFzceompyiwNkqRD5K%2Fn0eQ9ojS7hO%2BrvUW3Bkbx25RQIiw%2FfutECrweLS%2Ff6Mo9Uw0HU9iNJsTzCp%2FpbABjqkAcGK2u1UWsmGWv73F%2FLTSs8%2FRPBEhDV8rsHlIR6FptK2iYLgKU%2BQK49KUE6U5vsAWfl19jcqKVY2%2FQWU2QCHzrn8X8DMmOCU3lZWSCVhhYEZTnDuXgr2RW54Y9UOVuPnrvTEZ67j0cFHaEJgiUH8pZDDELsHVMVM3pwDdZ0uW8sYOPBlYvwmNWJQESQOfPtSMLAgdMCBAmVKSglC2pOH99i6BIQC&X-Amz-Signature=f11fce02f3093b5cf673450865688b2a17dc56cffd81d31667deff6697382a76&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

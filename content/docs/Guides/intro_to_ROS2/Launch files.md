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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNEYVHR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICXY6Sk3xSbetj5hZrJA%2BLoaRfIhr8WVsLA04AkIj4Q1AiEA1Ry1JSiiztJpkkPhAvof%2Fx5KRzbkiMFd%2BODOhCefujYq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFLTZ5iu2lypgPRwRircA1kyL9whyuAOVqahjFvaTrIWLqS%2FHb9ZpS4w%2BuAf9R1lmrX7nqUXRErJAZHF1SWwUwIcKqKXmkuaZQ%2BJ1FdwHr4phSldtn97NyVYNE9ylXj4ziHNNw8lpsL6vI1l3lmwtErjmaE78PxXg3aa1rikdbRhdKZwDGqPdOJXRzguMTtev8vvr%2B1RsHuD4gOm8HNtAekoY9utPc0yW%2B3vdWAkS7GzuFLmutXjaZehiNfNv%2BVz5rmClQhGni16zU%2BSA2a%2FEuzRl%2FpqoAUzQSA1iRlfY7J1LbvFXVgV70VyQyJl1oPT5yKl8QoLwORoOT2fzGSkrPaMhdSFu2xPFKwqi1tKMjUy8%2FP8li6AG8CP7Hk5CVEXf12WQ3wIJoZkfbCamS0ag7SU2cgzcx40AMY9GsysJMvCF5TAT1YY7aaS8v4dBPshWFqRV9TvOgxvn5S6jYtBaOXplNECmyvTa0cATcSor0UaJr%2BPVWC3PqGoyTl%2FCqWmuPugTUIjJpilT15wklnJLCM%2BP49udanzuwbi7DzHtYDhCT8sZQcZf5%2BsvWMjsNXsIi7UPZ%2BaJl%2FsvyPTwMC6uQALfToMrIBZiHlPQUglR5zvBQy3aeluYKak496hOoZt9lK1UcHTPc5Z4VGhMNfnoMMGOqUBDtudDatFxqrA5II6wpkEXoZPFuc8RImKA8SmlB1Drf5L4diMH7MSPv5hbVEWLdkUQqlNs0zo02nqCQPtZkjzVa2%2BchtTmaJkSKleLwTxkARk9IWrSrOTYc3rNBJeyoOYJ2u2r2ILAe6Xh2V944hrb4ZpRrPzfsIU5Wyl8I5tDt6tXvLZyTF3xmxUPZU%2F89rMj1IFZ3m2QIvXfvW%2FJCHOdrdxSQ78&X-Amz-Signature=62e87b3fb18871f498fe35427039838d9cdebb001eac863f6ede55bdea5fca99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNEYVHR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICXY6Sk3xSbetj5hZrJA%2BLoaRfIhr8WVsLA04AkIj4Q1AiEA1Ry1JSiiztJpkkPhAvof%2Fx5KRzbkiMFd%2BODOhCefujYq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFLTZ5iu2lypgPRwRircA1kyL9whyuAOVqahjFvaTrIWLqS%2FHb9ZpS4w%2BuAf9R1lmrX7nqUXRErJAZHF1SWwUwIcKqKXmkuaZQ%2BJ1FdwHr4phSldtn97NyVYNE9ylXj4ziHNNw8lpsL6vI1l3lmwtErjmaE78PxXg3aa1rikdbRhdKZwDGqPdOJXRzguMTtev8vvr%2B1RsHuD4gOm8HNtAekoY9utPc0yW%2B3vdWAkS7GzuFLmutXjaZehiNfNv%2BVz5rmClQhGni16zU%2BSA2a%2FEuzRl%2FpqoAUzQSA1iRlfY7J1LbvFXVgV70VyQyJl1oPT5yKl8QoLwORoOT2fzGSkrPaMhdSFu2xPFKwqi1tKMjUy8%2FP8li6AG8CP7Hk5CVEXf12WQ3wIJoZkfbCamS0ag7SU2cgzcx40AMY9GsysJMvCF5TAT1YY7aaS8v4dBPshWFqRV9TvOgxvn5S6jYtBaOXplNECmyvTa0cATcSor0UaJr%2BPVWC3PqGoyTl%2FCqWmuPugTUIjJpilT15wklnJLCM%2BP49udanzuwbi7DzHtYDhCT8sZQcZf5%2BsvWMjsNXsIi7UPZ%2BaJl%2FsvyPTwMC6uQALfToMrIBZiHlPQUglR5zvBQy3aeluYKak496hOoZt9lK1UcHTPc5Z4VGhMNfnoMMGOqUBDtudDatFxqrA5II6wpkEXoZPFuc8RImKA8SmlB1Drf5L4diMH7MSPv5hbVEWLdkUQqlNs0zo02nqCQPtZkjzVa2%2BchtTmaJkSKleLwTxkARk9IWrSrOTYc3rNBJeyoOYJ2u2r2ILAe6Xh2V944hrb4ZpRrPzfsIU5Wyl8I5tDt6tXvLZyTF3xmxUPZU%2F89rMj1IFZ3m2QIvXfvW%2FJCHOdrdxSQ78&X-Amz-Signature=7adb143d01ac49221f8f009ae157a564681beb81e4822f93430c67924752f4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNEYVHR%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICXY6Sk3xSbetj5hZrJA%2BLoaRfIhr8WVsLA04AkIj4Q1AiEA1Ry1JSiiztJpkkPhAvof%2Fx5KRzbkiMFd%2BODOhCefujYq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFLTZ5iu2lypgPRwRircA1kyL9whyuAOVqahjFvaTrIWLqS%2FHb9ZpS4w%2BuAf9R1lmrX7nqUXRErJAZHF1SWwUwIcKqKXmkuaZQ%2BJ1FdwHr4phSldtn97NyVYNE9ylXj4ziHNNw8lpsL6vI1l3lmwtErjmaE78PxXg3aa1rikdbRhdKZwDGqPdOJXRzguMTtev8vvr%2B1RsHuD4gOm8HNtAekoY9utPc0yW%2B3vdWAkS7GzuFLmutXjaZehiNfNv%2BVz5rmClQhGni16zU%2BSA2a%2FEuzRl%2FpqoAUzQSA1iRlfY7J1LbvFXVgV70VyQyJl1oPT5yKl8QoLwORoOT2fzGSkrPaMhdSFu2xPFKwqi1tKMjUy8%2FP8li6AG8CP7Hk5CVEXf12WQ3wIJoZkfbCamS0ag7SU2cgzcx40AMY9GsysJMvCF5TAT1YY7aaS8v4dBPshWFqRV9TvOgxvn5S6jYtBaOXplNECmyvTa0cATcSor0UaJr%2BPVWC3PqGoyTl%2FCqWmuPugTUIjJpilT15wklnJLCM%2BP49udanzuwbi7DzHtYDhCT8sZQcZf5%2BsvWMjsNXsIi7UPZ%2BaJl%2FsvyPTwMC6uQALfToMrIBZiHlPQUglR5zvBQy3aeluYKak496hOoZt9lK1UcHTPc5Z4VGhMNfnoMMGOqUBDtudDatFxqrA5II6wpkEXoZPFuc8RImKA8SmlB1Drf5L4diMH7MSPv5hbVEWLdkUQqlNs0zo02nqCQPtZkjzVa2%2BchtTmaJkSKleLwTxkARk9IWrSrOTYc3rNBJeyoOYJ2u2r2ILAe6Xh2V944hrb4ZpRrPzfsIU5Wyl8I5tDt6tXvLZyTF3xmxUPZU%2F89rMj1IFZ3m2QIvXfvW%2FJCHOdrdxSQ78&X-Amz-Signature=41217cb1f4045e86fe682900e6d3837f72cd5a2044c784400e7a4b3406566a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

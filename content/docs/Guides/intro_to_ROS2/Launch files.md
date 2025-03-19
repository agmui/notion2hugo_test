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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIZOT23%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIANfvRS6JADRsv2ytggO5GxEeuQt6BnifBtvfzqJpqFfAiA80uQ6QNpGCcFOrTd5ZLAGU0%2BQBlGpYul7wblWLjmrTSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMqjGgFvL%2Fj7JzOImFKtwDJD%2FX6h0KhG6phz0%2BkP7UfMcLixHJ5Kptfh2bOF0zqEyk%2BjPOAKHkzteCuUA0cbTVKsHjfxW1sGqo3FElYrBn9yt6CMDaTBWKOu3wAfKeCkBLVx2ddzUnNZL00B%2FF76RTxHcK2ERUbFaUqU2FP4qIT1734jfptRIiKG3MLY9%2B4bmRxLvwbJsVQ411xK%2B7lRRSLgQ%2Be2gvvqGdM1MBMnlLN6dCRIEegM2yH28d%2BXebcL3F9CjWJIiEYqBWBSMfsOTv2fpzj9Dplfb14DGJxXCDyyljezrXzFCN2%2F1hkPi4WAv5yZzqtGtDSxTCTfzI2jJfVOQPcgxsJhC0mt%2BDmoGVTyZWFKOFfBgxzNVV2y7tQFqntp82tLJRkm9aCBW3u2xJXfTArUHdo3bVPxXZ35FICc0bLDEAxAwvYcogxCnT%2BVybcoUxhpDgYInWCeyommnsVY%2B%2BF2S64j5pgIRS%2FlTAP%2BN0OaPmkPkmxgjLCK%2FDbxwQ237cu%2FdImiTjD13jTSvzLTDZl8896C8tGpMyB4ygAu4CAuD4lZ3sFJz0ootjfqPkoHmx%2BlTeoIC6PM2FeioPo1AS2FlSl1Bwk%2FaBS2935%2BPGaD%2BQXG9LJTJKSiCL9V4mo%2BmStigXpNGyhi8w0rzovgY6pgE4ITicwu6TernWl6UIbysVtNiWaJcHmCkeldUcl4kq3f2FlqzxAql7VmwRYavxwSPTwTV6htzGr%2Bl10Jl3M%2BNs5TBgSavGpNxcynHWqnjX2LCCkmzY%2Fr2MSbieTjcVyaNHs0qtmI84dh8D5G6eLYnyiNtrMdh4Yt%2F2rn%2Frbm6zAMvBdOsZQlcJUr92JY9axvU%2Bv4aTmP7gYn6UYkGFAW2kplxrbwth&X-Amz-Signature=70a89a0ab5af94f7631d99cba1699d8969e025367985db60fc64b01fa564de20&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIZOT23%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIANfvRS6JADRsv2ytggO5GxEeuQt6BnifBtvfzqJpqFfAiA80uQ6QNpGCcFOrTd5ZLAGU0%2BQBlGpYul7wblWLjmrTSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMqjGgFvL%2Fj7JzOImFKtwDJD%2FX6h0KhG6phz0%2BkP7UfMcLixHJ5Kptfh2bOF0zqEyk%2BjPOAKHkzteCuUA0cbTVKsHjfxW1sGqo3FElYrBn9yt6CMDaTBWKOu3wAfKeCkBLVx2ddzUnNZL00B%2FF76RTxHcK2ERUbFaUqU2FP4qIT1734jfptRIiKG3MLY9%2B4bmRxLvwbJsVQ411xK%2B7lRRSLgQ%2Be2gvvqGdM1MBMnlLN6dCRIEegM2yH28d%2BXebcL3F9CjWJIiEYqBWBSMfsOTv2fpzj9Dplfb14DGJxXCDyyljezrXzFCN2%2F1hkPi4WAv5yZzqtGtDSxTCTfzI2jJfVOQPcgxsJhC0mt%2BDmoGVTyZWFKOFfBgxzNVV2y7tQFqntp82tLJRkm9aCBW3u2xJXfTArUHdo3bVPxXZ35FICc0bLDEAxAwvYcogxCnT%2BVybcoUxhpDgYInWCeyommnsVY%2B%2BF2S64j5pgIRS%2FlTAP%2BN0OaPmkPkmxgjLCK%2FDbxwQ237cu%2FdImiTjD13jTSvzLTDZl8896C8tGpMyB4ygAu4CAuD4lZ3sFJz0ootjfqPkoHmx%2BlTeoIC6PM2FeioPo1AS2FlSl1Bwk%2FaBS2935%2BPGaD%2BQXG9LJTJKSiCL9V4mo%2BmStigXpNGyhi8w0rzovgY6pgE4ITicwu6TernWl6UIbysVtNiWaJcHmCkeldUcl4kq3f2FlqzxAql7VmwRYavxwSPTwTV6htzGr%2Bl10Jl3M%2BNs5TBgSavGpNxcynHWqnjX2LCCkmzY%2Fr2MSbieTjcVyaNHs0qtmI84dh8D5G6eLYnyiNtrMdh4Yt%2F2rn%2Frbm6zAMvBdOsZQlcJUr92JY9axvU%2Bv4aTmP7gYn6UYkGFAW2kplxrbwth&X-Amz-Signature=2dc867f464726e9440f87d975cfe1c44aa9d3f656731265d88c0623296baa928&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IIZOT23%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T021653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIANfvRS6JADRsv2ytggO5GxEeuQt6BnifBtvfzqJpqFfAiA80uQ6QNpGCcFOrTd5ZLAGU0%2BQBlGpYul7wblWLjmrTSr%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMqjGgFvL%2Fj7JzOImFKtwDJD%2FX6h0KhG6phz0%2BkP7UfMcLixHJ5Kptfh2bOF0zqEyk%2BjPOAKHkzteCuUA0cbTVKsHjfxW1sGqo3FElYrBn9yt6CMDaTBWKOu3wAfKeCkBLVx2ddzUnNZL00B%2FF76RTxHcK2ERUbFaUqU2FP4qIT1734jfptRIiKG3MLY9%2B4bmRxLvwbJsVQ411xK%2B7lRRSLgQ%2Be2gvvqGdM1MBMnlLN6dCRIEegM2yH28d%2BXebcL3F9CjWJIiEYqBWBSMfsOTv2fpzj9Dplfb14DGJxXCDyyljezrXzFCN2%2F1hkPi4WAv5yZzqtGtDSxTCTfzI2jJfVOQPcgxsJhC0mt%2BDmoGVTyZWFKOFfBgxzNVV2y7tQFqntp82tLJRkm9aCBW3u2xJXfTArUHdo3bVPxXZ35FICc0bLDEAxAwvYcogxCnT%2BVybcoUxhpDgYInWCeyommnsVY%2B%2BF2S64j5pgIRS%2FlTAP%2BN0OaPmkPkmxgjLCK%2FDbxwQ237cu%2FdImiTjD13jTSvzLTDZl8896C8tGpMyB4ygAu4CAuD4lZ3sFJz0ootjfqPkoHmx%2BlTeoIC6PM2FeioPo1AS2FlSl1Bwk%2FaBS2935%2BPGaD%2BQXG9LJTJKSiCL9V4mo%2BmStigXpNGyhi8w0rzovgY6pgE4ITicwu6TernWl6UIbysVtNiWaJcHmCkeldUcl4kq3f2FlqzxAql7VmwRYavxwSPTwTV6htzGr%2Bl10Jl3M%2BNs5TBgSavGpNxcynHWqnjX2LCCkmzY%2Fr2MSbieTjcVyaNHs0qtmI84dh8D5G6eLYnyiNtrMdh4Yt%2F2rn%2Frbm6zAMvBdOsZQlcJUr92JY9axvU%2Bv4aTmP7gYn6UYkGFAW2kplxrbwth&X-Amz-Signature=f258584ce7c7efb43db1209905cd315ca1349734a431653aba4a0bbbeb9cdcdb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

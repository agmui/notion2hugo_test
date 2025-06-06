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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPG5FCK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaeigYbz5pQPrpAYh%2F5zvsdSGzxtHHtVxSsYkH339AEAIhAM3ySzZ885ez%2BdDS7xzjarhAzZSQqfCoeK1ybkzhIrNHKv8DCF4QABoMNjM3NDIzMTgzODA1Igzs1M6Y3srx%2F2bnWOEq3AN8YHjocmmuLmiUIDzXfXgZ13CwKJJX9epGjjxl4lXwgwFMNqciuYsUw0UTZqK5WB%2Bnux2x%2BMT1%2BB8va3%2BCBA%2F1heNR6ZAcXOHGyL3JpGQUi8HW4nlOcSwQy42dng4M916SlvDuWOfu%2BGHunHXttCioXqggHBoJLWWO0eKqEGDwnKrIsBlL8uXdeDBNQyEbU2RPuNHSagE9T2NtihK5esPbxSrE4pMCVILkCTnokrV0ZZFBqp6AnKuU4iZkb8MBvOrowZ9lIVbYiNyknYCeChPQ7n0y%2BC2btO1rLcMC9OauLyCzrkHMRzNYneksHraZ1KSVHuJgCdxHWpNBaM8xsL7VjWbVLCnh%2FmlyFhFns9ZHLzdDfL4xI%2Bd9a88Gug6T4wNZjWrig%2Fc13iHPjrQJ2PeycQzNHUNKaFiZbkmKcNSbPnVoTgoId3c7%2BmqhYblOeXStilXmnF4%2FBV4Uc25ngDtzCVsrizDKKobIz3FfuMprFlNC6j9kFVaUJOaSRNQl9zK5IJbJpQbyzI9BJIio6r3oCmOPT6fDlfqM%2Bq4d4DefhlR2CNWeV6Qmjd2fRYwzaZlawcEaQoVTKS1ElAPYnvQzvlP8TQ9cVf31DWbGBheXRIRkk3aqKoQNvU3kCDC4vYvCBjqkAVC2OGVDsxTcXq1mykw%2BCFViPwdlzSFdoylP4HSoRbif6NjYoZ0U3khqLm6q3qQRb1dlOD4zSOhwpELJHNhg4e1T0l%2BCaq6o4%2BnSW7G9ycqS2Fj71A3Qz1jPnrMejpn%2B1T9rL9Xlv6QacYnCQWysaAJ73FhlmSEFh%2FqjDmft8e1ywQSnFijtfUfz%2FbBRmWEGOxDj5LmsTeHExE%2FHR8cF8ZBCuRuS&X-Amz-Signature=0c3339a14afa8b52d2056fb6fedda49805b563a9ebd174cf28795be722ce9b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPG5FCK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaeigYbz5pQPrpAYh%2F5zvsdSGzxtHHtVxSsYkH339AEAIhAM3ySzZ885ez%2BdDS7xzjarhAzZSQqfCoeK1ybkzhIrNHKv8DCF4QABoMNjM3NDIzMTgzODA1Igzs1M6Y3srx%2F2bnWOEq3AN8YHjocmmuLmiUIDzXfXgZ13CwKJJX9epGjjxl4lXwgwFMNqciuYsUw0UTZqK5WB%2Bnux2x%2BMT1%2BB8va3%2BCBA%2F1heNR6ZAcXOHGyL3JpGQUi8HW4nlOcSwQy42dng4M916SlvDuWOfu%2BGHunHXttCioXqggHBoJLWWO0eKqEGDwnKrIsBlL8uXdeDBNQyEbU2RPuNHSagE9T2NtihK5esPbxSrE4pMCVILkCTnokrV0ZZFBqp6AnKuU4iZkb8MBvOrowZ9lIVbYiNyknYCeChPQ7n0y%2BC2btO1rLcMC9OauLyCzrkHMRzNYneksHraZ1KSVHuJgCdxHWpNBaM8xsL7VjWbVLCnh%2FmlyFhFns9ZHLzdDfL4xI%2Bd9a88Gug6T4wNZjWrig%2Fc13iHPjrQJ2PeycQzNHUNKaFiZbkmKcNSbPnVoTgoId3c7%2BmqhYblOeXStilXmnF4%2FBV4Uc25ngDtzCVsrizDKKobIz3FfuMprFlNC6j9kFVaUJOaSRNQl9zK5IJbJpQbyzI9BJIio6r3oCmOPT6fDlfqM%2Bq4d4DefhlR2CNWeV6Qmjd2fRYwzaZlawcEaQoVTKS1ElAPYnvQzvlP8TQ9cVf31DWbGBheXRIRkk3aqKoQNvU3kCDC4vYvCBjqkAVC2OGVDsxTcXq1mykw%2BCFViPwdlzSFdoylP4HSoRbif6NjYoZ0U3khqLm6q3qQRb1dlOD4zSOhwpELJHNhg4e1T0l%2BCaq6o4%2BnSW7G9ycqS2Fj71A3Qz1jPnrMejpn%2B1T9rL9Xlv6QacYnCQWysaAJ73FhlmSEFh%2FqjDmft8e1ywQSnFijtfUfz%2FbBRmWEGOxDj5LmsTeHExE%2FHR8cF8ZBCuRuS&X-Amz-Signature=b438be278c6cb9b32c2369ea2a4dd90f990e302f69ebfcebd321903cd168b811&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPG5FCK%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T132253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaeigYbz5pQPrpAYh%2F5zvsdSGzxtHHtVxSsYkH339AEAIhAM3ySzZ885ez%2BdDS7xzjarhAzZSQqfCoeK1ybkzhIrNHKv8DCF4QABoMNjM3NDIzMTgzODA1Igzs1M6Y3srx%2F2bnWOEq3AN8YHjocmmuLmiUIDzXfXgZ13CwKJJX9epGjjxl4lXwgwFMNqciuYsUw0UTZqK5WB%2Bnux2x%2BMT1%2BB8va3%2BCBA%2F1heNR6ZAcXOHGyL3JpGQUi8HW4nlOcSwQy42dng4M916SlvDuWOfu%2BGHunHXttCioXqggHBoJLWWO0eKqEGDwnKrIsBlL8uXdeDBNQyEbU2RPuNHSagE9T2NtihK5esPbxSrE4pMCVILkCTnokrV0ZZFBqp6AnKuU4iZkb8MBvOrowZ9lIVbYiNyknYCeChPQ7n0y%2BC2btO1rLcMC9OauLyCzrkHMRzNYneksHraZ1KSVHuJgCdxHWpNBaM8xsL7VjWbVLCnh%2FmlyFhFns9ZHLzdDfL4xI%2Bd9a88Gug6T4wNZjWrig%2Fc13iHPjrQJ2PeycQzNHUNKaFiZbkmKcNSbPnVoTgoId3c7%2BmqhYblOeXStilXmnF4%2FBV4Uc25ngDtzCVsrizDKKobIz3FfuMprFlNC6j9kFVaUJOaSRNQl9zK5IJbJpQbyzI9BJIio6r3oCmOPT6fDlfqM%2Bq4d4DefhlR2CNWeV6Qmjd2fRYwzaZlawcEaQoVTKS1ElAPYnvQzvlP8TQ9cVf31DWbGBheXRIRkk3aqKoQNvU3kCDC4vYvCBjqkAVC2OGVDsxTcXq1mykw%2BCFViPwdlzSFdoylP4HSoRbif6NjYoZ0U3khqLm6q3qQRb1dlOD4zSOhwpELJHNhg4e1T0l%2BCaq6o4%2BnSW7G9ycqS2Fj71A3Qz1jPnrMejpn%2B1T9rL9Xlv6QacYnCQWysaAJ73FhlmSEFh%2FqjDmft8e1ywQSnFijtfUfz%2FbBRmWEGOxDj5LmsTeHExE%2FHR8cF8ZBCuRuS&X-Amz-Signature=a391f8ff0097b34d845613e11d13fad862a198bcf0e83133025625431364dd11&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

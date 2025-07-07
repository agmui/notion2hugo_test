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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2C5EUU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAN5EwNHWTUsKvX7WradfZnheF51A%2BnR%2B11NEabYpSt6AiBHJhH1X20ouatKl453U%2FfXCLedyZS1TM8LkICxWcPTdSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMgQLRkSgqHCffVv1sKtwDZoNXL4CtoymcRczkAKg3yRzodT1zsAbITpwjPoh8Gwco8S2tKwV8nf9%2BxW9h1FeTAt1N0EBrJPHi11SpXIO2v7BG4PS4XaaDjvJ72nAf7pQeazLwo7AMcAYbkdtPj%2BmFl9EgjZl63DGW6N6q%2FPUW1bDuIGeM7VLUNCvHP%2FQx42M2opkG1xHB%2BVcs5VSDB4wSHC3LAyxSKLnVnDStWkuH68s4BCwwr4ZJ6bf%2Fj0%2BSJbXEVIf0G8BElxfPsJ6xI3LXSBpXvAc8rGaQADAAPaXQukpvxESOuLxBxer4mcFLfGxFHFPa%2Fc51cVSkbAxU7sKDFCBhxEcL4yEMTAZyPOpW2cIdKs%2Fr9l8TjlQJXa%2FmgCpdcUGUE4nbce142%2FBPPt9agpyPyiFaDUKnFY4q3k%2F%2BhdRplABQCFDqA87fUH%2BbA2erTqlGNd%2BKpI0hzzsnJs20KGBadkdY3hjTwFDovOqsAkAW9LjPBoG3w3j6Dp%2B0Qr9q%2F2U3%2BB2uydBzlHc5UaE7ZYFawAnEri6h7nKF3qYmj0xQqVFthoHjpriNuce4SqCjER8rfUKrIIF7SKFtZMWoDFAnN%2BkGH%2FP%2FxRNGc9R%2FKL2f2jj1ot2Q%2BimIvcrIr1zawGfdshz5bmp4KvUw8L2wwwY6pgG47sFFF%2FyxfOAaAwOmLiiNbE8%2F5LnRWTtfHM4%2BsGg2zQA3489j86AzSQMFuvB09Vf0hVSUtSAFbMuIr0JBtwjbE%2Be4qnBpZWUPkhERXJbhCW6wd6xZUh8K3igX35%2B%2Bv7lP6mCEJC6Lk5bAsJEuXPlTfqpc0JQvHCVupjQw6%2FD6tDmxa9scfpdS%2BLD3%2FIK2oTIdO3vFpnCBPQ49nSGiUaWVbmKPVV45&X-Amz-Signature=90f8bd829e4f1a805e3f2d11a9e44abfb2c2349326b9848931e1aac5b5dbf4c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2C5EUU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAN5EwNHWTUsKvX7WradfZnheF51A%2BnR%2B11NEabYpSt6AiBHJhH1X20ouatKl453U%2FfXCLedyZS1TM8LkICxWcPTdSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMgQLRkSgqHCffVv1sKtwDZoNXL4CtoymcRczkAKg3yRzodT1zsAbITpwjPoh8Gwco8S2tKwV8nf9%2BxW9h1FeTAt1N0EBrJPHi11SpXIO2v7BG4PS4XaaDjvJ72nAf7pQeazLwo7AMcAYbkdtPj%2BmFl9EgjZl63DGW6N6q%2FPUW1bDuIGeM7VLUNCvHP%2FQx42M2opkG1xHB%2BVcs5VSDB4wSHC3LAyxSKLnVnDStWkuH68s4BCwwr4ZJ6bf%2Fj0%2BSJbXEVIf0G8BElxfPsJ6xI3LXSBpXvAc8rGaQADAAPaXQukpvxESOuLxBxer4mcFLfGxFHFPa%2Fc51cVSkbAxU7sKDFCBhxEcL4yEMTAZyPOpW2cIdKs%2Fr9l8TjlQJXa%2FmgCpdcUGUE4nbce142%2FBPPt9agpyPyiFaDUKnFY4q3k%2F%2BhdRplABQCFDqA87fUH%2BbA2erTqlGNd%2BKpI0hzzsnJs20KGBadkdY3hjTwFDovOqsAkAW9LjPBoG3w3j6Dp%2B0Qr9q%2F2U3%2BB2uydBzlHc5UaE7ZYFawAnEri6h7nKF3qYmj0xQqVFthoHjpriNuce4SqCjER8rfUKrIIF7SKFtZMWoDFAnN%2BkGH%2FP%2FxRNGc9R%2FKL2f2jj1ot2Q%2BimIvcrIr1zawGfdshz5bmp4KvUw8L2wwwY6pgG47sFFF%2FyxfOAaAwOmLiiNbE8%2F5LnRWTtfHM4%2BsGg2zQA3489j86AzSQMFuvB09Vf0hVSUtSAFbMuIr0JBtwjbE%2Be4qnBpZWUPkhERXJbhCW6wd6xZUh8K3igX35%2B%2Bv7lP6mCEJC6Lk5bAsJEuXPlTfqpc0JQvHCVupjQw6%2FD6tDmxa9scfpdS%2BLD3%2FIK2oTIdO3vFpnCBPQ49nSGiUaWVbmKPVV45&X-Amz-Signature=138ff4fe5ef92757e97e80087c223c953a765873d69ef4e7c53fad917fbd0616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P2C5EUU%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T201019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAN5EwNHWTUsKvX7WradfZnheF51A%2BnR%2B11NEabYpSt6AiBHJhH1X20ouatKl453U%2FfXCLedyZS1TM8LkICxWcPTdSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMgQLRkSgqHCffVv1sKtwDZoNXL4CtoymcRczkAKg3yRzodT1zsAbITpwjPoh8Gwco8S2tKwV8nf9%2BxW9h1FeTAt1N0EBrJPHi11SpXIO2v7BG4PS4XaaDjvJ72nAf7pQeazLwo7AMcAYbkdtPj%2BmFl9EgjZl63DGW6N6q%2FPUW1bDuIGeM7VLUNCvHP%2FQx42M2opkG1xHB%2BVcs5VSDB4wSHC3LAyxSKLnVnDStWkuH68s4BCwwr4ZJ6bf%2Fj0%2BSJbXEVIf0G8BElxfPsJ6xI3LXSBpXvAc8rGaQADAAPaXQukpvxESOuLxBxer4mcFLfGxFHFPa%2Fc51cVSkbAxU7sKDFCBhxEcL4yEMTAZyPOpW2cIdKs%2Fr9l8TjlQJXa%2FmgCpdcUGUE4nbce142%2FBPPt9agpyPyiFaDUKnFY4q3k%2F%2BhdRplABQCFDqA87fUH%2BbA2erTqlGNd%2BKpI0hzzsnJs20KGBadkdY3hjTwFDovOqsAkAW9LjPBoG3w3j6Dp%2B0Qr9q%2F2U3%2BB2uydBzlHc5UaE7ZYFawAnEri6h7nKF3qYmj0xQqVFthoHjpriNuce4SqCjER8rfUKrIIF7SKFtZMWoDFAnN%2BkGH%2FP%2FxRNGc9R%2FKL2f2jj1ot2Q%2BimIvcrIr1zawGfdshz5bmp4KvUw8L2wwwY6pgG47sFFF%2FyxfOAaAwOmLiiNbE8%2F5LnRWTtfHM4%2BsGg2zQA3489j86AzSQMFuvB09Vf0hVSUtSAFbMuIr0JBtwjbE%2Be4qnBpZWUPkhERXJbhCW6wd6xZUh8K3igX35%2B%2Bv7lP6mCEJC6Lk5bAsJEuXPlTfqpc0JQvHCVupjQw6%2FD6tDmxa9scfpdS%2BLD3%2FIK2oTIdO3vFpnCBPQ49nSGiUaWVbmKPVV45&X-Amz-Signature=9fec5133b36e7602965fb9dd5ff5cf22b8ee584463404285f56353d1a4680482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

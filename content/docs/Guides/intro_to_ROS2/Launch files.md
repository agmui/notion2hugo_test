---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELOR4CB%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDfR9BwSEv9xwPRMFBAkd98%2FkW7RCs1y190jJarH6Qr6AIhAOrxY3%2FOIe9vpeWCRdRSMmxQlSdFODKsUYnsbZdO%2BkgBKv8DCDwQABoMNjM3NDIzMTgzODA1IgzF8uWw9sJnDnhch50q3ANVi0%2FVbO8DThV0AlVmtS3DGNCGg0dcWOaK8DYoNjfuq4yCoD8Fnbg1YOUovtLI%2Bce0wCFQm57BtVlVietll9OiJfQ6%2FZNHS%2F5JUBeXCiraOmfay2%2FygGTCIjLI%2FEQgW25lEcfE%2B90IYNwkH3VB%2FBmhc2YlwI%2B8qXccmtZxnzwHo6pOsJWnHrFgdzVbU2JGT%2FMeK%2Fc%2Fe2LDZxt%2B45Dsun1mBr5e9%2BdUY6m9OU5oj%2BQ9HqagPQ%2FIdKo623EXArriWWRD%2FJm362g950svbr0wd5oHLYcE2HTffoxWi7vqmYFxhwuN8R23z8Mklpj8AXc5%2Fv%2BLNK6m9lrKcjgARVQQbSY%2FrxAOJE7kRqQ%2FeHoOi%2Fm2YmNr9kVCGR%2B6qq6UzoeojeoucuNhskTSw%2B7OoGA8J2BrVKK%2F7zwCnDuXRUqmYKFmOEffSaKfdln2yq6aSyh3lVbvIRTSUrEFCgZ8H0VA7dUeNTYM44prKMojZ7UNJVpjVIWuCCQjwF1CoG8Zcz5xUwByV8yBqmPN3C352WfERpGPqI%2FpxQBE1C5muXWEG3SLQkflUBDWL4ZCID%2FD6HCjsXKOE2OoFAg%2BuT2zmj21X%2BytEDdni1foYhnBZ1TH1go1hS%2BrZQcxtfJEucPn%2BTDUxcDEBjqkAcsPWcUeU3k3iDDRraKpPrVZYPq%2BnNiKuRCDHOwj6%2FJpoxPluSeO35feqBbhwbbO0NFlYHFg922n6ySKwbVaA7rLwkSANflMGSEC77UH400emErtfMhjSXzm1T3Y7Xgsr%2BBTM%2Fp0Z0Cx%2FziKUs5dxYB4XtQh99H0x3i4bIbN4%2BBZR4M9WxhTX%2BCiCx06PJNWB%2B%2BfIIpNVKHqm5wl0Sn9nt5y5hT2&X-Amz-Signature=991cfd2a91b40b9e98d647decc394d6b0c9d41d8ec8be2aa934d5a1c3201dbe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELOR4CB%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDfR9BwSEv9xwPRMFBAkd98%2FkW7RCs1y190jJarH6Qr6AIhAOrxY3%2FOIe9vpeWCRdRSMmxQlSdFODKsUYnsbZdO%2BkgBKv8DCDwQABoMNjM3NDIzMTgzODA1IgzF8uWw9sJnDnhch50q3ANVi0%2FVbO8DThV0AlVmtS3DGNCGg0dcWOaK8DYoNjfuq4yCoD8Fnbg1YOUovtLI%2Bce0wCFQm57BtVlVietll9OiJfQ6%2FZNHS%2F5JUBeXCiraOmfay2%2FygGTCIjLI%2FEQgW25lEcfE%2B90IYNwkH3VB%2FBmhc2YlwI%2B8qXccmtZxnzwHo6pOsJWnHrFgdzVbU2JGT%2FMeK%2Fc%2Fe2LDZxt%2B45Dsun1mBr5e9%2BdUY6m9OU5oj%2BQ9HqagPQ%2FIdKo623EXArriWWRD%2FJm362g950svbr0wd5oHLYcE2HTffoxWi7vqmYFxhwuN8R23z8Mklpj8AXc5%2Fv%2BLNK6m9lrKcjgARVQQbSY%2FrxAOJE7kRqQ%2FeHoOi%2Fm2YmNr9kVCGR%2B6qq6UzoeojeoucuNhskTSw%2B7OoGA8J2BrVKK%2F7zwCnDuXRUqmYKFmOEffSaKfdln2yq6aSyh3lVbvIRTSUrEFCgZ8H0VA7dUeNTYM44prKMojZ7UNJVpjVIWuCCQjwF1CoG8Zcz5xUwByV8yBqmPN3C352WfERpGPqI%2FpxQBE1C5muXWEG3SLQkflUBDWL4ZCID%2FD6HCjsXKOE2OoFAg%2BuT2zmj21X%2BytEDdni1foYhnBZ1TH1go1hS%2BrZQcxtfJEucPn%2BTDUxcDEBjqkAcsPWcUeU3k3iDDRraKpPrVZYPq%2BnNiKuRCDHOwj6%2FJpoxPluSeO35feqBbhwbbO0NFlYHFg922n6ySKwbVaA7rLwkSANflMGSEC77UH400emErtfMhjSXzm1T3Y7Xgsr%2BBTM%2Fp0Z0Cx%2FziKUs5dxYB4XtQh99H0x3i4bIbN4%2BBZR4M9WxhTX%2BCiCx06PJNWB%2B%2BfIIpNVKHqm5wl0Sn9nt5y5hT2&X-Amz-Signature=1ac131c10d1f88ef5d2bf95a5b325ac68edda1caf7343484433a6d6e01041b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELOR4CB%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDfR9BwSEv9xwPRMFBAkd98%2FkW7RCs1y190jJarH6Qr6AIhAOrxY3%2FOIe9vpeWCRdRSMmxQlSdFODKsUYnsbZdO%2BkgBKv8DCDwQABoMNjM3NDIzMTgzODA1IgzF8uWw9sJnDnhch50q3ANVi0%2FVbO8DThV0AlVmtS3DGNCGg0dcWOaK8DYoNjfuq4yCoD8Fnbg1YOUovtLI%2Bce0wCFQm57BtVlVietll9OiJfQ6%2FZNHS%2F5JUBeXCiraOmfay2%2FygGTCIjLI%2FEQgW25lEcfE%2B90IYNwkH3VB%2FBmhc2YlwI%2B8qXccmtZxnzwHo6pOsJWnHrFgdzVbU2JGT%2FMeK%2Fc%2Fe2LDZxt%2B45Dsun1mBr5e9%2BdUY6m9OU5oj%2BQ9HqagPQ%2FIdKo623EXArriWWRD%2FJm362g950svbr0wd5oHLYcE2HTffoxWi7vqmYFxhwuN8R23z8Mklpj8AXc5%2Fv%2BLNK6m9lrKcjgARVQQbSY%2FrxAOJE7kRqQ%2FeHoOi%2Fm2YmNr9kVCGR%2B6qq6UzoeojeoucuNhskTSw%2B7OoGA8J2BrVKK%2F7zwCnDuXRUqmYKFmOEffSaKfdln2yq6aSyh3lVbvIRTSUrEFCgZ8H0VA7dUeNTYM44prKMojZ7UNJVpjVIWuCCQjwF1CoG8Zcz5xUwByV8yBqmPN3C352WfERpGPqI%2FpxQBE1C5muXWEG3SLQkflUBDWL4ZCID%2FD6HCjsXKOE2OoFAg%2BuT2zmj21X%2BytEDdni1foYhnBZ1TH1go1hS%2BrZQcxtfJEucPn%2BTDUxcDEBjqkAcsPWcUeU3k3iDDRraKpPrVZYPq%2BnNiKuRCDHOwj6%2FJpoxPluSeO35feqBbhwbbO0NFlYHFg922n6ySKwbVaA7rLwkSANflMGSEC77UH400emErtfMhjSXzm1T3Y7Xgsr%2BBTM%2Fp0Z0Cx%2FziKUs5dxYB4XtQh99H0x3i4bIbN4%2BBZR4M9WxhTX%2BCiCx06PJNWB%2B%2BfIIpNVKHqm5wl0Sn9nt5y5hT2&X-Amz-Signature=eab4ac49314536b8c318b67c0a9c22f24a84dd892486fd1ce4c83bb8f20f3414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

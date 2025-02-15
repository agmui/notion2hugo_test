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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627FEVQIZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFx%2BMTU1WEEQ0tCagmE0HmW0foztsLMyPZTcbXMYfkRKAiAV6vqXxcDIjTWdSy3CHtCFM0JAQj3VRy4j8dslL2IuWyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMYwbg2OmLq4cgd8TCKtwD2tOFNtuUeIWchCA771tOvNm73v7%2FY%2B8kycyG4vZ3StY0CAXAbcKANMEFQ%2FY1f77YIqFRUg7uxatLQ1BMB86q9f1xQt9f3KmxE6bFDZ%2FERHGzqzW6OJQltgw4ULivQ%2BOxWFDq6isI%2BPoSCBiqMyKCvkVZcM%2BYLcvzaYF6x1doN6QrDEyfjXUF1Ypk9qVnMD5E%2B8EVfyrRP1B3e3tQ8ir8H1SjiBWtJRu0%2BJGNnFDpzQwP9apa4Vc3ubtAU6FHMizquO%2BxrmOQjaKLKDWPI8Szl4kfmTpYcortqvYb36TA9zoalq60AXYOcRX8Q6tvoRCF93gaQ2heCw3C6STfjfYhkcydVVFRxnS2MlgHYZVDtTCEmPxMj0Ui9Ng7FmFN7ktIDkVMzgVTmE5Tx62lcY7UAdDUKoKVOx0m9NpYR1taUUsFQ3EF86WdkgziSobW6Ec71Sb8KPLAoU2hy4uJmy%2BAAueESVzaw39P3c324NIxtee8Obh5BeaVT2qYfgiJnH2fZIj2OTQ3QCMWSFM0B0GgiBf2OYqJvIDISvABIt0xWDdM6qY60v5OeSFymB5hYheL8eG9Vinc%2FAkmD%2FvZAI%2Bv1dNbZO0quyPgFPhVPT3gRIngSTgRHJqYWfAG4T0w%2FOjAvQY6pgGoohWL1QRRAEGIZlTwHAg2EW5LmpU8reNY2dPevvy7bpbjgMLBdgpmEk2s%2BP0KOVoak%2BgF8F8FdKZ1PDu8a7dxr3t2Xv1CK0NslAZA9fw5DJWIsHBLRdUhNLiNILE77Z5QmZF2PCaxYhF2m%2BxsF2kNBslg6d6L9D7cY4NYnFO7ss4BQezrkp2VaUTiVRZ481mBo9ERC3i9bUMgwurCaed7nvjRVMUk&X-Amz-Signature=cff76cc65fe511fb1b6689804520dff326bef03ed6abe9d6e3b43004f15e9a4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627FEVQIZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFx%2BMTU1WEEQ0tCagmE0HmW0foztsLMyPZTcbXMYfkRKAiAV6vqXxcDIjTWdSy3CHtCFM0JAQj3VRy4j8dslL2IuWyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMYwbg2OmLq4cgd8TCKtwD2tOFNtuUeIWchCA771tOvNm73v7%2FY%2B8kycyG4vZ3StY0CAXAbcKANMEFQ%2FY1f77YIqFRUg7uxatLQ1BMB86q9f1xQt9f3KmxE6bFDZ%2FERHGzqzW6OJQltgw4ULivQ%2BOxWFDq6isI%2BPoSCBiqMyKCvkVZcM%2BYLcvzaYF6x1doN6QrDEyfjXUF1Ypk9qVnMD5E%2B8EVfyrRP1B3e3tQ8ir8H1SjiBWtJRu0%2BJGNnFDpzQwP9apa4Vc3ubtAU6FHMizquO%2BxrmOQjaKLKDWPI8Szl4kfmTpYcortqvYb36TA9zoalq60AXYOcRX8Q6tvoRCF93gaQ2heCw3C6STfjfYhkcydVVFRxnS2MlgHYZVDtTCEmPxMj0Ui9Ng7FmFN7ktIDkVMzgVTmE5Tx62lcY7UAdDUKoKVOx0m9NpYR1taUUsFQ3EF86WdkgziSobW6Ec71Sb8KPLAoU2hy4uJmy%2BAAueESVzaw39P3c324NIxtee8Obh5BeaVT2qYfgiJnH2fZIj2OTQ3QCMWSFM0B0GgiBf2OYqJvIDISvABIt0xWDdM6qY60v5OeSFymB5hYheL8eG9Vinc%2FAkmD%2FvZAI%2Bv1dNbZO0quyPgFPhVPT3gRIngSTgRHJqYWfAG4T0w%2FOjAvQY6pgGoohWL1QRRAEGIZlTwHAg2EW5LmpU8reNY2dPevvy7bpbjgMLBdgpmEk2s%2BP0KOVoak%2BgF8F8FdKZ1PDu8a7dxr3t2Xv1CK0NslAZA9fw5DJWIsHBLRdUhNLiNILE77Z5QmZF2PCaxYhF2m%2BxsF2kNBslg6d6L9D7cY4NYnFO7ss4BQezrkp2VaUTiVRZ481mBo9ERC3i9bUMgwurCaed7nvjRVMUk&X-Amz-Signature=8a0f45fc414527dbda1af51681f3926291615a365246f108e396f27830fa5b66&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627FEVQIZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIFx%2BMTU1WEEQ0tCagmE0HmW0foztsLMyPZTcbXMYfkRKAiAV6vqXxcDIjTWdSy3CHtCFM0JAQj3VRy4j8dslL2IuWyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMYwbg2OmLq4cgd8TCKtwD2tOFNtuUeIWchCA771tOvNm73v7%2FY%2B8kycyG4vZ3StY0CAXAbcKANMEFQ%2FY1f77YIqFRUg7uxatLQ1BMB86q9f1xQt9f3KmxE6bFDZ%2FERHGzqzW6OJQltgw4ULivQ%2BOxWFDq6isI%2BPoSCBiqMyKCvkVZcM%2BYLcvzaYF6x1doN6QrDEyfjXUF1Ypk9qVnMD5E%2B8EVfyrRP1B3e3tQ8ir8H1SjiBWtJRu0%2BJGNnFDpzQwP9apa4Vc3ubtAU6FHMizquO%2BxrmOQjaKLKDWPI8Szl4kfmTpYcortqvYb36TA9zoalq60AXYOcRX8Q6tvoRCF93gaQ2heCw3C6STfjfYhkcydVVFRxnS2MlgHYZVDtTCEmPxMj0Ui9Ng7FmFN7ktIDkVMzgVTmE5Tx62lcY7UAdDUKoKVOx0m9NpYR1taUUsFQ3EF86WdkgziSobW6Ec71Sb8KPLAoU2hy4uJmy%2BAAueESVzaw39P3c324NIxtee8Obh5BeaVT2qYfgiJnH2fZIj2OTQ3QCMWSFM0B0GgiBf2OYqJvIDISvABIt0xWDdM6qY60v5OeSFymB5hYheL8eG9Vinc%2FAkmD%2FvZAI%2Bv1dNbZO0quyPgFPhVPT3gRIngSTgRHJqYWfAG4T0w%2FOjAvQY6pgGoohWL1QRRAEGIZlTwHAg2EW5LmpU8reNY2dPevvy7bpbjgMLBdgpmEk2s%2BP0KOVoak%2BgF8F8FdKZ1PDu8a7dxr3t2Xv1CK0NslAZA9fw5DJWIsHBLRdUhNLiNILE77Z5QmZF2PCaxYhF2m%2BxsF2kNBslg6d6L9D7cY4NYnFO7ss4BQezrkp2VaUTiVRZ481mBo9ERC3i9bUMgwurCaed7nvjRVMUk&X-Amz-Signature=ba1166c4f6faf92c82aa50f4920d8817865fafb28f9874d622d556c1957b1c55&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

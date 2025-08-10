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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BQ7X3K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoVQxZnLW1L%2BTEq5yI6bxohxD9J30zI8zvjpwCj62GMAiAj4crz1S4dNTi6DC15kUh7vKmfr0fv81J2MVYWH%2Bu9SiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1HKuITishJw03pHCKtwDV9P9zfjbkeX8TDlO95i9o8IpTdiZglbBeJV%2B%2BF4ZA2xXIn5ZwDNZy0lKaaSN7IooUYUNbQaRd6VFZvQG20Vr9GEeKW5HGgsTgsIQxqyYfdw1Neoe2BXBh%2Fnmb8h2AbGthQLzUhAdd%2FpfdRCd41CAiALeBPtR0riPnK57FhZzOtvoZ6741pkVUOmewaLrlhed3xWYsYBxArbdC7Jng9csZmwAouBkZQ21t%2Fus1IDQ5ZyIsQV2mm0slKcad2jsedn8A78H9rR3%2Ff9gTd2yxrqb0scLga8K3rrAU0ASfFD2sVHgerRASClgH3IfGv9waQyhryck1gxN0k%2BYOA4BXJCCByoSwnBM%2Fn7sGdWg5d60Xh5iyOAPQzFcJosqS7UklnDrW8LA43MZJKklcw9MyLFaskG4CTRwZpV3D5gExwgJEqAz9ZwuFKc%2FIm3DxJo%2F0%2FMriY60rV14h%2FY11LTFd89xGLGHFTDVXzdhGi7plfbgz0Z8plbpuBwovSn%2Ffcb3Pzl9erKKh7nlF7rlA3asXiMLi8tSr8HaLYlWslaul24OXXC2Q7I95rgVFppt%2FZqvNqsANThe91HVN0n8vgxkNIwGhcrVNd4bzdzjDUDABC3sRvltj8jcGj2oEbCyOYkwpZjixAY6pgGuPWV3vc6zo2Ww9R3iDgVEKmdC%2BCVbGjcCL%2FOFifVMltu9aMQjxdWS%2FnJQmy5pie3zW5aB%2FIWgpfUfm4w0UvTQrx8Hj5JlHw2ZNqVTj%2FgUj%2B%2BSpHJHZRBHMnxh1bEWYjQbx4jjO4U4aOsuGcScQZ5ge4sUuJEZHw0%2BDTTZ9t%2FBiiWidU7cfxtZPepQNZkxE%2FywAhl3afAI8kuQf4IdXzcVX1V2m7Am&X-Amz-Signature=d9277ad7424feee6398ff0735edeac4709487dfc8e370662b11cbe1a8c05ea53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BQ7X3K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoVQxZnLW1L%2BTEq5yI6bxohxD9J30zI8zvjpwCj62GMAiAj4crz1S4dNTi6DC15kUh7vKmfr0fv81J2MVYWH%2Bu9SiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1HKuITishJw03pHCKtwDV9P9zfjbkeX8TDlO95i9o8IpTdiZglbBeJV%2B%2BF4ZA2xXIn5ZwDNZy0lKaaSN7IooUYUNbQaRd6VFZvQG20Vr9GEeKW5HGgsTgsIQxqyYfdw1Neoe2BXBh%2Fnmb8h2AbGthQLzUhAdd%2FpfdRCd41CAiALeBPtR0riPnK57FhZzOtvoZ6741pkVUOmewaLrlhed3xWYsYBxArbdC7Jng9csZmwAouBkZQ21t%2Fus1IDQ5ZyIsQV2mm0slKcad2jsedn8A78H9rR3%2Ff9gTd2yxrqb0scLga8K3rrAU0ASfFD2sVHgerRASClgH3IfGv9waQyhryck1gxN0k%2BYOA4BXJCCByoSwnBM%2Fn7sGdWg5d60Xh5iyOAPQzFcJosqS7UklnDrW8LA43MZJKklcw9MyLFaskG4CTRwZpV3D5gExwgJEqAz9ZwuFKc%2FIm3DxJo%2F0%2FMriY60rV14h%2FY11LTFd89xGLGHFTDVXzdhGi7plfbgz0Z8plbpuBwovSn%2Ffcb3Pzl9erKKh7nlF7rlA3asXiMLi8tSr8HaLYlWslaul24OXXC2Q7I95rgVFppt%2FZqvNqsANThe91HVN0n8vgxkNIwGhcrVNd4bzdzjDUDABC3sRvltj8jcGj2oEbCyOYkwpZjixAY6pgGuPWV3vc6zo2Ww9R3iDgVEKmdC%2BCVbGjcCL%2FOFifVMltu9aMQjxdWS%2FnJQmy5pie3zW5aB%2FIWgpfUfm4w0UvTQrx8Hj5JlHw2ZNqVTj%2FgUj%2B%2BSpHJHZRBHMnxh1bEWYjQbx4jjO4U4aOsuGcScQZ5ge4sUuJEZHw0%2BDTTZ9t%2FBiiWidU7cfxtZPepQNZkxE%2FywAhl3afAI8kuQf4IdXzcVX1V2m7Am&X-Amz-Signature=87c1d0c2c8199c5d69be009b45a4e4cb6bc2277d6c53c18075697709fc8e5317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BQ7X3K%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoVQxZnLW1L%2BTEq5yI6bxohxD9J30zI8zvjpwCj62GMAiAj4crz1S4dNTi6DC15kUh7vKmfr0fv81J2MVYWH%2Bu9SiqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1HKuITishJw03pHCKtwDV9P9zfjbkeX8TDlO95i9o8IpTdiZglbBeJV%2B%2BF4ZA2xXIn5ZwDNZy0lKaaSN7IooUYUNbQaRd6VFZvQG20Vr9GEeKW5HGgsTgsIQxqyYfdw1Neoe2BXBh%2Fnmb8h2AbGthQLzUhAdd%2FpfdRCd41CAiALeBPtR0riPnK57FhZzOtvoZ6741pkVUOmewaLrlhed3xWYsYBxArbdC7Jng9csZmwAouBkZQ21t%2Fus1IDQ5ZyIsQV2mm0slKcad2jsedn8A78H9rR3%2Ff9gTd2yxrqb0scLga8K3rrAU0ASfFD2sVHgerRASClgH3IfGv9waQyhryck1gxN0k%2BYOA4BXJCCByoSwnBM%2Fn7sGdWg5d60Xh5iyOAPQzFcJosqS7UklnDrW8LA43MZJKklcw9MyLFaskG4CTRwZpV3D5gExwgJEqAz9ZwuFKc%2FIm3DxJo%2F0%2FMriY60rV14h%2FY11LTFd89xGLGHFTDVXzdhGi7plfbgz0Z8plbpuBwovSn%2Ffcb3Pzl9erKKh7nlF7rlA3asXiMLi8tSr8HaLYlWslaul24OXXC2Q7I95rgVFppt%2FZqvNqsANThe91HVN0n8vgxkNIwGhcrVNd4bzdzjDUDABC3sRvltj8jcGj2oEbCyOYkwpZjixAY6pgGuPWV3vc6zo2Ww9R3iDgVEKmdC%2BCVbGjcCL%2FOFifVMltu9aMQjxdWS%2FnJQmy5pie3zW5aB%2FIWgpfUfm4w0UvTQrx8Hj5JlHw2ZNqVTj%2FgUj%2B%2BSpHJHZRBHMnxh1bEWYjQbx4jjO4U4aOsuGcScQZ5ge4sUuJEZHw0%2BDTTZ9t%2FBiiWidU7cfxtZPepQNZkxE%2FywAhl3afAI8kuQf4IdXzcVX1V2m7Am&X-Amz-Signature=3284e9d50d33ed3f13e15454c372f892d5a43135ae6cdcbd49ce6b6140b84c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

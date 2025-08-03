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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627HWB7XD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhexQ39iwg1%2BOz4Hdx%2FHKRvBnHuRK4PkMpeoEHAPhiKwIhANU37W7dXSBMnOuvai3RQWH%2B4ZreuhPK1Pp7nBNToy7HKv8DCDQQABoMNjM3NDIzMTgzODA1Igy6UofjPior3omKnbcq3AP3ebCEBIEkLxrMUa2esmMj7z25YonwuNqKIRRaeDDk7%2BGP01RJ4LDMUJfJlYHkghZpdz7Y36q0Zim%2BlwwadZrXUL%2BNFEe0%2FtZ9k%2FliJn%2FV5ppfaaRw0XHUp%2BCuB2gPBzvrp9guumMI4r5e937FApKOz0l7JmpO5Lq8VN77Llap8jIbBU8l8gNKmFoAiZSqhdTsQXcHLqVibvq5Y5DL%2FPJr3ATPTLcfSMhoZr9ZSTap%2F61dTq53eodWf%2BQPEPWt92R06ejfe7jdsyQHZnn4Odgs3lstPJ0mkgM8Jm89HKb4eTA0hgrumS4iTIcCLLWSegPpMA2vya7UR0sAH4Q5L5xvSBNi4oOD6ygYSsLjVZ6fxVwwzvvxqdefQNEUKdEj6cyxEz2uvy2v6joCyoXYvdp67NxaijP6PYDbdIvUeJgW5xgfl7Td%2FuvVCwooUHtRVOPZEy2K%2BILQO%2BYRMK7olG5WPiPVc1a4jQEfIwJQ0rz74PRH7zOT4z50O6Q9U05w3IJw4v9qTiIMP0wkXTDyAZ6cX8G4%2BVc6RrWCDKpxGZpDCsup2rVMpnw1VLcE64fKjYc%2Bv8Xiv4yYlRFcdZv7mwabSNIyEnY6AUSaZ5fDXjR5kCIcN1Vk05lhtIgXEDCa2b7EBjqkAbyWOSU1pdySlqSVy6EuQVOZT1wNawO4emRmBh4dAGH78A4YgD9c0SHXg4S112OUTSzO1b9RcO%2FDV%2BmP5PkWpmIX%2FIXuwRwbrWUK0EEpGcwfJDmdxEN8F0bDJg1zjHxgefmkX4wuRxTcxBt0RVNDXfPX69Nuw9Bfono2SkdMhnRwrUb6Jz%2FuOXFQmfGupz5hSOv2uSdJ1r0blX%2FSXKwvaN4gm6Ye&X-Amz-Signature=d3b70ba96047fa300d0eb3ba49f342dacaa01e104ba4de6d190a5babbf485db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627HWB7XD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhexQ39iwg1%2BOz4Hdx%2FHKRvBnHuRK4PkMpeoEHAPhiKwIhANU37W7dXSBMnOuvai3RQWH%2B4ZreuhPK1Pp7nBNToy7HKv8DCDQQABoMNjM3NDIzMTgzODA1Igy6UofjPior3omKnbcq3AP3ebCEBIEkLxrMUa2esmMj7z25YonwuNqKIRRaeDDk7%2BGP01RJ4LDMUJfJlYHkghZpdz7Y36q0Zim%2BlwwadZrXUL%2BNFEe0%2FtZ9k%2FliJn%2FV5ppfaaRw0XHUp%2BCuB2gPBzvrp9guumMI4r5e937FApKOz0l7JmpO5Lq8VN77Llap8jIbBU8l8gNKmFoAiZSqhdTsQXcHLqVibvq5Y5DL%2FPJr3ATPTLcfSMhoZr9ZSTap%2F61dTq53eodWf%2BQPEPWt92R06ejfe7jdsyQHZnn4Odgs3lstPJ0mkgM8Jm89HKb4eTA0hgrumS4iTIcCLLWSegPpMA2vya7UR0sAH4Q5L5xvSBNi4oOD6ygYSsLjVZ6fxVwwzvvxqdefQNEUKdEj6cyxEz2uvy2v6joCyoXYvdp67NxaijP6PYDbdIvUeJgW5xgfl7Td%2FuvVCwooUHtRVOPZEy2K%2BILQO%2BYRMK7olG5WPiPVc1a4jQEfIwJQ0rz74PRH7zOT4z50O6Q9U05w3IJw4v9qTiIMP0wkXTDyAZ6cX8G4%2BVc6RrWCDKpxGZpDCsup2rVMpnw1VLcE64fKjYc%2Bv8Xiv4yYlRFcdZv7mwabSNIyEnY6AUSaZ5fDXjR5kCIcN1Vk05lhtIgXEDCa2b7EBjqkAbyWOSU1pdySlqSVy6EuQVOZT1wNawO4emRmBh4dAGH78A4YgD9c0SHXg4S112OUTSzO1b9RcO%2FDV%2BmP5PkWpmIX%2FIXuwRwbrWUK0EEpGcwfJDmdxEN8F0bDJg1zjHxgefmkX4wuRxTcxBt0RVNDXfPX69Nuw9Bfono2SkdMhnRwrUb6Jz%2FuOXFQmfGupz5hSOv2uSdJ1r0blX%2FSXKwvaN4gm6Ye&X-Amz-Signature=c07fe08a51558e1a99a55164776ecf76dc02bb9afd8a8bd019b36baab3a749cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627HWB7XD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhexQ39iwg1%2BOz4Hdx%2FHKRvBnHuRK4PkMpeoEHAPhiKwIhANU37W7dXSBMnOuvai3RQWH%2B4ZreuhPK1Pp7nBNToy7HKv8DCDQQABoMNjM3NDIzMTgzODA1Igy6UofjPior3omKnbcq3AP3ebCEBIEkLxrMUa2esmMj7z25YonwuNqKIRRaeDDk7%2BGP01RJ4LDMUJfJlYHkghZpdz7Y36q0Zim%2BlwwadZrXUL%2BNFEe0%2FtZ9k%2FliJn%2FV5ppfaaRw0XHUp%2BCuB2gPBzvrp9guumMI4r5e937FApKOz0l7JmpO5Lq8VN77Llap8jIbBU8l8gNKmFoAiZSqhdTsQXcHLqVibvq5Y5DL%2FPJr3ATPTLcfSMhoZr9ZSTap%2F61dTq53eodWf%2BQPEPWt92R06ejfe7jdsyQHZnn4Odgs3lstPJ0mkgM8Jm89HKb4eTA0hgrumS4iTIcCLLWSegPpMA2vya7UR0sAH4Q5L5xvSBNi4oOD6ygYSsLjVZ6fxVwwzvvxqdefQNEUKdEj6cyxEz2uvy2v6joCyoXYvdp67NxaijP6PYDbdIvUeJgW5xgfl7Td%2FuvVCwooUHtRVOPZEy2K%2BILQO%2BYRMK7olG5WPiPVc1a4jQEfIwJQ0rz74PRH7zOT4z50O6Q9U05w3IJw4v9qTiIMP0wkXTDyAZ6cX8G4%2BVc6RrWCDKpxGZpDCsup2rVMpnw1VLcE64fKjYc%2Bv8Xiv4yYlRFcdZv7mwabSNIyEnY6AUSaZ5fDXjR5kCIcN1Vk05lhtIgXEDCa2b7EBjqkAbyWOSU1pdySlqSVy6EuQVOZT1wNawO4emRmBh4dAGH78A4YgD9c0SHXg4S112OUTSzO1b9RcO%2FDV%2BmP5PkWpmIX%2FIXuwRwbrWUK0EEpGcwfJDmdxEN8F0bDJg1zjHxgefmkX4wuRxTcxBt0RVNDXfPX69Nuw9Bfono2SkdMhnRwrUb6Jz%2FuOXFQmfGupz5hSOv2uSdJ1r0blX%2FSXKwvaN4gm6Ye&X-Amz-Signature=d430a363a0cfff21519547aa10e5467ee6ba4cdd1a7c8639ed3c1cdd18e1b4dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

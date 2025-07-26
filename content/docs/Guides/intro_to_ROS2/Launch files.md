---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUY5RUPX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDMTZAM4MmYoY1tGLH9HhA1wbXImr6Xl3tcTFLVFTDMEAIhAJ5JLIAsw17BqabRScqclfhmqB9Xj0e7gNTSqH0yux%2BcKv8DCFoQABoMNjM3NDIzMTgzODA1IgyswZjAfdu1%2FT9QY1Iq3AP60fHzGGTv8IqHC%2FBWEFYfqUsxqPNbnk0JDhLo0kI1gM1GmdlCUqbiA8Ea0Ry2UHeAcQN%2BP2Jp6Brr2YQ3aL%2FVM8RHEZDVnshwTeCs49jsmPw%2FpMKukOKA4%2FM5I6En2pN1B7bB%2FF7SREIKNvVSzct%2BwFpaxXiDxDmNgDEcVZ6ilPMgSETwk78sKrQBX2G7g%2BVJeXGGfBo0jVRGhFiNSi%2B0GBY2td8k1oghOVwigQcJUpXCj3aLfDltTazwlwLShXMbC6ZrsY0wFDUrol%2FrWQppYuKxGMpxWJ4B69lDN%2FFEcRADD3qnSa6LvcWgyl%2FREb44qpnz6BsZurvV7GIKFb5CvnqPCKOYyCRTliDwvEitfqKzlwt%2BMmk%2F3Klpdp8ZHvPu53EtS%2BFl6mzNNhXNcwerBD9G55sCDNTcJsWfAsecR%2Byy4MPui%2FOdQP%2F%2FqLw%2B0nWdb1IzIYN%2FiS0g6i6HbJOdmLjoxrIz6RmBSdK8QkGNtVZxlAVYW8AdGtATErAQPCgKhUeCRv28DTSAJRCdzybfe%2B0EjeJqarB0nkxFsAdN%2BgFhBAKeQiODylqtbVm7mRnFvc7j3upyj%2B7g7Y9scwH8QNMdMnsM9jBPhB4rl1p6oszjWkGiACRPMDkTxzDvq5LEBjqkAbgI9cK5ov2Q2HaXQPzxFHfuhBS2YJDFTHRMHKyBUcpjUR6f3HBcpyVodsxvLpl1f3T3nkjRbHFXTEKqrxHsGhOr1HulrxGeFpClvV6ywlPi7%2B%2BxrQruU2AnfF7fOV9pCKlj5C2j4MkNIxr1ui%2FQpEanSgpKcEYpSwgVBzKKYXy%2Bb%2FSOibitVXLbNzBqtxHGleUSuzh1lIB%2BrJHwg%2Bs4KcqAz1Fi&X-Amz-Signature=3f83ac60817a3b2b767fb068804b706fff4d8b1a3e5bc8bd376c5b8359f5d376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUY5RUPX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDMTZAM4MmYoY1tGLH9HhA1wbXImr6Xl3tcTFLVFTDMEAIhAJ5JLIAsw17BqabRScqclfhmqB9Xj0e7gNTSqH0yux%2BcKv8DCFoQABoMNjM3NDIzMTgzODA1IgyswZjAfdu1%2FT9QY1Iq3AP60fHzGGTv8IqHC%2FBWEFYfqUsxqPNbnk0JDhLo0kI1gM1GmdlCUqbiA8Ea0Ry2UHeAcQN%2BP2Jp6Brr2YQ3aL%2FVM8RHEZDVnshwTeCs49jsmPw%2FpMKukOKA4%2FM5I6En2pN1B7bB%2FF7SREIKNvVSzct%2BwFpaxXiDxDmNgDEcVZ6ilPMgSETwk78sKrQBX2G7g%2BVJeXGGfBo0jVRGhFiNSi%2B0GBY2td8k1oghOVwigQcJUpXCj3aLfDltTazwlwLShXMbC6ZrsY0wFDUrol%2FrWQppYuKxGMpxWJ4B69lDN%2FFEcRADD3qnSa6LvcWgyl%2FREb44qpnz6BsZurvV7GIKFb5CvnqPCKOYyCRTliDwvEitfqKzlwt%2BMmk%2F3Klpdp8ZHvPu53EtS%2BFl6mzNNhXNcwerBD9G55sCDNTcJsWfAsecR%2Byy4MPui%2FOdQP%2F%2FqLw%2B0nWdb1IzIYN%2FiS0g6i6HbJOdmLjoxrIz6RmBSdK8QkGNtVZxlAVYW8AdGtATErAQPCgKhUeCRv28DTSAJRCdzybfe%2B0EjeJqarB0nkxFsAdN%2BgFhBAKeQiODylqtbVm7mRnFvc7j3upyj%2B7g7Y9scwH8QNMdMnsM9jBPhB4rl1p6oszjWkGiACRPMDkTxzDvq5LEBjqkAbgI9cK5ov2Q2HaXQPzxFHfuhBS2YJDFTHRMHKyBUcpjUR6f3HBcpyVodsxvLpl1f3T3nkjRbHFXTEKqrxHsGhOr1HulrxGeFpClvV6ywlPi7%2B%2BxrQruU2AnfF7fOV9pCKlj5C2j4MkNIxr1ui%2FQpEanSgpKcEYpSwgVBzKKYXy%2Bb%2FSOibitVXLbNzBqtxHGleUSuzh1lIB%2BrJHwg%2Bs4KcqAz1Fi&X-Amz-Signature=560711b3c9bea9350aad7fe962c4f0eb4b54df676da7aabd5cc706a408b5f45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUY5RUPX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDMTZAM4MmYoY1tGLH9HhA1wbXImr6Xl3tcTFLVFTDMEAIhAJ5JLIAsw17BqabRScqclfhmqB9Xj0e7gNTSqH0yux%2BcKv8DCFoQABoMNjM3NDIzMTgzODA1IgyswZjAfdu1%2FT9QY1Iq3AP60fHzGGTv8IqHC%2FBWEFYfqUsxqPNbnk0JDhLo0kI1gM1GmdlCUqbiA8Ea0Ry2UHeAcQN%2BP2Jp6Brr2YQ3aL%2FVM8RHEZDVnshwTeCs49jsmPw%2FpMKukOKA4%2FM5I6En2pN1B7bB%2FF7SREIKNvVSzct%2BwFpaxXiDxDmNgDEcVZ6ilPMgSETwk78sKrQBX2G7g%2BVJeXGGfBo0jVRGhFiNSi%2B0GBY2td8k1oghOVwigQcJUpXCj3aLfDltTazwlwLShXMbC6ZrsY0wFDUrol%2FrWQppYuKxGMpxWJ4B69lDN%2FFEcRADD3qnSa6LvcWgyl%2FREb44qpnz6BsZurvV7GIKFb5CvnqPCKOYyCRTliDwvEitfqKzlwt%2BMmk%2F3Klpdp8ZHvPu53EtS%2BFl6mzNNhXNcwerBD9G55sCDNTcJsWfAsecR%2Byy4MPui%2FOdQP%2F%2FqLw%2B0nWdb1IzIYN%2FiS0g6i6HbJOdmLjoxrIz6RmBSdK8QkGNtVZxlAVYW8AdGtATErAQPCgKhUeCRv28DTSAJRCdzybfe%2B0EjeJqarB0nkxFsAdN%2BgFhBAKeQiODylqtbVm7mRnFvc7j3upyj%2B7g7Y9scwH8QNMdMnsM9jBPhB4rl1p6oszjWkGiACRPMDkTxzDvq5LEBjqkAbgI9cK5ov2Q2HaXQPzxFHfuhBS2YJDFTHRMHKyBUcpjUR6f3HBcpyVodsxvLpl1f3T3nkjRbHFXTEKqrxHsGhOr1HulrxGeFpClvV6ywlPi7%2B%2BxrQruU2AnfF7fOV9pCKlj5C2j4MkNIxr1ui%2FQpEanSgpKcEYpSwgVBzKKYXy%2Bb%2FSOibitVXLbNzBqtxHGleUSuzh1lIB%2BrJHwg%2Bs4KcqAz1Fi&X-Amz-Signature=f30a86afe22db4af394ae02623620b77eb6f3de3ee992cb6b0e9828409ac7491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

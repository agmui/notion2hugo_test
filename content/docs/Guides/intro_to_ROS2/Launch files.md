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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPF3CZI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFFpSY7dS9LcZ%2BSlAliMHgziTDJ12kqHM%2FMEkFJvF8SmAiB07RTLlpgqBvFZg29XXjpi8bueoJl6aWTl3RnL6rIFlyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM0cScF6cn1WSskz2iKtwDig3%2BnPeuohSEf4G3wa%2FX60u4UtBuV7dyXdtZh98rBgdNX5wPt%2FQlYHzSnLkZimguc6XQyFpcA3mCy5stWvZvfA%2BBFH1zblq4p2D%2Fgo30zGGPvwdPvoQQPoWyiKymPeh6DB3bDReLvXNAK%2F%2FNFHwdmTJHI7fBMrW4Njey4bPnQg9wHUpxnd1FrfSKtBRBq9WQ4ItOglLdYOlPNSPKYY6RTmUCc6fHqPxzShmuoxxeFVeMNSEDsG3DXURW0sWkEybXxKBANGJb1NQNaR%2FoW9cb8UwOSHUjpVOnkxyWdW63eUn7wR3i5n4IY9tmt1Zy60VfzL%2FjvVrekuWKf0OAfJP3mTa4EBUVEavv3cL6ql8%2F3LT%2BsmYf17vXmCSyoYtWXzuylwLcemO%2F8lNG0v%2BpzgeqF2j0NwBJqx%2FB1Tcf%2FtdY%2BRc1RPljbY8PSnulLYcHz9j1CULUOehwRDEnL2giRNo4s5aFZPOyxte0o9cYeg2vd8BrWv8b3zvgqcuqVFkcC13BMXBSZweKGQJEUV%2FSXPnPTOAwhgM1H%2FWUgnNvMu1DqldG8tpDkInjviKEY8dljmFArvKQ15C%2Byr5Ow%2FhR6AueN0mCieIEWvSrz8nGk7ohTY%2FsOORQp7PTIhxced0w6OmDwgY6pgFvLB%2BHouh%2BLlM8s%2FByHF7vf3k0Pw4RjsRgFlbMbUNfD8kaM3Lfrj%2B7%2B5K18wgZXYZIiyITWH0%2B4vLDp0eHvOpLLMntL%2FO76LN7jH1LsGUjAsbw2oJeeQRmbXTW7AhoA7Ckjg6ul9kQuGqOdUcjrTimv5ENfas%2BdQOREYxzDPW5qE2WEPJTSmRJUutJqAg%2FV9Ei4iYcj50VY4oqlWJxHNNnWrZDxt2S&X-Amz-Signature=c69c008970b1750a03aefbe2b02fa898b2813e32c5f631da5b04b30d3e741ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPF3CZI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFFpSY7dS9LcZ%2BSlAliMHgziTDJ12kqHM%2FMEkFJvF8SmAiB07RTLlpgqBvFZg29XXjpi8bueoJl6aWTl3RnL6rIFlyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM0cScF6cn1WSskz2iKtwDig3%2BnPeuohSEf4G3wa%2FX60u4UtBuV7dyXdtZh98rBgdNX5wPt%2FQlYHzSnLkZimguc6XQyFpcA3mCy5stWvZvfA%2BBFH1zblq4p2D%2Fgo30zGGPvwdPvoQQPoWyiKymPeh6DB3bDReLvXNAK%2F%2FNFHwdmTJHI7fBMrW4Njey4bPnQg9wHUpxnd1FrfSKtBRBq9WQ4ItOglLdYOlPNSPKYY6RTmUCc6fHqPxzShmuoxxeFVeMNSEDsG3DXURW0sWkEybXxKBANGJb1NQNaR%2FoW9cb8UwOSHUjpVOnkxyWdW63eUn7wR3i5n4IY9tmt1Zy60VfzL%2FjvVrekuWKf0OAfJP3mTa4EBUVEavv3cL6ql8%2F3LT%2BsmYf17vXmCSyoYtWXzuylwLcemO%2F8lNG0v%2BpzgeqF2j0NwBJqx%2FB1Tcf%2FtdY%2BRc1RPljbY8PSnulLYcHz9j1CULUOehwRDEnL2giRNo4s5aFZPOyxte0o9cYeg2vd8BrWv8b3zvgqcuqVFkcC13BMXBSZweKGQJEUV%2FSXPnPTOAwhgM1H%2FWUgnNvMu1DqldG8tpDkInjviKEY8dljmFArvKQ15C%2Byr5Ow%2FhR6AueN0mCieIEWvSrz8nGk7ohTY%2FsOORQp7PTIhxced0w6OmDwgY6pgFvLB%2BHouh%2BLlM8s%2FByHF7vf3k0Pw4RjsRgFlbMbUNfD8kaM3Lfrj%2B7%2B5K18wgZXYZIiyITWH0%2B4vLDp0eHvOpLLMntL%2FO76LN7jH1LsGUjAsbw2oJeeQRmbXTW7AhoA7Ckjg6ul9kQuGqOdUcjrTimv5ENfas%2BdQOREYxzDPW5qE2WEPJTSmRJUutJqAg%2FV9Ei4iYcj50VY4oqlWJxHNNnWrZDxt2S&X-Amz-Signature=193201290f441b9fd853b28a96744653ca6039189056ef1757a85d2a07735c28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IPF3CZI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T023029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIFFpSY7dS9LcZ%2BSlAliMHgziTDJ12kqHM%2FMEkFJvF8SmAiB07RTLlpgqBvFZg29XXjpi8bueoJl6aWTl3RnL6rIFlyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM0cScF6cn1WSskz2iKtwDig3%2BnPeuohSEf4G3wa%2FX60u4UtBuV7dyXdtZh98rBgdNX5wPt%2FQlYHzSnLkZimguc6XQyFpcA3mCy5stWvZvfA%2BBFH1zblq4p2D%2Fgo30zGGPvwdPvoQQPoWyiKymPeh6DB3bDReLvXNAK%2F%2FNFHwdmTJHI7fBMrW4Njey4bPnQg9wHUpxnd1FrfSKtBRBq9WQ4ItOglLdYOlPNSPKYY6RTmUCc6fHqPxzShmuoxxeFVeMNSEDsG3DXURW0sWkEybXxKBANGJb1NQNaR%2FoW9cb8UwOSHUjpVOnkxyWdW63eUn7wR3i5n4IY9tmt1Zy60VfzL%2FjvVrekuWKf0OAfJP3mTa4EBUVEavv3cL6ql8%2F3LT%2BsmYf17vXmCSyoYtWXzuylwLcemO%2F8lNG0v%2BpzgeqF2j0NwBJqx%2FB1Tcf%2FtdY%2BRc1RPljbY8PSnulLYcHz9j1CULUOehwRDEnL2giRNo4s5aFZPOyxte0o9cYeg2vd8BrWv8b3zvgqcuqVFkcC13BMXBSZweKGQJEUV%2FSXPnPTOAwhgM1H%2FWUgnNvMu1DqldG8tpDkInjviKEY8dljmFArvKQ15C%2Byr5Ow%2FhR6AueN0mCieIEWvSrz8nGk7ohTY%2FsOORQp7PTIhxced0w6OmDwgY6pgFvLB%2BHouh%2BLlM8s%2FByHF7vf3k0Pw4RjsRgFlbMbUNfD8kaM3Lfrj%2B7%2B5K18wgZXYZIiyITWH0%2B4vLDp0eHvOpLLMntL%2FO76LN7jH1LsGUjAsbw2oJeeQRmbXTW7AhoA7Ckjg6ul9kQuGqOdUcjrTimv5ENfas%2BdQOREYxzDPW5qE2WEPJTSmRJUutJqAg%2FV9Ei4iYcj50VY4oqlWJxHNNnWrZDxt2S&X-Amz-Signature=e2ddeac8b0306d6c5bc8545393265c42fdd84e7741be8a2945e75aa747900cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

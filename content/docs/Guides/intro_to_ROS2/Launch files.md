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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJVZFIP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDuAJF6%2BLaab9j2VhEMbirf98%2Btu17ax1ic3p5NtVvaOAiEAnlvFNK5BKSE%2FmZqDKRoY7D9dawP791Js6UukrJVTl0Iq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDM2fU5ch%2BU3Jspp4CSrcAzFBytx9BUsZptHSQ0d4lbpyB%2FUzQQTJPTtrEa1hvmkmuJkTDSH8gRxz29YVhOsXWmXir7sZlA6luf%2Fea5iQkSxGa46VSVMeF5mIiCWQsoyNjI%2B77D2iAU%2FE8FC7Ys7yo87b2gPVAgyDsPzQLjly9efrTEjdroayDqfqpaUHLFPE0wq2Nmus4PXsmoUOXwiJUDIQu5eRU3QgG2lZOwCAaJcF1V1Q7R7Y0p1U%2BWyiyOfEAmIPhUzu7P6WxgY9XUx7wsdQh2R%2BTeDqdmh69iKCY87cX6%2FmfmQGOresq1GRvZTCIoOCVOK1nKHke3be3THKToZHs1MkosV0YgTm7Qnv%2BA64IhSmU7fdEQKgZ4UUdjh5u%2FayYyCRMuu0d5UqxrpcW36B%2BUL94n%2BDmRbW3PkgEMEmBFm4XAzEqVoWFPzbSB8H49d7c7uARQ6Jz5jUxHeJmmMmBvKVRkFuA0KdmFFC6%2BMcwr2fpxh%2FoiWKKsQVx1bmlS8NviCpBfoIuyLep04E0f%2Beu2yCs791xNyrns2o9B0h8CoN8736lqY4eQ59IKaTQe4Pe2oNMRjac%2FHZjRsYe8QkAMBpek%2FixRKlG0a%2BGI0QkYZ%2Fxc1kMdLRn7RO8np1I6WUzNScySKI5QcwMIHt5sIGOqUBaugNzPLdnZF8ZEKnf7cgKNNwpch%2BaxSn06XnkZ2S36MOIcI3GcPF22iQajc5SxWmPn2Tq5llP8m0Y%2BJxBwPw5eCp8OhddQ9OJMCnkaubu%2BfNvE%2BOjyiYjCJCWijqi%2FQCyBFdb8%2BmY3y0noBWJxqQyqkHKyuLN69FJ0qKAOJhq5cHYAgwYA0F0vSMaL%2B9mVL7%2Fy2moClhiBRaeEfAxWOmzRLUEH4D&X-Amz-Signature=8e40c89e0a9763dbd6d37016bfb6346c90cf8bfad70b8bb3be3d5af69e236929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJVZFIP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDuAJF6%2BLaab9j2VhEMbirf98%2Btu17ax1ic3p5NtVvaOAiEAnlvFNK5BKSE%2FmZqDKRoY7D9dawP791Js6UukrJVTl0Iq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDM2fU5ch%2BU3Jspp4CSrcAzFBytx9BUsZptHSQ0d4lbpyB%2FUzQQTJPTtrEa1hvmkmuJkTDSH8gRxz29YVhOsXWmXir7sZlA6luf%2Fea5iQkSxGa46VSVMeF5mIiCWQsoyNjI%2B77D2iAU%2FE8FC7Ys7yo87b2gPVAgyDsPzQLjly9efrTEjdroayDqfqpaUHLFPE0wq2Nmus4PXsmoUOXwiJUDIQu5eRU3QgG2lZOwCAaJcF1V1Q7R7Y0p1U%2BWyiyOfEAmIPhUzu7P6WxgY9XUx7wsdQh2R%2BTeDqdmh69iKCY87cX6%2FmfmQGOresq1GRvZTCIoOCVOK1nKHke3be3THKToZHs1MkosV0YgTm7Qnv%2BA64IhSmU7fdEQKgZ4UUdjh5u%2FayYyCRMuu0d5UqxrpcW36B%2BUL94n%2BDmRbW3PkgEMEmBFm4XAzEqVoWFPzbSB8H49d7c7uARQ6Jz5jUxHeJmmMmBvKVRkFuA0KdmFFC6%2BMcwr2fpxh%2FoiWKKsQVx1bmlS8NviCpBfoIuyLep04E0f%2Beu2yCs791xNyrns2o9B0h8CoN8736lqY4eQ59IKaTQe4Pe2oNMRjac%2FHZjRsYe8QkAMBpek%2FixRKlG0a%2BGI0QkYZ%2Fxc1kMdLRn7RO8np1I6WUzNScySKI5QcwMIHt5sIGOqUBaugNzPLdnZF8ZEKnf7cgKNNwpch%2BaxSn06XnkZ2S36MOIcI3GcPF22iQajc5SxWmPn2Tq5llP8m0Y%2BJxBwPw5eCp8OhddQ9OJMCnkaubu%2BfNvE%2BOjyiYjCJCWijqi%2FQCyBFdb8%2BmY3y0noBWJxqQyqkHKyuLN69FJ0qKAOJhq5cHYAgwYA0F0vSMaL%2B9mVL7%2Fy2moClhiBRaeEfAxWOmzRLUEH4D&X-Amz-Signature=a79e38828688b27109742f86a8ed2effb302326cef9abadc526f4d8f3a29d106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AJVZFIP%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIDuAJF6%2BLaab9j2VhEMbirf98%2Btu17ax1ic3p5NtVvaOAiEAnlvFNK5BKSE%2FmZqDKRoY7D9dawP791Js6UukrJVTl0Iq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDM2fU5ch%2BU3Jspp4CSrcAzFBytx9BUsZptHSQ0d4lbpyB%2FUzQQTJPTtrEa1hvmkmuJkTDSH8gRxz29YVhOsXWmXir7sZlA6luf%2Fea5iQkSxGa46VSVMeF5mIiCWQsoyNjI%2B77D2iAU%2FE8FC7Ys7yo87b2gPVAgyDsPzQLjly9efrTEjdroayDqfqpaUHLFPE0wq2Nmus4PXsmoUOXwiJUDIQu5eRU3QgG2lZOwCAaJcF1V1Q7R7Y0p1U%2BWyiyOfEAmIPhUzu7P6WxgY9XUx7wsdQh2R%2BTeDqdmh69iKCY87cX6%2FmfmQGOresq1GRvZTCIoOCVOK1nKHke3be3THKToZHs1MkosV0YgTm7Qnv%2BA64IhSmU7fdEQKgZ4UUdjh5u%2FayYyCRMuu0d5UqxrpcW36B%2BUL94n%2BDmRbW3PkgEMEmBFm4XAzEqVoWFPzbSB8H49d7c7uARQ6Jz5jUxHeJmmMmBvKVRkFuA0KdmFFC6%2BMcwr2fpxh%2FoiWKKsQVx1bmlS8NviCpBfoIuyLep04E0f%2Beu2yCs791xNyrns2o9B0h8CoN8736lqY4eQ59IKaTQe4Pe2oNMRjac%2FHZjRsYe8QkAMBpek%2FixRKlG0a%2BGI0QkYZ%2Fxc1kMdLRn7RO8np1I6WUzNScySKI5QcwMIHt5sIGOqUBaugNzPLdnZF8ZEKnf7cgKNNwpch%2BaxSn06XnkZ2S36MOIcI3GcPF22iQajc5SxWmPn2Tq5llP8m0Y%2BJxBwPw5eCp8OhddQ9OJMCnkaubu%2BfNvE%2BOjyiYjCJCWijqi%2FQCyBFdb8%2BmY3y0noBWJxqQyqkHKyuLN69FJ0qKAOJhq5cHYAgwYA0F0vSMaL%2B9mVL7%2Fy2moClhiBRaeEfAxWOmzRLUEH4D&X-Amz-Signature=942e8a017aeccaed9efc6636bc345b624156369a4018a8ca8d49c6dd942f79dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

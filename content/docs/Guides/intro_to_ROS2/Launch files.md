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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NG4PPFY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDDNd6SCi1Rs8WW1ScWSxwjgf675ksYqVOn%2BVQDZD%2BjLwIgPIfxK5rsblzm6Y%2F0jf3A10FhBGJ2kIM1IzjwQbvPuZgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbdWWNGwOyvlMaUPCrcA7cjqwtc2FYRcR3ukcjPaomDQ2rUCSdr5d546mzQ3mzioriBz1ZTheQqJZpGgcI%2FUz8MDe7u8bFnd8I2qXMSbBTJ%2FaWz8ExmJCCaupN3etqcNYpyzguMbmp86VScy6oPTPfCN5TTYE6CECVi7eYw3n7ukDdGMCW61jUfcYGEmXn6fLghp%2BlF7TGfMt2VdRtMhn8uUNpzWQkYyZ9rL26Hy3TlBVfPALL%2FNce3ntNURhHS9FCnqNuVqTCqub0plpaHo6MXGmq63b8t0Sq5hKnuan8aZ0yoEgamMlFrCKHv21kr66VlMFMfSTxOAx3M5J%2FJ6wWPtdLGWIQHod40SslcotyTVtSmVkbuqfdSKl7ij%2FjKtl1KXFcWTs3h%2BMezep80aggngGis1OktZ4KVfm3gpYsc5QnQY43%2BTRAnK%2BnLDerfMcH8KOWOOJ%2FPMUnzHPHjgd3RNBXYUDV4JdIrSNwknKW7%2BpZaiMeL37d%2B8ok8nigJeJfoqrIXnWZvgGWR2SmFuP9O%2ByHwoX%2BiOB9TxO3qPcUrTT4qp7s4XWKQyiSGBQs%2Fy78nQOQvXucPomBkJh%2FtUcve1Qme5ANqVaSZQaI3PknwNp1yX2HfzHPeKJo7b8OV7gFs7xMnEqwfGdzWMNvs%2Bb4GOqUBDHg0teRaIEG%2BoMklh2ZnSGGWwXYHp9uB6Jq2K8LUhGDPaPhCoO6dmyTzgPkuaOIb2DI10J97UOFYwu4kan0LbtxYrYXZNt3Pw4fkBY6h3fP%2FhntKdb7CBK6%2FAQSWZOPPowp3ePOWNjUM10OT4vg6eWwpNMPl1Q6gqV3R%2B2rg7AWtpq3a5kKgHvEhxq6g3tuai1NvtlRHla7kOoi57v6PeLd0EolJ&X-Amz-Signature=9e1f23e1f0b1078fd76794acba269d13ad67166c8670b67d119d894207c9a420&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NG4PPFY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDDNd6SCi1Rs8WW1ScWSxwjgf675ksYqVOn%2BVQDZD%2BjLwIgPIfxK5rsblzm6Y%2F0jf3A10FhBGJ2kIM1IzjwQbvPuZgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbdWWNGwOyvlMaUPCrcA7cjqwtc2FYRcR3ukcjPaomDQ2rUCSdr5d546mzQ3mzioriBz1ZTheQqJZpGgcI%2FUz8MDe7u8bFnd8I2qXMSbBTJ%2FaWz8ExmJCCaupN3etqcNYpyzguMbmp86VScy6oPTPfCN5TTYE6CECVi7eYw3n7ukDdGMCW61jUfcYGEmXn6fLghp%2BlF7TGfMt2VdRtMhn8uUNpzWQkYyZ9rL26Hy3TlBVfPALL%2FNce3ntNURhHS9FCnqNuVqTCqub0plpaHo6MXGmq63b8t0Sq5hKnuan8aZ0yoEgamMlFrCKHv21kr66VlMFMfSTxOAx3M5J%2FJ6wWPtdLGWIQHod40SslcotyTVtSmVkbuqfdSKl7ij%2FjKtl1KXFcWTs3h%2BMezep80aggngGis1OktZ4KVfm3gpYsc5QnQY43%2BTRAnK%2BnLDerfMcH8KOWOOJ%2FPMUnzHPHjgd3RNBXYUDV4JdIrSNwknKW7%2BpZaiMeL37d%2B8ok8nigJeJfoqrIXnWZvgGWR2SmFuP9O%2ByHwoX%2BiOB9TxO3qPcUrTT4qp7s4XWKQyiSGBQs%2Fy78nQOQvXucPomBkJh%2FtUcve1Qme5ANqVaSZQaI3PknwNp1yX2HfzHPeKJo7b8OV7gFs7xMnEqwfGdzWMNvs%2Bb4GOqUBDHg0teRaIEG%2BoMklh2ZnSGGWwXYHp9uB6Jq2K8LUhGDPaPhCoO6dmyTzgPkuaOIb2DI10J97UOFYwu4kan0LbtxYrYXZNt3Pw4fkBY6h3fP%2FhntKdb7CBK6%2FAQSWZOPPowp3ePOWNjUM10OT4vg6eWwpNMPl1Q6gqV3R%2B2rg7AWtpq3a5kKgHvEhxq6g3tuai1NvtlRHla7kOoi57v6PeLd0EolJ&X-Amz-Signature=0a2c595ec39b9486a102e829f8a562d774309b4d4b944f7642f4b9f287458c43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NG4PPFY%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDDNd6SCi1Rs8WW1ScWSxwjgf675ksYqVOn%2BVQDZD%2BjLwIgPIfxK5rsblzm6Y%2F0jf3A10FhBGJ2kIM1IzjwQbvPuZgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAbdWWNGwOyvlMaUPCrcA7cjqwtc2FYRcR3ukcjPaomDQ2rUCSdr5d546mzQ3mzioriBz1ZTheQqJZpGgcI%2FUz8MDe7u8bFnd8I2qXMSbBTJ%2FaWz8ExmJCCaupN3etqcNYpyzguMbmp86VScy6oPTPfCN5TTYE6CECVi7eYw3n7ukDdGMCW61jUfcYGEmXn6fLghp%2BlF7TGfMt2VdRtMhn8uUNpzWQkYyZ9rL26Hy3TlBVfPALL%2FNce3ntNURhHS9FCnqNuVqTCqub0plpaHo6MXGmq63b8t0Sq5hKnuan8aZ0yoEgamMlFrCKHv21kr66VlMFMfSTxOAx3M5J%2FJ6wWPtdLGWIQHod40SslcotyTVtSmVkbuqfdSKl7ij%2FjKtl1KXFcWTs3h%2BMezep80aggngGis1OktZ4KVfm3gpYsc5QnQY43%2BTRAnK%2BnLDerfMcH8KOWOOJ%2FPMUnzHPHjgd3RNBXYUDV4JdIrSNwknKW7%2BpZaiMeL37d%2B8ok8nigJeJfoqrIXnWZvgGWR2SmFuP9O%2ByHwoX%2BiOB9TxO3qPcUrTT4qp7s4XWKQyiSGBQs%2Fy78nQOQvXucPomBkJh%2FtUcve1Qme5ANqVaSZQaI3PknwNp1yX2HfzHPeKJo7b8OV7gFs7xMnEqwfGdzWMNvs%2Bb4GOqUBDHg0teRaIEG%2BoMklh2ZnSGGWwXYHp9uB6Jq2K8LUhGDPaPhCoO6dmyTzgPkuaOIb2DI10J97UOFYwu4kan0LbtxYrYXZNt3Pw4fkBY6h3fP%2FhntKdb7CBK6%2FAQSWZOPPowp3ePOWNjUM10OT4vg6eWwpNMPl1Q6gqV3R%2B2rg7AWtpq3a5kKgHvEhxq6g3tuai1NvtlRHla7kOoi57v6PeLd0EolJ&X-Amz-Signature=c908b0392f14c5ea5162873e3a4ea998026be7d1b91b1f4ee75fb14bfbc2af2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

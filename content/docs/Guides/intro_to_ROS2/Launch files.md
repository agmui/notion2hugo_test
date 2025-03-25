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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7PSDXTM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxlKF%2BuGz82gzR44uvuiHuAJguEO353%2Buk%2FGDLDvT90AIhAKW%2FT7KeO5HuonOoayKN2mvZMah0Nsmv1nm5KJf8GO90Kv8DCBQQABoMNjM3NDIzMTgzODA1Igw%2B1W%2FhagarWPnx1usq3AO3JHIugvSRIJ45Ea92y0g4U4KVMczWc%2Fajpmt%2FZCkWV6Pi0dprT8Ca2%2Bsna6e2T3ucNfDTRm63A5TAIEeCafu14w4WdeVBFtO4GJudjIgB1cq26zd90EYLTDAt5WqxgRL4R%2B%2F01M%2F7%2FgBGsltY3Es13T%2FnZ29aE7bkobR7WJKFqwYSxAU2SVKkeSpqLS4oLxPqvbQ6SoMKe3MCJNG6PWdRrcrllfEFXIIb1ij0tOBf%2BGKUgvy22wtL0CoHnj5hhZjbaN9YY3lZ0CXfbwXJZaLWyTbc0sqvw1vGZ%2Ff5pEKG6M0GCCe6nMKFCIcQFILa%2FImS7ttCiKkpG2GsHERi1nntyHZaC3H%2BT5aysB0tp0ATYo7NUlr9LQ%2BRsXGAiFv4YC3KOUIIpZC9KF1pslldpcdJO9W4jMtrX6GMLQUr35YF0thzAq1q44%2FIXV3WmUDxrRmuYzFr49f5K6tcKgDCBpRPxbc0xc145X5pQwcS5%2FstwFvILqANBkGQDbzC4y8LKbWWWPTi9F5DCVCZYyrimO%2BeMBGaZflJKnSIafJcp92nfcPjZr7egEoguOS5vgmwn%2F0VjeDVAoQ5twotFAW1oN%2B4U184AXVywRmerSF3LVSnpEU98rjfLgi67xngzjDDi4q%2FBjqkAV8wwSxiv6QXB9Qbr4q1UH4BFwgdMm4pCulavILAt917WmfvAnjs2t8mqL6Jh84nC5I4lQKUxTqL5uXXt7CjigNME13y%2FAdEtRZqQP50cpp%2BvNH%2Bb4yi0t2hhE5xV3YrObAhmunKJ8NncElsK40hgWc975iLCMIMD8IOrY7MtVw1KZdIY0XU6mjRsZOWvhcwmahAHd12Ci6REduRrTb3r6WPtFjq&X-Amz-Signature=0e3a3a51dce691b657e6716d3e15be8247d4a8c3172d807359cc58bd04df35b8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7PSDXTM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxlKF%2BuGz82gzR44uvuiHuAJguEO353%2Buk%2FGDLDvT90AIhAKW%2FT7KeO5HuonOoayKN2mvZMah0Nsmv1nm5KJf8GO90Kv8DCBQQABoMNjM3NDIzMTgzODA1Igw%2B1W%2FhagarWPnx1usq3AO3JHIugvSRIJ45Ea92y0g4U4KVMczWc%2Fajpmt%2FZCkWV6Pi0dprT8Ca2%2Bsna6e2T3ucNfDTRm63A5TAIEeCafu14w4WdeVBFtO4GJudjIgB1cq26zd90EYLTDAt5WqxgRL4R%2B%2F01M%2F7%2FgBGsltY3Es13T%2FnZ29aE7bkobR7WJKFqwYSxAU2SVKkeSpqLS4oLxPqvbQ6SoMKe3MCJNG6PWdRrcrllfEFXIIb1ij0tOBf%2BGKUgvy22wtL0CoHnj5hhZjbaN9YY3lZ0CXfbwXJZaLWyTbc0sqvw1vGZ%2Ff5pEKG6M0GCCe6nMKFCIcQFILa%2FImS7ttCiKkpG2GsHERi1nntyHZaC3H%2BT5aysB0tp0ATYo7NUlr9LQ%2BRsXGAiFv4YC3KOUIIpZC9KF1pslldpcdJO9W4jMtrX6GMLQUr35YF0thzAq1q44%2FIXV3WmUDxrRmuYzFr49f5K6tcKgDCBpRPxbc0xc145X5pQwcS5%2FstwFvILqANBkGQDbzC4y8LKbWWWPTi9F5DCVCZYyrimO%2BeMBGaZflJKnSIafJcp92nfcPjZr7egEoguOS5vgmwn%2F0VjeDVAoQ5twotFAW1oN%2B4U184AXVywRmerSF3LVSnpEU98rjfLgi67xngzjDDi4q%2FBjqkAV8wwSxiv6QXB9Qbr4q1UH4BFwgdMm4pCulavILAt917WmfvAnjs2t8mqL6Jh84nC5I4lQKUxTqL5uXXt7CjigNME13y%2FAdEtRZqQP50cpp%2BvNH%2Bb4yi0t2hhE5xV3YrObAhmunKJ8NncElsK40hgWc975iLCMIMD8IOrY7MtVw1KZdIY0XU6mjRsZOWvhcwmahAHd12Ci6REduRrTb3r6WPtFjq&X-Amz-Signature=dfe3997b5bd2a15896b6e91f6ed22a0812c14a94bd7c8166ffe6fb32e0a3a771&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7PSDXTM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxlKF%2BuGz82gzR44uvuiHuAJguEO353%2Buk%2FGDLDvT90AIhAKW%2FT7KeO5HuonOoayKN2mvZMah0Nsmv1nm5KJf8GO90Kv8DCBQQABoMNjM3NDIzMTgzODA1Igw%2B1W%2FhagarWPnx1usq3AO3JHIugvSRIJ45Ea92y0g4U4KVMczWc%2Fajpmt%2FZCkWV6Pi0dprT8Ca2%2Bsna6e2T3ucNfDTRm63A5TAIEeCafu14w4WdeVBFtO4GJudjIgB1cq26zd90EYLTDAt5WqxgRL4R%2B%2F01M%2F7%2FgBGsltY3Es13T%2FnZ29aE7bkobR7WJKFqwYSxAU2SVKkeSpqLS4oLxPqvbQ6SoMKe3MCJNG6PWdRrcrllfEFXIIb1ij0tOBf%2BGKUgvy22wtL0CoHnj5hhZjbaN9YY3lZ0CXfbwXJZaLWyTbc0sqvw1vGZ%2Ff5pEKG6M0GCCe6nMKFCIcQFILa%2FImS7ttCiKkpG2GsHERi1nntyHZaC3H%2BT5aysB0tp0ATYo7NUlr9LQ%2BRsXGAiFv4YC3KOUIIpZC9KF1pslldpcdJO9W4jMtrX6GMLQUr35YF0thzAq1q44%2FIXV3WmUDxrRmuYzFr49f5K6tcKgDCBpRPxbc0xc145X5pQwcS5%2FstwFvILqANBkGQDbzC4y8LKbWWWPTi9F5DCVCZYyrimO%2BeMBGaZflJKnSIafJcp92nfcPjZr7egEoguOS5vgmwn%2F0VjeDVAoQ5twotFAW1oN%2B4U184AXVywRmerSF3LVSnpEU98rjfLgi67xngzjDDi4q%2FBjqkAV8wwSxiv6QXB9Qbr4q1UH4BFwgdMm4pCulavILAt917WmfvAnjs2t8mqL6Jh84nC5I4lQKUxTqL5uXXt7CjigNME13y%2FAdEtRZqQP50cpp%2BvNH%2Bb4yi0t2hhE5xV3YrObAhmunKJ8NncElsK40hgWc975iLCMIMD8IOrY7MtVw1KZdIY0XU6mjRsZOWvhcwmahAHd12Ci6REduRrTb3r6WPtFjq&X-Amz-Signature=66bbc8386efed5aac89e742fe3761652bba3db257586a94b855f0aa21abf12e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

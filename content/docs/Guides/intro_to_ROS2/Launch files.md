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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664666FBNA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIH3l5hrO6QZ2%2F%2FHOhAERwy5fIHdEXaExlEjxD3bM7ibjAiEAolBG%2BURb%2BdktakOJUrlX7%2Bhk18u8D8sVUEN5yofmptQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOWFqWNiplJu0MGU8ircA44yFd3DTvSAN2VZ7kx%2B1f%2Bkv2mZWv%2FRXm0l%2BqOGis9PLNSQrkiOENhnNLNtw2U2AEN96J2yOJwVkfo577bFl%2Bc19YKkqI55TkUSx7FutPgwq16Idfn9BHlimDIUmpP6bSrSWxc61qbGFXrYuO7JPxjrRCeD%2BUvOAPFdjGau9IQTKovqI%2FJfgnfijX604gQhd9u4EJNkG292chjvmoss3SLJ8v6FpaF0uu%2Fba2xUsD4ScmQmCBDpT9xUdX169oHCMkvLkQh9DoSI%2B%2FNW6CwaBTuOecUcOi5MlSUc67AfTWd22FqZr6ajOctxvOLzjhnhf1fH0Ooyo1K5uOlcjlnWclZHOKmVH%2F20luN97O7Vgk29AzmCmOolyNZfcwvFL8Ny81ADnB%2BlFrQueBXsb8%2BBIlIabkmgIBefR8Y1Lgesx8ot06YpVcTNcPwJmf1du55cMIUyX41I1YzxBS%2BawL4si0Z0Uu%2FDNYpjWzdIYUREq9E89nFh5AqSMCEy%2FHF%2BXECE9%2FBOHnjZ%2BUnItUR4P5AYSiIrXdTYGVhX8ndMo%2BhPsCl6NTxVf%2FxNSh%2BWoREQFxZOpOfsHgmhmJjUyCHC0lnJ9%2Blr16uwM%2Bct9RIcntdEJ3VZMd2lxoyx%2BJcrXGIIMJW0v8IGOqUBQg639vHYhEJuf1Nlm4ovOlIk6uaXXhEl7JFqdhMAE3wd1lImIFwVT3cz4s%2BcWQ3cN6U5wM0O1tQnMjZoKKYsw1yddd9uhTryfJt9ePehMzHOdX%2F5yTNsD0hJQITq0VC2jcaOLoA0RMnp2z9vlXm3pmnFj2hMZbneezkrwyl6ZyMDP6ugfTYupG0d3EjCZiZjQaXGbSEPevwb9JssEitnZ03rEMFq&X-Amz-Signature=77de09eb24039c1f4ab5b85df4c215c1e0452ca9421646bd94b55a8bc401917d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664666FBNA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIH3l5hrO6QZ2%2F%2FHOhAERwy5fIHdEXaExlEjxD3bM7ibjAiEAolBG%2BURb%2BdktakOJUrlX7%2Bhk18u8D8sVUEN5yofmptQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOWFqWNiplJu0MGU8ircA44yFd3DTvSAN2VZ7kx%2B1f%2Bkv2mZWv%2FRXm0l%2BqOGis9PLNSQrkiOENhnNLNtw2U2AEN96J2yOJwVkfo577bFl%2Bc19YKkqI55TkUSx7FutPgwq16Idfn9BHlimDIUmpP6bSrSWxc61qbGFXrYuO7JPxjrRCeD%2BUvOAPFdjGau9IQTKovqI%2FJfgnfijX604gQhd9u4EJNkG292chjvmoss3SLJ8v6FpaF0uu%2Fba2xUsD4ScmQmCBDpT9xUdX169oHCMkvLkQh9DoSI%2B%2FNW6CwaBTuOecUcOi5MlSUc67AfTWd22FqZr6ajOctxvOLzjhnhf1fH0Ooyo1K5uOlcjlnWclZHOKmVH%2F20luN97O7Vgk29AzmCmOolyNZfcwvFL8Ny81ADnB%2BlFrQueBXsb8%2BBIlIabkmgIBefR8Y1Lgesx8ot06YpVcTNcPwJmf1du55cMIUyX41I1YzxBS%2BawL4si0Z0Uu%2FDNYpjWzdIYUREq9E89nFh5AqSMCEy%2FHF%2BXECE9%2FBOHnjZ%2BUnItUR4P5AYSiIrXdTYGVhX8ndMo%2BhPsCl6NTxVf%2FxNSh%2BWoREQFxZOpOfsHgmhmJjUyCHC0lnJ9%2Blr16uwM%2Bct9RIcntdEJ3VZMd2lxoyx%2BJcrXGIIMJW0v8IGOqUBQg639vHYhEJuf1Nlm4ovOlIk6uaXXhEl7JFqdhMAE3wd1lImIFwVT3cz4s%2BcWQ3cN6U5wM0O1tQnMjZoKKYsw1yddd9uhTryfJt9ePehMzHOdX%2F5yTNsD0hJQITq0VC2jcaOLoA0RMnp2z9vlXm3pmnFj2hMZbneezkrwyl6ZyMDP6ugfTYupG0d3EjCZiZjQaXGbSEPevwb9JssEitnZ03rEMFq&X-Amz-Signature=cf86fc882463c91fc670a01ce99104a65a68fb6542b273257f5e5cbd2b47f3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664666FBNA%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIH3l5hrO6QZ2%2F%2FHOhAERwy5fIHdEXaExlEjxD3bM7ibjAiEAolBG%2BURb%2BdktakOJUrlX7%2Bhk18u8D8sVUEN5yofmptQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOWFqWNiplJu0MGU8ircA44yFd3DTvSAN2VZ7kx%2B1f%2Bkv2mZWv%2FRXm0l%2BqOGis9PLNSQrkiOENhnNLNtw2U2AEN96J2yOJwVkfo577bFl%2Bc19YKkqI55TkUSx7FutPgwq16Idfn9BHlimDIUmpP6bSrSWxc61qbGFXrYuO7JPxjrRCeD%2BUvOAPFdjGau9IQTKovqI%2FJfgnfijX604gQhd9u4EJNkG292chjvmoss3SLJ8v6FpaF0uu%2Fba2xUsD4ScmQmCBDpT9xUdX169oHCMkvLkQh9DoSI%2B%2FNW6CwaBTuOecUcOi5MlSUc67AfTWd22FqZr6ajOctxvOLzjhnhf1fH0Ooyo1K5uOlcjlnWclZHOKmVH%2F20luN97O7Vgk29AzmCmOolyNZfcwvFL8Ny81ADnB%2BlFrQueBXsb8%2BBIlIabkmgIBefR8Y1Lgesx8ot06YpVcTNcPwJmf1du55cMIUyX41I1YzxBS%2BawL4si0Z0Uu%2FDNYpjWzdIYUREq9E89nFh5AqSMCEy%2FHF%2BXECE9%2FBOHnjZ%2BUnItUR4P5AYSiIrXdTYGVhX8ndMo%2BhPsCl6NTxVf%2FxNSh%2BWoREQFxZOpOfsHgmhmJjUyCHC0lnJ9%2Blr16uwM%2Bct9RIcntdEJ3VZMd2lxoyx%2BJcrXGIIMJW0v8IGOqUBQg639vHYhEJuf1Nlm4ovOlIk6uaXXhEl7JFqdhMAE3wd1lImIFwVT3cz4s%2BcWQ3cN6U5wM0O1tQnMjZoKKYsw1yddd9uhTryfJt9ePehMzHOdX%2F5yTNsD0hJQITq0VC2jcaOLoA0RMnp2z9vlXm3pmnFj2hMZbneezkrwyl6ZyMDP6ugfTYupG0d3EjCZiZjQaXGbSEPevwb9JssEitnZ03rEMFq&X-Amz-Signature=3e9e49493264bc5252218d0f3b4795a11760a599dd9229431e75d832a8bfa460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EJYYXOG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDZxCrLnuFLhgoUFoGGa2x0w0uoHRBOgmI8yTpfulfnEAIhAIybkPWsnLvWhiD2IyQf%2B6rN685RyWPpmHBxZqqTHxWJKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKbivAozXrIyUaS3gq3ANqq%2Fp1hEc6yso5GIJN9726wfBapWbj295CinqJXVDbJQq99OBU5AjqFQWk34GDA%2BYg2kvz%2BEhVJ27YZkfTxl%2FvX20XzczIKvtT0aK7PJWz%2FiQ5hAlyws1i9LwfUG6sINfsCvx9Jb77uSnlNGBfGHwMzKA1cdEo7vv8L4GyS%2Fm6v8kTBBD%2BkikELFa4%2Bj%2FbUab9Bw0Dw79VsVSGfUPaY3IOSqzgvv%2F7Y2ygRF4aJG17w054pVVXNOPqcYcXDNqRrJZP3yUbnT6GbiAits5mkX6CfmusVWD9z66U%2Bx1aLB%2FejUPuPnDpTM019L6QYs6%2BVhc7oIb50Z4t4RKsatPxYYfNW2gDkJmh4c5H4w1QAKXv5Bq2iiMrBBzHlBYMAomaVDLSwXYxuF%2B5dDcn8%2FB4%2FfKyRZBURkD9rk0vFpBN6wJCdIkg%2FRBRS%2BYMc5FvahIUv1X4kRcuuxhVdaLL4T85QwsN3FploXFMtQtARn2c5bukxNElHpC16XY0HWLpxuCQGVRK1qw832CvAZAXLd5M7yohwlH0uF0qTtJfAvw8U6rRBgnP2UFB2QUEU1SYxd8TjWKL%2FOTZNXLm010sLT6Z1GIdcvbnyTlg5zZIYmlN5G3Aob9ZdavOVX8iudw61jCKjO%2FBBjqkARzerQ6L3Li7ijnKAvv4qU2F46zGCY6UDu2eMw%2BoJX5kW6FwczAD3fm9beP3wdzO0UaV96YuSR82Nsbpxi18ExmmNCvncJmkqz2pADi8CUIGF7IO9JoC7x8cNakBEmj2sVrIvxVPRjVBD1o3jI6xf3NoFVI1LFK7%2Fh2MRNGfoNUtb4J13fcAFLldEFU9F6ZY5u168QWNgEM0cy0gvvKXIDRoaUMu&X-Amz-Signature=3f6ca58e897438fd8005d709585eb9d9ebdcbb0cd61eb18135d334d9fbffedad&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EJYYXOG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDZxCrLnuFLhgoUFoGGa2x0w0uoHRBOgmI8yTpfulfnEAIhAIybkPWsnLvWhiD2IyQf%2B6rN685RyWPpmHBxZqqTHxWJKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKbivAozXrIyUaS3gq3ANqq%2Fp1hEc6yso5GIJN9726wfBapWbj295CinqJXVDbJQq99OBU5AjqFQWk34GDA%2BYg2kvz%2BEhVJ27YZkfTxl%2FvX20XzczIKvtT0aK7PJWz%2FiQ5hAlyws1i9LwfUG6sINfsCvx9Jb77uSnlNGBfGHwMzKA1cdEo7vv8L4GyS%2Fm6v8kTBBD%2BkikELFa4%2Bj%2FbUab9Bw0Dw79VsVSGfUPaY3IOSqzgvv%2F7Y2ygRF4aJG17w054pVVXNOPqcYcXDNqRrJZP3yUbnT6GbiAits5mkX6CfmusVWD9z66U%2Bx1aLB%2FejUPuPnDpTM019L6QYs6%2BVhc7oIb50Z4t4RKsatPxYYfNW2gDkJmh4c5H4w1QAKXv5Bq2iiMrBBzHlBYMAomaVDLSwXYxuF%2B5dDcn8%2FB4%2FfKyRZBURkD9rk0vFpBN6wJCdIkg%2FRBRS%2BYMc5FvahIUv1X4kRcuuxhVdaLL4T85QwsN3FploXFMtQtARn2c5bukxNElHpC16XY0HWLpxuCQGVRK1qw832CvAZAXLd5M7yohwlH0uF0qTtJfAvw8U6rRBgnP2UFB2QUEU1SYxd8TjWKL%2FOTZNXLm010sLT6Z1GIdcvbnyTlg5zZIYmlN5G3Aob9ZdavOVX8iudw61jCKjO%2FBBjqkARzerQ6L3Li7ijnKAvv4qU2F46zGCY6UDu2eMw%2BoJX5kW6FwczAD3fm9beP3wdzO0UaV96YuSR82Nsbpxi18ExmmNCvncJmkqz2pADi8CUIGF7IO9JoC7x8cNakBEmj2sVrIvxVPRjVBD1o3jI6xf3NoFVI1LFK7%2Fh2MRNGfoNUtb4J13fcAFLldEFU9F6ZY5u168QWNgEM0cy0gvvKXIDRoaUMu&X-Amz-Signature=f330c46cc1794415516059b58b2eac499bcb92daa55d1716541eaefa6a02f619&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EJYYXOG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDZxCrLnuFLhgoUFoGGa2x0w0uoHRBOgmI8yTpfulfnEAIhAIybkPWsnLvWhiD2IyQf%2B6rN685RyWPpmHBxZqqTHxWJKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKbivAozXrIyUaS3gq3ANqq%2Fp1hEc6yso5GIJN9726wfBapWbj295CinqJXVDbJQq99OBU5AjqFQWk34GDA%2BYg2kvz%2BEhVJ27YZkfTxl%2FvX20XzczIKvtT0aK7PJWz%2FiQ5hAlyws1i9LwfUG6sINfsCvx9Jb77uSnlNGBfGHwMzKA1cdEo7vv8L4GyS%2Fm6v8kTBBD%2BkikELFa4%2Bj%2FbUab9Bw0Dw79VsVSGfUPaY3IOSqzgvv%2F7Y2ygRF4aJG17w054pVVXNOPqcYcXDNqRrJZP3yUbnT6GbiAits5mkX6CfmusVWD9z66U%2Bx1aLB%2FejUPuPnDpTM019L6QYs6%2BVhc7oIb50Z4t4RKsatPxYYfNW2gDkJmh4c5H4w1QAKXv5Bq2iiMrBBzHlBYMAomaVDLSwXYxuF%2B5dDcn8%2FB4%2FfKyRZBURkD9rk0vFpBN6wJCdIkg%2FRBRS%2BYMc5FvahIUv1X4kRcuuxhVdaLL4T85QwsN3FploXFMtQtARn2c5bukxNElHpC16XY0HWLpxuCQGVRK1qw832CvAZAXLd5M7yohwlH0uF0qTtJfAvw8U6rRBgnP2UFB2QUEU1SYxd8TjWKL%2FOTZNXLm010sLT6Z1GIdcvbnyTlg5zZIYmlN5G3Aob9ZdavOVX8iudw61jCKjO%2FBBjqkARzerQ6L3Li7ijnKAvv4qU2F46zGCY6UDu2eMw%2BoJX5kW6FwczAD3fm9beP3wdzO0UaV96YuSR82Nsbpxi18ExmmNCvncJmkqz2pADi8CUIGF7IO9JoC7x8cNakBEmj2sVrIvxVPRjVBD1o3jI6xf3NoFVI1LFK7%2Fh2MRNGfoNUtb4J13fcAFLldEFU9F6ZY5u168QWNgEM0cy0gvvKXIDRoaUMu&X-Amz-Signature=c5c84771b99c829756627a19818df24cc8e3d63cb69a2e681539b3e0dfab379e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

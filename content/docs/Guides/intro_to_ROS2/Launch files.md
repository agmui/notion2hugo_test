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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WHCD5P%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk3rvz936oUH5OtPvD1gaTiYBqZkyeysjxJaLO%2F5dCWQIhAPYvvJ%2FkmsxWqofFG5EcFFjKFV7vExVKhmSLGP23h7WLKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhbN6SFRcM%2BcNL6p4q3APXby7C9XX%2Fp0ScEUXDmYOr8MIzXhCBEjGmr1uObxjYrrd4J8qcgCLkL0sM3EG00v0M4waB4ES28lLwbN5zZu8pEJXWYyv3smmThQLFP95XLs7IwMGMH9ajvU%2FS3xVU0A%2B5UgV81ztNXKg2z1SL0H2lUugGqHAMH2RyiAFXFUBHD0WSlZ0es%2FS3bRzqiRAhNHPgSR2JMf9o1The1wa6QhQYx%2Bw43KjGl1TmtwbanplqSzUCfARo%2B6YQhsyz3beXDTcGGzwZzUCJ7fHKmoosw0x45oggaZiLEYKDZwZbSt9zNKVCrbCg%2B2vcpwe9W9nLRD7OH7Wm%2Flf7pajCv0BD5970Qzyb1Zb2924XioRuJGrK3hvcLnXs8a2S9Z0F7EUaWk4MDLieE7ZPN78vLMrOgLPVygxTrKOZmvhFKIVXRyR7MDlaLlvKDJ8722YmZ03n340TG%2BbykkLhnxpmZK%2FxHSFCkwEzl9nY%2BmmR8Z6kpMkEbihnrniDV%2BGQrSqQmmFg0BLGZnrdw3b%2By5ceiWh7nLcL7OT7MR%2FinUS2qrbyy23%2F0DFLxqkjyYyJTzDxZyQK0Pi%2FdiaUL50zagCVCPwztViBq4hJRVHl%2F6uYk7FDRNIeE0%2FyCLXhHAFcb42kgDD1ju%2B8BjqkAbnxkiLHEW39QAX%2BZr9lHn4qeW4qbaLd5m%2Fb%2BacPCwaRwgyzkFto2bIoQMonFbzrx6CSpQmL3ZiGWlt2UJFauEXUAFrmY%2F2TosHxl55LTSyLbtbA45hzG%2Bou7JiizRsVNzgi8d216dg%2Bv3%2B6OtM66oExdU5%2FAPmUyd7Zd2oBT0wvxEJ%2B9NuPqsEneQPMOrJv7TRV3beDQEslVu4edn5%2FrzThmLhK&X-Amz-Signature=7192f91ff4725161baf312649893de972a3e571db46ff3ec49c238f247532855&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WHCD5P%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk3rvz936oUH5OtPvD1gaTiYBqZkyeysjxJaLO%2F5dCWQIhAPYvvJ%2FkmsxWqofFG5EcFFjKFV7vExVKhmSLGP23h7WLKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhbN6SFRcM%2BcNL6p4q3APXby7C9XX%2Fp0ScEUXDmYOr8MIzXhCBEjGmr1uObxjYrrd4J8qcgCLkL0sM3EG00v0M4waB4ES28lLwbN5zZu8pEJXWYyv3smmThQLFP95XLs7IwMGMH9ajvU%2FS3xVU0A%2B5UgV81ztNXKg2z1SL0H2lUugGqHAMH2RyiAFXFUBHD0WSlZ0es%2FS3bRzqiRAhNHPgSR2JMf9o1The1wa6QhQYx%2Bw43KjGl1TmtwbanplqSzUCfARo%2B6YQhsyz3beXDTcGGzwZzUCJ7fHKmoosw0x45oggaZiLEYKDZwZbSt9zNKVCrbCg%2B2vcpwe9W9nLRD7OH7Wm%2Flf7pajCv0BD5970Qzyb1Zb2924XioRuJGrK3hvcLnXs8a2S9Z0F7EUaWk4MDLieE7ZPN78vLMrOgLPVygxTrKOZmvhFKIVXRyR7MDlaLlvKDJ8722YmZ03n340TG%2BbykkLhnxpmZK%2FxHSFCkwEzl9nY%2BmmR8Z6kpMkEbihnrniDV%2BGQrSqQmmFg0BLGZnrdw3b%2By5ceiWh7nLcL7OT7MR%2FinUS2qrbyy23%2F0DFLxqkjyYyJTzDxZyQK0Pi%2FdiaUL50zagCVCPwztViBq4hJRVHl%2F6uYk7FDRNIeE0%2FyCLXhHAFcb42kgDD1ju%2B8BjqkAbnxkiLHEW39QAX%2BZr9lHn4qeW4qbaLd5m%2Fb%2BacPCwaRwgyzkFto2bIoQMonFbzrx6CSpQmL3ZiGWlt2UJFauEXUAFrmY%2F2TosHxl55LTSyLbtbA45hzG%2Bou7JiizRsVNzgi8d216dg%2Bv3%2B6OtM66oExdU5%2FAPmUyd7Zd2oBT0wvxEJ%2B9NuPqsEneQPMOrJv7TRV3beDQEslVu4edn5%2FrzThmLhK&X-Amz-Signature=c4b57fa1f98e6397798cff33f961d4d0e8ecdc172427240973199c189c2df242&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6WHCD5P%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk3rvz936oUH5OtPvD1gaTiYBqZkyeysjxJaLO%2F5dCWQIhAPYvvJ%2FkmsxWqofFG5EcFFjKFV7vExVKhmSLGP23h7WLKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxhbN6SFRcM%2BcNL6p4q3APXby7C9XX%2Fp0ScEUXDmYOr8MIzXhCBEjGmr1uObxjYrrd4J8qcgCLkL0sM3EG00v0M4waB4ES28lLwbN5zZu8pEJXWYyv3smmThQLFP95XLs7IwMGMH9ajvU%2FS3xVU0A%2B5UgV81ztNXKg2z1SL0H2lUugGqHAMH2RyiAFXFUBHD0WSlZ0es%2FS3bRzqiRAhNHPgSR2JMf9o1The1wa6QhQYx%2Bw43KjGl1TmtwbanplqSzUCfARo%2B6YQhsyz3beXDTcGGzwZzUCJ7fHKmoosw0x45oggaZiLEYKDZwZbSt9zNKVCrbCg%2B2vcpwe9W9nLRD7OH7Wm%2Flf7pajCv0BD5970Qzyb1Zb2924XioRuJGrK3hvcLnXs8a2S9Z0F7EUaWk4MDLieE7ZPN78vLMrOgLPVygxTrKOZmvhFKIVXRyR7MDlaLlvKDJ8722YmZ03n340TG%2BbykkLhnxpmZK%2FxHSFCkwEzl9nY%2BmmR8Z6kpMkEbihnrniDV%2BGQrSqQmmFg0BLGZnrdw3b%2By5ceiWh7nLcL7OT7MR%2FinUS2qrbyy23%2F0DFLxqkjyYyJTzDxZyQK0Pi%2FdiaUL50zagCVCPwztViBq4hJRVHl%2F6uYk7FDRNIeE0%2FyCLXhHAFcb42kgDD1ju%2B8BjqkAbnxkiLHEW39QAX%2BZr9lHn4qeW4qbaLd5m%2Fb%2BacPCwaRwgyzkFto2bIoQMonFbzrx6CSpQmL3ZiGWlt2UJFauEXUAFrmY%2F2TosHxl55LTSyLbtbA45hzG%2Bou7JiizRsVNzgi8d216dg%2Bv3%2B6OtM66oExdU5%2FAPmUyd7Zd2oBT0wvxEJ%2B9NuPqsEneQPMOrJv7TRV3beDQEslVu4edn5%2FrzThmLhK&X-Amz-Signature=b7f7dabeaf45582ce0432ef77f164c7c2995f09c1b71dc5ebdbe57b5d0826dad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

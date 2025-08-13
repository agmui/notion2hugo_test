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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVVIEYU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3otb3ZI383ovETHp5Dq1tK9j3gRJwLxkkQ0UNFGM08AiBOCTrPrfF8IAsLTXUH8i0ezV07Hlb3miT9DnxWGQ6axSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXRZif5WbLYQXU%2FBFKtwDwgqJNH40V3IkpYlV4yj6P8ODRXh9Y23QX%2FjU%2FEXHFQFMxI1n9Hdc1r8aj3CEkS5Gytmr6Ljpaw2CfkqJIXCZfHRPNR9%2B8FSoX1IgM4hiEYAFbezQhoLwQpnMiiMvsX4GGRoI1UDFzURJCNvt3C1bqekrAMBnHXMHb69QEWv1T8%2FVX%2FXe%2BPI6auxs8MPaXK%2B%2F%2FRy99lz5y1qWy3070m3FTnl5ZBSGFg2FHzo9S1hvxrXp41UDc79NrP3A%2F%2Fk5hmb%2BXp9v%2FYmwbvUGDZBrV0RSC%2FpwPVZHriDEVaWoMJ%2FEGUKLhZ%2FnWAms%2FmcIevDNdz5Z4eLEHvvieT8ncdSGo87izwrbzOBTPZD7csbIsWpTdvMi5tCKk%2Bt95PXoC6M9lJ5N5oPZmuRz6Hb%2BwpdFRB3EIPvuOKwWSoV1sUCtgInb8y8tN7zUZbH4tNxwqUQP%2Bw4FEwZ%2Ba3XqeaW2x5s84NaAUofXGfai6KyLRdbmeWipVUeaXTm3z%2FZ41UKF2w6%2BXX3ufXI3l4BVx%2FvylSbMNtNgV4DbS9plY%2BKpkm1g0tobsOhWSUe2TC16NqjPCMN0Q6qtS%2BV5qNoR1sGkWd%2FnJmdmiG4DR%2B2vKHIqJGm3d7U2n2VF3sOR7ugS7er8lRww45%2FzxAY6pgFmW%2FXuoS4bSVwiIObtY193tQ9MT5qGvXL%2BiSUZzZKv5yKSJaWR34ulfMD0gbqeglbfBkMu8gq5U10I%2FpKSEEcXuqhqELFOnOajv3qrzXoc8I2HlHMf3A48TS1pE9S3XX26OQ6kWtW0ZRtZ8BvSy7TV4DOTVEGCiQswyc3m6JAZ7dMaBsxG7Aq2RoxXdSUxj%2BxUBbcjIzLXqT%2B7K5XbBo8SkaiDVXkf&X-Amz-Signature=272f2decad762bcf72d2d36209182c50ccfb6883df067413adde2c3f77e2e2c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVVIEYU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3otb3ZI383ovETHp5Dq1tK9j3gRJwLxkkQ0UNFGM08AiBOCTrPrfF8IAsLTXUH8i0ezV07Hlb3miT9DnxWGQ6axSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXRZif5WbLYQXU%2FBFKtwDwgqJNH40V3IkpYlV4yj6P8ODRXh9Y23QX%2FjU%2FEXHFQFMxI1n9Hdc1r8aj3CEkS5Gytmr6Ljpaw2CfkqJIXCZfHRPNR9%2B8FSoX1IgM4hiEYAFbezQhoLwQpnMiiMvsX4GGRoI1UDFzURJCNvt3C1bqekrAMBnHXMHb69QEWv1T8%2FVX%2FXe%2BPI6auxs8MPaXK%2B%2F%2FRy99lz5y1qWy3070m3FTnl5ZBSGFg2FHzo9S1hvxrXp41UDc79NrP3A%2F%2Fk5hmb%2BXp9v%2FYmwbvUGDZBrV0RSC%2FpwPVZHriDEVaWoMJ%2FEGUKLhZ%2FnWAms%2FmcIevDNdz5Z4eLEHvvieT8ncdSGo87izwrbzOBTPZD7csbIsWpTdvMi5tCKk%2Bt95PXoC6M9lJ5N5oPZmuRz6Hb%2BwpdFRB3EIPvuOKwWSoV1sUCtgInb8y8tN7zUZbH4tNxwqUQP%2Bw4FEwZ%2Ba3XqeaW2x5s84NaAUofXGfai6KyLRdbmeWipVUeaXTm3z%2FZ41UKF2w6%2BXX3ufXI3l4BVx%2FvylSbMNtNgV4DbS9plY%2BKpkm1g0tobsOhWSUe2TC16NqjPCMN0Q6qtS%2BV5qNoR1sGkWd%2FnJmdmiG4DR%2B2vKHIqJGm3d7U2n2VF3sOR7ugS7er8lRww45%2FzxAY6pgFmW%2FXuoS4bSVwiIObtY193tQ9MT5qGvXL%2BiSUZzZKv5yKSJaWR34ulfMD0gbqeglbfBkMu8gq5U10I%2FpKSEEcXuqhqELFOnOajv3qrzXoc8I2HlHMf3A48TS1pE9S3XX26OQ6kWtW0ZRtZ8BvSy7TV4DOTVEGCiQswyc3m6JAZ7dMaBsxG7Aq2RoxXdSUxj%2BxUBbcjIzLXqT%2B7K5XbBo8SkaiDVXkf&X-Amz-Signature=9013b1c22b2622fd992bf08029a0a65dace6ff2f407812a9dd4c33ca9d1b2fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVVIEYU%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3otb3ZI383ovETHp5Dq1tK9j3gRJwLxkkQ0UNFGM08AiBOCTrPrfF8IAsLTXUH8i0ezV07Hlb3miT9DnxWGQ6axSr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMXRZif5WbLYQXU%2FBFKtwDwgqJNH40V3IkpYlV4yj6P8ODRXh9Y23QX%2FjU%2FEXHFQFMxI1n9Hdc1r8aj3CEkS5Gytmr6Ljpaw2CfkqJIXCZfHRPNR9%2B8FSoX1IgM4hiEYAFbezQhoLwQpnMiiMvsX4GGRoI1UDFzURJCNvt3C1bqekrAMBnHXMHb69QEWv1T8%2FVX%2FXe%2BPI6auxs8MPaXK%2B%2F%2FRy99lz5y1qWy3070m3FTnl5ZBSGFg2FHzo9S1hvxrXp41UDc79NrP3A%2F%2Fk5hmb%2BXp9v%2FYmwbvUGDZBrV0RSC%2FpwPVZHriDEVaWoMJ%2FEGUKLhZ%2FnWAms%2FmcIevDNdz5Z4eLEHvvieT8ncdSGo87izwrbzOBTPZD7csbIsWpTdvMi5tCKk%2Bt95PXoC6M9lJ5N5oPZmuRz6Hb%2BwpdFRB3EIPvuOKwWSoV1sUCtgInb8y8tN7zUZbH4tNxwqUQP%2Bw4FEwZ%2Ba3XqeaW2x5s84NaAUofXGfai6KyLRdbmeWipVUeaXTm3z%2FZ41UKF2w6%2BXX3ufXI3l4BVx%2FvylSbMNtNgV4DbS9plY%2BKpkm1g0tobsOhWSUe2TC16NqjPCMN0Q6qtS%2BV5qNoR1sGkWd%2FnJmdmiG4DR%2B2vKHIqJGm3d7U2n2VF3sOR7ugS7er8lRww45%2FzxAY6pgFmW%2FXuoS4bSVwiIObtY193tQ9MT5qGvXL%2BiSUZzZKv5yKSJaWR34ulfMD0gbqeglbfBkMu8gq5U10I%2FpKSEEcXuqhqELFOnOajv3qrzXoc8I2HlHMf3A48TS1pE9S3XX26OQ6kWtW0ZRtZ8BvSy7TV4DOTVEGCiQswyc3m6JAZ7dMaBsxG7Aq2RoxXdSUxj%2BxUBbcjIzLXqT%2B7K5XbBo8SkaiDVXkf&X-Amz-Signature=319ddf15d5c1848be14930372f1981fbcf32c971945eedbf69ea0c18778262d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

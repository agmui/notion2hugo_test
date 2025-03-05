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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC3DZG3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6G6%2F%2B1KkLdoKL7pFKWsOYX6PJ66MKE4iy%2F60soE%2BtyAIgR5fhKyxZGli9XWVcfy6CI7hhC1b2D6W4TVXwO1vgGDIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDMy4lYCSqy%2BeS9VgPircA8C5MIuZTC42pGOUWnT9Uvuu9yitxRP0X31L4RmbupUP9ou4KC1LO1F1YisFSeox6lAj3OyMlcv%2Bwu8R9LkgjZhYxJQc7K3HlYhiTfWHW3dvpuKQra62RQe7wfWPEfpNAEXNvsgYgjh81oT65xkJRZT1TxiU77N0nZHogrgE2kKrbBzptT%2BVgLKOBsRwBie43Huz8RXBb8V3VNTvpm2AegclAzD3yWqklAmh5VHc9TXQBeD%2BuYr9Fe48TZJL1ZuwdlA%2FbV0oxNOY6sjwZvzYeCkAUibZ%2FmUmwIImT708lydCsZvShucjh2vWOyMSZvTWRUnfMmzddz798MwN50w%2FBELPP%2FLbXqV4Q2%2FZiTUBHH3jvuu2CSAHdBbQtlcdDLnpNcsuY%2BCuzayEA2WfINKIBihLSKToSD84EMjE1njxVCo15TmUw%2BgrRZ8E7%2BzrHQ%2FqFWXkQstGsVGWL5zxU0YHLXS71bMPeGm9OY%2FgzwjJnYIlWA4hTfsgYa94NOg8Q8fmveIT7uIQH9lD8yzqnATmhOm68cY0CRLOpGEN%2BriYVHN9yI8m8K0o6G1MEWwGZiRHX4UxeiihdlDXS23DiLd1DUfsBFpw3yYZcN3Zi6fyTINED7o8UzMx11uIk5xiMPCDor4GOqUBSmMbQ8elPsbUynhksEEcauboHmexfXeTSlJI1%2BtTrHjh%2Bx%2F6El11KC2jfeULNCUn819soriHn6U6HOPO3gslTUtetzkSUG2o43lQS1O%2FPj5TJTdIJT5O43oiHhmk8w4g8FErX7TIk7QwsebqMNnK3xdAbdb%2B%2BGTQvlQb%2BaKgA%2FwMCCfLKkwVnP1UcetR2zS6PEulmClV40XqQXwH8FQqRMmnA3XJ&X-Amz-Signature=5ab9d98062b8b3f783f088194f582559626a90b283335d648280fddb10387772&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC3DZG3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6G6%2F%2B1KkLdoKL7pFKWsOYX6PJ66MKE4iy%2F60soE%2BtyAIgR5fhKyxZGli9XWVcfy6CI7hhC1b2D6W4TVXwO1vgGDIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDMy4lYCSqy%2BeS9VgPircA8C5MIuZTC42pGOUWnT9Uvuu9yitxRP0X31L4RmbupUP9ou4KC1LO1F1YisFSeox6lAj3OyMlcv%2Bwu8R9LkgjZhYxJQc7K3HlYhiTfWHW3dvpuKQra62RQe7wfWPEfpNAEXNvsgYgjh81oT65xkJRZT1TxiU77N0nZHogrgE2kKrbBzptT%2BVgLKOBsRwBie43Huz8RXBb8V3VNTvpm2AegclAzD3yWqklAmh5VHc9TXQBeD%2BuYr9Fe48TZJL1ZuwdlA%2FbV0oxNOY6sjwZvzYeCkAUibZ%2FmUmwIImT708lydCsZvShucjh2vWOyMSZvTWRUnfMmzddz798MwN50w%2FBELPP%2FLbXqV4Q2%2FZiTUBHH3jvuu2CSAHdBbQtlcdDLnpNcsuY%2BCuzayEA2WfINKIBihLSKToSD84EMjE1njxVCo15TmUw%2BgrRZ8E7%2BzrHQ%2FqFWXkQstGsVGWL5zxU0YHLXS71bMPeGm9OY%2FgzwjJnYIlWA4hTfsgYa94NOg8Q8fmveIT7uIQH9lD8yzqnATmhOm68cY0CRLOpGEN%2BriYVHN9yI8m8K0o6G1MEWwGZiRHX4UxeiihdlDXS23DiLd1DUfsBFpw3yYZcN3Zi6fyTINED7o8UzMx11uIk5xiMPCDor4GOqUBSmMbQ8elPsbUynhksEEcauboHmexfXeTSlJI1%2BtTrHjh%2Bx%2F6El11KC2jfeULNCUn819soriHn6U6HOPO3gslTUtetzkSUG2o43lQS1O%2FPj5TJTdIJT5O43oiHhmk8w4g8FErX7TIk7QwsebqMNnK3xdAbdb%2B%2BGTQvlQb%2BaKgA%2FwMCCfLKkwVnP1UcetR2zS6PEulmClV40XqQXwH8FQqRMmnA3XJ&X-Amz-Signature=703c74cf2fe3b36ed61d7f99e42d1ae733fa34b99d3aa3d4fcfff8890c562db8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XC3DZG3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6G6%2F%2B1KkLdoKL7pFKWsOYX6PJ66MKE4iy%2F60soE%2BtyAIgR5fhKyxZGli9XWVcfy6CI7hhC1b2D6W4TVXwO1vgGDIq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDMy4lYCSqy%2BeS9VgPircA8C5MIuZTC42pGOUWnT9Uvuu9yitxRP0X31L4RmbupUP9ou4KC1LO1F1YisFSeox6lAj3OyMlcv%2Bwu8R9LkgjZhYxJQc7K3HlYhiTfWHW3dvpuKQra62RQe7wfWPEfpNAEXNvsgYgjh81oT65xkJRZT1TxiU77N0nZHogrgE2kKrbBzptT%2BVgLKOBsRwBie43Huz8RXBb8V3VNTvpm2AegclAzD3yWqklAmh5VHc9TXQBeD%2BuYr9Fe48TZJL1ZuwdlA%2FbV0oxNOY6sjwZvzYeCkAUibZ%2FmUmwIImT708lydCsZvShucjh2vWOyMSZvTWRUnfMmzddz798MwN50w%2FBELPP%2FLbXqV4Q2%2FZiTUBHH3jvuu2CSAHdBbQtlcdDLnpNcsuY%2BCuzayEA2WfINKIBihLSKToSD84EMjE1njxVCo15TmUw%2BgrRZ8E7%2BzrHQ%2FqFWXkQstGsVGWL5zxU0YHLXS71bMPeGm9OY%2FgzwjJnYIlWA4hTfsgYa94NOg8Q8fmveIT7uIQH9lD8yzqnATmhOm68cY0CRLOpGEN%2BriYVHN9yI8m8K0o6G1MEWwGZiRHX4UxeiihdlDXS23DiLd1DUfsBFpw3yYZcN3Zi6fyTINED7o8UzMx11uIk5xiMPCDor4GOqUBSmMbQ8elPsbUynhksEEcauboHmexfXeTSlJI1%2BtTrHjh%2Bx%2F6El11KC2jfeULNCUn819soriHn6U6HOPO3gslTUtetzkSUG2o43lQS1O%2FPj5TJTdIJT5O43oiHhmk8w4g8FErX7TIk7QwsebqMNnK3xdAbdb%2B%2BGTQvlQb%2BaKgA%2FwMCCfLKkwVnP1UcetR2zS6PEulmClV40XqQXwH8FQqRMmnA3XJ&X-Amz-Signature=848f31446ed36c06f56fd82a96f4586a698d40c0258d4291de61e4178fb878db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

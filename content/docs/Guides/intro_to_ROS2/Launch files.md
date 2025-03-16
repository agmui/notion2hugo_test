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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUNAASF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnDJLBTPeoeb7a08bGHRexSX2hxCZ1%2BMLIJzuhfptmrAiEAiPxmD9TX5Zt3XTeNg00DoHR8AaLXhgFclT6WVMzkfrMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDKW%2FZ%2FfHNXKmDTUMSrcA7qpH%2Fin8YfWjX%2F%2BalpYFb1atqlJVmlwXZomp2GiwzHJg7To5uQKsvsANoNcukagCO7zu8LFm54wUwB%2B%2BlQSnVL9zvUF5OxlOn8TGD5ieZw0BtSeY9A3iPLiJm64P873A9sL93UThzOI676hqJnhtOblVxATVpqJcsUN03XAVqv76JQvr3g1vUIOClucznRiHIH3j7%2BykOi%2FqHI380Q7mI9Q1NTcP4kMO2QzqIGI6uikP3D6S3zP4hz4KTjHI3lCDPuYiuJaid2yXAhbw2CuYfFaUvJXn%2BMPkcA8Nkh3nUxiZW40Hoa3%2BcNEcdUgoAAinDf35ch3cBAR0KPBOQiRUCNzxVTEARTponINAzlHdr78DIt8o3ucKwdsLyp8OjflLkSGRgiLJ0hcnyDBDv9DJTRhE%2FlgV1ha64yn0UvIzaGegPG9XE4bujAg5MuxQ2gNZUrgTWZw55YwghpyRIj6bMVRCVggW5JkNeXWKT5N1iA1T3s2kfvXAoe%2BwjHu4lK%2BWBG9nGYoS%2FcW6BjQhyofumcyqNo0BfJ2OUvFJw2FT5XVcoSJvz3%2FKKBKGW5WlPINnvuns%2FBpbeK1dVVhi6Qz5FlGqTEercp102bA7HcH0LxWol8KfG3yUb9NKi5vMI6C2L4GOqUBTpV5Qv6M%2FTJRTJqsboaqqRf6dzbmeMWFTGyGRwP0xMYqOhoZg10QPpRQcxYF9SuVyeFGMNhGq3WakWEqpIhXD5MfVBkIaB9h8gi7u9j08JIl5FtWwxJ7hMWIhbq2NdKQ0Nv3SbLTgMTwJ4yfCdnUI4%2Bis%2BLA9FYZFRVjAeZDMpmVdn9ZLmMbgfMd4jeLdizmlGWlqCA4B9%2F3g7mIF1hgSncoVr3W&X-Amz-Signature=b9141428b987e3a60bbf12dbe6074c71ea5b42981904574ba0a44e35b327f59e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUNAASF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnDJLBTPeoeb7a08bGHRexSX2hxCZ1%2BMLIJzuhfptmrAiEAiPxmD9TX5Zt3XTeNg00DoHR8AaLXhgFclT6WVMzkfrMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDKW%2FZ%2FfHNXKmDTUMSrcA7qpH%2Fin8YfWjX%2F%2BalpYFb1atqlJVmlwXZomp2GiwzHJg7To5uQKsvsANoNcukagCO7zu8LFm54wUwB%2B%2BlQSnVL9zvUF5OxlOn8TGD5ieZw0BtSeY9A3iPLiJm64P873A9sL93UThzOI676hqJnhtOblVxATVpqJcsUN03XAVqv76JQvr3g1vUIOClucznRiHIH3j7%2BykOi%2FqHI380Q7mI9Q1NTcP4kMO2QzqIGI6uikP3D6S3zP4hz4KTjHI3lCDPuYiuJaid2yXAhbw2CuYfFaUvJXn%2BMPkcA8Nkh3nUxiZW40Hoa3%2BcNEcdUgoAAinDf35ch3cBAR0KPBOQiRUCNzxVTEARTponINAzlHdr78DIt8o3ucKwdsLyp8OjflLkSGRgiLJ0hcnyDBDv9DJTRhE%2FlgV1ha64yn0UvIzaGegPG9XE4bujAg5MuxQ2gNZUrgTWZw55YwghpyRIj6bMVRCVggW5JkNeXWKT5N1iA1T3s2kfvXAoe%2BwjHu4lK%2BWBG9nGYoS%2FcW6BjQhyofumcyqNo0BfJ2OUvFJw2FT5XVcoSJvz3%2FKKBKGW5WlPINnvuns%2FBpbeK1dVVhi6Qz5FlGqTEercp102bA7HcH0LxWol8KfG3yUb9NKi5vMI6C2L4GOqUBTpV5Qv6M%2FTJRTJqsboaqqRf6dzbmeMWFTGyGRwP0xMYqOhoZg10QPpRQcxYF9SuVyeFGMNhGq3WakWEqpIhXD5MfVBkIaB9h8gi7u9j08JIl5FtWwxJ7hMWIhbq2NdKQ0Nv3SbLTgMTwJ4yfCdnUI4%2Bis%2BLA9FYZFRVjAeZDMpmVdn9ZLmMbgfMd4jeLdizmlGWlqCA4B9%2F3g7mIF1hgSncoVr3W&X-Amz-Signature=4b827126c772d07a7092a102f1ce88fe2814ba811fc5eb0bdcbf605f101df784&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKUNAASF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T022056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnDJLBTPeoeb7a08bGHRexSX2hxCZ1%2BMLIJzuhfptmrAiEAiPxmD9TX5Zt3XTeNg00DoHR8AaLXhgFclT6WVMzkfrMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDKW%2FZ%2FfHNXKmDTUMSrcA7qpH%2Fin8YfWjX%2F%2BalpYFb1atqlJVmlwXZomp2GiwzHJg7To5uQKsvsANoNcukagCO7zu8LFm54wUwB%2B%2BlQSnVL9zvUF5OxlOn8TGD5ieZw0BtSeY9A3iPLiJm64P873A9sL93UThzOI676hqJnhtOblVxATVpqJcsUN03XAVqv76JQvr3g1vUIOClucznRiHIH3j7%2BykOi%2FqHI380Q7mI9Q1NTcP4kMO2QzqIGI6uikP3D6S3zP4hz4KTjHI3lCDPuYiuJaid2yXAhbw2CuYfFaUvJXn%2BMPkcA8Nkh3nUxiZW40Hoa3%2BcNEcdUgoAAinDf35ch3cBAR0KPBOQiRUCNzxVTEARTponINAzlHdr78DIt8o3ucKwdsLyp8OjflLkSGRgiLJ0hcnyDBDv9DJTRhE%2FlgV1ha64yn0UvIzaGegPG9XE4bujAg5MuxQ2gNZUrgTWZw55YwghpyRIj6bMVRCVggW5JkNeXWKT5N1iA1T3s2kfvXAoe%2BwjHu4lK%2BWBG9nGYoS%2FcW6BjQhyofumcyqNo0BfJ2OUvFJw2FT5XVcoSJvz3%2FKKBKGW5WlPINnvuns%2FBpbeK1dVVhi6Qz5FlGqTEercp102bA7HcH0LxWol8KfG3yUb9NKi5vMI6C2L4GOqUBTpV5Qv6M%2FTJRTJqsboaqqRf6dzbmeMWFTGyGRwP0xMYqOhoZg10QPpRQcxYF9SuVyeFGMNhGq3WakWEqpIhXD5MfVBkIaB9h8gi7u9j08JIl5FtWwxJ7hMWIhbq2NdKQ0Nv3SbLTgMTwJ4yfCdnUI4%2Bis%2BLA9FYZFRVjAeZDMpmVdn9ZLmMbgfMd4jeLdizmlGWlqCA4B9%2F3g7mIF1hgSncoVr3W&X-Amz-Signature=9f141681eff283c3d413ce131474d88102469acca2990afe051e858ed071b07d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSPRJRRU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDv139DJ5vD1Wo1F6Avim%2F7Yr%2Bcd%2Bmn%2BxRTbMSDZbU0ggIhAIles0dEDpb2XChs2StiWeOD%2BB7oO9XMKzL%2BOaBW%2B3c%2BKv8DCE4QABoMNjM3NDIzMTgzODA1Igx0pDEoUK7p%2BUJxsSIq3AM8Ngsa2L%2FayXuAvLF2Q1XZ9aKytWMATuIOzAPJYzdPodUVKQLqq5uCtlCdKhWsI9G4H6ZpqgR8eDIBw%2F8OoXznNQ6uf8x4%2BVoTV82MmgHzrVcuI9ONhLPOZbcg8Ft9keAJo%2FmZcNvLDKQXh%2FEqmkHnX9s%2FZ5CcWKB8AbSrxr10G%2FVEA6QOb3ap%2FjV%2FuJ2Gc8dC%2BYs0NtVcGK8kn1oAIxQllXD%2B8r5I7mxervUhO6edapvm8jtT2w0ex0GNwxxgFyJ2suOYndSpdbrUPQ2ed2GmhhZNznaUEPwz7sypQpxvylhVmBaedi0HpNZkYTxj8U2jisGWnSMX4jTb23II0bIIJA294ciquaYsUvOw%2FbNam%2B0%2B5NS5GDVX%2FYY6JTp9dv%2FkJ2IYYqZq%2FfsCCYWSv4fD6kU5wW%2BWrrWxKP%2Bdk8BBoQHZCStfMOmoDQBI3yCvfMlSRE7miPTVInz86TkuhVDI85YYPwQcFYLb7CYtM8Ax9LqQKJJd0YPZfdVSPIXhzQ6VRrratNt0ouf7I6fVqnP3kFj4mLTerysfvDprGhdMfquY6Gc0AR1brO275jwWC4MGt1LkryC5wkf2xwnnNkDt0Z5RTo6R1rB%2F5udCInGUKQH12eD%2F3zWaGSVCPjCy0Y%2FEBjqkAYaCSJ1sEJFc3kKeESU0ei0PrJ0PEu58Qvele7r9ZldUAu4LpoKTLcnz%2BlOPp%2FO1xGT7%2FrA03%2FY1KVMI6QsZj0Qlu4vIuffkuPEM261KBW%2FI3Bec1rWdMMRP3sySooUVDEn%2FtZMtWMxAqeP%2FDYc1S9rRpSF2GkOkQZuJ12cLfLhLWvmD9nDf7efODDi9UARsMx4exI3ZgNXzieGzKFPflsTUgknz&X-Amz-Signature=0eb8e9ef8b9481ca42bbffa56bed1b25d4c5299ff5590623a1f0bc253df1c5c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSPRJRRU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDv139DJ5vD1Wo1F6Avim%2F7Yr%2Bcd%2Bmn%2BxRTbMSDZbU0ggIhAIles0dEDpb2XChs2StiWeOD%2BB7oO9XMKzL%2BOaBW%2B3c%2BKv8DCE4QABoMNjM3NDIzMTgzODA1Igx0pDEoUK7p%2BUJxsSIq3AM8Ngsa2L%2FayXuAvLF2Q1XZ9aKytWMATuIOzAPJYzdPodUVKQLqq5uCtlCdKhWsI9G4H6ZpqgR8eDIBw%2F8OoXznNQ6uf8x4%2BVoTV82MmgHzrVcuI9ONhLPOZbcg8Ft9keAJo%2FmZcNvLDKQXh%2FEqmkHnX9s%2FZ5CcWKB8AbSrxr10G%2FVEA6QOb3ap%2FjV%2FuJ2Gc8dC%2BYs0NtVcGK8kn1oAIxQllXD%2B8r5I7mxervUhO6edapvm8jtT2w0ex0GNwxxgFyJ2suOYndSpdbrUPQ2ed2GmhhZNznaUEPwz7sypQpxvylhVmBaedi0HpNZkYTxj8U2jisGWnSMX4jTb23II0bIIJA294ciquaYsUvOw%2FbNam%2B0%2B5NS5GDVX%2FYY6JTp9dv%2FkJ2IYYqZq%2FfsCCYWSv4fD6kU5wW%2BWrrWxKP%2Bdk8BBoQHZCStfMOmoDQBI3yCvfMlSRE7miPTVInz86TkuhVDI85YYPwQcFYLb7CYtM8Ax9LqQKJJd0YPZfdVSPIXhzQ6VRrratNt0ouf7I6fVqnP3kFj4mLTerysfvDprGhdMfquY6Gc0AR1brO275jwWC4MGt1LkryC5wkf2xwnnNkDt0Z5RTo6R1rB%2F5udCInGUKQH12eD%2F3zWaGSVCPjCy0Y%2FEBjqkAYaCSJ1sEJFc3kKeESU0ei0PrJ0PEu58Qvele7r9ZldUAu4LpoKTLcnz%2BlOPp%2FO1xGT7%2FrA03%2FY1KVMI6QsZj0Qlu4vIuffkuPEM261KBW%2FI3Bec1rWdMMRP3sySooUVDEn%2FtZMtWMxAqeP%2FDYc1S9rRpSF2GkOkQZuJ12cLfLhLWvmD9nDf7efODDi9UARsMx4exI3ZgNXzieGzKFPflsTUgknz&X-Amz-Signature=2b295d869478ecaa322f03b862cfecd16e58d7af2c0d16cc181b66754277f652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSPRJRRU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDv139DJ5vD1Wo1F6Avim%2F7Yr%2Bcd%2Bmn%2BxRTbMSDZbU0ggIhAIles0dEDpb2XChs2StiWeOD%2BB7oO9XMKzL%2BOaBW%2B3c%2BKv8DCE4QABoMNjM3NDIzMTgzODA1Igx0pDEoUK7p%2BUJxsSIq3AM8Ngsa2L%2FayXuAvLF2Q1XZ9aKytWMATuIOzAPJYzdPodUVKQLqq5uCtlCdKhWsI9G4H6ZpqgR8eDIBw%2F8OoXznNQ6uf8x4%2BVoTV82MmgHzrVcuI9ONhLPOZbcg8Ft9keAJo%2FmZcNvLDKQXh%2FEqmkHnX9s%2FZ5CcWKB8AbSrxr10G%2FVEA6QOb3ap%2FjV%2FuJ2Gc8dC%2BYs0NtVcGK8kn1oAIxQllXD%2B8r5I7mxervUhO6edapvm8jtT2w0ex0GNwxxgFyJ2suOYndSpdbrUPQ2ed2GmhhZNznaUEPwz7sypQpxvylhVmBaedi0HpNZkYTxj8U2jisGWnSMX4jTb23II0bIIJA294ciquaYsUvOw%2FbNam%2B0%2B5NS5GDVX%2FYY6JTp9dv%2FkJ2IYYqZq%2FfsCCYWSv4fD6kU5wW%2BWrrWxKP%2Bdk8BBoQHZCStfMOmoDQBI3yCvfMlSRE7miPTVInz86TkuhVDI85YYPwQcFYLb7CYtM8Ax9LqQKJJd0YPZfdVSPIXhzQ6VRrratNt0ouf7I6fVqnP3kFj4mLTerysfvDprGhdMfquY6Gc0AR1brO275jwWC4MGt1LkryC5wkf2xwnnNkDt0Z5RTo6R1rB%2F5udCInGUKQH12eD%2F3zWaGSVCPjCy0Y%2FEBjqkAYaCSJ1sEJFc3kKeESU0ei0PrJ0PEu58Qvele7r9ZldUAu4LpoKTLcnz%2BlOPp%2FO1xGT7%2FrA03%2FY1KVMI6QsZj0Qlu4vIuffkuPEM261KBW%2FI3Bec1rWdMMRP3sySooUVDEn%2FtZMtWMxAqeP%2FDYc1S9rRpSF2GkOkQZuJ12cLfLhLWvmD9nDf7efODDi9UARsMx4exI3ZgNXzieGzKFPflsTUgknz&X-Amz-Signature=ce3caca46b724a20ff49131de1523168e50377833bee2f89ae23b8658364b42c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

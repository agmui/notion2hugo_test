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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQTH3DGL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqfcDqY9PbqZvsGBKUd6ubWnIfiTDswpie2x%2FCKRGwNAiEAjQIdeJ9rvRlIlsOgeDjs89oaliOltH%2F37XBDoeRJfhMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPJ0UeTNf0h4V3G2yrcA6EcmSPemy0knEBvCb2SK99Rx2kp0uBqfpA46v1c6tlOhFvnRY2a8f777uttY5pvMBdEFgl8mhanDGcMAf1E0IYnwwJVkkGKrLzIhNNrB1LP8efHe9ozlBarNyjVlQ85fytNWf3xnQ%2FEJgzf1TQM4m%2FNTdzf9o7OubT5AKbLAWFvW4znTP3S3Il%2B8B9pdLCV4vjeVerWQS2FaQOsOhhw2xwcv9ioXbAR5RTYTo1BSKqo4rSMhkCiY5%2BkFJuuKNbObjt6KT8CEJa1HZKuCEgn3AA%2FrsQCOYTH6Ll%2FAf8mteQodfpmufwiOBbNxAwEq3wrNxENa0bRPiXbvLcLE028%2FmjhHBpZBuwlbSZb5Rbm8D7VmH4E%2B0yBu146mZTXV%2FeXWlStzV1gVh8VyHfl1aKVsL5udebkgRukjgLTX2r0ziS4%2BJpF7P0jycAxNI1VnvIFwF2Xgm9xJxGBsIztFrgw4JPXHZVGHu%2FVrNOlvW7DE8neRalv9uqIUuduDtWrkH%2F3cKICB1dbfgLOnE9FNj8KSfxStXn0oiVJnZfxZDo7vQv9khFp3pEARl450X%2BdkR40t8XJ9feTw78kKjatNwh6x2wvMcqioEs8UR5oXlX8D6YjfXZOxxMXAgjArZQ5MIiLk8MGOqUBq%2Bjd4YZftYzCwHC1DUXDRItChoIEdEJGDzYG61qc1jVK1USYGN59UgukCxLKAbIowuE1pc3pHBOUOWWypkk6e71W8HuTo4PB%2FBwf8nesULnrOKY56kTHeZCNwZJF0%2FDtMEpQgFGwpipMCCUSQnotfsv8oNdW%2BxGxImRJw9cPq5WFuLIetR96J6rojhqNpHiUCKSjU0xC%2BQ1Kx0KwUrZHhEVkW9CF&X-Amz-Signature=f63ce9d8bac5b1c56d050aa0356506dca17c102522714612afde11d92d3fc01f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQTH3DGL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqfcDqY9PbqZvsGBKUd6ubWnIfiTDswpie2x%2FCKRGwNAiEAjQIdeJ9rvRlIlsOgeDjs89oaliOltH%2F37XBDoeRJfhMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPJ0UeTNf0h4V3G2yrcA6EcmSPemy0knEBvCb2SK99Rx2kp0uBqfpA46v1c6tlOhFvnRY2a8f777uttY5pvMBdEFgl8mhanDGcMAf1E0IYnwwJVkkGKrLzIhNNrB1LP8efHe9ozlBarNyjVlQ85fytNWf3xnQ%2FEJgzf1TQM4m%2FNTdzf9o7OubT5AKbLAWFvW4znTP3S3Il%2B8B9pdLCV4vjeVerWQS2FaQOsOhhw2xwcv9ioXbAR5RTYTo1BSKqo4rSMhkCiY5%2BkFJuuKNbObjt6KT8CEJa1HZKuCEgn3AA%2FrsQCOYTH6Ll%2FAf8mteQodfpmufwiOBbNxAwEq3wrNxENa0bRPiXbvLcLE028%2FmjhHBpZBuwlbSZb5Rbm8D7VmH4E%2B0yBu146mZTXV%2FeXWlStzV1gVh8VyHfl1aKVsL5udebkgRukjgLTX2r0ziS4%2BJpF7P0jycAxNI1VnvIFwF2Xgm9xJxGBsIztFrgw4JPXHZVGHu%2FVrNOlvW7DE8neRalv9uqIUuduDtWrkH%2F3cKICB1dbfgLOnE9FNj8KSfxStXn0oiVJnZfxZDo7vQv9khFp3pEARl450X%2BdkR40t8XJ9feTw78kKjatNwh6x2wvMcqioEs8UR5oXlX8D6YjfXZOxxMXAgjArZQ5MIiLk8MGOqUBq%2Bjd4YZftYzCwHC1DUXDRItChoIEdEJGDzYG61qc1jVK1USYGN59UgukCxLKAbIowuE1pc3pHBOUOWWypkk6e71W8HuTo4PB%2FBwf8nesULnrOKY56kTHeZCNwZJF0%2FDtMEpQgFGwpipMCCUSQnotfsv8oNdW%2BxGxImRJw9cPq5WFuLIetR96J6rojhqNpHiUCKSjU0xC%2BQ1Kx0KwUrZHhEVkW9CF&X-Amz-Signature=44d11129fa835dc5fb698090435f3ad7318ac9e38be24495a9fb4fe5f9dd0e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQTH3DGL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T061421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFqfcDqY9PbqZvsGBKUd6ubWnIfiTDswpie2x%2FCKRGwNAiEAjQIdeJ9rvRlIlsOgeDjs89oaliOltH%2F37XBDoeRJfhMqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPJ0UeTNf0h4V3G2yrcA6EcmSPemy0knEBvCb2SK99Rx2kp0uBqfpA46v1c6tlOhFvnRY2a8f777uttY5pvMBdEFgl8mhanDGcMAf1E0IYnwwJVkkGKrLzIhNNrB1LP8efHe9ozlBarNyjVlQ85fytNWf3xnQ%2FEJgzf1TQM4m%2FNTdzf9o7OubT5AKbLAWFvW4znTP3S3Il%2B8B9pdLCV4vjeVerWQS2FaQOsOhhw2xwcv9ioXbAR5RTYTo1BSKqo4rSMhkCiY5%2BkFJuuKNbObjt6KT8CEJa1HZKuCEgn3AA%2FrsQCOYTH6Ll%2FAf8mteQodfpmufwiOBbNxAwEq3wrNxENa0bRPiXbvLcLE028%2FmjhHBpZBuwlbSZb5Rbm8D7VmH4E%2B0yBu146mZTXV%2FeXWlStzV1gVh8VyHfl1aKVsL5udebkgRukjgLTX2r0ziS4%2BJpF7P0jycAxNI1VnvIFwF2Xgm9xJxGBsIztFrgw4JPXHZVGHu%2FVrNOlvW7DE8neRalv9uqIUuduDtWrkH%2F3cKICB1dbfgLOnE9FNj8KSfxStXn0oiVJnZfxZDo7vQv9khFp3pEARl450X%2BdkR40t8XJ9feTw78kKjatNwh6x2wvMcqioEs8UR5oXlX8D6YjfXZOxxMXAgjArZQ5MIiLk8MGOqUBq%2Bjd4YZftYzCwHC1DUXDRItChoIEdEJGDzYG61qc1jVK1USYGN59UgukCxLKAbIowuE1pc3pHBOUOWWypkk6e71W8HuTo4PB%2FBwf8nesULnrOKY56kTHeZCNwZJF0%2FDtMEpQgFGwpipMCCUSQnotfsv8oNdW%2BxGxImRJw9cPq5WFuLIetR96J6rojhqNpHiUCKSjU0xC%2BQ1Kx0KwUrZHhEVkW9CF&X-Amz-Signature=bdfec04a2336f67850d655853a13e0bf4b7707eaf007260f33fc99b67f750660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CCBTIJE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnlaqHOgt72yme4Ox6eW%2BaILpqxj2ymW4%2B9b2kBSwtdQIgDXwYfn2GTFNTmFYJSeWi4fEO%2BKW9Y%2F2PuB%2FyVVJp4E4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9cyrAMBGCTieigEircAxJZRhUiKpKHNeRZ92RVL3IT6E5MQotSoSWLCu2aXQnS8exjSICfJS86mqSXCt2tcCtMzdggcB7%2F9G%2BE2CHEsubjgYMS4I6n0ipafmQ5ttox4iqH347hnf8Wg5oTKk%2BUc4idfFKm9U1NuoIpJYJNnaiJWuh6exIpbrYVeKuGPxfIS3fkr6NNlpwWUar82ZQs4E1ywq7chTA3oj48ihduWNaumZjJtwrCOXqlzZ7PARYMVDL6CyTcz4SmmUe77A1QSyWjj6Pzua2%2FH0%2FNUYGJOIEQKySEBVD5sV3pVTjfokUIZeh2fkuW%2F4yjqQnx457dD50aBuK%2FB6466SwMRIZXOO0E65LYNEjQDv1%2BSSYO4DelW9QNF6p3VEZj37PGIWGZyF1Ds4FfPloaSOYK14oBZTvlcozEMgo0APkcMndv3LZOSunsd4%2FzWsvpYFrhoSvy97lazcoWNhxjLCDbGEsJX4NmUMrf8X0B0HgmL%2BxhvhokMoib4aYMPIXmWBXCU%2Ft8pD6H5oZ%2Fh3hH%2B8GGb3POZencNYfUhBQlz4unf8LXft0CxOKbuNa%2FAu1t4IC4QdcPFGdLKXV71W0i%2BPPzxYTFyN%2B7AuDlaoJBZUNmQJqg%2Ff60ffMaNHtvFQl%2FG%2FtfMP7g7bwGOqUBK%2F287sLm1BPxHWm4Is1PChPPeU0veLuWDVCmd%2B2GsxiU%2BAk5uiMA9xYX2eASgG2791KEQPI2lIibGe%2B8kQPeHCWYPCLwOqI%2FuVk5DXjGt8KZJKaeHtULyb0TccuW9FdmNXxVnT73O26epXqjchShZfN3dytFid17r%2FVUQBMGMSmdoxBsmTtjAXiWXbbcoo95Tsr%2F%2F6uKsrIIAmiLxaxngGhoTsHF&X-Amz-Signature=0beb57f4fa3ddda0f7f1dbc119bec79538009308ac8dc3c67794072403c23254&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CCBTIJE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnlaqHOgt72yme4Ox6eW%2BaILpqxj2ymW4%2B9b2kBSwtdQIgDXwYfn2GTFNTmFYJSeWi4fEO%2BKW9Y%2F2PuB%2FyVVJp4E4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9cyrAMBGCTieigEircAxJZRhUiKpKHNeRZ92RVL3IT6E5MQotSoSWLCu2aXQnS8exjSICfJS86mqSXCt2tcCtMzdggcB7%2F9G%2BE2CHEsubjgYMS4I6n0ipafmQ5ttox4iqH347hnf8Wg5oTKk%2BUc4idfFKm9U1NuoIpJYJNnaiJWuh6exIpbrYVeKuGPxfIS3fkr6NNlpwWUar82ZQs4E1ywq7chTA3oj48ihduWNaumZjJtwrCOXqlzZ7PARYMVDL6CyTcz4SmmUe77A1QSyWjj6Pzua2%2FH0%2FNUYGJOIEQKySEBVD5sV3pVTjfokUIZeh2fkuW%2F4yjqQnx457dD50aBuK%2FB6466SwMRIZXOO0E65LYNEjQDv1%2BSSYO4DelW9QNF6p3VEZj37PGIWGZyF1Ds4FfPloaSOYK14oBZTvlcozEMgo0APkcMndv3LZOSunsd4%2FzWsvpYFrhoSvy97lazcoWNhxjLCDbGEsJX4NmUMrf8X0B0HgmL%2BxhvhokMoib4aYMPIXmWBXCU%2Ft8pD6H5oZ%2Fh3hH%2B8GGb3POZencNYfUhBQlz4unf8LXft0CxOKbuNa%2FAu1t4IC4QdcPFGdLKXV71W0i%2BPPzxYTFyN%2B7AuDlaoJBZUNmQJqg%2Ff60ffMaNHtvFQl%2FG%2FtfMP7g7bwGOqUBK%2F287sLm1BPxHWm4Is1PChPPeU0veLuWDVCmd%2B2GsxiU%2BAk5uiMA9xYX2eASgG2791KEQPI2lIibGe%2B8kQPeHCWYPCLwOqI%2FuVk5DXjGt8KZJKaeHtULyb0TccuW9FdmNXxVnT73O26epXqjchShZfN3dytFid17r%2FVUQBMGMSmdoxBsmTtjAXiWXbbcoo95Tsr%2F%2F6uKsrIIAmiLxaxngGhoTsHF&X-Amz-Signature=45906a61b7eede7619c8a7669c466d1bae63d5f654f6c74fc57f0ca73a60de54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CCBTIJE%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T131424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnlaqHOgt72yme4Ox6eW%2BaILpqxj2ymW4%2B9b2kBSwtdQIgDXwYfn2GTFNTmFYJSeWi4fEO%2BKW9Y%2F2PuB%2FyVVJp4E4qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9cyrAMBGCTieigEircAxJZRhUiKpKHNeRZ92RVL3IT6E5MQotSoSWLCu2aXQnS8exjSICfJS86mqSXCt2tcCtMzdggcB7%2F9G%2BE2CHEsubjgYMS4I6n0ipafmQ5ttox4iqH347hnf8Wg5oTKk%2BUc4idfFKm9U1NuoIpJYJNnaiJWuh6exIpbrYVeKuGPxfIS3fkr6NNlpwWUar82ZQs4E1ywq7chTA3oj48ihduWNaumZjJtwrCOXqlzZ7PARYMVDL6CyTcz4SmmUe77A1QSyWjj6Pzua2%2FH0%2FNUYGJOIEQKySEBVD5sV3pVTjfokUIZeh2fkuW%2F4yjqQnx457dD50aBuK%2FB6466SwMRIZXOO0E65LYNEjQDv1%2BSSYO4DelW9QNF6p3VEZj37PGIWGZyF1Ds4FfPloaSOYK14oBZTvlcozEMgo0APkcMndv3LZOSunsd4%2FzWsvpYFrhoSvy97lazcoWNhxjLCDbGEsJX4NmUMrf8X0B0HgmL%2BxhvhokMoib4aYMPIXmWBXCU%2Ft8pD6H5oZ%2Fh3hH%2B8GGb3POZencNYfUhBQlz4unf8LXft0CxOKbuNa%2FAu1t4IC4QdcPFGdLKXV71W0i%2BPPzxYTFyN%2B7AuDlaoJBZUNmQJqg%2Ff60ffMaNHtvFQl%2FG%2FtfMP7g7bwGOqUBK%2F287sLm1BPxHWm4Is1PChPPeU0veLuWDVCmd%2B2GsxiU%2BAk5uiMA9xYX2eASgG2791KEQPI2lIibGe%2B8kQPeHCWYPCLwOqI%2FuVk5DXjGt8KZJKaeHtULyb0TccuW9FdmNXxVnT73O26epXqjchShZfN3dytFid17r%2FVUQBMGMSmdoxBsmTtjAXiWXbbcoo95Tsr%2F%2F6uKsrIIAmiLxaxngGhoTsHF&X-Amz-Signature=5b3a0e25a22febb795d6b86f14495b6ef287655a9dea818764a001f0f6614075&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

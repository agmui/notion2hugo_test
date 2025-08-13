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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNGPR5O6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsCDiG1G0u0VwZwR2vMy%2Fy37dd3h0lwLRyFOZGmDcsqgIgfrGXNqeT6HsOpdQRGzX4CQA%2Fwv5y4iAA%2BOr61B42oGkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO3dftJVdA4cgHV0aSrcA0q685dkvvn5%2F9MP7VVotqZFUaHqazQ3jvkXxedGSnaCHQv%2B%2BLTlbpWeUHlrKTHb9Uy0Ws9%2BUIe0t4Ed4Tb3qBIYiA0Fe9moqAelAQVGZpA62QgbViatzAzQ0H43vvwqsijEy2mAuOLEqQ545x1ca2RlmwP3BrxCn%2Fv2R25yz3634zIchrMguBvBORLLnisp9YBRaMvIuzZeRaRprs3JJWhJ7CBPmxNXcNad2qYOk3KkXcmPSbB4P%2BYBodMPDPdWcxqyFV2s6faKNOhvOpIpkiq0u0jOOxTwM0ODHVRh4kmm8%2B0n3OKHKZCPbe1NGEWcBJN50s%2FMZrvn%2BLU20PQfjjv3MGnm5BbQhqHEze2G1bfXwfIntOgXwu%2F9f1PUcuaxrregihPLlKdK9CTP81QPOWL2J7fV60KacRmeVqNLeBYFvljeZzbvwYv31lYg271d3AAAMK2rjZg%2B6ch2zXDnkfBBYFbGQ7QsZI5JvOahUNRV%2FW8v0Tb9P4NRqHLAZr%2FJpux71cvx7W0vciQ0KKFwOBhAPyUCyJtHRyKNyd26zRruQvIfJ8THSu8%2B0ZTx4L%2BMxSqn%2BNItUmyVz%2F10hp4y6ZGXa%2F6%2FjIeySO4vRa4tY9Zd5SH5MNcB3i%2Fam791MKj88sQGOqUBd8u59FVjnA3ZcYiQf5IQvECLIODXsiRQgbI6f85OyDLBb2WleOBHz7Dg75dT18X2Cz4kZBZvhp89KUpyx%2BXOg4uyQ8ZXCjjWKBMMJRXcMXVEfqtoW26T40BTEi5drhBf7DYdUtL7YLMWYaDILju6Wuwj3LYyjpuM0TJgx4y8PYZCnfN9v1g9mQ22d3nTJSjNYqetHScdi5Fp9gnQ2QT%2F4NMdKLtU&X-Amz-Signature=995fa27b73fda3d4679952170894812ff849e1c6261b2fec29c0e2d635e1d507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNGPR5O6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsCDiG1G0u0VwZwR2vMy%2Fy37dd3h0lwLRyFOZGmDcsqgIgfrGXNqeT6HsOpdQRGzX4CQA%2Fwv5y4iAA%2BOr61B42oGkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO3dftJVdA4cgHV0aSrcA0q685dkvvn5%2F9MP7VVotqZFUaHqazQ3jvkXxedGSnaCHQv%2B%2BLTlbpWeUHlrKTHb9Uy0Ws9%2BUIe0t4Ed4Tb3qBIYiA0Fe9moqAelAQVGZpA62QgbViatzAzQ0H43vvwqsijEy2mAuOLEqQ545x1ca2RlmwP3BrxCn%2Fv2R25yz3634zIchrMguBvBORLLnisp9YBRaMvIuzZeRaRprs3JJWhJ7CBPmxNXcNad2qYOk3KkXcmPSbB4P%2BYBodMPDPdWcxqyFV2s6faKNOhvOpIpkiq0u0jOOxTwM0ODHVRh4kmm8%2B0n3OKHKZCPbe1NGEWcBJN50s%2FMZrvn%2BLU20PQfjjv3MGnm5BbQhqHEze2G1bfXwfIntOgXwu%2F9f1PUcuaxrregihPLlKdK9CTP81QPOWL2J7fV60KacRmeVqNLeBYFvljeZzbvwYv31lYg271d3AAAMK2rjZg%2B6ch2zXDnkfBBYFbGQ7QsZI5JvOahUNRV%2FW8v0Tb9P4NRqHLAZr%2FJpux71cvx7W0vciQ0KKFwOBhAPyUCyJtHRyKNyd26zRruQvIfJ8THSu8%2B0ZTx4L%2BMxSqn%2BNItUmyVz%2F10hp4y6ZGXa%2F6%2FjIeySO4vRa4tY9Zd5SH5MNcB3i%2Fam791MKj88sQGOqUBd8u59FVjnA3ZcYiQf5IQvECLIODXsiRQgbI6f85OyDLBb2WleOBHz7Dg75dT18X2Cz4kZBZvhp89KUpyx%2BXOg4uyQ8ZXCjjWKBMMJRXcMXVEfqtoW26T40BTEi5drhBf7DYdUtL7YLMWYaDILju6Wuwj3LYyjpuM0TJgx4y8PYZCnfN9v1g9mQ22d3nTJSjNYqetHScdi5Fp9gnQ2QT%2F4NMdKLtU&X-Amz-Signature=fd29681923d90de9bccf7a3a84f40ddbb6c07d9e5101df69d42f7924d23d1fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNGPR5O6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsCDiG1G0u0VwZwR2vMy%2Fy37dd3h0lwLRyFOZGmDcsqgIgfrGXNqeT6HsOpdQRGzX4CQA%2Fwv5y4iAA%2BOr61B42oGkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDO3dftJVdA4cgHV0aSrcA0q685dkvvn5%2F9MP7VVotqZFUaHqazQ3jvkXxedGSnaCHQv%2B%2BLTlbpWeUHlrKTHb9Uy0Ws9%2BUIe0t4Ed4Tb3qBIYiA0Fe9moqAelAQVGZpA62QgbViatzAzQ0H43vvwqsijEy2mAuOLEqQ545x1ca2RlmwP3BrxCn%2Fv2R25yz3634zIchrMguBvBORLLnisp9YBRaMvIuzZeRaRprs3JJWhJ7CBPmxNXcNad2qYOk3KkXcmPSbB4P%2BYBodMPDPdWcxqyFV2s6faKNOhvOpIpkiq0u0jOOxTwM0ODHVRh4kmm8%2B0n3OKHKZCPbe1NGEWcBJN50s%2FMZrvn%2BLU20PQfjjv3MGnm5BbQhqHEze2G1bfXwfIntOgXwu%2F9f1PUcuaxrregihPLlKdK9CTP81QPOWL2J7fV60KacRmeVqNLeBYFvljeZzbvwYv31lYg271d3AAAMK2rjZg%2B6ch2zXDnkfBBYFbGQ7QsZI5JvOahUNRV%2FW8v0Tb9P4NRqHLAZr%2FJpux71cvx7W0vciQ0KKFwOBhAPyUCyJtHRyKNyd26zRruQvIfJ8THSu8%2B0ZTx4L%2BMxSqn%2BNItUmyVz%2F10hp4y6ZGXa%2F6%2FjIeySO4vRa4tY9Zd5SH5MNcB3i%2Fam791MKj88sQGOqUBd8u59FVjnA3ZcYiQf5IQvECLIODXsiRQgbI6f85OyDLBb2WleOBHz7Dg75dT18X2Cz4kZBZvhp89KUpyx%2BXOg4uyQ8ZXCjjWKBMMJRXcMXVEfqtoW26T40BTEi5drhBf7DYdUtL7YLMWYaDILju6Wuwj3LYyjpuM0TJgx4y8PYZCnfN9v1g9mQ22d3nTJSjNYqetHScdi5Fp9gnQ2QT%2F4NMdKLtU&X-Amz-Signature=f772d84b7ff36ed05472c47163125a3dfdfd282dfa5d8f71841b33f0b09d5671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

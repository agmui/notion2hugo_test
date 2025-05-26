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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S26G55YL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLFW%2Fa1%2FV8TV028uw7ZbawkHF2YC1HQ5Q6qVYj89lFpQIgdVnrorUYjkccHkRge51ChBzX1kWHWD%2Bmb4lfg1DtQxQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHegqXcxw44aeTR6iircA43ifefWS7ynIrsBppPolJj%2Fm3LKPK3Ue9uSxnW1%2FyBZyNy%2BtVx8W0ArDuN1hCOt%2BXszBpIUL96gEJhEPQ0SO9gnAFGeq8gB8NEUOBfoGvkc%2FF6C7xKQgPWKKuOC5eQwvCLU%2B5Qa1lL56wrtY9Je45ZixBJG4Ermrc4OtoJC5fyimWQqJwOZQfl0SNznJR7EzripdGqUgexV0Qu7LoreufNNLuUT5%2BXhWnC0osc9CWKmlcSd9V3Nwo8a6DjWR00yZkUYMRgs6dOO%2B5igG90MPymi6caMFSQ3qyoB5LqqKNS7W38yBwSsHzFRx3ALFr7UAfm6qbT%2FttSVZC9q2%2F9rgfYaut4eb8UwoN05S7IwktZYT7eE290wlOjBOIkmZmzTphPPOoWWF4ZMyFi6DpadjQRCaoKec1%2FEkfPcpTKe5SG8YHEacYsBc8WI27as0twJ%2FGatOKm3KdxUSBqngJdZ2V9P67FDqmh8%2FxAfVPxy3bqMpoBWmiQc2nhn40xyekFPkUR%2BVbxBXi9Y8z%2BPeypGstreBVWjzzPNse9jUHcyL7URW3MBJ1Wq5UwOeLJOcjylNvC9WHblUBuMFfo10fJeeZn4K8glw%2BeRtdXLDj0zl9dLJyMusaAXnvSunSTiMNGr0sEGOqUBQVqtcIv0pN6BxHjgtN8DBmeeDbqKp%2FZRC6a2oGOf7%2F61F3usU66u4t1yGhSNFny6dF6NODWA8XFo9%2FPHWCe38iMKkGmUr4pij1kVj6ty7%2FG7XSxI14%2BpZ%2BbYqqYb%2FYSFu7SSFr3sk0B7lIG1zgBFuZuCcTg7d6PTwsWrhDClkSPoN3a0fEWfPNx3Gvi56pr%2BVGqY1MVewrGJ2SvIhsH2gxx3tCPg&X-Amz-Signature=ead315d710179bb9acaaa61fc2448510e4cb6a6aad5c2896c23c6b583ac0200e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S26G55YL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLFW%2Fa1%2FV8TV028uw7ZbawkHF2YC1HQ5Q6qVYj89lFpQIgdVnrorUYjkccHkRge51ChBzX1kWHWD%2Bmb4lfg1DtQxQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHegqXcxw44aeTR6iircA43ifefWS7ynIrsBppPolJj%2Fm3LKPK3Ue9uSxnW1%2FyBZyNy%2BtVx8W0ArDuN1hCOt%2BXszBpIUL96gEJhEPQ0SO9gnAFGeq8gB8NEUOBfoGvkc%2FF6C7xKQgPWKKuOC5eQwvCLU%2B5Qa1lL56wrtY9Je45ZixBJG4Ermrc4OtoJC5fyimWQqJwOZQfl0SNznJR7EzripdGqUgexV0Qu7LoreufNNLuUT5%2BXhWnC0osc9CWKmlcSd9V3Nwo8a6DjWR00yZkUYMRgs6dOO%2B5igG90MPymi6caMFSQ3qyoB5LqqKNS7W38yBwSsHzFRx3ALFr7UAfm6qbT%2FttSVZC9q2%2F9rgfYaut4eb8UwoN05S7IwktZYT7eE290wlOjBOIkmZmzTphPPOoWWF4ZMyFi6DpadjQRCaoKec1%2FEkfPcpTKe5SG8YHEacYsBc8WI27as0twJ%2FGatOKm3KdxUSBqngJdZ2V9P67FDqmh8%2FxAfVPxy3bqMpoBWmiQc2nhn40xyekFPkUR%2BVbxBXi9Y8z%2BPeypGstreBVWjzzPNse9jUHcyL7URW3MBJ1Wq5UwOeLJOcjylNvC9WHblUBuMFfo10fJeeZn4K8glw%2BeRtdXLDj0zl9dLJyMusaAXnvSunSTiMNGr0sEGOqUBQVqtcIv0pN6BxHjgtN8DBmeeDbqKp%2FZRC6a2oGOf7%2F61F3usU66u4t1yGhSNFny6dF6NODWA8XFo9%2FPHWCe38iMKkGmUr4pij1kVj6ty7%2FG7XSxI14%2BpZ%2BbYqqYb%2FYSFu7SSFr3sk0B7lIG1zgBFuZuCcTg7d6PTwsWrhDClkSPoN3a0fEWfPNx3Gvi56pr%2BVGqY1MVewrGJ2SvIhsH2gxx3tCPg&X-Amz-Signature=013ef9351674fc6aabdde13104c01945830e010a9be1b0e092dc5dbd621c5dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S26G55YL%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLFW%2Fa1%2FV8TV028uw7ZbawkHF2YC1HQ5Q6qVYj89lFpQIgdVnrorUYjkccHkRge51ChBzX1kWHWD%2Bmb4lfg1DtQxQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHegqXcxw44aeTR6iircA43ifefWS7ynIrsBppPolJj%2Fm3LKPK3Ue9uSxnW1%2FyBZyNy%2BtVx8W0ArDuN1hCOt%2BXszBpIUL96gEJhEPQ0SO9gnAFGeq8gB8NEUOBfoGvkc%2FF6C7xKQgPWKKuOC5eQwvCLU%2B5Qa1lL56wrtY9Je45ZixBJG4Ermrc4OtoJC5fyimWQqJwOZQfl0SNznJR7EzripdGqUgexV0Qu7LoreufNNLuUT5%2BXhWnC0osc9CWKmlcSd9V3Nwo8a6DjWR00yZkUYMRgs6dOO%2B5igG90MPymi6caMFSQ3qyoB5LqqKNS7W38yBwSsHzFRx3ALFr7UAfm6qbT%2FttSVZC9q2%2F9rgfYaut4eb8UwoN05S7IwktZYT7eE290wlOjBOIkmZmzTphPPOoWWF4ZMyFi6DpadjQRCaoKec1%2FEkfPcpTKe5SG8YHEacYsBc8WI27as0twJ%2FGatOKm3KdxUSBqngJdZ2V9P67FDqmh8%2FxAfVPxy3bqMpoBWmiQc2nhn40xyekFPkUR%2BVbxBXi9Y8z%2BPeypGstreBVWjzzPNse9jUHcyL7URW3MBJ1Wq5UwOeLJOcjylNvC9WHblUBuMFfo10fJeeZn4K8glw%2BeRtdXLDj0zl9dLJyMusaAXnvSunSTiMNGr0sEGOqUBQVqtcIv0pN6BxHjgtN8DBmeeDbqKp%2FZRC6a2oGOf7%2F61F3usU66u4t1yGhSNFny6dF6NODWA8XFo9%2FPHWCe38iMKkGmUr4pij1kVj6ty7%2FG7XSxI14%2BpZ%2BbYqqYb%2FYSFu7SSFr3sk0B7lIG1zgBFuZuCcTg7d6PTwsWrhDClkSPoN3a0fEWfPNx3Gvi56pr%2BVGqY1MVewrGJ2SvIhsH2gxx3tCPg&X-Amz-Signature=b02a1077dcb0f34524aad53b5e8c031fc907e0ed779fa5cd48d6cc72a09def2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

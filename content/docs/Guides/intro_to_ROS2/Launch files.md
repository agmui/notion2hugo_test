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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZDXPMI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnpVw0NtQJjZHpVTnzDsBiOKcozeOSRyaoGNeXhv2NygIhAJBJSaK7pPsAHc%2F8xKf6r4RdKOW7G3IbF%2BdKZa2SloxOKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXd55NP7bziJoz0Osq3ANeh0R16dgT3d%2B3lEofDGjqHtdw3czPzt2pSZPlwChk47Fj5mgIr1J%2F733%2B5X69NwthtCvI7qREc3uy2rv2B3LdpbFlgwN3AEz42pA4Vna%2BC7%2B5gzVgC4UQXmSavfvedMpnZMGkKba4wEieE4MF9alScETboJrqjZj6x6ykkUO8J4I9jLbFPqTCiaROihOzDBaBt9iV%2BjaZUYbQHT9JsacVE8XytEKOA829uXKvcEYWSqQYq%2Bcp%2BkuI3zacuMkLTG%2BKJvSXVRtWCFCKxjs%2B%2FRG1CGHWRK%2BazyxGM%2Bt3N9ZtWifSdmLYmoIu25sGhtV0xK1RSNyFlH%2BZCd7ILTpv8Ivt44PQuxMpjM0Qm8HgIVF01OreePpP26OWpXklpbddjJJDSauYh3mspUspspxA1CZyZT%2BWOaXZWsu3iHe4TYOUx3FHqhACuXfY5rgZTp7qN8Z8KxxAo8f5zzvndYe1WsmWC8aWWUunrFhCgO1bX3hHaqeGqXH9X4%2FUQfwNQJTLJ%2F%2FTBmaS2%2BmDKu4Vd8VexZS2CPk6Zy7NoyqLfK47zyc%2B0fLM246IfTODfwIW3b2pPa8RUSXB2nbmh4ZKZklVQXRP8F8N81r4eOIS4QyxQ5m%2BG6MkbcZC%2FNQYmka16TC19IDDBjqkAf4jPC%2F8c14%2F3t5ZFPEQB2RY0UA7g%2BIHDHyYnINxqCPsaXQIudauG2vKVQPv3Ug9%2FAU%2F5w2CiApeip2dntoukGYLwspsPw%2BGdBu%2Bo8fy7GaRNQmMaHbCa0wbo6WL35HFMIPOWcIaHMfpMQB2%2FFFhPiXsBba5HB4xVUWCTYQqU%2BD1Awo3j1v27jiT%2BnzgIRYLzZdWJwW3iIymVSy0gqbJOJ%2BVH0bT&X-Amz-Signature=fc7f39e556c4ef7db225625f6cb598c7c79a91cca7ef245fb17fd17ba96763ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZDXPMI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnpVw0NtQJjZHpVTnzDsBiOKcozeOSRyaoGNeXhv2NygIhAJBJSaK7pPsAHc%2F8xKf6r4RdKOW7G3IbF%2BdKZa2SloxOKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXd55NP7bziJoz0Osq3ANeh0R16dgT3d%2B3lEofDGjqHtdw3czPzt2pSZPlwChk47Fj5mgIr1J%2F733%2B5X69NwthtCvI7qREc3uy2rv2B3LdpbFlgwN3AEz42pA4Vna%2BC7%2B5gzVgC4UQXmSavfvedMpnZMGkKba4wEieE4MF9alScETboJrqjZj6x6ykkUO8J4I9jLbFPqTCiaROihOzDBaBt9iV%2BjaZUYbQHT9JsacVE8XytEKOA829uXKvcEYWSqQYq%2Bcp%2BkuI3zacuMkLTG%2BKJvSXVRtWCFCKxjs%2B%2FRG1CGHWRK%2BazyxGM%2Bt3N9ZtWifSdmLYmoIu25sGhtV0xK1RSNyFlH%2BZCd7ILTpv8Ivt44PQuxMpjM0Qm8HgIVF01OreePpP26OWpXklpbddjJJDSauYh3mspUspspxA1CZyZT%2BWOaXZWsu3iHe4TYOUx3FHqhACuXfY5rgZTp7qN8Z8KxxAo8f5zzvndYe1WsmWC8aWWUunrFhCgO1bX3hHaqeGqXH9X4%2FUQfwNQJTLJ%2F%2FTBmaS2%2BmDKu4Vd8VexZS2CPk6Zy7NoyqLfK47zyc%2B0fLM246IfTODfwIW3b2pPa8RUSXB2nbmh4ZKZklVQXRP8F8N81r4eOIS4QyxQ5m%2BG6MkbcZC%2FNQYmka16TC19IDDBjqkAf4jPC%2F8c14%2F3t5ZFPEQB2RY0UA7g%2BIHDHyYnINxqCPsaXQIudauG2vKVQPv3Ug9%2FAU%2F5w2CiApeip2dntoukGYLwspsPw%2BGdBu%2Bo8fy7GaRNQmMaHbCa0wbo6WL35HFMIPOWcIaHMfpMQB2%2FFFhPiXsBba5HB4xVUWCTYQqU%2BD1Awo3j1v27jiT%2BnzgIRYLzZdWJwW3iIymVSy0gqbJOJ%2BVH0bT&X-Amz-Signature=e707ced6aa4ce065e213d9f8047813a9d2acc08f2a48e8e8d2a6b97cc3251fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KZDXPMI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T190245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnpVw0NtQJjZHpVTnzDsBiOKcozeOSRyaoGNeXhv2NygIhAJBJSaK7pPsAHc%2F8xKf6r4RdKOW7G3IbF%2BdKZa2SloxOKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXd55NP7bziJoz0Osq3ANeh0R16dgT3d%2B3lEofDGjqHtdw3czPzt2pSZPlwChk47Fj5mgIr1J%2F733%2B5X69NwthtCvI7qREc3uy2rv2B3LdpbFlgwN3AEz42pA4Vna%2BC7%2B5gzVgC4UQXmSavfvedMpnZMGkKba4wEieE4MF9alScETboJrqjZj6x6ykkUO8J4I9jLbFPqTCiaROihOzDBaBt9iV%2BjaZUYbQHT9JsacVE8XytEKOA829uXKvcEYWSqQYq%2Bcp%2BkuI3zacuMkLTG%2BKJvSXVRtWCFCKxjs%2B%2FRG1CGHWRK%2BazyxGM%2Bt3N9ZtWifSdmLYmoIu25sGhtV0xK1RSNyFlH%2BZCd7ILTpv8Ivt44PQuxMpjM0Qm8HgIVF01OreePpP26OWpXklpbddjJJDSauYh3mspUspspxA1CZyZT%2BWOaXZWsu3iHe4TYOUx3FHqhACuXfY5rgZTp7qN8Z8KxxAo8f5zzvndYe1WsmWC8aWWUunrFhCgO1bX3hHaqeGqXH9X4%2FUQfwNQJTLJ%2F%2FTBmaS2%2BmDKu4Vd8VexZS2CPk6Zy7NoyqLfK47zyc%2B0fLM246IfTODfwIW3b2pPa8RUSXB2nbmh4ZKZklVQXRP8F8N81r4eOIS4QyxQ5m%2BG6MkbcZC%2FNQYmka16TC19IDDBjqkAf4jPC%2F8c14%2F3t5ZFPEQB2RY0UA7g%2BIHDHyYnINxqCPsaXQIudauG2vKVQPv3Ug9%2FAU%2F5w2CiApeip2dntoukGYLwspsPw%2BGdBu%2Bo8fy7GaRNQmMaHbCa0wbo6WL35HFMIPOWcIaHMfpMQB2%2FFFhPiXsBba5HB4xVUWCTYQqU%2BD1Awo3j1v27jiT%2BnzgIRYLzZdWJwW3iIymVSy0gqbJOJ%2BVH0bT&X-Amz-Signature=23e8849beba1f73c985d02ce204252cd0a2a7865d8ee3717cdb1bc186eec42bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMM4LGL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLQtuOAQIn%2FY6SgZE93SEjopt8c%2B9OashoonAcRbLP9AiEAjHzv6IFe0JwufDDDXFSQ4KYfkzBxL2SnkYoWG4wjyBUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIawRozBBIbGyVYYtCrcA6GVvWkXaR%2BWgBcAgc4dLKN8ma21xgI2nrGSFQNMhmPzyVNO1sY9KKIIP7HJwQ0qd04oxnFfqiMydXnpQMqbLS%2BD9PMBJFAzPOG9AkqHSwvFN5uGiHMwbK8tayDpqV3htAhDdEfqAJ4bbAON%2BiJjweHnxKfoIg7YOXBV%2BVvFYVv0MVl4sUiXMKQxX2zhSjtxAt4UOHP4brscRwwqy6S2g5PO6mZ5iUTmjRtkke26YTf3%2FlCpWK4PVsXT6HcaqHKYm1WSR0BAvjVYisV2FivRMxQLCOMe9YAu%2F%2BYZv%2Bdo3KtRLMrbvdJHPfceHgwIgX7uYQfhmXT5QrHblERyuXW4UCPfnwCiu2KY%2Bg%2B8ykQJTAIGW2F4SuVSCdMmAfg1iQ1cSfE2465Z%2FAaHbzBeTaL8crGAlxb898tGPPxdpJake2wRXv7RHFn2hTrhklUdLSM8rdTompF51QndqOLzelRvquPQTHS43XuJEA0NRWIteak8jULFA%2BgdcLsO3gDVz7XZ0UNkLh%2BVSgpDAgX1xkojYfi1pnyfRCe7YAPNGIS%2F%2FEUSkG9QiZgaWI%2FsbGABT1%2BdKLvkqej97tvjhXZb0KbK1GOk7Ro28Adij006hN%2BI4EHeBGLitzx7Df%2F%2FvrFCMLTUvsMGOqUBUYGfj2nGWHs%2BG0AF26CzbXtPqlSWxFb7BXbtwrTBprDXf0Nv%2Bwq77xmu2DLaudWx1udXmgHFRP%2BfXWwRRzJmC7XvIYE7u9rA1KiYV63dDl5ymOHhlkKcieRsz2HGYdjAy6E5XW%2FHEI%2FfgHgdeaQd7jMg9ADuxjy3DwKQeMHKAkqHLpRUXi5nD%2BcaiPIa7cEYZwAxta0EsCK0Bpkh66Zcrmwcrcs5&X-Amz-Signature=169078fa10c4a3a4d6bda1d5e192ea7b591c4120e6df6ba9918079fcd7920496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMM4LGL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLQtuOAQIn%2FY6SgZE93SEjopt8c%2B9OashoonAcRbLP9AiEAjHzv6IFe0JwufDDDXFSQ4KYfkzBxL2SnkYoWG4wjyBUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIawRozBBIbGyVYYtCrcA6GVvWkXaR%2BWgBcAgc4dLKN8ma21xgI2nrGSFQNMhmPzyVNO1sY9KKIIP7HJwQ0qd04oxnFfqiMydXnpQMqbLS%2BD9PMBJFAzPOG9AkqHSwvFN5uGiHMwbK8tayDpqV3htAhDdEfqAJ4bbAON%2BiJjweHnxKfoIg7YOXBV%2BVvFYVv0MVl4sUiXMKQxX2zhSjtxAt4UOHP4brscRwwqy6S2g5PO6mZ5iUTmjRtkke26YTf3%2FlCpWK4PVsXT6HcaqHKYm1WSR0BAvjVYisV2FivRMxQLCOMe9YAu%2F%2BYZv%2Bdo3KtRLMrbvdJHPfceHgwIgX7uYQfhmXT5QrHblERyuXW4UCPfnwCiu2KY%2Bg%2B8ykQJTAIGW2F4SuVSCdMmAfg1iQ1cSfE2465Z%2FAaHbzBeTaL8crGAlxb898tGPPxdpJake2wRXv7RHFn2hTrhklUdLSM8rdTompF51QndqOLzelRvquPQTHS43XuJEA0NRWIteak8jULFA%2BgdcLsO3gDVz7XZ0UNkLh%2BVSgpDAgX1xkojYfi1pnyfRCe7YAPNGIS%2F%2FEUSkG9QiZgaWI%2FsbGABT1%2BdKLvkqej97tvjhXZb0KbK1GOk7Ro28Adij006hN%2BI4EHeBGLitzx7Df%2F%2FvrFCMLTUvsMGOqUBUYGfj2nGWHs%2BG0AF26CzbXtPqlSWxFb7BXbtwrTBprDXf0Nv%2Bwq77xmu2DLaudWx1udXmgHFRP%2BfXWwRRzJmC7XvIYE7u9rA1KiYV63dDl5ymOHhlkKcieRsz2HGYdjAy6E5XW%2FHEI%2FfgHgdeaQd7jMg9ADuxjy3DwKQeMHKAkqHLpRUXi5nD%2BcaiPIa7cEYZwAxta0EsCK0Bpkh66Zcrmwcrcs5&X-Amz-Signature=4c0a257dd4bf382311fb28394960b30483a069912b2d5f2f4e8e1ced98ea3c3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RMM4LGL%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T121645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLQtuOAQIn%2FY6SgZE93SEjopt8c%2B9OashoonAcRbLP9AiEAjHzv6IFe0JwufDDDXFSQ4KYfkzBxL2SnkYoWG4wjyBUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIawRozBBIbGyVYYtCrcA6GVvWkXaR%2BWgBcAgc4dLKN8ma21xgI2nrGSFQNMhmPzyVNO1sY9KKIIP7HJwQ0qd04oxnFfqiMydXnpQMqbLS%2BD9PMBJFAzPOG9AkqHSwvFN5uGiHMwbK8tayDpqV3htAhDdEfqAJ4bbAON%2BiJjweHnxKfoIg7YOXBV%2BVvFYVv0MVl4sUiXMKQxX2zhSjtxAt4UOHP4brscRwwqy6S2g5PO6mZ5iUTmjRtkke26YTf3%2FlCpWK4PVsXT6HcaqHKYm1WSR0BAvjVYisV2FivRMxQLCOMe9YAu%2F%2BYZv%2Bdo3KtRLMrbvdJHPfceHgwIgX7uYQfhmXT5QrHblERyuXW4UCPfnwCiu2KY%2Bg%2B8ykQJTAIGW2F4SuVSCdMmAfg1iQ1cSfE2465Z%2FAaHbzBeTaL8crGAlxb898tGPPxdpJake2wRXv7RHFn2hTrhklUdLSM8rdTompF51QndqOLzelRvquPQTHS43XuJEA0NRWIteak8jULFA%2BgdcLsO3gDVz7XZ0UNkLh%2BVSgpDAgX1xkojYfi1pnyfRCe7YAPNGIS%2F%2FEUSkG9QiZgaWI%2FsbGABT1%2BdKLvkqej97tvjhXZb0KbK1GOk7Ro28Adij006hN%2BI4EHeBGLitzx7Df%2F%2FvrFCMLTUvsMGOqUBUYGfj2nGWHs%2BG0AF26CzbXtPqlSWxFb7BXbtwrTBprDXf0Nv%2Bwq77xmu2DLaudWx1udXmgHFRP%2BfXWwRRzJmC7XvIYE7u9rA1KiYV63dDl5ymOHhlkKcieRsz2HGYdjAy6E5XW%2FHEI%2FfgHgdeaQd7jMg9ADuxjy3DwKQeMHKAkqHLpRUXi5nD%2BcaiPIa7cEYZwAxta0EsCK0Bpkh66Zcrmwcrcs5&X-Amz-Signature=0369817ab6e78c94d9b7b53438760504748b250331dd55dd15c58ae1849e56ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

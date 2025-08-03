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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XN3MB7E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxQlsrbr1jfNI%2BgsHdH7GhZ9KrqVbrbF2jWouu7rYOWAiBqUCfrU1rWmx0gV0%2B2KafGAEEuGRrDVblEMZragTZs6ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM45Ix27A7Uuh9iV8bKtwDDEU8Vw1ZmYHFmJSguCHAScdbBxyN30l3d82%2BTn1uSdFA%2FHgInZDgu11vVd%2FtEhdzOQMrW2vy79e%2FlOMuGEGVHh1oGH9Jqx5J%2B6A1j8ORbWRwjoN32V3DzbDOvR%2BFPUzGZbxvgRklr8z3yRFkpr1vw6aSfiKgEqu9pGPzrDyq0fqRd1nKAzx8USHyiUGJZt8fe6hzLmLnwCpiAYUu%2Bb9jpy7e0fBrkEXG8azlNNUbmSldnRv%2F5H%2FRCdYOVuTkOH%2FQq76Rcjj8xgL3PO5mPDyyLr5y7oyjD9LFIXoo65MHF7c0TJOD0Ay1TQVZ333GOo%2Fr2mv0xGErB7WARhamsqEA%2BbYCvbD5n5rNB6ob4tUTdWy6Vd8m63ZkaWQDRu8sP1N9tZMzy5lq01A4pk6Fbh4%2F5qdO90WlNSfB5mTEH0xFFH0HhmG%2BlVjwuSF1PezM1TFJag9rrLozviXo2knBeY2sxRdJzFkhaA8%2FwtCX4AVwX0Nbz4eyPcpL3bR59Dt3xFPZHfyxiXV34EtZrW5bNYDi7uW84yXqhArDcoHMP0IxY94Picr1qmf15zFMhHZDkxzcPnJinyZXsSaRgFHqG%2BXoEq8J0Qg7zcDzimUFs6myay9rGWoizMaboZ2yCKcwk8S8xAY6pgGIbLbRut2JgZg2OOaob8Mm518Zojg4AxW1kYrwb7DppOnmpGyzXbxkyuMuaTY30rJOztOhaQfqEv0jKG6oYYXLLlvPrNMktsdjQktkZO%2Bmy5%2Fc5445oc1VvDlR5FFLnPo0hy4F%2FE9eKq4G804KC%2B8n3kGcNRP6S1%2F4YscFsfOSu7MR0yIqRmx6Du%2B4p7fmr0f1WtFZhI4ntPMK%2F50e78UrUjn8T73l&X-Amz-Signature=2a6186823f0dc3c7ce59cbae0a900e8fc9c7b9380c36319e6cc53e696e710d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XN3MB7E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxQlsrbr1jfNI%2BgsHdH7GhZ9KrqVbrbF2jWouu7rYOWAiBqUCfrU1rWmx0gV0%2B2KafGAEEuGRrDVblEMZragTZs6ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM45Ix27A7Uuh9iV8bKtwDDEU8Vw1ZmYHFmJSguCHAScdbBxyN30l3d82%2BTn1uSdFA%2FHgInZDgu11vVd%2FtEhdzOQMrW2vy79e%2FlOMuGEGVHh1oGH9Jqx5J%2B6A1j8ORbWRwjoN32V3DzbDOvR%2BFPUzGZbxvgRklr8z3yRFkpr1vw6aSfiKgEqu9pGPzrDyq0fqRd1nKAzx8USHyiUGJZt8fe6hzLmLnwCpiAYUu%2Bb9jpy7e0fBrkEXG8azlNNUbmSldnRv%2F5H%2FRCdYOVuTkOH%2FQq76Rcjj8xgL3PO5mPDyyLr5y7oyjD9LFIXoo65MHF7c0TJOD0Ay1TQVZ333GOo%2Fr2mv0xGErB7WARhamsqEA%2BbYCvbD5n5rNB6ob4tUTdWy6Vd8m63ZkaWQDRu8sP1N9tZMzy5lq01A4pk6Fbh4%2F5qdO90WlNSfB5mTEH0xFFH0HhmG%2BlVjwuSF1PezM1TFJag9rrLozviXo2knBeY2sxRdJzFkhaA8%2FwtCX4AVwX0Nbz4eyPcpL3bR59Dt3xFPZHfyxiXV34EtZrW5bNYDi7uW84yXqhArDcoHMP0IxY94Picr1qmf15zFMhHZDkxzcPnJinyZXsSaRgFHqG%2BXoEq8J0Qg7zcDzimUFs6myay9rGWoizMaboZ2yCKcwk8S8xAY6pgGIbLbRut2JgZg2OOaob8Mm518Zojg4AxW1kYrwb7DppOnmpGyzXbxkyuMuaTY30rJOztOhaQfqEv0jKG6oYYXLLlvPrNMktsdjQktkZO%2Bmy5%2Fc5445oc1VvDlR5FFLnPo0hy4F%2FE9eKq4G804KC%2B8n3kGcNRP6S1%2F4YscFsfOSu7MR0yIqRmx6Du%2B4p7fmr0f1WtFZhI4ntPMK%2F50e78UrUjn8T73l&X-Amz-Signature=9b6ce5941f97d998a56637fdc77b1936c9befeb5a5094a9f1ac82bae8378d141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XN3MB7E%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxQlsrbr1jfNI%2BgsHdH7GhZ9KrqVbrbF2jWouu7rYOWAiBqUCfrU1rWmx0gV0%2B2KafGAEEuGRrDVblEMZragTZs6ir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM45Ix27A7Uuh9iV8bKtwDDEU8Vw1ZmYHFmJSguCHAScdbBxyN30l3d82%2BTn1uSdFA%2FHgInZDgu11vVd%2FtEhdzOQMrW2vy79e%2FlOMuGEGVHh1oGH9Jqx5J%2B6A1j8ORbWRwjoN32V3DzbDOvR%2BFPUzGZbxvgRklr8z3yRFkpr1vw6aSfiKgEqu9pGPzrDyq0fqRd1nKAzx8USHyiUGJZt8fe6hzLmLnwCpiAYUu%2Bb9jpy7e0fBrkEXG8azlNNUbmSldnRv%2F5H%2FRCdYOVuTkOH%2FQq76Rcjj8xgL3PO5mPDyyLr5y7oyjD9LFIXoo65MHF7c0TJOD0Ay1TQVZ333GOo%2Fr2mv0xGErB7WARhamsqEA%2BbYCvbD5n5rNB6ob4tUTdWy6Vd8m63ZkaWQDRu8sP1N9tZMzy5lq01A4pk6Fbh4%2F5qdO90WlNSfB5mTEH0xFFH0HhmG%2BlVjwuSF1PezM1TFJag9rrLozviXo2knBeY2sxRdJzFkhaA8%2FwtCX4AVwX0Nbz4eyPcpL3bR59Dt3xFPZHfyxiXV34EtZrW5bNYDi7uW84yXqhArDcoHMP0IxY94Picr1qmf15zFMhHZDkxzcPnJinyZXsSaRgFHqG%2BXoEq8J0Qg7zcDzimUFs6myay9rGWoizMaboZ2yCKcwk8S8xAY6pgGIbLbRut2JgZg2OOaob8Mm518Zojg4AxW1kYrwb7DppOnmpGyzXbxkyuMuaTY30rJOztOhaQfqEv0jKG6oYYXLLlvPrNMktsdjQktkZO%2Bmy5%2Fc5445oc1VvDlR5FFLnPo0hy4F%2FE9eKq4G804KC%2B8n3kGcNRP6S1%2F4YscFsfOSu7MR0yIqRmx6Du%2B4p7fmr0f1WtFZhI4ntPMK%2F50e78UrUjn8T73l&X-Amz-Signature=d619dcf6de408ddaf39d6a420c5b562f517d82771825a91013cf443ea12ce29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

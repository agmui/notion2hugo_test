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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3CK2VQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGmCP6%2Bi9d796SSRgGRIgTav7%2BEhUpWUPsYPB6%2BTapZQIgKrz%2BLjLAkP5jAWoUMLzQj%2FFCTdoGGXUdKHhwLXl0qWUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKJcrqUYMrAJPaXcdyrcAycQTUm4NIencgCyO41LZgRLCjHNpf%2Bw3UtOcUCO0qxUQqhGCpP6dhmy94WOJ2T7iIgX1vygKyPZQ1fhR8C0BskzDDuIMfm0EArTvEc0vBvPmcgYtKPAChLFhc%2BvWDnu0rsWKoC88PnBhnACuO9TtvyYESsGQm%2F1J0Ck8v%2BK9QVbQHJbyNx4iU%2Bm%2Fp%2BamuCOI7d%2Bn8K1g%2BKCGerG%2FUWQMVsZl7W9ejTSaLvPJwlhFKMJRbrhwnQxxYa5f%2BXHHVpOFrRdcULtihIplKU5GZ8yMImmBez724Y7J9naAjnHOicQRSAUz4ikzuq%2BOd1g4us3Q3uXNLvQ2iEe58aFUguMU56CpG5gyCZcf%2BankFl7UUhikj2gbD7aIh0CHcPBXQqZkWsT1rkDVfnWuS6YiRtpf0Wg47MtgjsBdub1Y6ZDCstMslqmYT%2BcoJhaAM6fw9AMYTOPVzc%2B7NGnqHj9HVxBmrjqLX9FGmry%2BaJB%2Fjf6QzPMTnchAwjBSV4MNcI1mA4f2kdxjjRjXkYAbjusM4DVthxGoxAye8U1dy3bY7i%2BkKHIombkjaPBF5TbVRt2oxUoVz%2BA8eonbHN0umwoIZ6cxz5NqMu%2B8pNkBkbd49unlcHwkyvO8FoeJp2kRU94MJ2mu8QGOqUBydIbNXMKdzzjRKeH%2Fr%2FJ2b8L%2F3r3zl4JrWMNva9WyvLze%2BciDfpF8HS7kK1TpOBegDbjzIG7CepqyjXNfK2a9or2I6EkNuBfgHkkAulaRvaaCxeyE1UJJrohTuY%2B%2FwVQ%2BRrUeJCBfxoZuxofoQft1wLFZVo4Odk0EPjC96Qp%2FqDTrN6soAWf14KT2A9Pkuebh5%2FRq60Ijq2ipaCbwj3Gd7fCgGKC&X-Amz-Signature=a31e31d3150342fb637dfd2a8dde0f0b8d4dc5cb8995455eadd246f62822b04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3CK2VQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGmCP6%2Bi9d796SSRgGRIgTav7%2BEhUpWUPsYPB6%2BTapZQIgKrz%2BLjLAkP5jAWoUMLzQj%2FFCTdoGGXUdKHhwLXl0qWUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKJcrqUYMrAJPaXcdyrcAycQTUm4NIencgCyO41LZgRLCjHNpf%2Bw3UtOcUCO0qxUQqhGCpP6dhmy94WOJ2T7iIgX1vygKyPZQ1fhR8C0BskzDDuIMfm0EArTvEc0vBvPmcgYtKPAChLFhc%2BvWDnu0rsWKoC88PnBhnACuO9TtvyYESsGQm%2F1J0Ck8v%2BK9QVbQHJbyNx4iU%2Bm%2Fp%2BamuCOI7d%2Bn8K1g%2BKCGerG%2FUWQMVsZl7W9ejTSaLvPJwlhFKMJRbrhwnQxxYa5f%2BXHHVpOFrRdcULtihIplKU5GZ8yMImmBez724Y7J9naAjnHOicQRSAUz4ikzuq%2BOd1g4us3Q3uXNLvQ2iEe58aFUguMU56CpG5gyCZcf%2BankFl7UUhikj2gbD7aIh0CHcPBXQqZkWsT1rkDVfnWuS6YiRtpf0Wg47MtgjsBdub1Y6ZDCstMslqmYT%2BcoJhaAM6fw9AMYTOPVzc%2B7NGnqHj9HVxBmrjqLX9FGmry%2BaJB%2Fjf6QzPMTnchAwjBSV4MNcI1mA4f2kdxjjRjXkYAbjusM4DVthxGoxAye8U1dy3bY7i%2BkKHIombkjaPBF5TbVRt2oxUoVz%2BA8eonbHN0umwoIZ6cxz5NqMu%2B8pNkBkbd49unlcHwkyvO8FoeJp2kRU94MJ2mu8QGOqUBydIbNXMKdzzjRKeH%2Fr%2FJ2b8L%2F3r3zl4JrWMNva9WyvLze%2BciDfpF8HS7kK1TpOBegDbjzIG7CepqyjXNfK2a9or2I6EkNuBfgHkkAulaRvaaCxeyE1UJJrohTuY%2B%2FwVQ%2BRrUeJCBfxoZuxofoQft1wLFZVo4Odk0EPjC96Qp%2FqDTrN6soAWf14KT2A9Pkuebh5%2FRq60Ijq2ipaCbwj3Gd7fCgGKC&X-Amz-Signature=a1622e6a2c63d23094721fda9e66801e35e5caee99baea0cc0f11540115535e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P3CK2VQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGmCP6%2Bi9d796SSRgGRIgTav7%2BEhUpWUPsYPB6%2BTapZQIgKrz%2BLjLAkP5jAWoUMLzQj%2FFCTdoGGXUdKHhwLXl0qWUq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKJcrqUYMrAJPaXcdyrcAycQTUm4NIencgCyO41LZgRLCjHNpf%2Bw3UtOcUCO0qxUQqhGCpP6dhmy94WOJ2T7iIgX1vygKyPZQ1fhR8C0BskzDDuIMfm0EArTvEc0vBvPmcgYtKPAChLFhc%2BvWDnu0rsWKoC88PnBhnACuO9TtvyYESsGQm%2F1J0Ck8v%2BK9QVbQHJbyNx4iU%2Bm%2Fp%2BamuCOI7d%2Bn8K1g%2BKCGerG%2FUWQMVsZl7W9ejTSaLvPJwlhFKMJRbrhwnQxxYa5f%2BXHHVpOFrRdcULtihIplKU5GZ8yMImmBez724Y7J9naAjnHOicQRSAUz4ikzuq%2BOd1g4us3Q3uXNLvQ2iEe58aFUguMU56CpG5gyCZcf%2BankFl7UUhikj2gbD7aIh0CHcPBXQqZkWsT1rkDVfnWuS6YiRtpf0Wg47MtgjsBdub1Y6ZDCstMslqmYT%2BcoJhaAM6fw9AMYTOPVzc%2B7NGnqHj9HVxBmrjqLX9FGmry%2BaJB%2Fjf6QzPMTnchAwjBSV4MNcI1mA4f2kdxjjRjXkYAbjusM4DVthxGoxAye8U1dy3bY7i%2BkKHIombkjaPBF5TbVRt2oxUoVz%2BA8eonbHN0umwoIZ6cxz5NqMu%2B8pNkBkbd49unlcHwkyvO8FoeJp2kRU94MJ2mu8QGOqUBydIbNXMKdzzjRKeH%2Fr%2FJ2b8L%2F3r3zl4JrWMNva9WyvLze%2BciDfpF8HS7kK1TpOBegDbjzIG7CepqyjXNfK2a9or2I6EkNuBfgHkkAulaRvaaCxeyE1UJJrohTuY%2B%2FwVQ%2BRrUeJCBfxoZuxofoQft1wLFZVo4Odk0EPjC96Qp%2FqDTrN6soAWf14KT2A9Pkuebh5%2FRq60Ijq2ipaCbwj3Gd7fCgGKC&X-Amz-Signature=8082f4e0eb6dce55c353d414e051851ac133ca968455622941c46e8190438fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

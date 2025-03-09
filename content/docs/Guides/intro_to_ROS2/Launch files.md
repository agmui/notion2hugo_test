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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVABMPXM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICs5pk5OMBNlw%2F6FPhrJKSjLrcoDPMLWOTC0quqqZwEtAiEAvt97Ds0LdaC6r7U2fWLmaaABi6Y6z%2F%2F9ZXnRG2hzJ9Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCVG1efMWncW1lrZnCrcA5ewmAy7MCl1RvPCahZ50S4%2BrW%2FFvLv4QF7AOdDtBltqDibB%2BgtcjQ7VLclpGXMc3%2FI6vAHZU9IW1wbfmlxTyvYKWAYrovuNmUkSXR%2B7htWRRjjG0vUj%2B3Aj03SnKivJj71ddDN%2BKeBnmjV25A%2Bjcd1z4V%2BoXlXqck6Y%2FDO2v8IOQMFjhFRiSrygFv71gmmIHluWeCdti4LFzLKSGUbB1aCzGoent8VUuY9OMUrxG2zBRt%2FtytPGDBO44sudstITBJEfyZIOzfw6Imh4q6NHwP3UUGHRAJ0AhaE1TXs1wB8CWukQIpxQS4tfhffULAK3YQuW3ObggWBnJGkFxBtKdyXMQ%2BV%2BCx7b1PUB8%2BMzQoy%2B94qDugz4hkDpoRFFkZzAtimv4Fj1Ou5EQ3Bicc8LwqWgv8H4qgXPU9yfVPsi3kb570lfAIk6%2Fq1vcF0a2AE%2FSQqQb3Ex7tA%2BCgqECvoWMjv5BSQ4xpVRl5oc6%2Bc82JbwKg3rb3cyvlVMaBbzYeBFmitbzS4BNqkXcQXbSTM4tt%2FdKMD4z41mv6YPl73H1Ez6SXWAX72no73tmLSe8Aeh4LielzHmBlM2xKUlj4GnXLULh5Nff20W5NsZf1hWt2IHPd4czP7V1%2BRz67WVMKyHtr4GOqUBDPFdnfXOS1TMVAPg9W0Xmf7nVoJAOw4eA1ME7Nyb0BkyVti%2FoT4erWCoR9v8g%2FrFMC7dwSHo7KquA7kqm4TI%2FcCfxcDk%2BtVEtHpw6RWlxzx7LGlTS57HMWKhUnBDGtyL3TVjpivmoojbVZ%2FizNcayL45l9qKVmPeUW6vxokuF0%2F1LvJOvSIoLBZKlwJ5G0Yn%2Br5HXmfWQnMWaGzentVtQTvTX%2Fx1&X-Amz-Signature=b0dad88cb39d4f63298d487377176b00094c4b965410ff1f67b258813dd21936&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVABMPXM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICs5pk5OMBNlw%2F6FPhrJKSjLrcoDPMLWOTC0quqqZwEtAiEAvt97Ds0LdaC6r7U2fWLmaaABi6Y6z%2F%2F9ZXnRG2hzJ9Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCVG1efMWncW1lrZnCrcA5ewmAy7MCl1RvPCahZ50S4%2BrW%2FFvLv4QF7AOdDtBltqDibB%2BgtcjQ7VLclpGXMc3%2FI6vAHZU9IW1wbfmlxTyvYKWAYrovuNmUkSXR%2B7htWRRjjG0vUj%2B3Aj03SnKivJj71ddDN%2BKeBnmjV25A%2Bjcd1z4V%2BoXlXqck6Y%2FDO2v8IOQMFjhFRiSrygFv71gmmIHluWeCdti4LFzLKSGUbB1aCzGoent8VUuY9OMUrxG2zBRt%2FtytPGDBO44sudstITBJEfyZIOzfw6Imh4q6NHwP3UUGHRAJ0AhaE1TXs1wB8CWukQIpxQS4tfhffULAK3YQuW3ObggWBnJGkFxBtKdyXMQ%2BV%2BCx7b1PUB8%2BMzQoy%2B94qDugz4hkDpoRFFkZzAtimv4Fj1Ou5EQ3Bicc8LwqWgv8H4qgXPU9yfVPsi3kb570lfAIk6%2Fq1vcF0a2AE%2FSQqQb3Ex7tA%2BCgqECvoWMjv5BSQ4xpVRl5oc6%2Bc82JbwKg3rb3cyvlVMaBbzYeBFmitbzS4BNqkXcQXbSTM4tt%2FdKMD4z41mv6YPl73H1Ez6SXWAX72no73tmLSe8Aeh4LielzHmBlM2xKUlj4GnXLULh5Nff20W5NsZf1hWt2IHPd4czP7V1%2BRz67WVMKyHtr4GOqUBDPFdnfXOS1TMVAPg9W0Xmf7nVoJAOw4eA1ME7Nyb0BkyVti%2FoT4erWCoR9v8g%2FrFMC7dwSHo7KquA7kqm4TI%2FcCfxcDk%2BtVEtHpw6RWlxzx7LGlTS57HMWKhUnBDGtyL3TVjpivmoojbVZ%2FizNcayL45l9qKVmPeUW6vxokuF0%2F1LvJOvSIoLBZKlwJ5G0Yn%2Br5HXmfWQnMWaGzentVtQTvTX%2Fx1&X-Amz-Signature=7061b0c61328285dcea23d84b6e71e3fc81e10e9575b55e778e1ea2a6737a675&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVABMPXM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCICs5pk5OMBNlw%2F6FPhrJKSjLrcoDPMLWOTC0quqqZwEtAiEAvt97Ds0LdaC6r7U2fWLmaaABi6Y6z%2F%2F9ZXnRG2hzJ9Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCVG1efMWncW1lrZnCrcA5ewmAy7MCl1RvPCahZ50S4%2BrW%2FFvLv4QF7AOdDtBltqDibB%2BgtcjQ7VLclpGXMc3%2FI6vAHZU9IW1wbfmlxTyvYKWAYrovuNmUkSXR%2B7htWRRjjG0vUj%2B3Aj03SnKivJj71ddDN%2BKeBnmjV25A%2Bjcd1z4V%2BoXlXqck6Y%2FDO2v8IOQMFjhFRiSrygFv71gmmIHluWeCdti4LFzLKSGUbB1aCzGoent8VUuY9OMUrxG2zBRt%2FtytPGDBO44sudstITBJEfyZIOzfw6Imh4q6NHwP3UUGHRAJ0AhaE1TXs1wB8CWukQIpxQS4tfhffULAK3YQuW3ObggWBnJGkFxBtKdyXMQ%2BV%2BCx7b1PUB8%2BMzQoy%2B94qDugz4hkDpoRFFkZzAtimv4Fj1Ou5EQ3Bicc8LwqWgv8H4qgXPU9yfVPsi3kb570lfAIk6%2Fq1vcF0a2AE%2FSQqQb3Ex7tA%2BCgqECvoWMjv5BSQ4xpVRl5oc6%2Bc82JbwKg3rb3cyvlVMaBbzYeBFmitbzS4BNqkXcQXbSTM4tt%2FdKMD4z41mv6YPl73H1Ez6SXWAX72no73tmLSe8Aeh4LielzHmBlM2xKUlj4GnXLULh5Nff20W5NsZf1hWt2IHPd4czP7V1%2BRz67WVMKyHtr4GOqUBDPFdnfXOS1TMVAPg9W0Xmf7nVoJAOw4eA1ME7Nyb0BkyVti%2FoT4erWCoR9v8g%2FrFMC7dwSHo7KquA7kqm4TI%2FcCfxcDk%2BtVEtHpw6RWlxzx7LGlTS57HMWKhUnBDGtyL3TVjpivmoojbVZ%2FizNcayL45l9qKVmPeUW6vxokuF0%2F1LvJOvSIoLBZKlwJ5G0Yn%2Br5HXmfWQnMWaGzentVtQTvTX%2Fx1&X-Amz-Signature=eb9bfdbc5c8c20b7a9d4b29e8f7a4dfc8f99d5703908819990c1413ad8f4bc69&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

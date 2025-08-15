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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P2FMNG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDDtPRp%2BVxFZJ5GPnYwqXNtc3CJr8Jv5Im2c7reNR4lvgIgbMpYATVk0jZ%2BkJA5TOzB7u6NNir7citIn0abHtMTPOgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHJ7D6rx4ew0GCRN5CrcA2viDdhk29XWemMhE%2F2aL9BGsHxHXO46LOLgduGYEk2AGlunOsHiLg8FZ4h3QBjc9ZKbTeb98DSXtQ67OsTC4VumC0gFc1UxWQp0X700tDpEZeE9HqAbLd0%2FNpZEo3Y%2FvzDTNvQhT62tjQzDQVJz4zHI9jiruVdP55DkVCFKtM7WKLg4jBLt8ZI0zrgYGiixDhabBuluACOGRxBKV779UHMK9nBhOSFLkjLPL13ilZaATH%2B%2Bu1UBXl2UKRPkDe2phcHE5AFaQDDfXMhrhI6GbvIhdgg39m43cI8r0qCe2iHTam7ZQVqca7acQGsfPC3Fz5JcuVdbupt%2FQY%2B1dXkMgF1R6uG4Q9tUw3SsevLvmNPzWg%2FLbPgGnZ0WT%2FrUFuXaex5EtWFGfipIBBscyRioxO6U3xEOxVrCTkiPEPUNEnGrcNNVvHK2drKWOl3CmvqnqHe9kS4nPmx8Rl3rkNYrUzk0gXRAfXh2M0q%2FofOcjlVapE9IEf3NhAXu1KNgbgc%2FKEUaO%2FXxY%2FBrv2E8H6%2F2FKaRvYngNlyS16EzDLyr3b1N9wdCwbCdwqAxumiKBfRAomhqGwhGss2Tb3a7DkQKaWQ4qK5QPUYZe4qHQak7GdUFVCiBiKA5Lr%2BuC9yCMLij%2BsQGOqUBJSJcLPt37VCvc50FUESVsuQLLv4kWOyzdt6zQCvCx9clU7O58h47SVW%2FFKAJPDOpwu3QVApa1I%2F%2BuSsqSZSYF5yPxX6vg9fPCcuMxYKG8NK4BN4uBTh39RG2N3iI4E5XNzljzEd4ssRc07Ah2SChUnzPmfatP7rWUjafcVwTUXiXpQ1aZUglGHmbj4p16T7U5H6Y1SqeowwcmB2I1mEpc5EOF01U&X-Amz-Signature=35328838a3a7e9f0b274ae079b05cbcbadb7a9c4790727560975292c50029d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P2FMNG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDDtPRp%2BVxFZJ5GPnYwqXNtc3CJr8Jv5Im2c7reNR4lvgIgbMpYATVk0jZ%2BkJA5TOzB7u6NNir7citIn0abHtMTPOgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHJ7D6rx4ew0GCRN5CrcA2viDdhk29XWemMhE%2F2aL9BGsHxHXO46LOLgduGYEk2AGlunOsHiLg8FZ4h3QBjc9ZKbTeb98DSXtQ67OsTC4VumC0gFc1UxWQp0X700tDpEZeE9HqAbLd0%2FNpZEo3Y%2FvzDTNvQhT62tjQzDQVJz4zHI9jiruVdP55DkVCFKtM7WKLg4jBLt8ZI0zrgYGiixDhabBuluACOGRxBKV779UHMK9nBhOSFLkjLPL13ilZaATH%2B%2Bu1UBXl2UKRPkDe2phcHE5AFaQDDfXMhrhI6GbvIhdgg39m43cI8r0qCe2iHTam7ZQVqca7acQGsfPC3Fz5JcuVdbupt%2FQY%2B1dXkMgF1R6uG4Q9tUw3SsevLvmNPzWg%2FLbPgGnZ0WT%2FrUFuXaex5EtWFGfipIBBscyRioxO6U3xEOxVrCTkiPEPUNEnGrcNNVvHK2drKWOl3CmvqnqHe9kS4nPmx8Rl3rkNYrUzk0gXRAfXh2M0q%2FofOcjlVapE9IEf3NhAXu1KNgbgc%2FKEUaO%2FXxY%2FBrv2E8H6%2F2FKaRvYngNlyS16EzDLyr3b1N9wdCwbCdwqAxumiKBfRAomhqGwhGss2Tb3a7DkQKaWQ4qK5QPUYZe4qHQak7GdUFVCiBiKA5Lr%2BuC9yCMLij%2BsQGOqUBJSJcLPt37VCvc50FUESVsuQLLv4kWOyzdt6zQCvCx9clU7O58h47SVW%2FFKAJPDOpwu3QVApa1I%2F%2BuSsqSZSYF5yPxX6vg9fPCcuMxYKG8NK4BN4uBTh39RG2N3iI4E5XNzljzEd4ssRc07Ah2SChUnzPmfatP7rWUjafcVwTUXiXpQ1aZUglGHmbj4p16T7U5H6Y1SqeowwcmB2I1mEpc5EOF01U&X-Amz-Signature=0868f26449abcdb2d619464ad9e795a2052fd04e6f669151adb35ee2cf46a721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623P2FMNG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T042036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDDtPRp%2BVxFZJ5GPnYwqXNtc3CJr8Jv5Im2c7reNR4lvgIgbMpYATVk0jZ%2BkJA5TOzB7u6NNir7citIn0abHtMTPOgq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDHJ7D6rx4ew0GCRN5CrcA2viDdhk29XWemMhE%2F2aL9BGsHxHXO46LOLgduGYEk2AGlunOsHiLg8FZ4h3QBjc9ZKbTeb98DSXtQ67OsTC4VumC0gFc1UxWQp0X700tDpEZeE9HqAbLd0%2FNpZEo3Y%2FvzDTNvQhT62tjQzDQVJz4zHI9jiruVdP55DkVCFKtM7WKLg4jBLt8ZI0zrgYGiixDhabBuluACOGRxBKV779UHMK9nBhOSFLkjLPL13ilZaATH%2B%2Bu1UBXl2UKRPkDe2phcHE5AFaQDDfXMhrhI6GbvIhdgg39m43cI8r0qCe2iHTam7ZQVqca7acQGsfPC3Fz5JcuVdbupt%2FQY%2B1dXkMgF1R6uG4Q9tUw3SsevLvmNPzWg%2FLbPgGnZ0WT%2FrUFuXaex5EtWFGfipIBBscyRioxO6U3xEOxVrCTkiPEPUNEnGrcNNVvHK2drKWOl3CmvqnqHe9kS4nPmx8Rl3rkNYrUzk0gXRAfXh2M0q%2FofOcjlVapE9IEf3NhAXu1KNgbgc%2FKEUaO%2FXxY%2FBrv2E8H6%2F2FKaRvYngNlyS16EzDLyr3b1N9wdCwbCdwqAxumiKBfRAomhqGwhGss2Tb3a7DkQKaWQ4qK5QPUYZe4qHQak7GdUFVCiBiKA5Lr%2BuC9yCMLij%2BsQGOqUBJSJcLPt37VCvc50FUESVsuQLLv4kWOyzdt6zQCvCx9clU7O58h47SVW%2FFKAJPDOpwu3QVApa1I%2F%2BuSsqSZSYF5yPxX6vg9fPCcuMxYKG8NK4BN4uBTh39RG2N3iI4E5XNzljzEd4ssRc07Ah2SChUnzPmfatP7rWUjafcVwTUXiXpQ1aZUglGHmbj4p16T7U5H6Y1SqeowwcmB2I1mEpc5EOF01U&X-Amz-Signature=160889b71821b05f4a89468712c3408e8fd2e2c727866ce1a8c0b06dbf6bda20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

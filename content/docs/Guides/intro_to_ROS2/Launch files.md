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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOELDN4G%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGt5lmWNrRpxhegy1sc3sMrtS8e47mMKV3KUdBsQtTI8AiAFdQyr7ARFURv5VBGK7ppXz8jBB83gXET%2FkZfMjxaCtyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMfuRRnhTJg7MFSiWWKtwDPWnhBldGmbro6A5NvzhwvJT5mBEi1C8oIulLULpMct11nfDIO6C1MK%2BHx5mLEX2GeoTxlYB5XbvvRxX1MZHT0zLq35XkyTTIcQlp6dMnt0c3kracM1g5CpAKcsJDXAft1KJlf3pLqhxlPngpN9ejRW%2FWLmwXRmFcw2dBIkEgV3IT4OpyHNQuCqN9hT07yFs2L8U%2BJvd7aIx5MgZPHxHPB2VrqAdpN4FPxCtlXGf8Nl%2Fq1nelTFb0rh7yCj4E%2BrQeTxPW%2BRyUoaq9BkjEDcPf%2BHgFJvPI%2BcM%2BYuYyOm741ec8cXSHojVg7n8F2FqKUaq8Nc9%2BcPVStjN1gnT8YrtWv8NRtqex5HnyLmqUvxXsMoNn32h4%2BcKZNNIktfdoxYATFz809ouYiUgHpdLNnLXndaoVHSPQcn7zXXQQWEKmy2aqq3aC31MHDFX8ejsnnq0FFl3Pr9Uf4mb9jEsXb%2FROQ0ITmXp%2B04c3%2FuEDL9pBEa1CHiPqpFTOsk%2BvhTstInESbzemLa%2FXsYbHyZDgutevnwm7Jw%2F1m2manXwjbPTw2j3LJYCY6F1glD7Qrp0TpE9RmqdoCX%2FjxuF9VHOo3Ryb6FF%2BoCQbehYgESPf5iksjG2HuXdYFgdryth2Tzgwy6K4wgY6pgFKpF60uHU3Ac%2BP7dkLUB3l0H85trDYMzWKko4qH4ALq8Wfq7CJWAiVH1yMrMTOleBEABDtg4%2FD%2FnG5ZFBH7Q6A83DjMxjbp1WoPlPuHXfUMXW2gbeCYJC8zSR5DYv%2Bd%2BzrC2l8WUGc01gvze%2FC7Q5LiwwUZN45wZpWBbrRdrJtS4ocYGUmVX2TJJKVimU%2FnlDk2IMNSBd0qU%2F1sVopRYsp1YKKt9vZ&X-Amz-Signature=0f35ed896f29702ca6a321d52ff09bdc8039375eefd6177d55d2fb664053d0cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOELDN4G%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGt5lmWNrRpxhegy1sc3sMrtS8e47mMKV3KUdBsQtTI8AiAFdQyr7ARFURv5VBGK7ppXz8jBB83gXET%2FkZfMjxaCtyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMfuRRnhTJg7MFSiWWKtwDPWnhBldGmbro6A5NvzhwvJT5mBEi1C8oIulLULpMct11nfDIO6C1MK%2BHx5mLEX2GeoTxlYB5XbvvRxX1MZHT0zLq35XkyTTIcQlp6dMnt0c3kracM1g5CpAKcsJDXAft1KJlf3pLqhxlPngpN9ejRW%2FWLmwXRmFcw2dBIkEgV3IT4OpyHNQuCqN9hT07yFs2L8U%2BJvd7aIx5MgZPHxHPB2VrqAdpN4FPxCtlXGf8Nl%2Fq1nelTFb0rh7yCj4E%2BrQeTxPW%2BRyUoaq9BkjEDcPf%2BHgFJvPI%2BcM%2BYuYyOm741ec8cXSHojVg7n8F2FqKUaq8Nc9%2BcPVStjN1gnT8YrtWv8NRtqex5HnyLmqUvxXsMoNn32h4%2BcKZNNIktfdoxYATFz809ouYiUgHpdLNnLXndaoVHSPQcn7zXXQQWEKmy2aqq3aC31MHDFX8ejsnnq0FFl3Pr9Uf4mb9jEsXb%2FROQ0ITmXp%2B04c3%2FuEDL9pBEa1CHiPqpFTOsk%2BvhTstInESbzemLa%2FXsYbHyZDgutevnwm7Jw%2F1m2manXwjbPTw2j3LJYCY6F1glD7Qrp0TpE9RmqdoCX%2FjxuF9VHOo3Ryb6FF%2BoCQbehYgESPf5iksjG2HuXdYFgdryth2Tzgwy6K4wgY6pgFKpF60uHU3Ac%2BP7dkLUB3l0H85trDYMzWKko4qH4ALq8Wfq7CJWAiVH1yMrMTOleBEABDtg4%2FD%2FnG5ZFBH7Q6A83DjMxjbp1WoPlPuHXfUMXW2gbeCYJC8zSR5DYv%2Bd%2BzrC2l8WUGc01gvze%2FC7Q5LiwwUZN45wZpWBbrRdrJtS4ocYGUmVX2TJJKVimU%2FnlDk2IMNSBd0qU%2F1sVopRYsp1YKKt9vZ&X-Amz-Signature=4b093d70fa54d67722be16f4b06ca9d2b0e3b0c38e444c8fcb9de802be2a5cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOELDN4G%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T004832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIGt5lmWNrRpxhegy1sc3sMrtS8e47mMKV3KUdBsQtTI8AiAFdQyr7ARFURv5VBGK7ppXz8jBB83gXET%2FkZfMjxaCtyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMfuRRnhTJg7MFSiWWKtwDPWnhBldGmbro6A5NvzhwvJT5mBEi1C8oIulLULpMct11nfDIO6C1MK%2BHx5mLEX2GeoTxlYB5XbvvRxX1MZHT0zLq35XkyTTIcQlp6dMnt0c3kracM1g5CpAKcsJDXAft1KJlf3pLqhxlPngpN9ejRW%2FWLmwXRmFcw2dBIkEgV3IT4OpyHNQuCqN9hT07yFs2L8U%2BJvd7aIx5MgZPHxHPB2VrqAdpN4FPxCtlXGf8Nl%2Fq1nelTFb0rh7yCj4E%2BrQeTxPW%2BRyUoaq9BkjEDcPf%2BHgFJvPI%2BcM%2BYuYyOm741ec8cXSHojVg7n8F2FqKUaq8Nc9%2BcPVStjN1gnT8YrtWv8NRtqex5HnyLmqUvxXsMoNn32h4%2BcKZNNIktfdoxYATFz809ouYiUgHpdLNnLXndaoVHSPQcn7zXXQQWEKmy2aqq3aC31MHDFX8ejsnnq0FFl3Pr9Uf4mb9jEsXb%2FROQ0ITmXp%2B04c3%2FuEDL9pBEa1CHiPqpFTOsk%2BvhTstInESbzemLa%2FXsYbHyZDgutevnwm7Jw%2F1m2manXwjbPTw2j3LJYCY6F1glD7Qrp0TpE9RmqdoCX%2FjxuF9VHOo3Ryb6FF%2BoCQbehYgESPf5iksjG2HuXdYFgdryth2Tzgwy6K4wgY6pgFKpF60uHU3Ac%2BP7dkLUB3l0H85trDYMzWKko4qH4ALq8Wfq7CJWAiVH1yMrMTOleBEABDtg4%2FD%2FnG5ZFBH7Q6A83DjMxjbp1WoPlPuHXfUMXW2gbeCYJC8zSR5DYv%2Bd%2BzrC2l8WUGc01gvze%2FC7Q5LiwwUZN45wZpWBbrRdrJtS4ocYGUmVX2TJJKVimU%2FnlDk2IMNSBd0qU%2F1sVopRYsp1YKKt9vZ&X-Amz-Signature=768f97f8f2732e7e7cd54453fc7fb90de79f08ba7a32bed4d4a72bd8753ce918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

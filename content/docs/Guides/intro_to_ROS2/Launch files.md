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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPA7XQB4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDTCYHsnU9UzLnLt3Wz2I8HyQ7iN5TnsNJ8679XvOwTcQIgXC0oUWIiFK2SSzdufmmTStuNaDKzbGsAulD4k1L3XcIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIKZD8s8tkjAjWbyNyrcA6wDw7l06e2%2B7g1EN2h1NNa%2FDJXcrYFIA8kqeKvFal6BQkQWZI61WVbJuAAq9Y%2BOjt4Th2xCj16VkJm6U6b4%2FmPAXWYACDicDhheAn0CW5qx5qHz5A5xM44%2BVvfPm7h4p3NY5yr%2FMhPI1LlrnFY4Me0X7y%2F7Xm7bvovP8XnfMqyrZuse5ZlBw2EGMPGwvVvPVtA5nqPlwJS6a%2FHC4EW5u5RJmwW5D1douBHIdFOFLacXx5lrgrV3XL8%2BSbngxlAyb00a384p6bukm%2B4dCFeLrB6IjD4n1A%2B9HzeehpBVLuBa%2Bb0g1f8b6OVyeG6KSyag0gNo7j5y%2FZgyHjcEnfKIKZm0d7X1nOrWRKDA3yutGe6L9XBbV0Gi87I%2F4NQEYsR92F%2BK%2BFi%2B7%2FWFQytKX%2F1BWOxZ7zXswevATYQukPMn5HUU54ArC%2BxRsKnHp3DquztiTC2XKnLVc9ARyGqlCTJvS%2BPwU3cbkOg6neTz%2FsEzwAtS3SWyFsAUX9PQfSvmslR8WcwSVwrTsPMJzIinOLF3cPbzAjovv69Odwn3K6Xhjcd01IbYywQJHw6RQ7t6vxlwLH4O6VyLLfTCOTCVRjsifNNbk6jklrII%2Fn5ke0k1VKo2TJFUaqVcrWtyJu5tMKPSscIGOqUBJ8FfW5HmmWj%2FE3b9PuBw%2FDKTp7b34A2aDHLkC3bgQ4dU4ausr7qGqoEls0C4TrxJgLVyROMjtJyhx1BdqAAnqBnu7UVTaScH2Gxp61%2FjtgEQP3yTkm5d1LsvaTb5XVhZpWg9F98upGpL35MTpwvg4sqmNH4Fle1hEvZ2c1BjuE2NMqYrNCT1qk92dOB3WtT5GtPZAKcHXJoTWXn9JT9j0FzO%2FNWO&X-Amz-Signature=0354840b236ec5094de20706f5ecf50db13414db35de8363b9af8b10cc92871e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPA7XQB4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDTCYHsnU9UzLnLt3Wz2I8HyQ7iN5TnsNJ8679XvOwTcQIgXC0oUWIiFK2SSzdufmmTStuNaDKzbGsAulD4k1L3XcIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIKZD8s8tkjAjWbyNyrcA6wDw7l06e2%2B7g1EN2h1NNa%2FDJXcrYFIA8kqeKvFal6BQkQWZI61WVbJuAAq9Y%2BOjt4Th2xCj16VkJm6U6b4%2FmPAXWYACDicDhheAn0CW5qx5qHz5A5xM44%2BVvfPm7h4p3NY5yr%2FMhPI1LlrnFY4Me0X7y%2F7Xm7bvovP8XnfMqyrZuse5ZlBw2EGMPGwvVvPVtA5nqPlwJS6a%2FHC4EW5u5RJmwW5D1douBHIdFOFLacXx5lrgrV3XL8%2BSbngxlAyb00a384p6bukm%2B4dCFeLrB6IjD4n1A%2B9HzeehpBVLuBa%2Bb0g1f8b6OVyeG6KSyag0gNo7j5y%2FZgyHjcEnfKIKZm0d7X1nOrWRKDA3yutGe6L9XBbV0Gi87I%2F4NQEYsR92F%2BK%2BFi%2B7%2FWFQytKX%2F1BWOxZ7zXswevATYQukPMn5HUU54ArC%2BxRsKnHp3DquztiTC2XKnLVc9ARyGqlCTJvS%2BPwU3cbkOg6neTz%2FsEzwAtS3SWyFsAUX9PQfSvmslR8WcwSVwrTsPMJzIinOLF3cPbzAjovv69Odwn3K6Xhjcd01IbYywQJHw6RQ7t6vxlwLH4O6VyLLfTCOTCVRjsifNNbk6jklrII%2Fn5ke0k1VKo2TJFUaqVcrWtyJu5tMKPSscIGOqUBJ8FfW5HmmWj%2FE3b9PuBw%2FDKTp7b34A2aDHLkC3bgQ4dU4ausr7qGqoEls0C4TrxJgLVyROMjtJyhx1BdqAAnqBnu7UVTaScH2Gxp61%2FjtgEQP3yTkm5d1LsvaTb5XVhZpWg9F98upGpL35MTpwvg4sqmNH4Fle1hEvZ2c1BjuE2NMqYrNCT1qk92dOB3WtT5GtPZAKcHXJoTWXn9JT9j0FzO%2FNWO&X-Amz-Signature=3fe78d831682ef289ff5bb4b5a61ecc46164f580f668639318f0df54c6158c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPA7XQB4%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDTCYHsnU9UzLnLt3Wz2I8HyQ7iN5TnsNJ8679XvOwTcQIgXC0oUWIiFK2SSzdufmmTStuNaDKzbGsAulD4k1L3XcIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIKZD8s8tkjAjWbyNyrcA6wDw7l06e2%2B7g1EN2h1NNa%2FDJXcrYFIA8kqeKvFal6BQkQWZI61WVbJuAAq9Y%2BOjt4Th2xCj16VkJm6U6b4%2FmPAXWYACDicDhheAn0CW5qx5qHz5A5xM44%2BVvfPm7h4p3NY5yr%2FMhPI1LlrnFY4Me0X7y%2F7Xm7bvovP8XnfMqyrZuse5ZlBw2EGMPGwvVvPVtA5nqPlwJS6a%2FHC4EW5u5RJmwW5D1douBHIdFOFLacXx5lrgrV3XL8%2BSbngxlAyb00a384p6bukm%2B4dCFeLrB6IjD4n1A%2B9HzeehpBVLuBa%2Bb0g1f8b6OVyeG6KSyag0gNo7j5y%2FZgyHjcEnfKIKZm0d7X1nOrWRKDA3yutGe6L9XBbV0Gi87I%2F4NQEYsR92F%2BK%2BFi%2B7%2FWFQytKX%2F1BWOxZ7zXswevATYQukPMn5HUU54ArC%2BxRsKnHp3DquztiTC2XKnLVc9ARyGqlCTJvS%2BPwU3cbkOg6neTz%2FsEzwAtS3SWyFsAUX9PQfSvmslR8WcwSVwrTsPMJzIinOLF3cPbzAjovv69Odwn3K6Xhjcd01IbYywQJHw6RQ7t6vxlwLH4O6VyLLfTCOTCVRjsifNNbk6jklrII%2Fn5ke0k1VKo2TJFUaqVcrWtyJu5tMKPSscIGOqUBJ8FfW5HmmWj%2FE3b9PuBw%2FDKTp7b34A2aDHLkC3bgQ4dU4ausr7qGqoEls0C4TrxJgLVyROMjtJyhx1BdqAAnqBnu7UVTaScH2Gxp61%2FjtgEQP3yTkm5d1LsvaTb5XVhZpWg9F98upGpL35MTpwvg4sqmNH4Fle1hEvZ2c1BjuE2NMqYrNCT1qk92dOB3WtT5GtPZAKcHXJoTWXn9JT9j0FzO%2FNWO&X-Amz-Signature=1531cd6a89b4c6666acfb1efd4e6cb723a86535e7d62ac90b4ea008898a0ca28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

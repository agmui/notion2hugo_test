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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPT6BB46%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIE9Ycs%2FfhG4Zv8nl%2BdfY2TLFQoCko9ZCkZhyHyENPG8RAiBOjLPPnEyIBf5fM2L8MQaOyL43B5Kc%2BDNlYBKpsH2emyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMtOtCfihJUpgXt6jdKtwDRXpKm5PrrVnN3IXFLld1jFXU3ccJINsd0Jc5lwmX7%2B0m6gn2ZFVn6o43oUOba2Ro%2BBtzCW0NGSm3i800a8mJu92UaeFJ6aaA4rV3%2FiNuycs3aDn0NLO4EfI1NeTyC5QP28sk5pT6TobWg6vRCMrRBVXpmB4F2DG2jkBpRm3IqFxmVHfG3SVqAdxQyaj7L2%2FqNiQJcMtoR%2FuA2Bk%2B2eg9aiNejdIiyB%2BLKZ4H6kS8kh8HJvLMTRz%2F7dJRzc1dXM7p3GdCIwvFkc7Va4K2m7S4YNGaB2A6Z550EQMRKCXnTVr2eT223dZHHUbw0S6DjdIiDA%2BeVrGYWdDhsfGz0jLSdEd0iO0IfT%2BJsm4tOB03mNkgQehdWz2hLLIdgOz8cB6SR%2BRC7iChJEkfS1XFutk998vdZ%2B%2Bib4jJrvdit5cBki3eu%2FN5FC%2BVEqDFO8rry7mq%2F9vdhBCpVSAGlxijLrQS8InCH9pKt4w0OI1V35JwmLONVh%2Bo%2B52lpZp%2BPDThuW%2FzqiksPpSTQIcQhqLxA2E3j0qatLjUk6ZbjcKCpo3ui6MEWpUwAl%2BRh7nossyNPICw1He9W9s6K7vbQ8ljrhjOaaWnh4pRWkyKbHXmaFbvzC4Jxe948lu2Lt84P2cwkIrdwAY6pgHQqmiRXTPn9XEHJ8SmjZ6c7aPqMCBUtTwFv5BSLSsr9qfj75NirYZp4fHKaUCc5Gf%2BhPe6NHGMDSSlIf1qiV%2F1kEeFkGqrxjV5lyIj2VNNgBrQA4Fc9kj8A3Btw39wpVvsxanAcNcZlYHo9ZIfugE9Ws7mgs0bwJxVz1t7bUSthZHSUSd2kkg3BcdV3GG5NPaJdZ7qJGnKe9b5V8ircThaBcmgRS33&X-Amz-Signature=e84b03fb40c234d895b8427122e446dda1efdebd2acef54af6c7295f1ca6cf39&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPT6BB46%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIE9Ycs%2FfhG4Zv8nl%2BdfY2TLFQoCko9ZCkZhyHyENPG8RAiBOjLPPnEyIBf5fM2L8MQaOyL43B5Kc%2BDNlYBKpsH2emyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMtOtCfihJUpgXt6jdKtwDRXpKm5PrrVnN3IXFLld1jFXU3ccJINsd0Jc5lwmX7%2B0m6gn2ZFVn6o43oUOba2Ro%2BBtzCW0NGSm3i800a8mJu92UaeFJ6aaA4rV3%2FiNuycs3aDn0NLO4EfI1NeTyC5QP28sk5pT6TobWg6vRCMrRBVXpmB4F2DG2jkBpRm3IqFxmVHfG3SVqAdxQyaj7L2%2FqNiQJcMtoR%2FuA2Bk%2B2eg9aiNejdIiyB%2BLKZ4H6kS8kh8HJvLMTRz%2F7dJRzc1dXM7p3GdCIwvFkc7Va4K2m7S4YNGaB2A6Z550EQMRKCXnTVr2eT223dZHHUbw0S6DjdIiDA%2BeVrGYWdDhsfGz0jLSdEd0iO0IfT%2BJsm4tOB03mNkgQehdWz2hLLIdgOz8cB6SR%2BRC7iChJEkfS1XFutk998vdZ%2B%2Bib4jJrvdit5cBki3eu%2FN5FC%2BVEqDFO8rry7mq%2F9vdhBCpVSAGlxijLrQS8InCH9pKt4w0OI1V35JwmLONVh%2Bo%2B52lpZp%2BPDThuW%2FzqiksPpSTQIcQhqLxA2E3j0qatLjUk6ZbjcKCpo3ui6MEWpUwAl%2BRh7nossyNPICw1He9W9s6K7vbQ8ljrhjOaaWnh4pRWkyKbHXmaFbvzC4Jxe948lu2Lt84P2cwkIrdwAY6pgHQqmiRXTPn9XEHJ8SmjZ6c7aPqMCBUtTwFv5BSLSsr9qfj75NirYZp4fHKaUCc5Gf%2BhPe6NHGMDSSlIf1qiV%2F1kEeFkGqrxjV5lyIj2VNNgBrQA4Fc9kj8A3Btw39wpVvsxanAcNcZlYHo9ZIfugE9Ws7mgs0bwJxVz1t7bUSthZHSUSd2kkg3BcdV3GG5NPaJdZ7qJGnKe9b5V8ircThaBcmgRS33&X-Amz-Signature=faba2619ded13aed93486477f91f906f31a43906e4a1baab12cca3e88042ab62&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPT6BB46%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T131701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIE9Ycs%2FfhG4Zv8nl%2BdfY2TLFQoCko9ZCkZhyHyENPG8RAiBOjLPPnEyIBf5fM2L8MQaOyL43B5Kc%2BDNlYBKpsH2emyr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIMtOtCfihJUpgXt6jdKtwDRXpKm5PrrVnN3IXFLld1jFXU3ccJINsd0Jc5lwmX7%2B0m6gn2ZFVn6o43oUOba2Ro%2BBtzCW0NGSm3i800a8mJu92UaeFJ6aaA4rV3%2FiNuycs3aDn0NLO4EfI1NeTyC5QP28sk5pT6TobWg6vRCMrRBVXpmB4F2DG2jkBpRm3IqFxmVHfG3SVqAdxQyaj7L2%2FqNiQJcMtoR%2FuA2Bk%2B2eg9aiNejdIiyB%2BLKZ4H6kS8kh8HJvLMTRz%2F7dJRzc1dXM7p3GdCIwvFkc7Va4K2m7S4YNGaB2A6Z550EQMRKCXnTVr2eT223dZHHUbw0S6DjdIiDA%2BeVrGYWdDhsfGz0jLSdEd0iO0IfT%2BJsm4tOB03mNkgQehdWz2hLLIdgOz8cB6SR%2BRC7iChJEkfS1XFutk998vdZ%2B%2Bib4jJrvdit5cBki3eu%2FN5FC%2BVEqDFO8rry7mq%2F9vdhBCpVSAGlxijLrQS8InCH9pKt4w0OI1V35JwmLONVh%2Bo%2B52lpZp%2BPDThuW%2FzqiksPpSTQIcQhqLxA2E3j0qatLjUk6ZbjcKCpo3ui6MEWpUwAl%2BRh7nossyNPICw1He9W9s6K7vbQ8ljrhjOaaWnh4pRWkyKbHXmaFbvzC4Jxe948lu2Lt84P2cwkIrdwAY6pgHQqmiRXTPn9XEHJ8SmjZ6c7aPqMCBUtTwFv5BSLSsr9qfj75NirYZp4fHKaUCc5Gf%2BhPe6NHGMDSSlIf1qiV%2F1kEeFkGqrxjV5lyIj2VNNgBrQA4Fc9kj8A3Btw39wpVvsxanAcNcZlYHo9ZIfugE9Ws7mgs0bwJxVz1t7bUSthZHSUSd2kkg3BcdV3GG5NPaJdZ7qJGnKe9b5V8ircThaBcmgRS33&X-Amz-Signature=863fec0879a543aa78003ca83aeee388d88328dc884233a771aa981209247947&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

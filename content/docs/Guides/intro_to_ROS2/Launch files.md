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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCZTLM5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIF%2BfD71RN0%2BNA4PFlz1fOA3hq0FUp%2FbWZFqrz0FKJbfTAiEAyhJMfghQ2kmE2TQ%2BE2wzDNMz42L1pXR5P7CjxqEYQhsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZYuqtiWNhrYR8jlSrcA0ai%2FWXCcWEBNzmBtxbAUkxXHorKXOqXSXrylnUxNDDfU9S1fd0EVfwwElGuOdsmads3XSEKZfyy50gl%2BZoXacTAsOWJA7zoO0ET7a8MIYQs0kDqtE8U%2F2XqIF6JOkc5KB7471xFBOFfd0x90Rgw%2B2Ead0Z3kiGJCClLDkVTsXLOB97k%2FzGrq1dzbVW8CI0IDwpKNSX4Ly4R0RhGbsCB321PcvAUtxaLWjonG9cyl6wsBW0oh7fNeBfBgimP7mpvtU1rikgD5eMWKnyigwz8JNrWh%2BXoi5zefNS3kc%2FI23frYP0xs%2FO9Mzt3MgQraiTo54iHdnZXUWyquPXwxcQmlNoNoyc6zBjZ9qRozlbKS0YT9bd6QCTZKNXgJngWsp3xJe1xilzfhEyUsMUZe3J3N5%2BN5G4qAfXHLID6%2BseKaMuMExiHy1rF8pRKIJY1SfxEQVAHqh1WKRZBEvN7e8a3CXvsOXXZwlOevNFMR3rG3LR5XEiTXFcpXChJFyPeczcIxzKrxtoP%2BjpjQPyIxyK4puiZztskPM5dZeDiE0XmcN0l11X9XNdml%2BAuuDQ13r1e5PgfLB5jf1KYWDQjRTeYx05CXJpe7%2BbrjEGhs1qQWMfpD8nuVx9kr1Zk%2FKA2MM%2FblcAGOqUB55kCORfpkM7DJ8w3kdjD3OcrxhgrZkjoOQhn8DNip%2Bzhog9UWC2Td0RY1JngMVLAkL2MzL6KhMhPKM0B4dk9CGvMSZn7XGWc%2Fp0ZjQKH24e3QhOwLgTAhALPjikKcrko%2Fm%2FJVoQM%2FOUP%2FOAhbmwfBlW5bcz9GSmb0qqubulxefUi4HrErA%2BuNxV2q6BsDZUMLOXietQXuclzemJnNSs%2BA0B2Thr4&X-Amz-Signature=d27a5961164f6df7a1184f50e0e164fbc84da95bc13990f4a63600446177e481&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCZTLM5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIF%2BfD71RN0%2BNA4PFlz1fOA3hq0FUp%2FbWZFqrz0FKJbfTAiEAyhJMfghQ2kmE2TQ%2BE2wzDNMz42L1pXR5P7CjxqEYQhsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZYuqtiWNhrYR8jlSrcA0ai%2FWXCcWEBNzmBtxbAUkxXHorKXOqXSXrylnUxNDDfU9S1fd0EVfwwElGuOdsmads3XSEKZfyy50gl%2BZoXacTAsOWJA7zoO0ET7a8MIYQs0kDqtE8U%2F2XqIF6JOkc5KB7471xFBOFfd0x90Rgw%2B2Ead0Z3kiGJCClLDkVTsXLOB97k%2FzGrq1dzbVW8CI0IDwpKNSX4Ly4R0RhGbsCB321PcvAUtxaLWjonG9cyl6wsBW0oh7fNeBfBgimP7mpvtU1rikgD5eMWKnyigwz8JNrWh%2BXoi5zefNS3kc%2FI23frYP0xs%2FO9Mzt3MgQraiTo54iHdnZXUWyquPXwxcQmlNoNoyc6zBjZ9qRozlbKS0YT9bd6QCTZKNXgJngWsp3xJe1xilzfhEyUsMUZe3J3N5%2BN5G4qAfXHLID6%2BseKaMuMExiHy1rF8pRKIJY1SfxEQVAHqh1WKRZBEvN7e8a3CXvsOXXZwlOevNFMR3rG3LR5XEiTXFcpXChJFyPeczcIxzKrxtoP%2BjpjQPyIxyK4puiZztskPM5dZeDiE0XmcN0l11X9XNdml%2BAuuDQ13r1e5PgfLB5jf1KYWDQjRTeYx05CXJpe7%2BbrjEGhs1qQWMfpD8nuVx9kr1Zk%2FKA2MM%2FblcAGOqUB55kCORfpkM7DJ8w3kdjD3OcrxhgrZkjoOQhn8DNip%2Bzhog9UWC2Td0RY1JngMVLAkL2MzL6KhMhPKM0B4dk9CGvMSZn7XGWc%2Fp0ZjQKH24e3QhOwLgTAhALPjikKcrko%2Fm%2FJVoQM%2FOUP%2FOAhbmwfBlW5bcz9GSmb0qqubulxefUi4HrErA%2BuNxV2q6BsDZUMLOXietQXuclzemJnNSs%2BA0B2Thr4&X-Amz-Signature=8a8d99462b14378eb92c6b6ceb2b79f57991934828ccfff235d256ccd07ce186&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCZTLM5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIF%2BfD71RN0%2BNA4PFlz1fOA3hq0FUp%2FbWZFqrz0FKJbfTAiEAyhJMfghQ2kmE2TQ%2BE2wzDNMz42L1pXR5P7CjxqEYQhsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZYuqtiWNhrYR8jlSrcA0ai%2FWXCcWEBNzmBtxbAUkxXHorKXOqXSXrylnUxNDDfU9S1fd0EVfwwElGuOdsmads3XSEKZfyy50gl%2BZoXacTAsOWJA7zoO0ET7a8MIYQs0kDqtE8U%2F2XqIF6JOkc5KB7471xFBOFfd0x90Rgw%2B2Ead0Z3kiGJCClLDkVTsXLOB97k%2FzGrq1dzbVW8CI0IDwpKNSX4Ly4R0RhGbsCB321PcvAUtxaLWjonG9cyl6wsBW0oh7fNeBfBgimP7mpvtU1rikgD5eMWKnyigwz8JNrWh%2BXoi5zefNS3kc%2FI23frYP0xs%2FO9Mzt3MgQraiTo54iHdnZXUWyquPXwxcQmlNoNoyc6zBjZ9qRozlbKS0YT9bd6QCTZKNXgJngWsp3xJe1xilzfhEyUsMUZe3J3N5%2BN5G4qAfXHLID6%2BseKaMuMExiHy1rF8pRKIJY1SfxEQVAHqh1WKRZBEvN7e8a3CXvsOXXZwlOevNFMR3rG3LR5XEiTXFcpXChJFyPeczcIxzKrxtoP%2BjpjQPyIxyK4puiZztskPM5dZeDiE0XmcN0l11X9XNdml%2BAuuDQ13r1e5PgfLB5jf1KYWDQjRTeYx05CXJpe7%2BbrjEGhs1qQWMfpD8nuVx9kr1Zk%2FKA2MM%2FblcAGOqUB55kCORfpkM7DJ8w3kdjD3OcrxhgrZkjoOQhn8DNip%2Bzhog9UWC2Td0RY1JngMVLAkL2MzL6KhMhPKM0B4dk9CGvMSZn7XGWc%2Fp0ZjQKH24e3QhOwLgTAhALPjikKcrko%2Fm%2FJVoQM%2FOUP%2FOAhbmwfBlW5bcz9GSmb0qqubulxefUi4HrErA%2BuNxV2q6BsDZUMLOXietQXuclzemJnNSs%2BA0B2Thr4&X-Amz-Signature=70d82a50ababa589c58c80ebe16302626751a8c4d840e55e369e57a80b304f79&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

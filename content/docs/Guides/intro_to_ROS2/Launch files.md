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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOELZE2T%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDQtPn4na%2BDGMR%2FjqmsFqAlhz1r0xm9AbLxW5z7qgbSEAiATuT91KcnGS9OPNAdjd%2BEsJjCcz2hwmwqaaj1Oqx9glSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM7jXOTG1VhkqDY%2FIWKtwDSNXmI3%2Fcq15VTTWWtqPRtGmKvx%2Fx25lwWDMhiObibA2Ut1EF429Mpr9q6WGCLlc4ukB%2FGPZE%2BnCSt18vL8S9qsmUWXzvLD3Kg970ZTqi2zk9sL3tZLOmhTrYYTXajPpUVHNQIvtWGY84IdR6QeDbih1FqZPcy6qlQu5wTYUUJgU1w7t2qHyyNoqJ5yZGZgKrV51dloYScnR%2BP9gbMcIO0LhuZ4nQZtapjdMmp67VbX8cvCI1BNt%2BYefhvo8Zu4UfNNyikBFCNt6XMIG4x4ArVs5s%2FLopfinYahMh0zpoa1JIrqMie%2BsaWu2lU8hLFd4wK0v0fkiVRhRS7eqhPtltJQ4aWD9ucArgxZszr%2F%2B%2F04H%2Bx9pkYn2v2woqrMHRqLHaw7lK8drL3ezgoA7S702BnRAvOATN4Gct4GzyHntg2SWc7hlvoVQvV3EwxJ%2FGWL%2FD1BoXDuV2SLVopy3xLoMQBoQJV6KR9pxnz94r%2FbzgBFy3hFVdjFn03c1xY%2FstgqYzPHV8OYsrDr5LwecTXjW9e%2BjrNxVlLnPK3hSKrttEGMpoFaPs5UWgSFlM869gXaW1E16QTFGcKmg5GAKmh66%2FYGJ3F9t7UnJaO04JDXCKbK0D0ArM9EPZugXbD%2BAwpvXNwQY6pgGFElYFNpIxpRk6PjVq41R9gbVeftQHIFbqTSib7aFDCoEFEBGc6%2Ft1s3VAngQhf4Ix%2BLNOhlleqziZNy46x%2Fj%2ByWNk%2F6P7SXJ2xcolpIVGbNqEeZYeSa1ozWpqVhJsNcmYn2R%2F1dEt%2F5Jj8R%2FyVaprM37svScANxlp0981%2BzGen%2Bus3B1DUyTv9j05wEDSG8x0R%2BSUmGrQoJeQ1vq8n%2F0yq%2FW1x9bz&X-Amz-Signature=2051838bc18c30c093446a7c8a40eb2efd166c9853ba69a3c0315021e9cc0c14&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOELZE2T%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDQtPn4na%2BDGMR%2FjqmsFqAlhz1r0xm9AbLxW5z7qgbSEAiATuT91KcnGS9OPNAdjd%2BEsJjCcz2hwmwqaaj1Oqx9glSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM7jXOTG1VhkqDY%2FIWKtwDSNXmI3%2Fcq15VTTWWtqPRtGmKvx%2Fx25lwWDMhiObibA2Ut1EF429Mpr9q6WGCLlc4ukB%2FGPZE%2BnCSt18vL8S9qsmUWXzvLD3Kg970ZTqi2zk9sL3tZLOmhTrYYTXajPpUVHNQIvtWGY84IdR6QeDbih1FqZPcy6qlQu5wTYUUJgU1w7t2qHyyNoqJ5yZGZgKrV51dloYScnR%2BP9gbMcIO0LhuZ4nQZtapjdMmp67VbX8cvCI1BNt%2BYefhvo8Zu4UfNNyikBFCNt6XMIG4x4ArVs5s%2FLopfinYahMh0zpoa1JIrqMie%2BsaWu2lU8hLFd4wK0v0fkiVRhRS7eqhPtltJQ4aWD9ucArgxZszr%2F%2B%2F04H%2Bx9pkYn2v2woqrMHRqLHaw7lK8drL3ezgoA7S702BnRAvOATN4Gct4GzyHntg2SWc7hlvoVQvV3EwxJ%2FGWL%2FD1BoXDuV2SLVopy3xLoMQBoQJV6KR9pxnz94r%2FbzgBFy3hFVdjFn03c1xY%2FstgqYzPHV8OYsrDr5LwecTXjW9e%2BjrNxVlLnPK3hSKrttEGMpoFaPs5UWgSFlM869gXaW1E16QTFGcKmg5GAKmh66%2FYGJ3F9t7UnJaO04JDXCKbK0D0ArM9EPZugXbD%2BAwpvXNwQY6pgGFElYFNpIxpRk6PjVq41R9gbVeftQHIFbqTSib7aFDCoEFEBGc6%2Ft1s3VAngQhf4Ix%2BLNOhlleqziZNy46x%2Fj%2ByWNk%2F6P7SXJ2xcolpIVGbNqEeZYeSa1ozWpqVhJsNcmYn2R%2F1dEt%2F5Jj8R%2FyVaprM37svScANxlp0981%2BzGen%2Bus3B1DUyTv9j05wEDSG8x0R%2BSUmGrQoJeQ1vq8n%2F0yq%2FW1x9bz&X-Amz-Signature=807c48684e5268a43d41fa5fe2a0b00ec39eea0402889bcb1ed2aae63f6b876d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOELZE2T%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDQtPn4na%2BDGMR%2FjqmsFqAlhz1r0xm9AbLxW5z7qgbSEAiATuT91KcnGS9OPNAdjd%2BEsJjCcz2hwmwqaaj1Oqx9glSr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIM7jXOTG1VhkqDY%2FIWKtwDSNXmI3%2Fcq15VTTWWtqPRtGmKvx%2Fx25lwWDMhiObibA2Ut1EF429Mpr9q6WGCLlc4ukB%2FGPZE%2BnCSt18vL8S9qsmUWXzvLD3Kg970ZTqi2zk9sL3tZLOmhTrYYTXajPpUVHNQIvtWGY84IdR6QeDbih1FqZPcy6qlQu5wTYUUJgU1w7t2qHyyNoqJ5yZGZgKrV51dloYScnR%2BP9gbMcIO0LhuZ4nQZtapjdMmp67VbX8cvCI1BNt%2BYefhvo8Zu4UfNNyikBFCNt6XMIG4x4ArVs5s%2FLopfinYahMh0zpoa1JIrqMie%2BsaWu2lU8hLFd4wK0v0fkiVRhRS7eqhPtltJQ4aWD9ucArgxZszr%2F%2B%2F04H%2Bx9pkYn2v2woqrMHRqLHaw7lK8drL3ezgoA7S702BnRAvOATN4Gct4GzyHntg2SWc7hlvoVQvV3EwxJ%2FGWL%2FD1BoXDuV2SLVopy3xLoMQBoQJV6KR9pxnz94r%2FbzgBFy3hFVdjFn03c1xY%2FstgqYzPHV8OYsrDr5LwecTXjW9e%2BjrNxVlLnPK3hSKrttEGMpoFaPs5UWgSFlM869gXaW1E16QTFGcKmg5GAKmh66%2FYGJ3F9t7UnJaO04JDXCKbK0D0ArM9EPZugXbD%2BAwpvXNwQY6pgGFElYFNpIxpRk6PjVq41R9gbVeftQHIFbqTSib7aFDCoEFEBGc6%2Ft1s3VAngQhf4Ix%2BLNOhlleqziZNy46x%2Fj%2ByWNk%2F6P7SXJ2xcolpIVGbNqEeZYeSa1ozWpqVhJsNcmYn2R%2F1dEt%2F5Jj8R%2FyVaprM37svScANxlp0981%2BzGen%2Bus3B1DUyTv9j05wEDSG8x0R%2BSUmGrQoJeQ1vq8n%2F0yq%2FW1x9bz&X-Amz-Signature=37400af407d3dc7ea612a68e7ea648610c5f67b59e5c364a30e277a2247e5c95&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

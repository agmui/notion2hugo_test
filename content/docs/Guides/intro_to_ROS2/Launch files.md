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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKSL2AV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDffoSH4cQRIdvBv5FhVPiUovUO%2FtExCbraNH4WeR1zQIgfW4oTX84KzlFfCBHs%2FKBxA6jrOwO14MmkVFamUKLwT4qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDButkSO9DWEIAXrMtyrcAzMQvcTYtIo4q83op7Rps5eCv0s0vIqZe8px2XaZ%2BTPmQS18ME4SYVUsIqCo2qUQ3YWPtLkojRtKhJiVYq7fNuY5524bETd6oCmdT31VEfBjyXt4YiDOC6U9ENHl8RRmCeJNS9rV8r65B3Q%2FIpW5rFit42H2csSGluTm2WDJRfwgTltEKar0wP%2B9iSesjLUOPxeYz5B5RuqcDFBAkpczbpXwxToNhywVeudkKwG4CUVAJCtNpb%2FELVHa%2FeG%2BBiGfDZ9MVbIcgog3L9tngXBKLWWkiNosmgbJzKsjacLcLFghvyfWI9MOyf9u4LE3F1HnzbeYdJYoTqbde2YYv2eBHHwwVPNmu6ovsBi8oU1FQWF3S88fXo2hi0z%2F%2FINVz2rCXziIdOcGnDqk8ijOIlwIBXI0K9fY7wZZrYKIO%2FUeuuv%2F2gSyCLFw8J6wfErCZq2P7PqczsSECVrI8H%2Bi3zvASO4AroEqp4IRX%2BX1ErWDD437mTx9DC5oUQl%2BlWHA6Yusrhpi3CHB%2B4sTtqd75BJcyGp8f08deyu9kbcv5nBb2QDlL6WJsAGq%2FN9b661wGLu%2BowQdgRe0Zjm4OI118jb%2BwP%2BUWrasu11oLIxa%2Flu2hJF%2B9XPwyxHnWEun9t0sMImHkMMGOqUBAiiQvdfoAyoz4BLkOTdb%2B3IxwhkZsbMBL48EOvZWl8q9rFuCtODFjxg7zHfaGCX5saALvhAfhvyGp%2BITAdNLyS2bdI3bj2T3%2BBdWpAazcfAg1oCzgbU38Te47LyW%2BwlVjcUF4IpQJmaXROXP04Xjut0VRO3CiPqvnNtk%2Bz7Ost99jGVuw4FDa%2BIPkauXF7U2wQaih%2FFezaUSF1Pdze6bvUEyDMIF&X-Amz-Signature=a4fcd73e2383a45dac60c8cef5744d545595e03296edb7ee8db64d2a011d55bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKSL2AV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDffoSH4cQRIdvBv5FhVPiUovUO%2FtExCbraNH4WeR1zQIgfW4oTX84KzlFfCBHs%2FKBxA6jrOwO14MmkVFamUKLwT4qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDButkSO9DWEIAXrMtyrcAzMQvcTYtIo4q83op7Rps5eCv0s0vIqZe8px2XaZ%2BTPmQS18ME4SYVUsIqCo2qUQ3YWPtLkojRtKhJiVYq7fNuY5524bETd6oCmdT31VEfBjyXt4YiDOC6U9ENHl8RRmCeJNS9rV8r65B3Q%2FIpW5rFit42H2csSGluTm2WDJRfwgTltEKar0wP%2B9iSesjLUOPxeYz5B5RuqcDFBAkpczbpXwxToNhywVeudkKwG4CUVAJCtNpb%2FELVHa%2FeG%2BBiGfDZ9MVbIcgog3L9tngXBKLWWkiNosmgbJzKsjacLcLFghvyfWI9MOyf9u4LE3F1HnzbeYdJYoTqbde2YYv2eBHHwwVPNmu6ovsBi8oU1FQWF3S88fXo2hi0z%2F%2FINVz2rCXziIdOcGnDqk8ijOIlwIBXI0K9fY7wZZrYKIO%2FUeuuv%2F2gSyCLFw8J6wfErCZq2P7PqczsSECVrI8H%2Bi3zvASO4AroEqp4IRX%2BX1ErWDD437mTx9DC5oUQl%2BlWHA6Yusrhpi3CHB%2B4sTtqd75BJcyGp8f08deyu9kbcv5nBb2QDlL6WJsAGq%2FN9b661wGLu%2BowQdgRe0Zjm4OI118jb%2BwP%2BUWrasu11oLIxa%2Flu2hJF%2B9XPwyxHnWEun9t0sMImHkMMGOqUBAiiQvdfoAyoz4BLkOTdb%2B3IxwhkZsbMBL48EOvZWl8q9rFuCtODFjxg7zHfaGCX5saALvhAfhvyGp%2BITAdNLyS2bdI3bj2T3%2BBdWpAazcfAg1oCzgbU38Te47LyW%2BwlVjcUF4IpQJmaXROXP04Xjut0VRO3CiPqvnNtk%2Bz7Ost99jGVuw4FDa%2BIPkauXF7U2wQaih%2FFezaUSF1Pdze6bvUEyDMIF&X-Amz-Signature=a6ab0d168cdbbef37d4225f6bc4ed33ba3362007503abd749a1f2ea0c1c6766f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKSL2AV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T161134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDffoSH4cQRIdvBv5FhVPiUovUO%2FtExCbraNH4WeR1zQIgfW4oTX84KzlFfCBHs%2FKBxA6jrOwO14MmkVFamUKLwT4qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDButkSO9DWEIAXrMtyrcAzMQvcTYtIo4q83op7Rps5eCv0s0vIqZe8px2XaZ%2BTPmQS18ME4SYVUsIqCo2qUQ3YWPtLkojRtKhJiVYq7fNuY5524bETd6oCmdT31VEfBjyXt4YiDOC6U9ENHl8RRmCeJNS9rV8r65B3Q%2FIpW5rFit42H2csSGluTm2WDJRfwgTltEKar0wP%2B9iSesjLUOPxeYz5B5RuqcDFBAkpczbpXwxToNhywVeudkKwG4CUVAJCtNpb%2FELVHa%2FeG%2BBiGfDZ9MVbIcgog3L9tngXBKLWWkiNosmgbJzKsjacLcLFghvyfWI9MOyf9u4LE3F1HnzbeYdJYoTqbde2YYv2eBHHwwVPNmu6ovsBi8oU1FQWF3S88fXo2hi0z%2F%2FINVz2rCXziIdOcGnDqk8ijOIlwIBXI0K9fY7wZZrYKIO%2FUeuuv%2F2gSyCLFw8J6wfErCZq2P7PqczsSECVrI8H%2Bi3zvASO4AroEqp4IRX%2BX1ErWDD437mTx9DC5oUQl%2BlWHA6Yusrhpi3CHB%2B4sTtqd75BJcyGp8f08deyu9kbcv5nBb2QDlL6WJsAGq%2FN9b661wGLu%2BowQdgRe0Zjm4OI118jb%2BwP%2BUWrasu11oLIxa%2Flu2hJF%2B9XPwyxHnWEun9t0sMImHkMMGOqUBAiiQvdfoAyoz4BLkOTdb%2B3IxwhkZsbMBL48EOvZWl8q9rFuCtODFjxg7zHfaGCX5saALvhAfhvyGp%2BITAdNLyS2bdI3bj2T3%2BBdWpAazcfAg1oCzgbU38Te47LyW%2BwlVjcUF4IpQJmaXROXP04Xjut0VRO3CiPqvnNtk%2Bz7Ost99jGVuw4FDa%2BIPkauXF7U2wQaih%2FFezaUSF1Pdze6bvUEyDMIF&X-Amz-Signature=73b0f45748a37964d8a87553586bda559a660191f48e280eac97b4842977491d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IWXIK3Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIEnoeY1rE%2FA4bjkET1jGMG4I0041HGiQ3ODsgPm5RU7nAiA6%2FQ6d4%2FvSfK6qaBQ%2BHEKSh4SvLEiWjzIWMXyg24bbuir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMWptibqTDFccy73JeKtwDQEEwvZQUYUBAS3nn2N9RVgqqjaMj0lKMwgJDa74SGZM3d3pUzAIx4XjTM%2BoTWplNRGgIYiu9d8NXJajANSJuyETlinEPQHLeZ98UlF6d2tsmSipZDyc2VO8hQNwtRMKKA53Ymw6YYVlJTciMuTN31w6L724d7rxCHquTPFUHRJlKRLtyyc0R6h9IQcMIWWhEO%2BQFHT8%2FwzOsauZoSNHZVo9caji4D8ONbXjqltlthtN40icP%2FFRn1kbsgiGzldanxs66dvVoIG1h8dhoSwmUY7AENC%2B46dnvaUEyaKVYDRTNQ8d9gtwCofycCWKc%2FC%2BJUfdkwsxYT5hkKGbJYq6zc%2BxRZQebSqnhL%2B9XPEZa3f7M1FuwEFpPKuGZBi%2B4EiQB3k0idNEiEdp%2BjJQQc8vd7BbfwT2%2FLaiJSv2%2FUHEI8Fymi3hdXtGuZv%2BdkTFwuU7Xj5fZ4DYSSx9bMMkW4vUedzHFhHhfeT2g3plSJOZBFg3yjPC5A4hFHJrVKo7TrS%2BYfX3iRG8omQjG5ATwQSRi46lRpS2iIZEXAbDhlbhKyamjnDeKbXEqn%2BOPGSNLkzNbzNUxFCeYCBJv5AvBAUienyPIbhF%2B5ZeK24xvGUhFI8%2FUeC9BmlcHlRkFrWowoYTUwwY6pgEkBOlyEh24Y5BauWcycZNoLuMLnPmDxKVPAcmG7eE9Z9HYQDHIhpfMhMIfFcsLzDGjKHsz03jsuUWnvny6Ipup%2Bs38cu4km1K96%2BZG9fT95v9PHzsYnsA4jxxHwARkoOCAVOBUnyULTAjjbmG%2FtfbHLZ3q7wI8FXcj6OPVHM6Hhyv0t896oJEAaHj0e0HTAiJGiRMMD9SlEDwUcBxTi094qhpBo0c8&X-Amz-Signature=11f15962d2fe6567c0b9998ff5e780aaa123689e994dfa2422ee56197d5e1e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IWXIK3Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIEnoeY1rE%2FA4bjkET1jGMG4I0041HGiQ3ODsgPm5RU7nAiA6%2FQ6d4%2FvSfK6qaBQ%2BHEKSh4SvLEiWjzIWMXyg24bbuir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMWptibqTDFccy73JeKtwDQEEwvZQUYUBAS3nn2N9RVgqqjaMj0lKMwgJDa74SGZM3d3pUzAIx4XjTM%2BoTWplNRGgIYiu9d8NXJajANSJuyETlinEPQHLeZ98UlF6d2tsmSipZDyc2VO8hQNwtRMKKA53Ymw6YYVlJTciMuTN31w6L724d7rxCHquTPFUHRJlKRLtyyc0R6h9IQcMIWWhEO%2BQFHT8%2FwzOsauZoSNHZVo9caji4D8ONbXjqltlthtN40icP%2FFRn1kbsgiGzldanxs66dvVoIG1h8dhoSwmUY7AENC%2B46dnvaUEyaKVYDRTNQ8d9gtwCofycCWKc%2FC%2BJUfdkwsxYT5hkKGbJYq6zc%2BxRZQebSqnhL%2B9XPEZa3f7M1FuwEFpPKuGZBi%2B4EiQB3k0idNEiEdp%2BjJQQc8vd7BbfwT2%2FLaiJSv2%2FUHEI8Fymi3hdXtGuZv%2BdkTFwuU7Xj5fZ4DYSSx9bMMkW4vUedzHFhHhfeT2g3plSJOZBFg3yjPC5A4hFHJrVKo7TrS%2BYfX3iRG8omQjG5ATwQSRi46lRpS2iIZEXAbDhlbhKyamjnDeKbXEqn%2BOPGSNLkzNbzNUxFCeYCBJv5AvBAUienyPIbhF%2B5ZeK24xvGUhFI8%2FUeC9BmlcHlRkFrWowoYTUwwY6pgEkBOlyEh24Y5BauWcycZNoLuMLnPmDxKVPAcmG7eE9Z9HYQDHIhpfMhMIfFcsLzDGjKHsz03jsuUWnvny6Ipup%2Bs38cu4km1K96%2BZG9fT95v9PHzsYnsA4jxxHwARkoOCAVOBUnyULTAjjbmG%2FtfbHLZ3q7wI8FXcj6OPVHM6Hhyv0t896oJEAaHj0e0HTAiJGiRMMD9SlEDwUcBxTi094qhpBo0c8&X-Amz-Signature=578ffb9e2ac5ec78ebb5b9ac6e2b5e32949dbafeab50506c2463ee4c21f5f216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IWXIK3Y%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIEnoeY1rE%2FA4bjkET1jGMG4I0041HGiQ3ODsgPm5RU7nAiA6%2FQ6d4%2FvSfK6qaBQ%2BHEKSh4SvLEiWjzIWMXyg24bbuir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMWptibqTDFccy73JeKtwDQEEwvZQUYUBAS3nn2N9RVgqqjaMj0lKMwgJDa74SGZM3d3pUzAIx4XjTM%2BoTWplNRGgIYiu9d8NXJajANSJuyETlinEPQHLeZ98UlF6d2tsmSipZDyc2VO8hQNwtRMKKA53Ymw6YYVlJTciMuTN31w6L724d7rxCHquTPFUHRJlKRLtyyc0R6h9IQcMIWWhEO%2BQFHT8%2FwzOsauZoSNHZVo9caji4D8ONbXjqltlthtN40icP%2FFRn1kbsgiGzldanxs66dvVoIG1h8dhoSwmUY7AENC%2B46dnvaUEyaKVYDRTNQ8d9gtwCofycCWKc%2FC%2BJUfdkwsxYT5hkKGbJYq6zc%2BxRZQebSqnhL%2B9XPEZa3f7M1FuwEFpPKuGZBi%2B4EiQB3k0idNEiEdp%2BjJQQc8vd7BbfwT2%2FLaiJSv2%2FUHEI8Fymi3hdXtGuZv%2BdkTFwuU7Xj5fZ4DYSSx9bMMkW4vUedzHFhHhfeT2g3plSJOZBFg3yjPC5A4hFHJrVKo7TrS%2BYfX3iRG8omQjG5ATwQSRi46lRpS2iIZEXAbDhlbhKyamjnDeKbXEqn%2BOPGSNLkzNbzNUxFCeYCBJv5AvBAUienyPIbhF%2B5ZeK24xvGUhFI8%2FUeC9BmlcHlRkFrWowoYTUwwY6pgEkBOlyEh24Y5BauWcycZNoLuMLnPmDxKVPAcmG7eE9Z9HYQDHIhpfMhMIfFcsLzDGjKHsz03jsuUWnvny6Ipup%2Bs38cu4km1K96%2BZG9fT95v9PHzsYnsA4jxxHwARkoOCAVOBUnyULTAjjbmG%2FtfbHLZ3q7wI8FXcj6OPVHM6Hhyv0t896oJEAaHj0e0HTAiJGiRMMD9SlEDwUcBxTi094qhpBo0c8&X-Amz-Signature=83a94dcca4ab9d8c1da452ee6830ae3a20739b61277aaa5b0378c170ecaa5a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53HRVMJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDtrZVUwyAM3hOUP34MIR03NYhois6%2F0Cm%2FmVtTLa99RAIhAPPplYSObatPUs3T3PItvQjvSlxQMmy6uPhTwtT01wdYKv8DCC0QABoMNjM3NDIzMTgzODA1Igw42DwD1zoHMBaykHcq3ANf8DTGsZz4bCzzH2fA6mZIL5oKP2oQirhFMQpiQOa%2FPowUs%2FQpU2M%2BunIWfYp%2Bs6S15PJM%2FCD%2B7Y4l7qtogcbsxlN5b9airIJG6fo0U%2B%2Bnl%2Bg0Ml5cMxOsnMltsbhJYRIREy4v908hEDUrFNlr1hubEyyKJ%2B9gCI31bXDSPRa9r3gDhLsZ1TxAdK2R%2FS0z0sCeq42zcugyxXIBZupoIdjN4w9yMKuTbffLKZ6FrNrCfT3%2BD0G71%2BkpjFzh%2B3dJaITFZ38GkcAs31f2Ba9cx40T2DA3c4%2FPzfgNG3peVmxNQV0ai05dSYoTgO2xi3K%2BrQZI7oQGCfBSfpYMvo%2BWSaEKh3L0qi22zgY1BXm10mUvwKiViJ357TYBG27XeH0EbkrMWMVk2iMQqu4E3dSbE7oYUk349BH5sWGLjixVrUyjJomsaqEjyy2qVA7Ho1KK29OjPYvJFEfPBSBE6jwpK1TVOehPrmShEGc8lHlHR%2Bk7sCBFs5U25Q3ZMqYUHd8jR7sryDFhO1Qpq5nZpDH4zvNwqfnti8ULrkU9%2BsgfW1oKwWrUuKI6As2tmX0bd9cHSeC2Oj3sMO5D9GHd3Q05MdklPn5Gq8pMV967qJI%2FB2rbSeujtgj0pNlmRmn11zCJ6ry9BjqkAbETTtxQpyMaNCyEkrUa9omm7kDluiqHHEtJsijh1dLaIm6E3kUVMUQxESKu8xnWX7J5O%2BdXOsXH6wrd24EaH%2FSay10jRSWJy4ZNNc3fpqNJaWIwNMG6OIphiG%2F1T4qefpA97pRv0by6BuUnpbHWs3fENFf0oZyqol5p7FzRVvBb935Vekq7P7GtOyr61FNTxV16VqVZMxdq5OPhpfnhjfBc5B74&X-Amz-Signature=50014a35deafef46c5d390b636ee60aa3fc086cd3a2733b866fcd4f037e71268&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53HRVMJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDtrZVUwyAM3hOUP34MIR03NYhois6%2F0Cm%2FmVtTLa99RAIhAPPplYSObatPUs3T3PItvQjvSlxQMmy6uPhTwtT01wdYKv8DCC0QABoMNjM3NDIzMTgzODA1Igw42DwD1zoHMBaykHcq3ANf8DTGsZz4bCzzH2fA6mZIL5oKP2oQirhFMQpiQOa%2FPowUs%2FQpU2M%2BunIWfYp%2Bs6S15PJM%2FCD%2B7Y4l7qtogcbsxlN5b9airIJG6fo0U%2B%2Bnl%2Bg0Ml5cMxOsnMltsbhJYRIREy4v908hEDUrFNlr1hubEyyKJ%2B9gCI31bXDSPRa9r3gDhLsZ1TxAdK2R%2FS0z0sCeq42zcugyxXIBZupoIdjN4w9yMKuTbffLKZ6FrNrCfT3%2BD0G71%2BkpjFzh%2B3dJaITFZ38GkcAs31f2Ba9cx40T2DA3c4%2FPzfgNG3peVmxNQV0ai05dSYoTgO2xi3K%2BrQZI7oQGCfBSfpYMvo%2BWSaEKh3L0qi22zgY1BXm10mUvwKiViJ357TYBG27XeH0EbkrMWMVk2iMQqu4E3dSbE7oYUk349BH5sWGLjixVrUyjJomsaqEjyy2qVA7Ho1KK29OjPYvJFEfPBSBE6jwpK1TVOehPrmShEGc8lHlHR%2Bk7sCBFs5U25Q3ZMqYUHd8jR7sryDFhO1Qpq5nZpDH4zvNwqfnti8ULrkU9%2BsgfW1oKwWrUuKI6As2tmX0bd9cHSeC2Oj3sMO5D9GHd3Q05MdklPn5Gq8pMV967qJI%2FB2rbSeujtgj0pNlmRmn11zCJ6ry9BjqkAbETTtxQpyMaNCyEkrUa9omm7kDluiqHHEtJsijh1dLaIm6E3kUVMUQxESKu8xnWX7J5O%2BdXOsXH6wrd24EaH%2FSay10jRSWJy4ZNNc3fpqNJaWIwNMG6OIphiG%2F1T4qefpA97pRv0by6BuUnpbHWs3fENFf0oZyqol5p7FzRVvBb935Vekq7P7GtOyr61FNTxV16VqVZMxdq5OPhpfnhjfBc5B74&X-Amz-Signature=7aff3349f34e5eb5df5ff8dce58f27f37db7f6dce15253f4f552145b74d2e6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q53HRVMJ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T150752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDtrZVUwyAM3hOUP34MIR03NYhois6%2F0Cm%2FmVtTLa99RAIhAPPplYSObatPUs3T3PItvQjvSlxQMmy6uPhTwtT01wdYKv8DCC0QABoMNjM3NDIzMTgzODA1Igw42DwD1zoHMBaykHcq3ANf8DTGsZz4bCzzH2fA6mZIL5oKP2oQirhFMQpiQOa%2FPowUs%2FQpU2M%2BunIWfYp%2Bs6S15PJM%2FCD%2B7Y4l7qtogcbsxlN5b9airIJG6fo0U%2B%2Bnl%2Bg0Ml5cMxOsnMltsbhJYRIREy4v908hEDUrFNlr1hubEyyKJ%2B9gCI31bXDSPRa9r3gDhLsZ1TxAdK2R%2FS0z0sCeq42zcugyxXIBZupoIdjN4w9yMKuTbffLKZ6FrNrCfT3%2BD0G71%2BkpjFzh%2B3dJaITFZ38GkcAs31f2Ba9cx40T2DA3c4%2FPzfgNG3peVmxNQV0ai05dSYoTgO2xi3K%2BrQZI7oQGCfBSfpYMvo%2BWSaEKh3L0qi22zgY1BXm10mUvwKiViJ357TYBG27XeH0EbkrMWMVk2iMQqu4E3dSbE7oYUk349BH5sWGLjixVrUyjJomsaqEjyy2qVA7Ho1KK29OjPYvJFEfPBSBE6jwpK1TVOehPrmShEGc8lHlHR%2Bk7sCBFs5U25Q3ZMqYUHd8jR7sryDFhO1Qpq5nZpDH4zvNwqfnti8ULrkU9%2BsgfW1oKwWrUuKI6As2tmX0bd9cHSeC2Oj3sMO5D9GHd3Q05MdklPn5Gq8pMV967qJI%2FB2rbSeujtgj0pNlmRmn11zCJ6ry9BjqkAbETTtxQpyMaNCyEkrUa9omm7kDluiqHHEtJsijh1dLaIm6E3kUVMUQxESKu8xnWX7J5O%2BdXOsXH6wrd24EaH%2FSay10jRSWJy4ZNNc3fpqNJaWIwNMG6OIphiG%2F1T4qefpA97pRv0by6BuUnpbHWs3fENFf0oZyqol5p7FzRVvBb935Vekq7P7GtOyr61FNTxV16VqVZMxdq5OPhpfnhjfBc5B74&X-Amz-Signature=f809e3114a47d4b33475ba37fe516d0625c2cfc09e921f32e53ac74bcf88ef26&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

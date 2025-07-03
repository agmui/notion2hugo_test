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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKMJUBI4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBwZNVDd8jffn%2BLEtyz2LfrrvaWaiKMTiGjITMV5RkadAiEAlRKLDMQabL%2BJjZx7fiZ6vLL8ndZHL61zkOqgiixpAeoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDL%2BZqDGVlnV8%2FBYyDSrcA9EsIDteFp6w8Ru6HRCCl%2BIlxtUd0gkgWOkwuuEHh27q5S6qVYCvNlVWNro6p%2Fa0pA3ETflkSOtMdCMBXtOKtILFmCEb%2Bij5QkXecqi6mT5vXkdLfEh2AIyPv0gmFvBayF456xtNg3u2n7ZHV29aI%2FWm474QjdgFGYQ4MF2XuvO3LD6jmK3PaKO62uVLDwNG70bR%2BIxzPrhKGwLOhEYGmptP0X3M5kbpUIUizlYNHPDMGLzeQJLynqjc2hWsry6w%2FQFp75mUXhDB2TEIfR3NUV6yTvBKH6YuHB6bsP4gwoTCbdqoSPaAw0XCHnR2nuxwQPP3M4uGSjZLL4KTpUBFCoSmK8uzuRmK%2BIVkJdZkjFhf99vp6vblO1twkf5WSE7M%2BfP8ye7Mu257HrO4rqfWmnO%2BgneLGuIDxmtdvMSuRacB2dewY3bdwwxTTRelB%2BlQjTtrqOeKPVm%2BXFsxaqyl01DHwXCu8Gfd%2Br4ZK0gUW%2FDE%2FOGtZM%2BavijCqwH55DmWXrZFu2AyXqRltg6axQ3z7q%2BF4%2FBscQA7p8VRWV%2B382Q5rvZyv9hdovL%2BLARxYy2RLBRim375vSoae270MCuJCir%2FqD8pmINNER9FIQWOjK5UocKCXbiNRmupqak9MMSNmsMGOqUBXOQF2wDOZQ%2FiAXKkflE3npahgI3C6KS%2Bt0g%2Bmpnz%2BPAGeWI31zPY%2FlY1IThcXo9%2BmEq2ZADD2hJWExRip1nhDmxyac%2FjKALZST1d1APbGeNBbyc94rpKo18MOXPxz9ZUnQI38sNphpECidUoRQpgiJ0SGspJVy3dN7mUkvexJc2zxUopKrL5halRH33wuqujQT1cfpJ%2BRBpduyZt6SyPoRDZPBz2&X-Amz-Signature=47277e19a8a164f522151db72d654dede866b19a795895c222607c3174b1107c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKMJUBI4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBwZNVDd8jffn%2BLEtyz2LfrrvaWaiKMTiGjITMV5RkadAiEAlRKLDMQabL%2BJjZx7fiZ6vLL8ndZHL61zkOqgiixpAeoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDL%2BZqDGVlnV8%2FBYyDSrcA9EsIDteFp6w8Ru6HRCCl%2BIlxtUd0gkgWOkwuuEHh27q5S6qVYCvNlVWNro6p%2Fa0pA3ETflkSOtMdCMBXtOKtILFmCEb%2Bij5QkXecqi6mT5vXkdLfEh2AIyPv0gmFvBayF456xtNg3u2n7ZHV29aI%2FWm474QjdgFGYQ4MF2XuvO3LD6jmK3PaKO62uVLDwNG70bR%2BIxzPrhKGwLOhEYGmptP0X3M5kbpUIUizlYNHPDMGLzeQJLynqjc2hWsry6w%2FQFp75mUXhDB2TEIfR3NUV6yTvBKH6YuHB6bsP4gwoTCbdqoSPaAw0XCHnR2nuxwQPP3M4uGSjZLL4KTpUBFCoSmK8uzuRmK%2BIVkJdZkjFhf99vp6vblO1twkf5WSE7M%2BfP8ye7Mu257HrO4rqfWmnO%2BgneLGuIDxmtdvMSuRacB2dewY3bdwwxTTRelB%2BlQjTtrqOeKPVm%2BXFsxaqyl01DHwXCu8Gfd%2Br4ZK0gUW%2FDE%2FOGtZM%2BavijCqwH55DmWXrZFu2AyXqRltg6axQ3z7q%2BF4%2FBscQA7p8VRWV%2B382Q5rvZyv9hdovL%2BLARxYy2RLBRim375vSoae270MCuJCir%2FqD8pmINNER9FIQWOjK5UocKCXbiNRmupqak9MMSNmsMGOqUBXOQF2wDOZQ%2FiAXKkflE3npahgI3C6KS%2Bt0g%2Bmpnz%2BPAGeWI31zPY%2FlY1IThcXo9%2BmEq2ZADD2hJWExRip1nhDmxyac%2FjKALZST1d1APbGeNBbyc94rpKo18MOXPxz9ZUnQI38sNphpECidUoRQpgiJ0SGspJVy3dN7mUkvexJc2zxUopKrL5halRH33wuqujQT1cfpJ%2BRBpduyZt6SyPoRDZPBz2&X-Amz-Signature=77fd24106059a9dc465c4c6b4c73b335a25335323ee62d80268397fa45950d53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKMJUBI4%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIBwZNVDd8jffn%2BLEtyz2LfrrvaWaiKMTiGjITMV5RkadAiEAlRKLDMQabL%2BJjZx7fiZ6vLL8ndZHL61zkOqgiixpAeoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDL%2BZqDGVlnV8%2FBYyDSrcA9EsIDteFp6w8Ru6HRCCl%2BIlxtUd0gkgWOkwuuEHh27q5S6qVYCvNlVWNro6p%2Fa0pA3ETflkSOtMdCMBXtOKtILFmCEb%2Bij5QkXecqi6mT5vXkdLfEh2AIyPv0gmFvBayF456xtNg3u2n7ZHV29aI%2FWm474QjdgFGYQ4MF2XuvO3LD6jmK3PaKO62uVLDwNG70bR%2BIxzPrhKGwLOhEYGmptP0X3M5kbpUIUizlYNHPDMGLzeQJLynqjc2hWsry6w%2FQFp75mUXhDB2TEIfR3NUV6yTvBKH6YuHB6bsP4gwoTCbdqoSPaAw0XCHnR2nuxwQPP3M4uGSjZLL4KTpUBFCoSmK8uzuRmK%2BIVkJdZkjFhf99vp6vblO1twkf5WSE7M%2BfP8ye7Mu257HrO4rqfWmnO%2BgneLGuIDxmtdvMSuRacB2dewY3bdwwxTTRelB%2BlQjTtrqOeKPVm%2BXFsxaqyl01DHwXCu8Gfd%2Br4ZK0gUW%2FDE%2FOGtZM%2BavijCqwH55DmWXrZFu2AyXqRltg6axQ3z7q%2BF4%2FBscQA7p8VRWV%2B382Q5rvZyv9hdovL%2BLARxYy2RLBRim375vSoae270MCuJCir%2FqD8pmINNER9FIQWOjK5UocKCXbiNRmupqak9MMSNmsMGOqUBXOQF2wDOZQ%2FiAXKkflE3npahgI3C6KS%2Bt0g%2Bmpnz%2BPAGeWI31zPY%2FlY1IThcXo9%2BmEq2ZADD2hJWExRip1nhDmxyac%2FjKALZST1d1APbGeNBbyc94rpKo18MOXPxz9ZUnQI38sNphpECidUoRQpgiJ0SGspJVy3dN7mUkvexJc2zxUopKrL5halRH33wuqujQT1cfpJ%2BRBpduyZt6SyPoRDZPBz2&X-Amz-Signature=c902566d7643d8ba69ddd2cd89df6d16a09018b7ee936974dbc275c02ee38889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

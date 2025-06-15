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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDU4EZO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFOq%2Fmk%2BNsSDeVdR1UkkCzJLB7KJ6zJ%2FuNaMu9OgHcoQAiEAyZfgN1jLyNOm2tZeMb75ZtibwI5OUQyKBO%2BiODJwCUgq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDP4VV8Jszp%2F4XeTGmyrcAwh0AXuDRH%2FRda0Sb%2Bfjc%2FmE0rrirEjMHzAnt0v4WwOnS9ycU2%2Fw94IW0N3ZgKln45T3K5otYWE17NNaDSGLD%2Fs%2BKbdpiq0%2BZldye2BEAlmuNeJczBqW1GYvVHorm6BvI3uDUbjwsA3lgVkPFVl7qRvVSrcY4J8FycZ3UroAtO4eB10E7Qebllr0BIMDZAmiQQWnpaWr0ZXHh0G2B9zpfnOp4bkc5AnxLOxLNkxDwUhprUSOWg2OgKqXgiTHlIG68mtl0Og11SYWzrVR7eSfBBu%2F96Y94cgHBVWgjdZwUj5RKe8gsNFYnfvNIgvIxbtm9r%2FgeYvqSz3g8d%2FxRQDtUI%2Bnu7TPM%2B2hZ%2FehfVwPvX7EVUeIs7FHTdewiTR41H%2FEF66KtP57Fj3LKdNzAxJSEchqcM%2BPBDGXrEuqP27XbUjBocw22%2Bb1Dfca4ED%2FfjLEKM83g%2BHl6rZjwTSJNMszmjm73CUiFjd%2BqNsAr51qr3f8FRotivar8vDlZkquKms0UjaicDC4vp%2BHi2C%2F%2FB%2FOoCyE4SMwnKwey6IkiEKmeM3A0wAGpc0OOqIE1lQ7Lm2oL%2BsX1A9JNF0VYpOVzGeeI904vlf7l0xA95%2Bo8gW1%2Bq%2FJ%2BiYvc0mWdQJ3TOAKMO2fucIGOqUB%2F%2FSAaCoDFNKLDHt2%2FbyOKNiSkjMjVwq6Nn1ENDU6p5zOxVIisNE7N%2B4pLZRcuAzYNUtGNQFchJNO0yVp0s7OPYmOgJ9r3CtbRBO13cua3QbKtZUQ7eP2pdLmDgccMbsS37MlvkEtUhH4SMRn3VA57iIa0jTYWkWuXhSEmJDvBO%2FVfjjapmbB2jEXVihIpKh3F6h6DgSRICbPqf3nOzx%2FXJc4INXn&X-Amz-Signature=ff86db5953d2ce170a2eb5da409bf57fc391333cb69ab948497ce3372b4b3b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDU4EZO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFOq%2Fmk%2BNsSDeVdR1UkkCzJLB7KJ6zJ%2FuNaMu9OgHcoQAiEAyZfgN1jLyNOm2tZeMb75ZtibwI5OUQyKBO%2BiODJwCUgq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDP4VV8Jszp%2F4XeTGmyrcAwh0AXuDRH%2FRda0Sb%2Bfjc%2FmE0rrirEjMHzAnt0v4WwOnS9ycU2%2Fw94IW0N3ZgKln45T3K5otYWE17NNaDSGLD%2Fs%2BKbdpiq0%2BZldye2BEAlmuNeJczBqW1GYvVHorm6BvI3uDUbjwsA3lgVkPFVl7qRvVSrcY4J8FycZ3UroAtO4eB10E7Qebllr0BIMDZAmiQQWnpaWr0ZXHh0G2B9zpfnOp4bkc5AnxLOxLNkxDwUhprUSOWg2OgKqXgiTHlIG68mtl0Og11SYWzrVR7eSfBBu%2F96Y94cgHBVWgjdZwUj5RKe8gsNFYnfvNIgvIxbtm9r%2FgeYvqSz3g8d%2FxRQDtUI%2Bnu7TPM%2B2hZ%2FehfVwPvX7EVUeIs7FHTdewiTR41H%2FEF66KtP57Fj3LKdNzAxJSEchqcM%2BPBDGXrEuqP27XbUjBocw22%2Bb1Dfca4ED%2FfjLEKM83g%2BHl6rZjwTSJNMszmjm73CUiFjd%2BqNsAr51qr3f8FRotivar8vDlZkquKms0UjaicDC4vp%2BHi2C%2F%2FB%2FOoCyE4SMwnKwey6IkiEKmeM3A0wAGpc0OOqIE1lQ7Lm2oL%2BsX1A9JNF0VYpOVzGeeI904vlf7l0xA95%2Bo8gW1%2Bq%2FJ%2BiYvc0mWdQJ3TOAKMO2fucIGOqUB%2F%2FSAaCoDFNKLDHt2%2FbyOKNiSkjMjVwq6Nn1ENDU6p5zOxVIisNE7N%2B4pLZRcuAzYNUtGNQFchJNO0yVp0s7OPYmOgJ9r3CtbRBO13cua3QbKtZUQ7eP2pdLmDgccMbsS37MlvkEtUhH4SMRn3VA57iIa0jTYWkWuXhSEmJDvBO%2FVfjjapmbB2jEXVihIpKh3F6h6DgSRICbPqf3nOzx%2FXJc4INXn&X-Amz-Signature=55f16dd6f475f6789fa21599186d294bceadbd51a16105266d313a03f85bab1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWDU4EZO%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIFOq%2Fmk%2BNsSDeVdR1UkkCzJLB7KJ6zJ%2FuNaMu9OgHcoQAiEAyZfgN1jLyNOm2tZeMb75ZtibwI5OUQyKBO%2BiODJwCUgq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDP4VV8Jszp%2F4XeTGmyrcAwh0AXuDRH%2FRda0Sb%2Bfjc%2FmE0rrirEjMHzAnt0v4WwOnS9ycU2%2Fw94IW0N3ZgKln45T3K5otYWE17NNaDSGLD%2Fs%2BKbdpiq0%2BZldye2BEAlmuNeJczBqW1GYvVHorm6BvI3uDUbjwsA3lgVkPFVl7qRvVSrcY4J8FycZ3UroAtO4eB10E7Qebllr0BIMDZAmiQQWnpaWr0ZXHh0G2B9zpfnOp4bkc5AnxLOxLNkxDwUhprUSOWg2OgKqXgiTHlIG68mtl0Og11SYWzrVR7eSfBBu%2F96Y94cgHBVWgjdZwUj5RKe8gsNFYnfvNIgvIxbtm9r%2FgeYvqSz3g8d%2FxRQDtUI%2Bnu7TPM%2B2hZ%2FehfVwPvX7EVUeIs7FHTdewiTR41H%2FEF66KtP57Fj3LKdNzAxJSEchqcM%2BPBDGXrEuqP27XbUjBocw22%2Bb1Dfca4ED%2FfjLEKM83g%2BHl6rZjwTSJNMszmjm73CUiFjd%2BqNsAr51qr3f8FRotivar8vDlZkquKms0UjaicDC4vp%2BHi2C%2F%2FB%2FOoCyE4SMwnKwey6IkiEKmeM3A0wAGpc0OOqIE1lQ7Lm2oL%2BsX1A9JNF0VYpOVzGeeI904vlf7l0xA95%2Bo8gW1%2Bq%2FJ%2BiYvc0mWdQJ3TOAKMO2fucIGOqUB%2F%2FSAaCoDFNKLDHt2%2FbyOKNiSkjMjVwq6Nn1ENDU6p5zOxVIisNE7N%2B4pLZRcuAzYNUtGNQFchJNO0yVp0s7OPYmOgJ9r3CtbRBO13cua3QbKtZUQ7eP2pdLmDgccMbsS37MlvkEtUhH4SMRn3VA57iIa0jTYWkWuXhSEmJDvBO%2FVfjjapmbB2jEXVihIpKh3F6h6DgSRICbPqf3nOzx%2FXJc4INXn&X-Amz-Signature=dfdb7e5f2c92347b2fc50b9f5226676ed570747e86f29ac4b5a15ed58cac92eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

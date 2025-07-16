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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UISK6KEH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHsz4x2JB12F8bUkq6jEVEyAGQcx%2F7xugi5NeG0cQe%2FHAiBSBGEYW92IQVeBpZVR3%2FXuTKQc1hUPqpS%2BcDMJaeDrPir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMkRizS6imybx5stvfKtwDUNbJAqmjezIPCn7RMD6%2BbcJOgXoYlXJkClSOgQn1Alt9zBvJY2WW7TTfncyq2YCSYONNsNHlDa8mZrCP%2BzlE%2Bnz%2FOVbkVc2qQ21HDm8CV0jrF80Sd6Of1D9RQ1%2BWnu%2FVaebOu5G46wEyaqGlxzJoJpnrCMSAX%2BFSIayRT6DoOS0Kov6dexnkqo6hmjRH3071LZEP7n2ZK8zzbGG4Nmmz9aXdai%2F7C%2BgYeZ0fIfEOdnXEjok6Eq9QzyUSXzKmyXLIls0IZvVFxlgi%2BVTbJRS9I2bJgj8Iik7muUsrU8c7RzzD3PRhX5Mi8FfUSqIesLQ7OoOiZEQVUAj9EVbzaOojcel6I4CKO2CcnXbekcxAz42B30pF44oA7tghJ2XvwPnDeECakLm7iHHTaer%2FB7lrICQt6KcsjZgqQyFWDonKXdFU0F7zEcoKj21qo64DPcn3cwGCXwQ7e6TvlKfqyxLNjbViucf%2Fb6XEjDwiva%2BqmejRG7okEzZnyL165tSvXtzOAgI0m%2BBpK9f8QXbyvJu4%2Ba%2BONxNuCRCc%2BJqZd8%2BNgl0inC%2FXh25TKnevV5Zepbk3Lw9XNcs2XpkhPAON5VXCTFdBz71BxKr82b0qsH3ocBFpmR6Ygj%2FcaoadMh0wu93cwwY6pgHJuak99aNbEFSw8MnCHay8F3PZkJMtWmVv7ZdD5Tpfs299uB70gHlLOhEtKBitm3IKisdZnDaSwsOlcsiEAbxos34f1bgBNmXzJhkwYhhixHb9cJKM1%2F00C%2FkL9JWTGe%2Fhi7oChYV3xaRGrpVIBfo0Eh%2BXhAFN28snDGNTqIFkdoWUG3YBu%2Bp00AFlOsyTqmlMFLBQonpMp56QYEeY39r0hdn1o8UV&X-Amz-Signature=62442159d23943dc0614277ade30c2b5f51e1572a8473e455496b945fa84ba8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UISK6KEH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHsz4x2JB12F8bUkq6jEVEyAGQcx%2F7xugi5NeG0cQe%2FHAiBSBGEYW92IQVeBpZVR3%2FXuTKQc1hUPqpS%2BcDMJaeDrPir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMkRizS6imybx5stvfKtwDUNbJAqmjezIPCn7RMD6%2BbcJOgXoYlXJkClSOgQn1Alt9zBvJY2WW7TTfncyq2YCSYONNsNHlDa8mZrCP%2BzlE%2Bnz%2FOVbkVc2qQ21HDm8CV0jrF80Sd6Of1D9RQ1%2BWnu%2FVaebOu5G46wEyaqGlxzJoJpnrCMSAX%2BFSIayRT6DoOS0Kov6dexnkqo6hmjRH3071LZEP7n2ZK8zzbGG4Nmmz9aXdai%2F7C%2BgYeZ0fIfEOdnXEjok6Eq9QzyUSXzKmyXLIls0IZvVFxlgi%2BVTbJRS9I2bJgj8Iik7muUsrU8c7RzzD3PRhX5Mi8FfUSqIesLQ7OoOiZEQVUAj9EVbzaOojcel6I4CKO2CcnXbekcxAz42B30pF44oA7tghJ2XvwPnDeECakLm7iHHTaer%2FB7lrICQt6KcsjZgqQyFWDonKXdFU0F7zEcoKj21qo64DPcn3cwGCXwQ7e6TvlKfqyxLNjbViucf%2Fb6XEjDwiva%2BqmejRG7okEzZnyL165tSvXtzOAgI0m%2BBpK9f8QXbyvJu4%2Ba%2BONxNuCRCc%2BJqZd8%2BNgl0inC%2FXh25TKnevV5Zepbk3Lw9XNcs2XpkhPAON5VXCTFdBz71BxKr82b0qsH3ocBFpmR6Ygj%2FcaoadMh0wu93cwwY6pgHJuak99aNbEFSw8MnCHay8F3PZkJMtWmVv7ZdD5Tpfs299uB70gHlLOhEtKBitm3IKisdZnDaSwsOlcsiEAbxos34f1bgBNmXzJhkwYhhixHb9cJKM1%2F00C%2FkL9JWTGe%2Fhi7oChYV3xaRGrpVIBfo0Eh%2BXhAFN28snDGNTqIFkdoWUG3YBu%2Bp00AFlOsyTqmlMFLBQonpMp56QYEeY39r0hdn1o8UV&X-Amz-Signature=f04c962117faba5c7ad5118e942203c7d290ec5a680296d65d0414e763c02e70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UISK6KEH%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIHsz4x2JB12F8bUkq6jEVEyAGQcx%2F7xugi5NeG0cQe%2FHAiBSBGEYW92IQVeBpZVR3%2FXuTKQc1hUPqpS%2BcDMJaeDrPir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMkRizS6imybx5stvfKtwDUNbJAqmjezIPCn7RMD6%2BbcJOgXoYlXJkClSOgQn1Alt9zBvJY2WW7TTfncyq2YCSYONNsNHlDa8mZrCP%2BzlE%2Bnz%2FOVbkVc2qQ21HDm8CV0jrF80Sd6Of1D9RQ1%2BWnu%2FVaebOu5G46wEyaqGlxzJoJpnrCMSAX%2BFSIayRT6DoOS0Kov6dexnkqo6hmjRH3071LZEP7n2ZK8zzbGG4Nmmz9aXdai%2F7C%2BgYeZ0fIfEOdnXEjok6Eq9QzyUSXzKmyXLIls0IZvVFxlgi%2BVTbJRS9I2bJgj8Iik7muUsrU8c7RzzD3PRhX5Mi8FfUSqIesLQ7OoOiZEQVUAj9EVbzaOojcel6I4CKO2CcnXbekcxAz42B30pF44oA7tghJ2XvwPnDeECakLm7iHHTaer%2FB7lrICQt6KcsjZgqQyFWDonKXdFU0F7zEcoKj21qo64DPcn3cwGCXwQ7e6TvlKfqyxLNjbViucf%2Fb6XEjDwiva%2BqmejRG7okEzZnyL165tSvXtzOAgI0m%2BBpK9f8QXbyvJu4%2Ba%2BONxNuCRCc%2BJqZd8%2BNgl0inC%2FXh25TKnevV5Zepbk3Lw9XNcs2XpkhPAON5VXCTFdBz71BxKr82b0qsH3ocBFpmR6Ygj%2FcaoadMh0wu93cwwY6pgHJuak99aNbEFSw8MnCHay8F3PZkJMtWmVv7ZdD5Tpfs299uB70gHlLOhEtKBitm3IKisdZnDaSwsOlcsiEAbxos34f1bgBNmXzJhkwYhhixHb9cJKM1%2F00C%2FkL9JWTGe%2Fhi7oChYV3xaRGrpVIBfo0Eh%2BXhAFN28snDGNTqIFkdoWUG3YBu%2Bp00AFlOsyTqmlMFLBQonpMp56QYEeY39r0hdn1o8UV&X-Amz-Signature=29cfb0a58b333cea2b3aa3dcbc8cf5d4642599e08a388acb6a5d782ee9698121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

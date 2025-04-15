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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJV6ZJI%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVI8uPk%2BGKUNgQa87FKtEKnQxQUdVTyTgv9IQNYXavDwIhAJwk%2BGKtM2%2Flx0yxz9Biz76Wx9GD1RxkBF%2Btvic7FrxWKv8DCCUQABoMNjM3NDIzMTgzODA1IgycPrSa%2B20xDN0FUTAq3AP5ChRWR0JZeCKkhiyZm4VMxN1FRdeUTf0bzINqqtNybSDv3gCzC4k8aSVB8dLnNmpwnMgRvDJdcm3kNJ7U4a%2BBu4hCYE3TM0x8bHEUpUbBuhcTMEnSP308pXbUmyhAASnzOxzgMp4ivYmLUp85UaHyNjYqgvgqL7rXkrx%2BzsBxc1SKK6tE37vPFBF5eIUlZb6DiG2PXzpj1Ugpd1rVK%2F4xD0BTeUxJNB6I6AzDqgPl7TikWW%2BmAfag9NYaA73pVHAGi1MpJNMCDnXHsumGMPuC4vtB2%2F8LjHiTi9XzyJ%2F9s078jl8G9z3xEn4jVhCiQkUD4%2FUZSpwutCryNCETsUbr%2BFXWC8Ccdiu4i%2BAc6Q5ibggz0KUOSmwjYm0Y%2BEa0lqERipf%2BxOkJdwh%2BxnWEjP1U4CP8vE6q5oJPcnO9P137HaZYxRIUBmE5250vQ5SppF%2Bnh7HCyJpFxBFcJNXCRpxwNlutESPk%2BemzxQofjwQwawQc%2FvQlOzXySNrFTw97HnPFZnAMSq5egcx8uuqk1NGx2q6USe6Rddx%2FzcN97TZJw%2F02gej79QRcbABBx1xnLpjgqDUOfu2iocMN4mdU4j9QrLLLNvIE6k7YO1RaMUGDpHe%2B9DBKABf%2BXyl7NTDvt%2Fe%2FBjqkAU73rKm4IMuZf7syX1GhKHS1ewjf65SaSrCdAi8MF47pK%2BKwVVpA5E7tnNqb6NSaTri32SCuBpuyC4%2Fb6y3QwGYYPB0Bvo1jH25CMsC68C%2F1slWfi5cIqQJbB2zVLLMUa2nMMQltQsr4G5zR5Lou%2BWLPyKnK91rmpW4Xt6yJLt0jPXZFz2LUS0pQvrSoIjOFJk9bExvZRBdhMhZBiWSfmKTTCEoR&X-Amz-Signature=99473adef7e9dd42261077ad39231e2b3bcc7595a40d8ad1fba49f29e5c2dbde&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJV6ZJI%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVI8uPk%2BGKUNgQa87FKtEKnQxQUdVTyTgv9IQNYXavDwIhAJwk%2BGKtM2%2Flx0yxz9Biz76Wx9GD1RxkBF%2Btvic7FrxWKv8DCCUQABoMNjM3NDIzMTgzODA1IgycPrSa%2B20xDN0FUTAq3AP5ChRWR0JZeCKkhiyZm4VMxN1FRdeUTf0bzINqqtNybSDv3gCzC4k8aSVB8dLnNmpwnMgRvDJdcm3kNJ7U4a%2BBu4hCYE3TM0x8bHEUpUbBuhcTMEnSP308pXbUmyhAASnzOxzgMp4ivYmLUp85UaHyNjYqgvgqL7rXkrx%2BzsBxc1SKK6tE37vPFBF5eIUlZb6DiG2PXzpj1Ugpd1rVK%2F4xD0BTeUxJNB6I6AzDqgPl7TikWW%2BmAfag9NYaA73pVHAGi1MpJNMCDnXHsumGMPuC4vtB2%2F8LjHiTi9XzyJ%2F9s078jl8G9z3xEn4jVhCiQkUD4%2FUZSpwutCryNCETsUbr%2BFXWC8Ccdiu4i%2BAc6Q5ibggz0KUOSmwjYm0Y%2BEa0lqERipf%2BxOkJdwh%2BxnWEjP1U4CP8vE6q5oJPcnO9P137HaZYxRIUBmE5250vQ5SppF%2Bnh7HCyJpFxBFcJNXCRpxwNlutESPk%2BemzxQofjwQwawQc%2FvQlOzXySNrFTw97HnPFZnAMSq5egcx8uuqk1NGx2q6USe6Rddx%2FzcN97TZJw%2F02gej79QRcbABBx1xnLpjgqDUOfu2iocMN4mdU4j9QrLLLNvIE6k7YO1RaMUGDpHe%2B9DBKABf%2BXyl7NTDvt%2Fe%2FBjqkAU73rKm4IMuZf7syX1GhKHS1ewjf65SaSrCdAi8MF47pK%2BKwVVpA5E7tnNqb6NSaTri32SCuBpuyC4%2Fb6y3QwGYYPB0Bvo1jH25CMsC68C%2F1slWfi5cIqQJbB2zVLLMUa2nMMQltQsr4G5zR5Lou%2BWLPyKnK91rmpW4Xt6yJLt0jPXZFz2LUS0pQvrSoIjOFJk9bExvZRBdhMhZBiWSfmKTTCEoR&X-Amz-Signature=c270561e3b9420100e197567f9336c1f70e769aeee07abe49a41530d5cd84918&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QJV6ZJI%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVI8uPk%2BGKUNgQa87FKtEKnQxQUdVTyTgv9IQNYXavDwIhAJwk%2BGKtM2%2Flx0yxz9Biz76Wx9GD1RxkBF%2Btvic7FrxWKv8DCCUQABoMNjM3NDIzMTgzODA1IgycPrSa%2B20xDN0FUTAq3AP5ChRWR0JZeCKkhiyZm4VMxN1FRdeUTf0bzINqqtNybSDv3gCzC4k8aSVB8dLnNmpwnMgRvDJdcm3kNJ7U4a%2BBu4hCYE3TM0x8bHEUpUbBuhcTMEnSP308pXbUmyhAASnzOxzgMp4ivYmLUp85UaHyNjYqgvgqL7rXkrx%2BzsBxc1SKK6tE37vPFBF5eIUlZb6DiG2PXzpj1Ugpd1rVK%2F4xD0BTeUxJNB6I6AzDqgPl7TikWW%2BmAfag9NYaA73pVHAGi1MpJNMCDnXHsumGMPuC4vtB2%2F8LjHiTi9XzyJ%2F9s078jl8G9z3xEn4jVhCiQkUD4%2FUZSpwutCryNCETsUbr%2BFXWC8Ccdiu4i%2BAc6Q5ibggz0KUOSmwjYm0Y%2BEa0lqERipf%2BxOkJdwh%2BxnWEjP1U4CP8vE6q5oJPcnO9P137HaZYxRIUBmE5250vQ5SppF%2Bnh7HCyJpFxBFcJNXCRpxwNlutESPk%2BemzxQofjwQwawQc%2FvQlOzXySNrFTw97HnPFZnAMSq5egcx8uuqk1NGx2q6USe6Rddx%2FzcN97TZJw%2F02gej79QRcbABBx1xnLpjgqDUOfu2iocMN4mdU4j9QrLLLNvIE6k7YO1RaMUGDpHe%2B9DBKABf%2BXyl7NTDvt%2Fe%2FBjqkAU73rKm4IMuZf7syX1GhKHS1ewjf65SaSrCdAi8MF47pK%2BKwVVpA5E7tnNqb6NSaTri32SCuBpuyC4%2Fb6y3QwGYYPB0Bvo1jH25CMsC68C%2F1slWfi5cIqQJbB2zVLLMUa2nMMQltQsr4G5zR5Lou%2BWLPyKnK91rmpW4Xt6yJLt0jPXZFz2LUS0pQvrSoIjOFJk9bExvZRBdhMhZBiWSfmKTTCEoR&X-Amz-Signature=a86357bd82b922d927f918c6437ebc6fe28af4355e1504fd085a80bd752e39a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHYMPS7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEhf7LvTpZssQIXfqAVUmDXEWQ0vvWsfs5HiiJXsZSkAiACPtMxdtNTE3jKJE1jTiwIIvxaNX7gSgnvzbNMWK%2FkeSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemUus1318Bton3GNKtwDPxLKmX2CYN%2F44IXh6LLS%2BlLPXAYbuDY4s6FRYCm9Wlp7G%2FilYAud7o1%2FxUaRruhBxC9albaqHSiExmBTD%2Fdj6HuE5g8yq0Ejt8vgJLYqlU5Tif1rHWNFgg54QISe3OolAzdj1IJtFMkmhlQbYzMTGW3dqos0InTtxGNr74YTf1MkB11FFG4AAEv83Gs9gJ08Rxy3q%2FfYh7KwPvr75yo5utizN7z%2FIIx1VdbbucmCp5LD7tdWku7jngbwyo2KWQNrh1pQG36N0sC4NT7TTPQox%2F9Wsovg6AstUObjuT1zpH7Iw0vs%2FOG2daRH6WJ6kw59qDaaPvHVyqG6t1fwC2B1pLPxSii0IcRzMx8rWDXDSFIQqBfQDPJaUTgmyu0aVTYf5DEGqqmFFyWQ%2Fce%2FK90G%2BNC1AtNbaDssqvCz9Se6AAyRUWriDvlopZ3LIoo6%2Fw7V%2FgE1gQsLn9wQRm%2BtLZFiNcCCKjn9MqI69s7FCaBh7PnykRoZbEqaZJiwL83xC7Sb9QUbeokCSCvPoYjeau2hs7Zz4ODNbyncrjb9Xz%2B4HaNaJRXGY7LjnzBm8abLvZVgN46RZVqEza6DUzeuZOMaQI2k9AdVuRGwj%2BvpdJhSo%2B%2FKCIjlneS0CeFJXBYwyKDswwY6pgFGOoAT7C6QLAf2mISriniNkW6slhvr%2Ftv5E1o3j93rFlD3bB2xEbqBaxBe8c0cXVFzLMA0mYlzmNaXZdzThCG4BKJDxr33Ai8u4OehoC1IQBoW%2BE3%2BJr3psGsnqRb6GRN5kYXmzlH9vFAwoe7imLMEdOQp4AcWnbKOn8N2Yji6NfN2ISYlqfHO0QsFUgExhk2iHCsAYzzeCXTxfNAK9EB%2BApXdiroa&X-Amz-Signature=242bc909b5c49f8751f1e9c03571cc66751fa96d905c3022364648e7e255fc68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHYMPS7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEhf7LvTpZssQIXfqAVUmDXEWQ0vvWsfs5HiiJXsZSkAiACPtMxdtNTE3jKJE1jTiwIIvxaNX7gSgnvzbNMWK%2FkeSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemUus1318Bton3GNKtwDPxLKmX2CYN%2F44IXh6LLS%2BlLPXAYbuDY4s6FRYCm9Wlp7G%2FilYAud7o1%2FxUaRruhBxC9albaqHSiExmBTD%2Fdj6HuE5g8yq0Ejt8vgJLYqlU5Tif1rHWNFgg54QISe3OolAzdj1IJtFMkmhlQbYzMTGW3dqos0InTtxGNr74YTf1MkB11FFG4AAEv83Gs9gJ08Rxy3q%2FfYh7KwPvr75yo5utizN7z%2FIIx1VdbbucmCp5LD7tdWku7jngbwyo2KWQNrh1pQG36N0sC4NT7TTPQox%2F9Wsovg6AstUObjuT1zpH7Iw0vs%2FOG2daRH6WJ6kw59qDaaPvHVyqG6t1fwC2B1pLPxSii0IcRzMx8rWDXDSFIQqBfQDPJaUTgmyu0aVTYf5DEGqqmFFyWQ%2Fce%2FK90G%2BNC1AtNbaDssqvCz9Se6AAyRUWriDvlopZ3LIoo6%2Fw7V%2FgE1gQsLn9wQRm%2BtLZFiNcCCKjn9MqI69s7FCaBh7PnykRoZbEqaZJiwL83xC7Sb9QUbeokCSCvPoYjeau2hs7Zz4ODNbyncrjb9Xz%2B4HaNaJRXGY7LjnzBm8abLvZVgN46RZVqEza6DUzeuZOMaQI2k9AdVuRGwj%2BvpdJhSo%2B%2FKCIjlneS0CeFJXBYwyKDswwY6pgFGOoAT7C6QLAf2mISriniNkW6slhvr%2Ftv5E1o3j93rFlD3bB2xEbqBaxBe8c0cXVFzLMA0mYlzmNaXZdzThCG4BKJDxr33Ai8u4OehoC1IQBoW%2BE3%2BJr3psGsnqRb6GRN5kYXmzlH9vFAwoe7imLMEdOQp4AcWnbKOn8N2Yji6NfN2ISYlqfHO0QsFUgExhk2iHCsAYzzeCXTxfNAK9EB%2BApXdiroa&X-Amz-Signature=754b748d3984d8875157ea1d2d13384126ea8cceb01f5473d7e0eabe4728507d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUHYMPS7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T042101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEhf7LvTpZssQIXfqAVUmDXEWQ0vvWsfs5HiiJXsZSkAiACPtMxdtNTE3jKJE1jTiwIIvxaNX7gSgnvzbNMWK%2FkeSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemUus1318Bton3GNKtwDPxLKmX2CYN%2F44IXh6LLS%2BlLPXAYbuDY4s6FRYCm9Wlp7G%2FilYAud7o1%2FxUaRruhBxC9albaqHSiExmBTD%2Fdj6HuE5g8yq0Ejt8vgJLYqlU5Tif1rHWNFgg54QISe3OolAzdj1IJtFMkmhlQbYzMTGW3dqos0InTtxGNr74YTf1MkB11FFG4AAEv83Gs9gJ08Rxy3q%2FfYh7KwPvr75yo5utizN7z%2FIIx1VdbbucmCp5LD7tdWku7jngbwyo2KWQNrh1pQG36N0sC4NT7TTPQox%2F9Wsovg6AstUObjuT1zpH7Iw0vs%2FOG2daRH6WJ6kw59qDaaPvHVyqG6t1fwC2B1pLPxSii0IcRzMx8rWDXDSFIQqBfQDPJaUTgmyu0aVTYf5DEGqqmFFyWQ%2Fce%2FK90G%2BNC1AtNbaDssqvCz9Se6AAyRUWriDvlopZ3LIoo6%2Fw7V%2FgE1gQsLn9wQRm%2BtLZFiNcCCKjn9MqI69s7FCaBh7PnykRoZbEqaZJiwL83xC7Sb9QUbeokCSCvPoYjeau2hs7Zz4ODNbyncrjb9Xz%2B4HaNaJRXGY7LjnzBm8abLvZVgN46RZVqEza6DUzeuZOMaQI2k9AdVuRGwj%2BvpdJhSo%2B%2FKCIjlneS0CeFJXBYwyKDswwY6pgFGOoAT7C6QLAf2mISriniNkW6slhvr%2Ftv5E1o3j93rFlD3bB2xEbqBaxBe8c0cXVFzLMA0mYlzmNaXZdzThCG4BKJDxr33Ai8u4OehoC1IQBoW%2BE3%2BJr3psGsnqRb6GRN5kYXmzlH9vFAwoe7imLMEdOQp4AcWnbKOn8N2Yji6NfN2ISYlqfHO0QsFUgExhk2iHCsAYzzeCXTxfNAK9EB%2BApXdiroa&X-Amz-Signature=1de59437e3f5c4c2f27f6aad9b7004bb6498a3487b1531051be3b0b532e79d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJZHBDJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBrmXcq%2FsYkHsHufPN9PxVyZkCO5fAejKbnhsK3fJPp3AiEA7c5IEYieddxw4AvELRzCwqtNXr28Do3rHcn948onVG0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDH7KLuWCes4h2%2FeePSrcA8FrAhjTZBN7eiJGIeXOUhhctxFuMVIE2QR%2BDybuRRTDg0cCs1QELkQIPEDoMTpmqGiSeH5xdFiusUJgRpK%2FbN%2F1MjHp678pSA0a3kbKSC6AH1RjV%2BVnh%2FnPHxj%2B42wBGNorLou5J%2B%2BX0RV5A%2FrA%2Fft0mSgbK1H29PkWeXLDkjSzBmOU%2FOVA5w2Gua2jD%2FWpkL48V3xfcCt%2FtQu%2FMnG4HCwjsWs6aOIgf2PQR28qXVcuKMogx0ujM0Ja1gzQFq6u%2BqaB5Hy3cnkyFlKR1cQYOGH61JwmY2Yirz1ThRXucU1FCmRGxLLQB10DHocQB82iP2FCtLlynYC4JRIqmUgA%2BY59YUkzjidTuf2qUieUPmbKqOTrzRrSStI3HmnQ%2FvFJf1KgjR8k7OlbiwPIt%2BF0%2FhydBezt9EgMvguu9LnM45GSlLffxnD8fvJ%2BLOcw6gpgUfCIuCK%2BxICr7pUqcr%2F1W1vUu5twuK1VbBZgc8aCIf1HSwN55JD4bFSUjV%2BU0k734OFdpT1Ed9b%2B9%2Bcl8Ht3JuzXhcon6LR%2Fwh54VezdxVwhoC6SMcZPQkoDVJd1CLttkN5VNTxiGCrt0xMgbbb8SetAWoBYT%2FtHw2TVVl4pAsso2UOtng4sriyiTtz9MO2hhL0GOqUBvuxAGuTSJKz4JG6yUXM5AQY%2BoFXvIiCTMcE6nHJTOobWUBeNavGVW%2FeU88tmawgc86pJB0p0cXH5qk4z%2FJ0%2FR8RtclZLf%2FT3Ly0Myoz9NKef5Yz2SJLSnVZHSoO2E5ySpBTQfhU0NIQnjxduL29XJUI2dvRPQUuK1i9csx5sWag1VmpBc3aVttuv0D%2FQ3xO4dyivrohOBuoPjxW%2BW1%2BENnDjqEXW&X-Amz-Signature=45c49b4c3a507e2d187ab18fc530efa74f0d534ca389b62fbd75fc84a4ee0a22&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJZHBDJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBrmXcq%2FsYkHsHufPN9PxVyZkCO5fAejKbnhsK3fJPp3AiEA7c5IEYieddxw4AvELRzCwqtNXr28Do3rHcn948onVG0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDH7KLuWCes4h2%2FeePSrcA8FrAhjTZBN7eiJGIeXOUhhctxFuMVIE2QR%2BDybuRRTDg0cCs1QELkQIPEDoMTpmqGiSeH5xdFiusUJgRpK%2FbN%2F1MjHp678pSA0a3kbKSC6AH1RjV%2BVnh%2FnPHxj%2B42wBGNorLou5J%2B%2BX0RV5A%2FrA%2Fft0mSgbK1H29PkWeXLDkjSzBmOU%2FOVA5w2Gua2jD%2FWpkL48V3xfcCt%2FtQu%2FMnG4HCwjsWs6aOIgf2PQR28qXVcuKMogx0ujM0Ja1gzQFq6u%2BqaB5Hy3cnkyFlKR1cQYOGH61JwmY2Yirz1ThRXucU1FCmRGxLLQB10DHocQB82iP2FCtLlynYC4JRIqmUgA%2BY59YUkzjidTuf2qUieUPmbKqOTrzRrSStI3HmnQ%2FvFJf1KgjR8k7OlbiwPIt%2BF0%2FhydBezt9EgMvguu9LnM45GSlLffxnD8fvJ%2BLOcw6gpgUfCIuCK%2BxICr7pUqcr%2F1W1vUu5twuK1VbBZgc8aCIf1HSwN55JD4bFSUjV%2BU0k734OFdpT1Ed9b%2B9%2Bcl8Ht3JuzXhcon6LR%2Fwh54VezdxVwhoC6SMcZPQkoDVJd1CLttkN5VNTxiGCrt0xMgbbb8SetAWoBYT%2FtHw2TVVl4pAsso2UOtng4sriyiTtz9MO2hhL0GOqUBvuxAGuTSJKz4JG6yUXM5AQY%2BoFXvIiCTMcE6nHJTOobWUBeNavGVW%2FeU88tmawgc86pJB0p0cXH5qk4z%2FJ0%2FR8RtclZLf%2FT3Ly0Myoz9NKef5Yz2SJLSnVZHSoO2E5ySpBTQfhU0NIQnjxduL29XJUI2dvRPQUuK1i9csx5sWag1VmpBc3aVttuv0D%2FQ3xO4dyivrohOBuoPjxW%2BW1%2BENnDjqEXW&X-Amz-Signature=42b2df4ec7466c594ef87cb5e7fd1f11b5f9c8c44f5aff1f8fc478e16abdb45f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWJZHBDJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIBrmXcq%2FsYkHsHufPN9PxVyZkCO5fAejKbnhsK3fJPp3AiEA7c5IEYieddxw4AvELRzCwqtNXr28Do3rHcn948onVG0q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDH7KLuWCes4h2%2FeePSrcA8FrAhjTZBN7eiJGIeXOUhhctxFuMVIE2QR%2BDybuRRTDg0cCs1QELkQIPEDoMTpmqGiSeH5xdFiusUJgRpK%2FbN%2F1MjHp678pSA0a3kbKSC6AH1RjV%2BVnh%2FnPHxj%2B42wBGNorLou5J%2B%2BX0RV5A%2FrA%2Fft0mSgbK1H29PkWeXLDkjSzBmOU%2FOVA5w2Gua2jD%2FWpkL48V3xfcCt%2FtQu%2FMnG4HCwjsWs6aOIgf2PQR28qXVcuKMogx0ujM0Ja1gzQFq6u%2BqaB5Hy3cnkyFlKR1cQYOGH61JwmY2Yirz1ThRXucU1FCmRGxLLQB10DHocQB82iP2FCtLlynYC4JRIqmUgA%2BY59YUkzjidTuf2qUieUPmbKqOTrzRrSStI3HmnQ%2FvFJf1KgjR8k7OlbiwPIt%2BF0%2FhydBezt9EgMvguu9LnM45GSlLffxnD8fvJ%2BLOcw6gpgUfCIuCK%2BxICr7pUqcr%2F1W1vUu5twuK1VbBZgc8aCIf1HSwN55JD4bFSUjV%2BU0k734OFdpT1Ed9b%2B9%2Bcl8Ht3JuzXhcon6LR%2Fwh54VezdxVwhoC6SMcZPQkoDVJd1CLttkN5VNTxiGCrt0xMgbbb8SetAWoBYT%2FtHw2TVVl4pAsso2UOtng4sriyiTtz9MO2hhL0GOqUBvuxAGuTSJKz4JG6yUXM5AQY%2BoFXvIiCTMcE6nHJTOobWUBeNavGVW%2FeU88tmawgc86pJB0p0cXH5qk4z%2FJ0%2FR8RtclZLf%2FT3Ly0Myoz9NKef5Yz2SJLSnVZHSoO2E5ySpBTQfhU0NIQnjxduL29XJUI2dvRPQUuK1i9csx5sWag1VmpBc3aVttuv0D%2FQ3xO4dyivrohOBuoPjxW%2BW1%2BENnDjqEXW&X-Amz-Signature=39e97328f894f5cf9495a46f2b809b5a4dbc37a562ff799c57e2ac7253491c43&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

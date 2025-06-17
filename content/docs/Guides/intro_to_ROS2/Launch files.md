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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZF52ZF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAWoElAk4dzzcFtOcWjoyV%2FyiUvpBNWekVdmIdcSnTYQIgKfdontcqxVysgY80FhuUs9zbl4TtaJSMBSAeWQBnPrgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKYpMAJXeEbwtFQaZyrcA%2F439jfQ2HSvZUl8QyZ3d4VOGMCDuL3qwWqeQacLCe702bW%2Bl%2FssuSWSiZl1NDcXsL4QmZiV3%2BXr9sgpSkSBPunuUd%2Bxiy949iehlvLeKiFCibdo%2BdG2P%2B8DEItLOlD5tT7ZH4XSZQ9wHcIfvdeMs%2FY7enlhpyL4u7VuJGzcw%2F7qZ9OnBvzXTKsl7SfThmtSeLIzbBlZ%2FQXsDrwSCTHkAXH%2F1Bb%2Fv5PxC1Kni1R3e4LpDKeJJNbxF4dfzLffJB14oDne027TdEnFTRdG1dmbfHb%2FpQ2RhlnESaZwcqLxUv3PsFqr1D3hJ0sZr7a%2FEtKDdAQjofGo2%2BrT%2F6RLoNHiFOmEikwHaJ2DNd%2F09E80LRTUjP%2B8CYIbgh2t40shNPuJ7QmCHmwEI06QX6wlpr4pwUVYLLCwG8DQMmjvLZP11cgu%2F%2F5vSA7gZmB6s21hgKZGd6GxsRDt0RypJPKlwMfNMAh509UReeSzG9s5J81BxMKFe%2BCCr4gSD4AXvTlZUFBszpCmtrBs9xWO9Tp5BgNd621mXJxHPnunq5MkHXLcsSX7WSQuIxjyvbUpZ9TjSvZqeCuHHWm2dAH18ZWIBl%2FtN57DaOPPulKNA7B0NfMVhKSZ6%2Fr5OP3OmHKM%2BWmyMNuIx8IGOqUBdgIUerOzSjCdDRwcz11%2FxVf0AUYbjVmfxHiOqE%2Fb%2BE1Iq5JCkfi%2FbGqrymdsajhyw7LQBIi3hi6nDXZ%2Bc7RCnkEce8UBXWUi85%2FB19gTBTKcejRZv6mykNYk1tut9FVLapzjGH1G7LVoVqjmFmOvUvPOAkGGpalNjtobfKVrCAPqLBg4U8RX8RKNVzkNSvnAUp0Y%2BB%2FH%2FNFM%2BcjYu1g75ictVZJi&X-Amz-Signature=46adc14c0f672a16cc87ee0c744bc64ca6d03da24d9085f9b758e555c9f9dd92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZF52ZF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAWoElAk4dzzcFtOcWjoyV%2FyiUvpBNWekVdmIdcSnTYQIgKfdontcqxVysgY80FhuUs9zbl4TtaJSMBSAeWQBnPrgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKYpMAJXeEbwtFQaZyrcA%2F439jfQ2HSvZUl8QyZ3d4VOGMCDuL3qwWqeQacLCe702bW%2Bl%2FssuSWSiZl1NDcXsL4QmZiV3%2BXr9sgpSkSBPunuUd%2Bxiy949iehlvLeKiFCibdo%2BdG2P%2B8DEItLOlD5tT7ZH4XSZQ9wHcIfvdeMs%2FY7enlhpyL4u7VuJGzcw%2F7qZ9OnBvzXTKsl7SfThmtSeLIzbBlZ%2FQXsDrwSCTHkAXH%2F1Bb%2Fv5PxC1Kni1R3e4LpDKeJJNbxF4dfzLffJB14oDne027TdEnFTRdG1dmbfHb%2FpQ2RhlnESaZwcqLxUv3PsFqr1D3hJ0sZr7a%2FEtKDdAQjofGo2%2BrT%2F6RLoNHiFOmEikwHaJ2DNd%2F09E80LRTUjP%2B8CYIbgh2t40shNPuJ7QmCHmwEI06QX6wlpr4pwUVYLLCwG8DQMmjvLZP11cgu%2F%2F5vSA7gZmB6s21hgKZGd6GxsRDt0RypJPKlwMfNMAh509UReeSzG9s5J81BxMKFe%2BCCr4gSD4AXvTlZUFBszpCmtrBs9xWO9Tp5BgNd621mXJxHPnunq5MkHXLcsSX7WSQuIxjyvbUpZ9TjSvZqeCuHHWm2dAH18ZWIBl%2FtN57DaOPPulKNA7B0NfMVhKSZ6%2Fr5OP3OmHKM%2BWmyMNuIx8IGOqUBdgIUerOzSjCdDRwcz11%2FxVf0AUYbjVmfxHiOqE%2Fb%2BE1Iq5JCkfi%2FbGqrymdsajhyw7LQBIi3hi6nDXZ%2Bc7RCnkEce8UBXWUi85%2FB19gTBTKcejRZv6mykNYk1tut9FVLapzjGH1G7LVoVqjmFmOvUvPOAkGGpalNjtobfKVrCAPqLBg4U8RX8RKNVzkNSvnAUp0Y%2BB%2FH%2FNFM%2BcjYu1g75ictVZJi&X-Amz-Signature=60c9fbaea5aa02c231a8e81ebb6042f01d502b3931ecb0b1c4d4e29efb5eeee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STZF52ZF%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAWoElAk4dzzcFtOcWjoyV%2FyiUvpBNWekVdmIdcSnTYQIgKfdontcqxVysgY80FhuUs9zbl4TtaJSMBSAeWQBnPrgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDKYpMAJXeEbwtFQaZyrcA%2F439jfQ2HSvZUl8QyZ3d4VOGMCDuL3qwWqeQacLCe702bW%2Bl%2FssuSWSiZl1NDcXsL4QmZiV3%2BXr9sgpSkSBPunuUd%2Bxiy949iehlvLeKiFCibdo%2BdG2P%2B8DEItLOlD5tT7ZH4XSZQ9wHcIfvdeMs%2FY7enlhpyL4u7VuJGzcw%2F7qZ9OnBvzXTKsl7SfThmtSeLIzbBlZ%2FQXsDrwSCTHkAXH%2F1Bb%2Fv5PxC1Kni1R3e4LpDKeJJNbxF4dfzLffJB14oDne027TdEnFTRdG1dmbfHb%2FpQ2RhlnESaZwcqLxUv3PsFqr1D3hJ0sZr7a%2FEtKDdAQjofGo2%2BrT%2F6RLoNHiFOmEikwHaJ2DNd%2F09E80LRTUjP%2B8CYIbgh2t40shNPuJ7QmCHmwEI06QX6wlpr4pwUVYLLCwG8DQMmjvLZP11cgu%2F%2F5vSA7gZmB6s21hgKZGd6GxsRDt0RypJPKlwMfNMAh509UReeSzG9s5J81BxMKFe%2BCCr4gSD4AXvTlZUFBszpCmtrBs9xWO9Tp5BgNd621mXJxHPnunq5MkHXLcsSX7WSQuIxjyvbUpZ9TjSvZqeCuHHWm2dAH18ZWIBl%2FtN57DaOPPulKNA7B0NfMVhKSZ6%2Fr5OP3OmHKM%2BWmyMNuIx8IGOqUBdgIUerOzSjCdDRwcz11%2FxVf0AUYbjVmfxHiOqE%2Fb%2BE1Iq5JCkfi%2FbGqrymdsajhyw7LQBIi3hi6nDXZ%2Bc7RCnkEce8UBXWUi85%2FB19gTBTKcejRZv6mykNYk1tut9FVLapzjGH1G7LVoVqjmFmOvUvPOAkGGpalNjtobfKVrCAPqLBg4U8RX8RKNVzkNSvnAUp0Y%2BB%2FH%2FNFM%2BcjYu1g75ictVZJi&X-Amz-Signature=2576c02a5112b12809d598172ae0a174fb5fe7d6e5d601e6843747d24ea8254f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

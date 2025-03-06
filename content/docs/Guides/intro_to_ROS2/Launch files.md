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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHXT5K4S%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BFwSQmw0kj0J87cq4aUFdhpj2N39dOyE9aDmupRqwaAiAxX1Z7%2FF5xB%2F%2FXkETHVM14PkRl%2F%2BFK%2BZi%2F2aZk3m%2BO8ir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMYBZ5cSCLv4SY6JoNKtwDZCme09dxLjdM%2Bp7DVRcf3Om%2BBO%2F330M2wIOTQtQmaJOfJ%2BapzX0rv53O%2FDCS7JY%2FXVNcsRKld0pShhY0%2Fnds9VNNyEX4R%2F0rWh8XxvXW8Gq7EOoiuEpiXVFki8puTf%2Ba8MtBQNDRAT7pOGKaxNiHgY7SMU0CUBOHYRZc7IGcepHajNh7rABB6%2BxfJ2Zmmpg%2FsX18K2542Vnykdau9GVdsqe93XAdaBwru2YmEir6SmEU1e2Xm09EwXWkImJBU3kKG7DLlddPehxq7OZDuWSUY6uToqbSZksoyITOwrRAbiimG15sJnpjm9fKO2tLl7Z48j%2BR1K0FUZ9mdTyaOAQbAVlUte%2FBtXgAVfjuGjMs6oBCzkbrgOBneefhJrq4D3jumNsEwtN%2FVmZjiAqElA0u9hiXFVT1PVtiQa3p3WrtJjpL0WtOmllKacDipFtrPPBKLv8PqkTwB5DAaWuOJgb1PDjth3Via3J5hc3WlWWUj1O8TZasd36afsF4%2FnYZOgJY6s7rOYrQiNe4Pv1U9AEZU0jvo7p1LPqW05yD7b8zFtFWzeDBQlhreKApApG1AfXulcJOK8UcIciLFVrYkLqiG76nniVOZXrmItxeQpeoTLU3t%2BhbXbet6WtKURowlPKlvgY6pgEwuolDGk6jKtDXsRkyUqa0ZbMkbW%2F6CsIB4KOw5Ea7%2FwyK26L7l5z8H%2BXIqGHLGUGuHVl%2B32D6rupukX5ARoMtnKP2sj1SCwUH2EKc3MB2ReM%2F%2Bgkl35gsnDopaq9%2BvRhI%2Fj6U%2BPNV3VuBBQElzzGmKGJ4BDjKx5Ipb3YN902m780mEKxa1VAOCdttJwUP9DIMV43VPJS3cMGz75fwauafI7MNR%2FaY&X-Amz-Signature=7043a21485f3308330c9f351ae07dfb34bcb7638446fdccdc80899eac6e230b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHXT5K4S%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BFwSQmw0kj0J87cq4aUFdhpj2N39dOyE9aDmupRqwaAiAxX1Z7%2FF5xB%2F%2FXkETHVM14PkRl%2F%2BFK%2BZi%2F2aZk3m%2BO8ir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMYBZ5cSCLv4SY6JoNKtwDZCme09dxLjdM%2Bp7DVRcf3Om%2BBO%2F330M2wIOTQtQmaJOfJ%2BapzX0rv53O%2FDCS7JY%2FXVNcsRKld0pShhY0%2Fnds9VNNyEX4R%2F0rWh8XxvXW8Gq7EOoiuEpiXVFki8puTf%2Ba8MtBQNDRAT7pOGKaxNiHgY7SMU0CUBOHYRZc7IGcepHajNh7rABB6%2BxfJ2Zmmpg%2FsX18K2542Vnykdau9GVdsqe93XAdaBwru2YmEir6SmEU1e2Xm09EwXWkImJBU3kKG7DLlddPehxq7OZDuWSUY6uToqbSZksoyITOwrRAbiimG15sJnpjm9fKO2tLl7Z48j%2BR1K0FUZ9mdTyaOAQbAVlUte%2FBtXgAVfjuGjMs6oBCzkbrgOBneefhJrq4D3jumNsEwtN%2FVmZjiAqElA0u9hiXFVT1PVtiQa3p3WrtJjpL0WtOmllKacDipFtrPPBKLv8PqkTwB5DAaWuOJgb1PDjth3Via3J5hc3WlWWUj1O8TZasd36afsF4%2FnYZOgJY6s7rOYrQiNe4Pv1U9AEZU0jvo7p1LPqW05yD7b8zFtFWzeDBQlhreKApApG1AfXulcJOK8UcIciLFVrYkLqiG76nniVOZXrmItxeQpeoTLU3t%2BhbXbet6WtKURowlPKlvgY6pgEwuolDGk6jKtDXsRkyUqa0ZbMkbW%2F6CsIB4KOw5Ea7%2FwyK26L7l5z8H%2BXIqGHLGUGuHVl%2B32D6rupukX5ARoMtnKP2sj1SCwUH2EKc3MB2ReM%2F%2Bgkl35gsnDopaq9%2BvRhI%2Fj6U%2BPNV3VuBBQElzzGmKGJ4BDjKx5Ipb3YN902m780mEKxa1VAOCdttJwUP9DIMV43VPJS3cMGz75fwauafI7MNR%2FaY&X-Amz-Signature=c63dd0dc2d70cab2499e12e5984e9c4a3b275e05660f4836286a17af2a8666c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHXT5K4S%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BFwSQmw0kj0J87cq4aUFdhpj2N39dOyE9aDmupRqwaAiAxX1Z7%2FF5xB%2F%2FXkETHVM14PkRl%2F%2BFK%2BZi%2F2aZk3m%2BO8ir%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMYBZ5cSCLv4SY6JoNKtwDZCme09dxLjdM%2Bp7DVRcf3Om%2BBO%2F330M2wIOTQtQmaJOfJ%2BapzX0rv53O%2FDCS7JY%2FXVNcsRKld0pShhY0%2Fnds9VNNyEX4R%2F0rWh8XxvXW8Gq7EOoiuEpiXVFki8puTf%2Ba8MtBQNDRAT7pOGKaxNiHgY7SMU0CUBOHYRZc7IGcepHajNh7rABB6%2BxfJ2Zmmpg%2FsX18K2542Vnykdau9GVdsqe93XAdaBwru2YmEir6SmEU1e2Xm09EwXWkImJBU3kKG7DLlddPehxq7OZDuWSUY6uToqbSZksoyITOwrRAbiimG15sJnpjm9fKO2tLl7Z48j%2BR1K0FUZ9mdTyaOAQbAVlUte%2FBtXgAVfjuGjMs6oBCzkbrgOBneefhJrq4D3jumNsEwtN%2FVmZjiAqElA0u9hiXFVT1PVtiQa3p3WrtJjpL0WtOmllKacDipFtrPPBKLv8PqkTwB5DAaWuOJgb1PDjth3Via3J5hc3WlWWUj1O8TZasd36afsF4%2FnYZOgJY6s7rOYrQiNe4Pv1U9AEZU0jvo7p1LPqW05yD7b8zFtFWzeDBQlhreKApApG1AfXulcJOK8UcIciLFVrYkLqiG76nniVOZXrmItxeQpeoTLU3t%2BhbXbet6WtKURowlPKlvgY6pgEwuolDGk6jKtDXsRkyUqa0ZbMkbW%2F6CsIB4KOw5Ea7%2FwyK26L7l5z8H%2BXIqGHLGUGuHVl%2B32D6rupukX5ARoMtnKP2sj1SCwUH2EKc3MB2ReM%2F%2Bgkl35gsnDopaq9%2BvRhI%2Fj6U%2BPNV3VuBBQElzzGmKGJ4BDjKx5Ipb3YN902m780mEKxa1VAOCdttJwUP9DIMV43VPJS3cMGz75fwauafI7MNR%2FaY&X-Amz-Signature=04296ae7e43504e8d8e8b2a3f7f9a9b77a92d1ec1670a0c16dfbe9d3bc5d798a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

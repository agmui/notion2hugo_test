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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6SWGBCZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZq4ioFLg0kfZiLocetcQMcOq3fPvVTFBdBCpsKMOADAiEA4%2FNAhOe%2BUaEtzZcUOB3tMieREbaGYps%2F8hPlFUxI95kqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTcBHJvjA5ynhw2WyrcAyulNWGIFF%2FDEBECAbYrQJstiTNJcB3slD0ZfuaqVQfIrv8gDyhw%2BrhMsS6T%2B%2B506CQKhRF2qaGvwgyilWC8lmrgGjcbxZKcj9PTBP7MJdwZm%2BLnDH8PB4UyiX9idgZJGA68D5VZgxAWs5YLh5QSEZqgBIfEUNqXbo4FJLGXsDjoNb5iptnVdItStrsENdaItyIHLMNeCvwIwmuRNks7shhqKdsGWz5YvnpRtCg2UmaynnHfMal7TrBOI0Boj8jSfAzBvaXDQORy6FItYErWwhL2r5JLfpIWWGFGbu5XRxijQdy%2BwJU8eK4XU%2BxQhnAwUh4q1PqlyhhgKoxXmUvHJK%2FmJkBGyhaOfYN9GpFrhmLk6V5ogJMTsAN68J9jkG3C8snhwOS17QCH60aiKn2nJrRygsh0jjwGILhPlvTP1OFo%2BVwbwnB2COuUnsuvWIylf9Twx%2BMXyPl201WkVbssHx2IcwnbkMCxqxEritMUPoohApQKjA6Ou3PIqMhPiBT35D3dlOVMXEzHwrW4WuvgBVPvEHaMsBNNz%2B2c9BM4EnMNDLqRD4u43kNmpLK34e8RAFzSJPinqWRBOpnVBT%2BIfLWQx9gF%2FxvSmPTIWHQNs2RpFTR5%2FtoD8eR05XasMPLW%2FMIGOqUBQMkr5RGnl%2FM9Ai4%2Fep8foFQtgCYiOqCVbafz%2FoMDr0Ily7ORmO8%2BMqanTso3D2SEvDTJnyg09n8kI4Nx%2FnRdMFi8xbo7xEAwgmpcnZaz5OSxT48EkFzyt3mMz7cp4%2F6y4qP2oR5FSAI%2B%2BBGyl4iJYeNHRcrOh2%2BvQUWQ2uvDKKfzUjio1wtoL986TjA2A5TDwnHYV5h22%2BOrSBBrwPQBuqNLY686&X-Amz-Signature=6167d0cd81e0edca50345776b662653503e66e2f47d85cfd61b1f97c64a1355b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6SWGBCZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZq4ioFLg0kfZiLocetcQMcOq3fPvVTFBdBCpsKMOADAiEA4%2FNAhOe%2BUaEtzZcUOB3tMieREbaGYps%2F8hPlFUxI95kqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTcBHJvjA5ynhw2WyrcAyulNWGIFF%2FDEBECAbYrQJstiTNJcB3slD0ZfuaqVQfIrv8gDyhw%2BrhMsS6T%2B%2B506CQKhRF2qaGvwgyilWC8lmrgGjcbxZKcj9PTBP7MJdwZm%2BLnDH8PB4UyiX9idgZJGA68D5VZgxAWs5YLh5QSEZqgBIfEUNqXbo4FJLGXsDjoNb5iptnVdItStrsENdaItyIHLMNeCvwIwmuRNks7shhqKdsGWz5YvnpRtCg2UmaynnHfMal7TrBOI0Boj8jSfAzBvaXDQORy6FItYErWwhL2r5JLfpIWWGFGbu5XRxijQdy%2BwJU8eK4XU%2BxQhnAwUh4q1PqlyhhgKoxXmUvHJK%2FmJkBGyhaOfYN9GpFrhmLk6V5ogJMTsAN68J9jkG3C8snhwOS17QCH60aiKn2nJrRygsh0jjwGILhPlvTP1OFo%2BVwbwnB2COuUnsuvWIylf9Twx%2BMXyPl201WkVbssHx2IcwnbkMCxqxEritMUPoohApQKjA6Ou3PIqMhPiBT35D3dlOVMXEzHwrW4WuvgBVPvEHaMsBNNz%2B2c9BM4EnMNDLqRD4u43kNmpLK34e8RAFzSJPinqWRBOpnVBT%2BIfLWQx9gF%2FxvSmPTIWHQNs2RpFTR5%2FtoD8eR05XasMPLW%2FMIGOqUBQMkr5RGnl%2FM9Ai4%2Fep8foFQtgCYiOqCVbafz%2FoMDr0Ily7ORmO8%2BMqanTso3D2SEvDTJnyg09n8kI4Nx%2FnRdMFi8xbo7xEAwgmpcnZaz5OSxT48EkFzyt3mMz7cp4%2F6y4qP2oR5FSAI%2B%2BBGyl4iJYeNHRcrOh2%2BvQUWQ2uvDKKfzUjio1wtoL986TjA2A5TDwnHYV5h22%2BOrSBBrwPQBuqNLY686&X-Amz-Signature=5855a7fb6ad4b204b788e87a4f4427e00cf9d62a27abf5b8afaaa9a46150cb96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6SWGBCZ%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T004132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZq4ioFLg0kfZiLocetcQMcOq3fPvVTFBdBCpsKMOADAiEA4%2FNAhOe%2BUaEtzZcUOB3tMieREbaGYps%2F8hPlFUxI95kqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNTcBHJvjA5ynhw2WyrcAyulNWGIFF%2FDEBECAbYrQJstiTNJcB3slD0ZfuaqVQfIrv8gDyhw%2BrhMsS6T%2B%2B506CQKhRF2qaGvwgyilWC8lmrgGjcbxZKcj9PTBP7MJdwZm%2BLnDH8PB4UyiX9idgZJGA68D5VZgxAWs5YLh5QSEZqgBIfEUNqXbo4FJLGXsDjoNb5iptnVdItStrsENdaItyIHLMNeCvwIwmuRNks7shhqKdsGWz5YvnpRtCg2UmaynnHfMal7TrBOI0Boj8jSfAzBvaXDQORy6FItYErWwhL2r5JLfpIWWGFGbu5XRxijQdy%2BwJU8eK4XU%2BxQhnAwUh4q1PqlyhhgKoxXmUvHJK%2FmJkBGyhaOfYN9GpFrhmLk6V5ogJMTsAN68J9jkG3C8snhwOS17QCH60aiKn2nJrRygsh0jjwGILhPlvTP1OFo%2BVwbwnB2COuUnsuvWIylf9Twx%2BMXyPl201WkVbssHx2IcwnbkMCxqxEritMUPoohApQKjA6Ou3PIqMhPiBT35D3dlOVMXEzHwrW4WuvgBVPvEHaMsBNNz%2B2c9BM4EnMNDLqRD4u43kNmpLK34e8RAFzSJPinqWRBOpnVBT%2BIfLWQx9gF%2FxvSmPTIWHQNs2RpFTR5%2FtoD8eR05XasMPLW%2FMIGOqUBQMkr5RGnl%2FM9Ai4%2Fep8foFQtgCYiOqCVbafz%2FoMDr0Ily7ORmO8%2BMqanTso3D2SEvDTJnyg09n8kI4Nx%2FnRdMFi8xbo7xEAwgmpcnZaz5OSxT48EkFzyt3mMz7cp4%2F6y4qP2oR5FSAI%2B%2BBGyl4iJYeNHRcrOh2%2BvQUWQ2uvDKKfzUjio1wtoL986TjA2A5TDwnHYV5h22%2BOrSBBrwPQBuqNLY686&X-Amz-Signature=f18ec95ad65c785dfa3ee38163ae9b21308b35843a7171eeae2dd698fda90692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

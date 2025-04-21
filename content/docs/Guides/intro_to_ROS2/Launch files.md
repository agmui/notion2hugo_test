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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPV5CBQQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGXXAvjR6PKRtFEBi6ExvYvZPOdnD0zZVRRm8CrJ%2FuDtAiAGwIpe3CQ1DBgYaqKAvjP2faWLwvSULuW57Rovc1J5WyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbPw%2BMwFiHZeoLPZrKtwDPfshFnsPrTklqTHNwBpUfAAIPaH1q8h7QfiiMLgFTmCRsUXjmL%2BYN3UJ4PDWJR%2Fg9THT5zVx4j0iLRkx9901a2NVG5UMF27lwos3tVFbkLiRY%2FslvdAusFd6OGVsNSEpwRj6455PVq%2FjfDZpB3Ag0NbB29R0Vf9A6%2BGNrAEsT836uRze7Le%2FhpyeTlKrHCW1dl0Yim69hlwB3EKElrab6cfjIXdoUT%2FkibphQN14Ji%2FfGYnotOWPXWYUSd0uVgvQqwJ4aMAs1mmPwW%2BCtMqyx199um45j386WRTrWUrJM8Gu4lwfSTceIMUOE2YHnQWN7ccw2tPUvZw45bVrUCVSIGIz2JAi%2FedSq8yQ3PDL%2Fo0KBWu2%2FlMxqAh4Lo%2F6TAtOwe%2F800XXf5i%2FbJz55H%2BYfLQxkfi%2FxWW2%2FGrqFBfypLH6PWgH%2BZix0bvJtqeb8AmYFezQ%2FarE2DdRBlhf%2FLGswzXnI7MuMOf7FyarXxKSwus4fYXMAZftIUNblIDoYAXZhY38i%2BP9ZPNbae43%2Bil9euCe4JdaSqDqCt47dyJHmDhY2CIfAaGZUVCCE7OZUB3bX8KC6WIidY8Hysr6VDn5c%2F2DaZB3Wl6OfdBwrNr1l874G%2F3XhuPYLHfmM7wws%2FWZwAY6pgErt3DZ9zk4L7gHtpVXE5S5FFUJlr2NE%2FPq8A2VDT8syzfe5nrSvOUn26v6iyBJq1Q0hTQ8M0h%2BJJl50cAbQ9GnoLgYFd381FLp58fhwlRWJsvcUn3%2BpO9jjqZCBLDUX7GKMEEQ7OTfEG%2FN%2BsQHVVOUi88sbnd9AW%2B2X397BsMyVuuDTGcJNbkVHbudOov6nVjlb9j0IiFwglO2g4xGOkdUQqroNkgJ&X-Amz-Signature=3b5046d0544ff4747adf4931df8cb5fe3124e1300011bdd8f84c3e12ac655722&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPV5CBQQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGXXAvjR6PKRtFEBi6ExvYvZPOdnD0zZVRRm8CrJ%2FuDtAiAGwIpe3CQ1DBgYaqKAvjP2faWLwvSULuW57Rovc1J5WyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbPw%2BMwFiHZeoLPZrKtwDPfshFnsPrTklqTHNwBpUfAAIPaH1q8h7QfiiMLgFTmCRsUXjmL%2BYN3UJ4PDWJR%2Fg9THT5zVx4j0iLRkx9901a2NVG5UMF27lwos3tVFbkLiRY%2FslvdAusFd6OGVsNSEpwRj6455PVq%2FjfDZpB3Ag0NbB29R0Vf9A6%2BGNrAEsT836uRze7Le%2FhpyeTlKrHCW1dl0Yim69hlwB3EKElrab6cfjIXdoUT%2FkibphQN14Ji%2FfGYnotOWPXWYUSd0uVgvQqwJ4aMAs1mmPwW%2BCtMqyx199um45j386WRTrWUrJM8Gu4lwfSTceIMUOE2YHnQWN7ccw2tPUvZw45bVrUCVSIGIz2JAi%2FedSq8yQ3PDL%2Fo0KBWu2%2FlMxqAh4Lo%2F6TAtOwe%2F800XXf5i%2FbJz55H%2BYfLQxkfi%2FxWW2%2FGrqFBfypLH6PWgH%2BZix0bvJtqeb8AmYFezQ%2FarE2DdRBlhf%2FLGswzXnI7MuMOf7FyarXxKSwus4fYXMAZftIUNblIDoYAXZhY38i%2BP9ZPNbae43%2Bil9euCe4JdaSqDqCt47dyJHmDhY2CIfAaGZUVCCE7OZUB3bX8KC6WIidY8Hysr6VDn5c%2F2DaZB3Wl6OfdBwrNr1l874G%2F3XhuPYLHfmM7wws%2FWZwAY6pgErt3DZ9zk4L7gHtpVXE5S5FFUJlr2NE%2FPq8A2VDT8syzfe5nrSvOUn26v6iyBJq1Q0hTQ8M0h%2BJJl50cAbQ9GnoLgYFd381FLp58fhwlRWJsvcUn3%2BpO9jjqZCBLDUX7GKMEEQ7OTfEG%2FN%2BsQHVVOUi88sbnd9AW%2B2X397BsMyVuuDTGcJNbkVHbudOov6nVjlb9j0IiFwglO2g4xGOkdUQqroNkgJ&X-Amz-Signature=d5861fac8ded7721ae52148afc75d02fc4b3a972361b85cffb10f7503ae8666f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPV5CBQQ%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIGXXAvjR6PKRtFEBi6ExvYvZPOdnD0zZVRRm8CrJ%2FuDtAiAGwIpe3CQ1DBgYaqKAvjP2faWLwvSULuW57Rovc1J5WyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbPw%2BMwFiHZeoLPZrKtwDPfshFnsPrTklqTHNwBpUfAAIPaH1q8h7QfiiMLgFTmCRsUXjmL%2BYN3UJ4PDWJR%2Fg9THT5zVx4j0iLRkx9901a2NVG5UMF27lwos3tVFbkLiRY%2FslvdAusFd6OGVsNSEpwRj6455PVq%2FjfDZpB3Ag0NbB29R0Vf9A6%2BGNrAEsT836uRze7Le%2FhpyeTlKrHCW1dl0Yim69hlwB3EKElrab6cfjIXdoUT%2FkibphQN14Ji%2FfGYnotOWPXWYUSd0uVgvQqwJ4aMAs1mmPwW%2BCtMqyx199um45j386WRTrWUrJM8Gu4lwfSTceIMUOE2YHnQWN7ccw2tPUvZw45bVrUCVSIGIz2JAi%2FedSq8yQ3PDL%2Fo0KBWu2%2FlMxqAh4Lo%2F6TAtOwe%2F800XXf5i%2FbJz55H%2BYfLQxkfi%2FxWW2%2FGrqFBfypLH6PWgH%2BZix0bvJtqeb8AmYFezQ%2FarE2DdRBlhf%2FLGswzXnI7MuMOf7FyarXxKSwus4fYXMAZftIUNblIDoYAXZhY38i%2BP9ZPNbae43%2Bil9euCe4JdaSqDqCt47dyJHmDhY2CIfAaGZUVCCE7OZUB3bX8KC6WIidY8Hysr6VDn5c%2F2DaZB3Wl6OfdBwrNr1l874G%2F3XhuPYLHfmM7wws%2FWZwAY6pgErt3DZ9zk4L7gHtpVXE5S5FFUJlr2NE%2FPq8A2VDT8syzfe5nrSvOUn26v6iyBJq1Q0hTQ8M0h%2BJJl50cAbQ9GnoLgYFd381FLp58fhwlRWJsvcUn3%2BpO9jjqZCBLDUX7GKMEEQ7OTfEG%2FN%2BsQHVVOUi88sbnd9AW%2B2X397BsMyVuuDTGcJNbkVHbudOov6nVjlb9j0IiFwglO2g4xGOkdUQqroNkgJ&X-Amz-Signature=e891b9139f8bce9edb12317ce8b90933eccb56b641fb01a8cd57129a9006f121&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

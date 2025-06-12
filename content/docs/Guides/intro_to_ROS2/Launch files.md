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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSIQVPO6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFKE1O8W%2B2xB4QZPVgwzNLH3MrXG8dayhrvSfnAbHnFYAiEAvPGTDNuepfVvdV%2FVDDBcDtpK8v3uRTGMpHfEOwQn7XcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk6oCUYHgBxCwHieyrcAw%2BcUg28W4ttDb0HeG0uP6SAmDCAobYRhRML%2Bqkk9Rwa8FOip%2F0ajqZYW55HmO1pT5Vec%2BwJywdkMFZ9%2BSctJkFcKBPq%2BKpNMwoIzrjZZGuYpnKTbBJ5Ne4RmAYcALEM%2Bp3chAD4pxVwaAYlB%2FUAJhXoVtujQdFCjlS3u%2BKQd4DSCoLhaej%2BozF2%2F7LL1tj%2B%2BSKq%2Bt%2FizWsFYUkW8z9ZN1pcdsDpFDYMSEnyfh19v%2Fi4WCdVGWKyXPLCRpPyJeHy82%2FnxPxLLBLtOwA4hLEqyG9PLzyVW6yoo9zypknReoEWXyVr%2FD%2FIbA%2BiWaWe1ZE0fTpFEf7zpb3wu7NurHnYONKFe20Huv%2FMhJH9bGvEgufyybXx3FnpgNXz3LWb8%2Fzl%2Fte3I01bjghhSOEPuhdS5nsR0tyDZAdp7viVHhRkkg3WZ8JztbnG3I%2BAxL1LPv5HFB1CG0dI319Udkm7M%2B39d2697pfM3JyNA6yPadwLPAQdl%2FdvlH%2BX3OtkhPRxy6YKf17U11%2FKRFX5AnqdhZ%2FBV7FO%2BlLjqyxPQr4F03Zl%2Fb52DIMX1cZKlTMUC5Eq0WWZnpnFPFFtxMj5v79rp7t%2FXA0Cm5KYc0c1ZRjjIwTEB93ZoGy1fLjJdW6Jt%2FYMMPKTqcIGOqUBYfH5LM3aRR7ecSxDTroX6BlPMlvk%2BJCV10Fd6ZXolmuNNF%2BJo7Qh9F10yNjti4WOIOrDJi45UJyZGEOjouiDqhzDsn0eoG3BqzwOi0zI1b4dHMRHbaOedt%2F4B5DSE7EajwRRj%2Bb1E0vCoDGpvMxNgwU6J02auyz0qMIzWp9ArUwBGgXqOkg3SdmvpjxLWGhYn0fELgC%2BS3mzN%2Br7locJPA6qEqmd&X-Amz-Signature=f7660a421c86e10429bfd1ef34e8c2fdecfb512a8e0833ae83b64950f473ee43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSIQVPO6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFKE1O8W%2B2xB4QZPVgwzNLH3MrXG8dayhrvSfnAbHnFYAiEAvPGTDNuepfVvdV%2FVDDBcDtpK8v3uRTGMpHfEOwQn7XcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk6oCUYHgBxCwHieyrcAw%2BcUg28W4ttDb0HeG0uP6SAmDCAobYRhRML%2Bqkk9Rwa8FOip%2F0ajqZYW55HmO1pT5Vec%2BwJywdkMFZ9%2BSctJkFcKBPq%2BKpNMwoIzrjZZGuYpnKTbBJ5Ne4RmAYcALEM%2Bp3chAD4pxVwaAYlB%2FUAJhXoVtujQdFCjlS3u%2BKQd4DSCoLhaej%2BozF2%2F7LL1tj%2B%2BSKq%2Bt%2FizWsFYUkW8z9ZN1pcdsDpFDYMSEnyfh19v%2Fi4WCdVGWKyXPLCRpPyJeHy82%2FnxPxLLBLtOwA4hLEqyG9PLzyVW6yoo9zypknReoEWXyVr%2FD%2FIbA%2BiWaWe1ZE0fTpFEf7zpb3wu7NurHnYONKFe20Huv%2FMhJH9bGvEgufyybXx3FnpgNXz3LWb8%2Fzl%2Fte3I01bjghhSOEPuhdS5nsR0tyDZAdp7viVHhRkkg3WZ8JztbnG3I%2BAxL1LPv5HFB1CG0dI319Udkm7M%2B39d2697pfM3JyNA6yPadwLPAQdl%2FdvlH%2BX3OtkhPRxy6YKf17U11%2FKRFX5AnqdhZ%2FBV7FO%2BlLjqyxPQr4F03Zl%2Fb52DIMX1cZKlTMUC5Eq0WWZnpnFPFFtxMj5v79rp7t%2FXA0Cm5KYc0c1ZRjjIwTEB93ZoGy1fLjJdW6Jt%2FYMMPKTqcIGOqUBYfH5LM3aRR7ecSxDTroX6BlPMlvk%2BJCV10Fd6ZXolmuNNF%2BJo7Qh9F10yNjti4WOIOrDJi45UJyZGEOjouiDqhzDsn0eoG3BqzwOi0zI1b4dHMRHbaOedt%2F4B5DSE7EajwRRj%2Bb1E0vCoDGpvMxNgwU6J02auyz0qMIzWp9ArUwBGgXqOkg3SdmvpjxLWGhYn0fELgC%2BS3mzN%2Br7locJPA6qEqmd&X-Amz-Signature=76c7959c451ea9dc5bc5a9b27814b7b0e917f8756a3a9027f645ce6b01bbc036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSIQVPO6%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T051002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIFKE1O8W%2B2xB4QZPVgwzNLH3MrXG8dayhrvSfnAbHnFYAiEAvPGTDNuepfVvdV%2FVDDBcDtpK8v3uRTGMpHfEOwQn7XcqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPk6oCUYHgBxCwHieyrcAw%2BcUg28W4ttDb0HeG0uP6SAmDCAobYRhRML%2Bqkk9Rwa8FOip%2F0ajqZYW55HmO1pT5Vec%2BwJywdkMFZ9%2BSctJkFcKBPq%2BKpNMwoIzrjZZGuYpnKTbBJ5Ne4RmAYcALEM%2Bp3chAD4pxVwaAYlB%2FUAJhXoVtujQdFCjlS3u%2BKQd4DSCoLhaej%2BozF2%2F7LL1tj%2B%2BSKq%2Bt%2FizWsFYUkW8z9ZN1pcdsDpFDYMSEnyfh19v%2Fi4WCdVGWKyXPLCRpPyJeHy82%2FnxPxLLBLtOwA4hLEqyG9PLzyVW6yoo9zypknReoEWXyVr%2FD%2FIbA%2BiWaWe1ZE0fTpFEf7zpb3wu7NurHnYONKFe20Huv%2FMhJH9bGvEgufyybXx3FnpgNXz3LWb8%2Fzl%2Fte3I01bjghhSOEPuhdS5nsR0tyDZAdp7viVHhRkkg3WZ8JztbnG3I%2BAxL1LPv5HFB1CG0dI319Udkm7M%2B39d2697pfM3JyNA6yPadwLPAQdl%2FdvlH%2BX3OtkhPRxy6YKf17U11%2FKRFX5AnqdhZ%2FBV7FO%2BlLjqyxPQr4F03Zl%2Fb52DIMX1cZKlTMUC5Eq0WWZnpnFPFFtxMj5v79rp7t%2FXA0Cm5KYc0c1ZRjjIwTEB93ZoGy1fLjJdW6Jt%2FYMMPKTqcIGOqUBYfH5LM3aRR7ecSxDTroX6BlPMlvk%2BJCV10Fd6ZXolmuNNF%2BJo7Qh9F10yNjti4WOIOrDJi45UJyZGEOjouiDqhzDsn0eoG3BqzwOi0zI1b4dHMRHbaOedt%2F4B5DSE7EajwRRj%2Bb1E0vCoDGpvMxNgwU6J02auyz0qMIzWp9ArUwBGgXqOkg3SdmvpjxLWGhYn0fELgC%2BS3mzN%2Br7locJPA6qEqmd&X-Amz-Signature=d42bb59905d215eec9b5033c76075d09a2540b0c96ea53f57e81745c866731e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

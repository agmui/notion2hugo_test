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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624KPKTBA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpC%2Fe0QpFOu9t55FByVjnih91LEs9BZ5y7nqjLm2nOEQIgHvhH2AKl8LG4k4r9yKbGlYTfKpclz0Bi%2BG3wp8qUi8YqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2YIAPrfGknjh7WhCrcA2pl1RoXdRyE%2BqgGKA2OK9z9PGJF%2BaZJu2vxnRSzdYBLk9JzXkGoiz1Ltjmq%2B1CKjXSoMa4X8LvCLNZJF8V%2FEyRmvZEr%2FxCbrKc1H2MRTyYoceT%2BvtNIRMqskmPyN%2FsFcGkmkNGG%2FgbzOZEe3V9TZJ79E1POxMwkHwbPw8%2BXgsjL6M4RrfjZEZw8I9iNG4BfWAVq4fGMZg3SAnsfbmJKmA6FN44nmi0TYeevJ3bc65h%2FExsfmExm3BisMEQu%2BYejh9QrrVMV%2BND2J%2Fq%2BoHai9JDiresxtjOANp526%2B9FiV7yEt4wU2GxS3P0SxUl84%2FwnPBxUP3UGXNMqK1%2F%2FGTVZDaJwI%2Fg25SijkFzOrP7ozBwa4MKcGeRqddGmoHtmsE2BZxeQipHa1eRCiXR1c%2FV3F2faPn0%2Bb2HtJ8HLARY9bGjfmFdIJN7%2ByaLdj%2FpA4zI97IHHi0Eci0fJsmHRNPyi51N9%2Bc5oY9Pc4XI7vMGXuZ%2BPTyb6rmCtcIPRkTa1lPQ%2BwWSmxGTSVDdT5taf6kTwRDfsd%2BPVa5rn61sXEZTCWKM8mMVwuEggBwYzWL1%2ByZd8traiej2lAEeN6ELpCdDAJw7HgGnIm%2BTUdnLd9hsoOGZZUxnveuaFIvKXiLjMMiurr0GOqUByuMkrymTCGtt8kT%2BEuZFqxS4mDBgDECuXN6IdYU5eObaciMZvkQ39Ft7nCOGWJyYQeehUYqbHF0OYfSYc8P%2F8EC8g6BDyPq78j%2BBBsrHe4mnah%2FpwKrZ2YGzsPWHRUv6kXRLQOWKnvWBLh1i%2BoCsclk0fxgeQ2SmPW8AQwTfxbBINGi9ETxLO2qigM%2B1%2FRa%2B2zHFtUHtV2dkq5vVe6Z1%2Bzk9NVU0&X-Amz-Signature=4491dcdfe0e69dc8c67771ebfcf351932ca34ee535b4ec57b3677fc4c11b8dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624KPKTBA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpC%2Fe0QpFOu9t55FByVjnih91LEs9BZ5y7nqjLm2nOEQIgHvhH2AKl8LG4k4r9yKbGlYTfKpclz0Bi%2BG3wp8qUi8YqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2YIAPrfGknjh7WhCrcA2pl1RoXdRyE%2BqgGKA2OK9z9PGJF%2BaZJu2vxnRSzdYBLk9JzXkGoiz1Ltjmq%2B1CKjXSoMa4X8LvCLNZJF8V%2FEyRmvZEr%2FxCbrKc1H2MRTyYoceT%2BvtNIRMqskmPyN%2FsFcGkmkNGG%2FgbzOZEe3V9TZJ79E1POxMwkHwbPw8%2BXgsjL6M4RrfjZEZw8I9iNG4BfWAVq4fGMZg3SAnsfbmJKmA6FN44nmi0TYeevJ3bc65h%2FExsfmExm3BisMEQu%2BYejh9QrrVMV%2BND2J%2Fq%2BoHai9JDiresxtjOANp526%2B9FiV7yEt4wU2GxS3P0SxUl84%2FwnPBxUP3UGXNMqK1%2F%2FGTVZDaJwI%2Fg25SijkFzOrP7ozBwa4MKcGeRqddGmoHtmsE2BZxeQipHa1eRCiXR1c%2FV3F2faPn0%2Bb2HtJ8HLARY9bGjfmFdIJN7%2ByaLdj%2FpA4zI97IHHi0Eci0fJsmHRNPyi51N9%2Bc5oY9Pc4XI7vMGXuZ%2BPTyb6rmCtcIPRkTa1lPQ%2BwWSmxGTSVDdT5taf6kTwRDfsd%2BPVa5rn61sXEZTCWKM8mMVwuEggBwYzWL1%2ByZd8traiej2lAEeN6ELpCdDAJw7HgGnIm%2BTUdnLd9hsoOGZZUxnveuaFIvKXiLjMMiurr0GOqUByuMkrymTCGtt8kT%2BEuZFqxS4mDBgDECuXN6IdYU5eObaciMZvkQ39Ft7nCOGWJyYQeehUYqbHF0OYfSYc8P%2F8EC8g6BDyPq78j%2BBBsrHe4mnah%2FpwKrZ2YGzsPWHRUv6kXRLQOWKnvWBLh1i%2BoCsclk0fxgeQ2SmPW8AQwTfxbBINGi9ETxLO2qigM%2B1%2FRa%2B2zHFtUHtV2dkq5vVe6Z1%2Bzk9NVU0&X-Amz-Signature=e1fbeeeb31e5217d3139f0a7c21370a68ff4ecf8e3cb38360fb9d5c89c17e3f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624KPKTBA%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T190129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpC%2Fe0QpFOu9t55FByVjnih91LEs9BZ5y7nqjLm2nOEQIgHvhH2AKl8LG4k4r9yKbGlYTfKpclz0Bi%2BG3wp8qUi8YqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2YIAPrfGknjh7WhCrcA2pl1RoXdRyE%2BqgGKA2OK9z9PGJF%2BaZJu2vxnRSzdYBLk9JzXkGoiz1Ltjmq%2B1CKjXSoMa4X8LvCLNZJF8V%2FEyRmvZEr%2FxCbrKc1H2MRTyYoceT%2BvtNIRMqskmPyN%2FsFcGkmkNGG%2FgbzOZEe3V9TZJ79E1POxMwkHwbPw8%2BXgsjL6M4RrfjZEZw8I9iNG4BfWAVq4fGMZg3SAnsfbmJKmA6FN44nmi0TYeevJ3bc65h%2FExsfmExm3BisMEQu%2BYejh9QrrVMV%2BND2J%2Fq%2BoHai9JDiresxtjOANp526%2B9FiV7yEt4wU2GxS3P0SxUl84%2FwnPBxUP3UGXNMqK1%2F%2FGTVZDaJwI%2Fg25SijkFzOrP7ozBwa4MKcGeRqddGmoHtmsE2BZxeQipHa1eRCiXR1c%2FV3F2faPn0%2Bb2HtJ8HLARY9bGjfmFdIJN7%2ByaLdj%2FpA4zI97IHHi0Eci0fJsmHRNPyi51N9%2Bc5oY9Pc4XI7vMGXuZ%2BPTyb6rmCtcIPRkTa1lPQ%2BwWSmxGTSVDdT5taf6kTwRDfsd%2BPVa5rn61sXEZTCWKM8mMVwuEggBwYzWL1%2ByZd8traiej2lAEeN6ELpCdDAJw7HgGnIm%2BTUdnLd9hsoOGZZUxnveuaFIvKXiLjMMiurr0GOqUByuMkrymTCGtt8kT%2BEuZFqxS4mDBgDECuXN6IdYU5eObaciMZvkQ39Ft7nCOGWJyYQeehUYqbHF0OYfSYc8P%2F8EC8g6BDyPq78j%2BBBsrHe4mnah%2FpwKrZ2YGzsPWHRUv6kXRLQOWKnvWBLh1i%2BoCsclk0fxgeQ2SmPW8AQwTfxbBINGi9ETxLO2qigM%2B1%2FRa%2B2zHFtUHtV2dkq5vVe6Z1%2Bzk9NVU0&X-Amz-Signature=71fbed4a0d26f2fa9989de370a3f46d918ebe5556a43110c3e777a9cb2e65861&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

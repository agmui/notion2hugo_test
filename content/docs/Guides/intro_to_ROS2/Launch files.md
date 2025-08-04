---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KPMFCF2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFZuNojlDO4aUAwR5A6li5uZgerPPgtJzGbEWniElDhbAiBf0qhtawbu%2BeZgfPc8FYjKlesHmL0KDXvVVh1Tu2JAXCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMe4CbF1DF4RuzIrVbKtwDxDwQgKWE6IafAbJ6bD%2FbAkz%2BTnvSt%2FORdvRRAhm4C5J%2FxHuaI2e4VHjh5rdbwqS7iMWMUK5Z3ajYJLFwyJJ7%2FxK2QUGJo6Y4iQkWbmBBgTti%2BXWP2HNzPNEGvLaIR7mt0wriG%2FqXseIHSndG7l3rBueA%2FgzVwLlNG6V1wrCvsMGaLF0N1qKObTSac92Gi3SD%2FpFH3Iazu0siRUJrK5JO7oP0A2FYfI5vYaxWgJM1E9LiA8C2fq%2Fp7ww%2FMsBduPmh9361rG2bfFCkJUHDlMyrfOw5kjj5mHlrHPe%2B5vzf7XFzar9DwSUg%2Fdxg%2F5sJ0cM3w9rGSgzphnkMSEskjn%2FdCIBoeMW4ZkQ2wOIoG15m6Ay8X8KrWTgxfYJH0ln3UE9%2BMofY5y27m0pUOO0cjtREqY0borScLe1YZHrkk4aAfe%2BwAV2QVDF8PGEaKLU8aiZ%2Bj9JWByLzvBDDMwqYY2POwygFQJplWyi%2FTYO9cwcxttcpuT1TLRq8%2BG4ZSFTH0evSWJHayltuozBB4YNzfcjlHzdEMJ%2Fgu%2B%2FrtfwRtskt4ydS%2FCNKFuZTEbyFEMQD48gwcCvf6LuzCvf3hWCrykM%2FPLp4Ge7RvbYWJQRw41tx096mbbi9LOs%2BanZtNR8wnc7DxAY6pgGdlFW0r28QTPgNs9Yuibe%2BlG7vznnZDEMKiq%2FPIqnkNO28Ce0MV2wSb1z6kIFpC%2BC9a3u%2BahgMkH%2FR4WQ%2FDWJTwSPjpE2AxdZpOWEKBnpRy5jdNqMRBPXLs42wc1l2KsuDseFRrIa%2FNqFJ4B0U9n%2FSMjm5aC7o4dqB1Qlh1iL3aFnK9uYv7bY%2FMARzq%2FbNTMw3GuluqEWgvfoBVFCUs1PqAHswzk09&X-Amz-Signature=63ed6a6fcf5e6b49e990ff589d364f3d6ffa94c5206f746ffd2f90e77968401e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KPMFCF2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFZuNojlDO4aUAwR5A6li5uZgerPPgtJzGbEWniElDhbAiBf0qhtawbu%2BeZgfPc8FYjKlesHmL0KDXvVVh1Tu2JAXCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMe4CbF1DF4RuzIrVbKtwDxDwQgKWE6IafAbJ6bD%2FbAkz%2BTnvSt%2FORdvRRAhm4C5J%2FxHuaI2e4VHjh5rdbwqS7iMWMUK5Z3ajYJLFwyJJ7%2FxK2QUGJo6Y4iQkWbmBBgTti%2BXWP2HNzPNEGvLaIR7mt0wriG%2FqXseIHSndG7l3rBueA%2FgzVwLlNG6V1wrCvsMGaLF0N1qKObTSac92Gi3SD%2FpFH3Iazu0siRUJrK5JO7oP0A2FYfI5vYaxWgJM1E9LiA8C2fq%2Fp7ww%2FMsBduPmh9361rG2bfFCkJUHDlMyrfOw5kjj5mHlrHPe%2B5vzf7XFzar9DwSUg%2Fdxg%2F5sJ0cM3w9rGSgzphnkMSEskjn%2FdCIBoeMW4ZkQ2wOIoG15m6Ay8X8KrWTgxfYJH0ln3UE9%2BMofY5y27m0pUOO0cjtREqY0borScLe1YZHrkk4aAfe%2BwAV2QVDF8PGEaKLU8aiZ%2Bj9JWByLzvBDDMwqYY2POwygFQJplWyi%2FTYO9cwcxttcpuT1TLRq8%2BG4ZSFTH0evSWJHayltuozBB4YNzfcjlHzdEMJ%2Fgu%2B%2FrtfwRtskt4ydS%2FCNKFuZTEbyFEMQD48gwcCvf6LuzCvf3hWCrykM%2FPLp4Ge7RvbYWJQRw41tx096mbbi9LOs%2BanZtNR8wnc7DxAY6pgGdlFW0r28QTPgNs9Yuibe%2BlG7vznnZDEMKiq%2FPIqnkNO28Ce0MV2wSb1z6kIFpC%2BC9a3u%2BahgMkH%2FR4WQ%2FDWJTwSPjpE2AxdZpOWEKBnpRy5jdNqMRBPXLs42wc1l2KsuDseFRrIa%2FNqFJ4B0U9n%2FSMjm5aC7o4dqB1Qlh1iL3aFnK9uYv7bY%2FMARzq%2FbNTMw3GuluqEWgvfoBVFCUs1PqAHswzk09&X-Amz-Signature=5a9475c16ef4ec60bc1325eaf347771bf9b32f66bec3c03b643fc8619c3a5f96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KPMFCF2%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFZuNojlDO4aUAwR5A6li5uZgerPPgtJzGbEWniElDhbAiBf0qhtawbu%2BeZgfPc8FYjKlesHmL0KDXvVVh1Tu2JAXCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMe4CbF1DF4RuzIrVbKtwDxDwQgKWE6IafAbJ6bD%2FbAkz%2BTnvSt%2FORdvRRAhm4C5J%2FxHuaI2e4VHjh5rdbwqS7iMWMUK5Z3ajYJLFwyJJ7%2FxK2QUGJo6Y4iQkWbmBBgTti%2BXWP2HNzPNEGvLaIR7mt0wriG%2FqXseIHSndG7l3rBueA%2FgzVwLlNG6V1wrCvsMGaLF0N1qKObTSac92Gi3SD%2FpFH3Iazu0siRUJrK5JO7oP0A2FYfI5vYaxWgJM1E9LiA8C2fq%2Fp7ww%2FMsBduPmh9361rG2bfFCkJUHDlMyrfOw5kjj5mHlrHPe%2B5vzf7XFzar9DwSUg%2Fdxg%2F5sJ0cM3w9rGSgzphnkMSEskjn%2FdCIBoeMW4ZkQ2wOIoG15m6Ay8X8KrWTgxfYJH0ln3UE9%2BMofY5y27m0pUOO0cjtREqY0borScLe1YZHrkk4aAfe%2BwAV2QVDF8PGEaKLU8aiZ%2Bj9JWByLzvBDDMwqYY2POwygFQJplWyi%2FTYO9cwcxttcpuT1TLRq8%2BG4ZSFTH0evSWJHayltuozBB4YNzfcjlHzdEMJ%2Fgu%2B%2FrtfwRtskt4ydS%2FCNKFuZTEbyFEMQD48gwcCvf6LuzCvf3hWCrykM%2FPLp4Ge7RvbYWJQRw41tx096mbbi9LOs%2BanZtNR8wnc7DxAY6pgGdlFW0r28QTPgNs9Yuibe%2BlG7vznnZDEMKiq%2FPIqnkNO28Ce0MV2wSb1z6kIFpC%2BC9a3u%2BahgMkH%2FR4WQ%2FDWJTwSPjpE2AxdZpOWEKBnpRy5jdNqMRBPXLs42wc1l2KsuDseFRrIa%2FNqFJ4B0U9n%2FSMjm5aC7o4dqB1Qlh1iL3aFnK9uYv7bY%2FMARzq%2FbNTMw3GuluqEWgvfoBVFCUs1PqAHswzk09&X-Amz-Signature=a5a5bb24f30231e063350bfe0b42a5c03e16ebe5a21cad76f43524633ba2b150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

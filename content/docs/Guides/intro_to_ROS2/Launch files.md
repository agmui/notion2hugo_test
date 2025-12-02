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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KHMXXFU%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIH0%2FGL4aMI2Iai64tJ1vqxHuxsvdsXHz1BXi3caY010BAiEA0s%2Fhep4%2BfLeh7ecjvOCUaUtG98eeI2yifxykCP%2FBwMcq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDPnJftgNRdl9ggbPzyrcA6tWpU6QRDDNcVGgu%2Fn9NspTQByEcideaG%2BbA5ArPDM6QJwfnjggOaT29dVTKB89Phe9HnWRNVEHwoXjgaYhYe61mAvzJeP%2FsUIAYScV4ATl8sLBvAwfRYqg1QiXpNLARaJiXD2gTAfQ8SryVqDGNWdNnKFofsBTeesBBJ1DhvaBFT66fo1LEB70TEa0ZggAJVUtmwxu6KYcXaMr1KyYZRQlILLYEDDRPiDWd3o1hf0ScE1G%2B1lczVHmdiQzHVcjcziZnnLIT9wsd9nE8oi85zOCCnStaiDuzb1ts2pEm01Va2%2F0qh8e%2FGO9SnmmdbYo8LJELxbs3sfmedvCkZ6HilqqBXl3j%2BNwU1P47WEGPug3ns4ZFPAOkNIGblrkufK6WNI%2Fu68qsEt5VNCdZh%2B2XAo5eZq9sWU9bZO1ciLwlITCjro3KFNXkntmPJ7Lx%2BRzzxj3awgEAOk1a3RsSY%2BFgPR96SnJejpX1CWEtTTi2HpvqYhjH%2F3eVJ9NNG67puxRRGFypmLLLIuLHNYbYavV7wQglzvW%2FDnYfnNPmOUKUg5aZrhEBJ78kBw%2FXWz5fgze5zvhEkUbA2jYGC8DNVjCgZD%2FK4RlfOWTZ8MIuQyOfhs5SBTrRsP4DJRKYTgmMKbeuMkGOqUBSWy1MSrqV7b64h0rWR8g5GhpaEUiz1J06QZEppxLJL%2B%2FOa5KDJu2rDDLAjfBwgAbWNa2a6FbnJJeqF54SFpdivCOKT5E7K7SXs1CwSPIshcFoUx1k2lUeUC3C%2BHas4PpMw%2BCvd4bRseRNBG9%2BMLI0oiCECXncYcdzRpJ4kbDTEowz9jzhkR3qRPM3o%2FxRKWw0ttcmWS7iZ9CZbWnXtGXyjd22Xc6&X-Amz-Signature=d15db6eade2e687163181fa61180c6bf61c170f384fd54f375a82f82c6b7ff67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KHMXXFU%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIH0%2FGL4aMI2Iai64tJ1vqxHuxsvdsXHz1BXi3caY010BAiEA0s%2Fhep4%2BfLeh7ecjvOCUaUtG98eeI2yifxykCP%2FBwMcq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDPnJftgNRdl9ggbPzyrcA6tWpU6QRDDNcVGgu%2Fn9NspTQByEcideaG%2BbA5ArPDM6QJwfnjggOaT29dVTKB89Phe9HnWRNVEHwoXjgaYhYe61mAvzJeP%2FsUIAYScV4ATl8sLBvAwfRYqg1QiXpNLARaJiXD2gTAfQ8SryVqDGNWdNnKFofsBTeesBBJ1DhvaBFT66fo1LEB70TEa0ZggAJVUtmwxu6KYcXaMr1KyYZRQlILLYEDDRPiDWd3o1hf0ScE1G%2B1lczVHmdiQzHVcjcziZnnLIT9wsd9nE8oi85zOCCnStaiDuzb1ts2pEm01Va2%2F0qh8e%2FGO9SnmmdbYo8LJELxbs3sfmedvCkZ6HilqqBXl3j%2BNwU1P47WEGPug3ns4ZFPAOkNIGblrkufK6WNI%2Fu68qsEt5VNCdZh%2B2XAo5eZq9sWU9bZO1ciLwlITCjro3KFNXkntmPJ7Lx%2BRzzxj3awgEAOk1a3RsSY%2BFgPR96SnJejpX1CWEtTTi2HpvqYhjH%2F3eVJ9NNG67puxRRGFypmLLLIuLHNYbYavV7wQglzvW%2FDnYfnNPmOUKUg5aZrhEBJ78kBw%2FXWz5fgze5zvhEkUbA2jYGC8DNVjCgZD%2FK4RlfOWTZ8MIuQyOfhs5SBTrRsP4DJRKYTgmMKbeuMkGOqUBSWy1MSrqV7b64h0rWR8g5GhpaEUiz1J06QZEppxLJL%2B%2FOa5KDJu2rDDLAjfBwgAbWNa2a6FbnJJeqF54SFpdivCOKT5E7K7SXs1CwSPIshcFoUx1k2lUeUC3C%2BHas4PpMw%2BCvd4bRseRNBG9%2BMLI0oiCECXncYcdzRpJ4kbDTEowz9jzhkR3qRPM3o%2FxRKWw0ttcmWS7iZ9CZbWnXtGXyjd22Xc6&X-Amz-Signature=ea2ee29f4903ec20835ffdc063c935c267e2c281ac20b55ca7db9346b45e4feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KHMXXFU%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIH0%2FGL4aMI2Iai64tJ1vqxHuxsvdsXHz1BXi3caY010BAiEA0s%2Fhep4%2BfLeh7ecjvOCUaUtG98eeI2yifxykCP%2FBwMcq%2FwMICRAAGgw2Mzc0MjMxODM4MDUiDPnJftgNRdl9ggbPzyrcA6tWpU6QRDDNcVGgu%2Fn9NspTQByEcideaG%2BbA5ArPDM6QJwfnjggOaT29dVTKB89Phe9HnWRNVEHwoXjgaYhYe61mAvzJeP%2FsUIAYScV4ATl8sLBvAwfRYqg1QiXpNLARaJiXD2gTAfQ8SryVqDGNWdNnKFofsBTeesBBJ1DhvaBFT66fo1LEB70TEa0ZggAJVUtmwxu6KYcXaMr1KyYZRQlILLYEDDRPiDWd3o1hf0ScE1G%2B1lczVHmdiQzHVcjcziZnnLIT9wsd9nE8oi85zOCCnStaiDuzb1ts2pEm01Va2%2F0qh8e%2FGO9SnmmdbYo8LJELxbs3sfmedvCkZ6HilqqBXl3j%2BNwU1P47WEGPug3ns4ZFPAOkNIGblrkufK6WNI%2Fu68qsEt5VNCdZh%2B2XAo5eZq9sWU9bZO1ciLwlITCjro3KFNXkntmPJ7Lx%2BRzzxj3awgEAOk1a3RsSY%2BFgPR96SnJejpX1CWEtTTi2HpvqYhjH%2F3eVJ9NNG67puxRRGFypmLLLIuLHNYbYavV7wQglzvW%2FDnYfnNPmOUKUg5aZrhEBJ78kBw%2FXWz5fgze5zvhEkUbA2jYGC8DNVjCgZD%2FK4RlfOWTZ8MIuQyOfhs5SBTrRsP4DJRKYTgmMKbeuMkGOqUBSWy1MSrqV7b64h0rWR8g5GhpaEUiz1J06QZEppxLJL%2B%2FOa5KDJu2rDDLAjfBwgAbWNa2a6FbnJJeqF54SFpdivCOKT5E7K7SXs1CwSPIshcFoUx1k2lUeUC3C%2BHas4PpMw%2BCvd4bRseRNBG9%2BMLI0oiCECXncYcdzRpJ4kbDTEowz9jzhkR3qRPM3o%2FxRKWw0ttcmWS7iZ9CZbWnXtGXyjd22Xc6&X-Amz-Signature=830e60428ce69b67e5a48766ce13d488ad1831b7acce32a1c285cd7a77b00eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

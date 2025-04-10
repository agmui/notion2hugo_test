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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZINDGMJ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC%2B3ZvjktXPoBMn6XzO3tkmlHwD4dp%2BW6YqNj8bcIKM1wIhAKUGm2JeQEVwQrTXVYbnvNuWihT48Y301lRFDfMEnNm1KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8gYcqKHECn79soF0q3AMYt1xNhSb%2B1GFo8R%2F2eDwzdF4yucgrmpmRKla3KaJB84Vn4jk1%2FvdgDyebnvleaLxI8FqCRpbhJFt458JKwhQTjZw2EVbYLNMBiUeXisGgLDEcp2JTMmJZ2BlDE%2BVZbgLMjh57ivlHTX8lxHwTkNS2kWoowWS7HTdcdohxV2eN0sBybIl3SNQvzdpLA%2B1sdKyBUAt96315z%2B2dObuytFOA7gZc9kxQfXcilnnyEQXYAuNs0oeyeUBV%2FQfVLN0cZhCxqH6U0aLXDjE1cF%2Bl6YfRBI2qeUFggjzUfqA%2B0pgzICrfAK4RKMnstSoLfM%2B0%2BY8OXT81K4yxcSdoFJvaoucq%2F0r%2FF%2BN5NaZP6BBrV1Bbcx8Mi%2FpAXGcFZe3ws5cRIU1OsB9ZMnTWzikfvVPfbOSPO5Xp%2Ft5yhuB%2BN8RV%2FKxZJWR35M1ka1sZPNwCwLgcXNh0a2Q8qJwMk819yGKpYEdddRugv6GIbyW%2FNL53KJ%2BbG6fiEx6ZEgbKJN5LaslUbU%2BDMga7f0jSWpcgUajvQwQNkQquWDp3k%2Fn4vclwLsWqt%2FjSRlk6DTPYvMCNnIfBL6IR4lmpmPiEOzf%2FGFrIJIu0UuAdwZp8tGviKPfXqJeSUtkuVPTz4x0pQMNExDDApN6%2FBjqkAQTKI5aIFu0KJp9NkyF1ksIfjzmt7MFS44LbfocL%2BwZp8GgGn4ZXek%2Fr%2B0zvuH9A3QHwduVgOyuz1WELbxKt08bzaRmhShlqo%2Ft78hkvhpSpVozoCdzM7IIs%2Fi%2FVOZ8px7%2F%2BZP1dcki7rXyuUDv3EpG4r2mn23u%2Bs%2BgT1iHZXU%2BkBNB8o6SK72fNCvu8RInNHi41Bg80mGwV0Z%2FUJBdi0rWrb2Mw&X-Amz-Signature=f41ee903880d550a4fb631c80384c44260d1652cc747eb28f94ea67beeff00e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZINDGMJ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC%2B3ZvjktXPoBMn6XzO3tkmlHwD4dp%2BW6YqNj8bcIKM1wIhAKUGm2JeQEVwQrTXVYbnvNuWihT48Y301lRFDfMEnNm1KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8gYcqKHECn79soF0q3AMYt1xNhSb%2B1GFo8R%2F2eDwzdF4yucgrmpmRKla3KaJB84Vn4jk1%2FvdgDyebnvleaLxI8FqCRpbhJFt458JKwhQTjZw2EVbYLNMBiUeXisGgLDEcp2JTMmJZ2BlDE%2BVZbgLMjh57ivlHTX8lxHwTkNS2kWoowWS7HTdcdohxV2eN0sBybIl3SNQvzdpLA%2B1sdKyBUAt96315z%2B2dObuytFOA7gZc9kxQfXcilnnyEQXYAuNs0oeyeUBV%2FQfVLN0cZhCxqH6U0aLXDjE1cF%2Bl6YfRBI2qeUFggjzUfqA%2B0pgzICrfAK4RKMnstSoLfM%2B0%2BY8OXT81K4yxcSdoFJvaoucq%2F0r%2FF%2BN5NaZP6BBrV1Bbcx8Mi%2FpAXGcFZe3ws5cRIU1OsB9ZMnTWzikfvVPfbOSPO5Xp%2Ft5yhuB%2BN8RV%2FKxZJWR35M1ka1sZPNwCwLgcXNh0a2Q8qJwMk819yGKpYEdddRugv6GIbyW%2FNL53KJ%2BbG6fiEx6ZEgbKJN5LaslUbU%2BDMga7f0jSWpcgUajvQwQNkQquWDp3k%2Fn4vclwLsWqt%2FjSRlk6DTPYvMCNnIfBL6IR4lmpmPiEOzf%2FGFrIJIu0UuAdwZp8tGviKPfXqJeSUtkuVPTz4x0pQMNExDDApN6%2FBjqkAQTKI5aIFu0KJp9NkyF1ksIfjzmt7MFS44LbfocL%2BwZp8GgGn4ZXek%2Fr%2B0zvuH9A3QHwduVgOyuz1WELbxKt08bzaRmhShlqo%2Ft78hkvhpSpVozoCdzM7IIs%2Fi%2FVOZ8px7%2F%2BZP1dcki7rXyuUDv3EpG4r2mn23u%2Bs%2BgT1iHZXU%2BkBNB8o6SK72fNCvu8RInNHi41Bg80mGwV0Z%2FUJBdi0rWrb2Mw&X-Amz-Signature=58df52644f1f8700a66c7cd3a7c802b035765063e28bb4c844a85a571fdc89fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZINDGMJ%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC%2B3ZvjktXPoBMn6XzO3tkmlHwD4dp%2BW6YqNj8bcIKM1wIhAKUGm2JeQEVwQrTXVYbnvNuWihT48Y301lRFDfMEnNm1KogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8gYcqKHECn79soF0q3AMYt1xNhSb%2B1GFo8R%2F2eDwzdF4yucgrmpmRKla3KaJB84Vn4jk1%2FvdgDyebnvleaLxI8FqCRpbhJFt458JKwhQTjZw2EVbYLNMBiUeXisGgLDEcp2JTMmJZ2BlDE%2BVZbgLMjh57ivlHTX8lxHwTkNS2kWoowWS7HTdcdohxV2eN0sBybIl3SNQvzdpLA%2B1sdKyBUAt96315z%2B2dObuytFOA7gZc9kxQfXcilnnyEQXYAuNs0oeyeUBV%2FQfVLN0cZhCxqH6U0aLXDjE1cF%2Bl6YfRBI2qeUFggjzUfqA%2B0pgzICrfAK4RKMnstSoLfM%2B0%2BY8OXT81K4yxcSdoFJvaoucq%2F0r%2FF%2BN5NaZP6BBrV1Bbcx8Mi%2FpAXGcFZe3ws5cRIU1OsB9ZMnTWzikfvVPfbOSPO5Xp%2Ft5yhuB%2BN8RV%2FKxZJWR35M1ka1sZPNwCwLgcXNh0a2Q8qJwMk819yGKpYEdddRugv6GIbyW%2FNL53KJ%2BbG6fiEx6ZEgbKJN5LaslUbU%2BDMga7f0jSWpcgUajvQwQNkQquWDp3k%2Fn4vclwLsWqt%2FjSRlk6DTPYvMCNnIfBL6IR4lmpmPiEOzf%2FGFrIJIu0UuAdwZp8tGviKPfXqJeSUtkuVPTz4x0pQMNExDDApN6%2FBjqkAQTKI5aIFu0KJp9NkyF1ksIfjzmt7MFS44LbfocL%2BwZp8GgGn4ZXek%2Fr%2B0zvuH9A3QHwduVgOyuz1WELbxKt08bzaRmhShlqo%2Ft78hkvhpSpVozoCdzM7IIs%2Fi%2FVOZ8px7%2F%2BZP1dcki7rXyuUDv3EpG4r2mn23u%2Bs%2BgT1iHZXU%2BkBNB8o6SK72fNCvu8RInNHi41Bg80mGwV0Z%2FUJBdi0rWrb2Mw&X-Amz-Signature=ee4848724a2270e7340eec99c27731e6d1c1a0f43fa2f93f61be9fd812fe353f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

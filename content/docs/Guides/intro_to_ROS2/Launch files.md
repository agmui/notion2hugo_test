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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CM3JJLF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWqghoY25U9JYxX0slylPFlwfn2ZgHlvp7RzFmDrQmgAiEAo1ztLM%2BJpu0C0rKsOygeLHG4NYZMB9YXIxN7PVBe%2F8AqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArec0RZ6wvIOtSLASrcA5ZPUbtKbAFCxTNCChCZswe%2F0u1Jz%2B08CCYxAozGFKI4iwrHih8Yo%2BqgFfDyOcsvZhMOJ6rnHMy%2Ff4wf5mykklqTJAqTlkLOIr1HDyPWy%2B7ZfOddzvPN3ZnODDYOVvbw5mHJARRBT6OXAnIjRayOQe2Xoyx5yVGUCp5rsG%2FKQeqPp0wu21vkZYXq251UluKsERhWN2dsPNq83CmZg2%2B8axRY3G2A4RQtsxhHuHcgPgQCRU3oQ28nRe5bwJNHMoYvE%2B%2BO%2B8DGs0%2BFbs0%2B8mazHOgMrtYc4OoM92xtAOK9ps46mCvBYggR2qGFXb6%2FkBTGGPXJsd0FTU1EtmoeDcX%2BKwDF7iNYXrA6D0gJkK8%2F%2BJm6naqGvyz1phTFm0emZPZxZPswxqWtqvJCC8L60TaN7qrFSWeTfSpI7vzvguVdSto3vb40BMD8Te1tEWDdYktzb6WdO20oKcMpOJc5vDJYTcuNjPfzdmFO71oHjLbLjapCyKBctBsoFwpVbj%2FYs%2B8cVt6y42wRIdAXErGFkfEPAarSnwlNj8PSWQ7IlYrpIfzdWhrZtBlfxocqqSHP0l3WzUChIKnbCHUdlZP2dqJHGfoXDV7K%2Bh82UzmwYPi4Zs9Y1zRan9MCnGnChtHRMND5%2BMMGOqUBGtPddYxv4%2FOUmdRL%2F4ru%2Bo%2Fy9qOu0ZFTTrJO%2FkVQE2RXAyhg2wQ4%2FTpHCKIW4gDoZo5vewjF1yYgKyNS3ql2bNMQ3XIIbLP2qXhAE9EtNBcEBUaf7nrqdmi67EFvFF%2F3xgKfPrfBHxg8BQA1VVQQVAPNEFsLq4nRf7sWrz%2BPMrBLAYGuchX8p4DRTv9pZzAEqVvO0m%2FS4nLDohauuCioWj23Vqsh&X-Amz-Signature=5edffccc09473371973cfdb2994352ee0a5d16795c85ca0775a136befe7fb378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CM3JJLF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWqghoY25U9JYxX0slylPFlwfn2ZgHlvp7RzFmDrQmgAiEAo1ztLM%2BJpu0C0rKsOygeLHG4NYZMB9YXIxN7PVBe%2F8AqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArec0RZ6wvIOtSLASrcA5ZPUbtKbAFCxTNCChCZswe%2F0u1Jz%2B08CCYxAozGFKI4iwrHih8Yo%2BqgFfDyOcsvZhMOJ6rnHMy%2Ff4wf5mykklqTJAqTlkLOIr1HDyPWy%2B7ZfOddzvPN3ZnODDYOVvbw5mHJARRBT6OXAnIjRayOQe2Xoyx5yVGUCp5rsG%2FKQeqPp0wu21vkZYXq251UluKsERhWN2dsPNq83CmZg2%2B8axRY3G2A4RQtsxhHuHcgPgQCRU3oQ28nRe5bwJNHMoYvE%2B%2BO%2B8DGs0%2BFbs0%2B8mazHOgMrtYc4OoM92xtAOK9ps46mCvBYggR2qGFXb6%2FkBTGGPXJsd0FTU1EtmoeDcX%2BKwDF7iNYXrA6D0gJkK8%2F%2BJm6naqGvyz1phTFm0emZPZxZPswxqWtqvJCC8L60TaN7qrFSWeTfSpI7vzvguVdSto3vb40BMD8Te1tEWDdYktzb6WdO20oKcMpOJc5vDJYTcuNjPfzdmFO71oHjLbLjapCyKBctBsoFwpVbj%2FYs%2B8cVt6y42wRIdAXErGFkfEPAarSnwlNj8PSWQ7IlYrpIfzdWhrZtBlfxocqqSHP0l3WzUChIKnbCHUdlZP2dqJHGfoXDV7K%2Bh82UzmwYPi4Zs9Y1zRan9MCnGnChtHRMND5%2BMMGOqUBGtPddYxv4%2FOUmdRL%2F4ru%2Bo%2Fy9qOu0ZFTTrJO%2FkVQE2RXAyhg2wQ4%2FTpHCKIW4gDoZo5vewjF1yYgKyNS3ql2bNMQ3XIIbLP2qXhAE9EtNBcEBUaf7nrqdmi67EFvFF%2F3xgKfPrfBHxg8BQA1VVQQVAPNEFsLq4nRf7sWrz%2BPMrBLAYGuchX8p4DRTv9pZzAEqVvO0m%2FS4nLDohauuCioWj23Vqsh&X-Amz-Signature=0eeb186399f48acbed4ddd48c1f07f0e007ecc7f747d4a2b4899e89ba5ca55bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CM3JJLF%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T133127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHWqghoY25U9JYxX0slylPFlwfn2ZgHlvp7RzFmDrQmgAiEAo1ztLM%2BJpu0C0rKsOygeLHG4NYZMB9YXIxN7PVBe%2F8AqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArec0RZ6wvIOtSLASrcA5ZPUbtKbAFCxTNCChCZswe%2F0u1Jz%2B08CCYxAozGFKI4iwrHih8Yo%2BqgFfDyOcsvZhMOJ6rnHMy%2Ff4wf5mykklqTJAqTlkLOIr1HDyPWy%2B7ZfOddzvPN3ZnODDYOVvbw5mHJARRBT6OXAnIjRayOQe2Xoyx5yVGUCp5rsG%2FKQeqPp0wu21vkZYXq251UluKsERhWN2dsPNq83CmZg2%2B8axRY3G2A4RQtsxhHuHcgPgQCRU3oQ28nRe5bwJNHMoYvE%2B%2BO%2B8DGs0%2BFbs0%2B8mazHOgMrtYc4OoM92xtAOK9ps46mCvBYggR2qGFXb6%2FkBTGGPXJsd0FTU1EtmoeDcX%2BKwDF7iNYXrA6D0gJkK8%2F%2BJm6naqGvyz1phTFm0emZPZxZPswxqWtqvJCC8L60TaN7qrFSWeTfSpI7vzvguVdSto3vb40BMD8Te1tEWDdYktzb6WdO20oKcMpOJc5vDJYTcuNjPfzdmFO71oHjLbLjapCyKBctBsoFwpVbj%2FYs%2B8cVt6y42wRIdAXErGFkfEPAarSnwlNj8PSWQ7IlYrpIfzdWhrZtBlfxocqqSHP0l3WzUChIKnbCHUdlZP2dqJHGfoXDV7K%2Bh82UzmwYPi4Zs9Y1zRan9MCnGnChtHRMND5%2BMMGOqUBGtPddYxv4%2FOUmdRL%2F4ru%2Bo%2Fy9qOu0ZFTTrJO%2FkVQE2RXAyhg2wQ4%2FTpHCKIW4gDoZo5vewjF1yYgKyNS3ql2bNMQ3XIIbLP2qXhAE9EtNBcEBUaf7nrqdmi67EFvFF%2F3xgKfPrfBHxg8BQA1VVQQVAPNEFsLq4nRf7sWrz%2BPMrBLAYGuchX8p4DRTv9pZzAEqVvO0m%2FS4nLDohauuCioWj23Vqsh&X-Amz-Signature=94bad5e6afc587d996e842d21ce4fa48afbfa6ee994e9ee6a342abf3ab718f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW7AWEES%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFm7QQY4YWPyIeS2uDLmEG1v%2BZNnjkPTn%2FA05euBic1AiEA0bfXzytiXADRuTyc5AdJvX6D%2FvJeN43FVbyHqvCwSPoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLn1sDK38VNVJHCAayrcA8ExtamhxUA7ttW3SZi0Xqt31rp2sn5Q3rGZlMXNQY5wqchpeygf4G%2Bwx6nrjDDZAyLwA6j3cUfRsB%2FgTBUzQ39VCeegq69E2HYFVRCDyxQbSBwAhDbRM5jTCVHkCjp9vcswtBmgv7NfmemGIY40eks2rKnPSPZtf0yPBfCWFY65vcfWmVkzECMk2%2Bqzvd80fDrnTb7XfWORJKn5%2Fm4m9yXuhX6m6qu%2FVpfW9SoPFRqzZBvQG%2F%2F3XOZkxFY1qN%2BVH5hB28kWpDdChrgMDXS9BpeeRwfmh0rEnTVyFH1Z00mPHe9GKxTGfBiAy8wkNu1WH0XkNGet9Ss3Ob2qoxcQkRKdqcqBPvhXgb3HxRG3hPwmuftj0fMCRGvyhvwMHSVXFfR%2FyWp6VAaFaVBQfs00gjw1zC%2Bznx%2BfysKcTtWJeu%2Fjk70BthMoQ9SWxsMrgWkNfR%2F3AxHb1kQtIgq%2FImhFPo2ZGT3xr6wkpNukc7GfkiCqx%2BbcNspu70DpdZ0cGaA0gRY89MNVHKIZus5kC1%2FtFzOZWh9bs1l3mTVQ70nZpmDPxhk5M3VSvHZY54NVOM6hUd%2F96vyWzWJTbYSAlleFbCXb8u3RD2rs%2FpJwuMoARrpWQQtO%2BlcoUiNSdIU3MK%2FzysIGOqUB%2FKu2J8prFXAPQujx%2F6jBb%2F3%2BxLpYKREJ3%2B18y6KbOsNiYifWbV%2FG9yrqEgtAKo315Lr1NwfMobivk19A4LdKED3FXY7s6rlAvPLiTRc3iWX7xnsuBxPSNE3USapa5VNi9o1NOjZZzVmsgg2C3tiCp9qDevf30jAlP1lIUcvkejiIJBAY3vePnvz%2FNUUUzM5nyrAPgTx2HUxpbqAzLZwCuP%2FbbyMH&X-Amz-Signature=7035b9dcd010853b200446adbe80080a594c312cc22dac948952bcb8cb968bb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW7AWEES%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFm7QQY4YWPyIeS2uDLmEG1v%2BZNnjkPTn%2FA05euBic1AiEA0bfXzytiXADRuTyc5AdJvX6D%2FvJeN43FVbyHqvCwSPoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLn1sDK38VNVJHCAayrcA8ExtamhxUA7ttW3SZi0Xqt31rp2sn5Q3rGZlMXNQY5wqchpeygf4G%2Bwx6nrjDDZAyLwA6j3cUfRsB%2FgTBUzQ39VCeegq69E2HYFVRCDyxQbSBwAhDbRM5jTCVHkCjp9vcswtBmgv7NfmemGIY40eks2rKnPSPZtf0yPBfCWFY65vcfWmVkzECMk2%2Bqzvd80fDrnTb7XfWORJKn5%2Fm4m9yXuhX6m6qu%2FVpfW9SoPFRqzZBvQG%2F%2F3XOZkxFY1qN%2BVH5hB28kWpDdChrgMDXS9BpeeRwfmh0rEnTVyFH1Z00mPHe9GKxTGfBiAy8wkNu1WH0XkNGet9Ss3Ob2qoxcQkRKdqcqBPvhXgb3HxRG3hPwmuftj0fMCRGvyhvwMHSVXFfR%2FyWp6VAaFaVBQfs00gjw1zC%2Bznx%2BfysKcTtWJeu%2Fjk70BthMoQ9SWxsMrgWkNfR%2F3AxHb1kQtIgq%2FImhFPo2ZGT3xr6wkpNukc7GfkiCqx%2BbcNspu70DpdZ0cGaA0gRY89MNVHKIZus5kC1%2FtFzOZWh9bs1l3mTVQ70nZpmDPxhk5M3VSvHZY54NVOM6hUd%2F96vyWzWJTbYSAlleFbCXb8u3RD2rs%2FpJwuMoARrpWQQtO%2BlcoUiNSdIU3MK%2FzysIGOqUB%2FKu2J8prFXAPQujx%2F6jBb%2F3%2BxLpYKREJ3%2B18y6KbOsNiYifWbV%2FG9yrqEgtAKo315Lr1NwfMobivk19A4LdKED3FXY7s6rlAvPLiTRc3iWX7xnsuBxPSNE3USapa5VNi9o1NOjZZzVmsgg2C3tiCp9qDevf30jAlP1lIUcvkejiIJBAY3vePnvz%2FNUUUzM5nyrAPgTx2HUxpbqAzLZwCuP%2FbbyMH&X-Amz-Signature=55b0718a686a9728caa40a7663e3d88cfec211afd712a3555c796b0170ce8e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW7AWEES%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFm7QQY4YWPyIeS2uDLmEG1v%2BZNnjkPTn%2FA05euBic1AiEA0bfXzytiXADRuTyc5AdJvX6D%2FvJeN43FVbyHqvCwSPoqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLn1sDK38VNVJHCAayrcA8ExtamhxUA7ttW3SZi0Xqt31rp2sn5Q3rGZlMXNQY5wqchpeygf4G%2Bwx6nrjDDZAyLwA6j3cUfRsB%2FgTBUzQ39VCeegq69E2HYFVRCDyxQbSBwAhDbRM5jTCVHkCjp9vcswtBmgv7NfmemGIY40eks2rKnPSPZtf0yPBfCWFY65vcfWmVkzECMk2%2Bqzvd80fDrnTb7XfWORJKn5%2Fm4m9yXuhX6m6qu%2FVpfW9SoPFRqzZBvQG%2F%2F3XOZkxFY1qN%2BVH5hB28kWpDdChrgMDXS9BpeeRwfmh0rEnTVyFH1Z00mPHe9GKxTGfBiAy8wkNu1WH0XkNGet9Ss3Ob2qoxcQkRKdqcqBPvhXgb3HxRG3hPwmuftj0fMCRGvyhvwMHSVXFfR%2FyWp6VAaFaVBQfs00gjw1zC%2Bznx%2BfysKcTtWJeu%2Fjk70BthMoQ9SWxsMrgWkNfR%2F3AxHb1kQtIgq%2FImhFPo2ZGT3xr6wkpNukc7GfkiCqx%2BbcNspu70DpdZ0cGaA0gRY89MNVHKIZus5kC1%2FtFzOZWh9bs1l3mTVQ70nZpmDPxhk5M3VSvHZY54NVOM6hUd%2F96vyWzWJTbYSAlleFbCXb8u3RD2rs%2FpJwuMoARrpWQQtO%2BlcoUiNSdIU3MK%2FzysIGOqUB%2FKu2J8prFXAPQujx%2F6jBb%2F3%2BxLpYKREJ3%2B18y6KbOsNiYifWbV%2FG9yrqEgtAKo315Lr1NwfMobivk19A4LdKED3FXY7s6rlAvPLiTRc3iWX7xnsuBxPSNE3USapa5VNi9o1NOjZZzVmsgg2C3tiCp9qDevf30jAlP1lIUcvkejiIJBAY3vePnvz%2FNUUUzM5nyrAPgTx2HUxpbqAzLZwCuP%2FbbyMH&X-Amz-Signature=6de5b7467476b399dcfe1fac0cfd24583fcda52ad1b2e57f77e87e3d7f1cc5d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

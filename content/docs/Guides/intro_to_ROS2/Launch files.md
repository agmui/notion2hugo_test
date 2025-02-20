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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5AKIBK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGra5Hlu2%2BT7Z4oDaP1ED3IjCF6kgRX1RMX0h6cakSuXAiBwERJ%2BVgcJpN8lqb84eJT4qm0toGSj6egV8CIb00kwcSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX5NQ3H0GJJw%2BX4tTKtwD%2Beg1KN9aLW9kXFhRvPkuQDIsFeH9MwEDfZuy6v1sZNkA2IfsiIWj%2F1Suz0buP5nHZPd0%2FjJQWuJCHno%2BwvKq3W4SIOiBYF9uxHfVbgaag7pbkIXdGh1oW8FMlPRUvz22UTbFafSKMdsWdiQlJkX7QJFpf3dDnPtiyC9J1zym1LPFDKmtCsh19MIN%2Bt83vvBjAd2CBCdT8LU%2FByivx67ucIAJJIHN2U6yYRucExey%2FfQo1gF52u3BcyLEZU3Rs3s2KlS2iapzy8zWS0fMMopC8PB4ao%2Bx5rNIYGhJLz%2Bujm4J7ifwzVonGPbMVKUQSP0%2FqTbh2jEyuChxo4%2BrOJ%2BmSO67C0sppkApqLNUJpuFKSb4m7i4NGMbdkaTJ3hkY90TtP4uRVymyGCSo%2BeY%2FLpMzs%2BIvA5UBoWDSy5Nj79jmZBN%2BVaClAnX%2BT8wcd8LWvN%2B5oydLap6RWMZBeMIbhskwFYW93KSagKEusKKT7Ffv7pYCHCSaTJ1uNOF7v1QyXmUcP%2BIy0SLsO4TiDrOqXsTLrNtNgGTvdyhFZcWEputSH8wSXlIDQ09hdD2MfU8MJIGu%2F2pWT%2FW9qS1KKZe4fAS%2FpZhdzfdPRefahAGICDYBfxxDjIRSFujC8C3LJ8w65XdvQY6pgG1IbbdVldlCaBZNK8S3zN9savfrBusGQbtWHIIfKlbhi%2Fg%2FDqy6IIdhv3r%2Bek07ihlg7yvI5lq4cxr7HfhtX6ZWMvBemAJLsD%2FBRBKs%2FTv7LwS1Fnuruzzshehhfu%2FJOAcwZi9%2FOBMKwYOWsvu%2BZKuPMvik6sa1wA7IFAcSx6TLMeKFMssfNK2m7Bq0aHrL8FbG%2Fx%2BmeUKQqHkKGZ%2BwPcU8%2Bu7mDp0&X-Amz-Signature=870353f68abb19c5313206e50e3bead9be8185f19034e9d1c1c84be1b57bd6ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5AKIBK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGra5Hlu2%2BT7Z4oDaP1ED3IjCF6kgRX1RMX0h6cakSuXAiBwERJ%2BVgcJpN8lqb84eJT4qm0toGSj6egV8CIb00kwcSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX5NQ3H0GJJw%2BX4tTKtwD%2Beg1KN9aLW9kXFhRvPkuQDIsFeH9MwEDfZuy6v1sZNkA2IfsiIWj%2F1Suz0buP5nHZPd0%2FjJQWuJCHno%2BwvKq3W4SIOiBYF9uxHfVbgaag7pbkIXdGh1oW8FMlPRUvz22UTbFafSKMdsWdiQlJkX7QJFpf3dDnPtiyC9J1zym1LPFDKmtCsh19MIN%2Bt83vvBjAd2CBCdT8LU%2FByivx67ucIAJJIHN2U6yYRucExey%2FfQo1gF52u3BcyLEZU3Rs3s2KlS2iapzy8zWS0fMMopC8PB4ao%2Bx5rNIYGhJLz%2Bujm4J7ifwzVonGPbMVKUQSP0%2FqTbh2jEyuChxo4%2BrOJ%2BmSO67C0sppkApqLNUJpuFKSb4m7i4NGMbdkaTJ3hkY90TtP4uRVymyGCSo%2BeY%2FLpMzs%2BIvA5UBoWDSy5Nj79jmZBN%2BVaClAnX%2BT8wcd8LWvN%2B5oydLap6RWMZBeMIbhskwFYW93KSagKEusKKT7Ffv7pYCHCSaTJ1uNOF7v1QyXmUcP%2BIy0SLsO4TiDrOqXsTLrNtNgGTvdyhFZcWEputSH8wSXlIDQ09hdD2MfU8MJIGu%2F2pWT%2FW9qS1KKZe4fAS%2FpZhdzfdPRefahAGICDYBfxxDjIRSFujC8C3LJ8w65XdvQY6pgG1IbbdVldlCaBZNK8S3zN9savfrBusGQbtWHIIfKlbhi%2Fg%2FDqy6IIdhv3r%2Bek07ihlg7yvI5lq4cxr7HfhtX6ZWMvBemAJLsD%2FBRBKs%2FTv7LwS1Fnuruzzshehhfu%2FJOAcwZi9%2FOBMKwYOWsvu%2BZKuPMvik6sa1wA7IFAcSx6TLMeKFMssfNK2m7Bq0aHrL8FbG%2Fx%2BmeUKQqHkKGZ%2BwPcU8%2Bu7mDp0&X-Amz-Signature=a3aa8b44e0f3a3cf0e533a7926dfc305c4ec0599d9939a11a9371251ad298156&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XN5AKIBK%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T160956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGra5Hlu2%2BT7Z4oDaP1ED3IjCF6kgRX1RMX0h6cakSuXAiBwERJ%2BVgcJpN8lqb84eJT4qm0toGSj6egV8CIb00kwcSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX5NQ3H0GJJw%2BX4tTKtwD%2Beg1KN9aLW9kXFhRvPkuQDIsFeH9MwEDfZuy6v1sZNkA2IfsiIWj%2F1Suz0buP5nHZPd0%2FjJQWuJCHno%2BwvKq3W4SIOiBYF9uxHfVbgaag7pbkIXdGh1oW8FMlPRUvz22UTbFafSKMdsWdiQlJkX7QJFpf3dDnPtiyC9J1zym1LPFDKmtCsh19MIN%2Bt83vvBjAd2CBCdT8LU%2FByivx67ucIAJJIHN2U6yYRucExey%2FfQo1gF52u3BcyLEZU3Rs3s2KlS2iapzy8zWS0fMMopC8PB4ao%2Bx5rNIYGhJLz%2Bujm4J7ifwzVonGPbMVKUQSP0%2FqTbh2jEyuChxo4%2BrOJ%2BmSO67C0sppkApqLNUJpuFKSb4m7i4NGMbdkaTJ3hkY90TtP4uRVymyGCSo%2BeY%2FLpMzs%2BIvA5UBoWDSy5Nj79jmZBN%2BVaClAnX%2BT8wcd8LWvN%2B5oydLap6RWMZBeMIbhskwFYW93KSagKEusKKT7Ffv7pYCHCSaTJ1uNOF7v1QyXmUcP%2BIy0SLsO4TiDrOqXsTLrNtNgGTvdyhFZcWEputSH8wSXlIDQ09hdD2MfU8MJIGu%2F2pWT%2FW9qS1KKZe4fAS%2FpZhdzfdPRefahAGICDYBfxxDjIRSFujC8C3LJ8w65XdvQY6pgG1IbbdVldlCaBZNK8S3zN9savfrBusGQbtWHIIfKlbhi%2Fg%2FDqy6IIdhv3r%2Bek07ihlg7yvI5lq4cxr7HfhtX6ZWMvBemAJLsD%2FBRBKs%2FTv7LwS1Fnuruzzshehhfu%2FJOAcwZi9%2FOBMKwYOWsvu%2BZKuPMvik6sa1wA7IFAcSx6TLMeKFMssfNK2m7Bq0aHrL8FbG%2Fx%2BmeUKQqHkKGZ%2BwPcU8%2Bu7mDp0&X-Amz-Signature=7ced40c35ccb1375254eed77d1d794122fef77fc67e9039c48d839e4376e1e82&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

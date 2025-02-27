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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTK2IUMF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDJOy1CMGbm11KWi%2BW4I%2Bl%2BtUSEqmz7tnFlsNBJGhfl2QIhALbTUS2CuCdtNdoEMffhr6w7JpUvrpa7uEOY3k2R96YFKv8DCHwQABoMNjM3NDIzMTgzODA1IgwFWOfdV0sjrHiinm4q3ANZ9MKi8hkwHjeBDhKFqlhREieeyFpECEedEM%2ByjWz75iwIOwtk6Ln3%2FLtqJWFQ5G4Gqml%2BO2Ovk%2B%2FEMKYnukMLK6HQ163k08LQ969YVRsagXWvAnLopie0v5eDWHWdTmG4zf%2BzsYmLs3s9gBLBj1S4FnBoHJXtEZsmmIn8rbChJ%2FGZ2CBTLZ6Hdg7s8g13EQoSTIW%2BihLwDd2tl8H5xccLUMNM8p21wf6yWDFOOHWVYjiibssFhJtqQUiLO4oQXH%2BIWe7VeIIwiG%2B8XJtiXK%2F12Q1n69Uq%2B2IMuYxHr474wFuVrvIQHb0j75xM7%2BML4tj5TdaknOXRF0nm7KpKvAUbpySILLu3%2FHUAQuD3w1BwzAdPPHrbvngYdjSPYKwcCOORBBFx4XKoWjoeBfqwvG5yGXIJuu%2BGMnQrbzfpy1BZBiNwiKWZh60vCMdNuvnQyIzs3N78AV4d6nCi7BoeFmFMd5o%2FVkl3FNASHlbghbR%2FJ7XS8hFc1jp9vYZG8fiuAMbQv5gEMfU1DJiU%2Bo3tvWq%2BtbYljfnp1aobEaCE8ClRNPORnaM7RCSjJCAMp8UFvzRiZyvJ4BUHxqSV4aZKFWXZcoHo%2FgZptbEdSQfzum9QWkB8%2FSYpwhtKHzmVHjCJ8YK%2BBjqkASVAuuRwQCjJWWGYHyMW03smre4dBDS2GI8a1fXbaymZCOQF6EKdorqEgDg21AiIw6OtJGm0Cj4Tdhoc9wODSwBmmzuZS7iDMY8ZWftOv2YsY5Q8%2F%2FTKG%2FJ%2B3MDeub7U4oxkAWfKla1T4sknt6x%2FIwg49aSKzWIsvCjqIW%2BS5Fi6t6XEnU%2FiS9FG7OE2ufaPBBECr%2FWe92FpjN6BSyWoSMwBsfcZ&X-Amz-Signature=0373375a9d5694f4f97fa214cb4b91272b1b0b80e418b4089960182789027589&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTK2IUMF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDJOy1CMGbm11KWi%2BW4I%2Bl%2BtUSEqmz7tnFlsNBJGhfl2QIhALbTUS2CuCdtNdoEMffhr6w7JpUvrpa7uEOY3k2R96YFKv8DCHwQABoMNjM3NDIzMTgzODA1IgwFWOfdV0sjrHiinm4q3ANZ9MKi8hkwHjeBDhKFqlhREieeyFpECEedEM%2ByjWz75iwIOwtk6Ln3%2FLtqJWFQ5G4Gqml%2BO2Ovk%2B%2FEMKYnukMLK6HQ163k08LQ969YVRsagXWvAnLopie0v5eDWHWdTmG4zf%2BzsYmLs3s9gBLBj1S4FnBoHJXtEZsmmIn8rbChJ%2FGZ2CBTLZ6Hdg7s8g13EQoSTIW%2BihLwDd2tl8H5xccLUMNM8p21wf6yWDFOOHWVYjiibssFhJtqQUiLO4oQXH%2BIWe7VeIIwiG%2B8XJtiXK%2F12Q1n69Uq%2B2IMuYxHr474wFuVrvIQHb0j75xM7%2BML4tj5TdaknOXRF0nm7KpKvAUbpySILLu3%2FHUAQuD3w1BwzAdPPHrbvngYdjSPYKwcCOORBBFx4XKoWjoeBfqwvG5yGXIJuu%2BGMnQrbzfpy1BZBiNwiKWZh60vCMdNuvnQyIzs3N78AV4d6nCi7BoeFmFMd5o%2FVkl3FNASHlbghbR%2FJ7XS8hFc1jp9vYZG8fiuAMbQv5gEMfU1DJiU%2Bo3tvWq%2BtbYljfnp1aobEaCE8ClRNPORnaM7RCSjJCAMp8UFvzRiZyvJ4BUHxqSV4aZKFWXZcoHo%2FgZptbEdSQfzum9QWkB8%2FSYpwhtKHzmVHjCJ8YK%2BBjqkASVAuuRwQCjJWWGYHyMW03smre4dBDS2GI8a1fXbaymZCOQF6EKdorqEgDg21AiIw6OtJGm0Cj4Tdhoc9wODSwBmmzuZS7iDMY8ZWftOv2YsY5Q8%2F%2FTKG%2FJ%2B3MDeub7U4oxkAWfKla1T4sknt6x%2FIwg49aSKzWIsvCjqIW%2BS5Fi6t6XEnU%2FiS9FG7OE2ufaPBBECr%2FWe92FpjN6BSyWoSMwBsfcZ&X-Amz-Signature=43e3a73b9f053fdee4f74ed1ee0cdd95fe069c917940649d5db35e38180ffbdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTK2IUMF%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDJOy1CMGbm11KWi%2BW4I%2Bl%2BtUSEqmz7tnFlsNBJGhfl2QIhALbTUS2CuCdtNdoEMffhr6w7JpUvrpa7uEOY3k2R96YFKv8DCHwQABoMNjM3NDIzMTgzODA1IgwFWOfdV0sjrHiinm4q3ANZ9MKi8hkwHjeBDhKFqlhREieeyFpECEedEM%2ByjWz75iwIOwtk6Ln3%2FLtqJWFQ5G4Gqml%2BO2Ovk%2B%2FEMKYnukMLK6HQ163k08LQ969YVRsagXWvAnLopie0v5eDWHWdTmG4zf%2BzsYmLs3s9gBLBj1S4FnBoHJXtEZsmmIn8rbChJ%2FGZ2CBTLZ6Hdg7s8g13EQoSTIW%2BihLwDd2tl8H5xccLUMNM8p21wf6yWDFOOHWVYjiibssFhJtqQUiLO4oQXH%2BIWe7VeIIwiG%2B8XJtiXK%2F12Q1n69Uq%2B2IMuYxHr474wFuVrvIQHb0j75xM7%2BML4tj5TdaknOXRF0nm7KpKvAUbpySILLu3%2FHUAQuD3w1BwzAdPPHrbvngYdjSPYKwcCOORBBFx4XKoWjoeBfqwvG5yGXIJuu%2BGMnQrbzfpy1BZBiNwiKWZh60vCMdNuvnQyIzs3N78AV4d6nCi7BoeFmFMd5o%2FVkl3FNASHlbghbR%2FJ7XS8hFc1jp9vYZG8fiuAMbQv5gEMfU1DJiU%2Bo3tvWq%2BtbYljfnp1aobEaCE8ClRNPORnaM7RCSjJCAMp8UFvzRiZyvJ4BUHxqSV4aZKFWXZcoHo%2FgZptbEdSQfzum9QWkB8%2FSYpwhtKHzmVHjCJ8YK%2BBjqkASVAuuRwQCjJWWGYHyMW03smre4dBDS2GI8a1fXbaymZCOQF6EKdorqEgDg21AiIw6OtJGm0Cj4Tdhoc9wODSwBmmzuZS7iDMY8ZWftOv2YsY5Q8%2F%2FTKG%2FJ%2B3MDeub7U4oxkAWfKla1T4sknt6x%2FIwg49aSKzWIsvCjqIW%2BS5Fi6t6XEnU%2FiS9FG7OE2ufaPBBECr%2FWe92FpjN6BSyWoSMwBsfcZ&X-Amz-Signature=d0f255d934208153fd1106044cc628efa8564d0df53f887e46ff6ed525245086&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

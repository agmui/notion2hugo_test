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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOJS63P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQChCrTJ%2FCY30clmnz1qEZIw6AtYArRFVwoDtbo2fQikCwIhAKTf%2B1mSwbCU2RYsqv87wUSxC5pnOMUyWI1eIki3aS5nKv8DCHUQABoMNjM3NDIzMTgzODA1Igywh93AtcZoJ46UKAYq3APWL5DKzofibG2SdFl4ClKqbkl71VJhLCK1dorI1%2Blksplo5BYm2Gc0x%2B6lAkdLyGIMS%2FQegLgpfv8umcQsOm7YRzVYKtUSLkSa9gYpL2vRBoY5eV9V0NuWz86KqMxD5krxi9h3M%2BoMgOuGIwtMil7tBBz8NVLxKYHhmBT4HD82V2PFZSu41RegY7I9375wF5oJonxxw2SEh1d%2BvfsoduZOdTnW%2Bn%2FA%2BlfnFgJV7Ioy1A0IislpsIJng5oaycqZ7rmhTFlFKGWlcc0iDfLo39az7sRWdtB%2BXH5wUAuXiKb6goRjbX2%2FlnR7iAxSRpRdagCpcPpHzks5u0rJv%2BCRCOCiuq%2FwK92yJwf4F1iHbkQLe8ygbSOpHb4IpFC6cr9%2B6MyGEsqXNi8gKRGxurqqUSUPyuAIaWOr6a5MrpA6H1wulnLuWnvOiAhpeLCZxiLVqZ1FcYl9Viz8hu1OKuMhJvfUgQX8t1b9cO41cw8ExWd6v3%2Fd4WFAKGBzGBPUAoOdX%2BTbOUArF%2BGAGzFf2YLMfaMTNyRduXahExVyHFKXHkPMDO9YoVHjC9JpQLXjk%2FzHXsuxE8Pv9IPaNE5a7Vbua1SPL%2BKfH5YGnN%2BIc6MkEULMAByUWigHGoa2LAJW2jDu4a7DBjqkAT27X6vRYEuRDvMizD7u6cF2TKE4Ctrzq4wKH%2FKJnt1dNVpH9Q%2FWB05KTKx%2FYC6gFhZBVFWHz%2BFhzk3ANIzhttGibRDaK6GaCfewqNRaT8VPnzrY0MBMvKNJZZA6cKkZ9LCwTQt7X4eSfPtySF7gKorB2j%2FxbgCq%2Fyb52Q3uM9OM6WtibaCUZPih8DZOFCW4dExuOqtf1piyX50RFe8b4Ffkmz1L&X-Amz-Signature=7f8f1af3d77e8dee117089bc2ca0388f1c1e02fb79ac6d97a4dcfb4a2ba1c0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOJS63P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQChCrTJ%2FCY30clmnz1qEZIw6AtYArRFVwoDtbo2fQikCwIhAKTf%2B1mSwbCU2RYsqv87wUSxC5pnOMUyWI1eIki3aS5nKv8DCHUQABoMNjM3NDIzMTgzODA1Igywh93AtcZoJ46UKAYq3APWL5DKzofibG2SdFl4ClKqbkl71VJhLCK1dorI1%2Blksplo5BYm2Gc0x%2B6lAkdLyGIMS%2FQegLgpfv8umcQsOm7YRzVYKtUSLkSa9gYpL2vRBoY5eV9V0NuWz86KqMxD5krxi9h3M%2BoMgOuGIwtMil7tBBz8NVLxKYHhmBT4HD82V2PFZSu41RegY7I9375wF5oJonxxw2SEh1d%2BvfsoduZOdTnW%2Bn%2FA%2BlfnFgJV7Ioy1A0IislpsIJng5oaycqZ7rmhTFlFKGWlcc0iDfLo39az7sRWdtB%2BXH5wUAuXiKb6goRjbX2%2FlnR7iAxSRpRdagCpcPpHzks5u0rJv%2BCRCOCiuq%2FwK92yJwf4F1iHbkQLe8ygbSOpHb4IpFC6cr9%2B6MyGEsqXNi8gKRGxurqqUSUPyuAIaWOr6a5MrpA6H1wulnLuWnvOiAhpeLCZxiLVqZ1FcYl9Viz8hu1OKuMhJvfUgQX8t1b9cO41cw8ExWd6v3%2Fd4WFAKGBzGBPUAoOdX%2BTbOUArF%2BGAGzFf2YLMfaMTNyRduXahExVyHFKXHkPMDO9YoVHjC9JpQLXjk%2FzHXsuxE8Pv9IPaNE5a7Vbua1SPL%2BKfH5YGnN%2BIc6MkEULMAByUWigHGoa2LAJW2jDu4a7DBjqkAT27X6vRYEuRDvMizD7u6cF2TKE4Ctrzq4wKH%2FKJnt1dNVpH9Q%2FWB05KTKx%2FYC6gFhZBVFWHz%2BFhzk3ANIzhttGibRDaK6GaCfewqNRaT8VPnzrY0MBMvKNJZZA6cKkZ9LCwTQt7X4eSfPtySF7gKorB2j%2FxbgCq%2Fyb52Q3uM9OM6WtibaCUZPih8DZOFCW4dExuOqtf1piyX50RFe8b4Ffkmz1L&X-Amz-Signature=8c3647e5bbbd5b25788b660cbdfff4440b4b8a554eca1ca7d106fd2c173ee4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOJS63P%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQChCrTJ%2FCY30clmnz1qEZIw6AtYArRFVwoDtbo2fQikCwIhAKTf%2B1mSwbCU2RYsqv87wUSxC5pnOMUyWI1eIki3aS5nKv8DCHUQABoMNjM3NDIzMTgzODA1Igywh93AtcZoJ46UKAYq3APWL5DKzofibG2SdFl4ClKqbkl71VJhLCK1dorI1%2Blksplo5BYm2Gc0x%2B6lAkdLyGIMS%2FQegLgpfv8umcQsOm7YRzVYKtUSLkSa9gYpL2vRBoY5eV9V0NuWz86KqMxD5krxi9h3M%2BoMgOuGIwtMil7tBBz8NVLxKYHhmBT4HD82V2PFZSu41RegY7I9375wF5oJonxxw2SEh1d%2BvfsoduZOdTnW%2Bn%2FA%2BlfnFgJV7Ioy1A0IislpsIJng5oaycqZ7rmhTFlFKGWlcc0iDfLo39az7sRWdtB%2BXH5wUAuXiKb6goRjbX2%2FlnR7iAxSRpRdagCpcPpHzks5u0rJv%2BCRCOCiuq%2FwK92yJwf4F1iHbkQLe8ygbSOpHb4IpFC6cr9%2B6MyGEsqXNi8gKRGxurqqUSUPyuAIaWOr6a5MrpA6H1wulnLuWnvOiAhpeLCZxiLVqZ1FcYl9Viz8hu1OKuMhJvfUgQX8t1b9cO41cw8ExWd6v3%2Fd4WFAKGBzGBPUAoOdX%2BTbOUArF%2BGAGzFf2YLMfaMTNyRduXahExVyHFKXHkPMDO9YoVHjC9JpQLXjk%2FzHXsuxE8Pv9IPaNE5a7Vbua1SPL%2BKfH5YGnN%2BIc6MkEULMAByUWigHGoa2LAJW2jDu4a7DBjqkAT27X6vRYEuRDvMizD7u6cF2TKE4Ctrzq4wKH%2FKJnt1dNVpH9Q%2FWB05KTKx%2FYC6gFhZBVFWHz%2BFhzk3ANIzhttGibRDaK6GaCfewqNRaT8VPnzrY0MBMvKNJZZA6cKkZ9LCwTQt7X4eSfPtySF7gKorB2j%2FxbgCq%2Fyb52Q3uM9OM6WtibaCUZPih8DZOFCW4dExuOqtf1piyX50RFe8b4Ffkmz1L&X-Amz-Signature=2671c68e12f1df5fcf772170616f359bb2c3147ff0bd3931e10db09ec8535ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

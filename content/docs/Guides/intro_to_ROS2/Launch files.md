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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5ELABQ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTy%2FPBc0gX%2BaYHq2up0SdvsPhvytOJ4EJ1HPS5wUspPAiAYAaJQe2wwMRnleMdRrT%2BgzXn2pTKDxm64Ruzd8BWRVyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMn9dk6muQ%2BQE%2ByWcKKtwDMwp5yMLpmHQ8iDov2w9XT2b%2Fm7mhNZyq0FdVYQn5Ol%2BG44r6jQCkp1gn5P06vXwp99bx83OcfgUY4xdnQMItdYFu9gAc4yhBXu3DdCrEWKAIxnvhYH6p5Y19WlqeXaam8ch9yGLcU2taQpLA1o3M147itpqJqQlQ1QWDJnFTiQ25FVHmYU9f4HvMCFPjmhg5%2B7v1M7%2FO%2FpddA6NoGB7ZaIFPfdzaRJ9Z7fe7cE7L7l6qfcZzInk%2BEHO2qmHritDViunFw78epFzOeIg1l%2BSrQ6f1TOXpiiCru5lTZSQGD7fvvaW6OagIpCuZcj5OQPKi5Oi0MpH0Mlyz67mNV5PyDY5%2FY1Nz7cD2iV%2B4dyvz9EB8V5rtYOwZOBmpGy66z13NPSWaY6Z1ri%2BhMZVsdsu8Zh8ZyPpyl%2BVhdCr7h%2BlGW5WHlymUpJqesW0m8ox4Y6ENGASRauboM8BWSDFySlJgY8Mk3wJyPm4bK6WnTwidXyf5COOcSdic6tmuuDJYNHtybeEbFslSVtuABMoW%2BVtkOlc55I%2Fu85eM%2FOhbcJpKNSKNvq%2BgcJjWZNiLHayUBvbuFRoxlGagJ1mWvGpAF17qb6mobRbo%2BnPLuIGJqTwa0Z%2BHO3yskDUISyd%2FImUw34ervgY6pgGJS880z22CYCUo9RgR%2BUluYE5A21jnBZb5DL1%2FafJQ88Ggb%2BJ1hElJXNw4rdSJvzXIqLQ9qqubJMtHg0dctkabBo5g%2BKuEr%2Bwv5P27wCMXOU%2F0tlg0cLg%2FTUWdUMfwlD%2Bnamc0COJvrGWfycA1WJNZs30ZEWg%2FA6%2BVSz2zvhlCI9W2tmMTbqBtryBZcIqXx3PaNuEz72vRAMwUayd3lbrggSCLMtlw&X-Amz-Signature=d7de422afa683d10ec9386a7af759dac2f0e3fd66fe5dbda68fe0b4f0fe01a77&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5ELABQ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTy%2FPBc0gX%2BaYHq2up0SdvsPhvytOJ4EJ1HPS5wUspPAiAYAaJQe2wwMRnleMdRrT%2BgzXn2pTKDxm64Ruzd8BWRVyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMn9dk6muQ%2BQE%2ByWcKKtwDMwp5yMLpmHQ8iDov2w9XT2b%2Fm7mhNZyq0FdVYQn5Ol%2BG44r6jQCkp1gn5P06vXwp99bx83OcfgUY4xdnQMItdYFu9gAc4yhBXu3DdCrEWKAIxnvhYH6p5Y19WlqeXaam8ch9yGLcU2taQpLA1o3M147itpqJqQlQ1QWDJnFTiQ25FVHmYU9f4HvMCFPjmhg5%2B7v1M7%2FO%2FpddA6NoGB7ZaIFPfdzaRJ9Z7fe7cE7L7l6qfcZzInk%2BEHO2qmHritDViunFw78epFzOeIg1l%2BSrQ6f1TOXpiiCru5lTZSQGD7fvvaW6OagIpCuZcj5OQPKi5Oi0MpH0Mlyz67mNV5PyDY5%2FY1Nz7cD2iV%2B4dyvz9EB8V5rtYOwZOBmpGy66z13NPSWaY6Z1ri%2BhMZVsdsu8Zh8ZyPpyl%2BVhdCr7h%2BlGW5WHlymUpJqesW0m8ox4Y6ENGASRauboM8BWSDFySlJgY8Mk3wJyPm4bK6WnTwidXyf5COOcSdic6tmuuDJYNHtybeEbFslSVtuABMoW%2BVtkOlc55I%2Fu85eM%2FOhbcJpKNSKNvq%2BgcJjWZNiLHayUBvbuFRoxlGagJ1mWvGpAF17qb6mobRbo%2BnPLuIGJqTwa0Z%2BHO3yskDUISyd%2FImUw34ervgY6pgGJS880z22CYCUo9RgR%2BUluYE5A21jnBZb5DL1%2FafJQ88Ggb%2BJ1hElJXNw4rdSJvzXIqLQ9qqubJMtHg0dctkabBo5g%2BKuEr%2Bwv5P27wCMXOU%2F0tlg0cLg%2FTUWdUMfwlD%2Bnamc0COJvrGWfycA1WJNZs30ZEWg%2FA6%2BVSz2zvhlCI9W2tmMTbqBtryBZcIqXx3PaNuEz72vRAMwUayd3lbrggSCLMtlw&X-Amz-Signature=fe8120a54a1f370cde03bae2fbaf663effe82c620f80e9ddf52c1b46f28659b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN5ELABQ%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T110218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICTy%2FPBc0gX%2BaYHq2up0SdvsPhvytOJ4EJ1HPS5wUspPAiAYAaJQe2wwMRnleMdRrT%2BgzXn2pTKDxm64Ruzd8BWRVyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMn9dk6muQ%2BQE%2ByWcKKtwDMwp5yMLpmHQ8iDov2w9XT2b%2Fm7mhNZyq0FdVYQn5Ol%2BG44r6jQCkp1gn5P06vXwp99bx83OcfgUY4xdnQMItdYFu9gAc4yhBXu3DdCrEWKAIxnvhYH6p5Y19WlqeXaam8ch9yGLcU2taQpLA1o3M147itpqJqQlQ1QWDJnFTiQ25FVHmYU9f4HvMCFPjmhg5%2B7v1M7%2FO%2FpddA6NoGB7ZaIFPfdzaRJ9Z7fe7cE7L7l6qfcZzInk%2BEHO2qmHritDViunFw78epFzOeIg1l%2BSrQ6f1TOXpiiCru5lTZSQGD7fvvaW6OagIpCuZcj5OQPKi5Oi0MpH0Mlyz67mNV5PyDY5%2FY1Nz7cD2iV%2B4dyvz9EB8V5rtYOwZOBmpGy66z13NPSWaY6Z1ri%2BhMZVsdsu8Zh8ZyPpyl%2BVhdCr7h%2BlGW5WHlymUpJqesW0m8ox4Y6ENGASRauboM8BWSDFySlJgY8Mk3wJyPm4bK6WnTwidXyf5COOcSdic6tmuuDJYNHtybeEbFslSVtuABMoW%2BVtkOlc55I%2Fu85eM%2FOhbcJpKNSKNvq%2BgcJjWZNiLHayUBvbuFRoxlGagJ1mWvGpAF17qb6mobRbo%2BnPLuIGJqTwa0Z%2BHO3yskDUISyd%2FImUw34ervgY6pgGJS880z22CYCUo9RgR%2BUluYE5A21jnBZb5DL1%2FafJQ88Ggb%2BJ1hElJXNw4rdSJvzXIqLQ9qqubJMtHg0dctkabBo5g%2BKuEr%2Bwv5P27wCMXOU%2F0tlg0cLg%2FTUWdUMfwlD%2Bnamc0COJvrGWfycA1WJNZs30ZEWg%2FA6%2BVSz2zvhlCI9W2tmMTbqBtryBZcIqXx3PaNuEz72vRAMwUayd3lbrggSCLMtlw&X-Amz-Signature=d577cdc9e6e2b1890979eba4f93e04b050a123b9757778fc090136955343f2d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

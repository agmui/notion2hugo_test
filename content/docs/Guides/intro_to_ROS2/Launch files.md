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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAPLD26C%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwZ3bRTyOsKoUmuO%2BZoAj0Qk%2BNiyMp1PEbu24qT4NNLwIhAIqQ%2BYiybnGkZLSPcmcrbYaiy%2FcoHv%2Bl0mUNZjZz6ECAKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXFJD0Mt5lPgrDSI0q3APaPFFkP21v4vG4HbWWyCd5%2BDEgRLiboyYicdnkBkXDaneviW6AEoiLjSPkHCAObFHgN2K4Ciz3ypxPbvaptTcRZl87bzTReB8WpwtD%2Fi4uG1kNIJwPzqnkg0W%2FApHgmQaW%2BIuI%2FAuE34Z0DF9VofHzh0Y%2FGIjq5z%2FDvcrFWb%2Bax1YsyyJc77n45kinUbSB%2F5%2BZ8tWZr4UEfKds%2BEDUfxCk4dQ2znr2S81ix%2Bdlqhq5n3AFS1IeZMA8yb0YkvOB1XAmgbx10unrxU41bgb25yZbynxPJOJM%2B9V5P%2F27FHr11VhV0gNqtU71GtU9uTEANCXOwX%2BlG7IcwH1J8ukNTRXBwaEpKGGAPtukZqLq3uBXrWbsVrN2TDLMNLrCPLogT21ONVdi2aZoYXLVK6ArGbt%2FneEYUF0o507XBLVlljUmKaozRzO4fd7um71FhlQaYqwghR6K1DXuwG0EgpQEI9KMn777ANor%2Bb4yKHJkc87%2B0Q682u%2FMc4%2FI4NJ3oyFaD7N3zycniI1eb7UGe5F8oj6NvXXKGv8pNr%2BfRWj3w5MQnRFh35YDPaMqLfy7sRJM6%2FX2xVoNRVmOagGXoADCp0uQRCdwpTWw%2BqD59kskRo1PLDhlKOd%2FvqpF8G6%2BpzCOsYK%2FBjqkAVKCzT1aNFB9XfoB2Aw6d23wdb%2F9tj0tuiGIFqbm3T%2BiI7Zt3ukqohdKznDyWYvNK165Q37j9YdFpVbpwDYNfcCDTC0MPrznYppHUbNwSMaNIEBytQzWhAyyRdTFmGq0XdyZSfyINRSzhCGgKIHwZ0iN7BRSXRY5bwJpQpNhadNJJcdhPNuYnWiixy9%2BwT3YSpz4FGH4Oi%2BG%2B%2F44RvlcKKXsKrVG&X-Amz-Signature=3a2cb6cadf670c925e63c20bb78dd7a46743b9d5b5b9c2d08aba8907040f69e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAPLD26C%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwZ3bRTyOsKoUmuO%2BZoAj0Qk%2BNiyMp1PEbu24qT4NNLwIhAIqQ%2BYiybnGkZLSPcmcrbYaiy%2FcoHv%2Bl0mUNZjZz6ECAKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXFJD0Mt5lPgrDSI0q3APaPFFkP21v4vG4HbWWyCd5%2BDEgRLiboyYicdnkBkXDaneviW6AEoiLjSPkHCAObFHgN2K4Ciz3ypxPbvaptTcRZl87bzTReB8WpwtD%2Fi4uG1kNIJwPzqnkg0W%2FApHgmQaW%2BIuI%2FAuE34Z0DF9VofHzh0Y%2FGIjq5z%2FDvcrFWb%2Bax1YsyyJc77n45kinUbSB%2F5%2BZ8tWZr4UEfKds%2BEDUfxCk4dQ2znr2S81ix%2Bdlqhq5n3AFS1IeZMA8yb0YkvOB1XAmgbx10unrxU41bgb25yZbynxPJOJM%2B9V5P%2F27FHr11VhV0gNqtU71GtU9uTEANCXOwX%2BlG7IcwH1J8ukNTRXBwaEpKGGAPtukZqLq3uBXrWbsVrN2TDLMNLrCPLogT21ONVdi2aZoYXLVK6ArGbt%2FneEYUF0o507XBLVlljUmKaozRzO4fd7um71FhlQaYqwghR6K1DXuwG0EgpQEI9KMn777ANor%2Bb4yKHJkc87%2B0Q682u%2FMc4%2FI4NJ3oyFaD7N3zycniI1eb7UGe5F8oj6NvXXKGv8pNr%2BfRWj3w5MQnRFh35YDPaMqLfy7sRJM6%2FX2xVoNRVmOagGXoADCp0uQRCdwpTWw%2BqD59kskRo1PLDhlKOd%2FvqpF8G6%2BpzCOsYK%2FBjqkAVKCzT1aNFB9XfoB2Aw6d23wdb%2F9tj0tuiGIFqbm3T%2BiI7Zt3ukqohdKznDyWYvNK165Q37j9YdFpVbpwDYNfcCDTC0MPrznYppHUbNwSMaNIEBytQzWhAyyRdTFmGq0XdyZSfyINRSzhCGgKIHwZ0iN7BRSXRY5bwJpQpNhadNJJcdhPNuYnWiixy9%2BwT3YSpz4FGH4Oi%2BG%2B%2F44RvlcKKXsKrVG&X-Amz-Signature=c7e55b400af2b8d060f9e08b116d5c8b569a313c96f97cba2b42bd0785b35e48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAPLD26C%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T032740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwZ3bRTyOsKoUmuO%2BZoAj0Qk%2BNiyMp1PEbu24qT4NNLwIhAIqQ%2BYiybnGkZLSPcmcrbYaiy%2FcoHv%2Bl0mUNZjZz6ECAKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXFJD0Mt5lPgrDSI0q3APaPFFkP21v4vG4HbWWyCd5%2BDEgRLiboyYicdnkBkXDaneviW6AEoiLjSPkHCAObFHgN2K4Ciz3ypxPbvaptTcRZl87bzTReB8WpwtD%2Fi4uG1kNIJwPzqnkg0W%2FApHgmQaW%2BIuI%2FAuE34Z0DF9VofHzh0Y%2FGIjq5z%2FDvcrFWb%2Bax1YsyyJc77n45kinUbSB%2F5%2BZ8tWZr4UEfKds%2BEDUfxCk4dQ2znr2S81ix%2Bdlqhq5n3AFS1IeZMA8yb0YkvOB1XAmgbx10unrxU41bgb25yZbynxPJOJM%2B9V5P%2F27FHr11VhV0gNqtU71GtU9uTEANCXOwX%2BlG7IcwH1J8ukNTRXBwaEpKGGAPtukZqLq3uBXrWbsVrN2TDLMNLrCPLogT21ONVdi2aZoYXLVK6ArGbt%2FneEYUF0o507XBLVlljUmKaozRzO4fd7um71FhlQaYqwghR6K1DXuwG0EgpQEI9KMn777ANor%2Bb4yKHJkc87%2B0Q682u%2FMc4%2FI4NJ3oyFaD7N3zycniI1eb7UGe5F8oj6NvXXKGv8pNr%2BfRWj3w5MQnRFh35YDPaMqLfy7sRJM6%2FX2xVoNRVmOagGXoADCp0uQRCdwpTWw%2BqD59kskRo1PLDhlKOd%2FvqpF8G6%2BpzCOsYK%2FBjqkAVKCzT1aNFB9XfoB2Aw6d23wdb%2F9tj0tuiGIFqbm3T%2BiI7Zt3ukqohdKznDyWYvNK165Q37j9YdFpVbpwDYNfcCDTC0MPrznYppHUbNwSMaNIEBytQzWhAyyRdTFmGq0XdyZSfyINRSzhCGgKIHwZ0iN7BRSXRY5bwJpQpNhadNJJcdhPNuYnWiixy9%2BwT3YSpz4FGH4Oi%2BG%2B%2F44RvlcKKXsKrVG&X-Amz-Signature=c2d0c20479c9f49bbcf8a60c11a1bc702e35fc684331fdb018fbb9192ac069a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

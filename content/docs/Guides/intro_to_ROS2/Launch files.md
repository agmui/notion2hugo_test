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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHSZP4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIG%2BmAiEoH4LJRFAxsSOPMOtzlNDe9OXMlqvKfh6LzAWmAiB8adubpG52DX6huH5c7NaxOteCy3ml8e8Y7MrtZUDnuir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMf5ce65%2FmHo89E6DIKtwDTf7cVGve%2BJSIBgw4OvOJ33omsAzhH1o54PsFmkhWiEMbED%2F9KJIt6xqgv2uVOfz5Ne%2FbtInDGxv1LXrx%2FgwB7QRZqBNVZTceR2NN%2FpjAIGG%2FPISDP6T6%2B7MPs%2F6Q5t9HhLHYlKp%2FhwUXEMvHx9qgAX93LTwPBAVLaUUJYsml41q5IFyq99OCW6Gwpjb7x3eWXT0J6tz3ew3JuYC7cNuCA2i9h7RnFpo%2BEUaGNQhfs%2Bss75giAAEmyVcjnoWonLq92GtFhKBNS87VuMCadCpDJtN7a5JmOTU3Qd6ds9Y07OXt6J3ChU6ct5FQfugLOVqf7ZX93ws8oyPfkppEShayVrQ3WT4M00gyTvWuaKVGWUcycP%2BDmrdCy%2B4h45EgRlwecgifpXheCRMh8Hcz%2BppDz9DPaU3Q1mD5W931HBP9fjSfZKvQI%2Btg94bP%2FTBaR0mhQSkuJEVXAN2m%2B1w5pX1dTCCh1PSfodYWJk9FSSWpg9aGusLVyDz4f5DcRNRgGDE4peKXqisEurduPGh0VDd3%2B0kMJfvz6Yq%2FkLcPTCee5SLRpB%2FP3On1EzBhiWZcVBrdrN3l4TIuF4F82vzm0xXOgOPba33MbcEd1Um%2BF%2FNf8kD%2FHtqs9%2BaTd%2Bhu73IwjrzrvgY6pgHhFmeoI1bLvIZsgSIr5Q2qIakb9ZEIcP19cMJUWgtHgAYtuoNNzT0BVKudvv7M4J71tFfu%2FO83SbVaicvCYuEqT05iqAf26QU0cWSPRGGQHaQFFAyxkdB8K%2F5pao%2F9RKKDZkuIIM3w7nGIba6UOZNBrfCr9k%2FKfIiCi%2BIJKxlIHi4YmhZufGdvvKseqXWDGZEAL2KHEbIqU1dQNIns4ppySsyYgmw%2F&X-Amz-Signature=50fe45111fbba5094593d19e9f2a0403aed7919b4d59bb7c9c9ecce4f52a08fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHSZP4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIG%2BmAiEoH4LJRFAxsSOPMOtzlNDe9OXMlqvKfh6LzAWmAiB8adubpG52DX6huH5c7NaxOteCy3ml8e8Y7MrtZUDnuir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMf5ce65%2FmHo89E6DIKtwDTf7cVGve%2BJSIBgw4OvOJ33omsAzhH1o54PsFmkhWiEMbED%2F9KJIt6xqgv2uVOfz5Ne%2FbtInDGxv1LXrx%2FgwB7QRZqBNVZTceR2NN%2FpjAIGG%2FPISDP6T6%2B7MPs%2F6Q5t9HhLHYlKp%2FhwUXEMvHx9qgAX93LTwPBAVLaUUJYsml41q5IFyq99OCW6Gwpjb7x3eWXT0J6tz3ew3JuYC7cNuCA2i9h7RnFpo%2BEUaGNQhfs%2Bss75giAAEmyVcjnoWonLq92GtFhKBNS87VuMCadCpDJtN7a5JmOTU3Qd6ds9Y07OXt6J3ChU6ct5FQfugLOVqf7ZX93ws8oyPfkppEShayVrQ3WT4M00gyTvWuaKVGWUcycP%2BDmrdCy%2B4h45EgRlwecgifpXheCRMh8Hcz%2BppDz9DPaU3Q1mD5W931HBP9fjSfZKvQI%2Btg94bP%2FTBaR0mhQSkuJEVXAN2m%2B1w5pX1dTCCh1PSfodYWJk9FSSWpg9aGusLVyDz4f5DcRNRgGDE4peKXqisEurduPGh0VDd3%2B0kMJfvz6Yq%2FkLcPTCee5SLRpB%2FP3On1EzBhiWZcVBrdrN3l4TIuF4F82vzm0xXOgOPba33MbcEd1Um%2BF%2FNf8kD%2FHtqs9%2BaTd%2Bhu73IwjrzrvgY6pgHhFmeoI1bLvIZsgSIr5Q2qIakb9ZEIcP19cMJUWgtHgAYtuoNNzT0BVKudvv7M4J71tFfu%2FO83SbVaicvCYuEqT05iqAf26QU0cWSPRGGQHaQFFAyxkdB8K%2F5pao%2F9RKKDZkuIIM3w7nGIba6UOZNBrfCr9k%2FKfIiCi%2BIJKxlIHi4YmhZufGdvvKseqXWDGZEAL2KHEbIqU1dQNIns4ppySsyYgmw%2F&X-Amz-Signature=86415e5f7920efd75eea8c259527874ef1cc56d4be6a2cbd4bf321d0a2172a11&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJMHSZP4%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIG%2BmAiEoH4LJRFAxsSOPMOtzlNDe9OXMlqvKfh6LzAWmAiB8adubpG52DX6huH5c7NaxOteCy3ml8e8Y7MrtZUDnuir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMf5ce65%2FmHo89E6DIKtwDTf7cVGve%2BJSIBgw4OvOJ33omsAzhH1o54PsFmkhWiEMbED%2F9KJIt6xqgv2uVOfz5Ne%2FbtInDGxv1LXrx%2FgwB7QRZqBNVZTceR2NN%2FpjAIGG%2FPISDP6T6%2B7MPs%2F6Q5t9HhLHYlKp%2FhwUXEMvHx9qgAX93LTwPBAVLaUUJYsml41q5IFyq99OCW6Gwpjb7x3eWXT0J6tz3ew3JuYC7cNuCA2i9h7RnFpo%2BEUaGNQhfs%2Bss75giAAEmyVcjnoWonLq92GtFhKBNS87VuMCadCpDJtN7a5JmOTU3Qd6ds9Y07OXt6J3ChU6ct5FQfugLOVqf7ZX93ws8oyPfkppEShayVrQ3WT4M00gyTvWuaKVGWUcycP%2BDmrdCy%2B4h45EgRlwecgifpXheCRMh8Hcz%2BppDz9DPaU3Q1mD5W931HBP9fjSfZKvQI%2Btg94bP%2FTBaR0mhQSkuJEVXAN2m%2B1w5pX1dTCCh1PSfodYWJk9FSSWpg9aGusLVyDz4f5DcRNRgGDE4peKXqisEurduPGh0VDd3%2B0kMJfvz6Yq%2FkLcPTCee5SLRpB%2FP3On1EzBhiWZcVBrdrN3l4TIuF4F82vzm0xXOgOPba33MbcEd1Um%2BF%2FNf8kD%2FHtqs9%2BaTd%2Bhu73IwjrzrvgY6pgHhFmeoI1bLvIZsgSIr5Q2qIakb9ZEIcP19cMJUWgtHgAYtuoNNzT0BVKudvv7M4J71tFfu%2FO83SbVaicvCYuEqT05iqAf26QU0cWSPRGGQHaQFFAyxkdB8K%2F5pao%2F9RKKDZkuIIM3w7nGIba6UOZNBrfCr9k%2FKfIiCi%2BIJKxlIHi4YmhZufGdvvKseqXWDGZEAL2KHEbIqU1dQNIns4ppySsyYgmw%2F&X-Amz-Signature=2009513148c44013e8c20398fbbf5fa5271ff8861be7527eb8445edea839b646&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

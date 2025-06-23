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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQAJN2TX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGmNwAfQPIwNly2xJ2EfLnnp%2BPlQWPDrwZHTaPBeXvTVAiEAkI8Zjv4BHTt4n1ANlqVOJSTgNDMA9Uaf7U8qe4xSbyEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGR6hPOfjVd%2BJYjJ8ircA4jNm3P5jhQe9%2BDhFQEOBJlOTuG8Y5%2BDY3FXGykntizrW9v2q3SIKq2P76mj9AA6WOWc4X%2B0XD%2FevO4n74hT9CwVIhkY%2FMbOs9yeEgrkYSQvaTZhpPGxDPaOY%2FR%2BaO5eu0M%2Fwvzh50MQombDcHcPfwFjRbMKJwZyvVX3wPiy3Gbe5vO4sbzkqVjv%2B3CkxGrilBZSjJBkd4Zpsh14HF9h7OHlurdsfBNxrCem9YGTqQhnGKGXdklfbJkt7C7T6AZZceM68HtVNE%2FdOYcoQbxkt3hLfFilbTVrsdTU8GH1EcDmnEuW0EFOePA87ALprW7r4pn2r3gha3R8Ac4UWv1yQxIlpPq8HnXl3%2FfVtovoau5080VmbN3b72p0MKhF2OURCQbp3y8RV6B3uP5ryTWgAAoc0BhzwFBarXTy1zG1oNQeJeRRPjJ%2BBYqglAY2YO6Dd%2F14JVl2zhXQsku95carhfqHWQaXNtT97we4Yl2Xy7cgoxvMvD3s%2BEIoZaCUM3GuHPXLEl%2BvOS2wdLilXCRcCNqkmmqluNVWpryRCRV3G7XX%2BR5iZg6MsmoCPE9k5ereFogBJpzVlTPjJ95izmKEHL7mUldsR4beQ8S3yTeQM%2BiBotTO4E8VDXPEB%2FzcMMH148IGOqUBt7oM5lFAFeyoYnoSoOsOOupBl4cCCz15ioVaSe3GajW39NZgbBHqKGHgOkpG4YnB0vvTl%2F7FfSM71hbT6ks%2BEpt23YeCXrW5%2FmhLXTp2zKH8HQoUU%2FuBgwxFAN4DfPmlAeWczfizebXs9FAqEZVUfRcPkwvkO61FbK8aAT0BG8y5%2FRqFB4s8L6mLrZ179bPnPPvb9Lm3Zfnwxir%2BZngBoVFW%2FMGR&X-Amz-Signature=e70f131d6c8fa2efd96435cd18b908397ece470b9cc957c49e5f201272938a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQAJN2TX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGmNwAfQPIwNly2xJ2EfLnnp%2BPlQWPDrwZHTaPBeXvTVAiEAkI8Zjv4BHTt4n1ANlqVOJSTgNDMA9Uaf7U8qe4xSbyEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGR6hPOfjVd%2BJYjJ8ircA4jNm3P5jhQe9%2BDhFQEOBJlOTuG8Y5%2BDY3FXGykntizrW9v2q3SIKq2P76mj9AA6WOWc4X%2B0XD%2FevO4n74hT9CwVIhkY%2FMbOs9yeEgrkYSQvaTZhpPGxDPaOY%2FR%2BaO5eu0M%2Fwvzh50MQombDcHcPfwFjRbMKJwZyvVX3wPiy3Gbe5vO4sbzkqVjv%2B3CkxGrilBZSjJBkd4Zpsh14HF9h7OHlurdsfBNxrCem9YGTqQhnGKGXdklfbJkt7C7T6AZZceM68HtVNE%2FdOYcoQbxkt3hLfFilbTVrsdTU8GH1EcDmnEuW0EFOePA87ALprW7r4pn2r3gha3R8Ac4UWv1yQxIlpPq8HnXl3%2FfVtovoau5080VmbN3b72p0MKhF2OURCQbp3y8RV6B3uP5ryTWgAAoc0BhzwFBarXTy1zG1oNQeJeRRPjJ%2BBYqglAY2YO6Dd%2F14JVl2zhXQsku95carhfqHWQaXNtT97we4Yl2Xy7cgoxvMvD3s%2BEIoZaCUM3GuHPXLEl%2BvOS2wdLilXCRcCNqkmmqluNVWpryRCRV3G7XX%2BR5iZg6MsmoCPE9k5ereFogBJpzVlTPjJ95izmKEHL7mUldsR4beQ8S3yTeQM%2BiBotTO4E8VDXPEB%2FzcMMH148IGOqUBt7oM5lFAFeyoYnoSoOsOOupBl4cCCz15ioVaSe3GajW39NZgbBHqKGHgOkpG4YnB0vvTl%2F7FfSM71hbT6ks%2BEpt23YeCXrW5%2FmhLXTp2zKH8HQoUU%2FuBgwxFAN4DfPmlAeWczfizebXs9FAqEZVUfRcPkwvkO61FbK8aAT0BG8y5%2FRqFB4s8L6mLrZ179bPnPPvb9Lm3Zfnwxir%2BZngBoVFW%2FMGR&X-Amz-Signature=01f3fbcfa2f8e6e88468acc7853d0c724afbbcc467bbbfb657eb9d7e09c4885a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQAJN2TX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGmNwAfQPIwNly2xJ2EfLnnp%2BPlQWPDrwZHTaPBeXvTVAiEAkI8Zjv4BHTt4n1ANlqVOJSTgNDMA9Uaf7U8qe4xSbyEq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDGR6hPOfjVd%2BJYjJ8ircA4jNm3P5jhQe9%2BDhFQEOBJlOTuG8Y5%2BDY3FXGykntizrW9v2q3SIKq2P76mj9AA6WOWc4X%2B0XD%2FevO4n74hT9CwVIhkY%2FMbOs9yeEgrkYSQvaTZhpPGxDPaOY%2FR%2BaO5eu0M%2Fwvzh50MQombDcHcPfwFjRbMKJwZyvVX3wPiy3Gbe5vO4sbzkqVjv%2B3CkxGrilBZSjJBkd4Zpsh14HF9h7OHlurdsfBNxrCem9YGTqQhnGKGXdklfbJkt7C7T6AZZceM68HtVNE%2FdOYcoQbxkt3hLfFilbTVrsdTU8GH1EcDmnEuW0EFOePA87ALprW7r4pn2r3gha3R8Ac4UWv1yQxIlpPq8HnXl3%2FfVtovoau5080VmbN3b72p0MKhF2OURCQbp3y8RV6B3uP5ryTWgAAoc0BhzwFBarXTy1zG1oNQeJeRRPjJ%2BBYqglAY2YO6Dd%2F14JVl2zhXQsku95carhfqHWQaXNtT97we4Yl2Xy7cgoxvMvD3s%2BEIoZaCUM3GuHPXLEl%2BvOS2wdLilXCRcCNqkmmqluNVWpryRCRV3G7XX%2BR5iZg6MsmoCPE9k5ereFogBJpzVlTPjJ95izmKEHL7mUldsR4beQ8S3yTeQM%2BiBotTO4E8VDXPEB%2FzcMMH148IGOqUBt7oM5lFAFeyoYnoSoOsOOupBl4cCCz15ioVaSe3GajW39NZgbBHqKGHgOkpG4YnB0vvTl%2F7FfSM71hbT6ks%2BEpt23YeCXrW5%2FmhLXTp2zKH8HQoUU%2FuBgwxFAN4DfPmlAeWczfizebXs9FAqEZVUfRcPkwvkO61FbK8aAT0BG8y5%2FRqFB4s8L6mLrZ179bPnPPvb9Lm3Zfnwxir%2BZngBoVFW%2FMGR&X-Amz-Signature=455183eda3cb9f022995c88cda2209e6ac6a098978dd55d49200f94cd4bb480a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

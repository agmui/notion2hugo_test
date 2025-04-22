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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GFQ7D7I%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHKsTnTWWdn5GbbscJdvfa%2FP8qzq6ohz9cp58VR4pqYvAiEAkFAeHjD66lHHLIk0OhaVJx6K%2FaFIqxbUzr0y2FYmGJgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc11J5Eyb9aATGbIircAyGPhFRa3itjvHSS6ebauA20sHvpgC%2BPT9Occp5zVqDowF%2Bg9sAHr%2FXA%2Bf7gNorIcENKdC6hdHRdLMXm77otTFPYjHgKfh1O3RmfRJyyoBl1EZYvxYedOD6REJCKY%2BLXK%2BSJ84Uc7%2BZ2GKNE6KtHu10M4%2FvyVrRfNKVIsKMcypUPVRNI917DKCdfGEzdlNbF%2B80sZeZ7asPlYQioxsfmQADxYgYRVKG7%2Ft5KqS8lDfo2HwvM5pYFcODu%2BTMtg7hAOCOmJzMtTJogqhPGEj%2BqM21ztT1ENQJLkChdqJfZvxQU7KIU%2FgulNWDA4d0lYcqW4XnMXGT8IJR5uv7C5lFl2M1W41h%2FcK9BSQDV7P9pX20WIS9S4wG46rOFALV%2Fr1rVV%2FBa43yR4H7PVGFlqsAIDw9mtb36V3o0HsmegQzbE5vtF4hG92A5p6cwF0HlairyJSdkoNbtChKp4yJCTb5e5jPWtWrnviD%2F0lWxCtCdCwtKioQ7RiHv%2FmUNehVAlgDI%2FcBE73m%2BybSmCQwyEJXdziMHJAkh%2BPkRcT%2BAkz9qaJ6ZyHOgGPwhtD0p7p%2B%2Fvsc4ouineTXpJZOxxDcubcD5vOSeuLgBrqDv%2Bpg20VKWFM4l0FcCaUUi9Qb1bCQ5MOrfnsAGOqUBRChiij7ptq%2FD65UZVXvgC0pY0p56ekZrKpnXAv%2FoWHyVPj%2F%2BRz5zbhg1aa652Qq2Eze6ShCbdc1UP5vD3AP5dEhAMSKsGNSkimt7Wgp2voGkzXzhC1DN8nI1rMvWh1AnvsLmMIxnYquOAjIefNOIcmTdkQciL2vTsy%2Fe3xpS7FO6UveVlOtx2mBXHruBlIAMwLoygDicMlOJQtXWP7DoHUTslaYr&X-Amz-Signature=81c4213cfbf2a7aa7382f711d492a08fa4ec651e16ba8fb1874077f68678df55&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GFQ7D7I%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHKsTnTWWdn5GbbscJdvfa%2FP8qzq6ohz9cp58VR4pqYvAiEAkFAeHjD66lHHLIk0OhaVJx6K%2FaFIqxbUzr0y2FYmGJgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc11J5Eyb9aATGbIircAyGPhFRa3itjvHSS6ebauA20sHvpgC%2BPT9Occp5zVqDowF%2Bg9sAHr%2FXA%2Bf7gNorIcENKdC6hdHRdLMXm77otTFPYjHgKfh1O3RmfRJyyoBl1EZYvxYedOD6REJCKY%2BLXK%2BSJ84Uc7%2BZ2GKNE6KtHu10M4%2FvyVrRfNKVIsKMcypUPVRNI917DKCdfGEzdlNbF%2B80sZeZ7asPlYQioxsfmQADxYgYRVKG7%2Ft5KqS8lDfo2HwvM5pYFcODu%2BTMtg7hAOCOmJzMtTJogqhPGEj%2BqM21ztT1ENQJLkChdqJfZvxQU7KIU%2FgulNWDA4d0lYcqW4XnMXGT8IJR5uv7C5lFl2M1W41h%2FcK9BSQDV7P9pX20WIS9S4wG46rOFALV%2Fr1rVV%2FBa43yR4H7PVGFlqsAIDw9mtb36V3o0HsmegQzbE5vtF4hG92A5p6cwF0HlairyJSdkoNbtChKp4yJCTb5e5jPWtWrnviD%2F0lWxCtCdCwtKioQ7RiHv%2FmUNehVAlgDI%2FcBE73m%2BybSmCQwyEJXdziMHJAkh%2BPkRcT%2BAkz9qaJ6ZyHOgGPwhtD0p7p%2B%2Fvsc4ouineTXpJZOxxDcubcD5vOSeuLgBrqDv%2Bpg20VKWFM4l0FcCaUUi9Qb1bCQ5MOrfnsAGOqUBRChiij7ptq%2FD65UZVXvgC0pY0p56ekZrKpnXAv%2FoWHyVPj%2F%2BRz5zbhg1aa652Qq2Eze6ShCbdc1UP5vD3AP5dEhAMSKsGNSkimt7Wgp2voGkzXzhC1DN8nI1rMvWh1AnvsLmMIxnYquOAjIefNOIcmTdkQciL2vTsy%2Fe3xpS7FO6UveVlOtx2mBXHruBlIAMwLoygDicMlOJQtXWP7DoHUTslaYr&X-Amz-Signature=645e8b9bd3fa92926fdf120cd011b1550ce685be4671615fc7f1bf3ece0e9ccd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GFQ7D7I%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHKsTnTWWdn5GbbscJdvfa%2FP8qzq6ohz9cp58VR4pqYvAiEAkFAeHjD66lHHLIk0OhaVJx6K%2FaFIqxbUzr0y2FYmGJgqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLc11J5Eyb9aATGbIircAyGPhFRa3itjvHSS6ebauA20sHvpgC%2BPT9Occp5zVqDowF%2Bg9sAHr%2FXA%2Bf7gNorIcENKdC6hdHRdLMXm77otTFPYjHgKfh1O3RmfRJyyoBl1EZYvxYedOD6REJCKY%2BLXK%2BSJ84Uc7%2BZ2GKNE6KtHu10M4%2FvyVrRfNKVIsKMcypUPVRNI917DKCdfGEzdlNbF%2B80sZeZ7asPlYQioxsfmQADxYgYRVKG7%2Ft5KqS8lDfo2HwvM5pYFcODu%2BTMtg7hAOCOmJzMtTJogqhPGEj%2BqM21ztT1ENQJLkChdqJfZvxQU7KIU%2FgulNWDA4d0lYcqW4XnMXGT8IJR5uv7C5lFl2M1W41h%2FcK9BSQDV7P9pX20WIS9S4wG46rOFALV%2Fr1rVV%2FBa43yR4H7PVGFlqsAIDw9mtb36V3o0HsmegQzbE5vtF4hG92A5p6cwF0HlairyJSdkoNbtChKp4yJCTb5e5jPWtWrnviD%2F0lWxCtCdCwtKioQ7RiHv%2FmUNehVAlgDI%2FcBE73m%2BybSmCQwyEJXdziMHJAkh%2BPkRcT%2BAkz9qaJ6ZyHOgGPwhtD0p7p%2B%2Fvsc4ouineTXpJZOxxDcubcD5vOSeuLgBrqDv%2Bpg20VKWFM4l0FcCaUUi9Qb1bCQ5MOrfnsAGOqUBRChiij7ptq%2FD65UZVXvgC0pY0p56ekZrKpnXAv%2FoWHyVPj%2F%2BRz5zbhg1aa652Qq2Eze6ShCbdc1UP5vD3AP5dEhAMSKsGNSkimt7Wgp2voGkzXzhC1DN8nI1rMvWh1AnvsLmMIxnYquOAjIefNOIcmTdkQciL2vTsy%2Fe3xpS7FO6UveVlOtx2mBXHruBlIAMwLoygDicMlOJQtXWP7DoHUTslaYr&X-Amz-Signature=0ee9a0c54a2acf9c20a24b3b10124b4806670160d2392cf96e4dd35a44e9193a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

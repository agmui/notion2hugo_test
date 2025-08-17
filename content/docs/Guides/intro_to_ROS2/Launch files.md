---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3WYKTR%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFU7Yd4EGBRcmKnGey%2BoVmBzeEDfE599o%2B8toZbXVowpAiAVx7uXgBP2uCGZw7UWFW%2F4aCMoV8lC29waWKRclJuRWCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJWPKuSpRojSefBeKtwD6O9J%2BZI5Mi3dBeBF4RYLoK6S1pImZIVnLQ%2FijPzfx7u5G5oHb2i1ThgwPR6uc3Z6v53aMcFVODkow8%2BCctgiubZH72iZ2oByKUwI%2FV8fF4tg%2BRh03Qgqa00IXJkLnrgIZ4I3QEuyq4amwnnjhxQxc8zMQfDmvWph8dMmy8YdWZTOkFp6ZEPF4xss4XnXlWcpOi6szcTc0SO1SD4g9DdltStt1i1Rm4yWfpz4FFVvUAtSfTaYUKuDFrYa8vtC6nkXOzhZgc1le4DZ0Eval120IQ2m4vok%2FB%2FxOuebRx%2Bssuw8qMUb4EwsJNL57ML8OWy3kDzdcQtKFncUvHBytqa55QeIEiTiS7cyR9JDBI%2BSSxCSKJjpapZMDfH4mYKoJZ9dU8o%2FpPEPxd8BZelUFk9gvlOrK%2F4aWKA6MFmjTPdTmWWvMfNyW1xzlqhXFeZoKCmO0oTBgdtMFfQ7AJxv3o1LC2u5cE7c8YC2tm4JqbLJFti0zvOO7j7oVmPMmiT5FXr04LFTQVel%2Fs35%2BVCpEKB2anw%2FGXViU7ieUcsbTt1x7s8OyHEM%2BYFBIPp2SmQtFTjpdLwT0%2BP970bS%2FOI6FyZYwAp1ZD6%2FMJJV1bqkeRTCYl0ed0sZTt00Mq0BcYowmc2ExQY6pgFhD%2Fu8n6FFZ8orUdtdJHMID1zjx9l08LiWoD%2FbOMdP%2Bh%2B0UA%2FYoFomIqwRh9A6y2JhQSDQeOqT1%2BmQ9ND0X46xwZgy1Nvksw4hgzXnZ5Yc82wIRXhhcNpy5qrwGgWrwQBSE7EIQCnaHO28A9Hj2LarcVRrPVFbgceBk5NNR5CwVZxu2vmjolO25czO%2BbNBmmguQLDSjSL2FWoADkZJELsESoY13N9t&X-Amz-Signature=00bba4affe0da3c2ae0ee3b49d800bbc4aad5b6672366e52178faccbe3b007da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3WYKTR%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFU7Yd4EGBRcmKnGey%2BoVmBzeEDfE599o%2B8toZbXVowpAiAVx7uXgBP2uCGZw7UWFW%2F4aCMoV8lC29waWKRclJuRWCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJWPKuSpRojSefBeKtwD6O9J%2BZI5Mi3dBeBF4RYLoK6S1pImZIVnLQ%2FijPzfx7u5G5oHb2i1ThgwPR6uc3Z6v53aMcFVODkow8%2BCctgiubZH72iZ2oByKUwI%2FV8fF4tg%2BRh03Qgqa00IXJkLnrgIZ4I3QEuyq4amwnnjhxQxc8zMQfDmvWph8dMmy8YdWZTOkFp6ZEPF4xss4XnXlWcpOi6szcTc0SO1SD4g9DdltStt1i1Rm4yWfpz4FFVvUAtSfTaYUKuDFrYa8vtC6nkXOzhZgc1le4DZ0Eval120IQ2m4vok%2FB%2FxOuebRx%2Bssuw8qMUb4EwsJNL57ML8OWy3kDzdcQtKFncUvHBytqa55QeIEiTiS7cyR9JDBI%2BSSxCSKJjpapZMDfH4mYKoJZ9dU8o%2FpPEPxd8BZelUFk9gvlOrK%2F4aWKA6MFmjTPdTmWWvMfNyW1xzlqhXFeZoKCmO0oTBgdtMFfQ7AJxv3o1LC2u5cE7c8YC2tm4JqbLJFti0zvOO7j7oVmPMmiT5FXr04LFTQVel%2Fs35%2BVCpEKB2anw%2FGXViU7ieUcsbTt1x7s8OyHEM%2BYFBIPp2SmQtFTjpdLwT0%2BP970bS%2FOI6FyZYwAp1ZD6%2FMJJV1bqkeRTCYl0ed0sZTt00Mq0BcYowmc2ExQY6pgFhD%2Fu8n6FFZ8orUdtdJHMID1zjx9l08LiWoD%2FbOMdP%2Bh%2B0UA%2FYoFomIqwRh9A6y2JhQSDQeOqT1%2BmQ9ND0X46xwZgy1Nvksw4hgzXnZ5Yc82wIRXhhcNpy5qrwGgWrwQBSE7EIQCnaHO28A9Hj2LarcVRrPVFbgceBk5NNR5CwVZxu2vmjolO25czO%2BbNBmmguQLDSjSL2FWoADkZJELsESoY13N9t&X-Amz-Signature=6952327c3ac00a24e056440aa4a66f2f7e3e2ec9eb516ee66f679431a01a6846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZO3WYKTR%2F20250817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250817T014846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIFU7Yd4EGBRcmKnGey%2BoVmBzeEDfE599o%2B8toZbXVowpAiAVx7uXgBP2uCGZw7UWFW%2F4aCMoV8lC29waWKRclJuRWCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOJWPKuSpRojSefBeKtwD6O9J%2BZI5Mi3dBeBF4RYLoK6S1pImZIVnLQ%2FijPzfx7u5G5oHb2i1ThgwPR6uc3Z6v53aMcFVODkow8%2BCctgiubZH72iZ2oByKUwI%2FV8fF4tg%2BRh03Qgqa00IXJkLnrgIZ4I3QEuyq4amwnnjhxQxc8zMQfDmvWph8dMmy8YdWZTOkFp6ZEPF4xss4XnXlWcpOi6szcTc0SO1SD4g9DdltStt1i1Rm4yWfpz4FFVvUAtSfTaYUKuDFrYa8vtC6nkXOzhZgc1le4DZ0Eval120IQ2m4vok%2FB%2FxOuebRx%2Bssuw8qMUb4EwsJNL57ML8OWy3kDzdcQtKFncUvHBytqa55QeIEiTiS7cyR9JDBI%2BSSxCSKJjpapZMDfH4mYKoJZ9dU8o%2FpPEPxd8BZelUFk9gvlOrK%2F4aWKA6MFmjTPdTmWWvMfNyW1xzlqhXFeZoKCmO0oTBgdtMFfQ7AJxv3o1LC2u5cE7c8YC2tm4JqbLJFti0zvOO7j7oVmPMmiT5FXr04LFTQVel%2Fs35%2BVCpEKB2anw%2FGXViU7ieUcsbTt1x7s8OyHEM%2BYFBIPp2SmQtFTjpdLwT0%2BP970bS%2FOI6FyZYwAp1ZD6%2FMJJV1bqkeRTCYl0ed0sZTt00Mq0BcYowmc2ExQY6pgFhD%2Fu8n6FFZ8orUdtdJHMID1zjx9l08LiWoD%2FbOMdP%2Bh%2B0UA%2FYoFomIqwRh9A6y2JhQSDQeOqT1%2BmQ9ND0X46xwZgy1Nvksw4hgzXnZ5Yc82wIRXhhcNpy5qrwGgWrwQBSE7EIQCnaHO28A9Hj2LarcVRrPVFbgceBk5NNR5CwVZxu2vmjolO25czO%2BbNBmmguQLDSjSL2FWoADkZJELsESoY13N9t&X-Amz-Signature=9d1feed6810db476220abb1697f77d1cca530a9eeac65730791e2a9ee237d5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLK4BBJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0y7akjcMb7WjDPVU%2B96Td2Rpll2rFfuMnLWwa%2BK8rxAiAimwUMDUrk202bIS0F%2B%2BxkkBUHlFv6bDdmTq5kbD57Ryr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMUmAw0U%2FlKoC%2BaiOCKtwDXWA%2B0EEOOy3U%2Fh4ngOg77QY8noT%2BQVO1HmMWi%2FeadMI6hZN3paC76JSDRsvs6Pm4owHpVMSMES9SQ%2FwI2KNQ%2B1sXolcIiz5y7d6giBy7nli2OLYKRzVZ2WyMsGtyPF3MSMVLB%2BxGWfRFtSQCwpqEUu5f9VrdvH%2F86KfVMdyTWLyZl8OgIBFmRI%2BWbowtApfHDdyMnfyuxCFwRTM3Kvi3qtE8fLQ97%2Bhx7%2FRNB0ZND11u0Go2H2q9h3eULZS6F%2BR%2FAiwGNJgo1Zt3cfIVRTeD1yLp%2FnDpPWeM%2BWoJt3kJOcUuceZL1ybarW3hQ0o9QShauzAhK1fdmIQBwwXSe23F7VNYmCVkU%2FyuxSig4mSIhHqV8o2hvN4JKLtA3jfvU%2BomGbTt0rZfwObeV8C5NmydB%2BoaMvhJ7zGf0XNM8Mzb%2BocZ9VwyoHj%2FvtItO3o5j5zDxRZ07RjHKQXFmwnRaKDChlyFIDOGpKq3lTwi%2FJu%2BQ5n7ctxuCyCGq18GeLnJ04mfGbCT0FOc%2FCc9%2F3tIxSr2Z3XhL8RiY0wVOwsBpMaG05LIZcYtyOzUWbgQ%2Fu6x4KgEXkdwy3s5lxizRgPKhotwB8nRHYzYASyj8HWk9Enpt9QogQG%2FMEE9PzRN0Bww9JDewQY6pgFPIOS%2BKK%2BQkeeVmGWtxfljA0WEh8hcaJ7tOl3NLEnhBsM626Xu1eWpHJsgOt%2Fi7p5lHAKqDSYaWysP28SvElHx8ldK%2FHesewqleSYiznC1kOFkRVe9z3YW9nWIf%2BzwAF%2FSG3KbOsL5eyWdEej2TXzWwmk076lG%2BggRpl49NbENK8v%2BBXSsG0sQ0gCtQKPzTbJOt09Qnmw5Tnt%2B20QhUKGfIPsVb11f&X-Amz-Signature=b2a472836e2f3e7798df86bbb079cb11b1d5170d9d62aaf1cadb08b785fdd75b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLK4BBJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0y7akjcMb7WjDPVU%2B96Td2Rpll2rFfuMnLWwa%2BK8rxAiAimwUMDUrk202bIS0F%2B%2BxkkBUHlFv6bDdmTq5kbD57Ryr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMUmAw0U%2FlKoC%2BaiOCKtwDXWA%2B0EEOOy3U%2Fh4ngOg77QY8noT%2BQVO1HmMWi%2FeadMI6hZN3paC76JSDRsvs6Pm4owHpVMSMES9SQ%2FwI2KNQ%2B1sXolcIiz5y7d6giBy7nli2OLYKRzVZ2WyMsGtyPF3MSMVLB%2BxGWfRFtSQCwpqEUu5f9VrdvH%2F86KfVMdyTWLyZl8OgIBFmRI%2BWbowtApfHDdyMnfyuxCFwRTM3Kvi3qtE8fLQ97%2Bhx7%2FRNB0ZND11u0Go2H2q9h3eULZS6F%2BR%2FAiwGNJgo1Zt3cfIVRTeD1yLp%2FnDpPWeM%2BWoJt3kJOcUuceZL1ybarW3hQ0o9QShauzAhK1fdmIQBwwXSe23F7VNYmCVkU%2FyuxSig4mSIhHqV8o2hvN4JKLtA3jfvU%2BomGbTt0rZfwObeV8C5NmydB%2BoaMvhJ7zGf0XNM8Mzb%2BocZ9VwyoHj%2FvtItO3o5j5zDxRZ07RjHKQXFmwnRaKDChlyFIDOGpKq3lTwi%2FJu%2BQ5n7ctxuCyCGq18GeLnJ04mfGbCT0FOc%2FCc9%2F3tIxSr2Z3XhL8RiY0wVOwsBpMaG05LIZcYtyOzUWbgQ%2Fu6x4KgEXkdwy3s5lxizRgPKhotwB8nRHYzYASyj8HWk9Enpt9QogQG%2FMEE9PzRN0Bww9JDewQY6pgFPIOS%2BKK%2BQkeeVmGWtxfljA0WEh8hcaJ7tOl3NLEnhBsM626Xu1eWpHJsgOt%2Fi7p5lHAKqDSYaWysP28SvElHx8ldK%2FHesewqleSYiznC1kOFkRVe9z3YW9nWIf%2BzwAF%2FSG3KbOsL5eyWdEej2TXzWwmk076lG%2BggRpl49NbENK8v%2BBXSsG0sQ0gCtQKPzTbJOt09Qnmw5Tnt%2B20QhUKGfIPsVb11f&X-Amz-Signature=93259aa22ed1dd80d409b72c37de7fb6a8059e7e356bffce0f8f283fee63eacc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCLK4BBJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0y7akjcMb7WjDPVU%2B96Td2Rpll2rFfuMnLWwa%2BK8rxAiAimwUMDUrk202bIS0F%2B%2BxkkBUHlFv6bDdmTq5kbD57Ryr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMUmAw0U%2FlKoC%2BaiOCKtwDXWA%2B0EEOOy3U%2Fh4ngOg77QY8noT%2BQVO1HmMWi%2FeadMI6hZN3paC76JSDRsvs6Pm4owHpVMSMES9SQ%2FwI2KNQ%2B1sXolcIiz5y7d6giBy7nli2OLYKRzVZ2WyMsGtyPF3MSMVLB%2BxGWfRFtSQCwpqEUu5f9VrdvH%2F86KfVMdyTWLyZl8OgIBFmRI%2BWbowtApfHDdyMnfyuxCFwRTM3Kvi3qtE8fLQ97%2Bhx7%2FRNB0ZND11u0Go2H2q9h3eULZS6F%2BR%2FAiwGNJgo1Zt3cfIVRTeD1yLp%2FnDpPWeM%2BWoJt3kJOcUuceZL1ybarW3hQ0o9QShauzAhK1fdmIQBwwXSe23F7VNYmCVkU%2FyuxSig4mSIhHqV8o2hvN4JKLtA3jfvU%2BomGbTt0rZfwObeV8C5NmydB%2BoaMvhJ7zGf0XNM8Mzb%2BocZ9VwyoHj%2FvtItO3o5j5zDxRZ07RjHKQXFmwnRaKDChlyFIDOGpKq3lTwi%2FJu%2BQ5n7ctxuCyCGq18GeLnJ04mfGbCT0FOc%2FCc9%2F3tIxSr2Z3XhL8RiY0wVOwsBpMaG05LIZcYtyOzUWbgQ%2Fu6x4KgEXkdwy3s5lxizRgPKhotwB8nRHYzYASyj8HWk9Enpt9QogQG%2FMEE9PzRN0Bww9JDewQY6pgFPIOS%2BKK%2BQkeeVmGWtxfljA0WEh8hcaJ7tOl3NLEnhBsM626Xu1eWpHJsgOt%2Fi7p5lHAKqDSYaWysP28SvElHx8ldK%2FHesewqleSYiznC1kOFkRVe9z3YW9nWIf%2BzwAF%2FSG3KbOsL5eyWdEej2TXzWwmk076lG%2BggRpl49NbENK8v%2BBXSsG0sQ0gCtQKPzTbJOt09Qnmw5Tnt%2B20QhUKGfIPsVb11f&X-Amz-Signature=8a6c7b603940b53b6cf3457685983847580dbd5048427000e00d0d3ddce73088&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

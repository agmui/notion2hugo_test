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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LW2FJI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD%2FjAQ3ui%2BZwV3L%2Fvbnu%2F58WVgRHTJaCTGU3%2Fw8FkN95gIgKdcGTkDEhkNstVuB1ckjagXtTgbpUTFK95jPYL1Cx7cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5jUb2qudWDgF2chCrcA0ekS63CWVbkK%2BtWbgXAtYk1CTo3ZYplzEg2LmPm2Hh3sPxraxQw6VYH%2BsFM5JEjw9qFdK8Ukv0crECa4ymKVu6wXd%2BglPq9HvJNJFSNCGk1eZ2BbHXP3CXltg15ozPkNNdnK9nwiLj%2B2KeYZZDqbfJi5uE%2FbhVPV1nvqL2XL4ajwRJuzxqHjb8dIRrae2j0Xi6DhASl5QY78Bbzkb%2BWx9XtbMql5tR2wRFSPiP4Fxf9vFXg3UyTCqOWzKuhfFOLMUU6dB8prhSsEj7nSHpts%2FDS0j%2FtKr26NXStdQf8LDV%2BqK0FfKWtafWUIUpgkUYrlJvYVCs1sn0Qi%2FyETdM0%2BpU8XJn%2BPpIBSnevh3D4AQpab38B92mfzMsV3V8bv2qRQh11c08dztFJsWxyv4pe0uH%2BvXY6Fg21E0XZffNEePACkFTMeioEpjpSJg%2FYEKKfhxNm9xV2Wm4NP2ga6cm3jB8a5%2Bwv%2B8Ayt%2FYcGgJs50t39ghv%2F19l4xJ7W%2F6tz%2FfqA0H7d1mU9KTSaJrbLNhFihySmA6%2BjMKKXgqg9cHy1abMvnFiM8mvxmCCLocCvGpL%2Bi1Jt0jG58q7ms20%2F028XupnLHjigBab30aSZzNiqcneWUpDq%2F9LeogPL1K%2FMJvK2L8GOqUBszmXkKpa%2B7ZFHb7gCeU29lQtS6lUvHRF4OhgcvF4rcaTluuG7QPuiZCwPXGK%2B21wemZB0NSGYNM9lkpLypZrRe%2FZb0hc2Y1IhfIGFWo8G19ok8LWl6L%2FMUI1DiBbxDRws0okwNRwIqLjWMmCoqWMlZ5ztHskFYD1UQPrkc1%2FPFSWWrW9hXVC6cG%2FD6efhfDHy6DU0srsgy1i%2BcDtixaJmhy1rGy4&X-Amz-Signature=71bcd13b77b72f1b3650f0ec796d466120e8b5e6b0738851eb92ad9ca64b410c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LW2FJI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD%2FjAQ3ui%2BZwV3L%2Fvbnu%2F58WVgRHTJaCTGU3%2Fw8FkN95gIgKdcGTkDEhkNstVuB1ckjagXtTgbpUTFK95jPYL1Cx7cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5jUb2qudWDgF2chCrcA0ekS63CWVbkK%2BtWbgXAtYk1CTo3ZYplzEg2LmPm2Hh3sPxraxQw6VYH%2BsFM5JEjw9qFdK8Ukv0crECa4ymKVu6wXd%2BglPq9HvJNJFSNCGk1eZ2BbHXP3CXltg15ozPkNNdnK9nwiLj%2B2KeYZZDqbfJi5uE%2FbhVPV1nvqL2XL4ajwRJuzxqHjb8dIRrae2j0Xi6DhASl5QY78Bbzkb%2BWx9XtbMql5tR2wRFSPiP4Fxf9vFXg3UyTCqOWzKuhfFOLMUU6dB8prhSsEj7nSHpts%2FDS0j%2FtKr26NXStdQf8LDV%2BqK0FfKWtafWUIUpgkUYrlJvYVCs1sn0Qi%2FyETdM0%2BpU8XJn%2BPpIBSnevh3D4AQpab38B92mfzMsV3V8bv2qRQh11c08dztFJsWxyv4pe0uH%2BvXY6Fg21E0XZffNEePACkFTMeioEpjpSJg%2FYEKKfhxNm9xV2Wm4NP2ga6cm3jB8a5%2Bwv%2B8Ayt%2FYcGgJs50t39ghv%2F19l4xJ7W%2F6tz%2FfqA0H7d1mU9KTSaJrbLNhFihySmA6%2BjMKKXgqg9cHy1abMvnFiM8mvxmCCLocCvGpL%2Bi1Jt0jG58q7ms20%2F028XupnLHjigBab30aSZzNiqcneWUpDq%2F9LeogPL1K%2FMJvK2L8GOqUBszmXkKpa%2B7ZFHb7gCeU29lQtS6lUvHRF4OhgcvF4rcaTluuG7QPuiZCwPXGK%2B21wemZB0NSGYNM9lkpLypZrRe%2FZb0hc2Y1IhfIGFWo8G19ok8LWl6L%2FMUI1DiBbxDRws0okwNRwIqLjWMmCoqWMlZ5ztHskFYD1UQPrkc1%2FPFSWWrW9hXVC6cG%2FD6efhfDHy6DU0srsgy1i%2BcDtixaJmhy1rGy4&X-Amz-Signature=76b5340330f4d648549be411cf21c06ef12b484da2900b840a2db90f3148e8ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2LW2FJI%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQD%2FjAQ3ui%2BZwV3L%2Fvbnu%2F58WVgRHTJaCTGU3%2Fw8FkN95gIgKdcGTkDEhkNstVuB1ckjagXtTgbpUTFK95jPYL1Cx7cqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5jUb2qudWDgF2chCrcA0ekS63CWVbkK%2BtWbgXAtYk1CTo3ZYplzEg2LmPm2Hh3sPxraxQw6VYH%2BsFM5JEjw9qFdK8Ukv0crECa4ymKVu6wXd%2BglPq9HvJNJFSNCGk1eZ2BbHXP3CXltg15ozPkNNdnK9nwiLj%2B2KeYZZDqbfJi5uE%2FbhVPV1nvqL2XL4ajwRJuzxqHjb8dIRrae2j0Xi6DhASl5QY78Bbzkb%2BWx9XtbMql5tR2wRFSPiP4Fxf9vFXg3UyTCqOWzKuhfFOLMUU6dB8prhSsEj7nSHpts%2FDS0j%2FtKr26NXStdQf8LDV%2BqK0FfKWtafWUIUpgkUYrlJvYVCs1sn0Qi%2FyETdM0%2BpU8XJn%2BPpIBSnevh3D4AQpab38B92mfzMsV3V8bv2qRQh11c08dztFJsWxyv4pe0uH%2BvXY6Fg21E0XZffNEePACkFTMeioEpjpSJg%2FYEKKfhxNm9xV2Wm4NP2ga6cm3jB8a5%2Bwv%2B8Ayt%2FYcGgJs50t39ghv%2F19l4xJ7W%2F6tz%2FfqA0H7d1mU9KTSaJrbLNhFihySmA6%2BjMKKXgqg9cHy1abMvnFiM8mvxmCCLocCvGpL%2Bi1Jt0jG58q7ms20%2F028XupnLHjigBab30aSZzNiqcneWUpDq%2F9LeogPL1K%2FMJvK2L8GOqUBszmXkKpa%2B7ZFHb7gCeU29lQtS6lUvHRF4OhgcvF4rcaTluuG7QPuiZCwPXGK%2B21wemZB0NSGYNM9lkpLypZrRe%2FZb0hc2Y1IhfIGFWo8G19ok8LWl6L%2FMUI1DiBbxDRws0okwNRwIqLjWMmCoqWMlZ5ztHskFYD1UQPrkc1%2FPFSWWrW9hXVC6cG%2FD6efhfDHy6DU0srsgy1i%2BcDtixaJmhy1rGy4&X-Amz-Signature=d1a068a921ab046a6f879e82ac14a17d7014926384d47138b5b3f4a132cdb170&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

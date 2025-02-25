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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2JBF5Y%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBS%2Bf8sbWpsSF6ms34CEJpNfO95yErpcixN9xr5duBnpAiBaTbMCofapE5T4xHn5M4sRbVI6%2Fh9q7lXfBQITSzU5zir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7dijWKNJf1O%2FiJn7KtwD6tiYm70%2BHtUPOy9BfBr1ywGVTtFEiOLJzVyFDVO5WnHrQUrNLMXjonSoOMmJMIQeV8LGqZFcI0DemvCsCKA03GntK89Z0zYsKuq3ilSOvIh%2FjTBe87k5K6MtSx%2FjxoHhN3gw7A4qM%2FeM1tClTfCVsvqHskMPqH9HcbJMMUWqfOuQqChH4G%2Bl1Hs0vr6f%2FwpaqW8L0790wo1n2gVkdwRLCwFxPE7kMlrJq1gFxVXctSCEYg3WfjFxFgW%2FJjx2abl%2FbTs332nec7j5MYdFYoNSfttu4MLw0nZTgZ4VNx%2F1Jv40hU7DKz47j8PBUyeqXJIgmoNRuyjgQ7ESWDL%2BxMIYXF0x25fztQHKjN39xHGwyvV%2FFFS6%2F6B6nDzUwnowIvKI8xLWj8CQrO%2F7l%2FTLV6ITy%2Blds9yEjBQTAUHJytyOtH%2F38njI1pPRDcHlk1E1LeBDf%2Br7q%2BNNlliJKWuxj%2FJ3fni1W5hnvruaXq5drLnCTmeyjCIFCX%2Fqxv9Gii6TOSOqZSZ2BUCDieidrYNfKE4OlCLt0qwkr0phI7CzUMtqV2pu%2BXCvRTQumQav5mZy1tip1P%2ByQN%2BojjI%2Ft41jF006he56ZSemBVmseQ7KBWYIxoDikg6NEI4mFk8WJmcw1O73vQY6pgF5jJj1Y5hHVOm9og6p4QVz8WUQ5YjoNmeu3e94KBAbfGS7CxwzYRTc%2FbJ2jeBpeXXbBrUNhxvNxM6dQMGqFkxMN0uuhROivXDhrZBOEqErEH8iPsG%2F8tlOUzOm9wdBVR95LKhcbBFUyDNjxkCAasEkKwW9RswEcctqbXyrAX7VykmcOqLIsuZtySP2xs5iLRL6PG%2BuQRr3aKgPVP5qJ540GbQI%2FTw3&X-Amz-Signature=f6ce1f763196d281306453fc3d7de809eed96ded4a323c91770893f7c72353fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2JBF5Y%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBS%2Bf8sbWpsSF6ms34CEJpNfO95yErpcixN9xr5duBnpAiBaTbMCofapE5T4xHn5M4sRbVI6%2Fh9q7lXfBQITSzU5zir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7dijWKNJf1O%2FiJn7KtwD6tiYm70%2BHtUPOy9BfBr1ywGVTtFEiOLJzVyFDVO5WnHrQUrNLMXjonSoOMmJMIQeV8LGqZFcI0DemvCsCKA03GntK89Z0zYsKuq3ilSOvIh%2FjTBe87k5K6MtSx%2FjxoHhN3gw7A4qM%2FeM1tClTfCVsvqHskMPqH9HcbJMMUWqfOuQqChH4G%2Bl1Hs0vr6f%2FwpaqW8L0790wo1n2gVkdwRLCwFxPE7kMlrJq1gFxVXctSCEYg3WfjFxFgW%2FJjx2abl%2FbTs332nec7j5MYdFYoNSfttu4MLw0nZTgZ4VNx%2F1Jv40hU7DKz47j8PBUyeqXJIgmoNRuyjgQ7ESWDL%2BxMIYXF0x25fztQHKjN39xHGwyvV%2FFFS6%2F6B6nDzUwnowIvKI8xLWj8CQrO%2F7l%2FTLV6ITy%2Blds9yEjBQTAUHJytyOtH%2F38njI1pPRDcHlk1E1LeBDf%2Br7q%2BNNlliJKWuxj%2FJ3fni1W5hnvruaXq5drLnCTmeyjCIFCX%2Fqxv9Gii6TOSOqZSZ2BUCDieidrYNfKE4OlCLt0qwkr0phI7CzUMtqV2pu%2BXCvRTQumQav5mZy1tip1P%2ByQN%2BojjI%2Ft41jF006he56ZSemBVmseQ7KBWYIxoDikg6NEI4mFk8WJmcw1O73vQY6pgF5jJj1Y5hHVOm9og6p4QVz8WUQ5YjoNmeu3e94KBAbfGS7CxwzYRTc%2FbJ2jeBpeXXbBrUNhxvNxM6dQMGqFkxMN0uuhROivXDhrZBOEqErEH8iPsG%2F8tlOUzOm9wdBVR95LKhcbBFUyDNjxkCAasEkKwW9RswEcctqbXyrAX7VykmcOqLIsuZtySP2xs5iLRL6PG%2BuQRr3aKgPVP5qJ540GbQI%2FTw3&X-Amz-Signature=ce058e423438b328849b00e8b391da6b030ff777175e83ee34c5af6d83a176f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2JBF5Y%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T170820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBS%2Bf8sbWpsSF6ms34CEJpNfO95yErpcixN9xr5duBnpAiBaTbMCofapE5T4xHn5M4sRbVI6%2Fh9q7lXfBQITSzU5zir%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7dijWKNJf1O%2FiJn7KtwD6tiYm70%2BHtUPOy9BfBr1ywGVTtFEiOLJzVyFDVO5WnHrQUrNLMXjonSoOMmJMIQeV8LGqZFcI0DemvCsCKA03GntK89Z0zYsKuq3ilSOvIh%2FjTBe87k5K6MtSx%2FjxoHhN3gw7A4qM%2FeM1tClTfCVsvqHskMPqH9HcbJMMUWqfOuQqChH4G%2Bl1Hs0vr6f%2FwpaqW8L0790wo1n2gVkdwRLCwFxPE7kMlrJq1gFxVXctSCEYg3WfjFxFgW%2FJjx2abl%2FbTs332nec7j5MYdFYoNSfttu4MLw0nZTgZ4VNx%2F1Jv40hU7DKz47j8PBUyeqXJIgmoNRuyjgQ7ESWDL%2BxMIYXF0x25fztQHKjN39xHGwyvV%2FFFS6%2F6B6nDzUwnowIvKI8xLWj8CQrO%2F7l%2FTLV6ITy%2Blds9yEjBQTAUHJytyOtH%2F38njI1pPRDcHlk1E1LeBDf%2Br7q%2BNNlliJKWuxj%2FJ3fni1W5hnvruaXq5drLnCTmeyjCIFCX%2Fqxv9Gii6TOSOqZSZ2BUCDieidrYNfKE4OlCLt0qwkr0phI7CzUMtqV2pu%2BXCvRTQumQav5mZy1tip1P%2ByQN%2BojjI%2Ft41jF006he56ZSemBVmseQ7KBWYIxoDikg6NEI4mFk8WJmcw1O73vQY6pgF5jJj1Y5hHVOm9og6p4QVz8WUQ5YjoNmeu3e94KBAbfGS7CxwzYRTc%2FbJ2jeBpeXXbBrUNhxvNxM6dQMGqFkxMN0uuhROivXDhrZBOEqErEH8iPsG%2F8tlOUzOm9wdBVR95LKhcbBFUyDNjxkCAasEkKwW9RswEcctqbXyrAX7VykmcOqLIsuZtySP2xs5iLRL6PG%2BuQRr3aKgPVP5qJ540GbQI%2FTw3&X-Amz-Signature=94809f0dba8ab1a24c56015c51be94285fe7e0b705e13dc0c1f6b0b81ba861df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

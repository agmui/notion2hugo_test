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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECC2YCX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNIhy9NSq907nA8aI1cg9iMocsz%2B6HV%2Fu0K%2BMOh1eW%2FAiBg9GUfUmFG2vULJFclo13RTMWG7SSYwIPWKGtk7J54dCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0SBxz8FN7WNQEFx6KtwDQKr%2BbLOIAe6WB0coq0KcWISlYlNMAMZmP36eJ5SasurrA4Fd0Kc0heX88AZpAbP7rocFN6TvI1xxeR9DR%2BySyjeSZmbO4VHT%2BO6FyDMtpM7iYdYevz%2BfIUlc8%2B07ZFemtXy84XGoDQ2eX0IqjrvcxNhQ1XAn37qYmTFqI9cyHC9fg7XN8j50yaZ5EosmO33vp6uHR5w91s2lV8%2BwQOxqcAwN7Woj8wAAEkT5GkXx7pfL2mnoKg%2BuiTM91OmxzrkwI6Vb3PkoE7w%2BYgSJ%2FO%2Bj3ymp9hABzudtN6jbe1ezLziYH1xUqBO9goc3hYKjMWv3FVzlqgrFNaxD9EtIXz6oGKDF8qhFfI5NTHPf6Pj0797%2BBkwbtjiWIsTWJkLDnSCNOKQsOXi9fwiQsWmcHL2lG13vnhhmwYxazmHYJvi1jstgbMfQQoXx9kKnTQHbi%2Fh49onCOY6iPcWUjXPr%2BUHtap0mX486hsC9W2un0HthuAsJ%2BXoB0KScj7undR2eL5poQTGzfYvJ228KW9Sa8X9lLeA153tO0Ck36xFFo9TjSzyy6cv26hnubMpuyj73os%2FeoNpTSsvHvCmtOtioAVvWDiuhrh9xGGasemNaqgIVSP4D13FxQ99WdkxdtpkwpfLRwgY6pgHldToY%2Bz8ETu05l%2FWcPsWVvePGPBh1i%2BvO0pyYewDCkcDqYfVX6KhuvmXedCq04kkmCuW6W4Xj5VwbfCscB94KNwPsqafdTUQ4r9dPDMER71JCorKX5loPiRaK1F1JQcoPi2GAgGSDvJ%2BX5Atuj5zVgh9ofZ1XuUJV5yU%2Fs9YKa%2FtSpfRsd%2BfLsU0OL3NWs9vxjSO9iCZa75JNQBbIB0z4j3%2BSSsG7&X-Amz-Signature=953bf557673d06ed4d0204d0273354ba29e51c5c27e411442f246a615348c999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECC2YCX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNIhy9NSq907nA8aI1cg9iMocsz%2B6HV%2Fu0K%2BMOh1eW%2FAiBg9GUfUmFG2vULJFclo13RTMWG7SSYwIPWKGtk7J54dCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0SBxz8FN7WNQEFx6KtwDQKr%2BbLOIAe6WB0coq0KcWISlYlNMAMZmP36eJ5SasurrA4Fd0Kc0heX88AZpAbP7rocFN6TvI1xxeR9DR%2BySyjeSZmbO4VHT%2BO6FyDMtpM7iYdYevz%2BfIUlc8%2B07ZFemtXy84XGoDQ2eX0IqjrvcxNhQ1XAn37qYmTFqI9cyHC9fg7XN8j50yaZ5EosmO33vp6uHR5w91s2lV8%2BwQOxqcAwN7Woj8wAAEkT5GkXx7pfL2mnoKg%2BuiTM91OmxzrkwI6Vb3PkoE7w%2BYgSJ%2FO%2Bj3ymp9hABzudtN6jbe1ezLziYH1xUqBO9goc3hYKjMWv3FVzlqgrFNaxD9EtIXz6oGKDF8qhFfI5NTHPf6Pj0797%2BBkwbtjiWIsTWJkLDnSCNOKQsOXi9fwiQsWmcHL2lG13vnhhmwYxazmHYJvi1jstgbMfQQoXx9kKnTQHbi%2Fh49onCOY6iPcWUjXPr%2BUHtap0mX486hsC9W2un0HthuAsJ%2BXoB0KScj7undR2eL5poQTGzfYvJ228KW9Sa8X9lLeA153tO0Ck36xFFo9TjSzyy6cv26hnubMpuyj73os%2FeoNpTSsvHvCmtOtioAVvWDiuhrh9xGGasemNaqgIVSP4D13FxQ99WdkxdtpkwpfLRwgY6pgHldToY%2Bz8ETu05l%2FWcPsWVvePGPBh1i%2BvO0pyYewDCkcDqYfVX6KhuvmXedCq04kkmCuW6W4Xj5VwbfCscB94KNwPsqafdTUQ4r9dPDMER71JCorKX5loPiRaK1F1JQcoPi2GAgGSDvJ%2BX5Atuj5zVgh9ofZ1XuUJV5yU%2Fs9YKa%2FtSpfRsd%2BfLsU0OL3NWs9vxjSO9iCZa75JNQBbIB0z4j3%2BSSsG7&X-Amz-Signature=be2ff72c3fa2361cd7b515bea817e283ff9f5076c4c43da33c6e5dbe41291b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TECC2YCX%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T220828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNIhy9NSq907nA8aI1cg9iMocsz%2B6HV%2Fu0K%2BMOh1eW%2FAiBg9GUfUmFG2vULJFclo13RTMWG7SSYwIPWKGtk7J54dCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0SBxz8FN7WNQEFx6KtwDQKr%2BbLOIAe6WB0coq0KcWISlYlNMAMZmP36eJ5SasurrA4Fd0Kc0heX88AZpAbP7rocFN6TvI1xxeR9DR%2BySyjeSZmbO4VHT%2BO6FyDMtpM7iYdYevz%2BfIUlc8%2B07ZFemtXy84XGoDQ2eX0IqjrvcxNhQ1XAn37qYmTFqI9cyHC9fg7XN8j50yaZ5EosmO33vp6uHR5w91s2lV8%2BwQOxqcAwN7Woj8wAAEkT5GkXx7pfL2mnoKg%2BuiTM91OmxzrkwI6Vb3PkoE7w%2BYgSJ%2FO%2Bj3ymp9hABzudtN6jbe1ezLziYH1xUqBO9goc3hYKjMWv3FVzlqgrFNaxD9EtIXz6oGKDF8qhFfI5NTHPf6Pj0797%2BBkwbtjiWIsTWJkLDnSCNOKQsOXi9fwiQsWmcHL2lG13vnhhmwYxazmHYJvi1jstgbMfQQoXx9kKnTQHbi%2Fh49onCOY6iPcWUjXPr%2BUHtap0mX486hsC9W2un0HthuAsJ%2BXoB0KScj7undR2eL5poQTGzfYvJ228KW9Sa8X9lLeA153tO0Ck36xFFo9TjSzyy6cv26hnubMpuyj73os%2FeoNpTSsvHvCmtOtioAVvWDiuhrh9xGGasemNaqgIVSP4D13FxQ99WdkxdtpkwpfLRwgY6pgHldToY%2Bz8ETu05l%2FWcPsWVvePGPBh1i%2BvO0pyYewDCkcDqYfVX6KhuvmXedCq04kkmCuW6W4Xj5VwbfCscB94KNwPsqafdTUQ4r9dPDMER71JCorKX5loPiRaK1F1JQcoPi2GAgGSDvJ%2BX5Atuj5zVgh9ofZ1XuUJV5yU%2Fs9YKa%2FtSpfRsd%2BfLsU0OL3NWs9vxjSO9iCZa75JNQBbIB0z4j3%2BSSsG7&X-Amz-Signature=3474bf862c9167eb147994bf9670cfe7452f5fae139948e1b820c8461f45db5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VWMQNGF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChsR7YCn4Afmh3ESUdxnyMfOIfGerUEdcxFD9JRUGb6AiB5O25lmeBJZO1WQ6kyBY0B5O5WdjMDVMp4OGVz87vMHSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM6SVNQ0kdwrjEpV6lKtwDMf%2FbcPWoxT7rw%2BpXsFrNyyHhn3i8NGwjqHuejXYzgwotEDNF5lB9Ufmt39pN7YzgzXOwU5qzqHAHwKz0wt3s%2Bekz%2F4wsJSVzzkuKikZKQRAfADbG8tKk3tuxLXAdRmxPgI%2FQi6p1fXehy6wPMHhsjKr8K1jmvwNrRz0bz6DOD5Ak419sGGKrw8imXuenV1Jap00UBM4hv1iWjYT6mvL6JVzg6Hi%2BI5YBLUiFIut8g5siPeJzlT2bdJM5TkyjaaQtjQSDtTmHDEljFlUr8guAaF7G%2BIe%2FYNa27p4t17b05Up1utb3mt2VXq9YlLjZsT9ulqAEPesdS1ujCNRStE2G4t13MLbZh%2Fg%2F5MdHxTEvZM0qF8cg3iqYEK%2BnAUmoqwddQ9JnAeNsO6vobJ%2F0uq6TX10NdZE2S%2F5Vd5XD%2FxG4xEY3YcUDbcGUk9vVVEetRbl1hK6CyhiFkyAh1ZeMQwaWjIAaV4XhFtjjwUfz%2BxSfBZ4AeJ1QUjA%2F9prqZp1dq0pokgWjxxcpcHPFh3E4VM8UO0rxdBop1PcyKYoddOB6a2J96m%2BoOkBj7bfbo7iB7FhAsctCUBKlZu8ESI4YxoMze4UwYH6ffKtT6ScA68hFDeo0k1uE2dbWviv%2B1T4wstDtwAY6pgEXIJpLhu%2FxV8omIQrNzonNrQqfHKHAAtvcdJmFvQIDFocbRiDIwBartOWh1KEBdJDFGBOb74m4514tAbeG0xpHI1SIoF%2FdY%2F3B6mVeDgQvQHYgrxllrfWeFA7CrSviSENvQ7LEP3%2F10NMczWa%2BjgNkhq7tKrfvjyOOXwr7%2BolOuccoJKQoZI8vWvbFVmrJq7ylkVyPbKjDAG6FOCcII7Jm5w0WsFKg&X-Amz-Signature=c479596560f0cf04692cbf4d84f8c83c9a0170672b6a63425f4aadae9fcfc542&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VWMQNGF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChsR7YCn4Afmh3ESUdxnyMfOIfGerUEdcxFD9JRUGb6AiB5O25lmeBJZO1WQ6kyBY0B5O5WdjMDVMp4OGVz87vMHSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM6SVNQ0kdwrjEpV6lKtwDMf%2FbcPWoxT7rw%2BpXsFrNyyHhn3i8NGwjqHuejXYzgwotEDNF5lB9Ufmt39pN7YzgzXOwU5qzqHAHwKz0wt3s%2Bekz%2F4wsJSVzzkuKikZKQRAfADbG8tKk3tuxLXAdRmxPgI%2FQi6p1fXehy6wPMHhsjKr8K1jmvwNrRz0bz6DOD5Ak419sGGKrw8imXuenV1Jap00UBM4hv1iWjYT6mvL6JVzg6Hi%2BI5YBLUiFIut8g5siPeJzlT2bdJM5TkyjaaQtjQSDtTmHDEljFlUr8guAaF7G%2BIe%2FYNa27p4t17b05Up1utb3mt2VXq9YlLjZsT9ulqAEPesdS1ujCNRStE2G4t13MLbZh%2Fg%2F5MdHxTEvZM0qF8cg3iqYEK%2BnAUmoqwddQ9JnAeNsO6vobJ%2F0uq6TX10NdZE2S%2F5Vd5XD%2FxG4xEY3YcUDbcGUk9vVVEetRbl1hK6CyhiFkyAh1ZeMQwaWjIAaV4XhFtjjwUfz%2BxSfBZ4AeJ1QUjA%2F9prqZp1dq0pokgWjxxcpcHPFh3E4VM8UO0rxdBop1PcyKYoddOB6a2J96m%2BoOkBj7bfbo7iB7FhAsctCUBKlZu8ESI4YxoMze4UwYH6ffKtT6ScA68hFDeo0k1uE2dbWviv%2B1T4wstDtwAY6pgEXIJpLhu%2FxV8omIQrNzonNrQqfHKHAAtvcdJmFvQIDFocbRiDIwBartOWh1KEBdJDFGBOb74m4514tAbeG0xpHI1SIoF%2FdY%2F3B6mVeDgQvQHYgrxllrfWeFA7CrSviSENvQ7LEP3%2F10NMczWa%2BjgNkhq7tKrfvjyOOXwr7%2BolOuccoJKQoZI8vWvbFVmrJq7ylkVyPbKjDAG6FOCcII7Jm5w0WsFKg&X-Amz-Signature=4a83810c903c1dfe257440b487ee24c4523419a5a607accf09520c039b212b07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VWMQNGF%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChsR7YCn4Afmh3ESUdxnyMfOIfGerUEdcxFD9JRUGb6AiB5O25lmeBJZO1WQ6kyBY0B5O5WdjMDVMp4OGVz87vMHSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIM6SVNQ0kdwrjEpV6lKtwDMf%2FbcPWoxT7rw%2BpXsFrNyyHhn3i8NGwjqHuejXYzgwotEDNF5lB9Ufmt39pN7YzgzXOwU5qzqHAHwKz0wt3s%2Bekz%2F4wsJSVzzkuKikZKQRAfADbG8tKk3tuxLXAdRmxPgI%2FQi6p1fXehy6wPMHhsjKr8K1jmvwNrRz0bz6DOD5Ak419sGGKrw8imXuenV1Jap00UBM4hv1iWjYT6mvL6JVzg6Hi%2BI5YBLUiFIut8g5siPeJzlT2bdJM5TkyjaaQtjQSDtTmHDEljFlUr8guAaF7G%2BIe%2FYNa27p4t17b05Up1utb3mt2VXq9YlLjZsT9ulqAEPesdS1ujCNRStE2G4t13MLbZh%2Fg%2F5MdHxTEvZM0qF8cg3iqYEK%2BnAUmoqwddQ9JnAeNsO6vobJ%2F0uq6TX10NdZE2S%2F5Vd5XD%2FxG4xEY3YcUDbcGUk9vVVEetRbl1hK6CyhiFkyAh1ZeMQwaWjIAaV4XhFtjjwUfz%2BxSfBZ4AeJ1QUjA%2F9prqZp1dq0pokgWjxxcpcHPFh3E4VM8UO0rxdBop1PcyKYoddOB6a2J96m%2BoOkBj7bfbo7iB7FhAsctCUBKlZu8ESI4YxoMze4UwYH6ffKtT6ScA68hFDeo0k1uE2dbWviv%2B1T4wstDtwAY6pgEXIJpLhu%2FxV8omIQrNzonNrQqfHKHAAtvcdJmFvQIDFocbRiDIwBartOWh1KEBdJDFGBOb74m4514tAbeG0xpHI1SIoF%2FdY%2F3B6mVeDgQvQHYgrxllrfWeFA7CrSviSENvQ7LEP3%2F10NMczWa%2BjgNkhq7tKrfvjyOOXwr7%2BolOuccoJKQoZI8vWvbFVmrJq7ylkVyPbKjDAG6FOCcII7Jm5w0WsFKg&X-Amz-Signature=44dc0c663613b8a68b79921d3d011ce857965cc8f81e52a3d64d47d855d53fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

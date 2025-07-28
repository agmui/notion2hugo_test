---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEPWKYB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCWwqnC%2Fft6SlPVPMzHwCXNOAqNdE5eNop1PgfyWT9h9AIhAP%2FpJHlLj7UXYu6jNhXuMR64clhiiYG8UxoQrLf8CF%2B7KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqLzaa4MxgGW78jz0q3ANvTrK0gb3blFbvC%2BB%2BwF8kE1k2ShsJiW93rzrpO3xoVIXwRPaMDfdvhOP%2BpxS9HhflvINrWTE1Q8nHnOtQflqj6fHby%2FEHGh%2F7kMEjq%2Ftduu9JKq2dHNCtdr9mB6rNOfSflSrM5EZkHrBSftoPQKAFFSknJHs02Nv7qReehi6%2BxR%2BtOxR1NLjYgwzTMMk7VWEADhhDs3eeCBq05fu9lb01BGQqCC8r3555MitHp0JZI%2B3x%2BZdpdWCSVQTkNAhAwY5%2FqskMoaLHV5RhQTFrRLr3M9gFvG0%2Fy24MmWx%2FZ%2BJ6CV4uc2MQs0KgT7eu46%2BbrzIM45oc5I8qtjy7Bml9GTjRpLWWKKsLswcfXImxolVaylC%2FXBRlpYJ3pkh46uyIX%2Bn9T%2BmExpXnNhhnCsWd%2F5MAmixk0aiCazEvp5NO7YQYaoZkDovMYV7vDxffOW05joHkpsK0nBzt%2BpVWUfL4jZs0qYK3pShUqKCeqw5tcSAVpcfSuwEnhVeMjDLquTz9tz0D2WULMoO1GHCEAFdD9A889PBWtO0tGvuZ8M2oQHrf%2BVnMlqzsU1xmkRiYGg5685Rj1taC9WQXPh%2Bie%2B2YJdJsbR4G%2B84%2BnDNolimsw%2BsoSBNxtyTDfbnXdGdNrTD4k5vEBjqkAXv0O4TdO6kvrP7rN11Vml4PtTDdzIngjxlttcePsahL5GdP2QS3zh4v4iDGI4Ohi2bGoeeipjCUxxnTQMLLZ2fKVoYz%2Bsb5tbGeFlTYH2iGS563danfPZzIXX7aISnKOZ2mNzarjeTJRXiLz1QlA67qUyeu5NWaB3ASaJMKPN%2BhSI5q6qCdC%2FPH9h3Y6pcZuxsREKht%2BrQOu9Cw0a4uIG4Kuj2X&X-Amz-Signature=9daa42783f1fefb9ed648d617764f762a5d16e7ef5d9a68243d07af579bcc6c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEPWKYB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCWwqnC%2Fft6SlPVPMzHwCXNOAqNdE5eNop1PgfyWT9h9AIhAP%2FpJHlLj7UXYu6jNhXuMR64clhiiYG8UxoQrLf8CF%2B7KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqLzaa4MxgGW78jz0q3ANvTrK0gb3blFbvC%2BB%2BwF8kE1k2ShsJiW93rzrpO3xoVIXwRPaMDfdvhOP%2BpxS9HhflvINrWTE1Q8nHnOtQflqj6fHby%2FEHGh%2F7kMEjq%2Ftduu9JKq2dHNCtdr9mB6rNOfSflSrM5EZkHrBSftoPQKAFFSknJHs02Nv7qReehi6%2BxR%2BtOxR1NLjYgwzTMMk7VWEADhhDs3eeCBq05fu9lb01BGQqCC8r3555MitHp0JZI%2B3x%2BZdpdWCSVQTkNAhAwY5%2FqskMoaLHV5RhQTFrRLr3M9gFvG0%2Fy24MmWx%2FZ%2BJ6CV4uc2MQs0KgT7eu46%2BbrzIM45oc5I8qtjy7Bml9GTjRpLWWKKsLswcfXImxolVaylC%2FXBRlpYJ3pkh46uyIX%2Bn9T%2BmExpXnNhhnCsWd%2F5MAmixk0aiCazEvp5NO7YQYaoZkDovMYV7vDxffOW05joHkpsK0nBzt%2BpVWUfL4jZs0qYK3pShUqKCeqw5tcSAVpcfSuwEnhVeMjDLquTz9tz0D2WULMoO1GHCEAFdD9A889PBWtO0tGvuZ8M2oQHrf%2BVnMlqzsU1xmkRiYGg5685Rj1taC9WQXPh%2Bie%2B2YJdJsbR4G%2B84%2BnDNolimsw%2BsoSBNxtyTDfbnXdGdNrTD4k5vEBjqkAXv0O4TdO6kvrP7rN11Vml4PtTDdzIngjxlttcePsahL5GdP2QS3zh4v4iDGI4Ohi2bGoeeipjCUxxnTQMLLZ2fKVoYz%2Bsb5tbGeFlTYH2iGS563danfPZzIXX7aISnKOZ2mNzarjeTJRXiLz1QlA67qUyeu5NWaB3ASaJMKPN%2BhSI5q6qCdC%2FPH9h3Y6pcZuxsREKht%2BrQOu9Cw0a4uIG4Kuj2X&X-Amz-Signature=59e2a145c9c4ba979eaa9ff3becfb8d806550793a7044e9d905a06228b4110c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SEPWKYB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T025839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCWwqnC%2Fft6SlPVPMzHwCXNOAqNdE5eNop1PgfyWT9h9AIhAP%2FpJHlLj7UXYu6jNhXuMR64clhiiYG8UxoQrLf8CF%2B7KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqLzaa4MxgGW78jz0q3ANvTrK0gb3blFbvC%2BB%2BwF8kE1k2ShsJiW93rzrpO3xoVIXwRPaMDfdvhOP%2BpxS9HhflvINrWTE1Q8nHnOtQflqj6fHby%2FEHGh%2F7kMEjq%2Ftduu9JKq2dHNCtdr9mB6rNOfSflSrM5EZkHrBSftoPQKAFFSknJHs02Nv7qReehi6%2BxR%2BtOxR1NLjYgwzTMMk7VWEADhhDs3eeCBq05fu9lb01BGQqCC8r3555MitHp0JZI%2B3x%2BZdpdWCSVQTkNAhAwY5%2FqskMoaLHV5RhQTFrRLr3M9gFvG0%2Fy24MmWx%2FZ%2BJ6CV4uc2MQs0KgT7eu46%2BbrzIM45oc5I8qtjy7Bml9GTjRpLWWKKsLswcfXImxolVaylC%2FXBRlpYJ3pkh46uyIX%2Bn9T%2BmExpXnNhhnCsWd%2F5MAmixk0aiCazEvp5NO7YQYaoZkDovMYV7vDxffOW05joHkpsK0nBzt%2BpVWUfL4jZs0qYK3pShUqKCeqw5tcSAVpcfSuwEnhVeMjDLquTz9tz0D2WULMoO1GHCEAFdD9A889PBWtO0tGvuZ8M2oQHrf%2BVnMlqzsU1xmkRiYGg5685Rj1taC9WQXPh%2Bie%2B2YJdJsbR4G%2B84%2BnDNolimsw%2BsoSBNxtyTDfbnXdGdNrTD4k5vEBjqkAXv0O4TdO6kvrP7rN11Vml4PtTDdzIngjxlttcePsahL5GdP2QS3zh4v4iDGI4Ohi2bGoeeipjCUxxnTQMLLZ2fKVoYz%2Bsb5tbGeFlTYH2iGS563danfPZzIXX7aISnKOZ2mNzarjeTJRXiLz1QlA67qUyeu5NWaB3ASaJMKPN%2BhSI5q6qCdC%2FPH9h3Y6pcZuxsREKht%2BrQOu9Cw0a4uIG4Kuj2X&X-Amz-Signature=252383fa7086cb84a561ed527689a485010b5d7d31bbcf13b29006032dcec4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

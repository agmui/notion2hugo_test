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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYSCJOCA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7JL8gv9v%2F4otDGamTWcsKtBAgzVgt%2B29SjsEJX5HVgQIgU4sHCxpPuNNaBj43HuCRzH3cnqGLNesx8Gx9MNBbTMgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfo%2BYfYNWKul5vqFSrcA6ymxn1SDkRoY69%2BTt81mFq%2BKLldMLqYnDJFEpuyDQRFuZ9%2BDNWGjEDcpQS0qFTyAABLhPRAqXGZ5SiK6JmE7WyZbmN2O6zyDZYqmUnmbK1QKptGj%2BC174yvTxZNdo5BMBiRQTfk1Oi1uDZ7rbIT2bDHywxaML4uQBfD9B2XsyN2mINXf3JJMCedepVgTFAhtRFTflG8oJjXg0m8%2F5ec3mNkYH4JtNdojcVgOUjhf0St2FFSB%2FbZVNASXIsD44txhpeKNQI5cnqFP%2FZ4KbHrJWGUK3aXjaXolMYCeihuImFf1rJypjH1x%2F%2BEnkp2H0o3Vgye7oqmvqZV9ti7Pk%2Bcouvd1HshAKnPhQ4Fl1X%2FgOSkBUOPyLZvwoOgZU2fXb7R1ugF8URbnzNSFHhCxD43X1tWcbT8zH3hFZ5GXdckty1ZGAs%2FHjt17Art1SVAf5pL5vLb6fgF6YzMYBY78mxyTxp5zBmzgjq0kUP103p%2F%2FehU5vVfdvf2OaYIKZRvZ36rcsogZszGfKnfK35a7T61FoiNOmZr4UbHZeSqJ5q1DBZepdC4XzNDGKMUev0VNrVNNWrVmzWrObBDStYIQEi2lkMS0kxX56R4MYYOUerAIPlAEUEo51oxSUoLs%2FPSMM%2BY4sQGOqUBkG%2BeIygKSfH4pB8dC8R8yNEe%2BhXu6h9UOLwLWahpF%2ByQvBn6pdTW%2BjrqiR%2FZiGqXX1yl%2FpiYLfH%2BG%2BtNxhNzNsVEUo%2BjxLQKl2PvN35aZHAWIKfEEK9cH4MjEXsWKxu%2FPSgMSI3v3l5HiXCM3hDluN2rMrNKhzXq2558rx%2FXNnXlJblxQSr6ygycWggEyaA1WipduF%2FHH1aehiXg06h8iOLBDlqY&X-Amz-Signature=4b09f29e543d60923bf42f363a58a9d90595ad4caf0e765dd51fea86ea1ae1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYSCJOCA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7JL8gv9v%2F4otDGamTWcsKtBAgzVgt%2B29SjsEJX5HVgQIgU4sHCxpPuNNaBj43HuCRzH3cnqGLNesx8Gx9MNBbTMgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfo%2BYfYNWKul5vqFSrcA6ymxn1SDkRoY69%2BTt81mFq%2BKLldMLqYnDJFEpuyDQRFuZ9%2BDNWGjEDcpQS0qFTyAABLhPRAqXGZ5SiK6JmE7WyZbmN2O6zyDZYqmUnmbK1QKptGj%2BC174yvTxZNdo5BMBiRQTfk1Oi1uDZ7rbIT2bDHywxaML4uQBfD9B2XsyN2mINXf3JJMCedepVgTFAhtRFTflG8oJjXg0m8%2F5ec3mNkYH4JtNdojcVgOUjhf0St2FFSB%2FbZVNASXIsD44txhpeKNQI5cnqFP%2FZ4KbHrJWGUK3aXjaXolMYCeihuImFf1rJypjH1x%2F%2BEnkp2H0o3Vgye7oqmvqZV9ti7Pk%2Bcouvd1HshAKnPhQ4Fl1X%2FgOSkBUOPyLZvwoOgZU2fXb7R1ugF8URbnzNSFHhCxD43X1tWcbT8zH3hFZ5GXdckty1ZGAs%2FHjt17Art1SVAf5pL5vLb6fgF6YzMYBY78mxyTxp5zBmzgjq0kUP103p%2F%2FehU5vVfdvf2OaYIKZRvZ36rcsogZszGfKnfK35a7T61FoiNOmZr4UbHZeSqJ5q1DBZepdC4XzNDGKMUev0VNrVNNWrVmzWrObBDStYIQEi2lkMS0kxX56R4MYYOUerAIPlAEUEo51oxSUoLs%2FPSMM%2BY4sQGOqUBkG%2BeIygKSfH4pB8dC8R8yNEe%2BhXu6h9UOLwLWahpF%2ByQvBn6pdTW%2BjrqiR%2FZiGqXX1yl%2FpiYLfH%2BG%2BtNxhNzNsVEUo%2BjxLQKl2PvN35aZHAWIKfEEK9cH4MjEXsWKxu%2FPSgMSI3v3l5HiXCM3hDluN2rMrNKhzXq2558rx%2FXNnXlJblxQSr6ygycWggEyaA1WipduF%2FHH1aehiXg06h8iOLBDlqY&X-Amz-Signature=130138702c69fd4dc4de144957a03446f585be485054989cc264cfa4ea918c40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYSCJOCA%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T121548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7JL8gv9v%2F4otDGamTWcsKtBAgzVgt%2B29SjsEJX5HVgQIgU4sHCxpPuNNaBj43HuCRzH3cnqGLNesx8Gx9MNBbTMgqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfo%2BYfYNWKul5vqFSrcA6ymxn1SDkRoY69%2BTt81mFq%2BKLldMLqYnDJFEpuyDQRFuZ9%2BDNWGjEDcpQS0qFTyAABLhPRAqXGZ5SiK6JmE7WyZbmN2O6zyDZYqmUnmbK1QKptGj%2BC174yvTxZNdo5BMBiRQTfk1Oi1uDZ7rbIT2bDHywxaML4uQBfD9B2XsyN2mINXf3JJMCedepVgTFAhtRFTflG8oJjXg0m8%2F5ec3mNkYH4JtNdojcVgOUjhf0St2FFSB%2FbZVNASXIsD44txhpeKNQI5cnqFP%2FZ4KbHrJWGUK3aXjaXolMYCeihuImFf1rJypjH1x%2F%2BEnkp2H0o3Vgye7oqmvqZV9ti7Pk%2Bcouvd1HshAKnPhQ4Fl1X%2FgOSkBUOPyLZvwoOgZU2fXb7R1ugF8URbnzNSFHhCxD43X1tWcbT8zH3hFZ5GXdckty1ZGAs%2FHjt17Art1SVAf5pL5vLb6fgF6YzMYBY78mxyTxp5zBmzgjq0kUP103p%2F%2FehU5vVfdvf2OaYIKZRvZ36rcsogZszGfKnfK35a7T61FoiNOmZr4UbHZeSqJ5q1DBZepdC4XzNDGKMUev0VNrVNNWrVmzWrObBDStYIQEi2lkMS0kxX56R4MYYOUerAIPlAEUEo51oxSUoLs%2FPSMM%2BY4sQGOqUBkG%2BeIygKSfH4pB8dC8R8yNEe%2BhXu6h9UOLwLWahpF%2ByQvBn6pdTW%2BjrqiR%2FZiGqXX1yl%2FpiYLfH%2BG%2BtNxhNzNsVEUo%2BjxLQKl2PvN35aZHAWIKfEEK9cH4MjEXsWKxu%2FPSgMSI3v3l5HiXCM3hDluN2rMrNKhzXq2558rx%2FXNnXlJblxQSr6ygycWggEyaA1WipduF%2FHH1aehiXg06h8iOLBDlqY&X-Amz-Signature=948c7e31c04e3215dac6af090610b7f10c1308ba106638567ead2cd97590d6e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

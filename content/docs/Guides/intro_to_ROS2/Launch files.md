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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOBTOUNR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEQZINUFw30UymwyWNciyHDLWhAK4V3V8sSlsslPhuvAiACMBMgqT9RfYClZhpJXFhjnJn8ykTsJY%2BwNk0HM5fqZyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM01%2FyPA7CzrMf1%2FgjKtwDjCOrUvrgODCwiKB7Xifas25QWiPFVAjTkIiH3MvR2BNsKmHqIpGSKaGYyBnEgAEk7DuaG8xDWdWzwP%2F8nvbWhrQS%2BucwyeS6mhxZBSD2exONDLtz2zCCh9wDzJISCvT%2BVyTindHQzJRrQ76E4o5XvihBxcrUHvQjEnt8bElfooWDQRDR99FbVCoWnJNfn5oauGPq1YhrPzNri5xx%2BxepULDjvJsPJ9wey%2FqrQGFq5IT7f7%2F5q1tsjFzC7BVh7ImeIY75W0sgAlzs3YdDe3QjFVJ0Wn%2BX%2BqNNI%2FCGSS73sG%2BtFkaI8daiRTSMA3EvjKCL6TDJBvirifqB0yFzRijRSm2E1cwtmkvSiu%2FLC0JjFjXp4Xu1AdZy0u0PBzNLOtF%2FnRJ5jTGpkZ4NSHuWBb6gnrdnmV9GtTouXSrEcUXzKW2SzVB0EN8OJUF%2FLhFyp2XTFxL6VDMS297nmT79pQhEZhzkxk1VJO2PMWfDTBjr5Q4WauackpFUAnoBbxFLy5BRC8E5y8ntPCCouPhZt%2BpsCwscRJUDDov9hhLTHK1fsiHVPLdUTZh9duDiOTIWw9PtiRTTd%2F2mm8W4EMeZPgQszEre2NA%2FApBCAcW319HPgo4V6iLI6cXuyWRQ0%2BMwm%2FOQvgY6pgEu%2Bcr6B3o1ejqBA%2BwaD4PKhDqICIKy7OHJHMw7clr1QQtfNA58DciSrx8W46aqI87s6nEAR2SZf2Nh6R5VwdLf1i2FsJ1mcsay5xTY3CDRYXSXcsVK92ngnwC4miSmBRZ1w0%2FB%2B0uls2cypkGWlt6UisGqyIA4tpYU5J1Mb3Z29KCEGxDNtbWklqyoGIlFR5VRKvPi%2FllsluR9OdP%2Fo3f9oYXhS6nV&X-Amz-Signature=ceacfcffc1185bd59f5ba10ad6f1a15b783c294c46c9395c92439149d72bff2d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOBTOUNR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEQZINUFw30UymwyWNciyHDLWhAK4V3V8sSlsslPhuvAiACMBMgqT9RfYClZhpJXFhjnJn8ykTsJY%2BwNk0HM5fqZyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM01%2FyPA7CzrMf1%2FgjKtwDjCOrUvrgODCwiKB7Xifas25QWiPFVAjTkIiH3MvR2BNsKmHqIpGSKaGYyBnEgAEk7DuaG8xDWdWzwP%2F8nvbWhrQS%2BucwyeS6mhxZBSD2exONDLtz2zCCh9wDzJISCvT%2BVyTindHQzJRrQ76E4o5XvihBxcrUHvQjEnt8bElfooWDQRDR99FbVCoWnJNfn5oauGPq1YhrPzNri5xx%2BxepULDjvJsPJ9wey%2FqrQGFq5IT7f7%2F5q1tsjFzC7BVh7ImeIY75W0sgAlzs3YdDe3QjFVJ0Wn%2BX%2BqNNI%2FCGSS73sG%2BtFkaI8daiRTSMA3EvjKCL6TDJBvirifqB0yFzRijRSm2E1cwtmkvSiu%2FLC0JjFjXp4Xu1AdZy0u0PBzNLOtF%2FnRJ5jTGpkZ4NSHuWBb6gnrdnmV9GtTouXSrEcUXzKW2SzVB0EN8OJUF%2FLhFyp2XTFxL6VDMS297nmT79pQhEZhzkxk1VJO2PMWfDTBjr5Q4WauackpFUAnoBbxFLy5BRC8E5y8ntPCCouPhZt%2BpsCwscRJUDDov9hhLTHK1fsiHVPLdUTZh9duDiOTIWw9PtiRTTd%2F2mm8W4EMeZPgQszEre2NA%2FApBCAcW319HPgo4V6iLI6cXuyWRQ0%2BMwm%2FOQvgY6pgEu%2Bcr6B3o1ejqBA%2BwaD4PKhDqICIKy7OHJHMw7clr1QQtfNA58DciSrx8W46aqI87s6nEAR2SZf2Nh6R5VwdLf1i2FsJ1mcsay5xTY3CDRYXSXcsVK92ngnwC4miSmBRZ1w0%2FB%2B0uls2cypkGWlt6UisGqyIA4tpYU5J1Mb3Z29KCEGxDNtbWklqyoGIlFR5VRKvPi%2FllsluR9OdP%2Fo3f9oYXhS6nV&X-Amz-Signature=2f23bffdfee4f93badc0b9adffaac4af3d714b4813b62ab0467b1db5debeaf30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOBTOUNR%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEQZINUFw30UymwyWNciyHDLWhAK4V3V8sSlsslPhuvAiACMBMgqT9RfYClZhpJXFhjnJn8ykTsJY%2BwNk0HM5fqZyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM01%2FyPA7CzrMf1%2FgjKtwDjCOrUvrgODCwiKB7Xifas25QWiPFVAjTkIiH3MvR2BNsKmHqIpGSKaGYyBnEgAEk7DuaG8xDWdWzwP%2F8nvbWhrQS%2BucwyeS6mhxZBSD2exONDLtz2zCCh9wDzJISCvT%2BVyTindHQzJRrQ76E4o5XvihBxcrUHvQjEnt8bElfooWDQRDR99FbVCoWnJNfn5oauGPq1YhrPzNri5xx%2BxepULDjvJsPJ9wey%2FqrQGFq5IT7f7%2F5q1tsjFzC7BVh7ImeIY75W0sgAlzs3YdDe3QjFVJ0Wn%2BX%2BqNNI%2FCGSS73sG%2BtFkaI8daiRTSMA3EvjKCL6TDJBvirifqB0yFzRijRSm2E1cwtmkvSiu%2FLC0JjFjXp4Xu1AdZy0u0PBzNLOtF%2FnRJ5jTGpkZ4NSHuWBb6gnrdnmV9GtTouXSrEcUXzKW2SzVB0EN8OJUF%2FLhFyp2XTFxL6VDMS297nmT79pQhEZhzkxk1VJO2PMWfDTBjr5Q4WauackpFUAnoBbxFLy5BRC8E5y8ntPCCouPhZt%2BpsCwscRJUDDov9hhLTHK1fsiHVPLdUTZh9duDiOTIWw9PtiRTTd%2F2mm8W4EMeZPgQszEre2NA%2FApBCAcW319HPgo4V6iLI6cXuyWRQ0%2BMwm%2FOQvgY6pgEu%2Bcr6B3o1ejqBA%2BwaD4PKhDqICIKy7OHJHMw7clr1QQtfNA58DciSrx8W46aqI87s6nEAR2SZf2Nh6R5VwdLf1i2FsJ1mcsay5xTY3CDRYXSXcsVK92ngnwC4miSmBRZ1w0%2FB%2B0uls2cypkGWlt6UisGqyIA4tpYU5J1Mb3Z29KCEGxDNtbWklqyoGIlFR5VRKvPi%2FllsluR9OdP%2Fo3f9oYXhS6nV&X-Amz-Signature=6bc8f03ec0c60634de3d0e56ced295c5ff9581c5c1056bcad26d17c2fdd87434&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

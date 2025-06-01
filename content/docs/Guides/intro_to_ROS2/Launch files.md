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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC4PREXG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIF%2FF7jFBGcZbQ4ZWkYYZk5ClpUBm7GewFhOw1wzB02s%2BAiBnsfPROrIheW%2FN1OiMvdPxxIrY2qhARy4NnwV1wYJEZCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzoFUqvWz%2BU%2FwkfBlKtwD5ammZCpbnm4PRsEM3sTwNNIGrjfHLjJDtN2gIdNg5oblLr3wUQbN1sIIC0VWrNGQNiBbnNGHYtK10K%2ByNZXXbuCip%2FW5urFWClqJOxfTfaM98BZcQRS%2BddF5ZY3lO26Kdlf71Ac41NFcKgHs2psZAjXjUufM00EYbDSNJdMIntVALnlA6indRWg%2FdAoseKeX8%2FUpn4cEJzPkh6oFe6%2F9%2Fq1n3dROpvEAwtB4d8EWUvKEVdYtoMJULFDNfwuKxyl18pEb2eGXSIzP1STOY8KF4gV4cDTD6MQNJslYtTPIJ5Ns%2BvYgSS2X2LBnvI4e03Pl7IkKW7u1HVIRx7bJhdQetCwc9GV6eblfRbdhCnZat93rLRRmDORWpq%2BKm5ejPnYF3Gi8BwNgsrAxAUw%2FT71dJtuD4j%2BE8VhKZqpWlL7f6rDWY61YE82qxd8dYQBAGV3Vme1pXratck9CBR9ne4FEJdRBiyP1DNTmYlI%2FJTHFOzfZJsW%2BTas9ISU3AsMAPTzlx9JA2ylWgc8VgoXrSfAJOtdb2M209%2BjNWUzf5ChW2sDdN3hslqL2bylSmpVnYka%2BNvKfKYoh7NM0Mt%2FFAbxf1sEAU0VAUViszkFKmdNjyavvjWMbIfNeNHXX6rww5b%2FxwQY6pgFKFyKajaGS03yMJys4wgCRpADEDtmdg1EYwsCAYmws4hCZcgUVv1JaXCSlXKOBcVw2DLjmYiKPrvF7sNV%2Fr5N5xKU%2FJ5SSkmzlZ0sEVwjTUVePxQu2AoQfCCZyt%2F2kS%2FPTbXl8ugB25jr3yCfrrKqX66xAtfj%2Fb0QMVwyXyWXT1zwt%2B%2FpWnkpdZTlQXHwVVNhRldfJhxEtlZdOMs%2FyMiLYoMnDP0B8&X-Amz-Signature=b354913714eb1fe7857b7815477a4077ce0f531993779d98e1250363847134c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC4PREXG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIF%2FF7jFBGcZbQ4ZWkYYZk5ClpUBm7GewFhOw1wzB02s%2BAiBnsfPROrIheW%2FN1OiMvdPxxIrY2qhARy4NnwV1wYJEZCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzoFUqvWz%2BU%2FwkfBlKtwD5ammZCpbnm4PRsEM3sTwNNIGrjfHLjJDtN2gIdNg5oblLr3wUQbN1sIIC0VWrNGQNiBbnNGHYtK10K%2ByNZXXbuCip%2FW5urFWClqJOxfTfaM98BZcQRS%2BddF5ZY3lO26Kdlf71Ac41NFcKgHs2psZAjXjUufM00EYbDSNJdMIntVALnlA6indRWg%2FdAoseKeX8%2FUpn4cEJzPkh6oFe6%2F9%2Fq1n3dROpvEAwtB4d8EWUvKEVdYtoMJULFDNfwuKxyl18pEb2eGXSIzP1STOY8KF4gV4cDTD6MQNJslYtTPIJ5Ns%2BvYgSS2X2LBnvI4e03Pl7IkKW7u1HVIRx7bJhdQetCwc9GV6eblfRbdhCnZat93rLRRmDORWpq%2BKm5ejPnYF3Gi8BwNgsrAxAUw%2FT71dJtuD4j%2BE8VhKZqpWlL7f6rDWY61YE82qxd8dYQBAGV3Vme1pXratck9CBR9ne4FEJdRBiyP1DNTmYlI%2FJTHFOzfZJsW%2BTas9ISU3AsMAPTzlx9JA2ylWgc8VgoXrSfAJOtdb2M209%2BjNWUzf5ChW2sDdN3hslqL2bylSmpVnYka%2BNvKfKYoh7NM0Mt%2FFAbxf1sEAU0VAUViszkFKmdNjyavvjWMbIfNeNHXX6rww5b%2FxwQY6pgFKFyKajaGS03yMJys4wgCRpADEDtmdg1EYwsCAYmws4hCZcgUVv1JaXCSlXKOBcVw2DLjmYiKPrvF7sNV%2Fr5N5xKU%2FJ5SSkmzlZ0sEVwjTUVePxQu2AoQfCCZyt%2F2kS%2FPTbXl8ugB25jr3yCfrrKqX66xAtfj%2Fb0QMVwyXyWXT1zwt%2B%2FpWnkpdZTlQXHwVVNhRldfJhxEtlZdOMs%2FyMiLYoMnDP0B8&X-Amz-Signature=01ffeaebd0237555eec93ed74c60501234c7aa8784cda1349d27671325e7f311&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WC4PREXG%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIF%2FF7jFBGcZbQ4ZWkYYZk5ClpUBm7GewFhOw1wzB02s%2BAiBnsfPROrIheW%2FN1OiMvdPxxIrY2qhARy4NnwV1wYJEZCqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzoFUqvWz%2BU%2FwkfBlKtwD5ammZCpbnm4PRsEM3sTwNNIGrjfHLjJDtN2gIdNg5oblLr3wUQbN1sIIC0VWrNGQNiBbnNGHYtK10K%2ByNZXXbuCip%2FW5urFWClqJOxfTfaM98BZcQRS%2BddF5ZY3lO26Kdlf71Ac41NFcKgHs2psZAjXjUufM00EYbDSNJdMIntVALnlA6indRWg%2FdAoseKeX8%2FUpn4cEJzPkh6oFe6%2F9%2Fq1n3dROpvEAwtB4d8EWUvKEVdYtoMJULFDNfwuKxyl18pEb2eGXSIzP1STOY8KF4gV4cDTD6MQNJslYtTPIJ5Ns%2BvYgSS2X2LBnvI4e03Pl7IkKW7u1HVIRx7bJhdQetCwc9GV6eblfRbdhCnZat93rLRRmDORWpq%2BKm5ejPnYF3Gi8BwNgsrAxAUw%2FT71dJtuD4j%2BE8VhKZqpWlL7f6rDWY61YE82qxd8dYQBAGV3Vme1pXratck9CBR9ne4FEJdRBiyP1DNTmYlI%2FJTHFOzfZJsW%2BTas9ISU3AsMAPTzlx9JA2ylWgc8VgoXrSfAJOtdb2M209%2BjNWUzf5ChW2sDdN3hslqL2bylSmpVnYka%2BNvKfKYoh7NM0Mt%2FFAbxf1sEAU0VAUViszkFKmdNjyavvjWMbIfNeNHXX6rww5b%2FxwQY6pgFKFyKajaGS03yMJys4wgCRpADEDtmdg1EYwsCAYmws4hCZcgUVv1JaXCSlXKOBcVw2DLjmYiKPrvF7sNV%2Fr5N5xKU%2FJ5SSkmzlZ0sEVwjTUVePxQu2AoQfCCZyt%2F2kS%2FPTbXl8ugB25jr3yCfrrKqX66xAtfj%2Fb0QMVwyXyWXT1zwt%2B%2FpWnkpdZTlQXHwVVNhRldfJhxEtlZdOMs%2FyMiLYoMnDP0B8&X-Amz-Signature=9f5c04c0d286cbd77b72a3d93ca409dc21d170f9004fe056c16fc18047b02fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

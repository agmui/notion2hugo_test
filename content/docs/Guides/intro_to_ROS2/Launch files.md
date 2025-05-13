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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYZIDIL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEMwQSkVzGADYjmKpF7xG57dF2M%2Fw8TSUiCrWFPxDtk%2FAiEAlxzw7q48qNhj%2BloLDuYeViJ2OOSEhq5FINNxH9Esk%2FgqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1m3AhjYj%2B%2FqYUbZSrcAydXWwvvc9Oqt0sRRB6bsqhHBDF5OJOZQjBIS2DtEo10y9I0JunOIi9SAWCZqRkDKrlaJRimlqs79wavlupBH6a9wlPkBy05AC3hAOwuTJNQP%2BHDd2QoiVJyjEO5zKrShNH4wzzGuTWc%2Fv7OUwFPDjbAIoGKu7ATlOdXDF61wJWf3HXHuGJ0ebNc59u41OkexI8gJCS4Xjt8sgjpnMMrxgmSGaUt8%2F%2BDnkX40UKhOnIC0buGmZXMMu%2FIopkm5q5OzgAa7TIUUfN227%2FoUdHTWc%2FABSbRt1ORS%2B3cxWYNKcdZfZMkRmPQC%2BNIrWb0acYSVhtNeLZkteqc%2B%2BPU2S4GsUNwt0cYX77zqbrKrmf6vsyCBVqKC3W%2BCUSy0UpanFJKdH7%2BFXqGwdb%2FfG3O%2B3nXdmfBg3WyJQCv8BHaQvLuZJRd7JGgl7VTCPIOMtTRGOQmbK6ZEqo5kJPomjUChfLlUmhxdG2A%2F5ZfdGyj1HTW3jSXmFtNxYvyez%2FAHNwQuky6jpGTfMsz%2BouG4EqOLd8KeXpvxLuVhlmA8JQTlbIYwwDYLRSMY530WOArM0UdxIS6u%2F8tQEtXAS4z0Rs3SBwNKCesMyyj5qufXUh2GxsfQA2XCYEBnZnqxlKpF3rNMLj3isEGOqUB8D1EkxU3IHvJNjrSkynvXw9COPJ7qIfuysKUrNuwvHcF5ZWKi9xJnFL6RmqnIY8U8CPRnunChfSKH4jm1kOwhmmPA8QyuFzjtVWMNEUrVkyJtao%2Bvct0RGqz%2Bwc9UvDzuolD7F1FRuxGPhq4M%2Ba35SsMDCppv61jhr5GQM2jS%2F0fbZlu7aGQcg58V%2B%2FwzV6iuFmjs6vo6PWgYZHlAqfBFmRotoG3&X-Amz-Signature=a5bb2bb4d8381defecbea256e462994f0b4885d33b2bc19217b9e887ce167b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYZIDIL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEMwQSkVzGADYjmKpF7xG57dF2M%2Fw8TSUiCrWFPxDtk%2FAiEAlxzw7q48qNhj%2BloLDuYeViJ2OOSEhq5FINNxH9Esk%2FgqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1m3AhjYj%2B%2FqYUbZSrcAydXWwvvc9Oqt0sRRB6bsqhHBDF5OJOZQjBIS2DtEo10y9I0JunOIi9SAWCZqRkDKrlaJRimlqs79wavlupBH6a9wlPkBy05AC3hAOwuTJNQP%2BHDd2QoiVJyjEO5zKrShNH4wzzGuTWc%2Fv7OUwFPDjbAIoGKu7ATlOdXDF61wJWf3HXHuGJ0ebNc59u41OkexI8gJCS4Xjt8sgjpnMMrxgmSGaUt8%2F%2BDnkX40UKhOnIC0buGmZXMMu%2FIopkm5q5OzgAa7TIUUfN227%2FoUdHTWc%2FABSbRt1ORS%2B3cxWYNKcdZfZMkRmPQC%2BNIrWb0acYSVhtNeLZkteqc%2B%2BPU2S4GsUNwt0cYX77zqbrKrmf6vsyCBVqKC3W%2BCUSy0UpanFJKdH7%2BFXqGwdb%2FfG3O%2B3nXdmfBg3WyJQCv8BHaQvLuZJRd7JGgl7VTCPIOMtTRGOQmbK6ZEqo5kJPomjUChfLlUmhxdG2A%2F5ZfdGyj1HTW3jSXmFtNxYvyez%2FAHNwQuky6jpGTfMsz%2BouG4EqOLd8KeXpvxLuVhlmA8JQTlbIYwwDYLRSMY530WOArM0UdxIS6u%2F8tQEtXAS4z0Rs3SBwNKCesMyyj5qufXUh2GxsfQA2XCYEBnZnqxlKpF3rNMLj3isEGOqUB8D1EkxU3IHvJNjrSkynvXw9COPJ7qIfuysKUrNuwvHcF5ZWKi9xJnFL6RmqnIY8U8CPRnunChfSKH4jm1kOwhmmPA8QyuFzjtVWMNEUrVkyJtao%2Bvct0RGqz%2Bwc9UvDzuolD7F1FRuxGPhq4M%2Ba35SsMDCppv61jhr5GQM2jS%2F0fbZlu7aGQcg58V%2B%2FwzV6iuFmjs6vo6PWgYZHlAqfBFmRotoG3&X-Amz-Signature=d3d2a8f9cef5aac09bc7fe0f946279fab0bc39311da5653d69b0a49fbf6ef3a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XYZIDIL%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T041250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIEMwQSkVzGADYjmKpF7xG57dF2M%2Fw8TSUiCrWFPxDtk%2FAiEAlxzw7q48qNhj%2BloLDuYeViJ2OOSEhq5FINNxH9Esk%2FgqiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA1m3AhjYj%2B%2FqYUbZSrcAydXWwvvc9Oqt0sRRB6bsqhHBDF5OJOZQjBIS2DtEo10y9I0JunOIi9SAWCZqRkDKrlaJRimlqs79wavlupBH6a9wlPkBy05AC3hAOwuTJNQP%2BHDd2QoiVJyjEO5zKrShNH4wzzGuTWc%2Fv7OUwFPDjbAIoGKu7ATlOdXDF61wJWf3HXHuGJ0ebNc59u41OkexI8gJCS4Xjt8sgjpnMMrxgmSGaUt8%2F%2BDnkX40UKhOnIC0buGmZXMMu%2FIopkm5q5OzgAa7TIUUfN227%2FoUdHTWc%2FABSbRt1ORS%2B3cxWYNKcdZfZMkRmPQC%2BNIrWb0acYSVhtNeLZkteqc%2B%2BPU2S4GsUNwt0cYX77zqbrKrmf6vsyCBVqKC3W%2BCUSy0UpanFJKdH7%2BFXqGwdb%2FfG3O%2B3nXdmfBg3WyJQCv8BHaQvLuZJRd7JGgl7VTCPIOMtTRGOQmbK6ZEqo5kJPomjUChfLlUmhxdG2A%2F5ZfdGyj1HTW3jSXmFtNxYvyez%2FAHNwQuky6jpGTfMsz%2BouG4EqOLd8KeXpvxLuVhlmA8JQTlbIYwwDYLRSMY530WOArM0UdxIS6u%2F8tQEtXAS4z0Rs3SBwNKCesMyyj5qufXUh2GxsfQA2XCYEBnZnqxlKpF3rNMLj3isEGOqUB8D1EkxU3IHvJNjrSkynvXw9COPJ7qIfuysKUrNuwvHcF5ZWKi9xJnFL6RmqnIY8U8CPRnunChfSKH4jm1kOwhmmPA8QyuFzjtVWMNEUrVkyJtao%2Bvct0RGqz%2Bwc9UvDzuolD7F1FRuxGPhq4M%2Ba35SsMDCppv61jhr5GQM2jS%2F0fbZlu7aGQcg58V%2B%2FwzV6iuFmjs6vo6PWgYZHlAqfBFmRotoG3&X-Amz-Signature=24da91f6df873d755c3f4849cac4dc2390be521c2e02e1d5df45f0eeb915d9fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

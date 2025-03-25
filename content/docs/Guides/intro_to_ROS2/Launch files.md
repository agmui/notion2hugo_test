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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPGLMKR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FWY%2FfhPOPw9c1ZK3fwbBHdTS41aXaGmQpjGQIVE7xJAiAnbns4Z2h%2FXtPCt4tsU8XU6GYJSyUno1gSQhCkxzgPSCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKYoTSgNypKywZQrtKtwDOfm1GbQs6fhhCfiKGdytFQFy%2BvYFC%2B%2BkBwKRdFJ7CK509V4sxz2uKsnqtcHtUH4yi47SuSPpwK4dHDcJMYeVll9HqjWesBQOgvjTRFWDvWRiM4piQzJPoZCKmt777H7xhqqzS0EPIUP15z2jz6PXy2U0fDVMJEqDOHGdsNm6m9FbO8bNM%2FAhnKWL85Kkhrv3%2Fb2mq6QAXCfA9c8o2%2FiaeiWPmZpVRfNkvCJ%2FZIDRbKXonC8Gq4CsTaXS5Mi8CfBYc74fF1ELuSWYTMNwhODa7wwFvTswxXstNKU0XJzfMWRokvUxIcwRZm7Aew3%2FZjJazWfBp5nYww23%2BTFezgmfJ0kQx614eaTiXh9gRvTiCzbYto38ri3NsJFRwRYXyTMJe24PPFHFjM5A0SX9Ahdq4sVFkhIdb6TAtyveNHOcK%2Bu7kwdxl5a%2FgN94PIyCPSBhEmbxp%2BuUi07qudNxdJNuN3FHUXD8Jw%2Bdd5YVbpytDfBC7g%2FYC4ei9ZTtpzkq0qjZm21TsfyKweBMPadq5k%2BzxSkZSG27NreugcSwT%2FLGkGOSi6erOCAI6tLayQJ6Vq%2Fh3ik7K2AfNaadejzoRrBpzWboQJDPRl1uN1k18A9WxlO4dPljCtAaoYLyiZgwmLOIvwY6pgFvkXfcpujvBrJf2r7eRLCw5tkEQoDwAWsTrdDYycw3m6FH0xctz1TjOT23YxC5QHDLYTyiHnD%2F%2BiGhQLMF6qNXpaLTQ94%2FpwIzBSNnqomNkdRoX8IChU3GadBpY8STS3x3SDzb1iUWxgGB%2FRSTGwQjfu0klNms8kPafPZC%2BUG%2B0RKTck7B2EPx6aN0tLQyzwZfe1wZubahXlod9P6W1NHzUBkfZftg&X-Amz-Signature=21f869dfe94d6cfcf62f9c4d12a24376d73fad9e41727b2f66823e93b937a889&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPGLMKR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FWY%2FfhPOPw9c1ZK3fwbBHdTS41aXaGmQpjGQIVE7xJAiAnbns4Z2h%2FXtPCt4tsU8XU6GYJSyUno1gSQhCkxzgPSCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKYoTSgNypKywZQrtKtwDOfm1GbQs6fhhCfiKGdytFQFy%2BvYFC%2B%2BkBwKRdFJ7CK509V4sxz2uKsnqtcHtUH4yi47SuSPpwK4dHDcJMYeVll9HqjWesBQOgvjTRFWDvWRiM4piQzJPoZCKmt777H7xhqqzS0EPIUP15z2jz6PXy2U0fDVMJEqDOHGdsNm6m9FbO8bNM%2FAhnKWL85Kkhrv3%2Fb2mq6QAXCfA9c8o2%2FiaeiWPmZpVRfNkvCJ%2FZIDRbKXonC8Gq4CsTaXS5Mi8CfBYc74fF1ELuSWYTMNwhODa7wwFvTswxXstNKU0XJzfMWRokvUxIcwRZm7Aew3%2FZjJazWfBp5nYww23%2BTFezgmfJ0kQx614eaTiXh9gRvTiCzbYto38ri3NsJFRwRYXyTMJe24PPFHFjM5A0SX9Ahdq4sVFkhIdb6TAtyveNHOcK%2Bu7kwdxl5a%2FgN94PIyCPSBhEmbxp%2BuUi07qudNxdJNuN3FHUXD8Jw%2Bdd5YVbpytDfBC7g%2FYC4ei9ZTtpzkq0qjZm21TsfyKweBMPadq5k%2BzxSkZSG27NreugcSwT%2FLGkGOSi6erOCAI6tLayQJ6Vq%2Fh3ik7K2AfNaadejzoRrBpzWboQJDPRl1uN1k18A9WxlO4dPljCtAaoYLyiZgwmLOIvwY6pgFvkXfcpujvBrJf2r7eRLCw5tkEQoDwAWsTrdDYycw3m6FH0xctz1TjOT23YxC5QHDLYTyiHnD%2F%2BiGhQLMF6qNXpaLTQ94%2FpwIzBSNnqomNkdRoX8IChU3GadBpY8STS3x3SDzb1iUWxgGB%2FRSTGwQjfu0klNms8kPafPZC%2BUG%2B0RKTck7B2EPx6aN0tLQyzwZfe1wZubahXlod9P6W1NHzUBkfZftg&X-Amz-Signature=3e6babe97ad2020e7dbe14b696e2401e1594a8ba00f69214f96d532133ef1eb4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPPGLMKR%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T032409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FWY%2FfhPOPw9c1ZK3fwbBHdTS41aXaGmQpjGQIVE7xJAiAnbns4Z2h%2FXtPCt4tsU8XU6GYJSyUno1gSQhCkxzgPSCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKYoTSgNypKywZQrtKtwDOfm1GbQs6fhhCfiKGdytFQFy%2BvYFC%2B%2BkBwKRdFJ7CK509V4sxz2uKsnqtcHtUH4yi47SuSPpwK4dHDcJMYeVll9HqjWesBQOgvjTRFWDvWRiM4piQzJPoZCKmt777H7xhqqzS0EPIUP15z2jz6PXy2U0fDVMJEqDOHGdsNm6m9FbO8bNM%2FAhnKWL85Kkhrv3%2Fb2mq6QAXCfA9c8o2%2FiaeiWPmZpVRfNkvCJ%2FZIDRbKXonC8Gq4CsTaXS5Mi8CfBYc74fF1ELuSWYTMNwhODa7wwFvTswxXstNKU0XJzfMWRokvUxIcwRZm7Aew3%2FZjJazWfBp5nYww23%2BTFezgmfJ0kQx614eaTiXh9gRvTiCzbYto38ri3NsJFRwRYXyTMJe24PPFHFjM5A0SX9Ahdq4sVFkhIdb6TAtyveNHOcK%2Bu7kwdxl5a%2FgN94PIyCPSBhEmbxp%2BuUi07qudNxdJNuN3FHUXD8Jw%2Bdd5YVbpytDfBC7g%2FYC4ei9ZTtpzkq0qjZm21TsfyKweBMPadq5k%2BzxSkZSG27NreugcSwT%2FLGkGOSi6erOCAI6tLayQJ6Vq%2Fh3ik7K2AfNaadejzoRrBpzWboQJDPRl1uN1k18A9WxlO4dPljCtAaoYLyiZgwmLOIvwY6pgFvkXfcpujvBrJf2r7eRLCw5tkEQoDwAWsTrdDYycw3m6FH0xctz1TjOT23YxC5QHDLYTyiHnD%2F%2BiGhQLMF6qNXpaLTQ94%2FpwIzBSNnqomNkdRoX8IChU3GadBpY8STS3x3SDzb1iUWxgGB%2FRSTGwQjfu0klNms8kPafPZC%2BUG%2B0RKTck7B2EPx6aN0tLQyzwZfe1wZubahXlod9P6W1NHzUBkfZftg&X-Amz-Signature=99d8e345a74fd62d6cef9d31c6e0161ac58108386e247235ef7b4c0c702b48bb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

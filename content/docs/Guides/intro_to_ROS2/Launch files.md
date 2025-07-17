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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZH6PA7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHoSI4FeUvAjTIJguIdk0T9ixIjNLtyTvAaAJ5hYG6ojAiEA0KafjTRH6C%2BkVPH9LwtqiWq8arzrCV0qvcl%2F6awTUGYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLhuuOLdPnI8NbHqUyrcA9M9SPZi%2FdXMsL%2FPVGgHTsWK0a15qLEnKpRK5Gmb0b%2F8KO3mXDcdJ4v2XwZYa5dcG5VT3kcBjuIKgXrU3NIm%2FUs2G7nICcX1YJzske6us0KNQxqxU%2BK4HUTwjuAMSGCGIEFIgypAigR2lsHdnbslEz7i%2F%2BDTDf4qJU%2BwPMHPJLTBqBximxYEheshcmKGfbGnkj5VMGUQ7xKh8a6Im5YwyuAzHjQhp0UcX6cS8oxPh1EOWA0yh0WmlBKYYrS8BnMRX1OV6EVHeony3emvBGYbCO%2FlTzv7nxmptH1RK1F4yf%2BgTcW0%2BfihylIUwV%2BD4E43jU0zLvUn5ZUQrPRqLFqE8FztJMZ7leg3UXXlh5aCe13vZY%2F5Ro7Xpqs%2F9KTrpcfhq8%2FaVAw6X%2BvluyW66xUR1J94SL3qFDH6ameDMOu4p33JT8uKx4NAXLAn9KETcgDDZCV0mwksh4w6NpcyuWnjek%2BDtBsp2koCCTh01MWzVc7GnaJ5u3kTtwkxhBfHaXcN9uDvNWxOI%2BJpe96s9Q4qc3Z5Xrb71LfWwzfCmLpz1Owz%2BBVNfdXm0rx67%2Fv2bTA74jHTR6CMGf7e7SM3NUuXaPUCV8T2%2F6R22nfSJhgw3nCictnjhGxPXpYD7UV6MOyR48MGOqUBdkerXBK3XKBgwjw8pMTRAkFsKllMMgUNs5dJ2%2B%2F%2BftNaFsHJcOVNe59d15EStwU%2F6CSXuiatWlHPtHFnOko7VqLOV%2BdfyUROw5zdwf0KNb%2BF2o2w2bGBaknz0Lh6U%2BQe3dbY1%2FWPK6vgHTpB4A7X0wRPXUgqTP4cqNGlqI5ODZO%2Fus7q6FEVWxtoA%2BJSRK6QHmKxdMEKseApIvVpzCcxF638tRj7&X-Amz-Signature=5d983732cf7eff49fa8f50dbe8b4d0a468484ac5e85cd9a1ad69ed0b7126d66f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZH6PA7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHoSI4FeUvAjTIJguIdk0T9ixIjNLtyTvAaAJ5hYG6ojAiEA0KafjTRH6C%2BkVPH9LwtqiWq8arzrCV0qvcl%2F6awTUGYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLhuuOLdPnI8NbHqUyrcA9M9SPZi%2FdXMsL%2FPVGgHTsWK0a15qLEnKpRK5Gmb0b%2F8KO3mXDcdJ4v2XwZYa5dcG5VT3kcBjuIKgXrU3NIm%2FUs2G7nICcX1YJzske6us0KNQxqxU%2BK4HUTwjuAMSGCGIEFIgypAigR2lsHdnbslEz7i%2F%2BDTDf4qJU%2BwPMHPJLTBqBximxYEheshcmKGfbGnkj5VMGUQ7xKh8a6Im5YwyuAzHjQhp0UcX6cS8oxPh1EOWA0yh0WmlBKYYrS8BnMRX1OV6EVHeony3emvBGYbCO%2FlTzv7nxmptH1RK1F4yf%2BgTcW0%2BfihylIUwV%2BD4E43jU0zLvUn5ZUQrPRqLFqE8FztJMZ7leg3UXXlh5aCe13vZY%2F5Ro7Xpqs%2F9KTrpcfhq8%2FaVAw6X%2BvluyW66xUR1J94SL3qFDH6ameDMOu4p33JT8uKx4NAXLAn9KETcgDDZCV0mwksh4w6NpcyuWnjek%2BDtBsp2koCCTh01MWzVc7GnaJ5u3kTtwkxhBfHaXcN9uDvNWxOI%2BJpe96s9Q4qc3Z5Xrb71LfWwzfCmLpz1Owz%2BBVNfdXm0rx67%2Fv2bTA74jHTR6CMGf7e7SM3NUuXaPUCV8T2%2F6R22nfSJhgw3nCictnjhGxPXpYD7UV6MOyR48MGOqUBdkerXBK3XKBgwjw8pMTRAkFsKllMMgUNs5dJ2%2B%2F%2BftNaFsHJcOVNe59d15EStwU%2F6CSXuiatWlHPtHFnOko7VqLOV%2BdfyUROw5zdwf0KNb%2BF2o2w2bGBaknz0Lh6U%2BQe3dbY1%2FWPK6vgHTpB4A7X0wRPXUgqTP4cqNGlqI5ODZO%2Fus7q6FEVWxtoA%2BJSRK6QHmKxdMEKseApIvVpzCcxF638tRj7&X-Amz-Signature=86510c8ba4d2a6bbe13ff23b4dffff158f9be25fba5273e7a54ac1189be8e746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THZH6PA7%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIHoSI4FeUvAjTIJguIdk0T9ixIjNLtyTvAaAJ5hYG6ojAiEA0KafjTRH6C%2BkVPH9LwtqiWq8arzrCV0qvcl%2F6awTUGYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLhuuOLdPnI8NbHqUyrcA9M9SPZi%2FdXMsL%2FPVGgHTsWK0a15qLEnKpRK5Gmb0b%2F8KO3mXDcdJ4v2XwZYa5dcG5VT3kcBjuIKgXrU3NIm%2FUs2G7nICcX1YJzske6us0KNQxqxU%2BK4HUTwjuAMSGCGIEFIgypAigR2lsHdnbslEz7i%2F%2BDTDf4qJU%2BwPMHPJLTBqBximxYEheshcmKGfbGnkj5VMGUQ7xKh8a6Im5YwyuAzHjQhp0UcX6cS8oxPh1EOWA0yh0WmlBKYYrS8BnMRX1OV6EVHeony3emvBGYbCO%2FlTzv7nxmptH1RK1F4yf%2BgTcW0%2BfihylIUwV%2BD4E43jU0zLvUn5ZUQrPRqLFqE8FztJMZ7leg3UXXlh5aCe13vZY%2F5Ro7Xpqs%2F9KTrpcfhq8%2FaVAw6X%2BvluyW66xUR1J94SL3qFDH6ameDMOu4p33JT8uKx4NAXLAn9KETcgDDZCV0mwksh4w6NpcyuWnjek%2BDtBsp2koCCTh01MWzVc7GnaJ5u3kTtwkxhBfHaXcN9uDvNWxOI%2BJpe96s9Q4qc3Z5Xrb71LfWwzfCmLpz1Owz%2BBVNfdXm0rx67%2Fv2bTA74jHTR6CMGf7e7SM3NUuXaPUCV8T2%2F6R22nfSJhgw3nCictnjhGxPXpYD7UV6MOyR48MGOqUBdkerXBK3XKBgwjw8pMTRAkFsKllMMgUNs5dJ2%2B%2F%2BftNaFsHJcOVNe59d15EStwU%2F6CSXuiatWlHPtHFnOko7VqLOV%2BdfyUROw5zdwf0KNb%2BF2o2w2bGBaknz0Lh6U%2BQe3dbY1%2FWPK6vgHTpB4A7X0wRPXUgqTP4cqNGlqI5ODZO%2Fus7q6FEVWxtoA%2BJSRK6QHmKxdMEKseApIvVpzCcxF638tRj7&X-Amz-Signature=885d1ee1ca2fbb66f541339834175f50a3e7a14b52d90eb68a55ebda05ae56dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

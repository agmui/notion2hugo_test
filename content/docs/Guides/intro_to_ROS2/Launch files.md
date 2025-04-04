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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3EKOLFO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWeuD9xMZ0A1HWzV%2FZFu4bQacLq77pa4x0bAzbXlio5AIgZ4O4vrHkoB882JBxlNlwa32ADWHBFd9ZuiPtzDeXBoUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkSmmenTgIzwNjWISrcA2QiqzSiVLYrHeIRc5FrPfAXZb2DK1jidBeKmoNK%2Ft%2BJbKbUm0YM84d1aFdCSz8ZLLra9Br7ImCh0r5XsOWBa0h7p3j%2Be%2B0NcZ5sMQe2LB%2BiA0%2BQR9Ep5bs7hWyXFsMppriBlJ8Q5K1u%2Fe0MeZ8gEdWz9sI1y%2Bg8pWim2kDv7q0zlQID1jIvsDyBF%2F4g1Ed4D%2BXJxYiC9agDoJxI5ds%2Fe3%2BW4G1gdEuLHfgkLQQDkmI9x5L4rHbla3E23%2BgBqnqneXRG5XAIikvzZoetcxU8xFFODoygmw5wn7VaaPvEV8iKGy%2BpAONmVYwLAzvV%2BUMvTYrh3pP9zftkj1DJBIHMN5xl2X3KAgv7HoIEK%2FIPf0jFbqXIp9QhecwDVdX7%2Fj2QZy6vWwNnxBVYb9u0NgkIw8U9SrIIy1asZoorzqObhQBQLEi5SdJGh4RWXKcBdALY%2BHvD5Gm3uRDtuwcp1hyP3xLLoY2z1hcLyfCpYHyCRwcjEascVYPziAMtNwEfTsxpuUoIHreubWCbXl2%2BegFE4Mtj3OImqOq8RLDaetKG1WTZqwtVTxfYR4N1uVo0AHNevbn3AB7Q6PcvZbHiluGXrnUv%2FriB6Ij2200FUn6WoMqyMrh3Bq3WcChpWNyzMN%2BBvb8GOqUBuKSEuFFIKaU53%2BFK%2Bu%2Fp2nx0ATYGkcilhXdZzRbZOXYjOv14zB2010Xa7yoLEGLiSrMiCF9RsOd%2Be2LtA5XdrMxk3BOhTo9rJ2xs7sbwyRcRcCFjI1ePJbBQPvnfyEakVBbQJCWqqodK9TjYh5TW%2B%2BU1BPozFQ0mK%2BuZ8Nndw%2Fzl4yn6GxWdIx6qqFuShBIqied4T0UjLcV3b1%2Bxf3JQV8FsBc7D&X-Amz-Signature=1c68db4ebdb88a0c90437a8c749e6907899add11bba97a2a757a9fab0efd25e1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3EKOLFO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWeuD9xMZ0A1HWzV%2FZFu4bQacLq77pa4x0bAzbXlio5AIgZ4O4vrHkoB882JBxlNlwa32ADWHBFd9ZuiPtzDeXBoUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkSmmenTgIzwNjWISrcA2QiqzSiVLYrHeIRc5FrPfAXZb2DK1jidBeKmoNK%2Ft%2BJbKbUm0YM84d1aFdCSz8ZLLra9Br7ImCh0r5XsOWBa0h7p3j%2Be%2B0NcZ5sMQe2LB%2BiA0%2BQR9Ep5bs7hWyXFsMppriBlJ8Q5K1u%2Fe0MeZ8gEdWz9sI1y%2Bg8pWim2kDv7q0zlQID1jIvsDyBF%2F4g1Ed4D%2BXJxYiC9agDoJxI5ds%2Fe3%2BW4G1gdEuLHfgkLQQDkmI9x5L4rHbla3E23%2BgBqnqneXRG5XAIikvzZoetcxU8xFFODoygmw5wn7VaaPvEV8iKGy%2BpAONmVYwLAzvV%2BUMvTYrh3pP9zftkj1DJBIHMN5xl2X3KAgv7HoIEK%2FIPf0jFbqXIp9QhecwDVdX7%2Fj2QZy6vWwNnxBVYb9u0NgkIw8U9SrIIy1asZoorzqObhQBQLEi5SdJGh4RWXKcBdALY%2BHvD5Gm3uRDtuwcp1hyP3xLLoY2z1hcLyfCpYHyCRwcjEascVYPziAMtNwEfTsxpuUoIHreubWCbXl2%2BegFE4Mtj3OImqOq8RLDaetKG1WTZqwtVTxfYR4N1uVo0AHNevbn3AB7Q6PcvZbHiluGXrnUv%2FriB6Ij2200FUn6WoMqyMrh3Bq3WcChpWNyzMN%2BBvb8GOqUBuKSEuFFIKaU53%2BFK%2Bu%2Fp2nx0ATYGkcilhXdZzRbZOXYjOv14zB2010Xa7yoLEGLiSrMiCF9RsOd%2Be2LtA5XdrMxk3BOhTo9rJ2xs7sbwyRcRcCFjI1ePJbBQPvnfyEakVBbQJCWqqodK9TjYh5TW%2B%2BU1BPozFQ0mK%2BuZ8Nndw%2Fzl4yn6GxWdIx6qqFuShBIqied4T0UjLcV3b1%2Bxf3JQV8FsBc7D&X-Amz-Signature=8aadfe065110cde3cb04b810d1eda37a1353ea74095548ebdcdea268d63096fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3EKOLFO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T021845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWeuD9xMZ0A1HWzV%2FZFu4bQacLq77pa4x0bAzbXlio5AIgZ4O4vrHkoB882JBxlNlwa32ADWHBFd9ZuiPtzDeXBoUqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkSmmenTgIzwNjWISrcA2QiqzSiVLYrHeIRc5FrPfAXZb2DK1jidBeKmoNK%2Ft%2BJbKbUm0YM84d1aFdCSz8ZLLra9Br7ImCh0r5XsOWBa0h7p3j%2Be%2B0NcZ5sMQe2LB%2BiA0%2BQR9Ep5bs7hWyXFsMppriBlJ8Q5K1u%2Fe0MeZ8gEdWz9sI1y%2Bg8pWim2kDv7q0zlQID1jIvsDyBF%2F4g1Ed4D%2BXJxYiC9agDoJxI5ds%2Fe3%2BW4G1gdEuLHfgkLQQDkmI9x5L4rHbla3E23%2BgBqnqneXRG5XAIikvzZoetcxU8xFFODoygmw5wn7VaaPvEV8iKGy%2BpAONmVYwLAzvV%2BUMvTYrh3pP9zftkj1DJBIHMN5xl2X3KAgv7HoIEK%2FIPf0jFbqXIp9QhecwDVdX7%2Fj2QZy6vWwNnxBVYb9u0NgkIw8U9SrIIy1asZoorzqObhQBQLEi5SdJGh4RWXKcBdALY%2BHvD5Gm3uRDtuwcp1hyP3xLLoY2z1hcLyfCpYHyCRwcjEascVYPziAMtNwEfTsxpuUoIHreubWCbXl2%2BegFE4Mtj3OImqOq8RLDaetKG1WTZqwtVTxfYR4N1uVo0AHNevbn3AB7Q6PcvZbHiluGXrnUv%2FriB6Ij2200FUn6WoMqyMrh3Bq3WcChpWNyzMN%2BBvb8GOqUBuKSEuFFIKaU53%2BFK%2Bu%2Fp2nx0ATYGkcilhXdZzRbZOXYjOv14zB2010Xa7yoLEGLiSrMiCF9RsOd%2Be2LtA5XdrMxk3BOhTo9rJ2xs7sbwyRcRcCFjI1ePJbBQPvnfyEakVBbQJCWqqodK9TjYh5TW%2B%2BU1BPozFQ0mK%2BuZ8Nndw%2Fzl4yn6GxWdIx6qqFuShBIqied4T0UjLcV3b1%2Bxf3JQV8FsBc7D&X-Amz-Signature=47091a7c2eb30c9f3cd139e6fbef623b4097468ae94de75f84cffa4c43329d19&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FW2RBXV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOGe4Gkvl9keV7GhSjAukrhsW7N0dwZKlgbVGiQiLgwAiA%2BCyKbx7b%2Fy4QN%2FIPfzVNgffH1RlfFF3Fs%2Blxb3jTvEyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfurMSEcjGUdGa2LpKtwDeT6WVS4eDptdoT0UDh9PQhXwlDkoyDm5hdoOe7G50v%2FexXpZ9K6BOriUnDcT2OkjEimGj9du5tsL1mNy5blTVJk2sm3wNne7Q7SozDUpv8hvHxcT2Hm260KtGZPsRTD10C5IPwkA3UkVys%2FoFYPLJX9LrAvklJAfb3EQn0IDTRAj78o2Q0Ie8f9L3e1z9NNsOrW7g9GAnJ6DpP%2B2RbiKhWqMlVaF4l7yyJO1N1ZKI64w1VBvvF7EPbLwAw9JbBkI2HczsHHp0%2BAre67MzFFGnibZpjcm8eSyj3w53C6vzf26crBdM4i5yvv7AA%2FW0HJx9lQYnMElwJstckZL%2FWzUrc7e45WvgozQh1zvq2eAdS6GX7tJvbk7oLq50ZGWyqjB%2BwkqtH3qzv2dMeIphML1VPyu%2FTaCHVVIPCB%2Bp%2Bp2eMcsAWZeHu%2B37o94qmqp7vDLUDpeyyZTkNeOKbCcKFhqhAyqli%2BRmXraz%2FkGO9jXNgH9ayJ4gTrCAlmDtcjwhNNBrGB6l26LmARzP9%2F4Ll5jeJ5kV65JvCNKuTg%2BmHSu5q2ohECY3sQOJJ1HIvhQKhgCQuPoSJqlKfe7BEB3ZjmOPGUcFQQ8H9OwUTRcQTfSg6WZcCq0pEkiDhYJP8gwg8iRwwY6pgGeGcLnxn4kL3gQg5bkTuuDio98c%2BdSpYCKKUHb8EteFd%2BW5Kc28S6p9YLdFPbs%2FmZsc9D9Q9uxt%2FvcPix48n9YZX3m4ltIyOHa1a%2FdDczvKfanzT%2FFMQodvkYoX74VbsKUnj5wABHUGSh85q5W7W0W5bv0plKH2817shDD7t51%2B0SJpHg3TJQvBovaskOW9EvwAeLX1KG24mdHwmQIyYiClD2leVCS&X-Amz-Signature=4c107c24fdcfc90338cb167289dba5613a52971b40d5fc4a429f3c2596a9033d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FW2RBXV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOGe4Gkvl9keV7GhSjAukrhsW7N0dwZKlgbVGiQiLgwAiA%2BCyKbx7b%2Fy4QN%2FIPfzVNgffH1RlfFF3Fs%2Blxb3jTvEyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfurMSEcjGUdGa2LpKtwDeT6WVS4eDptdoT0UDh9PQhXwlDkoyDm5hdoOe7G50v%2FexXpZ9K6BOriUnDcT2OkjEimGj9du5tsL1mNy5blTVJk2sm3wNne7Q7SozDUpv8hvHxcT2Hm260KtGZPsRTD10C5IPwkA3UkVys%2FoFYPLJX9LrAvklJAfb3EQn0IDTRAj78o2Q0Ie8f9L3e1z9NNsOrW7g9GAnJ6DpP%2B2RbiKhWqMlVaF4l7yyJO1N1ZKI64w1VBvvF7EPbLwAw9JbBkI2HczsHHp0%2BAre67MzFFGnibZpjcm8eSyj3w53C6vzf26crBdM4i5yvv7AA%2FW0HJx9lQYnMElwJstckZL%2FWzUrc7e45WvgozQh1zvq2eAdS6GX7tJvbk7oLq50ZGWyqjB%2BwkqtH3qzv2dMeIphML1VPyu%2FTaCHVVIPCB%2Bp%2Bp2eMcsAWZeHu%2B37o94qmqp7vDLUDpeyyZTkNeOKbCcKFhqhAyqli%2BRmXraz%2FkGO9jXNgH9ayJ4gTrCAlmDtcjwhNNBrGB6l26LmARzP9%2F4Ll5jeJ5kV65JvCNKuTg%2BmHSu5q2ohECY3sQOJJ1HIvhQKhgCQuPoSJqlKfe7BEB3ZjmOPGUcFQQ8H9OwUTRcQTfSg6WZcCq0pEkiDhYJP8gwg8iRwwY6pgGeGcLnxn4kL3gQg5bkTuuDio98c%2BdSpYCKKUHb8EteFd%2BW5Kc28S6p9YLdFPbs%2FmZsc9D9Q9uxt%2FvcPix48n9YZX3m4ltIyOHa1a%2FdDczvKfanzT%2FFMQodvkYoX74VbsKUnj5wABHUGSh85q5W7W0W5bv0plKH2817shDD7t51%2B0SJpHg3TJQvBovaskOW9EvwAeLX1KG24mdHwmQIyYiClD2leVCS&X-Amz-Signature=48bbb5b83c6cf6b3930e15c5354857c7995a24bec3a21e5911ee560d74e1ffc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FW2RBXV%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOGe4Gkvl9keV7GhSjAukrhsW7N0dwZKlgbVGiQiLgwAiA%2BCyKbx7b%2Fy4QN%2FIPfzVNgffH1RlfFF3Fs%2Blxb3jTvEyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfurMSEcjGUdGa2LpKtwDeT6WVS4eDptdoT0UDh9PQhXwlDkoyDm5hdoOe7G50v%2FexXpZ9K6BOriUnDcT2OkjEimGj9du5tsL1mNy5blTVJk2sm3wNne7Q7SozDUpv8hvHxcT2Hm260KtGZPsRTD10C5IPwkA3UkVys%2FoFYPLJX9LrAvklJAfb3EQn0IDTRAj78o2Q0Ie8f9L3e1z9NNsOrW7g9GAnJ6DpP%2B2RbiKhWqMlVaF4l7yyJO1N1ZKI64w1VBvvF7EPbLwAw9JbBkI2HczsHHp0%2BAre67MzFFGnibZpjcm8eSyj3w53C6vzf26crBdM4i5yvv7AA%2FW0HJx9lQYnMElwJstckZL%2FWzUrc7e45WvgozQh1zvq2eAdS6GX7tJvbk7oLq50ZGWyqjB%2BwkqtH3qzv2dMeIphML1VPyu%2FTaCHVVIPCB%2Bp%2Bp2eMcsAWZeHu%2B37o94qmqp7vDLUDpeyyZTkNeOKbCcKFhqhAyqli%2BRmXraz%2FkGO9jXNgH9ayJ4gTrCAlmDtcjwhNNBrGB6l26LmARzP9%2F4Ll5jeJ5kV65JvCNKuTg%2BmHSu5q2ohECY3sQOJJ1HIvhQKhgCQuPoSJqlKfe7BEB3ZjmOPGUcFQQ8H9OwUTRcQTfSg6WZcCq0pEkiDhYJP8gwg8iRwwY6pgGeGcLnxn4kL3gQg5bkTuuDio98c%2BdSpYCKKUHb8EteFd%2BW5Kc28S6p9YLdFPbs%2FmZsc9D9Q9uxt%2FvcPix48n9YZX3m4ltIyOHa1a%2FdDczvKfanzT%2FFMQodvkYoX74VbsKUnj5wABHUGSh85q5W7W0W5bv0plKH2817shDD7t51%2B0SJpHg3TJQvBovaskOW9EvwAeLX1KG24mdHwmQIyYiClD2leVCS&X-Amz-Signature=2252e25282563f939973a3d15c8eb5d3accfae6f964d62cc7d9637b935ddc7c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

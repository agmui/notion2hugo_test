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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BFBQIRB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDOYkWSwm9%2BqAE1fVSNYKH%2Ft01GKU60dtHgjALzItEovAiAGWqCkkD6c%2B0QqHgb41DD1KdjQQEt%2FwQEl6p%2F%2F1qgjUCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoUp97OFq3t%2FM2k4FKtwDWcl%2BeyUtoXbaZhMZLIgFH1HPgPNC5dYVoaJ71oovwDyTCB2ehLEJGsEXcJ2gBb%2BscvgfP%2F2qSnRnFp%2BCC1PG3MNVHkk8gklOXZ664JwSoTpXHy3PVZHr7JRoXq4jwbooW9NbwAnwPNbrWBkQajoxYVfzC%2Bp4pYW23ZJpaxn4dZyU%2FkspnARr3WwsdsG4oyR%2FObOzc73vuAc0af5p7F20XQcdcgUAXVJLtKSYS%2FopNZV3kvuVfEeyGOAWmzOzGEMV5XHzpUcWWxb4a%2F7ZKsq%2FsZ5qYINyRFJ8FbDDwKSAdD5oZcArYtjLKD7chLqMnrHPBDQPJGBBWB79A8fo6IZVZbC%2BO5NG6IQBa52PAXNZnplYtEGAPNbpjpG12Uwy3qvwMQg5xjjavQMdzTckRS4wElC9b6N%2BCEb8xpFvJxiyWikNCaFMphRbDXzdn4R9m8cIqoTFXQ3Tg9P6AMP1WIx6Vt6SH3eMvcwyMVMlt6jXxrNO5eLXRmlfPIjgB%2FtV8WurDFGEsxz8HUFO9v0LS0WyYdqWnMFttuM80qZCDcJnfrhXiQu8%2BcqF5ER3JoNWmQ3ESamY4utG8VVGTZR%2F1FuYr0QrE1JTH0zj%2BZ0asYe7BbkhlQjWrQJTn6sR3qMwqLKuvwY6pgFv%2B%2FY9LnmFcLuAjtcY%2F6dkfCxgRacaxAjhPi5y6xFSW2GWZKpSnF9Zzi5hW7mDGnXz5y6aSOY4GRO8yh%2FkS%2Bdi7xxnaetj21%2B3huJYH%2F7kPZ99mfPRJNSUVSjIQ6lUm%2FeG6aoi9RkXMOca0Ak7NjKc60nQnKkMByzj623DqyndFbxpFRS%2BPuRuihMaoRYa03PZGazrMcD76xzXYUKMsgMg9YJdzSWX&X-Amz-Signature=88a5e6ddf571fb291c45487c6dcc7fd277c140bbb7178c60115502d859919b51&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BFBQIRB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDOYkWSwm9%2BqAE1fVSNYKH%2Ft01GKU60dtHgjALzItEovAiAGWqCkkD6c%2B0QqHgb41DD1KdjQQEt%2FwQEl6p%2F%2F1qgjUCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoUp97OFq3t%2FM2k4FKtwDWcl%2BeyUtoXbaZhMZLIgFH1HPgPNC5dYVoaJ71oovwDyTCB2ehLEJGsEXcJ2gBb%2BscvgfP%2F2qSnRnFp%2BCC1PG3MNVHkk8gklOXZ664JwSoTpXHy3PVZHr7JRoXq4jwbooW9NbwAnwPNbrWBkQajoxYVfzC%2Bp4pYW23ZJpaxn4dZyU%2FkspnARr3WwsdsG4oyR%2FObOzc73vuAc0af5p7F20XQcdcgUAXVJLtKSYS%2FopNZV3kvuVfEeyGOAWmzOzGEMV5XHzpUcWWxb4a%2F7ZKsq%2FsZ5qYINyRFJ8FbDDwKSAdD5oZcArYtjLKD7chLqMnrHPBDQPJGBBWB79A8fo6IZVZbC%2BO5NG6IQBa52PAXNZnplYtEGAPNbpjpG12Uwy3qvwMQg5xjjavQMdzTckRS4wElC9b6N%2BCEb8xpFvJxiyWikNCaFMphRbDXzdn4R9m8cIqoTFXQ3Tg9P6AMP1WIx6Vt6SH3eMvcwyMVMlt6jXxrNO5eLXRmlfPIjgB%2FtV8WurDFGEsxz8HUFO9v0LS0WyYdqWnMFttuM80qZCDcJnfrhXiQu8%2BcqF5ER3JoNWmQ3ESamY4utG8VVGTZR%2F1FuYr0QrE1JTH0zj%2BZ0asYe7BbkhlQjWrQJTn6sR3qMwqLKuvwY6pgFv%2B%2FY9LnmFcLuAjtcY%2F6dkfCxgRacaxAjhPi5y6xFSW2GWZKpSnF9Zzi5hW7mDGnXz5y6aSOY4GRO8yh%2FkS%2Bdi7xxnaetj21%2B3huJYH%2F7kPZ99mfPRJNSUVSjIQ6lUm%2FeG6aoi9RkXMOca0Ak7NjKc60nQnKkMByzj623DqyndFbxpFRS%2BPuRuihMaoRYa03PZGazrMcD76xzXYUKMsgMg9YJdzSWX&X-Amz-Signature=d2230e1a4bb6965cd2b8e6249c3cd4c2e3a14eebc34fbe6a92d77b2757126060&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BFBQIRB%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T081226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIDOYkWSwm9%2BqAE1fVSNYKH%2Ft01GKU60dtHgjALzItEovAiAGWqCkkD6c%2B0QqHgb41DD1KdjQQEt%2FwQEl6p%2F%2F1qgjUCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoUp97OFq3t%2FM2k4FKtwDWcl%2BeyUtoXbaZhMZLIgFH1HPgPNC5dYVoaJ71oovwDyTCB2ehLEJGsEXcJ2gBb%2BscvgfP%2F2qSnRnFp%2BCC1PG3MNVHkk8gklOXZ664JwSoTpXHy3PVZHr7JRoXq4jwbooW9NbwAnwPNbrWBkQajoxYVfzC%2Bp4pYW23ZJpaxn4dZyU%2FkspnARr3WwsdsG4oyR%2FObOzc73vuAc0af5p7F20XQcdcgUAXVJLtKSYS%2FopNZV3kvuVfEeyGOAWmzOzGEMV5XHzpUcWWxb4a%2F7ZKsq%2FsZ5qYINyRFJ8FbDDwKSAdD5oZcArYtjLKD7chLqMnrHPBDQPJGBBWB79A8fo6IZVZbC%2BO5NG6IQBa52PAXNZnplYtEGAPNbpjpG12Uwy3qvwMQg5xjjavQMdzTckRS4wElC9b6N%2BCEb8xpFvJxiyWikNCaFMphRbDXzdn4R9m8cIqoTFXQ3Tg9P6AMP1WIx6Vt6SH3eMvcwyMVMlt6jXxrNO5eLXRmlfPIjgB%2FtV8WurDFGEsxz8HUFO9v0LS0WyYdqWnMFttuM80qZCDcJnfrhXiQu8%2BcqF5ER3JoNWmQ3ESamY4utG8VVGTZR%2F1FuYr0QrE1JTH0zj%2BZ0asYe7BbkhlQjWrQJTn6sR3qMwqLKuvwY6pgFv%2B%2FY9LnmFcLuAjtcY%2F6dkfCxgRacaxAjhPi5y6xFSW2GWZKpSnF9Zzi5hW7mDGnXz5y6aSOY4GRO8yh%2FkS%2Bdi7xxnaetj21%2B3huJYH%2F7kPZ99mfPRJNSUVSjIQ6lUm%2FeG6aoi9RkXMOca0Ak7NjKc60nQnKkMByzj623DqyndFbxpFRS%2BPuRuihMaoRYa03PZGazrMcD76xzXYUKMsgMg9YJdzSWX&X-Amz-Signature=eaaf9f00f176cac6841688da90f7a59c007fc7f0977663b4ef1fcd9faafe2c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

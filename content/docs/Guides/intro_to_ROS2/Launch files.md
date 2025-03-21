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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FYP4BUG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFuVpsIrAXBer1mB1iQJLw%2FcswF6MPKAS3Pq%2Bq3E3b1bAiBsMsEJVwIhV1TLJ9sMMwjWpcpkxjIUMLwO5riTCrnEQCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM22Dti1JZ1KKU2VXYKtwD4mHgxVLRnYwVs5%2BeiYtdE9P4YzYKvftVqBhKo722gd7tfL98g%2Bu40u%2FaZMzeSQwqlfXUTTATA5V%2BeLfOcVO3t1BOJWhSJaGBu%2FYS6Coo0hPR8zlXFYyMojs73esh2drUL3QrEumVThfpdRkqhtiVRYwbi4R5pTPsduPf4qi6HkbeINpkGsTjAyjqycgRsplqWzGyyhMxnPYJJVcYNoUyfj1Cq7OITrAETU1CApGUI2EGMRvO1OkQVjBER8MWyhMIGiCkeeHvvyJ%2Fzu%2FIiXpsLuIb9AB2fFuf%2B4uBb%2FtztY6YtR2%2FcpwGC4GIqkMAzBbAmLTvxI73tCFU35BCppvzSPtmeUx91f2NIS2ny3szvS%2FTuvO66gzYik9sb%2BjvFo0Je29GnnNoAe%2FufgJqE7uDUdhE8R0%2Bg2MBgcLbeYrSQZ7Xrp7aHf%2FYs6ArvGNFmrtyqazyTHdD3gx1%2F3jk8bl8kIRoKkKHrNLPXsgPyDLag57gr3LOAP5v7RwMe703%2FltH5RHGlKwNf3lBdYhs0Ok53qKLPulKh1WpI8D%2F%2FMyNELj8dMH2ScOXNgr93zZov4UZBfv0zUDaXXFRGBVf8ziFgUxkKZ2sKef4j08upB6WcI2STXmHUpSgjtRtkYUwnafyvgY6pgGacZ40diiMRUC99oxK75NoJuXO0%2B3u0CgEjmFBQoPrwYYlFDRVipjeii4UnRhqZPDCJ7WaniHoGRyL%2FbVUtfGFXqMOPDOZg2SvJwFFiT4sCdk4jHtIh%2B51pIdjOziQGwKMnPtDnE7yFsqCgxaB3n3hJoGhGg0%2BLUnxHjFV5GkwMqbaztYu2LVmIMUfaAeHvEy0BUUH88kD8M8JdoNcbbNke5kbpDi%2F&X-Amz-Signature=94aa2880c444676649f3b75b83492b9f9a82c32d5d13cb05ae446c4db9b9ec75&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FYP4BUG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFuVpsIrAXBer1mB1iQJLw%2FcswF6MPKAS3Pq%2Bq3E3b1bAiBsMsEJVwIhV1TLJ9sMMwjWpcpkxjIUMLwO5riTCrnEQCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM22Dti1JZ1KKU2VXYKtwD4mHgxVLRnYwVs5%2BeiYtdE9P4YzYKvftVqBhKo722gd7tfL98g%2Bu40u%2FaZMzeSQwqlfXUTTATA5V%2BeLfOcVO3t1BOJWhSJaGBu%2FYS6Coo0hPR8zlXFYyMojs73esh2drUL3QrEumVThfpdRkqhtiVRYwbi4R5pTPsduPf4qi6HkbeINpkGsTjAyjqycgRsplqWzGyyhMxnPYJJVcYNoUyfj1Cq7OITrAETU1CApGUI2EGMRvO1OkQVjBER8MWyhMIGiCkeeHvvyJ%2Fzu%2FIiXpsLuIb9AB2fFuf%2B4uBb%2FtztY6YtR2%2FcpwGC4GIqkMAzBbAmLTvxI73tCFU35BCppvzSPtmeUx91f2NIS2ny3szvS%2FTuvO66gzYik9sb%2BjvFo0Je29GnnNoAe%2FufgJqE7uDUdhE8R0%2Bg2MBgcLbeYrSQZ7Xrp7aHf%2FYs6ArvGNFmrtyqazyTHdD3gx1%2F3jk8bl8kIRoKkKHrNLPXsgPyDLag57gr3LOAP5v7RwMe703%2FltH5RHGlKwNf3lBdYhs0Ok53qKLPulKh1WpI8D%2F%2FMyNELj8dMH2ScOXNgr93zZov4UZBfv0zUDaXXFRGBVf8ziFgUxkKZ2sKef4j08upB6WcI2STXmHUpSgjtRtkYUwnafyvgY6pgGacZ40diiMRUC99oxK75NoJuXO0%2B3u0CgEjmFBQoPrwYYlFDRVipjeii4UnRhqZPDCJ7WaniHoGRyL%2FbVUtfGFXqMOPDOZg2SvJwFFiT4sCdk4jHtIh%2B51pIdjOziQGwKMnPtDnE7yFsqCgxaB3n3hJoGhGg0%2BLUnxHjFV5GkwMqbaztYu2LVmIMUfaAeHvEy0BUUH88kD8M8JdoNcbbNke5kbpDi%2F&X-Amz-Signature=436f4e0f648d1b6a9748d0260f212f7a558a73a83ce468bdb4c680d918b465ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FYP4BUG%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T003833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIFuVpsIrAXBer1mB1iQJLw%2FcswF6MPKAS3Pq%2Bq3E3b1bAiBsMsEJVwIhV1TLJ9sMMwjWpcpkxjIUMLwO5riTCrnEQCqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM22Dti1JZ1KKU2VXYKtwD4mHgxVLRnYwVs5%2BeiYtdE9P4YzYKvftVqBhKo722gd7tfL98g%2Bu40u%2FaZMzeSQwqlfXUTTATA5V%2BeLfOcVO3t1BOJWhSJaGBu%2FYS6Coo0hPR8zlXFYyMojs73esh2drUL3QrEumVThfpdRkqhtiVRYwbi4R5pTPsduPf4qi6HkbeINpkGsTjAyjqycgRsplqWzGyyhMxnPYJJVcYNoUyfj1Cq7OITrAETU1CApGUI2EGMRvO1OkQVjBER8MWyhMIGiCkeeHvvyJ%2Fzu%2FIiXpsLuIb9AB2fFuf%2B4uBb%2FtztY6YtR2%2FcpwGC4GIqkMAzBbAmLTvxI73tCFU35BCppvzSPtmeUx91f2NIS2ny3szvS%2FTuvO66gzYik9sb%2BjvFo0Je29GnnNoAe%2FufgJqE7uDUdhE8R0%2Bg2MBgcLbeYrSQZ7Xrp7aHf%2FYs6ArvGNFmrtyqazyTHdD3gx1%2F3jk8bl8kIRoKkKHrNLPXsgPyDLag57gr3LOAP5v7RwMe703%2FltH5RHGlKwNf3lBdYhs0Ok53qKLPulKh1WpI8D%2F%2FMyNELj8dMH2ScOXNgr93zZov4UZBfv0zUDaXXFRGBVf8ziFgUxkKZ2sKef4j08upB6WcI2STXmHUpSgjtRtkYUwnafyvgY6pgGacZ40diiMRUC99oxK75NoJuXO0%2B3u0CgEjmFBQoPrwYYlFDRVipjeii4UnRhqZPDCJ7WaniHoGRyL%2FbVUtfGFXqMOPDOZg2SvJwFFiT4sCdk4jHtIh%2B51pIdjOziQGwKMnPtDnE7yFsqCgxaB3n3hJoGhGg0%2BLUnxHjFV5GkwMqbaztYu2LVmIMUfaAeHvEy0BUUH88kD8M8JdoNcbbNke5kbpDi%2F&X-Amz-Signature=a81db7ad54660ab578c881eb722f251ccd505df00fa38890f9584ea741a6be90&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

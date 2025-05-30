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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYBQKTFA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2B6M0HuKHyv5YL6g0QJ3ttDTgRTTRNz4lH2g3AgoF9gIgfmPl6zg6jHhH96D%2BgAuhB3HCGSGtkojYmyL7Z5cKXLkqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5RkJJaJDpgT387sircA5j%2F900w7wDRszIWvHwSunl8HoABYId04IJCDegoBZzEsy24FsSqRADoJDTVuIQ6NVJgln9YWCwTSHxqZ6sc2gZlc625HPFAoK%2BVsGJG3hgkstPavacaNOaHG0VJw48sMq9iP3I%2FTMv5TJI6BOVaM0piik8mlfKxMarbVoAY%2BqPsotyc3AJrujZdlnCgY9RlAq%2FNv%2BYgjjHvojWPi9cnlSsC4K2eDL%2BIao5Egcldi38BRv13PbqrWadBOVpnG9xhMpL8al3Tic%2BoKForkT9S27e5NlvteR4rnBI6Wq3SYrCTRbM1M5a37L7vSbQHdrCG54TSlTkDGcCwF1B0uOi4xHdo6Qzaa%2B5XHeEB8jdStUp7E59INFq6LXg9f3Tuv%2F6CkOt6XmoyChfhdE%2BOqop7R1ix6KG81iSMSlRO%2FggjJmz3044idFAJLSfKnqCz4YyoSwFhAQlbrEv%2FeV2%2BBwy87odanvnRWC8oJ00H%2FC57E9mbiUIX3Huj1shpqVk4FPQ7Oh%2F7hCQe84uchlBOmmxy%2F1e5AVN9fVgwZtzy6l2%2FPNMHPN%2BWM0kglH8v2recBIeRYFY2hYTJuls4WnIlE%2BRpSWWvQr4IYAgl25SbxoyS36JDBnR7F0flne%2BJfpVfML%2FL6MEGOqUB6vECHQSY7P0gy8q8A6kGNZys7ouXkAagb7vHpyK%2FhuG9ZJXuFbwq6d8heZPURHgC10sonnu1D3IpMMrz%2B8zaY9%2B0HAkFvigpclWgjfhRjnWRyoGoLYmF74kMicNQn4mQn1leko5jYhV0V2te431cCFtMkSXPxPjpfrLbXxXQ9KslpVksuchmmJJXXZXi%2FSbYpfng6rAUJutuqH6frMLdJywpP1%2BQ&X-Amz-Signature=7d292261a0c685399847f7a786d4ea3bc9d5f471980a6186eb473dbf405735eb&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYBQKTFA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2B6M0HuKHyv5YL6g0QJ3ttDTgRTTRNz4lH2g3AgoF9gIgfmPl6zg6jHhH96D%2BgAuhB3HCGSGtkojYmyL7Z5cKXLkqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5RkJJaJDpgT387sircA5j%2F900w7wDRszIWvHwSunl8HoABYId04IJCDegoBZzEsy24FsSqRADoJDTVuIQ6NVJgln9YWCwTSHxqZ6sc2gZlc625HPFAoK%2BVsGJG3hgkstPavacaNOaHG0VJw48sMq9iP3I%2FTMv5TJI6BOVaM0piik8mlfKxMarbVoAY%2BqPsotyc3AJrujZdlnCgY9RlAq%2FNv%2BYgjjHvojWPi9cnlSsC4K2eDL%2BIao5Egcldi38BRv13PbqrWadBOVpnG9xhMpL8al3Tic%2BoKForkT9S27e5NlvteR4rnBI6Wq3SYrCTRbM1M5a37L7vSbQHdrCG54TSlTkDGcCwF1B0uOi4xHdo6Qzaa%2B5XHeEB8jdStUp7E59INFq6LXg9f3Tuv%2F6CkOt6XmoyChfhdE%2BOqop7R1ix6KG81iSMSlRO%2FggjJmz3044idFAJLSfKnqCz4YyoSwFhAQlbrEv%2FeV2%2BBwy87odanvnRWC8oJ00H%2FC57E9mbiUIX3Huj1shpqVk4FPQ7Oh%2F7hCQe84uchlBOmmxy%2F1e5AVN9fVgwZtzy6l2%2FPNMHPN%2BWM0kglH8v2recBIeRYFY2hYTJuls4WnIlE%2BRpSWWvQr4IYAgl25SbxoyS36JDBnR7F0flne%2BJfpVfML%2FL6MEGOqUB6vECHQSY7P0gy8q8A6kGNZys7ouXkAagb7vHpyK%2FhuG9ZJXuFbwq6d8heZPURHgC10sonnu1D3IpMMrz%2B8zaY9%2B0HAkFvigpclWgjfhRjnWRyoGoLYmF74kMicNQn4mQn1leko5jYhV0V2te431cCFtMkSXPxPjpfrLbXxXQ9KslpVksuchmmJJXXZXi%2FSbYpfng6rAUJutuqH6frMLdJywpP1%2BQ&X-Amz-Signature=2b4a0eb1ff6f7a431254dc1ea9a1bf83ac7a0f8b32ca5b1aacf7e0b2c61b73fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYBQKTFA%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk%2B6M0HuKHyv5YL6g0QJ3ttDTgRTTRNz4lH2g3AgoF9gIgfmPl6zg6jHhH96D%2BgAuhB3HCGSGtkojYmyL7Z5cKXLkqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG5RkJJaJDpgT387sircA5j%2F900w7wDRszIWvHwSunl8HoABYId04IJCDegoBZzEsy24FsSqRADoJDTVuIQ6NVJgln9YWCwTSHxqZ6sc2gZlc625HPFAoK%2BVsGJG3hgkstPavacaNOaHG0VJw48sMq9iP3I%2FTMv5TJI6BOVaM0piik8mlfKxMarbVoAY%2BqPsotyc3AJrujZdlnCgY9RlAq%2FNv%2BYgjjHvojWPi9cnlSsC4K2eDL%2BIao5Egcldi38BRv13PbqrWadBOVpnG9xhMpL8al3Tic%2BoKForkT9S27e5NlvteR4rnBI6Wq3SYrCTRbM1M5a37L7vSbQHdrCG54TSlTkDGcCwF1B0uOi4xHdo6Qzaa%2B5XHeEB8jdStUp7E59INFq6LXg9f3Tuv%2F6CkOt6XmoyChfhdE%2BOqop7R1ix6KG81iSMSlRO%2FggjJmz3044idFAJLSfKnqCz4YyoSwFhAQlbrEv%2FeV2%2BBwy87odanvnRWC8oJ00H%2FC57E9mbiUIX3Huj1shpqVk4FPQ7Oh%2F7hCQe84uchlBOmmxy%2F1e5AVN9fVgwZtzy6l2%2FPNMHPN%2BWM0kglH8v2recBIeRYFY2hYTJuls4WnIlE%2BRpSWWvQr4IYAgl25SbxoyS36JDBnR7F0flne%2BJfpVfML%2FL6MEGOqUB6vECHQSY7P0gy8q8A6kGNZys7ouXkAagb7vHpyK%2FhuG9ZJXuFbwq6d8heZPURHgC10sonnu1D3IpMMrz%2B8zaY9%2B0HAkFvigpclWgjfhRjnWRyoGoLYmF74kMicNQn4mQn1leko5jYhV0V2te431cCFtMkSXPxPjpfrLbXxXQ9KslpVksuchmmJJXXZXi%2FSbYpfng6rAUJutuqH6frMLdJywpP1%2BQ&X-Amz-Signature=09a22000f3afc0a614d7f66bbbae66e3e65c66a0df61954ef133d74cf6f26cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

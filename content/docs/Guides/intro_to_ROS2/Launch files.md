---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSFFZY7G%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIFj7N9Rmdv3adtPRJGo3xDQbsVgqAJH0u7y8Em%2BrTrTbAiBzCa6xCJPBGarnZXlUmj%2BfzcUR4FOkFZRrUC82V%2Bo6eir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMX9Ahce6Pnw220RzDKtwD8Cw9fQHYunhP9JwN9XJeekitcZW98kW1ejtF8M%2BneGpGdhr7OShw%2BiEfbHbABQIbDe3V1sLhaOPoMpozMAEQiCh9exkyyvrNgBocWX%2BiCqIktb%2FytkRxJwcbvAqKBoGCepfMU6naJ8PDS9%2BD9SOSc9fb8TVQBMngxyPKsmSiKQ9K3OYxWjUXlhFD47h0X51W1riv16dttXdDtyY9W0uHOaHsvXv70X8APcvyO1lOJqds1gBiAxzkMj08g6yo7nzydvsEBefHiDOQZ6UeU3xlpcHIwIXPoXRmbeL9m%2FPDe%2FOdQLSIOjBk0anDmZmDjoO4Ljrn2UnbhLQJ%2BXsTFyLN2SjQdfbjckjVKphCVX%2FHTvZ8nnTsCmGqh%2F6IYb8xwGvHVU5GfVo8wdF%2FlTf%2FXlZ4dkKH8jkKaxsDSGNxjcMjarVvl1FL1Tzni2Cn3dNWkG%2FvF0NU5PRBOuTO68YKkZkVdOEBFDYEScaArwNKmWRr69dplsro9Q5qnlPQ3JuZ9IXfp7tjeS2u%2FU%2By9Z6Qt1vjwXr%2FotDFydvaVNXNS63coIPMB5L0wJebDNSLUT7j7T4uRYhFhgHFegIf96IhPqssZ4GtiueELl3sY%2BCPuywTDPbCD1NvKx6yxR%2BGkQswg42NxAY6pgHH7M1jdNSM33Wyz8zXjGHiTwVvAjB9Ovlrdm2%2Fn0dIlNi0NHkgu7nn5PzU1OBKhAXsNcKNOwFuWp%2FjVUSUOsWvCm7mhAIFZWTqkqbbDb4wZn%2Fc97INikVh9vdvlFlTWiNWPfllrChMKoYJsgvBvxQaGZTxbTshNRwQvf4cutR%2BMfqdAdoENMuw9KjbedoDJfSfBQpHeHEHO%2Fi5hZMyKSD2vio7vGbj&X-Amz-Signature=893ce7b41eed459ce329e64e35f4a11c358aa6c702c0e4526d81cd62e09df5e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSFFZY7G%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIFj7N9Rmdv3adtPRJGo3xDQbsVgqAJH0u7y8Em%2BrTrTbAiBzCa6xCJPBGarnZXlUmj%2BfzcUR4FOkFZRrUC82V%2Bo6eir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMX9Ahce6Pnw220RzDKtwD8Cw9fQHYunhP9JwN9XJeekitcZW98kW1ejtF8M%2BneGpGdhr7OShw%2BiEfbHbABQIbDe3V1sLhaOPoMpozMAEQiCh9exkyyvrNgBocWX%2BiCqIktb%2FytkRxJwcbvAqKBoGCepfMU6naJ8PDS9%2BD9SOSc9fb8TVQBMngxyPKsmSiKQ9K3OYxWjUXlhFD47h0X51W1riv16dttXdDtyY9W0uHOaHsvXv70X8APcvyO1lOJqds1gBiAxzkMj08g6yo7nzydvsEBefHiDOQZ6UeU3xlpcHIwIXPoXRmbeL9m%2FPDe%2FOdQLSIOjBk0anDmZmDjoO4Ljrn2UnbhLQJ%2BXsTFyLN2SjQdfbjckjVKphCVX%2FHTvZ8nnTsCmGqh%2F6IYb8xwGvHVU5GfVo8wdF%2FlTf%2FXlZ4dkKH8jkKaxsDSGNxjcMjarVvl1FL1Tzni2Cn3dNWkG%2FvF0NU5PRBOuTO68YKkZkVdOEBFDYEScaArwNKmWRr69dplsro9Q5qnlPQ3JuZ9IXfp7tjeS2u%2FU%2By9Z6Qt1vjwXr%2FotDFydvaVNXNS63coIPMB5L0wJebDNSLUT7j7T4uRYhFhgHFegIf96IhPqssZ4GtiueELl3sY%2BCPuywTDPbCD1NvKx6yxR%2BGkQswg42NxAY6pgHH7M1jdNSM33Wyz8zXjGHiTwVvAjB9Ovlrdm2%2Fn0dIlNi0NHkgu7nn5PzU1OBKhAXsNcKNOwFuWp%2FjVUSUOsWvCm7mhAIFZWTqkqbbDb4wZn%2Fc97INikVh9vdvlFlTWiNWPfllrChMKoYJsgvBvxQaGZTxbTshNRwQvf4cutR%2BMfqdAdoENMuw9KjbedoDJfSfBQpHeHEHO%2Fi5hZMyKSD2vio7vGbj&X-Amz-Signature=a98ec4ccb56dda08662aa3a9c36772500787f2076fd0c0c5f8ac60916ea7b647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSFFZY7G%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIFj7N9Rmdv3adtPRJGo3xDQbsVgqAJH0u7y8Em%2BrTrTbAiBzCa6xCJPBGarnZXlUmj%2BfzcUR4FOkFZRrUC82V%2Bo6eir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMX9Ahce6Pnw220RzDKtwD8Cw9fQHYunhP9JwN9XJeekitcZW98kW1ejtF8M%2BneGpGdhr7OShw%2BiEfbHbABQIbDe3V1sLhaOPoMpozMAEQiCh9exkyyvrNgBocWX%2BiCqIktb%2FytkRxJwcbvAqKBoGCepfMU6naJ8PDS9%2BD9SOSc9fb8TVQBMngxyPKsmSiKQ9K3OYxWjUXlhFD47h0X51W1riv16dttXdDtyY9W0uHOaHsvXv70X8APcvyO1lOJqds1gBiAxzkMj08g6yo7nzydvsEBefHiDOQZ6UeU3xlpcHIwIXPoXRmbeL9m%2FPDe%2FOdQLSIOjBk0anDmZmDjoO4Ljrn2UnbhLQJ%2BXsTFyLN2SjQdfbjckjVKphCVX%2FHTvZ8nnTsCmGqh%2F6IYb8xwGvHVU5GfVo8wdF%2FlTf%2FXlZ4dkKH8jkKaxsDSGNxjcMjarVvl1FL1Tzni2Cn3dNWkG%2FvF0NU5PRBOuTO68YKkZkVdOEBFDYEScaArwNKmWRr69dplsro9Q5qnlPQ3JuZ9IXfp7tjeS2u%2FU%2By9Z6Qt1vjwXr%2FotDFydvaVNXNS63coIPMB5L0wJebDNSLUT7j7T4uRYhFhgHFegIf96IhPqssZ4GtiueELl3sY%2BCPuywTDPbCD1NvKx6yxR%2BGkQswg42NxAY6pgHH7M1jdNSM33Wyz8zXjGHiTwVvAjB9Ovlrdm2%2Fn0dIlNi0NHkgu7nn5PzU1OBKhAXsNcKNOwFuWp%2FjVUSUOsWvCm7mhAIFZWTqkqbbDb4wZn%2Fc97INikVh9vdvlFlTWiNWPfllrChMKoYJsgvBvxQaGZTxbTshNRwQvf4cutR%2BMfqdAdoENMuw9KjbedoDJfSfBQpHeHEHO%2Fi5hZMyKSD2vio7vGbj&X-Amz-Signature=594169018fbcb8dc5b90db9be32a43511265b68533248069aa9aa1e8ab42dff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

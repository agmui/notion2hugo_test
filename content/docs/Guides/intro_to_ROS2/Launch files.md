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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGFIUNBK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BsAj0ZMyKxlcltsz%2BBG1R7YgeM1PDF1eGUej5mdkNsAiEA9PwkUXY7RElnK5uSkyUTnaZ%2FqWBbs9JLlPNBvmjBrcwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBENCnQkw6wKunSLircA%2BuKxcVJzcLi4Ku7LaH1qTk25vXpwHyKGA5QHsAj%2FllTwvlPUkj3bPbcxdl0gvlh5TBsI6CLsfWj%2F5uvlFL1iwwvn7EYrL8S4W3wsnXtzcs8iAGEpva5jYrhI5MBuRoGhtyO8ZB2Mpg8NoxARXwYOEX0dbTiPQm%2FH2%2Fl8jrWabZfXpUzhI1cfl3xVFXHAi8lI00SAcKqi4E8ZSyVZDFKCcyFXP85etHp4pRJIwMOAPop4XdKjmwnsZ%2BuAQr9l%2BjXqt3E5TN9l0tX8ntYZv5xliP5zI9xso%2BgZcWN59y%2Bv9TOXtKJP3nJfDSW2xz5reAidbbpO3Xsfgkc14u65PC%2BxutPQ3%2BXuvxc7kDKzNRQrJbxmWiQe613CXe63ayv68Cfe1W9FkdTrCTHWLDl83rmWzaY870RO2vb7QlfrjZKWxM2FnILot0ZK%2FNxmgRKoEox1R4SNeH9gHvQnTnhy0QCGABwLwkwU56ZGkQL40q27uvx17XbsHIPrMiC5HmGzXnL2%2Fxxf2lUyVuWFHtc8TbQLciMhev3IkTb%2FGAZ6rE%2BQR3FU1uiSYmZEhbBMF3nZFRIUgPdLk3pPduHgnS2A2mca0XzXl747mMU4IPOyIIUXW8uL7k1thb7HWAllqHiMIvG6rwGOqUBa8KMw%2BHdVo33j%2BaeyovddGgkJ%2Bzy3Yu5HXR2mGv768nvwKNxWILdI%2BI8v5AuQM8sQYbSN7JOw5SgoEOjIaErYCgICum%2FU4iEJ8rFGG2pXbnRSy1NLPVRIUwFwe8Le9cEWEMgJRf8CYZI8aBGigCp09Ah203E9eLy9DeKH61DGJg8eD%2Fn5RuaiyD9AC8rjn8v62kY58kePjtlxcdmkDT6zGpgNI9O&X-Amz-Signature=d216127bf5797ab3b0751e35ccb29c512dd10a3a23f77bc4b8aac57262715c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGFIUNBK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BsAj0ZMyKxlcltsz%2BBG1R7YgeM1PDF1eGUej5mdkNsAiEA9PwkUXY7RElnK5uSkyUTnaZ%2FqWBbs9JLlPNBvmjBrcwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBENCnQkw6wKunSLircA%2BuKxcVJzcLi4Ku7LaH1qTk25vXpwHyKGA5QHsAj%2FllTwvlPUkj3bPbcxdl0gvlh5TBsI6CLsfWj%2F5uvlFL1iwwvn7EYrL8S4W3wsnXtzcs8iAGEpva5jYrhI5MBuRoGhtyO8ZB2Mpg8NoxARXwYOEX0dbTiPQm%2FH2%2Fl8jrWabZfXpUzhI1cfl3xVFXHAi8lI00SAcKqi4E8ZSyVZDFKCcyFXP85etHp4pRJIwMOAPop4XdKjmwnsZ%2BuAQr9l%2BjXqt3E5TN9l0tX8ntYZv5xliP5zI9xso%2BgZcWN59y%2Bv9TOXtKJP3nJfDSW2xz5reAidbbpO3Xsfgkc14u65PC%2BxutPQ3%2BXuvxc7kDKzNRQrJbxmWiQe613CXe63ayv68Cfe1W9FkdTrCTHWLDl83rmWzaY870RO2vb7QlfrjZKWxM2FnILot0ZK%2FNxmgRKoEox1R4SNeH9gHvQnTnhy0QCGABwLwkwU56ZGkQL40q27uvx17XbsHIPrMiC5HmGzXnL2%2Fxxf2lUyVuWFHtc8TbQLciMhev3IkTb%2FGAZ6rE%2BQR3FU1uiSYmZEhbBMF3nZFRIUgPdLk3pPduHgnS2A2mca0XzXl747mMU4IPOyIIUXW8uL7k1thb7HWAllqHiMIvG6rwGOqUBa8KMw%2BHdVo33j%2BaeyovddGgkJ%2Bzy3Yu5HXR2mGv768nvwKNxWILdI%2BI8v5AuQM8sQYbSN7JOw5SgoEOjIaErYCgICum%2FU4iEJ8rFGG2pXbnRSy1NLPVRIUwFwe8Le9cEWEMgJRf8CYZI8aBGigCp09Ah203E9eLy9DeKH61DGJg8eD%2Fn5RuaiyD9AC8rjn8v62kY58kePjtlxcdmkDT6zGpgNI9O&X-Amz-Signature=8cbc74dea76c945e8734cd0d55d456d2f391dcb9fda1a4b7a6379a2cbbe79f85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGFIUNBK%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BsAj0ZMyKxlcltsz%2BBG1R7YgeM1PDF1eGUej5mdkNsAiEA9PwkUXY7RElnK5uSkyUTnaZ%2FqWBbs9JLlPNBvmjBrcwqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCBENCnQkw6wKunSLircA%2BuKxcVJzcLi4Ku7LaH1qTk25vXpwHyKGA5QHsAj%2FllTwvlPUkj3bPbcxdl0gvlh5TBsI6CLsfWj%2F5uvlFL1iwwvn7EYrL8S4W3wsnXtzcs8iAGEpva5jYrhI5MBuRoGhtyO8ZB2Mpg8NoxARXwYOEX0dbTiPQm%2FH2%2Fl8jrWabZfXpUzhI1cfl3xVFXHAi8lI00SAcKqi4E8ZSyVZDFKCcyFXP85etHp4pRJIwMOAPop4XdKjmwnsZ%2BuAQr9l%2BjXqt3E5TN9l0tX8ntYZv5xliP5zI9xso%2BgZcWN59y%2Bv9TOXtKJP3nJfDSW2xz5reAidbbpO3Xsfgkc14u65PC%2BxutPQ3%2BXuvxc7kDKzNRQrJbxmWiQe613CXe63ayv68Cfe1W9FkdTrCTHWLDl83rmWzaY870RO2vb7QlfrjZKWxM2FnILot0ZK%2FNxmgRKoEox1R4SNeH9gHvQnTnhy0QCGABwLwkwU56ZGkQL40q27uvx17XbsHIPrMiC5HmGzXnL2%2Fxxf2lUyVuWFHtc8TbQLciMhev3IkTb%2FGAZ6rE%2BQR3FU1uiSYmZEhbBMF3nZFRIUgPdLk3pPduHgnS2A2mca0XzXl747mMU4IPOyIIUXW8uL7k1thb7HWAllqHiMIvG6rwGOqUBa8KMw%2BHdVo33j%2BaeyovddGgkJ%2Bzy3Yu5HXR2mGv768nvwKNxWILdI%2BI8v5AuQM8sQYbSN7JOw5SgoEOjIaErYCgICum%2FU4iEJ8rFGG2pXbnRSy1NLPVRIUwFwe8Le9cEWEMgJRf8CYZI8aBGigCp09Ah203E9eLy9DeKH61DGJg8eD%2Fn5RuaiyD9AC8rjn8v62kY58kePjtlxcdmkDT6zGpgNI9O&X-Amz-Signature=0599dce5ee37816f84b6380f9e5b817c6e8ca9f0a607b1acd6a5e031c5c86b79&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

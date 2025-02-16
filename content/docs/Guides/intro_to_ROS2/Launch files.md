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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLTAA5I7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDsC5mywZHmvULpaiHYlbBUVSEcStGcKaNSZ3A7wJEwEQIgXQggYcfH9DpGHrs%2F16er%2FdX%2BFdwsL3WG49tz75izsvEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDN3z0JUWdo3ZJzzFgCrcA2htYoqo%2FkWoEKgi0kkQMyyA7w%2Bg%2BDwwYch8PzIDkB4lXbYyVolItlwos%2ByjoqnzU4Vb%2FkDfr9BJE8Eo7%2Fo377OCmEGwzUA0hhbon%2BvllivQOzEBc5to7OKwsgpVaGoees1MD6zOiQUK1Rh%2FKTrv%2B2DSu%2FPFM%2B%2F5iJtLRfOwJFf5yNJ5FFlRRj7UAZfSG%2FQ3cGsjofx%2Fl7mQiMK9g0InzxCKbkeIr32Jg7ocJTr2SM58nuzDwg9NWfae5%2FFOJ4q3BoZvZ5%2BcY8OGYwWZwRSVkNm0TPoGmbPdHrm%2F1qT7fgVK729nmAf0NBfnPMxBe%2Fj7Z0yIGJQOMph2fppqEmkKI5A7erkTuaHZz3nV5dEQO7wl6vjZVY6cEVCOQceE2fsJf6cr7Oj%2FMjgXo0S4cSxTfL8wsh6sXfFDcK1iMNmLbsbMDCJWDR5FUhy6erzUKXz03imhDZi1ih0MqgLhKifuMUXtx3mCAU%2FmprKdwZS4NRLQ4nd3Wv7szrxQhGj0y%2Fd1RBP3H2lWW5wTlnbyvBQrTBiOKU73%2B3cLlos6v%2BbO13LmSthYml7RpaknIcqgzNuSYLYxR2Bn%2B%2B1Hpx8Ii1oNF%2BQ8FYKZ53j%2BuS%2FLPxvkyE3C9Muzs6vGamSGhpe4MNHIyb0GOqUBOueUadiYpniQj0uEaH4TG7%2FMb6lvPC7dLCWt%2FxsYCCRxpTQo%2FmOvNcqMwQmNtSgykxUUG091UzHRGDUseTbS6Zg6Uq%2Fd02RsP6EmsJ7%2BQKZbiSElvTT1Z16VHqeopCi%2B3Vs2Zm6gUR5I11KJOiROLKvyTdNXTDosBa%2BwzhnObVCIFeup94fPpreUafCzZFwT350CiC%2BDuBfTMHp8MalgRcTBgUyJ&X-Amz-Signature=5456732c158a99245a7187ba54817f55f700f83d8619db7cfebc3ef3ad41a8e3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLTAA5I7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDsC5mywZHmvULpaiHYlbBUVSEcStGcKaNSZ3A7wJEwEQIgXQggYcfH9DpGHrs%2F16er%2FdX%2BFdwsL3WG49tz75izsvEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDN3z0JUWdo3ZJzzFgCrcA2htYoqo%2FkWoEKgi0kkQMyyA7w%2Bg%2BDwwYch8PzIDkB4lXbYyVolItlwos%2ByjoqnzU4Vb%2FkDfr9BJE8Eo7%2Fo377OCmEGwzUA0hhbon%2BvllivQOzEBc5to7OKwsgpVaGoees1MD6zOiQUK1Rh%2FKTrv%2B2DSu%2FPFM%2B%2F5iJtLRfOwJFf5yNJ5FFlRRj7UAZfSG%2FQ3cGsjofx%2Fl7mQiMK9g0InzxCKbkeIr32Jg7ocJTr2SM58nuzDwg9NWfae5%2FFOJ4q3BoZvZ5%2BcY8OGYwWZwRSVkNm0TPoGmbPdHrm%2F1qT7fgVK729nmAf0NBfnPMxBe%2Fj7Z0yIGJQOMph2fppqEmkKI5A7erkTuaHZz3nV5dEQO7wl6vjZVY6cEVCOQceE2fsJf6cr7Oj%2FMjgXo0S4cSxTfL8wsh6sXfFDcK1iMNmLbsbMDCJWDR5FUhy6erzUKXz03imhDZi1ih0MqgLhKifuMUXtx3mCAU%2FmprKdwZS4NRLQ4nd3Wv7szrxQhGj0y%2Fd1RBP3H2lWW5wTlnbyvBQrTBiOKU73%2B3cLlos6v%2BbO13LmSthYml7RpaknIcqgzNuSYLYxR2Bn%2B%2B1Hpx8Ii1oNF%2BQ8FYKZ53j%2BuS%2FLPxvkyE3C9Muzs6vGamSGhpe4MNHIyb0GOqUBOueUadiYpniQj0uEaH4TG7%2FMb6lvPC7dLCWt%2FxsYCCRxpTQo%2FmOvNcqMwQmNtSgykxUUG091UzHRGDUseTbS6Zg6Uq%2Fd02RsP6EmsJ7%2BQKZbiSElvTT1Z16VHqeopCi%2B3Vs2Zm6gUR5I11KJOiROLKvyTdNXTDosBa%2BwzhnObVCIFeup94fPpreUafCzZFwT350CiC%2BDuBfTMHp8MalgRcTBgUyJ&X-Amz-Signature=152f80978ccc291b1b73f02b93b77a86950fcd3bf63c9b97074c1907a91f2507&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLTAA5I7%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDsC5mywZHmvULpaiHYlbBUVSEcStGcKaNSZ3A7wJEwEQIgXQggYcfH9DpGHrs%2F16er%2FdX%2BFdwsL3WG49tz75izsvEq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDN3z0JUWdo3ZJzzFgCrcA2htYoqo%2FkWoEKgi0kkQMyyA7w%2Bg%2BDwwYch8PzIDkB4lXbYyVolItlwos%2ByjoqnzU4Vb%2FkDfr9BJE8Eo7%2Fo377OCmEGwzUA0hhbon%2BvllivQOzEBc5to7OKwsgpVaGoees1MD6zOiQUK1Rh%2FKTrv%2B2DSu%2FPFM%2B%2F5iJtLRfOwJFf5yNJ5FFlRRj7UAZfSG%2FQ3cGsjofx%2Fl7mQiMK9g0InzxCKbkeIr32Jg7ocJTr2SM58nuzDwg9NWfae5%2FFOJ4q3BoZvZ5%2BcY8OGYwWZwRSVkNm0TPoGmbPdHrm%2F1qT7fgVK729nmAf0NBfnPMxBe%2Fj7Z0yIGJQOMph2fppqEmkKI5A7erkTuaHZz3nV5dEQO7wl6vjZVY6cEVCOQceE2fsJf6cr7Oj%2FMjgXo0S4cSxTfL8wsh6sXfFDcK1iMNmLbsbMDCJWDR5FUhy6erzUKXz03imhDZi1ih0MqgLhKifuMUXtx3mCAU%2FmprKdwZS4NRLQ4nd3Wv7szrxQhGj0y%2Fd1RBP3H2lWW5wTlnbyvBQrTBiOKU73%2B3cLlos6v%2BbO13LmSthYml7RpaknIcqgzNuSYLYxR2Bn%2B%2B1Hpx8Ii1oNF%2BQ8FYKZ53j%2BuS%2FLPxvkyE3C9Muzs6vGamSGhpe4MNHIyb0GOqUBOueUadiYpniQj0uEaH4TG7%2FMb6lvPC7dLCWt%2FxsYCCRxpTQo%2FmOvNcqMwQmNtSgykxUUG091UzHRGDUseTbS6Zg6Uq%2Fd02RsP6EmsJ7%2BQKZbiSElvTT1Z16VHqeopCi%2B3Vs2Zm6gUR5I11KJOiROLKvyTdNXTDosBa%2BwzhnObVCIFeup94fPpreUafCzZFwT350CiC%2BDuBfTMHp8MalgRcTBgUyJ&X-Amz-Signature=c4ce71a56a63f1361a9f601358842aa9d5d04c4ce6cf6e53b29c3298b36b2aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

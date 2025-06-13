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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQTTASP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDAii89O54o80i59L4lmZqXKe9%2B3a0kMOVRn4zNXblxgAIgQcOcYqLSJgFr%2F0mSFFfqOmzZCY0Pj0ypTTSReptvKW8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHBgvcBT%2BWlAr5x1oSrcA5v6t7kf01d9iykiBD8Z131xAtiArXeS%2FTgWByKir%2FDFC%2FvJ0KCsZtpbLjEVxAV7a9Va0GwNOl3nqPtQ2IzFv6LPtcYvfQpiTqh8%2FzwomqmpJQFLmdynva8xnBuSIic%2BZ8PB09W%2BvpzEitLlRRp%2FxKHfOgRrOov0NZ6HJ27clWL6UK6evLb17UFO4wOCOHKQOHTaTdcxUr9DXbAIE4xNH8WMvPshaZ1ageBizMRdRSUZzOY1vw6D%2BOxhPvzbvL9lb7Z4tfMUYS%2Fl3pYBapwtoHZ4LjAyfRteeX5B8CZViyrAuK2ikBV0ttrNv9ms%2B0G3lXphQp%2BRsTmWGJfj08uYbav%2FAc%2FmV3ZMrTFd%2B8jBXj1OLDb%2BEETPdWFv2owFwIkt4Ay1ZMAVgj42bgajjpss90qx63pYBymJC%2BUtjclP5aRj7WNm8g%2Ff23qGqtQ14StSvkgln%2FTncv15gAnaqbvoULNrciWNWMA8rV6vS5fspCGEkvV%2FtsCqvwnjcoqzCPq181eJwJeAx%2FB%2FQnpQTyDFyW0aBj%2BiF%2FfWEFVbFOUqjFvi4Wg6omGVElg1UV5iqaDhje1VyO6ngp6byFr6toCgDcrpJoyvg4R8k5ByEB8Ir4GamG7lt8ft6%2FsWAvTKMMyLr8IGOqUB0ODRoSLF5qfJR3mdhCVclNKWl%2F9yR9VdsfK8Or4SbRpr72xYL5BRlzXY64OSy9ku8GAv5%2F2mYzoCKbLejU0ouhc3Ic98rQBCGohCVBSJ%2Fy06wjmjOiNFOtCEdAwZcmnn99ZTy7W77rZuimnFMWP2zh6PzjI2UTb5veGS6NWMj9kyAh6ZKER19cskHWST50cl3n7aFShCwsajTCGVoQn90AaYnePX&X-Amz-Signature=20c43f8e3debf8aba42e4f7dbc74c9cb60bcefd19e5b78ce786f008142f33e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQTTASP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDAii89O54o80i59L4lmZqXKe9%2B3a0kMOVRn4zNXblxgAIgQcOcYqLSJgFr%2F0mSFFfqOmzZCY0Pj0ypTTSReptvKW8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHBgvcBT%2BWlAr5x1oSrcA5v6t7kf01d9iykiBD8Z131xAtiArXeS%2FTgWByKir%2FDFC%2FvJ0KCsZtpbLjEVxAV7a9Va0GwNOl3nqPtQ2IzFv6LPtcYvfQpiTqh8%2FzwomqmpJQFLmdynva8xnBuSIic%2BZ8PB09W%2BvpzEitLlRRp%2FxKHfOgRrOov0NZ6HJ27clWL6UK6evLb17UFO4wOCOHKQOHTaTdcxUr9DXbAIE4xNH8WMvPshaZ1ageBizMRdRSUZzOY1vw6D%2BOxhPvzbvL9lb7Z4tfMUYS%2Fl3pYBapwtoHZ4LjAyfRteeX5B8CZViyrAuK2ikBV0ttrNv9ms%2B0G3lXphQp%2BRsTmWGJfj08uYbav%2FAc%2FmV3ZMrTFd%2B8jBXj1OLDb%2BEETPdWFv2owFwIkt4Ay1ZMAVgj42bgajjpss90qx63pYBymJC%2BUtjclP5aRj7WNm8g%2Ff23qGqtQ14StSvkgln%2FTncv15gAnaqbvoULNrciWNWMA8rV6vS5fspCGEkvV%2FtsCqvwnjcoqzCPq181eJwJeAx%2FB%2FQnpQTyDFyW0aBj%2BiF%2FfWEFVbFOUqjFvi4Wg6omGVElg1UV5iqaDhje1VyO6ngp6byFr6toCgDcrpJoyvg4R8k5ByEB8Ir4GamG7lt8ft6%2FsWAvTKMMyLr8IGOqUB0ODRoSLF5qfJR3mdhCVclNKWl%2F9yR9VdsfK8Or4SbRpr72xYL5BRlzXY64OSy9ku8GAv5%2F2mYzoCKbLejU0ouhc3Ic98rQBCGohCVBSJ%2Fy06wjmjOiNFOtCEdAwZcmnn99ZTy7W77rZuimnFMWP2zh6PzjI2UTb5veGS6NWMj9kyAh6ZKER19cskHWST50cl3n7aFShCwsajTCGVoQn90AaYnePX&X-Amz-Signature=6621365c315fec0cf4c077379d969e0c48273a8650f9a6a9f017b77ff4d2a9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZQTTASP%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQDAii89O54o80i59L4lmZqXKe9%2B3a0kMOVRn4zNXblxgAIgQcOcYqLSJgFr%2F0mSFFfqOmzZCY0Pj0ypTTSReptvKW8q%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDHBgvcBT%2BWlAr5x1oSrcA5v6t7kf01d9iykiBD8Z131xAtiArXeS%2FTgWByKir%2FDFC%2FvJ0KCsZtpbLjEVxAV7a9Va0GwNOl3nqPtQ2IzFv6LPtcYvfQpiTqh8%2FzwomqmpJQFLmdynva8xnBuSIic%2BZ8PB09W%2BvpzEitLlRRp%2FxKHfOgRrOov0NZ6HJ27clWL6UK6evLb17UFO4wOCOHKQOHTaTdcxUr9DXbAIE4xNH8WMvPshaZ1ageBizMRdRSUZzOY1vw6D%2BOxhPvzbvL9lb7Z4tfMUYS%2Fl3pYBapwtoHZ4LjAyfRteeX5B8CZViyrAuK2ikBV0ttrNv9ms%2B0G3lXphQp%2BRsTmWGJfj08uYbav%2FAc%2FmV3ZMrTFd%2B8jBXj1OLDb%2BEETPdWFv2owFwIkt4Ay1ZMAVgj42bgajjpss90qx63pYBymJC%2BUtjclP5aRj7WNm8g%2Ff23qGqtQ14StSvkgln%2FTncv15gAnaqbvoULNrciWNWMA8rV6vS5fspCGEkvV%2FtsCqvwnjcoqzCPq181eJwJeAx%2FB%2FQnpQTyDFyW0aBj%2BiF%2FfWEFVbFOUqjFvi4Wg6omGVElg1UV5iqaDhje1VyO6ngp6byFr6toCgDcrpJoyvg4R8k5ByEB8Ir4GamG7lt8ft6%2FsWAvTKMMyLr8IGOqUB0ODRoSLF5qfJR3mdhCVclNKWl%2F9yR9VdsfK8Or4SbRpr72xYL5BRlzXY64OSy9ku8GAv5%2F2mYzoCKbLejU0ouhc3Ic98rQBCGohCVBSJ%2Fy06wjmjOiNFOtCEdAwZcmnn99ZTy7W77rZuimnFMWP2zh6PzjI2UTb5veGS6NWMj9kyAh6ZKER19cskHWST50cl3n7aFShCwsajTCGVoQn90AaYnePX&X-Amz-Signature=5eb292d2467d06f6c0a225e7b261bca6bee14717ad09bc17845b3e43e2c4c240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

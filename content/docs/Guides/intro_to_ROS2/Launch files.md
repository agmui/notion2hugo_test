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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPWNCJHV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfI1v3TqqhN8GBPefJsTWiJV%2Baflw0V4zUrcV51qYQhAIhAPT7Xlmv0s%2Fy2lo1s%2Bv5ngamEjxk9Bub6E1wyXGDjXrrKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3rRTEAXenqVICUY0q3AO0KH5mvqsGs%2FPUZefPEZts4cN5TXB5I5Xrf%2FswydxQ4KniYwi7kUyrYM5b2PyiqBI9f6hY%2F0S57gWsyau7wwpLn2rMym6l%2B9Lq43DrHwfsA15EtOakOvrLLR2HWOKWPBkRXqxTEnxrAVvDJTTt9yRxWoTzLEtHvpZeWDgf7Etd3qrwK5zxudN41idCYr1z2UHVmyt6hKmO6%2FMHzFCfUKK97vCJpXMyCdQyRKG3Yl%2B4WBlYg2xvzHGJUz%2FhSrPvda40KwTOhpL1fGJJB3x9Zb2jvIJmOPugtHdTtnk706gRDrs1quaM11Q3YFx%2F8PqjYiluaDphwSEzHSh6%2Bg1LogEzLPFRk7LT2zxXsp%2FtIBj4FpKaZUgv8XP6zsFQ3ZnnUfNf5oYYICMsrtlGM%2FN7YPrpUhJB4aaQ1cjf2myMNXQwEPGbkUcvi7FqTtzPEsjACQw0iuIW7OeiZlP4JsTDI5vSHbqob7azEco%2FRmEqJ5lMdtFks5mcd8Wu4qzKBMF5iGm8YS4Y1QhngAxntfbMU6Wi%2FTkViZjtlcLIp9GyUdMeaEyv1Kap8unlB4H8xFGoI8A3gfIVWhNNOYTVtPdeebL5MRI9MEcDfNVqCx%2BJnc1pGZJ77OEYL10EFLEkIDCg%2F7zDBjqkAbcXoW7hPCjq5FlwOaElCo4IPo314CBH8EJyudGNPK6Zc4YF9N6bWHUxYSud28dTA%2FlAdOixbKGGCgTp%2FlLB46B%2BZiUMiCLmjI8M8MpIlOhL%2Bbm5J92q%2BcQdlMFVgnBEqRtvcjphMtxY%2FuQnatcinpjBfy6lN5OnHKQKgrEOdrnGEUjH7hg6aGYPUqo4IhLn6jMS5gSgjMOgLmq49YUJtMatvmqC&X-Amz-Signature=ba679deedf4ff348d88438da2414dc5fd7fd322dd327e0918712c19fb696253e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPWNCJHV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfI1v3TqqhN8GBPefJsTWiJV%2Baflw0V4zUrcV51qYQhAIhAPT7Xlmv0s%2Fy2lo1s%2Bv5ngamEjxk9Bub6E1wyXGDjXrrKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3rRTEAXenqVICUY0q3AO0KH5mvqsGs%2FPUZefPEZts4cN5TXB5I5Xrf%2FswydxQ4KniYwi7kUyrYM5b2PyiqBI9f6hY%2F0S57gWsyau7wwpLn2rMym6l%2B9Lq43DrHwfsA15EtOakOvrLLR2HWOKWPBkRXqxTEnxrAVvDJTTt9yRxWoTzLEtHvpZeWDgf7Etd3qrwK5zxudN41idCYr1z2UHVmyt6hKmO6%2FMHzFCfUKK97vCJpXMyCdQyRKG3Yl%2B4WBlYg2xvzHGJUz%2FhSrPvda40KwTOhpL1fGJJB3x9Zb2jvIJmOPugtHdTtnk706gRDrs1quaM11Q3YFx%2F8PqjYiluaDphwSEzHSh6%2Bg1LogEzLPFRk7LT2zxXsp%2FtIBj4FpKaZUgv8XP6zsFQ3ZnnUfNf5oYYICMsrtlGM%2FN7YPrpUhJB4aaQ1cjf2myMNXQwEPGbkUcvi7FqTtzPEsjACQw0iuIW7OeiZlP4JsTDI5vSHbqob7azEco%2FRmEqJ5lMdtFks5mcd8Wu4qzKBMF5iGm8YS4Y1QhngAxntfbMU6Wi%2FTkViZjtlcLIp9GyUdMeaEyv1Kap8unlB4H8xFGoI8A3gfIVWhNNOYTVtPdeebL5MRI9MEcDfNVqCx%2BJnc1pGZJ77OEYL10EFLEkIDCg%2F7zDBjqkAbcXoW7hPCjq5FlwOaElCo4IPo314CBH8EJyudGNPK6Zc4YF9N6bWHUxYSud28dTA%2FlAdOixbKGGCgTp%2FlLB46B%2BZiUMiCLmjI8M8MpIlOhL%2Bbm5J92q%2BcQdlMFVgnBEqRtvcjphMtxY%2FuQnatcinpjBfy6lN5OnHKQKgrEOdrnGEUjH7hg6aGYPUqo4IhLn6jMS5gSgjMOgLmq49YUJtMatvmqC&X-Amz-Signature=9a0b9c7e1a5cbac1542c1da3cc6e348cae6adbe6c78e9ae7e53bbe34b16d9ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPWNCJHV%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T051355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfI1v3TqqhN8GBPefJsTWiJV%2Baflw0V4zUrcV51qYQhAIhAPT7Xlmv0s%2Fy2lo1s%2Bv5ngamEjxk9Bub6E1wyXGDjXrrKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3rRTEAXenqVICUY0q3AO0KH5mvqsGs%2FPUZefPEZts4cN5TXB5I5Xrf%2FswydxQ4KniYwi7kUyrYM5b2PyiqBI9f6hY%2F0S57gWsyau7wwpLn2rMym6l%2B9Lq43DrHwfsA15EtOakOvrLLR2HWOKWPBkRXqxTEnxrAVvDJTTt9yRxWoTzLEtHvpZeWDgf7Etd3qrwK5zxudN41idCYr1z2UHVmyt6hKmO6%2FMHzFCfUKK97vCJpXMyCdQyRKG3Yl%2B4WBlYg2xvzHGJUz%2FhSrPvda40KwTOhpL1fGJJB3x9Zb2jvIJmOPugtHdTtnk706gRDrs1quaM11Q3YFx%2F8PqjYiluaDphwSEzHSh6%2Bg1LogEzLPFRk7LT2zxXsp%2FtIBj4FpKaZUgv8XP6zsFQ3ZnnUfNf5oYYICMsrtlGM%2FN7YPrpUhJB4aaQ1cjf2myMNXQwEPGbkUcvi7FqTtzPEsjACQw0iuIW7OeiZlP4JsTDI5vSHbqob7azEco%2FRmEqJ5lMdtFks5mcd8Wu4qzKBMF5iGm8YS4Y1QhngAxntfbMU6Wi%2FTkViZjtlcLIp9GyUdMeaEyv1Kap8unlB4H8xFGoI8A3gfIVWhNNOYTVtPdeebL5MRI9MEcDfNVqCx%2BJnc1pGZJ77OEYL10EFLEkIDCg%2F7zDBjqkAbcXoW7hPCjq5FlwOaElCo4IPo314CBH8EJyudGNPK6Zc4YF9N6bWHUxYSud28dTA%2FlAdOixbKGGCgTp%2FlLB46B%2BZiUMiCLmjI8M8MpIlOhL%2Bbm5J92q%2BcQdlMFVgnBEqRtvcjphMtxY%2FuQnatcinpjBfy6lN5OnHKQKgrEOdrnGEUjH7hg6aGYPUqo4IhLn6jMS5gSgjMOgLmq49YUJtMatvmqC&X-Amz-Signature=01fd47db07317d3423bed8cd93aab37483a141eaa2b49c36fdc89330b1df0524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

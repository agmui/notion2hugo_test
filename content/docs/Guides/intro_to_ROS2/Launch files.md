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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI3BVYA5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNfK%2FEqCDd2sAYcdlCNkKUcgIeBUmwY62WddYPOSrYTAiAEb%2ByXDfietPV9geJGfKQKvxZZ6TIroIzj99E9wvXkFir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMYP10MvWwxj4u%2BnpOKtwDa21XmvyWJZPo%2FlmfgSVuWNlXjh6HXWIV%2FUaFycNI38Jp42QqqNvo0nYRWQvJOqdbgercXGcgjkRl4JANsaV4y2x3dTUxy7B8nhSB19WDkEGbjgQutwy0Xlmf2KUTexJRlbgstN0%2FWBzc7g2lwJcIXCU1g%2BMVQ2402Kd6pw3z1cHf6SkE37OSQRiA4qIuLmUJlhlU8mCsWRkLArk7BiyIaUMS2JqOZ3eIc%2FFg97V24bRYDW0PlVeRBbYdy6OZBKv06A9Oxd8CULz7UiDGxUF%2FyZnVCLz%2FkiBmwOcyB9yTWPQB1hApMUFzMMqXYGLCDmy6utxoKDv76xSOc40PwW9CdRYruq5IzgTWT%2BT2ATQfl2h7GugBHsG9dADIhPINqtw7WTXbALBXN8hFa1MECyhltCWRXLYi1uONLLbzJQagjaK1Q6Jetw40NQxrdHxZSw42gS3u4tnqsMgefHdzYErb9fjAAoKq7mX%2FRw4Dczf8SeWufpnt9cydsLCEsAAkYxu08mOBW8ST%2BdoGBjUkhRLeCdE4go9X9i26u4mHN79PLz8LttAnissrE3nSGZmcgun9juZY2yBIJZEzOV%2FcfqOOIWfmdqkL1XKRAMMpI2sPuJyMK03G44HEnXfwuksw1s2nvgY6pgGh7BvRBSjBSg3cTOoTRwyTMYbWGhS%2FwYTNTS06rDGdv6Z4o0U7DWqZIivOSI667CdMCnSkoVtqvypIa45Yk7nrE1BbAev%2Bh%2BG58WYVyMkZY9nKKil1GDUPmpm9VQSv1B2ztnunESSLkNcKHNeNyXr%2FksZDTrkMQxWS9dMx6FrQhCbAqTwJELJQv%2FdYj418wkNKYwiI6%2Fsg14cEpwxk14QsG1m7738b&X-Amz-Signature=0575924b5b41931d14b36da4b38ab334efcbcc163a5ad7f91fea31def25ae821&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI3BVYA5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNfK%2FEqCDd2sAYcdlCNkKUcgIeBUmwY62WddYPOSrYTAiAEb%2ByXDfietPV9geJGfKQKvxZZ6TIroIzj99E9wvXkFir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMYP10MvWwxj4u%2BnpOKtwDa21XmvyWJZPo%2FlmfgSVuWNlXjh6HXWIV%2FUaFycNI38Jp42QqqNvo0nYRWQvJOqdbgercXGcgjkRl4JANsaV4y2x3dTUxy7B8nhSB19WDkEGbjgQutwy0Xlmf2KUTexJRlbgstN0%2FWBzc7g2lwJcIXCU1g%2BMVQ2402Kd6pw3z1cHf6SkE37OSQRiA4qIuLmUJlhlU8mCsWRkLArk7BiyIaUMS2JqOZ3eIc%2FFg97V24bRYDW0PlVeRBbYdy6OZBKv06A9Oxd8CULz7UiDGxUF%2FyZnVCLz%2FkiBmwOcyB9yTWPQB1hApMUFzMMqXYGLCDmy6utxoKDv76xSOc40PwW9CdRYruq5IzgTWT%2BT2ATQfl2h7GugBHsG9dADIhPINqtw7WTXbALBXN8hFa1MECyhltCWRXLYi1uONLLbzJQagjaK1Q6Jetw40NQxrdHxZSw42gS3u4tnqsMgefHdzYErb9fjAAoKq7mX%2FRw4Dczf8SeWufpnt9cydsLCEsAAkYxu08mOBW8ST%2BdoGBjUkhRLeCdE4go9X9i26u4mHN79PLz8LttAnissrE3nSGZmcgun9juZY2yBIJZEzOV%2FcfqOOIWfmdqkL1XKRAMMpI2sPuJyMK03G44HEnXfwuksw1s2nvgY6pgGh7BvRBSjBSg3cTOoTRwyTMYbWGhS%2FwYTNTS06rDGdv6Z4o0U7DWqZIivOSI667CdMCnSkoVtqvypIa45Yk7nrE1BbAev%2Bh%2BG58WYVyMkZY9nKKil1GDUPmpm9VQSv1B2ztnunESSLkNcKHNeNyXr%2FksZDTrkMQxWS9dMx6FrQhCbAqTwJELJQv%2FdYj418wkNKYwiI6%2Fsg14cEpwxk14QsG1m7738b&X-Amz-Signature=20cc242ea815d36a10cdffaffd8596ffeacbc8e26a30b01812d7e64865d97cae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI3BVYA5%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDNfK%2FEqCDd2sAYcdlCNkKUcgIeBUmwY62WddYPOSrYTAiAEb%2ByXDfietPV9geJGfKQKvxZZ6TIroIzj99E9wvXkFir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMYP10MvWwxj4u%2BnpOKtwDa21XmvyWJZPo%2FlmfgSVuWNlXjh6HXWIV%2FUaFycNI38Jp42QqqNvo0nYRWQvJOqdbgercXGcgjkRl4JANsaV4y2x3dTUxy7B8nhSB19WDkEGbjgQutwy0Xlmf2KUTexJRlbgstN0%2FWBzc7g2lwJcIXCU1g%2BMVQ2402Kd6pw3z1cHf6SkE37OSQRiA4qIuLmUJlhlU8mCsWRkLArk7BiyIaUMS2JqOZ3eIc%2FFg97V24bRYDW0PlVeRBbYdy6OZBKv06A9Oxd8CULz7UiDGxUF%2FyZnVCLz%2FkiBmwOcyB9yTWPQB1hApMUFzMMqXYGLCDmy6utxoKDv76xSOc40PwW9CdRYruq5IzgTWT%2BT2ATQfl2h7GugBHsG9dADIhPINqtw7WTXbALBXN8hFa1MECyhltCWRXLYi1uONLLbzJQagjaK1Q6Jetw40NQxrdHxZSw42gS3u4tnqsMgefHdzYErb9fjAAoKq7mX%2FRw4Dczf8SeWufpnt9cydsLCEsAAkYxu08mOBW8ST%2BdoGBjUkhRLeCdE4go9X9i26u4mHN79PLz8LttAnissrE3nSGZmcgun9juZY2yBIJZEzOV%2FcfqOOIWfmdqkL1XKRAMMpI2sPuJyMK03G44HEnXfwuksw1s2nvgY6pgGh7BvRBSjBSg3cTOoTRwyTMYbWGhS%2FwYTNTS06rDGdv6Z4o0U7DWqZIivOSI667CdMCnSkoVtqvypIa45Yk7nrE1BbAev%2Bh%2BG58WYVyMkZY9nKKil1GDUPmpm9VQSv1B2ztnunESSLkNcKHNeNyXr%2FksZDTrkMQxWS9dMx6FrQhCbAqTwJELJQv%2FdYj418wkNKYwiI6%2Fsg14cEpwxk14QsG1m7738b&X-Amz-Signature=ebd55792d3435b7b7091ef2870c9025ad9598085fac86e53c86782fea703f29e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

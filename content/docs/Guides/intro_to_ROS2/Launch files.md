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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665G36JYR%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhvmtv5v7h1%2BrKs1Pd0NyBflQfCS5MrV2ajGJZ%2Be%2FUAIhAPAtOemS%2Fp%2FXdTWEUVIn1KFAlubVzx8dNy1M6cXgT27zKv8DCDUQABoMNjM3NDIzMTgzODA1IgynKBAulSnpE9dCMxEq3AOTNC41TBuSctteN073h3LrZjlm8%2BmdtNaHGBabLT%2BUE8%2BOipRO8fXrfaYU8oKhykL7nRIJqH6opK%2F3gVHF4iVzoDa134zgnHfjE9jeB2TQ9dKuzGSECxd51uWe5ESjGWWXpKzkU76BKWC0RwXKpa8rkxTX51PDotMIT89rFgiCGy9LJitw4h%2FZnvXQ3YcCKG4yC1Ywk6YTwW5%2FPz9h0r1cG5akSCABOxiTMmpia8nOI4MV2d%2FxIK0WfFegWShium9SUcIOdbbGQ0cWhDL9Jt70%2FB%2BPMemgJ23Kw0TnP9FrEvPC39GRxoa%2BjUt8h7%2FBG6ze0BIptcuLnSlM81lM4pSHKDMvNPOjYx3zAcfuJlgm%2Ft85vXD%2Bw5kr0IsyWH8Fi%2F8Lyzfhs2YEYLzyMDMFc3czsPXPIPLVRFhrwfmvd9lRLpoV0DSi5ufQ8FsmRsxRFKAp%2Fpoj3%2Fo0Ny429ZpOv2vjyKltrNs9hrAuLhgayXUh7qOymUguvB8giqGUfggHAsj4lQp0rj19OvDodgfNt5Coxh5bhMlrKO5bQN1zoKeoUlzTbS6RnOjgcEunpAupY%2Fwb%2FR8vEWdoGHE%2B1cgdF12woJ6UJLrq9LaLdoKbhlEs576pfi8vXlf4pkrmODDoksa%2FBjqkAcbqJ0avNq5SJtYDeRTnXsWTUjo2re9vx%2BPJCFPWGEu%2Fwang%2FKKbn1QiK3RsN2odCHfo0AuOEO8%2FVJkNGDMMkAgjA4OU7HwjOHjz7UEkwb%2F60H6IhejBBbdsM1hL08CeFnPzwhjmF666OwcdYrsAG9BJ%2F3o0SQL3ousa82OVajO1Af3t35IZ61%2FoFwy9rl2tMrzdOurNJDN8Z7qJYB4yKiSz8s1o&X-Amz-Signature=07d758c214006b3280a4ba37079f0f45769ecc72c0b766a97aa0efb5a3ea8073&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665G36JYR%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhvmtv5v7h1%2BrKs1Pd0NyBflQfCS5MrV2ajGJZ%2Be%2FUAIhAPAtOemS%2Fp%2FXdTWEUVIn1KFAlubVzx8dNy1M6cXgT27zKv8DCDUQABoMNjM3NDIzMTgzODA1IgynKBAulSnpE9dCMxEq3AOTNC41TBuSctteN073h3LrZjlm8%2BmdtNaHGBabLT%2BUE8%2BOipRO8fXrfaYU8oKhykL7nRIJqH6opK%2F3gVHF4iVzoDa134zgnHfjE9jeB2TQ9dKuzGSECxd51uWe5ESjGWWXpKzkU76BKWC0RwXKpa8rkxTX51PDotMIT89rFgiCGy9LJitw4h%2FZnvXQ3YcCKG4yC1Ywk6YTwW5%2FPz9h0r1cG5akSCABOxiTMmpia8nOI4MV2d%2FxIK0WfFegWShium9SUcIOdbbGQ0cWhDL9Jt70%2FB%2BPMemgJ23Kw0TnP9FrEvPC39GRxoa%2BjUt8h7%2FBG6ze0BIptcuLnSlM81lM4pSHKDMvNPOjYx3zAcfuJlgm%2Ft85vXD%2Bw5kr0IsyWH8Fi%2F8Lyzfhs2YEYLzyMDMFc3czsPXPIPLVRFhrwfmvd9lRLpoV0DSi5ufQ8FsmRsxRFKAp%2Fpoj3%2Fo0Ny429ZpOv2vjyKltrNs9hrAuLhgayXUh7qOymUguvB8giqGUfggHAsj4lQp0rj19OvDodgfNt5Coxh5bhMlrKO5bQN1zoKeoUlzTbS6RnOjgcEunpAupY%2Fwb%2FR8vEWdoGHE%2B1cgdF12woJ6UJLrq9LaLdoKbhlEs576pfi8vXlf4pkrmODDoksa%2FBjqkAcbqJ0avNq5SJtYDeRTnXsWTUjo2re9vx%2BPJCFPWGEu%2Fwang%2FKKbn1QiK3RsN2odCHfo0AuOEO8%2FVJkNGDMMkAgjA4OU7HwjOHjz7UEkwb%2F60H6IhejBBbdsM1hL08CeFnPzwhjmF666OwcdYrsAG9BJ%2F3o0SQL3ousa82OVajO1Af3t35IZ61%2FoFwy9rl2tMrzdOurNJDN8Z7qJYB4yKiSz8s1o&X-Amz-Signature=2303e30f7ae2122ae8626615324ea6b5ab4be93b4b88bd2e61ec867837830444&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665G36JYR%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T200807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUhvmtv5v7h1%2BrKs1Pd0NyBflQfCS5MrV2ajGJZ%2Be%2FUAIhAPAtOemS%2Fp%2FXdTWEUVIn1KFAlubVzx8dNy1M6cXgT27zKv8DCDUQABoMNjM3NDIzMTgzODA1IgynKBAulSnpE9dCMxEq3AOTNC41TBuSctteN073h3LrZjlm8%2BmdtNaHGBabLT%2BUE8%2BOipRO8fXrfaYU8oKhykL7nRIJqH6opK%2F3gVHF4iVzoDa134zgnHfjE9jeB2TQ9dKuzGSECxd51uWe5ESjGWWXpKzkU76BKWC0RwXKpa8rkxTX51PDotMIT89rFgiCGy9LJitw4h%2FZnvXQ3YcCKG4yC1Ywk6YTwW5%2FPz9h0r1cG5akSCABOxiTMmpia8nOI4MV2d%2FxIK0WfFegWShium9SUcIOdbbGQ0cWhDL9Jt70%2FB%2BPMemgJ23Kw0TnP9FrEvPC39GRxoa%2BjUt8h7%2FBG6ze0BIptcuLnSlM81lM4pSHKDMvNPOjYx3zAcfuJlgm%2Ft85vXD%2Bw5kr0IsyWH8Fi%2F8Lyzfhs2YEYLzyMDMFc3czsPXPIPLVRFhrwfmvd9lRLpoV0DSi5ufQ8FsmRsxRFKAp%2Fpoj3%2Fo0Ny429ZpOv2vjyKltrNs9hrAuLhgayXUh7qOymUguvB8giqGUfggHAsj4lQp0rj19OvDodgfNt5Coxh5bhMlrKO5bQN1zoKeoUlzTbS6RnOjgcEunpAupY%2Fwb%2FR8vEWdoGHE%2B1cgdF12woJ6UJLrq9LaLdoKbhlEs576pfi8vXlf4pkrmODDoksa%2FBjqkAcbqJ0avNq5SJtYDeRTnXsWTUjo2re9vx%2BPJCFPWGEu%2Fwang%2FKKbn1QiK3RsN2odCHfo0AuOEO8%2FVJkNGDMMkAgjA4OU7HwjOHjz7UEkwb%2F60H6IhejBBbdsM1hL08CeFnPzwhjmF666OwcdYrsAG9BJ%2F3o0SQL3ousa82OVajO1Af3t35IZ61%2FoFwy9rl2tMrzdOurNJDN8Z7qJYB4yKiSz8s1o&X-Amz-Signature=97ec4a5b9db6a4a31c41c4e96209c5a3c887aab7e8d7f98485841971f53425e8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

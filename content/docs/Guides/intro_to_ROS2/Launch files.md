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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KTVCFG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBSsiXEV0KqjLVLDaqH4l8oGe6Ri73PkLyrrkFlZa%2BvfAiBIkdGaViFAM4%2Bxz0BZQ%2Bsg90SUsF4pn99PQ%2BD4%2BDiAGiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKCmpiNgLl91GhzGOKtwDBY73URnTuuZ8PUXkvipL6TDz%2Bvxrr5Kuy8sGllWbrGz7L7TTNTkaQJ729zlY%2F7GqD%2BKI8lQBhfLSYdkUzcWopoyjDCbtRYEtoXw2CGJrdLbnT6JOrfiPUcDxSbbgbC5yWBMckTMaedZZqqudjWilWdlGG0VEy5uNDJ9Hwa1I2%2B3PhtyjQA1hzBiF%2BhGT%2B1gl1xDotfGmS5yQVDLkFdjV7xFaVmbxPoo3QgeEQg3Bg%2BEcA6fjj%2FKx4GO0VkUutfmqtFAwWrfEZCHY8equjNIi03vaf9i5Wp3va5eeNeMT18W66m2GdHFcCQpIaB2dkKyN53xQ7f2zDPtMFgs3icM0bX35tkmX4Hb0o8VQmPQpiHbDid2GSVKP0ZdBhDIhGLcYZUtlfYnlSqyk83tiXXrV2pHLmiikVKoLDWoakr5dcuulWJtXWxIcA5qrhtXvZUS9BymmOQ%2Fi%2BJrq1FoBsrydDRiJ7vdM0bvxK4bAELuoL0JPEeV7I%2BbL0QJfUqOXTl62LwZOzcgvmcIXroMsu%2BeoqYTaDguJprhxxTqV0jjS2vBAU9l6y2%2BKLBZDZvAjLyLBEay91LleH7Ymd4l92SG6CQOlL4yN%2B%2BLUb1cctVQxQJQnthD9KYyLuc6HVo4wnIu9vgY6pgGLDz%2BRDox%2FbEVRHCrtrkA4enwsm%2BSdrJ2PTlfB9fWFbRz%2FCPmSvaEzJTrUYjOttyIKh3CxHnhLCe%2Ba0xLh7jLOHR13M7kxpDDmxzbB7Z4AGx0%2B3qOb1SDx0hOWQpomsAjRFXOw3okpdUVyfLbzNBf8hqbsrNOyFWIx%2FLmbWQ38C8ZUkDJjzLIvZ95l98%2Bou7C8Zmt7p9QUu8jqtnZd40Ld0VlgHHms&X-Amz-Signature=227911a09d2f3db01437bec75d3a2b331f08c6618adb795c18a80501e92e0e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KTVCFG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBSsiXEV0KqjLVLDaqH4l8oGe6Ri73PkLyrrkFlZa%2BvfAiBIkdGaViFAM4%2Bxz0BZQ%2Bsg90SUsF4pn99PQ%2BD4%2BDiAGiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKCmpiNgLl91GhzGOKtwDBY73URnTuuZ8PUXkvipL6TDz%2Bvxrr5Kuy8sGllWbrGz7L7TTNTkaQJ729zlY%2F7GqD%2BKI8lQBhfLSYdkUzcWopoyjDCbtRYEtoXw2CGJrdLbnT6JOrfiPUcDxSbbgbC5yWBMckTMaedZZqqudjWilWdlGG0VEy5uNDJ9Hwa1I2%2B3PhtyjQA1hzBiF%2BhGT%2B1gl1xDotfGmS5yQVDLkFdjV7xFaVmbxPoo3QgeEQg3Bg%2BEcA6fjj%2FKx4GO0VkUutfmqtFAwWrfEZCHY8equjNIi03vaf9i5Wp3va5eeNeMT18W66m2GdHFcCQpIaB2dkKyN53xQ7f2zDPtMFgs3icM0bX35tkmX4Hb0o8VQmPQpiHbDid2GSVKP0ZdBhDIhGLcYZUtlfYnlSqyk83tiXXrV2pHLmiikVKoLDWoakr5dcuulWJtXWxIcA5qrhtXvZUS9BymmOQ%2Fi%2BJrq1FoBsrydDRiJ7vdM0bvxK4bAELuoL0JPEeV7I%2BbL0QJfUqOXTl62LwZOzcgvmcIXroMsu%2BeoqYTaDguJprhxxTqV0jjS2vBAU9l6y2%2BKLBZDZvAjLyLBEay91LleH7Ymd4l92SG6CQOlL4yN%2B%2BLUb1cctVQxQJQnthD9KYyLuc6HVo4wnIu9vgY6pgGLDz%2BRDox%2FbEVRHCrtrkA4enwsm%2BSdrJ2PTlfB9fWFbRz%2FCPmSvaEzJTrUYjOttyIKh3CxHnhLCe%2Ba0xLh7jLOHR13M7kxpDDmxzbB7Z4AGx0%2B3qOb1SDx0hOWQpomsAjRFXOw3okpdUVyfLbzNBf8hqbsrNOyFWIx%2FLmbWQ38C8ZUkDJjzLIvZ95l98%2Bou7C8Zmt7p9QUu8jqtnZd40Ld0VlgHHms&X-Amz-Signature=db84a46958de6b506b0e322a7bd667d3eace8aef22daf9ef88203ba76cb2352c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3KTVCFG%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIBSsiXEV0KqjLVLDaqH4l8oGe6Ri73PkLyrrkFlZa%2BvfAiBIkdGaViFAM4%2Bxz0BZQ%2Bsg90SUsF4pn99PQ%2BD4%2BDiAGiqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKCmpiNgLl91GhzGOKtwDBY73URnTuuZ8PUXkvipL6TDz%2Bvxrr5Kuy8sGllWbrGz7L7TTNTkaQJ729zlY%2F7GqD%2BKI8lQBhfLSYdkUzcWopoyjDCbtRYEtoXw2CGJrdLbnT6JOrfiPUcDxSbbgbC5yWBMckTMaedZZqqudjWilWdlGG0VEy5uNDJ9Hwa1I2%2B3PhtyjQA1hzBiF%2BhGT%2B1gl1xDotfGmS5yQVDLkFdjV7xFaVmbxPoo3QgeEQg3Bg%2BEcA6fjj%2FKx4GO0VkUutfmqtFAwWrfEZCHY8equjNIi03vaf9i5Wp3va5eeNeMT18W66m2GdHFcCQpIaB2dkKyN53xQ7f2zDPtMFgs3icM0bX35tkmX4Hb0o8VQmPQpiHbDid2GSVKP0ZdBhDIhGLcYZUtlfYnlSqyk83tiXXrV2pHLmiikVKoLDWoakr5dcuulWJtXWxIcA5qrhtXvZUS9BymmOQ%2Fi%2BJrq1FoBsrydDRiJ7vdM0bvxK4bAELuoL0JPEeV7I%2BbL0QJfUqOXTl62LwZOzcgvmcIXroMsu%2BeoqYTaDguJprhxxTqV0jjS2vBAU9l6y2%2BKLBZDZvAjLyLBEay91LleH7Ymd4l92SG6CQOlL4yN%2B%2BLUb1cctVQxQJQnthD9KYyLuc6HVo4wnIu9vgY6pgGLDz%2BRDox%2FbEVRHCrtrkA4enwsm%2BSdrJ2PTlfB9fWFbRz%2FCPmSvaEzJTrUYjOttyIKh3CxHnhLCe%2Ba0xLh7jLOHR13M7kxpDDmxzbB7Z4AGx0%2B3qOb1SDx0hOWQpomsAjRFXOw3okpdUVyfLbzNBf8hqbsrNOyFWIx%2FLmbWQ38C8ZUkDJjzLIvZ95l98%2Bou7C8Zmt7p9QUu8jqtnZd40Ld0VlgHHms&X-Amz-Signature=e6b7fac4fa97baad5dbbb2842f4aeff7db8f0b16f8afb4f7cfedebbd22d1fc5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

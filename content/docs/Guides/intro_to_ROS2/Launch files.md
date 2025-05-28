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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKISXKP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLKrdz7AbR%2BnSSR9nw2T%2BsJN0J0kWg32jEDc7f7kgLuAiEAgHkuTW3wT2yRPM5DjdflU8IplsIzyw1Ktj4JVhDr%2Fuoq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB6dz15z5RaVrk01MircA%2BXpn1Fr82Igu%2FhmMd63c61x7VdRBVeGDN7EFuMbsgHq8bkoElkhhFko5w8jU2Ubmf%2BvYpyx%2Bo%2ByqBTghs9ELgGx2xC2AxzhQjSTd2o3BD6Xbl37%2FkwBup0FCjT2aqDRDMeD0yAwAu%2BWbqe8Ctsa6LQd4LTBpKW%2FK%2F2zYAlm9V2dcW0z4wnmY33ycsU9m1FyXKJjdrxvRFrFcYXg9nl7ZMIUgditpB5O8xqEg1QQmRWFihmOLQNqolTktYSjha%2Bgk4SlSHfSACvxqSbGa3BPjIUQ1XinUdTq0dhII3c52SUwG6HP7Rol09nUSqHBYoBhHTb99DZXiSL7LlnuztqY7FWtPSj%2FuZyKMhMaXZNpHRAbdT8%2F3biaWljAchVvBcqULdF7bqh4UgbfMOaFi3V7X1N5Mf0ZExgwANw4tt02pWmcmRFvOUJ5rDshuRdHsUyGRwtcRTPgxxr9QgAzdI4%2Busezs2brA%2BLv2PHTa7LaWFd4jPtM2KeJcAE0b%2Bn%2F65E7U79JwmHCozA5vns3hHvSNxUCLoKLv4KPT1JFZWLrv6KejqVmBYwhKnMiKn635MuU%2FMIj2jGs6LJ%2FvQCgdcdZwnyYByhDWtuzvIeytDIcUlhGCTPSQqK9nE7UHTAcMMGY2sEGOqUBILVFQIW%2Fdgl1yHCGGApVyYQISiJpRds3Pjavkoo6fdwVi9JKPrBlzAaT01RijKBRyZU7s5ZoKJ7f5IKRQCkX7HykVz03chDph2Oaxt6y9Ms%2F6hjSs48ZXSYvdcfQFiRt1AfLAd8YbSoUeKMxHWh97VJU%2F8hnYTK%2BW3i%2Bq2C0QqllMTYjLA3j3FFX%2FW2Ay4SMiVaaFhDbXkASdQ%2F0Q%2B4Cuf9MQlIM&X-Amz-Signature=36113903bbec36636b0fb4dcf674e585dd22d7203985e171539461966ef283c8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKISXKP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLKrdz7AbR%2BnSSR9nw2T%2BsJN0J0kWg32jEDc7f7kgLuAiEAgHkuTW3wT2yRPM5DjdflU8IplsIzyw1Ktj4JVhDr%2Fuoq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB6dz15z5RaVrk01MircA%2BXpn1Fr82Igu%2FhmMd63c61x7VdRBVeGDN7EFuMbsgHq8bkoElkhhFko5w8jU2Ubmf%2BvYpyx%2Bo%2ByqBTghs9ELgGx2xC2AxzhQjSTd2o3BD6Xbl37%2FkwBup0FCjT2aqDRDMeD0yAwAu%2BWbqe8Ctsa6LQd4LTBpKW%2FK%2F2zYAlm9V2dcW0z4wnmY33ycsU9m1FyXKJjdrxvRFrFcYXg9nl7ZMIUgditpB5O8xqEg1QQmRWFihmOLQNqolTktYSjha%2Bgk4SlSHfSACvxqSbGa3BPjIUQ1XinUdTq0dhII3c52SUwG6HP7Rol09nUSqHBYoBhHTb99DZXiSL7LlnuztqY7FWtPSj%2FuZyKMhMaXZNpHRAbdT8%2F3biaWljAchVvBcqULdF7bqh4UgbfMOaFi3V7X1N5Mf0ZExgwANw4tt02pWmcmRFvOUJ5rDshuRdHsUyGRwtcRTPgxxr9QgAzdI4%2Busezs2brA%2BLv2PHTa7LaWFd4jPtM2KeJcAE0b%2Bn%2F65E7U79JwmHCozA5vns3hHvSNxUCLoKLv4KPT1JFZWLrv6KejqVmBYwhKnMiKn635MuU%2FMIj2jGs6LJ%2FvQCgdcdZwnyYByhDWtuzvIeytDIcUlhGCTPSQqK9nE7UHTAcMMGY2sEGOqUBILVFQIW%2Fdgl1yHCGGApVyYQISiJpRds3Pjavkoo6fdwVi9JKPrBlzAaT01RijKBRyZU7s5ZoKJ7f5IKRQCkX7HykVz03chDph2Oaxt6y9Ms%2F6hjSs48ZXSYvdcfQFiRt1AfLAd8YbSoUeKMxHWh97VJU%2F8hnYTK%2BW3i%2Bq2C0QqllMTYjLA3j3FFX%2FW2Ay4SMiVaaFhDbXkASdQ%2F0Q%2B4Cuf9MQlIM&X-Amz-Signature=5bb1ac547e5dcf3dbbce4bc07297c5319ff268c13e205036edf5bbb413ba66d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GKISXKP%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLKrdz7AbR%2BnSSR9nw2T%2BsJN0J0kWg32jEDc7f7kgLuAiEAgHkuTW3wT2yRPM5DjdflU8IplsIzyw1Ktj4JVhDr%2Fuoq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDB6dz15z5RaVrk01MircA%2BXpn1Fr82Igu%2FhmMd63c61x7VdRBVeGDN7EFuMbsgHq8bkoElkhhFko5w8jU2Ubmf%2BvYpyx%2Bo%2ByqBTghs9ELgGx2xC2AxzhQjSTd2o3BD6Xbl37%2FkwBup0FCjT2aqDRDMeD0yAwAu%2BWbqe8Ctsa6LQd4LTBpKW%2FK%2F2zYAlm9V2dcW0z4wnmY33ycsU9m1FyXKJjdrxvRFrFcYXg9nl7ZMIUgditpB5O8xqEg1QQmRWFihmOLQNqolTktYSjha%2Bgk4SlSHfSACvxqSbGa3BPjIUQ1XinUdTq0dhII3c52SUwG6HP7Rol09nUSqHBYoBhHTb99DZXiSL7LlnuztqY7FWtPSj%2FuZyKMhMaXZNpHRAbdT8%2F3biaWljAchVvBcqULdF7bqh4UgbfMOaFi3V7X1N5Mf0ZExgwANw4tt02pWmcmRFvOUJ5rDshuRdHsUyGRwtcRTPgxxr9QgAzdI4%2Busezs2brA%2BLv2PHTa7LaWFd4jPtM2KeJcAE0b%2Bn%2F65E7U79JwmHCozA5vns3hHvSNxUCLoKLv4KPT1JFZWLrv6KejqVmBYwhKnMiKn635MuU%2FMIj2jGs6LJ%2FvQCgdcdZwnyYByhDWtuzvIeytDIcUlhGCTPSQqK9nE7UHTAcMMGY2sEGOqUBILVFQIW%2Fdgl1yHCGGApVyYQISiJpRds3Pjavkoo6fdwVi9JKPrBlzAaT01RijKBRyZU7s5ZoKJ7f5IKRQCkX7HykVz03chDph2Oaxt6y9Ms%2F6hjSs48ZXSYvdcfQFiRt1AfLAd8YbSoUeKMxHWh97VJU%2F8hnYTK%2BW3i%2Bq2C0QqllMTYjLA3j3FFX%2FW2Ay4SMiVaaFhDbXkASdQ%2F0Q%2B4Cuf9MQlIM&X-Amz-Signature=eb040d5183d641f6b8798e1a6f8e745f28fdf0b5df17458dba970db3a2812ada&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

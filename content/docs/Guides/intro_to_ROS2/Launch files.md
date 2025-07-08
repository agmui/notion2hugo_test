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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4GQBQZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwLwdtnnONVBpWnPdrM1j1X3fL5yvlBXJ8cuGnXmqqBAiB2nrGwTc%2Fk3lGBdrd3k4LP0TFXi2rQorDv84NCUpuJ8CqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa45wR2IY1R%2BEuKF4KtwDN2Ba7uS4lmaLwQ%2FjWWf%2BNN5eGsXJ%2FQBb87Izvkgl38dEkImYZt8KXcceRI4gYFd51859Pv7ZpLFLTxloW%2B3FWjQZgTKgc%2Fg1XQLgdnr5fODZJZ58y302oHla0ZKUL2ZRhR9qxbyFLl7m3Wf7oVMDSI7Lw32xozcYls8%2Fp6%2FkG9tS1eHm834y1dlRgxdoZz6t7MH42aqs%2FSmA%2BhuPa%2Bsizt4zTLTWQZ8NxJCw8MOMXIv6EfYvawT1Cw7yRgEOPzRzN4eyR6z7Srv1YQuzdGu4aHaQK%2FehK%2BXVrTOwwIlogVhBROs4r0NGJmksvwZHdbLFFYZAdvmQd%2B8kJxsN8Dd1ghamAkuFHfswc0V0ajvJAgQbsSQUpzwJYZ9sFYUIrRTJw6tzzCdnUYY%2FawNAqssmM4hBr8qnfX%2FAImmc%2B1GEbvkhkxJ3JV3hyFxMmgglpuo%2FUTnfgoceESUjynM5Ffiwzl5RggU%2FCO%2BbKNfcz%2F6bEnGwPZdUtleqw%2Fvj%2FoRCB9vB%2BcR9PYuuv77ljIP00b5cJE6JuSMk8nZWW%2BUoA6J8uj%2FFi15JRBCOKFs6IhiR6xQPvO3qpxGmzjxo0800y%2BmoOXNZZ%2B%2B4WvAV3pQ4yW%2BV65pfGE3%2FudHwFJ%2BJi2Mw6P%2B0wwY6pgGD8KYsb0AL5yU26rIU2xMko0O9SNkQvmuMxy8W%2BFHPo5LIrInklAwfxRfgZUg7Xa%2BBBpqfS9s%2BsemEjI%2FfwRm2NFBOBmHrUmVg5xVmHW3UdyasvK1Ry7H9Bu%2BTE9ZjLtPryd2%2B3RBwtoqv5GHmtXuB3kn07ky9O41bbUam2JtFRAeYP2%2BVPIWf12cem%2BgCbPef0HZB2Yt415P%2FwlcIL0jPEo7NLZEy&X-Amz-Signature=b7810967fc423f4fde1937d9bcff96d75ad6a35344f9abc414d8ea1fdc829f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4GQBQZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwLwdtnnONVBpWnPdrM1j1X3fL5yvlBXJ8cuGnXmqqBAiB2nrGwTc%2Fk3lGBdrd3k4LP0TFXi2rQorDv84NCUpuJ8CqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa45wR2IY1R%2BEuKF4KtwDN2Ba7uS4lmaLwQ%2FjWWf%2BNN5eGsXJ%2FQBb87Izvkgl38dEkImYZt8KXcceRI4gYFd51859Pv7ZpLFLTxloW%2B3FWjQZgTKgc%2Fg1XQLgdnr5fODZJZ58y302oHla0ZKUL2ZRhR9qxbyFLl7m3Wf7oVMDSI7Lw32xozcYls8%2Fp6%2FkG9tS1eHm834y1dlRgxdoZz6t7MH42aqs%2FSmA%2BhuPa%2Bsizt4zTLTWQZ8NxJCw8MOMXIv6EfYvawT1Cw7yRgEOPzRzN4eyR6z7Srv1YQuzdGu4aHaQK%2FehK%2BXVrTOwwIlogVhBROs4r0NGJmksvwZHdbLFFYZAdvmQd%2B8kJxsN8Dd1ghamAkuFHfswc0V0ajvJAgQbsSQUpzwJYZ9sFYUIrRTJw6tzzCdnUYY%2FawNAqssmM4hBr8qnfX%2FAImmc%2B1GEbvkhkxJ3JV3hyFxMmgglpuo%2FUTnfgoceESUjynM5Ffiwzl5RggU%2FCO%2BbKNfcz%2F6bEnGwPZdUtleqw%2Fvj%2FoRCB9vB%2BcR9PYuuv77ljIP00b5cJE6JuSMk8nZWW%2BUoA6J8uj%2FFi15JRBCOKFs6IhiR6xQPvO3qpxGmzjxo0800y%2BmoOXNZZ%2B%2B4WvAV3pQ4yW%2BV65pfGE3%2FudHwFJ%2BJi2Mw6P%2B0wwY6pgGD8KYsb0AL5yU26rIU2xMko0O9SNkQvmuMxy8W%2BFHPo5LIrInklAwfxRfgZUg7Xa%2BBBpqfS9s%2BsemEjI%2FfwRm2NFBOBmHrUmVg5xVmHW3UdyasvK1Ry7H9Bu%2BTE9ZjLtPryd2%2B3RBwtoqv5GHmtXuB3kn07ky9O41bbUam2JtFRAeYP2%2BVPIWf12cem%2BgCbPef0HZB2Yt415P%2FwlcIL0jPEo7NLZEy&X-Amz-Signature=55e306c5f250805907ce4a1998515062135cb20f38ae5a5a18d1d5580f0a4348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4GQBQZ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T170954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwLwdtnnONVBpWnPdrM1j1X3fL5yvlBXJ8cuGnXmqqBAiB2nrGwTc%2Fk3lGBdrd3k4LP0TFXi2rQorDv84NCUpuJ8CqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa45wR2IY1R%2BEuKF4KtwDN2Ba7uS4lmaLwQ%2FjWWf%2BNN5eGsXJ%2FQBb87Izvkgl38dEkImYZt8KXcceRI4gYFd51859Pv7ZpLFLTxloW%2B3FWjQZgTKgc%2Fg1XQLgdnr5fODZJZ58y302oHla0ZKUL2ZRhR9qxbyFLl7m3Wf7oVMDSI7Lw32xozcYls8%2Fp6%2FkG9tS1eHm834y1dlRgxdoZz6t7MH42aqs%2FSmA%2BhuPa%2Bsizt4zTLTWQZ8NxJCw8MOMXIv6EfYvawT1Cw7yRgEOPzRzN4eyR6z7Srv1YQuzdGu4aHaQK%2FehK%2BXVrTOwwIlogVhBROs4r0NGJmksvwZHdbLFFYZAdvmQd%2B8kJxsN8Dd1ghamAkuFHfswc0V0ajvJAgQbsSQUpzwJYZ9sFYUIrRTJw6tzzCdnUYY%2FawNAqssmM4hBr8qnfX%2FAImmc%2B1GEbvkhkxJ3JV3hyFxMmgglpuo%2FUTnfgoceESUjynM5Ffiwzl5RggU%2FCO%2BbKNfcz%2F6bEnGwPZdUtleqw%2Fvj%2FoRCB9vB%2BcR9PYuuv77ljIP00b5cJE6JuSMk8nZWW%2BUoA6J8uj%2FFi15JRBCOKFs6IhiR6xQPvO3qpxGmzjxo0800y%2BmoOXNZZ%2B%2B4WvAV3pQ4yW%2BV65pfGE3%2FudHwFJ%2BJi2Mw6P%2B0wwY6pgGD8KYsb0AL5yU26rIU2xMko0O9SNkQvmuMxy8W%2BFHPo5LIrInklAwfxRfgZUg7Xa%2BBBpqfS9s%2BsemEjI%2FfwRm2NFBOBmHrUmVg5xVmHW3UdyasvK1Ry7H9Bu%2BTE9ZjLtPryd2%2B3RBwtoqv5GHmtXuB3kn07ky9O41bbUam2JtFRAeYP2%2BVPIWf12cem%2BgCbPef0HZB2Yt415P%2FwlcIL0jPEo7NLZEy&X-Amz-Signature=3ff366d03c5c07da4e64a407ec9f53755aa4be23b1723868f94eef1fda8bdf98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

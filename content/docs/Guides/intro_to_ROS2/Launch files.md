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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUWPDAS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIELS%2F8we0tgQy%2B%2FwnilM7dcGZwNWmYpmESDolDY%2FGkN3AiAufv99v2Afv%2FPvbHRoqwTjSDb4zvnvUGzh8clpQOoA9ir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMN95u8gQ6NQ8HdJzMKtwDpH3ail%2Brq8FKAR7RrcVRhNijQKpnxhfKb%2FSOEJBY8EoklCIlbrom7WnT6KcvBHzBdp%2BqbagY1DbPyD6XOLWbD3lTK6AyAp0LTsRotoiUECe33EytrsF2zNHSTURDOg6m%2BalnjCpCYAlpV%2FVvd4%2B8HClQI9Gng40ggC%2Fs2DUAR6ZF5hWRfpCaWe45kd%2F8TN6XzMfiPvVFOD5s9zWt43N7f15K9jVnMKszYC3csVDQKuBd%2B97vikplvHpMUcFMVKhpDsPR7il1WWNdEtbtiYfFJJBZPB%2FKeQcW9FwiGnyQAzS4C8qd7U%2FAcIMS7viOsjaRGr%2FHsXc4ELDubnlg11tURhjJeDjsoNWvIySCsD4ks90r1DSredhDqQWRv8jYuWvWZZx51oBfnPRRXAvC1u7T0leGJ4XaefCLs9Xkm3w3AWg%2FOvPuZDuxUxpJP3uZDO1sqrbse6EBgCdX%2FDGX8we4%2BGXiNJ3kgeePnOGBZlw%2FDo8qWkEH0hh8Q5y1UEtN3OJFmcDWA4yod%2FLBwokJ9WbEQvnqhLcnuVejtgBhyRzuTBAXNhQD7ycLQVi5UG6tyeOV0wD1bs7iSMXFM4GsqVCiIdP%2BbF3KYi8dau3ZFc3B%2FDUb82LVNdTFQD%2FP26ow2Z6OvQY6pgEjlu9ot2WmxG3zMs3zHrCkr5a9RRsKIwmSW11Ktcvn5oprirztHYBv1RRAbpjvzIdmlRrTRTpWoJzIhPMm%2Bvwjzj7APBeP2mMBoz1PbMu7FR4dhFMnnEK%2FJBOSdeCfA94i%2Fm2viS%2B2aPywp73e9gzxmETGRLvYWyu3ZBKR6G%2FiL%2BIAynLlIevkWiUPNQK0TzCRld9gEezLwO2iiP9j3p9rpEAqWQRd&X-Amz-Signature=2dabfa14eab07309714f5542dc91a4f14ec3d49723ad558e69f32b40cd6b7821&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUWPDAS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIELS%2F8we0tgQy%2B%2FwnilM7dcGZwNWmYpmESDolDY%2FGkN3AiAufv99v2Afv%2FPvbHRoqwTjSDb4zvnvUGzh8clpQOoA9ir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMN95u8gQ6NQ8HdJzMKtwDpH3ail%2Brq8FKAR7RrcVRhNijQKpnxhfKb%2FSOEJBY8EoklCIlbrom7WnT6KcvBHzBdp%2BqbagY1DbPyD6XOLWbD3lTK6AyAp0LTsRotoiUECe33EytrsF2zNHSTURDOg6m%2BalnjCpCYAlpV%2FVvd4%2B8HClQI9Gng40ggC%2Fs2DUAR6ZF5hWRfpCaWe45kd%2F8TN6XzMfiPvVFOD5s9zWt43N7f15K9jVnMKszYC3csVDQKuBd%2B97vikplvHpMUcFMVKhpDsPR7il1WWNdEtbtiYfFJJBZPB%2FKeQcW9FwiGnyQAzS4C8qd7U%2FAcIMS7viOsjaRGr%2FHsXc4ELDubnlg11tURhjJeDjsoNWvIySCsD4ks90r1DSredhDqQWRv8jYuWvWZZx51oBfnPRRXAvC1u7T0leGJ4XaefCLs9Xkm3w3AWg%2FOvPuZDuxUxpJP3uZDO1sqrbse6EBgCdX%2FDGX8we4%2BGXiNJ3kgeePnOGBZlw%2FDo8qWkEH0hh8Q5y1UEtN3OJFmcDWA4yod%2FLBwokJ9WbEQvnqhLcnuVejtgBhyRzuTBAXNhQD7ycLQVi5UG6tyeOV0wD1bs7iSMXFM4GsqVCiIdP%2BbF3KYi8dau3ZFc3B%2FDUb82LVNdTFQD%2FP26ow2Z6OvQY6pgEjlu9ot2WmxG3zMs3zHrCkr5a9RRsKIwmSW11Ktcvn5oprirztHYBv1RRAbpjvzIdmlRrTRTpWoJzIhPMm%2Bvwjzj7APBeP2mMBoz1PbMu7FR4dhFMnnEK%2FJBOSdeCfA94i%2Fm2viS%2B2aPywp73e9gzxmETGRLvYWyu3ZBKR6G%2FiL%2BIAynLlIevkWiUPNQK0TzCRld9gEezLwO2iiP9j3p9rpEAqWQRd&X-Amz-Signature=eeaaa698ea84be65dc72c9178e563f4cacc359a61fa1f02aa9b4cfd0973b9e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUWPDAS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIELS%2F8we0tgQy%2B%2FwnilM7dcGZwNWmYpmESDolDY%2FGkN3AiAufv99v2Afv%2FPvbHRoqwTjSDb4zvnvUGzh8clpQOoA9ir%2FAwhJEAAaDDYzNzQyMzE4MzgwNSIMN95u8gQ6NQ8HdJzMKtwDpH3ail%2Brq8FKAR7RrcVRhNijQKpnxhfKb%2FSOEJBY8EoklCIlbrom7WnT6KcvBHzBdp%2BqbagY1DbPyD6XOLWbD3lTK6AyAp0LTsRotoiUECe33EytrsF2zNHSTURDOg6m%2BalnjCpCYAlpV%2FVvd4%2B8HClQI9Gng40ggC%2Fs2DUAR6ZF5hWRfpCaWe45kd%2F8TN6XzMfiPvVFOD5s9zWt43N7f15K9jVnMKszYC3csVDQKuBd%2B97vikplvHpMUcFMVKhpDsPR7il1WWNdEtbtiYfFJJBZPB%2FKeQcW9FwiGnyQAzS4C8qd7U%2FAcIMS7viOsjaRGr%2FHsXc4ELDubnlg11tURhjJeDjsoNWvIySCsD4ks90r1DSredhDqQWRv8jYuWvWZZx51oBfnPRRXAvC1u7T0leGJ4XaefCLs9Xkm3w3AWg%2FOvPuZDuxUxpJP3uZDO1sqrbse6EBgCdX%2FDGX8we4%2BGXiNJ3kgeePnOGBZlw%2FDo8qWkEH0hh8Q5y1UEtN3OJFmcDWA4yod%2FLBwokJ9WbEQvnqhLcnuVejtgBhyRzuTBAXNhQD7ycLQVi5UG6tyeOV0wD1bs7iSMXFM4GsqVCiIdP%2BbF3KYi8dau3ZFc3B%2FDUb82LVNdTFQD%2FP26ow2Z6OvQY6pgEjlu9ot2WmxG3zMs3zHrCkr5a9RRsKIwmSW11Ktcvn5oprirztHYBv1RRAbpjvzIdmlRrTRTpWoJzIhPMm%2Bvwjzj7APBeP2mMBoz1PbMu7FR4dhFMnnEK%2FJBOSdeCfA94i%2Fm2viS%2B2aPywp73e9gzxmETGRLvYWyu3ZBKR6G%2FiL%2BIAynLlIevkWiUPNQK0TzCRld9gEezLwO2iiP9j3p9rpEAqWQRd&X-Amz-Signature=36a98e8c5aa6f0281cd93a2c8ad4cdae5b50470a1db9abfa4fc708c8441b1f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

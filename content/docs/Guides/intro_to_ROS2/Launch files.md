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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVA7VYVT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw2rR18dWeJQKtRZ45MWwTfeGZSf7HMUI9zJ2eVSZkuAiEA7sYgeeVGnHK7NqHFhbZpC7zdH8gOkJDsjcdirNEWI50q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFlA8yYSRLK5fzxdNyrcAxcH6i%2FEQkWYyasj2et%2FiJIJarxC%2FADVoaAuG%2B5Zu1xhcCVvgnJJ%2Bk4IwZxtg1tcJQiAwFJwWJgdT4laz0PS6IF0zYSCPuNn9lrQlQa%2Fvj7RPebg98JBYJL4nP6lWg9wcgGsTiK5nY6eYEoz62gQQDhUQsjcpHy677BvukzMnuFx1fsvE18%2FGP%2FGR5KzGEAmvqnTLiN3%2BDIBzMR0BiJ4NXiHugETVLeHfGKgmBxhkD0LSIN1b3pIfP31VLqlaICXn5e9oFB%2FpgSoM9FUAFA4R6gtwvDOWvzMSCvTLnq3CzrZy%2BBkhCD0fNIFPp1p63a1lDZPvA7vi3uc6gAoZch7JKgev4qFoUDSb5SpwzQHxPeZy67vd5ypL3TT9uweS%2ByCYkV8%2FKSfBLrOs%2FpBz9D%2FlxALbnaA3J1K7eCTOZ3s1KY3OnNIlQEsmHNMlEYhPgyJ%2BLYzC14AgMKUX7usmYvwKs%2B%2BPQKkgGD6hr16ArX0twbg24BjIPFXgE3mbr%2Fu%2FhPPd0cEVN%2FHy2zYnJd2dSlo2iDFqTXUw%2BSYofyWbjnG5pTCUidlO3HDstWgHrWaaXPv4pcqeks%2FuUmj2qjiqsp%2BC6uUamQT4bMQvdq%2BD1CI7Cnsw1jyynyfJ%2FlOnia9MNSNkr8GOqUBM3C1u607qATA6GpVpxIVWoZeeZcCY78NGlKZo23vn%2FDWV8aBSMV3Un%2FfHdoysCKFYZphGLlh6LLbISfHxeIaE1E8wfJ18xY593LnGlGswE0GA75ySeh2%2BdcAxRz6R7FPjr5pJmu%2Fd1Ztj5PNrH91aWol%2BqZrHabe%2B7ufsaF2h5z%2F1xMeh1OEtttQ2r%2B%2B3VYzMPbCMgdNc6RnEsE7iTyrmgs7VZto&X-Amz-Signature=8d44ec64afb5b3c6672d74df9d7e92598e32532a324a4e45ce2c02af353212ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVA7VYVT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw2rR18dWeJQKtRZ45MWwTfeGZSf7HMUI9zJ2eVSZkuAiEA7sYgeeVGnHK7NqHFhbZpC7zdH8gOkJDsjcdirNEWI50q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFlA8yYSRLK5fzxdNyrcAxcH6i%2FEQkWYyasj2et%2FiJIJarxC%2FADVoaAuG%2B5Zu1xhcCVvgnJJ%2Bk4IwZxtg1tcJQiAwFJwWJgdT4laz0PS6IF0zYSCPuNn9lrQlQa%2Fvj7RPebg98JBYJL4nP6lWg9wcgGsTiK5nY6eYEoz62gQQDhUQsjcpHy677BvukzMnuFx1fsvE18%2FGP%2FGR5KzGEAmvqnTLiN3%2BDIBzMR0BiJ4NXiHugETVLeHfGKgmBxhkD0LSIN1b3pIfP31VLqlaICXn5e9oFB%2FpgSoM9FUAFA4R6gtwvDOWvzMSCvTLnq3CzrZy%2BBkhCD0fNIFPp1p63a1lDZPvA7vi3uc6gAoZch7JKgev4qFoUDSb5SpwzQHxPeZy67vd5ypL3TT9uweS%2ByCYkV8%2FKSfBLrOs%2FpBz9D%2FlxALbnaA3J1K7eCTOZ3s1KY3OnNIlQEsmHNMlEYhPgyJ%2BLYzC14AgMKUX7usmYvwKs%2B%2BPQKkgGD6hr16ArX0twbg24BjIPFXgE3mbr%2Fu%2FhPPd0cEVN%2FHy2zYnJd2dSlo2iDFqTXUw%2BSYofyWbjnG5pTCUidlO3HDstWgHrWaaXPv4pcqeks%2FuUmj2qjiqsp%2BC6uUamQT4bMQvdq%2BD1CI7Cnsw1jyynyfJ%2FlOnia9MNSNkr8GOqUBM3C1u607qATA6GpVpxIVWoZeeZcCY78NGlKZo23vn%2FDWV8aBSMV3Un%2FfHdoysCKFYZphGLlh6LLbISfHxeIaE1E8wfJ18xY593LnGlGswE0GA75ySeh2%2BdcAxRz6R7FPjr5pJmu%2Fd1Ztj5PNrH91aWol%2BqZrHabe%2B7ufsaF2h5z%2F1xMeh1OEtttQ2r%2B%2B3VYzMPbCMgdNc6RnEsE7iTyrmgs7VZto&X-Amz-Signature=d392eaee669e5da365e47a397403c093225141cc8bc885f801e32fc3c829e308&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVA7VYVT%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T021803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw2rR18dWeJQKtRZ45MWwTfeGZSf7HMUI9zJ2eVSZkuAiEA7sYgeeVGnHK7NqHFhbZpC7zdH8gOkJDsjcdirNEWI50q%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFlA8yYSRLK5fzxdNyrcAxcH6i%2FEQkWYyasj2et%2FiJIJarxC%2FADVoaAuG%2B5Zu1xhcCVvgnJJ%2Bk4IwZxtg1tcJQiAwFJwWJgdT4laz0PS6IF0zYSCPuNn9lrQlQa%2Fvj7RPebg98JBYJL4nP6lWg9wcgGsTiK5nY6eYEoz62gQQDhUQsjcpHy677BvukzMnuFx1fsvE18%2FGP%2FGR5KzGEAmvqnTLiN3%2BDIBzMR0BiJ4NXiHugETVLeHfGKgmBxhkD0LSIN1b3pIfP31VLqlaICXn5e9oFB%2FpgSoM9FUAFA4R6gtwvDOWvzMSCvTLnq3CzrZy%2BBkhCD0fNIFPp1p63a1lDZPvA7vi3uc6gAoZch7JKgev4qFoUDSb5SpwzQHxPeZy67vd5ypL3TT9uweS%2ByCYkV8%2FKSfBLrOs%2FpBz9D%2FlxALbnaA3J1K7eCTOZ3s1KY3OnNIlQEsmHNMlEYhPgyJ%2BLYzC14AgMKUX7usmYvwKs%2B%2BPQKkgGD6hr16ArX0twbg24BjIPFXgE3mbr%2Fu%2FhPPd0cEVN%2FHy2zYnJd2dSlo2iDFqTXUw%2BSYofyWbjnG5pTCUidlO3HDstWgHrWaaXPv4pcqeks%2FuUmj2qjiqsp%2BC6uUamQT4bMQvdq%2BD1CI7Cnsw1jyynyfJ%2FlOnia9MNSNkr8GOqUBM3C1u607qATA6GpVpxIVWoZeeZcCY78NGlKZo23vn%2FDWV8aBSMV3Un%2FfHdoysCKFYZphGLlh6LLbISfHxeIaE1E8wfJ18xY593LnGlGswE0GA75ySeh2%2BdcAxRz6R7FPjr5pJmu%2Fd1Ztj5PNrH91aWol%2BqZrHabe%2B7ufsaF2h5z%2F1xMeh1OEtttQ2r%2B%2B3VYzMPbCMgdNc6RnEsE7iTyrmgs7VZto&X-Amz-Signature=52f84301b0e1aa69499adc1ad3d8f136e00196102b01c69fbf6c5cdda286ccc0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

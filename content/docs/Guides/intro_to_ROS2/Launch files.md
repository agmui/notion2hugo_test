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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6O4UUX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDIkfxd%2FfAPA9MRzcN98mplzte%2FLtPLWj4Ifp1VEuN5KwIhAMk%2FdVw%2FiWMeKrkNm8OpCdGT92BASXK59FCOoNW4OAhbKv8DCBcQABoMNjM3NDIzMTgzODA1IgzQt8dUPbzUClkVH80q3AO100wVtE5vphiKV8JU2%2Bv3MUq8%2Bb%2BDijShm2CM3H5Yxd9LuY8qX4gTQiakqtvf384cFEWnl7R2rATF1JaSnKBKM5PiIpHrmP7uXpzIEwAqsQuhb2nPbBvDVMIOGjtElO1%2Fn3f6jdbSUlmnwzyaz2G%2BrmWlL8JaVe3x5OXFVQ3slAlb9QCgJoR5ijJ89nlvSHf0yAUhtjyyFWTHoXDOklbstbsQkeng9laY%2FewzgzwWFfphX9c1IrfkY7Hd04IPQu0iC8MVYxefsAXFEYySbyPPMWGL1%2Bl0yRYSYQdmlNz3s2nogPpBmPiiokcm57MIr6jZlcIKqf%2FzF9iSDaTQkApBWdCvPyS8d5OV%2BnuJsIoIzam7GUEARIZQpbAaTpiPmDa%2BfDDPbTI9kBIjXQlq3SNTH3KaK77iYmV4eKOuyRERXcKsVKnfdaORas9kCvEm2WN%2F236Wz1k6vF43vYZ6LDyDDV48z2uS7Kpn6JjVqenKbUo%2BL7pEIeP5eIWXNt3YPCyu0Ud6sc7O05SzoLx6GbCrlLAT%2FI8bcYhZ6BC%2FDISa9j%2FVzVOxerZ42tNkXHYFcJmffomjIvXXCI%2B4pn4juOhnPUN2Poij3VbczW5GB8XCHSCeBHqTCjAydDDNzzCqhanABjqkAaa65dfcmexCI4yqn3zrSPpnN9iLwq5MAt%2FSjD%2FaFNBydoaqP0Rmb8iuIhc3g4c7%2B2BFQz9K0W1pxIX%2FWaw29VhHfsia6iUValFtbpB00xK2rtnXVTdwveXa2o2NU9BMNiWu%2F%2BFGpzt0xx%2BcoKt4XYmbF%2FEcid2sZxMmleYWSYEPQFkr1SwI5xhdaDfG55OW4ELgbq2ttAScdJGb%2BCIyVLSyQW4g&X-Amz-Signature=1ca7c381bcba2d09efd8943b120c5a7af4514d0a796e2990a0593e410ae0d9f4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6O4UUX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDIkfxd%2FfAPA9MRzcN98mplzte%2FLtPLWj4Ifp1VEuN5KwIhAMk%2FdVw%2FiWMeKrkNm8OpCdGT92BASXK59FCOoNW4OAhbKv8DCBcQABoMNjM3NDIzMTgzODA1IgzQt8dUPbzUClkVH80q3AO100wVtE5vphiKV8JU2%2Bv3MUq8%2Bb%2BDijShm2CM3H5Yxd9LuY8qX4gTQiakqtvf384cFEWnl7R2rATF1JaSnKBKM5PiIpHrmP7uXpzIEwAqsQuhb2nPbBvDVMIOGjtElO1%2Fn3f6jdbSUlmnwzyaz2G%2BrmWlL8JaVe3x5OXFVQ3slAlb9QCgJoR5ijJ89nlvSHf0yAUhtjyyFWTHoXDOklbstbsQkeng9laY%2FewzgzwWFfphX9c1IrfkY7Hd04IPQu0iC8MVYxefsAXFEYySbyPPMWGL1%2Bl0yRYSYQdmlNz3s2nogPpBmPiiokcm57MIr6jZlcIKqf%2FzF9iSDaTQkApBWdCvPyS8d5OV%2BnuJsIoIzam7GUEARIZQpbAaTpiPmDa%2BfDDPbTI9kBIjXQlq3SNTH3KaK77iYmV4eKOuyRERXcKsVKnfdaORas9kCvEm2WN%2F236Wz1k6vF43vYZ6LDyDDV48z2uS7Kpn6JjVqenKbUo%2BL7pEIeP5eIWXNt3YPCyu0Ud6sc7O05SzoLx6GbCrlLAT%2FI8bcYhZ6BC%2FDISa9j%2FVzVOxerZ42tNkXHYFcJmffomjIvXXCI%2B4pn4juOhnPUN2Poij3VbczW5GB8XCHSCeBHqTCjAydDDNzzCqhanABjqkAaa65dfcmexCI4yqn3zrSPpnN9iLwq5MAt%2FSjD%2FaFNBydoaqP0Rmb8iuIhc3g4c7%2B2BFQz9K0W1pxIX%2FWaw29VhHfsia6iUValFtbpB00xK2rtnXVTdwveXa2o2NU9BMNiWu%2F%2BFGpzt0xx%2BcoKt4XYmbF%2FEcid2sZxMmleYWSYEPQFkr1SwI5xhdaDfG55OW4ELgbq2ttAScdJGb%2BCIyVLSyQW4g&X-Amz-Signature=fe9acbeac9a0a031d7263e8f0c96ebdbaac6a9c888c394a413380e2138ba2dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY6O4UUX%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T140731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDIkfxd%2FfAPA9MRzcN98mplzte%2FLtPLWj4Ifp1VEuN5KwIhAMk%2FdVw%2FiWMeKrkNm8OpCdGT92BASXK59FCOoNW4OAhbKv8DCBcQABoMNjM3NDIzMTgzODA1IgzQt8dUPbzUClkVH80q3AO100wVtE5vphiKV8JU2%2Bv3MUq8%2Bb%2BDijShm2CM3H5Yxd9LuY8qX4gTQiakqtvf384cFEWnl7R2rATF1JaSnKBKM5PiIpHrmP7uXpzIEwAqsQuhb2nPbBvDVMIOGjtElO1%2Fn3f6jdbSUlmnwzyaz2G%2BrmWlL8JaVe3x5OXFVQ3slAlb9QCgJoR5ijJ89nlvSHf0yAUhtjyyFWTHoXDOklbstbsQkeng9laY%2FewzgzwWFfphX9c1IrfkY7Hd04IPQu0iC8MVYxefsAXFEYySbyPPMWGL1%2Bl0yRYSYQdmlNz3s2nogPpBmPiiokcm57MIr6jZlcIKqf%2FzF9iSDaTQkApBWdCvPyS8d5OV%2BnuJsIoIzam7GUEARIZQpbAaTpiPmDa%2BfDDPbTI9kBIjXQlq3SNTH3KaK77iYmV4eKOuyRERXcKsVKnfdaORas9kCvEm2WN%2F236Wz1k6vF43vYZ6LDyDDV48z2uS7Kpn6JjVqenKbUo%2BL7pEIeP5eIWXNt3YPCyu0Ud6sc7O05SzoLx6GbCrlLAT%2FI8bcYhZ6BC%2FDISa9j%2FVzVOxerZ42tNkXHYFcJmffomjIvXXCI%2B4pn4juOhnPUN2Poij3VbczW5GB8XCHSCeBHqTCjAydDDNzzCqhanABjqkAaa65dfcmexCI4yqn3zrSPpnN9iLwq5MAt%2FSjD%2FaFNBydoaqP0Rmb8iuIhc3g4c7%2B2BFQz9K0W1pxIX%2FWaw29VhHfsia6iUValFtbpB00xK2rtnXVTdwveXa2o2NU9BMNiWu%2F%2BFGpzt0xx%2BcoKt4XYmbF%2FEcid2sZxMmleYWSYEPQFkr1SwI5xhdaDfG55OW4ELgbq2ttAScdJGb%2BCIyVLSyQW4g&X-Amz-Signature=d19912c46690cf0480d1fe2a50db6963c6168d3a6edeb8c0d2b9c0b714e42f40&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

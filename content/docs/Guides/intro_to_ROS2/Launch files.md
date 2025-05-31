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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646BETE3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxRa0BgFjKNC1%2BHEqmnwsiAoOvBLsyJxgsJbxSFsIwTAiAwdInNbn0iRbYrYxj7l%2FxuhJlSaHN%2FR4z8Zd%2BBNjdZZyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyi%2BpUzUyb%2BJ3uJBrKtwDKQpz0rlV%2BYrC1tS50arD%2BcphIEbDQbW4nOFSl%2FDtU14eemYwf8CLy8LV5qkIYsDYXQ0ep8UDyNgZmKAgkUbe9PcI1FEIKMLb%2F50ZrLdSQ9P23drOB7KoMBuF2s1XukhY4%2F7ENVz4twH5AoRwDID4q4EYjDZ4O%2FYUdR%2B%2FbZjm7JRFyWWYvjdNNVF1ajE19cLetQeIKaKa3SEGzaG9H5rWzZYjAGZomhznZibKZUDH2plIKjXjScRNUZtkK1YHd4vVd5NrtoyDCHB1Ea3ZLvZKvQvdEgPGm0%2BI9E6lFnPfhXFm2AyeWccyiz%2BU8PwvT1lfKi1uIQ0SWw4vU79DF5NpAGCHDrt5UqE31uZrZtfr75ErPyJv%2B6RgVa%2FtSbmOGffO2bwBULhFmFbUgyAc433Z6sbIvP%2FDBavvnSqNo3hnEa5mrZMYgnqs3JmgCwUx%2F3Wnu9Vxgf0%2Bntj4BF4VPV%2FBYR6A5NVKlZq7od%2Fkbdp%2FK1cilkzEm1PK%2Fjc4FmX893WZ9KVYv7ULtzp9R30Kp0EfezOjwYAFsq7TYWAu%2B3Dh9xJNmvK0kXLBASQMS%2BKyfj3zLe%2BhX5IuRc%2FjD5ZJmF1daKhPoWkjE55V6ymiwzuu0wg8juPZQopXxF8r1IwwkITrwQY6pgHLPmimLsO7DMIKsCr3fnPiO3Mm%2Bf7gB13v%2B0Bn8ophUqGCpGO4vAoHxlXsfJUUk0yZpKNfFz%2F4t%2BryRqFz%2F99lajdGAD7UD%2B5CMXgz0qp0PjthvTc2bUr44u8urANhp7uJTU%2FSngu1qZa5Bfil0A2CxkA9XiT0usH4mpBzblrlfSwCrH19uDC5nwrEqtbQiGCqhB5VWQk3v%2F7gzRGHhU87UL6SWrbQ&X-Amz-Signature=353e43e0f300056defbca54d83ab321702c37f7195a5b89cb550847e95d37dc2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646BETE3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxRa0BgFjKNC1%2BHEqmnwsiAoOvBLsyJxgsJbxSFsIwTAiAwdInNbn0iRbYrYxj7l%2FxuhJlSaHN%2FR4z8Zd%2BBNjdZZyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyi%2BpUzUyb%2BJ3uJBrKtwDKQpz0rlV%2BYrC1tS50arD%2BcphIEbDQbW4nOFSl%2FDtU14eemYwf8CLy8LV5qkIYsDYXQ0ep8UDyNgZmKAgkUbe9PcI1FEIKMLb%2F50ZrLdSQ9P23drOB7KoMBuF2s1XukhY4%2F7ENVz4twH5AoRwDID4q4EYjDZ4O%2FYUdR%2B%2FbZjm7JRFyWWYvjdNNVF1ajE19cLetQeIKaKa3SEGzaG9H5rWzZYjAGZomhznZibKZUDH2plIKjXjScRNUZtkK1YHd4vVd5NrtoyDCHB1Ea3ZLvZKvQvdEgPGm0%2BI9E6lFnPfhXFm2AyeWccyiz%2BU8PwvT1lfKi1uIQ0SWw4vU79DF5NpAGCHDrt5UqE31uZrZtfr75ErPyJv%2B6RgVa%2FtSbmOGffO2bwBULhFmFbUgyAc433Z6sbIvP%2FDBavvnSqNo3hnEa5mrZMYgnqs3JmgCwUx%2F3Wnu9Vxgf0%2Bntj4BF4VPV%2FBYR6A5NVKlZq7od%2Fkbdp%2FK1cilkzEm1PK%2Fjc4FmX893WZ9KVYv7ULtzp9R30Kp0EfezOjwYAFsq7TYWAu%2B3Dh9xJNmvK0kXLBASQMS%2BKyfj3zLe%2BhX5IuRc%2FjD5ZJmF1daKhPoWkjE55V6ymiwzuu0wg8juPZQopXxF8r1IwwkITrwQY6pgHLPmimLsO7DMIKsCr3fnPiO3Mm%2Bf7gB13v%2B0Bn8ophUqGCpGO4vAoHxlXsfJUUk0yZpKNfFz%2F4t%2BryRqFz%2F99lajdGAD7UD%2B5CMXgz0qp0PjthvTc2bUr44u8urANhp7uJTU%2FSngu1qZa5Bfil0A2CxkA9XiT0usH4mpBzblrlfSwCrH19uDC5nwrEqtbQiGCqhB5VWQk3v%2F7gzRGHhU87UL6SWrbQ&X-Amz-Signature=ecbf410e1182b173b73580a1c67c2b9a11575cafaf676fb3f9090df5ffce3000&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646BETE3U%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxRa0BgFjKNC1%2BHEqmnwsiAoOvBLsyJxgsJbxSFsIwTAiAwdInNbn0iRbYrYxj7l%2FxuhJlSaHN%2FR4z8Zd%2BBNjdZZyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyi%2BpUzUyb%2BJ3uJBrKtwDKQpz0rlV%2BYrC1tS50arD%2BcphIEbDQbW4nOFSl%2FDtU14eemYwf8CLy8LV5qkIYsDYXQ0ep8UDyNgZmKAgkUbe9PcI1FEIKMLb%2F50ZrLdSQ9P23drOB7KoMBuF2s1XukhY4%2F7ENVz4twH5AoRwDID4q4EYjDZ4O%2FYUdR%2B%2FbZjm7JRFyWWYvjdNNVF1ajE19cLetQeIKaKa3SEGzaG9H5rWzZYjAGZomhznZibKZUDH2plIKjXjScRNUZtkK1YHd4vVd5NrtoyDCHB1Ea3ZLvZKvQvdEgPGm0%2BI9E6lFnPfhXFm2AyeWccyiz%2BU8PwvT1lfKi1uIQ0SWw4vU79DF5NpAGCHDrt5UqE31uZrZtfr75ErPyJv%2B6RgVa%2FtSbmOGffO2bwBULhFmFbUgyAc433Z6sbIvP%2FDBavvnSqNo3hnEa5mrZMYgnqs3JmgCwUx%2F3Wnu9Vxgf0%2Bntj4BF4VPV%2FBYR6A5NVKlZq7od%2Fkbdp%2FK1cilkzEm1PK%2Fjc4FmX893WZ9KVYv7ULtzp9R30Kp0EfezOjwYAFsq7TYWAu%2B3Dh9xJNmvK0kXLBASQMS%2BKyfj3zLe%2BhX5IuRc%2FjD5ZJmF1daKhPoWkjE55V6ymiwzuu0wg8juPZQopXxF8r1IwwkITrwQY6pgHLPmimLsO7DMIKsCr3fnPiO3Mm%2Bf7gB13v%2B0Bn8ophUqGCpGO4vAoHxlXsfJUUk0yZpKNfFz%2F4t%2BryRqFz%2F99lajdGAD7UD%2B5CMXgz0qp0PjthvTc2bUr44u8urANhp7uJTU%2FSngu1qZa5Bfil0A2CxkA9XiT0usH4mpBzblrlfSwCrH19uDC5nwrEqtbQiGCqhB5VWQk3v%2F7gzRGHhU87UL6SWrbQ&X-Amz-Signature=f0daec4ec369502475ddef330baf12736183874ce829b2c0bce0a21b580f5a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

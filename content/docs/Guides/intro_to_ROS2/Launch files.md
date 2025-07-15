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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FME36GC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCzy1IysdIrXPGZtQo6t%2BO7I%2BGgW5Gl%2FHW77ucJZfLuNgIgfzmqXDtkZUF0Xqpjy9ir%2B6hBTyueAi6fios8qSypm5sq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDNxd4kCKBzEBcZSLdyrcA6TBR3EQ4YmntYwW0rkGzC%2BdIonA3EW1HjlfLwUoo3QBIaWpP4q6jlGjwOzYHuM%2Bb%2Flk9e%2BpZM21TmPTUfroSralNoGclXASdl8dGuov%2FtQDeLEDDr9SLveOHAEj0EGvx5H549s%2BC7E057YqRKrl2fg5DnYJ9dutOmgsPyLgHQUVi0amAVkIS6H7TlpknRX8FTPqk2IzcyubfqgQLaSz%2BUI9DqNDJh118ciT44K%2FXM92cfBivFB3oQ8gcTTtLp%2FN0GT%2BAhiOZuD79%2BgWtFKvIxyZ1B7DtfNq6xYO504UDqC3He1gRbAGEtm4nS7dHgwHZ0rSPcoQ2cppGvtysQjZj7eE5QgXJ0Z6c%2FuukLFiKCYDju68kPvtqAUAbhjytMHTqsaVBGk6v1wxTchYEICjJQi5WrkBMfoK0Dbyx1D7Lkg%2FsYX8PR1Ky3wszVR2lzQwhP6DNoRf1W1fEpXBQF5KYR5ECD697UXnq0iFmi8ynZYGLTbyKz36BwEDPa8sh%2F0TQebtAgsULc4ODGf%2BEIcN9P2H34y5i3qj9JrNErcDicNl4QDoahau9dr%2Bq4x%2BCx7Qsbpu9T1bDso%2BWCg5CSleWsfDv%2FyZHs01a2BpcnxAsIuow35h5xIPURqCuuUfMIjV18MGOqUBLyRQsMfQX00gg2z%2FlmVxazt1WZAHO7h%2BS%2B37I%2BL%2BPVE9u6ymkRda7%2BfOFcC2HfP1KNkO%2FDiZPJugblG3vMmC%2Bz%2FnvJ3f0FZi%2FiO%2Fn1JJCVLFa6RMfSdPLAmsdI8Ccg8ztJRDCJBOb9p8dmUMCnUjtGL2b%2Bg7LrWuAmrBdw1Dz66vAC3FvJzgZCKS%2FAtKKZtUz35cf0ebkqXcaiXtKpjlN7RXcPu9&X-Amz-Signature=d7333237f8a600fc6e5f25f3c63e9edd51a8c1a83e7ae0aa182a4f4debef6ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FME36GC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCzy1IysdIrXPGZtQo6t%2BO7I%2BGgW5Gl%2FHW77ucJZfLuNgIgfzmqXDtkZUF0Xqpjy9ir%2B6hBTyueAi6fios8qSypm5sq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDNxd4kCKBzEBcZSLdyrcA6TBR3EQ4YmntYwW0rkGzC%2BdIonA3EW1HjlfLwUoo3QBIaWpP4q6jlGjwOzYHuM%2Bb%2Flk9e%2BpZM21TmPTUfroSralNoGclXASdl8dGuov%2FtQDeLEDDr9SLveOHAEj0EGvx5H549s%2BC7E057YqRKrl2fg5DnYJ9dutOmgsPyLgHQUVi0amAVkIS6H7TlpknRX8FTPqk2IzcyubfqgQLaSz%2BUI9DqNDJh118ciT44K%2FXM92cfBivFB3oQ8gcTTtLp%2FN0GT%2BAhiOZuD79%2BgWtFKvIxyZ1B7DtfNq6xYO504UDqC3He1gRbAGEtm4nS7dHgwHZ0rSPcoQ2cppGvtysQjZj7eE5QgXJ0Z6c%2FuukLFiKCYDju68kPvtqAUAbhjytMHTqsaVBGk6v1wxTchYEICjJQi5WrkBMfoK0Dbyx1D7Lkg%2FsYX8PR1Ky3wszVR2lzQwhP6DNoRf1W1fEpXBQF5KYR5ECD697UXnq0iFmi8ynZYGLTbyKz36BwEDPa8sh%2F0TQebtAgsULc4ODGf%2BEIcN9P2H34y5i3qj9JrNErcDicNl4QDoahau9dr%2Bq4x%2BCx7Qsbpu9T1bDso%2BWCg5CSleWsfDv%2FyZHs01a2BpcnxAsIuow35h5xIPURqCuuUfMIjV18MGOqUBLyRQsMfQX00gg2z%2FlmVxazt1WZAHO7h%2BS%2B37I%2BL%2BPVE9u6ymkRda7%2BfOFcC2HfP1KNkO%2FDiZPJugblG3vMmC%2Bz%2FnvJ3f0FZi%2FiO%2Fn1JJCVLFa6RMfSdPLAmsdI8Ccg8ztJRDCJBOb9p8dmUMCnUjtGL2b%2Bg7LrWuAmrBdw1Dz66vAC3FvJzgZCKS%2FAtKKZtUz35cf0ebkqXcaiXtKpjlN7RXcPu9&X-Amz-Signature=b1f74d54034aa7bcbf295179d869df515ec328758cba9cacd77f44553fe72a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FME36GC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIQCzy1IysdIrXPGZtQo6t%2BO7I%2BGgW5Gl%2FHW77ucJZfLuNgIgfzmqXDtkZUF0Xqpjy9ir%2B6hBTyueAi6fios8qSypm5sq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDNxd4kCKBzEBcZSLdyrcA6TBR3EQ4YmntYwW0rkGzC%2BdIonA3EW1HjlfLwUoo3QBIaWpP4q6jlGjwOzYHuM%2Bb%2Flk9e%2BpZM21TmPTUfroSralNoGclXASdl8dGuov%2FtQDeLEDDr9SLveOHAEj0EGvx5H549s%2BC7E057YqRKrl2fg5DnYJ9dutOmgsPyLgHQUVi0amAVkIS6H7TlpknRX8FTPqk2IzcyubfqgQLaSz%2BUI9DqNDJh118ciT44K%2FXM92cfBivFB3oQ8gcTTtLp%2FN0GT%2BAhiOZuD79%2BgWtFKvIxyZ1B7DtfNq6xYO504UDqC3He1gRbAGEtm4nS7dHgwHZ0rSPcoQ2cppGvtysQjZj7eE5QgXJ0Z6c%2FuukLFiKCYDju68kPvtqAUAbhjytMHTqsaVBGk6v1wxTchYEICjJQi5WrkBMfoK0Dbyx1D7Lkg%2FsYX8PR1Ky3wszVR2lzQwhP6DNoRf1W1fEpXBQF5KYR5ECD697UXnq0iFmi8ynZYGLTbyKz36BwEDPa8sh%2F0TQebtAgsULc4ODGf%2BEIcN9P2H34y5i3qj9JrNErcDicNl4QDoahau9dr%2Bq4x%2BCx7Qsbpu9T1bDso%2BWCg5CSleWsfDv%2FyZHs01a2BpcnxAsIuow35h5xIPURqCuuUfMIjV18MGOqUBLyRQsMfQX00gg2z%2FlmVxazt1WZAHO7h%2BS%2B37I%2BL%2BPVE9u6ymkRda7%2BfOFcC2HfP1KNkO%2FDiZPJugblG3vMmC%2Bz%2FnvJ3f0FZi%2FiO%2Fn1JJCVLFa6RMfSdPLAmsdI8Ccg8ztJRDCJBOb9p8dmUMCnUjtGL2b%2Bg7LrWuAmrBdw1Dz66vAC3FvJzgZCKS%2FAtKKZtUz35cf0ebkqXcaiXtKpjlN7RXcPu9&X-Amz-Signature=01fd243773779811f0201600ebd632600b245ea5a32b766cad08f1d04db209b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

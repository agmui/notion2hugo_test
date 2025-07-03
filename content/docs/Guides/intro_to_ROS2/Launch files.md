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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBRSGPS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICEbrdEbagTxNqSyM%2F6C060qstEYkQ2Q0xBQYO3YkC30AiEA8RA9HMJWRpMTUwWT0IJLrDL49cu9cPhGo50mrd%2FsBCgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJvOJ1%2Bkz8ygi38qqyrcAxqZHJgRrfV%2FOv2Mf5aic7exZwuEno81a2D7t5n3y7kMMzP%2BI0c4y8G2b4HYj2%2BPXVVWrmmBIEQySpTh2KlwWBefTIN5BTeHymeQS6IzSyfBGfWCCnTsulkCLntbVlpiAeMluHUicKpg1GBAUGOQgI7%2BgrYgu5BUGx4fjq%2FGjOHVemJbY6AGDxyaCVTKPX5ttaSBw2O7eliNI98VL6tsDpbvxAvIX133t1QcMVzqlYDJetoMfb4PAMy66HWIhRYQJyRPswa49I3EfkiwC0IXYqvXw%2B7zrHbw0FLt2hprQzMdjL%2FILo1mFg%2F%2BOfv%2BQuxRUVampQUxuwZ81AHofLo9dpyfhAkZyjjAS8I1OeCn6lbjSQVg%2FnGPwIRamztTbYSKHj8uzMK3Gb2AWukHbbZjhhGnuGPOXOYNgWGkPmWSmWilWZPA7%2BJoODAPEswu7E7L5as10ALRdk2CTSp9CIQrpMiPNpwz1R9XcoGeCTo8rYimr%2FK5Vty376VsoBvcd5QHNMqJsZrbZDrTtZ0EzR%2B%2FBs9yG3LAvlUByFNU1APXF7kuGYyMMnpbzsJRLn5j%2BFMrXsHgiX11G35tDe6jwFMLZsRhpxPjaX6ZvLwoy9CwmigVBGr8bl%2Fclim65d0qMKyQm8MGOqUB66XLyAJVTnAmrb63RpYtPBkC6Qp4jJENcvL4mTdgAi8crLzi4nfNgybpeM6zZLKRq8EeNP%2B3ijtfkfbXQetmu%2FniXdWoMc119eDxVLXjn%2FWeHC54byfDAfunVW%2F96503RHg8yJ2pkAvzb4KaK5tmx3yPKd01dSYJJkbvcJ7%2FqA%2BLGWc6%2BAZHvOx9%2BOl6ACszZowynyajghDNk599WQDyhkjAKfx5&X-Amz-Signature=b37468193f667325a2450575d418de37ef04a08f76918f2db39b5837f664d169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBRSGPS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICEbrdEbagTxNqSyM%2F6C060qstEYkQ2Q0xBQYO3YkC30AiEA8RA9HMJWRpMTUwWT0IJLrDL49cu9cPhGo50mrd%2FsBCgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJvOJ1%2Bkz8ygi38qqyrcAxqZHJgRrfV%2FOv2Mf5aic7exZwuEno81a2D7t5n3y7kMMzP%2BI0c4y8G2b4HYj2%2BPXVVWrmmBIEQySpTh2KlwWBefTIN5BTeHymeQS6IzSyfBGfWCCnTsulkCLntbVlpiAeMluHUicKpg1GBAUGOQgI7%2BgrYgu5BUGx4fjq%2FGjOHVemJbY6AGDxyaCVTKPX5ttaSBw2O7eliNI98VL6tsDpbvxAvIX133t1QcMVzqlYDJetoMfb4PAMy66HWIhRYQJyRPswa49I3EfkiwC0IXYqvXw%2B7zrHbw0FLt2hprQzMdjL%2FILo1mFg%2F%2BOfv%2BQuxRUVampQUxuwZ81AHofLo9dpyfhAkZyjjAS8I1OeCn6lbjSQVg%2FnGPwIRamztTbYSKHj8uzMK3Gb2AWukHbbZjhhGnuGPOXOYNgWGkPmWSmWilWZPA7%2BJoODAPEswu7E7L5as10ALRdk2CTSp9CIQrpMiPNpwz1R9XcoGeCTo8rYimr%2FK5Vty376VsoBvcd5QHNMqJsZrbZDrTtZ0EzR%2B%2FBs9yG3LAvlUByFNU1APXF7kuGYyMMnpbzsJRLn5j%2BFMrXsHgiX11G35tDe6jwFMLZsRhpxPjaX6ZvLwoy9CwmigVBGr8bl%2Fclim65d0qMKyQm8MGOqUB66XLyAJVTnAmrb63RpYtPBkC6Qp4jJENcvL4mTdgAi8crLzi4nfNgybpeM6zZLKRq8EeNP%2B3ijtfkfbXQetmu%2FniXdWoMc119eDxVLXjn%2FWeHC54byfDAfunVW%2F96503RHg8yJ2pkAvzb4KaK5tmx3yPKd01dSYJJkbvcJ7%2FqA%2BLGWc6%2BAZHvOx9%2BOl6ACszZowynyajghDNk599WQDyhkjAKfx5&X-Amz-Signature=f86a718701238fa11eaa5f28aa0e4605182f2e12dd0c7b01463b9ebb5e457a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGBRSGPS%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCICEbrdEbagTxNqSyM%2F6C060qstEYkQ2Q0xBQYO3YkC30AiEA8RA9HMJWRpMTUwWT0IJLrDL49cu9cPhGo50mrd%2FsBCgq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJvOJ1%2Bkz8ygi38qqyrcAxqZHJgRrfV%2FOv2Mf5aic7exZwuEno81a2D7t5n3y7kMMzP%2BI0c4y8G2b4HYj2%2BPXVVWrmmBIEQySpTh2KlwWBefTIN5BTeHymeQS6IzSyfBGfWCCnTsulkCLntbVlpiAeMluHUicKpg1GBAUGOQgI7%2BgrYgu5BUGx4fjq%2FGjOHVemJbY6AGDxyaCVTKPX5ttaSBw2O7eliNI98VL6tsDpbvxAvIX133t1QcMVzqlYDJetoMfb4PAMy66HWIhRYQJyRPswa49I3EfkiwC0IXYqvXw%2B7zrHbw0FLt2hprQzMdjL%2FILo1mFg%2F%2BOfv%2BQuxRUVampQUxuwZ81AHofLo9dpyfhAkZyjjAS8I1OeCn6lbjSQVg%2FnGPwIRamztTbYSKHj8uzMK3Gb2AWukHbbZjhhGnuGPOXOYNgWGkPmWSmWilWZPA7%2BJoODAPEswu7E7L5as10ALRdk2CTSp9CIQrpMiPNpwz1R9XcoGeCTo8rYimr%2FK5Vty376VsoBvcd5QHNMqJsZrbZDrTtZ0EzR%2B%2FBs9yG3LAvlUByFNU1APXF7kuGYyMMnpbzsJRLn5j%2BFMrXsHgiX11G35tDe6jwFMLZsRhpxPjaX6ZvLwoy9CwmigVBGr8bl%2Fclim65d0qMKyQm8MGOqUB66XLyAJVTnAmrb63RpYtPBkC6Qp4jJENcvL4mTdgAi8crLzi4nfNgybpeM6zZLKRq8EeNP%2B3ijtfkfbXQetmu%2FniXdWoMc119eDxVLXjn%2FWeHC54byfDAfunVW%2F96503RHg8yJ2pkAvzb4KaK5tmx3yPKd01dSYJJkbvcJ7%2FqA%2BLGWc6%2BAZHvOx9%2BOl6ACszZowynyajghDNk599WQDyhkjAKfx5&X-Amz-Signature=730d5039cfdb07c6a7357b99eeba580e3b496c010d004a7ba4577c4f7c4cb0c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

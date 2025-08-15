---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCISCAO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDOTeUGaamChpD4ksGoMUNVwvSFeSt2CYEucGVK4Th5%2BAiEAvIlKWpfKasFjtcm8ir5wQuvb2ZzOKgPggyK5SJl3Vjwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIkd7a3%2BtTjkppb9pyrcA1OeC6PVfEsVoNqzrrT2dMPyYKPCkZji9NCdwlC%2BZnNt%2BA1V57vvjnvzNK%2BHhru0CMj7pZ1C8Wwucb9%2BNtK6TzZohixyUJ9QFtQU%2B7kKyjNvvc865SgnI72bUeenzrfSRA25rWeUOBOuKH1zyT2XuKx8m7ck9YwcTvKhY1LM9guUFEEXyg1jS5cqnzu%2F11d9bSjwZYZ3f52yFWCmYZMEAtFqDPB1jqGC0qdLxayuWaf2iqbsA5bES7THU%2BbAazu6G9sbSc0p2YCpTVT8g%2B%2FDxAf0gPxkNDpQ%2B8uQf6Ed8kccKefWkxVwZlKWRiyJ9qun1Mzdg43eLXvxnJncGYmrbxjaM8NdiilidI11AwTV%2B8Hc497d7P8pmd22VO4nR%2F0qm8QApQN0ocV%2BceoZbxuuq65eVnBj91KF%2BhU533LkKXsiufabcMSuZWuIt5SVvtJXcElKtmPbtrsJXc8lUdT2olgqzo1HS8LNOSSWWXWL1vOXUVILlBE6e1%2BmUgghnOLJu1Ygxz0BszW%2FmTz%2Bqf3WiiTS55bVUDKwLekqeRQvZ4r7tseOkhtT%2B45XMUrYGXKzO3V%2FNcNSC10Vhqkx1xKC%2FII51Ar8Ploa6QUQ0Jvuk09rquOvGJNhH796oMm6MN%2Fu%2B8QGOqUBsPM2SPMO1zjziYwSc2nxFR6FSw0SI4Mebi46wKN3f%2B6wsizZOMRqyG50wYlky8kUJGpw4KGVjgB3xP5zTqX0YJ%2FlACK4Tt6HTDb3fQbl2SMIuVsDKOnrHrRaOYi%2BvX2oJsVnIZ3N0Ix4X5fNZwmIPiBwvA5E6VOU02l2%2FMrpGJ%2FrYY9dPdI0KetbsTCV4mk43Ne2x9oAAPgg94pRmn2yYxzVsUsG&X-Amz-Signature=4913d25c71f15f02bc6d2fd6d41f331b5c3bcc9abc0a14e1f05173b93cfee6df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCISCAO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDOTeUGaamChpD4ksGoMUNVwvSFeSt2CYEucGVK4Th5%2BAiEAvIlKWpfKasFjtcm8ir5wQuvb2ZzOKgPggyK5SJl3Vjwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIkd7a3%2BtTjkppb9pyrcA1OeC6PVfEsVoNqzrrT2dMPyYKPCkZji9NCdwlC%2BZnNt%2BA1V57vvjnvzNK%2BHhru0CMj7pZ1C8Wwucb9%2BNtK6TzZohixyUJ9QFtQU%2B7kKyjNvvc865SgnI72bUeenzrfSRA25rWeUOBOuKH1zyT2XuKx8m7ck9YwcTvKhY1LM9guUFEEXyg1jS5cqnzu%2F11d9bSjwZYZ3f52yFWCmYZMEAtFqDPB1jqGC0qdLxayuWaf2iqbsA5bES7THU%2BbAazu6G9sbSc0p2YCpTVT8g%2B%2FDxAf0gPxkNDpQ%2B8uQf6Ed8kccKefWkxVwZlKWRiyJ9qun1Mzdg43eLXvxnJncGYmrbxjaM8NdiilidI11AwTV%2B8Hc497d7P8pmd22VO4nR%2F0qm8QApQN0ocV%2BceoZbxuuq65eVnBj91KF%2BhU533LkKXsiufabcMSuZWuIt5SVvtJXcElKtmPbtrsJXc8lUdT2olgqzo1HS8LNOSSWWXWL1vOXUVILlBE6e1%2BmUgghnOLJu1Ygxz0BszW%2FmTz%2Bqf3WiiTS55bVUDKwLekqeRQvZ4r7tseOkhtT%2B45XMUrYGXKzO3V%2FNcNSC10Vhqkx1xKC%2FII51Ar8Ploa6QUQ0Jvuk09rquOvGJNhH796oMm6MN%2Fu%2B8QGOqUBsPM2SPMO1zjziYwSc2nxFR6FSw0SI4Mebi46wKN3f%2B6wsizZOMRqyG50wYlky8kUJGpw4KGVjgB3xP5zTqX0YJ%2FlACK4Tt6HTDb3fQbl2SMIuVsDKOnrHrRaOYi%2BvX2oJsVnIZ3N0Ix4X5fNZwmIPiBwvA5E6VOU02l2%2FMrpGJ%2FrYY9dPdI0KetbsTCV4mk43Ne2x9oAAPgg94pRmn2yYxzVsUsG&X-Amz-Signature=5189c8cb1ce219f95eeceace6015520cf4c9fc7ac3671cf1e9a0a4446db9b8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFCISCAO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIDOTeUGaamChpD4ksGoMUNVwvSFeSt2CYEucGVK4Th5%2BAiEAvIlKWpfKasFjtcm8ir5wQuvb2ZzOKgPggyK5SJl3Vjwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIkd7a3%2BtTjkppb9pyrcA1OeC6PVfEsVoNqzrrT2dMPyYKPCkZji9NCdwlC%2BZnNt%2BA1V57vvjnvzNK%2BHhru0CMj7pZ1C8Wwucb9%2BNtK6TzZohixyUJ9QFtQU%2B7kKyjNvvc865SgnI72bUeenzrfSRA25rWeUOBOuKH1zyT2XuKx8m7ck9YwcTvKhY1LM9guUFEEXyg1jS5cqnzu%2F11d9bSjwZYZ3f52yFWCmYZMEAtFqDPB1jqGC0qdLxayuWaf2iqbsA5bES7THU%2BbAazu6G9sbSc0p2YCpTVT8g%2B%2FDxAf0gPxkNDpQ%2B8uQf6Ed8kccKefWkxVwZlKWRiyJ9qun1Mzdg43eLXvxnJncGYmrbxjaM8NdiilidI11AwTV%2B8Hc497d7P8pmd22VO4nR%2F0qm8QApQN0ocV%2BceoZbxuuq65eVnBj91KF%2BhU533LkKXsiufabcMSuZWuIt5SVvtJXcElKtmPbtrsJXc8lUdT2olgqzo1HS8LNOSSWWXWL1vOXUVILlBE6e1%2BmUgghnOLJu1Ygxz0BszW%2FmTz%2Bqf3WiiTS55bVUDKwLekqeRQvZ4r7tseOkhtT%2B45XMUrYGXKzO3V%2FNcNSC10Vhqkx1xKC%2FII51Ar8Ploa6QUQ0Jvuk09rquOvGJNhH796oMm6MN%2Fu%2B8QGOqUBsPM2SPMO1zjziYwSc2nxFR6FSw0SI4Mebi46wKN3f%2B6wsizZOMRqyG50wYlky8kUJGpw4KGVjgB3xP5zTqX0YJ%2FlACK4Tt6HTDb3fQbl2SMIuVsDKOnrHrRaOYi%2BvX2oJsVnIZ3N0Ix4X5fNZwmIPiBwvA5E6VOU02l2%2FMrpGJ%2FrYY9dPdI0KetbsTCV4mk43Ne2x9oAAPgg94pRmn2yYxzVsUsG&X-Amz-Signature=111a4105121fd97738d25e00e23d182d2a3649c1eba021b6d85ac1d569441f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

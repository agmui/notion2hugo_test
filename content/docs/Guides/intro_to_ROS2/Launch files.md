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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664X3YV2E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgpQ%2FyftZbeNF%2BruAxptJu9391MpILmjWlJbt6Khzr9AiANs%2Bkx%2BDwx8qQxs9Dy0Q3kmwQK%2BDODAtsa6IS0nHILQSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2B7ROVe6RifThVfiKtwDs%2FahHmjQb9XKYjiJSy%2FzobQ5gWTZaCowXRCXibgcSQ5CoAAJcA%2FwKtpr%2BXy%2B044WBouWBx%2F5Mu9oP7UrCDu4QnlhuvfUx85guA3Ohh0owQEtNCnCONnJaKI340s%2Fakz6URw%2FvjNv70JjXM9B9gbqTayirA87lb0w1uYq14El5b4igsLWI72wcSUG%2FtlOZPqQN%2FHN9l9jVR790jf%2B3KiWXoSb5v6aVq7dOIY7Uy02pi6dJJOWV%2BFTfSRZWIf3qBufRZyQofNWCJXPsMGXgH3p6IInqGWA%2BuntHH4ct%2BMnKMMNkfdvBU%2FQJJPsUUGv%2FWlxBwvo%2Brhdh9kcJBHGybVGnYgSajb587njddZa73cMwB617yB66Bv42F4Se9RrF5UcYiahTa1ed%2B0QNjsIrx%2BflWCK5CUaGa9uBoROgAL5DoixGQrKQRYLX0d%2B4jy83FNEp%2BiYvL4WHzpcHNJ%2BoVGBIbtjxyG4lEMHe%2BWommRMA29KIiUg37YLpYZPbEZPmqn0gjK0HmpIoDj7zdn2klww9UqcYU7k0l0xFCyOfycDoXLXbYr1TE75b4HOe39ElmarhmueiP0iAmiZQ44XVnVK8AA5gN0JTCLt%2BlbiSg6vBrXJ0PPMqCPTPWr8mjQwwbLfxAY6pgF33eSkrha5zKW8j222wuZUJU3JOKkoEJaKTkZZi5SMpmDf%2BgqWv0ljM03t2tIO37AZy8aJyjrIeJSBArZVsXYLJuDMadCt4i8TAzwRMjVUni44t3r6RaIBnjfwy9mrx6at4DS87yR5CB1vJDFS0%2Fzv9CQuO%2Fx5%2BZlKNUkXaiySoJ5%2BcVjNdlraTRTT8Yu9Gjn5I0A132g9aW6omXgbHdsKYcf6uwNw&X-Amz-Signature=5febfbc1860698a5eec5c0e932e99004f0a21e5c5d875de04fdb8fc81737c400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664X3YV2E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgpQ%2FyftZbeNF%2BruAxptJu9391MpILmjWlJbt6Khzr9AiANs%2Bkx%2BDwx8qQxs9Dy0Q3kmwQK%2BDODAtsa6IS0nHILQSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2B7ROVe6RifThVfiKtwDs%2FahHmjQb9XKYjiJSy%2FzobQ5gWTZaCowXRCXibgcSQ5CoAAJcA%2FwKtpr%2BXy%2B044WBouWBx%2F5Mu9oP7UrCDu4QnlhuvfUx85guA3Ohh0owQEtNCnCONnJaKI340s%2Fakz6URw%2FvjNv70JjXM9B9gbqTayirA87lb0w1uYq14El5b4igsLWI72wcSUG%2FtlOZPqQN%2FHN9l9jVR790jf%2B3KiWXoSb5v6aVq7dOIY7Uy02pi6dJJOWV%2BFTfSRZWIf3qBufRZyQofNWCJXPsMGXgH3p6IInqGWA%2BuntHH4ct%2BMnKMMNkfdvBU%2FQJJPsUUGv%2FWlxBwvo%2Brhdh9kcJBHGybVGnYgSajb587njddZa73cMwB617yB66Bv42F4Se9RrF5UcYiahTa1ed%2B0QNjsIrx%2BflWCK5CUaGa9uBoROgAL5DoixGQrKQRYLX0d%2B4jy83FNEp%2BiYvL4WHzpcHNJ%2BoVGBIbtjxyG4lEMHe%2BWommRMA29KIiUg37YLpYZPbEZPmqn0gjK0HmpIoDj7zdn2klww9UqcYU7k0l0xFCyOfycDoXLXbYr1TE75b4HOe39ElmarhmueiP0iAmiZQ44XVnVK8AA5gN0JTCLt%2BlbiSg6vBrXJ0PPMqCPTPWr8mjQwwbLfxAY6pgF33eSkrha5zKW8j222wuZUJU3JOKkoEJaKTkZZi5SMpmDf%2BgqWv0ljM03t2tIO37AZy8aJyjrIeJSBArZVsXYLJuDMadCt4i8TAzwRMjVUni44t3r6RaIBnjfwy9mrx6at4DS87yR5CB1vJDFS0%2Fzv9CQuO%2Fx5%2BZlKNUkXaiySoJ5%2BcVjNdlraTRTT8Yu9Gjn5I0A132g9aW6omXgbHdsKYcf6uwNw&X-Amz-Signature=9979489cf72127896b0fa7d3ea12f2955e918dd4ada134e07aac41701a5c09bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664X3YV2E%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEgpQ%2FyftZbeNF%2BruAxptJu9391MpILmjWlJbt6Khzr9AiANs%2Bkx%2BDwx8qQxs9Dy0Q3kmwQK%2BDODAtsa6IS0nHILQSqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo%2B7ROVe6RifThVfiKtwDs%2FahHmjQb9XKYjiJSy%2FzobQ5gWTZaCowXRCXibgcSQ5CoAAJcA%2FwKtpr%2BXy%2B044WBouWBx%2F5Mu9oP7UrCDu4QnlhuvfUx85guA3Ohh0owQEtNCnCONnJaKI340s%2Fakz6URw%2FvjNv70JjXM9B9gbqTayirA87lb0w1uYq14El5b4igsLWI72wcSUG%2FtlOZPqQN%2FHN9l9jVR790jf%2B3KiWXoSb5v6aVq7dOIY7Uy02pi6dJJOWV%2BFTfSRZWIf3qBufRZyQofNWCJXPsMGXgH3p6IInqGWA%2BuntHH4ct%2BMnKMMNkfdvBU%2FQJJPsUUGv%2FWlxBwvo%2Brhdh9kcJBHGybVGnYgSajb587njddZa73cMwB617yB66Bv42F4Se9RrF5UcYiahTa1ed%2B0QNjsIrx%2BflWCK5CUaGa9uBoROgAL5DoixGQrKQRYLX0d%2B4jy83FNEp%2BiYvL4WHzpcHNJ%2BoVGBIbtjxyG4lEMHe%2BWommRMA29KIiUg37YLpYZPbEZPmqn0gjK0HmpIoDj7zdn2klww9UqcYU7k0l0xFCyOfycDoXLXbYr1TE75b4HOe39ElmarhmueiP0iAmiZQ44XVnVK8AA5gN0JTCLt%2BlbiSg6vBrXJ0PPMqCPTPWr8mjQwwbLfxAY6pgF33eSkrha5zKW8j222wuZUJU3JOKkoEJaKTkZZi5SMpmDf%2BgqWv0ljM03t2tIO37AZy8aJyjrIeJSBArZVsXYLJuDMadCt4i8TAzwRMjVUni44t3r6RaIBnjfwy9mrx6at4DS87yR5CB1vJDFS0%2Fzv9CQuO%2Fx5%2BZlKNUkXaiySoJ5%2BcVjNdlraTRTT8Yu9Gjn5I0A132g9aW6omXgbHdsKYcf6uwNw&X-Amz-Signature=be761a3a6c1763108e3b59c1797f29c382798ff272e07a14c3db156936712b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

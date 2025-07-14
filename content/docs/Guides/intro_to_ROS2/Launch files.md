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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5OJFYN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDRtZuk7BPrho4CJxwWELtEf3f5IRk3JZhvtl%2FZw8HS5AiBpbJ8yi2vKMg9GWdzhv%2BkamUAjXOUo9WTeKxJWowW5lyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMW9BfKCfv6ZNM%2FoMOKtwDvedRszZa7NrAcaJA%2FSTRmkQAamdFj4Ubx%2FFUF3%2BNPENAQo58x4A%2BXon%2BhisZaMqd0ECaTqHX6zCJ4GzyYMVAhSkaRO9aXgx82j4ZWvHAc666SQ5Y7jrYlEkb4yviFZkkJeZq9nh2bQ8VvPKc6cSoxmuShB8h73S1gt3YasXk1uL2urGbwAbe8eZSQy0bgX4yfuhH71wUeLHXXcP4MOYHfCXeo017R24QOH1Tw4SsJiE4Au7uxd5JxofoWZJfP7OQ%2BGU2P%2BCtLhEwoK2Xch7xKl9ADVpGjeClz2pgvkLPLV6T%2FyPfzikC49U%2FluFs0XyVtpnP16RmgRV7PqAyjrdyESAhsvvxRrdznSORZ7Ern5jROZOz6RxP%2F0ApTegOjvShszVs5gtvmhGGq2t4oahklcZb%2BK%2BsyBCEindcEFPMrtoTTbEfO86IjQE6572NggHOjXtr8T2%2BZWjdwxWsGMMbo%2FvUsuj2MAjK%2FDBWjJFAubY5%2FTUAnFYCZsUp9Vq6SATz7ettCASxzYAguD%2FaYmRLDvCZn3%2BYjyCLkn%2FUT4U27vUBnnPvUvuhWhAue0YQnskP1eGwnXpHoUtqYEfvQ%2Bp7%2FObBBNs%2BIAXUwFkk37R%2BHb%2Bkw2QcFx5262yOW%2F0wpYXUwwY6pgH6tR3kb5Y0SCD5yz2NPG9tM4Gyh0wyzvxT13IGLKIXP%2BuDpJUx7L7VUNEk9PznZLBJ5enqX5BOA1okvNlxNcpTveKrEtXQXW%2FwpQhwy7io5E36QUOLJifV4qo4JOv17zq3KLxBgQiRaelc05HVSdg6GHfHleeIxjgNZliZ%2FoV%2BNxyXCSyUMUjYjJ%2F4g6lxhJSiKPfjhrCnoHatGTsBcxD8jiZq1AjG&X-Amz-Signature=5dd7a8f790a8d22e3b53902ea9ecced4440f21317bd3d074f7130fb3e4300d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5OJFYN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDRtZuk7BPrho4CJxwWELtEf3f5IRk3JZhvtl%2FZw8HS5AiBpbJ8yi2vKMg9GWdzhv%2BkamUAjXOUo9WTeKxJWowW5lyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMW9BfKCfv6ZNM%2FoMOKtwDvedRszZa7NrAcaJA%2FSTRmkQAamdFj4Ubx%2FFUF3%2BNPENAQo58x4A%2BXon%2BhisZaMqd0ECaTqHX6zCJ4GzyYMVAhSkaRO9aXgx82j4ZWvHAc666SQ5Y7jrYlEkb4yviFZkkJeZq9nh2bQ8VvPKc6cSoxmuShB8h73S1gt3YasXk1uL2urGbwAbe8eZSQy0bgX4yfuhH71wUeLHXXcP4MOYHfCXeo017R24QOH1Tw4SsJiE4Au7uxd5JxofoWZJfP7OQ%2BGU2P%2BCtLhEwoK2Xch7xKl9ADVpGjeClz2pgvkLPLV6T%2FyPfzikC49U%2FluFs0XyVtpnP16RmgRV7PqAyjrdyESAhsvvxRrdznSORZ7Ern5jROZOz6RxP%2F0ApTegOjvShszVs5gtvmhGGq2t4oahklcZb%2BK%2BsyBCEindcEFPMrtoTTbEfO86IjQE6572NggHOjXtr8T2%2BZWjdwxWsGMMbo%2FvUsuj2MAjK%2FDBWjJFAubY5%2FTUAnFYCZsUp9Vq6SATz7ettCASxzYAguD%2FaYmRLDvCZn3%2BYjyCLkn%2FUT4U27vUBnnPvUvuhWhAue0YQnskP1eGwnXpHoUtqYEfvQ%2Bp7%2FObBBNs%2BIAXUwFkk37R%2BHb%2Bkw2QcFx5262yOW%2F0wpYXUwwY6pgH6tR3kb5Y0SCD5yz2NPG9tM4Gyh0wyzvxT13IGLKIXP%2BuDpJUx7L7VUNEk9PznZLBJ5enqX5BOA1okvNlxNcpTveKrEtXQXW%2FwpQhwy7io5E36QUOLJifV4qo4JOv17zq3KLxBgQiRaelc05HVSdg6GHfHleeIxjgNZliZ%2FoV%2BNxyXCSyUMUjYjJ%2F4g6lxhJSiKPfjhrCnoHatGTsBcxD8jiZq1AjG&X-Amz-Signature=debfdd194e8f820e404ddab50a97970586a36cfb9bc01cbabd892cfd3890c8b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG5OJFYN%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T181357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJGMEQCIDRtZuk7BPrho4CJxwWELtEf3f5IRk3JZhvtl%2FZw8HS5AiBpbJ8yi2vKMg9GWdzhv%2BkamUAjXOUo9WTeKxJWowW5lyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMW9BfKCfv6ZNM%2FoMOKtwDvedRszZa7NrAcaJA%2FSTRmkQAamdFj4Ubx%2FFUF3%2BNPENAQo58x4A%2BXon%2BhisZaMqd0ECaTqHX6zCJ4GzyYMVAhSkaRO9aXgx82j4ZWvHAc666SQ5Y7jrYlEkb4yviFZkkJeZq9nh2bQ8VvPKc6cSoxmuShB8h73S1gt3YasXk1uL2urGbwAbe8eZSQy0bgX4yfuhH71wUeLHXXcP4MOYHfCXeo017R24QOH1Tw4SsJiE4Au7uxd5JxofoWZJfP7OQ%2BGU2P%2BCtLhEwoK2Xch7xKl9ADVpGjeClz2pgvkLPLV6T%2FyPfzikC49U%2FluFs0XyVtpnP16RmgRV7PqAyjrdyESAhsvvxRrdznSORZ7Ern5jROZOz6RxP%2F0ApTegOjvShszVs5gtvmhGGq2t4oahklcZb%2BK%2BsyBCEindcEFPMrtoTTbEfO86IjQE6572NggHOjXtr8T2%2BZWjdwxWsGMMbo%2FvUsuj2MAjK%2FDBWjJFAubY5%2FTUAnFYCZsUp9Vq6SATz7ettCASxzYAguD%2FaYmRLDvCZn3%2BYjyCLkn%2FUT4U27vUBnnPvUvuhWhAue0YQnskP1eGwnXpHoUtqYEfvQ%2Bp7%2FObBBNs%2BIAXUwFkk37R%2BHb%2Bkw2QcFx5262yOW%2F0wpYXUwwY6pgH6tR3kb5Y0SCD5yz2NPG9tM4Gyh0wyzvxT13IGLKIXP%2BuDpJUx7L7VUNEk9PznZLBJ5enqX5BOA1okvNlxNcpTveKrEtXQXW%2FwpQhwy7io5E36QUOLJifV4qo4JOv17zq3KLxBgQiRaelc05HVSdg6GHfHleeIxjgNZliZ%2FoV%2BNxyXCSyUMUjYjJ%2F4g6lxhJSiKPfjhrCnoHatGTsBcxD8jiZq1AjG&X-Amz-Signature=4f7a1ec2983619c8842ce5c3279aac89d7e2730b53828d13dfa8a268e5d09c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

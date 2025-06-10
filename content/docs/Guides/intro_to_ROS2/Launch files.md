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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVQOLGYZ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8pGI6BGNeruErBZo085ItIh3nKWUZCwzQns80Fv8BTAiB8elSMDbXEZGar%2FH6I3cqLaCJ9%2FMb5739fM2Vr51gVByqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXL7MovDru9wQ3msDKtwDRtNfxVn%2F6P8wpKGbmLCLpfG7F2%2FnBoQjgdS%2FiMJMfqEHFu8DkBDyyhSvjVcsO0k4NEqkavTLytGNSdfmOCLv9YhPJGVLyQ1wy0d%2FAjU%2BBDsPFHLT7datR2b4BWwRxI%2BaiO9ghQMxZMGicPUlVgZqMP8Y08h0JIGY1QVqi11duwcJTeICzTOtJGlXGodKLyTu4m4Yci1GaFyFoWJ8zw1zi8xZrhBHxFoCXPG4J4UI4tPrxnwgynxZoFu3aYmQ0ptyUCJ6W7rb9zoDCS1%2FqL82klz%2BE5PDafNeh8YPoLW34tdGAafXgnQGJfk8k8XRH4pEXZDTjAQ9pT508p5kni4fsJBKHxobShbdHLauSefoxqkxjJc3SSDL3fUAz4GRVR22CwqcyFrtdFQlPVpTOD8ibTA6Olrl6%2F6C%2BMmKrhH%2F6VVB86Cv3SPuCB4qRRvTaEIgPof4ZeemPx%2BmjDrtIzNXEK8z52Vc56ph5rKE8SY0GlwCl%2Fivcwih%2FwZbg6MgyRuc6XyU0DKws7%2F17%2FVVaDcoR308cQUROoqb3wllEjOad8p6T%2F4KkbCi1e%2BHwoKZxBEUhyXDBjrUKBXwSHx2QNpUBdalXnZrRT5CdoNuuH2HpRlzLAK1v6hTAajOt6Qw%2B8CgwgY6pgEVX5Xu7K%2BcCDy3PFy%2FI%2FrJwOYorPgZc2aaqok4trY0Q%2FpvQ9Zbh3JXAgHnjkjSMAptE3Y%2FCc%2BzqDE5FMZ77D25L4429K0S46JHmgsnbOSJgBrU8eNJhgVCF7tqNjnXwAQIeHEDMqPER50FrpeJsgtzKSCJfqr3xAgefwCMiBQgtjZEcYrgxXXf38Ed9p8qgUBuGBQqdn%2FWbghdLvAYReWpudxwv8Oc&X-Amz-Signature=392bb8b4ba1892242c3b85657d1ce51c1831551894f8e6325d960b998e73d1a5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVQOLGYZ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8pGI6BGNeruErBZo085ItIh3nKWUZCwzQns80Fv8BTAiB8elSMDbXEZGar%2FH6I3cqLaCJ9%2FMb5739fM2Vr51gVByqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXL7MovDru9wQ3msDKtwDRtNfxVn%2F6P8wpKGbmLCLpfG7F2%2FnBoQjgdS%2FiMJMfqEHFu8DkBDyyhSvjVcsO0k4NEqkavTLytGNSdfmOCLv9YhPJGVLyQ1wy0d%2FAjU%2BBDsPFHLT7datR2b4BWwRxI%2BaiO9ghQMxZMGicPUlVgZqMP8Y08h0JIGY1QVqi11duwcJTeICzTOtJGlXGodKLyTu4m4Yci1GaFyFoWJ8zw1zi8xZrhBHxFoCXPG4J4UI4tPrxnwgynxZoFu3aYmQ0ptyUCJ6W7rb9zoDCS1%2FqL82klz%2BE5PDafNeh8YPoLW34tdGAafXgnQGJfk8k8XRH4pEXZDTjAQ9pT508p5kni4fsJBKHxobShbdHLauSefoxqkxjJc3SSDL3fUAz4GRVR22CwqcyFrtdFQlPVpTOD8ibTA6Olrl6%2F6C%2BMmKrhH%2F6VVB86Cv3SPuCB4qRRvTaEIgPof4ZeemPx%2BmjDrtIzNXEK8z52Vc56ph5rKE8SY0GlwCl%2Fivcwih%2FwZbg6MgyRuc6XyU0DKws7%2F17%2FVVaDcoR308cQUROoqb3wllEjOad8p6T%2F4KkbCi1e%2BHwoKZxBEUhyXDBjrUKBXwSHx2QNpUBdalXnZrRT5CdoNuuH2HpRlzLAK1v6hTAajOt6Qw%2B8CgwgY6pgEVX5Xu7K%2BcCDy3PFy%2FI%2FrJwOYorPgZc2aaqok4trY0Q%2FpvQ9Zbh3JXAgHnjkjSMAptE3Y%2FCc%2BzqDE5FMZ77D25L4429K0S46JHmgsnbOSJgBrU8eNJhgVCF7tqNjnXwAQIeHEDMqPER50FrpeJsgtzKSCJfqr3xAgefwCMiBQgtjZEcYrgxXXf38Ed9p8qgUBuGBQqdn%2FWbghdLvAYReWpudxwv8Oc&X-Amz-Signature=99ebe7a0cc642f485ca7f3de9526fa6db5930306c09c8ff112b9b4cfdc32b57b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVQOLGYZ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA8pGI6BGNeruErBZo085ItIh3nKWUZCwzQns80Fv8BTAiB8elSMDbXEZGar%2FH6I3cqLaCJ9%2FMb5739fM2Vr51gVByqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXL7MovDru9wQ3msDKtwDRtNfxVn%2F6P8wpKGbmLCLpfG7F2%2FnBoQjgdS%2FiMJMfqEHFu8DkBDyyhSvjVcsO0k4NEqkavTLytGNSdfmOCLv9YhPJGVLyQ1wy0d%2FAjU%2BBDsPFHLT7datR2b4BWwRxI%2BaiO9ghQMxZMGicPUlVgZqMP8Y08h0JIGY1QVqi11duwcJTeICzTOtJGlXGodKLyTu4m4Yci1GaFyFoWJ8zw1zi8xZrhBHxFoCXPG4J4UI4tPrxnwgynxZoFu3aYmQ0ptyUCJ6W7rb9zoDCS1%2FqL82klz%2BE5PDafNeh8YPoLW34tdGAafXgnQGJfk8k8XRH4pEXZDTjAQ9pT508p5kni4fsJBKHxobShbdHLauSefoxqkxjJc3SSDL3fUAz4GRVR22CwqcyFrtdFQlPVpTOD8ibTA6Olrl6%2F6C%2BMmKrhH%2F6VVB86Cv3SPuCB4qRRvTaEIgPof4ZeemPx%2BmjDrtIzNXEK8z52Vc56ph5rKE8SY0GlwCl%2Fivcwih%2FwZbg6MgyRuc6XyU0DKws7%2F17%2FVVaDcoR308cQUROoqb3wllEjOad8p6T%2F4KkbCi1e%2BHwoKZxBEUhyXDBjrUKBXwSHx2QNpUBdalXnZrRT5CdoNuuH2HpRlzLAK1v6hTAajOt6Qw%2B8CgwgY6pgEVX5Xu7K%2BcCDy3PFy%2FI%2FrJwOYorPgZc2aaqok4trY0Q%2FpvQ9Zbh3JXAgHnjkjSMAptE3Y%2FCc%2BzqDE5FMZ77D25L4429K0S46JHmgsnbOSJgBrU8eNJhgVCF7tqNjnXwAQIeHEDMqPER50FrpeJsgtzKSCJfqr3xAgefwCMiBQgtjZEcYrgxXXf38Ed9p8qgUBuGBQqdn%2FWbghdLvAYReWpudxwv8Oc&X-Amz-Signature=d4c6cf039b38dd5926fc0b266cca495f834f7e8ce640e74cb34373cfca23ecbf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

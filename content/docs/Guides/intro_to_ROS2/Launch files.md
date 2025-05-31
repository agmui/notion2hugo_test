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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNWCME4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL%2Fn3Pt7zu8JLdjzLpinxkke%2B47%2F9nNwhPQRw7%2BAJpVAiBwr8wby%2Fghv9u9PrD3SV0L%2Fj87pmY1Z2P6IzaegNeyFiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA5MVjlWmrN1Cb3ACKtwDZBWRaR3qXC%2FwYQnOu76MSQVoXsMs1VgkGhv05q4L5tfEA3Se%2BxdKmPwiI%2FucohNlI5xqM9UX2HqH%2BynSicikz1dq32ozMzOBPWkDNwrUyvKUe5feSxlu9ADw2lNkCV5eE%2Bnl7s5T3sq14eb3dFDH6t%2BIwUbSDbK6x%2BWmh2wiS7nhMC4LrcUK0jzf9Y3RKt18lq0uZklZwBopN5kQXzIiDFUkVwFieweDt%2F7kdlAIQUbvJo%2Bn484WVZljPgoEliQMQSzt9Aq4mb%2BY6YuvmwotPB75UjiR1ZsiSRU4AjTMTc7hRJfIkH0awe0VVdaCiZbulFH%2FuZyPKVQC%2ByRrMQy0m%2BipBDijOYojXBBiHWP%2FNminX7l2WvNjR6pDa%2BEiSBSiIx5sTakUTUJnwwKs%2Fyb3UB6t6f5T5x9e5jSrq8neHQQHFSaoSRvGVoIDqgM7HzDp5997ONBkqOQvK8KSwApvTEcmiEOcCqp7xnR80oHBTzCuHgjwLupKEr1gyPBE%2F6UPv7RTtiaOHVYyg0n6TwiuohjyP3rFtEFpO%2BngPc0OD5MzAQ9sJqLvpqui%2FCvK3ohP3U4yHjPlFy%2FSuj8kc9blOaYjcdAsxEG%2FRyE0B7GTn9I1OPg0OLN0KBPHKA4wnoTrwQY6pgHH0JaCE7KGbRcAAiZNYyWZFepPK47a%2FPH%2BZnrj4KwT0n%2BPXiIPkuZ1Q4t0SL4ORWktkrBOruESuB%2F4%2BIolZ8yOh0hN19Zj7V67Ca4W%2BPeCQX8Uh1QHc%2B6F46Vrwi%2FF1YQqNVFOKJdYNu%2Fgq%2FGxjU55kZ77CNX23y2KFx5sg3rtAmx%2FiOTZm7UB%2FtHnUIcpqq%2F%2BQm49liZaRU6VH00qn%2B4HLY5OPfbF&X-Amz-Signature=fd2f2f2ae51519979c13904e37f0f5c98ca83a33e8f395b250fdcf94f63aef56&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNWCME4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL%2Fn3Pt7zu8JLdjzLpinxkke%2B47%2F9nNwhPQRw7%2BAJpVAiBwr8wby%2Fghv9u9PrD3SV0L%2Fj87pmY1Z2P6IzaegNeyFiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA5MVjlWmrN1Cb3ACKtwDZBWRaR3qXC%2FwYQnOu76MSQVoXsMs1VgkGhv05q4L5tfEA3Se%2BxdKmPwiI%2FucohNlI5xqM9UX2HqH%2BynSicikz1dq32ozMzOBPWkDNwrUyvKUe5feSxlu9ADw2lNkCV5eE%2Bnl7s5T3sq14eb3dFDH6t%2BIwUbSDbK6x%2BWmh2wiS7nhMC4LrcUK0jzf9Y3RKt18lq0uZklZwBopN5kQXzIiDFUkVwFieweDt%2F7kdlAIQUbvJo%2Bn484WVZljPgoEliQMQSzt9Aq4mb%2BY6YuvmwotPB75UjiR1ZsiSRU4AjTMTc7hRJfIkH0awe0VVdaCiZbulFH%2FuZyPKVQC%2ByRrMQy0m%2BipBDijOYojXBBiHWP%2FNminX7l2WvNjR6pDa%2BEiSBSiIx5sTakUTUJnwwKs%2Fyb3UB6t6f5T5x9e5jSrq8neHQQHFSaoSRvGVoIDqgM7HzDp5997ONBkqOQvK8KSwApvTEcmiEOcCqp7xnR80oHBTzCuHgjwLupKEr1gyPBE%2F6UPv7RTtiaOHVYyg0n6TwiuohjyP3rFtEFpO%2BngPc0OD5MzAQ9sJqLvpqui%2FCvK3ohP3U4yHjPlFy%2FSuj8kc9blOaYjcdAsxEG%2FRyE0B7GTn9I1OPg0OLN0KBPHKA4wnoTrwQY6pgHH0JaCE7KGbRcAAiZNYyWZFepPK47a%2FPH%2BZnrj4KwT0n%2BPXiIPkuZ1Q4t0SL4ORWktkrBOruESuB%2F4%2BIolZ8yOh0hN19Zj7V67Ca4W%2BPeCQX8Uh1QHc%2B6F46Vrwi%2FF1YQqNVFOKJdYNu%2Fgq%2FGxjU55kZ77CNX23y2KFx5sg3rtAmx%2FiOTZm7UB%2FtHnUIcpqq%2F%2BQm49liZaRU6VH00qn%2B4HLY5OPfbF&X-Amz-Signature=48c585fbe156288253629f19b20b84eb46138ea8055e672d11802d0bc7d2fd85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNWCME4%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHL%2Fn3Pt7zu8JLdjzLpinxkke%2B47%2F9nNwhPQRw7%2BAJpVAiBwr8wby%2Fghv9u9PrD3SV0L%2Fj87pmY1Z2P6IzaegNeyFiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA5MVjlWmrN1Cb3ACKtwDZBWRaR3qXC%2FwYQnOu76MSQVoXsMs1VgkGhv05q4L5tfEA3Se%2BxdKmPwiI%2FucohNlI5xqM9UX2HqH%2BynSicikz1dq32ozMzOBPWkDNwrUyvKUe5feSxlu9ADw2lNkCV5eE%2Bnl7s5T3sq14eb3dFDH6t%2BIwUbSDbK6x%2BWmh2wiS7nhMC4LrcUK0jzf9Y3RKt18lq0uZklZwBopN5kQXzIiDFUkVwFieweDt%2F7kdlAIQUbvJo%2Bn484WVZljPgoEliQMQSzt9Aq4mb%2BY6YuvmwotPB75UjiR1ZsiSRU4AjTMTc7hRJfIkH0awe0VVdaCiZbulFH%2FuZyPKVQC%2ByRrMQy0m%2BipBDijOYojXBBiHWP%2FNminX7l2WvNjR6pDa%2BEiSBSiIx5sTakUTUJnwwKs%2Fyb3UB6t6f5T5x9e5jSrq8neHQQHFSaoSRvGVoIDqgM7HzDp5997ONBkqOQvK8KSwApvTEcmiEOcCqp7xnR80oHBTzCuHgjwLupKEr1gyPBE%2F6UPv7RTtiaOHVYyg0n6TwiuohjyP3rFtEFpO%2BngPc0OD5MzAQ9sJqLvpqui%2FCvK3ohP3U4yHjPlFy%2FSuj8kc9blOaYjcdAsxEG%2FRyE0B7GTn9I1OPg0OLN0KBPHKA4wnoTrwQY6pgHH0JaCE7KGbRcAAiZNYyWZFepPK47a%2FPH%2BZnrj4KwT0n%2BPXiIPkuZ1Q4t0SL4ORWktkrBOruESuB%2F4%2BIolZ8yOh0hN19Zj7V67Ca4W%2BPeCQX8Uh1QHc%2B6F46Vrwi%2FF1YQqNVFOKJdYNu%2Fgq%2FGxjU55kZ77CNX23y2KFx5sg3rtAmx%2FiOTZm7UB%2FtHnUIcpqq%2F%2BQm49liZaRU6VH00qn%2B4HLY5OPfbF&X-Amz-Signature=ed40865dde5613126720f1342b8f903a35652cc2a39deffc099fddefb1f6d33c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

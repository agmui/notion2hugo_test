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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLPQX5AV%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIE15%2Fcm1lTH%2BzPU506tULzkjxY8YuXhCS0JlBMsPvYNvAiABBqLQzxv2gPhlbT%2BgAV5d87dyRJgr5%2BgllsfJ3eN3Zyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMdVdYbFrBF5V5RYaaKtwDk%2FxxJmHnweEfXUfFDXtkzv9c7mpkB0MopqEj65F6%2B8X84GZLV7OhUHgzsTmhbCbXYeC1gPIUbu1dERcdEb8FaibRtFmFy8dxeHjdJS7YEL0TursErYkt8d%2FmIGmds8blQiKb81pzfhXH5zELOm7ODw9Ry%2BmJu3chI0RmIim9iFCWjWgrcp6k9JemaR2aI68kKkVPk%2B3K5ZlJ4eeOUGvYBMWs8rPvK2uQTEU7MVGSAf68GIoz9VUEco4ia%2FKfRKwUd6qwg89g0%2FqJSd8I%2FS617v6s8ad0UdtubN0rvJFMyumCnWIuR4vuszkZacoZIRw%2BDycDG%2FT0Xq9uLdQW9rylmIctbX90AN8OX0v7PkE2ARDZLtxT39fb1f0sAt88OEvCpwf8Vj09HAkZUxR4wAGUxLUAoIRM8Wj1rPPlqQzwZlI0tjbK%2BTDVbk5wSHxWLzn4cYb9lnL9rgbnbqPWG%2Fj9Ozposk%2B9THE6eaowet6mfblvR7aURZ7Oj8sYmv8Cjqo9XjlknFG1k3EbPX2vRqhMqVhlVeXnRrDeNcwvswz6cudqLS0BSY57f0rLnBj9jcYHYi99Z7C0YXtazrr9V1gRFNodx0u08jSvSmuroIXuUAmVVWHuxE9uwpTH3fEwq46cwwY6pgHzNVqJkkt1tqOfeVgZqOuLKUEb%2BfNsQpFbkD8DdOl3nJR7HLJhJ2n3Lv0yOA4s9eTw1HphiDQGu6KyTHdTGF%2BAFfVAzVgTpClb0WfNqMlTLWy3xgyzJ1cjZ539NQphNXJ6X4MAWRNKGH4RyZSp4NeuZ9ElHtEc7%2FO6jTEKHaWlQBAAq%2Btd%2F1NUGxUYkC1ZYO%2B%2F0QB%2Bw6f%2FDH2i4E4TWeHOjsWUCnEc&X-Amz-Signature=5b8b1921ddea54ba5b65aaf0aecdcc7f846dcef577f0d9fc167cc241995b3e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLPQX5AV%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIE15%2Fcm1lTH%2BzPU506tULzkjxY8YuXhCS0JlBMsPvYNvAiABBqLQzxv2gPhlbT%2BgAV5d87dyRJgr5%2BgllsfJ3eN3Zyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMdVdYbFrBF5V5RYaaKtwDk%2FxxJmHnweEfXUfFDXtkzv9c7mpkB0MopqEj65F6%2B8X84GZLV7OhUHgzsTmhbCbXYeC1gPIUbu1dERcdEb8FaibRtFmFy8dxeHjdJS7YEL0TursErYkt8d%2FmIGmds8blQiKb81pzfhXH5zELOm7ODw9Ry%2BmJu3chI0RmIim9iFCWjWgrcp6k9JemaR2aI68kKkVPk%2B3K5ZlJ4eeOUGvYBMWs8rPvK2uQTEU7MVGSAf68GIoz9VUEco4ia%2FKfRKwUd6qwg89g0%2FqJSd8I%2FS617v6s8ad0UdtubN0rvJFMyumCnWIuR4vuszkZacoZIRw%2BDycDG%2FT0Xq9uLdQW9rylmIctbX90AN8OX0v7PkE2ARDZLtxT39fb1f0sAt88OEvCpwf8Vj09HAkZUxR4wAGUxLUAoIRM8Wj1rPPlqQzwZlI0tjbK%2BTDVbk5wSHxWLzn4cYb9lnL9rgbnbqPWG%2Fj9Ozposk%2B9THE6eaowet6mfblvR7aURZ7Oj8sYmv8Cjqo9XjlknFG1k3EbPX2vRqhMqVhlVeXnRrDeNcwvswz6cudqLS0BSY57f0rLnBj9jcYHYi99Z7C0YXtazrr9V1gRFNodx0u08jSvSmuroIXuUAmVVWHuxE9uwpTH3fEwq46cwwY6pgHzNVqJkkt1tqOfeVgZqOuLKUEb%2BfNsQpFbkD8DdOl3nJR7HLJhJ2n3Lv0yOA4s9eTw1HphiDQGu6KyTHdTGF%2BAFfVAzVgTpClb0WfNqMlTLWy3xgyzJ1cjZ539NQphNXJ6X4MAWRNKGH4RyZSp4NeuZ9ElHtEc7%2FO6jTEKHaWlQBAAq%2Btd%2F1NUGxUYkC1ZYO%2B%2F0QB%2Bw6f%2FDH2i4E4TWeHOjsWUCnEc&X-Amz-Signature=d5a2fbb54ea77aa6667e33e4a0f20550c1b3385354504b56d4b34f28bd7c9c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLPQX5AV%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIE15%2Fcm1lTH%2BzPU506tULzkjxY8YuXhCS0JlBMsPvYNvAiABBqLQzxv2gPhlbT%2BgAV5d87dyRJgr5%2BgllsfJ3eN3Zyr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMdVdYbFrBF5V5RYaaKtwDk%2FxxJmHnweEfXUfFDXtkzv9c7mpkB0MopqEj65F6%2B8X84GZLV7OhUHgzsTmhbCbXYeC1gPIUbu1dERcdEb8FaibRtFmFy8dxeHjdJS7YEL0TursErYkt8d%2FmIGmds8blQiKb81pzfhXH5zELOm7ODw9Ry%2BmJu3chI0RmIim9iFCWjWgrcp6k9JemaR2aI68kKkVPk%2B3K5ZlJ4eeOUGvYBMWs8rPvK2uQTEU7MVGSAf68GIoz9VUEco4ia%2FKfRKwUd6qwg89g0%2FqJSd8I%2FS617v6s8ad0UdtubN0rvJFMyumCnWIuR4vuszkZacoZIRw%2BDycDG%2FT0Xq9uLdQW9rylmIctbX90AN8OX0v7PkE2ARDZLtxT39fb1f0sAt88OEvCpwf8Vj09HAkZUxR4wAGUxLUAoIRM8Wj1rPPlqQzwZlI0tjbK%2BTDVbk5wSHxWLzn4cYb9lnL9rgbnbqPWG%2Fj9Ozposk%2B9THE6eaowet6mfblvR7aURZ7Oj8sYmv8Cjqo9XjlknFG1k3EbPX2vRqhMqVhlVeXnRrDeNcwvswz6cudqLS0BSY57f0rLnBj9jcYHYi99Z7C0YXtazrr9V1gRFNodx0u08jSvSmuroIXuUAmVVWHuxE9uwpTH3fEwq46cwwY6pgHzNVqJkkt1tqOfeVgZqOuLKUEb%2BfNsQpFbkD8DdOl3nJR7HLJhJ2n3Lv0yOA4s9eTw1HphiDQGu6KyTHdTGF%2BAFfVAzVgTpClb0WfNqMlTLWy3xgyzJ1cjZ539NQphNXJ6X4MAWRNKGH4RyZSp4NeuZ9ElHtEc7%2FO6jTEKHaWlQBAAq%2Btd%2F1NUGxUYkC1ZYO%2B%2F0QB%2Bw6f%2FDH2i4E4TWeHOjsWUCnEc&X-Amz-Signature=f17fbdd86bbebdb7635339677006396ac99fed390627526528e3fc65b6b1aad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

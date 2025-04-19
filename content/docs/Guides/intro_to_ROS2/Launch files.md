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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCE6H3D%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDCZ7dW6Z7sN1SJ7t5kiqUaMnVfWdQaoB8LqWAOclHA%2BgIhAJPVY%2FojOYvSt%2FO4MGQMqyB1wWWgcUnXuEBGg%2FCeb3HmKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2rziE00OIbQnoUXcq3APXvDISgw6Dl9NIff5TIVLu5%2F1rzOtFOyYwsQEjQZCf%2BI4CBKNCM1LbiB%2Bd8os%2Fgkv7w1XMfpV4WfOBGs15aOfE19z3v7W9wyDHOqhiciLgYL6YP5FvhRLcnLAB%2BnuZYf8qRjDWvPyiGAGo8dBnJLJOSXNB4i0%2Bx0vnoGr0xFrAFvvFkOx39ltuSeKKSRYl5pYqQ8mnjDt5JgfQ%2FHBOwEiUcKNJh5k1GQjqjxK1rUWRkclYS99fW2cj0FVjnImPnKmZhIyHRpRqbB7R66XCpba8cDW7moqVNirsQ%2BeAopdULTTDYDTK1XaJr9aQoPbtPmyL0h%2FP9gHCBcoh88%2BL1wuWbKzb%2F1r8sEcEYp0RNhEzyAf%2FCM6DOJar%2B9vGAirf7sdbrsL1PlR0k93FQWo%2B7B78M7NJrSzly0oMbASJMKp5tx09OKcmXdqJCN3RK0K87sh1Ai1DBsVkX5v12POypAxotceY0ZKEJvpDXR7gGDWfDd0HXvq1b101u2KxxpyHxMJHr8rWIuySX9VWazLoUfZrG1rwpGcFw%2FSMf2I9t1I%2FOW4MD8gBBY69gYyUSNa0T9cD6a9UwWo9m760M%2Fz0Kr%2BTEleCWJVhm%2Bku9MjaecK%2B2KmqsLnKpl%2FIS3PG8DDZs43ABjqkASgG7xZEOhkxAvSA7d6jomtss8ywHRihbEDNKT18FV0cv20y6ofrheLCUEEZwXFkg3G0TadwNHBxlovlPo8gQqAXeQrnFs68PGBqf%2FCqI2H2rJ89uNFeHeNi3pxhPlDD42RaweC2ownWzM3HYrg8y9H490XoAzf%2Bt3jISJzz7nqIYgGFKLSt9OBBxpMzw%2FipIQYac3ly2C5EyhXegZ%2FbB01piB8Z&X-Amz-Signature=017849613cdef42a356ea8f5dc41c656f7a59aca712c504f4bb3c371aa8ed3a2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCE6H3D%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDCZ7dW6Z7sN1SJ7t5kiqUaMnVfWdQaoB8LqWAOclHA%2BgIhAJPVY%2FojOYvSt%2FO4MGQMqyB1wWWgcUnXuEBGg%2FCeb3HmKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2rziE00OIbQnoUXcq3APXvDISgw6Dl9NIff5TIVLu5%2F1rzOtFOyYwsQEjQZCf%2BI4CBKNCM1LbiB%2Bd8os%2Fgkv7w1XMfpV4WfOBGs15aOfE19z3v7W9wyDHOqhiciLgYL6YP5FvhRLcnLAB%2BnuZYf8qRjDWvPyiGAGo8dBnJLJOSXNB4i0%2Bx0vnoGr0xFrAFvvFkOx39ltuSeKKSRYl5pYqQ8mnjDt5JgfQ%2FHBOwEiUcKNJh5k1GQjqjxK1rUWRkclYS99fW2cj0FVjnImPnKmZhIyHRpRqbB7R66XCpba8cDW7moqVNirsQ%2BeAopdULTTDYDTK1XaJr9aQoPbtPmyL0h%2FP9gHCBcoh88%2BL1wuWbKzb%2F1r8sEcEYp0RNhEzyAf%2FCM6DOJar%2B9vGAirf7sdbrsL1PlR0k93FQWo%2B7B78M7NJrSzly0oMbASJMKp5tx09OKcmXdqJCN3RK0K87sh1Ai1DBsVkX5v12POypAxotceY0ZKEJvpDXR7gGDWfDd0HXvq1b101u2KxxpyHxMJHr8rWIuySX9VWazLoUfZrG1rwpGcFw%2FSMf2I9t1I%2FOW4MD8gBBY69gYyUSNa0T9cD6a9UwWo9m760M%2Fz0Kr%2BTEleCWJVhm%2Bku9MjaecK%2B2KmqsLnKpl%2FIS3PG8DDZs43ABjqkASgG7xZEOhkxAvSA7d6jomtss8ywHRihbEDNKT18FV0cv20y6ofrheLCUEEZwXFkg3G0TadwNHBxlovlPo8gQqAXeQrnFs68PGBqf%2FCqI2H2rJ89uNFeHeNi3pxhPlDD42RaweC2ownWzM3HYrg8y9H490XoAzf%2Bt3jISJzz7nqIYgGFKLSt9OBBxpMzw%2FipIQYac3ly2C5EyhXegZ%2FbB01piB8Z&X-Amz-Signature=4266dbf2eb619f35a69057f7ca3a48bbbe6bbc5ce7894f1ca043aae3bcaef206&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFCE6H3D%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQDCZ7dW6Z7sN1SJ7t5kiqUaMnVfWdQaoB8LqWAOclHA%2BgIhAJPVY%2FojOYvSt%2FO4MGQMqyB1wWWgcUnXuEBGg%2FCeb3HmKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2rziE00OIbQnoUXcq3APXvDISgw6Dl9NIff5TIVLu5%2F1rzOtFOyYwsQEjQZCf%2BI4CBKNCM1LbiB%2Bd8os%2Fgkv7w1XMfpV4WfOBGs15aOfE19z3v7W9wyDHOqhiciLgYL6YP5FvhRLcnLAB%2BnuZYf8qRjDWvPyiGAGo8dBnJLJOSXNB4i0%2Bx0vnoGr0xFrAFvvFkOx39ltuSeKKSRYl5pYqQ8mnjDt5JgfQ%2FHBOwEiUcKNJh5k1GQjqjxK1rUWRkclYS99fW2cj0FVjnImPnKmZhIyHRpRqbB7R66XCpba8cDW7moqVNirsQ%2BeAopdULTTDYDTK1XaJr9aQoPbtPmyL0h%2FP9gHCBcoh88%2BL1wuWbKzb%2F1r8sEcEYp0RNhEzyAf%2FCM6DOJar%2B9vGAirf7sdbrsL1PlR0k93FQWo%2B7B78M7NJrSzly0oMbASJMKp5tx09OKcmXdqJCN3RK0K87sh1Ai1DBsVkX5v12POypAxotceY0ZKEJvpDXR7gGDWfDd0HXvq1b101u2KxxpyHxMJHr8rWIuySX9VWazLoUfZrG1rwpGcFw%2FSMf2I9t1I%2FOW4MD8gBBY69gYyUSNa0T9cD6a9UwWo9m760M%2Fz0Kr%2BTEleCWJVhm%2Bku9MjaecK%2B2KmqsLnKpl%2FIS3PG8DDZs43ABjqkASgG7xZEOhkxAvSA7d6jomtss8ywHRihbEDNKT18FV0cv20y6ofrheLCUEEZwXFkg3G0TadwNHBxlovlPo8gQqAXeQrnFs68PGBqf%2FCqI2H2rJ89uNFeHeNi3pxhPlDD42RaweC2ownWzM3HYrg8y9H490XoAzf%2Bt3jISJzz7nqIYgGFKLSt9OBBxpMzw%2FipIQYac3ly2C5EyhXegZ%2FbB01piB8Z&X-Amz-Signature=2b4b09baf3fbc68f0ae3f97b24f056cee52246af96985ab3b574fd46db982643&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BN3L2CM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCIwmxevExG%2BWp0yDQhhvB3cAQYqEdA8uVnzOT0BeXiwIhALbBvBzkQqpi2UBlBXbW%2FKEKqI1SkbCS6VeT0iOnkmLPKv8DCGYQABoMNjM3NDIzMTgzODA1IgxoYcVIoM1YnI%2FMQ7Aq3AMgAaIbpUNzu7ulitlXdXzrjPZDNyzSQ2dO2uOQwgrtHeOyMejFqPIIN9n3LNrLDbAdg4SPhsE5SnpIdCz8mc4IQOiQsaTBpd3bpLfsNwe0KWGNVVR8bF5jj7QzsDEKvOYUBDCT6GQobIrUtZXB%2BLPMSteoUFT0wKo4ur%2BdtIjpLIVNy3Rz%2FMh6XpkZ3%2BAVbt%2F6uE14uvhpJzOaff8L8GN9MtNoavkGN%2B4dN5PhpAw9pat884zMoYBQVTqfGlykzWz7fm%2BWrKpHYF2e%2FYSQiZ%2BqU%2FltkrTjeIlMtCEBq66FtW3kjsQvOVI5Oj5J%2Bm79rhp4rrJs06EWRQdOtEfgI25IaGs4lpUZ%2Fz%2BOUFhgd9rqQ0TkHWTH9CLDorLuR4MJf8Vwf4w4bGpO7C4dK%2B7pWsAK%2BbGJ7e6lMuJPAKdBO9hDoMUbDAokgyd7rqCn0ONcCbOt4OenmxU%2BWPGG1VTlo8DavqLEcuJ3NEseedv1x7O87exBHrmcz%2FYtD6C6izR1jWoKqA4GbdK9fQKFjCCTGs5DS8EEzXl8DTyge%2FB0a5iRHSHuzyqReitP9YPpO4bz10mF4kNgwleLKwfff12mpx4BJ%2FWZ6mjDqq299q5f0jR%2Bv2hGuraoTx6R3nViBzDzm%2B%2FABjqkAYZfO3tdA1nYGH1Mtw9VMBaXVqobPRn1cEXTTdwi9b3a5NRTo8HsxHhrR0GKyU6369yvFlgDm67fbQE6tHoU1BB22obXRL8txu8KGQKIiaBtljlpbBj%2BdsLt%2FLnH13natLR7F66FsJsrxjaxSyEYryXaW%2F%2FLMqfuMVK4x0erIy0HfOBYOmhT4nanwyb9K8BZZ7YYCYVXWSBeIxx7ikV4zbs5W1po&X-Amz-Signature=df0e36d240743b830d0c3c0418d6d8878a36c1fec6472eb35a0a558eddd5e651&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BN3L2CM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCIwmxevExG%2BWp0yDQhhvB3cAQYqEdA8uVnzOT0BeXiwIhALbBvBzkQqpi2UBlBXbW%2FKEKqI1SkbCS6VeT0iOnkmLPKv8DCGYQABoMNjM3NDIzMTgzODA1IgxoYcVIoM1YnI%2FMQ7Aq3AMgAaIbpUNzu7ulitlXdXzrjPZDNyzSQ2dO2uOQwgrtHeOyMejFqPIIN9n3LNrLDbAdg4SPhsE5SnpIdCz8mc4IQOiQsaTBpd3bpLfsNwe0KWGNVVR8bF5jj7QzsDEKvOYUBDCT6GQobIrUtZXB%2BLPMSteoUFT0wKo4ur%2BdtIjpLIVNy3Rz%2FMh6XpkZ3%2BAVbt%2F6uE14uvhpJzOaff8L8GN9MtNoavkGN%2B4dN5PhpAw9pat884zMoYBQVTqfGlykzWz7fm%2BWrKpHYF2e%2FYSQiZ%2BqU%2FltkrTjeIlMtCEBq66FtW3kjsQvOVI5Oj5J%2Bm79rhp4rrJs06EWRQdOtEfgI25IaGs4lpUZ%2Fz%2BOUFhgd9rqQ0TkHWTH9CLDorLuR4MJf8Vwf4w4bGpO7C4dK%2B7pWsAK%2BbGJ7e6lMuJPAKdBO9hDoMUbDAokgyd7rqCn0ONcCbOt4OenmxU%2BWPGG1VTlo8DavqLEcuJ3NEseedv1x7O87exBHrmcz%2FYtD6C6izR1jWoKqA4GbdK9fQKFjCCTGs5DS8EEzXl8DTyge%2FB0a5iRHSHuzyqReitP9YPpO4bz10mF4kNgwleLKwfff12mpx4BJ%2FWZ6mjDqq299q5f0jR%2Bv2hGuraoTx6R3nViBzDzm%2B%2FABjqkAYZfO3tdA1nYGH1Mtw9VMBaXVqobPRn1cEXTTdwi9b3a5NRTo8HsxHhrR0GKyU6369yvFlgDm67fbQE6tHoU1BB22obXRL8txu8KGQKIiaBtljlpbBj%2BdsLt%2FLnH13natLR7F66FsJsrxjaxSyEYryXaW%2F%2FLMqfuMVK4x0erIy0HfOBYOmhT4nanwyb9K8BZZ7YYCYVXWSBeIxx7ikV4zbs5W1po&X-Amz-Signature=c1a603aae100061d730b879055bd2e0f822d070b075f36727c1567a1ea1a889d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BN3L2CM%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T220851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCIwmxevExG%2BWp0yDQhhvB3cAQYqEdA8uVnzOT0BeXiwIhALbBvBzkQqpi2UBlBXbW%2FKEKqI1SkbCS6VeT0iOnkmLPKv8DCGYQABoMNjM3NDIzMTgzODA1IgxoYcVIoM1YnI%2FMQ7Aq3AMgAaIbpUNzu7ulitlXdXzrjPZDNyzSQ2dO2uOQwgrtHeOyMejFqPIIN9n3LNrLDbAdg4SPhsE5SnpIdCz8mc4IQOiQsaTBpd3bpLfsNwe0KWGNVVR8bF5jj7QzsDEKvOYUBDCT6GQobIrUtZXB%2BLPMSteoUFT0wKo4ur%2BdtIjpLIVNy3Rz%2FMh6XpkZ3%2BAVbt%2F6uE14uvhpJzOaff8L8GN9MtNoavkGN%2B4dN5PhpAw9pat884zMoYBQVTqfGlykzWz7fm%2BWrKpHYF2e%2FYSQiZ%2BqU%2FltkrTjeIlMtCEBq66FtW3kjsQvOVI5Oj5J%2Bm79rhp4rrJs06EWRQdOtEfgI25IaGs4lpUZ%2Fz%2BOUFhgd9rqQ0TkHWTH9CLDorLuR4MJf8Vwf4w4bGpO7C4dK%2B7pWsAK%2BbGJ7e6lMuJPAKdBO9hDoMUbDAokgyd7rqCn0ONcCbOt4OenmxU%2BWPGG1VTlo8DavqLEcuJ3NEseedv1x7O87exBHrmcz%2FYtD6C6izR1jWoKqA4GbdK9fQKFjCCTGs5DS8EEzXl8DTyge%2FB0a5iRHSHuzyqReitP9YPpO4bz10mF4kNgwleLKwfff12mpx4BJ%2FWZ6mjDqq299q5f0jR%2Bv2hGuraoTx6R3nViBzDzm%2B%2FABjqkAYZfO3tdA1nYGH1Mtw9VMBaXVqobPRn1cEXTTdwi9b3a5NRTo8HsxHhrR0GKyU6369yvFlgDm67fbQE6tHoU1BB22obXRL8txu8KGQKIiaBtljlpbBj%2BdsLt%2FLnH13natLR7F66FsJsrxjaxSyEYryXaW%2F%2FLMqfuMVK4x0erIy0HfOBYOmhT4nanwyb9K8BZZ7YYCYVXWSBeIxx7ikV4zbs5W1po&X-Amz-Signature=378650d4591e6c49f564f55f22ddc25517260eba1fa9fd9cd67a22a3c08ccec8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

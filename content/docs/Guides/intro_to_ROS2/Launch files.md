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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVJNPZX%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8mtt2qAg1tT7hQWBdGqCrg%2BF65xxMKxc3lYJ8l0FhPAiEAjOtSIBwyqmEa8TGF2Ff0Y3XsMFzgi7MqVA49l63oiiwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFx52usadsZbvK6EgyrcA1pi%2Bxr3nrD7w1RwBkKJ27qhTo45dwxETDtL8NhRR0HFWNGxHMA%2BWmNW7Y2xaz9tXsbwvTQW42JAO5306u3%2Bp0nZMdQwNAlkCbhzjrmbQk5DC4J9uRmYkDOovKuZjagAOF%2Fzj1kcs8zxNQSxtyqoVRpa%2BGnqS%2BlV4jbIFBFp3jKbtlMF3wI45zSh2JDnsr0xn9GDqZWrZ8sKrS3PVDs2GGtVqhKHFAxbJJpEx1EFl9F84ZHPvH1GjCsQ8MlEUtOYz6kmTtKjkWOdfDWuS9PoR%2FEr9V%2FpbpVGLpX9jD%2BdVOUhp2aOrKUvfXVQ9AMAQR3jYcnHeEFushEwTt779x9tIE2HP46jmKmZk5%2ByO6hoHVQnQkChUkdNbcf61oM2Ve09EQLOgbfUYKfnvBrOjrylGkWnVAd8MItBUGsuGwmTEMiIZ4Rci5nGBaBFXfiiNNztjODkRuyOvwqJmnxp1vqPsIWjo8hs9504fsjn5eQxEFdyR4exhfKVF0Q%2B9hcEr6%2B8LEfPd%2FOr3skc4yF5xYXeOWVZAXhpN1Vqnrq%2F5ENzx08b73Ft7Wby4Fajl1Cp%2Fw0eLQVvbVZ%2BVzUhsJTRF20cKbPz8edQX2GsPQ7lqmuJRGOWQAibqYbfpHVocFGQMOOQ3sEGOqUBn3hx%2BQrhyXSIrvv2845KzEKrBhU1MRoDqKwfYDXWLI0SG4bqFCtRgRsOiGWhMIsWjpdprdDjXqNBljuzrkbGZ5%2Bw0mlA2ZuXOvSxJBs%2BOUd4BnrlK%2FAc6ai4wETj8mrimIoHSsyIUEO4h8R0b7DtLw2jMUu8tyI7ayP80s2i%2FQLsCc0EG227JjZDRV33qSOnqg0WVYSYo6V4Ee7CBwYT%2BpDy5ghr&X-Amz-Signature=5dcfec2dff2c711208767154ad35e805f634f24ab7572caa165b037905fbf459&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVJNPZX%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8mtt2qAg1tT7hQWBdGqCrg%2BF65xxMKxc3lYJ8l0FhPAiEAjOtSIBwyqmEa8TGF2Ff0Y3XsMFzgi7MqVA49l63oiiwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFx52usadsZbvK6EgyrcA1pi%2Bxr3nrD7w1RwBkKJ27qhTo45dwxETDtL8NhRR0HFWNGxHMA%2BWmNW7Y2xaz9tXsbwvTQW42JAO5306u3%2Bp0nZMdQwNAlkCbhzjrmbQk5DC4J9uRmYkDOovKuZjagAOF%2Fzj1kcs8zxNQSxtyqoVRpa%2BGnqS%2BlV4jbIFBFp3jKbtlMF3wI45zSh2JDnsr0xn9GDqZWrZ8sKrS3PVDs2GGtVqhKHFAxbJJpEx1EFl9F84ZHPvH1GjCsQ8MlEUtOYz6kmTtKjkWOdfDWuS9PoR%2FEr9V%2FpbpVGLpX9jD%2BdVOUhp2aOrKUvfXVQ9AMAQR3jYcnHeEFushEwTt779x9tIE2HP46jmKmZk5%2ByO6hoHVQnQkChUkdNbcf61oM2Ve09EQLOgbfUYKfnvBrOjrylGkWnVAd8MItBUGsuGwmTEMiIZ4Rci5nGBaBFXfiiNNztjODkRuyOvwqJmnxp1vqPsIWjo8hs9504fsjn5eQxEFdyR4exhfKVF0Q%2B9hcEr6%2B8LEfPd%2FOr3skc4yF5xYXeOWVZAXhpN1Vqnrq%2F5ENzx08b73Ft7Wby4Fajl1Cp%2Fw0eLQVvbVZ%2BVzUhsJTRF20cKbPz8edQX2GsPQ7lqmuJRGOWQAibqYbfpHVocFGQMOOQ3sEGOqUBn3hx%2BQrhyXSIrvv2845KzEKrBhU1MRoDqKwfYDXWLI0SG4bqFCtRgRsOiGWhMIsWjpdprdDjXqNBljuzrkbGZ5%2Bw0mlA2ZuXOvSxJBs%2BOUd4BnrlK%2FAc6ai4wETj8mrimIoHSsyIUEO4h8R0b7DtLw2jMUu8tyI7ayP80s2i%2FQLsCc0EG227JjZDRV33qSOnqg0WVYSYo6V4Ee7CBwYT%2BpDy5ghr&X-Amz-Signature=167021bb8a13f7421a58c524e9116eb4c3fa0bfbe29c0ac04f7bcea895ee07b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWVJNPZX%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8mtt2qAg1tT7hQWBdGqCrg%2BF65xxMKxc3lYJ8l0FhPAiEAjOtSIBwyqmEa8TGF2Ff0Y3XsMFzgi7MqVA49l63oiiwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFx52usadsZbvK6EgyrcA1pi%2Bxr3nrD7w1RwBkKJ27qhTo45dwxETDtL8NhRR0HFWNGxHMA%2BWmNW7Y2xaz9tXsbwvTQW42JAO5306u3%2Bp0nZMdQwNAlkCbhzjrmbQk5DC4J9uRmYkDOovKuZjagAOF%2Fzj1kcs8zxNQSxtyqoVRpa%2BGnqS%2BlV4jbIFBFp3jKbtlMF3wI45zSh2JDnsr0xn9GDqZWrZ8sKrS3PVDs2GGtVqhKHFAxbJJpEx1EFl9F84ZHPvH1GjCsQ8MlEUtOYz6kmTtKjkWOdfDWuS9PoR%2FEr9V%2FpbpVGLpX9jD%2BdVOUhp2aOrKUvfXVQ9AMAQR3jYcnHeEFushEwTt779x9tIE2HP46jmKmZk5%2ByO6hoHVQnQkChUkdNbcf61oM2Ve09EQLOgbfUYKfnvBrOjrylGkWnVAd8MItBUGsuGwmTEMiIZ4Rci5nGBaBFXfiiNNztjODkRuyOvwqJmnxp1vqPsIWjo8hs9504fsjn5eQxEFdyR4exhfKVF0Q%2B9hcEr6%2B8LEfPd%2FOr3skc4yF5xYXeOWVZAXhpN1Vqnrq%2F5ENzx08b73Ft7Wby4Fajl1Cp%2Fw0eLQVvbVZ%2BVzUhsJTRF20cKbPz8edQX2GsPQ7lqmuJRGOWQAibqYbfpHVocFGQMOOQ3sEGOqUBn3hx%2BQrhyXSIrvv2845KzEKrBhU1MRoDqKwfYDXWLI0SG4bqFCtRgRsOiGWhMIsWjpdprdDjXqNBljuzrkbGZ5%2Bw0mlA2ZuXOvSxJBs%2BOUd4BnrlK%2FAc6ai4wETj8mrimIoHSsyIUEO4h8R0b7DtLw2jMUu8tyI7ayP80s2i%2FQLsCc0EG227JjZDRV33qSOnqg0WVYSYo6V4Ee7CBwYT%2BpDy5ghr&X-Amz-Signature=b165bc882282fba013c81f6a75434b4bb45d105aed50d135517e82655a243fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

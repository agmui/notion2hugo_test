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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MR3RZ55%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDqzt4VqSIzKqbG0haASjKdkRuk7tTlypm7uIgDTM%2FkugIhAJjdLZJov%2BQDZaKqRltFMl0xm%2Fw8Sbulv1YPgdeAwcnhKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziuAs7PtiZ3PIF8u8q3AOFFXjyl8oQdaKGxmUmErJ6wQU5OlCIk5%2BkdAAVfb2gSJhi8oZgofwmL%2FhSrMCgg%2FWmUcPza4cLyyeDMtyPjeIGIxtImv6soVNyBqSu8xOkusSMVHrX1vE%2Fn5HyaXEgd1eAuxHiN2oR0jEd2qp0BAuxyIYNsSlu%2FhBs9hKgiFqzlPCOkPoFhXfLsvfy%2F1wbt3MWe0g97AIwkuZL41AOGHqVKOiMAdUB%2Fyl6JEHO%2FhSJTU0Usx9uiJutva4UuS%2FjEoL0D2JBseAipPsjozV9BEUr6%2Fky34%2F0Mjmx%2BDvJKMvQfmSEOuzIUFcnaJDaC2RdEGRK0BHi3pZx3bX2gqur1CBpqbOYeYTfkxtyXTEMbmzkI1AzRO1v59MMJj1TdOgyviEK%2F%2FSWBkvJo3KMh%2B%2BB04lGlE9NagDIrNECY09qIuzRd4%2BqxS0tp7K8xCiM%2FIl4jl2yadk7VlNGM8CGQNuXuYtp0RIMz2HG7%2B5PKV5Ly22SgK7Hghm0Sj6Jl9GHgZ%2F5gx643qpVw8rXbaQvFLFzpUhCpm4UsT9SsMGGoIsISLMK6SI3iDF8AqcpIGBsVuKIxd7xLCQcTDpf6MJWHWTka%2B6H9LmF5TOHZ%2FJxD90LFj8o4JmmMBx7b5%2FAMCW6VjDZx9bEBjqkAeTC%2F%2BcRS1jbdW25T%2FlZn0hi2o4lCFoqdmB3tI3bBN08yFEQ%2B81qab6VgG308Xs%2BaxpLMwpxV9fxk5Mx59YouEE%2Ft337as1g4GZo9GaJ%2B9Xz3zgGOFl5OcOwzwTw0Ur3GywbH%2BI2wFPYeLJJgvX4vk7s3PMI%2FmerTo3qVWCPg9nW56kjmkSH%2FOK1O7rJSlIrHxA1mLX714A3oOtycRN%2F7zW1HPl6&X-Amz-Signature=63bb9b1f542c19f5ca223c3047e3d7c6da05c68ea11176e299c1038567e17cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MR3RZ55%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDqzt4VqSIzKqbG0haASjKdkRuk7tTlypm7uIgDTM%2FkugIhAJjdLZJov%2BQDZaKqRltFMl0xm%2Fw8Sbulv1YPgdeAwcnhKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziuAs7PtiZ3PIF8u8q3AOFFXjyl8oQdaKGxmUmErJ6wQU5OlCIk5%2BkdAAVfb2gSJhi8oZgofwmL%2FhSrMCgg%2FWmUcPza4cLyyeDMtyPjeIGIxtImv6soVNyBqSu8xOkusSMVHrX1vE%2Fn5HyaXEgd1eAuxHiN2oR0jEd2qp0BAuxyIYNsSlu%2FhBs9hKgiFqzlPCOkPoFhXfLsvfy%2F1wbt3MWe0g97AIwkuZL41AOGHqVKOiMAdUB%2Fyl6JEHO%2FhSJTU0Usx9uiJutva4UuS%2FjEoL0D2JBseAipPsjozV9BEUr6%2Fky34%2F0Mjmx%2BDvJKMvQfmSEOuzIUFcnaJDaC2RdEGRK0BHi3pZx3bX2gqur1CBpqbOYeYTfkxtyXTEMbmzkI1AzRO1v59MMJj1TdOgyviEK%2F%2FSWBkvJo3KMh%2B%2BB04lGlE9NagDIrNECY09qIuzRd4%2BqxS0tp7K8xCiM%2FIl4jl2yadk7VlNGM8CGQNuXuYtp0RIMz2HG7%2B5PKV5Ly22SgK7Hghm0Sj6Jl9GHgZ%2F5gx643qpVw8rXbaQvFLFzpUhCpm4UsT9SsMGGoIsISLMK6SI3iDF8AqcpIGBsVuKIxd7xLCQcTDpf6MJWHWTka%2B6H9LmF5TOHZ%2FJxD90LFj8o4JmmMBx7b5%2FAMCW6VjDZx9bEBjqkAeTC%2F%2BcRS1jbdW25T%2FlZn0hi2o4lCFoqdmB3tI3bBN08yFEQ%2B81qab6VgG308Xs%2BaxpLMwpxV9fxk5Mx59YouEE%2Ft337as1g4GZo9GaJ%2B9Xz3zgGOFl5OcOwzwTw0Ur3GywbH%2BI2wFPYeLJJgvX4vk7s3PMI%2FmerTo3qVWCPg9nW56kjmkSH%2FOK1O7rJSlIrHxA1mLX714A3oOtycRN%2F7zW1HPl6&X-Amz-Signature=d18ee6feb1450e35a6745aca41b47571f02a33de3db9c2ec229b7ee6092741f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MR3RZ55%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDqzt4VqSIzKqbG0haASjKdkRuk7tTlypm7uIgDTM%2FkugIhAJjdLZJov%2BQDZaKqRltFMl0xm%2Fw8Sbulv1YPgdeAwcnhKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziuAs7PtiZ3PIF8u8q3AOFFXjyl8oQdaKGxmUmErJ6wQU5OlCIk5%2BkdAAVfb2gSJhi8oZgofwmL%2FhSrMCgg%2FWmUcPza4cLyyeDMtyPjeIGIxtImv6soVNyBqSu8xOkusSMVHrX1vE%2Fn5HyaXEgd1eAuxHiN2oR0jEd2qp0BAuxyIYNsSlu%2FhBs9hKgiFqzlPCOkPoFhXfLsvfy%2F1wbt3MWe0g97AIwkuZL41AOGHqVKOiMAdUB%2Fyl6JEHO%2FhSJTU0Usx9uiJutva4UuS%2FjEoL0D2JBseAipPsjozV9BEUr6%2Fky34%2F0Mjmx%2BDvJKMvQfmSEOuzIUFcnaJDaC2RdEGRK0BHi3pZx3bX2gqur1CBpqbOYeYTfkxtyXTEMbmzkI1AzRO1v59MMJj1TdOgyviEK%2F%2FSWBkvJo3KMh%2B%2BB04lGlE9NagDIrNECY09qIuzRd4%2BqxS0tp7K8xCiM%2FIl4jl2yadk7VlNGM8CGQNuXuYtp0RIMz2HG7%2B5PKV5Ly22SgK7Hghm0Sj6Jl9GHgZ%2F5gx643qpVw8rXbaQvFLFzpUhCpm4UsT9SsMGGoIsISLMK6SI3iDF8AqcpIGBsVuKIxd7xLCQcTDpf6MJWHWTka%2B6H9LmF5TOHZ%2FJxD90LFj8o4JmmMBx7b5%2FAMCW6VjDZx9bEBjqkAeTC%2F%2BcRS1jbdW25T%2FlZn0hi2o4lCFoqdmB3tI3bBN08yFEQ%2B81qab6VgG308Xs%2BaxpLMwpxV9fxk5Mx59YouEE%2Ft337as1g4GZo9GaJ%2B9Xz3zgGOFl5OcOwzwTw0Ur3GywbH%2BI2wFPYeLJJgvX4vk7s3PMI%2FmerTo3qVWCPg9nW56kjmkSH%2FOK1O7rJSlIrHxA1mLX714A3oOtycRN%2F7zW1HPl6&X-Amz-Signature=693a0422e17aa082dfc1574e761f068acdea3fb3b138a6f795911db5e5de28e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

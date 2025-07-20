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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJD2XIZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC395Ah15okTcd%2BNnS2xeGsontRq8FgqcXnGAQF3quOlAiB7XWnUGiVkdatwCGABbxUJV5dfgFofNRFQ6PtYQzz%2F%2FiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMth3rSAsRa0lrZ5A6KtwDMoqMHHDb86%2F4WKTbmdCqg6S9%2BMdDQQAO325yHXDAC4qqFQfOwVbH4IRWEvMeJXdqpuvCddhnYYi6%2BB%2BNq%2BB8kkjU1bzuyCrgAqGzTfzvCOkJh9xjBTxAJdrQaZ7mRTl7MxPIbkZvsoYORtaXz0JiK2KfJuUh5QqNd1bWVeTHp5vuBTq68ljUBvbBtwpNr65BFegjeX74jMWMLrxfy7cqgiuYPv8b6aJYEQCvLOYU9jTyv%2FH8Xxb36kOiNsRXLut7MUJuE0dy4fgqh0QlfBGaVWd46fl1bM2n%2B2K2g5mqbnVSSPClSXDmAPhXJqC55dttEol9SvhBLqgBw3Uf7o%2FHIWcnfB8oBarLBHxFtPuGmkepWTtIkBbzB0HCqrMRe%2B1x3%2FCewnt4Xr%2FNiGCKsDfG2SxMMjf1X%2FN2BAHriRs0FjBe%2BDT5wAOc4pS4c73cAv9ImmpHwNkKQAskFcktY9LGuqygOJwIR1%2FvjfRCD66l3jO7rUUqeFgKrSYI9ciPWeWlwp9fxE0YulYb1ym3IzgqDDuQyRlJJjZmprl0i%2BEaw1B75lY5xdAYj3NA0jBtbxiqn2oPBRz7XxnRhHScZoEA%2FQHrPSzVxSVM0smM6kx2QfhRH8HkcNgcOvDSFFswytbzwwY6pgGLq4VT0x2E4ror9q3ThUq5%2FrxqZITr0bAniW8ko2w%2B%2FGPZBtMXDaN3twjPJhcZN34JdDNKfgS6kaSXl815n%2BuL9waWk30l09B9h9XG9skGhD3pVC5F6J%2B%2FOqFB0gag35J0AhftcDh23Zge1y29bmt2rOsyZs7xhGmIjQi%2BSgaPtMKikzDOU8T4gKDW4jb%2BDiV3ABVRlk0oxVamNW1evorEH0IFQR1q&X-Amz-Signature=98cc50272659d6377333b1dcff0ae8cf8dc1b6750c1f57133f79097d71df3b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJD2XIZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC395Ah15okTcd%2BNnS2xeGsontRq8FgqcXnGAQF3quOlAiB7XWnUGiVkdatwCGABbxUJV5dfgFofNRFQ6PtYQzz%2F%2FiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMth3rSAsRa0lrZ5A6KtwDMoqMHHDb86%2F4WKTbmdCqg6S9%2BMdDQQAO325yHXDAC4qqFQfOwVbH4IRWEvMeJXdqpuvCddhnYYi6%2BB%2BNq%2BB8kkjU1bzuyCrgAqGzTfzvCOkJh9xjBTxAJdrQaZ7mRTl7MxPIbkZvsoYORtaXz0JiK2KfJuUh5QqNd1bWVeTHp5vuBTq68ljUBvbBtwpNr65BFegjeX74jMWMLrxfy7cqgiuYPv8b6aJYEQCvLOYU9jTyv%2FH8Xxb36kOiNsRXLut7MUJuE0dy4fgqh0QlfBGaVWd46fl1bM2n%2B2K2g5mqbnVSSPClSXDmAPhXJqC55dttEol9SvhBLqgBw3Uf7o%2FHIWcnfB8oBarLBHxFtPuGmkepWTtIkBbzB0HCqrMRe%2B1x3%2FCewnt4Xr%2FNiGCKsDfG2SxMMjf1X%2FN2BAHriRs0FjBe%2BDT5wAOc4pS4c73cAv9ImmpHwNkKQAskFcktY9LGuqygOJwIR1%2FvjfRCD66l3jO7rUUqeFgKrSYI9ciPWeWlwp9fxE0YulYb1ym3IzgqDDuQyRlJJjZmprl0i%2BEaw1B75lY5xdAYj3NA0jBtbxiqn2oPBRz7XxnRhHScZoEA%2FQHrPSzVxSVM0smM6kx2QfhRH8HkcNgcOvDSFFswytbzwwY6pgGLq4VT0x2E4ror9q3ThUq5%2FrxqZITr0bAniW8ko2w%2B%2FGPZBtMXDaN3twjPJhcZN34JdDNKfgS6kaSXl815n%2BuL9waWk30l09B9h9XG9skGhD3pVC5F6J%2B%2FOqFB0gag35J0AhftcDh23Zge1y29bmt2rOsyZs7xhGmIjQi%2BSgaPtMKikzDOU8T4gKDW4jb%2BDiV3ABVRlk0oxVamNW1evorEH0IFQR1q&X-Amz-Signature=71d10318583dfac13e4dede863a52adac2934ba3d46b5e44f7a7b0ff516abc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJD2XIZ%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T140740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC395Ah15okTcd%2BNnS2xeGsontRq8FgqcXnGAQF3quOlAiB7XWnUGiVkdatwCGABbxUJV5dfgFofNRFQ6PtYQzz%2F%2FiqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMth3rSAsRa0lrZ5A6KtwDMoqMHHDb86%2F4WKTbmdCqg6S9%2BMdDQQAO325yHXDAC4qqFQfOwVbH4IRWEvMeJXdqpuvCddhnYYi6%2BB%2BNq%2BB8kkjU1bzuyCrgAqGzTfzvCOkJh9xjBTxAJdrQaZ7mRTl7MxPIbkZvsoYORtaXz0JiK2KfJuUh5QqNd1bWVeTHp5vuBTq68ljUBvbBtwpNr65BFegjeX74jMWMLrxfy7cqgiuYPv8b6aJYEQCvLOYU9jTyv%2FH8Xxb36kOiNsRXLut7MUJuE0dy4fgqh0QlfBGaVWd46fl1bM2n%2B2K2g5mqbnVSSPClSXDmAPhXJqC55dttEol9SvhBLqgBw3Uf7o%2FHIWcnfB8oBarLBHxFtPuGmkepWTtIkBbzB0HCqrMRe%2B1x3%2FCewnt4Xr%2FNiGCKsDfG2SxMMjf1X%2FN2BAHriRs0FjBe%2BDT5wAOc4pS4c73cAv9ImmpHwNkKQAskFcktY9LGuqygOJwIR1%2FvjfRCD66l3jO7rUUqeFgKrSYI9ciPWeWlwp9fxE0YulYb1ym3IzgqDDuQyRlJJjZmprl0i%2BEaw1B75lY5xdAYj3NA0jBtbxiqn2oPBRz7XxnRhHScZoEA%2FQHrPSzVxSVM0smM6kx2QfhRH8HkcNgcOvDSFFswytbzwwY6pgGLq4VT0x2E4ror9q3ThUq5%2FrxqZITr0bAniW8ko2w%2B%2FGPZBtMXDaN3twjPJhcZN34JdDNKfgS6kaSXl815n%2BuL9waWk30l09B9h9XG9skGhD3pVC5F6J%2B%2FOqFB0gag35J0AhftcDh23Zge1y29bmt2rOsyZs7xhGmIjQi%2BSgaPtMKikzDOU8T4gKDW4jb%2BDiV3ABVRlk0oxVamNW1evorEH0IFQR1q&X-Amz-Signature=aee85e0234ae4120ed64d011a2ebd679af69598d02ea18bc511a720ade497aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QQAXKU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCbfF%2F4Jz5GYajFHPsLknqD2Hc0Cr0ozjvI7E10ehoVxgIgX28Y9gwEJJHk5ovxw8wNAO56NFc985IWTlT2Y27zrBkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKqCEIBOQEI1dp8gqyrcA2mBQa0yESec7V45ww%2BPuLO4j7%2B4k9hDEmDfh7cZUrj%2BvCHm%2FVcm%2BNjKF98P7gczK4UMGWBhsEiYPKTSfIHJz68bKZD9XGA6wgx4hnpjGfHGL6CSUD0ATN%2ByWWKXwdNnGX1gU0npjrCo4Q8vlgfBOCx%2BsP95ZXMK0Lq619CZ43Ux%2FlqTzCnDeHrjWr4%2B3a27cuyFX2fPD9xSQeyV9IWBhnNH2FQ0QiAiflOHRlbA1VJjv5cW8sNAfwMzETb4R8sF8Ym%2B9gcX4EjKludLfSFrravIF%2BCRGoA1SDTh3tuV4KOG8BIR%2B1ir7t6hBMMfJqmCZ5UB6N8XiDVEdQTsX89y4PS2MZt5Q6T3yRZzt5oZHAwYG0tKhr8OvpOz0qM59veqE7snfxl5EUTSZYYr%2FK1nlezZQRmIwylW%2B1aG4KzVj%2FMW6P6nK%2FebBgE66UTCoyQST2HkdrSxuOFDfvQ4KzSQKkpIdbRCIQ6wEAiB4TidGxWIuztBqSKjNv8mXx3P1diJDRkoXHG8SEVDBzSbOpGd4gKiO3Va1yBcUzBdwJoc0NeaPoWALKLLLL75VvW1P1UhNWPEdDf%2BRJEC%2B2SjBbQ80vNr9EyE2w62VxgBjVIRHRoxZPeTv1BoCplKrJimMPnFwr0GOqUBupyd9aSfmN9FSaKo0wtis9VQI5RA7K%2FzHPbciSsGV6OReLj4xSuYF0I624%2Bv2vN9u7UJ3DDb%2BRMDNS8kBnVaRG0uF5YU0zIvfDZbJZ5FjCPyVZxwYYWqBAGJBz34NJdyaTr4Or0aDQ4v2WQQ92Tb%2BTjPaXK5ng35ysFUcuADC11n7vg%2FRYDQDU6XieTQGj7ppOc5AeD1c5eEPjYcql%2BJqkoo4L4W&X-Amz-Signature=9c8502dfffef65459815aa197ab518446db9542748e51bcaf3b1f378bfe4a7da&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QQAXKU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCbfF%2F4Jz5GYajFHPsLknqD2Hc0Cr0ozjvI7E10ehoVxgIgX28Y9gwEJJHk5ovxw8wNAO56NFc985IWTlT2Y27zrBkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKqCEIBOQEI1dp8gqyrcA2mBQa0yESec7V45ww%2BPuLO4j7%2B4k9hDEmDfh7cZUrj%2BvCHm%2FVcm%2BNjKF98P7gczK4UMGWBhsEiYPKTSfIHJz68bKZD9XGA6wgx4hnpjGfHGL6CSUD0ATN%2ByWWKXwdNnGX1gU0npjrCo4Q8vlgfBOCx%2BsP95ZXMK0Lq619CZ43Ux%2FlqTzCnDeHrjWr4%2B3a27cuyFX2fPD9xSQeyV9IWBhnNH2FQ0QiAiflOHRlbA1VJjv5cW8sNAfwMzETb4R8sF8Ym%2B9gcX4EjKludLfSFrravIF%2BCRGoA1SDTh3tuV4KOG8BIR%2B1ir7t6hBMMfJqmCZ5UB6N8XiDVEdQTsX89y4PS2MZt5Q6T3yRZzt5oZHAwYG0tKhr8OvpOz0qM59veqE7snfxl5EUTSZYYr%2FK1nlezZQRmIwylW%2B1aG4KzVj%2FMW6P6nK%2FebBgE66UTCoyQST2HkdrSxuOFDfvQ4KzSQKkpIdbRCIQ6wEAiB4TidGxWIuztBqSKjNv8mXx3P1diJDRkoXHG8SEVDBzSbOpGd4gKiO3Va1yBcUzBdwJoc0NeaPoWALKLLLL75VvW1P1UhNWPEdDf%2BRJEC%2B2SjBbQ80vNr9EyE2w62VxgBjVIRHRoxZPeTv1BoCplKrJimMPnFwr0GOqUBupyd9aSfmN9FSaKo0wtis9VQI5RA7K%2FzHPbciSsGV6OReLj4xSuYF0I624%2Bv2vN9u7UJ3DDb%2BRMDNS8kBnVaRG0uF5YU0zIvfDZbJZ5FjCPyVZxwYYWqBAGJBz34NJdyaTr4Or0aDQ4v2WQQ92Tb%2BTjPaXK5ng35ysFUcuADC11n7vg%2FRYDQDU6XieTQGj7ppOc5AeD1c5eEPjYcql%2BJqkoo4L4W&X-Amz-Signature=c9750a68a57537ac1d4885be9e166095dfef3f6b436fbe088704cc6e576e2095&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7QQAXKU%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T170202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCbfF%2F4Jz5GYajFHPsLknqD2Hc0Cr0ozjvI7E10ehoVxgIgX28Y9gwEJJHk5ovxw8wNAO56NFc985IWTlT2Y27zrBkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDKqCEIBOQEI1dp8gqyrcA2mBQa0yESec7V45ww%2BPuLO4j7%2B4k9hDEmDfh7cZUrj%2BvCHm%2FVcm%2BNjKF98P7gczK4UMGWBhsEiYPKTSfIHJz68bKZD9XGA6wgx4hnpjGfHGL6CSUD0ATN%2ByWWKXwdNnGX1gU0npjrCo4Q8vlgfBOCx%2BsP95ZXMK0Lq619CZ43Ux%2FlqTzCnDeHrjWr4%2B3a27cuyFX2fPD9xSQeyV9IWBhnNH2FQ0QiAiflOHRlbA1VJjv5cW8sNAfwMzETb4R8sF8Ym%2B9gcX4EjKludLfSFrravIF%2BCRGoA1SDTh3tuV4KOG8BIR%2B1ir7t6hBMMfJqmCZ5UB6N8XiDVEdQTsX89y4PS2MZt5Q6T3yRZzt5oZHAwYG0tKhr8OvpOz0qM59veqE7snfxl5EUTSZYYr%2FK1nlezZQRmIwylW%2B1aG4KzVj%2FMW6P6nK%2FebBgE66UTCoyQST2HkdrSxuOFDfvQ4KzSQKkpIdbRCIQ6wEAiB4TidGxWIuztBqSKjNv8mXx3P1diJDRkoXHG8SEVDBzSbOpGd4gKiO3Va1yBcUzBdwJoc0NeaPoWALKLLLL75VvW1P1UhNWPEdDf%2BRJEC%2B2SjBbQ80vNr9EyE2w62VxgBjVIRHRoxZPeTv1BoCplKrJimMPnFwr0GOqUBupyd9aSfmN9FSaKo0wtis9VQI5RA7K%2FzHPbciSsGV6OReLj4xSuYF0I624%2Bv2vN9u7UJ3DDb%2BRMDNS8kBnVaRG0uF5YU0zIvfDZbJZ5FjCPyVZxwYYWqBAGJBz34NJdyaTr4Or0aDQ4v2WQQ92Tb%2BTjPaXK5ng35ysFUcuADC11n7vg%2FRYDQDU6XieTQGj7ppOc5AeD1c5eEPjYcql%2BJqkoo4L4W&X-Amz-Signature=5d9f544673727cdd07cf2b5ab166125ac28a3a538d963a3770b64991dae4d824&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

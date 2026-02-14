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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STUCMKVV%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFQIU21FReKeNqXESoN3n8%2F%2B0URN4pmUXjQ2iUapRWmeAiA5rrjPkxtMVZxCSbCWz7Rg4yT83V1QxQG8yrQpuUYEVSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM477xPIUaYcqZviN6KtwDGE2hdxh2VJpuACWl6eOOlB0L8jopiK4bClWsY0ywPEY9ASwk3MQZ89F0VCUL1Ds3R4L8HUFE%2BCa8mU4293skJv8iprNjuYhU0O88IDzMvZK45JRWJ8puRBMv4AXHgl4NtVTlEiXV9Y97WIZVMEyGA9xez%2FMxWgdkg8yCBTnVPVM1uEi7Tt8DnR8uBxROzRdSZsJiVfGlG7HkEGJ4gVQuFPGTFAscXdxlEPdhqaTQrMPQdpYR5Ploicgek2SbwY2767Qm69YthkbAUq1QLFYMspvG0e3XwKQxUWCVZGzpPMPnbyUzp2UzsS7cpdjcQBj%2FRTkSmBRhWitPwLHdnVN0DRe0jdwqg2u7ACt6RvNvt0a%2FP%2FJHseoqv0bVvBwquMsabaZ%2FOnPSZguGBPvOblFpQ6W70%2BNXSqYrOH9P7f5IfXnY0QD2AUXHFrLHapeLPjTVKLbtldo9keZBDojuAIK3ePVxBNpQ%2BbH356wcOCtRWtkoYJ1CxVRVxDmzS6aTn1ihpm4%2BSG%2FYQeUrMsCdFkvDknF29KLpT6kXRSJDm%2B2f0683bglj7f%2B5XXp81gaGXx7j5IWkrNxQ23RVT0npLLK%2Fy%2FxMsoxhWdYB7n3PW1La%2B2yCrtx5MlF8R6xH4sYwuZO%2FzAY6pgE7%2B7ckk5hG4F67vq26TsEKA%2FK5IT5Jjm9%2Flyd81oSmQT5XaWQjuCIF4Lo2fkfhM5fsrz7m2gnjaaEkpY%2BxJ5J8ldLSDvx4L7xdXQoGiQI%2BnP59PLlE0gDuknYHrmGgtw8Zlc84Bnk2afrVSLxGmiX%2F7a38wtWPHEg3NROisWpqURmx0m%2BWxjWqA%2F6kdnpBP%2BYyAA68OGoXcjKbTN82%2Fg1YxZtRKyDd&X-Amz-Signature=535696473b8a9c62c47926cd4434caf6c0d91a4cf37cf22fe2607b9865eae975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STUCMKVV%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFQIU21FReKeNqXESoN3n8%2F%2B0URN4pmUXjQ2iUapRWmeAiA5rrjPkxtMVZxCSbCWz7Rg4yT83V1QxQG8yrQpuUYEVSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM477xPIUaYcqZviN6KtwDGE2hdxh2VJpuACWl6eOOlB0L8jopiK4bClWsY0ywPEY9ASwk3MQZ89F0VCUL1Ds3R4L8HUFE%2BCa8mU4293skJv8iprNjuYhU0O88IDzMvZK45JRWJ8puRBMv4AXHgl4NtVTlEiXV9Y97WIZVMEyGA9xez%2FMxWgdkg8yCBTnVPVM1uEi7Tt8DnR8uBxROzRdSZsJiVfGlG7HkEGJ4gVQuFPGTFAscXdxlEPdhqaTQrMPQdpYR5Ploicgek2SbwY2767Qm69YthkbAUq1QLFYMspvG0e3XwKQxUWCVZGzpPMPnbyUzp2UzsS7cpdjcQBj%2FRTkSmBRhWitPwLHdnVN0DRe0jdwqg2u7ACt6RvNvt0a%2FP%2FJHseoqv0bVvBwquMsabaZ%2FOnPSZguGBPvOblFpQ6W70%2BNXSqYrOH9P7f5IfXnY0QD2AUXHFrLHapeLPjTVKLbtldo9keZBDojuAIK3ePVxBNpQ%2BbH356wcOCtRWtkoYJ1CxVRVxDmzS6aTn1ihpm4%2BSG%2FYQeUrMsCdFkvDknF29KLpT6kXRSJDm%2B2f0683bglj7f%2B5XXp81gaGXx7j5IWkrNxQ23RVT0npLLK%2Fy%2FxMsoxhWdYB7n3PW1La%2B2yCrtx5MlF8R6xH4sYwuZO%2FzAY6pgE7%2B7ckk5hG4F67vq26TsEKA%2FK5IT5Jjm9%2Flyd81oSmQT5XaWQjuCIF4Lo2fkfhM5fsrz7m2gnjaaEkpY%2BxJ5J8ldLSDvx4L7xdXQoGiQI%2BnP59PLlE0gDuknYHrmGgtw8Zlc84Bnk2afrVSLxGmiX%2F7a38wtWPHEg3NROisWpqURmx0m%2BWxjWqA%2F6kdnpBP%2BYyAA68OGoXcjKbTN82%2Fg1YxZtRKyDd&X-Amz-Signature=05d18a8511f5f2cd7c11b6ac913c7b7d32874cd505d39443ed6861e9b2cbf4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STUCMKVV%2F20260214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260214T020520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIFQIU21FReKeNqXESoN3n8%2F%2B0URN4pmUXjQ2iUapRWmeAiA5rrjPkxtMVZxCSbCWz7Rg4yT83V1QxQG8yrQpuUYEVSqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM477xPIUaYcqZviN6KtwDGE2hdxh2VJpuACWl6eOOlB0L8jopiK4bClWsY0ywPEY9ASwk3MQZ89F0VCUL1Ds3R4L8HUFE%2BCa8mU4293skJv8iprNjuYhU0O88IDzMvZK45JRWJ8puRBMv4AXHgl4NtVTlEiXV9Y97WIZVMEyGA9xez%2FMxWgdkg8yCBTnVPVM1uEi7Tt8DnR8uBxROzRdSZsJiVfGlG7HkEGJ4gVQuFPGTFAscXdxlEPdhqaTQrMPQdpYR5Ploicgek2SbwY2767Qm69YthkbAUq1QLFYMspvG0e3XwKQxUWCVZGzpPMPnbyUzp2UzsS7cpdjcQBj%2FRTkSmBRhWitPwLHdnVN0DRe0jdwqg2u7ACt6RvNvt0a%2FP%2FJHseoqv0bVvBwquMsabaZ%2FOnPSZguGBPvOblFpQ6W70%2BNXSqYrOH9P7f5IfXnY0QD2AUXHFrLHapeLPjTVKLbtldo9keZBDojuAIK3ePVxBNpQ%2BbH356wcOCtRWtkoYJ1CxVRVxDmzS6aTn1ihpm4%2BSG%2FYQeUrMsCdFkvDknF29KLpT6kXRSJDm%2B2f0683bglj7f%2B5XXp81gaGXx7j5IWkrNxQ23RVT0npLLK%2Fy%2FxMsoxhWdYB7n3PW1La%2B2yCrtx5MlF8R6xH4sYwuZO%2FzAY6pgE7%2B7ckk5hG4F67vq26TsEKA%2FK5IT5Jjm9%2Flyd81oSmQT5XaWQjuCIF4Lo2fkfhM5fsrz7m2gnjaaEkpY%2BxJ5J8ldLSDvx4L7xdXQoGiQI%2BnP59PLlE0gDuknYHrmGgtw8Zlc84Bnk2afrVSLxGmiX%2F7a38wtWPHEg3NROisWpqURmx0m%2BWxjWqA%2F6kdnpBP%2BYyAA68OGoXcjKbTN82%2Fg1YxZtRKyDd&X-Amz-Signature=95153ff3db137836202bf1051bce841b5af8feca53167b6119bf144687d285a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

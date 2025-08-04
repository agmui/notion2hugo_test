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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLVE6RU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBvr8KfBgIrLBNQGkM4HklHvJ6LoX%2B1NTn3o4MBPA3GxAiAFlowfHQfAps81z1r9bQ55CbNhi7QEBT%2BhZSRCcmcJpyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2BjyKFrnqBpORdwESKtwDUvjdESo2rgEhheckoVbT7mxxhYAQMIJhXTk%2BIoOR7tYrKrlItmIE0ke40WL7SvOYkwY7amUeJwXJeeH8NrdxSuf41NgAYvPJlFOvuZgwFAnFB6k1bLsdqlnfwCsdOZbUVlu2ekE0%2FTnNS4AbH1Fnbyuj0lzFkLZeC1u8rnoReFwbdNfahOfpSbZqmGJmGA71RuLPyxg7833zZeQhxXKZ%2F3tnYvv%2FlpAZMFl0ztroBCYQA34gHQAureVkJEptMeew86ucJtOylKHiwEP6ngGOMDHjKCe2iFcCHpDDplwKksE9zJI1Q2ECbL5JkJPxn5QYwO2Ntn5QC8UM4MQfgPxKmR%2BpUmzCLSP0dYzkGYV8wGHMvPkXPV2Odar1NVzwn2ZN79SEONJZCEKvUtUWPrn4DpTr%2BGw9FxCq85pI2zWQDNUbj%2BtiOOqqGMDmrRJZrQFNVWwA%2Fus4odmda4K8d4dwZmE1I2HblXvlVENv877WkWRpBPBf1lThhRXg0usuS6wz1bG%2F5KiH22loH1k7bci3MMqzT9HIKbbZdOCkm2jIV8lBwQudB%2Fig8bv9U5Z6Va9yMFlQxx42tWorMLqr7IH224shxfRq7DSnIKf8dnisGOo0vBJQ7UZAcLe%2FMlIwsrbBxAY6pgGTT3cgrbRvui%2FffqN4CvfkdDaa4u8%2Fa6M%2FjnSE6Hnl%2FjKZP5e193516YbT11nM7VBayQYmqkGauCodi0%2BElO4NiyJUhy05vaBiBbUXKJJg7hvXHr6r5%2BZCaNU51r%2F3j8kaFH4uoBDeCJRrxNgcVM4FgACjkwnfwfX2IpRc5E%2B%2FsbD7wEg9IyWmXSfXEoHvdWf8HJjcnIabk05Trq9tFIaxp5yKcg8J&X-Amz-Signature=de9567c8cb4b6dc40347fd3b44be0411ed47f255b0f15de901b037ad3a834379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLVE6RU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBvr8KfBgIrLBNQGkM4HklHvJ6LoX%2B1NTn3o4MBPA3GxAiAFlowfHQfAps81z1r9bQ55CbNhi7QEBT%2BhZSRCcmcJpyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2BjyKFrnqBpORdwESKtwDUvjdESo2rgEhheckoVbT7mxxhYAQMIJhXTk%2BIoOR7tYrKrlItmIE0ke40WL7SvOYkwY7amUeJwXJeeH8NrdxSuf41NgAYvPJlFOvuZgwFAnFB6k1bLsdqlnfwCsdOZbUVlu2ekE0%2FTnNS4AbH1Fnbyuj0lzFkLZeC1u8rnoReFwbdNfahOfpSbZqmGJmGA71RuLPyxg7833zZeQhxXKZ%2F3tnYvv%2FlpAZMFl0ztroBCYQA34gHQAureVkJEptMeew86ucJtOylKHiwEP6ngGOMDHjKCe2iFcCHpDDplwKksE9zJI1Q2ECbL5JkJPxn5QYwO2Ntn5QC8UM4MQfgPxKmR%2BpUmzCLSP0dYzkGYV8wGHMvPkXPV2Odar1NVzwn2ZN79SEONJZCEKvUtUWPrn4DpTr%2BGw9FxCq85pI2zWQDNUbj%2BtiOOqqGMDmrRJZrQFNVWwA%2Fus4odmda4K8d4dwZmE1I2HblXvlVENv877WkWRpBPBf1lThhRXg0usuS6wz1bG%2F5KiH22loH1k7bci3MMqzT9HIKbbZdOCkm2jIV8lBwQudB%2Fig8bv9U5Z6Va9yMFlQxx42tWorMLqr7IH224shxfRq7DSnIKf8dnisGOo0vBJQ7UZAcLe%2FMlIwsrbBxAY6pgGTT3cgrbRvui%2FffqN4CvfkdDaa4u8%2Fa6M%2FjnSE6Hnl%2FjKZP5e193516YbT11nM7VBayQYmqkGauCodi0%2BElO4NiyJUhy05vaBiBbUXKJJg7hvXHr6r5%2BZCaNU51r%2F3j8kaFH4uoBDeCJRrxNgcVM4FgACjkwnfwfX2IpRc5E%2B%2FsbD7wEg9IyWmXSfXEoHvdWf8HJjcnIabk05Trq9tFIaxp5yKcg8J&X-Amz-Signature=38dfaec140962440f36c184e3aa6da409d09ccd548ef69ee050153b4d0fc6d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FLVE6RU%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T081501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIBvr8KfBgIrLBNQGkM4HklHvJ6LoX%2B1NTn3o4MBPA3GxAiAFlowfHQfAps81z1r9bQ55CbNhi7QEBT%2BhZSRCcmcJpyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM%2BjyKFrnqBpORdwESKtwDUvjdESo2rgEhheckoVbT7mxxhYAQMIJhXTk%2BIoOR7tYrKrlItmIE0ke40WL7SvOYkwY7amUeJwXJeeH8NrdxSuf41NgAYvPJlFOvuZgwFAnFB6k1bLsdqlnfwCsdOZbUVlu2ekE0%2FTnNS4AbH1Fnbyuj0lzFkLZeC1u8rnoReFwbdNfahOfpSbZqmGJmGA71RuLPyxg7833zZeQhxXKZ%2F3tnYvv%2FlpAZMFl0ztroBCYQA34gHQAureVkJEptMeew86ucJtOylKHiwEP6ngGOMDHjKCe2iFcCHpDDplwKksE9zJI1Q2ECbL5JkJPxn5QYwO2Ntn5QC8UM4MQfgPxKmR%2BpUmzCLSP0dYzkGYV8wGHMvPkXPV2Odar1NVzwn2ZN79SEONJZCEKvUtUWPrn4DpTr%2BGw9FxCq85pI2zWQDNUbj%2BtiOOqqGMDmrRJZrQFNVWwA%2Fus4odmda4K8d4dwZmE1I2HblXvlVENv877WkWRpBPBf1lThhRXg0usuS6wz1bG%2F5KiH22loH1k7bci3MMqzT9HIKbbZdOCkm2jIV8lBwQudB%2Fig8bv9U5Z6Va9yMFlQxx42tWorMLqr7IH224shxfRq7DSnIKf8dnisGOo0vBJQ7UZAcLe%2FMlIwsrbBxAY6pgGTT3cgrbRvui%2FffqN4CvfkdDaa4u8%2Fa6M%2FjnSE6Hnl%2FjKZP5e193516YbT11nM7VBayQYmqkGauCodi0%2BElO4NiyJUhy05vaBiBbUXKJJg7hvXHr6r5%2BZCaNU51r%2F3j8kaFH4uoBDeCJRrxNgcVM4FgACjkwnfwfX2IpRc5E%2B%2FsbD7wEg9IyWmXSfXEoHvdWf8HJjcnIabk05Trq9tFIaxp5yKcg8J&X-Amz-Signature=72faeba6e3af77c8c3d896318c00794c01f0c3ac8066d1c8432e4e7dbcb9295f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

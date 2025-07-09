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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YHGMYB2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJmGl%2BqR6AmLgozOxJKVukkGiU46OQit8g%2FCMmLr38LAiBkCrOreVV3eTTxFht7FH1U6y7TKEXjfx5Y1%2FdeEfMSaSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcweHkcyZhf5aalD3KtwD7mxLr2luT2B24fLLQwR%2Bk1XyyN1sY6uNiVXlWVFil0nIEAXxxUCQk%2F1eI0GO8P4BooWYbv7T%2FGZ5S20xNvyWqlNOFa6sARNw%2F0XZoCrxWVT1gTBj3khvcKqrJOSq0VGIL7FvUnW8t1TK28PKKmj4D90wolyvLMgDQYqNRcvZKHBgnR0N%2BaPcoxOO0Lt8eqLTeeT865KR%2BYcStNXvyzl%2Be2c7Y%2FfLvL09wY0I8AU5oS%2F%2BdHFQSAO0yb1X6n%2FJyvtSj5HL529QKU1wRWkfPMp7yJ6B%2Bw2BhM0QVZsnvqPa8bON%2BY%2FR8RbqBc1dxJsjFL7pWA%2FRNDWlchTkWYUz6di2cSyz9q%2FMIfbY6bzRcf1Ob3c29vRwa88iP6fQh2jiw1dFRlytYJkMrUewaF0g8MCLWWoYXBQO92SIU6ZKSHr1O%2FRAT8OZOqdiVhIkkgFRc21EP7gPU%2Be3MvMYrqtZUQt7yWkZvNg7BWI3%2FzIVQbALALeEfsvFiXqTZ%2B2iVf0h4fkHFm4udxMKuZvkgu9rPuFNHgWodKYuZ4Y9AMcm%2FzNpA2MORr3ZYsrU9w2niErJOGqWZ3KtvjI55%2FcsqG365Mj07yvjD3eY9eiMKqjb554UWZosAAKA6o1nEVNgEbMw5MW7wwY6pgHcyNx9LGjYxQCGUrAbEVfwgN%2FAV4MzRa9ZDWp%2FL%2FLa9EK6KdMhUwc27hQS7Wz8%2BhD0bwUwIwyYC%2BiEVwlI5fB24xx8NMdX6HWQKaqW3a5n0jam7oAdF5Izc0L3jMrofV00EPyZklWcbUbl4G6UojGgtqcE4o89nKVLDWBb3CnZdmjtxg9%2B11sm%2FKcatNVoVbqdgP9c3Q1EUmfh9GBSJHnfTrE9abnb&X-Amz-Signature=361bb7cf37867156156e756a7772a6a0c468818c7df9c302dde373bc3c18529f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YHGMYB2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJmGl%2BqR6AmLgozOxJKVukkGiU46OQit8g%2FCMmLr38LAiBkCrOreVV3eTTxFht7FH1U6y7TKEXjfx5Y1%2FdeEfMSaSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcweHkcyZhf5aalD3KtwD7mxLr2luT2B24fLLQwR%2Bk1XyyN1sY6uNiVXlWVFil0nIEAXxxUCQk%2F1eI0GO8P4BooWYbv7T%2FGZ5S20xNvyWqlNOFa6sARNw%2F0XZoCrxWVT1gTBj3khvcKqrJOSq0VGIL7FvUnW8t1TK28PKKmj4D90wolyvLMgDQYqNRcvZKHBgnR0N%2BaPcoxOO0Lt8eqLTeeT865KR%2BYcStNXvyzl%2Be2c7Y%2FfLvL09wY0I8AU5oS%2F%2BdHFQSAO0yb1X6n%2FJyvtSj5HL529QKU1wRWkfPMp7yJ6B%2Bw2BhM0QVZsnvqPa8bON%2BY%2FR8RbqBc1dxJsjFL7pWA%2FRNDWlchTkWYUz6di2cSyz9q%2FMIfbY6bzRcf1Ob3c29vRwa88iP6fQh2jiw1dFRlytYJkMrUewaF0g8MCLWWoYXBQO92SIU6ZKSHr1O%2FRAT8OZOqdiVhIkkgFRc21EP7gPU%2Be3MvMYrqtZUQt7yWkZvNg7BWI3%2FzIVQbALALeEfsvFiXqTZ%2B2iVf0h4fkHFm4udxMKuZvkgu9rPuFNHgWodKYuZ4Y9AMcm%2FzNpA2MORr3ZYsrU9w2niErJOGqWZ3KtvjI55%2FcsqG365Mj07yvjD3eY9eiMKqjb554UWZosAAKA6o1nEVNgEbMw5MW7wwY6pgHcyNx9LGjYxQCGUrAbEVfwgN%2FAV4MzRa9ZDWp%2FL%2FLa9EK6KdMhUwc27hQS7Wz8%2BhD0bwUwIwyYC%2BiEVwlI5fB24xx8NMdX6HWQKaqW3a5n0jam7oAdF5Izc0L3jMrofV00EPyZklWcbUbl4G6UojGgtqcE4o89nKVLDWBb3CnZdmjtxg9%2B11sm%2FKcatNVoVbqdgP9c3Q1EUmfh9GBSJHnfTrE9abnb&X-Amz-Signature=94c944e104848fa38729bd24e584cf4fc24e7ec29d93c51c8972c324e63d7c3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YHGMYB2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJmGl%2BqR6AmLgozOxJKVukkGiU46OQit8g%2FCMmLr38LAiBkCrOreVV3eTTxFht7FH1U6y7TKEXjfx5Y1%2FdeEfMSaSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcweHkcyZhf5aalD3KtwD7mxLr2luT2B24fLLQwR%2Bk1XyyN1sY6uNiVXlWVFil0nIEAXxxUCQk%2F1eI0GO8P4BooWYbv7T%2FGZ5S20xNvyWqlNOFa6sARNw%2F0XZoCrxWVT1gTBj3khvcKqrJOSq0VGIL7FvUnW8t1TK28PKKmj4D90wolyvLMgDQYqNRcvZKHBgnR0N%2BaPcoxOO0Lt8eqLTeeT865KR%2BYcStNXvyzl%2Be2c7Y%2FfLvL09wY0I8AU5oS%2F%2BdHFQSAO0yb1X6n%2FJyvtSj5HL529QKU1wRWkfPMp7yJ6B%2Bw2BhM0QVZsnvqPa8bON%2BY%2FR8RbqBc1dxJsjFL7pWA%2FRNDWlchTkWYUz6di2cSyz9q%2FMIfbY6bzRcf1Ob3c29vRwa88iP6fQh2jiw1dFRlytYJkMrUewaF0g8MCLWWoYXBQO92SIU6ZKSHr1O%2FRAT8OZOqdiVhIkkgFRc21EP7gPU%2Be3MvMYrqtZUQt7yWkZvNg7BWI3%2FzIVQbALALeEfsvFiXqTZ%2B2iVf0h4fkHFm4udxMKuZvkgu9rPuFNHgWodKYuZ4Y9AMcm%2FzNpA2MORr3ZYsrU9w2niErJOGqWZ3KtvjI55%2FcsqG365Mj07yvjD3eY9eiMKqjb554UWZosAAKA6o1nEVNgEbMw5MW7wwY6pgHcyNx9LGjYxQCGUrAbEVfwgN%2FAV4MzRa9ZDWp%2FL%2FLa9EK6KdMhUwc27hQS7Wz8%2BhD0bwUwIwyYC%2BiEVwlI5fB24xx8NMdX6HWQKaqW3a5n0jam7oAdF5Izc0L3jMrofV00EPyZklWcbUbl4G6UojGgtqcE4o89nKVLDWBb3CnZdmjtxg9%2B11sm%2FKcatNVoVbqdgP9c3Q1EUmfh9GBSJHnfTrE9abnb&X-Amz-Signature=a7344cc278cd66b7cab5d6450d12efdb003a4a52378902d91a943db3609b844c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

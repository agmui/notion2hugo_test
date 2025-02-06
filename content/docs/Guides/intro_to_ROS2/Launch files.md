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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYLVH32%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD8NySBsGaxWkmLgwZ37q1gKw68P6oCa3FBdFevLPA44gIgFSnmWQOI9Jbsh9TJAFqWcFIYsNblPdp9WFxAnMAYV14q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMLZHdtKLn%2Fu3Jg%2B2yrcA6abPwfwHIkh9%2B%2BPb5K5S4V%2B%2BInTd9jvnyR3EgPhHoXfRci5LHCs503cPoHe9fsY22VrULPi0FnZu8WNKC3GXl4c4gz9POQTGa4P74RjgNkv6qby7C9jP6EaHRNHemfi9LIETlUao7%2F8ZkRb9800OS%2BrEsQbfdBdW8jvYqLWGp1Xkn7WxQuuNIrEbL%2BNo%2FuQcR4r4oCqLIBteMFR%2BwRg3cfIA5Zkove0Ln0U17217MU8dY2gqHffluMpw7r%2FXpSA9%2F7KD4iEODrxbhVKuuyVAGb2dmamo3eZdnvnWvU5I3rRwGY9Vk0GM6yLKVCddXa4opLhWEE6M4oZOxTUEb8D7Dij8m6tyjOzZLkBvzvGZbKNRB0Tz0aBn9y3hh8mtoR16CK%2FvYZkxSZ1IrRATpE0lRqaPQLLz%2F7Y8Cs0%2FTMK7kTXGbohB8oqD%2Fleo8EoIhKBA%2FFOCrRW29CyPSZD%2FkVB%2FYzzENON7Y%2FBz18KYx64QC8PMCT4545T9XLIn4qx4Q%2FyRJZhLd%2Ff3k4xq5Fdetxgc%2BFolS8A3OLLte9hKLQ4BzSC50Ch9qFXNLewHlAuhyXO19QbfudwcZfyQwcdnREawWomSGCdu8HemUoUlcoqaBf87EdmT6Y4HcreS3fjMOPTkb0GOqUBX%2B6NAyD3NmeLklDYFvT4rAFSeFpOcSwMZDbQ3bJGI86z8frR2WoAQMAEkccvFjV858W3%2FKAZiwhabkEpw%2BAw%2FJ6KAqLxoaDqcsslqGQZagphgInTVLia3uwvrB5wiSup9vRFEbmtTdGoEItyCMseDYsnAy3EOPiyMtlZ11DIkiqy58SpjABbbgCyhMzn%2FEZrttGStqKfQzuYTY53S%2FDz1oCZYH1A&X-Amz-Signature=22d8bce225dfa60768fd713b6ed1df7398e66d7eb054f03951903ca631764caa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYLVH32%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD8NySBsGaxWkmLgwZ37q1gKw68P6oCa3FBdFevLPA44gIgFSnmWQOI9Jbsh9TJAFqWcFIYsNblPdp9WFxAnMAYV14q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMLZHdtKLn%2Fu3Jg%2B2yrcA6abPwfwHIkh9%2B%2BPb5K5S4V%2B%2BInTd9jvnyR3EgPhHoXfRci5LHCs503cPoHe9fsY22VrULPi0FnZu8WNKC3GXl4c4gz9POQTGa4P74RjgNkv6qby7C9jP6EaHRNHemfi9LIETlUao7%2F8ZkRb9800OS%2BrEsQbfdBdW8jvYqLWGp1Xkn7WxQuuNIrEbL%2BNo%2FuQcR4r4oCqLIBteMFR%2BwRg3cfIA5Zkove0Ln0U17217MU8dY2gqHffluMpw7r%2FXpSA9%2F7KD4iEODrxbhVKuuyVAGb2dmamo3eZdnvnWvU5I3rRwGY9Vk0GM6yLKVCddXa4opLhWEE6M4oZOxTUEb8D7Dij8m6tyjOzZLkBvzvGZbKNRB0Tz0aBn9y3hh8mtoR16CK%2FvYZkxSZ1IrRATpE0lRqaPQLLz%2F7Y8Cs0%2FTMK7kTXGbohB8oqD%2Fleo8EoIhKBA%2FFOCrRW29CyPSZD%2FkVB%2FYzzENON7Y%2FBz18KYx64QC8PMCT4545T9XLIn4qx4Q%2FyRJZhLd%2Ff3k4xq5Fdetxgc%2BFolS8A3OLLte9hKLQ4BzSC50Ch9qFXNLewHlAuhyXO19QbfudwcZfyQwcdnREawWomSGCdu8HemUoUlcoqaBf87EdmT6Y4HcreS3fjMOPTkb0GOqUBX%2B6NAyD3NmeLklDYFvT4rAFSeFpOcSwMZDbQ3bJGI86z8frR2WoAQMAEkccvFjV858W3%2FKAZiwhabkEpw%2BAw%2FJ6KAqLxoaDqcsslqGQZagphgInTVLia3uwvrB5wiSup9vRFEbmtTdGoEItyCMseDYsnAy3EOPiyMtlZ11DIkiqy58SpjABbbgCyhMzn%2FEZrttGStqKfQzuYTY53S%2FDz1oCZYH1A&X-Amz-Signature=e6d057e91fb47fe81ff181029130dd112065a6e4011b0cf72415b9b6d9cd080a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYLVH32%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQD8NySBsGaxWkmLgwZ37q1gKw68P6oCa3FBdFevLPA44gIgFSnmWQOI9Jbsh9TJAFqWcFIYsNblPdp9WFxAnMAYV14q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDMLZHdtKLn%2Fu3Jg%2B2yrcA6abPwfwHIkh9%2B%2BPb5K5S4V%2B%2BInTd9jvnyR3EgPhHoXfRci5LHCs503cPoHe9fsY22VrULPi0FnZu8WNKC3GXl4c4gz9POQTGa4P74RjgNkv6qby7C9jP6EaHRNHemfi9LIETlUao7%2F8ZkRb9800OS%2BrEsQbfdBdW8jvYqLWGp1Xkn7WxQuuNIrEbL%2BNo%2FuQcR4r4oCqLIBteMFR%2BwRg3cfIA5Zkove0Ln0U17217MU8dY2gqHffluMpw7r%2FXpSA9%2F7KD4iEODrxbhVKuuyVAGb2dmamo3eZdnvnWvU5I3rRwGY9Vk0GM6yLKVCddXa4opLhWEE6M4oZOxTUEb8D7Dij8m6tyjOzZLkBvzvGZbKNRB0Tz0aBn9y3hh8mtoR16CK%2FvYZkxSZ1IrRATpE0lRqaPQLLz%2F7Y8Cs0%2FTMK7kTXGbohB8oqD%2Fleo8EoIhKBA%2FFOCrRW29CyPSZD%2FkVB%2FYzzENON7Y%2FBz18KYx64QC8PMCT4545T9XLIn4qx4Q%2FyRJZhLd%2Ff3k4xq5Fdetxgc%2BFolS8A3OLLte9hKLQ4BzSC50Ch9qFXNLewHlAuhyXO19QbfudwcZfyQwcdnREawWomSGCdu8HemUoUlcoqaBf87EdmT6Y4HcreS3fjMOPTkb0GOqUBX%2B6NAyD3NmeLklDYFvT4rAFSeFpOcSwMZDbQ3bJGI86z8frR2WoAQMAEkccvFjV858W3%2FKAZiwhabkEpw%2BAw%2FJ6KAqLxoaDqcsslqGQZagphgInTVLia3uwvrB5wiSup9vRFEbmtTdGoEItyCMseDYsnAy3EOPiyMtlZ11DIkiqy58SpjABbbgCyhMzn%2FEZrttGStqKfQzuYTY53S%2FDz1oCZYH1A&X-Amz-Signature=13d3dda69f8ae7e9998a9a8341a8761baf2aef8a0de27ada05414c758fdbaa02&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

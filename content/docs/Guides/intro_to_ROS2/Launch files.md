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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JHWFJP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSpUZxRO9IiqnyGRQPLjGHGjMzrGaJfoaYPdS2NBOirwIhAM1cjpPKqDhY3UQknA2kBQIYsDCp2G2tCzVNFe8roIOSKv8DCFYQABoMNjM3NDIzMTgzODA1IgzCOHSyiivHeI3gAuQq3AMy8w7y%2FUI36A9KIiQx0RO4EudlPAA7v%2Bs0ZuCArWwQ4Y59U%2BxMI%2FmBXY6AM%2F1oAdzJjKXAaxyrlXlIVxBXN8sfVd7uAASy805BIv0Mxg73eqUNGIhuWJFv%2BdLgjlB%2Bd%2BlW72y1r45FsfUeJ4OWqyk89Ovvp2ssKGVx%2F4lg3tm%2BpEj%2BvENCobNLEeadBNCekl5mUW8UqRFXgPOEuENV2qC1ecIgGkMW%2FHMR1A2E3J2i0Mr5b%2F%2FaDBuSiL9RYJ6YfnG3Fuu98asDZsMO8mn9any%2F8yaR6pRPPSWzFemp3vijo5GJpWI%2BNM%2FIJozgjnQxLyJc0KI6%2FxeyPfsTSmnJDco7LL2pagDlBTQ%2FOmhCz10x9c%2B%2FAH0jF16GdZcsFUu0kAKH9SmUkT%2BH0ujOeiXAwQAJp4BtC6AwXb1Czdkc58A9Y2IFmU57PBgSki8%2FF5cgYNifr6kUgZTxAlJuiNXXsNJ8wF7wP0QRCzya%2FcUXirHfmHhHkVeuyyLfhUnO30kIhYfx4efvpySAhT800BC1vRVd1XQmqGTGn%2BcG6UWTPVNJaAJ7eBRixrHq0fHyFyHg53EcHxql27tbBph757%2FSfgR7UXypIkiWiJpt0u2iKZzI%2B%2BjnW1rR09XO2Omf%2BzCO7bbABjqkAbMeCWHqOpy6zfTzNhJpHSHRkARwPikWeEXLZ9KMCzFIKPfZYyn5T%2B5yGevdW9NHPjQ1Pbkq5NQ0EtxjS6e1OZH5YWU1r7y1%2FKcVuBFrs1h9uqODCfMkm6DNPoOjWMup9CuSkUvjd%2Fdf5ouHalq%2F7fgZTG6hd7Ns9JKSGdwAuZfGPSeg25z27UTZm%2F1qbgm54ye67sI6mZjylznUElryFi7SOXyy&X-Amz-Signature=195dd96f327ba09026baa912a43f9242b8dcb3f2a7a9a2834ebb8a2bd84f5d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JHWFJP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSpUZxRO9IiqnyGRQPLjGHGjMzrGaJfoaYPdS2NBOirwIhAM1cjpPKqDhY3UQknA2kBQIYsDCp2G2tCzVNFe8roIOSKv8DCFYQABoMNjM3NDIzMTgzODA1IgzCOHSyiivHeI3gAuQq3AMy8w7y%2FUI36A9KIiQx0RO4EudlPAA7v%2Bs0ZuCArWwQ4Y59U%2BxMI%2FmBXY6AM%2F1oAdzJjKXAaxyrlXlIVxBXN8sfVd7uAASy805BIv0Mxg73eqUNGIhuWJFv%2BdLgjlB%2Bd%2BlW72y1r45FsfUeJ4OWqyk89Ovvp2ssKGVx%2F4lg3tm%2BpEj%2BvENCobNLEeadBNCekl5mUW8UqRFXgPOEuENV2qC1ecIgGkMW%2FHMR1A2E3J2i0Mr5b%2F%2FaDBuSiL9RYJ6YfnG3Fuu98asDZsMO8mn9any%2F8yaR6pRPPSWzFemp3vijo5GJpWI%2BNM%2FIJozgjnQxLyJc0KI6%2FxeyPfsTSmnJDco7LL2pagDlBTQ%2FOmhCz10x9c%2B%2FAH0jF16GdZcsFUu0kAKH9SmUkT%2BH0ujOeiXAwQAJp4BtC6AwXb1Czdkc58A9Y2IFmU57PBgSki8%2FF5cgYNifr6kUgZTxAlJuiNXXsNJ8wF7wP0QRCzya%2FcUXirHfmHhHkVeuyyLfhUnO30kIhYfx4efvpySAhT800BC1vRVd1XQmqGTGn%2BcG6UWTPVNJaAJ7eBRixrHq0fHyFyHg53EcHxql27tbBph757%2FSfgR7UXypIkiWiJpt0u2iKZzI%2B%2BjnW1rR09XO2Omf%2BzCO7bbABjqkAbMeCWHqOpy6zfTzNhJpHSHRkARwPikWeEXLZ9KMCzFIKPfZYyn5T%2B5yGevdW9NHPjQ1Pbkq5NQ0EtxjS6e1OZH5YWU1r7y1%2FKcVuBFrs1h9uqODCfMkm6DNPoOjWMup9CuSkUvjd%2Fdf5ouHalq%2F7fgZTG6hd7Ns9JKSGdwAuZfGPSeg25z27UTZm%2F1qbgm54ye67sI6mZjylznUElryFi7SOXyy&X-Amz-Signature=fc68a9d18c9e7f5faf3a6edbf42af29dc887392ad62e99c7cbeb96d279cd6621&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2JHWFJP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSpUZxRO9IiqnyGRQPLjGHGjMzrGaJfoaYPdS2NBOirwIhAM1cjpPKqDhY3UQknA2kBQIYsDCp2G2tCzVNFe8roIOSKv8DCFYQABoMNjM3NDIzMTgzODA1IgzCOHSyiivHeI3gAuQq3AMy8w7y%2FUI36A9KIiQx0RO4EudlPAA7v%2Bs0ZuCArWwQ4Y59U%2BxMI%2FmBXY6AM%2F1oAdzJjKXAaxyrlXlIVxBXN8sfVd7uAASy805BIv0Mxg73eqUNGIhuWJFv%2BdLgjlB%2Bd%2BlW72y1r45FsfUeJ4OWqyk89Ovvp2ssKGVx%2F4lg3tm%2BpEj%2BvENCobNLEeadBNCekl5mUW8UqRFXgPOEuENV2qC1ecIgGkMW%2FHMR1A2E3J2i0Mr5b%2F%2FaDBuSiL9RYJ6YfnG3Fuu98asDZsMO8mn9any%2F8yaR6pRPPSWzFemp3vijo5GJpWI%2BNM%2FIJozgjnQxLyJc0KI6%2FxeyPfsTSmnJDco7LL2pagDlBTQ%2FOmhCz10x9c%2B%2FAH0jF16GdZcsFUu0kAKH9SmUkT%2BH0ujOeiXAwQAJp4BtC6AwXb1Czdkc58A9Y2IFmU57PBgSki8%2FF5cgYNifr6kUgZTxAlJuiNXXsNJ8wF7wP0QRCzya%2FcUXirHfmHhHkVeuyyLfhUnO30kIhYfx4efvpySAhT800BC1vRVd1XQmqGTGn%2BcG6UWTPVNJaAJ7eBRixrHq0fHyFyHg53EcHxql27tbBph757%2FSfgR7UXypIkiWiJpt0u2iKZzI%2B%2BjnW1rR09XO2Omf%2BzCO7bbABjqkAbMeCWHqOpy6zfTzNhJpHSHRkARwPikWeEXLZ9KMCzFIKPfZYyn5T%2B5yGevdW9NHPjQ1Pbkq5NQ0EtxjS6e1OZH5YWU1r7y1%2FKcVuBFrs1h9uqODCfMkm6DNPoOjWMup9CuSkUvjd%2Fdf5ouHalq%2F7fgZTG6hd7Ns9JKSGdwAuZfGPSeg25z27UTZm%2F1qbgm54ye67sI6mZjylznUElryFi7SOXyy&X-Amz-Signature=e44b20a3b8651d24f8ca79c392d38e9fec1cfd49c2247b89ee6afd037cd91693&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

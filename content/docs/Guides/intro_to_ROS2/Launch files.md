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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KUCJAK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDVIiJO6qX1xewcndK0hkZM9cIE96%2Fe%2F28wN7oQ1xxwOgIhAOV88npldcS%2Bfqe1CHE5QFPXBqlycclp18KKsKGjZT%2BwKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0VETcQfbGLunFVvIq3AMCWoMivgj3YQ0lOTS87yIUu2urEXWKnkVczWa1SSrbCom%2FMcQDVAdy66JpDQf9VBwIvUX7x59YX43NjXHhfblfuPyW1WGGfSdaP3uTnd7RhFf0LCFbOvw%2BvB5SWnAtsXOeZbsn%2FvYL4gFl2LT3yGM%2BckxHZZnwdvGvKxlame8oR2xz84IkICd%2BStJ3%2BYY8Ke5okUXP0DenMeP4r99TH10gVYvqGBEZT2WWfm68HaCYr%2BqDqLWt%2B5fAs9gWY4r2mJwP0NZTo%2FqreJ%2FCRSpBhUELDalQdG7QKvhr4bYOUI5ACmmyeCMNNqfk%2FBhwfGyxTBe%2FEbjpmQp4a1TsLHRRkJYMap%2FwI0kkU55XEUtfjPWqG8C9WSxpKc%2BXzF2B0xLCg6ZC9%2BzNCVOSJWBcL1fSANHA2rAxevvSJfdVwEk8TXePEEV8IoBvXsR%2Bvg%2FSbhennhiVffTWtiW7JnDHT2cWGCgvkcAXLVYf0jjM%2FVYs%2FKwSWkzS82cQ2alwapciW2OML6mRm1fWyss9rWoBhN5eKdS4PJW1SETfVDOK5M8N8YvwrFLfoxb9qUyFzBHkMoL3hWUAdIyLsfzZfYdfQjV%2FqzgAC%2BW3s7TuAqivKCaAghPEB2OngNrQtzc64%2BXBDTC68KO%2FBjqkAQEFTiIQH4KYrLcgNCf2oPvfX7ciFNhBlQdvIztzhu1cnEmosNfi9g1tTIeYOMySYvRq%2FzhD4VXhyceIdzqCo9%2FaV9KAC9pDST5jFaIj2pH7BuBUWDrw9tXnczcGZkeuccWE70xkAXuL7jpDuwWeo02q95jgeNoHXiqFr1QStBdVKxKtIgHxF9frl%2FPZ%2BKMHugOIHAxZH%2FEA5HZLiNIp2oY71g39&X-Amz-Signature=cd3287feacd03dadc2fa789cb28b4d8919b8d3e30e208e4fd504b2916e0919ab&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KUCJAK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDVIiJO6qX1xewcndK0hkZM9cIE96%2Fe%2F28wN7oQ1xxwOgIhAOV88npldcS%2Bfqe1CHE5QFPXBqlycclp18KKsKGjZT%2BwKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0VETcQfbGLunFVvIq3AMCWoMivgj3YQ0lOTS87yIUu2urEXWKnkVczWa1SSrbCom%2FMcQDVAdy66JpDQf9VBwIvUX7x59YX43NjXHhfblfuPyW1WGGfSdaP3uTnd7RhFf0LCFbOvw%2BvB5SWnAtsXOeZbsn%2FvYL4gFl2LT3yGM%2BckxHZZnwdvGvKxlame8oR2xz84IkICd%2BStJ3%2BYY8Ke5okUXP0DenMeP4r99TH10gVYvqGBEZT2WWfm68HaCYr%2BqDqLWt%2B5fAs9gWY4r2mJwP0NZTo%2FqreJ%2FCRSpBhUELDalQdG7QKvhr4bYOUI5ACmmyeCMNNqfk%2FBhwfGyxTBe%2FEbjpmQp4a1TsLHRRkJYMap%2FwI0kkU55XEUtfjPWqG8C9WSxpKc%2BXzF2B0xLCg6ZC9%2BzNCVOSJWBcL1fSANHA2rAxevvSJfdVwEk8TXePEEV8IoBvXsR%2Bvg%2FSbhennhiVffTWtiW7JnDHT2cWGCgvkcAXLVYf0jjM%2FVYs%2FKwSWkzS82cQ2alwapciW2OML6mRm1fWyss9rWoBhN5eKdS4PJW1SETfVDOK5M8N8YvwrFLfoxb9qUyFzBHkMoL3hWUAdIyLsfzZfYdfQjV%2FqzgAC%2BW3s7TuAqivKCaAghPEB2OngNrQtzc64%2BXBDTC68KO%2FBjqkAQEFTiIQH4KYrLcgNCf2oPvfX7ciFNhBlQdvIztzhu1cnEmosNfi9g1tTIeYOMySYvRq%2FzhD4VXhyceIdzqCo9%2FaV9KAC9pDST5jFaIj2pH7BuBUWDrw9tXnczcGZkeuccWE70xkAXuL7jpDuwWeo02q95jgeNoHXiqFr1QStBdVKxKtIgHxF9frl%2FPZ%2BKMHugOIHAxZH%2FEA5HZLiNIp2oY71g39&X-Amz-Signature=a4605c1456ea2bdb8df85d7bcd311beb3a6c17c8feeea83744651b0ea9f725bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3KUCJAK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDVIiJO6qX1xewcndK0hkZM9cIE96%2Fe%2F28wN7oQ1xxwOgIhAOV88npldcS%2Bfqe1CHE5QFPXBqlycclp18KKsKGjZT%2BwKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0VETcQfbGLunFVvIq3AMCWoMivgj3YQ0lOTS87yIUu2urEXWKnkVczWa1SSrbCom%2FMcQDVAdy66JpDQf9VBwIvUX7x59YX43NjXHhfblfuPyW1WGGfSdaP3uTnd7RhFf0LCFbOvw%2BvB5SWnAtsXOeZbsn%2FvYL4gFl2LT3yGM%2BckxHZZnwdvGvKxlame8oR2xz84IkICd%2BStJ3%2BYY8Ke5okUXP0DenMeP4r99TH10gVYvqGBEZT2WWfm68HaCYr%2BqDqLWt%2B5fAs9gWY4r2mJwP0NZTo%2FqreJ%2FCRSpBhUELDalQdG7QKvhr4bYOUI5ACmmyeCMNNqfk%2FBhwfGyxTBe%2FEbjpmQp4a1TsLHRRkJYMap%2FwI0kkU55XEUtfjPWqG8C9WSxpKc%2BXzF2B0xLCg6ZC9%2BzNCVOSJWBcL1fSANHA2rAxevvSJfdVwEk8TXePEEV8IoBvXsR%2Bvg%2FSbhennhiVffTWtiW7JnDHT2cWGCgvkcAXLVYf0jjM%2FVYs%2FKwSWkzS82cQ2alwapciW2OML6mRm1fWyss9rWoBhN5eKdS4PJW1SETfVDOK5M8N8YvwrFLfoxb9qUyFzBHkMoL3hWUAdIyLsfzZfYdfQjV%2FqzgAC%2BW3s7TuAqivKCaAghPEB2OngNrQtzc64%2BXBDTC68KO%2FBjqkAQEFTiIQH4KYrLcgNCf2oPvfX7ciFNhBlQdvIztzhu1cnEmosNfi9g1tTIeYOMySYvRq%2FzhD4VXhyceIdzqCo9%2FaV9KAC9pDST5jFaIj2pH7BuBUWDrw9tXnczcGZkeuccWE70xkAXuL7jpDuwWeo02q95jgeNoHXiqFr1QStBdVKxKtIgHxF9frl%2FPZ%2BKMHugOIHAxZH%2FEA5HZLiNIp2oY71g39&X-Amz-Signature=931ce8a066e37d08ff4c3f52f0aeb4ea8e66c31a8793fef4af629766af211094&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ56U5PP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdiVmlmIzYmU6oMsuP0mlImNo3Wy5K7uwcM65DDdHLXgIhAOYInjg6pR878aL26YnoAX3sXxaYylmr7yXMa2bd14KDKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWJy3Jef5BjubCO50q3AMAU1fhsMo0OVnO%2FyGyRt4WRd4RvYhqVr2wYlsqy32q7QMQTijpoptGHECerU1B2mJbgAS%2BGCj5Sf0v%2FQfjqUhEcojzli4X9t9exXLWOrrkOtLOUnkFNIDnjbp4P%2B%2BJO7opCknGoa3ozvFbfrHVm%2B33wX117xlHeXCxZBUwi3DE4LIoC%2Fa5X4HH8VCGhyzUc8F6jM3PyJFlUfmNscSPlRJyMOjIjX%2FaUL5rFW%2BQD30HuHGwT7E0%2FwPJVfgDPZ%2BR0kLW4HimdY0ZcFY4QYuaNHB9mJOA9m7D0u%2FcHRT2PGakKFyMD56%2FHBpIfkpeC6PoZXWpzV1rKAU%2FizSJtlnwct7d%2F3h2Shl%2FThnbJJBJXNTzFJFJDv3pIGfchkMdz2cSjXHnrPveAEmLbCsS9bog%2FhO1%2FBvlWVjyPZDw%2B1PjRNrTkAczop3E1dSR2nideaqMF1BEHQZMAy9rugDs132E2cwiudH3USI2MC7POBeeDtK%2FKS3oX6AWgXvVFk9uE6csnslKpWz5a203l21zvZgiV1%2Bb7NgiZbvH5v4bQMZtyuoyL2D%2F%2B8ROH3hHMNPVSMYi7XHKTc7iK%2FMo7Yog%2FDuVxYUGbPLprP8Cqv2jkXbbRBRUzyz%2BmtTEobzeigcNszDY8ejBBjqkAVAfaDl7KNv4LE2q8GY5Arf22WuL0HXM1m0E0cchr5K91GU5ElFIZYMeOlJkTztTcRK%2Ff5O%2BVyLOW2kZxVWWhKe567Kpa0tlVUeIm5ji60s0beWEORCJc%2BgZ9JzSF%2FI4wdy9gkWFTJOfF0kvrDohXF%2B8Ya5nCGkIljaoUlRcNEFV6sDKTAI4cG4kWF1D8tff0omKZ4%2F%2FB8lPKBOzTIVQZ23JHn0N&X-Amz-Signature=c6343a5f4e928bbc04d57aa4a554223b4a51f7829d617eb489aeea4c31675b61&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ56U5PP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdiVmlmIzYmU6oMsuP0mlImNo3Wy5K7uwcM65DDdHLXgIhAOYInjg6pR878aL26YnoAX3sXxaYylmr7yXMa2bd14KDKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWJy3Jef5BjubCO50q3AMAU1fhsMo0OVnO%2FyGyRt4WRd4RvYhqVr2wYlsqy32q7QMQTijpoptGHECerU1B2mJbgAS%2BGCj5Sf0v%2FQfjqUhEcojzli4X9t9exXLWOrrkOtLOUnkFNIDnjbp4P%2B%2BJO7opCknGoa3ozvFbfrHVm%2B33wX117xlHeXCxZBUwi3DE4LIoC%2Fa5X4HH8VCGhyzUc8F6jM3PyJFlUfmNscSPlRJyMOjIjX%2FaUL5rFW%2BQD30HuHGwT7E0%2FwPJVfgDPZ%2BR0kLW4HimdY0ZcFY4QYuaNHB9mJOA9m7D0u%2FcHRT2PGakKFyMD56%2FHBpIfkpeC6PoZXWpzV1rKAU%2FizSJtlnwct7d%2F3h2Shl%2FThnbJJBJXNTzFJFJDv3pIGfchkMdz2cSjXHnrPveAEmLbCsS9bog%2FhO1%2FBvlWVjyPZDw%2B1PjRNrTkAczop3E1dSR2nideaqMF1BEHQZMAy9rugDs132E2cwiudH3USI2MC7POBeeDtK%2FKS3oX6AWgXvVFk9uE6csnslKpWz5a203l21zvZgiV1%2Bb7NgiZbvH5v4bQMZtyuoyL2D%2F%2B8ROH3hHMNPVSMYi7XHKTc7iK%2FMo7Yog%2FDuVxYUGbPLprP8Cqv2jkXbbRBRUzyz%2BmtTEobzeigcNszDY8ejBBjqkAVAfaDl7KNv4LE2q8GY5Arf22WuL0HXM1m0E0cchr5K91GU5ElFIZYMeOlJkTztTcRK%2Ff5O%2BVyLOW2kZxVWWhKe567Kpa0tlVUeIm5ji60s0beWEORCJc%2BgZ9JzSF%2FI4wdy9gkWFTJOfF0kvrDohXF%2B8Ya5nCGkIljaoUlRcNEFV6sDKTAI4cG4kWF1D8tff0omKZ4%2F%2FB8lPKBOzTIVQZ23JHn0N&X-Amz-Signature=c9323fb6ffc60d8e8a948a703af011b81d70ec440203ea97cc2ef6ba945d3ea0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ56U5PP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdiVmlmIzYmU6oMsuP0mlImNo3Wy5K7uwcM65DDdHLXgIhAOYInjg6pR878aL26YnoAX3sXxaYylmr7yXMa2bd14KDKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWJy3Jef5BjubCO50q3AMAU1fhsMo0OVnO%2FyGyRt4WRd4RvYhqVr2wYlsqy32q7QMQTijpoptGHECerU1B2mJbgAS%2BGCj5Sf0v%2FQfjqUhEcojzli4X9t9exXLWOrrkOtLOUnkFNIDnjbp4P%2B%2BJO7opCknGoa3ozvFbfrHVm%2B33wX117xlHeXCxZBUwi3DE4LIoC%2Fa5X4HH8VCGhyzUc8F6jM3PyJFlUfmNscSPlRJyMOjIjX%2FaUL5rFW%2BQD30HuHGwT7E0%2FwPJVfgDPZ%2BR0kLW4HimdY0ZcFY4QYuaNHB9mJOA9m7D0u%2FcHRT2PGakKFyMD56%2FHBpIfkpeC6PoZXWpzV1rKAU%2FizSJtlnwct7d%2F3h2Shl%2FThnbJJBJXNTzFJFJDv3pIGfchkMdz2cSjXHnrPveAEmLbCsS9bog%2FhO1%2FBvlWVjyPZDw%2B1PjRNrTkAczop3E1dSR2nideaqMF1BEHQZMAy9rugDs132E2cwiudH3USI2MC7POBeeDtK%2FKS3oX6AWgXvVFk9uE6csnslKpWz5a203l21zvZgiV1%2Bb7NgiZbvH5v4bQMZtyuoyL2D%2F%2B8ROH3hHMNPVSMYi7XHKTc7iK%2FMo7Yog%2FDuVxYUGbPLprP8Cqv2jkXbbRBRUzyz%2BmtTEobzeigcNszDY8ejBBjqkAVAfaDl7KNv4LE2q8GY5Arf22WuL0HXM1m0E0cchr5K91GU5ElFIZYMeOlJkTztTcRK%2Ff5O%2BVyLOW2kZxVWWhKe567Kpa0tlVUeIm5ji60s0beWEORCJc%2BgZ9JzSF%2FI4wdy9gkWFTJOfF0kvrDohXF%2B8Ya5nCGkIljaoUlRcNEFV6sDKTAI4cG4kWF1D8tff0omKZ4%2F%2FB8lPKBOzTIVQZ23JHn0N&X-Amz-Signature=aad7c713e03fde24f39d1ca91c91e5fed57fb5cbbd9cb2717b59cfa632437aee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

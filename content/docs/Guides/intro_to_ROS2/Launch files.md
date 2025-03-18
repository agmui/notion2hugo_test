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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676SX7MVW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGwV3Tvv0CkOWgBrG2FpZsUWDXJ1xJlpB7d%2Fta2FDo0OAiEAv0sAlKHfWTvP8wRZ6LRUYz98Otntl2%2FqbiWppFo0ZOAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEV15R0wEmhBkFj59SrcA3qC4ZykC90l8Djz%2BOpOjI7mGO%2FCCtTUtzsEaO4okj7DpVNHL3RlGxqhlP8PS7Motyx72zUwpfaaXltA1U1ehPrGKWHPGOUzTLedNsfTLD9AT2sOuTAbO0k9N729nqQdDQyKEtLcg5CjBWCvUn5tg%2B9QkzeCkol%2ForFbwqrA2dnmCHtlklBW81amhL%2BiSZMKl6S7IuVZYUVEoLVebg7P5KGoYG9veKkaFDxjEhUKL7vZBrkTJgGjwTrFYhFCg5Q4W8WfibvS3ajuHivPVqwB%2B8b98i%2Fh0QladD5BVTjORRpLCqgXL2fVnXkEYJzGuvQ37zmh7Q0GqSipje9Fw5vPm3N%2FilvDXcJnAMVYwgFi7PH%2FPQWiRB0Ac1uVepAhFWkHH41CQIH%2F7a7WFjT5%2BsfHz450INR3ZZPOa97biqmOvIyl8VI9vUs5IyEwbtYiBBnA5290dUhuezrAMDC9vnCUu27ZhTqARIIHBMbDUQehY5rSPkDlfnAd0gG6pSOVQSKvFfFpRO%2F%2FuFxSTgZ2LMF4isFwjZt94WhmKCviBHcTI7t3nqN0zLWl0wQ29%2Fjx1vUXsWbutleVDK9MDgWgZVDPi3OzCF80SrlLqu9dpkFnHOzhfwV0sgCQRsaVus8lMPGw574GOqUBqzhsTMkOcf7fvsXhJ80GqI61wplnzie3OGAgDaAAQH1dGZyDf4u3R8UEsdMwARm6HcKyyPbnDy22jNv751zL8jAILXTGITNzMOuPdPmu%2BuBFHwmDQz3rrTBXJn09UMPB1to5tavcXqOnYkNwv088PdEPEg%2BzgC9NSwK%2FVBxBOW0a4w27ZKXZkr10gId138U6y0Hja2f9CawkLVA00T2WXMi1DnWa&X-Amz-Signature=9a2380d446bce1b4fef43681483fe5211a04ff443a04ee1312b6e73bb9545d8f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676SX7MVW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGwV3Tvv0CkOWgBrG2FpZsUWDXJ1xJlpB7d%2Fta2FDo0OAiEAv0sAlKHfWTvP8wRZ6LRUYz98Otntl2%2FqbiWppFo0ZOAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEV15R0wEmhBkFj59SrcA3qC4ZykC90l8Djz%2BOpOjI7mGO%2FCCtTUtzsEaO4okj7DpVNHL3RlGxqhlP8PS7Motyx72zUwpfaaXltA1U1ehPrGKWHPGOUzTLedNsfTLD9AT2sOuTAbO0k9N729nqQdDQyKEtLcg5CjBWCvUn5tg%2B9QkzeCkol%2ForFbwqrA2dnmCHtlklBW81amhL%2BiSZMKl6S7IuVZYUVEoLVebg7P5KGoYG9veKkaFDxjEhUKL7vZBrkTJgGjwTrFYhFCg5Q4W8WfibvS3ajuHivPVqwB%2B8b98i%2Fh0QladD5BVTjORRpLCqgXL2fVnXkEYJzGuvQ37zmh7Q0GqSipje9Fw5vPm3N%2FilvDXcJnAMVYwgFi7PH%2FPQWiRB0Ac1uVepAhFWkHH41CQIH%2F7a7WFjT5%2BsfHz450INR3ZZPOa97biqmOvIyl8VI9vUs5IyEwbtYiBBnA5290dUhuezrAMDC9vnCUu27ZhTqARIIHBMbDUQehY5rSPkDlfnAd0gG6pSOVQSKvFfFpRO%2F%2FuFxSTgZ2LMF4isFwjZt94WhmKCviBHcTI7t3nqN0zLWl0wQ29%2Fjx1vUXsWbutleVDK9MDgWgZVDPi3OzCF80SrlLqu9dpkFnHOzhfwV0sgCQRsaVus8lMPGw574GOqUBqzhsTMkOcf7fvsXhJ80GqI61wplnzie3OGAgDaAAQH1dGZyDf4u3R8UEsdMwARm6HcKyyPbnDy22jNv751zL8jAILXTGITNzMOuPdPmu%2BuBFHwmDQz3rrTBXJn09UMPB1to5tavcXqOnYkNwv088PdEPEg%2BzgC9NSwK%2FVBxBOW0a4w27ZKXZkr10gId138U6y0Hja2f9CawkLVA00T2WXMi1DnWa&X-Amz-Signature=7104b4d6a721df264e431551f4a3079433aee33537daa408be2c567b30e000d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676SX7MVW%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIGwV3Tvv0CkOWgBrG2FpZsUWDXJ1xJlpB7d%2Fta2FDo0OAiEAv0sAlKHfWTvP8wRZ6LRUYz98Otntl2%2FqbiWppFo0ZOAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEV15R0wEmhBkFj59SrcA3qC4ZykC90l8Djz%2BOpOjI7mGO%2FCCtTUtzsEaO4okj7DpVNHL3RlGxqhlP8PS7Motyx72zUwpfaaXltA1U1ehPrGKWHPGOUzTLedNsfTLD9AT2sOuTAbO0k9N729nqQdDQyKEtLcg5CjBWCvUn5tg%2B9QkzeCkol%2ForFbwqrA2dnmCHtlklBW81amhL%2BiSZMKl6S7IuVZYUVEoLVebg7P5KGoYG9veKkaFDxjEhUKL7vZBrkTJgGjwTrFYhFCg5Q4W8WfibvS3ajuHivPVqwB%2B8b98i%2Fh0QladD5BVTjORRpLCqgXL2fVnXkEYJzGuvQ37zmh7Q0GqSipje9Fw5vPm3N%2FilvDXcJnAMVYwgFi7PH%2FPQWiRB0Ac1uVepAhFWkHH41CQIH%2F7a7WFjT5%2BsfHz450INR3ZZPOa97biqmOvIyl8VI9vUs5IyEwbtYiBBnA5290dUhuezrAMDC9vnCUu27ZhTqARIIHBMbDUQehY5rSPkDlfnAd0gG6pSOVQSKvFfFpRO%2F%2FuFxSTgZ2LMF4isFwjZt94WhmKCviBHcTI7t3nqN0zLWl0wQ29%2Fjx1vUXsWbutleVDK9MDgWgZVDPi3OzCF80SrlLqu9dpkFnHOzhfwV0sgCQRsaVus8lMPGw574GOqUBqzhsTMkOcf7fvsXhJ80GqI61wplnzie3OGAgDaAAQH1dGZyDf4u3R8UEsdMwARm6HcKyyPbnDy22jNv751zL8jAILXTGITNzMOuPdPmu%2BuBFHwmDQz3rrTBXJn09UMPB1to5tavcXqOnYkNwv088PdEPEg%2BzgC9NSwK%2FVBxBOW0a4w27ZKXZkr10gId138U6y0Hja2f9CawkLVA00T2WXMi1DnWa&X-Amz-Signature=db41d945ba8ac284fabcaea6a1bd98f4fa2b31dc30a536a3122554c5e2d98a27&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

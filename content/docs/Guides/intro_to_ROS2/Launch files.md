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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNYM53W3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICn5WrPhmBIS4Wm6ZMR1%2F9tjf4wocssWK%2FR0wbZvN22qAiBqlbgh91UvmpuGifPTWGPEeMbzQcp8QPAR12Q0KdA%2BISr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMtK1PVNlBo08MLu%2FUKtwDF74GPBnaqroTdkntup%2F37rwmX4hNNMnbEkSIZ6K2BQ1%2BKpT6LJSlxgVoI35%2B6BZJel22FAxLU1PioTywPUACzQv9PNZ2ftz70dnAtNHYqmIJXaTfHkv7LOFcqge5SvmYpTn1EUBbNTsulC0jEXcIr1kJULi7qK5eiHN9pKn28HC0FPaHCMRwchEe7iXpzhvlO5eJcCFjO9%2FmuS4hFHUSC5rd8aqVlmuTqfFLZWa7EPZE8oP6JQHvnzzHQtKRQVQUywWex2lXZtdeghG7mxmrAwXn%2BPKw6kT3AeOj7k3fk0S%2BlngGbw4%2FboOVMcRHU98OArimg2WRBCrxbt9v3wg7FVb%2BzQpFRV%2BQh4E1FimIz9214JYNTwOyyRIAd9QBN%2BXY%2FQSTCKyoNXKTr8NDhS8uNmI9Y45ykUG2DCQst7VuOA7xPxIusbTVhyqy4QECQ5n6F6lWMICX7Bl9Hi6k3kKuBlv6CgSIZZs3ZOa4Rw7v1dRlC4hvucLBNbgzsQUHxk7BbjQTele9PRpU2KZb5aZrbTrhdCPP6vhMIyhXxC5ygTTK1sZ4Ahh%2Fp6zVCavO4hFVWHg7rnynXRw5HLzgSnYdOEPtaUsvZfCT0ryOmBXchGLUrm2D4KCVYVC5LRwwt8eAwAY6pgHeP3N%2B3F9Viinw9xC7jCvhzZsnpDF8kGztC2o%2F%2F4RJc8fwv8tDbdBcQdo0Y9SSXySXBwwEQGxyq4oYlC9pblOMWTHH57UIREPYSFPAtfFe4W69WWzkoTR2d0zfbRw2L0IxnXLGKmUwiy7JDYUHKH2hSHguK4CldNuXNLJtp1pz1WFlW6GC7hpBDLfuo9CpTVnrdcUadG1XJSxGMyOK0wqZ%2FrYbig1Z&X-Amz-Signature=a8c60552aaba8ea498df03b0613f44cf3c80bd5a4c2057b1467c5e9396a7d9f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNYM53W3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICn5WrPhmBIS4Wm6ZMR1%2F9tjf4wocssWK%2FR0wbZvN22qAiBqlbgh91UvmpuGifPTWGPEeMbzQcp8QPAR12Q0KdA%2BISr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMtK1PVNlBo08MLu%2FUKtwDF74GPBnaqroTdkntup%2F37rwmX4hNNMnbEkSIZ6K2BQ1%2BKpT6LJSlxgVoI35%2B6BZJel22FAxLU1PioTywPUACzQv9PNZ2ftz70dnAtNHYqmIJXaTfHkv7LOFcqge5SvmYpTn1EUBbNTsulC0jEXcIr1kJULi7qK5eiHN9pKn28HC0FPaHCMRwchEe7iXpzhvlO5eJcCFjO9%2FmuS4hFHUSC5rd8aqVlmuTqfFLZWa7EPZE8oP6JQHvnzzHQtKRQVQUywWex2lXZtdeghG7mxmrAwXn%2BPKw6kT3AeOj7k3fk0S%2BlngGbw4%2FboOVMcRHU98OArimg2WRBCrxbt9v3wg7FVb%2BzQpFRV%2BQh4E1FimIz9214JYNTwOyyRIAd9QBN%2BXY%2FQSTCKyoNXKTr8NDhS8uNmI9Y45ykUG2DCQst7VuOA7xPxIusbTVhyqy4QECQ5n6F6lWMICX7Bl9Hi6k3kKuBlv6CgSIZZs3ZOa4Rw7v1dRlC4hvucLBNbgzsQUHxk7BbjQTele9PRpU2KZb5aZrbTrhdCPP6vhMIyhXxC5ygTTK1sZ4Ahh%2Fp6zVCavO4hFVWHg7rnynXRw5HLzgSnYdOEPtaUsvZfCT0ryOmBXchGLUrm2D4KCVYVC5LRwwt8eAwAY6pgHeP3N%2B3F9Viinw9xC7jCvhzZsnpDF8kGztC2o%2F%2F4RJc8fwv8tDbdBcQdo0Y9SSXySXBwwEQGxyq4oYlC9pblOMWTHH57UIREPYSFPAtfFe4W69WWzkoTR2d0zfbRw2L0IxnXLGKmUwiy7JDYUHKH2hSHguK4CldNuXNLJtp1pz1WFlW6GC7hpBDLfuo9CpTVnrdcUadG1XJSxGMyOK0wqZ%2FrYbig1Z&X-Amz-Signature=79728d5eaab72e29380f2bf6a8fef87cf2c56030bb6835493bafd87dc7989ea2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNYM53W3%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICn5WrPhmBIS4Wm6ZMR1%2F9tjf4wocssWK%2FR0wbZvN22qAiBqlbgh91UvmpuGifPTWGPEeMbzQcp8QPAR12Q0KdA%2BISr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMtK1PVNlBo08MLu%2FUKtwDF74GPBnaqroTdkntup%2F37rwmX4hNNMnbEkSIZ6K2BQ1%2BKpT6LJSlxgVoI35%2B6BZJel22FAxLU1PioTywPUACzQv9PNZ2ftz70dnAtNHYqmIJXaTfHkv7LOFcqge5SvmYpTn1EUBbNTsulC0jEXcIr1kJULi7qK5eiHN9pKn28HC0FPaHCMRwchEe7iXpzhvlO5eJcCFjO9%2FmuS4hFHUSC5rd8aqVlmuTqfFLZWa7EPZE8oP6JQHvnzzHQtKRQVQUywWex2lXZtdeghG7mxmrAwXn%2BPKw6kT3AeOj7k3fk0S%2BlngGbw4%2FboOVMcRHU98OArimg2WRBCrxbt9v3wg7FVb%2BzQpFRV%2BQh4E1FimIz9214JYNTwOyyRIAd9QBN%2BXY%2FQSTCKyoNXKTr8NDhS8uNmI9Y45ykUG2DCQst7VuOA7xPxIusbTVhyqy4QECQ5n6F6lWMICX7Bl9Hi6k3kKuBlv6CgSIZZs3ZOa4Rw7v1dRlC4hvucLBNbgzsQUHxk7BbjQTele9PRpU2KZb5aZrbTrhdCPP6vhMIyhXxC5ygTTK1sZ4Ahh%2Fp6zVCavO4hFVWHg7rnynXRw5HLzgSnYdOEPtaUsvZfCT0ryOmBXchGLUrm2D4KCVYVC5LRwwt8eAwAY6pgHeP3N%2B3F9Viinw9xC7jCvhzZsnpDF8kGztC2o%2F%2F4RJc8fwv8tDbdBcQdo0Y9SSXySXBwwEQGxyq4oYlC9pblOMWTHH57UIREPYSFPAtfFe4W69WWzkoTR2d0zfbRw2L0IxnXLGKmUwiy7JDYUHKH2hSHguK4CldNuXNLJtp1pz1WFlW6GC7hpBDLfuo9CpTVnrdcUadG1XJSxGMyOK0wqZ%2FrYbig1Z&X-Amz-Signature=03b1860e5f327b02bae8ecef6d3514fc9abd8d8d4e387aede41b84ad40f1d9b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZIZKP4Q%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDPRrJlQseCC%2Fh58ZnQcgWZBBuMvyO4weBTP0gEsXDuBQIgO4%2FNox0VdxsLhISlR%2BLVehiIrOhZ069ZCSRYj30mtwcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHsnauNyGpgV0AfDOCrcAyVMHe4wGDgvfdHvtEC7q4yNdpOePlxqOl9NNElO9sW5nq3r063ZekVQ4I4K04GnDQBioHnVmHG1ZOjzVZXQWOtn1vUEQu0MaCwSJldoQsWAC%2BHenc8vjxlDa0KZhNLMUyXmnvq9pJsWqhTQs%2F24P2N6JQsCXWXQbbCT8aDysyVljR%2FKbPZywwxwOZE0qikqqSfQj00wlrzaxvwE%2BsllAFGaDf7GBi6v%2FN5nuBw4TnoepRYIAroSl5xQIzIRV9lYEFUhQJ2DVSKEJ7mv%2BHgJpXL%2FYylILkbTWZkNrl9kuXcNtA2rxRZIrSsJVCZ3OUCNUcvOOdkBjXfYELvwTSxHmALFK03EYdtXJ3lgunrtosiPm7WxpjdbwtqwUOKGFLqEqeaOoiw%2B%2F7AjGjYVUMlLx8KPsEfMiG%2BoqV5fCWyt4cy%2F2R2mNwi0eo92bQ8McJwGn1ZyMKKuWcyXETIMfYX6NUaeb%2BsH3RPo39p%2FWe%2F8X%2BZI40SI8yavErkypznfkKeNBv5SmsJ1rF0WHWHIN9OaF8cqDyD4oIyzZtgjLjHXanPM7O0YOPd2VVdSznsakRedTjK%2FkYhNkmYm2Ea8AMQnJWzNLdNxRry7RC6pwgvo2utYM2MtTwYxQX1aizmVMLPQiMIGOqUBCVXLJH3dQ5Q6mIeuVNxDfKFu8uw14XfDy0ltdB8oibqMg%2FObStv%2BUDNI%2FhPZJ82qB8%2FQlYlE7xcJPKyASmmv2ykeGzeWBA2U5TXZSBJYdqYl7MWBj1x%2BOIXzVEQm0vzwzIjeaUeAcUIYhcy8ORpxllJlqgTIwtOOh%2Fb6RWrLPNHZ8h5sj6rYmTK3ZDqOjg%2Fq%2BTVOEF8vtm6Hw9AYkJ99tf0bC%2FXz&X-Amz-Signature=34bf9db00c1bd82e6f0a2a313edbd4752321c4b7625b8fc3b2dd0a2b74551cec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZIZKP4Q%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDPRrJlQseCC%2Fh58ZnQcgWZBBuMvyO4weBTP0gEsXDuBQIgO4%2FNox0VdxsLhISlR%2BLVehiIrOhZ069ZCSRYj30mtwcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHsnauNyGpgV0AfDOCrcAyVMHe4wGDgvfdHvtEC7q4yNdpOePlxqOl9NNElO9sW5nq3r063ZekVQ4I4K04GnDQBioHnVmHG1ZOjzVZXQWOtn1vUEQu0MaCwSJldoQsWAC%2BHenc8vjxlDa0KZhNLMUyXmnvq9pJsWqhTQs%2F24P2N6JQsCXWXQbbCT8aDysyVljR%2FKbPZywwxwOZE0qikqqSfQj00wlrzaxvwE%2BsllAFGaDf7GBi6v%2FN5nuBw4TnoepRYIAroSl5xQIzIRV9lYEFUhQJ2DVSKEJ7mv%2BHgJpXL%2FYylILkbTWZkNrl9kuXcNtA2rxRZIrSsJVCZ3OUCNUcvOOdkBjXfYELvwTSxHmALFK03EYdtXJ3lgunrtosiPm7WxpjdbwtqwUOKGFLqEqeaOoiw%2B%2F7AjGjYVUMlLx8KPsEfMiG%2BoqV5fCWyt4cy%2F2R2mNwi0eo92bQ8McJwGn1ZyMKKuWcyXETIMfYX6NUaeb%2BsH3RPo39p%2FWe%2F8X%2BZI40SI8yavErkypznfkKeNBv5SmsJ1rF0WHWHIN9OaF8cqDyD4oIyzZtgjLjHXanPM7O0YOPd2VVdSznsakRedTjK%2FkYhNkmYm2Ea8AMQnJWzNLdNxRry7RC6pwgvo2utYM2MtTwYxQX1aizmVMLPQiMIGOqUBCVXLJH3dQ5Q6mIeuVNxDfKFu8uw14XfDy0ltdB8oibqMg%2FObStv%2BUDNI%2FhPZJ82qB8%2FQlYlE7xcJPKyASmmv2ykeGzeWBA2U5TXZSBJYdqYl7MWBj1x%2BOIXzVEQm0vzwzIjeaUeAcUIYhcy8ORpxllJlqgTIwtOOh%2Fb6RWrLPNHZ8h5sj6rYmTK3ZDqOjg%2Fq%2BTVOEF8vtm6Hw9AYkJ99tf0bC%2FXz&X-Amz-Signature=389f31bc17b6b3172df632f88436f509e514c3b2efa1114f7b327727c12e2e95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZIZKP4Q%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQDPRrJlQseCC%2Fh58ZnQcgWZBBuMvyO4weBTP0gEsXDuBQIgO4%2FNox0VdxsLhISlR%2BLVehiIrOhZ069ZCSRYj30mtwcq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHsnauNyGpgV0AfDOCrcAyVMHe4wGDgvfdHvtEC7q4yNdpOePlxqOl9NNElO9sW5nq3r063ZekVQ4I4K04GnDQBioHnVmHG1ZOjzVZXQWOtn1vUEQu0MaCwSJldoQsWAC%2BHenc8vjxlDa0KZhNLMUyXmnvq9pJsWqhTQs%2F24P2N6JQsCXWXQbbCT8aDysyVljR%2FKbPZywwxwOZE0qikqqSfQj00wlrzaxvwE%2BsllAFGaDf7GBi6v%2FN5nuBw4TnoepRYIAroSl5xQIzIRV9lYEFUhQJ2DVSKEJ7mv%2BHgJpXL%2FYylILkbTWZkNrl9kuXcNtA2rxRZIrSsJVCZ3OUCNUcvOOdkBjXfYELvwTSxHmALFK03EYdtXJ3lgunrtosiPm7WxpjdbwtqwUOKGFLqEqeaOoiw%2B%2F7AjGjYVUMlLx8KPsEfMiG%2BoqV5fCWyt4cy%2F2R2mNwi0eo92bQ8McJwGn1ZyMKKuWcyXETIMfYX6NUaeb%2BsH3RPo39p%2FWe%2F8X%2BZI40SI8yavErkypznfkKeNBv5SmsJ1rF0WHWHIN9OaF8cqDyD4oIyzZtgjLjHXanPM7O0YOPd2VVdSznsakRedTjK%2FkYhNkmYm2Ea8AMQnJWzNLdNxRry7RC6pwgvo2utYM2MtTwYxQX1aizmVMLPQiMIGOqUBCVXLJH3dQ5Q6mIeuVNxDfKFu8uw14XfDy0ltdB8oibqMg%2FObStv%2BUDNI%2FhPZJ82qB8%2FQlYlE7xcJPKyASmmv2ykeGzeWBA2U5TXZSBJYdqYl7MWBj1x%2BOIXzVEQm0vzwzIjeaUeAcUIYhcy8ORpxllJlqgTIwtOOh%2Fb6RWrLPNHZ8h5sj6rYmTK3ZDqOjg%2Fq%2BTVOEF8vtm6Hw9AYkJ99tf0bC%2FXz&X-Amz-Signature=f93088469057fbe62b3912e421fd5304d4ef695ba34393a2297bb1fc87d4b6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

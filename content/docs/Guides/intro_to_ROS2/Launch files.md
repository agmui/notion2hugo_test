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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637T3TUWW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCRnbwgIORUWBj%2FmF7OHHkMZXDujxm1r%2B%2Fj8KK9dCySVwIhAP6E9uHnBJxhKt52hAdRv2%2B1vDjUwvwHbT09f1dY4v9EKv8DCG8QABoMNjM3NDIzMTgzODA1IgzZ%2BzjDJs8GuBL0X0oq3ANNNfDB5DXdhl2KAhcqWriIyw9MVT33whzemZZgF56ZKkdXNIPCI67Zivy7%2BdvozEUtf6oKoMNph8co7YYDo3%2ByV5V7ozYPSFgBk1wChX3%2FPHhUY19NHURNS57YRLjwWCf8M12KBpdBEJiJxhH0zTAe05iuENrmR78bdIglFzNayd3FlVdOjoF2W%2F91nBJlQHCDz6L4etr%2FpXkqQyzGJ2WWUdak%2BO6tJIud%2BfXlstZzOVrclFONjlH6nueRtAYnwoQtJanofrrUt8335RwOGLqR3npNvaOe0Gc4l88xfvdDy6I7zHsGlW6RFnXDl7ygtdsDFhxDYUw3CscwxV0Neo2rzYXFfqsuTep0XZ9p%2BuJvOI1TwWhjZe2yrscPtdivn3ObFx%2B7zRRjlMQhNhKYCEj6YEgZdXEiiPn6i2k5%2BHfpombGCzKlhJof%2FYhla3h50Uyst6UeQojcSAN22KfU89csFhoV8RYcRfQhiu3DLHvpTqmC688d89oE0XyG%2Bm%2BimW7eIdDuqTU%2B8obbCnDUr6ok2fOPlvURY0Ug26ukWlOl88qP%2BROBRKl5kKEcbWeBp1eaQtxnW3D53rzxChAnfyWZvo8qbc6lr72bQ2zaisENtd4spQY5ygPBhtw22TCNkJ6%2FBjqkAbqDz7SvKT5qmWodqCCU%2BNz1W1BrBIqWOfguObFXlQwtppFkuo6mFLJyDoCZKK8IXOrejClet4Ss3Uo158Ro1kXkVdfGCEU7cRBLErQ%2Bm%2BOQ0MIPwmxLLg9srZFuK2VTR%2Bs3mBq%2BSl0ajd4pYzMxsGk%2Fan3aJ2vNH7AWlSDYNH%2B8reigcANmrCc0wx062%2FjxIfLdzm8HixXl7qv020uRRzF22FQP&X-Amz-Signature=af94268788c327b27b3664c6990e83d522567fca7b91304fc37f420038dddfc1&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637T3TUWW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCRnbwgIORUWBj%2FmF7OHHkMZXDujxm1r%2B%2Fj8KK9dCySVwIhAP6E9uHnBJxhKt52hAdRv2%2B1vDjUwvwHbT09f1dY4v9EKv8DCG8QABoMNjM3NDIzMTgzODA1IgzZ%2BzjDJs8GuBL0X0oq3ANNNfDB5DXdhl2KAhcqWriIyw9MVT33whzemZZgF56ZKkdXNIPCI67Zivy7%2BdvozEUtf6oKoMNph8co7YYDo3%2ByV5V7ozYPSFgBk1wChX3%2FPHhUY19NHURNS57YRLjwWCf8M12KBpdBEJiJxhH0zTAe05iuENrmR78bdIglFzNayd3FlVdOjoF2W%2F91nBJlQHCDz6L4etr%2FpXkqQyzGJ2WWUdak%2BO6tJIud%2BfXlstZzOVrclFONjlH6nueRtAYnwoQtJanofrrUt8335RwOGLqR3npNvaOe0Gc4l88xfvdDy6I7zHsGlW6RFnXDl7ygtdsDFhxDYUw3CscwxV0Neo2rzYXFfqsuTep0XZ9p%2BuJvOI1TwWhjZe2yrscPtdivn3ObFx%2B7zRRjlMQhNhKYCEj6YEgZdXEiiPn6i2k5%2BHfpombGCzKlhJof%2FYhla3h50Uyst6UeQojcSAN22KfU89csFhoV8RYcRfQhiu3DLHvpTqmC688d89oE0XyG%2Bm%2BimW7eIdDuqTU%2B8obbCnDUr6ok2fOPlvURY0Ug26ukWlOl88qP%2BROBRKl5kKEcbWeBp1eaQtxnW3D53rzxChAnfyWZvo8qbc6lr72bQ2zaisENtd4spQY5ygPBhtw22TCNkJ6%2FBjqkAbqDz7SvKT5qmWodqCCU%2BNz1W1BrBIqWOfguObFXlQwtppFkuo6mFLJyDoCZKK8IXOrejClet4Ss3Uo158Ro1kXkVdfGCEU7cRBLErQ%2Bm%2BOQ0MIPwmxLLg9srZFuK2VTR%2Bs3mBq%2BSl0ajd4pYzMxsGk%2Fan3aJ2vNH7AWlSDYNH%2B8reigcANmrCc0wx062%2FjxIfLdzm8HixXl7qv020uRRzF22FQP&X-Amz-Signature=45fc842783d5f0575290e6fccfb621b64a6858357fa06cb609761859c4d9a42e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637T3TUWW%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQCRnbwgIORUWBj%2FmF7OHHkMZXDujxm1r%2B%2Fj8KK9dCySVwIhAP6E9uHnBJxhKt52hAdRv2%2B1vDjUwvwHbT09f1dY4v9EKv8DCG8QABoMNjM3NDIzMTgzODA1IgzZ%2BzjDJs8GuBL0X0oq3ANNNfDB5DXdhl2KAhcqWriIyw9MVT33whzemZZgF56ZKkdXNIPCI67Zivy7%2BdvozEUtf6oKoMNph8co7YYDo3%2ByV5V7ozYPSFgBk1wChX3%2FPHhUY19NHURNS57YRLjwWCf8M12KBpdBEJiJxhH0zTAe05iuENrmR78bdIglFzNayd3FlVdOjoF2W%2F91nBJlQHCDz6L4etr%2FpXkqQyzGJ2WWUdak%2BO6tJIud%2BfXlstZzOVrclFONjlH6nueRtAYnwoQtJanofrrUt8335RwOGLqR3npNvaOe0Gc4l88xfvdDy6I7zHsGlW6RFnXDl7ygtdsDFhxDYUw3CscwxV0Neo2rzYXFfqsuTep0XZ9p%2BuJvOI1TwWhjZe2yrscPtdivn3ObFx%2B7zRRjlMQhNhKYCEj6YEgZdXEiiPn6i2k5%2BHfpombGCzKlhJof%2FYhla3h50Uyst6UeQojcSAN22KfU89csFhoV8RYcRfQhiu3DLHvpTqmC688d89oE0XyG%2Bm%2BimW7eIdDuqTU%2B8obbCnDUr6ok2fOPlvURY0Ug26ukWlOl88qP%2BROBRKl5kKEcbWeBp1eaQtxnW3D53rzxChAnfyWZvo8qbc6lr72bQ2zaisENtd4spQY5ygPBhtw22TCNkJ6%2FBjqkAbqDz7SvKT5qmWodqCCU%2BNz1W1BrBIqWOfguObFXlQwtppFkuo6mFLJyDoCZKK8IXOrejClet4Ss3Uo158Ro1kXkVdfGCEU7cRBLErQ%2Bm%2BOQ0MIPwmxLLg9srZFuK2VTR%2Bs3mBq%2BSl0ajd4pYzMxsGk%2Fan3aJ2vNH7AWlSDYNH%2B8reigcANmrCc0wx062%2FjxIfLdzm8HixXl7qv020uRRzF22FQP&X-Amz-Signature=3713dec96cb1c519ab6b16ed47bdc6a23fd0f1e797cc9389b83e6ee58398ab20&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

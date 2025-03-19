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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPUVF7R%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFqWEdYC6zuswcW7Apg6a32DpcAxtJnhAKhbnZlhQWh1AiAxF3GC3uozfjvbYS7gNljjusFkPlhdqUi1nKu0nc0hDCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMzber3P0imcwQDZU%2FKtwDj8PQiRBu%2Ft7VKlY%2Fy8EYpOYEecIOoOFghQud4IcKZa%2FzORaOiqFAySOnfnZZN6K%2FzrkDA1mv%2BAnhyxg2yigT0OrBQh4OJTkM9p3PntqmiHIbmIaT1qgrwEXMPA0JusjcrqDs4BnGRHEdV0Dj6QJQDw3YgV%2FNQu84eI0HA28RrC%2FigcOcN35wEFJLiNh7XFd%2B7A2Nw8jOOgLEBzVKMaVP51OmASd2cdmbDyrFbkQ%2FJhORXuvqsR6TDFL%2FOSu4%2BfFb6hgQ4bYquRMyWF%2BH8FIGhtOsL1D8SoSa%2BIBV7jWBXgMD1nrU4ZgyqVqeMUEoIscuPq8Ih5Bk4ABnDZYWzRH2L8mqwsVbN0eOff9oGp3sjMfp37ubmZArxVhdg%2F63ZyJwOthYVueqTd7Rmuy7Nbaw4Uu%2Bx8K4jC1ovF07pejB5QysyyAt3OWlfCfsLRfh2R0MRWi6M0qJw2g4SMiJp8UtFKQzCwHrm3%2B8Y1R3sKmlobMIe0ONQZJykCDnoIdomaXi5wsyq8wjHI7nTfvYig81MF1aJ%2BNEik7jJNOnlPRyFwzwpRfnRXz9qOKMm%2FEljtMR2QodVtvPjqj4%2F%2B7%2BO5RRNrgjgS%2FE2QlZH1ykguJKaDYorMUjJ9cFlc6ICsQwmLzrvgY6pgGW7AGPXY7RU%2FvKUdyk%2FrCCVJ5Y7WPz5sqYnndj3f9a7lL%2FdF11XfekwTxELK5MINbT1%2BUh%2B7CIF3NndBX7dx471ERI1oYEllRX6zMKiIYfXcFiQi5eVcNGA%2FjZbrzwc0SetzDCeq3C%2FEbzR6Jy%2B5e2astMQju0pRz8AfX98j18dIw4%2Fkd0447v9Nga3lYLv%2FSrhdUa4ZcwTSxLhL%2F0tHhd8Vi5TBKw&X-Amz-Signature=e08f86692873f0736b465e23f0d7dcf872b7d862ea2ad325e2e08132042de3e2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPUVF7R%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFqWEdYC6zuswcW7Apg6a32DpcAxtJnhAKhbnZlhQWh1AiAxF3GC3uozfjvbYS7gNljjusFkPlhdqUi1nKu0nc0hDCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMzber3P0imcwQDZU%2FKtwDj8PQiRBu%2Ft7VKlY%2Fy8EYpOYEecIOoOFghQud4IcKZa%2FzORaOiqFAySOnfnZZN6K%2FzrkDA1mv%2BAnhyxg2yigT0OrBQh4OJTkM9p3PntqmiHIbmIaT1qgrwEXMPA0JusjcrqDs4BnGRHEdV0Dj6QJQDw3YgV%2FNQu84eI0HA28RrC%2FigcOcN35wEFJLiNh7XFd%2B7A2Nw8jOOgLEBzVKMaVP51OmASd2cdmbDyrFbkQ%2FJhORXuvqsR6TDFL%2FOSu4%2BfFb6hgQ4bYquRMyWF%2BH8FIGhtOsL1D8SoSa%2BIBV7jWBXgMD1nrU4ZgyqVqeMUEoIscuPq8Ih5Bk4ABnDZYWzRH2L8mqwsVbN0eOff9oGp3sjMfp37ubmZArxVhdg%2F63ZyJwOthYVueqTd7Rmuy7Nbaw4Uu%2Bx8K4jC1ovF07pejB5QysyyAt3OWlfCfsLRfh2R0MRWi6M0qJw2g4SMiJp8UtFKQzCwHrm3%2B8Y1R3sKmlobMIe0ONQZJykCDnoIdomaXi5wsyq8wjHI7nTfvYig81MF1aJ%2BNEik7jJNOnlPRyFwzwpRfnRXz9qOKMm%2FEljtMR2QodVtvPjqj4%2F%2B7%2BO5RRNrgjgS%2FE2QlZH1ykguJKaDYorMUjJ9cFlc6ICsQwmLzrvgY6pgGW7AGPXY7RU%2FvKUdyk%2FrCCVJ5Y7WPz5sqYnndj3f9a7lL%2FdF11XfekwTxELK5MINbT1%2BUh%2B7CIF3NndBX7dx471ERI1oYEllRX6zMKiIYfXcFiQi5eVcNGA%2FjZbrzwc0SetzDCeq3C%2FEbzR6Jy%2B5e2astMQju0pRz8AfX98j18dIw4%2Fkd0447v9Nga3lYLv%2FSrhdUa4ZcwTSxLhL%2F0tHhd8Vi5TBKw&X-Amz-Signature=e78f58071b40223aa49b06fa8a126c72a77ec0884d6a13a395e6bc917288249f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DPUVF7R%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIFqWEdYC6zuswcW7Apg6a32DpcAxtJnhAKhbnZlhQWh1AiAxF3GC3uozfjvbYS7gNljjusFkPlhdqUi1nKu0nc0hDCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMzber3P0imcwQDZU%2FKtwDj8PQiRBu%2Ft7VKlY%2Fy8EYpOYEecIOoOFghQud4IcKZa%2FzORaOiqFAySOnfnZZN6K%2FzrkDA1mv%2BAnhyxg2yigT0OrBQh4OJTkM9p3PntqmiHIbmIaT1qgrwEXMPA0JusjcrqDs4BnGRHEdV0Dj6QJQDw3YgV%2FNQu84eI0HA28RrC%2FigcOcN35wEFJLiNh7XFd%2B7A2Nw8jOOgLEBzVKMaVP51OmASd2cdmbDyrFbkQ%2FJhORXuvqsR6TDFL%2FOSu4%2BfFb6hgQ4bYquRMyWF%2BH8FIGhtOsL1D8SoSa%2BIBV7jWBXgMD1nrU4ZgyqVqeMUEoIscuPq8Ih5Bk4ABnDZYWzRH2L8mqwsVbN0eOff9oGp3sjMfp37ubmZArxVhdg%2F63ZyJwOthYVueqTd7Rmuy7Nbaw4Uu%2Bx8K4jC1ovF07pejB5QysyyAt3OWlfCfsLRfh2R0MRWi6M0qJw2g4SMiJp8UtFKQzCwHrm3%2B8Y1R3sKmlobMIe0ONQZJykCDnoIdomaXi5wsyq8wjHI7nTfvYig81MF1aJ%2BNEik7jJNOnlPRyFwzwpRfnRXz9qOKMm%2FEljtMR2QodVtvPjqj4%2F%2B7%2BO5RRNrgjgS%2FE2QlZH1ykguJKaDYorMUjJ9cFlc6ICsQwmLzrvgY6pgGW7AGPXY7RU%2FvKUdyk%2FrCCVJ5Y7WPz5sqYnndj3f9a7lL%2FdF11XfekwTxELK5MINbT1%2BUh%2B7CIF3NndBX7dx471ERI1oYEllRX6zMKiIYfXcFiQi5eVcNGA%2FjZbrzwc0SetzDCeq3C%2FEbzR6Jy%2B5e2astMQju0pRz8AfX98j18dIw4%2Fkd0447v9Nga3lYLv%2FSrhdUa4ZcwTSxLhL%2F0tHhd8Vi5TBKw&X-Amz-Signature=f894e6f964d40afb41d9342631bdc12336fffe027d1bc3e9874329f8551b0a10&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYF6MJYP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD1DvgrFT71wDAYi9JJOmM3WrODAngEf%2BuvpVpE3by2gIhAMLwAo9Id1E778Cy%2BhWE5KiPLsn7%2FYFeDJFxlGa6RQ3yKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBkL6zMIFeWfZmjwYq3AOV74LwoSFRi2jvYL7af36lHcmBJZ%2Bt8GLyKkYXhZNwDhpK81o83uCdyVUb8UCFkTtaEJlmVubssD2dtq9vPRXqEigO%2FzRQXAKYxi6K5YOgLJXajT7yukr10KZxkd9Xfqr1%2BViExcNjBeoSunmk4X3yWfBpruSkIuZ2DlOiBi%2BWNLP9FSqiSFUnSUiAchM7WorXhANdR%2FIicz2CY7hRR%2BmHqZJUNHxdzM7H6vDObqDFfkYJQG7RUc1geXvYE8gzLbhqyG4ajuhR5WVWKp69Up%2FCQUulJfyhI5pdAoBo9uushSSlA7RFuRiOO8dlWGxwCZ%2B1okETp5agS2D8u2ej0Mu7I%2BdIlWCl72lbw6Fo46%2F4x5qwzr4sOn7%2B0OTt3AU0%2Bi9SADXrWoitN6%2BNy1%2FQrU%2Bmj3Hgf1B69WupOgHbS8%2BYdDzo2hPyiD%2FzTbjEugYV2AzXSCFudiEXRklR09HeEZPh8tdXDE74KJFouE8%2BU7AwWuyvymKtW6xk5NTYjjfjXshxbCdCdzFgpIbh74SOAFjNXaLgU4HSHvtAprJMM7PMC8se6b4Bhq9YrGXUJuWDuP8rRs7L%2BkOcnmEEbsZZMbiu1F4h7x8ISLpVqyRAjQIToUzTKfG6N9F6n%2Fvh2TCJ3eXBBjqkAeMM%2F9FLh1yRnt8xIrseoI3DVYK3oHe5HqH7HAv3GLbdQCBPvlmDDGnx56G8csGm5CS03jCArM1mnKO%2FGEW5AdO%2Bfsox2sKHNiTUXXqqD7z%2BWcUKdqVzbmYZoK8S10BEkcoHyWZZl6d5PAyZTkvBDW4ZLxZMZcaZ1%2BtC%2BeMzv03E6jQyR%2BHIS2GS%2BQWkvIkFnHsw81mBZpWYOU13qWWJaL6uE8bj&X-Amz-Signature=c7cf7dfd72120d61147728e73b841d5ebd69460d28becd3ddea9cd8aec6fd6c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYF6MJYP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD1DvgrFT71wDAYi9JJOmM3WrODAngEf%2BuvpVpE3by2gIhAMLwAo9Id1E778Cy%2BhWE5KiPLsn7%2FYFeDJFxlGa6RQ3yKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBkL6zMIFeWfZmjwYq3AOV74LwoSFRi2jvYL7af36lHcmBJZ%2Bt8GLyKkYXhZNwDhpK81o83uCdyVUb8UCFkTtaEJlmVubssD2dtq9vPRXqEigO%2FzRQXAKYxi6K5YOgLJXajT7yukr10KZxkd9Xfqr1%2BViExcNjBeoSunmk4X3yWfBpruSkIuZ2DlOiBi%2BWNLP9FSqiSFUnSUiAchM7WorXhANdR%2FIicz2CY7hRR%2BmHqZJUNHxdzM7H6vDObqDFfkYJQG7RUc1geXvYE8gzLbhqyG4ajuhR5WVWKp69Up%2FCQUulJfyhI5pdAoBo9uushSSlA7RFuRiOO8dlWGxwCZ%2B1okETp5agS2D8u2ej0Mu7I%2BdIlWCl72lbw6Fo46%2F4x5qwzr4sOn7%2B0OTt3AU0%2Bi9SADXrWoitN6%2BNy1%2FQrU%2Bmj3Hgf1B69WupOgHbS8%2BYdDzo2hPyiD%2FzTbjEugYV2AzXSCFudiEXRklR09HeEZPh8tdXDE74KJFouE8%2BU7AwWuyvymKtW6xk5NTYjjfjXshxbCdCdzFgpIbh74SOAFjNXaLgU4HSHvtAprJMM7PMC8se6b4Bhq9YrGXUJuWDuP8rRs7L%2BkOcnmEEbsZZMbiu1F4h7x8ISLpVqyRAjQIToUzTKfG6N9F6n%2Fvh2TCJ3eXBBjqkAeMM%2F9FLh1yRnt8xIrseoI3DVYK3oHe5HqH7HAv3GLbdQCBPvlmDDGnx56G8csGm5CS03jCArM1mnKO%2FGEW5AdO%2Bfsox2sKHNiTUXXqqD7z%2BWcUKdqVzbmYZoK8S10BEkcoHyWZZl6d5PAyZTkvBDW4ZLxZMZcaZ1%2BtC%2BeMzv03E6jQyR%2BHIS2GS%2BQWkvIkFnHsw81mBZpWYOU13qWWJaL6uE8bj&X-Amz-Signature=55e5a99591dcf3ad5003406486a072e88320f7e5020e5891a0b9678c4f999b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYF6MJYP%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T090916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD1DvgrFT71wDAYi9JJOmM3WrODAngEf%2BuvpVpE3by2gIhAMLwAo9Id1E778Cy%2BhWE5KiPLsn7%2FYFeDJFxlGa6RQ3yKogECKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxBkL6zMIFeWfZmjwYq3AOV74LwoSFRi2jvYL7af36lHcmBJZ%2Bt8GLyKkYXhZNwDhpK81o83uCdyVUb8UCFkTtaEJlmVubssD2dtq9vPRXqEigO%2FzRQXAKYxi6K5YOgLJXajT7yukr10KZxkd9Xfqr1%2BViExcNjBeoSunmk4X3yWfBpruSkIuZ2DlOiBi%2BWNLP9FSqiSFUnSUiAchM7WorXhANdR%2FIicz2CY7hRR%2BmHqZJUNHxdzM7H6vDObqDFfkYJQG7RUc1geXvYE8gzLbhqyG4ajuhR5WVWKp69Up%2FCQUulJfyhI5pdAoBo9uushSSlA7RFuRiOO8dlWGxwCZ%2B1okETp5agS2D8u2ej0Mu7I%2BdIlWCl72lbw6Fo46%2F4x5qwzr4sOn7%2B0OTt3AU0%2Bi9SADXrWoitN6%2BNy1%2FQrU%2Bmj3Hgf1B69WupOgHbS8%2BYdDzo2hPyiD%2FzTbjEugYV2AzXSCFudiEXRklR09HeEZPh8tdXDE74KJFouE8%2BU7AwWuyvymKtW6xk5NTYjjfjXshxbCdCdzFgpIbh74SOAFjNXaLgU4HSHvtAprJMM7PMC8se6b4Bhq9YrGXUJuWDuP8rRs7L%2BkOcnmEEbsZZMbiu1F4h7x8ISLpVqyRAjQIToUzTKfG6N9F6n%2Fvh2TCJ3eXBBjqkAeMM%2F9FLh1yRnt8xIrseoI3DVYK3oHe5HqH7HAv3GLbdQCBPvlmDDGnx56G8csGm5CS03jCArM1mnKO%2FGEW5AdO%2Bfsox2sKHNiTUXXqqD7z%2BWcUKdqVzbmYZoK8S10BEkcoHyWZZl6d5PAyZTkvBDW4ZLxZMZcaZ1%2BtC%2BeMzv03E6jQyR%2BHIS2GS%2BQWkvIkFnHsw81mBZpWYOU13qWWJaL6uE8bj&X-Amz-Signature=77cec8af00a20d477edbeba7627f22faaff80d973c9f4b9cac8e34d5ab493360&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

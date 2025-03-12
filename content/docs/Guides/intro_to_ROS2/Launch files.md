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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QTLAN5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIF4IonspkuLxRh1D%2Fi8Fuv29Cxf85vZLqSYnnqbI8xLMAiAzsTnTsYkmUidRLCKRWVkiZLzqyrybpA%2FQkwx9eXczDyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhxVXggiA02hVHlffKtwDClQ1947q1v2l4FY2pKzbEoCrin92b8CiNJwmPjDeWQOc8NmkVqLn77md7K32kS%2Bc0lOSockckSQEMoqkyHf4%2Fe%2FT5IwOuyp%2BakYKcCm6fd0o7Ne%2FZK8fZ4wAoG4riJvbzuqvIBzTeUN3VNwMbKipVgWDYY11Bf9RsiLSXyMRBpOW81eYq671x4DxP1NqhqRS1alkp9cUoSFpOmLpOZM4W0fnzFPgcyOvImQ3x1PDFjWjOJtmab3DLK1PFHZ4aqaFQ3B7h6KujNC%2Bk5InMqiKt6NEItYPpKcwAeyjVQ%2FxSei%2Blrb%2FqVxjW%2B7LFyC%2FOAyThVktFE0W5Rx5uTiDN9S8O4FfRZFPXifLjgNiCuLuusINtGS%2BwfwH9cOVaTYm0pQPkICpswEb7M%2FrdMkWNQuQR7LhgtGNtRHZigW%2F%2FSbBXPpIg7BGjVttjJ%2F1a2RyD%2FM8udnlD4tlVSTFpw35aRTHakV6VT8zKjlOuAiBHjWzFfgHL3ySN%2BxoHw6pV1YpH8GyBMq%2BfBimY641%2FeIdp5xqbKSPo9BjHFhcMV%2FB649%2FC24%2BoG5sVyzFkF2yP0reDl%2Fkgt4p90hKYlfVvL5LlY0uF0hADweLH6p4ZHA3oSvPl77IGMLRxJfYaSv9XqAw%2Bd%2FGvgY6pgHVyuVMRiEMkb0pAPhnupc8iey6LR3z45LVhYaEaCO3DjUUfvKpLJpQvXHmJwNa2fUP6VAHFexRpK76nj3ilGLr5T3QREetW7xAn56BRtkF77CcD8W8R001%2FiaaxpH50PFmKma8idARJxXo0uoX4XO5i0o2OiXyEFntVVo%2BGEdkqBaLdZLj2aM%2Fwnz9GiNixv9jEHK6LU8imDmo4i7V4sN%2BKPu3CqXY&X-Amz-Signature=6f66064752c0ac0127662ca55220b058bb77f035726b010d6e0e00fb588caf91&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QTLAN5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIF4IonspkuLxRh1D%2Fi8Fuv29Cxf85vZLqSYnnqbI8xLMAiAzsTnTsYkmUidRLCKRWVkiZLzqyrybpA%2FQkwx9eXczDyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhxVXggiA02hVHlffKtwDClQ1947q1v2l4FY2pKzbEoCrin92b8CiNJwmPjDeWQOc8NmkVqLn77md7K32kS%2Bc0lOSockckSQEMoqkyHf4%2Fe%2FT5IwOuyp%2BakYKcCm6fd0o7Ne%2FZK8fZ4wAoG4riJvbzuqvIBzTeUN3VNwMbKipVgWDYY11Bf9RsiLSXyMRBpOW81eYq671x4DxP1NqhqRS1alkp9cUoSFpOmLpOZM4W0fnzFPgcyOvImQ3x1PDFjWjOJtmab3DLK1PFHZ4aqaFQ3B7h6KujNC%2Bk5InMqiKt6NEItYPpKcwAeyjVQ%2FxSei%2Blrb%2FqVxjW%2B7LFyC%2FOAyThVktFE0W5Rx5uTiDN9S8O4FfRZFPXifLjgNiCuLuusINtGS%2BwfwH9cOVaTYm0pQPkICpswEb7M%2FrdMkWNQuQR7LhgtGNtRHZigW%2F%2FSbBXPpIg7BGjVttjJ%2F1a2RyD%2FM8udnlD4tlVSTFpw35aRTHakV6VT8zKjlOuAiBHjWzFfgHL3ySN%2BxoHw6pV1YpH8GyBMq%2BfBimY641%2FeIdp5xqbKSPo9BjHFhcMV%2FB649%2FC24%2BoG5sVyzFkF2yP0reDl%2Fkgt4p90hKYlfVvL5LlY0uF0hADweLH6p4ZHA3oSvPl77IGMLRxJfYaSv9XqAw%2Bd%2FGvgY6pgHVyuVMRiEMkb0pAPhnupc8iey6LR3z45LVhYaEaCO3DjUUfvKpLJpQvXHmJwNa2fUP6VAHFexRpK76nj3ilGLr5T3QREetW7xAn56BRtkF77CcD8W8R001%2FiaaxpH50PFmKma8idARJxXo0uoX4XO5i0o2OiXyEFntVVo%2BGEdkqBaLdZLj2aM%2Fwnz9GiNixv9jEHK6LU8imDmo4i7V4sN%2BKPu3CqXY&X-Amz-Signature=b22e31ae554611e271a1bee1c417aa171ae022d5c68bcb1e981815ffcb498568&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3QTLAN5%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T161012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIF4IonspkuLxRh1D%2Fi8Fuv29Cxf85vZLqSYnnqbI8xLMAiAzsTnTsYkmUidRLCKRWVkiZLzqyrybpA%2FQkwx9eXczDyqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhxVXggiA02hVHlffKtwDClQ1947q1v2l4FY2pKzbEoCrin92b8CiNJwmPjDeWQOc8NmkVqLn77md7K32kS%2Bc0lOSockckSQEMoqkyHf4%2Fe%2FT5IwOuyp%2BakYKcCm6fd0o7Ne%2FZK8fZ4wAoG4riJvbzuqvIBzTeUN3VNwMbKipVgWDYY11Bf9RsiLSXyMRBpOW81eYq671x4DxP1NqhqRS1alkp9cUoSFpOmLpOZM4W0fnzFPgcyOvImQ3x1PDFjWjOJtmab3DLK1PFHZ4aqaFQ3B7h6KujNC%2Bk5InMqiKt6NEItYPpKcwAeyjVQ%2FxSei%2Blrb%2FqVxjW%2B7LFyC%2FOAyThVktFE0W5Rx5uTiDN9S8O4FfRZFPXifLjgNiCuLuusINtGS%2BwfwH9cOVaTYm0pQPkICpswEb7M%2FrdMkWNQuQR7LhgtGNtRHZigW%2F%2FSbBXPpIg7BGjVttjJ%2F1a2RyD%2FM8udnlD4tlVSTFpw35aRTHakV6VT8zKjlOuAiBHjWzFfgHL3ySN%2BxoHw6pV1YpH8GyBMq%2BfBimY641%2FeIdp5xqbKSPo9BjHFhcMV%2FB649%2FC24%2BoG5sVyzFkF2yP0reDl%2Fkgt4p90hKYlfVvL5LlY0uF0hADweLH6p4ZHA3oSvPl77IGMLRxJfYaSv9XqAw%2Bd%2FGvgY6pgHVyuVMRiEMkb0pAPhnupc8iey6LR3z45LVhYaEaCO3DjUUfvKpLJpQvXHmJwNa2fUP6VAHFexRpK76nj3ilGLr5T3QREetW7xAn56BRtkF77CcD8W8R001%2FiaaxpH50PFmKma8idARJxXo0uoX4XO5i0o2OiXyEFntVVo%2BGEdkqBaLdZLj2aM%2Fwnz9GiNixv9jEHK6LU8imDmo4i7V4sN%2BKPu3CqXY&X-Amz-Signature=ba0698033dab9a95f2a25fc9e890384e80c7c0f8a6db61e826fe7c4f9db9e734&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

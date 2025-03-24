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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673XNZPYM%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP%2BSL2810V3%2FBlO3xXLtrFlyNCw593AhBAlbfUBUQCmgIgYh20T5Cu%2BVwdzAML7MYQb6aKtA2Kkft0zFAzn%2FO52zwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInChOQ3QSmPNWLmRyrcA9BMXmwo%2BBJB69yL0HCIiLx8zuYOq3K1u7wUAlFX%2BA13N8a%2F%2BntpLbYENkEhpPwf9tT3y1PlFXB758IL5pOkFrDWpQLAKv43j2nsZNlj70JPVjnkGNyh2%2F5%2F8qx0Q9sx32xF09bd8O%2FHtQ4i5oqWzDL43D%2Beu6GtnrFXT2WJ7zeCwoq9gQ%2BU3B5LnoesLE2BGYW3M2pedFoSqbc7zIn4GblpM88zNq55vXA7OVB2JnUXXMrpsyQDd%2FwFPdbgBlVbMQ0tP7zvbnyZvgW7A6SwSlWsMqmdcMZZ0BCEoV9XAF1%2FACTEKq61feJJahMsj2ZRokzrMciNOBBnhwBOajocJG0D7On7pzZGdM6ZMLXgQ%2BgYWVGrwJ5Stg1lGvAGguF%2BbLIZt9jvWyypZ0eK0JyRSiDI3CAMCYt%2F%2Be4PVXIDbMHHl8wBXvP%2FY%2BB%2Fx5KH4MD9LYXdDPgTybheRw8Xml34z%2BIJuNk1GfdUcRqlbiI5g3vHjSbXKk9LMQE%2Bl5oWR9wYdxDVQJBn9Vs5fCgJI0eGqdGUlHH9zND%2F664lfky%2FZ9%2FoM2QDeLi%2Fh1pbDwM%2BYC2ml2%2F1%2BEb%2BZCqzMhfmImgPQNqLLDyIq7wJoufguFRqtWxhi%2BLp3H2iHcf1Z6nCMJeQhb8GOqUB8YaUsxgZuSpDu8aHGa%2FS1AJmZOS9q38qc8L7vrQtKDFpkP6uRdDEHWsRC50w5fqgtopIypB5KSPHs2NI2eNlCM0J5g8103e0NK0BmPW1XkD%2FkGhQnaGat1p5OkUbOdiSlEHKmqf1XNcyCAkRpb4eAsLSj%2F1Yta0WUOnZQgHkZRWO0FC5ZJIU5YX1h8%2BtvsxtT90zfoWkPX7zmoEvzbGiD9R7XAiw&X-Amz-Signature=6296c227fbf3cdbb04be99ed715a96eb7cb58fe1f81774afcd773f6b1245f7ee&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673XNZPYM%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP%2BSL2810V3%2FBlO3xXLtrFlyNCw593AhBAlbfUBUQCmgIgYh20T5Cu%2BVwdzAML7MYQb6aKtA2Kkft0zFAzn%2FO52zwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInChOQ3QSmPNWLmRyrcA9BMXmwo%2BBJB69yL0HCIiLx8zuYOq3K1u7wUAlFX%2BA13N8a%2F%2BntpLbYENkEhpPwf9tT3y1PlFXB758IL5pOkFrDWpQLAKv43j2nsZNlj70JPVjnkGNyh2%2F5%2F8qx0Q9sx32xF09bd8O%2FHtQ4i5oqWzDL43D%2Beu6GtnrFXT2WJ7zeCwoq9gQ%2BU3B5LnoesLE2BGYW3M2pedFoSqbc7zIn4GblpM88zNq55vXA7OVB2JnUXXMrpsyQDd%2FwFPdbgBlVbMQ0tP7zvbnyZvgW7A6SwSlWsMqmdcMZZ0BCEoV9XAF1%2FACTEKq61feJJahMsj2ZRokzrMciNOBBnhwBOajocJG0D7On7pzZGdM6ZMLXgQ%2BgYWVGrwJ5Stg1lGvAGguF%2BbLIZt9jvWyypZ0eK0JyRSiDI3CAMCYt%2F%2Be4PVXIDbMHHl8wBXvP%2FY%2BB%2Fx5KH4MD9LYXdDPgTybheRw8Xml34z%2BIJuNk1GfdUcRqlbiI5g3vHjSbXKk9LMQE%2Bl5oWR9wYdxDVQJBn9Vs5fCgJI0eGqdGUlHH9zND%2F664lfky%2FZ9%2FoM2QDeLi%2Fh1pbDwM%2BYC2ml2%2F1%2BEb%2BZCqzMhfmImgPQNqLLDyIq7wJoufguFRqtWxhi%2BLp3H2iHcf1Z6nCMJeQhb8GOqUB8YaUsxgZuSpDu8aHGa%2FS1AJmZOS9q38qc8L7vrQtKDFpkP6uRdDEHWsRC50w5fqgtopIypB5KSPHs2NI2eNlCM0J5g8103e0NK0BmPW1XkD%2FkGhQnaGat1p5OkUbOdiSlEHKmqf1XNcyCAkRpb4eAsLSj%2F1Yta0WUOnZQgHkZRWO0FC5ZJIU5YX1h8%2BtvsxtT90zfoWkPX7zmoEvzbGiD9R7XAiw&X-Amz-Signature=41d1e90294226a860bac9f45cb9fe0480228e0f8cb4b1f693d96e0a0b1939d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673XNZPYM%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP%2BSL2810V3%2FBlO3xXLtrFlyNCw593AhBAlbfUBUQCmgIgYh20T5Cu%2BVwdzAML7MYQb6aKtA2Kkft0zFAzn%2FO52zwqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInChOQ3QSmPNWLmRyrcA9BMXmwo%2BBJB69yL0HCIiLx8zuYOq3K1u7wUAlFX%2BA13N8a%2F%2BntpLbYENkEhpPwf9tT3y1PlFXB758IL5pOkFrDWpQLAKv43j2nsZNlj70JPVjnkGNyh2%2F5%2F8qx0Q9sx32xF09bd8O%2FHtQ4i5oqWzDL43D%2Beu6GtnrFXT2WJ7zeCwoq9gQ%2BU3B5LnoesLE2BGYW3M2pedFoSqbc7zIn4GblpM88zNq55vXA7OVB2JnUXXMrpsyQDd%2FwFPdbgBlVbMQ0tP7zvbnyZvgW7A6SwSlWsMqmdcMZZ0BCEoV9XAF1%2FACTEKq61feJJahMsj2ZRokzrMciNOBBnhwBOajocJG0D7On7pzZGdM6ZMLXgQ%2BgYWVGrwJ5Stg1lGvAGguF%2BbLIZt9jvWyypZ0eK0JyRSiDI3CAMCYt%2F%2Be4PVXIDbMHHl8wBXvP%2FY%2BB%2Fx5KH4MD9LYXdDPgTybheRw8Xml34z%2BIJuNk1GfdUcRqlbiI5g3vHjSbXKk9LMQE%2Bl5oWR9wYdxDVQJBn9Vs5fCgJI0eGqdGUlHH9zND%2F664lfky%2FZ9%2FoM2QDeLi%2Fh1pbDwM%2BYC2ml2%2F1%2BEb%2BZCqzMhfmImgPQNqLLDyIq7wJoufguFRqtWxhi%2BLp3H2iHcf1Z6nCMJeQhb8GOqUB8YaUsxgZuSpDu8aHGa%2FS1AJmZOS9q38qc8L7vrQtKDFpkP6uRdDEHWsRC50w5fqgtopIypB5KSPHs2NI2eNlCM0J5g8103e0NK0BmPW1XkD%2FkGhQnaGat1p5OkUbOdiSlEHKmqf1XNcyCAkRpb4eAsLSj%2F1Yta0WUOnZQgHkZRWO0FC5ZJIU5YX1h8%2BtvsxtT90zfoWkPX7zmoEvzbGiD9R7XAiw&X-Amz-Signature=47e7f001e6de594ce491e8d776b0b9a64681c38c0c9f59f2b4b648ec764a5435&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

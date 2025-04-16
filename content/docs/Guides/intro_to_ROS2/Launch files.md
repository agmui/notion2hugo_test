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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KOEPFDR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkReax8sO%2FHhHlypQ9MbRknvDv%2FBvA9cLaQTV9TvfoSAiEAriPXiC6mgo1Uzsr9D7mG16tTHV1nMNXQEGFJLhDWbWcq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDC5Tu1Uv%2F4CFOMggdSrcA1UrQSCIhELkYrPFcabTcCpdyp7%2Bje07RH15HLI7%2Fmsz2iw50W0QXq2hPifF0NRstwQnX37pa9UtZO4nW9SKevWpXv8qe%2BKtfbYEquke%2BcZ2G8zDI%2B07tT90JcRBnk4d9g4n3Pf7vvpprvPN99KwqIwu7aAnRyFhZXetCQkgo9ZgIsC7KqVv9fSc9RHIXLfKb1MJZ2YMhg7%2BSUac9HttO7cN7DihrCfqtIMCBRZoP0Ixr%2BcTvJaGJ4lvYoSDGIJpDrYWoDehBuzfAwZyedomhh%2Fsx6tEyO4n3yNS%2B7pwChX7mOfoBjeMhC4Ozt%2B4xSZTcuZPPlg2VRaJFWQeTP3N1pLYovgC9iVfQv0vDfqpHVgCf1xOwFCfLEa0jBSoV%2FqeQnqhLg7AI5blMe66z00g4ySMPP%2B9Ad1APOlunOxkAoOyfcaCar2oE4mj8GrnQUqqIfF8ANOkmMhEVTsYBGYAyU1kq7E1JcoUIozZrXTcFN5zXJA3%2BoymJQ3JLiBh%2FNJr4OE28dZD9iHgxcj8CwUniYDRHBIQY%2FV03pqkBoWEI6xopp1jU94DYOhNVaxfVAPNVU985JBy00QLTBr%2BcqnyWURmysEBu7f5oIEfrQHA%2BnLYhpHNmBHTe3gUC2QYMLyq%2F78GOqUB3pKwA5kNU0OihtpfDc%2FCudhdyLVmpL9jy1DhJHBKxR4sJCpdtQ9BQHzFbrbtk9VqCsELspwfEMibrYPht8%2BmJ6FiFnB5I2QSg1wJ%2BZ7E2qbMyAUc8ucaTE%2FEFTyngjb0B%2BncmxywGL7QYkBNxobOPGpix2ouKziNmwwZznT9g%2B1QPFg3nNeTPZabOWDQQwR%2F89jPwahPkZ7Wp5nXR9lmAktdX88N&X-Amz-Signature=1a1f575f40f4b1f64cc41afd19ec2e484ab6098da8e54a737ee1a882c1a61825&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KOEPFDR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkReax8sO%2FHhHlypQ9MbRknvDv%2FBvA9cLaQTV9TvfoSAiEAriPXiC6mgo1Uzsr9D7mG16tTHV1nMNXQEGFJLhDWbWcq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDC5Tu1Uv%2F4CFOMggdSrcA1UrQSCIhELkYrPFcabTcCpdyp7%2Bje07RH15HLI7%2Fmsz2iw50W0QXq2hPifF0NRstwQnX37pa9UtZO4nW9SKevWpXv8qe%2BKtfbYEquke%2BcZ2G8zDI%2B07tT90JcRBnk4d9g4n3Pf7vvpprvPN99KwqIwu7aAnRyFhZXetCQkgo9ZgIsC7KqVv9fSc9RHIXLfKb1MJZ2YMhg7%2BSUac9HttO7cN7DihrCfqtIMCBRZoP0Ixr%2BcTvJaGJ4lvYoSDGIJpDrYWoDehBuzfAwZyedomhh%2Fsx6tEyO4n3yNS%2B7pwChX7mOfoBjeMhC4Ozt%2B4xSZTcuZPPlg2VRaJFWQeTP3N1pLYovgC9iVfQv0vDfqpHVgCf1xOwFCfLEa0jBSoV%2FqeQnqhLg7AI5blMe66z00g4ySMPP%2B9Ad1APOlunOxkAoOyfcaCar2oE4mj8GrnQUqqIfF8ANOkmMhEVTsYBGYAyU1kq7E1JcoUIozZrXTcFN5zXJA3%2BoymJQ3JLiBh%2FNJr4OE28dZD9iHgxcj8CwUniYDRHBIQY%2FV03pqkBoWEI6xopp1jU94DYOhNVaxfVAPNVU985JBy00QLTBr%2BcqnyWURmysEBu7f5oIEfrQHA%2BnLYhpHNmBHTe3gUC2QYMLyq%2F78GOqUB3pKwA5kNU0OihtpfDc%2FCudhdyLVmpL9jy1DhJHBKxR4sJCpdtQ9BQHzFbrbtk9VqCsELspwfEMibrYPht8%2BmJ6FiFnB5I2QSg1wJ%2BZ7E2qbMyAUc8ucaTE%2FEFTyngjb0B%2BncmxywGL7QYkBNxobOPGpix2ouKziNmwwZznT9g%2B1QPFg3nNeTPZabOWDQQwR%2F89jPwahPkZ7Wp5nXR9lmAktdX88N&X-Amz-Signature=41a6f591dfcf04b7fad50d1fd38306ba0a4ab3fb60343dd43d80005bf0716d32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KOEPFDR%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T161053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEkReax8sO%2FHhHlypQ9MbRknvDv%2FBvA9cLaQTV9TvfoSAiEAriPXiC6mgo1Uzsr9D7mG16tTHV1nMNXQEGFJLhDWbWcq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDC5Tu1Uv%2F4CFOMggdSrcA1UrQSCIhELkYrPFcabTcCpdyp7%2Bje07RH15HLI7%2Fmsz2iw50W0QXq2hPifF0NRstwQnX37pa9UtZO4nW9SKevWpXv8qe%2BKtfbYEquke%2BcZ2G8zDI%2B07tT90JcRBnk4d9g4n3Pf7vvpprvPN99KwqIwu7aAnRyFhZXetCQkgo9ZgIsC7KqVv9fSc9RHIXLfKb1MJZ2YMhg7%2BSUac9HttO7cN7DihrCfqtIMCBRZoP0Ixr%2BcTvJaGJ4lvYoSDGIJpDrYWoDehBuzfAwZyedomhh%2Fsx6tEyO4n3yNS%2B7pwChX7mOfoBjeMhC4Ozt%2B4xSZTcuZPPlg2VRaJFWQeTP3N1pLYovgC9iVfQv0vDfqpHVgCf1xOwFCfLEa0jBSoV%2FqeQnqhLg7AI5blMe66z00g4ySMPP%2B9Ad1APOlunOxkAoOyfcaCar2oE4mj8GrnQUqqIfF8ANOkmMhEVTsYBGYAyU1kq7E1JcoUIozZrXTcFN5zXJA3%2BoymJQ3JLiBh%2FNJr4OE28dZD9iHgxcj8CwUniYDRHBIQY%2FV03pqkBoWEI6xopp1jU94DYOhNVaxfVAPNVU985JBy00QLTBr%2BcqnyWURmysEBu7f5oIEfrQHA%2BnLYhpHNmBHTe3gUC2QYMLyq%2F78GOqUB3pKwA5kNU0OihtpfDc%2FCudhdyLVmpL9jy1DhJHBKxR4sJCpdtQ9BQHzFbrbtk9VqCsELspwfEMibrYPht8%2BmJ6FiFnB5I2QSg1wJ%2BZ7E2qbMyAUc8ucaTE%2FEFTyngjb0B%2BncmxywGL7QYkBNxobOPGpix2ouKziNmwwZznT9g%2B1QPFg3nNeTPZabOWDQQwR%2F89jPwahPkZ7Wp5nXR9lmAktdX88N&X-Amz-Signature=d967ebc97e594585e6f9199ebe955a487cd398728e2d7fb1df6047cf020e55dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

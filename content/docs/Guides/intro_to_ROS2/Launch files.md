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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWUBIIZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHprdsG4rZILRwnUnG7ZUm0dH1FYVinmuSvL0OsAMrA%2BAiB%2BNBJOe3NqPwpwX8IH3KJsWTmyt8BRCrODUqfWSUtSxCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6L2SfjziBOcz8oVDKtwDHzSrZtonB7C%2BgOZRMfRkOMHstTJuJeTE8QNTnJNC70qsenZangQl%2BvtD%2FWdmUKmR5TOTNerB6NCvZh8fC9GjBfwdIfaqDuC5jYgd8bVzg0gGxE9B8etgtIVJw%2B3aNPRW2LRDHb1Rj1G5R2c0B1ekBtAiDE1YEQRaqGC1nDu21tvfhsnat4PUi6%2B%2FKZk9iqnY7dK7sKbnL34IWyTGiOkO1w6Vkewz9dvTSb43jNBjo1apNP1Xr%2BAiH6AXxvjIJMCUk9arCEQWm90gp03Xy0a2Hj8MSdQkrpyuB9o07P6s0TF5RMhcyEE87uG4XsMAsUE3%2B4DhPRrmoEUDSZUCkm7ReptfqGTkffLcFvmhfJltjWF4UDez3tVqhvToU4oTeFnG27yu%2Bb7U1e0X7KyTQ1zuBsl0q4uNfZD8CY8hxhP0J59kDYeazD%2Fh3F3ZO3Ss%2FlwsCD2nQtoUwCnYhJ1VjFhCo388H5QQJW96BIR9fvFKx45%2FmeR6w9rgxHX9u0KWJ1nvHFTVIVl3D%2BSUizrMU%2F54QOArJGEi5Q1dFjgrpD6vIFeTcZQuSK5R3JHf%2B%2BJB8wA3H0M6q4ojcpNwxmNnBR%2BxDygjnbjOK%2Bt9Err6ZrgpQjiYG2f4wgeKYaVT3h8w%2BMCAvQY6pgEZuC%2FlT4fHRYo1bkGchkPt%2BE%2BapRO0705SSlk0D5Y4DWb1pAi%2FehOQKj6xW0aaH2XJ8mza2N38W2sAdEE9clLPjSqZ%2BLd06RyTc%2BJ8MWdMIWaK1O8eFGe5BPahlMoziyW9d8G79Hasnz%2FNWFz8qss3dTTFZ9FKwbbQO7PQSOvKGtzUAb4cKIzliQGSor5yxh0GceHFLvnPbB4IUp%2BTJG8OZkhiJnA4&X-Amz-Signature=d8b72d35454eac2740a6515ad57a934745f79518b20543ce54decaa6353ad861&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWUBIIZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHprdsG4rZILRwnUnG7ZUm0dH1FYVinmuSvL0OsAMrA%2BAiB%2BNBJOe3NqPwpwX8IH3KJsWTmyt8BRCrODUqfWSUtSxCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6L2SfjziBOcz8oVDKtwDHzSrZtonB7C%2BgOZRMfRkOMHstTJuJeTE8QNTnJNC70qsenZangQl%2BvtD%2FWdmUKmR5TOTNerB6NCvZh8fC9GjBfwdIfaqDuC5jYgd8bVzg0gGxE9B8etgtIVJw%2B3aNPRW2LRDHb1Rj1G5R2c0B1ekBtAiDE1YEQRaqGC1nDu21tvfhsnat4PUi6%2B%2FKZk9iqnY7dK7sKbnL34IWyTGiOkO1w6Vkewz9dvTSb43jNBjo1apNP1Xr%2BAiH6AXxvjIJMCUk9arCEQWm90gp03Xy0a2Hj8MSdQkrpyuB9o07P6s0TF5RMhcyEE87uG4XsMAsUE3%2B4DhPRrmoEUDSZUCkm7ReptfqGTkffLcFvmhfJltjWF4UDez3tVqhvToU4oTeFnG27yu%2Bb7U1e0X7KyTQ1zuBsl0q4uNfZD8CY8hxhP0J59kDYeazD%2Fh3F3ZO3Ss%2FlwsCD2nQtoUwCnYhJ1VjFhCo388H5QQJW96BIR9fvFKx45%2FmeR6w9rgxHX9u0KWJ1nvHFTVIVl3D%2BSUizrMU%2F54QOArJGEi5Q1dFjgrpD6vIFeTcZQuSK5R3JHf%2B%2BJB8wA3H0M6q4ojcpNwxmNnBR%2BxDygjnbjOK%2Bt9Err6ZrgpQjiYG2f4wgeKYaVT3h8w%2BMCAvQY6pgEZuC%2FlT4fHRYo1bkGchkPt%2BE%2BapRO0705SSlk0D5Y4DWb1pAi%2FehOQKj6xW0aaH2XJ8mza2N38W2sAdEE9clLPjSqZ%2BLd06RyTc%2BJ8MWdMIWaK1O8eFGe5BPahlMoziyW9d8G79Hasnz%2FNWFz8qss3dTTFZ9FKwbbQO7PQSOvKGtzUAb4cKIzliQGSor5yxh0GceHFLvnPbB4IUp%2BTJG8OZkhiJnA4&X-Amz-Signature=be8cbb87bdb2cdad70edd60223c747edfd9bff1f9a9ef6a5d871f0240c753be3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWUBIIZ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T050820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHprdsG4rZILRwnUnG7ZUm0dH1FYVinmuSvL0OsAMrA%2BAiB%2BNBJOe3NqPwpwX8IH3KJsWTmyt8BRCrODUqfWSUtSxCqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6L2SfjziBOcz8oVDKtwDHzSrZtonB7C%2BgOZRMfRkOMHstTJuJeTE8QNTnJNC70qsenZangQl%2BvtD%2FWdmUKmR5TOTNerB6NCvZh8fC9GjBfwdIfaqDuC5jYgd8bVzg0gGxE9B8etgtIVJw%2B3aNPRW2LRDHb1Rj1G5R2c0B1ekBtAiDE1YEQRaqGC1nDu21tvfhsnat4PUi6%2B%2FKZk9iqnY7dK7sKbnL34IWyTGiOkO1w6Vkewz9dvTSb43jNBjo1apNP1Xr%2BAiH6AXxvjIJMCUk9arCEQWm90gp03Xy0a2Hj8MSdQkrpyuB9o07P6s0TF5RMhcyEE87uG4XsMAsUE3%2B4DhPRrmoEUDSZUCkm7ReptfqGTkffLcFvmhfJltjWF4UDez3tVqhvToU4oTeFnG27yu%2Bb7U1e0X7KyTQ1zuBsl0q4uNfZD8CY8hxhP0J59kDYeazD%2Fh3F3ZO3Ss%2FlwsCD2nQtoUwCnYhJ1VjFhCo388H5QQJW96BIR9fvFKx45%2FmeR6w9rgxHX9u0KWJ1nvHFTVIVl3D%2BSUizrMU%2F54QOArJGEi5Q1dFjgrpD6vIFeTcZQuSK5R3JHf%2B%2BJB8wA3H0M6q4ojcpNwxmNnBR%2BxDygjnbjOK%2Bt9Err6ZrgpQjiYG2f4wgeKYaVT3h8w%2BMCAvQY6pgEZuC%2FlT4fHRYo1bkGchkPt%2BE%2BapRO0705SSlk0D5Y4DWb1pAi%2FehOQKj6xW0aaH2XJ8mza2N38W2sAdEE9clLPjSqZ%2BLd06RyTc%2BJ8MWdMIWaK1O8eFGe5BPahlMoziyW9d8G79Hasnz%2FNWFz8qss3dTTFZ9FKwbbQO7PQSOvKGtzUAb4cKIzliQGSor5yxh0GceHFLvnPbB4IUp%2BTJG8OZkhiJnA4&X-Amz-Signature=3b0862d367e51eb8ad283fce692253a13e4618aefe08957934613f253142c7de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

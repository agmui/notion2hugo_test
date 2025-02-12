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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6UMG2RN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT8uScCHj0Fapv66f1gvefbnJCntUlnZuurn8o%2F34YMQIgS5I8JMNyXtGBlEw6qYtmvqUYcBHrLpXnfgFSRd%2F94LUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIl%2B%2F6F17s%2F9QHbwlSrcA8pPvQRYr9nmt%2F5ddmNu2Zvpp6R4aQ3gp4qPu8tDtOGa3%2BROiZRWnj2bVoC1YlooNyZCR8eWmcdAF66pAOOemRCbrXZKcFXr3xJah%2FgncxQc5MJbgnBTqxRrTUJ3vAUGokBUBhKvufkQC5k1cTYvPSycRF%2FZntfBualxBoGa13VDTq0LVtLG79gLMll8UYDwYNQOkzxzq7s4SlgF1TlaMejkqwewXCygw7LRuajF8HbUa44UO1uL3NEIDRUBNKKxmyrsrDsJKiedN%2BVso5v9UX2U%2BqDMHG74j%2Fzybdz%2FPlecYlOTJZ%2FAS9BKsWU64hfw5nA7w6rG9V%2BjOQlGcIeDbVZk3hxLZTEaNHq%2BNHu5uHNK%2BcGcaTlEJmLIgmV6VnI6OP4WHOdNo947SAp7sugXzswPPmoJkqobOY6cAGuPBSYONxEDNJIGVyib2Fa8az5%2FrJDizC6N9ADmXrYrMDJqcsopJYtyVB1FMNGCrNW1FIVYsQoo0EuWMhU8FUvoNYNAV8%2BVOgOcP%2BmOUYzYOFT8jJCI8Urrc78wmmwQ5xbFHaXcCkRpgwzFwWwoOzZOYrgjvTbe8NMQm0vVQWVYfq%2F0RkVxIYvz7%2BqmVpTywvBXZLguHxlA9PFKniL92kMKMO%2FEtL0GOqUBnl61NevDrTw8oGnbwi1y7%2F8OeNLhdlTSPrHVf26O4GfMuyCXj6rlUyy0CI4w%2FicKMgXhx45BAFgEXbsc8PuuodrB4Bc6B%2FqKa1q%2BAcbDh36Ey5zg7A95eRLlq0LUz4K%2FMrXwhTZewJK7TFnDGn1V%2FIOkFG1oXJX%2BpGp1n6sG0YePAobDLNojdEtQIvvf0AolLFZnMoCd4ucWLnnyZqESIzOlxxIn&X-Amz-Signature=1fc7f3ad7152167120fb14a307ee478f026c478dadb5b6b3ee17a32090a5c14e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6UMG2RN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT8uScCHj0Fapv66f1gvefbnJCntUlnZuurn8o%2F34YMQIgS5I8JMNyXtGBlEw6qYtmvqUYcBHrLpXnfgFSRd%2F94LUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIl%2B%2F6F17s%2F9QHbwlSrcA8pPvQRYr9nmt%2F5ddmNu2Zvpp6R4aQ3gp4qPu8tDtOGa3%2BROiZRWnj2bVoC1YlooNyZCR8eWmcdAF66pAOOemRCbrXZKcFXr3xJah%2FgncxQc5MJbgnBTqxRrTUJ3vAUGokBUBhKvufkQC5k1cTYvPSycRF%2FZntfBualxBoGa13VDTq0LVtLG79gLMll8UYDwYNQOkzxzq7s4SlgF1TlaMejkqwewXCygw7LRuajF8HbUa44UO1uL3NEIDRUBNKKxmyrsrDsJKiedN%2BVso5v9UX2U%2BqDMHG74j%2Fzybdz%2FPlecYlOTJZ%2FAS9BKsWU64hfw5nA7w6rG9V%2BjOQlGcIeDbVZk3hxLZTEaNHq%2BNHu5uHNK%2BcGcaTlEJmLIgmV6VnI6OP4WHOdNo947SAp7sugXzswPPmoJkqobOY6cAGuPBSYONxEDNJIGVyib2Fa8az5%2FrJDizC6N9ADmXrYrMDJqcsopJYtyVB1FMNGCrNW1FIVYsQoo0EuWMhU8FUvoNYNAV8%2BVOgOcP%2BmOUYzYOFT8jJCI8Urrc78wmmwQ5xbFHaXcCkRpgwzFwWwoOzZOYrgjvTbe8NMQm0vVQWVYfq%2F0RkVxIYvz7%2BqmVpTywvBXZLguHxlA9PFKniL92kMKMO%2FEtL0GOqUBnl61NevDrTw8oGnbwi1y7%2F8OeNLhdlTSPrHVf26O4GfMuyCXj6rlUyy0CI4w%2FicKMgXhx45BAFgEXbsc8PuuodrB4Bc6B%2FqKa1q%2BAcbDh36Ey5zg7A95eRLlq0LUz4K%2FMrXwhTZewJK7TFnDGn1V%2FIOkFG1oXJX%2BpGp1n6sG0YePAobDLNojdEtQIvvf0AolLFZnMoCd4ucWLnnyZqESIzOlxxIn&X-Amz-Signature=3fa4e8ab5853dadabcb08d7eec17426cf0a3dececc7f2e19190064e4d0dc0a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6UMG2RN%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T230209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCT8uScCHj0Fapv66f1gvefbnJCntUlnZuurn8o%2F34YMQIgS5I8JMNyXtGBlEw6qYtmvqUYcBHrLpXnfgFSRd%2F94LUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIl%2B%2F6F17s%2F9QHbwlSrcA8pPvQRYr9nmt%2F5ddmNu2Zvpp6R4aQ3gp4qPu8tDtOGa3%2BROiZRWnj2bVoC1YlooNyZCR8eWmcdAF66pAOOemRCbrXZKcFXr3xJah%2FgncxQc5MJbgnBTqxRrTUJ3vAUGokBUBhKvufkQC5k1cTYvPSycRF%2FZntfBualxBoGa13VDTq0LVtLG79gLMll8UYDwYNQOkzxzq7s4SlgF1TlaMejkqwewXCygw7LRuajF8HbUa44UO1uL3NEIDRUBNKKxmyrsrDsJKiedN%2BVso5v9UX2U%2BqDMHG74j%2Fzybdz%2FPlecYlOTJZ%2FAS9BKsWU64hfw5nA7w6rG9V%2BjOQlGcIeDbVZk3hxLZTEaNHq%2BNHu5uHNK%2BcGcaTlEJmLIgmV6VnI6OP4WHOdNo947SAp7sugXzswPPmoJkqobOY6cAGuPBSYONxEDNJIGVyib2Fa8az5%2FrJDizC6N9ADmXrYrMDJqcsopJYtyVB1FMNGCrNW1FIVYsQoo0EuWMhU8FUvoNYNAV8%2BVOgOcP%2BmOUYzYOFT8jJCI8Urrc78wmmwQ5xbFHaXcCkRpgwzFwWwoOzZOYrgjvTbe8NMQm0vVQWVYfq%2F0RkVxIYvz7%2BqmVpTywvBXZLguHxlA9PFKniL92kMKMO%2FEtL0GOqUBnl61NevDrTw8oGnbwi1y7%2F8OeNLhdlTSPrHVf26O4GfMuyCXj6rlUyy0CI4w%2FicKMgXhx45BAFgEXbsc8PuuodrB4Bc6B%2FqKa1q%2BAcbDh36Ey5zg7A95eRLlq0LUz4K%2FMrXwhTZewJK7TFnDGn1V%2FIOkFG1oXJX%2BpGp1n6sG0YePAobDLNojdEtQIvvf0AolLFZnMoCd4ucWLnnyZqESIzOlxxIn&X-Amz-Signature=f4925b9d530e652b6061d9b47a8572d410015be6ebc03841e2d50b3afc85d865&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2UYDS27%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFInBxXIseB9oFCbeTPrDdDLk%2BLW%2BYn2Qm0TmLO6vB7OAiBPwBDmZ3Xjkg0Fq9WKENLeCZ12f38HNesZo0Gk4zRiZSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq93aMRzfHTsawAV3KtwDDkLZPPZ%2ByYtp%2Bjiuv%2FvL2PsnP1ZAIBjiWJVJM1go0DdzGjZ2tIC4s%2FjB3u2%2B%2BTtSVAj7FQj4D0b4vMSAoig7jCDTZ47gg4KklpZkrz9Qi5tuHZXTR7fLnmR4v9dTUjLdTCTjHVbX3gztNjurQHcjOgSKUFQuM2etvlUgNRK7dn%2F1IO37nX3QoFAuBFv3PB%2FjDkHdhYcNHpWjDNSbZ%2FzZ7OFT%2BRXyJ%2FAAcO%2FYd%2ByCubJl4eim%2BKiITN2G4RNipONMQWf0TzOuaDQkQufksadaqlkoGQhNS2je%2B%2BeLjVn7baug%2BkjcA7%2BFmNedS2QHYkyBnpN4iA%2BhrhDrnkLvjlm1wQzSruzHnwczu1tw7Zn%2FmGUVkWCy%2BJd8c4PmitGdfu96%2BfhObphUfXRAnabgOcP2mgNoFOaiMVY7DhvtYlyjCAmesDJ3TxUHISRz6UWXH4%2BcGTt4o7vsPs2Tg%2BQaUirnVQqD8ZWNBtap5Zt0hB626%2F7dassHcxfo7fXTUd0KbcSZhtSbdvFAls76MPjJOMNnsQ1EkP2CEFYrIqZ%2F0m05hOMJHHQWR9hbuATMc0LIvxIokyOwsQj7LH0RZDKWgcVs%2BNU86kNo1K2jm3IbzN9DFYgb%2FOCgNSC7IafL7Ucw4IGrvwY6pgHP9OwBHshnm54i%2B%2BQCyd3jQCTXsoioC%2F22b%2BMJFyg6yrXiO2VlM%2BbtCyURJrY290mhYChoYEdIo6PjdbLFUcdvM%2FafAnDoPnNtzpd%2FXMoyCNdhvH%2BvnzSOlfRzIqPzN9fZVYiynTgjqAQchzK7BsEgSTM1YIAvKqM1lmxSeRbTKoPJFszCdqPRA%2BjgUzrscEMG5AdFDS5cItz2N7wpjvItyzloyV6W&X-Amz-Signature=3e10e6d51d2cdd60d37234541538119ae780a1fccae110ab29d5a079f9d1e423&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2UYDS27%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFInBxXIseB9oFCbeTPrDdDLk%2BLW%2BYn2Qm0TmLO6vB7OAiBPwBDmZ3Xjkg0Fq9WKENLeCZ12f38HNesZo0Gk4zRiZSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq93aMRzfHTsawAV3KtwDDkLZPPZ%2ByYtp%2Bjiuv%2FvL2PsnP1ZAIBjiWJVJM1go0DdzGjZ2tIC4s%2FjB3u2%2B%2BTtSVAj7FQj4D0b4vMSAoig7jCDTZ47gg4KklpZkrz9Qi5tuHZXTR7fLnmR4v9dTUjLdTCTjHVbX3gztNjurQHcjOgSKUFQuM2etvlUgNRK7dn%2F1IO37nX3QoFAuBFv3PB%2FjDkHdhYcNHpWjDNSbZ%2FzZ7OFT%2BRXyJ%2FAAcO%2FYd%2ByCubJl4eim%2BKiITN2G4RNipONMQWf0TzOuaDQkQufksadaqlkoGQhNS2je%2B%2BeLjVn7baug%2BkjcA7%2BFmNedS2QHYkyBnpN4iA%2BhrhDrnkLvjlm1wQzSruzHnwczu1tw7Zn%2FmGUVkWCy%2BJd8c4PmitGdfu96%2BfhObphUfXRAnabgOcP2mgNoFOaiMVY7DhvtYlyjCAmesDJ3TxUHISRz6UWXH4%2BcGTt4o7vsPs2Tg%2BQaUirnVQqD8ZWNBtap5Zt0hB626%2F7dassHcxfo7fXTUd0KbcSZhtSbdvFAls76MPjJOMNnsQ1EkP2CEFYrIqZ%2F0m05hOMJHHQWR9hbuATMc0LIvxIokyOwsQj7LH0RZDKWgcVs%2BNU86kNo1K2jm3IbzN9DFYgb%2FOCgNSC7IafL7Ucw4IGrvwY6pgHP9OwBHshnm54i%2B%2BQCyd3jQCTXsoioC%2F22b%2BMJFyg6yrXiO2VlM%2BbtCyURJrY290mhYChoYEdIo6PjdbLFUcdvM%2FafAnDoPnNtzpd%2FXMoyCNdhvH%2BvnzSOlfRzIqPzN9fZVYiynTgjqAQchzK7BsEgSTM1YIAvKqM1lmxSeRbTKoPJFszCdqPRA%2BjgUzrscEMG5AdFDS5cItz2N7wpjvItyzloyV6W&X-Amz-Signature=7af533fade49c8779ccb9543fb9a667ba180b1af80ced5140a19425fdb41002f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2UYDS27%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFInBxXIseB9oFCbeTPrDdDLk%2BLW%2BYn2Qm0TmLO6vB7OAiBPwBDmZ3Xjkg0Fq9WKENLeCZ12f38HNesZo0Gk4zRiZSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq93aMRzfHTsawAV3KtwDDkLZPPZ%2ByYtp%2Bjiuv%2FvL2PsnP1ZAIBjiWJVJM1go0DdzGjZ2tIC4s%2FjB3u2%2B%2BTtSVAj7FQj4D0b4vMSAoig7jCDTZ47gg4KklpZkrz9Qi5tuHZXTR7fLnmR4v9dTUjLdTCTjHVbX3gztNjurQHcjOgSKUFQuM2etvlUgNRK7dn%2F1IO37nX3QoFAuBFv3PB%2FjDkHdhYcNHpWjDNSbZ%2FzZ7OFT%2BRXyJ%2FAAcO%2FYd%2ByCubJl4eim%2BKiITN2G4RNipONMQWf0TzOuaDQkQufksadaqlkoGQhNS2je%2B%2BeLjVn7baug%2BkjcA7%2BFmNedS2QHYkyBnpN4iA%2BhrhDrnkLvjlm1wQzSruzHnwczu1tw7Zn%2FmGUVkWCy%2BJd8c4PmitGdfu96%2BfhObphUfXRAnabgOcP2mgNoFOaiMVY7DhvtYlyjCAmesDJ3TxUHISRz6UWXH4%2BcGTt4o7vsPs2Tg%2BQaUirnVQqD8ZWNBtap5Zt0hB626%2F7dassHcxfo7fXTUd0KbcSZhtSbdvFAls76MPjJOMNnsQ1EkP2CEFYrIqZ%2F0m05hOMJHHQWR9hbuATMc0LIvxIokyOwsQj7LH0RZDKWgcVs%2BNU86kNo1K2jm3IbzN9DFYgb%2FOCgNSC7IafL7Ucw4IGrvwY6pgHP9OwBHshnm54i%2B%2BQCyd3jQCTXsoioC%2F22b%2BMJFyg6yrXiO2VlM%2BbtCyURJrY290mhYChoYEdIo6PjdbLFUcdvM%2FafAnDoPnNtzpd%2FXMoyCNdhvH%2BvnzSOlfRzIqPzN9fZVYiynTgjqAQchzK7BsEgSTM1YIAvKqM1lmxSeRbTKoPJFszCdqPRA%2BjgUzrscEMG5AdFDS5cItz2N7wpjvItyzloyV6W&X-Amz-Signature=4e3ca63f0665e7c46444fbc2b41c951078b143d946e75a7c09cd70f0e3ce22a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

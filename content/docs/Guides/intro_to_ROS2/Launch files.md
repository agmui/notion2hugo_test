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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTKPPJR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF06v%2B%2FP3IssRnqCVV1mZ%2F0hfB%2BbCbogvwq6k9Aouzr3AiA889kyXYBEfaXihmLv0%2Fig9WAv2uLVpnfud2krtjqRQyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMohJHilasf6Cg%2FP8tKtwD6FYRiINZbwNf6%2FzSW1S0EXjuKsYyN2XbWRRPimSU%2BdRBfS7PvS1XSoJJEYZR7DckABWV3hkd7azrrgdfKDe%2Fs9N6Q%2FSOxbrS%2FD6MhAB1eySpWjnTu5t8Awe0QVEBQcTfgK6jrVEvZBsDlN7oKnYw6%2BqzissoauH25xBMWMKQKNpjwNx2UZXFrAoYXAd81J0QTlx9RX5hrXu8bRyPkxEhyEGMvgwZSfbKDJDW4Sb1iULEjJDYV6RJ%2BYVIRXIj820zm%2BvdjsGLh5O8yjlXHplz5Zwm5OU6FG05Do1r6Uxg3YpaIpZ8VXKpmphPa9QQww8NsO4okb8fitCE4ENj1OCx7llTfYN%2BGZDK0AcZKeN3s5e7xMTPET7Z5iTDpp9aYmneDT90DGVQdgWf2bMTGMr2E18%2BjuIWKl9LN5%2FEB7fJJ7%2Fs9MpgPlEofbILtgIqKJqGbUCOnyPFRT6YBG3mF%2BJYbnLEG5%2B5oC7oKQl3FVxtrAfdqnqzB5%2BoP%2FqP56Rcz0tN93tn6W1QybJkxtL64NeqXIH11ZwBmIgRn6Wl4FgJSn1fno1ZT1lHea5cu2snXaE08n%2Bjd9iOyLoI2ma5XnXuog4GLUpH9XqEPMT8D21UPg2nN0qLO7AVNKc6Opgw%2B%2FC%2FvgY6pgH2TQvZqTe6lbWN5VubNDuxxhqczgOaXCB%2FMBAA0%2FeBr2wySekquZt3OsAoNy2xmJz6k5OTo4Y1jRIOWGtbdZoE5SE6UsDkY1VsekEi6TW6o5haMU06SQ%2FC%2FynM%2BV65C%2BJ8QU0PkmGbXBvKScxyelUFP%2Bkta1BJqsAtfzT4Jju8WdKHVWfm8ON12SpYGlYg1uGRUFmU8h8JHEfDhlWvGABeG0WL9cno&X-Amz-Signature=8944e4675ba9c96a39d3dd774b1ae992e83f252ba1c34e0425cb2882d88eb337&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTKPPJR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF06v%2B%2FP3IssRnqCVV1mZ%2F0hfB%2BbCbogvwq6k9Aouzr3AiA889kyXYBEfaXihmLv0%2Fig9WAv2uLVpnfud2krtjqRQyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMohJHilasf6Cg%2FP8tKtwD6FYRiINZbwNf6%2FzSW1S0EXjuKsYyN2XbWRRPimSU%2BdRBfS7PvS1XSoJJEYZR7DckABWV3hkd7azrrgdfKDe%2Fs9N6Q%2FSOxbrS%2FD6MhAB1eySpWjnTu5t8Awe0QVEBQcTfgK6jrVEvZBsDlN7oKnYw6%2BqzissoauH25xBMWMKQKNpjwNx2UZXFrAoYXAd81J0QTlx9RX5hrXu8bRyPkxEhyEGMvgwZSfbKDJDW4Sb1iULEjJDYV6RJ%2BYVIRXIj820zm%2BvdjsGLh5O8yjlXHplz5Zwm5OU6FG05Do1r6Uxg3YpaIpZ8VXKpmphPa9QQww8NsO4okb8fitCE4ENj1OCx7llTfYN%2BGZDK0AcZKeN3s5e7xMTPET7Z5iTDpp9aYmneDT90DGVQdgWf2bMTGMr2E18%2BjuIWKl9LN5%2FEB7fJJ7%2Fs9MpgPlEofbILtgIqKJqGbUCOnyPFRT6YBG3mF%2BJYbnLEG5%2B5oC7oKQl3FVxtrAfdqnqzB5%2BoP%2FqP56Rcz0tN93tn6W1QybJkxtL64NeqXIH11ZwBmIgRn6Wl4FgJSn1fno1ZT1lHea5cu2snXaE08n%2Bjd9iOyLoI2ma5XnXuog4GLUpH9XqEPMT8D21UPg2nN0qLO7AVNKc6Opgw%2B%2FC%2FvgY6pgH2TQvZqTe6lbWN5VubNDuxxhqczgOaXCB%2FMBAA0%2FeBr2wySekquZt3OsAoNy2xmJz6k5OTo4Y1jRIOWGtbdZoE5SE6UsDkY1VsekEi6TW6o5haMU06SQ%2FC%2FynM%2BV65C%2BJ8QU0PkmGbXBvKScxyelUFP%2Bkta1BJqsAtfzT4Jju8WdKHVWfm8ON12SpYGlYg1uGRUFmU8h8JHEfDhlWvGABeG0WL9cno&X-Amz-Signature=dabb94d04e2ce1ce9c3cb3516950b5a372c3d4a7726d4cfdb787c10a7483e7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTKPPJR%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF06v%2B%2FP3IssRnqCVV1mZ%2F0hfB%2BbCbogvwq6k9Aouzr3AiA889kyXYBEfaXihmLv0%2Fig9WAv2uLVpnfud2krtjqRQyqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMohJHilasf6Cg%2FP8tKtwD6FYRiINZbwNf6%2FzSW1S0EXjuKsYyN2XbWRRPimSU%2BdRBfS7PvS1XSoJJEYZR7DckABWV3hkd7azrrgdfKDe%2Fs9N6Q%2FSOxbrS%2FD6MhAB1eySpWjnTu5t8Awe0QVEBQcTfgK6jrVEvZBsDlN7oKnYw6%2BqzissoauH25xBMWMKQKNpjwNx2UZXFrAoYXAd81J0QTlx9RX5hrXu8bRyPkxEhyEGMvgwZSfbKDJDW4Sb1iULEjJDYV6RJ%2BYVIRXIj820zm%2BvdjsGLh5O8yjlXHplz5Zwm5OU6FG05Do1r6Uxg3YpaIpZ8VXKpmphPa9QQww8NsO4okb8fitCE4ENj1OCx7llTfYN%2BGZDK0AcZKeN3s5e7xMTPET7Z5iTDpp9aYmneDT90DGVQdgWf2bMTGMr2E18%2BjuIWKl9LN5%2FEB7fJJ7%2Fs9MpgPlEofbILtgIqKJqGbUCOnyPFRT6YBG3mF%2BJYbnLEG5%2B5oC7oKQl3FVxtrAfdqnqzB5%2BoP%2FqP56Rcz0tN93tn6W1QybJkxtL64NeqXIH11ZwBmIgRn6Wl4FgJSn1fno1ZT1lHea5cu2snXaE08n%2Bjd9iOyLoI2ma5XnXuog4GLUpH9XqEPMT8D21UPg2nN0qLO7AVNKc6Opgw%2B%2FC%2FvgY6pgH2TQvZqTe6lbWN5VubNDuxxhqczgOaXCB%2FMBAA0%2FeBr2wySekquZt3OsAoNy2xmJz6k5OTo4Y1jRIOWGtbdZoE5SE6UsDkY1VsekEi6TW6o5haMU06SQ%2FC%2FynM%2BV65C%2BJ8QU0PkmGbXBvKScxyelUFP%2Bkta1BJqsAtfzT4Jju8WdKHVWfm8ON12SpYGlYg1uGRUFmU8h8JHEfDhlWvGABeG0WL9cno&X-Amz-Signature=b23c9553a47e52d4677a083353af2d44b1cddb1b738b5f8917f9144f17aef644&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

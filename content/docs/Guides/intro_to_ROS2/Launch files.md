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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466334ONMJR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOZvyDla%2Bh8xM8mc6%2F1kUeGm0or2noIFS1MwQWVZeBuAiEAzplQEMZYlKNBYrES9hYtLhHxiZn3%2BnGspDGdGM5rUL8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLTU9PhmXuqemascKircA5aMcmRrHw5gJ0AqvfvTzgmieMTyquNR0gTuf7BjpEdFGTnGlTndsL%2BAJZ%2FNY0VCjLLB2o9ZGZEIuB2Bq5YV4gtKA7BSR1qKgX9lmWzYa9SEposHSFw0tn4i6BaVHVOzo%2BssupUsWtyJMfW3OcLT2JjtiA374TYGGEMog4MFL3XrVpmu%2BzYwEqR8deQICU8ACeh05yLOLDeZrQPgFEOylF0HrXRCs37EPmy8k9Og%2FIpywcptNkqfFedeDJVtm0BX2Jtx19eqhnIgygyydggsQFc84G3Lj%2BiDClOIhzjnL365D%2FnakKY42s0bxS6D9FqtsiUOG9hPCBDvnOkRc9ZtdY%2FxX54NNqZ4rVVHw2PD7sLPeqX%2B3Ob3uSGFomGWfgMFCghQW9b4Fr5h5wkSZc14BUHe8lIUfVT0wlmVDAefdRF7LalJaSytJOwL3wSdQnPC2SDH%2BzSi3liWqjH8SnLe06ofzzwm1gWQSLhTP57rgCrrp4J0EuNlKRilkCbotHWjx506s1l8YjIjOzaAr4yGBC%2BgYBDHxgLtkwt4RXSkgEvzq6fBxvGXJ47JShYkpuvIs9wHRJ6yMXcC7GAtMtIUGyYBZyps2BZnFdhU5urS49rQlQXC0fHQ4eqE2r1nMPXN8L0GOqUBeNPJJ8DLIN32c5y%2B9rEa2rZgfljYdqTiqxVUnkXZmohQUxcW%2FrUpxr5EFRezmEK0RET6oXzlNAgAgET1Vowh5TAMDoaWYHDord5eJIwyj1b7Xo%2FCA69dEyh%2FwYFKgdVs8MetOLfYQV6TBxqyebS9QQuUF5QqaTvxnrfQwRY9UQolvhGtXnN85Vvn8U77LQR6KXDdbDMw1WQjcmXyQG5AxXxvMWZZ&X-Amz-Signature=3d3989c48786e8d492e3b5e1090e00c676dd5b3873edeb863053f23daed05c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466334ONMJR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOZvyDla%2Bh8xM8mc6%2F1kUeGm0or2noIFS1MwQWVZeBuAiEAzplQEMZYlKNBYrES9hYtLhHxiZn3%2BnGspDGdGM5rUL8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLTU9PhmXuqemascKircA5aMcmRrHw5gJ0AqvfvTzgmieMTyquNR0gTuf7BjpEdFGTnGlTndsL%2BAJZ%2FNY0VCjLLB2o9ZGZEIuB2Bq5YV4gtKA7BSR1qKgX9lmWzYa9SEposHSFw0tn4i6BaVHVOzo%2BssupUsWtyJMfW3OcLT2JjtiA374TYGGEMog4MFL3XrVpmu%2BzYwEqR8deQICU8ACeh05yLOLDeZrQPgFEOylF0HrXRCs37EPmy8k9Og%2FIpywcptNkqfFedeDJVtm0BX2Jtx19eqhnIgygyydggsQFc84G3Lj%2BiDClOIhzjnL365D%2FnakKY42s0bxS6D9FqtsiUOG9hPCBDvnOkRc9ZtdY%2FxX54NNqZ4rVVHw2PD7sLPeqX%2B3Ob3uSGFomGWfgMFCghQW9b4Fr5h5wkSZc14BUHe8lIUfVT0wlmVDAefdRF7LalJaSytJOwL3wSdQnPC2SDH%2BzSi3liWqjH8SnLe06ofzzwm1gWQSLhTP57rgCrrp4J0EuNlKRilkCbotHWjx506s1l8YjIjOzaAr4yGBC%2BgYBDHxgLtkwt4RXSkgEvzq6fBxvGXJ47JShYkpuvIs9wHRJ6yMXcC7GAtMtIUGyYBZyps2BZnFdhU5urS49rQlQXC0fHQ4eqE2r1nMPXN8L0GOqUBeNPJJ8DLIN32c5y%2B9rEa2rZgfljYdqTiqxVUnkXZmohQUxcW%2FrUpxr5EFRezmEK0RET6oXzlNAgAgET1Vowh5TAMDoaWYHDord5eJIwyj1b7Xo%2FCA69dEyh%2FwYFKgdVs8MetOLfYQV6TBxqyebS9QQuUF5QqaTvxnrfQwRY9UQolvhGtXnN85Vvn8U77LQR6KXDdbDMw1WQjcmXyQG5AxXxvMWZZ&X-Amz-Signature=c332b161041140bd2f5897fc76dbe7e763f3a1b0256ffd316960cb89efdbc5d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466334ONMJR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOZvyDla%2Bh8xM8mc6%2F1kUeGm0or2noIFS1MwQWVZeBuAiEAzplQEMZYlKNBYrES9hYtLhHxiZn3%2BnGspDGdGM5rUL8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDLTU9PhmXuqemascKircA5aMcmRrHw5gJ0AqvfvTzgmieMTyquNR0gTuf7BjpEdFGTnGlTndsL%2BAJZ%2FNY0VCjLLB2o9ZGZEIuB2Bq5YV4gtKA7BSR1qKgX9lmWzYa9SEposHSFw0tn4i6BaVHVOzo%2BssupUsWtyJMfW3OcLT2JjtiA374TYGGEMog4MFL3XrVpmu%2BzYwEqR8deQICU8ACeh05yLOLDeZrQPgFEOylF0HrXRCs37EPmy8k9Og%2FIpywcptNkqfFedeDJVtm0BX2Jtx19eqhnIgygyydggsQFc84G3Lj%2BiDClOIhzjnL365D%2FnakKY42s0bxS6D9FqtsiUOG9hPCBDvnOkRc9ZtdY%2FxX54NNqZ4rVVHw2PD7sLPeqX%2B3Ob3uSGFomGWfgMFCghQW9b4Fr5h5wkSZc14BUHe8lIUfVT0wlmVDAefdRF7LalJaSytJOwL3wSdQnPC2SDH%2BzSi3liWqjH8SnLe06ofzzwm1gWQSLhTP57rgCrrp4J0EuNlKRilkCbotHWjx506s1l8YjIjOzaAr4yGBC%2BgYBDHxgLtkwt4RXSkgEvzq6fBxvGXJ47JShYkpuvIs9wHRJ6yMXcC7GAtMtIUGyYBZyps2BZnFdhU5urS49rQlQXC0fHQ4eqE2r1nMPXN8L0GOqUBeNPJJ8DLIN32c5y%2B9rEa2rZgfljYdqTiqxVUnkXZmohQUxcW%2FrUpxr5EFRezmEK0RET6oXzlNAgAgET1Vowh5TAMDoaWYHDord5eJIwyj1b7Xo%2FCA69dEyh%2FwYFKgdVs8MetOLfYQV6TBxqyebS9QQuUF5QqaTvxnrfQwRY9UQolvhGtXnN85Vvn8U77LQR6KXDdbDMw1WQjcmXyQG5AxXxvMWZZ&X-Amz-Signature=beae7024f7820f7a960286cabe3375ececd5616841f56b3e24de0047e197ceca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

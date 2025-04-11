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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DWRK3V%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDunh6oXKOzVumTEzyhRpxTGLPibP8Fu%2BWCBXtRLUcg7wIhALuoYACT1n0yK1%2BbD6v%2B%2Fe3W93T%2BGoH4c%2BUCcaxERzESKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAdHZySPcAgLKmxqYq3AMN22jr4SUiknbCYPQtJUPbeIasHSQyqj9qrndDEIRSj0Bd7Kqa2kbp85MvsHtGtZf1HPba%2FPj%2FTulbboH2QSyR7HB%2F9%2Fnkm8v3DNiMifJ01c17%2FyyBKNue0rfcFpMlv8ypL8Sa7mJyz7H7cZeTlwlwlGG6ftxPJUzKXW2%2FL5run68ARaAzRuUy2Q5XhY5etyHP6S6hByiVjmJivDgOWcm%2FjvjmbRx2GMrPdALboYTaTs8iyMAc2wNpGZWvZiSsQhGm8uhfhI41KqCL925zbeD6ghdHNCR%2BSeBb4KoOzbP8ug7dj52Z07rsqm7FN3172I9K9b8WOt3d2NomBKkgwqIrRAJTjbcu%2B8GVLxtfVhvG469jP04lXAwclDIiEEJs0H5LbvGOJ%2B0xhhcKAhY1ysbpXp39DrkrNxTBb3RpSMlvfCUqfDLnjOi3rYlDFsua1jkArpIBC2Zcfxf%2FPk2ocfRaf9fFGLzElnuMRACIRHgfuhEQ3QpBWpDIlHfffXJUiUbMcQtfPLYOs5ZA9oBqsMn%2BnDeV9bn6SEArsBLjxkYdu%2Bu7bqadtOOMpslhqoS2IXRl1nBT3jWlKeGYKgQFVI39Pr6tcGaQQVGyAf6lJjuxK8Jq6itWGo9l2eb1czDJyuO%2FBjqkAeBUUzI7S8%2BvID4ENlw73c9QvpEz9l7Hgyv7xbYQT7z%2F8K%2FhkQP8H18Sh%2FrHxEHG%2BfZjGZ30OHc74lEE8mC%2BGbYVNC%2F0KFWvFryPHGk6RARb61AEcf1WhgTeRf8f1MLYrdLLiP76qdXbQIGVp0W10z1jbjiWK9JRNuawRqn2J94ons2yTTzTS%2FDXapPZljSKE6xvvUmYEWyrXSjc6Wkk%2BoEZtuVY&X-Amz-Signature=f807b5a4458424d551def79dc152f0e69e080828f767130cdfa5aa09df86370d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DWRK3V%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDunh6oXKOzVumTEzyhRpxTGLPibP8Fu%2BWCBXtRLUcg7wIhALuoYACT1n0yK1%2BbD6v%2B%2Fe3W93T%2BGoH4c%2BUCcaxERzESKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAdHZySPcAgLKmxqYq3AMN22jr4SUiknbCYPQtJUPbeIasHSQyqj9qrndDEIRSj0Bd7Kqa2kbp85MvsHtGtZf1HPba%2FPj%2FTulbboH2QSyR7HB%2F9%2Fnkm8v3DNiMifJ01c17%2FyyBKNue0rfcFpMlv8ypL8Sa7mJyz7H7cZeTlwlwlGG6ftxPJUzKXW2%2FL5run68ARaAzRuUy2Q5XhY5etyHP6S6hByiVjmJivDgOWcm%2FjvjmbRx2GMrPdALboYTaTs8iyMAc2wNpGZWvZiSsQhGm8uhfhI41KqCL925zbeD6ghdHNCR%2BSeBb4KoOzbP8ug7dj52Z07rsqm7FN3172I9K9b8WOt3d2NomBKkgwqIrRAJTjbcu%2B8GVLxtfVhvG469jP04lXAwclDIiEEJs0H5LbvGOJ%2B0xhhcKAhY1ysbpXp39DrkrNxTBb3RpSMlvfCUqfDLnjOi3rYlDFsua1jkArpIBC2Zcfxf%2FPk2ocfRaf9fFGLzElnuMRACIRHgfuhEQ3QpBWpDIlHfffXJUiUbMcQtfPLYOs5ZA9oBqsMn%2BnDeV9bn6SEArsBLjxkYdu%2Bu7bqadtOOMpslhqoS2IXRl1nBT3jWlKeGYKgQFVI39Pr6tcGaQQVGyAf6lJjuxK8Jq6itWGo9l2eb1czDJyuO%2FBjqkAeBUUzI7S8%2BvID4ENlw73c9QvpEz9l7Hgyv7xbYQT7z%2F8K%2FhkQP8H18Sh%2FrHxEHG%2BfZjGZ30OHc74lEE8mC%2BGbYVNC%2F0KFWvFryPHGk6RARb61AEcf1WhgTeRf8f1MLYrdLLiP76qdXbQIGVp0W10z1jbjiWK9JRNuawRqn2J94ons2yTTzTS%2FDXapPZljSKE6xvvUmYEWyrXSjc6Wkk%2BoEZtuVY&X-Amz-Signature=0c597cfe24a505ad10d9db82500139168abe69531afa036a0e65e9d339271ecd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DWRK3V%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDunh6oXKOzVumTEzyhRpxTGLPibP8Fu%2BWCBXtRLUcg7wIhALuoYACT1n0yK1%2BbD6v%2B%2Fe3W93T%2BGoH4c%2BUCcaxERzESKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzAdHZySPcAgLKmxqYq3AMN22jr4SUiknbCYPQtJUPbeIasHSQyqj9qrndDEIRSj0Bd7Kqa2kbp85MvsHtGtZf1HPba%2FPj%2FTulbboH2QSyR7HB%2F9%2Fnkm8v3DNiMifJ01c17%2FyyBKNue0rfcFpMlv8ypL8Sa7mJyz7H7cZeTlwlwlGG6ftxPJUzKXW2%2FL5run68ARaAzRuUy2Q5XhY5etyHP6S6hByiVjmJivDgOWcm%2FjvjmbRx2GMrPdALboYTaTs8iyMAc2wNpGZWvZiSsQhGm8uhfhI41KqCL925zbeD6ghdHNCR%2BSeBb4KoOzbP8ug7dj52Z07rsqm7FN3172I9K9b8WOt3d2NomBKkgwqIrRAJTjbcu%2B8GVLxtfVhvG469jP04lXAwclDIiEEJs0H5LbvGOJ%2B0xhhcKAhY1ysbpXp39DrkrNxTBb3RpSMlvfCUqfDLnjOi3rYlDFsua1jkArpIBC2Zcfxf%2FPk2ocfRaf9fFGLzElnuMRACIRHgfuhEQ3QpBWpDIlHfffXJUiUbMcQtfPLYOs5ZA9oBqsMn%2BnDeV9bn6SEArsBLjxkYdu%2Bu7bqadtOOMpslhqoS2IXRl1nBT3jWlKeGYKgQFVI39Pr6tcGaQQVGyAf6lJjuxK8Jq6itWGo9l2eb1czDJyuO%2FBjqkAeBUUzI7S8%2BvID4ENlw73c9QvpEz9l7Hgyv7xbYQT7z%2F8K%2FhkQP8H18Sh%2FrHxEHG%2BfZjGZ30OHc74lEE8mC%2BGbYVNC%2F0KFWvFryPHGk6RARb61AEcf1WhgTeRf8f1MLYrdLLiP76qdXbQIGVp0W10z1jbjiWK9JRNuawRqn2J94ons2yTTzTS%2FDXapPZljSKE6xvvUmYEWyrXSjc6Wkk%2BoEZtuVY&X-Amz-Signature=ca2634b07dd14a10c9d2d9f9c4f36851014d8f9699ef6f55273eda829828a351&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

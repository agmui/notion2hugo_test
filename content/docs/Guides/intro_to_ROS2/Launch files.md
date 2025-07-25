---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IZACPGS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCLbS9h90jSrMZz9NzAWFUDrD0s%2BJcRiW4TS5AyE%2B8pswIgXp7CF3DlA02Z1OVhVnzItDinMxVvqy8WuMaCEuinCZAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDA9VhzuYLqtJaZNodircA56Ujw2l7ThKo0vkKKWKoL%2B%2Fh9OdNpbRC7LO9s58rXfowX3ZC1%2FekUw8fLh%2BGqZMdPVrL0uws%2Bf27a3OLt3AgIDw7hz9p6b6rFO%2FcAqhiJG40jHMgz%2BZiuJEbYYu1u3Pj9MafkbVZ5%2FBcqoIOQeb1RVepUuCaRJ65rqdHce9Thyg7%2FnbacklOOCHY6inoOpg0XTk1IH3CuDSC%2FXb8KR6RaELRTLLFoZb77APLe4MO2TDB%2B1SVMQy%2FXSe3GF96Hj2OYtOiPKWNlHiZtkaGfJSD%2BEBsxDUuFW6Ko35wgDLMdhWda%2FDiJuWoKjbzCcxoFkQKFmKJRQm20%2FiVLl4RPTTrsF8ToE8CVQk0nFlNIddFW701xUMdsPsICBzfwOOP4B2lo1zJTPshSjguoGm6uvDA2UO1sR0jzVqlNIq8958%2FgoIMJXsXP8%2FeXX24%2F4whPSmj%2BaPFQhgoIYdBq%2F1cg9VUwKLHLmRNq1SVI4y71JWWyqLanvrus1p2L%2Fb7xJlGKbO7ASdrDpEgjshXhUFHOixaX77AKnovc09c9TX0Z0REiCD6truJ%2FGDmSMgWdXk8GaDD74wxHZBnKxzjWh3UjKk%2FueRuRgTf0sgKwtv8t0%2BeYWnZdtSaLbUWwDei58GMK2GjsQGOqUBJA01QvqELWGvstM3yZyjKWK0XjvlWR%2BClCAhz7j4RTE1%2BXzRq%2FCZJZW%2F6ukEJk1oOZhBhf6RhLYmqczrsktF1chh%2BStNOFWjZIca9isI%2BIwT%2BBVS60m5FQe9juk0dVDv%2FizqLgOq72KMfvsf3DzgMDBTBKfXKjgGegcp2Oj4xGD3hlUUWht0QFiVXcJHxY1W89%2BTXtY0%2BcDUvgHlnlfk1Y54oLJg&X-Amz-Signature=d5bc09f351c7dda8706b62ccb35509d6c3b4234bca12ac6210374b0d2300a670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IZACPGS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCLbS9h90jSrMZz9NzAWFUDrD0s%2BJcRiW4TS5AyE%2B8pswIgXp7CF3DlA02Z1OVhVnzItDinMxVvqy8WuMaCEuinCZAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDA9VhzuYLqtJaZNodircA56Ujw2l7ThKo0vkKKWKoL%2B%2Fh9OdNpbRC7LO9s58rXfowX3ZC1%2FekUw8fLh%2BGqZMdPVrL0uws%2Bf27a3OLt3AgIDw7hz9p6b6rFO%2FcAqhiJG40jHMgz%2BZiuJEbYYu1u3Pj9MafkbVZ5%2FBcqoIOQeb1RVepUuCaRJ65rqdHce9Thyg7%2FnbacklOOCHY6inoOpg0XTk1IH3CuDSC%2FXb8KR6RaELRTLLFoZb77APLe4MO2TDB%2B1SVMQy%2FXSe3GF96Hj2OYtOiPKWNlHiZtkaGfJSD%2BEBsxDUuFW6Ko35wgDLMdhWda%2FDiJuWoKjbzCcxoFkQKFmKJRQm20%2FiVLl4RPTTrsF8ToE8CVQk0nFlNIddFW701xUMdsPsICBzfwOOP4B2lo1zJTPshSjguoGm6uvDA2UO1sR0jzVqlNIq8958%2FgoIMJXsXP8%2FeXX24%2F4whPSmj%2BaPFQhgoIYdBq%2F1cg9VUwKLHLmRNq1SVI4y71JWWyqLanvrus1p2L%2Fb7xJlGKbO7ASdrDpEgjshXhUFHOixaX77AKnovc09c9TX0Z0REiCD6truJ%2FGDmSMgWdXk8GaDD74wxHZBnKxzjWh3UjKk%2FueRuRgTf0sgKwtv8t0%2BeYWnZdtSaLbUWwDei58GMK2GjsQGOqUBJA01QvqELWGvstM3yZyjKWK0XjvlWR%2BClCAhz7j4RTE1%2BXzRq%2FCZJZW%2F6ukEJk1oOZhBhf6RhLYmqczrsktF1chh%2BStNOFWjZIca9isI%2BIwT%2BBVS60m5FQe9juk0dVDv%2FizqLgOq72KMfvsf3DzgMDBTBKfXKjgGegcp2Oj4xGD3hlUUWht0QFiVXcJHxY1W89%2BTXtY0%2BcDUvgHlnlfk1Y54oLJg&X-Amz-Signature=b3dd9923cc2d346e6b2f265aa6cbd61f61ec2d44cb6b9a5c09ca06599d7320a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IZACPGS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCLbS9h90jSrMZz9NzAWFUDrD0s%2BJcRiW4TS5AyE%2B8pswIgXp7CF3DlA02Z1OVhVnzItDinMxVvqy8WuMaCEuinCZAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDA9VhzuYLqtJaZNodircA56Ujw2l7ThKo0vkKKWKoL%2B%2Fh9OdNpbRC7LO9s58rXfowX3ZC1%2FekUw8fLh%2BGqZMdPVrL0uws%2Bf27a3OLt3AgIDw7hz9p6b6rFO%2FcAqhiJG40jHMgz%2BZiuJEbYYu1u3Pj9MafkbVZ5%2FBcqoIOQeb1RVepUuCaRJ65rqdHce9Thyg7%2FnbacklOOCHY6inoOpg0XTk1IH3CuDSC%2FXb8KR6RaELRTLLFoZb77APLe4MO2TDB%2B1SVMQy%2FXSe3GF96Hj2OYtOiPKWNlHiZtkaGfJSD%2BEBsxDUuFW6Ko35wgDLMdhWda%2FDiJuWoKjbzCcxoFkQKFmKJRQm20%2FiVLl4RPTTrsF8ToE8CVQk0nFlNIddFW701xUMdsPsICBzfwOOP4B2lo1zJTPshSjguoGm6uvDA2UO1sR0jzVqlNIq8958%2FgoIMJXsXP8%2FeXX24%2F4whPSmj%2BaPFQhgoIYdBq%2F1cg9VUwKLHLmRNq1SVI4y71JWWyqLanvrus1p2L%2Fb7xJlGKbO7ASdrDpEgjshXhUFHOixaX77AKnovc09c9TX0Z0REiCD6truJ%2FGDmSMgWdXk8GaDD74wxHZBnKxzjWh3UjKk%2FueRuRgTf0sgKwtv8t0%2BeYWnZdtSaLbUWwDei58GMK2GjsQGOqUBJA01QvqELWGvstM3yZyjKWK0XjvlWR%2BClCAhz7j4RTE1%2BXzRq%2FCZJZW%2F6ukEJk1oOZhBhf6RhLYmqczrsktF1chh%2BStNOFWjZIca9isI%2BIwT%2BBVS60m5FQe9juk0dVDv%2FizqLgOq72KMfvsf3DzgMDBTBKfXKjgGegcp2Oj4xGD3hlUUWht0QFiVXcJHxY1W89%2BTXtY0%2BcDUvgHlnlfk1Y54oLJg&X-Amz-Signature=821e001d04c909d5916dbf36b9768ad8686d641728f4c3fd5c563214e40f9300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

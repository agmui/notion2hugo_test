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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNKT2AAM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDczJv33lYQZxqyiAFygYoYuvk9JjBHwiXx8QXHWRUyNgIhAKlXyh%2FFguoiQNKqY3VwI4O68TTmGcNKO3jxjS%2BhW8eKKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5YCWCoKwYLA%2B9WXwq3AO7S8yG9JCBHS8VVPOm9u%2FTKQ6vAg8NQ0ZMzZzkZd4X2ft3oLvNW79%2FN%2Bgq39JqGUWqBzKz5hzy6S1n2mAN9%2BcG%2BAVjsiFK%2BUbYzR8zeHL0nAWJnBQK2FDN6R4UFeZC56slyXKeLH%2BkxzYLtu03gPczH6ZyJjhwsBMMQAluJg1FMMICI9wEES3yFvpRj8hEQu%2BBnf9RqNwuiZMETnHjLfzLU4Bc8RhfIQp6L0WShZitIi0YjHPjlo7VCEVVw8ElXerVIn3%2F8OEk85dNBFnogjPCyUGWbNVMKI0eS1rnxfAdr0jUqoFnr9dgQyTvAROIyjLFPIRdg7pCap6te5IHqifCC2XOwwx32aEoviomHcyLO7nirvAfgHv3C%2B9nZluKtbAcY7AlIhtlZY8oDwoDxRDS58R3iUxiGckQaISlljg%2FAfw%2FK4O%2BC7dA7iNzujGvl68oS8f4r3vb3DYW3hbOqFtldr3qjpMODfkOP8YR4gosSPChtVmmDbjFREUx0Wf25owU6HHvt4oT2ESG2MbCjOXGYn%2BybkEfTa7N%2BwQB9dl3%2B4JkrLWVAxqBZC9OyiO9iFDnyzqPrMn3t6W%2BLxASo4ze3D%2FJBJE2Li8Z6oBJrj7kxdCtwJgFfK9Loh3LnDDDvqC9BjqkAZKOULKKjRX2k0sOZ6XNc16qVmyMmO8guodBrKgG%2F0tcRVlf%2BSAktWk5uwCmFvTU8BS%2FX1VCIyUX%2FIFJERXSod7cDlV6yDIRrRvLA3qxjDQJOdt8QOzueW38QthBMC0AUmHEem%2F0PmnBIyunPFj6UNgaUb%2BYo0nq0n%2BQ%2B%2FgdEi32XhHy%2Fv5OG3ZPk19bFVg08wgNgstAziFBhBd1kbAZcMflrHSN&X-Amz-Signature=529aff781a5a272222cf5e23698cc386385dbf7ef95525048f426c2faacc8236&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNKT2AAM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDczJv33lYQZxqyiAFygYoYuvk9JjBHwiXx8QXHWRUyNgIhAKlXyh%2FFguoiQNKqY3VwI4O68TTmGcNKO3jxjS%2BhW8eKKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5YCWCoKwYLA%2B9WXwq3AO7S8yG9JCBHS8VVPOm9u%2FTKQ6vAg8NQ0ZMzZzkZd4X2ft3oLvNW79%2FN%2Bgq39JqGUWqBzKz5hzy6S1n2mAN9%2BcG%2BAVjsiFK%2BUbYzR8zeHL0nAWJnBQK2FDN6R4UFeZC56slyXKeLH%2BkxzYLtu03gPczH6ZyJjhwsBMMQAluJg1FMMICI9wEES3yFvpRj8hEQu%2BBnf9RqNwuiZMETnHjLfzLU4Bc8RhfIQp6L0WShZitIi0YjHPjlo7VCEVVw8ElXerVIn3%2F8OEk85dNBFnogjPCyUGWbNVMKI0eS1rnxfAdr0jUqoFnr9dgQyTvAROIyjLFPIRdg7pCap6te5IHqifCC2XOwwx32aEoviomHcyLO7nirvAfgHv3C%2B9nZluKtbAcY7AlIhtlZY8oDwoDxRDS58R3iUxiGckQaISlljg%2FAfw%2FK4O%2BC7dA7iNzujGvl68oS8f4r3vb3DYW3hbOqFtldr3qjpMODfkOP8YR4gosSPChtVmmDbjFREUx0Wf25owU6HHvt4oT2ESG2MbCjOXGYn%2BybkEfTa7N%2BwQB9dl3%2B4JkrLWVAxqBZC9OyiO9iFDnyzqPrMn3t6W%2BLxASo4ze3D%2FJBJE2Li8Z6oBJrj7kxdCtwJgFfK9Loh3LnDDDvqC9BjqkAZKOULKKjRX2k0sOZ6XNc16qVmyMmO8guodBrKgG%2F0tcRVlf%2BSAktWk5uwCmFvTU8BS%2FX1VCIyUX%2FIFJERXSod7cDlV6yDIRrRvLA3qxjDQJOdt8QOzueW38QthBMC0AUmHEem%2F0PmnBIyunPFj6UNgaUb%2BYo0nq0n%2BQ%2B%2FgdEi32XhHy%2Fv5OG3ZPk19bFVg08wgNgstAziFBhBd1kbAZcMflrHSN&X-Amz-Signature=ee3c3cbe8a97e9d77f613eeb429718ce9044f78bf82989a72fc6252c140b97c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNKT2AAM%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T050716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDczJv33lYQZxqyiAFygYoYuvk9JjBHwiXx8QXHWRUyNgIhAKlXyh%2FFguoiQNKqY3VwI4O68TTmGcNKO3jxjS%2BhW8eKKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5YCWCoKwYLA%2B9WXwq3AO7S8yG9JCBHS8VVPOm9u%2FTKQ6vAg8NQ0ZMzZzkZd4X2ft3oLvNW79%2FN%2Bgq39JqGUWqBzKz5hzy6S1n2mAN9%2BcG%2BAVjsiFK%2BUbYzR8zeHL0nAWJnBQK2FDN6R4UFeZC56slyXKeLH%2BkxzYLtu03gPczH6ZyJjhwsBMMQAluJg1FMMICI9wEES3yFvpRj8hEQu%2BBnf9RqNwuiZMETnHjLfzLU4Bc8RhfIQp6L0WShZitIi0YjHPjlo7VCEVVw8ElXerVIn3%2F8OEk85dNBFnogjPCyUGWbNVMKI0eS1rnxfAdr0jUqoFnr9dgQyTvAROIyjLFPIRdg7pCap6te5IHqifCC2XOwwx32aEoviomHcyLO7nirvAfgHv3C%2B9nZluKtbAcY7AlIhtlZY8oDwoDxRDS58R3iUxiGckQaISlljg%2FAfw%2FK4O%2BC7dA7iNzujGvl68oS8f4r3vb3DYW3hbOqFtldr3qjpMODfkOP8YR4gosSPChtVmmDbjFREUx0Wf25owU6HHvt4oT2ESG2MbCjOXGYn%2BybkEfTa7N%2BwQB9dl3%2B4JkrLWVAxqBZC9OyiO9iFDnyzqPrMn3t6W%2BLxASo4ze3D%2FJBJE2Li8Z6oBJrj7kxdCtwJgFfK9Loh3LnDDDvqC9BjqkAZKOULKKjRX2k0sOZ6XNc16qVmyMmO8guodBrKgG%2F0tcRVlf%2BSAktWk5uwCmFvTU8BS%2FX1VCIyUX%2FIFJERXSod7cDlV6yDIRrRvLA3qxjDQJOdt8QOzueW38QthBMC0AUmHEem%2F0PmnBIyunPFj6UNgaUb%2BYo0nq0n%2BQ%2B%2FgdEi32XhHy%2Fv5OG3ZPk19bFVg08wgNgstAziFBhBd1kbAZcMflrHSN&X-Amz-Signature=25d40b93da04d7d3801284bee826e72699a547d1c1e250843c18d76d569112a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

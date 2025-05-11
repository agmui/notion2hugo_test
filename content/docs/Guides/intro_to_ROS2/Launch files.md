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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEKO6NYF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBOOaBnMAQCrIGCUB82QGfaL3W4N01NNpMn%2B2puqEkg%2FAiBe%2FgXh3nbfcnn54LokPWuiRMNrUEWqDtRo0csnccweyyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa6l4A4P0P%2F07QCn8KtwD7q%2F4aBlVjZGRgzO7pFwps%2FblBZQFOBBvatJkjPIYQ6iL%2B75cxsFwo6bFcIIDBoyxLnoZS%2FaBjqAQpw8n0S8pHkXyAJ6FaLINSVX27DfbukAvdhdzSgJCYAKwT6tnGpdqhRdLd%2BSNen%2FhJdoOnC0sotUvf0cq9XKLXocTbmcSeEdS92wjTeSOZtbNMi02ABz%2F2fkkPVEHLcGz1bw7X4uCwGO1ZirHz1ceey2esNmuePETtePx%2FBqnRaCHq2SWNhevwBj6y6%2FsPF9KOrAO0fc7tpJHv1CyOMtjRngwhtRJe1uYlHbsRGNQyfTbL6JQTFq9bHxoFTGVaYc4gp92rKZm7z1xjqrG6Xtskxgn2c2ejDD4u%2BCmTpC3wtDAl8zAgNYpxPxsmH7Mhk1h8tLs7qoASThmkhFZoH9KqF7%2B4BmJRsUmWFnroLo%2BHuK6W%2FRh9UIoJ2b3u2Elz%2FG3it4Jd%2BtHGDofz%2BQn41JfqQkQwSzHCDgo2g3W7qSN0HcNBWSTYQ%2BKnMYpKIggx7oyRz6WL2oYfhO%2Fxa5BPgcirZNgo0vyfNcl0dBeo1Ss4LkG717MD02IVFQEfGUo1kvpEXvZ6kCGivdcVX%2Fhh13DIW5Wb7IAgS7jyzZ54K73K0hO92EwwKGDwQY6pgHekrw5o8k7y6hLHT3fgyP3PuwUICsQ%2BdynTYwV9fS9QZhO%2F8sDZXz3ZUxAKTJhH%2FCE01eF1BZVDgm7unUxuJktzIzuamb%2Blcgs%2FH%2BMRYhLgJ4P9rI2rmDDkQrDhJGyF50g7Ny72zUrw4vDAhp8ssW6CSBl8%2Fmr2sOYi9796YPwRQdk6Kmyo69DCGhiZg9HbiCF%2F%2FOEF4rjihxeeUcTMzuBO8suMbYv&X-Amz-Signature=7a4bed9786a62b9e876924f69577dba92ded15520557636b8ad742327784ab53&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEKO6NYF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBOOaBnMAQCrIGCUB82QGfaL3W4N01NNpMn%2B2puqEkg%2FAiBe%2FgXh3nbfcnn54LokPWuiRMNrUEWqDtRo0csnccweyyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa6l4A4P0P%2F07QCn8KtwD7q%2F4aBlVjZGRgzO7pFwps%2FblBZQFOBBvatJkjPIYQ6iL%2B75cxsFwo6bFcIIDBoyxLnoZS%2FaBjqAQpw8n0S8pHkXyAJ6FaLINSVX27DfbukAvdhdzSgJCYAKwT6tnGpdqhRdLd%2BSNen%2FhJdoOnC0sotUvf0cq9XKLXocTbmcSeEdS92wjTeSOZtbNMi02ABz%2F2fkkPVEHLcGz1bw7X4uCwGO1ZirHz1ceey2esNmuePETtePx%2FBqnRaCHq2SWNhevwBj6y6%2FsPF9KOrAO0fc7tpJHv1CyOMtjRngwhtRJe1uYlHbsRGNQyfTbL6JQTFq9bHxoFTGVaYc4gp92rKZm7z1xjqrG6Xtskxgn2c2ejDD4u%2BCmTpC3wtDAl8zAgNYpxPxsmH7Mhk1h8tLs7qoASThmkhFZoH9KqF7%2B4BmJRsUmWFnroLo%2BHuK6W%2FRh9UIoJ2b3u2Elz%2FG3it4Jd%2BtHGDofz%2BQn41JfqQkQwSzHCDgo2g3W7qSN0HcNBWSTYQ%2BKnMYpKIggx7oyRz6WL2oYfhO%2Fxa5BPgcirZNgo0vyfNcl0dBeo1Ss4LkG717MD02IVFQEfGUo1kvpEXvZ6kCGivdcVX%2Fhh13DIW5Wb7IAgS7jyzZ54K73K0hO92EwwKGDwQY6pgHekrw5o8k7y6hLHT3fgyP3PuwUICsQ%2BdynTYwV9fS9QZhO%2F8sDZXz3ZUxAKTJhH%2FCE01eF1BZVDgm7unUxuJktzIzuamb%2Blcgs%2FH%2BMRYhLgJ4P9rI2rmDDkQrDhJGyF50g7Ny72zUrw4vDAhp8ssW6CSBl8%2Fmr2sOYi9796YPwRQdk6Kmyo69DCGhiZg9HbiCF%2F%2FOEF4rjihxeeUcTMzuBO8suMbYv&X-Amz-Signature=cbfbdcbe87fd6a280ec61e54cf2dc1d77bf9bb9ec3235ae70bf2a14cc5f7d55c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEKO6NYF%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBOOaBnMAQCrIGCUB82QGfaL3W4N01NNpMn%2B2puqEkg%2FAiBe%2FgXh3nbfcnn54LokPWuiRMNrUEWqDtRo0csnccweyyqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa6l4A4P0P%2F07QCn8KtwD7q%2F4aBlVjZGRgzO7pFwps%2FblBZQFOBBvatJkjPIYQ6iL%2B75cxsFwo6bFcIIDBoyxLnoZS%2FaBjqAQpw8n0S8pHkXyAJ6FaLINSVX27DfbukAvdhdzSgJCYAKwT6tnGpdqhRdLd%2BSNen%2FhJdoOnC0sotUvf0cq9XKLXocTbmcSeEdS92wjTeSOZtbNMi02ABz%2F2fkkPVEHLcGz1bw7X4uCwGO1ZirHz1ceey2esNmuePETtePx%2FBqnRaCHq2SWNhevwBj6y6%2FsPF9KOrAO0fc7tpJHv1CyOMtjRngwhtRJe1uYlHbsRGNQyfTbL6JQTFq9bHxoFTGVaYc4gp92rKZm7z1xjqrG6Xtskxgn2c2ejDD4u%2BCmTpC3wtDAl8zAgNYpxPxsmH7Mhk1h8tLs7qoASThmkhFZoH9KqF7%2B4BmJRsUmWFnroLo%2BHuK6W%2FRh9UIoJ2b3u2Elz%2FG3it4Jd%2BtHGDofz%2BQn41JfqQkQwSzHCDgo2g3W7qSN0HcNBWSTYQ%2BKnMYpKIggx7oyRz6WL2oYfhO%2Fxa5BPgcirZNgo0vyfNcl0dBeo1Ss4LkG717MD02IVFQEfGUo1kvpEXvZ6kCGivdcVX%2Fhh13DIW5Wb7IAgS7jyzZ54K73K0hO92EwwKGDwQY6pgHekrw5o8k7y6hLHT3fgyP3PuwUICsQ%2BdynTYwV9fS9QZhO%2F8sDZXz3ZUxAKTJhH%2FCE01eF1BZVDgm7unUxuJktzIzuamb%2Blcgs%2FH%2BMRYhLgJ4P9rI2rmDDkQrDhJGyF50g7Ny72zUrw4vDAhp8ssW6CSBl8%2Fmr2sOYi9796YPwRQdk6Kmyo69DCGhiZg9HbiCF%2F%2FOEF4rjihxeeUcTMzuBO8suMbYv&X-Amz-Signature=bbd150b815043d37d03f505c2b6e0b0459fe9d7a2ab8a8a4c7a0f2b3a95ccb48&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

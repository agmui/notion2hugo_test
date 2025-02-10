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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBA6U42%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz6BgEruSoipU1iIlrByOhw66O2fczwpSBSaqgpNR5NAiEAuYP9gsf8hPnANbBlnxXbA7oNtB2tjWT8GV37gcFcfC0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5mLTk5g6PUuwDwkSrcA%2Bha%2FWBYG8FB2A%2BQVjNFyzoIcv02RUo%2BQaN3vnJoJ9efDJhU0IiJN1Odpx2C5ymwrOCV3%2BEby%2BBAyg02LrmZrXNd3jkweZ0kEa5xwU%2B6BhJAi6ZiLpLcsLQqbWjzFoA7167oZc8sY3jZQ5oxgS5ix0cXuU%2BARx8lrnjTvki3zhuwZ6mbsRJQvq1CEGDtMYJQjUFejz6jhXVOvKfX4zeFDd2Zpu2Vr2R0VUU9V1PHi8eld40kqYQQMzdgqfURusmScp4d%2BgjBDo62LDqRUXrYhCz%2F72vnYtve6haLXQo%2BVtIRz40gygiBiVAnjBQXR%2Bgk9alAy3SxyfX9DuUBKe9sOgayo9VvBz3khvznrNWmRr%2BmzN0MAd3MBWzZy4mfO5k%2FRYDqN3mpCmRM%2Bibgs9ustgdtB9%2BuVkmS9%2Fyg1jyWSu8oMCT05Cj%2FYU0i8bVxhgj7DM0uxegIMSzwG%2FBFTVdbDO5sKhOzOswPvruZFXWRB%2B4TumVLIOOuxlSD7fCmqagT0cNE0da8cdioU%2BnbYg71wDAi2UoXYcMZPwSoDj8ynti1rdCmDEZaoyss3VrvPJ%2FtzkyDDDOV5h%2Bl6rQzPUVOR%2F5XpOw9KILOvf5OX3mAsEV3454Etf%2F63yMqHtHIMLqup70GOqUBvfnwaFxp03BU1C1%2BnnN1YbRGmRbDBvF%2FdNhk%2FPh%2FrRkeyRp41t8ZE8MZOtSLMbktVj%2Fc%2B%2BSee%2Fg2VXF8MWRHeG6tz9QUTG8vIu08mvEDlc91XNGsJxk2HYIt358M2L8XdtrBwWJmKRBWIjGPvINSk0QlViJqLc9JoK9pcYajztM8r6YPwGeQXcPmp1iToq9pJNv34nz7lUlKvMszpb2U2JCn%2BhpQ&X-Amz-Signature=88ff73c3337cf7f230a93f68b4451a225a087582403176e72ac31afe8b3431d7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBA6U42%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz6BgEruSoipU1iIlrByOhw66O2fczwpSBSaqgpNR5NAiEAuYP9gsf8hPnANbBlnxXbA7oNtB2tjWT8GV37gcFcfC0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5mLTk5g6PUuwDwkSrcA%2Bha%2FWBYG8FB2A%2BQVjNFyzoIcv02RUo%2BQaN3vnJoJ9efDJhU0IiJN1Odpx2C5ymwrOCV3%2BEby%2BBAyg02LrmZrXNd3jkweZ0kEa5xwU%2B6BhJAi6ZiLpLcsLQqbWjzFoA7167oZc8sY3jZQ5oxgS5ix0cXuU%2BARx8lrnjTvki3zhuwZ6mbsRJQvq1CEGDtMYJQjUFejz6jhXVOvKfX4zeFDd2Zpu2Vr2R0VUU9V1PHi8eld40kqYQQMzdgqfURusmScp4d%2BgjBDo62LDqRUXrYhCz%2F72vnYtve6haLXQo%2BVtIRz40gygiBiVAnjBQXR%2Bgk9alAy3SxyfX9DuUBKe9sOgayo9VvBz3khvznrNWmRr%2BmzN0MAd3MBWzZy4mfO5k%2FRYDqN3mpCmRM%2Bibgs9ustgdtB9%2BuVkmS9%2Fyg1jyWSu8oMCT05Cj%2FYU0i8bVxhgj7DM0uxegIMSzwG%2FBFTVdbDO5sKhOzOswPvruZFXWRB%2B4TumVLIOOuxlSD7fCmqagT0cNE0da8cdioU%2BnbYg71wDAi2UoXYcMZPwSoDj8ynti1rdCmDEZaoyss3VrvPJ%2FtzkyDDDOV5h%2Bl6rQzPUVOR%2F5XpOw9KILOvf5OX3mAsEV3454Etf%2F63yMqHtHIMLqup70GOqUBvfnwaFxp03BU1C1%2BnnN1YbRGmRbDBvF%2FdNhk%2FPh%2FrRkeyRp41t8ZE8MZOtSLMbktVj%2Fc%2B%2BSee%2Fg2VXF8MWRHeG6tz9QUTG8vIu08mvEDlc91XNGsJxk2HYIt358M2L8XdtrBwWJmKRBWIjGPvINSk0QlViJqLc9JoK9pcYajztM8r6YPwGeQXcPmp1iToq9pJNv34nz7lUlKvMszpb2U2JCn%2BhpQ&X-Amz-Signature=568ea518b0ce15ef174a9fec1ab543bafd06826cbb5ec55c9f373ff5db65f36e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBA6U42%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T110444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDz6BgEruSoipU1iIlrByOhw66O2fczwpSBSaqgpNR5NAiEAuYP9gsf8hPnANbBlnxXbA7oNtB2tjWT8GV37gcFcfC0qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5mLTk5g6PUuwDwkSrcA%2Bha%2FWBYG8FB2A%2BQVjNFyzoIcv02RUo%2BQaN3vnJoJ9efDJhU0IiJN1Odpx2C5ymwrOCV3%2BEby%2BBAyg02LrmZrXNd3jkweZ0kEa5xwU%2B6BhJAi6ZiLpLcsLQqbWjzFoA7167oZc8sY3jZQ5oxgS5ix0cXuU%2BARx8lrnjTvki3zhuwZ6mbsRJQvq1CEGDtMYJQjUFejz6jhXVOvKfX4zeFDd2Zpu2Vr2R0VUU9V1PHi8eld40kqYQQMzdgqfURusmScp4d%2BgjBDo62LDqRUXrYhCz%2F72vnYtve6haLXQo%2BVtIRz40gygiBiVAnjBQXR%2Bgk9alAy3SxyfX9DuUBKe9sOgayo9VvBz3khvznrNWmRr%2BmzN0MAd3MBWzZy4mfO5k%2FRYDqN3mpCmRM%2Bibgs9ustgdtB9%2BuVkmS9%2Fyg1jyWSu8oMCT05Cj%2FYU0i8bVxhgj7DM0uxegIMSzwG%2FBFTVdbDO5sKhOzOswPvruZFXWRB%2B4TumVLIOOuxlSD7fCmqagT0cNE0da8cdioU%2BnbYg71wDAi2UoXYcMZPwSoDj8ynti1rdCmDEZaoyss3VrvPJ%2FtzkyDDDOV5h%2Bl6rQzPUVOR%2F5XpOw9KILOvf5OX3mAsEV3454Etf%2F63yMqHtHIMLqup70GOqUBvfnwaFxp03BU1C1%2BnnN1YbRGmRbDBvF%2FdNhk%2FPh%2FrRkeyRp41t8ZE8MZOtSLMbktVj%2Fc%2B%2BSee%2Fg2VXF8MWRHeG6tz9QUTG8vIu08mvEDlc91XNGsJxk2HYIt358M2L8XdtrBwWJmKRBWIjGPvINSk0QlViJqLc9JoK9pcYajztM8r6YPwGeQXcPmp1iToq9pJNv34nz7lUlKvMszpb2U2JCn%2BhpQ&X-Amz-Signature=ba9f3d99d9214bb87cc0f76d0ccfde5a08f939f35664eb3fdf08e610fe11d633&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

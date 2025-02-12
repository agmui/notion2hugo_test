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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIGWCQV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Zx0GbWFzC7kK09Lmo40cvDQhFb%2FN2Vz1OjGG4KzTyQIgUa8f4rY5giXSBpWAvTRdKG3HyQUwWX%2BVEQTLPT0GDIEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeOJQHKpUzOs6dgtircA3%2BQJ2PbiJvvAwzMYgqnLVmvp4oTr0ULJRw5rAMVBjM2jlUwfphMzPhOt47Vk%2Bjub7kGt95D4R5Dnp4m12WTyINoWkSf014daeTDBRa%2BqO7Wsfj1XEPAQJeZdBEaLmaNUJvpHY1oYGPw8MrEAghnhUpi0Mqz8E9PBG9WUVpSWLvkkMQN1rTIkBgV5GZRWmaINhq%2B9VyDFlZUcc2%2F0fzdZDLm%2Frkt8IDfZORebXDlmtSyB8lhb1GxY4Q2rNyVZDeMa9orBahVC8myr1RhmhCPS%2F4ul1rNwJKVWb8ls%2BJpMvv94ituhpj00NZnFVqkbNYI7Dl9XW38%2Feq3NePV8VjroGVQGPMs2V6eDUuGowWWF66i4GMl%2Bg%2F%2FJ%2BVq6%2Bpn29JoYbmoWf%2BqwAM%2Ff2NR9gA15oVCO%2BEqR%2B%2B%2BU0cRQeS6EcY%2FYTHZSleMM8aJ%2BYglT%2Fzuj%2FQgXS0uMwIlDgCIxMyvdRnSWrvZWniLdQGpiAXvFvd9soVVvY98nICHbPzSdAi5KSLbs8vWAyisgAmP4LDVtu14K0C2R6P8nmIW08VemwZM%2FQx318yxGtSGCabkG0e3%2BC6AKUp3IhxL%2FU78gBQ1lTGTWsUOYewbABsQMqfW3yA%2FZMM3oJgd0VuLUEa0MIiOsb0GOqUBFhA%2FosDn%2FTP%2FoTbDznog3V2UGYXASH5ky8AvVleAmHsp%2B6ije9dltlHqo%2B4XT60avEOWT12g4aPU5kehgoNAWtCo2aOaKNpcvNOb%2BzV5ObVznrbfSZDrqvjfXM3fU5UGambLZdmCxCs8%2BYqSLjq8Xw2ZtqqkG2s0RfopoiBakEYFKmpx6qZtTkNOaJxSrSYBbEhg8tqZHuk1%2B1zAPJOwq4Vh6Kt6&X-Amz-Signature=1b2e200daf4b9f01c14f2cf079d625a65b6e49866c10fa5b30d922ff84bf10e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIGWCQV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Zx0GbWFzC7kK09Lmo40cvDQhFb%2FN2Vz1OjGG4KzTyQIgUa8f4rY5giXSBpWAvTRdKG3HyQUwWX%2BVEQTLPT0GDIEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeOJQHKpUzOs6dgtircA3%2BQJ2PbiJvvAwzMYgqnLVmvp4oTr0ULJRw5rAMVBjM2jlUwfphMzPhOt47Vk%2Bjub7kGt95D4R5Dnp4m12WTyINoWkSf014daeTDBRa%2BqO7Wsfj1XEPAQJeZdBEaLmaNUJvpHY1oYGPw8MrEAghnhUpi0Mqz8E9PBG9WUVpSWLvkkMQN1rTIkBgV5GZRWmaINhq%2B9VyDFlZUcc2%2F0fzdZDLm%2Frkt8IDfZORebXDlmtSyB8lhb1GxY4Q2rNyVZDeMa9orBahVC8myr1RhmhCPS%2F4ul1rNwJKVWb8ls%2BJpMvv94ituhpj00NZnFVqkbNYI7Dl9XW38%2Feq3NePV8VjroGVQGPMs2V6eDUuGowWWF66i4GMl%2Bg%2F%2FJ%2BVq6%2Bpn29JoYbmoWf%2BqwAM%2Ff2NR9gA15oVCO%2BEqR%2B%2B%2BU0cRQeS6EcY%2FYTHZSleMM8aJ%2BYglT%2Fzuj%2FQgXS0uMwIlDgCIxMyvdRnSWrvZWniLdQGpiAXvFvd9soVVvY98nICHbPzSdAi5KSLbs8vWAyisgAmP4LDVtu14K0C2R6P8nmIW08VemwZM%2FQx318yxGtSGCabkG0e3%2BC6AKUp3IhxL%2FU78gBQ1lTGTWsUOYewbABsQMqfW3yA%2FZMM3oJgd0VuLUEa0MIiOsb0GOqUBFhA%2FosDn%2FTP%2FoTbDznog3V2UGYXASH5ky8AvVleAmHsp%2B6ije9dltlHqo%2B4XT60avEOWT12g4aPU5kehgoNAWtCo2aOaKNpcvNOb%2BzV5ObVznrbfSZDrqvjfXM3fU5UGambLZdmCxCs8%2BYqSLjq8Xw2ZtqqkG2s0RfopoiBakEYFKmpx6qZtTkNOaJxSrSYBbEhg8tqZHuk1%2B1zAPJOwq4Vh6Kt6&X-Amz-Signature=99c4fe62e47b83d417cf008370465ef5a3f9c36ad8e874c55919c4b70820b523&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOIGWCQV%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7Zx0GbWFzC7kK09Lmo40cvDQhFb%2FN2Vz1OjGG4KzTyQIgUa8f4rY5giXSBpWAvTRdKG3HyQUwWX%2BVEQTLPT0GDIEqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeOJQHKpUzOs6dgtircA3%2BQJ2PbiJvvAwzMYgqnLVmvp4oTr0ULJRw5rAMVBjM2jlUwfphMzPhOt47Vk%2Bjub7kGt95D4R5Dnp4m12WTyINoWkSf014daeTDBRa%2BqO7Wsfj1XEPAQJeZdBEaLmaNUJvpHY1oYGPw8MrEAghnhUpi0Mqz8E9PBG9WUVpSWLvkkMQN1rTIkBgV5GZRWmaINhq%2B9VyDFlZUcc2%2F0fzdZDLm%2Frkt8IDfZORebXDlmtSyB8lhb1GxY4Q2rNyVZDeMa9orBahVC8myr1RhmhCPS%2F4ul1rNwJKVWb8ls%2BJpMvv94ituhpj00NZnFVqkbNYI7Dl9XW38%2Feq3NePV8VjroGVQGPMs2V6eDUuGowWWF66i4GMl%2Bg%2F%2FJ%2BVq6%2Bpn29JoYbmoWf%2BqwAM%2Ff2NR9gA15oVCO%2BEqR%2B%2B%2BU0cRQeS6EcY%2FYTHZSleMM8aJ%2BYglT%2Fzuj%2FQgXS0uMwIlDgCIxMyvdRnSWrvZWniLdQGpiAXvFvd9soVVvY98nICHbPzSdAi5KSLbs8vWAyisgAmP4LDVtu14K0C2R6P8nmIW08VemwZM%2FQx318yxGtSGCabkG0e3%2BC6AKUp3IhxL%2FU78gBQ1lTGTWsUOYewbABsQMqfW3yA%2FZMM3oJgd0VuLUEa0MIiOsb0GOqUBFhA%2FosDn%2FTP%2FoTbDznog3V2UGYXASH5ky8AvVleAmHsp%2B6ije9dltlHqo%2B4XT60avEOWT12g4aPU5kehgoNAWtCo2aOaKNpcvNOb%2BzV5ObVznrbfSZDrqvjfXM3fU5UGambLZdmCxCs8%2BYqSLjq8Xw2ZtqqkG2s0RfopoiBakEYFKmpx6qZtTkNOaJxSrSYBbEhg8tqZHuk1%2B1zAPJOwq4Vh6Kt6&X-Amz-Signature=c39ae5390dac5ab811ae19dbede8750399b94497c96b6497118ae4bc6636dae4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

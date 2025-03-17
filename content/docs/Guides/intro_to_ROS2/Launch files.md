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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2TSNZLB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHTuu4NaRDCDnf6KPa6jbvoRbl6EboONvMBNIL4rBMBwIgN57nS3zWSOEzs0N7ve2rA5sGz15ZWZ1R6dx3bxwWMhoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAyi6D9OlPtJzXwdXircA7%2FbTNskXixDjDOjK1NpTM7jL1ZqO4EjkFG7eXoltwxj0gbhLHNSAgScQcD%2Byq5ly5dQLss8BfXcSDYYBvGHq7P%2FEfSkV8DIySh7pDKUfx%2Fwsr%2B2AINp36Xo%2BTCxRksQrgrlgf%2Fu1bScb%2Fe3nvmM823mFDn0UnClF1bL0olINDjQEhlDOjedff5H0bYhc%2BmynKWTOGPHjWP4t9gvhGQeDl4CCaaw6exdSxh8vZobackJ79trbdtG8o7QvWnWs7O2JVvzaB4MjrvTq8GRjE24hmzkuITpt%2BdSTZGmld07hbVomnpHKmvyWLnUW40hfHp5lW72jeqmOvcrLVndwt6UliGffCnHBLk2I7VGkX1pejo9BN7HhwNBhV7AFPFLanwQtx2CrdEKPfCN%2B13OsUOfRngIEf3Ayt4%2FCpYTSEpIs%2FIU0qtKgotofz5y68p%2Fip%2FUMtI%2Fcx3nOX1%2BOq7tuj4jXpY4U7qCl1aH3cttpTpA71QcLpmwurJ7%2F0mighZ5voeTd9FHT5oIYi6KX5IGTY6t%2F77Sw5J1sLv6vBG19D9Rk79%2Fh9i2YN76vq9Q65bUQC00C3g%2B9TvGTNFQ6%2FFJwDs60hHyi2z1qztxEYL6TGE%2BriLvTJ5mP2NezmmLk7FYMOjF4b4GOqUBAEX4gzgRsJI%2Bca%2FH6q45GddMnxEUDWwXAxvDEnF8dkwSbLFlFEU%2By1n5o9uSQqn5UjeWc4eGEDNwTyKc12ZjxjNEHKnr%2B%2BziyC62NYrOl%2Fdbp%2BOFiMyifrBXE6nSqUXZIPE1gFtib4LIq889MPLU9T0KRAAmrgopuYMUzL5ib6p%2B3TJ34H5akNlZUnXGeDXlKLUqwzzVGcDSGe88F8BFEeSE%2F%2Bss&X-Amz-Signature=c5ce43cecac3d8d512206b8eefd1cc8d3dc11fd1cee03d2d5a47c41806628cec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2TSNZLB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHTuu4NaRDCDnf6KPa6jbvoRbl6EboONvMBNIL4rBMBwIgN57nS3zWSOEzs0N7ve2rA5sGz15ZWZ1R6dx3bxwWMhoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAyi6D9OlPtJzXwdXircA7%2FbTNskXixDjDOjK1NpTM7jL1ZqO4EjkFG7eXoltwxj0gbhLHNSAgScQcD%2Byq5ly5dQLss8BfXcSDYYBvGHq7P%2FEfSkV8DIySh7pDKUfx%2Fwsr%2B2AINp36Xo%2BTCxRksQrgrlgf%2Fu1bScb%2Fe3nvmM823mFDn0UnClF1bL0olINDjQEhlDOjedff5H0bYhc%2BmynKWTOGPHjWP4t9gvhGQeDl4CCaaw6exdSxh8vZobackJ79trbdtG8o7QvWnWs7O2JVvzaB4MjrvTq8GRjE24hmzkuITpt%2BdSTZGmld07hbVomnpHKmvyWLnUW40hfHp5lW72jeqmOvcrLVndwt6UliGffCnHBLk2I7VGkX1pejo9BN7HhwNBhV7AFPFLanwQtx2CrdEKPfCN%2B13OsUOfRngIEf3Ayt4%2FCpYTSEpIs%2FIU0qtKgotofz5y68p%2Fip%2FUMtI%2Fcx3nOX1%2BOq7tuj4jXpY4U7qCl1aH3cttpTpA71QcLpmwurJ7%2F0mighZ5voeTd9FHT5oIYi6KX5IGTY6t%2F77Sw5J1sLv6vBG19D9Rk79%2Fh9i2YN76vq9Q65bUQC00C3g%2B9TvGTNFQ6%2FFJwDs60hHyi2z1qztxEYL6TGE%2BriLvTJ5mP2NezmmLk7FYMOjF4b4GOqUBAEX4gzgRsJI%2Bca%2FH6q45GddMnxEUDWwXAxvDEnF8dkwSbLFlFEU%2By1n5o9uSQqn5UjeWc4eGEDNwTyKc12ZjxjNEHKnr%2B%2BziyC62NYrOl%2Fdbp%2BOFiMyifrBXE6nSqUXZIPE1gFtib4LIq889MPLU9T0KRAAmrgopuYMUzL5ib6p%2B3TJ34H5akNlZUnXGeDXlKLUqwzzVGcDSGe88F8BFEeSE%2F%2Bss&X-Amz-Signature=4ffb869cb59de12763fd0a476407500a3b173471ea3e1bdaaf189893b02f3115&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2TSNZLB%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHTuu4NaRDCDnf6KPa6jbvoRbl6EboONvMBNIL4rBMBwIgN57nS3zWSOEzs0N7ve2rA5sGz15ZWZ1R6dx3bxwWMhoq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDAyi6D9OlPtJzXwdXircA7%2FbTNskXixDjDOjK1NpTM7jL1ZqO4EjkFG7eXoltwxj0gbhLHNSAgScQcD%2Byq5ly5dQLss8BfXcSDYYBvGHq7P%2FEfSkV8DIySh7pDKUfx%2Fwsr%2B2AINp36Xo%2BTCxRksQrgrlgf%2Fu1bScb%2Fe3nvmM823mFDn0UnClF1bL0olINDjQEhlDOjedff5H0bYhc%2BmynKWTOGPHjWP4t9gvhGQeDl4CCaaw6exdSxh8vZobackJ79trbdtG8o7QvWnWs7O2JVvzaB4MjrvTq8GRjE24hmzkuITpt%2BdSTZGmld07hbVomnpHKmvyWLnUW40hfHp5lW72jeqmOvcrLVndwt6UliGffCnHBLk2I7VGkX1pejo9BN7HhwNBhV7AFPFLanwQtx2CrdEKPfCN%2B13OsUOfRngIEf3Ayt4%2FCpYTSEpIs%2FIU0qtKgotofz5y68p%2Fip%2FUMtI%2Fcx3nOX1%2BOq7tuj4jXpY4U7qCl1aH3cttpTpA71QcLpmwurJ7%2F0mighZ5voeTd9FHT5oIYi6KX5IGTY6t%2F77Sw5J1sLv6vBG19D9Rk79%2Fh9i2YN76vq9Q65bUQC00C3g%2B9TvGTNFQ6%2FFJwDs60hHyi2z1qztxEYL6TGE%2BriLvTJ5mP2NezmmLk7FYMOjF4b4GOqUBAEX4gzgRsJI%2Bca%2FH6q45GddMnxEUDWwXAxvDEnF8dkwSbLFlFEU%2By1n5o9uSQqn5UjeWc4eGEDNwTyKc12ZjxjNEHKnr%2B%2BziyC62NYrOl%2Fdbp%2BOFiMyifrBXE6nSqUXZIPE1gFtib4LIq889MPLU9T0KRAAmrgopuYMUzL5ib6p%2B3TJ34H5akNlZUnXGeDXlKLUqwzzVGcDSGe88F8BFEeSE%2F%2Bss&X-Amz-Signature=559f58d73a05eb15bc7c9092a8007c52a55187e20bbe7592101cc93c6b3906f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

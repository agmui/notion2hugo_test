---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YN3BMU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDweH3DMNixU6Eg5nY87X7oa8GbHHjgWZNtqzJVgCyUiAIhAOUa5Of4mc2egPCJ4fpvg2jhqwK03Fl81srqbXP13kdiKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuvcOVSXUXyhVlC3cq3APY4bSNr9klIiM1IjGvjpkt9Ip3ITjL%2FNCB35hdCyjfeUQViY0QcjHnZkTVyr1cITC%2BbvTdX2fJj4DFvLIYGdC2WR9J14GSMt4NUI4zVWoJS2cAVpY0bFF5%2FAuMBb%2Bq1msxRWat2f97GY7J71Tsh60T5vlSUAGz0a%2FA7JuL3XPvqmiNzcuBOo916WhGfTt2rq%2F4sPzbsWPGL%2FKDT66%2FAH6mTmk0lHQLI2QhWLg8ANaA4w%2BOgHqstPEsOba04Tm9J0AN1ix9TBUmj2juyTBw311dSX6kzN4cjyv8sUeTd%2FUTI2FD0sTYOrR06IN79xjlDtSr2siDfPj%2FQJZl3dtEjpXE80FFXzhOtrv1Lj7NkigGHPi4UQyR5BaKdHIlv8Ovx%2FSpcbicURyrxuFUEE5WmyhQJROZO9uihU9eC4E5XXD3CVw0y4uTPNuC%2BH4w4tUbUM0StlYIEi81Q8v%2FFUMuVCPgLvvP4KhGa%2FNwJpeH2kFr6wb8Mp%2BzZrhoHThkjczHsZKY3vWpqMFoBk8asCrPcbKZgq0aLPuN%2BOEJDRau7SKdcaf24uO3h%2FtvM9S%2Fg1u8%2FyNs4P8BUzh5gm2jlj7YRSVCCtcmedEfPMybGTtX0kZyEa18kCeGJSiJQf9bpzCDk9nEBjqkAROsm4kxlsL4ZZuKvUjNC0q5S4BxQ7vbte1LUngv%2FgW9GRyWT7c4mZxB%2BWn4eGpHL3d%2FqA5X7lZfAPHxE%2FifeJmkUXzrpq1T6uI0ulh%2FNPetaGIekVOle57dqR00TDDqK38PrUo6HXBWGiqUAJtLknMe67RbNxP1eaWzyDtANeYp5T3%2BkqluZlLO7LZLoz%2Byfsk%2BCGaxi1OPenzMa%2FxMOFrvGZ%2FJ&X-Amz-Signature=2134e319bd4d857b304120b541d1ff6585aa39c47a27bcda77a2435a94478257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YN3BMU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDweH3DMNixU6Eg5nY87X7oa8GbHHjgWZNtqzJVgCyUiAIhAOUa5Of4mc2egPCJ4fpvg2jhqwK03Fl81srqbXP13kdiKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuvcOVSXUXyhVlC3cq3APY4bSNr9klIiM1IjGvjpkt9Ip3ITjL%2FNCB35hdCyjfeUQViY0QcjHnZkTVyr1cITC%2BbvTdX2fJj4DFvLIYGdC2WR9J14GSMt4NUI4zVWoJS2cAVpY0bFF5%2FAuMBb%2Bq1msxRWat2f97GY7J71Tsh60T5vlSUAGz0a%2FA7JuL3XPvqmiNzcuBOo916WhGfTt2rq%2F4sPzbsWPGL%2FKDT66%2FAH6mTmk0lHQLI2QhWLg8ANaA4w%2BOgHqstPEsOba04Tm9J0AN1ix9TBUmj2juyTBw311dSX6kzN4cjyv8sUeTd%2FUTI2FD0sTYOrR06IN79xjlDtSr2siDfPj%2FQJZl3dtEjpXE80FFXzhOtrv1Lj7NkigGHPi4UQyR5BaKdHIlv8Ovx%2FSpcbicURyrxuFUEE5WmyhQJROZO9uihU9eC4E5XXD3CVw0y4uTPNuC%2BH4w4tUbUM0StlYIEi81Q8v%2FFUMuVCPgLvvP4KhGa%2FNwJpeH2kFr6wb8Mp%2BzZrhoHThkjczHsZKY3vWpqMFoBk8asCrPcbKZgq0aLPuN%2BOEJDRau7SKdcaf24uO3h%2FtvM9S%2Fg1u8%2FyNs4P8BUzh5gm2jlj7YRSVCCtcmedEfPMybGTtX0kZyEa18kCeGJSiJQf9bpzCDk9nEBjqkAROsm4kxlsL4ZZuKvUjNC0q5S4BxQ7vbte1LUngv%2FgW9GRyWT7c4mZxB%2BWn4eGpHL3d%2FqA5X7lZfAPHxE%2FifeJmkUXzrpq1T6uI0ulh%2FNPetaGIekVOle57dqR00TDDqK38PrUo6HXBWGiqUAJtLknMe67RbNxP1eaWzyDtANeYp5T3%2BkqluZlLO7LZLoz%2Byfsk%2BCGaxi1OPenzMa%2FxMOFrvGZ%2FJ&X-Amz-Signature=23d6d2ce2387fc0be2b2bedb3fb8ac20ed3b98392f7276b1ec695da0d7cbdb8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YN3BMU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDweH3DMNixU6Eg5nY87X7oa8GbHHjgWZNtqzJVgCyUiAIhAOUa5Of4mc2egPCJ4fpvg2jhqwK03Fl81srqbXP13kdiKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuvcOVSXUXyhVlC3cq3APY4bSNr9klIiM1IjGvjpkt9Ip3ITjL%2FNCB35hdCyjfeUQViY0QcjHnZkTVyr1cITC%2BbvTdX2fJj4DFvLIYGdC2WR9J14GSMt4NUI4zVWoJS2cAVpY0bFF5%2FAuMBb%2Bq1msxRWat2f97GY7J71Tsh60T5vlSUAGz0a%2FA7JuL3XPvqmiNzcuBOo916WhGfTt2rq%2F4sPzbsWPGL%2FKDT66%2FAH6mTmk0lHQLI2QhWLg8ANaA4w%2BOgHqstPEsOba04Tm9J0AN1ix9TBUmj2juyTBw311dSX6kzN4cjyv8sUeTd%2FUTI2FD0sTYOrR06IN79xjlDtSr2siDfPj%2FQJZl3dtEjpXE80FFXzhOtrv1Lj7NkigGHPi4UQyR5BaKdHIlv8Ovx%2FSpcbicURyrxuFUEE5WmyhQJROZO9uihU9eC4E5XXD3CVw0y4uTPNuC%2BH4w4tUbUM0StlYIEi81Q8v%2FFUMuVCPgLvvP4KhGa%2FNwJpeH2kFr6wb8Mp%2BzZrhoHThkjczHsZKY3vWpqMFoBk8asCrPcbKZgq0aLPuN%2BOEJDRau7SKdcaf24uO3h%2FtvM9S%2Fg1u8%2FyNs4P8BUzh5gm2jlj7YRSVCCtcmedEfPMybGTtX0kZyEa18kCeGJSiJQf9bpzCDk9nEBjqkAROsm4kxlsL4ZZuKvUjNC0q5S4BxQ7vbte1LUngv%2FgW9GRyWT7c4mZxB%2BWn4eGpHL3d%2FqA5X7lZfAPHxE%2FifeJmkUXzrpq1T6uI0ulh%2FNPetaGIekVOle57dqR00TDDqK38PrUo6HXBWGiqUAJtLknMe67RbNxP1eaWzyDtANeYp5T3%2BkqluZlLO7LZLoz%2Byfsk%2BCGaxi1OPenzMa%2FxMOFrvGZ%2FJ&X-Amz-Signature=c77aaee0c9dd5db49b2d2b5fd2fe99b7969fe6b676812437807b2fe3bc2a7860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

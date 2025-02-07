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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJKAWY2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDeAqZFBZ7mDaur%2Ba0Umv0COGg1cWOAW1A%2BN685WRlBjAiEA6eIvckn%2FmxYJErt5aR05sQUGBNKiV%2BjDenQuTrAy4UIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDNhdUkxlTMTX4QP%2BCrcA09uzxxeGqCgp396pIHGOUB6eDrV%2FkIhhUH35D3qz%2BMhj2v4AYnlR46aODrlcaELQbH4vGmUhQ2N0qPpyYzvsN%2BoypaSD6UR8akF%2FzKoMjpe%2B%2BEAwDFvD0DSTd9zg4AEeM6S0%2BluRAS75tysdMNXLqlJ8dzaPd0qQ8LzhzGbLROfckgdyYDk8fjZ0PLsagyIJfC591cgV3LTpot3AE6DzI5erfU0SWue8%2FWsYeSLQcCohjwixsoL%2BKznfH1J0Ahx3zVPjzhY%2BVbOhgRwUB3VMOCcG87aUe1fdgWajA8OlCw2tlWHnrajWjr64KO2ULDkMs7pBahh3gjhyM27vKJgPiZk1db1cymjjgINMkhBKOraInoqUvokfyfhR5IE8TDNWWJeITIJj41%2BnR%2Bi8VD%2B3UJk3BIn7x6hAv3%2BdHToZUMmweQFEexidi82kGldofDsw5NY3h%2Bko3J%2FNJz2GaPF5OqcsTy58tNRvz%2F%2FngDZ5WNyRjhAbmzO4rAKY44HyerfK11%2FHr51ogGUlug0p%2FvUPo12z7C6iIR22IDMq%2B08NDa4TtFb%2Bfo%2FQt%2FT8QLzpy8VbbNmZvs8pBxJ8KL%2FrvaShzef1p%2F7bSh%2FxAaV9x0I0GJi1IVK1HEimma2v1G%2FMNz6lr0GOqUBhsLEEBKPRjTsEWp4bEY6tq4t8bnYEMyqv5jP2uyewbwOIzOTTma62AZcjbsYaHqnlyxknLM2iY2vHzDfahRB6iY9kcL5p6HV3mwCdLd74QBDy1t258%2BehHLrSnsOZiM5w5ChiV9QELdapihItnLEVq%2BK1r%2BA7fvUCd90UPBHcOxF9ixVyrSvxwOBaUxRD7uFLbsns%2BWSYdoIUCltdRtenti12Vdn&X-Amz-Signature=4b024644620481004d1a7302afd26920f584d578b866feec9a50fe9ccbcc59fd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJKAWY2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDeAqZFBZ7mDaur%2Ba0Umv0COGg1cWOAW1A%2BN685WRlBjAiEA6eIvckn%2FmxYJErt5aR05sQUGBNKiV%2BjDenQuTrAy4UIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDNhdUkxlTMTX4QP%2BCrcA09uzxxeGqCgp396pIHGOUB6eDrV%2FkIhhUH35D3qz%2BMhj2v4AYnlR46aODrlcaELQbH4vGmUhQ2N0qPpyYzvsN%2BoypaSD6UR8akF%2FzKoMjpe%2B%2BEAwDFvD0DSTd9zg4AEeM6S0%2BluRAS75tysdMNXLqlJ8dzaPd0qQ8LzhzGbLROfckgdyYDk8fjZ0PLsagyIJfC591cgV3LTpot3AE6DzI5erfU0SWue8%2FWsYeSLQcCohjwixsoL%2BKznfH1J0Ahx3zVPjzhY%2BVbOhgRwUB3VMOCcG87aUe1fdgWajA8OlCw2tlWHnrajWjr64KO2ULDkMs7pBahh3gjhyM27vKJgPiZk1db1cymjjgINMkhBKOraInoqUvokfyfhR5IE8TDNWWJeITIJj41%2BnR%2Bi8VD%2B3UJk3BIn7x6hAv3%2BdHToZUMmweQFEexidi82kGldofDsw5NY3h%2Bko3J%2FNJz2GaPF5OqcsTy58tNRvz%2F%2FngDZ5WNyRjhAbmzO4rAKY44HyerfK11%2FHr51ogGUlug0p%2FvUPo12z7C6iIR22IDMq%2B08NDa4TtFb%2Bfo%2FQt%2FT8QLzpy8VbbNmZvs8pBxJ8KL%2FrvaShzef1p%2F7bSh%2FxAaV9x0I0GJi1IVK1HEimma2v1G%2FMNz6lr0GOqUBhsLEEBKPRjTsEWp4bEY6tq4t8bnYEMyqv5jP2uyewbwOIzOTTma62AZcjbsYaHqnlyxknLM2iY2vHzDfahRB6iY9kcL5p6HV3mwCdLd74QBDy1t258%2BehHLrSnsOZiM5w5ChiV9QELdapihItnLEVq%2BK1r%2BA7fvUCd90UPBHcOxF9ixVyrSvxwOBaUxRD7uFLbsns%2BWSYdoIUCltdRtenti12Vdn&X-Amz-Signature=a2ebbf53adb8d35f1ef69ce1133c56256375f433571cee68ac3aaeb42d09933b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FJKAWY2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDeAqZFBZ7mDaur%2Ba0Umv0COGg1cWOAW1A%2BN685WRlBjAiEA6eIvckn%2FmxYJErt5aR05sQUGBNKiV%2BjDenQuTrAy4UIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDNhdUkxlTMTX4QP%2BCrcA09uzxxeGqCgp396pIHGOUB6eDrV%2FkIhhUH35D3qz%2BMhj2v4AYnlR46aODrlcaELQbH4vGmUhQ2N0qPpyYzvsN%2BoypaSD6UR8akF%2FzKoMjpe%2B%2BEAwDFvD0DSTd9zg4AEeM6S0%2BluRAS75tysdMNXLqlJ8dzaPd0qQ8LzhzGbLROfckgdyYDk8fjZ0PLsagyIJfC591cgV3LTpot3AE6DzI5erfU0SWue8%2FWsYeSLQcCohjwixsoL%2BKznfH1J0Ahx3zVPjzhY%2BVbOhgRwUB3VMOCcG87aUe1fdgWajA8OlCw2tlWHnrajWjr64KO2ULDkMs7pBahh3gjhyM27vKJgPiZk1db1cymjjgINMkhBKOraInoqUvokfyfhR5IE8TDNWWJeITIJj41%2BnR%2Bi8VD%2B3UJk3BIn7x6hAv3%2BdHToZUMmweQFEexidi82kGldofDsw5NY3h%2Bko3J%2FNJz2GaPF5OqcsTy58tNRvz%2F%2FngDZ5WNyRjhAbmzO4rAKY44HyerfK11%2FHr51ogGUlug0p%2FvUPo12z7C6iIR22IDMq%2B08NDa4TtFb%2Bfo%2FQt%2FT8QLzpy8VbbNmZvs8pBxJ8KL%2FrvaShzef1p%2F7bSh%2FxAaV9x0I0GJi1IVK1HEimma2v1G%2FMNz6lr0GOqUBhsLEEBKPRjTsEWp4bEY6tq4t8bnYEMyqv5jP2uyewbwOIzOTTma62AZcjbsYaHqnlyxknLM2iY2vHzDfahRB6iY9kcL5p6HV3mwCdLd74QBDy1t258%2BehHLrSnsOZiM5w5ChiV9QELdapihItnLEVq%2BK1r%2BA7fvUCd90UPBHcOxF9ixVyrSvxwOBaUxRD7uFLbsns%2BWSYdoIUCltdRtenti12Vdn&X-Amz-Signature=5f2c08999a0ecdebc5ce5a4053bfc7c019245275a39fa7973bf7b1441b7e75a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QOEWOQ6%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5j1%2FjnVu9URfzgtSDS95ui48uqm87J%2Fqp6qiVcPkoagIgO72%2FSbvJMeGRlPQQGfgiFrJhMnTdLg0l%2BnrmBr9JyjYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDnK6gGgzyVf%2FfgK8CrcA6SFAUQT3GFQhehnbFi47KnuP8y0dIeJs5lQFVa2wzTquqjaL8Hvzpy6sxSR0T2srrOmaoyzsZSG%2BwzJPItfymZESb8YrBVKzuXoZ8pZfi8UupktfdcmJPQBb1wyBKUQbdQWEjeoH1cviGQfQrtNbdvtTEFACfx6fHJZOzIAp5VEuJv0QNAqba9x9Jb%2F%2BqTSJojOPam6OS14HZztYfhoA0QPxZ3iuvYu925vZs3AfRz9OHj2yd2%2Biq1jRsPQkG9PjVRwVlBYgUAbcfrqbf88mkf2QhU2NwF%2B%2F2bD6%2FXj8YpskhhwWl2hFP%2BYHduYpXQC9A5vXI4h5Fto1MsmF9APPWLhMW%2BIwTL53XE5ILlRwB4hC7Oo905koH1eazs7a56kd%2FntGznfdElb9q1IA4rh5LFjReCFI2Oo5i9tsyoKZwMb%2BNNuIN9juwOkOqcvUqeLYwl3Xxs8KgKbsTZA8lCudoIwbR1DAzrK4nn7OQtaw6XrYSzKPzPXl3rLAghwChag%2F89aQKfHX3OwM6LjrJ1Jcvl3mdzLkoMh8Z76rH%2FmcRBXCOpIHMaTE8MASJgd%2FtjNDeMgRyxsTziErjIMeZLysVceDKM2xkQsyRonC7y6o9BXf7%2BSKmOpV5xkBhzoMPmB2L4GOqUBUxpfB6XTmkNDCzYB0MzZlWV04j%2FNnnYr%2BZe3VX6KqV3mlyT4naRVIExopoixjnLiMF%2F014AH6ZY0mgCTqQunY8y%2Fm8oB39urIQqGxjgmfO0v48qktAruI%2FL%2FKECJ8l%2BEy5u8Wcvp6VLGvR%2BdokqlCjDnnNnK9%2FpUBeOQeyaaNMKunxKP5bdxmY84oA7hmLgxYdyByZ%2FpIxMn5J2x3KxwcWqfSPot&X-Amz-Signature=30cb42fbb1f7b33b3230f4633679af5b52660d331efa23abece38238173fa36d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QOEWOQ6%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5j1%2FjnVu9URfzgtSDS95ui48uqm87J%2Fqp6qiVcPkoagIgO72%2FSbvJMeGRlPQQGfgiFrJhMnTdLg0l%2BnrmBr9JyjYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDnK6gGgzyVf%2FfgK8CrcA6SFAUQT3GFQhehnbFi47KnuP8y0dIeJs5lQFVa2wzTquqjaL8Hvzpy6sxSR0T2srrOmaoyzsZSG%2BwzJPItfymZESb8YrBVKzuXoZ8pZfi8UupktfdcmJPQBb1wyBKUQbdQWEjeoH1cviGQfQrtNbdvtTEFACfx6fHJZOzIAp5VEuJv0QNAqba9x9Jb%2F%2BqTSJojOPam6OS14HZztYfhoA0QPxZ3iuvYu925vZs3AfRz9OHj2yd2%2Biq1jRsPQkG9PjVRwVlBYgUAbcfrqbf88mkf2QhU2NwF%2B%2F2bD6%2FXj8YpskhhwWl2hFP%2BYHduYpXQC9A5vXI4h5Fto1MsmF9APPWLhMW%2BIwTL53XE5ILlRwB4hC7Oo905koH1eazs7a56kd%2FntGznfdElb9q1IA4rh5LFjReCFI2Oo5i9tsyoKZwMb%2BNNuIN9juwOkOqcvUqeLYwl3Xxs8KgKbsTZA8lCudoIwbR1DAzrK4nn7OQtaw6XrYSzKPzPXl3rLAghwChag%2F89aQKfHX3OwM6LjrJ1Jcvl3mdzLkoMh8Z76rH%2FmcRBXCOpIHMaTE8MASJgd%2FtjNDeMgRyxsTziErjIMeZLysVceDKM2xkQsyRonC7y6o9BXf7%2BSKmOpV5xkBhzoMPmB2L4GOqUBUxpfB6XTmkNDCzYB0MzZlWV04j%2FNnnYr%2BZe3VX6KqV3mlyT4naRVIExopoixjnLiMF%2F014AH6ZY0mgCTqQunY8y%2Fm8oB39urIQqGxjgmfO0v48qktAruI%2FL%2FKECJ8l%2BEy5u8Wcvp6VLGvR%2BdokqlCjDnnNnK9%2FpUBeOQeyaaNMKunxKP5bdxmY84oA7hmLgxYdyByZ%2FpIxMn5J2x3KxwcWqfSPot&X-Amz-Signature=30994e149c936048c81df2970136c413bd2143c383a2becabd191ad43b7548e6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QOEWOQ6%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5j1%2FjnVu9URfzgtSDS95ui48uqm87J%2Fqp6qiVcPkoagIgO72%2FSbvJMeGRlPQQGfgiFrJhMnTdLg0l%2BnrmBr9JyjYq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDDnK6gGgzyVf%2FfgK8CrcA6SFAUQT3GFQhehnbFi47KnuP8y0dIeJs5lQFVa2wzTquqjaL8Hvzpy6sxSR0T2srrOmaoyzsZSG%2BwzJPItfymZESb8YrBVKzuXoZ8pZfi8UupktfdcmJPQBb1wyBKUQbdQWEjeoH1cviGQfQrtNbdvtTEFACfx6fHJZOzIAp5VEuJv0QNAqba9x9Jb%2F%2BqTSJojOPam6OS14HZztYfhoA0QPxZ3iuvYu925vZs3AfRz9OHj2yd2%2Biq1jRsPQkG9PjVRwVlBYgUAbcfrqbf88mkf2QhU2NwF%2B%2F2bD6%2FXj8YpskhhwWl2hFP%2BYHduYpXQC9A5vXI4h5Fto1MsmF9APPWLhMW%2BIwTL53XE5ILlRwB4hC7Oo905koH1eazs7a56kd%2FntGznfdElb9q1IA4rh5LFjReCFI2Oo5i9tsyoKZwMb%2BNNuIN9juwOkOqcvUqeLYwl3Xxs8KgKbsTZA8lCudoIwbR1DAzrK4nn7OQtaw6XrYSzKPzPXl3rLAghwChag%2F89aQKfHX3OwM6LjrJ1Jcvl3mdzLkoMh8Z76rH%2FmcRBXCOpIHMaTE8MASJgd%2FtjNDeMgRyxsTziErjIMeZLysVceDKM2xkQsyRonC7y6o9BXf7%2BSKmOpV5xkBhzoMPmB2L4GOqUBUxpfB6XTmkNDCzYB0MzZlWV04j%2FNnnYr%2BZe3VX6KqV3mlyT4naRVIExopoixjnLiMF%2F014AH6ZY0mgCTqQunY8y%2Fm8oB39urIQqGxjgmfO0v48qktAruI%2FL%2FKECJ8l%2BEy5u8Wcvp6VLGvR%2BdokqlCjDnnNnK9%2FpUBeOQeyaaNMKunxKP5bdxmY84oA7hmLgxYdyByZ%2FpIxMn5J2x3KxwcWqfSPot&X-Amz-Signature=ea4d787457e3253a8702f954b866dfb2f42f863f158e905a8c03624c29e283c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

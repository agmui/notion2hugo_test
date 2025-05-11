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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VT6HPW%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCTuHwMNAq4KLxDi4AUiI%2BLamf4mwo9JQ2KD2iRy1smyAIhAL9hwJb2hquUFMAIbdwLTNhmL6T9hm%2BnyP5Wh2QoeyOxKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwphgvRXH%2BQ9a6zV7oq3AOPlROu0qQvAkfTY1zIDyisTAnREj%2F%2BQf55QYsyePinRYrQ46KoUe8EeN%2FQqTpTiKOXH7p9yG6ROTcHOLNcsz2u6QbigZhWui2xdnDGwrKWNV%2FZQobCl8UgtFNcg%2FGwacpP42o5%2BE7%2BYVwnwhD9bidBl0eqHIHwWktF88hi18BAdHoF2uk3PgbSifjk5pplnWrGjvoGoMicCgns3JaYWT7dCzzPvr%2FCom%2BEW6qSMDQU2um%2Fkss%2BaYvvpVLJUBXdgpEOK5M8STsgEpTUZ86JNyymKCbHOGI98rFhBrgzlE9yCivW7i7C7S5xHQjKtdra0Xp4K5n910xFJ%2FtZi802JVlyob%2BjcolL3GR%2FVlGJzq1XcsdTLBj73CYDNpHX6%2FZpgOuCzxSyWnT04ku%2BcllcfwyuWYCGZ1rlX9e0YUxHCgyo3wz8OGm9gcKZN8EJL%2FP5KqI7AB8tOz%2BTQop%2F%2BvyGlerAl5diFJ5LHWimM6CkeKg6sI9HbiRthqhDz0JIZnrLLbE6fL3YgxeLAMxQbOIFRPvhOF3xSlD3BMzUhfCFKK8doa%2F7GIckXHboL2HbDZzznK9sNQR7KUkzA3A9Uws0mQsCwx%2Bl5AmkrfP9mvQJjNMhoo7b99ewVmxNZ9yHuDCvoYPBBjqkAYNgFVmNBkGT25zHx534rtqyiUNKnwf%2FQHASn%2FOwL0B5%2F6BNzr7EoKUP%2B29TzTC3jwi%2BC1gzoqBH3eeBwAzrjeY6x%2BV2xABjd3ZXl84n8nDtQF0tKyXdaT6AN8wiLid6XuI57GDwsQu0IX7z0aYlQsY2L%2B2ODYCRs38Osyvx6%2FYtruK8cGisHv4jZNm7E4qOprd96pJDLPA8HRPrFjrx6kxkeeyQ&X-Amz-Signature=5ed0381c76813b4bd53017f93c543d11e253724787c6aa0565713c0cbbee9992&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VT6HPW%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCTuHwMNAq4KLxDi4AUiI%2BLamf4mwo9JQ2KD2iRy1smyAIhAL9hwJb2hquUFMAIbdwLTNhmL6T9hm%2BnyP5Wh2QoeyOxKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwphgvRXH%2BQ9a6zV7oq3AOPlROu0qQvAkfTY1zIDyisTAnREj%2F%2BQf55QYsyePinRYrQ46KoUe8EeN%2FQqTpTiKOXH7p9yG6ROTcHOLNcsz2u6QbigZhWui2xdnDGwrKWNV%2FZQobCl8UgtFNcg%2FGwacpP42o5%2BE7%2BYVwnwhD9bidBl0eqHIHwWktF88hi18BAdHoF2uk3PgbSifjk5pplnWrGjvoGoMicCgns3JaYWT7dCzzPvr%2FCom%2BEW6qSMDQU2um%2Fkss%2BaYvvpVLJUBXdgpEOK5M8STsgEpTUZ86JNyymKCbHOGI98rFhBrgzlE9yCivW7i7C7S5xHQjKtdra0Xp4K5n910xFJ%2FtZi802JVlyob%2BjcolL3GR%2FVlGJzq1XcsdTLBj73CYDNpHX6%2FZpgOuCzxSyWnT04ku%2BcllcfwyuWYCGZ1rlX9e0YUxHCgyo3wz8OGm9gcKZN8EJL%2FP5KqI7AB8tOz%2BTQop%2F%2BvyGlerAl5diFJ5LHWimM6CkeKg6sI9HbiRthqhDz0JIZnrLLbE6fL3YgxeLAMxQbOIFRPvhOF3xSlD3BMzUhfCFKK8doa%2F7GIckXHboL2HbDZzznK9sNQR7KUkzA3A9Uws0mQsCwx%2Bl5AmkrfP9mvQJjNMhoo7b99ewVmxNZ9yHuDCvoYPBBjqkAYNgFVmNBkGT25zHx534rtqyiUNKnwf%2FQHASn%2FOwL0B5%2F6BNzr7EoKUP%2B29TzTC3jwi%2BC1gzoqBH3eeBwAzrjeY6x%2BV2xABjd3ZXl84n8nDtQF0tKyXdaT6AN8wiLid6XuI57GDwsQu0IX7z0aYlQsY2L%2B2ODYCRs38Osyvx6%2FYtruK8cGisHv4jZNm7E4qOprd96pJDLPA8HRPrFjrx6kxkeeyQ&X-Amz-Signature=38e0741a7bc745f2ac8853924cd93dc0a0a87a11834c589b0ef70ff59218f5d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2VT6HPW%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCTuHwMNAq4KLxDi4AUiI%2BLamf4mwo9JQ2KD2iRy1smyAIhAL9hwJb2hquUFMAIbdwLTNhmL6T9hm%2BnyP5Wh2QoeyOxKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwphgvRXH%2BQ9a6zV7oq3AOPlROu0qQvAkfTY1zIDyisTAnREj%2F%2BQf55QYsyePinRYrQ46KoUe8EeN%2FQqTpTiKOXH7p9yG6ROTcHOLNcsz2u6QbigZhWui2xdnDGwrKWNV%2FZQobCl8UgtFNcg%2FGwacpP42o5%2BE7%2BYVwnwhD9bidBl0eqHIHwWktF88hi18BAdHoF2uk3PgbSifjk5pplnWrGjvoGoMicCgns3JaYWT7dCzzPvr%2FCom%2BEW6qSMDQU2um%2Fkss%2BaYvvpVLJUBXdgpEOK5M8STsgEpTUZ86JNyymKCbHOGI98rFhBrgzlE9yCivW7i7C7S5xHQjKtdra0Xp4K5n910xFJ%2FtZi802JVlyob%2BjcolL3GR%2FVlGJzq1XcsdTLBj73CYDNpHX6%2FZpgOuCzxSyWnT04ku%2BcllcfwyuWYCGZ1rlX9e0YUxHCgyo3wz8OGm9gcKZN8EJL%2FP5KqI7AB8tOz%2BTQop%2F%2BvyGlerAl5diFJ5LHWimM6CkeKg6sI9HbiRthqhDz0JIZnrLLbE6fL3YgxeLAMxQbOIFRPvhOF3xSlD3BMzUhfCFKK8doa%2F7GIckXHboL2HbDZzznK9sNQR7KUkzA3A9Uws0mQsCwx%2Bl5AmkrfP9mvQJjNMhoo7b99ewVmxNZ9yHuDCvoYPBBjqkAYNgFVmNBkGT25zHx534rtqyiUNKnwf%2FQHASn%2FOwL0B5%2F6BNzr7EoKUP%2B29TzTC3jwi%2BC1gzoqBH3eeBwAzrjeY6x%2BV2xABjd3ZXl84n8nDtQF0tKyXdaT6AN8wiLid6XuI57GDwsQu0IX7z0aYlQsY2L%2B2ODYCRs38Osyvx6%2FYtruK8cGisHv4jZNm7E4qOprd96pJDLPA8HRPrFjrx6kxkeeyQ&X-Amz-Signature=4ed8beb8028fb490c1479e02038978dd5420ae91e0f08613f3182536a6a0afc1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

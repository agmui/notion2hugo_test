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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXIKYNU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTOAF1rZk9H5k%2Fv0uQxDAAwsq7BBbIieEN8LU5amwC9gIgGUL9zAAhCwJ3ChTiv88FSLr4AlwWgRbb9I6Kd93BT9gqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIXgcc9fBVVhWsbWSrcAyPpvJ%2Fi7KxdVgdd3cQUQdNAAssPWAVuywbO%2BjFa6nufOAa80q6cSGQ4sW7Pv%2BmKB8%2BXz3z9vhUmrze5aG1S%2BvE%2FeRjPI17fbDZye6mucQxrCbU6Eri6O%2BITic8El6z0V8N6Qys%2BAfBNtXPzp%2BJDEwhQe9RZb%2BNKUB5uzSjBBzZasYlfromYQw7QqXcW4%2FC%2BUI66zClIRNud78EI%2BNoO6BNgSZgkHue%2Fw%2FEfFGuZrRD0QcgY%2Bbc13uoY7gGzaXeLhqj9I5Be666T6wPdzA%2FUhoU5TYLfeTms3qDFsI0KHE%2FYMPOkMl9r8f1e5A8vSum4%2B88T7tvP%2BzA5YM%2BV3Lc%2BwfEJFuOnS8%2FO9WdbzxK7jwLZoBnJWcMX6X1LGvNBguiNXuVXAOXJsTqL9bae4itg3ysQm7jEDAOFez2gO9%2FxJs5Z9F2nKE6T0QHBowS1%2FMVmL7V9mdAinDucsk1hibHdRaD60yvJ7%2BWQPooORmbIeWEdOA6aMprBCqq%2FvCzS%2BzbafR3GpY6qV9CZH6P2WBlAUxVUr4rYGPBJDHdIjQhGeWQOIrFsNCj8k8IhZISrTrf9QBnJeX6K7pbFTaoztkVE7jUiV7oiEXjz6I%2F3RaQKIhvBMpj9ejzKvsSzl%2BSqMLefzsUGOqUB8YO3Hq85fezQGV9BoTwTcbfWU0SRD%2FufmEyZ2OLGtz3W91zBwTZqnDcOaAsKJn%2Fcowc18i96ljMJR8SXbjL1A8dAqy6qCp%2FOjUB0PMbiwwY7A3aVhWqepjs5jKLWgMxynRdJLdJ5aAeAJbATHGuFKLN71TyhmEyMUXOOWMatGFXBHWiwXDlYwQwuo%2FDyQOsjf%2Ba06zukQ82COI6%2Fpc4B5vC67EnS&X-Amz-Signature=859273c77c28a701e0b901427fe34036f5c20a24da18aaf3ceaf623cc8737896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXIKYNU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTOAF1rZk9H5k%2Fv0uQxDAAwsq7BBbIieEN8LU5amwC9gIgGUL9zAAhCwJ3ChTiv88FSLr4AlwWgRbb9I6Kd93BT9gqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIXgcc9fBVVhWsbWSrcAyPpvJ%2Fi7KxdVgdd3cQUQdNAAssPWAVuywbO%2BjFa6nufOAa80q6cSGQ4sW7Pv%2BmKB8%2BXz3z9vhUmrze5aG1S%2BvE%2FeRjPI17fbDZye6mucQxrCbU6Eri6O%2BITic8El6z0V8N6Qys%2BAfBNtXPzp%2BJDEwhQe9RZb%2BNKUB5uzSjBBzZasYlfromYQw7QqXcW4%2FC%2BUI66zClIRNud78EI%2BNoO6BNgSZgkHue%2Fw%2FEfFGuZrRD0QcgY%2Bbc13uoY7gGzaXeLhqj9I5Be666T6wPdzA%2FUhoU5TYLfeTms3qDFsI0KHE%2FYMPOkMl9r8f1e5A8vSum4%2B88T7tvP%2BzA5YM%2BV3Lc%2BwfEJFuOnS8%2FO9WdbzxK7jwLZoBnJWcMX6X1LGvNBguiNXuVXAOXJsTqL9bae4itg3ysQm7jEDAOFez2gO9%2FxJs5Z9F2nKE6T0QHBowS1%2FMVmL7V9mdAinDucsk1hibHdRaD60yvJ7%2BWQPooORmbIeWEdOA6aMprBCqq%2FvCzS%2BzbafR3GpY6qV9CZH6P2WBlAUxVUr4rYGPBJDHdIjQhGeWQOIrFsNCj8k8IhZISrTrf9QBnJeX6K7pbFTaoztkVE7jUiV7oiEXjz6I%2F3RaQKIhvBMpj9ejzKvsSzl%2BSqMLefzsUGOqUB8YO3Hq85fezQGV9BoTwTcbfWU0SRD%2FufmEyZ2OLGtz3W91zBwTZqnDcOaAsKJn%2Fcowc18i96ljMJR8SXbjL1A8dAqy6qCp%2FOjUB0PMbiwwY7A3aVhWqepjs5jKLWgMxynRdJLdJ5aAeAJbATHGuFKLN71TyhmEyMUXOOWMatGFXBHWiwXDlYwQwuo%2FDyQOsjf%2Ba06zukQ82COI6%2Fpc4B5vC67EnS&X-Amz-Signature=4fdbb9b87087c2d75fdbe5b20c3f1378bd629d7be4cc3355c83a51c9b845fcbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAXIKYNU%2F20250831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250831T013814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTOAF1rZk9H5k%2Fv0uQxDAAwsq7BBbIieEN8LU5amwC9gIgGUL9zAAhCwJ3ChTiv88FSLr4AlwWgRbb9I6Kd93BT9gqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBIXgcc9fBVVhWsbWSrcAyPpvJ%2Fi7KxdVgdd3cQUQdNAAssPWAVuywbO%2BjFa6nufOAa80q6cSGQ4sW7Pv%2BmKB8%2BXz3z9vhUmrze5aG1S%2BvE%2FeRjPI17fbDZye6mucQxrCbU6Eri6O%2BITic8El6z0V8N6Qys%2BAfBNtXPzp%2BJDEwhQe9RZb%2BNKUB5uzSjBBzZasYlfromYQw7QqXcW4%2FC%2BUI66zClIRNud78EI%2BNoO6BNgSZgkHue%2Fw%2FEfFGuZrRD0QcgY%2Bbc13uoY7gGzaXeLhqj9I5Be666T6wPdzA%2FUhoU5TYLfeTms3qDFsI0KHE%2FYMPOkMl9r8f1e5A8vSum4%2B88T7tvP%2BzA5YM%2BV3Lc%2BwfEJFuOnS8%2FO9WdbzxK7jwLZoBnJWcMX6X1LGvNBguiNXuVXAOXJsTqL9bae4itg3ysQm7jEDAOFez2gO9%2FxJs5Z9F2nKE6T0QHBowS1%2FMVmL7V9mdAinDucsk1hibHdRaD60yvJ7%2BWQPooORmbIeWEdOA6aMprBCqq%2FvCzS%2BzbafR3GpY6qV9CZH6P2WBlAUxVUr4rYGPBJDHdIjQhGeWQOIrFsNCj8k8IhZISrTrf9QBnJeX6K7pbFTaoztkVE7jUiV7oiEXjz6I%2F3RaQKIhvBMpj9ejzKvsSzl%2BSqMLefzsUGOqUB8YO3Hq85fezQGV9BoTwTcbfWU0SRD%2FufmEyZ2OLGtz3W91zBwTZqnDcOaAsKJn%2Fcowc18i96ljMJR8SXbjL1A8dAqy6qCp%2FOjUB0PMbiwwY7A3aVhWqepjs5jKLWgMxynRdJLdJ5aAeAJbATHGuFKLN71TyhmEyMUXOOWMatGFXBHWiwXDlYwQwuo%2FDyQOsjf%2Ba06zukQ82COI6%2Fpc4B5vC67EnS&X-Amz-Signature=de8b2497b84a4b905c608f7f56698c8731e3bb2d02c1773e7cfc4560ca9eaefb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJJS2D4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8kwMPZC4cR4qXWffVlAsRpB9Pr5DL7RJhHbvfDzUI%2BwIhAKjmoNXgpRImc2wi%2FS%2Bo%2F1AF%2BknH7JQclIbSyVlBZBu5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyrZyia64q9HR9o8gcq3AOJ6cYAipWJU6Um4H0OeaaEAHYoZvOxPHnipNs9A4VUgiVWenPjJqZxWVDhF7TpA%2F3TOrsm53Q3UYsCdllLJNb3IVVBhDGExrqCHaWQasmxAh9qlSOvD94HEiQNZKGCzaSkZSB0teKMXHPS9oKmXN14m7RaQv5eN0EyDXHOVFncd4WRKYkRKBYPnB17ioYYzr8BJZ44RWYQEQxOEp5LpcQTxniu6qo6r3m4%2F3sI1s6dZLaTS9ppAq5p88srvu6dFQfl1QVzzIStV7KpqMjjMim5PeKrMOsLC1BEMaQIEUDCcfhFfK2jg9jpTlkz8VkdboVPAcWXDWb5461OpqpsOhWltGjtG1pFPBXV5gbkSDt%2F0LaCaLrfXg95n91Bxh%2B8uJWkoi8Ux9%2FGhUwZvFz2XbTOUALYbukBfZ5M516AFyQPY%2B0BQPTgVg1Y2y9rN3aPqHXhs9AZE9CK8zonN4H7Es57oAYMsbeMVvKcoM986TVRR%2BZnmURrQ1KAyFrC9K7Ktl2qFw8Xih%2F1rLKaPnI%2B3fDc8XyBXCizix6A0OnMFa64ZW0M6hFKWLQn1tGfXztoYw7lifpYQILtw%2BuuFYCyTij2I4Rcj6pSGeFbWkekBa%2FW6iTqnaetQtH98aOpcjC2sb%2B%2FBjqkAZ4c6tL%2FCOUwOXAS81DqQgJva2E%2F9bc2HKgA6Rz9dw23inDcttb5d4uKqXzcdsB89tvLYlQ4Jv1AjlOiGT5g4Lxc2df5UQ3AIiIceJoN7T7C7kfzcjOmtE%2Bd36nopYuN8v1CXW1gbuGUzoLavB901yFrJIh8qWzucQeljdXf0NZm0FH%2FtGcv%2BtFvQeOoZ0JO09OwIFYtZNQcJz8dlvZkdPUgGvKq&X-Amz-Signature=bec13747589c7cd4ce790470a59da26f606afee0a8b0e3ea6959815622c8ebda&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJJS2D4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8kwMPZC4cR4qXWffVlAsRpB9Pr5DL7RJhHbvfDzUI%2BwIhAKjmoNXgpRImc2wi%2FS%2Bo%2F1AF%2BknH7JQclIbSyVlBZBu5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyrZyia64q9HR9o8gcq3AOJ6cYAipWJU6Um4H0OeaaEAHYoZvOxPHnipNs9A4VUgiVWenPjJqZxWVDhF7TpA%2F3TOrsm53Q3UYsCdllLJNb3IVVBhDGExrqCHaWQasmxAh9qlSOvD94HEiQNZKGCzaSkZSB0teKMXHPS9oKmXN14m7RaQv5eN0EyDXHOVFncd4WRKYkRKBYPnB17ioYYzr8BJZ44RWYQEQxOEp5LpcQTxniu6qo6r3m4%2F3sI1s6dZLaTS9ppAq5p88srvu6dFQfl1QVzzIStV7KpqMjjMim5PeKrMOsLC1BEMaQIEUDCcfhFfK2jg9jpTlkz8VkdboVPAcWXDWb5461OpqpsOhWltGjtG1pFPBXV5gbkSDt%2F0LaCaLrfXg95n91Bxh%2B8uJWkoi8Ux9%2FGhUwZvFz2XbTOUALYbukBfZ5M516AFyQPY%2B0BQPTgVg1Y2y9rN3aPqHXhs9AZE9CK8zonN4H7Es57oAYMsbeMVvKcoM986TVRR%2BZnmURrQ1KAyFrC9K7Ktl2qFw8Xih%2F1rLKaPnI%2B3fDc8XyBXCizix6A0OnMFa64ZW0M6hFKWLQn1tGfXztoYw7lifpYQILtw%2BuuFYCyTij2I4Rcj6pSGeFbWkekBa%2FW6iTqnaetQtH98aOpcjC2sb%2B%2FBjqkAZ4c6tL%2FCOUwOXAS81DqQgJva2E%2F9bc2HKgA6Rz9dw23inDcttb5d4uKqXzcdsB89tvLYlQ4Jv1AjlOiGT5g4Lxc2df5UQ3AIiIceJoN7T7C7kfzcjOmtE%2Bd36nopYuN8v1CXW1gbuGUzoLavB901yFrJIh8qWzucQeljdXf0NZm0FH%2FtGcv%2BtFvQeOoZ0JO09OwIFYtZNQcJz8dlvZkdPUgGvKq&X-Amz-Signature=7f6b864df714fd82cc7b6a5e1f8e0ab5d3bfb6b0b6310123d7c73d0456c0fb10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XJJS2D4%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8kwMPZC4cR4qXWffVlAsRpB9Pr5DL7RJhHbvfDzUI%2BwIhAKjmoNXgpRImc2wi%2FS%2Bo%2F1AF%2BknH7JQclIbSyVlBZBu5Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyrZyia64q9HR9o8gcq3AOJ6cYAipWJU6Um4H0OeaaEAHYoZvOxPHnipNs9A4VUgiVWenPjJqZxWVDhF7TpA%2F3TOrsm53Q3UYsCdllLJNb3IVVBhDGExrqCHaWQasmxAh9qlSOvD94HEiQNZKGCzaSkZSB0teKMXHPS9oKmXN14m7RaQv5eN0EyDXHOVFncd4WRKYkRKBYPnB17ioYYzr8BJZ44RWYQEQxOEp5LpcQTxniu6qo6r3m4%2F3sI1s6dZLaTS9ppAq5p88srvu6dFQfl1QVzzIStV7KpqMjjMim5PeKrMOsLC1BEMaQIEUDCcfhFfK2jg9jpTlkz8VkdboVPAcWXDWb5461OpqpsOhWltGjtG1pFPBXV5gbkSDt%2F0LaCaLrfXg95n91Bxh%2B8uJWkoi8Ux9%2FGhUwZvFz2XbTOUALYbukBfZ5M516AFyQPY%2B0BQPTgVg1Y2y9rN3aPqHXhs9AZE9CK8zonN4H7Es57oAYMsbeMVvKcoM986TVRR%2BZnmURrQ1KAyFrC9K7Ktl2qFw8Xih%2F1rLKaPnI%2B3fDc8XyBXCizix6A0OnMFa64ZW0M6hFKWLQn1tGfXztoYw7lifpYQILtw%2BuuFYCyTij2I4Rcj6pSGeFbWkekBa%2FW6iTqnaetQtH98aOpcjC2sb%2B%2FBjqkAZ4c6tL%2FCOUwOXAS81DqQgJva2E%2F9bc2HKgA6Rz9dw23inDcttb5d4uKqXzcdsB89tvLYlQ4Jv1AjlOiGT5g4Lxc2df5UQ3AIiIceJoN7T7C7kfzcjOmtE%2Bd36nopYuN8v1CXW1gbuGUzoLavB901yFrJIh8qWzucQeljdXf0NZm0FH%2FtGcv%2BtFvQeOoZ0JO09OwIFYtZNQcJz8dlvZkdPUgGvKq&X-Amz-Signature=c543f1ac8c72d641370f89084abcabedd75b83939b556af14c44b266df6b1b82&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

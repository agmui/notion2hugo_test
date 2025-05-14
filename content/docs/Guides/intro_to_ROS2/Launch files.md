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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRSWKPT%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDkAmFjpeqHo4Jd9H%2BNxQuXblDHe4mAmtFafeXTANBAcgIhAOt%2FrGtLVB7YwfLidyEnqNwzjbb4xq8XakjB0aajbEtHKv8DCBgQABoMNjM3NDIzMTgzODA1IgzJo4dyWVhO6JlGEZEq3APV94%2B38Fh1ED3SLewMDoQe2kV2NTg2OVPW7CxEtuLhCVnLrIi2bN6PpSL02S%2FQJxnYKItW8go9e%2BtwMSjzJ4kBmloW8gfYAaPACGVDKvG4haG%2BwWFZI023lMp84baPxe6uZMmrdvDynyWdWdDtkpiTQiZ60I1l9Gck4o5o2n3V7rHMRbpNBruAGkVy%2FHEoKtzmyj1camezW2VQgFNchC3SSod7OGFo9Ua2GXsvvf%2F%2BU0kXr38dp0zcbfgQz40gVHNzebyDici%2BFuZrHkvWXUZKJHmtuSKrgMauLJhquHlM9egH3l02t%2Fpv7H%2Bfr9MPIZwH2lOKaJw0q8cM5ADJFjXYW1HrkIKEW2wimxmd%2FviA%2BkGyPNbqJ8wlzPBve9ozhsIind%2BsJqoJHmFHxpe5PKF2v6QkMQORXZ3%2FEGQjQ5t64VNNr6AmEAGAA7mh82xBtpMwXisEui1UyHXbQBb4A4OKhOYwQJ0il9NjXaMvZ%2BWOKbyJePeScqEOHsqbbSzkGZQUtOlquaW8DlzoIEn3inUSbodWXytxNb69D0vi2UG70NVM3rLadCTsikJiKEaT5qpsPsPSq8BgG1LaUVSBh5epQW0FpQwXdf1WZvOjwRlLzKaqxCxkifLwLgVzdTCb1pLBBjqkAV9nCWX4t9trnE2eX5Jd%2FpjGaNAH%2FUXPJ8QOf%2FSsG3uFwEoDZjDzqvNb1zZcB5mRNeZ6gilrHdsVlLHFayuW2VhsL7DPshF%2Bo04illkqq8Ytvq5oiF9J3TWm5awyTPMLWPB3eErUel3GkJ1vGnNL7KtWdegSfKZSNaBoOx9ygcytf%2BRtoGNPElYVviEedlfCwcaBGbXaD0%2F92KjbyZMAafxfvGav&X-Amz-Signature=c82eeb09f44e7bf6dde0126ae5044a541e9c3795f6b2088dab42717ba57ea5c4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRSWKPT%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDkAmFjpeqHo4Jd9H%2BNxQuXblDHe4mAmtFafeXTANBAcgIhAOt%2FrGtLVB7YwfLidyEnqNwzjbb4xq8XakjB0aajbEtHKv8DCBgQABoMNjM3NDIzMTgzODA1IgzJo4dyWVhO6JlGEZEq3APV94%2B38Fh1ED3SLewMDoQe2kV2NTg2OVPW7CxEtuLhCVnLrIi2bN6PpSL02S%2FQJxnYKItW8go9e%2BtwMSjzJ4kBmloW8gfYAaPACGVDKvG4haG%2BwWFZI023lMp84baPxe6uZMmrdvDynyWdWdDtkpiTQiZ60I1l9Gck4o5o2n3V7rHMRbpNBruAGkVy%2FHEoKtzmyj1camezW2VQgFNchC3SSod7OGFo9Ua2GXsvvf%2F%2BU0kXr38dp0zcbfgQz40gVHNzebyDici%2BFuZrHkvWXUZKJHmtuSKrgMauLJhquHlM9egH3l02t%2Fpv7H%2Bfr9MPIZwH2lOKaJw0q8cM5ADJFjXYW1HrkIKEW2wimxmd%2FviA%2BkGyPNbqJ8wlzPBve9ozhsIind%2BsJqoJHmFHxpe5PKF2v6QkMQORXZ3%2FEGQjQ5t64VNNr6AmEAGAA7mh82xBtpMwXisEui1UyHXbQBb4A4OKhOYwQJ0il9NjXaMvZ%2BWOKbyJePeScqEOHsqbbSzkGZQUtOlquaW8DlzoIEn3inUSbodWXytxNb69D0vi2UG70NVM3rLadCTsikJiKEaT5qpsPsPSq8BgG1LaUVSBh5epQW0FpQwXdf1WZvOjwRlLzKaqxCxkifLwLgVzdTCb1pLBBjqkAV9nCWX4t9trnE2eX5Jd%2FpjGaNAH%2FUXPJ8QOf%2FSsG3uFwEoDZjDzqvNb1zZcB5mRNeZ6gilrHdsVlLHFayuW2VhsL7DPshF%2Bo04illkqq8Ytvq5oiF9J3TWm5awyTPMLWPB3eErUel3GkJ1vGnNL7KtWdegSfKZSNaBoOx9ygcytf%2BRtoGNPElYVviEedlfCwcaBGbXaD0%2F92KjbyZMAafxfvGav&X-Amz-Signature=5a86dfbb9f9332f6acc0c2ea1d0e95098c76fe8e383e9e98d3fb582dab87abaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBRSWKPT%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDkAmFjpeqHo4Jd9H%2BNxQuXblDHe4mAmtFafeXTANBAcgIhAOt%2FrGtLVB7YwfLidyEnqNwzjbb4xq8XakjB0aajbEtHKv8DCBgQABoMNjM3NDIzMTgzODA1IgzJo4dyWVhO6JlGEZEq3APV94%2B38Fh1ED3SLewMDoQe2kV2NTg2OVPW7CxEtuLhCVnLrIi2bN6PpSL02S%2FQJxnYKItW8go9e%2BtwMSjzJ4kBmloW8gfYAaPACGVDKvG4haG%2BwWFZI023lMp84baPxe6uZMmrdvDynyWdWdDtkpiTQiZ60I1l9Gck4o5o2n3V7rHMRbpNBruAGkVy%2FHEoKtzmyj1camezW2VQgFNchC3SSod7OGFo9Ua2GXsvvf%2F%2BU0kXr38dp0zcbfgQz40gVHNzebyDici%2BFuZrHkvWXUZKJHmtuSKrgMauLJhquHlM9egH3l02t%2Fpv7H%2Bfr9MPIZwH2lOKaJw0q8cM5ADJFjXYW1HrkIKEW2wimxmd%2FviA%2BkGyPNbqJ8wlzPBve9ozhsIind%2BsJqoJHmFHxpe5PKF2v6QkMQORXZ3%2FEGQjQ5t64VNNr6AmEAGAA7mh82xBtpMwXisEui1UyHXbQBb4A4OKhOYwQJ0il9NjXaMvZ%2BWOKbyJePeScqEOHsqbbSzkGZQUtOlquaW8DlzoIEn3inUSbodWXytxNb69D0vi2UG70NVM3rLadCTsikJiKEaT5qpsPsPSq8BgG1LaUVSBh5epQW0FpQwXdf1WZvOjwRlLzKaqxCxkifLwLgVzdTCb1pLBBjqkAV9nCWX4t9trnE2eX5Jd%2FpjGaNAH%2FUXPJ8QOf%2FSsG3uFwEoDZjDzqvNb1zZcB5mRNeZ6gilrHdsVlLHFayuW2VhsL7DPshF%2Bo04illkqq8Ytvq5oiF9J3TWm5awyTPMLWPB3eErUel3GkJ1vGnNL7KtWdegSfKZSNaBoOx9ygcytf%2BRtoGNPElYVviEedlfCwcaBGbXaD0%2F92KjbyZMAafxfvGav&X-Amz-Signature=01e56260c183c012dc72bd9314e4c3f81571b9472f8523e6a6c7538a841d4151&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

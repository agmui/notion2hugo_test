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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZNDPX5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvBw9zRWX2qBAeQwxOnZyuI9hNkJuACJforZ0o1IxxIQIgF0tYi0PucNnemoqGL4eJB3HCVEaw3%2BlYi0SUuWL81xUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP0wO2e004o%2BERFPhyrcAykHS23WzbfxXUyLkCzdFinGZGhDGv8mX%2BSey3WZ5GwA9TefmOoxMYyvHpkt9Qv12F3IUoAdHigbfZZ51iiiK9x4WNFOxKCG2MCLf9KKEs2DgNbE60K5%2FooQV%2Ft5BcGLgyM7zl%2Bxh9rZzUBUdNgHcble6BX8hbAS8PltKbKkz7QEpYa6cTp6c9MN1AThUx6%2BRhqUTmg0b8PU2SYEg1GqmpJOxmTYBebgJlFql5tLF7FhR5tOUAKQ%2Fspyv9i7hSbTr3XzAaQGSUuCmrecANm1XtXSh7vrgKy73M9garaU2FbiqBBFbUvcUZRWyu9L44f6HbGt6lc8pNZqGg%2F12ua%2Fez1nCvt8sBZO1CrKkKMPzjAXL8WF8n6GeUiM0iA5pL7dwxgpSkYNDQq9njcbLF3GtHPpwuTG8sAS10l23ZpYRpIroHkbqLoqs%2FxvxyYIS1dk2YGq%2BbK3PAxehTrIZYYSlYgTDzgfVtpUmm%2FrbyP08AYMQSYaKSE0hdfbg2P618gkZRTnF%2BsZuo0b3hPEcfRPfKpWeiZmc%2BYPUr88mvxvrwU%2FbX3cQsiMunEFG%2FED%2BSiM2qxIajpkxGhcDKBxj2Q8N89lq8ICjGMTYIMYYksS7Y4xFT2wMzMO7IqX2dLLMKzA%2Fb8GOqUBAKZcmPyFcLqAsa33X5npXC8%2BjHa8NG7%2Fe5b3U%2FxFasb8%2FXffbovUyEUHqEWNo%2B4nWAMgotdOZo0Ip2wNTOw1uavdo4j32CJfIHoPIcVRjYOyfz8dyZopsxRXlvNH9B%2FQa3scdxZpUCahHxsyAE6CeS4KeTuvALyeurwUQMHi%2BbZdEeSF0AYzG0y6uVJbtJALkkrBHmX8s%2B7G4Dn0KxpmFNHG13Md&X-Amz-Signature=8010ddb7b98886b449fd0523887cfd249bb8e28e86c96373bf09032a21abc200&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZNDPX5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvBw9zRWX2qBAeQwxOnZyuI9hNkJuACJforZ0o1IxxIQIgF0tYi0PucNnemoqGL4eJB3HCVEaw3%2BlYi0SUuWL81xUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP0wO2e004o%2BERFPhyrcAykHS23WzbfxXUyLkCzdFinGZGhDGv8mX%2BSey3WZ5GwA9TefmOoxMYyvHpkt9Qv12F3IUoAdHigbfZZ51iiiK9x4WNFOxKCG2MCLf9KKEs2DgNbE60K5%2FooQV%2Ft5BcGLgyM7zl%2Bxh9rZzUBUdNgHcble6BX8hbAS8PltKbKkz7QEpYa6cTp6c9MN1AThUx6%2BRhqUTmg0b8PU2SYEg1GqmpJOxmTYBebgJlFql5tLF7FhR5tOUAKQ%2Fspyv9i7hSbTr3XzAaQGSUuCmrecANm1XtXSh7vrgKy73M9garaU2FbiqBBFbUvcUZRWyu9L44f6HbGt6lc8pNZqGg%2F12ua%2Fez1nCvt8sBZO1CrKkKMPzjAXL8WF8n6GeUiM0iA5pL7dwxgpSkYNDQq9njcbLF3GtHPpwuTG8sAS10l23ZpYRpIroHkbqLoqs%2FxvxyYIS1dk2YGq%2BbK3PAxehTrIZYYSlYgTDzgfVtpUmm%2FrbyP08AYMQSYaKSE0hdfbg2P618gkZRTnF%2BsZuo0b3hPEcfRPfKpWeiZmc%2BYPUr88mvxvrwU%2FbX3cQsiMunEFG%2FED%2BSiM2qxIajpkxGhcDKBxj2Q8N89lq8ICjGMTYIMYYksS7Y4xFT2wMzMO7IqX2dLLMKzA%2Fb8GOqUBAKZcmPyFcLqAsa33X5npXC8%2BjHa8NG7%2Fe5b3U%2FxFasb8%2FXffbovUyEUHqEWNo%2B4nWAMgotdOZo0Ip2wNTOw1uavdo4j32CJfIHoPIcVRjYOyfz8dyZopsxRXlvNH9B%2FQa3scdxZpUCahHxsyAE6CeS4KeTuvALyeurwUQMHi%2BbZdEeSF0AYzG0y6uVJbtJALkkrBHmX8s%2B7G4Dn0KxpmFNHG13Md&X-Amz-Signature=f951ecaf4b1b027ae7e3e00fdbe1d38f0809be22f8ab186c7d9f92e1b77d7f30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPZNDPX5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvBw9zRWX2qBAeQwxOnZyuI9hNkJuACJforZ0o1IxxIQIgF0tYi0PucNnemoqGL4eJB3HCVEaw3%2BlYi0SUuWL81xUq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDP0wO2e004o%2BERFPhyrcAykHS23WzbfxXUyLkCzdFinGZGhDGv8mX%2BSey3WZ5GwA9TefmOoxMYyvHpkt9Qv12F3IUoAdHigbfZZ51iiiK9x4WNFOxKCG2MCLf9KKEs2DgNbE60K5%2FooQV%2Ft5BcGLgyM7zl%2Bxh9rZzUBUdNgHcble6BX8hbAS8PltKbKkz7QEpYa6cTp6c9MN1AThUx6%2BRhqUTmg0b8PU2SYEg1GqmpJOxmTYBebgJlFql5tLF7FhR5tOUAKQ%2Fspyv9i7hSbTr3XzAaQGSUuCmrecANm1XtXSh7vrgKy73M9garaU2FbiqBBFbUvcUZRWyu9L44f6HbGt6lc8pNZqGg%2F12ua%2Fez1nCvt8sBZO1CrKkKMPzjAXL8WF8n6GeUiM0iA5pL7dwxgpSkYNDQq9njcbLF3GtHPpwuTG8sAS10l23ZpYRpIroHkbqLoqs%2FxvxyYIS1dk2YGq%2BbK3PAxehTrIZYYSlYgTDzgfVtpUmm%2FrbyP08AYMQSYaKSE0hdfbg2P618gkZRTnF%2BsZuo0b3hPEcfRPfKpWeiZmc%2BYPUr88mvxvrwU%2FbX3cQsiMunEFG%2FED%2BSiM2qxIajpkxGhcDKBxj2Q8N89lq8ICjGMTYIMYYksS7Y4xFT2wMzMO7IqX2dLLMKzA%2Fb8GOqUBAKZcmPyFcLqAsa33X5npXC8%2BjHa8NG7%2Fe5b3U%2FxFasb8%2FXffbovUyEUHqEWNo%2B4nWAMgotdOZo0Ip2wNTOw1uavdo4j32CJfIHoPIcVRjYOyfz8dyZopsxRXlvNH9B%2FQa3scdxZpUCahHxsyAE6CeS4KeTuvALyeurwUQMHi%2BbZdEeSF0AYzG0y6uVJbtJALkkrBHmX8s%2B7G4Dn0KxpmFNHG13Md&X-Amz-Signature=5ed0a9511024f002b0fd6debcb91ccc73a1b96a31115c1751ee79e196c755e89&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

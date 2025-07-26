---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFUURE4P%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDobc8qhc%2FGMl8wuehxGL8rWMf3hHMAVPB8s4DY%2B6hhLwIhANiEeAW9NRzuYLIrEDiLp4ktyUo%2FQdYwwvjMgAt429A6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgxdqKpBoRw1CSugkKUq3API9ICwHKXkgN3eX%2FggeI%2ByqvWiLgfBmdflE6tfgbqzbZB0HsKR8l5KqhYlbrqO7EDFmqVvN%2FdnlbUt4QnrdbrS%2BAZZHjVftD6zjxpiMhltOQmfNkETE1uijcEnmU0scwY8XxlB1L%2BWZv8bK9v%2BBCLdruPDyjTzHli%2BhfWkhqxsO%2FkA%2Bh02O0Jy5VHtfGqoB%2FlIG6xFmbgfzKyynlx4lyzWNNgyACcpna3M8DZhBoey8L6EjyHwpE8gk%2BN2srHhv9E0L4q6Y63RFwOKjccSRwkeVE5Y7lIAMHXc2TvsYHaixHD06uarou33H6nKv7V1srm47LGE2pZYK0BRrNqxitdVqXm%2FTOTHjalwCx8OzwakTEZSskf%2B9gquC5%2FdlmcXeAkgDug02nBp4aSxEYRUzW07s%2FVsB4yYjbNJN2K%2FSq%2B8i7ZRF%2F%2FJcbujeMqeof5O9KbAusEU1WkmBzqLImpeo5KNcX3tX67JvQv%2FED8xv2tzldNSMI1CSRlCwhxSHH6gOBJS9%2FPzQ5NYhcDwciri5fhm9q22uzNkhGIZOMaSVUtRf7NaAXbkk%2FHWN%2FcRg6ZSo8JSiQJsqqkDaS0G7JJS2X0bJOjH9KvSjdAVElxYt74SKrXkOaaNbFoqeCI4XzD7vZHEBjqkAUL5OnxtohrixnKJgmssEbafLMD91KCOwcXFqMZ4kKus5NwxKGlxoIjlUcM6pCzSUkRlfBYkD9TkcTwjO1NzEQ4tCoK2koLlGqHSug9JfmtQGoz5i8QAzoVjNp3cdlWp4H3OeIt7ypw8gkwpuST8sScvvN1cex0fRA7%2BexNNJuCKe3zs%2FE%2BQh5Q1iLin51AE5KNnK%2FgeZWQFUVHadO8c%2BGC2laPJ&X-Amz-Signature=069795621a18d54a85e7953d6687e24680539659f4e2d836c0efcf470047d14e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFUURE4P%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDobc8qhc%2FGMl8wuehxGL8rWMf3hHMAVPB8s4DY%2B6hhLwIhANiEeAW9NRzuYLIrEDiLp4ktyUo%2FQdYwwvjMgAt429A6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgxdqKpBoRw1CSugkKUq3API9ICwHKXkgN3eX%2FggeI%2ByqvWiLgfBmdflE6tfgbqzbZB0HsKR8l5KqhYlbrqO7EDFmqVvN%2FdnlbUt4QnrdbrS%2BAZZHjVftD6zjxpiMhltOQmfNkETE1uijcEnmU0scwY8XxlB1L%2BWZv8bK9v%2BBCLdruPDyjTzHli%2BhfWkhqxsO%2FkA%2Bh02O0Jy5VHtfGqoB%2FlIG6xFmbgfzKyynlx4lyzWNNgyACcpna3M8DZhBoey8L6EjyHwpE8gk%2BN2srHhv9E0L4q6Y63RFwOKjccSRwkeVE5Y7lIAMHXc2TvsYHaixHD06uarou33H6nKv7V1srm47LGE2pZYK0BRrNqxitdVqXm%2FTOTHjalwCx8OzwakTEZSskf%2B9gquC5%2FdlmcXeAkgDug02nBp4aSxEYRUzW07s%2FVsB4yYjbNJN2K%2FSq%2B8i7ZRF%2F%2FJcbujeMqeof5O9KbAusEU1WkmBzqLImpeo5KNcX3tX67JvQv%2FED8xv2tzldNSMI1CSRlCwhxSHH6gOBJS9%2FPzQ5NYhcDwciri5fhm9q22uzNkhGIZOMaSVUtRf7NaAXbkk%2FHWN%2FcRg6ZSo8JSiQJsqqkDaS0G7JJS2X0bJOjH9KvSjdAVElxYt74SKrXkOaaNbFoqeCI4XzD7vZHEBjqkAUL5OnxtohrixnKJgmssEbafLMD91KCOwcXFqMZ4kKus5NwxKGlxoIjlUcM6pCzSUkRlfBYkD9TkcTwjO1NzEQ4tCoK2koLlGqHSug9JfmtQGoz5i8QAzoVjNp3cdlWp4H3OeIt7ypw8gkwpuST8sScvvN1cex0fRA7%2BexNNJuCKe3zs%2FE%2BQh5Q1iLin51AE5KNnK%2FgeZWQFUVHadO8c%2BGC2laPJ&X-Amz-Signature=9225417e7d297db174a84d40da2255f1b8414e706d7feb8a994da4ba6c8ca294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFUURE4P%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDobc8qhc%2FGMl8wuehxGL8rWMf3hHMAVPB8s4DY%2B6hhLwIhANiEeAW9NRzuYLIrEDiLp4ktyUo%2FQdYwwvjMgAt429A6Kv8DCFYQABoMNjM3NDIzMTgzODA1IgxdqKpBoRw1CSugkKUq3API9ICwHKXkgN3eX%2FggeI%2ByqvWiLgfBmdflE6tfgbqzbZB0HsKR8l5KqhYlbrqO7EDFmqVvN%2FdnlbUt4QnrdbrS%2BAZZHjVftD6zjxpiMhltOQmfNkETE1uijcEnmU0scwY8XxlB1L%2BWZv8bK9v%2BBCLdruPDyjTzHli%2BhfWkhqxsO%2FkA%2Bh02O0Jy5VHtfGqoB%2FlIG6xFmbgfzKyynlx4lyzWNNgyACcpna3M8DZhBoey8L6EjyHwpE8gk%2BN2srHhv9E0L4q6Y63RFwOKjccSRwkeVE5Y7lIAMHXc2TvsYHaixHD06uarou33H6nKv7V1srm47LGE2pZYK0BRrNqxitdVqXm%2FTOTHjalwCx8OzwakTEZSskf%2B9gquC5%2FdlmcXeAkgDug02nBp4aSxEYRUzW07s%2FVsB4yYjbNJN2K%2FSq%2B8i7ZRF%2F%2FJcbujeMqeof5O9KbAusEU1WkmBzqLImpeo5KNcX3tX67JvQv%2FED8xv2tzldNSMI1CSRlCwhxSHH6gOBJS9%2FPzQ5NYhcDwciri5fhm9q22uzNkhGIZOMaSVUtRf7NaAXbkk%2FHWN%2FcRg6ZSo8JSiQJsqqkDaS0G7JJS2X0bJOjH9KvSjdAVElxYt74SKrXkOaaNbFoqeCI4XzD7vZHEBjqkAUL5OnxtohrixnKJgmssEbafLMD91KCOwcXFqMZ4kKus5NwxKGlxoIjlUcM6pCzSUkRlfBYkD9TkcTwjO1NzEQ4tCoK2koLlGqHSug9JfmtQGoz5i8QAzoVjNp3cdlWp4H3OeIt7ypw8gkwpuST8sScvvN1cex0fRA7%2BexNNJuCKe3zs%2FE%2BQh5Q1iLin51AE5KNnK%2FgeZWQFUVHadO8c%2BGC2laPJ&X-Amz-Signature=f82a05362db83c28fee8f4aa309e0e0e5d2ebb6e2ef494bae41eb91a494a055d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

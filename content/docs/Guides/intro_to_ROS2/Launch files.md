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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FZQ6CU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCeOFdX9TTpNbtaPnL%2B5sbqyXXmbXDHuMYKb8sV1nnJ5wIhAL9SwhylvHJOfu6KYvWv9feDhh0FEYnOkNpzm1J9ZnTDKv8DCC4QABoMNjM3NDIzMTgzODA1IgwCY5ehQI4GDGAi2eAq3APmhk1QjrFXymybLiousgQJbnGfwgXD3xESZyedWttSVFGSeU2kqvSDUl1cnpH0uAvGnMLZiUj5KKS1BLGGU2AS3G3Ik1HQ5MN5Ez4ql9RJaEO3dTz1VA39Fw0s4mNYmusb%2B1RR%2FjuvSHjBX1SpYWf43QzHAXga69frJirVpd%2FnJu3gt3VcwMVev%2FtCCBJFR%2BDXJn6cXAhYdenddGZ8ReI%2FvuIozXzjlylaPmX92rMG7iw28fAenTUB1I0aYGwFSKLsL40yl7YXtt%2FsEMomYtBYkRvIQXUY1X5XG%2Fdo7rJbCWecE60BMqZqDuY9L%2FJRhj76Aqio4h1UYHJHrcs94elx13MLaLafsl99lCwdFpc1H8ZoSBndF6QAzznnT1Ea%2BF5kFRUzko118HxZV9dapnZ7u%2BZkyc4lWcEmPntoeQBHAfThWTfmFbzLn5UWAPUEAqZOxbntp44aNqVE%2BNi1CzJ5ziJ8%2F0cAPzo51W6lasWuim337nEuFlQHV5ixbUDbYockr3YXT3LqPUt93xDPSK3FON7o0fkOCU6AqfTEjjXPvM%2FH7fbb9%2FnXdA0BzN8AAUWkAIhXJjpK%2FnP8y3SDqFbEXBCFQb3GMkGo%2FSusyXNxkiukWrA9nQ9JsBjISzCehdTDBjqkAQ%2FZT%2BdpodEuj6OaXOG35r%2BAkuQgvjxy4AMvAC237cjC%2FNiKw0FIPaYG5JYVVXuVpZ4PnZwv0f53D4EgYh2hbse9JIEmXz1r8tcC2pyDIWyLYZN0KLnXrVhzMey9j%2BnXfIQbsjrUGrLdZ7b02TiZWfOHSVnvvWUf9DhTWYLnheYnAg8dvYThbCXMKCIa1hD8oNTPbJZ6fHI0JgPKrW4OpsO1XrgO&X-Amz-Signature=8ca6372c5be22e3d523c7b51018ef975a4e06a6e94c1503ea72df8df458ab3f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FZQ6CU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCeOFdX9TTpNbtaPnL%2B5sbqyXXmbXDHuMYKb8sV1nnJ5wIhAL9SwhylvHJOfu6KYvWv9feDhh0FEYnOkNpzm1J9ZnTDKv8DCC4QABoMNjM3NDIzMTgzODA1IgwCY5ehQI4GDGAi2eAq3APmhk1QjrFXymybLiousgQJbnGfwgXD3xESZyedWttSVFGSeU2kqvSDUl1cnpH0uAvGnMLZiUj5KKS1BLGGU2AS3G3Ik1HQ5MN5Ez4ql9RJaEO3dTz1VA39Fw0s4mNYmusb%2B1RR%2FjuvSHjBX1SpYWf43QzHAXga69frJirVpd%2FnJu3gt3VcwMVev%2FtCCBJFR%2BDXJn6cXAhYdenddGZ8ReI%2FvuIozXzjlylaPmX92rMG7iw28fAenTUB1I0aYGwFSKLsL40yl7YXtt%2FsEMomYtBYkRvIQXUY1X5XG%2Fdo7rJbCWecE60BMqZqDuY9L%2FJRhj76Aqio4h1UYHJHrcs94elx13MLaLafsl99lCwdFpc1H8ZoSBndF6QAzznnT1Ea%2BF5kFRUzko118HxZV9dapnZ7u%2BZkyc4lWcEmPntoeQBHAfThWTfmFbzLn5UWAPUEAqZOxbntp44aNqVE%2BNi1CzJ5ziJ8%2F0cAPzo51W6lasWuim337nEuFlQHV5ixbUDbYockr3YXT3LqPUt93xDPSK3FON7o0fkOCU6AqfTEjjXPvM%2FH7fbb9%2FnXdA0BzN8AAUWkAIhXJjpK%2FnP8y3SDqFbEXBCFQb3GMkGo%2FSusyXNxkiukWrA9nQ9JsBjISzCehdTDBjqkAQ%2FZT%2BdpodEuj6OaXOG35r%2BAkuQgvjxy4AMvAC237cjC%2FNiKw0FIPaYG5JYVVXuVpZ4PnZwv0f53D4EgYh2hbse9JIEmXz1r8tcC2pyDIWyLYZN0KLnXrVhzMey9j%2BnXfIQbsjrUGrLdZ7b02TiZWfOHSVnvvWUf9DhTWYLnheYnAg8dvYThbCXMKCIa1hD8oNTPbJZ6fHI0JgPKrW4OpsO1XrgO&X-Amz-Signature=02b08004b2181a61a6ec30de203c5c92bf95a2ea680796126444d3187c92f60b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FZQ6CU%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T141108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCeOFdX9TTpNbtaPnL%2B5sbqyXXmbXDHuMYKb8sV1nnJ5wIhAL9SwhylvHJOfu6KYvWv9feDhh0FEYnOkNpzm1J9ZnTDKv8DCC4QABoMNjM3NDIzMTgzODA1IgwCY5ehQI4GDGAi2eAq3APmhk1QjrFXymybLiousgQJbnGfwgXD3xESZyedWttSVFGSeU2kqvSDUl1cnpH0uAvGnMLZiUj5KKS1BLGGU2AS3G3Ik1HQ5MN5Ez4ql9RJaEO3dTz1VA39Fw0s4mNYmusb%2B1RR%2FjuvSHjBX1SpYWf43QzHAXga69frJirVpd%2FnJu3gt3VcwMVev%2FtCCBJFR%2BDXJn6cXAhYdenddGZ8ReI%2FvuIozXzjlylaPmX92rMG7iw28fAenTUB1I0aYGwFSKLsL40yl7YXtt%2FsEMomYtBYkRvIQXUY1X5XG%2Fdo7rJbCWecE60BMqZqDuY9L%2FJRhj76Aqio4h1UYHJHrcs94elx13MLaLafsl99lCwdFpc1H8ZoSBndF6QAzznnT1Ea%2BF5kFRUzko118HxZV9dapnZ7u%2BZkyc4lWcEmPntoeQBHAfThWTfmFbzLn5UWAPUEAqZOxbntp44aNqVE%2BNi1CzJ5ziJ8%2F0cAPzo51W6lasWuim337nEuFlQHV5ixbUDbYockr3YXT3LqPUt93xDPSK3FON7o0fkOCU6AqfTEjjXPvM%2FH7fbb9%2FnXdA0BzN8AAUWkAIhXJjpK%2FnP8y3SDqFbEXBCFQb3GMkGo%2FSusyXNxkiukWrA9nQ9JsBjISzCehdTDBjqkAQ%2FZT%2BdpodEuj6OaXOG35r%2BAkuQgvjxy4AMvAC237cjC%2FNiKw0FIPaYG5JYVVXuVpZ4PnZwv0f53D4EgYh2hbse9JIEmXz1r8tcC2pyDIWyLYZN0KLnXrVhzMey9j%2BnXfIQbsjrUGrLdZ7b02TiZWfOHSVnvvWUf9DhTWYLnheYnAg8dvYThbCXMKCIa1hD8oNTPbJZ6fHI0JgPKrW4OpsO1XrgO&X-Amz-Signature=b2e74f8036726c5d3cfa9a979f3a779091f439e617e327d2ed71d2ab640a2ebb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

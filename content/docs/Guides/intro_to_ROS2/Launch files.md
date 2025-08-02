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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OOJZWTD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeT%2FzRV1jsl%2F1WEZf2OSUkHpCRe2VaBmdSnAIbnbX00AiEAtDfDp9ns3L7wx19V22Nc2JcV%2BG%2FLUsQA0qm21GdX2SkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJxjF%2B%2B6ae6PCdpQyrcA4v210ziUT2LeXvypNnktE8Tz0kTx1orTQ9OYx1Bu90QN1b3kJlTN%2FGWtmY1JIegAKK9lTg6E9mDE40qXf7G8EXdxMFchpJt5Uzwn3AD1InsKrnVAmuzAmKB4dNV%2B55Trjtf%2FK%2FX4qej%2BfhGWY0cX9A9hfcO4nqYzQgiWL%2BLqs7KTn6r7I%2F4%2BfNK7WqXV49UoI02GiaA1vUsY6jnwKR4Bj28ubVq2odG%2BDsAvx2%2Fpag3KpvuP7KhAwgVB3gtgSHkznBmwHRvd1JXCklf9wNkAIMjUdD%2F2EtcdaUA5KXND1ndvyNhObYlzRiuKuw7jR8AzXUp1BshUE2rzl2ZmZbCKfy8kJmZssRXMzTmPKNlGCsXnab6eW6MWJ7XfkNNXPFmwgstt9NOuOAyYV%2F5lqsTRCRzNqk7ve0LovOlmRoBL6IVtzzDrXIUws74O5zz2nMAyAteHTake1LhDbU1jvOudEvPIFoWbuksLAmIsg8jmJ015T1OBRVvMrA1uAKvsLqTTAT5nZUpqD2%2FllwUwrPXi2A%2BEt%2FSGY89yqh9gU%2FKxXdQa9rRNRmm%2Bw%2Bi81EfbOpxJl9DNvWOLEr1I2k2mJd6sTwJwCe4kTiWVXJ%2BA%2F01mM13oCnGaMsMJmkq33cHMLHLtsQGOqUBTj49jLqBVu6o4tzgiJ1IAUjBrOeFgTIA5vj2a%2FnD5642QN3voL80FR50CthAYfyhA9%2BnWQap3hueNccPAs6NkszCrsUASFVkLR3WRZiakHaBdrOaWS%2FXq%2B5OfWmmpuyHnOAAFucQ0DZnAv0QszPqxzSzboJ1cRjwwefOA268lAeASr1jeCvu3KgCNTaNEASbNl9qjXiNjOgXBEeOkQWElGKNw2RU&X-Amz-Signature=cf93c7616b686665c6058ab1dd5f6adda27526eb91083daae3d439fe5bf2f9a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OOJZWTD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeT%2FzRV1jsl%2F1WEZf2OSUkHpCRe2VaBmdSnAIbnbX00AiEAtDfDp9ns3L7wx19V22Nc2JcV%2BG%2FLUsQA0qm21GdX2SkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJxjF%2B%2B6ae6PCdpQyrcA4v210ziUT2LeXvypNnktE8Tz0kTx1orTQ9OYx1Bu90QN1b3kJlTN%2FGWtmY1JIegAKK9lTg6E9mDE40qXf7G8EXdxMFchpJt5Uzwn3AD1InsKrnVAmuzAmKB4dNV%2B55Trjtf%2FK%2FX4qej%2BfhGWY0cX9A9hfcO4nqYzQgiWL%2BLqs7KTn6r7I%2F4%2BfNK7WqXV49UoI02GiaA1vUsY6jnwKR4Bj28ubVq2odG%2BDsAvx2%2Fpag3KpvuP7KhAwgVB3gtgSHkznBmwHRvd1JXCklf9wNkAIMjUdD%2F2EtcdaUA5KXND1ndvyNhObYlzRiuKuw7jR8AzXUp1BshUE2rzl2ZmZbCKfy8kJmZssRXMzTmPKNlGCsXnab6eW6MWJ7XfkNNXPFmwgstt9NOuOAyYV%2F5lqsTRCRzNqk7ve0LovOlmRoBL6IVtzzDrXIUws74O5zz2nMAyAteHTake1LhDbU1jvOudEvPIFoWbuksLAmIsg8jmJ015T1OBRVvMrA1uAKvsLqTTAT5nZUpqD2%2FllwUwrPXi2A%2BEt%2FSGY89yqh9gU%2FKxXdQa9rRNRmm%2Bw%2Bi81EfbOpxJl9DNvWOLEr1I2k2mJd6sTwJwCe4kTiWVXJ%2BA%2F01mM13oCnGaMsMJmkq33cHMLHLtsQGOqUBTj49jLqBVu6o4tzgiJ1IAUjBrOeFgTIA5vj2a%2FnD5642QN3voL80FR50CthAYfyhA9%2BnWQap3hueNccPAs6NkszCrsUASFVkLR3WRZiakHaBdrOaWS%2FXq%2B5OfWmmpuyHnOAAFucQ0DZnAv0QszPqxzSzboJ1cRjwwefOA268lAeASr1jeCvu3KgCNTaNEASbNl9qjXiNjOgXBEeOkQWElGKNw2RU&X-Amz-Signature=0320a19aa0fc6b9795e8c5b24e266ce88de789ee13e0b795c95b17b956ae15ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OOJZWTD%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBeT%2FzRV1jsl%2F1WEZf2OSUkHpCRe2VaBmdSnAIbnbX00AiEAtDfDp9ns3L7wx19V22Nc2JcV%2BG%2FLUsQA0qm21GdX2SkqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJxjF%2B%2B6ae6PCdpQyrcA4v210ziUT2LeXvypNnktE8Tz0kTx1orTQ9OYx1Bu90QN1b3kJlTN%2FGWtmY1JIegAKK9lTg6E9mDE40qXf7G8EXdxMFchpJt5Uzwn3AD1InsKrnVAmuzAmKB4dNV%2B55Trjtf%2FK%2FX4qej%2BfhGWY0cX9A9hfcO4nqYzQgiWL%2BLqs7KTn6r7I%2F4%2BfNK7WqXV49UoI02GiaA1vUsY6jnwKR4Bj28ubVq2odG%2BDsAvx2%2Fpag3KpvuP7KhAwgVB3gtgSHkznBmwHRvd1JXCklf9wNkAIMjUdD%2F2EtcdaUA5KXND1ndvyNhObYlzRiuKuw7jR8AzXUp1BshUE2rzl2ZmZbCKfy8kJmZssRXMzTmPKNlGCsXnab6eW6MWJ7XfkNNXPFmwgstt9NOuOAyYV%2F5lqsTRCRzNqk7ve0LovOlmRoBL6IVtzzDrXIUws74O5zz2nMAyAteHTake1LhDbU1jvOudEvPIFoWbuksLAmIsg8jmJ015T1OBRVvMrA1uAKvsLqTTAT5nZUpqD2%2FllwUwrPXi2A%2BEt%2FSGY89yqh9gU%2FKxXdQa9rRNRmm%2Bw%2Bi81EfbOpxJl9DNvWOLEr1I2k2mJd6sTwJwCe4kTiWVXJ%2BA%2F01mM13oCnGaMsMJmkq33cHMLHLtsQGOqUBTj49jLqBVu6o4tzgiJ1IAUjBrOeFgTIA5vj2a%2FnD5642QN3voL80FR50CthAYfyhA9%2BnWQap3hueNccPAs6NkszCrsUASFVkLR3WRZiakHaBdrOaWS%2FXq%2B5OfWmmpuyHnOAAFucQ0DZnAv0QszPqxzSzboJ1cRjwwefOA268lAeASr1jeCvu3KgCNTaNEASbNl9qjXiNjOgXBEeOkQWElGKNw2RU&X-Amz-Signature=de3083daee25b4d6a744b543b8eb02d196c442b530adcf2303bb8e47b44af12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3HGT2W%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHAykkQrcK7weF5G90GhEq%2BKMXqUdD6jTduv2IswT0vwIhAK%2FFfb3V7vqSB%2BCCxamHjf5HmjvKC8n7o6%2FZwqVgxNMaKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMzZZ1F97A3ZUd3Hcq3APTtqJUrNkZI4rj%2BC7ckUX%2BYZpoHMjiksN6NByQGbcf%2BKiKlpK82D4xXiGop%2Fhqy%2FBFu%2B7jRjMgtdJSc1hKB1wWFb%2BmORshTkC3rhEVrC0Ovk3ELj5hBFn%2FPrSkzKsGtaq%2FEcP5Dm1USI0O30KmQHbfp777Z1mjfgV6EB4dhZGi7M%2BPgArpf0CGMy8wVQb8cXnsS9kKyqeOeub5SudpQ6TJTt6BXlWRg5F9mgGYEYn4aibXMcjbPf2DLg9mpOT9w1KMkfewoOLf8rMVqBWL907dgQh2qstXgShncowQdQ%2FfS3uRWGRgGMQR5S8hLSTjqaiPoErB35XGXpUtWmvFS2EAGOIwf2ep65KPNGANw7zFt%2Bm1l%2B3so9hfLPVNLI%2FqpKfqcKBNWU9WtHD64poOyhb9xWZr%2BGxEsq%2BNtLmPU%2B8wZ4XhmXwxDTbm9iZaV%2BMr7TDO06q6GtrqavM%2FulBDldwOEP6t%2BYaGxYRQZxDOnrdFTojUXpSTGE7TPN9g0NNAQcVtKBDHTu0iWXfs%2Bs4weI1S07L8FxRY%2FeXGZbfHXe3v9Yqo1rkoZmiTSyN%2B4ge47owSOaWpfrDbqNBdSy%2BIH4KAZ7gjhT3kPuogBKsASr%2B%2FBmj%2FeY7UooEh3mYNlDDJ%2Frm%2FBjqkATMZL6Fa9mmhNrGU71b71Atp4mSNtlZRKA2R%2BhMlGOf9o%2BNElqNvOD7A6dqXfXsSxGwu6GnOh1%2BOGlViz9pf0pBxk1JVMefEWBO0S73SUvjdSb%2FYAkFYqrn5xLAhH%2BcaiivGNH94c569Lcq9zBXJrvAsj8YsxuarCihYfXs2tW%2Fo5czypq2%2BUlLmJEKWW01gq3pPqOKF5%2FrZUndeC7gIS4PvgWJg&X-Amz-Signature=2dfb239501e5b6e4980c44703d539c079be4c306233055333c17bb6ee7d5e429&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3HGT2W%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHAykkQrcK7weF5G90GhEq%2BKMXqUdD6jTduv2IswT0vwIhAK%2FFfb3V7vqSB%2BCCxamHjf5HmjvKC8n7o6%2FZwqVgxNMaKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMzZZ1F97A3ZUd3Hcq3APTtqJUrNkZI4rj%2BC7ckUX%2BYZpoHMjiksN6NByQGbcf%2BKiKlpK82D4xXiGop%2Fhqy%2FBFu%2B7jRjMgtdJSc1hKB1wWFb%2BmORshTkC3rhEVrC0Ovk3ELj5hBFn%2FPrSkzKsGtaq%2FEcP5Dm1USI0O30KmQHbfp777Z1mjfgV6EB4dhZGi7M%2BPgArpf0CGMy8wVQb8cXnsS9kKyqeOeub5SudpQ6TJTt6BXlWRg5F9mgGYEYn4aibXMcjbPf2DLg9mpOT9w1KMkfewoOLf8rMVqBWL907dgQh2qstXgShncowQdQ%2FfS3uRWGRgGMQR5S8hLSTjqaiPoErB35XGXpUtWmvFS2EAGOIwf2ep65KPNGANw7zFt%2Bm1l%2B3so9hfLPVNLI%2FqpKfqcKBNWU9WtHD64poOyhb9xWZr%2BGxEsq%2BNtLmPU%2B8wZ4XhmXwxDTbm9iZaV%2BMr7TDO06q6GtrqavM%2FulBDldwOEP6t%2BYaGxYRQZxDOnrdFTojUXpSTGE7TPN9g0NNAQcVtKBDHTu0iWXfs%2Bs4weI1S07L8FxRY%2FeXGZbfHXe3v9Yqo1rkoZmiTSyN%2B4ge47owSOaWpfrDbqNBdSy%2BIH4KAZ7gjhT3kPuogBKsASr%2B%2FBmj%2FeY7UooEh3mYNlDDJ%2Frm%2FBjqkATMZL6Fa9mmhNrGU71b71Atp4mSNtlZRKA2R%2BhMlGOf9o%2BNElqNvOD7A6dqXfXsSxGwu6GnOh1%2BOGlViz9pf0pBxk1JVMefEWBO0S73SUvjdSb%2FYAkFYqrn5xLAhH%2BcaiivGNH94c569Lcq9zBXJrvAsj8YsxuarCihYfXs2tW%2Fo5czypq2%2BUlLmJEKWW01gq3pPqOKF5%2FrZUndeC7gIS4PvgWJg&X-Amz-Signature=a40abeb76d7e03f13ad31586f9876c167e2aa82bcfb62787f934643205f7d373&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV3HGT2W%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHAykkQrcK7weF5G90GhEq%2BKMXqUdD6jTduv2IswT0vwIhAK%2FFfb3V7vqSB%2BCCxamHjf5HmjvKC8n7o6%2FZwqVgxNMaKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMzZZ1F97A3ZUd3Hcq3APTtqJUrNkZI4rj%2BC7ckUX%2BYZpoHMjiksN6NByQGbcf%2BKiKlpK82D4xXiGop%2Fhqy%2FBFu%2B7jRjMgtdJSc1hKB1wWFb%2BmORshTkC3rhEVrC0Ovk3ELj5hBFn%2FPrSkzKsGtaq%2FEcP5Dm1USI0O30KmQHbfp777Z1mjfgV6EB4dhZGi7M%2BPgArpf0CGMy8wVQb8cXnsS9kKyqeOeub5SudpQ6TJTt6BXlWRg5F9mgGYEYn4aibXMcjbPf2DLg9mpOT9w1KMkfewoOLf8rMVqBWL907dgQh2qstXgShncowQdQ%2FfS3uRWGRgGMQR5S8hLSTjqaiPoErB35XGXpUtWmvFS2EAGOIwf2ep65KPNGANw7zFt%2Bm1l%2B3so9hfLPVNLI%2FqpKfqcKBNWU9WtHD64poOyhb9xWZr%2BGxEsq%2BNtLmPU%2B8wZ4XhmXwxDTbm9iZaV%2BMr7TDO06q6GtrqavM%2FulBDldwOEP6t%2BYaGxYRQZxDOnrdFTojUXpSTGE7TPN9g0NNAQcVtKBDHTu0iWXfs%2Bs4weI1S07L8FxRY%2FeXGZbfHXe3v9Yqo1rkoZmiTSyN%2B4ge47owSOaWpfrDbqNBdSy%2BIH4KAZ7gjhT3kPuogBKsASr%2B%2FBmj%2FeY7UooEh3mYNlDDJ%2Frm%2FBjqkATMZL6Fa9mmhNrGU71b71Atp4mSNtlZRKA2R%2BhMlGOf9o%2BNElqNvOD7A6dqXfXsSxGwu6GnOh1%2BOGlViz9pf0pBxk1JVMefEWBO0S73SUvjdSb%2FYAkFYqrn5xLAhH%2BcaiivGNH94c569Lcq9zBXJrvAsj8YsxuarCihYfXs2tW%2Fo5czypq2%2BUlLmJEKWW01gq3pPqOKF5%2FrZUndeC7gIS4PvgWJg&X-Amz-Signature=7c4243b33a6a6be4a2440602bff93f870ab4149e50fc66406c4cf344c70d6377&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

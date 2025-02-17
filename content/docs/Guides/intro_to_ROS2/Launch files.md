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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2BBRJW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFS3FCu%2FX8WP80rRcKp0aCVW7KubqAasaPShBJ8l2nKGAiBKVY6nuNYxQhX2cJtvaIl8GIseUn%2B5V89DLb1d7KGRpSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMJNz90phnHFWyPuxvKtwDfh7TZY4ZG1KtSzZZZGGaDy%2FvPlfZF3G%2BlIc5Yz6r5pG7M%2BDLyZLKLSyNy8hftcI%2B0EuLYFHjPqazaGHhEA16sHWYv5xXOsWUypwpl8YTAKUFmHGYt8%2Fd2BXFZdam1fFMrckpqaze6pMKH4FQ3fLC0cv3mtbMv5ahZxtQMByV5HldibFSk7J0AdrmLoRO6cfIaPgyA9KSb9eT8EqfP9SBrtii%2BdgaHM7CWYPfOKuBfEYXrBsBJmtYpVB4jxm3ZUVxU8sf8T%2BQt0ZdE7yf2AbpLQ%2BKY4sj29S1iwKu76faMMJv3%2BvNApZmtegoBoy1ImF15F1WlWsAd67JDyf0UkhoI9FSIiVckn46XaGWQOA1gd9q3mZGfRKSsrErTYAQY6bKJ5JUN8e8yqxVGDnobl%2F40CGpGTd8iQZMMWgYO9rdmzDfS3mhTAbps%2BKnHmnT%2FgEUJKJMZDj%2FmPUkOhXONJJmFQDZOVgn9MQetFZ2PPtXh%2Fr%2BhPLBz1%2FMPx%2FnbEUzZtGDt9%2FIXpSmSca33rM69yX7b%2FUwglVOZbDuWRkmI9NCABYufCO3gklg7CafMhnRkHxAIpm5qa9y6SZz1KYwiINepnOuFlijcflLYmpqzaRKQxmuAyKugU%2Bn17Qk94Iwu5vKvQY6pgE%2F6q%2FuUw8zpSahCvbQywYz5EHeDtMajSm47VQaJfFK6OGl6%2FhE2IDn8e7G8WV2XcZJqqwPVrlJdBZm6tUOEZgSBS3fCwiAbvSm2byrACwRa%2BlFGnffSreC580xqLZS8C3GJHJrzyNdZefCRtKdqb8k8VUvIXOWzFcIATbFDYPGwvgq3upx0UjcjCGDZ6J5YC%2BBZZEAM0tC%2BgxozS6uvbRDF0axzbzL&X-Amz-Signature=d4a733a3f5f82ffdc67d7a544eb82eddd9b4aa15dd4c88a4b321e87216bb5e70&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2BBRJW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFS3FCu%2FX8WP80rRcKp0aCVW7KubqAasaPShBJ8l2nKGAiBKVY6nuNYxQhX2cJtvaIl8GIseUn%2B5V89DLb1d7KGRpSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMJNz90phnHFWyPuxvKtwDfh7TZY4ZG1KtSzZZZGGaDy%2FvPlfZF3G%2BlIc5Yz6r5pG7M%2BDLyZLKLSyNy8hftcI%2B0EuLYFHjPqazaGHhEA16sHWYv5xXOsWUypwpl8YTAKUFmHGYt8%2Fd2BXFZdam1fFMrckpqaze6pMKH4FQ3fLC0cv3mtbMv5ahZxtQMByV5HldibFSk7J0AdrmLoRO6cfIaPgyA9KSb9eT8EqfP9SBrtii%2BdgaHM7CWYPfOKuBfEYXrBsBJmtYpVB4jxm3ZUVxU8sf8T%2BQt0ZdE7yf2AbpLQ%2BKY4sj29S1iwKu76faMMJv3%2BvNApZmtegoBoy1ImF15F1WlWsAd67JDyf0UkhoI9FSIiVckn46XaGWQOA1gd9q3mZGfRKSsrErTYAQY6bKJ5JUN8e8yqxVGDnobl%2F40CGpGTd8iQZMMWgYO9rdmzDfS3mhTAbps%2BKnHmnT%2FgEUJKJMZDj%2FmPUkOhXONJJmFQDZOVgn9MQetFZ2PPtXh%2Fr%2BhPLBz1%2FMPx%2FnbEUzZtGDt9%2FIXpSmSca33rM69yX7b%2FUwglVOZbDuWRkmI9NCABYufCO3gklg7CafMhnRkHxAIpm5qa9y6SZz1KYwiINepnOuFlijcflLYmpqzaRKQxmuAyKugU%2Bn17Qk94Iwu5vKvQY6pgE%2F6q%2FuUw8zpSahCvbQywYz5EHeDtMajSm47VQaJfFK6OGl6%2FhE2IDn8e7G8WV2XcZJqqwPVrlJdBZm6tUOEZgSBS3fCwiAbvSm2byrACwRa%2BlFGnffSreC580xqLZS8C3GJHJrzyNdZefCRtKdqb8k8VUvIXOWzFcIATbFDYPGwvgq3upx0UjcjCGDZ6J5YC%2BBZZEAM0tC%2BgxozS6uvbRDF0axzbzL&X-Amz-Signature=13aaf876133ac2c815ee0a705b48a1314cfdd6f1d634e083b12683465939cad1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO2BBRJW%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIFS3FCu%2FX8WP80rRcKp0aCVW7KubqAasaPShBJ8l2nKGAiBKVY6nuNYxQhX2cJtvaIl8GIseUn%2B5V89DLb1d7KGRpSr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMJNz90phnHFWyPuxvKtwDfh7TZY4ZG1KtSzZZZGGaDy%2FvPlfZF3G%2BlIc5Yz6r5pG7M%2BDLyZLKLSyNy8hftcI%2B0EuLYFHjPqazaGHhEA16sHWYv5xXOsWUypwpl8YTAKUFmHGYt8%2Fd2BXFZdam1fFMrckpqaze6pMKH4FQ3fLC0cv3mtbMv5ahZxtQMByV5HldibFSk7J0AdrmLoRO6cfIaPgyA9KSb9eT8EqfP9SBrtii%2BdgaHM7CWYPfOKuBfEYXrBsBJmtYpVB4jxm3ZUVxU8sf8T%2BQt0ZdE7yf2AbpLQ%2BKY4sj29S1iwKu76faMMJv3%2BvNApZmtegoBoy1ImF15F1WlWsAd67JDyf0UkhoI9FSIiVckn46XaGWQOA1gd9q3mZGfRKSsrErTYAQY6bKJ5JUN8e8yqxVGDnobl%2F40CGpGTd8iQZMMWgYO9rdmzDfS3mhTAbps%2BKnHmnT%2FgEUJKJMZDj%2FmPUkOhXONJJmFQDZOVgn9MQetFZ2PPtXh%2Fr%2BhPLBz1%2FMPx%2FnbEUzZtGDt9%2FIXpSmSca33rM69yX7b%2FUwglVOZbDuWRkmI9NCABYufCO3gklg7CafMhnRkHxAIpm5qa9y6SZz1KYwiINepnOuFlijcflLYmpqzaRKQxmuAyKugU%2Bn17Qk94Iwu5vKvQY6pgE%2F6q%2FuUw8zpSahCvbQywYz5EHeDtMajSm47VQaJfFK6OGl6%2FhE2IDn8e7G8WV2XcZJqqwPVrlJdBZm6tUOEZgSBS3fCwiAbvSm2byrACwRa%2BlFGnffSreC580xqLZS8C3GJHJrzyNdZefCRtKdqb8k8VUvIXOWzFcIATbFDYPGwvgq3upx0UjcjCGDZ6J5YC%2BBZZEAM0tC%2BgxozS6uvbRDF0axzbzL&X-Amz-Signature=5bec0cc79f8186ab0afb597e9da7b32c5e2ddf5cfa8f3d680135d4930387e136&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

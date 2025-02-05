---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Launch files.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CJQZ7WL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDZC6OeEFHnbug70ruSViIJOe0mGx%2BnQaXZBQ8wUS9EbQIhAKem0WuY51KFCzPf2Sy%2B8JdNv33Pb1ZGyutVvS6eQXYcKv8DCDkQABoMNjM3NDIzMTgzODA1Igwy1hLu6Jtn%2BmnvPx0q3ANb6xSuo0HAjflhtzH6Gur2FaaMyn9piF1pLWeG199JWxNLhq97SGEORHg4MSUi5vIn673pKii0yLDn534IWu5wkzPRgXvnnRU9KiNXTnq7qWeklKM4oJmFqM7mdm3SpcjKxd3jWiXYuHoJCAUpEwhhMzuyAd%2BWMNFy859NYRJa7cMGju0HTZmCFYDMQUN6%2FlTAW7zw1%2FOtFyKSW6fS3w2br7B9o8nuYJWigCkVuL66IQgpvh8iVj1%2FIm2Fe%2B2g8NxPWsWuYvpmI6wOc52BZ7b3insDReJUnfjN%2F1FlNBzIfQWliAQHX8Hsgkm4YjaMIrskGz5RltSudzlvVbwWEgI8VwG%2Fb2y9g863vyfLF5oNhYNJkIddGBi1A%2BEuhy67%2B29zehlT%2FYS9%2Bkhkz0GKuOt%2Bdmc4NbFWXNFERjMWRsyTyMnTx0cUtwHbeqEAJFjI7pImupcK%2BjKE6iR2xYlw0K%2BbNK0XTkLGxyP7xj8qy2v%2F8i5y%2FN9srst9uNXgWB%2Fpvd67KtKNZMKhyZGlP4EhARbC9kISeBeI0Sz4qqWJiMfvWwAD9h692ZQmlMbOJqR7tjnmDnUr0LGi%2FykoCEZKmjxbm%2FImM5L23WMpWBl%2FtYcPmrsGw7ZZdeGuHjYE1jD%2Fz4q9BjqkAQ3EferiwajtTTFgAi%2Bv38UIrDcE0xMrdJnzLen0PAkXtajZHYAftRYbHFx1lFMUG44qGcz%2BJzUp9glbx%2BXPYwY1HpqwOU9zHK%2Bo2GPHa9d2DfjfSesT2mmB8LlfTnHSyATLMr7YyIWm2S3yv%2BMF9TqlztLQKlbOoaTeyJKK992xTbiX2FXQ8MeN1dHuPeNQe4xXMrf9wANz5APiAeGG33O9jhMN&X-Amz-Signature=d1ea7c9f7aceabfee698b7742d3362a1c3050a934d0ebf2b2a4379eba68ee4f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CJQZ7WL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDZC6OeEFHnbug70ruSViIJOe0mGx%2BnQaXZBQ8wUS9EbQIhAKem0WuY51KFCzPf2Sy%2B8JdNv33Pb1ZGyutVvS6eQXYcKv8DCDkQABoMNjM3NDIzMTgzODA1Igwy1hLu6Jtn%2BmnvPx0q3ANb6xSuo0HAjflhtzH6Gur2FaaMyn9piF1pLWeG199JWxNLhq97SGEORHg4MSUi5vIn673pKii0yLDn534IWu5wkzPRgXvnnRU9KiNXTnq7qWeklKM4oJmFqM7mdm3SpcjKxd3jWiXYuHoJCAUpEwhhMzuyAd%2BWMNFy859NYRJa7cMGju0HTZmCFYDMQUN6%2FlTAW7zw1%2FOtFyKSW6fS3w2br7B9o8nuYJWigCkVuL66IQgpvh8iVj1%2FIm2Fe%2B2g8NxPWsWuYvpmI6wOc52BZ7b3insDReJUnfjN%2F1FlNBzIfQWliAQHX8Hsgkm4YjaMIrskGz5RltSudzlvVbwWEgI8VwG%2Fb2y9g863vyfLF5oNhYNJkIddGBi1A%2BEuhy67%2B29zehlT%2FYS9%2Bkhkz0GKuOt%2Bdmc4NbFWXNFERjMWRsyTyMnTx0cUtwHbeqEAJFjI7pImupcK%2BjKE6iR2xYlw0K%2BbNK0XTkLGxyP7xj8qy2v%2F8i5y%2FN9srst9uNXgWB%2Fpvd67KtKNZMKhyZGlP4EhARbC9kISeBeI0Sz4qqWJiMfvWwAD9h692ZQmlMbOJqR7tjnmDnUr0LGi%2FykoCEZKmjxbm%2FImM5L23WMpWBl%2FtYcPmrsGw7ZZdeGuHjYE1jD%2Fz4q9BjqkAQ3EferiwajtTTFgAi%2Bv38UIrDcE0xMrdJnzLen0PAkXtajZHYAftRYbHFx1lFMUG44qGcz%2BJzUp9glbx%2BXPYwY1HpqwOU9zHK%2Bo2GPHa9d2DfjfSesT2mmB8LlfTnHSyATLMr7YyIWm2S3yv%2BMF9TqlztLQKlbOoaTeyJKK992xTbiX2FXQ8MeN1dHuPeNQe4xXMrf9wANz5APiAeGG33O9jhMN&X-Amz-Signature=634f356f819f12452c16d794592b66d9ddee75b972e184516e44656eeac6a0be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CJQZ7WL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T003547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDZC6OeEFHnbug70ruSViIJOe0mGx%2BnQaXZBQ8wUS9EbQIhAKem0WuY51KFCzPf2Sy%2B8JdNv33Pb1ZGyutVvS6eQXYcKv8DCDkQABoMNjM3NDIzMTgzODA1Igwy1hLu6Jtn%2BmnvPx0q3ANb6xSuo0HAjflhtzH6Gur2FaaMyn9piF1pLWeG199JWxNLhq97SGEORHg4MSUi5vIn673pKii0yLDn534IWu5wkzPRgXvnnRU9KiNXTnq7qWeklKM4oJmFqM7mdm3SpcjKxd3jWiXYuHoJCAUpEwhhMzuyAd%2BWMNFy859NYRJa7cMGju0HTZmCFYDMQUN6%2FlTAW7zw1%2FOtFyKSW6fS3w2br7B9o8nuYJWigCkVuL66IQgpvh8iVj1%2FIm2Fe%2B2g8NxPWsWuYvpmI6wOc52BZ7b3insDReJUnfjN%2F1FlNBzIfQWliAQHX8Hsgkm4YjaMIrskGz5RltSudzlvVbwWEgI8VwG%2Fb2y9g863vyfLF5oNhYNJkIddGBi1A%2BEuhy67%2B29zehlT%2FYS9%2Bkhkz0GKuOt%2Bdmc4NbFWXNFERjMWRsyTyMnTx0cUtwHbeqEAJFjI7pImupcK%2BjKE6iR2xYlw0K%2BbNK0XTkLGxyP7xj8qy2v%2F8i5y%2FN9srst9uNXgWB%2Fpvd67KtKNZMKhyZGlP4EhARbC9kISeBeI0Sz4qqWJiMfvWwAD9h692ZQmlMbOJqR7tjnmDnUr0LGi%2FykoCEZKmjxbm%2FImM5L23WMpWBl%2FtYcPmrsGw7ZZdeGuHjYE1jD%2Fz4q9BjqkAQ3EferiwajtTTFgAi%2Bv38UIrDcE0xMrdJnzLen0PAkXtajZHYAftRYbHFx1lFMUG44qGcz%2BJzUp9glbx%2BXPYwY1HpqwOU9zHK%2Bo2GPHa9d2DfjfSesT2mmB8LlfTnHSyATLMr7YyIWm2S3yv%2BMF9TqlztLQKlbOoaTeyJKK992xTbiX2FXQ8MeN1dHuPeNQe4xXMrf9wANz5APiAeGG33O9jhMN&X-Amz-Signature=5f7a576e7ec22f77cff8ee0e9c26fd5ca73432f850c181003f18c429b84636f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A7J5D7F%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCF20EL4pvVmptD2jGUEM2y29w9f4gLUtwT3vQBY9W5SQIhAISQJc8OJh%2FCduaB8uiw%2FDXHHm8QkgEBjctLVfLez1FtKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8hrD5cwmpfbks51Qq3ANRrKEqUd2YJbg9A6%2BDMAAewUpQDLgEp0fRBOytRJm9e8jl1qOlrENKSd%2BHbS7NVaw8FtKAqbz9ARCKtUGbGnpdK7KrDhejcBddzWZnda7X%2B9do1qymakbmLJunMxVCv9aSC1QFhBFEqqeIcGQc7%2BJLJlQSJNK7P5aa7%2BhBEyDgZ6T9m8qMhgITd2Hgh3lOPljEGyoTcPKBN%2FqqUBrksSEM2OqduN2SQ4ZiNsYl71HTnY03Qe%2FE%2F8QnblKrEa9Qi0YaIwx4bKjYaFTOX8Fkn8wGuzM3aF00dXUIkZZo9LCPOFqeqh9rD7xtvZ5xRfLpEsUscIFYBxhi%2FrYyyLbJc2PAiayTz%2BhDj9joDKUV%2FIjmwvDuH6afwRqLbWNEcngzHS4kR8LNhleAk2kY9RCgHZ%2BEkAIBNkDc36vrTQxMP3zBlTYQilOYEP6cm0dPQpYBgHe1rfq6xgT9kpHIYeiE06gfrx0IfInk8o5qwbSRxRQaSlX6W9Ea7o7PFngodnnojOJz2%2B6jeOqeG78Frm7f3Hm9XkEe2Q0X%2FDBH60%2Bm6Y69W8S96q5%2BJYm0IJlR4Ewf9h%2BNR0GhM4Vi%2FNUx9yhW0S1Q0QtLCqyCXv2FEYKYVnPTWoSZ3SSm0FG6GZ75vDCtxpzEBjqkAf4hJ9rjO2Kg4HVhErIULasQuywo1zkAbxksk8wgyDFlwPeQ3I6XrRXx3%2BPIyNaLAhYoA8iYq69B6%2F1RtrHikTVPEhw%2FJOU4mwlpSQAxTtnuhFYVRvaub%2BYjf8QETg798ntLbDOS4Hl1ScCY4OGwmvzUC7K39JTj2YzGxyvwlTLfB0ZJLcqYICs4wIHv4rWl6%2BmnGBTxUKEIL9jPmznk8WKbDvK8&X-Amz-Signature=d9cc874a43c4d175e0baf97f028057daac4e1a548e9cfd094457b54d383b2dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A7J5D7F%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCF20EL4pvVmptD2jGUEM2y29w9f4gLUtwT3vQBY9W5SQIhAISQJc8OJh%2FCduaB8uiw%2FDXHHm8QkgEBjctLVfLez1FtKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8hrD5cwmpfbks51Qq3ANRrKEqUd2YJbg9A6%2BDMAAewUpQDLgEp0fRBOytRJm9e8jl1qOlrENKSd%2BHbS7NVaw8FtKAqbz9ARCKtUGbGnpdK7KrDhejcBddzWZnda7X%2B9do1qymakbmLJunMxVCv9aSC1QFhBFEqqeIcGQc7%2BJLJlQSJNK7P5aa7%2BhBEyDgZ6T9m8qMhgITd2Hgh3lOPljEGyoTcPKBN%2FqqUBrksSEM2OqduN2SQ4ZiNsYl71HTnY03Qe%2FE%2F8QnblKrEa9Qi0YaIwx4bKjYaFTOX8Fkn8wGuzM3aF00dXUIkZZo9LCPOFqeqh9rD7xtvZ5xRfLpEsUscIFYBxhi%2FrYyyLbJc2PAiayTz%2BhDj9joDKUV%2FIjmwvDuH6afwRqLbWNEcngzHS4kR8LNhleAk2kY9RCgHZ%2BEkAIBNkDc36vrTQxMP3zBlTYQilOYEP6cm0dPQpYBgHe1rfq6xgT9kpHIYeiE06gfrx0IfInk8o5qwbSRxRQaSlX6W9Ea7o7PFngodnnojOJz2%2B6jeOqeG78Frm7f3Hm9XkEe2Q0X%2FDBH60%2Bm6Y69W8S96q5%2BJYm0IJlR4Ewf9h%2BNR0GhM4Vi%2FNUx9yhW0S1Q0QtLCqyCXv2FEYKYVnPTWoSZ3SSm0FG6GZ75vDCtxpzEBjqkAf4hJ9rjO2Kg4HVhErIULasQuywo1zkAbxksk8wgyDFlwPeQ3I6XrRXx3%2BPIyNaLAhYoA8iYq69B6%2F1RtrHikTVPEhw%2FJOU4mwlpSQAxTtnuhFYVRvaub%2BYjf8QETg798ntLbDOS4Hl1ScCY4OGwmvzUC7K39JTj2YzGxyvwlTLfB0ZJLcqYICs4wIHv4rWl6%2BmnGBTxUKEIL9jPmznk8WKbDvK8&X-Amz-Signature=e2a6e9edefcc12795ba5e6d536dc338860ff0a249bb2f967023e416fe325557a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A7J5D7F%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCF20EL4pvVmptD2jGUEM2y29w9f4gLUtwT3vQBY9W5SQIhAISQJc8OJh%2FCduaB8uiw%2FDXHHm8QkgEBjctLVfLez1FtKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8hrD5cwmpfbks51Qq3ANRrKEqUd2YJbg9A6%2BDMAAewUpQDLgEp0fRBOytRJm9e8jl1qOlrENKSd%2BHbS7NVaw8FtKAqbz9ARCKtUGbGnpdK7KrDhejcBddzWZnda7X%2B9do1qymakbmLJunMxVCv9aSC1QFhBFEqqeIcGQc7%2BJLJlQSJNK7P5aa7%2BhBEyDgZ6T9m8qMhgITd2Hgh3lOPljEGyoTcPKBN%2FqqUBrksSEM2OqduN2SQ4ZiNsYl71HTnY03Qe%2FE%2F8QnblKrEa9Qi0YaIwx4bKjYaFTOX8Fkn8wGuzM3aF00dXUIkZZo9LCPOFqeqh9rD7xtvZ5xRfLpEsUscIFYBxhi%2FrYyyLbJc2PAiayTz%2BhDj9joDKUV%2FIjmwvDuH6afwRqLbWNEcngzHS4kR8LNhleAk2kY9RCgHZ%2BEkAIBNkDc36vrTQxMP3zBlTYQilOYEP6cm0dPQpYBgHe1rfq6xgT9kpHIYeiE06gfrx0IfInk8o5qwbSRxRQaSlX6W9Ea7o7PFngodnnojOJz2%2B6jeOqeG78Frm7f3Hm9XkEe2Q0X%2FDBH60%2Bm6Y69W8S96q5%2BJYm0IJlR4Ewf9h%2BNR0GhM4Vi%2FNUx9yhW0S1Q0QtLCqyCXv2FEYKYVnPTWoSZ3SSm0FG6GZ75vDCtxpzEBjqkAf4hJ9rjO2Kg4HVhErIULasQuywo1zkAbxksk8wgyDFlwPeQ3I6XrRXx3%2BPIyNaLAhYoA8iYq69B6%2F1RtrHikTVPEhw%2FJOU4mwlpSQAxTtnuhFYVRvaub%2BYjf8QETg798ntLbDOS4Hl1ScCY4OGwmvzUC7K39JTj2YzGxyvwlTLfB0ZJLcqYICs4wIHv4rWl6%2BmnGBTxUKEIL9jPmznk8WKbDvK8&X-Amz-Signature=10939c0e779f772d6182a023afbc35dda5d818ff4c2386cea402994444e8adf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

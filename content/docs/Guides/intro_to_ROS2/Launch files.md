---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZCPNWA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQC7rp5bqQOlFvrf6fZssE6%2BR8On1SlkcQqVxig519dbEwIhAI%2FUYoGBMIwOjXiYlAaD3Ml4ETkY8Rb7ncgRh25FO4OhKv8DCFcQABoMNjM3NDIzMTgzODA1IgyJU5maHqQBsBrVpv4q3APh3YY1c4ii6F0cD6X%2FVit1E2%2BXZzCS1hRVOkpvBk6vfG4%2FW11SEv0nehpj3JgKhYcL%2BGgHgxMcAbrZdKWdhkeNgfMs8zUecZFklqa4QiJjvewriXPks7hM5Roza8Nj743gnO4CMSkZ0jPJ%2Ft3bOXUYNwqoBjWQfF9B5k5Hfos6E%2F%2FiZxD60dT4s0G7zUKZW00DLardA7%2FMbOQig2navjiGi5TccJsmfkmCQQzhVNi44jMcOAL5pIJQshGKtzpjiZvGAly7hcLof3G2X1s%2FmutNwDQ3WGdE5UyfsvtY7BQYWOdGpg0O42RAik8IoNlx7HT8VWb9rTVdgJvvsdKLTAzTM2oc%2Bxb%2FkD0eKnTHNgofaKbbRgGD%2FP8ltQsE08Q%2FV27vuy6mvlVM41kq9cKlCnw7%2FLUSVg2SNs%2FubA1KpcHLwGE4L0BArSNqsPAqDIbcxLoxYLiibBdxo34jdFHux2oG4R3Xzcs7an4iiGROOajf92mPsUHH26lTD1ky0CKumqDNkIJOEqTejCwYe5lDhMm%2B%2B5mpBoS65SXwvxGmBGkdkEJNkqFYMVuSCf3xHalDBpg%2FnlLhodgZHH01hiYEup9Znir0lpnc%2FOjkTW70%2F8F6c5OSp18qiLbfTPVNIDDbo%2FvEBjqkAYLoBL61oZ8CirQs2wz9YDGkdYz8%2FrHKstB6xI336U%2F9vm3u6ahR3P8JpQtTqmtGC4tjBrXPziORnjN2h%2ByUEfQisX6W5SaMqCZgggNuNkPUqWYM6%2B1njwW6KByDoOr%2FEnmzvjckeAQRsFrZez%2FnOpWT2FhR4sPdyvYp%2B79nZZ6%2FHjazlfS1kw%2B%2BEn6GNQH5%2BQ315C99sb7LYDtTweGIerLEIOl2&X-Amz-Signature=b43b806b31e9f058f9aec076e1813c331151c6f4ca2741e0813ece5f207af3da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZCPNWA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQC7rp5bqQOlFvrf6fZssE6%2BR8On1SlkcQqVxig519dbEwIhAI%2FUYoGBMIwOjXiYlAaD3Ml4ETkY8Rb7ncgRh25FO4OhKv8DCFcQABoMNjM3NDIzMTgzODA1IgyJU5maHqQBsBrVpv4q3APh3YY1c4ii6F0cD6X%2FVit1E2%2BXZzCS1hRVOkpvBk6vfG4%2FW11SEv0nehpj3JgKhYcL%2BGgHgxMcAbrZdKWdhkeNgfMs8zUecZFklqa4QiJjvewriXPks7hM5Roza8Nj743gnO4CMSkZ0jPJ%2Ft3bOXUYNwqoBjWQfF9B5k5Hfos6E%2F%2FiZxD60dT4s0G7zUKZW00DLardA7%2FMbOQig2navjiGi5TccJsmfkmCQQzhVNi44jMcOAL5pIJQshGKtzpjiZvGAly7hcLof3G2X1s%2FmutNwDQ3WGdE5UyfsvtY7BQYWOdGpg0O42RAik8IoNlx7HT8VWb9rTVdgJvvsdKLTAzTM2oc%2Bxb%2FkD0eKnTHNgofaKbbRgGD%2FP8ltQsE08Q%2FV27vuy6mvlVM41kq9cKlCnw7%2FLUSVg2SNs%2FubA1KpcHLwGE4L0BArSNqsPAqDIbcxLoxYLiibBdxo34jdFHux2oG4R3Xzcs7an4iiGROOajf92mPsUHH26lTD1ky0CKumqDNkIJOEqTejCwYe5lDhMm%2B%2B5mpBoS65SXwvxGmBGkdkEJNkqFYMVuSCf3xHalDBpg%2FnlLhodgZHH01hiYEup9Znir0lpnc%2FOjkTW70%2F8F6c5OSp18qiLbfTPVNIDDbo%2FvEBjqkAYLoBL61oZ8CirQs2wz9YDGkdYz8%2FrHKstB6xI336U%2F9vm3u6ahR3P8JpQtTqmtGC4tjBrXPziORnjN2h%2ByUEfQisX6W5SaMqCZgggNuNkPUqWYM6%2B1njwW6KByDoOr%2FEnmzvjckeAQRsFrZez%2FnOpWT2FhR4sPdyvYp%2B79nZZ6%2FHjazlfS1kw%2B%2BEn6GNQH5%2BQ315C99sb7LYDtTweGIerLEIOl2&X-Amz-Signature=bfc15bc62ef69af8936f81c3ced85febfe7b155366e8549627293b5ccc71e6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZCPNWA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQC7rp5bqQOlFvrf6fZssE6%2BR8On1SlkcQqVxig519dbEwIhAI%2FUYoGBMIwOjXiYlAaD3Ml4ETkY8Rb7ncgRh25FO4OhKv8DCFcQABoMNjM3NDIzMTgzODA1IgyJU5maHqQBsBrVpv4q3APh3YY1c4ii6F0cD6X%2FVit1E2%2BXZzCS1hRVOkpvBk6vfG4%2FW11SEv0nehpj3JgKhYcL%2BGgHgxMcAbrZdKWdhkeNgfMs8zUecZFklqa4QiJjvewriXPks7hM5Roza8Nj743gnO4CMSkZ0jPJ%2Ft3bOXUYNwqoBjWQfF9B5k5Hfos6E%2F%2FiZxD60dT4s0G7zUKZW00DLardA7%2FMbOQig2navjiGi5TccJsmfkmCQQzhVNi44jMcOAL5pIJQshGKtzpjiZvGAly7hcLof3G2X1s%2FmutNwDQ3WGdE5UyfsvtY7BQYWOdGpg0O42RAik8IoNlx7HT8VWb9rTVdgJvvsdKLTAzTM2oc%2Bxb%2FkD0eKnTHNgofaKbbRgGD%2FP8ltQsE08Q%2FV27vuy6mvlVM41kq9cKlCnw7%2FLUSVg2SNs%2FubA1KpcHLwGE4L0BArSNqsPAqDIbcxLoxYLiibBdxo34jdFHux2oG4R3Xzcs7an4iiGROOajf92mPsUHH26lTD1ky0CKumqDNkIJOEqTejCwYe5lDhMm%2B%2B5mpBoS65SXwvxGmBGkdkEJNkqFYMVuSCf3xHalDBpg%2FnlLhodgZHH01hiYEup9Znir0lpnc%2FOjkTW70%2F8F6c5OSp18qiLbfTPVNIDDbo%2FvEBjqkAYLoBL61oZ8CirQs2wz9YDGkdYz8%2FrHKstB6xI336U%2F9vm3u6ahR3P8JpQtTqmtGC4tjBrXPziORnjN2h%2ByUEfQisX6W5SaMqCZgggNuNkPUqWYM6%2B1njwW6KByDoOr%2FEnmzvjckeAQRsFrZez%2FnOpWT2FhR4sPdyvYp%2B79nZZ6%2FHjazlfS1kw%2B%2BEn6GNQH5%2BQ315C99sb7LYDtTweGIerLEIOl2&X-Amz-Signature=d7d17d72a23263defa32bb5a3211246972457187c2e62217708d08fad56fcf31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

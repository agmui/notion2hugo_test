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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYNIJXN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEv%2BlVQtiWGYiGqNwblFaFIFQI2V4zYEy4hiibcQOc0aAiAWV%2BfrxrrBx8OLYMPRb3fl3KgjoRWOu3oNbAd0s2GTlyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqkK7XXu5Jr0ee%2FzAKtwDSvl%2FXAiJUYCQrZ5hMGEi0N59KMwrGTge29WfRvKfWzMBamfTAbS2aVT443Cz1EKkIm6LB%2FNM5cExbLk3wO1S1GINafFxPHKIeuHyLj%2FCHKx7lqkin1D%2BTW1KJVbZq2UPoPY%2FM5iJwSYrI70r41mF9nHmD33xFc0wsTfa5zRrrMNCB4X8l8%2FJYGgmyu0Z1ADiNlJHXvkDZ3LStxXfjvbU4%2BoOwaNjqRcSdhPJgM%2BqDQBANVPOQpBApfBUGI8mFs1qhUN4BNsg%2FryOax%2BN9G2cCSHbt3SQ4MRmWRTNEW5E02X4WJGcF0GgRbELs6Yo%2BgDXzG1uoqcVupDJmUgD7KbpaO80WRrU9%2BrzbDwdAkv%2FntFO9qONCQdJglPve94uE9fotxBMBinT%2BAynkp7uGgjGcXNeDhMx5ruX%2FH3NjFGBsjofssVzW62ZymoGfKiOusO4arVcwOCiiocZPjypI9RzFoArlIv8XYnfZ2r0Spa0TjOwVqyp8W76tgoq1bJ1b8RjBa4WVH%2FuC9y7yzoyiJc1gZ0KIc2XxqqEnOOL5fhuyBij9fSRJ4kXuplXq5phmEPGvT4YSBR7DDPMnEkMw4OxaBDYxoqbJh%2FLe7GD12wWBF2IoU9fH7xy3vphCEkw2uOTwwY6pgF4mzl5ptuGH5%2F3m70yipsADmlqb5rOMgooYxg0opfB%2BJeZlENiOD3H7xGJRJnIm%2BuZpWa8%2BbimKKbJG29EO2eXC8lJmTP37YzeMCmMRwn94U4MImShyHR8lI7u0WY9rGZo42fMK2FdQxwt71Tp%2FR2BF3tkBZXf%2FqrDdMA%2BYM34vBz%2FgpLfse1LWpoXIlt%2Bz%2B4xkftpgxJivsVyjsARLXWORP1a3va6&X-Amz-Signature=d9c7aa372d84574e10b6756d556ed073c25a47671ad34edb7c18acd3a2ed9369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYNIJXN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEv%2BlVQtiWGYiGqNwblFaFIFQI2V4zYEy4hiibcQOc0aAiAWV%2BfrxrrBx8OLYMPRb3fl3KgjoRWOu3oNbAd0s2GTlyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqkK7XXu5Jr0ee%2FzAKtwDSvl%2FXAiJUYCQrZ5hMGEi0N59KMwrGTge29WfRvKfWzMBamfTAbS2aVT443Cz1EKkIm6LB%2FNM5cExbLk3wO1S1GINafFxPHKIeuHyLj%2FCHKx7lqkin1D%2BTW1KJVbZq2UPoPY%2FM5iJwSYrI70r41mF9nHmD33xFc0wsTfa5zRrrMNCB4X8l8%2FJYGgmyu0Z1ADiNlJHXvkDZ3LStxXfjvbU4%2BoOwaNjqRcSdhPJgM%2BqDQBANVPOQpBApfBUGI8mFs1qhUN4BNsg%2FryOax%2BN9G2cCSHbt3SQ4MRmWRTNEW5E02X4WJGcF0GgRbELs6Yo%2BgDXzG1uoqcVupDJmUgD7KbpaO80WRrU9%2BrzbDwdAkv%2FntFO9qONCQdJglPve94uE9fotxBMBinT%2BAynkp7uGgjGcXNeDhMx5ruX%2FH3NjFGBsjofssVzW62ZymoGfKiOusO4arVcwOCiiocZPjypI9RzFoArlIv8XYnfZ2r0Spa0TjOwVqyp8W76tgoq1bJ1b8RjBa4WVH%2FuC9y7yzoyiJc1gZ0KIc2XxqqEnOOL5fhuyBij9fSRJ4kXuplXq5phmEPGvT4YSBR7DDPMnEkMw4OxaBDYxoqbJh%2FLe7GD12wWBF2IoU9fH7xy3vphCEkw2uOTwwY6pgF4mzl5ptuGH5%2F3m70yipsADmlqb5rOMgooYxg0opfB%2BJeZlENiOD3H7xGJRJnIm%2BuZpWa8%2BbimKKbJG29EO2eXC8lJmTP37YzeMCmMRwn94U4MImShyHR8lI7u0WY9rGZo42fMK2FdQxwt71Tp%2FR2BF3tkBZXf%2FqrDdMA%2BYM34vBz%2FgpLfse1LWpoXIlt%2Bz%2B4xkftpgxJivsVyjsARLXWORP1a3va6&X-Amz-Signature=b71e06e5bd5fa4524dc47c2d94baf33423f39c4779a677f8615f571e248ac3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYNIJXN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEv%2BlVQtiWGYiGqNwblFaFIFQI2V4zYEy4hiibcQOc0aAiAWV%2BfrxrrBx8OLYMPRb3fl3KgjoRWOu3oNbAd0s2GTlyqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqkK7XXu5Jr0ee%2FzAKtwDSvl%2FXAiJUYCQrZ5hMGEi0N59KMwrGTge29WfRvKfWzMBamfTAbS2aVT443Cz1EKkIm6LB%2FNM5cExbLk3wO1S1GINafFxPHKIeuHyLj%2FCHKx7lqkin1D%2BTW1KJVbZq2UPoPY%2FM5iJwSYrI70r41mF9nHmD33xFc0wsTfa5zRrrMNCB4X8l8%2FJYGgmyu0Z1ADiNlJHXvkDZ3LStxXfjvbU4%2BoOwaNjqRcSdhPJgM%2BqDQBANVPOQpBApfBUGI8mFs1qhUN4BNsg%2FryOax%2BN9G2cCSHbt3SQ4MRmWRTNEW5E02X4WJGcF0GgRbELs6Yo%2BgDXzG1uoqcVupDJmUgD7KbpaO80WRrU9%2BrzbDwdAkv%2FntFO9qONCQdJglPve94uE9fotxBMBinT%2BAynkp7uGgjGcXNeDhMx5ruX%2FH3NjFGBsjofssVzW62ZymoGfKiOusO4arVcwOCiiocZPjypI9RzFoArlIv8XYnfZ2r0Spa0TjOwVqyp8W76tgoq1bJ1b8RjBa4WVH%2FuC9y7yzoyiJc1gZ0KIc2XxqqEnOOL5fhuyBij9fSRJ4kXuplXq5phmEPGvT4YSBR7DDPMnEkMw4OxaBDYxoqbJh%2FLe7GD12wWBF2IoU9fH7xy3vphCEkw2uOTwwY6pgF4mzl5ptuGH5%2F3m70yipsADmlqb5rOMgooYxg0opfB%2BJeZlENiOD3H7xGJRJnIm%2BuZpWa8%2BbimKKbJG29EO2eXC8lJmTP37YzeMCmMRwn94U4MImShyHR8lI7u0WY9rGZo42fMK2FdQxwt71Tp%2FR2BF3tkBZXf%2FqrDdMA%2BYM34vBz%2FgpLfse1LWpoXIlt%2Bz%2B4xkftpgxJivsVyjsARLXWORP1a3va6&X-Amz-Signature=55a8c66a7f9346811ceec8c98d4eea5ba159b91d7e193010d1f2f2bf431ecbed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

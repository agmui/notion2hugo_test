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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6JP4ZH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL9VB%2F8tBwkE%2Faji1kPDoVhMVc3DTg05Q5IX0G9tZz5AIhAIJNitMVRmo2QwI%2FinNoQNRNbvnm01naWD5%2FV1FDi3RSKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI0FEwIbEAYd9ffagq3AMtU65JXMDWYAKB%2B35AY3stt%2Bwi5cDUqdRkAcifhsJyyLM2KYudqlcniKi%2ForhZgv8QIV1VOZhmAawwoTvve5NVv2PyHjB7%2Bz%2FUgI9%2Bly%2B6AqCFz4re0PWJEjFi8txh7Q%2FwNEorDSoYvAutF1vaae0dMc8Y19ZyAwcBks6MCMZmujk6hKISIA2asgQq2yE1dg5Ys%2BEZMbiQRamyxVe%2BSV0lwa3vLNOlKXKbVgajWVQ9AnZnNl4fR2MUuhkBruF6STPJcBTIHDTWtNk9TRKHFyiJmlBuBwN8ijXigbb341svW1JIRGydM0DIs93XRX61Z82s5WxlqYlY%2BUBTEO2pjQd%2B4U0TznsS615%2FjDDkQHt%2BOvUh8KhTvHvBG8AkE0KVMa5jVBcZBmlDoi9Z%2By6s67D3NOntHoB%2FUJWfbWVhG6MmTIwPwcOVetaHViJgp2Pv1xBgFyesSxPzw%2B7sMs9XHIMaDuRljMccAo84EKoRnqBTKJGlB6JzO5ughuFNkykqCEwFQdUweDAqtVqoux1LIRbNMl36rJ8XYGBm4fsGGrGq7FF%2BTLjMtTfbxm5VhTCKz3vlpx2SyUNffx%2FTi0tizKXKfgSZE7FPp%2F9v2aHerPWVtuOh80YqBNpMQz6PUjDGj9vCBjqkAdYWOArLBJhgtdfXE1c%2BHt8qCPEkbvVbV55u3kdobkPmw%2BZ0nQVNsjQJcHUr9tnHw9MXAv%2BgPiSWjv2ttOYZ9X39OegtuUObQf0Oy9IJJa0Bx30M2Ph1lpVG0JVjsjOIiWra4oqFwsluP7q9YUBA3C27j2Gjqzc97WWkO%2F2ypNF5WI3UcUygl%2FYiNLF%2FWXgp5lPRL3eg2wxgy8llQZJBLavXzTJv&X-Amz-Signature=05682963709b1c14c72c640aa7bae21381c87e045644e2db90567ee5b7676587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6JP4ZH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL9VB%2F8tBwkE%2Faji1kPDoVhMVc3DTg05Q5IX0G9tZz5AIhAIJNitMVRmo2QwI%2FinNoQNRNbvnm01naWD5%2FV1FDi3RSKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI0FEwIbEAYd9ffagq3AMtU65JXMDWYAKB%2B35AY3stt%2Bwi5cDUqdRkAcifhsJyyLM2KYudqlcniKi%2ForhZgv8QIV1VOZhmAawwoTvve5NVv2PyHjB7%2Bz%2FUgI9%2Bly%2B6AqCFz4re0PWJEjFi8txh7Q%2FwNEorDSoYvAutF1vaae0dMc8Y19ZyAwcBks6MCMZmujk6hKISIA2asgQq2yE1dg5Ys%2BEZMbiQRamyxVe%2BSV0lwa3vLNOlKXKbVgajWVQ9AnZnNl4fR2MUuhkBruF6STPJcBTIHDTWtNk9TRKHFyiJmlBuBwN8ijXigbb341svW1JIRGydM0DIs93XRX61Z82s5WxlqYlY%2BUBTEO2pjQd%2B4U0TznsS615%2FjDDkQHt%2BOvUh8KhTvHvBG8AkE0KVMa5jVBcZBmlDoi9Z%2By6s67D3NOntHoB%2FUJWfbWVhG6MmTIwPwcOVetaHViJgp2Pv1xBgFyesSxPzw%2B7sMs9XHIMaDuRljMccAo84EKoRnqBTKJGlB6JzO5ughuFNkykqCEwFQdUweDAqtVqoux1LIRbNMl36rJ8XYGBm4fsGGrGq7FF%2BTLjMtTfbxm5VhTCKz3vlpx2SyUNffx%2FTi0tizKXKfgSZE7FPp%2F9v2aHerPWVtuOh80YqBNpMQz6PUjDGj9vCBjqkAdYWOArLBJhgtdfXE1c%2BHt8qCPEkbvVbV55u3kdobkPmw%2BZ0nQVNsjQJcHUr9tnHw9MXAv%2BgPiSWjv2ttOYZ9X39OegtuUObQf0Oy9IJJa0Bx30M2Ph1lpVG0JVjsjOIiWra4oqFwsluP7q9YUBA3C27j2Gjqzc97WWkO%2F2ypNF5WI3UcUygl%2FYiNLF%2FWXgp5lPRL3eg2wxgy8llQZJBLavXzTJv&X-Amz-Signature=4dd042d5e83f9caa99af8078f436f02905dc2030c56cf941a42690678eb47a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD6JP4ZH%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL9VB%2F8tBwkE%2Faji1kPDoVhMVc3DTg05Q5IX0G9tZz5AIhAIJNitMVRmo2QwI%2FinNoQNRNbvnm01naWD5%2FV1FDi3RSKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyI0FEwIbEAYd9ffagq3AMtU65JXMDWYAKB%2B35AY3stt%2Bwi5cDUqdRkAcifhsJyyLM2KYudqlcniKi%2ForhZgv8QIV1VOZhmAawwoTvve5NVv2PyHjB7%2Bz%2FUgI9%2Bly%2B6AqCFz4re0PWJEjFi8txh7Q%2FwNEorDSoYvAutF1vaae0dMc8Y19ZyAwcBks6MCMZmujk6hKISIA2asgQq2yE1dg5Ys%2BEZMbiQRamyxVe%2BSV0lwa3vLNOlKXKbVgajWVQ9AnZnNl4fR2MUuhkBruF6STPJcBTIHDTWtNk9TRKHFyiJmlBuBwN8ijXigbb341svW1JIRGydM0DIs93XRX61Z82s5WxlqYlY%2BUBTEO2pjQd%2B4U0TznsS615%2FjDDkQHt%2BOvUh8KhTvHvBG8AkE0KVMa5jVBcZBmlDoi9Z%2By6s67D3NOntHoB%2FUJWfbWVhG6MmTIwPwcOVetaHViJgp2Pv1xBgFyesSxPzw%2B7sMs9XHIMaDuRljMccAo84EKoRnqBTKJGlB6JzO5ughuFNkykqCEwFQdUweDAqtVqoux1LIRbNMl36rJ8XYGBm4fsGGrGq7FF%2BTLjMtTfbxm5VhTCKz3vlpx2SyUNffx%2FTi0tizKXKfgSZE7FPp%2F9v2aHerPWVtuOh80YqBNpMQz6PUjDGj9vCBjqkAdYWOArLBJhgtdfXE1c%2BHt8qCPEkbvVbV55u3kdobkPmw%2BZ0nQVNsjQJcHUr9tnHw9MXAv%2BgPiSWjv2ttOYZ9X39OegtuUObQf0Oy9IJJa0Bx30M2Ph1lpVG0JVjsjOIiWra4oqFwsluP7q9YUBA3C27j2Gjqzc97WWkO%2F2ypNF5WI3UcUygl%2FYiNLF%2FWXgp5lPRL3eg2wxgy8llQZJBLavXzTJv&X-Amz-Signature=293b3d027df39ea1b7d014b5b4d15dc5190affca343ff1ef8fb8d46d241c684e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

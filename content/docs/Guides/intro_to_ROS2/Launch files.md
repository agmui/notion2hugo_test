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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BUCFV6Q%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFZ5CsxVMjKwklh3wPHbR6Z62y6df45KXn5HxnfWhhIwIhAKyWK8JuaGDZ7gk5X6faQS%2B1ZoT%2Bfc6ww86ttBGeQ4P4KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHy489d%2FF%2BIi%2BIwPYq3ANp7%2BmoWJHonhqRG2bvb%2F5%2BtKF8GnOOBgJF6kFs5onOftrnKezqY8cjBQ%2FyBdNWNtu0cmGqu93x5WFMTKu6igQ%2BK9Ed2ios8Ri4kwZGgXRUHm%2B9t6kDdXBRruSV8zGfFpqjRDGHotM1YdngNCSyUSfOl6rur4%2B3z3jmhZRAr75ry%2B9VjSsThjUGucDJ6mynD6Xmo6TYYJGK01B0FK1cJk1dnrliOuY0LAoVoJp5Vsmu2f%2BQJJ1JSKAOddZ5GeNDzkRAuPMUsQvDUpk8RyvUT1%2FPgsmNStH%2FUHbMh15wbscR0UuYWlq3WdZvYis3TOYN7O5pVUXKZYY8jeU1e1sBDeMRXUKNxAoixkDQCJROOrenVKDb0ZtSKlsR%2BI78JtIESfMw3%2B9sWQS%2FZ0mtUIDHV%2BNAwJvxgclW3d7dW79BcKUlZLP7QpyZl%2FNTp0CGNiA5Djw9Zd8xVloPv9K9Lhe3qGw%2FQEyy38UxHl6LvqYBbrsmay6RtSUEeE4ebIb2I7kpSrqyv5qOMGNAKOlrTqJ8viiuMi%2FkrtmsAAk2dlsqrYJ28wUVocnvhem%2B3AqwHsfcr4vhSXVMjdkjw4gIIsGlvnoyJyDVKs6DA7h%2FELFVjzN%2FXIaoHAJoOVqC47g4WzDx8%2Fq8BjqkAQB24JzQm8I%2FIUBvCDWn1CwVAY5URd%2F2%2Fx7%2BYeaE%2FHB8BxDLCKbmJ%2FpvxW%2FB%2Bp%2FBH8fQ4rOAQC85i9bBiW78HWtLZJ2RZp7ShnEKDQSaUFNTl3w%2Fg2b9ixD9bcFtpYjjDoe3kxGATOtxcL7CB24g8BRFtb559bKEhUMd%2B2Anl4%2BOlLk%2FWNTEr7f5eJlcXNZ4ANXjsFWESUc1d53dvj5KH%2FD0KyJu&X-Amz-Signature=f5aaf9185715f06f099527d3b445a38d8cdf902f1b1d85433d8976a8855204d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BUCFV6Q%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFZ5CsxVMjKwklh3wPHbR6Z62y6df45KXn5HxnfWhhIwIhAKyWK8JuaGDZ7gk5X6faQS%2B1ZoT%2Bfc6ww86ttBGeQ4P4KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHy489d%2FF%2BIi%2BIwPYq3ANp7%2BmoWJHonhqRG2bvb%2F5%2BtKF8GnOOBgJF6kFs5onOftrnKezqY8cjBQ%2FyBdNWNtu0cmGqu93x5WFMTKu6igQ%2BK9Ed2ios8Ri4kwZGgXRUHm%2B9t6kDdXBRruSV8zGfFpqjRDGHotM1YdngNCSyUSfOl6rur4%2B3z3jmhZRAr75ry%2B9VjSsThjUGucDJ6mynD6Xmo6TYYJGK01B0FK1cJk1dnrliOuY0LAoVoJp5Vsmu2f%2BQJJ1JSKAOddZ5GeNDzkRAuPMUsQvDUpk8RyvUT1%2FPgsmNStH%2FUHbMh15wbscR0UuYWlq3WdZvYis3TOYN7O5pVUXKZYY8jeU1e1sBDeMRXUKNxAoixkDQCJROOrenVKDb0ZtSKlsR%2BI78JtIESfMw3%2B9sWQS%2FZ0mtUIDHV%2BNAwJvxgclW3d7dW79BcKUlZLP7QpyZl%2FNTp0CGNiA5Djw9Zd8xVloPv9K9Lhe3qGw%2FQEyy38UxHl6LvqYBbrsmay6RtSUEeE4ebIb2I7kpSrqyv5qOMGNAKOlrTqJ8viiuMi%2FkrtmsAAk2dlsqrYJ28wUVocnvhem%2B3AqwHsfcr4vhSXVMjdkjw4gIIsGlvnoyJyDVKs6DA7h%2FELFVjzN%2FXIaoHAJoOVqC47g4WzDx8%2Fq8BjqkAQB24JzQm8I%2FIUBvCDWn1CwVAY5URd%2F2%2Fx7%2BYeaE%2FHB8BxDLCKbmJ%2FpvxW%2FB%2Bp%2FBH8fQ4rOAQC85i9bBiW78HWtLZJ2RZp7ShnEKDQSaUFNTl3w%2Fg2b9ixD9bcFtpYjjDoe3kxGATOtxcL7CB24g8BRFtb559bKEhUMd%2B2Anl4%2BOlLk%2FWNTEr7f5eJlcXNZ4ANXjsFWESUc1d53dvj5KH%2FD0KyJu&X-Amz-Signature=5cddbfc89dc72a12910b6395dc7abc6cc396cb3e74f8c0531ca273e0f1a57a28&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BUCFV6Q%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFZ5CsxVMjKwklh3wPHbR6Z62y6df45KXn5HxnfWhhIwIhAKyWK8JuaGDZ7gk5X6faQS%2B1ZoT%2Bfc6ww86ttBGeQ4P4KogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHy489d%2FF%2BIi%2BIwPYq3ANp7%2BmoWJHonhqRG2bvb%2F5%2BtKF8GnOOBgJF6kFs5onOftrnKezqY8cjBQ%2FyBdNWNtu0cmGqu93x5WFMTKu6igQ%2BK9Ed2ios8Ri4kwZGgXRUHm%2B9t6kDdXBRruSV8zGfFpqjRDGHotM1YdngNCSyUSfOl6rur4%2B3z3jmhZRAr75ry%2B9VjSsThjUGucDJ6mynD6Xmo6TYYJGK01B0FK1cJk1dnrliOuY0LAoVoJp5Vsmu2f%2BQJJ1JSKAOddZ5GeNDzkRAuPMUsQvDUpk8RyvUT1%2FPgsmNStH%2FUHbMh15wbscR0UuYWlq3WdZvYis3TOYN7O5pVUXKZYY8jeU1e1sBDeMRXUKNxAoixkDQCJROOrenVKDb0ZtSKlsR%2BI78JtIESfMw3%2B9sWQS%2FZ0mtUIDHV%2BNAwJvxgclW3d7dW79BcKUlZLP7QpyZl%2FNTp0CGNiA5Djw9Zd8xVloPv9K9Lhe3qGw%2FQEyy38UxHl6LvqYBbrsmay6RtSUEeE4ebIb2I7kpSrqyv5qOMGNAKOlrTqJ8viiuMi%2FkrtmsAAk2dlsqrYJ28wUVocnvhem%2B3AqwHsfcr4vhSXVMjdkjw4gIIsGlvnoyJyDVKs6DA7h%2FELFVjzN%2FXIaoHAJoOVqC47g4WzDx8%2Fq8BjqkAQB24JzQm8I%2FIUBvCDWn1CwVAY5URd%2F2%2Fx7%2BYeaE%2FHB8BxDLCKbmJ%2FpvxW%2FB%2Bp%2FBH8fQ4rOAQC85i9bBiW78HWtLZJ2RZp7ShnEKDQSaUFNTl3w%2Fg2b9ixD9bcFtpYjjDoe3kxGATOtxcL7CB24g8BRFtb559bKEhUMd%2B2Anl4%2BOlLk%2FWNTEr7f5eJlcXNZ4ANXjsFWESUc1d53dvj5KH%2FD0KyJu&X-Amz-Signature=79655bed571e60b7df27300327eec4abe27e0a7fb12cbcb2287dfefecaa6e27d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

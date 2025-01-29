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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TO2NT3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk7YG1ojLo3O6GsdL4nPvwxzTb9TADWkirAqgwl%2BNGsAiBQpxA1BcAQ5de%2BuY8bcKf8SUCv2WCku3pv%2FZt1NSOYoSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ZWxqUVeSKFWIQPWKtwDm7shr3qOTny%2F7Oy2fTTxH1YecIZ6gXcah2LpY2H4hru1A2IfkJpbPsAjBt2sixfcjQxAlWWwzOr6TBWLRykua29ds52RN5%2F5jRSx3lf67qyS4Q5XScYyzXFrHQolvykfDk7LAnUuhwJMekohHZFDZ89VwtthZnEznx0k25goKXRrSzW72lR0ueVp9qhxutmGYVPbot9Rv6GzQBONzvdB6LnOyMu1vvx8jsWaqmR4yAiSmetpK44E2u%2Fd2zP08tGHAlGMUzmIkBtoQyK5cNft1wnWmx%2B9vIAnVyBtt4IinhdBma%2FGNTB%2BhosUrkRKsNByWuXrlgE3Re8Ku8AWhG9CnshmA35fQFc%2Flq5y1NqCEj4gQKGCyOxjgeylxkhXpTOnJuxxUZz%2FkZGL4jgfm8eHHr5bGEPCkY5sXCmRTOuG6z96N%2BMiI4qCIyADOqNuTL8KE6tHFf8Bsys3bVT8oQrZwz3DcZMBiGckbjPOt2Mndoi%2FqyYg0mFtDMGb3RV%2FYY27uOC8DV%2FL5PyOIsqtZj2n2eq3Y6eEhZ2gwkpFhQblh%2ByFrfPs5wOV8%2BGc2CIBJM4Cf6wY1NKBNmA%2F5Xn7w0sc8pjYAqBOfhmGBw%2BslQ%2F96TKNR2fAMorn6szb%2FWYwi83ovAY6pgHUD0o8vAU3d1EOrO7Fts%2BE0a6CgdW1qhNd27h%2Fnnsz0ayWwAGIIb97mIkDLkJPkrZlOwUROBwkEM5t5ieh0%2FvgbU%2B74ShsOQSlopIJtEu3ExnRqa9wwLpBSownFFmf0vaRkX4n3O4yfTILWpmPywGuXaC2BXLJfcqXC9CEPy%2BeU0ldnnYRPql421CiDm8RXhaqPJ%2F9Lrc0wlqsHZVp%2F2r1hRXbOcOo&X-Amz-Signature=f1404c613ce179eba31bae43e75e77f001caef9bedc814b8153eb46f4198d674&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TO2NT3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk7YG1ojLo3O6GsdL4nPvwxzTb9TADWkirAqgwl%2BNGsAiBQpxA1BcAQ5de%2BuY8bcKf8SUCv2WCku3pv%2FZt1NSOYoSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ZWxqUVeSKFWIQPWKtwDm7shr3qOTny%2F7Oy2fTTxH1YecIZ6gXcah2LpY2H4hru1A2IfkJpbPsAjBt2sixfcjQxAlWWwzOr6TBWLRykua29ds52RN5%2F5jRSx3lf67qyS4Q5XScYyzXFrHQolvykfDk7LAnUuhwJMekohHZFDZ89VwtthZnEznx0k25goKXRrSzW72lR0ueVp9qhxutmGYVPbot9Rv6GzQBONzvdB6LnOyMu1vvx8jsWaqmR4yAiSmetpK44E2u%2Fd2zP08tGHAlGMUzmIkBtoQyK5cNft1wnWmx%2B9vIAnVyBtt4IinhdBma%2FGNTB%2BhosUrkRKsNByWuXrlgE3Re8Ku8AWhG9CnshmA35fQFc%2Flq5y1NqCEj4gQKGCyOxjgeylxkhXpTOnJuxxUZz%2FkZGL4jgfm8eHHr5bGEPCkY5sXCmRTOuG6z96N%2BMiI4qCIyADOqNuTL8KE6tHFf8Bsys3bVT8oQrZwz3DcZMBiGckbjPOt2Mndoi%2FqyYg0mFtDMGb3RV%2FYY27uOC8DV%2FL5PyOIsqtZj2n2eq3Y6eEhZ2gwkpFhQblh%2ByFrfPs5wOV8%2BGc2CIBJM4Cf6wY1NKBNmA%2F5Xn7w0sc8pjYAqBOfhmGBw%2BslQ%2F96TKNR2fAMorn6szb%2FWYwi83ovAY6pgHUD0o8vAU3d1EOrO7Fts%2BE0a6CgdW1qhNd27h%2Fnnsz0ayWwAGIIb97mIkDLkJPkrZlOwUROBwkEM5t5ieh0%2FvgbU%2B74ShsOQSlopIJtEu3ExnRqa9wwLpBSownFFmf0vaRkX4n3O4yfTILWpmPywGuXaC2BXLJfcqXC9CEPy%2BeU0ldnnYRPql421CiDm8RXhaqPJ%2F9Lrc0wlqsHZVp%2F2r1hRXbOcOo&X-Amz-Signature=4a79ba769f76d5c236e2a89fc1948bb4b29d65a4b56ac22bed81f4b3832ac5d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7TO2NT3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T131501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk7YG1ojLo3O6GsdL4nPvwxzTb9TADWkirAqgwl%2BNGsAiBQpxA1BcAQ5de%2BuY8bcKf8SUCv2WCku3pv%2FZt1NSOYoSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8ZWxqUVeSKFWIQPWKtwDm7shr3qOTny%2F7Oy2fTTxH1YecIZ6gXcah2LpY2H4hru1A2IfkJpbPsAjBt2sixfcjQxAlWWwzOr6TBWLRykua29ds52RN5%2F5jRSx3lf67qyS4Q5XScYyzXFrHQolvykfDk7LAnUuhwJMekohHZFDZ89VwtthZnEznx0k25goKXRrSzW72lR0ueVp9qhxutmGYVPbot9Rv6GzQBONzvdB6LnOyMu1vvx8jsWaqmR4yAiSmetpK44E2u%2Fd2zP08tGHAlGMUzmIkBtoQyK5cNft1wnWmx%2B9vIAnVyBtt4IinhdBma%2FGNTB%2BhosUrkRKsNByWuXrlgE3Re8Ku8AWhG9CnshmA35fQFc%2Flq5y1NqCEj4gQKGCyOxjgeylxkhXpTOnJuxxUZz%2FkZGL4jgfm8eHHr5bGEPCkY5sXCmRTOuG6z96N%2BMiI4qCIyADOqNuTL8KE6tHFf8Bsys3bVT8oQrZwz3DcZMBiGckbjPOt2Mndoi%2FqyYg0mFtDMGb3RV%2FYY27uOC8DV%2FL5PyOIsqtZj2n2eq3Y6eEhZ2gwkpFhQblh%2ByFrfPs5wOV8%2BGc2CIBJM4Cf6wY1NKBNmA%2F5Xn7w0sc8pjYAqBOfhmGBw%2BslQ%2F96TKNR2fAMorn6szb%2FWYwi83ovAY6pgHUD0o8vAU3d1EOrO7Fts%2BE0a6CgdW1qhNd27h%2Fnnsz0ayWwAGIIb97mIkDLkJPkrZlOwUROBwkEM5t5ieh0%2FvgbU%2B74ShsOQSlopIJtEu3ExnRqa9wwLpBSownFFmf0vaRkX4n3O4yfTILWpmPywGuXaC2BXLJfcqXC9CEPy%2BeU0ldnnYRPql421CiDm8RXhaqPJ%2F9Lrc0wlqsHZVp%2F2r1hRXbOcOo&X-Amz-Signature=06ada2b0e49700297d859a1274072218c52a771278bc2090b983f5eba4323c4a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

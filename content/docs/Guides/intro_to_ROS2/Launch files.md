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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6MK5EOD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7sDKdAVRNmJrZVFHKtaW6vItVYlK29AtHHsPChArR0gIhAJhDlssTSYazjQqLnffT4yuVDVUm%2BwMTXA6CcGAqgzc0Kv8DCBoQABoMNjM3NDIzMTgzODA1Igx%2FrXKWeupjOh2YVdsq3AMPtgKERWd61XxEd6clsLhOkWxY0c%2BUXQTHTWse4p4Zs5FaeM3f8EVQwT3GhWcwmz9qbUBLsoNnas4uyf3OK%2FVUxTLAvLqOoFsaGwLZ4eM8RTHooD%2F5yv3wWsMdVaDak%2BUe8K57L9xQCvDfOq2vs2178jS4h0%2FaCCslzu6YWRBdZh8ZiZiFFapjKdb5tVP0cMYYsXQBQozn%2BdaJqf2XWswwjFNp120m07Iy94Nyjzt3nTGoN0TNQ7o1VZlPqyq41uDtQvGlgyZCrc%2BdeQFTsCB7%2FwE9sRpaRKVNkldkQsXzlWIFYOkyxI9hjBxeYIjCkvkeD0zJvX9C6lmUHbw8G5Qh8iNOeMUyhygABNdJNgrL1E8CMyd5psTpCYXk3Hmhx7Fpwze2am8ywoPqDX0c7N3TYkoB0wDUt86i6MFhToiDIoEoKx12nlOOjRUpFUD7xdnfTF91bCy6B1BBZTseCgwubd%2BYAPqeULTywvKvHGWyO6PpHLQOCqT824J3nE9jJOvcwBnCO37RkMinBmx0Mv%2BayGa7A9MVfD9txAahO1OgHy14XbqA3SSPRNjAERLLFYwy8%2BTsu1t4zOdHgtbDg%2FlT0CoYYGmyx2zXi1VOlJ55kh7BK21IfaW5Tmfw7jC%2Bme29BjqkAUcB1ouxKEffHusUrCUqaQgdl1hDzzkZVQNFYxLCZo4bRyJNYV5n27jiCselfuE7ZrqVkB1%2F8YkKmh4J5QOvN954t71lS2%2BxMnqJg4%2BA7sbYl%2BkD8F6Y4iiGxxs68zapVMq7ktVXMduCBQSmQduzAiPRS1qyQdMgikY3wtl0MANjAhv07czdK3zfJ%2F%2BsL%2BiA93AhVLXLvz4sumkZp3ClsoTI3k5z&X-Amz-Signature=eaaa29f5e4d4c27b8f2218bab8f211cdd34007b1c026a14ddd04aff8669c81d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6MK5EOD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7sDKdAVRNmJrZVFHKtaW6vItVYlK29AtHHsPChArR0gIhAJhDlssTSYazjQqLnffT4yuVDVUm%2BwMTXA6CcGAqgzc0Kv8DCBoQABoMNjM3NDIzMTgzODA1Igx%2FrXKWeupjOh2YVdsq3AMPtgKERWd61XxEd6clsLhOkWxY0c%2BUXQTHTWse4p4Zs5FaeM3f8EVQwT3GhWcwmz9qbUBLsoNnas4uyf3OK%2FVUxTLAvLqOoFsaGwLZ4eM8RTHooD%2F5yv3wWsMdVaDak%2BUe8K57L9xQCvDfOq2vs2178jS4h0%2FaCCslzu6YWRBdZh8ZiZiFFapjKdb5tVP0cMYYsXQBQozn%2BdaJqf2XWswwjFNp120m07Iy94Nyjzt3nTGoN0TNQ7o1VZlPqyq41uDtQvGlgyZCrc%2BdeQFTsCB7%2FwE9sRpaRKVNkldkQsXzlWIFYOkyxI9hjBxeYIjCkvkeD0zJvX9C6lmUHbw8G5Qh8iNOeMUyhygABNdJNgrL1E8CMyd5psTpCYXk3Hmhx7Fpwze2am8ywoPqDX0c7N3TYkoB0wDUt86i6MFhToiDIoEoKx12nlOOjRUpFUD7xdnfTF91bCy6B1BBZTseCgwubd%2BYAPqeULTywvKvHGWyO6PpHLQOCqT824J3nE9jJOvcwBnCO37RkMinBmx0Mv%2BayGa7A9MVfD9txAahO1OgHy14XbqA3SSPRNjAERLLFYwy8%2BTsu1t4zOdHgtbDg%2FlT0CoYYGmyx2zXi1VOlJ55kh7BK21IfaW5Tmfw7jC%2Bme29BjqkAUcB1ouxKEffHusUrCUqaQgdl1hDzzkZVQNFYxLCZo4bRyJNYV5n27jiCselfuE7ZrqVkB1%2F8YkKmh4J5QOvN954t71lS2%2BxMnqJg4%2BA7sbYl%2BkD8F6Y4iiGxxs68zapVMq7ktVXMduCBQSmQduzAiPRS1qyQdMgikY3wtl0MANjAhv07czdK3zfJ%2F%2BsL%2BiA93AhVLXLvz4sumkZp3ClsoTI3k5z&X-Amz-Signature=be42259f7fb3a0ac9081a02b8fa109cd66a771fe35c694168e93a63c28adb687&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6MK5EOD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7sDKdAVRNmJrZVFHKtaW6vItVYlK29AtHHsPChArR0gIhAJhDlssTSYazjQqLnffT4yuVDVUm%2BwMTXA6CcGAqgzc0Kv8DCBoQABoMNjM3NDIzMTgzODA1Igx%2FrXKWeupjOh2YVdsq3AMPtgKERWd61XxEd6clsLhOkWxY0c%2BUXQTHTWse4p4Zs5FaeM3f8EVQwT3GhWcwmz9qbUBLsoNnas4uyf3OK%2FVUxTLAvLqOoFsaGwLZ4eM8RTHooD%2F5yv3wWsMdVaDak%2BUe8K57L9xQCvDfOq2vs2178jS4h0%2FaCCslzu6YWRBdZh8ZiZiFFapjKdb5tVP0cMYYsXQBQozn%2BdaJqf2XWswwjFNp120m07Iy94Nyjzt3nTGoN0TNQ7o1VZlPqyq41uDtQvGlgyZCrc%2BdeQFTsCB7%2FwE9sRpaRKVNkldkQsXzlWIFYOkyxI9hjBxeYIjCkvkeD0zJvX9C6lmUHbw8G5Qh8iNOeMUyhygABNdJNgrL1E8CMyd5psTpCYXk3Hmhx7Fpwze2am8ywoPqDX0c7N3TYkoB0wDUt86i6MFhToiDIoEoKx12nlOOjRUpFUD7xdnfTF91bCy6B1BBZTseCgwubd%2BYAPqeULTywvKvHGWyO6PpHLQOCqT824J3nE9jJOvcwBnCO37RkMinBmx0Mv%2BayGa7A9MVfD9txAahO1OgHy14XbqA3SSPRNjAERLLFYwy8%2BTsu1t4zOdHgtbDg%2FlT0CoYYGmyx2zXi1VOlJ55kh7BK21IfaW5Tmfw7jC%2Bme29BjqkAUcB1ouxKEffHusUrCUqaQgdl1hDzzkZVQNFYxLCZo4bRyJNYV5n27jiCselfuE7ZrqVkB1%2F8YkKmh4J5QOvN954t71lS2%2BxMnqJg4%2BA7sbYl%2BkD8F6Y4iiGxxs68zapVMq7ktVXMduCBQSmQduzAiPRS1qyQdMgikY3wtl0MANjAhv07czdK3zfJ%2F%2BsL%2BiA93AhVLXLvz4sumkZp3ClsoTI3k5z&X-Amz-Signature=c1a928b98cca3d1c86e3008ac8d5f938fe1ca4d97a20ef81f136c2578c1e57ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

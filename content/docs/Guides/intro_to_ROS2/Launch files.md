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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S7FXEKZ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEYEDaVqngg3RbzqJqQZ7TnAZLRdCGZMQpRCsU81qnVAiADqxmj4LoUGaFAixYrNxIA1kDh2eTKx9Y8PuuNU0hlTCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMGHVgWMTmyt6C%2BkSwKtwDylx6WKxm%2FYixP%2B3v5NqP8NvfGU5tlTl2L%2BDEq2kK0mNDN%2BczDqpo4tP8ByxgyZetV8WwyfJUe0pAABAZ88URqTDzcFR0tuvgjOwmVFLga7y7f7Y4VilO19snNbTbbbPHPRuUeVOR29OY3BxB%2BF0ZDrUJw8IM1LStAToQwZV8lUgPRjtnZEsEsEwV742VX4kMcHZ5WTI1eEcSbDmxSmudkLljY%2F2xEnVwTVI%2BMKr41Z5xSMQcTAJCejZp3kzMMrkqgKmjZliCbpyXc%2B7N8HYWpFQzY699TfLR8P%2BtAvhskneXFn7zYCZdaox3R2MSS6g%2F27hn5PxHti3EgcWFkNNhJKSAfwwpMzj3iDyEmtWB1KcXIxkDBkuA3cnQ6X%2Bkx48Zaca3PSWDdVCn1S208CUIEsPHVnqFNGbPhh3d3jLU9H4UVV8At5gPuI3r2AZlTYbrKD70U79vKhJmhCTX%2BgWEj2xWAkl0g%2F1QCtSUaZn7lnO7F6CFS71QgFVQ6dMkBISaZ5hinXyzEOG5CXaAUq0EGDoBdCSwcfX9YLkW%2B151kTjBbZs3CUM5tAHwF07htVj2aTIi2JdPPqs3YokONUAy58P7RP0D17BebJ6VwCRD9G3ToHtJK1Hc%2Bbjwhb0w9eLXvgY6pgGQQE6eZC7%2Fb8osVS9HVIscAs%2FT6UoK3y0P%2FnxAnuUsXOZgrhuK5Rnjvi18aOjsfpmkwIRVvXYO9bzvvCysFPJfPpro3LItU2kF3aCDGh%2F5Ry%2BNUTaWFCOwmRI13lTYhQDwXMf0VmdmM8%2Fw%2FxI%2FSZN68BOz1VyiMUvVMufek76WYH%2BQj%2BEkb9ExXJORkPdS%2BG0YEblYxCqZq3FHhBkKvNDGUG8859UD&X-Amz-Signature=efa091763dbc377c1a75326ced3fda5a6eacbe0158a9adf110e813f58a89048f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S7FXEKZ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEYEDaVqngg3RbzqJqQZ7TnAZLRdCGZMQpRCsU81qnVAiADqxmj4LoUGaFAixYrNxIA1kDh2eTKx9Y8PuuNU0hlTCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMGHVgWMTmyt6C%2BkSwKtwDylx6WKxm%2FYixP%2B3v5NqP8NvfGU5tlTl2L%2BDEq2kK0mNDN%2BczDqpo4tP8ByxgyZetV8WwyfJUe0pAABAZ88URqTDzcFR0tuvgjOwmVFLga7y7f7Y4VilO19snNbTbbbPHPRuUeVOR29OY3BxB%2BF0ZDrUJw8IM1LStAToQwZV8lUgPRjtnZEsEsEwV742VX4kMcHZ5WTI1eEcSbDmxSmudkLljY%2F2xEnVwTVI%2BMKr41Z5xSMQcTAJCejZp3kzMMrkqgKmjZliCbpyXc%2B7N8HYWpFQzY699TfLR8P%2BtAvhskneXFn7zYCZdaox3R2MSS6g%2F27hn5PxHti3EgcWFkNNhJKSAfwwpMzj3iDyEmtWB1KcXIxkDBkuA3cnQ6X%2Bkx48Zaca3PSWDdVCn1S208CUIEsPHVnqFNGbPhh3d3jLU9H4UVV8At5gPuI3r2AZlTYbrKD70U79vKhJmhCTX%2BgWEj2xWAkl0g%2F1QCtSUaZn7lnO7F6CFS71QgFVQ6dMkBISaZ5hinXyzEOG5CXaAUq0EGDoBdCSwcfX9YLkW%2B151kTjBbZs3CUM5tAHwF07htVj2aTIi2JdPPqs3YokONUAy58P7RP0D17BebJ6VwCRD9G3ToHtJK1Hc%2Bbjwhb0w9eLXvgY6pgGQQE6eZC7%2Fb8osVS9HVIscAs%2FT6UoK3y0P%2FnxAnuUsXOZgrhuK5Rnjvi18aOjsfpmkwIRVvXYO9bzvvCysFPJfPpro3LItU2kF3aCDGh%2F5Ry%2BNUTaWFCOwmRI13lTYhQDwXMf0VmdmM8%2Fw%2FxI%2FSZN68BOz1VyiMUvVMufek76WYH%2BQj%2BEkb9ExXJORkPdS%2BG0YEblYxCqZq3FHhBkKvNDGUG8859UD&X-Amz-Signature=f85bfb3e92f351780b5c8a3cc611cb2270288a1e1894bf950c2c168c03bcb3d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664S7FXEKZ%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGEYEDaVqngg3RbzqJqQZ7TnAZLRdCGZMQpRCsU81qnVAiADqxmj4LoUGaFAixYrNxIA1kDh2eTKx9Y8PuuNU0hlTCr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMGHVgWMTmyt6C%2BkSwKtwDylx6WKxm%2FYixP%2B3v5NqP8NvfGU5tlTl2L%2BDEq2kK0mNDN%2BczDqpo4tP8ByxgyZetV8WwyfJUe0pAABAZ88URqTDzcFR0tuvgjOwmVFLga7y7f7Y4VilO19snNbTbbbPHPRuUeVOR29OY3BxB%2BF0ZDrUJw8IM1LStAToQwZV8lUgPRjtnZEsEsEwV742VX4kMcHZ5WTI1eEcSbDmxSmudkLljY%2F2xEnVwTVI%2BMKr41Z5xSMQcTAJCejZp3kzMMrkqgKmjZliCbpyXc%2B7N8HYWpFQzY699TfLR8P%2BtAvhskneXFn7zYCZdaox3R2MSS6g%2F27hn5PxHti3EgcWFkNNhJKSAfwwpMzj3iDyEmtWB1KcXIxkDBkuA3cnQ6X%2Bkx48Zaca3PSWDdVCn1S208CUIEsPHVnqFNGbPhh3d3jLU9H4UVV8At5gPuI3r2AZlTYbrKD70U79vKhJmhCTX%2BgWEj2xWAkl0g%2F1QCtSUaZn7lnO7F6CFS71QgFVQ6dMkBISaZ5hinXyzEOG5CXaAUq0EGDoBdCSwcfX9YLkW%2B151kTjBbZs3CUM5tAHwF07htVj2aTIi2JdPPqs3YokONUAy58P7RP0D17BebJ6VwCRD9G3ToHtJK1Hc%2Bbjwhb0w9eLXvgY6pgGQQE6eZC7%2Fb8osVS9HVIscAs%2FT6UoK3y0P%2FnxAnuUsXOZgrhuK5Rnjvi18aOjsfpmkwIRVvXYO9bzvvCysFPJfPpro3LItU2kF3aCDGh%2F5Ry%2BNUTaWFCOwmRI13lTYhQDwXMf0VmdmM8%2Fw%2FxI%2FSZN68BOz1VyiMUvVMufek76WYH%2BQj%2BEkb9ExXJORkPdS%2BG0YEblYxCqZq3FHhBkKvNDGUG8859UD&X-Amz-Signature=9188b71b57ca60d860394aa3c1693561cd816f267d61e636fdf298a70c175128&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

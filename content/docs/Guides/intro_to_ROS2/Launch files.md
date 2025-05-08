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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNSC5FII%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDw353oXENajHsofOQulAZfvKXQ6VN5jtz%2FnLStNku8HAiEAh5rtOEztBLVGiSBGMGlZXu389Zus%2F03ersTizGyx2LQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvC4QyYdbsVAHG64ircA4DckA9jO3j%2B5USQpQAJIwj2Npfe4BneYG3JMt44jl%2B87Yt8d3wJaqpGSsr%2FaGrmL7Modlw1yuaQgf0g%2FDmO2nyA%2FUIqvBuldV2pJNIFm5%2B8E5NjZFJd0AVHmJez5sQyPYpV3dwaptUbdJMRrhbXIJrnFB1MROu9FxwOH1hZBfDkvCincrcx%2BgUkmfeWQJAIzrWOMh6gyc1PKVrT7FSFqIKnD90RD5UGrFvhPG4DsgFVwxnqZZlfGVwGypExSGcQ1wJL15Z5%2BOO5Z3KW3E0VsenAWeuJJzhq2Mi01sYDHe%2B987kezzpNMuYVQD7LVSXbYLp%2F6bK%2FRfNvOyHPIBt0oaMz%2FFdWpjKaumxRU7CtXp5sRtYZM%2BcMt2W1tCu7GTeN0E3E0COfNt1deue9PB%2BuXL%2BKO46mMM9CYZaEBi%2BbTPPuAAZK376YHN9EbV9enCulUaK8zjT7Rdv2n%2FqDZoT8Xvzds0MoCecAsUslv6vAlQIbfj9TyB0HkN9RpPjTBe8VoUWUW1tcSJWAq%2Bmbeo4s8oJR9BYTrs4tkJO9BVzr6W76Q9J%2FD8vaRL8y2iNZ4M9FRtQF%2B%2BAHOgBGm3a3tHx5niYq0ynNh%2BZlmO28iQfxeTpaR0TavbDL9LgParQYMM7j9MAGOqUBHWON%2F3ErTw425WHAaeZKZxDhL5URVtp6JEI2p4wAxvKwuNB1l21XrTEOl06i898jS4uLslM1RKh8yxx0KCDCTVGzdhaIK28FFwP7bxD7EvJXkiERBnXuUpFLCzV5soOgM%2BGyTHFseUfi2PW97DHOuJs%2FVPQGb45i%2B9LKrr7hTMaSp47c5bktsUiUYzmuX5R7hV55xQA%2B1r1MDLyrCikVa4yaPvZ7&X-Amz-Signature=877c947c2e6862731772adbf3944834ed93b50381c3d23b56977d6958720a6d3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNSC5FII%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDw353oXENajHsofOQulAZfvKXQ6VN5jtz%2FnLStNku8HAiEAh5rtOEztBLVGiSBGMGlZXu389Zus%2F03ersTizGyx2LQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvC4QyYdbsVAHG64ircA4DckA9jO3j%2B5USQpQAJIwj2Npfe4BneYG3JMt44jl%2B87Yt8d3wJaqpGSsr%2FaGrmL7Modlw1yuaQgf0g%2FDmO2nyA%2FUIqvBuldV2pJNIFm5%2B8E5NjZFJd0AVHmJez5sQyPYpV3dwaptUbdJMRrhbXIJrnFB1MROu9FxwOH1hZBfDkvCincrcx%2BgUkmfeWQJAIzrWOMh6gyc1PKVrT7FSFqIKnD90RD5UGrFvhPG4DsgFVwxnqZZlfGVwGypExSGcQ1wJL15Z5%2BOO5Z3KW3E0VsenAWeuJJzhq2Mi01sYDHe%2B987kezzpNMuYVQD7LVSXbYLp%2F6bK%2FRfNvOyHPIBt0oaMz%2FFdWpjKaumxRU7CtXp5sRtYZM%2BcMt2W1tCu7GTeN0E3E0COfNt1deue9PB%2BuXL%2BKO46mMM9CYZaEBi%2BbTPPuAAZK376YHN9EbV9enCulUaK8zjT7Rdv2n%2FqDZoT8Xvzds0MoCecAsUslv6vAlQIbfj9TyB0HkN9RpPjTBe8VoUWUW1tcSJWAq%2Bmbeo4s8oJR9BYTrs4tkJO9BVzr6W76Q9J%2FD8vaRL8y2iNZ4M9FRtQF%2B%2BAHOgBGm3a3tHx5niYq0ynNh%2BZlmO28iQfxeTpaR0TavbDL9LgParQYMM7j9MAGOqUBHWON%2F3ErTw425WHAaeZKZxDhL5URVtp6JEI2p4wAxvKwuNB1l21XrTEOl06i898jS4uLslM1RKh8yxx0KCDCTVGzdhaIK28FFwP7bxD7EvJXkiERBnXuUpFLCzV5soOgM%2BGyTHFseUfi2PW97DHOuJs%2FVPQGb45i%2B9LKrr7hTMaSp47c5bktsUiUYzmuX5R7hV55xQA%2B1r1MDLyrCikVa4yaPvZ7&X-Amz-Signature=8d4fda81f6163bf8fb2fbc4282177ca0182da644d5f9a0c317a5a9af4f78e2c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNSC5FII%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDw353oXENajHsofOQulAZfvKXQ6VN5jtz%2FnLStNku8HAiEAh5rtOEztBLVGiSBGMGlZXu389Zus%2F03ersTizGyx2LQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEvC4QyYdbsVAHG64ircA4DckA9jO3j%2B5USQpQAJIwj2Npfe4BneYG3JMt44jl%2B87Yt8d3wJaqpGSsr%2FaGrmL7Modlw1yuaQgf0g%2FDmO2nyA%2FUIqvBuldV2pJNIFm5%2B8E5NjZFJd0AVHmJez5sQyPYpV3dwaptUbdJMRrhbXIJrnFB1MROu9FxwOH1hZBfDkvCincrcx%2BgUkmfeWQJAIzrWOMh6gyc1PKVrT7FSFqIKnD90RD5UGrFvhPG4DsgFVwxnqZZlfGVwGypExSGcQ1wJL15Z5%2BOO5Z3KW3E0VsenAWeuJJzhq2Mi01sYDHe%2B987kezzpNMuYVQD7LVSXbYLp%2F6bK%2FRfNvOyHPIBt0oaMz%2FFdWpjKaumxRU7CtXp5sRtYZM%2BcMt2W1tCu7GTeN0E3E0COfNt1deue9PB%2BuXL%2BKO46mMM9CYZaEBi%2BbTPPuAAZK376YHN9EbV9enCulUaK8zjT7Rdv2n%2FqDZoT8Xvzds0MoCecAsUslv6vAlQIbfj9TyB0HkN9RpPjTBe8VoUWUW1tcSJWAq%2Bmbeo4s8oJR9BYTrs4tkJO9BVzr6W76Q9J%2FD8vaRL8y2iNZ4M9FRtQF%2B%2BAHOgBGm3a3tHx5niYq0ynNh%2BZlmO28iQfxeTpaR0TavbDL9LgParQYMM7j9MAGOqUBHWON%2F3ErTw425WHAaeZKZxDhL5URVtp6JEI2p4wAxvKwuNB1l21XrTEOl06i898jS4uLslM1RKh8yxx0KCDCTVGzdhaIK28FFwP7bxD7EvJXkiERBnXuUpFLCzV5soOgM%2BGyTHFseUfi2PW97DHOuJs%2FVPQGb45i%2B9LKrr7hTMaSp47c5bktsUiUYzmuX5R7hV55xQA%2B1r1MDLyrCikVa4yaPvZ7&X-Amz-Signature=ae3dbc38dd916c891ef6262d22a235d2eac3161345d22263124057ee25efb21d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMZIJ6H%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvPGbMU2%2FtSVT%2F7%2B8D2H0qp0qFyTeUEjAs%2FJwcUU3B8AiEAgssTA3brAYAYfgEDYkklapjOmvCFqS%2FexuzQpgPoLmMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoZ6V6iQb8q4U1i8ircA%2FwMZMRLfqPJah9S8oKWN0hqgO8cF3dhG6GFLqC9t34P3fcbeBmA4daPGLiUOIeml4Sx0LOWjeWCAgtZgcWntuzve6Dhz3ZKmPibjLGaktt%2FB%2FZ6KNVxC359W72FweqDBluo%2BnEX%2BsAaVe0VoOytorKBIq4h7xJSaQUVaY3DJ6bxoLR75QioV%2FvhaEHeZdkLmW4Fitx4juqtXYhTD6rVdUlvBDTC9aLEZOd%2BNIQHaAxfZcIYk5Yphw6LiqZXfshBOUTQW5S4D7enzB82pqsXVRG4S0RB7pe4gPPEQGLFz%2BJQY5rigy1nJsorS2377uzbGtxqZG2AzFK66TJOuayqN4icwKmb2UgF76RPvQSCutwS4uZhJDGrFysLu7QUfddOkSpERcRwOBRoUAmIzjfp35Q6ym57%2FeZc65aS4N7MA2aWqGIctM3ytaOHmZPgMSfEmDkGgOwZBmNjIEvXCWnT%2BSDfzEJo%2BMB4dWvdGIu4a482LRLgiaaTqApGi1FfXayy1OUu0p8XPQzRUd%2FpL8Wh8D4iTZl1wPtJfWOPni7Ecm9p4bCXUaH985V1Ni%2BF%2Fa2MFYg70YB%2B37chAoj0RvGJ5nH0Nh1f%2Foh4PPlGP6KZV8iorjcd1SBPsFMjNS1IMMax%2BssGOqUBb0IVpEu0ZcQ9LMjCYkwRB5QpoGfxme29bwqzUIlZ4IFIdGYYGaMBmCGcMyYWueGWJL27uYmb%2FYcesovoPYZiJc%2FojxiteBy5hUn1M%2F3Bxug6woH5hRjWKb1J2%2FpjwjHE0aLJ9r5YETWXsntoO4vkDpFHG8RAPLyrlAJJ%2BMjhAJlogqhFTmqpB3rHyaQHtrNt3BHuWlX1lxwUl6RvD4L0BOoEQtkD&X-Amz-Signature=608939adf2147da683cd8c5dc3b9fac58d2f80d501aba5ad8ffc505fe585fd97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMZIJ6H%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvPGbMU2%2FtSVT%2F7%2B8D2H0qp0qFyTeUEjAs%2FJwcUU3B8AiEAgssTA3brAYAYfgEDYkklapjOmvCFqS%2FexuzQpgPoLmMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoZ6V6iQb8q4U1i8ircA%2FwMZMRLfqPJah9S8oKWN0hqgO8cF3dhG6GFLqC9t34P3fcbeBmA4daPGLiUOIeml4Sx0LOWjeWCAgtZgcWntuzve6Dhz3ZKmPibjLGaktt%2FB%2FZ6KNVxC359W72FweqDBluo%2BnEX%2BsAaVe0VoOytorKBIq4h7xJSaQUVaY3DJ6bxoLR75QioV%2FvhaEHeZdkLmW4Fitx4juqtXYhTD6rVdUlvBDTC9aLEZOd%2BNIQHaAxfZcIYk5Yphw6LiqZXfshBOUTQW5S4D7enzB82pqsXVRG4S0RB7pe4gPPEQGLFz%2BJQY5rigy1nJsorS2377uzbGtxqZG2AzFK66TJOuayqN4icwKmb2UgF76RPvQSCutwS4uZhJDGrFysLu7QUfddOkSpERcRwOBRoUAmIzjfp35Q6ym57%2FeZc65aS4N7MA2aWqGIctM3ytaOHmZPgMSfEmDkGgOwZBmNjIEvXCWnT%2BSDfzEJo%2BMB4dWvdGIu4a482LRLgiaaTqApGi1FfXayy1OUu0p8XPQzRUd%2FpL8Wh8D4iTZl1wPtJfWOPni7Ecm9p4bCXUaH985V1Ni%2BF%2Fa2MFYg70YB%2B37chAoj0RvGJ5nH0Nh1f%2Foh4PPlGP6KZV8iorjcd1SBPsFMjNS1IMMax%2BssGOqUBb0IVpEu0ZcQ9LMjCYkwRB5QpoGfxme29bwqzUIlZ4IFIdGYYGaMBmCGcMyYWueGWJL27uYmb%2FYcesovoPYZiJc%2FojxiteBy5hUn1M%2F3Bxug6woH5hRjWKb1J2%2FpjwjHE0aLJ9r5YETWXsntoO4vkDpFHG8RAPLyrlAJJ%2BMjhAJlogqhFTmqpB3rHyaQHtrNt3BHuWlX1lxwUl6RvD4L0BOoEQtkD&X-Amz-Signature=16f1908197558cfaee3909660aae311ffcdc454138b6ead2c544127b8ae4b080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMZIJ6H%2F20260201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260201T022902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvPGbMU2%2FtSVT%2F7%2B8D2H0qp0qFyTeUEjAs%2FJwcUU3B8AiEAgssTA3brAYAYfgEDYkklapjOmvCFqS%2FexuzQpgPoLmMqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoZ6V6iQb8q4U1i8ircA%2FwMZMRLfqPJah9S8oKWN0hqgO8cF3dhG6GFLqC9t34P3fcbeBmA4daPGLiUOIeml4Sx0LOWjeWCAgtZgcWntuzve6Dhz3ZKmPibjLGaktt%2FB%2FZ6KNVxC359W72FweqDBluo%2BnEX%2BsAaVe0VoOytorKBIq4h7xJSaQUVaY3DJ6bxoLR75QioV%2FvhaEHeZdkLmW4Fitx4juqtXYhTD6rVdUlvBDTC9aLEZOd%2BNIQHaAxfZcIYk5Yphw6LiqZXfshBOUTQW5S4D7enzB82pqsXVRG4S0RB7pe4gPPEQGLFz%2BJQY5rigy1nJsorS2377uzbGtxqZG2AzFK66TJOuayqN4icwKmb2UgF76RPvQSCutwS4uZhJDGrFysLu7QUfddOkSpERcRwOBRoUAmIzjfp35Q6ym57%2FeZc65aS4N7MA2aWqGIctM3ytaOHmZPgMSfEmDkGgOwZBmNjIEvXCWnT%2BSDfzEJo%2BMB4dWvdGIu4a482LRLgiaaTqApGi1FfXayy1OUu0p8XPQzRUd%2FpL8Wh8D4iTZl1wPtJfWOPni7Ecm9p4bCXUaH985V1Ni%2BF%2Fa2MFYg70YB%2B37chAoj0RvGJ5nH0Nh1f%2Foh4PPlGP6KZV8iorjcd1SBPsFMjNS1IMMax%2BssGOqUBb0IVpEu0ZcQ9LMjCYkwRB5QpoGfxme29bwqzUIlZ4IFIdGYYGaMBmCGcMyYWueGWJL27uYmb%2FYcesovoPYZiJc%2FojxiteBy5hUn1M%2F3Bxug6woH5hRjWKb1J2%2FpjwjHE0aLJ9r5YETWXsntoO4vkDpFHG8RAPLyrlAJJ%2BMjhAJlogqhFTmqpB3rHyaQHtrNt3BHuWlX1lxwUl6RvD4L0BOoEQtkD&X-Amz-Signature=e6566bd85235bb3e0ff30b7b479d854ba1edfa12f9878b65a8a9a00da270f0f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

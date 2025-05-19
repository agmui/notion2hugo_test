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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RAMPEK3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPoQIOh9eUUTBrqYhncS6kxR2tIeCF%2BMnMloXvO742lAiEAl7kO8vrIwXRfEWFP4Oy2444BMnkjhsoP%2FeIanw%2ByLMAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqVwfTMZovIzZh9VCrcA3Q5mnT5k3wv54NpnoajFTbv3jfe930hFAqzLZJqzEtQu4jOOgpAjGQJFHQod3TDQU4vhRqEsQf8tLpg8of%2B4X9ZHlzt0MUF96w7F1PX5Th%2BN1n%2FJzQ6SqGjXz%2FoYQIryMimd%2FRrY%2F5twLoJc1%2F4Um4Dae3J6Ta9PzdjL%2FeZjBhh2ZEVD1442jrxLM0hxV1u9bj6HfeybmKCjJrGClwFIuoeJW4pfW6VEZxZQAdjKxrLmgAdi%2BnqgP17%2BKLNnG2SgRB6zUHD4sg4bshJeTpQsJ%2FQdvjnOfkLC84HE7plaO7gPAf%2BEO5nB6wguo76IZ7W6AHYJ6lCuJDgE%2FIGcemRvI3KvD79BqDTySsr6RISMtIY417Gs0XFF6WgBC6bBV8x0VBTEglbnti2R%2BVSNJFfnamLHYWzqmXqcERwn0Hx2U8lssGQ21CISrE2dSN8mGqa4m73ggk0ugy2XH1iMG6fWanAtCBtfx9U%2FEwwzUlGAVoN7I2ZrmYdTKnkyyZRMLM6iI9NUbfGzdqWiLWkBlgLYRN1Pp9nFKmmzqMCFQS1R7rxdHdu%2FyawRG4leGtMa06XmwnXn7654Qqwv9xHz0i9d1UZnf8EEkysN7lso76iENl6fE8MT2JgBPxxP%2FpWMIDJrcEGOqUBACiSIiVkXdlTsWnS%2BVLofLTYKbAhh6T4MEJFMLfyyo%2Bh%2BJKIm2GJmgNSZxiKREz53hm79unywk3vJxLbGBco0VZ9IDcUgS52tbwPvlBST35I7bxmrI5Bcbp1x%2B3EuQo4H54m3nN9gNY%2BgPvwIZK5FdQJQTgZFIoSbGjyn3To6AbTsD1bC0GbM3mMvLpBvYGfJ76OAsy%2Bef9TZXsLFcn%2FjTCP8nCD&X-Amz-Signature=3c9d5bb29fdbe6aab4560f44192115e112b3a118097de1b44c14cfca636a778c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RAMPEK3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPoQIOh9eUUTBrqYhncS6kxR2tIeCF%2BMnMloXvO742lAiEAl7kO8vrIwXRfEWFP4Oy2444BMnkjhsoP%2FeIanw%2ByLMAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqVwfTMZovIzZh9VCrcA3Q5mnT5k3wv54NpnoajFTbv3jfe930hFAqzLZJqzEtQu4jOOgpAjGQJFHQod3TDQU4vhRqEsQf8tLpg8of%2B4X9ZHlzt0MUF96w7F1PX5Th%2BN1n%2FJzQ6SqGjXz%2FoYQIryMimd%2FRrY%2F5twLoJc1%2F4Um4Dae3J6Ta9PzdjL%2FeZjBhh2ZEVD1442jrxLM0hxV1u9bj6HfeybmKCjJrGClwFIuoeJW4pfW6VEZxZQAdjKxrLmgAdi%2BnqgP17%2BKLNnG2SgRB6zUHD4sg4bshJeTpQsJ%2FQdvjnOfkLC84HE7plaO7gPAf%2BEO5nB6wguo76IZ7W6AHYJ6lCuJDgE%2FIGcemRvI3KvD79BqDTySsr6RISMtIY417Gs0XFF6WgBC6bBV8x0VBTEglbnti2R%2BVSNJFfnamLHYWzqmXqcERwn0Hx2U8lssGQ21CISrE2dSN8mGqa4m73ggk0ugy2XH1iMG6fWanAtCBtfx9U%2FEwwzUlGAVoN7I2ZrmYdTKnkyyZRMLM6iI9NUbfGzdqWiLWkBlgLYRN1Pp9nFKmmzqMCFQS1R7rxdHdu%2FyawRG4leGtMa06XmwnXn7654Qqwv9xHz0i9d1UZnf8EEkysN7lso76iENl6fE8MT2JgBPxxP%2FpWMIDJrcEGOqUBACiSIiVkXdlTsWnS%2BVLofLTYKbAhh6T4MEJFMLfyyo%2Bh%2BJKIm2GJmgNSZxiKREz53hm79unywk3vJxLbGBco0VZ9IDcUgS52tbwPvlBST35I7bxmrI5Bcbp1x%2B3EuQo4H54m3nN9gNY%2BgPvwIZK5FdQJQTgZFIoSbGjyn3To6AbTsD1bC0GbM3mMvLpBvYGfJ76OAsy%2Bef9TZXsLFcn%2FjTCP8nCD&X-Amz-Signature=5b5f7f0c1b608b300ee9673cb95e4b828e2471c73b967866d202be8a95772393&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RAMPEK3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPoQIOh9eUUTBrqYhncS6kxR2tIeCF%2BMnMloXvO742lAiEAl7kO8vrIwXRfEWFP4Oy2444BMnkjhsoP%2FeIanw%2ByLMAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKqVwfTMZovIzZh9VCrcA3Q5mnT5k3wv54NpnoajFTbv3jfe930hFAqzLZJqzEtQu4jOOgpAjGQJFHQod3TDQU4vhRqEsQf8tLpg8of%2B4X9ZHlzt0MUF96w7F1PX5Th%2BN1n%2FJzQ6SqGjXz%2FoYQIryMimd%2FRrY%2F5twLoJc1%2F4Um4Dae3J6Ta9PzdjL%2FeZjBhh2ZEVD1442jrxLM0hxV1u9bj6HfeybmKCjJrGClwFIuoeJW4pfW6VEZxZQAdjKxrLmgAdi%2BnqgP17%2BKLNnG2SgRB6zUHD4sg4bshJeTpQsJ%2FQdvjnOfkLC84HE7plaO7gPAf%2BEO5nB6wguo76IZ7W6AHYJ6lCuJDgE%2FIGcemRvI3KvD79BqDTySsr6RISMtIY417Gs0XFF6WgBC6bBV8x0VBTEglbnti2R%2BVSNJFfnamLHYWzqmXqcERwn0Hx2U8lssGQ21CISrE2dSN8mGqa4m73ggk0ugy2XH1iMG6fWanAtCBtfx9U%2FEwwzUlGAVoN7I2ZrmYdTKnkyyZRMLM6iI9NUbfGzdqWiLWkBlgLYRN1Pp9nFKmmzqMCFQS1R7rxdHdu%2FyawRG4leGtMa06XmwnXn7654Qqwv9xHz0i9d1UZnf8EEkysN7lso76iENl6fE8MT2JgBPxxP%2FpWMIDJrcEGOqUBACiSIiVkXdlTsWnS%2BVLofLTYKbAhh6T4MEJFMLfyyo%2Bh%2BJKIm2GJmgNSZxiKREz53hm79unywk3vJxLbGBco0VZ9IDcUgS52tbwPvlBST35I7bxmrI5Bcbp1x%2B3EuQo4H54m3nN9gNY%2BgPvwIZK5FdQJQTgZFIoSbGjyn3To6AbTsD1bC0GbM3mMvLpBvYGfJ76OAsy%2Bef9TZXsLFcn%2FjTCP8nCD&X-Amz-Signature=83a8218656fc2ab9eeda817289502a40fc60c949681bce919ec67c3f32f099d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

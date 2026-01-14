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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIYCSUE%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDgakma1S%2F870PqzZqmUXRGNoXUm8J0RT9f%2FTbWxGiGTQIhAOGXsIQcHkuOvYl1OCd6C%2B2LXENRRCLBit64m%2BAMaUrsKv8DCBIQABoMNjM3NDIzMTgzODA1IgxkjR%2BjEzZCqIONdW8q3ANRRCBTC8Zy8g4bfKIQoTgUk8BjLni06tU81JZmKIgg6c%2FP8pr9O554I72VTFahvlVWw4ThzQkGnTkXnbKsx22DQ2hxqSmy6LRCCU7PkS7fRZbzk0fPe6hwft%2Fxm4Pfog0FsrgrhVgcEigbRZM36hLMFGPY0CTOpYsEoNZ7J74bxODSr5iljdvxV2tqRU%2BdXnphImrSrLjGRj4c1iqi%2BZ%2FnkpHWo%2BuRp%2FAkO3L04P8anUsZkMZ5%2BBfbBJeBq6KJv9KY%2FfI79%2BtlFeh%2F%2B9FyHgUI3MmNDvY35fe9UeC7LyQPigXqa1paEXTpJScNvA26Nv5GNRWznW8jYkrjZIOK6HM5%2B6MCeWFWcKoN3e0JpD1MNsuKoVzMelGxQy2Etmet7R22M0D8nWmZWXkew8M4gqGXDUqhittw3OV1hv78sCoILz%2BelGZmBI8mrUqOhRDXBznsUmraI%2F1oOn3Eb7GkIUNbrmj%2BKQjKoZ6sgLsBbfG35CXXv0iw1NHEOcnJH4ln9o7EbpZwEJLq4KoUJfjxFErdoHFLJNnp9Gzeu0LPjGzQBmYpqQwvKIQx%2Bsk7fkTzZcE5liIdtPZQFGq8fMJnf4hC%2FDnDm613TfXsibc94W2YoJZfxDbjYIl40Ta%2F1jD9zZvLBjqkAZBvPGfmILwup%2FVqwJXKXK4SSY10fDAZHQjR7OXht4hAor3dAnS%2Fqp2Si%2BwCsmWYP7aZ568lRhpRnoRweawUBxQYh08chjYRL56vLWjmdWANRuzPNhmWMXs2wcC9BXmQwHfLHTDAOY34cDOrTBl6NeYoAOb5HrJbclBsAXehzQ0GovUDv2G5%2FiIM1UVazpsxcE%2F1DoVJG79SRsCoFfYEYyl%2Fbjv3&X-Amz-Signature=992be9c4d8a150315472dc7740aacb5cefe0065f9ed0286976269be44d8bc00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIYCSUE%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDgakma1S%2F870PqzZqmUXRGNoXUm8J0RT9f%2FTbWxGiGTQIhAOGXsIQcHkuOvYl1OCd6C%2B2LXENRRCLBit64m%2BAMaUrsKv8DCBIQABoMNjM3NDIzMTgzODA1IgxkjR%2BjEzZCqIONdW8q3ANRRCBTC8Zy8g4bfKIQoTgUk8BjLni06tU81JZmKIgg6c%2FP8pr9O554I72VTFahvlVWw4ThzQkGnTkXnbKsx22DQ2hxqSmy6LRCCU7PkS7fRZbzk0fPe6hwft%2Fxm4Pfog0FsrgrhVgcEigbRZM36hLMFGPY0CTOpYsEoNZ7J74bxODSr5iljdvxV2tqRU%2BdXnphImrSrLjGRj4c1iqi%2BZ%2FnkpHWo%2BuRp%2FAkO3L04P8anUsZkMZ5%2BBfbBJeBq6KJv9KY%2FfI79%2BtlFeh%2F%2B9FyHgUI3MmNDvY35fe9UeC7LyQPigXqa1paEXTpJScNvA26Nv5GNRWznW8jYkrjZIOK6HM5%2B6MCeWFWcKoN3e0JpD1MNsuKoVzMelGxQy2Etmet7R22M0D8nWmZWXkew8M4gqGXDUqhittw3OV1hv78sCoILz%2BelGZmBI8mrUqOhRDXBznsUmraI%2F1oOn3Eb7GkIUNbrmj%2BKQjKoZ6sgLsBbfG35CXXv0iw1NHEOcnJH4ln9o7EbpZwEJLq4KoUJfjxFErdoHFLJNnp9Gzeu0LPjGzQBmYpqQwvKIQx%2Bsk7fkTzZcE5liIdtPZQFGq8fMJnf4hC%2FDnDm613TfXsibc94W2YoJZfxDbjYIl40Ta%2F1jD9zZvLBjqkAZBvPGfmILwup%2FVqwJXKXK4SSY10fDAZHQjR7OXht4hAor3dAnS%2Fqp2Si%2BwCsmWYP7aZ568lRhpRnoRweawUBxQYh08chjYRL56vLWjmdWANRuzPNhmWMXs2wcC9BXmQwHfLHTDAOY34cDOrTBl6NeYoAOb5HrJbclBsAXehzQ0GovUDv2G5%2FiIM1UVazpsxcE%2F1DoVJG79SRsCoFfYEYyl%2Fbjv3&X-Amz-Signature=95db53452686d1a57b148e0e6c0b422389681d502e4738263dae9fd1d7de25b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HIYCSUE%2F20260114%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260114T015150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDgakma1S%2F870PqzZqmUXRGNoXUm8J0RT9f%2FTbWxGiGTQIhAOGXsIQcHkuOvYl1OCd6C%2B2LXENRRCLBit64m%2BAMaUrsKv8DCBIQABoMNjM3NDIzMTgzODA1IgxkjR%2BjEzZCqIONdW8q3ANRRCBTC8Zy8g4bfKIQoTgUk8BjLni06tU81JZmKIgg6c%2FP8pr9O554I72VTFahvlVWw4ThzQkGnTkXnbKsx22DQ2hxqSmy6LRCCU7PkS7fRZbzk0fPe6hwft%2Fxm4Pfog0FsrgrhVgcEigbRZM36hLMFGPY0CTOpYsEoNZ7J74bxODSr5iljdvxV2tqRU%2BdXnphImrSrLjGRj4c1iqi%2BZ%2FnkpHWo%2BuRp%2FAkO3L04P8anUsZkMZ5%2BBfbBJeBq6KJv9KY%2FfI79%2BtlFeh%2F%2B9FyHgUI3MmNDvY35fe9UeC7LyQPigXqa1paEXTpJScNvA26Nv5GNRWznW8jYkrjZIOK6HM5%2B6MCeWFWcKoN3e0JpD1MNsuKoVzMelGxQy2Etmet7R22M0D8nWmZWXkew8M4gqGXDUqhittw3OV1hv78sCoILz%2BelGZmBI8mrUqOhRDXBznsUmraI%2F1oOn3Eb7GkIUNbrmj%2BKQjKoZ6sgLsBbfG35CXXv0iw1NHEOcnJH4ln9o7EbpZwEJLq4KoUJfjxFErdoHFLJNnp9Gzeu0LPjGzQBmYpqQwvKIQx%2Bsk7fkTzZcE5liIdtPZQFGq8fMJnf4hC%2FDnDm613TfXsibc94W2YoJZfxDbjYIl40Ta%2F1jD9zZvLBjqkAZBvPGfmILwup%2FVqwJXKXK4SSY10fDAZHQjR7OXht4hAor3dAnS%2Fqp2Si%2BwCsmWYP7aZ568lRhpRnoRweawUBxQYh08chjYRL56vLWjmdWANRuzPNhmWMXs2wcC9BXmQwHfLHTDAOY34cDOrTBl6NeYoAOb5HrJbclBsAXehzQ0GovUDv2G5%2FiIM1UVazpsxcE%2F1DoVJG79SRsCoFfYEYyl%2Fbjv3&X-Amz-Signature=55e3263bd70b0d64987001acb3c4fdff26525b66f84abbb1ece9421ce150f9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

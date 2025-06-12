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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAK6M5PM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC6vqFdi2oiTD5UGlKdQYwQm2JBNMqZXA3evo7SW5YOLAiBv25lnsZ9LDTQmy0eMfMKJiK5v4v0svYbreZAqUh3bnSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7QB76%2FlmC1tAwsN7KtwDxWNgfpBxThXobxFOq5rSBMAQh2GshO27HFXHHOEihRGqiNMuqM3VmOTP18OVwjzC4ZaCA2tlh05U4CPx0GOkfPevW1NMdt9EvRvJIeuIECtjACKv3uvxofycIEdfqZ9srtgfK09hQsJSmodvgHWIZ4uEd8yQvyraTsnrDSv%2BCHEPCQ46LSgrOs4Yvba3Beaq3z5ohaxx61hhXxHWi%2BNM2yeMd5CkY9CKFzkjef%2Fi2XJAoCTO%2F6IQU14alJy3zkuphek%2BHDjlv%2B0zlbVrmyRXDRQ8LUrS3XNyStQ2dnmWNpIuwAmmkG0KbDp2JwLnUHzVPs9TRr11xGFxbtBhisA2nz7gycsHBX0DTskelxtOrJw3CLI2fzzdQwWchGqJ8CFsJ8JW6AE4gDY1NgiB7dNHwCgCgsd750GcX%2FxiZwn33Hv%2BcodK7UPCLLWRxZkWIdISFByC1vAi29H4GGZR1pyDlmbHac5bFe22ujVOfPKN3u37fsghqmh6Bg0ZTKBtbOvxBTUwaHWDUNbGcvJq1cRiZKwvlkzub3HIF%2BRg7tHHOsVjQ9XaL25WPg1ZRVUW6OeYOd5yx1DNmIw6O8qkWr%2BwelZoZmgvopyWmSlDKc11ziNNxvNlIwnMZUCjtaswkJGswgY6pgGLWoMRz%2F3QJctLIoRnlwhuZaGlVpBSSLZnrCWcRdd%2BS5RA9gJVc6cdrZAbCmjxIuToe8wXK6iw4%2BS9MwXlKGQLUyzgzmiQkGRBJKwslvQANt%2F5FZdo6rMPssLn8cXdl%2F6B6Veil0wmV%2BMWTUxbY7ZONPoTXYI6PBZSw6jXma3xatOmL9JK20x3sLXdKvngwXwfjESbDbG6u8v3ZFYqUOYmzpmoLL9b&X-Amz-Signature=e760ee8686a0c12c7727ff26cc198ef781e319c21fde8896a2532f117b00b69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAK6M5PM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC6vqFdi2oiTD5UGlKdQYwQm2JBNMqZXA3evo7SW5YOLAiBv25lnsZ9LDTQmy0eMfMKJiK5v4v0svYbreZAqUh3bnSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7QB76%2FlmC1tAwsN7KtwDxWNgfpBxThXobxFOq5rSBMAQh2GshO27HFXHHOEihRGqiNMuqM3VmOTP18OVwjzC4ZaCA2tlh05U4CPx0GOkfPevW1NMdt9EvRvJIeuIECtjACKv3uvxofycIEdfqZ9srtgfK09hQsJSmodvgHWIZ4uEd8yQvyraTsnrDSv%2BCHEPCQ46LSgrOs4Yvba3Beaq3z5ohaxx61hhXxHWi%2BNM2yeMd5CkY9CKFzkjef%2Fi2XJAoCTO%2F6IQU14alJy3zkuphek%2BHDjlv%2B0zlbVrmyRXDRQ8LUrS3XNyStQ2dnmWNpIuwAmmkG0KbDp2JwLnUHzVPs9TRr11xGFxbtBhisA2nz7gycsHBX0DTskelxtOrJw3CLI2fzzdQwWchGqJ8CFsJ8JW6AE4gDY1NgiB7dNHwCgCgsd750GcX%2FxiZwn33Hv%2BcodK7UPCLLWRxZkWIdISFByC1vAi29H4GGZR1pyDlmbHac5bFe22ujVOfPKN3u37fsghqmh6Bg0ZTKBtbOvxBTUwaHWDUNbGcvJq1cRiZKwvlkzub3HIF%2BRg7tHHOsVjQ9XaL25WPg1ZRVUW6OeYOd5yx1DNmIw6O8qkWr%2BwelZoZmgvopyWmSlDKc11ziNNxvNlIwnMZUCjtaswkJGswgY6pgGLWoMRz%2F3QJctLIoRnlwhuZaGlVpBSSLZnrCWcRdd%2BS5RA9gJVc6cdrZAbCmjxIuToe8wXK6iw4%2BS9MwXlKGQLUyzgzmiQkGRBJKwslvQANt%2F5FZdo6rMPssLn8cXdl%2F6B6Veil0wmV%2BMWTUxbY7ZONPoTXYI6PBZSw6jXma3xatOmL9JK20x3sLXdKvngwXwfjESbDbG6u8v3ZFYqUOYmzpmoLL9b&X-Amz-Signature=d487f7fcf6d04b58a40c92b1911d0045dc8b5d61cedda325c8840eab806a2352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAK6M5PM%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T170849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC6vqFdi2oiTD5UGlKdQYwQm2JBNMqZXA3evo7SW5YOLAiBv25lnsZ9LDTQmy0eMfMKJiK5v4v0svYbreZAqUh3bnSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7QB76%2FlmC1tAwsN7KtwDxWNgfpBxThXobxFOq5rSBMAQh2GshO27HFXHHOEihRGqiNMuqM3VmOTP18OVwjzC4ZaCA2tlh05U4CPx0GOkfPevW1NMdt9EvRvJIeuIECtjACKv3uvxofycIEdfqZ9srtgfK09hQsJSmodvgHWIZ4uEd8yQvyraTsnrDSv%2BCHEPCQ46LSgrOs4Yvba3Beaq3z5ohaxx61hhXxHWi%2BNM2yeMd5CkY9CKFzkjef%2Fi2XJAoCTO%2F6IQU14alJy3zkuphek%2BHDjlv%2B0zlbVrmyRXDRQ8LUrS3XNyStQ2dnmWNpIuwAmmkG0KbDp2JwLnUHzVPs9TRr11xGFxbtBhisA2nz7gycsHBX0DTskelxtOrJw3CLI2fzzdQwWchGqJ8CFsJ8JW6AE4gDY1NgiB7dNHwCgCgsd750GcX%2FxiZwn33Hv%2BcodK7UPCLLWRxZkWIdISFByC1vAi29H4GGZR1pyDlmbHac5bFe22ujVOfPKN3u37fsghqmh6Bg0ZTKBtbOvxBTUwaHWDUNbGcvJq1cRiZKwvlkzub3HIF%2BRg7tHHOsVjQ9XaL25WPg1ZRVUW6OeYOd5yx1DNmIw6O8qkWr%2BwelZoZmgvopyWmSlDKc11ziNNxvNlIwnMZUCjtaswkJGswgY6pgGLWoMRz%2F3QJctLIoRnlwhuZaGlVpBSSLZnrCWcRdd%2BS5RA9gJVc6cdrZAbCmjxIuToe8wXK6iw4%2BS9MwXlKGQLUyzgzmiQkGRBJKwslvQANt%2F5FZdo6rMPssLn8cXdl%2F6B6Veil0wmV%2BMWTUxbY7ZONPoTXYI6PBZSw6jXma3xatOmL9JK20x3sLXdKvngwXwfjESbDbG6u8v3ZFYqUOYmzpmoLL9b&X-Amz-Signature=0fe0012e8fb58d8cefee8c5933488babe4dbfd06d12a84529896987cfc1e8d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

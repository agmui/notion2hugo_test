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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YA47TGX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCW6O0qNvMWZccq0cvuLf2JSC60jMTm%2BjyS2EYr6oM9NgIhALePIpVWxKEDkF9M%2FnuoVshe%2FGJ8dz06Cbt7UpU%2FfPcNKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5G7amdYAfxsnHuWIq3APfEzQB%2BfueI7drGOCtr0WNJSqlfeDegnUTzBsTruxTbsCC4HOyepQijh7aHFgLDbgHVkPg4YpIq0suURz3H47S4aImxwF98I%2FkoQVjulB3%2B06%2F60WRmO4mU61rkXEKc48MjRJ2Wb8LOBoAjlFVWVsp%2BJs8cNsfMp%2B43eClEkQSN0ey3GHNSpajTW0zVeE91CiI8nVxYutdUNQZZq%2F%2BinG1ycQHYdKM2uBAQplTtnbRHn%2FVC3mDZX5xD2PQT%2Bed%2FA2RqbJ8hAJfHWOZNGqrq1jWRhnfgnbQu6MfHLj0hHg%2FC3mUd53vgulFWvy5q4ewZbFtnYccuuTHmAdbaGVpIjs3Wzw2FIgsosYYNJj9V3FxRb80yGEsmGFQCc76ZgnqbpAN2DcjKqRrvIOPq9mOYNIS3L5NhsaVDTm1qUejmvjpkQdcrZgjQuO2IEQHUXIUQ4PvDxhxTfCLIc8ItabxOwzX3hiCSKup67mgnL7UYlda2Ic8ySPjSlrU%2Frubndd5jH6hsOzbjHFfsfzNucQ0cnUfR27VMhHMZpAQy1yLX8a6qnwJQuAfpYRYS1oX%2FfQhLJeYQBkgpHYec8n9IEhabNNZSV%2BxMrNWDxAq8nBbiqHGmtsmQD47EgEbiHGi5TC6mdDABjqkAajXBg%2FyxxzE3yTn7Jr0BRQxBjULcaugOSK1u6duBbayYPFJHEGWs%2Frsk8k6YjCzfnKoOmNsZpqzm%2BlJJLaqMUYxRfFnK4RF64rLEn2%2Fx7mYj54OWAH355DbG5%2Fmra0CytJXffaSwy283NUarpyx1VQLh%2BRnEZ1If03mUWLxKXhuAZR25gVwKio%2BT2XaPybfaj8NfiPvUCBWvKIax6RAJHwFHWP6&X-Amz-Signature=ca7ae83b6042047acc554b376496e76b6854427edcf70197995ccc7fadc7dfe3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YA47TGX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCW6O0qNvMWZccq0cvuLf2JSC60jMTm%2BjyS2EYr6oM9NgIhALePIpVWxKEDkF9M%2FnuoVshe%2FGJ8dz06Cbt7UpU%2FfPcNKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5G7amdYAfxsnHuWIq3APfEzQB%2BfueI7drGOCtr0WNJSqlfeDegnUTzBsTruxTbsCC4HOyepQijh7aHFgLDbgHVkPg4YpIq0suURz3H47S4aImxwF98I%2FkoQVjulB3%2B06%2F60WRmO4mU61rkXEKc48MjRJ2Wb8LOBoAjlFVWVsp%2BJs8cNsfMp%2B43eClEkQSN0ey3GHNSpajTW0zVeE91CiI8nVxYutdUNQZZq%2F%2BinG1ycQHYdKM2uBAQplTtnbRHn%2FVC3mDZX5xD2PQT%2Bed%2FA2RqbJ8hAJfHWOZNGqrq1jWRhnfgnbQu6MfHLj0hHg%2FC3mUd53vgulFWvy5q4ewZbFtnYccuuTHmAdbaGVpIjs3Wzw2FIgsosYYNJj9V3FxRb80yGEsmGFQCc76ZgnqbpAN2DcjKqRrvIOPq9mOYNIS3L5NhsaVDTm1qUejmvjpkQdcrZgjQuO2IEQHUXIUQ4PvDxhxTfCLIc8ItabxOwzX3hiCSKup67mgnL7UYlda2Ic8ySPjSlrU%2Frubndd5jH6hsOzbjHFfsfzNucQ0cnUfR27VMhHMZpAQy1yLX8a6qnwJQuAfpYRYS1oX%2FfQhLJeYQBkgpHYec8n9IEhabNNZSV%2BxMrNWDxAq8nBbiqHGmtsmQD47EgEbiHGi5TC6mdDABjqkAajXBg%2FyxxzE3yTn7Jr0BRQxBjULcaugOSK1u6duBbayYPFJHEGWs%2Frsk8k6YjCzfnKoOmNsZpqzm%2BlJJLaqMUYxRfFnK4RF64rLEn2%2Fx7mYj54OWAH355DbG5%2Fmra0CytJXffaSwy283NUarpyx1VQLh%2BRnEZ1If03mUWLxKXhuAZR25gVwKio%2BT2XaPybfaj8NfiPvUCBWvKIax6RAJHwFHWP6&X-Amz-Signature=0d7112d85fae89b2923b25fdf9bca50497232aa9c26eec6d944593cda003b6c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YA47TGX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T004037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCW6O0qNvMWZccq0cvuLf2JSC60jMTm%2BjyS2EYr6oM9NgIhALePIpVWxKEDkF9M%2FnuoVshe%2FGJ8dz06Cbt7UpU%2FfPcNKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5G7amdYAfxsnHuWIq3APfEzQB%2BfueI7drGOCtr0WNJSqlfeDegnUTzBsTruxTbsCC4HOyepQijh7aHFgLDbgHVkPg4YpIq0suURz3H47S4aImxwF98I%2FkoQVjulB3%2B06%2F60WRmO4mU61rkXEKc48MjRJ2Wb8LOBoAjlFVWVsp%2BJs8cNsfMp%2B43eClEkQSN0ey3GHNSpajTW0zVeE91CiI8nVxYutdUNQZZq%2F%2BinG1ycQHYdKM2uBAQplTtnbRHn%2FVC3mDZX5xD2PQT%2Bed%2FA2RqbJ8hAJfHWOZNGqrq1jWRhnfgnbQu6MfHLj0hHg%2FC3mUd53vgulFWvy5q4ewZbFtnYccuuTHmAdbaGVpIjs3Wzw2FIgsosYYNJj9V3FxRb80yGEsmGFQCc76ZgnqbpAN2DcjKqRrvIOPq9mOYNIS3L5NhsaVDTm1qUejmvjpkQdcrZgjQuO2IEQHUXIUQ4PvDxhxTfCLIc8ItabxOwzX3hiCSKup67mgnL7UYlda2Ic8ySPjSlrU%2Frubndd5jH6hsOzbjHFfsfzNucQ0cnUfR27VMhHMZpAQy1yLX8a6qnwJQuAfpYRYS1oX%2FfQhLJeYQBkgpHYec8n9IEhabNNZSV%2BxMrNWDxAq8nBbiqHGmtsmQD47EgEbiHGi5TC6mdDABjqkAajXBg%2FyxxzE3yTn7Jr0BRQxBjULcaugOSK1u6duBbayYPFJHEGWs%2Frsk8k6YjCzfnKoOmNsZpqzm%2BlJJLaqMUYxRfFnK4RF64rLEn2%2Fx7mYj54OWAH355DbG5%2Fmra0CytJXffaSwy283NUarpyx1VQLh%2BRnEZ1If03mUWLxKXhuAZR25gVwKio%2BT2XaPybfaj8NfiPvUCBWvKIax6RAJHwFHWP6&X-Amz-Signature=2f7f5617da0b084ccdce4b3d6ace01808e4af4c7c0d2d4051d518d40821eb800&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

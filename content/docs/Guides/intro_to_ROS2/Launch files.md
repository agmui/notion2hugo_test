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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OHV4FWP%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCAPOdEtyGMHG0scR8h1zd4f%2FcWWej5NDBcGbJr3m3zLgIhAOeu4Qp6dBGcdeNST98AQwwVb7nX3L4%2BI3f5P4jI9Wv6KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypUEPDx%2BqYBsODrE0q3AMWWavtZ0fLwiQcjEDK59tw4WIe2CnUajvYUW6hhHOWdY2v8FnW8BSTWIHGUsm1JwpeTrG5D8i4zHzpxMCLE0HeFAHeV1%2BwV93LRWqsV75uv5fj6NABFqaMF63Z9IJZrQV8ZKGrd7MuoetYXAojz2PehqmsIBWzTKtsgRrogA6Ug2PLRI5HY2bU1kkYJivLEEEmCquVXMzs45sgQBGwaL5Ni1GCdYWRozpTbNc0bI26196%2Flyvx7uRo4EdaOYlOJCOFhD4MzJwD0hR%2B0aGuEu8BzaUjypGbztDy2AVlm7C0hCmk738m%2F0hrJMhJlAuaqJbrSp6xKOKVuYinAbsXwdB%2FV3fsvByJSDYy0huBxnbtXWOkXT8b5r3PP%2B7bJEt5KbmLfe9jMytBX8uTU2X8aed6wGzi9uEzNZ4ui7miEPljd1YxIim2jo3KD%2FNx0mmuSYV0LLfWC8eTFru9qZQ9nIJnha9XLZsKIMyV87DBSDx1HbY77JB4GKZesauwxqoZn6VwM0xV0V6umje%2BTk0j%2FMRu4OBZzBjmq%2BJ46EzElhjgpYEJECnbASzdgIHYdR1IT9PhHesfT7oaMrlxcTaEiJBK3SEJHI3HG7DvzTjWluvEb%2Frdpr2g8O3o1xsVzzD9g8i%2BBjqkAUWWylQ9n3PN%2FtI2WydI%2FuaiK%2BefaX6n7z%2BRn2Qkt3L3hFfpjaCYTLclTRHS2OmjwkRXCqXANPJCxutckt5HRdWlZyhDCpNqlQ%2BeFwIZHC375pOTqkqBKhUIcceMO8Z55xTrjobqhECcoEmUJfDRFihzaRKxV5wqsKancaYxw0ucU6sDZYbUJLGnj7P3QvQrwOzrb6q%2Fu6tnTgR7yr8aDLVmYDjE&X-Amz-Signature=69bfd30541f2647f8786af6d4b5d07b8b425cc77b14d0a5bf7b1f8bab2430213&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OHV4FWP%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCAPOdEtyGMHG0scR8h1zd4f%2FcWWej5NDBcGbJr3m3zLgIhAOeu4Qp6dBGcdeNST98AQwwVb7nX3L4%2BI3f5P4jI9Wv6KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypUEPDx%2BqYBsODrE0q3AMWWavtZ0fLwiQcjEDK59tw4WIe2CnUajvYUW6hhHOWdY2v8FnW8BSTWIHGUsm1JwpeTrG5D8i4zHzpxMCLE0HeFAHeV1%2BwV93LRWqsV75uv5fj6NABFqaMF63Z9IJZrQV8ZKGrd7MuoetYXAojz2PehqmsIBWzTKtsgRrogA6Ug2PLRI5HY2bU1kkYJivLEEEmCquVXMzs45sgQBGwaL5Ni1GCdYWRozpTbNc0bI26196%2Flyvx7uRo4EdaOYlOJCOFhD4MzJwD0hR%2B0aGuEu8BzaUjypGbztDy2AVlm7C0hCmk738m%2F0hrJMhJlAuaqJbrSp6xKOKVuYinAbsXwdB%2FV3fsvByJSDYy0huBxnbtXWOkXT8b5r3PP%2B7bJEt5KbmLfe9jMytBX8uTU2X8aed6wGzi9uEzNZ4ui7miEPljd1YxIim2jo3KD%2FNx0mmuSYV0LLfWC8eTFru9qZQ9nIJnha9XLZsKIMyV87DBSDx1HbY77JB4GKZesauwxqoZn6VwM0xV0V6umje%2BTk0j%2FMRu4OBZzBjmq%2BJ46EzElhjgpYEJECnbASzdgIHYdR1IT9PhHesfT7oaMrlxcTaEiJBK3SEJHI3HG7DvzTjWluvEb%2Frdpr2g8O3o1xsVzzD9g8i%2BBjqkAUWWylQ9n3PN%2FtI2WydI%2FuaiK%2BefaX6n7z%2BRn2Qkt3L3hFfpjaCYTLclTRHS2OmjwkRXCqXANPJCxutckt5HRdWlZyhDCpNqlQ%2BeFwIZHC375pOTqkqBKhUIcceMO8Z55xTrjobqhECcoEmUJfDRFihzaRKxV5wqsKancaYxw0ucU6sDZYbUJLGnj7P3QvQrwOzrb6q%2Fu6tnTgR7yr8aDLVmYDjE&X-Amz-Signature=80383315b32d7174300fdb16b09521b1d39e01fdf8aab2692e1882a542f1ffe9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OHV4FWP%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCAPOdEtyGMHG0scR8h1zd4f%2FcWWej5NDBcGbJr3m3zLgIhAOeu4Qp6dBGcdeNST98AQwwVb7nX3L4%2BI3f5P4jI9Wv6KogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypUEPDx%2BqYBsODrE0q3AMWWavtZ0fLwiQcjEDK59tw4WIe2CnUajvYUW6hhHOWdY2v8FnW8BSTWIHGUsm1JwpeTrG5D8i4zHzpxMCLE0HeFAHeV1%2BwV93LRWqsV75uv5fj6NABFqaMF63Z9IJZrQV8ZKGrd7MuoetYXAojz2PehqmsIBWzTKtsgRrogA6Ug2PLRI5HY2bU1kkYJivLEEEmCquVXMzs45sgQBGwaL5Ni1GCdYWRozpTbNc0bI26196%2Flyvx7uRo4EdaOYlOJCOFhD4MzJwD0hR%2B0aGuEu8BzaUjypGbztDy2AVlm7C0hCmk738m%2F0hrJMhJlAuaqJbrSp6xKOKVuYinAbsXwdB%2FV3fsvByJSDYy0huBxnbtXWOkXT8b5r3PP%2B7bJEt5KbmLfe9jMytBX8uTU2X8aed6wGzi9uEzNZ4ui7miEPljd1YxIim2jo3KD%2FNx0mmuSYV0LLfWC8eTFru9qZQ9nIJnha9XLZsKIMyV87DBSDx1HbY77JB4GKZesauwxqoZn6VwM0xV0V6umje%2BTk0j%2FMRu4OBZzBjmq%2BJ46EzElhjgpYEJECnbASzdgIHYdR1IT9PhHesfT7oaMrlxcTaEiJBK3SEJHI3HG7DvzTjWluvEb%2Frdpr2g8O3o1xsVzzD9g8i%2BBjqkAUWWylQ9n3PN%2FtI2WydI%2FuaiK%2BefaX6n7z%2BRn2Qkt3L3hFfpjaCYTLclTRHS2OmjwkRXCqXANPJCxutckt5HRdWlZyhDCpNqlQ%2BeFwIZHC375pOTqkqBKhUIcceMO8Z55xTrjobqhECcoEmUJfDRFihzaRKxV5wqsKancaYxw0ucU6sDZYbUJLGnj7P3QvQrwOzrb6q%2Fu6tnTgR7yr8aDLVmYDjE&X-Amz-Signature=064b32ddb1110132c6236d8a37d95183f4318b6d25719a18185e68f20b1e4b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

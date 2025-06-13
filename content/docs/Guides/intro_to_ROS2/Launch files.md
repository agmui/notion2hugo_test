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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P5XUEWX%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIG86WLcHXgXWINPyeYxtH3wpWRgCY%2BKjpLkglPQPXWDhAiB598%2FIKUQGyPaLgxfHxvm9kOZ%2BJcLpEvpZ9U%2Fb74aWeyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeYLlkgioEC81E%2BXRKtwDhZj2I2YwoZ0z8Ds4xqsBXpZ4kTYC3VVdyVbeXwFH75%2FyXpw%2BdWWLaGHxnAKP%2FOub852DT7gpBKWC06eWfnA0ldILfDEE3dodY72ixRQJJ1azDIakrCbHlqNTGtVNYQaG%2FJ9hTlO3dWh9naz0FG81xl%2BzlQW7q87YBnaQj4%2BWJv9eflpJEILlU9RWXmXlpExmsAHJoEEabf3T8w%2FqBFqAX6zdrgjFsMWdh99Wxr7rvXyBnubftSo%2FCNn333QjdL3nfprPjbIqcxUap02dWrpv1WexFgOmh58XVbHQpU2gvOUTu4QZ0qiUxr6suO9M27svzWqLQT%2FBB1x5nBiVRNH6ziBRziBhplAJis3IJF%2F7fUjvKB1TR%2BXK1H4x8v9EpYUwtgezRAnyClD1VVlDotB4W7DaaKrYUwTxr5%2BaNnbLLunz4Q93nL%2BKBzy6JtZ0DMOzz%2Fjn15S7P6IlbDBy2%2BxzNg21zzSeeUdxrSMd4Ktx0nZY6VkjZgkW5YSUxrmg95aS1GnFAJv7DGJHasdlP9uzNgotg%2FqvvSyeFMScAyjmbe9mwlejJg74NFEDndtTKWkVEBUlWXKuk1fT0xAFsTnbHyh8TknokM5nWWl7Qa4CgTgqeGZ8PEmjZRTh7f8w%2BLCuwgY6pgEb1WGV9FsC%2Fk50tLtvN6M4h739gqDveZLBjpqDAifE5ZFUyrMtjvcBTbmEjFxWKj2%2B2zvyQesFK0xcBDkJqKkJX4aSWVLdCUYGA15imAdbbMXHbW5QH9RCaXsuUql%2FXRGZCsR7pbJhDTckdjvSFvad697Kb1aEYyOaZEEhh5PFMquGU9HWg54D9KzSLR3HHLdE9SaKB7WltL15WEeO6agsl0IOoJzd&X-Amz-Signature=e0e23de54d040a5e36eb4830412af63abb14651b326df6e812cfe01c04ba40ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P5XUEWX%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIG86WLcHXgXWINPyeYxtH3wpWRgCY%2BKjpLkglPQPXWDhAiB598%2FIKUQGyPaLgxfHxvm9kOZ%2BJcLpEvpZ9U%2Fb74aWeyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeYLlkgioEC81E%2BXRKtwDhZj2I2YwoZ0z8Ds4xqsBXpZ4kTYC3VVdyVbeXwFH75%2FyXpw%2BdWWLaGHxnAKP%2FOub852DT7gpBKWC06eWfnA0ldILfDEE3dodY72ixRQJJ1azDIakrCbHlqNTGtVNYQaG%2FJ9hTlO3dWh9naz0FG81xl%2BzlQW7q87YBnaQj4%2BWJv9eflpJEILlU9RWXmXlpExmsAHJoEEabf3T8w%2FqBFqAX6zdrgjFsMWdh99Wxr7rvXyBnubftSo%2FCNn333QjdL3nfprPjbIqcxUap02dWrpv1WexFgOmh58XVbHQpU2gvOUTu4QZ0qiUxr6suO9M27svzWqLQT%2FBB1x5nBiVRNH6ziBRziBhplAJis3IJF%2F7fUjvKB1TR%2BXK1H4x8v9EpYUwtgezRAnyClD1VVlDotB4W7DaaKrYUwTxr5%2BaNnbLLunz4Q93nL%2BKBzy6JtZ0DMOzz%2Fjn15S7P6IlbDBy2%2BxzNg21zzSeeUdxrSMd4Ktx0nZY6VkjZgkW5YSUxrmg95aS1GnFAJv7DGJHasdlP9uzNgotg%2FqvvSyeFMScAyjmbe9mwlejJg74NFEDndtTKWkVEBUlWXKuk1fT0xAFsTnbHyh8TknokM5nWWl7Qa4CgTgqeGZ8PEmjZRTh7f8w%2BLCuwgY6pgEb1WGV9FsC%2Fk50tLtvN6M4h739gqDveZLBjpqDAifE5ZFUyrMtjvcBTbmEjFxWKj2%2B2zvyQesFK0xcBDkJqKkJX4aSWVLdCUYGA15imAdbbMXHbW5QH9RCaXsuUql%2FXRGZCsR7pbJhDTckdjvSFvad697Kb1aEYyOaZEEhh5PFMquGU9HWg54D9KzSLR3HHLdE9SaKB7WltL15WEeO6agsl0IOoJzd&X-Amz-Signature=0f8517334c7ef841fa62ab27153693167d6a67cdbb79b707fe8fde542a81cd39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P5XUEWX%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T090952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIG86WLcHXgXWINPyeYxtH3wpWRgCY%2BKjpLkglPQPXWDhAiB598%2FIKUQGyPaLgxfHxvm9kOZ%2BJcLpEvpZ9U%2Fb74aWeyqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeYLlkgioEC81E%2BXRKtwDhZj2I2YwoZ0z8Ds4xqsBXpZ4kTYC3VVdyVbeXwFH75%2FyXpw%2BdWWLaGHxnAKP%2FOub852DT7gpBKWC06eWfnA0ldILfDEE3dodY72ixRQJJ1azDIakrCbHlqNTGtVNYQaG%2FJ9hTlO3dWh9naz0FG81xl%2BzlQW7q87YBnaQj4%2BWJv9eflpJEILlU9RWXmXlpExmsAHJoEEabf3T8w%2FqBFqAX6zdrgjFsMWdh99Wxr7rvXyBnubftSo%2FCNn333QjdL3nfprPjbIqcxUap02dWrpv1WexFgOmh58XVbHQpU2gvOUTu4QZ0qiUxr6suO9M27svzWqLQT%2FBB1x5nBiVRNH6ziBRziBhplAJis3IJF%2F7fUjvKB1TR%2BXK1H4x8v9EpYUwtgezRAnyClD1VVlDotB4W7DaaKrYUwTxr5%2BaNnbLLunz4Q93nL%2BKBzy6JtZ0DMOzz%2Fjn15S7P6IlbDBy2%2BxzNg21zzSeeUdxrSMd4Ktx0nZY6VkjZgkW5YSUxrmg95aS1GnFAJv7DGJHasdlP9uzNgotg%2FqvvSyeFMScAyjmbe9mwlejJg74NFEDndtTKWkVEBUlWXKuk1fT0xAFsTnbHyh8TknokM5nWWl7Qa4CgTgqeGZ8PEmjZRTh7f8w%2BLCuwgY6pgEb1WGV9FsC%2Fk50tLtvN6M4h739gqDveZLBjpqDAifE5ZFUyrMtjvcBTbmEjFxWKj2%2B2zvyQesFK0xcBDkJqKkJX4aSWVLdCUYGA15imAdbbMXHbW5QH9RCaXsuUql%2FXRGZCsR7pbJhDTckdjvSFvad697Kb1aEYyOaZEEhh5PFMquGU9HWg54D9KzSLR3HHLdE9SaKB7WltL15WEeO6agsl0IOoJzd&X-Amz-Signature=445aa3b01fba9b2599eab3bf4ece61f3aaeb2bacd5f0844e50a0eeb8e49309fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

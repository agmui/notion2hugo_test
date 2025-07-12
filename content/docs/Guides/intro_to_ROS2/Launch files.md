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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VU3CL52%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2wdunXFjvliNxAMqvzGisU%2BH4F2z1%2FDDK5LZ5DEw3OAiBvhaUy7f9uOH9pBw00%2BJwb0%2FRCdv3bjiG9H7dLgQzOVSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlBUjj0fo0l%2B1n%2B21KtwDhE6ygn5KTFRkpJON63%2BH3GgVpxnlD9xhoJthiAogABZEn3v2qAErL7Daqd0sKshHCQMF7ChTbcSE37WOjlYiQnsyaA5i3xZo4at%2FvDEjxsIyQeztkEPgk%2FTCSjZXv5RlKKg8y368VMehteu%2FsnSETXU5h4vNI%2Fvo5xs612WC0tVrxE%2F9rKf3BQ4tLl3fO%2Beanf1qgPWexIbhHIOwcAHu89IKSMrNLs%2FyVV3koPlarkv4Hq7yq6Shjb8V%2BdHytTpMJffrfzWvmp9OzXg6Muc8dNtaYQzQGZmJjI%2BXD4upDwRw9JE5wgqjfPLR3W2qaRxIIRoOGIV%2BcZPI3O5Hg1W32rxV5Asd0XfzU%2BdeMpm0rTAkxceDR9dUDvZ9mLFTXr%2B83lQPE9ys5NkIrcTJcU0MYi05AEiVGQPYNz0Ww7SFTNui%2FwcI9uDiq7WA8MDEljDXELf3W1WQyk9Y6uDcwfmcePAda1ifDog8OcCNWWlXyLE7rYuQw78vGGwknp45pUteedoFWAICTk1FuwqOqEUmU6y3DBMbkUmNNjO5E5%2BGvAfibOPzk5G1V%2B7PdmGeaOdXg%2BS54Ojehvp9xL22JRJHz0gQq3otpKn%2BMAUzuaRgedcPz5%2B%2FJLE2ufDr55Uw54TLwwY6pgG9yKSp7YoJGyNF9PNBOvtmSNKwlMviPR%2B0TYHMOWPMp2qBiXouhGMHVZtyKfREqBwEuejBXqa5xaY40egF5WlYw8R0k9N4Pv%2Ft0cPP3oK6JmWNkBnQSbaTLnjMGK1W0ybtxMRAA7loiG02BOR%2Ff%2FWIDEiYCmYTjpXYDes5luzYV1ciHjiaD90%2BvQgsgdXF0AVZ%2Bemjzs22FeETyp%2Ff7vN4FJJIbDzV&X-Amz-Signature=3ed4cf63b875a3b30e1c79d0d6a4903abec19ce8533f6ad1b067974c36f9337d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VU3CL52%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2wdunXFjvliNxAMqvzGisU%2BH4F2z1%2FDDK5LZ5DEw3OAiBvhaUy7f9uOH9pBw00%2BJwb0%2FRCdv3bjiG9H7dLgQzOVSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlBUjj0fo0l%2B1n%2B21KtwDhE6ygn5KTFRkpJON63%2BH3GgVpxnlD9xhoJthiAogABZEn3v2qAErL7Daqd0sKshHCQMF7ChTbcSE37WOjlYiQnsyaA5i3xZo4at%2FvDEjxsIyQeztkEPgk%2FTCSjZXv5RlKKg8y368VMehteu%2FsnSETXU5h4vNI%2Fvo5xs612WC0tVrxE%2F9rKf3BQ4tLl3fO%2Beanf1qgPWexIbhHIOwcAHu89IKSMrNLs%2FyVV3koPlarkv4Hq7yq6Shjb8V%2BdHytTpMJffrfzWvmp9OzXg6Muc8dNtaYQzQGZmJjI%2BXD4upDwRw9JE5wgqjfPLR3W2qaRxIIRoOGIV%2BcZPI3O5Hg1W32rxV5Asd0XfzU%2BdeMpm0rTAkxceDR9dUDvZ9mLFTXr%2B83lQPE9ys5NkIrcTJcU0MYi05AEiVGQPYNz0Ww7SFTNui%2FwcI9uDiq7WA8MDEljDXELf3W1WQyk9Y6uDcwfmcePAda1ifDog8OcCNWWlXyLE7rYuQw78vGGwknp45pUteedoFWAICTk1FuwqOqEUmU6y3DBMbkUmNNjO5E5%2BGvAfibOPzk5G1V%2B7PdmGeaOdXg%2BS54Ojehvp9xL22JRJHz0gQq3otpKn%2BMAUzuaRgedcPz5%2B%2FJLE2ufDr55Uw54TLwwY6pgG9yKSp7YoJGyNF9PNBOvtmSNKwlMviPR%2B0TYHMOWPMp2qBiXouhGMHVZtyKfREqBwEuejBXqa5xaY40egF5WlYw8R0k9N4Pv%2Ft0cPP3oK6JmWNkBnQSbaTLnjMGK1W0ybtxMRAA7loiG02BOR%2Ff%2FWIDEiYCmYTjpXYDes5luzYV1ciHjiaD90%2BvQgsgdXF0AVZ%2Bemjzs22FeETyp%2Ff7vN4FJJIbDzV&X-Amz-Signature=8995e43c9e08f1913186c4f4c319ac66d1c0b7786431cc9f350b7c53b198217b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VU3CL52%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2wdunXFjvliNxAMqvzGisU%2BH4F2z1%2FDDK5LZ5DEw3OAiBvhaUy7f9uOH9pBw00%2BJwb0%2FRCdv3bjiG9H7dLgQzOVSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlBUjj0fo0l%2B1n%2B21KtwDhE6ygn5KTFRkpJON63%2BH3GgVpxnlD9xhoJthiAogABZEn3v2qAErL7Daqd0sKshHCQMF7ChTbcSE37WOjlYiQnsyaA5i3xZo4at%2FvDEjxsIyQeztkEPgk%2FTCSjZXv5RlKKg8y368VMehteu%2FsnSETXU5h4vNI%2Fvo5xs612WC0tVrxE%2F9rKf3BQ4tLl3fO%2Beanf1qgPWexIbhHIOwcAHu89IKSMrNLs%2FyVV3koPlarkv4Hq7yq6Shjb8V%2BdHytTpMJffrfzWvmp9OzXg6Muc8dNtaYQzQGZmJjI%2BXD4upDwRw9JE5wgqjfPLR3W2qaRxIIRoOGIV%2BcZPI3O5Hg1W32rxV5Asd0XfzU%2BdeMpm0rTAkxceDR9dUDvZ9mLFTXr%2B83lQPE9ys5NkIrcTJcU0MYi05AEiVGQPYNz0Ww7SFTNui%2FwcI9uDiq7WA8MDEljDXELf3W1WQyk9Y6uDcwfmcePAda1ifDog8OcCNWWlXyLE7rYuQw78vGGwknp45pUteedoFWAICTk1FuwqOqEUmU6y3DBMbkUmNNjO5E5%2BGvAfibOPzk5G1V%2B7PdmGeaOdXg%2BS54Ojehvp9xL22JRJHz0gQq3otpKn%2BMAUzuaRgedcPz5%2B%2FJLE2ufDr55Uw54TLwwY6pgG9yKSp7YoJGyNF9PNBOvtmSNKwlMviPR%2B0TYHMOWPMp2qBiXouhGMHVZtyKfREqBwEuejBXqa5xaY40egF5WlYw8R0k9N4Pv%2Ft0cPP3oK6JmWNkBnQSbaTLnjMGK1W0ybtxMRAA7loiG02BOR%2Ff%2FWIDEiYCmYTjpXYDes5luzYV1ciHjiaD90%2BvQgsgdXF0AVZ%2Bemjzs22FeETyp%2Ff7vN4FJJIbDzV&X-Amz-Signature=01f57b7bb8f24061eac69013cc272c80f70a968991af52ca7cebfa8d9d4daaf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

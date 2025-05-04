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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622U7BA2N%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDgv9stIvM6K%2Frj06Zgk%2Bi00YswsiaFC4H839Dv62akggIhAI2JuJjXnpUdqV3nRbTpMDsbsYT5AJL0kLAzMXuqhgzdKv8DCBoQABoMNjM3NDIzMTgzODA1Igyg6hjbnqQVcUS7ZZYq3APvS%2BK8YbvOJnn5a6v2LYQG81SzCz9bKRENw9YX5n8tLgDZvvXWQb7mW2UZJdyU4LXIDsWYpm1IPXMNxKfR5tScwsZXtFSpzLrXZkRECh45z79NSUWQluKqQkfpcYbO2YYGgwogNXDM14nRoiCrI0MZNvbxmpEIROjTRM32mXvqu1JrJzsW7RIfqd7fzWiiMIzirDNLhhWE6a1jUP48rBJUqb%2F8n6MZTV5IUvaheCWSTRhhQUlHPnf6pCzVFVJA2W8KDFZgYIFzujobH64Pj8M10syxgkRSnNFEYvzLVMMOC1K6KUdG1mD%2F3meeEmd%2BsFylQb4vvhL63iVYShIwtwaTT62aqddxnDu1kwE2klu%2Bag0zqrp2G3VnqQgE8qU4dyT1JIkmALG0DbaD1%2BYXBTE5RwG393dq6SZm9SxCgsTPDjT8I1P6%2B8IrqSWBOddgN69eZm0y%2F5RgSUTH0S9e1d4MKJY2HkAkEqiLiNmSH4mJv%2FLdtgNCJflrshonJbYVzqU4mgDkB3J8JNKncFlOwwoQJC4T2XKK1Gf9b45QXXboU%2BJEBgpPot1Q0i6zbyJSOUhoCbSZBWv3ZAhWq0PfjUI38dtcF4BRMq6AAjh8fIy4RRECJvp6cdcH%2Br4wzjCwu97ABjqkASZMsWQd0vNOs8KrhKY3UGJIr6mLV3tBYoYBAPv6SjjFlJZnCl%2F3xFB%2F%2BGgM6E%2Bmyre3kCJFyRwFkYOXIfmQ94ala7cVBKyjScPXLKIGXIjAa1mMGcXFhlpJb6%2Bf7X5cKJgkZw5RI0XYUQzF8cDB2ZVMYiNzy%2FA4pi1N0%2B0DAylDa35vooafvdr4VcoTNZlIH9uQIjnAZSkCwKyDqnDXii1%2FYk48&X-Amz-Signature=62277ebbb18ff4a6baf3aef33dd8b57d948fe0d9e91594e8ff9f9edce0435838&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622U7BA2N%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDgv9stIvM6K%2Frj06Zgk%2Bi00YswsiaFC4H839Dv62akggIhAI2JuJjXnpUdqV3nRbTpMDsbsYT5AJL0kLAzMXuqhgzdKv8DCBoQABoMNjM3NDIzMTgzODA1Igyg6hjbnqQVcUS7ZZYq3APvS%2BK8YbvOJnn5a6v2LYQG81SzCz9bKRENw9YX5n8tLgDZvvXWQb7mW2UZJdyU4LXIDsWYpm1IPXMNxKfR5tScwsZXtFSpzLrXZkRECh45z79NSUWQluKqQkfpcYbO2YYGgwogNXDM14nRoiCrI0MZNvbxmpEIROjTRM32mXvqu1JrJzsW7RIfqd7fzWiiMIzirDNLhhWE6a1jUP48rBJUqb%2F8n6MZTV5IUvaheCWSTRhhQUlHPnf6pCzVFVJA2W8KDFZgYIFzujobH64Pj8M10syxgkRSnNFEYvzLVMMOC1K6KUdG1mD%2F3meeEmd%2BsFylQb4vvhL63iVYShIwtwaTT62aqddxnDu1kwE2klu%2Bag0zqrp2G3VnqQgE8qU4dyT1JIkmALG0DbaD1%2BYXBTE5RwG393dq6SZm9SxCgsTPDjT8I1P6%2B8IrqSWBOddgN69eZm0y%2F5RgSUTH0S9e1d4MKJY2HkAkEqiLiNmSH4mJv%2FLdtgNCJflrshonJbYVzqU4mgDkB3J8JNKncFlOwwoQJC4T2XKK1Gf9b45QXXboU%2BJEBgpPot1Q0i6zbyJSOUhoCbSZBWv3ZAhWq0PfjUI38dtcF4BRMq6AAjh8fIy4RRECJvp6cdcH%2Br4wzjCwu97ABjqkASZMsWQd0vNOs8KrhKY3UGJIr6mLV3tBYoYBAPv6SjjFlJZnCl%2F3xFB%2F%2BGgM6E%2Bmyre3kCJFyRwFkYOXIfmQ94ala7cVBKyjScPXLKIGXIjAa1mMGcXFhlpJb6%2Bf7X5cKJgkZw5RI0XYUQzF8cDB2ZVMYiNzy%2FA4pi1N0%2B0DAylDa35vooafvdr4VcoTNZlIH9uQIjnAZSkCwKyDqnDXii1%2FYk48&X-Amz-Signature=e135853eb8094ea1704754ebcf5455ff6bfa8195ee8735ee07c7a5ab4e1847a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622U7BA2N%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDgv9stIvM6K%2Frj06Zgk%2Bi00YswsiaFC4H839Dv62akggIhAI2JuJjXnpUdqV3nRbTpMDsbsYT5AJL0kLAzMXuqhgzdKv8DCBoQABoMNjM3NDIzMTgzODA1Igyg6hjbnqQVcUS7ZZYq3APvS%2BK8YbvOJnn5a6v2LYQG81SzCz9bKRENw9YX5n8tLgDZvvXWQb7mW2UZJdyU4LXIDsWYpm1IPXMNxKfR5tScwsZXtFSpzLrXZkRECh45z79NSUWQluKqQkfpcYbO2YYGgwogNXDM14nRoiCrI0MZNvbxmpEIROjTRM32mXvqu1JrJzsW7RIfqd7fzWiiMIzirDNLhhWE6a1jUP48rBJUqb%2F8n6MZTV5IUvaheCWSTRhhQUlHPnf6pCzVFVJA2W8KDFZgYIFzujobH64Pj8M10syxgkRSnNFEYvzLVMMOC1K6KUdG1mD%2F3meeEmd%2BsFylQb4vvhL63iVYShIwtwaTT62aqddxnDu1kwE2klu%2Bag0zqrp2G3VnqQgE8qU4dyT1JIkmALG0DbaD1%2BYXBTE5RwG393dq6SZm9SxCgsTPDjT8I1P6%2B8IrqSWBOddgN69eZm0y%2F5RgSUTH0S9e1d4MKJY2HkAkEqiLiNmSH4mJv%2FLdtgNCJflrshonJbYVzqU4mgDkB3J8JNKncFlOwwoQJC4T2XKK1Gf9b45QXXboU%2BJEBgpPot1Q0i6zbyJSOUhoCbSZBWv3ZAhWq0PfjUI38dtcF4BRMq6AAjh8fIy4RRECJvp6cdcH%2Br4wzjCwu97ABjqkASZMsWQd0vNOs8KrhKY3UGJIr6mLV3tBYoYBAPv6SjjFlJZnCl%2F3xFB%2F%2BGgM6E%2Bmyre3kCJFyRwFkYOXIfmQ94ala7cVBKyjScPXLKIGXIjAa1mMGcXFhlpJb6%2Bf7X5cKJgkZw5RI0XYUQzF8cDB2ZVMYiNzy%2FA4pi1N0%2B0DAylDa35vooafvdr4VcoTNZlIH9uQIjnAZSkCwKyDqnDXii1%2FYk48&X-Amz-Signature=95c5b8d1a5befc68382f8d42e0febafa16462b4d1d33a50388ccc71c2846babe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

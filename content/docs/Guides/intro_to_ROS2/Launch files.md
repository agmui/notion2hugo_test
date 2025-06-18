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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KAIDPV3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCagHszbzAW0KQfv4G3rOwZdfGVkwn7zGwaPIlQxy84sQIhALzqwQsJ1lB0Ep8Bz7JvtTp8QAnlkq9ki7G3cFPrfI1sKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxndzfsjrJL98m9n7kq3AN2hJKC%2FwrQ7IDj7MIrIRJZ%2BIhSL50lnDRqHESfJxeEvab2ZS0WMR5x7scHctjTk3rC8hNqvtqeZDdKKRIUcuf%2F13sN9k54BwF1ysJkr%2FLOVLWecZ%2Bm5c4eGErAj%2FeNe2yvFfHoiP%2FZB21e1FMySGqs0nIZxXGsghYI9DiMAxhBXpM0gglYkmM1%2F9%2BcfNJKFUBNMxtNkr%2B2OD%2BtGSWRjvKX4keFaIgyo2Y6a5toX6Ajb4qYrg8tYYmbVaAuHBpQYVPHRHwBH1KvkYaZ3V1n3oFK8niWm1d5YV8sSNbpxmnoP3T2bPqsYK7qQOR61hb%2BwivJe0AmP6Gms6Nh6fU5SG%2FkZnKQ%2BRKwkOzvEiygPLlUeHI0QChAuKws7kv0J3CiG5XUpKQ1U%2FqFHmNSZ507XbKK6STWpA9KPj2dDXp0cERClbrBY1xJe%2FHvZZ0Pt%2FN8kAoBTVkLqv8EheKhrx1xgM8HBHz6ES2U8uXu9MlXLNn6%2BoxozLTd23dSe1LJnomxb0lxWjMu1Sy7dBLJlnseaibBCAdlW6mcNqJNqylMti%2FLk5tgFIbWr04u4JTJ5zP55GnDYPaJK7ntIbjJ4t03aCOflXbbZoFzf8RIcQS1zsXPTh9DjMcaUc02ivJdSDC588rCBjqkAbaWvJj1eF8Dn5Tt1ikhfPbbGCr4zihyZNsUM8AypptHIZF6IskwHeXCht%2BMXuDW3FotMPmdsNnGw4TjdYZk1zJ0564IrdXc2NtWonTfFlCjBl1tCjF5h6evZ%2FHBeOXoXmZsnLndEHwkpzg%2BBQj5TnRGbfbkFBQGWVtEwFPFaioxD6nW9o9utAWKNmQfZBE3M%2F3l%2Bkt80qNKD2eVF5m2y5y16kWB&X-Amz-Signature=9a3896cfafa567e04c2ec903aca357a653f95b9c5d4cb3e08b871de811195d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KAIDPV3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCagHszbzAW0KQfv4G3rOwZdfGVkwn7zGwaPIlQxy84sQIhALzqwQsJ1lB0Ep8Bz7JvtTp8QAnlkq9ki7G3cFPrfI1sKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxndzfsjrJL98m9n7kq3AN2hJKC%2FwrQ7IDj7MIrIRJZ%2BIhSL50lnDRqHESfJxeEvab2ZS0WMR5x7scHctjTk3rC8hNqvtqeZDdKKRIUcuf%2F13sN9k54BwF1ysJkr%2FLOVLWecZ%2Bm5c4eGErAj%2FeNe2yvFfHoiP%2FZB21e1FMySGqs0nIZxXGsghYI9DiMAxhBXpM0gglYkmM1%2F9%2BcfNJKFUBNMxtNkr%2B2OD%2BtGSWRjvKX4keFaIgyo2Y6a5toX6Ajb4qYrg8tYYmbVaAuHBpQYVPHRHwBH1KvkYaZ3V1n3oFK8niWm1d5YV8sSNbpxmnoP3T2bPqsYK7qQOR61hb%2BwivJe0AmP6Gms6Nh6fU5SG%2FkZnKQ%2BRKwkOzvEiygPLlUeHI0QChAuKws7kv0J3CiG5XUpKQ1U%2FqFHmNSZ507XbKK6STWpA9KPj2dDXp0cERClbrBY1xJe%2FHvZZ0Pt%2FN8kAoBTVkLqv8EheKhrx1xgM8HBHz6ES2U8uXu9MlXLNn6%2BoxozLTd23dSe1LJnomxb0lxWjMu1Sy7dBLJlnseaibBCAdlW6mcNqJNqylMti%2FLk5tgFIbWr04u4JTJ5zP55GnDYPaJK7ntIbjJ4t03aCOflXbbZoFzf8RIcQS1zsXPTh9DjMcaUc02ivJdSDC588rCBjqkAbaWvJj1eF8Dn5Tt1ikhfPbbGCr4zihyZNsUM8AypptHIZF6IskwHeXCht%2BMXuDW3FotMPmdsNnGw4TjdYZk1zJ0564IrdXc2NtWonTfFlCjBl1tCjF5h6evZ%2FHBeOXoXmZsnLndEHwkpzg%2BBQj5TnRGbfbkFBQGWVtEwFPFaioxD6nW9o9utAWKNmQfZBE3M%2F3l%2Bkt80qNKD2eVF5m2y5y16kWB&X-Amz-Signature=e582184cad756e0901d084cdb2c4f3cfe3d307a5fddf876afe4f8d7f6c3cf9fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KAIDPV3%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCagHszbzAW0KQfv4G3rOwZdfGVkwn7zGwaPIlQxy84sQIhALzqwQsJ1lB0Ep8Bz7JvtTp8QAnlkq9ki7G3cFPrfI1sKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxndzfsjrJL98m9n7kq3AN2hJKC%2FwrQ7IDj7MIrIRJZ%2BIhSL50lnDRqHESfJxeEvab2ZS0WMR5x7scHctjTk3rC8hNqvtqeZDdKKRIUcuf%2F13sN9k54BwF1ysJkr%2FLOVLWecZ%2Bm5c4eGErAj%2FeNe2yvFfHoiP%2FZB21e1FMySGqs0nIZxXGsghYI9DiMAxhBXpM0gglYkmM1%2F9%2BcfNJKFUBNMxtNkr%2B2OD%2BtGSWRjvKX4keFaIgyo2Y6a5toX6Ajb4qYrg8tYYmbVaAuHBpQYVPHRHwBH1KvkYaZ3V1n3oFK8niWm1d5YV8sSNbpxmnoP3T2bPqsYK7qQOR61hb%2BwivJe0AmP6Gms6Nh6fU5SG%2FkZnKQ%2BRKwkOzvEiygPLlUeHI0QChAuKws7kv0J3CiG5XUpKQ1U%2FqFHmNSZ507XbKK6STWpA9KPj2dDXp0cERClbrBY1xJe%2FHvZZ0Pt%2FN8kAoBTVkLqv8EheKhrx1xgM8HBHz6ES2U8uXu9MlXLNn6%2BoxozLTd23dSe1LJnomxb0lxWjMu1Sy7dBLJlnseaibBCAdlW6mcNqJNqylMti%2FLk5tgFIbWr04u4JTJ5zP55GnDYPaJK7ntIbjJ4t03aCOflXbbZoFzf8RIcQS1zsXPTh9DjMcaUc02ivJdSDC588rCBjqkAbaWvJj1eF8Dn5Tt1ikhfPbbGCr4zihyZNsUM8AypptHIZF6IskwHeXCht%2BMXuDW3FotMPmdsNnGw4TjdYZk1zJ0564IrdXc2NtWonTfFlCjBl1tCjF5h6evZ%2FHBeOXoXmZsnLndEHwkpzg%2BBQj5TnRGbfbkFBQGWVtEwFPFaioxD6nW9o9utAWKNmQfZBE3M%2F3l%2Bkt80qNKD2eVF5m2y5y16kWB&X-Amz-Signature=c03523950c835d9c32c2a9b5be3b0952bb121af93ce61669022d4d73892c7fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

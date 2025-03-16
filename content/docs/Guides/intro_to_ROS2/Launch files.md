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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEN5YVO2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ITTk%2FfDnWPPrO0SxamAYk9gSySWZzeACYOA1texSQAIhALduV5rQz71E8hGQiqhB1qTmk%2B9vSZCFhJkdtEUyeDFEKv8DCCAQABoMNjM3NDIzMTgzODA1IgwBsatcTafw%2B96cM1cq3ANcxOkL3OlzuUfInjYD%2FQkOEc6vZidTAeK9YRrzMGeHOCJU4EDKqSz%2F1XuyI7tU80AIIWqsVQkle4CRsUjR2hZqgsLNGPTqktZjHtwtPuTt8Zqyh30QjTCMuCeQKzD%2BmrezAdm9YyKx3zqUYqZpJiFuZUjtT3nGQYUV0kRjCInTQirPG2MLlHzSRBsNJCY0iYYQHgcTAergkWjYkU1wgOGtc%2FjQYyi9Np2XTGAQJU2sJTxAQaqNmdS6SG4fLXNqQhVWLwFE8iFF86I%2BvCLLjGU951CngW3AuQEjJmC4SCsE9NlqWA8DLUB%2FJ80NxoRn0GSAJRox%2F9rkUcGmO5BBwLGPneQKh5DoQZSaX6APCmlhx7y4Y4R3cVNQYsIgJoSTSmPkC1xfhs39a2Hf6z4S0uinujqgIeGFaeBaQPFQpv8Gp%2BJWKuEiGexituOl7ajjg2w5CHqHc7s6gWYf7EkuDoONN7gJxQgCmpWauxrEsbvoQcxVyv40l0AoTSwqHc1HJ3ldvCwEYgMzzSaEjoKgee1swtL27Rqf4R%2Fk%2BrnmqZb5xxw6YIdRPeWjxiHKmasOTrXpDeQnxDrIGuabwiJyu7taOwDTzvy3WsTiysctGTuynsyqFFSUMcqJlkw6tTDdgdi%2BBjqkAYhMG8ui7TKY29RHCDhTl6aCrDwAn5wBTZCZukZV9%2Beb0lIKa91buLipCk1Zq7m1Ci11fEp93Sm3%2F34Q9mOPKXHjyBQ2MIJMjtZqmWBBQcOpJjHrByOCJQgt6cFIT29i8I2VTnxBDYHn%2FYmPXaewoXQ3sxuUQU30O20ILp76LBznbbPjHeI6oA%2BA8fi7HRVpWXq9RnTk56%2BPzuuEPiv6NUozK9WS&X-Amz-Signature=9215d62cef968b9d7582da7a7e7909c2477d0259840dc258c57b548f734e7f69&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEN5YVO2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ITTk%2FfDnWPPrO0SxamAYk9gSySWZzeACYOA1texSQAIhALduV5rQz71E8hGQiqhB1qTmk%2B9vSZCFhJkdtEUyeDFEKv8DCCAQABoMNjM3NDIzMTgzODA1IgwBsatcTafw%2B96cM1cq3ANcxOkL3OlzuUfInjYD%2FQkOEc6vZidTAeK9YRrzMGeHOCJU4EDKqSz%2F1XuyI7tU80AIIWqsVQkle4CRsUjR2hZqgsLNGPTqktZjHtwtPuTt8Zqyh30QjTCMuCeQKzD%2BmrezAdm9YyKx3zqUYqZpJiFuZUjtT3nGQYUV0kRjCInTQirPG2MLlHzSRBsNJCY0iYYQHgcTAergkWjYkU1wgOGtc%2FjQYyi9Np2XTGAQJU2sJTxAQaqNmdS6SG4fLXNqQhVWLwFE8iFF86I%2BvCLLjGU951CngW3AuQEjJmC4SCsE9NlqWA8DLUB%2FJ80NxoRn0GSAJRox%2F9rkUcGmO5BBwLGPneQKh5DoQZSaX6APCmlhx7y4Y4R3cVNQYsIgJoSTSmPkC1xfhs39a2Hf6z4S0uinujqgIeGFaeBaQPFQpv8Gp%2BJWKuEiGexituOl7ajjg2w5CHqHc7s6gWYf7EkuDoONN7gJxQgCmpWauxrEsbvoQcxVyv40l0AoTSwqHc1HJ3ldvCwEYgMzzSaEjoKgee1swtL27Rqf4R%2Fk%2BrnmqZb5xxw6YIdRPeWjxiHKmasOTrXpDeQnxDrIGuabwiJyu7taOwDTzvy3WsTiysctGTuynsyqFFSUMcqJlkw6tTDdgdi%2BBjqkAYhMG8ui7TKY29RHCDhTl6aCrDwAn5wBTZCZukZV9%2Beb0lIKa91buLipCk1Zq7m1Ci11fEp93Sm3%2F34Q9mOPKXHjyBQ2MIJMjtZqmWBBQcOpJjHrByOCJQgt6cFIT29i8I2VTnxBDYHn%2FYmPXaewoXQ3sxuUQU30O20ILp76LBznbbPjHeI6oA%2BA8fi7HRVpWXq9RnTk56%2BPzuuEPiv6NUozK9WS&X-Amz-Signature=e9934aad8e9782886796c363713282a85b7885f3875708edd7d952442cd0918a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEN5YVO2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T032321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1ITTk%2FfDnWPPrO0SxamAYk9gSySWZzeACYOA1texSQAIhALduV5rQz71E8hGQiqhB1qTmk%2B9vSZCFhJkdtEUyeDFEKv8DCCAQABoMNjM3NDIzMTgzODA1IgwBsatcTafw%2B96cM1cq3ANcxOkL3OlzuUfInjYD%2FQkOEc6vZidTAeK9YRrzMGeHOCJU4EDKqSz%2F1XuyI7tU80AIIWqsVQkle4CRsUjR2hZqgsLNGPTqktZjHtwtPuTt8Zqyh30QjTCMuCeQKzD%2BmrezAdm9YyKx3zqUYqZpJiFuZUjtT3nGQYUV0kRjCInTQirPG2MLlHzSRBsNJCY0iYYQHgcTAergkWjYkU1wgOGtc%2FjQYyi9Np2XTGAQJU2sJTxAQaqNmdS6SG4fLXNqQhVWLwFE8iFF86I%2BvCLLjGU951CngW3AuQEjJmC4SCsE9NlqWA8DLUB%2FJ80NxoRn0GSAJRox%2F9rkUcGmO5BBwLGPneQKh5DoQZSaX6APCmlhx7y4Y4R3cVNQYsIgJoSTSmPkC1xfhs39a2Hf6z4S0uinujqgIeGFaeBaQPFQpv8Gp%2BJWKuEiGexituOl7ajjg2w5CHqHc7s6gWYf7EkuDoONN7gJxQgCmpWauxrEsbvoQcxVyv40l0AoTSwqHc1HJ3ldvCwEYgMzzSaEjoKgee1swtL27Rqf4R%2Fk%2BrnmqZb5xxw6YIdRPeWjxiHKmasOTrXpDeQnxDrIGuabwiJyu7taOwDTzvy3WsTiysctGTuynsyqFFSUMcqJlkw6tTDdgdi%2BBjqkAYhMG8ui7TKY29RHCDhTl6aCrDwAn5wBTZCZukZV9%2Beb0lIKa91buLipCk1Zq7m1Ci11fEp93Sm3%2F34Q9mOPKXHjyBQ2MIJMjtZqmWBBQcOpJjHrByOCJQgt6cFIT29i8I2VTnxBDYHn%2FYmPXaewoXQ3sxuUQU30O20ILp76LBznbbPjHeI6oA%2BA8fi7HRVpWXq9RnTk56%2BPzuuEPiv6NUozK9WS&X-Amz-Signature=9040ddc8d99c8f69a464e64c6aa39368a4753e7d4e1ccf40b22ece7a9d29fc67&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

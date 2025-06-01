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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YE6W3Q%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGJdrNZ6%2FZ%2BNGhmQsvRYltQhjJzI4BmSEUY3qUtEZDVwAiEAseXWqQouhqy1hsEEKu6ngwb1oWxkYjL%2BvozsEhgjTZEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFXWBiW5yCctz07aCrcA9D%2FkqxY20yZhF82FSP6zrfMhm9IdeB5j4ltMN2MeLSbGqGTsYRsb9U0V0BnmplqXMtSL%2Bv6blhmt9oskw%2BcV9wko%2BXA4yOwLQ8VqLXeEvfUeklIzkny6f8B5QExt0yBlS9J2odQhZNEHvc1wtOyKuKMQtLmTqOEKqWqiJ%2FCspW0asuBJAdmzTwIFs5mic3t9w%2BBQfrQGeCaynncGXup3%2FcxGc8aCnNu9d7YWBjuECGZ%2B0Alua4s5lC%2BVxDvNSeyZkGROAAjH7BvQNzQdNnM93ktz%2BQz72qLg3SIExAvnrZiea5sJfokHgWLoR5PtBkMovImE7hUGxoG%2BxKUBdwWjGIAqlBtl8hfypPY4IGvgz4K3xYKMnNb%2B5lKJzMZVC4We5MWj%2F%2FCErrFBWyDE0rXHFTURL4itEQrJH9zRU8r8imu9RXAt%2FuzCZXStVi4jNUF1pX5HF8X8EvODxAot22IXJ2S7qFtzIn%2BtqWiooBZTlQksGXJxTpSlL0i4qIFw3EDJcoLXfXyB0YKK4z0f2eR9nhs%2FEdSz5QUrsY6HXQMZc7nnzeJDw%2FJKf%2FC5oU3V%2FdL5zZMbIVCh%2BM42sI%2BpGoPQgonBjR13EgCZS0t9HxXFJT9mGIZ4XuNSCMzBRXjMJ%2Ff8MEGOqUBNO%2BD4MzG8hymI0dbaICkxYoMvS%2FsquE7y%2FiqDbQYfZWHVWAWuAY6oaj%2FTt%2FK97DyH9yfqKX26ZE1895its8AFp6Eq6r6oYTnACNJdCmhNGeWI5RxqWoAn2d4eEL9%2F382KreNGNw2miC02odbhk1jNyplRD7cdHAqIhFq17ZfypIpWXcVfpAP3cl1Q%2BCMfnEnYxK43xQV%2Bh3MxTu6vJ8OLzm%2BGf%2Fy&X-Amz-Signature=b051f8c581fde14c57fc88deadc1185af8f51d8f0ea45e6b61a1b971253f3ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YE6W3Q%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGJdrNZ6%2FZ%2BNGhmQsvRYltQhjJzI4BmSEUY3qUtEZDVwAiEAseXWqQouhqy1hsEEKu6ngwb1oWxkYjL%2BvozsEhgjTZEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFXWBiW5yCctz07aCrcA9D%2FkqxY20yZhF82FSP6zrfMhm9IdeB5j4ltMN2MeLSbGqGTsYRsb9U0V0BnmplqXMtSL%2Bv6blhmt9oskw%2BcV9wko%2BXA4yOwLQ8VqLXeEvfUeklIzkny6f8B5QExt0yBlS9J2odQhZNEHvc1wtOyKuKMQtLmTqOEKqWqiJ%2FCspW0asuBJAdmzTwIFs5mic3t9w%2BBQfrQGeCaynncGXup3%2FcxGc8aCnNu9d7YWBjuECGZ%2B0Alua4s5lC%2BVxDvNSeyZkGROAAjH7BvQNzQdNnM93ktz%2BQz72qLg3SIExAvnrZiea5sJfokHgWLoR5PtBkMovImE7hUGxoG%2BxKUBdwWjGIAqlBtl8hfypPY4IGvgz4K3xYKMnNb%2B5lKJzMZVC4We5MWj%2F%2FCErrFBWyDE0rXHFTURL4itEQrJH9zRU8r8imu9RXAt%2FuzCZXStVi4jNUF1pX5HF8X8EvODxAot22IXJ2S7qFtzIn%2BtqWiooBZTlQksGXJxTpSlL0i4qIFw3EDJcoLXfXyB0YKK4z0f2eR9nhs%2FEdSz5QUrsY6HXQMZc7nnzeJDw%2FJKf%2FC5oU3V%2FdL5zZMbIVCh%2BM42sI%2BpGoPQgonBjR13EgCZS0t9HxXFJT9mGIZ4XuNSCMzBRXjMJ%2Ff8MEGOqUBNO%2BD4MzG8hymI0dbaICkxYoMvS%2FsquE7y%2FiqDbQYfZWHVWAWuAY6oaj%2FTt%2FK97DyH9yfqKX26ZE1895its8AFp6Eq6r6oYTnACNJdCmhNGeWI5RxqWoAn2d4eEL9%2F382KreNGNw2miC02odbhk1jNyplRD7cdHAqIhFq17ZfypIpWXcVfpAP3cl1Q%2BCMfnEnYxK43xQV%2Bh3MxTu6vJ8OLzm%2BGf%2Fy&X-Amz-Signature=bc99c4fbec52fea0235c1a1cf2a1e889730a93aa0233ad33411e022784c80b36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3YE6W3Q%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIGJdrNZ6%2FZ%2BNGhmQsvRYltQhjJzI4BmSEUY3qUtEZDVwAiEAseXWqQouhqy1hsEEKu6ngwb1oWxkYjL%2BvozsEhgjTZEqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJFXWBiW5yCctz07aCrcA9D%2FkqxY20yZhF82FSP6zrfMhm9IdeB5j4ltMN2MeLSbGqGTsYRsb9U0V0BnmplqXMtSL%2Bv6blhmt9oskw%2BcV9wko%2BXA4yOwLQ8VqLXeEvfUeklIzkny6f8B5QExt0yBlS9J2odQhZNEHvc1wtOyKuKMQtLmTqOEKqWqiJ%2FCspW0asuBJAdmzTwIFs5mic3t9w%2BBQfrQGeCaynncGXup3%2FcxGc8aCnNu9d7YWBjuECGZ%2B0Alua4s5lC%2BVxDvNSeyZkGROAAjH7BvQNzQdNnM93ktz%2BQz72qLg3SIExAvnrZiea5sJfokHgWLoR5PtBkMovImE7hUGxoG%2BxKUBdwWjGIAqlBtl8hfypPY4IGvgz4K3xYKMnNb%2B5lKJzMZVC4We5MWj%2F%2FCErrFBWyDE0rXHFTURL4itEQrJH9zRU8r8imu9RXAt%2FuzCZXStVi4jNUF1pX5HF8X8EvODxAot22IXJ2S7qFtzIn%2BtqWiooBZTlQksGXJxTpSlL0i4qIFw3EDJcoLXfXyB0YKK4z0f2eR9nhs%2FEdSz5QUrsY6HXQMZc7nnzeJDw%2FJKf%2FC5oU3V%2FdL5zZMbIVCh%2BM42sI%2BpGoPQgonBjR13EgCZS0t9HxXFJT9mGIZ4XuNSCMzBRXjMJ%2Ff8MEGOqUBNO%2BD4MzG8hymI0dbaICkxYoMvS%2FsquE7y%2FiqDbQYfZWHVWAWuAY6oaj%2FTt%2FK97DyH9yfqKX26ZE1895its8AFp6Eq6r6oYTnACNJdCmhNGeWI5RxqWoAn2d4eEL9%2F382KreNGNw2miC02odbhk1jNyplRD7cdHAqIhFq17ZfypIpWXcVfpAP3cl1Q%2BCMfnEnYxK43xQV%2Bh3MxTu6vJ8OLzm%2BGf%2Fy&X-Amz-Signature=136e1a9ec458749a161333d98d4c6d3d3945444510b3d4961fa958224fda7c3d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

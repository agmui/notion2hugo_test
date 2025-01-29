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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WQFWHJX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDNZzK0hsdB4on8CaY6Cy%2Ffcw6GVNlhIWSKHYLjG07bzwIga30c%2FToOTR3Q7Xpcp0x1YqrzVFkfW0ESDFN1eHL7pOMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHnNab1up08dCqTjyrcA%2FCFDP0tZqze%2BbcLevvdEqBWoAh%2BJLDuAlHDZs4zjYARF2KaAZR73Di30lhdY9GYsyc%2Bbq2c8F0KVEf1A%2BoEXLh6MAO8JTM3YiNKz8Pq1Fwuofd3RBSTyUmC4NC5CHWx32e0IB8tZsHxCJwzkqHftgNL0Wx8CKGjvYK47FrqfYz0qvWLEiLCahHlWBdnAqXEtzsK0bWio6%2FLhvKr1fTdBjABRTkLtVjpO5%2F1hN%2BnlMUFqdSHXYolnG25oZINiRXR8r5WT0W0FtBwGyDI5jl%2BuX5QfB12edwlbYB0%2B7TvNmSkylIqyFpa18BCAtuyvV556YGFJN%2F%2FrGedDv4Jr7XISRH%2BrTlLNfEu7v1JR%2BejfUlY%2BIvGgB9w4zr8n9zG7FBl4AwQcbpAgcsPwHy00ePcUxr6XuaZ4G8hnjQFh5dc6%2F%2BqgZGl4puQ7AfZA8uOfd30VtWAgoanEtbX%2FmbLvbAyXQxUXVC08Wovmp5uiW4TP4amqo%2BihMeZX9hIJ0UcJWEWe6AOSUhm1Tsvxk8yerCzojcnA0huFfZYQSpFmEL97dzazLCc%2FJBpKnTICFVcZE8auMNdEShAZBU8AvLzZ1sYAlqPXaQkzz4K9Yd7kp4AVgxa2970dREGQBLqkYfKMPq75rwGOqUBCJ8s1ZPLZJXpPW44gMVAicP0DV5trsqfXscPHoJnvaJXKQjO3m7WoyIQFlem1B23v%2BW8atHqnvQVIe5OSsBns7OszqqK1NDYIDprXy%2BgBIE%2Fll2oEslHi5Lv5czKY0LwiAIolcUSshHVJDVycJWL48m0u%2FWaSgsaOnHZzAuU737EqtSh2%2B5bzVXcO1WUcOrQ1JOGVOao6rt18V2YOmk2LHMvrTHS&X-Amz-Signature=8b390d8aab4b6b8cc93a5ca2abd3bc0b7f36b273d7981604c8eb320271bddfc4&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WQFWHJX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDNZzK0hsdB4on8CaY6Cy%2Ffcw6GVNlhIWSKHYLjG07bzwIga30c%2FToOTR3Q7Xpcp0x1YqrzVFkfW0ESDFN1eHL7pOMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHnNab1up08dCqTjyrcA%2FCFDP0tZqze%2BbcLevvdEqBWoAh%2BJLDuAlHDZs4zjYARF2KaAZR73Di30lhdY9GYsyc%2Bbq2c8F0KVEf1A%2BoEXLh6MAO8JTM3YiNKz8Pq1Fwuofd3RBSTyUmC4NC5CHWx32e0IB8tZsHxCJwzkqHftgNL0Wx8CKGjvYK47FrqfYz0qvWLEiLCahHlWBdnAqXEtzsK0bWio6%2FLhvKr1fTdBjABRTkLtVjpO5%2F1hN%2BnlMUFqdSHXYolnG25oZINiRXR8r5WT0W0FtBwGyDI5jl%2BuX5QfB12edwlbYB0%2B7TvNmSkylIqyFpa18BCAtuyvV556YGFJN%2F%2FrGedDv4Jr7XISRH%2BrTlLNfEu7v1JR%2BejfUlY%2BIvGgB9w4zr8n9zG7FBl4AwQcbpAgcsPwHy00ePcUxr6XuaZ4G8hnjQFh5dc6%2F%2BqgZGl4puQ7AfZA8uOfd30VtWAgoanEtbX%2FmbLvbAyXQxUXVC08Wovmp5uiW4TP4amqo%2BihMeZX9hIJ0UcJWEWe6AOSUhm1Tsvxk8yerCzojcnA0huFfZYQSpFmEL97dzazLCc%2FJBpKnTICFVcZE8auMNdEShAZBU8AvLzZ1sYAlqPXaQkzz4K9Yd7kp4AVgxa2970dREGQBLqkYfKMPq75rwGOqUBCJ8s1ZPLZJXpPW44gMVAicP0DV5trsqfXscPHoJnvaJXKQjO3m7WoyIQFlem1B23v%2BW8atHqnvQVIe5OSsBns7OszqqK1NDYIDprXy%2BgBIE%2Fll2oEslHi5Lv5czKY0LwiAIolcUSshHVJDVycJWL48m0u%2FWaSgsaOnHZzAuU737EqtSh2%2B5bzVXcO1WUcOrQ1JOGVOao6rt18V2YOmk2LHMvrTHS&X-Amz-Signature=7ca01f9f99f7fcd77e0059b09d7828bb671756fe0fa74dd819f69e65828c54a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WQFWHJX%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T050756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDNZzK0hsdB4on8CaY6Cy%2Ffcw6GVNlhIWSKHYLjG07bzwIga30c%2FToOTR3Q7Xpcp0x1YqrzVFkfW0ESDFN1eHL7pOMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEHnNab1up08dCqTjyrcA%2FCFDP0tZqze%2BbcLevvdEqBWoAh%2BJLDuAlHDZs4zjYARF2KaAZR73Di30lhdY9GYsyc%2Bbq2c8F0KVEf1A%2BoEXLh6MAO8JTM3YiNKz8Pq1Fwuofd3RBSTyUmC4NC5CHWx32e0IB8tZsHxCJwzkqHftgNL0Wx8CKGjvYK47FrqfYz0qvWLEiLCahHlWBdnAqXEtzsK0bWio6%2FLhvKr1fTdBjABRTkLtVjpO5%2F1hN%2BnlMUFqdSHXYolnG25oZINiRXR8r5WT0W0FtBwGyDI5jl%2BuX5QfB12edwlbYB0%2B7TvNmSkylIqyFpa18BCAtuyvV556YGFJN%2F%2FrGedDv4Jr7XISRH%2BrTlLNfEu7v1JR%2BejfUlY%2BIvGgB9w4zr8n9zG7FBl4AwQcbpAgcsPwHy00ePcUxr6XuaZ4G8hnjQFh5dc6%2F%2BqgZGl4puQ7AfZA8uOfd30VtWAgoanEtbX%2FmbLvbAyXQxUXVC08Wovmp5uiW4TP4amqo%2BihMeZX9hIJ0UcJWEWe6AOSUhm1Tsvxk8yerCzojcnA0huFfZYQSpFmEL97dzazLCc%2FJBpKnTICFVcZE8auMNdEShAZBU8AvLzZ1sYAlqPXaQkzz4K9Yd7kp4AVgxa2970dREGQBLqkYfKMPq75rwGOqUBCJ8s1ZPLZJXpPW44gMVAicP0DV5trsqfXscPHoJnvaJXKQjO3m7WoyIQFlem1B23v%2BW8atHqnvQVIe5OSsBns7OszqqK1NDYIDprXy%2BgBIE%2Fll2oEslHi5Lv5czKY0LwiAIolcUSshHVJDVycJWL48m0u%2FWaSgsaOnHZzAuU737EqtSh2%2B5bzVXcO1WUcOrQ1JOGVOao6rt18V2YOmk2LHMvrTHS&X-Amz-Signature=2b1a5d485d95fe076df95088f25a3087a9a587e7f8657179ad8aa3516c3ba2b4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCSXE5X%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR%2BPiBX9yWzHq4Di8xQ33uivo%2B0kwfcU5GHFW9MDfG3gIgSfvZ9u2OXgDZK6LGQQATzK3Fi9qDaBISLikdM5VWW6oq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCzIQ6ztpLYa2uNMHircA69t7btwJKJRwK%2FBttu%2Fn0YK7vAqMHbk2s7ejRKgTLdlr%2FHtFGM%2B6CIgq0PHDx8CQE8%2FvScVS0lbewgEjJCUSLfLaGqOYWb4e%2F0LEq4yrL3RCWMK44tPvPOCB1m83HMcP9fXhvJV%2FZ3uFvHyNXzL%2FeiRX5dDrnZKgszUH0p2EgqW5MDq7b6Sg%2F%2FKkxS9vKlSDTWwpVpTIhibxR8Mn55O4qfpRHQUrrOuoqe0hSAKmWp%2BkLyAf21t0vLO8%2B%2BtZ62ynhjKZf1xy8l1Q9LzqMk8H5Kt4XQJA3Iu5WsdClGgVp%2FN5pjmVn6tzAVeZPxt0k0d7DFLLQ5ZcAgrpzT8c5vxaHY6naS%2FFCZpmECluhzIxifdBQQ%2Bm4sNZgQ2XhP4YWE7OwCo8m%2FsawJ4Y0DQZQgAGyCGsCpDQy0IMZoZOyMfF6Y2QwZxTwWsqVZXNa1MsJBCsravhXUV3yFF1nJrAcqHbet6Hls0hut9eSlCJBQt1GvJGN7e0zF8mav42YwSrGC2DEP6Put3a5z1b%2FNE1CZFP6Ee2b7CzHSAasPFplLEFdf0LsDXGt0R%2FekteQgBVdXHoHAjq0rApOCDw5iJxh%2FPRO8w%2FQjax5NEGzc489lDl49oa7cN3xrgkI%2BNhmxAMMrf9sQGOqUBJqA%2FRn33C6%2Br3O5MUSjT7Miu9f808YxziX8Ixb8o7T43plDvaptKsgyZtirkud2MKYFpaUsTIa3rhrRccZbXDM1qA5Db9LRY8qkEYoC28xIYGe%2BCkGoNHQ5pi7lShVPnYZnwi3tSO3ScNJi9GJJqYIhpFtTxZYGAbGSknq%2Flwlya83iwE8j6Z6EghbIx5fgiYNYDhuLgOTLlvQg8OUiFMZ4V%2FycX&X-Amz-Signature=38919794c0d17b43098167b9e9092631c000c4d35d03067be8a93e01b37f118c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCSXE5X%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR%2BPiBX9yWzHq4Di8xQ33uivo%2B0kwfcU5GHFW9MDfG3gIgSfvZ9u2OXgDZK6LGQQATzK3Fi9qDaBISLikdM5VWW6oq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCzIQ6ztpLYa2uNMHircA69t7btwJKJRwK%2FBttu%2Fn0YK7vAqMHbk2s7ejRKgTLdlr%2FHtFGM%2B6CIgq0PHDx8CQE8%2FvScVS0lbewgEjJCUSLfLaGqOYWb4e%2F0LEq4yrL3RCWMK44tPvPOCB1m83HMcP9fXhvJV%2FZ3uFvHyNXzL%2FeiRX5dDrnZKgszUH0p2EgqW5MDq7b6Sg%2F%2FKkxS9vKlSDTWwpVpTIhibxR8Mn55O4qfpRHQUrrOuoqe0hSAKmWp%2BkLyAf21t0vLO8%2B%2BtZ62ynhjKZf1xy8l1Q9LzqMk8H5Kt4XQJA3Iu5WsdClGgVp%2FN5pjmVn6tzAVeZPxt0k0d7DFLLQ5ZcAgrpzT8c5vxaHY6naS%2FFCZpmECluhzIxifdBQQ%2Bm4sNZgQ2XhP4YWE7OwCo8m%2FsawJ4Y0DQZQgAGyCGsCpDQy0IMZoZOyMfF6Y2QwZxTwWsqVZXNa1MsJBCsravhXUV3yFF1nJrAcqHbet6Hls0hut9eSlCJBQt1GvJGN7e0zF8mav42YwSrGC2DEP6Put3a5z1b%2FNE1CZFP6Ee2b7CzHSAasPFplLEFdf0LsDXGt0R%2FekteQgBVdXHoHAjq0rApOCDw5iJxh%2FPRO8w%2FQjax5NEGzc489lDl49oa7cN3xrgkI%2BNhmxAMMrf9sQGOqUBJqA%2FRn33C6%2Br3O5MUSjT7Miu9f808YxziX8Ixb8o7T43plDvaptKsgyZtirkud2MKYFpaUsTIa3rhrRccZbXDM1qA5Db9LRY8qkEYoC28xIYGe%2BCkGoNHQ5pi7lShVPnYZnwi3tSO3ScNJi9GJJqYIhpFtTxZYGAbGSknq%2Flwlya83iwE8j6Z6EghbIx5fgiYNYDhuLgOTLlvQg8OUiFMZ4V%2FycX&X-Amz-Signature=5ebf4436563dc258550b3f8acffec56213a252f788a48f6e8468955639426f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TCSXE5X%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR%2BPiBX9yWzHq4Di8xQ33uivo%2B0kwfcU5GHFW9MDfG3gIgSfvZ9u2OXgDZK6LGQQATzK3Fi9qDaBISLikdM5VWW6oq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCzIQ6ztpLYa2uNMHircA69t7btwJKJRwK%2FBttu%2Fn0YK7vAqMHbk2s7ejRKgTLdlr%2FHtFGM%2B6CIgq0PHDx8CQE8%2FvScVS0lbewgEjJCUSLfLaGqOYWb4e%2F0LEq4yrL3RCWMK44tPvPOCB1m83HMcP9fXhvJV%2FZ3uFvHyNXzL%2FeiRX5dDrnZKgszUH0p2EgqW5MDq7b6Sg%2F%2FKkxS9vKlSDTWwpVpTIhibxR8Mn55O4qfpRHQUrrOuoqe0hSAKmWp%2BkLyAf21t0vLO8%2B%2BtZ62ynhjKZf1xy8l1Q9LzqMk8H5Kt4XQJA3Iu5WsdClGgVp%2FN5pjmVn6tzAVeZPxt0k0d7DFLLQ5ZcAgrpzT8c5vxaHY6naS%2FFCZpmECluhzIxifdBQQ%2Bm4sNZgQ2XhP4YWE7OwCo8m%2FsawJ4Y0DQZQgAGyCGsCpDQy0IMZoZOyMfF6Y2QwZxTwWsqVZXNa1MsJBCsravhXUV3yFF1nJrAcqHbet6Hls0hut9eSlCJBQt1GvJGN7e0zF8mav42YwSrGC2DEP6Put3a5z1b%2FNE1CZFP6Ee2b7CzHSAasPFplLEFdf0LsDXGt0R%2FekteQgBVdXHoHAjq0rApOCDw5iJxh%2FPRO8w%2FQjax5NEGzc489lDl49oa7cN3xrgkI%2BNhmxAMMrf9sQGOqUBJqA%2FRn33C6%2Br3O5MUSjT7Miu9f808YxziX8Ixb8o7T43plDvaptKsgyZtirkud2MKYFpaUsTIa3rhrRccZbXDM1qA5Db9LRY8qkEYoC28xIYGe%2BCkGoNHQ5pi7lShVPnYZnwi3tSO3ScNJi9GJJqYIhpFtTxZYGAbGSknq%2Flwlya83iwE8j6Z6EghbIx5fgiYNYDhuLgOTLlvQg8OUiFMZ4V%2FycX&X-Amz-Signature=a8dcfbeb11720e6169d935a6f012d0a50c9bb2fd412db6b01ac5b9c93f498d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

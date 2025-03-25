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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QFHCYFQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK49PfTvfMl0r5b0oNvxIm3D6C4DkddPlvQBYN8bLShwIgE6kVFG9MTXsG2vaHM6MO%2F%2FH5BsXKQvXfFqWvuABjLtkq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNw6oklPqqAWTXXN6yrcAxnjIono%2FDNOaArfPHKAEG4rQZoL5i9aLxwOAiWExOgv92sFgtOn%2FKm2njvSZSWaRJgQKU5sg%2BnOuf%2FF1fS3c2HPW%2BWIma95lecrhCFO7on3KZCDFtRfU7DjZpbJHI8woW9xfyX44dgYqUWXa5gTPh5%2FWZDHzeAO6We%2Fk%2BQBDHFP499QzWvBcmEsTt6pvuat2dlXQdcAlIvmeDPwCASMtGQYoo8IBHY5end9RtYxfgy7Q4YJ5GygucOdszr7L9%2FOR3yGxqiKLHOA3PxF072kjYSx%2BIAP9JeOesEEIs%2FLe4uKbXk6VqDUiMpgyJnz0O%2FCqgHGEuUrgLvi%2FwecIpPSe6Qj4EDH4JyU1W%2BiPXazIZzUSYXnGo2r%2BETRwci%2Bh21BcJpfF%2FON7AYdloPkDdsEAQBoCmOzbn9o6DwqQSwg8JB7RlBcUzJKj%2Bqx%2BUumnBJfop%2Fe%2BLDggITuOB5RJqgqTcBMLQdFgxIqhJokOYvSmqWe%2F4DSoumy4KanZNFg5o8ZZbjj0jdRyyBWSCDytfBcL8RYGNbwvWGflfStXG%2FDeOko8uAH0qOaIUYIsPUor8psRz%2Fp3fT5uAvfO2oA%2BPmYnJk4gqUVL4waiVXxlaNUnW3zsbiM6sPmlyZZcAPtMMjkir8GOqUBTMsrWOse459%2FWmdUunpQzrMmOQMIhdExPG44%2FggnwcGUFoDwxW6dIkOa0EtzcvrvDrJdBNeJJWIkNpesfrT4ncZrUEszNqw9x%2Fq1TZfUlv%2BdKkTn5AS8ToB5ODN8bbioDaiuP8%2BnEEBNKaowBxRNSM%2Fe5xLabWFjwbMCPVJaniN2Zrhe%2BEs5a4HN6Zafh3%2BY5CRAOO1jKMn7JZt9q1VZsE2QIDyv&X-Amz-Signature=08cdb048859ea3c682a28ad0d3946e0cb50afd25d2e9466f2e33a92ed26f783c&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QFHCYFQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK49PfTvfMl0r5b0oNvxIm3D6C4DkddPlvQBYN8bLShwIgE6kVFG9MTXsG2vaHM6MO%2F%2FH5BsXKQvXfFqWvuABjLtkq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNw6oklPqqAWTXXN6yrcAxnjIono%2FDNOaArfPHKAEG4rQZoL5i9aLxwOAiWExOgv92sFgtOn%2FKm2njvSZSWaRJgQKU5sg%2BnOuf%2FF1fS3c2HPW%2BWIma95lecrhCFO7on3KZCDFtRfU7DjZpbJHI8woW9xfyX44dgYqUWXa5gTPh5%2FWZDHzeAO6We%2Fk%2BQBDHFP499QzWvBcmEsTt6pvuat2dlXQdcAlIvmeDPwCASMtGQYoo8IBHY5end9RtYxfgy7Q4YJ5GygucOdszr7L9%2FOR3yGxqiKLHOA3PxF072kjYSx%2BIAP9JeOesEEIs%2FLe4uKbXk6VqDUiMpgyJnz0O%2FCqgHGEuUrgLvi%2FwecIpPSe6Qj4EDH4JyU1W%2BiPXazIZzUSYXnGo2r%2BETRwci%2Bh21BcJpfF%2FON7AYdloPkDdsEAQBoCmOzbn9o6DwqQSwg8JB7RlBcUzJKj%2Bqx%2BUumnBJfop%2Fe%2BLDggITuOB5RJqgqTcBMLQdFgxIqhJokOYvSmqWe%2F4DSoumy4KanZNFg5o8ZZbjj0jdRyyBWSCDytfBcL8RYGNbwvWGflfStXG%2FDeOko8uAH0qOaIUYIsPUor8psRz%2Fp3fT5uAvfO2oA%2BPmYnJk4gqUVL4waiVXxlaNUnW3zsbiM6sPmlyZZcAPtMMjkir8GOqUBTMsrWOse459%2FWmdUunpQzrMmOQMIhdExPG44%2FggnwcGUFoDwxW6dIkOa0EtzcvrvDrJdBNeJJWIkNpesfrT4ncZrUEszNqw9x%2Fq1TZfUlv%2BdKkTn5AS8ToB5ODN8bbioDaiuP8%2BnEEBNKaowBxRNSM%2Fe5xLabWFjwbMCPVJaniN2Zrhe%2BEs5a4HN6Zafh3%2BY5CRAOO1jKMn7JZt9q1VZsE2QIDyv&X-Amz-Signature=23b7005097f7247f4f6bd1f1656ec7d764bde5848b61b84f914a1252eb179746&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QFHCYFQ%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK49PfTvfMl0r5b0oNvxIm3D6C4DkddPlvQBYN8bLShwIgE6kVFG9MTXsG2vaHM6MO%2F%2FH5BsXKQvXfFqWvuABjLtkq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDNw6oklPqqAWTXXN6yrcAxnjIono%2FDNOaArfPHKAEG4rQZoL5i9aLxwOAiWExOgv92sFgtOn%2FKm2njvSZSWaRJgQKU5sg%2BnOuf%2FF1fS3c2HPW%2BWIma95lecrhCFO7on3KZCDFtRfU7DjZpbJHI8woW9xfyX44dgYqUWXa5gTPh5%2FWZDHzeAO6We%2Fk%2BQBDHFP499QzWvBcmEsTt6pvuat2dlXQdcAlIvmeDPwCASMtGQYoo8IBHY5end9RtYxfgy7Q4YJ5GygucOdszr7L9%2FOR3yGxqiKLHOA3PxF072kjYSx%2BIAP9JeOesEEIs%2FLe4uKbXk6VqDUiMpgyJnz0O%2FCqgHGEuUrgLvi%2FwecIpPSe6Qj4EDH4JyU1W%2BiPXazIZzUSYXnGo2r%2BETRwci%2Bh21BcJpfF%2FON7AYdloPkDdsEAQBoCmOzbn9o6DwqQSwg8JB7RlBcUzJKj%2Bqx%2BUumnBJfop%2Fe%2BLDggITuOB5RJqgqTcBMLQdFgxIqhJokOYvSmqWe%2F4DSoumy4KanZNFg5o8ZZbjj0jdRyyBWSCDytfBcL8RYGNbwvWGflfStXG%2FDeOko8uAH0qOaIUYIsPUor8psRz%2Fp3fT5uAvfO2oA%2BPmYnJk4gqUVL4waiVXxlaNUnW3zsbiM6sPmlyZZcAPtMMjkir8GOqUBTMsrWOse459%2FWmdUunpQzrMmOQMIhdExPG44%2FggnwcGUFoDwxW6dIkOa0EtzcvrvDrJdBNeJJWIkNpesfrT4ncZrUEszNqw9x%2Fq1TZfUlv%2BdKkTn5AS8ToB5ODN8bbioDaiuP8%2BnEEBNKaowBxRNSM%2Fe5xLabWFjwbMCPVJaniN2Zrhe%2BEs5a4HN6Zafh3%2BY5CRAOO1jKMn7JZt9q1VZsE2QIDyv&X-Amz-Signature=84844122285627260ef9e702c19557f299230e6c57f01d8c73c78810ceaddecc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

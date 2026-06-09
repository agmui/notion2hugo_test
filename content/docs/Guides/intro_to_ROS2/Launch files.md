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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U27CEI7P%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5jYDWJ4mXRrCb8F8P6HkZk1sOIHcJODNSNgbPmUb1mAiB9Rs%2FSrjgLxnl72TvBsnvmHzgs7pxTyokEnDLsQvLmqCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM79tDpwRXDFujUZqYKtwDADDBzCrufDbGPDikG8JMKes5cUc0AkHYiYe4DFUKjlU6u4691D%2BGYzB2FD9EVJe2u24nZbBEKjeitK%2FgnnPajlg%2FL9SNHBGIDZVSzLWuFh6J5DkKnG1%2B3mhzwtzKzZbkhUnrBJHXoAKxccTQ8uwBgdlJCiwwcudpdo1QwaAvcQ7MePA6Q%2FL4RPcmQS6Kl1kfw0riLHvLHcvit8rrNt4vnnE50vo5r8Nx4ntZtpzpQ8EeTM6LoeMAYHM5MXtLPD4ne08GQIjdyZXS4GQ%2B4cEo318JH4lEsYbQQQBgS7vtxAkxe9dX1JENXdXDP2mUzeGmgLkQofD3yeQr8iuts5YIuKaShUo93LORHm6z3FzUXHCFwI5A3KEiSFxPzEe5LK0S01UFTpltYN%2FleaOc1NQ5Qa1mIlZ4oyAo%2BeJwjDrpBuprofRJKEUQXAZUZtrUjt44bHIiJPPv1R4g6h0tZG2k859UjUUeZQOifgAJTxtILgRqZk5cRhoxioZEzWh0T81YPo2dz%2Fp0xpZLVT%2FsbeGmXb0Yjvbed7wqQZ8qzpUEh5JG%2BrowTKmJ0fhO7aBUV4pfwQ%2FIzVisjEvDFO0ZgfbmaFldAiKZNa49Il6r6ehQ7Pv0A0w2OEuqpaObzrcwmIae0QY6pgFTYYyXCjn8CaeOiicoFg%2FYJSXno9UhqVjfj0ypEjOqm8ICNQc%2B8w%2FGQ5li2eTfa3r44TUmONVZrmvO0lM%2BsozFZ8gb3afprqQ2W5PFW0tMQANwwa3epwZ6Zkf3CrhiB9wfhcTRZBGvUqwjJ%2F0qHeIYmR0JiEbJIMZ8uAYrUx637RJyXKmYqMcP7y7RWzPXMdTk97QdKPvIKKbkW9FO41O44DQJRbeT&X-Amz-Signature=532557b584ddd7efc170d045727aa92d318ba34f1f72ae58d0fb3c765eef1120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U27CEI7P%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5jYDWJ4mXRrCb8F8P6HkZk1sOIHcJODNSNgbPmUb1mAiB9Rs%2FSrjgLxnl72TvBsnvmHzgs7pxTyokEnDLsQvLmqCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM79tDpwRXDFujUZqYKtwDADDBzCrufDbGPDikG8JMKes5cUc0AkHYiYe4DFUKjlU6u4691D%2BGYzB2FD9EVJe2u24nZbBEKjeitK%2FgnnPajlg%2FL9SNHBGIDZVSzLWuFh6J5DkKnG1%2B3mhzwtzKzZbkhUnrBJHXoAKxccTQ8uwBgdlJCiwwcudpdo1QwaAvcQ7MePA6Q%2FL4RPcmQS6Kl1kfw0riLHvLHcvit8rrNt4vnnE50vo5r8Nx4ntZtpzpQ8EeTM6LoeMAYHM5MXtLPD4ne08GQIjdyZXS4GQ%2B4cEo318JH4lEsYbQQQBgS7vtxAkxe9dX1JENXdXDP2mUzeGmgLkQofD3yeQr8iuts5YIuKaShUo93LORHm6z3FzUXHCFwI5A3KEiSFxPzEe5LK0S01UFTpltYN%2FleaOc1NQ5Qa1mIlZ4oyAo%2BeJwjDrpBuprofRJKEUQXAZUZtrUjt44bHIiJPPv1R4g6h0tZG2k859UjUUeZQOifgAJTxtILgRqZk5cRhoxioZEzWh0T81YPo2dz%2Fp0xpZLVT%2FsbeGmXb0Yjvbed7wqQZ8qzpUEh5JG%2BrowTKmJ0fhO7aBUV4pfwQ%2FIzVisjEvDFO0ZgfbmaFldAiKZNa49Il6r6ehQ7Pv0A0w2OEuqpaObzrcwmIae0QY6pgFTYYyXCjn8CaeOiicoFg%2FYJSXno9UhqVjfj0ypEjOqm8ICNQc%2B8w%2FGQ5li2eTfa3r44TUmONVZrmvO0lM%2BsozFZ8gb3afprqQ2W5PFW0tMQANwwa3epwZ6Zkf3CrhiB9wfhcTRZBGvUqwjJ%2F0qHeIYmR0JiEbJIMZ8uAYrUx637RJyXKmYqMcP7y7RWzPXMdTk97QdKPvIKKbkW9FO41O44DQJRbeT&X-Amz-Signature=c3c309d0d3366973fb2929b637e9632e688b14ddd73dfbbabf0b8c6e4969f83f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U27CEI7P%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5jYDWJ4mXRrCb8F8P6HkZk1sOIHcJODNSNgbPmUb1mAiB9Rs%2FSrjgLxnl72TvBsnvmHzgs7pxTyokEnDLsQvLmqCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM79tDpwRXDFujUZqYKtwDADDBzCrufDbGPDikG8JMKes5cUc0AkHYiYe4DFUKjlU6u4691D%2BGYzB2FD9EVJe2u24nZbBEKjeitK%2FgnnPajlg%2FL9SNHBGIDZVSzLWuFh6J5DkKnG1%2B3mhzwtzKzZbkhUnrBJHXoAKxccTQ8uwBgdlJCiwwcudpdo1QwaAvcQ7MePA6Q%2FL4RPcmQS6Kl1kfw0riLHvLHcvit8rrNt4vnnE50vo5r8Nx4ntZtpzpQ8EeTM6LoeMAYHM5MXtLPD4ne08GQIjdyZXS4GQ%2B4cEo318JH4lEsYbQQQBgS7vtxAkxe9dX1JENXdXDP2mUzeGmgLkQofD3yeQr8iuts5YIuKaShUo93LORHm6z3FzUXHCFwI5A3KEiSFxPzEe5LK0S01UFTpltYN%2FleaOc1NQ5Qa1mIlZ4oyAo%2BeJwjDrpBuprofRJKEUQXAZUZtrUjt44bHIiJPPv1R4g6h0tZG2k859UjUUeZQOifgAJTxtILgRqZk5cRhoxioZEzWh0T81YPo2dz%2Fp0xpZLVT%2FsbeGmXb0Yjvbed7wqQZ8qzpUEh5JG%2BrowTKmJ0fhO7aBUV4pfwQ%2FIzVisjEvDFO0ZgfbmaFldAiKZNa49Il6r6ehQ7Pv0A0w2OEuqpaObzrcwmIae0QY6pgFTYYyXCjn8CaeOiicoFg%2FYJSXno9UhqVjfj0ypEjOqm8ICNQc%2B8w%2FGQ5li2eTfa3r44TUmONVZrmvO0lM%2BsozFZ8gb3afprqQ2W5PFW0tMQANwwa3epwZ6Zkf3CrhiB9wfhcTRZBGvUqwjJ%2F0qHeIYmR0JiEbJIMZ8uAYrUx637RJyXKmYqMcP7y7RWzPXMdTk97QdKPvIKKbkW9FO41O44DQJRbeT&X-Amz-Signature=d9dccbd907ac9eea0ef98c7fb28247a1c9b04c705e60efd44f8c29966b853a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

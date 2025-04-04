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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEGLAMH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR3S3FJ77MHTG9KMbrc%2BIcSdGkAyrm7cf1zEi9EbXUiAiBk0QF%2F8njd4RpXEhCqEJM7dPhn8PPgIeoGsNxaFHnopir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BbkORMfhPBJbkiWVKtwDprq0RBZxjwduJC0aDfoTomZlSKqOv0L5tJouI7WlfiRlYhkMF1Di9xRMvRBs%2F26fuY7Q1necQZ9HXQN2HZvHTcHOU8amEqVGjbD9BxxywqH5hx0OCY1OwVfadpjXVo0XnK4USv9ckQclKUy4k3Sg0qe2rVHqA%2BqW2XTRWsIuoafh0fH785WXgyAZjpq%2Br1qeJVoIsqvwzwqxCsvvkdcU3zgALhW4QrCCe6QjSgSMZiv%2BgPc2Gg4ogJadprGWzvXGI0F6yyM4IHIjhlKAwycraY9gDr28NWplB1GIisN1imSAEwQrYOx%2BR3BXCi6%2F6e5FCEZFeC1ND3YpSdyqwOiwTchVNDNQrJc4%2F%2BsxlBESRsAIDXBiVMlcGkM01fqkjFvFemafWe14Zylm5W%2BcgJkb%2B10lNe0G27gQyBQMpx05MIOUdjAH2CYGLLCJ4XeLYyKERSmwOjHpGb6zPnHiqsELE5m22%2FN4kzHjTCs%2F2M%2FlsmQxo53Awl1ruZkj27HRXUhvZuSNqmUEcRHDadcjuyULCxnMDlMcu5cskyz5YN4BPgUPCtTZTAttokrP66nhY7GFcYwxU%2FtQSFHujo6EhbM%2BusCAMbEmCV96yePkg60bYzM2waOPC7J4yXMZ3XgwwrzBvwY6pgFXe%2BAunQWiYUJCwYpv6HbfLdkIu4fAJuQVDgX8FhOIwq7qDho2ZW2q3zJG12k1f2DoUViGs%2BInhFqZ9Pn%2Bg%2FjtmmS%2B7X8P%2BVp8TNj%2B5qvhdvZrl6RzbtVw9AIaO3P9q3%2BDDfyiKcTJeiD5a%2Fy9WLlNKbDxJQ5hM4TD46K2pNn7ZcD0C0EWYmEZJJaTy9ic4oBafsEuwObXgqISCdXB7Ajt3H4uGfhc&X-Amz-Signature=0d6cb622ac637c714c5580c92be82af4ee84859674edcb33fa1b2c2cefd22bc0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEGLAMH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR3S3FJ77MHTG9KMbrc%2BIcSdGkAyrm7cf1zEi9EbXUiAiBk0QF%2F8njd4RpXEhCqEJM7dPhn8PPgIeoGsNxaFHnopir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BbkORMfhPBJbkiWVKtwDprq0RBZxjwduJC0aDfoTomZlSKqOv0L5tJouI7WlfiRlYhkMF1Di9xRMvRBs%2F26fuY7Q1necQZ9HXQN2HZvHTcHOU8amEqVGjbD9BxxywqH5hx0OCY1OwVfadpjXVo0XnK4USv9ckQclKUy4k3Sg0qe2rVHqA%2BqW2XTRWsIuoafh0fH785WXgyAZjpq%2Br1qeJVoIsqvwzwqxCsvvkdcU3zgALhW4QrCCe6QjSgSMZiv%2BgPc2Gg4ogJadprGWzvXGI0F6yyM4IHIjhlKAwycraY9gDr28NWplB1GIisN1imSAEwQrYOx%2BR3BXCi6%2F6e5FCEZFeC1ND3YpSdyqwOiwTchVNDNQrJc4%2F%2BsxlBESRsAIDXBiVMlcGkM01fqkjFvFemafWe14Zylm5W%2BcgJkb%2B10lNe0G27gQyBQMpx05MIOUdjAH2CYGLLCJ4XeLYyKERSmwOjHpGb6zPnHiqsELE5m22%2FN4kzHjTCs%2F2M%2FlsmQxo53Awl1ruZkj27HRXUhvZuSNqmUEcRHDadcjuyULCxnMDlMcu5cskyz5YN4BPgUPCtTZTAttokrP66nhY7GFcYwxU%2FtQSFHujo6EhbM%2BusCAMbEmCV96yePkg60bYzM2waOPC7J4yXMZ3XgwwrzBvwY6pgFXe%2BAunQWiYUJCwYpv6HbfLdkIu4fAJuQVDgX8FhOIwq7qDho2ZW2q3zJG12k1f2DoUViGs%2BInhFqZ9Pn%2Bg%2FjtmmS%2B7X8P%2BVp8TNj%2B5qvhdvZrl6RzbtVw9AIaO3P9q3%2BDDfyiKcTJeiD5a%2Fy9WLlNKbDxJQ5hM4TD46K2pNn7ZcD0C0EWYmEZJJaTy9ic4oBafsEuwObXgqISCdXB7Ajt3H4uGfhc&X-Amz-Signature=21ce339ec89c1a0200cc2d88fdc368c842628a1c78b8924b94c84a7b86fcfe7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROEGLAMH%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR3S3FJ77MHTG9KMbrc%2BIcSdGkAyrm7cf1zEi9EbXUiAiBk0QF%2F8njd4RpXEhCqEJM7dPhn8PPgIeoGsNxaFHnopir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BbkORMfhPBJbkiWVKtwDprq0RBZxjwduJC0aDfoTomZlSKqOv0L5tJouI7WlfiRlYhkMF1Di9xRMvRBs%2F26fuY7Q1necQZ9HXQN2HZvHTcHOU8amEqVGjbD9BxxywqH5hx0OCY1OwVfadpjXVo0XnK4USv9ckQclKUy4k3Sg0qe2rVHqA%2BqW2XTRWsIuoafh0fH785WXgyAZjpq%2Br1qeJVoIsqvwzwqxCsvvkdcU3zgALhW4QrCCe6QjSgSMZiv%2BgPc2Gg4ogJadprGWzvXGI0F6yyM4IHIjhlKAwycraY9gDr28NWplB1GIisN1imSAEwQrYOx%2BR3BXCi6%2F6e5FCEZFeC1ND3YpSdyqwOiwTchVNDNQrJc4%2F%2BsxlBESRsAIDXBiVMlcGkM01fqkjFvFemafWe14Zylm5W%2BcgJkb%2B10lNe0G27gQyBQMpx05MIOUdjAH2CYGLLCJ4XeLYyKERSmwOjHpGb6zPnHiqsELE5m22%2FN4kzHjTCs%2F2M%2FlsmQxo53Awl1ruZkj27HRXUhvZuSNqmUEcRHDadcjuyULCxnMDlMcu5cskyz5YN4BPgUPCtTZTAttokrP66nhY7GFcYwxU%2FtQSFHujo6EhbM%2BusCAMbEmCV96yePkg60bYzM2waOPC7J4yXMZ3XgwwrzBvwY6pgFXe%2BAunQWiYUJCwYpv6HbfLdkIu4fAJuQVDgX8FhOIwq7qDho2ZW2q3zJG12k1f2DoUViGs%2BInhFqZ9Pn%2Bg%2FjtmmS%2B7X8P%2BVp8TNj%2B5qvhdvZrl6RzbtVw9AIaO3P9q3%2BDDfyiKcTJeiD5a%2Fy9WLlNKbDxJQ5hM4TD46K2pNn7ZcD0C0EWYmEZJJaTy9ic4oBafsEuwObXgqISCdXB7Ajt3H4uGfhc&X-Amz-Signature=3c00efc2da2b5f6da6100fb774390553214e72085c90016b18faf053d80f25b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

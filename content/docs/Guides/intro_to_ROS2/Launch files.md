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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MDNSOWZ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCIEi%2Fb1TGsQ3hZXewyqXrWrYcMisN%2F%2B0eKhvd39E2eQIhAIkGv9DGK9mbTwxf4fzpJpRT88X9qddSEm%2BgNvUO%2BqKcKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwss3nisFuzgrSYMpYq3AN27J0kd0Ls3KJZtlqsv5EfIfRNyMYwX%2F2HjK%2FxpILXkzHaRj3QSCiy4V65EEWeAd4%2B4jebb%2FOsSadftporQdOBwefUzvV6iarQDpkQ2%2BQPbA03MupXrUvsoTqCWhL3xrap7hmobFbqKFdjSY9xyONZLciuzxIcNWNO2oPjHj5V2AmSqbl6HFcXk8FseeCH%2BqmHbLK%2BYyHo%2BIOtz79Q%2F5FdBHucezIZIVR2dfnHZAQsrWE6DvZ5RTAsR2AX9y%2Bhn5%2BAsV4yG%2FAPLtpyB9t5W0rlRJqAdXs6Q5pg%2Fhws0eTEhFXoufEwUwCKB7PprUclHGogqK0XqhxtFlO8SF7VCtTYcQnMr%2FBPzwJb1OE2qIN2cqGzaNOddQZugZp68%2Ff6kXXh5QQzG8%2Fd8ud8JJSXaS2txQCvQD1m0rcIO5EmLcnVOUf8JOLTLNgJYnT0W3mCgu4zadRYxnxdfzsBlEP1PpA%2BVB0mQbHcCtXriuZSUF3kWbYhe4bufB6XfH1Kk1ATUm%2BVZWh70Lw0bRRcfmJOK0qv0ikwvY8zGNBGia7lHvIYmzjnNwZHxCWj1Gkzg1p2Vtn%2F2fvVXv7A9c%2FctsvIPgGe7HniUSujLTlJ4UmxuqLXEyfCKaTen7A9GfFAHTDUr9jCBjqkAUDCPkx5gLIUVdATbSKY4fT7dRIi01iZiM%2FZtbWd2wGtg4JDV1jbmw6UZiYGh2%2BP2b564N3fal8F%2B8q2LaXjfeppAozpFMU1Ahw3%2B0qr59xJBxAENAzGgd%2BRz6uk9XLhVvIJbmdS9jkGZn3Gyt3efCMQJ4fz9TpzIcbJdG8x2z0LdJG05gY0rsaGI%2FZQLb45NVTsDu139y0A%2Fa1ngl1%2B3ipjvE96&X-Amz-Signature=95fc61fd2f5ee1841ef5072a3db8e5399e4deb27a4189eb61405d93cd280fbb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MDNSOWZ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCIEi%2Fb1TGsQ3hZXewyqXrWrYcMisN%2F%2B0eKhvd39E2eQIhAIkGv9DGK9mbTwxf4fzpJpRT88X9qddSEm%2BgNvUO%2BqKcKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwss3nisFuzgrSYMpYq3AN27J0kd0Ls3KJZtlqsv5EfIfRNyMYwX%2F2HjK%2FxpILXkzHaRj3QSCiy4V65EEWeAd4%2B4jebb%2FOsSadftporQdOBwefUzvV6iarQDpkQ2%2BQPbA03MupXrUvsoTqCWhL3xrap7hmobFbqKFdjSY9xyONZLciuzxIcNWNO2oPjHj5V2AmSqbl6HFcXk8FseeCH%2BqmHbLK%2BYyHo%2BIOtz79Q%2F5FdBHucezIZIVR2dfnHZAQsrWE6DvZ5RTAsR2AX9y%2Bhn5%2BAsV4yG%2FAPLtpyB9t5W0rlRJqAdXs6Q5pg%2Fhws0eTEhFXoufEwUwCKB7PprUclHGogqK0XqhxtFlO8SF7VCtTYcQnMr%2FBPzwJb1OE2qIN2cqGzaNOddQZugZp68%2Ff6kXXh5QQzG8%2Fd8ud8JJSXaS2txQCvQD1m0rcIO5EmLcnVOUf8JOLTLNgJYnT0W3mCgu4zadRYxnxdfzsBlEP1PpA%2BVB0mQbHcCtXriuZSUF3kWbYhe4bufB6XfH1Kk1ATUm%2BVZWh70Lw0bRRcfmJOK0qv0ikwvY8zGNBGia7lHvIYmzjnNwZHxCWj1Gkzg1p2Vtn%2F2fvVXv7A9c%2FctsvIPgGe7HniUSujLTlJ4UmxuqLXEyfCKaTen7A9GfFAHTDUr9jCBjqkAUDCPkx5gLIUVdATbSKY4fT7dRIi01iZiM%2FZtbWd2wGtg4JDV1jbmw6UZiYGh2%2BP2b564N3fal8F%2B8q2LaXjfeppAozpFMU1Ahw3%2B0qr59xJBxAENAzGgd%2BRz6uk9XLhVvIJbmdS9jkGZn3Gyt3efCMQJ4fz9TpzIcbJdG8x2z0LdJG05gY0rsaGI%2FZQLb45NVTsDu139y0A%2Fa1ngl1%2B3ipjvE96&X-Amz-Signature=4d9f7a7454478b2d9a4ad1ae1cfa879b25105a1cfa3fcf3477dcfbdbdc83615c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MDNSOWZ%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCIEi%2Fb1TGsQ3hZXewyqXrWrYcMisN%2F%2B0eKhvd39E2eQIhAIkGv9DGK9mbTwxf4fzpJpRT88X9qddSEm%2BgNvUO%2BqKcKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwss3nisFuzgrSYMpYq3AN27J0kd0Ls3KJZtlqsv5EfIfRNyMYwX%2F2HjK%2FxpILXkzHaRj3QSCiy4V65EEWeAd4%2B4jebb%2FOsSadftporQdOBwefUzvV6iarQDpkQ2%2BQPbA03MupXrUvsoTqCWhL3xrap7hmobFbqKFdjSY9xyONZLciuzxIcNWNO2oPjHj5V2AmSqbl6HFcXk8FseeCH%2BqmHbLK%2BYyHo%2BIOtz79Q%2F5FdBHucezIZIVR2dfnHZAQsrWE6DvZ5RTAsR2AX9y%2Bhn5%2BAsV4yG%2FAPLtpyB9t5W0rlRJqAdXs6Q5pg%2Fhws0eTEhFXoufEwUwCKB7PprUclHGogqK0XqhxtFlO8SF7VCtTYcQnMr%2FBPzwJb1OE2qIN2cqGzaNOddQZugZp68%2Ff6kXXh5QQzG8%2Fd8ud8JJSXaS2txQCvQD1m0rcIO5EmLcnVOUf8JOLTLNgJYnT0W3mCgu4zadRYxnxdfzsBlEP1PpA%2BVB0mQbHcCtXriuZSUF3kWbYhe4bufB6XfH1Kk1ATUm%2BVZWh70Lw0bRRcfmJOK0qv0ikwvY8zGNBGia7lHvIYmzjnNwZHxCWj1Gkzg1p2Vtn%2F2fvVXv7A9c%2FctsvIPgGe7HniUSujLTlJ4UmxuqLXEyfCKaTen7A9GfFAHTDUr9jCBjqkAUDCPkx5gLIUVdATbSKY4fT7dRIi01iZiM%2FZtbWd2wGtg4JDV1jbmw6UZiYGh2%2BP2b564N3fal8F%2B8q2LaXjfeppAozpFMU1Ahw3%2B0qr59xJBxAENAzGgd%2BRz6uk9XLhVvIJbmdS9jkGZn3Gyt3efCMQJ4fz9TpzIcbJdG8x2z0LdJG05gY0rsaGI%2FZQLb45NVTsDu139y0A%2Fa1ngl1%2B3ipjvE96&X-Amz-Signature=ebb01aa72d7554a06a725e92924ffa3870dc76a35aae83ef659a1d41d390a593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

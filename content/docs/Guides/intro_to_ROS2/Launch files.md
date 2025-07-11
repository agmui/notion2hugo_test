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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574GIURR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHh3w5OhjVk7qfnqzLr%2BPTdW7glLIw6V8rnTWl8HuhFAiEAg7qxNbPAe2NsO650Oq6bzfNUFwFQJ6Vj1Kgp3aTxCncqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLy%2FA2ryCDJscoTCCrcA4S3zkOPIfM2%2FpADDtdOH9VVYNDVhyWZCbM9lmGZyHp2LWiL%2BUFk6Es9HR%2BUMlkSWAvHfZ2xaCOW3qjmBbREqEL%2BwMKFawfRW8ZC2g0bF5x%2BTcK3RkfWVatMPtFGy9gF9JHus2ZoIJ1Xp4QLSIVNhMQedtvSYNHgzIt3POWKxtH1naZNP8TihYWziuQJPzdzxBMT7RtcFJ9VlL96lAfD25%2Blh7ksrZOyWbVxFvGzv57bEPj4UG5%2Bp8cCipCdJurD9rQSm%2BjXRtzwoLY231lGqG5fxS%2B40wLBWxElMvys7sZSU8Zz%2FOXoSIP93sUC%2BbqUve6JZx5Nqq0hH2cBEn0rPIB9jY5eoZqJf08Hjj9qsqbJR0JTSlYvHpgmyQDUVVRPSWrfgLqvOOKzl%2F9UQyrkqgccWYRlBcezbryT0NgT9bUAHUiDUF8ied0FleLdQPD32KmWI6LLPswOjqi4VIGSQut1x7Jie4iRx8pOkecoHkyiNtaVUuYYdotJ5osHVv8ZnHVu4q3ZLHcomIrsqjxxG7BSv52TVW2mMNeCbsOV%2FmNUtKVwD7N0yCXdmZ5Rwj0GowD3Y%2F%2FY5pyXheblkUh5ccvEhppDLM%2BPuRRQB9CYBADxRWtntXn9IREYo%2BEgMKLTxMMGOqUBphmpcCuxaZhHbaDr%2BbIH8ilTNFqDSCy2IKxfNqAEzd8tRcQusT2AGeif3pkt0yQVwTSIU8%2Bq2jQa9aIKYD4DhNks49G7gEePmQJ5jDIyU6ajJl%2BIfK%2Bucw%2BIPRTVNEU6cjPSm%2B4ChoGOP%2BGwNIU3VYMixt4YO6dwYtWOVYax%2FQCddpk3B4aT3lLwtruC5AXeWxLOMY5atWLoFT%2BxbNmcZuM%2BMe%2Fi&X-Amz-Signature=ca3c00e5ca228c0830c87914cd17c84e2e036f7e111ae39e4ddc886c22a1871c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574GIURR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHh3w5OhjVk7qfnqzLr%2BPTdW7glLIw6V8rnTWl8HuhFAiEAg7qxNbPAe2NsO650Oq6bzfNUFwFQJ6Vj1Kgp3aTxCncqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLy%2FA2ryCDJscoTCCrcA4S3zkOPIfM2%2FpADDtdOH9VVYNDVhyWZCbM9lmGZyHp2LWiL%2BUFk6Es9HR%2BUMlkSWAvHfZ2xaCOW3qjmBbREqEL%2BwMKFawfRW8ZC2g0bF5x%2BTcK3RkfWVatMPtFGy9gF9JHus2ZoIJ1Xp4QLSIVNhMQedtvSYNHgzIt3POWKxtH1naZNP8TihYWziuQJPzdzxBMT7RtcFJ9VlL96lAfD25%2Blh7ksrZOyWbVxFvGzv57bEPj4UG5%2Bp8cCipCdJurD9rQSm%2BjXRtzwoLY231lGqG5fxS%2B40wLBWxElMvys7sZSU8Zz%2FOXoSIP93sUC%2BbqUve6JZx5Nqq0hH2cBEn0rPIB9jY5eoZqJf08Hjj9qsqbJR0JTSlYvHpgmyQDUVVRPSWrfgLqvOOKzl%2F9UQyrkqgccWYRlBcezbryT0NgT9bUAHUiDUF8ied0FleLdQPD32KmWI6LLPswOjqi4VIGSQut1x7Jie4iRx8pOkecoHkyiNtaVUuYYdotJ5osHVv8ZnHVu4q3ZLHcomIrsqjxxG7BSv52TVW2mMNeCbsOV%2FmNUtKVwD7N0yCXdmZ5Rwj0GowD3Y%2F%2FY5pyXheblkUh5ccvEhppDLM%2BPuRRQB9CYBADxRWtntXn9IREYo%2BEgMKLTxMMGOqUBphmpcCuxaZhHbaDr%2BbIH8ilTNFqDSCy2IKxfNqAEzd8tRcQusT2AGeif3pkt0yQVwTSIU8%2Bq2jQa9aIKYD4DhNks49G7gEePmQJ5jDIyU6ajJl%2BIfK%2Bucw%2BIPRTVNEU6cjPSm%2B4ChoGOP%2BGwNIU3VYMixt4YO6dwYtWOVYax%2FQCddpk3B4aT3lLwtruC5AXeWxLOMY5atWLoFT%2BxbNmcZuM%2BMe%2Fi&X-Amz-Signature=89d03e544b8f45bb19dd97030acd4814e2d097bc85c3677d6dbfde65bbf6d44c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574GIURR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T161104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHh3w5OhjVk7qfnqzLr%2BPTdW7glLIw6V8rnTWl8HuhFAiEAg7qxNbPAe2NsO650Oq6bzfNUFwFQJ6Vj1Kgp3aTxCncqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNLy%2FA2ryCDJscoTCCrcA4S3zkOPIfM2%2FpADDtdOH9VVYNDVhyWZCbM9lmGZyHp2LWiL%2BUFk6Es9HR%2BUMlkSWAvHfZ2xaCOW3qjmBbREqEL%2BwMKFawfRW8ZC2g0bF5x%2BTcK3RkfWVatMPtFGy9gF9JHus2ZoIJ1Xp4QLSIVNhMQedtvSYNHgzIt3POWKxtH1naZNP8TihYWziuQJPzdzxBMT7RtcFJ9VlL96lAfD25%2Blh7ksrZOyWbVxFvGzv57bEPj4UG5%2Bp8cCipCdJurD9rQSm%2BjXRtzwoLY231lGqG5fxS%2B40wLBWxElMvys7sZSU8Zz%2FOXoSIP93sUC%2BbqUve6JZx5Nqq0hH2cBEn0rPIB9jY5eoZqJf08Hjj9qsqbJR0JTSlYvHpgmyQDUVVRPSWrfgLqvOOKzl%2F9UQyrkqgccWYRlBcezbryT0NgT9bUAHUiDUF8ied0FleLdQPD32KmWI6LLPswOjqi4VIGSQut1x7Jie4iRx8pOkecoHkyiNtaVUuYYdotJ5osHVv8ZnHVu4q3ZLHcomIrsqjxxG7BSv52TVW2mMNeCbsOV%2FmNUtKVwD7N0yCXdmZ5Rwj0GowD3Y%2F%2FY5pyXheblkUh5ccvEhppDLM%2BPuRRQB9CYBADxRWtntXn9IREYo%2BEgMKLTxMMGOqUBphmpcCuxaZhHbaDr%2BbIH8ilTNFqDSCy2IKxfNqAEzd8tRcQusT2AGeif3pkt0yQVwTSIU8%2Bq2jQa9aIKYD4DhNks49G7gEePmQJ5jDIyU6ajJl%2BIfK%2Bucw%2BIPRTVNEU6cjPSm%2B4ChoGOP%2BGwNIU3VYMixt4YO6dwYtWOVYax%2FQCddpk3B4aT3lLwtruC5AXeWxLOMY5atWLoFT%2BxbNmcZuM%2BMe%2Fi&X-Amz-Signature=74c68a2ffe8f839b9740c08f468d2e6e0d2691742663dd2880a3545db9eb42da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

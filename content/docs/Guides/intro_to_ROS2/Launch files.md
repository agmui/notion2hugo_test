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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MRFXWRT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxpMuSNETHm6%2BjVhtyg6gD4cCL%2FUrOP4nFVoxiBjlPbgIgL2Cq4ZW1uQmZN3CR%2FnG0kU6Z4S0HqbQt1U8oLOXTxl0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcSMdZLCexRaEY%2F5ircA0GGxIjoHV7Vsp59aX3izAH431aJ5TVOc32C%2BA3WCIuhXcuE3UGKdB4WVZdXKiYHFy2D6A4gUeDCAzI1wI61xEG30UZWexYahRjdNxpk62SizBfRIH9wBrwW3qYi2VNOuORWrNk%2F%2B7pMEB3B8NbpMj8O84ZiKIVgwUZLS1OLtU0nUSbmRB4PZoyrde4JOkYdDhkqHflDpGlQjnvZV2HNwqjr2D7a%2FlPl1U7HVn6bSiEslkN021GQn%2FBC3H3PC9pHxm9WNrWNhmj3roz9YCKPp9vkOq3olLF0n8P4Dj%2BV6sclT7m2d5lkRQq4Led4JE4zga%2BALn6iIAUrV0f6S%2F5MsFTSlSR7N7F0PIwYxyRk2NVr3f5fO5%2BS21DWTIkf1KBNhSaBlDsJ9eZWr7frla%2B7L%2BA1W84D0Y0iQprczlonKsaI%2BpHUev2jAg2mJ08h3PyehMO6cs3Fk0sV5HhQtt5E1tyo5kyXM3ORLpOO4N2bc9g3CZEAY37TgkEavEpmIQWVCBjgd40z3aH8ci3iRsNz878ZmtVC6naqZljUBzvJz6JQAqtdbXAHXZdSQ86I39L6akj%2BspI7IjCzlDVjrbr7wmMh8zxM%2Bq1uHDrOLif%2FNvCrPeGKFbF86OMHFUp9MIGXub8GOqUB0j9AGQYaqi1Y8XK8Mm%2Fo4zG6xc9q3bz%2FNCBPasSMVRu4OexjrfFYOnoFp9OzrVxQRlGMIVXE3eKNsZ076xCb5f6R%2F%2B8r%2FjlmXB1YIFyrRJOSR2NhaGxTYh7aUBMWRfI47UUN%2FKwCmrfFzMtSHzMW6As0qzJY1ZXZDYeXhqr6iitHprdUKHSYOL2JqSoK2cWQz8Hv7rCXC17PGjBgAlYRLlhaQSOG&X-Amz-Signature=d1c5f94ea79adc11e214db69304c78adf7dcf2729011e2b836c82c11bf2983df&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MRFXWRT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxpMuSNETHm6%2BjVhtyg6gD4cCL%2FUrOP4nFVoxiBjlPbgIgL2Cq4ZW1uQmZN3CR%2FnG0kU6Z4S0HqbQt1U8oLOXTxl0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcSMdZLCexRaEY%2F5ircA0GGxIjoHV7Vsp59aX3izAH431aJ5TVOc32C%2BA3WCIuhXcuE3UGKdB4WVZdXKiYHFy2D6A4gUeDCAzI1wI61xEG30UZWexYahRjdNxpk62SizBfRIH9wBrwW3qYi2VNOuORWrNk%2F%2B7pMEB3B8NbpMj8O84ZiKIVgwUZLS1OLtU0nUSbmRB4PZoyrde4JOkYdDhkqHflDpGlQjnvZV2HNwqjr2D7a%2FlPl1U7HVn6bSiEslkN021GQn%2FBC3H3PC9pHxm9WNrWNhmj3roz9YCKPp9vkOq3olLF0n8P4Dj%2BV6sclT7m2d5lkRQq4Led4JE4zga%2BALn6iIAUrV0f6S%2F5MsFTSlSR7N7F0PIwYxyRk2NVr3f5fO5%2BS21DWTIkf1KBNhSaBlDsJ9eZWr7frla%2B7L%2BA1W84D0Y0iQprczlonKsaI%2BpHUev2jAg2mJ08h3PyehMO6cs3Fk0sV5HhQtt5E1tyo5kyXM3ORLpOO4N2bc9g3CZEAY37TgkEavEpmIQWVCBjgd40z3aH8ci3iRsNz878ZmtVC6naqZljUBzvJz6JQAqtdbXAHXZdSQ86I39L6akj%2BspI7IjCzlDVjrbr7wmMh8zxM%2Bq1uHDrOLif%2FNvCrPeGKFbF86OMHFUp9MIGXub8GOqUB0j9AGQYaqi1Y8XK8Mm%2Fo4zG6xc9q3bz%2FNCBPasSMVRu4OexjrfFYOnoFp9OzrVxQRlGMIVXE3eKNsZ076xCb5f6R%2F%2B8r%2FjlmXB1YIFyrRJOSR2NhaGxTYh7aUBMWRfI47UUN%2FKwCmrfFzMtSHzMW6As0qzJY1ZXZDYeXhqr6iitHprdUKHSYOL2JqSoK2cWQz8Hv7rCXC17PGjBgAlYRLlhaQSOG&X-Amz-Signature=c2f601b3bc7093dd2dc31910bbe0fd5699a8d9fe2e2d3822f16bbffa7453f151&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MRFXWRT%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T090917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxpMuSNETHm6%2BjVhtyg6gD4cCL%2FUrOP4nFVoxiBjlPbgIgL2Cq4ZW1uQmZN3CR%2FnG0kU6Z4S0HqbQt1U8oLOXTxl0qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOcSMdZLCexRaEY%2F5ircA0GGxIjoHV7Vsp59aX3izAH431aJ5TVOc32C%2BA3WCIuhXcuE3UGKdB4WVZdXKiYHFy2D6A4gUeDCAzI1wI61xEG30UZWexYahRjdNxpk62SizBfRIH9wBrwW3qYi2VNOuORWrNk%2F%2B7pMEB3B8NbpMj8O84ZiKIVgwUZLS1OLtU0nUSbmRB4PZoyrde4JOkYdDhkqHflDpGlQjnvZV2HNwqjr2D7a%2FlPl1U7HVn6bSiEslkN021GQn%2FBC3H3PC9pHxm9WNrWNhmj3roz9YCKPp9vkOq3olLF0n8P4Dj%2BV6sclT7m2d5lkRQq4Led4JE4zga%2BALn6iIAUrV0f6S%2F5MsFTSlSR7N7F0PIwYxyRk2NVr3f5fO5%2BS21DWTIkf1KBNhSaBlDsJ9eZWr7frla%2B7L%2BA1W84D0Y0iQprczlonKsaI%2BpHUev2jAg2mJ08h3PyehMO6cs3Fk0sV5HhQtt5E1tyo5kyXM3ORLpOO4N2bc9g3CZEAY37TgkEavEpmIQWVCBjgd40z3aH8ci3iRsNz878ZmtVC6naqZljUBzvJz6JQAqtdbXAHXZdSQ86I39L6akj%2BspI7IjCzlDVjrbr7wmMh8zxM%2Bq1uHDrOLif%2FNvCrPeGKFbF86OMHFUp9MIGXub8GOqUB0j9AGQYaqi1Y8XK8Mm%2Fo4zG6xc9q3bz%2FNCBPasSMVRu4OexjrfFYOnoFp9OzrVxQRlGMIVXE3eKNsZ076xCb5f6R%2F%2B8r%2FjlmXB1YIFyrRJOSR2NhaGxTYh7aUBMWRfI47UUN%2FKwCmrfFzMtSHzMW6As0qzJY1ZXZDYeXhqr6iitHprdUKHSYOL2JqSoK2cWQz8Hv7rCXC17PGjBgAlYRLlhaQSOG&X-Amz-Signature=64f9e0db7af23539b1e693e69571570ec7511ebaa9379ed0f5a83d6b10d5d7b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

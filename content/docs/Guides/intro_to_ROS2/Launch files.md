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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6YAVJA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBB4nkXnjt0uURV8n80Seuc9KZoWbqmuAkn8zyJ90RyoAiEA3Up2w5MhqaT8rvX7aucoDG0oFSwvkkse8184R1hGWJQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLuiYoKwtExvga297yrcA%2B%2FLYm3l1AFRm%2BQmaHD1MU2CXhoHcPHrgqhWqM2flKmhiAc%2BTc2BzfM8%2FMeEOUmgH0opvntq8UdB2DQ4EIBTeDU41HOa3kk2YTvBbAFscp5ignsAX1clE3%2BYpVQiJMXS2eosST%2FgHTxSuYWfeIzFekfEX%2FnQ9VPNMLDBPMQoxgpQtsOTjZnFQHhMcQe52V3VmLASn5IYjDZjQWSE8QJTJrud5f7xrgC%2ByvnQBE%2FJP7618m1ZUw4HZFJ%2Bz%2FChvp1SOHmrh2c0jDOR%2Bh6krvyPVZ9NHV6ubeocCBgGWZGi4qwhj9aR%2Fwa4urEi7vwbsO1Rn8XCmAGP6luM%2F7fa0qz0W62Y8WFW8HXYirdN38Bx8FpINO1cfeIKh58b6R5zb87epn6nLfahuVvfJiLnONGEn4XGuV38tFh%2F95VByprkANZr5Ezw04tHzcJzuukZXsh4XEURxXdtPogX5%2F9ijdurtyYhj1Y1rYJIMCOWpuHfzAclfB1K1xkWAhDGgHXmcrgMdkwSp0CP6YOejLMmql399hChellNcxCM%2F4haKN5QbmXkLu1DKGICJmL8t%2FJfUAV%2B2rjt7dInXRZ7a4DnXk8i4SIl9yGxjLMzNl5pQR1G2Z3basBBx40ZiJFwVoCyMMTi48MGOqUBE93zVNEJf7SgwHGDzKvW9kVfExxxi7WQtm%2BV5E9Kv9lCg1m9rM0HXaVQFEaYmBuba5yblR22vEh9MydPeaJ6olK8oCDbN9JTMgPOnBkQboy81o5f1kbN6IBK6Asp7vWQ217%2F114lb4z0fJ%2FxV2gcPpM9d8WbM8pBdPRSH31YNFc%2FA7nc9Nfse%2F6vk%2B4znPCm7tDJwapZM1wwvn1fowNltUjnfDWr&X-Amz-Signature=3f4ec3906d16d68a9b46e7550e6944b4f143ef378464814c5c42b5ce206afc4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6YAVJA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBB4nkXnjt0uURV8n80Seuc9KZoWbqmuAkn8zyJ90RyoAiEA3Up2w5MhqaT8rvX7aucoDG0oFSwvkkse8184R1hGWJQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLuiYoKwtExvga297yrcA%2B%2FLYm3l1AFRm%2BQmaHD1MU2CXhoHcPHrgqhWqM2flKmhiAc%2BTc2BzfM8%2FMeEOUmgH0opvntq8UdB2DQ4EIBTeDU41HOa3kk2YTvBbAFscp5ignsAX1clE3%2BYpVQiJMXS2eosST%2FgHTxSuYWfeIzFekfEX%2FnQ9VPNMLDBPMQoxgpQtsOTjZnFQHhMcQe52V3VmLASn5IYjDZjQWSE8QJTJrud5f7xrgC%2ByvnQBE%2FJP7618m1ZUw4HZFJ%2Bz%2FChvp1SOHmrh2c0jDOR%2Bh6krvyPVZ9NHV6ubeocCBgGWZGi4qwhj9aR%2Fwa4urEi7vwbsO1Rn8XCmAGP6luM%2F7fa0qz0W62Y8WFW8HXYirdN38Bx8FpINO1cfeIKh58b6R5zb87epn6nLfahuVvfJiLnONGEn4XGuV38tFh%2F95VByprkANZr5Ezw04tHzcJzuukZXsh4XEURxXdtPogX5%2F9ijdurtyYhj1Y1rYJIMCOWpuHfzAclfB1K1xkWAhDGgHXmcrgMdkwSp0CP6YOejLMmql399hChellNcxCM%2F4haKN5QbmXkLu1DKGICJmL8t%2FJfUAV%2B2rjt7dInXRZ7a4DnXk8i4SIl9yGxjLMzNl5pQR1G2Z3basBBx40ZiJFwVoCyMMTi48MGOqUBE93zVNEJf7SgwHGDzKvW9kVfExxxi7WQtm%2BV5E9Kv9lCg1m9rM0HXaVQFEaYmBuba5yblR22vEh9MydPeaJ6olK8oCDbN9JTMgPOnBkQboy81o5f1kbN6IBK6Asp7vWQ217%2F114lb4z0fJ%2FxV2gcPpM9d8WbM8pBdPRSH31YNFc%2FA7nc9Nfse%2F6vk%2B4znPCm7tDJwapZM1wwvn1fowNltUjnfDWr&X-Amz-Signature=e8d00e997f95d09f22d63df5637f7ae1a78913721c972b4291cb708b5a2e86ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UA6YAVJA%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T132958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIBB4nkXnjt0uURV8n80Seuc9KZoWbqmuAkn8zyJ90RyoAiEA3Up2w5MhqaT8rvX7aucoDG0oFSwvkkse8184R1hGWJQq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLuiYoKwtExvga297yrcA%2B%2FLYm3l1AFRm%2BQmaHD1MU2CXhoHcPHrgqhWqM2flKmhiAc%2BTc2BzfM8%2FMeEOUmgH0opvntq8UdB2DQ4EIBTeDU41HOa3kk2YTvBbAFscp5ignsAX1clE3%2BYpVQiJMXS2eosST%2FgHTxSuYWfeIzFekfEX%2FnQ9VPNMLDBPMQoxgpQtsOTjZnFQHhMcQe52V3VmLASn5IYjDZjQWSE8QJTJrud5f7xrgC%2ByvnQBE%2FJP7618m1ZUw4HZFJ%2Bz%2FChvp1SOHmrh2c0jDOR%2Bh6krvyPVZ9NHV6ubeocCBgGWZGi4qwhj9aR%2Fwa4urEi7vwbsO1Rn8XCmAGP6luM%2F7fa0qz0W62Y8WFW8HXYirdN38Bx8FpINO1cfeIKh58b6R5zb87epn6nLfahuVvfJiLnONGEn4XGuV38tFh%2F95VByprkANZr5Ezw04tHzcJzuukZXsh4XEURxXdtPogX5%2F9ijdurtyYhj1Y1rYJIMCOWpuHfzAclfB1K1xkWAhDGgHXmcrgMdkwSp0CP6YOejLMmql399hChellNcxCM%2F4haKN5QbmXkLu1DKGICJmL8t%2FJfUAV%2B2rjt7dInXRZ7a4DnXk8i4SIl9yGxjLMzNl5pQR1G2Z3basBBx40ZiJFwVoCyMMTi48MGOqUBE93zVNEJf7SgwHGDzKvW9kVfExxxi7WQtm%2BV5E9Kv9lCg1m9rM0HXaVQFEaYmBuba5yblR22vEh9MydPeaJ6olK8oCDbN9JTMgPOnBkQboy81o5f1kbN6IBK6Asp7vWQ217%2F114lb4z0fJ%2FxV2gcPpM9d8WbM8pBdPRSH31YNFc%2FA7nc9Nfse%2F6vk%2B4znPCm7tDJwapZM1wwvn1fowNltUjnfDWr&X-Amz-Signature=3e1372099e954170a9b051a5b31406646a9e316d6a2f2e9083b9bcb1b72758c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

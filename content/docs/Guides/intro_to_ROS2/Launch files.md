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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOHPUQF%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq4rXIlZvjRuj7EVP7dTAcP8F3sKVdZgo9fRzvP5rQCAiEAhybqqeFGUPDCZ0BXfVHj%2B1pYpUoZ5zev1%2FavCsNyAEwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCemIqF8lGqvmcVTOyrcA7t3aUbit%2FkYi9EUm4BocHb7GNG4EmoOQIA5kXM%2B57K%2Fg73MfXvxoLK224gUzxsBa0xdIRrdxcjjMfA7DhvGkF%2F9kWc8i0jrsou2JLy5xPIvI6t5xhg0QPpoXEFTSNOvqtajhUnwakmqTJ9e2hBLhg1W2g9N%2B8ClncMtQPKMl1GoPx3Tughd6td0vkHdcdrkHfO1O5ba2kHgQupEZ4Z%2FiXkS5tku0Pzvmm3wgeEkSS8uL49wLAbkNqHy%2BoWOGbuOrEDV%2FYSpq6D6dczs9mq2BwrSdr5keJLf3D0Y6GiqCmGnkuV7UcwXwFEjVuKOK2f4TCdZkECLCZYkdGhe%2Fp2VrVLv2M9xMVhdw7KRksATlqE0fKuMc10VEoQ5%2FF5R%2BcjR1ZvVXIFGoIi5fxrPDtWhDr4Bxz41567c%2F6H59lyy1S4UjtE5RjgCZ2b8cE0uiqT9jn2Hj6RhqXDQO%2BkGgn97ayTn960cFYWNmWVKtrk0vEwADTdgGakbI7%2F%2Fb08FHdaQER8C0%2BE57kNR9RVl7MycyDCF8%2BWO71pw041LEz0VhKjiCatNFZ5GUxkgkZ%2BBiVRBlbPQnZysBeCtl6ZOVVhOHBN%2F9dO9fLZKRxfTWbNnQ9Yc8VG1wwh4xTUvBLg6MIuyzdEGOqUBAlMWYniP15hpDGSO1L8HmEK0o6XjDRCTt2NGzn4Y0sQZHI3nkADK4VhDa%2FPbxfeUrraLtYPu6tRcOF0dtt%2FTcJY58UiVxdhTI1o7K1x3UVXTeL%2B7fHM2lFCBEUjKyEZz%2B%2Butu4nohCaZeYm0C7wabbDvkwIG3lTehdpn%2FZrDnVSyO8cWT1zgxR56s9ipcnvdBkzF4TWu59MpClqpRaVzVZmd6zhP&X-Amz-Signature=d343b65e6582aed2601a5ab63fd9df3ca582754b51744df0927706258d84703b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOHPUQF%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq4rXIlZvjRuj7EVP7dTAcP8F3sKVdZgo9fRzvP5rQCAiEAhybqqeFGUPDCZ0BXfVHj%2B1pYpUoZ5zev1%2FavCsNyAEwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCemIqF8lGqvmcVTOyrcA7t3aUbit%2FkYi9EUm4BocHb7GNG4EmoOQIA5kXM%2B57K%2Fg73MfXvxoLK224gUzxsBa0xdIRrdxcjjMfA7DhvGkF%2F9kWc8i0jrsou2JLy5xPIvI6t5xhg0QPpoXEFTSNOvqtajhUnwakmqTJ9e2hBLhg1W2g9N%2B8ClncMtQPKMl1GoPx3Tughd6td0vkHdcdrkHfO1O5ba2kHgQupEZ4Z%2FiXkS5tku0Pzvmm3wgeEkSS8uL49wLAbkNqHy%2BoWOGbuOrEDV%2FYSpq6D6dczs9mq2BwrSdr5keJLf3D0Y6GiqCmGnkuV7UcwXwFEjVuKOK2f4TCdZkECLCZYkdGhe%2Fp2VrVLv2M9xMVhdw7KRksATlqE0fKuMc10VEoQ5%2FF5R%2BcjR1ZvVXIFGoIi5fxrPDtWhDr4Bxz41567c%2F6H59lyy1S4UjtE5RjgCZ2b8cE0uiqT9jn2Hj6RhqXDQO%2BkGgn97ayTn960cFYWNmWVKtrk0vEwADTdgGakbI7%2F%2Fb08FHdaQER8C0%2BE57kNR9RVl7MycyDCF8%2BWO71pw041LEz0VhKjiCatNFZ5GUxkgkZ%2BBiVRBlbPQnZysBeCtl6ZOVVhOHBN%2F9dO9fLZKRxfTWbNnQ9Yc8VG1wwh4xTUvBLg6MIuyzdEGOqUBAlMWYniP15hpDGSO1L8HmEK0o6XjDRCTt2NGzn4Y0sQZHI3nkADK4VhDa%2FPbxfeUrraLtYPu6tRcOF0dtt%2FTcJY58UiVxdhTI1o7K1x3UVXTeL%2B7fHM2lFCBEUjKyEZz%2B%2Butu4nohCaZeYm0C7wabbDvkwIG3lTehdpn%2FZrDnVSyO8cWT1zgxR56s9ipcnvdBkzF4TWu59MpClqpRaVzVZmd6zhP&X-Amz-Signature=6452dfa1a3d7f4b06742b4d1e9645930f48ad365f3259b99d40b5477af410b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOHPUQF%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq4rXIlZvjRuj7EVP7dTAcP8F3sKVdZgo9fRzvP5rQCAiEAhybqqeFGUPDCZ0BXfVHj%2B1pYpUoZ5zev1%2FavCsNyAEwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCemIqF8lGqvmcVTOyrcA7t3aUbit%2FkYi9EUm4BocHb7GNG4EmoOQIA5kXM%2B57K%2Fg73MfXvxoLK224gUzxsBa0xdIRrdxcjjMfA7DhvGkF%2F9kWc8i0jrsou2JLy5xPIvI6t5xhg0QPpoXEFTSNOvqtajhUnwakmqTJ9e2hBLhg1W2g9N%2B8ClncMtQPKMl1GoPx3Tughd6td0vkHdcdrkHfO1O5ba2kHgQupEZ4Z%2FiXkS5tku0Pzvmm3wgeEkSS8uL49wLAbkNqHy%2BoWOGbuOrEDV%2FYSpq6D6dczs9mq2BwrSdr5keJLf3D0Y6GiqCmGnkuV7UcwXwFEjVuKOK2f4TCdZkECLCZYkdGhe%2Fp2VrVLv2M9xMVhdw7KRksATlqE0fKuMc10VEoQ5%2FF5R%2BcjR1ZvVXIFGoIi5fxrPDtWhDr4Bxz41567c%2F6H59lyy1S4UjtE5RjgCZ2b8cE0uiqT9jn2Hj6RhqXDQO%2BkGgn97ayTn960cFYWNmWVKtrk0vEwADTdgGakbI7%2F%2Fb08FHdaQER8C0%2BE57kNR9RVl7MycyDCF8%2BWO71pw041LEz0VhKjiCatNFZ5GUxkgkZ%2BBiVRBlbPQnZysBeCtl6ZOVVhOHBN%2F9dO9fLZKRxfTWbNnQ9Yc8VG1wwh4xTUvBLg6MIuyzdEGOqUBAlMWYniP15hpDGSO1L8HmEK0o6XjDRCTt2NGzn4Y0sQZHI3nkADK4VhDa%2FPbxfeUrraLtYPu6tRcOF0dtt%2FTcJY58UiVxdhTI1o7K1x3UVXTeL%2B7fHM2lFCBEUjKyEZz%2B%2Butu4nohCaZeYm0C7wabbDvkwIG3lTehdpn%2FZrDnVSyO8cWT1zgxR56s9ipcnvdBkzF4TWu59MpClqpRaVzVZmd6zhP&X-Amz-Signature=3a268964c02b96667975c36796dd676659ccf58d5155720bf4bada6de74ee3d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

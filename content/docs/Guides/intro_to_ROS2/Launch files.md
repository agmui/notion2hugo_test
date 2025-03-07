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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AUZKB4%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZdIt9vG%2BKNIcUB%2Fk6%2FT0TOOsxdt1Ua9BhLogEGqfNZAiAUJ9c4jOa6xHc7GSKYAKGUCOySVZzfDo8mkn9rWALG1Sr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMoFBtiNGMNDOJX2g8KtwDCVjx5szS8xrvbkha0ZzgGDF6bsWkuP6NWv6IWtjx4E%2BBCI3siT6Qcd7RizJiidJkeL4d985MNL6%2BzdaWbiND5wej%2Bxdz8cRkWXMNGj9xXDA90rIU86x6uaxkh4cOkyYJharlZFPv8fKpf4lkpy7AntUGj2Z6BuxMniFLeyDPkuRk%2FTyY8r7SOhskz2YB07LYr43X%2FWFvdCJMHRJRAp%2FtM5wj3fUOBeJx3Qq94BmU9g7UV8xSrJ4EgvznIouxB%2FSHCYEh1yuHa1D7ihk20xOwH5FSdXUZSsw3adxX%2BVXstZjzk8%2FbA5oCQfpg5WTC3OqO1VaKY3o%2Bu4MQtrskz6XnUAgnGX8sDtjILS3%2B8qzI8fxzwUNRs4GgLAY%2BPcPqtOAzn77JNDmwLK3stiv5zZA4b%2FQ3A56xQVNiLf8Xf5NaV1NnM%2BbtZB8tuVenNGgUydXDJTaaDBXjz7NCew393ehfrk5T2j6LURH3qZrazZyglyihVnu4fkQiSM8cDjAVhfUoNfQrpgqMxxdIeXmwhKJ90ujC9MTyx08bVJdXUM%2BmIBPQqY7w4B%2B4sLQXAM5l5M52QUOZ9b3AJsoK3Xr9imlBS44zfnGEYKGLL%2B%2FGLUFQgJ58I6uzoF7AiyXmhhww9cmovgY6pgGAZbPHW2W2AGrt1biY355187jVca5hsPdOS5LNtTHvYU4gnoHWAVnfbyRgfdx4G6t43kHazAM2AvRU4410IRCrFZKJ93CZdr8jaH4ji22EQYTLC8B5WTQjUFj88lEpRwfJbf896YtmPTQB5KcqXlkXV2eJmw6tjBl5DHaoL0qrzdb%2FIyl3RWN3JWRSmNKreIeTWYJLK%2BK6CRQWy7ZV7gyrJH%2BbKB7C&X-Amz-Signature=8ee4a1853f347bcf5cf5e11649f9f7b84bf45dbe75de8b91f5ce38a7745c8fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AUZKB4%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZdIt9vG%2BKNIcUB%2Fk6%2FT0TOOsxdt1Ua9BhLogEGqfNZAiAUJ9c4jOa6xHc7GSKYAKGUCOySVZzfDo8mkn9rWALG1Sr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMoFBtiNGMNDOJX2g8KtwDCVjx5szS8xrvbkha0ZzgGDF6bsWkuP6NWv6IWtjx4E%2BBCI3siT6Qcd7RizJiidJkeL4d985MNL6%2BzdaWbiND5wej%2Bxdz8cRkWXMNGj9xXDA90rIU86x6uaxkh4cOkyYJharlZFPv8fKpf4lkpy7AntUGj2Z6BuxMniFLeyDPkuRk%2FTyY8r7SOhskz2YB07LYr43X%2FWFvdCJMHRJRAp%2FtM5wj3fUOBeJx3Qq94BmU9g7UV8xSrJ4EgvznIouxB%2FSHCYEh1yuHa1D7ihk20xOwH5FSdXUZSsw3adxX%2BVXstZjzk8%2FbA5oCQfpg5WTC3OqO1VaKY3o%2Bu4MQtrskz6XnUAgnGX8sDtjILS3%2B8qzI8fxzwUNRs4GgLAY%2BPcPqtOAzn77JNDmwLK3stiv5zZA4b%2FQ3A56xQVNiLf8Xf5NaV1NnM%2BbtZB8tuVenNGgUydXDJTaaDBXjz7NCew393ehfrk5T2j6LURH3qZrazZyglyihVnu4fkQiSM8cDjAVhfUoNfQrpgqMxxdIeXmwhKJ90ujC9MTyx08bVJdXUM%2BmIBPQqY7w4B%2B4sLQXAM5l5M52QUOZ9b3AJsoK3Xr9imlBS44zfnGEYKGLL%2B%2FGLUFQgJ58I6uzoF7AiyXmhhww9cmovgY6pgGAZbPHW2W2AGrt1biY355187jVca5hsPdOS5LNtTHvYU4gnoHWAVnfbyRgfdx4G6t43kHazAM2AvRU4410IRCrFZKJ93CZdr8jaH4ji22EQYTLC8B5WTQjUFj88lEpRwfJbf896YtmPTQB5KcqXlkXV2eJmw6tjBl5DHaoL0qrzdb%2FIyl3RWN3JWRSmNKreIeTWYJLK%2BK6CRQWy7ZV7gyrJH%2BbKB7C&X-Amz-Signature=6048b55265a3dc67f71b59cbef6d90688e3db19306dcf45cd3096bfb3372ca96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636AUZKB4%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICZdIt9vG%2BKNIcUB%2Fk6%2FT0TOOsxdt1Ua9BhLogEGqfNZAiAUJ9c4jOa6xHc7GSKYAKGUCOySVZzfDo8mkn9rWALG1Sr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMoFBtiNGMNDOJX2g8KtwDCVjx5szS8xrvbkha0ZzgGDF6bsWkuP6NWv6IWtjx4E%2BBCI3siT6Qcd7RizJiidJkeL4d985MNL6%2BzdaWbiND5wej%2Bxdz8cRkWXMNGj9xXDA90rIU86x6uaxkh4cOkyYJharlZFPv8fKpf4lkpy7AntUGj2Z6BuxMniFLeyDPkuRk%2FTyY8r7SOhskz2YB07LYr43X%2FWFvdCJMHRJRAp%2FtM5wj3fUOBeJx3Qq94BmU9g7UV8xSrJ4EgvznIouxB%2FSHCYEh1yuHa1D7ihk20xOwH5FSdXUZSsw3adxX%2BVXstZjzk8%2FbA5oCQfpg5WTC3OqO1VaKY3o%2Bu4MQtrskz6XnUAgnGX8sDtjILS3%2B8qzI8fxzwUNRs4GgLAY%2BPcPqtOAzn77JNDmwLK3stiv5zZA4b%2FQ3A56xQVNiLf8Xf5NaV1NnM%2BbtZB8tuVenNGgUydXDJTaaDBXjz7NCew393ehfrk5T2j6LURH3qZrazZyglyihVnu4fkQiSM8cDjAVhfUoNfQrpgqMxxdIeXmwhKJ90ujC9MTyx08bVJdXUM%2BmIBPQqY7w4B%2B4sLQXAM5l5M52QUOZ9b3AJsoK3Xr9imlBS44zfnGEYKGLL%2B%2FGLUFQgJ58I6uzoF7AiyXmhhww9cmovgY6pgGAZbPHW2W2AGrt1biY355187jVca5hsPdOS5LNtTHvYU4gnoHWAVnfbyRgfdx4G6t43kHazAM2AvRU4410IRCrFZKJ93CZdr8jaH4ji22EQYTLC8B5WTQjUFj88lEpRwfJbf896YtmPTQB5KcqXlkXV2eJmw6tjBl5DHaoL0qrzdb%2FIyl3RWN3JWRSmNKreIeTWYJLK%2BK6CRQWy7ZV7gyrJH%2BbKB7C&X-Amz-Signature=434b31e7d830095911b4618d30b94c183058257db161b78fb1edf7c21b134ef2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

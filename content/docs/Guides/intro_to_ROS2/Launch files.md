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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS5RSMPE%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpO77Na3y96zESIqQjWQVS2p%2FfBMz7LFFoH%2FTzL1GgvAiAYswvWwIwvHJGONxiIvShybDGqMVu%2BZZE8KIsxFjDNYyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4oTYSQfwOKQl70JTKtwDneIO9hOYBd79%2F2x6qeMgSWwehZ48aTdjUUm02zPkclfeIGdjSpW3HDPYfDCOvLTKSn%2Bc1%2BuVZf5Cmpol2xdmNUROaTXZ73FNBRSIoBhgyrs845MNB7EnOGsDPoiAO99bfNxzNgBH92%2FPuatYL4EqKOf32mLxo3%2FhqesKlWhsda6iDZ2NQEzzDnPms0fzEkjNNFygHyusNPaJrZeWc5InuR0KMIXZzLmQFHHekSIbbC4qFncl3uYMfBGXYKe6NtTU15Pdo84abl%2FNP5l80kvOr20%2Be3cGZlZpeIUusCC%2FNgrrSgtZbjDuZ93dQkll%2B6iPoWN6VJjPaezDtaN%2Bg%2BzkKkaOEo5ASeviAQvwV24ZmlndxHZt6P8DlF%2Fz2RvjFAEt5rJt8C4XdBWdLkGnazts2kivVU8VydNRSnTlloCWeIUb1Dwe6GWoC91EFKtKKAuee3PGqgqP1KvLLQaqedcUqOepbvOWkZBQU5Z%2FWhkwx%2FCq1NLXWFdTQ0HKsc%2BjEL6TL5qNVQCOfEvfGhmB0FGEJ8bnrVql4nNNCv2Qf8hWPzzUM67trtkONn4h3uBMsKFsrktla%2FJgAfeo%2BQmNjK7DtoBIzrJH80rkhvjKAN%2Fa9U6U1NnBX%2BSMxwcVhpEwz6XlzwY6pgEvreuU3hKHmd9MPY%2BEk4c%2FCCH72bAWQzh4FJ558Re8cWAFJmI8zqbiVbh5YADeAn%2BRhficxju4uljiP%2BiWyIzjFE69JID1ZtEZfKjr4CEXb8jskdo4PjtsPNXVm555YCivaOgH14TxSCGzWOP2DJ7OEZFl3i1oi8AZrO9cBbgOZmEPjYuNvdvGpodGHdbWF8V7A2NWabu7NReOg0uOCX4ABnpYYy1H&X-Amz-Signature=2466efd050e5d4c719849327bb0560c73f157a1e448b997484bb245c5984ff26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS5RSMPE%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpO77Na3y96zESIqQjWQVS2p%2FfBMz7LFFoH%2FTzL1GgvAiAYswvWwIwvHJGONxiIvShybDGqMVu%2BZZE8KIsxFjDNYyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4oTYSQfwOKQl70JTKtwDneIO9hOYBd79%2F2x6qeMgSWwehZ48aTdjUUm02zPkclfeIGdjSpW3HDPYfDCOvLTKSn%2Bc1%2BuVZf5Cmpol2xdmNUROaTXZ73FNBRSIoBhgyrs845MNB7EnOGsDPoiAO99bfNxzNgBH92%2FPuatYL4EqKOf32mLxo3%2FhqesKlWhsda6iDZ2NQEzzDnPms0fzEkjNNFygHyusNPaJrZeWc5InuR0KMIXZzLmQFHHekSIbbC4qFncl3uYMfBGXYKe6NtTU15Pdo84abl%2FNP5l80kvOr20%2Be3cGZlZpeIUusCC%2FNgrrSgtZbjDuZ93dQkll%2B6iPoWN6VJjPaezDtaN%2Bg%2BzkKkaOEo5ASeviAQvwV24ZmlndxHZt6P8DlF%2Fz2RvjFAEt5rJt8C4XdBWdLkGnazts2kivVU8VydNRSnTlloCWeIUb1Dwe6GWoC91EFKtKKAuee3PGqgqP1KvLLQaqedcUqOepbvOWkZBQU5Z%2FWhkwx%2FCq1NLXWFdTQ0HKsc%2BjEL6TL5qNVQCOfEvfGhmB0FGEJ8bnrVql4nNNCv2Qf8hWPzzUM67trtkONn4h3uBMsKFsrktla%2FJgAfeo%2BQmNjK7DtoBIzrJH80rkhvjKAN%2Fa9U6U1NnBX%2BSMxwcVhpEwz6XlzwY6pgEvreuU3hKHmd9MPY%2BEk4c%2FCCH72bAWQzh4FJ558Re8cWAFJmI8zqbiVbh5YADeAn%2BRhficxju4uljiP%2BiWyIzjFE69JID1ZtEZfKjr4CEXb8jskdo4PjtsPNXVm555YCivaOgH14TxSCGzWOP2DJ7OEZFl3i1oi8AZrO9cBbgOZmEPjYuNvdvGpodGHdbWF8V7A2NWabu7NReOg0uOCX4ABnpYYy1H&X-Amz-Signature=e33c69618eaa0bcc5020b2554900430c5629d7dbb568a5d8a24d57c1fd5589bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS5RSMPE%2F20260505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260505T024701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEpO77Na3y96zESIqQjWQVS2p%2FfBMz7LFFoH%2FTzL1GgvAiAYswvWwIwvHJGONxiIvShybDGqMVu%2BZZE8KIsxFjDNYyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM4oTYSQfwOKQl70JTKtwDneIO9hOYBd79%2F2x6qeMgSWwehZ48aTdjUUm02zPkclfeIGdjSpW3HDPYfDCOvLTKSn%2Bc1%2BuVZf5Cmpol2xdmNUROaTXZ73FNBRSIoBhgyrs845MNB7EnOGsDPoiAO99bfNxzNgBH92%2FPuatYL4EqKOf32mLxo3%2FhqesKlWhsda6iDZ2NQEzzDnPms0fzEkjNNFygHyusNPaJrZeWc5InuR0KMIXZzLmQFHHekSIbbC4qFncl3uYMfBGXYKe6NtTU15Pdo84abl%2FNP5l80kvOr20%2Be3cGZlZpeIUusCC%2FNgrrSgtZbjDuZ93dQkll%2B6iPoWN6VJjPaezDtaN%2Bg%2BzkKkaOEo5ASeviAQvwV24ZmlndxHZt6P8DlF%2Fz2RvjFAEt5rJt8C4XdBWdLkGnazts2kivVU8VydNRSnTlloCWeIUb1Dwe6GWoC91EFKtKKAuee3PGqgqP1KvLLQaqedcUqOepbvOWkZBQU5Z%2FWhkwx%2FCq1NLXWFdTQ0HKsc%2BjEL6TL5qNVQCOfEvfGhmB0FGEJ8bnrVql4nNNCv2Qf8hWPzzUM67trtkONn4h3uBMsKFsrktla%2FJgAfeo%2BQmNjK7DtoBIzrJH80rkhvjKAN%2Fa9U6U1NnBX%2BSMxwcVhpEwz6XlzwY6pgEvreuU3hKHmd9MPY%2BEk4c%2FCCH72bAWQzh4FJ558Re8cWAFJmI8zqbiVbh5YADeAn%2BRhficxju4uljiP%2BiWyIzjFE69JID1ZtEZfKjr4CEXb8jskdo4PjtsPNXVm555YCivaOgH14TxSCGzWOP2DJ7OEZFl3i1oi8AZrO9cBbgOZmEPjYuNvdvGpodGHdbWF8V7A2NWabu7NReOg0uOCX4ABnpYYy1H&X-Amz-Signature=a60f78197afb7ad2c3d33814ee4dd45699d3a3f58233cfaf97e211d1b48fec9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber

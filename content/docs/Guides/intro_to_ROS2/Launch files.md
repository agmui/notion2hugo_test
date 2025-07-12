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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AV6A5HK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHufCeZFFED4q9ZcBAWkVlf6EOFee8SAILhrbPWC%2FoYAiEAokuwpeShh056OjsAr%2BfjDvohbdoEgs%2FeYcS28e%2FfMwcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5HN%2BUAJPImnkumyircAzS%2FjKEgsx8ODx4KdHln1zwgl9yF2FWZaGvM1pUNJRU8%2F3RXC9HeVw2P%2FpFB1KBrRNQm%2Fbu5QANi26C2aEKuW0U8LsR%2Fttmd5wrXdbJSo%2F8Z0VxUXg86fEkxZotGujUO78JtjErmCazbIHJkthakB0v9ZCIEbIygfPSZkpfQG%2F67cbtx%2F%2BRe0%2FxJjz%2Fj7zT9uxt1gCsRypMqZ8VDSKM95jDcp%2Bcwjkt7ss2mlgpbRVXYT0pAHE2Oc%2Fjv3Z725QtxmqcB3Fk8A4Kdl8200P9t%2BLLudHInTZ0Df%2BZQ1WybDSpJPE%2F4QSx%2BGbj%2BF5Ieepe5hbNN0Ef3SsmMO%2Bua4a5Eu%2FCkeTTWaS%2BybhiBypgv0nGX1H26LsjWkQk5SNDfIJn%2Byo3IEFaAdotb%2BPOud4GKXxenoBlgxLufdKFd%2BhZA21ruGxoSfUxmXOtyN7n2qnf2bFttsyI9KAsL6e7dbOG3%2FnH9gKpOPRvFow05ADx1TrXk%2B9b3LzBy7q2RarL5Hkj%2BQWTQzc4Hv9m8yP16ObI9noES75nqvAYc1HcORLHvFl3YsIy%2BogvTVkFHnjz2hsvuVRME8hvEHU8QaAr3b03f8tmX%2F09j59FqyuSlOhfWu8G7jC3U1OQTUluLjG7KMJafysMGOqUBsVCFfRvZWGfU3RhE0T8yAyBunOjBRNKm8o2pJAAeaUgGfmXB6pJUs2wc%2Fqy6T8EYMB7gtfoyWjlUDRGtdJR6yhzOXetB6lpXLR%2B9Xaiq0yqigUHCxJZATEPOvySVhU1xaNTQGfbUhxuQVHmNSkZqkd8V5GurX2P8oawAMpNWfddkfCzR6SOYWkqpLLuARg2Mt6FQJw3hN6MnQJnpJbp7amcFO2X%2B&X-Amz-Signature=37051112aa479f159b5e49b03798e351a5d3d1be9b6ff48473bb420ce783ce39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AV6A5HK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHufCeZFFED4q9ZcBAWkVlf6EOFee8SAILhrbPWC%2FoYAiEAokuwpeShh056OjsAr%2BfjDvohbdoEgs%2FeYcS28e%2FfMwcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5HN%2BUAJPImnkumyircAzS%2FjKEgsx8ODx4KdHln1zwgl9yF2FWZaGvM1pUNJRU8%2F3RXC9HeVw2P%2FpFB1KBrRNQm%2Fbu5QANi26C2aEKuW0U8LsR%2Fttmd5wrXdbJSo%2F8Z0VxUXg86fEkxZotGujUO78JtjErmCazbIHJkthakB0v9ZCIEbIygfPSZkpfQG%2F67cbtx%2F%2BRe0%2FxJjz%2Fj7zT9uxt1gCsRypMqZ8VDSKM95jDcp%2Bcwjkt7ss2mlgpbRVXYT0pAHE2Oc%2Fjv3Z725QtxmqcB3Fk8A4Kdl8200P9t%2BLLudHInTZ0Df%2BZQ1WybDSpJPE%2F4QSx%2BGbj%2BF5Ieepe5hbNN0Ef3SsmMO%2Bua4a5Eu%2FCkeTTWaS%2BybhiBypgv0nGX1H26LsjWkQk5SNDfIJn%2Byo3IEFaAdotb%2BPOud4GKXxenoBlgxLufdKFd%2BhZA21ruGxoSfUxmXOtyN7n2qnf2bFttsyI9KAsL6e7dbOG3%2FnH9gKpOPRvFow05ADx1TrXk%2B9b3LzBy7q2RarL5Hkj%2BQWTQzc4Hv9m8yP16ObI9noES75nqvAYc1HcORLHvFl3YsIy%2BogvTVkFHnjz2hsvuVRME8hvEHU8QaAr3b03f8tmX%2F09j59FqyuSlOhfWu8G7jC3U1OQTUluLjG7KMJafysMGOqUBsVCFfRvZWGfU3RhE0T8yAyBunOjBRNKm8o2pJAAeaUgGfmXB6pJUs2wc%2Fqy6T8EYMB7gtfoyWjlUDRGtdJR6yhzOXetB6lpXLR%2B9Xaiq0yqigUHCxJZATEPOvySVhU1xaNTQGfbUhxuQVHmNSkZqkd8V5GurX2P8oawAMpNWfddkfCzR6SOYWkqpLLuARg2Mt6FQJw3hN6MnQJnpJbp7amcFO2X%2B&X-Amz-Signature=0414334b1e2ac7496f7de20fd1f4dfebd2d63d6464024749d95561d8dd2c5358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AV6A5HK%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHufCeZFFED4q9ZcBAWkVlf6EOFee8SAILhrbPWC%2FoYAiEAokuwpeShh056OjsAr%2BfjDvohbdoEgs%2FeYcS28e%2FfMwcqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ5HN%2BUAJPImnkumyircAzS%2FjKEgsx8ODx4KdHln1zwgl9yF2FWZaGvM1pUNJRU8%2F3RXC9HeVw2P%2FpFB1KBrRNQm%2Fbu5QANi26C2aEKuW0U8LsR%2Fttmd5wrXdbJSo%2F8Z0VxUXg86fEkxZotGujUO78JtjErmCazbIHJkthakB0v9ZCIEbIygfPSZkpfQG%2F67cbtx%2F%2BRe0%2FxJjz%2Fj7zT9uxt1gCsRypMqZ8VDSKM95jDcp%2Bcwjkt7ss2mlgpbRVXYT0pAHE2Oc%2Fjv3Z725QtxmqcB3Fk8A4Kdl8200P9t%2BLLudHInTZ0Df%2BZQ1WybDSpJPE%2F4QSx%2BGbj%2BF5Ieepe5hbNN0Ef3SsmMO%2Bua4a5Eu%2FCkeTTWaS%2BybhiBypgv0nGX1H26LsjWkQk5SNDfIJn%2Byo3IEFaAdotb%2BPOud4GKXxenoBlgxLufdKFd%2BhZA21ruGxoSfUxmXOtyN7n2qnf2bFttsyI9KAsL6e7dbOG3%2FnH9gKpOPRvFow05ADx1TrXk%2B9b3LzBy7q2RarL5Hkj%2BQWTQzc4Hv9m8yP16ObI9noES75nqvAYc1HcORLHvFl3YsIy%2BogvTVkFHnjz2hsvuVRME8hvEHU8QaAr3b03f8tmX%2F09j59FqyuSlOhfWu8G7jC3U1OQTUluLjG7KMJafysMGOqUBsVCFfRvZWGfU3RhE0T8yAyBunOjBRNKm8o2pJAAeaUgGfmXB6pJUs2wc%2Fqy6T8EYMB7gtfoyWjlUDRGtdJR6yhzOXetB6lpXLR%2B9Xaiq0yqigUHCxJZATEPOvySVhU1xaNTQGfbUhxuQVHmNSkZqkd8V5GurX2P8oawAMpNWfddkfCzR6SOYWkqpLLuARg2Mt6FQJw3hN6MnQJnpJbp7amcFO2X%2B&X-Amz-Signature=5b9f5fd3b6c4fe42eb44ac3b25450d31255d8a65425fe67fe37773d6e533c41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

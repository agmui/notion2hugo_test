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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY3GLBHN%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOk486iywz6L8ozc3CgHvKuP7%2Fbzmt4TVwb1Y8xBUOjgIgDMsi7gSEOBf20F34HIou2AT%2BTSPyJUP6pmtSL94kK6sqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHUfpeG0159L%2FRVzircA6zdk%2FG8FJFGlXaqVPZnXiuC1ZfLh62l5f2ApJRmnT9VopNCc%2BtDCGKVgZSool9qtEfONl8rM0C2C4lvsn%2BB%2FNU0fZ8MrsjLQoC5RqkwD3dvAx2eMXpc9ui8UzcspnoewEdOxMbW3y1pcM8gxcB4MdPMZzV%2FWRyn00i8sAaLA1fRTHP9i4J9tZi7Jm9RmnlpTUXkawwDm%2F3WfThorlTtrOA5QmmUv%2BC9idClKSqtbRNC%2FEN64aS6m4HRYYv9QZB68qakmQcAiPpCiuUiouAjX9pw%2B%2BJM6j%2B9ssJZAYVuoXvZWfdBYIuolXYt2KnJjKdLQ4a%2F6S4HGCz5eoOEsl98oePhbGN9lFAS5qZ3flBG6m3LAHQXgB8WnvQteyjlCCTIfwjFVKKuVRTkh3u6sY0HAuIo598SnMot11KikAKaIDrNgNYHB579sz2lzUh4Ugqoh4b6upgOg7iVtLUWLRRnT6AHXJifTvQx7bXtFzB8JjoP2ybmys2XCI4YI2%2FVEg5kOnzScyGq59xnB3OepdiYA9s9TYQMBKUWlp8nfcZlgqxV7MjVndy0mz%2FSTzWNARb9YLE21wXhQRrA7MwcrO03vQqACAWWHtT%2F%2FWHOGAYpmEOVT4ojGyRElHN4EPvbMN2P28IGOqUBz8HEGiW8b%2FBGqXRv6lVNc5Yh2SB65BM%2BuN5XgVmVcxOqZEmarRxBGSL7IWUZQuLPpq1m3N9buwTpUZJ3LP3UxoiQQtFifYo%2BkHJWwdtX%2FulJx3J6OHwOVXSurxi%2BeMkdp0N4qvdydphwRJ2ZRvBGy4l7OR33ilOrK7ynEwTik6PqTL8gGvLRIbE6DdMwAH1MWx8OPkD8YGXBfj4coaCbVWxSQrfM&X-Amz-Signature=73ce9cab7a690927fde074aac020524481f57b0f4d85f749b00e9ee152a6ac23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY3GLBHN%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOk486iywz6L8ozc3CgHvKuP7%2Fbzmt4TVwb1Y8xBUOjgIgDMsi7gSEOBf20F34HIou2AT%2BTSPyJUP6pmtSL94kK6sqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHUfpeG0159L%2FRVzircA6zdk%2FG8FJFGlXaqVPZnXiuC1ZfLh62l5f2ApJRmnT9VopNCc%2BtDCGKVgZSool9qtEfONl8rM0C2C4lvsn%2BB%2FNU0fZ8MrsjLQoC5RqkwD3dvAx2eMXpc9ui8UzcspnoewEdOxMbW3y1pcM8gxcB4MdPMZzV%2FWRyn00i8sAaLA1fRTHP9i4J9tZi7Jm9RmnlpTUXkawwDm%2F3WfThorlTtrOA5QmmUv%2BC9idClKSqtbRNC%2FEN64aS6m4HRYYv9QZB68qakmQcAiPpCiuUiouAjX9pw%2B%2BJM6j%2B9ssJZAYVuoXvZWfdBYIuolXYt2KnJjKdLQ4a%2F6S4HGCz5eoOEsl98oePhbGN9lFAS5qZ3flBG6m3LAHQXgB8WnvQteyjlCCTIfwjFVKKuVRTkh3u6sY0HAuIo598SnMot11KikAKaIDrNgNYHB579sz2lzUh4Ugqoh4b6upgOg7iVtLUWLRRnT6AHXJifTvQx7bXtFzB8JjoP2ybmys2XCI4YI2%2FVEg5kOnzScyGq59xnB3OepdiYA9s9TYQMBKUWlp8nfcZlgqxV7MjVndy0mz%2FSTzWNARb9YLE21wXhQRrA7MwcrO03vQqACAWWHtT%2F%2FWHOGAYpmEOVT4ojGyRElHN4EPvbMN2P28IGOqUBz8HEGiW8b%2FBGqXRv6lVNc5Yh2SB65BM%2BuN5XgVmVcxOqZEmarRxBGSL7IWUZQuLPpq1m3N9buwTpUZJ3LP3UxoiQQtFifYo%2BkHJWwdtX%2FulJx3J6OHwOVXSurxi%2BeMkdp0N4qvdydphwRJ2ZRvBGy4l7OR33ilOrK7ynEwTik6PqTL8gGvLRIbE6DdMwAH1MWx8OPkD8YGXBfj4coaCbVWxSQrfM&X-Amz-Signature=611257ba72258b620dc73219370015a1c059732ca3b62fbd3ce45509c073e79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY3GLBHN%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T150744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOk486iywz6L8ozc3CgHvKuP7%2Fbzmt4TVwb1Y8xBUOjgIgDMsi7gSEOBf20F34HIou2AT%2BTSPyJUP6pmtSL94kK6sqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNHUfpeG0159L%2FRVzircA6zdk%2FG8FJFGlXaqVPZnXiuC1ZfLh62l5f2ApJRmnT9VopNCc%2BtDCGKVgZSool9qtEfONl8rM0C2C4lvsn%2BB%2FNU0fZ8MrsjLQoC5RqkwD3dvAx2eMXpc9ui8UzcspnoewEdOxMbW3y1pcM8gxcB4MdPMZzV%2FWRyn00i8sAaLA1fRTHP9i4J9tZi7Jm9RmnlpTUXkawwDm%2F3WfThorlTtrOA5QmmUv%2BC9idClKSqtbRNC%2FEN64aS6m4HRYYv9QZB68qakmQcAiPpCiuUiouAjX9pw%2B%2BJM6j%2B9ssJZAYVuoXvZWfdBYIuolXYt2KnJjKdLQ4a%2F6S4HGCz5eoOEsl98oePhbGN9lFAS5qZ3flBG6m3LAHQXgB8WnvQteyjlCCTIfwjFVKKuVRTkh3u6sY0HAuIo598SnMot11KikAKaIDrNgNYHB579sz2lzUh4Ugqoh4b6upgOg7iVtLUWLRRnT6AHXJifTvQx7bXtFzB8JjoP2ybmys2XCI4YI2%2FVEg5kOnzScyGq59xnB3OepdiYA9s9TYQMBKUWlp8nfcZlgqxV7MjVndy0mz%2FSTzWNARb9YLE21wXhQRrA7MwcrO03vQqACAWWHtT%2F%2FWHOGAYpmEOVT4ojGyRElHN4EPvbMN2P28IGOqUBz8HEGiW8b%2FBGqXRv6lVNc5Yh2SB65BM%2BuN5XgVmVcxOqZEmarRxBGSL7IWUZQuLPpq1m3N9buwTpUZJ3LP3UxoiQQtFifYo%2BkHJWwdtX%2FulJx3J6OHwOVXSurxi%2BeMkdp0N4qvdydphwRJ2ZRvBGy4l7OR33ilOrK7ynEwTik6PqTL8gGvLRIbE6DdMwAH1MWx8OPkD8YGXBfj4coaCbVWxSQrfM&X-Amz-Signature=c7a56534b9f591eb4290c0527850fe99969bc545d843a40989199706d1a5d47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

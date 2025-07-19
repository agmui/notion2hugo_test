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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3XLTQ7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCccZ%2Bbll6D9m3iw%2B9VCi3mmX1ybOuNmUtUj%2BnOnyo28QIhANe7HNip4GF%2FGaRIo3hY4yniJRO0qe%2Fv7jT9zFXDFB1DKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWT8QIT%2FjDMdez3Wwq3AP4rh8wKMFYoCW6UAZYtpWB55e1cHtSWuXPutRk1fgYxZcy%2FIiUpQXaiCdTlFs%2BEjvcg4mDmPIyPKT%2BP68UImkPpuCV%2BD5bFjefoAvPCoDnTnUfyUFFoS%2FNP7IT96hwCUtok%2F8MG1kXtNrFQuUafFzC8%2F2%2B47DgaKRJW%2B5TNpqv2go4ktGdKLqPVIQVJ1AzPOubxcTFDgdzm0xXiC05PLGMaNbeVa4I7W1Ac%2BjJET%2BZoe5ATVHUtH2DcP94BwILTRRGih4De8mf6Artmm3NhU7Ht%2BLVtAtYB5gDUS7K84G6ySbuzLZR6IMZoVsPTYhVBwI4%2B99EWBAtBtkhXmMkk0lJyJV8UHp7b%2BwIGzLlwJa0iqefNQGIY%2Fdf1IYUyYIoLR%2Fj8NAuTLh%2FAwWwjS1TlDES1ES1uER1d1YF5nlTyfDGt6KDZOUQtZcWqRguMI0cI5%2Bv9ca%2BQqYBhVpLjdTJFj%2FD%2BjaZNUV%2FLMBz8UPBqA0OsUCVr3wKeBGIs5jOcs7v2Lb%2Bvdamq0%2BTggrjiekaE6LmuBv5VERFTocXZnaOKJkYKzE3GKVX6FYDpO%2BfJDQy4WmV%2BZgK5P72YMHJ%2BukdXPRStz2qJPPYx%2Fr3OIJtcg5YpPVswcAr4YrNYgomwjCCxuzDBjqkAa%2BN0M%2F9%2FkXkqVygRB2F0l6PsIoGH%2BzRs0w2hNf12b%2BKS8IdsCGFe2X8VEeQk3%2Bq5BDhWFYlbuosngbrNokDHc%2FxT76N%2B8DnT8lsEtN09OyOaNEzEigjCvSSM1tDZWjs6qlnQZEV4YEr9x%2ByAc4Moqb8wcUGHmRtzE3yPk2t7QDmOSQeZwJX1W5xSJvrPCDQSYteVYe8%2BrLj7am1M4hKPsaz9bx1&X-Amz-Signature=ae4689bf0034f98b89d1f0954b9736b116f0e4ac144aff8f8e0bd0c0246d7baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3XLTQ7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCccZ%2Bbll6D9m3iw%2B9VCi3mmX1ybOuNmUtUj%2BnOnyo28QIhANe7HNip4GF%2FGaRIo3hY4yniJRO0qe%2Fv7jT9zFXDFB1DKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWT8QIT%2FjDMdez3Wwq3AP4rh8wKMFYoCW6UAZYtpWB55e1cHtSWuXPutRk1fgYxZcy%2FIiUpQXaiCdTlFs%2BEjvcg4mDmPIyPKT%2BP68UImkPpuCV%2BD5bFjefoAvPCoDnTnUfyUFFoS%2FNP7IT96hwCUtok%2F8MG1kXtNrFQuUafFzC8%2F2%2B47DgaKRJW%2B5TNpqv2go4ktGdKLqPVIQVJ1AzPOubxcTFDgdzm0xXiC05PLGMaNbeVa4I7W1Ac%2BjJET%2BZoe5ATVHUtH2DcP94BwILTRRGih4De8mf6Artmm3NhU7Ht%2BLVtAtYB5gDUS7K84G6ySbuzLZR6IMZoVsPTYhVBwI4%2B99EWBAtBtkhXmMkk0lJyJV8UHp7b%2BwIGzLlwJa0iqefNQGIY%2Fdf1IYUyYIoLR%2Fj8NAuTLh%2FAwWwjS1TlDES1ES1uER1d1YF5nlTyfDGt6KDZOUQtZcWqRguMI0cI5%2Bv9ca%2BQqYBhVpLjdTJFj%2FD%2BjaZNUV%2FLMBz8UPBqA0OsUCVr3wKeBGIs5jOcs7v2Lb%2Bvdamq0%2BTggrjiekaE6LmuBv5VERFTocXZnaOKJkYKzE3GKVX6FYDpO%2BfJDQy4WmV%2BZgK5P72YMHJ%2BukdXPRStz2qJPPYx%2Fr3OIJtcg5YpPVswcAr4YrNYgomwjCCxuzDBjqkAa%2BN0M%2F9%2FkXkqVygRB2F0l6PsIoGH%2BzRs0w2hNf12b%2BKS8IdsCGFe2X8VEeQk3%2Bq5BDhWFYlbuosngbrNokDHc%2FxT76N%2B8DnT8lsEtN09OyOaNEzEigjCvSSM1tDZWjs6qlnQZEV4YEr9x%2ByAc4Moqb8wcUGHmRtzE3yPk2t7QDmOSQeZwJX1W5xSJvrPCDQSYteVYe8%2BrLj7am1M4hKPsaz9bx1&X-Amz-Signature=416fee744c113d2c38149768ce56eaa9d56706534ed0860002ec2294e1ad8fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP3XLTQ7%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCccZ%2Bbll6D9m3iw%2B9VCi3mmX1ybOuNmUtUj%2BnOnyo28QIhANe7HNip4GF%2FGaRIo3hY4yniJRO0qe%2Fv7jT9zFXDFB1DKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWT8QIT%2FjDMdez3Wwq3AP4rh8wKMFYoCW6UAZYtpWB55e1cHtSWuXPutRk1fgYxZcy%2FIiUpQXaiCdTlFs%2BEjvcg4mDmPIyPKT%2BP68UImkPpuCV%2BD5bFjefoAvPCoDnTnUfyUFFoS%2FNP7IT96hwCUtok%2F8MG1kXtNrFQuUafFzC8%2F2%2B47DgaKRJW%2B5TNpqv2go4ktGdKLqPVIQVJ1AzPOubxcTFDgdzm0xXiC05PLGMaNbeVa4I7W1Ac%2BjJET%2BZoe5ATVHUtH2DcP94BwILTRRGih4De8mf6Artmm3NhU7Ht%2BLVtAtYB5gDUS7K84G6ySbuzLZR6IMZoVsPTYhVBwI4%2B99EWBAtBtkhXmMkk0lJyJV8UHp7b%2BwIGzLlwJa0iqefNQGIY%2Fdf1IYUyYIoLR%2Fj8NAuTLh%2FAwWwjS1TlDES1ES1uER1d1YF5nlTyfDGt6KDZOUQtZcWqRguMI0cI5%2Bv9ca%2BQqYBhVpLjdTJFj%2FD%2BjaZNUV%2FLMBz8UPBqA0OsUCVr3wKeBGIs5jOcs7v2Lb%2Bvdamq0%2BTggrjiekaE6LmuBv5VERFTocXZnaOKJkYKzE3GKVX6FYDpO%2BfJDQy4WmV%2BZgK5P72YMHJ%2BukdXPRStz2qJPPYx%2Fr3OIJtcg5YpPVswcAr4YrNYgomwjCCxuzDBjqkAa%2BN0M%2F9%2FkXkqVygRB2F0l6PsIoGH%2BzRs0w2hNf12b%2BKS8IdsCGFe2X8VEeQk3%2Bq5BDhWFYlbuosngbrNokDHc%2FxT76N%2B8DnT8lsEtN09OyOaNEzEigjCvSSM1tDZWjs6qlnQZEV4YEr9x%2ByAc4Moqb8wcUGHmRtzE3yPk2t7QDmOSQeZwJX1W5xSJvrPCDQSYteVYe8%2BrLj7am1M4hKPsaz9bx1&X-Amz-Signature=d9b81962e1e3cc7315a7fb25c8a085bde3e98164034fa9a95135aa20a9927481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

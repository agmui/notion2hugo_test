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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TITINSSX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8eGZSdIvk6ydf1%2FEYJ%2FOg9PTW3Sa%2FtidWSK0itvKF0AiBpQRfi0O3AhnwkviO3EUAQnzblLqYfOne%2Fm1xaEGSuYiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME1e%2F%2B%2Bzns%2BCViup4KtwDIQ7llJvDN7pd4AcEj0tG3PYIG29XoIX3Z46OJM%2FmcvlkBuqvDCgHqQ3JyaKLEnan2%2FDTnzAEh3T%2BQr%2Fond3Y47iGjjufqmitUbWuuqOz%2FHLRfyN9FPF5ZASIu9%2Bz%2F7%2FZSe2a%2B6htd3NpVLz3OSjaf6OwwgyVUPZh6Hc4Og7o3l2GfPSxdu9fmAQaKhFXOpcbxd8jcs67EINI5OX%2Bc%2B9Bt5F6OHg3aWDJpntEdNcaLAqsf%2BmZBf8k7L0NBuDgERxbPXI5VdhKx7qA1YWyppYugqlvo08aJ3%2F7e3zNQIQMxkhaAciI91wJwbWL4TexoKouR6Ak6sFkLIwFWh65HHi9MQQvtX2X8BVmEwZW6bRyRpQ5XGC8vEkIner9MD2pQPnmBKfirirbjBa3tUBivLGT73A5hvPzan7Oo1Y5ZJOg5M3wsAO37CskP4M8VdI%2BCuikjGN0dBu4BW2vyHS6b51Yn5xQz9IMYCfTbQBgSZyT9WBl8wrpKLnZ%2BlYFT4K4PKFjzGcnZ7V55lHRGIvE1S20YEgjb357mZd9k5QDEIvOFdDIFcCBMYdzqT4QyVO8%2BFrejmafjYrT9LtikTjUYkp%2BqPHdZ43VAHghPnEH6IK%2BRS3nvdkILJUpqc3oWpcw0oO2wwY6pgEZqc0xwbYaSzWuM%2BJntltCQ7MJnADx1IFllvsH3OT7IlzxRZpNE2OG33ZrQgyNDVuTg4O2VodyG4KyjPGIRgLfbla9W1qSTfXB%2B6rBURLlqhZLqMi%2BfSqT794zc0WI28J2pxBYAYbazea9iToer5ziHwdbiKOIVMrhOoGyWBWxN2IeXVQCvooKhXL60ir0jmAHzuEFYIQUPVJf86Bqacg1Jta3N7kb&X-Amz-Signature=0b6674ea592b0ca21adc4f97473bc610a84ca47bac501d9df7d92585a7428129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TITINSSX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8eGZSdIvk6ydf1%2FEYJ%2FOg9PTW3Sa%2FtidWSK0itvKF0AiBpQRfi0O3AhnwkviO3EUAQnzblLqYfOne%2Fm1xaEGSuYiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME1e%2F%2B%2Bzns%2BCViup4KtwDIQ7llJvDN7pd4AcEj0tG3PYIG29XoIX3Z46OJM%2FmcvlkBuqvDCgHqQ3JyaKLEnan2%2FDTnzAEh3T%2BQr%2Fond3Y47iGjjufqmitUbWuuqOz%2FHLRfyN9FPF5ZASIu9%2Bz%2F7%2FZSe2a%2B6htd3NpVLz3OSjaf6OwwgyVUPZh6Hc4Og7o3l2GfPSxdu9fmAQaKhFXOpcbxd8jcs67EINI5OX%2Bc%2B9Bt5F6OHg3aWDJpntEdNcaLAqsf%2BmZBf8k7L0NBuDgERxbPXI5VdhKx7qA1YWyppYugqlvo08aJ3%2F7e3zNQIQMxkhaAciI91wJwbWL4TexoKouR6Ak6sFkLIwFWh65HHi9MQQvtX2X8BVmEwZW6bRyRpQ5XGC8vEkIner9MD2pQPnmBKfirirbjBa3tUBivLGT73A5hvPzan7Oo1Y5ZJOg5M3wsAO37CskP4M8VdI%2BCuikjGN0dBu4BW2vyHS6b51Yn5xQz9IMYCfTbQBgSZyT9WBl8wrpKLnZ%2BlYFT4K4PKFjzGcnZ7V55lHRGIvE1S20YEgjb357mZd9k5QDEIvOFdDIFcCBMYdzqT4QyVO8%2BFrejmafjYrT9LtikTjUYkp%2BqPHdZ43VAHghPnEH6IK%2BRS3nvdkILJUpqc3oWpcw0oO2wwY6pgEZqc0xwbYaSzWuM%2BJntltCQ7MJnADx1IFllvsH3OT7IlzxRZpNE2OG33ZrQgyNDVuTg4O2VodyG4KyjPGIRgLfbla9W1qSTfXB%2B6rBURLlqhZLqMi%2BfSqT794zc0WI28J2pxBYAYbazea9iToer5ziHwdbiKOIVMrhOoGyWBWxN2IeXVQCvooKhXL60ir0jmAHzuEFYIQUPVJf86Bqacg1Jta3N7kb&X-Amz-Signature=5cd21f6dff29fef008eed0199320bf0649c6a0897e8ec1e16f2b02d0157364dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TITINSSX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8eGZSdIvk6ydf1%2FEYJ%2FOg9PTW3Sa%2FtidWSK0itvKF0AiBpQRfi0O3AhnwkviO3EUAQnzblLqYfOne%2Fm1xaEGSuYiqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME1e%2F%2B%2Bzns%2BCViup4KtwDIQ7llJvDN7pd4AcEj0tG3PYIG29XoIX3Z46OJM%2FmcvlkBuqvDCgHqQ3JyaKLEnan2%2FDTnzAEh3T%2BQr%2Fond3Y47iGjjufqmitUbWuuqOz%2FHLRfyN9FPF5ZASIu9%2Bz%2F7%2FZSe2a%2B6htd3NpVLz3OSjaf6OwwgyVUPZh6Hc4Og7o3l2GfPSxdu9fmAQaKhFXOpcbxd8jcs67EINI5OX%2Bc%2B9Bt5F6OHg3aWDJpntEdNcaLAqsf%2BmZBf8k7L0NBuDgERxbPXI5VdhKx7qA1YWyppYugqlvo08aJ3%2F7e3zNQIQMxkhaAciI91wJwbWL4TexoKouR6Ak6sFkLIwFWh65HHi9MQQvtX2X8BVmEwZW6bRyRpQ5XGC8vEkIner9MD2pQPnmBKfirirbjBa3tUBivLGT73A5hvPzan7Oo1Y5ZJOg5M3wsAO37CskP4M8VdI%2BCuikjGN0dBu4BW2vyHS6b51Yn5xQz9IMYCfTbQBgSZyT9WBl8wrpKLnZ%2BlYFT4K4PKFjzGcnZ7V55lHRGIvE1S20YEgjb357mZd9k5QDEIvOFdDIFcCBMYdzqT4QyVO8%2BFrejmafjYrT9LtikTjUYkp%2BqPHdZ43VAHghPnEH6IK%2BRS3nvdkILJUpqc3oWpcw0oO2wwY6pgEZqc0xwbYaSzWuM%2BJntltCQ7MJnADx1IFllvsH3OT7IlzxRZpNE2OG33ZrQgyNDVuTg4O2VodyG4KyjPGIRgLfbla9W1qSTfXB%2B6rBURLlqhZLqMi%2BfSqT794zc0WI28J2pxBYAYbazea9iToer5ziHwdbiKOIVMrhOoGyWBWxN2IeXVQCvooKhXL60ir0jmAHzuEFYIQUPVJf86Bqacg1Jta3N7kb&X-Amz-Signature=d2fe95e9abc880078412ca86b5700f539f7d587c3c4b3ed57d8a614ceb02f741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KGCN4G%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLQ2z87XcbkRLhbNjxbFbdymDw32yKjrJCNSHk5T7IKwIhAKSnJ4HBv5xaeqUn69m3EZdRujro184ctzTXjZZth3JkKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhdgfuWpMnMVZ8sM0q3APTTl8pDUxz2RE%2FugNdOCsXB5Hm%2BLvTcdX3v%2F6JkkfpcuH7p0TFlGZUYYJ4fBkld%2FmP1z%2Fp%2BIOL%2Fo14lysrpiHs66GL3d2kJ%2Fi9oLrQUVVMmZU0cUrMqIzhGzV2%2BSIm0p%2F4O71FwRSXmJ2l30QvidAfHmn8xuzddzGLpV%2BmFLhiRzSXJjySTAnruZcG8B1HIo5VUbwTi91hoIhuYZA58pCMqutzaiTFC%2BagcBFhQjhoYVtTE24S%2Bv1rrJXnLQWQyk13t7HNBmwY3iU8hira8sXiFXFtFIm1sQGaUL0169etnnyA3OkSpJjcwwkJun5gZv9WhQToIogreDTHRiLwZbX2eJb0C9P3s3%2FLhO9JiHlw4%2FAcA1xbSkTy8l2hyRUu0bnxLhu0UVoOaqANf38RaxFJ7RWomMR%2F2e5xGiXwks9FAwjnUiRowqlRLUX%2FGSHJVr6f6t8ZfZ9ynHV4kia02ZlMDRVTEJAuCYThBMVX4el0IceFA%2BIjzNtj5V5yi99n52gxC09XT2%2F8rSo6j%2BvTX%2F6s58jgpFmciCQiHH3A77hl6bIsYfeV82EDYEGUldh3b1%2FtijmXlsKsVO5r2Rzvr9QYzeSxTNuQ9NEeqKDbbqlqQPLsuqG4qCVcXOhZhTDXwMPABjqkAdarqHjVYTtsZlwysuAr1ZyEYudu0I719crYqW3btV0BaI3M%2Fy48GAe8zWs7xC3HIPpyWSHa4DgUDXNLLrR6ACigau06zqtVjE%2FFPJFUThAshN0QxyLlSadLVJ2PPE21IDQPRMWs1G8Gxlxv0Q7mzmOiAsERCPFjjq8dsg2nn1%2BwPUcYB%2Fc9t64tYxkdJS%2BHOY1X5M1R93sTvECT4yOsy2HZslG2&X-Amz-Signature=ef340fe81043065af4cc29b615ec818c63899ca3340fb1760ee08c76a8b1e41d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KGCN4G%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLQ2z87XcbkRLhbNjxbFbdymDw32yKjrJCNSHk5T7IKwIhAKSnJ4HBv5xaeqUn69m3EZdRujro184ctzTXjZZth3JkKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhdgfuWpMnMVZ8sM0q3APTTl8pDUxz2RE%2FugNdOCsXB5Hm%2BLvTcdX3v%2F6JkkfpcuH7p0TFlGZUYYJ4fBkld%2FmP1z%2Fp%2BIOL%2Fo14lysrpiHs66GL3d2kJ%2Fi9oLrQUVVMmZU0cUrMqIzhGzV2%2BSIm0p%2F4O71FwRSXmJ2l30QvidAfHmn8xuzddzGLpV%2BmFLhiRzSXJjySTAnruZcG8B1HIo5VUbwTi91hoIhuYZA58pCMqutzaiTFC%2BagcBFhQjhoYVtTE24S%2Bv1rrJXnLQWQyk13t7HNBmwY3iU8hira8sXiFXFtFIm1sQGaUL0169etnnyA3OkSpJjcwwkJun5gZv9WhQToIogreDTHRiLwZbX2eJb0C9P3s3%2FLhO9JiHlw4%2FAcA1xbSkTy8l2hyRUu0bnxLhu0UVoOaqANf38RaxFJ7RWomMR%2F2e5xGiXwks9FAwjnUiRowqlRLUX%2FGSHJVr6f6t8ZfZ9ynHV4kia02ZlMDRVTEJAuCYThBMVX4el0IceFA%2BIjzNtj5V5yi99n52gxC09XT2%2F8rSo6j%2BvTX%2F6s58jgpFmciCQiHH3A77hl6bIsYfeV82EDYEGUldh3b1%2FtijmXlsKsVO5r2Rzvr9QYzeSxTNuQ9NEeqKDbbqlqQPLsuqG4qCVcXOhZhTDXwMPABjqkAdarqHjVYTtsZlwysuAr1ZyEYudu0I719crYqW3btV0BaI3M%2Fy48GAe8zWs7xC3HIPpyWSHa4DgUDXNLLrR6ACigau06zqtVjE%2FFPJFUThAshN0QxyLlSadLVJ2PPE21IDQPRMWs1G8Gxlxv0Q7mzmOiAsERCPFjjq8dsg2nn1%2BwPUcYB%2Fc9t64tYxkdJS%2BHOY1X5M1R93sTvECT4yOsy2HZslG2&X-Amz-Signature=34a280411a1a86d5c81d80bdcc117208d6ebf35855d7e537de548921a8b18404&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4KGCN4G%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLQ2z87XcbkRLhbNjxbFbdymDw32yKjrJCNSHk5T7IKwIhAKSnJ4HBv5xaeqUn69m3EZdRujro184ctzTXjZZth3JkKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzhdgfuWpMnMVZ8sM0q3APTTl8pDUxz2RE%2FugNdOCsXB5Hm%2BLvTcdX3v%2F6JkkfpcuH7p0TFlGZUYYJ4fBkld%2FmP1z%2Fp%2BIOL%2Fo14lysrpiHs66GL3d2kJ%2Fi9oLrQUVVMmZU0cUrMqIzhGzV2%2BSIm0p%2F4O71FwRSXmJ2l30QvidAfHmn8xuzddzGLpV%2BmFLhiRzSXJjySTAnruZcG8B1HIo5VUbwTi91hoIhuYZA58pCMqutzaiTFC%2BagcBFhQjhoYVtTE24S%2Bv1rrJXnLQWQyk13t7HNBmwY3iU8hira8sXiFXFtFIm1sQGaUL0169etnnyA3OkSpJjcwwkJun5gZv9WhQToIogreDTHRiLwZbX2eJb0C9P3s3%2FLhO9JiHlw4%2FAcA1xbSkTy8l2hyRUu0bnxLhu0UVoOaqANf38RaxFJ7RWomMR%2F2e5xGiXwks9FAwjnUiRowqlRLUX%2FGSHJVr6f6t8ZfZ9ynHV4kia02ZlMDRVTEJAuCYThBMVX4el0IceFA%2BIjzNtj5V5yi99n52gxC09XT2%2F8rSo6j%2BvTX%2F6s58jgpFmciCQiHH3A77hl6bIsYfeV82EDYEGUldh3b1%2FtijmXlsKsVO5r2Rzvr9QYzeSxTNuQ9NEeqKDbbqlqQPLsuqG4qCVcXOhZhTDXwMPABjqkAdarqHjVYTtsZlwysuAr1ZyEYudu0I719crYqW3btV0BaI3M%2Fy48GAe8zWs7xC3HIPpyWSHa4DgUDXNLLrR6ACigau06zqtVjE%2FFPJFUThAshN0QxyLlSadLVJ2PPE21IDQPRMWs1G8Gxlxv0Q7mzmOiAsERCPFjjq8dsg2nn1%2BwPUcYB%2Fc9t64tYxkdJS%2BHOY1X5M1R93sTvECT4yOsy2HZslG2&X-Amz-Signature=0d959b891eef55da92c63bd31cdcf417aa0c99684f7c92ce349cdfef7fcf8e54&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

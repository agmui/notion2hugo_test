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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCP3RNZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIG15Zfj2jXbf423Phwe6oGl0eZCECV8Uav9hdKJlD26ZAiEApHvfKLTK%2BbbXeGHCY%2BmscFsAsLbKL%2B%2FVrPq1IUZQ2WIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2aTERiLmF2FrYawSrcA%2BRGPNwO%2FVzVGoSWjWS4oAldiol4ahkcFbv1EAeIl%2F%2Bm3cvh%2FmmMtnyv3AjkkKag3oUQbAfJlw6cGub8ANaEwuB2vz%2BM36JaZ3tDq%2BxQRrws%2F946lZWCg0TsMwL5Ef9IkwwTVMO8MRcGVmxp4t5WCq4eKVf1jemxpWfiIJhH4HjQW1cCF1qU41mzxlG9KyTiV%2BWzLAUC0tIFKHLLUl3vnmkJzXznSv7PRwwOuj2B0xwcD0Vu2AyYg6%2B4R2N4s0YMiza3nsw3Y%2FwBGrmMcQMmTloGi0IVUvnQzWwkq3KgmvjtdRUFk43fdzSHEb5Y1J5ytSHaq31rZcrNgLatfNXjXMbV782CgRLDQaYyrvVu1X9ZwnBzx8HWPhMykFcoMSC45B7G8ciHv4b6BUx5iOGKDB0kz7YrohJnzfdQOloNHJpBIUl0FBt6h3aIgbRc6Wr7xflP%2FIkAtsN1K5EMEZJhJju%2BtivCoh1jxB95mzzoCORq9HxWlbtN8y5%2FiC2Bk%2BScQ7Cu4g5T91RUPA%2BG%2BPUWTNHdEaCYZ%2FB2V7IUARRVddJE1oGj%2FOTg4389O8dFXyNKvfWMG601jRoN3CEHiaPksN8jh%2FT7oYtC1%2FEfJD2hKLxDQtaGcnVezMrBkIq3MNe95b8GOqUBfsF8pH%2BX%2FG%2FnTgOIFobv%2FvzOiXu021fDA3FBnGqfTZuPJDGXCBW%2FkUIntyBvgCC83CUUQ5IuBfAXHy0qNI8c1%2FjUWyzcnmxS8xZ20Wsaxwm0TO%2B0yhjLt8Z0iHL89f06AvBpRzhupJEd4Kr%2FCZ6l6oD7km1JSTucIu8VT4P3PHdnpCF1%2F25N2apkD3KM35hJ5Bwi9umDKxEfh0cQJvGJBZRv0%2B3g&X-Amz-Signature=05df45d4e757408035a1022f9b750f7e902193ecf637f3e3efba94b8d1122c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCP3RNZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIG15Zfj2jXbf423Phwe6oGl0eZCECV8Uav9hdKJlD26ZAiEApHvfKLTK%2BbbXeGHCY%2BmscFsAsLbKL%2B%2FVrPq1IUZQ2WIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2aTERiLmF2FrYawSrcA%2BRGPNwO%2FVzVGoSWjWS4oAldiol4ahkcFbv1EAeIl%2F%2Bm3cvh%2FmmMtnyv3AjkkKag3oUQbAfJlw6cGub8ANaEwuB2vz%2BM36JaZ3tDq%2BxQRrws%2F946lZWCg0TsMwL5Ef9IkwwTVMO8MRcGVmxp4t5WCq4eKVf1jemxpWfiIJhH4HjQW1cCF1qU41mzxlG9KyTiV%2BWzLAUC0tIFKHLLUl3vnmkJzXznSv7PRwwOuj2B0xwcD0Vu2AyYg6%2B4R2N4s0YMiza3nsw3Y%2FwBGrmMcQMmTloGi0IVUvnQzWwkq3KgmvjtdRUFk43fdzSHEb5Y1J5ytSHaq31rZcrNgLatfNXjXMbV782CgRLDQaYyrvVu1X9ZwnBzx8HWPhMykFcoMSC45B7G8ciHv4b6BUx5iOGKDB0kz7YrohJnzfdQOloNHJpBIUl0FBt6h3aIgbRc6Wr7xflP%2FIkAtsN1K5EMEZJhJju%2BtivCoh1jxB95mzzoCORq9HxWlbtN8y5%2FiC2Bk%2BScQ7Cu4g5T91RUPA%2BG%2BPUWTNHdEaCYZ%2FB2V7IUARRVddJE1oGj%2FOTg4389O8dFXyNKvfWMG601jRoN3CEHiaPksN8jh%2FT7oYtC1%2FEfJD2hKLxDQtaGcnVezMrBkIq3MNe95b8GOqUBfsF8pH%2BX%2FG%2FnTgOIFobv%2FvzOiXu021fDA3FBnGqfTZuPJDGXCBW%2FkUIntyBvgCC83CUUQ5IuBfAXHy0qNI8c1%2FjUWyzcnmxS8xZ20Wsaxwm0TO%2B0yhjLt8Z0iHL89f06AvBpRzhupJEd4Kr%2FCZ6l6oD7km1JSTucIu8VT4P3PHdnpCF1%2F25N2apkD3KM35hJ5Bwi9umDKxEfh0cQJvGJBZRv0%2B3g&X-Amz-Signature=53b83ae166a011074ef4c6323674babb91ee401ca07fb10adb79755ead6e5530&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOCP3RNZ%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T190519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIG15Zfj2jXbf423Phwe6oGl0eZCECV8Uav9hdKJlD26ZAiEApHvfKLTK%2BbbXeGHCY%2BmscFsAsLbKL%2B%2FVrPq1IUZQ2WIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2aTERiLmF2FrYawSrcA%2BRGPNwO%2FVzVGoSWjWS4oAldiol4ahkcFbv1EAeIl%2F%2Bm3cvh%2FmmMtnyv3AjkkKag3oUQbAfJlw6cGub8ANaEwuB2vz%2BM36JaZ3tDq%2BxQRrws%2F946lZWCg0TsMwL5Ef9IkwwTVMO8MRcGVmxp4t5WCq4eKVf1jemxpWfiIJhH4HjQW1cCF1qU41mzxlG9KyTiV%2BWzLAUC0tIFKHLLUl3vnmkJzXznSv7PRwwOuj2B0xwcD0Vu2AyYg6%2B4R2N4s0YMiza3nsw3Y%2FwBGrmMcQMmTloGi0IVUvnQzWwkq3KgmvjtdRUFk43fdzSHEb5Y1J5ytSHaq31rZcrNgLatfNXjXMbV782CgRLDQaYyrvVu1X9ZwnBzx8HWPhMykFcoMSC45B7G8ciHv4b6BUx5iOGKDB0kz7YrohJnzfdQOloNHJpBIUl0FBt6h3aIgbRc6Wr7xflP%2FIkAtsN1K5EMEZJhJju%2BtivCoh1jxB95mzzoCORq9HxWlbtN8y5%2FiC2Bk%2BScQ7Cu4g5T91RUPA%2BG%2BPUWTNHdEaCYZ%2FB2V7IUARRVddJE1oGj%2FOTg4389O8dFXyNKvfWMG601jRoN3CEHiaPksN8jh%2FT7oYtC1%2FEfJD2hKLxDQtaGcnVezMrBkIq3MNe95b8GOqUBfsF8pH%2BX%2FG%2FnTgOIFobv%2FvzOiXu021fDA3FBnGqfTZuPJDGXCBW%2FkUIntyBvgCC83CUUQ5IuBfAXHy0qNI8c1%2FjUWyzcnmxS8xZ20Wsaxwm0TO%2B0yhjLt8Z0iHL89f06AvBpRzhupJEd4Kr%2FCZ6l6oD7km1JSTucIu8VT4P3PHdnpCF1%2F25N2apkD3KM35hJ5Bwi9umDKxEfh0cQJvGJBZRv0%2B3g&X-Amz-Signature=a5e96b7ad0c646b4b926d5c7442bd270add66cb100bdfa6097f23ac581b040d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

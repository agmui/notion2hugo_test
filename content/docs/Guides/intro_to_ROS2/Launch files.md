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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7PUTIZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCXz5wF3C5cwUnIwj4cg1u2DCCXU6eyPRecHVFy3LILswIhAJlBo5Ewzh1%2FiGkVBpD0TwpdlhxhAbfXf3xFQdiGdinmKv8DCEMQABoMNjM3NDIzMTgzODA1IgywXW60qBmyqNtavxoq3AM4aPmivApSWzLfj7ew7XrJ6Jl1kVbSr1Cn2BQ86i8OVMcDAiF61ZjCHtomyY12l7DDHVu2yfjAcCHmiV8DHCIqCzOxmNGv3pG2Zy3iBCqklY44Cbj7Fl%2F2K8Vo5avU4sIx4e7X6%2F4BOx18D3IGL5ZZj8KzrF9KsoDsKWuuoXa%2BqT%2F%2F9urLnv4DBCxO5MUaXMpQVVs1c2AprHsxPkvSUGH2Qvu9hbkup8HG1nhJrm6rMzsonzgfiO44wBQBJcB%2FbHY1ayizK1S5WZblyDlIozVGOOK%2BioI25MCpbGDJOH5AHrYddyT2%2Bnm4b6J2gRHeUjE1jaVgp7csoPJ9GklD75IJG0XFYDHUY%2BzHUEsPFWJECMGXCwF32DMDrewXk2935s%2BhWqc%2BMw6W9%2FzD3Aaks4hmVmXZj89iBcJQ7PEtiblaquvaOUQ94q%2BAkCe9du4QDO7G5eKchGKRBuxtBu0C7ixcmwyWJr7VCi0FLehKk0zbe5S1HAoD5ciWhrka8S1ijNQL9Q4033DWgaDEOaEW7J0zwtU6os%2BUnbVra%2FkxX5ZYDmtf9pHEL2ePTAQMJzYi%2F7Ik%2BwR0zdQQLC43oZN5hooS8NUL4WMDSWIQ7K5TqvRpWkCzJZZIRGn2lLevxDCPv8G9BjqkATqrcAD1wXRC4B4vlh2MXbKeFzU5EE6cUvasxGIXohpP3ttX9Mjt6fFsydPnoupFWMHGpFr2uFIr7iUeRLTJNWHf3tWnN2t5RSTWkzk7VT61wIMrZmV7RPedTIVyTTctL9DLRd9aS6XWibyOsnX5630G3WI4jLkxStvRakKM6qpPzsk8uq89gb9WbSFuK7j3BC7o5WqUpfp30tRpmMLqYvTLMdpt&X-Amz-Signature=e1812eb773206de6faaada2b64d6666d92ebf45b021712d9d79a6db175ee6fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7PUTIZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCXz5wF3C5cwUnIwj4cg1u2DCCXU6eyPRecHVFy3LILswIhAJlBo5Ewzh1%2FiGkVBpD0TwpdlhxhAbfXf3xFQdiGdinmKv8DCEMQABoMNjM3NDIzMTgzODA1IgywXW60qBmyqNtavxoq3AM4aPmivApSWzLfj7ew7XrJ6Jl1kVbSr1Cn2BQ86i8OVMcDAiF61ZjCHtomyY12l7DDHVu2yfjAcCHmiV8DHCIqCzOxmNGv3pG2Zy3iBCqklY44Cbj7Fl%2F2K8Vo5avU4sIx4e7X6%2F4BOx18D3IGL5ZZj8KzrF9KsoDsKWuuoXa%2BqT%2F%2F9urLnv4DBCxO5MUaXMpQVVs1c2AprHsxPkvSUGH2Qvu9hbkup8HG1nhJrm6rMzsonzgfiO44wBQBJcB%2FbHY1ayizK1S5WZblyDlIozVGOOK%2BioI25MCpbGDJOH5AHrYddyT2%2Bnm4b6J2gRHeUjE1jaVgp7csoPJ9GklD75IJG0XFYDHUY%2BzHUEsPFWJECMGXCwF32DMDrewXk2935s%2BhWqc%2BMw6W9%2FzD3Aaks4hmVmXZj89iBcJQ7PEtiblaquvaOUQ94q%2BAkCe9du4QDO7G5eKchGKRBuxtBu0C7ixcmwyWJr7VCi0FLehKk0zbe5S1HAoD5ciWhrka8S1ijNQL9Q4033DWgaDEOaEW7J0zwtU6os%2BUnbVra%2FkxX5ZYDmtf9pHEL2ePTAQMJzYi%2F7Ik%2BwR0zdQQLC43oZN5hooS8NUL4WMDSWIQ7K5TqvRpWkCzJZZIRGn2lLevxDCPv8G9BjqkATqrcAD1wXRC4B4vlh2MXbKeFzU5EE6cUvasxGIXohpP3ttX9Mjt6fFsydPnoupFWMHGpFr2uFIr7iUeRLTJNWHf3tWnN2t5RSTWkzk7VT61wIMrZmV7RPedTIVyTTctL9DLRd9aS6XWibyOsnX5630G3WI4jLkxStvRakKM6qpPzsk8uq89gb9WbSFuK7j3BC7o5WqUpfp30tRpmMLqYvTLMdpt&X-Amz-Signature=469614ddb0cfd0fe910344b42a25a2a2d0e5ef4a5c17a0b6bdfc7fc922d32479&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7PUTIZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQCXz5wF3C5cwUnIwj4cg1u2DCCXU6eyPRecHVFy3LILswIhAJlBo5Ewzh1%2FiGkVBpD0TwpdlhxhAbfXf3xFQdiGdinmKv8DCEMQABoMNjM3NDIzMTgzODA1IgywXW60qBmyqNtavxoq3AM4aPmivApSWzLfj7ew7XrJ6Jl1kVbSr1Cn2BQ86i8OVMcDAiF61ZjCHtomyY12l7DDHVu2yfjAcCHmiV8DHCIqCzOxmNGv3pG2Zy3iBCqklY44Cbj7Fl%2F2K8Vo5avU4sIx4e7X6%2F4BOx18D3IGL5ZZj8KzrF9KsoDsKWuuoXa%2BqT%2F%2F9urLnv4DBCxO5MUaXMpQVVs1c2AprHsxPkvSUGH2Qvu9hbkup8HG1nhJrm6rMzsonzgfiO44wBQBJcB%2FbHY1ayizK1S5WZblyDlIozVGOOK%2BioI25MCpbGDJOH5AHrYddyT2%2Bnm4b6J2gRHeUjE1jaVgp7csoPJ9GklD75IJG0XFYDHUY%2BzHUEsPFWJECMGXCwF32DMDrewXk2935s%2BhWqc%2BMw6W9%2FzD3Aaks4hmVmXZj89iBcJQ7PEtiblaquvaOUQ94q%2BAkCe9du4QDO7G5eKchGKRBuxtBu0C7ixcmwyWJr7VCi0FLehKk0zbe5S1HAoD5ciWhrka8S1ijNQL9Q4033DWgaDEOaEW7J0zwtU6os%2BUnbVra%2FkxX5ZYDmtf9pHEL2ePTAQMJzYi%2F7Ik%2BwR0zdQQLC43oZN5hooS8NUL4WMDSWIQ7K5TqvRpWkCzJZZIRGn2lLevxDCPv8G9BjqkATqrcAD1wXRC4B4vlh2MXbKeFzU5EE6cUvasxGIXohpP3ttX9Mjt6fFsydPnoupFWMHGpFr2uFIr7iUeRLTJNWHf3tWnN2t5RSTWkzk7VT61wIMrZmV7RPedTIVyTTctL9DLRd9aS6XWibyOsnX5630G3WI4jLkxStvRakKM6qpPzsk8uq89gb9WbSFuK7j3BC7o5WqUpfp30tRpmMLqYvTLMdpt&X-Amz-Signature=8751c217038783785a2e267980f4a7df26f8312ab57a4fc7c404f98bb78c9a2f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

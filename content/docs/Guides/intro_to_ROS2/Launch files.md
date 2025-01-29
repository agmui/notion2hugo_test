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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRAVVM3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8ttH7eRZhikUatiGfgN8yrkQbMU9ednYG1lKjtNJw7AiBqQVeGtFG8peNg8kptbL7WosvYTNH46CzxWUE8yygpbSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWhUAPg%2BArZGtxm44KtwDajvNHOumLx4H%2BTanYxyGCnwhkRQCQ%2BaFd3Y4EMh6%2F%2Fc1iV3BjDWGGWohH2b2balVbHJ7D8y%2Bq7sD5hQvyiKQRUeeu32ZL6rvsYfV4rkmxX1U0PKVuib53mD5N5Od75C6gWHtdisAKUMcqmdbqYMvZK214Bk2GJ5lcgEvTd3YpRBHH%2FK09cN9S%2FOPgyI3Pz4q7RqTVS1jDlqIpZLahxZtO90mb6Qz3XMG0gPNRW0NwVrFp4ft1tG6mLy7eF8vSdz0%2FxIcITA92dVOw8vU28Zs8LyGTC6XrE2E6%2FJTKFSnP9wB5gk%2BJoUM8xUoCSYHSyyFZ3nrABXRm0brKyb0ed5iULbcpsHh6g3WzvcYvXmb%2FE5KChYrUNoNiDcyRLN0yxsymBjL0fic9PEB6IVSJenVAJGF6xLbLUtFdTGZB71y%2F%2FeIW0q%2Fomn6ptro%2F3LZ8Ok3htXG2piboTM9H%2FUN7HC61f6cYxeNC%2BMHh7CWUgtGIkP8JIZEkGS0ZOzmzho4vKSG73vekCkHYVpJs6LnEtwSF7DeBkgz5WCt%2FcoZGoXjqKRZGJwAwOkSWOqYZ6uI46i93syRKTs50IP55Mk3Iyb0VVxRs03JDnzYmi5EiBLmOg89k3P4wOjxw7xC1cQwsarqvAY6pgHgqJNPgiyisQ0FiHvEHBz%2BHvnG5QdyR28NGX8Les95lLN4BkUxiNUJ5l23CEts%2F%2B1ALjjbnSpYyMX7FpRO8s6DLidkOb0JHaM3lR91p%2B4tegHG0RFxRoZ0l7lmjsjIDRNtGCNsMYBj8wA%2FDNO77YR8ss3LCf6zdkXZDkQpuIJHGLdEoSpHRGCUawPvFsIhWXWWBoPgQJii%2FXIzxDtFjbFZeYpu7sl%2B&X-Amz-Signature=faac823c63c22f98242f33d42bbf08be34ef3755e266e41eea31a2cd933f5e63&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRAVVM3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8ttH7eRZhikUatiGfgN8yrkQbMU9ednYG1lKjtNJw7AiBqQVeGtFG8peNg8kptbL7WosvYTNH46CzxWUE8yygpbSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWhUAPg%2BArZGtxm44KtwDajvNHOumLx4H%2BTanYxyGCnwhkRQCQ%2BaFd3Y4EMh6%2F%2Fc1iV3BjDWGGWohH2b2balVbHJ7D8y%2Bq7sD5hQvyiKQRUeeu32ZL6rvsYfV4rkmxX1U0PKVuib53mD5N5Od75C6gWHtdisAKUMcqmdbqYMvZK214Bk2GJ5lcgEvTd3YpRBHH%2FK09cN9S%2FOPgyI3Pz4q7RqTVS1jDlqIpZLahxZtO90mb6Qz3XMG0gPNRW0NwVrFp4ft1tG6mLy7eF8vSdz0%2FxIcITA92dVOw8vU28Zs8LyGTC6XrE2E6%2FJTKFSnP9wB5gk%2BJoUM8xUoCSYHSyyFZ3nrABXRm0brKyb0ed5iULbcpsHh6g3WzvcYvXmb%2FE5KChYrUNoNiDcyRLN0yxsymBjL0fic9PEB6IVSJenVAJGF6xLbLUtFdTGZB71y%2F%2FeIW0q%2Fomn6ptro%2F3LZ8Ok3htXG2piboTM9H%2FUN7HC61f6cYxeNC%2BMHh7CWUgtGIkP8JIZEkGS0ZOzmzho4vKSG73vekCkHYVpJs6LnEtwSF7DeBkgz5WCt%2FcoZGoXjqKRZGJwAwOkSWOqYZ6uI46i93syRKTs50IP55Mk3Iyb0VVxRs03JDnzYmi5EiBLmOg89k3P4wOjxw7xC1cQwsarqvAY6pgHgqJNPgiyisQ0FiHvEHBz%2BHvnG5QdyR28NGX8Les95lLN4BkUxiNUJ5l23CEts%2F%2B1ALjjbnSpYyMX7FpRO8s6DLidkOb0JHaM3lR91p%2B4tegHG0RFxRoZ0l7lmjsjIDRNtGCNsMYBj8wA%2FDNO77YR8ss3LCf6zdkXZDkQpuIJHGLdEoSpHRGCUawPvFsIhWXWWBoPgQJii%2FXIzxDtFjbFZeYpu7sl%2B&X-Amz-Signature=7e3ffaf721adb02392aecb7123e4a46dd4772e965e2eb336a88e4b3383d5a248&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSRAVVM3%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T210259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8ttH7eRZhikUatiGfgN8yrkQbMU9ednYG1lKjtNJw7AiBqQVeGtFG8peNg8kptbL7WosvYTNH46CzxWUE8yygpbSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWhUAPg%2BArZGtxm44KtwDajvNHOumLx4H%2BTanYxyGCnwhkRQCQ%2BaFd3Y4EMh6%2F%2Fc1iV3BjDWGGWohH2b2balVbHJ7D8y%2Bq7sD5hQvyiKQRUeeu32ZL6rvsYfV4rkmxX1U0PKVuib53mD5N5Od75C6gWHtdisAKUMcqmdbqYMvZK214Bk2GJ5lcgEvTd3YpRBHH%2FK09cN9S%2FOPgyI3Pz4q7RqTVS1jDlqIpZLahxZtO90mb6Qz3XMG0gPNRW0NwVrFp4ft1tG6mLy7eF8vSdz0%2FxIcITA92dVOw8vU28Zs8LyGTC6XrE2E6%2FJTKFSnP9wB5gk%2BJoUM8xUoCSYHSyyFZ3nrABXRm0brKyb0ed5iULbcpsHh6g3WzvcYvXmb%2FE5KChYrUNoNiDcyRLN0yxsymBjL0fic9PEB6IVSJenVAJGF6xLbLUtFdTGZB71y%2F%2FeIW0q%2Fomn6ptro%2F3LZ8Ok3htXG2piboTM9H%2FUN7HC61f6cYxeNC%2BMHh7CWUgtGIkP8JIZEkGS0ZOzmzho4vKSG73vekCkHYVpJs6LnEtwSF7DeBkgz5WCt%2FcoZGoXjqKRZGJwAwOkSWOqYZ6uI46i93syRKTs50IP55Mk3Iyb0VVxRs03JDnzYmi5EiBLmOg89k3P4wOjxw7xC1cQwsarqvAY6pgHgqJNPgiyisQ0FiHvEHBz%2BHvnG5QdyR28NGX8Les95lLN4BkUxiNUJ5l23CEts%2F%2B1ALjjbnSpYyMX7FpRO8s6DLidkOb0JHaM3lR91p%2B4tegHG0RFxRoZ0l7lmjsjIDRNtGCNsMYBj8wA%2FDNO77YR8ss3LCf6zdkXZDkQpuIJHGLdEoSpHRGCUawPvFsIhWXWWBoPgQJii%2FXIzxDtFjbFZeYpu7sl%2B&X-Amz-Signature=fb31f8b14409f080ea4e7ddec851b2b015b742f95f453e80bd4d4e8bb04e69b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

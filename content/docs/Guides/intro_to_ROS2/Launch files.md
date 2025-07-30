---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBV2U3Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1ZoaouVSxXVajrQffBTK5NQO0a4SwlezBc8jeK%2FhwpQIgYFSwXLHMcUxYouLlOFcHRNPuHR07bBa6BqzCxRI1ZJ4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx8s9Z8%2BuLM%2FDj1lCrcA95g7TGdiOdUTvz3K5ANpZ%2BFi45h3iuHevivgKMbQRwBe94OGzr2oBpgXGo%2B5YCOLBdqF90%2F5uKLgwy4ZEitvDNAfdu8nvHaU%2FI3UNb38MPzt8%2FVPT%2B8BmEmTFMcDaVoKVn0qK7u2WR3FKlouguT%2BBbW2Z%2FQ21Edfvkcmhv%2FxnrdX5sv9Qj4D6RV7%2FkuqHu74gmyohkPyapVyZzrPKdH2DN7FRp8ghBt2jBROhmgyZk%2FIzKJebdmpJmmQ%2F0p5M%2BXH63QONwLPQjHTJe4FZveCmA0cDwLerNdxLsmylVRVF2ABUWMwtmg5yjFhvlFGC%2BgOvtYIYeBcHaPpXFtIN9ym1OK8yXPZPog5fCUqtfGpUYv8zWARg4N3ZHtxbUAc6RVHfN5MF%2BAeTiesFxMG43VrQQSkPBbBeUlyY8R12QQ6eYCeLwKMfc1RdKYEzatjMFw%2BfOeacB5SMbOAZYD32JKQDAeOLKJKl44ez25x2S9pnJ9I27KhNzpOdroXUaMmXNIjf0IAYrtEDG5PYhxYgrTSk5OUD4gJDq7GFweQak72T9E0MGNiXqVCgLXUkmQ9fs6%2B1DHwsX7p0QTVvdVBav3%2FRgvvpEJVzvoBovambp%2F7X7fLVJNsRjCcZGw%2FoFaMI%2BjqMQGOqUBsSCo5q4R92HByseAM1ZqNWFiUjigiEYWe8gWL7kE5kL70r%2Bbn%2BlbST9YNAv6IsEagC12sCTlkhBL192meeXtaeewP3zPyQWeF8cIAwY136mNInO2npVaC1IVw9KgPlth0eRtqQiaqjQ2W1%2F9VVAfRI%2BMOzH6BhZfrSyZZd0qorwsbNgt6kXXlKqGdDE2S4B9jswQhYj1cQs0APFgPLSzq1wqnsBV&X-Amz-Signature=93de8eb99eb68e999f477d74ea8cf9d901825c1f8edd9afa805e4a2115bfaed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBV2U3Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1ZoaouVSxXVajrQffBTK5NQO0a4SwlezBc8jeK%2FhwpQIgYFSwXLHMcUxYouLlOFcHRNPuHR07bBa6BqzCxRI1ZJ4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx8s9Z8%2BuLM%2FDj1lCrcA95g7TGdiOdUTvz3K5ANpZ%2BFi45h3iuHevivgKMbQRwBe94OGzr2oBpgXGo%2B5YCOLBdqF90%2F5uKLgwy4ZEitvDNAfdu8nvHaU%2FI3UNb38MPzt8%2FVPT%2B8BmEmTFMcDaVoKVn0qK7u2WR3FKlouguT%2BBbW2Z%2FQ21Edfvkcmhv%2FxnrdX5sv9Qj4D6RV7%2FkuqHu74gmyohkPyapVyZzrPKdH2DN7FRp8ghBt2jBROhmgyZk%2FIzKJebdmpJmmQ%2F0p5M%2BXH63QONwLPQjHTJe4FZveCmA0cDwLerNdxLsmylVRVF2ABUWMwtmg5yjFhvlFGC%2BgOvtYIYeBcHaPpXFtIN9ym1OK8yXPZPog5fCUqtfGpUYv8zWARg4N3ZHtxbUAc6RVHfN5MF%2BAeTiesFxMG43VrQQSkPBbBeUlyY8R12QQ6eYCeLwKMfc1RdKYEzatjMFw%2BfOeacB5SMbOAZYD32JKQDAeOLKJKl44ez25x2S9pnJ9I27KhNzpOdroXUaMmXNIjf0IAYrtEDG5PYhxYgrTSk5OUD4gJDq7GFweQak72T9E0MGNiXqVCgLXUkmQ9fs6%2B1DHwsX7p0QTVvdVBav3%2FRgvvpEJVzvoBovambp%2F7X7fLVJNsRjCcZGw%2FoFaMI%2BjqMQGOqUBsSCo5q4R92HByseAM1ZqNWFiUjigiEYWe8gWL7kE5kL70r%2Bbn%2BlbST9YNAv6IsEagC12sCTlkhBL192meeXtaeewP3zPyQWeF8cIAwY136mNInO2npVaC1IVw9KgPlth0eRtqQiaqjQ2W1%2F9VVAfRI%2BMOzH6BhZfrSyZZd0qorwsbNgt6kXXlKqGdDE2S4B9jswQhYj1cQs0APFgPLSzq1wqnsBV&X-Amz-Signature=4ab024351ee3f9da798c27e413e14dd08e3c16cee45e543c3ef8ac6d5cd18b29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKBV2U3Y%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1ZoaouVSxXVajrQffBTK5NQO0a4SwlezBc8jeK%2FhwpQIgYFSwXLHMcUxYouLlOFcHRNPuHR07bBa6BqzCxRI1ZJ4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx8s9Z8%2BuLM%2FDj1lCrcA95g7TGdiOdUTvz3K5ANpZ%2BFi45h3iuHevivgKMbQRwBe94OGzr2oBpgXGo%2B5YCOLBdqF90%2F5uKLgwy4ZEitvDNAfdu8nvHaU%2FI3UNb38MPzt8%2FVPT%2B8BmEmTFMcDaVoKVn0qK7u2WR3FKlouguT%2BBbW2Z%2FQ21Edfvkcmhv%2FxnrdX5sv9Qj4D6RV7%2FkuqHu74gmyohkPyapVyZzrPKdH2DN7FRp8ghBt2jBROhmgyZk%2FIzKJebdmpJmmQ%2F0p5M%2BXH63QONwLPQjHTJe4FZveCmA0cDwLerNdxLsmylVRVF2ABUWMwtmg5yjFhvlFGC%2BgOvtYIYeBcHaPpXFtIN9ym1OK8yXPZPog5fCUqtfGpUYv8zWARg4N3ZHtxbUAc6RVHfN5MF%2BAeTiesFxMG43VrQQSkPBbBeUlyY8R12QQ6eYCeLwKMfc1RdKYEzatjMFw%2BfOeacB5SMbOAZYD32JKQDAeOLKJKl44ez25x2S9pnJ9I27KhNzpOdroXUaMmXNIjf0IAYrtEDG5PYhxYgrTSk5OUD4gJDq7GFweQak72T9E0MGNiXqVCgLXUkmQ9fs6%2B1DHwsX7p0QTVvdVBav3%2FRgvvpEJVzvoBovambp%2F7X7fLVJNsRjCcZGw%2FoFaMI%2BjqMQGOqUBsSCo5q4R92HByseAM1ZqNWFiUjigiEYWe8gWL7kE5kL70r%2Bbn%2BlbST9YNAv6IsEagC12sCTlkhBL192meeXtaeewP3zPyQWeF8cIAwY136mNInO2npVaC1IVw9KgPlth0eRtqQiaqjQ2W1%2F9VVAfRI%2BMOzH6BhZfrSyZZd0qorwsbNgt6kXXlKqGdDE2S4B9jswQhYj1cQs0APFgPLSzq1wqnsBV&X-Amz-Signature=2d6cdf01f1b465185f6020ea51c0f88deae8a5283efe510ecdab4c62b41236d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

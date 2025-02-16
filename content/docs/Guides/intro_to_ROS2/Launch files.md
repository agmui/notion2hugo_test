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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLORLAV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIB8yP%2FPVj2018sJcrUYa%2FtRHdA0JKCHfrDVOlr%2F4RzV%2BAiAeitYTk3H27pMZE1OHD7r1q3rQleDKTfhBnvR9IWFNKCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM12XLUhRJBlVK5t%2B7KtwD3SqIs7srWQfG%2B1xHWfS5h2iEPjjMq017k3EmJSW15cu%2FSdFXgPHVTQh5UWUeOY9JI%2FeSvstVZJzR5WYPaq99pTvdyE5jFTOAoB6rumG8LLZLVc1Tnz63uHhynIqs53IslND2ES3zO%2FPwUnrkqWewvA5tqZhIxzt1OQ4g%2B9IUUev7gCJFhAUwWb7JWmeSbnarfvXi0l77mUjBSz%2BKz3IFPnlQfh%2FPZnqjQOlDXxCxf22J9vnSIHF2D8LK2Wk40WdSSztYIP8tUkMZ00EKdp32Og5M930GJs1HA6f8ccRcVGhcv864%2Bve2%2FAfMhq6h4zRd8c6fSb9jdBz3MqzFh%2B9tPJcnLFFq6ErzTQB%2BIWnHHfgoIBeaumaZdQ99aGB%2BsrYCuX5JgfRMNM98FD90MJO6Ljv1jMDnc0tOsIFK5QEWSYCvfuNEdlappJMrq5LcTixbHPu1XcjaKKyIGpWkemsCqi33emG%2B%2FyIH%2Frynv6ScSySXtV3eeS1ATRY6zOPfc%2BKQ6fOL8PUPZi6b2owa5Zh7Lm1UMIVrvXkldXocrWtYUSv5umeq%2FqxN68MDdSsZlLsazlTR6aMtdgoN0txyyIDBS6bs0r0O3yH%2FFouNP01CFBl0sQCP6nyLYM0jA0kwnf7FvQY6pgFObePLCgbX4VNvUPnKMSmobZJH5ojGRXnpTZmE52Y1%2BFjKXCMqcJ%2BQrItcJDMOE6f7dABpc7GcZYQUAhabSgsACJMe%2FDNDh2LAAB864OCyb0unZWogrcDBFluGxQoUA4D%2BlnM75LIiNKCwidIozzBGtHpfVz4IYP5Ep%2FdCGgI%2BmVuwypt5ryPqLOpxbNwRtH5rUbp2YEegvtTkTUv5H4BwCN2xzCqv&X-Amz-Signature=37461c06f812d7ed042a9e77639969b23d1c19d11624ded61f0193abcc207651&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLORLAV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIB8yP%2FPVj2018sJcrUYa%2FtRHdA0JKCHfrDVOlr%2F4RzV%2BAiAeitYTk3H27pMZE1OHD7r1q3rQleDKTfhBnvR9IWFNKCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM12XLUhRJBlVK5t%2B7KtwD3SqIs7srWQfG%2B1xHWfS5h2iEPjjMq017k3EmJSW15cu%2FSdFXgPHVTQh5UWUeOY9JI%2FeSvstVZJzR5WYPaq99pTvdyE5jFTOAoB6rumG8LLZLVc1Tnz63uHhynIqs53IslND2ES3zO%2FPwUnrkqWewvA5tqZhIxzt1OQ4g%2B9IUUev7gCJFhAUwWb7JWmeSbnarfvXi0l77mUjBSz%2BKz3IFPnlQfh%2FPZnqjQOlDXxCxf22J9vnSIHF2D8LK2Wk40WdSSztYIP8tUkMZ00EKdp32Og5M930GJs1HA6f8ccRcVGhcv864%2Bve2%2FAfMhq6h4zRd8c6fSb9jdBz3MqzFh%2B9tPJcnLFFq6ErzTQB%2BIWnHHfgoIBeaumaZdQ99aGB%2BsrYCuX5JgfRMNM98FD90MJO6Ljv1jMDnc0tOsIFK5QEWSYCvfuNEdlappJMrq5LcTixbHPu1XcjaKKyIGpWkemsCqi33emG%2B%2FyIH%2Frynv6ScSySXtV3eeS1ATRY6zOPfc%2BKQ6fOL8PUPZi6b2owa5Zh7Lm1UMIVrvXkldXocrWtYUSv5umeq%2FqxN68MDdSsZlLsazlTR6aMtdgoN0txyyIDBS6bs0r0O3yH%2FFouNP01CFBl0sQCP6nyLYM0jA0kwnf7FvQY6pgFObePLCgbX4VNvUPnKMSmobZJH5ojGRXnpTZmE52Y1%2BFjKXCMqcJ%2BQrItcJDMOE6f7dABpc7GcZYQUAhabSgsACJMe%2FDNDh2LAAB864OCyb0unZWogrcDBFluGxQoUA4D%2BlnM75LIiNKCwidIozzBGtHpfVz4IYP5Ep%2FdCGgI%2BmVuwypt5ryPqLOpxbNwRtH5rUbp2YEegvtTkTUv5H4BwCN2xzCqv&X-Amz-Signature=9d6df294adad80bd88d9d3b93cf30ffb725eac36147e059b58a0bfdf94b2b7a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMLORLAV%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T070229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIB8yP%2FPVj2018sJcrUYa%2FtRHdA0JKCHfrDVOlr%2F4RzV%2BAiAeitYTk3H27pMZE1OHD7r1q3rQleDKTfhBnvR9IWFNKCr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIM12XLUhRJBlVK5t%2B7KtwD3SqIs7srWQfG%2B1xHWfS5h2iEPjjMq017k3EmJSW15cu%2FSdFXgPHVTQh5UWUeOY9JI%2FeSvstVZJzR5WYPaq99pTvdyE5jFTOAoB6rumG8LLZLVc1Tnz63uHhynIqs53IslND2ES3zO%2FPwUnrkqWewvA5tqZhIxzt1OQ4g%2B9IUUev7gCJFhAUwWb7JWmeSbnarfvXi0l77mUjBSz%2BKz3IFPnlQfh%2FPZnqjQOlDXxCxf22J9vnSIHF2D8LK2Wk40WdSSztYIP8tUkMZ00EKdp32Og5M930GJs1HA6f8ccRcVGhcv864%2Bve2%2FAfMhq6h4zRd8c6fSb9jdBz3MqzFh%2B9tPJcnLFFq6ErzTQB%2BIWnHHfgoIBeaumaZdQ99aGB%2BsrYCuX5JgfRMNM98FD90MJO6Ljv1jMDnc0tOsIFK5QEWSYCvfuNEdlappJMrq5LcTixbHPu1XcjaKKyIGpWkemsCqi33emG%2B%2FyIH%2Frynv6ScSySXtV3eeS1ATRY6zOPfc%2BKQ6fOL8PUPZi6b2owa5Zh7Lm1UMIVrvXkldXocrWtYUSv5umeq%2FqxN68MDdSsZlLsazlTR6aMtdgoN0txyyIDBS6bs0r0O3yH%2FFouNP01CFBl0sQCP6nyLYM0jA0kwnf7FvQY6pgFObePLCgbX4VNvUPnKMSmobZJH5ojGRXnpTZmE52Y1%2BFjKXCMqcJ%2BQrItcJDMOE6f7dABpc7GcZYQUAhabSgsACJMe%2FDNDh2LAAB864OCyb0unZWogrcDBFluGxQoUA4D%2BlnM75LIiNKCwidIozzBGtHpfVz4IYP5Ep%2FdCGgI%2BmVuwypt5ryPqLOpxbNwRtH5rUbp2YEegvtTkTUv5H4BwCN2xzCqv&X-Amz-Signature=1ab34505c23974aaea816fe9217e470e4992b99a082daa3e078ab8b184c41624&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

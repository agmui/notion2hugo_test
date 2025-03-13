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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAQX4HBD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMODVahNZ3dBnifGm53DuQn4nOnazOZmZr6jmGiZ65fwIhAIbU8Z5xqj1%2BnxSXt6Ky6jByuUgEgZ3iE67a6W45bmL7KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo3p0VXjTVRlneXGAq3AORCb%2BC%2FVE5PW4%2F9HwkuQ7NP8ZHXVRyALmaGEOySof26AxL1dY1mmfURdPEV3RxxKzRyv8oKxsIN5piJ5pFhF8X%2B4URpwXZs07FSeWlVa8NsDIb6xf1Shn3o%2BdXYrNii7N7r7zPUw%2F%2F5Zdj5LQA%2BkERw6sJlGushJ3J4xy7fbEAVEyNHKCTP2pBa28bXkCQtfSCmUJeUk8v7AxTQ9dUhV8lKoWq5U23U6rteqmSWlK9NB5T2mWxqrMIwHr3%2F940s0a8E2EAdnB0N3QNE2T2nbsjovWc%2FvDNH1JwE9TrVWKbAYN7KvCmxAxfShzOgZw1EVP5hJf5UCAQKBYPrlUnewKulrNDUiiLrM%2BcLwYvCFENXwgAUJm%2FJuUAA3hc2Xozn95rKhIxRc6yEhcrLhJR%2BnBkR%2FT5LqpeSTtZuUHncz%2Fm9Jbb04kptrYujsc08tIxdZVz%2Bxs%2BxVMDdz2zY2DKDSJTinKu9U5m9%2BM%2Bib7HDGQun4p7L%2B0B1FfXwuaiRIL4khwZF%2B1K2%2F0A%2BEVsfl%2FWQhLWT0oy1YaufD9MYJxpmjB8ydelCb9J3%2BX%2B%2FLiLxM3XgQsIP3BQ%2F6hhUVXdZInGHPed7keXl4iQxCJiZZDm2%2FP5oNW6M560OTEUTmJi5DDz9cy%2BBjqkAWjAyke2dRB%2FCO8RZYrRz4%2B%2BwqV5MEUzLxsNEOrVANEdGwT80AHJXZfjKjFjf5%2FSV1v18sX2f6bar0M%2FbLk8QvjNYzA0vhhq%2BrHzu9IZ3Wq%2BzDhOaBdzeFG6FsMH38grE2UWY0UyYPj%2FFFzN7Ff5cWrweIYVsOEHKoRpb2KOMCd0gP4OVlWpfxA9vG41yWWD7mspdE3Mqptczz9SeWM3UhcR2FhN&X-Amz-Signature=cc3826446436b90ea6a17f21aeb9a18e6df6a7bf90d043b29300b689e7cc32e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAQX4HBD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMODVahNZ3dBnifGm53DuQn4nOnazOZmZr6jmGiZ65fwIhAIbU8Z5xqj1%2BnxSXt6Ky6jByuUgEgZ3iE67a6W45bmL7KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo3p0VXjTVRlneXGAq3AORCb%2BC%2FVE5PW4%2F9HwkuQ7NP8ZHXVRyALmaGEOySof26AxL1dY1mmfURdPEV3RxxKzRyv8oKxsIN5piJ5pFhF8X%2B4URpwXZs07FSeWlVa8NsDIb6xf1Shn3o%2BdXYrNii7N7r7zPUw%2F%2F5Zdj5LQA%2BkERw6sJlGushJ3J4xy7fbEAVEyNHKCTP2pBa28bXkCQtfSCmUJeUk8v7AxTQ9dUhV8lKoWq5U23U6rteqmSWlK9NB5T2mWxqrMIwHr3%2F940s0a8E2EAdnB0N3QNE2T2nbsjovWc%2FvDNH1JwE9TrVWKbAYN7KvCmxAxfShzOgZw1EVP5hJf5UCAQKBYPrlUnewKulrNDUiiLrM%2BcLwYvCFENXwgAUJm%2FJuUAA3hc2Xozn95rKhIxRc6yEhcrLhJR%2BnBkR%2FT5LqpeSTtZuUHncz%2Fm9Jbb04kptrYujsc08tIxdZVz%2Bxs%2BxVMDdz2zY2DKDSJTinKu9U5m9%2BM%2Bib7HDGQun4p7L%2B0B1FfXwuaiRIL4khwZF%2B1K2%2F0A%2BEVsfl%2FWQhLWT0oy1YaufD9MYJxpmjB8ydelCb9J3%2BX%2B%2FLiLxM3XgQsIP3BQ%2F6hhUVXdZInGHPed7keXl4iQxCJiZZDm2%2FP5oNW6M560OTEUTmJi5DDz9cy%2BBjqkAWjAyke2dRB%2FCO8RZYrRz4%2B%2BwqV5MEUzLxsNEOrVANEdGwT80AHJXZfjKjFjf5%2FSV1v18sX2f6bar0M%2FbLk8QvjNYzA0vhhq%2BrHzu9IZ3Wq%2BzDhOaBdzeFG6FsMH38grE2UWY0UyYPj%2FFFzN7Ff5cWrweIYVsOEHKoRpb2KOMCd0gP4OVlWpfxA9vG41yWWD7mspdE3Mqptczz9SeWM3UhcR2FhN&X-Amz-Signature=b320fb3f72e9609419e27a4694d0084aed1ac41e7c47dbbc009b3d1690532d7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAQX4HBD%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T210728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMODVahNZ3dBnifGm53DuQn4nOnazOZmZr6jmGiZ65fwIhAIbU8Z5xqj1%2BnxSXt6Ky6jByuUgEgZ3iE67a6W45bmL7KogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo3p0VXjTVRlneXGAq3AORCb%2BC%2FVE5PW4%2F9HwkuQ7NP8ZHXVRyALmaGEOySof26AxL1dY1mmfURdPEV3RxxKzRyv8oKxsIN5piJ5pFhF8X%2B4URpwXZs07FSeWlVa8NsDIb6xf1Shn3o%2BdXYrNii7N7r7zPUw%2F%2F5Zdj5LQA%2BkERw6sJlGushJ3J4xy7fbEAVEyNHKCTP2pBa28bXkCQtfSCmUJeUk8v7AxTQ9dUhV8lKoWq5U23U6rteqmSWlK9NB5T2mWxqrMIwHr3%2F940s0a8E2EAdnB0N3QNE2T2nbsjovWc%2FvDNH1JwE9TrVWKbAYN7KvCmxAxfShzOgZw1EVP5hJf5UCAQKBYPrlUnewKulrNDUiiLrM%2BcLwYvCFENXwgAUJm%2FJuUAA3hc2Xozn95rKhIxRc6yEhcrLhJR%2BnBkR%2FT5LqpeSTtZuUHncz%2Fm9Jbb04kptrYujsc08tIxdZVz%2Bxs%2BxVMDdz2zY2DKDSJTinKu9U5m9%2BM%2Bib7HDGQun4p7L%2B0B1FfXwuaiRIL4khwZF%2B1K2%2F0A%2BEVsfl%2FWQhLWT0oy1YaufD9MYJxpmjB8ydelCb9J3%2BX%2B%2FLiLxM3XgQsIP3BQ%2F6hhUVXdZInGHPed7keXl4iQxCJiZZDm2%2FP5oNW6M560OTEUTmJi5DDz9cy%2BBjqkAWjAyke2dRB%2FCO8RZYrRz4%2B%2BwqV5MEUzLxsNEOrVANEdGwT80AHJXZfjKjFjf5%2FSV1v18sX2f6bar0M%2FbLk8QvjNYzA0vhhq%2BrHzu9IZ3Wq%2BzDhOaBdzeFG6FsMH38grE2UWY0UyYPj%2FFFzN7Ff5cWrweIYVsOEHKoRpb2KOMCd0gP4OVlWpfxA9vG41yWWD7mspdE3Mqptczz9SeWM3UhcR2FhN&X-Amz-Signature=6e6055f47a207595434841037aeb33e76bcbfb307a784d2378d489363a65ee8c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

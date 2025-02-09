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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGYXBQG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuRfvS90qEbXNnJmc769eBVv%2BhAOuccEzRcSmDYlp8AgIhAL9PNJsK%2BVq9mwdXscoavc1cQOIR5uOBiwR3ZlRwPTFCKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgiSl2Zqs0a6Pd7TYq3AOhkUlmu3Tbz9E%2FLIYrB0Qv3LMRtqOxNSxCMR6%2FPpIylwubcERN6sHIoZE0HDZBCoIyrdqLOqUTK4Y9C0XBgQT4Hynl8%2FdBPLzcF7rG0A8%2B5I%2FKALAkWEdNCMFi%2FOrVco6JAmegW0XVnnjfERSsPtffzRU%2B%2BmtoG8WClzZpJBv3K%2FYvSLvqjJ2e6dsVoAACKH3qV%2B%2BKEaUgcdjM0cUjaeor2wz%2BT74uEemTKrW3ghFPHbggAZ0EimPlZukr0f3Gm86RAm9xOo8sQHItTB1%2Bm27xrNtQF%2BvcM0Z7ikm2hUBScu4VUjULAmR4OxsI3UIC5TB3VKJKMcsiax65AaqOwbGqL%2BghOvj39UetFrj5%2Fc3pdMMiAc47pzojGFQc8bKwAGmDw9dVhR04ixfcTsMgVu15rRbBuJvK38FZPZdPkGjgOw1EqluQorqgC9yIqM03ePG8f4y4PJQ15KVymEkCucZ4kE81QpcOr2JkF4QLcS1oGXZvBCV2R%2BcpEE8PMYT8rxharIgWGtGJe4dx%2F5T7iW04h3CH0sABXuo3y5S7CvVR88MRQnGi%2Bf144dP1TMrLbomOOVzn53xL7zvR6N%2F6AJ06gp2kWglI9JGk7k0UKmuZroQo1fhvNKz3W%2BU9hDD9jqS9BjqkAWRgW1peCNGaNIBSO252084tTLB6Vm%2B2zlykJuWc%2Fi1v6%2FFwHl0iaxJcwLRQt88v9qFQ%2BtM3dhzq9dt63bMKDp23A%2FohWzW1Q6Sen876uk1NhW6uj7OMKV7H9secscm3KhiYJ6jUOeUV3jR82uNDO%2F4O7lwmLIjO1vB0wIjxIOxOFof9CqV%2BFE08wK7XDZt5jsZX3OwpgzyE1Rmx2gaPImmdiu5e&X-Amz-Signature=2a0b4beb6f4fcecc7303f2c61d1797589d98e778efcb77fa444a4529e83e7fcd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGYXBQG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuRfvS90qEbXNnJmc769eBVv%2BhAOuccEzRcSmDYlp8AgIhAL9PNJsK%2BVq9mwdXscoavc1cQOIR5uOBiwR3ZlRwPTFCKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgiSl2Zqs0a6Pd7TYq3AOhkUlmu3Tbz9E%2FLIYrB0Qv3LMRtqOxNSxCMR6%2FPpIylwubcERN6sHIoZE0HDZBCoIyrdqLOqUTK4Y9C0XBgQT4Hynl8%2FdBPLzcF7rG0A8%2B5I%2FKALAkWEdNCMFi%2FOrVco6JAmegW0XVnnjfERSsPtffzRU%2B%2BmtoG8WClzZpJBv3K%2FYvSLvqjJ2e6dsVoAACKH3qV%2B%2BKEaUgcdjM0cUjaeor2wz%2BT74uEemTKrW3ghFPHbggAZ0EimPlZukr0f3Gm86RAm9xOo8sQHItTB1%2Bm27xrNtQF%2BvcM0Z7ikm2hUBScu4VUjULAmR4OxsI3UIC5TB3VKJKMcsiax65AaqOwbGqL%2BghOvj39UetFrj5%2Fc3pdMMiAc47pzojGFQc8bKwAGmDw9dVhR04ixfcTsMgVu15rRbBuJvK38FZPZdPkGjgOw1EqluQorqgC9yIqM03ePG8f4y4PJQ15KVymEkCucZ4kE81QpcOr2JkF4QLcS1oGXZvBCV2R%2BcpEE8PMYT8rxharIgWGtGJe4dx%2F5T7iW04h3CH0sABXuo3y5S7CvVR88MRQnGi%2Bf144dP1TMrLbomOOVzn53xL7zvR6N%2F6AJ06gp2kWglI9JGk7k0UKmuZroQo1fhvNKz3W%2BU9hDD9jqS9BjqkAWRgW1peCNGaNIBSO252084tTLB6Vm%2B2zlykJuWc%2Fi1v6%2FFwHl0iaxJcwLRQt88v9qFQ%2BtM3dhzq9dt63bMKDp23A%2FohWzW1Q6Sen876uk1NhW6uj7OMKV7H9secscm3KhiYJ6jUOeUV3jR82uNDO%2F4O7lwmLIjO1vB0wIjxIOxOFof9CqV%2BFE08wK7XDZt5jsZX3OwpgzyE1Rmx2gaPImmdiu5e&X-Amz-Signature=93c609af5f12b3e101b05d4f99056937fd57e88d63bca80181bdab05c589123c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AGYXBQG%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T200713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuRfvS90qEbXNnJmc769eBVv%2BhAOuccEzRcSmDYlp8AgIhAL9PNJsK%2BVq9mwdXscoavc1cQOIR5uOBiwR3ZlRwPTFCKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzgiSl2Zqs0a6Pd7TYq3AOhkUlmu3Tbz9E%2FLIYrB0Qv3LMRtqOxNSxCMR6%2FPpIylwubcERN6sHIoZE0HDZBCoIyrdqLOqUTK4Y9C0XBgQT4Hynl8%2FdBPLzcF7rG0A8%2B5I%2FKALAkWEdNCMFi%2FOrVco6JAmegW0XVnnjfERSsPtffzRU%2B%2BmtoG8WClzZpJBv3K%2FYvSLvqjJ2e6dsVoAACKH3qV%2B%2BKEaUgcdjM0cUjaeor2wz%2BT74uEemTKrW3ghFPHbggAZ0EimPlZukr0f3Gm86RAm9xOo8sQHItTB1%2Bm27xrNtQF%2BvcM0Z7ikm2hUBScu4VUjULAmR4OxsI3UIC5TB3VKJKMcsiax65AaqOwbGqL%2BghOvj39UetFrj5%2Fc3pdMMiAc47pzojGFQc8bKwAGmDw9dVhR04ixfcTsMgVu15rRbBuJvK38FZPZdPkGjgOw1EqluQorqgC9yIqM03ePG8f4y4PJQ15KVymEkCucZ4kE81QpcOr2JkF4QLcS1oGXZvBCV2R%2BcpEE8PMYT8rxharIgWGtGJe4dx%2F5T7iW04h3CH0sABXuo3y5S7CvVR88MRQnGi%2Bf144dP1TMrLbomOOVzn53xL7zvR6N%2F6AJ06gp2kWglI9JGk7k0UKmuZroQo1fhvNKz3W%2BU9hDD9jqS9BjqkAWRgW1peCNGaNIBSO252084tTLB6Vm%2B2zlykJuWc%2Fi1v6%2FFwHl0iaxJcwLRQt88v9qFQ%2BtM3dhzq9dt63bMKDp23A%2FohWzW1Q6Sen876uk1NhW6uj7OMKV7H9secscm3KhiYJ6jUOeUV3jR82uNDO%2F4O7lwmLIjO1vB0wIjxIOxOFof9CqV%2BFE08wK7XDZt5jsZX3OwpgzyE1Rmx2gaPImmdiu5e&X-Amz-Signature=0dcd149e52f1cfc084111109a95edbb4d0d01bf82323afeab8c92452ef058200&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

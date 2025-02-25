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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBWRI6H%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD7mquYcz5op068x6GaA%2FC6pOenbF9h5%2B1g2Mx0RfESYQIhAKlhOKLgzRgmra61ifHrdUfFdVmT17uwb%2FE4P6laFPgyKv8DCD4QABoMNjM3NDIzMTgzODA1IgzsU7MUT7OvPmLV%2BUUq3AO97Q7b7dubcFAFksOMaxw%2FD%2BlMWSj7ZtfUyAX9twD9S%2BDL0%2FYCeJZCjX8Vs4dvcRA%2Bxg64uiz81%2BZcIvMuJuHJBP2Zq2MHxHQ0QgV%2BtEn2IZLPNDmmugzL37z4EtHS%2BN4ztQyjkO4we4hn0e7mV7sNiTLBWT%2B5piU0JzfvkbIxouji45cyDcItVIv%2F5kH2PdUPMus%2FgB4rCG9IIyLm3KN7WWOOo5SXQW0zB6YR0%2FqkUunrmhLIGyEKKDHKiNwDMKh5DUQSgWv%2BNMr1xkB0NmuMiNgiquiPHV9fwg0ciBgIkDx8Qdpo%2FfwEkPCbsbD%2F%2FnTNeVOaax%2FwxQjy8%2FxC1G7KnpbJf8ZphcG8nlrFkl%2FuePjMp55otnidkNI2mYPQzBPnRHVEbsAKIWIBR6j7g7qIZUOG%2Fu5HReGRUjR9zHPPt5FvaxbcWamTIjmUhs4zqgY838m%2FnMI1XPBNWESNkqnKvZ0XoaGXcgEzLacDqjRvKZEKdrJU7sZGjOmfkmS4JcQ6VT5L758O%2B8e74duV3f294x95kZiecUKMwbilqG0NeRMIO9hEvFPVlXGgeL%2B8afa4BCd2mTNxHkZZjzHl9JMA5ZZJQnlWuOW3EpF3%2BEuE0Uk08%2FCMcE%2FGgpAzCzDPj%2FW9BjqkASrXf8WSrAD6WOkY9pgjLZJn7YObSdrqc4kHR80%2F5k72dZ1xnU%2FODj63nPkjXNFBl%2FVelJvHzhVn04WEqyDVXnWCSGCeJLSPg%2FasGt%2FUUhjzRbVb76pK%2BCabK5gYg38GZCo%2BkzgVqXKPHneg%2BA%2FJiHD8BOE7aUTEHkzdNXsInR%2F%2Ba0DGWQE1S8JpBrTjIY7A2LWycbTP51SZ8KYxz%2FHTp5qi4lFp&X-Amz-Signature=060e260a02dcf6a50ce3495034630f0ce016730163c337618fa11f70d015f244&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBWRI6H%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD7mquYcz5op068x6GaA%2FC6pOenbF9h5%2B1g2Mx0RfESYQIhAKlhOKLgzRgmra61ifHrdUfFdVmT17uwb%2FE4P6laFPgyKv8DCD4QABoMNjM3NDIzMTgzODA1IgzsU7MUT7OvPmLV%2BUUq3AO97Q7b7dubcFAFksOMaxw%2FD%2BlMWSj7ZtfUyAX9twD9S%2BDL0%2FYCeJZCjX8Vs4dvcRA%2Bxg64uiz81%2BZcIvMuJuHJBP2Zq2MHxHQ0QgV%2BtEn2IZLPNDmmugzL37z4EtHS%2BN4ztQyjkO4we4hn0e7mV7sNiTLBWT%2B5piU0JzfvkbIxouji45cyDcItVIv%2F5kH2PdUPMus%2FgB4rCG9IIyLm3KN7WWOOo5SXQW0zB6YR0%2FqkUunrmhLIGyEKKDHKiNwDMKh5DUQSgWv%2BNMr1xkB0NmuMiNgiquiPHV9fwg0ciBgIkDx8Qdpo%2FfwEkPCbsbD%2F%2FnTNeVOaax%2FwxQjy8%2FxC1G7KnpbJf8ZphcG8nlrFkl%2FuePjMp55otnidkNI2mYPQzBPnRHVEbsAKIWIBR6j7g7qIZUOG%2Fu5HReGRUjR9zHPPt5FvaxbcWamTIjmUhs4zqgY838m%2FnMI1XPBNWESNkqnKvZ0XoaGXcgEzLacDqjRvKZEKdrJU7sZGjOmfkmS4JcQ6VT5L758O%2B8e74duV3f294x95kZiecUKMwbilqG0NeRMIO9hEvFPVlXGgeL%2B8afa4BCd2mTNxHkZZjzHl9JMA5ZZJQnlWuOW3EpF3%2BEuE0Uk08%2FCMcE%2FGgpAzCzDPj%2FW9BjqkASrXf8WSrAD6WOkY9pgjLZJn7YObSdrqc4kHR80%2F5k72dZ1xnU%2FODj63nPkjXNFBl%2FVelJvHzhVn04WEqyDVXnWCSGCeJLSPg%2FasGt%2FUUhjzRbVb76pK%2BCabK5gYg38GZCo%2BkzgVqXKPHneg%2BA%2FJiHD8BOE7aUTEHkzdNXsInR%2F%2Ba0DGWQE1S8JpBrTjIY7A2LWycbTP51SZ8KYxz%2FHTp5qi4lFp&X-Amz-Signature=0a613f490201520cebba951075a34f8312e351668f1be9abee4c45fc1ef8bc2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBWRI6H%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQD7mquYcz5op068x6GaA%2FC6pOenbF9h5%2B1g2Mx0RfESYQIhAKlhOKLgzRgmra61ifHrdUfFdVmT17uwb%2FE4P6laFPgyKv8DCD4QABoMNjM3NDIzMTgzODA1IgzsU7MUT7OvPmLV%2BUUq3AO97Q7b7dubcFAFksOMaxw%2FD%2BlMWSj7ZtfUyAX9twD9S%2BDL0%2FYCeJZCjX8Vs4dvcRA%2Bxg64uiz81%2BZcIvMuJuHJBP2Zq2MHxHQ0QgV%2BtEn2IZLPNDmmugzL37z4EtHS%2BN4ztQyjkO4we4hn0e7mV7sNiTLBWT%2B5piU0JzfvkbIxouji45cyDcItVIv%2F5kH2PdUPMus%2FgB4rCG9IIyLm3KN7WWOOo5SXQW0zB6YR0%2FqkUunrmhLIGyEKKDHKiNwDMKh5DUQSgWv%2BNMr1xkB0NmuMiNgiquiPHV9fwg0ciBgIkDx8Qdpo%2FfwEkPCbsbD%2F%2FnTNeVOaax%2FwxQjy8%2FxC1G7KnpbJf8ZphcG8nlrFkl%2FuePjMp55otnidkNI2mYPQzBPnRHVEbsAKIWIBR6j7g7qIZUOG%2Fu5HReGRUjR9zHPPt5FvaxbcWamTIjmUhs4zqgY838m%2FnMI1XPBNWESNkqnKvZ0XoaGXcgEzLacDqjRvKZEKdrJU7sZGjOmfkmS4JcQ6VT5L758O%2B8e74duV3f294x95kZiecUKMwbilqG0NeRMIO9hEvFPVlXGgeL%2B8afa4BCd2mTNxHkZZjzHl9JMA5ZZJQnlWuOW3EpF3%2BEuE0Uk08%2FCMcE%2FGgpAzCzDPj%2FW9BjqkASrXf8WSrAD6WOkY9pgjLZJn7YObSdrqc4kHR80%2F5k72dZ1xnU%2FODj63nPkjXNFBl%2FVelJvHzhVn04WEqyDVXnWCSGCeJLSPg%2FasGt%2FUUhjzRbVb76pK%2BCabK5gYg38GZCo%2BkzgVqXKPHneg%2BA%2FJiHD8BOE7aUTEHkzdNXsInR%2F%2Ba0DGWQE1S8JpBrTjIY7A2LWycbTP51SZ8KYxz%2FHTp5qi4lFp&X-Amz-Signature=e12aaeeb5dfc683c7b3309607dec0ae3db3dd49b50facc46529a62890623541b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

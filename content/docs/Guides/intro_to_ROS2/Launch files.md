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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZLG5GGU%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgn%2FTomFb%2FvSpDwe2ATQIT0NO%2FyRFXBTPtkPPXzd%2BJuAiAZ45%2FxiH9eQRNgNZANdZLanFAZ9YlRXTloN%2BkLek3YOCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyV46Z7I%2FPKjuSpuCKtwDH8m3AucWKSwl7k9MC1N7Bn059Fe70XGe66hB7%2FsI%2BCFQ23b1XD7zv1rDhYBdw2ms4ENxqhsaWSrrKroqBMm7A8Ctkbdq%2BIkTA6vZDZc2MPEUuhClBBI1%2BpsmR0hL30rHBAQDD%2FTLC0d%2FAoT%2F%2BAamPzQILhTtuVzOm9JR6H9VLavDJha8CB7hih01xJqTdXoa2Mkh9OcVyBiXnVgvhaYIA%2BTom9s248n1YjGPyf4Eu2C4vo5sng8ouva9z42o%2FkTeZQGUKWHsQFN%2BHTIBAo4IAx7ByzhDhED97jyuhQPOMWJ6pXRrLSb5Zv0sbl7gBa73dzd4EXykHLaiOtVsjD39OVnJskG6d0YYAI2Fldf0awlaQyXhwD57q0sb6V%2BxovFp7plG%2FTlSEtaCSEdVRFle5tZYQ3ej0KwKKS%2BPflFbbRpO8Ul06vrC%2BmgtJh8RbTGnnKFn1pjbKbS9YGWuU2vZh%2FVwWWjp6nbAtxF6rWxfBLR%2FECEy4ikXhVFUJ1RAXjJj5A%2BQcqAaabJHKiQ6ACOS2hOeq3g%2FsDauFXfavoZnPoQwrU0vjYcMOeVHKqp%2FRWKNrz4PaH6QlLKQG4cIwIntidpEx14TCEaHhB06c4upGB%2FAU1lJJJ5wfkD9SnEwy73pwQY6pgEyq1fG4wj9WwIYdzYubkjsmArYi19Dc%2BH2uxMenbVmJNXTZXIEhuKtIhAQnqQ1Y4Wag4ipqOQk%2B9vfwfX8SSgoGZqdFGWo4IiYV0kTmvVFXf0EZDdkRYJcampxytu8vNHT8UL4cvyLnfCrVQYZoHcJpGla0N2AVjiRom7vuWuNEvW7uHOjiHDoaGYnEswXTwPNxwiHZnj2KHwX7CqVOSbKR4ztG6ZQ&X-Amz-Signature=57ce2fcb174160451e320c6fb780c694fa8f563fc0b097f84f62a3b758c38fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZLG5GGU%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgn%2FTomFb%2FvSpDwe2ATQIT0NO%2FyRFXBTPtkPPXzd%2BJuAiAZ45%2FxiH9eQRNgNZANdZLanFAZ9YlRXTloN%2BkLek3YOCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyV46Z7I%2FPKjuSpuCKtwDH8m3AucWKSwl7k9MC1N7Bn059Fe70XGe66hB7%2FsI%2BCFQ23b1XD7zv1rDhYBdw2ms4ENxqhsaWSrrKroqBMm7A8Ctkbdq%2BIkTA6vZDZc2MPEUuhClBBI1%2BpsmR0hL30rHBAQDD%2FTLC0d%2FAoT%2F%2BAamPzQILhTtuVzOm9JR6H9VLavDJha8CB7hih01xJqTdXoa2Mkh9OcVyBiXnVgvhaYIA%2BTom9s248n1YjGPyf4Eu2C4vo5sng8ouva9z42o%2FkTeZQGUKWHsQFN%2BHTIBAo4IAx7ByzhDhED97jyuhQPOMWJ6pXRrLSb5Zv0sbl7gBa73dzd4EXykHLaiOtVsjD39OVnJskG6d0YYAI2Fldf0awlaQyXhwD57q0sb6V%2BxovFp7plG%2FTlSEtaCSEdVRFle5tZYQ3ej0KwKKS%2BPflFbbRpO8Ul06vrC%2BmgtJh8RbTGnnKFn1pjbKbS9YGWuU2vZh%2FVwWWjp6nbAtxF6rWxfBLR%2FECEy4ikXhVFUJ1RAXjJj5A%2BQcqAaabJHKiQ6ACOS2hOeq3g%2FsDauFXfavoZnPoQwrU0vjYcMOeVHKqp%2FRWKNrz4PaH6QlLKQG4cIwIntidpEx14TCEaHhB06c4upGB%2FAU1lJJJ5wfkD9SnEwy73pwQY6pgEyq1fG4wj9WwIYdzYubkjsmArYi19Dc%2BH2uxMenbVmJNXTZXIEhuKtIhAQnqQ1Y4Wag4ipqOQk%2B9vfwfX8SSgoGZqdFGWo4IiYV0kTmvVFXf0EZDdkRYJcampxytu8vNHT8UL4cvyLnfCrVQYZoHcJpGla0N2AVjiRom7vuWuNEvW7uHOjiHDoaGYnEswXTwPNxwiHZnj2KHwX7CqVOSbKR4ztG6ZQ&X-Amz-Signature=4c39b49a2b938d0829615755549710f2265dd565718f49c403776e571be4ca7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZLG5GGU%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICgn%2FTomFb%2FvSpDwe2ATQIT0NO%2FyRFXBTPtkPPXzd%2BJuAiAZ45%2FxiH9eQRNgNZANdZLanFAZ9YlRXTloN%2BkLek3YOCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyV46Z7I%2FPKjuSpuCKtwDH8m3AucWKSwl7k9MC1N7Bn059Fe70XGe66hB7%2FsI%2BCFQ23b1XD7zv1rDhYBdw2ms4ENxqhsaWSrrKroqBMm7A8Ctkbdq%2BIkTA6vZDZc2MPEUuhClBBI1%2BpsmR0hL30rHBAQDD%2FTLC0d%2FAoT%2F%2BAamPzQILhTtuVzOm9JR6H9VLavDJha8CB7hih01xJqTdXoa2Mkh9OcVyBiXnVgvhaYIA%2BTom9s248n1YjGPyf4Eu2C4vo5sng8ouva9z42o%2FkTeZQGUKWHsQFN%2BHTIBAo4IAx7ByzhDhED97jyuhQPOMWJ6pXRrLSb5Zv0sbl7gBa73dzd4EXykHLaiOtVsjD39OVnJskG6d0YYAI2Fldf0awlaQyXhwD57q0sb6V%2BxovFp7plG%2FTlSEtaCSEdVRFle5tZYQ3ej0KwKKS%2BPflFbbRpO8Ul06vrC%2BmgtJh8RbTGnnKFn1pjbKbS9YGWuU2vZh%2FVwWWjp6nbAtxF6rWxfBLR%2FECEy4ikXhVFUJ1RAXjJj5A%2BQcqAaabJHKiQ6ACOS2hOeq3g%2FsDauFXfavoZnPoQwrU0vjYcMOeVHKqp%2FRWKNrz4PaH6QlLKQG4cIwIntidpEx14TCEaHhB06c4upGB%2FAU1lJJJ5wfkD9SnEwy73pwQY6pgEyq1fG4wj9WwIYdzYubkjsmArYi19Dc%2BH2uxMenbVmJNXTZXIEhuKtIhAQnqQ1Y4Wag4ipqOQk%2B9vfwfX8SSgoGZqdFGWo4IiYV0kTmvVFXf0EZDdkRYJcampxytu8vNHT8UL4cvyLnfCrVQYZoHcJpGla0N2AVjiRom7vuWuNEvW7uHOjiHDoaGYnEswXTwPNxwiHZnj2KHwX7CqVOSbKR4ztG6ZQ&X-Amz-Signature=1447857502172caf408199f92f950159744beafde32ec52b5dc610852db1d310&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

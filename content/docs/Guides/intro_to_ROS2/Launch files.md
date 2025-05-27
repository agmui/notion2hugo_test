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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AL47NPJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXFX3WRW61MYbgKq%2FNuiobW7oEI5vZkXVY%2FXgfir7gRAiBqufb5MWGLapGIeBe1nZC18q0UWrm%2BWgPo%2BTQuJFMdyCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMPPF0HXokHwfvlmGEKtwD%2FDg2f3zob450Nj3f85MXbertL40vkEhVowWiFPVGfvuCVz9Vhnrhi3Ao9zMzYkdMqEkolnf%2FbxltsXbTNVmjQ8Yk0aSG8OZH6GRwYgVq4lrDzqUtYll89yh0Qx6eMGM25Hhl%2F574vI4e6I5Bwd6Ox%2Fh0xMC%2FHbIHsv4e05eTH%2BUfkbxh3GonrjA52Bk4eQxqGsvoL38kP50ptVtvEuRE%2BF77diVspok49dhwC4wSUMMGiialWeNZbyd7%2Ftgf%2BvMkcPSG69dMCMaH8TBTA9wkhFoj09j36eazRLlTM3GUSiuCJ3I8pv1VOLAmVeC4Mmxn%2BApx1cqVlRbqKQgu12TCgHLVsPWVEb8cgnenhd5biHn1M%2FS8%2FRP8OZgBfouJsTaWTcSv90MFsyUbV6tHqsAFMOHInZ%2FbBNwbXZX%2F5lI6Ygoy5rJn7e%2FOyFTaFudLLkO7CZFrlXAGM9ZLY%2BX%2B9g888dM6KopVDtVjS%2BMb%2F9wBaE%2BqrqTxODXnvfIszj%2BP8QIZCL9XZV3LF7A3hpxTs5RW8L7RRcRGEGuaAqqcltEgOrgORchYNXCQYWCkDRNxDu3jWJg8y8G8RVt0Fv0WbHzMG9J7Ly%2BYgsWDi3hJ9myIcQgCc2jBLc%2BaOp7KAXEw4NrVwQY6pgGsxDL7pT7ynZcp9FSXrpUL0XsZZiPpmwlkxKzHsGnuSmLxXl8DOdH58WNBSyhfSZ4L6wg5u7aYvwbiwilMjP9BM9JbyNvB9kEppwdOCCrDTBO%2FeZvMkA4Ox6s%2BgwBsRDYvIJyoYm8u3ZqAlJtctdWb4JXJbZcwHC33M%2FzJ6s2jmT%2Ft4fULWmYux8m0HsPYJb4XYoQVB45%2B%2BJrf34mVUC9XNXFynKcy&X-Amz-Signature=58209882e589564ada29c9612cee09ea48dff095e1d950290175bf81cdb2d394&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AL47NPJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXFX3WRW61MYbgKq%2FNuiobW7oEI5vZkXVY%2FXgfir7gRAiBqufb5MWGLapGIeBe1nZC18q0UWrm%2BWgPo%2BTQuJFMdyCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMPPF0HXokHwfvlmGEKtwD%2FDg2f3zob450Nj3f85MXbertL40vkEhVowWiFPVGfvuCVz9Vhnrhi3Ao9zMzYkdMqEkolnf%2FbxltsXbTNVmjQ8Yk0aSG8OZH6GRwYgVq4lrDzqUtYll89yh0Qx6eMGM25Hhl%2F574vI4e6I5Bwd6Ox%2Fh0xMC%2FHbIHsv4e05eTH%2BUfkbxh3GonrjA52Bk4eQxqGsvoL38kP50ptVtvEuRE%2BF77diVspok49dhwC4wSUMMGiialWeNZbyd7%2Ftgf%2BvMkcPSG69dMCMaH8TBTA9wkhFoj09j36eazRLlTM3GUSiuCJ3I8pv1VOLAmVeC4Mmxn%2BApx1cqVlRbqKQgu12TCgHLVsPWVEb8cgnenhd5biHn1M%2FS8%2FRP8OZgBfouJsTaWTcSv90MFsyUbV6tHqsAFMOHInZ%2FbBNwbXZX%2F5lI6Ygoy5rJn7e%2FOyFTaFudLLkO7CZFrlXAGM9ZLY%2BX%2B9g888dM6KopVDtVjS%2BMb%2F9wBaE%2BqrqTxODXnvfIszj%2BP8QIZCL9XZV3LF7A3hpxTs5RW8L7RRcRGEGuaAqqcltEgOrgORchYNXCQYWCkDRNxDu3jWJg8y8G8RVt0Fv0WbHzMG9J7Ly%2BYgsWDi3hJ9myIcQgCc2jBLc%2BaOp7KAXEw4NrVwQY6pgGsxDL7pT7ynZcp9FSXrpUL0XsZZiPpmwlkxKzHsGnuSmLxXl8DOdH58WNBSyhfSZ4L6wg5u7aYvwbiwilMjP9BM9JbyNvB9kEppwdOCCrDTBO%2FeZvMkA4Ox6s%2BgwBsRDYvIJyoYm8u3ZqAlJtctdWb4JXJbZcwHC33M%2FzJ6s2jmT%2Ft4fULWmYux8m0HsPYJb4XYoQVB45%2B%2BJrf34mVUC9XNXFynKcy&X-Amz-Signature=92a0149196d9cfe0bb3235fa32448eba2c66c6fc758a2fadfafde33eca0fc7fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AL47NPJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXFX3WRW61MYbgKq%2FNuiobW7oEI5vZkXVY%2FXgfir7gRAiBqufb5MWGLapGIeBe1nZC18q0UWrm%2BWgPo%2BTQuJFMdyCr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMPPF0HXokHwfvlmGEKtwD%2FDg2f3zob450Nj3f85MXbertL40vkEhVowWiFPVGfvuCVz9Vhnrhi3Ao9zMzYkdMqEkolnf%2FbxltsXbTNVmjQ8Yk0aSG8OZH6GRwYgVq4lrDzqUtYll89yh0Qx6eMGM25Hhl%2F574vI4e6I5Bwd6Ox%2Fh0xMC%2FHbIHsv4e05eTH%2BUfkbxh3GonrjA52Bk4eQxqGsvoL38kP50ptVtvEuRE%2BF77diVspok49dhwC4wSUMMGiialWeNZbyd7%2Ftgf%2BvMkcPSG69dMCMaH8TBTA9wkhFoj09j36eazRLlTM3GUSiuCJ3I8pv1VOLAmVeC4Mmxn%2BApx1cqVlRbqKQgu12TCgHLVsPWVEb8cgnenhd5biHn1M%2FS8%2FRP8OZgBfouJsTaWTcSv90MFsyUbV6tHqsAFMOHInZ%2FbBNwbXZX%2F5lI6Ygoy5rJn7e%2FOyFTaFudLLkO7CZFrlXAGM9ZLY%2BX%2B9g888dM6KopVDtVjS%2BMb%2F9wBaE%2BqrqTxODXnvfIszj%2BP8QIZCL9XZV3LF7A3hpxTs5RW8L7RRcRGEGuaAqqcltEgOrgORchYNXCQYWCkDRNxDu3jWJg8y8G8RVt0Fv0WbHzMG9J7Ly%2BYgsWDi3hJ9myIcQgCc2jBLc%2BaOp7KAXEw4NrVwQY6pgGsxDL7pT7ynZcp9FSXrpUL0XsZZiPpmwlkxKzHsGnuSmLxXl8DOdH58WNBSyhfSZ4L6wg5u7aYvwbiwilMjP9BM9JbyNvB9kEppwdOCCrDTBO%2FeZvMkA4Ox6s%2BgwBsRDYvIJyoYm8u3ZqAlJtctdWb4JXJbZcwHC33M%2FzJ6s2jmT%2Ft4fULWmYux8m0HsPYJb4XYoQVB45%2B%2BJrf34mVUC9XNXFynKcy&X-Amz-Signature=4ec45f8f65c72c0d5a04dbf18bfe9c67441dd333a4f950c444c253a5753aad2b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

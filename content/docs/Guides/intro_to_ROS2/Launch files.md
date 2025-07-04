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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623R756YQ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBenZEBbAHm5UY2BpdBjYT0U1KgnX0Nn73bKQvk1Ao7KAiBEYyPtYEHilaWn7iV4zHGWy%2BSQbyhVjA%2B5NktwrlqtPSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMGKeOewCcX7%2BgIr6%2BKtwD342Lx2xP7wd8BdTHIe3nj3f4KUGrrmq%2FKKuoTPzPeHazDl10%2BOdqZnrKGp%2B5Ro5pZs4ghdQesanZsz15jIgF7A86KU8p5SiWlAdd4Bc19XU0r5PhZWCDrcQSUBINoZu8lhBrFfS0ylkFr2Odhzq48CUyiCkq2Z6NeCdSDNtFCMauy%2FQs7sMCy0kaYb%2Bf269U1iOKtjdR7%2FIfsQgKo6SgGb0TXmu8DgWhQRbMyfFd4QWucBbY5qXS8HrMQ%2BjqWNXJw1ETfSYZ9p6xw8jygdl19bjewTon%2BIfoCH5USV4NCgioXpQYC5%2FPo7ZscG%2B0PRVqSzicFIIIE2NkckKxX1OV9E9Zz9vK8Eu9xt1gdWPNqWbwSAf2c00pPp3E8KDVQMUudchQLVBYpehhgfQEVpMd17r42MToLET%2BwidUn%2BK%2B7WGrHs%2FR6B5INWA7mNVDgPUYKJ4N2hXwphB3FZYjZAULVzgJxhk29b1kmt0GH%2FOtQg30x24iHE7KJSxTfqW2Kuk%2BumJF%2Bn79yk2yhU97pIxKjG8CPOJ0qHaSirMOc337GcY2FK7bCQumFlQPqwt0o1Qodlf16KaZds%2BxvYLADz31XdqBk5e5I9rgcPotmBI9YaVvdzTJmmTt4uC1ueIwlZWgwwY6pgEVmF4VJR9%2F6IJoy9UNsDfaD1KvSgnwmzudunzmAqT099YpAa94%2FOOTbd0zlq1zAlrlpddKA4IKkCKldJsh57yHjxga7zL6VCGHGqh5doOzsQ7%2BYcrAcI7zrSgUM5b%2Ffzl2zoEjrwzcm56y%2FKjj%2Flw%2FeP%2FIz6AvlUrirPa436FcTNGRqy9EvVK%2Fmg9J2ZGElD%2BEEM53j%2FS%2BtB24257uF2DtEe97qKHE&X-Amz-Signature=d60862f44a34fd3dd9d15fec67a0e7d3fdd86a583cbcf29721cbbf5b81d52f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623R756YQ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBenZEBbAHm5UY2BpdBjYT0U1KgnX0Nn73bKQvk1Ao7KAiBEYyPtYEHilaWn7iV4zHGWy%2BSQbyhVjA%2B5NktwrlqtPSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMGKeOewCcX7%2BgIr6%2BKtwD342Lx2xP7wd8BdTHIe3nj3f4KUGrrmq%2FKKuoTPzPeHazDl10%2BOdqZnrKGp%2B5Ro5pZs4ghdQesanZsz15jIgF7A86KU8p5SiWlAdd4Bc19XU0r5PhZWCDrcQSUBINoZu8lhBrFfS0ylkFr2Odhzq48CUyiCkq2Z6NeCdSDNtFCMauy%2FQs7sMCy0kaYb%2Bf269U1iOKtjdR7%2FIfsQgKo6SgGb0TXmu8DgWhQRbMyfFd4QWucBbY5qXS8HrMQ%2BjqWNXJw1ETfSYZ9p6xw8jygdl19bjewTon%2BIfoCH5USV4NCgioXpQYC5%2FPo7ZscG%2B0PRVqSzicFIIIE2NkckKxX1OV9E9Zz9vK8Eu9xt1gdWPNqWbwSAf2c00pPp3E8KDVQMUudchQLVBYpehhgfQEVpMd17r42MToLET%2BwidUn%2BK%2B7WGrHs%2FR6B5INWA7mNVDgPUYKJ4N2hXwphB3FZYjZAULVzgJxhk29b1kmt0GH%2FOtQg30x24iHE7KJSxTfqW2Kuk%2BumJF%2Bn79yk2yhU97pIxKjG8CPOJ0qHaSirMOc337GcY2FK7bCQumFlQPqwt0o1Qodlf16KaZds%2BxvYLADz31XdqBk5e5I9rgcPotmBI9YaVvdzTJmmTt4uC1ueIwlZWgwwY6pgEVmF4VJR9%2F6IJoy9UNsDfaD1KvSgnwmzudunzmAqT099YpAa94%2FOOTbd0zlq1zAlrlpddKA4IKkCKldJsh57yHjxga7zL6VCGHGqh5doOzsQ7%2BYcrAcI7zrSgUM5b%2Ffzl2zoEjrwzcm56y%2FKjj%2Flw%2FeP%2FIz6AvlUrirPa436FcTNGRqy9EvVK%2Fmg9J2ZGElD%2BEEM53j%2FS%2BtB24257uF2DtEe97qKHE&X-Amz-Signature=ef215a53b515e0cdd6e4d889117e57858b0a5c438dba119ae29241e778c3c26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623R756YQ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBenZEBbAHm5UY2BpdBjYT0U1KgnX0Nn73bKQvk1Ao7KAiBEYyPtYEHilaWn7iV4zHGWy%2BSQbyhVjA%2B5NktwrlqtPSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMGKeOewCcX7%2BgIr6%2BKtwD342Lx2xP7wd8BdTHIe3nj3f4KUGrrmq%2FKKuoTPzPeHazDl10%2BOdqZnrKGp%2B5Ro5pZs4ghdQesanZsz15jIgF7A86KU8p5SiWlAdd4Bc19XU0r5PhZWCDrcQSUBINoZu8lhBrFfS0ylkFr2Odhzq48CUyiCkq2Z6NeCdSDNtFCMauy%2FQs7sMCy0kaYb%2Bf269U1iOKtjdR7%2FIfsQgKo6SgGb0TXmu8DgWhQRbMyfFd4QWucBbY5qXS8HrMQ%2BjqWNXJw1ETfSYZ9p6xw8jygdl19bjewTon%2BIfoCH5USV4NCgioXpQYC5%2FPo7ZscG%2B0PRVqSzicFIIIE2NkckKxX1OV9E9Zz9vK8Eu9xt1gdWPNqWbwSAf2c00pPp3E8KDVQMUudchQLVBYpehhgfQEVpMd17r42MToLET%2BwidUn%2BK%2B7WGrHs%2FR6B5INWA7mNVDgPUYKJ4N2hXwphB3FZYjZAULVzgJxhk29b1kmt0GH%2FOtQg30x24iHE7KJSxTfqW2Kuk%2BumJF%2Bn79yk2yhU97pIxKjG8CPOJ0qHaSirMOc337GcY2FK7bCQumFlQPqwt0o1Qodlf16KaZds%2BxvYLADz31XdqBk5e5I9rgcPotmBI9YaVvdzTJmmTt4uC1ueIwlZWgwwY6pgEVmF4VJR9%2F6IJoy9UNsDfaD1KvSgnwmzudunzmAqT099YpAa94%2FOOTbd0zlq1zAlrlpddKA4IKkCKldJsh57yHjxga7zL6VCGHGqh5doOzsQ7%2BYcrAcI7zrSgUM5b%2Ffzl2zoEjrwzcm56y%2FKjj%2Flw%2FeP%2FIz6AvlUrirPa436FcTNGRqy9EvVK%2Fmg9J2ZGElD%2BEEM53j%2FS%2BtB24257uF2DtEe97qKHE&X-Amz-Signature=499592a56c875a55c2d050a73b8683ca3a513b618ea83d25a022a894e9404fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7YRDQK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBgAEXWkmkCSW%2FhU6hM%2BRq13RGbsQUZ1Nhvd2PW6VRIAiAqtN2fA9UCjG%2BnsK6SRr2qqjT7%2Bw6gLlGpfRGH78HMlSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnnGEZBB%2F5jS%2FHYFfKtwDZmhD2niI4vudqs%2FujeIArIMV%2FvEwNoBDKmGRMR5%2FcsQ5WsVQn6JY9zSEGjx3rY4WJmueyDWAsYuNlWT5NdDMTTPu22Uu5S%2FrXA2NynCii4kXp5RK2fMRbbozEqsX99e9Pzon2z4mg90cQidg8PkaBVZztiDrIVlJGMk4mHHV0%2Fr0Kb0mnJVLRtT%2FCLtzBGCSdPKQgzYBsBb4l11aW3M2leqlMWBU0m%2BlYEUAWc0eBIWkxLOCoW7G6zDhmUyozjtGBwrDISE3kPvaOWTFRNfK3zj4oCHbBdaUQzn1olyoKoAHkZ6KtnkoGbocTswrTd89YqDopd%2FTdA6x1dqxYphKaELblLx8M5SvdJldfVaEwf2lFitmB3WvW9Kf81HN1JS1PImVnwe%2F1zshlt5bNW25Bmg8aDxI6ok%2Bjtyr%2Fu4vYLbW7IsAJqD3QmzKPrU6jlDjagLzNlvcMHOVkmsy0ucQOQGSZrnxnlmISxH6zI0W0IdYfDcyYtlsnRGeY2DvKrg%2B4t%2B%2BMINRDIEw531jJ19VamLKEByAvQQpFQFNgUYjtC%2B6NmS6S7USthoQqwy5QYtwHeHRFe5aq8APrJvRHJbDzS8zud25uTsatOwx50bFbSCyBg6FlaC8KTx7pdgw6vKHwwY6pgE59tQgzV20u3ujQuLmaNWWgC8Lf21finmoRc19ysmf6wGUg64oBx%2Bd2xrAzvXW9Ek1EtzaY1s%2B4gknw9I35t5D1%2F2KXXIismsNGdobKoJSeqwkltWqiL4EystsXRb7OVr0L3MEfuPxsZhoDMphBRiq6gyTn1CIg9ym00fLcpUjap1ohRgiSUBziqL6tSyQb2W4b4GB88j6IsmZ047djY9nB4zYlZzL&X-Amz-Signature=37694eecb4774e387fc02d5da6077b20057640c520d84b2b711cbb4d678cfee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7YRDQK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBgAEXWkmkCSW%2FhU6hM%2BRq13RGbsQUZ1Nhvd2PW6VRIAiAqtN2fA9UCjG%2BnsK6SRr2qqjT7%2Bw6gLlGpfRGH78HMlSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnnGEZBB%2F5jS%2FHYFfKtwDZmhD2niI4vudqs%2FujeIArIMV%2FvEwNoBDKmGRMR5%2FcsQ5WsVQn6JY9zSEGjx3rY4WJmueyDWAsYuNlWT5NdDMTTPu22Uu5S%2FrXA2NynCii4kXp5RK2fMRbbozEqsX99e9Pzon2z4mg90cQidg8PkaBVZztiDrIVlJGMk4mHHV0%2Fr0Kb0mnJVLRtT%2FCLtzBGCSdPKQgzYBsBb4l11aW3M2leqlMWBU0m%2BlYEUAWc0eBIWkxLOCoW7G6zDhmUyozjtGBwrDISE3kPvaOWTFRNfK3zj4oCHbBdaUQzn1olyoKoAHkZ6KtnkoGbocTswrTd89YqDopd%2FTdA6x1dqxYphKaELblLx8M5SvdJldfVaEwf2lFitmB3WvW9Kf81HN1JS1PImVnwe%2F1zshlt5bNW25Bmg8aDxI6ok%2Bjtyr%2Fu4vYLbW7IsAJqD3QmzKPrU6jlDjagLzNlvcMHOVkmsy0ucQOQGSZrnxnlmISxH6zI0W0IdYfDcyYtlsnRGeY2DvKrg%2B4t%2B%2BMINRDIEw531jJ19VamLKEByAvQQpFQFNgUYjtC%2B6NmS6S7USthoQqwy5QYtwHeHRFe5aq8APrJvRHJbDzS8zud25uTsatOwx50bFbSCyBg6FlaC8KTx7pdgw6vKHwwY6pgE59tQgzV20u3ujQuLmaNWWgC8Lf21finmoRc19ysmf6wGUg64oBx%2Bd2xrAzvXW9Ek1EtzaY1s%2B4gknw9I35t5D1%2F2KXXIismsNGdobKoJSeqwkltWqiL4EystsXRb7OVr0L3MEfuPxsZhoDMphBRiq6gyTn1CIg9ym00fLcpUjap1ohRgiSUBziqL6tSyQb2W4b4GB88j6IsmZ047djY9nB4zYlZzL&X-Amz-Signature=14c7ed847ccadeb531706f80c4436222ae0c6439e720c6ba2f6e2a06cabbf992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7YRDQK%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T024704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICBgAEXWkmkCSW%2FhU6hM%2BRq13RGbsQUZ1Nhvd2PW6VRIAiAqtN2fA9UCjG%2BnsK6SRr2qqjT7%2Bw6gLlGpfRGH78HMlSqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnnGEZBB%2F5jS%2FHYFfKtwDZmhD2niI4vudqs%2FujeIArIMV%2FvEwNoBDKmGRMR5%2FcsQ5WsVQn6JY9zSEGjx3rY4WJmueyDWAsYuNlWT5NdDMTTPu22Uu5S%2FrXA2NynCii4kXp5RK2fMRbbozEqsX99e9Pzon2z4mg90cQidg8PkaBVZztiDrIVlJGMk4mHHV0%2Fr0Kb0mnJVLRtT%2FCLtzBGCSdPKQgzYBsBb4l11aW3M2leqlMWBU0m%2BlYEUAWc0eBIWkxLOCoW7G6zDhmUyozjtGBwrDISE3kPvaOWTFRNfK3zj4oCHbBdaUQzn1olyoKoAHkZ6KtnkoGbocTswrTd89YqDopd%2FTdA6x1dqxYphKaELblLx8M5SvdJldfVaEwf2lFitmB3WvW9Kf81HN1JS1PImVnwe%2F1zshlt5bNW25Bmg8aDxI6ok%2Bjtyr%2Fu4vYLbW7IsAJqD3QmzKPrU6jlDjagLzNlvcMHOVkmsy0ucQOQGSZrnxnlmISxH6zI0W0IdYfDcyYtlsnRGeY2DvKrg%2B4t%2B%2BMINRDIEw531jJ19VamLKEByAvQQpFQFNgUYjtC%2B6NmS6S7USthoQqwy5QYtwHeHRFe5aq8APrJvRHJbDzS8zud25uTsatOwx50bFbSCyBg6FlaC8KTx7pdgw6vKHwwY6pgE59tQgzV20u3ujQuLmaNWWgC8Lf21finmoRc19ysmf6wGUg64oBx%2Bd2xrAzvXW9Ek1EtzaY1s%2B4gknw9I35t5D1%2F2KXXIismsNGdobKoJSeqwkltWqiL4EystsXRb7OVr0L3MEfuPxsZhoDMphBRiq6gyTn1CIg9ym00fLcpUjap1ohRgiSUBziqL6tSyQb2W4b4GB88j6IsmZ047djY9nB4zYlZzL&X-Amz-Signature=46326241f16ce69314514ba36eff396b8b2a47da84902f5cffe880bd8da154f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

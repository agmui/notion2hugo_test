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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSKTKJ5L%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtvk6o8OV4eU63fqGAf3eJstgBC2gNhKk1AZEYQLIKuAIhAN506qKhDqxMYoMvFBAZJDlPvJHfUPFoQHTBCDdJiYCoKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ9U7ejiPsR6o3coEq3APcmV2Vg1clmNfhOMjSoirK%2BGLfbAC5pSbqssnAdhsx1XrbqSdGTdpK4fufmHqg9lFd7I6nMlzMUcgTMavwXQbdmbbCWRmXHbxXl8mi3Z9ZG2yEYDGz948UZ7lkSeJI1BbqlwMIizpm44gs0pW0XJE7HEVZ1IpLvx2QRDW1KnZ%2BqTvM%2FuO8jjr%2F6WZP%2FrHiTk1EGMp6hdm2B%2BL8%2ByQVEGGFTX3Kl%2FK7ROw8QJF2RaqU5G8Ps49foKi%2FhugBgAuIlsF0hQ6W1BYXPf%2FrqN9F92A%2Fb9EExwrdncC5NvLPQT3ZR9KAnNS6U%2FLKsSwU%2BtSLfkGlgshvIe%2BObxzpZt%2BwPYLiHLObOhunHsmwqc4E1LOx2ne3A0klcEbYxHXKRR4ARfqMZjaXfw8Bmmq3sE7GZ3vAlDFtfeIFdAyEfpQfKkMn4w6uACEw4giYnYs%2FiBDSq8wAxozXqL%2Fet7o%2Fz%2FqF0BKvGhyQ3caRx9BzJqoJxeMOcFqZZHM9gjBGJoI6CPaM9yO5mIuuzfzfyS2bHEt4LwfAFcmkdhAPGskg1FpE7aYxocWcjY5oxwS5Z6FB05h%2FtoodDOKh1FtWLTzACsWFWeV%2Fs5UnPOcWDZKYVx%2F6xxdKV7yoMc2Mdz7%2B%2BUj8WDC%2Bk9K%2BBjqkAVUoqi%2FX0Vh2KRfRG2CmlQTFRWnJPhXSm5Y825RqmiaxaJq8ZXbA5bSVxpb0UOmWNdr95%2FT6VNmOkpB%2Fnk3T5p1ACsVyA4QE2bAAMaUQPg01UpK%2F2RkNHvI5viaYrMHvAK5NInanFypaNrct1z769mqJsnnAmh0FxeP0qtqeCTVctKRP8wouGlLhuQ0H9u2Y5rFIF2hDjRkodxjMVMuGgopTuq70&X-Amz-Signature=d5653c8fb841f4f3e6832923e1e3032c620be004969733e194c9697e69e71d14&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSKTKJ5L%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtvk6o8OV4eU63fqGAf3eJstgBC2gNhKk1AZEYQLIKuAIhAN506qKhDqxMYoMvFBAZJDlPvJHfUPFoQHTBCDdJiYCoKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ9U7ejiPsR6o3coEq3APcmV2Vg1clmNfhOMjSoirK%2BGLfbAC5pSbqssnAdhsx1XrbqSdGTdpK4fufmHqg9lFd7I6nMlzMUcgTMavwXQbdmbbCWRmXHbxXl8mi3Z9ZG2yEYDGz948UZ7lkSeJI1BbqlwMIizpm44gs0pW0XJE7HEVZ1IpLvx2QRDW1KnZ%2BqTvM%2FuO8jjr%2F6WZP%2FrHiTk1EGMp6hdm2B%2BL8%2ByQVEGGFTX3Kl%2FK7ROw8QJF2RaqU5G8Ps49foKi%2FhugBgAuIlsF0hQ6W1BYXPf%2FrqN9F92A%2Fb9EExwrdncC5NvLPQT3ZR9KAnNS6U%2FLKsSwU%2BtSLfkGlgshvIe%2BObxzpZt%2BwPYLiHLObOhunHsmwqc4E1LOx2ne3A0klcEbYxHXKRR4ARfqMZjaXfw8Bmmq3sE7GZ3vAlDFtfeIFdAyEfpQfKkMn4w6uACEw4giYnYs%2FiBDSq8wAxozXqL%2Fet7o%2Fz%2FqF0BKvGhyQ3caRx9BzJqoJxeMOcFqZZHM9gjBGJoI6CPaM9yO5mIuuzfzfyS2bHEt4LwfAFcmkdhAPGskg1FpE7aYxocWcjY5oxwS5Z6FB05h%2FtoodDOKh1FtWLTzACsWFWeV%2Fs5UnPOcWDZKYVx%2F6xxdKV7yoMc2Mdz7%2B%2BUj8WDC%2Bk9K%2BBjqkAVUoqi%2FX0Vh2KRfRG2CmlQTFRWnJPhXSm5Y825RqmiaxaJq8ZXbA5bSVxpb0UOmWNdr95%2FT6VNmOkpB%2Fnk3T5p1ACsVyA4QE2bAAMaUQPg01UpK%2F2RkNHvI5viaYrMHvAK5NInanFypaNrct1z769mqJsnnAmh0FxeP0qtqeCTVctKRP8wouGlLhuQ0H9u2Y5rFIF2hDjRkodxjMVMuGgopTuq70&X-Amz-Signature=9dce7c82796c05472ac049773fc0751f942ed3053ede7d938c76bbf713a23262&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSKTKJ5L%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtvk6o8OV4eU63fqGAf3eJstgBC2gNhKk1AZEYQLIKuAIhAN506qKhDqxMYoMvFBAZJDlPvJHfUPFoQHTBCDdJiYCoKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyZ9U7ejiPsR6o3coEq3APcmV2Vg1clmNfhOMjSoirK%2BGLfbAC5pSbqssnAdhsx1XrbqSdGTdpK4fufmHqg9lFd7I6nMlzMUcgTMavwXQbdmbbCWRmXHbxXl8mi3Z9ZG2yEYDGz948UZ7lkSeJI1BbqlwMIizpm44gs0pW0XJE7HEVZ1IpLvx2QRDW1KnZ%2BqTvM%2FuO8jjr%2F6WZP%2FrHiTk1EGMp6hdm2B%2BL8%2ByQVEGGFTX3Kl%2FK7ROw8QJF2RaqU5G8Ps49foKi%2FhugBgAuIlsF0hQ6W1BYXPf%2FrqN9F92A%2Fb9EExwrdncC5NvLPQT3ZR9KAnNS6U%2FLKsSwU%2BtSLfkGlgshvIe%2BObxzpZt%2BwPYLiHLObOhunHsmwqc4E1LOx2ne3A0klcEbYxHXKRR4ARfqMZjaXfw8Bmmq3sE7GZ3vAlDFtfeIFdAyEfpQfKkMn4w6uACEw4giYnYs%2FiBDSq8wAxozXqL%2Fet7o%2Fz%2FqF0BKvGhyQ3caRx9BzJqoJxeMOcFqZZHM9gjBGJoI6CPaM9yO5mIuuzfzfyS2bHEt4LwfAFcmkdhAPGskg1FpE7aYxocWcjY5oxwS5Z6FB05h%2FtoodDOKh1FtWLTzACsWFWeV%2Fs5UnPOcWDZKYVx%2F6xxdKV7yoMc2Mdz7%2B%2BUj8WDC%2Bk9K%2BBjqkAVUoqi%2FX0Vh2KRfRG2CmlQTFRWnJPhXSm5Y825RqmiaxaJq8ZXbA5bSVxpb0UOmWNdr95%2FT6VNmOkpB%2Fnk3T5p1ACsVyA4QE2bAAMaUQPg01UpK%2F2RkNHvI5viaYrMHvAK5NInanFypaNrct1z769mqJsnnAmh0FxeP0qtqeCTVctKRP8wouGlLhuQ0H9u2Y5rFIF2hDjRkodxjMVMuGgopTuq70&X-Amz-Signature=7d78ce8a9961774825840c527d53120012b602bdba9b4cd07d1584a505a23631&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

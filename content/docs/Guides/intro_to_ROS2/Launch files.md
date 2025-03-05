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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFSQFK4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp%2FVtIVj3eav4p1ObYOC9FqUo%2FMwEewSQZIB5CF1Y8FAiA19N3hC45Z2O7uxO5%2B59AiOVHJr3vD6%2BgJ1ljOMXb6OiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZyrJHpoiCUjF2PvkKtwDsmoKxuEH%2FBQqf7rzTmQz1%2BIyoF2vvnTMIcbe%2Fl9vPm0ZvG8f06FEO91c1j1aFjSaEkcKL0yAGWX25zD3JodTsZw3GwN87ghOFJzq6xv8%2Ff1N9Z5p%2FphV562EcaZWdJS5VbOk3LPDIf9gt2A%2BI2Yem8pUIZuUi2tc6L%2FgjrFkQcGulWQdMxcOUTJbZ9uVpBdzVWQgJRWXJGXJSi4hfKsFBWt88IqzHiW3BgPr2QC6RX65MSMu22IqcX4bE5%2B5yQC7Z2BMzA%2FcCodJGOqOILMYmscw08Sjx2aYtIilanxOljWNNauXlEpT8pocRcsNqd6I2g%2FYL%2FDXZRM%2B6%2Bu4k5CSCnKIj214USe3oMGWGq9AHIHfRVU%2FD3oXTHWuZVAhgFOE2X2b37uSKeI9GkL%2BuBm5jyV4jdWDw9nZlYewIgreC1thGUYulmThdi5Z84EmJDHVepR4UcoMm8wxzMjPBpQHxJfByX%2F0UN70eVPnEAvvDPC3B1SN81Gl3Yx182PAsXmkpZFjroCuTxodR7lgaqNeuCTrSFufjLwh4d8%2BU1YIa2tqyMSJRxUAToWkv08ijBB2iQKtTy8EDYkH0a84YozkMkIwNMtgOC5uaahKeip8sKwbemokFewTTMLikakwueaevgY6pgHUeJjVxwT%2F9oZGrKlS6JGDhQzWwMy6Xyxub4cyO8Z81du5apVl1ANyVtXQ%2BHXBDNJUp4CF%2BFxGsbvvoBqkQZgpVLB%2B2g4cK8U6FGUNFpSZUsEAE8hI1UpwPKk3S99k1zF55qpf2%2B8fQNtxlIclbLk7zQYQIhnCn4mlIExmumtoJ8ZNlGu2U5xD%2FyAXvLpNcZQKTlmAX7U6gVY3uKxt8FCRqXquJWIx&X-Amz-Signature=b5db2db72fbd0fb612c84d22abd9fdf10f356187549785da98abef7111e60181&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFSQFK4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp%2FVtIVj3eav4p1ObYOC9FqUo%2FMwEewSQZIB5CF1Y8FAiA19N3hC45Z2O7uxO5%2B59AiOVHJr3vD6%2BgJ1ljOMXb6OiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZyrJHpoiCUjF2PvkKtwDsmoKxuEH%2FBQqf7rzTmQz1%2BIyoF2vvnTMIcbe%2Fl9vPm0ZvG8f06FEO91c1j1aFjSaEkcKL0yAGWX25zD3JodTsZw3GwN87ghOFJzq6xv8%2Ff1N9Z5p%2FphV562EcaZWdJS5VbOk3LPDIf9gt2A%2BI2Yem8pUIZuUi2tc6L%2FgjrFkQcGulWQdMxcOUTJbZ9uVpBdzVWQgJRWXJGXJSi4hfKsFBWt88IqzHiW3BgPr2QC6RX65MSMu22IqcX4bE5%2B5yQC7Z2BMzA%2FcCodJGOqOILMYmscw08Sjx2aYtIilanxOljWNNauXlEpT8pocRcsNqd6I2g%2FYL%2FDXZRM%2B6%2Bu4k5CSCnKIj214USe3oMGWGq9AHIHfRVU%2FD3oXTHWuZVAhgFOE2X2b37uSKeI9GkL%2BuBm5jyV4jdWDw9nZlYewIgreC1thGUYulmThdi5Z84EmJDHVepR4UcoMm8wxzMjPBpQHxJfByX%2F0UN70eVPnEAvvDPC3B1SN81Gl3Yx182PAsXmkpZFjroCuTxodR7lgaqNeuCTrSFufjLwh4d8%2BU1YIa2tqyMSJRxUAToWkv08ijBB2iQKtTy8EDYkH0a84YozkMkIwNMtgOC5uaahKeip8sKwbemokFewTTMLikakwueaevgY6pgHUeJjVxwT%2F9oZGrKlS6JGDhQzWwMy6Xyxub4cyO8Z81du5apVl1ANyVtXQ%2BHXBDNJUp4CF%2BFxGsbvvoBqkQZgpVLB%2B2g4cK8U6FGUNFpSZUsEAE8hI1UpwPKk3S99k1zF55qpf2%2B8fQNtxlIclbLk7zQYQIhnCn4mlIExmumtoJ8ZNlGu2U5xD%2FyAXvLpNcZQKTlmAX7U6gVY3uKxt8FCRqXquJWIx&X-Amz-Signature=52f83ea323f4e601df6f028fa66c32a6080195262f959d562b87b4b4308fcd3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFSQFK4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGp%2FVtIVj3eav4p1ObYOC9FqUo%2FMwEewSQZIB5CF1Y8FAiA19N3hC45Z2O7uxO5%2B59AiOVHJr3vD6%2BgJ1ljOMXb6OiqIBAj7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZyrJHpoiCUjF2PvkKtwDsmoKxuEH%2FBQqf7rzTmQz1%2BIyoF2vvnTMIcbe%2Fl9vPm0ZvG8f06FEO91c1j1aFjSaEkcKL0yAGWX25zD3JodTsZw3GwN87ghOFJzq6xv8%2Ff1N9Z5p%2FphV562EcaZWdJS5VbOk3LPDIf9gt2A%2BI2Yem8pUIZuUi2tc6L%2FgjrFkQcGulWQdMxcOUTJbZ9uVpBdzVWQgJRWXJGXJSi4hfKsFBWt88IqzHiW3BgPr2QC6RX65MSMu22IqcX4bE5%2B5yQC7Z2BMzA%2FcCodJGOqOILMYmscw08Sjx2aYtIilanxOljWNNauXlEpT8pocRcsNqd6I2g%2FYL%2FDXZRM%2B6%2Bu4k5CSCnKIj214USe3oMGWGq9AHIHfRVU%2FD3oXTHWuZVAhgFOE2X2b37uSKeI9GkL%2BuBm5jyV4jdWDw9nZlYewIgreC1thGUYulmThdi5Z84EmJDHVepR4UcoMm8wxzMjPBpQHxJfByX%2F0UN70eVPnEAvvDPC3B1SN81Gl3Yx182PAsXmkpZFjroCuTxodR7lgaqNeuCTrSFufjLwh4d8%2BU1YIa2tqyMSJRxUAToWkv08ijBB2iQKtTy8EDYkH0a84YozkMkIwNMtgOC5uaahKeip8sKwbemokFewTTMLikakwueaevgY6pgHUeJjVxwT%2F9oZGrKlS6JGDhQzWwMy6Xyxub4cyO8Z81du5apVl1ANyVtXQ%2BHXBDNJUp4CF%2BFxGsbvvoBqkQZgpVLB%2B2g4cK8U6FGUNFpSZUsEAE8hI1UpwPKk3S99k1zF55qpf2%2B8fQNtxlIclbLk7zQYQIhnCn4mlIExmumtoJ8ZNlGu2U5xD%2FyAXvLpNcZQKTlmAX7U6gVY3uKxt8FCRqXquJWIx&X-Amz-Signature=be7b0017804908feba9810d23779afa4341f533c8c4c0d07b268934c31d4f4dd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

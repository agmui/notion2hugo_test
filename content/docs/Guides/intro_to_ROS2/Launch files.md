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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EPE3OSL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLatu0g1dkOrOgR0avC3qfwUR0R7Xfytvjc2d6oqrDRwIhAKgRQc%2Fj0yNuzneL5EsdpGAwJ1iXqS5o5YzkW8Qtvti0KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igytu5QUTRZEkgm8ytAq3AOjLJp%2F1Q5ov5Mpa6LIQElcyam2zmKy1Fv3R%2Bx6STptUSdnnL1e8rr%2BWqiiwv0tqTvenOGna%2FUqeDBJ3uQoykCqK3u0bpP0LtYTiE6wkbzByho%2BSdVCL5eA%2BzJ9ppbbJF%2B6bjZaXt%2BVDdp6jE97C%2B1iLMYy2xbQVJiPz66W%2FdDUfVesyNxY91S6h6HUqo8l1zRsIz4ejwRtI6j%2BbAd7xB%2B3FfknQnl4MrfXNAxO5h1YDbZD18TKGoo6dEL%2F0SpVBhw5CYHT7ZrJe3BDzdhKKXBLdRD%2Frs49ztBJ0C6qUzh7%2BoFyD86fuwhTpqyaXD0P05KXIo4goSQt58bzTtDo0YyV6jSyYRGz%2BtSDnzMj2%2FhYkpQcZEUCXDxBcPWKSMTpT8wn9Iy7%2FKp4cBxntTPaiVUfSsSdQA5OIYSu1qb4iaLbwFHBVohES2SHB7CjXeJCnc0tGTwV1pix2bDqK82XivSGJcH6CfwwWqc%2BP14f6jhW4zGCTogqtK38cPq0a44w37xZirRU81aNbIniF0FbLALPhAfQ5alzOfTOdH9JYI7s1P0GVFXhBj45lCyjUiZxUmevna90C%2BMrcYagvAfcyeXEfej2Djo3nIcfu7MEXo%2FrPlnM9NlCZg0XrYrCsjCVtLbDBjqkAUSdV52KhUX7nRaV7fM7mRcybcMN64RtBtD3wkgeZNPsSWmpyyZQi6iuVhqizCZ6w91ehVuPO71jvGPvNyepbZNF6jjklxQjoW%2BFsVcWHAaNpFJx4XO6ocTJ1qntQmAAH7myfzHVHO7BPRprYapGRL00gQ0IeF89ymQ73ocu%2B8EwH7AT8F4lrPqxw8bizb6mLvrYextvbqtK3TphaeGw0ZeZmKII&X-Amz-Signature=f3d15dd5433efffe611cc07fde8f069eb540c66f4c489adb688c8a9347dee615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EPE3OSL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLatu0g1dkOrOgR0avC3qfwUR0R7Xfytvjc2d6oqrDRwIhAKgRQc%2Fj0yNuzneL5EsdpGAwJ1iXqS5o5YzkW8Qtvti0KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igytu5QUTRZEkgm8ytAq3AOjLJp%2F1Q5ov5Mpa6LIQElcyam2zmKy1Fv3R%2Bx6STptUSdnnL1e8rr%2BWqiiwv0tqTvenOGna%2FUqeDBJ3uQoykCqK3u0bpP0LtYTiE6wkbzByho%2BSdVCL5eA%2BzJ9ppbbJF%2B6bjZaXt%2BVDdp6jE97C%2B1iLMYy2xbQVJiPz66W%2FdDUfVesyNxY91S6h6HUqo8l1zRsIz4ejwRtI6j%2BbAd7xB%2B3FfknQnl4MrfXNAxO5h1YDbZD18TKGoo6dEL%2F0SpVBhw5CYHT7ZrJe3BDzdhKKXBLdRD%2Frs49ztBJ0C6qUzh7%2BoFyD86fuwhTpqyaXD0P05KXIo4goSQt58bzTtDo0YyV6jSyYRGz%2BtSDnzMj2%2FhYkpQcZEUCXDxBcPWKSMTpT8wn9Iy7%2FKp4cBxntTPaiVUfSsSdQA5OIYSu1qb4iaLbwFHBVohES2SHB7CjXeJCnc0tGTwV1pix2bDqK82XivSGJcH6CfwwWqc%2BP14f6jhW4zGCTogqtK38cPq0a44w37xZirRU81aNbIniF0FbLALPhAfQ5alzOfTOdH9JYI7s1P0GVFXhBj45lCyjUiZxUmevna90C%2BMrcYagvAfcyeXEfej2Djo3nIcfu7MEXo%2FrPlnM9NlCZg0XrYrCsjCVtLbDBjqkAUSdV52KhUX7nRaV7fM7mRcybcMN64RtBtD3wkgeZNPsSWmpyyZQi6iuVhqizCZ6w91ehVuPO71jvGPvNyepbZNF6jjklxQjoW%2BFsVcWHAaNpFJx4XO6ocTJ1qntQmAAH7myfzHVHO7BPRprYapGRL00gQ0IeF89ymQ73ocu%2B8EwH7AT8F4lrPqxw8bizb6mLvrYextvbqtK3TphaeGw0ZeZmKII&X-Amz-Signature=ac6d93cf3c06dac428b62ce315c720ed20d38c5add276aa2991344cf4d7d1151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EPE3OSL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLatu0g1dkOrOgR0avC3qfwUR0R7Xfytvjc2d6oqrDRwIhAKgRQc%2Fj0yNuzneL5EsdpGAwJ1iXqS5o5YzkW8Qtvti0KogECJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igytu5QUTRZEkgm8ytAq3AOjLJp%2F1Q5ov5Mpa6LIQElcyam2zmKy1Fv3R%2Bx6STptUSdnnL1e8rr%2BWqiiwv0tqTvenOGna%2FUqeDBJ3uQoykCqK3u0bpP0LtYTiE6wkbzByho%2BSdVCL5eA%2BzJ9ppbbJF%2B6bjZaXt%2BVDdp6jE97C%2B1iLMYy2xbQVJiPz66W%2FdDUfVesyNxY91S6h6HUqo8l1zRsIz4ejwRtI6j%2BbAd7xB%2B3FfknQnl4MrfXNAxO5h1YDbZD18TKGoo6dEL%2F0SpVBhw5CYHT7ZrJe3BDzdhKKXBLdRD%2Frs49ztBJ0C6qUzh7%2BoFyD86fuwhTpqyaXD0P05KXIo4goSQt58bzTtDo0YyV6jSyYRGz%2BtSDnzMj2%2FhYkpQcZEUCXDxBcPWKSMTpT8wn9Iy7%2FKp4cBxntTPaiVUfSsSdQA5OIYSu1qb4iaLbwFHBVohES2SHB7CjXeJCnc0tGTwV1pix2bDqK82XivSGJcH6CfwwWqc%2BP14f6jhW4zGCTogqtK38cPq0a44w37xZirRU81aNbIniF0FbLALPhAfQ5alzOfTOdH9JYI7s1P0GVFXhBj45lCyjUiZxUmevna90C%2BMrcYagvAfcyeXEfej2Djo3nIcfu7MEXo%2FrPlnM9NlCZg0XrYrCsjCVtLbDBjqkAUSdV52KhUX7nRaV7fM7mRcybcMN64RtBtD3wkgeZNPsSWmpyyZQi6iuVhqizCZ6w91ehVuPO71jvGPvNyepbZNF6jjklxQjoW%2BFsVcWHAaNpFJx4XO6ocTJ1qntQmAAH7myfzHVHO7BPRprYapGRL00gQ0IeF89ymQ73ocu%2B8EwH7AT8F4lrPqxw8bizb6mLvrYextvbqtK3TphaeGw0ZeZmKII&X-Amz-Signature=b0b3ace37125c1967d069ddf4e2d2357c97a955e1166d11e833c09f62bfa58e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

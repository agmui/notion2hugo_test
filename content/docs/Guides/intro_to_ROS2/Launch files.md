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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ57IY6Y%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyBit3As74N6c9RWLQ6eXRaGYP6Vdisr7nhzUEBpg%2FgAiAzs4L6FHJpgysJSbmHySspvkRF3kD7VJNMRJ66MbHy%2FiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfuUdR9QpEKIpnHwwKtwDerA27z%2BCz6Nf%2BYQLojx8RyHdS98ZQKD11%2B2jUhoRQy2M2%2B5VT%2B67U5YkO5V9tAdCcxdbl80i%2BHJhjQ41mIgXLyZ6BEKbPLT0m7dvic148JNZsKwcpVdnyCVHd7yOyCMeUEjtRo2XLOO%2BmgJ%2Bc9FBBgKZLI%2BSDpAD4N9pxN50A05a2KKqgYPTnLAkVwWDSHR324ExRCIJ2PSxKiLi1cQroGslmxSnnSn5%2FEs%2BsCj%2FvA4jfU5FkorfmbK2aLZebF8Oe5ZgodhRFVH873iyfcwqGT6AEhQXY1jGfCvd3GUWuimHyD%2BuHL1fvEnIRU%2FRwFBtSo%2BxHV6TIvRtFFFjyiCCYL%2BplMN%2BDXwP85Q%2BkUzRj2%2BqSePHx%2ByYFA8Fhsl%2BfFe6XQmo4ch7vTZXDpxhFTWn6cyWUzkcqn9Xlm6oyJz%2BnnVHANgWFE7UUeieULL7WPtVowaIBL%2B8lXvAQrFexrLEe2wpFXim3Lsx2FJiYQ5LqDLb9fYJeCIzLSlICsgYTCCPwDmMnvteCwG7phPPFHBxUcHjP3b%2FC5BJ9RmvvOV8OC5TeV1IUgr8M0P0Fja%2BKA0aTVFUAhfUcx%2FC0iOuuiLluNyNzuUt13fU2%2BgHQSFdQrCZ2REky701vmLDEL8w9NefvQY6pgFu3m9l3brmpoLQ1uBdQuc6Bt2ZxiRiHgRZNQMAq9Gnu8DoTA%2BeHzUQJXjtGvCODJAep0y1JKdUopwcw0%2FTk56gOYAeEER5kunxyvQi1ifz9mQIJ11KZDkHXf6LeR7cJoPusMesDMe5mls96mkQTocZlfMLxBynYWBquC7Ok7nmR8GWoASsl0MbpBoMjeBqwW%2BFdY0i33MqM3gFrn7I8kvOqj2Q6fYE&X-Amz-Signature=23a78f00f40a64d341a3e3d3e1bd30a6dd4728b699e3fff55c4b20b12c951d69&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ57IY6Y%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyBit3As74N6c9RWLQ6eXRaGYP6Vdisr7nhzUEBpg%2FgAiAzs4L6FHJpgysJSbmHySspvkRF3kD7VJNMRJ66MbHy%2FiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfuUdR9QpEKIpnHwwKtwDerA27z%2BCz6Nf%2BYQLojx8RyHdS98ZQKD11%2B2jUhoRQy2M2%2B5VT%2B67U5YkO5V9tAdCcxdbl80i%2BHJhjQ41mIgXLyZ6BEKbPLT0m7dvic148JNZsKwcpVdnyCVHd7yOyCMeUEjtRo2XLOO%2BmgJ%2Bc9FBBgKZLI%2BSDpAD4N9pxN50A05a2KKqgYPTnLAkVwWDSHR324ExRCIJ2PSxKiLi1cQroGslmxSnnSn5%2FEs%2BsCj%2FvA4jfU5FkorfmbK2aLZebF8Oe5ZgodhRFVH873iyfcwqGT6AEhQXY1jGfCvd3GUWuimHyD%2BuHL1fvEnIRU%2FRwFBtSo%2BxHV6TIvRtFFFjyiCCYL%2BplMN%2BDXwP85Q%2BkUzRj2%2BqSePHx%2ByYFA8Fhsl%2BfFe6XQmo4ch7vTZXDpxhFTWn6cyWUzkcqn9Xlm6oyJz%2BnnVHANgWFE7UUeieULL7WPtVowaIBL%2B8lXvAQrFexrLEe2wpFXim3Lsx2FJiYQ5LqDLb9fYJeCIzLSlICsgYTCCPwDmMnvteCwG7phPPFHBxUcHjP3b%2FC5BJ9RmvvOV8OC5TeV1IUgr8M0P0Fja%2BKA0aTVFUAhfUcx%2FC0iOuuiLluNyNzuUt13fU2%2BgHQSFdQrCZ2REky701vmLDEL8w9NefvQY6pgFu3m9l3brmpoLQ1uBdQuc6Bt2ZxiRiHgRZNQMAq9Gnu8DoTA%2BeHzUQJXjtGvCODJAep0y1JKdUopwcw0%2FTk56gOYAeEER5kunxyvQi1ifz9mQIJ11KZDkHXf6LeR7cJoPusMesDMe5mls96mkQTocZlfMLxBynYWBquC7Ok7nmR8GWoASsl0MbpBoMjeBqwW%2BFdY0i33MqM3gFrn7I8kvOqj2Q6fYE&X-Amz-Signature=3c5d20385dd2f3cf3bcb5a27e34ab1c233e51a1dd99292b38edafd70a8e30686&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ57IY6Y%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T003829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFyBit3As74N6c9RWLQ6eXRaGYP6Vdisr7nhzUEBpg%2FgAiAzs4L6FHJpgysJSbmHySspvkRF3kD7VJNMRJ66MbHy%2FiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfuUdR9QpEKIpnHwwKtwDerA27z%2BCz6Nf%2BYQLojx8RyHdS98ZQKD11%2B2jUhoRQy2M2%2B5VT%2B67U5YkO5V9tAdCcxdbl80i%2BHJhjQ41mIgXLyZ6BEKbPLT0m7dvic148JNZsKwcpVdnyCVHd7yOyCMeUEjtRo2XLOO%2BmgJ%2Bc9FBBgKZLI%2BSDpAD4N9pxN50A05a2KKqgYPTnLAkVwWDSHR324ExRCIJ2PSxKiLi1cQroGslmxSnnSn5%2FEs%2BsCj%2FvA4jfU5FkorfmbK2aLZebF8Oe5ZgodhRFVH873iyfcwqGT6AEhQXY1jGfCvd3GUWuimHyD%2BuHL1fvEnIRU%2FRwFBtSo%2BxHV6TIvRtFFFjyiCCYL%2BplMN%2BDXwP85Q%2BkUzRj2%2BqSePHx%2ByYFA8Fhsl%2BfFe6XQmo4ch7vTZXDpxhFTWn6cyWUzkcqn9Xlm6oyJz%2BnnVHANgWFE7UUeieULL7WPtVowaIBL%2B8lXvAQrFexrLEe2wpFXim3Lsx2FJiYQ5LqDLb9fYJeCIzLSlICsgYTCCPwDmMnvteCwG7phPPFHBxUcHjP3b%2FC5BJ9RmvvOV8OC5TeV1IUgr8M0P0Fja%2BKA0aTVFUAhfUcx%2FC0iOuuiLluNyNzuUt13fU2%2BgHQSFdQrCZ2REky701vmLDEL8w9NefvQY6pgFu3m9l3brmpoLQ1uBdQuc6Bt2ZxiRiHgRZNQMAq9Gnu8DoTA%2BeHzUQJXjtGvCODJAep0y1JKdUopwcw0%2FTk56gOYAeEER5kunxyvQi1ifz9mQIJ11KZDkHXf6LeR7cJoPusMesDMe5mls96mkQTocZlfMLxBynYWBquC7Ok7nmR8GWoASsl0MbpBoMjeBqwW%2BFdY0i33MqM3gFrn7I8kvOqj2Q6fYE&X-Amz-Signature=c8664e7c0ca0d79c8889930294c9b8a1ffcd4c52158ec63b49713a4d6faf5ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

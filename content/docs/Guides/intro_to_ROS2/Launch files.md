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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXATJURA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsbXfbcjke7lpBgclAiS2%2Fy8EKuwcVV7NJI7Wk5MReUgIhANFjtcFiRpNunC9fWamy61oOq1%2FFvs9eOGIkIjtoQcJvKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwucPYO6dmjy87%2Fcfoq3AN9KLcPtDutggCLwQxahadwrIK61ku2aj%2F%2BaO0o9D7IYY%2BlkzF7IImzqtZgJaBpUL0KVe3tOOsuySlagdSI6T50uKmnAs6i9KOOQz2vE01Y%2B%2BkcnVuEJGo3TacbjeDFjv1iYUHd%2BurlEdllQj31oJcyAzVjAN0Vlw5mzKWdr9fohp5yAUt8zcynpeMOddb8fT73e%2Bv7rcV4yfHY9d0F5I4KQgOEkmhbAW4NT2%2BLFNL52xPBTgVLOLkPOk9sbkj3c76N9Tpy3YaJ9Lmd0LfQqWHRX%2F5uJMvSRYoZFR5fANYUEa4TLnOlq8urxrB24MMcknD1DTTTfR%2B28h5mJAF78DDbO4x6nW%2FR7MuFNUdFkGSBTaOCJmXBjTlNSzJ8zpm%2Bz1O5JiorASgEqVgxMRKXOKv7MlTqhxG9NFhL4%2B%2BsqwmUdh15NtaR9LhF6E7I0u48dv3Gcw5d1Z3ofqJMJ8NIA2tfieLqJkRExVS4pC%2BTtLW9RpZEfbgS5%2BdeoZzhnJa9wrBpGRmPQdb6WZ3F5SxImEguAGLzMNPcauFaVuHPPCOE6LvhHVE7vVBvS0lukhXp4uj40qVyoTYf6fGxdsL5nkq%2FgGTUW3QfXYS7WPVhjynMdkxKDgjeCaiCNbbBtzDtnuzBBjqkAVwHww1DJ%2BgAUi%2BK8RlAFBoCV%2FSUazsRjLaWpYpseqUfrQtknVIWGp4ECIWOAhQQhlYot0RJyUXszENuof%2BTgOcp6paxV7rmtEn97vyr3nB3mJpE2Y4XmQO9SUG87Z%2BIRNwehLCY52ka7CgCT8y38%2BxPixwNelK6CtYvRVe8eBYMMHcHYo30t%2FmKrY0rSQhY7xg19M5Dg%2F10taGwDDBgMvw0teGD&X-Amz-Signature=51f2f93e27f90c030262e31a6c8ca6cf736d05fec585b2c2a3704085816ea53f&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXATJURA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsbXfbcjke7lpBgclAiS2%2Fy8EKuwcVV7NJI7Wk5MReUgIhANFjtcFiRpNunC9fWamy61oOq1%2FFvs9eOGIkIjtoQcJvKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwucPYO6dmjy87%2Fcfoq3AN9KLcPtDutggCLwQxahadwrIK61ku2aj%2F%2BaO0o9D7IYY%2BlkzF7IImzqtZgJaBpUL0KVe3tOOsuySlagdSI6T50uKmnAs6i9KOOQz2vE01Y%2B%2BkcnVuEJGo3TacbjeDFjv1iYUHd%2BurlEdllQj31oJcyAzVjAN0Vlw5mzKWdr9fohp5yAUt8zcynpeMOddb8fT73e%2Bv7rcV4yfHY9d0F5I4KQgOEkmhbAW4NT2%2BLFNL52xPBTgVLOLkPOk9sbkj3c76N9Tpy3YaJ9Lmd0LfQqWHRX%2F5uJMvSRYoZFR5fANYUEa4TLnOlq8urxrB24MMcknD1DTTTfR%2B28h5mJAF78DDbO4x6nW%2FR7MuFNUdFkGSBTaOCJmXBjTlNSzJ8zpm%2Bz1O5JiorASgEqVgxMRKXOKv7MlTqhxG9NFhL4%2B%2BsqwmUdh15NtaR9LhF6E7I0u48dv3Gcw5d1Z3ofqJMJ8NIA2tfieLqJkRExVS4pC%2BTtLW9RpZEfbgS5%2BdeoZzhnJa9wrBpGRmPQdb6WZ3F5SxImEguAGLzMNPcauFaVuHPPCOE6LvhHVE7vVBvS0lukhXp4uj40qVyoTYf6fGxdsL5nkq%2FgGTUW3QfXYS7WPVhjynMdkxKDgjeCaiCNbbBtzDtnuzBBjqkAVwHww1DJ%2BgAUi%2BK8RlAFBoCV%2FSUazsRjLaWpYpseqUfrQtknVIWGp4ECIWOAhQQhlYot0RJyUXszENuof%2BTgOcp6paxV7rmtEn97vyr3nB3mJpE2Y4XmQO9SUG87Z%2BIRNwehLCY52ka7CgCT8y38%2BxPixwNelK6CtYvRVe8eBYMMHcHYo30t%2FmKrY0rSQhY7xg19M5Dg%2F10taGwDDBgMvw0teGD&X-Amz-Signature=3a15155e9a9e555d8b499de6489d96c8c00c03580396626d85dc86cbb14244f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXATJURA%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsbXfbcjke7lpBgclAiS2%2Fy8EKuwcVV7NJI7Wk5MReUgIhANFjtcFiRpNunC9fWamy61oOq1%2FFvs9eOGIkIjtoQcJvKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwucPYO6dmjy87%2Fcfoq3AN9KLcPtDutggCLwQxahadwrIK61ku2aj%2F%2BaO0o9D7IYY%2BlkzF7IImzqtZgJaBpUL0KVe3tOOsuySlagdSI6T50uKmnAs6i9KOOQz2vE01Y%2B%2BkcnVuEJGo3TacbjeDFjv1iYUHd%2BurlEdllQj31oJcyAzVjAN0Vlw5mzKWdr9fohp5yAUt8zcynpeMOddb8fT73e%2Bv7rcV4yfHY9d0F5I4KQgOEkmhbAW4NT2%2BLFNL52xPBTgVLOLkPOk9sbkj3c76N9Tpy3YaJ9Lmd0LfQqWHRX%2F5uJMvSRYoZFR5fANYUEa4TLnOlq8urxrB24MMcknD1DTTTfR%2B28h5mJAF78DDbO4x6nW%2FR7MuFNUdFkGSBTaOCJmXBjTlNSzJ8zpm%2Bz1O5JiorASgEqVgxMRKXOKv7MlTqhxG9NFhL4%2B%2BsqwmUdh15NtaR9LhF6E7I0u48dv3Gcw5d1Z3ofqJMJ8NIA2tfieLqJkRExVS4pC%2BTtLW9RpZEfbgS5%2BdeoZzhnJa9wrBpGRmPQdb6WZ3F5SxImEguAGLzMNPcauFaVuHPPCOE6LvhHVE7vVBvS0lukhXp4uj40qVyoTYf6fGxdsL5nkq%2FgGTUW3QfXYS7WPVhjynMdkxKDgjeCaiCNbbBtzDtnuzBBjqkAVwHww1DJ%2BgAUi%2BK8RlAFBoCV%2FSUazsRjLaWpYpseqUfrQtknVIWGp4ECIWOAhQQhlYot0RJyUXszENuof%2BTgOcp6paxV7rmtEn97vyr3nB3mJpE2Y4XmQO9SUG87Z%2BIRNwehLCY52ka7CgCT8y38%2BxPixwNelK6CtYvRVe8eBYMMHcHYo30t%2FmKrY0rSQhY7xg19M5Dg%2F10taGwDDBgMvw0teGD&X-Amz-Signature=cdc3354281929f3b57fc69bafdeaffc1540e753b26cc8b78804c279b6b9a47fe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

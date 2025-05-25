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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEMREICD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC3PnFTLFblEQBtaIWr52JQVx%2Ft945V6fCOv8dOzAeZWQIhALtlQvXeuUI191IcbrVnNMGwg7IoI2vCUHGies1nQ%2FclKv8DCCYQABoMNjM3NDIzMTgzODA1Igw3lXLQTJZ%2FoggsYKwq3APOyeZ2ajWGoRMRYCBaPGO3U5lCcanU5PNEude%2B688i7vRmuMz1IklOyPvFrQxEsImeSUSbjvm5UESDTa89PrnyGBk0zGYqJWjmt%2BlFKrOHQkSG%2BG1A6agsc4voUBVC9naMXscb0fwfrNu1iYf0Vi4Jy8Rd9pAIGke9EQOyGpwZyYao1DYCvrIc1MMXmqboFRK%2F8VyMw9FaMRy4TTeWIOsGT7eLGIc%2FcpA09QwlNdQhLahTHnN9Dhh2hDdoYza4N92MPxXt2mmtQkSRto95aBge4KvOI9gUxUv2QDCyjkVaDvCZpQqQVOpnlwmOW8GONrbbi34Furr7w9thFZ9wwOjJRmJ%2BR3k7ePExvHmlwlH9nppjCdGgXbS8jXjEyJeOBKpmMnkotBWKlprRVexONYFvMsbuhEc3%2F4Xl8rR6A7u6qE2NtlNCwZqgAXKHuH8Qsc1DEjULr7ylfiF6BlLyKNrlHJSAPB%2F2TQaLs8VJ3FQSCqdQzO7GrPbn7V9c4%2BeoXgZimz6b3sGXqvpXn5p%2B1XBHR9qkkBdJ4xUp1oV77b6gtdDUXeCbfNcODvLjXnokhijwGxULQvRWahT5%2B85%2BS9C2DIJPPR3FL0lPOs8Ol7lTDlx62fawCv1EqjFSWjDsuMrBBjqkAUAPz9Z2I9PKYYu%2F%2BTXge%2FuUM92v8dATaL%2FzJONrlvSiF2NDnEkP42jjC8D9sWGTwWgbeq5kzNEp%2FwRy6MmrHi5N%2Blg33Yym8SmvhUgcsjXsYo70cvH0f%2FR5W9bwXs1U0q6pEkSznI7ps5Wo%2FfSMAkVYEGgMui%2F%2Fu7WG29F5Qmqpe0xw807v%2FTeAas0NUPML4yyymYYw95MHiCMPqUaNuy1oagvE&X-Amz-Signature=222c382ec26c0b7c3f2cc1abd354f1a02f084547c45f4c9cd6e592aa29c0433b&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEMREICD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC3PnFTLFblEQBtaIWr52JQVx%2Ft945V6fCOv8dOzAeZWQIhALtlQvXeuUI191IcbrVnNMGwg7IoI2vCUHGies1nQ%2FclKv8DCCYQABoMNjM3NDIzMTgzODA1Igw3lXLQTJZ%2FoggsYKwq3APOyeZ2ajWGoRMRYCBaPGO3U5lCcanU5PNEude%2B688i7vRmuMz1IklOyPvFrQxEsImeSUSbjvm5UESDTa89PrnyGBk0zGYqJWjmt%2BlFKrOHQkSG%2BG1A6agsc4voUBVC9naMXscb0fwfrNu1iYf0Vi4Jy8Rd9pAIGke9EQOyGpwZyYao1DYCvrIc1MMXmqboFRK%2F8VyMw9FaMRy4TTeWIOsGT7eLGIc%2FcpA09QwlNdQhLahTHnN9Dhh2hDdoYza4N92MPxXt2mmtQkSRto95aBge4KvOI9gUxUv2QDCyjkVaDvCZpQqQVOpnlwmOW8GONrbbi34Furr7w9thFZ9wwOjJRmJ%2BR3k7ePExvHmlwlH9nppjCdGgXbS8jXjEyJeOBKpmMnkotBWKlprRVexONYFvMsbuhEc3%2F4Xl8rR6A7u6qE2NtlNCwZqgAXKHuH8Qsc1DEjULr7ylfiF6BlLyKNrlHJSAPB%2F2TQaLs8VJ3FQSCqdQzO7GrPbn7V9c4%2BeoXgZimz6b3sGXqvpXn5p%2B1XBHR9qkkBdJ4xUp1oV77b6gtdDUXeCbfNcODvLjXnokhijwGxULQvRWahT5%2B85%2BS9C2DIJPPR3FL0lPOs8Ol7lTDlx62fawCv1EqjFSWjDsuMrBBjqkAUAPz9Z2I9PKYYu%2F%2BTXge%2FuUM92v8dATaL%2FzJONrlvSiF2NDnEkP42jjC8D9sWGTwWgbeq5kzNEp%2FwRy6MmrHi5N%2Blg33Yym8SmvhUgcsjXsYo70cvH0f%2FR5W9bwXs1U0q6pEkSznI7ps5Wo%2FfSMAkVYEGgMui%2F%2Fu7WG29F5Qmqpe0xw807v%2FTeAas0NUPML4yyymYYw95MHiCMPqUaNuy1oagvE&X-Amz-Signature=257e3ecdbedffa4731f0cb0990ec2542c6087dbc6797150a402d544e89d41c5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEMREICD%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQC3PnFTLFblEQBtaIWr52JQVx%2Ft945V6fCOv8dOzAeZWQIhALtlQvXeuUI191IcbrVnNMGwg7IoI2vCUHGies1nQ%2FclKv8DCCYQABoMNjM3NDIzMTgzODA1Igw3lXLQTJZ%2FoggsYKwq3APOyeZ2ajWGoRMRYCBaPGO3U5lCcanU5PNEude%2B688i7vRmuMz1IklOyPvFrQxEsImeSUSbjvm5UESDTa89PrnyGBk0zGYqJWjmt%2BlFKrOHQkSG%2BG1A6agsc4voUBVC9naMXscb0fwfrNu1iYf0Vi4Jy8Rd9pAIGke9EQOyGpwZyYao1DYCvrIc1MMXmqboFRK%2F8VyMw9FaMRy4TTeWIOsGT7eLGIc%2FcpA09QwlNdQhLahTHnN9Dhh2hDdoYza4N92MPxXt2mmtQkSRto95aBge4KvOI9gUxUv2QDCyjkVaDvCZpQqQVOpnlwmOW8GONrbbi34Furr7w9thFZ9wwOjJRmJ%2BR3k7ePExvHmlwlH9nppjCdGgXbS8jXjEyJeOBKpmMnkotBWKlprRVexONYFvMsbuhEc3%2F4Xl8rR6A7u6qE2NtlNCwZqgAXKHuH8Qsc1DEjULr7ylfiF6BlLyKNrlHJSAPB%2F2TQaLs8VJ3FQSCqdQzO7GrPbn7V9c4%2BeoXgZimz6b3sGXqvpXn5p%2B1XBHR9qkkBdJ4xUp1oV77b6gtdDUXeCbfNcODvLjXnokhijwGxULQvRWahT5%2B85%2BS9C2DIJPPR3FL0lPOs8Ol7lTDlx62fawCv1EqjFSWjDsuMrBBjqkAUAPz9Z2I9PKYYu%2F%2BTXge%2FuUM92v8dATaL%2FzJONrlvSiF2NDnEkP42jjC8D9sWGTwWgbeq5kzNEp%2FwRy6MmrHi5N%2Blg33Yym8SmvhUgcsjXsYo70cvH0f%2FR5W9bwXs1U0q6pEkSznI7ps5Wo%2FfSMAkVYEGgMui%2F%2Fu7WG29F5Qmqpe0xw807v%2FTeAas0NUPML4yyymYYw95MHiCMPqUaNuy1oagvE&X-Amz-Signature=3a19b9176bb69954fa7c081b1113e09213d8189fd5203e154a66998a5bd2b551&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

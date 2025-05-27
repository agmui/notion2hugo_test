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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK35CERJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt3X1n0N8O6SKSOHt8ofJKphNxdGkerp6d8iuaTjcp5AiEA2vED0zKWXzieoP2AqhkKBSDIl2PR6grEgRXeiT0wlrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJS9QT9KAPbtxopVJCrcA07fnhQYrUBfsGhftANoP5jSQuB0j%2B%2F8PW2sZbl5b4f9ZWyQFHHgrQEIVV6mFfo1PGIwcVtwd3p6zOcx0OyHPN5H7gcXDhTX%2Boai4RckA%2FQjuTSyRNtpljXedQiVAzC0yxKRkYgZQYVfV66DjblVyFVcpTaf8Rh1TX1acKwUZ9VbbhkzMyXSa1SB7xIfRtUbMXC27F6hJVzUd4pAWWkZHyZNRrMhwN2pEUcJBXQBn%2FMsAfuc8EkvnnIYXCM5IteTPpvHOt9Q1JQ5BVMkqT6JfZuKEYQFP7J8lHo6xjU8XlwwzmyEJMJfgn0LRbk5WgghwAgNYkur78klCOVNMp9ZLW0jPwhm1Xgs%2BEezFOlApx74vurqDkxReEZSx6TCqc5cNrihccZoMzbUO22ZnOAVy0Tf05exW1Omb6M%2FmTnSCSmRCPcXUBsPqu08sqJAl1j8ynp48ZJg1sob3y0h1wflZX2GGHv0Us3yfuvCl22LEO3mdmg5%2FDeYALXpI4y1xhuBFuHBwf4wP0svBKU7SXn8f%2F1lceTcvg0O54q6a8D5DzL5VdmT4akupUqK9xm8io%2F4vCASNAOfRJuMypEQDm%2Bb6AwCF8FJxIqE1uxDNSAJT9zp6Lz8CelhhgjrdZRmMP381sEGOqUB7QA%2FXVwi%2BTCvu8fmVX3Skp9k57WU3Mn5YkUlDkQLc4FOGXOdgBUHgB7u%2Bjwwxf0IBQnsBPT4J7UpuBAT3cXiWXmakWfBtUqR3jxVGkMdSsghY4yPwvVTuu5r8p2RGYNl5Ve79A7yX%2BwMLLCP67MayG3pvDzjT5iFq6vmptzhz3yx9itq7J%2B51Phnm3%2FtXqhXxugOF4Q9kTOhyk3mjlila2FYXznr&X-Amz-Signature=e53a456350b7a34fb70e813ef44c682f10a8aa2a4814fd751c0df9b2a065658e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK35CERJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt3X1n0N8O6SKSOHt8ofJKphNxdGkerp6d8iuaTjcp5AiEA2vED0zKWXzieoP2AqhkKBSDIl2PR6grEgRXeiT0wlrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJS9QT9KAPbtxopVJCrcA07fnhQYrUBfsGhftANoP5jSQuB0j%2B%2F8PW2sZbl5b4f9ZWyQFHHgrQEIVV6mFfo1PGIwcVtwd3p6zOcx0OyHPN5H7gcXDhTX%2Boai4RckA%2FQjuTSyRNtpljXedQiVAzC0yxKRkYgZQYVfV66DjblVyFVcpTaf8Rh1TX1acKwUZ9VbbhkzMyXSa1SB7xIfRtUbMXC27F6hJVzUd4pAWWkZHyZNRrMhwN2pEUcJBXQBn%2FMsAfuc8EkvnnIYXCM5IteTPpvHOt9Q1JQ5BVMkqT6JfZuKEYQFP7J8lHo6xjU8XlwwzmyEJMJfgn0LRbk5WgghwAgNYkur78klCOVNMp9ZLW0jPwhm1Xgs%2BEezFOlApx74vurqDkxReEZSx6TCqc5cNrihccZoMzbUO22ZnOAVy0Tf05exW1Omb6M%2FmTnSCSmRCPcXUBsPqu08sqJAl1j8ynp48ZJg1sob3y0h1wflZX2GGHv0Us3yfuvCl22LEO3mdmg5%2FDeYALXpI4y1xhuBFuHBwf4wP0svBKU7SXn8f%2F1lceTcvg0O54q6a8D5DzL5VdmT4akupUqK9xm8io%2F4vCASNAOfRJuMypEQDm%2Bb6AwCF8FJxIqE1uxDNSAJT9zp6Lz8CelhhgjrdZRmMP381sEGOqUB7QA%2FXVwi%2BTCvu8fmVX3Skp9k57WU3Mn5YkUlDkQLc4FOGXOdgBUHgB7u%2Bjwwxf0IBQnsBPT4J7UpuBAT3cXiWXmakWfBtUqR3jxVGkMdSsghY4yPwvVTuu5r8p2RGYNl5Ve79A7yX%2BwMLLCP67MayG3pvDzjT5iFq6vmptzhz3yx9itq7J%2B51Phnm3%2FtXqhXxugOF4Q9kTOhyk3mjlila2FYXznr&X-Amz-Signature=5c67e164d5e2ac29e1dd692d48edaa20e194df10466a1229620022dd308f8532&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK35CERJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T170809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBt3X1n0N8O6SKSOHt8ofJKphNxdGkerp6d8iuaTjcp5AiEA2vED0zKWXzieoP2AqhkKBSDIl2PR6grEgRXeiT0wlrAq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJS9QT9KAPbtxopVJCrcA07fnhQYrUBfsGhftANoP5jSQuB0j%2B%2F8PW2sZbl5b4f9ZWyQFHHgrQEIVV6mFfo1PGIwcVtwd3p6zOcx0OyHPN5H7gcXDhTX%2Boai4RckA%2FQjuTSyRNtpljXedQiVAzC0yxKRkYgZQYVfV66DjblVyFVcpTaf8Rh1TX1acKwUZ9VbbhkzMyXSa1SB7xIfRtUbMXC27F6hJVzUd4pAWWkZHyZNRrMhwN2pEUcJBXQBn%2FMsAfuc8EkvnnIYXCM5IteTPpvHOt9Q1JQ5BVMkqT6JfZuKEYQFP7J8lHo6xjU8XlwwzmyEJMJfgn0LRbk5WgghwAgNYkur78klCOVNMp9ZLW0jPwhm1Xgs%2BEezFOlApx74vurqDkxReEZSx6TCqc5cNrihccZoMzbUO22ZnOAVy0Tf05exW1Omb6M%2FmTnSCSmRCPcXUBsPqu08sqJAl1j8ynp48ZJg1sob3y0h1wflZX2GGHv0Us3yfuvCl22LEO3mdmg5%2FDeYALXpI4y1xhuBFuHBwf4wP0svBKU7SXn8f%2F1lceTcvg0O54q6a8D5DzL5VdmT4akupUqK9xm8io%2F4vCASNAOfRJuMypEQDm%2Bb6AwCF8FJxIqE1uxDNSAJT9zp6Lz8CelhhgjrdZRmMP381sEGOqUB7QA%2FXVwi%2BTCvu8fmVX3Skp9k57WU3Mn5YkUlDkQLc4FOGXOdgBUHgB7u%2Bjwwxf0IBQnsBPT4J7UpuBAT3cXiWXmakWfBtUqR3jxVGkMdSsghY4yPwvVTuu5r8p2RGYNl5Ve79A7yX%2BwMLLCP67MayG3pvDzjT5iFq6vmptzhz3yx9itq7J%2B51Phnm3%2FtXqhXxugOF4Q9kTOhyk3mjlila2FYXznr&X-Amz-Signature=b7eeaaa048a645ad389731f24907459a7df27c6b94b8f2dba8072bc91394a48b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

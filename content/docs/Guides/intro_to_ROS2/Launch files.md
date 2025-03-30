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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JBNGVST%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDKYQaB1cRrUoi3Ki7ULHmBkjZqGLFNK50zcxDe5aIXAwIhAN7hCkOcpAjJo4omea5KWklR5yoqZxDVCL8Qxn8i1YfSKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLMCobupmPPu1sQ5Qq3ANJnptqGuY8FiIOoSVKWb9SvnIAFp6gh2lc3P8fjVomPA6cWvtjP%2BVY7DkNhW2xwMFKYMPTVGn34RNsusyxxWyxAZNXYYpT2JKdri84qCa5PQCUwtZAQVxRYBICKcrSqgdmymw1WMbVkU4bmla7Q1bPlKNmAY%2Bq10oUrmxTxwUKdyV9tDs4NU2MaOTp8JC1zJleoT9YND3mNd31od1LEiWhxV50MTiyMW%2BdYLvquCpbN6QRRftlxP%2FjzH%2F%2Fi3mq9HGotSqyt9CsXsxZbT1X%2Bs1%2FdQDYOLD70UvE%2ByL6hVOjNcot7O6KmZ3cVzfeXWtzboyThrXWC4TQu5Fkqn9MzNz65lGtsmbl0iKzH1wLdG4XQMXf1xoO443tkm6f8B0RSmIX0tNrekoTPnR0xz%2BXQqnIOkKEmM5Ko4thBv4eBuXwMEF0cG%2FU918OGGqeKNyKHEbiyczAIapp02hFuBejYUkJrpinfzoqfokJcK%2Fn8xfxb5i%2FIsJfQyS7r8tV7EYbSb9JIXJqVZpzkgDII9btB5zanEJPBUawiDWCPJXuqf1nczZaa%2B59rULkoHuIWTZop1Cgnyg36iaFn0e8%2BfUMDY3axpp0ejrjYk%2BkohZokQ%2Bjc%2B4W0r99L2%2F01sFxCDDr6aK%2FBjqkAanyWhDl8vg%2BSfsAvCOb4lcR6LDcPo2St8w4iPHcK0z6MjLxF7aGg5GkkAXLoSScqET7yk%2Bo20Ql66yRrikAo9oE5VGwkJ7CjJhbtt8WFIBQubxIIY8vtmcam0GzLkkt3vYTb5ILT5kkWtAnl3eLyaiTrERolv5pv3MHt15ckNwVtuAn1Of5A90VrAD1IMc6pOTmm%2BIlWdLIV8%2FVW4WXIGJPfLR3&X-Amz-Signature=40521cf39257de363106b179d03726fe7830bb1a528c30004697d17fcfd0af28&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JBNGVST%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDKYQaB1cRrUoi3Ki7ULHmBkjZqGLFNK50zcxDe5aIXAwIhAN7hCkOcpAjJo4omea5KWklR5yoqZxDVCL8Qxn8i1YfSKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLMCobupmPPu1sQ5Qq3ANJnptqGuY8FiIOoSVKWb9SvnIAFp6gh2lc3P8fjVomPA6cWvtjP%2BVY7DkNhW2xwMFKYMPTVGn34RNsusyxxWyxAZNXYYpT2JKdri84qCa5PQCUwtZAQVxRYBICKcrSqgdmymw1WMbVkU4bmla7Q1bPlKNmAY%2Bq10oUrmxTxwUKdyV9tDs4NU2MaOTp8JC1zJleoT9YND3mNd31od1LEiWhxV50MTiyMW%2BdYLvquCpbN6QRRftlxP%2FjzH%2F%2Fi3mq9HGotSqyt9CsXsxZbT1X%2Bs1%2FdQDYOLD70UvE%2ByL6hVOjNcot7O6KmZ3cVzfeXWtzboyThrXWC4TQu5Fkqn9MzNz65lGtsmbl0iKzH1wLdG4XQMXf1xoO443tkm6f8B0RSmIX0tNrekoTPnR0xz%2BXQqnIOkKEmM5Ko4thBv4eBuXwMEF0cG%2FU918OGGqeKNyKHEbiyczAIapp02hFuBejYUkJrpinfzoqfokJcK%2Fn8xfxb5i%2FIsJfQyS7r8tV7EYbSb9JIXJqVZpzkgDII9btB5zanEJPBUawiDWCPJXuqf1nczZaa%2B59rULkoHuIWTZop1Cgnyg36iaFn0e8%2BfUMDY3axpp0ejrjYk%2BkohZokQ%2Bjc%2B4W0r99L2%2F01sFxCDDr6aK%2FBjqkAanyWhDl8vg%2BSfsAvCOb4lcR6LDcPo2St8w4iPHcK0z6MjLxF7aGg5GkkAXLoSScqET7yk%2Bo20Ql66yRrikAo9oE5VGwkJ7CjJhbtt8WFIBQubxIIY8vtmcam0GzLkkt3vYTb5ILT5kkWtAnl3eLyaiTrERolv5pv3MHt15ckNwVtuAn1Of5A90VrAD1IMc6pOTmm%2BIlWdLIV8%2FVW4WXIGJPfLR3&X-Amz-Signature=15bcc5a25075e0a5a1ebad5a5cee6f039be3abdecb0a95fdd137b0e4a28e3079&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JBNGVST%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQDKYQaB1cRrUoi3Ki7ULHmBkjZqGLFNK50zcxDe5aIXAwIhAN7hCkOcpAjJo4omea5KWklR5yoqZxDVCL8Qxn8i1YfSKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLMCobupmPPu1sQ5Qq3ANJnptqGuY8FiIOoSVKWb9SvnIAFp6gh2lc3P8fjVomPA6cWvtjP%2BVY7DkNhW2xwMFKYMPTVGn34RNsusyxxWyxAZNXYYpT2JKdri84qCa5PQCUwtZAQVxRYBICKcrSqgdmymw1WMbVkU4bmla7Q1bPlKNmAY%2Bq10oUrmxTxwUKdyV9tDs4NU2MaOTp8JC1zJleoT9YND3mNd31od1LEiWhxV50MTiyMW%2BdYLvquCpbN6QRRftlxP%2FjzH%2F%2Fi3mq9HGotSqyt9CsXsxZbT1X%2Bs1%2FdQDYOLD70UvE%2ByL6hVOjNcot7O6KmZ3cVzfeXWtzboyThrXWC4TQu5Fkqn9MzNz65lGtsmbl0iKzH1wLdG4XQMXf1xoO443tkm6f8B0RSmIX0tNrekoTPnR0xz%2BXQqnIOkKEmM5Ko4thBv4eBuXwMEF0cG%2FU918OGGqeKNyKHEbiyczAIapp02hFuBejYUkJrpinfzoqfokJcK%2Fn8xfxb5i%2FIsJfQyS7r8tV7EYbSb9JIXJqVZpzkgDII9btB5zanEJPBUawiDWCPJXuqf1nczZaa%2B59rULkoHuIWTZop1Cgnyg36iaFn0e8%2BfUMDY3axpp0ejrjYk%2BkohZokQ%2Bjc%2B4W0r99L2%2F01sFxCDDr6aK%2FBjqkAanyWhDl8vg%2BSfsAvCOb4lcR6LDcPo2St8w4iPHcK0z6MjLxF7aGg5GkkAXLoSScqET7yk%2Bo20Ql66yRrikAo9oE5VGwkJ7CjJhbtt8WFIBQubxIIY8vtmcam0GzLkkt3vYTb5ILT5kkWtAnl3eLyaiTrERolv5pv3MHt15ckNwVtuAn1Of5A90VrAD1IMc6pOTmm%2BIlWdLIV8%2FVW4WXIGJPfLR3&X-Amz-Signature=81d1f8e5bfb8aacbcae82d6c744206245a2996dd9e895303dbc50f6396bccff8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

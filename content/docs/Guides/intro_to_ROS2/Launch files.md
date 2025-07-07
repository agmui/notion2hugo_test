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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZT4FFXD%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCLq7ASdLuPs8NOtYuFXG9%2Ftth3KNJ0Jm8Na6EO4DiBUQIhAIYPL%2FXTLZC7%2B62TstQo0QIWMv6xVHDPscxs4pEr48BAKv8DCGkQABoMNjM3NDIzMTgzODA1IgydDc%2FDrGHw8LlWpB0q3AMRSV8N8uhkFsjPhbSsvM9gW0U1oKeuiww6%2BmxuQClXRjShB5Pr%2Fi1nKRHamw0wR2IHWoXLMPQwycStuY%2FS9iFz4%2B8Qephl8sLeY20qEgeHBeSXgo5hzUyu93MVoVts9eeMStDt%2FkMyYESaz%2BrkLsb5hGTu0BOk%2B9lu8XyWF1aN%2FHxJnSP4t0U1xDwfXkOAgizjZ0HMYx%2BoAGZNtAgUsVNCkNRR0zm49I1Q4igWq1mOzwM7%2BD2YuszK1PfVo0HwCS4D1itbrDXPKcGrxH10iHvAKPVgyj3Q%2BK3oUHxP3Ml3JFSFigBZm7rJs15diH%2BgR7tiNzvuLIb1sf2tK4xmZvRStn5RLKvAiHwL1mOi%2BOWJwCK3UYGTo%2Fdq680%2F0BtvaLYhZVo7YMqglEka5KmGOLvTs9OsNaYYFmUSJPTIFmgc0NTwM%2F47p8GAq%2F7T2wcP67akJ%2FcmrGAJPD4WT%2FI5yAPkZK9C0dhNAVJSyabZ1wNjQS%2Fk0iy5WUnmu2uTQ6RbHm%2BHj03knpeBkvNZWedBa8DUb6Ox5QOq5lVd7jpc%2Fhu0qEVpcU3kA%2B9z1yHjDsqOya5ZIRb%2BLubmwfi%2FWnMnAy7WxMue15gbfsUmlmNTxhrUZteUpyXhTp0M8BkhazCXkqzDBjqkAdE7kcF4Uq98aHJaOQKmUvGmuqJsQp0zdGwSKViOcqPRSYUVcCUNIXzsVsk41uJkok3PkKmqCkoQJ5iKZ84ZRJubvLbapzmqlsUkYZSmaJXSXHvYp%2B%2Fw22JWLQqsreaW328DGZffZ2QPJOXeNbzIYrVRAKBOKao6c9CJxHX53H82ZPsdnlAn%2FVg%2FZp1YD1ButUBDThgbCmdcL8BDQum91fcgUF1x&X-Amz-Signature=a54de6c6b1e4be3bd05c50e6e19977d5e7e6f610ff63412d60a13a5908641fcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZT4FFXD%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCLq7ASdLuPs8NOtYuFXG9%2Ftth3KNJ0Jm8Na6EO4DiBUQIhAIYPL%2FXTLZC7%2B62TstQo0QIWMv6xVHDPscxs4pEr48BAKv8DCGkQABoMNjM3NDIzMTgzODA1IgydDc%2FDrGHw8LlWpB0q3AMRSV8N8uhkFsjPhbSsvM9gW0U1oKeuiww6%2BmxuQClXRjShB5Pr%2Fi1nKRHamw0wR2IHWoXLMPQwycStuY%2FS9iFz4%2B8Qephl8sLeY20qEgeHBeSXgo5hzUyu93MVoVts9eeMStDt%2FkMyYESaz%2BrkLsb5hGTu0BOk%2B9lu8XyWF1aN%2FHxJnSP4t0U1xDwfXkOAgizjZ0HMYx%2BoAGZNtAgUsVNCkNRR0zm49I1Q4igWq1mOzwM7%2BD2YuszK1PfVo0HwCS4D1itbrDXPKcGrxH10iHvAKPVgyj3Q%2BK3oUHxP3Ml3JFSFigBZm7rJs15diH%2BgR7tiNzvuLIb1sf2tK4xmZvRStn5RLKvAiHwL1mOi%2BOWJwCK3UYGTo%2Fdq680%2F0BtvaLYhZVo7YMqglEka5KmGOLvTs9OsNaYYFmUSJPTIFmgc0NTwM%2F47p8GAq%2F7T2wcP67akJ%2FcmrGAJPD4WT%2FI5yAPkZK9C0dhNAVJSyabZ1wNjQS%2Fk0iy5WUnmu2uTQ6RbHm%2BHj03knpeBkvNZWedBa8DUb6Ox5QOq5lVd7jpc%2Fhu0qEVpcU3kA%2B9z1yHjDsqOya5ZIRb%2BLubmwfi%2FWnMnAy7WxMue15gbfsUmlmNTxhrUZteUpyXhTp0M8BkhazCXkqzDBjqkAdE7kcF4Uq98aHJaOQKmUvGmuqJsQp0zdGwSKViOcqPRSYUVcCUNIXzsVsk41uJkok3PkKmqCkoQJ5iKZ84ZRJubvLbapzmqlsUkYZSmaJXSXHvYp%2B%2Fw22JWLQqsreaW328DGZffZ2QPJOXeNbzIYrVRAKBOKao6c9CJxHX53H82ZPsdnlAn%2FVg%2FZp1YD1ButUBDThgbCmdcL8BDQum91fcgUF1x&X-Amz-Signature=d193d489d25db2b2179f9d5315dd4b63fac8573edc3f9f7910a06c3f6b540cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZT4FFXD%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T024740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCLq7ASdLuPs8NOtYuFXG9%2Ftth3KNJ0Jm8Na6EO4DiBUQIhAIYPL%2FXTLZC7%2B62TstQo0QIWMv6xVHDPscxs4pEr48BAKv8DCGkQABoMNjM3NDIzMTgzODA1IgydDc%2FDrGHw8LlWpB0q3AMRSV8N8uhkFsjPhbSsvM9gW0U1oKeuiww6%2BmxuQClXRjShB5Pr%2Fi1nKRHamw0wR2IHWoXLMPQwycStuY%2FS9iFz4%2B8Qephl8sLeY20qEgeHBeSXgo5hzUyu93MVoVts9eeMStDt%2FkMyYESaz%2BrkLsb5hGTu0BOk%2B9lu8XyWF1aN%2FHxJnSP4t0U1xDwfXkOAgizjZ0HMYx%2BoAGZNtAgUsVNCkNRR0zm49I1Q4igWq1mOzwM7%2BD2YuszK1PfVo0HwCS4D1itbrDXPKcGrxH10iHvAKPVgyj3Q%2BK3oUHxP3Ml3JFSFigBZm7rJs15diH%2BgR7tiNzvuLIb1sf2tK4xmZvRStn5RLKvAiHwL1mOi%2BOWJwCK3UYGTo%2Fdq680%2F0BtvaLYhZVo7YMqglEka5KmGOLvTs9OsNaYYFmUSJPTIFmgc0NTwM%2F47p8GAq%2F7T2wcP67akJ%2FcmrGAJPD4WT%2FI5yAPkZK9C0dhNAVJSyabZ1wNjQS%2Fk0iy5WUnmu2uTQ6RbHm%2BHj03knpeBkvNZWedBa8DUb6Ox5QOq5lVd7jpc%2Fhu0qEVpcU3kA%2B9z1yHjDsqOya5ZIRb%2BLubmwfi%2FWnMnAy7WxMue15gbfsUmlmNTxhrUZteUpyXhTp0M8BkhazCXkqzDBjqkAdE7kcF4Uq98aHJaOQKmUvGmuqJsQp0zdGwSKViOcqPRSYUVcCUNIXzsVsk41uJkok3PkKmqCkoQJ5iKZ84ZRJubvLbapzmqlsUkYZSmaJXSXHvYp%2B%2Fw22JWLQqsreaW328DGZffZ2QPJOXeNbzIYrVRAKBOKao6c9CJxHX53H82ZPsdnlAn%2FVg%2FZp1YD1ButUBDThgbCmdcL8BDQum91fcgUF1x&X-Amz-Signature=739a07f81d1ecb8f0ec58487306f82d059a80c0a86c94bebe0240aa4b01ed096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

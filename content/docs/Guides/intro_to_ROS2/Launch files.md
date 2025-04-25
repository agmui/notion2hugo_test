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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGPQU2CC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmxop3OjHuZazvd8iCHWh%2FVXHG7xJlncfGvD0zszas6AiAK9H44iei6uWfTmeJ0Fg1KXLE9hEfTc1d0gF98mJ5Biir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMSrmX79tsOHxJdulqKtwDVE%2BkBUatj36wOC1tgGcxI33FPc7NazcjhXDx6%2Fb1%2Fgc6mCwn6u335WblW3Xd2B3TyzljSpqSU568moPNXbGxFDzKcPhWaNUy1pPmAbQ5LjGLsCYNFNIiciPad32wy7pbse7tQUJ82S30TErX7STg7gEuREV7iwRrKmJzsR1Cx1afwdPMG0zM%2FMmpar%2BmAYoHDT%2Boe3UD92YVggYPWvbtgHwq4n%2Fu9XMudrD96h4IXTaySZYLdkIGMv%2FXdqmaXGIgY%2BVc48Mg560qAfbs%2FyO4O5DmRI7YCO1iB%2BCP%2BbK1lnutmFYGhK5HPeemxAtCi%2BX2HoowHVbkmY4oRv%2F1kbmhb7pF03a0V43kCQCRsZISBROM3wLWwZd1%2FM93B9NnN6vkA0%2Foht4cqIApoIan6kvVDogVnLN664B0nzbX9Ro8j50tsYgwhJvvvcEwjemuZ0ppQynfXiUlUBE753iKFcXWTix%2BaYZryGX3SFtGSMhLZ8eiMYyL%2Br6pWN3l%2B47FOwh9tLPb8PUocMmHXCWwS5FalQezgAIZ3DI%2FHxQ6%2B%2B43B4hMYJqkF70Rq2xTTP8FQ5PRiS2qMvoDd18M0TaG6ENZiKd7DcIRKzhehYkVFkq7zWT9y3nsc84qe6w9NRgw68yuwAY6pgHXrVLCfSvSI1Ljfq3q0oLKj%2FGEKv2%2Fiic9x62XkyTSUrf4mflStOyCOsL90YZjo0sjtWCDfkT%2BanpJGspYSu59492gXbiDS8V1NZ4ULpBdFF%2ByAG3DlSFaljFtLAxLoeY4I6zh0AvzLw4z94%2FiI5fvA%2BmFChcbcb5w%2FTHg%2BK1HW1ar0DJH%2FOfAcEXWpH4pCwBK%2BvdsCbiV062Ra3r5FRsidb6%2FQz%2BW&X-Amz-Signature=b4ec56df4d42eac27ed20654cd946a03c259fffdc4f5ffab8c824c9c3f4875c6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGPQU2CC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmxop3OjHuZazvd8iCHWh%2FVXHG7xJlncfGvD0zszas6AiAK9H44iei6uWfTmeJ0Fg1KXLE9hEfTc1d0gF98mJ5Biir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMSrmX79tsOHxJdulqKtwDVE%2BkBUatj36wOC1tgGcxI33FPc7NazcjhXDx6%2Fb1%2Fgc6mCwn6u335WblW3Xd2B3TyzljSpqSU568moPNXbGxFDzKcPhWaNUy1pPmAbQ5LjGLsCYNFNIiciPad32wy7pbse7tQUJ82S30TErX7STg7gEuREV7iwRrKmJzsR1Cx1afwdPMG0zM%2FMmpar%2BmAYoHDT%2Boe3UD92YVggYPWvbtgHwq4n%2Fu9XMudrD96h4IXTaySZYLdkIGMv%2FXdqmaXGIgY%2BVc48Mg560qAfbs%2FyO4O5DmRI7YCO1iB%2BCP%2BbK1lnutmFYGhK5HPeemxAtCi%2BX2HoowHVbkmY4oRv%2F1kbmhb7pF03a0V43kCQCRsZISBROM3wLWwZd1%2FM93B9NnN6vkA0%2Foht4cqIApoIan6kvVDogVnLN664B0nzbX9Ro8j50tsYgwhJvvvcEwjemuZ0ppQynfXiUlUBE753iKFcXWTix%2BaYZryGX3SFtGSMhLZ8eiMYyL%2Br6pWN3l%2B47FOwh9tLPb8PUocMmHXCWwS5FalQezgAIZ3DI%2FHxQ6%2B%2B43B4hMYJqkF70Rq2xTTP8FQ5PRiS2qMvoDd18M0TaG6ENZiKd7DcIRKzhehYkVFkq7zWT9y3nsc84qe6w9NRgw68yuwAY6pgHXrVLCfSvSI1Ljfq3q0oLKj%2FGEKv2%2Fiic9x62XkyTSUrf4mflStOyCOsL90YZjo0sjtWCDfkT%2BanpJGspYSu59492gXbiDS8V1NZ4ULpBdFF%2ByAG3DlSFaljFtLAxLoeY4I6zh0AvzLw4z94%2FiI5fvA%2BmFChcbcb5w%2FTHg%2BK1HW1ar0DJH%2FOfAcEXWpH4pCwBK%2BvdsCbiV062Ra3r5FRsidb6%2FQz%2BW&X-Amz-Signature=76ffd6696e92c9e963704d346087f02cf5c8c73fb137cad782dde23c5258cb99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGPQU2CC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T161022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmxop3OjHuZazvd8iCHWh%2FVXHG7xJlncfGvD0zszas6AiAK9H44iei6uWfTmeJ0Fg1KXLE9hEfTc1d0gF98mJ5Biir%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMSrmX79tsOHxJdulqKtwDVE%2BkBUatj36wOC1tgGcxI33FPc7NazcjhXDx6%2Fb1%2Fgc6mCwn6u335WblW3Xd2B3TyzljSpqSU568moPNXbGxFDzKcPhWaNUy1pPmAbQ5LjGLsCYNFNIiciPad32wy7pbse7tQUJ82S30TErX7STg7gEuREV7iwRrKmJzsR1Cx1afwdPMG0zM%2FMmpar%2BmAYoHDT%2Boe3UD92YVggYPWvbtgHwq4n%2Fu9XMudrD96h4IXTaySZYLdkIGMv%2FXdqmaXGIgY%2BVc48Mg560qAfbs%2FyO4O5DmRI7YCO1iB%2BCP%2BbK1lnutmFYGhK5HPeemxAtCi%2BX2HoowHVbkmY4oRv%2F1kbmhb7pF03a0V43kCQCRsZISBROM3wLWwZd1%2FM93B9NnN6vkA0%2Foht4cqIApoIan6kvVDogVnLN664B0nzbX9Ro8j50tsYgwhJvvvcEwjemuZ0ppQynfXiUlUBE753iKFcXWTix%2BaYZryGX3SFtGSMhLZ8eiMYyL%2Br6pWN3l%2B47FOwh9tLPb8PUocMmHXCWwS5FalQezgAIZ3DI%2FHxQ6%2B%2B43B4hMYJqkF70Rq2xTTP8FQ5PRiS2qMvoDd18M0TaG6ENZiKd7DcIRKzhehYkVFkq7zWT9y3nsc84qe6w9NRgw68yuwAY6pgHXrVLCfSvSI1Ljfq3q0oLKj%2FGEKv2%2Fiic9x62XkyTSUrf4mflStOyCOsL90YZjo0sjtWCDfkT%2BanpJGspYSu59492gXbiDS8V1NZ4ULpBdFF%2ByAG3DlSFaljFtLAxLoeY4I6zh0AvzLw4z94%2FiI5fvA%2BmFChcbcb5w%2FTHg%2BK1HW1ar0DJH%2FOfAcEXWpH4pCwBK%2BvdsCbiV062Ra3r5FRsidb6%2FQz%2BW&X-Amz-Signature=aaad5f05c35def2e66146d67f91475d072d8daaab6e4343c811e79d911d1e7ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber

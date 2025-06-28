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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HJU25Y%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5DXzIltApFe64E9uzPi%2F5%2BIPAxNP69%2F4szYlz%2FM5ErAiA%2FadFrYSJ9eIWWRXeXafnAuwiPJgfdpkwlaV%2FPrR9XFSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMcpC7bKsVRsqEihZKtwDWsJQzHDxvWCkH1vex5riPCDTmPCRkr1uot8Jlgi9BZRqhjRonS841SVE4U5MyMWeEbr7dZqiS%2Bgs2JAewM5hR2bBc50gu4WtHI0A3MVz%2FG7mJxedBVSU%2BR8RfC3w2r8GBuXyeMZnOLvtNqixPeE70CYIQxJ6rVNbKkKuHEWGw7EBASUetA0TVsyoGLxMZ9YmulTWMpyusKpdNVBCJ6PnK3I%2Fn6UGd6CfiBdn%2FhYbdd%2B4Ye4rZkvBNd8cKADu9ZERNf9HmGff68rRzRT3hiUopSTD63Y4KFQteIsIOq5VDWbqTy0i9GrJ%2FfBI2ELdlOWQYMu8SWzi1ZFV4s%2FZB1Hd5huj9gc6YK1j49xvJU9MiyDBTwqrfuLuigsHeA0J30I2yhjAgaRQuZ6G1xTNMbvgJL%2FFnhCeJ6ODik%2BaZ7mUvoL5wYGcd9Q2vxSZD303hxl2EJv5uiu3Br3E3JKwYNq6ZFtc3QS3aSNxyIoxcrYo7NQ8svBMPLU6XxprXnYirWfecBde0M%2FU8iYdoimBOS3C%2Fd7tC5Ohh427kX1KGb4PnDsZ8dTeD0Ag08RtKrYugxbTtaZmFrjuDOiBpr%2F9vfvT5sBxCFvWEqvtrclMAw8IKQ%2B2BpX9YLGztOb3cCYw%2BJD%2FwgY6pgFd4EtIu7supqieaHX2qB1Q9b8OsvTQTvhC7ir6vKyqz9i2Z4P54nOxNAKBsgfGdOQaRhUDbseyytAPlCrFYuE4jATPKUKP31c9NkfN4Oc2ifMard%2BQX7TrTKVXhveAxvxUPe6Zjm%2BSHFFheKSl7cFeHfMCHqvD6eQjPODhbb3XUDvTZCneTFrqBi7C1bJNzvbpIoxNnXmxg6ObSJ00zeng%2B3C0OQyG&X-Amz-Signature=652408f346e61f0e94a85772754709d7e0e38fbbb85153ebe9f2677e2ecf3b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HJU25Y%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5DXzIltApFe64E9uzPi%2F5%2BIPAxNP69%2F4szYlz%2FM5ErAiA%2FadFrYSJ9eIWWRXeXafnAuwiPJgfdpkwlaV%2FPrR9XFSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMcpC7bKsVRsqEihZKtwDWsJQzHDxvWCkH1vex5riPCDTmPCRkr1uot8Jlgi9BZRqhjRonS841SVE4U5MyMWeEbr7dZqiS%2Bgs2JAewM5hR2bBc50gu4WtHI0A3MVz%2FG7mJxedBVSU%2BR8RfC3w2r8GBuXyeMZnOLvtNqixPeE70CYIQxJ6rVNbKkKuHEWGw7EBASUetA0TVsyoGLxMZ9YmulTWMpyusKpdNVBCJ6PnK3I%2Fn6UGd6CfiBdn%2FhYbdd%2B4Ye4rZkvBNd8cKADu9ZERNf9HmGff68rRzRT3hiUopSTD63Y4KFQteIsIOq5VDWbqTy0i9GrJ%2FfBI2ELdlOWQYMu8SWzi1ZFV4s%2FZB1Hd5huj9gc6YK1j49xvJU9MiyDBTwqrfuLuigsHeA0J30I2yhjAgaRQuZ6G1xTNMbvgJL%2FFnhCeJ6ODik%2BaZ7mUvoL5wYGcd9Q2vxSZD303hxl2EJv5uiu3Br3E3JKwYNq6ZFtc3QS3aSNxyIoxcrYo7NQ8svBMPLU6XxprXnYirWfecBde0M%2FU8iYdoimBOS3C%2Fd7tC5Ohh427kX1KGb4PnDsZ8dTeD0Ag08RtKrYugxbTtaZmFrjuDOiBpr%2F9vfvT5sBxCFvWEqvtrclMAw8IKQ%2B2BpX9YLGztOb3cCYw%2BJD%2FwgY6pgFd4EtIu7supqieaHX2qB1Q9b8OsvTQTvhC7ir6vKyqz9i2Z4P54nOxNAKBsgfGdOQaRhUDbseyytAPlCrFYuE4jATPKUKP31c9NkfN4Oc2ifMard%2BQX7TrTKVXhveAxvxUPe6Zjm%2BSHFFheKSl7cFeHfMCHqvD6eQjPODhbb3XUDvTZCneTFrqBi7C1bJNzvbpIoxNnXmxg6ObSJ00zeng%2B3C0OQyG&X-Amz-Signature=130817ebafe48c0578b268a3e1483f19346ec793e7aa6f05d9a565c886216d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3HJU25Y%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE5DXzIltApFe64E9uzPi%2F5%2BIPAxNP69%2F4szYlz%2FM5ErAiA%2FadFrYSJ9eIWWRXeXafnAuwiPJgfdpkwlaV%2FPrR9XFSqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMcpC7bKsVRsqEihZKtwDWsJQzHDxvWCkH1vex5riPCDTmPCRkr1uot8Jlgi9BZRqhjRonS841SVE4U5MyMWeEbr7dZqiS%2Bgs2JAewM5hR2bBc50gu4WtHI0A3MVz%2FG7mJxedBVSU%2BR8RfC3w2r8GBuXyeMZnOLvtNqixPeE70CYIQxJ6rVNbKkKuHEWGw7EBASUetA0TVsyoGLxMZ9YmulTWMpyusKpdNVBCJ6PnK3I%2Fn6UGd6CfiBdn%2FhYbdd%2B4Ye4rZkvBNd8cKADu9ZERNf9HmGff68rRzRT3hiUopSTD63Y4KFQteIsIOq5VDWbqTy0i9GrJ%2FfBI2ELdlOWQYMu8SWzi1ZFV4s%2FZB1Hd5huj9gc6YK1j49xvJU9MiyDBTwqrfuLuigsHeA0J30I2yhjAgaRQuZ6G1xTNMbvgJL%2FFnhCeJ6ODik%2BaZ7mUvoL5wYGcd9Q2vxSZD303hxl2EJv5uiu3Br3E3JKwYNq6ZFtc3QS3aSNxyIoxcrYo7NQ8svBMPLU6XxprXnYirWfecBde0M%2FU8iYdoimBOS3C%2Fd7tC5Ohh427kX1KGb4PnDsZ8dTeD0Ag08RtKrYugxbTtaZmFrjuDOiBpr%2F9vfvT5sBxCFvWEqvtrclMAw8IKQ%2B2BpX9YLGztOb3cCYw%2BJD%2FwgY6pgFd4EtIu7supqieaHX2qB1Q9b8OsvTQTvhC7ir6vKyqz9i2Z4P54nOxNAKBsgfGdOQaRhUDbseyytAPlCrFYuE4jATPKUKP31c9NkfN4Oc2ifMard%2BQX7TrTKVXhveAxvxUPe6Zjm%2BSHFFheKSl7cFeHfMCHqvD6eQjPODhbb3XUDvTZCneTFrqBi7C1bJNzvbpIoxNnXmxg6ObSJ00zeng%2B3C0OQyG&X-Amz-Signature=04455f9c12f8cd37e70699ea1d2ce98f1b3bdac88bf038bb6919bdc84e017ae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
